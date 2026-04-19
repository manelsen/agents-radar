/**
 * LLM prompt builders for data-source reports (web, HN, arxiv, science-daily)
 * and rollup reports (weekly, monthly).
 *
 * Separated from prompts.ts to keep each module focused.
 */

import type { WebFetchResult } from "./web.ts";
import type { HnData } from "./hn.ts";
import type { ArxivData } from "./arxiv.ts";
import type { ScienceDailyData } from "./science-daily.ts";
import type { Lang } from "./i18n.ts";
export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string, lang: Lang = "zh"): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `Primeira varredura completa (sitemap com ${totalDiscovered} URLs; abaixo, os ${newItems.length} artigos mais recentes)`
            : `Atualização incremental de hoje, com ${newItems.length} conteúdos novos`;

      if (newItems.length === 0) {
        const noContent =
          lang === "en"
            ? `(${mode}, no content to analyze.)`
            : `(${mode}; nenhum conteúdo disponível para análise.)`;
        return `## ${siteName}\n\n${noContent}`;
      }

      const categoryLabel = lang === "en" ? "Category" : "Categoria";
      const dateLabel = lang === "en" ? "Published/Updated" : "Publicado/Atualizado";
      const unknownDate = lang === "en" ? "unknown" : "desconhecido";
      const excerptLabel = lang === "en" ? "Excerpt" : "Trecho";
      const metadataOnlyNote =
        lang === "en"
          ? "(metadata-only: title derived from URL slug, may be inaccurate; no article text available)"
          : "(somente metadados: título inferido da URL, possivelmente impreciso; sem corpo do artigo)";
      const itemsText = newItems
        .map((item) => {
          const lines = [
            `### [${item.title || item.url}](${item.url})`,
            `- ${categoryLabel}: ${item.category} | ${dateLabel}: ${item.lastmod.slice(0, 10) || unknownDate}`,
          ];
          if (item.content) {
            lines.push(`- ${excerptLabel}: ${item.content}`);
          } else {
            lines.push(`- ${metadataOnlyNote}`);
          }
          return lines.join("\n");
        })
        .join("\n\n");

      const lp = "(";
      const rp = ")";
      return `## ${siteName}${lp}${mode}${rp}\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the overall content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context."
      : isAnyFirstRun
        ? "Esta é a primeira varredura completa. Foque no panorama de conteúdo, no contexto histórico e nos temas centrais de cada site."
        : "Esta é uma atualização incremental. Foque no conteúdo novo de hoje e avalie sua importância estratégica no contexto.";

  if (lang === "en") {
    return `You are a deep content analyst focused on AI, skilled at extracting strategic signals from official announcements, technical blogs, research papers, and product documentation.

The following content was crawled on ${dateStr} from Anthropic (claude.com / anthropic.com) and OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Generate a detailed AI Official Content Tracking Report in English with these sections:

1. **Today's Highlights** — 3-5 sentences on the most important new releases or developments, calling out key highlights

2. **Anthropic / Claude Content Highlights** — Organize important content by category (news / research / engineering / learn, etc.):
   - For each piece, 2-4 sentences extracting core insights, technical details, or business significance
   - Note publication date and original link
   - If first full crawl, trace important milestones chronologically

3. **OpenAI Content Highlights** — Same structure, organized by research / release / company / safety categories
   - ⚠️ Note: OpenAI data is metadata-only (titles derived from URL slugs, no article text). Only list URLs and categories objectively. Do NOT speculate on title meanings or fabricate content summaries. If information is insufficient for analysis, state the data limitation clearly.

4. **Strategic Signal Analysis** — Based on both companies' release cadence and content focus, analyze:
   - Each company's recent technical priorities (model capabilities / safety / productization / ecosystem)
   - Competitive dynamics: who is setting the agenda, who is following
   - Potential impact on developers and enterprise users

5. **Notable Details** — Extract hidden signals from titles, phrasing, and timing, e.g.:
   - New terms or topics appearing for the first time
   - Dense releases in a category (may signal a product milestone)
   - Policy, compliance, and safety developments

${isAnyFirstRun ? "6. **Content Landscape Overview** — First full crawl only: summarize the content category distribution for both companies and describe their content strategy style (academic-oriented vs product-oriented vs user stories, etc.)\n\n" : ""}Style: English, professional and detailed, suited for AI researchers, product managers, and technical decision-makers. Every item must include official links.
`;
  }

  return `Você é um analista de conteúdo profundo focado em IA, especializado em extrair sinais estratégicos de anúncios oficiais, blogs técnicos, pesquisas e documentação de produto.

