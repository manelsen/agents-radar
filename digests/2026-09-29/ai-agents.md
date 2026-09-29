# Resumo diário do ecossistema de agentes de IA 2026-09-29

> Issues: 17 | PRs: 7 | Projetos cobertos: 7 | Gerado em: 2026-09-29 00:09 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-29

---

## 1. Panorama do Dia

O projeto NullClaw demonstra **alta atividade comunitária** nas últimas 24h, com 17 issues e 7 PRs atualizados. Não houve release formalizada, porém o PR #1014 (v20260929) foi fechado, indicando que uma nova versão está em processo de distribuição. A base de código continua em evolução ativa, com destaque para a integração de novos provedores de IA e melhorias em canais de comunicação. A relação entre issues fechadas (16) e abertas (1) sugere maturidade no fluxo de resolução de problemas. O projeto mantém um ritmo saudável de contribuições, com foco em estabilidade e expansão de funcionalidades.

---

## 2. Lançamentos

**Nenhuma release formalizada** no período, embora o PR #1014 sinalize que a versão **v20260929** está em pipeline de release.

| PR | Status | Conteúdo Principal |
|---|---|---|
| [#1014](https://github.com/nullclaw/nullclaw/pull/1014) | CLOSED | Pin web search ao provider configurado; strip Markdown de respostas QQ oficiais; version bump v20260929 |

> **Nota:** Aguardar publicação oficial no repositório para changelog completo.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Recentemente

| PR | Autor | Impacto |
|---|---|---|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | MVS-source | **Eden AI como provider OpenAI-compatible** — adiciona gateway que roteia para múltiplos vendors com uma única API key (baseado na UE) |
| [#319](https://github.com/nullclaw/nullclaw/pull/319) | qxo | **Correção DingTalk** — migrou de webhook-only para Official Bot API com suporte a recall e OAuth2 token management |
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | sanderdewijs | **Adaptive Intelligence Pipeline** — loop de qualidade pós-turno com skill routing determinístico e scoring ponderado |
| [#667](https://github.com/nullclaw/nullclaw/pull/667) | sanderdewijs | **Email IMAP IDLE** — polling bidirecional completo com suporte a push notifications e resiliência de rede |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | qxo | **Tool Customization System** — triggers customizados, priorização e parâmetros pré-configurados por ferramenta |
| [#1013](https://github.com/nullclaw/nullclaw/pull/1013) | cenab | **Provider Tsubasa** (OPEN) — novo provider com 32k contexto e 8k output budget |

**Avanços-chave:**
- Expansão de provedores (Eden AI, Tsubasa)
- Aprimoramento de canais (DingTalk, Email, WhatsApp Web)
- Sistema de qualidade adaptativa para agentes

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (5+ comentários)

| Issue | Tema | Autor | Insight |
|---|---|---|---|
| [#861](https://github.com/nullclaw/nullclaw/issues/861) | **Web UI em VPS headless** | eabase | Usuários têm dificuldade com documentação de túnel/relay — barreira de entrada significativa |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | **Subagent spawn** | superhero75 | Demanda por multi-provider agents com intercomunicação — feature request recorrente |
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | **Homebrew upgrade quebra service** | kronk307 | Bug de path hardcoded no LaunchAgent plist — DX problemático para macOS users |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | **DingTalk send-only** | Lancernix | Canal opera apenas como saída; necessidade de bidirectional communication |
| [#619](https://github.com/nullclaw/nullclaw/issues/619) | **Error message verbosity** | ats-bcon | Usuários pedem logs mais informativos para debug de `error.ApiError` |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | **Agent Skills client list** | jonathanhefner | Oportunidade de visibilidade no ecossistema Agent Skills (agentskills.io) |
| [#477](https://github.com/nullclaw/nullclaw/issues/477) | **Feishu WebSocket disconnect** | emmettlu | Problema de conexão WS persistente — estabilidade do canal |

### Issue com Maior Reação (👍)

| Issue | Reações | Tema |
|---|---|---|
| [#613](https://github.com/nullclaw/nullclaw/issues/613) | 👍 4 | Documentação de opções config.json — newcomers precisam de melhores descrições |

**Análise:** A comunidade demonstra interesse forte em **DX (Developer Experience)**, documentação clara e multi-provider support. Os temas de Web UI e subagents indicam demanda por funcionalidades avançadas de deployment e arquitetura.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Recentemente

| Issue | Severidade | Problema | Status |
|---|---|---|---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | **Alta** | Homebrew upgrade quebra service (path versionado hardcoded) | CLOSED |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | **Alta** | `error.NoResponseContent` em Windows build | CLOSED |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | **Alta** | JSON parsing de tool calls quebra com colon como tool name | CLOSED |
| [#477](https://github.com/nullclaw/nullclaw/issues/477) | **Média** | Feishu WS disconnect intermitente | CLOSED |
| [#427](https://github.com/nullclaw/nullclaw/issues/427) | **Média** | Custom skills não aparecem como tool disponível | CLOSED |
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | **Média** | Docs especificam Zig 0.15.2 (incompatível); 0.16.0 necessário | CLOSED |

**Observações:**
- Todos os bugs estão em status CLOSED, indicando ritmo saudável de resolução
- Issues de parsing (#408) e service breaks (#354) são críticos para estabilidade
- Build/docs desactualizados podem impactar novos contribuidores

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Feature | Prioridade | Oportunidade |
|---|---|---|---|
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | Subagent spawn com provider por agent | Alta | Arquitetura multi-agent |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) | GET /status endpoint (monitoring) | Alta | Integração com dashboards externos |
| [#624](https://github.com/nullclaw/nullclaw/issues/624) | Vision Pipeline (imagens → base64 → multimodal LLM) | Alta | Capacidade multimodal |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Adicionar ddgs para web_search | Média | Alternativa a provedores de busca |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Inclusão no Agent Skills clients page | Média | Visibilidade ecossistema |

**Sinais de Roadmap:**
1. **Multi-provider agents** — Issue #190 está em discussão há ~7 meses, indicando complexidade técnica
2. **Observabilidade** — Endpoint /status (#631) favoreceria integrações enterprise
3. **Multimodal** — Vision pipeline (#624) é feature competitiva essencial

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Exemplos | Frequência |
|---|---|---|
| **Onboarding/DX** | Documentação Web UI confusa (#861), config.json obscuro (#613), custom skills não funcionam (#427) | Alta |
| **Estabilidade** | Homebrew upgrade quebra (#354), WS disconnects (#477), parsing errors (#408) | Alta |
| **Integração** | DingTalk receive-only (#376), necessidade de webhooks robustos | Média |
| **Observabilidade** | Logs de erro não informativos (#619), falta endpoint de status (#631) | Média |

### Cenários de Uso Emergentes

- **VPS headless**: Usuários tentando rodar Web UI remotamente sem interface gráfica
- **Multi-provider**: Necessidade de trocar entre provedores por task ou agente
- **Enterprise monitoring**: Integração com dashboards externos via API

### Indicadores de Satisfação

- Comunidade ativa (17 issues + 7 PRs em 24h)
- Bugs resolvidos rapidamente (taxa de fechamento alta)
- Contribuições diversificadas (providers, canais, tooling)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo ou Pendentes

| Issue | Tempo Aberto | Tema | Recomendação |
|---|---|---|---|
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | ~7 meses | Subagent spawn multi-provider | Priorizar ou comunicar roadmap |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | ~6 meses | DingTalk bidirectional | Verificar se PR #319 resolveu |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | ~6 meses | Agent Skills listing | Ação simples: submeter aplicação |

### PR Aberto Requer Review

| PR | Tema | Urgência |
|---|---|---|
| [#1013](https://github.com/nullclaw/nullclaw/pull/1013) | Provider Tsubasa | Review pendente |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues fechadas (24h) | 16/17 | 🟢 Excelente |
| PRs fechados (24h) | 6/7 | 🟢 Excelente |
| PRs abertos | 1 | 🟢 Saudável |
| Releases (24h) | 0 (v20260929 em pipeline) | 🟡 Em progresso |
| Bugs em aberto | 0 | 🟢 Resolvidos recentemente |
| Tempo médio de resolução | ~6 meses (issues históricas) | 🟡 Oportunidade de melhoria |

---

**Relatório gerado em:** 2026-09-29  
**Fonte:** github.com/nullclaw/nullclaw  
**Analista:** Open Source AI Analyst

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de Análise:** 2026-09-29  
**Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 29 de setembro de 2026. Projetos como **ZeroClaw e Hermes Agent** operam em escala enterprise com volumes massivos de issues e PRs, evidenciando adoção significativa e complexidade proporcional. **NanoBot e NullClaw** demonstram maturidade com ciclos de release rápidos e foco em estabilidade. **PicoClaw** enfrenta risco crítico de abandono, com fork ativo sinalizando fragmentação iminente. **CoPaw e IronClaw** mantêm operações estáveis com engajamento direcionado. A ausência universal de releases formais no período sugere que todo o ecossistema está em fase de preparação para ciclos de distribuição coordenados.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Avaliação de Saúde |
|---------|-------------|-----------|--------|---------|-------------------|
| **ZeroClaw** | 50 (25/25) | 50 (40/10) | 10 | 0 | ⭐⭐⭐⭐⭐ Equilibrado |
| **Hermes Agent** | 50 (39/11) | 50 (47/3) | 3 | 0 | ⭐⭐ Crítico — baixa taxa de merge |
| **NullClaw** | 17 (1/16) | 7 (1/6) | 6 | 0 (pipeline) | ⭐⭐⭐⭐ Excelente |
| **NanoBot** | 8 (6/2) | 19 (9/10) | 10 | 0 | ⭐⭐⭐⭐ Estável |
| **CoPaw** | 6 | 16 (12/4) | 4 | 0 | ⭐⭐⭐ Misto |
| **PicoClaw** | 7 | 10 (10/0) | 0 | 0 | ⭐ Abandono iminente |
| **IronClaw** | 2 | 3 (2/1) | 1 | 0 | ⭐⭐⭐ Estável |

**Métricas Consolidada do Ecossistema:**

| Indicador | Total |
|-----------|-------|
| Issues ativas no período | 140 |
| PRs atualizadas | 155 |
| PRs merged/fechadas | 34 |
| Releases publicadas | 0 |
| Projetos em estado crítico | 1 (PicoClaw) |
| Projetos em estado saudável | 4 (NullClaw, NanoBot, ZeroClaw, IronClaw) |

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw como Referência do Ecossistema

**ZeroClaw** emerge como o projeto mais maduro do ecossistema, demonstrando:

| Diferenciador | Vantagem Competitiva |
|---------------|---------------------|
| **Escala operacional** | 50 issues + 50 PRs com distribuição equilibrada (25/25; 40/10) |
| **Qualidade de arquitetura** | Gateway split v0.9.0, conditional SOP steps, bounded replayable hub |
| **Segurança enterprise** | RBAC multi-tenant, OIDC, per-sender permissions, audit trails |
| **Ecossistema de plugins** | Estado durável genérico (#11081), runtime plugins vs compile-time |
| **Gestão de releases** | Tracker dedicado para eficiência de release (#10814) |

**Diferenças Técnicas Significativas:**

- **Hermes Agent** foca em desktop cross-platform (Electron crashes em Linux/macOS/Windows)
- **NullClaw** prioriza extensibilidade de providers (Eden AI, Tsubasa) e canais (DingTalk, WhatsApp)
- **NanoBot** investe em integridade de dados (atomic writes) e performance (ripgrep nativo)
- **CoPaw** diferencia-se com terminal multi-tab e context window management para cron tasks

**Tamanho da Comunidade:**

| Projeto | Indicadores |
|---------|-------------|
| NanoBot | 392 contributors (+27 novos em 24h) |
| ZeroClaw | PRs XL indicam codebase maduro e especializado |
| Hermes Agent | 50+ issues/PRs — alta adoção, alta complexidade |
| NullClaw | Contribuições diversificadas de múltiplos autores |

---

## 4. Focos Técnicos Compartilhados

### Necessidades que Surgem em Múltiplos Projetos

| Foco Técnico | Projetos Afetados | Evidência |
|--------------|-------------------|-----------|
| **Gestão de contexto/mídia** | CoPaw, NanoBot, ZeroClaw | Sessões quebradas por imagens oversized (#8009), context window exhaustion, eviction policies |
| **Multi-provider/Modelo** | NullClaw, NanoBot, IronClaw, PicoClaw | Tsubasa (#1013, #8115), Claude Vertex (#5955), Eden AI (#990) |
| **Estabilidade de canais** | NullClaw, Hermes Agent, CoPaw | Feishu WebSocket disconnects, DingTalk bidirectional, WhatsApp lifecycle |
| **Segurança** | PicoClaw, ZeroClaw, CoPaw | Security audit críticos (#258), OAuth grants overwrite (#127063), sandbox Windows (#8002) |
| **Observabilidade** | NullClaw, NanoBot, ZeroClaw | Endpoint /status (#631), tokens/sec streaming (#5908), session metrics |
| **Subagents/Multi-agent** | NullClaw, NanoBot, ZeroClaw | Hierarchical agents (#5954), per-agent ownership (#9746), intercomunicação (#190) |

### Padrões de Instabilidade Comuns

```
CRÍTICO: Desktop/Electron crashes — Hermes Agent (15+ issues abertas)
CRÍTICO: File write corruption — NanoBot (#5953 atomic writes), ZeroClaw (#11136)
CRÍTICO: Security vulnerabilities — PicoClaw (#258), Hermes Agent (npm deps)
ALTO: Session state loss — Hermes Agent, CoPaw (#8009), ZeroClaw (#11197)
ALTO: Provider compatibility — NanoBot (#5898), NullClaw (DingTalk #376)
```

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Segmento | Projeto Principal | Características |
|----------|-------------------|------------------|
| **Enterprise/Multi-tenant** | ZeroClaw | RBAC, OIDC, plugin architecture, daemon ownership |
| **Desenvolvedores individuais** | NullClaw | Multi-provider flexibility, adaptive intelligence |
| **Ambientes de produção** | NanoBot | Atomic writes, tokenizer warmup, workspace safety |
| **Usuários desktop** | Hermes Agent | Cross-platform Electron, TUI integration |
| **Automação de cron/agents** | CoPaw | Self-managed context lifecycle, paginated history |
| **Comunidade técnica** | PicoClaw | IRC, DeltaChat, extensibilidade (estagnado) |
| **Onboarding/Corporativo** | IronClaw | OpenWiki documentation, taxonomy de falhas |

### Por Arquitetura

| Arquitetura | Projetos | Implicações |
|-------------|---------|-------------|
| **Plugin-based runtime** | ZeroClaw, PicoClaw | Extensibilidade em runtime vs compile-time |
| **Monolítico modular** | Hermes Agent | Componentes acoplados (Desktop, Gateway, Agent) |
| **Gateway-centric** | NullClaw, IronClaw | Abstração de providers via gateway |
| **Tool-centric** | NanoBot, CoPaw | atomic writes, ripgrep nativo, terminal multi-tab |

### Diferenciação Técnica Relevante

| Aspecto | Líder | Seguidores |
|---------|-------|------------|
| Provider diversity | NullClaw (Eden AI, Tsubasa, OpenAI-compatible) | NanoBot, IronClaw |
| Security maturity | ZeroClaw (RBAC, OIDC, per-sender) | Hermes Agent (npm fixes) |
| Context management | CoPaw (scroll + thinking alignment) | NanoBot (tokenizer warmup) |
| Desktop stability | *Nenhum — todos com problemas* | Hermes Agent (mais crítico) |
| Release cadence | NanoBot (daily merges, community growth) | NullClaw (stable flow) |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Categoria | Projetos | Métrica |
|-----------|---------|---------|
| **🚀 Iteração rápida** | NanoBot, NullClaw | 10+ merges/24h, novos contributors |
| **⚖️ Consolidando** | ZeroClaw | 10 merges, volume alto mas equilibrado |
| **🔧 Manutenção ativa** | CoPaw, IronClaw | Foco em bugs críticos e UX |
| **⚠️ Estagnado** | Hermes Agent | 3 merges vs 47 abertas — gargalo |
| **🚨 Abandono** | PicoClaw | 0 merges, fork ativo, fork community |

### Indicadores de Maturidade

| Indicador | Projetos Exemplares |
|-----------|---------------------|
| **Bugs resolvidos rapidamente** | NullClaw (16/17 fechadas), NanoBot (P1 #5843 resolvido) |
| **Community growth** | NanoBot (+27 contributors), CoPaw (6 first-time-contributor PRs) |
| **Feature maturity** | ZeroClaw (conditional SOP, bounded hub), CoPaw (multi-tab terminal) |
| **Processo de release** | Nenhum projeto com release formalizada — todos em preparatório |
| **Long-standing issues** | NullClaw #190 (7 meses), CoPaw #4525 (132 dias), Hermes Agent (2-3 meses) |

### Saúde Relativa

```
EXCELENTE     ████████████████░░░░  NullClaw      (4/5 ⭐)
EXCELENTE     ████████████████░░░░  NanoBot       (4/5 ⭐)
EQUILIBRADO   ███████████████░░░░░  ZeroClaw      (4.5/5 ⭐)
ESTÁVEL       ██████████████░░░░░░  IronClaw      (3/5 ⭐)
MISTO         ████████████░░░░░░░  CoPaw         (3/5 ⭐)
CRÍTICO       ████░░░░░░░░░░░░░░░  Hermes Agent  (2/5 ⭐)
ABANDONO      ██░░░░░░░░░░░░░░░░░  PicoClaw      (1/5 ⭐)
```

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

#### 1. **Multi-Provider como Padrão**
```
NullClaw: Eden AI gateway, Tsubasa 32K
NanoBot: Claude Vertex, Tsubasa, Unbrowse
IronClaw: Tsubasa registry entry
PicoClaw: OpenAI-compatible providers, Keenable
```
**Implicação:** Usuários exigem flexibilidade de vendor — abstinence de lock-in é requisito.

#### 2. **Segurança Enterprise-Grade**
```
ZeroClaw: RBAC multi-tenant, OIDC, per-sender
Hermes Agent: npm dependency fixes
PicoClaw: Security audit (crítico)
CoPaw: Sandbox vulnerabilities
```
**Implicação:** Adoção corporativa exige controles de segurança que projetos individuais subestimavam.

#### 3. **Context Window como Recurso Crítico**
```
CoPaw: Media accumulation breaks sessions
NanoBot: Tokenizer warmup, scroll alignment
NullClaw: Adaptive Intelligence Pipeline
ZeroClaw: Multimodal image cap eviction
```
**Implicação:** Sessões de longa duração requerem gestão proativa de contexto — compactação inteligente.

#### 4. **Desktop como Ponto de Dor Universal**
```
Hermes Agent: SIGSEGV/SIGTRAP em todas plataformas
PicoClaw: Web UI laggy
CoPaw: Table markdown inaccessible
```
**Implicação:** Desktop apps são a camada mais frágil — Electron stability é necessidade transversal.

#### 5. **Plugin/Extensibilidade como Direção Arquitetural**
```
ZeroClaw: Runtime plugins, plugin-owned Kanban
PicoClaw: OpenAI-compatible providers
NullClaw: Tool customization system
CoPaw: First-time contributors (6 PRs)
```
**Implicação:** Modelos de contribuição externos dependem de abstrações bem definidas — arquiteturas monolíticas perdem tração.

#### 6. **Observabilidade e Monitoring**
```
NullClaw: GET /status endpoint request
NanoBot: Live tokens/sec display
ZeroClaw: Event firehose, session metrics
CoPaw: TaskTracker dashboard inconsistency
```
**Implicação:** Operacionalização de agentes exige métricas e dashboards — debugging "black box" não escala.

---

## Síntese para Tomadores de Decisão

| Decisor | Recomendação |
|---------|-------------|
| **Para integração** | Priorizar **ZeroClaw** (enterprise-ready) ou **NullClaw** (extensível); evitar PicoClaw |
| **Para contributors** | **NanoBot** e **CoPaw** oferecem pontos de entrada com mentorship ativo; NullClaw para generalistas |
| **Para produção** | Aguardar correção de P1 em **Hermes Agent**; monitorar **PicoClaw** fork |
| **Para pesquisa** | **ZeroClaw** (architecture), **CoPaw** (context lifecycle), **NanoBot** (integridade de dados) |
| **Para enterprise** | **ZeroClaw** com RBAC e OIDC; avaliar **Hermes Agent** após desktop sprint |

---

*Relatório gerado em 2026-09-29 com base em dados públicos do GitHub dos projetos analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-29

## 1. Panorama do Dia

O projeto NanoBot mantém alta atividade com **8 issues e 19 PRs** atualizados nas últimas 24h. A equipe demonstrou foco em **estabilidade e качество (qualidade)**: 10 PRs foram merged/fechados, abordando bugs críticos como atomic writes para ferramentas de arquivo (#5953), restauração de tokens/sec no tokenizer (#5861), e correções no model discovery do Codex (#5940). Os PRs abertos indicam investimento em novos provedores (Claude no Vertex AI, Tsubasa), ferramentas (ripgrep nativo, Unbrowse backend), e features de subagentes. O volume de atividade sugere um release próximo com funcionalidades significativas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

Contudo, os PRs recentemente merged sugerem preparação para uma nova versão:

| PR | Mudanças Principais |
|----|---------------------|
| #5953 | Atomic writes para `WriteFileTool`, `EditFileTool`, `ApplyPatchTool` — **breaking fix** para segurança de arquivos |
| #5948 | Suporte a ripgrep nativo como alternativa a grep/find_files |
| #5861 | Warm fallback tokenizer em daemon thread — muda comportamento de inicialização |
| #5940 | Expõe GPT-6 Sol e Luna no Codex discovery |

**Nota de migração potencial**: Arquivos de workspace podem se comportar diferentemente com operações concorrentes após #5953.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (10 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#5953](https://github.com/HKUDS/nanobot/pull/5953) | Atomic writes para file tools | **Crítico** — previne corruption e torn reads em escrita concorrentes |
| [#5949](https://github.com/HKUDS/nanobot/pull/5949) | Propagar web_fetch failures como erros estruturados | Estabilidade — recupera guidance em falhas |
| [#5948](https://github.com/HKUDS/nanobot/pull/5948) | Usar ripgrep nativo para busca | Performance — busca de conteúdo ~10x mais rápida |
| [#5940](https://github.com/HKUDS/nanobot/pull/5940) | Expor GPT-6 Sol e Luna no Codex | Completude — modelo missing adicionado |
| [#5952](https://github.com/HKUDS/nanobot/pull/5952) | Restaurar Codex title generation | UX — títulos de conversa funcionais |
| [#5951](https://github.com/HKUDS/nanobot/pull/5951) | Refresh contributors: 365→392 | Comunidade — 27 novos contribuidores creditados |
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) | Warm fallback tokenizer | Latência — reduz wait time inicial |
| [#5950](https://github.com/HKUDS/nanobot/pull/5950) | Restaurar saved session history | UX — sessões salvas mostram histórico |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Decouple heartbeat reasoning | UX — agente "pensa silenciosamente" por default |
| [#1355](https://github.com/HKUDS/nanobot/pull/1355) | Fix image preservation | UX — bot para de mencionar imagens repetidamente |

### Destaque: Fix de Segurança em File Tools (#5953)
O PR #5953 implementa **escrita atômica** para todas as ferramentas de arquivo. Antes, `write_text`/`write_bytes` podiam deixar arquivos em estado inconsistente em escritas concorrentes. Este é um **bug de integridade de dados** que afetava workspaces compartilhados entre sessões.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários > 0)

| Issue | Título | Comentários | Prioridade | Tema |
|-------|--------|-------------|------------|------|
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent gets stuck in sudo loop | **5** | P1 | Funcionalidade core quebrada |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu hidden marker entregue ao usuário | **4** | - | Bug UX em canal específico |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Show live tokens/sec no WebUI | **4** | P2 | Feature request popular |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GPT-6 via GitHub Copilot não funciona | **3** | - | Provider compatibility |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Feishu: compaction notice deve ser fechável | **2** | - | UX/Canal |
| [#4798](https://github.com/HKUDS/nanobot/issues/4798) | Concurrent file writes corruption | **2** | - | (PR #5953 endereça) |

### Análise de Demandas

**Maior preocupação**: Issue #5924 — agente preso em loop de sudo — tem 5 comentários e标签 P1. O bug descreve dois problemas:
1. Autorização sudo expira antes do comando executar
2. Ao atingir máximo de iterations, agente fica "obcecado" com comando não executado

**Tendência de feature**: Requests por métricas de streaming (#5908) e suporte a novos provedores indicam necessidade de:
- Observabilidade em tempo real
- Diversificação de modelos (Claude Vertex, Tsubasa, Unbrowse)

---

## 5. Bugs e Estabilidade

### Issues Abertas Críticas

| Issue | Severidade | Problema | Status |
|-------|------------|----------|--------|
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | **P1** | Sudo loop — agente unusable | Aberto, 5 comments |
| [#4798](https://github.com/HKUDS/nanobot/issues/4798) | Alta | Concurrent file writes corruption | Aberto (PR #5953 em review) |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | Alta | GPT-6 Copilot não funciona v0.3.5 | Aberto |

### Bugs Recentemente Fechados

| Issue | Fix Relacionado |
|-------|-----------------|
| [#5843](https://github.com/HKUDS/nanobot/issues/5843) | BUILD stage latency 10s+ → PR #5861 (tokenizer warmup) |
| [#5939](https://github.com/HKUDS/nanobot/issues/5939) | GPT-6 Sol/Luna missing → PR #5940 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu marker leak → Aberto |

### Análise de Estabilidade

**Positivo**: 
- PR #5953 (atomic writes) fechado — indica priorização de bugs de integridade
- PR #5949 (web_fetch errors) fechado — falhas agora são reportadas corretamente

**Preocupante**: 
- Issue #5924 (P1) continua aberta com usuário reportando "unusable"
- Issue #5903 (Feishu) aberta desde 2026-09-24 com 4 comments — bug UX em canal popular

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos Indicando Direção

| PR | Feature | Prioridade | Sinal de Roadmap |
|----|---------|------------|------------------|
| [#5955](https://github.com/HKUDS/nanobot/pull/5955) | **Claude on Vertex AI** | P2 | Provedor enterprise GCP |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | Hard timeouts sem polling | P2 | Confiabilidade de exec |
| [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Aggregate concurrent subagent results | P2 | Agentes hierárquicos |
| [#5946](https://github.com/HKUDS/nanobot/pull/5946) | Persist tool results at batch boundary | P2 | Recuperação de crashes |
| [#5945](https://github.com/HKUDS/nanobot/pull/5945) | Unbrowse backend para web_fetch | P2 | Melhoria de extração web |
| [#5947](https://github.com/HKUDS/nanobot/pull/5947) | Tsubasa provider metadata | P2 | Novo provedor |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Live tokens/sec no WebUI | P2 | Observabilidade UX |

### Issues Solicitando Features

| Issue | Feature Request |
|-------|-----------------|
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Indicador live de tokens/sec durante streaming |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Toggle para desabilitar compaction notice no Feishu |
| [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Capacidade in-place edit no Feishu |

### Tendências Identificadas

1. **Multi-provedor**: Claude Vertex (#5955), Tsubasa (#5947), Unbrowse (#5945)
2. **Observabilidade**: tokens/sec (#5908), session recovery (#5946)
3. **Agentes compostos**: Subagent aggregation (#5954), session persistence (#5811)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Tema | Issue | Sentimento |
|------|-------|------------|
| **Agent unusable** | #5924 | 😡 Frustrado — "agent becomes unusable" |
| **UX Feishu** | #5903, #5956 | 😕 Confuso — mensagens internas expostas |
| **Provider compat** | #5898 | 😕 Problema — "Mode provider request failed" |
| **File corruption** | #4798 | 😰 Crítico — "workspace file corruption" |

### Cenários de Uso Identificados

1. **Desenvolvimento local com sudo**: Usuários executam comandos privileged via nanobot
2. **Multi-canal (Feishu)**: Integração com Lark/Feishu para equipes China-based
3. **GitHub Copilot**: Usuários tentando usar nanobot como frontend para Copilot
4. **Workspaces compartilhados**: Escrita concorrente entre sessões/agentes

### Satisfação Parcial

**Positivo**: 
- Comunidade ativa (392 contributors, +27 novos)
- Rápida resposta a bugs críticos (PRs mergeados no mesmo dia)

**Negativo**:
- Bug P1 (#5924) persiste — impacto direto na usabilidade
- Latência de BUILD stage (#5843) fechada mas pode ter edges não cobertos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Inativas

| Issue | Idade | Prioridade | Problema |
|-------|-------|------------|----------|
| [#4798](https://github.com/HKUDS/nanobot/issues/4798) | **94 dias** | Alta | Concurrent file writes — **PR #5953 em review, mas issue não fechada** |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | **5 dias** | - | GPT-6 Copilot broken — sem assignee |

### Ações Recomendadas

1. **Priorizar #5924** — bug P1 com 5 comments, agente unusable
2. **Revisar #4798** — PR #5953 merged, fechar issue após merge confirmar fix
3. **Triangular #5898** — bug de provider pode necessitar configuração adicional de Claude/GPT-6
4. **Confirmar #5903** — Feishu marker leak ainda aberto após 4 comments

---

## Métricas Consolidada (2026-09-29)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 6 |
| Issues fechadas (24h) | 2 |
| PRs abertos (24h) | 9 |
| PRs merged/fechados (24h) | 10 |
| Novas releases | 0 |
| Issues P1 abertas | 1 (#5924) |
| PRs com P0-P1 | 1 (#5953) |

**Veredicto de Saúde**: ⭐⭐⭐⭐ (4/5) — Alta atividade de código com foco em estabilidade. Atenção necessária ao bug P1 #5924.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-29.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-29

---

## 1. Panorama do Dia

O projeto Hermes Agent manteve uma atividade intensa em 29 de setembro de 2026, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. Das issues, 39 permanecem abertas/ativas e 11 foram fechadas. Nos PRs, 47 estão abertos e apenas 3 foram merged/fechados. A distribuição de componentes afetados revela que **Desktop (comp/desktop)** é a área com maior volume de relatórios, seguida por Gateway (comp/gateway), Agent (comp/agent) e CLI (comp/cli). Não houve lançamentos de novas versões neste período. O padrão de atividade sugere uma fase intensiva de correção de bugs, com várias issues de alta severidade (P1/P2) demanding atenção imediata da equipe de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release została publicada nelle ultime 24 ore.**

O projeto encontra-se em um período sem tags formais de versão, indicando que o desenvolvimento está concentrado em correções no branch `main` antes do próximo release planejado.

---

## 3. Progresso do Projeto

Das 50 PRs atualizadas, **apenas 3 foram fechadas/merged nas últimas 24 horas**:

| PR | Tipo | Componente | Descrição |
|----|------|------------|-----------|
| [#120851](https://github.com/NousResearch/hermes-agent/pull/120851) | Feature | plugins, vision, gemini | **feat(gemini): add image_gen plugin with Google AI Studio Gemini** — Adiciona backend nativo para geração de imagens via Google AI Studio, implementando `StaticImageGenProvider` com suporte a `image_generate`. Esta é a única feature PR mergeada no período. |
| [#92921](https://github.com/NousResearch/hermes-agent/issues/92921) | Bug (Security) | npm dependencies | **Correção de vulnerabilidades npm** — high-severity vulnerabilities em `nanoid <3.3.18` e `Electron <41.10.3` foram addressed no workspace web/ui-tui. |
| [#66344](https://github.com/NousResearch/hermes-agent/issues/66344) | Bug | desktop, cross-platform | **fix(desktop): cross-target builds reutilizam host electronDist** — Resolve problema de empacotamento Linux/WSL → Windows. |

**Observação:** A baixa taxa de merges (3 de 50 PRs) indica que a equipe está em modo de revisão/aprovação cuidadosa, possivelmente devido à proximidade com uma release ou preocupação com regressões.

---

## 4. Temas Quentes da Comunidade

As **10 issues com maior engajamento** (comentários) revelam os seguintes temas prioritários:

### 🔥 Maior Volume de Comentários

1. **[#105162](https://github.com/NousResearch/hermes-agent/issues/105162)** — **[CLOSED]** Desktop: chat iniciado via Bot Mode com ⌘T cria sessão oculta e inacessível após fechar tab (6 comentários, P2, `sweeper:risk-session-state`)
2. **[#99032](https://github.com/NousResearch/hermes-agent/issues/99032)** — **[OPEN]** TUI: placeholder `[[N lines]]` é enviado silenciosamente ao modelo quando token de paste está ausente (5 comentários, P2)
3. **[#121954](https://github.com/NousResearch/hermes-agent/issues/121954)** — **[OPEN]** Linux desktop crash com SIGTRAP/SIGSEGV na inicialização (5 comentários, P2, `needs-repro`)
4. **[#108325](https://github.com/NousResearch/hermes-agent/issues/108325)** — **[CLOSED]** Desktop WebSocket 45s heartbeat mata backend durante compactação de contexto longa (5 comentários, P1, `area/compression`)
5. **[#126634](https://github.com/NousResearch/hermes-agent/issues/126634)** — **[OPEN]** `check_computer_use_requirements()` retorna False em gateway de longa duração (4 comentários, P2, `tool/browser`)

### Análise de Demandas

- **Sessões e Estado (`sweeper:risk-session-state`)**: 5 das 10 issues mais comentadas estão marcadas com risco a sessões, indicando problemas recorrentes de durabilidade de estado, duplicação de renders e perda de dados de sessão.
- **Desktop**: 7 de 10 issues envolvem o componente desktop, confirmando que esta é a área mais frágil do projeto.
- **Windows Platform**: Várias issues específicas de Windows (`sweeper:risk-platform-windows`) aparecem consistentemente, sugerindo necessidade de testes mais robustos nesta plataforma.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (Atenção Imediata)

| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| [#127016](https://github.com/NousResearch/hermes-agent/issues/127016) | cron, install-update | Cron workers morrem com `ModuleNotFoundError` porque PYTHONPATH não inclui site-packages do PM | OPEN |
| [#127063](https://github.com/NousResearch/hermes-agent/pull/127063) | cli, auth, sessions | OAuth grants podem ser sobrescritos durante snapshot restore | OPEN |

### 🟠 P2 — Altos (Impacto Significativo)

| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| [#121954](https://github.com/NousResearch/hermes-agent/issues/121954) | desktop (Linux) | SIGTRAP/SIGSEGV na inicialização (4 crashes em 2 dias) | OPEN |
| [#108325](https://github.com/NousResearch/hermes-agent/issues/108325) | gateway, desktop | 45s heartbeat mata backend durante context compaction (~90-120s) | CLOSED |
| [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) | desktop, sessions | Assistant reply renderiza duas vezes (adjacente, verbatim) | OPEN |
| [#110316](https://github.com/NousResearch/hermes-agent/issues/110316) | agent, desktop, sessions | `state.db` duplicate-insert: `messages_read id` é rowid, não identificador estável | OPEN |
| [#126634](https://github.com/NousResearch/hermes-agent/issues/126634) | tools, browser | `check_computer_use_requirements` retorna False em gateway de longa duração | OPEN |
| [#55812](https://github.com/NousResearch/hermes-agent/issues/55812) | desktop, Windows | TUI gateway crash com `STATUS_ACCESS_VIOLATION` em delegate_task simultâneos | OPEN |
| [#118208](https://github.com/NousResearch/hermes-agent/issues/118208) | gateway, sessions | Peer runs serializam em sessão canônica — uma turn longa bloqueia todas por até 30 min | OPEN |
| [#105162](https://github.com/NousResearch/hermes-agent/issues/105162) | desktop, sessions | Bot Mode chat com ⌘T cria sessão oculta e inacessível | CLOSED |

### 🟡 P3 — Médios

| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| [#126902](https://github.com/NousResearch/hermes-agent/issues/126902) | agent, auth (Security) | `key_cmd` helpers recebem secrets do adapter profile (bot tokens, dashboard auth) | OPEN |
| [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) | desktop | Renderer corrompe sob pressão de memória GPU em Wayland | OPEN |
| [#69247](https://github.com/NousResearch/hermes-agent/issues/69247) | desktop (macOS 26) | Electron crash `ares_dns_rr_get_ttl` SIGTRAP + GIL event loop freeze | OPEN |
| [#95995](https://github.com/NousResearch/hermes-agent/issues/95995) | desktop | Renderer colapsa payloads multi-linha e remove fenced code-block styling | OPEN |
| [#89967](https://github.com/NousResearch/hermes-agent/issues/89967) | desktop, perf | GPU helper process entra em loop infinito de CPU após chat ser morto mid-request | OPEN |

### Padrões de Instabilidade Identificados

1. **Desktop Electron**: Crashes recorrentes em todas as plataformas (Linux SIGSEGV, macOS SIGTRAP, Windows ACCESS_VIOLATION)
2. **Sessões/Estado**: Problemas de durabilidade, duplicação e perda de dados de sessão
3. **Gateway**: Heartbeat timeouts, serialização de runs, restaurações de estado problemáticas
4. **Platform Windows**: Incompatibilidades específicas de Windows aparecem consistentemente

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features em PR

| PR | Componente | Descrição | Prioridade |
|----|------------|-----------|------------|
| [#120851](https://github.com/NousResearch/hermes-agent/pull/120851) | plugins, vision, gemini | **Image generation via Google AI Studio Gemini** (Nano Banana) | P3 |
| [#120180](https://github.com/NousResearch/hermes-agent/pull/120180) | gateway, plugins, tts, discord | **Stream TTS replies into Discord voice channels** com reescrita conversacional | P3 |
| [#127054](https://github.com/NousResearch/hermes-agent/pull/127054) | gateway, plugins, webhook | **Publicar lifecycle events de delivery para plugins** webhook | P3 |
| [#127067](https://github.com/NousResearch/hermes-agent/pull/127067) | whatsapp | WhatsApp adapter: não interpretar bridge exit signal-raced como crash fatal | P1 |

### 🔮 Sinais de Roadmap Inferidos

1. **Melhoria de voz**: TTS streaming para Discord (#120180) e correções de barge-in (#127056) sugerem foco em capacidades de voz.
2. **Durabilidade de estado**: Múltiplas PRs (#127046, #127063, #127061) indicam priorização de reliability de sessões e backups.
3. **Plugin ecosystem**: Expansão (#120851 gemini, #127054 webhook events) mostra direção de plataforma extensível.
4. **Desktop stability**: 20+ issues desktop indicam que uma "Desktop Stability Sprint" seria benéfica antes de novas features.

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Principais (baseado em issues)

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Desktop Impossível de Usar** | Linux crashing na inicialização, macOS 15+ não executa, Windows com crashes ao usar settings ou delegate_task | Alta |
| **Sessões Perdidas** | Conversas ficam ocultas, duplicam, ou desaparecem após restart | Alta |
| **Instabilidade de Gateway** | WebSocket heartbeat mata sessões ativas, peer runs bloqueiam por 30 min | Média |
| **Segurança** | Secrets expostos via key_cmd, OAuth grants sobrescritos em restore | Média |
| **TUI/CLI** | Paste tokens falham silenciosamente, skills trust não funciona em git repo | Baixa |

### 😊 Feedback Positivo Inferido

- **Feature gemini image_gen** (#120851) foi merged rapidamente, indicando valor percebido pela comunidade.
- **WhatsApp adapter** tem manutenção ativa (3 PRs relacionadas em 24h).
- **Desktop Logs pane** sendo melhorado para selectable text (#77801) — pequeno mas tangível UX improvement.

### 📊 Satisfação Geral

**A saúde geral do projeto mostra sinais de tensão**: 50 issues + 50 PRs em 24h é volume alto, e a proporção de P1/P2 issues abertas vs. fechadas sugere backlog crescente de problemas críticos. O Desktop app é a área mais crítica, com usuários relatando impossibilidade de uso em vários cenários.

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues Sem Resposta ou Sem Atribuição (Longa Data)

| Issue | Criado | Atualizado | Comentários | Prioridade | Motivo de Atenção |
|-------|--------|------------|-------------|------------|-------------------|
| [#55812](https://github.com/NousResearch/hermes-agent/issues/55812) | 2026-06-30 | 2026-09-28 | 3 | P2 | Windows delegate_task crash — 3 meses sem fix |
| [#69247](https://github.com/NousResearch/hermes-agent/issues/69247) | 2026-07-22 | 2026-09-28 | 3 | P3 | macOS 26 Electron crash — 2+ meses |
| [#76893](https://github.com/NousResearch/hermes-agent/issues/76893) | 2026-08-02 | 2026-09-28 | 1 | P2 | Mac desktop crash ao clicar settings — 2 meses |
| [#76900](https://github.com/NousResearch/hermes-agent/issues/76900) | 2026-08-02 | 2026-09-28 | 1 | P3 | Desktop renderer desaparece após tool-use (local llama.cpp) |
| [#76947](https://github.com/NousResearch/hermes-agent/issues/76947) | 2026-08-02 | 2026-09-28 | 3 | P3 | Linux AMD GPU crash-loop persistente |
| [#62964](https://github.com/NousResearch/hermes-agent/issues/62964) | 2026-07-12 | 2026-09-28 | 1 | P3 | Desktop renderer OOM crash ~25s após launch (Linux) |
| [#82562](https://github.com/NousResearch/hermes-agent/issues/82562) | 2026-08-09 | 2026-09-28 | 1 | P3 | GNOME Shell assertion failure no close do Electron |

### 🎯 Recomendações Prioritárias

1. **Desktop Stability Initiative**: 15+ issues desktop abertas, algumas com 2-3 meses. Considerar feature freeze em desktop até limpar backlog crítico.
2. **Atribuição de Issues Antigas**: Muitas issues de P2/P3 não têm assignee ou comentários da equipe. Respondê-las melhoraria confiança da comunidade.
3. **Windows Platform Parity**: Padrão consistente de issues Windows sugere necessidade de CI/CD mais robusto para esta plataforma.
4. **Release Discipline**: Sem releases em 24h + alta atividade de PR sugere que um release formal ajudaria usuários a entender qual versão "estável" usar.

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas/abertas (24h) | 39 |
| Issues fechadas (24h) | 11 |
| PRs abertos (24h) | 47 |
| PRs merged/fechados (24h) | 3 |
| Novas releases | 0 |
| Issues P1 abertas | 2 |
| Issues P2 abertas | 12+ |
| Componentes mais afetados | Desktop, Gateway, Agent, CLI |
| Issues sem resposta >30 dias | 7+ |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) em 2026-09-29.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data:** 2026-09-29  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do Dia

O PicoClaw apresenta hoje um cenário de **estagnação crítica na manutenção**. Nas últimas 24h, foram registradas 7 issues e 10 PRs atualizadas, porém **zero merge/fechamentos** — indicando gargalo na revisão de contribuições. A comunidade já reagiu a essa situação: um fork ativo foi announced por `afjcjsbx`, sinalizando que a base de usuários reconhece o repositório principal como potencialmente abandonado. A maior parte da atividade consiste em PRs legadas do stale bot sendo reativadas e novas contribuições de segurança高品质 being submetidas por contributors externos.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou versões desde o último período analisado. A versão estável mais recente permanece **v0.3.1** (referenciada em múltiplas issues e PRs).

---

## 3. Progresso do Projeto

**Nenhuma PR merged/fechada nas últimas 24h.** Todo o pipeline de review está estagnado:

| PR | Título | Status | Contribuidor |
|----|--------|--------|--------------|
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | fix(agent): deliver async tool results to the originating session | ABERTA | x1F916 |
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | fix(agent): resolve the owning agent in context managers | ABERTA | x1F916 |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | fix(channels): make Reload synchronous and nil-safe | ABERTA | x1F916 |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | fix(config): persist all api_keys and enabled flag of multi-key models | ABERTA | x1F916 |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | fix(updater): select the matching 32-bit ARM release asset | ABERTA | x1F916 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | feat(tools): add Keenable web search provider | ABERTA | ilya-bogin-keenable |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | ABERTA | iMilnb |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes | ABERTA | sarff |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): assemble IRCv3 multiline messages | ABERTA | linhongyuyu510 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation | ABERTA | trufae |

**Destaque:** O contributor `x1F916`纯贡献了5个关键修复补丁，全部针对核心功能（agent loop、channels manager、config、updater），rebaseadas em `main` (commit bbf6893). Estas PRs abordam bugs já identificados em issues anteriores.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| Issue | Título | Comentários | 👍 | Tipo |
|-------|--------|-------------|----|------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy | 14 | 2 | 🐛 Bug |
| [#258](https://github.com/sipeed/picoclaw/issues/258) | Security Audit (2026-02-16) | 5 | 1 | 🔴 Crítica |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | 5 | 0 | ✨ Feature |

**Análise:**
- **UI Performance (#3281):** Issue ativa desde 2026-07-21 com 14 comentários, indicando complexidade na resolução. Afeta diretamente a experiência do usuário web (Go 1.25.11, Web Channel).
- **Segurança (#258):** Audit oficial fechado em 2026-09-28 após status "CRITICAL VULNERABILITIES DETECTED" — necessário acompanhar se as correções foram implementadas.
- **Extensibilidade (#3366):** Demanda por provedores OpenAI-compatíveis para permitir self-hosted routers (ex: 9Router).

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (Hoje)

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#3404](https://github.com/sipeed/picoclaw/issues/3404) | 🔴 Alta | Reliability fixes com reproducers — wave 1 abrangendo agent loop, channels manager, config e updater |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 🟡 Média | Web UI laggy com histórico de chat longo (marcação stale) |

### Segurança

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#3405](https://github.com/sipeed/picoclaw/issues/3405) | 🔴 Crítica | Request para habilitar private vulnerability reporting — atualmente desabilitado e sem `SECURITY.md` |
| [#258](https://github.com/sipeed/picoclaw/issues/258) | 🔴 Crítica | Security Audit reportou vulnerabilidades em tool implementation — **CLOSED** em 2026-09-28 |

**Alerta:** A issue [#3405](https://github.com/sipeed/picoclaw/issues/3405) indica que pesquisadores de segurança não conseguem reportar vulnerabilidades de forma privada, o que pode inibir disclosure responsável e representar risco.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| Issue/PR | Título | Proponente | Potencial Impacto |
|----------|--------|------------|-------------------|
| [#3397](https://github.com/sipeed/picoclaw/issues/3397) | Add Tsubasa to OpenAI-compatible provider catalog | cenab | Adição de novo provider ao picker nativo |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | ItachiSan | Flexibilidade para self-hosted routers |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Add Keenable web search provider | ilya-bogin-keenable | Novo provedor de busca (funciona sem API key inicialmente) |

**Tendência identificada:** Forte demanda por **extensibilidade de providers** — tanto LLM (Tsubasa, OpenAI-compatíveis) quanto ferramentas (Keenable search). Isso sugere que o roadmap deve priorizar abstrações de provider para facilitar contributions externas.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Performance do Web UI** ([#3281](https://github.com/sipeed/picoclaw/issues/3281)): Usuários reportam lag severo ao digitar com histórico de chat extenso. Afeta experiência diária em desktop e mobile (testado em Brave).

2. **Segurança não endereçada**: Audit de fevereiro 2026 identificou vulnerabilidades críticas — contributors externos questionam se foram corrigidas dado o estado de manutenção.

3. **Comunidade huérfana**: O fork ativo ([#3398](https://github.com/sipeed/picoclaw/issues/3398)) por `afjcjsbx` explicitamente menciona que "this repository currently appears to be unmaintained."

4. **32-bit ARM quebrado**: Usuários de arquiteturas ARM legadas (armv6/armv7) não conseguem atualizar corretamente — o updater instala archive arm64 erroneamente.

### Cenários de Uso Reportados

- **Agentes multi-canal**: Session routing entre canais (Telegram, IRC, DeltaChat)
- **Self-hosted LLM**: Necessidade de provedores customizados OpenAI-compatíveis
- **IRC legacy**: Suporte a mensagens multiline via IRCv3

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stale

| Issue | Título | Criado | Atualizado | Days Idle |
|-------|--------|--------|------------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI laggy (stale) | 2026-07-21 | 2026-09-28 | ~69d |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | OpenAI compatible providers (stale) | 2026-09-04 | 2026-09-28 | ~25d |

### PRs aguardando review

| PR | Título | Criado | Age |
|----|--------|--------|-----|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): configured scopes | 2026-09-12 | ~17d |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): IRCv3 multiline | 2026-08-31 | ~29d |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | 2026-08-27 | ~33d |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat) | 2026-07-03 | ~88d |

### Ações Críticas Pendentes

1. **Habilitar private vulnerability reporting** — [#3405](https://github.com/sipeed/picoclaw/issues/3405)
2. **Review das 5 PRs de x1F916** — cobrem bugs críticos de reliability
3. **Verificar implementação do Security Audit** — [#258](https://github.com/sipeed/picoclaw/issues/258) fechou sem detalhe das correções aplicadas
4. **Merge do fix de lag UI** — [#3347](https://github.com/sipeed/picoclaw/pull/3347) resolveria issue ativa há ~33 dias

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade (issues + PRs / 24h) | 🔴 Alta (17) | Neutra |
| PRs merged (24h) | 🔴 0 | ⬇️ Crítica |
| Issues respondidas | 🟡 Parcial | Dependência de contributors externos |
| Releases recentes | 🔴 Nenhuma | Estagnação |
| Vulnerabilidades abertas | 🔴 1+ | Requer ação imediata |
| Fork ativo | ⚠️ Sim | Risco de fragmentação da comunidade |

**Veredicto:** O projeto enfrenta **risco de abandono** com acúmulo de PRs e issues sem review. A comunidade demonstra interesse ativo, mas a manutenção oficial está sobrecarregada ou pausada. Intervention dos maintainers é urgente para evitar perda de contributors e fragmentação do ecossistema.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
## Data: 2026-09-29

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade moderada** em 29 de setembro de 2026, com 5 eventos registrados nas últimas 24 horas. Foram abertas 2 issues e 2 PRs em estado aberto, além de 1 PR fechado. A atividade recente foca em manutenção de documentação (OpenWiki), melhorias no webui-v2 (correção de rotas de chat) e infraestrutura interna (refresh do codebase knowledge graph). Não houve lançamento de novas versões, indicando um período de estabilização ou preparação para release futura. A comunidade demonstra engajamento contínuo, com topics de taxonomy de falhas e configuração de novos provedores de modelo.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto não publicou novas versões hoje. O último ciclo de releases permanece vigente.

**Recomendação**: Caso o roadmap inclua uma release iminente, monitorar issues pendentes e PRs de maior impacto para eventual inclusão.

---

## 3. Progresso do Projeto

### PR Merged/Fechada

| # | Título | Tipo | Status | Impacto |
|---|--------|------|--------|---------|
| [#5132](https://github.com/nearai/ironclaw/pull/5132) | fix(webui-v2): redirect invalid chat thread routes | Bug fix | **CLOSED** | Melhoria na navegação do Chat |

**Análise do PR #5132**:
- Resolve três problemas de UX no ChatPage:
  - Redireciona rotas inválidas/reservadas `/chat/:threadId` para `/chat`
  - Aguarda estabilização da lista de threads antes de declarar deep-link inválido
  - Mantém threads locais ativas durante o refetch da lista
- **Contribuidor**: `flyagents` (novo contribuidor)
- **Tamanho**: L (Large)
- **Risco**: Baixo

### PRs Abertas (Atualizadas Hoje)

| # | Título | Tipo | Escopo |
|---|--------|------|--------|
| [#6698](https://github.com/nearai/ironclaw/pull/6698) | docs: update OpenWiki wiki | Documentação | Docs |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | Infraestrutura | CI |

**Observação**: Ambas as PRs abertas não são auto-merged, exigindo aprovação humana conforme política de change management.

---

## 4. Temas Quentes da Comunidade

### Issues Recentes (2 abertas hoje)

| # | Título | Reações | Comentários |
|---|--------|---------|-------------|
| [#8116](https://github.com/nearai/ironclaw/issues/8116) | Daily ironclaw failure taxonomy — 2026-09-28 | 0 👍 | 0 |
| [#8115](https://github.com/nearai/ironclaw/issues/8115) | Add a Tsubasa registry entry with explicit 32K context-budget path | 0 👍 | 0 |

### Análise das Demandas

**#8116 - Taxonomy de Falhas (IronClaw)**  
Esta issue é um **relatório diário automatizado** que analisa suites de testes, especificamente:
- **Suite analisada**: `officeqa` (31 non-pass)
- **Categoria predominante**: Erros genuínos de qualidade do modelo (DeepSeek-V4-Flash)
- **Frequência**: Diário (processo de monitoramento contínuo)

*Interpretação*: O sistema de taxonomy indica que a equipe mantém monitoramento ativo da qualidade do modelo em produção.

**#8115 - Entrada de Registry para Tsubasa**  
Solicitação para adicionar provedor nomeado ao IronClaw, melhorando:
- **Setup de credenciais**: Configuração mais clara para usuários
- **Seleção de modelo**: Interface mais intuitiva

*Interpretação*: Demanda de UX que facilita adoção de novos backends OpenAI-compatíveis, especificamente Tsubasa com context budget de 32K.

---

## 5. Bugs e Estabilidade

### Nenhum bug novo reportado nas últimas 24h

O projeto não registrou issues de bug com标签 "bug" nas últimas 24 horas.

**Histórico recente**:
- PR #5132 corrigiu problema de navegação no webui-v2 (já fechada)

**Métricas de estabilidade**:
- Issues abertas nas últimas 24h: 2 (0 bugs)
- Taxa de resolução: Não aplicável (sem novos bugs)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Identificada

**#8115 - Adicionar entrada de registry para Tsubasa (32K context)**

| Aspecto | Detalhe |
|---------|---------|
| **Prioridade implícita** | Média |
| **Escopo** | Configuração de provedores |
| **Justificativa** | Elimina configuração manual de endpoint/modelo |

**Sinais de roadmap inferidos**:
1. Expansão de suporte a provedores OpenAI-compatíveis
2. Foco em melhorar experiência de onboarding para novos modelos
3. Suporte a contexts mais longos (32K tokens)

### Contribuições de Infraestrutura

**#7988 - Refresh do Codebase Knowledge Graph**  
Indica investimento contínuo em:
- Documentação automatizada
- Manutenção de bootstrap snapshots do codebase

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| Configuração manual de provedores | Issue #8115 | Baixa (UX) |
| Navegação inconsistente em threads de chat | PR #5132 (resolvido) | Média |
| Falhas de qualidade em modelos específicos | Issue #8116 (taxonomia) | Monitoramento ativo |

### Cenários de Uso Observados

1. **Office QA**: Suite principal de avaliação com 31 failures analisados
2. **Deep linking de threads**: Usuários acessam threads específicas via URL
3. **Multi-provedor**: Necessidade de configurar diferentes backends de IA

### Satisfação Geral

**Indicadores neutros-positivos**:
- Engajamento consistente de contribuidores novos (`flyagents` contribuiu com bug fix)
- Automação de taxonomy de falhas demonstra maturidade operacional
- Documentação atualizada regularmente (OpenWiki refresh)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atualização Prolongada

| # | Título | Criado | Atualizado | Dias Inativo |
|---|--------|--------|------------|--------------|
| [#6698](https://github.com/nearai/ironclaw/pull/6698) | docs: update OpenWiki wiki | 2026-07-27 | 2026-09-28 | ~63 dias aberta |

### Análise

**PR #6698 - Atualização do OpenWiki (2+ meses aberta)**  
- **Tipo**: Documentação
- **Origem**: Automatizada por `ironclaw-ci[bot]`
- **Status**: Aguardando revisão humana
- **Risco de merge**: Baixo (apenas docs)
- **Recomendação**: Priorizar revisão para manter documentação sincronizada

### Priorização Sugerida

| Prioridade | Item | Motivo |
|------------|------|--------|
| 🔴 Alta | #6698 | Documentação desatualizada há 63 dias |
| 🟡 Média | #8115 | Feature request com benefício UX claro |
| 🟢 Baixa | #8116 | Monitoramento automatizado (não requer ação) |

---

## Resumo Executivo

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas (24h) | 2 | Neutra |
| PRs abertas (24h) | 2 | Neutra |
| PRs fechadas (24h) | 1 | Positiva |
| Releases (24h) | 0 | Neutra |
| Bugs novos | 0 | Positiva |

### Saúde Geral do Projeto: ✅ Estável

O IronClaw demonstra **saúde operacional estável** com foco em:
- Correção de bugs de UX (webui-v2)
- Manutenção de documentação
- Monitoramento contínuo de qualidade de modelos
- Expansão gradual de suporte a provedores

**Ação recomendada**: Revisar PR #6698 (OpenWiki) para evitar acúmulo de documentação pendente.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-29

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade de desenvolvimento** em 29/09/2026, com 6 issues e 16 PRs atualizados nas últimas 24h. A atividade concentra-se na estabilização de bugs críticos relacionados a gerenciamento de contexto, imagens e sessões — problemas que causam falhas permanentes de conversa. Foram merged 4 PRs, incluindo melhorias significativas no console e no sistema de contexto, enquanto 12 PRs permanecem abertos para revisão. Não houve novas releases. A saúde geral indica uma equipe reativa a problemas de estabilidade, com avanços em UX do console e performance.

---

## 2. Lançamentos

**Nenhuma nova release nas últimas 24h.**

- Não há changelogs ou notas de migração para reportar neste período.

---

## 3. Progresso do Projeto

### PRs Merged/Encerradas (4)

| # | Título | Impacto |
|---|--------|---------|
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX and smooth conversation transitions | Unificação da experiência de configurações do console com design consistente, controles reutilizáveis e feedback fluido. Corrige overflow do workspace-picker e flash da tela de boas-vindas ao trocar conversas. |
| [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | fix(context): reclaim historical media in Scroll and align thinking omission with token counting | Resolve #7853 — permite que imagens antigas sejam dobradas (fold) no Scroll e alinha omissão de thinking com contagem de tokens, prevenindo exaustão do context window. |
| [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) | fix(portability): preserve actionable per-asset import failures | Preserva mensagens de erro acionáveis por asset durante importações, melhorando debugabilidade em diferentes plataformas. |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | feat(console): add authenticated multi-tab chat terminal | Adiciona terminal xterm com abas independentes abaixo do chat, com redimensionamento e replay de output limitado. Requer autenticação. |

**Destaque:** O PR [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) representa um avanço crítico na estabilidade de sessões longas com imagens, resolvendo o problema raiz do issue [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853).

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários e engajamento

| # | Título | Comentários | Reações | Tendência |
|---|--------|-------------|---------|-----------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Bug: ToolResultPruner skippa blocos media, acumulação de base64 | 8 | 0 | ✅ Fechado com fix |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker _runs zombie entries inflate running_task_count | 2 | 0 | 🐛 Em investigação |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Feature: Agent self-managed context lifecycle para cron tasks | 2 | 0 | 💡 Feature request |

### Análise de Demandas

1. **Contexto e Imagens (#7853, #8009):** A comunidade demonstra forte preocupação com o gerenciamento de payloads de mídia (imagens base64). Há consenso de que o sistema atual permite que mídia rejeitada mate permanentemente uma sessão — um problema de confiabilidade grave.

2. **Context Window para Agentes Automatizados (#4525):** A feature request para checkpoint/reset automático em cron tasks reflete um caso de uso crescente de workflows de longa duração. A degradação de qualidade em 50-60% de utilização do contexto é um sinal de que o auto-compaction precisa evoluir.

3. **Dashboard vs. API Inconsistency (#7991):** Usuários reportam diferença entre contadores do dashboard e da API de chats — indica problema de bookkeeping no TaskTracker que afeta monitoramento operacional.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Crítico
| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | Oversized image stored in context makes session permanently unusable | Aberto | Payload de mídia rejeitado pelo provider permanece no contexto e é replayado em toda requisição, causando erro 400 permanente mesmo em turnos de texto puro. |
| [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Windows auto mode + sandbox off allows Office COM Quit() to close user's PowerPoint | Aberto | Falha de segurança: comandos Office COM maliciosos são executados quando o sandbox está desabilitado, permitindo que agentes fechem apps do usuário. |

#### 🟡 Moderado
| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker zombie entries inflate running_task_count | Aberto | Contador de tarefas em execução diverge entre dashboard (2) e API de chats (1). |
| [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) | Literal markers bypass output truncation | PR aberto | Marcador `<<<TRUNCATED>>>` no output pode bypassar limite de 50KB. |

#### 🟢 Correções em Progresso
- [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) — Recuperação de rejeições de payload de mídia (fix para #8009)
- [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) — Registro de run após task existir (fix para #7991)
- [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) ✅ — Reclamação de mídia histórica no Scroll

### Análise de Estabilidade

**Pontos de atenção:**
- A vulnerabilidade de sandbox no Windows (#8002) é um risco de segurança significativo que pode expor usuários a ações não intencionais.
- O problema de sessões permanentemente quebradas (#8009) afeta a confiabilidade percebida do produto em cenários com imagens.
- 2 dos 6 bugs reportados estão em estado crítico, indicando foco em estabilidade necessário.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Autor | Prioridade | Indicadores |
|---|--------|-------|------------|--------------|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Agent self-managed context lifecycle (auto checkpoint & reset) | dianguanboss | Alta | Crescimento de workflows automatizados; degradação documentada em 50-60% context |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | Declarar thinking_param_style para Aliyun Token Plan | Andykpa | Média | Modelos suportam reasoning_effort/thinking_budget mas Console oculta controles |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Durable paginated transcript history (PR aberto) | zhijianma | Alta | Implementação em andamento com SQLite e deduplicação |

### Sinais de Roadmap

1. **Gestão de Contexto para Long-running Tasks:** O issue #4525 tem 2 comentários e reflete necessidade real para automação de cron. A degradação de qualidade documentada sugere que checkpoint/reset pode ser prioritário.

2. **Suporte a Modelos de Pensamento (Reasoning):** A ausência de `thinking_param_style` no catálogo (#7990) indica que a integração com novos providers de modelos está desalinhada com o Console.

3. **Resiliência de Mídia:** O fluxo de rejeição de payloads (#8009, #8010) sugere que o roadmap deve incluir retry/dequeue inteligente para mídia.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Sessão quebrada por imagem** | Usuário gera relatório → imagem recusada pelo provider → conversa morre permanentemente | Crítico — perda de conversa inteira |
| **Zumbis no TaskTracker** | Dashboard mostra 2 tasks rodando, API retorna 1 | Confusão operacional, monitoração falha |
| **Office COM perigoso no Windows** | Usuário com sandbox off, agente executa `Quit()` | Risco de perda de trabalho não salvo |
| **Importações falham silenciosamente** | Erros de import preservados mas não acionáveis | Debugabilidade prejudicada |
| **Tabela Markdown inacessível** | Em telas pequenas, scroll de tabela é unreachable | UX mobile degradada |

### Cenários de Uso Emergentes

- **Agentes de cron de longa duração:** Usuários reportam degradação em pipelines multi-step, sugerindo adoção de CoPaw para automação empresarial.
- **Multi-tab terminal:** Feature recém-merged (#7861) indica demanda por workflows de desenvolvimento assistido.
- **Histórico paginado durável:** PR #7931 sinaliza que usuários valorizam persistência de transcrição além da memória de contexto.

### Satisfação/Insatisfação

| Indicador | Tendência |
|------------|-----------|
| Reabertura de bugs (imagem → sessão quebrada) | 🔴 Insatisfação com estabilidade de mídia |
| PRs de first-time contributors (6/12 abertos) | 🟢 Comunidade ativa e engajada |
| Bugs críticos sendo endereçados rapidamente | 🟡 Reatividade boa, mas volumen de bugs críticos é preocupante |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atividade Recente

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Agent self-managed context lifecycle | 2026-05-19 | 2026-09-28 | 132 dias total, 4 meses em aberto | Alta |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner media block skip | 2026-09-18 | 2026-09-28 | ✅ Fechado | — |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | thinking_param_style para Aliyun | 2026-09-25 | 2026-09-28 | 4 dias | Média |

### Análise de Backlog

1. **#[4525](https://github.com/agentscope-ai/QwenPaw/issues/4525):** Feature de auto-checkpoint para agentes cron está **4 meses sem progressão visível**. Este é o issue de feature request mais antigo em aberto e reflete uma necessidade não endereçada. Recomendação: triagem e scoping.

2. **#[7990](https://github.com/agentscope-ai/QwenPaw/issues/7990):** Request de catalogação de modelo com apenas 1 comentário — indica que pode não ter sido triado ainda. Impacto: modelos Aliyun Token Plan com controles de thinking ocultos no Console.

3. **PRs de first-time contributors:** 6 PRs abertos têm etiqueta `first-time-contributor`. Este é um indicador saudável de crescimento da comunidade, mas requer atenção de reviewers para manter o engajamento.

---

## Métricas Resumidas — 2026-09-29

| Categoria | Valor |
|-----------|-------|
| Issues ativas (24h) | 6 |
| PRs abertos (24h) | 12 |
| PRs merged (24h) | 4 |
| Novas releases | 0 |
| Bugs críticos em aberto | 2 |
| Features em implementação | 3+ |
| First-time contributors (PRs) | 6 |
| Issues mais antigos em aberto | #4525 (132 dias) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw](https://github.com/agentscope-ai/CoPaw) em 2026-09-29.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-29

## 1. Panorama do Dia

O projeto ZeroClaw mantém alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h. A distribuição equilibrada entre abertas e fechadas (25/25 issues; 40/10 PRs) indica ritmo saudável de trabalho. Não houve lançamentos hoje, mas múltiplos PRs de grande porte foram fechados, consolidando avanços em observabilidade, segurança e refatoração do gateway. A comunidade demonstra engajamento significativo em issues de RFC e features críticas como RBAC multi-tenant e OIDC.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O tracker [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) indica que melhorias na eficiência do processo de release estão em curso para as próximas versões.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (10)

| PR | Título | Área | Tamanho | Impacto |
|----|--------|------|---------|---------|
| [#11164](https://github.com/zeroclaw-labs/zeroclaw/pull/11164) | Daemon owns pricing refresher e gateway-start hook | daemon/gateway | L | Garante pricing mesmo sem gateway ativo |
| [#11162](https://github.com/zeroclaw-labs/zeroclaw/pull/11162) | F0 cleanups para gateway split v0.9.0 | gateway | M | Remove 398 linhas de código morto |
| [#11161](https://github.com/zeroclaw-labs/zeroclaw/pull/11161) | Golden frames para WS, SSE, webhook e ACP | gateway | XL | Infra de teste para rotas do gateway |
| [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) | Conditional SOP steps via decision model | sop | XL | Steps podem decidir dinamicamente |
| [#11137](https://github.com/zeroclaw-labs/zeroclaw/pull/11137) | Windows panic fix during bundle export | agents | M | Corrigido crash em plataforma Windows |
| [#11092](https://github.com/zeroclaw-labs/zeroclaw/pull/11092) | Holding-crate exception para composition contract | runtime | XS | Aprovação de exceção arquitetural |
| [#11190](https://github.com/zeroclaw-labs/zeroclaw/pull/11190) | Restaura private memory plane section | docs | XS | Documentação de segurança recuperada |

### PRs Abertos de Destaque (40 abertas)

- **[#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131)** (XL) — Daemon owns observer event firehose: resolve problema de `logs/subscribe` não funcionar sem gateway
- **[#11167](https://github.com/zeroclaw-labs/zeroclaw/pull/11167)** (XL) — Bounded replayable hub para subscriptions RPC
- **[#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076)** (XL) — Nova tool `agy_cli` para integração com Antigravity CLI (Gemini CLI deprecado)
- **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** (XL) — Per-agent ownership scoping para session tools e discord_search
- **[#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935)** (XL) — Corrige StreamTextGuard descartando replies quando prosa cita tool-result

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)** — RFC: Simplificar voting removendo janelas obrigatórias (12 comentários, CLOSED)
   - **Demanda**: Eliminar fricção no processo RFC, permitindo que REVISE interrompa snapshot atual
   - **Status**: Aprovado e implementado

2. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC para deployments multi-tenant (10 comentários, OPEN)
   - **Demanda**: Implementar RBAC baseado em remetentes para ambientes com múltiplos agentes
   - **Dependência**: Draft #11068 em aberto; direção aceita (sender roles via agent/risk-profile)

3. **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)** — Plugin-owned Kanban board (9 comentários, OPEN)
   - **Demanda**: Quadro Kanban gerenciado por plugin para trabalho de agentes
   - **Progresso**: Estado durável genérico entregue em #11081

4. **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)** — Install skills from .well-known discovery indexes (8 comentários, CLOSED)
   - **Demanda**: Suporte a URI `.well-known` padronizado para skills
   - **Adoção**: Cloudflare e Vercel já suportam

5. **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** — Move channels & tools para runtime plugins (6 comentários, OPEN)
   - **Progresso**: Múltiplos PRs aterrizados (#11081, #11098, #8908, #8909, #11178)

### Análise de Tendências

- **Segurança dominates**: 6 das 10 issues mais comentadas têm标签 `security` ou `domain:security`
- **Plugin architecture é tema recorrente**: Issues #8850, #8832, #10162 convergem para ecosistema de plugins
- **Multi-tenant é prioridade**: RBAC (#5982), pairing tokens (#10573), OIDC (#8289)

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P0/P1) Reportados

| Issue | Severidade | Título | Status |
|-------|------------|--------|--------|
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | **S0 / P0** | Session resume restaura ambiente após revogação admin | OPEN |
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | **S0 / P1** | Concurrent file_edit/write dropa edits em parallel_tools | CLOSED |
| [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | **S0 / P1** | Partial Code/ACP turns desaparecem se processo sai antes | CLOSED |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | **S0 / P1** | Multimodal image cap eviction reescreve mensagens e invalida cache | CLOSED |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | **S0 / P1** | Notification lag cancela todos os turns ativos | CLOSED |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | **S2 / P1** | Anthropic provider reporta $0.00 spend | OPEN |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | **S2 / P1** | Gateway auth não aplicado na route layer | CLOSED |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | **S2 / P1** | `block_high_risk_commands = false` não é respeitado | CLOSED |

### Bugs de Prioridade Média (P2)

- **[#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708)** (CLOSED) — Daemon stdout/stderr logs sem bound
- **[#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)** (CLOSED) — `message_count` inconsistente entre RPCs
- **[#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887)** (CLOSED) — Non-vision gate falha em prosa com marcadores
- **[#10280](https://github.com/zeroclaw-labs/zeroclaw/issues/10280)** (CLOSED) — Normalizar erros de web-search GET

### Análise de Regressões

4 bugs S0 foram fechados hoje, indicando foco em estabilidade. O bug P0 [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) permanece aberto — risco de segurança após revogação admin.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso (Status: accepted/in-progress)

| Issue | Feature | Prioridade | Tracking |
|-------|---------|------------|----------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC multi-tenant | P2 | Draft #11068 |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board | P2 | #11081 entregue |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Runtime plugins (vs compile-time flags) | P2 | Progresso significativo |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Binding pairing tokens para roster users | P2 | Fundamentos merged |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | OIDC milestone: canonical principals | P2 | Core stack merged |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Cost reporting para Anthropic provider | P1 | Em progresso |

### Sinais de Roadmap

- **v0.9.0 Gateway Split**: Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) com fases 2 e 3 definidas
- **Release Efficiency**: [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) coordena melhorias pós-v0.8.5
- **SOP Evolution**: [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) merged introduz conditional steps

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Configuração e Migração**
   - Usuários reportam confusão com `schema_version` omitido ([#11217](https://github.com/zeroclaw-labs/zeroclaw/pull/11217), [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218))
   - Necessidade de warning claro para chaves faltantes

2. **Observabilidade**
   - `zerocode` não recebia eventos sem gateway ativo — impacta debugging
   - `session/list-acp` reporta contagens inconsistentes ([#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802))

3. **Segurança**
   - Config `block_high_risk_commands = false` não funcionava como esperado
   - Revogação admin pode não persistir após session resume (S0)

4. **UX/TUI**
   - Sessões locais não respeitavam diretório de lançamento do zerocode ([#11219](https://github.com/zeroclaw-labs/zeroclaw/pull/11219))
   - Falta de undo/redo no composer zerocode ([#11175](https://github.com/zeroclaw-labs/zeroclaw/pull/11175))

### Cenários de Uso Emergentes

- **Multi-tenant agents**: Deploys que exigem isolamento por remetente (#5982)
- **Plugin ecosystem**: Usuários querem Kanban e tools customizáveis (#8832)
- **ZeroCode enhancements**: Copy/Add to Chat (#10553), Composer editing (#11175)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >30 dias

| Issue | Título | Criado | Última Atualização | Prioridade |
|-------|--------|--------|-------------------|------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC | 2026-04-22 | 2026-09-28 | P2 |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban | 2026-07-08 | 2026-09-28 | P2 |
| [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) | Terminal fallback text | 2026-08-20 | 2026-09-28 | P2 |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | Plugin install seed retry | 2026-08-20 | 2026-09-28 | P2 |

### PRs Pendentes de Review

| PR | Título | Tamanho | Aguarda |
|----|--------|---------|---------|
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | Per-agent ownership scoping | XL | needs-maintainer-review |
| [#11137](https://github.com/zeroclaw-labs/zeroclaw/pull/11137) | Windows panic fix | M | needs-maintainer-review |
| [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) | StreamTextGuard fix | XL | — |
| [#10553](https://github.com/zeroclaw-labs/zeroclaw/pull/10553) | Selected text to chat | XL | — |

### Ações Recomendadas

1. **Priorizar review** de PRs XL bloqueados ([#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131) como dependency de [#11167](https://github.com/zeroclaw-labs/zeroclaw/pull/11167))
2. **Atribuir owner** para issue P0 [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — risco de segurança
3. **Clarificar timeline** para feature RBAC multi-tenant (#5982) — 5 meses em aberto

---

## Métricas Resumidas (24h)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 25 |
| Issues fechadas | 25 |
|

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*