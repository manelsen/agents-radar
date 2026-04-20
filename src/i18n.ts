/**
 * Centralized i18n strings for report generation.
 * Base language is Portuguese (zh key).
 * EN values retained for prompt builder API compatibility.
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
} as const;

export const AGENTS_REPORT = {
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

export const ROBOTICS_REPORT = {
  title: t("Resumo diário de Robótica no ScienceDaily", "ScienceDaily Robotics Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🤖 ScienceDaily Robotics Digest ${dateStr}` : `🤖 Robótica no ScienceDaily ${dateStr}`,
} as const;

export const HACKING_REPORT = {
  title: t("Resumo diário de Cibersegurança no ScienceDaily", "ScienceDaily Cybersecurity Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🔒 ScienceDaily Cybersecurity Digest ${dateStr}`
      : `🔒 Cibersegurança no ScienceDaily ${dateStr}`,
} as const;

export const MEMORY_REPORT = {
  title: t("Resumo diário de Neurociência no ScienceDaily", "ScienceDaily Neuroscience Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🧠 ScienceDaily Memory Digest ${dateStr}`
      : `🧠 Memória e Neurociência no ScienceDaily ${dateStr}`,
} as const;

export const PRINT3D_REPORT = {
  title: t("Resumo diário de Impressão 3D no ScienceDaily", "ScienceDaily 3D Printing Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🖨️ ScienceDaily 3D Printing Digest ${dateStr}`
      : `🖨️ Impressão 3D no ScienceDaily ${dateStr}`,
} as const;

export const SOLAR_REPORT = {
  title: t("Resumo diário de Energia Solar no ScienceDaily", "ScienceDaily Solar Energy Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `☀️ ScienceDaily Solar Energy Digest ${dateStr}`
      : `☀️ Energia Solar no ScienceDaily ${dateStr}`,
} as const;

export const LIVING_WELL_REPORT = {
  title: t("Resumo diário de Bem-Estar no ScienceDaily", "ScienceDaily Living Well Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🌿 ScienceDaily Living Well Digest ${dateStr}`
      : `🌿 Bem-Estar no ScienceDaily ${dateStr}`,
} as const;

export const MENTAL_HEALTH_REPORT = {
  title: t("Resumo diário de Saúde Mental no ScienceDaily", "ScienceDaily Mental Health Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `💚 ScienceDaily Mental Health Digest ${dateStr}`
      : `💚 Saúde Mental no ScienceDaily ${dateStr}`,
} as const;

export const EDUCATION_REPORT = {
  title: t("Resumo diário de Educação no ScienceDaily", "ScienceDaily Education Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📚 ScienceDaily Education Digest ${dateStr}` : `📚 Educação no ScienceDaily ${dateStr}`,
} as const;

export const ENGINEERING_REPORT = {
  title: t("Resumo diário de Engenharia no ScienceDaily", "ScienceDaily Engineering Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `⚙️ ScienceDaily Engineering Digest ${dateStr}`
      : `⚙️ Engenharia no ScienceDaily ${dateStr}`,
} as const;

export const AGRICULTURE_REPORT = {
  title: t("Resumo diário de Agricultura no ScienceDaily", "ScienceDaily Agriculture Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🌾 ScienceDaily Agriculture Digest ${dateStr}`
      : `🌾 Agricultura no ScienceDaily ${dateStr}`,
} as const;

export const ENVIRONMENTAL_REPORT = {
  title: t(
    "Resumo diário de Ciências Ambientais no ScienceDaily",
    "ScienceDaily Environmental Science Digest",
  ),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🌍 ScienceDaily Environmental Science Digest ${dateStr}`
      : `🌍 Ciências Ambientais no ScienceDaily ${dateStr}`,
} as const;

export const ARCHAEOLOGY_REPORT = {
  title: t("Resumo diário de Arqueologia no ScienceDaily", "ScienceDaily Archaeology Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🏺 ScienceDaily Archaeology Digest ${dateStr}`
      : `🏺 Arqueologia no ScienceDaily ${dateStr}`,
} as const;

export const SOCIAL_REPORT = {
  title: t("Resumo diário de Questões Sociais no ScienceDaily", "ScienceDaily Social Issues Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `👥 ScienceDaily Social Issues Digest ${dateStr}`
      : `👥 Questões Sociais no ScienceDaily ${dateStr}`,
} as const;

export const OFFBEAT_REPORT = {
  title: t("Resumo diário de Curiosidades no ScienceDaily", "ScienceDaily Strange & Offbeat Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🔮 ScienceDaily Strange & Offbeat Digest ${dateStr}`
      : `🔮 Curiosidades no ScienceDaily ${dateStr}`,
} as const;

export const WEEKLY_REPORT = {
  title: t("Relatório semanal do ecossistema de ferramentas de IA", "AI Tools Ecosystem Weekly Report"),
  coverage: t("Cobertura", "Coverage"),
  issueTitle: (weekStr: string, lang: Lang) =>
    lang === "en"
      ? `📅 AI Tools Ecosystem Weekly Report ${weekStr}`
      : `📅 Relatório semanal do ecossistema de ferramentas de IA ${weekStr}`,
} as const;

export const MONTHLY_REPORT = {
  title: t("Relatório mensal do ecossistema de ferramentas de IA", "AI Tools Ecosystem Monthly Report"),
  issueTitle: (monthStr: string, lang: Lang) =>
    lang === "en"
      ? `📆 AI Tools Ecosystem Monthly Report ${monthStr}`
      : `📆 Relatório mensal do ecossistema de ferramentas de IA ${monthStr}`,
} as const;

export const ISSUE_LABELS = {
  agents: t("agents", "agents"),
  web: t("web", "web"),
  hn: t("hn", "hn"),
  arxiv: t("arxiv", "arxiv"),
  science: t("science", "science"),
  robotics: t("robotics", "robotics"),
  hacking: t("hacking", "hacking"),
  memory: t("memory", "memory"),
  "3dprinting": t("3dprinting", "3dprinting"),
  solar: t("solar", "solar"),
  livingwell: t("livingwell", "livingwell"),
  mentalhealth: t("mentalhealth", "mentalhealth"),
  education: t("education", "education"),
  engineering: t("engineering", "engineering"),
  agriculture: t("agriculture", "agriculture"),
  environmental: t("environmental", "environmental"),
  archaeology: t("archaeology", "archaeology"),
  social: t("social", "social"),
  offbeat: t("offbeat", "offbeat"),
} as const;

export const AGENTS_ISSUE_TITLE = (dateStr: string, lang: Lang = "zh") =>
  lang === "en" ? `🦞 AI Agents Ecosystem Digest ${dateStr}` : `🦞 Ecossistema de agentes de IA ${dateStr}`;

export const FOOTER = {
  autoGen: t("Este resumo é gerado automaticamente por", "This digest is auto-generated by"),
} as const;

export const REPORT_LABELS: Record<string, string> = {
  "ai-agents": "Relatório diário do ecossistema de agentes de IA",
  "ai-web": "Relatório de conteúdo oficial de IA",
  "ai-hn": "Resumo de IA no Hacker News",
  "ai-arxiv": "Pesquisa em IA no ArXiv",
  "ai-science": "IA no ScienceDaily",
  "ai-robotics": "Robótica no ScienceDaily",
  "ai-hacking": "Cibersegurança no ScienceDaily",
  "ai-memory": "Memória e Neurociência no ScienceDaily",
  "ai-3dprinting": "Impressão 3D no ScienceDaily",
  "ai-solar": "Energia Solar no ScienceDaily",
  "ai-livingwell": "Bem-Estar no ScienceDaily",
  "ai-mentalhealth": "Saúde Mental no ScienceDaily",
  "ai-education": "Educação no ScienceDaily",
  "ai-engineering": "Engenharia no ScienceDaily",
  "ai-agriculture": "Agricultura no ScienceDaily",
  "ai-environmental": "Ciências Ambientais no ScienceDaily",
  "ai-archaeology": "Arqueologia no ScienceDaily",
  "ai-social": "Questões Sociais no ScienceDaily",
  "ai-offbeat": "Curiosidades no ScienceDaily",
  "ai-weekly": "Relatório semanal de ferramentas de IA",
  "ai-monthly": "Relatório mensal de ferramentas de IA",
};

export const NOTIFY_LABELS: Record<string, Record<Lang, string>> = {
  "ai-agents": t("Ecossistema de agentes de IA", "AI Agents Ecosystem"),
  "ai-web": t("Atualizações oficiais", "Official Updates"),
  "ai-hn": t("Comunidade HN", "HN Community"),
  "ai-arxiv": t("Pesquisa no ArXiv", "ArXiv Research"),
  "ai-science": t("ScienceDaily", "ScienceDaily"),
  "ai-robotics": t("Robótica", "Robotics"),
  "ai-hacking": t("Cibersegurança", "Cybersecurity"),
  "ai-memory": t("Memória", "Memory"),
  "ai-3dprinting": t("Impressão 3D", "3D Printing"),
  "ai-solar": t("Energia Solar", "Solar Energy"),
  "ai-livingwell": t("Bem-Estar", "Living Well"),
  "ai-mentalhealth": t("Saúde Mental", "Mental Health"),
  "ai-education": t("Educação", "Education"),
  "ai-engineering": t("Engenharia", "Engineering"),
  "ai-agriculture": t("Agricultura", "Agriculture"),
  "ai-environmental": t("Ciências Ambientais", "Environmental Science"),
  "ai-archaeology": t("Arqueologia", "Archaeology"),
  "ai-social": t("Questões Sociais", "Social Issues"),
  "ai-offbeat": t("Curiosidades", "Strange & Offbeat"),
  "ai-weekly": t("Relatório semanal de IA", "AI Tools Weekly"),
  "ai-monthly": t("Relatório mensal de IA", "AI Tools Monthly"),
};
