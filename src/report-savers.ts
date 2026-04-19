/**
 * Report saver functions — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import {
  type Lang,
  WEB_REPORT,
  HN_REPORT,
  ARXIV_REPORT,
  SCIENCE_REPORT,
  ROBOTICS_REPORT,
  HACKING_REPORT,
  MEMORY_REPORT,
  PRINT3D_REPORT,
  SOLAR_REPORT,
  LIVING_WELL_REPORT,
  MENTAL_HEALTH_REPORT,
  EDUCATION_REPORT,
  ENGINEERING_REPORT,
  AGRICULTURE_REPORT,
  ENVIRONMENTAL_REPORT,
  ARCHAEOLOGY_REPORT,
  SOCIAL_REPORT,
  OFFBEAT_REPORT,
  ISSUE_LABELS,
} from "./i18n.ts";
import {
  buildWebReportPrompt,
  buildHnPrompt,
  buildArxivPrompt,
  buildScienceDailyPrompt,
  buildRoboticsPrompt,
  buildHackingPrompt,
  buildMemoryPrompt,
  build3dPrintingPrompt,
  buildSolarEnergyPrompt,
  buildLivingWellPrompt,
  buildMentalHealthPrompt,
  buildEducationPrompt,
  buildEngineeringPrompt,
  buildAgriculturePrompt,
  buildEnvironmentalPrompt,
  buildArchaeologyPrompt,
  buildSocialPrompt,
  buildOffbeatPrompt,
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
// Robotics report
// ---------------------------------------------------------------------------

export async function saveRoboticsReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [robotics] No data available, skipping report.");
    return;
  }

  console.log("  [robotics] Calling LLM for Robotics report...");
  try {
    const summary = await callLlm(buildRoboticsPrompt(data, dateStr, lang));
    const fileName = "ai-robotics.md";
    const header =
      `# ${ROBOTICS_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/computers_math/robotics/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ROBOTICS_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.robotics[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Robotics issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [robotics] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Hacking report
// ---------------------------------------------------------------------------

export async function saveHackingReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [hacking] No data available, skipping report.");
    return;
  }

  console.log("  [hacking] Calling LLM for Hacking report...");
  try {
    const summary = await callLlm(buildHackingPrompt(data, dateStr, lang));
    const fileName = "ai-hacking.md";
    const header =
      `# ${HACKING_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/computers_math/hacking/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = HACKING_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.hacking[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Hacking issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [hacking] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Memory report
// ---------------------------------------------------------------------------

export async function saveMemoryReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [memory] No data available, skipping report.");
    return;
  }

  console.log("  [memory] Calling LLM for Memory report...");
  try {
    const summary = await callLlm(buildMemoryPrompt(data, dateStr, lang));
    const fileName = "ai-memory.md";
    const header =
      `# ${MEMORY_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/mind_brain/memory/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = MEMORY_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.memory[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Memory issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [memory] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// 3D Printing report
// ---------------------------------------------------------------------------

export async function save3dPrintingReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [3dprinting] No data available, skipping report.");
    return;
  }

  console.log("  [3dprinting] Calling LLM for 3D Printing report...");
  try {
    const summary = await callLlm(build3dPrintingPrompt(data, dateStr, lang));
    const fileName = "ai-3dprinting.md";
    const header =
      `# ${PRINT3D_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/matter_energy/3-d_printing/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = PRINT3D_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS["3dprinting"][lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created 3D Printing issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [3dprinting] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Solar Energy report
// ---------------------------------------------------------------------------

export async function saveSolarEnergyReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [solar] No data available, skipping report.");
    return;
  }

  console.log("  [solar] Calling LLM for Solar Energy report...");
  try {
    const summary = await callLlm(buildSolarEnergyPrompt(data, dateStr, lang));
    const fileName = "ai-solar.md";
    const header =
      `# ${SOLAR_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/matter_energy/solar_energy/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = SOLAR_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.solar[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Solar Energy issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [solar] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Living Well report
// ---------------------------------------------------------------------------

export async function saveLivingWellReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [livingwell] No data available, skipping report.");
    return;
  }

  console.log("  [livingwell] Calling LLM for Living Well report...");
  try {
    const summary = await callLlm(buildLivingWellPrompt(data, dateStr, lang));
    const fileName = "ai-livingwell.md";
    const header =
      `# ${LIVING_WELL_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/living_well/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = LIVING_WELL_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.livingwell[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Living Well issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [livingwell] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Mental Health report
// ---------------------------------------------------------------------------

export async function saveMentalHealthReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [mentalhealth] No data available, skipping report.");
    return;
  }

  console.log("  [mentalhealth] Calling LLM for Mental Health report...");
  try {
    const summary = await callLlm(buildMentalHealthPrompt(data, dateStr, lang));
    const fileName = "ai-mentalhealth.md";
    const header =
      `# ${MENTAL_HEALTH_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/mind_brain/mental_health/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = MENTAL_HEALTH_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.mentalhealth[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Mental Health issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [mentalhealth] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Education report
// ---------------------------------------------------------------------------

export async function saveEducationReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [education] No data available, skipping report.");
    return;
  }

  console.log("  [education] Calling LLM for Education report...");
  try {
    const summary = await callLlm(buildEducationPrompt(data, dateStr, lang));
    const fileName = "ai-education.md";
    const header =
      `# ${EDUCATION_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/education_learning/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = EDUCATION_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.education[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Education issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [education] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Engineering report
// ---------------------------------------------------------------------------

export async function saveEngineeringReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [engineering] No data available, skipping report.");
    return;
  }

  console.log("  [engineering] Calling LLM for Engineering report...");
  try {
    const summary = await callLlm(buildEngineeringPrompt(data, dateStr, lang));
    const fileName = "ai-engineering.md";
    const header =
      `# ${ENGINEERING_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/matter_energy/engineering/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ENGINEERING_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.engineering[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Engineering issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [engineering] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Agriculture report
// ---------------------------------------------------------------------------

export async function saveAgricultureReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [agriculture] No data available, skipping report.");
    return;
  }

  console.log("  [agriculture] Calling LLM for Agriculture report...");
  try {
    const summary = await callLlm(buildAgriculturePrompt(data, dateStr, lang));
    const fileName = "ai-agriculture.md";
    const header =
      `# ${AGRICULTURE_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/plants_animals/agriculture_and_food/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = AGRICULTURE_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.agriculture[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Agriculture issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [agriculture] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Environmental report
// ---------------------------------------------------------------------------

export async function saveEnvironmentalReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [environmental] No data available, skipping report.");
    return;
  }

  console.log("  [environmental] Calling LLM for Environmental report...");
  try {
    const summary = await callLlm(buildEnvironmentalPrompt(data, dateStr, lang));
    const fileName = "ai-environmental.md";
    const header =
      `# ${ENVIRONMENTAL_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/earth_climate/environmental_science/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ENVIRONMENTAL_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.environmental[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Environmental issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [environmental] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Archaeology report
// ---------------------------------------------------------------------------

export async function saveArchaeologyReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [archaeology] No data available, skipping report.");
    return;
  }

  console.log("  [archaeology] Calling LLM for Archaeology report...");
  try {
    const summary = await callLlm(buildArchaeologyPrompt(data, dateStr, lang));
    const fileName = "ai-archaeology.md";
    const header =
      `# ${ARCHAEOLOGY_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/fossils_ruins/archaeology/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ARCHAEOLOGY_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.archaeology[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Archaeology issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [archaeology] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Social report
// ---------------------------------------------------------------------------

export async function saveSocialReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [social] No data available, skipping report.");
    return;
  }

  console.log("  [social] Calling LLM for Social report...");
  try {
    const summary = await callLlm(buildSocialPrompt(data, dateStr, lang));
    const fileName = "ai-social.md";
    const header =
      `# ${SOCIAL_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/science_society/social_issues/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = SOCIAL_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.social[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Social issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [social] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Offbeat report
// ---------------------------------------------------------------------------

export async function saveOffbeatReport(
  data: ScienceDailyData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!data.fetchSuccess) {
    console.log("  [offbeat] No data available, skipping report.");
    return;
  }

  console.log("  [offbeat] Calling LLM for Offbeat report...");
  try {
    const summary = await callLlm(buildOffbeatPrompt(data, dateStr, lang));
    const fileName = "ai-offbeat.md";
    const header =
      `# ${OFFBEAT_REPORT.title[lang]} ${dateStr}\n\n` +
      `> Fonte: [ScienceDaily](https://www.sciencedaily.com/news/strange_offbeat/) | ` +
      `${data.stories.length} histórias | Gerado em: ${utcStr} UTC\n\n` +
      `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = OFFBEAT_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.offbeat[lang];
      const url = await createGitHubIssue(title, content, label);
      console.log(`  Created Offbeat issue: ${url}`);
    }
  } catch (err) {
    console.error(`  [offbeat] Report generation failed: ${err}`);
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
