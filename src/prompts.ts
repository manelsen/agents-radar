/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";
import type { Lang } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem, lang: Lang = "zh"): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  const t =
    lang === "en"
      ? {
          author: "Author",
          created: "Created",
          updated: "Updated",
          comments: "Comments",
          url: "URL",
          summary: "Summary",
        }
      : {
          author: "Autor",
          created: "Criado",
          updated: "Atualizado",
          comments: "Comentários",
          url: "Link",
          summary: "Resumo",
        };
  // Extract "owner/repo" from html_url to avoid full GitHub URLs that trigger cross-references
  const repoSlug = item.html_url.replace(/^https:\/\/github\.com\//, "").replace(/\/(issues|pull)\/\d+$/, "");
  const itemKind = item.html_url.includes("/pull/") ? "PR" : "Issue";
  const refStr = `${repoSlug} ${itemKind} #${item.number}`;
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  ${t.author}: ${item.user.login} | ${t.created}: ${item.created_at.slice(0, 10)} | ${t.updated}: ${item.updated_at.slice(0, 10)} | ${t.comments}: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  ${t.url}: ${refStr}`,
    `  ${t.summary}: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT = 20;

/** Sort by comment count desc, take top N. */
export function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

export function sampleNote(total: number, sampled: number, lang: Lang = "zh"): string {
  if (lang === "en") {
    return total > sampled
      ? `(Total: ${total} items; showing top ${sampled} by comment count)`
      : `(Total: ${total} items)`;
  }
  return total > sampled
    ? `(Total: ${total}; abaixo, os ${sampled} itens com mais comentários)`
    : `(Total: ${total})`;
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs = topN(prs, CLI_PR_LIMIT);

  const issuesText =
    sampledIssues.map((i) => formatItem(i, lang)).join("\n") || (lang === "en" ? "None" : "Nenhum");
  const prsText =
    sampledPrs.map((p) => formatItem(p, lang)).join("\n") || (lang === "en" ? "None" : "Nenhum");
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : lang === "en"
      ? "None"
      : "Nenhum";

  const issueNote = sampleNote(issues.length, sampledIssues.length, lang);
  const prNote = sampleNote(prs.length, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are a technical analyst focused on AI developer tools. Based on the following GitHub data, generate the ${cfg.name} community digest for ${dateStr}.

# Data source: github.com/${cfg.repo}

## Latest Releases (last 24h)
${releasesText}

## Latest Issues (updated in last 24h)${issueNote}
${issuesText}

## Latest Pull Requests (updated in last 24h)${prNote}
${prsText}

---

Generate a structured English digest with the following sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Trends** - Distill the most-requested feature directions from all Issues
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Style: concise and professional, suited for technical developers. Include GitHub links for each item.
`;
  }

  return `Você é um analista técnico focado em ferramentas de desenvolvimento com IA. Com base nos dados do GitHub abaixo, gere o relatório diário da comunidade de ${cfg.name} para ${dateStr}.

# Fonte de dados: github.com/${cfg.repo}

## Releases mais recentes (últimas 24h)
${releasesText}

## Issues mais recentes (atualizadas nas últimas 24h) ${issueNote}
${issuesText}

## Pull requests mais recentes (atualizadas nas últimas 24h) ${prNote}
${prsText}

---

Gere um relatório estruturado em português com estas seções:

1. **Destaques do dia** - Resuma em 2-3 frases as mudanças mais importantes de hoje
2. **Lançamentos** - Se houver novas versões, resuma as mudanças; omita se não houver
3. **Issues em evidência** - Escolha 10 issues relevantes, explique por que importam e como a comunidade reagiu
4. **Progresso de PRs importantes** - Escolha 10 PRs importantes e descreva os recursos ou correções
5. **Tendências de pedidos de features** - Extraia das issues as direções mais pedidas pela comunidade
6. **Pontos de atenção para desenvolvedores** - Resuma dores recorrentes e demandas frequentes

Estilo: português claro e profissional, voltado para desenvolvedores. Inclua links do GitHub em cada item.
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
  lang: Lang = "zh",
): string {
  const totalIssues = issues.length;
  const totalPrs = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs = topN(prs, prLimit);

  const noneStr = lang === "en" ? "None" : "Nenhum";
  const issuesText = sampledIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : noneStr;

  const openIssues = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs = prs.filter((p) => p.state === "open").length;
  const mergedPrs = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = sampleNote(totalIssues, sampledIssues.length, lang);
  const prSampleNote = sampleNote(totalPrs, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are an analyst of AI agent and personal AI assistant open-source projects. Based on the following GitHub data from ${cfg.name} (github.com/${cfg.repo}), generate a project digest for ${dateStr}.

# Data Overview
- Issues updated in last 24h: ${totalIssues} (open/active: ${openIssues}, closed: ${closedIssues})
- PRs updated in last 24h: ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- New releases: ${releases.length}

## Latest Releases
${releasesText}

## Latest Issues ${issueSampleNote}
${issuesText}

## Latest Pull Requests ${prSampleNote}
${prsText}

---

Generate a structured English ${cfg.name} project digest with the following sections:

1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist
6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention

Style: objective, data-driven, highlighting project health. Include GitHub links for each item.
`;
  }

  return `Você é um analista de projetos open source focado em agentes de IA e assistentes pessoais. Com base nos dados do GitHub de ${cfg.name} (github.com/${cfg.repo}), gere o relatório do projeto para ${dateStr}.

# Visão geral dos dados
- Issues atualizadas nas últimas 24h: ${totalIssues} (abertas/ativas: ${openIssues}, fechadas: ${closedIssues})
- PRs atualizadas nas últimas 24h: ${totalPrs} (abertas: ${openPrs}, merged/fechadas: ${mergedPrs})
- Novas releases: ${releases.length}

## Releases mais recentes
${releasesText}

## Issues mais recentes ${issueSampleNote}
${issuesText}

## Pull requests mais recentes ${prSampleNote}
${prsText}

---

Gere um relatório estruturado do projeto ${cfg.name} com estas seções:

1. **Panorama do dia** - Resuma em 3-5 frases o estado geral do projeto hoje, incluindo nível de atividade
2. **Lançamentos** - Se houver novas versões, detalhe mudanças, breaking changes e notas de migração
3. **Progresso do projeto** - PRs importantes merged/fechadas hoje e que avanço elas trouxeram
4. **Temas quentes da comunidade** - Issues/PRs com mais comentários e reações, com análise das demandas
5. **Bugs e estabilidade** - Problemas, crashes e regressões reportados hoje, por severidade
6. **Pedidos de features e sinais de roadmap** - Novas demandas e o que pode entrar na próxima versão
7. **Resumo de feedback dos usuários** - Dores reais, cenários de uso e satisfação/insatisfação
8. **Backlog que merece atenção** - Issues ou PRs importantes sem resposta há muito tempo

Estilo: objetivo, profissional e orientado a dados, destacando a saúde do projeto. Inclua links do GitHub em cada item.
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const noActivityStr =
    lang === "en" ? "No activity in the last 24 hours." : "Sem atividade nas últimas 24 horas.";

  const openclawSection =
    lang === "en"
      ? `## ${openclawDigest.config.name} (primary reference, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`
      : `## ${openclawDigest.config.name} (referência principal, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior analyst of the AI agent and personal AI assistant open-source ecosystem. The following are ${dateStr} community digest summaries for each project.

${openclawSection}

---

${peerSections}

---

Generate a cross-project comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall personal AI assistant / agent open-source landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status, and health score for each project
3. **Primary Project Positioning** - Advantages vs peers, technical approach differences, community size comparison
4. **Shared Technical Focus Areas** - Requirements emerging across multiple projects (note which projects, specific needs)
5. **Differentiation Analysis** - Key differences in feature focus, target users, technical architecture
6. **Community Momentum & Maturity** - Activity tiers, which are rapidly iterating, which are stabilizing
7. **Trend Signals** - Industry trends extracted from community feedback, value for AI agent developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `Você é um analista sênior do ecossistema open source de agentes de IA e assistentes pessoais. Abaixo estão os resumos de atividade da comunidade de cada projeto em ${dateStr}.

${openclawSection}

---

${peerSections}

---

Com base nos resumos acima, gere um relatório comparativo com estas seções:

1. **Visão geral do ecossistema** - Resuma em 3-5 frases o panorama geral do ecossistema
2. **Comparação de atividade** - Tabela com issues, PRs, releases e avaliação de saúde
3. **Posicionamento do projeto principal** - Vantagens frente aos pares, diferenças técnicas e tamanho da comunidade
4. **Focos técnicos compartilhados** - Necessidades que surgem em vários projetos
5. **Análise de diferenciação** - Diferenças de foco, público-alvo e arquitetura
6. **Tração e maturidade da comunidade** - Quem está iterando rápido e quem está consolidando qualidade
7. **Sinais de tendência** - Tendências de mercado extraídas do feedback da comunidade

Estilo: conciso, profissional e apoiado por dados, útil para decisores técnicos e desenvolvedores.
`;
}

export function buildSkillsPrompt(
  prs: GitHubItem[],
  issues: GitHubItem[],
  dateStr: string,
  lang: Lang = "zh",
): string {
  const topPrs = topN(prs, 20);
  const topIssues = topN(issues, 15);

  const noneStr = lang === "en" ? "None" : "Nenhum";
  const prsText = topPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const issuesText = topIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;

  if (lang === "en") {
    return `You are a technical analyst focused on the Claude Code ecosystem. The following data is from github.com/anthropics/skills (official Claude Code Skills repository). Analyze the community's most-watched Skills activity (data as of ${dateStr}).

## Repository Context
anthropics/skills is the official Claude Code Skills collection. Each PR typically represents a new or improved Skill. The community proposes new Skills and reports issues via Issues; PRs represent actual Skill submissions.

## Popular Pull Requests (sorted by comments, ${prs.length} total, showing top ${topPrs.length})
${prsText}

## Community Issues (sorted by comments, ${issues.length} total, showing top ${topIssues.length})
${issuesText}

---

Generate a Claude Code Skills community highlights report in English with these sections:

1. **Top Skills Ranking** - List the 5-8 most-discussed Skills (PRs) by comments/attention, describe each Skill's functionality, discussion highlights, and current status (open/merged/draft)
2. **Community Demand Trends** - From Issues, distill the most-anticipated new Skill directions (e.g. workflow automation, code review, test generation, documentation)
3. **High-Potential Pending Skills** - Active-comment PRs not yet merged; these Skills may land soon
4. **Skills Ecosystem Insight** - One-sentence summary: what is the community's most concentrated demand at the Skills level?

Style: concise and professional, include GitHub links for each item.
`;
  }

  return `Você é um analista técnico focado no ecossistema do Claude Code. Os dados abaixo vêm de github.com/anthropics/skills, o repositório oficial de Claude Code Skills. Analise as Skills com maior atenção da comunidade até ${dateStr}.

## Contexto do repositório
anthropics/skills é a coleção oficial de Skills do Claude Code. Cada PR normalmente representa uma Skill nova ou aprimorada. A comunidade usa Issues para pedir novas Skills e reportar problemas; os PRs representam submissões reais.

## Pull requests em destaque (ordenadas por comentários, ${prs.length} no total, mostrando as ${topPrs.length} principais)
${prsText}

## Issues da comunidade (ordenadas por comentários, ${issues.length} no total, mostrando as ${topIssues.length} principais)
${issuesText}

---

Gere um relatório de destaques da comunidade Claude Code Skills com estas seções:

1. **Ranking das Skills mais quentes** - Liste as 5-8 Skills com mais discussão e explique a função, os pontos quentes e o estado atual
2. **Tendências de demanda da comunidade** - Extraia das Issues as direções de Skills mais esperadas
3. **Skills promissoras ainda pendentes** - PRs com comentários ativos que ainda não foram merged
4. **Insight sobre o ecossistema de Skills** - Uma frase resumindo a principal demanda atual da comunidade

Estilo: conciso e profissional, com links do GitHub em cada item.
`;
}

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string, lang: Lang = "zh"): string {
  const noActivityStr =
    lang === "en" ? "No activity in the last 24 hours." : "Sem atividade nas últimas 24 horas.";

  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior technical analyst of the AI developer tools ecosystem. The following are ${dateStr} community digest summaries for each major AI CLI tool:

${sections}

---

Generate a cross-tool comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI CLI tools development landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status for each tool today
3. **Shared Feature Directions** - Requirements appearing across multiple tool communities (note which tools, specific needs)
4. **Differentiation Analysis** - Differences in feature focus, target users, and technical approach
5. **Community Momentum & Maturity** - Which tools have more active communities, which are rapidly iterating
6. **Trend Signals** - Industry trends from community feedback, reference value for developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `Você é um analista sênior do ecossistema de ferramentas de desenvolvimento com IA. Abaixo estão os resumos de atividade da comunidade de cada ferramenta AI CLI em ${dateStr}:

${sections}

---

Com base nesses resumos, gere um relatório comparativo com estas seções:

1. **Panorama do ecossistema** - Resuma em 3-5 frases o estado geral das ferramentas AI CLI
2. **Comparação de atividade** - Tabela com issues, PRs e releases por ferramenta
3. **Direções de features compartilhadas** - Demandas recorrentes em várias comunidades
4. **Análise de diferenciação** - Diferenças de foco, público-alvo e abordagem técnica
5. **Tração e maturidade da comunidade** - Quais comunidades estão mais ativas e quais iteram mais rápido
6. **Sinais de tendência** - Tendências do setor extraídas do feedback das comunidades

Estilo: conciso, profissional e apoiado por dados, útil para decisores técnicos e desenvolvedores.
`;
}
