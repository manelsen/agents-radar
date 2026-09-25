# Resumo diário do ecossistema de agentes de IA 2026-09-26

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-09-25 23:00 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-26

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, com nenhuma issue aberta ou fechada e nenhuma release publicada. O destaque do período é uma **pull request aberta (#1009)** que aborda uma falha crítica no mecanismo de aprovação de comandos de risco médio/alto no sistema de supervised autonomy. O repositório demonstra um estado estável, porém com uma issue subjacente (#900) aguardando resolução há algum tempo, indicando possíveis limitações no fluxo de aprovação de comandos do sistema.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não registrou novos versionamentos ou publicações de notas de release no período analisado.

---

## 3. Progresso do Projeto

| # | Título | Status | Autor | Impacto |
|---|--------|--------|-------|---------|
| #1009 | fix(exec): pause for /approve on medium/high-risk commands instead of failing | **ABERTA** | serhiy-bzhezytskyy | Correção de falha crítica no fluxo de aprovação |

### Análise da PR #1009

A PR introduz uma correção para o **issue #900**, resolvendo um problema no comportamento do sistema de *supervised autonomy*. A proposta modifica a resposta a comandos shell de risco médio/alto — em vez de falhar diretamente, o sistema deve pausar e aguardar aprovação via `/approve`.

- **Link:** [nullclaw/nullclaw PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)
- **Issue relacionada:** [nullclaw/nullclaw Issue #900](https://github.com/nullclaw/nullclaw/issues/900)
- **Área afetada:** Módulos `/bash` e `/exec`

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários ou reações nas últimas 24 horas.**

A PR #1009, embora relevante, não registrou reações (👍) ou comentários no período. O baixo engajamento pode indicar:
- Weekend/feriado effect (data: sábado, 26/09/2026)
- Bugs de rastreamento de métricas do GitHub
- Necessidade de maior visibilidade pela maintainer team

---

## 5. Bugs e Estabilidade

### Bug em Aberto: Supervised Autonomy — Falha ao Pausar Comandos

- **Severidade:** **Alta** (funcionalidade crítica comprometida)
- **Issue de referência:** #900
- **PR de correção:** #1009 (em revisão)
- **Comportamento esperado:** Comandos de risco médio/alto devem pausar para aprovação (`/approve`) antes da execução.
- **Comportamento atual:** Comandos sempre falham, o estado `approval_request` nunca é alcançado.

**Áreas impactadas:**
- `/bash`
- `/exec`
- Qualquer fluxo que utilize o sistema de supervised autonomy

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova issue de feature request registrada nas últimas 24 horas.**

A PR #1009, ao corrigir o issue #900, pode sinalizar uma **prioridade implícita no roadmap**: fortalecer o sistema de *supervised autonomy* para garantir que fluxos de aprovação sejam confiáveis e intuitivos para os usuários.

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback capturados diretamente nas últimas 24 horas.**

### Inferências baseadas na PR #1009

O bug reportado indica que usuários do sistema de supervised autonomy enfrentam frustração ao tentar:
- Executar comandos legítimos de risco moderado que deveriam ser facilmente aprováveis
- Confiar no mecanismo de pausa/aprovação para workflows de automação supervisionada

**Cenário típico de dor:**
> Um usuário configura um workflow que executa comandos shell periodicamente, esperando que comandos de risco "médio" pausem para revisão humana. Ao invés disso, o comando falha silenciosamente, quebrando o pipeline de automação.

---

## 8. Backlog que Merece Atenção

| Prioridade | Issue/PR | Título | Status | Tempo em aberto | Observação |
|------------|----------|--------|--------|-----------------|------------|
| 🔴 Alta | #900 | Supervised autonomy não pausa comandos de risco médio/alto para `/approve` | Aberta | Não especificado | Aguardando merge da PR #1009 |

### Análise

O issue **#900** permanece aberto há um período não especificado, representando uma lacuna significativa na experiência do sistema de supervised autonomy. A PR #1009 proposta pelo contribuidor `serhiy-bzhezytskyy` oferece uma correção que pode finalmente resolver o problema.

**Recomendação:** Revisar e aprovar a PR #1009 para desbloquear o fluxo de aprovação e melhorar a confiabilidade do sistema.

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 1 |
| PRs merged/fechadas (24h) | 0 |
| Releases publicadas | 0 |
| Issues críticas em aberto | 1 (#900) |

---

*Relatório gerado em: 2026-09-26 | Fonte: github.com/nullclaw/nullclaw*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-09-26  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade fragmentada em 2026-09-26. **Hermes Agent e ZeroClaw** lideram em volume de atividade com mais de 90 artefatos atualizados por dia, sinalizando projetos em fase de refinamento arquitetural intenso. **NanoBot e CoPaw** apresentam ciclos de iteração rápidos com alta proporção de PRs de contribuição externa, indicando comunidades receptivas. **NullClaw, IronClaw e PicoClaw** mantêm footprints menores, com desenvolvimento mais concentrado em correções e features específicas. A ausência de releases formais em 6 de 7 projetos sugere um período de congelamento pré-lançamento coordenado ou dependência de validação de stacks de PRs críticos.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Saúde |
|---------|:------------:|:---------:|:------:|:--------:|:-----:|
| **Hermes Agent** | 50 | 50 | 14 | 0 | 🟡 Saturado — volume intenso, 1 CVE ativo |
| **ZeroClaw** | 47 | 50 | 10 | 0 | 🟡 Complexo — S0 security bug pendente |
| **CoPaw** | 11 | 13 | 0 | 0 | 🟡 Pré-release — nenhum merge ainda |
| **NanoBot** | 4 | 13 | 2 | 0 | 🟢 saudável — 2 p1 PRs aguardando |
| **PicoClaw** | 1 | 4 | 0 | 0 | 🟡 Estável — bug de CLA bloqueante |
| **NullClaw** | 0 | 1 | 0 | 0 | 🔴 Estagnado — 1 bug crítico em aberto |
| **IronClaw** | 0 | 2 | 0 | 0 | 🟢 Mínimo — sem bloqueios |

**Observação:** O volume de PRs abertos não se traduz diretamente em saúde — CoPaw tem 13 PRs sem nenhum merge, enquanto Hermes Agent consolidou 14 merges em 24h.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent vs. ZeroClaw (protagonistas do período)

| Dimensão | Hermes Agent | ZeroClaw |
|----------|--------------|----------|
| **Volume de código** | Electron + TUI + Gateway | Runtime + Channels + WASM |
| **Foco principal** | Experiência Desktop | Arquitetura multi-agente |
| **Maturidade** | Estabilização intensiva | RFC-driven, pré-release |
| **Comunidade** | 14 contributors com merges | Governança formalizada (SOPs) |
| **Bloqueios críticos** | CVE js-yaml@4.3.1 | S0 symlink RPC confinement |

**ZeroClaw** destaca-se pela ambição arquitetural: WASM plugins, RFCs estruturais para admission control e agent-to-agent messaging. **Hermes Agent** demonstra disciplina de execução com automação de lint e correções de bottleneck RPC.

**NullClaw** permanece como referência de baixa atividade — não por estagnação, mas por foco limitado a supervised autonomy. Seu bug #900 (aprovação de comandos de risco) aguarda correção há tempo indefinido.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Supervised Autonomy e Aprovação de Comandos

Três projetos demonstram investimento nesta capacidade:

- **NullClaw:** Bug #900 — pausa não ocorre para risco médio/alto
- **ZeroClaw:** RFC #10930 — "durable questions" para approval gates
- **CoPaw:** Context compaction (#7628) — tensão entre autonomia e budget

**Implicação:** O paradigma de supervised autonomy é convergente, mas cada projeto implementa de forma independente. Oportunidade para interoperabilidade.

### 4.2 Provedores de LLM e Diversificação

Três projetos solicitam o mesmo provider simultaneamente:

| Projeto | PR/Issue | Provider |
|---------|----------|----------|
| NanoBot | #5915 | Cheaper Inference |
| PicoClaw | #3393 | Cheaper Inference |
| ZeroClaw | #11103 | Cheaper Inference |

**Análise:** Provedores OpenAI-compatíveis com custo reduzido são demanda reprimida. A Responses API (OpenAI) também aparece como migracao prioritária (NanoBot #5204, PicoClaw #3381).

### 4.3 Estabilidade de Contexto e Session Management

| Projeto | Problema |
|---------|----------|
| CoPaw | Context compaction excede budget (#7628) — 7 comentários |
| NanoBot | Session checkpoint invisível no Feishu (#5903) |
| Hermes Agent | Dashboard congela por loop de heartbeat (#122937) |
| ZeroClaw | RPC workspace symlink retargetable (#11110) |

**Padrão:** O gerenciamento de estado de sessão emerge como ponto frágil comum em sistemas com múltiplos canais e providers.

### 4.4 Segurança de Dependências

- **Hermes Agent:** CVE js-yaml@4.3.1 (GHSA-2883, GHSA-48c2) — OPEN
- **ZeroClaw:** wasmtime-wasi CVEs drift (#8519) — S1

**Alerta:** Vulnerabilidades em parsing libraries (yaml) e runtimes (wasmtime) afetam múltiplos projetos. Recomenda-se auditoria transversal.

---

## 5. Análise de Diferenciação

| Projeto | Público-alvo | Arquitetura | Diferencial |
|---------|--------------|-------------|-------------|
| **NullClaw** | Operadores de automação | Minimalista, supervised-only | Foco laser em approval workflow |
| **NanoBot** | Usuários multi-conversa | Modular channels (Feishu, QQ, Email) | WebUI com live metrics |
| **Hermes Agent** | Desenvolvedores Desktop | Electron + TUI dual-mode | Native terminal mode |
| **PicoClaw** | Pesquisadores | Deltachat + Parallel Search | MCP integration docs |
| **IronClaw** | Desenvolvedores runtime | Host-runtime DSL | Manipulação temporal nativa |
| **CoPaw** | Usuários power | Browser Playwright + local llama | Tool visibility toggle |
| **ZeroClaw** | Enterprise multi-agent | WASM plugins + SOPs | Agent-to-agent messaging |

**Observação de arquitetura:** A bifurcação Electron vs. terminal-native (Hermes Agent) replica-se como debate tácito — ZeroClaw escolhe WASM como extensibilidade; NanoBot escolhe channels modulares.

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs/dia médio | Tempo médio de merge |
|------|----------|:-------------:|:--------------------:|
| 🔴 Fast-track | NanoBot, Hermes Agent | >5 | <48h |
| 🟡 Normal | CoPaw, ZeroClaw | 2-5 | 48-96h |
| 🟢 Conservative | PicoClaw, IronClaw, NullClaw | <2 | >1 semana |

### First-Time Contributors

- **CoPaw:** 4 PRs de estreantes (31% do volume)
- **NanoBot:** 1 PR de streante (chengyongru — possivelmente core)
- **ZeroClaw:** Padrão de contribuiçãovia stacks organizados

**Síntese:** CoPaw demonstra melhor atratividade para novos contribuidores, enquanto ZeroClaw otimiza para contribuição batch via PR stacks.

### Debt Técnico Persistente

| Projeto | Dívida Identificada | Tempo em aberto |
|---------|---------------------|:---------------:|
| Hermes Agent | js-yaml CVE | >30 dias |
| CoPaw | Context compaction budget | ~18 dias |
| PicoClaw | CLA detection | 1 dia (crítico) |
| NullClaw | Bug #900 | Não especificado |

---

## 7. Sinais de Tendência

### 7.1 Multi-Agent Deployments como Direção Convergente

Três projetos investem em capacidades multi-agente:

- **ZeroClaw:** RFC #10970 (per-agent resource bounds), #11027 (agent-to-agent messaging)
- **CoPaw:** PR #7923 (tool_result aging), #7978 (cross-agent recent sessions)
- **NanoBot:** Roadmap de providers diversificados

**Previsão:** O paradigma de "um agente por tarefa" está cedendo espaço para orquestração de múltiplos agentes com isolamento de recursos e comunicação peer-to-peer.

### 7.2 Custo como Fator de Decisão

A demanda simultânea por Cheaper Inference em 3 projetos indica que **otimização de custo de inference** é barreira de adoção. Providers plugáveis com fallback automático serão diferencial competitivo.

### 7.3 Terminal Nativo vs. Electron

**Hermes Agent** introduz `hermes --native` como alternativa ao Electron. Este movimento sinaliza que a comunidade open source busca alternativas mais leves para consumo de recursos — tendência也可能影响其他基于Electron的项目.

### 7.4 WASM como Extensibilidade Universal

**ZeroClaw** trata WASM como north-star ("Everything is a plugin"). Se bem executado, este padrão pode influenciar outros projetos a migrar de compile-time features para runtime-installable plugins.

### 7.5 UX de Contexto é Prioridade

Problemas de context compaction (CoPaw), live tokens/sec (NanoBot), e session persistence (NanoBot #5912) dominam issues com maior engajamento. **A percepção de "janela de contexto curta"** é dor de usuário prioritária — projetos que resolverem isso de forma elegante conquistarão adoção.

---

## Recomendações para Decisores

| Decisor | Recomendação |
|---------|-------------|
| **Escolha de plataforma** | Se multi-agent enterprise → ZeroClaw. Se usuário final Desktop → Hermes Agent. Se integração canais → NanoBot. |
| **Contribuição** | CoPaw oferece menor barreira de entrada (4 first-timers/dia). NanoBot para impacto estrutural. |
| **Monitoramento** | NullClaw requer atenção à saúde do maintainer. PicoClaw: bug de CLA (#3392) bloqueia contribuições. |
| **Due diligence** | Hermes Agent e ZeroClaw他俩 têm CVEs pendentes — não deploy em produção sem atualização. |

---

*Relatório gerado em 2026-09-26 com base em dados públicos do GitHub dos projetos analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot — Relatório do Projeto
## 📅 Data de referência: 2026-09-26

---

## 1. Panorama do dia

O NanoBot apresenta **alta atividade** no dia de hoje, com **13 PRs atualizados** e **4 issues** movimentadas nas últimas 24h. O release **v0.3.5** foi destaque na comunidade (Issue #5788). Dois PRs de **alta prioridade (p1)** estão em revisão — refatoração de capabilities dos providers e correção de segurança no sistema de cleanup — sinalizando foco em estabilidade e arquitetura. A comunidade demonstra interesse crescente em **melhorias no WebUI** (tokens/sec ao vivo, persistência de drafts) e em **diversificação de provedores** com a adição do "Cheaper Inference". Nenhum release novo foi publicado hoje.

---

## 2. Lançamentos

### 🔴 Nenhum novo release nas últimas 24h

O release mais recente permanece **v0.3.5** (mencionado em [Issue #5788](https://github.com/HKUDS/nanobot/issues/5788)), publicado em 2026-09-16 por **chengyongru**. Detalhes do changelog não estão disponíveis nos dados atuais.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (2):

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#5912](https://github.com/HKUDS/nanobot/pull/5912) | **fix(webui): preserve composer drafts across navigation and reloads** | chengyongru | ✅ Resolve perda de mensagens não-enviadas ao trocar conversas ou recarregar |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | **test: consolidate redundant coverage across the test suite** | chengyongru | 🧹 Remove 703 linhas redundantes em 34 arquivos; parametrização de 46 grupos de teste |

> **Análise:** A merge do PR #5912 representa uma melhoria direta de UX no WebUI, resolvendo uma dor real de usuários com múltiplas conversas abertas. O PR #5907 demonstra maturidade na manutenção do codebase — redução de complexidade sem alteração de comportamento.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| # | Título | Comentários | Reações | Status |
|---|--------|:-----------:|:-------:|--------|
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | **feat(webui): show live tokens/sec while streaming** | 2 | 0 | 🟢 Aberto |
| [#5788](https://github.com/HKUDS/nanobot/issues/5788) | Nanobot 0.3.5 released! | 0 | 0 | 🔴 Fechado |

> **Destaque:** A Issue #5908 (solicitação de indicador de velocidade de geração) já recebeu **2 comentários**, indicando discussão ativa. A comunidade busca **feedback visual em tempo real** durante streaming — tendência alinhada a ferramentas de monitoramento de LLM.

### PRs com maior interesse estratégico:

| # | Título | Prioridade | Área |
|---|--------|:----------:|------|
| [#5915](https://github.com/HKUDS/nanobot/pull/5915) | **feat(providers): add Cheaper Inference** | p2 | Provider |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **refactor(providers): declare Responses capabilities** | **p1** | Provider |
| [#5005](https://github.com/HKUDS/nanobot/pull/5005) | **fix(exec): allow scoped tmp cleanup** | **p1** | Segurança |

---

## 5. Bugs e Estabilidade

### 🐛 Bugs reportados (Issues em aberto):

| # | Severidade | Descrição | Canal/Área | Link |
|---|:----------:|-----------|-----------|------|
| #5903 | **Alta** | Session-checkpoint marker invisível entregue ao usuário no Feishu | Channel | [Issue](https://github.com/HKUDS/nanobot/issues/5903) |

### 🔧 Correções em PR (11 abertas + 2 fechadas hoje):

| # | Prioridade | Escopo | Descrição | Link |
|---|:----------:|--------|-----------|------|
| **#5916** | p2 | MCP | Carrega todas as páginas de tools antes do registro | [PR](https://github.com/HKUDS/nanobot/pull/5916) |
| **#5914** | p2 | Napcat | Permite mensagens com `file_size` não-numérico em imagens | [PR](https://github.com/HKUDS/nanobot/pull/5914) |
| **#5913** | p2 | Agent | Ignora `NANOBOT_MAX_CONCURRENT_REQUESTS` mal-formatado em vez de lançar exceção | [PR](https://github.com/HKUDS/nanobot/pull/5913) |
| **#5780** | p2 | Channel | **Para de enviar notificações de compaction automático** | [PR](https://github.com/HKUDS/nanobot/pull/5780) |
| **#5605** | p2 | Email | Marca `\Seen` apenas em mensagens efetivamente entregue | [PR](https://github.com/HKUDS/nanobot/pull/5605) |

> **⚠️ Atenção:** O PR #5780 trata de uma regressão provavelmente introduzida em #5656 — notificações de auto-compaction estão sendo enviadas aos usuários, causando incômodo. Recomenda-se revisão urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🆕 Novas features solicitadas (Issues abertas):

| # | Título | Área | Link |
|---|--------|------|------|
| **#5908** | Show live tokens/sec while streaming a reply | WebUI | [Issue](https://github.com/HKUDS/nanobot/issues/5908) |

### 📋 Features em desenvolvimento via PR:

| # | Título | Área | Prioridade | Link |
|---|--------|------|:----------:|------|
| **#5915** | Adicionar Cheaper Inference como provider | Provider | p2 | [PR](https://github.com/HKUDS/nanobot/pull/5915) |
| **#5609** | Microsoft OAuth para Office365/Outlook | Email | p2 | [PR](https://github.com/HKUDS/nanobot/pull/5609) |
| **#5606** | Filtrar emails por alias de destinatário | Email | p2 | [PR](https://github.com/HKUDS/nanobot/pull/5606) |
| **#5386** | Preservar metadata de resultados MCP Apps | MCP | - | [PR](https://github.com/HKUDS/nanobot/pull/5386) |

> **Análise de tendência:** Observa-se foco em **diversificação de providers** (Cheaper Inference, responses API), **melhoria de experiência do email channel** (OAuth, filtragem por alias) e **evolução do WebUI** (métricas em tempo real). O roadmap parece caminhar para maior flexibilidade de deployment e refinamento UX.

---

## 7. Resumo de Feedback dos Usuários

### 👍 Dores identificadas e demandas:

| Problema/Demanda | Frequência | Evidência |
|------------------|:----------:|-----------|
| Perda de drafts ao trocar conversas | 🔴 Alta | [Issue #5910](https://github.com/HKUDS/nanobot/issues/5910) → **RESOLVIDA** via PR #5912 |
| Falta de feedback visual durante streaming | 🔴 Alta | [Issue #5908](https://github.com/HKUDS/nanobot/issues/5908) |
| Notificações indesejadas de auto-compaction | 🟡 Moderada | [PR #5780](https://github.com/HKUDS/nanobot/pull/5780) |
| Mensagens internas vazadas no Feishu | 🟡 Moderada | [Issue #5903](https://github.com/HKUDS/nanobot/issues/5903) |

> **Síntese:** O usuário médio do NanoBot trabalha com **múltiplas conversas simultâneas** e valoriza feedback em tempo real. Bugs relacionados a estado de sessão e notificações intrusivas geram frustração. O projeto responde rapidamente — o problema de drafts foi corrigido no mesmo dia da issue.

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem atividade recente ou aguardando review:

| # | Tipo | Título | Prioridade | Última atualização | Espera | Link |
|---|:----:|--------|:----------:|:------------------:|:------:|------|
| **#5005** | PR | fix(exec): allow scoped tmp cleanup | **p1** | 2026-09-25 | ~68 dias | [PR](https://github.com/HKUDS/nanobot/pull/5005) |
| **#5204** | PR | refactor(providers): declare Responses capabilities | **p1** | 2026-09-25 | ~56 dias | [PR](https://github.com/HKUDS/nanobot/pull/5204) |
| **#5386** | PR | feat(mcp): preserve MCP Apps result metadata | - | 2026-09-25 | ~44 dias | [PR](https://github.com/HKUDS/nanobot/pull/5386) |

### ⚠️ Prioridades recomendadas:

1. **#5005** (Segurança) — PR aberto há ~68 dias com tag `security`; aguardando review há tempo excessivo.
2. **#5204** (Provider Refactor) — Alteração arquitetural significativa; deve ser priorizada antes de novos providers.
3. **#5780** (Bug/Notificações) — Regressão ativa; correção simples mas impacta experiência do usuário.

---

## 📊 Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|------:|:------:|
| Issues abertas/atualizadas (24h) | 2 | 🟢 Normal |
| Issues fechadas (24h) | 2 | 🟢 Normal |
| PRs abertos (24h) | 11 | 🟢 Alta atividade |
| PRs merged/fechados (24h) | 2 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Sem movimento |
| PRs em prioridade p1 | 2 | 🟡 Aguardando review |
| Bugs ativos | 5 | 🟡 Moderado |

---

*Relatório gerado automaticamente com base em dados do GitHub de HKUDS/nanobot em 2026-09-26.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-26

---

## 1. Panorama do Dia

O Hermes Agent manteve um **ritmo de atividade intenso** nas últimas 24h, com 50 issues e 50 PRs atualizados, demonstrando alta intensidade de desenvolvimento. O volume de issues fechadas (32) supera significativamente as abertas (18), indicando forte capacidade de resolução. Dentre os PRs, 14 foram merged/fechados, com destaque para correções de estabilidade no Desktop e TUI. **Nenhuma release foi publicada**, sinalizando que a base de código está em fase de estabilização pré-lançamento. A distribuição de Issues por severidade revela predominância de P2-P3, sem P1 ativas além de uma relacionada a loops de atualização. O ecossistema Desktop (Electron) concentra a maior parcela dos problemas reportados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo sem versões formais выпущен. A ausência de releases pode indicar foco em correções acumuladas antes de uma próxima versão.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (14 total)

| PR | Título | Impacto | Link |
|---|---|---|---|
| **#122931** | fix(tui-gateway): single-flight runtime readiness probes | **Alto** — Elimina saturação do pool RPC compartilhado em polls sobrepostos de `setup.runtime_check` e `setup.status`. Resolve bottleneck crítico em `comp/tui` e `comp/desktop`. | [#122931](https://github.com/NousResearch/hermes-agent/pull/122931) |
| **#122937** | fix(gateway): publish API server heartbeat e metrics após bind | **Alto** — Corrige dashboard congelado ao resolver loop faltante de heartbeat. Métricas e `last_heartbeat` agora atualizam corretamente após boot. | [#122937](https://github.com/NousResearch/hermes-agent/pull/122937) |
| **#121035** | feat(tui): add native terminal mode | **Médio** — Introduce `hermes --native` com renderização no buffer primário do terminal, eliminando alternate screen e mouse tracking. | [#121035](https://github.com/NousResearch/hermes-agent/pull/121035) |
| **#123168** | fmt(js): auto-fix lint | **Processo** — Workflow automático de formatação, mantendo disciplina de código. | [#123168](https://github.com/NousResearch/hermes-agent/pull/123168) |
| **#123161** | fmt(js): auto-fix lint | **Processo** — Segunda iteração do auto-fix lint. | [#123161](https://github.com/NousResearch/hermes-agent/pull/123161) |
| **#107444 → #122366** | fix(desktop): keep Close e + em lone workspace tab strip | **UX** — Corrige ausência de strip de abas em workspaces únicas. Superseded por nova PR co-autoria. | [#122366](https://github.com/NousResearch/hermes-agent/pull/122366) |

### Avanços Estratégicos

- **Estabilidade do Desktop**: Corrigidos 2 bugs P2 de alta severidade (#122931, #122937) que impactavam estabilidade e usabilidade.
- **Terminal Nativo**: Feature flag `display.tui_native: true` adiciona opção de TUI minimalista.
- **Processos**: Automação de lint reduz retrabalho manual.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários + reações)

| # | Título | Comentários | 👍 | Status | Link |
|---|---|---|---|---|---|
| **#49978** | Desktop: PageUp quebra layout (sidebar squeeze, content shift) | 7 | 2 | CLOSED | [#49978](https://github.com/NousResearch/hermes-agent/issues/49978) |
| **#122349** | Plugin runtime state causa loop infinito de sync/rebuild/exec | 6 | 0 | OPEN | [#122349](https://github.com/NousResearch/hermes-agent/issues/122349) |
| **#47006** | Custom-endpoint onboarding hard-fails sem /v1/models | 6 | 0 | CLOSED | [#47006](https://github.com/NousResearch/hermes-agent/issues/47006) |
| **#61443** | nix: .#desktop build quebra em electron bump | 5 | 0 | CLOSED | [#61443](https://github.com/NousResearch/hermes-agent/issues/61443) |
| **#122353** | Post-update tag fetch re-aplica --filter=tree:0 (partial clone rearm) | 5 | 1 | OPEN | [#122353](https://github.com/NousResearch/hermes-agent/issues/122353) |
| **#50871** | Desktop Markdown renderiza lone ~ como strikethrough | 4 | 1 | CLOSED | [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) |
| **#103546** | Bare $ pair em parágrafo é mal-parseado como math (CJK) | 4 | 0 | CLOSED | [#103546](https://github.com/NousResearch/hermes-agent/issues/103546) |
| **#61362** | Pasta não-git exibe phantom "branch" no sidebar | 4 | 1 | CLOSED | [#61362](https://github.com/NousResearch/hermes-agent/issues/61362) |

### Análise de Demandas

1. **Desktop UI é o epicentro de problemas**: 8 das 10 issues mais comentadas envolvem `comp/desktop`, incluindo renderização Markdown, layout, CJK e interações.
2. **Integração com provedores externos**: Onboarding de endpoints customizados (#47006) e renderização de imagens/vision (#101383) indicam demanda por ecossistema mais aberto.
3. **Build reproducibility**: Nix builds (#61443) e sync loops (#122349) mostram fragilidade em processos de instalação/atualização.
4. **Suporte CJK**: 4 issues (markdown tilde, dollar parsing, full-width punctuation, reasoning blocks) demonstram negligência histórica com internacionalização.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Crítico — 1 ativo)

| # | Título | Componentes | Status | Link |
|---|---|---|---|---|
| **#122656** | Desktop hand-off para no-op updater em cada boot — rebuild + restart loop | comp/desktop, comp/gateway, area/install-update | **OPEN** | [#122656](https://github.com/NousResearch/hermes-agent/issues/122656) |

> **⚠️ CRÍTICO**: Reboot infinito destrói chats ativos. Corrigido via PR em andamento?

#### 🟠 P2 (Alto — múltiplos)

| # | Título | Status | Link |
|---|---|---|---|
| #47006 | Custom-endpoint onboarding fail sem /v1/models | CLOSED | [#47006](https://github.com/NousResearch/hermes-agent/issues/47006) |
| #61443 | Nix build hash mismatch em electron bump | CLOSED | [#61443](https://github.com/NousResearch/hermes-agent/issues/61443) |
| #122353 | Post-update --filter=tree:0 rearm em Windows | OPEN | [#122353](https://github.com/NousResearch/hermes-agent/issues/122353) |
| #65151 | Runtime readiness probes saturam RPC pool | CLOSED (PR #122931) | [#65151](https://github.com/NousResearch/hermes-agent/issues/65151) |
| #63214 | /api/model/info hang bloqueia settings | CLOSED | [#63214](https://github.com/NousResearch/hermes-agent/issues/63214) |
| #52323 | Heartbeat/metrics não publicam após boot | CLOSED (PR #122937) | [#52323](https://github.com/NousResearch/hermes-agent/issues/52323) |
| #123151 | Multiplex migration nunca confirma (gateway fail identity check) | OPEN | [#123151](https://github.com/NousResearch/hermes-agent/issues/123151) |
| #123152 | Personality selection mascara system_prompt overlay | OPEN | [#123152](https://github.com/NousResearch/hermes-agent/issues/123152) |

#### 🟡 P3 (Médio — dominante)

Desktop concentra a maioria: markdown rendering (tildes, dólares), UI (model selector drift, settings button overlap), localization (CJK punctuation), sidebar navigation, vision/image handling, slash commands (`/reset` não aparece), drag-and-drop freeze.

### 🔴 Segurança

| # | Título | Vulnerabilidade | Status | Link |
|---|---|---|---|---|
| **#122424** | js-yaml@4.3.1 / yaml<2.9 em known CVE ranges | GHSA-2883-xcg3-v3hh (CPU DoS), GHSA-48c2-rrv3-qjmp | **OPEN** | [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) |

> **⚠️ REQUER ATENÇÃO IMEDIATA**: Dependência JavaScript contém CVEs conhecidos. Atualização para js-yaml@4.3.2+ necessária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Issues + PRs)

| # | Título | Componentes | Status | Link |
|---|---|---|---|---|
| **#122444** | Feature: native self-wake heartbeat para long-running orchestrator sessions | comp/cli, tool/delegate, area/sessions | OPEN | [#122444](https://github.com/NousResearch/hermes-agent/issues/122444) |
| **#112464** | feat: aux video path — video como first-class multimodal aux task | comp/agent, comp/cli, comp/gateway, tool/vision | OPEN | [#112464](https://github.com/NousResearch/hermes-agent/pull/112464) |
| **#107046** | fix(image-routing): config-declared supports_vision beats aux rule | comp/agent, tool/vision, area/config | OPEN | [#107046](https://github.com/NousResearch/hermes-agent/pull/107046) |

### Sinais de Roadmap

1. **Multimodalidade como prioridade**: PR #112464 propõe `video_analyze` como task first-class, indicando tendência de expansão além de texto/imagem.
2. **Autonomia expandida**: Feature #122444 (self-wake heartbeat) atenderia casos de uso "project manager autonomous", sugerindo foco em CI/CD e automação.
3. **Configurabilidade**: Issue #107046 evidencia demanda por controles mais granulares sobre capabilities de modelos.
4. **Melhorias de Terminal**: PR #121035 (native terminal mode) demonstra interesse em alternativas ao Electron para consumo leve.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Evidência |
|---|---|---|
| **Estabilidade do Desktop** | Usuários enfrentam loops de update, UI freezes e crashes ao usar Electron. | Issues #122656, #63682, #122353 |
| **Onboarding doloroso** | Provedores customizados ou não-OpenAI falham na configuração inicial. | Issue #47006 |
| **Produtividade CJK** | Renderização inadequada de caracteres asiáticos queima sessões de trabalho (KaTeX mal-parseado, pontuação errada). | Issues #103546, #50871, #52560 |
| **Usabilidade CLI** | Comandos slash não aparecem no autocomplete, confundindo usuários. | Issue #57641 |
| **Build reproducibility** | Usuários Nix enfrentam falhas em atualizações de dependências. | Issue #61443 |
| **Sessões cross-profile** | Multi-profile backends causam confusão de identidade de sessões. | Issue #64999 |
| **Visibilidade de custos** | Advisor slots no MoA não registram usage/cost. | PR #123162 (corrigindo) |

### Cenários de Uso em Evidência

- **"Project manager autonomous"**: Loop de delegação overnight sem polling manual (#122444).
- **Desenvolvedor Windows source install**: Atualização quebra git clone parcialmente (#122353).
- **Usuário multilíngue**: Japonês/Chinês com expressões matemáticas (#103546) ou ranges numéricos (#50871).
- **DevOps Nix**: Build hermético que falha em bump de electron (#61443).

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Atrasadas

| # | Título | Criado | Severidade | Estado | Link |
|---|---|---|---|---|---|
| **#122349** | Plugin infinite sync/rebuild/exec loop | 2026-09-25 | P3 | OPEN | [#122349](https://github.com/NousResearch/hermes-agent/issues/122349) |
| **#122353** | Post-update --filter=tree:0 rearm | 2026-09-25 | P2 | OPEN | [#122353](https://github.com/NousResearch/hermes-agent/issues/122353) |
| **#123152** | Personality masks system_prompt overlay | 2026-09-25 | P2 | OPEN | [#123152](https://github.com/NousResearch/hermes-agent/issues/123152) |
| **#123151** | Multiplex migration never confirms | 2026-09-25 | P2 | OPEN | [#123151](https://github.com/NousResearch/hermes-agent/issues/123151) |
| **#122444** | Self-wake heartbeat feature request | 2026-09-25 | P3 | OPEN | [#122444](https://github.com/NousResearch/hermes-agent/issues/122444) |
| **#101383** | Auxiliary fallback after 5xx | 2026-09-02 | P2 | OPEN (PR) | [#101383](https://github.com/NousResearch/hermes-agent/pull/101383) |
| **#107046** | Image routing supports_vision | 2026-09-10 | P2 | OPEN (PR) | [#107046](https://github.com/NousResearch/hermes-agent/pull/107046) |

### Recomendações de Priorização

1. **🔴 CRÍTICO**: #122424 (js-yaml CVE) — atualizar dependência imediatamente.
2. **🔴 CRÍTICO**: #122656 (no-op updater loop) — P1 que destrói experiência do usuário.
3. **🟠 ALTA**: #122349, #122353, #123151 — 3 bugs de install/update/gateway com potencial de impacto amplo.
4. **🟡 MÉDIA**: Feature #122444 — atende demanda de automação autonomous; pode ser diferencial competitivo.

---

## Métricas Consolidada (2026-09-26)

| Indicador | Valor |
|---|---|
| Issues ativas (24h) | 18 |
| Issues fechadas (24h) | 32 |
| PRs abertos (24h) | 36 |
| PRs merged/fechados (24h) | 14 |
| Releases | 0 |
| Issues P1 abertas | 1 |
| Issues P2 abertas | 5 |
| CVEs pendentes | 1 |
| Principais áreas impactadas | Desktop (UI, render, install), Gateway (heartbeat, migration), CLI (update, cron) |

---

*Relatório gerado automaticamente com base em dados GitHub do NousResearch/hermes-agent em 2026-09-26.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-26

---

## 1. Panorama do Dia

O projeto PicoClaw mantém uma atividade moderada com **4 PRs abertos** e **2 issues processadas** nas últimas 24h. A comunidade está focada em **evoluções de provedores** (adição do Cheaper Inference e migração para a Responses API da OpenAI) e em **consolidação técnica** (refactoring do deltachat). Não houve lançamentos hoje, e o issue de bug sobre configuração Feishu (#3355) foi fechado após resolução. O projeto demonstra saúde operacional estável, com pipeline de contribuições ativo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O repositório não publicou novas versões. Isso indica uma fase de desenvolvimento interno antes do próximo tag. Usuários em produção devem monitorar os PRs em revisão (especialmente #3381 e #3393) para antecipar próximas mudanças de API.

---

## 3. Progresso do Projeto

| PR | Tipo | Status | Contribuidor | Impacto |
|---|---|---|---|---|
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Feature | Aberto | aiapienthusiast | Adiciona provedor Cheaper Inference (gateway OpenAI-compatível, 15-60% mais barato) |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Feature | Aberto | XenonR | Migra integração OpenAI para Responses API |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Refactoring | Aberto | trufae | Limpeza de 200 LOC no deltachat, remoção de features legadas |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | Docs | Aberto | georgeatparallel | Adiciona guia de setup para Parallel Search MCP |

**Nenhum PR foi mergeado** nas últimas 24h. Todos os 4 PRs estão em estado de revisão aberta, indicando que a equipe mantenedora está avaliando contribuições antes de aceitar.

---

## 4. Temas Quentes da Comunidade

| Item | Tipo | Comentários | Reações | Destaque |
|---|---|---|---|---|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Issue/Bug | 3 | 0 | **Resolvido** — Erro de campo desconhecido em config.json do Feishu |

**Análise:** O issue #3355 (conexão com Feishu) foi o mais discutido, com 3 comentários antes do fechamento. O problema envolve um campo `channel_list.feishu.app_id` que não era reconhecido na versão nightly, sugerindo uma mudança recente na estrutura de configuração que quebrou integrações existentes.

O novo PR #3381 (Responses API) e #3393 (Cheaper Inference) devem ser observados — representam interesse da comunidade em diversificar e baratear opções de provedores LLM.

---

## 5. Bugs e Estabilidade

| Issue | Severidade | Status | Descrição |
|---|---|---|---|
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | **Média** | Aberta | CLAassistant não detecta assinatura de CLA — impede merge de PRs |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Baixa | **Fechada** | Config Feishu com campo desconhecido — **RESOLVIDO** |

**#3392 — Alerta:** Este bug afeta o próprio fluxo de contribuição do projeto. Se o CLAassistant não detecta assinaturas, PRs legítimos podem ser bloqueados. Severidade elevada para o workflow de desenvolvimento.

**#3355 — Resolvido:** O time respondeu rapidamente ao problema de configuração do Feishu, fechando o issue. Usuários devem atualizar para a versão mais recente se utilizarem este canal.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR:
1. **[#3393](https://github.com/sipeed/picoclaw/pull/3393) — Cheaper Inference Provider**
   - Gateway OpenAI-compatível com modelos de múltiplos laboratórios
   - Redução de custo de 15-60% comparada a provedores principais
   - Crescimento rápido这小波表明社区对成本优化的强烈需求

2. **[#3381](https://github.com/sipeed/picoclaw/pull/3381) — Responses API**
   - Migração para nova API da OpenAI
   - Indica alinhamento com roadmap da OpenAI

### Demanda Observada:
- **Integração econômica com LLMs** — evidenciado por dois PRs simultâneos de provedores
- **Busca e extração web** — PR #3368 adiciona Parallel Search MCP para pesquisa sem API key
- **Modernização de canais** — Refactoring #3222 remove código legado do deltachat

---

## 7. Resumo de Feedback dos Usuários

**Dores reportadas:**

| Problema | Contexto | Severidade |
|---|---|---|
| Configuração Feishu quebrada | `app_id` não reconhecido na config | ✅ Resolvida |
| CLA detection falha | Bloqueia merge de contribuições | 🔴 Ativa |
| Curva de setup complexa | MCP setup não documentado | 🟡 Parcialmente resolvido com #3368 |

**Satisfação:**
- Comunidade ativa respondendo issues rapidamente (3 comentários em 24h)
- Resolução de bugs em menos de uma semana
- Múltiplos contribuidores externos (3 PRs de autores diferentes)

**Insatisfação potencial:**
- Ausência de releases recentes pode frustrar usuários esperando novidades
- Falta de documentação clara para novos provedores

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Urgência | Motivo |
|---|---|---|---|---|---|
| CLA detection não funciona | Bug | 1 dia | Aberto | 🔴 Alta | Bloqueia workflow de PRs |
| Responses API migration | Feature | 9 dias | Aberto | 🟡 Média | Depende de testes/revisão |
| Deltachat refactoring | Refactor | 85 dias | Aberto | 🟢 Baixa | Manutenção, sem urgência |
| Parallel Search docs | Docs | 21 dias | Aberto | 🟢 Baixa | Melhoria, não bloqueante |

**Recomendação prioritária:** Resolver [#3392](https://github.com/sipeed/picoclaw/issues/3392) (CLA detection) antes do próximo release — impacta diretamente a capacidade da comunidade contribuir.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| Issues fechadas (24h) | 1 | ✅ Positivo |
| PRs em revisão | 4 | 🟡 Estável |
| Bugs ativos | 1 | 🟡 Atenção necessária |
| Releases (7 dias) | 0 | 🔴 Monitorar |
| Contribuidores ativos (PRs) | 4 | ✅ Positivo |

**Conclusão:** PicoClaw apresenta saúde geral estável com pipeline de contribuições ativo. A atenção imediata deve ir para o bug de CLA detection (#3392) e para a revisão dos PRs de provedores (#3381, #3393), que sinalizam direções estratégicas para o projeto.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-26

---

## 1. Panorama do Dia

O projeto IronClaw mantém baixa atividade no dia de hoje, sem registro de novas issues ou releases. Duas pull requests permanecem abertas, ambas com atualizações nas últimas 24 horas, indicando movimento contínuo no codebase. O volume de atividade sugere um período de revisão e preparação para próximas versões, sem sinais de estagnação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o último relatório. Recomenda-se monitorar o repositório para eventuais announcements.

---

## 3. Progresso do Projeto

### PRs em Aberto (2)

| # | Título | Tamanho | Risco | Escopo | Contribuidor | Status |
|---|--------|---------|-------|--------|--------------|--------|
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | fix(host-runtime): add builtin.time shift and typed input issues | XL | Low | docs | new (Bortlesbones) | OPEN |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | XS | Low | CI/Infrastructure | core (ironclaw-ci[bot]) | OPEN |

**Destaque:** O PR [#8108](https://github.com/nearai/ironclaw/pull/8108) introduz funcionalidade significativa para o `builtin.time`, adicionando suporte a operações de deslocamento temporal com signed seconds, minutes, hours, days e weeks. Esta melhoria amplia a capacidade de manipulação temporal no runtime.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue com atividade significativa registrada nas últimas 24 horas.**

Não há issues com comentários ou reações para análise de demandas ativas da comunidade.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O projeto não registrou falhas críticas ou instabilidades no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Desenvolvimento

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | Operações de shift no builtin.time com suporte a timedeltas com sinal | Alto — expande capacidades temporais do runtime |

O PR [#8108](https://github.com/nearai/ironclaw/pull/8108) representa a principal adição funcional pendente, com escopo XL indicando mudanças substanciais que podem influenciar o roadmap de funcionalidades temporais.

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback reportados nas últimas 24 horas.**

A ausência de issues abertas ou comentários sugere que não há reclamações ou solicitações urgentes pendentes por parte da base de usuários.

---

## 8. Backlog que Merece Atenção

| Item | Id | Status | Última Atualização | Observação |
|------|----|--------|--------------------| ------------|
| PR #7988 | [Link](https://github.com/nearai/ironclaw/pull/7988) | OPEN | 2026-09-25 | Refresh automático do knowledge graph — verificar se há dependências pendentes |

**Nenhum item críticas pendente de resposta prolongada detectado.**

---

## Métricas Resumidas (24h)

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 2 |
| PRs merged/fechadas | 0 |
| Releases | 0 |

---

**Status geral:** Projeto em fase de revisão de código, sem bloqueios ou problemas críticos identificados.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório do Projeto CoPaw — 2026-09-26

---

## 1. Panorama do Dia

O projeto **CoPaw** apresenta um dia de **alta atividade comunitária sem lançamentos formais**. Nas últimas 24 horas, foram registradas **11 issues** e **13 pull requests** atualizados, todos ainda em estado aberto — nenhum PR foi merged ou fechado, e nenhuma release foi publicada. A atividade é marcada por **forte contribuição de novos desenvolvedores** (4 PRs de first-time-contributors) resolvendo bugs críticos de estabilidade e UX, enquanto issues mais antigas aguardam triagem. O volumen de activity sugere um projeto ativo em fase de refinamento pré-release.

---

## 2. Lançamentos

### 🚫 Nenhuma release registrada nas últimas 24h

Não houve publicação de novas versões. A equipe parece focada em validar correções antes de um próximotag.

---

## 3. Progresso do Projeto

### PRs em destaque (13 abertos — nenhum merged hoje)

| # | PR | Autor | Descrição | Relevância |
|---|-----|--------|-----------|------------|
| [#7989](https://github.com/agentscope-ai/CoPaw/pull/7989) | fix(console): keep Markdown table scrolling reachable | dawNotPoi 🆕 | Mantém tabelas Markdown dentro da bolha de chat, limita scroll em `min(60vh, 32rem)`, mantém barra de scroll horizontal acessível no topo de respostas longas | **UX crítica** |
| [#7988](https://github.com/agentscope-ai/CoPaw/pull/7988) | fix(tools): skip binary and internal files in grep search | dawNotPoi 🆕 | Impede `grep_search` de indexar `history.db-wal` e arquivos internos, evitando contaminação do estado da sessão | **Segurança/Estabilidade** |
| [#7987](https://github.com/agentscope-ai/CoPaw/pull/7987) | fix(browser): support Playwright default argument exclusions | dawNotPoi 🆕 | Adiciona `browser.ignore_default_args` para permitir carregar extensões em profiles persistentes | **Funcionalidade** |
| [#7983](https://github.com/agentscope-ai/CoPaw/pull/7983) | Fix qq replayed messages | iluv7 | Resolve duplicação de mensagens na reconexão do gateway QQ oficial após resume de sessão | **Bug crítico** |
| [#7986](https://github.com/agentscope-ai/CoPaw/pull/7986) | fix(providers): skip context pattern table for custom endpoints | Bruce-Yii | Providers OpenAI-compatíveis customizados (llama.cpp, vLLM) não são mais forçados a usar tabela estática de context window | **Correção de comportamento** |
| [#7982](https://github.com/agentscope-ai/CoPaw/pull/7982) | fix(providers): relay Gemini thought_signature | xuxiaowei1985 🆕 | Corrige falha no 2º turno ao usar Gemini com thinking models + tool calling | **Estabilidade Gemini** |

**Sinal positivo**: 4 de 13 PRs são de **first-time-contributors**, indicando boa onboarding e atratividade do projeto.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reação)

| # | Título | Tipo | Comentários | Status |
|---|--------|------|-------------|--------|
| [#7628](https://github.com/agentscope-ai/CoPaw/issues/7628) | Context compaction pode exceder budget do provider e falhar turns ativos | enhancement | 7 | 🟡 Aberta |
| [#7884](https://github.com/agentscope-ai/CoPaw/issues/7884) | 压缩后刷新前端，历史信息无法全量加载 | question | 5 | 🟡 Aberta |
| [#7957](https://github.com/agentscope-ai/CoPaw/issues/7957) | Recomendação: desativar manualmente modelos/canais pré-fabricados | enhancement | 3 | 🟡 Aberta |
| [#7948](https://github.com/agentscope-ai/CoPaw/issues/7948) | Poor web console design that breaks user input | bug | 3 | 🟡 Aberta |

**Análise**: A issue #7628 com 7 comentários domina a discussão, evidenciando um **problema crônico de context compaction** que afeta reliability em produção. A issue #7884 (#7884) reflete frustração com histórico curto após compactação — dor real de UX. A solicitação #7957 indica demanda por **personalização avançada da UI**, atendida parcialmente pelo PR #7956.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs reportados nas últimas 24h

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#7980](https://github.com/agentscope-ai/CoPaw/issues/7980) | **Crítica** | `grep_search` falta filtragem binária e渗入 arquivos internos `history.db-wal` | **Doom loops irrecuperáveis** por state poisoning — já com PR #7988 |
| [#7984](https://github.com/agentscope-ai/CoPaw/issues/7984) | **Alta** | Browser SDK não carrega extensões (Playwright injeta `--disable-extensions`) | Perfis com SwitchyOmega e outras exts inutilizados — já com PR #7987 |
| [#7946](https://github.com/agentscope-ai/CoPaw/issues/7946) | **Alta** | QQ gateway replays events no resume, causando duplicação | Respostas duplicadas ao reconectar — já com PR #7983 |
| [#7948](https://github.com/agentscope-ai/CoPaw/issues/7948) | **Média** | Console web design quebra input do usuário | UX degradada no console |
| [#7981](https://github.com/agentscope-ai/CoPaw/issues/7981) | **Média** | `chat_with_agent` foreground timeout: caller recebe "interrompido pelo usuário" | Chamadas legítimas falham com mensagem falsa |
| [#7979](https://github.com/agentscope-ai/CoPaw/issues/7979) | **Média** | Context window catalog nubem aplicado a provider local llama.cpp (32k tratado como 1M) | Compaction nunca dispara em setups locais |

**Estado**: 3 bugs críticos/altos **já possuem PRs** aguardando review — excelente velocidade de resposta comunitária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Features solicitadas

| # | Feature | Relevância | Sinais de roadmap |
|---|---------|------------|-------------------|
| [#7978](https://github.com/agentscope-ai/CoPaw/issues/7978) | Painel "Recent Sessions" cross-agent na sidebar | **Alta** | Indica direção de **multi-agent monitoring** |
| [#7923](https://github.com/agentscope-ai/CoPaw/pull/7923) | Age out `tool_result` blocks após `blocks_retention_days` | **Alta** | Contenção de crescimento de `history.db` |
| [#7357](https://github.com/agentscope-ai/CoPaw/pull/7357) | Toggle de visibilidade de tool calls no chat | **Média** | Melhor UX em conversas longas com tool activity |
| [#7359](https://github.com/agentscope-ai/CoPaw/pull/7359) | Caps inline de mídia por provider (imagem/vídeo/áudio) | **Média** | Configuração granular de media caps |
| [#7957](https://github.com/agentscope-ai/CoPaw/issues/7957) | Desativar manualmente modelos/canais pré-fabricados | **Média** | UI customization para "clean interfaces" |
| [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542) | Paginação de mensagens via scroll-back | **Média** | Acessibilidade a histórico compacto |

**Sinais emergentes**:
- Foco em **estabilidade de contexto** (compactação, retention, paginação)
- **Multi-agent features** ganhando tração
- **Customização de UI** como demanda crescente

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severity |
|-----|-----------|----------|
| **Histórico de chat curto após compactação** | #7884: "聊天记录的历史这么短么？...体验多差" | 🔴 Alta |
| **Extensões não carregam em persistent profiles** | #7984: SwitchyOmega e outras exts inutilizadas | 🔴 Alta |
| **grep_search corrompe estado da sessão** | #7980: doom loops irrecuperáveis | 🔴 Crítica |
| **Tabelas Markdown ruins no console** | #7924: scrollbar no fundo, sem wrap | 🟡 Média |
| **Compaction ignora budget completo do provider** | #7628: falha em turns ativos | 🟡 Média |
| **QQ bot duplica mensagens na reconexão** | #7946: replay causing duplicate replies | 🟡 Média |

### Cenários de uso em evidência
- **Persistent browser profiles** com extensões corporativas (SwitchyOmega)
- **Local llama.cpp** como provider alternativo
- **QQ official-bot** como canal de comunicação
- **Multi-agent sessions** com necessidade de switching rápido

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#7628](https://github.com/agentscope-ai/CoPaw/issues/7628) | Context compaction excede budget do provider | ~18 dias | 7 comentários, sem PR | 🔴 **Alta** |
| [#7884](https://github.com/agentscope-ai/CoPaw/issues/7884) | Histórico não carrega após refresh | ~7 dias | 5 comentários, questão pendente | 🟡 Média |
| [#7948](https://github.com/agentscope-ai/CoPaw/issues/7948) | Console design quebra input | ~3 dias | 3 comentários | 🟡 Média |

### Observações

- A issue **#7628** é a mais antiga com alta discussão (7 comentários) e representa um **problema de arquitetura** de context management — merece atenção da core team para definir abordagem (PR pendente ou redesign).
- As issues mais recentes (#7980, #7984, #7946) já têm PRs correspondentes, indicando **boa cobertura comunitária**.
- Nenhuma issue com **Label: help wanted** ou **good first issue** pendente de assign.

---

## 📈 Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 11 |
| PRs abertos (24h) | 13 |
| PRs merged/fechados (24h) | 0 |
| Novas releases | 0 |
| Bugs críticos/altos com PR | 3/6 |
| First-time contributors | 4 |
| Issue mais comentada | #7628 (7 comentários) |

**Veredito**: Projeto em **fase de refinamento intensivo**. A comunidade está ativa e produzindo PRs de qualidade para bugs críticos, mas nenhuma mudança foi ainda consolidada em release. A equipe core deve priorizará review dos PRs #7988, #7987 e #7983 para estabilização urgente.

---

*Relatório gerado automaticamente com base em dados do GitHub de [CoPaw/agentscope-ai](https://github.com/agentscope-ai/CoPaw) em 2026-09-26.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-09-26  
**Fonte:** github.com/zeroclaw-labs/zeroclaw  
**Analista:** Open Source Project Analyst — AI Agents & Personal Assistants

---

## 1. Panorama do Dia

O ecossistema ZeroClaw apresenta **alta atividade** nas últimas 24h, com 47 issues e 50 PRs atualizados, embora **nenhuma release tenha sido publicada** no período. O projeto mantém um ritmo intenso de desenvolvimento focado em **segurança, arquitetura e experiência de operador**, evidenciando uma Maturity Stage avançada (estágio de refinamento sistêmico). A comunidade debate ativamente RFCs estruturais — especialmente sobre admission control multi-agente, mensageria agent-to-agent e composição de runtime — enquanto issues de segurança críticas (S0/S1) competem por atenção com a entrega de features de alta complexidade. A governance mostra maturidade com processos formalizados de review e merge queue.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto encontra-se em período de **feature freeze implícito** para a estabilização de branches empilhadas de segurança. Os trackers mais recentes sinalizam que marcos como **ZeroRelay v0.9.0** (#8358) e **SOP 5/5** (#8288) estão em estágio avançado de desenvolvimento, aguardando consolidação das pilhas de PRs de segurança para publicação.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente (resumo):

| # | Título | Impacto | Autor |
|---|--------|---------|-------|
| [#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586) | Centralizar webhook channel message dispatch | Arquitetura gateway | Audacity88 |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | Inverter dependência zeroclaw-channels → runtime + mover orchestrator | Refatoração core | NiuBlibing |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | RFC: Primitive durável para perguntas agent→human (SOP approval gate) | Arquitetura agent-loop | JordanTheJet |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | RFC: Delivery receipts para mensagens outbound | Confiabilidade messaging | JordanTheJet |
| [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) | RFC: Agent-to-agent session messaging | Novas capacidades | Audacity88 |
| [#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) | RFC: Preservar reviews e simplificar expedited merges | Governance | Audacity88 |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Bug: Agents param ao sair do chat no web dashboard | UX stability | susyabashti |
| [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | Bug: RPC `sops.run` retorna run ID inválido | SOP reliability | JordanTheJet |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Bug: Daemon não registra channel-map factory | Channel runtime wiring | RustLangLatam |

**Observação:** Muitos PRs de features grandes (stack de JordanTheJet: #10268→#10275→#10321) estão em revisão ativa com dependências complexas, representando a entrega mais substancial do ciclo — **Private Principal Memory, Browser PKCE, Cross-Surface Enrollment e Route-Layer Auth**.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker] Maintainer decision queue para RFCs e design issues | 15 | Tracker |
| [#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586) | Refactor gateway: centralize webhook channel dispatch | 10 | Enhancement |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | [Tracker] Unified capability catalog e plugin migration | 9 | Tracker |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | RFC: Host-scoped admission control e per-agent resource bounds | 8 | RFC |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Feat(CI): melhorar cached Rust builds | 8 | CI Enhancement |

### Análise de Demandas:

**🔴 Arquitetura de Plugin/WASM:** A comunidade demonstra forte interesse na migração de channels e tools de compile-time features para runtime-installable WASM plugins (#8850, #6489). Este é um **north-star product direction** declarado — "Everything is a plugin".

**🟡 Governança e Processos:** O RFC #11017 sobre preservar reviews e expedited merges indica tensão no processo de contribution — especificamente حول механический requisitos que frictionam contribuições.

**🟢 Multi-Agent Paradigm:** O RFC #10970 sobre admission control e o RFC #11027 sobre agent-to-agent messaging sinalizam que o projeto está expandindo para **multi-agent deployments**, um caso de uso emergente.

---

## 5. Bugs e Estabilidade

### Por Severidade:

| Severidade | Qtd | Exemplos |
|------------|-----|----------|
| **S0** (Crítico) | 1 | [#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110) — Symlink retargetable no RPC workspace confinement |
| **S1** (Bloqueante) | 2 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — wasmtime-wasi CVEs drift; [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — Daemon não registra channel-map factory |
| **S2** (Degradado) | 4 | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559), [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513), [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059), [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) |
| **S3** (Menor) | 1 | [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) — Race condition em testes Windows |

### Bugs Críticos Requerendo Atenção Imediata:

**🔴 S0 — #11110:** *"RPC workspace confinement retains a retargetable cwd symlink"*  
- **Risco:** Data loss / security risk
- **Descrição:** Sessão RPC pode reter symlink controlada pelo caller como workspace root após authorization checks. Retargeting durante turno admitted pode causar escape de confinamento.
- **Status:** In-progress
- **Link:** [Issue #11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110)

**🟠 S1 — #8519:** *"Reconcile cargo-audit ignores e remediate wasmtime-wasi CVEs"*  
- **Risco:** Security vulnerability drift
- **Status:** Accepted
- **Link:** [Issue #8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)

**🟠 S1 — #11055:** *"Daemon never registers channel-map factory"*  
- **Impacto:** Webhook, cron e SOP turns não têm channels disponíveis
- **Link:** [Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (últimas 24h):

| # | Título | Tags | Prioridade |
|---|--------|------|------------|
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) | Adicionar Cheaper Inference como provider OpenAI-compatible | Provider | P2 |
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | Render thematic breaks e setext headings para WhatsApp | Channel:WhatsApp | P3 |
| [#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100) | Preservar provider aliases no cost-rate catalog prefill | Provider, Gateway | P2 |
| [#11092](https://github.com/zeroclaw-labs/zeroclaw/pull/11092) | ADR-016 exception: holding-crate para runtime composition | Runtime | Docs |
| [#11121](https://github.com/zeroclaw-labs/zeroclaw/pull/11121) | Requerer bearer token para remote WSS connections (Zerocode) | Security, Zerocode | Docs |

### RFCs Abertos com Alto Impacto:

| # | Título | Domínio | Risco |
|---|--------|---------|-------|
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | RFC: Host-scoped admission control e per-agent resource bounds | Architecture | High |
| [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) | RFC: Agent-to-agent session messaging with receiver discretion | Security | High |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | Complete public runtime composition boundary | Architecture | High |
| [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) | RFC: Risk-based merge-result freshness | CI/Governance | High |

### Sinais de Roadmap Emergentes:

1. **Multi-Agent Host Management:** RFC #10970 endereça degradação graceful em máquinas com muitos agentes — indica expansão para deployment patterns mais complexos.
2. **Plugin Ecosystem:** Migração de features para WASM plugins (#6489, #8850) permitirá extensibilidade sem rebuild.
3. **ZeroRelay v0.9.0:** Tracker #8358 sinaliza lançamento iminente com native transport.
4. **SOP 5/5:** Marco de feature completeness para Standard Operating Procedures (#8288).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas:

**🔴 Bug #8559 — Web Dashboard UX:**  
> *"When exiting the chat session after giving an agent a task, it stops the loop as interrupted by the user."*  
> **Impacto:** Workflow blocked — usuários perdem progresso de agentes em background.

**🟠 Bug #11059 — WhatsApp Voice Routing:**  
> *"SendMessage.force_voice is documented but WhatsApp Web sender never reads it."*  
> **Impacto:** Degraded behavior — users esperam TTS delivery mas recebem texto.

**🟠 RFC #10930 — Durable Questions:**  
> *"ZeroClaw already contains a correct implementation of 'an agent asked a human something and must survive until they answer'. It is the SOP approval gate, and nothing else in the codebase uses it."*  
> **Impacto:** Capacidade subutilizada = valor não entregue.

**🟡 CI Latency — #7108:**  
> *"Current PR CI commonly takes about 15-20 minutes even when the actual code change is small."*  
> **Impacto:** Developer experience degradado, ciclo de feedback lento.

### Cenários de Uso Emergentes:

- **Multi-agent deployments** em single host (RFC #10970)
- **Agent-to-agent coordination** sem shared history (#11027)
- **Browserless OIDC enrollment** para automação (#10270)
- **Coding CLI delegation** para Gemini CLI → Antigravity CLI (#11076)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas:

| # | Título | Criado | Status | Ação Recomendada |
|---|--------|--------|--------|-----------------|
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Unified capability catalog e plugin migration roadmap | 2026-05-06 | In-progress | Priorizar; é north-star do produto |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | Inverter dependência channels→runtime | 2026-05-23 | In-progress | Tracking debloca outras mudanças |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP milestone 5/5 | 2026-06-24 | In-progress | PRs stacked precisam review |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move channels para WASM plugins | 2026-07-08 | In-progress | Depende de #6489 |
| [#9599](https://github.com/zeroclaw-labs/zeroclaw/issues/9599) | Tool-result image serialization | 2026-07-31 | Accepted | Audit multi-provider |

### PRs Grandes Aguardando Review:

| # | Título | Stack | Tamanho | Bloqueios |
|---|--------|-------|---------|-----------|
| [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | Self-serve relay enrollment via `relay claim` | — | XL | ZeroRelay v0.9.0 |
| [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) | MCP launcher e distribuição | feat/bootstrap-install-manifest | XL | Depende de #10590 |
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | Private principal memory | Stacked (6 PRs) | XL | Core security |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | Browser PKCE + cross-surface enrollment | Stacked (10 PRs) | XL | Security stage 5 |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 34 | 🟢 Normal |
| PRs abertos (24h) | 40 | 🟢 Normal |
| PRs merged/fechados (24h) | 10 | 🟢 Normal |
| Bugs S0+S1 abertos | 3 | 🟡 Atenção |
| Releases (24h) | 0 | 🔴 Ausência |
| RFCs em discussão | 8+ | 🟢 Engajamento |

---

**Próximos marcos esperados:** ZeroRelay v0.9.0 (#8358), SOP 5/5 completion (#8288), consolidação da stack de security PRs para release.

*Relatório gerado automaticamente com base em dados do GitHub — 2026-09-26*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*