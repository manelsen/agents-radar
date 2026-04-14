/**
 * Centralized i18n strings for bilingual (base-lang/en) report generation.
 * Internally the base language key remains `zh` to avoid a wider refactor,
 * but the actual user-facing language is now Portuguese.
 */

export type Lang = "zh" | "en";

/** Get a bilingual string by language key. */
function t(base: string, en: string): Record<Lang, string> {
  return { zh: base, en };
}

export const MSG = {
  noActivity: t("Sem atividade nas últimas 24 horas.", "No activity in the last 24 hours."),
  summaryFailed: t("⚠️ Falha ao gerar o resumo.", "⚠️ Summary generation failed."),
  skillsFailed: t("⚠️ Falha ao gerar o resumo de Skills.", "⚠️ Skills summary generation failed."),
  trendingNoData: t(
    "⚠️ Falha ao buscar os dados de tendências de hoje; não foi possível gerar o relatório.",
    "⚠️ Trending data unavailable, unable to generate report.",
  ),
  trendingFailed: t("⚠️ Falha ao gerar o relatório de tendências.", "⚠️ Trending report generation failed."),
} as const;

export const CLI_REPORT = {
  title: t("Relatório diário da comunidade de ferramentas AI CLI", "AI CLI Tools Community Digest"),
  meta: (utcStr: string, count: number, lang: Lang) =>
    lang === "en"
      ? `> Generated: ${utcStr} UTC | Tools covered: ${count}\n\n`
      : `> Gerado em: ${utcStr} UTC | Ferramentas cobertas: ${count}\n\n`,
  skillsHeading: t("Destaques da comunidade Claude Code Skills", "Claude Code Skills Highlights"),
  skillsSource: t("Fonte", "Source"),
  comparison: t("Comparação entre ferramentas", "Cross-Tool Comparison"),
  detail: t("Relatórios detalhados por ferramenta", "Per-Tool Reports"),
} as const;

export const OPENCLAW_REPORT = {
  title: t("Resumo diário do ecossistema de agentes de IA", "AI Agents Ecosystem Digest"),
  deepDive: t("Análise aprofundada do projeto principal", "Primary Project Deep Dive"),
  comparison: t("Comparação entre projetos do ecossistema", "Cross-Ecosystem Comparison"),
  peers: t("Relatórios detalhados dos projetos relacionados", "Peer Project Reports"),
} as const;

export const WEB_REPORT = {
  title: t("Relatório de conteúdo oficial de IA", "Official AI Content Report"),
  firstCrawl: t("Primeira varredura completa", "First full crawl"),
  todayUpdate: t("Atualização de hoje", "Today's update"),
  newContent: (count: number, lang: Lang) =>
    lang === "en" ? `New content: ${count} articles` : `Novo conteúdo: ${count} artigos`,
  generated: (utcStr: string, lang: Lang) =>
    lang === "en" ? `Generated: ${utcStr} UTC` : `Gerado em: ${utcStr} UTC`,
  sourcesHeader: t("Fontes:", "Sources:"),
  issueTitle: (dateStr: string, isFirstRun: boolean, lang: Lang) =>
    lang === "en"
      ? `🌐 Official AI Content Report ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`
      : `🌐 Relatório de conteúdo oficial de IA ${dateStr}${isFirstRun ? " (primeira varredura)" : ""}`,
} as const;

