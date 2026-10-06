# Resumo diário do ecossistema de agentes de IA 2026-10-07

> Issues: 1 | PRs: 16 | Projetos cobertos: 7 | Gerado em: 2026-10-06 23:30 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-10-07

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **alta atividade de desenvolvimento** nesta data, com 16 PRs atualizados nas últimas 24 horas — embora nenhuma nova release tenha sido publicada. O destaque vai para a conclusão de uma trilogia de correções críticas no módulo `local_loop` (PRs #1044, #1045, #1046), todas mergeadas em 2026-10-06, resolvendo problemas de concorrência e gating de configuração. Doze PRs permanecem abertos, abrangendo áreas como streaming de ferramentas nativas, documentação, correções de memória e CI/CD. A atividade concentrada no mesmo autor (`vernonstinebaker`) sugere um ciclo de desenvolvimento acelerado com foco em estabilidade antes de潜在的下一个发布版本.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o período analisado. A ausência de releases coincide com o ciclo de correções do `local_loop`, indicando possivelmente uma fase de estabilização antes do próximo tagging.

> **Recomendação**: Monitorar PRs #1044–#1046 para eventual release que consolide as correções de concorrência e gating.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#1044](https://github.com/nullclaw/nullclaw/pull/1044) | fix(agent): make local_loop.enabled actually gate the feature | **Crítico** — Corrigia feature on-by-default que deveria ser opcional |
| [#1045](https://github.com/nullclaw/nullclaw/pull/1045) | fix(agent): make parallel tool workers safe on every exit path | **Alto** — Eliminava race conditions em workers paralelos |
| [#1046](https://github.com/nullclaw/nullclaw/pull/1046) | fix(agent): bound local_loop config and stop returning dead stack storage | **Alto** — Corrigia vazamento de memória e dados corrompidos |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes | **Médio** — Restaurava controles de recall de memória |

### Análise

As **três correções do #987** representam uma entrega significativa: a issue original tratava de "loop hygiene" para execuções longas com ferramentas locais, e foi deliberadamente dividida em três PRs interdependentes para isolar:
1. O bug de gating de configuração (#1044)
2. Defeitos de concorrência e lifetime (#1045)
3. Problemas de boundary de memória (#1046)

Essa estratégia de splitting demonstra maturidade em revisão de código, evitando merges que poderiam reintroduzir defeitos.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| [#1036](https://github.com/nullclaw/nullclaw/issues/1036) | ci: gate Docker image changes on PRs and before release publish | OPEN | **Alta** |

**Análise**: A issue documenta que a imagem Docker `ghcr.io/nullclaw/nullclaw:latest` foi publicada em 2026-05-29 com `/nullclaw-data` root-owned, causando `AccessDenied` para uid 65534 até a correção #1023. O problema raiz: nenhum workflow constrói a imagem em PRs — apenas em releases. A demanda é por gates de CI que validem mudanças Docker **antes** da publicação.

### PRs com Potencial Impacto Estratégico

| # | Título | Status | Sinais |
|---|--------|--------|--------|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | feat(streaming): native tool calls during SSE streaming | OPEN | Suporte a providers com tools nativas durante streaming |
| [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | fix(a2a): scope tasks and context sessions by bearer principal | OPEN | Correção de segurança em `/a2a` endpoint |

**Nota**: Ambos PRs estão abertos há semanas (#971 desde 2026-06-29), indicando complexidade ou dependências pendentes.

---

## 5. Bugs e Estabilidade

### Correções Recentes (Merged)

| Severidade | Contagem | Exemplos |
|------------|----------|----------|
| **Crítica** | 1 | `#1044` — `local_loop.enabled` não bloqueava feature |
| **Alta** | 2 | `#1045` — race conditions; `#1046` — stack corruption |
| **Média** | 3 | `#1001` — recall de memória; `#1021` — GIT_DIR em worktree; `#1005` — archive shards em turns ativos |

### Issue Aberta

| # | Severidade | Título |
|---|------------|--------|
| [#1036](https://github.com/nullclaw/nullclaw/issues/1036) | **Alta** | Docker image sem CI gate — risco de publicar imagens quebradas |

### Análise de Estabilidade

As correções do dia anterior abordaram **padrões de defeitos crônicos** em código de agente:
- **Gating condicional quebrado**: Config flags que não controlavam comportamento
- **Race conditions**: Workers paralelos com joins incompletos
- **Memory safety**: Armazenamento em stack frames já retornados

Isso sugere que o projeto está em fase de **consolidação de robustness** após expansão de features.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PRs Abertos

| # | Feature | Área | Complexidade |
|---|---------|------|--------------|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | Native tool calls durante SSE streaming | Streaming | Alta |
| [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | Seguir symlinks em diretórios de skills | Skills | Baixa |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) *(merged)* | Auto-recall configurável + limites | Memory | Média |

### Evolução de Documentação (Alta Atividade)

**4 PRs de docs abertos simultaneamente**:
- [#1040](https://github.com/nullclaw/nullclaw/pull/1040) — CLAUDE.md como pointer file
- [#1039](https://github.com/nullclaw/nullclaw/pull/1039) — Atualização de figuras de scale
- [#1008](https://github.com/nullclaw/nullclaw/pull/1008) — Reparo de índice + guias de subsistemas
- [#1043](https://github.com/nullclaw/nullclaw/pull/1043) — Correção de Android cross-compile

**Interpretação**: Investimento significativo em DX (developer experience) e onboarding, possível sinal de estratégia de expansão de comunidade.

### Sinais de Roadmap

1. **A2A Protocol**: PR #1012 corrige scoping de tasks — indica maturação do endpoint `/a2a`
2. **HTTP Transport**: PR #1019 adiciona testes byte-exact para curl transport — maturidade de transporte
3. **Docker CI**: Issue #1036 + PR #1042 — infraestrutura de release em revisão

---

## 7. Resumo de Feedback dos Usuários

**Nenhum comentário de usuário externo identificado nas issues/PRs do período.**

### Observações Internas

O feedback implícito emerge nos PRs:

| Padrão | Evidência | Implicação |
|--------|-----------|------------|
| **Confusão com worktree** | `#1021` — pre-push hook falhando em worktrees | Usuários usando workflow documentado enfrentam erros silenciosos |
| **Android quebrado** | `#1043` — documentação apontava para workflow inexistente | Primeiro-timers em Android seguiam caminho quebrado |
| **Archive contaminando contexto** | `#1005` — conversas arquivadas apareciam em turns atuais | Usuários com longos históricos enfrentavam comportamento confuso |

### Net Sentiment (Baseado em Defeitos Corrigidos)

**Positivo**: Correções rápidas e abrangentes indicam responsividade. A trilogia #1044–#1046 demonstra atenção a edge cases de execução longa.

**Áreas de atrito**: Docker publishing, Android build, e worktree support são pontos de dor documentados nos PRs de fix.

---

## 8. Backlog que Merece Atenção

### PRs Abertos com Tempo Prolongado

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|-------------|------------|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | Native tool calls durante SSE streaming | 2026-06-29 | ~99 dias | Alta |
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | Loop hygiene para long runs | 2026-08-15 | ~53 dias | **Entregue via #1044–#1046** |
| [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | A2A bearer principal scoping | 2026-09-27 | ~10 dias | Alta (segurança) |

### Issue Sem Atribuição Visível

| # | Título | Criado | Status | Bloqueia? |
|---|--------|--------|--------|-----------|
| [#1036](https://github.com/nullclaw/nullclaw/pull/1036) | Docker gate em CI | 2026-10-05 | OPEN, sem assignee | Release pipeline |

### Recomendações

1. **Priorizar #971**: 99 dias aberto com feature de streaming crítico —需要对 reviewer 分配或关闭 with rationale
2. **Atribuir #1036**: Issue de infraestrutura em aberto — necesita owner para implementar gate de Docker
3. **Mergiar docs PRs**: 4 PRs de documentação representam baixa RISCO e alta recompensa para DX

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| PRs abertos | 12 |
| PRs fechados/merged | 4 |
| Releases | 0 |
| Autor principal | vernonstinebaker (100% das atividades) |
| Áreas mais ativas | Agent (concurrency fixes), Documentation, CI/CD |

---

*Relatório gerado em 2026-10-07 com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-10-07  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **sinais mistos de maturidade** em 2026-10-07. Três projetos (NullClaw, ZeroClaw, Hermes Agent) demonstram atividade intensa com volumes significativos de PRs e issues, enquanto IronClaw permanece em estado de baixa atividade. O mercado evidencia uma **tendência clara hacia estabilização**: nenhum dos sete projetos publicou releases nas últimas 24h, sugerindo uma fase de consolidação pós-expansão de features. A segurança emerge como tema transversal — desde correções de concurrency em NullClaw (#1044–#1046) até vulnerabilidades de sandbox em ZeroClaw (#11539–#11540) e updates de Go toolchain em PicoClaw (#3248).值得注意的是, PicoClaw exemplifica um risco presente em todo o ecossistema: forks comunitários assumindo custódia de projetos originais abandonados, um padrão que pode fragmentar a base de usuários.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Bugs Críticos | Saúde (1-5) |
|---------|-------------|-------------|------------------|----------------|--------------|-------------|
| **NullClaw** | 1 | 12 | 4 | 0 | 0 | 🟢 4/5 |
| **NanoBot** | 3 | 9 | 3 | 0 | 1 (Deepseek web_search) | 🟡 3/5 |
| **Hermes Agent** | 38 fechadas / 50 abertas | ~12 | 2 | 0 | 2 (P0) | 🟡 3/5 |
| **PicoClaw** | 5 | N/A | 69 | 0 | 1 (ghost session UX) | 🟡 3/5* |
| **IronClaw** | 0 | 1 | 0 | 0 | 0 | 🟡 2/5 |
| **CoPaw** | 2 | 4 | 0 | 0 | 0 | 🟡 3/5 |
| **ZeroClaw** | 33 | 50 | 0 | 0 | 3 (S0) | 🟡 3/5 |

*PicoClaw: nota reduzida devido à estagnação do repositório oficial; fork ativo pontua 4/5.

**Observações:**
- **Volume absoluto:** Hermes Agent lidera com 100 itens atualizados, seguido por ZeroClaw (83) e PicoClaw (69+ merged)
- **Qualidade vs. volume:** NullClaw apresenta melhor proporção de merges (4/16 = 25%) comparado a ZeroClaw (0/50 = 0%)
- **Risco imediato:** NanoBot (#6085) e ZeroClaw (#10495) possuem bugs bloqueantes que requerem atenção urgente

---

## 3. Posicionamento do Projeto Principal

### Análise por Posicionamento

**Líder em Atividade Consistente:** **NullClaw**
- Único projeto com ciclo de desenvolvimento concentrado em um único autor (`vernonstinebaker`, 100% das atividades)
- Estratégia de splitting de PRs (#987 → #1044–#1046) demonstra maturidade em code review
- Foco em estabilidade de long-running agents com correções de concurrency e memory safety

**Maior Volume de Comunidade:** **Hermes Agent**
- 100+ itens atualizados em 24h representa o ecossistema mais ativo
- however, a proporção de 38 issues fechadas vs. 50 abertas indica backlog acumulado
- Issue #134008 (review loop) sinaliza bottlenecks organizacionais, não técnicos

**Maior Risco de Fragmentação:** **PicoClaw**
- Repositório oficial (`sipeed/picoclaw`) demonstra sinais claros de abandono
- Fork `afjcjsbx/picoclaw` concentra 69 PRs merged — a comunidade já votou com código
- *Recomendação:* Desenvolvedores devem migrar contribuições para o fork ativo

**Maior Urgência de Bug Fix:** **ZeroClaw**
- 3 bugs S0 (críticos) simultaneamente, incluindo risco de perda de configuração (#10495)
- 50 PRs abertos sem nenhum merge hoje indica bottleneck de review
- Fase de maturização necessária antes de v0.8.6

### Diferenças Técnicas e Arquiteturais

| Dimensão | NullClaw | NanoBot | Hermes Agent | PicoClaw | ZeroClaw |
|----------|---------|---------|--------------|----------|----------|
| **Paradigma principal** | Agent loop modular | Multi-channel hub | Desktop + plugins | Multi-agent bus | Security-first |
| **Diferencial técnico** | local_loop configurável | DingTalk/Slack/Matrix | Gemini Live voice | Agent discovery | Sandbox isolation |
| **Público-alvo primário** | Desenvolvedores avançados | Teams diversificados | Usuários Desktop | Enterprise multi-agent | Security-conscious |
| **Stack dominante** | Python | Python | TypeScript | Go | Rust |
| **Dependência de API** | Alta (providers) | Alta (multi-provider) | Média | Baixa (local-first) | Baixa (local-first) |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança como Prioridade Transversal

Todos os projetos apresentam trabalho ativo em segurança, embora por ângulos distintos:

| Projeto | Foco de Segurança | Status |
|---------|------------------|--------|
| NullClaw | Concurrency gating, memory safety | ✅ Resolvido (#1044–#1046) |
| PicoClaw | Go stdlib vulnerabilities (GO-2026-5856) | ✅ Corrigido (#3248) |
| ZeroClaw | Sandbox detection (#11540), filesystem permissions (#11451) | 🔴 Aberto |
| Hermes Agent | Tirith scanner (over-blocking) | 🟡 Tuning necessário |
| NanoBot | Provider auth, webhook validation | 🟡 Em progresso |

**Implicação:** A segurança está evoluindo de feature para requisito de table stakes — projetos que não demonstrarem disciplina de security engineering enfrentarão perda de credibilidade.

### 4.2 Experiência de Usuário e Onboarding

Quatro de sete projetos apresentam PRs de documentação/UX simultâneos:

- **NullClaw:** 4 PRs de docs abertos (CLAUDE.md, Android cross-compile, scale figures, subsystem guides)
- **NanoBot:** Bug report com commit hash pré-preenchido (#6080), seleção de chat para tarefas agendadas (#6057)
- **Hermes Agent:** Chat de first-run setup (#134209), localização pt-BR (#40239)
- **PicoClaw:** Web UI rough edges (#3406) — indicador de processamento, separação de sessões

**Sinal de tendência:** Investimento em DX (developer experience) precede tipicamente estratégias de expansão de comunidade. Espera-se que NullClaw e Hermes Agent lancem campanhas de acquisition nos próximos meses.

### 4.3 Concurrency e Long-Running Stability

Três projetos enfrentam desafios similares com loops de agente:

| Projeto | Issue | Tipo |
|---------|-------|------|
| NullClaw | local_loop race conditions | ✅ Corrigido |
| PicoClaw | Iteration limits (#440) — 230 dias em aberto | 🔴 Pendente |
| ZeroClaw | CPU spinning após desconexão (#11481) | 🔴 Pendente |

**Padrão identificado:** Agentes que executam em background (idle sessions, cron jobs, daemon mode) apresentam edge cases de lifecycle que não aparecem em execuções curtas. Recomenda-se que projetos adotem test suites específicas para long-running scenarios.

### 4.4 Multi-Channel e Protocolos de Mensageria

| Projeto | Canais Ativos | Novidades |
|---------|--------------|-----------|
| NanoBot | Slack, Matrix, DingTalk | Identidade em DingTalk (#1420), reply no Matrix (#5274) |
| ZeroClaw | Signal (em desenvolvimento) | Suporte a media attachments (#11556, #7891) |
| IronClaw | iMessage/SMS via Sendblue | PR #8127 em review |
| Hermes Agent | Telegram groups | Full group chat copies (#104601) |

**Análise:** A guerra por channels está aquecida. NanoBot lidera em números, mas ZeroClaw e IronClaw investem em canais "tradicionais" (Signal, SMS) que atendem perfis não-técnicos. A diferenciação futura virá de channels emergentes (voice, video) mais do que text-based.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|-----------------|
| **Desenvolvedores avançados / Local-first** | NullClaw, PicoClaw, ZeroClaw | Configuração via CLI, suporte a modelos locais (Ollama, llama.cpp), baixa dependência de cloud |
| **Teams / Multi-canal** | NanoBot, Hermes Agent | Interface WebUI robusta, integração com Slack/Matrix, foco em colaboração |
| **Enterprise / Security-conscious** | ZeroClaw | Sandbox isolation (bubblewrap, firejail), filesystem hardening, multi-agent governance |
| **Produtividade pessoal** | IronClaw, CoPaw | Integrações com mensageria pessoal (iMessage, SMS), configuração simplificada |

### 5.2 Por Arquitetura

**Monolítico vs. Modular:**

- **NullClaw** e **CoPaw** adotam arquiteturas mais modulares, com providers plugáveis e separação clara de concerns
- **Hermes Agent** combina Desktop app + plugin catalog + composer — arquitetura mais opinionada
- **ZeroClaw** apresenta arquitetura orientada a segurança com sandbox layers e filesystem channels

**Dependência de Providers:**

- **NanoBot** e **CoPaw** dependem fortemente de providers externos (OpenAI, Deepseek, Opper) — vulneráveis a mudanças de API
- **PicoClaw** e **NullClaw** oferecem suporte a modelos locais, reduzindo lock-in
- **ZeroClaw** prioriza self-hosted, alinhado a requisitos de compliance

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Indicadores |
|---------|----------|-------------|
| **Expansão** | NullClaw, Hermes Agent, ZeroClaw | Alto volume de PRs, muitos PRs de features abertas, investimento em DX |
| **Estabilização** | NanoBot, CoPaw | Bugs críticos sendo corrigidos, PRs de UX em revisão, preparação para release |
| **Manutenção** | IronClaw | Baixa atividade, 1 PR em review há dias, sem issues |
| **Transição** | PicoClaw | Fork ativo substituindo upstream oficial, issues de custodianship |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

**Ranking por velocidade de merge (últimas 24h):**

1. **PicoClaw (fork)** — 69 PRs merged: comunidade fragmentada compensating com velocidade extrema
2. **NullClaw** — 4/16 PRs atualizados merged (25% ratio): desenvolvimento focado e disciplinado
3. **NanoBot** — 3 PRs merged: progresso consistente, bug fix prioritário
4. **Hermes Agent** — 2 PRs merged: alto volume, baixa conversão (review bottleneck)

**Análise:** PicoClaw demonstra que forks podem iterar mais rápido que projetos maintanidos, mas sacrifica coordenação. NullClaw apresenta melhor eficiência de review, possivelmente devido ao single-author model.

### 6.2 Backlog e Dívida Técnica

**Projetos com PRs aguardando review >30 dias:**

| Projeto | PRs | Idade Máxima | Bloqueio |
|---------|-----|-------------|----------|
| Hermes Agent | 3+ | ~90 dias (#61606) | Plugin lifecycle, local model management |
| CoPaw | 3 | ~59 dias (#6823) | Provider templates, OAuth2 fix |
| NullClaw | 1 | ~99 dias (#971) | Native tool calls durante SSE |
| ZeroClaw | 5+ stacked | Múltiplas dependências | Security filesystem PRs |

**Observação crítica:** PRs abertos por >60 dias sem merge tipicamente indicam:
- Conflitos arquiteturais não resolvidos
- Falta de reviewers com contexto
- Priorização insuficiente por mantenedores

### 6.3 Indicadores de Satisfação

Baseado em feedback implícito (bugs reportados vs. features solicitadas):

| Projeto | Sentimento | Evidência |
|---------|------------|-----------|
| **NullClaw** | Positivo | Correções rápidas demonstram responsividade; frustration com worktrees/Android docs |
| **NanoBot** | Positivo com fricção | Bug #6085 (Deepseek) é crítico, mas fix já disponível; spam de notificações irrita |
| **Hermes Agent** | Mixed | Desktop instability alta; Tirith scanner muito agressivo; i18n demanda forte |
| **PicoClaw** | Transicional | Comunidade migrando pro fork; ghost sessions (#3407) geram frustration |
| **IronClaw** | Neutro | Sem feedback visível |
| **CoPaw** | Positivo | First-time contributors ativos; OAuth2 fix esperado |
| **ZeroClaw** | Preocupado | Config loss (#10495) é crítico; sandbox quebrado impacta workflows |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**T1: Multi-Agent Systems como próxima fronteira**
- PicoClaw: Collaboration Bus (#2937) + Multi-agent discovery (#2158)
- Hermes Agent: Group chat full copies (#104601)
- NanoBot: Scheduled tasks com chat selection (#6057)
- **Implicação:** Mercados está evoluindo de agentes isolados para swarms orquestrados. Projetos sem estratégia multi-agent enfrentarão obsolescência.

**T2: Security-first como requisito de entrada**
- Sandbox isolation (ZeroClaw)
- OAuth2 com refresh token rotation (CoPaw #7066)
- CI/CD gates para Docker images (NullClaw #1036)
- **Implicação:** Enterprise adquire preferências por projetos com disciplina de security. Expectativa de audit trails e isolation.

**T3: Voice e Realtime como diferenciadores**
- Hermes Agent: Gemini Live full-duplex voice (#126525)
- Hermes Agent: First-run setup chat (#134209)
- **Implicação:** Interface de texto está perdendo competitividade. Voice-first interactions são o próximo battleground.

**T4: Forking como mecanismo de evolução**
- PicoClaw: fork `afjcjsbx` substituindo upstream
- Pattern observado em projetos open source maduros: forkslash-merge como alternativa a governance disputes
- **Implicação:** Mantenedores devem monitorar forks e considerar fast-forward merges ou fork promotion.

**T5: Local-first como counter-movement ao cloud**
- PicoClaw e ZeroClaw priorizam modelos locais (llama.cpp, Ollama)
- NullClaw: `local_loop` como feature central
- Hermes Agent: LMStudio integration (#61606)
- **Implicação:** Despite cloud dominance, demand para privacy-preserving e offline-capable agents está crescendo.

**T6: DX investment precedes community growth**
- NullClaw: 4 PRs de docs simultâneos
- Hermes Agent: Onboarding chat (#134209)
- CoPaw: Chain provider config (#7307)
- **Implicação:** Projetos em expansão estão investindo em onboarding antecipado — sinal de estratégia de developer acquisition.

### 7.2 Recomendações para Desenvolvedores

| Cenário | Recomendação | Projetos Alineados |
|---------|-------------|-------------------|
| **Contribuir código** | Priorizar NullClaw ou PicoClaw (fork) — alta receptividade | NullClaw, PicoClaw (afjcjsbx) |
| **Deploy em produção** | Evitar PicoClaw (upstream) e IronClaw (baixa atividade) | NanoBot, Hermes Agent, CoPaw |
| **Long-running agents** | NullClaw (estabilizado), ZeroClaw (requer atenção a S0 bugs

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-07

---

## 1. Panorama do Dia

O projeto NanoBot mantém alta atividade de desenvolvimento no dia de hoje, com **12 PRs atualizados** e **4 issues** em movimento nas últimas 24h. A atividade concentra-se na estabilização de bugs reportados recentemente — como a falha crítica com `web_search` do Deepseek (#6085), já com PR corretivo #6086 em curso — e em melhorias incrementais na interface web e na experiência do usuário em canais como Slack e Matrix. Três PRs foram merged/fechados, indicando progresso concreto em funcionalidades de usabilidade (seleção de chat para tarefas agendadas, diagnóstico de bugs no WebUI) e integração com DingTalk. O projeto não registrou novas releases, mantendo a versão estável atual.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24h.**

O projeto continua em ritmo de desenvolvimento ativo sem publicação de versão formal. Recomenda-se monitorar a branch principal para integração das correções pendentes, especialmente a do bug #6085 (web_search do Deepseek).

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged hoje, representando avanço significativo em UX e integração de canais:

| PR | Autor | Tema | Impacto |
|---|---|---|---|
| [#6057](https://github.com/HKUDS/nanobot/pull/6057) | Re-bin | Seleção de chat para tarefas agendadas no WebUI | Melhora significativa na usabilidade — usuários podem теперь escolher o chat de execução e resposta para tarefas cron/scheduled |
| [#6080](https://github.com/HKUDS/nanobot/pull/6080) | chengyongru | Commit hash e diagnóstico pré-preenchido no bug report | Reduz fricção no reporte de bugs, mostrando versão e link direto ao submeter |
| [#1420](https://github.com/HKUDS/nanobot/pull/1420) | RaoHai | Nome do remetente em mensagens DingTalk | Corrige identificação de display name vs staffId no canal DingTalk |

**Destaque:** O PR #6057 resolve uma lacuna importante no fluxo de tarefas agendadas, permitindo que usuários controlem o chat de execução e rota de resposta de forma unificada.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Autor | Tema | Comentários | Status |
|---|---|---|---|---|
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | npike | Compactação silenciosa de contexto / suppress broadcasts | 2 | 🟡 Aberta |
| [#5274](https://github.com/HKUDS/nanobot/issues/5274) | whisperity | Respostas via reply no Matrix | 1 | ✅ Fechada |

**Análise:** A issue #6029 destaca uma demanda recorrente: usuários desejam controlar notificações de sistema durante ciclos de manutenção em background (idle/dream). O problema afeta sessões que usam `idleCompactAfterMinutes`, gerando "spam" de mensagens de compressão de contexto. A discussão sugere necessidade de uma flag de configuração (`silentMode` ou `suppressCompactionNotifications`). A resolução pode impactar múltiplos canais.

A issue #5274 foi fechada — aparentemente integrada ao comportamento do bot ou recusada. O tema de replies no Matrix (#5274) permanece relevante para experiência de chat.

---

## 5. Bugs e Estabilidade

### Bugs críticos/alta prioridade reportados

| Issue | Severidade | Descrição | Status |
|---|---|---|---|
| [#6085](https://github.com/HKUDS/nanobot/issues/6085) | 🔴 Alta | Deepseek websearch quebra todas as chamadas LLM com erro de desserialização (`unknown variant web_search`) | 🟡 Aberta — PR #6086 já disponível |
| [#6084](https://github.com/HKUDS/nanobot/issues/6084) | 🟡 Média | Slack: compactação posta duas mensagens permanentes em vez de editar in-place | 🟡 Aberta |
| [#6082](https://github.com/HKUDS/nanobot/pull/6082) | 🟡 Média | Checkpoints de runtime perdem iterações completadas ao recuperar turns interrompidos | 🟡 Aberta |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | 🟡 Média | `WeakValueDictionary` causa instabilidade em locks de consolidação de memória | 🟡 Aberta |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | 🟡 Média | URLs não-string em web_fetch geram assinaturas inválidas no cache | 🟡 Aberta |

**Observação crítica:** O bug #6085 afeta **todos os canais** quando `deepseek websearch` está habilitado, tornando o bot completamente inutilizável. O PR #6086 (`fix(providers): drop hosted web_search tool from Chat Completions extra_body`) já está aberto e pode ser integrado rapidamente, pois aborda a causa raiz — `web_search` é tool de Responses API, incompatível com Chat Completions.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas

| PR/Issue | Autor | Feature | Relevância |
|---|---|---|---|
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | lsd-techno | Superfície configurável para extensões locais no WebUI | ⭐ Alta — adiciona ecossistema de plugins |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | Felixkw12 | Provider nativo para Opper (gateway openai_compat) | ⭐ Média — expansão de provedores |
| [#6083](https://github.com/HKUDS/nanobot/pull/6083) | dmerkert | Modelo configurável para avaliador de heartbeat | ⭐ Média — flexibilidade de IA |
| [#6087](https://github.com/HKUDS/nanobot/pull/6087) | chengyongru | Hierarquia visual mais clara substituindo separadores "·" | ⭐ Média — usabilidade UI/UX |

**Sinais de roadmap:**
- **Extensibilidade do WebUI** (#6032) é a feature mais ambiciosa em curso — indica direção de plataforma abierta para add-ons locais com manifesto `extension.json`.
- **Novo provider Opper** (#5845) confirma estratégia multi-gateway, seguindo padrão de Eden AI / OrcaRouter.
- **Configuração de heartbeat evaluator** (#6083) sugere maior flexibilidade em automação de tarefas recorrentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Spam de notificações em background** (Issue #6029): Usuários de sessões idle com `idleCompactAfterMinutes` recebem mensagens de compressão repetidamente, poluindo DMs e canais. Há pedido explícito por modo silencioso.

2. **Duplicação de mensagens no Slack** (Issue #6084): O fluxo de compactação envia duas mensagens permanentes ("Compressing context…" e "Context compacted"), sem opção de edição in-place. Usuários pedem parâmetro `showCompactionNotices` ou comportamento de edição.

3. **Incompatibilidade do Deepseek web_search** (Issue #6085): Bug bloqueante afeta qualquer usuário com websearch habilitado via `extra_body`. Feedback indica frustração — cada mensagem retorna erro de API.

4. **Identidade do remetente em DingTalk** (PR #1420 — resolvido): Agente via DingTalk não identificava display name, apenas staffId, prejudicando personalização de conversas.

### Cenários de uso emergentes

- **Manutenção automatizada em background**: Idle sessions, heartbeats e ciclos de sonho executam compaction automaticamente, mas a UX de notificações precisa ser refinada.
- **Multi-canal com hierarquia visual**: Usuários interagem via Slack, Matrix e DingTalk, cada um com peculiaridades de renderização e reply.
- **Extensibilidade local**: O ecossistema de extensões webui (#6032) sinaliza interesse em customização beyond configuração.

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem movimento ou aguardando resposta

| Item | Tipo | Autor | Criado | Estado | Observação |
|---|---|---|---|---|---|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | PR (bug fix) | axelray-dev | 2026-07-06 | 🟡 Aberta | Substituir `WeakValueDictionary` por `dict` — sem comentários recentes |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | PR (bug fix) | axelray-dev | 2026-07-06 | 🟡 Aberta | Rejeitar URLs não-string em web_fetch — mesmo cenário |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | PR (feature) | Felixkw12 | 2026-09-21 | 🟡 Aberta | Provider Opper — aguardando review |
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | Issue | npike | 2026-10-04 | 🟡 Aberta | Necessita triagem/escopo — feature request de silêncio em background |

**Recomendação de ação:**
- **PRs #4819 e #4820** estão abertos há ~3 meses sem merge ou feedback. Recomendamos review prioritário ou comunicação com o autor.
- **PR #5845** (Opper provider) aguarda há ~2 semanas — validação de conformidade com o registry de providers.
- **Issue #6029** é feature request bem definida que pode ser endereçada com configuração simples (`suppressNotificationsDuringIdle`).

---

## Métricas Resumidas (2026-10-07)

| Indicador | Valor |
|---|---|
| Issues abertas/ativas (24h) | 3 |
| Issues fechadas (24h) | 1 |
| PRs abertos (24h) | 9 |
| PRs merged/fechados (24h) | 3 |
| Novas releases | 0 |
| Bugs críticos abertos | 1 (#6085 — com fix #6086 pendente) |
| PRs aguardando review (>2 semanas) | 3 (#4819, #4820, #5845) |

**Veredicto de saúde:** 🟡 **Projeto saudável com demanda alta de review.** O bug #6085 requer atenção imediata para release de patch. O backlog de PRs pendentes indica necessidade de mais reviewers ou delegação de merge authority.

---

*Relatório gerado com base em dados GitHub públicos do repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-07

---

## 1. Panorama do dia

O Hermes Agent manteve um nível de atividade intenso nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, demonstrando uma comunidade ativa e engajada. Não houve lançamentos de novas versões neste período. A atividade está concentrada em correções de bugs (especialmente em componentes de desktop, Windows e macOS), melhorias de estabilidade e novas features para onboarding e plugins. A proporção de 38 issues abertas versus 12 fechadas sugere um volume significativo de trabalho acumulado sendo processado. Dois PRs de catálogo de plugins foram merged (#126525 - gemini-live, #104601 - group chat), indicando progresso em extensibilidade.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto não publicou novas releases neste período. O último ciclo de releases permanece como a versão mais recente disponível.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| PR | Título | Tipo | Status |
|----|--------|------|--------|
| [#126525](https://github.com/NousResearch/hermes-agent/pull/126525) | feat(catalog): add hermes-gemini-live | Feature | **MERGED** |
| [#104601](https://github.com/NousResearch/hermes-agent/pull/104601) | feat(groups): keep full Group Chat copies | Feature | **MERGED** |

**Destaques:**
- **#126525** — Adiciona o plugin `hermes-gemini-live` ao catálogo, permitindo voz full-duplex Gemini Live no composer do Desktop, enquanto mantém a conversa via run API. Este é um marco para interações de voz em tempo real.
- **#104601** — Implementa cópias completas do log de Group Chat em todos os participantes, garantindo resiliência mesmo se o host sair.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|----|--------|
| [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | Add Portuguese (pt-BR) language support | 16 | 4 | CLOSED |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | Tirith shell scanner blocks pipe-to-interpreter | 6 | 0 | CLOSED |
| [#133554](https://github.com/NousResearch/hermes-agent/issues/133554) | Cannot select OpenAI model after Copilot fallback | 5 | 0 | CLOSED |
| [#117818](https://github.com/NousResearch/hermes-agent/issues/117818) | Hardening: write approval coverage gap | 4 | 0 | OPEN |
| [#134008](https://github.com/NousResearch/hermes-agent/issues/134008) | Critical: repo bot processing stuck in review loop | 4 | 1 | OPEN |

**Análise:**
- **i18n em destaque:** A issue #40239 sobre suporte a português brasileiro (#40239) foi a mais comentada (16 comentários), indicando demanda significativa por localização. O Hermes já possui `locales/pt.yaml` com 357+ linhas de traduções, demonstrando que a infraestrutura existe.
- **Segurança (Tirith):** Múltiplas issues sobre o scanner de segurança Tirith (#32737, #117818) revelam tensões entre segurança rigorosa e usabilidade prática — o scanner bloqueia padrões legítimos como `executable | python3`.
- **Fluxo de revisão:** A issue #134008 denuncia um problema sistêmico onde PRs ficam presos em loops de revisão, tornando impossível o merge. Com 1 upvote e 4 comentários, é um sinal de alerta sobre a saúde do processo de contributions.

---

## 5. Bugs e Estabilidade

### Issues Abertas por Severidade

#### P0 — Críticos (2 PRs abertos)
| Issue | Título | Componente | Detalhe |
|-------|--------|------------|---------|
| [#134173](https://github.com/NousResearch/hermes-agent/pull/134173) | prune(scratch): rescue entries touched mid-prune | agent | Arquivos sendo deletados durante escrita simultânea |
| [#128305](https://github.com/NousResearch/hermes-agent/pull/128305) | fix(release): identify channel archive requests to WAFs | cli | Falha de identidade em requests de atualização |

#### P1 — Altos
| Issue | Título | Componente |
|-------|--------|------------|
| [#134175](https://github.com/NousResearch/hermes-agent/issues/134175) | Web dashboard typecheck fails on ChatSessionList.test.tsx | dashboard |

#### P2 — Médios (principais)
| Issue | Título | Área |
|-------|--------|------|
| [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) | macOS Desktop update refuses its own hermes update | desktop, install |
| [#129097](https://github.com/NousResearch/hermes-agent/issues/129097) | Terminal `python`/`pip` resolve to Hermes store Python | terminal, install |
| [#133659](https://github.com/NousResearch/hermes-agent/issues/133659) | Windows/Edge real-profile snapshot signs out | browser, Windows |
| [#66452](https://github.com/NousResearch/hermes-agent/issues/66452) | qwen3.5 (Ollama) tool calls dropped | agent, Ollama |
| [#130696](https://github.com/NousResearch/hermes-agent/issues/130696) | GET /api/sessions/{id}/messages omits 'messages' key | gateway, sessions |

**Padrões identificados:**
- **Desktop app instável:** 3+ issues específicas de macOS/Windows Desktop (updates, sessões, browser profiles).
- **Windows compatibility:** Problemas recorrentes com MSYS/git-bash, Edge, e MS Platform.
- **API inconsistencies:** Endpoints REST retornando formato inesperado (`messages` key omitida).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| PR/Issue | Título | Área | Tipo |
|----------|--------|------|------|
| [#134209](https://github.com/NousResearch/hermes-agent/pull/134209) | feat(onboarding): first-run setup chat | desktop, i18n | Feature |
| [#133625](https://github.com/NousResearch/hermes-agent/pull/133625) | feat(compression): warm handoff | compression, caching | Feature |
| [#107960](https://github.com/NousResearch/hermes-agent/issues/107960) | local_runtime should probe all GPUs | local-models | Feature |
| [#123388](https://github.com/NousResearch/hermes-agent/issues/123388) | Pluggable per-turn model router | agent, config | Feature |
| [#61606](https://github.com/NousResearch/hermes-agent/pull/61606) | feat(lmstudio): add local model management | agent, desktop | Feature |
| [#85648](https://github.com/NousResearch/hermes-agent/issues/85648) | Delegation timing: ready dependency affecting parent | agent, delegate | Feature |
| [#133758](https://github.com/NousResearch/hermes-agent/issues/133758) | llamacpp provider lifecycle management | cli, local-models | Feature |

**Sinais de Roadmap:**
1. **Onboarding smarter:** O PR #134209 implementa um chat de primeira execução que configura apps, plugins e layout — indica foco em experiência de novos usuários.
2. **Multi-GPU para modelos locais:** A feature request #107960 mostra demanda por suporte a máquinas com múltiplas GPUs NVIDIA para llama.cpp.
3. **Smart routing:** A issue #123388 sugere interesse em roteamento dinâmico de modelos por turno, baseado em classificação de tarefa.
4. **Plugin Catalog em expansão:** Inclusão de `cognition` (#133775) e `gbrain-pointer` (#134204) demonstra maturidade do ecossistema de plugins.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Descrição | Frequência |
|-----|-----------|------------|
| **Instabilidade em Desktop** | macOS e Windows Desktop com falhas de update, sessões sem group, browser profile quebrado | Alta |
| **Usabilidade do Tirith** | Scanner de segurança muito agressivo, bloqueia padrões legítimos | Alta |
| **Experiência Windows** | Incompatibilidades com MSYS, Edge, llama-server | Alta |
| **Modelos locais** | Problemas com Ollama tool-calling, falta de multi-GPU | Média |
| **Plugin loading** | `httpx` missing em plugins bundlados, TUI corrompida | Média |

### Cenários de Uso Identificados
- **Desenvolvedores Windows** usando Hermes via Termux/Android (#26275) ou MSYS/git-bash.
- **Usuários de Desktop** em macOS com fluxo de update problemático.
- **Grupos Telegram** com múltiplos bots Hermes (#105624 merged resolve isso).
- **Usuários não-técnicos** executando modelos GGUF locais com dificuldade de setup (#133758).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Título | Criado | Atualizado | Dias Inativo |
|-------|--------|--------|------------|--------------|
| [#66452](https://github.com/NousResearch/hermes-agent/issues/66452) | qwen3.5 (Ollama) tool calls dropped | 2026-07-17 | 2026-10-06 | ~81 dias |
| [#85648](https://github.com/NousResearch/hermes-agent/issues/85648) | Delegation timing issue | 2026-08-13 | 2026-10-06 | ~54 dias |
| [#107960](https://github.com/NousResearch/hermes-agent/issues/107960) | Multi-GPU probe for llama.cpp | 2026-09-11 | 2026-10-06 | ~26 dias |
| [#119529](https://github.com/NousResearch/hermes-agent/issues/119529) | web_extract fails on fresh installs | 2026-09-22 | 2026-10-06 | ~15 dias |

### PRs Abertos há Muito Tempo

| PR | Título | Criado | Age |
|----|--------|--------|-----|
| [#61606](https://github.com/NousResearch/hermes-agent/pull/61606) | feat(lmstudio): local model management | 2026-07-09 | ~89 dias |
| [#61127](https://github.com/NousResearch/hermes-agent/pull/61127) | feat(tools): plugin tools opt into core messaging | 2026-07-08 | ~90 dias |
| [#61741](https://github.com/NousResearch/hermes-agent/pull/61741) | fix(cli): route dashboard re-exec | 2026-07-10 | ~89 dias |

---

## Conclusão Geral

O Hermes Agent demonstra **alta atividade com desafios de estabilidade** no período analisado. A comunidade está ativamente reportando bugs, especialmente nas plataformas Desktop (macOS/Windows) e em integrações locais (Ollama, llama.cpp). O ecossistema de plugins está em expansão com novas adições ao catálogo. Os principais pontos de atenção são:

1. **Prioridade Crítica:** Corrigir instabilidade do Desktop app em macOS/Windows.
2. **Revisar fluxo de PR:** A issue #134008 indica problemas no processo de review que impedem progresso.
3. **Segurança vs. Usabilidade:** O Tirith scanner precisa de ajustes para não bloquear padrões legítimos.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-07.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-07

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta um cenário de **manutenção fragmentada**: o repositório oficial (`sipeed/picoclaw`) demonstra sinais claros de **estagnação**, enquanto a comunidade respondeu com forks ativos liderados por `afjcjsbx`. Nas últimas 24 horas, houve **69 PRs fechados/merged** e **5 issues atualizadas** — indicando que o trabalho está sendo direcionado ao fork alternativo. A atividade recente foca em **correções de segurança (Go 1.25.12)**, **melhorias na experiência do agente** e **refinamentos na interface web**, evidenciando um pipeline de desenvolvimento maduro, porém deslocado do repositório original.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O fork ativo (`afjcjsbx/picoclaw`) nãoemitiu tags formais no período analisado. O último ciclo de releases visibles está relacionado a atualizações de dependência do Go toolchain (1.25.10 → 1.25.12), implementadas via PR e não como release standalone.

---

## 3. Progresso do Projeto

### PRs de maior impacto merged/fechados nas últimas 24h:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | **Segurança**: Go 1.25.12 | Corrige vulnerabilidades stdlib (GO-2026-5856, GO-2026-4970) |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | **Agente**: turn.done lifecycle | Completa sinalização de ciclo de vida do turno |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | **Agente**: Colaboração multi-agente | Introduce Agent Collaboration Bus com mailboxes e threads isoladas |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | **Visão**: Compressão de imagens | Adiciona política configurável de compressão para inbound images |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | **MCP/Testing**: Streamable HTTP | Suporte a alias, request-response mode + framework de testes Docker |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) | **Agente**: Multi-agent discovery | Injeta registry leve no system prompt para descoberta inter-agente |
| [#2762](https://github.com/sipeed/picoclaw/pull/2762) | **UX**: Stop command | Implementa `/stop` builtin para abortar tarefas ativas |

**Observação**: Todos os PRs de destaque são de autoria de `afjcjsbx`, confirmando a migração do desenvolvimento ativo para o fork.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações):

1. **[#440](https://github.com/sipeed/picoclaw/issues/440)** — *Replace hard iteration limit with context-window bounding* (8 comentários)
   - **Demanda central**: O limite fixo `max_tool_iterations: 20` é demasiado restritivo para workflows complexos, causando falhas prematuras.
   - **Proposta**: Substituir por bounding dinâmico baseado na context window + loop detection.
   - **Status**: Aberta desde 2026-02-18, marcada como stale — necessidade de reavaliação.

2. **[#3398](https://github.com/sipeed/picoclaw/issues/3398)** — *Notice: Active Fork & Continued Maintenance* (1 comentário)
   - Comunidade reconhece que o repositório original está **unmaintained** e valida o fork de `afjcjsbx`.

3. **[#3406](https://github.com/sipeed/picoclaw/issues/3406)** — *Feature: Web UI improvements* (1 comentário)
   - Relata três "rough edges" na interface web: indicador de processamento, separação de sessões manual/channel, e lista de sessões com archiving.

**Sinal de comunidade**: A bifurcação do projeto gerou dois novos issues idênticos ([#3398](https://github.com/sipeed/picoclaw/issues/3398) e [#3417](https://github.com/sipeed/picoclaw/issues/3417)), demonstrando que a transição para o fork ainda não está consolidada na percepção da base de usuários.

---

## 5. Bugs e Estabilidade

### Issues abertas — potenciais bugs:

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| **[#3407](https://github.com/sipeed/picoclaw/issues/3407)** | **Média** | **Ghost session bug**: sessão desaparece da lista no Web UI enquanto o modelo ainda processa, sem como recuperá-la. |
| **[#440](https://github.com/sipeed/picoclaw/issues/440)** | **Média** | Workflows legítimos falham por hitting hard limit — classificado como enhancement, mas funcionalmente um bug de design. |

### Correções de estabilidade incluídas nos PRs:

- **#2681**: Sanitização de schemas MCP para Gemini (HTTP 400 crash)
- **#2689**: Propagação de sessionKey em cron jobs (duplicação de mensagens)
- **#2983**: Retry para respostas LLM vazias (content null)
- **#2768**: Retry para erros HTTP transitários de providers
- **#2666**: Fix para envio de `{}` vs `null` em tool calls MCP

**Veredicto**: O projeto demonstra disciplina de regression fixing, mas a issue #3407 (ghost session) representa um **UX bug crítico** que pode causar perda de dados de conversação.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda:

1. **[#440](https://github.com/sipeed/picoclaw/issues/440)** — **Dynamic iteration bounds** (8 👍 implícitos pelo debate)
   - Requer rethinking da arquitetura de loop do agente.
   - Potencial impacto: breaking change em configurações existentes.

2. **[#3406](https://github.com/sipeed/picoclaw/issues/3406)** — **Web UI UX overhaul**
   - Indicador de processamento granular
   - Separação de sessões por tipo (manual/channel)
   - Arquivamento de sessões
   - **Esforço estimado**: médio-alto (envolve frontend e backend)

3. **[#3417](https://github.com/sipeed/picoclaw/issues/3417)** — **Documentação de Fork**
   - Sinal de que a comunidade precisa de clareza sobre qual repositório é "oficial".

### Sinais de roadmap implícitos pelos PRs merged:

- **Multi-agent systems**: Collaboration Bus (#2937) + Multi-agent discovery (#2158) indicam direção clara para agentes cooperativos.
- **Image/vision pipeline**: Compressão configurável (#2964) prepara terreno para multimodalidade mais robusta.
- **MCP maturity**: Suporte a streamable HTTP + integração Docker testing (#2811) sugere consolidação do protocolo.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas:

1. **Limitações de iteração** (Issue #440)
   > *"legitimate workflows to fail with 'I've completed processing but have no response to give' before reaching their deliverable"*
   - **Cenário**: Usuários com tarefas complexas multi-ferramenta são bloqueados artificialmente.
   - **Impacto**: Produtividade em cenários enterprise/agentic.

2. **Ghost sessions na Web UI** (Issue #3407)
   > *"session can silently disappear from the session list while the model is still thinking"*
   - **Cenário**: Usuário inicia conversa → perde visibilidade → não consegue recuperar contexto.
   - **Impacto**: Experiência frustrante e potencial perda de informação.

3. **UX Web UI opaco** (Issue #3406)
   - *"Is it still thinking?" unclear* → ansiedade do usuário
   - *Session list mixing types* → confusão organizacional

### Feedback positivo implícito:

- A existência de forks ativos e manutenção comunitária (#3398, #3417) demonstra **demanda real e'engagement**.
- A quantidade de PRs merged no período (69) indica **velocidade de desenvolvimento satisfatória** para a base ativa.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há longo prazo:

| Issue | Criação | Days Idle | Prioridade | Ação Recomendada |
|-------|---------|-----------|------------|------------------|
| **[#440](https://github.com/sipeed/picoclaw/issues/440)** | 2026-02-18 | ~230 dias | **Alta** | Arquitetar solução de iteration bounds dinâmica |
| **[#3406](https://github.com/sipeed/picoclaw/issues/3406)** | 2026-09-29 | ~8 dias | **Média** | Priorizar refinamento Web UI como feature diferenciadora |
| **[#3407](https://github.com/sipeed/picoclaw/issues/3407)** | 2026-09-29 | ~8 dias | **Alta** | Bug fix urgente — UX blocker |
| **[#3398](https://github.com/sipeed/picoclaw/issues/3398)** | 2026-09-28 | ~9 dias | **Alta** | Oficializarfork como novo "upstream" |
| **[#3417](https://github.com/sipeed/picoclaw/issues/3417)** | 2026-10-06 | ~1 dia | **Média** | Atualizar documentação do repo principal |

### Issues stale com valor potencial:

- **[#2158](https://github.com/sipeed/picoclaw/issues/2158)** — Multi-agent discovery (já merged como PR, mas issue relacionada pode precisar de closure formal).
- **[#2983](https://github.com/sipeed/picoclaw/issues/2983)** — Retry empty response (já merged como PR).

---

## Conclusão

| Dimensão | Saúde (1-5) | Observação |
|----------|-------------|------------|
| Atividade de código | 🟢 4/5 | 69 PRs fechados em 24h |
| Manutenção oficial | 🔴 1/5 | Repositório principal unmaintained |
| Backlog de bugs | 🟡 3/5 | 1 bug UX crítico + 1 design issue |
| Engajamento | 🟢 4/5 | Fork ativo + demanda comunitária |
| Estabilidade técnica | 🟢 4/5 | Correções de segurança aplicadas |

**Recomendação executiva**: O projeto PicoClaw enfrenta uma **transição de custodianship**. A comunidade já votou com código — o fork de `afjcjsbx` é o novo centro de gravidade. Para usuários e contribuidores, recomenda-se **migrar contribuições para o fork ativo** e priorizando a resolução da issue #440 (iteration limits) e #3407 (ghost sessions) para preservar credibilidade técnica.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-10-07. Última atualização: 2026-10-07.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
## nearai/ironclaw | Data: 2026-10-07

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade mínima nas últimas 24 horas**, com zero issues registradas e apenas 1 pull request aberta. A proposta em análise (#8127) adiciona suporte para integração com iMessage/SMS via Sendblue, indicando expansão de canais de comunicação do assistente. Sem novos lançamentos ou issues de bugs reportadas, o projeto mantém um estado estável mas com baixa movimentação de comunidade neste período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões, estável na última release disponível. Usuários em produção devem consultar o histórico de releases anterior para verificar a versão mais recente.

---

## 3. Progresso do Projeto

| PR | Status | Impacto |
|----|--------|---------|
| [#8127](https://github.com/nearai/ironclaw/pull/8127) | ABERTA | Adição de extensão Sendblue para iMessage/SMS |

**Análise do PR #8127:**
- **Título:** feat: add Sendblue iMessage and SMS extension
- **Autor:** lookevink
- **Escopo:** Integração direta com Sendblue API para:
  - Pareamento de telefone
  - Webhooks autenticados de recebimento
  - Respostas via terminal
  - Alvos de DM armazenados
- **Arquitetura:** Credenciais mantidas sob custódia do host; declaração declarativa e limitada

**Observação:** PR aguardando revisão. Nenhum merge ou fechamento realizado hoje.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada nas últimas 24h.**

Sem dados de engajamento (comentários ou reações) no período analisado. A proposta Sendblue (#8127) demonstra interesse em expandir canais de comunicação, mas ainda não gerou discussão visível.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

Zero issues abertas ou fechadas relacionadas a problemas. O projeto aparenta estabilidade operacional no momento, sem regressões ou crashes documentados.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Item | Tipo | Descrição |
|------|------|-----------|
| [#8127](https://github.com/nearai/ironclaw/pull/8127) | Feature | Integração iMessage/SMS via Sendblue |

**Análise de sinal de roadmap:**
A proposta Sendblue indica direção estratégica de **multicanalidade**, permitindo que agentes IronClaw interajam via mensageria tradicional (SMS) e plataformas proprietárias (iMessage). Isso sugere foco em:
- Expansão de pontos de contato do usuário
- Suporte a cenários onde aplicativos de chat convencionais não estão disponíveis

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback direto coletados nas últimas 24h.**

Ausência de issues de suporte ou sugestões indica:
- Estabilidade da versão atual em uso
- Possível baixo volume de usuários ativos reportando feedback
- Necessidade de monitorar canais alternativos (discussões, issues anteriores)

---

## 8. Backlog que Merece Atenção

**Sem items classificados como "abandonados" no período atual.**

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 0 | 🟢 Estável |
| PRs abertas (24h) | 1 | 🟡 Em progresso |
| Releases (24h) | 0 | 🟡 Sem mudanças |
| Bugs críticos | 0 | 🟢 Saudável |

**Veredicto:** Projeto em estado de **low-activity**. A ausência de issues e releases indica período de manutenção ou transição. Atenção necessária à revisão do PR #8127 para avaliar entrada da feature Sendblue.

---

*Gerado em: 2026-10-07 | Fonte: nearai/ironclaw GitHub*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data de referência:** 2026-10-07  
**Repositório:** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
**Branch base:** agentscope-ai/QwenPaw

---

## 1. Panorama do Dia

O projeto CoPaw manteve atividade moderada em 07/10/2026, com **2 issues e 4 PRs atualizados** nas últimas 24 horas. Não houve novos lançamentos ou PRs mergeados, sugerindo que a equipe está em fase de revisão e preparação de código. O estado atual reflete um repositório em desenvolvimento ativo, com contribuições recentes focadas em estabilidade do console e melhorias na experiência de configuração de provedores/models. A ausência de releases recentes indica que a última versão estável continua sendo a referência atual.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

| Indicador | Valor |
|-----------|-------|
| Releases (7d) | 0 |
| Última release | A verificar no repositório |

**Nota:** O projeto não registrou novos lançamentos. Recomenda-se monitorar a aba [Releases](https://github.com/agentscope-ai/CoPaw/releases) para announcements futuros.

---

## 3. Progresso do Projeto

### PRs em revisão/atualizados

| # | Título | Autor | Tamanho | Tags | Status |
|---|--------|-------|---------|------|--------|
| [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | fix(console): recover boot from failed entry loads with watchdog error surface | wxhking | M | - | OPEN |
| [#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823) | feat(providers): apply documented capability templates to custom providers | LUOSENGWA | M | first-time-contributor | OPEN |
| [#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307) | feat(console): chain provider config straight into model management | suantea | - | - | OPEN |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers | suantea | - | first-time-contributor, Under Review | OPEN |

### Análise dos PRs em destaque

**[#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102)** — **Melhoria de resiliência do console**  
- **Impacto:** Resolve problema de "boot hang" quando assets cacheados falham após upgrades (404s em arquivos com hash antigo, stalls de rede, hiccups de CDN)
- **Mudança:** Exibe estado de erro com botão "Reload" ao invés de travar infinitamente, com uma tentativa automática de reload
- **Relevância:** Estabilidade UX, especialmente em ambientes de produção com atualizações frequentes

**[#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)** — **Template de capacidades para provedores customizados**  
- **Impacto:** Modelos adicionados a provedores OpenAI-compatíveis customizados agora herdam automaticamente templates de capacidade (ex: `qwen3.6-plus` → `supports_image=True`)
- **Relevância:** Reduz trabalho manual de configuração e melhora suporte multimodal out-of-the-box

**[#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307)** — **Redução de atritos no fluxo de configuração**  
- **Impacto:** Reduz de 5 para ~2 o número de passos para adicionar um modelo no console (antes: Settings → Models → Settings do provider → Fill API key → Save → Models → Add Model; depois: configuração encadeada)
- **Relevância:** Melhora significativa de UX para novos usuários

**[#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)** — **Fix OAuth2 com refresh tokens rotativos**  
- **Impacto:** Resolve #7053 — servidores MCP remotos com OAuth2 Authorization Code e refresh tokens rotativos (ex: XMind) agora persistem corretamente o `refresh_token` rotacionado
- **Relevância:** Bug fix crítico para integrações que dependem de autenticação OAuth2 com refresh automático

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento recente

| # | Título | Tipo | Comentários | 👍 | Atualização |
|---|--------|------|-------------|-----|-------------|
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | [Bug]: MissingSessionID com opencode go | bug | 4 | 0 | 2026-10-06 |
| [#8114](https://github.com/agentscope-ai/QwenPaw/issues/8114) | [Feature]: Controle de "推理强度" (intensidade de raciocínio) | enhancement | 1 | 0 | 2026-10-06 |

### Análise de tendências

**Issue #7599 — Bug de conexão com opencode go**  
- **Contexto:** Usuários do plano "opencode go" enfrentam falha constante na conexão com modelos (`omen-alpha`), retornando erro `MissingSessionID`
- ** severidade aparente:** Média-alta (afeta funcionalidade core de conexão)
- **Demanda subjacente:** Necessidade de estabilidade em provedores terceiros e mensagens de erro mais descritivas
- **Estado:** Em análise (4 comentários)

**Issue #8114 — Controle de intensidade de raciocínio**  
- **Contexto:** Modelos como Qwen3.8 estão "pensando demais" em algumas situações, e usuários querem limitar essa característica
- **Demanda subjacente:** Desejo de tuning de comportamento por parte dos usuários, possivelmente para casos de uso específicos (respostas mais diretas, latência menor)
- **Potencial roadmap:** Configuração de parâmetros de inferência como `thinking_budget` ou `max_depth`

---

## 5. Bugs e Estabilidade

### Bugs reportados (últimas 24h)

| # | Título | Severidade | Estado | Impacto |
|---|--------|------------|--------|---------|
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | MissingSessionID com opencode go | Média-Alta | OPEN | Bloqueia uso de modelo específico |

### Análise

**Bug ativo principal — #7599:**  
- **Descrição:** Erro 400 `MissingSessionID` ao conectar com modelo `omen-alpha` via provedor "opencode go"
- **Sintoma:** `API error when connecting to model 'omen-alpha' (status=400)` com header `x-ope...` (provavelmente `x-opencode-session-id`) faltando
- **Ambiente:** QwenPaw v2.2.0, provedor opencode go
- **Ação recomendada:** Verificar se o SDK/client está enviando o header correto ou se há mudança na API do provedor

**Nota:** Não há bugs críticos (crash total) reportados nas últimas 24h. A saúde geral de estabilidade permanece estável.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Título | Tipo | Prioridade implícita | Componentes afetados |
|---|--------|------|---------------------|----------------------|
| [#8114](https://github.com/agentscope-ai/QwenPaw/issues/8114) | Controle de "推理强度" (intensidade de raciocínio) | enhancement | Média | Core/Backend, Providers |

### Análise de sinais de roadmap

**Feature #8114 — Intuição de raciocínio dos modelos**  
- **O que é:** Capacidade de ajustar o "esforço de pensamento" de modelos como Qwen3.8
- **Por que importa:** Modelos de nova geração (especialmente com chain-of-thought nativo) podem ser excessivamente verbosos ou慢 em cenários que exigem respostas diretas
- **Sinais de priorização:** Issue criada em 2026-10-06 (recente), indicando demanda ativa
- **Possíveis abordagens técnicas:**
  - Parâmetro de sistema: `max_thinking_steps` ou `thinking_budget`
  - Configuração por provedor/modelo
  - Toggle de "modo rápido" vs "modo detalhado"

**Outros sinais observados:**
- PRs recentes (#7307, #6823) indicam foco em **redução de fricção** e **automação de configuração**
- Fix #7066 indica atenção à **autenticação robusta** com OAuth2

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Issue Relacionada | Severidade |
|-----|-------------------|------------|
| Falhas de conexão com provedores terceiros | #7599 | Alta |
| Modelos "pensando demais" | #8114 | Média |
| Fluxo de configuração de modelos muito longo | PR #7307 (resolvido em revisão) | Média |
| Refresh tokens OAuth2 não persistem corretamente | PR #7066 | Alta |

### Cenários de uso observados

1. **Uso com provedores externos:** Usuários dependem de integrações com terceiros (opencode go) para acesso a modelos, sensibilidade a mudanças de API.
2. **Casos de uso diversificados:** Há demanda por respostas tanto "profundas" (análise complexa) quanto "diretas" (respostas rápidas), sugerindo uso em ambientes corporativos e pessoais.
3. **Integração MCP:** Crescente adoção de MCP servers com autenticação OAuth2 (indício de ecossistema de plugins em expansão).

### Satisfação geral

Baseado na atividade recente, o projeto demonstra:
- **Pontos fortes:** Comunidade ativa em contribuições (2 first-time-contributors), foco em UX, respostas rápidas a bugs
- **Pontos de atenção:** Estabilidade em integrações com provedores terceiros, documentação de novos recursos

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta há tempo considerável

| # | Título | Tipo | Criado | Última atualização | Dias inativo |
|---|--------|------|--------|-------------------|--------------|
| [#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823) | feat(providers): apply documented capability templates | PR | 2026-08-08 | 2026-10-06 | ~59d total |
| [#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307) | feat(console): chain provider config into model management | PR | 2026-08-26 | 2026-10-06 | ~41d total |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | fix(drivers): persist rotated refresh_token | PR | 2026-08-16 | 2026-10-06 | ~52d total |

### Análise

**PRs em aberto de longa duração:**  
Três PRs significativos (#6823, #7307, #7066) estão abertos desde agosto/2026 e receberam atualizações em 2026-10-06, indicando que **estão em revisão ativa** mas ainda não foram mergeados. O tempo de revisão pode indicar:
- Necessidade de reviews mais profundos (especialmente #6823 e #7066)
- Possíveis conflitos de merge a serem resolvidos
- Processo de QA antes de merge

**Recomendação:** Priorizar review e merge dos PRs #6823 e #7066, que abordam bugs/features reportados por usuários (templates de capacidade e OAuth2).

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 2 | 🟢 Normal |
| PRs atualizados (24h) | 4 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Sem atividade |
| Bugs críticos novos | 0 | 🟢 Bom |
| PRs aguardando merge >30d | 3 | 🟡 Atenção |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/CoPaw). Próxima atualização recomendada: 2026-10-08.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-07

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade de desenvolvimento** nas últimas 24 horas, com 33 issues e 50 PRs atualizados, embora **nenhum merge ou release tenha sido registrado**. A comunidade está focada em correções de segurança críticas (especialmente no subsystem de sandbox e filesystem channel), melhorias em canais (Signal media, Matrix fixes) e a adição de novos provedores (Opper). O estado geral indica uma fase de maturização do codebase com emphasis em robustez e segurança, mas com volume significativo de PRs pendentes que precisam de atenção dos mantenedores.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto está em período de preparação para próximas versões (v0.8.6 mencionadas em issue #10996 como target), com múltiplos PRs de segurança e features acumulando para merge.

---

## 3. Progresso do Projeto

### PRs em Destaque (Não Merged — Aguardando Review)

| PR | Título | Tamanho | Área | Status |
|----|--------|---------|------|--------|
| [#11584](https://github.com/zeroclaw-labs/zeroclaw/pull/11584) | Adicionar provider Opper | S | Provider | Aberto |
| [#11582](https://github.com/zeroclaw-labs/zeroclaw/pull/11582) | Evict images in batches (performance) | M | Multimodal | Aberto |
| [#11581](https://github.com/zeroclaw-labs/zeroclaw/pull/11581) | Bound registry requests | Docs | Plugins | Aberto |
| [#11556](https://github.com/zeroclaw-labs/zeroclaw/pull/11556) | Signal media attachment support | XL | Channels | Aberto |
| [#11451](https://github.com/zeroclaw-labs/zeroclaw/pull/11451) | Protect Windows key files at creation | XL | Security | Aguarda review |
| [#11268](https://github.com/zeroclaw-labs/zeroclaw/pull/11268) | Align gateway policy publication | XS | Docs | Aberto |

**Observação:** 50 PRs abertos sem nenhum merge hoje indica bottleneck na review ou política deliberada de acumulação antes de freeze.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Título | Comentários | 👍 | Prioridade | Link |
|-------|--------|-------------|----|------------|------|
| #8132 | Evaluate Rust/WASM web UI prototype | 11 | 1 | P3 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| #10495 | Config::save() data loss bug | 6 | 0 | P0 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| #11055 | Daemon never registers channel-map factory | 5 | 0 | P1 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) |
| #10926 | Matrix send_via peer identity bug | 4 | 0 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) |
| #9887 | Downscale oversized images | 4 | 0 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) |
| #7891 | Signal media attachment support | 4 | 1 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) |

### Análise de Demandas

1. **Web UI Modernization (#8132):** Discussão técnica ativa sobre migrar de React/Vite para Rust/WASM (Dioxus, Leptos, Yew). Alto risco (high) e múltiplas tags de domínio (security, architecture). Sinal de roadmap de longo prazo.

2. **Segurança de Configuração (#10495):** Bug crítico de P0 onde `Config::save()` pode substituir arquivo config.toml de 109KB por 702 bytes — perda de dados/seginrança. Urgência alta.

3. **Channel Factory Registration (#11055):** Bug P1 bloqueante que impede webhooks, cron e SOP de funcionarem em deploys daemon. Impacto limitado a cenários específicos.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S0 - Data Loss / Security Risk (Crítico)

| Issue | Título | Criado | Link |
|-------|--------|--------|------|
| #10495 | Config::save() replaces populated config.toml | 2026-08-31 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| #11540 | bubblewrap sandbox not detected, falls back to application-layer | 2026-10-05 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) |
| #11579 | save_dirty stamps schema_version = 3 on unmigrated config | 2026-10-06 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) |

#### S1 - Workflow Blocked

| Issue | Título | Criado | Link |
|-------|--------|--------|------|
| #11539 | Firejail sandbox fails with --nowheel option | 2026-10-05 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) |
| #11538 | Firejail sandbox fails with invalid private directory | 2026-10-05 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) |

#### S2 - Degraded Behavior

| Issue | Título | Criado | Link |
|-------|--------|--------|------|
| #11554 | Earlier path-marker images re-sent on every turn | 2026-10-06 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) |
| #11481 | ZeroCode spins at 100% CPU after terminal disconnection | 2026-10-03 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) |
| #11515 | Cost ledger drops torn-write records | 2026-10-03 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) |

### Bugs Recentes (Criados em 2026-10-06)

| Issue | Título | Severidade | Link |
|-------|--------|------------|------|
| #11579 | save_dirty schema_version bug | S0 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) |
| #11553 | Merge split inbound messages | Feature | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11553) |
| #11552 | Tool egress ignores websocket_client declarations | Bug | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) |
| #11570 | Translate authorization validators refusals | Enhancement | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11570) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Criadas em 2026-10-06)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #11583 | Add Opper as typed OpenAI-compatible provider | Provider | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) |
| #11580 | x86_64 Linux release binary ~0.7MB under 64MiB cap | Build | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) |
| #11569 | Scoped service identity for standalone gateway | Gateway | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11569) |
| #11568 | Leave one standalone gateway path for /plugin/{path} | Gateway | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11568) |
| #11567 | State plugin-webhook/dispatch wire bounds in OpenRPC schema | RPC | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11567) |
| #11566 | One local-only gate for RPC methods | RPC | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11566) |

### Features em Progress

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #8310 | Schema V4 breaking cut (remove dead config) | In Progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) |
| #11166 | Evict images in batches when cap exceeded | In Progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) |
| #10407 | Persistent session prompt attachments | In Progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) |

### Indicações de Roadmap

- **v0.8.6** como target para features de plugin/canal (#10996)
- **Rust/WASM UI** como direção de longo prazo (#8132)
- **Schema V4** como próxima migração breaking change (#8310)
- **Segurança filesystem** como prioridade (múltiplos PRs stacked)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência | Link |
|-----------|-----------|------------|------|
| **Perda de Configuração** | Usuários perdendo configs de 25 agentes por bugs de save | Crítica | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| **Sandbox Quebrado** | Firejail/bubblewrap não funcionam em Linux, impedindo workflow | Múltiplos | [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539), [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) |
| **CPU Spinning** | ZeroCode consome 100% CPU após desconexão | 2 incidentes | [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) |
| **Imagens Duplicadas** | Modelo descreve "novas" imagens que já foram enviadas | Relatado | [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) |
| **Signal Media** | Ausência de suporte a anexos em Signal | Solicitado | [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) |

### Cenários de Uso Identificados

1. **Deploy Daemon + Canais:** Usuários avançados rodam ZeroClaw como daemon com múltiplos canais (webhook, cron, SOP) — estos enfrentam o bug de channel-map registration (#11055)

2. **Multi-Agent Configuration:** Operadores com 25+ agentes em `config.toml` — vulneráveis a perda de dados por bugs de save

3. **Enterprise Security:** Deploys com políticas sandbox (bubblewrap, firejail) em Linux — quebrados atualmente

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (>7 dias sem update)

| Issue | Título | Última Atualização | Prioridade | Link |
|-------|--------|-------------------|------------|------|
| #8310 | Schema V4 breaking cut | 2026-10-06 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) |
| #7883 | Intra-family provider fallback notices | 2026-10-06 | P3 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) |
| #7891 | Signal media attachment support | 2026-10-06 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) |
| #9887 | Downscale oversized images | 2026-10-06 | P2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) |

### PRs Bloqueados ou Em Stack

| PR | Título | blockers | Link |
|----|--------|----------|------|
| #11413 | Refuse relative paths in filesystem channel | Stacked on #11405 | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11413) |
| #11405 | Refuse Linux broad roots | Stacked on #11406, #11394 | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11405) |
| #11406 | Refuse macOS broad roots | Stacked on #11394 | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) |
| #11265 | zeroclaw user commands for roster password lifecycle | Depends on #11264, #11313 | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) |
| #9447 | Classify incomplete terminal responses | Needs author action | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |

### Recomendações de Priorização

1. **Crítico:** Resolver bugs S0 (#10495, #11579, #11540) antes da próxima release
2. **Alta:** Unstack e merge PRs de segurança filesystem (#11394, #11405, #11406, #11413)
3. **Média:** Review do PR #10407 (session attachments) para v0.8.6
4. **Estratégico:** Engajar com discussão #8132 sobre Rust/WASM UI para roadmap 2027

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-10-07. Todas as métricas refletem atividade das últimas 24 horas.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*