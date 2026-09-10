# Resumo diário do ecossistema de agentes de IA 2026-09-11

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-10 22:12 UTC

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

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Período de análise:** 2026-09-11  
**Projetos evaluados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas** neste período. Por um lado, projetos como CoPaw (QwenPaw) e Hermes Agent apresentam volumes excepcionais de atividade (28-50 updates/24h) com iteradores rápidos focados em features e estabilização de canais. Por outro, ZeroClaw evidencia maturidade arquitectural ao investir massivamente em segurança (RFC #7141) e compatibilidade cross-platform, mesmo com alto volume de bugs P1. NanoBot destaca-se pela disciplina de consolidação pré-release, enquanto IronClaw e PicoClaw operam em modo de manutenção ativa com foco em UX e estabilidade de canais específicos. A plataforma Desktop emerge como componente crítico e problemático em múltiplos projetos, indicando uma lacuna arquitectural comum.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merges | Releases | Avaliação de Saúde |
|---------|--------------|-----------|--------|----------|-------------------|
| **CoPaw (QwenPaw)** | 28 | 36 | 13 | v2.2.1-beta.2 | 🟢 Alta — +2.857 testes, release ativo |
| **Hermes Agent** | 50 | 50 | 0 | 0 | 🟡 Tensa — 2 P1 Desktop, 4+ meses sem resolver |
| **ZeroClaw** | 50 | 50 | 0 | 0 | 🟠 Moderada — 30 P1s, 8 security issues |
| **NanoBot** | 2 | 23 | 11 | 0 | 🟢 Alta — consolidação pré-release |
| **IronClaw** | 1 | 8 | 2 | 0 | 🟢 Positiva — automatização madura |
| **PicoClaw** | 2 | 6 | 0 | 0 | 🟡 Estável — foco em bug fixes |
| **NullClaw** | 0 | 0 | 0 | 0 | ⚪ Inativa | — |

**Observação:** Hermes Agent e ZeroClaw mantêm volume alto sem consolidação (0 merges em 24h), sugerindo ciclos de review alongados ou conflitos de merge persistentes.

---

## 3. Posicionamento do Projeto Principal

### CoPaw (QwenPaw) — Líder em Velocidade de Iteração

| Dimensão | Indicador | Posição |
|----------|-----------|---------|
| Volume de PRs | 36 PRs / 24h | **#1** no ecossistema |
| Cobertura de testes | +10pp em 24h (64%→69%) | Diferencial de qualidade |
| canais | Matrix, QQ, Telegram, Feishu, WeCom, Email | **Maior diversificação** |
| Features mobile | QwenPaw Mobile em draft (#7378) | Expansão de plataforma |

**Vantagens técnicas:**
- +2.857 casos de teste em 24h demonstra disciplina de QA
- Discussão ativa do Hub multi-tenant (#7318) indica roadmap alinhado com demanda enterprise
- 13 merges/24h representa throughput excepcional

### Hermes Agent — Complexidade Desktop como Passivo

**Diferencial negativo:** 7+ issues P1/P2 afectando Desktop, com module cycle quebrando todos os plugins runtime-loaded após PR #107212. A regressão introduzida por refactoring interno sugere gaps em testabilidade de módulos.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Instabilidade de Desktop

| Projeto | Issue | Status |
|---------|-------|--------|
| Hermes Agent | Module cycle → plugins fail (#107288) | P1 — Aberto |
| Hermes Agent | Desktop session metadata lost (#102792) | P1 — Aberto |
| Hermes Agent | Windows gateway retry blocks main thread (#103786) | P1 — Aberto |
| Hermes Agent | Dashboard SessionDB corruption vector (#107688) | P1 — Aberto |

**Conclusão:** Desktop emerge como componente mais instável do ecossistema, independentemente da arquitectura subjacente.

### 4.2 Segurança e Autenticação

| Projeto | Iniciativa | Estágio |
|---------|------------|---------|
| ZeroClaw | RFC #7141 — Princpais canónicos, OIDC, PKCE | 10 PRs stacked |
| Hermes Agent | Credentials nunca persistir em git sync (#107743) | Merged |
| Hermes Agent | Clear env-derived api_key on OAuth (#57840) | P2 |
| NanoBot | MCP OAuth token auto-refresh (#5573) | Merged |

### 4.3 Compatibilidade Cross-Platform

| Projeto | Problema | Severidade |
|---------|----------|------------|
| ZeroClaw | 74 test failures on Windows (#7462) | S2 |
| Hermes Agent | Cron scripts fail on Windows (#43073) | 3+ meses |
| Hermes Agent | Orphaned Chrome processes (Windows) (#32047) | P2 |
| IronClaw | IME composition no Safari (#8092) | Média |

### 4.4 Gestão de Memória e Contexto

| Projeto | Issue | Impacto |
|---------|-------|---------|
| NanoBot | Dream memory files crescem sem limite (#5630) | 🔴 Regressão crítica |
| CoPaw | Modelo perde contexto entre requisições (#7579) | 🔴 Crítico |
| ZeroClaw | ACP turns falhados desaparecem (#9333) | S2 |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Segmento Primário | Indicações |
|---------|-------------------|------------|
| **CoPaw** | Enterprise/Teams | Hub multi-tenant, Feishu, WeCom, skills compartilhadas |
| **Hermes Agent** | Desktop power users | Browser tool, Profiles, Kanban |
| **ZeroClaw** | Security-conscious developers | Princpais, OIDC, audit logging |
| **NanoBot** | Self-hosted enthusiasts | Headless servers, canais múltiplos |
| **IronClaw** | Rust/Telegram users | Rust-native, Bot API commands |

### 5.2 Por Arquitectura Técnica

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Testes massivos** | CoPaw | +2.857 casos/24h → maturação rápida de estabilidade |
| **Segurança first** | ZeroClaw | 10 PRs de security RFC → arquitectura robusta mas lento |
| **UX-driven** | NanoBot | 7 PRs WebUI → priorização de experiência visual |
| **Manutenção lean** | IronClaw, PicoClaw | Atualizações de deps + correções pontuais |

### 5.3 Por Estratégia de Release

| Estratégia | Projetos | Comportamento |
|------------|----------|---------------|
| **Beta ativo** | CoPaw | v2.2.1-beta.2 publicada hoje |
| **Pré-release** | NanoBot | 23 PRs em conflito, preparando consolidação |
| **Hotfix-driven** | Hermes Agent, ZeroClaw | P1s abertos sem timeline de resolução clara |
| **Maintenance** | IronClaw, PicoClaw | Atualizações de dependências como principal actividade |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs merged (24h) | Projecção Mensal |
|---------|---------|------------------|-------------------|
| 🥇 | CoPaw | 13 | ~390 |
| 🥈 | NanoBot | 11 | ~330 |
| 🥉 | IronClaw | 2 | ~60 |
| 4º | PicoClaw | 0 | ~0 |
| 4º | Hermes Agent | 0 | ~0 |
| 4º | ZeroClaw | 0 | ~0 |

### 6.2 Qualidade e Disciplina

| Projeto | Cobertura/Qualidade | Indicador |
|---------|---------------------|-----------|
| **CoPaw** | +10pp de cobertura em 24h | Investimento excepcional em QA |
| **NanoBot** | PR #5724 resolve P1 crítico em <24h | Resposta rápida a community reports |
| **ZeroClaw** | SECURITY.md actualizado para reflectir política correcta | Higiene de comunicação |

### 6.3 Dívida Técnica Accumulada

| Projeto | Issues P1+ em Aberto | Idade do P1 Mais Antigo |
|---------|---------------------|------------------------|
| **ZeroClaw** | ~30 | Múltiplos 3+ meses |
| **Hermes Agent** | 7+ (Desktop) | 3+ meses (#32047, #43073, #37632) |
| **CoPaw** | 3 críticos (#7579, #7662, #7661) | <1 semana |
| **NanoBot** | 1 crítico (#5630) | ~9 dias |

**Conclusão:** ZeroClaw e Hermes Agent apresentam dívida técnica significativa, enquanto CoPaw mantém disciplina de resolução acelerada mesmo com alto volume de activity.

---

## 7. Sinais de Tendência

### 7.1 Desktop como Nova Fronteira Problemática

A concentração de P1s em Desktop (Hermes Agent: 7+, ZeroClaw: Desktop-related issues) indica que **a experiência Desktop está a amadurecer mais lentamente que os backends**. Este é um padrão comum em projectos que começam como CLI/headless e expandem para GUI.

**Implicação:** Projects sem estratégia Desktop definida (NanoBot, CoPaw com mobile draft) têm oportunidade de capturar utilizadores insatisfeitos com Hermes Agent.

### 7.2 Multi-Channel como Expectativa, Não Feature

Todos os projectos suportam 3+ canais, mas a estabilidade varia drasticamente:

| Canal | CoPaw | Hermes Agent | ZeroClaw | PicoClaw |
|-------|-------|--------------|----------|----------|
| Telegram | ✅ Estável | ✅ | ✅ | ✅ (corrigido) |
| Discord | ✅ | ✅ (indicador preso) | ✅ | ❌ |
| Feishu/WeCom | 🟡 Hang | N/A | N/A | N/A |
| QQ | 🟡 401 error | N/A | N/A | 🟡 401 error |

**Implicação:** A fragmentação de canais por plataforma asiática (QQ, Feishu, WeCom, Lark) demonstra demanda de mercado que não está a ser bem servida — oportunidade para especialização.

### 7.3 Segurança a Tornar-se Primitiva de Primeira Classe

ZeroClaw (RFC #7141), Hermes Agent (credentials never persist), e NanoBot (MCP OAuth refresh) demonstram convergência para **security como feature de primeira classe**, não afterthought.

**Implicação:** Projects que não investirem em autenticação robusta, principals, e audit logging arriscam exclusão de segmentos enterprise/government.

### 7.4 Mobile-First como Roadmap Prioritário

| Projecto | Iniciativa Mobile | Estágio |
|----------|-------------------|---------|
| CoPaw | QwenPaw Mobile (iOS/Android) | Draft (#7378) |
| NanoBot | PWA iOS fixes (#5641) | PR aberta |
| IronClaw | IME composition fix (#8092) | PR aberta |

**Implicação:** A desktop-first historically dos agentes de IA está a dar lugar a estratégias mobile-first, alinhadas com padrões de uso contemporâneos.

### 7.5 Test Coverage como Diferencial Competitivo

O investimento de CoPaw (+2.857 testes em 24h) estabelece novo benchmark para o ecossistema. Projects com cobertura inferior (<70%) arriscam ser percebidos como menos maduros, independentemente de features.

---

## 8. Síntese para Decisores

| Projecto | Recomendação | Prazo |
|----------|--------------|-------|
| **CoPaw** | Adotar para novos deployments enterprise; monitorizar bugs de contexto (#7579) | Imediato |
| **NanoBot** | Avaliar para self-hosted com foco em UX; aguardar consolidação pré-release | 2-4 semanas |
| **ZeroClaw** | Aguardar resolução do pipeline de segurança (RFC #7141); não usar em produção sem patches | 2-3 meses |
| **Hermes Agent** | Evitar para workloads Desktop Windows críticos; usar CLI se tolerante a instabilidade | Evitar |
| **IronClaw** | Considerar para utilizadores Rust/Telegram com necessidades básicas | Estável |
| **PicoClaw** | Niche para gateways minimalistas; aguardarr PR #3376 (Deltachat) | Monitorizar |

---

*Relatório gerado com base em dados de actividade GitHub de 2026-09-11. Métricas subjectivas reflectem avaliação do analista com base nos padrões observados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-11

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** na data de hoje, com 23 PRs atualizadas nas últimas 24h e 11 merges/fechamentos realizados. A equipe de desenvolvimento demonstra foco contínuo em refinamento da WebUI e estabilidade de canais, com 7 PRs relacionadas especificamente à interface web. Não houve lançamentos de novas versões, indicando fase de consolidação e preparação para próximo release. A base de issues permanece relativamente estável com apenas 2 issues abertas e 1 fechada, sugerindo gerenciamento eficiente de bug reports pela comunidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release, com todas as modificações ainda em revisão ou fase de testes. A ausência de releases não indica estagnação — pelo contrário, o volume de PRs em conflito (6 marcadas) sugere que múltiplas contribuições estão sendo integradas em preparação para uma futura versão.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| PR | Título | Impacto |
|---|---|---|
| [#5723](https://github.com/HKUDS/nanobot/pull/5723) | Align standalone page widths with conversations | Padronização visual de Apps, Skills, Automations e Channels com conversas |
| [#5725](https://github.com/HKUDS/nanobot/pull/5725) | Align chat elements and fix prompt rail grouping | Correção de espaçamento de ícones em mensagens e renderização de compaction notices |
| [#5722](https://github.com/HKUDS/nanobot/pull/5722) | Refine sidebar hierarchy and selection feedback | Melhoria na navegação com hierarquia visual consistente e guias verticais |
| [#5710](https://github.com/HKUDS/nanobot/pull/5710) | Organize projects and simplify sidebar navigation | Separação de projetos, tópicos e automações na sidebar para melhor UX |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | Telegram command spellings adaptation | Adaptação de comandos com hífen/underscore para Telegram |
| [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Route /compact and /evaluator-prompt to command router | Consertar rotas de comandos no Telegram |
| [#5573](https://github.com/HKUDS/nanobot/pull/5573) | MCP OAuth token auto-refresh | Persistência e renovação automática de tokens OAuth |
| [#5708](https://github.com/HKUDS/nanobot/pull/5708) | Preserve UTF-8 across streaming output | Correção de caracteres UTF-8 inválidos em exec sessions |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI show measured request context | Métricas de uso na footer do TUI |

**Destaque:** A [PR #5724](https://github.com/HKUDS/nanobot/pull/5724) resolve um problema crítico de exception handling em background tasks, relacionada à issue #5429 — demonstrando resposta ativa da equipe a reports da comunidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

| Issue | Título | Status | Relevância |
|---|---|---|---|
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop does not retrieve exceptions from background tasks | 🟡 Aberta | 🔴 Crítico — afeta consolidação, archival e title generation |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Startup initial password in headless servers | 🟡 Aberta | 🟠 UX — confusão de novos usuários em servers sem UI |

### PRs com Maior Atividade ou Complexidade

| PR | Título | Status | Observações |
|---|---|---|---|
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | Improve setup flows across chat channels | 🟡 Aberta | Refactoring significativo de catálogos e dialogs |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Model provider removal controls | 🟡 Aberta | Requer validação de dependências antes de remoção |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | Cron configurable delivery and batch archive | 🟡 Aberta | Feature rica com estado de archive e gestão de jobs |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory file size guardrails | 🟡 Aberta | **Regressão crítica** — arquivos SOUL.md/USER.md crescem sem limite |

**Análise:** A comunidade demonstra preocupação com **estabilidade do Dream** (regressão de size cap em #5630) e **gestão de background tasks** (#5429). O tema de WebUI mobile (iOS PWA) também gera atenção com a PR #5641.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas

| Severity | Issue | Descrição |
|---|---|---|
| 🔴 Alta | [#5630](https://github.com/HKUDS/nanobot/issues/5630) | **Regressão de tamanho em Dream memory files** — arquivos crescem sem limite após PR #5622 |
| 🟠 Média | [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Usuários não conseguem acessar WebUI em headless servers por desconocimento da senha inicial |
| 🟠 Média | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | Background tasks silenciosamente falham sem notificação adequada |

### Bugs Corrigidos via PR

| PR | Correção |
|---|---|
| [#5724](https://github.com/HKUDS/nanobot/pull/5724) | Retrieve background task exceptions e log inesperado |
| [#5723](https://github.com/HKUDS/nanobot/pull/5723) | Alinhamento visual de páginas standalone |
| [#5725](https://github.com/HKUDS/nanobot/pull/5725) | Ícones de footer alinhados e grouped prompts corrigidos |
| [#5708](https://github.com/HKUDS/nanobot/pull/5708) | UTF-8 preservado em streaming de exec |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | Comandos Telegram adaptados ao padrão do nanobot |
| [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Rotas /compact e /evaluator-prompt no Telegram |

**Veredicto de Estabilidade:** ⚠️ **Atenção moderada** — a regressão de size guardrails (#5630) é o principal risco, potencialmente afetando todas as sessões com memória Dream ativa. A equipe já possui PR em revisão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Feature | Relevância Estratégica |
|---|---|---|
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | **Cron job delivery configurável e batch archive** | 🟢 Enterprise — gestão avançada de automações |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | Completion notification sound | 🟢 UX — feedback auditivo opcional |
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | Setup flows refatorados para canais | 🟢 Onboarding — redução de friction |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Model provider removal controls | 🟢 Multi-provider — gestão de configurações |
| [#5727](https://github.com/HKUDS/nanobot/pull/5727) | Documentação de headless login secret | 🟢 DevOps — clareza de deployment |

### Insights de Roadmap

- **WebUI Mobile-first:** PWA iOS fixes (#5641) indicam priorização de experiência mobile
- **Sidebar Navigation:** Refatoração completa (#5710, #5722) sugere nova arquitetura de navegação planejada
- **Cron System:** Expansão significativa de capabilities (#5620) com archive lifecycle

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Impacto |
|---|---|---|
| **Onboarding** | Usuários de headless servers não sabem qual senha utilizar na WebUI | 🔴 Bloqueante |
| **Background Processing** | Falhas silenciosas em tasks de consolidação e archival | 🟠 Esconde problemas |
| **Dream Memory** | Arquivos de memória crescem indefinidamente | 🟠 Performance futura |
| **iOS PWA** | Touch interactions não funcionam como esperado | 🟡 UX mobile |

### Cenários de Uso Observados

- **Headless deployment:** Servidores sem browser, acessando via Firefox remote
- **Multi-channel:** Uso simultâneo de Telegram, Discord e WebUI
- **Enterprise cron:** Agendamento de tarefas com entrega em múltiplos targets

### Satisfação Geral

A resposta rápida da equipe a issues críticas (PR #5724 resolvendo #5429 em menos de 24h) demonstra **boas práticas de comunidade**. A cobertura de múltiplos canais (Telegram, Discord, WebUI) e a atenção a detalhes de UX (notificação sonora, PWA iOS) indicam **foco em experiência do usuário**.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Mais de 7 dias

| Issue | Título | Idade | Prioridade |
|---|---|---|---|
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop does not retrieve exceptions from background tasks | ~24 dias | 🔴 Crítica |
| [#5630](https://github.com/HKUDS/nanobot/issues/5630) | Dream memory size guardrails (regressão) | ~9 dias | 🔴 Alta |

### PRs em Conflito (Requerem Resolução)

| PR | Título | Motivo |
|---|---|---|
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | WebUI setup flows improvement | Conflito com main |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Model provider removal | Conflito com main |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | Cron delivery and batch archive | Conflito com main |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory size guardrails | Conflito com main |
| [#5702](https://github.com/HKUDS/nanobot/pull/5702) | Archive consolidation prompt | Conflito com main |
| [#5698](https://github.com/HKUDS/nanobot/pull/5698) | API types preservation | Conflito com main |

**Ação Recomendada:** Priorizar resolução de conflitos nas PRs #5630 (regressão) e #5620 (feature enterprise) para manter momentum do release.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|---|---|
| 📊 Issues abertas/ativas | 2 |
| ✅ Issues fechadas | 1 |
| 🔀 PRs abertas | 12 |
| 🔀 PRs fechadas/merged | 11 |
| 🏷️ Releases | 0 |
| ⚠️ PRs em conflito | 6 |
| 🔴 Bugs críticos abertos | 1 (#5630) |
| 🟢 Bugs críticos resolvidos | 1 (#5724) |

---

*Relatório gerado automaticamente com base nos dados do GitHub — HKUDS/nanobot — 2026-09-11*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-11

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **alta atividade** em 11 de setembro de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. **Nenhum release** foi publicado, sinalizando que a equipe está em ciclo de estabilização antes de um próximo lançamento. A saúde geral apresenta **sinais de tensão**: dois P1s críticos afetando a plataforma Desktop (plugin cycle e gateway retry) e múltiplos P2s relacionados a crashes, vazamentos de processos e regressões cross-plataforma. A comunidade está particularmente mobilizada em torno de dois problemas crônicos com alto volume de comentários — o índice de skills degradado (192 comentários) e a integração Nous bloqueada (85 comentários).

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto está sem release desde a última versão (v0.21.1, 2026-09-07), conforme evidenciado pela ausência de novos tags. Issues abertas como [#103259](https://github.com/NousResearch/hermes-agent/issues/103259) — pedindo suporte a servidor remoto para Desktop — foram fechadas com merge, indicando que funcionalidades pendientes aguardam empacotamento em uma futura release.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos para review)

| PR | Título | Escopo | Prioridade |
|----|--------|--------|------------|
| [#107731](https://github.com/NousResearch/hermes-agent/pull/107731) | perf(agent): project stale tool results out of request | Agent/Gateway/TUI | **P2** |
| [#107738](https://github.com/NousResearch/hermes-agent/pull/107738) | fix(gateway): surface voice auto-transcription failures | Gateway/Telegram | **P2** |
| [#107735](https://github.com/NousResearch/hermes-agent/pull/107735) | fix(providers): stop routing loopback/LAN through proxy | Provider/Ollama | **P2** |
| [#107734](https://github.com/NousResearch/hermes-agent/pull/107734) | fix(curator): seed review read-mark store in fork context | Agent/Skills | **P2** |
| [#76882](https://github.com/NousResearch/hermes-agent/pull/76882) | fix(browser): scope Camofox caches by profile | Browser/Profiles | **P2** |
| [#107742](https://github.com/NousResearch/hermes-agent/pull/107742) | fix(kanban): supervisor clear triage-stuck card | Kanban | — |
| [#107736](https://github.com/NousResearch/hermes-agent/pull/107736) | fix(kanban): honor explicit platform tool opt-ins | CLI/Cron/Kanban | **P3** |
| [#107743](https://github.com/NousResearch/hermes-agent/pull/107743) | fix(review): never persist credentials from git sync | Review/Security | — |
| [#57840](https://github.com/NousResearch/hermes-agent/pull/57840) | fix(anthropic): clear env-derived api_key on OAuth | Auth/Billing | **P2** |

### Avanços identificados

- **Performance de Agent**: PR [#107731](https://github.com/NousResearch/hermes-agent/pull/107731) ataca o envio redundante de resultados de ferramentas stale em cada request, um problema que desperdiça janela de contexto (~50% de uma janela 1M é afetada). Mudança potencialmente significativa para sessões longas.
- **Segurança em Review**: PR [#107743](https://github.com/NousResearch/hermes-agent/pull/107743) corrige dois vetores de exposição de credenciais — PAT em `.git/config` e chaves API em texto puro — em flows de review background.
- **Stabilidade Desktop**: PRs [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) e [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) (ambos duplicados) aguardam correção para module cycle que quebra todos os plugins runtime-loaded.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#66616** — [Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) | 192 comentários | P3  
*Resumo*: O índice `/docs/api/skills-index.json` está 29.8h desatualizado (limite: 26h). O workflow cron `.github/workflows/skills-index.yml` não está executando corretamente.  
*Análise*: Este é o problema de maior volume de discussão do projeto, indicando uma dependência operacional crítica não resolvida. O alerta automatizado (skills-index-watchdog) detecta a degradação, mas a causa raiz permanece sem correção definitiva.

**#88584** — [Automated Nous integration is blocked](https://github.com/NousResearch/hermes-agent/issues/88584) | 85 comentários | P3  
*Resumo*: O merge automatizado Nous-to-Enterkey falha com conflitos em `cron/jobs.py`. O dashboard updater permanece na última release testada do Enterkey.  
*Análise*: Afeta a pipeline de integração contínua. Com 85 comentários, há debate intenso sobre a estratégia de branch release e gestão de dependências entre integrações.

**#103259** — [Feature: Desktop should allow a remote server](https://github.com/NousResearch/hermes-agent/issues/103259) | 2 comentários, 1 👍 | P3 | **CLOSED**  
*Resumo*: Solicitação de Desktop conectar a instâncias remotas (Docker).  
*Análise*: closed-with-milestone, indicando que a demanda está planejada para uma versão futura.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (requerem atenção imediata)

| Issue | Título | Componente | Status |
|-------|--------|------------|--------|
| [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) | Desktop session metadata lost → "Couldn't open session" em multi-profile | Desktop/Sessions | OPEN |
| [#107288](https://github.com/NousResearch/hermes-agent/issues/107288) | Module cycle → all runtime plugins fail on desktop boot | Desktop/Plugins | OPEN |
| [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) | Desktop runtime plugins fail após update (duplicado de #107288) | Desktop/Plugins | OPEN |
| [#103786](https://github.com/NousResearch/hermes-agent/issues/103786) | Windows gateway retry blocks Electron main thread (AppHangB1) | Desktop/Windows | OPEN |
| [#107688](https://github.com/NousResearch/hermes-agent/issues/107688) | Dashboard unconditional writable SessionDB open → corruption vector | Dashboard | OPEN |

### P2 — Importantes (impacto significativo)

| Issue | Título | Componente |
|-------|--------|------------|
| [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) | Desktop MEDIA file links dead (regex + string concat bug) | Desktop |
| [#32047](https://github.com/NousResearch/hermes-agent/issues/32047) | 200+ orphaned Chrome processes after browser tasks (Windows) | Browser/Windows |
| [#65094](https://github.com/NousResearch/hermes-agent/issues/65094) | Custom Codex providers omit Hermes session headers | Agent/Sessions |
| [#37632](https://github.com/NousResearch/hermes-agent/issues/37632) | SIGABRT (exit 134) on `hermes -z` exit | CLI |
| [#100855](https://github.com/NousResearch/hermes-agent/issues/100855) | Browser daemons invisible to orphan reaper (47h survival) | Browser/Sessions |
| [#107548](https://github.com/NousResearch/hermes-agent/issues/107548) | Skills hub install crawls ~2.3s/file (hang-like) | Skills |

### Padrões identificados

1. **Desktop como componente mais instável**: 7+ issues P1/P2 afetando Desktop, com problemas de plugins, sessões, e update.
2. **Browser tool com vazamentos**: Processo orphan persistent mesmo após restart do gateway.
3. **Windows platform**: 4+ issues específicas de Windows (gateway retry, cron scripts, self-update).
4. **Regressão de módulos**: O refactor `#107212` introduziu um module cycle quebrando plugins em desktop.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas abertas hoje

| Issue | Título | Escopo | Prioridade |
|-------|--------|--------|------------|
| [#107681](https://github.com/NousResearch/hermes-agent/issues/107681) | Desktop project switcher: dropdown de profiles + fleet view | Desktop/Profiles | P3 |
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | Secrets: handles para tool credentials + HTTP inject wrap | CLI/Auth | P3 |
| [#107647](https://github.com/NousResearch/hermes-agent/issues/107647) | create_swarm: pass goal_mode through to worker cards | Cron/Swarm | P3 |
| [#107544](https://github.com/NousResearch/hermes-agent/issues/107544) | Desktop: ação "unpin" no model picker | Desktop | P3 |
| [#16106](https://github.com/NousResearch/hermes-agent/issues/16106) | Gateway SLO timing trace para provider latency | Gateway | P3 |

### Sinais de roadmap inferidos

- **Multi-profile robustness**: Issue [#107681](https://github.com/NousResearch/hermes-agent/issues/107681) e a quantidade de issues de sessões cross-profile (#102792, #107666) sugerem que gerenciamento de profiles é área de foco.
- **Desktop como produto principal**: Evidenciado por features de UI específicas (model picker, kanban board, project switcher) e múltiplas correções de estabilidade.
- **Segurança de credenciais**: PRs [#57840](https://github.com/NousResearch/hermes-agent/pull/57840), [#107743](https://github.com/NousResearch/hermes-agent/pull/107743) e issue [#107698](https://github.com/NousResearch/hermes-agent/issues/107698) indicam investimento em higiene de secrets.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Desktop instável em produção**: Usuários Windows reportam crashes completos (AppHangB1) e falhas de plugins após updates, comprometendo fluxo de trabalho.

2. **Browser tool deixa processos órfãos**: 200+ Chrome processes em Windows após tarefas, causando consumo significativo de CPU/memória. Cenários de produção com daemon headless sobrevivendo 47h.

3. **Skills hub用户体验**: Instalação de skills oficiais aparece como "deadlock" (~8 minutos para archify com 199 arquivos). Usuáriosmatam o processo pensando em hang.

4. **Integração Nous bloqueada**: A automação de merge Nous→Enterkey está travada, afetando a pipeline de desenvolvimento.

5. **Secrets system confuso**: Documentação ensina dois sistemas de secrets como um, e `bitwarden sync --apply` é nomeadamente inapropriado para o que faz (hydrate `os.environ`).

### Cenários de uso reportados

- **Multi-profile em produção**: Instalações com 13+ profiles aprovados em produção, com problemas de isolamento e spawn acidental de profiles com typos.
- **Gateway remote com Desktop**: Usuários querem Desktop conectando a Hermes em container Docker remoto.
- **Kanban como sistema de orquestração**: Swarm workers, supervisor triage, e integração com router-only orchestrators.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução (por idade/complexidade)

| Issue | Título | Criada | Comentários | Nota |
|-------|--------|--------|-------------|------|
| [#32047](https://github.com/NousResearch/hermes-agent/issues/32047) | Orphaned Chrome processes (Windows) | 2026-05-25 | 6 | 3+ meses aberto, P2 |
| [#43073](https://github.com/NousResearch/hermes-agent/issues/43073) | .sh cron scripts fail on Windows | 2026-06-09 | 5 | 3+ meses, bash path mangling |
| [#37632](https://github.com/NousResearch/hermes-agent/issues/37632) | SIGABRT on `hermes -z` exit | 2026-06-02 | 5 | 3+ meses, Honcho daemon threads |
| [#16106](https://github.com/NousResearch/hermes-agent/issues/16106) | Gateway SLO timing trace | 2026-04-26 | 2 | 4+ meses, feature request |

### Issues com alta complexidade mas baixa atividade

| Issue | Título | Comentários | Motivo |
|-------|--------|-------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index degraded | 192 | Causa raiz não identificada; alerta existe mas correção não converge |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Nous integration blocked | 85 | Depende de consenso sobre estratégia de branch release |

### Recomendação de priorização

1. **Urgente**: Corrigir P1s de Desktop (#102792, #107288, #103786, #107688) — afeta usabilidade em produção.
2. **Curto prazo**: Resolver vazamento de Chrome processes (#32047) e cron script failures (#43073) — técnico e bem delimitado.
3. **Médio prazo**: Resolver skills index (#66616) — alerta automatizado existe mas correção não converge há meses.
4. **Estratégico**: Documentar e separar os dois sistemas de secrets (#107698, #107700).

---

*Relatório gerado em 2026-09-11 com base em dados do GitHub NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-11

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 11 de setembro de 2026. Nas últimas 24 horas, 2 issues foram atualizadas (1 aberta e 1 fechada) e 6 pull requests estão abertas aguardando revisão, todas de dependências automatizadas via Dependabot. Não houve lançamentos de novas versões. A atividade principal concentra-se na correção de um bug crítico do canal Deltachat (Issue #3265), que acabou de ser fechado, e um PR relacionado (#3376) propõe a solução definitiva. O projeto segue em manutenção ativa com foco em estabilidade e atualizações de dependências.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se monitorar o repositório para eventuais releases relacionadas à correção do bug Deltachat, caso o PR #3376 seja aprovado e merged.

---

## 3. Progresso do Projeto

### PRs Recentes Abertas

| # | Título | Autor | Data | Status |
|---|--------|-------|------|--------|
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat): initialize as custom channel to solve config validation error | luisgdev | 2026-09-10 | ✅ **Pronto para review** |
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | build(deps): bump aws-sdk-go-v2 1.42.0 → 1.45.1 | dependabot | 2026-09-03 | ⏳ Pending |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | build(deps): bump irc-go 0.6.0 → 0.7.0 | dependabot | 2026-09-03 | ⏳ Pending |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | build(deps): bump golang.org/x/term 0.44.0 → 0.45.0 | dependabot | 2026-09-03 | ⏳ Pending |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | build(deps): bump protobuf 1.36.11 → 1.36.12 | dependabot | 2026-09-03 | ⏳ Pending |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | build(deps): bump larksuite-oapi-sdk 3.9.4 → 3.11.0 | dependabot | 2026-09-03 | ⏳ Pending |

**Destaque:** O PR #3376, criado em 2026-09-10 por luisgdev, resolve o erro de validação do canal Deltachat que impedía o gateway de iniciar. A correção registra o canal Deltachat como custom channel, solucionando a Issue #3265关联.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#3265](https://github.com/sipeed/picoclaw/issues/3265)** — Gateway startup fails with 'channel deltachat has unknown type deltachat'
- **Status:** ✅ CLOSED
- **Comentários:** 6
- **Reações:** 👍 1
- **Criação:** 2026-07-19 | **Última atualização:** 2026-09-10
- **Análise:** Esta issue teve ciclo de vida de ~2 meses, demonstrando um bug que afetou usuários do canal Deltachat. O problema estava na inicialização do canal mesmo quando não configurado, indicando falha na lógica de validação condicional.

### Issue Aberta com Comentários

**[#3349](https://github.com/sipeed/picoclaw/issues/3349)** — QQ频道无法正常使用 (Canal QQ não funciona corretamente)
- **Status:** 🔴 OPEN
- **Comentários:** 4
- **Reações:** 0
- **Criação:** 2026-08-30 | **Última atualização:** 2026-09-10
- **Análise:** Usuários relatam erro de autenticação 401 no WebSocket do canal QQ. O erro indica problema com o cabeçalho Authorization, afetando tanto Docker quanto Linux x86. Esta issue está marcada como stale e precisa de atenção da equipe.

---

## 5. Bugs e Estabilidade

### Bug Aberto de Prioridade Alta

**[#3349](https://github.com/sipeed/picoclaw/issues/3349)** — Erro 401 no canal QQ
```
severity: 🔴 Alta (afeta funcionalidade principal)
impact: Usuários de QQ não conseguem usar o gateway
workaround: Nenhum documentado
```

### Bug Recém-Resolvido

**[#3265](https://github.com/sipeed/picoclaw/issues/3265)** — Erro de tipo desconhecido no canal Deltachat
```
status: ✅ Corrigido (PR #3376 pendente de merge)
severity: 🟡 Média (bloqueava startup do gateway)
impact: Usuários sem configuração Deltachat eram afetados
```

### Análise de Regressões
Não foram reportadas regressões nas últimas 24h. O projeto mantém estabilidade com foco em correções pontuais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

| Tipo | Descrição | Sinais de Prioridade |
|------|-----------|---------------------|
| 🐛 Bug | Canal QQ com erro de autenticação (#3349) | 4 comentários, marcação stale |
| 🔧 Melhoria | Atualização de dependências AWS SDK (#3364) | Dependabot automático |
| 🔧 Melhoria | Atualização de dependência Lark/OAPI (#3360) | 2 versões de salto (3.9.4 → 3.11.0) |

### Tendências Observadas
- **Manutenção de dependências:** 5 de 6 PRs abertas são atualizações de dependências, indicando disciplina de segurança
- **Integração de canais:** Correção do Deltachat sugere foco em estabilidade de canais existentes
- **Suporte a canais alternativos:** Issue do QQ demonstra demanda por canais asiáticos (Lark, QQ)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Ocorrência | Severidade |
|-----|------------|------------|
| Gateway não inicia por config inválida | #3265 (resolvido) | 🔴 Crítica |
| Canal QQ não funciona (erro 401) | #3349 | 🔴 Alta |
| Configuração confusa de canais | #3265 (comentários) | 🟡 Média |

### Cenários de Uso Identificados
1. **Gateway com múltiplos canais** — Usuários configuram canais diversos (Deltachat, QQ, IRC, etc.)
2. **Implantação Docker e Linux nativa** — Bugs afetam ambas as plataformas
3. **Integração com plataformas asiáticas** — Demanda crescente por QQ e Lark

### Indicadores de Satisfação
- Engajamento moderado em issues (média de 4-6 comentários por bug significativo)
- Aceitação rápida de correções (Issue #3265 fechada em 24h após atualização)
- Manutenção ativa de dependências sugere projeto bem cuidado

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale

| # | Título | Criação | Última Atualização | Dias Inativo | Prioridade |
|---|--------|---------|-------------------|--------------|------------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ频道无法正常使用 | 2026-08-30 | 2026-09-10 | 12 dias | 🔴 Alta |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat) | 2026-09-10 | 2026-09-10 | 1 dia | 🟢 Revisar |

### Recomendações de Ação

1. **🔴 Prioridade Alta:** Revisar e mergear PR #3376 — resolve bug crítico do Deltachat
2. **🔴 Prioridade Alta:** Investigar Issue #3349 (QQ) — usuários ativos esperando resposta
3. **🟡 Prioridade Média:** Processar dependências do Dependabot (#3360-#3364) — segurança
4. **🟢 Boa Prática:** Remover marcação stale da Issue #3349 e atribuir responsável

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 1 |
| PRs abertas | 6 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Engajamento total (comentários) | 10 |
| Bug crítico aberto | 1 |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [sipeed/picoclaw](https://github.com/sipeed/picoclaw) em 2026-09-11.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-09-11

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade de manutenção** nesta data, com 8 PRs atualizadas nas últimas 24 horas. A atividade concentra-se predominantemente em **atualizações de dependências automatizadas** (6 de 8 PRs), evidenciando uma política robusta de versionamento. Duas PRs funcionais significativas foram fechadas/merged, incluindo melhorias no Telegram e correções no sistema MCP. O volume de issues permanece baixo (1 nova), sugerindo estabilidade operacional no geral.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Isso indica um momento de preparação ou trabalho interno antes de下一个版本.

---

## 3. Progresso do projeto

### PRs importantes merged/fechadas

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | feat(telegram): register Bot API command menu at activation | telegram, features | ✅ **MERGED** |
| [#8080](https://github.com/nearai/ironclaw/pull/8080) | chore(deps): bump everything-else group (21 updates) | dependencies, rust | ✅ **CLOSED** |

#### Destaque: PR #8072 — Telegram Bot API Command Menu
- **Contribuidor:** thisisjoshford (experienced contributor)
- **Impacto:** Implementa registro automático dos comandos do bot (`/model`, `/status`, `/new`, `/stop`, `/interrupt`) via `setMyCommands` na ativação da extensão
- **Melhoria de UX:** Usuários do Telegram agora têm acesso direto aos comandos via menu do chat, mejorando discoverability

#### Destaque: PR #8080 — Atualização de dependências Rust
- **Contribuidor:** dependabot[bot]
- **Impacto:** 21 atualizações de pacotes Rust (uuid, base64, rust_decimal, etc.)
- **Escopo:** Manutenção preventiva de segurança e compatibilidade

---

## 4. Temas quentes da comunidade

### Issue de maior destaque

| # | Título | Status | Engajamento |
|---|--------|--------|-------------|
| [#8093](https://github.com/nearai/ironclaw/issues/8093) | Daily ironclaw failure taxonomy — 2026-09-10 | 🟡 OPEN | 0 👍 / 0 💬 |

#### Análise Issue #8093
**Assunto:** Análise diária de falhas do benchmark OfficeQA

Esta issue representa o **processo de monitoramento contínuo de qualidade** do IronClaw. O autor (pranavraja99) reporta que dos 42 tasks não-passantes no benchmark OfficeQA, a maioria são **erros genuínos do modelo DeepSeek-V4-Flash**, não falhas do sistema.

**Implicações:**
- O pipeline de CI/CD está funcionando corretamente para identificar regressões
- A taxonomia de falhas está sendo rastreada sistematicamente
- O foco atual está na qualidade do modelo, não em bugs de código

---

## 5. Bugs e estabilidade

### Correções em andamento

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#8092](https://github.com/nearai/ironclaw/pull/8092) | fix(webui): preserve IME composition in chat composer | 🟡 Média | 🟡 OPEN |
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | fix(mcp): key discovered hosted-MCP catalogs per caller | 🟡 Média | 🟡 OPEN |

#### Análise Técnica

**PR #8092 — Correção de Composição IME**
- **Problema:** Teclas IME nativas estavam sendo capturadas incorretamente antes do tratamento do menu de comandos e envio por Enter
- **Solução:** Deixar teclas IME nativas para o navegador; tratar Enter com keyCode 229 no Safari
- **Impacto:** Usuários de idiomas asiáticos (IME) terão experiência de digitação corrigida

**PR #8090 — Correção de Sobrescrita de Catálogos MCP**
- **Problema:** Catálogos MCP descobertos eram publicados por ID de extensão (slot único compartilhado), causando sobrescrita entre usuários
- **Solução:** Chave de descoberta por caller, não por extensão
- **Impacto:** Correção de race condition em ambientes multi-usuário

---

## 6. Pedidos de features e sinais de roadmap

### Novas features merged

| # | Título | Escopo | Complexidade |
|---|--------|--------|--------------|
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | Telegram Bot API command menu | telegram | M |

### Sinais de roadmap inferidos

1. **Melhoria de compatibilidade IME:** A correção #8092 indica foco em internacionalização e experiência de usuário em browsers Safari
2. **Arquitetura MCP robusta:** A correção #8090 sugere trabalho em andamento para suportar múltiplos callers/usuários em ambientes compartilhados
3. **Automação de dependências:** 6 de 8 PRs são de dependabot, indicando processo maduro de Atualização de dependências

---

## 7. Resumo de feedback dos usuários

### Indicadores de satisfação

| Indicador | Valor |
|-----------|-------|
| Issues abertas (24h) | 1 |
| PRs abertas (24h) | 6 |
| PRs fechadas/merged (24h) | 2 |
| Ratio abertura/fechamento | 3:1 |

### Análise de sentimentos

**Sinais positivos:**
- Mantenedores respondem rapidamente a issues de taxonomia de falhas
- Contribuições externas (thisisjoshford, huiq777, kirikov) indicam comunidade ativa
- Processos automatizados (Dependabot) mantêm dependências atualizadas

**Áreas de atenção:**
- 6 PRs abertas vs 2 fechadas sugere acumulação de dívida de review
- Issue de taxonomia (#8093) ainda sem comentários pode indicar necessidade de mais contexto

---

## 8. Backlog que merece atenção

### Itens sem atividade reciente

| # | Título | Criado | Atualizado | Prioridade |
|---|--------|--------|------------|------------|
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | fix(mcp): hosted-MCP catalogs per caller | 2026-09-08 | 2026-09-10 | 🟡 Alta |

#### Recomendação: Revisar PR #8090
- **Dias sem merge:** 3+
- **Risco:** Race condition em produção multi-usuário
- **Ação sugerida:** Priorizar review e merge

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade de PRs | ✅ Alta (8/24h) | Estável |
| Resolução de issues | ✅ Positiva (2 merged) | Positiva |
| Atualização de deps | ✅ Automatizada | Positiva |
| Dívida técnica | 🟡 Moderada (6 PRs pendentes) | Atenção |
| Releases | ⚪ Nenhuma (24h) | Neutra |

---

**Próximos passos recomendados:**
1. Revisar e fazer merge da PR #8090 (race condition crítica)
2. Avaliar backlog de 6 PRs pendentes do Dependabot
3. Documentar resolução da taxonomia de falhas #8093

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw (QwenPaw) — 2026-09-11

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de desenvolvimento em 11/09/2026, com **28 issues e 36 PRs atualizados** nas últimas 24h. A comunidade está engajada em torno do lançamento beta v2.2.1-beta.2 e da preparação do **QwenPaw Hub multi-tenant**. Bugs de estabilidade em canais (Feishu, Telegram, WeCom) dominam as discussões, enquanto a equipe avança em cobertura de testes (+2475 casos adicionados) e melhorias de UX no Console. O projeto demonstra saúde ativa com 13 PRs merged/fechados hoje.

---

## 2. Lançamentos

### v2.2.1-beta.2 (Beta)
**Release:** [agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2)

**Mudanças incluídas:**
| PR | Descrição | Autor |
|----|-----------|-------|
| [#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623) | Melhora no seletor mobile de agentes no Console | @zhaozhuang521 |
| [#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643) | Bump de versão para 2.2.1b2 | @cuiyuebing |
| [#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643) | Fix nos seletores CSS do Console | @zhaozh |

**Nota:** Release de estabilização com foco em melhorias incrementais do Console e preparativos para a release stable 2.2.1.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (13 total)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#6978](https://github.com/agentscope-ai/QwenPaw/pull/6978) | Feature | Novos slash commands `/sessions` e `/session` para gerenciamento de sessões | **Alto** — Melhora UX em canais IM (Matrix, QQ, Telegram) |
| [#7653](https://github.com/agentscope-ai/QwenPaw/pull/7653) | Testes | +2475 casos de teste (coverage: 64.41% → 69.43%) | **Crítico** — Maior salto de cobertura recentes |
| [#7647](https://github.com/agentscope-ai/QwenPaw/pull/7647) | Bug Fix | Suporte a Base64 data URLs em mídia outbound | **Médio** — Resolve crashes no WeCom |
| [#7663](https://github.com/agentscope-ai/QwenPaw/pull/7663) | Fix | Fallback para ReMeLight quando plugin backend indisponível | **Médio** — Evita falhas de workspace |
| [#7667](https://github.com/agentscope-ai/QwenPaw/pull/7667) | UX Fix | Upload de arquivo visível apenas na aba Workspace | **Baixo** — Limpeza de UI |
| [#7325](https://github.com/agentscope-ai/QwenPaw/pull/7325) | Testes | +382 casos de teste unitário no Console | **Médio** — Cobertura frontend |

**Destaque de produtividade:** A equipe de QA adicionou **+2857 casos de teste** em 24h, elevando a cobertura de código em +10pp cumulativo.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|-----|------|
| #7318 | QwenPaw Hub multi-tenant — o que construir? | Discussion | 24 | 4 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| #7579 | Modelo perde contexto entre requisições | Bug | 10 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7579) |
| #7177 | Otimizar página de deploy do platform | Feature | 9 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7177) |
| #7011 | Stop request cancela sessão Feishu ativa | Bug | 8 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7011) |

### Análise da Discussão Principal (#7318)

A discussão do **QwenPaw Hub multi-tenant** demonstra demanda clara da comunidade por:
- **Acesso multi-usuário** com gerenciamento centralizado
- **Skills administrativas** para times
- **Compartilhamento de agentes/configs** entre usuários

A issue está em discussão ativa há 16 dias, indicando que o roadmap do Hub está em definição. A equipe manifestou interesse em priorização colaborativa.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (Impacto em Produção)

| # | Título | Canal | Link |
|---|--------|-------|------|
| #7579 | Modelo não "vê" próprias respostas — contexto perdido | Console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7579) |
| #7662 | Telegram morre silenciosamente sob proxy | Telegram | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7662) |
| #7661 | Criação duplicada de sessões no Console | Console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7661) |

#### 🟠 Altos (Comportamento Incorreto)

| # | Título | Canal | Link |
|---|--------|-------|------|
| #7534 | Queue consumer trava — sessão Feishu não responde | Feishu | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7534) |
| #7642 | Streaming não renderiza no Chrome até completion | Console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7642) |
| #7672 | Security sandbox quebrado no Windows | Desktop/Win | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7672) |
| #7676 | `subagent_model` ignorado — subagentes usam modelo pai | Core | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7676) |

#### 🟡 Médios (Degradação Parcial)

| # | Título | Canal | Link |
|---|--------|-------|------|
| #7507 | WeCom streaming lento (150ms throttle) | WeCom | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7507) |
| #7668 | Mail monitor reprocessa INBOX inteiro | Email | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7668) |
| #7666 | HF download falha com modelos GGUF | Desktop | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7666) |

### Bugs Resolvidos Hoje
- **#7634:** ClawHub skill installation falhava com nomes duplicados → Closed
- **#7516 & #7370:** WeCom não enviava imagens Base64 → Fix em [#7647](https://github.com/agentscope-ai/QwenPaw/pull/7647)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentes (últimas 48h)

| # | Título | Complexidade | Link |
|---|--------|--------------|------|
| #7378 | **QwenPaw Mobile** — experiência nativa iOS/Android | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7378) |
| #7657 | Suporte a canal **ntfy** (push notifications self-hosted) | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7657) |
| #7656 | **Durable memory** entre sessões | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7656) |
| #7664 | Custom **memory model** para ReMe | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7664) |
| #4175 | Suporte **TLS/CA file** em MCP client | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4175) |
| #7671 | Auto-downscale imagens grandes no attach | Baixa | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7671) |
| #7670 | Syntax highlighting no Files panel | Baixa | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7670) |

### PRs em Review (Alto Potencial)

| # | Título | Status | Link |
|---|--------|--------|------|
| #5992 | Per-session model overrides | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5992) |
| #6960 | **PawPort** — import de Codex/Qoder para QwenPaw | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6960) |
| #7637 | QwenPaw-Data app 0.3.0 integration | Under Review | [Link](https://github.com/agentscope-ai/QwenPaw/pull/7637) |

**Sinais de roadmap:** A integração mobile (#7378) está em draft, sugerindo preparação para expansão de plataforma. PawPort indica estratégia de migração de usuários de ferramentas concorrentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade de canais** | Usuários Feishu/Telegram experimentam hangs silenciosos e perda de sessões | Alta |
| **Contexto de IA** | Modelo "esquece" próprias respostas em conversas | Crítica |
| **UX Mobile** | Operações de deploy inacessíveis em telas pequenas | Média |
| **Performance** | Streaming lento em WeCom prejudica experiência | Média |

### Cenários de Uso Reportados

1. **Deploy self-hosted:** Usuários esperam interface mobile-friendly para operações rápidas
2. **Teams/Enterprise:** Demanda por QwenPaw Hub multi-tenant com skills compartilhadas
3. **Integração push:** Preferência por ntfy.sh como alternativa a serviços cloud
4. **Economia de custos:** Desejo de usar modelos leves para operações internas (memória)

### Satisfação Geral
- **Aspectos positivos:** Flexibilidade de canais, capacidade de customização, comunidade ativa
- **Pontos de fricção:** Bugs de estabilidade em produção, gaps de documentação mobile

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >30 dias

| # | Título | Criado | Link |
|---|--------|--------|------|
| #3113 | Initial "team collaboration" instruction ignorada | 2026-04-08 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3113) |
| #3254 | Console: backend chat UUID missing em race conditions | 2026-04-10 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3254) |
| #4175 | TLS_verify e ca_file em MCP client | 2026-05-10 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4175) |

### Issues Estagnadas com Alto Impacto

| # | Título | Comentários | Link |
|---|--------|-------------|------|
| #4901 | Per-task model selection | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4901) |
| #5731 | model_switching issues | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5731) |

### Recomendações de Priorização

1. **#7579** — Bug crítico de contexto precisa de hotfix urgente
2. **#7662** — Telegram silencioso afetaprodutividade de usuários
3. **#4175** — Feature antiga com demanda de segurança TLS
4. **#7378** — Mobile draft precisa de feedback da equipe para advancement

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 18 |
| Issues fechadas | 10 |
| PRs abertos | 23 |
| PRs merged/fechados | 13 |
| Nova release | v2.2.1-beta.2 |
| Casos de teste adicionados | +2.857 |
| Cobertura gain | +10pp |

**Veredicto:** Projeto em **saúde ativa** com alta atividade de desenvolvimento e testes. Bug de contexto (#7579) requer atenção imediata. A discussão do Hub multi-tenant indica direcionamento estratégico para 2.3.0.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-11

---

## 1. Panorama do dia

O ecossistema ZeroClaw apresenta alta atividade de manutenção corretiva nesta data, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Nenhum novo release foi publicado, indicando um período de maturação antes da próxima versão. A carga de trabalho concentra-se em bugs de alta severidade — Windows compatibility (#7462), security issues (#8279, #9247), e instabilidade em canais críticos como Discord e Telegram. A comunidade demonstra engajamento significativo em issues com segurança e confiabilidade.

---

## 2. Lançamentos

**Nenhum novo release publicado nas últimas 24 horas.**

O último release estável referenciado nos dados é **v0.8.5**, conforme mencionado em #10765. O PR #10765 atualiza o SECURITY.md para refletir a política correta de versões suportadas, corrigindo uma referência desatualizada que ainda indicava `0.1.x` como linha suportada.

---

## 3. Progresso do Projeto

As PRs mais relevantes em andamento:

| PR | Autor | Tamanho | Descrição | Stack |
|----|-------|---------|-----------|-------|
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | vrurg | XL | `fix(tools): honor allowed roots for git operations` — Corrige绕过 allowed-roots para operações git | master |
| [#10565](https://github.com/zeroclaw-labs/zeroclaw/pull/10565) | tidux | M | `fix(zerocode): pin local Code sessions to process cwd` — Restaura diretório de trabalho para sessões Code locais | master |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | Audacity88 | XL | `fix(acp): persist interrupted turn progress` — Checkpoint de turnos ACP interrompidos | master |

**Destaque para PRs de segurança empilhados (#8289 stages 2-6):**

A série de PRs do contributor JordanTheJet avança a implementação do RFC #7141:

- [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) — Canonical principals e shared grant resolution
- [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) — OIDC token verification provider
- [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) — Enforce authenticated principals on RPC
- [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) — Compose principal tool selectors
- [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) — Principal-owned sessions
- [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) — Private principal memory
- [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) — Browserless OIDC enrollment
- [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) — Route-layer auth
- [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) — Retire Nevis/iam_policy
- [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) — Browser PKCE e cross-surface enrollment API

> ⚠️ **Nota**: Nenhuma das 50 PRs atualizadas nas últimas 24h foi merged ou fechada. Todas permanecem em estado OPEN, indicando ciclo de review ativo sem consolidação no master.

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (por comentários):**

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 19 | **74 test failures on Windows** — Falhas em path semantics, console encoding, comandos Unix-only |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 9 | Consolidação de mecanismos de release attestation (cosign, GitHub attestations, SLSA) |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 8 | Batch de media groups no Telegram |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 8 | Nextcloud Talk bot message API incorreta |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | 7 | Melhoria de cached Rust builds e CI critical path |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 7 | High-entropy detector redacting Solana wallet addresses |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 6 | Reconciliação cargo-audit ignores para wasmtime-wasi CVEs |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | 5 | Agentes param ao sair da janela de chat no web dashboard |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | 5 | web_fetch retornando garbage para respostas comprimidas (gzip, brotli) |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | 5 | Turnos ACP falhados desaparecem após troca de sessão |

**Análise**: O tema dominante é **compatibilidade cross-platform** (#7462, #8800), seguido por **segurança** (#8279, #9247, #9393, #9391) e **confiabilidade de canais** (Discord, Telegram, ACP). A comunidade demonstra preocupação crescente com attributions de custos e auditoria.

---

## 5. Bugs e Estabilidade

### Severidade S0-S1 (Críticos — workflow bloqueado / risco de perda de dados)

| Issue | Título | Componente | Status |
|-------|--------|------------|--------|
| [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell Tool Workspace Boundary Bypass | tools | accepted |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypasses parent's tool allowlist | tool:delegate | accepted |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky/Reddit sem sender authorization | channel:bluesky, reddit | in-progress |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Agentes param ao sair da chat window | web dashboard | in-progress |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Stopping agent apaga tool calls e thinking | runtime/daemon | accepted |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent jobs sem wall-clock timeout | cron | in-progress |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | emergency stop state file não é lido | CLI | in-progress |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Respostas terminais incompletas reportadas como sucesso | runtime/daemon | in-progress |

### Severidade S2 (Degradados — comportamento principal afetado)

| Issue | Título | Componente |
|-------|--------|------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | ci |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | High-entropy detector redacting Solana wallets | channel:telegram |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Config flush pode sobrescrever escritas concorrentes | runtime/daemon |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | CI runtime 15-20 min para pequenas mudanças | ci |
| [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) | Windows: processo zerado deixa porta bound | gateway/api |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | web_fetch retorna garbage para gzip/brotli | tool:web |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Redundância de mecanismos de release attestation | ci |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | Provider alias não é atualizado após model-routing | tools |

**Métricas de estabilidade**: 30 bugs P1 em aberto, múltiplos S0/S1 ativos. A base de código demonstra instabilidade em segurança, canais cross-platform, e gestão de sessões.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Enhancements em destaque:**

| Issue/PR | Título | Dominância | Observações |
|----------|--------|------------|-------------|
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Consolidar release attestation (3→1 mecanismo) | security | Redução de 53 para ~20 assets |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Melhorar cached Rust builds | ci | Reduzir CI de 15-20min |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | Run test suite em Windows e macOS | ci | Matriz de OS |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Native Hailo-Ollama support | provider | Novo provider hail_ollama |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | Entry-count rotation e multi-segment log queries | observability | Rotação por contagem de entradas |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | Carry live provider identity em usage events | agent | Atribution de custos por provider |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | Multimodal context meter sousestimates image-heavy requests | zerocode | Precisão de context tracking |

**Sinais de roadmap implícitos:**
1. **Segurança**: A série #8289 (RFC 7141) domina o pipeline de PRs, indicando foco em autenticação, principals, e isolamento de storage
2. **Observabilidade**: Logs estruturados com entry-count rotation (#10214), audit logging (#9391)
3. **Multi-provider**: Hailo-Ollama nativo, resolvedor de context window por provider (#8966)

---

## 7. Resumo de Feedback dos Usuários

**Dores reportadas:**

| Cenário | Problema | Severidade | Issue |
|---------|---------|------------|-------|
| Windows 11 Simplified Chinese | 74 testes falham, encoding incorreto | S2 | #7462 |
| Agente com Solana MCP | Endereços wallet sendo redatados | S2 | #9486 |
| Telegram multi-image | Múltiplas mensagens de saída para álbum | S2 | #5514 |
| ZeroCode em diretório específico | Sessões perderam cwd | S2 | #10565 |
| Web dashboard | Auto-scroll overriding scroll manual | S2 | #9562 |
| Discord | Typing indicator preso após reload | S3 | #9198 |
| WSL2 | RSS growth unbounded (OOM) | S1 | #8642 |

**Padrões identificados:**
- Usuários Windows enfrentam incompatibilidades significativas (encoding, path, CI)
- Usuários de canais (Discord, Telegram, Bluesky) reportam UX inconsistente
- Agentes de longa execução (cron jobs) carecem de timeouts e checkpointing

---

## 8. Backlog que Merece Atenção

**Issues sem activity recente (potencialmente stale):**

| Issue | Criado | Última Atualização | Título | Prioridade |
|-------|--------|---------------------|--------|------------|
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | 2026-07-03 | 2026-09-10 | RSS growth unbounded split from #5542 | P1 |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 2026-04-27 | 2026-09-10 | Nextcloud Talk wrong bot message API | P2 (blocked) |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 2026-04-08 | 2026-09-10 | Telegram media groups batching | P2 |

**Issues security-critical sem assigneu explícito:**

| Issue | Título | Risco |
|-------|--------|-------|
| [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell Tool Workspace Boundary Bypass | HIGH (S0) |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypasses parent's tool allowlist | HIGH (S0) |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky/Reddit sem sender authorization | HIGH |
| [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | Audit logging defaults enabled mas escreve nada | HIGH |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | emergency stop file não é lido | HIGH |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 50 | Alta atividade |
| PRs ativas (24h) | 50 | Alta atividade |
| Releases (24h) | 0 | Período de desenvolvimento |
| Bugs P1 em aberto | ~30 | Carga elevada |
| Security issues (P1) | 8+ | Atenção urgente |
| PRs stacked (RFC #8289) | 10 | Esforço de segurança massivo |
| Esteira de CI | ~15-20min | Requer otimização |

**Veredicto**: ZeroClaw apresenta saúde operacional moderada com dívida técnica significativa em segurança e compatibilidade cross-platform. O projeto demonstra evolução architecture consistente através das PRs de segurança empilhadas, mas precisa resolver bugs P1 críticos antes do próximo release estável.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-11.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*