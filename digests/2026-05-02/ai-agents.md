# Resumo diário do ecossistema de agentes de IA 2026-05-02

> Issues: 7 | PRs: 23 | Projetos cobertos: 7 | Gerado em: 2026-05-01 20:45 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-02

---

## 1. Panorama do Dia

O projeto NullClaw demonstra **saúde operacional elevada** nesta atualização de 24h, com 23 PRs processados e 7 issues gerenciadas. A atividade concentra-se em **infraestrutura de roteamento de mensagens** (inbound_router), refinamentos de segurança (anti-spoofing, E2EE) e ergonomia do developer (flags --workspace/--skill, tool customization). Não houve lançamentos formais, indicando fase de consolidação antes de tag de release. O mantenedor principal **manelsen** domina o fluxo de merges, respondendo por ~80% das contribuciones fechadas hoje. A comunidade demonstra maturidade ao reportar issues detalhadas com steps de reprodução.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em ciclo de integração intensiva. PRs recentes (#845 inbound router, #838 Matrix E2EE proxy, #880 anti-spoofing) indicam preparação para release soon, potencialmente incluindo breaking changes na arquitetura de roteamento.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (14 total)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#845** | inbound router and mid-turn injection infrastructure | Core: introduce pure routing core `src/inbound_router.zig` para concurrent/non-blocking interactivity | [PR #845](https://github.com/nullclaw/nullclaw/pull/845) |
| **#844** | forward skill tool-call progress hints to A2A stream | Permite UI observar tool invocations in-progress sem polling | [PR #844](https://github.com/nullclaw/nullclaw/pull/844) |
| **#842** | add --workspace flag | Suporte multi-workspace — overrides `workspace_dir` via CLI | [PR #842](https://github.com/nullclaw/nullclaw/pull/842) |
| **#843** | clear actionable message when KeyWriteFailed | **Fix crítico**: crash silencioso na step 8 do onboard Docker | [PR #843](https://github.com/nullclaw/nullclaw/pull/843) |
| **#841** | add --skill flag | Ativa skill específico via CLI sem token similarity routing | [PR #841](https://github.com/nullclaw/nullclaw/pull/841) |
| **#840** | support nested skill discovery | Permite categoria/subdiretórios em `skills/` | [PR #840](https://github.com/nullclaw/nullclaw/pull/840) |
| **#838** | add pantalaimon E2EE proxy support | Channel Matrix com E2EE via proxy — resolve #209 | [PR #838](https://github.com/nullclaw/nullclaw/pull/838) |
| **#837** | support external tool_customizations_file | Carregamento híbrido JSON para tool customization | [PR #837](https://github.com/nullclaw/nullclaw/pull/837) |
| **#836** | trigger-based tool prioritization | Inject priority hints baseado em keywords detectados | [PR #836](https://github.com/nullclaw/nullclaw/pull/836) |
| **#835** | implement system_prompt and enabled overrides | Desabilitar tools específicos via config | [PR #835](https://github.com/nullclaw/nullclaw/pull/835) |
| **#834** | add tool customization config schema | Schema base para `ToolCustomization` struct | [PR #834](https://github.com/nullclaw/nullclaw/pull/834) |
| **#831** | support Agent Skills RFC 0.2.0 | Discovery via `/.well-known/agent-skills/index.json` com digest verification | [PR #831](https://github.com/nullclaw/nullclaw/pull/831) |
| **#789** | Fix gateway bind and rate limit safeguards | Hardening de segurança: enforce public-bind safety, rate limiting por route+client | [PR #789](https://github.com/nullclaw/nullclaw/pull/789) |
| **#712** | Knowledge Graph Memory backend | Nova store KG com SQLite recursive CTEs para entity-relation traversal | [PR #712](https://github.com/nullclaw/nullclaw/pull/712) |

**Destaque estratégico**: A infraestrutura de inbound routing (#845, #832) representa a mudança arquitetural mais significativa, habilitando **concurrency e turn preemption** — resposta direta a limitações de processamento serial.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| # | Título | Status | Engajamento | Análise |
|---|--------|--------|-------------|---------|
| **#879** | cron: support command + prompt together | **OPEN** | 0 comments, 0 👍 | Feature request legítimo: pipeline shell→agent summarization. Sinergiza com inbound router. |
| **#763** | docker agent onboard interactive issue step 8 | CLOSED | 1 comment | Bug com steps de reprodução claros, fixado em #843 |
| **#833** | How to support multi-workspace? | CLOSED | 0 comments, 1 👍 | Implementado em #842 — community request fulfilled |
| **#825** | Support nested Agent skills | CLOSED | 0 comments | Implementado em #840 |

**Padrão identificado**: Usuários pedem flexibilidade de workspace e organization de skills — ambos endereçados. Issue #879 (cron pipeline) permanece aberta e representa demanda de automação legítima.

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos

| # | Severidade | Título | Status | Link |
|---|------------|--------|--------|------|
| **#763** | **Alta** | docker agent onboard KeyWriteFailed step 8 | **RESOLVIDO** | [Issue #763](https://github.com/nullclaw/nullclaw/issues/763) |
| **#849** (referenciado em #854) | **Média** | subagent completions routing to wrong context | **RESOLVIDO** | [PR #854](https://github.com/nullclaw/nullclaw/pull/854) |
| **#832** (referenciado em #855) | **Média** | serial processing bottleneck | **RESOLVIDO** | [PR #855](https://github.com/nullclaw/nullclaw/pull/855) |
| **#851** (referenciado em #853) | **Baixa** | gateway CPU spin on accept errors | **RESOLVIDO** | [PR #853](https://github.com/nullclaw/nullclaw/pull/853) |

**Análise de Stability**: O ecossistema demonstra **cycle de bug closing responsivo** — bugs críticos (Docker crash #763) têm fix mergeado no mesmo dia. A adição de backoff no accept loop (#853) indica hardening proativo.

**Métricas de Confiabilidade**:
- Bug fix rate: 6 closed issues / 1 open issue (86% closed)
- PRs fechadas sem regressão visível em comments

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aprovadas/Em Desenvolvimento

| # | Título | Sinais de Prioridade | Link |
|---|--------|---------------------|------|
| **#879** | cron: command + prompt together | **OPEN** — padrão shell-to-agent pipeline | [Issue #879](https://github.com/nullclaw/nullclaw/issues/879) |
| **#880** | anti-spoofing boundaries on web_fetch/web_search | **OPEN** — segurança de output | [PR #880](https://github.com/nullclaw/nullclaw/pull/880) |
| **#850** | encrypted tailscale auth_key | **OPEN** — tunelamento seguro | [PR #850](https://github.com/nullclaw/nullclaw/pull/850) |

### Sinais de Roadmap Identificados

1. **Concurrency Architecture** (#832 → #855): Inbound concurrency e turn preemption indicam foco em escalabilidade multi-usuário
2. **Tool Customization** (#834, #835, #836, #837): Sistema completo de override de tools sugere preparação para marketplace de skills
3. **Knowledge Graph Memory** (#712): Expansão de storage/backend para memória persistente
4. **E2EE Channels** (#209 → #838): Matrix E2EE via pantalaimon proxy demonstra demanda por privacidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Resolução |
|-----|-----------|-----------|
| **Crash Docker onboard** | #763: "KeyWriteFailed" após definir workspace | Fix #843: validação de permissão de escrita |
| **Multi-workspace** | #833: request por `--workspace` flag | Implementado em #842 |
| **Skills flat** | #825: necessidade de categorization | Implementado em #840 |
| **E2EE em Matrix** | #209: phone numbers vs privacy | Proxy pantalaimon em #838 |
| **Tool routing inflexível** | #580: routing hard-coded por token similarity | Flag `--skill` em #841 |
| **Progress visibility** | #808: UI precisa de progress hints | Forwarding A2A em #844 |

### Cenários de Uso Emergentes

1. **Containerized Development**: Usuários rodam em Docker e esperam que workspace paths funcionem
2. **Pipeline Automation**: Cron jobs com output de shell → LLM summarization (pattern #879)
3. **Enterprise Security**: Tailscale + auth_key encryption (#850), Matrix E2EE (#838)
4. **Custom Tool Ecosystems**: Tool customization file (#837) indica uso em ambientes corporatifs

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Resposta

| # | Título | Tempo Aberto | Prioridade | Link |
|---|--------|--------------|------------|------|
| **#879** | cron: support command + prompt together | <1 dia | **Alta** — padrão de uso legítimo | [Issue #879](https://github.com/nullclaw/nullclaw/issues/879) |

### PRs Abertas Pendentes de Review

| # | Título | Impacto | Status Review | Link |
|---|--------|---------|---------------|------|
| **#880** | anti-spoofing boundaries | **Crítico para segurança** | Review pendente | [PR #880](https://github.com/nullclaw/nullclaw/pull/880) |
| **#855** | inbound concurrency + turn preemption | **Arquitetural** | Review pendente | [PR #855](https://github.com/nullclaw/nullclaw/pull/855) |
| **#850** | tailscale encrypted auth_key | **Túnel seguro** | Review pendente | [PR #850](https://github.com/nullclaw/nullclaw/pull/850) |

**Recomendação**: Priorizar review de #880 (anti-spoofing) — impacto direto em segurança de output. PRs de infraestrutura (#855, #850) parecem prontas para merge após verificação de CI.

---

## Métricas Síntese

| Indicador | Valor | Avaliação |
|-----------|-------|----------|
| Issue close rate (24h) | 6/7 (86%) | ✅ Excelente |
| PR merge rate (24h) | 14/23 (61%) | ✅ Saúde |
| Bugs críticos abertos | 0 | ✅ Estável |
| Features requests atendidas | 7 | ✅ Progresso consistente |
| Tempo médio de resposta | <24h | ✅ Responsivo |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-02. Para informações detalhadas, consultar [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Análise:** 2026-05-02  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** nesta semana. Projetos como NullClaw, NanoBot e IronClaw demonstram consolidação arquitetural com foco em estabilidade e hardening, enquanto Hermes Agent e ZeroClaw mantêm volumes elevados de issues abertas (45 e 25+ respectivamente) sugerindo ciclos de desenvolvimento ainda em estabilização. A **segurança emerge como tema transversal**: todos os projetos implementam aprimoramentos de sandbox, autenticação E2EE e proteção contra prompt injection. O mercado sinaliza demanda crescente por **orquestração multi-agente**, **persisitência de sessão cross-platform** e **integração empresarial** (OAuth, Tailscale, Matrix E2EE).

---

## 2. Comparação de Atividade

| Projeto | Issues (ativas/fechadas 24h) | PRs (abertos/merged 24h) | Releases | Saúde | Destaque Negativo |
|---------|------------------------------|---------------------------|---------|-------|-------------------|
| **NullClaw** | 7/6 | 23/14 | 0 | ✅ Excelente | 80% dependência de mantenedor único |
| **NanoBot** | 9/~8 | 32/24 | 0 | ✅ Boa | 2 bugs críticos resolvidos (tiktoken, streaming) |
| **Hermes Agent** | 45/5 | 50/12 | 0 | ⚠️ Tensão | 10+ issues P1/P2 abertas |
| **PicoClaw** | ~10 | 25/11 | 1 nightly | 🔴 Regressão | 3 bugs críticos na v0.2.8 |
| **IronClaw** | 25/~18 | 50/18 | 0 | ✅ Boa | Installer quebrado em Linux (P1) |
| **CoPaw** | 7/0 | 3/1 | 0 | ⚠️ Baixa atividade | Bug crítico de paralisação do agente |
| **ZeroClaw** | 25+/~20 | 50/~9 | v0.7.4 | ⚠️ Bugs P1 | 5+ bugs P1 em shell/skills |

**Observação:** PicoClaw é o único projeto com release recente, porém marcada como instável. Hermes Agent e ZeroClaw lideram em volume de atividade mas com saldos negativos de issues abertas.

---

## 3. Posicionamento do Projeto Principal

### Diferenciação Técnica por Projeto

| Projeto | Arquitetura Diferenciadora | Público-Alvo | Vetor Competitivo |
|---------|---------------------------|--------------|-------------------|
| **NullClaw** | Routing core em Zig (`src/inbound_router.zig`), concurrency/preemption nativa | Desenvolvedores avançados, bare-metal | Performance extrema, baixa latência |
| **NanoBot** | Multi-canal (DingTalk, NapCatQQ, Matrix, Discord), SSRF protection | Empresas APAC, multi-plataforma | Suporte a canais obscuros, hardening |
| **Hermes Agent** | Multi-gateway (Telegram, Slack, Discord, Teams), OAuth extensível | Organizações enterprise | Flexibilidade de deployment |
| **PicoClaw** | K3s/Docker multi-arquitetura, Agent Shield | DevOps, containers | Enterprise hardening pronto |
| **IronClaw** | Reborn architecture (capabilities, obligations, secrets wire), WASM runtime | Desenvolvedores de plugins, legal tech | Sandbox isolation, legal harness |
| **CoPaw** | Suporte a provedores emergentes (Volcano Engine), Qwen integration | Mercado chinês, provedores alternativos | Agilidade em novos modelos |
| **ZeroClaw** | Schema v3 migration, cron cross-canal, Canvas store | Automação operacional | Orquestração de tarefas programada |

### Tamanho e Engajamento da Comunidade

| Projeto | Engajamento (comentários/issues quentes) | Contribuidores Externos | Concentração |
|---------|------------------------------------------|------------------------|--------------|
| NullClaw | Moderado (1-2 comentários/issue) | Baixo | ⚠️ 80% manelsen |
| NanoBot | Alto (#2072: 8 comentários) | Moderado | Equilibrado |
| Hermes Agent | Alto (#3347: 6 comentários, #4622: 5) | Alto (abbyshekit) | Equilibrado |
| PicoClaw | Alto (#1757: 6 comentários) | stevef1uk (dominante) | ⚠️ 1 contribuidor |
| IronClaw | Epic #2987: 44 comentários | Alto (abbyshekit) | Equilibrado |
| CoPaw | Baixo (2 comentários máx) | Primeiro contribuidor | Inicial |
| ZeroClaw | Alto (#6123: 15 comentários) | Múltiplos | Equilibrado |

---

## 4. Focos Técnicos Compartilhados

### Temas Transversais (Aparecem em 3+ Projetos)

| Tema | NullClaw | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|------|----------|---------|--------|----------|---------|-------|----------|
| **Segurança E2EE/Matrix** | ✅ | ✅ | ✅ | — | — | — | ✅ |
| **Prompt Injection Protection** | ✅ | — | — | ✅ | ✅ | — | ✅ |
| **Multi-canal (Telegram/Discord)** | — | ✅ | ✅ | ✅ | — | — | ✅ |
| **Tool Customization/Override** | ✅ | — | — | — | — | — | — |
| **Streaming/Long-running** | — | ✅ | — | — | — | ✅ | — |
| **Memory/Session Persistence** | ✅ | — | — | — | ✅ | ✅ | ✅ |
| **Kubernetes/Container** | — | — | — | ✅ | — | — | — |
| **OAuth/Auth Enterprise** | — | — | ✅ | ✅ | — | — | — |

### Bugs Recorrentes Entre Projetos

1. **Memory leaks em WebSocket handlers** — Identificado em ZeroClaw (#5835) e padrão similar em NanoBot (#3551)
2. **Shell sandbox excessivamente restritivo** — Afeta IronClaw e ZeroClaw simultaneamente
3. **OAuth failures com provedores externos** — PicoClaw (#2602), Hermes Agent (#3347)
4. **Permissions/sandbox inconsistência** — Padrão em IronClaw, NullClaw, ZeroClaw

---

## 5. Análise de Diferenciação

### Por Foco de Mercado

```
Enterprise/Segurança                    Hobby/Experimentação
     │                                         │
     ├── PicoClaw (Agent Shield)               ├── CoPaw (primeiros contribuidores)
     ├── IronClaw (legal harness)              └── NanoBot (nichado APAC)
     └── Hermes Agent (multi-gateway)          
                                                  
Mid-Market/Performance                    DevOps/Infraestrutura
     │                                         │
     ├── NullClaw (Zig, baixa latência)        ├── PicoClaw (K3s, multi-arch)
     └── ZeroClaw (cron/orquestração)          └── IronClaw (Docker/K8s)
```

### Diferenças Arquiteturais Significativas

| Aspecto | NullClaw | Hermes Agent | IronClaw |
|---------|----------|--------------|----------|
| **Linguagem primária** | Zig | Python/Go? | Rust |
| **Runtime model** | Concurrency préemptiva | Goroutine-based? | WASM sandbox |
| **Extensibilidade** | Tool customization JSON | Plugin via entry_points | Capability/Obligation system |
| **Deployment** | Bare-metal, CLI-first | Gateway multi-interface | Container-native |
| **Roadmap** | Concurrency infrastructure | Multi-agent routing | Reborn GA |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | Velocidade | Estágio | Análise |
|---------|------------|---------|---------|
| **NullClaw** | 🔥 Muito alta | Consolidação pré-release | 14 PRs/24h, foco em integração |
| **NanoBot** | 🔥 Alta | Estabilização | 24 PRs/24h, bugs críticos resolvidos |
| **Hermes Agent** | ⚠️ Moderada | Feature overload | Volume alto mas 86% issues permanece aberto |
| **PicoClaw** | ⚠️ Regressão | Hotfix necessário | Atividade alta, mas regressões bloqueiam |
| **IronClaw** | ✅ Sólida | Arquitetura Reborn | 18 PRs/24h, transição controlada |
| **CoPaw** | 🐢 Inicial | Onboarding | Atividade baixa, primeiro contribuidor |
| **ZeroClaw** | ⚠️ Bugs P1 | Schema v3 migration | 9 PRs/24h, mas P1s bloqueiam |

### Qualidade de Resposta a Bugs

| Projeto | Bug Fix Rate (24h) | P1 Bugs Abertos | Tempo Médio |
|---------|-------------------|-----------------|-------------|
| NullClaw | 86% ✅ | 0 | <24h |
| NanoBot | ~80% ✅ | 0 (críticos resolvidos) | <24h |
| Hermes Agent | 10% ⚠️ | 2+ P1 | Sem SLA visível |
| PicoClaw | N/A 🔴 | 3 críticas (v0.2.8) | Regressão ativa |
| IronClaw | ~70% ✅ | 1 (installer) | PR #3172 pronto |
| CoPaw | 0% ⚠️ | 1 crítica (#3992) | Sem resposta |
| ZeroClaw | ~40% ⚠️ | 5+ P1 | Em progresso |

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas

#### 1. **Enterprise Hardening é Prioridade Absoluta**
*Evidência:* 
- NullClaw: anti-spoofing (#880), E2EE Matrix (#838)
- PicoClaw: Security Shield, Agent Shield, session isolation
- Hermes Agent: `/proc/*/environ` blocking (#4609), OAuth MultiMax (#3347)
- IronClaw: secrets injection, network policies, capability dispatch

**Direção:** O mercado enterprise está adotando agentes de IA, e os projetos respondem com sandboxing, E2EE e compliance features.

#### 2. **Multi-Agente Roteamento Emerge como Feature Crítica**
*Evidência:*
- NanoBot: #2072 com 8 comentários (multi-agent routing nativo)
- Hermes Agent: #9459 com 8 👍 (agent profiles para delegate_task)
- IronClaw: capability-based delegation system

**Direção:** A próxima fronteira é orquestração de múltiplos agentes especializados, não apenas multi-canal.

#### 3. **Persistência e Memória Cross-Session**
*Evidência:*
- NanoBot: #2334 persistência de sessão por iteração
- Hermes Agent: #18457 continuidade cross-surface (Terminal↔Telegram↔Discord)
- CoPaw: #3995 gerenciamento de memória com lifecycle e archive
- IronClaw: event store backends (PostgreSQL, libSQL, JSONL)

**Direção:** Agentes estão evoluindo de stateless para stateful, com necessidade de memória persistente e recuperação de sessão.

#### 4. **Automação Cron/Scheduled com Integração LLM**
*Evidência:*
- NullClaw: #879 cron com command + prompt (pipeline shell→agent)
- Hermes Agent: #5712 injeção automática de resultados cron em sessões ativas
- ZeroClaw: #6164 manual cron trigger via webui, #6261 WhatsApp delivery

**Direção:** Agentes não são apenas reativos — a comunidade demanda workflows automatizados com sumarização LLM de outputs shell.

#### 5. **Shell Sandbox: Restrição Excessiva Gera Fricção**
*Evidência:*
- ZeroClaw: 3 issues P1 sobre shell sandbox bloqueando Python realista (#5722)
- IronClaw: "mission email failed" com diagnóstico deficiente

**Direção:** O tradeoff entre segurança e usabilidade está sendo testado. Projetos que equilibrarem melhor (NullClaw's trigger-based prioritization) terão vantagem.

#### 6. **Suporte a Canais Alternativos e Emergentais**
*Evidência:*
- NanoBot: NapCatQQ, DingTalk, Matrix
- CoPaw: Volcano Engine (Feishu ecosystem)
- ZeroClaw: WeChat iLink Bot recovery

**Direção:** Mercado não-anglofônico (especialmente China e APAC) é significativo e não-supervisionado por projetos occidentales.

### Recomendações Estratégicas

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Contribuir para NullClaw (concurrency) ou NanoBot (stability patterns) para aprendizado |
| **Empresas** | Avaliar PicoClaw ou IronClaw para deployment enterprise, mas monitorar regressions |
| **Product Managers** | Priorizar multi-agent routing e session persistence — demanda clara em 4+ projetos |
| **Pesquisadores** | Estudar padrões de shell sandbox em NullClaw vs ZeroClaw — problema aberto |

---

*Relatório gerado em 2026-05-02 | Fonte: Resumos de atividade comunitária dos projetos NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-02

---

## 1. Panorama do dia

O NanoBot registrou **alta atividade** em 02/05/2026, com **32 PRs atualizadas** (24 merged/fechadas) e **9 issues processadas**. A equipe demonstrou foco em **estabilidade** — cinco dos PRs merged são correções de bugs críticos (streaming, tiktoken fallback, autenticação Matrix, SSRF). O projeto segue **sem novas releases**, indicando que as mudanças estão amadurecendo em `main` antes de um próximotag. O throughput de merges é saudável e sugere maturidade operacional do ciclo de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto não emitiu novas tags ou CHANGELOGs desde o período anterior. É recomendável monitorar se o próximo release está próximo ou se há dependência de fatores externos (e.g., testes de regressão, documentação pendente).

> 📌 Acompanhe releases em: [HKUDS/nanobot/releases](https://github.com/HKUDS/nanobot/releases)

---

## 3. Progresso do Projeto

Os PRs mais relevantes **merged/fechados hoje** (24 no total), organizados por impacto:

| PR | Tipo | Descrição | Issue Relacionada |
|----|------|-----------|-------------------|
| [#3569](https://github.com/HKUDS/nanobot/pull/3569) | **Security fix** | Bloqueio de SSRF em fetching de mídia outbound no canal DingTalk | — |
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | Feature | Injeção de `sender_id` no contexto LLM para respostas user-aware | [#3511](https://github.com/HKUDS/nanobot/issues/3511) |
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | Bug fix | Restauração do fallback tiktoken em `estimate_prompt_tokens_chain` | [#3581](https://github.com/HKUDS/nanobot/issues/3581) |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | Bug fix | Auto-fallback para streaming em erro de requisição longa (Anthropic) | [#2709](https://github.com/HKUDS/nanobot/issues/2709) |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | Bug fix | Interrupção do loop sync Matrix em erros auth irrecuperáveis | [#1851](https://github.com/HKUDS/nanobot/issues/1851) |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | Bug fix | Ciclo de vida de stream SSE para requisições tool-backed | [#3551](https://github.com/HKUDS/nanobot/issues/3551) |
| [#2334](https://github.com/HKUDS/nanobot/pull/2334) | Enhancement | Persistência de sessão a cada iteração (evita perda de progresso) | — |
| [#3114](https://github.com/HKUDS/nanobot/pull/3114) | Feature | Adição do provider **LongCat** via backend OpenAI-compatible | — |
| [#2337](https://github.com/HKUDS/nanobot/pull/2337) | Feature | Canal **NapCatQQ** com suporte a grupos e imagens | — |
| [#3577](https://github.com/HKUDS/nanobot/pull/3577) | Bug fix | Strip de tags `` parciais em streaming output | — |
| [#3528](https://github.com/HKUDS/nanobot/pull/3528) | Bug fix | Sanitização de URLs em `web_fetch` (remoção de backticks/markdown) | — |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | Bug fix | Ajuste na detecção do reasoning mode do DeepSeek | [#3554](https://github.com/HKUDS/nanobot/issues/3554) |
| [#3561](https://github.com/HKUDS/nanobot/pull/3561) | Feature | Suporte a `origin_message_id` e deduplicação outbound | — |
| [#3563](https://github.com/HKUDS/nanobot/pull/3563) | Bug fix | Correção de warning Pydantic em `allow_room_mentions` (Matrix) | — |

**Destaque de segurança:** O PR [#3569](https://github.com/HKUDS/nanobot/pull/3569) corrige vulnerabilidade de SSRF no canal DingTalk, impedindo que URLs maliciosas façam o host buscar recursos internos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Reações | Resumo |
|-------|------|-------------|---------|--------|
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) | Feature Request | 8 | 👍 1 | **Native Multi-Agent Routing** — solicitação para implementar roteamento nativo entre múltiplos agentes (similar ao OpenClaw) |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Feature Request | 4 | 0 | **Session-Level Focus Tool** — "task board" persistente para manter foco em tarefa principal durante interrupções |
| [#1851](https://github.com/HKUDS/nanobot/issues/1851) | Bug | 3 | 0 | Matrix auth errors spamavam o servidor a cada 2s — **resolvido em** [#3578](https://github.com/HKUDS/nanobot/pull/3578) |

**Análise:** A comunidade demonstra interesse forte em **arquitetura multi-agente** (#2072, 8 comentários). O pedido de "Session-Level Focus Tool" (#3292) reflete um padrão de uso real: agentes precisam manter contexto de tarefa principal ao lidar com perguntas laterais. Ambos sinalizam demanda por inteligência contextual mais sofisticada.

---

## 5. Bugs e Estabilidade

### Bugs resolvidos hoje (8 issues fechadas)

| Severidade | Issue | Descrição | PR Corretivo |
|------------|-------|-----------|--------------|
| 🔴 **Crítica** | [#3581](https://github.com/HKUDS/nanobot/issues/3581) | `NameError: 'estimated' is not defined` em tiktoken fallback | [#3582](https://github.com/HKUDS/nanobot/pull/3582) |
| 🔴 **Crítica** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) | Erro streaming obrigatório em operações >10min (Anthropic) | [#3579](https://github.com/HKUDS/nanobot/pull/3579) |
| 🟠 **Alta** | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | Stream SSE fechava prematuramente em requisições tool-backed | [#3555](https://github.com/HKUDS/nanobot/pull/3555) |
| 🟠 **Alta** | [#1851](https://github.com/HKUDS/nanobot/issues/1851) | Erros auth Matrix spamavam homeserver infinitamente | [#3578](https://github.com/HKUDS/nanobot/pull/3578) |
| 🟡 **Média** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix lia mensagens antigas no restart | — |
| 🟡 **Média** | [#3571](https://github.com/HKUDS/nanobot/issues/3571) | ReadFileTool reportava "File unchanged" em sessões diferentes | — |
| 🟡 **Média** | [#3511](https://github.com/HKUDS/nanobot/issues/3511) | `sender_id` não chegava ao contexto LLM em grupos | [#3549](https://github.com/HKUDS/nanobot/pull/3549) |
| ⚙️ **Configuração** | [#3563](https://github.com/HKUDS/nanobot/issues/3563) | Warning Pydantic em `allow_room_mentions` default type | [#3563](https://github.com/HKUDS/nanobot/pull/3563) |

**Observação:** Duas issues de bugs médias ([#3553](https://github.com/HKUDS/nanobot/issues/3553), [#3571](https://github.com/HKUDS/nanobot/issues/3571)) foram fechadas sem PR linked visível nos dados — possível que tenham sido corrigidas indiretamente ou aguardem merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em revisão (PRs abertos)

| PR | Feature | Descrição | Potencial Impacto |
|----|---------|-----------|-------------------|
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | **Model Presets** | Bundles nomeados de modelo + parâmetros de geração (`temperature`, `max_tokens`, etc.) para troca rápida | 🔥 Usabilidade |
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) | **MCP Lazy Loading** | Lazy loading e auto-demotion de tools MCP para reduzir overhead de contexto | 🔥 Performance |
| [#3580](https://github.com/HKUDS/nanobot/pull/3580) | **Tool-Loop Guardrails** | Per-turn controller que observa `(tool, args, result)` e bloqueia loops runaway (40+ retries) | 🔥 Estabilidade |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | **HookCenter Plugin System** | Sistema de hooks tipado via `entry_points` para plugin externo | 🔥 Extensibilidade |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | **Feishu Sender Identity** | Bloco `[FEISHU-CONTEXT]` com nome, `open_id`, `user_id` para identificar usuários em grupos | 🔥 Multi-tenancy |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **Session-Level Focus Tool** | Task board persistente para manter foco em tarefa principal (issue aberta) | 🔮 Roadmap |

**Sinais de roadmap:**
- **Performance/eficiência**: lazy loading de MCP (#1759), tool-loop guardrails (#3580)
- **Extensibilidade**: plugin system (#3564), model presets (#3358)
- **UX em grupo**: sender identity em múltiplos canais (Feishu #3552, Discord #3549)
- **Arquitetura avançada**: multi-agent routing (#2072), session focus (#3292)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Cenário | Frequência |
|-----|---------|------------|
| **Loops infinitos de tools** | Modelos pequenos ou locais repetem tool calls falhantes até `max_iterations` | 🔴 Comum |
| **Perda de contexto em grupos** | Em Discord/Feishu com múltiplos usuários, o bot não identifica quem fala | 🟠 Relevante |
| **Spam de erros Matrix** | Erros de auth Matrix geravam loops infinitos de spam ao homeserver | 🟠 Era crítico (resolvido) |
| **Progresso perdido em crashes** | Agent crashava no meio de execução, perdendo toda a progressão | 🟡 Frustrante (resolvido em #2334) |
| **Overhead de contexto MCP** | Tools MCP adicionavam contexto excessivo, degradando performance | 🟡 Relevante |
| **Streams SSE prematuros** | Requisições com tools fechavam stream antes do resultado final | 🟡 Ocasional |

### Cenários de uso emergentes
- **Multi-usuário em grupo**: Discord, Feishu, QQ — compartilhamento de sessão entre múltiplos membros
- **Multi-agente**: Necessidade de orquestrar múltiplos bots/nanobot instances
- **Operações longas**: Requisições >10min com Anthropic (agora tratadas com auto-streaming)

### Satisfação
A comunidade demonstra **engajamento ativo** (8+ comentários em feature requests) e o projeto responde rapidamente a bugs críticos (<24h). A ausência de releases no dia pode ser interpretada como cautela em qualidade — a maioria dos PRs merged parece ter passado por review rigoroso antes do merge.

---

## 8. Backlog que Merece Atenção

### Issues abertas há >7 dias sem resposta

| Issue | Idade | Prioridade | Resumo |
|-------|-------|------------|--------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 13 dias | 🔥 Alta | Session-Level Focus Tool — 4 comentários, aguardando triagem |
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) | 47 dias | 🔥 Alta | Multi-Agent Routing feature request — 8 comentários, **já fechada** |

> **Nota:** #2072 foi fechada hoje (2026-05-01), mas com resolução "won't do" ou pendente de implementação? O relatório indica `[CLOSED]` mas não há PR linked. Recomenda-se verificar se a decisão foi comunicada à comunidade.

### PRs abertos há >7 dias sem merge

| PR | Idade | Prioridade | Resumo |
|----|-------|------------|--------|
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | 11 dias | 🔥 Alta | Model Presets — feature de usabilidade |
| [#1759](https://github.com/HKUDS/nanobot/pull/1759) | 54 dias | 🟠 Média | MCP Lazy Loading — performance crítica |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | 2 dias | 🟠 Média | HookCenter Plugin System — extensibilidade |

### Recomendações
1. **Priorizar triagem** de #3292 (Session-Level Focus Tool) — 4 comentários indicam demanda real
2. **Revisar PRs staled**: #1759 com 54 dias precisa de review ou feedback para o autor
3. **Comunicação de roadmap**: #2072 fechada sem PR — comunicar decisão à comunidade para evitar duplicação de esforços

---

**Links rápidos:**
- Repositório: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- Issues: [github.com/HKUDS/nanobot/issues](https://github.com/HKUDS/nanobot/issues)
- PRs: [github.com/HKUDS/nanobot/pulls](https://github.com/HKUDS/nanobot/pulls)
- Releases:

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-02

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um ritmo de atividade intenso em 02 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A base de issues permanece com saldo positivo de 45 abertas contra apenas 5 fechadas, enquanto 12 PRs foram merged/fechados, indicando que a equipe de desenvolvimento continua processando o backlog de contribuições de forma consistente. Não houve lançamentos de novas versões no período, e a maioria das atividades concentra-se em correções de bugs P1-P2 e adição de funcionalidades solicitadas pela comunidade. O volume de issues ativas (45) e PRs abertos (38) sinaliza uma pipeline saudável de desenvolvimento, embora demande atenção da equipe para priorização de correções críticas.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões entre 2026-05-01 e 2026-05-02. Recomenda-se monitorar os PRs abertos para identificar quando as correções pendentes (especialmente as de severidade P1) serão incluídas em uma próxima versão.

---

## 3. Progresso do Projeto

O período registrou 12 PRs merged/fechados, com destaque para contribuições que abordam problemas críticos e melhorias solicitadas pela comunidade:

### PRs Fechados/Merged Relevantes

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#18341](https://github.com/NousResearch/hermes-agent/pull/18341) | Bug/P1 | Propaga `explicit_api_key` para `_try_openrouter()` — corrige falha de autenticação com provedores OpenRouter explícitos | **Crítico** |
| [#18513](https://github.com/NousResearch/hermes-agent/issues/18513) | Bug/P2 | Gateway agora alerta e degrada em conflitos repetidos de polling Telegram | **Estabilidade** |
| [#18198](https://github.com/NousResearch/hermes-agent/pull/18198) | Bug/P2 | Melhorias completas de mensageria efêmera no Slack — slash commands, notices privadas, formatação | **UX Slack** |
| [#9340](https://github.com/NousResearch/hermes-agent/pull/9340) | Feature/P3 | Suporte a entrega de notices privadas no Slack | **UX Slack** |
| [#18516](https://github.com/NousResearch/hermes-agent/issues/18516) | Feature/P3 | Gateway suporta resets automáticos de freshness de sessão | **Autonomia** |

### PRs Abertos com Alto Impacto Potencial

| PR | Tipo | Descrição | Status |
|----|------|-----------|--------|
| [#4609](https://github.com/NousResearch/hermes-agent/pull/4609) | Security/P1 | Bloqueia leitura de `/proc/*/environ`, `cmdline`, `maps` — **prevenção de vazamento de segredos** | Aberto |
| [#4617](https://github.com/NousResearch/hermes-agent/pull/4617) | Bug/P2 | Adiciona `/v1` a URLs base de provedores OpenAI-compatíveis customizados | Aberto |
| [#4618](https://github.com/NousResearch/hermes-agent/pull/4618) | Bug/P2 | Normaliza URLs base para incluir sufixo `/v1` em endpoints OpenAI-compatíveis | Aberto |
| [#13372](https://github.com/NousResearch/hermes-agent/pull/13372) | Perf/P2 | Evita spin de CPU em `session_search` com match denso — supersede de PR fechado | Aberto |
| [#18500](https://github.com/NousResearch/hermes-agent/pull/18500) | Bug/P2 | Resolve `exit_code 126` no Windows usando Git Bash ao invés do shim WindowsApps | Aberto |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

**#3347 — MiniMax OAuth** (6 comentários, 1 reação 👍) — [Link](https://github.com/NousResearch/hermes-agent/issues/3347)
O usuário `ch0udry` reporta que a integração MiniMax OAuth está faltando no Hermes, após migrar do OpenClaw. Fornece documentação de referência do OpenClaw para possível implementação. A issue permanece aberta desde 2026-03-27, sinalizando demanda por suporte OAuth para provedores alternativos.

**#4622 — Per-Topic Role/Skill Binding para Telegram** (5 comentários, 2 reações 👍) — [Link](https://github.com/NousResearch/hermes-agent/issues/4622)
Proposta de `Akah-dev` para permitir que diferentes tópicos (threads) dentro de um mesmo grupo Telegram carreguem skills e personalidades distintas, dando ao bot "papeis" diferentes por contexto de discussão.

**#5712 — True Autonomy: Cron Injections** (5 comentários, 3 reações 👍) — [Link](https://github.com/NousResearch/hermes-agent/issues/5712)
O usuário `juice-digital` propõe injeção automática de resultados de cron em sessões ativas do gateway, aprimorando a autonomia do agente em workflows de longa duração.

**#9459 — Agent Profiles para delegate_task** (3 comentários, 8 reações 👍) — [Link](https://github.com/NousResearch/hermes-agent/issues/9459)
Solicitação popular (8 👍) para permitir que `delegate_task` instancie subagentes a partir de perfis nomeados no `config.yaml`, possibilitando arquiteturas de orquestração customizadas sem modificar o core.

### Análise dos Temas

A comunidade demonstra forte interesse em:
1. **Extensibilidade de plataformas** — OAuth, integração Telegram avançada
2. **Autonomia e orquestração** — cron inteligente, delegation, perfis de agente
3. **Persistência de sessão** — continuidade entre interfaces e contextos

---

## 5. Bugs e Estabilidade

### Prioridade 1 (Críticos — Exigem Ação Imediata)

| Issue | Título | Componentes | Status |
|-------|--------|-------------|--------|
| [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | Matrix messages retornando `ImportError: cannot import name 'cfg_get'` | CLI, Gateway, Matrix | **CLOSED** ✅ |
| [#18478](https://github.com/NousResearch/hermes-agent/issues/18478) | Nomes de ferramentas duplicados causam falhas 400 em provedores estrictos (Vertex, Azure, Bedrock) após commit 4d363499d | Agent, Tools, Plugins | **OPEN** ⚠️ |

### Prioridade 2 (Importantes)

| Issue | Título | Componentes | Status |
|-------|--------|-------------|--------|
| [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) | Docker: "Cannot create home directory: Permission denied" | Docker | **OPEN** |
| [#18357](https://github.com/NousResearch/hermes-agent/issues/18357) | Setup sabota npm global installs — redireciona para `~/.hermes/node` | CLI | **OPEN** ⚠️ |
| [#18539](https://github.com/NousResearch/hermes-agent/issues/18539) | `/queue` FIFO drop de arquivos MEDIA — só o último item recebe entrega | Gateway | **OPEN** |
| [#18473](https://github.com/NousResearch/hermes-agent/issues/18473) | `search_files` com `target='content'` retorna 0 em diretórios ocultos | Tools/File | **OPEN** |
| [#18466](https://github.com/NousResearch/hermes-agent/issues/18466) | `reasoning_tokens` sempre 0 em modo `chat_completions` | Agent | **OPEN** |
| [#18467](https://github.com/NousResearch/hermes-agent/issues/18467) | `/goal` perdido após `/compress` manual — estado órfão no SessionDB | Agent, CLI | **OPEN** |
| [#18461](https://github.com/NousResearch/hermes-agent/issues/18461) | `auto_skill` não carrega para skills bound a tópicos após reset | Gateway, Telegram | **OPEN** |
| [#18454](https://github.com/NousResearch/hermes-agent/issues/18454) | Windows: terminal sempre retorna `exit_code 126` | Terminal, Windows | **OPEN** |
| [#4776](https://github.com/NousResearch/hermes-agent/issues/4776) | `hermes status` reporta Gateway como 'stopped' rodando como PID 1 | CLI, Docker | **OPEN** |
| [#4835](https://github.com/NousResearch/hermes-agent/issues/4835) | Webhook `deliver=telegram` não entrega resposta final | Gateway, Webhook | **OPEN** |
| [#10505](https://github.com/NousResearch/hermes-agent/issues/10505) | `/rollback` lista apenas checkpoints do diretório atual | CLI | **OPEN** |

### Prioridade 3 (Menores)

| Issue | Título | Componentes | Status |
|-------|--------|-------------|--------|
| [#4740](https://github.com/NousResearch/hermes-agent/issues/4740) | Plugin OpenViking usa endpoints inexistentes | Plugins | **OPEN** |
| [#7192](https://github.com/NousResearch/hermes-agent/issues/7192) | `MemoryProvider.on_pre_compress()` retorna valor descartado silenciosamente | Agent, Plugins, Memory | **OPEN** |

**⚠️ Observação Crítica:** A issue [#18357](https://github.com/NousResearch/hermes-agent/issues/18357) classifica o comportamento como "sabotagem de computador" — o script de instalação redireciona instalações globais npm para `~/.hermes/node`, afetando outros softwares. Este é um problema de UX crítico que pode afastar desenvolvedores.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentes

**Alta Demanda (Multiplos 👍):**

| Issue | Feature | 👍 | Plataforma | Status |
|-------|---------|----|------------|--------|
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | Agent profiles para `delegate_task` — orquestração customizada | **8** | Agent, Tools | **OPEN** |
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | Injeção automática de resultados cron em sessões gateway ativas | **3** | Cron, Gateway | **OPEN** |
| [#4622](https://github.com/NousResearch/hermes-agent/issues/4622) | Per-Topic Role/Skill Binding para Telegram Group Forum | **2** | Telegram | **OPEN** |
| [#5810](https://github.com/NousResearch/hermes-agent/issues/5810) | Levar últimos N mensagens para nova sessão no auto-reset | **1** | Agent | **OPEN** |

**Features Propostas:**

| Issue | Feature | Componentes | Status |
|-------|---------|-------------|--------|
| [#3347](https://github.com/NousResearch/hermes-agent/issues/3347) | Suporte MiniMax OAuth | Platform/MiniMax | **OPEN** |
| [#18457](https://github.com/NousResearch/hermes-agent/issues/18457) | Continuidade de sessão cross-surface (Terminal ↔ Telegram ↔ Discord ↔ Slack) | Gateway | **OPEN** |
| [#4804](https://github.com/NousResearch/hermes-agent/issues/4804) | Streaming configurável de progresso de tools via parâmetro | API-Server, Gateway | **OPEN** |
| [#4667](https://github.com/NousResearch/hermes-agent/issues/4667) | Auto-descoberta de skills locais de projeto (`.claude/skills/`) | Agent, Skills | **OPEN** |
| [#4726](https://github.com/NousResearch/hermes-agent/issues/4726) | Namespaces de memória por perfil em setups multi-agente | Memory | **OPEN** |
| [#3422](https://github.com/NousResearch/hermes-agent/issues/3422) | Cadência configurável de prefetch do Honcho e granularidade | Plugins | **OPEN** |

### Sinais de Roadmap

1. **Orquestração Multi-Agente** — A feature de agent profiles (#9459) com 8 reações indica demanda forte por padrões de orquestração mais sofisticados.
2. **Continuidade Cross-Platform** — Sessões portáteis entre interfaces (Terminal, Telegram, Discord, Slack, Teams) parecem ser uma evolução natural desejada.
3. **Autonomia Aprimorada** — Integração de resultados cron em sessões ativas demonstra interesse em workflows de longa duração com mínima intervenção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**🔴 Integração e Configuração:**
- Usuários migrando de outras plataformas (OpenClaw) encontram features OAuth ausentes — [#3347](https://github.com/NousResearch/hermes-agent/issues/3347)
- Validação de provedores customizados falha quando endpoint `/v1/models` está indisponível — [#12153](https://github.com/NousResearch/hermes-agent/issues/12153)
- URLs base de provedores OpenAI-compatíveis precisam de `/v1` explícito — [#4617](https://github.com/NousResearch/hermes-agent/pull/4617), [#4618](https://github.com/NousResearch/hermes-agent/pull/4618)

**🔴 Estabilidade e Bugs:**
- Erros de importação quebram mensagens Matrix — já fechado ✅
- Conflitos de polling Telegram causam loop ruidoso — já fechado ✅
- Arquivos MEDIA não entregue em filas FIFO — [#18539](https://github.com/NousResearch/hermes-agent/issues/18539)
- npm global hijacking afeta outros softwares — [#18357](https://github.com/NousResearch/hermes-agent/issues/18357)
- Razão de tokens de reasoning sempre zero — [#18466](https://github.com

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 Relatório do Projeto PicoClaw — 2026-05-02

---

## 1. 🌅 Panorama do Dia

O projeto PicoClaw apresenta alta atividade de desenvolvimento com **25 PRs atualizados nas últimas 24h**, indicando intensa atividade de integração. A release nightly v0.2.8-nightly.20260501 foi publicada, sugerindo que a versão 0.2.8 está em estágio avançado de estabilização. Observa-se um **padrão crítico de regressões** na v0.2.8, com pelo menos 3 bugs graves reportados (imagens não funcionam, Android tabs inacessíveis, gateway não inicia canais), sinalizando necessidade de hotfix urgente. A comunidade demonstra engajamento robusto com 11 issues ativas, concentradas em estabilidade e features de integração.

---

## 2. 🚀 Lançamentos

### Release Mais Recente

**📦 nightly: Nightly Build v0.2.8-nightly.20260501.6e1fab80**

- **Tipo:** Build automatizado noturno
- **Status:** ⚠️ Instável — uso em produção não recomendado
- **Diff:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **Alerta de Regressão:** Três bugs críticos foram reportados especificamente na v0.2.8:
> - [#2738](https://github.com/sipeed/picoclaw/issues/2738) — Reconhecimento de imagens quebrado
> - [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android não acessa dados de abas
> - [#2742](https://github.com/sipeed/picoclaw/issues/2742) — Gateway inicia sem canais

---

## 3. 💻 Progresso do Projeto

### PRs Mergeados/Fechados Hoje (11 total)

**Contribuidor principal: stevef1uk** — responsável por toda a atividade merged, demonstrando foco em segurança e infraestrutura.

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#2327](https://github.com/sipeed/picoclaw/pull/2327) | Final Security Shield & Hardening Tidy-up | Consolidou hardening de segurança no main |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | K3s deployment + Dockerfiles multi-arquitetura | Infraestrutura para Kubernetes |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | Skills Whitelisting | Camada de segurança para skills |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | Async /chat HTTP endpoint | Integração com Teams e frontends externos |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | NVIDIA e Azure AI providers | Expansão de provedores de modelo |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | Session-Level Workspace Isolation | Proteção contra prompt injection |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support + Agent Shield | Suporte multi-tenant com segurança reforçada |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | Fix isolation hardening | Correção de bugs de isolamento |
| [#2095](https://github.com/sipeed/picoclaw/pull/2095) | Multi-User Session Isolation | Arquitetura multi-tenant |

### Destaque: Arco de Segurança do stevef1uk

O contribuidor conduziu um **macro trabalho de hardening** nas últimas semanas, consolidando:
- Isolamento de sessão e workspace
- Whitelisting de skills
- "Agent Shield" (inspirado em texasreaper62/Agent-Shield)
- Suporte a NVIDIA e Azure AI

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues com Mais Engajamento

| Issue | Tipo | Comentários | Reações | Prioridade |
|-------|------|-------------|---------|------------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) — Erro de canal em tarefas cron | Bug | 6 | 0 | 🔴 Alta |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) — Desabilitar Enter para enviar | Enhancement | 4 | 1 | 🟡 Média |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) — OAuth Authentication Errors | Bug | 3 | 0 | 🔴 Alta |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP requests | Enhancement | 3 | 1 | 🟡 Média |
| [#2738](https://github.com/sipeed/picoclaw/issues/2738) — Imagens não funcionam v0.2.8 | Bug | 2 | 0 | 🔴 Crítica |

### Análise de Demandas

**Padrões identificados:**
1. **Integração de canais** — Problemas com Telegram (cron tasks) e outros canais indicando fragilidade
2. **UX Mobile** — Demanda por controle de input (Enter key) e acesso a dados no Android
3. **Autenticação** — Falhas OAuth com OpenAI e provedores são dor crítica
4. **Build/Deploy** — Pergunta sobre Windows build (#2651) indica barreira para novos usuários

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados (Por Severidade)

#### 🔴 Críticos (v0.2.8 Regressões)

| Issue | Descrição | Canário |
|-------|-----------|---------|
| [#2738](https://github.com/sipeed/picoclaw/issues/2738) | **Image recognition broken** — Após upgrade para v0.2.8, imagens não são mais reconhecidas | Sim — v0.2.8 |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | **Android data access** — Abas do Android v0.2.8 não carregam dados | Sim — v0.2.8 |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | **Gateway channels** — Sistema inicia sem canais habilitados (Telegram) | Sim — v0.2.8 |

#### 🟠 Altos

| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Canal error ao pedir que agent execute tarefa hourly | Integração Telegram |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OAuth falha com OpenAI e Antigravity | Autenticação |
| [#1533](https://github.com/sipeed/picoclaw/issues/1533) ✅ | Tool not found para `skill_vetter` (RESOLVIDO) | Skills |

### Análise de Regressões v0.2.8

A versão 0.2.8 apresenta **padrão de regressões múltiplas**, possivelmente relacionado aos extensive changes de security hardening do PRs do stevef1uk. É recomendada a criação de release hotfix.

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Feature | Issue | Votes | Complexidade | Roadmap Signal |
|---------|-------|-------|--------------|----------------|
| **Streaming HTTP para LLM** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 1 | Média | Alinha com compatibilidade OpenAI streaming |
| **GitHub Copilot support** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | 0 | ? | Expansão de provedores |
| **Serial port (UART) tools** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | 0 | Alta | Integração embedded systems |
| **Disable Enter key** | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 1 | Baixa | UX Mobile |

### PRs Em Progresso com Signals de Roadmap

| PR | Feature | Status | Align |
|----|---------|--------|-------|
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | Native audio input para multimodal LLMs | Aberto | 🔴 Prioritário — Gemini support |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | Unify providers documentation | Aberto | 📝 Docs |
| [#2037](https://github.com/sipeed/picoclaw/pull/2037) | Portuguese (Brazil) locale | Aberto | 🌎 i18n |

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Quebras após update** | Múltiplos users reportando v0.2.8 quebrou funcionalidades | 🔴 Crítica |
| **Auth OAuth instável** | #2602 — users não conseguem usar OpenAI | 🔴 Alta |
| **Build complexo** | #2651 — barreira para devs Windows | 🟡 Média |
| **Mobile UX limitada** | #2376, #2744 — experience Android problemática | 🟡 Média |

### Cenários de Uso Reportados

1. **Agentes task-scheduled:** Usuários configurando agents para executar tarefas hourly via Telegram — atualmente falhando
2. **IoT/Embedded:** Requests para UART e serial port tools indicam uso em hardware
3. **Multi-provider:** Usuários usando múltiplos LLMs (ollama, OpenAI, DeepSeek) com problemas de compatibilidade

### Satisfação vs Insatisfação

| Aspecto | Status |
|---------|--------|
| Security hardening | ✅ Apreciado — PRs de segurança bem recibidos |
| Multi-provider | ⚠️ Funcional mas com falhas OAuth |
| Canal Telegram | ⚠️ Funcional mas quebrando em edge cases |
| Mobile | ❌ Dor real — Android tem issues críticas |

---

## 8. 📋 Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| **Windows build docs** | ~8 dias | Sem resposta | 🟡 Importante — barreira onboarding |
| **OAuth errors** | ~12 dias | Sem resposta | 🔴 Crítica |
| **UART/Serial support** | ~8 dias | Sem resposta | 🟡 Feature request |
| **GitHub Copilot** | ~8 dias | Sem resposta | 🟡 Curious |

### Ações Recomendadas

1. **🔴 Hotfix v0.2.8** — Addressar regressões críticas imediatamente
2. **🟡 Responsder OAuth** — #2602 tem 12 dias sem resposta, impacto alto
3. **🟡 Documentar Windows build** — #2651 é barreira nyata para novos contribuidores
4. **✅ Consolidar features** — Streaming e audio input parecemady for integration

---

## 📊 Métricas Resumidas

| Métrica | Valor | Sentimento |
|---------|-------|------------|
| Issues ativas | 10 | 🔴 Acima do normal — regressões |
| PRs abertos | 14 | 🟢 Pipeline saudável |
| PRs fechados | 11 | ✅ Alta taxa de merge |
| Novas releases | 1 | ⚠️ nightly ainda instável |
| Regression bugs | 3 | 🔴 Alerta |

---

*Relatório gerado em 2026-05-02 | Fonte: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-05-02 | **Fonte:** github.com/nearai/ironclaw

---

## 1. Panorama do dia

O IronClaw mantém ritmo intenso de desenvolvimento com **50 PRs e 32 issues** atualizados nas últimas 24h. A equipe concentrated na finalização do **Reborn architecture** — diversos PRs de wired services (secret injections, network policies, sandbox enforcement) foram fechados hoje, indicando maturidade do subsistema. A contribuição externa está ativa com 4 PRs do usuário `abbyshekit` no pipeline legal harness. Duas issues de estabilidade (installer Linux e Docker Hub) persistem sem resolução, e o framework está em transição de uma arquitetura legada para o modelo Reborn.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em período de feature freeze enquanto consolida a integração do Reborn. A última versão estável (`v0.26.0`, 2026-04-21) contém um bug no installer para Linux que será corrigido no próximo release ([#2818](https://github.com/nearai/ironclaw/issues/2818)).

---

## 3. Progresso do projeto

### PRs fechados/merged hoje (9 total)

| # | Título | Contribuidor | Impacto |
|---|--------|--------------|---------|
| [#3155](https://github.com/nearai/ironclaw/pull/3155) | `fix(bridge): mission_* tools accept name; resolves #2583` | core | **Crítico** — corrige falha em criação de rotinas que gerava "5 consecutive code errors" |
| [#3161](https://github.com/nearai/ironclaw/pull/3161) | `Define background process obligation reconciliation lifecycle` | core | Define ciclo de vida de obrigações para processos em background no Reborn |
| [#3160](https://github.com/nearai/ironclaw/pull/3160) | `feat(reborn): add host runtime approval resume` | core | Adiciona façade para resume de aprovações em capability host |
| [#3150](https://github.com/nearai/ironclaw/pull/3150) | `feat(reborn): consume staged runtime secrets` | core | Wire de `InjectSecretOnce` em runtime adapters |
| [#3149](https://github.com/nearai/ironclaw/pull/3149) | `fix(reborn): consume staged network policies in runtime egress` | core | Thread capability IDs para HTTP egress; consome `NetworkObligationPolicyStore` |
| [#3165](https://github.com/nearai/ironclaw/pull/3165) | `fix(reborn): harden runtime network policy handoff` | core | Remove stale `network_policy` field; adiciona coverage para WASM/script/MCP |
| [#3164](https://github.com/nearai/ironclaw/pull/3164) | `fix(reborn): move fallback runtime network policy` | core | Move request-policy fallback para local correto |
| [#3163](https://github.com/nearai/ironclaw/pull/3163) | `test(reborn): guard script HTTP egress path` | core | Adiciona testes para Docker `--network none` e manifest args |
| [#3159](https://github.com/nearai/ironclaw/pull/3159) | `Wire EnforceResourceCeiling into runtime and sandbox enforcement` | core | Consome obrigação de resource ceiling no path do host-runtime |

### PRs abertos importantes (pipeline ativo)

- [#3173](https://github.com/nearai/ironclaw/pull/3173) — Legal harness foundation (projects, documents, ingest)
- [#3176](https://github.com/nearai/ironclaw/pull/3176) — X bookmarks ingest + triage skill
- [#3174](https://github.com/nearai/ironclaw/pull/3174) — Legal harness DOCX export
- [#3175](https://github.com/nearai/ironclaw/pull/3175) — Readonly Google Drive OAuth scope
- [#3172](https://github.com/nearai/ironclaw/pull/3172) — **Fix installer** (bump cargo-dist para 0.31.0)
- [#3171](https://github.com/nearai/ironclaw/pull/3171) — Reborn event store backends (PostgreSQL, libSQL, JSONL)
- [#3167](https://github.com/nearai/ironclaw/pull/3167) — Prompt write safety policy para Reborn
- [#3170](https://github.com/nearai/ironclaw/pull/3170) — HostRuntime vertical gates tests
- [#3122](https://github.com/nearai/ironclaw/pull/3122) — External tools no Responses API
- [#3131](https://github.com/nearai/ironclaw/pull/3131) — Trace Commons client para Reborn

---

## 4. Temas quentes da comunidade

### Issue com maior engajamento

**[#2987](https://github.com/nearai/ironclaw/issues/2987)** — `[EPIC] Track Reborn architecture landing strategy and grouped PR plan`
- **Comentários:** 44 | **Status:** ABERTA
- **Resumo:** Epic que rastreia a estratégia de entrega do IronClaw Reborn sem um massive stacked PR. Define o plano de freeze → staging → grouped PRs → integration final.
- **Análise:** Este é o tronco central do roadmap atual. A comunidade demonstra preocupação com a estratégia de landing — o debate de 44 comentários indica que a equipe está refinando como consolidar a arquitetura sem quebrar workflows existentes.

### Outras issues com alta atenção

| # | Título | Comentários | Tema |
|---|--------|-------------|------|
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | Add vertical-slice integration test suite for Reborn | 14 | Test coverage |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | High ASCII TUI não exibe corretamente | 7 | UX/Display |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | Use shared Reborn runtime HTTP egress | 7 | Arquitetura |
| [#3087](https://github.com/nearai/ironclaw/issues/3087) | Compose ironclaw_host_runtime services | 4 | Arquitetura |
| [#3137](https://github.com/nearai/ironclaw/issues/3137) | Wire MCP HTTP/SSE client through shared egress | 4 | Integração |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | Installer error para x86_64-unknown-linux-gnu | 3 | Infra/Install |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation fails com 5 errors | 2 | **RESOLVIDA** |
| [#3146](https://github.com/nearai/ironclaw/issues/3146) | Evaluate TrustDecision before capability dispatch | 2 | Segurança |

---

## 5. Bugs e estabilidade

### Críticos (alta severidade)

| # | Descrição | Status | Impacto |
|---|-----------|--------|---------|
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | Installer `v0.26.0` falha em x86_64-unknown-linux-gnu | ABERTA | Usuários Linux não conseguem instalar via script oficial |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | Mesmo erro — platform x86_64-unknown-linux-gnu não suportada | ABERTA | Duplicata ou variante do mesmo problema |

**Ação em curso:** [PR #3172](https://github.com/nearai/ironclaw/pull/3172) upgrade do cargo-dist para 0.31.0.

### Média severidade

| # | Descrição | Status | Impacto |
|---|-----------|--------|---------|
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub image `nearai/ironclaw:latest` não existe | ABERTA | Usuários Docker não conseguem pullar imagem oficial |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | TUI High ASCII não exibe corretamente em todos os TTYs | ABERTA | Renderização quebrada em terminals específicos |

### Baixa severidade / resolved

| # | Descrição | Status |
|---|-----------|--------|
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation falhava com "5 consecutive code errors" | **FECHADA** via [#3155](https://github.com/nearai/ironclaw/pull/3155) |
| [#3133](https://github.com/nearai/ironclaw/issues/3133) | Mission email falhou (Gmail OAuth) | ABERTA — debug necessário |

---

## 6. Pedidos de features e sinais de roadmap

### Demanda clara de plataforma

- **[#3168](https://github.com/nearai/ironclaw/issues/3168)** — Add arm64/aarch64 platform support para Docker builds
  - IronClaw publica apenas `linux/amd64`; Cranelift já suporta aarch64
  - Impacto: abriria execução oficial em Apple Silicon, ARM servers, Raspberry Pi

### Refinamentos de segurança (Reborn)

- **[#3146](https://github.com/nearai/ironclaw/issues/3146)** — Evaluate production TrustDecision antes de capability dispatch
- **[#3167](https://github.com/nearai/ironclaw/pull/3167)** — Prompt write safety policy (em PR)
- **[#3147](https://github.com/nearai/ironclaw/issues/3147)** — Wire built-in obligation audit records para event sinks

### Escalabilidade de background jobs

- **[#3169](https://github.com/nearai/ironclaw/issues/3169)** — Design process-owned runtime handoff IDs para concurrent background fan-out
- **[#3166](https://github.com/nearai/ironclaw/issues/3166)** — Mission auto-resume after auth/approval gate resolution

### Integrações externas (contribuidor `abbyshekit`)

- Legal harness: projects, documents ingest, DOCX export
- X (Twitter) bookmarks pipeline como skill nativo
- Google Drive readonly scope

### Sinais de roadmap via Epic

O epic [#2987](https://github.com/nearai/ironclaw/issues/2987) indica que a estratégia de landing do Reborn está em estágio avançado de execução — múltiplos PRs de wiring estão sendo fechados, sugerindo que a feature está próxima de disponibilidade geral.

---

## 7. Resumo de feedback dos usuários

### Dores críticas identificadas

**1. Instalação quebrada em Linux (2 reports separados)**
- Usuários não conseguem instalar via `curl | sh` oficial
- Mensagem: `ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu`
- Workaround manual disponível via releases page, mas não discoverable
- **Satisfação:** Baixa — impede adoção

**2. Docker Hub image missing**
- Documentação referencia `nearai/ironclaw:latest` mas imagem não existe
- Usuários tentam pull e recebem `pull access denied`
- **Satisfação:** Baixa — quebra promise de UX do produto

**3. Gmail OAuth em missions**
- Mission simples de email falhou silenciosamente
- Status: `None`, Error: `None` — diagnóstico deficiente
- **Satisfação:** Baixa — falta feedback de depuração

### Feedback positivo implícito

- Issue [#2818](https://github.com/nearai/ironclaw/issues/2818) recebeu 1 upvote, indicando que pelo menos 1 usuário está ativamente usando a ferramenta
- Contribuição externa significativa (4 PRs novos) sugere que a API/extensibilidade atrai desenvolvedores

---

## 8. Backlog que merece atenção

### Issues sem resposta há 4+ dias

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|------------|------------|
| [#3088](https://github.com/nearai/ironclaw/issues/3088) | Wire production secrets/network boundary | 2026-04-29 | 1 | Alta — Reborn |
| [#3090](https://github.com/nearai/ironclaw/issues/3090) | Add ToolSurfaceService e CapabilityCatalog | 2026-04-29 | 1 | Alta — Reborn |
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub image missing | 2026-04-26 | 1 | **Média** |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | Installer fails on x86_64 | 2026-04-21 | 1 | **Crítica** (PR pronto) |

### PRs sem reviewer aparente

| # | Título | Tamanho | Risk | Status |
|---|--------|---------|------|--------|
| [#3173](https://github.com/nearai/ironclaw/pull/3173) | Legal harness foundation | XL | medium | ABERTO |
| [#3176](https://github.com/nearai/ironclaw/pull/3176) | X bookmarks ingest | XL | medium | ABERTO |
| [#3174](https://github.com/nearai/ironclaw/pull/3174) | Legal harness DOCX | XL | medium | ABERTO |
| [#3175](https://github.com/nearai/ironclaw/pull/3175) | Google Drive readonly scope | L | high | ABERTO |

### Items de infraestruturatech-debt

| # | Título | Responsável | Status |
|---|--------|-------------|--------|
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | Add arm64 Docker support | novo contribuidor | ABERTA |

---

## Métricas resumidas (24h)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 25 |Neutro |
| PRs abertos | 32 |Neutro |
| PRs merged/closed | 18 | **Alta** (maior que média) |
| Releases | 0 | — |
| Contribuidores externos (PRs) | 1 (abbyshekit) |Positivo |
| Bugs críticos abertos | 2 |Atenção |

**Veredicto:** Projeto em saúde boa, porém com tech-debt de infraestrutura (installer Linux, Docker image) e em transição de arquitetura. A atividade de PRs fechados indica progresso sólido no roadmap Reborn.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório do Projeto CoPaw — 2026-05-02

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade comunitária** no dia de hoje, com 7 issues e 3 PRs atualizados nas últimas 24h. Não houve lançamento de novas versões, mantendo o foco em estabilização e enriquecimento de funcionalidades. A taxa de fechamento de PRs permanece positiva (1 merge), enquanto o volume de issues abertas indica demandas crescentes em integração de provedores, experiência de canais e memória do agente. O projeto demonstra vitalidade com contribuições de múltiplos fronts simultâneos.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje

| PR | Autor | Título | Impacto |
|---|---|---|---|
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) | suisrc | add knowledge | Contribuição de estreante — conteúdo de knowledge base. First-time contributor. |

### PRs Abertas em Destaque

| PR | Autor | Título | Status |
|---|---|---|---|
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | no-teasy | Add vector model connection test feature | Aberta desde 2026-04-25 — aguardando review há ~7 dias |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | Nioolek | Feat/volcengine provider | Nova contribuição: adiciona provedor Volcano Engine + coding plan |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tipo | Título | Comentários | Link |
|---|---|---|---|---|
| #3992 | bug | Chat para de executar após algumas rodadas com agent | 2 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3992) |
| #3988 | bug | conda-pack conflitando com pip install qwenpaw[full] no Windows | 2 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3988) |
| #3990 | enhancement | Canal com resposta muito lenta | 2 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3990) |

**Análise:** As 3 issues mais comentadas giram em torno de **estabilidade do agente em conversas longas**, **problemas de packaging** e **performance de canais** — indicando que usuários estão encontrando barreiras em produção.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3)

| Severidade | Issue | Título | Link |
|---|---|---|---|
| 🔴 Alta | #3992 | Agent para de executar após幾輪 de conversa | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3992) |
| 🟡 Média | #3988 | conda-pack <=0.7.1 conflita com pip install qwenpaw[full] no Windows | [Issue](https://agentscope-ai/QwenPaw/issues/3988) |
| 🔵 Baixa | #3991 | Ollama perde histórico de conversa (memória não persiste) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3991) |

### Destaque: Bug Crítico #3992

> *"存在bug，和agent聊天了几轮之后，就不会继续执行了"* — Autor: zzp-x

Este é um bug funcional severo que **quebra a experiência principal** do agente em cenários de uso real. A natureza intermitente (após "algumas rodadas") sugere possible memory leak, timeout não tratado ou lógica de loop quebrada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (4)

| Categoria | Issue | Título | Link |
|---|---|---|---|
| ⚡ Performance | #3990 | Velocidade de resposta dos canais muito lenta | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3990) |
| 🧠 Memória | #3995 | Gerenciamento de memória com lifecycle, archive e conflito detection | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3995) |
| 🤖 Modelo | #3996 | DeepSeek V4: níveis de thinking (xhigh/max) além do toggle binário | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3996) |
| 🔌 API | #3993 | Suporte à OpenAI Responses API com native tool calling | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3993) |

### Análise de Tendências

1. **Enriquecimento de memória** é o tema mais estruturado (#3995), com proposta detalhada de lifecycle management, archiving automático e detecção de conflitos em escritas — sinaliza que power users estão amadurecendo o uso do sistema.

2. **Modelo DeepSeek V4** demonstra que o projeto está acompanhando lançamentos de provedores e que existe demanda por controles granulares de thinking.

3. **OpenAI Responses API** indica que o projeto está sendo posicionado para uso mais enterprise com capacidades de tool calling nativo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Issue |
|---|---|---|
| Agente trava após múltiplas rodadas de conversa | 🔴 Alta | #3992 |
| Perda de memória/context em Ollama local | 🔴 Alta | #3991 |
| Lentidão na resposta de canais | 🟡 Média | #3990 |
| Problemas de packaging no Windows (conda) | 🟡 Média | #3988 |
| Memórias acumulam sem gestão automática | 🟡 Média | #3995 |

### Cenários de Uso Reportados

- **Uso local com Ollama:** Usuários experimentam degradação de memória em modelos qwen3.5-7b/4b, enquanto APIs online funcionam normalmente. Possível problema de implementação do channel Ollama ao construir history/context.
- **Produção Windows:** Conflito entre conda-pack e pip durante empacotamento, possivelmente por upgrade de pip/setuptools realizado automaticamente.
- **Long-running agents:** Sessões prolongadas com agentes resultam em parada total de execução.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Link |
|---|---|---|---|
| PR #3831 (Vector model connection test) | ~7 dias sem resposta | ABERTA | [PR](https://github.com/agentscope-ai/QwenPaw/pull/3831) |
| Issue #3991 (Ollama history loss) | 1 dia | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3991) |
| Issue #3992 (Agent para após rodadas) | 1 dia | ABERTA | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3992) |

### ⚠️ Prioridade: PR #3831

Este PR está aberta há **7 dias** sem comentários de maintainers. Adiciona feature de teste de conexão com modelos vetoriais — funcionalidade utilitária que pode desmotivar contribuidor se ignorada.

### ⚠️ Prioridade: Bug #3992

Reportado há 1 dia, já com 2 comentários, mas sem assign ou milestone. Se confirmado, é um blocker para uso production-ready.

---

## 📈 Métricas Resumidas do Dia

| Métrica | Valor |
|---|---|
| Issues abertas/ativas | 7 |
| PRs abertas | 2 |
| PRs fechadas/merged | 1 |
| Releases | 0 |
| Bugs críticos | 1 |
| Features propostas | 4 |
| Contribuidores únicos (hoje) | 6 |

---

*Relatório gerado em 2026-05-02 com base em dados GitHub do projeto CoPaw (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-02

---

## 1. Panorama do Dia

O projeto ZeroClaw demonstra **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. A versão v0.7.4 foi lançada como primeiro patch da série v0.7.x, introduzindo refatorações significativas na stack de internacionalização e onboarding. A comunidade mantém foco em bugs de P1 (workflows bloqueados), particularmente relacionados à configuração de provedores, shell sandbox e estabilidade do dashboard. O pipeline de schema v3 está em progresso avançado, sinalizando uma migração importante iminente.

---

## 2. Lançamentos

### v0.7.4 — Released
**Data:** 2026-05-01 | [Changelog v0.7.3 → v0.7.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4)

**Mudanças principais:**
| Área | Mudança |
|------|---------|
| **Matrix Protocol** | Reescrita completa em clean-room implementation |
| **i18n** | Pipeline Mozilla Fluent com suporte a multi-locale docs |
| **CLI/TUI** | Refatoração completa do fluxo de onboarding |
| **Canais** | Recuperação do canal WeChat iLink Bot |

**Notas:** Esta release representa a estabilização da foundation v0.7.x. Não há breaking changes documentadas para esta versão patch.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | ilteoood | `feat(cron): manually trigger cron from webui` | **Alto** — Novo endpoint `POST /api/cron/{id}/run` para teste de jobs via UI |
| [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) | rxaviers | Add Codex runner (paridade com Claude Code) | **Alto** — Novo `codex_runner` tool |
| [#5141](https://github.com/zeroclaw-labs/zeroclaw/pull/5141) | nieta-zjj | Route webhook requests through tool loop | **Médio** — Alinhamento de comportamento com execução interativa |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/pull/5835) | Audacity88 | Evict cancel_tokens entries for abandoned sessions | **Crítico** — Fix de memory leak em WebSocket handler |
| [#6070](https://github.com/zeroclaw-labs/zeroclaw/pull/6070) | eabase | Improve default model selection - free & missing | **Médio** — Melhor indicação de modelos gratuitos no dropdown |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/pull/5501) | ilteoood | Trigger cron job manually | **Médio** — Capacidade de teste manual de prompts |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/pull/5356) | michidk | Canvas tool writes to separate CanvasStore para canais | **Médio** — Fix em Telegram/Discord/Slack |
| [#5999](https://github.com/zeroclaw-labs/zeroclaw/pull/5999) | NiuBlibing | Gateway Web Chat UX Improvements | **Médio** — Melhor feedback de status e gestão de sessões |

### PRs Abertos com Atividade Recente

| PR | Autor | Descrição | Status |
|----|-------|-----------|--------|
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | alexandme | Enriquecer spans OTel com gen_ai.tool.* conventions | Em revisão |
| [#5530](https://github.com/zeroclaw-labs/zeroclaw/pull/5530) | T-Campbell18 | Use namespaced memory tools para agentic sub-agents | Aguarda autor |
| [#5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540) | tre508 | Harden memory recall and session resume | Aguarda autor |
| [#4924](https://github.com/zeroclaw-labs/zeroclaw/pull/4924) | ArchBirdie | allowed_private_hosts config para http_request tool | Aguarda autor |
| [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | ilteoood | Add WhatsApp to supported cron delivery channels | Novo |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| # | Título | Comentários | 👍 | Severidade | Tema |
|---|--------|-------------|-----|------------|------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | **15** | 0 | S1 | Configuração de provedores em containers |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | **8** | 0 | S3 | UX/Descoberta de ferramentas |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | A better LOGO of Zeroclaw | **8** | 2 | — | Branding/Identidade visual |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking field migrations | **6** | 0 | Merge blocker | Migração de schema |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Shell sandbox blocks Python patterns | **6** | 0 | P1 | Sandbox/Segurança |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge emits non-schema fields | **5** | 0 | P1 | Schema validation |

### Análise de Demandas

**Configuração e Setup (maior volume):**
- Issue central [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) expõe fricção significativa na configuração inicial, especialmente em ambientes LXC/container. 15 comentários indicam necessidade de melhor documentação ou automação de onboarding.

**Segurança e Permissões:**
- Grupo coeso de issues relacionadas a permissões granulares ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775), [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132), [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127)), todas do mesmo autor (perlowja), indicando trabalho coordenado em hardening.

**Schema v3:**
- Migracao [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) é explicitamente um "merge blocker" — marca claramente a prioridade técnica para as próximas semanas.

---

## 5. Bugs e Estabilidade

### Bugs P1 — Workflow Bloqueado ou Crítico

| # | Título | Status | Severidade | Área |
|---|--------|--------|------------|------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | **OPEN** | S1 | provider/onboard |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Shell sandbox blocks Python patterns | **IN PROGRESS** | S1 | runtime/skills |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | PYTHONPATH inline env var prefix broken | **IN PROGRESS** | P1 | tool/shell |
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | Skills blocked despite allow_scripts=true | **IN PROGRESS** | S1 | skills |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | gateway-chat succeeds but no cost tracking | **OPEN** | P1 | gateway/observability |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | self-test reports localhost contrary to config | **OPEN** | S1 | config/doctor |

### Bugs P2 — Comportamento Degradado

| # | Título | Status | Área |
|---|--------|--------|------|
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Dashboard Channels tab crash | **IN PROGRESS** | gateway/daemon |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing into agent chat | **IN PROGRESS** | gateway |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | install.sh doesn't extract web dashboard | **OPEN** | ci/scripts |
| [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) | WASM plugin install path diverges from runtime scan | **OPEN** | runtime/daemon |

### Análise de Estabilidade

**Shell/Skills:** Maior cluster de bugs (3 issues P1 relacionadas) afeta principalmente desenvolvedores de skills Python. A repressão de scripts está inconsistente entre configuração e execução.

**Gateway/Observabilidade:** Falha em tracking de custos ([#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)) pode impactar usuários em ambientes de produção com necessidade de compliance.

**Dashboard:** Bugs de UI afetando Channels tab e renderização — possível impacto na experiência de novos usuários.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Em Progresso

| # | Título | Descrição | Impacto |
|---|--------|-----------|---------|
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking migrations | Bump `CURRENT_SCHEMA_VERSION` to 3 com migrações completas |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from .well-known URI | Suporte a стандарт `.well-known` da Agents Skills group |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | Document skill audit scope decision | Clarificar que audit é apenas checagens estruturais |
| [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | Configurable LM Studio server URL | Config centralizada para LM Studio em chat/embeddings/config |

### Novas Features (últimas 24h)

| # | Título | Autor | Descrição |
|---|--------|-------|-----------|
| [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | Configurable LM Studio server URL | vexxuh | Base URL única para todos os paths LM Studio |

### Sinais de Roadmap

1. **Schema v3 é prioritário** — Merge blocker [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) indica foco em estabilidade de config antes de features maiores
2. **WASM plugins em expansão** — Fix [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) necessário para suporte completo
3. **Multi-canal Cron** — PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) adiciona WhatsApp como canal de entrega
4. **Observabilidade OTel** — PR [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) enriquece spans com convenções gen_ai

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Setup/Onboarding** | Usuários em containers LXC não conseguem completar onboarding com Ollama remoto | Alta — issue com 15 comentários |
| **Descoberta de funcionalidades** | Agent não expõe comandos disponíveis (ex: `zeroclaw cron`) | Média |
| **Shell sandbox** | Padrões realistas de Python skill são bloqueados | Alta — 3 issues P1 |
| **Dashboard instável** | UI trava em Channels tab e tem problemas de render | Média |
| **Tracking de custos** | Operações completam mas não geram logs de custo | Média |

### Cenários de Uso Emergentes

1. **InvestorClaw (Jason Perlow)** — Skill de análise de portfolio FINOS CDM 5.x em desenvolvimento, expôs múltiplos bugs relacionados a skills e segurança
2. **Ambientes corporativos** — Configuração de provedores em redes isoladas/complexas
3. **Desenvolvedores de plugins** — WASM plugins com problemas de path resolution

### Tendências de Satisfação

| Aspecto | Sentimento |
|---------|------------|
| Core agent functionality | Positivo — features sendo adicionadas (Codex runner, cron manual) |
| Documentação | Neutro — pedidos de mais docs sobre skills e configuração |
| Estabilidade de runtime | Negativo — múltiplos bugs P1 em shell e skills |
| Onboarding | Neutro/negativo — issues recorrentes de fresh install |

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias (Prioridade)

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | 2026-04-18 | 8 | P1 |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) | Document about skills wanted | 2026-04-18 | 1 | P2 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | per-skill security permissions | 2026-04-15 | 1 | P2 (needs-maintainer) |
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) |

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*