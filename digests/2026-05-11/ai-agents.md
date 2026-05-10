# Resumo diário do ecossistema de agentes de IA 2026-05-11

> Issues: 1 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-05-10 20:41 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw
## Data de referência: 2026-05-11

---

## 1. Panorama do Dia

NullClaw apresenta um dia de **baixa atividade geral** em 2026-05-11. Nenhuma release foi publicada nas últimas 24h, e o volume de atividade resume-se a **3 pull requests abertas** (nenhuma merged) e **1 issue resolvida** — especificamente, um bug crítico de regressão DNS que afeta provedores siliconflow após upgrade para a série 2026.5.x. O projeto mantém fluxo de manutenção ativo, com PRs focadas em hardening de segurança e correções de estabilidade. A tendência indica priorização de qualidade e segurança sobre expansão de funcionalidades.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A ausência de releases coincide com o período de estabilização da série 2026.5.x, que apresenta a regressão documentada na issue #902 (resolvida). Não há notas de migração ou breaking changes a reportar neste período.

---

## 3. Progresso do Projeto

Três pull requests foram atualizadas hoje, todas em estado **OPEN** — nenhuma ainda passou por merge:

| PR | Título | Área | Status |
|---|---|---|---|
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | Security harden webhooks, HTTP secrets, and cron shell jobs | **Segurança** | Aberta |
| [#906](https://github.com/nullclaw/nullclaw/pull/906) | fix(tools): defer shell sandbox auto-detection | **Ferramentas/Shell** | Aberta |
| [#905](https://github.com/nullclaw/nullclaw/pull/905) | fix(discord): avoid Android gateway startup stalls | **Discord/Gateway** | Aberta |

### Análise das PRs em progresso:

**#907 — Security hardening (racribeiro)**
- Remove uso de subprocessos `curl` com credenciais em paths HTTP de provider e channel
- Rejeita headers/query params com tokens em helpers curl restantes
- Reforça validação de inbound trust para Telegram, Discord e LINE (nega listas `allow_from` vazias)
- **Impacto:** Fortalecimento significativo da postura de segurança do projeto
- **Estado:** Aguardando review

**#906 — Shell sandbox lazy initialization (vernonstinebaker)**
- Adia detecção automática de sandbox shell até primeira utilização efetiva
- Elimina spawning de subprocessos de probe durante gateway/channel startup
- **Impacto:** Redução de latência de inicialização e menor uso de recursos
- **Estado:** Aguardando validação (nota: `zig build test` ainda falha)

**#905 — Discord Android DNS retry (vernonstinebaker)**
- Implementa retry de websocket connections em **todos** os endereços resolvedos (não apenas primeiro resultado DNS)
- Mantém runtime A2A lazy em daemon mode para não bloquear channel startup
- **Impacto:** Corretivo crítico para plataformas Android
- **Estado:** Aguardando validação

---

## 4. Temas Quentes da Comunidade

### Issue com maior atenção no período:

**[#902](https://github.com/nullclaw/nullclaw/issues/902) — [bug] HostResolutionFailed com siliconflow (2026.5.x)** ✅ *RESOLVIDA*

| Campo | Detalhe |
|---|---|
| **Autor** | agimains |
| **Criação** | 2026-05-09 |
| **Resolução** | 2026-05-10 (24h após reporte) |
| **Comentários** | 1 |
| **Reações** | 0 |

**Resumo do problema:** Após upgrade para NullClaw 2026.5.x, provedores siliconflow falham imediatamente com `Error: error.HostResolutionFailed`. Mesma configuração, token e rede funcionam perfeitamente em 2026.4.9.

**Causa raiz identificada:** Regressão introduzida pelo refactoring HTTP/DNS client na versão 2026.5.x.

**Análise de demanda:** O reporte foi fechado com resolução em ~24h, indicando resposta ágil da equipe. A severidade é alta (bloco de produção para usuários do provedor siliconflow), mas o impacto de comunidade permanece limitado a esse subconjunto específico de usuários.

---

## 5. Bugs e Estabilidade

### Resumo de Issues Reportadas (24h)

| Criticidade | Quantidade | Status |
|---|---|---|
| **Crítica** | 1 | Resolvida |
| **Alta** | 0 | — |
| **Média** | 0 | — |
| **Baixa** | 0 | — |

### Detalhamento:

**🔴 Bug Crítico — RESOLVIDO**

- **Issue:** [#902](https://github.com/nullclaw/nullclaw/issues/902) — `HostResolutionFailed` com provedor siliconflow
- **Severidade:** Crítica (regressão de 2026.4.9 → 2026.5.x)
- **Causa:** Refactoring HTTP/DNS client na série 2026.5.x
- **Resolução:** Confirmada (issue fechada)
- **Tempo de resposta:** ~24h

### Métricas de Estabilidade

| Indicador | Valor | Tendência |
|---|---|---|
| Issues abertas/ativas (24h) | 0 | Neutra |
| Issues fechadas (24h) | 1 | Positiva |
| Taxa de resolução (24h) | 100% | ✅ Excelente |
| PRs merged (24h) | 0 | Neutra |

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum pedido de feature novo registrado nas últimas 24h.**

### Sinais derivados da atividade de PRs:

As PRs abertas sugerem prioridades implícitas para o roadmap:

1. **Segurança** (#907) — O PR de hardening de segurança indica priorização de robustez de credenciais e validação de inbound trust para integrações externas (Telegram, Discord, LINE)

2. **Performance de inicialização** (#906) — A abordagem de lazy initialization para shell sandbox sinaliza foco em reduzir tempo e recursos de startup

3. **Resiliência de plataforma** (#905) — Correções específicas para Android indicam preocupação com suporte multiplataforma robusto

---

## 7. Resumo de Feedback dos Usuários

### Canal: Reports de Bug

**Usuário: agimains**
- **Contexto:** Utiliza provedor siliconflow em ambiente de produção
- **Dificuldade:** Upgrade para 2026.5.x quebrou funcionalidade essencial sem indicadores claros de causa
- **Satisfação com resposta:** Implícita — issue resolvida em 24h, usuário não abriu follow-up
- **Dores identificadas:**
  - Regressões em refactors de componentes core (HTTP/DNS) causam impacto severo
  - Falta de informações claras de breaking changes entre versões menores

### Lacuna de Feedback

O período de 24h apresenta volume limitado de feedback direto (1 issue, 0 comentários de usuários). Não há evidências de feedback sobre:
- Novas funcionalidades
- Experiência de documentação
- Satisfação geral com 2026.5.x

---

## 8. Backlog que Merece Atenção

### Visão geral do backlog

| Categoria | Quantidade估计 | Estado geral |
|---|---|---|
| Issues abertas totais | ~900+ | Não especificado |
| PRs abertas totais | ~900+ | 3 com activity recente |

### Items que merecem atenção (baseados em atividade recente):

| Item | Tipo | Prioridade | Motivo |
|---|---|---|---|
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | PR | **Alta** | Hardening de segurança — impacto direto em produção |
| [#906](https://github.com/nullclaw/nullclaw/pull/906) | PR | **Média** | Corretivo de performance — mas validação CI falhando |
| [#905](https://github.com/nullclaw/nullclaw/pull/905) | PR | **Média** | Resiliência Android — segmento de usuário específico |
| [#902](https://github.com/nullclaw/nullclaw/issues/902) | Issue | ✅ Resolvida | Registro de regressão para histórico |

### Alertas de backlog:

1. **⚠️ PR #906 em estado problemático:** O autor indica que `zig build test --summary all` **falha** na validação. Antes de merge, é necessário resolver falhas de teste. Aguarda atenção de mantenedores.

2. **⚠️ backlog de ~900+ issues:** Mesmo com a resolução positiva de #902, o volume acumulado de issues sugere necessidade de triagem periódica para identificar bloqueios de usuário e duplicatas.

---

## Métricas Consolidada do Período (2026-05-11)

| KPI | Valor |
|---|---|
| Releases (24h) | 0 |
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 1 |
| PRs abertas (24h) | 3 |
| PRs merged/fechadas (24h) | 0 |
| Taxa de resolução de bugs | 100% |
| CRITICAL bugs abertos | 0 |
| Segurança (PR #907) | Em progresso |

---

**Conclusão geral:** NullClaw demonstra saúde operacional em 2026-05-11, com resposta ágil a bug crítico de regressão. A atividade de PRs indica foco em segurança e estabilidade. Recomenda-se atenção à validação de testes em #906 antes de merge.

*Relatório gerado em 2026-05-11 com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-05-11
**Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** em 11 de maio de 2026. De um lado, **Hermes Agent, ZeroClaw e IronClaw** demonstram atividade massiva com 50+ eventos diários, indicando projetos em alta tração e desenvolvimento acelerado. Do outro, **NullClaw, NanoBot e CoPaw** mantêm ritmo consistente com foco em estabilização e correção de bugs críticos. O **PicoClaw** ocupa posição intermediária, equilibrando features de UX com manutenção de estabilidade. Observa-se convergência temática: todos os projetos investem em multi-agente, resiliência de canais (Discord/Telegram/Matrix) e otimização de contexto/token. A principal fragilidade transversal é o **gerenciamento assíncrono** (bugs asyncio cross-loop afetam múltiplos projetos) e **regressões em refactors de componentes core** (HTTP/DNS, context compression).

---

## 2. Comparação de Atividade

| Projeto | Issues (ativas/fechadas 24h) | PRs (abertos/merged 24h) | Releases | Bugs Críticos Abertos | Saúde Geral |
|---------|------------------------------|-------------------------|----------|----------------------|-------------|
| **NullClaw** | 0 / 1 | 3 / 0 | 0 | 0 (1 resolvido) | ✅ Estável |
| **NanoBot** | 3 / 2 | 4 / 2 | 0 | 1 (context compression) | ⚠️ Atenção |
| **Hermes Agent** | 41 / 9 | 36 / 14 | 0 | 1 P1 (v0.13.0 regression) | ⚠️ Regressões |
| **PicoClaw** | ~5 / ~2 | 8 / 1 | 1 nightly | 1 (PID crash loop) | 🟡 Funcional |
| **IronClaw** | 10 / ~7 | 31 / 7 | 0 | 1 (onboard DB) | ⚠️ Integração |
| **CoPaw** | 9 / 2 | 9 / 1 | 0 | 2 (session loss, UX feedback) | ⚠️ Backlog |
| **ZeroClaw** | 21 / ~10 | 29 / ~10 | 0 | 6 P1 | 🔴 Crítico |

**Observações Quantitativas:**

- **Maior volume absoluto:** Hermes Agent e ZeroClaw (50 eventos cada)
- **Maior taxa de resolução:** NullClaw (100% em 24h) e PicoClaw (1 merged)
- **Maior risco imediato:** ZeroClaw (6 P1 bugs) e CoPaw (session loss em produção)
- **Projects em sprint de integração:** IronClaw (Reborn), ZeroClaw (v0.8.0)

---

## 3. Posicionamento do Projeto Principal

Os projetos variam significativamente em **tamanho de comunidade, estratégia técnica e público-alvo**:

| Projeto | Tamanho Comunidade | Diferencial Técnico | Público-Alvo |
|---------|-------------------|--------------------|--------------|
| **Hermes Agent** | Maior (50/50 events) | Multi-plataforma (10+ canais), memory providers, /handoff cross-device | Usuários enterprise, multi-device |
| **ZeroClaw** | Grande (50 events) | Multi-agent runtime completo, schema V3, ACP protocol | Desenvolvedores avançados, researchers |
| **IronClaw** | Médio-Grande (41 events) | Arquitetura Reborn modular, type safety, CLI standalone | Rust developers, arquitetos de sistemas |
| **NanoBot** | Médio (11 events) | Plugin auto-descritivo, self-correction hooks, local whisper | Privacidade-first, on-premise |
| **PicoClaw** | Médio (16 events) | Steering chains, synthesis de replies, Telegram Business | UX-first, integração Telegram |
| **CoPaw** | Médio (21 events) | Matrix E2EE, Octopus model groups, first-timer friendly | Novos contribuidores, Matrix users |
| **NullClaw** | Pequeno (4 events) | Security hardening, lazy shell sandbox, DNS resilience | Segurança-first, stability-focused |

**Vantagens Competitivas por Segmento:**

- **Hermes Agent:** Maior ecosystem coverage (_channels_, providers, memory)
- **ZeroClaw:** Feature set mais completo para multi-agent em produção
- **IronClaw:** Superior type safety e modularidade Rust
- **NanoBot:** Simplicidade e auto-correction pragmática
- **NullClaw:** Postura de segurança mais robusta

---

## 4. Focos Técnicos Compartilhados

Os sete projetos demonstram convergência em **seis áreas técnicas prioritárias**:

### 4.1 Resiliência Multi-Canal

| Projeto | Foco |
|---------|------|
| NullClaw | Discord Android gateway stalls, DNS retry |
| Hermes Agent | Matrix, WeChat, Feishu, WhatsApp, Discord asyncio bugs |
| PicoClaw | Telegram Business mode, media handling |
| ZeroClaw | Discord media, allowed_channels, Matrix SDK |

**Padrão:** Suporte a 5-10 canais simultâneos com bugs específicos por plataforma (Windows/WSL, Android, Linux).

### 4.2 Gerenciamento de Contexto/Token

| Projeto | Abordagem |
|---------|-----------|
| NanoBot | Context compression fix, KV cache stability |
| Hermes Agent | Lazy tool schema loading (3.500-5.000 tokens/call) |
| IronClaw | VisibleCapabilityRequest, TurnRunScheduler |
| ZeroClaw | System messages no início do history |

**Padrão:** Todos os projetos enfrentam o mesmo problema de **token overhead crescente** com mais tools/plugins.

### 4.3 Bugs Asyncio Cross-Loop

**Problema transversal identificado em Hermes Agent e ZeroClaw:**

```
"asyncio 'Future attached to different loop'" — WeChat #23371
"run_in_terminal coroutines não awaited" — CLI/WSL #23185
"RuntimeWarning coroutine never awaited" — /clear #23297
```

**Impacto:** Plataformas Node.js/Telegram/WeChat falham silenciosamente em cenários de alta concorrência.

### 4.4 Multi-Agent e Permissões

| Projeto | Implementação |
|---------|---------------|
| ZeroClaw | Workspaces isolados por alias, SubAgents herdeiros |
| PicoClaw | Tool policies via AGENT.md frontmatter |
| IronClaw | CapabilityCatalog, ProductWorkflow facade |
| Hermes Agent | Agent roster enforcement plugin |

**Padrão:** Migration de architectures single-agent para multi-agent com isolamento de memória e permissions.

### 4.5 Providers e Abstração de LLMs

| Projeto | Progresso |
|---------|-----------|
| NanoBot | NVIDIA NIM provider (PR #3707 merged) |
| PicoClaw | Ollama cloud credentials demand (11 comments) |
| Hermes Agent | Recall provider bundle (9º memory provider) |
| CoPaw | Volcano Engine fix, Octopus model failover |

**Padrão:** Diversificação de providers para reduzir vendor lock-in.

### 4.6 Segurança e Auth

| Projeto | Ação |
|---------|------|
| NullClaw | Hardening de webhooks, HTTP secrets, inbound trust |
| CoPaw | MD5 → SHA-256, TLS customizado em MCP |
| ZeroClaw | ApprovalManager bypass (P1 security issue) |
| IronClaw | Wasmtime CVEs upstream (bloqueando crates.io publish) |

**Padrão:** Security hardening é prioridade universal, especialmente em integrações externas.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Filosofia

| Aspecto | NullClaw | NanoBot | Hermes Agent | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|---------|----------|---------|--------------|----------|----------|-------|----------|
| **Paradigma** | Agentic core minimalista | Cognitive agent adaptativo | Swiss-army agent | Steering-focused | Modular Rust crates | Plugin ecosystem | Multi-agent runtime |
| **Estado** | Estável | Evoluindo | Maturando | Feature-rich | Reborn architecture | Crescendo | v0.8.0 integration |
| **Extensibilidade** | Plugins via config | Plugin auto-descritivo | MCP native | AGENT.md frontmatter | Crate extraction | Plugin registry | Schema V3 + ACP |

### 5.2 Público-Alvo e Casos de Uso

| Projeto | Uso Primário | Diferenciação |
|---------|-------------|---------------|
| **NullClaw** | Production stability | Segurança e reliability sobre features |
| **NanoBot** | Personal agent, on-premise | Privacidade e auto-correction |
| **Hermes Agent** | Multi-device personal assistant | Cobertura máxima de plataformas |
| **PicoClaw** | Telegram-centric workflows | UX em conversas complexas |
| **IronClaw** | Embedded/Rust integration | Type safety, performance |
| **CoPaw** | Matrix-based teams | E2EE, first-timer friendly |
| **ZeroClaw** | Advanced multi-agent | Feature completeness, ACP |

### 5.3 Divergências Técnicas Significativas

**NullClaw vs. NanoBot:**
- NullClaw prioriza segurança de credenciais (hardening de webhooks)
- NanoBot prioriza adaptação cognitiva dinâmica (vs. "prisão de prompts estáticos")

**Hermes Agent vs. ZeroClaw:**
- Hermes: "agente para tudo" (10+ canais)
- ZeroClaw: "agente multi-agent completo" (workspaces isolados, permissions)

**IronClaw vs. CoPaw:**
- IronClaw: arquitetura de longo prazo (Reborn, modularização agresiva)
- CoPaw: iteração rápida orientada a comunidade (6 first-timers em 24h)

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Característica |
|-----------|----------|----------------|
| **Iteração Rápida** | Hermes Agent, ZeroClaw, IronClaw | 50+ eventos/dia, múltiplos PRs merged, regressões aceitas como custo |
| **Estabilização** | NullClaw, PicoClaw | Foco em qualidade, poucos eventos mas alta taxa de resolução |
| **Crescimento** | NanoBot, CoPaw | Novos contribuidores (first-timers), bugs críticos sendo priorizados |

### 6.2 Maturidade de Processo

| Indicador | Melhor Performance | Pior Performance |
|-----------|-------------------|------------------|
| **Tempo de resposta a bugs** | NullClaw (24h para crítico) | IronClaw (19 dias P1 onboard) |
| **Comunicação de roadmap** | Hermes Agent (documentação /handoff) | PicoClaw (11 comentários em #2225 sem resposta) |
| **Triagem de issues** | ZeroClaw (6 P1 em progresso) | CoPaw (#3843 há 15 dias) |
| **Segurança disclosures** | CoPaw (false positive transparente) | ZeroClaw (ApprovalManager bypass P1) |

### 6.3 Engajamento de Contribuidores

| Projeto | Sinais de Saúde |
|---------|----------------|
| **CoPaw** | 6 PRs de first-timers em 24h — crescimento saudável |
| **Hermes Agent** | 50/50 events — community madura e ativa |
| **IronClaw** | Zero reações (thumbs up) — possivelmente comunidade interna |
| **NanoBot** | Issue #3724 com feedback qualitativo profundo ("牢笼" / prisão) |

### 6.4 Dívida Técnica Cruzada

| Problema | Projetos Afetados | Severidade |
|----------|-------------------|------------|
| Asyncio cross-loop | Hermes Agent, ZeroClaw | 🔴 Alta |
| Regressões em refactors HTTP/DNS | NullClaw (resolvido), ZeroClaw | 🟠 Média |
| Context/token blow-up | Todos | 🟡 Crônica |
| Windows/WSL parity | Hermes Agent, PicoClaw | 🟡 Crônica |
| crates.io desatualizado | IronClaw (3 versões gap) | 🟠 Supply chain |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Agent é o próximo battlefield**

Evidência: ZeroClaw v0.8.0 (#6545 merged), IronClaw Reborn, PicoClaw tool policies, Hermes Agent roster enforcement.

> O ecossistema está migrando de "agente único" para "swarm de agentes" com workspaces isolados, permissions granulares e comunicação inter-agente.

**2. Privacidade e On-Premise como diferencial**

Evidência: NanoBot local whisper (#3723), CoPaw TLS customizado (#4175), demanda por Ollama cloud (#2225).

> Usuários avançados buscam alternativas a provedores cloud (OpenAI/Groq), especialmente em ambientes regulated (LGPD, HIPAA).

**3. Dynamic Cognition vs. Static Prompts**

Evidência: NanoBot issue #3724 ("固定系统提示词是牢笼"), Hermes Agent LoopDetectHook.

> Comunidade exige agentes que **adaptam comportamento dinamicamente** conforme tarefa, não apenas configuráveis estaticamente.

**4. Token Optimization como feature parity**

Evidência: Hermes Agent #6839 (3.500-5.000 tokens/call problema), NanoBot KV cache fix, IronClaw visible surface contracts.

> Com 50+ tools/plugins, overhead de contexto se tornou bottleneck crítico. Lazy loading e two-pass approaches emergem como padrão.

**5. UX em Conversas Complexas**

Evidência: PicoClaw steering-chain synthesis (#2842), NanoBot self-correction hooks (#3728).

> Diferenciação shift de "agente funciona" para "agente responde bem em follow-ups sequenciais".

**6. Windows como plataforma de primeira classe**

Evidência: Hermes Agent 3 PRs Windows em 24h, PicoClaw PID crash, CoPaw console flash fix.

> Base de usuários Windows em crescimento — suporte parity é agora expectativa, não feature.

### 7.2 Tendências Arquiteturais

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Plugin Architecture** | NanoBot #3729, CoPaw OpenWond, IronClaw extract crates | Ecossystem de third-parties |
| **Type Safety** | IronClaw typed identities, Hermes Agent schemas | Menos runtime errors |
| **Memory as Service** | Hermes Recall, CoPaw memory-distill, IronClaw checkpoint | Persistência de longo prazo |
| **Cross-Platform Parity** | Hermes Agent 10+ channels, ZeroClaw ACP | "Works everywhere" expectation |

### 7.3 Riscos Sistêmicos Identificados

| Risco | Probabilidade | Impacto | Projetos |
|-------|---------------|---------|----------|
| Asyncio bugs em produção | Alta | Alto | Hermes, ZeroClaw |
| Regressões em refactors core | Alta | Alto | Todos |
| Supply chain (crates.io gap) | Média | Alto | IronClaw |
| Security bypass não resolvido | Média | Crítico | ZeroClaw |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-05-11 demonstra **saúde funcional com tensão entre velocidade e qualidade**. Projetos como Hermes

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-11

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 11 de maio de 2026, com 5 issues e 6 pull requests atualizados nas últimas 24 horas. O projeto está em plena evolução com foco em **estabilidade do agente** (correção de bugs críticos de contexto compress e KV cache) e **extensibilidade** (nova arquitetura de plugins e suporte a provedores como NVIDIA NIM). Nenhum release foi publicado hoje, indicando que a equipe pode estar em ciclo de consolidação antes de uma nova versão. A relação entre issues abertas (3) e fechadas (2) sugere um fluxo saudável de resolução de problemas.

---

## 2. Lançamentos

**Nenhum novo release publicado nas últimas 24 horas.**

O último release visível permanece inalterado. A ausência de versão nova é coerente com o padrão de merges recentes (PRs #3707 e #3711 fechados hoje), sugerindo que contribuições estão sendo acumuladas para um próximo tag. Recomenda-se monitorar a branch `main` para upcoming release.

---

## 3. Progresso do Projeto

Três PRs chegaram ao estado **merged/closed** recentemente, trazendo avanços significativos:

| PR | Título | Impacto |
|----|--------|---------|
| [#3707](https://github.com/HKUDS/nanobot/pull/3707) | feat: add NVIDIA NIM provider support | Integração com NVIDIA NIM como novo provedor de modelos, expandindo opções de backend para usuários |
| [#3711](https://github.com/HKUDS/nanobot/pull/3711) | fix(agent): move archived summary into system prompt for KV cache stability | Correção técnica que move resumos arquivados do contexto de runtime para o system prompt, eliminando waste de KV cache entre turns — melhora direta na eficiência de inference |

O PR #3711 é particularmente relevante: resolve um gargalo de performance onde resumos de conversas geravam recálculos desnecessários a cada interação, impacting diretamente latência e custo de operação.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#3724 — "[enhancement] 感谢nanobot作为我项目的基座，非常感谢各位付出，向你们致敬。"** (4 comentários)  
🔗 [Issue #3724](https://github.com/HKUDS/nanobot/issues/3724)

Esta issue foi **fechada**, mas seu conteúdo revela uma **demanda estratégica significativa**: o usuário propõe que o NanoBot evolua de um agente com prompts/ferramentas/knowledge base **estáticos** para um modelo com **postura cognitiva dinâmica**. A crítica central é que a arquitetura atual "enjaula" o agente em comportamento repetitivo ("复读机" / "máquina de repetir"), limitando emergência e adaptação.

**Demanda-chave:**
> Permitir variação dinâmica de system prompts, toolset e knowledge base conforme o tipo de tarefa — em vez de carregar um conjunto fixo em todas as interações.

Esta solicitação alinhado diretamente com a direção técnica do PR #3729 (plugin architecture), sugerindo que a equipe já está considerando abordagens mais modulares.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico

**#3726 — "上下文压缩bug。导致系统无法运行。"** (OPEN)  
🔗 [Issue #3726](https://github.com/HKUDS/nanobot/issues/3726)

**Resumo:** Bug na consolidação de contexto (função `maybe_consolidate_by_tokens`) está causando **falha total do sistema**. O log mostra:
```
Token consolidation: no safe bo...
```
A compressão de contexto está falhando silenciosamente ou causando crash, impedindo funcionamento em canais QQ.

**Severidade:** Alta — bloqueia operações em produção.

---

### 🟡 Alto

**#3637 — "Transcription Provider Configuration Is Not Transparent Enough"** (OPEN)  
🔗 [Issue #3637](https://github.com/HKUDS/nanobot/issues/3637)

**Resumo:** Configuração de transcription via Groq (`apiBase: https://api.groq.com/openai/v1`) causa setups inválidos. Usuários reportam dificuldade em entender qual endpoint está sendo usado para transcrição de áudio.

**Status:** PR #3663 vinculado aborda este problema — normalização de endpoints.

---

**#2829 — "Ollama tool calling broken"** (OPEN)  
🔗 [Issue #2829](https://github.com/HKUDS/nanobot/issues/2829)

**Resumo:** Tool calling com Ollama (ex: `gemma4:e4b`) está retornando respostas fabricadas ("hallucinations") em vez de executar ferramentas. Suspeita-se de formatação quebrada no forwarding para Ollama.

**Impacto:** Afeta usuários de modelos locais via Ollama — cenário comum em ambientes com privacidade de dados.

---

### 🟢 Correção Recente

**#3469 — "deepseek-v4 API error: reasoning_content must be passed back"** (CLOSED)  
🔗 [Issue #3469](https://github.com/HKUDS/nanobot/issues/3469)

Bug relacionado ao reasoning mode do deepseek-v4 foi **resolvido** (provavelmente via merge de hotfix não rastreado nos dados de 24h). Mantenha monitoramento para regressões.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🔧 PRs Abertos Indicativos de Direção

**#3729 — "refactor(tools): plugin architecture with self-describing tools"**  
🔗 [PR #3729](https://github.com/HKUDS/nanobot/pull/3729)

Refatoração que migra o sistema de tools de `AgentLoop._register_default_tools()` (hardcoded, ~50 linhas) para um **padrão de plugin auto-descritivo** (~25 linhas). Cada tool agora declara:
- Classe de configuração
- Condição de habilitação
- Factory method via metadata na ABC `Tool`
- `ToolLoader` para descoberta automática

**Implicação:** preparando terreno para ecosystem de plugins externos e configuração declarativa.

---

**#3728 — "feat(agent): add LoopDetectHook and ReflectRetryHook for agent self-correction"**  
🔗 [PR #3728](https://github.com/HKUDS/nanobot/pull/3728)

Adiciona dois hooks leves para **auto-correção do agente**:
1. **LoopDetectHook** — detecta loops de tool calls repetitivos e interrompe antes do limite de iteração
2. **ReflectRetryHook** — evita "blind retries" onde o agente tenta o mesmo erro com os mesmos argumentos

**Impacto:** resolve problema #2829 (Ollama tool calling) e melhora robustez geral em cenários de falha.

---

**#3723 — "Local whisper transcription"**  
🔗 [PR #3723](https://github.com/HKUDS/nanobot/pull/3723)

Suporte a transcrição local via `faster-whisper` —，无需 API key ou acesso à rede. Usuários que não querem dependência de provedores externos (Groq, OpenAI) agora podem rodar transcrição inteiramente on-premise.

**Alinhamento com tendência:** privacidade de dados e offline-first.

---

## 7. Resumo de Feedback dos Usuários

| Categoria | Feedback | Sentimento |
|-----------|----------|------------|
| **Arquitetura do agente** | "固定系统提示词/工具集/认知库" é um "牢笼" (prisão) que impede emergência | 🔴 Frustração com rigidez |
| **Tool calling** | Modelos locais (Ollama) falham em executar ferramentas corretamente | 🔴 Frustração |
| **Transcrição** | Configuração não transparente; difícil debugar setups inválidos | 🟡 Confusão |
| **Postura cognitiva** | Desejo de agente adaptativo que mude comportamento conforme tarefa | 🟢 Entusiasmo |
| **Base como projeto** | Gratidão explícita pelo NanoBot como "基座" (fundação) para seus projetos | 🟢 Satisfação |

**Padrão emergente:** Usuários avançados querem um NanoBot mais **inteligente e adaptável**, não apenas configurável. A diferença entre "customizável" e "inteligente" (que 스스로 adapta) é a fronteira entre a visão atual e as demandas da comunidade.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

**#2829 — "Ollama tool calling broken"** (aberta há 36 dias, atividade em 2026-05-10)  
🔗 [Issue #2829](https://github.com/HKUDS/nanobot/issues/2829)

Apesar de haver PR #3728 (LoopDetectHook) que pode mitigar parcialmente, a issue original sobre **formatação de tool calls para Ollama** permanece sem diagnóstico conclusivo da equipe. Prioridade: técnico, impacto em usuários on-premise.

**Ação recomendada:** Revisão de código de forwarding para Ollama — especificamente como tool schemas são formatados e traduzidos para o formato ChatML do Ollama.

---

**#3637 — "Transcription Provider Configuration Is Not Transparent Enough"** (aberta há 5 dias)  
🔗 [Issue #3637](https://github.com/HKUDS/nanobot/issues/3637)

Com PR #3663 vinculado e aparentemente em revisão, esta issue deve ser **resolvida brevemente**. Contudo, expõe necessidade de **documentação de configuração de providers** mais clara.

---

## Métricas Consolidada do Dia

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (abertas) | 3 | 🟢 Saudável |
| Issues fechadas (24h) | 2 | 🟢 Fluxo positivo |
| PRs abertos | 4 | 🟢 Em desenvolvimento |
| PRs merged/fechados | 2 | 🟢 Progresso visível |
| Novas releases | 0 | 🟡 Aguardando ciclo |
| Bugs críticos abertos | 1 (#3726) | 🔴 Requer atenção |
| PRs alinhados com roadmap | 3 (#3729, #3728, #3723) | 🟢 Boa direção |

---

**Próximos marcos a observar:**
1. Resolução do bug #3726 (compressão de contexto)
2. Merge do PR #3729 (plugin architecture) — base para expansão do ecosystem
3. Merge do PR #3728 (self-correction hooks) — impacto direto na estabilidade do agente
4. Potencial release acumulando as contribuições da semana

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-11. Todos os links referenciam github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-05-11

---

## 1. Panorama do Dia

O Hermes Agent manteve **atividade intensa** em 11 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de fechamento está saudável (9 issues e 14 PRs resolvidos), sinalizando maturidade na triagem. **Destaque para regressões críticas** em v0.13.0 com ferramentas nativas ausentes (P1) e bugs de asyncio cross-loop em plataformas (P2). O projeto demonstra alta adoção multi-plataforma, com reports vindos de Matrix, Feishu, WeChat, WhatsApp e Discord. A comunidade está particularmente ativa em otimizações de token overhead (tool schema loading) e em fixes de estabilidade no CLI Windows/WSL.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

> ⚠️ **Atenção:** Releases estáticas ausentes podem indicar que a equipe está em ciclo de feature-freeze para a próxima versão. Recomenda-se monitorar releases futuras para possível breaking change em ferramentas nativas (cf. issue #22573).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (10 itens mais relevantes)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#23394](https://github.com/NousResearch/hermes-agent/pull/23394) | fix(windows): unbreak install + update on Windows (3 issues) | teknium1 | **Crítico** — Resolve blockers de instalação e update no Windows (pyproject.toml, hermes.exe) |
| [#23395](https://github.com/NousResearch/hermes-agent/pull/23395) | feat(session): make /handoff actually transfer the session live | teknium1 | **Alto** — Handoff cross-platform agora transfere sessão em tempo real, não mais diferido |
| [#23401](https://github.com/NousResearch/hermes-agent/pull/23401) | fix(kanban): dedupe notifier delivery | teknium1 | **Médio** — Corrige race condition em multi-profile gateways causando notificações duplicadas |
| [#23397](https://github.com/NousResearch/hermes-agent/pull/23397) | test(conftest): block tests from killing live hermes-gateway | teknium1 | **Stabilidade** — Fixture hermético previne SIGTERM acidental no gateway em pytest runs |
| [#23400](https://github.com/NousResearch/hermes-agent/pull/23400) | docs(sessions): document /handoff cross-platform | teknium1 | **Docs** — Documentação de handoff para Telegram, Discord, Slack, WhatsApp, Signal, Matrix, SMS |
| [#22090](https://github.com/NousResearch/hermes-agent/pull/22090) | refactor(matrix): remove delayed reaction redaction | Phoenix1819 | **Performance** — Remove Task.sleep de 5s por reação; redauração imediata |
| [#23377](https://github.com/NousResearch/hermes-agent/pull/23377) | feat(memory): bundle Recall provider | HenkDz | **Feature** — Recall como 9º provider de memória (SQLite/FTS5, hash-chain, redacao-at-rest) |
| [#22558](https://github.com/NousResearch/hermes-agent/pull/22558) | fix(kanban): dedupe kanban notifier | quocanh261997 | **Stabilidade** — Precede #23401; mesma correção em diferente branch |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria | Análise |
|---|--------|-------------|----|-----------|---------|
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | Agent incapaz de responder baseado em contexto previo | 13 | 0 | **Bug Crítico** | Regressão de memória de longa conversa; 8 mensagens de contexto perdidas; afeta experiência multi-turn |
| [#4807](https://github.com/NousResearch/hermes-agent/issues/4807) | CLI ilegível em terminais claros — sem light mode | 7 | 9 | **UX/Acessibilidade** | Todos os 7 skins usam texto claro; 9 reações indicam demanda real; barreira para devs com setup não-padrão |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass | 6 | 8 | **Performance** | 3.500-5.000 tokens/call em 50+ tools; 8 👍 confirmam gargalo; proposta two-pass reduz overhead sem quebra de API |

### Temas Emergentes

- **🗣️ Suporte Multi-idioma:** Issue #23406 corrige locale Irlandês (ga), demonstrando expansão de i18n
- **📦 Bundling de Providers:** Recall provider (#23377/#23403) mostra tendência de incluir mais providers "batteries-included"
- **🔐 Auth Oauth:** Codex OAuth via browser (#15259) sinaliza evolução de auth flow

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 — Críticos (ação imediata)
| # | Bug | Plataforma/Componente | Status |
|---|-----|------------------------|--------|
| [#22573](https://github.com/NousResearch/hermes-agent/issues/22573) | Native tools faltando em todas as sessões (v0.13.0); apenas MCP tools carregam | Gateway/CLI | **CLOSED** |

#### 🟠 P2 — Altos (alta prioridade)
| # | Bug | Componente |
|---|-----|------------|
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway: sem channel para orchestration downstream | Gateway/Matrix |
| [#7886](https://github.com/NousResearch/hermes-agent/issues/7886) | vision_analyze falha com "Invalid image source" | Tool/Vision (Kimi) |
| [#23185](https://github.com/NousResearch/hermes-agent/issues/23185) | run_in_terminal coroutines não awaited — perda silenciosa de output | CLI/WSL |
| [#20558](https://github.com/NousResearch/hermes-agent/issues/20558) | Delegation subagents falham credenciais em providers mistos | Tool/Delegate |
| [#23381](https://github.com/NousResearch/hermes-agent/issues/23381) | memory tool replace/remove falha mesmo com old_text fornecido | Tool/Memory |
| [#23371](https://github.com/NousResearch/hermes-agent/issues/23371) | WeChat: asyncio 'Future attached to different loop' | Gateway/WeChat |

#### 🟡 P3 — Médios
| # | Bug | Componente |
|---|-----|------------|
| [#23297](https://github.com/NousResearch/hermes-agent/issues/23297) | RuntimeWarning coroutine nunca awaited em /clear e /new | CLI |
| [#23096](https://github.com/NousResearch/hermes-agent/issues/23096) | _last_poll_timestamps sem lock protection | MCP |
| [#23140](https://github.com/NousResearch/hermes-agent/issues/23140) | Gateway não invoca pre_llm_call/post_llm_call hooks | Gateway |
| [#23404](https://github.com/NousResearch/hermes-agent/issues/23404) | Cron bash script path mangled por backslash no Windows | Cron |

### Padrões Identificados
1. **Asyncio cross-loop bugs** aparecem em múltiplas plataformas (WeChat #23371, Matrix #22714)
2. **CLI async/await** problemas recorrentes com `run_in_terminal` (#23185, #23297, #23009)
3. **Memory tools** apresentam inconsistência entre schema e handler (#23381, #23296)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial

| # | Feature | 👍 | Complexidade | Sinal de Roadmap |
|---|---------|----|--------------|------------------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading (Two-Pass) | 8 | Alta | **Alta probabilidade** — Token overhead é demanda recorrente; issue #13332 complementa |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | Hybrid Tool Pre-Selection (RAG-style) | 1 | Alta | Complementa #6839; abordagens podem ser convergidas |
| [#11014](https://github.com/NousResearch/hermes-agent/issues/11014) | Local machine como backend via SSH-proxied TUI | 1 | Média | Usuários multi-machine; mercado de devs remotos |
| [#15731](https://github.com/NousResearch/hermes-agent/issues/15731) | Chat tab no web dashboard com --host não-localhost | 0 | Baixa | Usabilidade; conecta com Tailscale/access remoto |
| [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) | Provider/model inventory scriptable | 0 | Média | 5 PRs reinventam; 4 issues bloqueadas — necessidade clara de API統一 |

### Novas Features em PR

| # | Feature | Autor | Impacto |
|---|---------|-------|---------|
| [#20743](https://github.com/NousResearch/hermes-agent/pull/20743) | Pocket TTS (Kyutai Labs) — 6 idiomas, voice cloning | dusterbloom | TTS multilíngue local |
| [#15259](https://github.com/NousResearch/hermes-agent/pull/15259) | Browser OAuth login para Codex | kaskabayev | UX de auth simplificada |
| [#23392](https://github.com/NousResearch/hermes-agent/pull/23392) | Agent roster enforcement plugin | Clank2000 | Governança multi-agent |
| [#23390](https://github.com/NousResearch/hermes-agent/pull/23390) | Surface missing gateway dependencies | burrowpuffin | DX melhorado |

### Sinais de Direcao Estratégica
- **Memory providers:** Recall bundle (#23403) + documentação indicam investimento em memória de longo prazo
- **Cross-platform:** /handoff live (#23395) + docs (#23400) = foco em experiência multi-dispositivo
- **Windows parity:** 3 PRs Windows em 24h (#23404, #23405, #23408) = priorização de suporte

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Perda de contexto em conversas longas** | #14420 (13 comentários, closed sem resolução clara) | Crítica |
| **CLI ilegível em terminais claros** | #4807 (7 comentários, 9 👍) | UX alta |
| **Ferramentas nativasausentes em v0.13.0** | #22573 (regressão P1) | Crítica |
| **Token overhead excessivo** | #6839 (8 👍, 6 comentários) | Performance |
| **Windows/WSL broken em múltiplas features** | #23185, #23404, #23408 | Estabilidade |

### Cenários de Uso Reportados
1. **Agente pessoal multi-plataforma:** Matrix para ops team (#22714), Discord para comunidade, Feishu para mercado chinês
2. **Ambiente de desenvolvimento remoto:** Desktop + MacBook acessando Hermes remoto (#11014)
3. **Memory-as-knowledge-base:** Recall provider para archival e curadoria (#23403)
4. **Multi-agent orchestration:** Delegation com subagents (#20558), agent roster enforcement (#23392)

### Satisfação vs. Insatisfação
- ✅ **Satisfação:** Funcionalidade core de chat funciona; memory injection funciona (exceto bugs específicos)
- ⚠️ **Insatisfação:** Onboarding Windows problemático; light mode ausente; regression v0.13.0
- 📈 **Tração:** 50 issues + 50 PRs em 24h indica comunidade ativa e engajada

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#11014](https://github.com/NousResearch/hermes-agent/issues/11014) | Local machine como backend (SSH TUI) | 2026-04-16 | OPEN | Feature |
| [#4807](https://github.com/NousResearch/hermes-agent/issues/4807) | CLI light mode | 2026-04-03 | OPEN (7 comentários, 9 👍) | UX |
| [#15259](https://github.com/NousResearch/hermes-agent/issues/15259) | Browser OAuth Codex | 2026-04-24 | OPEN (PR existe) | Auth |
| [#5919](https://github.com/NousResearch/hermes-agent/issues/5919) | Gemini/OpenCode provider detection | 2026-04-07 | OPEN (PR existe) | Provider |

### Recomendações para Maintainers

1. **🔴 Prioridade Crítica:** Resolver pattern de asyncio cross-loop (#23371, #22714, #23140) — afeta múltiplas plataformas
2. **🟠 Prioridade Alta:** Padronizar `run_in_terminal` async/await no CLI (#23185, #23297, #23009)
3. **🟡 Prioridade Média:** Publicar light mode theme (#4807) — 9 👍, barreira de entrada para devs
4. **🟢 Oportunidade:** Convergir proposals #6839 e #13332 em uma solução unificada de tool schema optimization

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 41 |
| PRs abertos | 36 |
| Issues fechadas (24h) | 9 |
| PRs merged/fechados (24h) | 14 |
| Releases | 0 |
| P1 bugs | 1 (resolvido) |
| P2 bugs abertos | 6 |
| Features em desenvolvimento | 5+ PRs |
| Saúde geral | ⚠️ **Atenção** — Regressão v0.13.0 + bugs async multi-plataforma requerem ação |

**Conclusão:** O Hermes Agent demonstra **saúde funcional** com alta atividade comunitária, mas há **regressões e padrões de bugs** (async, Windows, CLI) que merecem atenção dos maintainers. A direção estratégica está clara: memory-as-service, cross-platform parity e token optimization.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-11

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 11 de maio de 2026, com 7 issues e 9 pull requests atualizados nas últimas 24 horas. A equipe manteve um ritmo acelerado de desenvolvimento, com pelo menos **1 release nightly** e **1 PR merged** relacionado a synthesis de respostas para chains de steering. A maioria das atividades concentra-se em melhorias de UX para turnos com múltiplos follow-ups e suporte expandido a canais (Telegram Business mode). O estado geral indica um projeto saudável com desenvolvimento ativo focado em estabilidade e experiência do usuário.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.8-nightly.20260510.6e6293e5

| Atributo | Detalhe |
|----------|---------|
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Unstable — uso em produção não recomendado |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.8...main |

**Resumo:** Este build automatizado representa o estado mais recente do branch `main`. Por ser um nightly build, pode conter funcionalidades em desenvolvimento ou correções ainda não testadas em produção. Usuários devem aguardar a próxima release estável para adoção em ambientes críticos.

**Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

#### ✅ #2842 — Feature: synthesize steering-chain final replies from action log
**Autor:** bogdanovich | **Data:** 2026-05-10

| Métrica | Valor |
|---------|-------|
| Status | Merged |
| Relacionado | #2841 |

**Avanço:** Implementa um modo opcional de síntese de replies finais para turnos com múltiplas ações de steering. Ao invés de depender apenas da última resposta do modelo, o sistema agora constrói uma reply terminal a partir de um log compacto de resultados explícitos orientados ao usuário. Isso melhora significativamente a UX em cenários onde múltiplas ações são executadas sequencialmente.

**Link:** https://github.com/sipeed/picoclaw/pull/2842

---

### PRs Abertos com Alto Impacto

| PR | Descrição | Autor | Prioridade |
|----|-----------|-------|------------|
| [#2844](https://github.com/sipeed/picoclaw/pull/2844) | Add same-agent final turn render para steering-heavy turns | bogdanovich | 🔴 Alta |
| [#2845](https://github.com/sipeed/picoclaw/pull/2845) | Telegram business mode support | stolyarchuk | 🟡 Média |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | Per-message created_at timestamps | LiusCraft | 🟡 Média |
| [#2783](https://github.com/sipeed/picoclaw/pull/2783) | Keep media store aligned after gateway reload | zhangxinping666 | 🟡 Média |
| [#2830](https://github.com/sipeed/picoclaw/pull/2830) | Async delivery policy para specialist results | bogdanovich | 🟡 Média |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | Fix codex streaming + telegram duplicate retries | Glucksberg | 🔴 Alta |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue com Maior Engajamento

#### #2225 — [Feature] Ollama cloud credentials
**Autor:** Suisei110 | **Status:** Aberta | **Comentários:** 11

**Demanda:** Usuários solicitam suporte para credenciais de Ollama Cloud (serviço gerenciado), permitindo conexão com modelos hospedados remotamente sem necessidade de infraestrutura própria.

**Análise:** Com 11 comentários, esta é a issue mais discutida do período. Indica demanda real por diversificação de provedores, especialmente para usuários que preferem soluções managed over self-hosted. A ausência de suporte atual força usuários a workarounds ou migração para outros provedores.

**Link:** https://github.com/sipeed/picoclaw/issues/2225

---

### 🎯 Tema Recorrente: Steering-Heavy Turns

A comunidade demonstra forte interesse em melhorias para turnos com múltiplas interações de steering:

| Issue/PR | Título | Status | Comentários |
|----------|--------|--------|-------------|
| [#2841](https://github.com/sipeed/picoclaw/issues/2841) | Synthesize steering-chain final replies | Closed | 1 |
| [#2843](https://github.com/sipeed/picoclaw/issues/2843) | Same-agent final no-tools render | Open | 0 |
| [#2844](https://github.com/sipeed/picoclaw/pull/2844) | Add same-agent final turn render | Open | — |
| [#2839](https://github.com/sipeed/picoclaw/issues/2839) | Steering final replies as new messages | Open | 1 |

**Padrão identificado:** O autor `bogdanovich` lidera um esforço coordenado para melhorar como o PicoClaw responde em conversas com múltiplos follow-ups, buscando respostas mais completas e contextualmente relevantes ao final de cadeias complexas.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados (Por Severidade)

#### 🔴 Alta Severidade

**#2720 — Singleton PID check crash loop**
- **Autor:** weissfl | **Criado:** 2026-04-30 | **Comentários:** 2
- **Domínio:** build
- **Resumo:** O gateway falha ao iniciar quando o arquivo PID contém um PID reutilizado por outro processo (ex: `systemd-resolved`). O singleton check verifica apenas se existe um processo com aquele PID, mas não valida se é realmente uma instância do picoclaw gateway.
- **Impacto:** Crash loop impede inicialização do serviço
- **Status:** Aberto (stale)

**Link:** https://github.com/sipeed/picoclaw/issues/2720

---

#### 🟡 Média Severidade

**#2749 — Bash evaluates relative path as absolute path**
- **Autor:** Chris-dash-T4 | **Criado:** 2026-05-02 | **Comentários:** 1
- **Domínio:** tool
- **Ambiente:** Go 1.25.9, Ubuntu 24.04, GLM-4.7-Flash em Llama.cpp
- **Resumo:** Bash interpreta caminhos relativos como absolutos, causando comportamento inesperado em comandos de shell.
- **Status:** Aberto (stale)

**Link:** https://github.com/sipeed/picoclaw/issues/2749

---

**#2839 — Steering-chain final replies edit placeholders em vez de criar novas mensagens**
- **Autor:** bogdanovich | **Criado:** 2026-05-09 | **Comentários:** 1
- **Domínio:** channel
- **Resumo:** Em canais que usam placeholder/tool-feedback editing, replies finais de steering chains são renderizados editando mensagens "Working..." anteriores ao invés de enviar como nova mensagem terminal.
- **Status:** Aberto

**Link:** https://github.com/sipeed/picoclaw/issues/2839

---

### 📊 Métricas de Bugs

| Métrica | Valor |
|---------|-------|
| Total bugs abertos | 3 |
| Bugs com prioridade alta | 1 |
| Bugs com标签 "stale" | 2 |
| Tempo médio sem resposta | ~5 dias |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

#### #2837 — Support allow/deny/glob tool policies in AGENT.md frontmatter
- **Autor:** bogdanovich | **Criado:** 2026-05-09 | **Comentários:** 0
- **Domínio:** multi-agent, capability filtering

**Proposta:** Permitir configuração granular de ferramentas por agente via frontmatter no AGENT.md, com suporte a políticas `allow`, `deny` e `glob`. Isso resolveria tool-context blow-up e estabeleceria ownership boundaries claros em setups multi-agente.

**Link:** https://github.com/sipeed/picoclaw/issues/2837

---

#### #2843 — Same-agent final no-tools render for steering-heavy turns
- **Autor:** bogdanovich | **Criado:** 2026-05-10 | **Comentários:** 0
- **Domínio:** UX, response generation

**Proposta:** Após execução de ferramentas em turnos com múltiplos follow-ups, fazer uma passada adicional do mesmo agente LLM para gerar resposta final mais contextualizada, evitando over-focus na última interação.

**Link:** https://github.com/sipeed/picoclaw/issues/2843

---

#### #2845 (PR) — Telegram Business Mode Support
- **Autor:** stolyarchuk | **Criado:** 2026-05-10
- **Nova funcionalidade:** Suporte a business accounts do Telegram com configuração `PICOCLAW_CHANNELS_TELEGRAM_BUSINESS_MODE`

**Link:** https://github.com/sipeed/picoclaw/pull/2845

---

### 📈 Sinais de Roadmap Indicados

| Área | Indicadores |
|------|-------------|
| **Multi-agent tooling** | #2837, #2830 |
| **UX turns complexos** | #2843, #2844, #2842 |
| **Provedores alternativos** | #2225 (Ollama Cloud) |
| **Canais** | #2845 (Telegram Business), #2758 (media groups) |
| **API/Frontend** | #2788 (timestamps) |

---

## 7. Resumo de Feedback dos Usuários

### 💬 Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Sem suporte a provedores cloud** | #2225 - 11 comentários | 🔴 Alta |
| **Crash ao iniciar com PID conflitante** | #2720 | 🔴 Alta |
| **Respostas incompletas em conversas longas** | #2841, #2843 | 🟡 Média |
| **Manipulação incorreta de mídia no Telegram** | #2758 | 🟡 Média |
| **Timestamps imprecisos na API de sessões** | #2788 | 🟢 Baixa |

### 🎯 Cenários de Uso Reportados

1. **Android TV + Termux + Telegram:** Um usuário mantém um nó PicoClaw em uma caixa Android TV com Termux, utilizando Telegram e OpenAI OAuth — cenário incomum mas real-world que expõe edge cases em streaming e retries.

2. **Multi-agent com boundaries claros:** Necessidade de filtragem granular de ferramentas por agente para evitar context blow-up.

3. **Tracking agents com follow-ups:** Cenários onde usuário faz perguntas sequenciais ("Quanto comi hoje? E ontem? E anteontem?") requerem respostas mais contextuais.

### 📊 Satisfação/Insatisfação

| Aspecto | Sentimento |
|---------|------------|
| Estabilidade em setups típicos | ✅ Positivo |
| Suporte a provedores alternativos | ⚠️ Insatisfeito |
| UX em turnos complexos | ⚠️ Em melhoria |
| Integração Telegram | ✅ Ativamente aprimorada |

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues Sem Resposta há Longo Tempo

#### Issues Stale com Prioridade

| Issue | Título | Criado | Atualizado | Dias Stale |
|-------|--------|--------|------------|------------|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama cloud credentials | 2026-03-31 | 2026-05-10 | ~40 dias |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID check crash loop | 2026-04-30 | 2026-05-10 | ~11 dias |
| [#2749](https://github.com/sipeed/picoclaw/issues/2749) | Bash relative path bug | 2026-05-02 | 2026-05-10 | ~9 dias |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | Codex streaming fix | 2026-04-09 | 2026-05-10 | ~31 dias |

---

### 🎯 Priorização Recomendada

```
IMEDIATO (Esta Semana):
├── #2720 - Bug crítico: crash loop ao iniciar
└── #2225 - Feature request com 11 comentários (comunicar status)

BREVE (Próximas 2 Semanas):
├── #2845 - Telegram Business mode (PR pronto)
├── #2844 - Steering final render (PR pronto)
└── #2840 - Steering replies as new messages (PR pronto)

MÉDIO PRAZO (Próximo Release):
├── #2837 - Tool policies in frontmatter
├── #2788 - Per-message timestamps
└── #2749 - Bash relative path fix
```

---

### 📋 Resumo Executivo

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade de desenvolvimento | 🟢 Alta | ↗️ Crescente |
| PRs abertas | 🟡 8 | → Estável |
| Bugs críticos abertos | 🟢 1 | ↘️ Melhorando |
| Features em desenvolvimento | 🟢 5+ | ↗️ Crescente |
| Comunicação com comunidade | 🟡 Moderada | → Estável |

**Conclusão:** O projeto PicoClaw demonstra saúde técnica e atividade consistente. A principal área de atenção é a comunicação sobre issues stale, especialmente #2225 que possui alta demanda da comunidade. O foco atual em UX para turnos complexos e suporte a canais adicionais indica direção estratégica alinhada com necessidades reais de usuários.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-11*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-11

## 1. Panorama do Dia

O projeto IronClaw mantém **atividade intensa**, com 31 PRs e 10 issues atualizados nas últimas 24h. O foco dominant remains na arquitetura **Reborn**, com 7 PRs fechados e diversas tranches de implementação em curso (loop driver, TurnRunner worker, storage substrate, ProductWorkflow facade). Uma preocupação operacional destaca-se: a publicação de versões em **crates.io está desfasada** (0.24.0) face aos tags GitHub (0.27.0), e os testes E2E noturnos falharam na última execução. O volume de dependabot PRs (5) e a quantidade de workstreams paralelos sugerem uma sprint de integração pesada.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

### Estado de Publicação Crates.io — Bloqueio Ativo

| Indicador | Valor |
|-----------|-------|
| Último tag GitHub | `ironclaw-v0.27.0` (29/abr/2026) |
| Último crates.io | `0.24.0` (31/mar/2026) |
| Gap de versões | 3 versões atrás |
| Causa raiz | CVEs no wasmtime 28.x a montante |

> **⚠️ Issue crítica:** [#3259 — Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259) reporta que consumidores downstream estão presos à 0.24.0. Este é um **risco de供应链** que precisa de resolução urgente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (7 total)

| # | PR | Tamanho | Resumo |
|---|----|--------|--------|
| #3450 | Finalize Reborn visible surface contract | M | Formaliza `VisibleCapabilityRequest` com `provider_trust` e política `default_strict` ([PR #3450](https://github.com/nearai/ironclaw/pull/3450)) |
| #3453 | refactor(reborn): type loop support identity fields | M | Substitui `String` por `TurnRunId`/`TurnId` tipados em `HostManagedModelRequest`; adiciona `CapabilityDeniedReasonKind` ([PR #3453](https://github.com/nearai/ironclaw/pull/3453)) |
| #3455 | feat(reborn): add standalone CLI binary crate | M | Introduce `crates/ironclaw_reborn_cli` + binário `ironclaw-reborn` + comando `doctor` ([PR #3455](https://github.com/nearai/ironclaw/pull/3455)) |
| #3439 | feat(reborn): add text-only loop driver host factory | XL | Factory `AgentLoopDriverHost` com ports tipados (contexto, prompt, capability, transcript, checkpoint, progress) ([PR #3439](https://github.com/nearai/ironclaw/pull/3439)) |
| #3438 | Add Reborn turn run scheduler | XL | `TurnRunScheduler` com wake nudges + bounded polling, `TurnRunExecutor` port ([PR #3438](https://github.com/nearai/ironclaw/pull/3438)) |
| #3442 | test(KB-037): verify LoopExit contract acceptance criteria | XS | Verifica 22/22 ACs + 7 novos testes de cobertura para `LoopExit` ([PR #3442](https://github.com/nearai/ironclaw/pull/3442)) |
| #3441 | test(KB-060): verify checkpoint state store acceptance criteria | XS | Verifica 9 ACs + testes de edge-case para `CheckpointStateStore` ([PR #3441](https://github.com/nearai/ironclaw/pull/3441)) |

**Avanços arquiteturais relevantes:**
- **CLI separado Reborn** (#3455): reduz acoplamento entre Reborn e root binary v1
- **Turn run scheduler** (#3438): infraestrutura genérica para scheduling de runs
- **Contract tests**: cobertura formal de LoopExit (22 ACs) e checkpoint state store (9 ACs)
- **Typed identity fields** (#3453): elimina "stringly typed" anti-pattern em boundary crossings

### PRs Abertos de Destaque (pipeline Reborn)

| # | PR | Tamanho | Conteúdo |
|---|----|---------|----------|
| #3458 | feat(reborn): extract boot config boundary | L | Novo crate `ironclaw_reborn_config`, separar home/profile/doctor contracts da CLI |
| #3457 | feat(reborn): add concrete TurnRunner worker composition | XL | `TurnRunnerWorker` com claim one-run-at-a-time, heartbeats, driver registry |
| #3454 | Add Reborn loop capability host-runtime adapter slice | XL | `HostRuntimeLoopCapabilityPort` com surface snapshot enforcement |
| #3428 | feat(reborn): add ProductWorkflow and InboundTurnService facade | XL | `ironclaw_product_workflow` — fachada entre product adapters e host-layer services |
| #3421 | Add Reborn shared storage substrate | XL | `ironclaw_storage` — persistence substrate genérico (BlobStore, RecordStore traits) |
| #3444 | fix(reborn): strengthen host runtime publication gates | M | E2E gates: `RedactOutput` + `EnforceOutputLimit` via `HostRuntimeServices` |
| #3446 | feat(reborn): add concrete TurnRunner worker composition | XL | Variante de #3457 — marcação diferenciada, mesmo domínio |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Status | Comentários | Tags |
|---|--------|--------|-------------|------|
| **#2987** | [[EPIC] Track Reborn architecture landing strategy](https://github.com/nearai/ironclaw/issues/2987) | OPEN | **44** | enhancement, high risk, docs, reborn |
| **#84** | feat: Agent system advanced features (multi-agent, streaming, thinking modes, elevated mode) | OPEN | 4 | scope: agent, scope: llm |
| **#3090** | [Reborn] Add ToolSurfaceService and CapabilityCatalog | CLOSED | 4 | reborn |
| **#3259** | Publish 0.25.0–0.27.0 to crates.io | OPEN | 2 | downstream, security |

### Análise de Demandas

**🔴 Epic de landing da arquitetura Reborn (#2987) — 44 comentários**  
A issue-âncora de todo o workstream Reborn. Os 44 comentários indicam **discussão arquitetural ativa** sobre como fragmentar o PR agrupado de landing em tranches menores e revisáveis. O tracking de estratégia está funcionando como fórum de design.

**🟡 Feature gap: Agent system advanced features (#84)**  
A issue documenta funcionalidades ausentes classificadas como P2-P3:
- Multi-agent routing com workspace isolation
- Global sessions (shared context cross-sender)
- Streaming mode
- Thinking mode
- Elevated mode

Este é um **sinal de roadmap claro**: a equipa está mapeando feature parity do agent system e priorizando estas capacidades.

**🟠 Publicação crates.io (#3259)**  
Issue de risco de供应链 com apenas 2 comentários — **sub-engajamento** para um problema que afeta todos os consumidores Rust externos.

---

## 5. Bugs e Estabilidade

### Bug Reportado Ativo (P1)

| # | Título | Severidade | Área | Status |
|---|--------|-----------|------|--------|
| **#2752** | [QA] command onboard throws db error on provider step | **bug_bash_P1** | db, secrets, setup | OPEN |

> **Passos para reproduzir:** `sudo -u ironclaw -- env DATABASE_URL=postgres://%2Frun%2Fpg/ironclaw DATABASE_SSLMODE=disable ironclaw onboard` — falha no step de provider.
> **Ambiente:** commit `be6de43`. Testado em 2026-04-21. **19 dias sem resolução**.

### Falha de CI

| # | Título | Severidade | Job Falhado |
|---|--------|-----------|-------------|
| **#3447** | Nightly E2E failed | **CI failure** | E2E (v2-engine) |

> Run: https://github.com/nearai/ironclaw/actions/runs/25619677006 — Commit: `6e6eca7737debbe3afeaf6626d6db857d2fa5898` — Attempt 1 — Reported 2026-05-10 04:34 UTC

### Follow-ups de Refactoring Abertos (baixo risco imediato, mas dívida técnica)

| # | Título | Risco | Status |
|---|--------|-------|--------|
| **#3452** | [Reborn] Replace stringly loop support identity/reason fields | medium | OPEN (0 comments) |
| **#3451** | [Reborn] Add direct DB operations for loop checkpoint mappings | medium | OPEN (0 comments) |
| **#3443** | Layer A-D LLM boundary cleanup: remaining follow-ups | — | OPEN (0 comments) |

> ⚠️ As issues #3452 e #3451 foram criadas em **2026-05-10** e ainda não têm assignees ou comentários, sugerindo work-in-progress pendente de alocação.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues de Feature (24h)

| # | Título | Escopo | Sinais |
|---|--------|--------|--------|
| **#3451** | [Reborn] Add direct DB operations for loop checkpoint mappings | reborn, db | Otimização: bypass `TurnPersistenceSnapshot` hydration para operações diretas |
| **#3452** | [Reborn] Replace stringly loop support identity/reason fields | reborn, refactoring | Melhoria de type safety em boundary crossings |

### Sinais de Roadmap

1. **Agent system advanced features (#84)** — Priorização P2-P3 listada explicitamente:
   - Multi-agent routing com isolation
   - Global sessions
   - Streaming e thinking modes
   - Elevated mode

2. **Arquitetura Reborn em fase de consolidação** — O epic #2987 demonstra uma estratégia de delivery incremental com PRs agrupados menores, evitando PRs massivos de uma só vez.

3. **Extração de crates modulares** — Padrão recorrente: extração de `ironclaw_reborn_config` (#3458), `ironclaw_storage` (#3421), `ironclaw_product_workflow` (#3428) — sugere estratégia de **modularização agresiva** do monorepo.

---

## 7. Resumo de Feedback dos Usuários

**Feedback externo direto:** não há comentários de contribuidores externos nas issues do período. O padrão de issues é predominantemente **interno/equipa**.

### Padrões Observáveis

| Padrão | Evidência | Interpretação |
|--------|-----------|---------------|
| **Frustração com gap crates.io** | Issue #3259 filed por `dacoldest` (downstream) | Consumidores Rust externos estão bloqueados; risco de perda de adoption |
| **Bug onboard sem resolução** | #2752 aberto há 19 dias | Dificuldade de reprodução ou complexidade subestimada; onboarding bloqueado |
| **Discussão arquitetural ativa** | 44 comentários em #2987 | Equipa investindo tempo em design review colaborativo — saudável mas lento |
| **Nenhuma reação (thumbs up) em nenhuma issue** | Todas as 10 issues: 👍: 0 | Baixo engagement da comunidade externa OU issues internas |

### Lacuna de Feedback Externo

> ⚠️ **Observação:** Com 31 PRs e 10 issues atualizados, zero reações (thumbs up) em qualquer issue ou PR indica **comunidade exclusivamente interna**. Isso pode ser um risco: o projeto pode estar a desenvolver funcionalidades sem validação de uso real externo.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (risco de esquecimento)

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|-----------|--------------|------------|
| **#2752** | [QA] command onboard throws db error | 2026-04-20 | 2026-05-10 | 1 dia (mas sem resolução) | **P1** |
| **#84** | Agent system advanced features | 2026-02-14 | 2026-05-09 | 2 dias | P2-P3 |
| **#2987** | Epic Reborn landing strategy | 2026-04-27 | 2026-05-09 | 2 dias | Alta |
| **#3259** | Publish 0.25.0–0.27.0 to crates.io | 2026-05-05 | 2026-05-10 | 1 dia | **Alta** |

### Priorização Recomendada

1. **🔴 Crítico — #3259**: Resolver gap crates.io (afeta todos os consumidores externos)
2. **🔴 Crítico — #2752**: Bug P1 no onboard bloqueia novos usuários; 19 dias é tempo demais
3. **🟠 Alto — #3447**: Investigar E2E failure antes que se acumulem falhas
4. **

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-11

## 1. Panorama do dia

O projeto CoPaw demonstra **alta atividade comunitária** em 11/05/2026, com 21 eventos totais (11 issues + 10 PRs) nas últimas 24h. O nível de engajamento é significativo, com predominância de contributions de novos contribuidores (6 dos 10 PRs). A atividade concentra-se em **correções de bugs** e **features de usabilidade**, sem novas releases registradas. O projeto mostra saúde estável, com 2 issues fechadas hoje (incluindo uma feature de timestamp e questão de segurança Windows resolvida) e 1 PR merged (plugin de desenho OpenWond).

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24h.**

> **Nota:** Não há changelog ou versão nova para reportar neste ciclo.

---

## 3. Progresso do Projeto

### PRs closed/merged recentemente:

| PR | Título | Impacto | Link |
|---|---|---|---|
| **#4172** | OpenWond Draw Tool Plugin (GPT Image 2 + Nano Banana) | ➕ **Feature significativa** — Plugin de geração de imagens via OpenWond com 3 modelos suportados | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4172) |

### PRs em revisão/aprofundamento:

| PR | Título | Status | Link |
|---|---|---|---|
| #4120 | Console: Matrix E2EE enhancement | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4120) |
| #4169 | Fix Proveedor Volcano Engine (VOLCENGINE) | Aberto | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4169) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

| # | Título | Comentários | Link |
|---|---|---|---|
| **#578** | [Meta] OpenClaw-Inspired Features for Compounding Agent Value | 8 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/578) |
| **#3843** | Bug: Session history disappears | 7 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| **#2429** | "I noticed that you have interrupted me" — cron job question | 6 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2429) |
| **#4123** | Windows: execute_shell_command flashes console | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4123) |

**Análise:** A issue #578 é um **meta-issue estratégico** que tracking uma série de feature requests inspiradas no OpenClaw. Este é um tema de longo prazo que pode influenciar o roadmap. A perda de histórico de sessão (#3843) indica problemas de state management que afetam experiência do usuário em sessões ativas.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje:

| Severidade | # | Título | Link |
|---|---|---|---|
| 🔴 **Alta** | #3843 | Session history disappears + routing to wrong session | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| 🔴 **Alta** | #4170 | Action info displayed only after all actions complete | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4170) |
| 🟡 **Média** | #4123 | Windows console flash on execute_shell_command | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4123) |
| 🟡 **Média** | #4174 | Agent thoughts not collapsed (OpenAI format) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4174) |

### Issue de estabilidade resolvida:

| # | Título | Resolução | Link |
|---|---|---|---|
| **#3718** | Windows: False positive (Defender) v1.1.3 | ✅ **Resolvido** — Causa identificada: uso de `CREATE_NO_WINDOW` em subprocesses. Versões corrigidas disponibilizadas. | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3718) |

**Alertas:**
- **#3843** e **#4170** são bugs críticos que impactam usabilidade em produção (perda de contexto e falta de feedback em ações longas).
- **#3718** demonstra transparência da equipe em resolver falsos positivos de segurança — positiva para confiança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

| # | Título | Demanda | Link |
|---|---|---|---|
| **#4181** | Automatic model failover on API failure | Implementar fallback automático entre modelos do Octopus group | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4181) |
| **#4166** | Auto-inject timestamp in pre_reply context | ✅ **Implementada/Closed** — Injeção de timestamp para time-awareness do Agent | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4166) |
| **#4175** | tls_verify and ca_file in MCP client | Suporte a certificados TLS customizados para MCP | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4175) |
| **#4171** | Memory-distill tool plugin (PR) | Plugin de consolidação de memória com ~92% noise reduction | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4171) |

**Sinais de roadmap:**
- **Resiliência de API:** A feature #4181 indica demanda por maior fault tolerance
- **MCP (Model Context Protocol):** Suporte a TLS customizado (#4175) sugere adoção corporativa
- **Time-awareness:** Timestamp injection (#4166) fechada hoje mostra priorização de features que melhoram contexto temporal

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

1. **Perda de contexto em sessões ativas** (#3843)
   - Usuários perdem histórico de chat inesperadamente
   - Session title permanece na sidebar, mas conteúdo some
   - Impacto: Quebra de confiança e produtividade

2. **Falta de feedback em ações longas** (#4170)
   - Agente executa ações de 5-10 minutos sem status intermediário
   - Usuário não consegue interromper a tempo
   - Usado em produção: cenários críticos de automação

3. **Configuração de desktop não respeitada** (#4182)
   - Usuário não consegue definir agent default via config.json
   - "Não encontrei onde configurar na interface"
   - UX: Falta de transparência em opções de configuração

4. **Interrupção inesperada em cron jobs** (#2429)
   - Agente tipo cron retorna "I noticed that you have interrupted me"
   - Dificulta agendamento confiável de tarefas

### Satisfação:
- 🔒 **Segurança ativa:** PR #4180 substitui MD5 por SHA-256 — comunidade e equipe priorizam segurança cryptography
- 🧪 **Testes:** PR #4177 adiciona testes para tag_parser — indicador de cultura de qualidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias:

| # | Título | Idade | Última Atualização | Link |
|---|---|---|---|---|
| **#578** | Meta: OpenClaw-Inspired Features | ~67 dias | 2026-05-10 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/578) |
| **#3843** | Session history disappears | ~15 dias | 2026-05-10 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| **#2429** | Cron job interruption | ~44 dias | 2026-05-10 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2429) |

### Análise:
- **#578** é issue estratégica de longo prazo (criada em março) — merece planejamento de roadmap
- **#3843** e **#2429** são bugs com impacto real que precisam triagem urgente
- A atualização recente (#3843) mostra que comunidade continua reportando, mas sem resolução clara

### Priorização recomendada:
1. 🔴 **#3843** — Bug crítico de state management
2. 🔴 **#4170** — UX/feedback em ações longas
3. 🟡 **#4182** — Feature request simples (config desktop)
4. 🟢 **#578** — Incluir em planejamento de roadmap

---

## Métricas Resumidas

| Indicador | Valor |
|---|---|
| Issues abertas/ativas | 9 |
| Issues fechadas | 2 |
| PRs abertos | 9 |
| PRs merged/closed | 1 |
| Novas releases | 0 |
| Bugs críticos | 2 |
| Features implementadas (closed) | 2 |
| Contribuições first-timer | 6 PRs |

**Veredicto:** Projeto com atividade saudável, mas com **backlog de bugs críticos** (especialmente session management) que merecem atenção imediata. A comunidade está engajada com contributions significativas de novos desenvolvedores.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-05-11

## 1. Panorama do Dia

ZeroClaw mantém alta atividade de desenvolvimento com 50 eventos nas últimas 24h (21 issues + 29 PRs), sinalizando evolução acelerada em direção à v0.8.0. A integração v0.8.0 (#6398) domina o pipeline com 10 PRs fechados ou merged, incluindo a feature de multi-agent runtime (#6545) e refatorações de schema. Seis issues de alta severidade (P1) permanecem abertas — todas relacionadas a bugs de segurança, perda de mensagens ou crashes — demandando atenção imediata. A comunidade demonstra foco em: (a) estabilização de canais (Discord, Matrix), (b) correções de providers (OpenAI-compatible, Gemini, Claude Code), e (c) refinamento do runtime multi-agente.

---

## 2. Lançamentos

**Nenhuma release została wydana nas últimas 24h.**

A ausência de releases coincide com o trabalho pesado de integração da v0.8.0, que está em branch separado (`integration/v0.8.0`) aguardando consolidação antes do merge em `master`.

---

## 3. Progresso do Projeto

Os PRs fechados/merged nas últimas 24h representam avanços significativos:

| PR | Autor | Tamanho | Impacto |
|---|---|---|---|
| [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) | singlerider | XL | **Multi-agent runtime completo** — workspaces isolados por alias, memory, identity files e SubAgents herdeiros |
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | singlerider | XL | **Schema v0.8.0 env-var grammar** — migrate V2→V3 e eradication de legados override |
| [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | Yyukan | XS | **SOP engine corrigido** — `reload()` agora chamado após construção, SOPs finalmente executam |
| [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) | flyin1600 | XS | **Config path respeita ZEROCLAW_CONFIG_DIR** — 7 campos de path corrigidos |
| [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) | luckbyte | — | Issue de homebrew fechado (não havia release 0.7.5) |

PRs abertos em destaque:

- **[#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)** — Integration/v0.8.0: schema v3 migration, breaking config changes, auth overhauls
- **[#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552)** — Fix: system messages mantidas no início do chat history (crítico para OpenAI-compatible)
- **[#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183)** — Normalização de image markers em multimodal
- **[#6562](https://github.com/zeroclaw-labs/zeroclaw/pull/6562)** — NixOS module + systemd sandboxing

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários (≥ 4)

| Issue | Título | Comentários | Tema Central |
|---|---|---|---|
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot restrict to specific channels | 5 | Feature request: `allowed_channels` para Discord |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | Build failure matrix-sdk v0.16.0 | 4 | Recursion limit overflow em build |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | WebSocket bypasses ApprovalManager | 4 | **Segurança** — tool approvals não aparecem no dashboard |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | User message loss | 3 | Perda de mensagens em provedores compatíveis |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) | Document about skills | 2 | Wishlist de documentação |

### Análise dos temas dominantes

1. **Segurança/Runtime (#6207)**: A comunidade está preocupada com o bypass do ApprovalManager no WebSocket — tool approvals supervisionadas nunca surfacem na UI web. Issue classificada P1 com status `in-progress`.

2. **Estabilidade de canais (#6378, #6530)**: Usuários solicitam controles granulares para Discord (allowed_channels) enquanto enfrentam build failures com Matrix SDK.

3. **Provider compatibility (#6034)**: A dor de "mensagens perdidas" indica problemas sérios com provedores custom/OpenAI-compatible, especialmente com modelos como Qwen.

---

## 5. Bugs e Estabilidade

### Severidade P1 (Críticos — workflow bloqueado ou data loss)

| Issue | Título | Status | Canal/Runtime |
|---|---|---|---|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | WebSocket bypasses ApprovalManager | In-progress | gateway/daemon |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | User message loss | Accepted | provider:compatible |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | Non-leading system messages em OpenAI-compatible | In-progress | provider:compatible |
| [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | Discord media broken (inbound/outbound) | Accepted | channel:discord |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | Default config path issues multi-instance | In-progress | runtime/daemon |
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | Multi-agent per-alias workspaces | Accepted | runtime |

### Severidade P2 (Degraded behavior)

| Issue | Título | Status | Canal/Runtime |
|---|---|---|---|
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord allowed_channels | Accepted | channel:discord |
| [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | Gemini CLI crashes | Accepted | provider:gemini |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails at startup | Accepted | runtime |
| [#6039](https://github.com/zeroclaw-labs/zeroclaw/issues/6039) | Copilot image via Discord | In-progress | channel:discord, provider:copilot |
| [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) | ACP session restore | — | channel:core |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel command bypass localization | In-progress | channel:core |
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) | Runtime model switching reconciliation | Accepted | runtime/provider |

### Observações de estabilidade

- **Discord** é o canal com mais bugs reportados (allowed_channels, media handling, Copilot image)
- **Provider compatibility** lidera em crashes (Gemini syntax, OpenAI-compatible system messages)
- Build environment tem pelo menos 1 falha conhecida com matrix-sdk v0.16.0
- 5 de 6 bugs P1 estão em estado `in-progress` ou `accepted` (boa cobertura de triagem)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de alta prioridade em votação/desenvolvimento

| Issue | Título | Tags | Provável v0.8.0? |
|---|---|---|---|
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | Multi-agent per-alias workspaces + permissions | enhancement, P1 | ✅ Sim (#6545 merged) |
| [#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271) | V3 SwarmConfig schema | enhancement, P2 | ✅ Sim |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord allowed_channels | enhancement, P2 | Possível |
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) | Runtime model switching reconciliation | enhancement, P2 | ✅ Sim |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: track 153 lost commits | enhancement, in-progress | Infra |
| [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) | ACP session restore | enhancement, P2 | Futuro |

### Sinais de roadmap observados

1. **Multi-agent é o tema central da v0.8.0**: Issues #6272, #6271, #6545, #6523 todas convergindo
2. **Provider abstraction amadurecendo**: #6557 busca reconciliar switching entre channels e runtime
3. **NixOS primeiro-class citizen**: PR #6562 adiciona suporte nativo
4. **Segurança reforçada**: #6192 (paircode targeting), #6207 (ApprovalManager) indicam foco em deployment seguro
5. **Localization**: Múltiplos PRs (#6550, #6548) movendo strings hardcoded para Fluent

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (via issues)

| Dor | Frequência | Exemplos |
|---|---|---|
| **Perda de mensagens** | Alta | #6034 (Qwen), #6558 (Dashscope) — erros 400/405 indicam quebra de API |
| **Build failures** | Média | #6530 (matrix-sdk recursion), complexidade de features flags |
| **Discord instável** | Alta | Media não funciona, Copilot image quebrado, sem controle de canais |
| **Config inflexível** | Média | #5605 (multi-instance), #6547 (homebrew) |
| **Docs incompletas** | Baixa | #5863 (skills não documentadas) |

### Cenários de uso emergentes

- **Multi-instance research**: Usuários deployando ZeroClaw com `ZEROCLAW_CONFIG_DIR` para isolamento de perfiles
- **Canal Discord como interface primária**: Feature requests para controles granulares indicam adoção crescente
- **Vision multimodal**: PRs #6183, #6549 sugerem demanda por processamento de imagens em múltiplos canais
- **Compliance/security**: Issues de ApprovalManager e path bypass indicam uso em contextos sensíveis

### Satisfação parcial

- Multi-agent runtime está sendo recebido positivamente (#6272 tem 2 comentários, indicando interesse)
- Community ativa em reportar bugs detalhados com steps-to-reproduce
- Maintainers respondendo rapidamente (maioria das issues atualizadas em 24h)

---

## 8. Backlog que Merece Atenção

### Issues sem atividade ou abandonadas

| Issue | Título | Criado | Comentários | Nota |
|---|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit 153 lost commits | 2026-04-24 | 2 | Status `in-progress` mas sem atualização há ~17 dias |
| [#5899](https://github.com/zeroclaw-labs/zeroclaw/issues/5899) | (referenciado em #6030) | — | — | Pode indicar work perdido em sessões TOOL_LOOP |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/issues/6266) | (referenciado em #6272) | 2026-05-02 | — | Migrou para V3 mas deixou single-workspace |

### PRs aguardando ação do autor

| PR | Título | Status | Bottleneck |
|---|---|---|---|
| [#6133](https://github.com/zeroclaw-labs/zeroclaw/pull/6133) | Remove stale strict-delta references | needs-author-action | Autor precisa revisar |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | Normalize image markers | needs-author-action | Autor precisa revisar |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | Codex Responses tool calls | needs-author-action | Autor precisa revisar |
| [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) | Image gen runpod | needs-author-action | Aguardando revisão |

### Recomendações para triagem

1. **#6074**: Priorizar auditoria dos 153 commits revertidos — pode conter fixes necessários para v0.8.0
2. **4 PRs pendentes de author**: Bots `needs-author-action` indicam pull requests quase prontos para merge
3. **Security: #6207**: Bug P1 com impacto em ApprovalManager requer code review prioritário antes de release

---

*Relatório gerado em 2026-05-11 com dados do GitHub ZeroClaw. Métricas: 21 issues, 29 PRs nas últimas 24h.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*