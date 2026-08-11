# Resumo diário do ecossistema de agentes de IA 2026-08-12

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-11 20:37 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

Sem atividade nas últimas 24 horas.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-08-12
**Projetos Analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde fragmentada mas vigorosa** em agosto de 2026. Seis dos sete projetos monitorados demonstram atividade intensa nas últimas 24h, com volume combinado de 337 PRs e 153 issues processadas — indicando ciclos de desenvolvimento acelerados. O tema dominante é a **operacionalização de segurança**: três projetos (NanoBot, Hermes Agent, ZeroClaw)发布了 correções P1 para vulnerabilidades de credenciais e dependências. Simultaneamente, observam-se duas tendências divergentes: projetos maduros (ZeroClaw, Hermes Agent) investindo em arquitetura de longo prazo via RFCs e god-file sharding, enquanto projetos mais jovens (NanoBot, CoPaw) priorizam usabilidade e.features de superfície (PWA, desktop UX). A estabilidade do agente — especificamente loops infinitos e gestão de contexto — emerge como o principal desafio técnico compartilhado.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Bugs Críticos Abertos | Saúde |
|---------|--------------|-----------|------------|----------------|----------------------|-------|
| **NullClaw** | 0 | 0 | 0 | 0 | N/A | ⚪ Inativo |
| **NanoBot** | 6 | 128 | 109 | 0 | 1 (shell bypass) | 🟢 Saúde |
| **Hermes Agent** | 50 | 50 | ~30 (estimado) | 0 | 3 (P1: desktop restart, gateway drain, Telegram deadlock) | 🟡 Moderada |
| **PicoClaw** | 3 | 7 | 1 | 0 | 2 (context management, shell commands) | 🔴 Atenção |
| **IronClaw** | 23 | 50 | 23 | 0 | 2 (context eviction, token estimator) | 🟢 Saúde |
| **CoPaw** | 21 | 48 | 24 | 1 (v2.1.0-beta.3) | 2 (IME crash, plugin security) | 🟢 Saúde |
| **ZeroClaw** | 50 | 50 | 4 | 0 | 3 (P1: DoS, workspace delegation, daemon reload) | 🟢 Saúde |

**Observações:**
- **Volume excepcional:** NanoBot lidera em PRs processados (128), indicando sprint intensivo ou automação de merge.
- **Release activity:** CoPaw é o único projeto com release formal (beta.3), demonstrando maturidade no ciclo de releases.
- **Estagnação:** PicoClaw apresenta 4 de 6 PRs stale, sugerindo gargalo de review ou perda de momentum comunitário.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS) — Representante de Alta Atividade

**Vantagens competitivas:**

