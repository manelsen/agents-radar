# Resumo diário do ecossistema de agentes de IA 2026-04-20

> Issues: 4 | PRs: 9 | Projetos cobertos: 7 | Gerado em: 2026-04-20 02:13 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto — NullClaw
## Data de referência: 2026-04-20
### Analista: Análise automatizada de dados GitHub

---

## 1. Panorama do dia

O projeto NullClaw apresenta um **nível de atividade excepcionalmente elevado** nas últimas 24h, com **13 interações totais** (4 issues + 9 PRs). A atividade de PRs é particularmente intensa, com 9 novas pull requests abertas — todas ainda em estado *open*, indicando que a base de código está passando por uma fase intensa de desenvolvimento e revisão. Não houve nenhum merge ou release nas últimas 24h, sugerindo que o mantenedor principal (manelsen) está acumulando PRs para uma potencial integração futura. Duas issues de bug crítico foram abertas (CPU spin e falha de subagentes) e imediatamente abordadas por PRs correspondentes, evidenciando um ciclo de feedback extremamente responsivo entre report e correção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões, tags ou binários. Isso é consistente com o padrão de desenvolvimento ativo observado: a ausência de releases sugere que o código está em uma fase de consolidação antes de um próximotag.

> ⚠️ **Nota:** A issue [#821](https://github.com/nullclaw/nullclaw/issues/821) (já fechada) indica que a versão instalada via source exibe `"dev"` em vez de um número de versão real. Isso reforça a necessidade de uma nova release que乾淨地在 build-time embedded version information.

---

## 3. Progresso do Projeto

**Nenhuma PR mergeada nas últimas 24h**, embora 9 novas PRs abertas representem um volume significativo de trabalho pendente de revisão. As PRs mais relevantes em termos de impacto:

### Correções críticas abertas

| PR | Título | Relacionada a | Impacto |
|----|--------|---------------|---------|
| [#855](https://github.com/nullclaw/nullclaw/pull/855) | `fix(daemon,session): enable inbound concurrency and turn preemption` | — | **Alto** — Refatora processamento serial de mensagens em bounded concurrent workers com preempção de turns. Resolve gargalo de throughput do daemon. |
| [#854](https://github.com/nullclaw/nullclaw/pull/854) | `fix(subagent): deliver completions to original channel context` | [#849](https://github.com/nullclaw/nullclaw/issues/849) | **Alto** — Garante que subagentes retornam resultados ao contexto de conversa correto. Corrige perda de respostas. |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | `fix(gateway): add accept-loop backoff to prevent CPU spin` | [#851](https://github.com/nullclaw/nullclaw/issues/851) | **Crítico** — Adiciona backoff exponencial no accept loop para evitar consumo 100% de CPU em plataformas ARM64 (Raspberry Pi). |

### Melhorias de infraestrutura

| PR | Título | Impacto |
|----|--------|---------|
| [#852](https://github.com/nullclaw/nullclaw/pull/852) | `fix(memory): improve archive provenance and recall quality` | **Médio** — Preserva `session_id` em archives e melhora encoding de vector-sync keys, aprimorando precisão de recall de memória. |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | `feat(daemon): route inbound bus messages via inbound_router` | **Médio** — Adiciona roteamento condicional (inject/drop/process) para mensagens do bus antes de processá-las. |
| [#847](https://github.com/nullclaw/nullclaw/pull/847) | `feat(gateway): route inbound via inbound_router` | **Médio** — Mesma lógica para o gateway, 13 call sites migrados. |
| [#846](https://github.com/nullclaw/nullclaw/pull/846) | `feat(channel_loop): route inbound via inbound_router` | **Médio** — Extensão para Telegram e Max. |

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento

**[#826](https://github.com/nullclaw/nullclaw/issues/826)** — *"[documentation] How to use nullclaw gateway with Tailscale?"*  
- **Estado:** 🟡 OPEN  
- **Comentários:** 9  
- **Autor:** eabase | Criado: 2026-04-15 | Atualizado: 2026-04-19

**Análise:** Esta é a issue com maior engajamento da análise. O usuário tenta integrar NullClaw Gateway com Tailscale em um VPS Debian, mas encontra um erro `NotImplemented` ao iniciar o tunnel. Com 9 comentários em 4 dias, há uma demanda clara por documentação integrada sobre esta combinação — e a PR [#850](https://github.com/nullclaw/nullclaw/pull/850) já aborda parte do problema ao adicionar suporte a `tailscale auth_key` encrypted, indicando que o mantenedor está ciente da lacuna.

**[#821](https://github.com/nullclaw/nullclaw/issues/821)** — *"[bug] nullclaw version doesn't show any version, just 'dev'"*  
- **Estado:** 🔴 FECHADA (2026-04-19)  
- **Comentários:** 4  
- **Autor:** eabase | Criado: 2026-04-15

**Análise:** Bug reportado e resolvido rapidamente (4 dias). O problema é que builds de source mostram `"dev"` em vez de versão/hash significativo. Embora a issue esteja fechada, nenhuma PR foi mencionada como fix — pode haver um gap entre o reporte e a correção.

---

## 5. Bugs e Estabilidade

### 🟠 Alta severidade

| Issue | Descrição | Plataforma | Status | Link |
|-------|-----------|------------|--------|------|
| #851 | Gateway entra em busy-loop em `accept4()` retornando `EAGAIN`, consumindo ~100% de um core CPU em idle | Raspberry Pi 5 / Debian 13 aarch64 | **ABERTA** — PR [#853](https://github.com/nullclaw/nullclaw/pull/853) pronta | [Ver #851](https://github.com/nullclaw/nullclaw/issues/851) |
| #849 | Subagent não retorna resultado ao canal original — tarefa é executada mas resposta se perde | Todas | **ABERTA** — PR [#854](https://github.com/nullclaw/nullclaw/pull/854) pronta | [Ver #849](https://github.com/nullclaw/nullclaw/issues/849) |

### 🟡 Média severidade

| Issue | Descrição | Status | Link |
|-------|-----------|--------|------|
| #821 | `nullclaw version` exibe `"dev"` em vez de versão/hash | **FECHADA** | [Ver #821](https://github.com/nullclaw/nullclaw/issues/821) |
| #826 | Integração com Tailscale não funciona — `Failed to start tunnel: NotImplemented` | **ABERTA** | [Ver #826](https://github.com/nullclaw/nullclaw/issues/826) |

**Resumo de estabilidade:** O projeto demonstra capacidade de resposta rápida a bugs críticos — ambas as issues de alta severidade (#851 e #849) já possuem PRs abertas pelo mesmo autor (manelsen), sugerindo que são bugs identificados internamente durante testes. A ausência de PRs mergeadas pode indicar que o mantenedor aguarda revisão ou prefere agrupar múltiplas correções em uma única release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| PR | Título | Relevância estratégica |
|----|--------|------------------------|
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | `feat(api): REST Admin API — runtime status, config read, model listing, and cron job management` | **Alta** — Adiciona API RESTAdmin para clientes leves (menubar apps, iOS/iPadOS, CLI dashboards). Zero novas dependências; +30 KB estimado. Representa uma expansão significativa de ecossistema. |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) | `feat(tunnel): add encrypted tailscale auth_key support` | **Alta** — Suporte a `tunnel.tailscale.auth_key` com routing via secrets pipeline (criptografia em load/encrypt on save). Resolve parte da issue #826. |
| [#855](https://github.com/nullclaw/nullclaw/pull/855) | `fix(daemon,session): enable inbound concurrency and turn preemption` | **Alta** — Mudança arquitetural: de serial single-thread para concurrent bounded workers com preempção. Pode ter implicações de breaking change em edge cases. |

### Padrões identificados no roadmap

1. **Modularização de roteamento de mensagens:** Três PRs (#846, #847, #848) implementam consistentemente `inbound_router` em três camadas diferentes (channel_loop, gateway, daemon). Isso sugere uma refatoração arquitetural unificada para controle granular de mensagens.

2. **Expansão de plataforma:** Suporte a Tailscale (issue #826 + PR #850) indica foco em conectividade e deployment distribuído.

3. **APIs para ecossistema:** A REST Admin API (#770)abre caminho para integrações de terceiros e tooling de monitoramento.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Cenário | Problema relatado | Severidade percebida |
|---------|-------------------|----------------------|
| **Uso com Tailscale** | Falha ao iniciar tunnel com `NotImplemented` impede deployment remoto | 🔴 Alta |
| **Build de source** | Versão `"dev"` não fornece feedback útil de identificação do build | 🟡 Média |
| **Subagentes** | Perda de respostas de subagentes — trabalho executado mas resultado descartado | 🔴 Alta (funcional) |
| **Performance em ARM64** | CPU spin em Raspberry Pi torna uso prático inviável | 🔴 Alta |

### Padrão de satisfação

O usuário **eabase** reportou dois problemas (#821 e #826) com abordagem construtiva e detalhada. Ambos foram reconhecidos (o bug #821 foi fechado, e uma PR #850 está addressing #826). Isso sugere um **ciclo de feedback saudável** onde usuários reports são endereçados.

O usuário **sadhimmel-svg** reportou bug de subagente (#849) com descrição precisa e steps de reprodução, o que facilitou a criação rápida da PR #854.

**Sinal positivo:** A velocidade com que PRs corretivas aparecem após bugs reports (especialmente #851 → #853 e #849 → #854 no mesmo dia) indica que o mantenedor está ativamente testando o código.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou sem resolução

| Issue | Título | Criada | Atualizada | Comentários | Prioridade |
|-------|--------|--------|------------|-------------|------------|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | *"[documentation] How to use nullclaw gateway with Tailscale?"* | 2026-04-15 | 2026-04-19 | 9 | **Alta** — Aguarda ação do mantenedor |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | *"[bug] nullclaw version doesn't show any version, just 'dev'"* | 2026-04-15 | 2026-04-19 | 4 | **Média** — Fechada, mas sem PR de fix visível |

### Observações críticas

1. **Gap #821:** A issue foi fechada sem PR referenciada. Se o fix não foi mergeado ainda, o bug persiste no código principal.

2. **Volume de PRs pendentes:** 9 PRs abertas sem merges indica potencial gargalo de review. Com todas PRs do autor `manelsen`, há risco de concentração de conhecimento se não houver review externo.

3. **Ausência de milestones:** Sem informasi tentang milestone ou milestones ativos, é impossível determinar quais dessas mudanças farão parte da próxima release.

### Recomendações

1. **Para mantenedores:** Priorizar merge das PRs #853 e #854 — são correções de bugs críticos que afetam usabilidade prática.
2. **Para comunidade:** Se você utiliza Tailscale com NullClaw, contribua na issue [#826](https://github.com/nullclaw/nullclaw/issues/826) com logs e configuração para acelerar a resolução.
3. **Para QA:** A PR #855 introduz mudanças concorrentes significativas — merece testing extensivo antes de merge, especialmente com múltiplos clientes simultâneos.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 1 |
| PRs abertas | 9 |
| PRs merged/fechadas | 0 |
| Novas releases | 0 |
| Atividade total | 13 interações |
| Bugs críticos abertos | 2 |
| PRs de segurança/performance | 3 (#853, #854, #855) |
| Pull requests do mesmo autor | 8 de 9 |

**Veredicto de saúde:** 🟢 **Saudável com atenção** — O projeto demonstra atividade intensa, responsividade a bugs e pipeline de features ativo. A ausência de merges nas últimas 24h não é necessariamente negativa (pode indicar waiting for review), mas o acúmulo de 9 PRs simultâneas merece atenção para evitar Technical Debt.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-04-20. Todos os links referenciam https://github.com/nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-04-20
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois estágios distintos de maturidade** coexistindo simultaneamente. Projetos como **ZeroClaw**, **IronClaw** e **Hermes Agent** estão em fase de **estabilização pós-refatoração**, investindo pesado em segurança, sandboxing e arquitetura modular — indicando que a base de usuários está crescendo e exige infraestrutura mais robusta. Em paralelo, **NullClaw**, **NanoBot** e **CoPaw** operam em ciclos de **desenvolvimento intenso com baixa taxa de merge**, acumulando PRs abertas e priorizando correções de bugs críticos que afetam usabilidade prática (crashes, loops infinitos, falhas de autenticação).

A dominância de issues sobre releases em **todos os projetos** nas últimas 24h confirma que o ecossistema está em **construção acelerada**, não em manutenção. Três vetores são universais: (1) **resiliência de provedores LLM** frente a falhas e rate limits, (2) **segurança de plugins e extensibilidade**, e (3) **observabilidade** — todas as bases de código estão simultaneamente adicionando health endpoints, profiling hooks e tracing.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|:------------:|:-----------:|:----------------:|:--------------:|:---------------------:|:------------------:|
| **NullClaw** | 3 | 9 | 0 | 0 | 2 | 🟢 Saudável com atenção |
| **NanoBot** | 8 | 133 | 27 | 0 | 3 | 🟢 Fase de maturação |
| **Hermes Agent** | ~50 | ~50 | 16 | 0 | 4+ | 🟢 Ativo, focado em estabilidade |
| **PicoClaw** | 10 | 9 | 2 | 1 (nightly) | 2–3 | 🟡 Atenção necessária |
| **IronClaw** | 11 | ~50 | 17 | 0 | 2 | 🟢 Ativo, pós-refatoração |
| **CoPaw** | 21 | 13 | 0 | 0 | 5 | 🟠 Estabilidade em risco |
| **ZeroClaw** | ~46 | ~44 | 16 | 1 (estável) | 2 S1 | 🟢 Transição arquitetural |

**Leituras-chave:**

- **Volume absoluto:** NanoBot lidera em PRs abertos (133) mas tem a maior taxa de fechamento (27 merges/24h), sugerindo equipe de revisão ativa. Hermes Agent e IronClaw mantêm ~50 PRs em pipeline saudável.
- **Qualidade de pipeline:** ZeroClaw é o único com release formal (v0.7.3) e merge rate robusto. CoPaw apresenta o padrão mais preocupante — **21 issues e 13 PRs, nenhum merge em 24h**, com 5 crashes críticos reportados.
- **Dívida de review:** IronClaw tem 4 PRs XL abertos há 30+ dias; NullClaw acumulou 9 PRs do mesmo autor sem merges, indicando concentração de conhecimento.

---

## 3. Posicionamento do Projeto Principal

*Nota: não há um "projeto principal" definido na análise; ZeroClaw e Hermes Agent apresentam o perfil mais próximo de projetos de referência pelo volume de atividade, maturidade institucional e escopo.*

### ZeroClaw — Profil de Referência

| Dimensão | Posição | Diferencial |
|----------|---------|-------------|
| **Arquitetura** | Avançado | Microkernel em Cargo workspace; plugins WASM via Extism 1.21 em Phase 2 |
| **Segurança** | Líder | Advisory scan diário, allowlist SSRF para plugins, OAuth nativo multi-provider |
| **Comunidade** | Grande | 46 issues + 44 PRs atualizados em 24h; 6 RFCs aceitos em uma semana |
| **Release maturity** | ✓ Estável | Ciclo formal de releases com runbook documentado |
| **Fronteiras técnicas** | Sandbox shell/Python | RFC de microkernel e WASM isolation |

**Vantagem competitiva:** A migração para arquitetura microkernel com plugins WASM posiciona o ZeroClaw como a **única base de código com isolamento formal de third-party code**. Isso é um diferencial crítico para deployments corporativos — uma tendência que os outros projetos estão才开始 explorar.

### Hermes Agent — Profil de Referência Alternativo

| Dimensão | Posição | Diferencial |
|----------|---------|-------------|
| **Ecosistema multi-canal** | Avançado | Gateway Telegram, Discord, Slack, DingTalk, Matrix com E2EE |
| **Provider diversity** | Amplo | Suporte a Claude, Gemini, Kimi, Bedrock, Moonshot, OpenRouter, Vertex AI |
| **Performance** | Cuidado | Circuit breaker, file locking em trajetória, TUI profiling |
| **Comunidade** | Ativa | 50 issues + 50 PRs atualizados; 16 merges em 24h |
| **Pontos fracos** | Memory leak TUI (~4GB), Z.AI probe overhead (~2s), Matrix E2EE quebrado |

**Vantagem competitiva:** Hermes Agent tem a **base de integrações de canais mais madura** e o maior número de modelos suportados, sendo a escolha natural para arquiteturas multi-provedores. Contudo, os memory leaks e problemas de startup performance representam risco para uso prolongado.

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em **cinco necessidades técnicas idênticas**, independentemente de栈, linguagem ou público-alvo:

### 4.1 — Resiliência de Provedores LLM

| Projeto | Implementação |
|---------|---------------|
| PicoClaw | FreeRide failover — rotação automática entre provedores gratuitos via OpenRouter |
| NanoBot | Limite de queue inbound + fallback de provider |
| Hermes Agent | Circuit breaker para tool calls idênticos falhando |
| NullClaw | inbound_router com suporte a routing condicional (inject/drop/process) |

**Padrão identificado:** O modelo de "single provider = single point of failure" está sendo ativamente corrigido em todas as bases de código. O FreeRide da PicoClaw e o circuit breaker do Hermes são abordagens complementares.

### 4.2 — Segurança de Plugins e Extensibilidade

| Projeto | Abordagem |
|---------|-----------|
| ZeroClaw | WASM via Extism + allowlist `zc_env_read` + SSRF protection |
| IronClaw | Sandbox completo do Engine v2 (fases 8+) + WASM URL leak scan |
| NanoBot | Tirith pre-exec scanning + proteção filesystem (file://, gopher://) |
| Hermes Agent | File locking em trajetória + file-tools isolados via TERMINAL_CWD |
| CoPaw | Skill YAML validation com try-except em require_bins |

**Padrão identificado:** O ecossistema está fazendo a transição de "plugins são código confiável" para "plugins precisam de sandboxing". ZeroClaw está mais avançado (WASM formal), enquanto CoPaw ainda trata YAML malformado como crash total.

### 4.3 — Observabilidade e Debugging

| Projeto | Instrumentação |
|---------|----------------|
| NanoBot | ProfilingHook para timing de iterações + health endpoint (porta 18790) |
| Hermes Agent | Langfuse tracing para subagents (solicitado, não implementado) |
| NullClaw | Memory archive provenance + recall quality improvements |
| CoPaw | Cron execution logs + LLM usage context visibility |

**Lacuna compartilhada:** Langfuse tracing solicitado em dois projetos (Hermes #1501, implícito em NanoBot) e métricas de latência end-to-end ausentes em todos — indicam que o ecossistema está crescendo mais rápido do que a capacidade de diagnóstico.

### 4.4 — Bugs de Estabilidade Críticos Transversais

| Bug Genérico | Projetos Afetados |
|--------------|-------------------|
| **Loops infinitos** | NanoBot (history.jsonl read_file), Hermes (fallback cascade 20-60s), NullClaw (CPU spin em accept loop) |
| **Autenticação quebrada** | PicoClaw (DeepSeek 401, openai_compat sem header), Hermes (Claude subscription persist), IronClaw (cross-tenant creds) |
| **Unicode/encoding crash** | CoPaw (Unicode surrogado em SSE), IronClaw (UTF-8 multi-byte >57 bytes em MCP) |
| **Data loss/corruption** | Hermes (JSONL corruption sem file locking, mergeado), PicoClaw (chat history incompleto após reload) |

### 4.5 — UX de Canais de Mensagens

| Canal | Projetos | Status |
|-------|----------|--------|
| Telegram | Todos os 7 | Maduro, mas com gaps: inline keyboards (NanoBot #3317), topic support (IronClaw #2255), typing indicator (CoPaw #1874), oversized messages (NanoBot #3316) |
| Tailscale/VPN | NullClaw (#826), ZeroClaw (RFC) | Início — lacuna de documentação e configuração |
| WeChat (Weixin) | CoPaw | Problemas: KeyError em cron (#3573), channel instável |
| DingTalk | Hermes Agent | Feature parity parcial; proactive messaging em PR #12769 |

---

## 5. Análise de Diferenciação

### Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Microkernel + WASM plugins** | ZeroClaw | Isolamento de third-party code, deployable em ambientes restritos. Custo: complexidade de build (cargo publish quebrado #5811) |
| **Modularização por camadas** | NullClaw, NanoBot | inbound_router refatorado em 3+ camadas (channel_loop, gateway, daemon). Custo: risco de breaking changes |
| **Gateway centralizado** | Hermes Agent, IronClaw | Arquitetura consolidada; epic #2599 (IronClaw) busca modularizar |
| **UI-first monolithic** | CoPaw, PicoClaw | Desktop app + WebUI como diferencial de UX; CoPaw sofre com crashes de desktop |

### Por Público-Alvo

| Perfil | Projetos | Características |
|--------|----------|-----------------|
| **Desenvolvedores avançados** | ZeroClaw, Hermes Agent | CLI rico, múltiplos providers, configurações complexas, RFC-driven |
| **Usuários finais / SMB** | PicoClaw, CoPaw | Desktop app, WebUI, setup mais simples, foco em streaming/voice |
| **Pesquisa / Enterprise híbrido** | NullClaw, IronClaw | Refatorações arquiteturais intensas, sandboxing, multi-agent routing |
| **Pesquisa acadêmica** | NanoBot | Cron jobs, hooks extensíveis, pipeline de voice (STT→LLM→TTS), profiling |

### Por Diferencial Técnico

| Projeto | Diferencial #1 | Diferencial #2 |
|---------|----------------|----------------|
| **NullClaw** | Turn preemption em concurrent workers (#855) — mudança de threading model | Tailscale tunnel encryption (#850) |
| **NanoBot** | Voice pipeline completo (whisper + TTS) | Cron job + hook system extensível |
| **Hermes Agent** | Multi-canal mais maduro (Telegram, Discord, Slack, DingTalk, Matrix) | Circuit breaker para loops |
| **PicoClaw** | FreeRide failover automático | nightly build mais frequente |
| **IronClaw** | Engine v2 sandboxing progressivo | MCP per-channel routing (#1378, 33 dias aberto) |
| **CoPaw** | Dual-language EN/ZH nativo | Desktop app Windows mais funcional |
| **ZeroClaw** | WASM plugin isolation formal | RFC governance + 6 RFCs aceitos em uma semana |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | Característica |
|------|----------|----------------|
| **Iteração rápida** | NanoBot, Hermes Agent, IronClaw | 16–27 merges/24h, cycle de issue→fix < 48h, múltiplos autores |
| **Iteração concentrada** | NullClaw, CoPaw | 1 autor domina PRs, nenhum merge em 24h, alto volume de issues pendentes |
| **Iteração estruturada** | ZeroClaw | RFC-driven, release formal, mas cargo publish quebrado (bloqueia distribuição) |
| **Iteração oportunista** | PicoClaw | 1 release nightly + 2 merges; segurança WebSocket em review há 19 dias |

### Indicadores de Maturidade

| Indicador | Liderança | Laggards |
|-----------|-----------|----------|
| **Ciclo de release formal** | ZeroClaw (v0.7.3 + runbook) | CoPaw, NullClaw (sem releases) |
| **RFC / GEP process** | ZeroClaw (6 RFCs aceitos) | IronClaw (epic #2599 informal) |
| **Segurança disclosure** | IronClaw (#2381 remove credenciais cross-tenant), NanoBot (SSRF hardening) | CoPaw (localhost auth bypass quebrado) |
| **Documentação de migração** | ZeroClaw (nota de migração + changelog skill), IronClaw (ENGINE_V2 opt-in docs) | NullClaw (gap #821: versão "dev" sem changelog) |
| **Bug bounty / security policy** | Nenhum projeto documenta formalmente | — |

### Risco de Concentração

**Alerta crítico:** NullClaw (8/9 PRs do autor `manelsen`), CoPaw (proporção elevada de PRs sem merges) e IronClaw (4 PRs XL em aberto há 30+ dias) apresentam risco de **concentração de conhecimento** que pode se tornar blocker para crescimento da comunidade.

---

## 7. Sinais de Tendência

Extrapolados do feedback agregado da comunidade:

### Tendência 1 — De "Single Agent" para "Multi-Agent Orchestration"
**Evidência:** Issue #2767 (ZeroClaw, 7 👍 — maior demanda de feature do ecossistema), NullClaw inbound_router (pré-requisito para multi-agent routing), IronClaw epic #2599. **Implicação:** O mercado open source está reconhecendo que agentes únicos resolvem 60% dos casos; o restante exige routing, delegation e colaboração entre agentes.

### Tendência 2 — De "Plugins are code" para "Plugins are untrusted code"
**Evidência:** Os 5 projetos simultaneamente adicionando sandboxing (ZeroClaw WASM, IronClaw Engine v2, NanoBot Tirith, Hermes file locking, CoPaw YAML validation). **Implicação:** A comunidade está antecipando deployments onde skills e plugins vêm de fontes não-confiáveis. WASM isolation (ZeroClaw) é o estado da arte; a maioria ainda usa sandboxing shell-level.

### Tendência 3 — Provider Agnosticism como Feature Crítica
**Evidência:** FreeRide (PicoClaw), circuit breaker (Hermes), fallback cascade (NanoBot), Tailscale encrypted auth (NullClaw). **Implicação:** Usuários querem escolher provedores por custo/qualidade sem refatoração de código. Quem resolver provider abstraction primeiro terá vantagem competitiva significativa.

### Tendência 4 — Observabilidade como Requisito, não Luxo
**Evidência:** Health endpoints (NanoBot #2625), ProfilingHook (NanoBot #3204), Langfuse tracing (Hermes #1501), cron execution logs (CoPaw #3569), token usage em webhooks (ZeroClaw #5793). **Implicação:** Agents estão saindo do experimental para produção, exigindo debugging granular. Ferramentas de APM (Application Performance Monitoring) para agents é uma lacuna de mercado.

### Tendência 5 — Mobile e Cross-Platform como Vetor de Crescimento
**Evicância:** PicoClaw Android crash (#2590), CoPaw desktop app Windows (#3578), WeChat channel (CoPaw), Zalo channel request (PicoClaw #2261). **Implicação:** O desktop app é o vetor de adoção para não-desenvolvedores. Bugs de mobile/desktop (Android não inicia, desktop tela branca) são barriers de entrada mais severos que bugs de CLI.

### Tendência 6 — Integração com Infraestrutura de Rede Distribuída
**Evidência:** Tailscale (NullClaw #826, ZeroClaw RFC), IMAP polling fallback (ZeroClaw #5712), DingTalk Socket Mode (IronClaw #1549). **Implicação:** Agents estão sendo posicionados como "always-on personal servers" rodando em VPS ou edge devices, não apenas em desktop. Isso exige NAT-friendly connectivity e encrypted tunnels.

---

## Síntese para Decisores

| Decisor | Recomendação |
|---------|-------------|
| **Para escolher um projeto** | Hermes Agent para multi-canal maduro; ZeroClaw para segurança corporativa e extensibilidade; PicoClaw para usabilidade imediata com FreeRide |
| **Para contribuir** | CoPaw precisa urgente de reviewers (5 crashes pendentes); IronClaw PR #1378 (33 dias) é PR crítico em estado de abandono relativo |
| **Para expandir funcionalidades** | Todos os projetos aceitam PRs de provider integrations e channel integrations — menor barreira de entrada |
| **Para monitorar riscos** | CoPaw (estabilidade), NullClaw (concentração de autor), ZeroClaw (cargo publish quebrado bloqueia distribuição) |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-20

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **atividade excepcionalmente alta** neste período, com **160 PRs atualizados nas últimas 24h** e **13 issues movimentadas**. A equipe de desenvolvimento demonstra foco intenso em **estabilidade e segurança**, evidenciado por múltiplas correções de bugs críticos (vazamento de hints em cron jobs, segurança de filesystem, loops infinitos). Não houve lançamentos formais hoje, indicando que a base de código está em fase intensiva de preparação para uma próxima release. A comunidade está engajada com discussões sobre extensibilidade (plugin system, ContextVar) e melhorias em canais (Telegram).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. Isso sugere que a equipe está concentrando esforços em validação de PRs pendentes antes de um próximo lançamento.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#2625](https://github.com/HKUDS/nanobot/pull/2625) | Health endpoint no gateway (porta 18790) | Operacionalidade e monitoramento |
| [#1273](https://github.com/HKUDS/nanobot/pull/1273) | Telegram Inline Keyboards para múltipla escolha | Funcionalidade interativa |

### PRs em Revisão com Alto Impacto

| PR | Descrição | Estágio |
|----|-----------|---------|
| [#3320](https://github.com/HKUDS/nanobot/pull/3320) | Suprime saída intermediária em cron jobs | Aberto hoje |
| [#3202](https://github.com/HKUDS/nanobot/pull/3202) | Limita queue inbound (max 100, configurável) | Aberto em 16/04 |
| [#3204](https://github.com/HKUDS/nanobot/pull/3204) | `ProfilingHook` para timing de iterações | Aberto em 16/04 |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) | Reforça proteção de `history.jsonl`/.dream_cursor no filesystem | Aberto em 17/04 |

**Destaque:** O PR [#3320](https://github.com/HKUDS/nanobot/pull/3320) resolve um bug crítico onde cron jobs vazavam hints intermediários para o canal do usuário antes da decisão do evaluator.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Título | Comentários | Categoria |
|----------|--------|-------------|-----------|
| [#3300](https://github.com/HKUDS/nanobot/issues/3300) | API Deepseek não suportada | 6 | Bug |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Sugestões de melhorias (6 pontos) | 6 | Feature |
| [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini API key error | 5 | Bug |
| [#3274](https://github.com/HKUDS/nanobot/issues/3274) | Strategy de summary injection | 4 | Arquitetura |
| [#3257](https://github.com/HKUDS/nanobot/issues/3257) | Métricas de latência para voice (STT→LLM→TTS) | 3 | Feature |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system request | 3 | Feature |
| [#3318](https://github.com/HKUDS/nanobot/issues/3318) | Rework do claude_session tool | 1 | Refactoring |

### Análise de Demandas

1. **Integração de Providers:** Usuários enfrentam barreiras com Deepseek e Gemini, indicando necessidade de expansão de suporte a provedores LLM.

2. **Usabilidade:** A issue [#3107](https://github.com/HKUDS/nanobot/issues/3107) propõe 7 melhorias práticas (status de tasks, retry hints, config de timeout, fallback de provider).

3. **Extensibilidade:** A 请求 por plugin system (#2231) alinha o NanoBot com ferramentas como Claude Code e Copilot CLI.

4. **Latência Voice:** O cenário STT→LLM→TTS de ~35-60 segundos precisa de instrumentação para diagnóstico.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P0)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#3319](https://github.com/HKUDS/nanobot/issues/3319) | Cron jobs vazam intermediate tool hints para canal do usuário | **Alta** |
| [#3073](https://github.com/HKUDS/nanobot/issues/3073) | Agent entra em loop infinito de read_file em history.jsonl | **Alta** |
| [#3315](https://github.com/HKUDS/nanobot/issues/3315) | Mensagens muito longas no Telegram causam crash | **Alta** |

### Bugs Médios (P1)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#3300](https://github.com/HKUDS/nanobot/issues/3300) | API Deepseek não suportada | Closed |
| [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini multiple authentication credentials | Closed |
| [#3265](https://github.com/HKUDS/nanobot/issues/3265) | UI despeja output "thinking..." excessivo | Closed |

### Observações

- **Loop infinito** (#3073): Reproduzido com perguntas sobre "coisas recentes" causando 15+ iterações sem progresso.
- **Segurança SSRF**: Múltiplos PRs (#3235, #3252, #3240, #3255) reforçam proteções contra file://, gopher:// e bypass por shell expansion.
- **Email loop**: PR [#3234](https://github.com/HKUDS/nanobot/pull/3234) corrige auto-resposta infinita quando bot envia para si mesmo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Complexidade Estimada |
|-------|---------|----------------------|
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system (similar a Copilot CLI/Claude Code) | Alta |
| [#3309](https://github.com/HKUDS/nanobot/issues/3309) | Per-chat group policy overrides no Telegram | Média |
| [#3257](https://github.com/HKUDS/nanobot/issues/3257) | Pipeline latency metrics (STT→LLM→TTS) | Média |
| [#3116](https://github.com/HKUDS/nanobot/pull/3116) | Parâmetro de idioma para Whisper STT | Baixa |
| [#2217](https://github.com/HKUDS/nanobot/pull/2217) | Ação edit em cron tool + full message na list | Baixa |

### Propostas Arquiteturais

| Issue | Proposta | Alvo |
|-------|----------|------|
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ContextVar para task-local routing context | nightly |

### Indicadores de Prioridade Futura

- **Segurança em profundidade:** Tirith pre-exec scanning (#2414) mostra interesse em proteção avançada de terminal.
- **Observabilidade:** ProfilingHook (#3204) e health endpoint (#2625) indicam foco em debuggabilidade.
- **Telegram maturity:** Inline keyboards (#3317), topic support (#2255), oversized message handling (#3316) mostram evolução do canal.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Cenário | Frequência |
|-----|---------|------------|
| **Instabilidade com providers** | Usuários têm dificuldade configurando Deepseek e Gemini | 2 issues críticas |
| **Black box do estado** | Não há feedback claro sobre status de tasks e history | Issue #3107 |
| **Latência em voice** | 35-60s end-to-end sem diagnose granular | Issue #3257 |
| **UI verbosa** | Output "nanobot is thinking..." excessivo polui terminal | Issue #3265 |

### Cenários de Uso Emergentes

1. **Voice assistant completo:** faster-whisper + Cartesia TTS em produção
2. **Multi-group Telegram:** Bot adicionado em múltiplos grupos com necessidades distintas
3. **Plugin extensibility:** Comparação direta com Claude Code

### Satisfação Geral

**Pontos positivos destacados:**
- Funcionalidade rica de cron jobs
- Suporte a múltiplos canais (Telegram, email, etc.)
- Arquitetura hook-based permite customização

**Pontos de atrito:**
- Curva de configuração para novos providers
- Falta de instrumentação para debugging
- Documentação insuficiente sobre session history

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Título | Criado | Idade |
|-------|--------|--------|-------|
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ContextVar proposal | 2026-03-18 | ~33 dias |
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Plugin system request | 2026-03-18 | ~33 dias |
| [#2414](https://github.com/HKUDS/nanobot/pull/2414) | Tirith pre-exec scanning | 2026-03-23 | ~28 dias |
| [#2255](https://github.com/HKUDS/nanobot/issues/2255) | Telegram topic support | 2026-03-19 | ~32 dias |
| [#2217](https://github.com/HKUDS/nanobot/pull/2217) | Cron edit action | 2026-03-18 | ~33 dias |
| [#3073](https://github.com/HKUDS/nanobot/issues/3073) | Infinite read_file loop | 2026-04-12 | ~8 dias |

### Priorização Recomendada

| Prioridade | Item | Justificativa |
|------------|------|---------------|
| **Crítica** | [#3073](https://github.com/HKUDS/nanobot/issues/3073) Loop infinito | Usabilidade zero quando ocorre |
| **Alta** | [#2220](https://github.com/HKUDS/nanobot/issues/2220) ContextVar | Melhora async-safety |
| **Alta** | [#2231](https://github.com/HKUDS/nanobot/issues/2231) Plugin system | Diferencial competitivo |
| **Média** | [#2414](https://github.com/HKUDS/nanobot/pull/2414) Tirith | Camada de segurança |
| **Média** | [#3257](https://github.com/HKUDS/nanobot/issues/3257) Voice latency | Observabilidade |

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 8 |
| Issues fechadas | 5 |
| PRs abertos | 133 |
| PRs merged/fechados | 27 |
| Novas releases | 0 |
| Bugs críticos abertos | 3 |
| Features request abertas | 4+ |

**Saúde Geral:** O projeto está em **fase de maturação**, com foco em estabilidade, segurança e observabilidade. A alta atividade de PRs (160) indica esforço intensivo de desenvolvimento. Recommendamos atenção aos bugs de loop infinito e cron job para a próxima release.

---

*Relatório gerado em 2026-04-20 com dados do GitHub do HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-20

---

## 1. Panorama do Dia

O projeto mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h. A taxa de fechamento é saudável — 9 issues e 16 PRs foram resolvidos. Nenhum release novo foi publicado. O foco do dia foi **correções de bugs de estabilidade** (especialmente Docker, file-tools e provedores Kimi/Bedrock) e **melhorias de observabilidade e performance** (remoção de Z.AI probes, circuito de fallback). A comunidade reporta dores claras em autenticação, vazamento de memória em uso prolongado e complexidade de integração com provedores customizados.

---

## 2. Lançamentos

**Nenhum novo release publicado hoje (2026-04-20).**

O último release stable permanece **v0.10.0** (2026-04-16), conforme referenciado em reports de bugs. Recomenda-se monitorar PRs em revisão (especialmente #12765 — CI unblock) que podem indicar预备 de release.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (16 total — destaques):

| PR | Descrição | Impacto |
|---|---|---|
| **#12772** | Move `kimi-k2.5` para `_KIMI_THINKING_MODELS` (temperature=1.0) | ✅ Elimina HTTP 400 |
| **#12759** | Preserva dots em Bedrock inference profile IDs (`global.anthropic.claude-sonnet-4-6`) | ✅ Elimina HTTP 400 |
| **#12721** | File tools agora resolvem paths contra `TERMINAL_CWD` no modo `-w` | ✅ Corrigido isolation breach |
| **#12713** | Adiciona file locking (`fcntl.flock`) em `save_trajectory()` | ✅ Previne JSONL corruption |
| **#12733** | Docker entrypoint roda como root antes do remapping UID/GID | ✅ Corrigido workaround |
| **#12401** | Circuit breaker para tool calls idênticos falhando | ✅ Previne infinite loops |
| **#12753** | Surface agent errors em SSE chat completions | ✅ Corrigido silent stop |
| **#12773** | Salvage do fix de temperature Kimi no main | ✅ Consistência cross-branch |
| **#10070** | Fecha DingTalk websocket corretamente no disconnect | ✅ Corrigido hang |
| **#12680** | Honor public Moonshot temperature contract | ✅ Elimina HTTP 400 |

### PRs abertos aguardando merge:

- **#12777** — Skip fallback cascade para model-output errors ([#12770](https://github.com/NousResearch/hermes-agent/issues/12770)) — **alta prioridade**
- **#12765** — CI unblock + remove ~2s de Z.AI probes por AIAgent init — **performance crítica**
- **#12769** — DingTalk proactive messaging + media pipeline (feature parity)
- **#12776** — Gemini 3 preview models nos pickers
- **#12774** — Await async plugin command handlers (resolve `RuntimeWarning`)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

**1. #6475 — Claude subscription auth "out of extra usage" persiste após restart** 🔥
- Autores: `muskvc` | 12 comentários | 14 👍
- Status: CLOSED (sem confirmação pública de fix merge)
- **Análise:** Bug de autenticação com alto impacto em usuários pagos. Persiste após restart e re-login, indicando problema de state persistente no auth store.

**2. #4983 — Native Google GenAI Provider para Gemini Models** 🔥
- Autor: `bb873` | 12 comentários | 2 👍
- Status: CLOSED
- **Análise:** Demanda por integração nativa com Google Vertex AI para bypass de OpenRouter 402/rate limits. Correlaciona com #12639 (nova issue aberta hoje).

**3. #6174 — Matrix E2EE device verification fails** 🔥
- Autor: `dipping5115` | 5 comentários | 2 👍
- Status: CLOSED
- **Análise:** Problema de criptografia E2EE impede uso em ambientes Matrix seguros. Hermes não responde a verification requests (SAS).

**4. #1501 — Langfuse tracing para subagents e gateway sessions**
- Autor: `Aureliusf` | 4 comentários | 0 👍
- Status: OPEN | Aberta desde 2026-03-16
- **Análise:** Demanda de observabilidade para produção. Sem Langfuse, não há como trace execuções multi-step em gateway mode.

**5. #2761 — `hermes tools disable memory` ineficaz**
- Autor: `diegohb` | 4 comentários | 0 👍
- Status: OPEN | Aberta desde 2026-03-24
- **Análise:** Bug de CLI onde o comando reporta sucesso mas a ferramenta permanece enabled. Sem resposta há ~27 dias.

---

## 5. Bugs e Estabilidade

### 🔴 Alta Severidade (crashes, data loss, security)

| Issue | Descrição | Status |
|---|---|---|
| [#12682](https://github.com/NousResearch/hermes-agent/issues/12682) | TUI crasha com "JavaScript heap out of memory" após uso prolongado (~4GB heap) | **OPEN** |
| [#12731](https://github.com/NousResearch/hermes-agent/issues/12731) | Session compression trunca tool_call JSON para exatamente 214 chars — JSON inválido | **OPEN** |
| [#12770](https://github.com/NousResearch/hermes-agent/issues/12770) | Fallback cascade gasta 20-60s em erros de output do model | **OPEN** |
| [#12544](https://github.com/NousResearch/hermes-agent/issues/12544) | Webhook: signatures inválidas consomem rate-limit bucket antes da validação HMAC | **OPEN** |

### 🟡 Média Severidade (funcionalidade degradada)

| Issue | Descrição | Status |
|---|---|---|
| [#12750](https://github.com/NousResearch/hermes-agent/issues/12750) | Discord: Hermes responde inline ao invés de criar threads | **OPEN** |
| [#12638](https://github.com/NousResearch/hermes-agent/issues/12638) | Vision route dropeia provider name customizado | **OPEN** |
| [#12641](https://github.com/NousResearch/hermes-agent/issues/12641) | Status bar duplica como new lines quando ocioso | **OPEN** |
| [#12755](https://github.com/NousResearch/hermes-agent/issues/12755) | openviking plugin retorna 500 para file URIs em abstract/overview levels | **OPEN** |
| [#12689](https://github.com/NousResearch/hermes-agent/issues/12689) | file_tools.py ignora TERMINAL_CWD — isolation breach | **OPEN** |
| [#12745](https://github.com/NousResearch/hermes-agent/issues/12745) | kimi-k2.5 classificado incorretamente como instant mode (temp=0.6) | **OPEN** → fix em #12772 |

### 🟢 Correções Recentes de Estabilidade

- **#12721** — file-tools TERMINAL_CWD ([fix merged](https://github.com/NousResearch/hermes-agent/pull/12721))
- **#12713** — JSONL corruption com file locking ([fix merged](https://github.com/NousResearch/hermes-agent/pull/12713))
- **#12733** — Docker UID/GID remapping ([fix merged](https://github.com/NousResearch/hermes-agent/pull/12733))
- **#12772** — kimi-k2.5 temperature classification ([fix merged](https://github.com/NousResearch/hermes-agent/pull/12772))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas com demanda clara:

**1. #1501 — Langfuse tracing para subagents e gateway sessions** ([issue](https://github.com/NousResearch/hermes-agent/issues/1501))
- Permite trace multi-step em produção com Telegram/Discord/Slack
- Sinais: 4 comentários, issue ativa desde 2026-03-16

**2. #12639 — Native Google / Vertex AI Provider** ([issue](https://github.com/NousResearch/hermes-agent/issues/12639))
- Bypass OpenRouter 402 errors e rate limits
- Correlaciona com #4983 (CLOSED hoje — pode indicar início de implementação)

**3. #12655 — `picker_providers` config para filtrar provedores no `/model`** ([issue](https://github.com/NousResearch/hermes-agent/issues/12655))
- Permite esconder built-in providers para quem usa apenas custom endpoints
- 2 comentários, aberto hoje

**4. #11425 — Skills lifecycle management** ([issue](https://github.com/NousResearch/hermes-agent/issues/11425))
- Usage tracking, stale detection, auto-cleanup para skills
- 1 comentário, relevante para usuários com 89+ skills instaladas

**5. #6839 — Lazy Tool Schema Loading (Two-Pass Tool Injection)** ([issue](https://github.com/NousResearch/hermes-agent/issues/6839))
- Reduz ~3,500-5,000 tokens por chamada com 50+ tools
- 1 comentário, 3 👍 — problema de performance documentado

**6. #11115 — Lean default tool exposure + lazy non-core discovery** ([issue](https://github.com/NousResearch/hermes-agent/issues/11115))
- Primeira tool-enabled turn mais rápida
- 0 comentários, busca de feedback

---

## 7. Resumo de Feedback dos Usuários

### Dores reais mais reportadas:

1. **💸 Autenticação persistente em provedores pagos**
   - Claude subscription "out of extra usage" persiste após restart (#6475, 14 👍)
   - MiniMax health check retorna HTTP 404 mesmo com API funcional (#12768)

2. **💾 Vazamento de memória em uso prolongado**
   - TUI mode crasha com heap ~4GB após extended use (#12682)
   - Nenhum mecanismo de cleanup de sessão documentado

3. **🔒 Isolamento e segurança**
   - API keys de custom providers armazenadas em config.yaml (#8382 — PR aberto)
   - Webhook valida rate-limit antes de HMAC (#12544 — security issue)

4. **⚡ Performance excessiva no startup**
   - 8 HTTPS probes para Z.AI por AIAgent init adiciona ~2s de latência (#12765)
   - Tool schemas ~3,500-5,000 tokens por request mesmo sem uso (#6839)

5. **🔧 Integrações frágeis**
   - Matrix E2EE não funciona (#6174)
   - Discord não cria threads (#12750)
   - DingTalk sem feature parity com Feishu (#12769 — PR aberto)

### Cenários de uso predominantes:
- **Gateway multi-plataforma**: Telegram, Discord, Slack, DingTalk
- **Modelos de

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-20

## 1. Panorama do Dia

O projeto PicoClaw mantém alta atividade em 20 de abril de 2026, com **12 issues e 11 PRs** atualizados nas últimas 24 horas. Um novo nightly build (v0.2.6-nightly.20260420) foi liberado, sinalizando desenvolvimento contínuo. A comunidade está ativamente engajada em trêsvetores principais: **segurança de WebSocket** (dois PRs focados em hardening), **melhorias na experiência WebUI** (streaming e consumo de tokens) e **robustez de provedores** (FreeRide failover e refatorações). O estado geral reflete um projeto maduro em fase de estabilização e otimização, com issues críticos sendo tratados com prioridade.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.6-nightly.20260420.6126ede9

| Informação | Detalhe |
|---|---|
| **Versão** | v0.2.6-nightly.20260420.6126ede9 |
| **Tipo** | Automated build (uso谨慎— pode ser instável) |
| **Changelog** | https://github.com/sipeed/picoclaw/compare/v0.2.6...main |

**Observação:** Este é um build automatizado noturno da branch `main`. Recomenda-se cautela em ambientes de produção. A compilação inclui todas as contribuições mais recentes ainda não validadas em release estável.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje

| # | PR | Domínios | Impacto |
|---|---|---|---|
| **#2574** | Merge branch 'main' | agent, tool, config | Sincronização da branch com upstream principal |
| **#2588** | FreeRide model failover + provider architecture modernization | provider, tool, build | Integração do sistema FreeRide (failover inteligente) + refatoração arquitetural de provedores |

**Análise:**
- **#2588** é particularmente significativo. A integração do **FreeRide** permite rotação dinâmica entre provedores LLM gratuitos (via OpenRouter) quando modelos primários estão indisponíveis ou rate-limited. Isso representa um avanço estratégico na resiliência do agente e redução de custos operacionais.
- A refatoração simultânea da arquitetura de provedores sugere preparação para melhor modularidade e manutenção futura.

### PRs Abertas com Alto Impacto

| # | Título | Domínios | Status |
|---|---|---|---|
| **#2313** | Multi-User Support, Security Hardening, Skills whitelisting | agent, tool, config, build, docker | Em revisão (2+ dias) |
| **#2591** | FreeRide model failover integration | provider, agent, tool, build, go | Aberto recentemente (19/04) |
| **#2545** | Secure Pico websocket access behind launcher auth | channel, go | Em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Título | Tipo | Comentários | Reações | Demanda |
|---|---|---|---|---|---|
| **#2171** | [Refactor] Consider moving all OpenAI based endpoints to Responses API | enhancement | 7 | 0 | Migração para OpenAI Responses API (recomendação oficial da OpenAI) |
| **#2217** | Dashboard for token consumption statistics | feature | 2 | 0 | Visualização de estatísticas de consumo de tokens na WebUI |
| **#2216** | Show thinking content in WebUI | feature | 2 | 0 | Exibição de conteúdo "thinking" de modelos que suportam |
| **#2321** | Provider-Level Management for Model Configuration | feature | 2 | 0 | Eliminação de redundância na configuração de múltiplos modelos do mesmo provider |

**Análise das Demandas:**

1. **Migração para Responses API (#2171)** — Com 7 comentários, é a issue com maior discussão. O usuário `kunalk16` propõe migrar dos endpoints Chat Completions para Responses API da OpenAI. A equipe está avaliando quais endpoints suportam a nova API.

2. **WebUI Enhancements (#2217, #2216)** — Propostas por `MaoJianWei` focadas em melhorar a interface web com dashboard de tokens e exibição de raciocíniochain. Indica demanda por melhor visibilidade e UX.

3. **Provider-Level Configuration (#2321)** — Proposta de `redfox1999` para refatorar a estrutura de configuração, atualmente redundante quando usuários têm múltiplos modelos do mesmo provedor.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (7 identificáveis)

| # | Bug | Severidade | Provider/Canal | Atualização |
|---|---|---|---|---|
| **#2590** | **[CRÍTICA]** Android app - service does not start | **Alta** | build | 19/04 |
| **#2584** | **[CRÍTICA]** DeepSeek provider returns 401 authentication error despite valid API key | **Alta** | provider | 18/04 |
| **#2578** | **[ALTA]** openai_compat provider never sends Authorization header (API key silently dropped) | **Alta** | provider | 17/04 |
| **#2583** | **[MÉDIA]** qwen3.5 and gemma4 not working with ollama | Média | provider | 18/04 (CLOSED) |
| **#2310** | **[MÉDIA]** Chat history incomplete after page reload | Média | channel | 03/04 |
| **#2237** | Feishu Q&A issues with newapi provider | Média | provider, channel | 01/04 |
| **#2506** | CLA irrelevante (CLOSED/invalid) | Baixa | meta | 13/04 |

**Análise de Severidade:**

**🔴 Críticas:**
- **#2590**: O aplicativo Android não inicia o serviço, com erro em `/data/user/0/com.sipeed.picoclaw/files/libpicoclaw.so`. Possível problema de packaging ou embedded files.
- **#2584**: Autenticação falhando com DeepSeek mesmo com API key válida — verificado via curl. Possível regressão na headers handling.

**🟠 Altas:**
- **#2578**: `openai_compat` provider não envia header `Authorization`, quebrando todos os modelos HTTP que dependem de credenciais. Problema crítico identificado no v0.2.6 (commit 51eecde).

**⚠️ Recomendação:** Issues #2584, #2578 e #2590 merecem atenção imediata da equipe core, especialmente considerando que afetam provedores populares (DeepSeek, OpenAI-compatible APIs) e a plataforma mobile.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentemente Solicitadas

| # | Feature | Domínio | Proposta |
|---|---|---|---|
| **#2321** | Provider-Level Management | config, provider | Refatoração de configuração de modelos para reduzir redundância |
| **#2261** | Zalo Chat channel provider | channel | Integração com Zalo (mensageiro popular globalmente) |
| **#2217** | Token consumption dashboard | channel | Visualização de estatísticas de uso de tokens |
| **#2216** | Thinking content display | channel | Exibição de outputs de raciocínio chain-of-thought |
| **#2587** | Web chat streaming + scroll UX | provider, channel | Streaming E2E para web chat com UX melhorada |

### Sinais de Roadmap Inferidos

Baseado na análise das issues e PRs, o roadmap implícito sugere:

1. **Segurança reforçada** — Hardening de WebSocket (#2256, #2545), multi-user support com whitelisting (#2313)
2. **Resiliência de provedores** — FreeRide failover (#2591, #2588), melhor arquitetura de providers
3. **UX WebUI melhorada** — Streaming (#2587), dashboard de tokens (#2217), exibição de thinking (#2216)
4. **Novos canais** — Zalo (#2261)
5. **Melhoria de DX** — Refatoração de configuração (#2321), onboarding corrigido (#2490)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Autenticação/Providers** | Problemas recorrentes com headers de autorização em provedores openai_compat e DeepSeek | 3 issues |
| **Histórico de Chat** | Perda de histórico após reload de página na WebUI | 1 issue recorrente |
| **Mobile App** | Android não inicia serviço | 1 issue crítica |
| **Onboarding** | Avisos incorretos sobre arquivos de configuração desde v0.2.5 | 1 PR (corrigido em #2490) |

### Cenários de Uso Reportados

1. **Agents com múltiplos providers**: Usuários com configuração complexa (OpenAI + DashScope + DeepSeek) enfrentam redundância de configuração (#2321)
2. **Modelos com thinking**: Usuários de modelos recentes (qwen3.5, gemma4) com ollama reportam empty responses (#2583)
3. **WebUI em produção**: Usuários reportam que histórico some após reload — impacto em usabilidade e rastreabilidade (#2310)

### Satisfação Geral

**Neutro-Positiva**, com preocupação concentrado em:
- Bugs de autenticação sendo tratados como críticos
- Attratividade das features de streaming e dashboard

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou com Baixa Atividade

| # | Título | Status | Tempo Sem Resposta | Prioridade |
|---|---|---|---|---|
| **#2237** | 接入newapi的模型服务，飞书问答有点问题 | OPEN | ~19 dias | Média |
| **#2310** | 关于对话的历史记录显示问题 | OPEN | ~17 dias | **Alta** (usabilidade) |
| **#2261** | Zalo Chat channel provider | OPEN | ~18 dias | Baixa |
| **#2321** | Provider-Level Management | OPEN | ~16 dias | Média-Alta (arquitetural) |

### PRs em Revisão Prolongada

| # | Título | Domínios | Dias em Aberto | Blocker? |
|---|---|---|---|---|
| **#2313** | Multi-User Support, Security Hardening | agent, tool, config, build | ~17 dias | Não, mas significativo |
| **#2256** | Security: Harden websocket CheckOrigin | channel, go | ~19 dias | Sim (segurança) |
| **#2545** | Secure Pico websocket access | channel, go | ~4 dias | Sim (segurança) |

**Recomendação:**
- **#2256** e **#2545** tratam de segurança WebSocket e deveriam ser priorizados para merge
- **#2310** (histórico de chat) afeta diretamente a experiência do usuário e está aberto há 17 dias sem resposta
- **#2237** está sem interação da equipe core há quase 3 semanas

---

## 📊 Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues ativas | 10 | 🟢 Normal |
| PRs abertas | 9 | 🟢 Normal |
| Bugs críticos | 2-3 | 🟡 Atenção necessária |
| PRs de segurança | 4 | 🟢 Ativo |
| Velocidade de response | ~24-48h | 🟢 Bom |

---

*Relatório gerado em 2026-04-20 com dados do GitHub do projeto [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-04-20

---

## 1. Panorama do dia

O IronClaw mantém alta atividade de desenvolvimento com **50 PRs atualizados** e **11 issues** nas últimas 24h. A equipe fechou 17 PRs incluindo correções críticas de segurança e UX, enquanto 6 novas issues foram abertas cobrindo bugs, melhorias e epic requests. Não houve lançamentos hoje, mas múltiplos PRs aguardam merge com avanços significativos em gateway, segurança e engine v2. O volume de atividade sugere um sprint focado em estabilização pós-refatoração do gateway e preparação para sandboxing completo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em fase ativa de desenvolvimento sem tags de release novas. A última atividade de promoção staging ocorreu em `2026-04-19 19:48 UTC` (PR #2696), indicando que mudanças estão sendo promovi das para branches de staging.

---

## 3. Progresso do Projeto

### PRs merged/fechadas nas últimas 24h

| PR | Autor | Escopo | Impacto |
|---|---|---|---|
| [#2348](https://github.com/nearai/ironclaw/pull/2348) | zmanian | Gateway - títulos de chat descritivos | Resolve UUID truncado no sidebar web; substituído por #2700 |
| [#2379](https://github.com/nearai/ironclaw/pull/2379) | zmanian | MCP - normalização de nomes + UTF-8 | Fecha 3 bugs críticos de estabilidade |
| [#2381](https://github.com/nearai/ironclaw/pull/2381) | zmanian | Segurança - fallbacks cross-tenant | Remove credenciais hardcoded; fecha #2068, #2069, #2100 |
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | serrrfirat | Engine - `mission_get` action | Permite LLM recuperar resultados de missões |
| [#2694](https://github.com/nearai/ironclaw/pull/2694) | serrrfirat | Docs - ENGINE_V2 opt-in | Documenta flag de ativação para users |
| [#2624](https://github.com/nearai/ironclaw/issues/2624) | henrypark133 | E2E - Telegram 401 | Bug reportado como fechado |

**Destaque:** A correção de segurança em #2381 é particularmente relevante — remove fallbacks de credenciais cross-tenant que representavam risco de acesso não autorizado entre inquilinos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Autor | Comentários | 👍 | Status | Tema |
|---|---|---|---|---|---|
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | italic-jinxin | 2 | 2 | **CLOSED** | Hot-reload de LLM provider |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | henrypark133 | 2 | 1 | OPEN | Epic: boundaries do gateway |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | ilblackdragon | 2 | 0 | OPEN | Browser tool com Chromiumoxide |
| [#2600](https://github.com/nearai/ironclaw/issues/2600) | ek775 | 2 | 0 | **CLOSED** | CLI/TUI para secrets |

### Análise das demandas

**#1350 (hot-reload LLM)** — Resolvido. Usuários esperavam que mudanças de provider/model via UI fossem imediatas, não após restart. Corrigido com merge em staging.

**#2600 (secrets management)** — Fechado sem implementação imediata, mas reconhece uma lacuna de documentação. Usuários novatos têm dificuldade com autenticação em serviços terceiros.

**#2599 (gateway epic)** — Solicita refatoração do gateway em "bounded feature slices" com CI guardrails e E2E ownership por crate. Indica necessidade de arquitetura mais modular para facilitar manutenção.

---

## 5. Bugs e Estabilidade

### Issues de bug reportadas hoje

| Issue | Severidade | Escopo | Descrição |
|---|---|---|---|
| [#2697](https://github.com/nearai/ironclaw/issues/2697) | **HIGH** | Agent | Tempo incorreto reportado pelo agente (~11min atrás), causa rotinas agendadas errarem |
| [#2676](https://github.com/nearai/ironclaw/issues/2676) | **HIGH** | WASM | URL leak scan roda no URL pós-injeção; perdido em ambos paths channel e tool |
| [#2624](https://github.com/nearai/ironclaw/issues/2624) | MEDIUM | E2E/Telegram | Teste E2E Telegram falha com 401 bot token validation |

### Bugs resolvidos hoje

| Issue | Escopo | Problema |
|---|---|---|
| [#1947](https://github.com/nearai/ironclaw/issues/1947) | MCP CLI | Panics com UTF-8 multi-byte >57 bytes em descrições |
| [#1840](https://github.com/nearai/ironclaw/issues/1840) | CLI | `--cli-only` ainda inicia webhook server + ignora HTTP_HOST/PORT |

**Alerta:** O bug #2676 sobre WASM URL leak scan afeta potencialmente segurança de URLs em extensões e tools, sugerindo atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features propostas

| Issue/PR | Escopo | Descrição | Indicador estratégico |
|---|---|---|---|
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Browser tool | Browser built-in com Chromiumoxide CDP + AX-tree | Interação com páginas JS dinamicas |
| [#2600](https://github.com/nearai/ironclaw/issues/2600) | CLI/TUI | Utilitários para gerenciamento de secrets | DX para onboarding |
| [#2667](https://github.com/nearai/ironclaw/issues/2667) | Sandbox | Engine v2 full sandboxing (tracking) | Fase 8+ após Phases 1-7 shipped |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Gateway | Epic: feature boundaries + crate guardrails | Modularização arquitetura |

### PRs grandes em progresso

| PR | Size | Escopo | Estado |
|---|---|---|---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | XL | Per-channel MCP + tool filtering | Aberto, 2026-03-18 |
| [#2332](https://github.com/nearai/ironclaw/pull/2332) | XL | Web document uploads | Aberto |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | XL | Aliyun Coding Plan support | Aberto |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | XL | Auth flows + live canary coverage | Aberto |

**Sinal de roadmap:** O epic #2599 e o tracking issue #2667 indicam foco da equipe em:
1. Modularização do gateway
2. Sandbox completo (fases 8+)
3. Auth unificado

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Tema | Fonte | Impacto |
|---|---|---|
| **Mudança de LLM sem restart** | #1350 | UX frustrante — mudança via UI não tinha efeito |
| **Gestão de secrets não documentada** | #2600 | Onboarding dificultado; padrões de auth "drift over time" |
| **Títulos de chat como UUIDs** | #2237 via #2348 | UI confusa em conversas novas |
| **Tempo do agente incorreto** | #2697 | Rotinas/delações unreliable |

### Cenários de uso emergentes

- **Automação de rotinas com timed triggers** — Bug de tempo impacta reliability
- **Multi-channel deployment** — Feature #1378 visa resolver scoping per-canal
- **Web document processing** — Upload generalizado (PDF invoices → extração)
- **WASM extensibility** — Socket Mode Slack demonstra demanda por conexões NAT-friendly

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou aguardando resposta

| Issue | Criado | Atualizado | Estado | Prioridade |
|---|---|---|---|---|
| [#2669](https://github.com/nearai/ironclaw/issues/2669) Engine v2 review follow-ups | 2026-04-19 | 2026-04-19 | OPEN | MEDIUM |
| [#2676](https://github.com/nearai/ironclaw/issues/2676) WASM URL leak scan | 2026-04-19 | 2026-04-19 | OPEN | **HIGH** |
| [#2667](https://github.com/nearai/ironclaw/issues/2667) Engine v2 sandbox tracking | 2026-04-19 | 2026-04-19 | OPEN | HIGH |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) Browser tool | 2026-04-12 | 2026-04-19 | OPEN | MEDIUM |

### PRs antigos em revisão

| PR | Criado | Size | Escopo | Dias em aberto |
|---|---|---|---|---|
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | 2026-03-18 | XL | Per-channel routing | ~33 dias |
| [#1470](https://github.com/nearai/ironclaw/pull/1470) | 2026-03-20 | L | Routines notification normalization | ~31 dias |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 2026-03-20 | XL | Aliyun support | ~31 dias |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | 2026-03-21 | XL | Slack Socket Mode | ~30 dias |

**Recomendação:** PRs XL em aberto há >30 dias (#1378, #1446, #1549) merecem review acelerado ou decisão de архивация para reduzir backlog de review.

---

## Resumo Executivo

| Métrica | Valor |
|---|---|
| Issues ativas/novas (24h) | 11 (6 open, 5 closed) |
| PRs atualizados (24h) | 50 (33 open, 17 closed/merged) |
| Releases | 0 |
| Bugs HIGH abertos | 2 (#2676, #2697) |
| PRs XL em revisão | 4 |
| Tendência geral | 🟢 Ativo, focado em estabilidade pós-refatoração |

O IronClaw demonstra saúde de projeto com atividade robusta. Atenção necessária para: (1) bug #2676 WASM security, (2) bug #2697 time reporting, (3) merge/review de PRs XL antigos. A arquitetura está evoluindo para gateway modular e sandbox completo.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-04-20
**Fonte:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** nas últimas 24h, com 21 issues e 13 PRs atualizados, porém **nenhum release ou merge** foi realizado nesse período. A codebase acumula **13 PRs abertos** aguardando revisão, sugerindo um gargalo no pipeline de merges. A comunidade reportou uma **proporção elevada de bugs críticos** (crashes completos,KeyErrors, problemas de encoding), enquanto features de usabilidade (UI, timers, pagination) dominam os pedidos. A saúde geral indica **estabilidade em risco** — 5 de 21 issues são crashes completos que impedem uso produtivo.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24h.**

O projeto nãoemitiu versões desde o período analisado. Isso contrasta com o alto volume de PRs abertos e issues fechadas, indicando que o time pode estar em ciclo de desenvolvimento sem release formalizado.

---

## 3. Progresso do Projeto

**Nenhum PR foi merged ou fechado nas últimas 24h.** Todos os 13 PRs permanecem em estado `OPEN`, sugerindo que:

- O ciclo de code review está acumulado
- Principais PRs em análise:
  - [#3585](https://github.com/agentscope-ai/CoPaw/pull/3585) — `feat(telegram)`: mantém typing indicator ativo durante execução de tools (resolve #1874)
  - [#3583](https://github.com/agentscope-ai/CoPaw/pull/3583) — `fix(skill)`: adiciona try-except para erro em `require_bins` (fix direto de [#3568](https://github.com/agentscope-ai/CoPaw/issues/3568))
  - [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553) — `fix(console)`: evita crash SSE em texto Unicode surrogado (fix de [#3552](https://github.com/agentscope-ai/CoPaw/issues/3552))
  - [#3579](https://github.com/agentscope-ai/CoPaw/pull/3579) — `feat(agents)`: atribuição per-agent de modelo LLM na UI de Settings
  - [#3575](https://github.com/agentscope-ai/CoPaw/pull/3575) — `fix(app)`: recarrega agentes após mudanças globais de LLM
  - [#3574](https://github.com/agentscope-ai/CoPaw/pull/3574) — `feat(chat)`: substitui Web Speech API por transcrição Whisper (compatibilidade com navegadores chineses)
  - [#3558](https://github.com/agentscope-ai/CoPaw/pull/3558) — `feat(skills)`: suporte dual-language (EN/ZH) para skills built-in

**Alerta:** PRs como [#3583](https://github.com/agentscope-ai/CoPaw/pull/3583) e [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553) são **fixes críticos** para bugs de crash reportados na mesma janela de 24h — a ausência de merges indica risco de estabilidade.

---

## 4. Temas Quentes da Comunidade

| Issue/PR | Tipo | Comentários | Autor | Tema Principal |
|---|---|---|---|---|
| [#3568](https://github.com/agentscope-ai/CoPaw/issues/3568) | Bug | 3 | feng183043996 | Skill com YAML inválido causa crash total |
| [#3573](https://github.com/agentscope-ai/CoPaw/issues/3573) | Bug | 3 | Blithetem | cron com channel=weixin gera KeyError |
| [#3560](https://github.com/agentscope-ai/CoPaw/issues/3560) | Bug | 3 | pearlrice | Backend llama.cpp: erro de parsing em tool calls streaming |
| [#3552](https://github.com/agentscope-ai/CoPaw/issues/3552) | Bug | 3 | Prince-liu | Console channel crash em Unicode surrogado |
| [#1874](https://github.com/agentscope-ai/CoPaw/issues/1874) | Enhancement | 2 | pxdawn | Telegram typing indicator desaparece durante tool execution |

**Análise:** O tema mais urgente é **estabilidade de canais e ferramentas**. Cinco issues com 2-3 comentários cada indicam que bugs estão sendo discutidos ativamente. A comunidade demonstra preocupação com:

1. **Robustez do sistema de skills** — YAML malformado não deve causar crash total
2. **Compatibilidade com providers chineses** — WeChat (weixin), browser Chinese (豆包)
3. **Feedback visual durante processamento** — typing indicators e estados de loading

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (crash completo do sistema)

| Issue | Severidade | Descrição | Link |
|---|---|---|---|
| #3568 | **CRÍTICO** | Skill com YAML inválido causa crash total do QwenPaw — todas as mensagens param de responder | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3568) |
| #3578 | **CRÍTICO** | QwenPaw trava ao iniciar (tela branca) — desktop app | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3578) |
| #3573 | **ALTA** | KeyError em cron tasks com channel=weixin | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3573) |

### 🟡 Moderados (funcionalidade degradada)

| Issue | Severidade | Descrição | Link |
|---|---|---|---|
| #3552 | **MODERADA** | Console crash em SSE com Unicode surrogado | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3552) |
| #3560 | **MODERADA** | Tool call stream parsing error com backend llama.cpp customizado | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3560) |
| #3581/#3580 | **MODERADA** | `send_file_to_user` falha com ValueError em filenames com pontuação full-width no Windows | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3581) |
| #3582 | **MODERADA** | Localhost auth bypass não funciona — retorna 401 em 127.0.0.1 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3582) |

### 🟢 Leves (UX/UI)

| Issue | Severidade | Descrição | Link |
|---|---|---|---|
| #3546 | **LEVE** | Sidebar text overlap em dark mode | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3546) |

**Nota:** Existe PR aberto ([#3583](https://github.com/agentscope-ai/CoPaw/pull/3583)) que corrige o bug #3568, mas ainda não foi merged.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Funcionalidades com maior suporte observacional (comentários >= 1):

| # | Feature | Descrição | Link |
|---|---|---|---|
| #3563 | **Contexto de usage** | Ver consumo de tokens do contexto atual para decidir quando usar compact | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3563) |
| #3586 | **Timer sem approve** | Scheduled tasks não deveriam exigir aprovação manual | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3586) |
| #3569 | **Logs de cron + ajustes** | Ver histórico de execuções e ajustar DispatchChannel | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3569) |
| #3572 | **Código colapsável** | Code blocks deveriam suportar collapse | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3572) |
| #3571 | **Esconder top bar** | UI mais limpa — ocultar barra superior | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3571) |
| #3570 | **Paginação em "All Chats"** | Lista de conversas lenta com muitos chats | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3570) |
| #3576 | **Eliminar fonts.googleapis.com** | WebUI usa recursos inacessíveis na China | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3576) |
| #3566 | **view_image tool não registrado** | Ferramenta habilitada mas não aparece na lista do agent | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3566) |

### Sinais de roadmap detectados:
- **Multi-idioma**: PR [#3558](https://github.com/agentscope-ai/CoPaw/pull/3558) implementa suporte EN/ZH para skills built-in
- **Voice input robusto**: PR [#3574](https://github.com/agentscope-ai/CoPaw/pull/3574) substitui Web Speech API por Whisper (indica foco em acessibilidade)
- **LLM routing refinado**: PRs [#3550](https://github.com/agentscope-ai/CoPaw/pull/3550) e [#3452](https://github.com/agentscope-ai/CoPaw/pull/3452) mostram investimento em flexibilidade de modelos

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

1. **Instabilidade crítica** — usuários reportam crashes completos ao usar features básicas (skills, timers). O bug de YAML (#3568) é especialmente problemático pois **torna o bot completamente irrecuperável**.

2. **Ecossistema Windows/China fragmentado** — múltiplos issues de encoding (#3581), channel weixin (#3573), e fonts.googleapis.com (#3576) indicam que a base de usuários chineses enfrenta barreiras técnicas.

3. **UX de timers inadequada** — pedidos #3586 e #3569 revelam que o fluxo de trabalho de scheduled tasks é impraticável sem aprovação automática.

4. **UI pesada** — problemas de performance com listas longas (#3570), top bar intrusiva (#3571), e dark mode quebrado (#3546) sugerem dívida técnica em frontend.

5. **Context window management** — usuários não têm visibilidade de usage (#3563), o que causa decisões ruins sobre compaction.

### Cenários de uso reportados:
- Agentes pessoais com múltiplas channels (Telegram, WeChat, Console)
- Integração com providers locais (ollama, llama.cpp) e cloud (OpenRouter)
- Desktop app Windows como interface principal

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias (potenciais perdas):

| # | Idade | Tema | Link |
|---|---|---|---|
| #3562 | ~2 dias |ollama multi-turn output loss | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3562) |
| #3577 | ~1 dia | Pergunta sobre dependências do browser_visible skill | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3577) |

### Issues antigas ainda abertas (revisão recomendada):

| # | Criado | Tema | Link |
|---|---|---|---|
| #1874 | 2026-03-19 | Telegram typing indicator (32 dias) | [Issue](https://github.com/agentscope-ai/CoPaw/issues/1874) |
| #2432 | 2026-03-27 | Sender identity + timestamps em chat (24 dias) | [Issue](https://github.com/agentscope-ai/CoPaw/issues/2432) |

### Conflitos técnicos não resolvidos:

- **#3560** — tool call streaming com llama.cpp: usuário reporta que precisou de ajuda de Claude Code para investigar, sugerindo documentação insuficiente ou API instável.

### Recomendações de priorização:

1. **Merge urgente:** [#3583](https://github.com/agentscope-ai/CoPaw/pull/3583) (fix crash #3568) e [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553) (fix crash #3552)
2. **Triagem:** #3560 (llama.cpp streaming) e #3566 (view_image tool não registrado) — indicam gaps de integração
3. **Comunidade:** #1874 tem 32 dias e PR #3585 pronto — deveria ter sido merged

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-04-20. Todas as métricas referem-se à janela de 24h precedente.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-20

## 1. Panorama do Dia

O projeto ZeroClaw mantém um ritmo de desenvolvimento intenso com **46 issues e 44 PRs** atualizados nas últimas 24h, sinalizando alta atividade comunitária. A versão **v0.7.3** recém-lançada trouxe a maior reformulação estrutural da história do projeto — a divisão em workspace Cargo e novo schema de configuração — enquanto o trabalho já avança para a **v0.7.4**. Os principais vetores de atenção são a estabilização do microkernel (RFCs aceitos), melhorias na segurança de plugins WASM, e limpeza de workflows problemáticos de CI/CD. A comunidade demonstra maturidade ao aceitar múltiplos RFCs de governança e infraestrutura em paralelo.

---

## 2. Lançamentos

### v0.7.3 — Released
**Link:** https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Release estável |
| **Mudança desde** | v0.6.9 |
| **Escala** | Maior reformulação estrutural da história do projeto |

**Principais mudanças:**
- **Divisão em Cargo workspace**: todo o codebase foi decomposto em crates focados dentro de um workspace próprio, preparando o terreno para o microkernel.
- **Novo schema de configuração**: migrado com nova estrutura; atenção ao [Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) — `providers.models.llamacpp` está sendo ignorado no novo schema.
- **Nota de migração**: release anterior (v0.7.3-beta.1051) menciona "broken tags blowout", explicando o renúmero para v0.7.4 no tracking [Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877).

### v0.7.3-beta.1051 — Beta
**Link:** https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3-beta.1051

Release intermediária que precedeu a estável;obsoleta pelo tag blowout.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h (16 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#5913](https://github.com/zeroclaw-labs/zeroclaw/pull/5913) | `feat(plugins): wire up Extism WASM execution bridge (Phase 2 D2 plumbing)` | **Crítico** — WASM plugins agora executam de verdade via Extism 1.21 |
| [#5928](https://github.com/zeroclaw-labs/zeroclaw/pull/5928) | `ci: add daily advisory scan workflow` | Adiciona varredura diária de `cargo deny check advisories` às 09:00 UTC |
| [#5894](https://github.com/zeroclaw-labs/zeroclaw/pull/5894) | `fix(ci): replace RELEASE_TOKEN with GITHUB_TOKEN` | Remove dependência de PAT para release; corrige root cause de falhas |
| [#5924](https://github.com/zeroclaw-labs/zeroclaw/pull/5924) | `ci: fix Dockerfile COPY fragility` | Corrige cache de dependências Docker quebrado por COPYs de diretórios completos |
| [#5920](https://github.com/zeroclaw-labs/zeroclaw/pull/5920) | `docs(maintainers): add manual release runbook` | Documenta processo de release estável para mantenedores |
| [#5819](https://github.com/zeroclaw-labs/zeroclaw/pull/5819) | `feat(skills): add changelog-generation skill and protocol reference` | Substitui prompt estático por skill invocável padronizada |
| [#5793](https://github.com/zeroclaw-labs/zeroclaw/pull/5793) | `fix(gateway): emit token usage from webhook handler` | **Risk High** — corrige `POST /webhook` retornando `null` em `tokens_used` |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | `feat(channel): add IMAP polling fallback for servers without IDLE` | Adiciona suporte a servidores de email que não suportam IMAP IDLE (RFC 2177) |
| [#4917](https://github.com/zeroclaw-labs/zeroclaw/pull/4917) | `chore: add dm mention group mention docs` | Documenta filtragem por menção no WhatsApp (DMs e grupos) |

**Resumo**: Destaque para opline de plugins WASM (Extism) e higiene de CI/CD (advisory scan, GITHUB_TOKEN, Dockerfile). O PR #5793 corrige um bug de monitoramento de custos que estava silencioso.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria | Link |
|---|--------|:-----------:|:--:|-----------|------|
| #4866 | [Bug]: Web dashboard is still not available | 17 | 0 | **Bug S1** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| #5719 | runtime.kind = "native" does not bypass Docker | 10 | 0 | **Bug High** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) |
| #5574 | RFC: Intentional Architecture — Microkernel Transition | 9 | 0 | RFC | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| #5720 | PYTHONPATH=val command inline env var prefix syntax broken | 6 | 0 | Bug | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) |
| #5722 | Default shell sandbox blocks all realistic Python skill patterns | 5 | 0 | **Bug High** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| #2767 | [Feature]: Multi-Agent Routing | 4 | **7** | Feature | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) |
| #5601 | Add subscription-native OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax | 4 | 1 | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) |

**Análise:**

1. **Web dashboard quebrado (#4866)** — Com 17 comentários, é o issue mais discutido. Severidade S1 (workflow bloqueado). O dashboard web não está disponível mesmo após build, persistindo por várias versões. Afeta tanto UI quanto app desktop Tauri.

2. **Sandbox de shell e Python (#5719, #5720, #5722)** — O contribuidor **perlowja** reporta três issues relacionados ao ambiente de execução: `runtime.kind = "native"` não funciona como esperado, sintaxe de `PYTHONPATH=` inline está quebrada, e a sandbox bloqueia padrões realistas de skills Python. Juntos, esses três issues indicam uma barreira significativa para desenvolvedores de skills.

3. **Multi-Agent Routing (#2767)** — Feature mais desejada pela comunidade com **7 👍**, pedindo roteamento multi-agente similar ao OpenClaw. Issue está em status `stale` (03/03) mas continua gerando discussão.

4. **RFCs de arquitetura (#5574, #5579, #5577, #5576, #5653, #5615)** — Seis RFCs aceitos/fechados entre 10-12/04, todos criados por **WareWolf-MoonWall**. Representam a fundação de governança, infraestrutura CI/CD, documentação, cultura de contribuição e padrões de qualidade para a transição v0.7.0 → v1.0.0.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Bloqueado

| # | Título | Atualizado | Link |
|---|--------|------------|------|
| #4866 | Web dashboard não disponível | 2026-04-19 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| #5815 | Provider ignora `llamacpp` object no schema v2 | 2026-04-20 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) |

#### S2 — Comportamento Degradado

| # | Título | Atualizado | Link |
|---|--------|------------|------|
| #5844 | Enfase excessiva em memória — prompts ignoram contexto atual | 2026-04-19 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |
| #5897 | Telegram photo flow envia marcadores para provider não-vision | 2026-04-19 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) |

#### Bugs com Risk High (PRs abertos)

| # | Título | PR Associado | Link Issue | Link PR |
|---|--------|-------------|-----------|---------|
| #5774 | Skills não registradas no gateway path | #5774 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5774) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) |
| #5903 | MCP stdio processes acumulam com heartbeat.enabled=true | — | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | — |

**Nota sobre #5903**: Com `heartbeat.interval_minutes = 30` (default), aproximadamente **48 orphan MCP processes por dia** são acumulados — vazamento de memória e processos.

#### Bugs de CI/CD

| # | Título | Status | Link |
|---|--------|--------|------|
| #5811 | CI: `cargo publish` quebrado após microkernel split (#5559) | **Aberto** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5811) |

> ⚠️ **Bloqueia release pipeline v0.7.0+** — workspace sub-crates com `publish = false` impedem publicação ao crates.io.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda

| # | Título | 👍 | Tipo | Link |
|---|--------|:--:|------|------|
| #2767 | Multi-Agent Routing | **7** | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) |
| #5601 | OAuth native para Ollama Cloud, z.ai, Kimi, MiniMax | 1 | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) |
| #5896 | Full-duplex voice com barge-in support | 0 | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) |
| #4352 | GitHub integration tool | 0 | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) |
| #4704 | Raspberry Pi deployment guide | 3 | Docs | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) |

### Sinais de Roadmap via Issues/Abertos

| Categoria | Item | Link |
|-----------|------|------|
| **WASM Plugins** | Phase 2 D2 — WASM bridge completo | [Issue #5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) |
| **Segurança Plugins** | Allowlist para `zc_env_read` | [Issue #5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) |
| **Segurança Plugins** | Proteção SSRF para `zc_http_request` | [Issue #5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) |
| **UX Multi-agent** | RFC: Multi-agent UX flow — design | [Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |
| **Musl/Alpine** | Builds musl para máquinas leves | [PR #5739](https://github.com/zeroclaw-labs/zeroclaw/pull/5739) |

### v0.7.4 Milestone (Tracking: [Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877))

Work items identificados:
- [ ] #5818/#5819 — `feat(skills): add changelog-generation skill`
- [ ] #5811 — Fix `cargo publish` broken
- [ ] #5876 — CI action-pinning enforcement (FND-004 Phase 1 D4)
- [ ] #5922, #5925, #

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*