# Resumo diário do ecossistema de agentes de IA 2026-09-05

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-04 22:01 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-05

## 1. Panorama do dia

O projeto NullClaw apresenta **atividade mínima nas últimas 24h**, com apenas 1 issue atualizada e nenhuma atividade de PR ou release. O repositório encontra-se em um período de baixa mobilização, possivelmente indicando fase de maturação ou priorização de testes internos antes do próximo ciclo de desenvolvimento. Aissue em destaque sugere uma demanda por maior flexibilidade na arquitetura de provedores de busca, um indicativo de amadurecimento do ecossistema de plugins do projeto.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. Recomenda-se monitorar o repositório para eventuais hotfixes ou版本的 incrementais que possam surgir nos próximos dias.

---

## 3. Progresso do projeto

**Nenhuma PR mergeada ou fechada nas últimas 24h.**

A ausência de atividade de merge indica que o fluxo de desenvolvimento pode estar em fase de revisão ou que as contributions pendentes aguardam aprovação dos mantenedores.

---

## 4. Temas quentes da comunidade

### Issue em destaque

| #993 | **[enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances** |
|-------|--------------------------------------------------------|
| **Status** | 🟢 Aberta |
| **Autor** | Crymfox |
| **Criação** | 2026-08-24 |
| **Última atualização** | 2026-09-04 |
| **Comentários** | 1 |
| **Reações** | 👍 0 |
| **Link** | [nullclaw/nullclaw#993](https://github.com/nullclaw/nullclaw/issues/993) |

**Análise:** Aissue propõe tornar o endpoint da API do Firecrawl configurável, actualmente hardcoded em `https://api.firecrawl.dev/v1/search`. Esta solicitação reflete uma necessidade real de **interoperabilidade com instâncias auto-hospedadas**, ampliando o alcance do NullClaw para ambientes empresariais ou de privacidade que não podem depender de serviços cloud externos. A presença de 1 comentário indica que a issue está a ser avaliada pela comunidade.

---

## 5. Bugs e estabilidade

**Nenhum bug reportado nas últimas 24h.**

Não foram registados crashes, regressões ou problemas de estabilidade no período em análise. O projeto mantém estabilidade operacional.

---

## 6. Pedidos de features e sinais de roadmap

### Feature request em destaque

**Issue #993** — Endpoint configurável para Firecrawl  
Esta solicitação, classificada como *enhancement*, sinaliza uma tendência de **arquitetura modular** no roadmap do NullClaw. A capacidade de configurar provedores de busca alternativos pode indicar que a equipe está a preparar suporte para cenários enterprise ou offline.

**Sinais de roadmap:**
- 🔧 **Configurabilidade** — Demanda crescente por personalização de componentes internos
- 🌐 **Self-hosted** — Foco em reduzir dependência de serviços cloud proprietários
- 🔌 **Extensibilidade** — Evolução do sistema de plugins/provedores

---

## 7. Resumo de feedback dos usuários

Com base na issue activa, o feedback implícito indica:

| Categoria | Feedback |
|-----------|----------|
| **DOR** | Endpoint hardcoded impede uso com instâncias auto-hospedadas do Firecrawl |
| **CENÁRIO** | Usuários em ambientes corporativos ou de privacidade que necessitam de soluções self-hosted |
| **DEMANDA** | Configurabilidade do provedor de busca sem fork do código |

O único feedback captado sugere que a comunidade valoriza **flexibilidade de deployment** sobre conveniência de configuração padrão.

---

## 8. Backlog que merece atenção

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | make Firecrawl search endpoint configurable | ~12 dias | 🟡 Média |

**Recomendação:** A issue #993 encontra-se aberta há aproximadamente 12 dias com 1 comentário. Recomenda-se que a equipe de desenvolvimento avalie a viabilidade técnica e, se aceite, atribua um milestone para implementação. A feature alinha-se com tendências de arquitetura aberta e pode melhorar a adopção em contextos empresariais.

---

## Métricas resumidas do dia

| Indicador | Valor |
|-----------|-------|
| 🔵 Issues abertas/ativas (24h) | 1 |
| 🔴 Issues fechadas (24h) | 0 |
| 🟢 PRs abertas (24h) | 0 |
| 🟣 PRs merged/fechadas (24h) | 0 |
| 🟠 Releases | 0 |
| 📊 Nível de actividade | 🔴 Baixo |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub. Última actualização: 2026-09-05.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-09-05
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de evolução** em 2026-09-05. Projetos como NanoBot, Hermes Agent e ZeroClaw demonstram alta atividade (30-50 PRs/issues atualizados em 24h), indicando ciclos de desenvolvimento acelerados com foco em estabilização intensiva e correções de segurança. Em contraste, NullClaw permanece em período de baixa mobilização, possivelmente em fase de maturidade ou pré-release. A tendência dominante é a **maturação de funcionalidades multi-canal** (Telegram, WhatsApp, Slack, Feishu) e a convergência para problemas comuns: memory leaks em caches, segurança de configuração e interoperabilidade com provedores de IA (OpenAI-compatível, Anthropic, OpenCode). O mercado sinaliza demanda crescente por deployments enterprise-ready, evidenciada por issues sobre self-hosted, multi-tenant e configuração de endpoints.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Nível de Atividade | Saúde Geral |
|---------|:-------------------:|:-----------:|:----------------:|:--------------:|:-----------------:|:-----------:|
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Baixo | 🟡 Estável, fase de maturação |
| **NanoBot** | 4 | 22 | 8 | 0 | 🟢 Alto | 🟢 Estável — foco em memory leaks |
| **Hermes Agent** | 50 | 50 | — | 0 | 🔴 Muito Alto | 🟡 Estabilização intensiva |
| **PicoClaw** | 4 | 2 | 19 | 0 | 🟢 Alto | 🟢 Consolidando 1.095 commits upstream |
| **IronClaw** | 6 | 13 | 2 | 0 | 🟢 Alto | 🟢 Sólido — WebUI em foco |
| **CoPaw** | 28 | 24 | 14 | 0 | 🔴 Muito Alto | 🟢 Preparando v2.2.0 |
| **ZeroClaw** | 34 | 42 | 8 | 0 | 🔴 Muito Alto | 🟡 RFCs densas, migração WhatsApp |

**Observações:**
- ZeroClaw, CoPaw e Hermes Agent lideram em volume de atividade, com 28-50 items atualizados por dia.
- PicoClaw demonstra eficiência operacional com taxa de 19:2 (merged:abertos).
- NullClaw apresenta período de baixa mobilisation, sem fluxo de desenvolvimento ativo.

---

## 3. Posicionamento do Projeto Principal

### Projetos com Maior Tração (Liderança técnica e comunitária)

| Posição | Projeto | Vantagens Competitivas | Tamanho Comunidade |
|---------|---------|------------------------|-------------------|
| 🥇 | **ZeroClaw** | RFC-driven architecture, WhatsApp migration 0.7.0, adaptive-thinking Claude support | 50+ contributors, RFCs com 32+ comentários |
| 🥈 | **Hermes Agent** | Desktop SSH mode, multi-platform (Windows/macOS/Linux), 1Password integration | 50 issues + 50 PRs/24h, 156 comentários em issue de Skills |
| 🥉 | **CoPaw (QwenPaw)** | Multi-tenant Hub planejado, Creators features (T2V/I2V), mobile roadmap | 28 issues, 38 PRs, debate estratégico ativo |

### Diferenças Técnicas Arquiteturais

- **ZeroClaw**: Abordagem RFC-first com revisão 5 em discussão, runtime-owned sessions, crates.io publication strategy.
- **Hermes Agent**: Foco em desktop como frontend para servidor Linux, 1Password biometria, gateway lifecycle.
- **CoPaw**: Hub multi-tenant para equipes, lazy loading de 18 canais (em desenvolvimento), mobile-first com Expo.
- **PicoClaw**: Multi-canal massivo (Telegram, Slack, Feishu, QQ, IRC), upstream sync aggressivo.
- **NanoBot**: Observabilidade em tempo real (tokens/segundo), bounded caches, TUI maturidade.
- **IronClaw**: Dynamic prompt context budget, subagent boot sweep, Telegram Bot API nativo.

### NullClaw — Projeto de Referência

NullClaw apresenta **atividade mínima** com 1 issue aberta (#993 — endpoint Firecrawl configurável). Seu diferencial é a proposta de arquitetura modular para provedores de busca, embora o baixo volume de atividade no período analisado sugira:
- Fase de maturidade ou hiato de desenvolvimento
- Equipe enxuta com ciclos de release irregulares
- Comunidade menor com menor visibilidade

---

## 4. Focos Técnicos Compartilhados

Os projetos demonstram convergência em problemas técnicos similares, indicando necessidades reais do ecossistema:

### 4.1 Memory Leaks e Gestão de Recursos

| Projeto | Issue Relacionada | Impacto |
|---------|------------------|---------|
| **NanoBot** | PRs #5665, #5664, #5663 — OAuth, idle summary, Mattermost cache sem bound | Sessões longas acumulam memória |
| **IronClaw** | PR #8062 — cache keys em OpenAI requests | Degradação silenciosa de cache em Claude |
| **CoPaw** | Issue #7469 — ReMe embedding acessa antes de start() | Falha silenciosa em background jobs |
| **ZeroClaw** | PR #10491 — HTTPS trust store para plugins | Segurança em dependências externas |

**Padrão identificado:** Múltiplos projetos simultaneamente auditando limites de cache e bounded resources — indica dívida técnica comum ou adoção acelerada expondo limitações.

### 4.2 Interoperabilidade com Provedores de IA

| Projeto | Feature | Provedores Alvo |
|---------|---------|-----------------|
| **PicoClaw** | OpenAI-compat strict mode (#1683) | Ollama, vLLM, DeepSeek, Groq, xAI, Copilot |
| **NanoBot** | Header x-opencode-session (#5662) | OpenCode (P1, deadline 06/09) |
| **ZeroClaw** | Adaptive-thinking Claude models (#10611) | Claude 5.1, 5, Opus 4.7/4.8, Sonnet 5 |
| **CoPaw** | Volcengine Ark API support (#7549) | Provider específico em debug |
| **NullClaw** | Firecrawl endpoint configurável (#993) | Self-hosted instances |

### 4.3 Estabilidade Multi-Canal

| Canal | Projetos Afetados | Problemas Reportados |
|-------|-----------------|---------------------|
| **WhatsApp** | ZeroClaw, Hermes Agent | Loop de mensagens (#100481), empty allowed_groups security (#9348), migration 0.7.0 |
| **Telegram** | PicoClaw, IronClaw, Hermes Agent | Streaming timeouts, Bot API command menu, pairing state |
| **Feishu** | PicoClaw, CoPaw | Consumer stuck (#7534), channel failures |
| **QQ** | PicoClaw | 401 auth regression (#3365) |
| **IRC** | PicoClaw | Mensagens >512 bytes (#3287) |

### 4.4 Segurança e Configuração

| Problema | Projetos | Solução Proposta |
|----------|----------|------------------|
| Configuração permissiva por padrão | ZeroClaw (#9397), PicoClaw (#2088) | Permit-none como default, security audit |
| Credenciais em runtime | IronClaw (#8062), ZeroClaw (#9419) | Cache keys dinâmicos, credential rotation |
| Trust store para plugins | ZeroClaw (#10491) | Leitura de CA system store |

---

## 5. Análise de Diferenciação

### 5.1 Foco por Público-Alvo

| Segmento | Projetos Principais | Características |
|----------|-------------------|-----------------|
| **Enterprise/Teams** | CoPaw (Hub multi-tenant), ZeroClaw (self-hosted) | Gerenciamento centralizado, permissões, deploy on-premise |
| **Developers/CLI** | NullClaw (plugin extensibility), NanoBot (TUI, streaming) | Observabilidade, primitives de filesystem |
| **Desktop Users** | Hermes Agent (SSH mode), IronClaw (WebUI polish) | Experiência GUI, slash-commands |
| **Consumer/Messaging** | PicoClaw, ZeroClaw (WhatsApp/Telegram) | Multi-canal, bots, integrations |

### 5.2 Arquitetura e Filosofia

| Projeto | Filosofia | Escolhas Técnicas Destacadas |
|---------|-----------|------------------------------|
| **NullClaw** | Plugin-driven | Configurabilidade de search providers |
| **NanoBot** | Observable by default | Métricas em popover, bounded caches |
| **Hermes Agent** | Desktop-first | Electron, 1Password, SSH as frontend |
| **PicoClaw** | Channel-agnostic | Multi-provider, upstream sync aggressivo |
| **IronClaw** | WebUI maturity | Dynamic budget, subagent lifecycle |
| **CoPaw** | Creator-centric | T2V/I2V/S2V, plugin hot-reload |
| **ZeroClaw** | RFC-driven | Runtime-owned sessions, adaptive thinking |

### 5.3 Estratégia de Deployment

| Estratégia | Projetos | Implementação |
|-----------|----------|---------------|
| **Cloud-native** | NanoBot, CoPaw | Provider gateway, batch APIs |
| **Self-hosted** | NullClaw (#993), ZeroClaw | Endpoint configurável, crates.io publishing |
| **Hybrid** | Hermes Agent | Desktop + server, SSH tunneling |
| **On-premise enterprise** | CoPaw (v2.2.0 Hub) | PostgreSQL/MySQL pluggable storage |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|-----------|----------|-----------|
| **Iteração rápida** | ZeroClaw, CoPaw, Hermes Agent | 28-50+ items/dia, PRs merged diariamente |
| **Iteração moderada** | NanoBot, PicoClaw, IronClaw | 8-19 PRs merged/dia, ciclos de release curtos |
| **Consolidação** | NullClaw | Baixa atividade, possivelmente pré-release |

### 6.2 Qualidade de Processos

| Projeto | RFC Process | Security Focus | Tech Debt |
|---------|------------|----------------|-----------|
| **ZeroClaw** | ✅ RFCs com 5 revisões, 32+ comentários | ✅ Trust store, credential rotation | PRs do-not-merge sinalizados |
| **Hermes Agent** | ⚠️ Skills index degradado | ✅ 1Password integration | CI/CD infra issues |
| **CoPaw** | ✅ Hub multi-tenant debate | ⚠️ ACP bootstrap hangs | Import unconditional de 18 canais |
| **PicoClaw** | ✅ Sync upstream 1.095 commits | ✅ Security audit merged | PRs stale limpos |
| **IronClaw** | ✅ Decision spike documentado (#7903) | ✅ Cache keys dinâmicos | Subagent boot sweep (R4) |

### 6.3 Retenção e Engajamento

| Projeto | Métrica de Engajamento | Observação |
|---------|----------------------|------------|
| **Hermes Agent** | Issue #66616 com 156 comentários | Skills index degradado gera debate intenso |
| **ZeroClaw** | RFC #9487 com 32 comentários | Debate arquitetural denso |
| **CoPaw** | Issue #7318 com 22 comentários | Hub multi-tenant demanda estratégica |
| **PicoClaw** | Issues com 9-10 comentários | Comunidade ativa mas menor volume |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidence | Implicação |
|-----------|----------|------------|
| **Enterprise self-hosted** | NullClaw #993 (Firecrawl), ZeroClaw Hub, CoPaw multi-tenant | Demanda por deployments on-premise sem dependência cloud |
| **Observabilidade nativa** | NanoBot #5660 (tokens/segundo), CoPaw runtime notifications | Usuários exigem métricas em tempo real类似 DeepSeek Harness |
| **Memory safety** | 4 projetos auditando unbounded caches simultaneamente | Adoção acelerada expõe dívida técnica; necessidade de patterns padronizados |
| **Multi-canal maturidade** | PicoClaw 8 canais, ZeroClaw WhatsApp migration | Mercados maduros focam em estabilidade vs. novos canais |
| **Adaptive AI** | ZeroClaw adaptive-thinking Claude, IronClaw dynamic budget | Modelos com pensamento variável requerem arquitetura adaptativa |
| **RFC-driven development** | ZeroClaw, IronClaw (decision spikes) | Projetos maiores investem em consenso arquitetural antes de implementação |
| **Plugin security** | ZeroClaw trust store, CoPaw MCP whitelist | Softwares de terceiros exigem hardening de segurança |

### 7.2 Previsões Baseadas em Sinais

1. **Consolidação de providers OpenAI-compatíveis**: PicoClaw, NanoBot e CoPaw todos expandindo suporte a provedores third-party — padrão de mercado estabelecendo interface única.

2. **Convergência para bounded resources**: Expectativa de que, nos próximos 3-6 meses, patterns de bounded caches e memory limits se tornem convenção no ecossistema.

3. **Desktop como frontend para servidor**: Hermes Agent e IronClaw indicam tendência de arquiteturas onde desktop/cliente é apenas interface para backend Linux — cenário de uso principal para agents.

4. **Multi-tenant como feature critical**: CoPaw Hub e debates de session isolation em ZeroClaw sugerem que a próxima onda de adoção será em contexto organizacional, não individual.

5. **Deadline-driven development**: NanoBot OpenCode header (06/09) demonstra que integrações com provedores externos impõem ciclos de desenvolvimento reactivos.

---

## 8. Síntese para Decisores

| Stakeholder | Recomendação |
|-------------|-------------|
| **Desenvolvedores** | ZeroClaw e CoPaw oferecem APIs mais maduras para integração; NullClaw requer avaliação de viabilidade dado baixo activity. |
| **Empresas** | CoPaw Hub e IronClaw dynamic budget addressam necessidades enterprise; priorizar projetos com RFC process estabelecido. |
| **Contribuidores** | PicoClaw demonstra saúde de merge rápido; Hermes Agent tem alta entrada de issues — oportunidades para contributions de bug fixes. |
| **Infraestrutura** | Memory leak audit é padrão no ecossistema — contribuir com bounded cache implementations terá alta receptividade. |

---

*Relatório gerado automaticamente com base nos resumos de atividade comunitária de 2026-09-05.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-05

---

## 1. Panorama do Dia

O projeto NanoBot demonstra **alta atividade de desenvolvimento** em 5 de setembro de 2026, com 30 PRs atualizados nas últimas 24h (22 abertos, 8 merged/fechados) e 4 issues processadas. A equipe mantém foco em **estabilidade e performance**, com múltiplas correções de memory leaks e bounded caches em diferentes componentes (MCP OAuth, idle summary, Mattermost thread context). O lançamento da feature de contexto efêmero e a preparação para a Deadline do header OpenCode (06/09) impulsionam a atividade. Não houve novas releases hoje.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento intensivo, sem tags de versão publicadas nesta janela temporal.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#5660](https://github.com/HKUDS/nanobot/pull/5660) | Show model generation speed in context usage popover (#5631) | ✅ **Enhancement crítico** — Exibe velocidade de geração do modelo (tokens/segundo) no popover de uso de contexto da WebUI, resolvendo issue de UX. |
| [#5639](https://github.com/HKUDS/nanobot/pull/5639) | Stabilize session labels, TUI streaming, and pairing prompts | ✅ **Estabilidade TUI** — Centraliza handles de sessão, atualiza OpenTUI para 0.5.10, aplica foreground do terminal para Markdown retido. |
| [#5657](https://github.com/HKUDS/nanobot/pull/5657) | Extract outbound wire encoding | ✅ **Refatoração WebUI** — Extrai encoders tipados de `recovery_state` e `turn_end`, substitui métodos de transporte por `send_payload` primitivo. |

### Destaque Principal

A **PR #5660** resolve a issue #5631, adicionando informação de velocidade de geração do modelo ao popover de contexto existente. O backend já reportava os dados necessários; a PR conecta essa informação ao frontend WebUI, melhorando a transparência para usuários.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

| # | Título | Status | Comentários | Reações | Análise |
|---|--------|--------|-------------|---------|---------|
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) | Exibir contexto e velocidade do modelo na WebUI | ✅ Closed | 2 | 0 | **Enhancement popular** — Demanda por visibilidade de métricas de performance类似 DeepSeek Harness. |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | Current Time runtime context ausente na 0.3.0 | ✅ Closed | 1 | 0 | **Regressão** — Bloco de contexto temporal não adicionado automaticamente na versão 0.3.0, quebrando comportamento esperado. |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | WebUI locale registry perde locale com carga concorrente | ✅ Closed | 1 | 0 | **Race condition** — `loadChannelLocale()` captura/créa mapa de tradução no momento da chamada, causando perda de dados com carregamento simultâneo. |
| [#5661](https://github.com/HKUDS/nanobot/issues/5661) | Enviar header x-opencode-session para OpenCode | 🔴 **Aberta** | 0 | 0 | **Urgente** — Após 06/09/2026, requisições sem este header podem dar erro e perdem otimização de prompt caching. |

### Análise de Demandas

A comunidade demonstra forte interesse em:
1. **Observabilidade** — Métricas de velocidade e contexto na interface
2. **Estabilidade entre versões** — Regressões no runtime context (issue #5645)
3. **Compatibilidade com provedores** — OpenCode como prioridade P1 (deadline iminente)

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos Hoje

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **P2** | [#5645](https://github.com/HKUDS/nanobot/issues/5645) | Runtime context de Current Time ausente na 0.3.0 (regressão) | ✅ Fechado |
| **P2** | [#5644](https://github.com/HKUDS/nanobot/issues/5644) | Race condition no locale registry da WebUI | ✅ Fechado |
| **P2** | [#5665](https://github.com/HKUDS/nanobot/pull/5665) | OAuth flows do MCP sem bound de memória | 🔄 Em revisão |
| **P2** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Idle summary cache sem limite de tamanho | 🔄 Em revisão |
| **P2** | [#5663](https://github.com/HKUDS/nanobot/pull/5663) | Mattermost thread context cache sem eviction | 🔄 Em revisão |
| **P1** | [#5662](https://github.com/HKUDS/nanobot/pull/5662) | Header x-opencode-session ausente (pode causar erro após 06/09) | 🔄 Em revisão |

### Padrão Identificado

Três PRs simultâneas (#[5665](https://github.com/HKUDS/nanobot/pull/5665), #[5664](https://github.com/HKUDS/nanobot/pull/5664), #[5663](https://github.com/HKUDS/nanobot/pull/5663)) abordam **memory leaks por estruturas sem bound**. Isso sugere uma auditoria de recursos mais ampla pode ser benéfica.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Prioridade | Descrição |
|---|--------|------------|-----------|
| [#5662](https://github.com/HKUDS/nanobot/pull/5662) | Header x-opencode-session para OpenCode | **P1** | **CRÍTICO** — Required after 2026-09-06 para session affinity e prompt caching |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | Adicionar aimlapi.com como provider | P2 | Provider gateway OpenAI-compatível com 1000+ modelos |
| [#5656](https://github.com/HKUDS/nanobot/pull/5656) | Tornar context compaction visível em channels | P2 | Comando `/compact`, eventos `context_compaction` lifecycle |
| [#5659](https://github.com/HKUDS/nanobot/pull/5659) | Opt-out de blocos runtime-context efêmeros | P2 | Flag `ephemeral` para blocos que não persistem entre turns |
| [#5626](https://github.com/HKUDS/nanobot/pull/5626) | Adicionar copy_file e move_file | P2 | Primitivas filesystem: `copy_file` e `move_file` |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Langfuse tracing para Codex | P2 | Tracing nativo via SDK Langfuse |

### Sinais de Roadmap

- **Observabilidade expandida**: Métricas de velocidade (#5660 merged), context compaction visível (#5656)
- **Expansão de providers**: aimlapi.com (#5666), suporte OpenCode melhorado (#5662)
- **Melhorias de filesystem**: Ferramentas de manipulação de arquivos
- **Configuração de heartbeat**: `isolated_session` (#4551) e `model_override` (#4549)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidence | Impacto |
|-----|----------|---------|
| **Falta de visibilidade de métricas** | Issue #5631 — "能够直观看到模型的速度和上下文信息" | Usuários querem feedback 类似 DeepSeek Harness |
| **Regressão de comportamento** | Issue #5645 — Contexto temporal ausente na 0.3.0 | Quebra de expectativa vs versão anterior |
| **Race condition em i18n** | Issue #5644 — Locale perdido com carga concorrente | Usuários multilingue afetados |
| **Memory leaks em sessões abandonadas** | PRs #5664, #5665, #5663 | Usuários com longas sessões ou restarts frequentes |

### Cenários de Uso Identificados

1. **Uso intensivo de sessão** — Sessões longas com histórico acumulado
2. **Multi-channel** — Mattermost, WebUI, TUI simultâneos
3. **Providers variados** — OpenAI-compatível, Codex, OpenCode, aimlapi
4. **Observabilidade de agentes** — Necessidade de métricas em tempo real

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Em Espera

| # | Título | Idade | Status | Notas |
|---|--------|-------|--------|-------|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Add isolated_session config para heartbeat | ~70 dias | Aberta | Feature de heartbeat aguardando merge |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | Add model_override para heartbeat | ~70 dias | Aberta | Feature correlata ao heartbeat |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Langfuse tracing para Codex | ~12 dias | Aberta | Tracing aguardando revisão |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | Surface model retry status | ~12 dias | Aberta | Status de retry aguardando implementação |
| [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Clarify aggregate turn token usage | ~14 dias | Aberta | Regressão em tooltip de tokens |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | Report background task failures | ~18 dias | Aberta | Erros em background tasks |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | Preserve full consolidation input | ~23 dias | Aberta | Memória/consolidação |

### Recomendações

1. **Heartbeat features** (#4551, #4549) — Estão abertas há ~70 dias; decidir merge ou close
2. **Tracing/Langfuse** (#5520) — Adicionar reviewer para não bloquear contribuidor
3. **Model retry status** (#5504) — Fornece feedback valioso ao usuário; priorização

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (abertas) | 1 |
| Issues fechadas | 3 |
| PRs abertos | 22 |
| PRs merged/fechados | 8 |
| Releases | 0 |
| Bugs críticos (P1) | 1 |
| Features P1 | 1 |
| Bugs P2 | 6 |
| Features P2 | 5 |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-05.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-05

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um alto nível de atividade comunitária, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. Não houve lançamentos de novas versões no período. A saúde geral reflete uma base de código madura em fase de refinamento, com foco em **estabilidade do desktop e conectividade SSH/remote**, além de correções pontuais em múltiplos componentes. A taxa de P1s (críticos) levantados nas últimas 24h (4 ocorrências) indica atenção urgente a bugs de autenticação e gateway.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

A ausência de releases não indica estagnação — pelo contrário, o alto volume de PRs abertos sugere que a equipe está preparando uma versão que consolida correções críticas, especialmente as relacionadas a SSH token handling (#102948) e gateway stability.

---

## 3. Progresso do Projeto

### PRs Emblemáticos Abertos/Fechados Recentemente

| PR | Descrição | Área | Status |
|----|-----------|------|--------|
| [#102948](https://github.com/NousResearch/hermes-agent/pull/102948) | **fix(desktop): serve the current SSH session token** — resolve P1 de 401 permanente no SSH remote corrigindo late-binding do token | comp/desktop, auth | Aberto |
| [#103229](https://github.com/NousResearch/hermes-agent/pull/103229) | **fix(secrets): forward OP_BIOMETRIC_UNLOCK_ENABLED** — habilita integração biométrica do 1Password | comp/agent, secrets | Aberto |
| [#103197](https://github.com/NousResearch/hermes-agent/pull/103197) | **fix(slack): stop mixing markdown_text into native task-card** — melhora feedback de falhas em Slack | comp/plugins, platform/slack | Aberto |
| [#103227](https://github.com/NousResearch/hermes-agent/pull/103227) | **fix(session-search): stop hydrating inline base64 images** — previne estouro de memória em buscas | tool/memory | Aberto |
| [#103223](https://github.com/NousResearch/hermes-agent/pull/103223) | **feat(models): add GPT-6 Astra to Codex picker** — adiciona suporte ao novo modelo da OpenAI | provider/openai | Aberto |
| [#102146](https://github.com/NousResearch/hermes-agent/pull/102146) | **Fix/session store profile seam** — corrige isolamento cross-profile em sessões | area/sessions, area/profiles | Aberto |
| [#103219](https://github.com/NousResearch/hermes-agent/pull/103219) | **fix(windows): default cua-driver to on-demand** — remove console flash no login Windows | platform/windows | Aberto |
| [#103220](https://github.com/NousResearch/hermes-agent/pull/103220) | **fix(anthropic): fit thinking budget under output ceiling** — ajusta limite de tokens para modelos com thinking | provider/anthropic | Aberto |

### Avanços Importantes

- **Autenticação SSH Desktop**: O PR #102948 aborda a raiz do bug P1 que causava 401 permanente em conexões SSH remotas — indica prioridade máxima para merge.
- **Suporte a Modelos**: Adição de GPT-6 Astra (#103223) demonstra evolução contínua na compatibilidade com provedores.
- **Segurança 1Password**: Correção da allowlist que bloqueava variável de desbloqueio biométrico.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | 👍 | Prioridade |
|-------|--------|-------------|-----|------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded (degraded) | 156 | 0 | P3 |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | 64 | 0 | P3 |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | 57 | 7 | P3 *(fechada)* |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App (iOS & Android) with Voice Calling | 6 | 1 | P3 |
| [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) | Email session isolation by normalized subject | 5 | 2 | P3 |

### Análise dos Temas

**Skills Index Degradado (#66616)**: Com 156 comentários, esta é a issue mais debatida. O índice de skills está 29.8h desatualizado (limite: 26h), afetando a documentação em `/docs/skills`. A automação de rebuild via GitHub Actions aparentemente falhou ou está com delay. Este é um problema de **infraestrutura de CI/CD** que impacta a experiência do desenvolvedor.

**Integração Nous Blockada (#88584)**: 64 comentários indicam um conflito no merge cron entre Nous e Enterkey em `cron/jobs.py`. Há tensão entre branches de release e workflow de integração contínua.

**Truncamento de Respostas (#7237)**: 57 comentários e 7 👍 demonstram frustração recorrente. Bug foi fechado — verificar se realmente resolvido ou se necessidade de reabertura.

**Demanda por Mobile (#11911)**: Feature request com 6 comentários indica interesse em voice calling nativo, mas sem movimento concreto.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata requerida)

| Issue | Título | Impacto |
|-------|--------|---------|
| [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) | Desktop SSH mode: 401 on every API call | Autenticação SSH completamente quebrada desde `d3630f8532` |
| [#103203](https://github.com/NousResearch/hermes-agent/issues/103203) | Desktop SSH remote loops 401 (duplicate) | Mesmo problema, duplicata |
| [#103145](https://github.com/NousResearch/hermes-agent/issues/103145) | SSH token captured at import time → permanent 401 | Root cause identificado |
| [#103191](https://github.com/NousResearch/hermes-agent/issues/103191) | Gateway SIGTERM during startup exits 0 → stays down | Gateway pode ficar down indefinidamente |

### P2 — Altos (devem ser addressed em breve)

| Issue | Título | Área |
|-------|--------|------|
| [#48723](https://github.com/NousResearch/hermes-agent/issues/48723) | Python 3.14 support needed | area/install-update |
| [#76577](https://github.com/NousResearch/hermes-agent/issues/76577) | Docker backend cannot read binary files | backend/docker |
| [#91386](https://github.com/NousResearch/hermes-agent/issues/91386) | Desktop cron sessions cannot be deleted | area/sessions |
| [#100481](https://github.com/NousResearch/hermes-agent/issues/100481) | WhatsApp re-delivers same message repeatedly | platform/whatsapp |
| [#103181](https://github.com/NousResearch/hermes-agent/issues/103181) | WS reconnect kills queued turns silently | area/sessions |
| [#103139](https://github.com/NousResearch/hermes-agent/issues/103139) | Desktop branching fails on oversized transcripts | area/sessions |
| [#103157](https://github.com/NousResearch/hermes-agent/issues/103157) | macOS CGEvent keystrokes rejected in Electron/Google Console | comp/desktop |

### P3 — Médios

Correções diversas: session timer semântico (#103123), renderer re-render loop (#98394), Piper TTS sem pausas (#103103), worktree_isolation warning (#103149), entre outros.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Discussão

| Issue | Título | Sinais de Roadmap |
|-------|--------|-------------------|
| [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) | **[Tracker] GPT-6 Astra support** | P2 — trabalho ativo (PR #103223 aberto) |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App (iOS & Android) with Voice Calling | Demanda comunitária recorrente |
| [#95820](https://github.com/NousResearch/hermes-agent/issues/95820) | Project-level context injection | Indica direção de "project-aware agents" |
| [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) | Cheap desktop backend boot + lean chat plane | Refratoração de arquitetura desktop |
| [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | Bot-mode: control Group Chats from messaging | Expansão de capacidades multi-chat |

### Indicações de Prioridade Futura

- **Python 3.14**: Issue P2 com menção de que é "increasingly the default" — suporte necessário em breve.
- **Supertonic TTS (#35396)**: TTS on-device via ONNX, indica direção de privacidade/offline.
- **Email session isolation (#26277)**: Melhoria de UX para workflows de email.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **SSH Remote quebrado** | Múltiplas issues P1 (3 duplicates) | Bloqueia uso desktop→server |
| **Gateway cai e não restart** | Issue #103191 | Downtime não recuperado automaticamente |
| **WhatsApp loop de mensagens** | Issue #100481 | 7h de respostas repetidas |
| **Truncamento de respostas longas** | Issue #7237 (resolvida?) | Uso em CLI/gateway degradado |
| **Desktop re-render loop (30-65% CPU idle)** | Issue #98394 | Performance e bateria |

### Cenários de Uso Emergentes

1. **Desktop como frontend para servidor Linux** — cenário principal afetado pelos bugs SSH.
2. **Integração com WhatsApp** — crescente adoção, mas com problemas de reliability (#100481).
3. **Computer Use em macOS** —用例 real em Google Cloud Console ainda não funciona.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Idade | Título | Observação |
|-------|-------|--------|------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | ~50 dias | Skills index stale/degraded | 156 comentários, ainda `degraded` |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | ~20 dias | Automated Nous integration blocked | Bloqueia merge de integração |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | ~140 dias | Native Mobile App request | Feature request sem movimento |
| [#60674](https://github.com/NousResearch/hermes-agent/issues/60674) | ~60 dias | 1Password CLI hangs on macOS | `needs-repro` — problema não reproduzido |

### Recomendações de Priorização

1. **Urgente**: Merge do PR #102948 (SSH token) + investigação do Skills index (#66616)
2. **Alta**: Resolver P1s restantes de SSH (duplicates) e gateway restart (#103191)
3. **Média**: Avançar Python 3.14 support (#48723) e WhatsApp reliability (#100481)
4. **Estratégica**: Avaliar viabilidade do Mobile App (#11911) e desktop boot optimization (#94484)

---

## Métricas de Saúde do Projeto (2026-09-05)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 46 | 🔴 Alta carga |
| PRs abertos (24h) | 48 | 🔴 Alta atividade |
| Releases (24h) | 0 | 🟡 Sem lançamento |
| P1s abertos | 4 | 🔴 Críticos |
| Issues sem resposta >30 dias | ~4 | 🟡 Requer triagem |

**Veredicto**: Projeto em **modo de stabilização intensiva**, com concentração em bugs críticos de desktop/SSH e reliability do gateway. A alta atividade de PRs indica preparação para release corretiva iminente.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-05

---

## 1. Panorama do dia

O projeto PicoClaw demonstra **alta atividade de manutenção** nesta data, com 21 PRs atualizados nas últimas 24h (19 mergeados/fechados) e 4 issues ativas. A ausência de releases formais sugere que o trabalho está focado em consolidação de contribuições acumuladas — destaque para o merge massivo de **#2810** com 1.095 commits upstream. A saúde geral indica um projeto maduro em fase de refinamento contínuo, com foco em estabilidade multi-canal (Telegram, Slack, Feishu, QQ) e compatibilidade com provedores de IA.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto mantém a versão `0.3.1` conforme citado nas issues. O ciclo de release parece estar em backlog, sugerindo que a equipe pode estar preparando uma nova versão que consolide os numerous PRs mergeados.

---

## 3. Progresso do Projeto

### PRs importantes merged/fechados:

| # | PR | Impacto | Área |
|---|-----|--------|------|
| [#2810](https://github.com/sipeed/picoclaw/pull/2810) | Sync upstream/main (1095 commits) | **Crítico** — atualiza base com contribuições upstream | Core |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **Alto** — corrige loop de agente travando em falhas MCP | Agent |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | feat(openai_compat): strict mode compatibility | **Alto** — compatibilidade com provedores terceiros (Ollama, vLLM, DeepSeek, Groq) | Provider |
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | fix(providers): context overflow detection | **Alto** — melhora classificação de erros de context window | Provider |
| [#2088](https://github.com/sipeed/picoclaw/pull/2088) | fix(channels): security audit for open-by-default bots | **Alto** — endurecimento de segurança em bots permissivos | Channel |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | fix(identity): negative integers for Telegram group IDs | **Médio** — corrige identificação de IDs negativos no Telegram | Channel |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | feat(providers): GitHub Copilot stdio transport | **Médio** — adiciona suporte stdio ao Copilot | Provider |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | feat(providers): add xAI compat support | **Médio** — adiciona provedor xAI via path OpenAI-compatible | Provider |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | feat(providers): openai-compatible embeddings support | **Médio** — suporta embeddings vLLM-style | Provider |

**Avanço destacado:** O PR [#2810](https://github.com/sipeed/picoclaw/pull/2810) de `nuestraai` representa a maior atualização de código base, integrando 1.095 commits upstream com reestruturação do agent loop (`agent_*.go`), reorganização de tools em `pkg/tools/{fs,integration}/`, e realocação de config de canais.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| # | Título | Comentários | 👍 | Categoria | Tendência |
|---|--------|:-----------:|:--:|-----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | [Feature] Better support long messages in IRC | **10** | 0 | Feature/IRC | Estável — aguardando priorização |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | [BUG] Web UI chat input laggy with long history | **9** | 2 | Bug/UX | Ativo — atualizado 2026-09-04 |

### Análise de demandas:

- **IRC Long Messages (#3287):** Demanda por tratamento de mensagens >512 bytes fragmentadas pelo protocolo IRCv3. Recorrente desde 2026-07-22, indicando complexidade técnica.community signals strong need for this feature.
  
- **Web UI Performance (#3281):** Bug de UX onde sessões com histórico longo causam lentidão no input. Atualizado recentemente (2026-09-04), sinalizando atenção da comunidade.

### PR em revisão:

- [#3367](https://github.com/sipeed/picoclaw/pull/3367) — `docs: add Pilot MCP setup example` (aberto em 2026-09-04)

---

## 5. Bugs e Estabilidade

### Issues abertas (bugs):

| # | Severidade | Título | Atualizado | Prioridade |
|---|:----------:|--------|:----------:|:----------:|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Alta** | Web UI chat input laggy with long history | 2026-09-04 | ⭐⭐⭐ |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | **Alta** | QQ channel fails with 401 — root cause in botgo v0.2.1 + resty >= v2.17 | 2026-09-04 | ⭐⭐⭐ |

### Detalhamento:

- **#3365 (QQ Channel 401):** Bug de regressão em dependência (`botgo v0.2.1` + `resty v2.17.1`) causando falha de autenticação. Reportado em hardware Orange Pi 3B. **Sem comentários ainda** — requer atenção imediata.

- **#3281 (Web UI Lag):** Impacta sessões com histórico extenso. 9 comentários indicam que a comunidade está ativa na investigação.

### Bugs corrigidos nos PRs mergeados hoje:

- MCP failure hanging agent loop ([#3337](https://github.com/sipeed/picoclaw/pull/3337))
- Telegram streaming drafts redundantes e roteamento em Forums ([#2090](https://github.com/sipeed/picoclaw/pull/2090))
- Slack mention race condition ([#2089](https://github.com/sipeed/picoclaw/pull/2089))
- Mensagens duplicadas em streaming Telegram por timeout ([#2092](https://github.com/sipeed/picoclaw/pull/2092))
- Security audit em bots open-by-default ([#2088](https://github.com/sipeed/picoclaw/pull/2088))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (últimas 24h):

| # | Título | Link | Complexidade Estimada |
|---|--------|------|:---------------------:|
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | [Issue](https://github.com/sipeed/picoclaw/issues/3366) | Baixa |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | [Issue](https://github.com/sipeed/picoclaw/issues/3287) | Média-Alta |

### Análise:

- **#3366 — OpenAI Compatible Providers:** Proposta de `ItachiSan` para adicionar providers custom OpenAI-compatible (ex: 9Router). Sugere copiar implementação existente. **Alta viabilidade** dado que o PR [#1683](https://github.com/sipeed/picoclaw/pull/1683) recém-mergeado já implementa strict mode compatibility para third-party providers.

- **#3287 — IRC Long Messages:** Demanda antiga de `superuser-does` para tratar mensagens >512 bytes fragmentadas. Dado o protocolo IRCv3, requereria lógica de reassembly. Sinal de que a comunidade usa PicoClaw em contextos IRC avançados.

### Indicadores de roadmap implícitos:
- Foco em **multi-provider compatibility** (xAI, Copilot, OpenAI-compatible, Azure AI Foundry)
- **Stabilidade de streaming** em canais (Telegram, Slack, Feishu)
- **Segurança** de bots (hardening em open-by-default)

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas (issues abertas):

1. **Performance UI em sessões longas (#3281)**
   - *Contexto:* Usuários da Web UI experimentam lag ao digitar em sessões com histórico extenso.
   - *Severidade percebida:* 2 👍 indica impacto moderado, mas 9 comentários sugerem frustração ativa.
   - *Cenário típico:* Uso intenso em conversas prolongadas.

2. **Quebras de canais e integrações (#3365)**
   - *Contexto:* QQ channel quebrado após update de dependências (`resty >= v2.17`).
   - *Severidade:* Bloqueante para usuários QQ.

3. **Limitações de protocolo (#3287)**
   - *Contexto:* Usuários IRC não conseguem enviar mensagens longas sem fragmentação.
   - *Severidade:* Limitação funcional em ambiente IRCv3.

### Sinais de satisfação:

- Atividade recente nos PRs indica que contribuições externas (ex: `badgerbees`, `kuzmichus`, `nuestraai`, `TeoSlayer`) estão sendo bem aceitas e mergeadas.
- Issue #1683 (strict mode compatibility) demonstra que a equipe responde a necessidades de provedores third-party.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >30 dias:

| # | Título | Criado | Atualizado | Comentários | Status |
|---|--------|:------:|:----------:|:-----------:|:------:|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | [Feature] Better support long messages in IRC | 2026-07-22 | 2026-09-04 | 10 | 🟡 stale |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | [BUG] Web UI chat input laggy | 2026-07-21 | 2026-09-04 | 9 | 🟡 stale |

### PRs stale (requerem triagem ou close):

| # | Título | Criado | Última Atualização | Domínio |
|---|--------|:------:|:------------------:|---------|
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | feat(openai_compat): strict mode compatibility | 2026-03-17 | 2026-09-04 | Provider |
| [#1854](https://github.com/sipeed/picoclaw/pull/1854) | fix(agent): occurrence-aware tool call id sanitization | 2026-03-21 | 2026-09-04 | Agent |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | fix(identity): negative integers for Telegram | 2026-03-21 | 2026-09-04 | Channel |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | fix(providers): thinking/reasoning fallback for Ollama | 2026-03-21 | 2026-09-04 | Provider |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | feat(providers): GitHub Copilot stdio transport | 2026-04-01 | 2026-09-04 | Provider |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | feat(providers): add xAI compat support | 2026-04-02 | 2026-09-04 | Provider |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | fix(openai_compat): request stream usage | 2026-04-14 | 2026-09-04 | Provider |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | feat(providers): openai-compatible embeddings | 2026-04-22 | 2026-09-04 | Provider |

> ⚠️ **Nota:** Muitos PRs stale foram mergeados em 2026-09-04, indicando que a equipe está limpando o backlog. Isso é positivo.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|:------:|:---------:|
| Atividade de PRs (24h) | **Alta** (21) | ⬆️ Positiva |
| PRs mergeados vs. abertos | **19:2** | ✅ Saudável |
| Bugs críticos abertos | 2 | 🟡 Atenção |
| Issues sem resposta (>30d) | 2 (com alta demanda) | 🟡 Necessita triagem |
| Releases (30d) | 0 | 🟡 Aguarda release |
| Contribuições externas | Ativas | ✅ Positiva |

---

**Gerado em:** 2026-09-05  
**Fonte:** github.com/sipeed/picoclaw  
**Período analisado:** Últimas 24h

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-05

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade de desenvolvimento hoje, com 6 issues atualizadas e 15 PRs em movimento nas últimas 24 horas. Todas as issues permanecem abertas, indicando um fluxo intenso de trabalho contínuo sem fechamentos neste período. A atividade está concentrada em melhorias de UX/webui (command result cards, slash-command menu) e correções de bugs em Telegram eLLM/caching. Dois PRs foram fechados com sucesso: um fix crítico de arquitetura (#8062) e uma melhoria de CI timeout (#8060). O projeto demonstra saúde operacional sólida com 13 PRs abertos aguardando review.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período reportado. A ausência de releases indica que o time está focado em estabilizar mudanças pendentes antes de um próximo tagging.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | Título | Impacto |
|---|--------|---------|
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | fix(llm): send conversation cache keys on OpenAI request paths | **Crítico** — Deriva uma chave de cache estável por conversa e a envia em todas as requisições OpenAI Responses/Chat Completions. Resolve silenciosa queda de cache em produção. |
| [#8060](https://github.com/nearai/ironclaw/pull/8060) | ci(nextest): give the whole-tree architecture scans real timeout headroom | **Infraestrutura** — Aumenta timeout dos testes de arquitetura de 60s para valores seguros; evita kill prematuro que estava causando flaky CI. |

### PRs Abertos de Destaque

| # | Escopo | Descrição |
|---|--------|-----------|
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | **XL/medium risk** | feat(loop): derive prompt context budget from model's advertised window — transição de budget fixo 128k/20k para dinâmico baseado no context window do modelo (90% do limite). |
| [#8067](https://github.com/nearai/ironclaw/pull/8067) | **XL** | feat(subagent): boot/periodic sweep para deliveries órfãos — finalmente implementa o "boot pass" que cobre casos onde a thread pai nunca mais executa. |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | **XL** | fix(llm): cache-gate Claude families por denylist + send prompt_cache_key — corrige degradação silenciosa de cache para famílias Claude mais novas (fable, mythos). |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Complexidade/Engajamento

| # | Título | Métricas | Análise |
|---|--------|----------|---------|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Decision spike: persistent per-user sandboxed executor | 2 comentários, risco high | **Debate arquitetural significativo.** Propõe mover o executor sandboxed para persistir por usuário ao invés de ser transient. Impacta a confiança e o boundaries do sistema Reborn. Labels `scope: agent` + `scope: sandbox` indicam mudança cross-cutting. |

### PRs com Maior Esforço

| # | Título | Tamanho | Análise |
|---|--------|---------|---------|
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | Prompt context budget dinâmico | XL | Maior mudança aberta; afeta comportamento fundamental do loop. |
| [#8067](https://github.com/nearai/ironclaw/pull/8067) | Boot sweep subagent | XL | Resolve debt técnico antigo (R4) relacionado a deliveries órfãos. |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | Claude cache denylist | XL | Corretivo necessário para suportar famílias Claude recém-lançadas. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | Telegram Bot API command menu | L | Integração nativa do Telegram com menu de comandos via Bot API. |

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Severidade | Descrição | Área |
|---|------------|-----------|------|
| [#8074](https://github.com/nearai/ironclaw/issues/8074) | **Bug** | Usuário pareado em canal não-conectado recebe mensagem errada (notice de pareamento ao invés de "channel not connected"). Usuários Telegram podem ficar confusos sobre estado de conexão. | Telegram/pairing |
| [#8059](https://github.com/nearai/ironclaw/pull/8059) | **Bug** (XS) | `cancel_response` retorna `400 invalid_request` para todos os estados; cancelamento não funciona. Hardcoded reason não é aceita pelo parser. | Responses API |

### Melhorias de Estabilidade em PR

| # | Escopo | Correção |
|---|--------|----------|
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | Telegram | Usuário não-pareado agora recebe notice de conexão no primeiro contato (antes precisava de 2 mensagens). |
| [#8073](https://github.com/nearai/ironclaw/pull/8073) | Telegram | Mensagem de erro mais clara quando administrador não configurou Telegram personal-account access. |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | **LLM/Cache** | Garante que conversation cache keys são enviadas em todas as requisições OpenAI. |

**Classificação por severidade:**
- 🟢 Low: #8059, #8073
- 🟡 Medium: #8054
- 🔴 High: #7903 (decision spike), #8074 (user-facing bug)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues de Enhancement

| # | Título | Escopo | Demanda |
|---|--------|--------|---------|
| [#8066](https://github.com/nearai/ironclaw/issues/8066) | Prevent command result cards from collapsing | webui | Cards de resultado de comandos colapsam até virarem linhas horizontais após execuções repetidas. Afeta usabilidade do `/model` e outros slash commands. |
| [#8065](https://github.com/nearai/ironclaw/issues/8065) | Align command metadata consistently in slash-command menu | webui | Nomes de comandos com larguras variáveis causam desalinhamento visual; reduz scanability. |
| [#8064](https://github.com/nearai/ironclaw/issues/8064) | Add dismissal action for command result cards | webui | Cards de resultado parecem temporários mas não têm ação de fechar; acumulam-se no conversation space. |
| [#8063](https://github://github.com/nearai/ironclaw/issues/8063) | Keep active command visible while navigating | webui | Menu slash-command não scrolla automaticamente durante navegação; comando ativo fica fora da viewport. |

### PRs de Feature Implementados (em review)

| # | Título | Escopo |
|---|--------|--------|
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | Telegram Bot API command menu registration | Telegram |
| [#8067](https://github.com/nearai/ironclaw/pull/8067) | Boot/periodic sweep para subagent deliveries | Subagent |
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | Dynamic prompt context budget | LLM/Loop |

**Sinais de roadmap detectados:**
- 🖥️ **WebUI maturity:** 4 issues + 4 PRs focados em UX do slash-command menu e command cards — indicates web surface is getting polish attention.
- 📱 **Telegram integration deepening:** Registro nativo do Bot API command menu + fixes de pairing sugerem foco em experiência Telegram.
- 🤖 **Agent loop improvements:** Budget dinâmico + boot sweep indicam maturação do sistema de subagentes.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues)

| Dor | Frequência | Contexto |
|-----|------------|----------|
| **Acumulação de cards de comando** | Alta | Após executar `/model` várias vezes, conversation space é consumido sem controle. |
| **Comando ativo invisível** | Média | Navegação por teclado/mouse no menu de comandos perde o comando selecionado da viewport. |
| **Mensagens de erro confusas** | Média | Usuários veem "Something went wrong while linking" ao invés de explicar que admin não configurou Telegram. |
| **Fluxo de pareamento confuso** | Média | Primeiro contato no Telegram não mostra notice de conexão; usuário precisa enviar mensagem extra. |
| **Cache não funciona** | Crítica (resolvida) | Famílias Claude novas (fable, mythos) sofriam degradação silenciosa de cache. |

### Cenários de Uso Observados

- **CLI + Telegram:** Usuários executam comandos via slash-command menu e esperam cards de resultado com ações de dismiss.
- **Agentes paired em canais compartilhados:** O bug #8074 indica uso em ambientes multi-usuário onde paired/unpaired states coexistem.
- **Prompt context management:** A mudança de budget fixo para dinâmico (#8053) responde a usuários com modelos de janelas variadas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Comentário

| # | Idade | Título | Prioridade |
|---|-------|--------|------------|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | 10 dias | Decision spike: persistent per-user sandboxed executor | **High** — Decisão arquitetural cross-cutting que precisa de alinhamento. |
| [#8074](https://github.com/nearai/ironclaw/issues/8074) | 1 dia | Bug: paired user em canal não-conectado recebe mensagem errada | **Medium** — User-facing bug sem assign ou PR linked. |
| [#8066](https://github.com/nearai/ironclaw/issues/8066) | 1 dia | Prevent command result cards from collapsing | **Medium** — Já tem PR #8071 correspondente. |
| [#8065](https://github.com/nearai/ironclaw/issues/8065) | 1 dia | Align command metadata consistently | **Low** — Já tem PR #8070 correspondente. |
| [#8064](https://github.com/nearai/ironclaw/issues/8064) | 1 dia | Add dismissal action for command result cards | **Medium** — Já tem PR #8069 correspondente. |
| [#8063](https://github.com/nearai/ironclaw/issues/8063) | 1 dia | Keep active command visible | **Low** — Já tem PR #8068 correspondente. |

### Recomendações de Priorização

1. **🔴 #7903 — Decision spike sandbox executor** — Requer decisão de arquitetura com implicações de segurança e design. Ideal para sync com team.
2. **🟡 #8074 — Bug de mensagem de pairing** — User-facing bug simples comPR #8054 relacionado; fechar gap entre os dois.
3. **🟢 Issues webui** — 4 issues com PRs correspondentes abertos. Review e merge em batch recomendadas.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade de PRs | 15 PRs (13 open, 2 closed) | ⬆️ Alta |
| Issues abertas | 6 (todas em dia) | ➡️ Estável |
| Releases | 0 | ➡️ Pausa de stabilization |
| Cobertura de bugs | 2 bugs novos, nenhum crítico | 🟢 Estável |
| Features pipeline | 4 features webui + 3 LLMs/agent | ⬆️ Forte |
| Tech debt | Subagent boot sweep (R4) em merge | 🟢 Resolvendo |

**Veredicto:** Projeto saudável com alta atividade de desenvolvimento. Foco atual em maturação de webui e estabilidade de cache/LLM. Nenhum indicador vermelho de regressão ou instabilidade.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-09-05
**Fonte:** GitHub (agentscope-ai/QwenPaw)

---

## 1. Panorama do dia

O projeto CoPaw/QwenPaw apresenta **alta atividade** em 5 de setembro de 2026. Nas últimas 24 horas, 28 issues e 38 PRs receberam atualizações, indicando um ritmo intenso de desenvolvimento. O time está em fase avançada de preparação para a versão 2.2.0, com debates ativos sobre o QwenPaw Hub multi-tenant (#7318) e diversas correções de bugs sendo revisadas. A comunidade demonstra engajamento significativo em features de estabilidade (Plugin hot reload, runtime notifications) e usabilidade (sidebar redesign, mobile experience). **Nenhuma release formal** foi publicada hoje, mas múltiplos PRs de alto impacto estão em fase final de revisão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto encontra-se em período de desenvolvimento ativo da versão 2.2.x (beta). Issues como #7318 mencionam que o QwenPaw Hub multi-tenant está planejado para a versão 2.2.0, sugerindo que o release oficial está próximo. Recomenda-se monitorar o repositório para announcements de release.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (14 total)

| PR | Título | Impacto |
|---|---|---|
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | feat(skills): add workspace-scoped preload configuration | ✅ Finalizado — adiciona política `preload` opcional para Skills por workspace |
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | fix(mcp): enforce per-tool whitelist on agent runtime path | ✅ Corrigido — whitelist de ferramentas MCP agora respeitada na runtime do agente |
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) | fix(console): preserve selected loop mode query | ✅ Corrigido — modo Loop (Goal/Mission) preserva seleção corretamente |
| [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) | MCP whitelist not enforced (issue resolvido via #7504) | ✅ Corrigido |

### PRs em revisão ativa (Under Review / Ready-for-human-review)

| PR | Título | Destaque |
|---|---|---|
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | fix(acp): prevent Windows ACP agent stalls | **Crítico** — resolve hang de minutos no bootstrap de workspace em Windows |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | fix(runtime): prevent injected context from persisting | Corrige vazamento de contexto injetado no histórico de chat |
| [#7457](https://github.com/agentscope-ai/QwenPaw/pull/7457) | fix(browser): chrome extension tab group | Corrige criação duplicada de tab groups na extensão Chrome |

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: QwenPaw Hub multi-tenant
**[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** | 22 comentários | 3 👍

> *"QwenPaw started as a personal AI assistant, but the community has repeatedly asked for a better way to run it for a team. QwenPaw Hub is our first response."* — rayrayraykk

**Análise:** Este é o tema estratégico mais importante do momento. A discussão levanta demandas de:
- Acesso multi-usuário com gerenciamento centralizado de Skills
- Escalabilidade para times/organizações
- Possível integração com CodeX CLI e outros agentes externos (#7550)

### Demanda recorrente: Sistema de tarefas em background/off-peak
**[#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568)** | Feature request

Proposta de scheduler de tarefas que aproveite horários de baixo custo de providers (ex: DeepSeek 00:30-08:30) e integração com Batch APIs. Recebeu label de alinhamento com componentes Core/Backend.

### Debate arquitetural: Separação de sessões por canal
**[#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541)** | 3 comentários

Usuário指摘 que sessões são erroneamente segregadas por canal (web, desktop, telegram), sugerindo que o canal é apenas transporte e sessões deveriam ser unificadas por contexto.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| Issue | Descrição | Status |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Tarefas multi-etapa param sem notificação após mensagens como "Let me do all three" — usuário precisa dizer "continuar" | **CLOSED** (necessita follow-up) |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | Mensagem enviada durante execução de tarefa gera erro 409 — deveria entrar em queue | **OPEN** |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Task para de aparecer na UI após clique em "parar", mas continua executando | **CLOSED** |

### 🟡 Altos

| Issue | Descrição | Status |
|---|---|---|
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe embedding/indexing job falha silenciosamente com `as_embedding:default` accessed before start() | **OPEN** |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Consumer de queue em sessão Feishu fica "stuck" — sessão para de responder silenciosamente | **OPEN** |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | Startup de 30-45s mesmo só com canal console ativo — 18 canais são importados incondicionalmente | **OPEN** |

### 🟢 Medios

| Issue | Descrição | Status |
|---|---|---|
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Volcengine Ark API rejeita requests com `input` terminando em assistant turn (400 partial) | **OPEN** |
| [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548) | Navegação/histórico de mensagens se perde após troca de sessão ou restart | **OPEN** |
| [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) | Shell tool em Windows herda stdin do console — comandos que leem stdin causam hang | **OPEN** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| PR/Issue | Feature | Prioridade |
|---|---|---|
| [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | Creator 1.1.2: runtime notification bus, multi-timeline A/B compare, T2V/I2V/S2V | Alta |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Plugin clean unload + rollback-safe hot reload | **Alta** — resolve problema de rebuild total do workspace |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | QwenPaw Mobile (Expo/React Native) — Draft | Estratégica |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | PawPort: import de instruções/settings/skills de Codex e Qoder | Integração |
| [#7561](https://github.com/agentscope-ai/QwenPaw/pull/7561) | Unificar lifecycle de memória automática | Refatoração |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | Sidebar e settings redesign | UX |

### Novas features solicitadas

| Issue | Feature | Observação |
|---|---|---|
| [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | Off-peak task scheduling (baixo custo em horários de vale) | Inspirado em zcode |
| [#7558](https://github.com/agentscope-ai/QwenPaw/issues/7558) | Backend relational storage pluggable (PostgreSQL/MySQL) | Para HA deployments |
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | Metadata de versão para Skills | Gerenciamento de fleet |
| [#7556](https://github.com/agentscope-ai/QwenPaw/issues/7556) | Driver-level fallback chain para MCP | Multi-agent deployments |
| [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | Update em background com notificação | Usabilidade |
| [#7553](https://github.com/agentscope-ai/QwenPaw/issues/7553) | Output de artefatos visível por timestamp na conversa | UX |

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas

1. **Estabilidade em Windows:** Múltiplos issues reports de hangs, stalls e comportamento inconsistente na plataforma Windows (#7401, #7554, #7023). Usuários Windows reportam startup bloqueante de ~60s.

2. **Interrupção de tarefas:** Usuários experimentam comportamento imprevisível ao tentar pausar/continuar tarefas (#6921, #7567, #7559). O erro 409 durante execução ativa é confuso — usuários esperam queue automático.

3. **Memória e contexto:** Falhas silenciosas em ReMe (#7469), perda de histórico de navegação (#7548) e problemas com contexto injetado persistindo (#7211) indicam fragilidade no subsistema de memória.

4. **Performance de startup:** O import incondicional de 18 canais (#7367) causa delays de 30-45s mesmo para uso minimalista. A comunidade solicita lazy loading.

5. **UX de Loop modes:** Seletor de Loop mode não persiste corretamente na UI (#7552, #7555) — gera confusão sobre qual modo está ativo.

### Cenários de uso destacados

- **Uso em equipe:** Discussão ativa sobre QwenPaw Hub multi-tenant indica adoção em contexto organizacional
- **Desktop-first:** Muitas issues específicas de Desktop (copy/paste, startup, tray) mostram base significativa de usuários Desktop
- **Integração com ferramentas locais:** Issues sobre LM Studio, CodeX CLI e MCP indicam ecossistema de extensibilidade sendo explorado
- **Feishu/chat integrations:** Múltiplos bugs específicos de Feishu (#7534) mostram uso em ambiente corporativo chinês

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Comentários | Prioridade |
|---|---|---|---|---|
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | Canal único leva 30-45s de startup | 2026-08-28 | 2 | 🔴 Alta |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | Desktop bloqueia ~60s em Installing Playwright Chromium | 2026-08-14 | 2 | 🟡 Média |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Tarefas param após "Let me do all three" | 2026-08-12 | 12 | 🔴 Crítica (CLOSED, mas pode precisar follow-up) |

### PRs aguardando review há >5 dias

| PR | Título | Criado | Status |
|---|---|---|---|
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | fix(acp): prevent Windows ACP agent stalls | 2026-08-29 | Under Review |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp): add configurable tool call timeout | 2026-08-10 | Under Review |
| [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | perf(drivers): avoid blocking on stale capabilities | 2026-07-23 | Open |

### Recomendações de atenção

1. **#7367** — O problema de startup é user-facing e afeta experiência inicial. Sugere-se priorização de lazy loading dos canais.
2. **#7534** — Bug silencioso de Feishu pode causar perda de dados/confiança em uso corporativo.
3. **#6874** — PR antigo (+25 dias) para feature de timeout em MCP; merece decisão de aceitar/rejeitar/abandonar.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas/abertas | 18 | — |
| PRs abertos | 24 | — |
| PRs merged/fechados | 14 | ✅ Positivo |
| Issues fechadas | 10 | ✅ Positivo |
| Releases | 0 | Neutro |
| Issue com maior engajamento | #7318 (22 comments) | Discussão estratégica |
| PR crítico em revisão | #7401 (Windows stalls) | Requer atenção |

**Saúde geral do projeto:** 🟢 **Saudável, em alta atividade.** O projeto demonstra maturidade com ciclo de review/merge ativo, mas deve atenção especial aos bugs de estabilidade em Windows e ao throughput de PRs mais antigos.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-09-05  
**Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém alto volume de atividade com 34 issues e 50 PRs atualizados nas últimas 24h, sem novos lançamentos. A comunidade demonstra vigor particular em discussões arquiteturais — a RFC #9487 sobre runtime-owned sessions acumula 32 comentários, sinalizando debates densos sobre o modelo de sessões. Seis PRs foram merged/fechados, incluindo a migração do WhatsApp Web para whatsapp-rust 0.7.0, enquanto 42 PRs permanecem abertos em estados variados de revisão. Não há releases recentes, indicando possível fase de estabilização ou freeze antes de uma próxima versão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O milestone tracker [v0.8.5](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) indica uma linha de estabilização com corte semanal, sugerindo que entregas menores estão sendo liberadas incrementalmente sem announcements formais no período recente.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente

| # | Título | Impacto |
|---|--------|---------|
| [#10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153) | feat(whatsapp-web): port to whatsapp-rust 0.7.0 | Migração de dependências git-pinned para crates.io, viabilizando publicação do crates/zeroclaw-channels |
| [#10571](https://github.com/zeroclaw-labs/zeroclaw/pull/10571) | Task: Add dedicated Twitch section to Social Channels guide | Adição de documentação para canal Twitch |

### PRs em Destaque (Em Revisão)

- [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) **feat(runtime): coordinate agent lifecycle mutations** — Unifica autoridade de configuração viva entre daemon RPC, gateway, canais e CLI; PR XL com múltiplos módulos afetados
- [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) **fix(plugins): read machine's trust store for plugin HTTPS** — Segurança: plugins agora leem trust store do SO para HTTPS; flagged como do-not-merge e size:L
- [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) **feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models** — Suporte a modelos com pensamento adaptativo (Claude 5.1, 5, Opus 4.7/4.8, 5, Sonnet 5)
- [#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) **fix(hooks): correlate webhook audit calls by identity** — Aprimora segurança de webhooks com correlação por identidade

---

## 4. Temas Quentes da Comunidade

### Discussões Mais Ativas (por comentários)

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 32 | RFC — Revisão 5, proposta arquitetural significativa |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction | 16 | RFC — Suporte a interação visual desktop |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp allowed_groups as permit-none | 14 | RFC — Correção de comportamento de segurança |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway | 13 | RFC — Nova rota de gateway para envio direto |

**Análise:** O volume de RFCs com discussões ativas indica que a comunidade está intensamente focada em design arquitetural. Temas recorrentes incluem segurança de canais (WhatsApp, allowed_groups), abstrações de runtime e modelos de sessão. A RFC #9487, em revisão 5, representa o debate mais substancial — possivelmente um ponto de inflexão arquitetural.

---

## 5. Bugs e Estabilidade

### P1 — Criticidade Alta (S1: workflow bloqueado ou S1: security risk)

| # | Título | Componente | Status |
|---|--------|------------|--------|
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode providers nunca enviam x-opencode-session, quebrando Go models | provider | in-progress |
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | zerocode ignora diretório de launch e força workspace do agente | zerocode/tui | in-progress |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Respostas terminais incompletas reportadas como sucesso | runtime/daemon | in-progress |
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web responde DMs/grupos com empty allowed_groups (S1 security) | channel:whatsapp | in-progress |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Image markers ignoram validação no seam run_model_query | agent/provider | accepted |
| [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) | Erros de tool execution descartam body detalhado | tools | accepted |

### P2/P3 — Degradados e Issues Menores

- [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) — TTS sintetiza Markdown e emoji literalmente (S2)
- [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) — Placeholder `[media attachment]` entregue quando modelo não suporta visão (S2)
- [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) — cron não registra jobs que não executam (S2)
- [#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) — backup.schedule_cron agenda nada silenciosamente (S1)

**Observação:** O PR dependabot [#10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587) está em rebase com 49 atualizações Rust — merece atenção para validar compatibilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentes em Proposta

| # | Título | Prioridade | Signal |
|---|--------|------------|--------|
| [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) | Anthropic prompt-cache passthrough para providers OpenAI-compatible | P1 | Cache em provedores compatíveis |
| [#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) | Aumentar max_image_size_mb para 20 e documentar | P2 | Limites de multimídia |
| [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) | Docs CI validar links internos repo-wide | P2 | Qualidade de documentação |
| [#10579](https://github.com/zeroclaw-labs/zeroclaw/issues/10579) | Páginas CLI/Config missing mas no ToC | P2 | Doc debt |

### Indicadores de Roadmap

- **RFC #9487** (32 comentários) — sessões owned pelo runtime sugere evolução do modelo de isolamento
- **RFC #6909** — suporte computer-use indica ambição de automação de desktop
- **RFC #10050** — gateway com send verbatim sinaliza necessidade de integrações mais diretas
- **RFC #9530** — precedência de risco para mudanças de teste indica maturidade de processos

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Segurança de configuração (WhatsApp):** Usuários que configuram `allowed_groups` como lista vazia esperando lockdown descobrem que o sistema admite todos os grupos — comportamento counter-intuitivo com risco S1 ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348), [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397))

2. **Erros opacos em ferramentas:** Quando tool calls falham, agentes recebem apenas "HTTP 400" sem detalhes do corpo do erro, dificultando debugging ([#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357))

3. **Experiência ZeroCode degradada:** Navegação bloqueada ao entrar pane Chat inativo; Ctrl+C dropado durante reconnect; workspace sempre resetado ao diretório do agente ([#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390), [#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223), [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609))

4. **TTS e mídia problemáticos:** Usuários relatam Markdown sendo falado verbatim, emoji pronunciado por nome, e voice notes com duração zerada ([#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626), [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625))

5. **Escalabilidade de Bedrock:** Modelos Nova 2 Lite apresentam caching errors que usuários não conseguem desabilitar via config ([#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720))

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente ou Aguardando Resposta

| # | Título | Criado | Atualizado | Estado | Prioridade |
|---|--------|--------|------------|--------|------------|
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | v0.8.5 finite weekly stabilization line | 2026-07-27 | 2026-09-04 | no-stale | P2 |
| [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) | Tracker: Accepted RFC implementation index | 2026-08-25 | 2026-09-04 | no-stale | P2 |
| [#9529](https://github.com/zeroclaw-labs/zeroclaw/issues/9529) | Add visible close control to ZeroCode TodoWrite tracker | 2026-07-29 | 2026-09-04 | in-progress | P2 |

### PRs Bloqueados ou Aguardando Ação

| # | Título | Bloqueio | Tipo |
|---|--------|----------|------|
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | feat(runtime): expose token accounting on history-trim events | status:blocked | feature |
| [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) | fix(plugins): read trust store for plugin HTTPS | do-not-merge | security fix |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | fix(providers): rotate live credentials after rate limits | do-not-merge | security fix |

**Recomendação:** O tracker de RFCs implementados ([#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330)) está com 0 comentários e pode indicar necessidade de sincronização entre decisão e execução. Os PRs marcados como `do-not-merge` merecem resolução — são correções de segurança pendentes.

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 24 |
| Issues fechadas (24h) | 10 |
| PRs abertos | 42 |
| PRs merged/fechados (24h) | 8 |
| Releases | 0 |
| RFCs em discussão | 5+ |
| Bugs P1 em progresso | 6 |
| Contributors ativos (distinguished) | 4+ (Audacity88, IftekharUddin, JordanTheJet, sebkraemer) |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Última atualização: 2026-09-05.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*