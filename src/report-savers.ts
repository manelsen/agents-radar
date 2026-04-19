/**
 * Report saver functions — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, WEB_REPORT, HN_REPORT, ARXIV_REPORT, SCIENCE_REPORT, ISSUE_LABELS } from "./i18n.ts";
import {
  buildWebReportPrompt,
  buildHnPrompt,
  buildArxivPrompt,
  buildScienceDailyPrompt,
} from "./prompts-data.ts";
import { callLlm, saveFile, LLM_TOKENS_WEB } from "./report.ts";
import { createGitHubIssue } from "./github.ts";
import { saveWebState, type WebFetchResult, type WebState } from "./web.ts";
import type { HnData } from "./hn.ts";
import type { ArxivData } from "./arxiv.ts";
import type { ScienceDailyData } from "./science-daily.ts";

// ---------------------------------------------------------------------------
// Web report
// ---------------------------------------------------------------------------

export async function saveWebReport(
  webResults: WebFetchResult[],
  webState: WebState,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);

  if (hasNewContent) {
    console.log(`  [web] Calling LLM for web content report...`);
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr, lang), LLM_TOKENS_WEB);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const anthropicNew = webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0;
      const anthropicTotal = webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0;
      const openaiNew = webResults.find((r) => r.site === "openai")?.newItems.length ?? 0;
      const openaiTotal = webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0;

      const fileName = "ai-web.md";
      const mode = isFirstRun ? WEB_REPORT.firstCrawl[lang] : WEB_REPORT.todayUpdate[lang];

      const webTitle = `# ${WEB_REPORT.title[lang]} ${dateStr}\n\n`;
      const webMeta = `> ${mode} | ${WEB_REPORT.newContent(totalNew, lang)} | ${WEB_REPORT.generated(utcStr, lang)}\n\n`;
      const webSources =
        `${WEB_REPORT.sourcesHeader[lang]}\n` +
        `- Anthropic: [anthropic.com](https://www.anthropic.com) — ${anthropicNew} novos artigos (total no sitemap: ${anthropicTotal})\n` +
        `- OpenAI: [openai.com](https://openai.com) — ${openaiNew} novos artigos (total no sitemap: ${openaiTotal})\n\n`;

      const webContent = webTitle + webMeta + webSources + `---\n\n` + webSummary + footer;

      console.log(`  Saved ${saveFile(webContent, dateStr, fileName)}`);

      if (digestRepo) {
        const issueTitle = WEB_REPORT.issueTitle(dateStr, isFirstRun, lang);
        const webLabel = ISSUE_LABELS.web[lang];
        const webUrl = await createGitHubIssue(issueTitle, webContent, webLabel);
        console.log(`  Created web issue: ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [web] Report generation failed: ${err}`);
    }
  } else {
    console.log("  [web] No new content detected, skipping report.");
  }

  if (lang === "zh") {
    saveWebState(webState);
    console.log("  [web] State saved.");
  }
}

// ---------------------------------------------------------------------------
// Hacker News report
// ---------------------------------------------------------------------------

export async function saveHnReport(
  hnData: HnData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!hnData.fetchSuccess) {
    console.log("  [hn] No data available, skipping report.");
    return;
  }

  console.log("  [hn] Calling LLM for HN report...");
  try {
    const hnSummary = await callLlm(buildHnPrompt(hnData, dateStr, lang));
    const fileName = "ai-hn.md";
    const header =
      `# ${HN_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [Hacker News](https://news.ycombinator.com/) | ` +
      `${hnData.stories.length} itens | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const hnContent = header + hnSummary + footer;

    console.log(`  Saved ${saveFile(hnContent, dateStr, fileName)}`);

    if (digestRepo) {
      const hnTitle = HN_REPORT.issueTitle(dateStr, lang);
      const hnLabel = ISSUE_LABELS.hn[lang];
      const hnUrl = await createGitHubIssue(hnTitle, hnContent, hnLabel);
      console.log(`  Created HN issue: ${hnUrl}`);
    }
  } catch (err) {
    console.error(`  [hn] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// ScienceDaily
// ---------------------------------------------------------------------------

export async function saveScienceDailyReport(
  scienceData: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!scienceData.fetchSuccess) {
    console.log("  [science] No data available, skipping report.");
    return;
  }

  console.log("  [science] Calling LLM for ScienceDaily report...");
  try {
    const summary = await callLlm(buildScienceDailyPrompt(scienceData, dateStr, lang));
    const fileName = "ai-science.md";
    const header =
      `# ${SCIENCE_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/computers_math/artificial_intelligence/) | ` +
      `${scienceData.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = SCIENCE_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.science[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created ScienceDaily issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [science] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// ArXiv report
// ---------------------------------------------------------------------------

export async function saveArxivReport(
  arxivData: ArxivData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!arxivData.fetchSuccess) {
    console.log("  [arxiv] No data available, skipping report.");
    return;
  }

  console.log("  [arxiv] Calling LLM for ArXiv report...");
  try {
    const summary = await callLlm(buildArxivPrompt(arxivData, dateStr, lang));
    const fileName = "ai-arxiv.md";
    const header =
      `# ${ARXIV_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | ` +
      `${arxivData.papers.length} artigos | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ARXIV_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.arxiv[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created ArXiv issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [arxiv] Report generation failed: ${err}`);
  }
}
