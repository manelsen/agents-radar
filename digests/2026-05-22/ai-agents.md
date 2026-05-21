# Resumo diário do ecossistema de agentes de IA 2026-05-22

> Issues: 0 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-05-21 21:24 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw — 2026-05-22

---

## 1. Panorama do Dia

O projeto NullClaw apresenta um dia de **atividade moderada** no front de pull requests, com duas contribuições abertas sendo mantidas pela comunidade. No entanto, o ecossistema de issues permanece inativo — nenhuma issue aberta, fechada ou comentada nas últimas 24 horas. Não houve lançamentos de novas versões, indicando que o projeto pode estar em fase de consolidação ou revisão de código antes de um próximo release. O pipeline de review parece ativo com dois PRs aguardando atenção, sugerindo que a equipe está focando recursos em integração de funcionalidades ao invés de triagem de issues.

---

## 2. Lançamentos

**Nenhum novo release detectado nas últimas 24h.**

O último ciclo de releases não apresentou atualizações no período analisado. Projetos do tipo NullClaw (frameworks de IA agents) tipicamente acumulam contribuições em PRs antes de realizar releases, indicando que as funcionalidades em progresso (cron engine, provider expansion) podem estar próximas de um milestone release.

---

## 3. Progresso do Projeto

### PRs em ANDAMENTO

**#783** — `feat(cron): cron subagent, run history, JSON output, security hardening`  
*Autor:* yanggf8 | *Criado:* 2026-04-07 | *Atualizado:* 2026-05-21

Este PR representa uma contribuição substancial ao projeto, introduzindo:

- **Cron subagent engine** com scheduler baseado em banco de dados (`cron_runs` history table, `cron_run_queue` worker)
- **Atomic operations** para tick/enqueue/complete
- **Job types** suportando skill/agent/shell
- **Timezone support** com offsets por job
- **Delivery routing** e operator alerts
- **JSON CLI output** (`cron list --json`, `cron schedule --json`)

🔗 [nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783)

**#922** — `feat(providers): add NEAR AI Cloud provider`  
*Autor:* PierreLeGuen | *Criado:* 2026-05-21 | *Atualizado:* 2026-05-21

Expansão do catálogo de providers com:

- Integração OpenAI-compatible com NEAR AI Cloud (`nearai`)
- Variáveis de ambiente: `NEARAI_API_KEY`, endpoint `https://cloud-api.near.ai/v1`
- Model catalog parsing para `GET /v1/model/list`
- Onboarding defaults e documentação completa

