# Resumo diário do ecossistema de agentes de IA 2026-07-09

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-08 21:01 UTC

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

**Data de Referência:** 2026-07-09
**Projetos Analisados:** NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **maturidade crescente e especialização segmentada** em 2026. Seis dos sete projetos monitorados apresentam atividade intensa (50+ PRs/24h em três casos), evidenciando uma comunidade de desenvolvedores ativa. Os temas dominantes são **segurança de APIs WebUI** (NanoBot, Hermes Agent), **arquitetura de plugins WASM** (ZeroClaw, IronClaw) e **estabilidade multi-canal** (CoPaw, PicoClaw). A consolidação pós-release é observada em Hermes Agent (v0.18.1/2) e CoPaw (v2.0.0-beta.4), enquanto IronClaw e ZeroClaw enfrentam reestruturações arquiteturais significativas. NullClaw permanece inativo, levantando questões sobre viabilidade do projeto.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Taxa Fechamento | Saúde |
|---------|:------------:|:---------:|:--------------:|:---------------:|:-----:|
| **NullClaw** | 0 | 0 | 0 | N/A | 🔴 Inativo |
| **NanoBot** | 8 | 29 | 0 | **87,5%** | 🟢 Estável |
| **Hermes Agent** | 50 | 50 | 2 | ~22% | 🟡 Alto volume, alto backlog |
| **PicoClaw** | 2 | 3 | 0 | ~0% (nenhuma fechada) | 🟡 Consolidação |
| **IronClaw** | 22 | 50 | 0 | ~24% | 🟡 Refatoração ativa |
| **CoPaw** | 38 | 45 | 1 | ~14% | 🟡 Beta instável |
| **ZeroClaw** | 50 | 50 | 0 | ~4% | 🔴 Gargalo crítico |

**Observação:** NanoBot apresenta a melhor taxa de resolução de issues, enquanto ZeroClaw e PicoClaw mostram gargalos em triagem/merge.

---

## 3. Posicionamento do Projeto Principal

### Líderes por Categoria

| Categoria | Projeto Líder | Diferencial |
|-----------|---------------|-------------|
| **Volume de Desenvolvimento** | Hermes Agent, ZeroClaw, IronClaw | 50 PRs/24h cada |
| **Eficiência de Processos** | **NanoBot** | 87,5% taxa de fechamento |
| **Diversidade de Canais** | Hermes Agent | Windows, macOS, Linux, Telegram, Discord, Matrix |
| **Inovação Arquitetural** | ZeroClaw | RFCs para WASM-first, Rust/Wasm UI |
| **Segurança** | NanoBot | 4+ PRs de security merged, hardening WebUI |
| **Beta Readiness** | PicoClaw | Stable com 3 PRs merged sem regressões |

### Vantagens Competitivas por Projeto

**NanoBot:** Foco laser em segurança WebUI (token issuance, API gating) com processo de review eficiente.

**Hermes Agent:** Maior cobertura de plataforma e base de contributors diversificada (660 PRs/6 dias).

**ZeroClaw:** Visão arquitetural mais ambiciosa (RFCs maduros para plugins WASM, A2A discovery).

---

## 4. Focos Técnicos Compartilhados

### Temas que Emergem em Múltiplos Projetos

| Foco | Projetos Afetados | Manifestação |
|------|-------------------|--------------|
| **Segurança WebUI/API** | NanoBot, Hermes Agent, CoPaw, ZeroClaw | Token issuance sem auth, SSRF, injection vectors |
| **Estabilidade de Canais** | CoPaw, PicoClaw, Hermes Agent | Matrix E2EE, Feishu response, Telegram config |
| **Context/Scroll/Compressão** | CoPaw, NanoBot, ZeroClaw | Perda de contexto, prompt prefix, overflow |
| **Windows Compatibility** | Hermes Agent, ZeroClaw, CoPaw | Testes quebrados, path semantics, encoding |
| **Provider Compatibility** | NanoBot, Hermes Agent, ZeroClaw | Gemma 4, Ollama Cloud, Qwen, Xiaomi |
| **Memory/Retrieval** | CoPaw, Hermes Agent, ZeroClaw | Rerankers, mem0 injection, persistence |

**Implicação:** A convergência em segurança e context management indica áreas maduras para frameworks compartilhados ou bibliotecas comuns.

---

## 5. Análise de Diferenciação

| Projeto | Público-Alvo | Arquitetura | Foco Principal |
|---------|-------------|-------------|----------------|
| **NanoBot** | DevOps, CI/CD | Modular agent hooks | **Segurança + automação** |
| **Hermes Agent** | Multi-plataforma, power users | Transports abstraction | **Cobertura + performance** |
| **PicoClaw** | Embarcados, hardware (NanoKVM) | Minimal, embeddable | **Integração IoT/Edge** |
| **IronClaw** | Empresas, automação | God-crate → módulos | **Refatoração + escalabilidade** |
| **CoPaw** | Usuários beta, testers | AgentScope 2.0 | **Stabilidade v2.0** |
| **ZeroClaw** | Desenvolvedores avançados | WASM-first, TUI-centric | **Extensibilidade + modularização** |

### Matriz de Posicionamento

```
                          ALTA COMPLEXIDADE
                                 │
                    ZeroClaw     │     IronClaw
                    (WASM-first) │     (NEA-25 refactor)
                                 │
    DIVERSIDADE ─────────────────┼────────────────────
    DE CANAIS                    │              ALTA
                    Hermes Agent │          USABILIDADE
                    (6+ canais)  │              │
                                 │       CoPaw (beta)
    Nicho/Especializado ─────────┼────────────────────
                    PicoClaw      │        NanoBot
                    (hardware)    │     (segurança)
                                 │
                        BAIXA USABILIDADE
```

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs/6 dias | Perfil |
|------|----------|:----------:|--------|
| **🚀 Iteração Rápida** | Hermes Agent | ~660 | Consolidando release cycle |
| **⚡ Feature Factory** | NanoBot, IronClaw, ZeroClaw | 50/24h | Alto volume, refatoração |
| **🔧 Estabilizando** | CoPaw | 45/24h | Beta → GA trajectory |
| **📦 Maturidade** | PicoClaw | 3/24h | Manutenção lean |
| **💀 Estagnado** | NullClaw | 0 | Sem manutenção |

### Métricas de Saúde Comunitária

