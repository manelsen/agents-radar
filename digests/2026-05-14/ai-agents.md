# Resumo diário do ecossistema de agentes de IA 2026-05-14

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-05-13 21:22 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-05-14

---

## 1. Panorama do Dia

O projeto NullClaw mantém uma atividade moderada com **1 issue e 1 PR atualizadas nas últimas 24 horas**. Nenhum novo lançamento foi registrado. A atividade recente é puxada por uma proposta de integração com JIRA (#914) e por um PR em andamento que introduz um sistema de cron jobs com funcionalidades avançadas (#783). O projeto não demonstra sinais de estagnação, mas carece de movimentação de fechamento de items — indicating ongoing review cycles ou aguardar aprovações.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.** Não há changelog ou notas de migração para reportar neste período.

---

## 3. Progresso do Projeto

### PRs em Andamento

| # | Título | Status | Atualizado | Link |
|---|--------|--------|------------|------|
| #783 | `feat(cron): cron subagent, run history, JSON output, security hardening` | **ABERTA** | 2026-05-13 | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |

**Análise do PR #783:**
O pull request introduz um conjunto robusto de funcionalidades:
- **Cron subagent engine**: Scheduler baseado em banco de dados (`cron_runs`, `cron_run_queue`), suportando jobs de tipo skill, agent e shell com TZ offsets por job
- **Output JSON para CLI**: Comandos `cron list --json` e `cron schedule --json`
- **Security hardening**: Reforço de segurança no pipeline de execução
- **Alertas para operadores**: Sistema de notificação integrado

Este PR representa um avanço significativo na automatização de tarefas agendadas e monitoração operacional. Sua continuidade indica foco em confiabilidade e observabilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Movimento Recente

| # | Título | Status | Comentários | Link |
|---|--------|--------|-------------|------|
| #914 | `[enhancement] Create JIRA access tool` | **ABERTA** | 0 | [Issue #914](https://github.com/nullclaw/nullclaw/issues/914) |

**Análise da Issue #914:**
A solicitação propõe uma integração nativa com JIRA, abrangendo:
- Autenticação segura com a API do JIRA
- Operações CRUD em issues
- Gerenciamento de status e comments
- Consulta de sprints

**Demanda identificada:** A comunidade sinaliza necessidade de expandir conectores externos para fluxos de trabalho enterprise. O ticket ainda não recebeu interação da comunidade (0 comentários, 0 reações), sugerindo que está em fase inicial de avaliação pela maintainer team.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportada nas últimas 24 horas.** O pipeline de CI/CD não demonstrou falhas documentadas neste período.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Destacada

**[#914] Create JIRA access tool** — [Ver detalhes](https://github.com/nullclaw/nullclaw/issues/914)

**Resumo:**
Implementação de um tool/connector para integração com JIRA que permita:
- `read_issues()` — Consulta de issues via JQL
- `create_ticket()` — Abertura de tickets
- `update_status()` — Transições de workflow
- `add_comment()` — Interações em tickets
- `get_sprint()` — Consulta de sprints ativos

**Sinais de roadmap:**
A ausência de outros pedidos de features no período recente indica que o roadmap atual está consolidado em torno do PR #783 (cron jobs) e possivelmente da Issue #914 como prioridade de integração.

---

## 7. Resumo de Feedback dos Usuários

**Dados limitados para o período.** Não há issues de feedback ou surveys registrados nas últimas 24 horas. A comunidade não deixou manifestações diretas (comentários ou reações) nas items movimentadas.

**Observação:** A falta de engajamento visível nas issues sugere que o projeto pode se beneficiar de canais de feedback mais acessíveis (Discord, fóruns) ou de issues dedicadas a experiências de uso.

---

## 8. Backlog que Merece Atenção

### Item sem Atualização há Longo Tempo

| # | Título | Criado | Status | Link |
|---|--------|--------|--------|------|
| #783 | `feat(cron): cron subagent, run history, JSON output, security hardening` | 2026-04-07 | **ABERTA** | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |

**Análise:**
O PR #783 está aberto há **mais de 5 semanas** (desde 2026-04-07) sem ter sido merged. Isso pode indicar:
- Processo de review extensivo
- Necessidade de ajustes técnicos
- Espera por aprovação de segurança

Este item merece atenção para entender possíveis gargalos no processo de merge e evitar que funcionalidades importantes fiquem em limbo.

---

## Métricas Consolidada (Últimas 24h)

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Bugs reportados | 0 |

---

## Veredicto de Saúde do Projeto

**🟡 Moderado**

O projeto mantém ritmo de desenvolvimento ativo, com feature-rich PR em andamento e solicitações de integração relevantes. A ausência de releases e merges no período sugere foco em quality assurance do PR #783. A saúde geral é positiva, mas a stagnação prolongada do PR principal merece atenção dos maintainers.

---

*Relatório gerado automaticamente com base em dados do GitHub — 2026-05-14*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-14
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade**: um bloco majoritário em fase de **consolidação de features** (NullClaw, NanoBot, Hermes, PicoClaw, CoPaw, ZeroClaw) e um projeto em **rearranjação arquitetural profunda** (IronClaw com a iniciativa Reborn). A semana é marcada pela **ausência quase universal de releases taggeadas**, com apenas CoPaw publicando versão beta e PicoClaw gerando nightly build — indicando que múltiplas equipes estão em ciclos de QA antes de lançamentos significativos. As principais convergências técnicas incluem necessidade de sistemas de failover multi-provider, gerenciamento de contexto em sessões longas e integrações mais robustas com canais enterprise (Telegram, Discord, Mattermost, WhatsApp, DingTalk). A segurança emerge como tema transversal: autenticação 401 sem causa raiz clara afeta PicoClaw e NanoBot simultaneamente.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merged/Closed | Releases (24h) | Saúde |
|---------|:------------:|:----------:|:-------------:|:--------------:|:-----:|
| **NullClaw** | 1 | 1 | 0 | 0 | 🟡 Moderada |
| **NanoBot** | 19 | 16 | 14 closed | 0 | 🟢 Alta |
| **Hermes Agent** | 50 | 50 | 23 merged | 0 | 🟢 Alta |
| **PicoClaw** | 10 | 42 | 28 merged | 1 nightly | 🟢 Alta |
| **IronClaw** | 22 | 50 | 16 merged | 0 | 🟡 Instável |
| **CoPaw** | 31 | 48 | 28 merged | 1 beta | 🟢 Alta |
| **ZeroClaw** | 33 | 50 | 16 merged | 0 | 🟢 Alta |

**Observações:**
- **Tríade de alto volume:** Hermes, IronClaw e ZeroClaw lideram em volume absoluto de atividade (50 PRs cada), mas ZeroClaw e IronClaw apresentam menor taxa de fechamento proporcional (32% e 36%) versus Hermes (46%).
- **Eficiência do NanoBot:** Destaca-se com taxa de resolução de 73% (14/19 issues), a maior do ecossistema.
- **NullClaw em destaque negativo:** Apenas 1 issue e 1 PR atualizados — indicador de projeto menor ou em modo de espera por aprovações.

---

## 3. Posicionamento do Projeto Principal

### Volume Absoluto: Hermes Agent e IronClaw

| Dimensão | Hermes Agent | IronClaw |
|----------|--------------|----------|
| **Comunidade** | ~50 contribuidores ativos | ~50 contribuidores ativos |
| **Arquitetura** | Monolito modular + plugins externos | Microserviços WASM-native (Reborn) |
| **Diferencial** | Hub de skills reutilizáveis | Componentização WASM para portabilidade |
| **Canal de release** | Tags GitHub | Tags GitHub (com lag em crates.io) |

### Velocidade de Fechamento: NanoBot e PicoClaw

| Dimensão | NanoBot | PicoClaw |
|----------|---------|----------|
| **Taxa de resolução** | 73% | 67% |
| **Foco** | Resiliência multi-provider | Extensibilidade de canais |
| **Maturidade percebida** | Produção-ready | Maturando para produção |

### Crescimento Organizacional: ZeroClaw e CoPaw

| Dimensão | ZeroClaw | CoPaw |
|----------|----------|-------|
| **Volume total** | 50 PRs, 33 issues | 48 PRs, 31 issues |
| **Roadmap explícito** | v0.8.0 draft + multi-agent | Tauri desktop + mobile |
| **Provedores suportados** | 8+ providers | Qwen, DashScope |
| **Público** | Enterprise/self-hosted | Devs chineses + global |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência Multi-Provider e Failover

Três projetos investem simultaneamente em capacidade de fallback entre provedores:

| Projeto | Implementação | Status |
|---------|--------------|--------|
| **NanoBot** | `fallback_models` com chains de providers | ✅ Merged (#3756) |
| **PicoClaw** | Retry em erros HTTP transitórios | Em PR (#2768) |
| **Hermes** | `require_mention` com backfill de histórico | ✅ Merged (#13063) |

**Interpretação:** A operação em múltiplas regiões ou provedores tornou-se requisito básico. A implementação de NanoBot (fallback em cadeia) é a mais madura.

### 4.2 Sistemas de Cron e Jobs Agendados

Três projetos com trabalho paralelo em scheduling:

| Projeto | Feature | Estágio |
|---------|---------|---------|
| **NullClaw** | Cron subagent com TZ offsets, run history, JSON output | PR #783 em revisão (~5 semanas) |
| **CoPaw** | Inbox + cron jobs otimizados | ✅ Merged (#4210) |
| **ZeroClaw** | Cron carry thread_id, announce delivery | PR #6635 |

**Interpretação:** Scheduling é necessidade transversal. A abordagem de NullClaw (banco de dados + history) é a mais sofisticada; CoPaw já chegou à produção.

### 4.3 Gerenciamento de Memória e Contexto

| Projeto | Problema | Status |
|---------|----------|--------|
| **CoPaw** | Leitura de arquivos 1GB causando MemoryError | ✅ Limite reduzido para 200MB |
| **CoPaw** | Logs de conversa causam exaustão de memória | 🔴 Bug aberto (#4265) |
| **NanoBot** | Compressão de contexto com crash | ✅ Corrigido (#3726) |
| **NanoBot** | Interrupção de sessão perde chat history | 🟡 Aberto (#3689) |
| **CoPaw** | SafeJSONSession corrompe em escritas concorrentes | 🔴 Bug aberto (#4232) |

**Interpretação:** Memory management é problema crítico transversal. CoPaw tem o backlog mais pesado nesta área.

### 4.4 Autenticação e Erros HTTP

| Projeto | Sintoma | Severidade |
|---------|--------|------------|
| **PicoClaw** | 401 em Groq, OpenRouter, Nvidia com keys válidas | 🔴 Alta — 10 dias stale |
| **NanoBot** | deepseek-v4-flash reasoning_content erro 400 | 🔴 Bloqueante — primeira rodada |
| **CoPaw** | MCP stream_http bloqueia em 401 até timeout | 🔴 Crítico — 5+ dias |
| **ZeroClaw** | Trust system CA roots para HTTPS customizado | ✅ Corrigido |

**Interpretação:** Erros de autenticação sem diagnóstico claro são o principal vetor de frustração do usuário. Afeta ao menos 3 projetos simultaneamente.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura

| Projeto | Paradigma | Implicação |
|---------|-----------|------------|
| **IronClaw** | WASM components (Reborn) | Portabilidade entre runtimes; breaking changes significativas |
| **Hermes** | Plugin + Skills Hub | Extensibilidade via comunidade; dependência de ecosistema |
| **NullClaw** | Cron subagent engine | Foco em automação operacional; nicho específico |
| **NanoBot** | MCP-first | Interoperabilidade com ferramentas Model Context Protocol |
| **PicoClaw** | Multi-channel unificado | Abstração de Telegram/Discord/WhatsApp |
| **ZeroClaw** | Schema v2→v3 migration | Breaking changes in-flight; maturando para enterprise |
| **CoPaw** | Browser automation + Tauri | Desktop-nativo; UX mais próxima de aplicativo |

### 5.2 Público-Alvo

| Projeto | Perfil Primário | Canais Preferidos |
|---------|-----------------|-------------------|
| **NullClaw** | DevOps/Operações | CLI-first |
| **NanoBot** | Usuários multi-provider | Telegram, WebUI |
| **Hermes** | Power users self-hosted | Discord, Telegram, Mattermost |
| **PicoClaw** | Home lab / Raspberry Pi | WhatsApp, Telegram |
| **IronClaw** | Desenvolvedores de plugins | WebUI, extensível |
| **CoPaw** | Desenvolvedores chineses | DingTalk, WeChat, QQ |
| **ZeroClaw** | Enterprise self-hosted | Matrix, Nextcloud Talk, Slack |

### 5.3 Diferenciação Estratégica

| Projeto | Vantagem Competitiva | Risco |
|---------|----------------------|-------|
| **IronClaw** | WASM-native = futuro da portabilidade | Breaking changes afastam early adopters |
| **NanoBot** | Failover implementado = resiliência comprovada | WebUI com chunk >1MB prejudica mobile |
| **Hermes** | Ecossistema de skills mais maduro | Dashboard UX defasado (temas ilegíveis) |
| **PicoClaw** | Multi-sender groups + OAuth providers | Autenticação 401 sem causa raiz |
| **ZeroClaw** | Multi-agent + schema v3 = enterprise-ready | In-flight migration causa instabilidade |
| **CoPaw** | Browser automation nativo | Memory leaks em longas sessões |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Classificação | Projetos | Característica |
|---------------|----------|----------------|
| 🔴 **Consolidação** | NullClaw | 1 PR/issue por dia; aguarda aprovação |
| 🟡 **Estável** | IronClaw, ZeroClaw | Alto volume mas baixa taxa de fechamento |
| 🟢 **Rápido** | NanoBot, PicoClaw, Hermes, CoPaw | +70% taxa de resolução |

### 6.2 Tempo de Resposta a Bugs Críticos

| Projeto | Bug Crítico | Tempo Aproximado |
|---------|-------------|------------------|
| **NanoBot** | Context compression crash | ✅ Corrigido em <24h |
| **PicoClaw** | Deepseek v4 reasoning 400 | ✅ Corrigido em <24h |
| **Hermes** | Telegram polling failure | 🟡 PR aberto (#25232) |
| **PicoClaw** | Auth 401 cross-provider | ⚠️ 10 dias sem triagem |
| **CoPaw** | MCP 401 blocking | ⚠️ 5+ dias sem fix |
| **IronClaw** | E2E nightly failure | ⚠️ CI quebrado 4 dias |

### 6.3 Backlog Crítico

| Projeto | Item Crítico | Dias Aberto |
|---------|--------------|-------------|
| **IronClaw** | Crates.io publishing lag (CVEs expostos) | 9 dias |
| **CoPaw** | Session corruption em SafeJSONSession | Em aberto |
| **ZeroClaw** | Config v2 stomped by routing | P1 |
| **PicoClaw** | Auth 401 cross-provider | 10 dias stale |
| **Hermes** | Vision tool não funciona (nenhuma fonte) | 31 dias |

---

## 7. Sinais de Tendência

### 7.1 Fadiga de Autenticação Cross-Provider
O erro HTTP 401 sem causa raiz clara afeta PicoClaw, NanoBot e CoPaw simultaneamente. A comunidade reporta horas perdidas debugando keys válidas. **Tendência:** Ferramentas de diagnóstico de configuração de providers (类似 `nanobot doctor`) serão diferenciador competitivo.

### 7.2 Convergência para Multi-Agent
ZeroClaw (#6604), NanoBot (#3460 LongTaskTool) e Hermes (multi-agent hooks)，都在探索多代理编排。**Tendência:** Arquitetura de agentes únicos está evoluindo para workspaces com múltiplos papéis especializados.

### 7.3 Enterprise Self-Hosted como Público-Alvo Dominante
Todos os projetos focam em deploy em NAS (Hermes #15290), Docker (IronClaw, Hermes), ou gateways pessoais (PicoClaw Raspberry Pi). **Tendência:** O mercado open source de agentes está deslocando do "chatbot" para "infraestrutura de automação pessoal/enterprise".

### 7.4 WASM como Vetor de Arquitetura
IronClaw é pioneiro, mas a componentização de adapters (Telegram, WeChat, Slack) como WASM components (#3581-#3582) pode se tornar padrão. **Tendência:** Portabilidade de canais entre runtimes será diferencial.

### 7.5 Ops Observabilidade
ZeroClaw (OTel spans), PicoClaw (gateway stop/status CLI), NanoBot (streaming diagnostics)，都在construir ferramentas de debug para produção. **Tendência:** O agente de IA está amadurecendo de "ferramenta" para "sistema operacional de automação" — exigindo observabilidade comparável a microservices.

### 7.6 Mobile como Nova Fronteira
CoPaw (mobile responsive, Tauri desktop), PicoClaw (Android bug corrigido), IronClaw (mobile layout PR). **Tendência:** Agentes inicialmente CLI/web estão expandindo para experiência mobile nativa.

---

## 8. Recomendações Estratégicas

| Audiência | Recomendação |
|-----------|--------------|
| **Desenvolvedores** | Priorizar PRs de diagnóstico de provider (PicoClaw #2769, CoPaw #4227) — serão necessários em breve como feature. |
| **Tech Leads** | ZeroClaw v0.8.0 e IronClaw Reborn representam investimentos de longo prazo — monitorar para decidir dependência. |
| **Decisores de adoção** | NanoBot oferece melhor relação maturidade/estabilidade no curto prazo. Hermes tem melhor ecossistema de extensibilidade. |
| **Contribuidores** | Hermes (Dashboard UX) e IronClaw (Hooks Framework) oferecem quick wins com alta visibilidade. |
| **SREs/DevOps** | Todas as soluções têm gaps de observabilidade em produção — avaliar necessidade de telemetria customizada antes da adoção. |

---

*Relatório gerado com base em dados agregados de 7 repositórios GitHub — 2026-05-14*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-05-14

---

## 1. 🌅 Panorama do Dia

O projeto NanoBot registrou **alta atividade comunitária** em 13 de maio, com 19 issues e 16 PRs atualizados no período de 24 horas. Cinco issues permanecem abertas como ponto focal de trabalho ativo. A equipe de desenvolvimento demonstrou **velocidade considerável de fechamento**, com 14 issues e 8 PRs resolvidos ou mesclados. Não houve lançamentos de novas versões, indicando trabalho contínuo em stabilization. O ecossistema apresenta **saúde operacional sólida**, com múltiplas melhorias de resiliência e experiência do usuário sendo incorporadas ao codebase.

---

## 2. 🚀 Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde a última atualização. O último release estável permanece `v0.1.5.post3`, e a equipe parece focada em estabilizar funcionalidades pendentes antes de um próximo tagged release.

---

## 3. 💻 Progresso do Projeto

### PRs Merged/Fechados (8 total)

| PR | Título | Contribuidor | Impacto |
|----|--------|--------------|---------|
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) | feat(runner): model failover with fallback_models | chengyongru | ⭐ **Crítico** — Implementa fallback em cadeia entre modelos/providers |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | feat(reason): display model reasoning content during streaming | Flinn-X | ✨ Novo — Exibição de conteúdo de raciocínio durante streaming |
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) | fix(mcp): probe HTTP port before connecting | chengyongru | 🛡️ **Resiliência** — Evita crash no event loop |
| [#3766](https://github.com/HKUDS/nanobot/pull/3766) | test(agent): expand coverage and refactor test structure | chengyongru | 🔧 Infra — 121 novos testes |
| [#1923](https://github.com/HKUDS/nanobot/pull/1923) | feat: add exec output truncation config | ethanclaw | ⚙️ Configuração — Resolve #1871 |
| [#915](https://github.com/HKUDS/nanobot/pull/915) | Add ContextMemory integration guide | AkashKobal | 📖 Documentação |
| [#1135](https://github.com/HKUDS/nanobot/pull/1135) | Correct capitalization of 'Nanobot' throughout README | JonDevOps | 📖 Documentação |
| [#1896](https://github.com/HKUDS/nanobot/pull/1896) | feat(shell): add environment variables for configurable output truncation | wanghesong2019 | ⚙️ Configuração — Fecha #1871 |

### Destaque Estratégico

O PR [#3756](https://github.com/HKUDS/nanobot/pull/3756) implementa **model failover** com `fallback_models`, permitindo declaração de cadeias de fallback onde cada modelo pode residir em provider diferente. Esta funcionalidade atende diretamente à issue #3376 e representa melhoria significativa de disponibilidade para operações em múltiplas regiões.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|-----|--------|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | Telegram: "I've completed processing but have no response to give." | 15 | 9 | CLOSED |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | 支持模型异常自动切换（Provider / Model Failover） | 13 | 1 | CLOSED |
| [#67](https://github.com/HKUDS/nanobot/issues/67) | Add explicit `provider` field to agent configuration | 3 | 7 | CLOSED |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上一轮会话的聊天记录 | 5 | 0 | **OPEN** |
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) | feat(cli): nanobot doctor — config & channel health diagnostic command | 0 | 0 | **OPEN** |

### Análise de Demandas

**Issue #235** (Telegram com deepseek) demonstrou problema crítico de UX onde o bot para de responder após período inicial de funcionamento, apresentando mensagem genérica. Com **9 upvotes e 15 comentários**, indica problema recorrente que afeta experiência de produção. Comunidade solicitou mais logs diagnósticos.

**Issue #3376** recebeu **13 comentários** discutindo estratégia de failover entre providers, evidenciando necessidade real de resiliência operacional em ambientes de produção com múltiplas regiões ou provedores.

---

## 5. 🐛 Bugs e Estabilidade

### Issues de Bug Reportadas (5 total)

| Prioridade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🔴 Alta | [#3760](https://github.com/HKUDS/nanobot/issues/3760) | deepseek-v4-flash: `reasoning_content` causa erro 400 (invalid_request_error) | **OPEN** |
| 🔴 Alta | [#3726](https://github.com/HKUDS/nanobot/issues/3726) | Bug de compressão de contexto — causa crash do sistema | CLOSED |
| 🔴 Alta | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | nanobot agent crasha se serviço MCP não estiver iniciado | CLOSED |
| 🟡 Média | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI: markdown renderer carrega chunk >1MB desnecessariamente | **OPEN** |
| 🟡 Média | [#1640](https://github.com/HKUDS/nanobot/issues/1640) | Session travada mesmo após deleção manual de arquivos de memória | CLOSED |

### Avaliação de Severidade

**Bug crítico ativo**: Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) afeta usuários de `deepseek-v4-flash` e `deepseek-v4-pro` na primeira rodada de conversa, impedindo uso básico. Relacionado a validação de `reasoning_content` em modo thinking.

**Melhorias de estabilidade merged**:
- PR [#3740](https://github.com/HKUDS/nanobot/pull/3740) — Evita crash do event loop com probe TCP antes de conectar ao MCP
- PR [#3766](https://github.com/HKUDS/nanobot/pull/3766) — Expande cobertura de testes em 121 casos adicionais

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR/Issue | Título | Proposta | Prioridade |
|----------|--------|----------|------------|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | feat(long-task): add LongTaskTool for multi-step agent tasks | Meta-ReAct loop para tarefas de múltiplos passos | ⭐ Alta |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上一轮会话的聊天记录 | Preservar contexto ao interromper sessão | ⭐ Alta |
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) | feat(cli): nanobot doctor — diagnostic command | Comando `nanobot doctor` para validação de config | 🟡 Média |
| [#3768](https://github.com/HKUDS/nanobot/issues/3768) | feat(security): dmPolicy — allowlist para DMs | Autenticação/Gating de remetentes desconhecidos | 🟡 Média |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) | feat(provider): add Qiniu provider support | Provedor Qiniu AI (七牛云) | 🟡 Média |
| [#3761](https://github.com/HKUDS/nanobot/pull/3761) | feat(whatsapp): typing indicator and emoji reaction | UX enhancements para WhatsApp | 🟢 Baixa |

### Sinais de Roadmap Identificados

1. **Resiliência Multi-Provider**: Feature de failover implementada (#3756), indicando direção estratégica do projeto
2. **Transparência de Raciocínio**: Exibição de reasoning content durante streaming (#3655)
3. **Preservação de Sessão**: Melhoria em compactação automática (#3765) e manutenção de contexto em interrupções (#3689)
4. **Operacionalidade**: Ferramentas de diagnóstico (#3769) e segurança em DMs (#3768)
5. **Extensão de Canais**: Melhorias em WhatsApp (#3761, #3752) e suporte a novos providers (#3643)

---

## 7. 💬 Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Interrupção de contexto** | nanobot "esquece" conversa ao ser interrompido (#3689) | Múltiplos relatórios |
| **Falhas em providers** | Necessidade de fallback automático quando modelo/API falha (#3376) | Alta demanda |
| **Estabilidade com MCP** | Crashes ao iniciar nanobot sem servidor MCP rodando (#3739) | Relatado |
| **Performance WebUI** | Carregamento de chunk >1MB afeta experiência mobile (#3746) | UX |
| **Compatibilidade DeepSeek** | Erros com reasoning_content em modelos mais recentes (#3760) | Bloqueante |

### Cenários de Uso Observados

- **Agentes Telegram**: Uso em produção com modelos deepseek, reportando problemas de "sem resposta" após períodos iniciais
- **Multi-Agent Setup**: Questões sobre arquitetura para múltiplos agentes em workspaces únicos (#1642)
- **Provedores Custom**: Necessidade de custom endpoints com providers auto-detect desabilitado (#67)
- **Operações Long-Tasks**: Demanda por ferramentas para tarefas de múltiplos passos sequenciais (#3460)

---

## 8. 📋 Backlog que Merece Atenção

### Issues sem Resposta há Muito Tempo

| Issue | Título | Criado | Atualizado | Comentários | Link |
|-------|--------|--------|------------|-------------|------|
| — | Nenhuma issue com mais de 14 dias sem resposta | — | — | — | — |

**Observação**: Todas as 19 issues com atividade recente foram atualizadas em 13 de maio, indicando monitoramento ativo do repositório. Não há issues "órfãs" no backlog imediato.

### PRs em Aberto com Potencial Impacto

| PR | Título | Status | Impacto |
|----|--------|--------|---------|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | feat(long-task): add LongTaskTool | OPEN | ⭐⭐⭐ Multi-step task capability |
| [#3765](https://github.com/HKUDS/nanobot/pull/3765) | Session preservation during auto-compact | OPEN | ⭐⭐ Context management |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) | Centralize LLM concurrency gate | OPEN | 🛡️ Stability fix |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) | Qiniu provider support | OPEN | 🌍 Ecosystem expansion |

---

## 📈 Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 5 abertas / 14 fechadas | ✅ Muito ativo |
| PRs processados (24h) | 8 merged / 8 abiertos | ✅ Fluxo saudável |
| Taxa de resolução | 73% (14/19) | ✅ Excelente |
| Releases (24h) | 0 | 🟡 Pausa de lançamento |
| Tempo médio de resposta | < 24h | ✅ Equipe responsiva |
| Bugs críticos abertos | 1 (#3760) | ⚠️ Requer atenção |

---

**Próximos passos recomendados**: Priorizar resolução do bug #3760 (deepseek-v4-flash reasoning_content), revisar PR #3460 (LongTaskTool) para merge, e avaliar viabilidade de #3768 (dmPolicy security feature) para roadmap de segurança.

---
*Relatório gerado automaticamente com base em dados do GitHub de NanoBot (HKUDS/nanobot) — 2026-05-14*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-14

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade comunitária** nas últimas 24 horas, com 50 issues e 50 PRs atualizados, embora nenhuma release tenha sido publicada. A atividade concentra-se em correções de bugs P1/P2 (especialmente no gateway Telegram e plataforma Mattermost), adição de skills via Hermes Skills Hub e refinamento do plugin L Butler. A comunidade está particularmente engajada em temas de estabilidade, com 2 bugs P1 abertos que requerem atenção imediata. A ausência de releases sugere que a equipe pode estar em ciclo de estabilização antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em período sem novas versões, possivelmente acumulando correções para uma futura release. Recomenda-se monitorar o repositório para announcements.

---

## 3. Progresso do Projeto

### PRs Importantes Fechados/Merged

| PR | Descrição | Impacto |
|----|-----------|--------|
| [#25234](https://github.com/NousResearch/hermes-agent/pull/25234) | **fix(anthropic): symmetric orphan audit for web_search_tool_result** | Corrige quebra de pares web_search legítimos ao droppar server_tool_use incorretamente. **P1** |
| [#13063](https://github.com/NousResearch/hermes-agent/pull/13063) | **feat(discord): history backfill for multi-user Discord** | Implementa backfill de histórico quando `require_mention = true` no Discord. |
| [#23950](https://github.com/NousResearch/hermes-agent/pull/23950) | **fix(model-metadata): prioritize curated defaults over OpenRouter** | Resolve rejeição de context-window para kimi (32k vs 262k tokens reais). |
| [#11849](https://github.com/NousResearch/hermes-agent/pull/11849) | **fix(memory): plumb per-turn user_id + user_name to providers** | Corrige memória em sessões multi-usuário onde provider recebia apenas quem abriu a sessão. |
| [#7789](https://github.com/NousResearch/hermes-agent/pull/7789) | **fix(memory): pass session and user context to on_turn_start** | Propaga session_id, platform, user_id e user_name para hooks de memória. |
| [#25233](https://github.com/NousResearch/hermes-agent/pull/25233) | **fix(dashboard): hide bundled example plugin from nav** | Remove item de navegação fantasma quando não há bundle compilado. |

### PRs Abertos em Progresso

| PR | Descrição | Status |
|----|-----------|--------|
| [#25241](https://github.com/NousResearch/hermes-agent/pull/25241) | **fix(feishu): roll over streaming message before edit limit** | Evita stall ao atingir limite de edições por mensagem na Feishu. |
| [#25240](https://github.com/NousResearch/hermes-agent/pull/25240) | **Add skill: mind-palace** | Nova skill submetida via Hermes Skills Hub. |
| [#25240](https://github.com/NousResearch/hermes-agent/pull/25240) | **Add skill: optimizer-research-2026** | Nova skill submetida via Hermes Skills Hub. |
| [#24514](https://github.com/NousResearch/hermes-agent/pull/24514) | **feat: add read-only Google Messages checker** | Adiciona toolsets para Google Messages Web (read-only). |
| [#25232](https://github.com/NousResearch/hermes-agent/pull/25232) | **fix(gateway): route conflict-retry start_polling failure to reconnect ladder** | Corrige gateway "surdo" após falha em polling do Telegram. **P1** |
| [#23465](https://github.com/NousResearch/hermes-agent/pull/23465) | **feat(google-workspace): add gmail attachment list/get CLI verbs** | Adiciona download de anexos Gmail via skill CLI. |
| [#25231](https://github.com/NousResearch/hermes-agent/pull/25231) | **fix(cli): wire /sessions slash command in the classic CLI** | Conecta comando /sessions ao dispatcher legado da CLI. |
| [#21575](https://github.com/NousResearch/hermes-agent/pull/21575) | **fix(auxiliary): bump aux-call timeout for local endpoints** | Aumenta timeout de 30s para chamadas auxiliares a LLMs locais (Ollama, llama.cpp, vLLM). |
| [#25236](https://github.com/NousResearch/hermes-agent/pull/25236) | **fix(dashboard): restore example-dashboard plugin's dist/index.js** | Restaura bundle de referência deletado acidentalmente. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | 👍 | 💬 | Categoria |
|-------|--------|----|----|-----------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | **[Feature]: Improved Themes for Dashboard** | 15 | 6 | UX/Facelift |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | **[Setup]: Persistent Permission denied on /opt/data/config.yaml during Docker setup on NAS** | 5 | 5 | Infra/Docker |
| [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) | **[vision_analyze] Cannot read local images or URL images** | 2 | 4 | Ferramentas/Vision |

### Análise dos Temas

**1. Temas de Dashboard (#18080)** — A comunidade expressa frustração significativa com a legibilidade dos temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose). O problema central é a combinação de fontes serif com peso leve e baixo contraste, dificultando a leitura. Com 15 reações, este é o tema mais demandado para UX.

**2. Problemas de Deploy em NAS (#15290)** — Usuários enfrentando `Permission denied` ao tentar configurar Hermes em NAS UGreen DX4600 com UGOS Pro. Indica necessidade de документация mais clara sobre permissões de container Docker e mapeamento de volumes.

**3. Ferramenta de Visão (#9077)** — Falha abrangente em processar imagens de qualquer fonte (URLs HTTP, caminhos locais, screenshots). Problema recorrente que afeta casos de uso práticos da ferramenta.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos - Atenção Imediata)

| Issue | Descrição | Plataforma | Link |
|-------|-----------|------------|------|
| #25152 | `/queue` quebra com `'SendResult' object has no attribute 'get'` no gateway | Telegram | [#25152](https://github.com/NousResearch/hermes-agent/issues/25152) |
| #25205 | `_restore_primary_runtime` usa api_key revogada após rotação de credenciais | Agent Core | [#25205](https://github.com/NousResearch/hermes-agent/issues/25205) |

### Bugs P2 (Altos - Prioridade)

| Issue | Descrição | Área | Link |
|-------|-----------|------|------|
| #15290 | Permission denied em Docker em NAS UGOS Pro | Docker | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |
| #9077 | vision_analyze não recebe imagens de nenhuma fonte | Visão | [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) |
| #25204 | Shell hooks `pre_tool_call` e `on_session_finalize` não disparam em `chat -q` | Agent/CLI | [#25204](https://github.com/NousResearch/hermes-agent/issues/25204) |
| #25218 | `/restart` desliga gateway ao invés de reiniciar em Docker | Gateway | [#25218](https://github.com/NousResearch/hermes-agent/issues/25218) |
| #25181 | Mattermost gateway threading não funciona após primeira resposta | Mattermost | [#25181](https://github.com/NousResearch/hermes-agent/issues/25181) |
| #25191 | Hermes gateway install falha com emoji no código | CLI | [#25191](https://github.com/NousResearch/hermes-agent/issues/25191) |
| #25118 | Vision tool não analisa imagens enviadas via Telegram | Vision/Telegram | [#25118](https://github.com/NousResearch/hermes-agent/issues/25118) |

### Bugs P3 (Médios)

- **#22999** [CLOSED]: CLI resize limpa banner após maximizar terminal
- **#20316**: `run_agent.py` nunca chama `should_compress_preflight()` — código morto
- **#13091**: `/v1/props` deveria ser GET `/props` para llama.cpp
- **#25121**: Flag `hermes -z` inconsistente entre versões
- **#25184**: Usuários mobile do Mattermost não conseguem enviar comandos ( `/` bloqueado)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Mais Discutidas

| Issue | Descrição | Área | Link |
|-------|-----------|------|------|
| #23717 | **RFC: Pluggable SessionDB Provider** — PostgreSQL, MySQL além do SQLite | Agent | [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #23837 | **ContextEngine: per-turn message observation hook** | Plugins | [#23837](https://github.com/NousResearch/hermes-agent/issues/23837) |
| #17272 | **Service-account auth para Google Workspace skill** | Auth | [#17272](https://github.com/NousResearch/hermes-agent/issues/17272) |
| #4581 | **read_file: option to return raw content without line numbers** | Tools | [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) |

### Sinais de Roadmap — Plugin L Butler

Uma série de issues (#25164-#25170, #25127-#25130) indica desenvolvimento ativo do plugin **L Butler**, com foco em:
- Workflow de audit trail (blocked → retried → done)
- Auto-close de itens duplicados bloqueados
- Recuperação de estado em `/lbrief` e `/lwork`
- Setup de repositório privado e guardrails de segurança
- Migração de código com auditoria de segredos

**Interpretação**: O L Butler parece ser um sistema de automação de tarefas/produtividade pessoal integrado ao Hermes, com arquitetura distribuída (repo privado + upstream).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Severidade | Freq. |
|-----------|----------|------------|-------|
| **Deploy** | Dificuldade de configuração em ambientes NAS/Docker com permissões | P2 | Alta |
| **Visão** | Ferramenta de análise de imagens completamente não funcional | P2 | Média-Alta |
| **Gateway Telegram** | Falhas em `/queue`, streaming e reconexão após polling failure | P1/P2 | Alta |
| **Mattermost** | Threading quebrado após primeira resposta; mobile com comandos bloqueados | P2/P3 | Média |
| **CLI** | Comportamento inconsistente de flags entre versões; resize com perda de UI | P3 | Média |

### Cenários de Uso Observados

1. **Usuários Power User**: Deploy em NAS domésticas (UGreen DX4600) buscando automação pessoal
2. **Desenvolvedores downstream**: Build de orquestradores customizados baseados em Hermes
3. **Integração empresarial**: Google Workspace com service accounts para deployments autônomos
4. **Multi-plataforma**: Discord, Telegram, Mattermost — cada um com peculiaridades de API

### Satisfação/Insatisfação

- **Satisfação**: Ativo ecossistema de skills, documentado em Skills Hub; comunidade reativa a bugs
- **Insatisfação**: UX do dashboard (temas), estabilidade da ferramenta de visão, complexidade de deploy em containers restritos

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolution

| Issue | Idade | Descrição | Prioridade | Link |
|-------|-------|-----------|------------|------|
| #4581 | ~42 dias | `read_file` sem opção de output sem números de linha | P3 | [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) |
| #9077 | ~31 dias | Vision tool não funciona para nenhuma fonte de imagem | P2 | [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) |
| #13091 | ~24 dias | `/v1/props` deveria ser GET `/props` para llama.cpp | P3 | [#13091](https://github.com/NousResearch/hermes-agent/issues/13091) |
| #15290 | ~20 dias | Permission denied em Docker NAS | P2 | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |
| #17272 | ~15 dias | Service-account auth para Google Workspace | P3 | [#17272](https://github.com/NousResearch/hermes-agent/issues/17272) |
| #18080 | ~14 dias | Dashboard themes hard to read | P3 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) |

### Recomendações

1. **Visão Tool (#9077)** — 31 dias aberto, 4 comentários, P2. Necesita triagem urgente pois quebra caso de uso fundamental.
2. **NAS Docker (#15290)** — 20 dias, usuário demonstrando persistência (5 comentários). Relevante para onboarding.
3. **Dashboard UX (#18080)** — 14 dias, maior engajamento da comunidade (15 👍). Boa候选 para quick win.

---

## Métricas Consolidada

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 49 |
| PRs abertos (24h) | 27 |
| PRs merged/fechados (24h) | 23 |
| Releases (24h) | 0 |
| Bugs P1 abertos | 2 |
| Bugs P2 abertos | 8 |
| Features P3 abertas | 18 |
| Topics mais votados | Dashboard themes (15 👍) |

---

*Relatório gerado em 2026-05-14 com base em dados do GitHub NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-14

## 1. Panorama do dia

O projeto PicoClaw mantém alta atividade de desenvolvimento, com **42 PRs atualizados nas últimas 24h** (28 merged/closed, 14 abertos) e **10 issues processadas** (5 abertas, 5 fechadas). A noite do build **v0.2.8-nightly.20260513.223ebdf0** foi disponibilizada, sinalizando evolução contínua da versão nightly. A comunidade demonstra engajamento em múltiplas frentes: integrações com provedores de IA (OpenCode, ChatGPT OAuth, Codex), ferramentas do agente (diff preview, get_current_time), canais (WhatsApp, DingTalk, Telegram) e correções de stability (autenticação 401, sandbox bypass). O volume de PRs e a diversidade temática indicam um projeto saudável em fase ativa de maturação de features.

---

## 2. Lançamentos

### nightly: v0.2.8-nightly.20260513.223ebdf0
**Release:** https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260513.223ebdf0  
**Comparativo:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

- **Status:** Automated nightly build — pode ser instável; uso com cautela.
- **Natureza:** Consolidacao incremental de PRs merged nas últimas 24h.
- **Sem breaking changes documentadas** nesta release nightly.
- **Recomendação:** Ambientes de produção devem permanecer na última tag estável; equipes de QA e desenvolvedores podem validar a nightly para antecipação de features.

---

## 3. Progresso do Projeto

PRs fechados/merged nas últimas 24h com maior impacto:

| # | PR | Domínio | Impacto |
|---|-----|---------|---------|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | feat: history por sender para multi-user group chats | agent, provider | Historico de mensagens agora atribuido por remetente, habilitando contexto correto em grupos Discord/Telegram/Slack |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | refactor: standardize channel identification | channel, agent | Decoupling de nomes de canais de tipos de provider; permite múltiplas instâncias do mesmo provider |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) | fix(gateway): add CLI stop/status commands | gateway | Comandos `picoclaw gateway stop` e `picoclaw gateway status` adicionados para gestão do processo |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) | fix(session): preserve archived chat history | session | Histórico arquivado preservado após summarization — web UI agora exibe transcript completo |
| [#2170](https://github.com/sipeed/picoclaw/pull/2170) | feat(model): per-model extra HTTP headers | provider, config | Suporte a headers HTTP customizados por modelo em provedores OpenAI-compatible |

**Síntese:** As mudanças de hoje concentram-se em **melhoria de robustez** (gateway management, session history) e **extensibilidade** (multi-channel, multi-sender, per-model headers). A arquitetura de channels está mais flexível.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Tipo | Comentários | 👍 | Relevância |
|---|--------|------|:----------:|:---:|------------|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | enhancement | 8 | 0 | Funcionalidade aguardada para saída streaming no chat web |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add streaming HTTP request config | enhancement | 6 | 1 | Requisição HTTP streaming para backends LLM — alinhado com cliente OpenAI Python |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android app: model not configured | bug | 6 | 0 | ✅ **Resolvido** — modelo local mostrava "not configured" mesmo apos preencher campos |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Provide compiled builds with WhatsApp | enhancement | 4 | 1 | Builds ARM64 padrao sem WhatsApp; usuarios de Raspberry Pi Zero 2 afetados |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | PicoClaw auth fails 401 across providers | bug | 2 | 0 | ⚠️ **Aberto** — keys validas retornam 401 em Groq, OpenRouter, Nvidia |

### Análise de demandas

**Streaming é o tema mais solicitado** — dois issues (#1950, #2404) com total de 14 comentários pedindo suporte a streaming HTTP para backends LLM. Isso sugere que a comunidade prioriza redução de latência e experiência de resposta incremental. O PR #2768 (retry transient errors) complementa esse fluxo ao tratar erros HTTP transitórios durante streaming.

**Integrações emergentes:** Suporte a OpenCode (#2671, closed) e Xiaomi MIMO (#2859, open) indicam adoção crescente em provedores asiáticos.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje

| # | Título | Severidade | Status | Detalhes |
|---|--------|:----------:|--------|---------|
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | Authentication fails 401 across providers | 🔴 **Alta** | OPEN | Afeta Groq, OpenRouter, Nvidia; ocorre em stable e nightly; possivelmente header auth mal formatado |
| [#2859](https://github.com/sipeed/picoclaw/issues/2859) | Xiaomi MIMO multi-turn 400 error | 🟡 **Média** | OPEN | Após 2-3 rodadas: `Param Incorrect` — requer context handling diferenciado |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android: model not configured | 🟡 **Média** | ✅ CLOSED | Modelo local não selecionável após configuração; já resolvido |

### Bugs resolvidos hoje

| # | Título | Resolução |
|---|--------|-----------|
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | Deepseek v4 thinking model 400 | Provider agora salva/reenvia `reasoning_content` em requests subsequentes |
| [#2704](https://github.com/sipeed/picoclaw/issues/2704) | DingTalk SDK panic crash | Bug race condition no SDK `dingtalk-stream-sdk-go` em timeout scenarios — work-around aplicado |

### Correções de segurança merged

| # | Título | Domínio |
|---|--------|---------|
| [#2693](https://github.com/sipeed/picoclaw/pull/2693) | block find / from bypassing workspace sandbox | tool (fixes #2688) |

**⚠️ Alerta:** O bug #2769 (401 authentication) afeta múltiplos provedores的主流 simultaneamente e está classificado como stale. Este é o problema de estabilidade mais crítico em aberto e merece atenção imediata da equipe de maintainers.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| # | Título | Domínio | Prioridade | Observação |
|---|--------|---------|:----------:|------------|
| [#2848](https://github.com/sipeed/picoclaw/issues/2848) | Show unified diff preview for edit_file | tool | — | Output diff (old→new) no estilo Claude Code CLI |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | Add get_current_time tool | tool | — | Ferramenta utilitária para datetime/timezone |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | channel | **Low** | Nice-to-have, alinhado com roadmap |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Builds com WhatsApp support | build | — | ARM64 build padrão exclui WhatsApp |

### PRs de features em review

| # | Título | Domínio | Potencial Impacto |
|---|--------|---------|-------------------|
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | Provider-backed image generation tool | provider | Tool `image_generate` nativa com MediaStore pipeline |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | Port update_plan tool from OpenClaw | tools | Progress tracking estruturado multi-step |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | OpenAI OAuth for Codex and transcription | provider | Autenticação OAuth para Codex |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | Enable ChatGPT Plus (OAuth) subscription | provider | Suporte a ChatGPT subscription via OAuth |

### Sinais de roadmap identificados

1. **Streaming-first:** A demanda por streaming (#1950, #2404) é consistente e representa mudança arquitetural significativa — indica direção para v0.3.x.
2. **Multi-provider extensibility:** PRs de OAuth (#2757, #2679), per-model headers (#2170), e novo provider OpenCode (#2671) mostram trend de suporte diversificado de provedores.
3. **Tool ecosystem expansion:** `update_plan`, `get_current_time`, `image_generate` sinalizam evolução do agente para assistente de produtividade.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

- **Usabilidade Android (#2368):** Usuários relatam frustração ao configurar modelos locais no app Android — "not configured" persistia mesmo após preenchimento completo. ✅ Resolvido.
- **Raspberry Pi Zero 2 (#2625):** Usuários de dispositivos ARM64 dependem de WhatsApp mas não conseguem builds pré-compilados com suporte. Processo manual de compilação é barrera de adoção.
- **Autenticação cross-provider (#2769):** Usuários perderam horas debugando keys válidas que retornavam 401. Impacto em produtividade significativo; afeta múltiplos provedores simultaneamente.
- **Xiaomi MIMO multi-turn (#2859):** Erro após poucas rodadas de conversa mata a experiência de uso prolongado em canais WeChat.

### Cenários de uso destacados

- **Multi-user group chats:** Usuários em grupos Discord/Telegram/Slack precisam de histórico por remetente (#2715 merged).
- **Local models em Android:** Configuração de modelos locais em dispositivos móveis é caso de uso relevante (bug corrigido).
- **WhatsApp + Raspberry Pi:** PicoClaw como gateway pessoal de IA em hardware de baixo custo é uso comum na comunidade.

### Satisfação geral

- **Aspectos positivos:** Resposta rápida a bugs críticos (Deepseek v4, DingTalk crash), melhorias incrementais de estabilidade (MCP non-fatal init, session preservation).
- **Pontos de fricção:** Autenticação 401 sem causa raiz clara é o principal vetor de frustração. Build options para ARM64/WhatsApp e streaming são demandas de longa data.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / stale com alto impacto

| # | Título | Idade | Prioridade | Ação Recomendada |
|---|--------|:-----:|:----------:|------------------|
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | Auth 401 across providers | 10 dias | 🔴 **Alta** | Triagem imediata — afeta estabilidade de produção |
| [#2859](https://github.com/sipeed/picoclaw/issues/2859) | Xiaomi MIMO multi-turn 400 | 1 dia | 🟡 **Média** | Investigar handling de context em canais WeChat |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp builds ARM64 | 22 dias | 🟡 **Média** | Avaliar viabilidade de build flags padronizadas |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Web Chat | 51 dias | 🟡 **Média** | Priorizar se alinhado com roadmap v0.3 |

### PRs estancados em review

| # | Título | Status | Observação |
|---|--------|--------|------------|
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | docs: sync to V3 config format | stale | 26 arquivos aguardando merge — alta recompensa em DX |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | refactor: channel identification | stale | Decoupling de channels é foundational; precisa merge |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | update_plan tool | stale | Tool de produtividade; alinhado com ecosystem expansion |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | image_generate tool | stale | Pipeline de mídia já existe; integração é straightforward |

**Recomendação estratégica:** A Issue #2769 (#2769) deve ser priorizada para triagem nas próximas 48h devido ao impacto em produção. Os PRs stale de documentação e arquitetura (#2766, #2551) são de baixa complexidade de review mas alto impacto em onboarding de novos contribuidores.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-14. Métricas: 10 issues, 42 PRs processados nas últimas 24h.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-14

## 1. Panorama do Dia

O IronClaw mantém um nível de atividade extremamente alto com **22 issues e 50 PRs atualizados nas últimas 24h**, sem novas releases. A prioridade atual é a iniciativa **Reborn**, uma rearquitetura substancial que está reestruturando o loop do agente, hooks, channels e adapters para um modelo baseado em WASM components. Observa-se um problema crítico de publicação: as versões 0.25.0 a 0.27.0 estão no GitHub, mas crates.io só possui a 0.24.0, expondo consumidores downstream a CVEs do wasmtime. O ecossistema está em plena transformação arquitetural com múltiplos fluxos de trabalho paralelos.

---

## 2. Lançamentos

**Nenhum release novo nas últimas 24h.**

| Versão | Status | Observação |
|--------|--------|------------|
| 0.27.0 | Taggitado (2026-04-29) | ❌ Não publicado em crates.io |
| 0.26.0 | Taggitado | ❌ Não publicado em crates.io |
| 0.25.0 | Taggitado | ❌ Não publicado em crates.io |
| 0.24.0 | Último em crates.io (2026-03-31) | ⚠️ Afetado por CVEs do wasmtime 28.x |

> **⚠️ Issue crítica aberta:** [#3259](https://github.com/nearai/ironclaw/issues/3259) — Downstream consumidores estão presos à versão 0.24.0 com vulnerabilidades conhecidas.

---

## 3. Progresso do Projeto

### PRs Merged/Closed nas últimas 24h

| PR | Título | Escopo | Impacto |
|----|--------|--------|---------|
| [#3469](https://github.com/nearai/ironclaw/pull/3469) | Complete HostManagedModelGateway budget, credential, and redaction tests | `agent`, `reborn` | Testes completos de gateway de modelos — pré-requisito para produção |
| [#3561](https://github.com/nearai/ironclaw/pull/3561) | Architectural improvements: isolate product inbound turn handoff | `architecture` | Refatoração crítica: separação de envelope handling e turn handoff logic |
| [#3536](https://github.com/nearai/ironclaw/pull/3536) | Add deterministic instruction bundle builder | `reborn` | Novo `InstructionBundleBuilder` com fingerprinting determinístico |
| [#2892](https://github.com/nearai/ironclaw/pull/2892) | fix(config): trim whitespace from LLM base_url | `config`, `llm` | Correção de bug em validação de URL em produção |

### PRs Abertos de Destaque

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#3573](https://github.com/nearai/ironclaw/pull/3573) | feat(reborn): add ironclaw_hooks framework foundation | XL | medium | Framework completo de hooks com audit de segurança (4 findings) |
| [#3583](https://github.com/nearai/ironclaw/pull/3583) | Implement WASM ProductAdapter component runtime | XL | medium | Loader de componentes WASM com validação de manifest |
| [#3587](https://github.com/nearai/ironclaw/pull/3587) | feat(reborn): add product adapter registry contracts | XL | medium | Novos contratos para registry, activation e credential binding |
| [#3570](https://github.com/nearai/ironclaw/pull/3570) | feat(reborn): add first-party coding tools | XL | low | Ferramentas nativas: read_file, write_file, list_dir, grep, apply_patch |
| [#3559](https://github.com/nearai/ironclaw/pull/3559) | fix(extensions): restore chat-driven tool_install + fix double-invoke | XL | medium | Correção de UX crítica para instalação de extensions |
| [#3544](https://github.com/nearai/ironclaw/pull/3544) | docs(reborn): agent loop skeleton framework spec | L | low | Especificação da arquitetura do loop + 9 workstream briefs |

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Engajamento

**1. Hooks Framework para Reborn** — 4 issues, 3 PRs
- **Iniciativa central:** Adicionar suporte de primeira classe para hooks no loop do agente, sem enfraquecer limites existentes de capability, authorization e runtime.
- **Issue-chave:** [#3523](https://github.com/nearai/ironclaw/issues/3523) — Primeiro framework de hooks para Reborn
- **Roadmap:** [#3524](https://github.com/nearai/ironclaw/issues/3524) — Plano completo de implementação
- **PR de referência:** [#3573](https://github.com/nearai/ironclaw/pull/3573) — Fundação do framework com audit de segurança

**2. Self-Authored Hooks com Monotonic Restriction** — Issue [#3567](https://github.com/nearai/ironclaw/issues/3567)
- Proposta de restrições auto-impostas pelo agente com canal de ratificação infalsificável
- Vinculado ao trabalho de wallet signing em [#3564](https://github.com/nearai/ironclaw/issues/3564)

**3. Porting de Channels para Reborn**
- 5 issues de port simultâneas abertas hoje: [Telegram](https://github.com/nearai/ironclaw/issues/3581), [WeChat](https://github.com/nearai/ironclaw/issues/3582), [Slack](https://github.com/nearai/ironclaw/issues/3579), [WebUI](https://github.com/nearai/ironclaw/issues/3580), [Tracker geral](https://github.com/nearai/ironclaw/issues/3577)
- **Prioridade:** P0 — todas marcadas como suggested_P0
- **Objetivo:** Migrar channels do padrão v1 WASM para Reborn ProductAdapter nativo

**4. Crates.io Publishing Lag** — Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)
- 3 comentários, unresolved
- Downstream afetado por CVEs do wasmtime 28.x por falta de release em crates.io

---

## 5. Bugs e Estabilidade

### Falha de CI/CD

| Severidade | Issue | Detalhes |
|------------|-------|----------|
| 🔴 **P0** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed — workflow falhou em 2026-05-13 04:36 UTC |

> **Comando:** `Full E2E / E2E (features)` falhou no run [25778045508](https://github.com/nearai/ironclaw/actions/runs/25778045508). Investigação ativa necessária.

### Bugs Reportados

| Severidade | Issue | Título | Status |
|------------|-------|--------|--------|
| 🟡 **P1** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent salvando arquivos em /home/agent (inacessível em setup hosted) | **CLOSED** ✅ |
| 🟡 **P2** | [#2283](https://github.com/nearai/ironclaw/issues/2283) | Web UI não suporta upload de arquivos | OPEN |
| 🟡 **P3** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Bug bash P3 relacionado a filesystem | **CLOSED** ✅ |

### Issues de Segurança Abertas

| Severidade | Issue | Título | Status |
|------------|-------|--------|--------|
| 🔴 **HIGH** | [#3564](https://github.com/nearai/ironclaw/issues/3564) | Wallet signing requer canal de autorização infalsificável | OPEN |
| 🔴 **HIGH** | [#3576](https://github.com/nearai/ironclaw/issues/3576) | Harvest pi_agent_rust runtime, extension, security patterns | OPEN |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (últimas 24h)

| Feature | Issue | Escopo | Prioridade |
|---------|-------|--------|------------|
| Ferramenta de download de logs para debug | [#3534](https://github.com/nearai/ironclaw/issues/3534) | tooling | — |
| User-selectable model routes + provider pool | [#3459](https://github.com/nearai/ironclaw/issues/3459) | agent, reborn | closed (reborn) |
| Model memory como userland extension | [#3537](https://github.com/nearai/ironclaw/issues/3537) | reborn, extensions | OPEN |
| Mobile layout UI | [#3529](https://github.com/nearai/ironclaw/pull/3529) | web | PR aberto |
| Non-image attachment UX + persistence | [#3531](https://github.com/nearai/ironclaw/pull/3531) | web | PR aberto |

### Direção Estratégica do Roadmap (Reborn)

O Reborn está definindo a direção do projeto para os próximos ciclos:

1. **Agent Loop Framework** — Nova crate `ironclaw_agent_loop` com skeleton reutilizável
2. **Canonical Executor** — Coração do loop com strategy dispatch e checkpoint contracts ([#3586](https://github.com/nearai/ironclaw/pull/3586))
3. **Hook System** — Trust primitives, sealed decisions, dispatcher, port middleware
4. **WASM Component Runtime** — ProductAdapters estruturados como WASM components
5. **Outbound Policy Service** — Gate para projeções com policy validation
6. **Host API Contracts** — `HostPortCatalog`, `CapabilityProfile`, `ProtocolAuthEvidence`

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Fonte | Impacto |
|----------|-------|---------|
| **Agent salvando arquivos em local inacessível** | [#2905](https://github.com/nearai/ironclaw/issues/2905) — QA em hosted-production | ✅ Resolvido |
| **Web UI sem suporte a upload de arquivos** | [#2283](https://github.com/nearai/ironclaw/issues/2283) — hosted-staging | ⚠️ Em aberto — impede fluxo com bots que requerem input de arquivo (ex: Invoice processing) |
| **Double-invoke + auto-approve footgun em tool_install** | [#3559](https://github.com/nearai/ironclaw/pull/3559) — extensão Telegram | ✅ Correção em PR |
| **Notificações de missão vazando para conversa errada** | [#3584](https://github.com/nearai/ironclaw/pull/3584) | ✅ Correção em PR |
| **Linha do tempo de suporte a attachment de imagens** | [#3531](https://github.com/nearai/ironclaw/pull/3531) | ✅ UX em melhoria |

### Sinais Positivos

- **Atividade de PRs externos:** Contribuidores como `italic-jinxin` estão entregando UX improvements (mobile layout, attachment UX)
- **Test coverage expansion:** PRs focados em testes completos de gateway e model services ([#3469](https://github.com/nearai/ironclaw/pull/3469))
- **Documentação robusta:** 5+ PRs de documentação novos com specs e guides para onboarding de contributors

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Atendimento Prolongado

| Issue | Criado | Atualizado | Dias | Prioridade | Problema |
|-------|--------|------------|------|------------|----------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) — Publishing lag to crates.io | 2026-05-05 | 2026-05-13 | 9 | 🔴 HIGH | Downstream exposto a CVEs |
| [#2283](https://github.com/nearai/ironclaw/issues/2283) — Web UI file upload | 2026-04-10 | 2026-05-13 | 33 | 🟡 P2 | Funcionalidade missing |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) — E2E failure | 2026-05-10 | 2026-05-13 | 4 | 🔴 P0 | CI quebrado |

### PRs Pendentes de Review

| PR | Criado | Tamanho | Bottleneck |
|----|--------|---------|------------|
| [#3583](https://github.com/nearai/ironclaw/pull/3583) — WASM ProductAdapter runtime | 2026-05-13 | XL | Arquitetura complexa |
| [#3573](https://github.com/nearai/ironclaw/pull/3573) — Hooks framework | 2026-05-13 | XL | 8 issues vinculadas |
| [#3559](https://github.com/nearai/ironclaw/pull/3559) — tool_install fix | 2026-05-13 | XL | User-facing bug |

---

## Métricas Resumidas (2026-05-14)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 20 | 🔵 Estável |
| PRs abertos | 34 | 🔵 Estável |
| PRs merged/closed (24h) | 16 | 🟢 +50% vs média semanal |
| Releases (24h) | 0 | 🔴 Alerta: publishing lag |
| Falhas de CI | 1 | 🔴 Nightly E2E |
| Issues de segurança abertas | 2 | 🟡 Requer atenção |

---

**Relatório gerado automaticamente com base em dados do GitHub para nearai/ironclaw em 2026-05-14.**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 14 de maio de 2026

---

## 1. Panorama do Dia

O CoPaw mantém alta atividade com **31 issues e 48 PRs** atualizados nas últimas 24h, indicando um ciclo de desenvolvimento intenso. A release **v1.1.7-beta.2** foi publicada hoje, introduzindo melhorias em plugins FastAPI e timeout para keyring. A comunidade reportou bugs críticos envolvendo **bloqueio de MCP em erros HTTP 401**, **exaustão de memória ao ler logs de conversa** e **comandos shell multiline bloqueados**. O projeto demonstra saúde estável com 28 PRs mergeados/fechados, porém apresenta áreas de atrito recurrentes em gerenciamento de sessão, contexto e integrações externas.

---

## 2. Lançamentos

### v1.1.7-beta.2

**Mudanças:**

| Tipo | Descrição | Autor | PR |
|------|-----------|-------|-----|
| Feature | Habilita registro de instâncias FastAPI APIRouter através de plugins | @Osier-Yi | [#4255](https://github.com/agentscope-ai/QwenPaw/pull/4255) |
| Feature | Adiciona timeout para keyring | @rayrayraykk | [#4263](https://github.com/agentscope-ai/QwenPaw/pull/4263) |
| Fix | Corrige TokenUsage no console | @zha | (mencionado no changelog) |

**Breaking Changes:** Nenhuma identificada.

**Notas de Migração:** Não há mudanças que exijam migração de configuração para usuários existentes.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#4283](https://github.com/agentscope-ai/QwenPaw/pull/4283) | chore(version): bumping version to 1.1.7b2 | CLOSED | Preparação de release |
| [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | feat(cron & inbox): add inbox and optimize cron job | CLOSED | Funcionalidade de inbox e jobs agendados |
| [#4275](https://github.com/agentscope-ai/QwenPaw/pull/4275) | fix(QA agent): package docs into wheel | CLOSED | QA agent funcionando em pip/Docker |
| [#4261](https://github.com/agentscope-ai/QwenPaw/pull/4261) | Feat(tool): Add action="file_download" | CLOSED | Suporte a downloads no browser |
| [#4276](https://github.com/agentscope-ai/QwenPaw/pull/4276) | perf(tools): reduce max file read to 200MB | CLOSED | Redução de consumo de memória |
| [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) | fix(tool): browser activity tracking & crash monitoring | UNDER REVIEW | Melhoria de estabilidade do browser |

### PRs Abertos em Destaque

| # | Título | Impacto |
|---|--------|---------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | feat: add Tauri 2.x desktop app support | Suporte a desktop nativo |
| [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) | feat(skill): /make-skill command | Criação de skills reutilizáveis |
| [#4285](https://github.com/agentscope-ai/QwenPaw/pull/4285) | feat(console): full mobile responsive adaptation | Suporte mobile |
| [#4279](https://github.com/agentscope-ai/QwenPaw/pull/4279) | feat(agents): add magic command `memorize` | Persistência de contexto |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) | Bug: Integração com DingTalk/QQ/WeChat trava ao gerar PPT | 15 | Bug (CLOSED) | Usuários reportam erro AGENT_UNKNOWN_ERROR ao gerar arquivos PPT via canais externos. Afeta todas as versões. |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope provider config não é lido em runtime | 8 | Bug (CLOSED) | Configuração `dashscope.json` não é carregada, causando 401. Problema de precedência de configuração. |
| [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | read_file_safe passa 1GB para TextIOWrapper.read() | 6 | Bug (CLOSED) | Causa MemoryError em sistemas com RAM limitada. |
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | **MCP stream_http 401 bloqueia até timeout** | 5 | Bug (OPEN) | Crítico: qualquer erro HTTP >=400 (exceto 404) bloqueia MCP. |

### Análise das Demandas

**Padrões identificados:**

1. **Integração com Canais Externos** — Problemas recorrentes com DingTalk, WeChat e QQ sugerem fragilidade na camada de integração de canais.
2. **Gerenciamento de Memória** — Leituras de arquivo agressivas e logs de conversation causam OOM em cenários de uso intensivo.
3. **Configuração de Providers** — Usuários enfrentam dificuldades para configurar modelos customizados e DashScope.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Impacto Alto)

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| 🔴 Crítico | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | MCP stream_http bloqueia em erros 401/500 até timeout | OPEN |
| 🔴 Crítico | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | Ler logs de conversa causa exaustão de memória e travamento do sistema | OPEN |
| 🔴 Crítico | [#4232](https://github.com/agentscope-ai/QwenPaw/issues/4232) | SafeJSONSession ignora escritas concorrentes, corrompe estado de sessão | OPEN |

### Bugs Médios (Impacto Médio)

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| 🟠 Médio | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | shell_evasion_checks.newlines bloqueia silenciosamente comandos multiline | OPEN |
| 🟠 Médio | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) | Browser idle timeout durante sessões ativas + zombie processes | OPEN |
| 🟠 Médio | [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) | Mensagens de arquivo enviadas pelo AI exibem título em branco e preview pequeno | OPEN |

### Correções Recentes de Estabilidade

| # | Descrição |
|---|-----------|
| [#4276](https://github.com/agentscope-ai/QwenPaw/pull/4276) | Limite máximo de leitura de arquivo reduzido de 1GB para 200MB — reduz consumo de memória |
| [#4281](https://github.com/agentscope-ai/QwenPaw/pull/4281) | Patch temporário para erros HTTP em MCP streamable |
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | Refresh de índice após auto memory summary |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentes

| # | Título | Comentários | Potencial |
|---|--------|-------------|-----------|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat observability para comandos shell em execução (ver, matar, estender timeout) | 3 | Alto |
| [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | Adicionar templates de Agent pré-configurados para reduzir barreira de entrada | 2 | Alto |
| [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) | Exibição em tempo real do uso de contexto (tokens) na janela de chat | 1 | Médio |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) | Cron jobs one-shot via `--at <iso-datetime>` | 2 | Médio |

### Sinais de Roadmap

1. **Desktop Nativo** — PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) adiciona suporte Tauri 2.x, indicando direção para distribuição desktop.
2. **Mobile** — PR [#4285](https://github.com/agentscope-ai/QwenPaw/pull/4285) implementa responsividade mobile completa.
3. **Skills e Memória** — Comandos como `/make-skill` e `memorize` indicam foco em persistência e reutilização de conhecimento.
4. **Internacionalização** — Adição de Bahasa Indonesia ([#4287](https://github.com/agentscope-ai/QwenPaw/pull/4287)) e localizações em andamento.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Exemplos |
|-----|------------|----------|
| **Falhas em integrações de canais** | Alta | [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642), [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056), [#3690](https://github.com/agentscope-ai/QwenPaw/issues/3690) |
| **Consumo excessivo de memória** | Alta | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265), [#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170), [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) |
| **Configuração de providers/custom modelos** | Média | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159), [#4183](https://github.com/agentscope-ai/QwenPaw/issues/4183) |
| **Barreira de entrada para não-técnicos** | Média | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259), [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) |

### Cenários de Uso Reportados

- **Agentes autonomamente rodando em canais** (DingTalk, WeChat, QQ, Matrix)
- **Automação de tarefas via shell commands**
- **Leitura e síntese de documentos grandes**
- **Browser automation** para web scraping e interações
- **Agentes multi-modal** (geração de PPT, imagens)

### Satisfação/Insatisfação

| Aspecto | Sentimento |
|---------|------------|
| Funcionalidade core de chat | Positivo |
| Facilidade de configuração inicial | Negativo (usuário precisa de conhecimento técnico) |
| Estabilidade em longa execução | Negativo (memory leaks, zombie processes) |
| Suporte a múltiplos canais | Neutro com problemas recorrentes |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | Agent termina conversa após pensar sem feedback | 2026-03-25 | 4 | Alta |
| [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) | Markdown table auto-wrapping com `<br>` | 2026-04-17 | 2 | Média |
| [#4264](https://github.com/agentscope-ai/QwenPaw/issues/4264) | Por que restart regenera QwenPaw_QA_Agent? | 2026-05-13 | 1 | Média |
| [#3148](https://github.com/agentscope-ai/QwenPaw/issues/3148) | When will copaw v1.0.2 be released? | 2026-04-09 | 2 | Baixa |

### Issues Antigas Ainda Abertas

| # | Título | Criado | Estado |
|---|--------|--------|--------|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | Agent termina após thinking | 2026-03-25 | OPEN (6+ semanas) |

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 13 |
| Issues fechadas (24h) | 18 |
| PRs abertos | 20 |
| PRs mergeados/fechados | 28 |
| Releases | 1 (v1.1.7-beta.2) |
| Issues críticas abertas | 3 |
| PRs sob review | 5+ |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw](https://github.com/agentscope-ai/CoPaw) em 2026-05-14.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-14

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve um nível de atividade muito elevado nas últimas 24 horas, com **33 issues e 50 PRs atualizados**. Não houve lançamentos de novas versões, mas o período foi marcado por um volume significativo de correções de bugs e enhancements em áreas críticas — particularmente nos módulos de providers, runtime e gateway. A taxa de fechamento de issues (15 de 33) e PRs (16 de 50) indica um time ativo em revisões e merges, embora o volume absoluto de itens em aberto (18 issues + 34 PRs) sinalize pressão sobre a capacidade de triagem. A diversidade de componentes afetados — de canais (Matrix, Telegram, Discord, WhatsApp) a providers (Anthropic, OpenAI, Gemini, LM Studio) e funcionalidades core (cron, observabilidade, workspace) — evidencia um projeto em fase de maturação com crescente superfície de integração.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último período sem release, combinado com a existência de um PR de integração em draft (#6398 — Integration/v0.8.0), sugere que o time está em ciclo de consolidação para uma próxima versão significativa.

---

## 3. Progresso do Projeto

Os PRs fechados/marged nas últimas 24h trouxeram avanços concretos em estabilidade e compatibilidade:

| PR | Título | Impacto |
|---|---|---|
| [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) | fix(runtime): load workspace profiles before tool registration | Corrige crash ao iniciar o runtime — fecha [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) |
| [#6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597) | fix(providers): supports_vision() must reflect default/primary, not .any() | Corrige bypass silencioso de multimodal fallback — fecha [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) |
| [#6600](https://github.com/zeroclaw-labs/zeroclaw/pull/6600) | fix(providers): trust system CA roots for provider HTTPS requests | Permite certificados autoassinados em providers customizados — fecha [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) |
| [#6591](https://github.com/zeroclaw-labs/zeroclaw/pull/6591) | fix(provider): omit Anthropic opus temperature | Compatibilidade com Opus 4.7 que rejeita temperature — fecha [#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147) |
| [#6598](https://github.com/zeroclaw-labs/zeroclaw/pull/6598) | fix(providers): defensively omit Anthropic temperature for Opus 4.7 | Correção complementar ao #6591 para path nativo |
| [#6631](https://github.com/zeroclaw-labs/zeroclaw/pull/6631) | fix(provider): restrict compatible reasoning effort models | Limita `reasoning_effort` a modelos OpenAI legítimos |

**Destaque em progresso:** O PR [#6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635) (`fix(cron,channels): carry thread_id through cron announce delivery`) resolve um bug de perda de contexto em cron jobs, e o [#6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629) (`fix(providers): stop replaying stale tool-result images`) ataca imagens obsoletas em history de ferramentas.

---

## 4. Temas Quentes da Comunidade

Os itens com maior engajamento (comentários/reações) revelam as prioridades da comunidade:

| Issue/PR | Tema | Comentários | Interpretação |
|---|---|---|---|
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails to load profiles at startup | 2 | Problema de DX crítico; já corrigido em [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) |
| [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) | Nextcloud Talk cancela requests após ~5s | 2 | Integração com LLMs locais lentos; risco alto |
| [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | Gemini CLI provider crashes com --prompt | 2 | Breaking change em API do gemini-cli; risco alto |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | Hybrid skills + WASM tools | 2 | Feature de plugin architecture aguardada |
| [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) | model_routing_config stomps on schema_version=2 | 2 | Migração de config em risco; P1 |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding erra entre Codex e OpenAI API | 2 | UX quebrado no onboarding; P1 |

**Padrão identificados:** A comunidade está fortemente focada em (1) estabilidade de providers não-OpenAI (Gemini, LM Studio, Nextcloud), (2) migração de schema v2→v3, e (3) experiência de onboarding. O engajamento moderado (2 comentários por item) indica triagem ativa mas baixo debate público.

---

## 5. Bugs e Estabilidade

### Por Severidade (S0–S1 — Críticos)

| Issue | Descrição | Componente | Status |
|---|---|---|---|
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) | Docker image `zeroclawlabs/tool-runner` não existe | docs/sandbox | CLOSED |
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | Pairing code não exibido em porta alternativa | gateway | CLOSED |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | google_workspace tool falha em Windows (.cmd não resolvido) | tool:google-workspace | CLOSED |
| [#6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514) | WebSocket spin após disconnect — abort/health parados | gateway/runtime | OPEN |

### Por Severidade (S2 — Degradado)

| Issue | Descrição | Componente | Status |
|---|---|---|---|
| [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) | Cron callbacks perdem thread_id | cron/channel:webhook | OPEN |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | GLM-5.1 "Thoughts" vazam na resposta final | provider:glm | OPEN |
| [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) | Imagens obsoletas de tool-results se repetem | provider | OPEN |
| [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | cron_run manual persiste falhas como "ok" | cron | OPEN |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | Mensagens system não-líderes enviadas a providers compatíveis | provider:compatible | OPEN |

**Análise:** O volume de bugs S2 abertos (5) com 0 comentários indica bugs novos ainda não triados. A boa notícia é que vários bugs S1 foram fechados (onboarding, gateway pairing, sandbox image, google-workspace), indicando foco em estabilidade antes da v0.8.0.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de Alta Prioridade

| Issue | Feature | Sinais de Roadmap |
|---|---|---|
| [#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604) | Multi-Agent Support com roles e ferramentas por agente | Alinhamento explícito com OpenClaw — indica convergência de roadmap |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Pairing code mais forte (32 chars alfanumérico) | Feature de segurança para gateway; P1 |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills UX (v0.7.6) | Tema confirmado para próxima release |
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | Integration/v0.8.0 (draft) | Schema v3 migration + breaking changes in-flight |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | Comfy Cloud / ComfyUI como provider de mídia | Expansão de multimídia + groundwork para gen_video |
| [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | Comportamento configurável para imagens sem vision | UX defensivo em edge cases |

### Features de Observabilidade

| Issue | Feature | Status |
|---|---|---|
| [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | gen_ai.input/output.messages em spans de llm.call | Proposta por community fork (Micra-io) |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn-level OTel trace correlation | Follow-up de #6009 e #6190 |

**Sinal de roadmap:** A convergência entre multi-agent, schema v3 e skills UX sugere que v0.8.0 será uma release com breaking changes significativos. A feature de pairing mais seguro indica amadurecimento do gateway para produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

1. **Provedores locais lentos discriminados** — O bug [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) (Nextcloud Talk cancela requests após 5s com LocalAI) expõe que o timeout não é configurável por provider, afetando usuários de LLMs locais.

2. **Onboarding confunde Codex com OpenAI** — O bug [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) demonstra que a experiência de primeira execução ainda tem UX não-intuitiva para diferenciação de produtos OpenAI.

3. **Workspace profiles não carregam no startup** — O bug [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) (já corrigido) mostra que configurações persistidas não sobrevivem reinícios, impactando workflows baseados em perfis.

4. **Config v2 stomped by routing actions** — O bug [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) indica que a migração de schema não é idempotente — agentes podem reverter configurações atualizadas.

### Cenários de Uso Emergentes

- **Multi-agent orchestration:** Usuários pedem roles isolados e ferramentas por agente ([#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604))
- **Geração de mídia:** ComfyUI/Comfy Cloud como provider de imagens e vídeo ([#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563))
- **Segurança corporativa:** Certificados CA customizados ([#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528)), pairing forte ([#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613))
- **Providers chineses:** GLM-5.1 suporte com thought handling adequado ([#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há vários dias (>= 5 dias desde criação, 0 comentários)

| Issue | Criado | Dias | Prioridade | Tema |
|---|---|---|---|---|
| [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | 2026-05-13 | 1 | P2 | cron_run persiste falhas como ok |
| [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) | 2026-05-13 | 1 | P1 | Stale tool-result images replay |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | 2026-05-09 | 5 | P1 | System messages não-líderes em providers compatíveis |
| [#6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561) | 2026-05-10 | 4 | P3 | Non-loopback host recovery hint rejeitado pelo admin guard |
| [#6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) | 2026-05-11 | 3 | P2 | Matrix smoke check após sdk 0.17 bump |
| [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) | 2026-05-11 | 3 | P2 | Telegram inline-keyboard não reflete outcome |

### PRs com need-author-action (risco de stale)

| PR | Tema | Idade |
|---|---|---|
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | OTel tool spans enrichment | ~22 dias |
| [#6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) | Sanitize session keys | ~15 dias |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | WhatsApp/Signal interactive-reply | ~11 dias |
| [#6580](https://github.com/zeroclaw-labs/zeroclaw/pull/6580) | LM Studio runtime options | ~3 dias |
| [#6598](https://github.com/zeroclaw-labs/zeroclaw/pull/6598) | Anthropic Opus temperature | ~2 dias |

**Recomendação:** O PR #6009 (enriquecimento de spans OTel) está open há ~22 dias com label `needs-author-action` —有必要 um ping ao autor @alexandme para evitar que a contribuição da community stales. O PR #6398 (v0.8.0 integration) em draft merece revisão de alinhamento estratégico com os pedidos de multi-agent e schema v3.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-14. Periodicidade recomendada: diária durante ciclos de release.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*