export const TRENDING_REPORT = {
  title: t("Relatório diário de tendências open source em IA", "AI Open Source Trends"),
  sources: t("Fontes: GitHub Trending + GitHub Search API", "Sources: GitHub Trending + GitHub Search API"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📈 AI Open Source Trends ${dateStr}` : `📈 Tendências open source em IA ${dateStr}`,
} as const;

export const HN_REPORT = {
  title: t("Resumo diário da comunidade de IA no Hacker News", "Hacker News AI Community Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📰 Hacker News AI Digest ${dateStr}` : `📰 Resumo de IA no Hacker News ${dateStr}`,
} as const;

export const ARXIV_REPORT = {
  title: t("Resumo diário de pesquisa em IA no ArXiv", "ArXiv AI Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📚 ArXiv AI Research Digest ${dateStr}` : `📚 Pesquisa em IA no ArXiv ${dateStr}`,
} as const;

export const SCIENCE_REPORT = {
  title: t("Resumo diário de IA no ScienceDaily", "ScienceDaily AI Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🧪 ScienceDaily AI Digest ${dateStr}` : `🧪 IA no ScienceDaily ${dateStr}`,
} as const;

export const COMMUNITY_REPORT = {
  title: t("Resumo diário de IA nas comunidades técnicas", "Tech Community AI Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `💬 Tech Community AI Digest ${dateStr}` : `💬 Comunidades técnicas de IA ${dateStr}`,
} as const;

export const WEEKLY_REPORT = {
  title: t("Relatório semanal do ecossistema de ferramentas de IA", "AI Tools Ecosystem Weekly Report"),
  coverage: t("Cobertura", "Coverage"),
  issueTitle: (weekStr: string) => `📅 Relatório semanal do ecossistema de ferramentas de IA ${weekStr}`,
} as const;

export const MONTHLY_REPORT = {
  title: t("Relatório mensal do ecossistema de ferramentas de IA", "AI Tools Ecosystem Monthly Report"),
  issueTitle: (monthStr: string) => `📆 Relatório mensal do ecossistema de ferramentas de IA ${monthStr}`,
} as const;

export const ISSUE_LABELS = {
  cli: t("digest", "digest-en"),
  openclaw: t("openclaw", "openclaw-en"),
  web: t("web", "web-en"),
  trending: t("trending", "trending-en"),
  hn: t("hn", "hn-en"),
  arxiv: t("arxiv", "arxiv-en"),
  science: t("science", "science-en"),
  community: t("community", "community-en"),
} as const;

export const CLI_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `📊 AI CLI Tools Digest ${dateStr}` : `📊 Ferramentas AI CLI ${dateStr}`;

export const OPENCLAW_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `🦞 AI Agents Ecosystem Digest ${dateStr}` : `🦞 Ecossistema de agentes de IA ${dateStr}`;

export const FOOTER = {
  autoGen: t("Este resumo é gerado automaticamente por", "This digest is auto-generated by"),
} as const;

export const REPORT_LABELS: Record<string, string> = {
  "ai-cli": "Relatório diário da comunidade AI CLI",
  "ai-cli-en": "AI CLI Tools Digest",
  "ai-agents": "Relatório diário do ecossistema de agentes de IA",
  "ai-agents-en": "AI Agents Ecosystem Digest",
  "ai-web": "Relatório de conteúdo oficial de IA",
  "ai-web-en": "Official AI Content Report",
  "ai-trending": "Tendências open source em IA",
  "ai-trending-en": "AI Open Source Trends",
  "ai-hn": "Resumo de IA no Hacker News",
  "ai-hn-en": "Hacker News AI Community Digest",
  "ai-arxiv": "Pesquisa em IA no ArXiv",
  "ai-arxiv-en": "ArXiv AI Research Digest",
  "ai-science": "IA no ScienceDaily",
  "ai-science-en": "ScienceDaily AI Research Digest",
  "ai-community": "Comunidades técnicas de IA",
  "ai-community-en": "Tech Community AI Digest",
  "ai-weekly": "Relatório semanal de ferramentas de IA",
  "ai-weekly-en": "AI Tools Weekly Digest",
  "ai-monthly": "Relatório mensal de ferramentas de IA",
  "ai-monthly-en": "AI Tools Monthly Digest",
};

export const NOTIFY_LABELS: Record<string, Record<Lang, string>> = {
  "ai-cli": t("Ferramentas AI CLI", "AI CLI Tools"),
  "ai-agents": t("Ecossistema de agentes de IA", "AI Agents Ecosystem"),
  "ai-web": t("Atualizações oficiais", "Official Updates"),
  "ai-trending": t("Tendências do GitHub", "GitHub Trends"),
  "ai-hn": t("Comunidade HN", "HN Community"),
  "ai-arxiv": t("Pesquisa no ArXiv", "ArXiv Research"),
  "ai-science": t("ScienceDaily", "ScienceDaily"),
  "ai-community": t("Comunidade técnica", "Tech Community"),
  "ai-weekly": t("Relatório semanal de IA", "AI Tools Weekly"),
  "ai-monthly": t("Relatório mensal de IA", "AI Tools Monthly"),
};
