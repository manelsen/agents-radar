# Resumo diário do ecossistema de agentes de IA 2026-06-11

> Issues: 0 | PRs: 7 | Projetos cobertos: 7 | Gerado em: 2026-06-10 21:55 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-06-11

---

## 1. Panorama do Dia

O projeto NullClaw apresenta alta atividade de desenvolvimento no dia de hoje, com **7 Pull Requests atualizadas** nas últimas 24 horas — 4 abertas e 3 já merged ou fechadas. Não houve novas issues abertas, releases publicadas ou issues fechadas, indicando que a equipe está focada em finalizar melhorias internas. Os PRs em andamento concentram-se em correções de bugs críticos (supressão de logs de inicialização, correção de vazamentos em testes, atribuição de deliveries cron) e configurabilidade do sistema. O projeto demonstra maturidade operacional, com trabalho contínuo em estabilidade e DX (developer experience).

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O último release disponível não foi detalhado nos dados atuais. Recomenda-se consultar a aba [Releases do repositório](https://github.com/nullclaw/nullclaw/releases) para informações sobre versões mais recentes.

---

## 3. Progresso do Projeto

Três PRs foram fechadas/merged hoje, representando avanços concretos:

| PR | Tipo | Resumo | Impacto |
|---|---|---|---|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | Fix | Rejeitar padrões ISO de data/hora como falsos-positivos em detecção de telefones | **Estabilidade** — Elimina vazamento de dados sensíveis em logs por correspondência errônea |
| [#946](https://github.com/nullclaw/nullclaw/pull/946) | Fix | Filtrar ferramentas no prompt de sistema por `tool_filter_groups` | **Segurança/DX** — Evita exposição desnecessária de ferramentas dinâmicas via API textual |
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | Feature | Adicionar Evolink como provider OpenAI-compatible | **Extensibilidade** — Suporte a multi-model gateway (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) |

### Destaque: Evolink Provider (#947)
Contribuição externa da equipe EvoLinkAI que adiciona suporte a um gateway multi-modelo com autenticação Bearer-token. Integração direta com a API OpenAI-compatible do NullClaw, sem necessidade de adaptações no código consumidor.

---

## 4. Temas Quentes da Comunidade

Não há issues ou PRs com comentários ou reações significativas registrados nas últimas 24h.

**Análise histórica provável:** A ausência de engajamento significativo em comments/ reactions pode indicar:
- PRs ainda recentes (criadas em 2026-06-10) sem tempo para review
- Comunidade pequena ou pouco ativa em discussões abertas
- Fluxo de trabalho onde reviews acontecem internamente via outros canais

**Ação recomendada:** Monitorar os PRs abertos para receber feedback da comunidade nos próximos dias.

---

## 5. Bugs e Estabilidade

Quatro PRs abertas tratam de correções de bugs, indicando foco em estabilidade:

### Crítico
| PR | Bug | Severidade |
|---|---|---|
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | Logs de inicialização do agente sendo expostos como saída do agente via stderr | **Alta** — Vazamento de informações internas para canais |

### Alto
| PR | Bug | Severidade |
|---|---|---|
| [#948](https://github.com/nullclaw/nullclaw/pull/948) | Atribuição incorreta de delivery cron ao canal/conta de origem | **Alta** — Rastreamento de ações comprometido |
| [#950](https://github.com/nullclaw/nullclaw/pull/950) | Vazamento de recursos em testes por alocações antes de probe de porta | **Alta** — Testes instáveis, resource leaks |

### Médio
| PR | Bug | Severidade |
|---|---|---|
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | `queue_mode` não configurável via config.json | **Média** — DX reduzido, falta de idempotência |

---

## 6. Pedidos de Features e Sinais de Roadmap

Nenhuma feature request aberta foi criada nas últimas 24h. No entanto, o PR #949 indica demanda por **configurabilidade do queue_mode**, sugerindo que o roadmap pode incluir:

- Campo `agent.default_queue_mode` em `config.json`
- Consolidação do enum `QueueMode` em `config_types.zig`
- Padrão "latest" para novos sessions

O PR #947 (Evolink) adiciona implicitamente ao roadmap:
- Suporte a mais providers OpenAI-compatible
- Multi-model gateway support

---

## 7. Resumo de Feedback dos Usuários

Não há feedback direto de usuários (issues ou comentários) registrado nas últimas 24h.

**Sinais inferidos dos PRs:**

| Dor/Feedback | Evidência |
|---|---|
| Logs de inicialização expostos como output do agente | #951 |
| Dificuldade em configurar queue_mode | #949 |
| Atribuição incorreta de ações cron | #948 |
| Testes instáveis por resource leaks | #950 |
| Necessidade de suporte a mais providers de IA | #947 |

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Prioridade |
|---|---|---|---|---|
| Supressão de logs stderr em falhas de agente | PR #951 | <1 dia | Aberta | ⚡ Alta |
| Configurabilidade queue_mode | PR #949 | <1 dia | Aberta | 🔧 Média |
| Correção atribuição cron delivery | PR #948 | <1 dia | Aberta | ⚡ Alta |
| Fix resource leak em gateway tests | PR #950 | <1 dia | Aberta | ⚡ Alta |

**Nenhum item de backlog antigo identificado** — todos os PRs ativos têm menos de 48h, indicando processo de triagem e review eficiente.

---

## Métricas Resumidas (2026-06-11)

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 0 |
| PRs ativas (24h) | 4 abertas + 3 fechadas |
| Releases (24h) | 0 |
| PRs com alta severidade | 3 |
| Novos providers | 1 (Evolink) |
| Backlog crítico | 0 (tempo > 7 dias) |

**Veredicto de Saúde:** ✅ Projeto em atividade saudável, com ciclo de review curto e foco em estabilidade e extensibilidade. Nenhum indicador de Technical Debt acumulado ou problemas crônicos detectados.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-11  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade generalizada** em 11 de junho de 2026, com todos os sete projetos em ritmo intenso de desenvolvimento. A liderança de volume é compartilhada entre Hermes Agent, IronClaw, CoPaw e ZeroClaw (cada um com 50+ PRs/issues atualizados em 24h), enquanto NullClaw demonstra maturidade com ciclo de review curto e foco em estabilidade. Constata-se uma tendência clara de convergência arquitetural: todos os projetos investem em multi-provider support, segurança reforçada (RBAC, MCP policies, approval gates) e melhoria de experiência de desktop/WebUI. A única release正式published foi CoPaw (v1.1.11), enquanto IronClaw apresenta um gap crítico de 3 versões em crates.io. ZeroClaw lidera em severidade de bugs (6 S0-S1), contrastando com NullClaw que mantém zero backlog crítico.

---

## 2. Comparação de Atividade

| Projeto | PRs (24h) | Issues (24h) | Releases (24h) | Bugs Críticos | Saúde | Observações |
|---------|-----------|--------------|----------------|--------------|-------|-------------|
| **NullClaw** | 7 (3 merged) | 0 | 0 | 3 alta | ✅ Excelente | Ciclo curto, sem backlog antigo |
| **NanoBot** | 32 (19 merged) | 9 (6 closed) | 0 | 1 alta | 🟡 Boa | Alta resolução, regressão em stream |
| **Hermes Agent** | 50 | 50 | 0 | 4 P1 | 🟡 Boa | Volume alto, 2 P1 ainda abertas |
| **PicoClaw** | 10 (3 merged) | 3 (1 closed) | 1 nightly | 1 alta | 🟡 Boa | Compatibilidade Windows resolvida |
| **IronClaw** | 50 | 50 | 0 | 4 P0-P1 | ⚠️ Atenção | Gap crates.io (v0.24 vs v0.27) |
| **CoPaw** | 50 | 36 (18 closed) | 2 stable | ~3 alta | 🟢 Muito ativa | Breaking change AgentScope 2.0 |
| **ZeroClaw** | 50 (25 merged) | 37 | 0 (pre-v0.8.0) | 6 S0-S1 | ⚠️ Crítica | 74 testes falhando no Windows |

**Síntese:** CoPaw e NullClaw apresentam as métricas de saúde mais robustas. ZeroClaw e IronClaw requerem atenção imediata por bugs críticos e gaps de distribuição.

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw | Comparação com Pares |
|----------|----------|---------------------|
| **Maturidade Operacional** | Zero backlog >7 dias | IronClaw tem issues de 37 dias; CoPaw issues de 30+ dias |
| **Taxa de Resolução** | 3/7 PRs merged em 24h | NanoBot: 19/32; ZeroClaw: 25/50 — NullClaw com menor volume mas maior taxa proporcional |
| **Foco em Estabilidade** | 4/4 PRs abertos são bug fixes | Hermes Agent, IronClaw: mistura de features e fixes |
| **Segurança** | Filtro de ferramentas por `tool_filter_groups` (#946) | Unique: nenhum outro projeto implementa este controle granular |
| **Extensibilidade** | Provider Evolink multi-model (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) | CoPaw: Xiaomi MiMo; PicoClaw: correções de API — NullClaw cobre mais providers |

### Diferenças Técnicas

- **Arquitetura:** Descrito como Zig-based (mencionado `config_types.zig`), contrastando com a predominância Python/Rust nos pares
- **Segurança:** Implementação de `tool_filter_groups` para expor apenas ferramentas relevantes via API — diferencial claro
- **DX:** Foco explícito em Developer Experience, com PRs dedicados a supressão de logs e configurabilidade

### Tamanho da Comunidade

NullClaw apresenta **comunidade menor em volume absoluto** (7 PRs vs 50 dos líderes), mas demonstra saúde superior em métricas relativas. A ausência de issues com comentários significativos pode indicar processo de review interno eficiente ou base de contribuidores restrita.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — Prioridade Universal

Todos os projetos investem em hardening de segurança:

| Projeto | Iniciativa de Segurança |
|---------|------------------------|
| **NullClaw** | Filtragem de ferramentas por grupos (#946) |
| **NanoBot** | Sandbox security (bwrap), context isolation |
| **Hermes Agent** | Approval gates para skill mutations (#43776), isolate cron approvals (#37969) |
| **PicoClaw** | Hardening de access control (#3083) |
| **IronClaw** | Audit events para credential-boundary (#4565, #4563) |
| **CoPaw** | Preview de arquivos fora do workspace (#5081), OAuth para modelos gratuitos |
| **ZeroClaw** | MCP policy enforcement (#7456), auth secrets em http_request (#7354), OTP validation |

**Implicação:** O ecossistema reconhece que agentes de IA em produção exigem controles de acesso granulares, isolamento de contexto e validação de ações sensíveis.

### 4.2 Multi-Provider e Model Gateway

| Projeto | Providers/Modelos Suportados |
|---------|------------------------------|
| **NullClaw** | OpenAI-compatible, Evolink (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) |
| **NanoBot** | DeepSeek, Whisper-style (Groq, OpenAI, SiliconFlow, StepFun) |
| **CoPaw** | Xiaomi MiMo, Qwen, free models via OAuth |
| **IronClaw** | NEAR AI, OpenAI, providers custom |
| **PicoClaw** | OpenAI APIs, Claude Opus 4-7 |

**Tendência:** Gateway OpenAI-compatible é o padrão de facto para abstração de modelos.

### 4.3 Estabilidade de Streaming e Fallback

Três projetos abordam falhas de streaming:

- **NanoBot:** Retry e fallback em stream stalled timeout (#4272)
- **Hermes Agent:** Empty responses não triggerram fallback (IronClaw #4287 report)
- **ZeroClaw:** Gateway crash em erros transitórios TLS accept (#7402)

**Padrão Emergente:** Implementação de retry logic e fallback automático para provedores quando modelo para de emitir tokens ou retorna choices vazias.

### 4.4 Compatibilidade Cross-Platform

| Projeto | Problema | Status |
|---------|----------|--------|
| **PicoClaw** | Path separators Windows (`\`) vs POSIX (`/`) | ✅ Resolvido (#3089) |
| **ZeroClaw** | 74 testes falhando no Windows (paths Unix, encoding CP936) | ⚠️ Aberto (#7462) |
| **CoPaw** | UI lag >10s no Windows Tauri | 🟡 Investigando (#5053) |

**Recomendação:** ZeroClaw deve priorizar CI multi-plataforma (#7461) para evitar regressões Windows.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferencial |
|---------|-----------------|-------------|
| **NullClaw** | Desenvolvedores avançados | Controle granular de ferramentas, Zig-based |
| **NanoBot** | Usuários finais | WebUI completo, Telegram bot, transcription |
| **Hermes Agent** | Operadores de automação | Desktop app, Telegram multi-tenancy, cron jobs |
| **PicoClaw** | Usuários cross-platform | Compatibilidade Go, debugging tools (picoclaw-tracer) |
| **IronClaw** | Usuários enterprise NEAR | Reborn v2 architecture, WebUI moderno |
| **CoPaw** | Ecossistema Qwen/Alibaba | Runtime 2.0, Agent OS Driver, free model OAuth |
| **ZeroClaw** | Teams enterprise | RBAC multi-tenant, MCP extensibility, voice pipeline |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Características |
|-----------|----------|----------------|
| **Monolito Python** | NanoBot, Hermes Agent, CoPaw | Flexibilidade, ecossistema rico de libs |
| **Rust-based** | IronClaw, ZeroClaw | Performance, safety, crates.io distribution |
| **Zig-based** | NullClaw | Minimalismo, controle de memória |
| **Go-based** | PicoClaw | Cross-platform nativo, binaries estáticos |

### 5.3 Por Fase de Maturidade

| Fase | Projetos | Características |
|------|----------|----------------|
| **Consolidação** | NullClaw, PicoClaw | Foco em estabilidade, bug fixes, DX |
| **Crescimento Rápido** | NanoBot, Hermes Agent, CoPaw | Alto volume de PRs, muitas features |
| **Transição Major** | IronClaw (Reborn v2), CoPaw (AgentScope 2.0) | Breaking changes, reescritas |
| **Pré-Release** | ZeroClaw (v0.8.0) | Bugs críticos pendentes, CI multi-plataforma |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Volume | Velocidade de Entrega | Indicador |
|---------|--------|----------------------|-----------|
| **CoPaw** | 50 PRs, 2 releases | ⭐⭐⭐⭐⭐ | Breaking change em curso + releases |
| **ZeroClaw** | 50 PRs, 25 merged | ⭐⭐⭐⭐ | 6 bugs S0-S1 indicam dívida técnica |
| **Hermes Agent** | 50 PRs + 50 issues | ⭐⭐⭐⭐ | Volume alto, mas 2 P1 abertas |
| **IronClaw** | 50 PRs + 50 issues | ⭐⭐⭐ | Gap crates.io reduz credibilidade |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Foco | Indicador de Maturidade |
|---------|------|------------------------|
| **NullClaw** | Estabilidade, DX | Zero backlog >7 dias, 3/7 PRs merged |
| **PicoClaw** | Compatibilidade, debugging | Bug crítico Windows resolvido |

### 6.3 Métricas de Engajamento Comunitário

| Projeto | Issue com Maior Engajamento | Interações |
|---------|----------------------------|------------|
| **Hermes Agent** | #18080: Dashboard themes | 25 comentários, 39 👍 |
| **ZeroClaw** | #4710: Logo redesign | 20 comentários |
| **NanoBot** | #4013: Stream stalled | 4 comentários |
| **NullClaw** | Nenhuma com engajamento | — |

**Análise:** Hermes Agent e ZeroClaw lideram em engajamento comunitário, indicando comunidades mais ativas em discussões. NullClaw pode estar sacrificando visibilidade por eficiência de processo.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-model Gateway como padrão** | NullClaw (Evolink), CoPaw (Xiaomi MiMo), NanoBot (múltiplos STT) | Abstração de provedores é requisito table-stakes |
| **RBAC Multi-tenant enterprise** | ZeroClaw (#5982), Hermes Agent (topic-to-profile routing) | Demanda por isolamento em deployments únicos |
| **Segurança como feature de primeira classe** | Todos os projetos com múltiplos PRs de security | Agentes em produção exigem approval gates, RBAC, MCP policies |
| **Desktop/WebUI maturity** | Hermes Agent (OpenTUI), IronClaw (Reborn v2), PicoClaw (tracer) | UX desktop é diferenciador competitivo |
| **MCP como protocolo de extensibilidade** | ZeroClaw, CoPaw, IronClaw todos investindo em MCP | Model Context Protocol substituindo skills proprietárias |
| **Voice channels incipientes** | ZeroClaw (#7394 voice pipeline facade) | Pipeline STT/TTS unificado como próximo frontier |
| **Descentralização de mensageria** | PicoClaw (#3093: SimpleX/Tox request) | Demanda por alternativas federadas além de Matrix |
| **Agent OS abstraction** | CoPaw (#5067: Agent OS Driver unificando MCP/A2A/ACP) | Convergência para padrões abertos de comunicação entre agentes |

### 7.2 Recomendações para Desenvolvedores

1. **Adotar OpenAI-compatible API** como interface padrão para providers — facilitado por gateways em NullClaw, IronClaw, PicoClaw
2. **Implementar approval gates** para operações sensíveis — padrão emergente em Hermes Agent, ZeroClaw
3. **Investir em CI multi-plataforma** — bugs Windows em ZeroClaw e CoPaw indicam necessidade
4. **Monitorar CoPaw Runtime 2.0** — arquitetura modular pode influenciar padrões do ecossistema

### 7.3 Recomendações para Decisores Técnicos

| Critério | Projeto Recomendado | Alternativas |
|----------|--------------------|---------------|
| **Estabilidade comprovada** | NullClaw | PicoClaw |
| **Feature completeness** | CoPaw | NanoBot |
| **Performance Rust** | IronClaw, ZeroClaw | — |
| **Ecossistema Python** | Hermes Agent, NanoBot, CoPaw | — |
| **Enterprise multi-tenant** | ZeroClaw | Hermes Agent |

---

**Veredicto Geral:** O ecossistema está saudável e em rápida evolução, com clara separação entre projetos focados em estabilidade (NullClaw, PicoClaw) e projetos em modo de crescimento agressivo (CoPaw, ZeroClaw, Hermes Agent). A convergência em segurança, multi-provider support e desktop UX indica maturidade do segmento. NullClaw destaca-se pela saúde operacional, mas carece de visibilidade comunitária. ZeroClaw apresenta maior severidade de bugs, exigindo atenção antes da v0.8.0.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-11

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 11 de junho de 2026, com 32 PRs atualizados nas últimas 24h (19 merged/fechados) e 9 issues processadas (6 fechadas). A equipe focou em **estabilidade operacional** —多个 correções de bugs críticos como stream stalled timeout, fallback de API e contexto de sessão foram merged. Não houve lançamentos de versão, indicando fase de consolidação antes de um próximo release. A comunidade demonstra engajamento consistente em múltiplas frentes: WebUI, transcription providers, sandbox security e gestão de memória.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões formais desde o último período reportado. Isso sugere que a equipe está acumulando mudanças para uma futura release (provavelmente v0.2.x), concentrando esforços em estabilização. Recomenda-se monitorar o repositório para announcements.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (19 total)

| PR | Autor | Mudança | Impacto |
|----|-------|---------|---------|
| [#4272](https://github.com/HKUDS/nanobot/pull/4272) | aiguozhi123456 | Retry e fallback em stream stalled timeout | **Crítico** — Corrige recovery quando modelo para de emitir tokens |
| [#4274](https://github.com/HKUDS/nanobot/pull/4274) | chengyongru | Scope prompt recent history by session | Isola histórico por sessão, evitando poluição de contexto |
| [#4273](https://github.com/HKUDS/nanobot/pull/4273) | chengyongru | add pathPrepend config para exec tool | Permite precedence de PATH para ferramentas customizadas |
| [#4275](https://github.com/HKUDS/nanobot/pull/4275) | chengyongru | Fail fast on invalid config files | Melhor experiência com mensagens de erro claras |
| [#4277](https://github.com/HKUDS/nanobot/pull/4277) | chengyongru | Lazy-load lark SDK no Feishu | Reduz tempo de startup e uso de memória |
| [#4281](https://github.com/HKUDS/nanobot/pull/4281) | morandot | Add SiliconFlow como transcription provider | Expande opções de STT (Speech-to-Text) |
| [#4278](https://github.com/HKUDS/nanobot/pull/4278) | Re-bin | Segment transcript storage | Reduz custo de abertura de sessões longas no WebUI |
| [#4247](https://github.com/HKUDS/nanobot/pull/4247) | HengWeiBin | Auto-compact transcript quando excede 8MB | Evita perda de histórico no WebUI |
| [#4255](https://github.com/HKUDS/nanobot/pull/4255) | JiajunBernoulli | On-demand version check no Settings > About | Remove polling background, melhora performance |

**Destaque de Impacto:** As correções [#4272](https://github.com/HKUDS/nanobot/pull/4272) e [#4274](https://github.com/HKUDS/nanobot/pull/4274) resolvem problemas fundamentais de confiabilidade e isolamento de contexto.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Tema |
|-------|------|-------------|------|
| [#4013](https://github.com/HKUDS/nanobot/issues/4013) | bug, question | 4 | Stream stalled >90s após upgrade para v0.2.0 |
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | enhancement | 3 | exec tool não instala packages via pip |
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) | enhancement, refactor | 2 | history.jsonl causando poluição de contexto cross-sessão |
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | bug | 1 | Empty responses não triggerram fallback |
| [#4000](https://github.com/HKUDS/nanobot/issues/4000) | enhancement | 1 | StepFun ASR provider |

### Análise das Demandas

**1. Problema de Stream Stalled (#4013)** — Usuário reporta que após upgrade de 0.1.5post2 para 0.2.0, recebe erro de stream stalled. Isso indica possível **regressão de comportamento** na v0.2.0 relacionada a timeout de streaming. O PR [#4272](https://github.com/HKUDS/nanobot/pull/4272) foi merged para abordar retry/fallback, mas pode haver necessidade de ajuste fino.

**2. Contexto Cross-Sessão (#4259)** — Issue aberta por chxuan destaca que `history.jsonl` mistura entradas de múltiplas sessões no system prompt, causando poluição de contexto. **Já resolvedo** pelo PR [#4274](https://github.com/HKUDS/nanobot/pull/4274).

**3. Empty API Choices (#4287)** — Usuário glebov reporta que DeepSeek retorna empty choices em horários de pico, e nanobot não faz fallback. **PR aberto** [#4288](https://github.com/HKUDS/nanobot/pull/4288) propõe adicionar token 'empty' aos fallbacks.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (3 issues ativas)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Alta** | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | Empty model responses não triggerram fallback — afeta produção com DeepSeek |
| **Média** | [#4286](https://github.com/HKUDS/nanobot/issues/4286) | Missing "sustained goal" context — usuário reportando perda de estado em tarefas longas |
| **Média** | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | bwrap sandbox não reseta HOME — já fechada, aguardando merge |

### Bugs Resolvidos Hoje

| Issue | Problema | Solução |
|-------|----------|---------|
| [#4013](https://github.com/HKUDS/nanobot/issues/4013) | Stream stalled >90s | PR [#4272](https://github.com/HKUDS/nanobot/pull/4272) — retry + fallback |
| [#4237](https://github.com/HKUDS/nanobot/issues/4237) | HOME não resetado no bwrap | Correção merged |
| [#4261](https://github.com/HKUDS/nanobot/issues/4261) | max_tokens vs max_completion_tokens | Provider corrigido |

**Métricas de Estabilidade:** Taxa de resolução de bugs está alta (6 de 9 issues fechadas), indicando responsiveness da equipe.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR/Issue | Feature | Motivação |
|----------|---------|-----------|
| [#4289](https://github.com/HKUDS/nanobot/pull/4289) | Slack groupRequireMention | Controle granular de menções em canais allowlist |
| [#4284](https://github.com/HKUDS/nanobot/pull/4284) | Skills via slash palette no WebUI | UX de ativação de skills como comando slash |
| [#4282](https://github.com/HKUDS/nanobot/pull/4282) | File management no settings view | Browse/editar arquivos do Agent sem acesso SSH |
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | Model-agnostic computer use + browser tools | Automação desktop/browser via tools nativas (pyautogui + playwright) |
| [#4279](https://github.com/HKUDS/nanobot/issues/4279) | Aggregated notifications para subagents | Prevenir LLM hallucination com notificações batch |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | Clarificar filesystem workspace write policy | Documentar limites de escrita em workspace |

### Sinais de Roadmap

1. **Computer Use Nativo (#4276)** — Integração de automação desktop/browser como tools in-process representa expansão significativa do capability set.
2. **Gestão de Memória** — Múltiplos PRs (#4280, #4270, #4274) indicam foco em resolver perda de contexto e memory pressure.
3. **Multi-Provider Transcription** — StepFun (#4000) e SiliconFlow (#4281) integrados, sugerindo estratégia de expandir STT options.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Stream stalled após upgrade | 1 usuário (reportado como crítico) | Bloqueia trabalho produtivo |
| Empty responses em horário de pico | 1 usuário (DeepSeek) | Falha silenciosa sem fallback |
| Contexto perdido em tarefas longas | 1 usuário | "sustained goal" não mantido |
| PATH resolution no exec tool | 1 usuário | Impossibilita instalar packages |
| history.jsonl poluindo contexto | 1 usuário | Respostas hallucinadas |

### Cenários de Uso Observados

- **Telegram bot runtime** com DeepSeek como modelo primário
- **Transcription via Whisper-style APIs** (Groq, OpenAI, SiliconFlow, StepFun)
- **WebUI para conversas longas** com transcript storage
- **Sandbox execution** (bwrap) para tools de shell/python
- **Agentes multi-subagent** com comunicação em tempo real

### Satisfação Geral

**Mista.** Usuários valorizam funcionalidades (v0.2.0 trouxe melhorias), mas enfrentam:
- Regressões post-upgrade (stream stalled)
- Falta de fallback automático em empty responses
- Complexidade de configuração de tools e providers

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Stale

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | ~20 dias | Closed hoje | Baixa (edge case) |
| [#4000](https://github.com/HKUDS/nanobot/issues/4000) | ~15 dias | Closed hoje | Baixa (feature request) |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | ~6 dias | OPEN | Média — Clarificar política de workspace |

### PRs Abertos Necessitando Review

| PR | Autor | Mudança | Age |
|----|-------|---------|-----|
| [#4288](https://github.com/HKUDS/nanobot/pull/4288) | yonghuname | Fix empty API fallback | <1 dia |
| [#4289](https://github.com/HKUDS/nanobot/pull/4289) | brendanlevy | Slack groupRequireMention | <1 dia |
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | LarFii | Computer use + browser tools | <1 dia |
| [#4280](https://github.com/HKUDS/nanobot/pull/4280) | bingqilinweimaotai | Fix memory context continuity | <1 dia |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | chengyongru | Clarify filesystem write policy | 6 dias |

**Recomendação:** Os PRs #4288 e #4276 são de alto impacto e devem ser priorizados para review. O PR #4202 está aguardando há 6 dias e envolve política de segurança de arquivos.

---

## Métricas Resumidas (24h)

| Métrick | Valor | Tendência |
|---------|-------|-----------|
| Issues fechadas | 6/9 | 🟢 Positiva |
| PRs merged | 19/32 | 🟢 Positiva |
| Bugs abertos | 3 | 🟡 Monitorar |
| Novas features | 5+ | 🟢 Ativa |
| Releases | 0 | ⚪ Nenhuma |

**Saúde Geral:** ★★★★☆ (4/5) — Projeto ativo com boa taxa de resolução, mas com bugs críticos abertos relacionados a fallback e contexto.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-11

---

## 1. Panorama do Dia

O Hermes Agent mantém **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um projeto vigoroso com forte engajamento da comunidade. Não houve lançamentos oficiais hoje, e 4 issues P1 (críticas) foram tratadas — 3 fechadas e 1 ainda aberta. A distribuição por severidade revela 4 P1, ~9 P2 e múltiplas P3, sugerindo que a equipe está equilibrando correções urgentes com melhorias incrementais. Destaque para a ausência de releases, o que pode indicar que a equipe está em ciclo de estabilização antes de um próximo tag.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto está em período sem versões oficiais. Isso contrasta com o alto volume de atividade (50 PRs e issues atualizados), sugerindo que a base de código está em intensa iteração — possivelmente convergindo para uma release futura. Recomenda-se monitorar o repositório para announcements.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#43510](https://github.com/NousResearch/hermes-agent/pull/43510) | docs(memory): clarify built-in memory compaction behavior | Documentação clarifies que a memória integrada não faz auto-compactação quando cheia, eliminando confusão de usuários | UX/Docs |
| [#43505](https://github.com/NousResearch/hermes-agent/pull/43505) | fix(cron): resolve per-job provider "custom" to providers.custom | Corrige fallback incorreto de `provider: "custom"` para `codex` em vez de `providers.custom` em jobs cron | Funcionalidade |
| [#43624](https://github.com/NousResearch/hermes-agent/pull/43624) | fix(desktop): re-enable streaming autoscroll with user-scroll respect | Restaura autoscroll do chat durante streaming respeitando scroll manual do usuário | Desktop UX |

### PRs Abertos com Maior Relevância

| # | PR | Resumo | Prioridade |
|---|-----|--------|------------|
| [#42922](https://github.com/NousResearch/hermes-agent/pull/42922) | feat(tui): native OpenTUI terminal UI — new default | Substitui Ink como TUI padrão; implementação experimental em SolidJS + Effect | P2 |
| [#37969](https://github.com/NousResearch/hermes-agent/pull/37969) | fix(cron): isolate gateway approvals from environment pollution | **Segurança** — impede que `HERMES_CRON_SESSION=1` no ambiente contamine validações de comandos perigosos | P2 |
| [#43776](https://github.com/NousResearch/hermes-agent/pull/43776) | fix(security): add approval gate for skill mutations in non-interactive mode | **Segurança** — bloqueia criação/edição de skills por agentes em modo headless/cron | P2 |
| [#43787](https://github.com/NousResearch/hermes-agent/pull/43787) | fix(telegram): advance reply anchor to latest message_id when batching | Corrige ancoragem de replies ao primeiro mensaje em stacked prompts | P2 |
| [#43786](https://github.com/NousResearch/hermes-agent/pull/43786) | [codex] Suppress user dashboard plugin APIs on public insecure dashboards | **Segurança** — impede imports de plugins Python em dashboards inseguros públicos | P2 |
| [#43785](https://github.com/NousResearch/hermes-agent/pull/43785) | fix(skills): resolve .env via HERMES_HOME across all skills | Corrige resolução de `.env` em Docker (HERMES_HOME vs HOME) | P2 |
| [#43742](https://github.com/NousResearch/hermes-agent/pull/43742) | fix(state): retry _connect_and_init when concurrent repair in progress | Adiciona retry loop para repairs concorrentes de `state.db` | P2 |
| [#43783](https://github.com/NousResearch/hermes-agent/pull/43783) | docs: add 4-week learning ramp for new users | Adiciona currículo estruturado para onboarding de novos usuários | P3 |

**Síntese:** A semana está fortemente orientada a **segurança e estabilidade** — 3 dos 8 PRs mais relevantes são patches de segurança (aprovação de comandos, mutação de skills, dashboard plugins). O PR de OpenTUI (#42922) sinaliza evolução significativa da interface terminal.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Comentários | Reações | Categoria |
|---|--------|-------------|---------|-----------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes for Dashboard — currently hard to read | 25 | 👍 39 | Feature |

**Análise:** Esta issue lidera em engajamento com 39 reações positivas, indicando que **a experiência visual do dashboard é uma dor coletiva**. O autor denuncia que os temas existentes (Midnight, Ember, Mono, Cyberpunk, Rose) usam fontes serifadas com peso leve e pouco contraste, prejudicando legibilidade. A proposta pede melhoria de tipografia e contraste, não apenas schemes de cores.

### Outras Issues com Alto Engajamento

| # | Título | Comentários | Reações | Categoria |
|---|--------|-------------|---------|-----------|
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) | Topic-to-Profile routing: dispatch Telegram topics to different profiles | 13 | 👍 0 | Feature |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Context compaction deletes messages — terrible UX | 4 | 👍 1 | Bug |
| [#29846](https://github.com/NousResearch/hermes-agent/issues/29846) | Option to disable gateway shutdown notification | 4 | 👍 4 | Feature |

**Padrões identificados:**
1. **UX do Dashboard** é a principal queixa — tema legível é demanda transversal
2. **Multi-tenancy no Telegram** interessa à comunidade (1 bot → múltiplos profiles por topic)
3. **Notificações intrusivas** do gateway irritam usuários em automações

---

## 5. Bugs e Estabilidade

### P1 — Críticos (4 issues)

| # | Título | Status | Severidade | Detalhe |
|---|--------|--------|------------|---------|
| [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) | macOS 26: launchd domain hardcoded para `user/<uid>` quebrando sessões Aqua `gui/<uid>` | **CLOSED** | P1 | Regressão na v0.16.0 |
| [#33365](https://github.com/NousResearch/hermes-agent/issues/33365) | WhatsApp gateway crashes (exit 1) on first poll após usar bridge existente | **OPEN** | P1 | Afeta plataforma WhatsApp |
| [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) | `tool_use_enforcement:never` ainda envia `tools` para deepseek-r1 via Ollama | **CLOSED** | P1 | Forçar `tool_use_enforcement` não funciona |
| [#33913](https://github.com/NousResearch/hermes-agent/issues/33913) | Docker setup escreve em `$HERMES_HOME/.hermes/` mas runtime lê `$HERMES_HOME/` (double-.hermes mismatch) | **OPEN** | P1 | Afeta setups Docker |

### P2 — Importantes (~9 issues)

| # | Título | Status | Detalhe |
|---|--------|--------|---------|
| [#6147](https://github.com/NousResearch/hermes-agent/issues/6147) | Installer stuck em "Install ripgrep / ffmpeg [Y/n]" — sem input de teclado | **CLOSED** | Instalador |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex credential pool pode perder credenciais após rewrite de `auth.json` | **OPEN** | Auth |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Context compaction deleta visualmente mensagens no Telegram — UX terrível | **OPEN** | Telegram |
| [#43564](https://github.com/NousResearch/hermes-agent/issues/43564) | `hermes update` pode remover dependência `agent-browser` | **OPEN** | CLI/Update |
| [#43055](https://github.com/NousResearch/hermes-agent/issues/43055) | `hermes -z` aborta com SIGABRT durante teardown no AL2023 | **OPEN** | CLI |
| [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | `provider: custom` + `key_env` ignora API key, envia 'no-key-required' | **OPEN** | Auth/Config |
| [#43690](https://github.com/NousResearch/hermes-agent/issues/43690) | FTS5 Trigram Index com 18.3x expansão em dados JSON estruturados (tool_calls) | **OPEN** | Performance |
| [#43656](https://github.com/NousResearch/hermes-agent/issues/43656) | WhatsApp pode vazar diretivas `MEDIA:` como texto visível | **OPEN** | Segurança |
| [#43640](https://github.com/NousResearch/hermes-agent/issues/43640) | Desktop App renderer crash com exitCode=15 causando boot loop | **CLOSED** | Desktop |

### P3 — Menores

| # | Título | Status |
|---|--------|--------|
| [#43788](https://github.com/NousResearch/hermes-agent/issues/43788) | macOS microphone permission perdida após updates | **OPEN** |
| [#43627](https://github.com/NousResearch/hermes-agent/issues/43627) | Update notification mostra 204 changes mas 'See what's new' diz up-to-date | **OPEN** |
| [#43731](https://github.com/NousResearch/hermes-agent/issues/43731) | Honcho memory file migration re-rodapara cada sessão (duplica facts) | **OPEN** |
| [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) | Honcho skill invocation text vaza como fala do usuário no deriver | **OPEN** |
| [#43655](https://github.com/NousResearch/hermes-agent/issues/43655) | Test token permission (invalid) | **CLOSED** |

**Síntese:** 2 de 4 P1 continuam abertas (#33365 WhatsApp, #33913 Docker path), representando riscos ativos. A P1 #33913 é particularmente crítica para ambientes Docker. Há 2 bugs de segurança P2 (WhatsApp MEDIA leak, credential pool race condition).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentemente

| # | Título | Comentários | Tipo | Sinal de Roadmap |
|---|--------|-------------|------|------------------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes for Dashboard | 25 | Feature | Dashboard UX prioritário |
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) | Topic-to-Profile routing (Telegram topics → different profiles) | 13 | Feature | Multi-tenancy por topic |
| [#29846](https://github.com/NousResearch/hermes-agent/issues/29846) | Disable/customize gateway shutdown notification | 4 | Feature | Reduzir ruído em automações |
| [#43700](https://github.com/NousResearch/hermes-agent/issues/43700) | Native MiMo TTS streaming (Xiaomi MiMo-V2.5-TTS) | 2 | Feature | TTS provider expansion |
| [#35218](https://github.com/NousResearch/hermes-agent/issues/35218) | 3-second degradation timeout para external memory providers | 2 | Feature | Resiliência de memória |
| [#43671](https://github.com/NousResearch/hermes-agent/issues/43671) | Conversation traversal com Up/Down arrows no Desktop App | 1 | Feature | Paridade Desktop ↔ Terminal |
| [#43668](https://github.com/NousResearch/hermes-agent/issues/43668) | Show inline diff ao atualizar cron jobs | 1 | Feature | DX para automações |
| [#14950](https://github.com/NousResearch/hermes-agent/issues

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-11

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um alto nível de atividade com **10 PRs atualizados nas últimas 24h**, dos quais 3 foram fechados/merged e 7 permanecem abertos para revisão. A atividade de issues permanece moderada com 3 issues atualizadas, incluindo o fechamento de um bug crítico de compatibilidade com Windows. A release nightly mais recente (**v0.2.9-nightly.20260610.b9a8fad6**) foi publicada, sinalizando trabalho contínuo no branch principal. O projeto demonstra saúde operacional com correções de bugs sendo mescladas rapidamente e novas features em pipeline.

---

## 2. Lançamentos

### 📦 Nova Release: nightly build v0.2.9-nightly.20260610.b9a8fad6

**Status:** Automated build — uso em produção não recomendado  
**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.9...main

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Nightly build automatizado |
| **Estabilidade** | Potencialmente instável — uso com cautela |
| **Base** | Comparado com v0.2.9 estável |

**Notas:** Esta é uma build noturna automática sem changelog detalhado publicado. Usuários em produção devem permanecer na versão estável v0.2.9 até próxima release marcada.

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged nas últimas 24h, representando avanços significativos em compatibilidade de APIs e ferramentas de debugging:

| PR | Título | Impacto |
|----|--------|---------|
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | fix: use function-type web_search para compatibilidade API | Corrige HTTP 400 em endpoints OpenAI que não suportam `web_search_preview` |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | fix: skip temperature parameter for claude-opus-4-7 | Elimina erros 400 em modelos Claude Opus 4-7 que rejeitam o parâmetro `temperature` |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | feat: add debug trace viewer (picoclaw-tracer) | Adiciona UI web standalone para visualização de traces LLM em tempo real |

**Destaque:** O PR #2945 introduz o **picoclaw-tracer**, uma ferramenta独立的 que lê logs JSON-Lines e renderiza traces por turno, incluindo system prompt, mensagens, tools disponíveis e metadados de resposta.

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue com maior engajamento

| Issue | Título | Engajamento |
|-------|--------|-------------|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | [BUG] list_dir returns "invalid argument" on Windows | 5 comentários, 1 reação 👍, status: CLOSED |

**Análise:** Esta issue enfrentou discussion extensa sobre compatibilidade cross-platform. O problema central: separadores de path Windows (`\`) sendo passados diretamente para `fs.FS`/`os.Root` do Go, que exige forward slashes (`/`). A issue foi finalmente resolvida com o PR #3089.

### Issues abertas sem engajamento (potenciais problemas latentes)

| Issue | Título | Situação |
|-------|--------|----------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | [Feature] I need SimpleX or tox | 0 comentários — gateway de mensageria solicitado |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | [BUG] Panel does not work on Safari on iOS < 16.4 | 0 comentários — compatibilidade Safari iOS |

**Sinal de mercado:** A solicitação de gateways SimpleX/Tox indica demanda por alternativas descentralizadas de mensageria além do Matrix já suportado.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados

| Severidade | Issue | Descrição | Plataformas Afetadas |
|------------|-------|-----------|---------------------|
| **🔴 Alta** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | `list_dir` falha com "invalid argument" por mismatch de path separator | **Windows** |
| **🟡 Média** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Panel não funciona no Safari em iOS < 16.4 | **Safari iOS < 16.4** |

**Análise de #2472:** Bug crítico de compatibilidade Windows resolvido. O PR #3089 ([fix os.Root api on windows issue](https://github.com/sipeed/picoclaw/pull/3089)) foi aberto para correção. Este era um problema de longa data (issue criada em 2026-04-10).

**Análise de #3090:** Bug de compatibilidade Safari iOS reportado recentemente. Afeta versões iOS anteriores a 16.4, potencialmente impactando usuários de dispositivos mais antigos. Nenhum comentário ainda — requer investigação.

### Padrões de Bugs Identificados

O backlog de PRs abertos mostra uma tendência de **type assertion errors** não verificados:

- [#3092](https://github.com/sipeed/picoclaw/pull/3092) — `skills_install.go` descarta `ok` em type assertions
- [#3091](https://github.com/sipeed/picoclaw/pull/3091) — `openai_compat` descarta `ok` em `native_search`
- [#3053](https://github.com/sipeed/picoclaw/pull/3053) — `lockStoreFile` pode causar panic com type assertion não verificado
- [#3043](https://github.com/sipeed/picoclaw/pull/3043) — `strconv.Atoi` e `json.Unmarshal` com erros descartados

**Recomendação:** Considerar audit de code base para erros de type assertion não verificados — risco de panics silenciosos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

| PR/Issue | Título | Demanda |
|----------|--------|---------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | I need SimpleX or tox | Gateway de mensageria descentralizada |
| [#3083](https://github.com/sipeed/picoclaw/pull/3083) | feat(web): harden launcher access control | Controle de acesso configurável para launcher |

**Análise de #3083:** Feature de segurança que adiciona:
- Comportamento bypass configurável para localhost
- CIDRs de proxies confiáveis configuráveis
- Mantém localhost permitido por padrão para compatibilidade

**Sinal de roadmap:** A ênfase em hardening de access control indica foco em segurança para deployments em produção.

**Análise de #3093:** Demanda por SimpleX ou Tox como alternativas ao Matrix. Indica:
- Usuários buscam alternativas descentralizadas
- Ecossistema de mensageria federada em expansão
- Possível oportunidade para diferenciamento competitivo

### Features em Revisão

| PR | Título | Status |
|----|--------|--------|
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | fix(identity): allow_from fallthrough for Matrix user IDs with colon | Aberto |

Corrige rejeição silenciosa de mensagens de Matrix users com formato padrão `@alice:example.com`.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| **Compatibilidade Windows** | `list_dir` retorna "invalid argument" | Issue #2472 (1 usuário reportou, 5 commenters debateram) |
| **Compatibilidade Safari iOS** | Panel não funciona em iOS < 16.4 | Issue #3090 (1 usuário afetado) |
| **Gestão de Identidade** | Mensagens de Matrix users rejeitadas silenciosamente | Issue #3044 (1 usuário afetado) |
| **Suporte a Modelos** | Erros HTTP 400 com modelos Claude Opus 4-7 | PR #2948 (já corrigido) |
| **Suporte a APIs** | Erros HTTP 400 com web_search em APIs OpenAI | PR #2951 (já corrigido) |

### Cenários de Uso Indiretos

- **Desenvolvimento cross-platform:** Usuários Windows enfrentam barreiras de compatibilidade
- **Dispositivos legados:** Safari iOS < 16.4 ainda em uso significativo
- **Federação Matrix:** Usuários Matrix com IDs no formato canônico enfrentam problemas de identidade

### Satisfação Geral

**Positivo:**
- Correções sendo merged rapidamente (3 PRs em 24h)
- Ferramentas de debugging sendo adicionadas (picoclaw-tracer)
- Suporte a múltiplos provedores LLM sendo refinado

**Áreas de Atenção:**
- Compatibilidade cross-browser/cross-platform precisa de melhoria
- Type assertions não verificados representam risco de estabilidade

---

## 8. Backlog que Merece Atenção

### PRs Abertos com Alto Impacto

| PR | Título | Prioridade | Tempo Aberto |
|----|--------|------------|--------------|
| [#3083](https://github.com/sipeed/picoclaw/pull/3083) | feat(web): harden launcher access control | 🔴 Alta | 2 dias |
| [#3089](https://github.com/sipeed/picoclaw/pull/3089) | fix os.Root api on windows issue | 🔴 Alta | 1 dia |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | fix(evolution): add ok check for LoadOrStore | 🟡 Média | 3 dias |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | fix(identity): allow_from fallthrough | 🟡 Média | 4 dias |
| [#3043](https://github.com/sipeed/picoclaw/pull/3043) | fix: check strconv.Atoi and json.Unmarshal errors | 🟡 Média | 4 dias |

### Issues Sem Resposta

| Issue | Título | Dias Sem Resposta |
|-------|--------|-------------------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | [Feature] I need SimpleX or tox | 1 dia |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | [BUG] Panel does not work on Safari on iOS < 16.4 | 1 dia |

**Recomendação:** Issue #3090 (bug Safari iOS) requer triagem imediata — zero comentários indica que ainda não foi avaliado pela equipe.

---

## Métricas Consolidada (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| PRs atualizados | 10 | ✅ Alta atividade |
| PRs fechados/merged | 3 | ✅Bom throughput |
| Issues atualizadas | 3 | Normal |
| Issues fechadas | 1 | ✅ Resolveu bug crítico |
| Novas releases | 1 (nightly) | ⚠️ Apenas nightly |
| Bugs críticos | 1 (Windows, resolvido) | ✅ |

---

**Relatório gerado em:** 2026-06-11  
**Fonte:** github.com/sipeed/picoclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-11

## 1. Panorama do Dia

O projeto IronClaw apresenta altíssima atividade hoje, com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando uma sprint intensa de desenvolvimento. Não há novos releases publicados, embora o repositório GitTag alcance até `v0.27.0` enquanto o crates.io permanece no `0.24.0` — uma defasagem crítica que afeta consumidores downstream. O foco predominante é a transição para a arquitetura **Reborn** (v2), com dezenas de issues e PRs tratando desde configurações de provider, UX do WebUI, até observabilidade e segurança. A saúde geral é boa, com muitos PRs sendo merged rapidamente, mas há uma fila de bugs UX累积 e dependências de老爷子 que merecem atenção imediata.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

No entanto, existe um gap crítico documentado em [Issue #3259](https://github.com/nearai/ironclaw/issues/3259):
- **GitHub Tags:** até `v0.27.0` (29 Abr 2026)
- **crates.io:** máximo `0.24.0` (31 Mar 2026)
- **Causa:** vulnerabilidades CVEs na wasmtime 8.x pinned os consumidores downstream

> ⚠️ **Ação recomendada:** Priorizar o publish das versões 0.25.0–0.27.0 para restabelecer compatibilidade no ecossistema Rust.

O PR [\#3708](https://github.com/nearai/ironclaw/pull/3708) (chore: release) está aberto desde 2026-05-16 e indica mudanças breaking no `ironclaw_common` (0.4.2 → 0.5.0) e `ironclaw_skills` (0.3.0 → 0.4.0).

---

## 3. Progresso do Projeto

PRs importantes **merged/closed** hoje:

| PR | Tamanho | Escopo | Impacto |
|----|---------|--------|---------|
| [\#4730](https://github.com/nearai/ironclaw/pull/4730) — Slack DM E2E | XL | core | Completa skeleton de entrega triggered-event via DM no Slack |
| [\#4717](https://github.com/nearai/ironclaw/pull/4717) — WebUI v2 approval affordance | XL | core | Restaura affordance "Always Allow" para gates de approval do ProductWorkflow |
| [\#4739](https://github.com/nearai/ironclaw/pull/4739) — Enable Slack QA Railway | S | core | Habilita Slack nos configs Docker de QA na Railway |
| [\#4673](https://github.com/nearai/ironclaw/pull/4673) — NEAR AI provider save fix | — | core | Corrige salvamento silencioso de provider NEAR AI |

**PRs em progresso com alto impacto:**

| PR | Tamanho | Escopo | Status |
|----|---------|--------|--------|
| [\#4738](https://github.com/nearai/ironclaw/pull/4738) — Attachment web UX | XL | core | Wiring upload UX no WebChat v2 SPA |
| [\#4735](https://github.com/nearai/ironclaw/pull/4735) — MCP server config + PATCH | XL | extensions | Configuração programática de servidor MCP |
| [\#4731](https://github.com/nearai/ironclaw/pull/4731) — LLM provider config fix | XL | core | Corrige e2e saving providers, model discovery, Settings UI |
| [\#4726](https://github.com/nearai/ironclaw/pull/4726) — Enable NEAR AI MCP from env | L | core | Auto-habilita MCP quando credenciais NEAR AI estão configuradas |
| [\#4559](https://github.com/nearai/ironclaw/pull/4559) — Trace Commons onboarding | XL | agent, deps | Agente onboarda usuário via invite link (substitui CLI de 15+ flags) |

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento:**

1. **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — Publish 0.25.0–0.27.0 to crates.io
   - 14 comentários, 0 👍
   - **Demanda:** consumidores estão pinned à versão 0.24.0 por causa de CVEs no wasmtime 8.x
   - **Prioridade:** P0 — blocking release

2. **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — Migrate OpenAI APIs para Reborn
   - 3 comentários, 0 👍
   - **Demanda:** mover superfícies OpenAI-compatíveis (Chat, Responses) para ProductWorkflow
   - **Dependências:** #3269, #3013, #3093, #3266, #3020, #3280, #3281, #3282
   - **Status:** CLOSED — subtarefas continuam em #4444, #4445

3. **[#4703](https://github.com/nearai/ironclaw/issues/4703)** — NEAR AI provider não funciona após setup
   - 2 comentários, 0 👍
   - **Demanda:** conexão testa OK, mas provider não persiste no conversation
   - **Testemunho:** "connection ok — 40 models available" mas falha após Save

4. **[#4632](https://github.com/nearai/ironclaw/issues/4632)** — Epic: Build out Reborn WebUI v2 E2E smoke coverage
   - 0 comentários, 0 👍
   - **Demanda:** falta teste real-browser full-stack; cobertura atual é apenas unit/in-process
   - **Autor:** italic-jinxin (core contributor)

---

## 5. Bugs e Estabilidade

**Bugs críticos (P0-P1):**

| Issue | Severidade | Descrição | Link |
|-------|------------|-----------|------|
| #3259 | **P0** | crates.io desync — consumidores pinned a versão vulnerável | [\#3259](https://github.com/nearai/ironclaw/issues/3259) |
| #4729 | **P1** | NEAR AI login quebrado em builds local/desktop — `private.near.ai` rejeita `127.0.0.1` | [\#4729](https://github.com/nearai/ironclaw/issues/4729) |
| #4706 | **P1** | Auth flows não se recuperam após sign-in falho/cancelado | [\#4706](https://github.com/nearai/ironclaw/issues/4706) |
| #4683 | **P1** | Mensagem genérica "driver unavailable" ao configurar modelo inválido | [\#4683](https://github.com/nearai/ironclaw/issues/4683) |

**Bugs médios (P2):**

| Issue | Descrição | Link |
|-------|-----------|------|
| #4673 | NEAR AI provider não persiste após "Test connection" | [\#4673](https://github.com/nearai/ironclaw/issues/4673) ✅ *Fix merged* |
| #4724 | Draft perdido ao sair de New Conversation | [\#4724](https://github.com/nearai/ironclaw/issues/4724) |
| #4725 | Composer permanece interativo durante estado "Working" | [\#4725](https://github.com/nearai/ironclaw/issues/4725) |
| #4642 | Strict-mode providers têm null-for-unset-optionals rejeitados | [\#4642](https://github.com/nearai/ironclaw/issues/4642) |

**Bugs UX menores (P3-P4):**

| Issue | Descrição | Link |
|-------|-----------|------|
| #4708 | Code blocks sem syntax highlighting | [\#4708](https://github.com/nearai/ironclaw/issues/4708) |
| #4707 | Font size muito pequeno na conversation page | [\#4707](https://github.com/nearai/ironclaw/issues/4707) |
| #4722 | Mensagens sem display de user/assistant identity | [\#4722](https://github.com/nearai/ironclaw/issues/4722) |
| #4723 | Hover state do composer só destaca borda superior | [\#4723](https://github.com/nearai/ironclaw/issues/4723) |
| #4734 | Agent avatar mostra "IC" em vez de ícone IronClaw | [\#4734](https://github.com/nearai/ironclaw/issues/4734) |

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features solicitadas (últimas 24h):**

| Issue | Feature | Link |
|-------|---------|------|
| #4700 | Auto-habilitar NEAR AI MCP quando credenciais configuradas | [\#4700](https://github.com/nearai/ironclaw/issues/4700) |
| #4733 | Links em respostas não devem navegar away da conversation | [\#4733](https://github.com/nearai/ironclaw/issues/4733) |
| #4740 | Slack tool: `parameters_schema` declara só `action` — outros params untyped | [\#4740](https://github.com/nearai/ironclaw/issues/4740) |
| #4632 | Epic: E2E smoke coverage para Reborn WebUI v2 | [\#4632](https://github.com/nearai/ironclaw/issues/4632) |

**Sinais de roadmap identificados:**

1. **Maturação do Reborn WebUI v2** — dezenas de issues indicam foco em UX, auth, e estabilidade
2. **Observabilidade** — PRs [\#4588](https://github.com/nearai/ironclaw/pull/4588), [\#4737](https://github.com/nearai/ironclaw/pull/4737), [\#4736](https://github.com/nearai/ironclaw/pull/4736) documentam contratos de backend
3. **Segurança** — PRs [\#4565](https://github.com/nearai/ironclaw/pull/4565), [\#4563](https://github.com/nearai/ironclaw/pull/4563) registram eventos de audit para credential-boundary e no-exposure egress
4. **Attachments** — Tracks de upload landing em [\#4670](https://github.com/nearai/ironclaw/pull/4670), [\#4738](https://github.com/nearai/ironclaw/pull/4738)

---

## 7. Resumo de Feedback dos Usuários

**Dores críticas reportadas:**

1. **Setup de provider quebrado:** Usuários configuram NEAR AI com chave válida, teste conecta ("40 models available"), mas ao salvar o provider não persiste — retorna para "requires setup" ([#4673](https://github.com/nearai/ironclaw/issues/4673), [#4703](https://github.com/nearai/ironclaw/issues/4703))

2. **Auth flows frágeis:** Sign-in com GitHub, Google e NEAR Wallet falha em builds locais. Mensagem: "Invalid frontend_callback" quando callback usa `127.0.0.1:3000` ([#4729](https://github.com/nearai/ironclaw/issues/4729), [#4706](https://github.com/nearai/ironclaw/issues/4706))

3. **Approval modal inútil:** Quando `builtin.http` é selecionado, o modal de aprovação não mostra detalhes sobre o que está sendo aprovado — usuário precisa decidir às cegas ([#4701](https://github.com/nearai/ironclaw/issues/4701))

4. **Mensagens de erro genéricas:** Falhas de configuração mostram "execution driver was temporarily unavailable" em vez de apontar problema real (ex: credenciais inválidas) ([#4683](https://github.com/nearai/ironclaw/issues/4683))

**Insatisfação com experiência local:**

- WebUI tem problemas visuais: fonte pequena, syntax highlighting ausente, hover states quebrados
- Agent avatar usa texto "IC" placeholder em vez de ícone identificável
- Links em respostas navigam away da conversation, interrompendo workflow

---

## 8. Backlog que Merece Atenção

**Issues sem resposta há > 3 dias:**

| Issue | Age | Prioridade | Descrição | Link |
|-------|-----|------------|-----------|------|
| #3259 | ~37 dias | P0 | crates.io publish gap | [\#3259](https://github.com/nearai/ironclaw/issues/3259) |
| #3283 | ~36 dias | P2 | Migrate OpenAI APIs para Reborn | [\#3283](https://github.com/nearai/ironclaw/issues/3283) |
| #3615 | ~28 dias | P1 | WebUI auth/security audit | [\#3615](https://github.com/nearai/ironclaw/issues/3615) |
| #4445 | ~7 dias | P2 | Route Responses via ProductWorkflow | [\#4445](https://github.com/nearai/ironclaw/issues/4445) |
| #4444 | ~7 dias | P2 | Route Chat Completions via ProductWorkflow | [\#4444](https://github.com/nearai/ironclaw/issues/4444) |

**Issues antigas com atividade recente (potential stalled):**

| Issue | Created | Status | Descrição | Link |
|-------|---------|--------|-----------|------|
| #3259 | 2026-05-05 | OPEN | crates.io desync | [\#3259](https://github.com/nearai/ironclaw/issues/3259) |
| #3283 | 2026-05-06 | CLOSED | OpenAI → Reborn migration | [\#3283](https://github.com/nearai/ironclaw/issues/3283) |
| #3615 | 2026-05-14 | CLOSED | WebUI auth audit | [\#3615](https://github.com/nearai/ironclaw/issues/3615) |

---

## Métricas Resumidas (2026-06-11)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 33 |
| Issues fechadas (24h) | 17 |
| PRs abertos (24h) | 29 |
| PRs merged/fechados (24h) | 21 |
| Releases novas | 0 |
| Issue mais comentada | #3259 (14 comentários) |
| PR mais significativo | #4730 (Slack DM E2E — XL, merged) |
| Bugs P0-P1 | 4 |
| Issues UX | 9+ |

---

**Recomendação de prioridade imediata:**
1. Publish 0.25.0–0.27.0 para crates.io (#3259)
2. Fix auth flows para builds locais (#4729, #4706)
3. Merge fix de provider config (#4731) que endereça #4673, #4703
4. Adicionar contexto ao approval modal (#4701, PR #4732)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-06-11 | **Período:** Últimas 24h

---

## 1. Panorama do dia

O projeto apresenta altíssima atividade nas últimas 24h, com 50 PRs atualizados e 36 issues movimentadas, demonstrando uma cadência de desenvolvimento intensa. Duas releases foram publicadas (v1.1.11 e v1.1.11-beta.3), trazendo OAuth para modelos gratuitos e provider Xiaomi MiMo, além de melhorias no fluxo de criação de skills. A taxa de resolução de issues é equilibrada (18 fechadas vs 18 abertas/ativas), sugerindo uma gestão saudável do backlog. O destaque goes to comunidade é a discussão sobre a arquitetura Runtime 2.0 e a proposta de Agent OS Driver unificando protocolos MCP/A2A/ACP — indicando uma evolução arquitetural significativa em curso.

---

## 2. Lançamentos

### v1.1.11
**Status:** Released em 2026-06-10

**Highlights:**
- **Free Model OAuth:** Autenticação zero-config com um clique para modelos gratuitos
- **Xiaomi MiMo Provider:** Integração do Token Plan da Xiaomi MiMo como provider built-in

> 📦 Release: https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11

### v1.1.11-beta.3
**Status:** Released em 2026-06-10

**Highlights:**
- CI: Remoção de workflow redundante de channel-tests ([#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056))
- Skills: Fluxo `make-skill` aprimorado para suporte à criação auto-evolutiva de skills ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857))

> 📦 Release: https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11-beta.3

**Nota de Migração:** Não há breaking changes explicitados nesta release, mas o PR [#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082) fez pin de `aiohttp<=3.14.0` para corrigir erro SSL no Windows — verificar dependências em builds customizados.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Significativos

| PR | Título | Impacto |
|---|---|---|
| [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080) | Release v1.1.11 | Entrega das features principais |
| [#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) | feat(security): preview arquivos fora do workspace | Reforço de segurança no file guard |
| [#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079) | fix(error): expor razão original da API | UX — erros mais informativos |
| [#5084](https://github.com/agentscope-ai/QwenPaw/pull/5084) | fix(pack): compile-check discord | Build Windows estabilizado |
| [#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083) | fix(build): certifi CA bundle | Correção SSL em runners Windows |
| [#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082) | fix(build): pin aiohttp<=3.14.0 | Mitigação erro SSL |
| [#4858](https://github.com/agentscope-ai/QwenPaw/pull/4858) | feat(auth): scope web login to agents | Multi-tenancy de acesso |

### PRs Em Revisão (Under Review)

| PR | Título | Relevância |
|---|---|---|
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | Runtime 2.0 modular architecture + ToolCoordinator | 🔴 Arquitetura — refatoração significativa |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | Agent OS Driver (MCP/A2A/ACP) | 🔴 Abstração unificada de capacidades externas |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw): 12 BI skills | Plugin de análise de dados |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | Add token usage info in conversations | Visibilidade de custos por conversa |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | feat(desktop): tauri auto updater | Atualização automática desktop |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

1. **[#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342)** — Unit test coverage Phase 5 (11 comentários, CLOSED)
   - milestone de cobertura de testes para módulos `local_models/`, `providers/`, `tunnel/`, `utils/`
   - 7 novos arquivos de teste criados

2. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** — Migrar backend para AgentScope 2.0 (8 comentários, OPEN)
   - 🔴 **Breaking Change planejado** — atualização de `agentscope==1.0.20` → 2.0
   - Impacto: APIs, runtime model, nova arquitetura

3. **[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)** — WeChat push falhando (7 comentários, CLOSED)
   - Root cause identificado: bug no `channel.py` da wechat — rejeição com `ret=-3`

4. **[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)** — Config de Models perdida após nova sessão (7 comentários, CLOSED)
   - Bug crítico de persistência de configurações

5. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** — Tarefas agendadas não disparam (5 comentários, OPEN)
   - Agentes criando tasks via `/schedule` não executam no horário

### Análise de Demandas da Comunidade

| Categoria | Volume | Tendência |
|---|---|---|
| 🐛 Bugs (abertos) | ~8 | Estável — vários resolved recently |
| ✨ Features | ~10 | Crescente — visual model, system tray, etc |
| 🔧 UX/Performance | ~6 | Alto — lag em múltiplas abas, chat lento |
| 🔒 Segurança/Auth | ~2 | Moderado |

---

## 5. Bugs e Estabilidade

### Bugs Reportados (últimas 24h)

| Issue | Severidade | Status | Descrição |
|---|---|---|---|
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 🔴 Alta | CLOSED | Local model (Qwen3.6-27B) sem resposta — regressão da 1.1.5 |
| [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | 🔴 Alta | CLOSED | Config de Models perdida após nova sessão |
| [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | 🟡 Média | CLOSED | WeChat push não entrega mensagens |
| [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | 🟡 Média | OPEN | Tool calls falham após若干次 — `unexpected keyword argument 'arguments'` |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | 🟡 Média | CLOSED | Processos MCP acumulam em restarts |
| [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | 🟡 Média | OPEN | UI lag >10s ao trocar abas (4+ sessões) — Windows Tauri |
| [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) | 🟢 Baixa | OPEN | Skill slash renderiza SKILL.md raw no Console |

### Bugs Críticos em Andamento

- **[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989):** Regressão com modelos locais via vLLM — afeta versões 1.1.9/1.1.10, funcionava em 1.1.5.post2
- **[#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052):** Tool calls degradam após 몇轮 — suspeita de mudança no `agentscope-runtime` ou `openai` client
- **[#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053):** Performance no Windows Tauri com múltiplas sessões

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Propostas (por relevância)

| Issue | Votes | Descrição | Potencial Impact |
|---|---|---|---|
| **[#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)** | 👍 1 | Visual Model Fallback — fallback para modelo de visão independente | 🔴 Alto — resolve limitações de modelos não-multimodais |
| **[#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)** | 👍 0 | System Tray para Windows desktop | 🟡 Médio — UX desktop |
| **[#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961)** | 👍 0 | Skill classification/folder system | 🟡 Médio — organização de skills |
| **[#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865)** | 👍 2 | Stream rendering de `write_file` no Console | 🟡 Médio — UX ao gerar arquivos longos |
| **[#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887)** | 👍 0 | Custom endpoint para DingTalk private deploy | 🟢 Baixo — enterprise |
| **[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)** | 👍 0 | Integrar Headroom (compressão de contexto 60-95%) | 🟢 Experimental |

### Sinais de Roadmap

1. **Agent OS Driver ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)):** Abstração unificada para MCP/A2A/ACP — indica direção de extensibilidade
2. **Runtime 2.0 ([#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)):** Modularização do Runner + ToolCoordinator — refatoração arquitetural
3. **AgentScope 2.0 Migration ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)):** Atualização de dependência backend — breaking change
4. **DataPaw Plugin ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)):** Expansão do ecossistema de plugins com 12 skills de BI

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Impacto |
|---|---|---|
| **Performance do Console** — lag ao trocar abas, renderização lenta com dados pesados | Alta | Usuários com conversas longas ou múltiplas sessões |
| **Modelos Locais** — instabilidade, regressões entre versões | Alta | Usuários auto-hospedados |
| **Shell execution** — popup de CMD no Windows打扰 | Média | Usuários Windows desktop |
| **Scheduled tasks** — não disparam / não editáveis | Média | Automação de agentes |
| **Config persistence** — Models config perdida | Alta | Workflow de setup |

### Cenários de Uso Reportados

- **Desktop (Windows/Mac):** Usuários experimentando com múltiplas sessões e reportando UI lag
- **Self-hosted:** Modelos locais via vLLM/OpenAI-compatible APIs
- **Enterprise:** Requisição de custom endpoints para DingTalk private deployment
- **Multi-agent:** Sub-agents via `spraw_subagent` com falta de visibilidade de progresso

### Satisfação

- **Positivo:** OAuth de modelos gratuitos facilita onboarding
- **Positivo:** Skill auto-evolution flow ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857))
- **Negativo:** Regressões em modelos locais causam frustração

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Criado | Comentários | Status | Prioridade |
|---|---|---|---|---|
| [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | 2026-05-06 | 4 | OPEN | 🟡 Media |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | 2026-04-23 | 3 | OPEN | 🟡 Media |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | 2026-04-05 | 3 | CLOSED | ✅ Resolved |
| [#4184](https://github.com/agentscope-ai/QwenPaw/issues/4184) | 2026-05-11 | 3 | CLOSED | ✅ Resolved |

### Issues Abertas com Alto Impacto

| Issue | Descrição | Ações Recomendadas |
|---|---|---|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | Migration AgentScope 2.0 | Planejar guia de migração; comunicar breaking changes |
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Visual Model Fallback | Avaliar viabilidade técnica; possivelmente alta demanda |
| [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | Tool calls degradam após N chamadas | Investigar root cause — possível regressão no runtime |
| [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | UI lag Windows Tauri | Perf profiling necessário |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues fechadas (24h) | 18/36 (50%) | ✅ Saudável |
| PRs merged (24h) | ~15+ | ✅ Muito ativo |
| Tempo médio de resposta | <24h (observado) | ✅ Responsivo |
| Clear backlog | ~18 issues abertas | 🟡 Moderado |
| Breaking changes planejados | 1 (AgentScope 2.0) | ⚠️ Requer comunicação |

---

*Relatório gerado automaticamente com base em dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-11

---

## 1. Panorama do Dia

ZeroClaw apresenta **alta atividade de desenvolvimento** em 11 de junho de 2026. Nas últimas 24 horas, 37 issues e 50 PRs foram atualizados, com **25 PRs merged/fechados** — evidenciando um ciclo de entrega intenso. Não houve lançamentos formais, mas a base de código está em estado de fermentação ativa com múltiplas correções de bugs críticos (MCP policy, gateway crash, image_info multimodal) convergindo para a release v0.8.0. A comunidade demonstra preocupação significativa com estabilidade multi-plataforma (74 testes falhando no Windows) e segurança (RBAC multi-tenant, OTP validation).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto mantém-se em ciclo de pré-release para **v0.8.0** (tracking em [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)), com blockers Stable-tier pendentes de resolução. As milestones subsequentes já estão articuladas:
- **v0.8.1** — integração/channel/provider/tool queue ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))
- **v0.8.2** — WASM plugin program ([#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314))
- **v0.8.3** — MCP dashboard e web surfaces ([#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320))

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (destaque)

| PR | Título | Impacto |
|----|--------|---------|
| [#7446](https://github.com/zeroclaw-labs/zeroclaw/pull/7446) | `fix(multimodal): make image_info images reach vision models end-to-end` | **Crítico** — `image_info` agora funciona com paths relativos e URLs, não apenas caminhos POSIX absolutos |
| [#7456](https://github.com/zeroclaw-labs/zeroclaw/pull/7456) | `fix(runtime): apply MCP policy to MCP registration` | **Segurança** — Aplica `ToolAccessPolicy` à registration eager de MCP, fechando gap de segurança |
| [#7402](https://github.com/zeroclaw-labs/zeroclaw/pull/7402) | `fix(gateway): survive transient accept() errors instead of crashing` | **Estabilidade** — Gateway não morre mais com erros transitórios TLS accept |
| [#7463](https://github.com/zeroclaw-labs/zeroclaw/pull/7463) | `fix(runtime): use agent_workspace_dir for load_skills_for_agent calls` | **Funcionalidade** — Skills em `<agents/<alias>/workspace/skills/>` agora são carregadas corretamente |
| [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) | `feat(memory): migrate gateway and channel consolidation to MemoryStrategy` | **Arquitetura** — Terceira e última fatia da migração de memória para `MemoryStrategy` |
| [#7354](https://github.com/zeroclaw-labs/zeroclaw/pull/7354) | `feat(tools): add http_request auth secrets` | **Segurança** — Suporte a `auth_secret` nomeado em `http_request`, evitando secrets em argumentos |
| [#7368](https://github.com/zeroclaw-labs/zeroclaw/pull/7368) | `fix(config): warn on unknown security.otp.gated_actions entries` | **UX/Segurança** — Aviso ao operator quando action name em OTP é inválido ou inexistente |

### PRs Abertos (em revisão)

| PR | Título | Status |
|----|--------|--------|
| [#7465](https://github.com/zeroclaw-labs/zeroclaw/pull/7465) | `fix(runtime): preserve delegate memory namespace` | **size: L, risk: high** — Correção de isolamento de memória em delegates |
| [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) | `feat(plugins): add office-tools WASM plugin` | **size: S** — Plugin WASM para extração de Office docs (DOCX, XLSX, PPTX) |
| [#7394](https://github.com/zeroclaw-labs/zeroclaw/pull/7394) | `feat(channels): add voice pipeline facade` | **size: L** — Interface unificada STT/TTS para canais de voz futuros |
| [#7466](https://github.com/zeroclaw-labs/zeroclaw/pull/7466) | `fix(ci): restore master compile after merge batch` | **size: XS** — Restaura build de `zeroclaw-channels` após batch de merges |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better LOGO for Zeroclaw | 20 | 2 | **Enhancement** (Closed) |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Provide a "full" docker image | 9 | 3 | **Feature** (Open) |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant | 9 | 0 | **Feature** (Open) |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer lighter ZeroClaw core | 4 | 0 | **RFC** (Open) |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support v0.7.6 | 3 | 0 | **Tracker** (Closed) |

### Análise de Demandas

1. **Identidade Visual (#4710)** — 20 comentários indicam interesse significativo da comunidade em modernizar a marca. Closed com status `needs-author-action`, sugerindo necessidade de resubmissão pelo autor.

2. **Docker "full" image (#3642)** — 9 comentários e 3 thumbs-ups revelam barreira de entrada para funcionalidades como WhatsApp. Feature bloqueada, aguardando priorização.

3. **RBAC Multi-tenant (#5982)** — 9 comentários demonstram demanda enterprise para isolamento de workspaces, tool sets e rate limits por classe de usuário. Alto risco, alta complexidade.

4. **Core mais leve (#6165)** — RFC para externalizar integrações (gws-cli, jira, github) para skills. Indica direção arquitetural para reduzir o monolito.

---

## 5. Bugs e Estabilidade

### Bugs de Alta Severidade (P1 / S0-S1)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #6034 | User message loss em single/multi-turn | S1 | Accepted | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) |
| #5808 | 32k context budget exceeded na iteração 1 | S1 | Accepted | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| #4627 | file_write tool silently fails — files invisíveis | **S0** | In Progress | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) |
| #7263 | Subagents não herdam "cwd" em ACP sessions | S1 | Accepted | [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) |
| #7462 | **74 test failures on Windows** — Unix-only tests | S2 | Open | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| #6721 | tool_search auto-approve — hangs 120s then deny | High | Accepted | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) |

### Bugs Críticos Recentemente Corrigidos (PRs merged)

- **#7446** — `image_info` não reachava modelos vision em casos comuns (paths relativos)
- **#7456** — MCP policy não aplicada à registration eager (gap de segurança)
- **#7402** — Gateway crashava em erros `accept()` transitórios
- **#7463** — Skills ignoradas por path incorreto de carregamento

### Observação Crítica de Infraestrutura

**[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) e [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461):** 74 testes falhando no Windows (paths Unix, encoding console CP936) não são capturados pelo CI atual (só Linux). Correlacionado com [#7409](https://github.com/zeroclaw-labs/zeroclaw/issues/7409) — clippy lint também Linux-only.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Risk | Priority | Link |
|---|--------|------|----------|------|
| #7431 | Pre-turn routing intent extraction | High | P2 | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) |
| #7415 | **RFC: Unify three agent turn engines** | High | P2 | [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) |
| #7420 | **RFC: Native Dynamic-Library Plugin System** | High | P2 | [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) |
| #3642 | Full Docker image with all features | Medium | P2 | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) |
| #5982 | Per-sender RBAC multi-tenant | High | P2 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #7461 | Run test suite on Windows/macOS in CI | High | P1 | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) |

### Sinais de Roadmap Detectados

1. **v0.8.0 blockers (#7112):** Config/schema breaking changes, Stable-tier promotion — **todos P1**
2. **Plugin ecosystem (#7314, #7420):** WASM native plugins e Dynamic-Library system em RFC ativa
3. **MCP extensibility (#7314, #7320):** Dashboard MCP + plugin management surfaces para v0.8.3
4. **Voice pipeline (#7394):** Facade STT/TTS unificada mergeada, habilitando canais de voz futuros
5. **Multi-platform CI (#7461):** Execução de testes em Windows/macOS como feature request prioritária

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Problema | Manifestação | Impacto |
|----------|-------------|---------|
| **Barreira de entrada Docker** | Funcionalidades desabilitadas por default (WhatsApp) exigem compilation custom | Usuários não-técnicos abandonam |
| **Contexto estourado** | Budget de 32k tokens excedido na primeira iteração | Workflow bloqueado |
| **Perda de mensagens** | User messages desaparecem em single e multi-turn | Confiança do usuário comprometida |
| **Cross-platform** | 74 testes falhando no Windows, CI não captura | Desenvolvimento Windows vetado |
| **Skills ignoradas** | Skills em workspace de agent não carregam | Feature `zeroclaw skills` falha silenciosamente |
| **MCP tooling** | tool_search não está em auto-approve, causa hang 120s | Integração MCP inutilizável em webhook mode |

### Cenários de Uso Emergentes

- **Multi-tenant enterprise:** Demanda por RBAC per-sender em deployment único
- **Integração Office:** Extração de DOCX/XLSX/PPTX via plugin WASM (office-tools #7454)
- **Voice channels:** Pipeline de voz em preparação para STT/TTS
- **Telegram robusto:** Demo harness para ESP32 simulator + correções de delivery

### Satisfação/Insatisfação

**Positivo:** Comunidade ativa (37 issues, 50 PRs em 24h), correções sendo mergeadas rapidamente, RFCs recebendo atenção.

**Negativo:** Bugs S0-S1 persistindo (file_write, message loss), CI Windows inexistente, documentação Docker desatualizada ([#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)), memory config scaffold sem consumer ([#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Estado | Ação Recomendada |
|---|--------|--------|------------|--------|-----------------|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Full Docker image | 2026-03-15 | 2026-06-10 | **Blocked** | Priorizar para v0.8.1 — barreira de entrada |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC | 2026-04-22 | 2026-06-09 | **Needs-author-action** | Engajar autor, requer design detalhado |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | file_write silent fail (S0) | 2026-03-25 | 2026-06-10 | In Progress | Acompanhamento urgente — data loss risk |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Context budget exceeded | 2026-04-16 | 2026-06-09 | Accepted | Corrigir default `max_context_tokens` |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) | MemoryConfig scaffold dead code | 2026-05-16 | 2026-06-10 | Accepted | Cleanup ou implementação de feature |
| [#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) | Matrix amnesia (session keyed on event_id) | 2026-05-27 | 2026-06-10 | In Progress | Relevante para v0.8.0 release gate |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*