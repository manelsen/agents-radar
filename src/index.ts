/**
 * agents-radar: daily digest for AI agent tools.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildPeerPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "./prompts.ts";
import { buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import { getHighlightsFilename } from "./highlights.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { buildAgentsReportContent } from "./report-builders.ts";
import {
  saveWebReport,
  saveHnReport,
  saveArxivReport,
  saveScienceDailyReport,
  saveRoboticsReport,
  saveHackingReport,
  saveMemoryReport,
  save3dPrintingReport,
  saveSolarEnergyReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import {
  fetchScienceDailyData,
  fetchRoboticsData,
  fetchHackingData,
  fetchMemoryData,
  fetch3dPrintingData,
  fetchSolarEnergyData,
  type ScienceDailyData,
} from "./science-daily.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { MSG, ISSUE_LABELS, AGENTS_ISSUE_TITLE } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const { skillsRepo: CLAUDE_SKILLS_REPO, agents: AGENTS, agentsPeers: AGENTS_PEERS } = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  hnData: HnData;
  arxivData: ArxivData;
  scienceData: ScienceDailyData;
  roboticsData: ScienceDailyData;
  hackingData: ScienceDailyData;
  memoryData: ScienceDailyData;
  data3dPrinting: ScienceDailyData;
  solarData: ScienceDailyData;
}> {
  const allConfigs = [AGENTS, ...AGENTS_PEERS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, arxiv, science, robotics, hacking, memory, 3dprinting, solar`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    hnData,
    arxivData,
    scienceData,
    roboticsData,
    hackingData,
    memoryData,
    data3dPrinting,
    solarData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchScienceDailyData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
    fetchRoboticsData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
    fetchHackingData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
    fetchMemoryData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
    fetch3dPrintingData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
    fetchSolarEnergyData().catch((): ScienceDailyData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    hnData,
    arxivData,
    scienceData,
    roboticsData,
    hackingData,
    memoryData,
    data3dPrinting,
    solarData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedAgents: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  dateStr: string,
): Promise<{
  agentsSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
}> {
  const noActivity = MSG.noActivity.zh;
  const fail = MSG.summaryFailed.zh;

  const [agentsSummary, skillsSummary, peerDigests] = await Promise.all([
    summarizeRepo(
      fetchedAgents,
      buildPeerPrompt(
        fetchedAgents.cfg,
        fetchedAgents.issues,
        fetchedAgents.prs,
        fetchedAgents.releases,
        dateStr,
        50,
        30,
      ),
      noActivity,
      fail,
    ).then((d) => d.summary),
    summarize(
      "claude-code-skills",
      buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr),
      MSG.skillsFailed.zh,
    ),
    Promise.all(
      fetchedPeers.map((f) =>
        summarizeRepo(f, buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr), noActivity, fail),
      ),
    ),
  ]);

  return { agentsSummary, skillsSummary, peerDigests };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    hnData,
    arxivData,
    scienceData,
    roboticsData,
    hackingData,
    memoryData,
    data3dPrinting,
    solarData,
  } = await fetchAllData(since, webState);

  const peerIds = new Set(AGENTS_PEERS.map((p) => p.id));
  const fetchedAgents = fetched.find((f) => f.cfg.id === AGENTS.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries
  console.log("  Generating summaries...");
  const summaries = await generateSummaries(fetchedAgents, skillsData, fetchedPeers, dateStr);

  // 3. Generate cross-repo comparison
  console.log("  Calling LLM for comparative analysis...");
  const agentsDigest: RepoDigest = {
    config: AGENTS,
    issues: fetchedAgents.issues,
    prs: fetchedAgents.prs,
    releases: fetchedAgents.releases,
    summary: summaries.agentsSummary,
  };

  const peersComparison = await callLlm(
    buildPeersComparisonPrompt(agentsDigest, summaries.peerDigests, dateStr),
  );

  // 4. Build + save reports
  const ft = autoGenFooter();

  const agentsContent = buildAgentsReportContent(
    fetchedAgents,
    summaries.peerDigests,
    summaries.agentsSummary,
    peersComparison,
    utcStr,
    dateStr,
    ft,
    AGENTS,
    AGENTS_PEERS,
  );

  console.log(`  Saved ${saveFile(agentsContent, dateStr, "ai-agents.md")}`);

  // Web report
  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, ft);

  // External data reports
  await Promise.all([
    saveHnReport(hnData, utcStr, dateStr, digestRepo, ft),
    saveArxivReport(arxivData, utcStr, dateStr, digestRepo, ft),
    saveScienceDailyReport(scienceData, utcStr, dateStr, digestRepo, ft),
    saveRoboticsReport(roboticsData, utcStr, dateStr, digestRepo, ft),
    saveHackingReport(hackingData, utcStr, dateStr, digestRepo, ft),
    saveMemoryReport(memoryData, utcStr, dateStr, digestRepo, ft),
    save3dPrintingReport(data3dPrinting, utcStr, dateStr, digestRepo, ft),
    saveSolarEnergyReport(solarData, utcStr, dateStr, digestRepo, ft),
  ]);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const zhReports: Record<string, string> = { "ai-agents": agentsContent };
  for (const [id, file] of [
    ["ai-web", "ai-web.md"],
    ["ai-hn", "ai-hn.md"],
    ["ai-arxiv", "ai-arxiv.md"],
    ["ai-science", "ai-science.md"],
    ["ai-robotics", "ai-robotics.md"],
    ["ai-hacking", "ai-hacking.md"],
    ["ai-memory", "ai-memory.md"],
    ["ai-3dprinting", "ai-3dprinting.md"],
    ["ai-solar", "ai-solar.md"],
  ] as const) {
    const content = readReport(file);
    if (content) zhReports[id] = content;
  }

  console.log("  Generating highlights for Telegram...");
  const highlights: ReportHighlights = {};
  try {
    const raw = await callLlm(buildHighlightsPrompt(zhReports), 2048);
    const parsed = JSON.parse(
      raw
        .replace(/```json?\n?/g, "")
        .replace(/```/g, "")
        .trim(),
    );
    Object.assign(highlights, parsed);
  } catch (err) {
    console.error(`  [highlights] Generation failed: ${err}`);
  }

  const highlightsPath = saveFile(
    JSON.stringify(highlights, null, 2),
    dateStr,
    getHighlightsFilename("daily"),
  );
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issue for Agents report
  if (digestRepo) {
    const agentsUrl = await createGitHubIssue(
      AGENTS_ISSUE_TITLE(dateStr),
      agentsContent,
      ISSUE_LABELS.agents.zh,
    );
    console.log(`  Created Agents issue: ${agentsUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