O conteúdo abaixo foi coletado em ${dateStr} nos sites da Anthropic (claude.com / anthropic.com) e da OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Gere um relatório detalhado de acompanhamento de conteúdo oficial de IA com estas seções:

1. **Destaques do dia** — 3-5 frases sobre os lançamentos e movimentos mais importantes

2. **Destaques da Anthropic / Claude** — Organize por categoria e extraia o essencial de cada item

3. **Destaques da OpenAI** — Mesmo formato, organizando por research / release / company / safety
   - ⚠️ Observação: os dados da OpenAI são apenas metadados. Não invente resumos; mencione claramente quando a informação não for suficiente.

4. **Leitura de sinais estratégicos** — Analise prioridades técnicas, dinâmica competitiva e impacto para desenvolvedores e empresas

5. **Detalhes que merecem atenção** — Extraia sinais implícitos de títulos, linguagem e timing

${isAnyFirstRun ? "6. **Panorama de conteúdo** — Apenas na primeira varredura completa: resuma a distribuição de categorias e o estilo editorial de cada empresa\n\n" : ""}Estilo: português detalhado e profissional, adequado para pesquisadores, PMs e decisores técnicos. Inclua links oficiais em cada item.
`;
}

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are daily digest summaries from the past 7 days (${weekStr}) of AI tool community activity. Generate a comprehensive weekly recap.

${digestEntries}

---

Generate an AI Tools Ecosystem Weekly Report with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `Você é um analista técnico focado no ecossistema open source de IA. Abaixo estão os resumos diários da comunidade de ferramentas de IA dos últimos 7 dias (${weekStr}). Gere uma recapitulação semanal abrangente.

${digestEntries}

---

Gere um relatório semanal do ecossistema de ferramentas de IA com estas seções:

1. **Principais histórias da semana**
2. **Progresso das ferramentas CLI**
3. **Ecossistema de agentes de IA**
4. **Tendências open source**
5. **Debates da comunidade HN**
6. **Atualizações oficiais**
7. **Sinais para a próxima semana**

Estilo: português conciso e profissional, ajudando desenvolvedores a entender rapidamente a semana.
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are ${monthStr} AI tool community digest summaries (${Object.keys(sourceDigests).length} reports total). Generate a comprehensive monthly review.

${digestEntries}

---

Generate an AI Tools Ecosystem Monthly Report with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `Você é um analista técnico focado no ecossistema open source de IA. Abaixo estão os resumos da comunidade de ferramentas de IA de ${monthStr} (${Object.keys(sourceDigests).length} relatórios no total). Gere uma revisão mensal abrangente.

${digestEntries}

---

Gere um relatório mensal do ecossistema de ferramentas de IA com estas seções:

1. **Principais histórias do mês**
2. **Progresso mensal das ferramentas CLI**
3. **Revisão mensal do ecossistema de agentes**
4. **Resumo das tendências técnicas**
5. **Saúde da comunidade**
6. **Revisão das atualizações oficiais**
7. **Perspectiva para o próximo mês**

Estilo: português, com análise profunda e orientada por dados, útil para retrospectivas e decisões estratégicas.
`;
}

// ---------------------------------------------------------------------------
// Highlights prompt — extracts structured highlights from finished reports
// for use in Telegram notifications.
// ---------------------------------------------------------------------------

export interface ReportHighlights {
  [reportId: string]: string[];
}

