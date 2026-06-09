# Resumo diário do ecossistema de agentes de IA 2026-06-10

> Issues: 5 | PRs: 7 | Projetos cobertos: 7 | Gerado em: 2026-06-09 21:44 UTC

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
## Data: 2026-06-10

---

## 1. Panorama do Dia

O projeto NullClaw demonstra **alta atividade de manutenção** nesta data, com 12 eventos totais (5 issues + 7 PRs) registrados nas últimas 24h. A equipe está focada em **polimento de estabilidade**, com 5 PRs merged resolvendo bugs críticos de PII redaction, Telegram e providers. Uma issue aberta crítica (#941) sobre cron jobs com agent-type sem spawn de subprocesso requer atenção imediata, enquanto dois PRs abertos adicionam funcionalidade significativa (novo provider Evolink e filtro de ferramentas). O repositório não possui releases formalizadas no período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu tags ou releases no período analisado. Não há changelogs, notas de migração ou breaking changes a reportar.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | fix(redaction): reject ISO date/time patterns as false-positive phone matches | vernonstinebaker | **Bug fix crítico** — Adiciona guard `isDateLike()` em `matchPhone` para evitar que outputs de data/hora sejam falsamente classificados como números de telefone |
| [#943](https://github.com/nullclaw/nullclaw/pull/943) | fix(telegram): show typing indicator during callback-query processing | raskevichai | **UX perbaikan** — Resolve #942; typing indicator agora aparece durante processamento de callbacks inline no Telegram |
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | fix(models): query base_url for custom OpenAI-compatible providers | raskevichai | **Bug fix** — Resolve #936; providers custom agora são corretamente consultados via `/v1/models` em vez de fallback hardcoded |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | fix(agent): honor compact_context flag instead of always compacting | raskevichai | **Bug fix** — Resolve #937; flag `compact_context` agora é respeitada em runtime |
| [#711](https://github.com/nullclaw/nullclaw/pull/711) | Feat/cross memory | DonPrus | **Feature significativa** — Adiciona event stream determinístico para sincronização de memória entre instâncias de agente |

**Análise:** O período demonstra foco em qualidade de código e estabilidade. Três dos cinco PRs são bug fixes derivados de issues do backlog, indicando processo de triagem ativo. O PR #711 (cross-memory) representa a feature mais substantiva merged, introduzindo primitivas para multi-agente awareness.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

| # | Tipo | Título | Comentários | Status |
|---|------|--------|-------------|--------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Issue | Agent-type cron jobs don't spawn a subprocess | 1 | **OPEN** |
| [#936](https://github.com/nullclaw/nullclaw/issues/936) | Issue | Custom OpenAI-compatible provider falls back to hardcoded Claude models | 1 | CLOSED |
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | PR | feat(providers): add Evolink as an OpenAI-compatible provider | N/A | **OPEN** |

### Análise de Demandas

**Issue #941 (Crítica - Aberta):** Relata que scheduled tasks com `job_type: "agent"` completam sem erro mas nunca iniciam o subprocesso do agente, resultando em silêncio no Telegram mesmo com `delivery_mode: "always"`. Este é o **único item aberto com severidade funcional** no período.

**PR #947 (Feature - Aberta):** Proposta de EvoLinkAI para adicionar Evolink como provider OpenAI-compatible. Expõe múltiplos modelos (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) via endpoint único. Aguarda review.

**Insight:** A comunidade demonstra interesse em **extensibilidade de providers** e **escalabilidade de tarefas agendadas**. O silêncio em cron jobs (issue #941) pode indicar problema sistêmico em edge cases de scheduling.

---

## 5. Bugs e Estabilidade

### Regressões/Bugs Resolvidos (4)

| # | Severidade | Título | Resolução |
|---|------------|--------|-----------|
| [#936](https://github.com/nullclaw/nullclaw/issues/936) | **Alta** | Custom provider com fallback para Claude hardcoded | PR [#940](https://github.com/nullclaw/nullclaw/pull/940) |
| [#944](https://github.com/nullclaw/nullclaw/issues/944) | **Alta** | PII redactor falsamente identifica data/hora como telefone | PR [#945](https://github.com/nullclaw/nullclaw/pull/945) |
| [#942](https://github.com/nullclaw/nullclaw/issues/942) | **Média** | Typing indicator ausente em callback_query do Telegram | PR [#943](https://github.com/nullclaw/nullclaw/pull/943) |
| [#937](https://github.com/nullclaw/nullclaw/issues/937) | **Média** | Flag `compact_context` nunca era lida em runtime | PR [#939](https://github.com/nullclaw/nullclaw/pull/939) |

### Bug Aberto (1)

| # | Severidade | Título | Descrição |
|---|------------|--------|-----------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | **Crítica** | Agent-type cron jobs don't spawn a subprocess | Cron jobs com `job_type: "agent"` marcam como completed mas não executam subprocesso. Sem entrega Telegram. |

**Métricas de Estabilidade:**
- Taxa de resolução de bugs: 80% (4/5)
- Bugs críticos abertos: 1
- Regressões: 0 detectadas

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Feature Requests (2)

| # | Título | Autor | Complexidade | Sinal de Roadmap |
|---|--------|-------|--------------|------------------|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | feat(providers): add Evolink as OpenAI-compatible provider | EvoLinkAI | Baixa | **Expansão de ecossistema de providers** |
| [#946](https://github.com/nullclaw/nullclaw/pull/946) | fix(agent): filter tools in system prompt text by tool_filter_groups | vernonstinebaker | Média | **Controle granular de contexto de ferramentas** |

### Análise de Tendências

1. **Multi-provider support:** Integração de gateways como Evolink indica estratégia de diversificação de modelos
2. **Filtro de ferramentas:** PR #946 refina como tools são expostas em prompts textuais vs. tool-calling nativo — melhoria de performance e controle
3. **Cross-memory (PR #711 merged):** Primitivas para sincronização inter-agente sugerem roadmap para multi-agent workflows

**Sinais de Prioridade:** O merge do PR #711 (cross-memory) e a revisão ativa de PRs de providers sugerem foco em **escalabilidade multi-agente** e **interoperabilidade de modelos** nas próximas versões.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Manifestação | Status |
|-----|--------------|--------|
| **Quebras em providers custom** | Fallback hardcoded impede uso de provedores OpenAI-compatible third-party | ✅ Resolvido (#936/#940) |
| **Redação excessiva de PII** | Datas e horários sendo substituídos por `[PHONE_X]` | ✅ Resolvido (#944/#945) |
| **UX inconsistente no Telegram** | Ausência de typing indicator em botões inline causa incerteza ao usuário | ✅ Resolvido (#942/#943) |
| **Config flag inoperante** | `compact_context` no agent config não tinha efeito | ✅ Resolvido (#937/#939) |
| **Cron jobs silenciosos** | Scheduled tasks com agent-type completam sem output | ❌ **Aberto (#941)** |

### Cenários de Uso Identificados

- **Agentes agendados via Telegram:** Usuários dependem de cron jobs com delivery Telegram (issue #941)
- **Providers custom:** Comunidade utiliza provedores OpenAI-compatible arbitrary para custo/performance
- **Interação por botões inline:** Padrão de UX `nc_choices` amplamente utilizado
- **Sincronização de memória cross-agent:** Casos de uso multi-usuário/multi-device (PR #711)

### Satisfação Geral

**Positiva com ressalvas.** Bugs resolvidos indicam atenção rápida a regressões. Issue #941 representa dor significativa para usuários de scheduling. Ausência de releases formais pode dificultar adoção por usuários enterprise.

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta ou Estagnados

| # | Tipo | Título | Idade | Prioridade |
|---|------|--------|-------|------------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Issue | Agent-type cron jobs don't spawn a subprocess | 10 dias (desde 2026-05-31) | **Crítica** |
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | PR | feat(providers): add Evolink as OpenAI-compatible provider | 5 dias (desde 2026-06-05) | Alta |
| [#946](https://github.com/nullclaw/nullclaw/pull/946) | PR | fix(agent): filter tools in system prompt text | 7 dias (desde 2026-06-03) | Média |

### Análise

**Prioridade de Atenção Imediata:**
- **#941:** Issue aberta há 10 dias com 1 comentário. Problema funcional crítico (cron jobs não executam). Requer triagem de mantenedor para identificar root cause em `schedule` + `job_type: "agent"`.

**PRs Pendentes de Review:**
- **#947:** Proposta de provider externo — review técnico necessário para avaliar qualidade da integração
- **#946:** Refatoração de filtro de ferramentas — pode ter implicações em prompts existentes de usuários

### Métricas de Backlog

- Issues abertas: 1
- PRs abertos: 2
- Idade média de items pendentes: 7.3 dias
- Items sem atividade >7 dias: 3

---

## Saúde Geral do Projeto

| Dimensão | Status | Nota |
|----------|--------|------|
| Atividade de código | ✅ Alta | 5 PRs merged, 2 abertos |
| Resolução de bugs | ✅ Boa | 80% taxa de resolução |
| Estabilidade | ⚠️ Atenção | 1 bug crítico aberto (#941) |
| Engajamento comunidade | ✅ Regular | 1 PR externo (#947) |
| Releases/Lançamentos | ❌ Nenhuma | Sem tags no período |

**Veredicto:** Projeto em fase ativa de polimento técnico. Bug fix cycle demonstra disciplina de manutenção. Prioridade imediata: investigar e resolver issue #941 (cron jobs agent-type).

---

*Relatório gerado automaticamente com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) em 2026-06-10.*

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-10
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **maturidade crescente com pressões divergentes**: projetos consolidados como Hermes Agent (50+ issues/PRs diários) focam em estabilização enterprise, enquanto projetos mais novos como CoPaw e PicoClaw lideram em inovação de features (streaming, sandboxing, multi-agente). A **segurança emergiu como tema transversal** — PicoClaw recebeu 11 security advisories em 24h, e todos os projetos apresentam issues de auth/credentials. O mercado indica tendência clara hacia **multi-provider support**, **multi-agente orchestration** e **observabilidade profissional** (OpenTelemetry). A ausência de releases formais na maioria dos projetos sugere ciclos de QA ainda em maturação.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Bugs Críticos | Saúde |
|---------|-------------|-----------|------------|----------------|---------------|-------|
| **Hermes Agent** | 50 | 50 | 7 | 0 | 3 P1 | 🟡 Pressão alta |
| **ZeroClaw** | 50 | 50 | 1 | 0 | 9 P1 | 🟠 Atenção urgente |
| **IronClaw** | 45 | 50 | 26 | 0 | 2 | 🟢 Saudável |
| **CoPaw** | 34 | 35 | 8+ | 1 (beta) | 3 | 🟢 Ativo |
| **PicoClaw** | 20 | 20 | 5 | 1 (nightly) | 11 (security) | 🟠 Alerta segurança |
| **NullClaw** | 5 | 7 | 5 | 0 | 1 | 🟢 Estável |
| **NanoBot** | 6 | 23 | 11 | 0 | 3 | 🟢 Ativo |

**Observações:**
- **Liderança em volume:** Hermes Agent e ZeroClaw operam em escala significativamente superior
- **Qualidade vs. Volume:** IronClaw demonstra melhor razão PRs merged/ativos (26/50) vs. ZeroClaw (1/50)
- **Release cadence:** Apenas CoPaw e PicoClaw publicaram versões (beta/nightly), indicando maturity gap

---

## 3. Posicionamento do Projeto Principal

Para fins de análise, considerando **Hermes Agent** como referência central pelo volume de atividade:

| Dimensão | Hermes Agent | Vantagem/Pontos de Atenção |
|----------|--------------|---------------------------|
| **Tamanho da comunidade** | 46k+ stars, 50 issues/PRs diários | Líder absoluto em engajamento |
| **Velocidade de features** | 20 PRs contribídos em 24h | Maior throughput de contribuições |
| **Estabilidade** | 3 P1 bugs ativos | Pressão em segurança e auth |
| **Maturidade de release** | v0.15.2 (2026-05-29) | Ciclo de release formalizado |
| **Arquitetura** | Multi-provider, gateway-agnostic | Flexibilidade, complexidade operacional |

**Diferenciação técnica:**
- **NullClaw** se destaca em PII redaction e context management
- **IronClaw** lidera em multi-tenant enterprise e production readiness
- **CoPaw** inova em browser automation e skills auto-evolutivas
- **PicoClaw** pioneira em streaming HTTP e agent collaboration bus

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Credentials e Auth

| Projeto | Manifestação | Status |
|---------|--------------|--------|
| **Hermes Agent** | Redaction em terminal env, race condition PyJWKClient, credential pool exhaustion | 2 PRs merged |
| **NullClaw** | PII false-positives em phone numbers | ✅ Resolvido |
| **PicoClaw** | 11 security advisories (SSRF, CSRF, bypasses) | 🟠 Em análise |
| **ZeroClaw** | allowed_tools não restringe MCP tools, unbounded shell memory | 🟠 Aberto |

**Conclusão:** Redação de secrets, validação de auth e security hardening são investimentos universais.

### 4.2 Multi-Provider e Model Routing

| Projeto | Feature | Status |
|---------|---------|--------|
| **NullClaw** | Custom OpenAI-compatible provider fallback fix | ✅ Resolvido |
| **NanoBot** | Suporte a override de modelo por conversa | Proposto |
| **Hermes Agent** | Dynamic model routing por complexidade | Roadmap |
| **IronClaw** | Strict-mode provider validation | Em correção |
| **ZeroClaw** | Unificação de provider architecture | RFC aberto |

**Conclusão:** A gestão dinâmica de múltiplos modelos é o roadmap mais convergente do ecossistema.

### 4.3 Contexto e Memória de Sessão

| Projeto | Problema | Severidade |
|---------|----------|------------|
| **NullClaw** | compact_context flag ignorada | Média ✅ |
| **NanoBot** | idleCompact usa histórico incompleto | Alta |
| **Hermes Agent** | Post-compaction message loss | P1 |
| **ZeroClaw** | Excesso de weight em memória, perda de mensagens | P1 |

**Conclusão:** Gerenciamento de contexto é área crítica com bugs em múltiplos projetos.

---

## 5. Análise de Diferenciação

| Projeto | Foco Principal | Público-Alvo | Arquitetura Distintiva |
|---------|---------------|--------------|----------------------|
| **Hermes Agent** | Produtividade, integrations (Telegram, Desktop, MCP, Email) | Desenvolvedores individuais, equipes | Modular com gateway-agnostic |
| **IronClaw** | Enterprise multi-tenant, Reborn production | Empresas, deployments cloud-native | Microservices com WebUI v2 |
| **CoPaw** | Browser automation, skills auto-evolutivas | Usuários chineses, devs de plugins | AgentScope 2.0 backend |
| **PicoClaw** | Streaming nativo, agent collaboration, segurança | Operadores de IoT, integradores | Collaboration Bus com mailboxes |
| **NullClaw** | Context management, PII redaction | Usuários privacy-focused | Modular, agent-centric |
| **NanoBot** | Testabilidade, tool call validation | Desenvolvedores de tools | GitAgent Protocol support |
| **ZeroClaw** | Multi-canal (SMS, social, IoT), observabilidade | Ops teams, home automation | Channel-driven architecture |

**Matriz de posicionamento:**

```
                    Enterprise/Complexo
                           ▲
                           │
    IronClaw ──────────────┼──────────── Hermes Agent
         │                 │                 │
         │                 │                 │
         ▼                 │                 ▼
    Multi-canal ◄──────────┴───────── Produtividade
    ZeroClaw                         individual
         │                            │
         │                            │
    PicoClaw ◄────────────────────────┤
         │                            │
         ▼                            ▼
    Automação                      Testabilidade
    Browser                        NanoBot
    CoPaw
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|-----------|----------|-----------|
| **Iteração rápida** | Hermes Agent, CoPaw, NanoBot | 8-20 PRs merged/contribuídos em 24h |
| **Estável com foco** | NullClaw, IronClaw | 5 PRs merged, alta taxa de resolução |
| **Alto volume, baixa resolução** | ZeroClaw | 50 PRs, apenas 1 merged — gargalo de review |
| **Em maturação** | PicoClaw | 5 PRs merged + 11 security advisories |

### 6.2 Maturidade de Processo

| Métrica | Líder | Rezagado |
|---------|-------|----------|
| **Release formal** | Hermes Agent (v0.15.2), CoPaw (v1.1.11-beta.2) | ZeroClaw, NullClaw |
| **Test coverage** | NanoBot (PRs de teste #3982, #3983) | ZeroClaw |
| **Bug resolution rate** | NullClaw (80%), IronClaw (5 bugs/24h) | ZeroClaw (9 P1 abertos) |
| **Segurança** | Hermes Agent (redaction, security PRs) | PicoClaw (11 CVEs) |

### 6.3 Engajamento Comunitário

| Projeto | Métrica de Engajamento | Observação |
|---------|----------------------|------------|
| **Hermes Agent** | Issue #7237 com 38 comentários | Maior debate do ecossistema |
| **CoPaw** | Issue #5017 com 10 comentários | Feature request estratégico |
| **ZeroClaw** | 6+ issues com 5-12 comentários | Discussão arquitetural intensa |
| **NanoBot** | Documentação reorganizada (onboarding) | Foco em DX |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-model routing dinâmico** | 4+ projetos com issues/PRs de model switching por sessão | Hermes Agent, NanoBot, IronClaw, ZeroClaw |
| **Agent collaboration bus** | PR #2937 (PicoClaw), PR #711 (NullClaw) | PicoClaw, NullClaw |
| **Observabilidade enterprise** | RFCs OTel em 3+ projetos, demanda por Langfuse | ZeroClaw, CoPaw, Hermes Agent |
| **Segurança como blocking** | 11 CVEs em PicoClaw, auth issues generalizados | Todos |
| **Streaming nativo** | Feature request em PicoClaw, streaming HTTP config | PicoClaw, NanoBot |
| **Smart home/IoT** | Integrações Home Assistant, Philips Hue, Sonos | ZeroClaw, PicoClaw |
| **Skills auto-evolutivas** | CoPaw #5017, Hermes Agent learning loop | CoPaw, Hermes Agent |
| **Multi-tenant enterprise** | IronClaw Reborn, admin-shared tools | IronClaw |

### 7.2 Radar de Prioridades Emergentes

```
┌─────────────────────────────────────────────────────────────────┐
│                      RADAR DE TENDÊNCIAS                        │
│                                                                 │
│                    [ Multi-model routing ]                      │
│                           ▲                                     │
│                          ╱ ╲                                    │
│           [ Streaming ]╱   ╲[ Security hardening ]              │
│                  ╱         ╲                                    │
│         [ Agent colab ]     [ Observabilidade ]                 │
│              ╱                   ╲                               │
│    [ Skills auto-evol ]           [ Multi-tenant ]              │
│            ╱                           ╲                       │
│   [ Browser automation ]        [ Smart home/IoT ]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Recomendações Estratégicas

1. **Para projetos em crescimento:** Priorizar multi-provider support e test coverage antes de expansão de features
2. **Para projetos enterprise-focused:** Investir em observabilidade (OTel), multi-tenant isolation e security hardening
3. **Para todos os projetos:** Adotar processo formal de release e security disclosure

---

**Nota:** Este relatório foi gerado automaticamente com base em dados públicos do GitHub de cada projeto em 2026-06-10. Métricas de saúde são inferências qualitativas baseadas nos dados disponíveis.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-10

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** nesta data, com 6 issues abertas e 23 pull requests atualizados nas últimas 24h. A comunidade demonstra foco em **estabilidade e refinamento**: 11 PRs foram merged/fechados, cobrindo desde correções de bugs críticos (websocket, histórico monotonicidade) até melhorias de experiência (onboarding, renderização LaTeX/TeX). Não houve releases formais, mas o fluxo de contributions indica maturidade no processo de integração. A predominância de PRs de teste (#3982, #3983, #4193) evidencia um movimento em direção à **qualidade e cobertura de código**.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões no período analisado.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (11 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#4208](https://github.com/HKUDS/nanobot/pull/4208) | `[webui] feat: add assistant reply fork-from-here` | Bayern4ever-dot | Funcionalidade de ramificação de conversas no WebUI — permite criar novos chats a partir de respostas anteriores |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | `docs: make onboarding friendlier for beginners` | chengyongru | Reorganização da documentação com novos fluxos para iniciantes, CLI, WebUI e deployment |
| [#4265](https://github.com/HKUDS/nanobot/pull/4265) | `feat: change cron schedule from daily to every 2 days` | wrightwei1118 | Ajuste de scheduling para tarefa de leitura em inglês (otimização de recursos) |
| [#4252](https://github.com/HKUDS/nanobot/pull/4252) | `fix(webui): render TeX math delimiters` | chengyongru | Suporte a delimitadores `\(...\)`, `\[...\]` e `$...$` no WebUI via remark-math + rehype-katex |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | `Improve tool call validation strictness` | chengyongru | Validação rigorosa de argumentos de tool calls — impede execução de argumentos malformados |
| [#3434](https://github.com/HKUDS/nanobot/pull/3434) | `feat: add lateX to feishu channel` | c137650 | Renderização de fórmulas LaTeX via CodeCogs API no canal Feishu |
| [#3400](https://github.com/HKUDS/nanobot/pull/3400) | `feat: allow users to decide whether dream can edit USER.md and SOUL.md` | c137650 | Controle granular sobre edição de arquivos de identidade pelo Dream |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) | `Add GitAgent Protocol support` | computer-agent | Suporte ao padrão GAP (GitAgent Protocol) com agent.yaml + SOUL.md |

**Destaque**: A integração do GitAgent Protocol (#4034) e a validação estrita de tool calls (#4190) representam avanços arquiteturais significativos.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | `support overriding model per conversation` | 3 | enhancement | Demanda por alternância dinâmica entre presets de modelo (ex: openrouter vs llamacpp) baseada em privacidade/velocidade |
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) | `history.jsonl 跨会话注入导致上下文污染` | 2 | bug/refactor | Problema de poluição de contexto entre sessões — `ContextBuilder.build_system_prompt()` não isola entradas por sessão |

### PRs com Atividade Significativa

| # | Título | Impacto |
|---|--------|---------|
| [#4267](https://github.com/HKUDS/nanobot/pull/4267) | `fix(websocket): Fix bug in webui where session content is dropped` | Bug crítico — respostas completas eram perdidas intermitentemente na renderização |
| [#4263](https://github.com/HKUDS/nanobot/pull/4263) | `fix(providers): use max_completion_tokens for GPT-5.x` | Correção de compatibilidade com modelos GPT-5.x e reasoning (o1/o3/o4) |

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #4264 | **Alta** | `idleCompact should use complete session history` | [Issue](https://github.com/HKUDS/nanobot/issues/4264) |
| #4061 | **Alta** | `OpenAI-compatible text-format tool calls not parsed` | [Issue](https://github.com/HKUDS/nanobot/issues/4061) |
| #4267 | **Alta** | `session content is dropped in webui` (PR aberto) | [PR](https://github.com/HKUDS/nanobot/pull/4267) |
| #4261 | **Média** | `max_tokens/max_completion_tokens mismatch` (já em fix #4263) | [Issue](https://github.com/HKUDS/nanobot/issues/4261) |
| #4257 | **Média** | `split_message breaks fenced code blocks` | [PR](https://github.com/HKUDS/nanobot/pull/4257) |

**Análise**: O bug de content drop no websocket (#4267) é o mais crítico — causa perda silenciosa de respostas. O bug de idleCompact (#4264) pode gerar históricos corrompidos com conclusões erradas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Potencial Impacto | Link |
|---|--------|-------------------|------|
| #4253 | `support overriding model per conversation` | Alta — permitir alternar entre modelos (openrouter vs local) por sessão | [Issue](https://github.com/HKUDS/nanobot/issues/4253) |
| #4262 | `Use botIcon if defined when starting agent mode` | Baixa — UX improvement no startup do agente | [Issue](https://github.com/HKUDS/nanobot/issues/4262) |
| #4260 | `add StepFun ASR SSE transcription provider` | Média — expansão de provedores ASR | [PR](https://github.com/HKUDS/nanobot/pull/4260) |

### Sinais de Evolução do Roadmap

1. **Multi-model por sessão**: A issue #4253 com 3 comentários indica demanda real por alternância de provedores
2. **Memória e contexto**: Issues #4259 e #4264 mostram foco em gestão de histórico
3. **Testes automatizados**: PRs #3982, #3983, #4193 indicam investimento em qualidade
4. **Segurança em exec**: PRs #4119, #4053 addressam symlink escapes e write path restrictions

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Evidência |
|-----|------------|-----------|
| **Perda de respostas** na WebUI (websocket) | Alta | Issue #4267 — "silently drop entire assistant replies" |
| **Contexto poluído** entre sessões | Moderada | Issue #4259 — "未做会话隔离" (falta isolamento de sessão) |
| **Histórico incorreto** após correções do usuário | Moderada | Issue #4264 — idleCompact ignora últimas 8 mensagens |
| **Incompatibilidade com GPT-5.x** (max_tokens) | Baixa | Issue #4261 — já em correção via #4263 |

### Cenários de Uso Reportados

- **Privacidade vs Performance**: Usuários alternam entre modelos locais (llamacpp) e provedores cloud baseado em requisitos de privacidade (#4253)
- **Transcrição ASR**: Demanda por novo provedor StepFun para transcrição em tempo real (#4260)
- **Customização de agente**: Desejo de controle sobre botIcon e arquivos editáveis pelo Dream (#4262, #3400)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias

| # | Título | Idade | Prioridade | Link |
|---|--------|-------|------------|------|
| #4061 | `OpenAI-compatible text-format tool calls not parsed` | 12 dias | **Alta** | [Issue](https://github.com/HKUDS/nanobot/issues/4061) |

### PRs Abertos sem Merge (Stale Risks)

| # | Título | Atualizado | Importância |
|---|--------|------------|-------------|
| #4053 | `keep read-only roots out of write paths` | 2026-06-09 | Segurança |
| #4119 | `block relative symlink workspace escapes` | 2026-06-09 | Segurança |
| #3982 | `add scripted agent runner harness` | 2026-06-09 | Testes |
| #3983 | `cover runner blocked tool-call finish reasons` | 2026-06-09 | Testes |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues abertas (24h) | 6 | 🟢 Normal |
| PRs abertos | 12 | 🟢 Ativo |
| PRs merged (24h) | 11 | 🟢 Muito ativo |
| Releases (24h) | 0 | 🟡 Sem release, mas fluxo estável |
| Bugs críticos abertos | 3 | 🟡 Requer atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-10*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-10

---

## 1. Panorama do dia

O projeto Hermes Agent apresenta **alta atividade comunitária** no dia 10 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve novos lançamentos, sinalizando que a equipe pode estar em ciclo de revisão de PRs antes de uma futura release. O volume de atividade é expressivo: 46 issues abertas/ativas e 43 PRs abertos, com 7 PRs já merged/fechados. Entre os destaques negativos, três bugs de severidade P1 estão ativos — incluindo falhas de autenticação com OpenRouter e perda de mensagens pós-compactação — indicando pressão sobre a estabilidade do agente. Do lado positivo, a comunidade contributed 20 PRs em 24h, cobrindo desde segurança (redação de secrets em terminal) até ergonomia (OpenRC para Alpine Linux, Mistral como provider). O ecossistema de integrações (Telegram, Desktop/TUI, MCP, Email) concentra a maioria dos bugs reportados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último release tag detectado nos issues é `v0.15.2` (tag `v2026.5.29.2`), porém o sistema de update do CLI ainda reporta "7 commits behind" para usuários Windows, indicando que a distribuição pode não ter alcançado todos os canais. Recomenda-se monitorar a tag `v2026.5.29.2` para confirmação de lançamento estável.

---

## 3. Progresso do projeto

Sete PRs foram merged ou fechados nas últimas 24 horas. Os mais relevantes:

| PR | Título | Impacto |
|----|--------|---------|
| [#43095](https://github.com/NousResearch/hermes-agent/pull/43095) | `fix(security): redact terminal env secret values` | Redação de valores sensíveis em variáveis de ambiente (ex. `HUBSPOT_SERVICE_KEY`) antes da saída do terminal — **alta prioridade de segurança** |
| [#43093](https://github.com/NousResearch/hermes-agent/pull/43093) | `fix(dashboard-auth): thread-safe lazy init of PyJWKClient` | Corrige race condition na inicialização lazy de `PyJWKClient` em provedores Nous e SelfHosted OIDC |
| [#43085](https://github.com/NousResearch/hermes-agent/pull/43085) | `fix(gateway): interrupt cron agents during shutdown` | Garante que agentes cron são interrompidos antes do drain de sessões durante shutdown/restart do gateway |
| [#43092](https://github.com/NousResearch/hermes-agent/pull/43092) | `fix(agent): move tool-call argument redaction to persistence boundary` | Move redação de credenciais de `build_assistant_message()` para `_persist_session()`, resolvendo quebra de comandos como `PGPASSWORD='real_pass' psql` na segunda chamada |
| [#43102](https://github.com/NousResearch/hermes-agent/pull/43102) | `fix(google-workspace): recursively extract body from nested MIME parts` | Correção do Gmail get para processar árvores MIME aninhadas (`message/rfc822`, `multipart/mixed`) |
| [#43100](https://github.com/NousResearch/hermes-agent/pull/43100) | `feat(cli): auto-enable compact mode for local providers` | Ativação automática do modo compacto para Ollama/localhost, resolvendo `exit 130`/`exit 124` por starvation do spinner |
| [#43103](https://github.com/NousResearch/hermes-agent/pull/43103) | `fix(models): keep curated Anthropic aliases in /model picker` | Mantém aliases curados como `claude-fable-5` no picker mesmo em setups nativos Anthropic |

PRs merged duplicados (4×): O PR [#43101](https://github.com/NousResearch/hermes-agent/pull/43101), [#43096](https://github.com/NousResearch/hermes-agent/pull/43096), [#43097](https://github.com/NousResearch/hermes-agent/pull/43097) e [#43094](https://github.com/NousResearch/hermes-agent/pull/43094) — todos `feat(gateway): add OpenRC service support for Alpine Linux` — foram fechados, sinalizando possível merge conflitante ou duplicação acidental. O PR original [#43098](https://github.com/NousResearch/hermes-agent/pull/43098) permanece aberto.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários + reações)

**#7237 — Response truncated due to output length limit** (38 comentários, 5 👍) — **CLOSED**
Este foi o issue mais comentado do período. Reportava que o Hermes Agent trunca respostas longas no CLI e em gateways Telegram/Discord/Slack, gerando o erro `Error: Response truncated due to output length limit`. Com 38 comentários, a comunidade demonstrou forte interesse, indicando que o problema afeta fluxos de trabalho reais com frequência. A issue foi fechada, sugerindo que uma correção foi implementada ou está em curso.

**#30652 — Dynamic model routing based on task complexity** (5 comentários, 1 👍) — **OPEN**
Feature request para roteamento dinâmico de modelos conforme a complexidade da tarefa, hoje cada sessão é travada a um único modelo via `config.yaml`. Este é um tema estratégico: a demanda por roteamento inteligente indica que usuários avançados buscam otimização de custo/latência sem sacrificar qualidade para tarefas simples. Sem resposta da equipe ainda.

**#27266 — Please Give Credit to EvoMap and Apologize** (4 comentários, 2 👍) — **OPEN, INVALID**
Marked como inválido, mas com 2 reações de aprovação. A comunidade reporta que o Hermes Agent copiou o projeto Evolver da EvoMap (sistema de auto-evolução de 10 passos e memória de três camadas) sem crédito. Embora marcado como fora de escopo pelo triager, o issue reflete sensibilidade da comunidade sobre práticas de attribution em projetos open source.

**#42777 — Desktop App chat scrollbar no longer follows chat** (3 comentários, 3 👍) — **OPEN**
O único issue com reação igual ao número de comentários (3/3). Usuários do Desktop App precisam rolar manualmente para ver novas mensagens, quebrando a experiência esperada. Thumbs-up indicam impacto negativo amplo na usabilidade.

---

## 5. Bugs e estabilidade

### P1 — Críticos (requerem atenção imediata)

| Issue | Título | Componente | Detalhe |
|-------|--------|------------|---------|
| [#42835](https://github.com/NousResearch/hermes-agent/issues/42835) | OpenRouter auth pool detecta pool mas resolve API key vazia e envia requests sem Authorization header | agent, provider/openrouter | Afeta autenticação gratuita do Nemotron via OpenRouter |
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | Passwords substituídos por `***` mas modelo lê histórico e falha na segunda tool call | agent | Redação em memória não é suficiente — o fix em [#43092](https://github.com/NousResearch/hermes-agent/pull/43092) corrige movendo para o limite de persistência |
| [#43062](https://github.com/NousResearch/hermes-agent/issues/43062) | Post-compaction message loss: replies do assistant perdidas, user messages mescladas | agent, gateway | Após `/compress` ou compactação automática, o child session perde mensagens entre o limiar de compactação e o evento de compressão |

### P2 — Altos (impacto significativo)

| Issue | Título | Componente |
|-------|--------|------------|
| [#38945](https://github.com/NousResearch/hermes-agent/issues/38945) | Desktop/TUI não expõe MCP tools (Todoist) de forma confiável | tui, tool/mcp |
| [#38618](https://github.com/NousResearch/hermes-agent/issues/38618) | Update reporta 7 commits behind / permanece em 0.15.1 quando latest é 0.15.2 | cli, area/config |
| [#40885](https://github.com/NousResearch/hermes-agent/issues/40885) | Telegram: mensagem pula para o meio/topo durante processamento | gateway, platform/telegram |
| [#42943](https://github.com/NousResearch/hermes-agent/issues/42943) | Custom provider setup falha com EMPTY_API_SERVER_KEY e parsing de Model ID | cli, area/config |
| [#40960](https://github.com/NousResearch/hermes-agent/issues/40960) | Credential pool exhaustion causa 401 enganoso ao invés de 429/402 real | cli, area/auth |
| [#42997](https://github.com/NousResearch/hermes-agent/issues/42997) | Email gateway IMAP polling marca mensagens Gmail como lidas | gateway, platform/email |
| [#43044](https://github.com/NousResearch/hermes-agent/issues/43044) | Gateway orphan-MCP reaper pode SIGTERM processo não-relacionado via PGID reciclado | gateway, tool/mcp |
| [#32618](https://github.com/NousResearch/hermes-agent/issues/32618) | `_extract_pricing` crash em valores de pricing tipo lista, causando fallback 256K | agent |

### P3 — Médios (impacto moderado)

Seis bugs P3 em componentes diversos: kanban dashboard (`COLUMN_LABEL is not defined`), duplicação de rows em toolsets de plugins, scrollbar do Desktop App, provider `lmstudio` bypassando JIT, command description em locale, e `HERMES_DASHBOARD_PUBLIC_URL` não respeitado em Docker.

**Regressão notável:** O bug de scrollbar (#42777) afeta o Desktop App e recebeu 3 thumbs-up — único issue P3 com reação igual ao número de comentários, indicando impacto acima da severidade aparente.

---

## 6. Pedidos de features e sinais de roadmap

| Issue | Título | Componente | Potencial estratégico |
|-------|--------|------------|----------------------|
| [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) | Dynamic model routing based on task complexity | agent | **Alto** — otimização de custo/latência; roteamento inteligente |
| [#13107](https://github.com/NousResearch/hermes-agent/issues/13107) | Command description override via config.yaml | cli, area/config | Suporte a localization de comandos em Telegram/Discord |
| [#43008](https://github.com/NousResearch/hermes-agent/issues/43008) | Graceful session resume / reset-awareness | gateway | Experiência de usuário: contexto perdido deve ser sinalizado |
| [#41553](https://github.com/NousResearch/hermes-agent/issues/41553) | Hermes Workspace integration inside Hermes Desktop | tui | Expansão do ecossistema Desktop |
| [#42478](https://github.com/NousResearch/hermes-agent/issues/42478) | Dangerous command approval prompts lack context | tool/terminal | Segurança e UX em aprovações de comandos |
| [#42758](https://github.com/NousResearch/hermes-agent/issues/42758) | Desktop sidebar workspace tree: copy path option | desktop | Ergonomia de arquivos grandes (>50% context) |
| [#42357](https://github.com/NousResearch/hermes-agent/pull/42357) | Add Mistral as first-class provider | cli, provider/nous | Expansão de provedores suportados (PR aberto) |
| [#27648](https://github.com/NousResearch/hermes-agent/pull/27648) | Improve models fallback management | web | Gerenciamento de fallback providers end-to-end (PR aberto) |

**Sinal de roadmap:** A convergência de PRs abertos sobre providers (Mistral, fallback management, modelos curados Anthropic) e issues sobre roteamento dinâmico sugere que a **gestão de múltiplos modelos** é uma prioridade de desenvolvimento para os próximos ciclos.

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

1. **Estabilidade de sessão e contexto:** Usuários reportam perda silenciosa de contexto após idle-expiry (#43008) e pós-compactação (#43062). A falta de sinalização ao usuário gera confusão — o agente responde como se nada tivesse sido perdido.

2. **Autenticação e credenciais:** Credential pool exhaustion gerando 401 enganosos (#40960), falha de autenticação OpenRouter (#42835), e redação insuficiente de passwords (#43083) formam um padrão de vulnerabilidade em auth que afeta fluxos de produção.

3. **Experiência Desktop/TUI:** Problemas com MCP tools não expostas (#38945), scrollbar quebrado (#42777), e file browser com ENOENT intermitente (#43042) degradam a experiência nativa.

4. **Integração Telegram:** Bugs de mídia de áudio (#32644, closed), mensagens pulando durante processamento (#40885), e prompts de comando perigoso sem contexto (#42478) afetam o gateway mais utilizado.

5. **Update e deployment:** O sistema de update no Windows falha em quarentenar o exe em uso (#26670, closed), e a detecção de updates fica presa em versões antigas (#38618).

### Cenários

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-10

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade intensa com **20 issues e 20 PRs atualizados nas últimas 24h**. O lançamento de uma nightly build (v0.2.9-nightly.20260609) indica progresso contínuo no desenvolvimento. O destaque negativo do período é a **proliferação de 11 security advisories** reportados pelo mesmo autor (YLChen-007), abrangendo SSRF, bypasses de autenticação e CSRF — sinalizando necessidade urgente de revisão de segurança em múltiplos módulos. A comunidade demonstra engajamento saudável com 5 PRs merged/fechados e várias contribuições de bugs e features em paralelo.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.9-nightly.20260609.46b29a0a

| Campo | Detalhe |
|-------|---------|
| **Data** | 2026-06-09 |
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Unstable — uso em produção desaconselhado |

**Changelog completo**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

> **Nota**: Esta é uma build automática do branch `main`. Não há changelog detalhado publicadado — recomenda-se cautela em ambientes de produção.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (5 total)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3064](https://github.com/sipeed/picoclaw/pull/3064) | `fix(config): add ok check for type assertion in migration model name indexing` | chengzhichao-xydt | **Crítica** — Adiciona verificação de tipo (`ok` check) em `pkg/config/migration.go:504` para evitar panic com entradas de config malformadas onde `model_name` não é string |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | `fix(config): use canonical hyphenated model ID for default claude-sonnet entry` | LegendAlessandro-Liguori | **Alta** — Corrige ID do modelo claude-sonnet-4.6 de formato "dotted" para "hyphenated", resolvendo falha na primeira mensagem após instalação limpa |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | `fix(providers): omit temperature for claude-opus-4-7` | LegendAlessandro-Liguori | **Alta** — Remove parâmetro `temperature` das requisições ao claude-opus-4-7, resolvendo HTTP 400 "temperature is deprecated for this model" |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | `Feat/agent collaboration` | afjcjsbx | **Alta** — Introduce Agent Collaboration Bus com mailboxes, threads isoladas, envelopes de mensagem estruturados e controle de permissões |
| [#3086](https://github.com/sipeed/picoclaw/pull/3086) | `docs: update wechat qrcode` | imguoguo | **Baixa** — Atualização de documentação QR code WeChat |

### PRs Abertos com Maior Relevância

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | `feat: add deltachat gateway` | Provider | Alta |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | `feat(provider): add NEAR AI Cloud provider` | Provider | Alta |
| [#3087](https://github.com/sipeed/picoclaw/pull/3087) | `fix(tools): allow workspace relative exec paths` | Security | Alta |
| [#3083](https://github.com/sipeed/picoclaw/pull/3083) | `feat(web): harden launcher access control` | Security | Alta |
| [#3085](https://github.com/sipeed/picoclaw/pull/3085) | `fix(tools): block 198.18.0.0/15 in SSRF guard` | Security | Alta |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Tipo |
|---|--------|-------------|-----|------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | `[Feature] Add in config to send streaming HTTP request` | 11 | 1 | Enhancement |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | `[BUG] Histórico mostra apenas última mensagem do usuário` | 6 | 0 | Bug (Closed) |
| [#2939](https://github.com/sipeed/picoclaw/issues/2939) | `claude-opus-4-7 fails with 'temperature is deprecated'` | 2 | 0 | Bug (Closed) |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | `[Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients` | 1 | 1 | Enhancement |

### Análise de Demandas

**🔹 Streaming HTTP Requests (#2404)**
Proposta para adicionar `"streaming": true` na configuração, similar ao `stream=True` do cliente OpenAI Python. Com 11 comentários, há discussão ativa sobre a implementação. Este é um **sinal claro de roadmap** — streaming é essencial para UX em aplicações LLM modernas.

**🔹 Turn Completion Signal (#2984)**
Clientes WebSocket externos carecem de sinal determinístico para detectar fim de processamento. Currently recebem eventos `message.create`, `message.update`, `typing.start/stop`, mas sem explicit turn completion. Esta é uma **melhoria de protocolo** importante para ecossistema de integrações.

**🔹 Repositório Local Skills Metadata (#3075)**
Alerta de segurança: PicoClaw auto-carrega `./skills/` do working directory no system prompt quando `PICO_SKILLS_DIR` não está configurado. Representa vetor de injeção em contextos não confiáveis.

---

## 5. Bugs e Estabilidade

### Security Advisories (11 reportados em 2026-06-09 por YLChen-007)

| # | Severidade | Título |
|---|-----------|--------|
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | 🔴 **Crítica** | CSRF in PicoClaw Launcher First-Run Password Setup |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | 🔴 **Crítica** | Signed LINE webhook replay allows duplicate execution |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | 🟠 **Alta** | `web_fetch` SSRF bypass via ISATAP IPv6 literals |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | 🟠 **Alta** | Untrusted repository-local `skills/` auto-loaded |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | 🟠 **Alta** | WeCom group trigger policy bypass |
| [#3077](https://github.com/sipeed/picoclaw/issues/3077) | 🟠 **Alta** | `web_fetch` SSRF bypass via 198.18.0.0/15 |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | 🟠 **Alta** | `web_fetch` SSRF bypass via HTTP proxy |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | 🟠 **Alta** | `exec` whitelist allows jq environment disclosure |
| [#3080](https://github.com/sipeed/picoclaw/issues/3080) | 🟠 **Alta** | `allowed_cidrs` bypass via loopback proxying |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | 🟡 **Média** | Approval hook `cwd` symlink race |
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | 🟡 **Média** | Feishu reply-context bypasses `allow_from` |

> **⚠️ Alerta**: 11 security issues do mesmo autor no mesmo dia indica auditoria de segurança ativa ou researcher engajado. PRs relacionados (#3083, #3085) já submetidos para mitigação.

### Bugs Funcionais Recentemente Resolvidos

| # | Título | Status |
|---|--------|--------|
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Histórico mostra apenas última mensagem do usuário | ✅ Closed |
| [#2939](https://github.com/sipeed/picoclaw/issues/2939) | claude-opus-4-7 falha com temperatura deprecated | ✅ Closed |

### Bugs em Progresso (PRs submetidos)

| # | Título | PR |
|---|--------|-----|
| Sessão história incompleta | Usuários viam apenas última mensagem | [#2990](https://github.com/sipeed/picoclaw/pull/2990) |
| Compressão de contexto | `/context` ignorava `summarize_token_percent` | [#2988](https://github.com/sipeed/picoclaw/pull/2988) |
| tool_calls filtrados | Mensagens de tool_calls dropadas incorretamente | [#2987](https://github.com/sipeed/picoclaw/pull/2987) |
| Empty LLM response | Falta retry para respostas semanticamente vazias | [#2983](https://github.com/sipeed/picoclaw/pull/2983) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Tipo | Relevância |
|---|--------|------|------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP requests config | Enhancement | ⭐⭐⭐ Alta |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Turn completion signal para WebSocket | Protocol | ⭐⭐⭐ Alta |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Usar vodozemac em vez de libolm | Security/Dependency | ⭐⭐ Média |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | DeltaChat gateway | Provider | ⭐⭐ Média |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | NEAR AI Cloud provider | Provider | ⭐⭐ Média |

### Sinais de Roadmap Identificados

1. **Streaming Nativo**: Demanda clara por streaming HTTP requests similar ao OpenAI SDK — indica pressão para feature parity
2. **Substituição de libolm**: Vodozemac como replacement oficial para biblioteca abandonada — migração necessária
3. **Agent Collaboration**: PR #2937 mergeado introduce Collaboration Bus — novo paradigma de arquitetura multi-agente
4. **NEAR AI Cloud**: Provedor adicional expande ecossistema de modelos

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Histórico de chat incompleto** | Issue #2796: múltiplas mensagens de usuário não aparecem no histórico | 🔴 Alta |
| **Modelo claude-opus-4-7 quebrado** | HTTP 400 em toda primeira tentativa com o modelo | 🔴 Alta |
| **SSRF vulnerabilities** | 4 issues de bypass em web_fetch | 🔴 Crítica |
| **Console flashes no Windows** | Janelas visíveis durante execuções | 🟡 Média |
| **DmScope não persiste** | Config de session scope não é salvo | 🟡 Média |

### Cenários de Uso Emergentés

- **Multi-agent collaboration**: Feature nova com Adoption inicial
- **Enterprise messaging (DeltaChat)**: Gateway em desenvolvimento
- **WebSocket integrations**: Clientes externos precisam de sinais mais explícitos
- **TEE-capable models**: Via NEAR AI Cloud provider

### Satisfação/Insatisfação

| Aspecto | Sentimento | Base |
|---------|------------|------|
| Stability core | 🟢 Positivo | Bugs críticos resolvidos rapidamente (2940, 2942, 3064) |
| Security hardening | 🟡 Alerta | 11 security issues em 24h — atenção necessária |
| UX features | 🟠 Necessidade | Streaming, histórico completo, persistência de config |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP requests | 2026-04-07 | ~63 dias | Alta |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | NEAR AI Cloud provider | 2026-05-21 | ~20 dias | Média |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Turn completion signal | 2026-06-02 | ~8 dias | Alta |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | vodozemac replacement | 2026-06-09 | ~1 dia | Média |

### PRs com Marca "stale" (sem atualização)

| # | Título | Autor | Relevância |
|---|--------|-------|------------|
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | Session history fix | yuxuan-7814 | 🔴 Alta |
| [#2988](https://github.com/sipeed/picoclaw/pull/2988) | Context compression config | yuxuan-7814 | 🟠 Média |
| [#2987](https://github.com/sipeed/picoclaw/pull/2987) | tool_calls filtering | yuxuan-7814 | 🟠 Média |
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) | Empty LLM response retry | afjc

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data de referência: 2026-06-10

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 10 de junho de 2026, com 45 issues e 50 PRs atualizados nas últimas 24 horas. Não houve releases nesse período, porém o trabalho de integração e maturação do Reborn continua intenso — 26 PRs foram merged/fechados, indicando entrega contínua. Os temas dominantes são: (a) preparação para production cutover do Reborn com múltiplas issues Epicas e slices de readiness; (b) consolidação da WebUI v2 com cobertura de testes E2E e auditorias de segurança; e (c) correção de bugs críticos em validação de providers strict-mode e configuração de clientes LLM. A saúde geral do projeto é positiva, com atividade balanceada entre features, bugs e infraestrutura.

---

## 2. Lançamentos

**Nenhuma release została registrada nas últimas 24h.**

O último release publicado (PR #3708) foi detectado em 2026-05-16, contendo:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ (breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ (breaking changes)
- `ironclaw`: 0.24.0 → 0.29.1

> ⚠️ Os breaking changes em `ironclaw_common` e `ironclaw_skills` exigem atenção em migrações.([GitHub PR #3708](https://github.com/nearai/ironclaw/pull/3708))

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h:

| PR | Título | Impacto |
|----|--------|---------|
| [#4582](https://github.com/nearai/ironclaw/pull/4582) | WU-B subagent durability sub-spec | Define schema + traits para 4 stores in-memory e 2 novas tabelas (settlement event log, idempotency ledger). Base para WU-C. |
| [#4651](https://github.com/nearai/ironclaw/pull/4651) | Handle Reborn Railway start command placeholders | Corrige runtime startup failure em Railway caused por `$VAR` placeholders literais nos comandos Docker. |
| [#4447](https://github.com/nearai/ironclaw/pull/4447) | Close OpenAI-compatible API migration | Fecha migration #3283 com compatibilidade e testes de segurança. |
| [#4446](https://github.com/nearai/ironclaw/pull/4446) | Translate projection streams to OpenAI-compatible SSE | Implementa streaming compatível com OpenAI para Chat Completions e Responses. |
| [#4604](https://github.com/nearai/ironclaw/issues/4604) | CLOSED: Reborn WebUI v2 lacks browser-driven E2E | Cria framework E2E completo com browser real. |
| [#4609](https://github.com/nearai/ironclaw/issues/4609) | CLOSED: Auth parity WebChat v2 | Auditoria de bearer/DB/OIDC/query-token. |
| [#4591](https://github.com/nearai/ironclaw/issues/4591) | CLOSED: Operator command-plane foundation | Estabelece typed WebUI v2 facade surface e route/handler shells. |

**Destaque de progresso:** O ecossistema Reborn avançou significativamente com o fechamento de múltiplas tranches críticas — operator command-plane, auth parity e streaming SSE. A foundation está sendo construída para o cutover de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

| Issue | Título | Comentários | Tema |
|-------|--------|-------------|------|
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | Epic: Reborn production wiring and cutover readiness | 3 | **Crítico** — Como o graph de produção é construído, validado, reportado e impedido de servir tráfego quando serviços faltam |
| [#4642](https://github.com/nearai/ironclaw/issues/4642) | Bug: strict-mode providers null-for-unset-optionals | 1 | **Crítico** — Validação rejeita tool calls de strict-mode providers (OpenAI, Codex, Anthropic, Ollama) |
| [#88](https://github.com/nearai/ironclaw/issues/88) | Security hardening (device pairing, elevated mode, safe bins) | 1 | **P2-P3** — Feature parity com OpenClaw em segurança |
| [#4551](https://github.com/nearai/ironclaw/issues/4551) | Wire ironclaw-reborn Postgres storage config | 1 | Infraestrutura Reborn |
| [#4548](https://github.com/nearai/ironclaw/issues/4548) | Bug: Chat completion duplicate model field (DeepSeek 400) | 1 | Bug de serialização |
| [#4587](https://github.com/nearai/ironclaw/issues/4587) | Bug: Cannot configure Minimax provider | 1 | Config provider |
| [#4585](https://github.com/nearai/ironclaw/issues/4585) | Reborn auth evidence should carry tenant identity | 1 | Multi-tenant |

### Análise das demandas:

**1. Cutover de Produção Reborn (#3026)** — A comunidade está focada em garantir que o Reborn possa operar em produção de forma segura. A Epic de #3026 está sendo desmembrada em slices menores ([#4617](https://github.com/nearai/ironclaw/issues/4617), [#4618](https://github.com/nearai/ironclaw/issues/4618), [#4619](https://github.com/nearai/ironclaw/issues/4619), [#4620](https://github.com/nearai/ironclaw/issues/4620), [#4621](https://github.com/nearai/ironclaw/issues/4621)), todas com prioridade para garantir "fail-closed" antes de servir tráfego.

**2. Segurança e Strict-Mode (#4642)** — Bug que afeta "a maioria das ferramentas first-party" quando usadas com providers strict-mode. A correção em ([#4643](https://github.com/nearai/ironclaw/pull/4643)) já está aberta.

---

## 5. Bugs e Estabilidade

### Bugs reportados/ativos hoje:

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **P0-Critical** | [#4642](https://github.com/nearai/ironclaw/issues/4642) | Strict-mode providers' null-for-unset-optionals rejeitados por capability-port validation | Afeta maioria das first-party tools |
| **P1-Alta** | [#4548](https://github.com/nearai/ironclaw/issues/4548) | DeepSeek 400: duplicate top-level `model` field quando tools incluídas | Bloqueia DeepSeek com tools |
| **P1-Alta** | [#4587](https://github.com/nearai/ironclaw/issues/4587) | Não é possível configurar provider Minimax | Blocked provider |
| **P2-Média** | [#4640](https://github.com/nearai/ironclaw/issues/4640) | google-calendar `list_events` retorna eventos mais antigos, não upcoming | UX incorreto |
| **P2-Média** | [#3750](https://github.com/nearai/ironclaw/issues/3750) | Bedrock ignorava model config (DB/TOML) e usava Titan default | Config ignorado |
| **P2-Média** | [#3751](https://github.com/nearai/ironclaw/issues/3751) | Embeddings: honor config precedence, validate provider, enforce batch limits | Embeddings quebrado |

### Bugs corrigidos (PRs merged):
- [#4643](https://github.com/nearai/ironclaw/pull/4643) — Strip strict-mode unset-optional placeholders
- [#4641](https://github.com/nearai/ironclaw/pull/4641) — Default calendar list_events para upcoming events
- [#4650](https://github.com/nearai/ironclaw/pull/4650) — Drop temperature para modelos que rejeitam (Opus 4.7/4.8, gpt-5.x)
- [#4649](https://github.com/nearai/ironclaw/pull/4649) — Fix embeddings config precedence, provider validation, batch limits
- [#4651](https://github.com/nearai/ironclaw/pull/4651) — Fix Railway start command placeholders

> **Métricas de estabilidade:** 5 bugs críticos/médios corrigidos em 24h. Velocidade de resposta a bugs é **alta**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em destaque:

| Issue/PR | Título | Prioridade | Tema |
|----------|--------|------------|------|
| [#4647](https://github.com/nearai/ironclaw/issues/4647) | **[Reborn] Unified (omni) search** | enhancement | Busca unificada em threads, skills, extensions e memory |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed personal and team agents | suggested_P1 | Slack como surface primário de canal |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | suggested_P1 | Anexos em Reborn (hoje silenciosamente descartados) |
| [#4628](https://github.com/nearai/ironclaw/issues/4628) | Admin-shared tools and skills with per-user auth | suggested_P1 | Multi-tenant: admins provisionam tools/skills compartilhadas |
| [#4629](https://github.com/nearai/ironclaw/issues/4629) | Reborn/Crabshack closeout: delete obsolete legacy paths | risk: high | Cleanup de código legado |
| [#4656](https://github.com/nearai/ironclaw/pull/4656) | WU-C2 durable gate resolution store + capacity counter | Core | Subagent durability para sobreviver a host restarts |

### Sinais de roadmap identificados:

1. **Reborn como produto de produção** — A Epic #3026 e seus slices ([#4617](https://github.com/nearai/ironclaw/issues/4617)–[#4621](https://github.com/nearai/ironclaw/issues/4621)) indicam foco intenso em production readiness para Q2 2026.

2. **WebUI v2 como interface primária** — Issues Epicas de cobertura E2E ([#4632](https://github.com/nearai/ironclaw/issues/4632)), auth parity ([#4609](https://github.com/nearai/ironclaw/issues/4609)), segurança ([#4611](https://github.com/nearai/ironclaw/issues/4611), [#4623](https://github.com/nearai/ironclaw/pull/4623)) apontam para lançamento iminente da beta.

3. **Multi-tenant e canais** — Slack ([#4625](https://github.com/nearai/ironclaw/issues/4625)), admin-shared tools ([#4628](https://github.com/nearai/ironclaw/issues/4628)) e tenant identity ([#4585](https://github.com/nearai/ironclaw/issues/4585)) sugerem foco em cenários enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas:

**1. Configuração de providers é problemática**
- `#4587`: Minimax provider não configura corretamente — erro em leitura de metadata da chave API.
- `#4548`: DeepSeek rejeita requests com tools (400) — impacto direto na usabilidade.

**2. Anexos não funcionam no Reborn**
- `#4644`: Attachments são "silently dropped" no Reborn, mesmo funcionando no stack v1/v2. Usuários não conseguem compartilhar arquivos.

**3. Calendar retorna eventos errados**
- `#4640`: "What are my upcoming meetings?" retorna eventos mais antigos — confusão significativa na UX.

**4. Strict-mode quebras generalizeadas**
- `#4642`: Ferramentas first-party (google-calendar, etc.) param de funcionar com providers strict-mode (OpenAI, Anthropic).

### Cenários de uso detectados:

- **Multi-tenant enterprise**: Precisa de tools/skills compartilhadas por admins ([#4628](https://github.com/nearai/ironclaw/issues/4628)), tenant identity em auth ([#4585](https://github.com/nearai/ironclaw/issues/4585)).
- **Desenvolvimento local**: Necessidade de script simples para rodar Reborn + WebUI ([#4652](https://github.com/nearai/ironclaw/pull/4652)).
- **CI/CD pipelines**: `ironclaw tool setup` precisa de flag `--secret` não-interativo ([#4653](https://github.com/nearai/ironclaw/pull/4653)).

---

## 8. Backlog que Merece Atenção

### Issues antigas sem movimento recente ou sem resposta:

| Issue | Título | Criada | Status | Prioridade |
|-------|--------|--------|--------|------------|
| [#88](https://github.com/nearai/ironclaw/issues/88) | Security hardening (device pairing, elevated mode) | 2026-02-14 | OPEN | P2-P3 |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | Epic: Reborn production wiring | 2026-04-28 | OPEN | P0-Epic |

### Análise:

**#88 — Security hardening (2 meses sem progresso significativo)**
Esta issue de 14 de fevereiro de 2026 (quase 4 meses) permanece com apenas 1 comentário. O escopo inclui device pairing, elevated mode, safe bins e media URL validation. Dado que #4611 e #4623 estão auditando segurança da WebUI v2, **recomenda-se alinhamento** entre os trabalhos para evitar duplicação de esforço.

**#3026 — Epic de production wiring (40+ dias)**
A Epic principal do Reborn está sendo desmembrada em múltiplas issues menores, todas created/updated em 2026-06-09. O risco é de fragmentação excessiva. **Recomendação**: Designar um owner claro para a Epic e um tracking issue consolidado.

---

## Métricas Consolidada — 2026-06-10

| Métrica | Valor |
|---------|-------|
| Issues ativas | 39 |
| Issues fechadas (24h) | 6 |
| PRs abertos | 24 |
| PRs merged/fechados | 26 |
| Releases | 0 |
| Bugs críticos abertos | 2 |
| Bugs corrigidos (24h) | 5 |
| Features em progresso | 8+ |

**Veredicto de Saúde:** 🟢 **Projeto saudável e em alta atividade.** A taxa de correção de bugs é excelente (5 fixes em 24h), a pipeline de features do Reborn está madura, e a cobertura de testes E2E está sendo construída ativamente. O principal risco é a fragmentação da Epic #3026 e a dívida técnica de security hardening (#88).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-06-10

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** apresenta um nível de atividade muito elevado nas últimas 24h, com **34 issues** e **35 PRs** atualizados, demonstrando uma comunidade altamente engajada. Foi publicada a versão **v1.1.11-beta.2** com melhorias no sistema de controle de browser. A maior parte da atividade está concentrada em **bug fixes** (especialmente relacionados a ferramentas MCP e nomes com caracteres especiais), **melhorias na experiência Desktop** (Windows) e **evolução de funcionalidades** como skills auto-evolutivas e memória de agentes. O suporte a **observabilidade** (Langfuse/OpenTelemetry) e a **migração para AgentScope 2.0** surgem como temas estratégicos de médio prazo.

---

## 2. Lançamentos

### 🆕 v1.1.11-beta.2

**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11-beta.2

| Mudança | Descrição |
|---------|-----------|
| `feat(browser)` | Adicionado suporte a cliques por coordenadas de página em `browser_control` ([@bfglx](https://github.com/agentscope-ai/QwenPaw/pull/4905)) |
| `fix(browser)` | Adicionado parâmetro CDP timeout e isolamento de perfil de browser para cross-browser switching ([@x1n95c](https://github.com/agentscope-ai/QwenPaw/pull/4905)) |

**Notas de Migração:** Nenhuma breaking change identificada nesta versão beta.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Relevantes (24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) | Add OpenSandbox plugin with MCP protocol | Adiciona sandbox de execução segura para ferramentas |
| [#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) | feat(skills): enhanced make-skill flow para self-evolving skill creation | Habilita criação de skills em background com contexto completo |
| [#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) | feat(providers): zero-config free models & one-click OAuth | Simplifica onboarding com modelos gratuitos e autenticação OAuth |
| [#5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) | ci(e2e): complete E2E integration CI pipeline | Pipeline E2E completo com Playwright e cobertura unificada |
| [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) | fix: resolve /compact ignoring model's max_input_length | Corrige bug de compactação de contexto em modelos com janela maior |
| [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) | fix: resolve session filename duplication and Desktop inter-agent failures | Corrige overflow de path no Windows e falhas em chamadas inter-agentes |
| [#5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) | fix: change system theme toggle icon from computer to sun | Melhoria de UX no toggle de tema |
| [#5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) | fix(agent): await unawaited coroutine in _broadcast_to_subscribers | Corrige bug de concorrência em broadcast de mensagens |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues com Maior Engajamento

| # | Issue | Comentários | Tipo | Análise |
|---|-------|-------------|------|---------|
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | Sugestão: acompanhar Hermes Agent e integrar "learning loop" | 10 | Enhancement | **Demanda estratégica alta.** A comunidade solicita que o QwenPaw adote capacidades de aprendizado automático de agentes (como o Hermes Agent com 46k+ stars). O usuário elogia a localização do projeto mas pede evolução na arquitetura de memória/skills. |
| [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) | Qwen3.7-plus trava ao usar阿里coding plan | 8 | Bug | Usuários enfrentando hangs prolongados com modelos específicos da Alibaba Cloud |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | **[CRÍTICO]** Migrar backend de AgentScope 1.x para 2.0 | 7 | Breaking Change | **Migration planejada.**里程碑 importante com nova arquitetura, APIs e runtime model |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | 记忆系统自进化 (Memory system self-evolution) | 3 + 👍1 | Enhancement | Reforça a demanda por sistemas de memória hierárquicos que evoluam com o uso |
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Suporte a visual model fallback independente | 3 + 👍1 | Enhancement | Permite modelos especializados para visão sem trocar o modelo principal |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) | Roadmap para Langfuse/OpenTelemetry? | 2 | Question | **Sinal de mercado.** Usuários avançados demandam observabilidade e tracing distribuído |

### 🔄 PRs com Maior Atividade

| PR | Título | Status | Relevância |
|----|--------|--------|------------|
| [#5058](https://github.com/agentscope-ai/QwenPaw/pull/5058) | Sprint 2.1–2.2: channel layer + multi-agent management tests | **Aberto** | 60 testes de integração cobrindo canais e multi-agentes |
| [#5033](https://github.com/agentscope-ai/QwenPaw/pull/5033) | Importar agents do AgentHub + A2A enhancements | **Aberto** | Expansão do ecossistema de plugins e integração |
| [#4973](https://github.com/agentscope-ai/QwenPaw/pull/4973) | Unit tests para local_models, providers, tunnel, utils | **Aberto** | 129 novos casos de teste, 1374 linhas |
| [#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) | **[SEGURANÇA]** Restringir file preview ao WORKING_DIR | **Aberto** | Mitigação de path traversal e exposição de arquivos sensíveis |

---

## 5. Bugs e Estabilidade

### 🔴 Severidade Alta (Impacto em Produção)

| Bug | Link | Descrição | Status |
|-----|------|-----------|--------|
| Sessão文件名重复拼接导致Windows路径超限 | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | `PathTooLongException` no Windows por session ID duplicado no filename | **Aberto** — Fix em [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) |
| 本地部署Qwen3.6-27B模型对话无响应 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 模型正常工作但对话页面一直"三个点"加载; regressão desde v1.1.5 | **Aberto** |
| Windows desktop前端加载不流畅，CPU激增 | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) | UI freezes durante execução de tarefas, consumo excessivo de CPU | **Aberto** |
| 流式输出时整个电脑卡顿 | [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) | Streaming responses causam lag sistêmico no cliente (não no servidor) | **Fechado** |

### 🟡 Severidade Média (Funcionalidade Afetada)

| Bug | Link | Padrão |
|-----|------|--------|
| MCP工具名含"."导致GPT-5.5报错 | [#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918) + [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045) | Ferramentas MCP com pontos violam regex `^[a-zA-Z0-9_-]+$` da OpenAI API |
| KimiCode API raciocínio não exibido | [#5013](https://github.com/agentscope-ai/QwenPaw/issues/5013) | Thinking content ausente mesmo com resposta bem-sucedida |
| DeepSeek respostas折叠到思考过程 | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | Respostas colapsadas incorretamente no bloco de reasoning |
| Tauri desktop外部链接无法打开 | [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) | Links externos e downloads bloqueados na versão desktop |

### 🟢 Severidade Baixa / Já Corrigidos

| Bug | Link | Fix |
|-----|------|-----|
| OneBot监听未释放端口 após reload | [#4926](https://github.com/agentscope-ai/QwenPaw/issues/4926) | Arquitetura de graceful shutdown do ChannelManager |
| Console build失败: monaco-editor types | [#4700](https://github.com/agentscope-ai/QwenPaw/issues/4700) | Dependencies type declarations |

---

## 6. Pedidos de Features e Sinais de Roadmap

### 📋 Features Solicitadas com Maior Prioridade

| Feature | Link | 👍 | Descrição |
|---------|------|-----|-----------|
| **Hermes Agent Learning Loop** | [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | 3 | Agent capaz de criar e iterar skills automaticamente a partir de comportamentos |
| **Sistema de Memória Auto-Evolutivo** | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | 1 | Memória hierárquica que evolui com o uso (absorver frameworks的主流) |
| **Visual Model Fallback Independente** | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | 1 | Modelo de visão separado para quando o modelo principal não suporta multimodalidade |
| **OpenSandbox Integration** | [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) ✅ | — | Sandbox isolado para execução de código shell/非信任 |
| **Melhoria no Gerenciamento de Sessões** | [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 0 | Barra lateral de sessões para troca direta sem múltiplos cliques |

### 🔮 Sinais de Roadmap Identificados

1. **Observabilidade:** Demanda clara por Langfuse, OpenTelemetry e métricas de tracing ([#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009))
2. **Migração AgentScope 2.0:** Breaking change planejado para backend ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727))
3. **Free Models Zero-Config:** PR [#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) implementa autenticação OAuth one-click
4. **Auto-Updater Desktop:** PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) adiciona tauri-plugin-updater

---

## 7. Resumo de Feedback dos Usuários

### ✅ Feedback Positivo

- **Localização:** Usuários chineses elogiam a excelente adaptação ao mercado local ([#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017))
- **Zero-barreira:** Configuração clara e experiência "out-of-the-box" recomendada

### ⚠️ Dores Críticas Reportadas

| Dor | Impacto | Links |
|-----|---------|-------|
| **Performance Desktop Windows** | Sessões de uso pesado causam CPU spikes e UI freezes | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015), [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) |
| **Compatibilidade com Modelos Locais** | Modelos vLLM com protocolos OpenAI estándar apresentam regressões | [#4989](https://github.com/

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-10

## 1. Panorama do Dia

ZeroClaw mantém alta atividade com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando intensa movimentação comunitária. Das issues recentes, destacam-se debates técnicos substanciais sobre arquitetura de providers, segurança de ferramentas e refinamento de canais de comunicação. Apenas **1 PR foi fechado/merged** hoje (runtime pricing fix), sugerindo que a maioria das contributions está em fase de revisão ou desenvolvimento ativo. Nenhuma release foi publicada, sinalizando foco em estabilização antes do próximo release. A distribuição de prioridades (muitos P1/P2) indica pressão por correções críticas, especialmente em runtime, cron jobs e integrações de canais.

---

## 2. Lançamentos

**Nenhum novo release publicado nas últimas 24h.**

O projeto continua em ciclo de desenvolvimento ativo com a beta v0.8.0. Observa-se que múltiplas PRs de tamanho XL estão em revisão (integrações de canais SMS/social, dashboard tabs, etc.), sugerindo que a próxima release pode ser substancial.

---

## 3. Progresso do Projeto

### PR Closed/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425) | fix(runtime): resolve channel pricing via bare-type fallback in cost lookup | **Crítico** — Corrigia bug onde custo de canais era registrado como $0, desabilitando enforcement de budget diário |

### PRs Abertas de Destaque

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | feat(rfc-6969): per-turn output routing + voice delivery fixes | XL | High | Aberto |
| [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) | feat(tools): integrations batch — Home Assistant, Philips Hue, 8Sleep, Spotify, Sonos | XL | Medium | Aberto |
| [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270) | feat(channels): add Mastodon, Rocket.Chat, Zulip & Lemmy polling channels | XL | Medium | Aberto |
| [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) | feat(channels): add Twilio, Plivo, Telnyx, Sinch & Vonage SMS channels | XL | Medium | Aberto |
| [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) | feat(web): MCP, Skills, Plugins & Providers dashboard tabs | XL | High | Aberto |
| [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) | feat(gateway): route inbound webhooks per channel alias | L | High | Aberto |

**Avanço Principal:** A correção de pricing (#7425) resolve um bug de longa data que impactava accounting e budget enforcement.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** — "zeroclaw does not know it can add cron" — **12 comentários**
   - **Demanda:** Agente não reconhece capacidade de usar `zeroclaw cron`
   - **Status:** `blocked`, `needs-author-action`
   - **Análise:** Problema de awareness tool que afeta UX de automação

2. **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — "Unify providers architecture and reqwest client management" — **10 comentários**
   - **Demanda:** Refatoração para eliminar duplicação de código em providers
   - **Status:** `accepted`
   - **Análise:** Discussão arquitetural significativa; indica dívida técnica reconhecida

3. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** — "Discord Bot respond only in specific Discord channels" — **7 comentários**
   - **Demanda:** Adicionar `allowed_channels` para Discord, espelhando `allowed_rooms` de outros canais
   - **Status:** `accepted`
   - **Análise:** Feature parity request; popular entre operadores com múltiplos servidores

4. **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** — "Too much emphasis on memory" — **6 comentários**
   - **Demanda:** Ajustar system prompt para priorizar contexto atual sobre memórias
   - **Status:** `accepted`
   - **Análise:** Crítica à qualidade de respostas em cron jobs; impacto direto na utilidade

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Workflow Bloqueado)

| Issue | Título | Canal/Componente | Discussões |
|-------|--------|------------------|------------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Too much emphasis on memory | memory | 6 comments |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | User message loss in single/multi-turn | runtime/daemon | 5 comments |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | web_search_tool and web_fetch not firing via Telegram | channel:telegram | 3 comments |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | risk_profile.allowed_tools does not restrict MCP tools | tool:mcp | 3 comments |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | process-memory limits on shell/skill_tool subprocess | tool:shell | 3 comments |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | extract require_auth from per-handler to route-layer | gateway | 2 comments |
| [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback breaks dashboard JSON.parse | gateway | 2 comments |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron jobs launched repeatedly while still running | cron | 1 comment (in-progress) |
| [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | Two independent SopEngine instances per daemon (MQTT) | channel:mqtt | 1 comment |

### Bugs P2 (Degradados — Comportamento Afetado)

| Issue | Título | Severidade |
|-------|--------|------------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw doesn't know it can add cron | S3 |
| [#7439](https://github.com/zeroclaw-labs/zeroclaw/issues/7439) | Custom provider results in Doctor error | S1 |
| [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-Compatible ignores `reasoning` field | S2 |
| [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) | zerocode Dashboard hides error states | S2 |
| [#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) | zerocode dark themes inherit unreadable text | S2 |
| [#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) | zerocode treats Cmd-C as quit chord on macOS | S3 |
| [#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400) | zerocode locale selection does nothing until restart | S3 |
| [#7253](https://github.com/zeroclaw-labs/zeroclaw/issues/7253) | Web console Config: Couldn't load sections | S3 |

**Análise de Estabilidade:** O projeto apresenta **9 bugs P1 ativos**, com destaque para:
- Problemas de **cron job** (#6037, #5862) afetando automação可靠
- **Perda de mensagens** (#6034) e ferramentas não disparando (#6646) em canais
- Questões de **segurança** em tools shell/MCP (#6876, #6916)
- Bugs no **dashboard/web** (#6862, #7253) afetando UX

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| Issue | Título | Tags | Status |
|-------|--------|------|--------|
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | RFC: Structured Observability Enhancement (OTel, Rich Events) | observability, runtime, rfc | `in-progress` |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | RFC: Unify three agent turn engines | agent, architecture, rfc | Aberto |
| [#7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) | Read webhook signing secrets from AppState.config at handler time | gateway, security, webhook | Aberto |
| [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) | Persist cached input tokens in cost accounting | observability, provider | Aberto |
| [#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117) | Config UX parity across CLI, Quickstart, zerocode, web | config, gateway, web | Aberto |
| [#7356](https://github.com/zeroclaw-labs/zeroclaw/issues/7356) | Add pause/disable button to Scheduled Tasks | cron, web | `in-progress` |

### Sinais de Roadmap Identificados

1. **Expansão de Canais:** SMS (Twilio, Plivo, etc.), Mastodon, Rocket.Chat, Zulip, Lemmy — evidencia estratégia de cobertura multi-plataforma
2. **Integração com Smart Home:** Home Assistant, Philips Hue, Spotify, Sonos — indica push para IoT/home automation
3. **Observabilidade:** RFC #7232 com OTel e eventos ricos sugere maturidade enterprise
4. **Refatoração Arquitetural:** Unificação de turn engines (#7415) e providers (#5937) indica limpeza técnica antes de features maiores
5. **Segurança Avançada:** Permissões por skill, limites de memória por processo, honor de action-scope em Composio

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Issues Relacionadas |
|-----------|-----------|---------------------|
| **Automação de Cron** | Usuários não conseguem configurar tarefas agendadas; agente não reconhece capacidade | #5862, #6037 |
| **Confiabilidade de Canais** | Perda de mensagens, ferramentas não disparando, especialmente em Telegram e MQTT | #6034, #6646, #6687 |
| **Qualidade de Respostas** | Sistema dá peso excessivo a memórias, afetando respostas em contextos novos | #5844 |
| **Dashboard/UX Web** | Erros de JSON parsing, estados de erro ocultados, problemas de theming | #6862, #7253, #7376, #7377, #7378 |
| **Security Concerns** | Permissions globais para scripts/commands, MCP tools não restritos, memory unbounded | #5775, #6876, #6916 |
| **Providers** | Custom providers funcionam mas Doctor mostra erros; provider architecture fragmentada | #7439, #5937 |

### Cenários de Uso Emergentes

- **Multi-instância de canais:** Operadores rodando whatsapp.work + whatsapp.personal simultaneamente
- **Deploy com budget:** Necessidade de tracking preciso de custos por agente/canal (agora corrigido com #7425)
- **Custom providers locais:** LLMs via LM Studio, vLLM, Ollama gaining traction
- **macOS TUI:** zerocode ganhando adoção mas com bugs de input handling

### Indicadores de Satisfação/Insatisfação

- **Positivo:** Ativa contribuição de novos canais e integrações sugere valor percebido na plataforma
- **Negativo:** 9 bugs P1 e issues de longa data (e.g., cron desde April) indicam velocidade de resolução pode melhorar
- **Neutro:** Discussão arquitetural intensa (#5937, #7415) reflete comunidade engajada mas pode indicar technical debt

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Criado | Atualizado | Status | Prioridade |
|-------|--------|--------|------------|--------|------------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from `.well-known` URI | 2026-03-27 | 2026-06-09 | `accepted` | P2 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | per-skill security permissions | 2026-04-15 | 2026-06-09 | `blocked` | P2 |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) | Track: extra_args validation for Codex CLI | 2026-04-17 | 2026-06-09 | `accepted` | P2 |
| [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | Honor action-scope filter in Composio | 2026-05-25 | 2026-06-09 | `blocked` | P2 |

### Recomendações de Priorização

1. **#6037 (Cron jobs repetidos)** — Bug de longa data, potencialmente causa execuções redundantes custosas
2. **#6034 (Perda de mensagens)** — Impacta experiência básica de chat
3. **#5862 (zeroclaw cron awareness)** — Mesmo tema, precisa repro do autor
4. **#7415 (Unificar turn engines)** — RFC draft com sponsor de maintainer; resolução desbloqueia outras correções
5. **#4853 (Skills .well-known)** — Padrão emerging (Cloudflare, Vercel); cedo = vantagem competitiva

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 50 (49 abertas, 1 fechada) |
| PRs ativos | 50 (49 abertos, 1 fechado/merged) |
| Novas releases | 0 |
| Bugs P1 ativos | 9 |
| PRs size XL em revisão | 6 |
| Issues awaiting author action | ~8 |
| RFCs em discussão | 2 (#7232, #7415) |

**Saúde Geral:** Projeto em alta atividade com forte pipeline de contributions. Atenção needed em: (1) resolução de bugs P1 pendentes, (2) backlog de security issues, (3) comunicação com autores em issues bloqueadas. A correção de pricing (#7425) demonstra responsiveness da maintainer team.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*