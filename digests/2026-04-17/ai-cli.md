# Relatório diário da comunidade de ferramentas AI CLI 2026-04-17

> Gerado em: 2026-04-17 02:01 UTC | Ferramentas cobertas: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Comparação entre ferramentas

# Relatório Comparativo: Ecossistema de Ferramentas AI CLI

## 2026-04-17

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI em 17 de abril de 2026 apresenta **estágios de maturidade distintos**: Claude Code (Anthropic) e Gemini CLI (Google) lideram em volume de releases e iteração rápida, enquanto Copilot CLI (GitHub) mantém ritmo estável de hotfixes. A diversificação de provedores é evidente — todas as ferramentas expandem suporte a modelos locais (Ollama, Gemma, Opus 4.7) e múltiplas nuvens (Bedrock, Vertex, Azure). Os desafios recorrentes de **autenticação, rate limiting e compatibilidade de reasoning blocks** indicam que a indústria ainda está padronizando interfaces de modelos com capacidades de pensamento estendido. Plataformas orientadas a comunidade como Kimi Code e Qwen Code enfrentam problemas de infraestrutura (erros 401 massivos), enquanto OpenCode e Pi demonstram foco em extensibilidade e interoperabilidade multi-provedor.

---

## 2. Comparação de Atividade

| Ferramenta | Issues Abertas | Issues em Destaque | PRs Abertos | PRs Fechados (24h) | Releases (24h) | Engajamento Máximo |
|------------|----------------|-------------------|-------------|-------------------|----------------|-------------------|
| **Claude Code** | ~50 | 10 | 5 | 1 | 2 | 808 👍 (#45596) |
| **OpenAI Codex** | ~50 | 10 | 9 | 3 | 0 | 555 👍 (#10450) |
| **Gemini CLI** | 50+ | 10 | 20+ | 5 | 0 | N/D |
| **Copilot CLI** | ~50 | 10 | 0 | 0 | 3 | 33 👍 (#1703) |
| **Kimi Code** | ~20 | 6 | ~5 | 3 | 0 | 11 comentários (#1865) |
| **OpenCode** | ~50 | 10 | ~15 | ~10 | 1 | 56 comentários (#20695) |
| **Pi** | ~30 | 10 | ~5 | ~10 | 3 | 11 comentários (#3259) |
| **Qwen Code** | ~25 | 10 | ~20 | ~5 | 1 | 83 comentários (#3203) |

**Observação:** Claude Code e OpenAI Codex concentram o maior volume de issues com votes explícitos, indicando comunidades mais orientadas a votações. Qwen Code e OpenCode registram maior volume de comentários relative a votes, sugerindo culturas de discussão mais intensas.

---

## 3. Direções de Features Compartilhadas

### 3.1 Desenvolvimento Remoto e Multiplataforma

| Ferramenta | Issue | Status |
|------------|-------|--------|
| OpenAI Codex | Remote Development (#10450) | 555 👍 |
| OpenAI Codex | macOS Intel support (#10410) | 285 👍 |
| OpenAI Codex | WSL mode startup (#14461) | 9 comentários |
| Gemini CLI | SSH text scrambling (#24202) | 1 comentário |
| Gemini CLI | Remote development via SSH | Issue correlata |

**Análise:** Desenvolvimento remoto é demanda transversal, impulsionado por workflows containerizados e cloud workstations. Claude Code não reporta issues similares, sugerindo que sua arquitetura CLI-first é naturalmente compatível.

### 3.2 Modelo de Contexto Expandido

| Ferramenta | Feature Request | Detalhe |
|------------|-----------------|---------|
| Copilot CLI | 1M context para Opus 4.7 (#2785) | Paridade com Claude Code |
| Copilot CLI | Modelos organizacionais (#1703) | Listagem completa |
| Copilot CLI | GPT-5.4 xhigh selector (#2725) | UI desatualizada |
| Claude Code | Opus 4.7 xhigh effort | ✅ Implementado |

**Análise:** A corrida por contexto de 1M tokens e níveis de effort intermediários (xhigh, max) evidencia pressão por capacidades de reasoning mais sophisticated. Ferramentas com UI desatualizada (Copilot CLI) enfrentam fricção de paridade.

### 3.3 Rate Limiting e Confiabilidade

| Ferramenta | Issue | Gravidade |
|------------|-------|-----------|
| Copilot CLI | Loop de rate limits (#2756, #2754) | Crítica |
| Copilot CLI | Rate limits mesmo com Plus (#8628) | Crítica |
| OpenAI Codex | Autenticação rate limits (#8628) | Crítica |
| Qwen Code | Erros 401 em massa | Crítica |

**Análise:** Problemas de rate limiting aparecem em 4 de 8 ferramentas, indicando desafios sistêmicos de infraestrutura de API. Ferramentas que dependem exclusivamente de provedores externos enfrentam maior volatilidade.

### 3.4 Interoperabilidade de Modelos

| Feature | Ferramentas Afetadas | Status |
|---------|---------------------|--------|
| Opus 4.7 compatibility | Claude Code, OpenCode, Pi, Kimi Code | Correção em progresso |
| Bedrock integration | Claude Code, Pi | Bug reportado |
| Ollama local models | OpenCode | Tools não executam |
| Gemma 4 support | Gemini CLI, OpenCode | Em desenvolvimento |

---

## 4. Análise de Diferenciação

### 4.1 Posicionamento de Público

| Ferramenta | Público Primário | Posicionamento |
|------------|------------------|----------------|
| **Claude Code** | Desenvolvedores individuais e empresas (assinantes Max) | Premium, produtividade individual |
| **OpenAI Codex** | Usuários ChatGPT Plus/Pro, developers | Ecossistema OpenAI, multi-interface |
| **Copilot CLI** | Usuários GitHub ecosystem | CLI para VS Code users |
| **Gemini CLI** | Desenvolvedores Google Cloud, fans de open source | Open source, multi-provedor |
| **Kimi Code** | Mercado chinês, desenvolvedores Moonshot | Local-first, Asia market |
| **OpenCode** | Desenvolvedores extensíveis, power users | Extensibilidade, multi-provider |
| **Pi** | Desenvolvedores individuais, minimalistas | Leveza, terminal-native |
| **Qwen Code** | Mercado chinês, API Qwen | Performance, low-cost |

### 4.2 Abordagem Técnica Distintiva

**Claude Code** diferencia-se por:
- Release velocity extrema (2 releases em 24h)
- Integração nativa com assinatura Max tier
- Forte investimento em /buddy como companion de produtividade

**OpenCode** diferencia-se por:
- Refatorações agressivas de arquitetura (namespace unwrap)
- Vercel sandbox substrate para multi-tenant
- Feature de compaction com retention de contexto recente

**Gemini CLI** diferencia-se por:
- Suporte nativo a modelos locais (Gemma, Gemma 4)
- Detecção de comandos perigosos (rm)
- Seatbelt profiles customizáveis

**Pi** diferencia-se por:
- API de extensibilidade com widgets interativos
- OSC 8 hyperlinks em Markdown
- Suporte a múltiplos provedores (Anthropic, Bedrock, Vertex)

**Copilot CLI** diferencia-se por:
- Skills/plugins discovery
- Menor foco em releases públicas
- Issues orientadas a paridade com VS Code

### 4.3 Modelo de Receita e Sustentabilidade

| Ferramenta | Modelo | Evidência |
|------------|--------|-----------|
| Claude Code | Assinatura Max | Issues de billing (#5088, #43257) |
| Copilot CLI | Assinatura Pro/Plus | Rate limits para Plus (#8628) |
| Qwen Code | Free tier → Paid (polêmica) | Issue #3203 (quota 1000→100) |
| Gemini CLI | Open source | Sem monetization direct |
| OpenCode | Freemium | GO subscription (#22644) |
| Kimi Code | freemium | Thinking process como feature diferenciada |

---

## 5. Tração e Maturidade da Comunidade

### 5.1 Velocidade de Iteration

| Ferramenta | Releases/semana (média) | Tempo de resposta a bugs críticos |
|------------|------------------------|----------------------------------|
| **Claude Code** | ~14 | < 24h (v2.1.112 em 24h após v2.1.111) |
| **Pi** | ~3 | < 48h (3 releases em ~48h) |
| **Copilot CLI** | ~3 | < 48h (v1.0.29-31 em sequência) |
| **OpenCode** | Variável | Múltiplos PRs por dia (maratonas) |
| **Qwen Code** | ~1 nightly | Backlog de 157 PRs abertos |
| **OpenAI Codex** | ~0.5 | Não há releases CLI recentes |
| **Gemini CLI** | ~0.5 | 30+ issues atualizadas/24h |
| **Kimi Code** | ~0.5 | Releases ocasionais |

### 5.2 Engajamento Comunitário

| Ferramenta | Issue com Maior Engajamento | Tipo |
|------------|----------------------------|------|
| Claude Code | #45596 — Bring Back Buddy (808 👍) | Feature Request |
| OpenAI Codex | #10450 — Remote Development (555 👍) | Feature Request |
| OpenCode | #20695 — Memory Megathread (56 comments) | Bug/Investigation |
| Qwen Code | #3203 — Free Tier Policy (83 comments) | Policy Discussion |
| Copilot CLI | #1703 — Modelos Organizacionais (33 👍) | Feature Parity |
| Gemini CLI | #25323 — RipGrep slow startup | Bug P1 |
| Kimi Code | #1865 — Thinking process disappeared (11 comments) | UX Regression |
| Pi | #3259 — Shift+Enter Zellij (11 comments) | Regression Fix |

**Análise:** Claude Code e OpenAI Codex demonstram comunidades mais maduras em termos de upvote, enquanto Qwen Code e OpenCode priorizam discussão detalhada. Issues de **produtividade individual** (Claude Code) e **multiplataforma** (OpenAI Codex) geram maior mobilização.

### 5.3 Qualidade de triagem e labels

| Ferramenta | Uso de Labels | Labels Semânticos | Policy de triagem |
|------------|---------------|-------------------|-------------------|
| Claude Code | ✅ Estendido | 🔴🟡🟢 + área + priority | Equipe dedicada |
| OpenAI Codex | ✅ Estendido | regression, windows-os, etc. | Labels 自动 adicionar |
| Gemini CLI | ✅ Parcial | priority/P1-P2, área | Maintainer-only labels |
| Copilot CLI | ✅ Parcial | area:* labels | N/D |
| Qwen Code | ⚠️ Limitado | Poucos labels customizados | N/D |
| OpenCode | ✅ Estendido | Área, priority, regression | Equipe ativa |
| Pi | ✅ Estendido | Closed/open, regression | N/D |
| Kimi Code | ⚠️ Limitado | Bug/enhancement básico | N/D |

---

## 6. Sinais de Tendência

### 6.1 Consolidação de "Reasoning Effort" como Padrão

Múltiplas ferramentas estão implementando escadas de effort para modelos com capacidades de raciocínio:

- **Claude Code:** `off / minimal / low / medium / high / xhigh / max`
- **Pi:** `off / minimal / low / medium / high / xhigh / max` (proposta)
- **OpenAI Codex:** Implicit via xhigh para GPT-5.4

**Implicação:** Modelos com reasoning chains se tornarão o default, e usuários precisarão de controle granular sobre trade-offs latency/quality.

### 6.2 Multi-Provedor como Expectativa

| Provedor | Suporte Observado |
|----------|-------------------|
| Anthropic (Claude) | Todas as ferramentas |
| OpenAI (GPT-5) | Codex, Copilot, OpenCode, Pi |
| Google (Gemini) | Gemini CLI, Copilot CLI, OpenCode |
| Amazon (Bedrock) | Claude Code, Pi |
| Local (Ollama/Gemma) | Gemini CLI, OpenCode, Pi |
| Chinês (Qwen/Kimi) | Kimi Code, Qwen Code |

**Implicação:** Providers lock-in está diminuindo. Ferramentas que não suportarem multi-provider perderão market share para agregadores como Pi e OpenCode.

### 6.3 Pressão sobre Free Tiers

Qwen Code (#3203) propõe reduzir quota gratuita de 1000 para 100 req/dia. Se，其他的 provedores跟进, isso sinaliza **fin da era "free unlimited"** em AI CLI.

**Implicação:** Ferramentas que manterem free tiers generosos (Claude Code, Copilot CLI) podem capturar developers individuais price-sensitive.

### 6.4 Terminal-Native vs. Desktop App Parity

| Feature | CLI | Desktop App | Delta |
|---------|-----|-------------|-------|
| `/compact` | ✅ Codex | ❌ Codex | Paridade pendiente |
| Remote Development | ❌ Codex | ✅ Planejado | CLI atrasada |
| Copy on Select | ✅ Claude Code | N/A | N/A |

**Implicação:** CLI está se tornando platform primária para power users, mas desktop apps retêm features que ainda não migraram.

### 6.5 Memory Management como Bottleneck

| Ferramenta | Issue | Status |
|------------|-------|--------|
| OpenCode | Memory Megathread (#20695) | Investigação ativa |
| Claude Code | HTTP server tools indisponíveis (#49152) | Regressão |
| OpenAI Codex | Context poisoning via Cloudflare (#17880) | Investigação |

**Implicação:** Sessions longas com múltiplos tool calls estão revelando memory leaks e context corruption issues. Ferramentas investirão em compaction smarter e context window management.

---

## Síntese Executiva

| Dimensão | Líder | Seguidor | Tendência |
|----------|-------|----------|-----------|
| **Release Velocity** | Claude Code | Pi, Copilot CLI | Concentração em few leaders |
| **Engajamento Comunitário** | Claude Code, OpenAI Codex | Qwen Code, OpenCode | Duas velocidades distintas |
| **Multi-Provedor** | Pi, OpenCode | Gemini CLI | Uniformização |
| **Extensibilidade** | OpenCode, Pi | Claude Code | Widgets/APIs emergentes |
| **Infraestrutura Estável** | Claude Code, Gemini CLI | Qwen Code | Divergência de maturity |
| **Produtividade Individual** | Claude Code | Copilot CLI | Claude liderando perception |

**Recomendação para decisores:** Avaliar Claude Code para produtividade individual premium, OpenCode/Pi para ambientes multi-cloud, e Gemini CLI para projetos open source ou Google Cloud-centric. Evitar Qwen Code até estabilização de auth.

---

*Relatório sintetizado de 8 repositórios GitHub • 2026-04-17*

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório de Destaques — Ecossistema Claude Code Skills
**Período:** até 2026-04-17 | **Fonte:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Ranking das Skills mais quentes

| # | Skill / PR | Objetivo | Pontos quentes | Estado |
|---|-----------|---------|----------------|--------|
| **1** | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skill de avaliação de qualidade de Skills em 5 dimensões (estrutura, segurança, usabilidade, etc.) | Demanda direta da comunidade por ferramentas de curadoria; segurança como preocupação recorrente | Aberto desde 2025-11-06 |
| **2** | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Cobertura completa do stack de testes (Trophy model, unit, React, E2E) | Resposta direta à lacuna de Skills focadas em qualidade de código; unifica padrões dispersos | Aberto desde 2026-03-22 |
| **3** | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Controle de qualidade tipográfica em documentos gerados por IA (orfãos, viúvas, alinhamento) | Resolve problema universal em toda saída documental da IA; impacta todas as Skills de documento | Aberto desde 2026-03-04 |
| **4** | **[sensory — AppleScript macOS automation](https://github.com/anthropics/skills/pull/806)** | Automação nativa macOS via `osascript`, substituindo screenshot-based computer use | Alternativa eficiente para automação desktop; tier de permissão granular | Aberto desde 2026-03-29 |
| **5** | **[ODT — OpenDocument](https://github.com/anthropics/skills/pull/486)** | Criação, preenchimento e parsing de arquivos ODT/ODS/OpenDocument | Expansão do ecossistema de documentos para ISO open-standard; cobregap entre DOCX e formatos livres | Aberto desde 2026-03-01 |
| **6** | **[record-knowledge](https://github.com/anthropics/skills/pull/521)** | Persistência de contexto entre sessões via Markdown em `.claude/knowledge/` | Resolves "context loss between sessions" — problema #1 de UX do Claude Code; alta relevância prática | Aberto desde 2026-03-05 |
| **7** | **[frontend-design — revisão](https://github.com/anthropics/skills/pull/210)** | Clareza e actionability melhoradas para guidance executável em design | Esforço de maturidade de skill existente; visa coerência interna e token efficiency | Aberto desde 2026-01-05 |
| **8** | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Auditoria sistemática de código órfão, arquivos não utilizados e documentação ausente | Workflow de 10 passos com output `CODEBASE-STATUS.md` como fonte única de verdade | Aberto desde 2025-12-16 |

---

## 2. Tendências de demanda da comunidade

Extraídas das Issues com maior engajamento:

| Tendência | Issue de referência | Descrição |
|-----------|--------------------|-----------|
| **🔧 Infraestrutura de Skills** | [#202](https://github.com/anthropics/skills/issues/202) (8 comentários) | *skill-creator* deve ser reescrito como skill operacional e não documentação para devs — tons verbosos desperdiçam tokens |
| **🧪 Avaliação automática** | [#556](https://github.com/anthropics/skills/issues/556) (5 👍) | `run_eval.py` nunca dispara Skills/comandos — 0% de trigger rate; ferramenta de eval quebrada |
| **🔐 Confiança e segurança** | [#492](https://github.com/anthropics/skills/issues/492) (4 comentários) | Skills comunitárias sob namespace `anthropic/` simulando oficiais — abuso de limite de confiança |
| **📡 Compartilhamento organizacional** | [#228](https://github.com/anthropics/skills/issues/228) (4 👍) | Necessidade de biblioteca compartilhada ou link direto para Skills corporativas (atualmente = workflow manual) |
| **🔄 Gestão de ciclo de vida** | [#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406) | API retorna 500 ao deletar versões de Skills; erros 404 ao carregar Skills; upload quebrado |
| **📋 Governança de agentes** | [#412](https://github.com/anthropics/skills/issues/412) (CLOSED) | Proposta de skill de governança para sistemas multi-agente (enforcement, detecção de ameaças, audit trails) |
| **🔌 Exposição como MCPs** | [#16](https://github.com/anthropics/skills/issues/16) (4 comentários) | Skills deveriam ser expostas como MCP servers para padronizar interfaces de software |
| **☁️ Suporte Bedrock** | [#29](https://github.com/anthropics/skills/issues/29) (4 comentários) | Demanda recorrente de如何使用 Skills com AWS Bedrock |

---

## 3. Skills promissoras ainda pendentes

PRs com foco técnico relevante e sem merge:

| PR | Skill | Por que值得关注 | Última atualização |
|----|-------|-------------------|---------------------|
| [#541](https://github.com/anthropics/skills/pull/541) | `fix(docx): tracked change w:id collision` | Corrupção real de documentos — corrige compartilhamento de `w:id` com bookmarks | 2026-04-16 |
| [#539](https://github.com/anthropics/skills/pull/539) | `fix(skill-creator): YAML validation` | Previne falha silenciosa de parsing YAML com caracteres especiais em `description` | 2026-04-16 |
| [#538](https://github.com/anthropics/skills/pull/538) | `fix(pdf): case-sensitive file refs` | 8 mismatches que quebram em sistemas case-sensitive (Linux) | 2026-04-16 |
| [#362](https://github.com/anthropics/skills/pull/362) | `fix(skill-creator): UTF-8 panic` | Prevê panic no Rust caused by multi-byte chars; impacta globalidade | 2026-02-12 |
| [#374](https://github.com/anthropics/skills/pull/374) | `x402 BSV micropayment` | Micropagamentos via linguagem natural — caso de uso emergente para monetização de IA | 2026-04-01 |
| [#181](https://github.com/anthropics/skills/pull/181) | `SAP-RPT-1-OSS predictor` | Integração com modelo tabular open-source da SAP para analytics preditivo | 2026-03-16 |
| [#335](https://github.com/anthropics/skills/pull/335) | `masonry-generate-image-and-videos` | Geração de imagens (Imagen 3.0) e vídeos (Veo 3.1) via CLI | 2026-03-14 |
| [#509](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md` | Crescimento de 25% para saúde comunitária medível; pré-requisito para crescimento do ecossistema | 2026-03-19 |

---

## 4. Insight sobre o ecossistema de Skills

> **A comunidade busca urgentemente Skills que eleve a qualidade e a governança do próprio ecossistema — tanto ferramentas de avaliação e boas práticas (meta-skills) quanto persistência de contexto e automação de fluxos de trabalho — sinalizando uma transição do ecossistema de Skills de "experimentos isolados" para uma plataforma profissional de automação agents.**

---

# Relatório Diário da Comunidade Claude Code
## 📅 17 de abril de 2026

---

## 1. Destaques do Dia

A Anthropic релизиu duas versões em 24 horas (v2.1.111 e v2.1.112), trazendo o novo nível de esforço **xhigh** para Opus 4.7 e tornando o modo Auto disponível para assinantes Max. A comunidade segue mobilizada em torno da remoção abrupta do comando `/buddy`, que já acumula mais de 800 reações, enquanto problemas de integração com Bedrock e autenticação OAuth dominam as discussões de bugs.

---

## 2. Lançamentos

### v2.1.112
📦 **Correção urgente**
- Corrige erro *"claude-opus-4-7 is temporarily unavailable"* que afetava o modo Auto
- [GitHub Release v2.1.112](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)

### v2.1.111
📦 **Novidades principais**
- **Opus 4.7 xhigh disponível** — nível de esforço intermediário entre `high` e `max`, configurável via `/effort`, `--effort` ou settings do modelo
- Modo Auto agora acessível para assinantes **Max** ao usar Opus 4.7
- [GitHub Release v2.1.111](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)

---

## 3. Issues em Evidência

### 🔥 #45596 — "Bring Back Buddy" — 187 comentários | 808 👍
**Situação:** Comunidade pedindo retorno do comando `/buddy`, removido silenciosamente na v2.1.97 sem changelog.

**Por que importa:** Milhares de desenvolvedores perderam um companheiro de trabalho sem aviso prévio. A força da mobilização (808+ 👍) demonstra o valor percebido dessa funcionalidade.

**Reação:** Discussão intensa sobre alternativas e consequências para produtividade.
- [Ver issue #45596](https://github.com/anthropics/claude-code/issues/45596)

---

### ⚠️ #5088 — Conta desativada após pagamento Max 5x — 164 comentários | 51 👍
**Situação:** Usuários têm contas desabilitadas imediatamente após tentarem renovar ou adquirir o plano Max 5x.

**Por que importa:** Afeta diretamente a receita e confiança no produto. Problema crítico de billing/auth em produção.

**Reação:** Usuários relatando impossibilidade de acesso tanto ao Claude Code quanto ao claude.ai.
- [Ver issue #5088](https://github.com/anthropics/claude-code/issues/5088)

---

### 🐛 #49238 — Opus 4.7 não funciona com Bedrock — 45 comentários | 87 👍
**Situação:** Bug reportado no dia anterior (16/04) sobre incompatibilidade do Opus 4.7 com Amazon Bedrock.

**Por que importa:** Bedrock é opção popular para empresas com requisitos de compliance ou infraestrutura AWS. A incompatibilidade impede adoção em massa.

**Reação:** Comunidade confirmando o problema; issue duplicada #49279 foi fechada como duplicata.
- [Ver issue #49238](https://github.com/anthropics/claude-code/issues/49238)

---

### ✅ #33587 — Auto mode indisponível (macOS) — 35 comentários | 60 👍 | CLOSED
**Situação:** Modo Auto ficava preso em "temporarily unavailable" tanto por Shift+Tab quanto por `defaultMode: "auto"`.

**Por que importa:** Problema resolvido nesta release; usuários Max finalmente conseguem acessar Auto mode conforme prometido na v2.1.111.

**Reação:** Issue fechada após correção em v2.1.112.
- [Ver issue #33587](https://github.com/anthropics/claude-code/issues/33587)

---

### 🔐 #47185 — Linear MCP OAuth falha com "Invalid client" — 11 comentários | 6 👍
**Situação:** OAuth do Linear MCP rejeita requisições com erro de clientId inválido, forçando re-autenticação a cada sessão.

**Por que importa:** Integração com Linear (ferramenta de gestão de projetos popular) quebrada; impacto direto em workflows de desenvolvimento.

**Reação:** Bug marcado com `has repro`; aguardando correção.
- [Ver issue #47185](https://github.com/anthropics/claude-code/issues/47185)

---

### 📝 #48243 — Notion plugin "Internal Server Error" — 10 comentários | 7 👍
**Situação:** Plugin Notion (`notion@claude-plugins-official` v0.1.0) retorna erro persistente mesmo após reinstall.

**Por que importa:** Afeta usuários que dependem de busca em bases Notion para documentação ou gestão de conhecimento.

**Reação:** Bug em plugin oficial; comunidade reportando tentativas de troubleshooting infrutíferas.
- [Ver issue #48243](https://github.com/anthropics/claude-code/issues/48243)

---

### ⌨️ #49313 — Delete apaga todas as linhas do prompt — 9 comentários | 12 👍
**Situação:** Comando delete remove todas as linhas do prompt ao invés de apenas a linha atual no VS Code.

**Por que importa:** Bug de UX básico que pode causar perda acidental de trabalho em sessões longas.

**Reação:** Reportado com Feedback ID; plataforma VS Code específica.
- [Ver issue #49313](https://github.com/anthropics/claude-code/issues/49313)

---

### 💳 #43257 — Max plan aparecendo como Free tier — 8 comentários | 4 👍
**Situação:** Assinantes ativos do plano Max 5x veem interface como se estivessem no tier Free.

**Por que importa:** Confusão sobre status real da assinatura; pode impactar uso e billing.

**Reação:** Issue aguarda triagem pela equipe.
- [Ver issue #43257](https://github.com/anthropics/claude-code/issues/43257)

---

### 🎯 #29030 — Feature: copy on select — 4 comentários | 5 👍
**Situação:** Usuários pedem configuração para copiar texto automaticamente ao selecionar.

**Por que importa:** Melhora workflow para desenvolvedores que frequentemente copiam saídas de terminal.

**Reação:** Enhancement em discussão; aguardando implementação.
- [Ver issue #29030](https://github.com/anthropics/claude-code/issues/29030)

---

### 🔊 #44468 — Voice mode push-to-talk configurável — 4 comentários | 1 👍
**Situação:** Tecla push-to-talk do voice mode está hardcoded para `Space`, causando conflitos com terminais/multiplexadores.

**Por que importa:** Usuários de tmux/screen não conseguem usar voice mode sem conflicto.

**Reação:** Feature request aguarda implementação.
- [Ver issue #44468](https://github.com/anthropics/claude-code/issues/44468)

---

## 4. Progresso de PRs Importantes

| # | PR | Autor | Status | Impacto |
|---|-----|-------|--------|---------|
| 1 | [Refactor: GitHub API client em github-api.ts](https://github.com/anthropics/claude-code/pull/49596) | bsene | 🟡 Aberto | Extrai cliente GitHub compartilhado com testes; facilita manutenção de integrações Git |
| 2 | [devcontainer: firewall com IP management](https://github.com/anthropics/claude-code/pull/40322) | scottrigby | 🟡 Aberto | Melhora configuração de devcontainer com suporte a IPs estáticos/dinâmicos |
| 3 | [Format: conversation-analyzer.md](https://github.com/anthropics/claude-code/pull/49230) | revo1290 | 🟡 Aberto | Melhora documentação com formatação de exemplos |
| 4 | [fix(hookify): Write content para new_text rules](https://github.com/anthropics/claude-code/pull/48335) | Rohan5commit | 🟡 Aberto | Corrige suporte a `new_text` em payloads Write; fecha #48284 |
| 5 | [perf: run commit-commands com haiku](https://github.com/anthropics/claude-code/pull/48905) | abishekgiri | ✅ Fechado | Otimiza comandos de commit usando modelo Haiku para melhor performance |

---

## 5. Tendências de Pedidos de Features

### 🎨 Customização de Interface e UX
- **Copy on select** — automatizar cópia de seleção (#29030)
- **Voice mode configurável** — keybind customizável para push-to-talk (#44468)
- **Visibilidade de tool calls** — esconder/colapsar/agrupar no VS Code (#49646)
- **UI language localization** — suporte a múltiplos idiomas (#31413)

### 📊 Analytics e Insights
- **Filtro de data em /insights** — analisarUsage em janelas específicas (#29539)
- **Números fixos em prompts de permissão** — consistência 0=No, 1=Yes, 2=Yes-all (#49643)

### 🔧 Integração e Ecossistema
- **MCP per-project scoping** — excluir integrações account-level por projeto (#49638)
- **Model switching em Cowork tasks** — trocar modelo em tarefas existentes (#49649)

### 👥 Colaboração
- **Remote Control no Max plan** — slash command e flag disponíveis (#49639)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Prioridade Alta

| Categoria | Problema | Impacto | Issues |
|-----------|----------|---------|--------|
| **Auth/Billing** | Conta desativada pós-pagamento; plano Max exibido como Free | Bloqueio de uso + confusão | #5088, #43257 |
| **Bedrock** | Opus 4.7 incompatível com Bedrock; flags beta causando 400 errors | Impossibilita uso em AWS | #49238, #49648 |
| **MCP OAuth** | Linear MCP falhando re-autenticação constante | Workflow quebrado | #47185 |
| **MCP Regressão** | HTTP server tools indisponíveis desde 2.1.109 | Ferramentas customizadas quebradas | #49152 |

### 🟡 Atenção Média

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **TUI** | Delete apagando todas as linhas (VS Code); Ctrl+Backspace no Windows | Perda acidental de conteúdo |
| **Plugins** | Notion MCP retornando Internal Server Error | Integração oficial quebrada |
| **Skills** | User-defined skills sem autocomplete; /buddy ausente | Perda de produtividade |
| **Desktop App** | Diff view vermelho/verde sumiu; PR status bar mostrando PRs fechados | UX inconsistente |

### 💡 Oportunidades para Contribuição

1. **MCP scoping** — Implementar exclude para account-level integrations por projeto
2. **Voice mode config** — Tornar push-to-talk keybind configurável
3. **Copy on select** — Feature request com demanda clara da comunidade
4. **/insights filtering** — Adicionar date-range ao comando nativo

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Releases (24h) | 2 (v2.1.111, v2.1.112) |
| Issues ativas | 50 (total) |
| Issues em destaque | 10 |
| PRs abertos | 5 |
| PRs fechados | 1 |
| Maior mobilização | #45596 (808 👍) |
| Issue mais antiga ainda ativa | #5088 (ago/2025) |

**Recomendação:** Equipes usando Bedrock devem aguardar atualização estável. Assinantes Max com problemas de acesso devem verificar status em [status.anthropic.com](https://status.anthropic.com).

---

*Relatório gerado automaticamente com base em dados do GitHub • @anthropics/claude-code • 2026-04-17*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex — 17 de abril de 2026

---

## 1. Destaques do Dia

A atividade no repositório Codex manteve ritmo intenso com **3 PRs fechados** (incluindo refatorações importantes de módulos) e **9 PRs abertos** focados em melhorias de arquitetura, segurança de sandbox e experience multiplataforma. Nas issues, destaque para o encerramento de bugs críticos no macOS e um aumento de reports sobre problemas de autenticação e rate limits no ambiente Windows/WSL. A comunidade continua pressionando por suporte a desenvolvimento remoto e multi-janela no app desktop.

---

## 2. Lançamentos

| Versão | Tipo | Notas |
|--------|------|-------|
| `rust-v0.122.0-alpha.5` | Alpha | Manutenção/preview de dependência Rust |
| `rust-v0.122.0-alpha.3` | Alpha | Manutenção/preview de dependência Rust |

> **Observação:** Os lançamentos são de natureza interna/dependency. Nenhum release publicável de CLI, App ou extensão foi publicado nas últimas 24h.

---

## 3. Issues em Evidência

### 1. [Remote Development no Codex Desktop App](https://github.com/openai/codex/issues/10450) — 555 👍 · 134 comentários
**Por que importa:** Requer funcionalidades essenciais para desenvolvedores que trabalham em máquinas remotas ou containers, algo cada vez mais comum em workflows modernos de desenvolvimento.
**Reação da comunidade:** Alto engajamento, indicando demanda real. O post menciona explicitamente limitações comparadas ao VS Code Remote, evidenciando perda de produtividade.

---

### 2. [Suporte macOS Intel (x86_64)](https://github.com/openai/codex/issues/10410) — 285 👍 · 187 comentários
**Por que importa:** Usuários com hardware Intel mais antigo ficam excluídos da experiência desktop, mesmo que o hardware ainda seja capaz.
**Reação da comunidade:** Discussão ativa com 187 comentários; muitos usuários reportando alternativas摸索adas.

---

### 3. [Comando manual `/compact` no App](https://github.com/openai/codex/issues/11325) — 145 👍 · 54 comentários
**Por que importa:** Paridade de funcionalidades entre CLI e App é essencial para fluxos de trabalho consistentes.
**Reação da comunidade:** Feature request direta e justificada; usuários indicam uso diário da funcionalidade na CLI.

---

### 4. [Codex responde mensagens antigas em conversas](https://github.com/openai/codex/issues/8648) — 42 comentários
**Por que importa:** Bug de comportamento que pode causar confusão, perda de contexto e respostas incorretas em sessões longas.
**Reação da comunidade:** Reportado com detalhes técnicos suficientes para reprodução; impacto direto na confiabilidade.

---

### 5. [WSL: arquivo .codex vazio deixado em projetos sem um](https://github.com/openai/codex/issues/16088) — 56 👍 · 19 comentários
**Por que importa:** Problema de regressão que afeta workflow de usuários Windows/WSL, poluindo diretórios de projeto.
**Reação da comunidade:** Bug trackeado com labels claros de regression e windows-os, indicando reconhecimento da equipe.

---

### 6. [Autenticação rate limits mesmo com Plus](https://github.com/openai/codex/issues/8628) — 13 comentários
**Por que importa:** Problema crítico que impede usuários com assinatura válida de usar o serviço; potencial problema sistêmico.
**Reação da comunidade:** Reportado há meses, indica que a issue pode não estar resolveda completamente.

---

### 7. [Execução Automations falha com resolução DNS](https://github.com/openai/codex/issues/16782) — 5 comentários
**Por que importa:** Automations são feature de alto valor; falhas de DNS em ambiente sandbox indicam lacunas de configuração de rede.
**Reação da comunidade:** Reportado com ambiente detalhado (macOS ARM, Pro subscription).

---

### 8. [Context Poisoning: perda de histórico e rate limits falsos via Cloudflare/WAF](https://github.com/openai/codex/issues/17880) — 9 comentários
**Por que importa:** Issue complexa que envolve múltiplas camadas (Cloudflare, autenticação ChatGPT, estado de sessão); pode indicar vulnerabilidade de UX.
**Reação da comunidade:** Reportado há 2 dias, ainda em investigação.

---

### 9. [Links de arquivos não funcionam na extensão VS Code (regressão)](https://github.com/openai/codex/issues/17649) — 8 👍 · 8 comentários
**Por que importa:** Feature fundamental para navegação em código; regressão indica possível mudança recente quebrando funcionalidade.
**Reação da comunidade:** Label regression adicionado, indicando triagem rápida.

---

### 10. [Codex não inicia com WSL mode habilitado](https://github.com/openai/codex/issues/14461) — 9 comentários
**Por que importa:** Usuários Windows que usam WSL como shell padrão ficam impossibilitados de usar o app.
**Reação da comunidade:** Reportado com versão específica e configuração de terminal.

---

## 4. Progresso de PRs Importantes

### 1. [`feat: Handle alternate plugin manifest paths` (#18182)](https://github.com/openai/codex/pull/18182)
Criado por `xl-openai` em 2026-04-16. Adiciona helper para descoberta de caminhos de manifest, padronizando leitura de plugins através de paths alternativos.

---

### 2. [`Add /side conversations` (#18190)](https://github.com/openai/codex/pull/18190)
Criado por `etraut-openai` em 2026-04-16. Resolve workflow de conversas paralelas no TUI sem interromper threads principais — feature altamente demandada.

---

### 3. [`feat: add opt-in provider runtime abstraction` (#17713)](https://github.com/openai/codex/pull/17713)
Criado por `celia-oai` em 2026-04-13. Adiciona `codex-model-provider` como casa runtime para comportamento de provider, separando concerns de `codex-core`.

---

### 4. [`Split codex session modules` (#18244)](https://github.com/openai/codex/pull/18244) ✅ FECHADO
Criado por `pakrym-oai` em 2026-04-17. Refatoração significativa: divide `codex.rs` em módulos `session.rs`, `mcp.rs`, `turn_context.rs` e `review.rs`. Melhora manutenibilidade.

---

### 5. [`Move codex module under session` (#18249)](https://github.com/openai/codex/pull/18249)
Criado por `pakrym-oai` em 2026-04-17. Continuação da refatoração acima, movendo o diretório `codex` sob `core/src/session`.

---

### 6. [`Stream apply_patch changes` (#17862)](https://github.com/openai/codex/pull/17862) ✅ FECHADO
Criado por `akshaynathan` em 2026-04-15. Adiciona eventos de streaming para `apply_patch`, permitindo clients mostrarem progresso durante escrita de arquivos.

---

### 7. [`[Linux] Reserve missing top level .git at runtime` (#17734)](https://github.com/openai/codex/pull/17734)
Criado por `evawong-oai` em 2026-04-14. **Fix de segurança:** previne que workspaces sem `.git` executem `git init` dentro do sandbox, bypassando controles de filesystem.

---

### 8. [`fix(permissions): enforce exact deny-read paths` (#15977)](https://github.com/openai/codex/pull/15977)
Criado por `viyatb-oai` em 2026-03-27. Reforça política de sandbox para paths com `access = none` como deny-read dentro do core do Codex.

---

### 9. [`Add skill metadata budget handling` (#18213)](https://github.com/openai/codex/pull/18213)
Criado por `mzeng-openai` em 2026-04-16. Limita metadados de skills a 1% do context window; adiciona warning quando skills são omitidos por falta de espaço.

---

### 10. [`codex: split thread/read view loading` (#18231)](https://github.com/openai/codex/pull/18231)
Criado por `wiltzius-openai` em 2026-04-16. Refatora carregamento de threads em etapas explícitas (persisted-load, live-load, merge), mantendo compatibilidade com SQLite e filesystem.

---

## 5. Tendências de Pedidos de Features

Extrapolando das issues mais votadas e comentadas, as seguintes direções dominam o backlog de features:

| Tendência | Evidência | Prioridade |
|-----------|-----------|------------|
| **Desenvolvimento Remote/WSL** | #10450 (555 👍), #14461, #16088, #9923 (SSH Executor) | 🔴 Alta |
| **Multi-janela e navigation** | #12773 (18 👍), #13018 (47 👍), #17536 | 🟡 Média-Alta |
| **Paridade CLI ↔ App** | #11325, #18247, #16782 | 🟡 Média |
| **MacOS completo** | #10410 (285 👍), #13822 | 🟡 Média |
| **Automations avançadas** | #18247, #16782, #18193 | 🟡 Média |
| **Melhorias de UI/UX TUI** | #17916, #13858 | 🟢 Menor |

**Conclusão:** A comunidade está concentrando demandas em torno de **produtividade multiplataforma** e **paridade de features** entre as interfaces (CLI, App Desktop, extensão VS Code).

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos Recorrentes

1. **Autenticação e Rate Limits (#8628, #17880)**
   - Relatos de usuários Plus sendo bloqueados ou recebendo mensagens de upgrade mesmo com assinatura ativa.
   - Investigar se há problema sistêmico com validação de tokens.

2. **Windows/WSL Experience (#16088, #14461, #17322, #17244)**
   - Múltiplas issues afetando o mesmo fluxo: iniciar Codex com WSL, manter conexão com VS Code, fechar app corretamente.
   - Sugere que o código path Windows está instável ou lacks de testes E2E.

3. **Sandbox e Landlock (#18069)**
   - `apply_patch` falha com `use_legacy_landlock=true` na versão 0.121.0; regressão documentada.
   - Usuários com modelos customizados reportando falhas similares (#17899).

### 🟡 Dores Frequentes

4. **Links quebrados na extensão VS Code (#17649)**
   - Regressão afetar navegação em código; verificar se mudança recente de UI quebrou parsing de caminhos.

5. **Context window management**
   - PR #18213 adiciona budget para metadados de skills, indicando reconhecimento de problemas com context overflow.

6. **Paridade de funcionalidades**
   - CLI tem `/compact`, App não tem (#11325); mesma disparidade pode existir em outros comandos.

### 🟢 Oportunidades para Contribuição

7. **SSH Executor (#9923)** — Feature request com 12 👍 e especificação clara; poderia ser implementada como plugin ou tool externo.

8. **Termux/Android support (#17787)** — Nicho crescente de desenvolvedores mobile; contribuiجمّية open source seria bem recebida.

9. **Draft stash no TUI (#17916)** — Feature pequena mas de alto impacto para workflow; fechada mas implementação pode não estar em `main`.

---

*Relatório gerado automaticamente com base em dados do GitHub em 2026-04-17. Seções priorizadas por volume de engajamento da comunidade.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI — 2026-04-17

---

## 1. Destaques do Dia

O desenvolvimento do Gemini CLI segue intenso com **30+ issues e 20+ PRs atualizados nas últimas 24h**. Entre as contribuições mais relevantes, há avanço significativo no suporte a modelos locais (PR #25498 adiciona `gemini gemma`), melhorias de segurança com detecção aprimorada de comandos `rm` perigosos, e correções de usabilidade como a resolução de seatbelt profiles a partir de `$HOME/.gemini`. A comunidade também demonstra preocupação contínua com UX e performance, especialmente em casos envolvendo SSH, tabelas em streaming e inicialização lenta por falhas no download do RipGrep.

---

## 2. Lançamentos

Nenhuma release foi publicada nas últimas 24h.

---

## 3. Issues em Evidência

### 1. [#25323 — RipGrep download failure causando lentidão na inicialização](https://github.com/google-gemini/gemini-cli/issues/25323)
**Importância:** Criticidade P1 — afeta experiência inicial de todos os usuários.
**Por que importa:** Quando o RipGrep falha em baixar (ex.: máquina sem acesso ao GitHub), o CLI aguarda 2+ minutos antes de falhar. A comunidade propõe falha rápida ao detectar `access denied` e caching para evitar tentativas repetidas.
**Reação:** 6 comentários, debate ativo sobre bundling do RipGrep com o produto.

### 2. [#22745 — Avaliar impacto de leituras, busca e mapeamento AST-aware](https://github.com/google-gemini/gemini-cli/issues/22745)
**Importância:** EPIC estratégico para melhoria de precisão de ferramentas.
**Por que importa:** Ferramentas AST-aware podem ler limites de métodos com uma única chamada, reduzir ruído em tokens e melhorar navegação de codebases.
**Reação:** 5 comentários, 1 upvote, vários mantenedores参与.

### 3. [#24916 — CLI continua pedindo permissões no mesmo arquivo](https://github.com/google-gemini/gemini-cli/issues/24916)
**Importância:** UX crítica para adoção em ambiente de desenvolvimento.
**Por que importa:** Permissões "allow" e "allow for all future sessions" não persistem corretamente, causando friction repetida.
**Reação:** 3 comentários, usuário reporta falha consistente.

### 4. [#25166 — Shell trava em "Waiting input" após comando completar](https://github.com/google-gemini/gemini-cli/issues/25166)
**Importância:** Bug de productividadе significativo.
**Por que importa:** Mesmo comandos Shell simples travam o CLI após finalizarem, forçando reinício.
**Reação:** 2 comentários, 2 upvotes, mantenedor labelou.

### 5. [#22323 — Subagente reporta GOAL success mesmo após MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)
**Importância:** Problema de integridade de feedback ao usuário.
**Por que importa:** `codebase_investigator` oculta interrupção por limite de turnos, confundindo diagnóstico de falhas.
**Reação:** 2 comentários, 2 upvotes, label `🔒 maintainer only`.

### 6. [#22267 — Browser Agent ignora settings.json (maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)
**Importância:** Inconsistência entre configuração e comportamento.
**Por que importa:** Overrides de `settings.json` para `maxTurns` não são aplicados ao Browser Agent, mesmo com `AgentRegistry` lendo corretamente.
**Reação:** 2 comentários, prioridade P2.

### 7. [#24202 — Texto scrambled ao usar SSH](https://github.com/google-gemini/gemini-cli/issues/24202)
**Importância:** Bloqueador para usuários Linux em cloudtops via SSH.
**Por que importa:** CLI torna-se completamente unusable em sessões SSH remote, segmento crescente de desenvolvedores.
**Reação:** 1 comentário, возможно связан с #24546.

### 8. [#22819 — Implementar roteamento de memória: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)
**Importância:** Feature de personalização aguardada.
**Por que importa:** Diferenciar memórias globais (`~/.gemini/`) de específicas de projeto (`.gemini/`) permite preferências portáveis vs. convenções de codebase.
**Reação:** 1 comentário, 2 upvotes, Epic tracking subagent behavior.

### 9. [#23823 — Atualizar modelos utilitários internos para 3.1 flash lite](https://github.com/google-gemini/gemini-cli/issues/23823)
**Importância:** Modernização de infraestrutura interna.
**Por que importa:** Modelos utilitários internos ainda usam 2.5 flash lite; upgrade garante suporte a features mais recentes.
**Reação:** 0 comentários, 2 upvotes, label `🔒 maintainer only`.

### 10. [#24470 — Scroll issues com chats longos](https://github.com/google-gemini/gemini-cli/issues/24470)
**Importância:** Degradação de UX em cenários de uso intenso.
**Por que importa:** Screen flashes, scrollbar jumping e comportamento errático ao navegar conversas longas; desaparece após alcançar topo uma vez.
**Reação:** 0 comentários, screencast anexado para reprodução.

---

## 4. Progresso de PRs Importantes

### 1. [#25567 — Disable topic updates for subagents](https://github.com/google-gemini/gemini-cli/pull/25567)
**Autor:** gundermanc | **Status:** OPEN | **Atualizado:** 2026-04-17
Elimina problemas com subagentes mostrando chamadas de topic e/ou erros ao tentar chamar `update_topic` quando indisponível.

### 2. [#25498 — feat(cli): add streamlined `gemini gemma` local model setup](https://github.com/google-gemini/gemini-cli/pull/25498)
**Autor:** Samee24 | **Status:** OPEN | **Labels:** priority/p1
Adiciona comando `gemini gemma` para configuração simplificada de modelos locais e `gemini gemma logs` para visualizar logs do LiteRT server. **PR priorizado como P1.**

### 3. [#25560 — feat: add support for Gemma 4 model](https://github.com/google-gemini/gemini-cli/pull/25560)
**Autor:** akh64bit | **Status:** OPEN
Adiciona suporte ao modelo `gemma-4-26b-a4b-it`, selecionável via UI e gerenciável via Agent Control Protocol (ACP).

### 4. [#25554 — perf(core): skip model routing when redundant](https://github.com/google-gemini/gemini-cli/pull/25554)
**Autor:** akh64bit | **Status:** OPEN | **Labels:** priority/p1
Otimização no `ModelRouterService` para pular classificação quando `pro` e `flash` resolvem para mesmo modelo subjacente. **PR priorizado como P1.**

### 5. [#25545 — security: improve dangerous command detection for rm](https://github.com/google-gemini/gemini-cli/pull/25545)
**Autor:** cocosheng-g | **Status:** OPEN | **Labels:** area/security
Atualiza `isDangerousCommand` para identificar `rm` independentemente de path qualification (`/bin/rm`) ou ordem de flags.

### 6. [#25537 — fix(cli): use newline in shell command wrapping](https://github.com/google-gemini/gemini-cli/pull/25537)
**Autor:** cocosheng-g | **Status:** OPEN | **Labels:** area/core
Corrige bug onde heredoc commands com delimitador (ex.: `EOF`) falhavam ao receber semicolon appendado.

### 7. [#25427 — feat(sandbox): resolve custom seatbelt profiles from $HOME/.gemini](https://github.com/google-gemini/gemini-cli/pull/25427)
**Autor:** mvanhorn | **Status:** CLOSED | **Labels:** help wanted
Perfis customizados de seatbelt agora resolvem de `$HOME/.gemini/sandbox-macos-${profile}.sb` primeiro, permitindo perfil único cross-workspace.

### 8. [#25256 — feat: detect new files in @ recommendations with watcher](https://github.com/google-gemini/gemini-cli/pull/25256)
**Autor:** prassamin | **Status:** OPEN | **Labels:** help wanted
Adiciona refresh baseado em watcher para sugestões `@` file, evitando recrawl completo após pressionar `@`. Feature gated por `context.fileFiltering.enableFileWatcher`.

### 9. [#25497 — Allow dots on GEMINI_API_KEY](https://github.com/google-gemini/gemini-cli/pull/25497)
**Autor:** DKbyo | **Status:** OPEN | **Labels:** area/security
Suporta novo formato de API Keys bound to Service Accounts (`AQ.Ab8RN6LEVE...`) que incluem pontos.

### 10. [#25555 — feat: add priority setting for API requests](https://github.com/google-gemini/gemini-cli/pull/25555)
**Autor:** patrick-toulme | **Status:** OPEN | **Labels:** status/need-issue
Permite usuários Tier 2/3 passarem priority access via `model.geminiApiPriority: true` em settings.json.

---

## 5. Tendências de Pedidos de Features

Analisando as issues mais recentes, as seguintes direções emergem como demanda recorrente da comunidade:

### 5.1 Modelos Locais e Alternativos
Há esforço coordenado para suporte a modelos locais (PRs #25498, #25560) e otimização de roteamento de modelos (#25554). A atualização de utility models internos para 3.1 flash lite (#23823) indica tendência de modernização de infraestrutura.

### 5.2 UX e Performance de Inicialização
Falhas em downloads de dependências causando lentidão startup (#25323) e problemas de scroll em chats longos (#24470) evidenciam demanda por experiência mais responsiva. SSH compatibility (#24202, #24546) também é preocupação crescente.

### 5.3 Sistema de Memória e Preferências
Várias issues (#22819, #22809) apontam para necessidade de sistema de memória hierárquico (global vs. project) com prompts otimizados para escrita proativa de preferências.

### 5.4 Segurança e Permissões
Demanda constante por melhor handling de permissões (#24916), detecção de comandos perigosos (#25545, #22672), e suporte a novos formatos de API keys (#25497).

### 5.5 Agentes e Subagentes
Melhoria em comportamento de subagentes: reconhecimento de approval modes (#23582), recuperação após MAX_TURNS (#22323), e behavioural evaluations (#23897, #24353).

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Issues Críticas Requerendo Atenção Imediata

| Issue | Impacto | Ação Sugerida |
|-------|---------|---------------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) — RipGrep slow startup | P1 | Implementar fail-fast e bundling |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell hang | P1 | Investigar deadlock em shell completion |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent misleading status | P1 | Corrigir lógica de report de MAX_TURNS |

### 🟡 Padrões Recorrentes de UX/UI

- **Permissões persistentes:** Múltiplas issues (#24916) indicam que "allow for all future sessions" não funciona corretamente.
- **Streaming tables:** Renderização incremental causa problemas de acessibilidade (#25218).
- **Scroll comportamento:** Flash e jumpiness em conversas longas (#24470).

### 🟢 Oportunidades de Contribuição

| PR | Dificuldade | Área | Label |
|----|-------------|------|-------|
| [#25160](https://github.com/google-gemini/gemini-cli/pull/25160) — Hierarchical .env loading | Média | Core | help wanted |
| [#25256](https://github.com/google-gemini/gemini-cli/pull/25256) — Watcher file detection | Média | Core | help wanted |
| [#21804](https://github.com/google-gemini/gemini-cli/pull/21804) — Include sessions in error | Baixa | Core | help wanted |
| [#21439](https://github.com/google-gemini/gemini-cli/pull/21439) — Checkpoint tag fallback | Média | Core | help wanted |

### 📊 Métricas do Dia

- **Issues abertas:** 50+ em atualização
- **PRs abertos:** 50+ em discussão
- **PRs fechados:** 5 (incluindo #25563, #25427, #25338, #25136, #24367)
- **Nenhuma release** publicada nas últimas 24h

---

*Relatório gerado automaticamente com base em dados do GitHub (google-gemini/gemini-cli) em 2026-04-17.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# 📊 Relatório Diário — GitHub Copilot CLI
**Data:** 2026-04-17
**Repositório:** github.com/github/copilot-cli

---

## 1. Destaques do Dia

A equipe do Copilot CLI acelerou o ritmo de releases com **três versões em sequência** (v1.0.29, v1.0.30, v1.0.31), todas publicadas em 16/04/2026. Os destaques incluem correções visuais importantes para terminais Windows/Ubuntu, correções de URLs de feedback quebrados e melhorias na descoberta de plugins/skills. No entanto, a comunidade continua enfrentando problemas recorrentes com **rate limiting** e **paridade de modelos** em comparação com VS Code.

---

## 2. Lançamentos

### 🔗 [v1.0.31](https://github.com/github/copilot-cli/releases/tag/v1.0.31) — 2026-04-16
- ✅ **Correção de renderização:** Prompt frame não causa mais problemas visuais em terminais Windows e Ubuntu

### 🔗 [v1.0.30](https://github.com/github/copilot-cli/releases/tag/v1.0.30) — 2026-04-16
- ✅ Links do formulário de feedback redirecionam para o repositório correto
- ✅ Comando `/undo` exibe mensagem explicativa quando rewind não está disponível
- ✅ Plugins, skills e comandos são descobertos corretamente ao usar `skills.discover`
- ✅ Adicionado comando `/statusline`

### 🔗 [v1.0.29](https://github.com/github/copilot-cli/releases/tag/v1.0.29) — 2026-04-16
- ✅ Config de servidor MCP remoto agora permite omitir o campo `type` (default: http)
- ✅ Cursor piscante mantém largura estável para evitar deslocamento de texto
- ✅ Flag `--list-env` adicionada para logar plugins, agents, skills e servidores MCP em modo prompt

---

## 3. Issues em Evidência

### 🔗 [#1703](https://github.com/github/copilot-cli/issues/1703) — Modelos organizacionais não listados
- **Área:** `area:models`
- **Comentários:** 20 | 👍 33
- **Relevância:** Issue com maior engajamento da comunidade. Usuários relatam que o CLI não exibe todos os modelos habilitados na organização (ex: Gemini 3.1 Pro), enquanto o VS Code Copilot os mostra corretamente. Isso evidencia uma **paridade de recursos** significativa entre as interfaces.
- **Reação:** Muito ativo com discussões técnicas sobre API de listagem de modelos.

### 🔗 [#2725](https://github.com/github/copilot-cli/issues/2725) — GPT-5.4 esconde Extra High no seletor
- **Área:** `area:models`
- **Comentários:** 13 | 👍 14
- **Relevância:** O picker de modelos só mostra Low/Medium/High para GPT-5.4, mas xhigh ainda funciona na prática. Inconsistência entre UI e runtime capability.
- **Reação:** Comunidade demonstra frustração com UI desatualizada.

### 🔗 [#2712](https://github.com/github/copilot-cli/issues/2712) — Responsabilidade legal/monetária pelo comportamento de rate limit
- **Área:** `area:agents`, `area:models`
- **Comentários:** 8 | 👍 3
- **Relevância:** Issue crítico sobre o comportamento do rate limit que pode causar eventos sem ação do usuário (ex: /fleet, background agents). Levantamento de questões de SLA.
- **Reação:** Discussão séria sobre confiabilidade do sistema.

### 🔗 [#2756](https://github.com/github/copilot-cli/issues/2756) — Rate limit muito restritivo
- **Área:** `area:models`
- **Criado:** 2026-04-16 | **Atualizado:** 2026-04-17
- **Comentários:** 5 | 👍 1
- **Relevância:** Após ocorrência de rate limit, ao continuar após o tempo de retry, novo limit é disparado após apenas 1-2 chamadas de ferramentas.
- **Reação:** Padrão de "looping" de rate limits preocupa usuários frequentes.

### 🔗 [#2374](https://github.com/github/copilot-cli/issues/2374) — Autopilot entra em loop infinito
- **Área:** `area:agents`
- **Comentários:** 3 | 👍 0
- **Relevância:** Após aprovar plano e iniciar autopilot, o sistema entra em loop infinito, comprometendo workflow completo.
- **Reação:** Bug crítico reportado com evidências de logs.

### 🔗 [#1464](https://github.com/github/copilot-cli/issues/1464) — Skills após posição ~32 inacessíveis
- **Área:** `area:installation`
- **Comentários:** 2 | 👍 3
- **Relevância:** Com 63 skills instalados, apenas 32 são visíveis no system prompt. Skills ordenados alfabeticamente após posição 36 nunca são selecionados pelo modelo.
- **Reação:** Limitação de token budget impacta usuários com muitos plugins.

### 🔗 [#2314](https://github.com/github/copilot-cli/issues/2314) — Skills truncados silenciosamente
- **Área:** `area:networking`
- **Comentários:** 2 | 👍 1
- **Relevância:** O SDK trunca a lista de skills usando character budget fixo. Skills excedentes são silenciosamente removidos com apenas comentário HTML.
- **Reação:** Falta de feedback ao usuário sobre skills ignorados.

### 🔗 [#2754](https://github.com/github/copilot-cli/issues/2754) — Rate limiting incapacita autopilot
- **Área:** `area:agents`, `area:models`
- **Comentários:** 1 | 👍 3
- **Relevância:** Pro+ relatando que rate limit causa malfunction severo no autopilot, impedindo uso produtivo.
- **Reação:** Assinantes premium impactados em workflow crítico.

### 🔗 [#2785](https://github.com/github/copilot-cli/issues/2785) — Suporte a 1M context para Claude Opus 4.7
- **Área:** `area:context-memory`, `area:models`
- **Criado:** 2026-04-17
- **Relevância:** Feature request para paridade com Claude Code, que já oferece Opus 4.7 com 1M context como default.
- **Reação:** Demanda por capacidades avançadas de contexto.

### 🔗 [#2784](https://github.com/github/copilot-cli/issues/2784) — Arquivo de instruções com nome conflitante é ignorado silenciosamente
- **Área:** `area:plugins`, `area:configuration`
- **Criado:** 2026-04-17
- **Relevância:** Arquivo nomeado `skill-instructions.instructions.md` é dropado sem warning. Renomear para qualquer outro nome funciona corretamente.
- **Reação:** Bug silencioso que causa confusão em configuração de skills.

---

## 4. Progresso de PRs Importantes

⚠️ **Nenhum PR atualizado nas últimas 24h.** O pipeline de contributions está em baixa, com foco da equipe aparentemente em releases de hotfix. Este é um ponto de atenção para a comunidade que está aguardando resolução de issues críticos.

---

## 5. Tendências de Pedidos de Features

Com base nas issues da comunidade, as direções mais solicitadas são:

| Tendência | Descrição | Issues Relacionadas |
|-----------|-----------|---------------------|
| **Melhoria de Rate Limiting** | Recomendações para retry mais inteligente, backoff exponencial e transparência sobre limites | #2756, #2754, #2768, #2769, #2712 |
| **Paridade de Modelos** | Feature parity entre CLI e VS Code/C Claude Code (1M context, Opus 4.7, modelos org) | #1703, #2725, #2762, #2785 |
| **Gestão de Skills/Plugins** | Toggle de enabled/disabled, melhor descoberta e priorização | #2714, #1464, #2314, #2784 |
| **Persistência de Sessão** | Salvar configurações de diretório e contexto entre sessões | #1740 |
| **Acessibilidade** | Opção para suprimir prompt indicator, melhor compatibilidade com screen readers | #2085 |
| **Prevenção de Sleep** | Manter Windows ativo durante operações longas | #2763 |
| **Credenciais Seguras** | Armazenamento seguro de tokens OAuth para MCP servers | #2783 |

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Críticos (requerem ação imediata da equipe)
1. **Rate Limiting Loop** — O comportamento atual causa re-rate-limit após apenas 1-2 tool calls, praticamente incapacitando o uso intensivo. Multiple issues reportam este problema (#2756, #2754, #2768).
2. **Infinite Loop em Autopilot** — Bug funcional no fluxo principal do agente autônomo (#2374).

### 🟡 Importantes (impactam produtividade)
3. **Paridade de Modelos** — CLI não lista modelos disponíveis que VS Code mostra (#1703).
4. **Skills Silenciosamente Truncados** — Usuários perdem acesso a plugins sem feedback (#2314, #1464).
5. **Configuração Ignorada** — Arquivos com nomes conflitantes são dropados sem warning (#2784).

### 🟢 Oportunidades de Melhoria
6. **Toggle de Plugins** — Falta opção para desabilitar plugins temporariamente (#2714).
7. **Credenciais MCP** — Tokens OAuth em plaintext JSON é risco de segurança (#2783).
8. **1M Context** — Paridade com Claude Code para Opus 4.7 (#2785).

### 📈 Métricas do Repositório
- **Issues abertas:** 50 (total)
- **Issues fechadas recentemente:** 7 (incluindo correções de feedback URLs v1.0.30)
- **Release activity:** 3 versões em 24h (ritmo acelerado)

---

*Relatório gerado automaticamente com base em dados do GitHub. Para contribuições ou esclarecimentos, consulte o repositório oficial.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade — Kimi Code CLI
## 📅 Data: 17 de abril de 2026

---

## 1. Destaques do Dia

O dia foi marcado pela **correção de bugs críticos e melhorias de usabilidade**. O PR #1908 aumenta significativamente o limite de `max_steps_per_turn` de 100 para 500, beneficiando desenvolvedores que executam tarefas complexas. O PR #1909 corrige a ausência do indicador de carregamento (moon spinner) durante gaps entre turnos, uma reclamação recorrente da comunidade. No campo de bugs, a issue #1865 sobre a remoção do processo de *thinking* acumulou 11 comentários, indicando uma preocupação significativa com a experiência do usuário.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O último release estável disponível continua sendo a versão 1.34.0, conforme mencionado na issue #1903.

---

## 3. Issues em Evidência

### 🔴 Issue #1865 — [bug] Thinking process disappeared
**Link:** [MoonshotAI/kimi-cli#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865)  
**Status:** OPEN | **Comentários:** 11 | **Reações:** 👍 3

**Por que importa:** Esta é a issue com maior engajamento das últimas 24 horas. O usuário xueguoqing01 relata que o processo de *thinking* foi removido na versão 1.33.0, classificando a mudança como "负优化" (otimização negativa). A exibição do processo de raciocínio interno é essencial para que desenvolvedores confiem e validem as decisões do modelo.

**Análise da comunidade:** O tópico gerou debate intenso, com 11 comentários de usuários compartilhando experiências similares. A ausência do thinking process compromete a transparência da ferramenta, dificultando debugging e reduzindo a confiança na saída do modelo.

---

### 🔴 Issue #1903 — [bug] Error code: 400
**Link:** [MoonshotAI/kimi-cli#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903)  
**Status:** OPEN | **Comentários:** 4 | **Reações:** 👍 0

**Por que importa:** Erro HTTP 400 (Bad Request) indica problemas na comunicação entre o CLI e a API do Kimi Code. Com 4 comentários em dois dias, sugere-se que não é um caso isolado — pode indicar regressão na versão 1.34.0 ou mudanças na API.

**Ambiente reportado:** macOS com modelo kimi-for-coding na plataforma Kimi Code oficial.

---

### 🟡 Issue #1378 — [bug] JSON parsing error with control characters
**Link:** [MoonshotAI/kimi-cli#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378)  
**Status:** CLOSED | **Comentários:** 3 | **Reações:** 👍 0

**Por que importa:** Erros de parsing JSON em argumentos de tool calls causam falhas silenciosas ou comportamento imprevisível. A issue foi fechada em 16 de abril, indicando que uma correção foi mergeada ou o problema foi resolvido de outra forma.

**Detalhes técnicos:** O erro ocorre quando caracteres de controle estão presentes nos argumentos gerados pelo modelo kimi-2.5 na plataforma Moonshot AI Open (Linux).

---

### 🟡 Issue #1910 — [bug] IDEA uses CLI without any response
**Link:** [MoonshotAI/kimi-cli#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910)  
**Status:** OPEN | **Comentários:** 1 | **Reações:** 👍 0

**Por que importa:** Recém-criada (16/04), esta issue reporta que ao usar o CLI dentro do IDEA (IntelliJ), não há nenhuma resposta. Isso pode indicar incompatibilidade com plugins de IDE ou problemas de integração stdin/stdout.

**Versão afetada:** 1.25.0 com modelo kimi-for-coding.

---

### 🟡 Issue #1897 — [bug] Web UI hangs indefinitely on MCP failure
**Link:** [MoonshotAI/kimi-cli#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897)  
**Status:** OPEN | **Comentários:** 1 | **Reações:** 👍 0

**Por que importa:** A falha de um servidor MCP configurado causa crash no backend worker com `MCPRuntimeError`, deixando a interface web em estado de "espera infinita". Este é um problema de resiliência que afeta usuários do comando `kimi web`.

**Impacto:** Usuários veem um spinner eterno sem receber resposta, mesmo quando o erro já ocorreu no backend.

---

### 🟢 Issue #1867 — [enhancement] --yolo should not auto-approve plans in Plan Mode
**Link:** [MoonshotAI/kimi-cli#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867)  
**Status:** OPEN | **Comentários:** 1 | **Reações:** 👍 0

**Por que importa:** O autor mechiland propõe separar a aprovação de ferramentas da revisão de planos. Atualmente, `--yolo` aprova automaticamente ambos, criando risco desnecessário em Plan Mode. A request sugere granularidade no controle deauto-aprovação.

**Proposta:** Introduzir configuração separada para auto-aprovar planos vs. auto-aprovar ferramentas.

---

## 4. Progresso de PRs Importantes

### ✅ PR #1909 — Fix: Moon spinner during turn gaps
**Link:** [MoonshotAI/kimi-cli#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909)  
**Status:** CLOSED | **Autor:** RealKai42

**Resumo:** Corrige a ausência do indicador de carregamento (moon spinner) durante gaps ativos entre turnos. O problema ocorria especialmente após chamadas de ferramentas e entre `TurnBegin` e `StepBegin`, deixando a tela em branco enquanto o modelo ainda processava.

**Impacto:** Melhoria direta de UX — usuários agora visualizam feedback visual consistente durante toda a execução.

---

### ✅ PR #1908 — Feature: max_steps_per_turn increased from 100 to 500
**Link:** [MoonshotAI/kimi-cli#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908)  
**Status:** CLOSED | **Autor:** RealKai42

**Resumo:** Aumenta o limite padrão de `max_steps_per_turn` de 100 para 500, permitindo execuções de agente mais longas sem configuração manual. A mudança foi feita em `src/kimi_cli/config.py`.

**Impacto:** Usuários que executam tarefas complexas multi-step não precisam mais configurar `--max-steps` manualmente. Reduz fricção para iniciantes.

---

### ✅ PR #1797 — Feature: Ctrl+A directory scope toggle in /sessions
**Link:** [MoonshotAI/kimi-cli#1797](https://github.com/MoonshotAI/kimi-cli/pull/1797)  
**Status:** CLOSED | **Autor:** n-WN

**Resumo:** Adiciona toggle via `Ctrl+A` no picker `/sessions` para alternar entre diretório atual e todos os diretórios, inspirado no comando `/resume` do Claude Code.

**Mudanças:**
- Adicionado `Session.list_all()` classmethod em `src/kimi_cli/session.py`
- Resolve a issue #1796

**Impacto:** Melhora a navegação entre sessões, especialmente para usuários com projetos em múltiplos diretórios.

---

### 🔄 PR #1911 — Fix: Adaptive thinking for Opus 4.7+
**Link:** [MoonshotAI/kimi-cli#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911)  
**Status:** OPEN | **Autor:** sisterdong

**Resumo:** Corrige `_use_adaptive_thinking()` para suportar Claude Opus 4.7 e versões futuras (>= 4.6). O método estava hardcoded para `opus-4.6`/`opus-4-6`, causando rejeição de formato legado em Opus 4.7.

**Problema técnico:** Opus 4.7 rejeita o formato antigo `{"type": "enabled", "budget_tokens": ...}` com erro de parse.

**Impacto:** Garante compatibilidade com novos modelos Opus assim que lançados.

---

### 🔄 PR #1798 — Feature: Telemetry tracking
**Link:** [MoonshotAI/kimi-cli#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798)  
**Status:** OPEN | **Autor:** RealKai42

**Resumo:** Integra rastreamento de telemetria em modos interativos e não-interativos. A PR inclui badge de Devin Review.

**Impacto potencial:** Permitirá à equipe do Kimi Code coletar métricas de uso, identificar gargalos e melhorar a experiência com base em dados reais.

---

## 5. Tendências de Pedidos de Features

Com base nas issues analisadas, as seguintes direções emergem como prioritárias para a comunidade:

| Tendência | Issue | Descrição |
|-----------|-------|-----------|
| **Transparência do reasoning** | #1865 | Usuários querem visibilidade do processo de *thinking* para confiar nas respostas do modelo |
| **Controle granular de auto-aprovação** | #1867 | Separar aprovação de planos de aprovação de ferramentas |
| **Resiliência com MCP** | #1897 | Tratamento adequado de falhas em servidores MCP externos |
| **Compatibilidade com IDEs** | #1910 | Integração funcional com IntelliJ/IDEA |
| **Telemetria** | #1798 | Rastreamento de uso para melhoria contínua |

**Observação:** A ausência do processo de *thinking* (#1865) domina as discussões, sugerindo que a equipe deve considerar reintroduzir ou tornar configurável essa funcionalidade.

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔧 Dores Recorrentes

1. **Indicadores de carregamento inconsistentes** — Relatado multiple vezes; o PR #1909 corrige parte do problema, mas pode haver casos residuais.

2. **Erros HTTP 400** — A issue #1903 sugere regressão ou mudança de API na versão 1.34.0. Desenvolvedores que integram via API devem monitorar.

3. **Falhas silenciosas** — Parsing JSON com caracteres de controle (#1378) pode causar comportamento imprevisível sem feedback claro.

### 📋 Demandas Frequentes

| Demanda | Frequência | Referência |
|---------|------------|------------|
| Limite de steps maior | Alta | PR #1908 (500 → padrão) |
| Transparência do reasoning | Alta | Issue #1865 (11 comentários) |
| Suporte a novos modelos | Média | PR #1911 (Opus 4.7+) |
| Telemetria | Média | PR #1798 |

### ⚡ Recomendações Técnicas

- **Versionamento de API:** A issue #1903 indica possível breaking change na API Kimi Code. Verificar changelog e retrocompatibilidade.
- **Testes de integração MCP:** Implementar testes para cenários de timeout/rejeição de servidores MCP.
- **Configuração de thinking:** Considerar flag `--show-thinking` para satisfazer demanda #1865.

---

*Relatório gerado em 2026-04-17 com base nos dados do GitHub da MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 📊 Relatório Diário da Comunidade OpenCode

**Data:** 2026-04-17  
**Repositório:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Destaques do Dia

O dia 17 de abril foi marcado por uma intensa atividade de **refatoração e otimização** no core do OpenCode. A equipe principal (thdxr, kitlangton) conduziu uma grande maratona de PRs focados em modernizar namespaces, simplificar configurações e melhorar o desempenho de inicialização. Simultaneamente, a comunidade reportou novos problemas com modelos recentes (GPT-5.4, Opus 4.7, Gemma-4) relacionados a reasoning/thinking blocks, indicando uma tendência de desafios de compatibilidade com as últimas APIs de provedores.

---

## 2. Lançamentos

### 🚀 v1.4.7

**Link:** [Release v1.4.7](https://github.com/anomalyco/opencode/releases/tag/v1.4.7)

Esta versão traz melhorias de compatibilidade com provedores e sessões:

| Mudança | Descrição |
|---------|-----------|
| **GitHub Copilot** | `gpt-5-mini` agora usa *low reasoning effort* para melhor compatibilidade de requisições |
| **Workspaces** | Auth context agora é compartilhado, permitindo sign-in persistente entre sessões |
| **Cloudflare AI Gateway** | Remoção automática de `max_tokens` para modelos OpenAI com reasoning |

---

## 3. Issues em Evidência

### 🔴 #20695 — Memory Megathread
**Link:** [Issue #20695](https://github.com/anomalyco/opencode/issues/20695)  
**Status:** ABERTA | **Comentários:** 56 | **👍:** 33

**Por que importa:** Esta é a issue central para coletar heap snapshots e investigar memory leaks que afetam sessões longas. A equipe explicitly pediu para **não usar LLMs para sugerir soluções**, indicando necessidade de análise técnica real.

**Reação da comunidade:** Alto engajamento com 56 comentários, sugerindo um problema recorrente que afeta múltiplos usuários.

---

### 🔴 #20698 — GPT 5.4 Azure reasoning error
**Link:** [Issue #20698](https://github.com/anomalyco/opencode/issues/20698)  
**Status:** ABERTA | **Comentários:** 30 | **👍:** 3

**Por que importa:** Usuários do Azure enfrentam crashes constantes após 1-2 tool calls com modelos GPT-5.4 xhigh, reportando erro: `"Item ... of type 'reasoning' was provided without its required following item."`

---

### 🔴 #13984 — Copy/Paste não funciona no CLI
**Link:** [Issue #13984](https://github.com/anomalyco/opencode/issues/13984)  
**Status:** ABERTA | **Comentários:** 26 | **👍:** 9

**Por que importa:** Issue antiga (desde fevereiro) que ainda não foi resolvida. O clipboard mostra "copied" mas Ctrl+V não funciona no terminal.

---

### 🟡 #6651 — Dynamic model selection para subagents
**Link:** [Issue #6651](https://github.com/anomalyco/opencode/issues/6651)  
**Status:** ABERTA | **Comentários:** 24 | **👍:** 34

**Por que importa:** Feature request popular com 34 upvotes para permitir seleção dinâmica de modelo quando um agente primário invoca subagents via Task tool. **34 upvotes** indica forte demanda da comunidade.

---

### 🟡 #7030 — Ollama qwen2.5-coder tool calls não executam
**Link:** [Issue #7030](https://github.com/anomalyco/opencode/issues/7030)  
**Status:** ABERTA | **Comentários:** 16 | **👍:** 18

**Por que importa:** Ferramentas `edit`/`write` parecem executar mas não criam/modificam arquivos. Afeta `/init` e sessões normais com Ollama local.

---

### 🟡 #21034 — Gemma-4 tool loops/failures
**Link:** [Issue #21034](https://github.com/anomalyco/opencode/issues/21034)  
**Status:** ABERTA | **Comentários:** 14 | **👍:** 16

**Por que importa:** Modelos Gemma-4-26b e Gemma-4-31b estão atualmente não utilizáveis no OpenCode mesmo com os últimos tokenizer fixes, causando loops infinitos.

---

### 🟡 #22512 — Can't send any messages (ENAMETOOLONG)
**Link:** [Issue #22512](https://github.com/anomalyco/opencode/issues/22512)  
**Status:** ABERTA | **Comentários:** 14 | **👍:** 0

**Por que importa:** Bug crítico no Windows onde qualquer mensagem causa glitch na tela culminando em erro `ENAMETOOLONG`.

---

### 🟢 #22863 — Opus 4.7 thinking.type.enabled error
**Link:** [Issue #22863](https://github.com/anomalyco/opencode/issues/22863)  
**Status:** **CLOSED** | **Comentários:** 8 | **👍:** 0

**Por que importa:** Já resolvido! Error `"thinking.type.enabled" is not supported for this model` foi corrigido para Opus 4.7.

---

### 🟡 #22644 — Qwen removido da GO subscription
**Link:** [Issue #22644](https://github.com/anomalyco/opencode/issues/22644)  
**Status:** ABERTA | **Comentários:** 6 | **👍:** 7

**Por que importa:** Usuários reportam que modelos Qwen não aparecem mais na opção de subscription OpenCode GO.

---

### 🟡 #22872 — write tool hangs indefinitely em 1.4.6
**Link:** [Issue #22872](https://github.com/anomalyco/opencode/issues/22872)  
**Status:** ABERTA | **Comentários:** 5 | **👍:** 0

**Por que importa:** Regression crítica: o tool `write` funciona na 1.4.3 mas trava indefinidamente na 1.4.6. Usuários estão sendo forçados a fazer downgrade.

---

## 4. Progresso de PRs Importantes

### 🔧 #22997 — Formatter config opt-in
**Link:** [PR #22997](https://github.com/anomalyco/opencode/pull/22997)  
**Status:** ABERTA | **Autor:** thdxr

Desabilita formatters built-in por padrão quando `formatter` está unset, permitindo `formatter: true` para restaurar comportamento anterior.

---

### 🔧 #22996 — Split config parsing steps
**Link:** [PR #22996](https://github.com/anomalyco/opencode/pull/22996)  
**Status:** **CLOSED** | **Autor:** thdxr

Substitui helper genérico por passos explícitos `ConfigParse.jsonc()` e `ConfigParse.schema()`, melhorando manutenibilidade.

---

### 🔧 #22984 — Flag namespace to const object
**Link:** [PR #22984](https://github.com/anomalyco/opencode/pull/22984)  
**Status:** **CLOSED** | **Autor:** kitlangton

Converte namespace `Flag` para objeto const com getters, seguindo padrão TypeScript moderno.

---

### 🔧 #21822 — Improve compaction para contexto recente
**Link:** [PR #21822](https://github.com/anomalyco/opencode/pull/21822)  
**Status:** ABERTA | **Autor:** nexxeln

Mantém turnos recentes verbatim durante compaction ao invés de resumir sessão completa. Adiciona `compaction.tail_turns` e `compaction.tail_tokens`.

---

### ⚡ #22990 — Speed up skill directory discovery
**Link:** [PR #22990](https://github.com/anomalyco/opencode/pull/22990)  
**Status:** **CLOSED** | **Autor:** thdxr

Divide skill initialization em discovery pass barato e full parse pass, reduzindo trabalho de inicialização em code paths que só precisam de diretórios.

---

### 🛠️ #22988 — Fix assistant message ID ordering
**Link:** [PR #22988](https://github.com/anomalyco/opencode/pull/22988)  
**Status:** ABERTA | **Autor:** lightrabbit

Corrige bug onde primeira mensagem do assistente poderia aparecer **acima** da mensagem do usuário no timeline, tornando-a invisível.

---

### 🌐 #22961 — Vercel sandbox substrate [WIP]
**Link:** [PR #22961](https://github.com/anomalyco/opencode/pull/22961)  
**Status:** ABERTA | **Autor:** avemeva

Substrate opcional que executa tool calls fs + subprocess dentro de sandbox Vercel por tenant — ideal para servidores multi-tenant.

---

### 🔧 #22987 — Stabilize session dialog ordering
**Link:** [PR #22987](https://github.com/anomalyco/opencode/pull/22987)  
**Status:** **CLOSED** | **Autor:** thdxr

Sessions agora ordenadas por dia de update ao invés de timestamp exato, evitando que sessões ativas "pulem" constantemente.

---

### 🔧 #22984, #22993, #22992, #22991, #22981, #22980, #22979, #22978 — Namespace unwrap migration
**Link:** [Coleção de PRs](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+is%3Aclosed+unwrap)

Maratona de refatoração conduzida por **kitlangton** desdobrando namespaces em exports flat + self-reexports, seguindo spec de namespace-treeshake.

---

### 🔧 #22783 — Un-hardcode NPM registry URL
**Link:** [PR #22783](https://github.com/anomalyco/opencode/pull/22783)  
**Status:** ABERTA | **Autor:** entr0pia

Remove referências hardcoded para `https://registry.npmjs.org`, passando a ler do npm config — útil para ambientes corporativos.

---

## 5. Tendências de Pedidos de Features

Baseado nas issues abertas e fechadas, as seguintes direções emergem como prioritárias para a comunidade:

### 🤖 Agentes e Subagents

| Feature | Issue | Demanda |
|---------|-------|---------|
| Seleção dinâmica de modelo por subagent | [#6651](https://github.com/anomalyco/opencode/issues/6651) | 34 👍 |
| Variants de modelo para subagents aplicados em runtime | [#21632](https://github.com/anomalyco/opencode/issues/21632) | 3 👍 |

### 💾 Sessões e Contexto

| Feature | Issue | Demanda |
|---------|-------|---------|
| Melhorar compaction retendo contexto recente | [PR #21822](https://github.com/anomalyco/opencode/pull/21822) | Em progresso |
| Sidebar open/closed por config default | [#3682](https://github.com/anomalyco/opencode/issues/3682) | 20 👍 |
| Sessions picker mostra histórico completo | [#16270](https://github.com/anomalyco/opencode/issues/16270) | - |

### 🔌 Integrações

| Feature | Issue | Demanda |
|---------|-------|---------|
| PaperClaw hook para papers peer-reviewed | [#22985](https://github.com/anomalyco/opencode/issues/22985) | 0 👍 |
| Vercel sandbox substrate | [PR #22961](https://github.com/anomalyco/opencode/pull/22961) | - |

### ⚙️ UI/UX

| Feature | Issue | Demanda |
|---------|-------|---------|
| Logo com cores variadas | [#22960](https://github.com/anomalyco/opencode/issues/22960) | 0 👍 |

---

## 6. Pontos de Atenção para Desenvolvedores

### 🐛 Problemas Recorrentes Identificados

| Categoria | Problema | Issues Relacionadas |
|-----------|----------|---------------------|
| **Memory/RAM** | OOM kills em sessões longas | [#20695](https://github.com/anomalyco/opencode/issues/20695), [#22883](https://github.com/anomalyco/opencode/issues/22883) |
| **Model Reasoning** | Erros com reasoning/thinking blocks | [#20698](https://github.com/anomalyco/opencode/issues/20698), [#22863](https://github.com/anomalyco/opencode/issues/22863), [#22972](https://github.com/anomalyco/opencode/issues/22972) |
| **Tool Execution** | Tools não executam (Ollama, Qwen) | [#7030](https://github.com/anomalyco/opencode/issues/7030), [#22872](https://github.com/anomalyco/opencode/issues/22872) |
| **Local Models** | Gemma-4 com loops/falhas | [#21034](https://github.com/anomalyco/opencode/issues/21034) |
| **Clipboard** | Copy/paste não funciona no CLI | [#13984](https://github.com/anomalyco/opencode/issues/13984) |

### 📈 Padrões de Compatibilidade com Provedores

**Azure OpenAI:**
- GPT-5.4 com reasoning blocks causa crashes (#20698)
- Cloudflare AI Gateway com max_tokens precisa ajuste (#22374)

**OpenAI:**
- Opus 4.7 requer параметр `thinking.type.adaptive` (#22863, #22857)
- Reasoning_content stripped em replay (#19081)

**Ollama:**
- qwen2.5-coder: tools executam mas não modificam arquivos (#7030)

### 🔥 Demanda de Melhorias

1. **Agent-level model control** — Subagents não honram variant settings em runtime
2. **Session management** — `/sessions` só mostra ~5 sessões recentes
3. **Windows stability** — Erros ENAMETOOLONG e UI glitches (#22512)
4. **Instructions auto-execution** — AGENTS.md carregado mas não executado (#22879)

### ✅ Correções Recentes Verificadas

| Issue | Status | Fix |
|-------|--------|-----|
| Opus 4.7 thinking.type.enabled | ✅ Fechada | - |
| Cloudflare AI Gateway max_tokens | ✅ Fechada | v1.4.7 |
| Adaptive thinking investigation | ✅ Fechada | - |

---

**Relatório gerado em:** 2026-04-17  
**Próxima atualização:** 2026-04-18

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Relatório Diário da Comunidade Pi
## 📅 2026-04-17

---

## 1. Destaques do Dia

A comunidade Pi encerra mais um dia movimentado com **três lançamentos consecutivos** (v0.67.4 a v0.67.6), incluindo melhorias significativas para templates de prompt com hints de argumentos e correções importantes para o Opus 4.7. O dia foi marcado por intenso progresso em PRs voltados à interoperabilidade com múltiplos provedores e refinamentos na experiência do terminal, com destaque para a correção da regressão do Shift+Enter no Zellij que afetava usuários do multiplexer.

---

## 2. Lançamentos

### 🎯 v0.67.6 (2026-04-17)
**Novidades:**
- Suporte a campo `argument-hint` no frontmatter de templates de prompt
- Renderização no dropdown `/` autocomplete com `<angle>` para argumentos obrigatórios e `[square]` para opcionais
- [Documentação: docs/prompt-templates.md#argument-hints](https://github.com/badlogic/pi-mono/blob/main/docs/prompt-templates.md#argument-hints)

### 🔧 v0.67.5 (2026-04-17)
**Correções:**
- Configuração de adaptive thinking do Opus 4.7 corrigida para provedores Anthropic e Bedrock
- Reconhecimento adequado do suporte a adaptive thinking e mapeamento de `xhigh` reasoning para valores de effort suportados
- [PR #3286](https://github.com/badlogic/pi-mono/pull/3286) por [@markusylisiurunen](https://github.com/markusylisiurunen)

### ⚡ v0.67.4 (2026-04-16)
**Novidades:**
- Flag `--no-context-files` (`-nc`) para desabilitar descoberta automática de `AGENTS.md`/`CLAUDE.md`
- Nova exportação: `loadProjectContextFiles()` como utilitário standalone
- [Documentação: README.md#context-files](https://github.com/badlogic/pi-mono/blob/main/README.md#context-files)

---

## 3. Issues em Evidência

### 🔴 #3259 - Regressão: Shift+Enter não insere nova linha no Zellij
**Status:** CLOSED | **Comentários:** 11 | ** 👍:** 1

**Por que importa:** Usuários do Zellij (multiplexer terminal) perderam funcionalidade essencial após atualização. O problema está relacionado à ambiguidade entre Alt+Enter e Shift+Enter no protocolo CSI-u.

**Reação da comunidade:** Discussão ativa com 11 comentários buscando reproduzir e entender o escopo. [@mitsuhiko](https://github.com/mitsuhiko) implementou correção híbrida no [PR #3296](https://github.com/badlogic/pi-mono/pull/3296).

🔗 [github.com/badlogic/pi-mono/issues/3259](https://github.com/badlogic/pi-mono/issues/3259)

---

### 🟡 #3167 - Cola de texto multilinha insere códigos CSI-u em vez de preservar quebras
**Status:** CLOSED | **Comentários:** 9 | ** 👍:** 0

**Por que importa:** Afeta fluxos de trabalho que dependem de colar código ou texto formatado, especialmente em ambientes tmux. Potencialmente relacionado ao Issue #1872.

**Reação da comunidade:** 9 comentários documentando passos de reprodução e investigação de padrões de escape.

🔗 [github.com/badlogic/pi-mono/issues/3167](https://github.com/badlogic/pi-mono/issues/3167)

---

### 🟠 #3196 - Prompt caching quebrado para proxies OpenAI-compatíveis
**Status:** CLOSED | **Comentários:** 8 | ** 👍:** 0

**Por que importa:** Usuários de proxies como litellm ou theclawbay enfrentam cache misses constantes porque headers `session_id` e `x-client-request-id` não são enviados, causando custos desnecessários.

**Reação da comunidade:** Issue técnico detalhado identificando três problemas subjacentes. Correções parciais nos PRs [#3264](https://github.com/badlogic/pi-mono/pull/3264) e [#3266](https://github.com/badlogic/pi-mono/pull/3266).

🔗 [github.com/badlogic/pi-mono/issues/3196](https://github.com/badlogic/pi-mono/issues/3196)

---

### 🟢 #1155 - Adicionar provedor Vertex AI para modelos Claude
**Status:** CLOSED | **Comentários:** 7 | ** 👍:** 0

**Por que importa:** Usuários do Google Cloud que desejam usar modelos Claude via Vertex AI não conseguiam configurar corretamente, pois o provedor `google-vertex` só suporta modelos Gemini.

**Reação da comunidade:** 7 comentários discutindo alternativas e workarounds. Demanda recorrente de enterprises usando GCP.

🔗 [github.com/badlogic/pi-mono/issues/1155](https://github.com/badlogic/pi-mono/issues/1155)

---

### 🔴 #3305 - `/import` encerra abruptamente a sessão Pi
**Status:** CLOSED | **Comentários:** 7 | ** 👍:** 0

**Por que importa:** Funcionalidade de importação de sessões trava completamente o ambiente, causando perda de trabalho não salvo.

**Reação da comunidade:** 7 comentários com passos de reprodução detalhados. Issue prioritária para workflows de backup/restauração.

🔗 [github.com/badlogic/pi-mono/issues/3305](https://github.com/badlogic/pi-mono/issues/3305)

---

### 🟡 #3005 - Tornar mensagem "UPDATE AVAILABLE" toggleável
**Status:** CLOSED | **Comentários:** 6 | ** 👍:** 2

**Por que importa:** Usuários de NixOS e outros sistemas com atualização manual são incomodados com mensagens intrusivas a cada início.

**Reação da comunidade:** 6 comentários apoiando a solicitação, com 2 likes. Usuários requestam integração com "Quiet startup".

🔗 [github.com/badlogic/pi-mono/issues/3005](https://github.com/badlogic/pi-mono/issues/3005)

---

### 🟢 #3103 - Links Markdown devem ser clicáveis via OSC 8
**Status:** CLOSED | **Comentários:** 6 | ** 👍:** 0

**Por que importa:** Melhora significativa na experiência em terminais modernos (Kitty, iTerm2, Ghostty, WezTerm, Windows Terminal) permitindo navegação por links sem precisar copiar URLs.

**Reação da comunidade:** 6 comentários discutindo implementação técnica. Resolvido no [PR #3248](https://github.com/badlogic/pi-mono/pull/3248) com suporte a quebra de linha.

🔗 [github.com/badlogic/pi-mono/issues/3103](https://github.com/badlogic/pi-mono/issues/3103)

---

### 🟠 #3299 - Adicionar nível "max" de thinking para Opus 4.7
**Status:** OPEN | **Comentários:** 5 | ** 👍:** 0

**Por que importa:** Opus 4.7 introduz um quinto nível de thinking no API, e pi precisa sincronizar sua escada para manter compatibilidade completa.

**Reação da comunidade:** 5 comentários discutindo design da escada: `off / minimal / low / medium / high / xhigh / max`. Semelhante à adição de `xhigh` para Codex.

🔗 [github.com/badlogic/pi-mono/issues/3299](https://github.com/badlogic/pi-mono/issues/3299)

---

### 🟡 #3308 - Regressão: resumo `[Extensions]` no startup mostra apenas `index.ts`
**Status:** OPEN | **Comentários:** 3 | ** 👍:** 1

**Por que importa:** Extensions de pacote agora são indistinguíveis no resumo de startup, dificultando debugging e audit de extensões carregadas.

**Reação da comunidade:** 3 comentários reportando o problema, 1 like. Issue afeta desenvolvedores de extensões.

🔗 [github.com/badlogic/pi-mono/issues/3308](https://github.com/badlogic/pi-mono/issues/3308)

---

### 🟡 #2469 - Cola de imagem da clipboard para WSL falha silenciosamente
**Status:** OPEN | **Comentários:** 4 | ** 👍:** 3

**Por que importa:** Workflows de screenshots para desenvolvedores Windows/WSL ficam quebrados. Afeta caso de uso comum de compartilhamento de tela em debugging.

**Reação da comunidade:** 4 comentários confirmando o problema, 3 likes. Issue antiga (Março) ainda em análise.

🔗 [github.com/badlogic/pi-mono/issues/2469](https://github.com/badlogic/pi-mono/issues/2469)

---

## 4. Progresso de PRs Importantes

### 🚀 #3312 - Adicionar widgets interativos de extensão
**Status:** CLOSED | **Autor:** [@paulrobello](https://github.com/paulrobello)

**O que faz:** Introduce API genérica para extension widgets em modo interativo. Widgets podem receber eventos de mouse locais, saber se estão focados e participar do roteamento de foco com o editor.

**Impacto:** Base para UI components customizados em extensões, habilitando interfaces mais ricas.

🔗 [github.com/badlogic/pi-mono/pull/3312](https://github.com/badlogic/pi-mono/pull/3312)

---

### 🔧 #3311 - Pular mensagens vazias e tratar toolResult vazio
**Status:** CLOSED | **Autor:** [@kevinsutianxing](https://github.com/kevinsutianxing)

**O que faz:** Corrige erro 400 de provedores GLM-5/ZAI e MiniMax que rejeitam mensagens com `content: ""`. Remove mensagens de usuário vazias e adiciona placeholder para tool results vazios.

**Impacto:** Compatibilidade com provedores asiáticos populares.

🔗 [github.com/badlogic/pi-mono/pull/3311](https://github.com/badlogic/pi-mono/pull/3311)

---

### 💰 #3307 - Corrigir pricing do Codex service tier
**Status:** CLOSED | **Autor:** [@markusylisiurunen](https://github.com/markusylisiurunen)

**O que faz:** Codex retorna `service_tier: "default"` mesmo quando cliente solicita `flex` ou `priority`, causando cálculo incorreto de custos. Adiciona resolver específico para service tier do Codex.

**Impacto:** Precisão de billing para usuários do Codex com diferentes tiers.

🔗 [github.com/badlogic/pi-mono/pull/3307](https://github.com/badlogic/pi-mono/pull/3307)

---

### 🌐 #2826 - Usar timezone local para data no system prompt
**Status:** CLOSED | **Autor:** [@okottorika](https://github.com/okottorika)

**O que faz:** Corrige problema onde a data injetada no system prompt usava UTC (via `toISOString()`), causando "data errada" para desenvolvedores distantes de UTC, afetando geração de changelogs.

**Impacto:** Agentes veem data correta para todos os fusos horários.

🔗 [github.com/badlogic/pi-mono/pull/2826](https://github.com/badlogic/pi-mono/pull/2826)

---

### ✨ #3267 - Compactar header de startup e listagens de recursos
**Status:** CLOSED | **Autor:** [@mitsuhiko](https://github.com/mitsuhiko)

**O que faz:** Usa expansão Ctrl+O para startup help, com listas comprimidas separadas por vírgula e contexto expandido para paths. Resolve #3147.

**Impacto:** Tela de startup mais limpa e informativa.

🔗 [github.com/badlogic/pi-mono/pull/3267](https://github.com/badlogic/pi-mono/pull/3267)

---

### 🔧 #3286 - Corrigir Opus 4.7 adaptive thinking
**Status:** CLOSED | **Autor:** [@markusylisiurunen](https://github.com/markusylisiurunen)

**O que faz:** Corrige bug onde Opus 4.7 era rejeitado pelo Bedrock com "invalid beta flag" porque `supportsAdaptiveThinking()` só verificava modelos 4.6.

**Impacto:** Funcionalidade de reasoning adaptativo работает corretamente com Opus 4.7 no Bedrock.

🔗 [github.com/badlogic/pi-mono/pull/3286](https://github.com/badlogic/pi-mono/pull/3286)

---

### 🛡️ #3024 - Usar Promise.allSettled para execução paralela de tools
**Status:** CLOSED | **Autor:** [@wujiaming88](https://github.com/wujiaming88)

**O que faz:** Corrige perda de resultados quando `afterToolCall` hook lança exceção durante coleta de results. Sequential await era vulnerável a falhas em cascata.

**Impacto:** Execução de tools paralelas mais robusta.

🔗 [github.com/badlogic/pi-mono/pull/3024](https://github.com/badlogic/pi-mono/pull/3024)

---

### ☁️ #3125 - Suportar autenticação Bearer token para Converse API
**Status:** CLOSED | **Autor:** [@wirjo](https://github.com/wirjo)

**O que faz:** Adiciona suporte a API key Bearer para Bedrock, além do SigV4 existente. Usuários sem IAM credentials agora podem usar Bedrock.

**Impacto:** Acessibilidade para developers com tokens de admin sem acesso IAM.

🔗 [github.com/badlogic/pi-mono/pull/3125](https://github.com/badlogic/pi-mono/pull/3125)

---

### 🔗 #3248 - Usar OSC 8 hyperlinks em Markdown
**Status:** CLOSED | **Autor:** [@ofa1](https://github.com/ofa1)

**O que faz:** Implementa hyperlinks clicáveis em terminais que suportam OSC 8 (Kitty, iTerm2, Ghostty, WezTerm, Windows Terminal). Resolve problema de line wrapping com tracking de URLs ativos.

**Impacto:** UX de leitura melhorada em terminais modernos.

🔗 [github.com/badlogic/pi-mono/pull/3248](https://github.com/badlogic/pi-mono/pull/3248)

---

### ⌨️ #3296 - Restaurar handling de teclas Zellij sem ambiguidade Enter
**Status:** CLOSED | **Autor:** [@mitsuhiko](https://github.com/mitsuhiko)

**O que faz:** Solução híbrida Kitty + legacy para Zellij, mapeamento não-ambíguo ESC+CR entre alt+enter e shift+enter, proteção contra race conditions do timer fallback.

**Impacto:** Resolve regressão #3259 para usuários Zellij.

🔗 [github.com/badlogic/pi-mono/pull/3296](https://github.com/badlogic/pi-mono/pull/3296)

---

## 5. Tendências de Pedidos de Features

### 🔗 Multi-Provedor e Interoperabilidade
A comunidade demonstra forte demanda por suporte a múltiplos provedores de IA:
- **Vertex AI para Claude** (#1155) - users GCP querem usar Claude no Vertex
- **Bearer token para Bedrock** (#3125) - autenticação flexível além de IAM
- **Proxy support melhorado** (#3196) - cache funcional com litellm e outros

### 🎨 Experiência do Terminal
Melhorias de UI/UX para terminais modernos são recorrentes:
- **OSC 8 hyperlinks** (#3103) - links clicáveis em Markdown
- **Timezone local** (#2826) - data correta no contexto do agent
- **Widget API** (#3312) - extensibilidade de UI

### ⚙️ Configur

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Diário da Comunidade Qwen Code
## 📅 2026-04-17

---

## 1. Destaques do Dia

O dia foi marcado por uma **onda massiva de erros de autenticação 401**, com dezenas de usuários reportando falha no acesso ao token mesmo após login bem-sucedido. A comunidade também enviou um volume significativo de PRs focados em **i18n, experiência do usuário e performance**. A release nightly v0.14.5 trouxe suporte expandido a hooks ACP e melhorias no modo compacto.

---

## 2. Lançamentos

### v0.14.5-nightly.20260417.12b24e2d2

| Item | Descrição | PR |
|------|-----------|-----|
| **ACP Hooks** | Adicionado suporte completo a hooks para integração ACP | [#3248](https://github.com/QwenLM/qwen-code/pull/3248) |
| **Modo Compacto UX** | Melhorias em atalhos, sincronização de settings e segurança | [#3100](https://github.com/QwenLM/qwen-code/pull/3100) |
| **HTTP Hooks** | Expansão de funcionalidades HTTP Hooks | (mencionado na release) |

📌 **Link**: [Release v0.14.5-nightly.20260417](https://github.com/QwenLM/qwen-code/releases)

---

## 3. Issues em Evidência

### 🔴 Issue #3203 — Ajuste na Política Free Tier do OAuth *(CRÍTICA)*
- **Status**: Aberta | **Comentários**: 83 | **Criada**: 2026-04-13
- **Resumo**: Proposta polêmica de reduzir a quota gratuita de 1.000 para 100 requisições/dia e descontinuar completamente o free tier em 20 de junho.
- **Por que importa**: Afeta diretamente todos os usuários free. Os 83 comentários indicam forte engajamento da comunidade.
- **Reação**: Debate intenso sobre modelos de sustentabilidade vs. acessibilidade.
- 🔗 [Ver Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203)

### 🔴 Issue #3335 — Erro 401 Após Login *(ALTA PRIORIDADE)*
- **Status**: Fechada (duplicate) | **Comentários**: 13 | **Criada**: 2026-04-16
- **Resumo**: Usuários recebem "401 invalid access token" mesmo após login bem-sucedido.
- **Por que importa**: dezenas de issues idênticas abertas, indica problema sistêmico.
- 🔗 [Ver Issue #3335](https://github.com/QwenLM/qwen-code/issues/3335)

### 🔴 Issue #3351 — Erro 401 macOS *(ALTA PRIORIDADE)*
- **Status**: Aberta | **Comentários**: 6 | **Criada**: 2026-04-16
- **Cliente**: Qwen Code 0.14.5, Node.js v22.22.1, macOS arm64
- 🔗 [Ver Issue #3351](https://github.com/QwenLM/qwen-code/issues/3351)

### 🔴 Issue #3348 — Erro 401 After Yesterday *(ALTA PRIORIDADE)*
- **Status**: Aberta | **Comentários**: 3 | **👍**: 6 | **Criada**: 2026-04-16
- **Destaque**: 6 upvotes, indicando problema widespread.
- 🔗 [Ver Issue #3348](https://github.com/QwenLM/qwen-code/issues/3348)

### 🟡 Issue #1210 — XDG Base Directory Support *(FEATURE)*
- **Status**: Aberta | **Comentários**: 3 | **👍**: 6 | **Criada**: 2025-12-11
- **Resumo**: Substituir `~/.qwen` por locais conforme XDG Base Directory no Linux.
- **Por que importa**: Padronização Linux, esperado por usuários avançados.
- 🔗 [Ver Issue #1210](https://github.com/QwenLM/qwen-code/issues/1210)

### 🟡 Issue #3240 — Idioma Padrão da Documentação *(FEATURE)*
- **Status**: Aberta | **Comentários**: 3 | **Criada**: 2026-04-14
- **Resumo**: Solicita que a documentação seja em chino como padrão, dado o foco internacional.
- 🔗 [Ver Issue #3240](https://github.com/QwenLM/qwen-code/issues/3240)

### 🟡 Issue #3323 — Localização de Slash Commands *(FEATURE)*
- **Status**: Aberta | **Comentários**: 2 | **Criada**: 2026-04-16
- **Resumo**: Traduzir descrições de slash commands para idiomas locais.
- **Reação**: Já existe PR #3328 implementando.
- 🔗 [Ver Issue #3323](https://github.com/QwenLM/qwen-code/issues/3323)

### 🟡 Issue #3373 — 401 Mesmo Após Login *(BUG)*
- **Status**: Aberta | **Criada**: 2026-04-16 | **Atualizada**: 2026-04-17
- **Resumo**: 401 persiste mesmo após múltiplos logins e nova sessão.
- 🔗 [Ver Issue #3373](https://github.com/QwenLM/qwen-code/issues/3373)

### 🟡 Issue #3376 — VS Code Plugin Não Responde *(BUG)*
- **Status**: Aberta | **Criada**: 2026-04-17
- **Resumo**: Plugin Qwen Code Companion 0.14.5 retorna 401.
- 🔗 [Ver Issue #3376](https://github.com/QwenLM/qwen-code/issues/3376)

### 🟢 Issue #1855 — OAuth Persiste com API Key *(BUG)*
- **Status**: Fechada | **Comentários**: 9 | **Criada**: 2026-02-17
- **Resumo**: Sessão OAuth persiste ao trocar para Coding Plan API key, causando 401.
- 🔗 [Ver Issue #1855](https://github.com/QwenLM/qwen-code/issues/1855)

---

## 4. Progresso de PRs Importantes

### PR #3328 — Localização de Slash Commands *(MERGE PENDENTE)*
- **Autor**: Shenean | **Atualizado**: 2026-04-17
- **Resumo**: Implementa i18n para descrições de slash commands built-in e dinâmicos, com cache de tradução.
- **Fecha**: Issue #3323
- 🔗 [Ver PR #3328](https://github.com/QwenLM/qwen-code/pull/3328)

### PR #3319 — Early Input Capture *(MERGE PENDENTE)*
- **Autor**: doudouOUC | **Atualizado**: 2026-04-16
- **Resumo**: Bufferiza input durante inicialização (200-500ms) para evitar keystrokes perdidos.
- **Fecha**: Issue #3224
- 🔗 [Ver PR #3319](https://github.com/QwenLM/qwen-code/pull/3319)

### PR #3318 — API Preconnect *(MERGE PENDENTE)*
- **Autor**: doudouOUC | **Atualizado**: 2026-04-16
- **Resumo**: Fire-and-forget HEAD request para aquecer TCP+TLS, economizando 100-200ms na primeira chamada.
- **Fecha**: Issue #3223
- 🔗 [Ver PR #3318](https://github.com/QwenLM/qwen-code/pull/3318)

### PR #3358 — M-d Keybinding *(MERGE PENDENTE)*
- **Autor**: pedrormjunior | **Atualizado**: 2026-04-17
- **Resumo**: Bind `M-d` para delete next word (comportamento Emacs/Bash padrão).
- 🔗 [Ver PR #3358](https://github.com/QwenLM/qwen-code/pull/3358)

### PR #2886 — Agent Team *(EXPERIMENTAL)*
- **Autor**: tanzhenxin | **Atualizado**: 2026-04-16
- **Resumo**: Permite ao agent principal coordenar múltiplos sub-agents em paralelo.
- **Status**: Feature experimental, off by default.
- 🔗 [Ver PR #2886](https://github.com/QwenLM/qwen-code/pull/2886)

### PR #3076 — Run in Background para Agent Tool *(MERGE PENDENTE)*
- **Autor**: tanzhenxin | **Atualizado**: 2026-04-16
- **Resumo**: Adiciona parâmetro `run_in_background` para agents assíncronos.
- 🔗 [Ver PR #3076](https://github.com/QwenLM/qwen-code/pull/3076)

### PR #3297 — Lazy Factory Registration *(MERGE PENDENTE)*
- **Autor**: doudouOUC | **Atualizado**: 2026-04-16
- **Resumo**: Corrige bug P0 de concorrência na instanciação de tools.
- **Fecha**: Issue #3221
- 🔗 [Ver PR #3297](https://github.com/QwenLM/qwen-code/pull/3297)

### PR #3321 — Defer Update Notifications *(MERGE)*
- **Autor**: pic4xiu | **Atualizado**: 2026-04-16
- **Resumo**: Evita notificação de update durante streaming do modelo.
- 🔗 [Ver PR #3321](https://github.com/QwenLM/qwen-code/pull/3321)

### PR #3375 — Stale PR Policy *(MERGE PENDENTE)*
- **Autor**: wenshao | **Atualizado**: 2026-04-16
- **Resumo**: Habilita política 35+35 dias para marcar PRs como stale/close.
- **Contexto**: 157 PRs abertos, 46 inativos há 5+ semanas.
- 🔗 [Ver PR #3375](https://github.com/QwenLM/qwen-code/pull/3375)

### PR #3313 — Recover Truncated Tool Calls *(MERGE PENDENTE)*
- **Autor**: wenshao | **Atualizado**: 2026-04-16
- **Resumo**: Corrige falha de tool calls truncados via multi-turn continuation.
- **Fecha**: Issue #3049
- 🔗 [Ver PR #3313](https://github.com/QwenLM/qwen-code/pull/3313)

---

## 5. Tendências de Pedidos de Features

### 🌍 Internacionalização (i18n) e Localização
A comunidade demonstra forte demanda por suporte multilíngue:
- **Descrições de slash commands localizadas** (Issues #3323, #3240)
- Traduções runtime para UI dinâmica
- Cobertura completa de locales built-in

### 📁 Conformidade com Padrões Linux
- **XDG Base Directory** (Issue #1210): Usuários Linux esperam que configs fiquem em `$XDG_CONFIG_HOME`

### ⚡ Performance e Latência
- **API Preconnect** para reduzir first-call latency (PR #3318)
- **Early input capture** para responsividade imediata (PR #3319)
- Otimização de crawler filesystem com `git ls-files` + ripgrep (PR #3214)

### 🤖 Agentes e Paralelismo
- **Agent Team** para coordenação paralela (PR #2886)
- **Background execution** para sub-agents (PR #3076)
- Atribuição de stats por subagent (PR #3229)

### 🔧 DX e DevOps
- **Uninstall script** limpo (Issue #3324)
- **Zed editor detection** em macOS (PR #3303)
- **Path-based rules** via `.qwen/rules/` (PR #3339)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Problema Crítico: Erro 401 em Massa

**Sintomas observados:**
- Usuários logados recebem "401 invalid access token or token expired"
- Afeta múltiplas plataformas (macOS, Linux, Windows)
- Versões afetadas: 0.14.2, 0.14.5 e anteriores

**Possíveis causas:**
1. Expiração forçada de tokens free tier (alinhado com Issue #3203)
2. Problema de renovação de sessão OAuth
3. Issue #1855 (OAuth persiste com API key) não totalmente resolvida

**Recomendação**: Verificar status do sistema de autenticação em [status.qwen.ai](https://status.qwen.ai) e monitorar Issues #3373, #3376.

---

### 🔧 Dores Recorrentes Identificadas

| Problema | Frequência | Referências |
|----------|------------|-------------|
| **401 Auth Errors** | 🔴 Altíssima | #3335, #3351, #3366, #3348, #3349, #3373, #3376 |
| **Keystroke Loss na inicialização** | 🟡 Média | PR #3319 |
| **File descriptor exhaustion** | 🟡 Média | PR #3320 |
| **Truncated tool calls** | 🟡 Média | PR #3313 |
| **UI freezing/buffer** | 🟢 Baixa | #3259 |

---

### 💡 Oportunidades de Contribuição

1. **Fix para 401**: Reprodução e root cause analysis
2. **XDG compliance**: Issue #1210 (baja complexidade)
3. **Uninstall script**: Issue #3324 (feature direta)
4. **Teste de stale PR policy**: PR #3375 precisa de validação

---

## 📊 Resumo Estatístico do Dia

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas (24h) | ~25 |
| Issues relacionadas a 401 | ~15 |
| PRs abertos (24h) | ~20 |
| Releases | 1 |
| Issues com 50+ comentários | 1 (#3203) |

---

*Relatório gerado automaticamente com base em dados do GitHub QwenLM/qwen-code em 2026-04-17.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*