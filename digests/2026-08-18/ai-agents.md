# Resumo diário do ecossistema de agentes de IA 2026-08-18

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-17 20:20 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-18

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade no período analisado**. Nenhum commit, issue ou release foi registrado nas últimas 24 horas, indicando um dia de manutenção rutinária. A única atualizaçãonotável é uma dependência Docker (alpine 3.23 → 3.24) pendente de merge, originada automaticamente pelo Dependabot. O repositório encontra-se em estado estável, sem indicadores de problemas críticos ou bloqueios.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Para追踪 o histórico de releases e planejamentos de lançamento, consulte a [página de releases](https://github.com/nullclaw/nullclaw/releases).

---

## 3. Progresso do Projeto

| #956 | **[ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)** | `OPEN` |
|---|---|---|
| **Status** | Aprovação pendente | **Autor** | dependabot[bot] |
| **Criado** | 2026-06-15 | **Atualizado** | 2026-08-17 |

**Análise:** Atualização de dependência Docker gerada automaticamente. O bump corrige potenciais vulnerabilidades Known no alpine e garante compatibilidade com a versão mais recente do container base. **Recomendação:** Merge é seguro e deve ser priorizado para manter a postura de segurança.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações nas últimas 24 horas.**

O volume zero de interação comunitária neste período pode indicar:
- Estabilidade atual do projeto
- Período de baixa demanda
- Necessidade de刺激性 (roadmap, enquetes, chamadas para contribuição)

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

Não há indicadores de instabilidade no estado atual do projeto.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

Para consultar o backlog de features e roadmap estratégico, visite:
- [Issues com标签 `enhancement`](https://github.com/nullclaw/nullclaw/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
- [Discussion board](https://github.com/nullclaw/nullclaw/discussions)

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback nas últimas 24 horas.**

O estado atual não fornece indicadores de satisfação ou insatisfação. Para coletar feedback estruturado, considere:
- Monitorar issues fechadas recentemente com comentários de resolução
- Analisar estrelas/watchers do repositório
- Revisar discussões e issues antigas

---

## 8. Backlog que Merece Atenção

| Prioridade | Item | Status | Última Atualização |
|---|---|---|---|
| 🔴 Alta | [#956 - Bump alpine 3.23→3.24](https://github.com/nullclaw/nullclaw/pull/956) | `OPEN` | 2026-08-17 |

**Análise:** O PR de dependência Docker está aberto há **+60 dias** sem merge. Embora seja uma atualização de segurança rotineira, mantê-lo pendente por período prolongado:
- Pode acumular dependências defasadas
- Gera ruido no tracking de vulnerabilidades
- Indica processo de review desatualizado

**Ação recomendada:** Avaliar e mesclar PRs Dependabot em batches quinzenais ou configurar automerge para atualizações não-breaking.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|---|---|
| 🆕 Issues abertas | 0 |
| ✅ Issues fechadas | 0 |
| 📥 PRs abertas | 1 |
| 🔀 PRs merged/fechadas | 0 |
| 🎉 Releases | 0 |
| 💬 Comentários totais | 0 |

---

**Próxima verificação recomendada:** 2026-08-19

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Período de análise:** 2026-08-18 | **Projetos avaliados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta Vitalidade geral** em 18 de agosto de 2026, com 6 dos 7 projetos demonstrando atividade intensa de desenvolvimento. Hermes Agent, ZeroClaw e IronClaw lideram em volume de PRs (50+, 50+ e 45+ atualizações em 24h, respectivamente), enquanto NullClaw permanece em modo de manutenção passiva. Os projetos convergem em três eixos técnicos: **resiliência de integrações (Telegram, Slack)**, **segurança e controle de custos em operações LLM**, e **extensibilidade via plugins e providers plugáveis**. Observa-se uma tendência clara de maturação — os projetos mais ativos transitam de features core para DX/observabilidade, enquanto bugs de estabilidade (especialmente Windows e edge cases de hardware) dominam os backlogs.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Saúde | Velocidade |
|---------|:------------:|:---------:|:--------------:|:-----:|:----------:|
| **Hermes Agent** | 50 | 50 | 1 (v0.20.3) | 🟢 Estável com pressão | Muito Alta |
| **ZeroClaw** | 50 | 50 | 0 | 🟡 Estável, bottleneck de review | Muito Alta |
| **IronClaw** | 27 | 45 | 0 | 🟢 Estável | Alta |
| **CoPaw** | 15 | 34 | 0 | 🟢 Maturando | Alta |
| **NanoBot** | 3 | 15 | 0 | 🟢 Estável | Alta |
| **PicoClaw** | 4 | 5 | 0 | 🟢 Estável | Moderada |
| **NullClaw** | 0 | 1 | 0 | 🟢 Manutenção | Muito Baixa |

**Observações:**
- Hermes Agent é o único projeto com release no período (patch estabilizador v0.20.3 consolidando ~125 PRs)
- ZeroClaw e IronClaw apresentam o maior volume de issues + PRs combinados, indicando comunidade ativa e pipeline denso
- NullClaw opera em modo mínimo viável — referência estática no ecossistema

---

## 3. Posicionamento do Projeto Principal (NullClaw como Referência)

NullClaw serve como **bloco estático de referência**, carece de atividade orgânica — nenhum commit comunitário, zero feedback de usuários e PR Dependabot pendente há 60+ dias. Em contraste direto:

| Dimensão | NullClaw | Pares Ativos (mediana) |
|----------|:--------:|:---------------------:|
| PRs ativos (24h) | 1 | 15–50 |
| Issues fechadas (24h) | 0 | 3–6 |
| Bugs P1 em aberto | 0 | 1–4 |
| RFCs em discussão | 0 | 3–6 |
| Cenários de uso documentados | 0 | 4–8 |

**Sem竞争优势 identificadas** — NullClaw não demonstra tração comunitária, roadmap explícito ou diferenciadores técnicos no período analisado. A comparação sugere que o projeto está em estado de abandono ou serve exclusivamente como referência interna de outra initiative.

---

## 4. Focos Técnicos Compartilhados

Os projetos do ecossistema demonstram convergência significativa em problemas técnicos comuns:

### 4.1 Resiliência de Integração com Canais

| Projeto | Problema | Status |
|---------|----------|--------|
| **NanoBot** | Telegram polling silencia após falhas de rede | ✅ Resolvido (#5156) |
| **IronClaw** | Telegram consent/selection ausente | 🐛 Em aberto (#7715) |
| **PicoClaw** | Upload de mídia Slack falha | 🐛 PR #3340 em revisão |
| **ZeroClaw** | LINE: autorização de remetente ausente | 🐛 Em aberto (#9427) |

### 4.2 Controle de Custos e Budget LLM

| Projeto | Feature | Prioridade |
|---------|---------|------------|
| **NanoBot** | Spend Firewall hibrido (loop protection + budget) | P1 — Issue #5409 |
| **Hermes Agent** | Provider fallback não reavaliado em turn | P2 — Issue #88595 |
| **CoPaw** | Token counting superestima imagens | ✅ Resolvido (#6968) |

### 4.3 Estabilidade Cross-Platform

| Projeto | Área Windows/Linux | Severidade |
|---------|-------------------|------------|
| **Hermes Agent** | Instalação Debian quebrada, update Windows falhando | P1 — 3 issues |
| **ZeroClaw** | 74 testes falhando no Windows | P1 — 70 dias |
| **IronClaw** | libSQL write connection starvation | P1 — #7714 |
| **NanoBot** | 3 PRs de compatibilidade Windows pendentes | P2 |

### 4.4 Arquitetura de Providers/Plugins

Múltiplos projetos investem em **provider discovery unificado** e **autenticação plugável**:

- **CoPaw** (PR #6302): roteamento e metadata de modelos unificado
- **ZeroClaw** (RFC #7141): autenticação inbound plugável
- **Hermes Agent** (PR #67143): project-local skills discovery
- **PicoClaw** (PR #3299): provider nativo Exa para busca web

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Primário

| Projeto | Foco Principal | Público-Alvo |
|---------|---------------|--------------|
| **Hermes Agent** | Desktop/TUI experience, skills extensibility | Desenvolvedores individuais, power users |
| **ZeroClaw** | Segurança, runtime isolation, RFC-driven | Operadores enterprise, audit compliance |
| **IronClaw** | Performance DB, automations, notifications | Equipes de automação, workflows |
| **CoPaw** | Multi-canal (WeChat, DingTalk, Feishu) | Mercado chinês, multi-plataforma |
| **NanoBot** | Resiliência Telegram, CLI refactoring | Bots de comunicação, operadores |
| **PicoClaw** | Multi-canal integrado (IRC, Slack, Weixin) | DevOps, infraestruturas leves |
| **NullClaw** | — | Desconhecido / referência |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Características |
|-----------|----------|-----------------|
| **SQLite-first** | IronClaw, Hermes Agent | Simplicidade, limitations em escala |
| **Provider plugável** | ZeroClaw, CoPaw | Flexibilidade de modelos, complexidade de routing |
| **Channel-native** | NanoBot, PicoClaw | Ottimização por canal, menos abstrações |
| **RFC-driven governance** | ZeroClaw | Decisões públicas, dívida de processso |

### 5.3 Diferenciadores Notáveis

- **Hermes Agent**: EPIC de project-local `.hermes/skills/` e Generative UI com diretivas inline
- **ZeroClaw**: 4+ RFCs de segurança P1/P2 em progresso, Chat Completions profile para compatibilidade OpenAI
- **IronClaw**: Epic de ~60% redução de writes DB, notification inbox durável
- **CoPaw**: Sistema de memória de longo prazo via PowerContext (2 PRs paralelos)
- **NanoBot**: Hybrid Spend Firewall como feature nativa

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | PRs/24h | Tempo médio de merge | Perfil |
|------|----------|:-------:|:-------------------:|--------|
| 🔥 Hot | Hermes Agent, ZeroClaw | 50+ | Alto (bottleneck) | High velocity, high debt |
| ⚡ Active | IronClaw, CoPaw | 27–45 | Moderado | Steady progress |
| 📊 Steady | NanoBot, PicoClaw | 3–15 | Bom | Maturando, focado |
| ⏸️ Dormant | NullClaw | 1 | N/A | Manutenção mínima |

### 6.2 Qualidade vs. Velocidade

| Projeto | Taxa de bugs P1 abertos | RFCs em aberto | Avaliação |
|---------|:----------------------:|:--------------:|-----------|
| **ZeroClaw** | 4 | ~15 | Velocidade alta, segurança requer atenção |
| **Hermes Agent** | 4 | 4 | Velocidade alta, Windows/Linux bloqueiam install |
| **IronClaw** | 1 | 2 | Balanceado, epic de perf em curso |
| **CoPaw** | 2 críticos | 0 visíveis | Bugs críticos pendentes afetam retenção |
| **NanoBot** | 1 alta | 0 | Bug #4864 (39 dias) precisa priorização |

### 6.3 Sinais de Maturidade

**Projetos em fase de consolidação** (features → refinamento):
- NanoBot: correções de resiliência, WebUI enrichment
- PicoClaw: bugfixes de produção, estabilidade
- Hermes Agent: release patch-only após período de alta feature

**Projetos em fase de expansão** (escalabilidade, enterprise):
- ZeroClaw: segurança plugável, Chat Completions profile
- IronClaw: DB perf, notification inbox, CLI streaming
- CoPaw: multi-provider routing, memória persistente

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Spend Firewall / Cost Protection** | NanoBot #5409, Hermes Agent #88595 | LLM cost governance será feature nativa |
| **Memória Persistente de Longo Prazo** | CoPaw #7079/#7080, IronClaw #7275 | Beyond-session context é demanda real |
| **Multi-Canal Model Config** | CoPaw #7085, NanoBot multi-session | Usuários querem IA otimizada por canal |
| **Providers Unificados** | CoPaw #6302, PicoClaw #3299 | Discovery e routing de modelos será commodity |
| **Enterprise-Ready Features** | ZeroClaw auth plugável, IronClaw notifications | Open source move para B2B |

### 7.2 Tendências Técnicas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **WebUI Enrichment** | 3+ PRs WebUI em NanoBot simultâneos | Interfaces de agente se aproximam de chatbots comerciais |
| **WASM Guest Tools** | IronClaw #7703, #7184 | Sandboxed extensibility cross-language |
| **RFC-as-Governance** | ZeroClaw com 10+ RFCs ativas | Decisões arquiteturais mais transparentes |
| **Windows como Second-Class Citizen** | 3 projetos com bugs Windows críticos | Devs Linux dominam, UX Windows negligenciada |
| **Async/Streaming First** | IronClaw #7513, Hermes Agent UI | Real-time feedback é expectation |

### 7.3 Tendências de Mercado

| Sinal | Interpretação |
|-------|---------------|
| **Demanda por compatibilidade OpenAI SDK** (ZeroClaw #8603) | Integração drop-in com ecossistema existente é valor |
| **Cross-language markets** (CoPaw com DingTalk/WeChat/Feishu) | Mercado não-anglófono é prioridade estratégica |
| **Security RFCs dominando** (ZeroClaw: 4 de top 10 issues) | Compliance e auditability serão diferenciadores |
| **Bug reports de produção** (NanoBot Telegram crash, IronClaw memory leak) | Projetos em uso real, não apenas hobby |

---

## 8. Recomendações para Decisores

### Para Desenvolvedores

1. **ZeroClaw e Hermes Agent** oferecem maior oportunidade de contribuição — alto volume, RFCs ativos, mantenedores responsivos
2. **IronClaw** é ponto de entrada para interessados em performance de banco de dados e automations
3. **Evitar NullClaw** — sem tração comunitária identificável no período

### Para Arquitetos

1. **Provider abstraction** é padrão emergente — projetar interfaces que suportem discovery e routing reduzirá integração futura
2. **Security-by-design** (ZeroClaw) representa direção correta para enterprise adoption
3. **Multi-canal** não é trivial — NanoBot e PicoClaw demonstram complexidade de manter resiliência cross-platform

### Para Produto/Strategy

1. **Spend firewall** é feature gap — NanoBot está pioneiro, mas demanda é ecossistema-wide
2. **Enterprise readiness** (notifications, audit, auth plugável) diferencia projetos prontos para B2B
3. **Windows support** é dívida técnica que limita adoção corporativa — projetos que resolverem primeiro terão vantagem

---

*Relatório gerado em 2026-08-18. Fontes: GitHub público dos repositórios listados. Análise de tendências baseada em volume de issues/PRs e engajamento comunitário.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-18

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24 horas, com 15 PRs atualizados e 3 issues processadas. A equipe demonstra foco em **estabilidade e robustez** —有多项修复涉及 Telegram polling 故障恢复、Windows 兼容性、gateway 进程管理等核心基础设施问题。值得注意的是,社区提出了一项关于 **LLM 成本防火墙** 的重要功能提案,预示着项目正从纯技术框架向商业化运营演进。

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Recomenda-se monitorar os PRs em merge para antecipar a próxima release.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (5)

| # | Título | Impacto |
|---|--------|---------|
| [#5416](https://github.com/HKUDS/nanobot/pull/5416) | fix(gateway): stabilize process identities | Melhora estabilidade cross-platform ao substituir `ps lstart` dependente de locale por `proc_pidinfo` nativo |
| [#5301](https://github.com/HKUDS/nanobot/pull/5301) | fix(telegram): bridge stdlib logging and detect stalled polling | Observabilidade para Telegram polling, pré-requisito para watchdog completo |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | **Resolves #5171** — механизм восстановления после сетевых сбоев с Telegram |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | feat(cli): add native TypeScript terminal UI | Supersedes #4329 — unifica UI terminal cross-platform |
| [#5410](https://github.com/HKUDS/nanobot/pull/5410) | fix(goal): stop repeating clarification replies | Corrige loop infinito de clarificação em goals sustentados |

### Destaque de Avanço

O PR [#5156](https://github.com/HKUDS/nanobot/pull/5156) representa uma **correção crítica de resiliência** —解决了 Telegram bot 在网络波动后永久停止接收消息的长期问题。

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|----|--------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | [bug] Endless loop for `<tool_call> <function=complete_goal>` | 7 | 1 | **OPEN** |
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall | 0 | 0 | **OPEN** |

### Análise

**#4864 — Loop Infinito em `complete_goal`**
- Autor: Asem-D | Criado: 2026-07-09 | Atualizado: 2026-08-17
- **Severidade**: Alta — impacta produtividade do agente
- **Causa raiz**: Gateway está parseando parâmetro `recap` como string ao invés de JSON object
- **Sinais**: 7 comentários indicam discussão técnica ativa; bug introduzido em update recente
- 🔗 [Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)

**#5409 — Spend Firewall (Proposta Comercial)**
- Autor: sophieamoure2026-ui | Criado: 2026-08-17
- **Relevância estratégica**: Sugere necessidade de proteção contra loops infinitos que consomem budget LLM
- **Posicionamento**: Indica que o projeto está em transição open-source → commercial scaling
- 🔗 [Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertas

| # | Título | Severidade | Prioridade |
|---|--------|------------|------------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for `complete_goal` | **Alta** | — |
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Cost protection (feature request) | — | — |

### Bugs Fechados

| # | Título | Resolução |
|---|--------|-----------|
| [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Telegram polling stalls silently after network failures | Fix merged em [#5156](https://github.com/HKUDS/nanobot/pull/5156) |

### PRs de Bug em Aberto

| # | Título | Severidade | Plataforma |
|---|--------|------------|------------|
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): make weather workflow Windows-safe | Média | Windows |
| [#5415](https://github.com/HKUDS/nanobot/pull/5415) | fix(gateway): adopt Windows venv child process | Média | Windows |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | fix(cron): retire persisted heartbeat/dream system jobs when disabled | Média | Cross-platform |

### Análise de Estabilidade

**Telegram resilience** foi addressado com PRs [#5156](https://github.com/HKUDS/nanobot/pull/5156) e [#5301](https://github.com/HKUDS/nanobot/pull/5301), cobrindo detecção e recovery de polling stalls.

**Windows compatibility** recebe atenção contínua com 3 PRs pendentes.

**Cron jobs persistidos** representam regressão potencial — desabilitar heartbeat/dream via config não funciona corretamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#5411](https://github.com/HKUDS/nanobot/pull/5411) | refactor(cli): isolate local agent runtime | CLI | — |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): add session messaging via mentions | WebUI | — |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | feat(webui): add follow-up suggestions | WebUI | P2 |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | feat(webui): add temporary side conversations | WebUI | P2 |

### Novas Features Solicitadas (Issues)

| # | Título | Proposta |
|---|--------|----------|
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Hybrid Spend Firewall | Proteção contra loops infinitos e budget overruns |

### Sinais de Roadmap

1. **WebUI enrichment**: 3 PRs simultâneos indicando foco em UX (mentions, follow-ups, side conversations)
2. **CLI refactoring**: Isolar agent runtime sugere preparação para novas interfaces
3. **Enterprise readiness**: Spend firewall indica preparação para deployments comerciais

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Frequência | Impacto |
|----------|------------|---------|
| Telegram para de receber mensagens silenciosamente | 1 usuário reportou em produção | **Crítico** — perda de funcionalidade sem feedback |
| Loop infinito em `complete_goal` | 1 usuário + 1 👍 | Alto — burn de tokens |
| Windows compatibility issues | Mencionado em 2+ PRs | Médio — experiência quebrada |
| Cron jobs não respeam configuração desabilitada | 1 reportado | Médio — consumo desnecessário de recursos |

### Cenários de Uso Emergentes

- **Multi-session WebUI**: Usuários querem orquestrar múltiplas sessões de agente simultaneamente
- **Side conversations**: Necessidade de threads temporárias durante conversas principais
- **Follow-up suggestions**: Paridade com interfaces como DeerFlow

### Satisfação Geral

**Positiva** — comunidade ativa com 15 PRs, mix de bug fixes críticos e features de UX. Telegram recovery demonstra responsiveness a problemas de produção.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Dias Inativo | Prioridade |
|---|--------|--------|--------------|------------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for `complete_goal` | 2026-07-09 | ~39 dias | **Alta** |

### Observação

A issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) está aberta há **39 dias** com 7 comentários — indica discussão técnica complexa, mas merece atenção para priorização de fix.

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas | 2 |
| Issues fechadas | 1 |
| PRs abertos | 10 |
| PRs fechados/merged | 5 |
| Releases | 0 |
| Principais áreas | Telegram, WebUI, Gateway, Windows compatibility |

---

*Relatório gerado em 2026-08-18. Dados extraídos de github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-18

---

## 1. Panorama do dia

O projeto Hermes Agent mantém **alta atividade** em 18 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A release v0.20.3 (v2026.8.16.2) foi publicada ontem como patch estabilizador, consolidadando ~125 PRs desde a v0.20.2. O estado operacional é **estável com pressão sobre estabilidade em Windows e Desktop**: três issues P1 (críticas) envolvem instalação Debian quebrada e falhas de update no Windows, enquanto o desktop client apresenta problemas persistentes de consumo de CPU em idle. A comunidade demonstra interesse significativo em features de sessão e observabilidade multi-agente, com RFCs bem discutidos e EPICs em andamento sobre skills project-local.

---

## 2. Lançamentos

### v2026.8.16.2 — Hermes Agent v0.20.3

| Campo | Detalhe |
|-------|---------|
| **Data** | 16 de agosto de 2026 |
| **Tipo** | Patch release |
| **PRs consolidados** | ~125 |

**Descrição:** Release estabilizadora que consolida o trabalho desde v0.20.2 para consumidores de Docker images, hosted deployments e fresh installs.

**Sem breaking changes conhecidas** — trata-se de consolidação de patches anteriores.

📎 **Link:** [Release v2026.8.16.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (7 total nas últimas 24h)

| PR | Autor | Contribuição |
|----|-------|-------------|
| [#88024](https://github.com/NousResearch/hermes-agent/pull/88024) | OutThisLife | Generative UI: agents renderizam live inline UI via plugin-registered directives; dados de plugin sobrevivem update/remove |
| [#36963](https://github.com/NousResearch/hermes-agent/pull/36963) | t22n6y8s21 | Retire deprecated APIs; refresh dependencies (UTC, asyncio.get_event_loop, setuptools, DCF) |
| [#80591](https://github.com/NousResearch/hermes-agent/pull/80591) | kevcube | Meta model provider support para muse-spark models |
| [#67143](https://github.com/NousResearch/hermes-agent/pull/67143) | arin8513 | Project-local skills discovery em `.hermes/skills/` |
| [#46876](https://github.com/NousResearch/hermes-agent/pull/46876) | marknchristian | Fix Windows MSYS path resolution após upgrade |
| [#79077](https://github.com/NousResearch/hermes-agent/pull/79077) | qd678 | DiffusionCanvas placeholder animation otimizada |

**Destaque:** O PR #88024 fecha a lacuna entre "agente consegue construir plugin" e "plugin aparece na conversa e mantém seus dados" — avanço significativo para extensibilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Link |
|---|--------|-------------|-----|--------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | 47 | 0 | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/66616) |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL | 17 | 6 | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| [#73082](https://github.com/NousResearch/hermes-agent/issues/73082) | Desktop renderer/GPU 100%+ CPU at idle | 14 | 1 | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/73082) |
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | Unified deadline layer (4 phases) | 12 | 0 | OPEN | [Issue](https://github.com/NousResearch/hermes-agent/issues/85125) |
| [#4667](https://github.com/NousResearch/hermes-agent/issues/4667) | Auto-discover project-local skills | 6 | 11 | CLOSED | [Issue](https://github.com/NousResearch/hermes-agent/issues/4667) |

**Análise:**
- **Skills index stale (#66616):** 47 comentários indicam problema operacional recorrente — a automated freshness probe falha regularmente, index está 29.8h old (limite 26h). Necessita atenção da equipe de platform.
- **SessionDB Provider (#23717):** RFC bem recebido (6 👍) propõe eliminar o SQLite single-file bottleneck que causa "hot-update death spiral". Decisão pendente — impacto arquitetural significativo.
- **Desktop CPU (#73082):** Sintoma de re-render loop no Electron renderer — usuários relatam máquina esquentando e alto consumo de energia mesmo em idle.

---

## 5. Bugs e Estabilidade

### Issues P1 — Críticas

| # | Título | Área | Link |
|---|--------|------|------|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian installation broken; uv.lock & npm install failed | install-update | [Issue](https://github.com/NousResearch/hermes-agent/issues/87093) |
| [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | ZIP fallback deletes desktop app, updates report "Already up to date" | Windows, install-update | [Issue](https://github.com/NousResearch/hermes-agent/issues/83846) |
| [#86093](https://github.com/NousResearch/hermes-agent/issues/86093) | Windows: hermes update always fails (live hermes.exe cannot be renamed) | Windows, install-update | [Issue](https://github.com/NousResearch/hermes-agent/issues/86093) |
| [#88532](https://github.com/NousResearch/hermes-agent/issues/88532) | Profile sessions stored in wrong state.db (Feishu) | sessions, profiles | [Issue](https://github.com/NousResearch/hermes-agent/issues/88532) |

### Issues P2 — Importantes

| # | Título | Área | Link |
|---|--------|------|------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC: Pluggable SessionDB Provider | sessions | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| [#88607](https://github.com/NousResearch/hermes-agent/issues/88607) | Dashboard WebSocket rejections return HTTP 403 | dashboard, auth | [Issue](https://github.com/NousResearch/hermes-agent/issues/88607) |
| [#88595](https://github.com/NousResearch/hermes-agent/issues/88595) | Provider fallback never re-evaluated inside a turn | agent, usage-cost | [Issue](https://github.com/NousResearch/hermes-agent/issues/88595) |

### Padrões identificados

1. **Windows é área problemática recorrente** — 3 das 7 issues P1/P2 envolvem Windows (install, update, path resolution)
2. **Desktop client instável** — CPU spin, UI state bugs (session tabs vanishing), kanban sidebar state
3. **Sessions/profile isolation** — problemas de storage leak entre perfis

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e EPICs em discussão

| # | Título | Tipo | 👍 | Link |
|---|--------|------|-----|------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | Pluggable SessionDB Provider (PostgreSQL, MySQL) | RFC | 6 | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | Unified deadline layer — timeout/hang backlog fix (4 fases) | Tracking | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/85125) |
| [#48970](https://github.com/NousResearch/hermes-agent/issues/48970) | EPIC: Project-local .hermes/ — per-project skills & MCP | EPIC | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/48970) |
| [#67648](https://github.com/NousResearch/hermes-agent/issues/67648) | RFC: Bundle Perseus Vault as official memory provider | RFC | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/67648) |
| [#88580](https://github.com/NousResearch/hermes-agent/issues/88580) | Factory view for grounded multi-agent work observability | Feature | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/88580) |
| [#88589](https://github.com/NousResearch/hermes-agent/issues/88589) | HOTL: typed topology IR and honest badge decoder | Innovation | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/88589) |

### Features com demanda clara

| # | Título | Componentes | Link |
|---|--------|-------------|------|
| [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) | Auto reasoning mode (ChatGPT-style) | agent, config | [Issue](https://github.com/NousResearch/hermes-agent/issues/40306) |
| [#16636](https://github.com/NousResearch/hermes-agent/issues/16636) | Expandable Tool Call Messages in TUI | tui | [Issue](https://github.com/NousResearch/hermes-agent/issues/16636) |

**Sinais de roadmap:**
- Arquitetura de timeout/hang está sendo reestruturada em 4 fases (#85125)
- EPIC de project-local skills está em desenvolvimento ativo (dependências #1, #2, #3 sendo fechadas)
- Observabilidade multi-agente avança com Factory view e topology IR

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Frequência | Impacto | Links |
|-----|------------|---------|-------|
| **Instalação quebrada no Linux** | Alta | Bloqueante — novos usuários não conseguem começar | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) |
| **Update falha no Windows** | Alta | Impossibilita updates seguros; workaround manual necessário | [#83846](https://github.com/NousResearch/hermes-agent/issues/83846), [#86093](https://github.com/NousResearch/hermes-agent/issues/86093) |
| **Desktop client consome CPU em idle** | Alta | Desgaste de hardware, experiência negativa | [#73082](https://github.com/NousResearch/hermes-agent/issues/73082), [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) |
| **UI state se perde** | Média | Session tabs somem, kanban sidebar fica stuck | [#88531](https://github.com/NousResearch/hermes-agent/issues/88531), [#88534](https://github.com/NousResearch/hermes-agent/issues/88534) |
| **Skills index desatualizado** | Contínua | Docs e hints incorretos para usuários | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |

### Cenários de uso destacados

1. **Enterprise com múltiplos profiles:** Sessões armazenadas no state.db errado causam confusão em ambientes Feishu multiplexados
2. **Batch jobs de longa duração:** Fallback de provider não é reavaliado — uma 429 transiente prende o job ao provider fallback por toda a execução
3. **Multi-device:** SSH Bot Mode esvazia lista de bots de outras máquinas ao clicar no agente local

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou aguardando decisão (sem atividade recente)

| # | Título | Idade | Prioridade | Status | Link |
|---|--------|-------|------------|--------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded | ~30 dias | P3 | Aguardando triagem | [Issue](https://github.com/NousResearch/hermes-agent/issues/66616) |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC: Pluggable SessionDB Provider | ~99 dias | P2 | needs-decision | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | Unified deadline layer (4 phases) | ~5 dias | P3 | needs-decision | [Issue](https://github.com/NousResearch/hermes-agent/issues/85125) |
| [#67648](https://github.com/NousResearch/hermes-agent/issues/67648) | RFC: Perseus Vault memory provider | ~30 dias | P3 | needs-decision | [Issue](https://github.com/NousResearch/hermes-agent/issues/67648) |

### Recomendações

1. **Urgente:** Atribuir owner para os 3 bugs P1 de Windows/Linux — afetam instalação básica
2. **Esta semana:** Resolver o

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data de Referência:** 2026-08-18  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 18 de agosto de 2026. Nas últimas 24 horas, foram registradas 4 issues (3 abertas, 1 fechada) e 5 pull requests (2 abertas, 3 merged/fechadas). O dia foi marcado pela **correção de bugs críticos de estabilidade**, especialmente o problema de loops silenciosos em falhas repetidas de ferramentas, além de avanços em integrações com canais (Slack, Weixin). A ausência de novas releases indica foco em refinamento da base de código existente. A comunidade demonstra engajamento ativo com discussão técnica substancial em issues relacionadas a protocolos de comunicação (IRC) e autenticação (Google Antigravity).

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto mantém a versão estável atual sem atualizações de versão. Recomenda-se monitorar o repositório para eventuais hotfixes urgentes.

---

## 3. Progresso do Projeto

Três pull requests foram merged ou fechadas hoje, representando avanços significativos:

### PR #3312 — Fix: Parar turn cedo em falha repetida de ferramenta
**Status:** Closed | **Autor:** lucaparette | **Link:** [sipeed/picoclaw PR #3312](https://github.com/sipeed/picoclaw/pull/3312)

Corrige o comportamento de "trava / nunca responde" quando uma ferramenta falha com o **mesmo erro em todas as chamadas**. Anteriormente, o loop do agente continuava re-chamando o LLM e re-executando a ferramenta falhando. A correção implementa parada antecipada do turn, resolvendo um problema crítico de UX em produção, especialmente observado em Telegram.

---

### PR #271 — Fix: Env overrides quando config.json está ausente
**Status:** Closed | **Autor:** tbeaudouin05 | **Link:** [sipeed/picoclaw PR #271](https://github.com/sipeed/picoclaw/pull/271)

Resolve problema comum em deploys no Fly.io usando apenas secrets/env: `LoadConfig` retornava defaults sem aplicar env overrides quando `config.json` estava ausente, causando falha por usar modelo padrão (glm-4.7) sem credenciais. A correção garante que `env.Parse(cfg)` sempre seja executado, incluindo regressão test.

---

### PR #2606 — Feat: Aprimorar suporte e configuração do canal Weixin
**Status:** Closed | **Autor:** dsus4wang | **Link:** [sipeed/picoclaw PR #2606](https://github.com/sipeed/picoclaw/pull/2606)

Melhoria abrangente do suporte multi-instância do canal Weixin, incluindo:
- Gerenciamento dinâmico de instâncias por diretório de canal
- Validação e tratamento de erros aprimorados para nomes de canal ilegais
- Maior estabilidade no fluxo multi-instância

---

## 4. Temas Quentes da Comunidade

### Issue #3287 — Suporte a mensagens longas em IRC
**Status:** Open | **Autor:** superuser-does | **Link:** [sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

**Comentários:** 6 | **Última atualização:** 2026-08-17

**Resumo:** Request para que PicoClaw trate mensagens longasenviadas via IRCv3 como uma mensagem única e coesa. O protocolo IRC limita a 512 bytes por padrão, e clientes dividem mensagens automaticamente. A feature request busca inteligências na recombinação dessas mensagens fragmentadas.

**Análise:** Issue com discussão ativa demonstra interesse da comunidade em melhor suporte a protocolos legacy. A implementação afetaria a arquitetura de parsing de mensagens.

---

## 5. Bugs e Estabilidade

### Bug Crítico — Falha silenciosa em loops de ferramentas (RESOLVIDO)

**Issue #3311** ([sipeed/picoclaw Issue #3311](https://github.com/sipeed/picoclaw/issues/3311)) reportou que turns podiam girar silenciosamente por muitos minutos quando uma ferramenta falha com erro idêntico em cada chamada. **Correção entregue via PR #3312.**

**Severidade:** Alta — Impactava experiência do usuário em produção (Telegram)

---

### Bug de Mídia — Upload de imagens no Slack falha
**Issue #3338** | **Autor:** octavioturra | **Link:** [sipeed/picoclaw Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)

**Resumo:** Uploads de mídia no Slack sempre falham com `file.upload.v2: file size cannot be 0`. `SendMedia` constrói `slack.UploadFileParameters` sem definir `FileSize`, causando rejeição pelo SDK slack-go v0.23.1.

**PR Correlato:** [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) — Corrigindo o problema definindo `FileSize` nos parâmetros de upload.

**Severidade:** Média — Afeta funcionalidade de mídia no canal Slack

---

### Bug de Autenticação — Google Antigravity retorna 429
**Issue #3339** | **Autor:** k3XD16 | **Link:** [sipeed/picoclaw Issue #3339)

**Resumo:** Autenticação e descoberta de modelo funcionam corretamente, mas todas as requisições de geração retornam erro 429 `RESOURCE_EXHAUSTED` mesmo com scopes OAuth válidos.

**Severidade:** Média-Alta — Bloqueia uso do provider Google Antigravity

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR #3299 — Provider nativo de busca web Exa
**Status:** Open | **Autor:** kesku | **Link:** [sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)

Adiciona Exa como provider nativo para `tools.web` / `web_search`. Implementa:
- API `POST /search` com `type: "auto"` e `contents.highlights`
- Autenticação via header `X-Api-Key`
- Suporte a filtros de range temporal (`d`/`w`/`m`/`y`)

**Indicador de roadmap:** Expansão de provedores de busca, sinalizando tendência de multi-provider search.

---

### Feature Request #3287 — Suporte a mensagens longas em IRC
**Link:** [sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

Proposta para tratar fragmentação de mensagens IRC como единая mensagem coesa. Demonstra demanda por melhor suporte a protocolos tradicionais de chat.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas:

1. **Experiência de usuário em loops de erro** (Issue #3311)
   - Usuários em produção (ex: Telegram) ficavam sem resposta por minutos
   - Inconsistência entre comportamento esperado e real

2. **Problemas de configuração em deploys minimalistas** (PR #271)
   - Deploys Fly.io com secrets/env-only não funcionavam corretamente
   - Modelo default sendo usado sem credenciais adequadas

3. **Integração Slack incompleta** (Issue #3338)
   - Upload de mídia falha silenciosamente
   - Usuários não conseguem compartilhar imagens

4. **Provider Google com erro obscuro** (Issue #3339)
   - Erro genérico 429 sem contexto claro
   - Dificulta debugging

### Cenários de Uso Observados:
- Uso em produção via Telegram
- Deploys containerizados (Fly.io)
- Suporte multi-canal (Slack, Weixin, IRC, Telegram)
- Integração com múltiplos providers de IA

---

## 8. Backlog que Merece Atenção

### Issue #3287 — IRC Long Messages (22 dias sem resolução)
**Link:** [sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

Feature request com 6 comentários, indicando discussão ativa. Aguardando resposta da equipe mantenedora.

---

### Issue #3339 — Google Antigravity 429 (1 dia aberto)
**Link:** [sipeed/picoclaw Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)

Bug novo que precisa de triagem. Afeta autenticação de provider.

---

### PR #3299 — Exa Web Search Provider (23 dias em review)
**Link:** [sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)

Feature completa aguardando code review. Implementação parece robusta (inclusivé testes).

---

## Métricas de Saúde do Projeto

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 4 |
| PRs ativas (24h) | 5 |
| Taxa de resolução de bugs | 1/4 (25%) |
| PRs merged (24h) | 3 |
| Novas releases | 0 |
| Issues com stale tag | 2 |

**Veredicto de Saúde:** O projeto demonstra **saúde estável** com foco em qualidade e estabilidade. A correção do bug de loops silenciosos (crítico para produção) e as melhorias de configuração indicam maturidade no processo de desenvolvimento. A ausência de releases não é preocupante dado o ciclo ativo de bugfixes.

---

*Relatório gerado automaticamente com base em dados do GitHub para sipeed/picoclaw em 2026-08-18.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-18

---

## 1. Panorama do Dia

O IronClaw apresenta alta atividade de desenvolvimento no dia de hoje, com **27 issues** e **45 PRs** atualizados nas últimas 24h. A equipe demonstra foco intenso em **otimização de performance de banco de dados** (epic para reduzir ~60% da pressão de escrita), além de avanços significativos no sistema de notificações durável e correções de UX em integrações externas (Slack, Telegram, MCP). Não há novos lançamentos hoje, mas PRs críticos de correções e refatorações foram merged. O projeto permanece em fase de estabilização e preparação para próximas versões, com múltiplas iniciativas paralelas de melhoria de confiabilidade.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O último release estável referencedo nos dados é a versão **1.2.0**, com correções forward-portedas no PR #7663 para a branch `main`.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (16 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | fix(release): forward-port 1.2 fixes and thread repair | Correções de confiabilidade Windows e reparo de índice de threads |
| [#7710](https://github.com/nearai/ironclaw/pull/7710) | fix(slack): address multi-agent review findings on #7682 | Estabilização do fix de privacidade no Slack |
| [#7642](https://github.com/nearai/ironclaw/pull/7642) | fix(webui): type shared design-system component props | Melhoria de type safety no design system |

### Avanços Significativos

**Correção de Release 1.2 (#7663):**
- Forward-port de correções validadas da 1.2 para `main`
- Correções: confiabilidade filesystem/release-smoke no Windows, output JSON limpo, healthchecks com `curl`, metadados `1.2.0` estáveis
- Reparo de projeção de índice de threads para recuperação

**Slack Connect Flow (#7682 + #7710):**
- Resolved privacy issue: mensagem de conexão agora é enviada **privadamente** ao usuário
- Adicionado link de conexão one-click
- Aprovado e merged após review multi-agente

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | Bug: verify persistent memory recall across conversations | 4 | Bug/Epic |
| [#7591](https://github.com/nearai/ironclaw/issues/7591) | Epic: reduce durable DB write pressure ~60% | 3 | Epic/Performance |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | Editing AGENTS.md doesn't update system prompt | 2 | Bug/Feature |

### Análise de Demandas

**1. Performance de DB (Epic #7591)** — Temas principais:
- Meta ambiciosa de reduzir pressão de escrita em ~60%
- Dividido em 3 tiers de implementação
- Principais alvos: capability invocation state, checkpoint batching, paired row writes
- **Estimativa combinada:** economia de ~85 rows/turn em operações típicas

**2. Memória Persistente (#7275)** — Recurso crítico:
- Problema: informações explícitas de uma conversa não são recalladas em conversas subsequentes
- Impacto: experiência do usuário degradada em produção
- Status: Closed após verificação

**3. Sistema de Notificações (#7687-#7691)** — Nova infraestrutura:
- 5 issues relacionadas à construção de inbox durável
- Suporte a múltiplos tipos: aprovações, autenticação, falhas, bloqueios
- Generalização do componente WebUI

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Count | Exemplos |
|------------|-------|----------|
| **Crítica** | 0 | — |
| **Alta** | 1 | #7714: libSQL write connection starvation |
| **Média** | 3 | #7716 (MCP auth), #7715 (Telegram consent), #7714 |
| **Baixa** | 2 | #7681 (Slack privacy), #3762 (AGENTS.md) |

### Bugs Críticos Reportados

**[#7714](https://github.com/nearai/ironclaw/issues/7714) — libSQL single write connection starves resource-governor** *(Alta)*
- **Cenário:** PinchBench com 147 tasks, backend libSQL
- **Sintoma:** Journal do resource-governor stalled ~40s esperando conexão de escrita
- **Cascata:** Invalidção de autoridade → reload de estado durável → vazamento permanente de reservas
- **Risco:** medium (db/libsql)

**[#7716](https://github.com/nearai/ironclaw/issues/7716) — MCP server flow missing bearer key auth** *(Média)*
- Flow "Add MCP server" não suporta autenticação bearer/token
- Falta opção de transporte STDIO/HTTP
- Impacto: integrações MCP autenticadas não funcionam

**[#7715](https://github.com/nearai/ironclaw/issues/7715) — Telegram lacks consent/selection** *(Média)*
- Flow de conexão Telegram permite bot E conta pessoal sem escolha
- Usuário não é informado qual modo está conectando

### Bugs Fechados

| Issue | Descrição |
|-------|-----------|
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | Persistent memory recall verificado em produção |
| [#7637](https://github.com/nearai/ironclaw/issues/7637) | Design-system component boundary typed |
| [#7647](https://github.com/nearai/ironclaw/issues/7647) | Deterministic no-delivery outcome para scheduled runs |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR/Issue | Feature | Escopo |
|----------|---------|--------|
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | Derivar run outcomes de evidência runtime | Automations |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) | ACP serve command com streaming + cancel | CLI |
| [#7703](https://github.com/nearai/ironclaw/pull/7703) | Typed WIT tool response para WASM | WASM/Guest |
| [#7693](https://github.com/nearai/ironclaw/pull/7693) | Native structured output finalization | Runtime |
| [#7694](https://github.com/nearai/ironclaw/pull/7694) | Durable backend suggestions | Suggestions |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | Nostr host functions para WASM tools | WASM/Nostr |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | OMP core-tool contract + benchmark arm | Coding Tools |

### Sinais de Roadmap

**Capacidade-Response Normalization (#7627):**
- Série de 4 PRs (#7686, #7692, #7703, #7711) para normalizar tratamento de erros
- Provider rejections e authentication failures tornando-se tipados e visíveis

**Notification Inbox Durável:**
- Epic multi-issue (#7687-#7691)
- Substitui notification center focado em automations por inbox genérico
- Suporte a: aprovações, autenticação, bloqueios, falhas, completions

**CLI/ACP Expansion (#7513):**
- Permite ferramentas externas (GitHub Copilot, VS Code) conectarem via `--acp --stdio`
- Streaming de tokens em tempo real

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**1. Memória Persistente Inconsistente (#7275)**
- *Feedback:* Usuário reportou que informações explícitas de uma conversa não são recalladas em conversas futuras
- *Impacto:* Experiência de "personalização" comprometida
- *Status:* Investigado e verificado, aguardando implementação

**2. System Prompt Estático (#3762)**
- *Feedback:* Editar `AGENTS.md` na UI não atualiza o prompt do sistema
- *Impacto:* Usuários não conseguem iterar identity/config em produção
- *Prioridade:* P1 sugerida, v1.4.0

**3. Slack: Mensagem Pública de Conexão (#7681)**
- *Feedback:* Mensagem "connect in IronClaw web app" visível para todo o canal
- *Impacto:* Exposição desnecessária + UX broken (sem contexto entre steps)
- *Correção:* Merged em #7682/#7710 ✓

### Cenários de Uso Observados

- **Dogfooding & QA:** Epic semanal (#7685) para bug fixing interno
- **Benchmarks:** Daily failure taxonomy (#7704) analisando 84 non-passes
- **Extensões:** Normalização de falhas e auth diagnostics (#7692)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | Editing AGENTS.md doesn't update system prompt | ~3 meses | P1 sugerida |
| [#3676](https://github.com/nearai/ironclaw/pull/3676) | docs: rework security section | ~3 meses | Experienced contributor |
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | Persistent memory recall bug | ~2 semanas | Customer feedback |

### Issues Críticas Sem Assignee

| Issue | Título | Status |
|-------|--------|--------|
| [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL write connection starvation | Sem comments, sem assignee |
| [#7702](https://github.com/nearai/ironclaw/issues/7702) | Obligation audit records never attached | Sem comments |
| [#7707](https://github.com/nearai/ironclaw/issues/7707) | Track side-effect-outstanding explicitly | Sem comments |

### Recomendações

1. **Priorizar #7714** — Bug de starvation em produção libSQL pode causar instabilidade
2. **Revisar #3762** — Feature request com 3 meses sem movimento, alta demanda
3. **Atribuir #7702** — Violação de contrato documentado, risco de compliance
4. **Continuar #7591** — Epic de performance tem potencial de impacto significativo (~60% redução writes)

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 21 |
| Issues fechadas | 6 |
| PRs abertos | 29 |
| PRs merged/closed | 16 |
| Novos releases | 0 |
| Bugs críticos abertos | 0 |
| Features em开发 | 7+ |
| Epic ativo | 2 (#7591, #7685) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-17 a 2026-08-18.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-18

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 2026-08-17, com **34 PRs** e **15 issues** atualizadas nas últimas 24 horas. A taxa de resolução foi expressiva: 22 dos 34 PRs foram merged/fechados, e 6 de 15 issues atingiram resolução. Não houve novos lançamentos, sugerindo trabalho preparatório para a próxima release. A comunidade demonstra engajamento diversificado — desde bugs críticos (crashes em execução de ferramentas, URLs expiradas) até melhorias de experiência (memória de longo prazo, provedores de busca). A saúde geral indica maturidade do codebase com ciclo de manutenção ativo.

---

## 2. Lançamentos

**Nenhuma release została publiée nelle ultime 24h.**

O projeto encontra-se em período de estabilização entre versões. A versão mais recente estável permanece **v2.1.0**, com a equipe focando em correção de bugs e features que devem compor a próxima release. Recomenda-se monitorar o repositório para announcements de nova versão.

---

## 3. Progresso do Projeto

### PRs fechados/merged com maior impacto

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) | feat(console): compact background task list and add scroll hint | XiuShenAl | Melhora UX do painel de tarefas em segundo plano — lista agora limitada a ~3 linhas com scroll |
| [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) | feat(console): add media download controls | zhaozhuang521 | Implementa controles de download unificados para anexos de mídia em chats |
| [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) | fix(console): open newly installed PawApps without reload | zhijianma | Permite abrir PawApps recém-instalados sem necessidade de refresh manual |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | fix(console): update context-usage ring after compact | yuanxs21 | Corrige anel de uso de contexto que não atualizava após comando `/compact` |
| [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) | fix(token-usage): stop counting image base64 as text tokens | yuanxs21 | Resolve superestimação de tokens em imagens, evitando indicador 100% cheio prematurely |
| [#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) | fix(config): return 422 for invalid channel payloads | RerankerGuo | Melhora tratamento de erros de validação em payloads de canal |

**Resumo quantitativo:** 22 PRs fechados em 24h, representando taxa de throughput elevada e ciclo de review saudável.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento (comentários + reações)

| # | Tipo | Título | Comentários | Status | Link |
|---|------|--------|-------------|--------|------|
| #6405 | Issue | [question] 升级2.0以后，mcp工具总是提示Tool notfound | 7 | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6405) |
| #7011 | Issue | Console stop request can cancel an active Feishu session | 6 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| #7085 | Issue | [Feature]: 按频道独立配置模型 | 3 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7085) |
| #7080 | PR | [Feature] Add optional PowerContext pluggable long-term memory backend | — | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7080) |
| #6515 | PR | feat(providers): add Volcengine Agent Plan and Xiaomi MiMo V2.5 | — | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6515) |
| #6302 | PR | feat: unify provider discovery, model metadata, routing, and agent controls | — | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6302) |

### Análise das demandas predominantes

1. **Suporte Multi-Canal com Modelos Independentes (#7085):** Usuários solicitam configuração de modelos por canal (DingTalk, WeChat, Console) — demanda alta para personalização de comportamento por integração.

2. **Memória de Longo Prazo (#7080, #7079):** Dois PRs/Issues paralelos propõem backend de memória persistente via PowerContext, indicando necessidade real de memória além da sessão atual.

3. **Integração de Busca Web (#7081, #6817):** Proposta de integração do AnySearch como substituto do Tavily, com correções de bugs MCP — comunidade busca alternativas de busca mais robustas.

---

## 5. Bugs e Estabilidade

### Bugs críticos reportados

| Severidade | # | Título | Status | Link |
|------------|---|--------|--------|------|
| 🔴 **Crítico** | #7063 | Agent 执行工具调用时必现崩溃 (async iterator bug) | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7063) |
| 🔴 **Crítico** | #7074 | 正常运行奔溃，需要刷新页面才能重启 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7074) |
| 🟠 **Alta** | #7011 | Console stop request cancels active Feishu session | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| 🟠 **Alta** | #7082 | Model 'unknown' execution failed (Pydantic error) | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7082) |
| 🟠 **Alta** | #7076 | LLM模型配置报错404 (qwenpaw-creator) | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7076) |
| 🟡 **Média** | #7088 | QQ image URLs expiram e envenenam sessão | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7088) |
| 🟡 **Média** | #7051 | Imagens em Console perdidas após reload | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7051) |
| 🟡 **Média** | #7084 | Não consegue abrir histórico com apenas 1 conversa | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7084) |

### Análise de regressões

- **Bug #7063 (CLOSED):** Problema de async iterator em `_execute_tool_call` — Pydantic + async/await mismatch. Corrigido com sucesso.
- **Bug #7088 (CLOSED):** URLs de imagens QQ com `rkey` expirando após ~2h causavam HTTP 400. PR [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) em aberto para correção definitiva.
- **Bug #7077 (CLOSED):** Plugin hooks perdidos após workspace reload (hot-install) — resolved.

**Métricas de estabilidade:** 3 de 8 bugs reportados resolvidos em 24h. Bugs críticos restantes (#7074, #7011, #7082) requerem atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Feature | Autor | Status | Link |
|---|---------|-------|--------|------|
| #7085 | **Configuração de modelos por canal** | shen-1688-1688 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7085) |
| #7079 | **Backend de memória PowerContext** | kic635 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7079) |
| #7075 | **Detalhes de execução de tarefas agendadas** | tina0501853 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7075) |
| #7081 | **Integração AnySearch como provider de busca** | anysearch-ai | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7081) |
| #6515 | **Provedores Volcengine Agent Plan e Xiaomi MiMo V2.5** | TinyBai | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6515) |
| #6976 | **Diretórios de projeto multi-session** | x1n95c | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6976) |
| #6719 | **Workspace artifact cards persistentes** | wangfei010313 | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6719) |

### Sinais de roadmap emergentes

1. **Sistema de memória de longo prazo:** Dois PRs paralelos (#7079, #7080) indicam prioridade alta para memória persistente.
2. **Expansão de provedores:** Adição de Volcengine e Xiaomi amplia base de usuários na Ásia.
3. **Multi-provedor e roteamento unificado:** PR #6302 propõe arquitetura unificada de provider discovery e model routing.
4. **UX de tarefas background:** Feature de detalhes de execução em tarefas cron (issue #7075) sugere evolução do sistema de scheduling.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade** | Crashes frequentes durante uso normal, exigindo refresh | Alta |
| **Integração Canal** | Sessões Feishu canceladas por stop request do Console | Relatada |
| **Imagens/Mídia** | URLs expiradas, imagens perdidas após reload | Múltiplos reports |
| **Configuração** | Falha 404 em configuração de modelo LLM | Relatada |
| **Sessões** | Colaboração entre agentes gera múltiplas sessões | Relatada |
| **Tarefas Agendadas** | Falta de visibilidade sobre execução de cron jobs | Relatada |

### Cenários de uso destacados

- **Multi-canal com modelos otimizados:** Usuários desejam `gpt-4o` para DingTalk (resposta rápida), `qwen-max` para WeChat (otimização chino), `llama.cpp` local para Console (testes).
- **Memória de longo prazo:** Usuários precisam de contexto persistente além de sessões individuais.
- **Colaboração agentica:** Equipes pedem visualização unificada de conversas entre múltiplos agentes.

### Satisfação geral

**Neutro a Positivo Moderado.** A equipe responde rapidamente a bugs (taxa de resolução de 37.5% em 24h), mas bugs críticos restantes (#7074) causam frustração. Funcionalidades aguardadas (memória, multi-canal) indicam confiança na direção do projeto.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Atualizado | Dias Inativo | Link |
|---|--------|--------|------------|--------------|------|
| #7011 | Console stop request can cancel Feishu session | 2026-08-14 | 2026-08-17 | 3 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| #6925 | 智能体协作希望在一个会话窗口里 | 2026-08-12 | 2026-08-17 | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6925) |
| #6986 | fix(sandbox): fix antivirus software blocking issues | 2026-08-13 | 2026-08-17 | 4 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6986) |

### PRs aguardando review há >10 dias

| # | Título | Autor | Criado | Link |
|---|--------|-------|--------|------|
| #6515 | Add Volcengine Agent Plan and Xiaomi MiMo V2.5 | TinyBai | 2026-07-28 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6515) |
| #6302 | Unify provider discovery, model metadata, routing | wangfei010313 | 2026-07-21 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6302) |
| #6976 | Session-scoped multi project directories | x1n95c | 2026-08-13 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6976) |
| #6719 | Add persistent workspace artifact cards | wangfei010313 | 2026-08-05 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6719) |

### Recomendações para mantenedores

1. **Priorizar #7074** — crash durante uso normal afeta diretamente retenção de usuários.
2. **Acelerar review de #6515 e #6302** — ambos são PRs de alto impacto estratégico (novos provedores + arquitetura unificada).
3. **Responder a #6925** — feature de colaboração agentica tem potencial de diferenciação competitiva.
4. **Avaliar PR #6986** — correção de sandbox com antivirus pode desbloquear instalações corporativas.

---

**Gerado em:** 2026-08-18  
**Fonte:** github.com/agentscope-ai/QwenPaw  
**Período analisado:** últimas 24h

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de corte:** 2026-08-18 | ** Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade comunitária** em 2026-08-18, com 50 issues e 50 PRs atualizados nas últimas 24 horas — nenhum novo release foi publicado. A força-tarefa concentra-se em **segurança, autenticação plugável e arquitetura de runtime**, com 4 RFCs ratificados em status `in-progress` de alta prioridade (P1/P2) focados em v0.9.0. A saúde geral é estável, embora o backlog de RFCs waiting manteners seja denso e os PRs com `needs-author-action`/`stale-candidate` acumulem. Não há releases свежих, sinalizando que o ciclo de lançamento está em fase de maturação de código antes da próxima tag.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto não publicou novas versões desde o corte. A versão mais recente mencionada nos dados é **0.8.4** (Issue #6808). O tracker #7432 coordena o pipeline de mudanças, breaking changes e segurança da v0.9.0, que parece ser o próximo alvo de release. Não há notas de migração свежих aplicáveis ao dia.

---

## 3. Progresso do Projeto

### PRs merged/closed nas últimas 24h (5 total)

| # | PR | Tipo | Tamanho | Contribuidor | Impacto |
|---|---|---|---|---|---|
| **#9722** | `fix(hardware): preserve timeout error context` | bug | S | Audacity88 (distinguished) | Mantém classificabilidade de `TransportError::Timeout` em Uno Q e preserva contexto de `Elapsed` em timeouts — evita flat-string errors em cenários de hardware. |
| #9109 | `feat(providers): add native Hailo-Ollama support` | enhancement | XL | vadelma-agent | Adiciona provider `[providers.models.hailo_ollama.<alias>]` com API `/api/tags` e `/api/chat` nativa — expande suporte a provedores. **Em revisão (needs-author-action).** |
| #10064 | `fix(channels/telegram): self-destruct approval cards after an operator tap` | bug | M | blockballr | Resolve hanging spinner em approvals do Telegram após tap do operador — drop trailing model turn. |
| #9808 | `chore(deps): bump rust-all group (46 updates)` | deps | L | dependabot[bot] | Atualiza 46 dependências Rust (clap, tokio, etc.) — manutenção de segurança e compatibilidade. |
| #10035 | `test(daemon): symlink checked-in fixture for heartbeat MCP child` | test | XS | IftekharUddin (distinguished) | Elimina escrita de arquivo executável dentro de processo Tokio multithreadado — fecha vetor ETXTBSY em teste de daemon. |

### Destaque de progresso por domínio

- **Segurança:** #9973 (`fix(providers): keep Gemini API keys out of URLs`) remove keys de URLs e migra para header `x-goog-api-key` — risco alto fechado.
- **Testes:** #10036 isola teste de endpoint-lock via `exec`'d child process — combate race condition em forks.
- **RFCs em rollout:** #6808 (Work Lanes) está em `status:accepted / rollout in progress` na versão 0.8.0-beta-1 → 0.8.4.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | Tipo | Prioridade | Autores ativos |
|---|---|---|---|---|---|
| **#6808** | RFC: Work Lanes, Board Automation, and Label Cleanup | 23 | RFC | P2 | Audacity88 |
| **#8603** | RFC: ZeroClaw Chat Completions profile | 23 | RFC | P2 | REL-mame |
| **#8303** | RFC: Goal mode v1 — bounded foreground Matrix work | 22 | RFC | P2 | vrurg |
| **#7155** | RFC: Add per-execution confirmation tier for high-risk shell commands | 20 | RFC | P1 | NiuBlibing |
| **#9487** | RFC: Runtime-owned conversation sessions and transport surface adapters | 19 | RFC | P2 | NiuBlibing |
| **#9488** | RFC: Unified attachment architecture for web chat and channels | 18 | RFC | P2 | NiuBlibing |
| **#7141** | RFC: Pluggable inbound authentication and canonical principals | 16 | RFC | P1 | singlerider |
| **#7462** | [Bug] 74 test failures on Windows | 16 | Bug | P1 | NiuBlibing |
| **#6954** | RFC: Provenance, conversation binding, and reply contract | 15 | RFC | P2 | mov-xound-glitch |
| **#6971** | RFC: Security posture, credential boundaries, and universal ingress policy | 15 | RFC | P2 | Audacity88 |

### Análise dos temas quentes

**🔴 Arquitetura de segurança (P1/P2, risco alto):** 4 RFCs de segurança dominam o top-10 — autenticação plugável (#7141), pipeline de decisões de segurança (#7142), postura de credenciais (#6971), e confirmação de comandos shell (#7155) representam a maior carga cognitiva da comunidade. O denominador comum é **isolamento, transparência e controle de superfície de ataque**.

**🔵 Compatibilidade de cliente (P2, risco alto):** #8603 busca adapter Chat Completions para clientes OpenAI (Open WebUI, LangChain, Continue.dev, LobeChat). Se ratificado, expande drasticamente o TAM de integração sem rewrite no lado cliente.

**🟡 Experiência de contribuição:** #9496 (RFC scope streamlining) e #9530 (risk precedence for test-only changes) sinalizam que o próprio processo RFC está sendo avaliado — community health em revisão interna.

**🟢 Experiência Windows:** #7462 com 74 testes falhando no CI é um problema de longa data que a comunidade continua discutindo (16 comentários) — afeta contributors Windows diretamente.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (por severidade)

#### 🔴 P1 — Crítico / Alta degradação

| # | Título | Canal | Risco | Status |
|---|---|---|---|---|
| **#7462** | 74 test failures on Windows — Unix-only test commands, path semantics, console encoding | CI/tool | high | OPEN (desde 2026-06-10) |
| **#9965** | runtime-written executable test fixtures hit ETXTBSY under parallel runtime gate | tests | medium | OPEN (2026-08-13) |
| **#10011** | avoid runtime-written executable in daemon heartbeat test | tests | high | OPEN (2026-08-15) |
| **#10023** | Failure logs claim requested model, not pinned fallback model | provider | medium | IN-PROGRESS |
| **#9397** | Treat empty WhatsApp Web `allowed_groups` as permit-none | security | high | IN-PROGRESS |
| **#9283** | `fix(tools): decompress gzip/brotli/deflate web_fetch responses` | tool:web | high | OPEN (PR #9283 em revisão) |
| **#9427** | `fix(channels): require sender authorization for LINE group messages` | LINE | high | OPEN (PR #9427 зависим de #9428) |

#### 🟠 P2 — Degradado / Funcionalidade parcial

| # | Título | Risco | Status |
|---|---|---|---|
| #9749 | `fix(web): respect manual scroll position during agent streaming` | medium | PR em revisão |
| #9056 | `fix(providers): surface cause-specific provider failure diagnostics` | medium | needs-author-action |

### Análise de estabilidade

O projeto apresenta **2 bugs de segurança em ativo de explotación** (WhatsApp group auth + LINE sender auth) — ambos com PRs em progresso, mas ainda não merged. A vulnerabilidade de decompression em `web_fetch` (#9283) afeta qualquer request a servers que respondem com gzip/brotli — impacto amplo. O problema de testes no Windows (#7462) persiste há ~70 dias sem merge, sinalizando gargalo de review ou complexidade de fix.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features detectadas hoje

| # | Título | Tipo | Prioridade | Área | Sinal de roadmap |
|---|---|---|---|---|---|
| **#8603** | RFC: ZeroClaw Chat Completions profile | RFC | P2 | gateway | Expansão de ecossistema de clientes |
| **#8303** | RFC: Goal mode v1 — bounded foreground Matrix work | RFC | P2 | runtime | Modo durável multi-turn para agentes |
| **#7100** | RFC: Per-model capability & context-window config | RFC | P1 | provider | Config granular por modelo (vision, context) |
| **#10059** | Feature: Support Option-Backspace word deletion in ZeroCode | Feature | P3 | zerocode | UX macOS |
| **#10057** | feat(zerocode): add queued message recovery actions | Enhancement | P2 | zerocode | UX de fila de prompts |

### Sinais de roadmap via RFCs

O tracker #7432 (`v0.9.0 auth, security, gateway, and breaking-change queue`) confirma que **v0.9.0 é o próximo release milestone**. As features de segurança plugável (#7141), runtime-owned sessions (#9487), e SOP permission contract (#9598) são candidates naturais para inclusion.

O RFC #6165 (lighter core through external integrations) sugere uma possível **reestruturação modular** futura — sinal estratégico de arquitetura.

---

## 7. Resumo de Feedback dos Usuários

### Dores extraídas das issues/PRs

**🔒 Segurança operacional:**
> "ZeroClaw maintainers often have to make support, removal, and investment decisions without knowing whether released features are used outside the issue tracker." — #9621 (telemetry RFC)

O pedido por **telemetria opt-in com reports auditados por operadores** indica que a comunidade de operadores sente lacuna em visibilidade de uso real de features.

**⚙️ Experiência de integração:**
> "Clients that speak the OpenAI Chat Completions protocol — Open WebUI, LobeChat, Continue.dev, Aider, LangChain, the OpenAI SDK, and many others..." — #8603

A demanda por Chat Completions profile é um sinal claro de que **usuários querem drop-in compatibility** com o ecossistema OpenAI SDK existente.

**🐛 Plataformas não-Linux:**
> "Running the workspace test suite on Windows 11 (Simplified Chinese, console code page 936) yields **74 failing tests** on current master." — #7462

O bug Windows édor recorrente que afeta contributors não-Linux — impacto em diversidade de contribuidores.

**📦 UX de fila:**
> "Add a queue-row context menu with **Send now**, **Copy**, **Edit**, and **Delete** so a prompt queued by mistake can be recovered." — #10057

Sinal de usabilidade prática — ZeroCode ganhando ações de recovery para fila de mensagens.

**🌐 Localização:**
> "Track and close the recurring class of user-facing output that bypasses ZeroClaw's localization boundaries." — #9972

A comunidade está atenta a i18n consistente — tracker dedicado para eliminar strings hardcoded fora do sistema Fluent.

### Satisfação geral

**Neutro-positiva.** Alta atividade de RFCs indica engajamento, mas o alto volume de PRs `stale-candidate` e `needs-author-action` sugere que **o ciclo de review é o gargalo principal** — não falta de contribuições.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade significativa ou aguardando maintainer

| # | Título | Tempo em aberto | Comentários | Motivo da atenção |
|---|---|---|---|---|
| **#6165** | RFC: Prefer a lighter ZeroClaw core through external integrations | ~117 dias | 15 | Reorganização modular — impacto arquitetural alto |
| **#6653** | Feature: Define host-architecture policy for emulated installs | ~97 dias | 7 | Política de arquitetura para emulação — edge case |
| **#8691** | Tracker: Restore ADR baseline and audit accepted RFC decision records | ~45 dias | 2 | Dívida técnica de governança — baixa atividade |
| **#9546** | *(PR stale-candidate, 20+ PRs aguardando author action)* | — | — | Pool de PRs dependentes de resposta de autores |

### Priorização recomendada

1. **Revisar PRs P1 stale:** #9283 (decompress), #9634 (WhatsApp groups), #9427 (LINE auth) — segurança ativa.
2. **Avançar RFCs P1 ratified:** #7155 (shell confirmation), #7141 (auth plugável) — v0.9.0 blocker tracks.
3. **Fixar bug Windows (#7462):** Afeta onboarding de contribuidores — 74 testes quebrados há 70 dias.
4. **Triage do maintainer queue (#8692):** Tracker de decisões pendentes precisa de rotação ativa.

---

## Indicadores-Chave de Saúde

| Indicador | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 48 | 🟢 Alta |
| PRs abertos | 45 | 🟢 Alta |
| PRs merged/fechados (24h) | 5 | 🟡 Moderada |
| Novas releases | 0 | 🟡 Sem release свежих |
| RFCs em status accepted | ~15 | 🟢 Pipeline saudável |
| Bugs P1 em aberto | 4 | 🔴 Requer atenção |
| PRs stale-candidate | ~15 | 🟠 Review bottleneck |
| Contributors ativos únicos (estimativa) | ~15+ | 🟢 Diversificado |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Última atualização: 2026-08-18.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*