🔗 [nullclaw/nullclaw PR #922](https://github.com/nullclaw/nullclaw/pull/922)

---

## 4. Temas Quentes da Comunidade

**Sem issues com atividade significativa detectada nas últimas 24h.**

A ausência de issues ativas pode indicar:
- Release recente que estabilizou a codebase
- Base de usuários maduros sem blockers críticos
- Possível necessidade de proatividade na triagem de backlog

Os dois PRs ativos representam os topics mais relevantes para a comunidade:
- **Expansão de plataforma** (NEAR AI) — novos mercados/usuários
- **Automação de workflow** (cron jobs) — uso enterprise e automação de tarefas

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

Não há histórico de crashes, regressões ou issues de estabilidade no período analisado. Isso sugere um estado operacional estável da codebase atual.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Em Desenvolvimento

**Expansão de Providers (#922)**  
A adição do provider NEAR AI Cloud sinaliza estratégia de diversificação de provedores, reduzindo vendor lock-in e expandindo reach para comunidades Web3/AI. Este é um indicativo claro de roadmap的方向 — multi-provider support.

**Cron Engine (#783)**  
O sistema de scheduling robusto com persistência em banco, suporte a múltiplos job types e timezone handling indica foco em **use cases enterprise e automação de longo prazo**. A inclusão de JSON output demonstra preocupação com integração programática.

### Sinais de Mercado
- Integração com ecossistema NEAR sugere foco emAI descentralizada
- Cron jobs indicam maturidade para cenários de produção contínua

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback explícito capturado nas últimas 24h.**

A ausência de issues e comments sugere:
- **Satisfação operacional** com a versão atual
- Ou **falta de canais de feedback ativos** precisando atenção

### Análise Contextual

O perfil dos PRs sugiere demandas de mercado:
1. **Flexibilidade de provedores** — usuários querem escolha de LLM provider
2. **Automação** — scheduling de tarefas indica uso em pipelines de produção
3. **Observabilidade** — JSON output e run history indicam necessidade de debugging/monitoring

---

## 8. Backlog que Merece Atenção

### PRs Aguardando Review

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| #783 | Cron subagent, run history, JSON output, security hardening | ~45 dias | OPEN | 🔴 Alta |
| #922 | Add NEAR AI Cloud provider | 1 dia | OPEN | 🟡 Média |

### Análise Crítica

**#783 — Maior preocupação**  
Com ~45 dias de idade e nenhum merge, este PR substancial (múltiplas features incluindo security hardening) requer atenção da maintainer team. Possíveis reasons para delay:
- Complexidade de review
- Dependências não resolvidas
- Foco em outras prioridades

**Recomendação:** Priorizar review do #783 para não perder contributor goodwill e desbloquear funcionalidades críticas.

---

## Métricas Resumidas do Dia

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertos | 2 |
| PRs merged | 0 |
| Releases | 0 |
| Bugs críticos | 0 |

---

## Saúde Geral do Projeto: 🟢 ESTÁVEL

O projeto NullClaw demonstra estabilidade operacional com pipeline de contributions ativo. A atenção deve ser direcionada para review e merge dos PRs pendentes, especialmente #783 que representa uma evolução significativa do framework. A comunidade está ativamente contribuindo com funcionalidades de valor (scheduling, multi-provider), sinalizando saúde do ecossistema.

---

*Relatório gerado em 2026-05-22 com base em dados do GitHub de NullClaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Período:** 2026-05-22 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde heterogênea** em 22 de maio de 2026. **ZeroClaw** lidera em volume de atividade com 50 PRs e lançamento da beta multi-agente v0.8.0, enquanto **NullClaw** mantém operação estável porém conservadora com apenas 2 PRs abertos. A tendência dominante é a **expansão para arquiteturas multi-agente** e **diversificação de provedores LLM**, com ZeroClaw, Hermes e NanoBot investindo agressivamente nessas frentes. O WeChat surge como canal problemático transversal — CoPaw, NanoBot e Hermes reportam bugs críticos relacionados a esse canal. A estabilidade da WebUI/TUI é uma preocupação compartilhada, com todos os projetos mantendo issues abertas sobre renderização, clipboard e estados de sessão.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/total) | PRs (abertos/total) | Releases (24h) | Bugs Críticos Abertos | Saúde |
|---------|------------------------|---------------------|----------------|----------------------|-------|
| **ZeroClaw** | 19/21 | 44/50 | 1 (v0.8.0-beta-1) | 6 (S1+S2) | ⭐⭐⭐ |
| **Hermes Agent** | ~50 | 34/50 | 0 | 2 (P1) + 11 (P2/P3) | 🟡 |
| **NanoBot** | ~10 processadas | ~31 atualizados, 23 merged | 0 | 2 (alta) | 🟢 |
| **IronClaw** | 14/22 | 22/45 | 0 | 2 (alta) | 🟢 |
| **CoPaw** | 18/26 | 8/27 | 0 | 4 (críticos) | 🟡 |
| **PicoClaw** | ~9 resolvidas | 19/29 | 1 (nightly) | 0 (7 fechados) | 🟢 |
| **NullClaw** | 0 | 2 | 0 | 0 | 🟢 |

**Observações:**
- **ZeroClaw** apresenta o maior volume absoluto de atividade, porém com 6 bugs S1/S2 abertos — indicador de regressões recentes na transição para multi-agente.
- **PicoClaw** demonstra a melhor taxa de resolução com 7 bugs fechados em 24h e zero críticos em aberto.
- **NullClaw** é o projeto mais inativo em volume, indicando consolidação ou baixa manutenção.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Volume e Inovação

**Vantagens competitivas:**

| Dimensão | Posicionamento |
|----------|----------------|
| **Arquitetura** | Único projeto com lançamento oficial multi-agente em produção beta; schema V3 representa evolução paradigmática |
| **Escala de comunidade** | 50 PRs + 21 issues em 24h — volume 2-3x superior aos pares |
| **Infraestrutura** | RPC dispatch layer + Unix socket transport (#6839) habilita clientes leves e TUI completa |
| **Extensibilidade** | 40+ channels, skill system, ACP protocol extensions — ecossistema mais amplo |

**Diferenças técnicas vs. pares:**

| Aspecto | ZeroClaw | Hermes Agent | IronClaw | NanoBot |
|---------|----------|--------------|----------|---------|
| Paradigma | Host multi-agente isolado | Agent único com multi-canal | Agent runtime Rust | Agent monolítico |
| Providers | Expansão ativa (Jina, DeepSeek) | LiteLLM + Bitwarden | NearAI native | 8+ providers integrados |
| Deployment | Daemon + TUI + RPC | CLI + Docker | Rust crate | WebUI + Python |
| Release cycle | Beta acelerada | Contínua sem tags | Gap crates.io (v0.27→v0.24) | Sem releases formais |

**Tamanho da comunidade:**
ZeroClaw apresenta maior throughput de contribuições (6 PRs merged + 44 abertos simultaneamente), indicando base de contributors ativa. Hermes Agent segue em segundo volume. Os projetos Sipeed (PicoClaw) e NullClaw operam com equipes menores e ciclos mais lentos.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Diversificação de Providers LLM

Três projetos anunciaram novos provedores simultaneamente:

| Projeto | Provider | Detalhes |
|---------|----------|----------|
| NullClaw | NEAR AI Cloud (#922) | OpenAI-compatible, `nearai` protocol |
| PicoClaw | NEAR AI Cloud (#2917) | Mesma integração, contribuidor PierreLeGuen |
| NanoBot | Novita AI (#3927), Skywork (#3916), xAI Grok OAuth (#3936) | Múltiplas adições em 24h |

**Implicação:** A comunidade open source está fragmentando o lock-in de provedores. DeepSeek-V4 (#6059 em ZeroClaw) demonstra que novos modelos geram demanda imediata de compatibilidade.

### 4.2 Agendamento e Cron Jobs

| Projeto | Feature | Status |
|---------|---------|--------|
| NullClaw | Cron subagent engine com persistence (#783) | OPEN (45 dias) |
| CoPaw | Cron isolation (#4602) | Merged |
| PicoClaw | Cron feedback suppression (#2777) | Merged |
| Hermes | Cron: prompt_file support (#30020) | OPEN |

**Padrão:** Scheduling robusto com banco de dados e timezone support é requisito emergente para use cases enterprise.

### 4.3 Estabilidade Multi-Canal

| Canal | NanoBot | CoPaw | Hermes | PicoClaw |
|-------|---------|-------|--------|----------|
| WeChat | — | 🔴 14 issues abertas | — | — |
| WeChat iLink | — | 🔴 Token expiry + dedup | — | — |
| Telegram | — | — | 🔴 Voice Docker broken | 🟢 Topic support |
| Feishu | — | 🟡 CardKit streaming | 🟡 Stream issues | — |
| Slack | — | — | 🟠 reply_in_thread broken | — |

**Observação:** WeChat iLink é o canal mais problemático do ecossistema, afetando exclusivamente CoPaw. Telegram e Slack apresentam bugs distributed mas menos severos.

### 4.4 WebUI e Experiência de Desktop

| Problema | NanoBot | Hermes | CoPaw | PicoClaw |
|----------|---------|--------|-------|----------|
| Display乱码/garbled | #3790 (14 comments) | — | — | — |
| Sidebar performance | #3953 (merged) | — | — | — |
| Clipboard Ctrl+V | — | #24860 | — | — |
| Chat closes after response | #3884 (merged) | — | — | — |
| Tauri migration | — | — | #3813 (in progress) | — |
| TUI development | — | #20059 (Electron/Vite) | — | — |

**Consenso:** WebUI é ponto de dor transversal. NanoBot apresenta o maior volume de issues (3 relacionadas), Hermes tem clipboard quebrado há semanas.

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Perfil Principal | Casos de Uso |
|---------|-----------------|--------------|
| **ZeroClaw** | DevOps/Plataformas | Multi-tenant, isolar agentes por equipe, Unix socket clients |
| **Hermes Agent** | Enterprise + Desenvolvedores | Dashboard, Claude CLI, Slack/Telegram integration, security-focused |
| **IronClaw** | Rust/Corporate | High-performance runtime, WASM tools, Google Calendar/Gmail native |
| **NanoBot** | Utilizadores Finais | WebUI-first, multi-provider hub, Xiaomi MiMo integration |
| **CoPaw** | Mercados Asiáticos | WeChat/DingTalk/Feishu enterprise, Qwen models, desktop pets |
| **PicoClaw** | Raspberry Pi / Edge | Lightweight, Telegram-focused, i18n (pt-BR) |
| **NullClaw** | Consolidando | Cron engine, provider expansion sem urgência de features |

### 5.2 Arquitetura Técnica

```
ZeroClaw      │ Rust + JSON-RPC 2.0 + Unix Socket + Multi-agent schema V3
Hermes Agent  │ Python + Claude CLI bridge + Dashboard + TUI Electron
IronClaw      │ Rust (core) + WASM runtime + libSQL/PostgreSQL + Reborn lanes
NanoBot       │ Python + WebUI + Multi-provider OpenAI-compatible
CoPaw         │ Python + Tauri 2.x (migrando) + Skill Market
PicoClaw      │ Python + Telegram-native + Docker-first
NullClaw      │ Python + Cron engine + Provider abstraction
```

### 5.3 Diferenciação Estratégica

| Projeto | Aposta Estratégica | Risco |
|---------|-------------------|-------|
| **ZeroClaw** | Multi-agente host + TUI como produto | Breaking changes na v0.8.0 podem afastar usuários |
| **Hermes** | Desktop App Electron + Bitwarden integration | Competir com Cursor/Claude Desktop |
| **IronClaw** | Rust performance + WASM isolation + Reborn | Migration complexa; gap crates.io |
| **NanoBot** | Hub multi-provider + BM25 skill router (60% token reduction) | Complexidade de manter 8+ providers |
| **CoPaw** | Tauri 2.x + skill market unificado | Dívida técnica em canais asiáticos |
| **PicoClaw** | Simplicidade + retry reliability | Baixa diferenciação |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | PRs Abertos | Taxa Fechado/Aberto | Velocidade |
|---------|-------------------|-------------|---------------------|------------|
| **NanoBot** | 23 | ~31 | ~74% | 🔥🔥🔥 Muito alta |
| **IronClaw** | 23 | 22 | ~104% | 🔥🔥🔥 Equilibrada |
| **ZeroClaw** | 6 | 44 | ~14% | 🔥🔥 Alta volume |
| **CoPaw** | 19 | 8 | ~237% | 🔥🔥 Consolidando |
| **PicoClaw** | 10 | 19 | ~53% | 🔥 Moderada |
| **Hermes** | 16 | 34 | ~47% | 🔥 Moderada |
| **NullClaw** | 0 | 2 | 0% | ⚠️ Estagnada |

**Análise:**
- **NanoBot** e **IronClaw** apresentam os ciclos mais ágeis com PRs sendo fechados em volume próximo aos abertos.
- **CoPaw** está em fase de consolidação — fecha PRs mais rápido do que abre, indicando foco em estabilidade.
- **ZeroClaw** tem backlog acumulado (44 abertos vs. 6 fechados) — reflexo da transition para multi-agente.
- **NullClaw** está estagnada — nenhum PR merged ou closed.

### 6.2 Manutenção de Bugs

| Projeto | Bugs Abertos | Críticos | Tempo Médio Aberto | дисциплина |
|---------|--------------|----------|-------------------|-------------|
| **ZeroClaw** | 6 | 3 S1 | <1 dia (S1 novos) | 🟡 Alta pressão |
| **CoPaw** | 4 | 4 críticos | 2-14 dias | 🟡 WeChat drain |
| **Hermes** | 13+ | 2 P1 | 42 dias (#7237 truncation) | 🔴 Estagnado |
| **IronClaw** | 2 | 2 alta | dias | 🟢 Em dia |
| **NanoBot** | 2 | 2 alta | <7 dias | 🟢 Proativo |
| **PicoClaw** | 0 | 0 | — | 🟢 Excelente |
| **NullClaw** | 0 | 0 | — | 🟢 N/A |

**Preocupações:**
- **Hermes** apresenta o bug mais antigo em discussão ativa — 42 dias (truncation #7237) sem resolução definitiva.
- **CoPaw** tem 4 bugs críticos abertos relacionados ao WeChat, com alguns com 14 dias.

### 6.3 Maturidade Relativa

| Indicador | Mais Maduro | Menos Maduro |
|-----------|-------------|--------------|
| **Estabilidade** | PicoClaw (7 bugs fechados, 0 críticos) | ZeroClaw (6 S1/S2 abertos) |
| **Comunidade** | Hermes (31 comentários em issue única) | NullClaw (0 issues/comentários) |
| **Release Cycle** | PicoClaw (nightly consistente) | IronClaw (gap crates.io) |
| **Documentação** | NanoBot (FAQ, Xiaomi MiMo docs) | Hermes (múltiplas homepages #4351) |
| **Feedback Loop** | NanoBot (2 dias até resposta #3934) | Hermes (42 dias sem resolução #7237) |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

#### 🔹 Multi-Agente como Padrão de Mercado
**Evidência:**
- ZeroClaw v0.8.0-beta-1 (multi-agent host)
- Hermes RFC #5890 (multi-agent UX, 10 comentários)
- PicoClaw #2775 (sub-agent role confusion — demanda por isolamento)
- NullClaw #783 (cron subagent engine)

**Análise:** A indústria está convergindo para agentes que orquestram sub-agentes especializados. ZeroClaw lidera com lançamento formal; Hermes e PicoClaw reconhecem a necessidade.

#### 🔹 Provider Diversification Anti-Lock-in
**Evidência:**
- 3 novos providers anunciados em 24h (NEAR AI Cloud ×2, Novita AI, Skywork)
- DeepSeek-V4 compatibility bug (#6059) com 12 comentários
- xAI Grok OAuth (#3936) — PKCE flow

**Análise:** Usuários enterprise exigem escolha de provedor por custo, latência e compliance. Modelos open-source (DeepSeek, Qwen) ganham tração.

#### 🔹 TUI como Requisito de Power Users
**Evidência:**
- ZeroClaw: 6 issues coordenadas para TUI (#6824-#6826)
- Hermes: Desktop App Electron/Vite (#20059)
- CoPaw: Tauri 2.x migration (#3813)

**Análise:** WebUI é insuficiente para servidores headless e desenvolvedores. TUI streaming com Unix socket transport (ZeroClaw #6839) é o padrão emergente.

#### 🔹 Cron/Scheduling para Automation Pipelines
**Evidência:**
- 4 projetos com features de scheduling ativas
- IronClaw: retry de missões não funciona (#3839)
- PicoClaw: 15 comentários sobre retry mechanism (#629)

**Análise:** Agentes estão evoluindo de chatbots para automation engines. Scheduling robusto com idempotência (IronClaw #3759) é requisito emergente.

#### 🔹 WeChat/Canais Corporativos Chineses
**Evidência:**
- CoPaw: 14+ issues We

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-22

## 1. Panorama do dia

NanoBot manteve um nível de atividade extremamente elevado nas últimas 24 horas, com **31 PRs atualizados** e **10 issues processadas**. O projeto demonstra uma saúde vigorosa com **23 PRs mergeados ou fechados**, indicando ciclos de review ágeis e entrega contínua de valor. As áreas de maior foco foram a interface WebUI (performance e estabilidade), integração de novos provedores de IA (OpenAI Codex, xAI Grok, Ollama, Novita AI, Skywork), e ferramentas do sistema — especialmente a memory de longo prazo e o exec tool. Não houve releases formais publicadas hoje.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto está em ritmo intenso de desenvolvimento com merge contínuo, mas sem tag de versão formal. A última release estável não é visível no período analisado.

---

## 3. Progresso do Projeto

### PRs fechadas/mergeadas (selection)

| # | Título | Impacto |
|---|--------|---------|
| [#3940](https://github.com/HKUDS/nanobot/pull/3940) | fix: drop redundant reasoning_effort for Kimi thinking models | Resolve conflito de API com Moonshot que rejeitava kimi-k2.5/k2.6 |
| [#3953](https://github.com/HKUDS/nanobot/pull/3953) | feat(webui): improve sidebar performance | Renderização em batches + Cmd/Ctrl+K search |
| [#3927](https://github.com/HKUDS/nanobot/pull/3927) | feat: add Novita AI provider | Novo provedor LLM OpenAI-compatible |
| [#3916](https://github.com/HKUDS/nanobot/pull/3916) | feat(providers): add Skywork first-level support | Provedor Skywork/APIFree integrado ao WebUI |
| [#3922](https://github.com/HKUDS/nanobot/pull/3922) | fix(exec): detach stdin for shell commands | Corrige hang em comandos shell que heredavam stdin |
| [#3933](https://github.com/HKUDS/nanobot/pull/3933) | Fix shell guard false positives on URL commands | Evita bloqueio de curl/wget com URLs como caminhos |
| [#3947](https://github.com/HKUDS/nanobot/pull/3947) | fix(exec): stabilize Windows shell tests | Testes Windows mais estáveis |
| [#3944](https://github.com/HKUDS/nanobot/pull/3944) | fix(webui): keep new chat during session refresh | Resolve #3884 — preserva chats novos durante refresh |
| [#3923](https://github.com/HKUDS/nanobot/pull/3923) | feat(tools): optimize coding workflows | Novo `apply_patch` com validação workspace-aware e rollback |
| [#3951](https://github.com/HKUDS/nanobot/pull/3951) | feat(webui): refine collapsible sidebar | Ícone nanocat + rail collapsed compartilhado |
| [#3684](https://github.com/HKUDS/nanobot/pull/3684) | fix(weixin): prevent silent message drops | Corrige perda silenciosa de mensagens WeChat |
| [#3619](https://github.com/HKUDS/nanobot/pull/3619) | docs: Document Xiaomi MiMo token plan configuration | Documentação de configuração MiMo |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) | fix(providers): inject OpenRouter reasoning.effort | Follow-up para modelos thinking via OpenRouter |

**Total de PRs fechadas: 23** — volume significativamente acima da média, evidenciando sprint intenso.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

1. **[#3790](https://github.com/HKUDS/nanobot/issues/3790)** — WebUI会话内容打印显示错乱 — **14 comentários**
   - Bug visual crítico: conteúdo impresso no chat WebUI aparece desformatado, exige refresh de página
   - Versionado em 0.1.5.post3.2026.05.13 — indica regression recente
   - Fechado sem merge aparente de fix visível nos PRs hoje — pode indicar workaround manual ou reopen

2. **[#3884](https://github.com/HKUDS/nanobot/issues/3884)** — WebUI conversation closes after first response — **3 comentários**
   - Corrigido por [#3944](https://github.com/HKUDS/nanobot/pull/3944)

3. **[#3934](https://github.com/HKUDS/nanobot/issues/3934)** — exec工具无法通过pip正常安装python第三方库 — **3 comentários**
   - Problema: PATH do venv appended no final, precedence inverso
   - Analisado detalhadamente pelo autor — potencial fix em discussão

4. **[#3885](https://github.com/HKUDS/nanobot/issues/3885)** — 为Dream系统作业添加全局开关配置 — **2 comentários**
   - Desejo legítimo: disable cron job de Dream memory mesmo com memory skill desabilitado
   - Proposta de campo `enabled` booleano em `agents.defaults.dream`

### PRs com maior potencial de impacto

- **[#3952](https://github.com/HKUDS/nanobot/pull/3952)** — Dream + Consolidator memory MECE enhancement: aborda problema estrutural de duplicação massiva de informação em MEMORY.md e history.jsonl (mesmo fato aparece 10+ vezes). PR large-scale com refatoração de prompts.

- **[#3936](https://github.com/HKUDS/nanobot/pull/3936)** — xAI Grok OAuth: PKCE-based login sem necessidade de API key manual. Adiciona fluxo OAuth completo com refresh e fallback manual.

---

## 5. Bugs e Estabilidade

### Bugs reportados (abertos)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | **Alta** | exec tool: pip install falha por precedence inverso no PATH |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | **Média** | Dream cron job registrado mesmo com memory disabled |

### Bugs reportados (fechados)

| # | Status | Descrição |
|---|--------|-----------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | CLOSED | WebUI display乱码 — reload obrigatório |
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) | CLOSED (fix #3944) | Conversation fecha após primeira resposta |
| [#3931](https://github.com/HKUDS/nanobot/issues/3931) | CLOSED (fix #3933) | restrictToWorkspace=true bloqueia requests web legítimos |
| [#3945](https://github.com/HKUDS/nanobot/issues/3945) | CLOSED | WebUI duplicate value for 'tool_call_id' |
| [#3939](https://github.com/HKUDS/nanobot/issues/3939) | CLOSED (fix #3940) | Moonshot API reject com reasoning_effort + thinking simultâneos |
| [#3876](https://github.com/HKUDS/nanobot/issues/3876) | CLOSED | WebUI bootstrap localhost-only — inacessível via Docker |

**Análise:** 6 bugs fechados em 24h é excelente throughput de fix. O bug de duplicate tool_call_id (#3945) recém-reportado foi fechadíssimo rapidamente, sugerindo root cause comum já tratada. O bug de display乱码 (#3790) merece atenção — 14 comentários sem merge visible pode indicar que ainda não foi totalmente resolvido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em PR aberto

| # | Feature | Estratégia |
|---|---------|-----------|
| [#3954](https://github.com/HKUDS/nanobot/pull/3954) | OpenAI + Codex image generation | Novo provider para geração de imagens |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | Dream + Consolidator MECE memory | Refatoração de long-term memory |
| [#3946](https://github.com/HKUDS/nanobot/pull/3946) | Ollama image generation native | Endpoint /api/generate nativo |
| [#3949](https://github.com/HKUDS/nanobot/pull/3949) | Debounced group-message buffering (Telegram/Feishu) | Reduz bursts em group chats |
| [#3936](https://github.com/HKUDS/nanobot/pull/3936) | xAI Grok OAuth | Autenticação PKCE sem API key |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | BM25-lite skill router | Reduz system prompt em ~60% (3k+ tokens → top-5 skills) |
| [#3950](https://github.com/HKUDS/nanobot/pull/3950) | FAQ documentation | Seção FAQ para onboarding |

### Novas features solicitadas em issues

| # | Demanda | Viabilidade |
|---|---------|------------|
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | exec tool com venv pip funcional | Baixa complexidade — ajuste de PATH order |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | Toggle global para Dream cron job | Config simples, baixa fricção |
| [#3948](https://github.com/HKUDS/nanobot/issues/3948) | Remover/desabilitar Dream skill | Usuário solicita remoção completa — controverso |

**Sinais de tendência:**
- Expansão agressiva de providers: Codex, xAI Grok, Novita, Skywork, Ollama (image) — NanoBot se posiciona como hub multi-provider
- Memory de longo prazo em redesign — projeto estrutural para MECE
- UX/WebUI em iteração contínua — sidebar, chat persistence, keyboard shortcuts

---

## 7. Resumo de Feedback dos Usuários

### Dores documentadas

**1. Incontrolabilidade do Dream system (#3948, #3885)**
> "Este功能对我来说是个困扰...重复性还很高...这种不可控的，真的很烦人"
- Usuários não querem Dream rodando automaticamente
- CONSISTÊNCIA: duas issues independentes sobre mesmo tema
- Implicação: feature intrusive que não respeita preferências configuradas

**2. WebUI instável em produção (#3790, #3884, #3945)**
- Display荒谬, conversation fecha, duplicate errors
- Pattern: WebUI como ponto de dor recorrente
- Severidade: impede uso diário para alguns usuários

**3. exec tool quebrado para workflows Python (#3934)**
- Não consegue instalar packages via pip
- Bloco para automação e scripting
- Workaround atual inexistente

**4. restrictToWorkspace muito restritivo (#3931)**
- Bloqueia curl/wget legítimos para APIs externas
- Falso positivo do safety guard

### Casos de uso emergentes

- **Xiaomi MiMo integration** (documentado via #3617/#3619): usuários corporativos usando LLM de provedores asiáticos
- **Docker deployment**: WebUI inacessível via container — necessidade real de exposed endpoints
- **Group chat Telegram/Feishu**: demanda por buffering inteligente para não spammar o agent

---

## 8. Backlog que Merece Atenção

| # | Tipo | Age | Status | Prioridade |
|---|------|-----|--------|-----------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | Bug | 7 dias | CLOSED (14 comments) | ⚠️ Verificar se realmente resolved — sem PR visível |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | Feature | 6 dias | OPEN | ⭐ Alta — BM25 router reduz 60% tokens |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | Feature | 1 dia | OPEN | ⭐ Crítica — MECE memory redesign |
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | Bug | 2 dias | OPEN | 🔴 Alta — bloqueia pip workflows |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | Enhancement | 4 dias | OPEN | 🟡 Média — toggle Dream |
| [#3948](https://github.com/HKUDS/nanobot/issues/3948) | Enhancement | 1 dia | OPEN | 🟡 Decisão — remove Dream ou adiciona toggle? |

### Recomendações

1. **Confirmar resolução de #3790** — 14 comentários mas sem PR visible; pode estar reopen risk
2. **Priorizar #3952** (MECE memory) — problema estrutural afeta qualidade de longo prazo
3. **Engajar #3934** — 2 dias sem resposta oficial, usuário demonstrou análise técnica completa
4. **Decidir direção do Dream** — duas issues conflitantes (#3885 toggle vs #3948 remove); precisa definição de produto

---

*Relatório gerado automaticamente com base em dados GitHub de HKUDS/nanobot • Período: 2026-05-21 a 2026-05-22*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-22

---

## 1. Panorama do Dia

O Hermes Agent demonstra **alta atividade** em 22 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A comunidade mantém um ritmo intenso de contribuições: 34 PRs abertos e 16 merged/fechados, indicando uma pipeline saudável de código. Entre os destaques, há correções críticas de segurança (proteção contra escrita em `~/.hermes/.env`), múltiplas correções no toolset `computer_use`, e uma nova integração com Bitwarden Secrets Manager. O estado geral do projeto reflete uma base de código ativa, mas com várias regressões e bugs reportados nos componentes de TUI, gateway e ferramentas de automação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões entre 2026-05-21 e 2026-05-22. Isso pode indicar que a equipe está em ciclo de desenvolvimento interno ou preparando uma release consolidada. Recomenda-se monitorar a branch `main` para próximas publicações.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (16 total nas últimas 24h)

| PR | Descrição | Impacto |
|---|---|---|
| [#17078](https://github.com/NousResearch/hermes-agent/pull/17078) | **fix(security): deny writes to global ~/.hermes/.env** | 🔴 **Crítico** — Fecha brecha de segurança que permitia sobrescrever credenciais globais |
| [#30044](https://github.com/NousResearch/hermes-agent/pull/30044) | fix(voice): chunk oversized CLI recordings | Corrige falha de transcrição em gravações >25MB |
| [#30046](https://github.com/NousResearch/hermes-agent/pull/30046) | fix(computer_use): preserve app context + element label parsing (bugs 2 & 5) | Resolve 2 de 5 bugs do `computer_use` toolset |
| [#24242](https://github.com/NousResearch/hermes-agent/pull/24242) | fix(computer_use): same as #30046 (salvage) | Backport da correção para branch estável |
| [#30042](https://github.com/NousResearch/hermes-agent/pull/30042) | fix(skills): prune dependency/venv dirs from all skill scanners | Elimina falsos positivos no discovery de skills |
| [#30009](https://github.com/NousResearch/hermes-agent/pull/30009) | fix(voice): chunk oversized CLI recordings (original) | Correção original para o bug de voz |
| [#29968](https://github.com/NousResearch/hermes-agent/pull/29968) | fix(skills): skip dependency dirs in skill scan | Pré-cursor do #30042 |
| [#30035](https://github.com/NousResearch/hermes-agent/pull/30035) | feat(secrets): Bitwarden Secrets Manager integration | ✨ **Feature** — Gerenciamento seguro de credenciais |
| [#16840](https://github.com/NousResearch/hermes-agent/pull/16840) | fix(cli): show effective terminal timeout in /config | Melhora debugging de configuração |
| [#11071](https://github.com/NousResearch/hermes-agent/pull/11071) | fix(pairing): preserve directory ownership for root writes | Corrige regressão Docker em pairing |
| [#30036](https://github.com/NousResearch/hermes-agent/pull/30036) | fix(ci): clear latest main blockers | Desbloqueia CI da main |
| [#30051](https://github.com/NousResearch/hermes-agent/pull/30051) | fix(computer-use): surface app=... filter no-match | Bug 1 do computer_use |

**Avanços principais:**
- **Segurança reforçada** com proteção do arquivo global `.env`
- **Computer_use toolset** em processo de correção completa (5 bugs — 3 resolvidos, 2 em andamento)
- **Integração Bitwarden** adicionada para gestão de secrets

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | 👍 | Relevância |
|---|---|---|---|---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Bug | **31** | 4 | `Response truncated` em long-form responses |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Feature | 15 | **24** | Temas de Dashboard difíceis de ler |
| [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) | Bug | 2 | 2 | Infinite retry loop com LLMs locais |
| [#11814](https://github.com/NousResearch/hermes-agent/issues/11814) | Feature | 2 | 2 | `smart_model_routing` configurável |
| [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) | Bug | 2 | 2 | Hermes não funciona via Claude CLI |

### Análise dos Temas

**#7237 — Response Truncation (Mais comentada, 31 comentários)**
Esta é a issue com maior volume de discussão, indicando um problema recorrente em diferentes canais (CLI chat, Telegram, Discord, Slack). A truncation de respostas longas afeta diretamente a experiência do usuário em cenários produtivos. A comunidade está ativamente buscando workarounds e diagnosticando causas raiz.

**#18080 — Dashboard Themes (Mais reações, 24 👍)**
A maior quantidade de "likes" sinaliza que a experiência visual do Dashboard é uma dor generalizada. Os temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose) usam fontes serif com baixo contraste, prejudicando legibilidade. Esta é uma demanda clara por UX improvement.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Críticos)
| Issue | Descrição | Status |
|---|---|---|
| [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) | Gateway exits 0 mid-turn com `memory.provider: byterover` (SIGPIPE flood) | OPEN |
| [#22986](https://github.com/NousResearch/hermes-agent/issues/22986) | Retry rate ~8x maior post-v0.13.0 no Codex APIConnectionError | OPEN |

#### 🟠 P2 (Altos)
| Issue | Descrição | Status |
|---|---|---|
| [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) | Dashboard Chat: Ctrl+V paste quebrado, image paste não suportado | OPEN |
| [#29782](https://github.com/NousResearch/hermes-agent/issues/29782) | Voice para Telegram não funciona no Docker | OPEN |
| [#30029](https://github.com/NousResearch/hermes-agent/issues/30029) | TUI slash completion: `/model` desaparece após space+backspace | OPEN |
| [#30007](https://github.com/NousResearch/hermes-agent/issues/30007) | Dashboard Chat: context-menu copy não bridge xterm selection | OPEN |
| [#29989](https://github.com/NousResearch/hermes-agent/issues/29989) | Dashboard Chat: Ctrl+C limpa prompt draft | CLOSED |
| [#17187](https://github.com/NousResearch/hermes-agent/issues/17187) | `hermes --tui` falha com `--expose-gc is not allowed in NODE_OPTIONS` | CLOSED |
| [#28818](https://github.com/NousResearch/hermes-agent/issues/28818) | Kanban scratch cleanup pode deletar diretórios reais | OPEN |
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator pode arquivar skills ativas durante umbrella pass | OPEN |
| [#29921](https://github.com/NousResearch/hermes-agent/issues/29921) | `reply_in_thread: false` não funciona no Slack | OPEN |
| [#30033](https://github.com/NousResearch/hermes-agent/issues/30033) | Direct API-key providers podem herdar stale `base_url` após migração | OPEN |
| [#30026](https://github.com/NousResearch/hermes-agent/issues/30026) | Input prompts congelam após curses menu | OPEN |

#### 🟡 P3 (Médios)
| Issue | Descrição | Status |
|---|---|---|
| [#30023](https://github.com/NousResearch/hermes-agent/issues/30023) | Kanban board lanes overflow no frame | CLOSED |
| [#29688](https://github.com/NousResearch/hermes-agent/issues/29688) | Adicionar Vosk como provider STT local | OPEN |
| [#29960](https://github.com/NousResearch/hermes-agent/issues/29960) | Track upstream lark-oapi warning/crash no Feishu | OPEN |
| [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) | Hermes não funciona via Claude CLI | OPEN |
| [#4351](https://github.com/NousResearch/hermes-agent/issues/4351) | "Too many homepages" — múltiplos sites do projeto | OPEN |
| [#30027](https://github.com/NousResearch/hermes-agent/issues/30027) | Kanban boards list leaks sqlite connections | OPEN |

**Análise de Estabilidade:**
- **P1s ativos:** 2 issues críticas em aberto, incluindo crash do gateway com memory provider específico
- **P2s em destaque:** Problemas de clipboard/paste no Dashboard (2 issues), regressão no Ctrl+C, e issues com Telegram Docker
- **P3s relevantes:** Nova demanda por Vosk STT e confusão com múltiplas homepages

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Aberto (últimas 24h)

| PR/Issue | Feature | Componentes | Status |
|---|---|---|---|
| [#30052](https://github.com/NousResearch/hermes-agent/pull/30052) | **LiteLLM provider + pi_dual prompt cache** | provider | OPEN |
| [#30050](https://github.com/NousResearch/hermes-agent/pull/30050) | Kanban auto-retry blocked gates after remediation | kanban | OPEN |
| [#30048](https://github.com/NousResearch/hermes-agent/pull/30048) | Feishu: share gateway lark client com doc/drive tools | gateway, feishu | OPEN |
| [#30040](https://github.com/NousResearch/hermes-agent/pull/30040) | **Native GSPO/RLVR Rollout Orchestrator** para Unsloth/TRL | cli | OPEN |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | **Hermes Desktop App** (Electron/Vite) | tui | OPEN |
| [#30049](https://github.com/NousResearch/hermes-agent/issues/30049) | Resolver replied/quoted message context no Discord/WhatsApp | gateway | OPEN |
| [#30045](https://github.com/NousResearch/hermes-agent/issues/30045) | Update Telegram status messages em vez de appendar | gateway, telegram | OPEN |
| [#30047](https://github.com/NousResearch/hermes-agent/pull/30047) | Docs: explain kanban dependency gating | docs | OPEN |
| [#30043](https://github.com/NousResearch/hermes-agent/pull/30043) | Honor HERMES_PROFILE env var em get_hermes_home() | cli | OPEN |
| [#30035](https://github.com/NousResearch/hermes-agent/pull/30035) | **Bitwarden Secrets Manager integration** (merged) | secrets | CLOSED |
| [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) | Extender image_gen schema para reference_image_urls | plugins, vision | OPEN |
| [#29922](https://github.com/NousResearch/hermes-agent/issues/29922) | Add free_response_channels config no Slack | gateway, slack | OPEN |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) | Add in-run quality gates com bounded retry | agent, cron | OPEN |
| [#30020](https://github.com/NousResearch/hermes-agent/issues/30020) | Cron: support prompt_file field para carregar prompts do disco | cron | OPEN |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes para Dashboard | tui | OPEN |
| [#11814](https://github.com/NousResearch/hermes-agent/issues/11814) | smart_model_routing configurável via config.yaml | agent | OPEN |
| [#29688](https://github.com/NousResearch/hermes-agent/issues/29688) | Add Vosk como provider STT local | tool, tts | OPEN |

### Sinais de Roadmap

1. **Desktop App** (#20059) — App Electron/Vite com chat, composer, voice controls em desenvolvimento ativo
2. **LiteLLM Provider** (#30052) — Expansão de providers com cache strategy
3. **RL Training** (#30040) — Orquestrador nativo para GSPO/RLVR com Unsloth/TRL
4. **Bitwarden Integration** (#30035) — Finalizada, sinaliza tendência de melhor gestão de secrets
5. **Kanban Automation** (#30050) — Retry de gates bloqueados após remediação

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Impacto |
|---|---|---|
| **UX do Dashboard** | Temas hard-to-read, lanes do Kanban overflow, clipboard quebrado | Alto — afeta uso diário |
| **Integridade de Dados** | Curator arquivando skills ativas, Kanban deletando diretórios reais | Crítico — perda potencial de dados |
| **Estabilidade de Gateway** | SIGPIPE flood com memory.provider: byterover, crashes no TUI | Crítico — utilidade comprometida |
| **Truncation de Respostas** | Long-form responses sendo cortadas em CLI, Telegram, Discord | Alto — experiência degradada |
| **LLMs Locais** | Infinite retry loops com modelos locais, stream timeouts | Médio — afeta usuários on-prem |
| **Docker/Telegram** | Voice não funciona em container, setup complexo | Médio — barreira de entrada |
| **Claude CLI** | Integração não funciona com Claude CLI | Baixo — nicho específico |

### Cenários de Uso Observados

- **Raspberry Pi 4** com 4GB rodando Hermes via Telegram (#29688) — hardware limitado mas funcional
- **macOS 26.4.1** com `computer_use` toolset em teste extensivo (#24170)
- **Ambientes Docker** com pairing e voice em containers (#29782, #11071)
- **Multi-profile** com gateways separados via `HERMES_PROFILE` (#30043)

### Satisfação/Insatisfação

| Indicador | Status |
|---|---|
| Bugs com alta discussão (#7237) | ⚠️ Insatisfação com truncation |
| Feature com mais 👍 (#18080) | ⚠️ Demanda por UX melhor |
| PRs de segurança merged (#17078) | ✅ Resposta rápida a vulnerabilidades |
| Computer_use bugs sendo corrigidos | ✅ Progresso visível |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Comentários | Prioridade | Observação |
|---|---|---|---|---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | ~42 dias | 31 | Alta | Bug crítico com alta discussão — precisa resolução definitiva |
| [#4351](https://github.com/NousResearch/hermes-agent/issues/4351) | ~52 dias | 1 | Baixa | Múltiplas homepages causam confusão — questão de brand |
| [#11814](https://github.com/NousResearch/hermes-agent/issues/118

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-22

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** no dia de hoje, com 29 PRs atualizados e 9 issues resolvidas nas últimas 24h. A equipe mantém um ritmo intenso de desenvolvimento com o lançamento do nightly build `v0.2.8-nightly.20260521.33f9d638`, indicando progresso contínuo na versão 0.2.8. O volume de dependabot PRs (12) demonstra atenção constante à manutenção de dependências atualizadas. A comunidade está ativa com discussões relevantes sobre arquitetura de agentes, provider de IA e otimizações de sistema, sinalizando um projeto saudável com contribuições diversificadas.

---

## 2. Lançamentos

### 🌙 Nightly Build

- **Versão:** `v0.2.8-nightly.20260521.33f9d638`
- **Status:** Automatizado — pode conter instabilidades
- **Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **Nota:** Este é um build noturno automatizado. Usuários que necessitam de estabilidade devem utilizar releases oficiais.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (10 total nas últimas 24h)

| # | Título | Impacto |
|---|--------|---------|
| [#2812](https://github.com/sipeed/picoclaw/pull/2812) | Make a Dockerfile in the root | Facilita deploy com container Docker |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | feat(telegram): add topic group trigger overrides | Suporte a overrides por tópico no Telegram |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | feat(agents): add working summary tool feedback | Feedback visual durante execução de ferramentas |
| [#2777](https://github.com/sipeed/picoclaw/pull/2777) | fix(cron): suppress feedback for scheduled turns | Corrige vazamento de mensagens em jobs cron |
| [#2776](https://github.com/sipeed/picoclaw/pull/2776) | fix(telegram): stop typing for topic replies | Limpa estado de digitação em respostas de tópico |
| [#2772](https://github.com/sipeed/picoclaw/pull/2772) | fix(telegram): Preserve Telegram forum topic for message tool sends | Preserva roteamento de tópico em ferramentas de mensagem |
| [#2901](https://github.com/sipeed/picoclaw/issues/2901) | Feature: Native GPT4Free (g4f) Support + Automatic Model Fallback | Suporte a GPT4Free como provider alternativo |
| [#2911](https://github.com/sipeed/picoclaw/pull/2911) | fix(i18n): sync locale strings for model provider UI | Sincronização de traduções e locale pt-BR |

### Destaque: Melhorias no Telegram

A equipe **bogdanovich** contributed significantly com 5 PRs focados em melhorias no Telegram (foro topics, typing states, message routing), indicando priorização da integração com Telegram.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | [BUG] Didn't retry if meet LLM call failed | 15 | Bug/Enhancement |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆 | 4 | Feature |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Multi-user group channels: conversation history lacks sender attribution | 4 | Bug |
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) | CPU, Memory and IO optimizations | 2 | Enhancement |

### Análise das Demandas

**🔴 Issue Crítica: Retry em chamadas LLM (#629)**
- Problema de robustez em produção: Tasks hang sem retry quando servidor retorna HTTP 500
- 15 comentários indicam debate ativo sobre estratégia de retry
- **Link:** https://github.com/sipeed/picoclaw/issues/629

**🟠 Arquitetura Multi-Agent (#2775)**
- Sub-agents herdando AGENT.md do root agent causam confusão de papéis (Planner, Builder, Auditor)
- Demanda por isolamento de system prompts por角色
- **Link:** https://github.com/sipeed/picoclaw/issues/2775

**🟡 Atribuição de Mensagens em Canais Grupais (#2702)**
- Usuários em Discord/comunidades compartilham sessão, mas histórico não identifica remetente
- Impacta experiência em canais multi-usuário
- **Link:** https://github.com/sipeed/picoclaw/issues/2702

---

## 5. Bugs e Estabilidade

### Bugs Reportados (7 fechados nas últimas 24h)

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | 🔴 Alta | LLM call failed não faz retry | **CLOSED** |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 🟡 Média | Histórico sem atribuição de remetente | **CLOSED** |
| [#2798](https://github.com/sipeed/picoclaw/issues/2798) | 🟡 Média | PDF Stream Data error no Telegram | **CLOSED** |
| [#2795](https://github.com/sipeed/picoclaw/issues/2795) | 🟡 Média | Histórico mostra apenas última mensagem | **CLOSED** |
| [#2787](https://github.com/sipeed/picoclaw/issues/2787) | 🟢 Baixa | Mensagens sem timestamp individual | **CLOSED** |

### Observações

- **PicoClaw vs OpenClaw**: Bug #2798 específico do PicoClaw (mesmo PDF funciona no OpenClaw com mesmo backend)
- **Timestamp issue (#2787)**: API `/api/sessions/{id}` não retorna timestamp por mensagem — todos usam `session.updated`
- **Histórico incompleto (#2795)**: Compressão de sessão afetando visibilidade do histórico para usuários

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) | CPU, Memory and IO optimizations | corporatepiyush | 🔴 Alto |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | feat(provider): add NEAR AI Cloud provider | PierreLeGuen | 🟡 Médio |
| [#2914](https://github.com/sipeed/picoclaw/pull/2914) | feat: add request-scoped context policies | lxowalle | 🟡 Médio |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | feat(agent): support frontmatter tool policy filters | bogdanovich | 🟢 Baixo |
| [#2912](https://github.com/sipeed/picoclaw/issues/2912) | Suggestion: add FUNDING.yml | nikolasdehor | 🟢 Baixo |

### Análise de Roadmap

**🚀 NEAR AI Cloud Provider (#2917)**
- Adiciona suporte a `nearai` protocol como provider OpenAI-compatible
- Expande opções de modelos para usuários que buscam alternativas
- **Link:** https://github.com/sipeed/picoclaw/pull/2917

**⚙️ Request-scoped context policies (#2914)**
- Controle granular via `agents.defaults.turn_profile`
- Permite toggle de histórico, system context, skills e tools por requisição
- **Link:** https://github.com/sipeed/picoclaw/pull/2914

**🔧 Tool Policy Filters via Frontmatter (#2838)**
- Estende `AGENT.md` com políticas allow/deny e glob patterns
- Consolida controle de ferramentas e MCP servers
- **Link:** https://github.com/sipeed/picoclaw/pull/2838

**💰 FUNDING.yml (#2912)**
- Adição simples para facilitar apoio financeiro via GitHub Sponsors
- Baixa prioridade mas melhoria na sustentabilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Falha em retries de LLM** | Crítica | Produtividade em tasks longas comprometida |
| **Confusão de identidade em multi-agent** | Alta | Workflows complexos falham silenciosamente |
| **Histórico incompleto** | Média | Usabilidade em conversas longas prejudicada |
| **PDFs não funcionam no Telegram** | Média | Integração com workflows de documentos quebrada |

### Cenários de Uso Reportados

- **Long tasks em produção**: Usuários executando tarefas extensas encontram HTTP 500 sem retry
- **Multi-agent workflows**: Arquiteturas com Planner/Builder/Auditor falham por herança incorreta de system prompt
- **Docker deployment**: Demanda por Dockerfile na raiz para simplificar containerização
- **Telegram forum topics**: Uso em supergroups com topics específicas requer comportamento customizado

### Satisfação Geral

O projeto demonstra **saúde positiva**:
- ✓ Atividade constante de contributors (bogdanovich com múltiplos PRs de qualidade)
- ✓ Correções rápidas de bugs críticos (7 issues fechadas em 24h)
- ✓ Manutenção de dependências em dia (12 PRs de dependabot)
- ⚠️ Algumas features pendentes há semanas (issue #2775 desde 2026-05-05)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há > 1 semana

| # | Título | Criado | Atualizado | Status |
|---|--------|--------|------------|--------|
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆 | 2026-05-05 | 2026-05-21 | CLOSED |
| [#2798](https://github.com/sipeed/picoclaw/issues/2798) | PDF Stream Data error in Telegram Bot | 2026-05-07 | 2026-05-21 | CLOSED |
| [#2795](https://github.com/sipeed/picoclaw/issues/2795) | 对话历史只能看到对话中最后一条用户消息 | 2026-05-07 | 2026-05-21 | CLOSED |

### Ações Recomendadas

1. **Priorizar retry mechanism (#629)** — 15 comentários indicam urgência, mas ainda não há indication de implementação
2. **Revisar PDF handling no Telegram** — Funciona no OpenClaw, precisa de investigation específica
3. **Validar timestamp API (#2787)** — Endpoints de sessão precisam retornar metadados por mensagem
4. **Considerar Dockerfile na raiz (#2812)** — Facilitação de deployment pode reduzir barrier to entry

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues fechadas (24h) | 7 |
| PRs abertos (24h) | 19 |
| PRs fechados/merged (24h) | 10 |
| Dependabot PRs | 12 |
| Contributors ativos | 8+ |
| Releases (24h) | 1 nightly |
| Taxa de resolução | 77% (7/9 issues) |

---

*Relatório gerado em 2026-05-22 com base em dados do GitHub do projeto PicoClaw (sipeed/picoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-22

---

## 1. Panorama do Dia

O projeto IronClaw manteve **altíssima atividade** nas últimas 24 horas, com 22 issues e 45 PRs atualizados. O foco central permanece na migração **Reborn** — a arquitetura de nova geração do sistema — com múltiplas tranches de trabalho avançando em paralelo (lanes 3, 9, steps 1-3 de autenticação). A equipe demonstrou maturidade no processo de revisão, com 23 PRs finalizados مقابل 22 abertos. Pontos de atenção: falha no E2E noturno, bug no botão "Retry" de missões, e um gap de publishing entre o repositório GitHub (v0.27.0) e o crates.io (v0.24.0). A saúde geral é boa, com avanço consistente, mas há sinais de deuda técnica e bugs de UI que merecem tratamento urgente.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

| Release | Status | Observação |
|---------|--------|------------|
| — | — | Sem releases no período |

**Gap crítico identificado:** O repositório GitHub possui tags até `ironclaw-v0.27.0` (29/abr/2026), mas o crates.io está bloqueado em `0.24.0` (31/mar/2026). Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) tracking essa discrepância — consumidores downstream estão presos a uma versão antiga por causa de CVEs no wasmtime 28.x.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (23 total)

| PR | Tamanho | Escopo | Contribuidor | Impacto |
|----|---------|--------|--------------|---------|
| [#3759](https://github.com/nearai/ironclaw/pull/3759) | L | Product workflow ledger idempotente (libSQL + PostgreSQL) | core | Adiciona ledger de idempotência com lease semantics para ações não-terminais |
| [#3827](https://github.com/nearai/ironclaw/pull/3827) | M | Agrupamento de bindings de API host first-party | core | Normaliza InvocationServices e agrupa bindings concretos |
| [#3826](https://github.com/nearai/ironclaw/pull/3826) | XL | Reborn process port seam | core | Seam de porta de processo + implementação local para execução de comandos |
| [#3740](https://github.com/nearai/ironclaw/pull/3740) | L | WebUI error taxonomy | experienced | Taxonomy estável de erros para Reborn services |
| [#3849](https://github.com/nearai/ironclaw/pull/3849) | S | Cobertura de isolamento project/agent | core | E2E para isolamento de binding/idempotency/history |
| [#3847](https://github.com/nearai/ironclaw/pull/3847) | XL | Skill bundle source filesystem-backed | core | FilesystemSkillBundleSource sobre ScopedFilesystem |
| [#3852](https://github.com/nearai/ironclaw/pull/3852) | M | Follow-up de policy review (workflow) | core | Timeout de 5s em before-inbound policy |

**Avaliação:** Avanço significativo na infraestrutura Reborn — skill context, process port, error taxonomy e isolamento. O padrão de PRs pequenos de teste/follow-up indica boa disciplina de revisão post-merge.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento (comentários/reações)

| Issue | Status | Comentários | Tema |
|-------|--------|------------|------|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | ✅ Closed | 13 | **Reborn: AgentLoopHost facade blocker** — tracker de arquitetura para TurnCoordinator |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | ✅ Closed | 11 | **Reborn: event substrate integration tests** — teste de produtor de eventos V1 |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | ✅ Closed | 8 | **HTTP egress compartilhado para WASM/Script/MCP** — egress mechanics |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | 🔵 Open | 7 | **[EPIC] Reborn product surface migration** — preservação de comportamento usuário/operador |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 🔵 Open | 7 | **Gap crates.io vs GitHub releases** — consumidores presos em v0.24.0 |
| [#3087](https://github.com/nearai/ironclaw/issues/3087) | 🔵 Open | 5 | **Compose ironclaw_host_runtime services** — composição de serviços |
| [#3092](https://github.com/nearai/ironclaw/issues/3092) | ✅ Closed | 3 | **Reference AgentLoop implementations** — DefaultChatLoop + tool-capable |

### Análise

A comunidade demonstra **alto interesse na migração Reborn** — 4 das 5 issues mais comentadas são blockers Epics da transição. O gap de publishing no crates.io (#3259) é o único tema "não-Reborn" com engajamento significativo, indicando frustração de consumidores externos. Não há thumbs-up registrados nas issues, mas o volume de comentários sugere validação implícita.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **🔴 Alta** | [#3839](https://github.com/nearai/ironclaw/issues/3839) | Botão "Retry" de missão falha 调用 fire endpoint mas retorna `fired: false` | 🔵 Open |
| **🔴 Alta** | [#3821](https://github.com/nearai/ironclaw/issues/3821) | `Thread::restore_from_messages` descarta orphan assistant rows, impede injeção de contexto | 🔵 Open |
| **🟡 Média** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **Nightly E2E failed** — Full E2E com falha em features | 🔵 Open |
| **🟡 Média** | [#3838](https://github.com/nearai/ironclaw/issues/3838) | Issue "Failed" sem descrição — possível report automático | ✅ Closed |

### Avaliação

Dois bugs **críticos de usabilidade** em aberto:
- **#3821** quebra o restore de threads e impacta diretamente a experiência do agente
- **#3839** é um bug de UI puro — botão funcional que não funciona

A falha de E2E noturno (#3447) é recorrente e precisa de investigação — pode indicar regressão silenciosa. Recomenda-se priorização imediata dos dois bugs de alta severidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| Feature | Escopo | Link | Observação |
|---------|--------|------|------------|
| **Per-channel MCP + tool filtering** | canal, config | [#1378](https://github.com/nearai/ironclaw/pull/1378) | Sistema de routing JSON por canal (Slack/Telegram/web) — XL, risk medium |
| **WeCom channel** | canal, wasm | [#2394](https://github.com/nearai/ironclaw/pull/2394) | Canal standalone para Enterprise WeChat (bot-first, DM only) — XL, risk high |
| **IronHub install from CLI/agent** | ferramenta, cli | [#3737](https://github.com/nearai/ironclaw/pull/3737) | Install tools/skills by name at runtime — XL, DB migration, risk high |
| **Improve channel badges** | UI | [#3840](https://github.com/nearai/ironclaw/issues/3840) | Visual consistente com ícones e cores por canal |
| **Routine notifications context** | agente | [#1519](https://github.com/nearai/ironclaw/issues/1519) | Notificações de rotina sem contexto no chat do usuário |

### Sinais de Roadmap

O roadmap está fortemente concentrado na **Reborn migration** via lanes:

| Lane | Escopo | Link |
|------|--------|------|
| Lane 3 | Secrets + egress substrate wiring | [#3803](https://github.com/nearai/ironclaw/issues/3803) |
| Lane 9 | Google Calendar + Gmail nativas | [#3829](https://github.com/nearai/ironclaw/issues/3829) |
| Step 1 | Auth contracts + fake-service tests | [#3810](https://github.com/nearai/ironclaw/issues/3810) |
| Step 2 | Product auth + secrets composition | [#3811](https://github.com/nearai/ironclaw/issues/3811) |
| Step 3 | OAuth callbacks + setup continuations | [#3812](https://github.com/nearai/ironclaw/issues/3812) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Prioridade |
|-----|----------|------------|
| **Publish defasado no crates.io** | Consumidores externos não recebem updates há ~1 mês (v0.24.0 vs v0.27.0) | 🔴 Crítica |
| **Retry de missão não funciona** | UI mostra botão funcional que falha silenciosamente | 🔴 Alta |
| **Restore de thread perde contexto** | Injeção de contexto out-of-band impedida por drop de orphan rows | 🔴 Alta |
| **Routine notifications isoladas** | Notificações vão para conversa dedicada, não aparecem no thread do usuário | 🟡 Média |
| **notify_channels herda fonte indevidamente** | Missões criadas no WebUI Chat herdam source-channel da conversa visualizada | 🟡 Média |

### Cenários de Uso Emergentes

- **Multi-canal com scoping por canal** (#1378): deployments Slack+Telegram+web precisam de filtragem de tools/MCP por canal
- **IronHub runtime install** (#3737): desejo de instalar skills em tempo de execução, não só build-time
- **WeChat documentação** (#3680): contributor adicionou docs após demanda da comunidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Criado | Atualizado | Gap | Link |
|-------|--------|------------|-----|------|
| Routine notifications context | 2026-03-21 | 2026-05-21 | ~2 meses | [#1519](https://github.com/nearai/ironclaw/issues/1519) |
| Per-channel MCP/filtering PR | 2026-03-18 | 2026-05-21 | ~2 meses | [#1378](https://github.com/nearai/ironclaw/pull/1378) |
| WeCom channel PR | 2026-04-13 | 2026-05-21 | ~1 mês | [#2394](https://github.com/nearai/ironclaw/pull/2394) |
| Nightly E2E failed | 2026-05-10 | 2026-05-21 | 11 dias | [#3447](https://github.com/nearai/ironclaw/issues/3447) |

### Avaliação do Backlog

**#1519** (Routine notifications) é a issue mais antiga sem resolução ativa — aberta há ~2 meses com apenas 1 comentário. Este é um padrão de comunidade que sinaliza possível baixa prioridade interna, mas demanda real dos usuários.

**#1378** e **#2394** são PRs de contributors externos (experienced/new) em aberto há 1-2 meses. A falta de resposta pode desmotivar contribuidores.

---

## Métricas Sintéticas do Dia

| Dimensão | Valor | Avaliação |
|----------|-------|-----------|
| Issues ativas/abriertas | 14/22 | 🟢 Saudável |
| PRs abertos/fechados | 22/23 | 🟢 Equilibrado |
| Bugs alta severidade | 2 | 🟡 Atenção |
| Releases | 0 | 🔴 Gap crates.io |
| PRs Reborn-related | ~15 de 45 | 🟢 Avanço consistente |
| Backlog >7 dias sem resposta | 4 | 🟡 Risco de desmotivação |

---

*Relatório gerado automaticamente com base em dados do GitHub de nearai/ironclaw para 2026-05-22.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-22

## 1. Panorama do Dia

O ecossistema CoPaw apresenta **alta atividade de desenvolvimento** no período analisado, com 26 issues e 27 PRs atualizados nas últimas 24 horas. A comunidade demonstra foco intenso em **estabilidade de canais de comunicação** (WeChat, DingTalk, Feishu) e **experiência do usuário no desktop**, com destaque para o PR em andamento de suporte a Tauri 2.x. Não houve releases formais publicadas hoje, indicando que a equipe pode estar em ciclo de preparação para uma próxima versão. O volume de issues fechadas (8) e PRs merged (19) sugere um ritmo de trabalho produtivo, porém com **dívida técnica acumulada** em integrações de terceiros.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

> **Observação:** A versão mais recente mentioned nos issues é `v1.1.8.post1`. A ausência de releases pode indicar que a equipe está consolidando correções antes de um novo tag, ou que o ciclo de release está em transição.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (19 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | **fix(WeChat): message dedup bypass e infinite retry em context_token expirado** | **Crítico** — Resolve duplicação de mensagens e loops infinitos no canal WeChat iLink |
| [#4603](https://github.com/agentscope-ai/QwenPaw/pull/4603) | Adiciona warning de headless browser no tool response | Experiência — Orienta usuários sobre verificação ao usar browser headless |
| [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | **Skill Market unificado (3 provedores) + refatoração para httpx** | **Funcionalidade** — Melhora mercado de skills com busca assíncrona e paginação |
| [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) | Cron jobs isolados em sessão unificada | Usabilidade — Melhora organização de tarefas agendadas |
| [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) / [#4598](https://github.com/agentscope-ai/QwenPaw/pull/4598) | **Persistência de drafts de chat** | UX — Corrige perda de texto ao navegar entre páginas |
| [#4569](https://github.com/agentscope-ai/QwenPaw/pull/4569) | Adiciona user deny info na tool response | Segurança — Melhora transparência em tool calls negados |
| [#4567](https://github.com/agentscope-ai/QwenPaw/pull/4567) | File block processing no message handler | Funcionalidade — Suporte a blocos de arquivo em mensagens |
| [#4552](https://github.com/agentscope-ai/QwenPaw/pull/4552) | Skip init com `QWENPAW_AUTO_INITIALIZATION=0` | DevOps — Flexibiliza deploy em containers |
| [#4591](https://github.com/agentscope-ai/QwenPaw/pull/4591) | Completa skill validation | Qualidade — Validação consistente de frontmatter |
| [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599) | Dark mode para pet import drop zone | UX — Corrige visibilidade no tema escuro |

### PRs Em Review (8 abertos)

| PR | Descrição | Status |
|----|-----------|--------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **feat: Tauri 2.x desktop app support** | Em progresso — Major feature para desktop |
| [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) | e2e test migration | Em progresso |
| [#4597](https://github.com/agentscope-ai/QwenPaw/pull/4597) | fix(WeChat): report send failure via API | Em progresso |
| [#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) | fix(console): Whisper transcription respected | Em progresso |
| [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) | fix(DingTalk): decode Chinese filenames | Em progresso |
| [#4595](https://github.com/agentscope-ai/QwenPaw/pull/4595) | add max_context_length to local models | Em progresso |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários > 3)

| Issue | Título | Comentários | Tendência |
|-------|--------|-------------|-----------|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push failures (context_token expiry) | **14** | 🔥 Crítico |
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) | Performance degrade com 40+ agents | **8** | ⚠️ Performance |
| [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) | Voice transcription usa browser API ao invés de Whisper | **4** | Funcionalidade |
| [#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585) | Plugin tools não descobertos no WeCom | **4** | Canal |
| [#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604) | DingTalk API não envia mensagens | **4** | Canal |
| [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | **Lossless Context Compression (DAG + CJK token fix)** | **2** | 🚀 Feature request |

### Análise de Demandas

**Canal WeChat iLink é o epicentro de problemas** — 3 issues independentes (#4477, #4521, #4546, #4576, #4597, #4612) relatam problemas relacionados:
- Expiração de `context_token` sem retry
- Mensagens duplicadas por falha de dedup
- Envio de mídia (imagem/arquivo) instável
- API retorna sucesso mas mensagem não chega

**Performance e escala** emergem como preocupação (#4559) — Usuários com 40+ agentes experimentam lentidão significativa, possivelmente ligada a como agentes são gerenciados em memória.

**Feature de compressão de contexto sem perda** (#4551) é o pedido mais estratégico — Almeja resolver problema fundamental de perda de contexto em longas sessões.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Exemplos |
|------------|-------|----------|
| 🔴 Crítico | 4 | WeChat token expiry (#4477), Memory loss on model switch (#4581), Message dedup bypass (#4546), ACP session conflict (#4611) |
| 🟠 Alta | 3 | Performance 40+ agents (#4559), Feishu CardKit stream (#4572), Whisper transcription ignored (#4556) |
| 🟡 Média | 5 | Plugin discovery (#4585), DingTalk filename encoding (#4586), NO_PROXY not working (#4607), Gemini max_tokens error (#4605), Dark mode pet import (#4592) |
| 🟢 Baixa | 4 | Console style inconsistency (#4593), Topic list wipes (#4519), Context window UI (#4590), Backend orphan processes (#4587) |

### Bugs Críticos Abertos

| Issue | Problema | Urgência |
|-------|----------|----------|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | Cron push falha quando context_token expira (ret=-2) sem retry | **Alta** — Afeta automações |
| [#4546](https://github.com/agentscope-ai/QwenPaw/issues/4546) | Mensagens duplicadas por falha de dedup no iLink | **Alta** — Já tem PR #4576 |
| [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) | Long-term memory loss ao trocar modelo | **Alta** — Perda de dados do usuário |
| [#4611](https://github.com/agentscope-ai/QwenPaw/issues/4611) | ACP session não fecha após task completion | **Média** — Conflito em restart |

### Regressões Reportadas

- **v1.1.8**: Campo `max_input_length` desapareceu da UI de Run Config ([#4590](https://github.com/agentscope-ai/QwenPaw/issues/4590))
- **v1.1.8**: Feishu CardKit streaming não funciona (sequence deveria ser 1, não 0) ([#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Votes | Viabilidade |
|-------|---------|-------|-------------|
| [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | **Lossless Context Compression** (DAG-based + CJK token fix) | 2 | 🔮 Estratégica |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | Pasta `.qwenpaw` para workspace (similar a opencode) | 3 | 📋 Enhancement |
| [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | Melhorar browser automation (usar Playwright) | 2 | 🔧 Técnica |
| [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) | Plugin agent hook support (register_agent_hook) | 1 | 🧩 Extensibilidade |
| [#4606](https://github.com/agentscope-ai/QwenPaw/issues/4606) | Intervençao humana durante planejamento autonomous | 2 | 🎯 UX |

### Features em Desenvolvimento

- **Tauri 2.x Desktop App** ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) — Migração do Electron para Tauri trará melhor performance e menor footprint
- **Skill Market Unificado** ([#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518)) — 3 provedores + busca assíncrona
- **max_context_length dinâmico** ([#4595](https://github.com/agentscope-ai/QwenPaw/pull/4595)) — Auto-derive do model provider

### Sinais de Roadmap

1. **Estabilidade de canais** é prioridade — múltiplos PRs e issues sobre WeChat, DingTalk, Feishu
2. **Performance em escala** — #4559 pode indicar necessidade de otimização de memória/agentes
3. **Persistência e estado** — Drafts de chat (#4520), ACP sessions (#4611) sugerem foco em resiliência
4. **UX unificada** — Console style inconsistency (#4593) indica trabalho de design system

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Dor | Frequência |
|-----------|-----|------------|
| **Canais de Mensagem** | Inconsistência entre resposta da API e entrega real (WeChat, DingTalk) | 🔴 Alta |
| **Perda de Dados** | Memória de longo prazo perdida ao trocar modelo; drafts perdidos ao navegar | 🔴 Alta |
| **Performance** | Lentidão com muitos agentes; browser automation instável | 🟠 Média |
| **Configuração** | Variáveis de ambiente (NO_PROXY) não funcionam como esperado | 🟡 Baixa |
| **UI/UX** | Estilos inconsistentes; campos que desaparecem entre versões | 🟡 Baixa |

### Cenários de Uso Reportados

1. **Automação corporativa** — Cron jobs para push de notificações via WeChat/DingTalk (afetado por bugs de token e dedup)
2. **Multi-agent systems** — Usuários rodando 40+ agentes simultaneamente (performance issue)
3. **Integração com conhecimento** — Plugins de knowledge base (LightRAG) buscando hooks mais profundos
4. **Desktop + API hybrid** — Uso simultâneo de desktop app e API HTTP para canais

### Satisfação/Insatisfação

**Positivo:**
- Capacidade de plugins e skills é bem recebida
- Desktop pet feature tem adoção
- Suporte a múltiplos canais (WeChat, DingTalk, Feishu, WeCom, OneBot)

**Negativo:**
- Bugs de estabilidade em canais são frustrantes (API diz "sucesso" mas não entrega)
- Regressões entre versões (v1.1.8 perdeu campos de config)
- Documentação de variáveis de ambiente insuficiente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054) | **~43 dias** | OneBot cron não envia para grupos | ⚠️ Esperando triagem |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | Referenciado em #4559 | Performance com muitos agentes | 🔗 Duplicado/Relacionado |

### Issues Estratégicas Pendentes

| Issue | Título | Por que merece atenção |
|-------|--------|------------------------|
| [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | Lossless Context Compression | Impacta uso de longo prazo; feature diferenciadora |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x Desktop | Major change; pode impactar ecosistema de plugins |
| [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | Browser automation com Playwright | Alternativa mais estável ao CDP |

### Recomendação de Triagem

1. **Prioridade 1**: Fixes de WeChat iLink (#4477, #4546) — já tem PRs pendentes de review
2. **Prioridade 2**: Memory loss on model switch (#4581) — perda de dados do usuário
3. **Prioridade 3**: Performance 40+ agents (#4559) — risco de escalabilidade
4. **Prioridade 4**: OneBot cron (#3054) — stale há 43+ dias

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 18 | Neutra |
| Issues fechadas (24h) | 8 | Positiva |
| PRs abertos (24h) | 8 | — |
| PRs merged/closed (24h) | 19 | **Alta** ✅ |
| Releases | 0 | — |
| Bugs críticos abertos | 4 | ⚠️ |
| Features em desenvolvimento | 6+ | Positiva |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-22. Dados sujeitos a alterações em tempo real.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-22

---

## 1. Panorama do Dia

ZeroClaw atravessa uma fase de transformação arquitetural intensa. A release **v0.8.0-beta-1** marca a transição oficial de um daemon mono-agente para um **host multi-agente**, tema que domina tanto o backlog quanto a atividade comunitária. Nas últimas 24h, o projeto registrou **21 issues** (19 abertas) e **50 PRs** (6 merged/fechados), indicando altíssimo volume de contribuições. A grande maioria das issues abertas hoje (13 de 21) são **enhancements**, sinalizando um ciclo de feature expansion impulsionado pela comunidade, enquanto bugs de alta severidade (4 abertos) demandam atenção imediata da equipe core.

---

## 2. Lançamentos

### 🆕 v0.8.0-beta-1 — Multi-Agent Host
**Data:** 2026-05-21 | **Changelog:** v0.7.5 → v0.8.0-beta-1

**Mudança paradigmática:** ZeroClaw deixa de ser um daemon de agente único para se tornar um **host multi-agente completo**. Uma única instalação agora executa múltiplos agentes nomeados lado a lado, cada um com:
- Identidade própria
- Workspace isolado
- Memória individual
- Provedor de modelo configurável
- Canais de comunicação independentes
- Perfil de segurança customizado
- Capacidade de comunicação inter-agente

**Implicações para a comunidade:**
- Usuários existentes precisarão revisar configurações (migration guide recomendada)
- Organizações ganham capacidade de isolar agentes por função/equipe
- A infraestrutura de segurança e ACLs foi significativamente expandida

**Links:**
- [Release v0.8.0-beta-1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-1)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje

| # | PR | Impacto | Descrição |
|---|-----|---------|-----------|
| **#6398** | `feat!: multi-agent runtime and schema V3` | 🔴 Crítica | Merge da arquitetura multi-agente completa — base para a beta release. Envolve todos os subsistemas (core, agent, channel, config, daemon, gateway, provider, runtime, security, 40+ channels, tools) |
| **#6839** | `feat(runtime): RPC dispatch layer and Unix socket transport` | 🟠 Alto | Extrai tipos JSON-RPC 2.0 para `zeroclaw-api::jsonrpc`, move `SessionActorQueue` para novo módulo — infraestrutura para TUI e clientes RPC |

**Análise:** O merge do PR #6398 consolida semanas de desenvolvimento na branch master, representando a maior mudança arquitetural do projeto desde sua inception. O PR #6839 complementa com a camada de transporte Unix socket, habilitando a interface TUI que a comunidade aguarda ansiosamente.

**Links:**
- [PR #6398 — multi-agent runtime and schema V3](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)
- [PR #6839 — RPC dispatch layer](https://github.com/zeroclaw-labs/zeroclaw/pull/6839)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Tipo | Comentários | 👍 | Título |
|---|------|-------------|----|--------|
| **#6059** | bug | 12 | 4 | **[Bug]: Incompatible with DeepSeek-V4 API format** |
| **#5890** | enhancement | 10 | 0 | **RFC: Multi-agent UX flow — design** |
| **#6699** | bug | 5 | 0 | **tool_filter_groups is a no-op for real MCP tools** |
| **#6808** | enhancement | 3 | 0 | **RFC: Work Lanes, Board Automation, and Label Cleanup** |

### Análise dos Temas

**🔴 DeepSeek-V4 API Compatibility (#6059):** Issue mais comentada e mais votada do período. Usuários reportam erro ao utilizar DeepSeek-V4-Pro e DeepSeek-V4-Flash, aparentemente relacionado ao "thinking mode" da API. Com 12 comentários e 4 👍, a comunidade espera resolução urgente — especialmente considerando que DeepSeek é provedor popular por custo-benefício.

**🔶 RFC Multi-Agent UX (#5890):** Embora fechada (RFC aceita), a discussão de 10 comentários demonstra que a comunidade está engajada no design do fluxo multi-agente. O próximo passo documentado é extrair para `docs/proposals/multi-agent-ux-flow.md`.

**🟡 TUI como Prioridade Explícita:** Observa-se criação coordenada de 6 issues (#6824, #6825, #6823, #6826, #6822, #6821) todas no mesmo dia (2026-05-21) sobre componentes da TUI. Isso sugere planejamento deliberado da equipe para priorizar a interface terminal na próxima release.

**Links:**
- [#6059 — DeepSeek-V4 incompatibility](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
- [#5890 — RFC Multi-agent UX](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)
- [#6699 — MCP tool_filter_groups bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
- [#6808 — RFC Work Lanes](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Count | Issues Críticas |
|------------|-------|-----------------|
| **S1 (workflow blocked)** | 3 | #6844, #6841, #6771 |
| **S2 (degraded behavior)** | 3 | #6059, #6699, #6836 |

### Bugs Críticos (S1)

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| **#6844** | Slack bot_token environment variable não funciona | 🆕 New | Duplicate de #6237 — workflow bloqueado para usuários Slack |
| **#6841** | vision_provider silenciosamente ignorado | 🆕 New | Imagens roteadas para `providers.fallback` mesmo com `[multimodal].vision_provider` configurado |
| **#6771** | Multiline Heredocs bloqueados por SecurityPolicy | ✅ Closed | Bug crítico: a própria política de segurança do ZeroClaw bloqueava seu skill interno de PR raising |

### Bugs S2 (Degraded)

- **#6059:** DeepSeek-V4 API format incompatibility (em progresso)
- **#6699:** `tool_filter_groups` não funciona para MCP tools reais — bug de prefix mismatch
- **#6836:** `setup.bat --minimal` produz 26MB ao invés de 6MB esperados no Windows

**Análise de Estabilidade:** 4 bugs de alta severidade abertos, sendo 3 novos hoje. A combinação de S1 e S2 indica regressões recentes que afetam workflows reais. A rápida resolução do bug de SecurityPolicy (#6771) é positiva.

**Links:**
- [#6844 — Slack bot_token bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)
- [#6841 — vision_provider ignored](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)
- [#6771 — Heredocs SecurityPolicy](https://github.com/zeroclaw-labs/zeroclaw/issues/6771)
- [#6836 — Windows build size](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Criadas Hoje (12 issues)

#### 🔴 Prioridade Alta (P1)
| # | Feature | Escopo |
|---|---------|--------|
| #6253 | **Zeroclaw skills support and UX** (v0.7.6) | skills, cli, loader, audit, sandbox |

#### 🟠 TUI — Prioridade Explícita da Equipe
| # | Feature |
|---|---------|
| #6824 | TUI Agent Chat — interface interativa streaming |
| #6825 | TUI UX — theming, keybindings, accessibility |
| #6823 | TUI ACP Bridge — client-side RPC connection |
| #6826 | Tracker: ZeroClaw TUI (visao geral) |
| #6822 | Adicionar zeroclaw-tui na build matrix e package managers |
| #6821 | Mover `crates/zeroclaw-tui` para `apps/tui` |

#### 🟡 Infraestrutura e Protocolo
| # | Feature |
|---|---------|
| #6837 | Runtime RPC dispatch + Unix socket transport |
| #6819 | File/attachment upload protocol |
| #6818 | `--ephemeral` daemon mode |
| #6817 | Session-scoped runtime overrides |
| #6820 | ACP protocol extensions para diff/file-proposal |
| #6827 | jina.ai como web_search provider |

### Sinais de Roadmap

1. **TUI como Produto Prioritário:** 6 issues coordenadas em um único dia indicam foco deliberado em entregar a interface terminal como alternativa ao dashboard web.

2. **Extensibilidade do Protocolo:** Novas features de upload, diff display e session overrides sugerem preparação para casos de uso enterprise.

3. **Jina.ai Integration:** Dois PRs (#6827 issue, #6833 PR) параллельно para adicionar Jina como provider de busca — comunidade quer alternativas além de Tavily/SerpAPI.

**Links:**
- [#6253 — Skills support tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)
- [#6824 — TUI Agent Chat](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)
- [#6837 — RPC dispatch layer](https://github.com/zeroclaw-labs/zeroclaw/issues/6837)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Incompatibilidade com DeepSeek-V4** | #6059 (12 comentários, 4 👍) | S2, P1 |
| **Slack bot_token não aceita env var** | #6844 (S1 — duplicate de bug antigo) | S1 |
| **Tamanho do build Windows** | #6836 — 26MB vs 6MB esperado | S2 |
| **MCP tools ignoram tool_filter_groups** | #6699 — configuração não tem efeito | S2 |

### Cenários de Uso Emergentes

1. **Multi-Agente Organizacional:** A funcionalidade multi-agente da v0.8.0 está sendo aguardada por equipes que querem isolar agentes por domínio (e.g., um para coding, outro para suporte).

2. **TUI como Interface Primária:** Usuários de servidores headless e power users manifestam forte interesse na TUI como alternativa ao dashboard web.

3. **Provider Diversity:** Demanda por novos provedores (Jina.ai, NEAR AI Cloud) indica comunidade diversificando além dos grandes provedores.

### Indicadores de Satisfação/Frustração

- **Positivo:** RFC #5890 (Multi-agent UX) aprovado com processo de governança rigoroso — comunidade participa ativamente
- **Negativo:** Bug #6237 (Slack env var) ainda não resolvido, múltiplas reclamações (duplicate #6844)
- **Positivo:** PR #6398 (multi-agent V3) recebeu feedback massivo da comunidade antes do merge

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Idade | Tipo | Título | Prioridade |
|---|-------|------|--------|------------|
| #5187 | ~50 dias | enhancement | Add arm64 docker target | Size: S, Risk: H |
| #5987 | ~30 dias | enhancement | nix package -> add (Rust app + web UI) | Size: S, Risk: H |
| #5779 | ~37 dias | enhancement | gated_commands TOTP gate para shell tool | Size: M, Risk: H |
| #5838 | ~35 dias | enhancement | Webhook retry logic com exponential backoff | Size: M, Risk: M |

### Análise

**PRs com idade avançada (30-50 dias) e alta severidade:**
- **#5187** (arm64 Docker): Contribuidor aguardando maintainer review há ~7 semanas
- **#5779** (TOTP gate): Enhancement de segurança bloqueado — `needs-author-action` + `needs-maintainer-review`
- **#5838** (Webhook retry): Feature relativamente simples, claramente útil, sem movimento

### Recomendações

1. **Triagem de PRs antigos:** 4 PRs de tamanho pequeno/médio aguardando review há mais de um mês representam oportunidade de contribuição rápida.

2. **Comunicação com contribuidores:** @sonytricoire (#5187), @srghma (#5987) podem ter perdido interest — ping recommended.

3. **Webhook retry (#5838):** Resolve #5761 — beneficiaria usuários de automação que dependem de webhooks. Merge relativamente simples.

**Links:**
- [#5187 — arm64 Docker](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)
- [#5987 — nix package](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)
- [#5779 — TOTP gate](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)
- [#5838 — webhook retry](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)

---

## Métricas Resumidas do Dia

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas | 19 | ▲ Alta |
| Issues fechadas | 2 | — Normal |
| PRs abertos | 44 | ▲▲ Muito alta |
| PRs merged/fechados | 6 | ▲ Alta |
| Bugs S1+S2 abertos | 6 | ⚠️ Atenção |
| Features P1 abertas | 4 | — Moderada |
| Releases | 1 | 🆕 Beta crítica |

**Saúde Geral:** ⭐⭐⭐ (3/5) — Projeto em plena transformação (v0.8.0-beta-1), alta atividade, mas volume de bugs S1-S2 requer resposta rápida da equipe. O merge do multi-agent runtime é marco significativo.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*