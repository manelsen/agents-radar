# Relatório diário da comunidade de ferramentas AI CLI 2026-04-18

> Gerado em: 2026-04-18 01:52 UTC | Ferramentas cobertas: 8

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

# Relatório Comparativo — Ecossistema AI CLI

**Data de Referência:** 2026-04-18  
**Fontes:** GitHub Activity Reports das ferramentas

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI encontra-se em fase de maturação acelerada, com as principais plataformas investindo simultaneamente em estabilização de features core e expansão de capacidades avançadas. Observa-se uma convergência de prioridades: **agent teams e multi-agent orchestration** (Claude Code, Codex, Qwen), **otimização de custos via caching e context management** (Claude Code, Codex, Copilot), e **segurança/sandbox** (OpenCode, Codex, Gemini). O destaque negativo permanece nos problemas de rate limiting e consumo excessivo de tokens, que afetam múltiplas plataformas e indicam desafios fundamentais nos modelos de precificação. A fragmentação do mercado é evidente: enquanto algumas ferramentas focam em integração enterprise (Claude Code), outras priorizam acessibilidade (Gemini CLI com modelos locais) ou especialização técnica (OpenCode com Effect-based architecture).

---

## 2. Comparação de Atividade

| Ferramenta | Releases (24h) | Issues em Evidência | PRs em Progresso | Estrelas (aprox.) | Tendência Principal |
|------------|---------------|---------------------|------------------|-------------------|---------------------|
| **Claude Code** | 2 (v2.1.113, v2.1.114) | 10 | 5 | ~18k ⭐ | Agent teams, caching, Opus 4.7 |
| **OpenAI Codex** | 4 (rust-v0.122.0-alpha) | 10 | 10 | ~25k ⭐ | Rust rewrite, device keys, remote dev |
| **Gemini CLI** | 1 (v0.38.2) | 10 | 10 | ~8k ⭐ | Gemma 4, RTL/BiDi, auth fixes |
| **Copilot CLI** | 1 (v1.0.32) | 10 | 1 | ~12k ⭐ | Rate limits, model selection |
| **Kimi Code CLI** | 1 (v1.36.0) | 10 | 2 | ~5k ⭐ | Extended thinking, K2.6 control |
| **OpenCode** | 4 (v1.4.8-v1.4.11) | 10 | 10 | ~3k ⭐ | Effect migration, sandbox, keyboard UX |
| **Pi** | 2 (v0.67.67-68) | 10 | 10 | ~2k ⭐ | Multi-provider, session management |
| **Qwen Code** | 2 (nightly + preview) | 10 | 10 | ~4k ⭐ | ACP hooks, OAuth policy, batch ops |

**Observações:**
- **OpenCode** apresenta a cadência de release mais agressiva (4 versões em 24h), indicando fase intensiva de iteração.
- **OpenAI Codex** mantém pipeline alpha acelerado para reescrita em Rust, sinalizando investimento de longo prazo.
- **Qwen Code** enfrenta crise de autenticação (onda de errors 401) demandando atenção urgente.
- **Pi** demonstra diversificação estratégica com integração de novos providers (Fireworks AI, Nebius).

---

## 3. Direções de Features Compartilhadas

### 3.1 Agent Teams / Multi-Agent Orchestration

| Ferramenta | Status | Natureza |
|------------|--------|----------|
| Claude Code | 🟡 Issues ativas | Crash handling, tmux compatibility, cross-agent permissions |
| OpenAI Codex | 🟡 MCP stacks | Performance em sessões multi-agent |
| Qwen Code | 🟡 Paridade | ~40-45% das capacidades do Claude Code |
| OpenCode | 🟡 Feature request | Sandbox para isolamento de agentes |

**Análise:** A orquestração de múltiplos agentes emerge como o próximo frontier tecnológico. Claude Code lidera com experiência mais madura, enquanto outras plataformas investem em features básicas de multi-agent.

### 3.2 Caching e Otimização de Contexto

