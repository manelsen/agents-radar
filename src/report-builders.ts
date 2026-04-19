/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import { type Lang, AGENTS_REPORT } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Agents Report
// ---------------------------------------------------------------------------

export function buildAgentsReportContent(
  fetchedAgents: RepoFetch,
  peerDigests: RepoDigest[],
  agentsSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  agents: RepoConfig,
  agentsPeers: RepoConfig[],
  lang: Lang = "zh",
): string {
  const { issues, prs } = fetchedAgents;

  const peersRepoLinks =
    `- [${agents.name}](https://github.com/${agents.repo})\n` +
    agentsPeers.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const title = `# ${AGENTS_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta = `> Issues: ${issues.length} | PRs: ${prs.length} | Projetos cobertos: ${1 + agentsPeers.length} | Gerado em: ${utcStr} UTC\n\n`;

  return (
    title +
    meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## ${AGENTS_REPORT.deepDive[lang]}\n\n` +
    agentsSummary +
    `\n\n---\n\n` +
    `## ${AGENTS_REPORT.comparison[lang]}\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## ${AGENTS_REPORT.peers[lang]}\n\n` +
    peerDetailSections +
    footer
  );
}
