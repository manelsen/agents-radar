# Resumo diário do ecossistema de agentes de IA 2026-07-16

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-15 20:54 UTC

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

**Data de referência:** 2026-07-16
**Projetos analisados:** NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw (NullClaw como baseline inativa)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **forte Vitalidade Geral** em 16 de julho de 2026, com cinco dos seis projetos ativos em sprints intensos de desenvolvimento. A principal narrativa do dia é a **corrida pela maturidade empresarial**: enquanto ZeroClaw acaba de cortar a v0.8.3 com destaque para segurança e WASM, NanoBot encerra uma auditoria de segurança massiva de 42 findings, e IronClaw conduz o quarto ciclo de bug-bash QA de uma série sobre extension lifecycle. O denominador comum é a transição de projetos "MVP-ready" para "production-grade", evidenciada pela prevalência de issues de estabilidade, segurança e UX desktop. PicoClaw é o projeto com menor atividade, indicando possivelmente um ciclo de release mais conservador ou equipe reduzida.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | Issues Fechadas (24h) | PRs Abertos | PRs Merged (24h) | Releases | Avaliação de Saúde |
|---------|:---------------:|:----------------------:|:------------:|:------------------:|:---------:|:-------------------|
| **NanoBot** | 3 | 21 | 15 | 11 | 0 | 🟢 Estável — saúde excelente |
| **Hermes Agent** | 18 | 32 | 49 | 1 | 0 | 🟡 Produtivo — alto volume, baixo merge rate |
| **PicoClaw** | 3 | 0 | 3 | 0 | 0 | 🔴 Baixa atividade — estagnação |
| **IronClaw** | ~15 | ~10 | ~20 | 12 | 0 | 🟢 Muito ativo — foco em qualidade |
| **CoPaw** | 18 | 32 | ~21 | 22 | 0 | 🟢 Equilibrado — alta resolução |
| **ZeroClaw** | 10 | 1 | 49 | 1 | 1 (v0.8.3) | 🟡 Misto — release recente, mas 2 S1 bugs |

**Tabela de Severidade Crítica**

| Projeto | P1/S1 | P2/S2 | Bugs Críticos em Aberto |
|---------|:-----:|:-----:|:------------------------|
| NanoBot | 0 | 1 | unifiedSession heartbeat routing |
| Hermes Agent | 0 | 2 | Docker dashboard, Codex compression |
| PicoClaw | 0 | 2 | Launcher ARM64, hook de procesamiento |
| IronClaw | 0 | 1 | Mensagens rejeitadas "busy" |
| CoPaw | 2 | 2 | Memory leak (48GB+), execution error persistente |
| ZeroClaw | 2 | 3 | browser_open hang, pgvector panic |

---

## 3. Posicionamento do Projeto Principal (NanoBot)

NanoBot emerge como **referência de maturidade técnica** dentro do ecossistema analisado. Suas principais vantagens competitiva são:

