# Resumo diário do ecossistema de agentes de IA 2026-08-03

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-02 20:47 UTC

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


# Relatório Comparativo: Ecossistema Open Source de Agentes de IA

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** em agosto de 2026. Por um lado, ZeroClaw demonstra maturidade avançada com 100 atividades (issues + PRs) em 24h, release publicada (v0.8.4) e foco em arquitetura de longo prazo (RFCs de storage, Chat Completions, goal mode). Por outro lado, projetos como IronClaw e NanoBot operam em ciclos de desenvolvimento intensivo, com dezenas de PRs e foco em estabilidade de produção — IronClaw consolidando uma onda massiva de refatorações contratuais, e NanoBot endereçando bugs P1 críticos em gateways e providers de IA. Hermes Agent e PicoClaw mantêm atividade moderada com foco em plataformas específicas (Telegram, WeChat). CoPaw destaca-se pela resolução rápida de problemas de escalabilidade em redes lentas. NullClaw permanece inativo, sinalizando possível abandono ou estagnação do projeto.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas | PRs Abertas (24h) | PRs Merged (24h) | Releases | Saúde | P1/Bugs Críticos |
|---------|---------------|-------------------|------------------|---------|------|------------------|
| **ZeroClaw** | ~50 | ~50 | 1 | v0.8.4 | 🟢 Alta maturidade | 5 S0/S1 |
| **IronClaw** | 4 | 22 | 8 | Nenhuma (pendente) | 🟡 Refatoração ativa | 2 críticos |
| **NanoBot** | 0 | 9 | 1 | Nenhuma | 🟡 Estável, P1 pendentes | 2 P1 |
| **Hermes Agent** | 6 | 6 | 2 | Nenhuma | ⚠️ P2 afetando plataformas | 0 P1 (5 P2) |
| **PicoClaw** | 3 | 5 | 2 | Nenhuma | 🟡 Estável, PR segurança | 1 crítica |
| **CoPaw** | 2 | 4 | 0 | Nenhuma | 🟡 Moderada | 2 críticas (performance) |
| **NullClaw** | — | 0 | 0 | Nenhuma | 🔴 Inativa | — |

**Observação:** ZeroClaw é o único projeto com release publicada no período, indicando maturidade no pipeline de CI/CD. NanoBot e CoPaw apresentam métricas de saúde melhores por volume de atividades, enquanto Hermes Agent tem tempo médio de resposta superior a 3 dias — indicador de gargalo em review.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder Técnico do Ecossistema

**Vantagens competitivas:**