export function buildHighlightsPrompt(
  reportContents: Record<string, string>,
  lang: Lang = "zh",
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a concise news editor. The following are today's AI ecosystem report excerpts, each labeled with a report ID.

${sections}

---

For each report, extract ${itemsPerReport} of the most noteworthy highlights — the kind that would make a reader want to click through. Each highlight should be a single short sentence (under 60 characters).

Return ONLY valid JSON, no markdown fences, no explanation. Format:
{"ai-cli":["highlight 1","highlight 2",...],"ai-agents":["highlight 1","highlight 2",...],...}

Rules:
- Use the exact report IDs from the [brackets] above as keys
- Only include reports that have meaningful content (skip reports with failure messages or no activity)
- ${itemsPerReport} highlights per report, each under 60 characters
- Focus on: new releases, notable features, trending projects, key discussions
- Be specific: include project names, version numbers, star counts where relevant`;
  }

  return `Você é um editor de notícias conciso. Abaixo estão trechos dos relatórios de hoje do ecossistema de IA, cada um identificado por um ID.

${sections}

---

Para cada relatório, extraia ${itemsPerReport} destaques realmente atraentes. Cada destaque deve ser uma frase curta (até 60 caracteres).

Retorne APENAS JSON válido, sem markdown nem explicações. Formato:
{"ai-cli":["destaque 1","destaque 2",...],"ai-agents":["destaque 1","destaque 2",...],...}

Regras:
- Use exatamente os IDs entre colchetes como chaves
- Inclua apenas relatórios com conteúdo real
- ${itemsPerReport} destaques por relatório, cada um com no máximo 60 caracteres
- Foque em releases, recursos relevantes, projetos em alta e discussões-chave
- Seja específico: cite projetos, versões, estrelas e números quando fizer sentido`;
}

export function buildHnPrompt(data: HnData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   Score: ${s.points} | Comments: ${s.comments} | Author: ${s.author} | Time: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussão: ${s.hnUrl}\n` +
          `   Pontuação: ${s.points} | Comentários: ${s.comments} | Autor: ${s.author} | Horário: ${s.createdAt.slice(0, 16)}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI industry news analyst. The following are AI-related top posts from Hacker News in the past 24 hours as of ${dateStr} (sorted by score, ${data.stories.length} total):

---

${storiesText}

---

Generate a structured Hacker News AI Community Digest in English:

1. **Today's Highlights** — 3-5 sentences on the hottest AI discussion topics and community sentiment on HN today

2. **Top News & Discussions** — Organized by category, select the 2-5 most representative items per category, each with:
   - Title (with original link) + HN discussion link
   - Score and comment count
   - One sentence: why this matters, what the community's typical reaction is

   Categories:
   - 🔬 Models & Research (new model releases, papers, benchmarks)
   - 🛠️ Tools & Engineering (open-source projects, frameworks, engineering practices)
   - 🏢 Industry News (company news, funding, product launches)
   - 💬 Opinions & Debates (notable Ask HN, Show HN, or hot discussion threads)

3. **Community Sentiment Signal** — 100-200 words analyzing today's HN AI discussion mood and focus:
   - Which topics are most active (high score + high comments)?
   - Any clear points of controversy or consensus?
   - Compared to last cycle, any notable shift in focus?

4. **Worth Deep Reading** — List 2-3 pieces most worth developers/researchers reading in depth, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `Você é um analista de notícias do setor de IA. Abaixo estão os posts mais populares relacionados a IA no Hacker News nas últimas 24 horas até ${dateStr} (${data.stories.length} no total, ordenados por pontuação):

---

${storiesText}

---

Gere um resumo estruturado da comunidade de IA no Hacker News em português:

1. **Destaques do dia** — 3-5 frases resumindo os temas e o sentimento da comunidade hoje

2. **Principais notícias e discussões** — Organize por categoria e selecione 2-5 itens representativos por grupo:
   - Título (com link original) + link da discussão no HN
   - Pontuação e número de comentários
   - Uma frase explicando por que o item importa e como a comunidade reagiu

   Categorias:
   - 🔬 Modelos e pesquisa
   - 🛠️ Ferramentas e engenharia
   - 🏢 Notícias do setor
   - 💬 Opiniões e debates

3. **Sinal de sentimento da comunidade** — 100-200 palavras analisando:
   - Quais tópicos tiveram mais atividade?
   - Houve controvérsias claras ou consenso?
   - O foco mudou em relação ao ciclo anterior?

4. **Vale a leitura aprofundada** — Liste 2-3 itens que mais valem leitura completa, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.
`;
}

// ---------------------------------------------------------------------------
// ArXiv prompt
// ---------------------------------------------------------------------------

export function buildArxivPrompt(data: ArxivData, dateStr: string, lang: Lang = "zh"): string {
  const papersText = data.papers
    .map((p, i) => {
      const authors =
        p.authors.length > 3 ? p.authors.slice(0, 3).join(", ") + " et al." : p.authors.join(", ");
      const cats = p.categories.slice(0, 3).join(", ");
      return lang === "en"
        ? `${i + 1}. **${p.title}**\n` +
            `   Link: ${p.url}\n` +
            `   Authors: ${authors} | Categories: ${cats}\n` +
            `   Published: ${p.published.slice(0, 10)}\n` +
            `   Abstract: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`
        : `${i + 1}. **${p.title}**\n` +
            `   Link: ${p.url}\n` +
            `   Autores: ${authors} | Categorias: ${cats}\n` +
            `   Publicado: ${p.published.slice(0, 10)}\n` +
            `   Resumo: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`;
    })
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI research analyst. The following are recent AI-related papers from ArXiv as of ${dateStr} (${data.papers.length} papers from cs.AI, cs.CL, cs.LG):

---

${papersText}

---

Generate a structured ArXiv AI Research Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most significant research directions and breakthroughs

2. **Key Papers** — Select 8-15 most important papers, organized by theme:
   - 🧠 Large Language Models (architecture, training, alignment, evaluation)
   - 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
   - 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
   - 📊 Applications (domain-specific, multimodal, code generation)

   For each paper:
   - Title (with ArXiv link)
   - Authors (abbreviated)
   - One sentence: key contribution and why it matters

3. **Research Trend Signal** — 100-200 words on emerging research directions visible from today's submissions

4. **Worth Deep Reading** — 2-3 papers most worth reading in full, with reasoning

Style: English, concise and professional, preserve all ArXiv links.
`;
  }

  return `Você é um analista de pesquisa em IA. Abaixo estão artigos recentes relacionados a IA no ArXiv em ${dateStr} (${data.papers.length} no total, de cs.AI, cs.CL e cs.LG):

---

${papersText}

---

Gere um resumo estruturado de pesquisa em IA no ArXiv em português:

1. **Destaques do dia** — 3-5 frases com as direções e avanços mais relevantes

2. **Artigos-chave** — Selecione 8-15 artigos importantes, organizados por tema:
   - 🧠 Modelos de linguagem
   - 🤖 Agentes e raciocínio
   - 🔧 Métodos e frameworks
   - 📊 Aplicações

   Para cada artigo:
   - Título (com link do ArXiv)
   - Autores
   - Uma frase sobre a contribuição principal e por que vale atenção

3. **Sinal de tendência em pesquisa** — 100-200 palavras sobre direções emergentes observadas hoje

4. **Vale ler a fundo** — 2-3 artigos mais valiosos para leitura completa

Estilo: português conciso e profissional, preservando todos os links do ArXiv.
`;
}