**Segurança** — A auditoria completada por hamb1y (#4815), que gerou 42 findings e endereçou 21 bugs em 24 horas incluindo 4 vulnerabilidades críticas de bypass de autorização, posiciona o projeto como o único com processo formal de segurança documentado. Os concorrentes ZeroClaw (RFC de audit pipeline sem uso em produção) e Hermes Agent (PRs de segurança em revisão há 10 dias) estão atrás neste quesito.

**Razão de resolução** — Com 88% das issues fechadas em um único dia (21/24) e 11 PRs mergeados em 24 horas, NanoBot demonstra o melhor throughput de correção do ecossistema. Em contraste, Hermes Agent abriu 50 PRs mas mergeou apenas 1, sugerindo gargalo de review ou processos mais lentos.

**Arquitetura modular** — A centralização de persistência (#4918) e channels self-contained (#4908) indicam preparação para um modelo de plugin ecosystem que IronClaw e CoPaw estão perseguindo de forma menos estruturada.

**Diferenças técnicas de destaque:**
- É o único projeto com isolamento explícito de ExecSessionManager por AgentLoop
- Trata reasoning content de modelos Qwen como bug de UX (exposição não intencional)
- O único com feature flag explícita de "unified session mode"

**Tamanho de comunidade:** Medido por volume de issues/PRs (24+26 = 50 eventos em 24h), NanoBot compete em escala com Hermes Agent e CoPaw, porém com eficiência de resolução significativamente superior.

---

## 4. Focos Técnicos Compartilhados

Seis necessidades técnicas aparecem transversalmente em múltiplos projetos, indicando dores genuínas do domínio:

| Necessidade | Projetos Afetados | Manifestação |
|-------------|-------------------|--------------|
| **Segurança de autorização em multi-usuário** | NanoBot, Hermes Agent, IronClaw | Bypass de `/restart`, `/stop`, `process_direct()`; roles privilegiados em histórico; channel-level auth |
| **Gerenciamento de sessão/memória** | NanoBot, CoPaw, ZeroClaw, IronClaw | Perda de workspace_scope, memory leak 48GB+, FilesystemSessionThreadService race, context-window cache stale |
| **Estabilidade de runtime/loop** | CoPaw, ZeroClaw, NanoBot | Doom loop detection, browser_open hanging, subprocess unbounded wait, multimodal data crash |
| **Model routing e fallback** | Hermes Agent, IronClaw, CoPaw | Provider selection failure, fallback chain broken, Bedrock override ignorado, Codex compression timeout |
| **Integração enterprise/OAuth** | NanoBot, PicoClaw, IronClaw | Codex proxy config, OAuth login failures, G Suite sign-out, Notion refresh token |
| **UX Desktop e TUI** | IronClaw, CoPaw, ZeroClaw | Loading states ausentes, keyboard reliability, workspace shortcuts, terminal performance em sessões longas |

**Padrão emergente:** A convergência em segurança, sessão e model routing sugere que o ecossistema está resolvendo problemas de "fase 2" (produção, multi-usuário, enterprise) após ter resolvido problemas de "fase 1" (funcionalidade básica, canais, ferramentas).

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw | PicoClaw |
|----------|---------|--------------|----------|-------|----------|----------|
| **Foco primário** | Multi-channel + segurança | Voice + plugin ecosystem | Automação + approval gates | Desktop app + memory | Hardware + WASM | Gateway leve |
| **Arquitetura distintiva** | AgentLoop + ExecSessionManager isolado | Wake word local + MCP authorization | Reborn runtime + routines | Tauri desktop + ReMe | SOP engine + WASM plugin host | DeltaChat + DeltaMail |
| **Público-alvo primário** | DevOps/infra, enterprise multi-canal | Desenvolvedores voice-first | Equipes com automação com aprovação | Usuários desktop não-técnicos | Robótica/embarcado, desenvolvedores Rust | Self-hosted, ringan |
| **Maturidade de release** | Pré-release (estabilização) | Semanal/quinzenal | 0.29.1 (breaking) | Pré-release | v0.8.3 (maduro) | 0.3.1 (instável) |
| **Feature mais diferenciada** | Auditoria de segurança formal | Wake word "Hey Hermes" | Approval gates + per-user secrets | Chrome extension plugin | WASM plugin host + Git Forge | Bedrock prompt caching |
| **Barreira de entrada** | Média-alta | Média | Média-alta | Baixa (Tauri desktop) | Alta (Rust, embarcado) | Baixa |
| **Sinal de mercado** | Enterprise-ready | Voice/hands-free | B2B automation | Produtividade individual | Robótica/IoT | Edge/gateway |

**ZeroClaw** se diferencia por ser o único projeto com runtime em Rust e foco explícito em hardware embarcado e WASM — posicionando-se para o mercado IoT/robótica. **CoPaw** é o único com Chrome extension como feature oficial, sinalizando estratégia de expansão de canal. **IronClaw** tem o pipeline de QA mais maduro (4 bug-bashes documentados), enquanto **Hermes Agent** demonstra ambição de ecossistema de plugins mais extensível.

---

## 6. Tração e Maturidade da Comunidade

**Iteração rápida (sprints intensos):**
1. **NanoBot** — 11 PRs merged + 21 issues fechadas em 24h. Sinal de equipe pequena mas extremamente focada. A auditoria de hamb1y sozinha gerou mais atividade que a maioria dos projetos em uma semana.
2. **CoPaw** — 22 PRs merged em 24h com 32 issues fechadas. A taxa de resolução de 32/50 (64%) indica equipe responsiva e processo de triagem saudável.
3. **IronClaw** — 12 PRs mergeados com ciclo de bug-bash formalizado. A presença de 5 PRs de regressão tests em um único dia demonstra maturidade de engenharia.

**Consolidação de qualidade:**
1. **ZeroClaw** — v0.8.3 com 379 commits e 56 contribuidores demonstra base diversificada. Porém, 2 S1 bugs em produção e 0 👍 em issues ativas sugerem baixa gamificação do feedback.
2. **Hermes Agent** — 50 issues e 50 PRs indicam volume alto, mas apenas 1 PR mergeado em 24h sugere gargalo de review ou processo de merge conservative. A feature de wake word (#58539) parada há 12 dias sem merge é o exemplo mais visível.

**Estagnação:**
- **PicoClaw** — 6 issues, 3 PRs, 0 merges, 0 releases em 24h. A issue de Launcher ARM64 (#3260) aberta há 2 dias sem resposta coloca em dúvida a capacidade de manutenção do projeto.

**Engajamento comunitário (por reactions):**
| Projeto | 👍 Total em Issues Ativas | Observação |
|---------|:-------------------------:|------------|
| NanoBot | 0 | Comunicação via comentários, não reactions |
| Hermes Agent | 4 (2 issues) | Discussions ativas em plugin expansion |
| CoPaw | 4 (2 issues) | Knowledge base (#2969) e agent teams (#2922) |
| ZeroClaw | 0 | Baixa gamificação — possivelmente subestimado |
| IronClaw | 0 (documentado) | Processo formal substitui feedback reativo |

---

## 7. Sinais de Tendência

Extrapolando dos padrões de issues e PRs do dia, quatro tendências claras emergem do ecossistema:

**1. Enterprise readiness como diferencial competitivo**
NanoBot (auditoria de segurança + OAuth fix + Codex proxy), Hermes Agent (MCP authorization headers + auth replay protection), IronClaw (per-user secrets management + OAuth hygiene) e PicoClaw (OAuth login failures resolvidas) convergiram independentemente para investimentos em autenticação, autorização e conformidade corporativa. O mercado open source está amadurecendo além do "funciona no meu laptop".

**2. Extensibilidade via plugin ecosystems**
Três sinais independentes: (a) Hermes Agent tem issue de tracking #64182 com 11 comentários sobre expansão de interface de plugins; (b) CoPaw avança com Chrome extension (#6157) e Zulip channel (#2921); (c) ZeroClaw introduz WASM Plugin Host na v0.8.3. O modelo de monetização via plugins已开始 emergir — o PR #9082 do ZeroClaw foi fechado com sugestão de monetização de MCP server.

**3. Agentes multi-usuário e automação com gates humanos**
IronClaw está refinando approval gates e rotinas bloqueantes; Hermes Agent investe em per-subagent model override para delegation patterns; CoPaw tem issue ativa sobre leader agent não-delegando (#6136). A próxima fronteira é collaboration multi-agente com controle humano — não apenas single-user copilot.

**4. Diversificação de infraestrutura e canais**
A demanda por (a) deploy simplificado (NanoBot → Render, CoPaw → Chrome extension), (b) NAT traversal (ZeroClaw → zerorelay), (c) self-hosted tools (Hermes → markitdown, NanoBot → self-contained channels) e (d) sistemas operacionais alternativos (CoPaw → Kylin OS) indica que o ecossistema está se preparando para cenários de produção distribuídos onde lock-in em cloud providers é indesejado.

---

## Recomendação Executiva

| Stakeholder | Recomendação |
|-------------|-------------|
| **Desenvolvedores avaliando projetos** | NanoBot oferece o melhor equilíbrio de segurança + estabilidade + modularidade para implantações enterprise. ZeroClaw para casos de uso embarcado/Rust. CoPaw para entrada desktop mais acessível. |
| **Contribuidores open source** | IronClaw e NanoBot apresentam melhores oportunidades de impacto imediato (bugs bem triados + processo de merge funcional). Hermes Agent oferece espaço para features ambiciosas (voice, plugins) mas exige paciência com review cycles. |
| **Decisores de adoção em produção** | Aguardar releases formais em todos os projetos — nenhum publicou versão nas últimas 24h. ZeroClaw v0.8.3 é a release mais recente e madura. Priorizar projetos com processo de segurança formalizado. |

---

*Relatório gerado com base em dados de atividade do GitHub de 6 projetos em 2026-07-16. NullClaw utilizado como baseline inativa (0 atividade).*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot
**Data de referência:** 2026-07-16
**Repositório:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de manutenção corretiva em 16 de julho de 2026. Foram registradas 24 atualizações de issues (3 abertas, 21 fechadas) e 26 atualizações de PRs (15 abertos, 11 fechados/merged). O dia foi marcado pela **conclusão massiva de uma rodada de auditoria de segurança** conduzida pelo colaborador hamb1y, que resultou no fechamento de 21 issues de uma única vez — cobrindo vulnerabilidades de autorização, bugs de concorrência, code smells e oportunidades de refatoração. Simultaneamente, 5 PRs de alta prioridade (p1) foram merged, abordando regressões críticas no heartbeat, gateway shutdown e context overflow. Não houve releases formais hoje, indicando que o trabalho está focado em estabilização pré-release.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O repositório não publicou novas versões hoje. Este padrão é consistente com a fase atual de desenvolvimento, que concentra esforços em correções de bugs e refatorações antes de um próximo tag de release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (11 total)

| PR | Título | Prioridade | Impacto |
|----|--------|------------|---------|
| [#4944](https://github.com/HKUDS/nanobot/pull/4944) | fix(gateway): stop channels before draining tasks | p1 | Corrige regressão crítica — canais SDK como DingTalk Stream podem swallow exceptions durante shutdown se não forem parados antes do drain de tasks |
| [#4943](https://github.com/HKUDS/nanobot/pull/4943) | fix(providers): honor Codex proxy config consistently | p1 | Garante que configurações de proxy OAuth e requests HTTP do Codex sejam consistentes; resolve login failures em ambientes enterprise |
| [#4945](https://github.com/HKUDS/nanobot/pull/4945) | fix(agent): scope project instructions and trim default prompt | p1 | Melhora performance ao carregar AGENTS.md apenas do projeto efetivo; lazy-load de skills e redução de scaffolding desnecessário no system prompt |
| [#4941](https://github.com/HKUDS/nanobot/pull/4941) | fix(session): fall back to legacy paths in metadata reads | p1 | Resolve perda de workspace_scope após restart para sessões legadas; garante backward compatibility |
| [#4649](https://github.com/HKUDS/nanobot/pull/4649) | fix(webui): correct activity timer duration | p2 | Corrige medição de duração "Working for..." — agora conta do início do turno do usuário |
| [#4870](https://github.com/HKUDS/nanobot/pull/4870) | Share channel markdown helpers | p2 | Extrai utilities compartilhados de markdown; elimina duplicação de 100-200 linhas entre telegram.py, signal.py e feishu.py |
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | fix(loop): guard .strip() on msg.content against list-form multimodal data | p1 | Corrige crash (AttributeError) quando canais entregam conteúdo multimodal (list-form) em vez de string |
| [#4926](https://github.com/HKUDS/nanobot/pull/4926) | include Feishu SDK in dev dependencies | — | Corrige setup de desenvolvimento local; testes Feishu falhavam sem lark-oapi |

### Avanços Estratégicos

- **Isolamento de sessões de execução (#4862):** Cada AgentLoop agora possui seu próprio ExecSessionManager, eliminando visibilidade cruzada de dados entre sessões — um risco de segurança e estabilidade resolvido.
- **Centralização de persistência de config (#4918):** Introduz `FileConfigRepository` para ownership claro de reads/writes de configuração, separando config raw de effective config.
- **Correção de vulnerabilidades críticas:** Os 4 PRs de segurança do audit (#4776, #4777, #4778, #4779) foram integrados, abordando bypass de autorização no `/restart`, `/stop`, `process_direct()` e canal `system`.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção (por comentários/reações)

| Issue | Título | Status | Comentários | Tema |
|-------|--------|--------|-------------|------|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | `cli/commands.py:_pick_heartbeat_target_from_sessions` fails when `unifiedSession: true` | OPEN | 4 | Bug em unified session mode |
| [#4779](https://github.com/HKUDS/nanobot/issues/4779) | Security: process_direct() bypasses all channel-level authorization — 6+ callers | CLOSED | 2 | Vulnerabilidade de autorização |
| [#4778](https://github.com/HKUDS/nanobot/issues/4778) | Security: 'system' channel messages bypass all authorization | CLOSED | 2 | Bypass de autorização via canal system |
| [#4777](https://github.com/HKUDS/nanobot/issues/4777) | Security: /stop command cancels other users' tasks | CLOSED | 2 | Escalação de privilégios em group chats |
| [#4776](https://github.com/HKUDS/nanobot/issues/4776) | Security: /restart command has zero authorization — any paired user can DoS | CLOSED | 2 | DoS via comando sem auth |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen models expose thinking/reasoning content in chat responses | OPEN | 1 | Bug em provider Qwen/DashScope |
| [#4940](https://github.com/HKUDS/nanobot/issues/4940) | read_session_metadata() lacks legacy filename fallback | OPEN | 0 | Metadata loss em sessions legadas |

### Análise de Demandas

**Preocupação dominante: Segurança.** A auditoria profunda de hamb1y (#4815) gerou 42 findings, dos quais uma parcela significativa já foi addressed via PRs merged. As 4 vulnerabilidades de autorização (#4776-#4779) atraíram讨论 substancial, indicando que a comunidade reconhece riscos em cenários multi-usuário e group chat.

**Bug crítico em unified session:** A issue #4924 com 4 comentários é a mais discutida hoje — usuários reportam falha em routing de heartbeat quando `unifiedSession: true` está habilitado. O PR #4928 já propõe a correção, mas está em revisão.

**Preocupação com providers Qwen:** A issue #4934 reporta que modelos Qwen 3.x (qwen3.6-flash, qwen3.5-plus) vazam conteúdo de reasoning/thinking para usuários finais. O PR #4946 foi rapidamente aberto para adicionar controle de reasoning content.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (3 issues)

| Bug | Severidade | Descrição |
|-----|------------|-----------|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | **Alta** | `_pick_heartbeat_target_from_sessions` falha quando há uma única "unified" session — heartbeat não é entregue corretamente |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | **Alta** | Modelos Qwen expõem conteúdo de reasoning/thinking no chat response; impacto em UX e latência |
| [#4940](https://github.com/HKUDS/nanobot/issues/4940) | **Média** | `read_session_metadata()` não faz fallback para filenames legados — `workspace_scope` perdido após restart |

### Bugs Fechados Hoje (21 issues — lote de auditoria)

A maioria dos bugs fechados fazia parte do audit #4815. Principais categorias:

| Categoria | Count | Exemplos |
|-----------|-------|----------|
| **Segurança (authorization bypass)** | 4 | #4776, #4777, #4778, #4779 |
| **Concurrency bugs** | 2 | #4789 (WeakValueDictionary GC issue), #4793 (singleton shared across loops) |
| **Logic bugs** | 5 | #4800 (.strip() crash), #4802 (spurious 128 token budget), #4799 (cache signature "None") |
| **Data integrity** | 3 | #4082 (cron job session reuse), #4056 (context trimming drops assistant question), #4062 (WebSocket drops proactive messages) |
| **Config/runtime** | 2 | #4067 (silent fallback to defaults), #4940 (legacy path fallback — reaberta como #4941) |
| **Refactoring/dead code** | 4 | #4807-#4810 |
| **Feature gaps** | 2 | #4075 (Dream overwrite), #4076 (message tool outbound auth) |

### Status de Estabilidade

**Tendencia positiva.** A resolução coordenada de 21 issues de uma só vez representa eliminação massiva de dívida técnica. A equipe demonstrou capacidade de abordar vulnerabilidades de segurança (4 issues p1) simultaneamente com bugs de estabilidade. Nenhum novo crash ou regressão foi reportado hoje — o volume de atividade é de manutenção proativa.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com features

| PR | Título | Prioridade | Estratégia |
|----|--------|------------|------------|
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | One-click Deploy to Render support | p2 | Adiciona Render Blueprint para deploy simplificado; gateway + WebUI como serviço único |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram: custom Bot API base URL and extra headers | p2 | Suporte a Bot API server auto-hospedado ou enterprise gateway |
| [#4621](https://github.com/HKUDS/nanobot/pull/4621) | Memory: gate archive facts with provenance context | — | Melhora dedup e correção de fatos no Consolidator archive |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | Add heartbeat trigger command | — | CLI `nanobot heartbeat trigger` com dry-run e options |
| [#4942](https://github.com/HKUDS/nanobot/pull/4942) | Let agents manage session-local triggers | — | Nova ferramenta `local_trigger` para criação/runtime de triggers por conversa |
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) | Make built-in channels self-contained | p1 | Channels como pacotes independentes sob `nanobot/channels/<channel>/` |
| [#4918](https://github.com/HKUDS/nanobot/pull/4918) | Centralize file persistence in a repository | p1 | `FileConfigRepository` como owner de config; separado persisted/raw de effective |
| [#4925](https://github.com/HKUDS/nanobot/pull/4925) | Reprompt on hard context overflow | p1 | Pre-flight de budget + re-prompt sem tools quando contexto excede limite |

### Sinais de Roadmap

1. **Infraestrutura de deployment:** Suporte a Render (#4937) indica foco em DX e reduz barrier to entry para novos usuários
2. **Enterprise readiness:** Custom Bot API URL (#4919) e Codex proxy fix (#4943) mostram investment em ambientes corporativos
3. **Agente autonomy:** Local triggers (#4942) e heartbeat trigger command (#4620) expandem capacidades de automação
4. **Modularização:** Self-contained channels (#4908) e config centralization (#4918) são refactors arquiteturais que，很可能 preparam terreno para plugin ecosystem

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**1. Unificação de sessions causa comportamento inesperado**
> "When there are no sessions, but a single 'unified' session, `_pick_heartbeat_target_from_sessions` fails to select the appropriate target."

Usuários com `unifiedSession: true` reportam que heartbeat e routing falham silenciosamente. Cenário: gateway restart com session vazia, então habilitação de unified session.

**2. Modelos Qwen vazam thinking content**
> "When using Qwen models (like `qwen3.6-flash`) via DashScope provider, the model's thinking/reasoning content is incorrectly exposed in the chat response"

Usuários de modelos Qwen 3.x reportam respostas verbosas e lentas quando só querem a resposta final. O reasoning mode híbrido está ativo por default.

**3. Perda de workspace_scope após restart**
> "Sessions created with the legacy filename format... are correctly listed in the WebUI sidebar, but their `workspace_scope` metadata is silently lost after restarting nanobot."

Usuários que tinham sessões legadas experimentam perda de contexto de projeto após update/restart.

### Cenários de Uso Observados

- **Group chat multi-usuário:** Descobertos como vetor de escalação através de `/stop` e `/restart` sem auth — vulnerabilidades corrigidas
- **Enterprise deployment:** Necessidade de proxy customizado, Bot API self-hosted, e config centralizada
- **Automação via heartbeat/cron:** Cenários proativos onde WebSocket drops mensagens quando não há subscriber conectado — bug corrigido (#4062)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Progresso

| Issue | Título | Criação | Status | Prioridade |
|-------|--------|---------|--------|------------|
| [#4815](https://github.com/HKUDS/nanobot/issues/4815) | Audit summary: 42 security/bug/refactor findings | 2026-07-06 | CLOSED | Crítica |
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | `_pick_heartbeat_target_from_sessions` fails with unifiedSession | 2026-07-14 | OPEN | Alta |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen models expose thinking content | 2026-07-14 | OPEN | Alta |
| [#4940](https://github.com/HKUDS/nanobot/issues/4940) | read_session_metadata() lacks legacy filename fallback | 2026-07-15 | OPEN | Média |
| [#4918](https://github.com/HKUDS/nanobot/issues/4918) | PR with conflicts: centralize file persistence | 2026-07-14 | OPEN (conflict) | Alta |
| [#4822](https://github.com/HKUDS/nanobot/issues/4822) | PR with conflicts: preserve automation source | 2026-07-07 | OPEN (conflict) | Alta |

### Issues Antigas Ainda Não Respondidas (pré-audit)

Nenhuma issue pré-06/jul permanece completamente sem resposta. A auditoria massiva (#4815) abordou o backlog antigo. As 3 issues abertas atuais (#4924, #4934, #4940) foram todas criadas nos últimos 2 dias e já têm PRs associados em revisão.

### Conflitos de PRs que Precisam Resolução

| PR | Bloqueio | Ação Necessária |
|----|----------|-----------------|
| [#4918](https://github.com/HKUDS/nanobot/pull/4918) | Conflito de merge | Rebase/merge resolution — change ownership de config persistence |
| [#4822](https://github.com/HKUDS/nanobot/pull/4822) | Conflito de merge | Rebase — preserva automation source metadata no WebUI |

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Volume de issues fechadas/abertas | 21/3 (88% fechado) | ✅ Positiva |
| PRs merged | 8 em 24h | ✅ Alta productivity |
| Vulnerabilidades críticas | 4 addressadas hoje | ✅ Progresso em segurança

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-16

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta alta atividade de manutenção no dia de hoje, com 50 issues e 50 PRs atualizados nas últimas 24h. Nenhum lançamento de versão foi realizado, e a grande maioria das atividades consiste em resolução de bugs e pequenas melhorias. A distribuição de issues fechadas (32) versus abertas (18) indica um fluxo saudável de triagem, enquanto 49 dos 50 PRs permanecem abertos — sinalizando que há substancial trabalho em revisão. A quantidade de issues com标签 de segurança ("risk-security-boundary", "risk-message-delivery") sugere que a equipe está ativamente reforçando a robustez do sistema, especialmente em componentes críticos como gateway e ferramentas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. Isso é consistente com o padrão observado de que o ciclo de releases provavelmente ocorre em cadência semanal ou quinzenal, enquanto o foco atual está na preparação de patches e melhorias que podem compor uma futura release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Autor | Componente | Impacto |
|----|-------|------------|---------|
| [#65203](https://github.com/NousResearch/hermes-agent/pull/65203) | paul-cch | plugins (photon) | Reforça retries em envios standalone do Photon, tratando falhas transitórias de sidecar e errors de conexão HTTP |

Este é o único PR fechado hoje, focado em resiliência de entrega de mensagens. A ausência de mais merges pode indicar que a equipe está em processo de code review ou que o ciclo de merge é menos frequente que a abertura de PRs.

### PRs Abertos em Destaque

- [#58539](https://github.com/NousResearch/hermes-agent/pull/58539) — **feat(voice): "Hey Hermes" wake word** — Integração de wake word local para CLI, TUI e desktop. Este é um PR maduro e significativo para usabilidade hands-free.
- [#59586](https://github.com/NousResearch/hermes-agent/pull/59586) — **feat(mcp): Authorization header para MCPs com api_key** — Melhora segurança e compatibilidade com MCPs HTTP autenticados.
- [#59550](https://github.com/NousResearch/hermes-agent/pull/59550) — **fix(api-server): rejeita roles privilegiados em histórico fornecido pelo chamador** — Correlação de segurança importante.
- [#59540](https://github.com/NousResearch/hermes-agent/pull/59540) — **feat(security): adiciona padrões de abuso de ferramentas ao skills guard** — Proteção contra exfiltração, destruição e bypass de segurança.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Tipo | Comentários | 👍 | Tema Principal |
|-------|------|-------------|----|----------------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | Feature | 11 | 0 | Plugin Interface Expansion — plano comunitário para expandir interface de plugins |
| [#59113](https://github.com/NousResearch/hermes-agent/issues/59113) | Bug | 8 | 2 | Dashboard não funciona em Docker sem auth built-in |
| [#58731](https://github.com/NousResearch/hermes-agent/issues/58731) | Feature | 5 | 0 | Override de modelo por subagente no delegate_task |
| [#58688](https://github.com/NousResearch/hermes-agent/issues/58688) | Bug | 5 | 0 | Desktop model selector ignora provider personalizado, usa OpenRouter |
| [#59499](https://github.com/NousResearch/hermes-agent/issues/59499) | Bug | 4 | 0 | Kanban dispatcher ignora max_in_progress, causa exaustão de recursos |
| [#62452](https://github.com/NousResearch/hermes-agent/issues/62452) | Bug | 2 | 2 | Compressão Codex de longo contexto dá timeout; fallback herda deadline insuficiente |

**Análise dos Temas:**

1. **Expansão de Interface de Plugins (#64182)** — Com 11 comentários, esta é a issue mais discutida. A comunidade está ativamente propondo ideias para expandir a interface de plugins, indicando demanda por um ecossistema mais extensível. A natureza colaborativa (distilled from Discord) mostra que o projeto valoriza input comunitário.

2. **Problemas com Docker e Auth (#59113)** — Bug significativo com 2 reactions, afetando implantações containerizadas onde auth externo (proxy reverso) é usado. A questão de 127.0.0.1 permanecer dentro do container é um problema de configuração comum.

3. **Model Routing e Fallbacks** — Várias issues (#[58731](https://github.com/NousResearch/hermes-agent/issues/58731), #[58688](https://github.com/NousResearch/hermes-agent/issues/58688), #[62452](https://github.com/NousResearch/hermes-agent/issues/62452)) convergem para o tema de seleção e fallback de modelos, evidenciando que esta é uma área de dor para usuários com configurações complexas.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos
*Nenhum P1 registrado nas últimas 24h.*

#### P2 — Altos
| Issue | Componente | Descrição | Status |
|-------|------------|-----------|--------|
| [#59113](https://github.com/NousResearch/hermes-agent/issues/59113) | dashboard, docker | Dashboard não funciona em Docker sem auth built-in | **ABERTA** |
| [#58688](https://github.com/NousResearch/hermes-agent/issues/58688) | desktop | Model selector usa OpenRouter вместо configured provider | FECHADA |
| [#59535](https://github.com/NousResearch/hermes-agent/issues/59535) | gateway, Mattermost | /approve interrompido por whitespace de autocomplete | FECHADA |
| [#59568](https://github.com/NousResearch/hermes-agent/issues/59568) | agent, MCP | Counter de retries nunca reseta em reconnect MCP | FECHADA |
| [#59593](https://github.com/NousResearch/hermes-agent/issues/59593) | agent, Bedrock | Fallback Opus→Sonnet falha com ValidationException | FECHADA |
| [#59560](https://github.com/NousResearch/hermes-agent/issues/59560) | desktop | custom_providers.models ignorado no seletor | FECHADA |
| [#62452](https://github.com/NousResearch/hermes-agent/issues/62452) | agent, Codex | Compressão long-context timeout; fallback herda deadline | **ABERTA** |
| [#59577](https://github.com/NousResearch/hermes-agent/issues/59577) | cron, dashboard | Scripts cron resolvem para home errado | PR aberto |

#### P3 — Médios
| Categoria | Quantidade | Exemplos |
|-----------|------------|----------|
| Desktop UI/UX | 6 | [#60039](https://github.com/NousResearch/hermes-agent/issues/60039) font size, [#59986](https://github.com/NousResearch/hermes-agent/issues/59986) sidebar visibility |
| Kanban/Cron | 3 | [#59499](https://github.com/NousResearch/hermes-agent/issues/59499) concurrency, [#55445](https://github.com/NousResearch/hermes-agent/issues/55445) rate-limit crash |
| Ferramentas | 2 | [#52382](https://github.com/NousResearch/hermes-agent/issues/52382) unknown toolsets warning, [#51578](https://github.com/NousResearch/hermes-agent/issues/51578) Qt6 apps |
| Memory/Plugins | 2 | [#59836](https://github.com/NousResearch/hermes-agent/issues/59836) Mnemosyne auto_sleep |

**Observação de Estabilidade:** A alta proporção de bugs P2 fechados (6 de 8) nas últimas 24h é positiva. Porém, a issue [#59113](https://github.com/NousResearch/hermes-agent/issues/59113) permanece aberta e tem 8 comentários — sugere complexidade ou necessidade de mais informação de reprodução.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| Issue/PR | Componente | Descrição | Sinais de Prioridade |
|----------|------------|-----------|----------------------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | plugins | Plugin Interface Expansion (tracking issue) | 11 comentários — alta demanda comunitária |
| [#65199](https://github.com/NousResearch/hermes-agent/issues/65199) | desktop | UX tabbed para Settings → Model (Defaults, Fallbacks, MoA) | UX improvement |
| [#65179](https://github.com/NousResearch/hermes-agent/issues/65179) | tools, web | markitdown como provider web_fetch self-hosted | Alternativa a provedores pagos |
| [#64271](https://github.com/NousResearch/hermes-agent/issues/64271) | agent, gateway | Credential pool rebind após auth switch | Sessões longas |
| [#58731](https://github.com/NousResearch/hermes-agent/issues/58731) | agent, tools | Per-subagent model override | Delegation patterns |
| [#59801](https://github.com/NousResearch/hermes-agent/issues/59801) | plugins, memory | Float16 semantic memory provider | Melhor recall semântico |

### Temas Recorrentes sugindo Roadmap

1. **Melhoria de Model Routing** — Issues sobre fallback chains, provider selection, e per-subagent routing indicam que a arquitetura atual de modelos está sendo estressada por casos de uso avançados.

2. **Desktop UX Maturity** — Várias requests de UX (#65199, #60039, #59943) sugerem que a interface desktop está em fase de refinamento pós-MVP.

3. **Voice/Hands-free** — O PR [#58539](https://github.com/NousResearch/hermes-agent/pull/58539) (wake word) está maduro, potencialmente marcando entrada em próxima release.

4. **Plugin Ecosystem** — A issue de tracking #64182 confirma que expansão de plugins é direção estratégica.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Configuração de providers é confusa** | Alta | Usuários não conseguem fazer custom providers funcionarem no desktop; fallback chains se comportam inesperadamente |
| **Deploy Docker requer trabalho extra** | Média | Dashboard e serviços não funcionam "out of the box" com proxy reverso |
| **Descoberta de features é ruim** | Média | Model selector mostra todos os providers mesmo sem API key configurada; cron hints aparecem no chat |
| **Recursos de longa execução falham silenciosamente** | Média | Fallback de modelo não notifica; reconnects de MCP nunca recuperam |
| **Desktop consome muitos recursos** | Baixa | Kanban dispatcher spawnea todas tasks, causando exaustão com Chrome MCP |

### Cenários de Uso Emergentes

1. **Multi-provider routing** — Usuários querem usar provedores diferentes para subagentes diferentes (master-worker pattern).
2. **Implantações enterprise** — Auth via proxy reverso, scripts cron em ambientes isolados.
3. **Análise de imagens** — Pedido para persistir caminhos de imagens em mensagens para re-análise.
4. **Self-hosted tools** — Demanda por alternativas locais a serviços pagos (markitdown para web_fetch).

### Indicadores de Satisfação

- 32 issues fechadas vs 18 abertas sugere responsividade da equipe.
- Vários bugs marcados "implemented-on-main" indicam que a equipe está推送 fixes rapidamente.
- Issues com标签 "needs-decision" ou "needs-repro" mostram que a triagem está ativa.

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Atribuição ou Progresso

| Issue | Idade | Comentários | Prioridade | Notas |
|-------|-------|-------------|------------|-------|
| [#52382](https://github.com/NousResearch/hermes-agent/issues/52382) | ~20 dias | 3 | P3 | "Unknown toolsets: messaging" warning sem migration — causa confusão mas tem workaround |
| [#62452](https://github.com/NousResearch/hermes-agent/issues/62452) | ~5 dias | 2 | P2 | Codex compression timeout — Needs repro, pode ser ambiente específico |
| [#64271](https://github.com/NousResearch/hermes-agent/issues/64271) | ~2 dias | 2 | P3 | Gateway credential pool rebind — Relevante para sessões longas |
| [#59113](https://github.com/NousResearch/hermes-agent/issues/59113) | ~11 dias | 8 | P2 | Docker dashboard — 8 comentários mas ainda aberta; pode precisar de mais contexto |

### PRs Abertos há Tempo

| PR | Idade | Prioridade | Notas |
|----|-------|------------|-------|
| [#59586](https://github.com/NousResearch/hermes-agent/pull/59586) | ~10 dias | P3 | MCP Authorization header — risco de compatibilidade e segurança |
| [#59550](https://github.com/NousResearch/hermes-agent/pull/59550) | ~10 dias | P3 | Security fix para roles privilegiados — precisa review prioritário |
| [#58539](https://github.com/NousResearch/hermes-agent/pull/58539) | ~12 dias | P3 | Wake word feature — feature grande, pode estar em review detalhado |

### Recomendações de Atenção

1. **[#59113](https://github.com/NousResearch/hermes-agent/issues/59113)** — Com 8 comentários e 11 dias, esta issue P2 pode estar estagnada. Recomenda-se solicitar reprodutibilidade mínima ou escalar para "needs-decision".

2. **[#52382](https://github.com/NousResearch/hermes-agent/issues/52382)** —尽管 P3, a warning persiste e causa fricção. Um simples script de migration ou warning mais amigável resolveria.

3. **[#58539](https://github.com/NousResearch/hermes-agent/pull/58539)** — Feature de wake word parece madura. Se não há blockers, poderia ser mergeada para a próxima release.

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 18 |
| Issues fechadas | 32 |
| PRs abertos | 49 |
| PRs fechados/merged | 1 |
| Novas releases | 0 |
| Issues P1 | 0 |
| Issues P2 (abertas) | 2 |
| Issues com标签 security | 3+ |
| Features em desenvolvimento | 8+ |

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent em 2026-07

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-16

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 16 de julho de 2026, com 6 issues e 3 pull requests atualizados nas últimas 24 horas. A taxa de resolução de issues permanece positiva — 3 bugs foram fechados, incluindo dois relacionados a problemas de autenticação OAuth com o Codex. No entanto, **nenhuma release foi publicada**, indicando que o ciclo de desenvolvimento atual pode estar em fase de revisão ou preparação. Três issues abertas requerem atenção prioritária, sendo duas relacionadas a bugs críticos (launcher ARM64 e hooks de processamento) e uma com demanda de feature para modo stateless.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se na versão 0.3.1 (git commit 2cf030d2), build datada de 2026-07-03. A ausência de releases recentes sugere foco em estabilidade ou preparação de um novo release candidate.

---

## 3. Progresso do Projeto

### PRs Abertos (3 total)

| # | Título | Autor | Atualizado | Tipo |
|---|--------|-------|------------|------|
| [#3259](https://github.com/sipeed/picoclaw/pull/3259) | Update PicoClaw description for parallelization | developerisnow | 2026-07-15 | Enhancement |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | 2026-07-15 | Refactoring |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): leverage Converse prompt caching via cache points | loafoe | 2026-07-14 | Feature |

**Destaque:** O PR #3222 representa um trabalho substancial de limpeza técnica (-200 LOC), removendo features legadas e simplificando a implementação do DeltaChat. O PR #3163 traz otimização de custos para usuários AWS Bedrock através de prompt caching.

**Nenhum PR foi merged ou fechado nas últimas 24 horas.**

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Status | Comentários | 👍 |
|---|--------|--------|-------------|-----|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text | CLOSED | 4 | 0 |
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex and antygravity oauth login not working | CLOSED | 2 | 0 |
| [#3196](https://github.com/sipeed/picoclaw/issues/3196) | Codex and antygravity oauth login not working | CLOSED | 2 | 0 |

**Análise:** A issue #3153 demonstra um bug crítico de segurança/integração com Volcengine Doubao, onde tool calls são expostas como texto cru ao usuário em vez de serem executadas — indicative de falha no parsing de XML. As issues duplicadas #3196 e #3197 sobre OAuth reforçam demanda recorrente por estabilidade em integrações de autenticação.

---

## 5. Bugs e Estabilidade

### Issues Abertas (3) — Todas classificadas como BUG

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #3260 | **Alta** | Launcher ARM64 não existe na release | [Link](https://github.com/sipeed/picoclaw/issues/3260) |
| #3258 | **Alta** | Process Hook before_tool não funciona corretamente | [Link](https://github.com/sipeed/picoclaw/issues/3258) |
| #3153 | **Crítica** | Tool calls vazam como texto (já fechada) | [Link](https://github.com/sipeed/picoclaw/issues/3153) |

### Análise por Severidade

**🔴 Crítica:**
- Issue #3153 (fechada) — Tool calls expostas ao usuário em texto cru representa risco de segurança e degradação funcional severa.

**🟠 Alta:**
- **#3260:** Usuários Raspberry Pi ARM64 (Raspbian Lite, Raspberry 3B) não conseguem executar o launcher, comprometendo toda a experiência desktop/LXDE. Bug de packaging/distribuição.
- **#3258:** Hook `before_tool` descarta campos de decisão e deserializa argumentos incorretamente — afeta fluxos de automação e modificações de comportamento em tempo real.

**Impacto:** 2 bugs de alta severidade em aberto, ambos reportados no mesmo dia (2026-07-15), indicam possível regressão na versão 0.3.1.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

| # | Título | Link |
|---|--------|------|
| #3257 | Add stateless/no-history mode for gateway sessions | [Link](https://github.com/sipeed/picoclaw/issues/3257) |

**Análise da Feature:** A issue #3257 solicita modo stateless para sessões gateway, permitindo conversas isoladas sem persistência de histórico. O usuário demonstra conhecimento técnico ao exemplificar que no modo CLI isso já é possível via `--session`, mas no gateway o session key é derivado de channel/channel_id — não há mecanismo para forçar sessões efêmeras.

**Sinal de Roadmap:** Este pedido indica demanda por:
1. Flexibilidade de gerenciamento de sessão no modo server
2. Casos de uso com PII/sensibilidade onde retenção de histórico é indesejada
3. Suporte a cenários multi-tenant com isolamento forte

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Severidade |
|-----------|-----------|------------|
| **Compatibilidade ARM64** | Usuários de dispositivos ARM (Raspberry Pi) bloqueados na instalação | Alta |
| **Hooks/Plugin System** | Modificações via hooks não funcionam como documentado | Alta |
| **Integração OAuth** | Falhas recorrentes em login OAuth com Codex/Antygravity | Média |
| **Provider Volcengine** | Integração instável com Doubao Seed 2.0 Pro | Média |

### Cenários de Uso Reportados

- **Desenvolvimento local:** Integração com DeepSeek via Telegram para automação de tarefas
- **Infraestrutura edge:** Deploy em Raspberry Pi para gateways IoT/chat
- **Computação Serverless:** Uso exclusivo do gateway para代理 múltiplos canais
- **Integração AWS:** Otimização de custos via Bedrock Converse prompt caching (PR #3163)

### Satisfação Geral

A prevalência de issues de bugs sobre features sugere que a **estabilidade e compatibilidade** são as principais preocupações no momento. A ausência de reações positivas (👍 0 em todas as issues) pode indicar baixa adoção ativa ou ciclo de feedback ainda não estabelecido.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale

| # | Status | Título | Idade | Link |
|---|--------|--------|-------|------|
| #3153 | CLOSED (stale) | Volcengine Doubao tool calls vazam | ~23 dias | [Link](https://github.com/sipeed/picoclaw/issues/3153) |
| #3197 | CLOSED (stale) | OAuth Codex/Antygravity | ~16 dias | [Link](https://github.com/sipeed/picoclaw/issues/3197) |
| #3196 | CLOSED (stale) | OAuth Codex/Antygravity (dup) | ~16 dias | [Link](https://github.com/sipeed/picoclaw/issues/3196) |

### Observação sobre Tag "stale"

As issues fechadas estão marcadas como "stale", indicando que foram resolvidas por inatividade do reporter ou por automação de triagem, **não necessariamente por correção técnica**. Recomenda-se verificar se as causas raiz foram efetivamente endereçadas.

### Recomendações Prioritárias

1. **#3260** — Publicar binário ARM64 ou documentar workaround para usuários Raspberry Pi
2. **#3258** — Investigar regressão nos hooks de processamento
3. **#3257** — Avaliar viabilidade de modo stateless para roadmap 0.4.x
4. **Verificar #3153** — Confirmar que vazamento de tool calls foi corrigido, não apenas fechado por stale

---

*Relatório gerado em 2026-07-16. Fonte: github.com/sipeed/picoclaw. Dados de atividade das últimas 24h.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-16

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 16 de julho de 2026, com 24 issues e 35 PRs atualizados nas últimas 24h. A equipe demonstra foco intenso em **qualidade e estabilidade**: múltiplos PRs de bug fixes do ciclo de bug-bash QA foram mergeados (UI freezes, loading states, extension registry, Enter key), enquanto grandes refactorings de arquitetura (unified generic extension runtime, v1 runtime removal) avançam em paralelo. Não houve releases novas, mas a release 0.29.1 permanece como versão mais recente. O tom geral indica maturidade do codebase com investimento emDX e confiabilidade operacional.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O release mais recente permanece **#5598** (`ironclaw` 0.29.1), disponível desde 2026-07-03:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw` | 0.24.0 | 0.29.1 | ⚠ Breaking |
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠ Breaking |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠ Breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |

**Breaking changes documentados:**
- `ironclaw_common`: Falha de conexão reportada como sucesso em cenários específicos
- `ironclaw`: Atualização maior com mudanças em APIs internas

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (12 total)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#6055](https://github.com/nearai/ironclaw/pull/6055) | Testes de integração | Cobertura para StaleSurface refresh e extension-remove channel-cleanup |
| [#6084](https://github.com/nearai/ironclaw/pull/6084) | WebUI | Substitui `confirm()` nativos por modal compartilhado (deletar chat, automação, extensão) |
| [#6082](https://github.com/nearai/ironclaw/pull/6082) | WebUI v2 | Extension Registry renderiza sem delay de enrichment |
| [#6081](https://github.com/nearai/ironclaw/pull/6081) | WebUI v2 | Enter key funciona reliably em mensagens de follow-up |
| [#6088](https://github.com/nearai/ironclaw/pull/6088) | WebUI | Falhas de catalog extension expostas ao usuário com retry |
| [#5915](https://github.com/nearai/ironclaw/pull/5915) | builtin.http | `save` respeita limite compacto em vez de `OutputTooLarge` genérico |
| [#6038](https://github.com/nearai/ironclaw/pull/6038) | Rotinas | Esconde detalhes internos de implementação das rotinas |
| [#6086](https://github.com/nearai/ironclaw/pull/6086) | Admin UI | Remove action de "Create token" não suportada |
| [#5914](https://github.com/nearai/ironclaw/pull/5914) | Trusted triggers | Auto-pair do trigger creator em importação legacy |

**Destaque:** O ciclo de bug-bash QA está gerando PRs de alta qualidade com regressão tests — 5 dos 9 PRs mergeados hoje são correções de bugs do último bug-bash.

---

### PRs Abertos de Alto Impacto

| PR | Tamanho | Risco | Escopo | Descrição |
|----|---------|-------|--------|-----------|
| [#6123](https://github.com/nearai/ironclaw/pull/6123) | XL | High | Multi-crate | **Remove retired v1 runtime** — migração completa para Reborn |
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | XL | Medium | Multi-crate | **Unified generic extension runtime** — reconcile main (92 commits) |
| [#6128](https://github.com/nearai/ironclaw/pull/6128) | XL | Low | Auth | Fix auth blockers: G Suite sign-out + Notion refresh |
| [#6130](https://github.com/nearai/ironclaw/pull/6130) | XL | Low | OAuth | OAuth flow-lifecycle hygiene (PKCE, expiry projections) |
| [#6122](https://github.com/nearai/ironclaw/pull/6122) | L | Medium | Docker/CI | Retarget release paths para Reborn binary |
| [#6120](https://github.com/nearai/ironclaw/pull/6120) | XL | Low | Admin UI | **Gestão de secrets por usuário no Admin** |
| [#5910](https://github.com/nearai/ironclaw/pull/5910) | L | Low | Approval gates | Hidratar approval gates on notification open |
| [#6129](https://github.com/nearai/ironclaw/pull/6129) | M | Low | Threads | Restaura preview cap de 100KB (reverte regressão de #5902) |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Discussão

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#6105](https://github.com/nearai/ironclaw/issues/6105) | 3 | **Extension/channel lifecycle** — família #1 de bugs user-facing; 4 ondas QA sem resolução |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 2 | `builtin.http.save` com `OutputTooLarge` em vez de salvar |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) | 1 | Memories no WebUI visíveis para todos no workspace |

### PRs Abertos com Maior Complexidade

**#6123 — Remove retired v1 runtime**  
Impacto: Touches 25+ scopes, inclui DB migration. Este é o marco final da aposentadoria do v1 runtime.

**#6116 — Unified generic extension runtime**  
Reconcilia 92 commits do main com a arquitetura unificada. PR draft aguardando trabalho adicional.

**#6103 — CI signal recovery**  
Documenta que ~70% dos pushes em main falharam em julho (139/200), com `nightly-deep-ci.yml` sem sucesso desde maio. Solicitação de retries via nextest e quarantine visibility.

---

## 5. Bugs e Estabilidade

### Bug-Bash P2 (Alta Severidade)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#6125](https://github.com/nearai/ironclaw/issues/6125) | Mensagens rejeitadas com "busy" enquanto rotina executa em background | **OPEN** |
| [#5886](https://github.com/nearai/ironclaw/issues/5886) | Pending approval bloqueia execuções subsequentes de automação | **CLOSED** (⚠ fix necessário?) |

### Bug-Bash P3 (Média Severidade)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#6126](https://github.com/nearai/ironclaw/issues/6126) | Sem loading/streaming state na primeira mensagem | **OPEN** |
| [#6127](https://github.com/nearai/ironclaw/issues/6127) | UI mostra "Previous run still in progress" na primeira execução | **OPEN** |
| [#6052](https://github.com/nearai/ironclaw/issues/6052) | Extensions Registry leva até 10s para carregar | **CLOSED** ✅ |
| [#6044](https://github.com/nearai/ironclaw/issues/6044) | Enter key às vezes não submete mensagem | **CLOSED** ✅ |

### Bugs Técnicos de Estabilidade

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#6100](https://github.com/nearai/ironclaw/issues/6100) | High | Context-window cache pode ser reseeded com snapshot stale após slow write |
| [#6102](https://github.com/nearai/ironclaw/issues/6102) | High | `FilesystemSessionThreadService` pode ser reconstruída com instância antiga com calls in-flight |
| [#6101](https://github.com/nearai/ironclaw/issues/6101) | Medium | Extender per-thread write serialization para assistant/tool-result writes |

### Padrões Recorrentes Identificados

O issue [#6104](https://github.com/nearai/ironclaw/issues/6104) propõe **SLA de 24h fix-or-wontfix** para bugs do daily failure taxonomy. Exemplos recorrentes:

| Categoria | Primeiro Reportado | Último Reportado | Lifetime |
|-----------|-------------------|------------------|----------|
| builtin.http uppercase-verb rejection | 06-29 | 07-03 | ~4 dias |
| Shell command injection false positive | 06-30 | 07-07 | ~7 dias |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements Propostos

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#6108](https://github.com/nearai/ironclaw/issues/6108) | Error handling | **Error fidelity** — sem falhas genéricas; status deve ser honesto |
| [#6107](https://github.com/nearai/ironclaw/issues/6107) | Tool/builtin CI | **Model-input compatibility corpus** — replay real tool-calls contra schemas em CI |
| [#6106](https://github.com/nearai/ironclaw/issues/6106) | CI | **Release gate** — boot smoke + upgrade-path canary antes de publish |
| [#6104](https://github.com/nearai/ironclaw/issues/6104) | Process | **24h SLA tracking** para daily failure taxonomy candidates |
| [#6103](https://github.com/nearai/ironclaw/issues/6103) | CI | **Nextest retries + quarantine** para flaky tests |

### Features Solicitadas

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#6118](https://github.com/nearai/ironclaw/issues/6118) | Admin UI | **Per-user secrets management** no Admin user details |
| [#6117](https://github.com/nearai/ironclaw/issues/6117) | Workspace | **Localização de region names** (home/memory) e **human-readable file sizes** |
| [#6109](https://github.com/nearai/ironclaw/issues/6109) | OpenAI-compat API | Model override deve funcionar para Bedrock + response label como read-back evidence |

**Sinais de Roadmap:**
- Foco em **Reborn como runtime padrão** (v1 retirement em curso)
- **Error fidelity** emerge como tema cross-cutting prioritário
- **CI reliability** identificada como blocker para velocity

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

**1. Extension/Channel Lifecycle (🔥 Crítico)**
> "Extension/channel lifecycle — Slack above all — is the #1 user-facing bug family of the past two weeks"
— [#6105](https://github.com/nearai/ironclaw/issues/6105)

Regressou em **4 ondas QA consecutivas** apesar de múltiplos fixes.

**2. Rotinas bloqueiam interação do usuário**
> "When a recurring routine is actively executing, user messages sent in the same thread are rejected with the error 'This message wasn't sent because Ironclaw was busy.'"
— [#6125](https://github.com/nearai/ironclaw/issues/6125)

**3. UX não responsivo**
- Extensions Registry: até 10s de loading
- Primera mensagem: sem feedback visual (freeze appearance)
- Region names: identifiers internos (`home`, `memory`) sem tradução

**4. Memórias compartilhadas**
> "Memories in the WebUI workspace are visible to every user in the workspace"
— [#5460](https://github.com/nearai/ironclaw/issues/5460) (CLOSED)

### Cenários de Uso Identificados

- **Automação com aprovação humana**: Usuários aguardam approvals bloqueando scheduling
- **Salvamento de páginas web**:builtin.http.save falha com limite de output
- **Gestão de secrets por admin**: API existe mas UI não expõe

### Satisfação (Itens Resolvidos Hoje)

✅ Extensions Registry loading otimizado  
✅ Enter key reliability  
✅ Confirmation dialogs nativos → modais estilizados  
✅ Extension catalog failures visíveis (antes silencioso)  
✅ OutputTooLarge → erros específicos para save  

---

## 8. Backlog que Merece Atenção

### Issues Sem Atribuição/Resposta

| Issue | Criado | Dias | Prioridade | Descrição |
|-------|--------|------|------------|-----------|
| [#6109](https://github.com/nearai/ironclaw/issues/6109) | 2026-07-14 | 2 | Medium | OpenAI-compat model override ignorado para Bedrock |
| [#6108](https://github.com/nearai/ironclaw/issues/6108) | 2026-07-14 | 2 | Medium | Error fidelity enhancement |
| [#6107](https://github.com/nearai/ironclaw/issues/6107) | 2026-07-14 | 2 | Medium | Model-input compatibility corpus |
| [#6106](https://github.com/nearai/ironclaw/issues/6106) | 2026-07-14 | 2 | Medium | Release/staging gate |
| [#6104](https://github.com/nearai/ironclaw/issues/6104) | 2026-07-14 | 2 | Medium | 24h SLA proposal |
| [#6103](https://github.com/nearai/ironclaw/issues/6103) | 2026-07-14 | 2 | High | CI signal recovery |
| [#6102](https://github.com/nearai/ironclaw/issues/6102) | 2026-07-14 | 2 | High | FilesystemSessionThreadService verification |
| [#6101](https://github.com/nearai/ironclaw/issues/6101) | 2026-07-14 | 2 | Medium | Per-thread write serialization |
| [#6100](https://github.com/nearai/ironclaw/issues/6100) | 2026-07-14 | 2 | High | Context-window cache race |
| [#6118](https://github.com/nearai/ironclaw/issues/6118) | 2026-07-15 | 1 | Medium | Per-user secrets management |
| [#6117](https://github.com/nearai/ironclaw/issues/6117) | 2026-07-15 | 1 | Low | Workspace localization |
| [#6124](https://github.com/nearai/ironclaw/issues/6124) | 2026-07-15 | 1 | Medium | Daily failure taxonomy |

### PRs em DRAFT há >2 dias

| PR | Criado | Tamanho | Descrição |
|----|--------|---------|-----------|
| [#6116](https://github.com/nearai/ironclaw

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-16

---

## 1. Panorama do dia

O projeto CoPaw apresenta **alta atividade** em 16 de julho de 2026, com 50 issues e 43 PRs atualizados nas últimas 24h — indicando uma sprint intensa de desenvolvimento. Das 18 issues abertas, destacam-se 3 bugs críticos (memory leak em editable install, MODEL_EXECUTION_ERROR persistente, e problemas de rendering em thinking blocks). Entre os 22 PRs fechados, há foco em estabilidade (doom loop, memory safeguards, legacy migrations) e novas funcionalidades (Chrome extension, Kanban app SDK). A taxa de resolução de issues está elevada (32/50 fechadas), sugerindo uma equipe de manutenção responsiva. **Nenhuma release foi publicada**, mas o pipeline de PRs kesiapan，说明 o próximo release está em fase de estabilização.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período pré-release, com múltiplos PRs de bugfix em estado "ready-for-human-review" (ex: #6137, #6142, #6133). Recomenda-se monitorar a ветвь principal para anúncio iminente de versão patch ou minor.

---

## 3. Progresso do Projeto

### PRs fechadas/merged (22 total, selecionadas por impacto):

| # | Título | Impacto |
|---|--------|--------|
| [#6147](https://github.com/agentscope-ai/CoPaw/pull/6147) | feat(website): blog view/like counts + GA switch | Analytics do site |
| [#6140](https://github.com/agentscope-ai/CoPaw/pull/6140) | fix(utils): add errors='replace' to _run_command for GBK compatibility | Suporte Windows GBK |
| [#6143](https://github.com/agentscope-ai/CoPaw/pull/6143) | ci: pass Supabase config to website build | Infra/CD |
| [#6142](https://github.com/agentscope-ai/CoPaw/pull/6142) | fix(console): auto_memory_interval validation (min:0) | UX Console |
| [#6137](https://github.com/agentscope-ai/CoPaw/pull/6137) | fix(loop): doom loop thresholds + thinking blocks spaces | Estabilidade |
| [#6133](https://github.com/agentscope-ai/CoPaw/pull/6133) | fix(mcp): legacy migration one-shot via schema watermark | Migração MCP |
| [#6039](https://github.com/agentscope-ai/CoPaw/pull/6039) | fix(mcp): resolve ${VAR} env references in legacy driver | Credenciais MCP |

**Destaque:** A correção de doom loop (#6137) e thresholds alinhados ao frontend resolvem problema recorrente de agentes presos em repetição infinita — melhoria crítica para experiência de uso.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Tipo | Título | Coment. | 👍 | Link |
|---|------|-------|---------|-----|------|
| #2911 | Bug | Windows客户端几小时后自动关闭 | 6 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2911) |
| #6129 | Bug | Thinking blocks sem espaços/quebras | 5 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6129) |
| #6125 | Feature | Suporte a 银河麒麟 (Kylin OS) | 5 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6125) |
| #2969 | Feature | 增加个人知识库功能 | 5 | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2969) |
| #2930 | Bug | 工具调用解析失败 + config持久化 | 4 | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2930) |
| #2922 | Feature | Suporte agent team (tipo Claude Code) | 3 | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2922) |

**Análise:** 
- **Bug #2911** (Windows crash) tem 6 comentários e indica problema antigo de stability — prioridade alta.
- **Feature #6125** (Kylin OS) reflete demanda por **domesticação** (国产化) na base de usuários chineses — sinal de roadmap para sistemas operacionais chineses.
- **Feature #2969** (知识库) com 3 👍 mostra demanda por **RAG/integração de KB** nativo.
- **Feature #2922** (+1 👍) aponta interesse em **multi-agent collaboration** mais sofisticada.

---

## 5. Bugs e Estabilidade

### Bugs abertos críticos:

| # | Severidade | Título | Atualizado | Link |
|---|------------|-------|------------|------|
| #6124 | 🔴 Alta | Memory leak: 36 ReMe loops consomem 48GB+ (editable install) | 2026-07-15 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6124) |
| #6141 | 🔴 Alta | MODEL_EXECUTION_ERROR persistente após /mission abort | 2026-07-15 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6141) |
| #6155 | 🟡 Média | Embedding mapping bug: use_dimensions não propagado | 2026-07-15 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6155) |
| #6124 | 🟡 Média | Editable install: ReMe initialization nunca completa | 2026-07-15 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6124) |
| #5790 | 🟢 Baixa | Loading animation não desaparece após resposta | 2026-07-15 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5790) |

**Ação recomendada:** Bug #6124 (memory leak) e #6141 (execution error) requerem atenção imediata da equipe core — ambos afetam stability em produção.

### Bugs resolvidos recentemente:
- **#2930**: Tool call parsing failure + config reset → merged fix implícito
- **#6132**: auto_memory_interval não podia ser 0 → corrigido em [#6142](https://github.com/agentscope-ai/CoPaw/pull/6142)
- **#6129**: Thinking blocks sem whitespace → corrigido em [#6137](https://github.com/agentscope-ai/CoPaw/pull/6137) e [#6139](https://github.com/agentscope-ai/CoPaw/pull/6139)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos):

| # | Feature | Descrição | Link |
|---|---------|-----------|------|
| [#6157](https://github.com/agentscope-ai/CoPaw/pull/6157) | Chrome Extension Plugin | Plugin oficial com Native Messaging → WebSocket bridge | PR |
| [#6150](https://github.com/agentscope-ai/CoPaw/pull/6150) | PawApp SDK + Kanban | SDK para apps integrados + app Kanban | PR |
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | Per-session Model Overrides | LLMs diferentes por sessão no mesmo agente | PR |
| [#5862](https://github.com/agentscope-ai/CoPaw/pull/5862) | Inbox System Pop | Notificações push do sistema para inbox | PR |
| [#6153](https://github.com/agentscope-ai/CoPaw/pull/6153) | ReMe Enhancement | 10MiB file limit + inbox toggle | PR |

### Features solicitadas (issues abertas):

| # | Título | Demanda | Link |
|---|--------|---------|------|
| #6125 | Suporte 银河麒麟 OS | Adaptação para OS doméstico chino | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6125) |
| #6136 | Agente líder não delega | Leader agent não-trigger colaboração | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6136) |
| #6083 | Desktop: atalho para workspace | Acesso rápido a产出物 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6083) |
| #6076 | Non-Tauri variant para Win7 | Suporte Windows 7 viaVxkex | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6076) |
| #4259 | Preset Agent Templates | Templates prontos para não-técnicos | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4259) |
| #2921 | Zulip Channel Integration | Canal open-source alternativo a Slack | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2921) |
| #2910 | Whisper API/Local para voz | Voice input sem browser compat issues | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2910) |

**Sinais de roadmap identificados:**
1. **Expansão de canais**: Chrome extension (#6157), Zulip (#2921)
2. **UX Desktop**: atalhos workspace (#6083), non-Tauri Win7 (#6076)
3. **Multi-agent maturity**: leader delegation (#6136), agent team (#2922)
4. **Mercado chino**: Kylin OS (#6125), GBK compat (já corrigido em #6140)

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

**🔴 Estabilidade e Crashes:**
- Windows client fecha após horas de uso (#2911) — impacto em produção
- Memory leak em editable install (#6124) — devs afectados
- Modelo execution error perpétuo após abort (#6141) — workflow quebrado

**🟡 UX e Acessibilidade:**
- Leader agent não delega autonomamente (#6136) — multi-agent não funciona "out-of-box"
- Desktop sem acesso fácil aworkspace (#6083) — fricção para não-técnicos
- Preset agent templates ausentes (#4259) — barreira de entrada alta

**🟢 Integrações e Funcionalidades:**
- Kylin OS sans support (#6125) — barreira em ambientes corporativos chineses
- Knowledge base nativa solicitada (#2969) — desejo de RAG integrado
- Win7 support needed (#6076) — legado enterprise

**Satisfação inferred:** 
- 3 👍 em #2969 (knowledge base) e 1 👍 em #2922 (agent teams) indicam interesse em features avançadas.
- Correções rápidas (#6132 → #6142 em <1 dia) demonstram responsiveness da equipe.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias ou com estagnação:

| # | Idade | Estado | Título | Prioridade | Link |
|---|-------|--------|-------|------------|------|
| #4259 | ~65 dias | CLOSED | Preset Agent Templates | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4259) |
| #2910 | ~104 dias | CLOSED | Whisper API/Local voice | Média | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2910) |
| #2921 | ~104 dias | CLOSED | Zulip Channel Integration | Baixa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2921) |
| #2929 | ~103 dias | CLOSED | webui记忆文件夹 | Baixa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2929) |
| #2957 | ~103 dias | CLOSED | Load tail messages on scroll | Baixa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2957) |
| #2912 | ~104 dias | CLOSED | LSP + fallback models | Alta | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2912) |
| #2969 | ~103 dias | CLOSED | 知识库功能 | Alta | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2969) |
| #2907 | ~104 dias | CLOSED | PR #2448 need review | Alta | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2907) |

**Análise:** Muitas issues "CLOSED" sem resolução clara podem indicar:
1. closed as duplicate/out-of-scope sem comentários claros
2. issues antigas reabertas (várias com "atualizado: 2026-07-15")

**Ação recomendada:** Triagem de backlog para confirmar se features solicitadas (#4259, #2910, #2921, #2969) estão no roadmap ou foram rejeitadas, e comunicação

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-16

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um ritmo de desenvolvimento intenso: 50 PRs e 11 issues atualizados nas últimas 24h, com destaque para o corte da **v0.8.3** (379 commits, 56 contribuidores) e uma pipeline robusta de testes, документация e melhorias de usabilidade. A base de código demonstra maturação contínua em segurança, armazenamento de memória e integrações de hardware. No entanto, dois bugs de severidade S1/P1 — *browser_open hanging* e *pgvector panic* — demandam atenção imediata para estabilização da produção.

---

## 2. Lançamentos

### ✅ v0.8.3 Released (PR #9081 — merged/closed)
**Destaques documentados:**
- **SOP Engine** — Motor de execution semântico integrado ao runtime
- **WASM Plugin Host** — Suporte a plugins WebAssembly
- **Git Forge Channel** — Canal de integração com forjas Git
- **Locale Sync** — Sincronização de localização i18n
- **379 commits / 56 contribuidores**

📌 **Nenhum breaking change reportado** | **Notas de migração:** Ver `CHANGELOG-next.md` para detalhes completos.

🔗 [zeroclaw-labs/zeroclaw PR #9081](https://github.com/zeroclaw-labs/zeroclaw/pull/9081)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|---|---|---|
| **#9081** | `chore(release): cut v0.8.3` | Release oficial com 379 commits |
| #9082 | Suggestion: monetize MCP server | Issue fechado (sugestão comercial) |

### PRs Abertos de Alto Impacto

| PR | Título | Tamanho/Risco | Relevância |
|---|---|---|---|
| **#8866** | `fix(daemon): share MCP registry across heartbeat ticks` | L / 🔴 High | Resolve vazamento de recursos em daemons stdio MCP |
| **#9072** | `feat(memory): separate authoritative storage from optional enrichment` | Quickstart/Core | Separa SQLite (autoritativo) de conectores de enriquecimento |
| **#8536** | `fix(hardware): preserve inner Elapsed error in timeout handlers` | XS / 🟡 Medium | Melhora debugging de timeouts em transporte serial |
| #9094 | `fix(zerocode): assert actual darwin display for terminal-safe Ctrl chords` | Darwin | Corrige comportamento de atalhos Ctrl+n/Ctrl+s |

### PRs de Infraestrutura/Testes (19 PRs de tamanho XS)

Todos os seguintes PRs são **test-only** ou **low-risk**, cobrindo regressões:
- `#8301` — Tool names em `lower_snake_case`
- `#8451` — `Role::family_str` stable tags
- `#8287` — Manifesto com `[exec]` obrigatório
- `#8294` — Sanitização de path separators em session keys
- `#8296` — VAD empty input tratado como silêncio
- `#8448` — Serialização de `TransportKind::Aardvark`
- `#8449` — Hostnames `.local` e ranges RFC 5737/2544
- `#8452` — `ZcResponse::success` omite campo `error`
- `#8673` — Bump `cmov` 0.5.3 → 0.5.4

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atividade (Comentários/Reações)

| Issue | Título | Comentários | 👍 | Tensão |
|---|---|---|---|---|
| **#8560** | Bug: browser_open hangs agent turn | 2 | 0 | 🔴 **P1** — Bloco crítico de workflow |
| **#8358** | Tracker: zerorelay milestone | 2 | 0 | 🟡 P2 — Infraestrutura NAT/CGNAT |
| **#9079** | Feature: CI coverage for firmware crate | 1 | 0 | 🟢 Enhancement — DevEx |

### Análise das Demandas

**🔴 Emergente: Bug de hanging em browser_open (#8560)**
- Afeta: `browser_open`, robot-kit TTS, channels ffmpeg
- Causa: subprocesso unbounded wait quando launcher falha
- Severidade: **S1** — workflow bloqueado
- Tags: `channel`, `runtime`, `tool`, `hardware`, `risk:high`

**🟡 Infraestrutura: zerorelay para NAT/CGNAT (#8358)**
- Blind forwarder para daemons atrás de NAT
- Mutual-TLS sem inspeção de conteúdo
- Tracking milestone P2 com risco alto
- Autor: Nillth (core maintainer)

**🟡 RFC: Structured Security Audit Pipeline (#9086)**
- Proposta de logging tamper-evident (Merkle hash chain, 1392 linhas)
- Módulos implementados mas não wired em produção
- AuditLogger, SignatureVerifier, AnomalyDetector sem uso real
- Demanda por pipeline de auditoria de segurança

---

## 5. Bugs e Estabilidade

### Bugs S1 — Workflow Bloqueado (Críticos)

| Issue | Título | Componente | Status | Atualizado |
|---|---|---|---|---|
| **#8560** | browser_open hangs unbounded subprocess | runtime/tool | Accepted | 2026-07-15 |
| **#9085** | nested runtime panic in try_enable_pgvector | memory | Open | 2026-07-15 |

### Bugs S2 — Degraded Behavior (Moderados)

| Issue | Título | Componente |
|---|---|---|
| **#9078** | Serial transport desynchronization | hardware/peripherals |
| **#9092** | Keystroke lag in long sessions (full history render) | zerocode/tui |
| **#9089** | Tool output missing [AUDIO:] marker support | provider |

### Análise de Severidade

- **2 bugs S1** = ⬆️ Aumento de pressão sobre a equipe de runtime/memory
- **3 bugs S2** = Usabilidade degradada em sessões longas e hardware
- **Teto de 0 thumbs-up** nas issues indica baixa validação da comunidade (possible under-reporting)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recém-Solicitadas

| Issue | Título | Escopo | Complexidade |
|---|---|---|---|
| **#9079** | CI coverage para firmware protocol crate | hardware/CI | Média |
| **#9093** | Show ZeroCode version em TUI top bar | zerocode/tui | Baixa |
| **#9072** | Separate authoritative storage from enrichment | memory/backend | Alta |
| **#9086** | RFC: Security Audit Pipeline | security | Alta |

### Tracker Ativo: v0.8.4 (#8357)

- **Target:** 31 de Julho de 2026
- **Status:** Feature-freeze maintenance train
- **Source of truth:** Milestone page (não detalhado nos dados)

📌 **Sinais de roadmap:**
1. Separação de storage autoritativo vs. enrichment connectors (memória)
2. Zerorelay para NAT traversal (infraestrutura)
3. Security audit pipeline wired em produção

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Manifestação | Issue |
|---|---|---|
| **Confusão de versão** | Usuários não sabem qual ZeroCode está rodando | #9093 |
| **Performance degradada** | Lag em sessões longas (render full history) | #9092 |
| **Fragilidade de hardware** | Serial transport dessincroniza em edge cases | #9078 |
| **Mídia incompleta** | `[AUDIO:]` não renderiza, apenas texto | #9089 |
| **pgvector crash** | Panic ao iniciar gateway/agent com Postgres | #9085 |

### Cenários de Uso Indicados

- **Uso headless/robótico:** `browser_open` + robot-kit TTS (problema #8560)
- **Sessions longas:** TUI com Code + Chat panes simultâneas
- **Hardware embarcado:** Serial + Aardvark transports
- **Produção com Postgres:** pgvector embedding memory

### Satisfação/Insatisfação

- **⬆️Positivo:** v0.8.3 demonstra maturity — WASM, SOP engine, Git forge
- **⬇️Negativo:** 2 S1 bugs indicam technical debt em runtime e memory backend
- **🟡Neutro:** 50 PRs suggest high contributor activity, mas 0 👍 em issues pode indicar baixa gamificação

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Título | Criado | Atualizado | Gap |
|---|---|---|---|---|
| **#8357** | v0.8.4 maintenance tracker | 2026-06-26 | 2026-07-15 | 19 dias sem updates no tracker |
| **#8358** | zerorelay milestone | 2026-06-26 | 2026-07-15 | 19 dias — apenas 2 comentários |

### PRs Abertos de Alto Risco sem Merge

| PR | Título | Risk | Tamanho | Idade |
|---|---|---|---|---|
| **#8866** | MCP registry sharing | 🔴 High | L | ~7 dias |
| **#9072** | Memory separation | Quickstart | — | ~2 dias |

### Priorização Recomendada

1. **🔴 Imediato:** #8560 (browser_open hang) + #9085 (pgvector panic)
2. **🟡 Esta semana:** #8866 (MCP registry leak)
3. **🟢 Backlog:** #9086 (RFC security pipeline), #8358 (zerorelay)

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---|---|
| Issues ativas | 10 open / 1 closed |
| PRs ativos | 49 open / 1 merged |
| Novas releases | 1 (v0.8.3) |
| Bugs S1 | 2 |
| Bugs S2 | 3 |
| Features abertas | 4 |
| Trackers ativos | 2 |
| Test PRs (XS) | 19 |

---

*Relatório gerado automaticamente para 2026-07-16. Dados: GitHub zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*