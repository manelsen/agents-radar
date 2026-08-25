# Resumo diário do ecossistema de agentes de IA 2026-08-26

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-25 20:21 UTC

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

**Data:** 2026-08-26 | **Mantenedor:** nullclaw/nullclaw

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24h**, com apenas uma issue aberta registrada. Não houve movimentações em pull requests, merges ou releases. A issue ativa (#994) sugere avanços na arquitetura de edge computing doméstico, demonstrando que o projeto continua em evolução conceitual mesmo sem atividade intensa de código. O ecossistema permanece estável, sem sinais de regressões ou problemas críticos reportados.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões, binaries ou changelogs neste período.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #994 | **Household edge mesh using RuntimeAdapter workers and signed receipts** |
|-------|---------------------------------------------------------------------|
| **Status** | 🟢 Aberta |
| **Autor** | kvnloo |
| **Criação** | 2026-08-25 |
| **Comentários** | 0 |
| **Reações** | 0 |
| **Link** | [nullclaw/nullclaw#994](https://github.com/nullclaw/nullclaw/issues/994) |

**Resumo da Demanda:** A issue propõe utilizar as primitivas existentes do NullClaw (RuntimeAdapter, Peripheral vtables, Docker/WASM adapters, tunnels, channels) para construir um *household edge mesh*. O conceito envolve aproveitar PCs e laptops ociosos dos operadores como nós de computação distribuída, usando *workers* e *signed receipts* para garantir integridade e auditabilidade das operações.

**Análise:** Este é um tema arquitetural relevante que demonstra ambição do projeto além de simples automação doméstica. A proposta conecta-se com tendências de computação edge e mesh networking, sugerindo um roadmap potencialmente focado em escalabilidade distribuída.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24h.**

---

## 6. Pedidos de Features e Sinais de Roadmap

A issue #994 constitui o principal sinal de direção estratégica para o projeto. Os elementos mencionados como já existentes sugerem um stack tecnológico maduro:

- **RuntimeAdapter** e **Peripheral vtables** — Abstração para adaptadores de runtime
- **Docker/WASM adapters** — Suporte multiplataforma
- **Hardware discovery** — Detecção automática de recursos
- **Tunnels e channels** — Comunicação inter-nós
- **Strict size/memory goals** — Foco em eficiência

A proposta de *edge mesh* sinaliza interesse em **computação distribuída doméstica** como próximo vetor de evolução.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback explícito nas últimas 24h.** Não há comentários, Issues/PRs com interações da comunidade neste período. A falta de engajamento em comments/react pode indicar que a issue #994 ainda não foi amplamente avaliada pela comunidade.

---

## 8. Backlog que Merece Atenção

| Issue | Título | Idade | Status | Prioridade |
|-------|--------|-------|--------|------------|
| #994 | Household edge mesh using RuntimeAdapter workers and signed receipts | ~1 dia | 🟢 Aberta | ⭐⭐⭐ Alta (arquitetural) |

**Recomendação:** A issue #994, embora nova, apresenta escopo significativo e demanda avaliação dos mantenedores. Sem resposta ou triagem, há risco de o autor perder engajamento (zero comentários após ~1 dia).

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 1 | 🟡 Baixa |
| PRs ativas (24h) | 0 | 🔴 Estagnado |
| Releases (24h) | 0 | 🟡 Ausente |
| Feedback community | 0 | 🔴 Baixo |
| Bugs reportados | 0 | 🟢 Positivo |

**Veredicto geral:** Projeto em estado de baixa atividade. A ausência de PRs e releases merece atenção, embora a issue #994 sugira vida conceitual no roadmap.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-08-26 | **Escopo:** 7 projetos analisados

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. De um lado, **Hermes Agent, ZeroClaw e CoPaw** operam em regime de alta intensidade de desenvolvimento com 50+ items atualizados por dia, demonstrando comunidades ativas e pipelines de merge saudáveis. Do outro, **NullClaw e PicoClaw** ocupam um espectro de atividade baixa a moderada, com foco em propostas arquiteturais de longo prazo (edge computing) e correções pontuais de bugs.

Os projetos compartilham três desafios críticos: **segurança em ambientes multi-tenant** (ZeroClaw com cron jobs expostos, NanoBot com escape de sandbox, Hermes Agent com secrets em plaintext), **performance em sessões longas** (CoPaw com memory leaks e CPU spikes, PicoClaw com UI lag, IronClaw com MIME headers de 49KB custando 14s), e **integrações frágeis** (Telegram em múltiplos projetos, MCP com problemas de reconexão). A ausência quase total de releases neste período (apenas CoPaw com v2.1.1-beta.3) sugere que a maioria dos projetos está em ciclos de estabilização pré-release, potencialmente sinalizando uma convergência para releases major nos próximos meses.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Abertos | PRs Merged | Releases | Avaliação de Saúde |
|---------|--------------|-----------------|-------------|------------|----------|-------------------|
| **NullClaw** | 1 | 0 | 0 | 0 | 0 | 🔴 Estagnado — foco conceitual |
| **NanoBot** | 5 | 30 | 16 | 14 | 0 | 🟢 Saudável — alta taxa de closure (47%) |
| **Hermes Agent** | 50 | 50 | 47 | 3 | 0 | 🟡 Ativo, mas gargalo de review (44 issues acumuladas) |
| **PicoClaw** | 4 | 1 | 1 | 0 | 0 | 🟡 Baixo volume, PR pronto para merge |
| **IronClaw** | 38 | 28 | 15 | 13 | 0 | 🟢 Equilibrado — 48% de closure |
| **CoPaw** | 33 | 50 | 20 | 30 | 1 | 🟢 Mais maduro — release + 60% de merge rate |
| **ZeroClaw** | 50 | 50 | 49 | 1 | 0 | 🟡 Pipeline robusto, mas 1 PR merged indica gargalo |

**Observação:** Dados refletem snapshot de 24h. Atividade pontual pode não representar tendências de médio prazo.

---

## 3. Posicionamento dos Projetos de Destaque

### CoPaw (agentscope-ai/QwenPaw)

**Diferencial:** Único projeto com release formal no período (v2.1.1-beta.3), indicando maturidade no processo de versioning e capacidade de distribuição. Mantém a melhor taxa de merge (60%) entre os projetos de alta atividade, demonstrando capacidade de turnaround rápido em contribuições.

**Stack técnico:** Suporta Multi-channel (WeChat, QQ, desktop, web console), com self-improvement agent engine integrado. Default para MiniMax M3 como modelo.

### ZeroClaw (zeroclaw-labs/zeroclaw)

**Diferencial:** Foco explícito em segurança multi-tenant com PRs recentes de scoped ownership (#9746, #9745) e mTLS para transport layer (#10142). RFCs ativos sobre separação de storage de memória (#9103) sugerem arquitetura mais rigorosa que a média.

**Stack técnico:** Portabilidade de agentes via `zeroclaw agents export`, knowledge graph isolado por agente, ZeroRelay com blind relay e enrollment nativo de mTLS.

### Hermes Agent (nousresearch/hermes-agent)

**Diferencial:** Maior volume absoluto de atividade (100 items atualizados) e diversificação de componentes (agent, CLI, gateway, TUI, desktop, cron, plugins). Demonstra interesse em modularização com per-job model switcher e adaptive reasoning.

**Stack técnico:** Desktop app com session management, cronjob scheduler, browser provider integration, e skill-graph mode para descoberta dinâmica de capabilities.

### IronClaw (nearai/ironclaw)

**Diferencial:** Investimento estruturado em design system (3 fases documentadas) e CI/CD maduro (5 PRs de infraestrutura mergeados). Roadmap v1.4.0 claramente definido com épicos rastreáveis.

**Stack técnico:** Persistent per-user sandbox, durable notification inbox, Slack bridge em desenvolvimento.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança e Isolamento

A vulnerabilidade de sandbox e isolamento emerge como tema crítico em múltiplos projetos:

| Projeto | Bug/Feature | Severidade | Detalhes |
|---------|-------------|------------|----------|
| **NanoBot** | #5536 | P1 | ExecTool com escape via symlinks/shell expansion |
| **ZeroClaw** | #9947 | S0 | Cron jobs expostos cross-agent — qualquer agente acessa jobs de outros |
| **ZeroClaw** | #10334 | S1 | git_operations ignora allowed_roots |
| **Hermes Agent** | #94918 | Closed | Secrets salvos em plaintext no config.yaml |
| **Hermes Agent** | #94339 | P1 (merged) | Lógica invertida em stdio children liveness — fail-fast em servers MCP |

**Implicação:** O ecossistema ainda amadurecendo em práticas de sandboxing. Projetos novos ou de menor maturidade (NanoBot, ZeroClaw) apresentam gaps de segurança que exigem atenção imediata dos mantenedores.

### 4.2 Performance em Longas Sessões

Memory leaks e degradação de performance afetam pelo menos 3 projetos diretamente:

| Projeto | Sintoma | Impacto |
|---------|---------|---------|
| **CoPaw** | Memory leak 5.5MB/min | Processo killed após 64 minutos |
| **CoPaw** | SSE serialization loop | 100% CPU, crescimento ilimitado de memória |
| **PicoClaw** | UI lag com históricos extensos | Input do chat não responsivo |
| **IronClaw** | 49KB MIME headers → 14.3s inference | Turn de 19.7s total |

**Padrão identificado:** O crescimento de stateful sessions (conversas longas, históricos extensos) não está sendo tratado adequadamente em vários projetos, sugerindo ausência de estratégias de compaction ou offloading.

### 4.3 Integração com Canais Externos

**Telegram** aparece como denominador comum de problemas de UX:

- **IronClaw:** Device link fails com erro genérico (#7862), setup missing tool (#7853), guidance incorreta (#7887)
- **NanoBot:** rich_messages e streaming mutuamente exclusivos (#5516)
- **NanoBot:** Atribuição de mensagens de grupo incorreta (já corrigido em #5541)

**MCP (Model Context Protocol)** apresenta problemas de resiliência transversais:

- **PicoClaw:** Server hang causa agent loop freeze (#3269)
- **CoPaw:** Cliente não reconecta após backend restart (#6524)
- **Hermes Agent:** Lógica invertida de liveness (#94339)

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|-----------------|
| **Enterprise/Multi-tenant** | ZeroClaw, IronClaw | Isolamento robusto, scoped ownership, design system, Slack bridge |
| **Desenvolvedores Individuais** | NanoBot, Hermes Agent | Flexibilidade de provider, TUI/CLI maduros, cron/scheduling |
| **Consumidor/Embedded** | NullClaw, PicoClaw | Edge computing, worker mode, dispositivos de baixo custo |
| **Multi-canal/Asiático** | CoPaw | WeChat, QQ, desktop, web console — foco em mercado chinês |

### Por Arquitetura

**Paradigma distribuído vs. centralizado:**

- **NullClaw, PicoClaw** propõem edge mesh e worker mode — computação distribuída entre dispositivos
- **ZeroClaw** investe em blind relay e mTLS — segurança em transport layer
- **Hermes Agent** explora Reticulum como gateway descentralizado (LXMF) — comunicação sem servidor central

**Paradigma monolítico vs. modular:**

- **Hermes Agent** demonstra alta modularidade com componentes separados (agent, cli, gateway, tui, desktop, cron, plugins)
- **CoPaw** integra self-improvement engine e skill engine como capabilities nativas
- **ZeroClaw** propõe separação explícita de memory storage e enrichment connectors

### Por Estratégia de Provider

| Estratégia | Projetos | Implicação |
|------------|----------|------------|
| **Multi-provider nativa** | NanoBot (AnySearch, mst-python, Codex cache), Hermes Agent (xAI aliasing) | Flexibilidade, mas maior complexidade de manutenção |
| **Provider único default** | CoPaw (MiniMax M3), IronClaw (Nous) | Simplicidade, mas lock-in potencial |
| **Provider plugável** | ZeroClaw (skill registry), Hermes Agent (ollama, grok) | Extensibilidade sem complexidade padrão |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Tier | Projetos | PRs Merged/24h | Frequência de Releases |
|------|----------|----------------|------------------------|
| **🚀 Rápido** | CoPaw | ~30 | Beta releases frequentes |
| **⚡ Ativo** | NanoBot, Hermes Agent, IronClaw, ZeroClaw | 3-14 | Pré-release |
| **🐢 Lento** | NullClaw, PicoClaw | 0-1 | Estagnado ou puntiforme |

### Engajamento por Issue

| Projeto | Maior Engajamento | Tema | Comentários |
|---------|-------------------|------|-------------|
| **Hermes Agent** | #66616 | Skills index degradado | 96 comentários — infraestrutura crítica |
| **ZeroClaw** | #6808 | Work Lanes automation | 24 comentários — governança |
| **CoPaw** | #338 | Webhook feature | 9 comentários (177 dias) — feature request antiga |
| **PicoClaw** | #3281, #3269 | UI lag, MCP hang | 7 comentários cada — bugs用户体验 |

**Observação:** Hermes Agent apresenta o maior volume de discussão em issues (96 comentários em #66616), indicando comunidade engajada em troubleshooting operacional. ZeroClaw demonstra maturidade em processos com RFCs estruturados. CoPaw tem uma feature request com quase 6 meses de idade (#338) sem implementação — sinal de backlog não priorizado.

### Débitos Técnicos Identificados

| Projeto | Backlog Crítico | Idade | Risco |
|---------|-----------------|-------|-------|
| **CoPaw** | #338 Webhook | ~177 dias | Feature request pode perder relevância |
| **ZeroClaw** | #6613 Pairing code | ~3 meses | Accepted, aguardando implementação |
| **ZeroClaw** | #8309 SkillForge deprecation | ~2 meses | Decisão pendente |
| **NanoBot** | #5234 mst-python integration | ~23 dias | PR com conflitos |
| **Hermes Agent** | Skills index | 29.8h atrasado | Deploy workflow falhando |

---

## 7. Sinais de Tendência

### 7.1 Edge Computing Resididencial

Três projetos (NullClaw, PicoClaw, IronClaw) propõem independentemente arquiteturas de computação distribuída doméstica:

- **NullClaw #994:** Household edge mesh usando RuntimeAdapter workers e signed receipts
- **PicoClaw #3345:** Lightweight worker mode para RISC-V, ARM, Raspberry Pi, Android
- **IronClaw #7889:** RFC remote edge workers para scheduler

**Sinal de mercado:** A redundância de proposals similares em projetos não relacionados sugere demanda real por distribuição de carga de AI em dispositivos de baixo custo. Este é um vetor de diferenciação contra soluções cloud-only.

### 7.2 Multi-Agent e Multi-Tenant

ZeroClaw investe explicitamente em scoped ownership (#9746, #9745) e IronClaw em persistent per-user sandbox (#7732). NanoBot implementa subagent background mode. Hermes Agent avança em skill-graph com descoberta dinâmica.

**Sinal de mercado:** Transição de agentes únicos para ecossistemas multi-agente. Administradores querem rodar múltiplos agentes com isolamento completo — atualmente falho em cron jobs e knowledge graph em ZeroClaw, mas a direção é clara.

### 7.3 Slack como Superfície de Controle

IronClaw (#7871) e Hermes Agent (#82982) demonstram interesse em Slack como canal primário de interação, não apenas transporte. Proposta de Slack-to-console bridge com rich UX.

**Sinal de mercado:** Evolução de interfaces de chat para superfícies de controle operacionais. Slack como "dashboards conversacionais" para automação.

### 7.4 Modernização de Stack

ZeroClaw (#8132) avalia Rust/WASM vs React/Vite para UI, com objetivo de eliminar Node.js. CoPaw mantém Node.js mas investe em CI parallelization.

**Sinal de mercado:** Tendência de adoção de linguagens compiladas para performance de UI em agents desktop. Rust/WASM como destino arquitetural.

### 7.5 Provider Diversification

NanoBot implementa AnySearch (3 modos: API, MCP, Skill) e integração mst-python. Hermes Agent adiciona aliasing para xAI/Grok. ZeroClaw mantém skill registry plugável.

**Sinal de mercado:** Resistência a lock-in em providers de AI. Usuários querem flexibilidade para trocar entre OpenAI, Anthropic, xAI, modelos locais (Ollama), e provedores emergentes.

---

## Síntese para Decisores

| Dimensão | Recomendação |
|----------|--------------|
| **Adoção imediata** | CoPaw para projetos multi-canal (WeChat/QQ), NanoBot para flexibilidade de provider, IronClaw para design system maduro |
| **Watch list** | Hermes Agent para modularidade, ZeroClaw para segurança multi-tenant |
| **Exploratório** | NullClaw/PicoClaw para edge computing doméstico — conceito interessante, implementação imatura |
| **Evitar** | Projetos com issues de segurança P1/S0 abertas sem PR de correção (NanoBot exec sandbox, ZeroClaw cron scoping) |

---

*Relatório sintetizado a partir de 7 relatórios de projeto. Limitações: snapshot de 24h, dados fictícios com data de 2026-08-26, ausência de métricas históricas.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-26

---

## 1. Panorama do Dia

O projeto manteve um ritmo de desenvolvimento intenso em 26/08/2026, com **30 PRs atualizados** nas últimas 24h (16 abertos, 14 merged/fechados) e **5 issues ativas**. Nenhum release foi publicado. A atividade concentra-se em correções de bugs P2, melhorias de UX na WebUI/TUI e refatorações de estabilidade. O volume de PRs sugere um sprint ativo de preparação para próxima release, com forte foco em experiência de usuário e robustez.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em fase pré-release, com pipeline de correções e features em andamento. Recomenda-se monitorar a branch `main` para próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (14)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | fix(tools): keep find_files scans responsive | chengyongru | Otimização de performance — reduz latência em varreduras de arquivos com budget e cancelamento |
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | fix(telegram): attribute group messages to senders | dangzitou | Melhora experiência em grupos Telegram com fallback de nome (fecha #1091) |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | refactor(tui): clarify active composer actions | chengyongru | UI mais clara no composer da TUI |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | feat(tui): autocomplete skill references | chengyongru | Novo autocomplete para referências `$skill-name` na TUI |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | feat: add demand-driven document retrieval | chengyongru | `grep` agora retorna snippets contextuais e busca em PDF/DOCX/XLSX/PPTX |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | fix(agent): wait for exec sessions without polling | chengyongru | Renomeia tool para `exec_session`, adiciona controle `until_exit` e `timeout_ms` |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | fix(agent): wait for background subagents only at turn exit | chengyongru | Melhora gerenciamento de subagentes, mantém runner responsivo |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | fix(provider): stabilize Codex prompt cache routing | chengyongru | Estabiliza cache de prompts no Codex via identidade de sessão |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | style(tui): keep short transcripts and composer top-aligned | KailBug | UX consistente na TUI com transcripts curtos |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | feat(webui): add drag-and-drop session organization | bingqilinweimaotai | Reordenação de sessões por drag-and-drop na WebUI |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | fix(webui): project generated titles onto per-chat sessions | zpljd258 | Correção de títulos "Untitled" no sidebar da WebUI (fecha #5527) |

**Destaque:** O PR [#5533](https://github.com/HKUDS/nanobot/pull/5533) (P1) traz melhoria significativa de performance em `find_files`, com varredura em worker thread e orçamento de operações I/O.

---

## 4. Temas Quentes da Comunidade

### Issues com mais atividade

| # | Issue | Comentários | Título |
|---|-------|-------------|--------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | AnySearch web search provider | 3 | Enhancement para novo provedor de busca anônimo |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram rich messages + streaming | 1 | rich_messages e streaming mutuamente exclusivos |
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | missing import mask_session_key | 1 | Bug em loop.py ao processar query de cleanup |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | WebUI sidebar "Untitled" | 0 | unifiedSession causa títulos não resolvidos |

### Análise

- **Integração AnySearch (#5505):** Proposta externa de provider de busca com 3 modos (API, MCP, Skill). Recebeu 3 comentários, indicando interesse da comunidade em diversificar provedores de busca. [Ver Issue](https://github.com/HKUDS/nanobot/issues/5505)
- **Telegram UX (#5516):** Usuários solicitam compatibilidade entre `rich_messages: true` e `streaming: true`. Problema已知, com PRs complementares em andamento. [Ver Issue](https://github.com/HKUDS/nanobot/issues/5516)

---

## 5. Bugs e Estabilidade

### Issues Abertas

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | P2 | missing import de "mask_session_key" em autocompact.py | 1 comentário |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | P2 | Telegram: rich messages nunca renderizam com streaming | 1 comentário |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | P2 | WebUI sidebar títulos "Untitled" com unifiedSession | 0 comentários |

### PRs de Fix em Aberto

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | **P1** | fix(exec): fail closed when restricted shell lacks sandbox | **Segurança** — fecha #4072 |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | P2 | fix(tools): interpolate ToolLoader log context | Estabilidade de logging |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | P2 | fix(gateway): retry MCP readiness before turns | Confiabilidade MCP |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | P2 | fix(telegram): upgrade streaming preview to rich at stream end | UX Telegram |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | P2 | fix(webui): project titles under unifiedSession | UX WebUI |

**⚠️ Atenção P1:** O PR [#5536](https://github.com/HKUDS/nanobot/pull/5536) corrige vulnerabilidade em `ExecTool` onde comandos restritos podiam escapar via symlinks/shell expansion. **Recomendação: revisão e merge urgente.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Tags | Relevância |
|---|--------|------|------------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Add AnySearch como web search provider | enhancement | Integração de busca diversificada |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | WebUI: notificação sonora ao fim de turn | feature | UX — feedback auditivo opcional |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | feat(my): persist session focus across turns | enhancement | Continuidade de contexto (fecha #3292) |

### Features em Desenvolvimento (PRs Abertos)

| # | Título | Prioridade | Status |
|---|--------|------------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as metasearch provider | P1 | Em revisão, com conflict |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | feat(webui): drag-and-drop session organization | P2 | Merged |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | P2 | Em revisão |
| [#5519](https://github.com/HKUDS/nanobot/pull/5519) | fix(webui): compact single-pane chat header | P2 | Em revisão |

**Sinais de Roadmap:**
- Foco em **meta-search providers** (#5234 mst-python, #5505 AnySearch)
- **Experiência Telegram** é área recorrente de improvement
- **WebUI enhancements**: drag-drop, compact headers, notification sounds
- **Resiliência de sessão**: focus persistence, unifiedSession fixes

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **UX Telegram Inconsistente:** Usuários reportam que `rich_messages` não funciona com streaming, forçando escolha entre visual rico e resposta em stream. [Ver #5516](https://github.com/HKUDS/nanobot/issues/5516)

2. **Experiência WebUI com unifiedSession:** Quando `unifiedSession: true`, títulos de chat ficam "Untitled" no sidebar, prejudicando navegação. [Ver #5527](https://github.com/HKUDS/nanobot/issues/5527)

3. **Falta de Feedback Auditivo:** Usuários de WebUI não percebem quando agent completa tarefas longas — necessidade de notification sound. [Ver #5524](https://github.com/HKUDS/nanobot/issues/5524)

4. **Performance em find_files:** Varreduras de arquivos ficavam não-responsivas em workspaces grandes. Corrigido em [#5533](https://github.com/HKUDS/nanobot/pull/5533).

5. **Segurança em restricted shell:** Comportamento anterior permitia escape de sandbox via symlinks — vulnerability fechada em [#5536](https://github.com/HKUDS/nanobot/pull/5536).

### Cenários de Uso Observados

- **Agentes em grupos Telegram** precisam de identificação clara de remetentes
- **Sessões unificadas** requerem consistência entre backend e WebUI
- **Document retrieval** demanda busca em múltiplos formatos (PDF, DOCX, XLSX, PPTX)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| # | Idade | Título | Prioridade |
|---|-------|--------|------------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 2 dias | AnySearch web search provider | enhancement |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 1 dia | WebUI notification sound | feature |

### PRs com Conflitos/Sem Progresso

| # | Idade | Título | Status |
|---|-------|--------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | ~23 dias | feat(agent): integrate mst-python | P1, com conflict |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | ~29 dias | fix(subagent): mark partial completion results | regression, with conflict |

### Recomendação de Prioridade

1. **Urgente:** Revisar e merge do PR [#5536](https://github.com/HKUDS/nanobot/pull/5536) (P1 — segurança em exec sandbox)
2. **Alta:** Resolver conflitos em [#5234](https://github.com/HKUDS/nanobot/pull/5234) (P1 — integração mst-python)
3. **Média:** Resolver conflitos em [#5152](https://github.com/HKUDS/nanobot/pull/5152) (regressão de subagent)

---

## Métricas Consolidada — 2026-08-26

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 5 |
| PRs atualizados | 30 |
| PRs abertos | 16 |
| PRs merged/fechados | 14 |
| Releases | 0 |
| Bugs P1 em aberto | 0 (1 em PR) |
| Issues sem comentários | 2 (#5527, #5524) |

**Saúde Geral:** Projeto em atividade alta com boa taxa de closure. Foco em estabilidade (P1 security fix) e UX (Telegram, WebUI, TUI). Backlog de 2 PRs com conflitos requer atenção nas próximas 48-72h.

---

*Relatório gerado automaticamente com base em dados GitHub de HKUDS/nanobot em 2026-08-26.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-26

---

## 1. Panorama do Dia

O projeto **Hermes Agent** registrou **alta atividade** em 26/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O volume de atividade é intenso: 44 issues abertas contra apenas 6 fechadas, sinalizando um acúmulo de trabalho pendente. A comunidade está focada em **estabilidade de desktop e sessões**, com múltiplos bugs críticos relacionados a desconexões WebSocket, gestão de processos no Windows e sincronização de conversas em grupo. No lado de PRs, 3 alterações foram merged/fechadas (incluindo um fix P1 para MCP stdio), enquanto 47 permanecem abertas — um pipeline robusto, mas com potencial gargalo de revisão. A ausência de releases novas sugere que a equipe pode estar em ciclo de estabilização antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24 horas.**

O projeto não registrou novas versões entre 2025-08-25 e 2026-08-26. Isso representa uma **oportunidade de consolidação**: com 44 issues abertas acumuladas e múltiplos PRs de alta prioridade prontos para merge (incluindo o fix P1 #94339), a equipe pode estar preparando uma release corretiva. Recomenda-se monitorar os repositórios de release tags para identificação de marcos futuros.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (3 total)

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| **#94339** | [fix(mcp): un-invert stdio children liveness check](https://github.com/NousResearch/hermes-agent/pull/94339) | Corrige lógica invertida em `_stdio_children_dead()` que causava fail-fast em servers MCP stdio que geram processos filhos. P1 — correção crítica. | **Alto** — resolve crash em ferramentas MCP com spawn. |
| **#95019** | [fix(xai): alias reserved tool_search bridge](https://github.com/NousResearch/hermes-agent/pull/95019) | Resolve conflito de nome com API xAI, que rejeita `tool_search` reservado. Wrapper #95003. | **Médio** — restaura compatibilidade com Grok/xAI. |
| **#95011** | [fix(xai): alias reserved tool_search on chat completions](https://github.com/NousResearch/hermes-agent/pull/95011) | Variação complementar do fix acima para endpoint de chat completions. | **Médio** — cobre ambos os caminhos de API. |

### PRs Abertos de Alto Impacto

| # | PR | Componente | Prioridade | Destaque |
|---|-----|------------|------------|----------|
| **#82578** | [feat(agent): adaptive per-turn reasoning](https://github.com/NousResearch/hermes-agent/pull/82578) | agent, cli, gateway, tui | P3 | Adiciona `agent.adaptive_reasoning` com esforço dinâmico por turno. |
| **#94652** | [feat(desktop): per-job model switcher](https://github.com/NousResearch/hermes-agent/pull/94652) | cron, desktop | P3 | Expõe seletor de modelo na UI de cronjobs do Desktop. |
| **#94994** | [feat(plugin): automate PR repair and merge maintenance](https://github.com/NousResearch/hermes-agent/pull/94994) | plugins | P3 | Automação de manutenção de PRs governados. |
| **#50057** | [feat(skill-graph): bundled plugin and config](https://github.com/NousResearch/hermes-agent/pull/50057) | agent, plugins | P3 | Modo de descoberta dinâmica de skills via grafo. |
| **#95017** | [feat(cron): acked failure signatures](https://github.com/NousResearch/hermes-agent/pull/95017) | cli, cron | P2 | Incidentes duráveis com CLI de acknowledgement para cron. |
| **#95015** | [feat(desktop): macOS keychain opt-in](https://github.com/NousResearch/hermes-agent/pull/95015) | desktop | P2 | Remove prompt de keychain no launch — opt-in para encriptação. |
| **#95026** | [fix(agent): classify ACP session-limit as transient](https://github.com/NousResearch/hermes-agent/pull/95026) | agent | P2 | Classifica mensagens de limite de sessão como rate limits transientes. |
| **#95025** | [fix(browser): rebind stale provider daemons](https://github.com/NousResearch/hermes-agent/pull/95025) | browser | — | Rebind de daemons após expiração de sessão cloud. |
| **#95018** | [fix(desktop): Cronjob dialog não mostra '[object Object]'](https://github.com/NousResearch/hermes-agent/pull/95018) | desktop | P2 | Fix em diálogo de criação de cronjob para objetos roster. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Tema Central |
|---|--------|-------------|-----|--------|---------------|
| **#66616** | [Skills index is stale/degraded](https://github.com/NousResearch/hermes-agent/issues/66616) | **96** | 0 | OPEN | Infraestrutura: índice de skills 29.8h atrasado (limite 26h). Workflow de deploy falhando. |
| **#88584** | [Automated Nous integration blocked](https://github.com/NousResearch/hermes-agent/issues/88584) | **30** | 0 | OPEN | Integração CI/CD: merge Nous→Enterkey com conflitos em `cron/jobs.py`. |
| **#93888** | [Desktop sends wrong runtime ID to Remote Gateway](https://github.com/NousResearch/hermes-agent/issues/93888) | **8** | 0 | OPEN | Desktop stuck em "Session not found" ao restaurar sessões remotas. |
| **#92343** | [Shift+letter still leaks CSI text](https://github.com/NousResearch/hermes-agent/issues/92343) | **4** | **2** | OPEN | CLI: fix anterior #87511 incompleto — prompt_toolkit `self-insert` ignora mapeamento. |
| **#18964** | [Add Reticulum as message gateway](https://github.com/NousResearch/hermes-agent/issues/18964) | **3** | **2** | OPEN | Feature request: gateway descentralizado via LXMF (comunicação sem servidor central). |
| **#95003** | [xAI rejects tool_search function name](https://github.com/NousResearch/hermes-agent/issues/95003) | **1** | **2** | OPEN | Bug de compatibilidade xAI — função reservada pelo servidor. |

### Análise dos Temas Quentes

**🔴 Infraestrutura Crítica (#66616 — 96 comentários)**: O problema mais debatido é o índice de skills degradado, que afeta a documentação do Skills Hub. Com 96 comentários, a comunidade está ativamente debugando o workflow `.github/workflows/skills-index.yml`. Este é um **sinal de alerta** para a saúde operacional do projeto.

**🟡 Integração CI/CD (#88584 — 30 comentários)**: Bloqueio do merge automatizado entre branches Nous e Enterkey indica complexidade na pipeline de releases. A interação entre dashboard updater e release branches precisa de atenção.

**🔵 UX Desktop (#93888)**: Sessões não restauradas em gateways remotos gera frustração. multiple issues relacionadas (WebSocket, sessions, profiles) sugerem dívida técnica no módulo desktop.

**🟢 Feature Requests (#18964, #95003)**: Interesse da comunidade em gateways alternativos (Reticulum) e compatibilidade com provedores (xAI). Reações indicam demanda por diversificação de infraestrutura.

---

## 5. Bugs e Estabilidade

### Por Severidade (P1-P2显眼)

| # | Bug | Severidade | Componente | Descrição | Status |
|---|-----|------------|------------|-----------|--------|
| **#94988** | [stdio children dead logic inverted](https://github.com/NousResearch/hermes-agent/issues/94988) | **P1** | tools, mcp | Lógica de liveness invertida desde commit `786f37071a` — servidores MCP stdio com processos filhos falham em todas as chamadas. **Já com PR #94339**. | OPEN |
| **#94959** | [Bots/Profiles not terminated on delete](https://github.com/NousResearch/hermes-agent/issues/94959) | **P2** | desktop, profiles | `python.exe` acumula no Windows após deletar bots/perfis — memory/CPU leak. | OPEN |
| **#93888** | [Desktop sends local runtime ID to Remote Gateway](https://github.com/NousResearch/hermes-agent/issues/93888) | **P2** | desktop, sessions | Sessões permanentemente travadas em "Restore failed — Session not found". | OPEN |
| **#69940** | [WebSocket disconnects every ~17 min (code 1012)](https://github.com/NousResearch/hermes-agent/issues/69940) | **P2** | desktop, sessions | Desconexões periódicas orfanam sessões, que são colhidas por `ghost_session_prune_v1`. | OPEN |
| **#94978** | [HTTP 429 kills turn — no auto-resume](https://github.com/NousResearch/hermes-agent/issues/94978) | **P2** | agent, provider/nous | Provedor Nous em capacity retorna 429 e mata a vez sem backoff automático. | OPEN |
| **#94930** | [Shift+Space leaks raw CSI sequences](https://github.com/NousResearch/hermes-agent/issues/94930) | **P2** | cli | Modificadores de teclado não mapeados vazam sequências CSI-u cruas no CLI. | OPEN |
| **#94941** | [hermes doctor prints nothing on Windows](https://github.com/NousResearch/hermes-agent/issues/94941) | **P2** | cli, platform/windows | Seção Gateway Service ausente no Windows + documentação com interpretador errado. | OPEN |
| **#94945** | [per-profile timezone ignored](https://github.com/NousResearch/hermes-agent/issues/94945) | **P2** | agent, cron, profiles | `hermes_time` faz cache de timezone por processo, ignorando escopo `HERMES_HOME` por profile. | OPEN |
| **#94811** | [Session-scoped RPCs collapse to primary connection](https://github.com/NousResearch/hermes-agent/issues/94811) | **P2** | desktop, sessions, profiles | RPCs de sessão vão para conexão primária em vez da sessão específica quando duas conexões compartilham nome de profile. | OPEN |
| **#94933** | [Hindsight daemon fails under multiplexer](https://github.com/NousResearch/hermes-agent/issues/94933) | **P3** | plugins, memory, profiles | `UnscopedSecretError` quando `gateway.multiplex_profiles` está ativo — daemon não inicia. | OPEN |

### Regressões e Problemas Recorrentes

- **CLI TUI (#66978 — CLOSED)**: npm install em cada launch da TUI. Já resolvido (duplicate/performance fix).
- **Feishu Integration (#50656, #6889 — CLOSED)**: Mensagens de grupo nunca chegavam ao gateway. Corrigidos.
- **Security: Secrets Plaintext (#94918 — CLOSED)**: Dashboard salvava secrets resolvidos em plaintext no config.yaml. **Bug de segurança — verificar se foi patcheado**.
- **Terminal Tool Path Validation (#57955 — CLOSED)**: Bypass de proteção SOUL.md via shell commands. Requer revisão de segurança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (últimas 24h)

| # | Feature | Componente | P | Sinais de Demanda |
|---|---------|------------|---|-------------------|
| **#18964** | [Add Reticulum as message gateway](https://github.com/NousResearch/hermes-agent/issues/18964) | gateway | P3 | 2 👍. Comunicação descentralizada sem servidor central — demanda por resiliência. |
| **#93382** | [Adaptive explanation policy for interactive learning artifacts](https://github.com/NousResearch/hermes-agent/issues/93382) | agent | P3 | Política de renderização de artefatos interativos — resposta a #7191, #74334, etc. |
| **#93943** | [Architecture: Nothing Ambient Survives](https://github.com/NousResearch/hermes-agent/issues/93943) | agent, gateway, tui, desktop | P3 | Reforço de transições de autoridade em runtime agentico — hardening de segurança. |
| **#94484** | [Direct GUI-to-gateway channel tracking](https://github.com/NousResearch/hermes-agent/issues/94484) | desktop, dashboard | P3 | Remover "camada bolo" do dashboard — Desktop deveria falar direto com gateway. 3 fases. |

### Features em Desenvolvimento Ativo (PRs)

- **Adaptive per-turn reasoning** (#82578) — esforço dinâmico por turno sem classifier extra.
- **Skill-graph mode** (#50057) — descoberta dinâmica de skills via grafo.
- **Per-job model switcher** (#94652) — seletor de modelo na UI de cronjobs.
- **macOS keychain opt-in** (#95015) — segurança opcional sem prompts intrusivos.
- **Cron acked failure signatures** (#95017) — incidentes duráveis com ack CLI.
- **Discord owner notifications** (#82982) — notificações para prompts bloqueantes.
- **hermes doctor --json/--verbose** (#38823) — diagnosticos estruturados.

### Sinais de Roadmap

1. **Modularização de Desktop**: Issue #94484

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Data: 2026-08-26 | github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 26/08/2026, com 4 issues ativas e 1 pull request aberto nas últimas 24 horas. Não houve lançamentos de novas versões. A comunidade demonstra engajamento ativo em 3 bugs reportados (web UI, MCP server, Slack media) e uma proposta interessante de modo *worker* leve para dispositivos de borda. O PR #3340 propõe correção direta para o bug de upload de mídia no Slack, indicando foco em estabilidade de integrações.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. A versão mais recente disponível continua sendo a **0.3.1**, mencionada no issue #3281.

---

## 3. Progresso do Projeto

### PRs Abertos

| # | Título | Autor | Atualização | Status |
|---|--------|-------|-------------|--------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | octavioturra | 2026-08-25 | ABERTO |

**Análise:** O PR #3340 ataca diretamente o bug documentado em [#3338](https://github.com/sipeed/picoclaw/issues/3338). A correção adiciona o campo `FileSize` ao `slack.UploadFileParameters`, permitindo que a API `files.upload.v2` do Slack aceite uploads de imagem. Este é um PR de **baixa complexidade** com **impacto direto** na funcionalidade Slack.

**Potencial de merge:** Alto — o autor do bug (#3338) é o mesmo autor do PR, indicando compreensão clara do problema.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|-----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy | 7 | 1 | Bug (crítico) |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server hang → agent loop freeze | 7 | 1 | Bug (crítico) |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Proposal: lightweight worker mode | 0 | 0 | Feature Request |

### Análise das Demandas

**#3281 e #3269** lideram em engajamento com **7 comentários cada**, indicando que:
- A comunidade está ativamente depurando problemas de **performance da Web UI** com históricos de chat extensos
- Há preocupação com **falhas em integrações MCP** que causam travamento completo do chat

**#3345** representa uma proposta estratégica para **extensão de dispositivos suportados** (RISC-V, ARM, Raspberry Pi, Android). Embora sem comentários ainda, é um sinal relevante de direção de produto.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (4 issues)

| Severidade | # | Descrição | Status | Atualização |
|------------|---|-----------|--------|-------------|
| **🔴 Alta** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Loop de agente trava quando servidor MCP falha | ABERTO | 2026-08-25 |
| **🔴 Alta** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input no chat web fica lagado com histórico longo | ABERTO (stale) | 2026-08-25 |
| **🟡 Média** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack não anexa imagens (FileSize = 0) | ABERTO | 2026-08-25 |

### Análise Crítica

1. **Bug #3269 (MCP hang)** — Problema de **resiliência**: falhas em serviços externos causam indisponibilidade total. Requer implementação de timeouts, circuit breakers ou retry logic.

2. **Bug #3281 (UI lag)** — Problema de **performance**: indica possível O(n²) ou renderização ineficiente ao manipular estados de chat. Afeta diretamente a experiência do usuário.

3. **Bug #3338 (Slack media)** — Problema de **integração**: bug tipicamente simples (campo faltante), com PR #3340 pronto para correção.

**Nota:** Issues #3281 e #3338 estão marcadas como `stale`, sugerindo necessidade de triagem da equipe de maintainers.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Proposta

**[#3345](https://github.com/sipeed/picoclaw/issues/3345) — Proposal: lightweight PicoClaw worker mode for household edge compute**

| Aspecto | Detalhe |
|---------|---------|
| **Autor** | kvnloo |
| **Criadon** | 2026-08-25 |
| **Comentários** | 0 |

**Resumo da proposta:**
- Extender PicoClaw para rodar em **dispositivos de baixo custo**: RISC-V/ARM/MIPS, Raspberry Pi, Android antigo
- Criar **modo worker leve** com ~10-20 MB de memória
- Permitir **distribuição de carga** entre dispositivos fracos e PCs mais fortes

**Sinais de mercado:** Esta proposta alinha PicoClaw com tendências de **AI distribuída edge computing**, diferenciando-o de soluções que exigem hardware robusto.

**Potencial de roadmap:** Considerando o momento (dia 1, sem comentários), é necessário feedback da comunidade para avaliar viabilidade técnica e demanda real.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Impacto | Frequência |
|-----|---------|------------|
| Chat web lento com históricos grandes | Experiência degradada | Relatado por múltiplos usuários (#3281) |
| Agente trava completamente em falhas MCP | Indisponibilidade total | 1+ usuário (#3269) |
| Upload de imagens no Slack falha | Funcionalidade quebrada | 1+ usuário (#3338) |

### Cenários de Uso Identificados

1. **Uso via Web UI** — Usuários interagem via interface web com históricos de conversa extensos
2. **Integração MCP** — Agentes se conectam a servidores MCP externos para ferramentas
3. **Integração Slack** — Canal corporativo para comunicação de agentes

### Satisfação Geral

**Indeterminado** — Não há métricas de satisfação direta. No entanto, o engajamento ativo (bugs reportados com detalhes de reprodução) sugere uma **comunidade engajada** disposta a colaborar na identificação de problemas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale

| # | Título | Criado | Atualizado | Dias inativo |
|---|--------|--------|------------|--------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat laggy | 2026-07-21 | 2026-08-25 | ~35 dias |
| [#3340](https://github.com/sipeed/picoclaw/issues/3340) | fix(slack): FileSize | 2026-08-17 | 2026-08-25 | ~9 dias |

### Priorização Recomendada

1. **🔴 Prioridade 1 — #3269 (MCP hang):** Bloqueia uso em produção com integrações externas
2. **🔴 Prioridade 2 — #3281 (UI lag):** Afeta UX diariamente; issue antiga sem triagem
3. **🟡 Prioridade 3 — #3340/#3338 (Slack):** PR pronto; precisa de review e merge
4. **🟢 Prioridade 4 — #3345 (Worker mode):** Oportunidade estratégica; requer discussão

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged | 0 |
| Releases | 0 |
| Comentários totais (issues) | 16 |

---

*Relatório gerado automaticamente em 2026-08-26 | Fonte: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-08-26

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 26 de agosto de 2026, com 38 issues e 28 PRs atualizados nas últimas 24h. A equipe demonstra foco intenso em três frentes principais: (1) o programa de Design System em fases múltiplas, (2) correções de estabilidade no agente e ferramentas de extensão, e (3) melhorias na infraestrutura de CI/CD. Não há releases formalizadas, indicando que o projeto está em ciclo de maturação antes de um próximo lançamento. A relação de PRs abertos/fechados (15/13) sugere fluxo de merge saudável, embora alguns PRs de refatoração aguardem revisão. A atividade massiva de issues sobre UX, notificações e performance indica preparação para a versão v1.4.0.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões. O roadmap atual sugere que a v1.4.0 está em desenvolvimento ativo, com múltiplos épicos追踪 (#7732, #7781, #7687) marcados para essa versão. Quando uma release for cortada, espera-se que inclua: persistent sandbox por usuário, design system phases 1-3, e inbox de notificações durável.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (Hoje)

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#7846](https://github.com/nearai/ironclaw/pull/7846) | refactor(notifications): retire legacy approval fallback | notifications | Remove compatibilidade legada e consolida inbox durável como fonte única |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) | feat(webui): add refresh and connect entries to OOBE suggestion drawer | webui | Melhora onboarding com ações de refresh e connect no drawer de sugestões |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) | fix(extensions): restore device-link guidance | extensions | Restaura instrução de link de dispositivo na instalação/ativação |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | ci: nextest test pipeline, full-failure signal | ci | Reduz wall clock dos testes e dá sinal de falha completo |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | ci: PR/queue check convergence | ci | Elimina 3 classes de falhas de queue-only e adiciona checks em PR time |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | feat(subagent): background mode slices 2b+2c | agent | Producer half de subagents em background mode |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | ci: canonical preflight | ci | Script único determinístico para gates de pre-push e CI |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) | test: scope-isolation suite consolidation probe | ci | Sonda de follow-up para consolidação de testes de isolamento |

**Destaque**: O cluster de PRs de CI (#7817, #7819, #7809) representa investimento significativo em DX e confiabilidade do pipeline, indicando maturidade operacional.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox with iron-proxy | 9 | Arquitetura de sandbox persistente |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic: Design System Phase 1 — Storybook | 3 | Design system e catálogo |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Device link fails with generic error | 3 | Bug de UX no link Telegram |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | perf(extensions): 49KB MIME headers custam 14.3s | 2 | Performance de inference |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram setup missing tool | 2 | Funcionalidade incompleta Telegram |
| [#7887](https://github.com/nearai/ironclaw/issues/7887) | Extension lookup improvises device-link setup | 1 | Flow de setup de extensões |

**Análise**: O épico #7732 (sandbox persistente) domina a discussão com 9 comentários, sinalizando debate arquitetural significativo. Os problemas de Telegram (#7862, #7853, #7887) indicam que a integração com Telegram está com problemas de usabilidade que afetam usuários reais.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Alta Severidade (Medium-High Risk)

| # | Título | Escopo | Descrição |
|---|--------|--------|-----------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | perf: 49KB MIME headers → 14.3s inference | performance | Payload não projetado de capabilities causa 19.7s de turn com inference dominando |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | bug(agent-loop): deferred tool invoked 15x, 123s run | agent-loop | Loop infinito de tool calls sem guarda de terminação |
| [#7888](https://github.com/nearai/ironclaw/issues/7888) | Getting logs hangs indefinitely | stability | Operações de log travam infinitamente em múltiplas instâncias |

#### 🟡 Média Severidade

| # | Título | Escopo | Descrição |
|---|--------|--------|-----------|
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Device link fails with generic error | extensions | Link Telegram falha com mensagem genérica quando api_id/hash não configurados |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram setup missing tool | telegram | Setup Telegram não consegue completar link de conta pessoal |
| [#7887](https://github.com/nearai/ironclaw/issues/7887) | Extension lookup improvises device-link guidance | extensions | Fluxo de extensão oferece guidance incorreta para device link |

**Observação**: Há padrão de bugs relacionados a Telegram e device linking. O PR #7861 fechou um desses problemas, mas issues relacionadas permanecem abertas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Hoje)

| # | Título | Escopo | Potencial Impacto |
|---|--------|--------|-------------------|
| [#7893](https://github.com/nearai/ironclaw/issues/7893) | feat(memory): per-automation lessons file | automation | Lições aprendidas por automação persistem entre execuções |
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | RFC: remote edge workers para scheduler | infrastructure | workers distribuído geograficamente |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | Voice-to-text in WebUI composer | webui | Entrada de voz no composer web |
| [#7871](https://github.com/nearai/ironclaw/issues/7871) | Epic: Slack-to-console bridge + rich Slack UX | slack | Slack como superfície de controle rica |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed personal/team agents | slack | Fase 1 de Slack como canal |

### Roadmap Confirmado (v1.4.0)

- **#7732** — Persistent per-user sandbox com iron-proxy
- **#7781** — Design System Phases 2-3 (DESIGN.md governance + theme reskin)
- **#7687** — Generalize WebUI notification center → durable inbox

**Sinal de produto**: A quantidade de issues de UX/webui (Onboarding, Notification Center, Design System) indica foco em experiência de usuário para próxima release.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Impacto |
|-----|----------|---------|
| **Setup Telegram quebrado** | #7853, #7862, #7887 | Usuários não conseguem completar link de conta pessoal Telegram |
| **Performance de email tools** | #7891 | 14-19s por operação Gmail,用户体验 severamente degradado |
| **Loop infinito do agente** | #7892 | Runs de 79-123s sem progresso, desperdício de recursos |
| **Logs travam** | #7888 | Operações de debugging bloqueadas |
| **i18n incompleto** | #7870 | 13 strings OOBE + botões common em inglês em 10 locales |

### Cenários de Uso Observados

1. **Automação scheduled**: Usuários querem que lições aprendidas persistam entre fires (#7893)
2. **Operação via Slack**: Demanda por Slack como superfície de controle, não só transporte (#7871, #4625)
3. **Voice input**: Composer web é keyboard-only, usuários querem falar (#7867)
4. **Remote workers**: Operadores querem workers distribuído geograficamente (#7889)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Estado | Ação Recomendada |
|---|--------|--------|--------|-----------------|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed agents | 2026-06-09 | OPEN, 1 comentário | Roadmap confirmado em #7871, unificar tracking |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | IronHub agent link surface | 2026-08-12 | OPEN | PR aberto há ~2 semanas, precisa review |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | OMP core-tool contract | 2026-08-11 | OPEN | PR XL aberto há ~2 semanas, dependência para features |
| [#7737](https://github.com/nearai/ironclaw/pull/7737) | Slack docs fix | 2026-08-19 | OPEN | Correção de drift, deveria ser quick merge |
| [#7826](https://github.com/nearai/ironclaw/pull/7826) | Hub packages install | 2026-08-23 | OPEN | Afeta 4 catalog entries quebrados |

### Conhecimento Institucional

O projeto demonstra saúde de engenharia com:
- CI/CD maduro (5 PRs de infraestrutura de CI mergeados recentemente)
- Design system em programa estruturado de 5 fases
- Sistema de notificações em transição para modelo durável

**Recomendação**: Priorizar review dos PRs #7737 (quick win de docs) e #7516/#7491 (features desbloqueantes) para manter momentum.

---

*Relatório gerado automaticamente para nearai/ironclaw em 2026-08-26. Dados: 38 issues, 28 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)
## Data: 2026-08-26

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 26/08/2026, com 33 issues e 50 PRs atualizadas nas últimas 24h. A equipe mantém um ciclo de releases acelerado com a recém-publicada **v2.1.1-beta.3**. O volume de PRs fechados (30) supera significativamente os abertos (20), indicando forte capacidade de merge e review. Observa-se foco em **estabilidade** com múltiplos bugs críticos reportados (memory leaks, SSE loops, performance degrades) e em **melhorias de DX** com PRs de testes e CI. A comunidade demonstra engajamento activo com issues de features e UX bem documentadas.

---

## 2. Lançamentos

### ✅ v2.1.1-beta.3 Released

| Item | Detalhes |
|------|----------|
| **Versão** | v2.1.1-beta.3 |
| **Link** | [Release v2.1.1-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3) |

**Changes incluidos:**
- **chore(console):** Pin `@agentscope-ai/chat` para versão 1.1.72 ([PR #7257](https://github.com/agentscope-ai/QwenPaw/pull/7257)) — contribuição de @zhaozhuang521
- **docs(loop-engineering):** Correção de `PluginAPI` → `PluginApi` casing ([PR #7269](https://github.com/agentscope-ai/QwenPaw/pull/7269)) — contribuição de @c020627
- **test(integration):** Expansão de testes de integração (truncado nos dados)

**Breaking Changes:** Nenhuma identificada nesta release.
**Notas de Migração:** Não aplicável para beta.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (24h)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|--------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | chore | Bump agentscope para 2.0.7 | Dependência atualizada |
| [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) | feat | Self-evolution skill - Self-improving AI agent engine | Feature de auto-aperfeiçoamento |
| [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414) | feat | Decouple skill SOP and judgement rules | Flexibilidade para usuários |
| [#1228](https://github.com/agentscope-ai/QwenPaw/pull/1228) | feat | Add read_media tool (image/video/audio) | Ferramenta multi-formato |
| [#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525) | fix | Isolate invalid persisted cron schedules | Resiliência do sistema |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | feat | Add MiniMax M3 como default | Novo modelo default |
| [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) | fix | Distinguish offload vs cancel | Previne kill acidental |
| [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) | fix | Embedding use_dimensions toggle | Compatibilidade API |

### PRs em Review/Abertos com Prioridade

| PR | Tipo | Descrição | Status |
|----|------|-----------|--------|
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | fix | Reject conflicting chat payloads | Aberto - first-time-contributor |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | feat | Split CI tests em 3 shards paralelos | Aberto |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | test | +19 unit test files (+5.02pp coverage) | Aberto |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | feat | Session-level thinking modes (Off/Low/Medium/High) | Aberto |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | fix | Create master key with owner-only permissions | Aberto - Security |
| [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) | feat | Opt-in image resizing by pixel limit | Aberto |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Reações | Título | Link |
|-------|------|-------------|---------|--------|------|
| #338 | enhancement | 9 | 1 | [Feature] 建议添加webhook功能 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #7258 | bug | 6 | 0 | WeChat "显示思考过程"设置无效 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) |
| #6524 | bug | 6 | 0 | MCP后端重启后客户端无法自动恢复 | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) |
| #5720 | bug | 5 | 0 | Memory leak v1.1.12.post2 | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) |
| #6810 | bug | 5 | 0 | Windows安装覆盖文件报错 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) |
| #6273 | bug | 4 | 0 | Task tracking e same-session concurrency | [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) |
| #7261 | bug | 4 | 0 | SSE serialization loop (100% CPU) | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) |

### Análise de Demandas

**🔴 Alta Prioridade (Webhooks - #338):**
- Feature request com maior engajamento (9 comentários, "good first issue")
- Integração com sistemas externos via webhook
- Usuário propõe duas abordagens: callback ou polling com key

**🟡 UX/UI (WeChat - #7258):**
- Setting "显示思考过程" não funciona no canal WeChat
- Usuário reportando há 2 dias com 6 comentários

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (Alta Severidade)

| Issue | Descrição | Impacto | Link |
|-------|-----------|---------|------|
| #7261 | SSE serialization loop - 100% CPU, memory growth unbounded | **Servidor totalmente unresponsive** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) |
| #7285 | Long conversation performance degrade | **Browser freezes** | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) |
| #7259 | Stuck in "Thinking" state + memory increase (Windows) | **Aplicação congela** | [#7259](https://github.com/agentscope-ai/QwenPaw/issues/7259) |
| #7298 | OpenSSL 3.0.x TLS handshake resets | **Conexões falham em certas redes** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) |
| #5720 | Memory leak - 5.5MB/min growth | **Process killed após 64min** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) |

### 🟠 Bugs Médios

| Issue | Descrição | Link |
|-------|-----------|------|
| #6524 | MCP restart não reconecta automaticamente | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) |
| #7218 | "peer closed connection" em long responses | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) |
| #6810 | Windows installer - processos travam atualização | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) |
| #7296 | OpenAI Responses multi-turn fails with 400 error | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) |
| #7288 | Large MCP results bypass scroll compaction | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) |
| #7291 | QwenPaw Creator - erro ao puxar projeto | [#7291](https://github.com/agentscope-ai/QwenPaw/issues/7291) |

### 🟢 Bugs Menores/UI

| Issue | Descrição | Link |
|-------|-----------|------|
| #7258 | WeChat - "显示思考过程" não respeita setting | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) |
| #7228 | App store - botão "安装" mesmo após instalado | [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) |
| #7282 | Markdown lists excessive vertical spacing | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) |
| #7264 | Channel contract checks não portable (Windows encoding) | [#7264](https://github.com/agentscope-ai/QwenPaw/issues/7264) |
| #7266 | subAgent procura em pasta errada | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🆕 Novas Features Propostas

| Issue | Título | Descrição | Link |
|-------|--------|-----------|------|
| #338 | Webhook功能 | Integração via webhook/callback | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #7182 | Workspace-scoped Skill preload | Carregar skills específicas por workspace | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) |
| #7013 | Unified tool panel + web preview + terminal | Painel unificado no Chat | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) |
| #7196 | Collapsible thinking process por default | Toggle de collapsed por padrão | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) |
| #7287 | Zero-intrusion skin gateway | Arquitetura de temas flexível | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) |
| #7280 | Auto-clear completed background tasks | Limpeza automática | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) |
| #7279 |弹窗让用户点选 (em vez de input) | Melhor UX em multi-opções | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) |
| #7263 | Task completion visual indicator (orange) | Feedback visual de conclusão | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) |
| #7256 | Renomear "市场" → "应用" | Nomenclatura mais intuitiva | [#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256) |

### Sinais de Roadmap Identificados

1. **Performance & Estabilidade**: Múltiplos bugs de memory/CPU indicam foco em optimização
2. **Personalização**: Themas/skins e configurações de UI em alta demanda
3. **Integração**: Webhooks, MCP improvements, e integrações externas
4. **UX**: Thinking process controls, task management, e multi-turn improvements

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Problema | Frequência | Severidade |
|-----------|----------|------------|------------|
| **Performance** | Longas conversas causam freeze/卡顿 | 4 issues | 🔴 Alta |
| **Memory** | Leaks e crescimento ilimitado | 3 issues | 🔴 Alta |
| **Windows** | Installer/update travando | 2 issues | 🟠 Média |
| **MCP** | Reconexão após restart | 2 issues | 🟠 Média |
| **WeChat** | Settings não funcionam | 1 issue | 🟢 Baixa |

### Cenários de Uso Reportados

- **Desenvolvimento de Agentes**: Workspace com skills específicas, debugging de agent runs
- **Integração Corporativa**: MCP queries em análise de dados, telemetry
- **Multi-canal**: WeChat, QQ, desktop, web console
- **Long-duration tasks**: Background tasks, cron jobs, agent-to-agent communication

### Satisfação/Insatisfação

**🟢 Positivo:**
- Feature de self-improvement (#2773) bem recebida
- MiniMax M3 como default (#4881) - novo modelo flagship
- Read_media tool (#1228) - ferramenta multi-formato útil

**🔴 Crítico:**
- Performance degrades em long sessions (#7285, #7129, #7261)
- Memory leaks persistindo (#5720, #7259)
- UI inconsistencies (market button, thinking display)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 7 dias

| Issue | Criado | Dias | Título | Link |
|-------|--------|------|--------|------|
| #338 | 2026-03-02 | ~177 | Webhook feature | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #6273 | 2026-07-20 | ~37 | Task tracking semantics | [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) |
| #6524 | 2026-07-28 | ~29 | MCP auto-reconnect | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) |

### Issues com Alto Impacto, Baixa Atenção

| Issue | Impacto | Comentários | Status | Link |
|-------|---------|-------------|--------|------|
| #338 | Integração externa | 9 | OPEN | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| #7182 | UX/Performance | 4 | OPEN | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) |
| #6810 | Windows UX | 5 | OPEN | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) |

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 33 | — |
| PRs atualizados (24h) | 50 | ↑ |
| Taxa de resolution (issues) | 42% (14/33) | — |
| Taxa de merge (PRs) | 60% (30/50) | — |
| Novas releases | 1 | — |
| Bugs críticos abertos | 5 | ⚠️ |
| Features em review | 9 | — |

---

**Próximos Passos Recomendados:**
1. Priorizar fixes de performance/memory (#7261, #7285, #5720)
2. Revisar backlog #338 (webhook) - alta

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-26

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24h, evidenciando um ciclo de desenvolvimento intenso. Não houve releases registradas no período, sugerindo foco em integração e maturação de contribuições pendentes. A governance e arquitetura emergem como temas dominantes: dois RFCs estruturais (#9103, #6808) concentram 38 comentários combinados, sinalizando debates ativos sobre separación de storage de memória e automação de work lanes. O pipeline de segurançarecebe atenção prioritária com múltiplas issues P1/P2 em progresso, incluindo vulnerabilidades críticas em cron jobs e git_operations.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O milestone v0.9.0 permanece em construção ativa conforme tracker #7432, que coordena auth hardening, gateway boundaries e breaking changes. Recomenda-se monitorar o milestone page como fonte de verdade para a发布日期 estimada.

---

## 3. Progresso do Projeto

### PRs Recentemente Fechados/Merged

O período registrou **1 PR merged/fechado** nos dados fornecidos. A atividade concentra-se em **49 PRs em estado aberto**, sinalizando um pipeline robusto de contribuições:

| PR | Autor | Escopo | Impacto |
|----|-------|--------|---------|
| [#10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236) | Audacity88 | Bound daemon capture logs | Segurança critical desktop |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | SheaHawkins | Agent export para bundle portátil | Portabilidade multi-install |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | IftekharUddin | Per-agent ownership scoping | Isolamento multi-tenant |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | IftekharUddin | Per-agent attribution no knowledge graph | Segurança knowledge base |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | JordanTheJet | ZeroRelay secure transport c/ mTLS | Infraestrutura relay |

### Destaques de Avanço

- **Isolamento multi-agente**: PRs #9746 e #9745 abordam scoped ownership para session tools e knowledge graph, mitigando acesso cruzado não autorizado
- **Segurança transport layer**: #10142 implementa blind relay com native mTLS enrollment, superseding #9080
- **Portabilidade**: #9986 introduz `zeroclaw agents export`, facilitando migração entre installs
- **UX TUI**: #10078 adiciona Option-Backspace para previous-word deletion no ZeroCode

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Tipo | Relevância |
|---|--------|-------------|------|------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 24 | Governance | Roteamento de trabalho |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs | 14 | Governance | Priorização |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC: separate memory storage | 14 | Architecture | Separacao storage/enrichment |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Session-persistence contract | 11 | Architecture | Clarificacao ownership |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Evaluate Rust/WASM web UI prototype | 9 | Dev/UI | Eliminacao Node.js |

### Análise de Demandas

**Governance e Processo (38 comentários combinados):**
Os RFCs #6808 e #8692 dominam a discussão, evidenciando maturidade organizacional. A comunidade debate:
- Automação de work lanes para reduzir trabalho manual de mantenedores
- Queues formalizados para decisões de design
- Label cleanup para melhor discoverability

**Arquitetura Técnica (25 comentários):**
- #9103 propõe separar authoritative memory storage de enrichment connectors
- #9600 busca ownership clareza em contracts de session persistence
- #10346 (RFC) questiona duplicação de MCP-registry-caching entre Gateway e channels

**Modernização do Stack (9 comentários):**
- #8132 avalia Rust/WASM vs React/Vite para UI, alinhado ao roadmap de eliminar Node.js

---

## 5. Bugs e Estabilidade

### Issues Críticas (P1) — Requerem Atenção Imediata

| # | Severidade | Título | Status | Risco |
|---|------------|--------|--------|-------|
| [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) | **S0** | Cron tools sem scoping — qualquer agente pode acessar jobs de outros | **In Progress** | **HIGH** |
| [#10334](https://github.com/zeroclaw-labs/zeroclaw/issues/10334) | **S1** | git_operations ignora allowed_roots | **Open** | **HIGH** |
| [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) | **S1** | MSRV CI job timeout em apt_install | **In Progress** | **MEDIUM** |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | **S2** | Hardening de test fixtures sob parallel runtime gate | **In Progress** | **MEDIUM** |

### Bugs em Progresso

| # | Severidade | Título | Área |
|---|------------|--------|------|
| [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) | S2 | ZeroCode file explorer search ignora navegação | zerocode/tui |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | S2 | Streams تبدو como payloads para modelos locais | agent/ollama |
| [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | S3 | Misalignment de labels em Francês/Espanhol | zerocode/tui |

### Análise de Estabilidade

**Preocupações críticas:**
- **#9947**: Vulnerabilidade de isolamento em multi-agent — cron jobs expostos cross-tenant. PR #9746 endereça parcialmente via SessionOwnershipScope
- **#10334**: git_operations ignora allowed_roots, potencialmente permitindo escape de workspace

**Tendente a regressões:**
- #9663 (Voice Wake binding) e #10257 (cron update column) foram fechados — monitorar regressão

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aceitas com Status Active

| # | Feature | Prioridade | Tracking |
|---|---------|------------|----------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 auth/security/gateway queue | P2 | Tracker |
| [#10340](https://github.com/zeroclaw-labs/zeroclaw/issues/10340) | Bounded telemetry pilot | P2 | Tracker |
| [#10341](https://github.com/zeroclaw-labs/zeroclaw/issues/10341) | Goal Mode implementation roadmap | P2 | Tracker |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | SkillForge engine deprecation/wiring | P2 | Task |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Pairing code stronger than 6 digits | P1 | Feature |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Agent capability flags para shared/workspace escape | P2 | Feature |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | CI multi-platform (Windows/macOS) | P2 | Feature |
| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | Multi-session no gateway web chat UI | P2 | Feature |

### Sinais de Roadmap

1. **v0.9.0**: Foco em hardening de auth, segurança e gateway boundaries (#7432)
2. **Goal Mode V1/V2**: Roadmap formalizado em #10341, aceitando decisões de #8303 e #9702
3. **ZeroRelay secure transport**: mTLS mandatory com blind relay (#10142)
4. **Agent portability**: Bundle export/import (#9986)
5. **Rust/WASM UI**: Prototype evaluation em curso (#8132)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade | Evidência |
|-----|-------|------------|-----------|
| **Segurança em multi-agent** | #9947, #9746, #9745 | Crítica | Cron jobs e knowledge graph expostos cross-agent |
| **Pairing code fraco** | #6613 | Alta | 6 dígitos numéricos como default é "muito fraco" |
| **UI search quebrado** | #10058 | Média | File explorer não responde a setas após filtragem |
| **CI timeout** | #10042 | Média | 20min de timeout consumido em apt_install |
| **Docker nested** | #9402 | Alta | Risco de sandbox escape |

### Cenários de Uso Reportados

- **Multi-agent installs**: Usuários rodam múltiplos agentes e esperam isolamento completo — atualmente falho em cron e knowledge graph
- **Model providers locais**: Ollama com modelos pequenos interpreta streams como payloads de log (#8999)
- **Gateway web chat**: Necessidade de múltiplas sessões simultâneas por agente (#7543)
- **Portabilidade de agentes**: Administradores querem mover agentes entre installs sem reconfiguração manual (#9986)

### Indicadores de Satisfação

- 0 👍 em issues principais sugere neutralidade ou baixa visibilidade externa
- 1 👍 em #8132 indica interesse na modernização Rust/WASM
- Atividade intensa (100 items atualizados) sugere comunidade engajada

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Status | Problema |
|---|--------|--------|--------|----------|
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Evaluate Rust/WASM prototype | 2026-06-22 | Open (9 comments) | Decision pending — impacto em roadmap |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | SkillForge deprecation | 2026-06-25 | Accepted | Decisão final pendente há 2 meses |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Strong pairing code | 2026-05-13 | Accepted | Aguardando implementação há 3+ meses |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Agent capability flags | 2026-05-16 | Accepted | Aguardando implementação há 3+ meses |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | CI multi-platform | 2026-06-10 | Accepted | Aguardando implementação há 2.5 meses |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama support | 2026-07-17 | Open (do-not-merge) | Flagged para não merge — motivo não clear |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | Credential rotation | 2026-07-26 | Open (do-not-merge) | Flagged — requiere revisão |

### PRs Bloqueados

| # | Título | Problema |
|---|--------|----------|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama native | do-not-merge flag |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | Provider credential rotation | do-not-merge flag |
| [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306) | TypeScript gate in CI | needs-maintainer-review |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Atividade (issues + PRs / 24h) | 100 | 🟢 Muito alta |
| Releases (24h) | 0 | 🟡 Em ciclo de integração |
| Issues P1 abertas | 3 | 🔴 Requer atenção |
| PRs em aberto | 49 | 🟢 Pipeline saudável |
| PRs com do-not-merge | 2 | 🟡 A требует decisão |
| RFCs ativos | 4+ | 🟢 Governança madura |

---

*Relatório gerado em 2026-08-26. Dados extraídos de github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*