// ---------------------------------------------------------------------------
// Hugging Face prompt
// ---------------------------------------------------------------------------

export function buildScienceDailyPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI research news analyst. The following are recent ScienceDaily stories from the Artificial Intelligence RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily AI digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current AI research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de notícias de pesquisa em IA. Abaixo estão as histórias recentes do feed RSS de Artificial Intelligence do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre IA em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em IA
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildRoboticsPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a robotics research analyst. The following are recent ScienceDaily stories from the Robotics RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Robotics digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current robotics research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em robótica. Abaixo estão as histórias recentes do feed RSS de Robotics do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Robótica em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em robótica
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildHackingPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a cybersecurity research analyst. The following are recent ScienceDaily stories from the Hacking RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Cybersecurity digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current cybersecurity research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em cibersegurança. Abaixo estão as histórias recentes do feed RSS de Hacking do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Cibersegurança em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em cibersegurança
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildMemoryPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a neuroscience research analyst specializing in memory. The following are recent ScienceDaily stories from the Memory RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Memory & Neuroscience digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current memory and neuroscience research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em neurociência especializado em memória. Abaixo estão as histórias recentes do feed RSS de Memory do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Memória e Neurociência em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em neurociência e memória
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function build3dPrintingPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a manufacturing technology research analyst. The following are recent ScienceDaily stories from the 3-D Printing RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily 3D Printing digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current 3D printing and manufacturing research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em tecnologia de manufatura. Abaixo estão as histórias recentes do feed RSS de 3-D Printing do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Impressão 3D em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em impressão 3D e manufatura
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildSolarEnergyPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a renewable energy research analyst. The following are recent ScienceDaily stories from the Solar Energy RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Solar Energy digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current solar energy and renewable tech research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em energia renovável. Abaixo estão as histórias recentes do feed RSS de Solar Energy do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Energia Solar em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em energia solar e renováveis
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildLivingWellPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a health and wellness research analyst. The following are recent ScienceDaily stories from the Living Well RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Living Well digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current wellness and health living research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em saúde e bem-estar. Abaixo estão as histórias recentes do feed RSS de Bem-Estar do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Bem-Estar em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em bem-estar e vida saudável
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildMentalHealthPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a mental health research analyst. The following are recent ScienceDaily stories from the Mental Health RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Mental Health digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current mental health research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em saúde mental. Abaixo estão as histórias recentes do feed RSS de Saúde Mental do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Saúde Mental em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em saúde mental
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildEducationPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an education research analyst. The following are recent ScienceDaily stories from the Education RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Education digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current education and learning research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em educação. Abaixo estão as histórias recentes do feed RSS de Educação do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Educação em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em educação e aprendizagem
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildEngineeringPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an engineering research analyst. The following are recent ScienceDaily stories from the Engineering RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Engineering digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current engineering research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em engenharia. Abaixo estão as histórias recentes do feed RSS de Engenharia do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Engenharia em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em engenharia
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildAgriculturePrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an agricultural research analyst. The following are recent ScienceDaily stories from the Agriculture & Food RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Agriculture & Food digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current agriculture and food science research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em agricultura. Abaixo estão as histórias recentes do feed RSS de Agricultura e Alimentação do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Agricultura e Alimentação em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em agricultura e ciência dos alimentos
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildEnvironmentalPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an environmental science research analyst. The following are recent ScienceDaily stories from the Environmental Science RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Environmental Science digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current environmental science research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em ciências ambientais. Abaixo estão as histórias recentes do feed RSS de Ciências Ambientais do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Ciências Ambientais em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em ciências ambientais
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildArchaeologyPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an archaeology research analyst. The following are recent ScienceDaily stories from the Archaeology RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Archaeology digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current archaeology research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em arqueologia. Abaixo estão as histórias recentes do feed RSS de Arqueologia do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Arqueologia em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em arqueologia
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildSocialPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a social science research analyst. The following are recent ScienceDaily stories from the Social Issues RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Social Issues digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about current social science research directions
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um analista de pesquisa em ciências sociais. Abaixo estão as histórias recentes do feed RSS de Questões Sociais do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Questões Sociais em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito das direções atuais da pesquisa em ciências sociais
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}

