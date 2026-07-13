# Resumo diário do ecossistema de agentes de IA 2026-07-14

> Issues: 0 | PRs: 17 | Projetos cobertos: 7 | Gerado em: 2026-07-13 20:54 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-14

## 1. Panorama do Dia

NullClaw mantém alta atividade de desenvolvimento com **17 PRs atualizados nas últimas 24h**, dos quais 4 foram fechados/merged. O projeto apresenta um pipeline robusto de 13 PRs abertos cobrindo correções críticas, features de UX e refatorações de estabilidade. **Nenhuma issue foi aberta/fechada** e não há releases recentes, indicando foco em consolidação do código antes de próximos lançamentos. A saúde geral do projeto permanece estável com correções importantes em produção (cron, gateways, segurança).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em fase de maturação de múltiplas contribuições antes de novo tag de versão.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (4 total)

| PR | Título | Impacto |
|---|---|---|
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | fix(agent_runner): suppress stderr initialization logs on agent failure | Elimina ruído de logs de inicialização sendo postados como respostas do agente |
| [#950](https://github.com/nullclaw/nullclaw/pull/950) | fix(gateway): move port probe before allocations | Corrige vazamento de recursos em testes com `AddressInUse` |
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | fix: make queue_mode configurable from config.json | Permite configuração de `agent.default_queue_mode` via JSON |
| [#948](https://github.com/nullclaw/nullclaw/pull/948) | fix cron agent delivery attribution | Atribui corretamente origem de mensagens de cron agents |

**Destaque:** O PR [#948](https://github.com/nullclaw/nullclaw/pull/948) resolve um problema de rastreamento importante onde delivery de cron agents não era atribuído ao canal/conta correta, impactando debugging e analytics.

---

## 4. Temas Quentes da Comunidade

### Discussões em Andamento (13 PRs abertos)

| Categoria | PRs | Tema Central |
|---|---|---|
| **UX/Interatividade** | [#970](https://github.com/nullclaw/nullclaw/pull/970) | Editor de linha para REPL do agente com suporte a arrow keys |
| **Aprovação de Ferramentas** | [#969](https://github.com/nullclaw/nullclaw/pull/969) | Flow estruturado de approval request/response |
| **Memória** | [#961](https://github.com/nullclaw/nullclaw/pull/961) | Auto-recall configurável e limites de contexto |

**Análise:** A comunidade demonstra interesse forte em **experiência interativa** (PR #970 com editor de linha) e **controle de memória** (PR #961 com limites configuráveis). O flow de aprovação (PR #969) indica amadurecimento do modelo de segurança para ferramentas.

---

## 5. Bugs e Estabilidade

### Correções Pendentes de Alta Prioridade

| Severidade | PR | Problema | Impacto |
|---|---|---|---|
| **Crítica** | [#954](https://github.com/nullclaw/nullclaw/pull/954) | use-after-free em cron jobs one-shot — mensagens silenciosamente perdidas | Perda de dados em jobs agendados |
| **Alta** | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Discord gateway sockets não se recuperam | Instabilidade em canais Discord |
| **Alta** | [#968](https://github.com/nullclaw/nullclaw/pull/968) | Matrix `next_batch` não persiste entre restarts | Sincronização redundantemente completa |
| **Alta** | [#966](https://github.com/nullclaw/nullclaw/pull/966) | DNS resolution falha em Android (Zig 0.16) | Funcionalidade comprometida em Termux |
| **Média** | [#959](https://github.com/nullclaw/nullclaw/pull/959) | Token paired não persistido para scheduler tool | Autenticação falha em jobs cron |
| **Média** | [#958](https://github.com/nullclaw/nullclaw/pull/958) | MS Teams JWT claim `serviceurl` em lowercase | Rejeição 403 em inbound messages |

**Recomendação:** Priorizar review do [#954](https://github.com/nullclaw/nullclaw/pull/954) (use-after-free) e [#953](https://github.com/nullclaw/nullclaw/pull/953) (Discord gateway) antes de próxima release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Feature | Valor para Usuário |
|---|---|---|
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | Structured approval flow | Controle granular sobre permissões de ferramentas shell |
| [#964](https://github.com/nullclaw/nullclaw/pull/964) | Native API tool calls durante streaming | Execução de ferramentas em responses puramente streamadas |
| [#961](https://github.com/nullclaw/nullclaw/pull/961) | Auto-recall configurável + limites de contexto | Otimização de uso de tokens e custos |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | Arrow keys no REPL | UX interativa padrão (similar a shell) |

### Documentação e Integrações

| PR | Escopo | Relevância |
|---|---|---|
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | Native Anthropic provider (API key + OAuth) | Elimina dependência de OpenRouter |
| [#963](https://github.com/nullclaw/nullclaw/pull/963) | Weixin iLink QR auth documentado | Suporte oficial para mercado chinês |

**Sinais de roadmap:** Ênfase em **segurança de ferramentas**, **otimização de custos de contexto** e **suporte multiplataforma** (Android/Termux).

---

## 7. Resumo de Feedback dos Usuários

*Baseado em padrões extraídos dos PRs e issues referenciadas.*

### Dores Identificadas

1. **Perda silenciosa de mensagens cron** — Jobs executam sem output visível ([#941](https://github.com/nullclaw/nullclaw/issues/941) → [#954](https://github.com/nullclaw/nullclaw/pull/954))
2. **Instabilidade em Discord** — Gateways caem sem recuperação automática ([#953](https://github.com/nullclaw/nullclaw/pull/953))
3. **Custos de contexto imprevisíveis** — Necessidade de limites configuráveis ([#961](https://github.com/nullclaw/nullclaw/pull/961))
4. **Experiência REPL rudimentar** — Falta de histórico e navegação ([#970](https://github.com/nullclaw/nullclaw/pull/970))
5. **Autenticação MS Teams quebrada** — Rejeição de mensagens legítimas ([#958](https://github.com/nullclaw/nullclaw/pull/958))

### Cenários de Uso Evidenciados

- **Agentes agendados (cron)** com delivery multi-canal
- **Integração Matrix** como canal primário de messaging
- **Execução de ferramentas shell** com necessidade de aprovação
- **Deploy em Android** via Termux
- **Provider diversity** com Anthropic, OpenRouter e nativos

---

## 8. Backlog que Merece Atenção

### PRs Antigos Sem Merge (idade >14 dias)

| PR | Idade | Status | Prioridade |
|---|---|---|---|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | ~32 dias | Aberto | **Alta** — Estabilidade Discord |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | ~31 dias | Aberto | **Crítica** — use-after-free |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | ~29 dias | Aberto | **Baixa** — Dependabot (alpine 3.24) |
| [#958](https://github.com/nullclaw/nullclaw/pull/958) | ~28 dias | Aberto | **Média** — MS Teams JWT |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | ~28 dias | Aberto | **Média** — Scheduler auth |

### Ações Recomendadas

1. **Revisar urgente [#954](https://github.com/nullclaw/nullclaw/pull/954)** — Bug de memória afeta reliability
2. **Merge [#953](https://github.com/nullclaw/nullclaw/pull/953)** — Corrigir estabilidade Discord
3. **Dependabot [#956](https://github.com/nullclaw/nullclaw/pull/956)** — Atualizar alpine para 3.24 (segurança)
4. **Revisar features [#969](https://github.com/nullclaw/nullclaw/pull/969) e [#964](https://github.com/nullclaw/nullclaw/pull/964)** — Trazem valor significativo se integrados

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|---|---|---|
| PRs abertos | 13 | Estável |
| PRs fechados (24h) | 4 | Positivo |
| Issues abertas (24h) | 0 | Estável |
| Releases (7 dias) | 0 | Aguardando |
| Bug fixes pendentes | 7 | Atenção |
| Features em pipeline | 4 | Saudável |

**Veredicto:** Projeto em **saúde moderada** — alta atividade de desenvolvimento com acumulação de correções críticas pendentes de review. Recomenda-se sessão de triagem de PRs para avançar correções de estabilidade antes de próxima release.

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-14 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **alta fermentação técnica** em 14 de julho de 2026. A maioria dos projetos (5 de 7) não publicou releases formais nas últimas 24h, sinalizando consolidação pré-lançamento ou fase intensiva de code review. Observa-se convergência em três eixos: **estabilidade de integrações com canais** (Discord, Matrix, Telegram, Slack), **segurança de ferramentas e approval flows**, e **otimização de custos de contexto via caching**. A pressão competitiva é evidente: CoPaw/#6013 menciona "WorkBuddy" como referência de estabilidade, e a fragmentação de providers (Anthropic, OpenAI, Gemini, Copilot) gera bugs de interoperabilidade recorrentes. O mercado chinês (WeChat, Weixin iLink, Feishu) emerge como vetor de crescimento para múltiplos projetos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Abertos | Releases (7d) | Avaliação de Saúde |
|---------|:------------:|:---------:|:-----------:|:--------------:|--------------------|
| **NullClaw** | 0 | 17 | 13 | 0 | 🟡 Moderada — 4 bugs críticos pendentes (use-after-free, Discord gateway) |
| **NanoBot** | 13 | 45 | 27 | 0 | 🟠 Atenção — 4 bugs críticos (endless loop, UTF-16, race condition) |
| **Hermes Agent** | 50 | 50 | 42 | 0 | 🟢 Estável — 47/50 issues fechadas, foco em P2 |
| **PicoClaw** | 4 | 5 | 5 | 0 | 🟡 Moderada — 80% PRs stale, 1 bug crítico (Gemini compat) |
| **IronClaw** | 31 | 50 | Multiple | **1** (v0.29.1) | 🟡 Moderada — NEA-25 restructuring ativa, 7 P2s abertas |
| **CoPaw** | 50 | 50 | 26 | **1** (v2.0.0.post1) | 🔴 Crítica — Regressões v2.0: tool_calls error 400, loop infinito |
| **ZeroClaw** | 45 | 50 | Multiple | 0 | 🟠 Atenção — Schema V4 breaking, 6 bugs TUI, macOS degradado |

**Observação de outliers:**

- **CoPaw** apresenta a situação mais crítica: release v2.0.0 com múltiplas regressões (SSH Offline, Profiles 404, loop infinito), indicando release precipitado.
- **Hermes Agent** demonstra disciplina de qualidade superior: 94% (47/50) das issues fechadas em 24h com cobertura de testes em 43.22%.
- **IronClaw** é o único projeto com **breaking changes documentadas** (ironclaw_common 0.5.0, ironclaw_skills 0.4.0), sinalizando maturidade de versionamento.

---

## 3. Posicionamento do Projeto Principal

### Análise por Projeto

**🔝 NanoBot (HKUDS)** — Volume absoluto de atividade (45 PRs, 27 PRs abertos) indica maior investimento de desenvolvimento. Diferencia-se por suporte a voice channels, WebUI session export e auto-discovery de hooks via entry_points. **Risco:** 4 bugs P1 simultâneos sugerem dívida técnica acumulada.

**🔝 IronClaw (nearai)** — Maior maturidade de arquitetura com macro-restructuração NEA-25 (7 stacks paralelas) e TypeScript migration completa do WebUI. Breaking changes versionadas corretamente. **Risco:** 7 P2s abertas indicam fricção pós-release v0.29.1.

**🔝 Hermes Agent (NousResearch)** — Melhor disciplina de qualidade (94% issue closure rate). Diferencia-se por integração Copilot-first e cobertura de testes explícita (15 issues de coverage pendentes). **Risco:** 42 PRs abertas sugere gargalo de review.

**🔝 CoPaw (QwenPaw)** — Maior velocidade de iteração (50 PRs/24h) e foco agressivo em features. Diferencia-se por suporte prioritário ao mercado chinês (WeChat, Feishu, DingTalk). **Risco:** Regressões v2.0.0 indicam release sem validação adequada.

**🔝 NullClaw** — Foco em estabilidade com 4 PRs merged/24h e pipeline de approval flow estruturado. Diferencia-se por suporte Android/Termux. **Risco:** Bugs críticos pendentes há >30 dias.

**🔝 ZeroClaw** — RFC de arquitetura "Lean core" indica ambição de design. Diferencia-se por Kanban board local e multi-session no gateway. **Risco:** 6 bugs TUI concentrados, macOS com 3 bugs separados.

**🔝 PicoClaw** — Menor volume, maior foco em interoperabilidade de providers (OpenAI, Gemini, Anthropic). Diferencia-se pela urgência em substituir libolm por vodozemac (segurança). **Risco:** 80% PRs stale, falta de revisão.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Integração de Canais — Problema Transversal

| Projeto | Canal | Status |
|---------|-------|--------|
| NullClaw | Discord gateway | 🔴 Sockets não se recuperam (#953) |
| NanoBot | Discord | 🔴 Bot online mas não recebe mensagens (#4897) |
| CoPaw | WeChat, Feishu | 🔴 Erros internos após upgrade |
| ZeroClaw | Telegram | 🔴 Configuração quebrada (#8505) |

**Implicação:** A camada de gateway/canal é consistentemente frágil. Nenhum projeto demonstra interoperabilidade full-stack entre múltiplos canais.

### 4.2 Segurança de Ferramentas — Evolução Convergente

| Projeto | Feature | Status |
|---------|---------|--------|
| NullClaw | Structured approval flow | PR #969 aberto |
| IronClaw | Approval notification broken | P2 (#5885) |
| Hermes Agent | MCP tool calls falham com SSE | P2 (#36554) — resolved |
| CoPaw | MCP permissions ignoradas | Alta (#5947) |

**Implicação:** O modelo de segurança baseado em approval/grantian de ferramentas está em transição. A tendência é flows estruturados com audit trail.

### 4.3 Otimização de Custos de Contexto

| Projeto | Feature |
|---------|---------|
| NullClaw | Auto-recall configurável + limites de contexto (#961) |
| PicoClaw | SystemParts com cache_control (#3228) |
| PicoClaw | Rolling conversation cache breakpoints (#3229) |
| CoPaw | Context compression causando orphan tool_results |
| NanoBot | /dream-log filtra commits não-Dream |

**Implicação:** Com modelos Claude/Anthropic e reasoning models (GPT-5, O-series) cobrando por token, o controle de contexto é prioritário universal.

### 4.4 Cobertura de Testes e Qualidade

- **Hermes Agent:** 43.22% cobertura, 15 issues pedindo melhoria específica em `mcp_serve.py` (0%), `tools/voice_mode.py` (11.65%)
- **ZeroClaw:** Foco em deterministic coverage para edge cases de timestamp e ordenação
- **IronClaw:** Integration test harness com factory de capability-port

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público Primário | Differenciador |
|---------|-------------|------------------|-----------------|
| **Hermes Agent** | Provider-first (Copilot, Bedrock, MCP) | Corp/enterprise | Integração Copilot nativa, test coverage discipline |
| **IronClaw** | Extension-surface unified (NEA-25) | Teams/empresas | Unificação de extensões Slack/GitHub/Gmail |
| **CoPaw** | Channel-first (WeChat, Feishu, DingTalk) | Mercado chinês | Suporte nativo a ecossistema messaging chinês |
| **NanoBot** | Hook-based extensibility | Desenvolvedores avançados | Auto-discovery via entry_points, voice channels |
| **NullClaw** | Gateway-centric | Cross-platform | Suporte Android/Termux, REPL interativo |
| **ZeroClaw** | Skill/MCP plugin host | Power users | Lean core RFC, Kanban local, multi-session |
| **PicoClaw** | Provider abstraction layer | Multi-provider | Interoperabilidade OpenAI/Gemini/Anthropic |

### 5.2 Estratégia de Features

**Foco em Estabilidade:** Hermes Agent, NullClaw — baixa taxa de releases, alta disciplina de bug fix.

**Foco em Velocidade:** CoPaw, NanoBot — releases frequentes, risco de regressões.

**Foco em Breaking Changes Planejadas:** IronClaw (NEA-25, Schema V4), PicoClaw (vodozemac swap) — mudanças estruturais com versionamento correto.

### 5.3 Divergência de Prioridades

- **Mercado Ocidental vs. Chinês:** CoPaw prioriza WeChat/Feishu; Hermes Agent/IronClaw focam em Slack/GitHub.
- **Enterprise vs. Individual:** IronClaw e Hermes Agent com OAuth hardening e extension lifecycle; NanoBot e NullClaw com REPL e developer experience.
- **Segurança:** PicoClaw (libolm→vodozemac), IronClaw (OAuth hardening), Hermes Agent (path validation), ZeroClaw (DoS risk closed).

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Desenvolvimento

| Projeto | PRs/24h | Issue Closure Rate | Tempo Médio de CRÍTICO |
|---------|:-------:|:-----------------:|:----------------------:|
| Hermes Agent | 50 | **94%** (47/50) | N/A (P2 atual) |
| CoPaw | 50 | ~60% (24/40 bugs) | < 24h (multiple hotfixes) |
| NanoBot | 45 | ~85% (estimado) | ~2 dias (endless loop) |
| IronClaw | 50 | ~50% (31 issues) | ~1 dia (P2s noted) |
| ZeroClaw | 50 | ~27% (12/45) | N/A (S1s abertas) |
| NullClaw | 17 | 0% (0 issues) | > 30 dias (use-after-free) |
| PicoClaw | 5 | 0% (0 issues) | N/A (stale) |

### 6.2 Indicadores de Maturidade

**Alta Maturidade:**
- **Hermes Agent:** 43.22% test coverage, P2 issues resolvidas em 24h, 47 issues fechadas.
- **IronClaw:** Breaking changes versionadas (0.5.0, 0.4.0), release notes detalhados.

**Maturidade Intermediária:**
- **NanoBot:** Alta atividade, mas 4 P1s abertas simultaneamente.
- **CoPaw:** Resposta rápida a bugs, mas regressões v2.0 indicam release management imaturo.

**Baixa Maturidade:**
- **PicoClaw:** 80% PRs stale, 35 dias sem resposta em issue de segurança.
- **NullClaw:** Bugs críticos >30 dias sem merge.
- **ZeroClaw:** 6 bugs TUI simultâneos, macOS com 3 issues separadas.

### 6.3 Engajamento de Comunidade

| Projeto | Issue mais comentada | Comentários | Indicador |
|---------|---------------------|:-----------:|------------|
| NullClaw | — | 0 | Baixa interação |
| NanoBot | Mattermost Bot (#1011) | 4 | Demanda latente de canais |
| Hermes Agent | Copilot fallback (#63815) | 3 | Problema técnico específico |
| PicoClaw | vodozemac (#3088) | 8 | Pressão de segurança |
| IronClaw | GitHub extension status (#5948) | 5 | Confusão de UX |
| CoPaw | Error 400 v2 (#5996) | 10 | Frustração de usuário |
| ZeroClaw | Work Lanes RFC (#6808) | 14 | Governança ativa |

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

**1. Fragmentação de Providers como Nova Normalidade**
A interoperabilidade OpenAI/Gemini/Anthropic/Copilot é problema recorrente (PicoClaw #3230, Hermes Agent #63815, CoPaw #6015). **Previsão:** Ferramentas de abstraction layer serão commodity; diferenciação virá de fallback inteligente e cost optimization.

**2. Segurança de Ferramentas como Diferenciador**
Approval flows estruturados (NullClaw #969), MCP sandboxing (CoPaw #6054), e substituição de deps inseguras (PicoClaw libolm→vodozemac) indicam que **security by design** será requisito de entrada, não feature.

**3. mercado Chinês como Vetor de Crescimento**
Três projetos (CoPaw, NanoBot, NullClaw) investem em WeChat/Feishu/Weixin iLink. **Previsão:** Suporte a canais chineses deixará de ser nicho para se tornar esperado em 2027.

**4. Cross-Platform como Barreira de Entrada**
ZeroClaw (macOS 3 bugs), IronClaw (Windows path POSIX), NullClaw (Android Termux) demonstram que suporte consistente a plataformas desktop/mobile é diferencial. **Previsão:** Projetos que não investirem em testing cross-platform perderão contributors Windows/macOS.

**5. Regressões de Major Releases são Custo de Velocidade**
CoPaw v2.0.0 demonstra que iteração rápida sem staging adequado gera churn. **Previsão:** Práticas de release management (beta channels, feature flags) serão adotadas por projetos de alto crescimento.

**6. RFC/Governança como Sinal de Maturidade**
ZeroClaw (#6808, #6165), IronClaw (NEA-25) investem em processo RFC. **Previsão:** Projetos com governança transparente terão maior capacidade de absorver contribuições externas.

**7. TUI como Superfície de Usuário Crítica**
ZeroClaw com 6 bugs TUI simultâneos, Hermes Agent com TUI resize issues. **Previsão:** Interfaces textuais recuperando relevância com modelos de IA; debugging de TUI será skill especializado.

### 7.2 Matriz de Oportunidades

| Oportun

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-14

## 1. Panorama do dia

O NanoBot demonstra **altíssima atividade de desenvolvimento** em 14 de julho de 2026, com 45 PRs e 13 issues atualizadas nas últimas 24 horas. O projeto apresenta 2 issues abertas de maior severidade (endless loop no `complete_goal` e necessidade de gateway para ferramentas) e 27 PRs abertas — muitas sinalizadas com `priority: p1`, indicando correções críticas em andamento. A comunidade demonstra engajamento significativo em integrações (Telegram, Feishu, Discord), experiência WebUI e ferramentas de memória. Não houve releases formais no período, sugerindo que as mudanças estão em fase de code review.

---

## 2. Lançamentos

**Nenhuma release formal** została emitida nas últimas 24 horas. O projeto continua com desenvolvimento intensivo em branch, acumulando 27 PRs abertas. A ausência de release pode indicar foco em estabilização antes de um próximo tag.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** hoje, representando avanço concreto:

| PR | Título | Impacto |
|---|---|---|
| [#4909](https://github.com/HKUDS/nanobot/pull/4909) | fix(dream): ignore line-ending-only memory diffs | Corrige falsos positivos em diffs de memória Dream causados por diferenças CRLF/LF |
| [#4914](https://github.com/HKUDS/nanobot/pull/4914) | feat(webui): add Brazilian Portuguese (pt-BR) locale | Expande localização para 3 novos mercados lusófonos |
| [#4913](https://github.com/HKUDS/nanobot/pull/4913) | docs: update recent changes through July 12 | Mantém documentação de releases atualizada com 17 dias de mudanças |
| [#4912](https://github.com/HKUDS/nanobot/pull/4912) | docs: remove broken Star History embed | Remove dependência de API GraphQL do GitHub (restringida em Jun/2026) |

**Destaque estratégico:** A refatoração de canais em [#4908](https://github.com/HKUDS/nanobot/pull/4908) está aberta com `priority: p1`, removendo acoplamento arquitetural na configuração de canais e suporte multi-instância Feishu.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

1. **[#1011](https://github.com/HKUDS/nanobot/issues/1011) — Mattermost Bot** (4 👍, closed)
   - **Demanda:** Suporte a Mattermost como canal de comunicação
   - **Análise:** Usuário argumenta que Discord é overkill para gaming, Telegram tem riscos de privacidade na Rússia, Slack é pago e WhatsApp exige conta business. Mattermost surge como alternativa open source auto-hospedável.
   - **Status:** Closed como stale, indica necessidade de priorização de roadmap de canais.

2. **[#1500](https://github.com/HKUDS/nanobot/issues/1500) — Forced Information-Flow Output** (1 👍, closed)
   - **Demanda:** Sistema de níveis de log (info/warning/error) para suprimir saídas detalhadas de execução
   - **Análise:** Usuário reporta frustração com cron jobs que emitem traces completos mesmo quando o resultado é "não fazer nada". Sugere mecanismo de message layering similar a logs estruturados.
   - **Impacto:** Crescimento em automação e agents de monitoramento.

3. **[#192](https://github.com/HKUDS/nanobot/issues/192) — Introduce WeChat function** (stale)
   - **Demanda:** Suporte nativo a WeChat
   - **Análise:** Mercado chinês significativo; issue com 2+ anos sem movimento.

### PRs em destaque

| PR | Título | Relevância |
|---|---|---|
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) | feat(telegram): stream LLM responses via sendMessageDraft | Streaming real-time no Telegram Bot API 9.3+ |
| [#4587](https://github.com/HKUDS/nanobot/pull/4587) | Add WebUI session Markdown export | Exportação de conversas para .md com collapsing de traces |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | Feat(webui): config.json/webui parity | Elimina gap entre settings WebUI e config.json |

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (requerem atenção imediata)

| # | Título | Severidade | Detalhe |
|---|---|---|---|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for `<tool_call>` `complete_goal` | **Crítica** | Gateway faz parse do parâmetro `recap` como string ao invés de JSON, causando loop infinito. Regression introduzida em update recente. |
| [#4917](https://github.com/HKUDS/nanobot/pull/4917) | fix(shell): decode UTF-16 on Windows | **Crítica** (PR aberta) | Saída de processos PowerShell exibida com bytes NUL por falta de decode UTF-16. |
| [#4888](https://github.com/HKUDS/nanobot/pull/4888) | fix(filesystem): serialize workspace writes | **Crítica** (PR aberta) | Corrige race condition em operações concurrently de escrita (WriteFileTool, EditFileTool, ApplyPatchTool). |
| [#4816](https://github.com/HKUDS/nanobot/pull/4816) | fix(runner): narrow BaseException to Exception | **Crítica** (PR aberta) | `KeyboardInterrupt` e `SystemExit` capturados como erros de ferramenta ao invés de propagar. |

### 🟡 P2 — Importantes

| # | Título | Detalhe |
|---|---|---|
| [#4882](https://github.com/HKUDS/nanobot/issues/4882) | Dream content diff reporta arquivos vazios como modificados | Falso positivo em diff após `git.init()` |
| [#4893](https://github.com/HKUDS/nanobot/issues/4893) | /dream-log e /dream-restore mostram commits não-Dream | Falta filtro para commits específicos do Dream |
| [#4894](https://github.com/HKUDS/nanobot/issues/4894) | prune_dream_sessions() não prune arquivos base64-encoded | Glob `dream_*.jsonl` não bate com novos filenames (e.g., `ZHJlYW06MjAyNjA2MjktMTQwNTA3.jsonl`) |
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | guard `.strip()` contra dados multimodais em lista | `AttributeError` quando `msg.content` é lista ao invés de string |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | fix(memory): replace WeakValueDictionary com plain dict | Lock de consolidação pode ser coletado pelo GC causando race conditions |

### 🟢 Funcionalidades afetadas

- **Discord** ([#4897](https://github.com/HKUDS/nanobot/issues/4897)): Integração quebrada, bot online mas não recebe mensagens.
- **Feishu/Lark** ([#2352](https://github.com/HKUDS/nanobot/issues/2352)): Arquivos enviados ao bot não são processados; tentativa de download via browser.
- **Feishu tests** ([#4887](https://github.com/HKUDS/nanobot/issues/4887)): `dev` extra deps não inclui `lark-oapi`, quebrando testes localmente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em desenvolvimento

| PR | Feature | Prioridade | Visão |
|---|---|---|---|
| [#4911](https://github.com/HKUDS/nanobot/issues/4911) | Guarded tool gateway seam para canais | Enhancement | Permite canais (ex: voice channel) executarem ferramentas do agent legitimamente |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | Auto-discovery mechanism para agent hooks | P2 | Hook registration via pkgutil/entry_points — apenas drop .py em `nanobot/agent/hooks/` |
| [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Bind model presets to sessions | P1 | Persistência de seleção de modelo por sessão, captura de runtime LLM imutável |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | nano_timer core tool (time, timezone, calendar) | P1 | Ferramenta dependency-free para time handling com DST automático |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | Heartbeat trigger command | Feature | Runner de trigger com Phase 1 LLM decision e dry-run support |
| [#4915](https://github.com/HKUDS/nanobot/pull/4915) | Heartbeat: response evaluation configurable | P1 | Avaliação de resposta IA pode ser desabilitada; prompts mais estritos |

### Demanda latente da comunidade

- **Suporte a Mattermost** — Alternativa auto-hospedável a Discord/Slack ([#1011](https://github.com/HKUDS/nanobot/issues/1011))
- **Suporte a WeChat** — Mercado chinês ([#192](https://github.com/HKUDS/nanobot/issues/192))
- **Streaming Telegram** — Respostas token-a-token via `sendMessageDraft` ([#1599](https://github.com/HKUDS/nanobot/pull/1599))
- **Message layering** — Sistema de log/supleção de output detalhado ([#1500](https://github.com/HKUDS/nanobot/issues/1500))

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Integração Discord não funciona** ([#4897](https://github.com/HKUDS/nanobot/issues/4897))
   - Bot fica online mas não recebe mensagens
   - Usuário seguiu todos os passos de setup documentados
   - Impacto: bloqueia adoção em ambientes Discord

2. **Ferramenta de arquivos Feishu quebrada** ([#2352](https://github.com/HKUDS/nanobot/issues/2352))
   - Arquivos enviados ao bot não são processados
   - Bot tenta baixar via browser web ao invés de usar API
   - Configuração de permissões no developer console não resolve

3. **Output verboso em automação** ([#1500](https://github.com/HKUDS/nanobot/issues/1500))
   - Cron jobs de monitoramento emitem traces completos mesmo sem ação
   - Exemplo: verificação hourly de releases GitHub retorna fluxo de execução ao invés de silêncio
   - Necessidade clara de níveis de supressão

4. **Regressão no Gateway (complete_goal loop)** ([#4864](https://github.com/HKUDS/nanobot/issues/4864))
   - Bug crítico introduzido em update recente
   - Causa loop infinito por parse incorreto de JSON

### Cenários de uso em evidência

- **Voice channel real-time** — Motivação para feature de tool gateway seam ([#4911](https://github.com/HKUDS/nanobot/issues/4911))
- **WebUI como primary setup path** — PR [#4916](https://github.com/HKUDS/nanobot/pull/4916) reorganiza docs para guidado de primeira resposta
- **Exportação de sessões** — Necessidade de archival de conversas em Markdown ([#4587](https://github.com/HKUDS/nanobot/pull/4587))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stale que indicam demanda real

| # | Título | Idade | Notas |
|---|---|---|---|
| [#192](https://github.com/HKUDS/nanobot/issues/192) | Introduce WeChat function | ~18 meses | Estale mas mercado significativo; nunca respondido oficialmente |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Mattermost Bot | ~16 meses | Proposta bem fundamentada (privacidade, self-host); estale |
| [#1304](https://github.com/HKUDS/nanobot/issues/1304) | Can't use codex | 4+ meses | Closed sem resolução clara; usuário reportou em Feb/2026 |

### PRs aguardando review há mais tempo

| PR | Título | Desde | Bloqueio |
|---|---|---|---|
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) | feat(telegram): stream LLM responses | Mar/2026 (~4 meses) | Tem `conflict` flag; feature request popular |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | Feat(webui): config.json/webui parity | Jun/2026 | Tem `conflict` flag; feature significativa |
| [#4587](https://github.com/HKUDS/nanobot/pull/4587) | Add WebUI session Markdown export | Jun/2026 | Tem `conflict` flag |

### Recomendações de triagem

1. **WeChat e Mattermost** — Avaliar viabilidade e comunicar roadmap à comunidade para reduzir issue-stale
2. **Issue #1304** — Reabrir e investigar; "Can't use codex" pode indicar breaking change em API de providers
3. **Discord + Feishu integration** — Priorizar debugging; são integrações populares com bugs ativos

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 13 | ✅ Muito ativo |
| PRs ativas (24h) | 45 | ✅ Altíssima atividade |
| Issues abertas | 2 | ⚠️ Baixo (muitos fechamentos em massa) |
| PRs abertas | 27 | ✅ Pipeline saudável |
| PRs P1 abertas | ~8 | 🔴 Prioridade de review alta |
| Releases (7d) | 0 | ⚠️ Nenhuma nos últimos dias |
| Issues stale | 2+ | ⚠️ Requer triagem |

**Veredicto geral:** O NanoBot está em **fase de alta intensidade de desenvolvimento**, com múltiplas correções críticas (P1) em pipeline. A saúde do código requer atenção imediata às regressões (endless loop, UTF-16, filesystem race condition, exception handling) antes de uma próxima release. A comunidade demonstra interesse em diversificação de canais, localização e experiência WebUI.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent | 2026-07-14

---

## 1. Panorama do Dia

O projeto Hermes Agent manteve **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. A maioria esmagadora das issues foi fechada (47/50), indicando uma sprint focada em resolução de pendências técnicas. Não houve lançamentos de novas versões. A **priori** mais crítica do dia é a issue #63815 (aberta), relacionada a fallbacks de providers do Copilot não sendo acionados quando a cota mensal é esgotada. O codebase apresenta múltiplos PRs em P2 aguardando revisão, sugerindo um ciclo de desenvolvimento maduro com foco em estabilidade e robustez.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. Isso indica que a equipe está em fase de desenvolvimento interno, preparando mudanças para um próximo release. Recomenda-se acompanhar o repositório para anúncios futuros.

---

## 3. Progresso do Projeto

As seguintes PRs foram **fechadas/merged** nas últimas 24h, representando avanço concreto:

| PR | Descrição | Componente | Status |
|----|-----------|------------|--------|
| [#36692](https://github.com/NousResearch/hermes-agent/pull/36692) | Registra namespace `_hermes_user_memory` antes de carregar providers de usuário | memory/plugins | ✅ Merged |
| [#36218](https://github.com/NousResearch/hermes-agent/pull/36218) | Adiciona guidance no system prompt quando Tool Search está ativo | agent/mcp | ✅ Merged |

**PRs abertas de destaque (em progresso):**

- [#34464](https://github.com/NousResearch/hermes-agent/pull/34464) — **fix(gateway): refresh systemd units before update restart** — Melhora o processo de atualização do gateway com refresh de units systemd antes do restart
- [#36684](https://github.com/NousResearch/hermes-agent/pull/36684) — **fix: LSP idle reaper** — Adiciona tarefa background para encerrar clientes LSP ociosos (timeout 600s)
- [#36676](https://github.com/NousResearch/hermes-agent/pull/36676) — **fix: advertise Slack context tools when available** — Corrige divulgação de tools contextuais do Slack

---

## 4. Temas Quentes da Comunidade

**Issues/PRs com maior engajamento (comentários e atenção):**

### 🔥 Mais comentada — Issue #63815 (ABERTA)
> **copilot-acp: fallback providers not triggered when Copilot monthly quota is exhausted**
> - **Severidade:** P2
> - **Comentários:** 3
> - **Resumo:** Quando `copilot-acp` é o provider primário com `fallback_providers` configurado, o fallback não ativa ao atingir quota esgotada do Copilot — o erro é exposto diretamente ao usuário.
> - **Impacto:** Usuários perdem funcionalidade quando deveriam ter fallback automático.
> - **Link:** [Issue #63815](https://github.com/NousResearch/hermes-agent/issues/63815)

### Comunidade também discutiu:
- **Build Zeller Phase C Clawpatch review** — Múltiplas issues de follow-up (#36653, #36647, #36554, #36654, #36655, #36620, #36646) indicam processo de review rigoroso para builds e releases.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Abertos

| ID | Descrição | Severidade | Área |
|----|-----------|------------|------|
| [#63815](https://github.com/NousResearch/hermes-agent/issues/63815) | Fallback providers do Copilot não ativam quando quota esgotada | **P2** | billing/copilot |

### 🐛 Bugs Recentemente Fechados (trabalho concluído)

| ID | Descrição | Severidade | Área |
|----|-----------|------------|------|
| [#36693](https://github.com/NousResearch/hermes-agent/issues/36693) | Bedrock provider: warning misleading sobre OPENAI_API_KEY | P2 | agent/provider |
| [#36554](https://github.com/NousResearch/hermes-agent/issues/36554) | MCP tool calls falham com 'server not connected' em SSE | P2 | tools/mcp |
| [#36666](https://github.com/NousResearch/hermes-agent/issues/36666) | TUI status bar fragmenta após resize no Ghostty | P3 | tui |
| [#36646](https://github.com/NousResearch/hermes-agent/issues/36646) | psutil archive extraído sem validação de path (segurança) | **P3** | security |
| [#36636](https://github.com/NousResearch/hermes-agent/issues/36636) | Hindsight Plugin chama endpoint errado (incompatível v0.7.1) | P3 | memory |

### ⚠️ Padrões Identificados
- **MCP (Model Context Protocol):** 3+ bugs relacionados a MCP — event poller, tool calls, e módulos de servidor.
- **Segurança:** Bug de extração sem validação de path identificado e corrigido via Sweeper.
- **Build/Release:** Múltiplas issues de dependências e packaging resolvidas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Features em Desenvolvimento (PRs abertos)

| PR | Descrição | Prioridade |
|----|-----------|------------|
| [#22816](https://github.com/NousResearch/hermes-agent/pull/22816) | Add read-only Privy wallet skill | P3 |
| [#36675](https://github.com/NousResearch/hermes-agent/pull/36675) | Add GBrain read tools (gbrain_search, gbrain_get) | P3 |
| [#24271](https://github.com/NousResearch/hermes-agent/pull/24271) | Opt-in startup online notification | P3 |
| [#36674](https://github.com/NousResearch/hermes-agent/pull/36674) | Add desktop-only install mode | P3 |
| [#58455](https://github.com/NousResearch/hermes-agent/pull/58455) | Opt-in recency-weighted "brief" reference view para MoA | P3 |
| [#28900](https://github.com/NousResearch/hermes-agent/pull/28900) | Raise MAX_CHOICES de 4 para 10 no clarify | P3 |
| [#28885](https://github.com/NousResearch/hermes-agent/pull/28885) | Render clarify prompts como Slack Block Kit buttons | P2 |

### 📋 Demanda de Cobertura de Testes
**15 issues** pedindo melhoria de cobertura de testes em módulos específicos:
- `mcp_serve.py` — 0% de cobertura
- `setup.py` — 0% de cobertura
- `plugins/web/brave_free/provider.py` — 38.3%
- `hermes_cli/send_cmd.py` — 9.6%
- `tools/voice_mode.py` — 11.65%
- `tools/transcription_tools.py` — 11.84%

**Sinal de roadmap:** A ênfase em cobertura de testes indica foco em qualidade e manutenção de longo prazo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Experiência de provedores inconsistente**
   - Fallback não funciona como esperado quando Copilot esgota quota
   - Providers alternativos não são acionados automaticamente

2. **Problemas de estabilidade do MCP**
   - Ferramentas falham apesar de conexão ativa
   - Event poller perde mudanças de session-index
   - Clientes LSP não encerram, consumindo recursos

3. **Questões de usabilidade**
   - TUI não se adapta bem a redimensionamento de terminal
   - Model switching requer reinício completo da sessão
   - PATH de terminais locais não inclui diretórios do usuário

### Cenários de Uso Identificados
- **Desktop-only:** Usuários querem instalar Hermes Desktop sem setup de gateway local
- **Integração Slack:** Melhorias em context tools e cron jobs
- **Blockchain:** Demanda por skill read-only de wallet (Privy)
- **Memória local:** GBrain como alternativa de recall local

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou aguardando resposta

| ID | Descrição | Última Atualização | Prioridade |
|----|-----------|-------------------|------------|
| [#36636](https://github.com/NousResearch/hermes-agent/issues/36636) | Hindsight Plugin incompatível com Server v0.7.1 | 2026-07-13 | P3 |
| [#36619](https://github.com/NousResearch/hermes-agent/issues/36619) | setup.py deve tolerar diretórios opcionais ausentes | 2026-07-13 | P3 |
| [#36671](https://github.com/NousResearch/hermes-agent/issues/36671) | Feature: Seamless In-Session Model Switching | 2026-07-13 | P3 |

### PRs Abertas há >30 dias sem merge

| ID | Descrição | Criado | Prioridade |
|----|-----------|--------|------------|
| [#34464](https://github.com/NousResearch/hermes-agent/pull/34464) | refresh systemd units before update restart | 2026-05-29 | P2 |
| [#22816](https://github.com/NousResearch/hermes-agent/pull/22816) | Privy wallet skill | 2026-05-09 | P3 |
| [#24271](https://github.com/NousResearch/hermes-agent/pull/24271) | Opt-in startup online notification | 2026-05-12 | P3 |
| [#28885](https://github.com/NousResearch/hermes-agent/pull/28885) | Slack Block Kit buttons para clarify | 2026-05-19 | P2 |
| [#28900](https://github.com/NousResearch/hermes-agent/pull/28900) | Raise MAX_CHOICES to 10 | 2026-05-19 | P3 |

### Recomendação
**PR #34464** (systemd refresh) está aberta há 45 dias com P2 — requer revisão e merge prioritário para melhorar a experiência de atualização do gateway.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues atualizadas (24h) | 50 |
| Issues abertas/ativas | 3 |
| Issues fechadas | 47 |
| PRs atualizados (24h) | 50 |
| PRs abertos | 42 |
| PRs merged/fechados | 8 |
| Novas releases | 0 |
| Issues P2 em aberto | 1 (#63815) |
| PRs P2 em aberto | 8+ |
| Cobertura de testes (projeto) | 43.22% |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-14.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-14

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24h, com 4 issues e 5 PRs atualizados. Não houve lançamentos de novas versões. A atividade concentra-se em **manutenção de dependências Docker** e **resolução de bugs críticos** na camada de integração com modelos de IA. O repositório demonstra saúde operacional básica, embora many PRs estejam sinalizados como *stale* (sem atividade há 7+ dias), indicando possível gargalo na revisão de contribuições.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o último período analisado. Isso pode indicar:
- Fase de estabilização antes de um próximo release
- Equipe focada em revisar PRs pendentes antes de cortar nova versão

---

## 3. Progresso do Projeto

### PR Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#3253](https://github.com/sipeed/picoclaw/pull/3253) | Feat/gateway webhook | Adiciona funcionalidade de webhook ao gateway — novo recurso para integração com sistemas externos |

Este PR foi fechado/merged hoje, representando a **única contribuição aceita** no período. Detalhes do escopo completo não disponíveis nos metadados.

### PRs em Aberto (relevantes)

| PR | Título | Status | Prioridade |
|----|--------|--------|------------|
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | fix(agent): prefer verbatim model matches over provider-alias splits | Aberto hoje (2026-07-13) | Alta — corrige lógica de resolução de modelos |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): send SystemParts as system blocks with cache_control | Aberto 2026-07-06 | Alta — habilita prompt caching para Anthropic |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | chore(docker): bump goreleaser base images alpine 3.21 → 3.23 | Aberto 2026-07-06 | Baixa — atualização de segurança |

**PR #3254** merece atenção imediata: corrige um bug onde `lookupModelConfigByRef` misturava três tipos de match (verbatim, bare ID, split-based), permitindo que entries anteriores vencam incorretamente via provider-alias split.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|----|------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | [Feature] use vodozemac instead of libolm | 8 | 2 | **High** |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Feature: basicauth em searxng | 1 | 0 | Normal |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | [BUG] Function call missing thought_signature (Gemini) | 1 | 0 | Normal |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Proposal: rolling conversation cache breakpoints | 1 | 0 | Normal |

### Análise das Demandas

**Issue #3088** é a mais relevante: solicita substituição de **libolm** (biblioteca de criptografia para Matrix) por **vodozemac**. Justificativas:
- libolm está **unmaintained** (sem manutenção ativa)
- Apresenta **problemas de segurança**
- vodozemac é o substituto oficial recomendado

Esta issue tem **标签 `help wanted`**, indicando abertura para contribuições externas. É uma oportunidade para a comunidade contribuir com segurança.

---

## 5. Bugs e Estabilidade

### Bug Reportado

| Issue | Severidade | Descrição | Status |
|-------|-----------|-----------|--------|
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | **Alta** | `thought_signature` ausente ao chamar Gemini via OpenAI compat format (via Cloudflare AI Gateway) | Aberto (stale) |

**Impacto**: Afeta versões **0.2.9 a 0.3.1** quando usando tool calls com Gemini através de gateway OpenAI-compatible. Interoperabilidade comprometida entre provedores.

** workaround**: Não mencionado na issue. Recomendável priorizar resolução.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Feature | Alignamento Estratégico |
|-------|---------|------------------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | vodozemac como substituto de libolm | Modernização de dependências + segurança |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | basicauth headers em searxng | Autenticação em busca |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Rolling cache breakpoints para anthropic-messages | Otimização de custos com modelos Claude |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) (PR) | SystemParts com cache_control | Habilita prompt caching (economia de tokens) |

### Tendências Identificadas

1. **Otimização de custos com IA**: Issues #3228 e #3229 focam em cache e controle de contexto para reduzir custos operacionais com modelos de alta capacidade (Anthropic Claude).

2. **Interoperabilidade**: Issues #3230 e o PR #3254 indicam foco em compatibilidade entre provedores (OpenAI, Gemini, Anthropic).

3. **Modernização de segurança**: Issue #3088 sobre vodozemac demonstra atenção à sustentabilidade de dependências.

---

## 7. Resumo de Feedback dos Usuários

### Padrões Identificados

| Categoria | Feedback | Indicador |
|-----------|----------|-----------|
| **Segurança** | Rejeição a libolm por estar unmaintained e inseguro | Issue #3088 (8 comentários) |
| **Integração** | Dificuldade com autenticação em provedores externos (searxng) | Issue #3231 |
| **Interoperabilidade** | Problemas ao usar Gemini via OpenAI compat layer | Issue #3230 |
| **Performance** | Necessidade de cache inteligente para conversation history | Issues #3228, #3229 |

### Sentimento Geral

**Positivo em relação a features**, mas com **frustração** em:
- manutenibilidade de dependências antigas (libolm)
- gaps de compatibilidade entre provedores de IA

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (Stale + Alta Prioridade)

| Issue | Título | Idade | Comentários | Recomendação |
|-------|--------|-------|-------------|--------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | use vodozemac instead of libolm | **35 dias** (2026-06-09) | 8 | **Priorizar** — questão de segurança + help wanted |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Rolling conversation cache breakpoints | 8 dias (2026-07-06) | 1 | Analisar alinhamento com PR #3228 |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | basicauth em searxng | 8 dias | 1 | Avaliar esforço vs impacto |

### PRs Stale (>7 dias sem atividade)

| PR | Título | Impacto se Merged |
|----|--------|-------------------|
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): cache_control | **Alto** — habilita economia de tokens |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | bump alpine 3.21 → 3.23 | **Médio** — patches de segurança |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | remove duplicate .gitignore | **Baixo** — higiene de código |

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Releases (24h) | 🔴 0 | Sem atividade de release |
| PRs fechados/merged (24h) | 🟡 1 | Atividade moderada |
| Issues fechadas (24h) | 🔴 0 | Nenhuma resolução |
| PRs stale | 🟠 4/5 | 80% pendentes sem revisão |
| Bugs em aberto | 🟡 1 | Bug crítico (#3230) |

---

## Ação Recomendada para Maintainers

1. **Urgente**: Revisar e dar feedback em [#3088](https://github.com/sipeed/picoclaw/issues/3088) — issue de segurança com 35 dias sem resposta
2. **Alta**: Avaliar PR [#3228](https://github.com/sipeed/picoclaw/pull/3228) — implementação de cache_control para Anthropic
3. **Média**: Priorizar bug fix [#3230](https://github.com/sipeed/picoclaw/issues/3230) — afeta versões 0.2.9 a 0.3.1
4. **Baixa**: Merge de chores [#3192](https://github.com/sipeed/picoclaw/pull/3192) e [#3191](https://github.com/sipeed/picoclaw/pull/3191) — pequenas melhorias bloqueadas

---

*Relatório gerado automaticamente com base em dados do GitHub para github.com/sipeed/picoclaw em 2026-07-14.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-14

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 14 de julho de 2026, com 50 PRs e 31 issues atualizados nas últimas 24h, indicando um ciclo de desenvolvimento intenso. Nenhum release foi publicado no período, embora o release `ironclaw` 0.29.1 tenha sido disponibilizado recentemente (#5598). O foco atual concentra-se na macro-restructuração NEA-25 (stack 1-7/7) para unificação de extensões e superfícies de capacidade, além de correções de bugs na WebUI v2. A base de código demonstra preocupação com hardening de OAuth e ciclos de vida de extensões, evidenciada por múltiplos PRs de segurança em paralelo. A ausência de um `SECURITY.md` e do private vulnerability reporting gerou uma issue de alerta.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O release mais recente disponível é:

| Pacote | Versão Anterior | Nova Versão | Tipo de Mudança |
|---|---|---|---|
| `ironclaw` | 0.24.0 | **0.29.1** | — |
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking changes |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking changes |
| `ironclaw_safety` | 0.2.2 | **0.2.3** | ✓ API compatível |

**Breaking changes em `ironclaw_common` 0.5.0** — a equipe já disponibilizou um release note detalhado com o diff de falhas (diff `--failure`).

> 📦 Ver PR de release: [nearai/ironclaw#5598](https://github.com/nearai/ironclaw/pull/5598)

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas últimas 24h (destaque)

| PR | Tamanho | Escopo | Descrição | Status |
|---|---|---|---|---|
| [#5957](https://github.com/nearai/ironclaw/pull/5957) | XL | OAuth, extensões | Hardens OAuth e ciclos de vida de extensões por usuário; migration de ownership para produção | **✅ Merged** |
| [#6057](https://github.com/nearai/ironclaw/pull/6057) | XL | WebUI v2, TypeScript | Conclui migração TypeScript do WebUI v2; converte `.js`/`.mjs`/`.mts` restantes para `.ts`/`.tsx` | **✅ Merged** |
| [#6054](https://github.com/nearai/ironclaw/pull/6054) | XL | Slack | Resolve exact DM counterparts antes de mentions (fix QA-10F Slack flake) | **✅ Merged** |
| [#6026](https://github.com/nearai/ironclaw/pull/6026) | XL | Test, Integration | Switch harness de integração para a factory de capability-port de produção (seam PR-B) | **✅ Merged** |
| [#6055](https://github.com/nearai/ironclaw/pull/6055) | S | Test | Coverage de integração para StaleSurface refresh pin + channel-cleanup | **✅ Merged** |

### PRs Abertos de Alto Impacto

| PR | Tamanho | Risco | Escopo | Descrição |
|---|---|---|---|---|
| [#5936](https://github.com/nearai/ironclaw/pull/5936) | XL | **High** | Migration | Workflow offline v1-to-Reborn: plan, apply, resume, verify, status, Docker, source-build |
| [#5845](https://github.com/nearai/ironclaw/pull/5845) | XL | Low | NEA-25 Stack 4/7 | Unifica extensão Slack — `slack_bot` e `slack_personal` aposentados |
| [#5842](https://github.com/nearai/ironclaw/pull/5842) | XL | Low | NEA-25 Stack 3/7 | Extension-surface discovery substitui o registry de channels paralelo (−900 linhas) |
| [#5839](https://github.com/nearai/ironclaw/pull/5839) | XL | Low | NEA-25 Stack 2/7 | Cutover completo para manifest v2 com `[[host_api]]` contracts |
| [#5833](https://github.com/nearai/ironclaw/pull/5833) | L | Low | NEA-25 Stack 1/7 | Vocabulary de capability-surface e projeção de manifest |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) | XL | Low | MCP | Per-user MCP registration store (T1, baseado em InstallationOwner) |
| [#6056](https://github.com/nearai/ironclaw/pull/6056) | XL | Low | Extension-runtime | P7a — wire state enums + accounts list + deferred legs (runtime PR 8/9) |
| [#6013](https://github.com/nearai/ironclaw/pull/6013) | L | Low | Agent-loop | Completion nudge tools-capable para interactive coding |

**Análise:** A macro-restructuração NEA-25 domina o roadmap de PRs, com a stack 1-7/7 em progresso paralelo. A equipe mantém disciplina de segurança ao classificar o PR de migration (#5936) como **risco alto**.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Prioridade | Comentários | Tendência |
|---|---|---|---|---|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | GitHub extension reports como "activated" quando está apenas "INSTALLED" | P3 | **5** | 🔥 Mais comentada |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | Harness gap: `RecordingSecurityAuditSink` sempre None no integration harness | — | 2 | Alerta de parity |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` falha com `OutputTooLarge` em vez de salvar | — | 2 | UX problem |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine falha em todo scheduled run com "No thread attached" | **P2** | 2 | 🔴 Blocker |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | Approval notification abre ação sem exibir mensagem de approval | **P2** | 2 | 🔴 UX break |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | Banner de erro persiste após resposta bem-sucedida | **P2** | 2 | UI bug |

**Análise:** A issue #5948 (GitHub extension false-positive status) domina com 5 comentários, indicando confusão significativa na UX de extensões. A categoria P2 (rotinas agendadas e approvals) representa risco operacional imediato.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P2 — Impacto Operacional Alto (7 issues)

| # | Título | Atualização | Resumo |
|---|---|---|---|
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | "No thread attached" em toda scheduled run | 2026-07-13 | Rotina `ironclaw-issues-slack-summary` com 0% de sucesso — issue sistêmica |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | Approval notification abre sem card de approval | 2026-07-13 | Usuário não consegue aprovar/negar ações pendentes |
| [#5879](https://github.com/nearai/ironclaw/issues/5879) | Banner de erro persiste pós-sucesso | 2026-07-13 | Erro visual que confunde o usuário sobre status real |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | Routine creation expõe detalhes internos | 2026-07-13 | Resposta pós-criação vaza cron syntax e config de sistema |
| [#6048](https://github.com/nearai/ironclaw/issues/6048) | Agent run falha ao chamar tool indisponível | 2026-07-13 | Modelo tenta usar tool que não existe no workspace |
| [#6047](https://github.com/nearai/ironclaw/issues/6047) | Mensagens de task em ordem inversa | 2026-07-13 | UI exibe mensagem mais nova acima da mais antiga |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | Email-to-sheet workflow com 124 tool invocations | 2026-07-13 | Workflow simples causa explosão de chamadas — ineficiência grave |
| [#6045](https://github.com/nearai/ironclaw/issues/6045) | Agent diagnostica mas não age (GitHub 403) | 2026-07-13 | Identifica causa mas não auto corrige header User-Agent |
| [#6044](https://github.com/nearai/ironclaw/issues/6044) | Enter key às vezes não submete mensagem | 2026-07-13 | Intermitente no WebUI — UX regressão |
| [#6043](https://github.com/nearai/ironclaw/issues/6043) | GitHub connection flow falha com capability error | 2026-07-13 | 401 Unauthorized não inicia autenticação |
| [#6029](https://github.com/nearai/ironclaw/issues/6029) | GitHub extension não pode ser desativada/reconfigurada | 2026-07-13 | Lifecycle completo da extensão é broken |

#### 🟡 P3 — Bugs Menores / UI (8 issues)

| # | Título |
|---|---|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | GitHub extension false activation status |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) | "Load older messages" button não funcional |
| [#6052](https://github.com/nearai/ironclaw/issues/6052) | Extensions Registry: até 10s para carregar |
| [#6051](https://github.com/nearai/ironclaw/issues/6051) | Large documents mostram warning icon indevidamente |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) | Conversation history error banner falso-positivo |
| [#6049](https://github.com/nearai/ironclaw/issues/6049) | Gmail disconnect mostra validation error genérico |
| [#6039](https://github.com/nearai/ironclaw/issues/6039) | Light theme com contraste insuficiente em botões |
| [#6037](https://github.com/nearai/ironclaw/issues/6037) | Connection status oculto durante disconnects |
| [#6028](https://github.com/nearai/ironclaw/issues/6028) | MCP tab exibe "$" antes do heading |
| [#5999](https://github.com/nearai/ironclaw/issues/5999) | local-dev-yolo não inicia no Windows (path POSIX) |

#### ✅ Issues Closed (6 issues)

| # | Título |
|---|---|
| [#5891](https://github.com/nearai/ironclaw/issues/5891) | "Last completed" mostra timestamp de run ativo |
| [#5860](https://github.com/nearai/ironclaw/issues/5860) | Tool activity details tardam após completion |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) | Channel disconnect broken para ExternalChannel genéricos |
| [#5883](https://github.com/nearai/ironclaw/issues/5883) | Generic "model output could not be used" após sucesso |
| [#5888](https://github.com/nearai/ironclaw/issues/5888) | Não consegue deletar old threads |
| [#5938](https://github.com/nearai/ironclaw/issues/5938) | Unificar Reborn dropdown styling |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Issues que Sinalizam Demandas

| # | Título | Sinal de Roadmap |
|---|---|---|
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` deve salvar grandes respostas em vez de falhar | Melhoria em tool behavior para arquivos grandes |
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | Como reportar vulnerabilidades de segurança? | **⚠️ Necessidade urgente:** criar `SECURITY.md` e habilitar private vulnerability reporting |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | Harness gap para `RecordingSecurityAuditSink` | Parity de wiring entre produção e harness de integração |
| [#5999](https://github.com/nearai/ironclaw/issues/5999) | local-dev-yolo quebrado no Windows | Suporte a Windows para development |
| [#6027](https://github.com/nearai/ironclaw/pull/6027) | Adiciona guidelines de verification + output-format | Melhora de prompt system para reduce alucinações |

### Sinais de Roadmap via PRs

- **NEA-25 (stack 1-7/7):** Unificação de extensão surfaces (tools, channels, auth) — impacto de produto alto
- **Per-user MCP registration (#5970):** T1 completo, T2-T3 em pipeline — infraestrutura MCP maturing
- **Offline migration workflow (#5936):** Prioridade alta dado risco classificado como **high**

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Confusão de Status de Extensões:** Usuários não conseguem entender se uma extensão está instalada, ativada ou configurada — a UI exibe estados contraditórios entre a página de extensões e o assistente (#5948, #6029).

2. **Rotinas Agendadas Quebradas:** A incapacidade de executar rotinas via cron/scheduler mina o caso de uso de automação — "No thread attached" em 100% das execuções (#5836).

3. **Aprovação de Ações Inutilizável:** Usuários recebem notificação de approval required mas não conseguem visualizar ou agir sobre ela (#5885).

4. **Persistência de Estados de Erro:** Erros passados permanecem na UI mesmo após recovery, gerando desconfiança no sistema (#5879, #6050).

5. **Ineficiência Extrema de Agent:** Workflows simples disparam centenas de tool calls (#6046), indicando necessidade de otimização de reasoning ou tooling.

6. **Agente Diagnostica mas Não Age:** O modelo identifica corretamente a causa de falhas (ex: header User-Agent ausente) mas não executa a correção trivial (#6045).

7. **Segurança:** Um contributor identificou vulnerabilidade potencial mas não encontra canal privado para reportar — risco reputacional e de compliance (#6000).

### Cenários de Uso Problema

- **Extensão GitHub:** Ciclo de vida completo (install → activate → configure → deactivate → uninstall) está broken.
- **Large Documents:** Arquivos acessíveis mas marcados com warning icon — false signal.
- **Windows Dev Setup:** `local-dev-yolo` não funciona — barreira de entrada para contributors Windows.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Triagem

| # | Prioridade | Idade | Título | Motivo da Atenção |
|---|---|---|---|---|
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | ⚠️ Security | 3 dias | Como reportar security issues? | Risco: vulnerabilidade não report

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de referência:** 2026-07-14  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw manteve **atividade intensa** nas últimas 24h, com 50 issues e 50 PRs atualizados — indicando alta frequência de interação da comunidade e da equipe de desenvolvimento. A release **v2.0.0.post1** foi publicada com correções pontuais, sugerindo que a equipe está em ciclo de estabilização da versão 2.0. Observa-se um **padrão claro de regressões** reportadas pelos usuários após a migração para a 2.0, com destaque para falhas em contexto compressão, permissões MCP e problemas de estabilidade em múltiplos canais (WeChat, Feishu, DingTalk). Apesar dos 29 PRs fechados/merged, o volume de issues abertas (26) e a diversidade temática indicam que o projeto ainda está em fase de ajuste fino.

---

## 2. Lançamentos

### Released: v2.0.0.post1
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post1

| Mudança | Autor | PR |
|---------|-------|-----|
| chore: bump version to 2.0.0.post1 | @rayrayraykk | [#6007](https://github.com/agentscope-ai/QwenPaw/pull/6007) |
| fix(models): prevent browser autofill on provider search input | @zhaozhuang521 | [#6011](https://github.com/agentscope-ai/QwenPaw/pull/6011) |
| fix: fix legacy session | — | — |

**Análise:** O release é uma **atualização de patch** focada em estabilidade. A correção de autofill no input de busca de provedores sugere refinamento da interface. A menção a "legacy session fix" indica preocupação com migração de sessões de versões anteriores. **Não há breaking changes documentadas**, mas recomenda-se atenção à compatibilidade com sessões herdadas.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes (últimas 24h)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| #6058 | fix(tool_calls): flatten offload hint + temporarily disable broken offload mechanism | **Alto** — desativa mecanismo de offload que causava erros 400 | [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058) |
| #6050 | fix(hint): flatten background tool hint message and yield result events on SSE | **Alto** — corrige orphan ToolResultBlock em streaming SSE | [#6050](https://github.com/agentscope-ai/QwenPaw/pull/6050) |
| #6052 | fix(hint): flatten background tool hint to plain assistant message | **Alto** — mesma root cause do #6050, abordagem alternativa | [#6052](https://github.com/agentscope-ai/QwenPaw/pull/6052) |
| #5989 | fix: multi-layer orphan tool_result message defense | **Alto** — defesa em múltiplas camadas contra tool_results órfãos | [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) |
| #5935 | refactor(tool_calls): unify result pruning with block-scoped metadata | **Médio** — unificação da lógica de裁剪 de resultados | [#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) |
| #6045 | fix(console): clear message queue when a session is deleted | **Médio** — corrige vazamento de fila ao deletar sessões | [#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045) |
| #6044 | fix(plugins): bridge register_tool to runtime ToolRegistry pipeline | **Médio** — ferramentas registradas via API visíveis em runtime | [#6044](https://github.com/agentscope-ai/QwenPaw/pull/6044) |
| #6054 | feat(governance): relax no-finding fallback + global sandbox switch | **Médio** — redução de prompts de aprovação desnecessários | [#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054) |
| #6015 | fix(providers): use max_completion_tokens for reasoning models | **Médio** — compatibilidade com GPT-5 e modelos O-series | [#6015](https://github.com/agentscope-ai/QwenPaw/pull/6015) |

**Síntese:** A equipe demonstrou **resposta rápida** a uma família de bugs relacionados a tool_calls/tool_results, com múltiplos PRs addressing a mesma root cause (orphan ToolResultBlock). A decisão de "temporarily disable broken offload mechanism" (#6058) indica priorização de estabilidade sobre funcionalidade avançada.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Status | Comentários | Link |
|---|--------|--------|-------------|------|
| #5996 | [Bug]: 2.0.0对话时会产生MODEL_EXECUTION_ERROR | CLOSED | 10 | [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) |
| #5961 | [Bug]: v2.0.0版本循环执行的问题 | OPEN | 7 | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) |
| #5947 | V2.0.0版本 MCP中禁用了某些子工具的访问，但是agent还是可以调用 | CLOSED | 6 | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) |
| #6006 | [Bug]: 消息队列功能没有了！急急急，望修复 | CLOSED | 6 | [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006) |
| #5980 | v2.0.0 Missing features: SSH Offline, Profiles returning 404 | OPEN | 5 | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) |
| #6013 | V2.0.0的版本，越来越不稳定了 | CLOSED | 5 | [#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013) |

**Análise das Demandas:**

1. **Erro 400 em tool_calls (#5996, #5986, #5960, #5962)** — Tema mais frequente. A root cause é a **serialização de ToolResultBlock sem tool_calls correspondente**, causada por:
   - Offload de ferramentas em background
   - Context compression que separa tool_call de tool_result
   - Scroll eviction que desloca tool_results

2. **Loop de execução infinito (#5961)** — Agente entra em ciclos de write/delete repetitivos, possivelmente relacionado a modelos específicos (qwen3.7-plus) ou lógica de tool selection.

3. **Permissões MCP não funcionantes (#5947)** — Configuração de allow/deny para sub-ferramentas ignorada pelo agente em v2.0.0.

4. **Features desaparecidas (#5980)** — SSH Offline e Profiles retornam 404 após upgrade de v1.1.12 para v2.0.0. Regressão de funcionalidade.

5. **Instabilidade geral (#6013, #6034)** — Usuários reportando múltiplas regressões: erros internos no WeChat/Feishu, comportamento "aditivo" do modelo (adiciona conteúdo não solicitado), e instabilidade com modelos unknown.

---

## 5. Bugs e Estabilidade

### Classificação por Severidade

| Severidade | Descrição | Issues Relacionadas | Link |
|------------|-----------|---------------------|------|
| 🔴 **Crítica** | Erro 400 em todas as sessões com tool calls | #5996, #5986, #5960, #5962, #6034, #6049 | [Ver todas](https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+is%3Aopen+400) |
| 🔴 **Crítica** | Mensagens órfãs de tool_result vazando entre sessões | #5989 (fix merged) | [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) |
| 🟠 **Alta** | Loop de execução infinito com modelos específicos | #5961 | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) |
| 🟠 **Alta** | Features v1.x indisponíveis em v2.0 (SSH, Profiles) | #5980 | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) |
| 🟠 **Alta** | Mensagem fila não funciona | #6006 | [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006) |
| 🟠 **Alta** | Permissões MCP ignoradas | #5947 | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) |
| 🟡 **Média** | Docker browser_use falha (dbus) | #5872 | [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) |
| 🟡 **Média** | Shell timeout hard-coded em 60s | #5963 | [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) |
| 🟡 **Média** | Plugin HTTP routes perdidos após hot-reload | #5977 | [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) |
| 🟡 **Média** | Electron CLI tool falha como root no Linux | #5979 | [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) |
| 🟡 **Média** | Environment variables não passados para agentes | #6055 | [#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055) |
| 🟢 **Baixa** | Skills list só mostra 20 itens | #5788 | [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| 🟢 **Baixa** | qwenpaw doctor reporta FAIL para endpoint inexistente | #5983 | [#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983) |

**Métricas de Estabilidade:**
- **Issues críticas abertas:** 2 (#5961, #5980)
- **Issues altas abertas:** 4 (#5872, #5963, #5977, #5979, #6034, #6049)
- **Taxa de fechamento de bugs (24h):** ~60% (24 de 40 bugs fechados)

**Observação:** A família de bugs relacionados a "Messages with role 'tool' must be a response to a preceding message with 'tool_calls'" parece estar sendo tratada ativamente via PRs #6058, #6050, #6052, #5989.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Tipo | Potencial Impacto | Link |
|---|--------|------|-------------------|------|
| #6067 | feat: more sensitive files & allow read global | Feature | Alto — mudança de paradigma de segurança | [#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) |
| #5069 | feat(agents): add visual model fallback for text-only primary models | Feature | Médio — suporte a modelos multimodais | [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) |
| #6048 | feat: 免认证主机白名单支持配置CIDR 段 | Enhancement | Médio — flexibilidade de rede | [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) |
| #5958 | Question: AgentScope permission control features in QwenPaw? | Question/RFC | Alto — arquitetura de permissões | [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) |

### Sinais de Roadmap

1. **Arquitetura de Permissões (#5958, #6054)** — A comunidade demonstra interesse em usar o sistema de permissões do AgentScope dentro do QwenPaw. O PR #6054 adiciona um "global sandbox switch", indicando movimento nessa direção.

2. **Modelos Visuais (#5069)** — Feature em desenvolvimento há ~34 dias (desde 2025-06-10), sugerindo roadmap de longo prazo para suporte multimodal.

3. **Governança Flexível (#6063, #6054)** — Dois PRs simultâneos abordando governança, indicando prioridade em dar aos operadores controle granular sobre segurança.

4. **Melhorias de Segurança (#6067)** — "allow read global" sugere reavaliação da política de arquivos sensíveis.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **"v2.0 instável demais"** | Alta | Usuários comparando desfavoravelmente com v1.x e soluções concorrentes (WorkBuddy) |
| **"Ferramentas que funcionavam pararam"** | Alta | SSH Offline, Profiles, Mensagem Fila — regressões diretas de v1→v2 |
| **"Loop infinito de execução"** | Média | Agentes travam em tarefas simples, comportamento não-determinístico |
| **"Erros internos no canal"** | Média | WeChat/Feishu retornam "Internal error" após upgrade |
| **"Permissões não funcionam"** | Média | MCP allow/deny, approval_level OFF ignorado |

### Cenários de Uso Reportados

1. **Uso corporativo multi-canal** — Integração com WeChat, Feishu, DingTalk é crítica para workflows empresariais na China.
2. **Ambientes Docker** — Usuários técnicos tentando rodar em containers enfrentam barreiras (dbus, sandbox).
3. **Migração v1→v2** — Usuários de longa data frustrados com perda de features e instabilidade.
4. **Desenvolvimento de plugins** — Ecossistema de plugins crescendo (#6061 Ponytail Quality Plugin), mas com desafios de hot-reload.

### Indicadores de Satisfação

| Indicador | Leitura |
|-----------|---------|
| 👍 em issues (média) | 0-1 por issue — **baixo engajamento positivo**, foco em problemas |
| Issues fechadas com workaround | 40%+ — **comunidade ativa em troubleshooting** |
| Issues duplicadas/relacionadas | Múltiplas issues com mesma root cause (#5996, #5986, #5960) — **comunicação de bugs fragmentada** |
| Comparação com concorrentes | #6013 menciona WorkBuddy como referência de estabilidade — **pressão competitiva** |

---

## 8. Backlog que Merece

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-14

---

## 1. Panorama do dia

O ecossistema ZeroClaw mantém um nível de atividade muito elevado no dia de hoje, com **45 issues e 50 PRs** atualizados nas últimas 24 horas — volumes típicos de um projeto em fase ativa de desenvolvimento. A taxa de fechamento é notável: **12 issues e 1 PR** foram resolvidos, indicando que a equipe está executando bem o ciclo de revisão e merge. Nenhum release foi publicado hoje, e a versão mais recente continua em **0.8.2**. A carga de trabalho está concentrada em duas frentes principais: a preparação do **schema V4 quebrando (PR #8754)** e a correção de bugs de estabilidade no runtime e na TUI. O estado geral é de **projeto saudável, mas com alta pressão de manutenção** — vários bugs de severidade S1 e P1 estão abertos simultaneamente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.** A versão mais recente permanece **v0.8.2** (referenciada no RFC #6808 como versão atual do tracker de governança). Não há notas de release ou CHANGELOG disponíveis no período analisado.

---

## 3. Progresso do Projeto

As atividades de merge e fechamento concentraram-se em **testes de cobertura** e **documentação**, com qualidade consistente de implementações paralelas. Principais avanços:

| # | Tipo | Descrição | Impacto |
|---|------|-----------|---------|
| [#9003](https://github.com/zeroclaw-labs/zeroclaw/pull/9003) | docs | Corrigido link quebrado do dashboard workflow na documentação de mantenedores | Infraestrutura de docs |
| [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) | feat(memory) | Cobertura determinística para edge cases de timestamp e ordenação no storage-reader | Confiabilidade de memória |
| [#7693](https://github.com/zeroclaw-labs/zeroclaw/issues/7693) | feat(zerocode) | Cobertura para fluxo de confirmação TLS inseguro | Segurança do CLI |
| [#7690](https://github.com/zeroclaw-labs/zeroclaw/issues/7690) | feat(provider) | Cobertura de propagação de opção `responses-wire` no provider | Robustez do provider |
| [#7688](https://github.com/zeroclaw-labs/zeroclaw/issues/7688) | feat(runtime) | Cobertura de panic recovery e propagação de cancelamento em hooks | Estabilidade do runtime |
| [#7691](https://github.com/zeroclaw-labs/zeroclaw/issues/7691) | feat(config) | Testes end-to-end para `comment_writer::apply_comments` | Qualidade de config |
| [#7689](https://github.com/zeroclaw-labs/zeroclaw/issues/7689) | feat(tools) | Testes para paths de execução de hardware board info/read tools | Cobertura de ferramentas |
| [#12](https://github.com/zeroclaw-labs/zeroclaw/issues/12) | fix(gateway) | Corrigido DoS risk: alocação de 64KB por conexão sem limite de concorrência | **Segurança crítica** |

**Destaque especial:** O Issue #12 (Gateway alocando 64KB por conexão sem limite — risco DoS) foi fechado. Este era um problema de severidade média com risco real de negação de serviço, indicando que a equipe priorizou e resolveu uma vulnerabilidade de estabilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | Reações | Tendência |
|---|--------|:-----------:|:-------:|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation e Label Cleanup | 14 | 0 | **Governança ativa** |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core through external integrations | 9 | 0 | **Arquitetura central** |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Keybindings confusos/inacessíveis no macOS | 5 | 0 | UX mult plataforma |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel não pode ser configurado | 4 | 0 | **P1 — bloqueante** |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | RFC: Gateway-local Kanban board | 4 | 0 | Nova feature de UX |
| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | Multi-session no gateway web chat UI | 4 | 0 | UX do gateway |
| [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) | Documentação inacessível para config | 2 | 1 👍 | **S1 — bloqueante** |

**Análise:** A comunidade está mobilizada em torno de três eixos:
1. **Governança interna** (#6808 com 14 comentários): há debate ativo sobre como organizar work lanes, automação de board e label cleanup — sinal de maturidade organizacional do projeto.
2. **Arquitetura lean** (#6165): o RFC para reduzir o core movendo integrações para skills/MCP/plugin hosts tem 9 comentários, indicando consenso parcial mas necessidade de refinamento (status: `in-progress`).
3. **UX cross-platform** (#7800): keybindings problemáticos no macOS reflejan a dor real de usuários do ZeroCode.

---

## 5. Bugs e Estabilidade

### Bugs de Severidade S1 (workflow bloqueado) — PRIORIDADE MÁXIMA

| # | Componente | Descrição | Risco | Status |
|---|-----------|-----------|:-----:|--------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | runtime/daemon | Telegram channel não pode ser configurado — `zerocode channels doctor` reporta canais não configurados mesmo após setup via quickstart | High | `accepted` |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | runtime/daemon | Problema de conexão Docker — porta inacessível após `docker compose up -d`, retorna "Connection refused" | High | `needs-repro` |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | provider/openai | Turnos de ferramenta OpenAI falham quando Chat Completions rejeita `reasoning effort` | Medium | `accepted` |

### Bugs de Severidade S2 (comportamento degradado)

| # | Componente | Descrição | Plataforma |
|---|-----------|-----------|------------|
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | daemon | `Ctrl+C` no Windows causa force quit, exit code `1073741510` | **Windows** |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | zerocode/tui | Keybindings confusos ou inacessíveis, especialmente no macOS | **macOS** |
| [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) | zerocode/tui | Seleção de texto por mouse bloqueia seleção palavra-a-palavra no transcript | Cross-platform |
| [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) | zerocode/tui | Substituições de texto do macOS não funcionam no input box | **macOS** |
| [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) | zerocode/tui | Sessão Code completa sem output visível do assistente | Cross-platform |
| [#8646](https://github.com/zeroclaw-labs/zeroclaw/issues/8646) | zerocode/tui | Logs ocultam atributos de eventos atrás de linhas de preview | Cross-platform |
| [#9036](https://github.com/zeroclaw-labs/zeroclaw/issues/9036) | zerocode/tui | Anexos pendentes não podem ser inspecionados/removidos via UI | Cross-platform |
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | zerocode/tui | Falha ao iniciar não termina o processo (deixa zombie) | Cross-platform |

**Análise:** Há uma concentração preocupante de **6 bugs relacionados à TUI ZeroCode** (issues #7800, #8944, #8945, #8644, #8646, #9036) — a interface textual é a principal superfície de usuário e está com problemas persistentes. A plataforma **macOS** aparece em ao menos 3 bugs separados, sugerindo que o suporte a macOS precisa de atenção específica.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs aceitos e em progresso

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | Work Lanes, Board Automation e Label Cleanup | Governança — organização de trabalho | `in-progress` (v0.8.0-beta.1 → 0.8.2) |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Lean ZeroClaw core via integrações externas | Arquitetura — reduzir core movendo integrações para skills/MCP | `in-progress` |

### Novas features em discussão/review

| # | Título | Escopo | Tamanho | Sinais de priorização |
|---|--------|--------|---------|----------------------|
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Kanban board local no gateway web | UX/Gateway | — | RFC + needs-maintainer-review |
| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | Multi-session no gateway web chat | UX/Gateway | — | Feature request aceite |
| [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) | Canal Mastodon (ActivityPub) | Channels | — | 1 👍 — interesse da comunidade |
| [#9039](https://github.com/zeroclaw-labs/zeroclaw/issues/9039) | Gerar docs de instalação do spec canônico | Docs | — | Automação de docs |

### PRs grandes em desenvolvimento

| # | Título | Impacto | Risco | Status |
|---|--------|---------|:-----:|--------|
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | Schema V4 cut — skills, tunable inerte, summary_model cruft | **Breaking change** | High | `needs-author-action` |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | poll-vote / interactive-reply events + `Channel::send_choice` | Channels (Signal, WhatsApp) | High | Em revisão |
| [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) | SOP: release exec slot on HITL approval + per-SOP admission policy | Runtime/Agent | High | Em revisão |
| [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) | Slack: hidratar contexto de thread na primeira interação do bot | Channel/Slack | Medium | Em revisão |
| [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) | Slack: mostrar progresso visível do ciclo de vida do agente | Channel/Slack | High | Em revisão |

**Sinais de roadmap:** O schema V4 (#8754) é o próximo grande marco de breaking change. A vertical de **Slack** está particularmente ativa com 2 PRs em paralelo. O ADR de memory backend foi aceito (#9042), sinalizando que a arquitetura de memória está se cristalizando.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Configuração impossível** (#7758 — closed): Um usuário reportou S1 com a frase direta *"It doesn't matter how good the code is if the documentation is crap."* — demonstrando frustração extrema com a documentação de configuração. Closed hoje, mas expõe dívida de DX.

2. **Telegram inoperante** (#8505): Usuários configuram o Telegram via quickstart e o bot não responde, mas o agent funciona no CLI. Problema de configuração de canais está bloqueando fluxos de trabalho reais.

3. **Experiência macOS degradada** (#7800, #8945, #9028): keybindings confusos, text replacements não funcionam, Ctrl+C causa crash — usuários macOS enfrentam múltiplas fricções simultâneas.

4. **Docker deployment quebrado** (#9035): Operadores não conseguem expor portas corretamente após `docker compose up -d` — barreira de entrada para novos usuários.

5. **Keybindings e help inacessíveis** (#7800): Ações publicitadas na UI não são descobríveis ou alcançáveis — impacto direto na capacidade de uso do ZeroCode.

### Cenários de uso em evidência

- **Agentes de trabalho com Kanban** (#8832): Comunidade quer visualizar o trabalho do agente em formato Kanban, indicando adoção em contextos de produtividade.
- **Multi-session por agente** (#7543): Usuários querem conversas independentes por agente, não sessão única — padrão de uso mais sofisticado.
- **Fediverse

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*