| Indicador | Melhor Performing | Pior Performing |
|-----------|-------------------|-----------------|
| **Response Time (issues)** | NanoBot | CoPaw (17 dias sem resposta) |
| **Stale Rate** | IronClaw (#4108: 43 dias) | NanoBot (resolução rápida) |
| **Contributor Diversity** | Hermes Agent | PicoClaw (1 novo contributor detectado) |
| **Bug Resolution** | NanoBot (P1 merged) | ZeroClaw (S0/S1 abertas há >30 dias) |

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **WASM como runtime de plugins** | ZeroClaw RFC #8850, IronClaw NEA-25, PR #8853 | Commoditização de extensibilidade |
| **Segurança como feature** | 4+ PRs security em cada projeto | Compliance enterprise driving adoption |
| **Multi-turn context persistence** | CoPaw scroll, NanoBot #2463, ZeroClaw #6517 | Diferenciação em long-form conversations |
| **Desktop automation** | CoPaw Windows UIA, Hermes Desktop, IronClaw Reborn | Competição com UI.Vision/Selenium |
| **Mixture of Agents (MoA)** | Hermes Agent #61036, #4873 | Abstração de ensemble routing |
| **A2A/Agent Discovery** | ZeroClaw RFC #7218 | Interoperabilidade entre agentes |
| **Streaming universal** | PicoClaw QQ, CoPaw console, Hermes transports | Expectativa de UX em tempo real |
| **Rust/Wasm for UI** | ZeroClaw RFC #8132 | Performance over DX |

### Recomendações Estratégicas

1. **Para projetos em beta (CoPaw):** Priorizar estabilidade de canais antes de features — 4+ issues P1 abertas comprometem credibilidade.

2. **Para projetos em refatoração (IronClaw, ZeroClaw):** Clear roadmap kommunikation diperlukan untuk mempertahankan contributor trust selama API breaks.

3. **Para todos os projetos:** Windows compatibility testing memerlukan automação CI — 74 testes falhando (ZeroClaw) e issues de scaling (Hermes) indicam technical debt significativo.

4. **Oportunidade de consolidação:** Segurança WebUI (NanoBot) e context management (CoPaw) representam áreas onde colaboração open source entre projetos poderia acelerar toda a ecosystem.

---

*Relatório gerado em 2026-07-09. Dados不含 NullClaw devido a inatividade. Para deep-dives individuais, consultar relatórios de projeto detalhados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-09

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de desenvolvimento em 2026-07-09, com **29 PRs atualizados** e **8 issues processadas** nas últimas 24 horas. A equipe demonstrou foco significativo em **segurança da WebUI**, com múltiplas correções merged e em revisão para vulnerabilidades relacionadas à emissão de tokens API. A atividade de PRs está equilibrada entre correções críticas (P1) e features de usabilidade. Não houve lançamentos de novas versões, sugerindo preparação para um próximo release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O repositório não publicou novas versões entre 2026-07-08 e 2026-07-09. As atividades de hoje parecem 집중adas em estabilização pré-release, com múltiplas correções de segurança pendentes de merge.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (12 total)

| # | Título | Impacto |
|---|--------|---------|
| [#4849](https://github.com/HKUDS/nanobot/pull/4849) | fix(webui): gate bootstrap API token issuance | **Crítico** — Limita emissão de tokens API apenas após autenticação válida |
| [#4830](https://github.com/HKUDS/nanobot/pull/4830) | Fix missing aiohttp slack dependency | **Bug fix** — Habilita plugin Slack novamente |
| [#4852](https://github.com/HKUDS/nanobot/pull/4852) | Feature: non-interactive config refresh | **Usabilidade** — Automatiza refresh de configuração via CLI |
| [#4848](https://github.com/HKUDS/nanobot/pull/4848) | refactor(agent): extract turn hook assembly | **Qualidade** — Melhora separação de responsabilidades |
| [#4850](https://github.com/HKUDS/nanobot/pull/4850) | docs: improve search entry pages | **Documentação** — Melhora navegação e descobribilidade |
| [#12](https://github.com/HKUDS/nanobot/pull/12) | feat: add vision support for image recognition in Telegram | **Feature** — Habilita reconhecimento de imagens via Telegram |
| [#4460](https://github.com/HKUDS/nanobot/pull/4460) | chore: bump to node 24 | **Modernização** — Atualiza runtime Node |

**Destaque:** A merge do PR [#4849](https://github.com/HKUDS/nanobot/pull/4849) representa um avanço crítico em segurança, implementando separação entre tokens WebSocket e REST API.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Categoria |
|---|--------|-------------|-----------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Architectural issue: prompt prefix preservation | 13 | **Arquitetura** |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 via Ollama Cloud fails on 2nd+ request | 4 | **Bug** |
| [#4825](https://github.com/HKUDS/nanobot/issues/4825) | Security: Unauthenticated localhost API token mint | 3 | **Segurança** |
| [#4851](https://github.com/HKUDS/nanobot/issues/4851) | Feature: non-interactive config refresh | 1 | **Enhancement** |

### Análise de Demandas

**Arquitetura (#2463):** Issue antiga (março 2026) com 13 comentários revela preocupação fundamental sobre **persistência de histórico de conversa**. Usuários reportam que o NanoBot não preserva o prompt prefix exato enviado anteriormente, criando incompatibilidades com OpenAI Pro e outros provedores que dependem de fidelidade de contexto.

**Segurança:** A comunidade demonstrou atenção ativa às vulnerabilidades WebUI, com múltiplos issues e PRs correspondentes (#4825, #4826, #4827).

---

## 5. Bugs e Estabilidade

### Issues Reportadas (Por Severidade)

| Severidade | Quantidade | Exemplos |
|------------|------------|----------|
| **P1 (Crítica)** | 2 | [#2450](https://github.com/HKUDS/nanobot/issues/2450) (Ollama Cloud falha), [#4078](https://github.com/HKUDS/nanobot/issues/4078) (API sem autenticação) |
| **P2 (Alta)** | 1 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) (aiohttp ausente) |
| **Stale/Arquitural** | 2 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) (prompt prefix) |

### PRs de Bug Abertos

| # | Título | Prioridade |
|---|--------|------------|
| [#4816](https://github.com/HKUDS/nanobot/pull/4816) | fix(runner): narrow BaseException catch to Exception | P1 |
| [#4840](https://github.com/HKUDS/nanobot/pull/4840) | fix(shell): reap zombie processes | P1 |
| [#4764](https://github.com/HKUDS/nanobot/pull/4764) | fix(mcp): isolate reconnect cancel scopes | P1 |
| [#4843](https://github.com/HKUDS/nanobot/pull/4843) | fix(mcp): defer stale stack cleanup during reconnect | P2 |
| [#2873](https://github.com/HKUDS/nanobot/pull/2873) | fix(discord): preserve forwarded referenced messages | P2 |

**Ponto de Atenção:** O PR [#4816](https://github.com/HKUDS/nanobot/pull/4816) aborda um problema sério onde `BaseException` é capturada incluindo `KeyboardInterrupt` e `SystemExit`, convertendo-os erroneamente em mensagens de erro conversacionais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| [#4851](https://github.com/HKUDS/nanobot/issues/4851) | non-interactive config refresh | **Aguardando merge** | Alta — Automação CI/CD |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | add nano_timer core tool (time, timezone, calendar) | **Em revisão** | Média — Utilidade geral |
| [#4854](https://github.com/HKUDS/nanobot/pull/4854) | feat(exec): add RTK command rewriter | **Em revisão** | Média — Segurança exec |
| [#4622](https://github.com/HKUDS/nanobot/pull/4622) | feat(cron): support job model presets | **Em revisão** | Alta — Flexibilidade |
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | feat(channels): add guided setup flows | **Em revisão** | Alta — UX onboarding |
| [#4828](https://github.com/HKUDS/nanobot/pull/4828) | feat(webui): add file edit diff progress view | **Em revisão** | Média — Visualização |
| [#4844](https://github.com/HKUDS/nanobot/pull/4844) | Gate sustained goals behind explicit runtime mode | **Em revisão** | Arquitetural |

### Sinais de Roadmap

1. **Segurança First:** A quantidade de PRs de segurança WebUI indica prioridade clara para hardening
2. **Usabilidade:** Feature de setup guiado (#4855) sugere foco em experiência inicial
3. **Flexibilidade de Providers:** Suporte a presets de modelos em cron jobs (#4622)
4. **Runtime Goals:** Nova arquitetura para goals sustentados (#4844)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Frequência | Impacto |
|----------|------------|---------|
| Falha em requisições subsequentes via Ollama Cloud | 1 usuário | **Crítico** — Impede uso em produção |
| Ausência de `aiohttp` no plugin Slack | 1 usuário | **Bloqueante** — Plugin inutilizável |
| API OpenAI-compatível sem autenticação | 1 report | **Segurança** — Exposição de APIs internas |
| Config refresh não automatizável | 1 necessidade | **Usabilidade** — Sistemas auto-update |

### Cenários de Uso Identificados

- **DevOps/Automação:** Necessidade de refresh de config sem interação (CI/CD pipelines)
- **Multi-cloud:** Integração com Ollama Cloud apresentando falhas persistentes
- **Produtividade:** Usuários aguardam diff view para edições de arquivo no WebUI
- **Integração:** Suporte a Feishu, Telegram com vision, Discord com forwarded messages

### Satisfação/Insatisfação

**Positivo:**
- Suporte a visão em Telegram foi bem接受的 (PR #12 closed)
- Dokumentationsverbesserung (#4850) reconhecida pela comunidade

**Negativo:**
- Vulnerabilidades de segurança WebUI causaram preocupação (4 issues security)
- Issue arquitetural #2463 sem resolução há >3 meses indica possível Tech Debt

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Situação |
|---|--------|--------|------------|----------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Prompt prefix preservation architectural issue | 2026-03-25 | 2026-07-08 | **Stale + Closed** (13 comments) |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) | Ollama Cloud 2nd+ request fail | 2026-03-24 | 2026-07-08 | **Closed** (4 comments) |

### PRs Abertos com Conflitos

| # | Título | Conflitos | Prioridade |
|---|--------|-----------|------------|
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | feat(channels): add guided setup flows | Sim | P1 |
| [#4847](https://github.com/HKUDS/nanobot/pull/4847) | docs: clarify LangSmith integration status | Sim | P2 |
| [#4844](https://github.com/HKUDS/nanobot/pull/4844) | Gate sustained goals | Sim | P1 |
| [#4622](https://github.com/HKUDS/nanobot/pull/4622) | feat(cron): support job model presets | Sim | P2 |

### Recomendações para Maintainers

1. **Priorizar #2463** — Issue arquitetural com alta discussão sem resolução definitiva
2. **Resolver conflitos #4855, #4844** — Features estratégicas bloqueadas
3. **Validar #4078** — Vulnerabilidade de autenticação pode afetar usuários em produção
4. **Considerar release soon** — Múltiplas correções P1 madura para publicação

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (abertas) | 1 |
| Issues fechadas | 7 |
| PRs abertos | 17 |
| PRs merged/closed | 12 |
| Releases | 0 |
| PRs P1 abertos | 4 |
| Issues com +3 comentários | 4 |
| Conflitos em PRs | 3 |

**Saúde Geral:** O projeto demonstra atividade saudável com foco em segurança e estabilidade. A taxa de resolução de issues (87.5%) e a inúmera quantidade de PRs em revisão indicam um ciclo de desenvolvimento ativo.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-09

---

## 1. Panorama do dia

O Hermes Agent demonstra **atividade excepcionalmente alta** em 9 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A equipe publicou dois patches consecutivos (v0.18.1 e v0.18.2), consolidando ~660 PRs mesclados desde a v0.18.0. A comunidade reportou **5 bugs P1/P2 críticos**, concentrados em Desktop, Matrix e Authentication, enquanto 39 PRs aguardam revisão — sinalizando um pipeline saudável de contribuições. A cobertura de plataforma permanece diversificada (Windows, macOS, Linux, Telegram, Discord, Matrix), mas **Windows Desktop concentra o maior volume de problemas abertos (7 issues)**. O projeto encontra-se em fase de estabilização pós-release, com forte foco em hardening e performance.

---

## 2. Lançamentos

### v2026.7.7.2 — Hermes Agent v0.18.2
**Data:** 07/07/2026 | [Release #](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2)

> Patch same-day sobre v0.18.1, corrigindo dependência WhatsApp/Baileys para builds Docker com tags release.

| Mudança | Descrição |
|---------|-----------|
| **fix(whatsapp)** | Desvincula Baileys de commit git, utiliza published 7.0.0-rc13 |

**Impacto:** Baixo — correção pontual de dependência para implantações Docker. Não requer migração.

---

### v2026.7.7 — Hermes Agent v0.18.1
**Data:** 07/07/2026 | [Release #](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7)

> Release de patch que consolida ~660 PRs mesclados desde v0.18.0 (01/07).

**Principais mudanças incluídas:**
- Bug fixes e hardening geral
- Feature work em progresso estabilizado para consumidores downstream (Docker, PyPI)

**Breaking Changes:** Nenhuma documentada.

**Notas de migração:** Para usuários em v0.18.0, upgrade direto recomendado. Usuários Docker devem utilizar a nova tag v2026.7.7.2 para evitar issues com Baileys.

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje (11 total)

| PR | Autor | Categoria | Impacto |
|----|-------|-----------|---------|
| [#61119](https://github.com/NousResearch/hermes-agent/pull/61119) | kshitijk4poor | **fix(gateway)** | Sessions de messaging agora recarregam `fallback_providers` dinamicamente (antes: congelado no init) |
| [#60155](https://github.com/NousResearch/hermes-agent/issues/60155) | ddawnlll | **fix(dashboard)** | Adiciona paginação a `GET /api/sessions/{id}/messages` — corrige freeze em sessões longas |

### PRs abertas com alto potencial (39 abertas)

| PR | Autor | Área | Destaque |
|----|-------|------|----------|
| [#61133](https://github.com/NousResearch/hermes-agent/pull/61133) | kshitijk4poor | **perf(transports)** | Copy-on-write em message prep — elimina deepcopy desnecessário por turno (~performance) |
| [#61132](https://github.com/NousResearch/hermes-agent/pull/61132) | kshitijk4poor | **perf(caching)** | Inclui Kimi/Moonshot na OpenRouter prompt cache policy (~1% → maior hit rate) |
| [#61131](https://github.com/NousResearch/hermes-agent/pull/61131) | kshitijk4poor | **perf(skills)** | Snapshot manifest builds ~5x mais rápidos (single os.walk vs. nested traversal) |
| [#50124](https://github.com/NousResearch/hermes-agent/pull/50124) | isair | **perf(agent)** | Periodicamente merge FTS5 segments — reduz write-lock contention em state.db |
| [#61135](https://github.com/NousResearch/hermes-agent/pull/61135) | kyssta-exe | **fix(desktop)** | Desktop agora respeita profile terminal backend (sandbox Docker) — regressão v0.18.1 |
| [#61134](https://github.com/NousResearch/hermes-agent/pull/61134) | HumphreySun98 | **fix(gateway)** | Corrige misdelivery de mensagens (blank target resolvia para canal único) |
| [#61130](https://github.com/NousResearch/hermes-agent/pull/61130) | HumphreySun98 | **fix(skills)** | Empty platform/namespace não mais faz match universal — segurança |
| [#61126](https://github.com/NousResearch/hermes-agent/pull/61126) | chrisplough | **fix(matrix)** | Refresh device lists antes de sends encriptados — corrige decrypt failures permanentes |
| [#61128](https://github.com/NousResearch/hermes-agent/pull/61128) | ZK-Snarky | **fix(gateway)** | Substitui sentinelas de retry por mensagem user-facing legível |
| [#61127](https://github.com/NousResearch/hermes-agent/pull/61127) | ZK-Snarky | **feat(tools)** | Plugin tools podem opt-in em toolsets core de messaging |
| [#61129](https://github.com/NousResearch/hermes-agent/pull/61129) | ZK-Snarky | **feat(memory)** | `min_score` configurável para injeção mem0 |
| [#60638](https://github.com/NousResearch/hermes-agent/pull/60638) | OutThisLife | **feat(desktop)** | Contribution-driven shell com layout-tree model e plugin SDK |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|:-----------:|:--:|-----------|
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | Gemma 4 tool calling support (vLLM) | 11 | 4 | Feature/Provider |
| [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | Matrix gateway unable to decrypt message | 10 | 1 | Bug/Gateway |
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) | Projects paradigm quebrou sidebar flow | 8 | 1 | Bug/Desktop |
| [#37619](https://github.com/NousResearch/hermes-agent/issues/37619) | Windows: zoom/UI scaling support | 6 | 7 | Feature/Desktop |
| [#55130](https://github.com/NousResearch/hermes-agent/issues/55130) | Dashboard 500s com basic auth only | 5 | 5 | Bug/Dashboard |

### Análise de tendências

**🔺 Integração Gemma 4 (Issue #6626 — 11 comentários)**
用户 Reportando problemas com tool calling do Gemma 4 via vLLM, especificamente com flags `--tool-call-parser gemma4` e `--enable-auto-tool-choice`. Indica demanda reprimida por suporte a modelos Google/Gemma no ecosystem Hermes. **Sinal forte de roadmap**: prováveis improvements ou documentação adicional de configuração.

**🔺 Matrix E2EE (Issue #13891 — 10 comentários, P1)**
Após uso prolongado, decrypt failures permanentes. Root cause identificado pelo PR [#61126](https://github.com/NousResearch/hermes-agent/pull/61126) — device list não refresh após rotação. Impacto: instâncias Matrix em produção afetadas.

**🔺 Windows UX (Issues #37619, #61081)**
Mais voted feature request do período: zoom/UI scaling em Windows Desktop (6 👍). Combinado com reports de scaling reset após minimize (#61081), evidencia neglect de acessibilidade Windows.

**🔺 Auth regression (Issue #55130 — 5 👍)**
Bug de severidade P2 onde Dashboard retorna HTTP 500 com basic auth como provider único, tornando login impossível. **Sinal de alerta**: regressão de segurança que bloqueia deploys não-loopback.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (2 issues)

| # | Título | Plataforma | Status | Link |
|---|--------|------------|--------|------|
| #13891 | Matrix gateway unable to decrypt message | Matrix | **OPEN** | [Issue](https://github.com/NousResearch/hermes-agent/issues/13891) |
| #60955 | hermes-fallback-bug-report | — | CLOSED | [Issue](https://github.com/NousResearch/hermes-agent/issues/60955) |

> **Matrix decrypt bug** — Após uso prolongado, decryption failures permanentes. Workaround: recriar room. Fix draft: [#61126](https://github.com/NousResearch/hermes-agent/pull/61126).

#### P2 — Altos (14 issues)

| Área | Count | Issues Prioritárias |
|------|:-----:|---------------------|
| **Desktop** | 5 | Projects paradigm (#53004), Model picker mismatch (#54741, #40480), Stale status (#48098), MCP orphan accumulation (#61059) |
| **Agent** | 4 | Gemini→Codex routing (#39047), Silent fallback (#35419), LAN connect fail (#57812), Completions arg error (#61030) |
| **Gateway** | 2 | Voice interrupt deadlock (#61008), Terminal env drop (#28863) |
| **Dashboard** | 2 | Auth 500 (#55130), Context compaction Jinja error (#55677) |
| **Matrix** | 1 | Decrypt (P1 acima) |

#### P3 — Médios (16 issues)

Issues de UI/UX, features ausentes e comportamentos edge. Destaques:
- **Windows desktop** lidera com 4 issues (zoom, scaling reset, node flash, MCP orphans)
- **TUI**: /compress blocking input (#61042)
- **Dashboard**: Mobile autocorrect duplicates (#52110)
- **Agent**: Deepseek v4 hallucination (#57864), Browser hallucination (#58491)

### Regressões Identificadas

| Regressão | Introduzida em | Link |
|-----------|----------------|------|
| Projects paradigm quebrou sidebar | v0.18.1 via #49037 | [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) |
| Desktop não usa profile terminal backend | v0.18.1 | [#61135](https://github.com/NousResearch/hermes-agent/pull/61135) (fix) |
| MoA provider hidden em model picker | v0.18.1 | [#61036](https://github.com/NousResearch/hermes-agent/issues/61036) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Votes | Área | Potencial Impacto |
|---|--------|:-----:|------|:------------------|
| #61136 | Persistent per-topic context + working dir para Telegram forums | 0 | **Agent** | Alta — viabiliza uso production em Telegram multi-projeto |
| #37619 | Windows desktop zoom/UI scaling | 7 | **Desktop** | Média — acessibilidade, user base Windows |
| #53617 | Keep reasoning panel expanded | 0 | **Desktop** | Média — UX para thinking models |
| #61063 | Enable `tool_loop_guardrails.hard_stop_enabled` por default | 0 | **Agent/CLI** | Alta — segurança, pode break workflows existentes |
| #61129 | Configurable min_score para mem0 injection | (PR) | **Memory** | Média — tuning para retrieval |

### Sinais de Roadmap Derivados

1. **Plataforma multi-projeto Telegram**: Issue #61136 detalha necessidade de context persistente por topic/thread — indica adoção em ambientes de trabalho colaborativo real.

2. **Mixture of Agents (MoA)**: Issue #61036 reporta que MoA presets configurados não aparecem no model picker — sugere que MoA está em desenvolvimento ativo e preparando GA.

3. **Plugin System**: PR #61127 adiciona path para plugin tools em todos os canais — evolução para marketplace/extensibilidade.

4. **Desktop contribution shell**: PR #60638 propõe architecture baseada em layout-tree e plugin SDK — modernização da UI layer.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Exemplos |
|-----|:----------:|----------|
| **Instabilidade Matrix E2EE** | 🔴 Alta | "After running matrix gateway for a period of time... Unable to decrypt message" |
| **Desktop model picker broken** | 🔴 Alta | Custom providers não aparecem; MoA hidden; wrong provider após seleção |
| **Windows poor UX** | 🟡 Média | Sem zoom, scaling reset, node flashing, MCP process leaks |
| **TUI blocking input** | 🟡 Média | /compress freeze durante execução — dead time em sessões longas |
| **Auth broken para externos** | 🟡 Média | Dashboard 500 para basic auth non-loopback — bloqueia deploy |
| **Silent failures** | 🟡 Média | Fallback activation invisível; compression Jinja errors corrompem sessão |

### Cenários de Uso Emergentes

| Cenário | Observações |
|---------|-------------|
| **Telegram forums como workspaces** | Usuários usando topics como lanes separadas (docs, infra, repo) — requer persistent context por thread |
| **LLMs em LAN** | Tentativas de conectar Hermes a endpoints locais (Ubuntu) falham — possivelmente proxy/DNS isolation |
| **Deepseek v4 com skills** | Tentativas de criar skills customizadas resultam em recusas em Chinês — possível content filtering |

### Satisfaction Score Estimada (base: issue engagement)

- **Positivo**: Ativo desenvolvimento (660 PRs/6 dias), PRs de performance significativos, features solicitadas sendo implementadas
- **Negativo**: 5+ bugs P1/P2 simultâneos, regressões v0.18.1, Windows desktop negligenciado

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## 📅 Data de Referência: 2026-07-09

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** na data de hoje. Foram registradas **2 issues ativas** e **3 PRs fechadas/merged** nas últimas 24h, indicando um fluxo de desenvolvimento ativo com foco em integração de canais e melhorias de infraestrutura. Nenhum novo release foi publicado hoje, mas os PRs merged sugerem avanços em confiabilidade de gateway, novos canais de integração e correções em processamento de mídia para modelos visionários. O estado geral do projeto demonstra maturidade, com comunidade engajada em reportar bugs e solicitar features.

---

## 2. Lançamentos

### 🚫 Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões hoje. Última release disponível deve ser consultada diretamente no [repositório sipeed/picoclaw](https://github.com/sipeed/picoclaw/releases).

---

## 3. Progresso do Projeto

Três PRs foram fechadas/merged hoje, representando avanços significativos:

### ✅ PR #3234 - CHORE: Embed image media em mensagens de usuário para modelos de visão
**Autor:** darren101004 | **Status:** CLOSED  
**Link:** [sipeed/picoclaw PR #3234](https://github.com/sipeed/picoclaw/pull/3234)

**Mudanças implementadas:**
- Correção crítica no provider `anthropic_messages`
- Mensagens de usuário agora incluem `msg.Media` além de `msg.Content`
- Imagens carregadas via `load_image` (anexadas como URLs `data:image/...`) eram descartadas antes de chegar ao modelo
- **Impacto:** Modelos de visão (vision models) agora podem processar imagens corretamente

---

### ✅ PR #2278 - FEAT: Fallback wildcard bind com allowlist CIDR para gateway
**Autor:** Sakurapainting | **Status:** CLOSED  
**Link:** [sipeed/picoclaw PR #2278](https://github.com/sipeed/picoclaw/pull/2278)

**Mudanças implementadas:**
- Lógica de fallback para binding do gateway
- Quando bind em loopback falha, o sistema agora faz fallback controlado para wildcard bind
- Mantém segurança via allowlist CIDR configurável
- **Impacto:** Maior confiabilidade de startup em ambientes onde loopback não está disponível

---

### ✅ PR #2251 - FEAT: Novo canal Grafana Alertmanager webhook
**Autor:** loafoe | **Status:** CLOSED  
**Link:** [sipeed/picoclaw PR #2251](https://github.com/sipeed/picoclaw/pull/2251)

**Mudanças implementadas:**
- Novo canal `grafana_alertmanager` (input-only)
- Exposição de endpoint webhook para receber alertas do Grafana Alertmanager
- Parsing de payloads de webhook em mensagens legíveis
- Suporte para trigger de skills específicas via parâmetro `skill`
- **Impacto:** Ampliação do ecossistema de integrações, habilitando automação baseada em alertas

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue #3195 - Bug: OpenAI GPT não funciona no NanoKVM com config padrão
**Status:** OPEN | **Comentários:** 2 | **Likes:** 0  
**Link:** [sipeed/picoclaw Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)

**Resumo:** Usuário reportou problema ao configurar PicoClaw em NanoKVM (feature nova no NanoKVM 2.4.0) com modelo GPT-5.4. Todas as tentativas de interação retornam erro.

**Análise da demanda:**
- Interoperabilidade entre plataformas de hardware (NanoKVM + PicoClaw)
- Usuário seguiu documentação oficial de configuração
- Bug bloqueante que impede uso do recurso principal
- Prioridade: **ALTA** (impacta funcionalidade core)

---

### 💬 Issue #3201 - Feature: Suporte streaming para canal QQ
**Status:** OPEN (stale) | **Comentários:** 1 | **Likes:** 0  
**Link:** [sipeed/picoclaw Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)

**Resumo:** Solicita output streaming (incremental em tempo real) para o canal QQ, permitindo visualizar respostas do LLM token por token.

**Análise da demanda:**
- Currently apenas Telegram e Pico WebSocket implementam `StreamingCapable`
- Melhora significativa na UX do canal QQ
- Issue marcada como stale - pode precisar de bump ou rejeição
- Prioridade: **MÉDIA**

---

## 5. Bugs e Estabilidade

### 🐛 Bug Crítico Aberto

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | **ALTA** | GPT não funciona em NanoKVM com config padrão | OPEN (2 comentários) |

**Análise:** Bug de alta severidade que afeta configuração específica de hardware. Requer atenção da equipe de manutenção para reproduzir e corrigir.

### ✅ Bug Corrigido Recentemente

| PR | Correção | Impacto |
|----|----------|---------|
| [#3234](https://github.com/sipeed/picoclaw/pull/3234) | Imagens descartadas em mensagens para modelos visionários | Models de visão agora processam mídia corretamente |

**Métricas de Estabilidade:**
- Total de issues abertas: 2 (ambas ativas)
- Issues fechadas nas últimas 24h: 0
- Proporção de bugs novos vs. resolvidos: 1:0 (requer monitoramento)

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Nova Feature Solicitada

**Issue #3201** - [Feature] Support streaming output for QQ channel  
**Link:** [sipeed/picoclaw Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)

**Detalhes da demanda:**
- Implementar interface `StreamingCapable` no canal QQ
- Permitir output incremental (token-by-token)
- Alinhamento com funcionalidade existente em Telegram e WebSocket

**Sinais de Roadmap:**
- Padrão de streaming sendo expandido para outros canais
- Integração com QQ representa interesse em mercado asiático
- Potencial para feature de "kanban" de desenvolvimento

### 🔧 Melhorias de Infraestrutura (Merged)

| PR | Área | Feature |
|----|------|---------|
| [#2278](https://github.com/sipeed/picoclaw/pull/2278) | Gateway | Fallback bind para ambientes sem loopback |
| [#2251](https://github.com/sipeed/picoclaw/pull/2251) | Channels | Canal Grafana Alertmanager |

---

## 7. Resumo de Feedback dos Usuários

### 📝 Issues Ativas - Feedback dos Usuários

**Issue #3195 (Bug Report):**
- **Cenário:** Usuário tentando usar PicoClaw com NanoKVM 2.4.0 e GPT-5.4
- **Dolor:** Configuração seguida corretamente segundo documentação, mas funcionalidade não trabalha
- **Plataforma:** NanoKVM (hardware específico)
- **Satisfação:** **INSATISFEITO** - feature não funciona conforme esperado

**Issue #3201 (Feature Request):**
- **Cenário:** Usuário deseja experiência de streaming em canal QQ
- **Comparativo:** Telegram e WebSocket já possuem streaming
- **Necessidade:** Feedback visual em tempo real durante geração de respostas
- **Satisfação:** **NEUTRO** - feature solicitada, mas marcada como stale

### 📊 Análise de Tendências

| Categoria | Volume | Sentimento |
|-----------|--------|------------|
| Bugs reportados | 1 | Negativo (bloqueante) |
| Features solicitadas | 1 | Neutro/Positivo |
| Integrações merged | 3 | Positivo (comunidade ativa) |

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues Sem Resposta/Ação Prolongada

| Issue | Tempo Aberto | Prioridade | Recomendação |
|-------|--------------|------------|--------------|
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | ~8 dias (stale) | MÉDIA | Avaliar se feature está nos planos; caso sim, assignar; caso não, fechar com justificativa |

### 🎯 Prioridades Recomendadas para Próxima Sprint

1. **ALTA** - Investigar e resolver Issue #3195 (GPT em NanoKVM)
2. **MÉDIA** - Avaliar Issue #3201 e dar retorno à comunidade (stale há 8 dias)
3. **BAIXA** - Documentar novas features merged (Grafana Alertmanager, fallback bind, visão em mensagens)

---

## 📈 Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs fechadas/merged (24h) | 3 |
| Releases (24h) | 0 |
| Novos Contributors (detectados) | 1 (darren101004) |
| Issues stale sem resposta | 1 (#3201) |

---

## 🔗 Links Úteis

- **Repositório Principal:** https://github.com/sipeed/picoclaw
- **Releases:** https://github.com/sipeed/picoclaw/releases
- **Documentação:** https://docs.picoclaw.io

---

*Relatório gerado em 2026-07-09 com base em dados do GitHub.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-09

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 09/07/2026, com 22 issues e 50 PRs atualizados nas últimas 24h. O projeto está em plena fase de reestruturação interna (NEA-25), com múltiplos PRs empilhados para unificar o modelo de extensões e surfaces. Doze issues de bugs estão abertas, sendo 6 classificados como P2 (prioridade média-alta), indicando pressure sobre funcionalidades críticas como rotinas agendadas, integração GitHub e Slack. Não houve lançamentos oficiais hoje, embora o PR #5598 detalhe mudanças recentes nos crates. A health geral é positiva do ponto de vista de momentum, mas há regressões ativas no sistema E2E noturno e bugs de usabilidade acumulada na interface WebUI.

---

## 2. Lançamentos

**Nenhum release oficial registrado nas últimas 24h.**

O PR #5598 ([chore: release](https://github.com/nearai/ironclaw/pull/5598)) detalha a versão mais recente lançada em 2026-07-03, com as seguintes mudanças nos crates:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ **Breaking** |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ **Breaking** |
| `ironclaw` | 0.24.0 | 0.29.1 | ⚠️ **Breaking** |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ Compatível |

> **Nota de migração:** As quebras em `ironclaw_common` e `ironclaw` podem exigir ajustes em integrações downstream. Revisitar a documentação de migração antes de atualizar.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanço significativo:

| PR | Título | Impacto |
|----|--------|---------|
| [#5846](https://github.com/nearai/ironclaw/pull/5846) | Fix Slack extension removal cleanup | Corrige vazamento de bindings Slack na remoção de extensões |
| [#5841](https://github.com/nearai/ironclaw/pull/5841) | ci: revive nightly deep tier + make Platform & Compat and Reborn E2E requirable | Restaura pipeline de CI noturno e torna testes regressivos obrigatórios |
| [#5772](https://github.com/nearai/ironclaw/pull/5772) | fix(reborn): localize Projects page copy | Resolve i18n incompleto na página de Projects (issue #5768) |
| [#5787](https://github.com/nearai/ironclaw/issues/5787) | flaky: slack_pairing_redeem_rejects_expired_code | Investigação de race condition em testes de expiração de código Slack |
| [#5768](https://github.com/nearai/ironclaw/issues/5768) | Reborn Projects page has incomplete i18n coverage | Corrigido via #5772 |

**Destaque:** A revival do nightly deep tier (#5841) é uma conquista importante — o pipeline estava "silentemente morto" sem execuções bem-sucedidas desde sua criação. Isso fortalece a estratégia de regressão do projeto.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + thumbs up)

| Issue | Título | Comentários | Status |
|-------|--------|-------------|--------|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub issue search/create fail HTTP 403 | 4 | Aberta |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | Terminal icon in chat UI has no disable option | 2 | Aberta |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires opening twice | 2 | Aberta |

### Análise das demandas

**GitHub Integration (#5702)** — Usuários relatam incapacidade de usar recursos de busca e criação de issues via integração GitHub, recebendo HTTP 403. Com 4 comentários, é a issue mais discutida. O problema pode indicar mudanças na API do GitHub ou regressão de autenticação.

**Terminal Icon UI (#5705)** — Usuários solicitam toggle para ocultar o ícone de terminal na interface. Issue com 2 comentários, sugerindo que a feature request é relativamente trivial mas amplamente desejada.

**Pilha NEA-25 em PRs** — A comunidade está acompanhando ativamente a refatoração massiva do modelo de extensões (7 PRs empilhados). Os PRs #5845, #5847, #5849 representam a mudança mais estrutural do período.

---

## 5. Bugs e Estabilidade

### Bugs P2 (Prioridade Média-Alta) — 6 abertas

| Issue | Severidade | Descrição | Link |
|-------|------------|-----------|------|
| #5702 | P2 | GitHub issue search/create retorna HTTP 403 | [Issue](https://github.com/nearai/ironclaw/issues/5702) |
| #5837 | P2 | Botões "Open run" e "Logs" não clicáveis em rotinas | [Issue](https://github.com/nearai/ironclaw/issues/5837) |
| #5838 | P2 | Contexto compaction error após execução bem-sucedida | [Issue](https://github.com/nearai/ironclaw/issues/5838) |
| #5836 | P2 | Rotina falha com "No thread attached" em todos os runs | [Issue](https://github.com/nearai/ironclaw/issues/5836) |
| #5834 | P2 | Slack disconnect incorretamente rejeitado pelo agente | [Issue](https://github.com/nearai/ironclaw/issues/5834) |

### Bugs P3 (Prioridade Baixa) — 4 abertos

| Issue | Descrição | Link |
|-------|-----------|------|
| #5705 | Ícone de terminal sem opção de desabilitar | [Issue](https://github.com/nearai/ironclaw/issues/5705) |
| #5557 | Deep link de logs exige dois cliques para carregar | [Issue](https://github.com/nearai/ironclaw/issues/5557) |
| #5835 | Botão "Jump to latest" aparece incorretamente | [Issue](https://github.com/nearai/ironclaw/issues/5835) |
| #5419 | Sem opção para renomear automações | [Issue](https://github.com/nearai/ironclaw/issues/5419) |

### Regressões e Instabilidade

- **Nightly E2E (#4108):** Pipeline noturno continua falhando consistentemente (workflow `E2E web-regressions`).
- **Teste Flaky (#5787):** `slack_pairing_redeem_rejects_expired_code` falha intermitentemente devido a race condition entre tokio clock e chrono wall-clock.

**Média de bugs abertos:** ~12 issues com tag bug em aberto. A concentração em P2 sugere pressure em funcionalidades de runtime e integrações.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features e Enhancements em destaque

| Issue/PR | Escopo | Descrição | Link |
|----------|--------|-----------|------|
| #5820 | WebUI | Aumentar limite de arquivos anexados (10 → mais) e exibir erros de overflow | [Issue](https://github.com/nearai/ironclaw/issues/5820) |
| #5786 | Backend | Expor upstream provider OpenRouter em ToolCompletionResponse | [Issue](https://github.com/nearai/ironclaw/issues/5786) |
| #5780 | Skills | Suporte a skills admin-installed e privadas | [PR](https://github.com/nearai/ironclaw/pull/5780) |
| #5499 | Reborn | Instalação WASM tool via zip + credenciais tenant-shared | [PR](https://github.com/nearai/ironclaw/pull/5499) |
| #5821 | WebUI | Stream de texto do assistant via SSE projections | [PR](https://github.com/nearai/ironclaw/pull/5821) |
| #5852 | Architecture | Adicionar gate de allowlist para camadas de crates Reborn | [PR](https://github.com/nearai/ironclaw/pull/5852) |

### Sinais de Roadmap

1. **Arquitetura NEA-25 em progresso:** 7 PRs empilhados para unificar surfaces de extensões (Slack single extension, remoção de `slack_bot`/`slack_personal`).
2. **Ferramentas configuráveis:** Foundation para WASM tool install via REST (#5499).
3. **Skills privadas:** Suporte multi-tenant para skills administradas (#5780).
4. **Refatoração de composição:** Reorganização de god-crate em módulos internos (dissections n9 e n10).

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Integração GitHub** | Falha em busca/criação de issues (HTTP 403) | Bloqueia workflow de automação |
| **Rotinas agendadas** | Falha sistemática com "No thread attached" | Impossibilita automações críticas |
| **UI/UX** | Elementos não clicáveis, ícones sem toggle, deep links quebrados | Experiência fragmentada |
| **Contexto** | Erro de compaction mesmo com execução bem-sucedida | Usuários não conseguem completar tarefas longas |
| **Slack** | Incapacidade de desconectar via agente | Problema de controle/usuário |

### Cenários de uso identificados

- **Automação de rotinas** (ex: `ironclaw-issues-slack-summary`) com frequência de 5 minutos — uso produtivo bloqueado por bugs.
- **Integração GitHub** para gestão de issues em workflows de AI agents — funcionalidade completamente quebrada.
- **WebChat com anexos** — limite de 10 arquivos atingido em workflows reais, solicitando expansão.

### Satisfação/Insatisfação

**Positivo:**
- Resolução rápida de i18n na página Projects (#5772).
- Melhoria visual em dropdowns de permissões (#5770).

**Negativo:**
- Accumulated UI bugs indicam debt em WebUI v2.
- Falhas persistentes em E2E noturno levantam concerns de estabilidade.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Idade | Prioridade | Descrição | Link |
|-------|-------|------------|-----------|------|
| #5557 | 7 dias | P3 | Logs deep link broken | [Issue](https://github.com/nearai/ironclaw/issues/5557) |
| #5419 | 10 dias | P3 | No rename automation option | [Issue](https://github.com/nearai/ironclaw/issues/5419) |
| #4108 | 43 dias | P1? | Nightly E2E falha consistentemente | [Issue](https://github.com/nearai/ironclaw/issues/4108) |

### PRs aguardando review há >48h

| PR | Tamanho | Escopo | Título | Link |
|----|---------|--------|--------|------|
| #5499 | XL | dependencies | WASM tool install from zip | [PR](https://github.com/nearai/ironclaw/pull/5499) |
| #5780 | XL | reborn | Admin installed and private skills | [PR](https://github.com/nearai/ironclaw/pull/5780) |
| #5823 | XL | deps | Dependabot: 17 updates | [PR](https://github.com/nearai/ironclaw/pull/5823) |

### Recomendações

1. **Priorizar #5836** (rotinas com "No thread attached") — impacto direto em automações de produção.
2. **Triage #4108** — E2E nightly quebrado há 43 dias compromete confidence em releases.
3. **Review #5499** — Foundation para feature request de ferramentas configuráveis.
4. **Limpar v1 legacy** — Issues #5826, #5827, #5828 são low-hanging fruit para reducir debt técnico.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-09. Para mais detalhes, consulte [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)

**Data:** 2026-07-09  
**Repositório:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) demonstra **atividade intensa** nas últimas 24h, com 38 issues e 45 PRs atualizados. O release v2.0.0-beta.4 marca continuidade na estabilização da versão 2.0, com foco em correções de contexto (scroll) e proteção de turnos ativos. A comunidade está ativamente reportando problemas críticos na beta 2.0 — especialmente loops infinitos, perda de progresso de diálogo e falhas em canais de comunicação — sinalizando que a versão ainda requer ajustes antes do release estável. O time parece bem posicionado com 30 PRs abertos (maioria de contributors), indicando pipeline saudável de contribuições externas.

---

## 2. Lançamentos

### v2.0.0-beta.4 🚀

**Link:** [Release v2.0.0-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.4)

| Mudança | Autor | PR |
|---------|-------|-----|
| `chore(version): bump version 2.0.0b4` | @rayrayraykk | [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) |
| `fix(scroll): protect active turn, add graduated pressure relief, make recall failures unmistakable` | @niceIrene | — |

**Análise:** O release foca em estabilidade do mecanismo de scroll (compactação de contexto), protegendo o turno ativo contra compressão prematura e melhorando a visibilidade de falhas de recall. A mudança de "graduated pressure relief" sugere adoção de estratégia adaptativa para lidar com memória limitada.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (5 mais recentes)

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#5792](https://github.com/agentscope-ai/QwenPaw/pull/5792) | `fix(agents): stop dropping self-paired tool messages during sanitation` | Bug Fix | **Alto** — Corrigia perda silenciosa de mensagens de ferramentas auto-pareadas em AgentScope 2.0 |
| [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) *(Issue resolvida)* | v2.00b3 approval popup aparecendo mesmo em "关闭模式" | Bug Fix | **Crítico** — Bloqueio de automação para usuários em modo direto |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) *(Issue resolvida)* | Context compression perdendo arquivos de persona | Bug Fix | **Alto** — Prevenção de perda total de contexto |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) *(Issue resolvida)* | Pensamento lógico entrando em loop infinito | Bug Fix | **Crítico** — Estabilidade de execução |
| [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) *(Issue resolvida)* | Scroll comprimindo incorretamente tarefa ativa | Bug Fix | **Alto** — Consistência de contexto em sessões longas |

### PRs Abertos com Alto Impacto

| # | Título | Tags | Status |
|---|--------|------|--------|
| [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) | `fix(model): default preserve_thinking to false` | v2.0, loops | 🔍 Em revisão |
| [#5866](https://github.com/agentscope-ai/QwenPaw/pull/5866) | `fix(security): split rm detection to prevent ${HOME} bypass (#5090)` | security | 🔍 Em revisão |
| [#5864](https://github.com/agentscope-ai/QwenPaw/pull/5864) | `fix(mcp): apply runtime approval level to driver policy` | MCP | ✅ Closed |
| [#5801](https://github.com/agentscope-ai/QwenPaw/pull/5801) | `feat(channels): add Zalo Bot channel` | new feature | 🔍 Em revisão |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | `feat(memory): add reranker for search results on reme0.4` | memory | 🔍 Em revisão |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | `feat(computer-use): Windows desktop GUI automation` | Windows, automation | 🔍 Em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Status | Comentários | Categoria |
|---|--------|--------|-------------|-----------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | [Bug] 飞书信息不回复情况 | 🔴 OPEN | 12 | Channel (Feishu) |
| [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) | v2.00b3审批弹窗em关闭模式 | ✅ CLOSED | 10 | UX/Security |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context压缩丢失persona文件 | ✅ CLOSED | 9 | Context/Memory |
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Python安装后Internal Server Error | 🔴 OPEN | 8 | Installation |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console流式输出浏览器卡顿 | 🔴 OPEN | 5 | Frontend/Performance |
| [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | 2.0版本对话进度丢失e无限循环 | 🔴 OPEN | 4 | **v2.0 Critical** |

### Análise de Demandas

**Canais de comunicação (Feishu/Matrix/Zalo):** Forte demanda por estabilidade multi-canal. O issue de Feishu (#5757, 12 comentários) aguarda resposta há 6 dias — prioridade de triagem.

**Estabilidade v2.0:** Issues críticos como #5860 (perda de progresso, loops infinitos) e problemas de scroll (#5746) indicam que a versão beta 2.0 ainda precisa de iterações antes de estável.

**UX/Desktop:** Múltiplos pedidos de qualidade de vida — minimize to tray (#5312), notification sounds (#5852), collapsible approval blocks (#5107).

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (impedem uso)

| # | Título | Criado | Severidade | Link |
|---|--------|--------|------------|------|
| — | Loop infinito em v2.0 | 2026-07-08 | **Crítica** | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) |
| — | Feishu para de responder após primeira mensagem | 2026-07-03 | **Crítica** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) |
| — | Matrix token login falha após upgrade | 2026-07-08 | **Crítica** | [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) |
| — | Internal Server Error no startup (Python install) | 2026-06-22 | **Bloqueante** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) |

### 🟠 Altos (afetam fluxo principal)

| # | Título | Componentes | Link |
|---|--------|-------------|------|
| — | Browser stuttering em streaming | Console/Frontend | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) |
| — | Vector index não persiste no Windows | Memory/Desktop | [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) |
| — | Compressão incorreta de tarefa ativa (scroll) | Context | [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) |
| — | Ferramentas falham após N chamadas | Runtime | [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) |

### 🟡 Médios

| # | Título | Link |
|---|--------|------|
| — | Threshold de compressão mostra valor errado entre providers | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) |
| — | Imagens não renderizam em Coding Session | [#5863](https://github.com/agentscope-ai/QwenPaw/issues/5863) |
| — | Lag severo ao trocar entre agentes | [#5421](https://github.com/agentscope-ai/QwenPaw/issues/5421) |
| — | deepseek reasoning_content ausente em auto_memory_search | [#5859](https://github.com/agentscope-ai/QwenPaw/issues/5859) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial

| # | Título | Justificativa | Status |
|---|--------|---------------|--------|
| [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) | **Agent Team / Swarm Collaboration** | Comparável a WorkBuddy Expert Team; enables multi-agent cooperation para tarefas complexas | Closed (sugerido) |
| [#5801](https://github.com/agentscope-ai/QwenPaw/pull/5801) | **Zalo Bot Channel** | Vietnam's messenger (100M+ users); polling-only (sem HTTPS público) | PR aberto |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **Windows Desktop GUI Automation (UIA + Tauri)** | Automação desktop nativa no Windows | PR aberto |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | **Reranker para memory search (reme0.4)** | Pós-recuperação com reranker API dedicado | PR aberto |
| [#5852](https://github.com/agentscope-ai/QwenPaw/issues/5852) | **Sistema de notificação sonora para aprovações** | Usuários não percebem when tool requires approval | PR aberto |
| [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | **Minimize to system tray (Desktop)** | Comportamento padrão de apps como WeChat/QQ | Closed (sugerido) |

### Sinais de Roadmap Observados

- **Segurança:** Foco em proteção de comandos shell (#5866 — ${HOME} bypass) e redaação de secrets (#5745)
- **Testes:** Plano de regressão robusto com 43 unit tests (#5813), 64 tests para inbox (#5809), 176 tests para channels (#5812)
- **CLI Enhancement:** Exposição de system commands no slash autocomplete (#5869)
- **Multi-agente:** Suporte a collaboration teams em desenvolvimento

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto | Issues |
|-----|------------|---------|--------|
| **Instabilidade em v2.0 beta** | Alta | Crítico | #5860, #5746, #5846 |
| **Falhas em canais (Feishu, Matrix)** | Média-Alta | Alto | #5757, #5868 |
| **Performance frontend (stuttering, lag)** | Média |用户体验 | #5725, #5421 |
| **Instalação/startup (Internal Server Error)** | Média | Bloqueante | #5379 |

### Cenários de Uso Reportados

1. **IM de longa duração (QQ/Feishu):** Sessões de semanas com contexto累积 → compressão上下文 falha (#5776)
2. **Automação empresarial:** Modo "todas ferramentas sem aprovação" esperado mas ainda pide confirmação (#5846)
3. **Desenvolvedores Python 3.13:** Compatibilidade quebrada para instalação de plugins (#5166)
4. **Usuários Windows Desktop:** Vector index não persiste, exige rebuild a cada startup (#5259)

### Satisfação/Frustração

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| Core de chat/agent | 🟡 Misto | Funcional mas v2.0 instável |
| Context/Memory | 🔴 Frustrado | Compressão problemática, perda de contexto |
| Channels | 🔴 Frustrado | Instabilidade em múltiplos canais |
| Desktop App | 🟡 Misto | Funcionalidades desejadas (tray, notifications) ausentes |
| Installation | 🟠 Problema | Erros em setup Python e build |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Tríagem há >5 dias

| # | Título | Criado | Dias | Prioridade |
|---|--------|--------|------|------------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Feishu não responde | 2026-07-03 | **6** | 🔴 Crítica |
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Internal Server Error on startup | 2026-06-22 | **17** | 🔴 Bloqueante |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Windows vector index não persiste | 2026-06-17 | **22** | 🟠 Alta |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Browser st

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-09

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um **nível de atividade intenso**, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A comunidade está particularmente ativa em discussões sobre arquitetura de plugins WASM, melhorias em canais de comunicação (Telegram, Matrix, Lark) e segurança. Apenas 2 PRs foram fechados/merged hoje, enquanto 48 permanecem em aberto, indicando um alto volume de trabalho em revisão. Não houve lançamentos hoje, e a taxa de issues fechadas versus abertas sugere gargalos potenciais em triagem ou revisão. A diversidade deDomínios afetados (runtime, CI, channels, providers, security) demonstra um projeto maduro com múltiplas frentes de desenvolvimento simultâneas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões hoje. Mantenha atenção aos PRs marcados como prontos para merge, especialmente os de基础设施 (infraestrutura) como #8863 e #8862 que parecem estar em_STACK_, pois podem indicar trabalho preparatório para um próximo release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#8853** | fix(lark): unificar channel routing identity para Feishu endpoints | **Crítico** — Corrige routing broken que afetava integraciones Lark/Feishu | [#8853](https://github.com/zeroclaw-labs/zeroclaw/pull/8853) |
| **#7905** | feat(zerocode): adicionar cron run history e trigger | **Médio** — Melhora visibilidade e controle de jobs cron via TUI | [#7905](https://github.com/zeroclaw-labs/zeroclaw/pull/7905) |

### PRs Abertos de Alto Impacto (prontos para merge ou em revisão ativa)

| # | Título | Tamanho | Área | Link |
|---|--------|---------|------|------|
| **#8863** | feat(plugins): host-mediated outbound WebSocket para channel plugins | — | Plugins/WASM | [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) |
| **#8862** | feat(gateway, channels): host webhook ingress → plugin inbound queue | — | Plugins/Gateway | [#8862](https://github.com/zeroclaw-labs/zeroclaw/pull/8862) |
| **#8861** | fix(providers): resolver alias credential para model-catalog | S | Providers | [#8861](https://github.com/zeroclaw-labs/zeroclaw/pull/8861) |
| **#8819** | fix(runtime): classificar tool_filter_groups targets por MCP origin | L | Runtime/MCP | [#8819](https://github.com/zeroclaw-labs/zeroclaw/pull/8819) |
| **#8676** | feat(cron): expor flag uses_memory no CLI, tools e gateway API | M | Cron | [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) |
| **#8854** | refactor(providers): typed builders e normalização uniforme | XL | Providers | [#8854](https://github.com/zeroclaw-labs/zeroclaw/pull/8854) |
| **#8635** | fix(text_browser): adicionar allowed_private_hosts para fechar gap SSRF | S | Security/Browser | [#8635](https://github.com/zeroclaw-labs/zeroclaw/pull/8635) |
| **#8616** | fix(skills): restaurar flag frontmatter always:true para compact mode | S | Skills | [#8616](https://github.com/zeroclaw-labs/zeroclaw/pull/8616) |
| **#8325** | feat(gateway): adicionar hints de LAN peer discovery | L | Gateway | [#8325](https://github.com/zeroclaw-labs/zeroclaw/pull/8325) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Reações | Link |
|---|--------|-------------|---------|------|
| **#5862** | [Bug]: zeroclaw não sabe que pode adicionar cron | 13 | 0 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| **#7462** | [Bug]: 74 test failures no Windows — Unix-only commands, path semantics, console encoding | 8 | 0 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#6034** | [Bug]: perda de user message em diálogos single/multi-turn | 7 | 0 | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) |
| **#8424** | RFC: .ignore File Mechanism para Workspace File Protection | 7 | 0 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| **#7184** | RFC: Mover arquivos .ftl e .po para git submodule | 6 | 0 | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) |

### Análise dos Temas Principais

**1. Capacidade do Agente (Issue #5862)** — Usuários reportam que o agente não reconhece internamente que possui a tool `zeroclaw cron`, sugerindo lacunas na auto-descrição de capacidades. Este é um problema de UX importante para agentes AI.

**2. Compatibilidade Windows (Issue #7462)** — 74 testes falhando no Windows 11 devido a comandos Unix-only, semântica de paths e encoding de console. Afeta diretamente a experiência de ~20% dos desenvolvedores (baseado em marketshare Windows).

**3. Perda de Mensagens (Issue #6034)** — Bug crítico de S1 que causa perda de mensagens de usuário em provedores custom. Impacta workflows de produção.

**4. Proteção de Arquivos (RFC #8424)** — Demanda por um mecanismo `.ignore` similar ao .gitignore para proteger arquivos sensíveis (configs, credenciais) do acesso do agente. Requer mudança arquitetural significativa.

**5. Modularização i18n (RFC #7184)** — Proposta para mover arquivos de tradução para um submodule git, reduzindo churn no histórico principal.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Descrição | Issues | Status |
|------------|-----------|--------|--------|
| **S0 - Data Loss/Security** | Perda de dados ou risco de segurança | #6672, #6558 | Abertas, algumas bloqueadas |
| **S1 - Workflow Blocked** | Fluxo de trabalho completamente bloqueado | #6034, #8505, #6724 | Abertas, requerem atenção |
| **S2 - Degraded** | Comportamento degradado | #7462, #6517, #6173 | Abertas com diferentes statuses |
| **S3 - Minor** | Issues menores | #5862, #4873 | Abertas, baixa prioridade |

### Bugs Críticos que Necessitam Atenção Imediata

| # | Bug | Severidade | Prioridade | Status | Link |
|---|-----|------------|------------|--------|------|
| **#6672** | reasoning_content não passado em loops de tool-call com Xiaomi thinking mode | S0 | P2 | Bloqueado | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |
| **#6558** | Provider error com Qwen (405 Method Not Allowed) | S0 | P3 | Bloqueado | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) |
| **#8505** | Telegram channel não pode ser configurado via quickstart | S1 | P1 | Aceito | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) |
| **#6034** | Perda de user message em provedores custom | S1 | P1 | Aceito | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) |
| **#6724** | Channels supervisor crashloop com enabled=false | S3 | P3 | Bloqueado | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |

### Padrões de Bugs Identificados

1. **Windows/Cross-platform**: Falhas de testes específicas de Windows (Issue #7462)
2. **Provider Compatibility**: Múltiplos providers apresentam falhas (Qwen, Xiaomi, Kimi)
3. **Channels Configuration**: Telegram e outros canais têm problemas de setup
4. **Memory/Context**: Issues de overflow de contexto e hallucinação

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Andamento (Indicadores de Direção Estratégica)

| # | RFC | Domínio | Status | Link |
|---|-----|---------|--------|------|
| **#8850** | Mover channels/tools de feature flags para plugins WASM runtime | Arquitetura | In-Progress | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| **#8424** | .ignore File Mechanism para workspace file protection | Segurança/Arquitetura | Bloqueado | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| **#8603** | OpenAI Chat Completions compatibility adapter | Gateway | Aceito | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **#7218** | A2A agent discovery (.well-known/agent-card.json) | Integração | Aceito | [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) |
| **#8132** | Substituir React/Vite por Rust→Wasm framework | Web UI | Bloqueado | [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| **#7497** | OCI-compliant container registries como plugin storage | Plugins/WASM | Bloqueado | [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) |
| **#7673** | Native context compression como provider decorator | Runtime | Bloqueado | [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) |

### Features Solicitadas com Maior Engajamento

| # | Feature | Área | Prioridade | Link |
|---|---------|------|------------|------|
| **#8226** | Suporte a variáveis de ambiente custom por agente | Config/Security | P2 | [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) |
| **#8600** | Fácil model switching para multi-model providers | Providers | P2 (+1 reação) | [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| **#7431** | Pre-turn routing intent extraction | Agent | P2 | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) |
| **#8602** | Enhancements para file_read tool (PDF, charset, notebooks) | Tools | P2 | [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) |
| **#8059** | Policy cleanup: deny.toml, advisory tracking | CI/Security | P2 | [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) |
| **#8057** | CI: scheduled security jobs (CodeQL, npm audit, Trivy) | CI/Security | P2 | [#8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) |

### Sinais de Roadmap

1. **WASM-first**: Evolução clara para plugins WASM runtime (RFC #8850, #7497)
2. **Multi-agent**: Suporte a múltiplos agentes com discovery (RFC #7218)
3. **Rust/Wasm Web UI**: Substituição planejada do stack React/Vite (RFC #8132)
4. **OpenAI Compatibility**: Gateway adapter para OpenAI API (RFC #8603)
5. **Segurança**: Fortalecimento de políticas de segurança (Issues #8057, #8059, #8056)
6. **Providers Unificados**: Refatoração de providers com typed builders (PR #8854)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto | Referências |
|-----|------------|---------|-------------|
| **Configuração de Canais Quebrada** | Alta | S1 | Issues #8505, #6002, #6724 |
| **Provedores Falhando** | Alta | S0-S2 | Issues #6034, #6558, #6672 |
| **Testes no Windows Quebrados** | Média-Alta | S2 | Issue #7462 |
| **Perda de Contexto/Hallucinação** | Média | S2 | Issue #6517 |
| **Complexidade de Setup** | Média | UX | Issue #7911 (Android/Termux) |

### Cenários de Uso Identificados

1. **Multi-turn Conversations**: Usuários dependem de sessões longas com preservation de contexto
2. **Cross-channel Deployment**: Deploy em Telegram, Lark, WhatsApp, Matrix simultaneamente
3. **Enterprise Integrations**: Provedores custom (HTTP endpoints), credenciais sensíveis
4. **Cron Jobs**: Automação de tarefas agendadas com suporte a memória
5. **Local Models**: Uso com llama.cpp, Ollama e outros providers locais

### Satisfação/Insatisfação

| Aspecto | Sentimento | Detalhes |
|---------|------------|----------|
| **Core Agent Loop** | Positivo | Funcionalidade central estável |
| **Plugin Architecture** | Em evolução | RFCs em andamento, muito interesse |
| **Windows Support** | Negativo | Testes quebrados causam frustração |
| **Channel Setup** | Negativo | Múltiplos reports de problemas de configuração |
| **Provider Ecosystem** | Mix | Alguns providers funcionam bem, outros apresentam problemas |
| **Documentation** | Positivo | RFCs bem documentadas, SOP.toml em melhoria (PR #8679) |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Estagnadas

| # | Issue | Criada | Status | Última Atualização | Link |
|---|-------|--------|--------|---------------------|------|
| **#6715** | Delete unneeded branches (200+ branches) | 2026-05-16 | Aceito | 2026-07-08 | [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) |
| **#6517** | Context Overflow Causes Hallucination | 2026-05-07 | Bloqueado | 2026-07-08 | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) |
| **#7911** | Android Termux Setup Support | 2026-06-18 | Bloqueado | 2026-07-08 | [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) |

### Issues com Longo Tempo Aberto (Estaleness Risk)

| # | Título | Criada | Comentários | Estale Risk | Link |
|---|--------|--------|-------------|-------------|------|
| **#5862** | Agent não sabe que tem cron tool | 2026-04-18 | 13 | **Alto** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| **#6002** | Telegram não claramente addressed to assistant | 2026-04-22 | 5 | Médio | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) |
| **#6034** | Perda de user message | 2026-04-23 | 7 | Alto | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) |
| **#6558** | Provider error Qwen | 2026-05-10 | 4 | Médio | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) |
| **#6672** | reasoning_content not passed back | 2026-05-15 | 5

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*