export function buildOffbeatPrompt(data: ScienceDailyData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Published: ${s.publishedAt.slice(0, 10)}\n   Summary: ${s.description}`
        : `${i + 1}. **${s.title}**\n   Link: ${s.url}\n   Publicado: ${s.publishedAt.slice(0, 10)}\n   Resumo: ${s.description}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are a science news editor specializing in unusual and offbeat discoveries. The following are recent ScienceDaily stories from the Strange & Offbeat RSS feed as of ${dateStr} (${data.stories.length} stories total):

---

${storiesText}

---

Generate a structured ScienceDaily Strange & Offbeat digest in English:

1. **Today's Highlights** — 3-5 sentences on the most important research/news items
2. **Key Stories** — Select the most relevant stories, grouping related topics when useful
3. **Research Signal** — 100-200 words on what these stories suggest about what these unusual discoveries reveal about the frontiers of science
4. **Worth Reading** — 2-3 stories most worth deeper reading, with brief reasoning

Style: English, concise and professional, preserving all original links.`;
  }

  return `Você é um editor de ciências especializado em descobertas incomuns e curiosas. Abaixo estão as histórias recentes do feed RSS de Curiosidades e Fatos Incomuns do ScienceDaily até ${dateStr} (${data.stories.length} no total):

---

${storiesText}

---

Gere um resumo estruturado do ScienceDaily sobre Curiosidades e Fatos Incomuns em português:

1. **Destaques do dia** — 3-5 frases sobre as notícias e pesquisas mais importantes
2. **Principais histórias** — Selecione as histórias mais relevantes e agrupe temas relacionados quando fizer sentido
3. **Sinal de pesquisa** — 100-200 palavras sobre o que essas histórias sugerem a respeito do que essas descobertas incomuns revelam sobre as fronteiras da ciência
4. **Vale ler** — 2-3 histórias que mais merecem leitura aprofundada, com breve justificativa

Estilo: português conciso e profissional, preservando todos os links originais.`;
}