| Ferramenta | Problema Reportado | Impacto |
|------------|-------------------|---------|
| Claude Code | Session limits esgotados rapidamente (#38335, 47098) | Crítico — Max plan billing |
| OpenAI Codex | Tokens consumidos excessivamente (#14593) | Crítico — custo direto |
| Copilot CLI | Requisições premium infinita (#2591) | Crítico — 80-100x consumo |
| Gemini CLI | Overhead de 2,500+ tokens por sessão MCP (#50189) | Médio — context bloat |

**Análise:** O problema de consumo excessivo de tokens é sistêmico. Soluções em desenvolvimento incluem cache hit rate optimization (Claude Code), prompt compaction (Codex), e per-session MCP profiles (Claude Code).

### 3.3 Segurança e Isolamento (Sandbox)

| Ferramenta | Foco | Abordagem |
|------------|------|-----------|
| Claude Code | `sandbox.network.deniedDomains` | Bloqueio granular de domínios |
| OpenAI Codex | bwrap approval prompts | Redução de fricção em sandbox |
| OpenCode | Feature request #2242 | Sandbox tipo seatbelt (macOS) |
| Gemini CLI | Signal forwarding para child processes | Estabilidade em integrações |

**Análise:** A comunidade demonstra demanda crescente por isolamento controlado, especialmente para ambientes enterprise onde compliance e audit trails são mandatórios.

### 3.4 Suporte a Plataformas Específicas

| Plataforma | Ferramentas Afetadas | Problema Principal |
|------------|---------------------|-------------------|
| **Windows/WSL** | Codex, Kimi, OpenCode | Path mixing, filesystem ACLs, shell compatibility |
| **Nix/direnv** | Copilot CLI | Deadlock de subprocess I/O |
| **macOS Desktop** | Claude Code, Codex | GPU usage, accessibility, contrast |
| **WSL2** | Kimi, OpenCode | WebAssembly parsing, login flows |

---

## 4. Análise de Diferenciação

### 4.1 Posicionamento de Mercado

| Ferramenta | Público-Alvo Primário | Diferencial Competitivo |
|------------|----------------------|-------------------------|
| **Claude Code** | Enterprise, developers avançados | Opus 4.7, agent teams maduros, governance plugins |
| **OpenAI Codex** | Developers cloud-native | Rewritten em Rust, device-bound authentication, remote dev |
| **Gemini CLI** | Usuários在意/Google ecosystem | Modelos Gemma locais, Vertex AI routing, RTL support |
| **Copilot CLI** | Developers GitHub-centric | Integração GitHub, XDG compliance (em progresso), auto model |
| **Kimi Code CLI** | Mercado chinês, extended thinking | K2.6 adaptive thinking, max_steps=500 |
| **OpenCode** | Developers keyboard-driven | Effect-based architecture, customização profunda |
| **Pi** | Multi-cloud/multi-provider | Provider-agnostic (Bedrock, Vertex, Nebius, Fireworks) |
| **Qwen Code** | Mercado chinês, batch operations | ACP hooks, HTTP hooks, OAuth integration |

### 4.2 Abordagens Técnicas Distintivas

**Arquitetura:**
- **Rust-first:** OpenAI Codex (reescrita completa), priorizando performance e distribuição binária
- **Effect-based:** OpenCode, investindo em type safety e functional programming patterns
- **Provider-agnostic:** Pi, maximizando flexibilidade de modelos

**Modelo de Negócio:**
- **Freemium com limites agressivos:** Qwen Code (proposta: 100 req/dia vs. atual 1.000), sinalizando monetização em mercado competitivo
- **Premium locked:** Gemini CLI (erro 403 para Google One AI Premium indica problema de monetização)
- **Usage-based:** Claude Code, Copilot CLI — modelos de cobrança por consumo

**Extensibilidade:**
- **Plugin ecosystem:** Claude Code (governance, preserve-session), Copilot CLI (MCP integration)
- **Hook systems:** Qwen Code (ACP hooks, HTTP hooks, LLM evaluation hooks), Codex (managed hooks)
- **Protocol-based:** Pi (ACP extension architecture)

---

## 5. Tração e Maturidade da Comunidade

### 5.1 Métricas de Engajamento

| Ferramenta | Issue com Maior 👍 | Comentários (top issue) | PRs/Dia (aprox.) |
|------------|-------------------|------------------------|------------------|
| Claude Code | #42796 — 1.950 👍 | 644 (session limits) | ~5 |
| OpenAI Codex | #10450 — 565 👍 | 142 (remote dev) | ~10 |
| Gemini CLI | #24517 — 46 👍 | 114 (403 errors) | ~10 |
| Copilot CLI | #1703 — 33 👍 | 27 (org models) | ~1 |
| Kimi Code CLI | N/A | 5 (API errors) | ~3 |
| OpenCode | #4821 — 34 👍 | 15 (unqueue) | ~10 |
| Pi | N/A | 8 (Vertex support) | ~10 |
| Qwen Code | #3203 — N/A 👍 | 93 (OAuth policy) | ~10 |

**Análise:** Claude Code e OpenAI Codex dominam em engajamento quantitativo, refletindo bases de usuários maiores. Qwen Code demonstra engajamento qualitativo alto (93 comentários) apesar de base menor, indicando discussão intensa sobre política de produto.

### 5.2 Velocidade de Iteração

| Ferramenta | Releases/Semana (média) | Tempo Médio de PR Merge | Foco de Iteration |
|------------|------------------------|------------------------|-------------------|
| **OpenCode** | ~20+ | Rápido (< 24h para contrib. ativo) | Core stability, refactoring |
| **OpenAI Codex** | ~4 alphas | Variável (Rust migration) | Arquitetura |
| **Pi** | ~2-3 | Moderado | Provider integration |
| **Claude Code** | ~2-4 | Estável | Features, polish |
| **Qwen Code** | ~7 nightlies | Rápido | Hooks, ACP |
| **Gemini CLI** | ~1-2 | Moderado | Bug fixes, models |
| **Copilot CLI** | ~1 | Lento | XDG, rate limits |
| **Kimi Code** | ~1 | Moderado | Thinking control |

---

## 6. Sinais de Tendência

### 6.1 Tendências Confirmadas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Agent teams como feature core** | Claude Code (v2.1.113+), Qwen (#2409), Codex (MCP stacks) | Competição em orchestration vai se intensificar |
| **Local models como diferencial** | Gemini (Gemma 4), Pi (Fireworks, Nebius), Kimi (K2.6) | Redução de dependência de APIs cloud = mais privacidade e custo |
| **Rust como linguagem de sistema** | Codex (0.122.0 alpha), binários nativos (Claude Code) | Performance e distribuição binária tornam-se expectativas |
| **Hooks como extensibilidade padrão** | Qwen (ACP, HTTP, LLM hooks), Codex (managed hooks), Claude (plugins) | Ecossistema de plugins emerge como diferenciador |
| **Sandbox/segurança obrigatório** | OpenCode (#2242), Claude (network deniedDomains), Codex (bwrap) | Ambientes enterprise demandam isolamento |

### 6.2 Tendências Emergentes

| Tendência | Primeiros Sinais | Potencial |
|-----------|-----------------|-----------|
| **Device-bound authentication** | Codex (device key crate + providers Linux/Windows/macOS) | Redefine security model para AI tools |
| **Thinking/token control granular** | Kimi (max_steps=500), Pi (thinking ladder), Claude (effort levels) | Usuários querem controle sobre custo/performance |
| **RTL/BiDi accessibility** | Gemini (PR #25243) | Mercado global exige suporte internacional |
| **Effect/functional architecture** | OpenCode (7 PRs em 24h migrating para Effect) | Type safety como requirement para código mission-critical |
| **MCP como protocolo de integração** | Claude, Copilot, Kimi, Pi todos suportando MCP | Standardização de tool integration |

### 6.3 Riscos e Vulnerabilidades Sistêmicas

| Risco | Afetadas | Severidade | Mitigação Necessária |
|-------|----------|------------|---------------------|
| **Rate limiting quebrado** | Copilot, Codex, Qwen | Alta | Stack de retry, user feedback claro |
| **Auth/token management** | Gemini (403), Qwen (401 wave) | Crítica | Revisão de OAuth + API key flows |
| **Excesso de thinking** | Kimi (K2.6 loops), Claude (session limits) | Média-Alta | Controles de token budgets |
| **Installation barriers** | Kimi (GitHub blocked), Qwen (OAuth) | Média | Mirror networks, alternativas de auth |

---

## Conclusão

O ecossistema AI CLI em abril de 2026 apresenta **consolidação técnica** (Rust, Effect, sandboxing) com **fragmentação de mercado** (diferentes públicos, modelos de monetização, regionalização). As principais oportunidades de diferenciação estão em:

1. **Agent teams maduros** — onde Claude Code lidera mas enfrenta estabilidade
2. **Custo previsível** — onde o consumo excessivo de tokens afeta todas as plataformas
3. **Extensibilidade via plugins/hooks** — onde o ecossistema de plugins ainda é imaturo

Para **decisores técnicos**, a recomendação é monitorar a maturação de agent teams (Claude Code, Codex) para workloads enterprise, enquanto **desenvolvedores** devem priorizar plataformas com cadência de release rápida (OpenCode, Qwen) para contribuições de impacto.

---

*Relatório compilado em 2026-04-18 | Baseado em community activity reports de 8 ferramentas AI CLI*

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório: Destaques da Comunidade Claude Code Skills

## 1. Ranking das Skills mais quentes

| # | Skill / PR | Autor | Comentários | Estado | Descrição |
|---|-----------|-------|-------------|--------|-----------|
| 1 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | Ativo | OPEN | Controle de qualidade tipográfico para documentos gerados por IA (palavras órfãs, linhas viúvas, alinhamento de numeração) |
| 2 | **skill-quality-analyzer + skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | eovidiu | Ativo | OPEN | Meta-skills para análise de qualidade e segurança de Skills em 5 dimensões |
| 3 | **ODT** [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Ativo | OPEN | Criação, preenchimento e conversão de OpenDocument (.odt, .ods) |
| 4 | **frontend-design** [#210](https://github.com/anthropics/skills/pull/210) | justinwetch | Ativo | OPEN | Revisão para maior clareza, ação e coerência interna |
| 5 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Ativo | OPEN | Cobertura completa: Testing Trophy, Unit, React, E2E, mocks |
| 6 | **sensory** [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Ativo | OPEN | Automação nativa macOS via AppleScript (duas camadas de permissão) |
| 7 | **x402 BSV micropayments** [#374](https://github.com/anthropics/skills/pull/374) | Calgooon | Ativo | OPEN | Autenticação e micropagamentos para serviços AI via BSV |
| 8 | **SAP-RPT-1-OSS** [#181](https://github.com/anthropics/skills/pull/181) | amitlals | Ativo | OPEN | Modelo preditivo tabular para dados empresariais SAP |

**Destaque:** Nenhum PR foi ainda merged — todas as Skills estão em revisão ativa, indicando um pipeline robusto em andamento.

---

## 2. Tendências de demanda da comunidade

| Tendência | Issue de referência | Suporte |
|-----------|---------------------|---------|
| **Compartilhamento organizacional de Skills** | [#228](https://github.com/anthropics/skills/issues/228) | 9 comentários, 5 👍 |
| **Melhoria do skill-creator para uso corporativo** | [#202](https://github.com/anthropics/skills/issues/202) | 8 comentários |
| **Automação e integração** (macOS, SAP, BSV) | [#806](https://github.com/anthropics/skills/pull/806), [#181](https://github.com/anthropics/skills/pull/181) | Múltiplos PRs |
| **Qualidade e governança de Skills** | [#492](https://github.com/anthropics/skills/issues/492), [#412](https://github.com/anthropics/skills/issues/412) | 4+ comentários cada |
| **Persistência de contexto entre sessões** | [#521](https://github.com/anthropics/skills/pull/521) | Necessidade recorrente |

**Resumo das necessidades:** A comunidade busca **interopérabilidade empresarial** (compartilhamento, SSO, Bedrock), **automação de plataforma** (macOS, SAP), e **qualidade/testes** para Skills em produção.

---

## 3. Skills promissoras ainda pendentes

| PR | Atividade recente | Motivo da atenção |
|----|-------------------|-------------------|
| [#541](https://github.com/anthropics/skills/pull/541) | Atualizado em 2026-04-16 | Fix crítico: prevenção de corrupção em DOCX com tracked changes |
| [#539](https://github.com/anthropics/skills/pull/539) | Atualizado em 2026-04-16 | Validação YAML essencial para robustês do skill-creator |
| [#514](https://github.com/anthropics/skills/pull/514) | Atualizado em 2026-03-13 | Soluciona problema que afeta "todo documento que Claude gera" |
| [#806](https://github.com/anthropics/skills/pull/806) | Atualizado em 2026-04-02 | Automação macOS nativa com AppleScript |
| [#509](https://github.com/anthropics/skills/pull/509) | Atualizado em 2026-03-19 | CONTRIBUTING.md para saúde da comunidade (Gap #452) |
| [#556](https://github.com/anthropics/skills/issues/556) | Atualizado em 2026-04-17 | **Bug crítico:** run_eval.py com 0% de trigger rate |

> ⚠️ **Atenção especial para Issue #556:** Bug no evaluation script impede que Skills sejam corretamente testadas — 6 👍 demonstra impacto significativo.

---

## 4. Insight sobre o ecossistema de Skills

> **A comunidade está consolidando um ecossistema de produtividade e qualidade:** Skills de documento (tipografia, ODT, DOCX), automação de plataforma (macOS, SAP), testes e qualidade lideram o desenvolvimento, enquanto Issues revelam que o próximo estágio crítico é **escalabilidade organizacional** — compartilhamento, SSO enterprise e governança de segurança.

---

# Relatório Diário da Comunidade Claude Code — 2026-04-18

---

## 1. Destaques do Dia

A Anthropic liberou duas versões consecutivas (v2.1.113 e v2.1.114) com melhorias significativas na arquitetura do CLI e correções críticas. A comunidade demonstra forte engajamento em issues sobre agent teams, caching de sessões e problemas com modelos Opus 4.7. O ecossistema de plugins continua crescendo com 5 PRs ativos, incluindo novas funcionalidades para governance e preservação de sessões.

---

## 2. Lançamentos

### v2.1.114 — Correção de crash em permission dialog
**Link:** [Release v2.1.114](https://github.com/anthropics/claude-code/releases/tag/v2.1.114)

Corrige um crash que ocorria quando um teammate de agent teams solicitava permissão de ferramenta através do dialog de permissão. Esta é uma correção pontual para uma regressão introduzida nas versões anteriores.

---

### v2.1.113 — Binário nativo e controle de rede
**Link:** [Release v2.1.113](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)

**Mudanças principais:**
- **Binário nativo:** O CLI agora utiliza um binário nativo do Claude Code específico por plataforma (via dependência opcional) em vez do JavaScript bundle anterior, promete melhor performance e menor consumo de memória.
- **`sandbox.network.deniedDomains`:** Nova configuração que permite bloquear domínios específicos mesmo quando `allowedDomains` com wildcards seria mais permissivo — útil para segurança em ambientes corporativos.

---

## 3. Issues em Evidência

### 🔴 #38335 — Claude Max plan session limits esgotados rapidamente
**Link:** [Issue #38335](https://github.com/anthropics/claude-code/issues/38335) | **Status:** OPEN | **👍 425**

Desde 23 de março, usuários do plano Max relatam consumo acelerado de limits de sessão. Com 644 comentários, é a issue mais ativa da semana. A comunidade suspeita de um problema no tracking de contexto ou vazamento de tokens em sessões novas.

---

### 🔴 #42796 — Claude Code inutilizável para tarefas complexas após updates de fevereiro
**Link:** [Issue #42796](https://github.com/anthropics/claude-code/issues/42796) | **Status:** CLOSED | **👍 1950** (maior 👍 do período)

Issue_massiva com quase 2000 upvotes reportando regressões significativas em engenharia complexa após as atualizações de fevereiro. **Recentemente fechada** — possivelmente após a v2.1.113/114 que endereçou alguns dos problemas relatados. Users reportavam degraded reasoning em tarefas multi-step.

---

### 🟡 #49268 — Thinking summaries ausentes no Opus 4.7
**Link:** [Issue #49268](https://github.com/anthropics/claude-code/issues/49268) | **Status:** OPEN | **👍 21**

Após upgrade para Opus 4.7 no v2.1.111, as thinking summaries pararam de aparecer. O autor identificou que o harness não seta `display: "summarized"` na API, causando perda de visibilidade do reasoning estendido. Afeta principalmente workflows de debugging onde o trace de pensamento é essencial.

---

### 🟡 #47098 — Novas sessões nunca atingem cache completo
**Link:** [Issue #47098](https://github.com/anthropics/claude-code/issues/47098) | **Status:** OPEN | **👍 0**

Bug crítico no Linux: relaunching ou clearing sessão custa 6505 cache-create tokens mesmo após mensagens curtas ("apenas segundos" de diferença). Parece afetar especificamente novos contextos, não discussões longas. Impacto direto em custos para usuários com orçamento limitado.

---

### 🟡 #30660 — Streaming de extended thinking em tempo real
**Link:** [Issue #30660](https://github.com/anthropics/claude-code/issues/30660) | **Status:** OPEN | **👍 25**

Feature request popular: atualmente o CLI mostra spinner durante reasoning estendido sem feedback. A comunidade pede streaming progressivo do thinking output em modo interativo. Com 12 comentários, há debate sobre viabilidade técnica e impacto em UX.

---

### 🟡 #23622 — Seleção de branch base ao criar git worktree
**Link:** [Issue #23622](https://github.com/anthropics/claude-code/issues/23622) | **Status:** OPEN | **👍 61**

Feature request para permitir escolha de branch base ao criar worktrees via Claude Code, similar ao Codex. Com 61 upvotes, é uma das features mais solicitadas para workflows git avançados. Usuários com múltiplas branches de release precisam criar worktrees manualmente.

---

### 🟡 #31394 — /rename não persiste na lista /resume
**Link:** [Issue #31394](https://github.com/anthropics/claude-code/issues/31394) | **Status:** OPEN | **👍 6**

Bug de UX: ao renomear sessão com `/rename`, a mudança não aparece na lista de `/resume`, forçando usuários a lembrar o workspace path ao invés de usar nomes descritivos. Reprodução simples: rename → close → /resume mostra nome antigo.

---

### 🟡 #49990 — Hook entry `{type, command}` quebra silenciosamente toda config
**Link:** [Issue #49990](https://github.com/anthropics/claude-code/issues/49990) | **Status:** OPEN | **👍 0**

Bug perigoso: formato flat de hook (`{type, command}`) ao invés do wrapper correto (`{matcher, hooks: [...]}`) faz toda a config de hooks falhar silenciosamente. Sem warning ou erro, desenvolvedores perdem horas debugando por quê hooks param de funcionar. Pedido de validação de schema.

---

### 🟡 #49056 — Desktop App: mensagens em azul escuro sobre preto
**Link:** [Issue #49056](https://github.com/anthropics/claude-code/issues/49056) | **Status:** OPEN | **👍 0**

Problema de acessibilidade: desde update recente, mensagens do usuário no Desktop App Mac usam azul escuro (#0044cc?) sobre fundo preto, violando guidelines WCAG. Texto praticamente ilegível. Afeta experiência daily de múltiplos usuários.

---

### 🟡 #50189 — Per-session MCP server profiles
**Link:** [Issue #50189](https://github.com/anthropics/claude-code/issues/50189) | **Status:** OPEN | **👍 0**

Enhancement архитектурный: com 10+ MCP servers registrados, cada mensagem carrega ~2,500+ tokens overhead só para listar ferramentas não usadas. Proposal: perfis por sessão ou scoping dinâmico de ferramentas, reduz dramaticamente contexto e custo.

---

## 4. Progresso de PRs Importantes

### #20448 — Web4 Governance Plugin
**Link:** [PR #20448](https://github.com/anthropics/claude-code/pull/20448) | **Status:** OPEN

Plugin lightweight para AI governance com R6 workflow audit trails e T3 trust tensors. Focado em cryptographic provenance e accountability verificável. Interessante para uso enterprise onde compliance e audit trail são mandatórios.

---

### #39148 — Preserve-session plugin
**Link:** [PR #39148](https://github.com/anthropics/claude-code/pull/39148) | **Status:** OPEN

Plugin que preserva histórico de sessões Claude Code quando diretórios de projeto são renomeados, movidos ou copiados. Atribui UUID path-independent por projeto. Soluciona frustração comum de perder contexto ao reorganizar workspace.

---

### #49825 — Devcontainer firewall init script fix
**Link:** [PR #49825](https://github.com/anthropics/claude-code/pull/49825) | **Status:** OPEN

Fix para init script que falhava ao adicionar IPs para domínio por causa de duplicatas. Solução: usar `sort unique` antes de adicionar. Corretivo prático para workflows devcontainer.

---

### #49767 — Warp marketplace plugin docs
**Link:** [PR #49767](https://github.com/anthropics/claude-code/pull/49767) | **Status:** OPEN

Adiciona documentação de setup para plugin Warp marketplace, incluindo requisito de jq para notification hooks e steps de verificação end-to-end para live session notifications. Melhoria de DX para usuários do terminal Warp.

---

### #1 — SECURITY.md
**Link:** [PR #1](https://github.com/anthropics/claude-code/pull/1) | **Status:** CLOSED

Política de segurança oficial do repositório. Importante para pesquisadores de segurança reportarem vulnerabilidades via canal apropriado.

---

## 5. Tendências de Pedidos de Features

Analisando as issues abertas e fechadas, emergem 5 direções principais:

| Categoria | Issues Relacionadas | Tendência |
|-----------|---------------------|-----------|
| **Agent Teams** | #49303, #49663, #49734, #49951 | Crash handling, tmux + iTerm2 compatibility, cross-agent permissions |
| **Git Workflows** | #23622, #34225, #49989 | Worktree enhancement (branch selection), git hooks em worktrees |
| **MCP Server** | #49180, #50189 | Setup reliability, token overhead optimization |
| **Context/Caching** | #38335, #47098, #45390 | Session limits, cache hit rates, Max plan billing |
| **Platform UX** | #31394, #49056, #50233 | Desktop app readability, hotkeys, session naming |

**Conclusão:** O foco da comunidade está em **estabilidade de agent teams** (múltiplas issues de crash), **otimização de custos** (cache, context) e **workflows git avançados**.

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Crítico — Instabilidade em Agent Teams + tmux
Múltiplas issues (#49303, #49951, #49734) reportam crashes quando usando agent teams em conjunto com tmux/iTerm2. Se você utiliza `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, considere:

1. **Evitar** spawnar teammates em panes tmux separados no momento
2. **Usar v2.1.114** (contém fix de um dos crashes)
3. **Monitorar** crashes em permission_request flows com paths fora de CWD

---

### ⚠️ Problemas Conhecidos Recorrentes

| Problema | Plataformas | Workaround |
|----------|------------|------------|
| Crash em permission dialog com teammates | macOS + tmux | Atualizar para v2.1.114 |
| Thinking summaries ausentes | Opus 4.7 | Aguardar patch; usar `/think` manual |
| Hooks falham silenciosamente | Todos | Validar schema: `{matcher, hooks: [{type, command}]}` |
| Session renamed não aparece em /resume | Todos | Manter session path como referência |
| Desktop app contraste texto | macOS Desktop | Aguardar fix ou usar CLI |

---

### 💡 Oportunidades de Contribuição

1. **Plugin preserve-session (#39148)** — precisa de reviewers
2. **Validação de schema de hooks (#49990)** — PR bem-vindo para adicionar warnings
3. **Streaming de extended thinking (#30660)** — discussão arquitetura abierta
4. **Per-session MCP profiles (#50189)** — requiere design de API

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex
## 📅 Data: 18 de abril de 2026

---

## 1. Destaques do Dia

A equipe do Codex continua firme na publicação de releases alpha da versão 0.122.0 em Rust, com 4 versões lançadas nas últimas 24 horas. No front de Issues, a comunidade demonstra grande engajamento com topics de rate limits, qualidade de vida para Windows/WSL e problemas de sandbox. No lado de PRs, observa-se um esforço coordenado para implementar suporte a chaves de dispositivo em múltiplas plataformas, além de melhorias no sistema de hooks e ferramentas dinâmicas. O release de hoje foi marcado pela resolução de issues críticos como regressão de tokens e bugs de autenticação.

---

## 2. Lançamentos

### Releases Rust (0.122.0-alpha.6 até alpha.9)

| Versão | Data |
|--------|------|
| `rust-v0.122.0-alpha.9` | 2026-04-18 |
| `rust-v0.122.0-alpha.8` | 2026-04-18 |
| `rust-v0.122.0-alpha.7` | 2026-04-18 |
| `rust-v0.122.0-alpha.6` | 2026-04-18 |

**Observação:** Não há changelogs detalhados disponíveis para estas versões alpha. A cadência acelerada sugere trabalho intensivo em refatorações internas e preparação para a versão estável. A comunidade deve acompanhar via [releases do repo](https://github.com/openai/codex/releases).

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade (críticos ou com alto engajamento)

**1. [#14593](https://github.com/openai/codex/issues/14593) - Burning tokens very fast**
- **Status:** ABERTO
- **Autor:** cy-ooi88 | **👍** 225 | **💬** 550 comentários
- **Resumo:** Usuários reportam consumo excessivo de tokens mesmo em sessões simples. Este é o issue com maior engajamento da lista, indicando uma dor real e recorrente.
- **Por que importa:** Afeta diretamente o custo de uso do produto. A comunidade está ativamente بحثandoworkarounds e discutindo causas raiz.

**2. [#10450](https://github.com/openai/codex/issues/10450) - Remote Development in Codex Desktop App**
- **Status:** ABERTO
- **Autor:** pocca2048 | **👍** 565 | **💬** 142 comentários
- **Resumo:** Feature request para suportar desenvolvimento remoto no app desktop do Codex, comparando com as capacidades já existentes no VS Code.
- **Por que importa:** O maior número de upvotes entre todos os issues mostra uma demanda clara por portabilidade do ambiente de desenvolvimento. O desejo de usar Codex em servidores remotos é forte na comunidade.

---

### 🟡 Média Prioridade

**3. [#14936](https://github.com/openai/codex/issues/14936) - bwrap: Approval prompt shown for almost every command**
- **Status:** ABERTO
- **Autor:** nsrisakolkit | **👍** 20 | **💬** 48 comentários
- **Resumo:** Regressão no Linux onde o sandbox bwrap mostra prompts de aprovação para quase todo comando, degradando severamente a experiência.
- **Por que importa:** Afeta UX do CLI e causa fricção no fluxo de trabalho. Regressão indica que mudanças recentes podem ter impacto indesejado.

**4. [#18258](https://github.com/openai/codex/issues/18258) - Codex app on macOS shows 'Computer Use plugin unavailable'**
- **Status:** ABERTO
- **Autor:** hhushhas | **👍** 24 | **💬** 18 comentários
- **Resumo:** O plugin de Computer Use não carrega corretamente no macOS mesmo com arquivos bundleados presentes. Workaround fornecido na descrição.
- **Por que importa:** Afeta funcionalidade crítica para alguns usuários. A workaround mencionada pode servir a outros usuários enquanto aguardam fix oficial.

**5. [#16857](https://github.com/openai/codex/issues/16857) - High GPU usage while the app is "thinking"**
- **Status:** ABERTO
- **Autor:** homm | **👍** 15 | **💬** 14 comentários
- **Resumo:** Versão 26.325.31654 causa alto uso de GPU no macOS durante estados de "thinking", possivelmente relacionado a animações desnecessárias.
- **Por que importa:** Problema de performance específico para usuários com hardware limitado ou笔记本. Pode indicar oportunidades de otimização de UI.

**6. [#13762](https://github.com/openai/codex/issues/13762) - Windows desktop in WSL mode uses the Windows CODEX_HOME inside WSL**
- **Status:** ABERTO
- **Autor:** matheuspimentaa | **👍** 13 | **💬** 12 comentários
- **Resumo:** O app desktop em modo WSL mistura configurações do Windows host com paths Linux, causando problemas de storage e worktrees.
- **Por que importa:** Usuários que rodam Codex em WSL experimentam comportamento inesperado de paths, afetando organização de projetos.

---

### 🟢 Resolvidos Recentemente

**7. [#18345](https://github.com/openai/codex/issues/18345) - Token usage significantly increased in v0.121.0**
- **Status:** FECHADO
- **Autor:** fipciu1996 | **👍** 1 | **💬** 5 comentários
- **Resumo:** Regressão confirmada: v0.121.0 consome ~60%+ mais tokens que v0.116.0 para prompts idênticos.
- **Por que importa:** Este issue foi recentemente fechado, sugerindo que a equipe pode estar ciente da regressão. Usuários afetados devem verificar se o problema foi mitigado.

**8. [#18069](https://github.com/openai/codex/issues/18069) - apply_patch fails with use_legacy_landlock=true**
- **Status:** FECHADO
- **Autor:** msublee | **👍** 10 | **💬** 6 comentários
- **Resumo:** v0.121.0 introduziu regressão com `use_legacy_landlock=true` causando falhas em apply_patch.
- **Por que importa:** Workaround disponível (desabilitar landlock legacy) e issue fechado indicam possível resolução ou workaround conhecido.

---

### 📋 Novos Issues do Dia

**9. [#18333](https://github.com/openai/codex/issues/18333) - MCP stacks repeatedly started for new sessions**
- **Status:** ABERTO (criado em 2026-04-17)
- **Autor:** jianzhangg | **👍** 2 | **💬** 9 comentários
- **Resumo:** O app desktop está iniciando stacks MCP completos repetidamente para cada nova sessão/subagent, causando slowdown severo e pressão de memória.
- **Por que importa:** Problema de performance crítico em sessões com múltiplos agents. Afeta usuários de workflows complexos.

**10. [#18365](https://github.com/openai/codex/issues/18365) - apply_patch always requests approval in writable workspace (WSL)**
- **Status:** ABERTO (criado em 2026-04-17)
- **Autor:** eschulma | **👍** 0 | **💬** 3 comentários
- **Resumo:** No Codex Desktop em WSL, apply_patch pede aprovação mesmo em workspaces marcados como graváveis, enquanto comandos shell normais não pedem.
- **Por que importa:** Inconsistência no comportamento de sandbox entre diferentes operações, causando fricção desnecessária no fluxo de trabalho.

---

## 4. Progresso de PRs Importantes

### 🏗️ Infraestrutura e Arquitetura

**1. [#18407](https://github.com/openai/codex/pull/18407) - Split codex-core into smaller crates**
- **Autor:** starr-openai
- **Resumo:** Draft de refatoração para extrair `codex-agent-runtime` e outros componentes de `codex-core`. Visa reduzir tempos de compilação ao permitir edits menores sem recompilar código desnecessário.
- **Impacto:** Melhoria significativa de DX (developer experience) para contributors. Compilações mais rápidas = feedback loop mais curto.

**2. [#18429](https://github.com/openai/codex/pull/18429) - app-server: add codex-device-key crate**
- **Autor:** euroelessar
- **Resumo:** Cria crate centralizado para storage e signing de device keys, mantendo detalhes de key management fora do app-server.
- **Impacto:** Foundation para funcionalidades de device binding em todas as plataformas.

**3. [#18428](https://github.com/openai/codex/pull/18428) - app-server: define device key v2 protocol**
- **Autor:** euroelessar
- **Resumo:** Define protocolo estável para enrollment de device key, retrieval de public key, e produção de device-bound proofs.
- **Impacto:** Interface consistente para clientes interagirem com device keys.

### 🌍 Suporte Multi-Plataforma para Device Keys

**4. [#18438](https://github.com/openai/codex/pull/18438) - app-server: add Linux device key provider**
- **Autor:** euroelessar
- **Resumo:** Implementa provider Linux que usa TPM2 para hardware-backed device keys.
- **Impacto:** Segurança reforçada para usuários Linux.

**5. [#18436](https://github.com/openai/codex/pull/18436) - app-server: add Windows device key provider**
- **Autor:** euroelessar
- **Resumo:** Implementa provider Windows usando CNG via Microsoft Platform Crypto Provider.
- **Impacto:** Chave não-exportável com proteção TPM no Windows.

**6. [#18431](https://github.com/openai/codex/pull/18431) - app-server: add macOS device key provider**
- **Autor:** euroelessar
- **Resumo:** Implementa provider macOS com suporte a Secure Enclave keys quando disponível.
- **Impacto:** Proteção máxima para keys no ecossistema Apple.

**7. [#18430](https://github.com/openai/codex/pull/18430) - app-server: implement device key v2 methods**
- **Autor:** euroelessar
- **Resumo:** Implementa métodos v2 para device key no app-server, mantendo operações locais atrás da mesma boundary de processamento.
- **Impacto:** Endpoint final para as funcionalidades de device binding.

### ⚙️ Melhorias no Core

**8. [#18413](https://github.com/openai/codex/pull/18413) - Add namespaces to dynamic tools**
- **Autor:** pash-openai
- **Resumo:** Permite que ferramentas dinâmicas carreguem um namespace explícito, melhorando search e dispatch de ferramentas deferred.
- **Impacto:** Melhora performance e confiabilidade de tools dinâmicas/MCP.

**9. [#15937](https://github.com/openai/codex/pull/15937) - feat(hooks): add managed hooks**
- **Autor:** viyatb-oai
- **Resumo:** Adiciona controle de policy gerenciada para lifecycle hooks com warning de startup quando hooks são carregados.
- **Impacto:** Melhor controle e governança sobre hooks em ambientes corporativos.

**10. [#18393](https://github.com/openai/codex/pull/18393) - feat(auto-review) Handle request_permissions request**
- **Autor:** dylan-hurd-oai
- **Resumo:** Permite que auto-review processe requests de permissões. Limpeza de UX planejada para pass separado.
- **Impacto:** Melhora UX para fluxos de aprovação, automatizando decisões de permissionamento.

---

## 5. Tendências de Pedidos de Features

### 📊 Análisis de Issues Abertos

| Categoria | Tendência | Observação |
|-----------|-----------|------------|
| **Remote Development** | ⬆️ Alta demanda | Issue com 565 👍 solicita capacidade de desenvolvimento remoto comparável ao VS Code Remote |
| **Context Management** | ⬆️ Alta demanda | Comandos `/compact` manuais, prefix compaction, e progress indicators solicitados |
| **Sandbox Control** | ⬆️ Alta demanda | Melhorias em approval prompts, notification de requests, e controle granular |
| **Windows/WSL Integration** | ⬆️ Frequente | Múltiplos issues sobre comportamento de paths, ACLs, e interação com filesystem |
| **MCP (Model Context Protocol)** | ⬆️ Emergente | Issues sobre performance, interceptação, e gestão de stacks MCP |
| **Performance** | ⬆️ Constante | Requests para reduzir GPU usage, memory pressure, e token consumption |
| **Device Security** | 🆕 Nova | PRs em desenvolvimento indicam foco em device-bound authentication |

### 🔮 Direções Potenciais

1. **Desenvolvimento Remoto:** A comunidade demonstra desejo claro de usar Codex em ambientes remote/SSH/serverless.
2. **Gestão de Contexto:** Ferramentas para compaction manual, visualização de contexto restante, e prefix management.
3. **Sandbox experienci:** Menos fricção em approval flows, notifications apropriadas, e ACLs corretas.
4. **Integração Windows/WSL:** Comportamento consistente entre Windows host e WSL guest.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

1. **Rate Limits e Token Consumption**
   - Múltiplos reports de consumo excessivo de tokens (issue #14593 com

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 📊 Relatório Diário da Comunidade Gemini CLI — 18/04/2026

---

## 1. Destaques do Dia

O ecossistema Gemini CLI apresentou intensa atividade na semana do Easter: uma nova versão patch **v0.38.2** foi publicada para corrigir um problema crítico, enquanto vários PRs significativos avançaram em direção ao merge. O destaque negativo permanece na questão de permissões 403 para assinantes Google One AI Premium, que continua sem resolução definitiva com 114 comentários e crescente frustração da comunidade. Paralelamente, a adição de suporte aos novos modelos **Gemma 4** marca uma expansão importante nas opções de modelos locais disponíveis aos usuários.

---

## 2. Lançamentos

### 🔧 v0.38.2 — Patch de emergência
| Item | Detalhe |
|------|---------|
| **Tipo** | Release de correção (patch) |
| **Data** | 18/04/2026 |
| **PR** | [#25585](https://github.com/google-gemini/gemini-cli/pull/25585) |
| **Autor** | @gemini-cli-robot |

**Mudanças:**
- Cherry-pick do commit `14b2f35` para a branch `release/v0.38.1-pr-24974`
- Correção de bug crítico identificado na versão anterior
- Incremental a partir da v0.38.1

> 🔗 [Changelog completo](https://github.com/google-gemini/gemini-cli/compare/v0.38.1...v0.38.2)

---

## 3. Issues em Evidência

### 🔴 Issue #24517 — PERMISSION_DENIED para assinantes Google One AI Premium
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 114 |
| **Likes** | 46 |
| **Prioridade** | P1 |
| **Área** | Platform |

**Descrição:** Assinantes do Google One AI Premium pagam pela capacidade Gemini Code Assist, mas recebem erro 403 em todas as requisições. O CLI identifica corretamente a assinatura como "Gemini Code Assist in Google One AI Pro", porém bloqueia todas as chamadas API antes mesmo de consumir tokens.

**Por que importa:** Este é um problema de monetização direto — clientes pagando por um serviço que não funciona. A alta volume de comentários (114) indica impacto significativo na base de usuários.

> 🔗 [Ver Issue #24517](https://github.com/google-gemini/gemini-cli/issues/24517)

---

### 🔴 Issue #24880 — Erro 403 após autenticação Google (relacionado)
| Métrica | Valor |
|---------|-------|
| **Status** | FECHADO |
| **Comentários** | 31 |
| **Área** | Security |

**Descrição:** Usuários chineses reportam erro 403 genérico após completar autenticação OAuth com conta Google.

**Conexão:** Este problema foi fechado, possivelmente como duplicado ou relacionado à issue #24517.

> 🔗 [Ver Issue #24880](https://github.com/google-gemini/gemini-cli/issues/24880)

---

### 🟠 Issue #25166 — Shell trava após conclusão de comando
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 2 |
| **Likes** | 2 |
| **Área** | Core |

**Descrição:** Após executar comandos CLI simples, o Gemini CLI permanece travado mostrando "Awaiting user input" mesmo quando o comando shell já terminou. Afeta comandos extremamente simples que não aguardam input.

**Por que importa:** Experiência de usuário degradada em operações básicas. Affecta fluxos de trabalho diários.

> 🔗 [Ver Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

---

### 🟠 Issue #22323 — Subagente reporta GOAL success após MAX_TURNS
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 2 |
| **Likes** | 2 |
| **Prioridade** | P1 |
| **Área** | Agent |
| **Visibilidade** | Maintainer only |

**Descrição:** O subagente `codebase_investigator` reporta `status: "success"` com `Termination Reason: "GOAL"` mesmo quando atingiu o limite máximo de turns antes de realizar qualquer análise.

**Por que importa:** Oculta interrupções não intencionais — usuário pensa que concluíu análise mas não recebeu resultados. Problema crítico para workflows de investigação de código.

> 🔗 [Ver Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

---

### 🟡 Issue #22745 — Avaliar impacto de leituras/mapeamento AST-aware
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 5 |
| **Likes** | 1 |
| **Área** | Agent |
| **Visibilidade** | Maintainer only |

**Descrição:** EPIC para investigar se há valor em usar ferramentas AST-aware para leitura de arquivos, busca e mapeamento de codebase. Benefícios potenciais incluem leituras mais precisas de bounds de métodos e navegação mais inteligente.

**Por que importa:** Representa uma evolução significativa na capacidade do `codebase_investigator` — poderia reduzir ruído em tokens e melhorar precisão de análise.

> 🔗 [Ver Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

---

### 🟡 Issue #24916 — Gemini CLI solicita permissões repetidamente no mesmo arquivo
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 3 |
| **Área** | Security |

**Descrição:** O sistema de permissões não persiste corretamente instruções de "allow" ou "allow for all future sessions" para arquivos já autorizados.

**Por que importa:** Frustração com UX repetitivo. Usuários precisam confirmar repetidamente para operações já autorizadas.

> 🔗 [Ver Issue #24916](https://github.com/google-gemini/gemini-cli/issues/24916)

---

### 🟡 Issue #25218 — Tabelas renderizam incrementalmente durante streaming
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 0 |
| **Área** | Core |

**Descrição:** Durante streaming, tabelas são re-renderizadas a cada chunk ao invés de aguardar output completo, causando layout quebrado/partial em leitores de tela.

**Por que importa:** Problema de acessibilidade que afeta usuários com necessidades de acessibilidade. Também impacta qualidade visual do output.

> 🔗 [Ver Issue #25218](https://github.com/google-gemini/gemini-cli/issues/25218)

---

### 🟡 Issue #22819 — Implementar roteamento de memória: global vs. projeto
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 1 |
| **Likes** | 2 |
| **Área** | Agent |
| **Visibilidade** | Maintainer only |

**Descrição:** Definir onde o subagente de memória salva informações: escopo global (`~/.gemini/`) vs. escopo de projeto (`.gemini/`).

**Por que importa:** Separação clara de responsabilidades entre configurações pessoais e específicas de projeto. Melhora organização e reusabilidade.

> 🔗 [Ver Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)

---

### 🟡 Issue #22267 — Browser Agent ignora settings.json overrides
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 2 |
| **Prioridade** | P2 |
| **Área** | Agent |
| **Visibilidade** | Maintainer only |

**Descrição:** O Browser Agent ignora completamente configurações de override fornecidas no `settings.json` global ou de projeto (ex: `maxTurns`).

**Por que importa:** Usuários não conseguem customizar comportamento do Browser Agent via configurações — força revisão manual constante.

> 🔗 [Ver Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

---

### 🟢 Issue #25216 — EISDIR ao abrir caminho temporário A:\
| Métrica | Valor |
|---------|-------|
| **Status** | ABERTO |
| **Comentários** | 1 |
| **Área** | Core |

**Descrição:** Erro `EISDIR: illegal operation on a directory` ao usar `gemini --yolo` em PowerShell quando caminho inclui `A:\`.

**Por que importa:** Problema específico de ambiente Windows com caminhos de drives não-convencionais.

> 🔗 [Ver Issue #25216](https://github.com/google-gemini/gemini-cli/issues/25216)

---

## 4. Progresso de PRs Importantes

### 🚀 PR #25604 — Suporte para Gemma 4 models
| Status | Área |
|--------|------|
| ABERTO | Core |

**Autor:** @Abhijit-2592

**Resumo:** Adiciona suporte aos modelos Gemma 4 (`gemma-4-31b-it` e `gemma-4-26b-a4b-it`) com capacidades avançadas de "Thinking".

**Impacto:** Expande opções de modelos locais disponíveis, dando à comunidade acesso a modelos mais recentes da família Gemma.

> 🔗 [Ver PR #25604](https://github.com/google-gemini/gemini-cli/pull/25604)

---

### 🚀 PR #25605 — Forward signals para processo filho relançado
| Status | Área |
|--------|------|
| ABERTO | Core |

**Autor:** @Sway-Chan

**Resumo:** Corrige problema onde `relaunchAppInChildProcess` não instala handlers para forwardar sinais SIGTERM/SIGHUP para o processo filho.

**Impacto:** Melhora estabilidade em integrações com ACP clients e systemd.

> 🔗 [Ver PR #25605](https://github.com/google-gemini/gemini-cli/pull/25605)

---

### 🚀 PR #25606 — Resolver conflito de versão minimatch
| Status | Área |
|--------|------|
| ABERTO | Dependencies |

**Autor:** @vegerot

**Resumo:** Atualiza `package-lock.json` para resolver conflito de versão do minimatch@3 vs @10 no pacote vsce, corrigindo crash no gemini-cli-vscode-ide-companion.

**Impacto:** Corrige build breakage em extensões VSCode.

> 🔗 [Ver PR #25606](https://github.com/google-gemini/gemini-cli/pull/25606)

---

### ✅ PR #25601 — Split memoryManager flag em autoMemory
| Status | Área |
|--------|------|
| FECHADO | Config |

**Autor:** @SandyTao520

**Resumo:** Separa `experimental.memoryManager` em duas features independentes: `MemoryManagerAgent` e background skill-extraction service.

**Impacto:** Permite habilitação granular de funcionalidades de memória sem forçar uso de ambos.

> 🔗 [Ver PR #25601](https://github.com/google-gemini/gemini-cli/pull/25601)

---

### ✅ PR #25066 — Silently handle EPERM em listagem de diretórios
| Status | Área |
|--------|------|
| FECHADO | Core |

**Autor:** @scidomino

**Resumo:** Corrige crash ao tentar listar estrutura de diretórios com permissões restritas (ex: `~/.Trash` no macOS).

**Impacto:** Estabilidade em workspaces com diretórios de sistema.

> 🔗 [Ver PR #25066](https://github.com/google-gemini/gemini-cli/pull/25066)

---

### 🚀 PR #25498 — Comando `gemini gemma` para setup de modelos locais
| Status | Prioridade |
|--------|------------|
| ABERTO | P1 |

**Autor:** @Samee24

**Resumo:** Adiciona comando `gemini gemma` para setup simplificado de modelos locais e `gemini gemma logs` para visualização de logs do LiteRT server.

**Impacto:** Melhora experiência de onboarding para usuários de modelos Gemma locais.

> 🔗 [Ver PR #25498](https://github.com/google-gemini/gemini-cli/pull/25498)

---

### 🚀 PR #25461 — Throttle de output de shell
| Status | Área |
|--------|------|
| ABERTO | Core |

**Autor:** @nbardy

**Resumo:** Corrige re-renders excessivos causando problemas de performance quando comandos shell emitem muitas linhas.

**Impacto:** Melhora performance em builds verbose e operações com много output.

> 🔗 [Ver PR #25461](https://github.com/google-gemini/gemini-cli/pull/25461)

---

### 🚀 PR #25243 — Suporte universal RTL/BiDi
| Status | Área |
|--------|------|
| ABERTO | Core |

**Autor:** @abdallahadelabdallah105-ship-it

**Resumo:** Implementa suporte completo a idiomas RTL (árabe, hebreu, persa) com renderização ANSI-safe.

**Impacto:** Acessibilidade para centenas de milhões de falantes de idiomas RTL.

> 🔗 [Ver PR #25243](https://github.com/google-gemini/gemini-cli/pull/25243)

---

### 🚀 PR #25362 — Configuração vertexLocation para região Vertex AI
| Status | Área |
|--------|------|
| ABERTO | Core |

**Autor:** @Famous077

**Resumo:** Adiciona setting `vertexLocation` para permitir override de região na API Vertex AI (necessário para preview models disponíveis apenas em `global`).

**Impacto:** Permite uso de modelos preview/experimentais bloqueados em `us-central1`.

> 🔗 [Ver PR #25362](https://github.com/google-gemini/gemini-cli/pull/25362)

---

### 🚀 PR #25594 — Narração de update de tópico habilitada por padrão
| Status | Prioridade |
|--------|------------|
| FECHADO | P1 |

**Autor:** @MadelineStromg

**Resumo:** Habilita narração de topic updates por padrão e promove feature para uso geral.

**Impacto:** Melhora feedback visual para usuários sobre mudanças de contexto durante sessões.

> 🔗 [Ver PR #25594](https://github.com/google-gemini/gemini-cli/pull/25594)

---

## 5. Tendências de Pedidos de Features

### 📊 Padrões extraídos das issues abertas:

| Categoria | Tendência | Evidência |
|-----------|-----------|-----------|
| **Modelos Locais** | Expansão de suporte a modelos open-source (Gemma) | PR #25604, #25498 |
| **Memory/Skills** | Melhoria na gestão de memória persistente e skills | Issues #22819, #22809 |
| **Acessibilidade** | Suporte a RTL escreen readers | PR #25243, Issue #25218 |
| **Performance** | Throttling de output e otimização de renderização | PR #25461, Issue #24470 |
| **Vertex AI** | Configurações avançadas de roteamento regional | PR #25362, #25513 |
| **Windows/SSh** | Estabilização em ambientes específicos | Issues #25216, #24202, #24546 |

**Principais direcionamentos da comunidade:**

1. **Modelos alternativos**: Forte demanda por Gemma 4 e modelos locais — comunidade quer mais controle sobre qual modelo usar
2. **Memória persistente**: Multiple issues pedindo separação clara entre memória global e de projeto
3. **Configurabilidade**: Usuários querem que settings.json funcione consistentemente (Browser Agent ignorando configs)
4. **Performance em shells**: Comandos verbose gerando sobrecarga de renderização
5. **Acessibilidade internacional**: Suporte a idiomas RTL e melhorias para screen readers

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

1. **Problema crítico: Auth/Permissões (Issues #24517, #24880)**
   - Assinantes Google One AI Premium não conseguem usar o serviço
   - Erro 403 aparece mesmo com autenticação válida
   - **Recomendação**: Priorizar investigação — impacto direto em receita de usuários pagantes

2. **Shell hangs (Issue #25166)**
   - Comandos simples travam o CLI aguardando input que não vem
   - **Workaround**: Reiniciar sessão — não há solução permanente documentada

3. **Permissões persistentes não funcionam (Issue #24916)**
   - Usuários precisam confirmar mesma permissão múltiplas vezes
   - **Recomendação**: Verificar fluxo de persistência de approvals

4. **Settings.json ignorado pelo Browser Agent (Issue #22267)**
   - Configurações de `maxTurns` e outros overrides não são aplicados
   - **Recomendação**: Revisar merge logic no AgentRegistry

5. **Subagente reporta sucesso após falha (Issue #22323)**
   - `codebase_investigator` omite informação de MAX_TURNS
   - **Recomendação**: Adicionar verificação de termination reason antes de reportar GOAL

### 🔧 Demandas Frequentes de Contribuição

| Tipo | Quantidade | Exemplos |
|------|------------|----------|
| **Help Wanted** | Múltiplos PRs | #25605 (signal forwarding), #25138 (nested plans), #21439 (checkpoint tags) |
| **Core improvements** | Alta | Shell throttling, RTL support, vertex location config |
| **Agent enhancements** | Alta | Memory routing, AST-aware reads, subagent recovery |
| **CI/Testing** | Significativa | CI revive

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Relatório Diário da Comunidade GitHub Copilot CLI
## 📅 Data: 2026-04-18

---

## 1. Destaques do Dia

O release **v1.0.32** trouxe melhorias significativas de usabilidade, incluindo a seleção automática de modelo (`auto`), prefixos curtos de session ID para comandos `--resume` e `/resume`, e alertas de uso semanal. A comunidade está particularmente ativa em discussões sobre consumo excessivo de requisições premium e problemas de rate limiting, com issues críticas permanecendo abertas.

---

## 2. Lançamentos

### 🚀 v1.0.32
**Data:** 2026-04-17

| Mudança | Descrição |
|---------|-----------|
| **Auto Model Selection** | Permite que o Copilot escolha automaticamente o melhor modelo disponível para cada sessão |
| **Short Session IDs** | Suporte a prefixos de ID de sessão com 7+ caracteres hex para `--resume` e `/resume` |
| **Feedback Fix** | `/feedback` agora salva o bundle no diretório TEMP quando o diretório de trabalho não é gravável |
| **Debug Info Flag** | Novo flag `--print-debug-info` para exibir versão, capacidades do terminal e variáveis de ambiente |
| **Usage Warnings** | Alertas visuais ao atingir 75% e 90% do limite semanal de uso |

[Ver release completo](https://github.com/github/copilot-cli/releases/tag/v1.0.32)

---

## 3. Issues em Evidência

### 🔥 #2591 — Consumo infinito de requisições premium
- **Status:** OPEN
- **Autor:** saa7wz | **Comentários:** 27 | **👍:** 12
- **Relevância:** Bug crítico onde uma única requisição consome 80-100 requisições premium. Cada tool invocation ou thinking step dispara uma nova requisição.
- **Reação da comunidade:** 12 desenvolvedores marcaram como útil, indicando impacto widespread.

🔗 [Ver Issue #2591](https://github.com/github/copilot-cli/issues/2591)

---

### 🔥 #1703 — Modelos organizacionais não listados no CLI
- **Status:** OPEN
- **Autor:** Smotrov | **Comentários:** 21 | **👍:** 33
- **Relevância:** O CLI mostra lista reduzida de modelos comparado ao VS Code Copilot na mesma conta. Ex: Gemini 3.1 Pro disponível no VS Code mas não no CLI.
- **Reação da comunidade:** 33 👍 — uma das issues mais votadas, afeta usuários enterprise.

🔗 [Ver Issue #1703](https://github.com/github/copilot-cli/issues/1703)

---

### 🔥 #2725 — Seletor de modelo GPT-5.4 oculta "Extra High"
- **Status:** OPEN
- **Autor:** daideguchi | **Comentários:** 20 | **👍:** 15
- **Relevância:** UI inconsistente — o picker mostra apenas Low/Medium/High, mas xhigh ainda funciona na prática. Usuários não sabem que têm acesso a effort levels mais altos.
- **Reação da comunidade:** 15 👍, discussão ativa sobre usabilidade.

🔗 [Ver Issue #2725](https://github.com/github/copilot-cli/issues/2725)

---

### 🔥 #2336 — Mensagem confusa de rate limit
- **Status:** OPEN
- **Autor:** laeubi | **Comentários:** 16 | **👍:** 4
- **Relevância:** Mensagens de erro não explicam claramente a causa do rate limiting, dificultando debugging.
- **Reação da comunidade:** Usuários reportam falhas após tarefas "moderadas", indicando possible throttle agressivo.

🔗 [Ver Issue #2336](https://github.com/github/copilot-cli/issues/2336)

---

### 🔥 #2583 — Comando de update não funciona
- **Status:** OPEN
- **Autor:** znamenap | **Comentários:** 7 | **👍:** 0
- **Relevância:** `copilot update` e `/update` pararam de funcionar desde a versão 1.0.17. Usuários Windows (winget) afetados.
- **Reação da comunidade:** Problema de atualização afeta distribuição via gerenciadores de pacotes.

🔗 [Ver Issue #2583](https://github.com/github/copilot-cli/issues/2583)

---

### 🔥 #1347 — Suporte XDG_CONFIG_HOME incorreto
- **Status:** OPEN
- **Autor:** ascarter | **Comentários:** 7 | **👍:** 12
- **Relevância:** CLI não respeita variáveis de ambiente XDG, afeta fluxo de trabalho de desenvolvedores Linux.
- **Reação da comunidade:** 12 👍, issue relacionada a #1750 (já fechada).

🔗 [Ver Issue #1347](https://github.com/github/copilot-cli/issues/1347)

---

### 🔥 #1838 — Hang em ambientes Nix/direnv
- **Status:** OPEN
- **Autor:** expelledboy | **Comentários:** 6 | **👍:** 9
- **Relevância:** Deadlock de subprocess I/O causa timeout permanente em directories com Nix flakes + direnv.
- **Reação da comunidade:** 9 👍, ambiente Nix cada vez mais popular na comunidade.

🔗 [Ver Issue #1838](https://github.com/github/copilot-cli/issues/1838)

---

### 🔥 #2374 — Autopilot entra em loop infinito
- **Status:** OPEN
- **Autor:** Jorge-Torselli | **Comentários:** 4 | **👍:** 0
- **Relevância:** Feature autopilot trava em loop após completar tarefa. Afeta workflow de automação.
- **Reação da comunidade:** Issue recente, ainda em investigação.

🔗 [Ver Issue #2374](https://github.com/github/copilot-cli/issues/2374)

---

### 🔥 #2797 — Porcentagem de uso incorreta após limite
- **Status:** OPEN
- **Autor:** AlaRaies | **Comentários:** 2 | **👍:** 0
- **Relevância:** Após exceder limite de 300 requisições premium, CLI mostra porcentagens negativas ou aleatórias.
- **Reação da comunidade:** Problema de UX na显示 de usage tracking.

🔗 [Ver Issue #2797](https://github.com/github/copilot-cli/issues/2797)

---

### 🔥 #2742 — Rate limit 429 persistente em Pro+ pago
- **Status:** OPEN
- **Autor:** marcusng8 | **Comentários:** 1 | **👍:** 0
- **Relevância:** Error crítico global 429 persiste por mais de 3 horas em conta Copilot Pro+ com token allocation ativa.
- **Reação da comunidade:** Issue de severidade crítica em produção.

🔗 [Ver Issue #2742](https://github.com/github/copilot-cli/issues/2742)

---

## 4. Progresso de PRs Importantes

### 📦 PR #2800 — Add initial devcontainer configuration
- **Status:** OPEN
- **Autor:** qwfcw79ryj-alt
- **Data:** 2026-04-17
- **Resumo:** Adiciona configuração inicial de devcontainer para desenvolvimento local do Copilot CLI.
- **Relevância:** Facilita onboarding de contribuidores com ambiente containerizado padronizado.

🔗 [Ver PR #2800](https://github.com/github/copilot-cli/pull/2800)

---

### ✅ PRs Recentemente Fechados (atividade nas últimas 24h)

| PR/Issue | Título | Status | Relevância |
|----------|--------|--------|------------|
| #575 | Bash execution environment hangs - all commands timeout | CLOSED | Fix crítico de timeout |
| #1750 | XDG_CONFIG_HOME uses .copilot (dot-prefixed) subdirectory | CLOSED | Conformidade XDG |
| #2159 | Copy and paste is broken (Windows Putty SSH to Linux Mint) | CLOSED | UX cross-platform |
| #2176 | MCP servers not available anymore since latest update | CLOSED | Funcionalidade MCP |
| #2416 | Sub-agents cannot see skills from their own plugin | CLOSED | Skills em plugins |
| #2769 | Weekly Rate Limit Not Resetting | CLOSED | Limite de uso |

---

## 5. Tendências de Pedidos de Features

### 📊 Padrões identificados nas issues abertas:

#### **1. Model Selection & Pricing Transparency**
- Issues: #1703, #2725, #2797, #2336, #2742
- **Demanda:** Usuários querem controle granular sobre modelos e transparência clara sobre consumo de quota e rate limits.

#### **2. Configuração e Portabilidade**
- Issues: #1347, #1750, #1954
- **Demanda:** Suporte completo a padrões XDG_CONFIG_HOME e maior flexibilidade de diretórios de configuração.

#### **3. Integração MCP Avançada**
- Issues: #2176, #2692, #1255, #1040
- **Demanda:** Melhor integração com MCP servers, especialmente em cenários de sessão e configuração por protocolo ACP.

#### **4. Estabilidade em Ambientes Específicos**
- Issues: #1838, #575, #2580
- **Demanda:** Suporte robusto a Nix/direnv, terminais especiais (Neovim), e ambientes SSH.

#### **5. Agentes e Autopilot**
- Issues: #2374, #1529, #935
- **Demanda:** Modos de review, fluxo de trabalho com agentes customizados, e prevenção de loops infinitos.

#### **6. UX/UI Terminal**
- Issues: #1160, #2580, #2625
- **Demanda:** Melhorias em edição de texto, performance de rendering, e caracteres invisíveis.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas:

| Categoria | Impacto | Issues Relacionadas |
|-----------|---------|---------------------|
| **Rate Limiting** | Crítico | #2336, #2742, #2769, #2797 |
| **XDG Configuration** | Alto | #1347, #1750, #1954 |
| **Model Selection** | Alto | #1703, #2725 |
| **Premium Request Consumption** | Crítico | #2591 |
| **MCP Integration** | Médio | #2176, #2692, #1040 |
| **Environment Compatibility** | Médio | #1838, #2580 |
| **Autopilot Reliability** | Médio | #2374 |

### 🔧 Recomendações para Desenvolvedores:

1. **Monitoramento de Usage:** Utilize o novo flag `--print-debug-info` (v1.0.32) para diagnóstico de problemas de quota.

2. **Fallback para Auto Model:** Considere usar seleção `auto` para evitar problemas de effort level não disponíveis.

3. **Workarounds para XDG:** Se afetado, considere definir `COPILOT_HOME` temporariamente enquanto a issue #1347 não é resolvida.

4. **Ambientes Nix:** Esteja ciente do deadlock potencial (#1838) ao usar Copilot CLI em projetos com direnv.

5. **Reporting de Bugs:** Ao reportar rate limits, inclua output de `--print-debug-info` para facilitar triagem.

---

## 📈 Resumo Estatístico

| Métrica | Valor |
|---------|-------|
| Releases (24h) | 1 (v1.0.32) |
| Issues ativas | 50 |
| Issues atualizadas (24h) | 30+ |
| PRs abertos | 1 |
| Issues críticas | 2+ (rate limiting, premium consumption) |

---

*Relatório gerado automaticamente com base em dados do GitHub em 2026-04-18.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade — Kimi Code CLI
## 📅 Data: 2026-04-18

---

## 1. Destaques do Dia

O dia foi marcado pelo lançamento da **versão 1.36.0**, que eleva o limite de `max_steps_per_turn` de 100 para 500, permitindo sessões mais longas sem interrupções. A equipe também avançou no suporte a modelos Anthropic, especialmente o **Opus 4.7** com thinking adaptativo, além de corrigir problemas de renderização no web UI. A comunidade permanece ativa com diversas issues sobre comportamento do modelo K2.6 e pedidos de features para a extensão VSCode.

---

## 2. Lançamentos

### 🎉 Versão 1.36.0 Released

**Link:** [Release 1.36.0 — MoonshotAI/kimi-cli PR #1922](https://github.com/MoonshotAI/kimi-cli/pull/1922)

| Componente | Versão Anterior | Nova Versão |
|------------|-----------------|-------------|
| kimi-cli / kimi-code | 1.35.0 | **1.36.0** |
| kosong | 0.49.0 | **0.50.0** |

**Mudanças principais:**

- **[feat] Aumento de `max_steps_per_turn`**: O limite padrão passou de 100 para 500 passos por turno, reduzindo interrupções em sessões complexas ([PR #1908](https://github.com/MoonshotAI/kimi-cli/pull/1908))

- **[fix] Spinner fallback**: Correção para exibir o moon spinner durante todos os gaps ativos da sessão ([PR #1909](https://github.com/MoonshotAI/kimi-cli/pull/1909))

- **[feat] Suporte a Opus 4.7**: Implementação de thinking adaptativo e novos níveis de esforço (`xhigh`, `max`) para modelos Anthropic e OpenAI mais recentes ([PR #1918](https://github.com/MoonshotAI/kimi-cli/pull/1918))

- **[fix] Claude Opus 4.7**: Correção de `invalid_request_error` — o modelo agora utiliza thinking adaptativo corretamente

---

## 3. Issues em Evidência

### 🔴 Bugs Críticos

**1. API Bug: `invalid temperature: only 0.6 is allowed`**
- **Issue:** [#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924) | Criada: 2026-04-17 | Comentários: 3 | 👍: 0
- **Resumo:** Bug no nível da API que retorna erro para TODOS os valores de temperatura, inclusive 0.6.
- **Relevância:** Afeta todos os usuários que tentam ajustar a temperatura, independentemente da plataforma (SDK OpenAI, curl, Hermes Agent).
- **Reação:** Comunidade reportou em múltiplas plataformas, indicando problema sistêmico na API da Moonshot.

**2. Erro 400 ao usar Kimi Code CLI**
- **Issue:** [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Criada: 2026-04-15 | Comentários: 5 | 👍: 0
- **Resumo:** Erro genérico 400 ao tentar usar o `kimi-for-coding` via CLI.
- **Relevância:** Bloqueia uso do serviço para usuários legítimos. Sem detalhes adicionais no erro, dificulta diagnóstico.

**3. Ruminação (loop infinito de pensamento)**
- **Issue:** [#1926](https://github.com/MoonshotAI/kimi-cli/issues/1926) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** Após atualização, modelo fica preso gerando o mesmo conteúdo repetidamente.
- **Relevância:** Indica regressão introduzida na versão 1.26. Impacta produtividade do usuário.

**4. WSL2 não funciona no Windows 11**
- **Issue:** [#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** Login trava na página de assinatura mesmo com订阅 básica ativa, dentro do WSL (Ubuntu-24.04).
- **Relevância:** Afeta base significativa de desenvolvedores Windows que usam WSL2 como ambiente principal.

**5. Instalação falha em regiões com GitHub bloqueado**
- **Issue:** [#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** Instalador usa `uv` que faz download do GitHub Releases, bloqueando instalação em regiões com restrição.
- **Relevância:** Barreira de entrada para novos usuários em mercados estratégicos.

**6. MCP server não retorna dados além de `content.text`**
- **Issue:** [#1919](https://github.com/MoonshotAI/kimi-cli/issues/1919) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** JSON retornado pelo MCP server não consegue acessar campos além de `content.text`.
- **Relevância:** Limita integrações avançadas com ferramentas externas via MCP.

### 🟡 Melhorias Solicitadas

**7. Voltar para Kimi K2.5**
- **Issue:** [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** Usuário pede opção para usar K2.5 com prompt de sistema anterior. K2.6 considerado "inutilizável" por excesso de thinking e alucinações.
- **Reação:** Issue com tom emocional, indicando frustração significativa.

**8. System prompt customizado por projeto**
- **Issue:** [#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856) | Criada: 2026-04-13 | Comentários: 1 | 👍: 1
- **Resumo:** Permitir `system_prompt.md` no nível do projeto para override do prompt padrão.
- **Relevância:** Feature aguardada para personalização de comportamento por contexto.

**9. Kimi K2.6 causa loops infinitos no Claude Code**
- **Issue:** [#1888](https://github.com/MoonshotAI/kimi-cli/issues/1888) | Criada: 2026-04-15 | Comentários: 2 | 👍: 0
- **Resumo:** Modelo entra em loop de chamadas Excessivas quando integrado ao Claude Code.
- **Reação:** Relacionado ao problema de thinking excessivo do K2.6.

**10. Interatividade ruim: reasoning interno não visível**
- **Issue:** [#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923) | Criada: 2026-04-17 | Comentários: 0 | 👍: 0
- **Resumo:** Modelo faz reasoning extenso internamente mas exibe apenas resposta mínima. Sugere streaming incremental.
- **Relevância:** UX request para melhor debugging e acompanhamento de raciocínio.

---

## 4. Progresso de PRs Importantes

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| [#1922](https://github.com/MoonshotAI/kimi-cli/pull/1922) | `chore(release): bump kimi-cli to 1.36.0` | ✅ CLOSED | Release oficial com todas as mudanças |
| [#1918](https://github.com/MoonshotAI/kimi-cli/pull/1918) | `feat(kosong): Opus 4.7 adaptive thinking` | ✅ CLOSED | Suporte a modelo mais recente da Anthropic |
| [#1921](https://github.com/MoonshotAI/kimi-cli/pull/1921) | `fix(web): markdown spacing` | ✅ CLOSED | Correção de UI no web client |
| [#1920](https://github.com/MoonshotAI/kimi-cli/pull/1920) | `fix(web): copy/download/preview buttons` | ✅ CLOSED | Restaura funcionalidades em code blocks |
| [#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917) | `revert: undo thinking effort refactor` | ✅ CLOSED | Rollback de commits acidentais no main |
| [#1912](https://github.com/MoonshotAI/kimi-cli/pull/1912) | `fix(build): PyInstaller onedir mode` | ✅ CLOSED | Corrige build para ambientes congelados |
| [#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911) | `fix(kosong): adaptive thinking Opus 4.7+` | ✅ CLOSED | Estende suporte a Opus 4.7 e versões futuras |
| [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) | `feat(telemetry): integrate tracking` | 🔄 OPEN | Sistema de telemetria para analytics |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | `feat(soul): register /btw slash command` | 🔄 OPEN | Comando universal `/btw` para todos os modos |
| [#1870](https://github.com/MoonshotAI/kimi-cli/pull/1870) | `docs(config): TOML keys clarification` | ✅ CLOSED | Melhora documentação de configuração |

### PRs em Destaque:

**1. Telemetry Integration** ([#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798))
- **Objetivo:** Integrar tracking de telemetria em modos interativo e outros.
- **Impacto:** Permitirá à equipe entender padrões de uso e otimizar a ferramenta.

**2. Comando `/btw` universal** ([#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876))
- **Objetivo:** Registrar comando slash disponível em todos os modos de execução.
- **Impacto:** Padroniza experiência entre shell, print, web e ACP.

---

## 5. Tendências de Pedidos de Features

### 📊 Análise de Padrões

| Categoria | Issues | Tendência |
|-----------|--------|-----------|
| **UX/UI VSCode** | #1680, #1672 | Alta demanda por controles de interface independentes |
| **Controle de Modelo** | #1925, #1874, #1888 | Usuários desejam alternar entre K2.5/K2.6 e ajustar comportamento de thinking |
| **Personalização** | #1856 | Forte interesse em system prompts customizados por projeto |
| **Transparência** | #1923 | Comunidade quer visibilidade do reasoning interno |
| **Integração Avançada** | #1919, #884 | Interesse em MCP e ferramentas de desenvolvimento (linting) |

### 🔮 Direções Mais Solicitadas:

1. **Controle de Thinking Length** — Múltiplas issues mencionam excesso de raciocínio interno no K2.6, com usuários pedindo controles para limitar ou resumir o thinking.

2. **Personalização de Sistema** — Capacidade de definir prompts e comportamentos por projeto/equipe.

3. **Melhoria no VSCode** — Ajustes de fonte independentes, modo plan integrado ao chat (estilo Codex).

4. **Streaming de Reasoning** — Exibir etapas de raciocínio em tempo real para melhor acompanhamento.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Problema | Frequência | Impacto |
|----------|------------|---------|
| **Comportamento excessivo de thinking (K2.6)** | 4+ issues | Alto — usuários considerando downgrade para K2.5 |
| **Erros 400 genéricos** | 2+ issues | Médio — dificulta debugging |
| **Instalação em redes restritas** | 1 issue | Alto — barreiras de entrada |
| **WSL2 no Windows** | 1 issue | Médio — base significativa afetada |
| **MCP integration incompleta** | 1 issue | Médio — limita ecossistema de ferramentas |

### 🎯 Recomendações

1. **Priorizar controle de thinking**: A comunidade demonstra clara frustração com o K2.6. Considerar:
   - Parametrização de `max_thinking_tokens`
   - Opção de alternar para K2.5
   - Documentação clara sobre pensamento estendido

2. **Melhorar mensagens de erro**: Erros como "400" sem contexto dificultam suporte. Adicionar detalhes nos mensajes de API.

3. **Testar em WSL2**: Ambiente comum para desenvolvedores Windows. Garantir compatibilidade.

4. **Documentar configurações avançadas**: Issues sobre TOML keys e system prompts indicam demanda por documentação mais completa.

5. **Considerar mirrors de instalação**: Para regiões com GitHub bloqueado, oferecer alternativas de instalação.

---

*Relatório gerado em 2026-04-18 | Fonte: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 📊 Relatório Diário da Comunidade OpenCode

**Data:** 2026-04-18
**Repositório:** [anomalyco/opencode](https://github.com/anomalyco/opencode)
**Total de Issues:** 50 (30 listados com mais comentários)
**Total de PRs:** 50 (20 mais recentes)

---

## 1. Destaques do Dia

A versão **v1.4.11** foi lançada com correções críticas de roteamento de workspace e sincronização de sessões. A comunidade está ativamente discussing **sandbox para agentes** (#2242), evidenciando uma demanda crescente por segurança e isolamento. O contributor **kitlangton** continua liderando refatorações ambitiousas para migrar a base de código para Effect, com **7 PRs** merged nas últimas 24h focados em type safety e configurações.

---

## 2. Lançamentos

### v1.4.11
**Core:**
- ✅ Correção no roteamento de workspace para requests alcançarem a instância correta
- ✅ Interrupção de tentativas de sync de share para sessões que nunca foram compartilhadas

🔗 [Release v1.4.11](https://github.com/anomalyco/opencode/releases/tag/v1.4.11)

### v1.4.10
**Core:**
- ✅ Restauração do histórico de workspace ao conectar (sessões existentes fazem catch-up antes do sync live)
- ✅ Passagem de configurações do OTEL exporter para managed workspaces (telemetry funciona lá também)
- ✅ Normalização de defaults de metadata de provider (models carregam mesmo com catalog data incompleto)

🔗 [Release v1.4.10](https://github.com/anomalyco/opencode/releases/tag/v1.4.10)

### v1.4.9
**Core:**
- ✅ Adição do LLM Gateway como provider, incluindo suporte a config e relatório de uso de modelos
- ✅ Limitação de GitHub Copilot Opus 4.7 models para medium reasoning effort (evitar variantes não suportadas)
- ✅ Melhoria na reconexão de remote workspace com exponential backoff e falha mais clara

🔗 [Release v1.4.9](https://github.com/anomalyco/opencode/releases/tag/v1.4.9)

### v1.4.8
**Core:**
- ✅ Correção de crash quando modo experimental estava habilitado
- ✅ Permitir que plugin tools retornem metadata em execute results
- ✅ Mostrar nomes reais de arquivos ao invés de `/dev/null` em revert diffs
- ✅ Melhoria no handling de workspace session quando workspace não existe
- ✅ Correção de Windows `ctrl+z` terminal suspension

🔗 [Release v1.4.8](https://github.com/anomalyco/opencode/releases/tag/v1.4.8)

---

## 3. Issues em Evidência

### 🔥 #2242 - Is there a way to sandbox the agent? (27 comentários | 40 👍)
**Relevância:** Issue de segurança/core requestando isolamento do agente para impedir acesso a diretórios fora do workspace atual — similar ao `seatbelt` do macOS usado por gemini-cli e codex-cli.

🔗 [Ver Issue #2242](https://github.com/anomalyco/opencode/issues/2242)

---

### 🔥 #15533 - Auto-compaction infinite loop when assistant ended its turn (15 comentários | 2 👍)
**Relevância:** Bug crítico onde auto-compaction entra em loop infinito quando o assistente termina naturalmente sua vez (pergunta via question tool ou `finish === "stop"`). O `SessionCompaction.process()` injeta mensagem "Continue..." incondicionalmente.

🔗 [Ver Issue #15533](https://github.com/anomalyco/opencode/issues/15533)

---

### 🔥 #20926 - no longer respects system theme (macos ghostty) (7 comentários | 2 👍)
**Relevância:** Temas com variantes light/dark ignoram o tema do sistema e sempre usam light theme. Regressão que começou recentemente.

🔗 [Ver Issue #20926](https://github.com/anomalyco/opencode/issues/20926)

---

### 🔥 #23204 - Cmd+Return should make newline in textarea (7 comentários)
**Relevância:** Bug de usabilidade no web — Ctrl+Return/Cmd+Return está bloqueado no textarea do prompt quando deveria inserir newline.

🔗 [Ver Issue #23204](https://github.com/anomalyco/opencode/issues/23204)

---

### 🔥 #23200 - Fix: Cmd+V makes exit instead of paste (7 comentários)
**Relevância:** Bug crítico onde Cmd+V no textarea do prompt dispara saída do app ao invés de colar. Root cause identificada no handler de meta/ctrl.

🔗 [Ver Issue #23200](https://github.com/anomalyco/opencode/issues/23200)

---

### 🔥 #22862 - Glob tool fails with WebAssembly parsing error in WSL2 (7 comentários | 2 👍)
**Relevância:** O tool glob falha com erro de parsing WebAssembly para qualquer padrão no WSL2 — `wasm-simd is not enabled`. Afeta apenas Windows Subsystem for Linux.

🔗 [Ver Issue #22862](https://github.com/anomalyco/opencode/issues/22862)

---

### 🔥 #4821 - Add ability to unqueue messages (12 comentários | 34 👍)
**Relevância:** Feature request popular para permitir desfazer/retirar mensagens da fila. Comunidade sente necessidade de "unqueue" quando o agente já começou a trabalhar no fix sugerido.

🔗 [Ver Issue #4821](https://github.com/anomalyco/opencode/issues/4821)

---

### 🔥 #16100 - Numpad keys not working when running inside VS Code (14 comentários | 10 👍)
**Relevância:** Keys do numpad (0-9, Enter, decimal, operadores) completamente ignorados pelo TUI quando rodando no terminal integrado do VS Code 1.110.

🔗 [Ver Issue #16100](https://github.com/anomalyco/opencode/issues/16100)

---

### 🔥 #23139 - Gitlab Duo Opus 4.7 model mappings missing (3 comentários)
**Relevância:** Erro "Unknown model ID: duo-chat-opus-4-7" indica que mappings necessários não estão registrados. Afeta usuários do GitLab Duo.

🔗 [Ver Issue #23139](https://github.com/anomalyco/opencode/issues/23139)

---

### 🔥 #16157 - How are permissions applied in order? (4 comentários | 2 👍)
**Relevância:** Questão sobre ordering de permissions — documentação diz "last matching rule winning" mas a implementação pode ter bugs. PR #23214 propõe correção.

🔗 [Ver Issue #16157](https://github.com/anomalyco/opencode/issues/16157)

---

## 4. Progresso de PRs Importantes

### ✅ #23217 - fix(install): add --no-same-owner to tar to prevent UID/GID leak
**Autor:** kagura-agent | **Status:** OPEN | **Needs:** compliance
**Relevância:** Correção de security issue — quando install script roda como root, tar preserva UID/GID do tarball CI, criando vetor de privilege escalation. Adiciona `--no-same-owner` ao tar.

🔗 [Ver PR #23217](https://github.com/anomalyco/opencode/pull/23217)

---

### ✅ #23222 - feat(effect-zod): add ZodPreprocess annotation for pre-parse transforms
**Autor:** kitlangton | **Status:** OPEN
**Relevância:** Adiciona `ZodPreprocess` annotation que modela `z.preprocess(fn, schema)` pattern — permite Schema attachar transform que roda no raw input antes da validação.

🔗 [Ver PR #23222](https://github.com/anomalyco/opencode/pull/23222)

---

### ✅ #23214 - fix: do not merge permissions objects, merge rulesets
**Autor:** asuffield | **Status:** OPEN
**Relevância:** **Resolve Issue #16157** — merging permission objects descarta ordering. Agora preserva permissions objects como layers e converte para rulesets corretamente.

🔗 [Ver PR #23214](https://github.com/anomalyco/opencode/pull/23214)

---

### ✅ #23212 - feat(tui): add terminal notifications
**Autor:** kitlangton | **Status:** OPEN
**Relevância:** Adiciona notifications built-in do TUI para eventos de resposta pronta e atenção necessária via `notification_method`. Reusa helper OSC passthrough para clipboard e notifications.

🔗 [Ver PR #23212](https://github.com/anomalyco/opencode/pull/23212)

---

### ✅ #23220 - fix(project): use "/" as global project worktree when git has no commits
**Autor:** sim590 | **Status:** OPEN
**Relevância:** Corrige situação onde `fromDirectory()` encontra repositório Git sem commits (`git rev-list --max-parents=0 HEAD` falha). Relacionado a #21230.

🔗 [Ver PR #23220](https://github.com/anomalyco/opencode/pull/23220)

---

### ✅ #23210 - refactor(lsp): effectify client and server boundaries
**Autor:** kitlangton | **Status:** OPEN | **Beta**
**Relevância:** Refatora LSP client e orchestration para usar Effect-native create/open/wait/shutdown flows ao invés de Promise-shaped helpers. Switch de Map-based deduplicate para Effect-based caching.

🔗 [Ver PR #23210](https://github.com/anomalyco/opencode/pull/23210)

---

### ✅ #23213 - fix(observability): standardize session telemetry attrs
**Autor:** kitlangton | **Status:** CLOSED
**Relevância:** Normaliza anotações de log de `sessionID` para OTel-style `session.id`. Tagga logs de LLM e session processor com `session.id` para correlação cross-signal consistente.

🔗 [Ver PR #23213](https://github.com/anomalyco/opencode/pull/23213)

---

### ✅ #23216 - refactor(config): migrate Server + Layout to Effect Schema
**Autor:** kitlangton | **Status:** CLOSED
**Relevância:** Extrai definições inline de Server e Layout de config.ts para módulos dedicados (`config/server.ts`, `config/layout.ts`) usando Effect Schema + effect-zod walker.

🔗 [Ver PR #23216](https://github.com/anomalyco/opencode/pull/23216)

---

### ✅ #23209 - feat(effect-zod): translate well-known filters into native Zod methods
**Autor:** kitlangton | **Status:** CLOSED
**Relevância:** Walker agora dispatch em `meta._tag` dos filters built-in do Effect Schema e chama método Zod correspondente (`.int()`, `.gt(x)`, `.regex(r)`, etc).

🔗 [Ver PR #23209](https://github.com/anomalyco/opencode/pull/23209)

---

### ✅ #13854 - fix(tui): stop streaming markdown/code after message completes
**Autor:** mocksoul | **Status:** OPEN | **Needs:** issue
**Relevância:** `TextPart` passa `streaming={true}` incondicionalmente mesmo para mensagens completadas, causando perda de última table row. Deriva streaming state de `message.time.completed`.

🔗 [Ver PR #13854](https://github.com/anomalyco/opencode/pull/13854)

---

## 5. Tendências de Pedidos de Features

### 🛡️ Segurança e Isolamento
**Issue #2242 (40 👍)** — Sandbox do agente similar ao `seatbelt` do macOS usado por gemini-cli/codex-cli. Indica demanda crescente por controle de acesso do agente a arquivos e comandos.

### ⌨️ Experiência de Input/Keyboard
- **Issue #4821 (34 👍)** — Queue/unqueue de mensagens para melhor controle de fluxo
- **Issue #16100 (10 👍)** — Numpad keys suport no VS Code integrated terminal
- **Issue #23204** — Cmd+Return para newline no textarea
- **Issue #23200** — Cmd+V não deve sair do app

### 🎨 Customização de Temas
- **Issue #10661** — System theme ausente no macOS
- **Issue #3680** — Light themes removidos (revertido?)
- **Issue #20926** — Temas com light/dark variant ignoram system theme

### 🧠 Agentes e Modelos
- **Issue #23139** — GitLab Duo Opus 4.7 mappings faltando
- **Issue #23166 (CLOSED)** — Opus 4.7 on Bedrock precisa de `thinking.display: "summarized"`
- **PR #7156** — Variant support para subagents com reasoning effort configurable

### 📱 Mobile/Touch
- **PR #18767** — Mobile Touch Optimization para OpenCode App

### 🔔 Notificações
- **Issue #23184** — Feature request para som quando task termina
- **PR #23212** — Terminal notifications integradas (merged)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🐛 Bugs Recorrentes Identificados

| Área | Issue | Descrição |
|------|-------|-----------|
| **Core** | #15533 | Auto-compaction infinite loop |
| **Core** | #22768 | `@` command não funciona |
| **Core** | #22615 | `getTerminalBackgroundColor()` sempre retorna "dark" |
| **Web** | #23200, #23204 | Cmd+V/Cmd+Return no textarea |
| **Windows/WSL2** | #22862 | Glob tool falha com wasm parsing |
| **macOS** | #22630 | Blank window no OpenCode Desktop |
| **Permissions** | #16157 | Ordering de rules não funciona corretamente |

---

### 🔧 Correções Recentes a Destacar

1. **v1.4.8 regression** — Plugin deadlock ao usar `client.app.log()` durante inicialização (Issue #23147)
2. **tar ownership** — UID/GID leak quando executado como root (PR #23217)
3. **Permissions merge** — ordering descartado ao fazer merge (PR #23214)

---

### 📈 Métricas do Dia

| Categoria | Quantidade |
|-----------|------------|
| Releases (últimas 24h) | 4 (v1.4.8 → v1.4.11) |
| Issues com atividade | ~10 atualizados |
| PRs merged | ~10 (majoritariamente do kitlangton) |
| Issues resolvidos | 8 (CLOSED) |

---

### 👤 Contribuidor em Destaque

**kitlangton** — Responsável por **7+ PRs** nas últimas 24h, todos focados em:
- Effect Schema migrations
- effect-zod walker improvements
- Config refactoring
- LSP effectification

---

*Relatório gerado automaticamente em 2026-04-18. Dados extraídos de github.com/anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Relatório Diário da Comunidade Pi — 2026-04-18

## 1. Destaques do Dia

O dia foi marcado por uma intensa atividade de correções e melhorias, com foco especial na estabilidade dos providers AWS Bedrock (tantos os problemas de autenticação bearer-token quanto os bugs com modelos Claude). A comunidade também demonstrou interesse em melhorias de usabilidade, como controles rebindáveis e gerenciamento de sessões. O provider Fireworks AI foi oficialmente integrado, ampliando as opções de modelos disponíveis.

---

## 2. Lançamentos

### v0.67.68 e v0.67.67

**Link:** https://github.com/badlogic/pi-mono/releases

**Mudanças principais:**

| Aspecto | Detalhes |
|---------|----------|
| **Autenticação Bedrock** | Suporte a bearer-token via `AWS_BEARER_TOKEN_BEDROCK` para acesso ao Converse API sem credenciais SigV4 locais |
| **Documentação** | Atualização do `docs/providers.md#amazon-bedrock` com instruções de configuração |

**Observação:** O diff entre v0.67.67 e v0.67.68 não foi detalhado nos dados disponíveis, sugerindo mudanças menores de hotfix.

---

## 3. Issues em Evidência

### 🔴 Suporte ao Vertex AI para Claude (Issue #1155)
**Link:** https://github.com/badlogic/pi-mono/issues/1155

**Por que importa:** Usuários no Google Cloud Platform não conseguiam usar modelos Claude através do Vertex AI — o provider `google-vertex` só suportava Gemini, e `anthropic-messages` fazia requisições incorretas para o endpoint.

**Reação da comunidade:** 8 comentários, indicando interesse significativo. Issue fechada após implementação.

---

### 🟡 Custom Session IDs (Issue #3271)
**Link:** https://github.com/badlogic/pi-mono/issues/3271

**Por que importa:** Desenvolvedores que criam agent harnesses customizados (como o OpenClaw) precisam de controle sobre IDs de sessão para integração com seus sistemas.

**Reação da comunidade:** 7 comentários, aberta em 2026-04-16 e atualizada em 2026-04-17. Status: OPEN.

---

### 🟡 Toggle "UPDATE AVAILABLE" (Issue #3005)
**Link:** https://github.com/badlogic/pi-mono/issues/3005

**Por que importa:** Usuários de NixOS e outros sistemas com atualizações complexas são incomodados pela mensagem amarela persistente. A issue pede integração com "Quiet startup".

**Reação da comunidade:** 7 comentários, 2 👍. Fechada.

---

### 🔴 Multimodal Gemma não "vê" imagens (Issue #3022)
**Link:** https://github.com/badlogic/pi-mono/issues/3022

**Por que importa:** O modelo gemma4:31b-cloud multimodal hospedado no Ollama não consegue processar imagens, limitando casos de uso de visão computacional.

**Reação da comunidade:** 6 comentários, 2 👍. Fechada.

---

### 🔴 Comandos /exit não implementado (Issue #2850)
**Link:** https://github.com/badlogic/pi-mono/issues/2850

**Por que importa:** Documentação promete `/quit` e `/exit`, mas apenas `/quit` funciona. Usuários podem ficar presos.

**Reação da comunidade:** 5 comentários. Fechada.

---

### 🔴 Tool calls abortados corrompem estado (Issue #3344)
**Link:** https://github.com/badlogic/pi-mono/issues/3344

**Por que importa:** Ctrl+C durante tool calls deixa conversa permanentemente inutilizável com erro "tool_use ids without tool_result". Bug crítico para produtividade.

**Reação da comunidade:** 4 comentários. Fechada.

---

### 🟢 Adicionar nível "max" ao thinking ladder (Issue #3299)
**Link:** https://github.com/badlogic/pi-mono/issues/3299

**Por que importa:** Sincroniza o ladder do Pi com o Opus 4.7 (6 níveis ativos: off/minimal/low/medium/high/xhigh/max), mantendo consistência com a API.

**Reação da comunidade:** 6 comentários. Fechada.

---

### 🔴 Bug em AWS GovCloud Bedrock (Issue #3359)
**Link:** https://github.com/badlogic/pi-mono/issues/3359

**Por que importa:** Pi não funciona com GovCloud Bedrock devido a validação de IDs com prefixo `us-gov.` — importante para workloads governamentais.

**Reação da comunidade:** 2 comentários. Fechada (inprogress).

---

### 🟡 Renderização CJK em Markdown (Issue #3353)
**Link:** https://github.com/badlogic/pi-mono/issues/3353

**Por que importa:** Ênfase em markdown com caracteres CJK (chinês/japonês/coreano) não renderiza corretamente — problema para projetos internacionalizados.

**Reação da comunidade:** 2 comentários. Atualizada em 2026-04-18.

---

### 🟡 Shell bomb criada por agent (Issue #3356)
**Link:** https://github.com/badlogic/pi-mono/issues/3356

**Por que importa:** Relata OOM kills em VMs, potencialmente causados por loops infinitos gerados pelo agent/model — alerta para investigação de segurança.

**Reação da comunidade:** 3 comentários. Fechada.

---

## 4. Progresso de PRs Importantes

### ✨ Provider Fireworks AI (PR #2857)
**Link:** https://github.com/badlogic/pi-mono/pull/2857

Integração do provider Fireworks AI com Kimi K2.5 Turbo como modelo padrão. Adiciona `FIREWORKS_API_KEY` e registra modelos compatíveis.

---

### 🔧 Fix em tool-call streaming (PR #3229)
**Link:** https://github.com/badlogic/pi-mono/pull/3229

Muda de `messages.stream()` para `messages.create(..., stream: true)` com fallback non-streaming quando streaming falha. Status: OPEN (inprogress).

---

### ✨ Provider Nebius Token Factory (PR #3346)
**Link:** https://github.com/badlogic/pi-mono/pull/3346

Novo provider via path OpenAI-compatível com autenticação `NEBIUS_API_KEY` e modelos de `models.dev`.

---

### 🔧 Suporte a vídeo/áudio em prompts (PR #3349)
**Link:** https://github.com/badlogic/pi-mono/pull/3349

Extende arrays de `images` para suportar qualquer MIME type. Providers `openai-completions` e `openai-responses` agora roteiam por prefixo mimeType.

---

### 🔧 Coerce JSON stringified em tool calls (PR #3336)
**Link:** https://github.com/badlogic/pi-mono/pull/3336

Corrige models como Opus 4.6 e GLM-5.1 que enviam `edits` como JSON string ao invés de array parseado — validação rejeitava, causando fallback caótico para `sed`/Python.

---

### ✨ Per-tool executionMode sequential (PR #3345)
**Link:** https://github.com/badlogic/pi-mono/pull/3345

Adiciona `executionMode` opcional para forçar execução sequencial de tools específicas, resolvendo conflitos com `ctx.ui.select`/`ctx.ui.input`.

---

### 🔧 Rebindable scoped models e shortcuts (PR #3343)
**Link:** https://github.com/badlogic/pi-mono/pull/3343

Torna atalhos de scoped-models e tree filter configuráveis pelo usuário.

---

### 🔧 Retry em "Network connection lost" (PR #3316)
**Link:** https://github.com/badlogic/pi-mono/pull/3316

Adiciona `"connection.?lost"` ao regex de erros retryáveis — antes, o agent morria em vez de retry quando HTTP stream caía.

---

### 🔧 Session ID headers em OpenAI responses (PR #3264)
**Link:** https://github.com/badlogic/pi-mono/pull/3264

Garante headers de session ID em todas as chamadas OpenAI-compatíveis para prompt caching funcionar fora de api.openai.com.

---

### ✨ SSH extension: context files remotos (PR #2964)
**Link:** https://github.com/badlogic/pi-mono/pull/2964

Carrega `AGENTS.md` e `CLAUDE.md` de máquinas remotas via SSH extension — antes, só arquivos locais eram visíveis ao agent.

---

## 5. Tendências de Pedidos de Features

| Categoria | Exemplos | Discussão |
|-----------|---------|-----------|
| **Multimodalidade expandida** | Suporte a vídeo/áudio em prompts (#3349), modelos multimodais Ollama (#3022) | Comunidade busca parity com capacidades vision/audio |
| **Customização de UI/UX** | Atalhos rebindáveis (#3343, #3326), toggle "UPDATE AVAILABLE" (#3005) | Usuários querem controle sobre interface e workflow |
| **Providers alternativos** | Vertex AI (#1155), Nebius (#3346), Fireworks (#2857) | Ecossistema de providers continua crescendo |
| **Gerenciamento de sessão** | Custom session IDs (#3271), delete session atual (#3355), fork/resume context (#3347) | Foco em workflows de longa duração |
| **Extensibilidade** | Package dependencies (#3351), sequential tool execution (#3345), setScopedModels API (#3330) | APIs para integrações avançadas |

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Recorrentes Identificados

| Problema | Impacto | Frequência |
|----------|--------|------------|
| **AWS Bedrock com Claude** | Falhas de autenticação, streaming, reasoning e GovCloud | Múltiplas issues (#3335, #3315, #3313, #3359) |
| **Tool calls como JSON string** | Modelos enviam strings ao invés de arrays, causando validação rejected | PR #3336 corrige |
| **Connection lost não retryable** | Streams caídos matam o agent | PR #3316 corrige |
| **npm extension tools não carregam** | "Tool not found" até `/reload` | Issue #3243 |
| **Race conditions em tools paralelas** | UI inputs só funcionam no último tool call | PR #3345 corrige |

### 📋 Demandas Frequentes

1. **Prompt caching em openai-completions** — Issue #3186 (fechada, parcialmente via #3264)
2. **Contexto de resume incompleto** — Issue #3347
3. **Model scope via extension API** — Issue #3330
4. **Dependências entre packages** — Issue #3351

### 🔮 Área de Investigação

A issue #3356 sobre OOM kills originados por agent/model sugere possível vulnerabilidade a prompts que geram loops infinitos — recomenda-se monitorar casos similares e considerar timeouts mais agressivos.

---

*Relatório gerado automaticamente com base nos dados do GitHub do projeto pi-mono.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Diário da Comunidade Qwen Code — 2026-04-18

---

## 1. Destaques do Dia

O ecossistema Qwen Code registrou progresso significativo com o lançamento das versões **v0.14.5-nightly** e a prévia da **v0.15.0**, ambas trazendo suporte completo a hooks para ACP e melhorias na experiência do modo compacto. No âmbito da comunidade, a discussão sobre a reformulação da política gratuita do Qwen OAuth dominou o engajamento, acumulando 93 comentários. Simultaneamente, uma nova implementação de hooks baseados em LLM foi introduzida, expandindo as capacidades de automação e controle de fluxo do sistema.

---

## 2. Lançamentos

### v0.14.5-nightly.20260418.418acc548

**Link:** https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260418.418acc548

Esta versão nightly incorpora três avanços principais:

- **Suporte completo a hooks para ACP:** O contribuidor @DennisYu07 implementou uma infraestrutura robusta de hooks que permite interceptação e modificação do ciclo de vida da ACP (Agent Communication Protocol), facilitando integrações personalizadas.

- **Otimização do modo compacto:** Melhorias nos atalhos de teclado, sincronização de configurações e mecanismos de segurança para uma experiência mais fluida quando o Qwen Code opera em ambientes com espaço limitado de tela.

- **Introdução de hooks HTTP:** A adição de hooks baseados em HTTP expande as possibilidades de integração com serviços externos e webhooks.

### v0.15.0-preview.0

**Link:** https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.0

Release de preview que consolida as mesmas mudanças da nightly, sinalizando a stabilização das novas funcionalidades para uma versão estável iminente.

---

## 3. Issues em Evidência

### 1. Ajuste na Política Gratuita do Qwen OAuth (93 comentários) — **ALTA PRIORIDADE**

**Link:** https://github.com/QwenLM/qwen-code/issues/3203

**Por que importa:** Esta issue propõe mudanças drásticas na política gratuita: redução de 1.000 para 100 requisições/dia e eliminação gradual do tier gratuito até 20 de maio. Com 93 comentários, representa o debate mais intenso da semana, evidenciando forte preocupação da comunidade sobre acessibilidade e modelos de negócio.

**Reação da comunidade:** Discussão ativa com múltiplos pontos de vista sobre sustentabilidade do serviço versus barreira de entrada.

---

### 2. Erro 401 Persistente Após Autenticação (11 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/1855

**Por que importa:** Usuários que migram de OAuth para API Key do Coding Plan enfrentam erros de autenticação 401 persistentes, indicando problema de gerenciamento de sessão entre métodos de autenticação.

**Status:** Fechado — indica que foi addressed, mas a recorrência em outras issues (#3403, #3390, #3405, #3406) sugere necessidade de verificação.

---

### 3. Erros 401 em Lote (Múltiplas Issues) — **TENDÊNCIA CRÍTICA**

**Links:**
- https://github.com/QwenLM/qwen-code/issues/3348
- https://github.com/QwenLM/qwen-code/issues/3403
- https://github.com/QwenLM/qwen-code/issues/3390
- https://github.com/QwenLM/qwen-code/issues/3405
- https://github.com/QwenLM/qwen-code/issues/3406

**Por que importa:** Uma onda de issuesreportando "401 invalid access token or token expired" foi aberta em 2026-04-17, afetando usuários da versão 0.14.5 e anteriores. O problema ocorre mesmo sem uso prévio, sugerindo regressão ou problema no sistema de tokens.

**Reação da comunidade:** Frustração significativa — muitos usuários relatam incapacidade de usar a ferramenta mesmo em primeiro uso do dia.

---

### 4. Terminal Scroll Jumps Durante Execução de Agente (4 👍)

**Link:** https://github.com/QwenLM/qwen-code/issues/3144

**Por que importa:** Durante streaming de respostas e execução de agentes, o terminal apresenta comportamento errático com "bouncing" de 10-30 vezes por segundo, tornando a interface inutilizável. Afeta diretamente a experiência de uso em fluxos de trabalho intenso.

**Status:** Fechado — presumably addressed com as correções de redraw.

---

### 5. Agente Interpreta Saída Shell como Vazia (4 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/3361

**Por que importa:** Quando o Qwen Code executa comandos shell (como `git`), os comandos completam com saída visível, mas o agente conclui incorretamente que a saída está vazia. Este é um bug funcional crítico que compromete a confiabilidade do agente.

**Contexto:** Issue semelhante #3338 específica para modelo GLM-5.1 indica problema recorrente com certos provedores.

---

### 6. Paridade de Features do Subagente com Claude Code (6 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/2409

**Por que importa:** O sistema de subagentes atual implementa aproximadamente 40-45% das capacidades equivalentes no Claude Code. A comunidade demanda paridade funcional para manter competitividade.

**Status:** Fechado — sinaliza que roadmap contempla melhorias.

---

### 7. Visibilidade de Limites de Requisições (5 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/3267

**Por que importa:** Usuários do plano gratuito não têm visibilidade clara de quando seu limite será atingido, levando a interrupções inesperadas. A feature request pede dashboard ou indicadores de uso.

**Reação da comunidade:** 1 upvote, indicando demanda moderada mas relevante.

---

### 8. Autenticação OAuth Bem-sucedida Mas Requisições Falham (5 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/3281

**Por que importa:** Cenário confuso onde o sistema reporta "Authenticated successfully" mas falhas subsequentes indicam "free tier quota exceeded" — sugerindo desalinhamento entre status de autenticação e estado de quota.

---

### 9. Customização das Citações do Modo "Thinking" (5 👍)

**Link:** https://github.com/QwenLM/qwen-code/issues/2034

**Por que importa:** As frases humorísticas rotativas durante operações de "thinking" são consideradas "infantis" e "aleatórias" por parte da comunidade. Com 5 upvotes, representa uma demanda de personalização de UX.

---

### 10. Problema de Shell em macOS (2 comentários)

**Link:** https://github.com/QwenLM/qwen-code/issues/3230

**Por que importa:** Usuários macOS não conseguem executar comandos Java e Maven, retornando "Command exited with code: 1" mesmo quando as ferramentas estão instaladas e funcionais externamente. Afeta produtividade em ambiente Apple.

---

## 4. Progresso de PRs Importantes

### 1. Hook de Prompt com Suporte a Avaliação LLM (Feature Nova)

**Link:** https://github.com/QwenLM/qwen-code/pull/3388

**PR #3388** — Contribuidor @DennisYu07

Introduz um novo tipo de hook que utiliza um LLM para avaliar input e retornar decisões (allow/block), habilitando lógica de hooks inteligente para segurança, injeção de contexto e controle condicional de workflow. Representa evolução significativa no sistema de extensibilidade do Qwen Code.

**Status:** ABERTO — aguardando review.

---

### 2. Substituição do Crawler de Sistema de Arquivos

**Link:** https://github.com/QwenLM/qwen-code/pull/3214

**PR #3214** — Contribuidor @scrollDynasty

Substitui o crawler baseado em `fdir` por estratégia híbrida usando `git ls-files` com fallback para `ripgrep` no autocomplete de menções de arquivos (`@`). Resolve problema de performance em repositórios grandes que não respeitavam `.gitignore`.

**Status:** ABERTO — resolvendo issue #3137.

---

### 3. Otimização de Redraw do Cursor Terminal

**Link:** https://github.com/QwenLM/qwen-code/pull/3381

**PR #3381** — Contribuidor @reidliu41

Reduz o "salto" do viewport durante streaming interativo otimizando a sequência de redraw multilinha emitida por Ink/log-update. Endereça diretamente reclamações sobre experiência de terminal instável.

**Status:** FECHADO — merge concluído.

---

### 4. Auto-submit na Pressão de Teclas Numéricas

**Link:** https://github.com/QwenLM/qwen-code/pull/3407

**PR #3407** — Contribuidor @doudouOUC

Corrige comportamento onde teclas numéricas no `AskUserQuestionDialog` apenas moviam o highlight sem submeter, diferentemente do padrão do `useSelectionList`. Resolve confusão de UX onde usuário pressionava número, via highlight, mas ação não era executada.

**Status:** ABERTO.

---

### 5. Fix no SDK: Settlement de Promessa next() no Stream.return()

**Link:** https://github.com/QwenLM/qwen-code/pull/2981

**PR #2981** — Contribuidor @chinesepowered

Corrige `Stream.return()` deixando promessa `next()` pendente sem resolução, causando hang em fluxos assíncronos. Enquanto `Stream.done()` e `Stream.error()` corretamente resolviam a promessa, `Stream.return()` apenas definia `isDone`.

**Status:** FECHADO.

---

### 6. Re-arm de Listener Desconectado Após Crash

**Link:** https://github.com/QwenLM/qwen-code/pull/2975

**PR #2975** — Contribuidor @chinesepowered

Resolve falha silenciosa de recovery em segunda desconexão no `channel start`/`startAll`. O handler de `disconnected` era registrado na instância original do `AcpBridge` e não sobrevivia reconstruções.

**Status:** FECHADO.

---

### 7. Correção de dispatchMode Padrão em Channels

**Link:** https://github.com/QwenLM/qwen-code/pull/2974

**PR #2974** — Contribuidor @chinesepowered

Corrige `ChannelBase` para usar `'collect'` como default, alinhando comportamento à documentação. O código anterior caía para `'steer'`, causando comportamento oposto ao esperado por consumidores.

**Status:** ABERTO.

---

### 8. Posicionamento de Cursor no VS Code Companion

**Link:** https://github.com/QwenLM/qwen-code/pull/2971

**PR #2971** — Contribuidor @chinesepowered

Corrige autofill do autocomplete disparando incorretamente quando cursor está na posição 0. O trigger reescrevia `cursorPosition === 0` para `text.length`, causando detecção de trigger errônea.

**Status:** ABERTO.

---

### 9. Reordenação de LruCache em Valores Falsy

**Link:** https://github.com/QwenLM/qwen-code/pull/2968

**PR #2968** — Contribuidor @chinesepowered

Corrige `LruCache.get()` que não reordenava entradas LRU para valores falsy (`0`, `''`, `false`, `null`). Valores frequentemente acessados mas "falsy" nunca eram promovidos a most-recently-used.

**Status:** ABERTO.

---

### 10. Preservação de Input de Startup Através da Inicialização

**Link:** https://github.com/QwenLM/qwen-code/pull/3242

**PR #3242** — Contribuidor @xxih

Captura input TTY no início do startup da CLI para que teclas pressionadas prematuramente não sejam descartadas, e as reproduz via `KeypressProvider` após UI interativa montar. Inclui testes de regressão.

**Status:** ABERTO.

---

## 5. Tendências de Pedidos de Features

A análise das issues revela as seguintes direções prioritárias demandadas pela comunidade:

### Gestão de Fluxo de Trabalho e Agentes

- **/batch Parallel Operations:** Demanda por comandos de orquestração em larga escala para mudanças paralelas em múltiplos arquivos/tarefas (#3043)
- **Paridade de Subagentes:** Alinhamento do sistema de subagentes com capacidades do Claude Code (#2409)
- **Lista de Tarefas na CLI:** Inclusão de task list integrada para monitorar progresso sem scroll (#2987)

### Customização e UX

- **Citação do Thinking:** Opção para customizar ou desabilitar frases rotativas durante "thinking" (#2034)
- **Modo Vim:** Seleção no dropdown menu com Ctrl+p/Ctrl+n além das setas (#2561)
- **Frases Significativas:** Substituição de frases "engraçadas" por mensagens precisas sobre processamento interno (#1387)

### Infraestrutura e Performance

- **Limite de Tokens no Search:** Restrição do search tool a 150.000 tokens para evitar crashes (#192)
- **Crawler Otimizado:** Substituição de fdir por git ls-files + ripgrep para performance em grandes repos (#3214)
- **Hooks com LLM:** Sistema de hooks para avaliação inteligente de input (#3388)

### Modelo de Serviço e Auth

- **Política Gratuita:** Reavaliação de limites e viabilidade do tier gratuito (#3203)
- **Visibilidade de Quotas:** Dashboard para acompanhamento de uso de requisições (#3267)
- **Modelos OpenAI-Compatible:** Suporte robusto para LLMs locais via API compatível (#3384)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Prioridade Crítica: Onda de Erros 401

**Problema:** Múltiplas issues abertas em 2026-04

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*