- **Arquitetura mais madura:** 18 crates publicados no crates.io, workspace publicável, changelog completo
- **RFC-driven development:** 8 RFCs ativas com discussão comunitária substancial (até 16 comentários), demonstrando governança transparente
- **Segurança-first:** Bugs S0 com triagem imediata; 2 vulnerabilidades RUSTSEC endereçadas em 24h (#9671)
- **Expansão de protocolo:** RFC #8603 (Chat Completions profile) posiciona para compatibilidade com ecossistema OpenAI — mudança estratégica para adoção B2B

**Diferenças técnicas:**

| Aspecto | ZeroClaw | NanoBot | Hermes Agent |
|---------|----------|---------|--------------|
| **Stack** | Rust (microkernel modular) | Python (gateway/providers) | Python (TUI/Gateway) |
| **Modelo de deployment** | Daemon standalone, crates.io | Gateway + providers | Desktop app + TUI |
| **Foco de stability** | Memory storage, isolation | Providers AI (Gemini, OpenAI) | Mensageria (Telegram, WeChat) |
| **Governança** | RFC formal, 8 RFCs ativas | Issue-less (comunidade passiva) | Issues P2 acumuladas |

**Tamanho da comunidade:** ZeroClaw lidera com ~50 atividades/dia e engajamento em RFCs. NanoBot tem volume de PRs comparable mas sem discussão comunitária visível. Hermes Agent apresenta 6 issues abertas há >3 dias sem resposta — indicativo de comunidade menor ou mantenedores sobrecarregados.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Gateway e Shutdown

Três projetos (NanoBot, Hermes Agent, PicoClaw) enfrentam problemas de **shutdown não-deterministico**:

- **NanoBot #5215:** `RuntimeError: Event loop is closed` ao parar gateway com sessões exec ativas
- **Hermes Agent #77045:** Deadlock de flood control no Telegram (30+ minutos de bloqueio)
- **PicoClaw #3311:** Loop silencioso de ferramentas com falhas idênticas

**Padrão detectado:** Frameworks baseados em Python com corrotinas enfrentam desafios de cleanup assíncrono em ambientes de produção com sessões de longa duração.

### 4.2 Resiliência de Providers e APIs

- **NanoBot #5214:** Fallback automático para Chat Completions quando Responses API falha
- **CoPaw #6636/#6634:** Paginação e compressão GZip para payloads MB-level
- **ZeroClaw #8838:** Harden SSE completion e idle timeouts

**Padrão detectado:** Necessidade de fallbacks graciosos e degradação controlada quando provedores de IA ou APIs retornam erros.

### 4.3 Segurança e Isolamento

- **PicoClaw #3297:** Security hardening para remote prompts e exec boundaries
- **ZeroClaw #9646/#9647:** Per-agent ownership scoping (S0 — dados cross-agent)
- **ZeroClaw #9653:** Plugin WASI HTTP trust boundaries

**Padrão detectado:** Isolamento de agentes em ambientes multi-tenant é preocupação transversal, especialmente em projetos com ambição de uso empresarial.

### 4.4 Performance de APIs e Frontend

- **CoPaw:** Timeout de 30s em fetch com payloads grandes — falha completa sem degrade
- **IronClaw #6973:** Regressão PostgreSQL — p95 3.74s → 12.0s (3x)
- **NanoBot #5194:** Performance lenta em listas de sessão/threads JSONL

**Padrão detectado:** Escalabilidade de APIs não foi prioridade inicial em nenhum projeto;现在开始 retrofitting de paginação e compressão.

---

## 5. Análise de Diferenciação

### 5.1 Posicionamento de Público-Alvo

| Projeto | Público Primário | Caso de Uso Central | Modelo de Revenue |
|---------|-----------------|-------------------|-------------------|
| **ZeroClaw** | Desenvolvedores Rust, empresas | Agentes autônomos multi-task, goal mode | Enterprise features (telemetry, Chat Completions) |
| **NanoBot** | Pesquisadores, devs Python | Gateway de providers AI, sessões multi-turn | Community-driven |
| **Hermes Agent** | Usuários finais (Telegram/WeChat) | Mensageria com IA | Desktop app + subscriptions |
| **PicoClaw** | Usuários finais (Telegram) | Bot commands, ferramentas shell | Community-driven |
| **IronClaw** | Desenvolvedores enterprise | Orchestration de agentes, Reborn features | Enterprise/NEAR ecosystem |
| **CoPaw** | Equipes usando AgentScope | Skill pool management | Platform/infra |

### 5.2 Diferenças Arquiteturais

**Abordagem modular vs. monolítica:**

- **ZeroClaw:** Arquitetura microkernel com 18+ crates separados, preparação para publicação como biblioteca
- **IronClaw:** Refatoração WS2.x/WS5 separando `extension_manager` do `extension_host` — modularização em progresso
- **NanoBot:** Gateway centralizado com providers plugáveis — arquitetura mais acoplada mas simples

**Protocolos de comunicação:**

- **ZeroClaw:** WebSocket, ACP, webhooks, RFC para Chat Completions
- **Hermes Agent:** TUI Gateway com WebSocket attachment, Telegram/WeChat adapters
- **PicoClaw:** Foco em comandos shell e tools — protocolo interno

### 5.3 Estratégia de Features

| Estratégia | Projetos | Comportamento |
|------------|----------|---------------|
| **Expansão de providers** | NanoBot, ZeroClaw, CoPaw | Adicionar suporte a mais modelos (MiniMax music #5212, AI Router #3298) |
| **Enterprise readiness** | ZeroClaw, IronClaw | Foco em segurança, isolamento, budget gates |
| **UX/Platform** | Hermes Agent, PicoClaw | Melhorias de mensageria, TTS, comandos |
| **Performance infra** | CoPaw, IronClaw | Paginação, compressão, regressão DB |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Velocidade Máxima (Iteração Rápida)

| Projeto | Velocidade | Indicador |
|---------|------------|-----------|
| **ZeroClaw** | 🔴 Muito alta | 50 PRs/issues em 24h, RFCs com 10-16 comentários |
| **IronClaw** | 🔴 Alta | 22 PRs atualizados, 8 merges em 24h, onda de refatoração WS2 |
| **NanoBot** | 🟠 Alta | 10 PRs em 24h, foco em P1 |

**Análise:** ZeroClaw demonstra a comunidade mais engajada com discussão técnica substancial (RFCs com 10+ comentários). IronClaw mantém ritmo intenso de refatoração, indicando fase de consolidação antes de release. NanoBot apresenta volume alto mas sem visibilidade de discussão comunitária.

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Estágio | Indicador |
|---------|---------|-----------|
| **PicoClaw** | 🟡 Estável | Bug crítico (#3311) com PR aberta no mesmo dia — resposta rápida |
| **CoPaw** | 🟡 Estável | PRs abertas aguardando merge, issues de performance abertas e fechadas |
| **Hermes Agent** | ⚠️ Atenção | 5 P2s acumuladas, tempo de resposta >3 dias |

**Análise:** PicoClaw demonstra maturidade em resposta a bugs de produção. CoPaw mantém ciclo saudável de fix-review. Hermes Agent apresenta sinais de gargalo em review — 5 issues P2 sem ação em 3+ dias.

### 6.3 Sinais de Estagnação

- **NullClaw:** Zero atividade em 24h — possível abandono ou manutenção mínima
- **Hermes Agent:** Tempo médio de resposta >3 dias pode indicar mantenedores sobrecarregados

---

## 7. Sinais de Tendência

### 7.1 Tendências Técnicas

**1. Fallback e resiliência de providers como padrão:**
> NanoBot (#5214), CoPaw (#6636), ZeroClaw (#8838) implementam independentemente fallbacks graciosos. A lição aprendida: APIs de IA falham inevitavelmente — o código cliente deve estar preparado.

**2. Isolamento de agentes para multi-tenant:**
> ZeroClaw (#9646, #9647) e IronClaw (#5981, #5982 — queued steering, budget gates) avançam independentemente em direção a isolamento de agentes. Este é um requisito para uso empresarial.

**3. Segurança de shell/exec como preocupação primária:**
> PicoClaw (#3297, #3311), ZeroClaw (#9633, #9617), NanoBot (#5215) — todos enfrentam desafios de segurança em execuções de comandos. A superfície de ataque em agentes que executam shell commands é crítica.

**4. Paginação e compressão como requisitos de produção:**
> CoPaw (#6636) é o exemplo mais claro, mas o problema é sistêmico. APIs que retornam payloads GB-level sem paginação quebram em redes não-ideais.

### 7.2 Tendências de Mercado

**1. Chat Completions como porta de entrada:**
> ZeroClaw RFC #8603 busca compatibilidade com OpenAI SDK e clientes como Open WebUI, Continue.dev, LangChain. Esta é uma estratégia de adoção: em vez de competir com o ecossistema OpenAI, tornar-se compatível.

**2. Enterprise features em roadmap:**
> - ZeroClaw: Telemetry opt-in (#9621), budget gates (#5982)
> - IronClaw: Budget approval gate + usage settings (#5982)
> - NanoBot: Trusted proxy bootstrap auth (#5210) para Cloudflare Access

**3. Multi-provider como diferencial:**
> NanoBot (#5212 — MiniMax music), PicoClaw (#3298 — AI Router), CoPaw (#6631 — Aliyun alignment) indicam diversificação além de OpenAI/Google como estratégia de diferenciação.

**4. Goal mode e autonomia limitada:**
> ZeroClaw (#8303), IronClaw (#5981 — queued steering) avançam independentemente em direção a agentes que perseguem objetivos de longa duração com autonomia controlada. Este é um padrão de mercado para agentes de produção.

### 7.3 Tendências de Arquitetura

**1. Microkernel/modular para projetos maduros:**
> ZeroClaw (18 crates), IronClaw (separação extension_manager) — a modularidade é característica de projetos que transitam de "funciona" para "manutenível".

**2. Python como stack dominante para prototipagem:**
> NanoBot, Hermes Agent, PicoClaw, CoPaw usam Python. ZeroClaw e IronClaw usam Rust. A escolha parece correlacionar com maturidade do projeto.

---

## 8. Síntese para Tomadores de Decisão

| Critério | Líder | Seguidor Próximo | Observação |
|----------|-------|------------------|------------|
| **Atividade de desenvolvimento** | ZeroClaw | NanoBot, IronClaw | ZeroClaw com 5x mais atividades |
| **Velocidade de resposta a bugs** | PicoClaw | NanoBot | PicoClaw respondeu ao bug crítico no mesmo dia |
| **Maturidade de release** | ZeroClaw | IronClaw (pendente) | ZeroClaw é único com release publicada |
| **Engajamento comunitário** | ZeroClaw | — | RFCs com 10-16 comentários |
| **Foco em segurança** | ZeroClaw | PicoClaw | ZeroClaw com 5 bugs S0/S1 |
| **Roadmap de enterprise** | ZeroClaw, IronClaw | NanoBot | Ambos com budget gates e auth features |
| **Performance de APIs** | CoPaw | NanoBot | CoPaw prioriza escalabilidade de rede |

**Recomendação estratégica:** Para integração de plataforma, ZeroClaw representa a escolha mais madura. Para contribuição em ecossistema Python, NanoBot oferece volume de atividade comparável. Para quem prioriza segurança de código, ZeroClaw e PicoClaw demonstram compromisso com hardening.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-08-03

---

## 1. 🌅 Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com **10 pull requests atualizadas nas últimas 24 horas** — todas pertencentes a um único dia intenso de trabalho. Apenas 1 PR foi fechada/merged, enquanto 9 permanecem abertas aguardando revisão. Não há issues novas nem releases recentes. A atividade concentra-se em **correções de bugs P1/P2** relacionadas a provedores de IA (especialmente Gemini e OpenAI Responses API) e melhorias de estabilidade no gateway e sessões, indicando um foco atual em robustez e qualidade de produção.

---

## 2. 🚀 Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O repositório não publicou novas versões neste período. Recomenda-se monitorar a fila de PRs abertas — especialmente as correções P1 — que podem indicar uma release corretiva iminente.

---

## 3. 💻 Progresso do Projeto

### PR Fechada/Merged

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | `fix(codex): dedup reasoning items before send, retry on duplicate-item 400` | eldar702 | **Crítico** — Resolve falha terminal em conversas multi-turn com `openai_codex_provider` causada por itens duplicados retornando erro `400 Duplicate item found with id`. Inclui passagem de deduplicação antes do envio e lógica de retry. Fecha #3633. |

**Avanço significativo:** A correção do bug de itens de raciocínio duplicados é essencial para sessões prolongadas com provedores Codex, eliminando crashes silenciosos que quebravam conversas multi-turn.

---

## 4. 🔥 Temas Quentes da Comunidade

### PRs com Maior Prioridade ou Complexidade

| # | Título | Prioridade | Tema Central |
|---|--------|------------|--------------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | `fix(gateway): close agent resources deterministically on stop` | P1 | **Estabilidade de shutdown** — Corrige ruído de teardown asyncio e stalls ao parar o gateway com sessões exec ou subprocessos MCP ainda ativos. |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | `fix(providers): fall back to chat completions on serde body rejections` | P1 | **Resiliência de API** — Implementa fallback automático para OpenAI Chat Completions quando a Responses API rejeita o body com erro de desserialização. |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | `feat(webui): support trusted proxy bootstrap auth` | P1 | **Segurança de deployment** — Adiciona autenticação via proxy confiável para `/webui/bootstrap`, alinhado a setups Cloudflare Tunnel + Cloudflare Access. |

**Análise:** A comunidade demonstra forte preocupação com **resiliência operacional** (P1s focadas em estabilidade de gateway, fallback de API e shutdown limpo). A feature de autenticação por proxy confiável indica adoção crescente em ambientes empresariais.

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 P1 — Críticos (2 PRs abertas)

| # | Descrição | Impacto |
|---|-----------|---------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway falha ao fechar recursos deterministicamente — `RuntimeError: Event loop is closed` no shutdown | Impede reinicializações limpas; afeta automações e CI/CD |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | OpenAI Responses API falha com `serde deserialization error` sem fallback | Conversas terminais abortam sem rota alternativa |

#### 🟡 P2 — Importantes (3 PRs abertas)

| # | Descrição | Impacto |
|---|-----------|---------|
| [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash image models retornam `HTTP 400 INVALID_ARGUMENT` com hints de aspect ratio/size | Bloqueia uso de modelos de imagem Gemini |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) | Comandos `nanobot plugins enable` falham em ambientes `uv tool` sem pip | Quebra instalação oficial em sistemas sem `ensurepip` |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | Desempenho lento no carregamento de listas de sessão e threads JSONL | Degrada UX da WebUI em workspaces com muitas sessões |

#### 🟢 P3 / Outros (2 PRs abertas)

| # | Descrição |
|---|-----------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Subagent não marca corretamente resultados de completion parcial — modelo pode inferir resultados não finalizados |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | ~~Codex duplicando reasoning items~~ — **RESOLVIDO** |

**Métricas de saúde:** 0 issues ativas. 2 bugs P1 em revisão — necessidade de revisão prioritária para evitar bloqueios em produção.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Features Novas Propostas

| # | Título | Escopo | Relevância Estratégica |
|---|--------|--------|------------------------|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | `feat(session): add cross-session search and mentions` | **UX/Core** | Permite busca entre sessões e menções (`@`) para referenciar conversas existentes — melhoria significativa de produtividade |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) | `feat: add MiniMax music guidance` | **Provider** | Adiciona suporte a geração de música MiniMax via tool contract discovery |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | `feat(webui): support trusted proxy bootstrap auth` | **Segurança/Deploy** | Habilita deployments em ambientes Cloudflare com autenticação corporativa |

### Sinais de Roadmap Detectados

- **Expansão multi-provider:** Integração com MiniMax music generation (#5212) indica estratégia de diversificação de provedores além de OpenAI/Google.
- **Interoperabilidade de sessões:** A feature de busca e menções cross-session (#5211) sugere movimento para um modelo de conversa mais conectado e contextual.
- **Enterprise readiness:** Suporte a proxy confiável (#5210) evidencia foco em adoção corporativa e ambientes controlados.

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Identificadas (via PRs e contexto)

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| Falhas em Shutdown | Alta | 🔴 P1 | #5215 — `RuntimeError: Event loop is closed` |
| Fracasso de API OpenAI Responses sem fallback | Alta | 🔴 P1 | #5214 — conversas abortam sem rota alternativa |
| Modelos Gemini Flash Image quebrados | Média | 🟡 P2 | #5216 — `HTTP 400 INVALID_ARGUMENT` |
| Plugins não funcionam com uv tool | Média | 🟡 P2 | #5213 — instalador oficial não detecta uv |
| Performance de lista de sessões | Baixa | 🟡 P2 | #5194 — UX degradada com muitas sessões |

### Cenários de Uso Emergentes

- **Agentes de longa duração:** O bug de deduplicação de reasoning (#4021, agora resolvido) indica uso em pipelines complexos multi-turn.
- **Deployments corporativos:** A feature de proxy confiável (#5210) confirma adoção em infraestruturas corporativas com Cloudflare.
- **Geração de conteúdo multimídia:** A integração com MiniMax music (#5212) sugere uso em pipelines de criação de conteúdo.

### Satisfação Geral

A ausência de issues abertas e a rápida resolução do bug Codex (#4021) indicam **saúde operacional razoável**, mas os 2 bugs P1 em aberto exigem atenção imediata para manter a confiança em produção.

---

## 8. 📋 Backlog que Merece Atenção

### PRs Sem Atividade Recente ou Aguardando Revisão

| # | Título | Idade | Status | Urgência |
|---|--------|-------|--------|----------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | `fix(subagent): mark partial completion results` | 6 dias | Aberta | 🟡 Analisar — afeta precisão de resultados de subagentes |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | `perf(webui): accelerate JSONL session list and thread loading` | 3 dias | Aberta | 🟡 Revisar — melhoria de performance WebUI |

### Recomendações para Mantenedores

1. **Prioridade imediata:** Revisar e mergear #5215 e #5214 (ambos P1).
2. **Atenção warranted:** #5194 é uma melhoria de performance que pode ser simples de aceitar e melhorar a UX significativamente.
3. **Monitoramento:** A feature #5211 (cross-session search) tem potencial estratégico — considerar priorização no roadmap.

---

## 📌 Resumo Executivo

| Métrica | Valor |
|---------|-------|
| PRs ativas (24h) | 9 |
| PRs fechadas/merged (24h) | 1 |
| Issues ativas | 0 |
| Releases | 0 |
| Bugs P1 em aberto | 2 |
| Bugs P2 em aberto | 3 |
| Features propostas | 3 |

**Veredicto de Saúde:** 🟡 **Estável, com trabalho corretivo pendente.** O projeto demonstra atividade saudável, mas há **2 bugs críticos P1** que devem ser priorizados para evitar impactos em ambientes de produção. A ausência de issues indica baixa tensão da comunidade, mas o volume de PRs sugere um ciclo de desenvolvimento ativo.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
**Data de Referência:** 02/08/2026  
**Status:** Projeto Ativo — 6 Issues Abertas, 2 Resolvidas

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade em 02/08/2026, com **6 Pull Requests abertos** e **2 fechados**. O foco principal está na estabilidade do gateway, especialmente em relação ao Telegram (deadlock por flood control) e problemas de configuração de API. A comunidade demonstra preocupação significativa com recuperação de erros em plataformas externas (WeChat/Weixin) e compatibilidade com macOS. O único PR fechado hoje (#77071) resolve um problema crítico de atualização no desktop Windows.

---

## 2. Lançamentos

**Nenhum lançamento registrado hoje.**

| Release | Status |
|---------|--------|
| - | Sem releases nas últimas 24h |

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#77071](https://github.com/NousResearch/hermes-agent/pull/77071) | Allow updater-managed gateway through preflight | **Crítico** — Resolve crash no Desktop Windows ao iniciar gateway via updater. Remove bloqueio prematuro do `python.exe` do gateway. |
| [#32904](https://github.com/NousResearch/hermes-agent/pull/32904) | Add /api/ws WebSocket endpoint to APIServerAdapter | **Funcionalidade** — Corrige conexão remota do TUI ao adicionar rota WebSocket que faltava. Fecha issue #32882. |

### Avanços Principais:
- **Desktop App:** Fluxo de atualização restaurado para Windows
- **TUI Remoto:** Suporte a anexo WebSocket via API Server

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção

| PR/Issue | Tema | Análise da Demanda |
|----------|------|-------------------|
| [#77045](https://github.com/NousResearch/hermes-agent/pull/77045) | Flood Control Deadlock no Telegram | **P2, alta severidade** — Adapter bloqueia por 30+ minutos dentro de corrotina, travando todo o sistema de mensagens pendentes. Demanda por timeout assíncrono ou reestruturação do retry. |
| [#77079](https://github.com/NousResearch/hermes-agent/pull/77079) | Limpeza de Blocos `<think>` no TTS | **UX de Voz** — Limpeza inconsistente entre pipeline batch e streaming causa vazamento de conteúdo de raciocínio para usuários finais. |

### Reações/Comentários Registrados: **0 👍 em todos os PRs abertos**

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Count | Exemplos |
|------------|-------|----------|
| **P1 (Crítico)** | 0 | — |
| **P2 (Alta)** | 5 | [#77045](https://github.com/NousResearch/hermes-agent/pull/77045), [#74505](https://github.com/NousResearch/hermes-agent/pull/74505), [#74524](https://github.com/NousResearch/hermes-agent/pull/74524), [#74572](https://github.com/NousResearch/hermes-agent/pull/74572), [#32904](https://github.com/NousResearch/hermes-agent/pull/32904) (agora fechada) |
| **P3 (Média)** | 1 | [#74408](https://github.com/NousResearch/hermes-agent/pull/74408) |

### Problemas Críticos em Andamento

1. **Telegram Gateway Deadlock** — Flood control (429) pode bloquear todas as mensagens por 30+ minutos
2. **Configuração YAML Incompleta** — Campos `key`, `cors_origins`, `model_name` não são propagados da config para `extra`
3. **Weixin Context Token Stale** — Entrega de texto falha silenciosamente quando token expira

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| PR | Feature | Potencial Inclusão |
|----|---------|-------------------|
| [#74408](https://github.com/NousResearch/hermes-agent/pull/74408) | Hook `message:pre_route` no TUI Gateway | **Alta probabilidade** — Estende funcionalidade existente (#74272) para caminho desktop/TUI. Falta decisão (`needs-decision`). |

### Sinais de Roadmap:
- **Extensibilidade de Hooks:** Comunidade demanda paridade de hooks entre gateway runner e TUI gateway
- **Plataforma Multi-Cloud:** Suporte contínuo a Telegram, WeChat, com padronização de tratamento de erros

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas:

| Problema | Origem | Impacto |
|----------|--------|---------|
| **Bloqueio de mensagens ao atingir rate limit** | Usuários Telegram ativos | Experiência degradada por períodos extensos |
| **Configuração de API Server confusa** | Usuários avançados/infra | Campos ignorados sem aviso, deployment quebrado |
| **Restart de gateway no macOS** | Administradores macOS | Falta ferramenta automatizada para restart em produção |
| **TTS vazando conteúdo de raciocínio** | Usuários de voz | Exposição de thinking chains para usuários finais |

### Cenários de Uso Críticos:
- **Mensageria empresarial** (Telegram, WeChat) — estabilidade é prioritária
- **Desktop App** — fluxo de atualização deve ser transparente
- **TUI Remoto** — necessidade de conexão WebSocket confiável

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >3 dias

| PR | Tempo em Aberto | Prioridade | Ação Recomendada |
|----|-----------------|------------|------------------|
| [#74505](https://github.com/NousResearch/hermes-agent/pull/74505) | 3 dias | P2 | Review pendente — bloqueia configuração de produção |
| [#74524](https://github.com/NousResearch/hermes-agent/pull/74524) | 3 dias | P2 | Decisão de design sobre escopo do restart |
| [#74572](https://github.com/NousResearch/hermes-agent/pull/74572) | 3 dias | P2 | Teste em ambiente WeChat real |
| [#74408](https://github.com/NousResearch/hermes-agent/pull/74408) | 4 dias | P3 | Aguarda decisão de arquitetura (`needs-decision`) |
| [#74408](https://github.com/NousResearch/hermes-agent/pull/74408) | 4 dias | P3 | Aguarda decisão de arquitetura |

### Recomendações:
1. **#77045** (Flood Control) deve ser priorizado — risco de deadlock em produção
2. **#74505** (Config YAML) precisa de review técnico urgente
3. **#74408** precisa de decisão sobre arquitetura de hooks antes de prosseguir

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| PRs Abertos | 6 |
| PRs Fechados (24h) | 2 |
| Bugs P2 em aberto | 4 |
| Features em desenvolvimento | 1 |
| Tempo médio de resposta | >3 dias |

**Saúde Geral:** ⚠️ Estável com pontos de atenção — bugs P2 afetam plataformas principais (Telegram, WeChat) e devem ser priorizados.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-03

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** no período analisado, com 7 PRs e 3 issues atualizadas nas últimas 24h. A comunidade demonstra foco em **estabilidade e segurança**: um bug crítico sobre loops silenciosos de ferramentas foi identificado e já possui PR aberta para correção (#3311/#3312). Nenhum lançamento foi realizado, indicando que a equipe aguarda consolidação do backlog antes de corte de release. A taxa de PRs fechadas/merged (2 de 7) sugere processo de review ativo com critério de merge conservativo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo sem release formal, possivelmente convergindo para a versão 0.4.x (dado que a última versão mencionada em issues é 0.3.1).

> ⚠️ **Nota**: Usuários em produção (Telegram) reportam comportamento instável связанный com loops de ferramentas — recomenda-se atenção ao changelog quando a próxima release for publicada.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | `Feat/auto pr` | Funcionalidade interna de automação de PRs. Merged por `j-v` em 2026-08-02. |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | `Add zh-TW locale and Traditional Chinese translations` | Adição de locale para Taiwan/Chinês Tradicional, melhorando suporte a usuários de língua chinesa. |

### PRs Abertas em Review

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | `fix(agent): stop turn early on repeated identical tool failure` | **Aguarda merge** | 🔴 Crítica — resolve loop silencioso que afeta produção |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | `fix(security): harden remote prompt and exec boundaries` | Em review | 🔴 Alta — segurança de prompts remotos e execuções |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | `Add native Exa web search provider` | Em review | 🟡 Média — novo provedor de busca web nativa |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `fix(channels): prevent SplitMessage hang` | Em review | 🟡 Média — estabilidade do SplitMessage |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | `i18n: complete Czech code wrap labels` | Em review | 🟢 Baixa — internacionalização tcheca |

**Avanco principal**: A resolução do bug de loop de ferramentas (#3312) representa melhoria significativa de UX em produção, especialmente para usuários Telegram onde o problema foi observado.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade/Reações

| # | Título | Reações | Comentários | Tendência |
|---|--------|---------|-------------|-----------|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | Add AI Router as OpenAI-compatible provider preset | 0 👍 | 1 | Feature request de integrador externo |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | /list models só mostra modelo atual | 0 👍 | 1 | Bug de UX em comando `/list models` |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Repeated tool failure loops silently | 0 👍 | 0 | **Bug crítico em produção** |

### Análise das Demandas

**Maior atenção comunitária**: A integração com **AI Router** (#3298) demonstra interesse de contribuidores externos em expandir o ecossistema de provedores do PicoClaw. O autor declara manutenção ativa do AI Router, indicando potencial contribuição contínua.

**Preocupação de estabilidade**: O bug de loop silencioso (#3311) gerou resposta rápida da equipe (PR #3312 aberta no mesmo dia), evidenciando priorização de estabilidade em produção.

---

## 5. Bugs e Estabilidade

### Bug Crítico (Severidade Alta)

**[#3311](https://github.com/sipeed/picoclaw/issues/3311)** — Loops silenciosos de ferramentas com falhas idênticas

- **Severidade**: 🔴 **Alta** (produção, sem resposta ao usuário)
- **Cenário**: Comandos como `git` sem credenciais ou comandos bloqueados pelo safety guard causam re-execução até `max_tool_iterations` sem retorno ao usuário
- **Ambiente afetado**: Telegram (confirmado), potencialmente todos os canais
- **Status**: PR corretiva [#3312](https://github.com/sipeed/picoclaw/pull/3312) aberta e aguardando merge

### Bugs em Acompanhamento

**[#3294](https://github.com/sipeed/picoclaw/issues/3294)** — Comando `/list models` incompleto

- **Severidade**: 🟡 Média (UX)
- **Problema**: Lista apenas o modelo atual em vez de todos os modelos configurados em `model_list`
- **Expectativa**: Comportamento alinhado com descrição ("Configured models")

**[#3295](https://github.com/sipeed/picoclaw/pull/3295)** — SplitMessage hang em fences grandes

- **Severidade**: 🟡 Média (estabilidade)
- **Problema**: `SplitMessage` congela quando fence de código excede `maxLen`
- **Status**: PR de fix aberta

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Prioridade Estimada | Observação |
|---|--------|---------------------|------------|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | AI Router como preset nativo de provedor | 🟡 Média | Elimina necessidade de configurar `api_base` manualmente |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa como provedor nativo de busca web | 🟡 Média | Adiciona alternativa a provedores de busca existentes |

### Sinais de Roadmap

1. **Segurança aprimorada**: PR #3297 indica foco em `schema v4` e endurecimento de boundaries entre prompts remotos e execuções — possivelmente preparação para release com breaking changes

2. **Internacionalização contínua**: Adição de Tcheco (#3296) e Chinês Tradicional/Taiwanês (#3261) demonstra compromisso com acessibilidade global

3. **Melhoria de UX de provedores**: Feature request de AI Router (#3298) sinaliza demanda por mais integrações plug-and-play

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Agent trava sem feedback** | Bug #3311: usuário nunca recebe resposta quando ferramenta falha repetidamente | 🔴 Crítica |
| **Configuração de modelos confusa** | Bug #3294: `/list models` não reflete configurações reais | 🟡 Média |
| **Integração com provedores requer conhecimento técnico** | Feature #3298: necessidade de setar `api_base` manualmente para AI Router | 🟢 Baixa |

### Cenários de Uso Observados

- **Uso em produção via Telegram** (mencionado em #3311)
- **Multi-model configuration** (mencionado em #3294)
- **Comandos shell e git** (cenário de falha em #3311)

### Satisfação/Insatisfação

**Pontos positivos percebidos**:
- Suporte a múltiplos provedores e modelos
- Funcionalidade de lista de modelos (`/list models`)
- Canal Telegram operacional

**Áreas de atrito**:
- Falta de feedback quando agente entra em loop de erro
- Inconsistência entre comando `/list models` e configuração real
- Necessidade de configuração manual para novos provedores

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Idade | Prioridade | Motivo da Atenção |
|---|--------|-------|------------|-------------------|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | AI Router preset | 8 dias | 🟡 Média | Contribuidor externo aguardando feedback |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | /list models incompleto | 9 dias | 🟡 Média | Bug de UX reportado |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | Security hardening | 8 dias | 🔴 Alta | PR de segurança aguardando review |

### PRs com Status "stale"

| # | Título | Idade | Status | Ação Recomendada |
|---|--------|-------|--------|------------------|
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | Security hardening | 8 dias | Em review | Priorizar review por impacto em segurança |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | Czech i18n | 8 dias | Em review | Baixa urgência, pode ser mergeado |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | SplitMessage fix | 8 dias | Em review | Review técnico para stability |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa provider | 8 dias | Em review | Avaliar fit com roadmap de search |

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 0 |
| PRs abertas | 5 |
| PRs fechadas/merged | 2 |
| Novas releases | 0 |
| Bug reports novos | 1 |
| Feature requests novos | 0 |
| PRs de segurança | 1 |
| Backlog items >7 dias sem resposta | 5 |

---

## Recomendacoes Prioritarias

1. **🔴 Imediato**: Review e merge da PR #3312 (fix do loop silencioso de ferramentas)
2. **🟠 Curto prazo**: Responder à issue #3294 sobre `/list models` — 9 dias sem resposta
3. **🟠 Curto prazo**: Priorizar review da PR #3297 (segurança) antes da próxima release
4. **🟡 Médio prazo**: Responder ao contribuidor do AI Router (#3298) para manter engajamento externo
5. **🟡 Médio prazo**: Avaliar merge da PR #3299 (Exa provider) como parte do roadmap de search

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-03. Última atualização: 2026-08-03.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-03

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** nas últimas 24 horas, com 22 PRs atualizados e 4 issues registradas. O dia foi marcado pelo **fechamento de uma cascata de PRs de refatoração** (WS2.x, WS5) que consolidam mudanças contratuais no `ironclaw_operator` e separação do `extension_manager`, além de melhorias na infraestrutura de CI. Dois problemas de segurança/correção foram abertos pela mesma pessoa (`theredspoon`), sinalizando vulnerabilidades potenciais. Não houve lançamento de versões novas, embora o PR de release #5598 ainda esteja pendente de merge. O volume de dependências atualizadas via Dependabot (4 PRs) indica manutenção contínua da base Rust.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24 horas.**

O PR [#5598](https://github.com/nearai/ironclaw/pull/5598) — "chore: release" — encontra-se aberto desde 2026-07-03 e foi atualizado em 2026-08-02, aguardando merge para publicar:
- `ironclaw_common`: 0.4.2 → 0.5.0 (**⚠ breaking changes**)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (**⚠ breaking changes**)

Os breaking changes no `ironclaw_common` incluem modificações em `copy_impl` que impactam a API pública. Recomenda-se atenção especial à migração antes do merge.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (8 total)

| PR | Escopo | Descrição |
|---|---|---|
| [#7000](https://github.com/nearai/ironclaw/pull/7000) | contracts (WS2.2) | Resolve `ProductSurfaceFailure` linchpin — maior refatoração de erro词汇 em 19 arquivos |
| [#7003](https://github.com/nearai/ironclaw/pull/7003) | extensions (WS2.4) | Separa `ironclaw_extension_manager` do `extension_host` |
| [#7004](https://github.com/nearai/ironclaw/pull/7004) | contracts (WS5) | Inverte portas do `ironclaw_operator` e executa strays não-webui |
| [#7005](https://github.com/nearai/ironclaw/pull/7005) | conversations (WS5) | Corrige armadilha de nomenclatura `conversations`/`threads` e alarga `attachments` |
| [#6952](https://github.com/nearai/ironclaw/pull/6952) | ci | Escopa testes de PR Reborn por área afetada — compilação determinística |
| [#7007](https://github.com/nearai/ironclaw/pull/7007) | ci | Alerta canal live-canary Slack em falhas de merge queue |
| [#7013](https://github.com/nearai/ironclaw/pull/7013) | ci | Restaura threshold original de 90% changed-line coverage |
| [#7015](https://github.com/nearai/ironclaw/issues/7015) | ui (bug) | UI bug on Staking page — resolvido |

**Avanço significativo:** O PR [#7018](https://github.com/nearai/ironclaw/pull/7018) (aberto hoje) consolida todos os 4 PRs de Wave 2 em uma única branch, eliminando a cascata de rebases e substituindo [#7000](https://github.com/nearai/ironclaw/pull/7000), [#7003](https://github.com/nearai/ironclaw/pull/7003), [#7004](https://github.com/nearai/ironclaw/pull/7004) e [#7005](https://github.com/nearai/ironclaw/pull/7005).

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção técnica

**[#7012](https://github.com/nearai/ironclaw/issues/7012) — Time awareness without prompt-cache churn**
- Escopo: agent, reborn, performance
- Autor: ilblackdragon (core contributor)
- Subtópicos: contexto temporal append-only, evidências de duração, contrato temporal expandido
- Relacionado a PR [#7001](https://github.com/nearai/ironclaw/pull/7001) que moveu contexto de runtime para o tail da conversa

**[#7017](https://github.com/nearai/ironclaw/issues/7017) — recover_interrupted_deliveries pode sobrescrever status Delivered**
- Bug de concorrência crítico em `delivery_coordinator.rs`
- Sem comentários ainda — precisa triagem urgente

### PRs em destaque

| PR | Tipo | Signal |
|---|---|---|
| [#7018](https://github.com/nearai/ironclaw/pull/7018) | refactor (consolidação WS2) | Discussão sobre estrutura de stack e merge order |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | feature (Reborn) | Queued-message steering, 9 dias aberto |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | feature (Reborn) | Budget approval gate + usage settings, 9 dias aberto |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feature (llm) | Anthropic cache_control breakpoints — fecha #6984 |

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta severidade

**🟥 [#7017](https://github.com/nearai/ironclaw/issues/7017) — Concurrency bug em `recover_interrupted_deliveries`**
- Severidade implícita: **Alta** (pode corromper estado de deliveries)
- Arquivo: `ironclaw_product/src/delivery_coordinator.rs` (linhas 349-377)
- Problema: Escreve status `Unknown` incondicionalmente sem verificar status atual
- Status: Aberto, 0 comentários

**🟥 [#7016](https://github.com/nearai/ironclaw/issues/7016) — Proxy env vars burlam proteção DNS-rebinding**
- Severidade implícita: **Alta** (segurança de rede)
- Arquivo: `ironclaw_network/src/transport.rs`
- Problema: `reqwest::ClientBuilder` aplica `Proxy::system()` por padrão
- Variáveis afetadas: `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`
- Status: Aberto, 0 comentários

### Bugs média/baixa severidade

**🟧 [#7015](https://github.com/nearai/ironclaw/issues/7015) — UI bug on Staking page**
- Severidade: **p2** (feedback)
- Reporter: sergeiest
- Status: **Fechado** — 1 comentário
- Nota: Sem screenshots ou steps de reprodução incluídos pelo reporter

### Regressão de performance

**🟨 [#6973](https://github.com/nearai/ironclaw/pull/6973) — Postgres API capacity regression**
- Impacto: p95 3.74s → 12.0s (3x piora), throughput 6.86 → 2.57 ops/sec
- `send_message` p95: 275ms → 4.78s
- Status: Aberto, aguardando merge

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas propostas

| Issue/PR | Escopo | Descrição |
|---|---|---|
| [#7012](https://github.com/nearai/ironclaw/issues/7012) | agent/reborn | Time awareness sem prompt-cache churn — append-only rollover context |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | reborn | Queued-message steering (forward-ported, turn-boundary races fixed) |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | reborn | Budget approval como resource gate + settings tab |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | llm | Anthropic cache_control breakpoints explícitos em ambos transports |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | loop | Mantém system prefix byte-stable entre chamadas de modelo |

**Sinais de roadmap detectáveis:**
- Programa de adoção **pi-harness** (mencionado em #6997, #7001 — refs `docs/research/pi-agent-deep-dive.md §7.3`)
- Reborn continua sendo o foco principal de features (queued steering, budget gate, cache breakpoints)
- Refatoração de contratos Wave 2/WS5 em fase de consolidação final

---

## 7. Resumo de Feedback dos Usuários

### Feedback externo

**Issue [#7015](https://github.com/nearai/ironclaw/issues/7015)** — UI bug on Staking page
- Reportado por usuário (sergeiest)
- Categoria: bug
- Qualidade do reporte: **Baixa** — não incluiu screenshots, descrição detalhada ou steps de reprodução
- Ação recomendada: Solicitar mais informações ao reporter

### Sinais internos (via código/commits)

- **Satisfação potencial:** Funcionalidades de budget gate (#5982) e queued steering (#5981) indicam demanda por controle de recursos e autonomia de agentes
- **Dores identificadas:** Regressão de performance em Postgres API (#6973) afeta capacidade de mensagens
- **Preocupações de segurança:** Community member (theredspoon) identificou 2 vulnerabilidadesindependentes em 24h — risco potencial de segurança em produção

---

## 8. Backlog que Merece Atenção

### PRs antigos sem merge (urgência: revisão)

| PR | Idade | Escopo | Prioridade |
|---|---|---|---|
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 22 dias | Reborn queued-message steering | **Alta** — feature principal |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | 22 dias | Budget approval gate | **Alta** — feature principal |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | 3 dias | Postgres regression fix | **Urgente** — performance |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | 31 dias | Release v0.5.0 | **Média** — pendente há 1 mês |
| [#7018](https://github.com/nearai/ironclaw/pull/7018) | 1 dia | Consolidação WS2 | **Crítica** — elimina stack de 4 PRs |

### Issues sem triagem

| Issue | Escopo | Status | Ação necessária |
|---|---|---|---|
| [#7017](https://github.com/nearai/ironclaw/issues/7017) | concurrency bug | 0 comments | Triagem urgente |
| [#7016](https://github.com/nearai/ironclaw/issues/7016) | security | 0 comments | Análise de segurança |
| [#7012](https://github.com/nearai/ironclaw/issues/7012) | performance | 0 comments | Avaliação de escopo |

---

## Métricas de Saúde do Projeto (2026-08-03)

| Indicador | Valor | Status |
|---|---|---|
| PRs fechados hoje | 8 | 🟢 Atividade alta |
| Issues fechadas hoje | 1 | 🟡 Volume baixo |
| PRs Dependabot | 4 | 🟢 Manutenção em dia |
| Bugs críticos abertos | 2 | 🟥 Requer atenção |
| PRs > 2 semanas abertos | 2 | 🟡 Monitorar |
| Releases pendentes | 1 | 🟡 Atrasado (31 dias) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-03

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **atividade moderada** nesta data, com 4 pull requests abertos e 2 issues reportadas. Toda a atividade está concentrada na **equipe BlackBox-Labs**, sugerindo um ciclo de desenvolvimento interno ativo com correções de bugs sendo detectadas e corrigidas simultaneamente. Duas issues críticas de performance em redes lentas foram abertas e estão com PRs correspondentes em revisão. Não houve lançamentos nas últimas 24h, indicando que o projeto está em fase de estabilização de uma branch ou preparing para uma release futura.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões. Isso sugere que a equipe está em ciclo de desenvolvimento ativo preparando correções para uma futura release, ou que as mudanças ainda estão em fase de revisão/validação.

---

## 3. Progresso do Projeto

**4 PRs abertos nas últimas 24h** — Nenhum merge ainda, indicando que a atividade recente é de submissão e revisão:

| PR | Título | Status | Impacto |
|----|--------|--------|---------|
| [#6636](https://github.com/agentscope-ai/CoPaw/pull/6636) | fix(chats): add pagination to chat history and enable GZip compression | Aberto | **Alto** — Resolve timeouts em redes lentas |
| [#6634](https://github.com/agentscope-ai/CoPaw/pull/6634) | fix(skills): exclude full content from skill list endpoints | Aberto | **Alto** — Resolve timeouts em redes lentas |
| [#6632](https://github.com/agentscope-ai/CoPaw/pull/6632) | fix(skills): preserve plugin-sourced skill tags across reconcile cycles | Aberto | **Médio** — Resolve perda de tags de plugins |
| [#6631](https://github.com/agentscope-ai/CoPaw/pull/6631) | fix(providers): align Aliyun coding plan models with official website | Aberto | **Médio** — Corrige alinhamento de modelos |

**Destaque:** Os PRs #6636 e #6634 são particularmente importantes pois abordam um problema sistêmico de performance onde APIs retornam payloads MB-level sem compressão ou paginação, causando timeouts consistentes no frontend (30s fixo).

---

## 4. Temas Quentes da Comunidade

**Issues com maior atenção:**

| Issue | Título | Comentários | 👍 | Tema Central |
|-------|--------|-------------|-----|--------------|
| [#6635](https://github.com/agentscope-ai/CoPaw/issues/6635) | Console pages fail to load on slow networks | 1 | 0 | Performance/Scalabilidade |
| [#6633](https://github.com/agentscope-ai/CoPaw/issues/6633) | Skills / Skill Pool pages fail to load on slow networks | 1 | 0 | Performance/Scalabilidade |

**Análise:** Ambas as issues foram abertas pelo mesmo autor (`Moonlit-Pages`) no mesmo dia e já possuem PRs correspondentes da equipe BlackBox-Labs. A ausência de reactions (0 👍 em ambas) pode indicar que:
1. O problema é específico de certos ambientes/configurações
2. A comunidade ainda não teve tempo de reagir
3. É um cenário de borda (redes extremamente lentas)

O **tema central** é claramente a **escalabilidade de APIs** — o backend não foi projetado para payloads grandes, causando degradação completa da experiência em condições não-ideais de rede.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Alta Severidade)

**Problema:** Timeout em páginas do console em redes lentas
- **Issues:** [#6635](https://github.com/agentscope-ai/CoPaw/issues/6635), [#6633](https://github.com/agentscope-ai/CoPaw/issues/6633)
- **CausaRaiz:** APIs retornam payloads MB-level (histórico de chat completo, lista de skills com conteúdo SKILL.md completo) sem compressão ou paginação
- **Impacto:** Páginas inteiras do console falham completamente para workspaces com muito conteúdo
- **TimeoutFrontend:** 30s fixo no fetch
- **Status:** PRs #6636 e #6634 abertos para correção

### Bugs Médios

**Problema:** Tags de skills de plugin são perdidas após restart
- **Issue:** Referenciada em [#6632](https://github.com/agentscope-ai/CoPaw/pull/6632) (fix para #6537)
- **CausaRaiz:** Funções `reconcile_pool_manifest()` e `reconcile_workspace_manifest()` removem incondicionalmente entradas cujo diretório em disco não foi encontrado
- **Impacto:** Usuários perdem configurações de tags ao reiniciar

**Problema:** Modelos do plano Aliyun Coding desactualizados
- **Issue:** Referenciada em [#6631](https://github.com/agentscope-ai/CoPaw/pull/6631) (fix para #6551)
- **CausaRaiz:** Provedor lista modelos `glm-5.2` e `glm-5.1` não suportados e falta `qwen3.7-plus`
- **Impacto:** Usuários recebem erros 'model unknown'

---

## 6. Pedidos de Features e Sinais de Roadmap

**Não há pedidos de features explícitos nas últimas 24h.**

No entanto, os bugs reportados sugerem **sinais claros de roadmap**:

1. **Paginação em APIs de listagem** — O PR #6636 implementa paginação no histórico de chats, indicando que esta é uma necessidade reconocida
2. **Compressão GZip obrigatória** — A adição de GZip no PR #6636 sugere que APIs devem comprimir respostas grandes por padrão
3. **Separação de endpoints de lista vs. detalhe** — O PR #6634 indica que listar skills não deve incluir conteúdo completo

Estes padrões sugerem que o roadmap pode estar convergindo para uma **arquitetura mais granular** com endpoints especializados para listagem (resumos) e detalhe (conteúdo completo).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Falha completa em condições não-ideais de rede**
- Cenário: Usuários com conexões lentas ou latência alta
- Comportamento: Páginas inteiras do console falham silenciosamente após timeout de 30s
- Severidade: **Bloqueante** — não há degrade graciosa, apenas falha total

**2. Perda de configurações após restart**
- Cenário: Usuários configuram tags de skills via UI do Skill Pool
- Comportamento: Tags desaparecem após reiniciar o QwenPaw
- Severidade: **Frustrante** — erosão de confiança no sistema de persistência

**3. Modelos de IA desatualizados**
- Cenário: Usuários tentando usar modelos do plano Aliyun Coding
- Comportamento: Erros 'model unknown' para modelos listados
- Severidade: **Confuso** — interface promete algo que não entrega

### Satisfação Geral

A atividade recente sugere um projeto **funcional em condições ideais** mas com **vulnerabilidades em cenários de borda** (redes lentas, workspaces grandes). A rápida resposta da equipe BlackBox-Labs (PRs no mesmo dia das issues) indica comprometimento com estabilidade.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Prolongada

Não há evidências de issues antigas sem resposta nos dados fornecidos. A atividade mais antiga é de 2026-08-01 (PR #6631).

### Items de Alta Prioridade para Review

| Item | Tipo | Idade | Prioridade | Motivo |
|------|------|-------|------------|--------|
| PR #6636 | Fix | 1 dia | **Crítica** | Resolve falhas em produção para redes lentas |
| PR #6634 | Fix | 1 dia | **Crítica** | Resolve falhas em produção para workspaces grandes |
| PR #6632 | Fix | 1 dia | **Alta** | Resolve perda de dados do usuário |
| PR #6631 | Fix | 2 dias | **Média** | Corrige alinhamento com provedores externos |

### Recomendação

**Review e merge prioritário** dos PRs #6636 e #6634. Ambos endereçam problemas de estabilidade em produção que afetam qualquer usuário com condições de rede não-ideais — um cenário cada vez mais comum em ambientes mobile, corporativos ou geograficamente distantes.

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas | 2 |
| Issues fechadas | 0 |
| PRs abertos | 4 |
| PRs merged | 0 |
| Releases | 0 |
| Comentários em issues | 2 |
| Reactions (👍) | 0 |

**Índice de Saúde:** 🟡 Moderado — Atividade consistente, mas sem merges e duas issues de bugs críticos em aberto.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-08-03

---

## 1. Panorama do Dia

O projeto ZeroClaw registra **alta atividade** em 03/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas, demonstrando maturidade no fluxo de desenvolvimento. A atividade concentra-se em **RFCs de arquitetura** (especialmente memory storage, Chat Completions profile e lightweight core) e **correções de segurança críticas** — há múltiplos bugs classificados como P1/high-risk relacionados a isolamento de agentes e escalação de privilégios. O PR #9376 que fechou a release v0.8.4 foi recentemente merged, marcando a publicação do workspace no crates.io pela primeira vez desde a divisão do microkernel. A base de código está em estado de evolução acelerada com 49 PRs abertos e 1 merged nas últimas 24h.

---

## 2. Lançamentos

### v0.8.4 — Publicada em 2026-08-02
**PR:** [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) | Autor: JordanTheJet | Status: CLOSED

**Principais mudanças:**
- **Workspace publicável no crates.io**: pela primeira vez desde o split do microkernel (#5811), o workspace foi preparado para publicação oficial
- **Renomeação do pacote raiz**: `zeroclawlabs` → `zeroclaw` para que `cargo install zeroclaw` corresponda ao nome do binário
- **18 crates publicados**, 5 permanecem internos (não publicados)
- **Changelog completo** e remoções de crates obsoletas

**Breaking Changes:**
- O nome do pacote raiz mudou; scripts de instalação ou dependência direta via crates.io devem ajustar referências
- 5 crates internos removidos do espaço de publicação pública

**Notas de migração:**
- Usuários que instalavam via código-fonte com caminhos hardcoded para `zeroclawlabs` precisarão atualizar
- Verificar dependências diretas ao workspace antes de atualizar

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| PR | Título | Impacto | Link |
|---|---|---|---|
| #9376 | chore(release): cut v0.8.4 | **Crates.io publishing, changelog, crate removals** | [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) |
| #9674 | fix(infra): preserve session queue serialization during eviction | **Corrige race condition na eviction de sessões** | [#9674](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) |
| #9673 | refactor(channels): remove unreachable compatibility code | **Limpeza de 36 arquivos de re-export e campos ACP obsoletos** | [#9673](https://github.com/zeroclaw-labs/zeroclaw/pull/9673) |
| #9671 | fix(deps): update vulnerable Nostr crates | **Atualização de segurança RUSTSEC-2026-0225** | [#9671](https://github.com/zeroclaw-labs/zeroclaw/pull/9671) |
| #9660 | fix(tests): skip Scoop shell regression on Windows | **Correção de teste platform-specific** | [#9660](https://github.com/zeroclaw-labs/zeroclaw/pull/9660) |

### PRs Abertos de Alto Impacto (em revisão)

| PR | Título | Status | Link |
|---|---|---|---|
| #8996 | fix(goal): preserve running goals across daemon reload | needs-author-action | [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) |
| #9405 | feat(mcp): support per-server custom CA trust | needs-author-action | [#9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405) |
| #9196 | feat(mcp): materialize resource blob with aggregate budget preflight | needs-author-action | [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) |
| #9224 | feat(eval): repeated live runs with pass@k, pass^k, and error bars | needs-author-action | [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) |
| #8838 | fix(providers): harden SSE completion and idle timeouts | needs-maintainer-review | [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Área | Link |
|---|---|---|---|---|
| #6808 | RFC: Work Lanes, Board Automation, and Label Cleanup | 16 | Governance | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| #8603 | RFC: ZeroClaw Chat Completions profile | 14 | Architecture | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #9103 | RFC: separate authoritative memory storage | 11 | Architecture | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| #6165 | RFC: Prefer a lighter ZeroClaw core | 10 | Architecture | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| #8692 | [Tracker] Maintainer decision queue | 7 | Governance | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #8303 | RFC: Goal mode for bounded autonomous session work | 6 | Agent | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #9397 | RFC: Treat empty WhatsApp Web allowed_groups as permit-none | 5 | Security | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |
| #6954 | RFC: Route scheduled tasks through orchestrator pipeline | 5 | Runtime | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |

### Análise dos Temas Principais

**1. RFC de Chat Completions (#8603)** — alta demanda por compatibilidade com clientes OpenAI (Open WebUI, LobeChat, Continue.dev, LangChain, OpenAI SDK). Atualmente o ZeroClaw expõe apenas WebSocket, ACP e webhooks. A adoção do protocolo Chat Completions expandiria significativamente a base de usuários.

**2. Separação de Memory Storage (#9103)** — o `memory.backend` atualmente conflita duas responsabilidades: store autoritativo E conector de enriquecimento (ex: Lucid). A separação permitiria arquiteturas mais flexíveis e resolveria limitações do Lucid como backend completo.

**3. ZeroClaw Core Lean (#6165)** — discussão sobre mover integrações de cauda longa para skills, MCP servers ou plugins, mantendo o core enxuto. Reduz complexidade de manutenção e superfície de ataque.

**4. Goal Mode (#8303)** — necessidade de modo durável para perseguir um objetivo até conclusão, pausa, cancelamento ou exaustão de budget. Preenche gap entre turns interativos, cron jobs e delegates.

**5. Governança (#6808, #8692)** — tracker de decisões de maintainers e automação de board com Work Lanes. Indica maturidade organizacional e necessidade de processos mais escaláveis.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Priority P1, Risk High) — 5 reportados

| # | Título | Severidade | Status | Link |
|---|---|---|---|---|
| #9646 | Session/channel tools lack per-agent ownership scoping | S0 - data loss/security | accepted | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) |
| #9647 | Knowledge graph has no per-agent attribution | S0 - data loss/security | accepted | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| #9633 | Windows null-device redirect rejected by shell policy | S1 - workflow blocked | in-progress | [#9633](https://github.com/zeroclaw-labs/zeroclaw/issues/9633) |
| #9654 | Operator denial reaches model as three words | S0 - data loss/security | accepted | [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) |
| #9655 | Approval cards carry no position | S0 - UX/security | accepted | [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) |

### Bugs Importantes (Priority P2, Risk High/Medium) — 9 reportados

| # | Título | Severidade | Link |
|---|---|---|---|
| #9653 | plugin wasi:http trusts only bundled webpki roots | S2 | [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653) |
| #9651 | migrated bare vision_model_provider cannot resolve keyed credentials | S1 | [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) |
| #9652 | config set rejects cron key with hyphen in alias | S1 | [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) |
| #9656 | Telegram typing indicator runs during approval wait | S2 | [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) |
| #9617 | Shell security: preserve workspace and allow safe Python modules | S2 | [#9617](https://github.com/zeroclaw-labs/zeroclaw/pull/9617) |

### Análise de Estabilidade

**Padrões emergentes:**
- **Isolamento de agentes**: 2 bugs S0 (#9646, #9647) indicam vulnerabilidade sistêmica onde qualquer agente pode acessar dados de outro — risco crítico para ambientes multi-tenant
- **Segurança de plugins**: #9653 expõe gap entre provider HTTPS (que aprendeu a confiar no store da plataforma em #6528) e plugin egress
- **Windows compatibility**: #9633 e #9660 mostram que testes Windows ainda precisam de cobertura adicional
- **UX de aprovações**: #9655 e #9656 afetam experiência do operador em canais Telegram

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso (RFCs aceitas/in-progress)

| # | Título | Prioridade | Status | Link |
|---|---|---|---|---|
| #8303 | RFC: Goal mode for bounded autonomous session work | P2 | needs-author-action | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #9397 | RFC: Treat empty WhatsApp Web allowed_groups as permit-none | P1 | in-progress | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |
| #8445 | Telegram channel multi-message mode | P2 | in-progress | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) |
| #9172 | Use one command descriptor source for ZeroCode slash commands | P2 | in-progress | [#9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172) |
| #9631 | Send stable session_id to OpenRouter for prompt-cache savings | P2 | needs-maintainer-review | [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) |

### Sinais de Roadmap (RFCs abertas para discussão)

| # | Título | Área | Link |
|---|---|---|---|
| #8603 | RFC: ZeroClaw Chat Completions profile | Gateway/Provider | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #9103 | RFC: separate authoritative memory storage | Memory | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| #6165 | RFC: Prefer a lighter ZeroClaw core | Architecture | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| #8396 | RFC: Make wire protocol first-class | Provider | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) |
| #6954 | RFC: Route scheduled tasks through orchestrator pipeline | Runtime | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |
| #9644 | RFC: retire the Lucid memory connector at v0.9.0 | Memory | [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) |
| #9621 | RFC: staged opt-in product telemetry | Observability | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) |

### Possível Direção para v0.9.0 (baseado em trackers)

**Trackers ativos indicando foco:**
- **#7432** — Auth, security hardening, gateway boundaries, A2A/multi-agent
- **#7685** — Test coverage improvement across 13 shards
- **#8583** — Channel/source shared-boundary cleanup
- **#9644** — Retire Lucid connector

**Sinais de monetização/enterprise:**
- #9621 (telemetry opt-in) e #9631 (OpenRouter prompt cache) indicam foco em eficiência de custos
- #8603 (Chat Completions) amplia casos de uso B2B

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas via Issues

**Segurança e Isolamento:**
- Usuários reportam que agentes podem acessar dados de outros agentes (bugs #9646, #9647) — risco crítico para ambientes compartilhados
- Shell policy inconsistente entre plataformas (#9633) bloqueia workflows Windows

**Operacional/UX:**
- Indicador de digitação Telegram confunde operadores durante espera de aprovação (#9656)
- Cartões de aprovação indistinguíveis quando múltiplos tools requieren confirmação (#9655)
- Denials genuínos chegam ao modelo sem semântica, causando respostas inventadas (#9654)

**Integração e Custo:**
- Custos elevados com OpenRouter por não reutilizar prompt cache (#9631)
- blog zeroclawlabs.ai sem feed RSS/Atom — dificuldade de acompanhamento (#9628)

### Cenários de Uso Emergentes

1. **Multi-agent orchestration**: demanda crescente por isolamento, goal mode e delegação
2. **Enterprise integrations**: Chat Completions compatibility para clientes OpenAI-compatible
3. **Custom tooling**: MCP com CA customizado (#9405), resource materialization (#9196)
4. **Avaliação quantitativa**: necessidade de métricas com pass@k e error bars (#9224)

### Satisfação/Insatisfação

| Aspecto | Status |
|---|---|
| Frequência de releases | ✅ v0.8.4 publicada, ritmo saudável |
| Cobertura de testes | ⚠️ 13 shards com coverage review em andamento |
| Documentação | ⚠️ Blog sem RSS; docs de cron com inconsistências (#9652) |
| Segurança | ❌ Múlt

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*