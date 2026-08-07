# Resumo diário do ecossistema de agentes de IA 2026-08-07

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-07 00:51 UTC

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

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-08-07
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** nesta semana. Por um lado, quatro projetos — NanoBot, Hermes Agent, IronClaw e ZeroClaw — mantêm ciclos intensos de desenvolvimento com 50+ PRs ativos, sinalizando maturidade em produção e demanda real de mercado. Por outro, PicoClaw opera em regime de baixa atividade, enquanto NullClaw permanece completamente estagnado, sugerindo possível abandono ou reestruturação invisível. A convergência técnica mais notável é a **priorização de segurança e estabilidade**: três projetos simultaneamente correm para corrigir vazamento de chaves de API (#5270/#5269 no NanoBot, #77164/#77162/#77484 no Hermes Agent, #1 no ZeroClaw). O paradigma de arquitetura tende para **agentes modulares com suporte multi-provider, canais de entrega diversificados e capacidades de automação via cronjobs/subagentes**, evidenciando maturação do用例 além do chatbot simples.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Saúde | Tendência |
|---------|-------------|-----------|----------------|-------|-----------|
| **NanoBot** | 9 atualizadas | 16 PRs (5 merged) | 0 | 🟢 Estável | Crescente — foco em segurança |
| **Hermes Agent** | 50 atualizadas | 50 PRs (1 merged) | 0 | 🟡 Alerta | Refatoração ativa, 3 security issues |
| **IronClaw** | 50 atualizadas | 50 PRs (16 merged) | **v1.1.0** ✅ | 🟡 Alerta | Release novo, rotinas P1 abertas |
| **CoPaw** | 33 atualizadas | 50 PRs (4 merged) | 0 | 🟡 Alerta | Sessões longas instáveis |
| **ZeroClaw** | 23 atualizadas | 50 PRs (5 merged) | 0 | 🟡 Alerta | RFCs intensos, SOP imaturo |
| **PicoClaw** | 0 | 2 (1 merged) | 0 | 🟡 Baixo | Consolidando QQ features |
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativo | Sem atividade detectável |

**Observação:** NanoBot e IronClaw são os projetos com melhor relação entre atividade e qualidade — alto volume de merges com bugs críticos em curso de resolução. Hermes Agent e CoPaw apresentam volume impressionante (50 PRs) mas sem releases, indicando dívida de estabilização.

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Estabilidade

NanoBot (HKUDS/nanobot) se destaca como o projeto com **melhor equilíbrio entre atividade e saúde operacional** neste ciclo:

**Vantagens competitivas:**

| Dimensão | NanoBot | Hermes Agent | IronClaw |
|----------|---------|--------------|----------|
| **Segurança** | p0/p1 em revisão ativa (#5271, #5270, #5269) | 3 issues simultâneas em discussão | Sem issues de segurança ativas |
| **Performance WebUI** | Cold-start otimizado (#5262) | N/A (CLI-first) | N/A (CLI-first) |
| **Multi-canal** | Matrix, WebUI, CLI | Feishu, Slack, Desktop | Slack, GitHub, Telegram |
| **Estabilidade de releases** | Last stable, sem regressions reportadas | Regressão v0.20.0 crítica | v1.1.0 recém-lançada |

**Diferenças técnicas marcantes:**

- **Hermes Agent** investe em decomposição de god files (9.180 linhas em auth.py), abordagem arquitetural queNanoBot não demonstra necessidade — possivelmente por ter iniciado com codebase mais modular.
- **IronClaw** foca em runtimes e leases de runner para rotinas de longa duração, enquanto NanoBot concentra-se em UX/WebUI e compatibilidade com homeservers Matrix.
- **ZeroClaw** persegue governança formal via RFCs (10+ ativas) e orchestration DAG, enquanto NanoBot permanece pragmático em features incrementais.

**Tamanho da comunidade:** Com 16 PRs e 9 issues em 24h, NanoBot demonstra comunidade ativa mas menor que Hermes Agent (50/50). A diferença sugere que Hermes Agent atrai mais contribuidores periféricos, enquantoNanoBot tem core team mais produtivo por PR.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Credenciais — Urgência Transversal

Todos os três projetos com alta atividade enfrentam problemas de segurança de credenciais simultaneamente:

```
NanoBot:   #5270 (vazamento em CLI subprocess) + #5269 (os.environ global)
Hermes:    #77164 (child-process env scrub) + #77162 (exact-value redaction)
ZeroClaw:  #1 (XOR cipher fake — CORRIGIDO)
```

**Conclusão:** A arquitetura comum de spawning subprocessos para tools/agentes amplifica o risco de vazamento de secrets. Este é um **padrão de falha estrutural** no ecossistema, não coincidência.

### 4.2 Resiliência de Canais de Mensagens

| Projeto | Problema | Canal Afetado |
|---------|----------|---------------|
| NanoBot | JOIN body não-vazio | Matrix |
| Hermes Agent | Botões de aprovação falham | Feishu (5+ issues, 120+ dias) |
| CoPaw | Retry após reinicialização | Matrix |
| IronClaw | Notificações para usuário errado | Slack |
| CoPaw | E2E encryption não funciona | Matrix |

**Conclusão:** Matrix é o canal mais problemático em termos de confiabilidade, afetando três projetos. Feishu no Hermes Agent representa issue recorrente sem resolução há meses — risco de confiança.

### 4.3 Workflows de Background e Cronjobs

| Projeto | Issue | Impacto |
|---------|-------|---------|
| NanoBot | #4290 — cronjob com subagente morre cedo | 57 dias aberto |
| Hermes Agent | #29849 — SSH backend ignorado em cronjob |SSH/Docker |
| IronClaw | #5456 — lease de runner expira (90s) | Rotinas de longa duração |
| ZeroClaw | #9780 — SOPs cron-triggered sem network |1 dia aberto |

**Conclusão:** A execução confiável de tarefas em background é a lacuna técnica mais transversal. A arquitetura de subagentes e task isolation precisa amadurecer em todo o ecossistema.

### 4.4 Estabilidade em Sessões Longas

```
NanoBot:    #5198 (troca de modelo por sessão), #5259 (sessões temporárias)
CoPaw:      #6601 (resposta vazia), #6726 (400 com много tool calls), #6768 (loop infinito)
IronClaw:   #5509 (latência escala com histórico)
```

**Conclusão:** Todos os projetos enfrentam degradação de performance/comportamento em conversas extensas. O problema é sistêmico — relacionado a gerenciamento de contexto, compaction e tool call accumulation.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público-Alvo | Diferenciação |
|---------|-------------|--------------|---------------|
| **NanoBot** | Modular com WebUI-first | Usuários finais + devs | UX/WebUI madura, Matrix nativo, performance cold-start |
| **Hermes Agent** | Monolito em refatoração | Enterprise multi-plataforma | Desktop app, Feishu, SSH, decomposição de god files |
| **IronClaw** | Sandbox + runners | Automação corporativa | Leases de runner, rotinas, WASM tools, Nostr |
| **CoPaw** | AgentScope-first | Desenvolvedores agentscope | Browser SDK, Playwright, DeepSeek reasoning, DingTalk/WeChat |
| **ZeroClaw** | DAG orchestration | DevOps/automação | RFC governance, SOP engine, CLI-first, DAG planning |
| **PicoClaw** | QQ Channel specialist | Usuários QQ | Suporte a anexos QQ, fallback configurável |
| **NullClaw** | — | — | Sem dados |

### 5.2 Estratégia de Features

**Hermes Agent vs. NanoBot — Contraste de Filosofia:**

- **Hermes Agent** investe em refatoração massiva (20 god files) e feature parity com Grok/xAI — estratégia de **consolidação técnica e cobertura de providers**.
- **NanoBot** investe em UX incremental (drag sessions, terminal compartilhado, cold-start payload) — estratégia de **experiência de usuário e acessibilidade**.

**IronClaw vs. ZeroClaw — Contraste de Paradigma:**

- **IronClaw** foca em **execução confiável** (leases, runners, delivery channels) — arquitetura imperativa.
- **ZeroClaw** foca em **governança e orchestration** (RFCs, SOP engine, DAG planning) — arquitetura declarativa.

### 5.3 Diferenciação por Canal

| Canal | Projetos com Suporte | Maturidade |
|-------|---------------------|------------|
| Matrix | NanoBot, CoPaw, Hermes Agent | 🟡 Imatura — bugs recorrentes |
| Slack | IronClaw, Hermes Agent | 🟡 Inconsistente |
| Feishu | Hermes Agent | 🔴 Quebrada — 5+ issues abertas |
| QQ | PicoClaw | 🟢 Estável |
| DingTalk/WeChat | CoPaw | 🟡 Funcional |
| Desktop (Windows) | Hermes Agent | 🔴 Regressão v0.20.0 |
| Browser SDK | CoPaw | 🟡 Beta |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Fechados (24h) | Razão Aberto/Fechado | Velocidade |
|---------|-------------------|----------------------|------------|
| **IronClaw** | 16 | ~3:1 | 🔴 Muito Alta |
| **NanoBot** | 5 | ~3:1 | 🟢 Alta |
| **ZeroClaw** | 5 | ~9:1 | 🟡 Moderada |
| **CoPaw** | 4 | ~12:1 | 🟡 Moderada |
| **Hermes Agent** | 1 | ~50:1 | 🟠 Baixa |
| **PicoClaw** | 1 | ~1:1 | 🟢 Estável |
| **NullClaw** | 0 | — | ⚫ Estagnada |

**Análise:** IronClaw demonstra velocidade de merge excepcional (16 PRs/24h), possivelmente impulsionada pela release v1.1.0. Hermes Agent tem gargalo claro — 50 PRs abertos com apenas 1 merge em 24h indica acumulação de dívida técnica.

### 6.2 Consolidação de Qualidade

| Projeto | Release mais Recente | Estabilidade |
|---------|---------------------|--------------|
| **IronClaw** | v1.1.0 (2026-08-06) | 🟡 Recém-lançada — bugs P1 esperados |
| **ZeroClaw** | v0.8.3 (anterior) | 🟡 Em estabilização (v0.8.5 target 30/08) |
| **NanoBot** | Última release pendente | 🟢 Consolidação — sem regressions |
| **Hermes Agent** | v0.20.0 (regressão) | 🔴 Usuários devem evitar atualização |
| **CoPaw** | 2.1.0-beta | 🟡 Beta — instabilidade esperada |
| **PicoClaw** | Nenhuma recente | 🟡 Ciclo de release lento |
| **NullClaw** | Nenhuma | ⚫ Indefinida |

### 6.3 Engajamento Comunitário

| Projeto | Issue Mais Comentada | Comentários | Tipo |
|---------|---------------------|-------------|------|
| Hermes Agent | #78647 — Epic: Shard all god files | 51 | Refatoração |
| ZeroClaw | #6808 — RFC: Work Lanes | 19 | Governança |
| NanoBot | #5198 — Troca de modelos | 2 | Bug |
| CoPaw | #6684 — Matrix retry | 8 | Feature |
| IronClaw | #5553 — Notificações Slack | 4 | Bug |
| PicoClaw | Nenhuma | 0 | — |

**Observação:** Hermes Agent e ZeroClaw lideram em discussão conceitual (refatoração/governança), enquanto NanoBot foca em resolução de bugs — **indicação de maturidade diferentes**: Hermes/Zero em fase de reorganização estrutural; NanoBot em fase de polimento.

---

## 7. Sinais de Tendência

### 7.1 Segurança Como Prioridade #1

O fato de três projetos simultâneos estarem corrigindo vazamento de credenciais (#5270/#5269, #77164/#77162, #1) não é coincidência — reflete a **profissionalização do ecossistema**. À medida que agentes de IA são implantados em produção corporativa, a superfície de ataque em subprocessos e variáveis de ambiente se torna inaceitável. **Recomendação:** Todos os projetos devem implementar política de secrets redaction em tool results antes de marcar releases estáveis.

### 7.2 Modularização e Decomposição

A iniciativa "god files" do Hermes Agent (#78647) e a arquitetura de SOPs do ZeroClaw representam uma **tendência de consolidação arquitetural**. Projetos que cresceram rapidamente estão retornando para refatorar antes de escalar. Isso indica que o ecossistema está amadurecendo — a fase de "move fast and break things" está dando lugar a "move structured and break less."

### 7.3 Resiliência Multi-Canal

A prevalência de bugs em Matrix, Feishu e Slack (todos os projetos afetados) sugere que **integrações de chat são mais frágeis do que APIs REST**. A tendência futura será para abstrações de canal mais robustas, com retry automático, health checks e circuit breakers — algo que CoPaw já начала com PR #6684.

### 7.4 Orchestration e Background Jobs

A universalidade de issues em cronjobs, subagentes e rotinas (#4290, #29849, #5456, #9780) indica que **execução confiável de tarefas em background é o próximo frontier**. Ferramentas como DAG planning (ZeroClaw #9554) e delivery channels (IronClaw #7157) estão posicionando o ecossistema para casos de uso de automação enterprise.

### 7.5 Provider Diversity e Fallback

Demanda transversal por fallback de modelos (#3200 no PicoClaw, #6659 no CoPaw, #80424 no Hermes Agent) reflete **necessidade de resiliência operacional** em produção. A tendência é de múltiplos provedores por deployment com failover automático — característica que diferencia platforms SaaS de modelos monolith.

### 7.6 UX/WebUI como Diferenciador

NanoBot (drag-and-drop, terminal interativo, cold-start otimizado) e Hermes Agent (Desktop app) demonstram que **a fronteira de competição está se movendo de features para experiência**. Projetos que negligenciam UX vão perder adoção para concorrentes com mesma funcionalidade mas interface superior.

---

## 8. Recomendações Estratégicas

| Audiência | Recomendação |
|-----------|-------------|
| **Desenvolvedores contributors** | Priorizar PRs de segurança (#5270, #5271, #77164) — alta visibilidade e impacto imediato |
| **Times de produto** | NanoBot para deployments que exigem UX/WebUI madura; IronClaw para automação corporativa com Slack |
| **DevOps/Infra** | ZeroClaw para orchestration declarativa; Hermes Agent para Desktop enterprise (após regressão v0.20.0 resolvida) |
| **Pesquisadores** | CoPaw para experimentação com AgentScope, DeepSeek reasoning e Browser SDK |
| **Decisores de adoção** | Evitar Hermes Agent v0.20.0; aguardar v0.8.5 do ZeroClaw; monitorar NanoBot para releases de segurança |

---

*Relatório gerado em 2026-08-07. Dados consolidados de github.com/HKUDS/nanobot, github.com/NousResearch/hermes-agent, github.com/sipeed/picoclaw, github.com/nearai/ironclaw, github.com/agentscope-ai/CoPaw, github.com/zeroclaw-labs/zeroclaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-07

## 1. Panorama do Dia

O NanoBot mantém um ritmo intenso de desenvolvimento com **16 PRs e 9 issues atualizadas nas últimas 24h**, demonstrando alta atividade comunitária. O projeto está focado em **estabilidade e segurança**, com múltiplas correções de bugs de alta prioridade (p0/p1) sendo submetidas simultaneamente — incluindo vulnerabilidades críticas de vazamento de chaves de API. No фронтенде, mejoras na WebUI como drag de sessões e terminal interativo compartilhado avançam, enquanto a integração Matrix recebe melhorias de compatibilidade. O pipeline de releases permanece sem novas versões desde a última marcação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O repositório não publicou novas versões no período analisado. O último release disponível continua pendente; usuários em produção devem acompanhar o canal de announcements para próximas publicações.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged (5 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | feat(webui): drag sidebar sessions | Re-bin | Permite arrastar sessões na barra lateral para criar menções estruturadas e reordenar manualmente com linha de inserção estilo Codex |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | fix(matrix): send non-empty POST body on room join | orrinwitt | **Correção de bug críticos** — bots Matrix agora enviam body não-vazio no JOIN, resolvendo rejeição do Continuwuity (`M_BAD_JSON`) |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | fix(webui): tighten interactive motion | chengyongru | Alinha transições WebUI em 220ms, encurta estados de hold, ancora conteúdo durante aberturas/fechamentos, respeita preferência de reduced motion |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | fix(webui): enforce memory-only temporary sessions | chengyongru | Garante que conversas temporárias permaneçam apenas em memória (sem escrita em histórico, transcripts ou memória automática) |
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | perf(webui): reduce cold-start payload | chengyongru | Gera assets pré-comprimidos gzip, negocia Content-Encoding no gateway, mantém runtime React fora de chunks lazy; cobertura com teste de regressão |

**Resumo:** As correções fechadas concentram-se em **WebUI (UX e performance)** e **Matrix (compatibilidade com homeservers)**. A performance (#5262) é particularmente relevante para implantações com frio-start frequente.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Interação (comentários/reações)

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|-----|------|
| #5198 | Not possible to change models in a specific session | bug | 2 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/5198) |
| #4290 | cronjob ends early when there's a subagent spawned | bug | 2 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/4290) |

### Análise

**#5198 — Troca de modelos por sessão:** Reportado por `whisperity` em 2026-07-31, este bug afeta a usabilidade em cenários multi-modelo. O usuário espera comportamento similar a IAs SaaS na nuvem, onde pode trocar modelos por conversa. Aissue aguarda triagem há ~1 semana.

**#4290 — Cronjobs com subagentes:** Reportado por `tjc0726` em 2026-06-10, este é um dos issues mais antigos em destaque. Quando um subagente é gerado durante um cronjob, o agente principal não consegue responder ao resultado do subagente, causando falhas em workflows subsequentes. Este issue está **aberto há quase 2 meses** e pode indicar uma lacuna na arquitetura de execução de tarefas background.

**Conclusão:** A comunidade sinaliza dois problemas críticos de experiência: **flexibilidade de modelos** e **execução confiável de workflows com subagentes**. Ambos merecem atenção do core team.

---

## 5. Bugs e Estabilidade

### Novas Issues de Bug (7 abertas + 1 fechada)

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #5198 | alta | Not possible to change models in a specific session | [Link](https://github.com/HKUDS/nanobot/issues/5198) |
| #4290 | alta | cronjob ends early when there's a subagent spawned | [Link](https://github.com/HKUDS/nanobot/issues/4290) |
| #5273 | média | session retention trimming drops proactive channel delivery messages | [Link](https://github.com/HKUDS/nanobot/issues/5273) |
| #5264 | média | /api/sessions/{key}/messages never returns media_urls for files outside media root | [Link](https://github.com/HKUDS/nanobot/issues/5264) |
| #5276 |baixa | Allow enforcing session-level temporary file isolation | [Link](https://github.com/HKUDS/nanobot/issues/5276) |

### PRs de Fix em Aberto com Prioridade

| # | Prioridade | Título | Link |
|---|------------|--------|------|
| #5271 | **p0** | fix(session): prevent stale background task saves from overwriting session data | [Link](https://github.com/HKUDS/nanobot/pull/5271) |
| #5270 | p1 | fix(cli): stop leaking API keys to CLI app subprocesses | [Link](https://github.com/HKUDS/nanobot/pull/5270) |
| #5269 | p1 | fix(providers): stop writing API keys into process os.environ | [Link](https://github.com/HKUDS/nanobot/pull/5269) |
| #5272 | p2 | fix(session): preserve proactive channel delivery during session retention trimming | [Link](https://github.com/HKUDS/nanobot/pull/5272) |

### Análise de Estabilidade

**🔴 Prioridade Crítica (p0):**
- **#5271** — Race condition entre background tasks e `/new`: tarefas em background mantêm referência à `Session` durante `await`; se usuário executa `/new`, `session.clear()` + `save()` + `invalidate()` causam sobregravação de dados na próxima interação. Bug pode causar **perda de dados de sessão**.

**🟠 Prioridade Alta (p1):**
- **#5270 e #5269** — **Vulnerabilidades de segurança críticas**: vazamento de chaves de API em subprocessos CLI e em `os.environ` global. Em setups multi-provider, credenciais podem vazar ou ser sobrepostas entre instâncias. **Correção urgente recomendada para produção**.

**🟡 Prioridade Média:**
- **#5273/#5272** — Perda de mensagens de entrega proativas (notificações de cron, entregas de jobs) durante trimming de sessão.
- **#5264/#5268** — `media_urls` não são emitidas para arquivos fora do media root em APIs REST (apenas WebSocket funciona corretamente).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Tipo | Link |
|---|--------|------|------|
| #5276 | Allow enforcing session-level temporary file isolation | enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5276) |
| #5266 | Logs about token consumption | enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5266) |
| #5275 | [channels/matrix] reply in thread should form dedicated context | enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5275) |
| #5274 | [channels/matrix] messages replied to a user's query should use reply feature | enhancement | [Link](https://github.com/HKUDS/nanobot/issues/5274) |

### PRs de Feature em Desenvolvimento

| # | Título | Autor | Link |
|---|--------|-------|------|
| #5277 | feat(webui): add responsive model preset detail pane | Re-bin | [Link](https://github.com/HKUDS/nanobot/pull/5277) |
| #5252 | feat(webui): add temporary chat mode | Re-bin | [Link](https://github.com/HKUDS/nanobot/pull/5252) |
| #5234 | feat(agent): integrate mst-python as metasearch provider | goodtiding5 | [Link](https://github.com/HKUDS/nanobot/pull/5234) |
| #5253 | feat(webui): add shared interactive project terminal | chengyongru | [Link](https://github.com/HKUDS/nanobot/pull/5253) |

### Análise de Roadmap

1. **Meta-Search Provider (#5234):** Integração do MST (Multi-Search Tool) usando Reciprocal Rank Fusion entre DuckDuckGo, Google, Brave, Bing — cobertura rica para busca web. Marcado p1.

2. **Temporary Chat Mode (#5252):** Conversas efêmeras não-persistentes, criados após primeira mensagem. Complementado por [#5259](https://github.com/HKUDS/nanobot/pull/5259) (já merged) que garante enforcement memory-only.

3. **Interactive Project Terminal (#5253):** PTY persistente por projeto, compartilhado entre WebUI e agente — uso de xterm.js com bounded replay. Tem conflito merge pendente.

4. **Matrix Threading (#5274, #5275):** Melhorias no canal Matrix para usar native reply features e formar contextos dedicados por thread — alinhamento com Discord/Slack.

5. **Token Logging (#5266):** Demanda por visibilidade de consumo de tokens. Usuário `knoppix2` reportou consumo excessivo (~1M tokens em 2h sem atividade).

6. **Session-level Isolation (#5276):** Mesmo com `restrictToWorkspace` + sandbox bwrap, `~/.nanobot/workspace` é global. Usuário solicita isolamento por sessão.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Issue | Feedback |
|-----------|-------|----------|
| **Controle de modelos** | #5198 | Usuários esperam trocar modelos por sessão sem reconfigurar instância — comportamento padrão em IAs SaaS |
| **Consumo de tokens** | #5266 | `knoppix2` reportou ~1M tokens consumidos em 2h sem interação visível — falta de logging dificulta troubleshooting |
| **Segurança** | #5270, #5269 | Usuários em produção com multi-provider enfrentam vazamento potencial de credenciais — risco crítico em ambientes compartilhados |
| **Matrix UX** | #5274, #5275 | Usuários Matrix esperam comportamento de thread similar a Slack/Discord — resposta como mensagem top-level em vez de reply prejudica experiência |
| **Isolamento de sessões** | #5276 | Ambientes multi-usuário reclamam que `workspace` é global — skills evoluem mas dados de sessões podem vazar |

### Cenários de Uso Emergentes

- **Multi-sessão simultânea:** Usuários rodam múltiplas sessões concurrently e precisam de isolamento de workspace (#5276)
- **Cronjobs complexos com subagentes:** Workflows de automação dependem de cronjobs que disparam subagentes — #4290 bloqueia casos de uso
- **Terminal integrado:** Desenvolvedores querem PTY compartilhado para debugging de agentes em tempo real (#5253)

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution

| # | Idade | Título | Status | Link |
|---|-------|--------|--------|------|
| #4290 | **~57 dias** | cronjob ends early when there's a subagent spawned | OPEN | [Link](https://github.com/HKUDS/nanobot/issues/4290) |
| #5198 | ~7 dias | Not possible to change models in a specific session | OPEN | [Link](https://github.com/HKUDS/nanobot/issues/5198) |

### Recomendações

1. **#4290 (Prioridade Alta):** Issue aberta há quase 2 meses, 2 comentários, afeta workflow de automação. Recomenda-se triagem e designação de assignee. Relaciona-se com arquitetura de execution engine.

2. **#5198:** Bug de usabilidade multi-modelo. Workaround atual exige reconfiguração de instância — impacto negativo em flexibilidade. Prioridade moderada-alta.

3. **Segurança (#5270, #5269):** Embora PRs abertas existam, até merge completá-las, ambientes multi-provider estão expostos. Recomenda-se merge expedito.

4. **Feature Matrix (#5274, #5275):** Mesmo autor (`whisperity`) abriu

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-07

---

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** em 07/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24h. **Nenhuma nova release** foi publicada. O projeto apresenta um ciclo intenso de refatoração, com a decomposição de "god files" como tema central — 5 dos 30 issues mais comentados tratam diretamente dessa iniciativa. A plataforma Feishu continua sendo fonte de bugs persistentes (erros 200340/220340/200343 em botões de aprovação), enquanto o app Desktop apresenta uma regressão crítica na v0.20.0. Três issues de segurança estão em discussão ativa, todas relacionadas a vazamento potencial de credenciais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release estável continua sendo **v0.20.0** (referenciada na issue #79407 como versão com regressão). Recomenda-se cautela ao atualizar até que a regressão do bottom panel seja corrigida.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (7 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| #80657 | fix(monitoring): honor configured resource_attributes | victor-kyriazakos | Corrige exportação de spans OTLP ignorando config; fecha #78897 |

### PRs Abertos com Maior Atividade (20 principais)

| # | PR | Tema | Status |
|---|-----|------|--------|
| [#80679](https://github.com/NousResearch/hermes-agent/pull/80679) | fix(slack): dedupe thread-qualified channel lookups | Melhoria Slack | Aberto |
| [#80676](https://github.com/NousResearch/hermes-agent/pull/80676) | refactor(auth): extract TLS verification helpers (S3) | Refatoração auth | Aberto |
| [#80673](https://github.com/NousResearch/hermes-agent/pull/80673) | refactor(auth): extract auth errors and telemetry (S1) | Refatoração auth | Aberto |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | feat(gateway): add P2P federation heartbeat | Nova feature | Aberto |
| [#80675](https://github.com/NousResearch/hermes-agent/pull/80675) | fix(desktop): resolve reaction write key | Bug Desktop | Aberto |
| [#69847](https://github.com/NousResearch/hermes-agent/pull/69847) | fix(gateway): preserve context during manual compression | Estabilidade | Aberto |

**Destaque:** As extrações de auth (#80673, #80676) fazem parte da iniciativa de decomposição de god files, segmentando `hermes_cli/auth.py` (9.180 linhas) em módulos menores. O PR #76661 introduz **federação P2P** para multi-device task relay, sinalizando expansão da arquitetura.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tema |
|---|--------|-------------|------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Epic: Shard all 20 god files | **51** | Refatoração |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | Tracking: Plugin Interface Expansion | **27** | Plugins |
| [#78645](https://github.com/NousResearch/hermes-agent/issues/78645) | Shard agent/context_compressor.py | **19** | Refatoração |
| [#29849](https://github.com/NousResearch/hermes-agent/issues/29849) | `no_agent=True` cronjob ignores `terminal.backend` | **14** | Bug SSH |
| [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) | Grok/xAI Feature Parity Campaign | **9** | Provider |

### Análise dos Temas

1. **Decomposição de God Files (Epic #78647)**: Com 51 comentários, é o issue mais ativo. A política estabelecida (agosto/2026) determina que **todos os god files devem ser fragmentados e nunca revertidos**. Arquivos em foco:
   - `agent/context_compressor.py` — 6.789 linhas
   - `hermes_cli/auth.py` — 9.180 linhas
   - `plugins/platforms/telegram/adapter.py` — 10.147 linhas
   - `gateway/run.py` — 858KB

2. **Plugin Interface Expansion (#64182)**: Plano para expandir interface de plugins, consolidando ideias da comunidade Discord.

3. **Grok/xAI Feature Parity (#80424)**: Meta-issue para alinhar integração xAI com docs.x.ai (Models, Chat/Responses, Function calling, Reasoning, Streaming, Voice/TTS).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P2 — Alta Prioridade (7 issues)

| # | Bug | Plataforma | Link |
|---|-----|------------|------|
| #29849 | cronjob com `terminal.backend=ssh` ignora configuração | SSH/Docker | [#29849](https://github.com/NousResearch/hermes-agent/issues/29849) |
| #79407 | **[Regression v0.20.0]** Desktop bottom panel ausente | Windows | [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) |
| #80652 | MCP stdio bridge crash (TypeError) com args:null | MCP | [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) |
| #79628 | `use_gateway: true` descarta credenciais válidas | Auth | [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) |
| #80259 | Message reactions indisponíveis em remote-desktop | Desktop | [#80259](https://github.com/NousResearch/hermes-agent/issues/80259) |
| #80657 | span exporter ignora resource_attributes configurados | Monitoring | [#80657](https://github.com/NousResearch/hermes-agent/issues/80657) |
| #72310 | hermes.exe bloqueado por WDAC no Windows | Windows | [#72310](https://github.com/NousResearch/hermes-agent/issues/72310) |

#### P3 — Média Prioridade (destaques)

| # | Bug | Área | Link |
|---|-----|------|------|
| #10251 | Feishu: botões de aprovação falham com erro 200340 | Feishu | [#10251](https://github.com/NousResearch/hermes-agent/issues/10251) |
| #7675 | Card interaction events tratados como `/card` | Feishu | [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) |
| #41331 | email: IMAP/SMTP login hardcoded para EMAIL_ADDRESS | Email | [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) |
| #80596 | Desktop: learning graph marca skills externas como 'learned' | Desktop | [#80596](https://github.com/NousResearch/hermes-agent/issues/80596) |

#### Issues de Segurança (3 issues — atenção)

| # | Severity | Descrição | Link |
|---|----------|-----------|------|
| #77484 | **MEDIUM** | `process(action=list)` retorna raw sem redaction; traceback em tool result; regex miss em *_KEY; control-char split | [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) |
| #77164 | **HIGH** | Child-process env scrub por name-shape heurístico permite vazamento de secrets aplicadas | [#77164](https://github.com/NousResearch/hermes-agent/issues/77164) |
| #77162 | **MEDIUM** | Exact-value applied-secret redaction ausente no tool-result → provider egress | [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) |

**Padrão identificado:** A plataforma **Feishu** tem 5+ issues abertas sobre falhas em botões de cards interativos — problema recorrente desde v0.15.x.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues abertas)

| # | Feature | Componentes | Link |
|---|---------|-------------|------|
| #76661 | **P2P Federation** — heartbeat, task relay, health monitoring | Gateway | [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) |
| #80424 | **Grok/xAI Feature Parity** — full alignment com xAI platform | Provider/xAI | [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) |
| #77221 | **Desktop Usage Analytics** — surface de token/cost no app | Desktop | [#77221](https://github.com/NousResearch/hermes-agent/issues/77221) |
| #77222 | **Per-day Time-series** — token/cost aggregation no InsightsEngine | Agent | [#77222](https://github.com/NousResearch/hermes-agent/issues/77222) |
| #77223 | **Cost Buckets View** — included/estimated/unknown no aggregate | Agent | [#77223](https://github.com/NousResearch/hermes-agent/issues/77223) |
| #70849 | **Per-job deliver_profile** para cron multiplexado | Cron/QQBot | [#70849](https://github.com/NousResearch/hermes-agent/issues/70849) |
| #75720 | **Laravel LSP** para .blade.php files | LSP | [#75720](https://github.com/NousResearch/hermes-agent/pull/75720) |

### Sinais de Roadmap

- **Refatoração massiva em curso**: 20 god files identificados para shard — indica foco em manutenibilidade
- **Observabilidade em expansão**: Langfuse plugin, insights, cost tracking
- **Multi-plataforma усиление**: P2P federation, melhor suporte Windows, Linux desktop
- **Provider diversity**: Feature parity com Grok/xAI, expansão de plugins

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Desktop v0.20.0** | Regressão crítica — app se torna "viewer-only shell" sem panel inferior | Alto — bloqueia uso |
| **Feishu Cards** | Botões de aprovação falham persistentemente (erros 200340/220340/200343) | Médio — frustração recorrente |
| **Windows WDAC** | CLI bloqueado por políticas de segurança corporativo | Médio — ambiente enterprise |
| **MCP Bridge** | Crash ao configurar args como null | Médio — configuração YAML |
| **SSH Cronjobs** | Scripts executam no host errado | Médio — automações comprometidas |

### Cenários de Uso Identificados

- **Enterprise com SSH/Docker**: Usuários enfrentam bug em cronjobs remotos
- **Windows corporativo**: WDAC impede uso do CLI
- **Feishu como gateway**: Integração beta com problemas de UX
- **Desktop para análise**: Necessidade de dashboards de custo/token (feature request)

### Satisfação/Insatisfação

- **Satisfação**: Atividade da comunidade alta (50+ issues/PRs), refatoração ativa
- **Insatisfação**: Regressão Desktop v0.20.0, Feishu quebrado há meses (desde v0.15.x), 3 security issues simultâneas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Idade | Título | Status | Link |
|---|-------|--------|--------|------|
| #38305 | ~60 dias | Feishu error 200340 persiste — PR #10256 precisa merge | needs-merge | [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) |
| #10251 | ~120 dias | Feishu command approval cards falham | bug recorrente | [#10251](https://github.com/NousResearch/hermes-agent/issues/10251) |
| #7675 | ~120 dias | Card interaction events como `/card` | bug recorrente | [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) |
| #10073 | ~120 dias | Feishu mobile error 200340 | bug recorrente | [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) |
| #13924 | ~110 dias | Feishu buttons error 220340 | bug recorrente | [#13924](https://github.com/NousResearch/hermes-agent/issues/13924) |
| #25886 | ~85 dias | Feishu card authorization error 200343 | bug recorrente | [#25886](https://github.com/NousResearch/hermes-agent/issues/25886) |

### Priorização Recomendada

1. **🔴 Crítico**: Fixar regressão Desktop v0.20.0 (#79407)
2. **🔴 Crítico**: Endereçar 3 security issues (#77164, #77484, #77162)
3. **🟠 Alto**: Resolver bug SSH cronjobs (#29849)
4. **🟠 Alto**: Consolidar fixes Feishu (6+ issues abertas)
5. **🟡 Médio**: Continuar god-file decomposition sem acumular dívida

---

*Relatório gerado em 2026-08-07. Dados do GitHub NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-07

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nesta data. Não houve registro de novas issues ou releases nas últimas 24 horas. O volume de PRs permanece baixo, com **apenas 2 pull requests** sendo atualizadas no período — uma fechada após longo ciclo de desenvolvimento (#1349) e uma nova contribuição aguardando revisão (#3200). A comunidade mantém engajamento pontual, com foco em melhorias de funcionalidades existentes, especialmente no ecossistema QQ e gerenciamento de modelos de IA.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

| Métrica | Valor |
|---------|-------|
| Releases (7 dias) | 0 |
| Tags criadas | 0 |
| Mudanças desde último release | — |

> **Nota:** A ausência de releases recentes pode indicar que o projeto está em fase de consolidação de funcionalidades ou preparação para uma nova versão. Recomenda-se acompanhar o repositório para announcements futuros.

---

## 3. Progresso do Projeto

### PR Merged/Fechada

**#1349** — `feat(qq): support parsing and replying to more attachment types` ✅
- **Status:** CLOSED
- **Autor:** aishannon
- **Criado em:** 2026-03-11 | **Atualizado em:** 2026-08-06
- **Ciclo de desenvolvimento:** ~5 meses

**Alterações implementadas:**
1. Suporte a parsing de estruturas de emoji do QQ Channel
2. Tratamento de mensagens de voz, imagem, vídeo e arquivo recebidas via QQ Channel
3. Suporte a respostas com anexos locais (upload antes do envio)
4. Priorização de mensagens Markdown nas respostas (com fallback)

🔗 [Ver PR #1349](https://github.com/sipeed/picoclaw/pull/1349)

**Impacto:** Esta PR representa uma melhoria significativa na integração com QQ Channel, expandindo as capacidades de automação e interação com diferentes tipos de mídia.

---

### PR em Aberto (aguardando revisão)

**#3200** — `feat(models): add configurable default fallback chain` 🔄
- **Status:** OPEN
- **Autor:** lc6464
- **Criado em:** 2026-07-01 | **Atualizado em:** 2026-08-06
- **Tempo em aberto:** ~37 dias

**Proposta:**
- Adicionar cadeia de fallback configurável para modelos no web UI
- Permitir que usuários definam modelo padrão, adicionem fallbacks, reordenem a cadeia e persistam configurações via backend API
- Workflow dedicado na página de modelos

🔗 [Ver PR #3200](https://github.com/sipeed/picoclaw/pull/3200)

**Impacto potencial:** Melhoria na resiliência de requisições a modelos de IA, proporcionando experiência mais fluida ao usuário final.

---

## 4. Temas Quentes da Comunidade

**Não há issues ou PRs com comentários/reações significativos registrados nas últimas 24 horas.**

| Métrica | Valor |
|---------|-------|
| Issues com comentários | 0 |
| PRs com comentários | 0 |
| Reações totais | 0 |

> **Observação:** A baixa interação pode ser reflexo do horário de coleta dos dados. Recomenda-se verificar a aba "Insights" do repositório para métricas históricas de engajamento.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

| Severidade | Issues abertas | Issues fechadas |
|------------|----------------|------------------|
| Crítica | 0 | 0 |
| Alta | 0 | 0 |
| Média | 0 | 0 |
| Baixa | 0 | 0 |

> **Status:** Sem regressões ou crashes conhecidos. O projeto aparenta estabilidade operacional.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Desenvolvimento

**#3200 — Cadeia de Fallback Configurável para Modelos**

A PR em aberto demonstra direção estratégica do projeto:

| Aspecto | Detalhe |
|---------|---------|
| **Necessidade** | Flexibilidade no uso de múltiplos modelos de IA |
| **Solução proposta** | Interface visual para configurar cadeia de fallbacks |
| **Benefícios** | Resiliência, experiência do usuário, customização |
| **Complexidade** | Média-alta (envolve UI + backend + persistência) |

🔗 [Acompanhar #3200](https://github.com/sipeed/picoclaw/pull/3200)

### Sinais de Evolução do Produto

A contribuição de **#1349** (QQ Channel enhancements) indica que o projeto está investindo em:
- Melhoria de integrações com plataformas de mensagens
- Suporte multiprotocolo (anexos diversos)
- Tratamento graceful de formatos de conteúdo

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback direto registrado nas últimas 24 horas.**

| Canal | Volume | Sentimento |
|-------|--------|------------|
| Issues | 0 | N/A |
| Comentários em PRs | 0 | N/A |
| Discussões | 0 | N/A |

> **Nota:** Para análise de feedback historic, recomenda-se consultar issues closed/comentadas nos últimos 30-90 dias.

---

## 8. Backlog que Merece Atenção

### Item em Destaque

| PR | Título | Tempo em Aberto | Prioridade |
|----|--------|------------------|------------|
| #3200 | `feat(models): add configurable default fallback chain` | ~37 dias | ⭐ Alta |

**Análise:**
- A PR está aberta há mais de um mês sem merge
- Trata-se de feature relevante para experiência do usuário
- **Recomendação:** Priorizar code review para desbloquear valor ao usuário

🔗 [Revisar #3200](https://github.com/sipeed/picoclaw/pull/3200)

---

## Métricas Consolidada do Dia

| Categoria | Valor |
|-----------|-------|
| 📊 Issues (24h) | 0 novas, 0 abertas, 0 fechadas |
| 🔀 PRs (24h) | 2 atualizadas (1 closed, 1 open) |
| 🚀 Releases | 0 |
| 🐛 Bugs críticos | 0 |
| ⭐ PRs pendentes | 1 (#3200) |

---

**Próximos Passos Sugeridos:**
1. Avançar revisão da PR #3200
2. Monitorar feedback da comunidade sobre QQ Channel features
3. Considerar release para consolidar PRs merged recentemente

---
*Relatório gerado automaticamente em 2026-08-07. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-07

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade** na data de hoje, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O destaque é a ** release v1.1.0** publicada ontem (2026-08-06), marcando o primeiro release estável desde a 1.0.0, com foco em expansão de extensões, servidores MCP hospedados e melhorias no Slack. A base de issues permanece com volume significativo de bugs abertos (28 ativos), com destaque para problemas de P1 relacionados a rotinas, leases de runner e notificações Slack. O time mantém ritmo intenso de merges, com 16 PRs fechados/merged nas últimas 24h.

---

## 2. Lançamentos

### ✅ ironclaw-v1.1.0 — 2026-08-06

**Release Notes:**

Este é o primeiro release estável desde a 1.0.0, promovendo o candidato `1.1.0-rc.1` acrescido de correções. As principais mudanças incluem:

| Categoria | Mudanças |
|-----------|----------|
| **Extensões** | Registro de servidores MCP arbitrários hospedados |
| **Infraestrutura** | Instalação via deep links do IronHub |
| **Arquivos** | Anexos duráveis que atravessam canais |
| **Slack** | Suporte expandido (Slac — referência parcial) |

**Breaking Changes:** Não identificados nesta release notes. Recomenda-se revisar o diff completo em [GitHub Release v1.1.0](https://github.com/nearai/ironclaw/releases/tag/v1.1.0).

**Migração:** Para usuários em versões anteriores, recomenda-se backup das configurações antes da atualização, especialmente para integrações MCP customizadas.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged nas Últimas 24h

| PR | Autor | Escopo | Impacto |
|----|-------|--------|---------|
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | henrypark133 | **fix(docker): install curl** | Corrige healthchecks quebrados em staging nodes |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | serrrfirat | **fix(memory): sanitize FTS queries** | Corrige recall de memória em produção (fecha #7275) |
| [#7296](https://github.com/nearai/ironclaw/pull/7296) | serrrfirat | **fix(webui): keep failure bubbles** | Corrige duplicação de bolhas de erro no histórico |
| [#5544](https://github.com/nearai/ironclaw/pull/5544) | serrrfirat | **Revalidate signed WebUI SSO sessions** | Adiciona suporte a épocas de sessão e revalidação |

### PRs Abertos de Destaque

| PR | Tamanho | Risco | Relevância |
|----|---------|-------|------------|
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | XL | Low | Nostr host functions para WASM tools (reborn) |
| [#7306](https://github.com/nearai/ironclaw/pull/7306) | XL | Medium | Unificação de guidance com CI gate |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | XL | Medium | Ferramenta de entrega em canais explícitos |
| [#7273](https://github.com/nearai/ironclaw/pull/7273) | XL | Low | Busca deferida de ferramentas com schema-aware |
| [#7288](https://github.com/nearai/ironclaw/pull/7288) | L | Medium | libSQL FTS seguro para recall em linguagem natural |

**Análise:** O time está focado em três trilhas principais: (1) **infraestrutura de sandbox** (Docker/Railway profiles, WASM tools), (2) **qualidade de memória e busca** (FTS sanitization, deferred search), e (3) **entrega de resultados** (channel delivery tool). A ênfase em documentação e CI gates (#7306, #7259) indica maturidade operacional.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Comentários | Status | Tema Principal |
|-------|-------------|--------|----------------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | 4 | OPEN | Notificações de aprovação desaparecem |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | 4 | OPEN | GitHub API retorna HTTP 403 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | 3 | OPEN | Reborn falha ao ler Slack DMs |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | 3 | OPEN | Painel de atividade não mostra detalhes |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | 3 | OPEN | Desconexão do Slack rejeitada pelo agente |

### Análise das Demandas

**Padrão 1 — Integração Slack instável:** Três dos cinco tópicos mais comentados envolvem falhas no Slack (#5522, #5834, #5877). A equipe respondeu ativamente com PRs [#7300](https://github.com/nearai/ironclaw/pull/7300) e [#7157](https://github.com/nearai/ironclaw/pull/7157), indicando priorização.

**Padrão 2 — GitHub API:** A issue [#5702](https://github.com/nearai/ironclaw/issues/5702) sobre HTTP 403 no GitHub é crítica para workflows de automação. Necessita atenção urgente.

**Padrão 3 — UI/UX de ferramentas:** Problemas de visibilidade (#5701) e exposição de detalhes internos (#5707) indicam necessidade de polish na interface.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Impacto Alto)

| Issue | Descrição | Status | Última Atualização |
|-------|-----------|--------|-------------------|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | Rotinas falham com expiração de lease do runner (90s agressivo demais) | OPEN | 2026-08-07 |
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | Notificação Slack enviada ao usuário errado | OPEN | 2026-08-07 |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram não configura automaticamente via UI | CLOSED | 2026-08-07 |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | Criação de rotina trava sem retorno ou erro | CLOSED | 2026-08-07 |

### Bugs P2 (Impacto Médio)

| Issue | Descrição | Status | Área |
|-------|-----------|--------|------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Notificações de aprovação desaparecem | OPEN | Notificações |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub integration falha com 403 | OPEN | GitHub |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | "No thread attached" em rotinas agendadas | OPEN | Routines |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Target de entrega Slack não encontrado | OPEN | Slack |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | Latência escala com histórico acumulado | OPEN | Performance |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction error após execução bem-sucedida | CLOSED | Memory |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | "No thread attached" bloqueia debugging | CLOSED | Debugging |

### Bugs P3 (Menor Impacto)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | Não é possível deletar rotinas antigas | OPEN |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requer dois cliques | CLOSED |
| [#5704](https://github.com/nearai/ironclaw/issues/5704) | Preview de imagem fica transparente durante chat ativo | CLOSED |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | Ícone de terminal sem opção de desabilitar | CLOSED |
| [#5706](https://github.com/nearai/ironclaw/issues/5706) | Sidebar mostra UUID cru quando instance está lenta | CLOSED |

### Avaliação de Estabilidade

**Scorecard:**

| Indicador | Status | Observação |
|-----------|--------|------------|
| P1 abertos | 2 | Lease runner + Slack para usuário errado — críticos |
| P2 abertos | 9+ | Área principal: rotinas, Slack, performance |
| P3 fechados | 4 | UI bugs sendo addressed |
| Regressões | 0 | Nenhuma regressão nova identificada |

**Conclusão:** Estabilidade comprometida em workloads de rotinas de longa duração. A expiração de leases (#5456) é o gargalo mais significativo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento (PRs)

| PR | Feature | Complexidade | Indicação de Roadmap |
|----|---------|--------------|---------------------|
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | Canal de entrega explícito com duas faixas | XL | Sistema de notificação redesenhado |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | Nostr host functions para WASM | XL | Suporte a криптовалюты/Descentralização |
| [#7273](https://github.com/nearai/ironclaw/pull/7273) | Busca de ferramentas schema-aware | XL | Melhoria no loop de ferramentas |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | OOBE/onboarding automation tasks | XL | UX de onboarding |

### Sinais de Demanda (Issues Abertas)

| Issue | Feature Request | Prioridade Implícita |
|-------|-----------------|---------------------|
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Capacidade de desconectar Slack explicitamente | Alta |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | Mecanismo para deletar rotinas | Alta |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | Otimização de performance em conversas longas | Alta |

**Trajetória:** O roadmap está convergindo para três eixos: (1) **entrega de resultados** (channel delivery tool), (2) **ecossistema de ferramentas** (Nostr, WASM, MCP), e (3) **DX/Onboarding** (OOBE).

---

## 7. Resumo de Feedback dos Usuários

### Dores Realmente Reportadas

| Dor | Frequência | Severidade | Referência |
|-----|------------|------------|------------|
| Rotinas falham sem feedback claro | Alta | P1-P2 | [#5456](https://github.com/nearai/ironclaw/issues/5456), [#5552](https://github.com/nearai/ironclaw/issues/5552) |
| Slack não funciona como esperado | Alta | P1-P2 | [#5834](https://github.com/nearai/ironclaw/issues/5834), [#5508](https://github.com/nearai/ironclaw/issues/5508), [#5877](https://github.com/nearai/ironclaw/issues/5877) |
| Performance degrada com uso | Média | P2 | [#5509](https://github.com/nearai/ironclaw/issues/5509) |
| UI/UX polida necessária | Média | P2-P3 | [#5701](https://github.com/nearai/ironclaw/issues/5701), [#5705](https://github.com/nearai/ironclaw/issues/5705) |
| Não consegue deletar rotinas | Baixa | P3 | [#5510](https://github.com/nearai/ironclaw/issues/5510) |

### Cenários de Uso Identificados

1. **Automação de GitHub:** Usuários tentam usar o agente para buscar/criar issues, mas enfrentam HTTP 403 — processo travado.
2. **Rotinas agendadas:** Configuração de rotinas como `ironclaw-issues

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## Data: 2026-08-07 | Repositório: agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve **alta atividade** em 07/08/2026, com 33 issues e 50 PRs atualizados nas últimas 24 horas — um volume típico de um projeto em estágio ativo de desenvolvimento. Não houve lançamentos oficiais no período, sugerindo foco em estabilização da base de código. A distribuição entre issues abertas (16) e fechadas (17) indica um ciclo saudável de resolução de problemas. O destaque vai para a **corrência de múltiplos bugs críticos** relacionados a sessões longas, ferramentas MCP e compatibilidade com agentescope 2.0.4.post1, além de PRs significativos de refatoração de memória e contexto em revisão.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com a versão **2.1.0-beta** em desenvolvimento ativo conforme evidenciado nas issues (#6756, #6762, #6698 — todas mencionam `2.1.0b1` ou `2.1.0b2`).

---

## 3. Progresso do Projeto

### PRs closed/merged recentemente

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #6611 | refactor(context): align Scroll and memory with AgentScope lifecycle | Converge Scroll como único protocolo de contexto; alinha ferramentas de memória com AgentScope Agent base class | [PR #6611](https://github.com/agentscope-ai/CoPaw/pull/6611) |
| #6530 | Fix editable per-tool call limit names | Permite edição de nomes de limites por chamada de ferramenta; adiciona teste de regressão | [PR #6530](https://github.com/agentscope-ai/CoPaw/pull/6530) |
| #6744 | fix(config): harden agent config persistence on shared filesystems | Substitui escritas diretas por escritas atômicas; preserva campos legados em falhas | [PR #6744](https://github.com/agentscope-ai/CoPaw/pull/6744) |
| #6751 | docs(blog): add Scroll executable memory report | Documenta relatório de memória executável do Scroll | [PR #6751](https://github.com/agentscope-ai/CoPaw/pull/6751) |

### PRs abertos em revisão

| # | Título | Área | Link |
|---|--------|------|------|
| #6772 | feat(memory): improve ReMe configuration and embedding lifecycle | Memory/ReMe | [PR #6772](https://github.com/agentscope-ai/CoPaw/pull/6772) |
| #6659 | feat(providers): implement model fallback with cooldown mechanism | Providers | [PR #6659](https://github.com/agentscope-ai/CoPaw/pull/6659) |
| #6774 | fix(modes): honor in_loop_modes for goal and mission gates | Modes | [PR #6774](https://github.com/agentscope-ai/CoPaw/pull/6774) |
| #6715 | feat(onebot): handle remote inbound voice and image media | OneBot | [PR #6715](https://github.com/agentscope-ai/CoPaw/pull/6715) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **#6684** (8 comentários) — Enhancement: Adicionar funcionalidade de retry a canais Matrix. Usuários relatam falhas de conexão após reinicialização do servidor Matrix. [Link](https://github.com/agentscope-ai/CoPaw/issues/6684)

2. **#6588** (6 comentários) — Bug: `spawn_subagent` trata placeholders `batch` vazios como modo batch em chamadas de tarefa única. Afeta integrações com provedores Responses-compatible. [Link](https://github.com/agentscope-ai/CoPaw/issues/6588)

3. **#6601** (5 comentários) — Bug: QwenPaw não reporta erro de resposta vazia em sessões longas, causando perda de responsividade. [Link](https://github.com/agentscope-ai/CoPaw/issues/6601)

4. **#6667** (5 comentários) — Bug: DeepSeek thinking mode falha em multi-turn por `reasoning_content` ausente após formatação OpenAI pular ThinkingBlock. [Link](https://github.com/agentscope-ai/CoPaw/issues/6667)

5. **#6700** (3 comentários) — Bug: Saídas massivas de ferramentas causam congelamento ao recarregar sessão no console web. [Link](https://github.com/agentscope-ai/CoPaw/issues/6700)

### Análise de demandas

- **Canais de comunicação**: Usuários requestam resiliência em Matrix/DingTalk/Feishu com retry e health checks (#6684).
- **Estabilidade em sessões longas**: Padrão recorrente de problemas comtool calls acumulados, contexto estourado e sessões travadas.
- **Compatibilidade AgentScope**: Issue #6612 evidencia quebra de API com agentscope 2.0.4.post1 — possivelmente prioritária para próxima release.

---

## 5. Bugs e Estabilidade

### Bugs críticos (severidade alta)

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| #6601 | QwenPaw não reporta resposta vazia em sessões longas | 🔴 Alta | Aberta | [Issue #6601](https://github.com/agentscope-ai/CoPaw/issues/6601) |
| #6768 | Agent entra em loop infinito após completar tarefa multi-step | 🔴 Alta | Aberta | [Issue #6768](https://github.com/agentscope-ai/CoPaw/issues/6768) |
| #6726 | Sessão longa com много tool calls falha com 400 | 🔴 Alta | Aberta | [Issue #6726](https://github.com/agentscope-ai/CoPaw/issues/6726) |
| #6700 | Tool outputs massivos causam freeze no console | 🔴 Alta | Fechada | [Issue #6700](https://github.com/agentscope-ai/CoPaw/issues/6700) |
| #6612 | Incompatibilidade com agentscope 2.0.4.post1 causa crashes | 🔴 Alta | Aberta | [Issue #6612](https://github.com/agentscope-ai/CoPaw/issues/6612) |

### Bugs médios/baixos (recentemente fechados)

| # | Título | Link |
|---|--------|------|
| #6476 | Matrix E2E encryption não funciona (requer libolm) | [Issue #6476](https://github.com/agentscope-ai/CoPaw/issues/6476) |
| #6756 | `run_tool_batch` sempre falha com "No toolkit available" | [Issue #6756](https://github.com/agentscope-ai/CoPaw/issues/6756) |
| #6762 | Comandos shell longos transbordam no CodeMirror (beta 2.1.0b1) | [Issue #6762](https://github.com/agentscope-ai/CoPaw/issues/6762) |
| #6698 | Browser SDK falha com WireProtocolError em sessão isolada Playwright | [Issue #6698](https://github.com/agentscope-ai/CoPaw/issues/6698) |
| #6557 | Nomes de ferramentas MCP iniciando com `-` causam erro 400 em LLMs estritos | [Issue #6557](https://github.com/agentscope-ai/CoPaw/issues/6557) |

**Observação**: Padrão de regressões em funcionalidades de tooling e MCP, especialmente na beta 2.1.0b1. Recomenda-se atenção redobrada aos testes de integração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda

| # | Título | Área | Relevância | Link |
|---|--------|------|------------|------|
| #6770 | Configurar lifetime de abas Chrome entre ciclos de resposta | Browser SDK | UX | [Issue #6770](https://github.com/agentscope-ai/CoPaw/issues/6770) |
| #6765 | Adicionar outros idiomas europeus (ex.: Húngaro) | i18n | UX | [Issue #6765](https://github.com/agentscope-ai/CoPaw/issues/6765) |
| #6761 | Suporte à especificação MCP 2026-07-28 (stateless)? | MCP | Compatibilidade | [Issue #6761](https://github.com/agentscope-ai/CoPaw/issues/6761) |
| #6724 | Timeout configurável por chamada MCP tool | MCP | Estabilidade | [Issue #6724](https://github.com/agentscope-ai/CoPaw/issues/6724) |
| #6728 | Prompts de aprovação WeChat devem suportar ações em chinês | WeChat | i18n | [Issue #6728](https://github.com/agentscope-ai/CoPaw/issues/6728) |
| #6659 | Implementar fallback de modelo com mecanismo de cooldown | Providers | Resiliência | [PR #6659](https://github.com/agentscope-ai/CoPaw/pull/6659) |

### Sinais de roadmap

- **Suporte MCP stateless**: A issue #6761 questiona compatibilidade com a nova especificação MCP (2026-07-28), que quebra o handshake stateful. Resposta da comunidade pode direcionar prioridades.
- **Embedding/ReMe**: PRs #6772 e #6771 indicam foco em configurar e documentar modelos de embedding — possível destaque na 2.1.0.
- **Fallback de provedores**: PR #6659 implementa failover automático entre modelos quando há rate limits/timeouts — feature aguardada (references a issues antigas #2199, #1327, #2089).

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

1. **Sessões longas perdem responsividade** — Usuários relatam que em conversas extensas com muitas tool calls, o agente para de responder, retorna vazio, ou congela a interface. Cenários típicos: agentes fazendo múltiplas chamadas REST API, busca recursiva em workspaces.

2. **Ferramentas MCP falham periodicamente** — Após algumas horas, MCP tools simplesmente param de funcionar e exigem restart do container Docker. Provável vazamento de conexão ou sessão.

3. **Compatibilidade com AgentScope** — Instalação conjunta com agentscope 2.0.4.post1 quebra subsistema proativo/memória. Usuários presos em versões anteriores.

4. **Data/hora em跨天会话** — Agente confunde dia da semana em conversas que atravessam a meia-noite, resultando em agendamentos errados.

### Cenários de uso evidenciados

- **Uso corporativo**: Agentes emMatrix/DingTalk/WeChat para automação de comunicação
- **Desktop**: Usuários Windows11 com QwenPaw Desktop para tarefas locais
- **Browser automation**: Playwright SDK para web scraping e automação
- **Multi-turn reasoning**: DeepSeek com thinking mode para tarefas complexas

### Satisfação/Insatisfação

- **Positivo**: Console web, suporte a múltiplos canais, integração com agentescope
- **Negativo**: Bugs de estabilidade em sessões longas, falta de timeout em MCP, falhas de E2E encryption em Matrix

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resposta significativa

| # | Título | Criado | Comentários | Link |
|---|--------|--------|-------------|------|
| #2199 | Model fallback/rate limit handling | ~2025 | Referenciado em PR #6659 | [Issue #2199](https://github.com/agentscope-ai/CoPaw/issues/2199) |
| #1327 | Provider failover mechanism | ~2025 | idem | [Issue #1327](https://github.com/agentscope-ai/CoPaw/issues/1327) |
| #2089 | Automatic model switching on failure | ~2025 | idem | [Issue #2089](https://github.com/agentscope-ai/CoPaw/issues/2089) |

### Issues críticas em aberto

| # | Título | Link |
|---|--------|------|
| #6612 | Compatibilidade com agentscope 2.0.4.post1 | [Issue #6612](https://github.com/agentscope-ai/CoPaw/issues/6612) |
| #6768 | Loop infinito após tarefa multi-step | [Issue #6768](https://github.com/agentscope-ai/CoPaw/issues/6768) |
| #6755 | Confusão de data/semana em跨天会话 | [Issue #6755](https://github.com/agentscope-ai/CoPaw/issues/6755) |
| #6761 | Suporte MCP stateless 2026-07-28 | [Issue #6761](https://github.com/agentscope-ai/CoPaw/issues/6761) |

---

## Saúde Geral do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| At

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-08-07

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta alta atividade de desenvolvimento com 50 PRs e 23 issues atualizados nas últimas 24h. Não há lançamentos novos — a release mais recente permanece em 0.8.3. A atividade concentra-se em RFCs de governança e arquitetura (especialmente o tracker #6808 com 19 comentários), correções de bugs críticos no runtime e CLI, além de debates intensos sobre segurança (XOR cipher foi corrigido). O ritmo de merge está saudável com 5 PRs fechados, mas 45 PRs permanecem abertos demandando revisão.

---

## 2. Lançamentos

**Nenhum lançamento nas últimas 24h.**

O tracker de estabilização da v0.8.5 (#9459) está em curso com freeze de intake desde 04/08 e data-alvo em 30/08/2026. A v0.9.0 é o próximo grande marco com foco em auth, segurança e breaking changes (#7432).

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (5 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | **fix(runtime): stop per-iteration tool-schema deep clones** | Correção crítica de performance — eliminava clones redundantes no loop do agente por provedor, alinhando schemas MCP/skills ao padrão canônico |
| [#9704](https://github.com/zeroclaw-labs/zeroclaw/pull/9704) | **fix(cli): make cron add help examples run as printed** | Correção de DX — exemplos de CLI que falhavam agora executam corretamente |
| [#9201](https://github.com/zeroclaw-labs/zeroclaw/pull/9201) | **fix(runtime): harden dormant shared iteration reservation** | Correção de segurança atômica — previne overdraw de `ToolLoop.shared_budget` com `fetch_update` verificado |
| [#9200](https://github.com/zeroclaw-labs/zeroclaw/pull/9200) | **feat(providers): add Atlas Cloud model provider** | Adiciona Atlas Cloud como provedor OpenAI-compatível na slot canônica `atlascloud` |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) | **refactor(zerocode): derive slash commands from shared command catalogue** | Refatoração de tamanho L — padroniza derivação de slash commands via `zeroclaw-commands::BUILTIN_COMMANDS` |

### Destaque de Funcionalidade

O PR [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) introduz `DagPlanExecuteTool` para planejamento e execução de DAGs multi-step, suportando ordenação sequencial, paralelização baseada em dependências e definições template-based.

---

## 4. Temas Quentes da Comunidade

### RFCs com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|-------|--------|-------------|--------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 19 | Governança — automação de filas de trabalho |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs | 11 | Processo decisório de mantenedores |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker config during ownership migration | 11 | Migração de configuração em ZeroCode |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance e conversation binding para agent turns | 10 | Arquitetura de ciclo de vida de agentes |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC: Per-model capability & context-window config | 8 | Configuração de capacidades por modelo |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp `allowed_groups` as permit-none | 7 | **Segurança** — default inseguro no WhatsApp Web |

### Análise de Demandas

Há uma tendência clara de investimento em **governança e processos**: os três primeiros RFCs mais comentados tratam de como organizar trabalho, decisões e labels. Simultaneamente, há forte pressão por **segurança** (WhatsApp #9397, allowed_commands #9566). A comunidade demonstra maturidade em querer formalizar processos antes de escalar.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (hoje)

| Severity | Issue | Descrição | Status |
|----------|-------|-----------|--------|
| **S1 - CRITICAL** | [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) | **XOR cipher fornece criptografia fake para secrets armazenados (CWE-327)** | ✅ CLOSED |
| **S2 - Degraded** | [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | SOP.toml malformado é silenciosamente ignorado — `sop list` omite e `sop validate` reporta sucesso | OPEN |
| **S2 - Degraded** | [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | `finish_run` descarta reason de falha — runs falhados sem causa registrada | OPEN |
| **S2 - Degraded** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | SOPs cron-triggered não conseguem trabalho de rede | OPEN |
| **S2 - Degraded** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` default não é aplicado — SOPs nunca carregam | OPEN |
| **S2 - Degraded** | [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | SOP multi-step marcado failed sem evento de auditoria | OPEN |
| **S2 - Degraded** | [#9789](https://github.com/zeroclaw-labs/zeroclaw/issues/9789) | Logs de daemon OpenRC não respeitam política de bound | OPEN |
| **S2 - Degraded** | [#9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | Git channel: peer allowlist vazio dropa todos os eventos silenciosamente | OPEN |

### Bugs Corrigidos

- **#9672** (CLOSED): Exemplos de `cron add` no CLI help não executavam
- **#9566** (CLOSED): `allowed_commands` com maiúsculas nunca fazia match em Unix (regressão de #4552)

### Observação

A prevalência de bugs SOP (3 issues) indica que o subsistema SOP ainda está em maturação com problemas de validação, auditoria e carregamento silencioso de erros.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Domínio | Prioridade |
|-------|---------|---------|------------|
| [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) | Reportar dialeto de shell ativo no system prompt | runtime | P2 |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | Validação de SOP.toml com feedback de erro | SOP | S2 |
| [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) | Suporte a Kimi Code provider (Moonshot separado) | provider | enhancement |

### PRs de Feature em Progresso

| PR | Feature | Status |
|----|---------|--------|
| [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | `dag_plan_execute` tool para planejamento DAG | OPEN, size L |
| [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) | Grok Build ACP model provider | OPEN, size L |
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | Enforce agent policy em pipelines | OPEN, size M |
| [#9741](https://github.com/zeroclaw-labs/zeroclaw/pull/9741) | CI: validar canonical all-features image | OPEN, size M |

### Sinais de Roadmap

1. **v0.8.5** (30/08/2026): Estabilização corrente
2. **v0.9.0**: Auth overhaul, segurança gateway, A2A/multi-agent boundaries, breaking changes
3. **DAG Planning**: Ferramenta para orchestration de tasks em grafo
4. **Provider Expansion**: Grok Build e Atlas Cloud em pipeline de merge

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Impacto | Fonte |
|----------|---------|-------|
| Exemplos de CLI quebrados (`cron add`) | Usuários não conseguem usar funcionalidades documentadas | [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) |
| Configuração `sops_dir` não funciona por default | SOPs nunca carregam sem configuração manual | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) |
| SOP.toml malformado sem feedback | Usuários não sabem por que SOP não aparece | [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) |
| `allowed_commands` maiúsculas silenciosamente negadas | Segurança parecer funcionar mas bloqueia comandos | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) |
| KIMI Code provider request | Usuário com assinatura não consegue usar ZeroClaw | [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) |

### Padrões de Insatisfação

1. **Silent Failures**: Múltiplos bugs reportam comportamento que falha sem mensagem — SOPs não carregam, eventos dropados, comandos negados sem aviso. Isso erode trust.
2. **DX de CLI**: Exemplos que não executam como documentado criam fricção imediata.
3. **Segurança Opaca**: Configurações de segurança que "funcionam" mas na verdade negam silenciosamente geram falsa sensação de controle.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Overdue

| Issue | Tempo | Prioridade | Problema |
|-------|-------|------------|----------|
| [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) | ~6 meses | enhancement | Kimi Code provider — autor aguardando |
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | 1 dia | P1 | SOPs cron-triggered sem network capability — bloqueia caso de uso |
| [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | 1 dia | S2 | `finish_run` descarta reason — impede debugging |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | 1 dia | S2 | Falha de SOP sem auditoria — compliance issue |
| [#9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | 1 dia | S2 | Git channel dropando eventos no DEBUG — production invisível |

### PRs Parados com `needs-author-action`

| PR | Aguardando | Impacto |
|----|------------|---------|
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | Author | Token accounting em history-trim (P1) |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | Author | Fix Nova 2 prompt caching (P1) |
| [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | Author | DAG plan execute tool (P2) |
| [#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) | Author | Persist failed turn transcripts (P1) |

---

## Métricas Consolidada

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 19 | 🟢 Estável |
| PRs abertos | 45 | 🟡 Alto |
| PRs fechados (24h) | 5 | 🟢 Saudável |
| Releases | 0 | 🟡 Aguardando v0.8.5 |
| Bugs críticos abertos | 0 | 🟢 Resolvido (#1) |
| RFCs ativas | 10+ | 🔴 Alta demanda |
| PRs aguardando author | 4 | 🟡 Follow-up necessário |

---

*Relatório gerado em 2026-08-07 com dados de github.com/zeroclaw-labs/zeroclaw*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*