| Dimensão | Posicionamento |
|----------|----------------|
| **Volume de desenvolvimento** | Líder absoluto com 128 PRs/24h — 2.5x mais que o segundo colocado |
| **Responsividade de segurança** | 2 vulnerabilidades P1 de API key leakage resolvidas em ~5 dias |
| **Extensão de plataforma** | PWA support (#5336) expande alcance para mobile e offline |
| **Modularidade emergente** | Agent Plugins v1 (#5288) indica estratégia de ecossistema |

**Diferenças técnicas notáveis:**

- **Abordagem de segurança:** Implementa allowlist explícito para variáveis de ambiente em subprocessos (`_subprocess_env()`) — arquitetura mais defensiva que pares.
- **Multi-provider nativo:** Suporte a OpenRouter Server Tools demonstra foco em agnosticismo de provedores.
- **Gestão de memória de sessão:** Isolation de thread sessions via room ID + thread root event ID (#5286) é sofisticada para o segmento.

**Tamanho da comunidade:**
- Meta-issue com 8+ comentários sobre loops de mensagens indica base de usuários ativa em produção.
- Ausência de labeling de "distinguished contributors" sugere comunidade ainda em formação.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança Operacional (Universal)

| Projeto | Foco de Segurança | Status |
|---------|-------------------|--------|
| **NanoBot** | Vazamento de API keys via os.environ e subprocessos | ✅ Corrigido |
| **Hermes Agent** | Vulnerabilidades em pydantic-settings e Pygments (GHSA) | ✅ Corrigido |
| **ZeroClaw** | Shell bypass, DoS via WebP, sandbox Docker | 🟡 Em correção |
| **CoPaw** | Plugins podem injetar mensagens sem aprovação | 🔴 Aberto |

**Síntese:** A comunidade está madurando em práticas de security-first, com correções de vulnerabilidades de credenciais aparecendo em múltiplos projetos simultaneamente — possivelmente por compartilhamento de padrões de implementação ingênuos.

### 4.2 Estabilidade do Loop do Agente

| Projeto | Problema | Evidência |
|---------|----------|-----------|
| **NanoBot** | Loop infinito de mensagens e chamadas de tools | Issues #5327, #5256 (10+ comentários) |
| **IronClaw** | Context window evict silencioso (128-message clamp) | Issue #7484 |
| **PicoClaw** | Compressão de sessão falhando para agentes roteados | Issue #3301 |
| **CoPaw** | MCP tools失效间歇性 após horas de uso | Issue #6732 (10 comentários) |

**Síntese:** O desafio de manter agentes em loops produtivos (não-exploratórios) é o problema técnico mais compartilhado, afetando 4 de 6 projetos ativos.

### 4.3 Desktop e Experiência de Usuário

| Projeto | Foco Desktop |
|---------|--------------|
| **Hermes Agent** | Restart regression, setup wizard, analytics de custos (5+ issues) |
| **CoPaw** | Font sizing, IME support, window geometry persistence |
| **IronClaw** | SSE reconnect storms, long conversation titles |
| **NanoBot** | PWA support, interactive backgrounds |

**Síntese:** Desktop app emerge como battlefield de diferenciação, com múltiplos projetos investindo simultaneamente em UX, observabilidade e estabilidade de conexões persistentes.

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura

| Categoria | Projetos | Características |
|-----------|----------|------------------|
| **Kernel/Platform** | IronClaw, ZeroClaw | Arquitetura de kernel plugável, loops de agente como componentes intercambiáveis |
| **Monolito Evolutivo** | Hermes Agent | God-file sharding em progresso, arquitetura tradicional em transformação |
| **Stack Integrado** | NanoBot, CoPaw | Provider + channels + tools em stack coeso |
| **Lightweight** | PicoClaw | Foco em roteamento e dispatch, menor footprint |

### 5.2 Por Público-Alvo

| Projeto | Público Implícito |
|---------|-------------------|
| **NanoBot** | Desenvolvedores multi-provider, pesquisadores de agentes autônomos |
| **Hermes Agent** | Operadores de produção multi-tenant (WeChat, QQ, Telegram) |
| **CoPaw** | Usuários finais desktop-first, ecossistema corporativo (Feishu, WeCom) |
| **ZeroClaw** | Desenvolvedores enterprise, segurança-conscious, integração IDE |
| **IronClaw** | Usuários avançados com workflows de automação persistentes |
| **PicoClaw** | Comunidades Discord/Telegram com dispatch multi-agente |

### 5.3 Por Estratégia de Features

```
NanoBot:     [Segurança P1] → [PWA] → [Provider Agnosticism] → [Agent Plugins]
Hermes:      [Desktop Regression] → [Desktop Analytics] → [Multi-Tenant Isolation]
CoPaw:       [v2.1.0 Release] → [LaTeX/KaTeX] → [CopilotKit Integration]
IronClaw:    [Context Eviction] → [Cache Control] → [Pluggable Loops] → [v1.3.0]
ZeroClaw:    [RFC Governance] → [Chat Completions API] → [Kanban/LSP Integration]
PicoClaw:    [Context Routing] → [Exa Search] → [LINE Support]
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | Velocidade | Indicador |
|---------|---------|------------|-----------|
| 1 | **NanoBot** | Muito Alta | 128 PRs/24h, 109 merged |
| 2 | **CoPaw** | Alta | 24 merged + 1 release em 24h |
| 3 | **IronClaw** | Alta | 23 merged + 6 epics simultâneos |
| 4 | **ZeroClaw** | Moderada-Alta | 4 merged mas 46 abertos + 7 RFCs |
| 5 | **Hermes Agent** | Moderada | 50 PRs volume mas 3 P1s não resolvidos |
| 6 | **PicoClaw** | Baixa | 1 merged, 4 PRs stale, baixa participação |

### 6.2 Maturidade de Governança

| Indicador | NanoBot | Hermes | CoPaw | IronClaw | ZeroClaw | PicoClaw |
|-----------|---------|--------|-------|----------|----------|----------|
| **RFC/RFP process** | ❌ | ❌ | ❌ | ❌ | ✅ (7 RFCs ativas) | ❌ |
| **Security disclosure** | ✅ (P1 rápido) | ✅ (GHSA) | ⚠️ (Gap de permissões) | ✅ | ✅ | ❌ |
| **Release cadence** | ❌ (nenhuma >24h) | ❌ | ✅ (beta.3) | ❌ | ❌ | ❌ |
| **Design system** | ❌ | ❌ | ❌ | ✅ (Epic #7038) | ❌ | ❌ |
| **QA process** | ❌ | ✅ (Railway bugs) | ⚠️ (Regressão beta) | ✅ (Bug bash) | ✅ | ❌ |

**Síntese:** ZeroClaw demonstra a governança mais madura com RFC process estruturado. CoPaw apresenta o ciclo de releases mais profissional. NanoBot e IronClaw compensam ausência de processo formal com velocidade excepcional de merges.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Agent como Kernel/Platform** | IronClaw (#7482), ZeroClaw (plugable auth) | Arquiteturas convergindo para separation of concerns entre runtime e agent logic |
| **Desktop-first como default** | 4+ projetos com issues desktop | UI/UX de desktop está se tornando table stakes, não diferencial |
| **PWA como bridge mobile** | NanoBot PWA launch | Provedores otimizam para alcance mobile sem desenvolvimento nativo |
| **Interoperabilidade API** | ZeroClaw Chat Completions (#8603), NanoBot OpenRouter | Demanda de mercado por vendor lock-in avoidance |
| **Security operacionalizada** | 3 projetos com fixes P1 simultâneos | Cultura de segurança emergindo como requisito mínimo de produção |
| **Multi-tenant production** | Hermes (#34352), IronClaw (QA bugs) | Crescimento de deployments corporativos com isolamento de dados |
| **Memory persistence** | IronClaw (#7185), CoPaw (#6772) | Agentes estão evoluindo de stateless para stateful |
| **IDE/Editor integration** | ZeroClaw LSP (#5907), Claude Code-style confirmation (#7155) | Agentes se posicionam como copilotos de desenvolvimento |

### 7.2 Riscos de Mercado Identificados

| Risco | Projetos Afetados | Severidade |
|-------|-------------------|------------|
| **Fragmentação de UX** | ZeroClaw (#7929) — slash commands inconsistentes | Média |
| **Technical debt de segurança** | PicoClaw (sem processo de security disclosure) | Alta |
| **Stale PR contributor churn** | PicoClaw (4 stale) | Alta |
| **Regression in releases** | CoPaw (v2.1.0b1 crash) | Média |
| **Performance unbounded** | Hermes (#54189 — 659MB DB em 2 semanas) | Média |

### 7.3 Oportunidades de Mercado

| Oportunidade | Demanda | Viabilidade |
|--------------|---------|-------------|
| **Chat Completions API nativa** | ZeroClaw RFC #8603 (18 comments) — Open WebUI, LobeChat, LangChain waiting | Alta |
| **Desktop analytics de custos** | Hermes #77221, CoPaw #4154 | Alta |
| **Agent memory persistence** | IronClaw #7365, CoPaw #6830 | Alta |
| **LaTeX/Math rendering** | CoPaw #6893 (10+ comments, 3 issues duplicates) | Alta |
| **Windows MCP stability** | Hermes #80405, #84068 | Média |
| **RFC tooling** | ZeroClaw #9496 (auto-referencial) | Baixa |

---

## Conclusão Executiva

O ecossistema de agentes de IA open source está em **fase de maturation acelerada**, com dois movimentos simultâneos: (1) consolidação de fundamentos técnicos (segurança, estabilidade de loops) e (2) especialização em casos de uso (desktop, multi-tenant, interoperabilidade API). 

**Para decisores técnicos:** NanoBot e CoPaw apresentam melhor balance entre velocidade e maturidade de processo. ZeroClaw é a escolha para organizações que priorizam governança e segurança formalizada. Hermes Agent atende melhor casos de uso multi-canal (WeChat/QQ/Telegram) em produção.

**Para desenvolvedores:** A gestão de contexto e loops de agente é o problema técnico mais demandante e compartilhado — contributions neste eixo terão alto impacto e visibilidade comunitária. Security patches em credenciais e dependências são oportunidades de entrada de baixo atrito.

**Observação crítica:** PicoClaw apresenta sinais de deceleramento que merecem monitoramento — 4 de 6 PRs stale em contexto de baixa participação comunitária pode indicar risco de abandono ou necessidade de injecção de contribuidores.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-08-12
**Horário de corte dos dados:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto NanoBot registrou **atividade intensa** nas últimas 24 horas, com **128 PRs atualizados** (19 abertos, 109 merged/fechados) e **6 issues** processadas. O foco predominante foi o ** endurecimento de segurança** — duas vulnerabilidades críticas relacionadas ao vazamento de chaves de API via `os.environ` foram corrigidas (PRs #5269 e #5270, ambas P1). Adicionalmente, a equipe addressing problemas de estabilidade no agente, como loops infinitos de chamadas de ferramentas e falhas de validação de parâmetros. A adição de suporte PWA à WebUI (#5336) representa um marco de usabilidade. O volume de PRs sugere um sprint ativo de desenvolvimento, possivelmente rumo a uma próxima release.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não publicou versões taggeadas entre 2026-08-11 e 2026-08-12. Dado o volume de PRs merged e a natureza das correções (segurança + estabilidade), é possível que um release esteja iminente.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (seleção prioritária)

| # | Título | Área | Prioridade | Impacto |
|---|--------|------|------------|---------|
| [#5269](https://github.com/HKUDS/nanobot/pull/5269) | `fix(providers): stop writing API keys into process os.environ` | Segurança / Providers | **P1** | Elimina vazamento/cross-contaminação de credenciais entre provedores em setups multi-provider |
| [#5270](https://github.com/HKUDS/nanobot/pull/5270) | `fix(cli): stop leaking API keys to CLI app subprocesses` | Segurança / CLI | **P1** | Adiciona `_subprocess_env()` com allowlist, isolando secrets de subprocessos de apps CLI |
| [#5265](https://github.com/HKUDS/nanobot/pull/5265) | `fix(tools): reject non-finite number parameters` | Ferramentas | P2 | Rejeita `NaN` e valores infinitos em parâmetros numéricos de tools, evitando crashes |
| [#5286](https://github.com/HKUDS/nanobot/pull/5286) | `fix(matrix): isolate thread sessions` | Canal / Matrix | P2 | Deriva session key estável de room ID + thread root event ID; preserva isolamento entre threads |
| [#5303](https://github.com/HKUDS/nanobot/pull/5303) | `fix(skills): make weather workflow Windows-safe` | Skills | P2 | Substitui `curl` bare por chamada explícita; compatível com PowerShell alias `Invoke-WebRequest` |
| [#5331](https://github.com/HKUDS/nanobot/pull/5331) | `fix(webui): surface MCP runtime connection failures` | WebUI | P2 | Projeta estados `connecting/connected/failed` e expõe recuperação para servidores OAuth/custom |
| [#5336](https://github.com/HKUDS/nanobot/pull/5336) | `feat(webui): PWA support` | WebUI | P2 | Adiciona instalabilidade, standalone launch e shell offline-capable via PWA |
| [#5337](https://github.com/HKUDS/nanobot/pull/5337) | `fix(webui): pad PWA icons for Android launchers` | WebUI | P2 | Padroniza backgrounds e padding dos ícones 192x192 e 512x512 para Android adaptive mask |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | `feat(plugins): integrate Agent Plugins with CLI Apps` | Plugins / CLI | Feature | Define boundary vendor-neutral para skills portáteis e MCP runtimes via Agent Plugins v1 |

### Avanços-chave

- **Segurança operacionalizada:** As duas vulnerabilidades de vazamento de API keys (#4783, #4784) foram finalmente merged, marcando resolução completa do ciclo de vida da vulnerabilidade.
- **Robustez do agente:** Correção de loops infinitos e validação de parâmetros não-finitos aumentam a confiabilidade em produção.
- **Experiência Multi-plataforma:** Suporte Windows para skills e PWA melhoram adoção em ambientes heterogêneos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reatções)

| # | Título | Status | Comentários | Relevância |
|---|--------|--------|-------------|------------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Bug: Nanobot repeats multiple times the same message while reasoning | **CLOSED** | 8 | **Alta** — Comportamento errático do agente em loop de raciocínio |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | Bug: `/goal` message produces dozens of repeated replies | **OPEN** | 2 | **Alta** — Loop de replies aguardando resposta do usuário |
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) | [Security] `exec.allowPatterns` shell-chain bypass | **OPEN** | 1 | **Crítica** — Bypass de restrições de shell via encadeamento |
| [#5333](https://github.com/HKUDS/nanobot/issues/5333) | Feature: [openrouter] support Server Tools | **CLOSED** | 0 | **Média** — Suporte a Web Search, Web Fetch, Fusion via OpenRouter |

### Análise

- **Repetição de mensagens** (#5327, #5256) domina o discussão com 10 comentários combinados. A comunidade reporta comportamento randômico — o agente repete frases como "Good points, let me investigate the issue" ou gera dezenas de replies idênticos enquanto aguarda input. O PR #5344 ("warn instead of silently spiraling on repeated identical tool calls") ataca a raiz técnica deste problema.
- **Segurança shell** (#5306) é uma vulnerabilidade nova e crítica — o `exec.allowPatterns` pode ser burlado via encadeamento de comandos. O PR #5345 já propõe a correção.
- **Feature de Server Tools para OpenRouter** (#5333) foi rapidamente aceita e fechada, indicando alinhamento com roadmap.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Severidade | # | Título | Resumo |
|------------|---|--------|--------|
| **Crítica** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass | Permite execução de comandos não-autorizados via bypass de padrão; correção em #5345 |
| **Alta** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` produz dezenas de replies repetidos | Aguarda input do usuário mas entra em loop de envio; aguardando resolução |

### Bugs Recentemente Fechados

| # | Título | Notas |
|---|--------|-------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Repetição múltipla de mensagens | 8 comentários; ciclo completo de bug report → fix em ~2 dias |
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | API keys vazadas via `os.environ` | Fechado junto com #4783; root cause em `OpenAICompatProvider._setup_env()` |
| [#4783](https://github.com/HKUDS/nanobot/issues/4783) | API keys vazadas para subprocessos CLI | Fechado após merge de #5270 |

### Métricas de Estabilidade

- **Bugs críticos abertos:** 1 (#5306 — em progresso via #5345)
- **Bugs de alta severidade abertos:** 1 (#5256)
- **Bugs de segurança corrigidos neste ciclo:** 3 (2 vazamentos de API keys + 1 bypass de shell)
- **Tempo médio de resolução (bugs P1):** ~5 dias (considerando criação em 2026-07-06 para #4783/#4784)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentemente Fechadas

| # | Título | Área | Sinais de Roadmap |
|---|--------|------|-------------------|
| [#5333](https://github.com/HKUDS/nanobot/issues/5333) | Suporte a Server Tools do OpenRouter | Providers | Priorização de provedores além de OpenAI; integração com tools server-side |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | Integração Agent Plugins com CLI Apps | Plugins/CLI | Estratégia de extensibilidade vendor-neutral; ecossistema de plugins |

### PRs Abertos com Caráter de Feature

| # | Título | Área | Relevância Estratégica |
|---|--------|------|------------------------|
| [#5343](https://github.com/HKUDS/nanobot/pull/5343) | Refactor: move MCP lifecycle out of `AgentLoop` | Arquitetura MCP | Desacoplamento de concerns; preparação para Composition API |
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | WebUI: redesign apps discovery | WebUI | Curação de apps via nanobot.wiki; offline fallback |
| [#5340](https://github.com/HKUDS/nanobot/pull/5340) | WebUI: interactive particle hero background | WebUI | Diferenciação visual;UI mais engaging |
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) | Decode nested JSON tool arguments by schema | Provider/OpenAI | Compatibilidade com providers que codificam objetos aninhados como strings JSON |

### Sinais de Direção

1. **Arquitetura modular:** Refatoração do MCP lifecycle (#5343) sugere movimento para design mais componentizável.
2. **Ecossistema de plugins:** Agent Plugins v1 (#5288) indica estratégia de extensão via packages independentes.
3. **Melhoria de UX WebUI:** Discover redesign (#5342) + PWA (#5336) + backgrounds interativos (#5340) = foco em experiência de usuário e retenção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência | Issue |
|-----------|-----------|------------|-------|
| **Instabilidade do agente** | Nanobot entra em loops infinitos de mensagens ou chamadas de tools, queimando budget de iterations | Alta | #5327, #5256 |
| **Segurança de credenciais** | Vazamento de API keys entre providers ou para subprocessos; risco operacional em produção | Crítica (resolvida) | #4783, #4784 |
| **Compatibilidade Windows** | Skills falham no PowerShell devido a alias `curl` | Média | #5303 |
| **Provedores alternativos** | Falta suporte a Server Tools do OpenRouter (Web Search, etc.) | Média | #5333 (resolvida) |

### Cenários de Uso Emergentes

- **Agente autônomo investigativo:** Usuários pedem ao Nanobot para investigar issues — evidencia aceitação como agente de pesquisa/código.
- **CLI Apps como extensões:** Integração de Agent Plugins com CLI Apps (#5288) sinaliza uso como plataforma de automação.
- **Multi-provider setups:** Os bugs de vazamento de API keys sugerem adoção em configurações com múltiplos provedores simultâneos (OpenAI + Anthropic + gateways).

### Satisfação/Insatisfação

- **Positivo:** Resposta rápida a vulnerabilidades de segurança (2 P1 fixes em ~5 dias). Feature requests aceitos com PR rápido (#5333).
- **Negativo:** Bugs de loop de mensagens geram frustração significativa (8 comentários em #5327). Falta de detecção de loops representa déficit de robustez percibida.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Status | Notas |
|---|--------|--------|--------|-------|
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` produce dozens of repeated replies | 2026-08-05 | **OPEN** | 7 dias sem assignee; impacta usabilidade básica |

### Observações

- **Volume de PRs vs. Issues:** 128 PRs vs. 6 issues nas últimas 24h sugere que o time está mais ativo em código do que em triagem de issues. A issue #5256, aberta há 7 dias, pode necessitar triagem.
- **Segurança:** A vulnerabilidade #5306 foi reportada em 2026-08-09 e possui PR #5345 aberto (age < 72h) — resposta dentro de SLA aceitável.
- **Histórico de segurança:** As issues #4783 e #4784 (criadas em 2026-07-06) levaram ~36 dias para serem fechadas — latência elevada para vulnerabilidades. O processo de security disclosure pode ser revisitado.

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| **Issues ativas (abertas)** | 2 |
| **Issues fechadas** | 4 |
| **PRs abertos** | 19 |
| **PRs merged/fechados** | 109 |
| **Novas releases** | 0 |
| **Bugs críticos em aberto** | 1 |
| **PRs de segurança merged (P1)** | 2 |
| **Features merged** | 2+ |
| **Tempo desde última release** | >24h |

---

**Saúde Geral:** O projeto demonstra **atividade saudável e responsiva** no front de segurança, com correções P1 merged rapidamente. A área de maior risco é a **estabilidade do agente** (loops de mensagens/herança), que embora atacada por PRs abertos (#5344), ainda impacta usuários. A adição de PWA e redesign de UI indicam maduração da experiência de usuário. Recomenda-se atenção à triagem de issues antigas e potencialização de comunicação sobre o roadmap de features arquiteturais (MCP lifecycle, Agent Plugins).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-12

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** em 12 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve novos lançamentos, indicando um período de desenvolvimento intensivo sem entrega formalizada. A prioridade técnica está centrada em três frontes: (1) segurança com a correção de vulnerabilidades em `pydantic-settings` e `Pygments` (#84093), (2) estabilidade do desktop com regressão crítica no restart do gateway (#83683) e (3) decomposição de god-files como política arquitetural (#78647, 67 comentários). O volume de atividade sugere uma sprint ativa com forte demanda comunitária.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não emitiu versões neste período. A ausência de releases indica que a base de código está em fase de estabilização pré-release, com correções acumuladas aguardando integração formal.

---

## 3. Progresso do Projeto

### PRs de destaque merged/fechados

| # | Descrição | Impacto |
|---|-----------|---------|
| [#84093](https://github.com/NousResearch/hermes-agent/pull/84093) | **Segurança**: Adiciona floors de segurança para `pydantic-settings>=2.14.2,<3` (GHSA-4xgf-cpjx-pc3j) e `Pygments>=2.20.0,<3` (GHSA-5239-wwwm-4pmq) | **Crítico** — corrige vulnerabilidades de segurança com atualização de dependências |
| [#84068](https://github.com/NousResearch/hermes-agent/issues/84068) | **Fechado (duplicado)**: MCP stdio no Windows com `BrokenResourceError`/`CancelledError` | Documentação de bug conhecido, unificado com #80405 |
| [#78906](https://github.com/NousResearch/hermes-agent/issues/78906) | **Fechado**: `/auth/native/authorize` com auto-seleção de provider causava desktop login fail | Estabilidade de autenticação |

### PRs abertos em revisão (alta atividade)

| # | Descrição | Componente | Status |
|---|-----------|-----------|--------|
| [#84078](https://github.com/NousResearch/hermes-agent/pull/84078) | Arquiva turns substituídos no retry em vez de deletar | Gateway | P2 |
| [#84083](https://github.com/NousResearch/hermes-agent/pull/84083) | Rejeita grafos de dependência Kanban inválidos | Cron | P3 |
| [#84085](https://github.com/NousResearch/hermes-agent/pull/84085) | Preserva saída parcial quando subagente dá timeout | Delegate | P2 |
| [#82942](https://github.com/NousResearch/hermes-agent/pull/82942) | Compressão proativa de sessões no desktop | Desktop | P3 |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

1. **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)** — Epic: Shard all 20 god files (67 comentários)
   - **Tipo**: Refatoração/Arquitetura — Epic
   - **Demanda**: Decomposição completa de 20 god-files em módulos limpos
   - **Diretriz**: "Extend, don't duplicate. Design one shared interface."
   - **Status**: Aberta, necessidade de decisão

2. **[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)** — Solving the Multi-Tenant Hermes Problem (24 comentários)
   - **Tipo**: Feature/Arquitetura — Feature request
   - **Demanda**: Isolamento de tenant via sistema de hooks corrigido
   - **Contexto**: Produção com meses de uso em múltiplos tenants sem correção core
   - **Reações**: 3 👍

3. **[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)** — Telegram Feature Parity & Alignment Campaign (5 comentários)
   - **Tipo**: Feature — Meta-issue
   - **Demanda**: Alinhamento com Bot API 10.2 para paridade completa de recursos

### Análise de tendências

- **Arquitetura dominante**: God-file sharding é o tema mais discutido, com 2 issues no top-10 por comentários
- **Multi-tenancy**: Forte demanda comunitária por isolamento de dados entre tenants
- **Desktop app**: 4 issues relacionadas ao desktop app (análise de custos #77221, setup wizard #78661, restart regression #83683, status drawer #72775)

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata necessária)

| # | Problema | Componentes | Severidade |
|---|----------|-------------|------------|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop restart mata gateway e nunca relança — WeChat/QQ/Telegram silenciam | Desktop, Gateway | **Regressão** |
| [#82161](https://github.com/NousResearch/hermes-agent/issues/82161) | Gateway drain sai em 0.00s com cron job em voo, matando-o | Gateway, Cron | **Semantic breach** |
| [#82627](https://github.com/NousResearch/hermes-agent/issues/82627) | Telegram gateway deadlock ao conectar no macOS 26 | Telegram, Platform | **Init deadlock** |

### P2 — Importantes

| # | Problema | Componentes |
|---|----------|-------------|
| [#54189](https://github.com/NousResearch/hermes-agent/issues/54189) | `state.db` cresce sem limite (659MB em 2 semanas) | CLI, Gateway, Sessions |
| [#37044](https://github.com/NousResearch/hermes-agent/issues/37044) | Gateway não expõe reasoning/thinking blocks na API | Gateway, Streaming |
| [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) | `shutdown_mcp_servers()` congela event loop no SIGTERM | Gateway, MCP |
| [#84068](https://github.com/NousResearch/hermes-agent/issues/84068) | MCP stdio falha no Windows (Closed — duplicado) | MCP, Windows |
| [#80405](https://github.com/NousResearch/hermes-agent/issues/80405) | MCP client hang em todos servers stdio no Windows | MCP, Windows |
| [#84088](https://github.com/NousResearch/hermes-agent/pull/84088) | *(PR)* QQBot passive media replies rejeitadas | QQBot |

### P3 — Moderados

| # | Problema | Componentes |
|---|----------|-------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degradado (29.8h) | Skills |
| [#53404](https://github.com/NousResearch/hermes-agent/issues/53404) | `content_hash` instável por ordenação de Paths | Skills |
| [#72775](https://github.com/NousResearch/hermes-agent/issues/72775) | Status drawer trunca texto em largura fixa | Desktop |
| [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) | Notificações de processo podem ser interpretadas como mensagens | TUI, Discord |

### Segurança

| # | Problema | Status |
|---|----------|--------|
| [#84093](https://github.com/NousResearch/hermes-agent/pull/84093) | Vulnerabilidades em pydantic-settings e Pygments | **Corrigido via PR** |
| [#80534](https://github.com/NousResearch/hermes-agent/issues/80534) | A2A bearer token colapsa identidades atrás de proxy | Aberto P3 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com alta demanda ou decisão pendente

| # | Feature | Componente | Status |
|---|---------|-----------|--------|
| [#77221](https://github.com/NousResearch/hermes-agent/issues/77221) | Desktop app com analytics de tokens/custos locais | Desktop | Demanda por exposição de metering existente |
| [#78661](https://github.com/NousResearch/hermes-agent/issues/78661) | Setup wizard com opção de conectar a gateway remoto existente | Desktop | UX gap identificado |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | Telegram Feature Parity — Bot API 10.2 | Telegram | Meta-issue em andamento |
| [#82591](https://github.com/NousResearch/hermes-agent/issues/82591) | EPIC: Kanban zero-authority workers, durable publication, safe reclaim | Cron, Plugins | Decomposição epic |
| [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) | Google Antigravity como provider OAuth first-class | Plugins, Auth | Feature request |
| [#84096](https://github.com/NousResearch/hermes-agent/pull/84096) | *(PR)* Excalidraw editing nativo file-backed | Desktop | Em revisão |
| [#84095](https://github.com/NousResearch/hermes-agent/pull/84095) | Telegram single external send attempts | Telegram | Em revisão |
| [#84074](https://github.com/NousResearch/hermes-agent/pull/84074) | Ambient token endpoint mode para relay | Gateway, Auth | Em revisão |

### Sinais de roadmap implícitos

- **Desktop-first**: 5+ issues e PRs focados em desktop app indicam prioridade em experiência desktop
- **Multi-plataforma**: Atividade significativa em Windows, macOS, Linux (COSMIC/Wayland)
- **Arquitetura limpa**: God-file sharding como política oficial (2026-08)
- **Segurança**: Dependências sendo auditadas e corrigidas proativamente

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas relatadas

1. **Regressão do desktop restart** (#83683)
   - *"WeChat (iLink), QQ bot and Telegram go completely silent until the gateway is manually restarted"*
   - Impacto: Produtividade bloqueada, necessidade de intervenção manual

2. **Crescimento descontrolado do state.db** (#54189)
   - *"DB reached 659MB within 2 weeks containing 938 sessions and 40K messages"*
   - Impacto: Uso de disco, performance degradada

3. **MCP stdio quebrado no Windows** (#80405, #84068)
   - *"hang until the connect timeout (~125s) with an empty error message"*
   - Impacto: Bloqueio completo de workflows baseados em MCP

### Dores de UX/funcionalidade

4. **Áudio de pensamento nauseante** (#84071)
   - *"real-time streaming audio that plays WHILE the model is thinking is making some users physically sick"*
   - Impacto: Retenção de usuários afetada

5. **Desktop sem analytics de custos** (#77221)
   - *"desktop app has no local token/cost analytics surface despite full metering in core"*
   - Impacto: Falta de visibilidade para usuários finais

6. **Telegram init deadlock** (#82627)
   - *"hangs indefinitely at 'Connecting to Telegram (attempt 1/8)'"*
   - Impacto: Inutilização do Telegram no macOS 26

### Cenários de uso destacados

- **Multi-tenant**: Demanda por isolamento de dados entre múltiplos agentes (#34352)
- **Desktop-first workflows**: Setup wizard, analytics, compressão de sessões
- **Integração Telegram**: Feature parity com Bot API 10.2
- **Excalidraw colaborativo**: Workflow de edição nativafile-backed (#84096)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Problema | Criado | Comentários | Notas |
|---|----------|--------|-------------|-------|
| [#27989](https://github.com/NousResearch/hermes-agent/issues/27989) | `/model picker` mostra 0 modelos para azure-foundry | 2026-05-18 | 3 | Provider discovery quebrado há ~3 meses |
| [#37044](https://github.com/NousResearch/hermes-agent/issues/37044) | Gateway não expõe reasoning blocks | 2026-06-01 | 4 | 9 👍 — alta validação comunitária, bloqueia Open WebUI |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | Multi-Tenant isolation | 2026-05-29 | 24 | Em produção há meses sem merge |

### Dependências técnicas abertas

- **Windows MCP stdio**: Duas issues abertas (#80405, #84068), afetando base de usuários Windows
- **macOS Telegram**: Init deadlock reportado em macOS 26 (#82627)
- **COSMIC/Wayland**: Desktop HUD quebrado, sem fallback de `ozone_platform_hint` (#84013)

### Recomendações de priorização

1. **Imediata**: Corrigir P1s — desktop restart regression (#83683) e gateway drain (#82161)
2. **Esta semana**: Merge do security fix #84093 para distribuição
3. **Sprint atual**: Avançar god-file sharding epic (#78647) — 67 comentários indicam consenso sobre direção
4. **Próximo release**: Endereçar Windows MCP stdio (#80405) e state.db unbounded growth (#54189)

---

*Relatório gerado em 2026-08-12. Dados extraídos de NousResearch/hermes-agent via GitHub API.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-12

## 1. Panorama do dia

O projeto PicoClaw manteve alta atividade de desenvolvimento em 12/08/2026, com **7 PRs atualizadas** e **3 issues** manipulada nas últimas 24h. A taxa de atividade indica um ciclo de desenvolvimento ativo, embora nenhuma release tenha sido publicada recentemente. Notably, múltiplos PRs marcados como `[stale]` sugerem necessidade de revisão por mantenedores, enquanto um PR diretamente addressing um bug crítico (#3329) foi submetido no mesmo dia do issue correspondente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões. Recomenda-se monitorar o repositório para eventuais tags de release futuras, especialmente considerando a quantidade de PRs em estado de revisão.

---

## 3. Progresso do Projeto

### PR Merged/Closed (1)

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#1547](https://github.com/sipeed/picoclaw/pull/1547) | fix: merge PR #1466 #1465 | ✅ CLOSED | Consolida correções pendentes de Issues #1466 e #1465, resolvendo debt técnico acumulado desde março/2026 |

### PRs Abertas em Revisão (6)

| # | Título | Autor | Atualização | Prioridade |
|---|--------|-------|-------------|------------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management | j-v | 2026-08-11 | 🔴 Alta |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | genuss | 2026-08-11 | 🟡 Média |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | feat(providers): log prompt cache tokens | vmuliadi-astro | 2026-08-11 | 🟢 Baixa |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix: agent not able to execute shell command | j-v | 2026-08-11 | 🔴 Alta |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | kesku | 2026-08-11 | 🟡 Média |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | fix(line): warn on inert webhook_host | ex-takashima | 2026-08-11 | 🟡 Média |

**Destaque:** PR #3314 resolve um bug crítico onde `customAllowPatterns` não funcionava corretamente para comandos shell permitidos — author j-v demonstra conhecimento profundo do codebase com múltiplas contribuições correlatas (#3316, #3314).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | /clear and session auto-compression don't work in chats routed to non-default agent | 🔵 OPEN | 3 | 0 |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | /list models only shows current model | ✅ CLOSED | 3 | 0 |
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) | line.settings.webhook_host/port never read | 🔵 OPEN | 0 | 0 |

### Análise de Demandas

**Issue #3301 — Bug Crítico de Context Management**
- Autor reporta que dispatch rules para agentes não-padrão pierden contexto de sessão
- Auto-compressão de histórico não funciona para sessões roteadas
- Impacto: Usuários com configurações multi-agente via Discord/Telegram experimentam perda de continuidade
- **Correlação direta com PR #3316** do mesmo autor, indicando que a correção já está em desenvolvimento

**Issue #3294 — Feature Gap no Comando /list models**
- Fechada como stale, mas demonstra expectativa de que `/list models` liste todos os modelos configurados
- Sugere necessidade de documentação clara ou ajuste de comportamento do comando

---

## 5. Bugs e Estabilidade

### Bugs Reportados (2 abertas + 1 fechada)

| Severidade | # | Descrição | Canal | Status |
|------------|---|-----------|-------|--------|
| 🔴 Alta | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Compressão de sessão e /clear falham para agentes roteados via dispatch rules | Discord, Telegram | OPEN |
| 🔴 Alta | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | customAllowPatterns não funcionam para comandos shell | Geral | OPEN (PR) |
| 🟡 Média | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | Configurações webhook do LINE são ignoradas silenciosamente | LINE | OPEN |
| 🟢 Baixa | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | /list models não lista todos os modelos | Telegram | CLOSED |

### Análise de Regressões Potenciais

A Issue #3301 representa uma **regressão funcional** no sistema de dispatch, onde sessões de agentes não-padrão perdem:
1. Histórico de conversa
2. Trigger de auto-compressão
3. Integração com summarization/seahorse bootstrap

Este bug afeta especificamente configurações de produção com múltiplos agentes ou canais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR (5)

| # | Título | Tipo | Valor Agregado |
|---|--------|------|----------------|
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | Log prompt cache tokens | Melhoria | Debugging melhorado para provedores com cache (DeepSeek/Cloudflare) |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | Correção | Suporte estendido para Telegram em modo forum |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Native Exa web search provider | Feature | Provedor de busca alternativo nativo |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | Warn on inert LINE webhook config | DX Improvement | Feedback melhorado para configuração inválida |

### Sinais de Roadmap

1. **Melhoria de Debugging:** PR #3317 adiciona logs para cache tokens, indicando foco em observabilidade
2. **Expansão de Providers:** Integração com Exa (#3299) demonstra interesse em diversificar opções de search
3. **Suporte Telegram Avançado:** Suporte a topics em chats privados (#3315) расширяет用例 para bots de comunidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Perda de contexto em sessões roteadas | 🔴 Alta | Quebra de UX em setups multi-agente |
| Configuração de comandos shell não funciona | 🔴 Alta | Bloqueio de workflowslegítimos |
| Configurações ignoradas silenciosamente | 🟡 Média | Confusão e tempo perdido em debugging |
| Documentação de features não corresponde ao comportamento | 🟡 Média | Expectativas frustradas |

### Cenários de Uso Identificados

1. **Multi-agent via Discord/Telegram:** Usuários configuram dispatch rules para agentes especializados por canal
2. **Bots de comunidade com forum:** Casos de uso com Telegram topics em chats privados
3. **Webhooks LINE:** Integração com sistema de mensagens LINE (features subutilizadas identificadas)

### Indicadores de Satisfação

- ⭐ 0 reações de :+1: nas issues/bugs reportados (indica problemas específicos a usuários individuais, não community-wide)
- Comentários limitados (3 por issue principal) indicam baixa participação em discussões
- 5 PRs abertas demonstram interesse da comunidade em contribuir

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há Tempo

| # | Tipo | Título | Criado | Dias Inativo | Prioridade |
|---|------|--------|--------|--------------|------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR | Add native Exa web search provider | 2026-07-26 | ~17 dias | 🟡 Média |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | PR | routed-agent context management | 2026-08-03 | ~9 dias | 🔴 Alta |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | PR | Support topics in private bot chats | 2026-08-03 | ~9 dias | 🟡 Média |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | PR | Fix shell command execution | 2026-08-03 | ~9 dias | 🔴 Alta |

### Ação Recomendada

**PRs Críticos Pendentes de Review:**

1. **#3314** — Fix para `customAllowPatterns` (existe há 9 dias, autor demonstrou expertise)
2. **#3316** — Correlaciona com bug #3301; revisão conjunto economizaria tempo

**Preocupação:** 4 de 6 PRs marcadas como `[stale]`, indicando necessidade de atenção dos mantenedores para evitar desmotivação de contribuidores.

---

## Métricas de Saúde do Projeto (2026-08-12)

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 2 | ✅ Normal |
| Issues fechadas (24h) | 1 | ✅ Bom |
| PRs abertas (24h) | 6 | 🔶 Alta |
| PRs merged (24h) | 1 | ✅ Normal |
| Releases | 0 | ⚪ Sem atividade |
| Ratio aberto/fechado (issues) | 2:1 | ⚠️ Pendente |
| PRs stale | 4 de 6 | 🔴 Atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub para github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
## Data: 2026-08-12

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade intensa** nas últimas 24h, com 50 PRs e 23 issues atualizados, embora **nenhuma release nova** tenha sido publicada. A atividade está concentrada em **corrigir bugs críticos do loop do agente** (context window eviction, retry disposition, token estimation), **melhorias no sistema de memória** (target alias resolution), e **evoluções arquiteturais significativas** como o epic de agent loops plugáveis (#7482) e o modelo de canais unificado (#7477). A contributionship permanece alta com múltiplos PRs de tamanho XL sendo desenvolvidos simultaneamente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em período de intenso desenvolvimento interno, com 23 PRs em merge/fechamento aguardando consolidação em uma futura release. Recomenda-se monitorar o repositório para announcement de próxima versão.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | fix(loop): retain accepted task across context eviction | Corrige perda silenciosa de tarefas durante evict de contexto; fail-fast com `BudgetExceeded` |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feat(llm): explicit Anthropic cache_control breakpoints | P0 do programa pi-harness; melhora eficiência de cache em ambos transports (rig/OAuth) |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | fix(webui): reveal long conversation titles on hover | UX improvement; adiciona componente `MarqueeText` para títulos longos |
| [#7500](https://github.com/nearai/ironclaw/pull/7500) | fix(disclosure): parallelize read-only bridge lookups | Melhora performance de `tool_search`/`tool_describe` com execução paralela |
| [#7284](https://github.com/nearai/ironclaw/pull/7284) | fix(webui): bound SSE reconnect storms | Estabiliza reconexões SSE com backoff jittered (1/2/4/8/16/30s) |
| [#7511](https://github.com/nearai/ironclaw/pull/7511) | [Ignore] (CLOSED) | PR de manutenção/limpeza |
| [#7317-merged](https://github.com/nearai/ironclaw/issues/7317) | Doc-Truth Verification Pipeline | Proposta de pipeline para sincronizar docs com breaking changes |

**Destaque:** O PR [#7504](https://github.com/nearai/ironclaw/pull/7504) (OPEN) implementa compactação de contexto na eviction em vez de perda silenciosa — aguardando merge.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) | Epic: Pluggable agent loops — ACP executor, kernel architecture | 3 | Epic, High Risk |
| [#7317](https://github.com/nearai/ironclaw/issues/7317) | Doc-Truth Verification Pipeline | 3 | Enhancement |
| [#7405](https://github.com/nearai/ironclaw/issues/7405) | Improve deferred tool discovery with complete signatures | 2 | Epic, v1.3.0 |
| [#7505](https://github.com/nearai/ironclaw/issues/7505) | Memory: target-alias resolution move to domain layer | 1 | Bug |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) | fix(turn-runner): retry_disposition() dead code | 1 | Bug, Reborn |
| [#7488](https://github.com/nearai/ironclaw/issues/7488) | fix(disclosure): bridge tools hardcoded Exclusive serialize | 1 | Bug, Reborn |
| [#7487](https://github.com/nearai/ironclaw/issues/7487) | fix(disclosure): tool_search marks without returning schemas | 1 | Bug, Reborn |

### Análise dos Demandas

**Arquitetura:**
- **Epic #7482** representa mudança paradigmática: IronClaw como "kernel" (scheduling, tenancy, secrets) enquanto loops de agente e tools se tornam off-the-shelf ACP agents. Impacto: alto risco, alta recompensa.
- **Epic #7038** (Storybook + Design System) continua em progresso com PR backend #7498.

**Tooling & LLM:**
- Melhorias em deferred tool discovery (#7405) visam reduzir round-trips e melhorar catalog awareness.
- Cache control explícito (#6984) já merged (#6997) — P0 para performance.

**Documentação:**
- Proposta #7317 busca resolver problema crítico: breaking changes sem update de docs correspondente.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0/P1 (Críticos)
| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#7484](https://github.com/nearai/ironclaw/issues/7484) | Context window silently evicts task — 128-message clamp | Agent, Loop | OPEN |
| [#7485](https://github.com/nearai/ironclaw/issues/7485) | Token estimator double-counts ASCII, halving effective context | Agent, Loop | OPEN |
| [#7294](https://github.com/nearai/ironclaw/issues/7294) | Agent remembers Telegram routine from wrong scope | QA Bug (Railway) | CLOSED |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | Agent falsely claims GitHub is already connected | QA Bug (Railway) | CLOSED |
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | Agent hallucinates automation status | QA Bug (Railway) | CLOSED |

#### P2 (Bug Bash)
| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP extension startup gives confusing endpoint prompt | Extension | OPEN |
| [#7476](https://github.com/nearai/ironclaw/issues/7476) | classify_delivery_outcome ignores Failed's vendor_message_refs | Product | OPEN |
| [#7473](https://github.com/nearai/ironclaw/issues/7473) | post_notice → release_connect_nudge collapses delivery status | Product | OPEN |

#### Bugs Reborn (Corrigidos/Em Progresso)
| # | Título | Status |
|---|--------|--------|
| [#7505](https://github.com/nearai/ironclaw/issues/7505) | Memory target-alias resolution em domain layer | OPEN → [PR #7512](https://github.com/nearai/ironclaw/pull/7512) |
| [#7488](https://github.com/nearai/ironclaw/issues/7488) | Bridge tools Exclusive serialize | CLOSED |
| [#7487](https://github.com/nearai/ironclaw/issues/7487) | tool_search marks without schemas | CLOSED |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) | retry_disposition() dead code | OPEN |
| [#7486](https://github.com/nearai/ironclaw/issues/7486) | Typed no-progress escape false-positives | OPEN |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | Epic: Make Reborn durable state profile-agnostic | OPEN → [PR #7456](https://github.com/nearai/ironclaw/pull/7456) |

**Observação:** QA bugs da Railway (#7294, #7247, #7246) indicam problema recorrente de "alucinação de estado" onde o agente faz afirmações não verificadas sobre conexões e automações.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Escopo | Sinais de Roadmap |
|---|--------|--------|-------------------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) | Epic: Pluggable agent loops | Agent, Tool, Kernel | Transformação arquitetural |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | Epic: Reborn profile-agnostic storage | Workspace, Reborn | Migração de estado |
| [#7496](https://github.com/nearai/ironclaw/issues/7496) | Host-mediated IdentyClaw Passport | Builtin, Tool | Integração de identidade |
| [#7489](https://github.com/nearai/ironclaw/issues/7489) | result_read 24 KiB preview + read-before-edit gate | Tool/Builtin | Melhoria de coding tools |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) | ACP serve command with streaming + cancel | CLI | Extensibilidade |

### Sinais de v1.3.0
- **Epic #7405**: Deferred tool discovery improvements
- **Epic #7038**: Storybook + Design System

### Extensibilidade
- **ACP CLI** (#7513): Permite conexão de tools externas via `--acp --stdio`
- **Channel unification** (#7477): Um `ChannelAdapter` por canal (web, Slack, Telegram)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | evidência | Severidade |
|-----|-----------|------------|
| **Memória não persiste entre conversas** | #7185 (base para #7365) | Alta |
| **Breaking changes sem documentação** | #7317 | Alta |
| **Agente alucina estado de conexões** | #7246, #7247, #7294 | Alta |
| **Tool discovery causa round-trips** | #7405 | Média |
| **GitHub MCP extension confuso** | #7508 | Média |
| **Contexto perdido em conversas longas** | #7484 | Alta |

### Cenários de Uso Emergentes
- **Automations**: Usuários configuram rotinas Telegram/BTC news que precisam de estado persistente (#7246, #7294)
- **Coding tools**: Leitura de arquivos grandes (24 KiB ceiling #7489) e edição after-read
- **Cross-conversation memory**: Persistência de preferências do usuário (#7365)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Ação

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic: Storybook + Design System | 2026-08-03 | OPEN, Epic | Alta (v1.3.0) |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | Epic: Reborn profile-agnostic | 2026-08-10 | OPEN, Epic | Alta |
| [#7496](https://github.com/nearai/ironclaw/issues/7496) | IdentyClaw Passport feature | 2026-08-11 | OPEN | Média |
| [#7476](https://github.com/nearai/ironclaw/issues/7476) | Delivery outcome ignores vendor refs | 2026-08-11 | OPEN | Média |
| [#7473](https://github.com/nearai/ironclaw/issues/7473) | Connect nudge duplicates | 2026-08-10 | OPEN | Média |

### PRs Abertos aguardando review

| # | Título | Tamanho | Risco | Status |
|---|--------|---------|-------|--------|
| [#7365](https://github.com/nearai/ironclaw/pull/7365) | feat(memory): memory-save guidance | XL | Low | OPEN |
| [#7274](https://github.com/nearai/ironclaw/pull/7274) | fix(llm): preserve Anthropic cache across tool promotion | XL | Low | OPEN |
| [#7353](https://github.com/nearai/ironclaw/pull/7353) | feat(llm): keep deferred tool promotion cache-stable | XL | Low | OPEN |
| [#7477](https://github.com/nearai/ironclaw/pull/7477) | feat(channels): unified channel model | XL | Medium | OPEN |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): make durable storage profile-agnostic | XL | Medium | OPEN |
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | fix(processes): lease expiry recovers safe runs | XL | Low | OPEN |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas (24h) | 13 | Neutra |
| PRs abertos (24h) | 27 | Alta |
| PRs mergeados (24h) | 23 | Alta |
| Taxa de resolução de bugs | ~50% (10/23) | Positiva |
| Epic items em progresso | 3+ | Alta atividade |
| Contribuidores novos | 2 | Positiva |

**Conclusão:** IronClaw demonstra **saúde robusta** com alta atividade de desenvolvimento, resolução ativa de bugs críticos (especialmente no loop do agente e sistema de memória), e progresso em épicos arquiteturais de longo prazo. A atenção aos QA bugs de Railway indica foco em qualidade de produção.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-08-12

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 12 de agosto de 2026, com 21 issues e 48 PRs atualizados nas últimas 24h. A versão **v2.1.0-beta.3** foi recém-lançada, sinalizando progresso significativo rumo à release estável. O ritmo de merges é saudável — 24 PRs fechados/merged nas últimas 24h, demonstrando capacidade de code review eficiente. A comunidade demonstra engajamento diversificado, com debates técnicos substanciais (até 10 comentários em issues individuais) e colaboração em múltiplas frentes: frontend, backend, canais de mensageria e usabilidade. A presença de issues de segurança e bugs críticos indica maturidade no processo de QA.

---

## 2. Lançamentos

### ✅ Nova Release: v2.1.0-beta.3

**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3

**Mudanças destacadas:**

| PR | Descrição | Autor |
|----|-----------|-------|
| #6783 | Files workspace blog | @zhaozhuang521 |
| #6723 | Fix provider: expire stale capability cache entries and clear on model switch | @ningblue |

**Status:** Release em verificação de instalação (Issue #6914). Critérios de aprovação incluem 4 checkpoints obrigatórios com deadline em 2026-08-11 15:45 UTC.

> ⚠️ **Atenção para usuários de desktop:** A versão beta.1 apresentou regression crítica (Issue #6697) — subprocessos Python crashavam com `ModuleNotFoundError` relacionado a `PYTHONHOME`. Verificar se beta.3 resolve o problema.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Relevantes (24h)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| **#6915** | fix | Reparo em previews de arquivos e styling dark mode | UX Desktop/Web |
| **#6911** | feat | Unificação da experiência de code blocks com syntax highlighting, LaTeX preview e Mermaid | Experiência de usuário |
| **#6913** | fix | Melhoria na ativação de elementos macOS para Computer Use | Desktop macOS |
| **#6909** | feat | Aviso quando um bot já está sendo usado por outro agente | Prevenção de conflitos |
| **#6891** | feat | Melhoria em workflows de input nativo | Desktop Windows |
| **#6875** | chore | Atualização das notas de release v2.1.0 | Documentação |
| **#6907** | feat | Endpoints customizáveis para gateways IM (Feishu, QQ, WeCom, XiaoYi, Yuanbao) | Integração corporativa |
| **#6772** | feat | Embedding hot updates e Daily Paper para ReMe Light | Sistema de memória |
| **#6564** | fix | Flush pending turns antes de compressão de memória | Estabilidade de contexto |

### PRs Abertos em Progresso

| PR | Tipo | Descrição | Status |
|----|------|-----------|--------|
| **#6779** | refactor | Alinhar Scroll e memory com AgentScope lifecycle | Under Review |
| **#6880** | feat | Unificar apps, plugins e skills no marketplace | Under Review |
| **#6830** | fix | Preservar estado auto-memory através de compressão | Em revisão |
| **#6874** | feat | Timeout configurável para chamadas MCP | Em revisão |
| **#6877** | feat | Persistir geometria da janela desktop | Em revisão |
| **#6817** | feat | Integrar AnySearch como provider de busca | First-time contributor |
| **#6302** | feat | Unificar provider discovery, model metadata e routing | Em progresso |
| **#6719** | feat | Adicionar persistent workspace artifact cards | Em revisão |
| **#5992** | feat | Per-session model overrides | First-time contributor |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Tema |
|-------|------|-------------|------|
| **#6732** | Bug | 10 | MCP tools失效间歇性问题 |
| **#6893** | Feature | 7 | Renderização de fórmulas LaTeX/KaTeX |
| **#5790** | Bug | 4 | Loading animation não desaparece após resposta do Agent |
| **#6882** | Question | 3 | Integração com CopilotKit |

### Análise dos Temas

**🔴 LaTeX/KaTeX (Issues #6893, #5453, #4756)**  
Três issues separadas sobre a mesma demanda — **renderização de fórmulas matemáticas**. Usuários relatam que QwenPaw exibe código cru ao invés de fórmulas renderizadas. Um PR (#6911) já implementa suporte a blocos LaTeX. Expectativa: feature deve estar disponível na v2.1.0.

**🔴 MCP Tools Reliability (Issue #6732)**  
Bug crítico: ferramentas MCP param de funcionar após algumas horas, requerendo restart do container Docker. Solução temporária documentada, mas root cause precisa ser addressado. Afeta usuários de pipelines automatizados.

**🟡 Integração CopilotKit (Issue #6882)**  
Demanda de comunidade para integrar com ecossistema CopilotKit. Indica interesse em interoperabilidade com outras plataformas de agentes.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos

| Issue | Título | Status | Detalhes |
|-------|--------|--------|----------|
| **#6697** | v2.1.0b1 desktop injects PYTHONHOME → subprocess crash | CLOSED | Encoding ModuleNotFoundError em todo subprocess Python |
| **#6828** | Console repaint infinito (~20% CPU) por animações CSS | CLOSED | Afeta idle state — jank visual |
| **#6885** | Console UI crash com Chinese IME durante agent run | OPEN | Message queue unusable com input method |
| **#6916** | Plugins podem criar cron jobs e injetar mensagens sem aprovação | OPEN | **Security issue** — gravidade média-alta |

#### 🟠 Altos

| Issue | Título | Status | Detalhes |
|-------|--------|--------|----------|
| **#6883** | Notas em subpastas agrupadas em data errada no Daily page | OPEN | Bug de grouping de arquivos |
| **#6871** | Timestamps deslocados por +8h após re-render | CLOSED | Timezone rendering bug |
| **#6722** | Background forked subagent reporta completion mesmo com falha | CLOSED | Worktree finalization |

#### 🟡 Médios

| Issue | Título | Status | Detalhes |
|-------|--------|--------|----------|
| **#6901** | Links GitHub duplicados na interface | CLOSED | UI glitch menor |
| **#6910** | Invalid channel payloads retornam HTTP 500 | OPEN | Já tem PR #6912 em revisão |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentes

| Issue | Feature | Justificativa | Viabilidade |
|-------|---------|---------------|-------------|
| **#6917** | Agent投递报告/消息进收件箱 (Inbox) | Necessidade de notificação estruturada sem scroll | Boa — backend já existe |
| **#6900** | Isolar diretórios de projeto do agent workspace | Melhor organização e segurança | Implementada em PR |
| **#4154** | Font size ajustável no Desktop + background de sessão ativa | Ergonomia para uso prolongado | Aprovada, em desenvolvimento |
| **#6882** | Integração CopilotKit | Interoperabilidade com ecossistema | Needs assessment |

### Sinais de Roadmap

1. **Unificação do marketplace** (PR #6880) — Apps, plugins e skills em `/market` com tabs
2. **Provider unificado** (PR #6302) — Discovery, metadata, routing e controles de agent centralizados
3. **Per-session model overrides** (PR #5992) — Flexibilidade por conversa
4. **Workspace artifact cards** (PR #6719) — Files criados/modificados visíveis como cards

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Confiabilidade MCP** | Ferramentas param de funcionar após horas de uso | Múltiplos reports |
| **UX Desktop** | Font pequeno, animações causando CPU alto, problemas com IME chinês | Relatos recorrentes |
| **Documentação** | Falta de exemplos para integrações (CopilotKit) | Questions |
| **Performance** | Loading spinner persistente, repaint infinito | Reports técnicos |

### Cenários de Uso Emergentes

- **Agentes em produção:** Usuários integrando com QQ Bot para automação de workflows (#6897) — feedback sobre rate limiting
- **Ambiente corporativo:** Necessidade de endpoints customizáveis para gateways privados (#6907)
- **Estudos técnicos:** Usuários trabalhando com fórmulas LaTeX em conversas com agentes

### Satisfação

- ✅ Comunidade ativa e respondendo issues rapidamente (média de <24h para primeira resposta)
- ✅ Release cycle acelerado (beta.3 em 1 dia após beta.2)
- ⚠️ Bugs de estabilidade em Desktop precisam de atenção urgente antes da release stable

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >3 dias

| Issue | Título | Age | Prioridade |
|-------|--------|-----|------------|
| **#6917** | Agent投递进收件箱 | <1 dia | Média |
| **#6916** | Security: Plugins podem injetar mensagens silenciosamente | <1 dia | **Alta** |
| **#6883** | Daily page grouping bug | 2 dias | Média |

### PRs Aguardando Review

| PR | Título | Age | Bloqueia |
|----|--------|-----|----------|
| **#6779** | Refactor context lifecycle | 5 dias | Feature flags |
| **#6880** | Marketplace unificado | 2 dias | UX |
| **#6817** | AnySearch integration | 4 dias | First-time contributor |

### Dívida Técnica Identificada

1. **Dual context implementation:** Native/Scroll estratégia duplicada (PR #6779 addressa)
2. **Memory state persistence:** Problemas com recovery após restart/compression (PR #6830)
3. **Plugin permission model:** Gap de segurança em #6916 requer arquitetura nova

---

## Métricas Resumo (24h)

| Métrica | Valor |
|---------|-------|
| Issues atualizadas | 21 |
| PRs atualizados | 48 |
| PRs merged/closed | 24 |
| Novas releases | 1 |
| Bugs críticos abertos | 2 |
| Security issues | 1 |
| Issues com >5 comentários | 2 |

---

*Relatório gerado em 2026-08-12 com base em dados do GitHub do projeto CoPaw/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-12

## 1. Panorama do Dia

O ecossistema ZeroClaw demonstra **atividade intensa e multifacetada** em 12 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A comunidade está engajada principalmente em debates técnicos de alto nível: **sete RFCs** (Requests for Comments) dominam as discussões com dezenas de comentários, evidenciando uma fase madura de planejamento arquitetural. Não houve lançamentos hoje, sugerindo que a equipe está em ciclo de integração e revisão antes da próxima release. A proporção de 46 PRs abertos versus apenas 4 fechados indica um pipeline de merge em backlog, não estagnação — muitos são contribuições recentes (1-3 dias) ainda em revisão. O projeto demonstra foco claro em **segurança, interoperabilidade (Kanban, LSP, Chat Completions)** e robustez operacional.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.** O projeto não registrou novos tags ou publishing de versões neste período. A ausência de releases não indica estagnação — a análise dos PRs abertos revela múltiplas contribuições de manutenção e segurança em estágio avançado de revisão, sugerindo que uma release pode estar iminente.

> ⚠️ **Sinal de gestão de releases:** A issue tracker [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) propõe reformular o próprio processo RFC, indicando que a equipe reconhece gargalos no fluxo de desenvolvimento e busca otimizar ciclos de entrega.

---

## 3. Progresso do Projeto

As **4 PRs fechadas/merged** nas últimas 24h representam avanços pontuais mas significativos:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#9907](https://github.com/zeroclaw-labs/zeroclaw/pull/9907) | Sync política de waiver de auditoria de segurança | Baixo risco, manutenção de compliance |
| [#9931](https://github.com/zeroclaw-labs/zeroclaw/pull/9931) | Limpeza de screenshots temporários (desktop) | UX e gerenciamento de recursos |
| [#9920](https://github.com/zeroclaw-labs/zeroclaw/pull/9920) | Bump dependência rust-cache (Dependabot) | CI/CD, atualização de tooling |
| [#9927](https://github.com/zeroclaw-labs/zeroclaw/pull/9927) | Requerer nome do gatilho RFC ao arquivar | Processos internos, governança |

### PRs em destaque (abertos, aguardando review):
- **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** — `feat(runtime): anchor context compaction to model window ratio` — Adiciona `runtime_profiles.<name>.context_compact_ratio`, permitindo que usuários controlem compaction de contexto por proporção da janela do modelo (em vez de budgets absolutos). Mudança arquitetural com impacto em todos os provedores. **Priority: P1, Size: XL**.
- **[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** — `fix(cron): bound agent job runs with wall-clock timeout` — Corrige deadlock em jobs cron: jobs que travavam (provider sem resposta, tool travada) mantinham lock SQLite até timeout. **Priority: P1, Size: XL**.
- **[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)** — `fix(multimodal): add pixel-level image validation` — Adiciona `validate_image_content()` que decodifica completamente imagens para validar bytes antes de enviar ao provedor. Mitiga o bypass de validação por header sniffing. **Priority: P1, Size: M**.

---

## 4. Temas Quentes da Comunidade

### RFCs com maior engajamento (comentários e momentum):

| Issue | Título | Comentários | Tema Central |
|-------|--------|-------------|--------------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode v1 — bounded foreground Matrix work | 19 | Modo de execução durável para objetivos multi-turn |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | ZeroClaw Chat Completions profile | 18 | Interoperabilidade com OpenAI SDK, LangChain, Continue.dev |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation tier para shell + Claude Code-style policy | 17 | Segurança operacional, confirmação de comandos de risco |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Pluggable inbound authentication | 14 | Arquitetura de autenticação extensível |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue tracker | 13 | Governança e rastreamento de decisões |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) **[CLOSED]** | Token consumption e cost management | 13 | Gestão de custos para workloads productizados |

### Análise dos temas dominantes:

**🔐 Segurança (4 dos 6 top RFCs):** A comunidade demonstra preocupação prioritária com segurança em múltiplas camadas — autenticação plugável (#7141), confirmação de comandos shell (#7155), pipeline de decisões de segurança (#7142), e definição de contrato de permissões SOP (#9598). Este é um **padrão consistente** de maturidade do projeto.

**🔗 Interoperabilidade (#8603):** A demanda por Chat Completions API nativa é significativa. Clientes como Open WebUI, LobeChat, Continue.dev, Aider, LangChain e o SDK OpenAI poderiam integrar-se nativamente, eliminando camadas de adaptação. Este RFC tem potencial de **expandir drasticamente a base de usuários**.

**🎯 Operações de longo prazo (#8303):** O "Goal mode" visa permitir que agentes persigam objetivos duráveis além de um único turno, algo essencial para automation robusta. A comunidade está refinando escopo após feedback de manutenção.

---

## 5. Bugs e Estabilidade

### Bugs de alta severidade (P1) reportados/trackeados:

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) | Conversão WebP decodifica sem limite antes do validador de imagem — possível DoS | S2 (degraded) | Aceito |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | Delegate bounded resolve filesystem para workspace do delegador, não do próprio | S2 (degraded) | Aceito |
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | daemon reload não funciona em SIGUSR1, e warning de segurança orienta sinal que mata o daemon | S2 (degraded) | Aceito |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) **[CLOSED]** | Docker Compose gateway permanece bound a loopback mesmo com porta publicada | S1 (workflow blocked) | Closed |

### Bugs de segurança em PRs abertas:

- **[#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)** — Evita aninhamento de sandbox Docker dentro de runtime Docker. Corrigido preventivamente.
- **[#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635)** — Corrige parsing de subcomandos git: `git -C <path> <verb>` era mal interpretado pelo classificador de risco, expondo comandos globais indevidos.

### Métricas de estabilidade:
- **3 bugs P1 ativos** em status "accepted", aguardando PR ou merge.
- **2 bugs P1 em PR** (#9402, #9635) demonstram processo responsivo.
- **Nenhum bug P0** (crítico/production down) reportado nas últimas 24h.
- **Regressão confirmada:** A issue #9768 indica uma regressão documentada (SIGUSR1), classed S2.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo (PRs abertas):

| PR | Feature | Prioridade | Tamanho |
|----|---------|------------|---------|
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | VoiceHost WebSocket bridge para ASR externo (FunASR/SenseVoice) | — | XL |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Suporte nativo Hailo-Ollama | — | XL |
| [#9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326) | Signal Note to Self sync | P2 | XL |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix single-message progress drafts | P2 | XL |
| [#9930](https://github.com/zeroclaw-labs/zeroclaw/pull/9930) | RPC `sops/run-detail` com resultados completos | — | — |

### Features em RFC avançado (aceitas ou em progresso):

| Issue | Feature | Status | Impacto |
|-------|---------|--------|---------|
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP milestone tracker — daemon-owned SOP control plane | In-progress | Core workflow |
| [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) | SOP pane MVP — status visibility (list + live icons) | In-progress | UX/Dashboard |
| [#8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) | Response-cache policy para contexto volátil | Discussão | Performance |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Opt-in LSP support para ZeroCode | Needs-author-action | Coding workflows |

### Sinais de roadmap (demandas recorrentes):
- **Context compaction por ratio de janela** (#9535) — indica foco em eficiência de tokens.
- **Suporte multi-canal unificado** (#9428, #9523, #9326) — Bluesky, Reddit, Signal, Email, WhatsApp recebendo atenção.
- **Deprecação** (#9644) — Lucid memory connector marcado para remoção em v0.9.0.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas nas issues:

**🔴 Operacionais:**
- Jobs cron travando e travando locks de banco (#9320) — impacta automações críticas.
- Docker Compose com binding inesperado (#9035) — configuraço inicial dolorosa.
- Delegate bounded com erro de workspace (#9872) — segurança comprometida em cenários de delegação.

**🟡 Usabilidade:**
- Comandos shell sem confirmação de alto risco (#7155) — demanda por padrões como Claude Code.
- RFCs lentos e onerosos (#9496) — comunidade identificando fricção no próprio processo de governança.
- Drift de slash commands entre web UI, TUI e runtime (#7929) — inconsistência de UX.

**🟢 Oportunidades:**
- Custo de token (#2269, closed) — usuários pedindo formas de controlar gastos em production.
- LSP para coding (#5907) — desenvolvedores querendo reduzir hallucination.
- Chat Completions API (#8603) — demanda de mercado por integração facilitada.

### Satisfação inferred:
- **3 issues fechadas/resolvidas** nas últimas 24h demonstram responsividade.
- RFCs com múltiplas revisões (ex: #7141 Rev 8, #7142 Rev 6) indicam processo colaborativo maduro.
- Presença de "distinguished contributor" labels em PRs #9402, #9320, #9326, #9523 sugere comunidade engajada e confiável.

---

## 8. Backlog que Merece Atenção

### Issues sem movimento recente (stale ou aguardando ação):

| Issue | Título | Criado | Status | Notas |
|-------|--------|--------|--------|-------|
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | Host-architecture policy para emulated installs | 2026-05-14 | Needs-author-action | Arquitetura, P3 |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-validated memory consolidation | 2026-05-29 | Needs-maintainer-review | Memory, P2 |
| [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) | Derived capability readiness para agent guidance | 2026-06-26 | Blocked | P3, aguardando upstream |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) | Apply security policy sem daemon reload | 2026-06-17 | Needs-maintainer-review | Segurança, P3 |

### Riscos de backlog:
- **RFCs "needs-author-action"** com mais de 30 dias sem resposta do autor (#6653, #6998, #9598, #9464, #9323, #8367) podem representar escopo não validado ou perda de interesse do autor original.
- **Issues bloqueadas** (#8367 blocked, #9598 blocked) indicam dependências não resolvidas que podem atrasar milestones.
- **Processo RFC (#9496)** em discussão pode ser auto-referencial: a reformulação do próprio processo ainda está em debate.

### Recomendações:
1. **Triagem de stale issues** — manterers deveriam marcar para close ou reassign issues >60 dias sem resposta do autor.
2. **Revisão de bloqueios** — #9598 e #8367 parecem ter dependências claras; desbloquear movendo escopo pode destravar progresso.
3. **Comunicação de roadmap** — a ausência de releases e o alto volume de RFCs sugere que a comunidade se beneficiaria de um roadmap público mais transparente sobre prioridades de merge.

---

## Métricas Consolidada do Dia

| Dimensão | Valor | Observação |
|----------|-------|------------|
| Issues ativas | 39 | Alta |
| PRs abertos | 46 | Pipeline ativo |
| PRs merged/closed | 4 | Fluxo de merge em curso |
| Releases | 0 | Sem publicação |
| Bugs P1 ativos | 3 | Estabilidade OK |
| RFCs em debate | 7+ | Maturidade de design |
| Features P1 em PR | 3+ | Pipeline saudável |

**Veredicto de saúde:** ZeroClaw demonstra **saúde operacional robusta** com foco em segurança, interoperabilidade e robustez operacional. A atividade intensa em RFCs é sinal de projeto maduro e bem governado, não de desordem. O pipeline de PRs mostra momentum consistente, e bugs de alta severidade estão sendo tratados responsivamente. A principal área de atenção é o backlog de issues sem resposta — hygiene de triagem poderia acelerar a percepção de progresso pela comunidade.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*