# Resumo diário do ecossistema de agentes de IA 2026-07-27

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-26 20:51 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-27

---

## 1. Panorama do dia

O projeto NullClaw apresenta **baixa atividade** nesta data. Uma única issue foi atualizada nas últimas 24 horas, referente a um bug crítico de segmentation fault no processamento de mensagens Telegram em arquiteturas aarch64. Nenhum pull request foi merged ou criado, e nenhuma release foi publicada, indicando um período de estagnação no desenvolvimento ativo. O incidente reportado representa um risco significativo para ambientes de produção que utilizam o gateway como serviço systemd com reinicialização automática.

---

## 2. Lançamentos

**Nenhum lançamento nas últimas 24 horas.**

A última versão estável disponível é **v2026.5.29**, que aparenta conter a regressão responsável pelo crash em sistemas ARM64. Não há informações sobre planos de hotfix imediato.

---

## 3. Progresso do projeto

**Nenhum PR merged ou fechado nas últimas 24 horas.**

O projeto não demonstrou avanço em código durante este período. A ausência de atividade de merge pode indicar:
- Foco da equipe em investigação/debugging da issue crítica aberta
- Período de férias ou baixa disponibilidade dos mantenedores
-等待反馈 ou dependência de informações externas para avançar

---

## 4. Temas quentes da comunidade

### Issue em destaque:

| Campo | Detalhe |
|-------|---------|
| **#976** | SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows |
| **Status** | OPEN |
| **Autor** | wonhotoss |
| **Criado** | 2026-07-16 (11 dias atrás) |
| **Atualizado** | 2026-07-26 (1 dia atrás) |
| **Comentários** | 3 |
| **Reações** | 0 |
| **Link** | [nullclaw/nullclaw#976](https://github.com/nullclaw/nullclaw/issues/976) |

**Análise:** Embora não tenha reações, a issue descreve um bug de severidade crítica — crash consistente em todo mensagem recebida via Telegram em plataformas aarch64. O comportamento de "crash-loop" com `Restart=always` resulta em perda total de funcionalidade para usuários afetados. A descrição menciona overflow de stack (~512 KB) no worker thread, sugerindo problema de configuração de thread ou vazamento de memória. Com 3 comentários, há engajamento moderado na resolução.

---

## 5. Bugs e estabilidade

### Bug Crítico (Alta Severidade):

**#976 — SIGSEGV em mensagens Telegram inbound (aarch64 Linux)**

- **Severidade:** CRÍTICA
- **Ambiente:** Linux aarch64, nullclaw v2026.5.29
- **Sintoma:** Segmentation fault em cada mensagem Telegram recebida
- **Impacto:** Crash-loop em serviços systemd, mensagens perdidas, sem resposta aos usuários
- **Estado:** Aberto há 11 dias, última atualização há 1 dia
- **Causa provável:** Stack overflow no worker thread inbound (~512 KB insuficientes)

**Recomendação de SLA:** Este bug deveria receber atenção prioritária da equipe, dado seu impacto em produção.

---

## 6. Pedidos de features e sinais de roadmap

**Nenhuma issue de feature request atualizada nas últimas 24 horas.**

Não há indicadores de direção de roadmap neste período. A equipe parece focada (ou deve estar focada) na resolução do bug crítico ao invés de implementar novas funcionalidades.

---

## 7. Resumo de feedback dos usuários

### Padrão identificado:

| Aspecto | Feedback |
|---------|----------|
| **Confiabilidade** | Insatisfeito — crashes consistentes em ambiente de produção |
| **Compatibilidade** | Insatisfeito — regressão em arquitetura aarch64 |
| **Usabilidade** | Negativamente impactada — mensagens são dropadas sem notificação |
| **Suporte** | Parcial — issue criada há 11 dias com 3 comentários de interação |

**Dores relatadas:**
1. Sistema instável em produção com restart automático que não resolve o problema
2. Experiência degradada: usuário não recebe resposta a mensagens
3. Falha específica de plataforma que pode não ter sido testada em CI/CD

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa:

| # | Título | Idade | Prioridade |
|---|--------|-------|------------|
| #976 | SIGSEGV on every inbound Telegram message | 11 dias | 🔴 CRÍTICA |

**Observação:** A issue #976 é a **única atividade recente** do projeto. Com 11 dias sem resolução e impacto crítico em produção, esta issue deve ser tratada como emergência. Recomenda-se:

1. **Reproduzir localmente** em ambiente aarch64
2. **Analisar configurações de stack** do worker thread
3. **Verificar se houve mudança recente** entre versões que possa ter causado a regressão
4. **Considerar rollback** para versão anterior se hotfix demorar
5. **Comunicar usuários afetados** sobre workaround temporário (e.g., desabilitar processamento Telegram ou usar arquitetura x86_64)

---

## Métricas do período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 0 |
| PRs merged/fechadas (24h) | 0 |
| Releases (24h) | 0 |
| Engajamento (comentários) | 3 |
| Saúde geral | 🟡 Atenção necessária |

---

*Relatório gerado em 2026-07-27 com base nos dados disponíveis do repositório [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

## Data de Referência: 2026-07-27

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **polarização significativa** no período analisado. Enquanto ZeroClaw, Hermes Agent e NanoBot demonstram vigoroso ciclo de desenvolvimento com dezenas de PRs diários, NullClaw permanece em estagnação com uma única issue crítica aberta há 11 dias sem resolução. A tendência predominante é a **maturação operacional**: projetos avançados concentram-se em confiabilidade de produção (recovery systems, RBAC, testes multiplataforma), enquanto a superfície de ataque em segurança revela-se subestimada em implementações mais recentes. A demanda comunitária por integrações multiplataforma (WhatsApp, Telegram, DingTalk, Buzz) e arquiteturas flexíveis (MCP, WASM plugins) indica fragmentação do ecossistema de plugins como principal vetor de crescimento.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Merged (24h) | Releases | Saúde | Tendência |
|---------|---------------------|------------------|----------|-------|-----------|
| **NullClaw** | 1 | 0 | 0 | 🔴 Crítica | ↓ Estagnação |
| **NanoBot** | 1 | 22 | 0 | 🟢 Alta | ↑ Estável |
| **Hermes Agent** | 34 | 26 | 0 | 🟡 Boa* | ↑ Consistentes |
| **PicoClaw** | 4 | 2 | 0 | 🟡 Moderada | → Normal |
| **IronClaw** | 3 | 7 | 0 | 🟢 Alta | ↑ Refatoração |
| **CoPaw/QwenPaw** | 14 | 0 | 0 | 🟡 Moderada* | ⚠️ Bugs acumulados |
| **ZeroClaw** | 44 | 1 | 0 | 🔴 Alerta | ⚠️ Segurança |

*\*Indica backlog de issues não atribuídas ou P2+ pendentes*

**Observação crítica**: Nenhum projeto publicou releases no período, indicando fase concentrada de estabilização pré-release em todo o ecossistema.

---

## 3. Posicionamento do Projeto Principal

### Análise por Tier

**Tier 1 — Líderes de Velocidade (NanoBot, Hermes Agent, IronClaw)**

Estes três projetos dominam em volume de contribuição e maturidade arquitetural:

- **NanoBot** apresenta o **índice de resolução mais alto** (88% de issues fechadas) com 22 PRs mergeados em 24h, indicando equipe enxuta porém extremamente produtiva. Diferencia-se pela excelência em múltiplas integrações de canal (DingTalk, Feishu, WeChat) e foco em integridade de dados em sessões longas.

- **Hermes Agent** lidera em **engajamento comunitário** (100+ atividades combinadas de issues/PRs) e possui roadmap mais explícito com features enterprise como RBAC hierárquico (#527) e restauração automática de serviços pós-update. Seubacklog P2 (12 bugs) representa risco estratégico.

- **IronClaw** destaca-se pela **abordagem sistemática de reliability** com a epic #6284 de error-recoverability, introduzindo contratos formais onde todo erro mid-run deve satisfazer cinco condições. Representa a frente mais avançada em dependability engineering.

**Tier 2 — Consolidadores (PicoClaw, CoPaw/QwenPaw)**

- **PicoClaw** mantém ritmo sustentável com foco em **security hardening** (Go 1.25.12 bump) e expansão de toolset (Calendar, Email, GitHub). PR #3297 de hardening de remote exec demonstra consciência de superfície de ataque.

- **CoPaw/QwenPaw** demonstra comunidade ativa porém **sem ritmo de integração**: 14 issues abertas versus 0 PRs mergeados no período. O padrão indica gargalo de review ou falta de mantenedores para triage.

**Tier 3 — Atenção Crítica (NullClaw, ZeroClaw)**

- **NullClaw** requer **intervenção emergencial**: bug crítico de segmentation fault (#976) aberto há 11 dias com impacto em produção, nenhuma atividade de código, versão estável v2026.5.29 aparentemente contendo regressão ARM64.

- **ZeroClaw** apresenta **crise de segurança**: 9+ issues P1 de vulnerabilidades ativas, incluindo vazamento de API keys, bypass de políticas de canal, e WASM plugins sem timeout. A CI que não executa Windows silencia 74 testes falhando, configurando risco operacional severo.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Recuperação de Contexto e Integridade de Dados

Três projetos demonstram foco simultâneo em falhas de contexto/mensagens:

| Projeto | Issue | Descrição |
|---------|-------|-----------|
| **NanoBot** | #4792 | `/stop` descarta mensagens pendentes |
| **NanoBot** | #4924 | `_pick_heartbeat_target_from_sessions` falha com `unifiedSession: true` |
| **NanoBot** | #5056 | Perda de contexto em recuperação por limite de tokens |
| **IronClaw** | Epic #6284 | Contrato formal de error-recoverability |
| **Hermes Agent** | #56580 | Kanban creator wake mis-routes DM |

**Análise**: A prevalência de bugs de "lost state" indica que sessões de longa duração em agentes stateful são architecturalmente desafiadoras. A solução de IronClaw (contratos formais) pode informar padrões para o ecossistema.

### 4.2 Testes Multiplataforma

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **NullClaw** | SIGSEGV específico para aarch64 | Produção ARM64 |
| **Hermes Agent** | Telegram travando no Windows | Usuários Windows |
| **ZeroClaw** | 74 testes falhando no Windows (não executados em CI) | Cobertura insuficiente |

**Análise**: A negligência de Windows e arquiteturas ARM em pipelines CI é padrão transversal, sugerindo que equipes são predominantemente Linux-native.

### 4.3 Segurança de Plugins e Sandbox

Três projetos estão convergindo para hardening de plugins:

- **PicoClaw** (#3297): Remote exec desabilitado por default, enforcement de origin policy
- **ZeroClaw** (#9403): WASM exports bound by wall-clock deadline
- **IronClaw** (#6686): Deprecation de `DockerProcessSandboxBackend`

**Análise**: O movimento para sandboxing estrito (WASM, bwrap, Docker) indica maturação do ecossistema em direção a produção enterprise.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Indicadores |
|---------|------------------|-------------|
| **NullClaw** | Utilitários Telegram específicos | Gateway systemd, mensagens inbound |
| **NanoBot** | Usuários enterprise asiáticos | DingTalk, Feishu, WeChat, Kimi/Moonshot |
| **Hermes Agent** | Operadores multi-mensageiro | RBAC, múltiplos plugins, Anthropic/Claude |
| **IronClaw** | Desenvolvedores de agentes avançados | Attested signing, MCP discovery, formal specs |
| **ZeroClaw** | Equipes de segurança/corporativas | WASM plugins, localization (Fluent), auth |
| **CoPaw/QwenPaw** | Automação criativa | ComfyUI, video pipeline, browser automation |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Características |
|-----------|----------|-----------------|
| **Event-driven centralizado** | NullClaw, Hermes Agent | Gateway como hub, workers por canal |
| **Modular plugin-based** | ZeroClaw, PicoClaw | WASM/bwrap isolation, capability catalog |
| **Multi-provider routing** | NanoBot, CoPaw | Abstração deLLM providers, fallback |
| **Formal/verified** | IronClaw | ADR baseline, recoverability conformance |

### 5.3 Diferenciação Técnica Significativa

**IronClaw** é o único projeto com:
- Contratos formais de recoverability (§11.7)
- Attested signing para intent de agentes
- Mutation-audit harness para prevenir regressões

**ZeroClaw** lidera em:
- Endpoint de compatibilidade OpenAI (#8486) para ecossistemas LangChain/Continue.dev
- Localization via Fluent para i18n de dashboard
- TRC de plugins WASM em produção

**NanoBot** diferencia-se por:
- Suporte nativo a provedores chineses (Kimi/Moonshot)
- Feature de "Dream batches" para background processing
- Heartbeat unificado entre sessões

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | NanoBot | Hermes Agent | IronClaw | ZeroClaw | CoPaw |
|---------|---------|--------------|----------|----------|-------|
| **PRs/24h merged** | 22 | 26 | 7 | 1 | 0 |
| **Tempo médio PR→merge** | 1-3 dias | Same-day | ~5 dias | N/A | N/A |
| **Contribuidores únicos (24h)** | 9 | ~20 | ~8 | ~15 | ~5 |
| **Issues fechadas/ativas** | 88% | 32% | N/A | 0% | 0% |

**Veredicto**: NanoBot e Hermes Agent são os projetos com ciclo de release mais curto. ZeroClaw e CoPaw apresentam gargalo de review/integração.

### 6.2 Maturidade Organizacional

| Indicador | IronClaw | Hermes Agent | NanoBot | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **RFC process** | ADR baseline | Issue tagging estruturado | Implicit | RFC #8303 |
| **Breaking changes tracking** | PR #5598 milestone | Changenotes implícitas | N/A | v0.9.0 tracker |
| **Security disclosure** | P1 issues etiquetadas | Bug bounty N/A | N/A | 9+ P1 security |
| **Backlog management** | Epic centralizado | P2/P3 backlog | Sprint-based | Zombies + stale |

### 6.3 Sinais de Estagnação

**NullClaw** apresenta todos os indicadores clássicos:
- Bug crítico >7 dias sem resposta
- Zero PRs merged
- Última release contém regressão
- Ausência de roadmap explícito

**Recomendação**: O projeto NullClaw deveria ser considerado para **intervenção de emergência** ou transição para modo de manutenção caso a equipe core não retorne em 14 dias.

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness

O ecossistema está movendo coletivamente para requisitos de produção:

| Tendência | Evidência |
|-----------|-----------|
| **RBAC hierárquico** | Hermes Agent #527 (10👍, 15 comentários) |
| **Auth moderno** | IronClaw Phase B signing, ZeroClaw v0.9.0 auth |
| **Compliance logging** | ZeroClaw #9391 (audit logging inútil = risk) |
| **Recovery contracts** | IronClaw epic #6284 |
| **Systemd integration** | Hermes Agent #72192, #72198 |

### 7.2 Multi-Channel como Padrão

Demanda por integrações de mensageiros explode:

- **WhatsApp business**: ZeroClaw #9348 (vulnerabilidade crítica)
- **Buzz workspace**: Hermes Agent #68871 (12👍)
- **DingTalk/Feishu**: NanoBot #4446
- **Matrix E2E**: CoPaw/QwenPaw #6476 (falha de libolm)
- **Telegram**: NullClaw #976, Hermes Agent #68465

### 7.3 Plugin Architecture como Competitive Moat

| Arquitetura | Projeto | Maturidade |
|-------------|---------|------------|
| **MCP (Model Context Protocol)** | NanoBot, CoPaw, ZeroClaw | Emergente (driver issues) |
| **WASM plugins** | ZeroClaw | Beta (deadline bounds P1) |
| **bwrap sandbox** | NanoBot #4107, IronClaw | Madura |
| **Browser unificado** | CoPaw #6276 | RFC (SDK agnóstico) |

### 7.4 Segurança como Bottleneck

ZeroClaw expôs **9 vulnerabilidades P1** em 24h, indicando que:

1. **Superfície de ataque é subestimada** em fases iniciais
2. **Testes de penetração comunitários** estão ativos
3. **Release de patch de segurança** é urgente necessidade

### 7.5 Local-First e Edge Computing

| Projeto | Feature | Impacto |
|---------|---------|---------|
| NanoBot | Scan interval configurável (#5036) | Raspberry Pi deployments |
| Hermes Agent | Ollama local (#72198) | SOUL.md injection |
| IronClaw | WASM runtime | Execution em edge |

### 7.6 API Compatibility como Estratégia

A adição de **endpoint OpenAI compatibilizado** em ZeroClaw (#8486) sinaliza estratégia para capturar usuários de ecossistemas LangChain/Aider/Continue.dev. Este é um diferenciador de mercado significativo que outros projetos devem monitorar.

---

## Síntese Executiva

| Ação | Prioridade | Projetos |
|------|------------|----------|
| **Intervenção de emergência** | 🔴 CRÍTICA | NullClaw (#976) |
| **Patch de segurança** | 🔴 CRÍTICA | ZeroClaw (9 P1) |
| **Triage de backlog** | 🟡 ALTA | Hermes Agent (12 P2), CoPaw (4 P1 sem assignee) |
| **Expansão CI Windows/ARM** | 🟡 ALTA | Todos |
| **RFC de recoverability** | 🟢 OPORTUNIDADE | Ecossistema (IronClaw pattern) |
| **API compat OpenAI** | 🟢 OPORTUNIDADE | NanoBot, Hermes Agent |

---

*Relatório gerado em 2026-07-27. Dados extraídos dos relatórios de atividade comunitária dos repositórios GitHub de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot
## Data: 27 de julho de 2026 | Repositório: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Panorama do Dia

O projeto NanoBot apresentou **atividade intensa** em 26 de julho de 2026, com 28 PRs atualizados e 8 issues processadas. A equipe demonstra foco consistente em **estabilidade e robustez**: 22 PRs foram merged/fechados, com destaque para múltiplas correções de segurança (p1) e 6 correções de bugs críticos relacionadas a contextos de runtime, filas de mensagens e validação de esquemas. Não houve lançamentos de novas versões, indicando provável fase de maturização pré-release. A manutenção do backlog permanece saudável com tempo de resposta rápido em issues críticas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se verificar o [histórico de releases](https://github.com/HKUDS/nanobot/releases) para acompanhar o último tag estável.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas (22 total)

| PR | Autor | Tema | Prioridade |
|----|-------|------|------------|
| [#5054](https://github.com/HKUDS/nanobot/pull/5054) | shixi-li | fix(memory): progress past completed no-op Dream batches | p1 |
| [#5056](https://github.com/HKUDS/nanobot/pull/5056) | chengyongru | fix(agent): preserve output across length recovery | p1 |
| [#5057](https://github.com/HKUDS/nanobot/pull/5057) | amplifierplus | fix(mcp): normalize local schema refs | p1 |
| [#5069](https://github.com/HKUDS/nanobot/pull/5069) | KDB-Wind | fix(channels): ignore confirmations after connect cancellation | p1 |
| [#5088](https://github.com/HKUDS/nanobot/pull/5088) | santhreal | fix(pairing): treat null approved/pending maps as empty | p1 |
| [#5084](https://github.com/HKUDS/nanobot/pull/5084) | yu-xin-c | fix(agent): preserve pending message runtime context | p1 |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | yu-xin-c | fix(heartbeat): route unified sessions to last channel | p1 |
| [#5100](https://github.com/HKUDS/nanobot/pull/5100) | chengyongru | fix(webui): prevent long messages from widening mobile thread | p1 |
| [#5087](https://github.com/HKUDS/nanobot/pull/5087) | santhreal | fix(triggers): treat null runHistory as empty | p1 |
| [#5089](https://github.com/HKUDS/nanobot/pull/5089) | santhreal | fix(feishu): tolerate null multi_url and list fields | p1 |
| [#5092](https://github.com/HKUDS/nanobot/pull/5092) | santhreal | fix(triggers): coerce string lastRunAtMs | p1 |
| [#5093](https://github.com/HKUDS/nanobot/pull/5093) | santhreal | fix(feishu): tolerate null text fields | p1 |
| [#4656](https://github.com/HKUDS/nanobot/pull/4656) | stupidloud | fix(image): pass aspect ratio and size to Gemini Flash | p2 |
| [#4939](https://github.com/HKUDS/nanobot/pull/4939) | chengyongru | fix(cli): support Codex OAuth in Quick Start | p2 |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | lmzopq | feat(dingtalk): gate private chats and mention sender | p2 |
| [#5036](https://github.com/HKUDS/nanobot/pull/5036) | khmylov | feat(agent): make idle compaction scan interval configurable | p2 |
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | yu-xin-c | feat(exec): allow extra bwrap bind roots | - |

### Destaques de Progresso

1. **Correções de Memória e AgentRunner**: As correções [#5054](https://github.com/HKUDS/nanobot/pull/5054) e [#5056](https://github.com/HKUDS/nanobot/pull/5056) resolvem problemas críticos de perda de dados em recuperação de contexto e sonhos (Dream), melhorando significativamente a confiabilidade em sessões longas.

2. **Segurança reforçada**: O PR [#5095](https://github.com/HKUDS/nanobot/pull/5095) (open) implementa endurecimento de downloads de URLs de imagens geradas, incluindo validação de redirects e cap de 32 MiB.

3. **Escalabilidade para dispositivos受限**: A feature [#5036](https://github.com/HKUDS/nanobot/pull/5036) permite configurar o intervalo de compactação ociosa, beneficiando deployments em hardware limitado como Raspberry Pi.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atividade

| Issue | Autor | Tema | Comentários | 👍 |
|-------|-------|------|-------------|-----|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | wzrayyy | Bug: unifiedSession com sessões vazias | 4 | 0 |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | hamb1y | Bug: /stop descarta mensagens pendentes | 2 | 0 |
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Kyakui | Enhancement: bind mounts customizados no bwrap | 2 | 1 |
| [#4603](https://github.com/HKUDS/nanobot/issues/4603) | chengyongru | Refactor: WebUI file-edit progress | 2 | 0 |

### Análise de Demandas

**Bugs funcionais críticos**: As issues #4924 e #4792 indicam problemas com gerenciamento de sessões unificadas e comandos de parada, ambos resultando em perda de dados. A comunidade reporta cenários de uso real que expõem gaps no tratamento de edge cases.

**Enhancement em sandbox**: A demanda por bind mounts customizados no bwrap (#4107) demonstra necessidade de flexibilidade em ambientes de execução isolada, possivelmente para integrações corporativas.

---

## 5. Bugs e Estabilidade

### Issue Aberta (1)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | **Crítica** | `/stop` descarta silenciosamente mensagens da fila pendente — perda permanente de mensagens. O código faz `get_nowait()` mas não republica para o message bus. |

### Bugs Fechados (7)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | Alta | `_pick_heartbeat_target_from_sessions` falha com `unifiedSession: true` e sessão única |
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Alta | Mensagens mid-turn perdem contexto sender/channel/chat runtime |
| [#5051](https://github.com/HKUDS/nanobot/issues/5051) | Alta | `AgentRunner` perde segmentos anteriores na recuperação por limite de tokens |
| [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Média | Dream batches completados sem diff travam entradas de histórico |
| [#5040](https://github.com/HKUDS/nanobot/issues/5040) | Alta | Schema MCP com `$ref` não padronizado desabilita modelo inteiro (Kimi/Moonshot) |

### Padrões Identificados

- **3 bugs relacionados a perda de contexto/mensagens**: Indicam necessidade de revisão na arquitetura de filas e gestão de estado.
- **2 bugs de Dream/memory**: Sugerem complexidade na lógica de compaction e cursor advancement.
- **1 bug de integração provider**: Validação de schemas entre provedores heterogêneos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancement Aberta

| # | Autor | Tema | Reações |
|---|-------|------|---------|
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Kyakui | Configurar bind mounts adicionais para sandbox bwrap | 👍 1 |

### Features Implementadas (2)

| # | Descrição |
|---|-----------|
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | DingTalk: flag `disable_private_chat` + menção de remetente em grupos |
| [#5036](https://github.com/HKUDS/nanobot/pull/5036) | Torne configurável o intervalo de scan de compactação ociosa |

### Sinais de Roadmap

1. **Melhoria de UX mobile**: Corrigido alargamento de thread em mensagens longas em dispositivos móveis (#5100).
2. **Flexibilidade de sandbox**: Permissão de bind roots customizados para ferramentas exec (#4625).
3. **Suporte a novos provedores**: Integração Codex OAuth no Quick Start (#4939).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Issue | Impacto |
|---------|-------|---------|
| Loss of messages on `/stop` | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | **Crítico** — Usuários perdem mensagens não processadas |
| High CPU em idle (Raspberry Pi) | [#5036](https://github.com/HKUDS/nanobot/pull/5036) | **Alto** — Deployments limitados prejudicados |
| Crash com `unifiedSession` | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | **Médio** — Edge case em reinicializações |
| Provider rejection (Kimi/Moonshot) | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | **Alto** — Incompatibilidade com provedores strict |

### Cenários de Uso Identificados

- **Deployments heterogêneos**: Desktop, servidores, IoT (Raspberry Pi)
- **Canais múltiplos**: DingTalk, WeChat, Feishu com behaviors distintos
- **LLM providers variados**: OpenAI, Gemini, Kimi/Moonshot com validações diferentes
- **Segurança em downloads**: Imagens geradas por providers exigem SSRF protection

### Satisfação

O volume de PRs mergeados (22 em 24h) e a rápida resolução de issues indicam **saúde operacional elevada**. A presença de múltiplos contribuidores (santhreal, chengyongru, yu-xin-c) sugere comunidade ativa.

---

## 8. Backlog que Merece Atenção

### PRs Abertos sem Atualização Recente

| # | Autor | Tema | Prioridade | Nota |
|---|-------|------|------------|------|
| [#5095](https://github.com/HKUDS/nanobot/pull/5095) | Re-bin | fix(security): harden generated image URL downloads | p1 | Segurança — precisa review urgente |
| [#5101](https://github.com/HKUDS/nanobot/pull/5101) | chengyongru | fix(image): honor provider proxy for URL downloads | p1 | Segurança de rede |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | hamb1y | Bug: /stop silently discards pending messages | **Aberta** | Perda de dados — requer assignee |
| [#5099](https://github.com/HKUDS/nanobot/pull/5099) | yu-xin-c | fix(memory): preserve unprocessed dream history | p1 | Integridade de dados |

### Issues Antigas sem Resolução

| # | Criado | Tema | Status |
|---|--------|------|--------|
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | 2026-05-30 | Enhancement: bwrap bind mounts customizados | Closed (PR #4625) ✅ |

---

## Métricas Resumidas (2026-07-26)

| Métrica | Valor |
|---------|-------|
| Issues ativas | 1 |
| Issues fechadas | 7 |
| PRs abertos | 6 |
| PRs mergeados/fechados | 22 |
| Releases | 0 |
| Contribuidores únicos (PRs) | 9 |

**Índice de Resolução**: 88% (7/8 issues fechadas)  
**Velocidade de Review**: Alta — média de 1-3 dias entre PR e merge

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-07-27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-27

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. O projeto demonstra vigor no ciclo de desenvolvimento: 26 PRs foram merged/fechados, indicando entrega contínua de correções. A comunidade está particularmente engajada em torno de funcionalidades de **permissões granulares para gateways** (issue #527 com 15 comentários) e **integração com Buzz** (12 reações positivas). As correções de hoje concentraram-se em **estabilidade do Kanban**, **restauração de serviços após updates** e **manipulação de mídia**, revelando um foco em maturidade operacional. Não houve releases formais, sugerindo trabalho de estabilização pré-release ou foco em contributions do trunk.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto não publicou novas versões. Isso contrasta com o volume significativo de PRs fechados, indicando que as mudanças estão sendo acumuladas para uma futura release ou que o trabalho atual é de manutenção/bugfixing integrado diretamente no trunk.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechados hoje**, representando avanços significativos:

| PR | Título | Impacto |
|----|--------|---------|
| [#72185](https://github.com/NousResearch/hermes-agent/pull/72185) | `fix(update): never blind-reinstall cua-driver during hermes update` | Elimina hang de até 660s no Windows durante updates |
| [#72192](https://github.com/NousResearch/hermes-agent/pull/72192) | `fix(update): restart supervised and manually-started backends after update` | Restauração automática de serviços pós-update (systemd + processos manuais) |
| [#72191](https://github.com/NousResearch/hermes-agent/pull/72191) | `fix(gateway): kanban wakes resume creator's DM/thread session` | Corrige wakeups de Kanban que iam para sessão errada (grupo vs. DM) |
| [#69391](https://github.com/NousResearch/hermes-agent/pull/69391) | `fix(kanban): preserve creator chat scope for terminal wakes` | Idem — garante que notificações de terminal cheguem ao creator correto |
| [#64113](https://github.com/NousResearch/hermes-agent/pull/64113) | `fix(kanban): persist creator chat_type so DM/thread wakes route correctly` | Persistência de `chat_type` para routing correto de DMs |
| [#52327](https://github.com/NousResearch/hermes-agent/pull/52327) | `fix: preserve dashboard process across hermes update` | Dashboard não morre mais durante update (corrige #52218) |
| [#40616](https://github.com/NousResearch/hermes-agent/pull/40616) | `fix: restart dashboard service after update` | Reinicialização de systemd units do dashboard |
| [#16585](https://github.com/NousResearch/hermes-agent/pull/16585) | `fix(gateway): skip MEDIA tags inside code blocks` | Evita envio de "arquivos" que são exemplos de código |
| [#53586](https://github.com/NousResearch/hermes-agent/pull/53586) | `fix(gateway): deduplicate repeated media tags` | Evita duplicação de documentos/imagens em respostas subsequentes |

**Síntese:** O tema dominante foi **operacionalização robusta** — updates que não derrubam serviços, restauração automática de backends, e fiabilidade do sistema de notificações Kanban.

---

## 4. Temas Quentes da Comunidade

As issues e PRs com maior engajamento (comentários + reações):

### 🔥 #527 — Gateway Permission Tiers (RBAC)
- **Link:** [NousResearch/hermes-agent#527](https://github.com/NousResearch/hermes-agent/issues/527)
- **Comentários:** 15 | **Reações:** 10 👍
- **Resumo:** Proposta para substituir o modelo binário de autorização (tudo ou nada) por roles hierárquicos: Owner > Admin > User > Guest. impacta todas as plataformas de messenger.
- **Análise:** Esta é a demanda de feature mais debatida do período. O modelo atual é um risco de segurança conhecido. A comunidade demonstra urgência (P2, tag `needs-decision`).

### 🔥 #68871 — Integração com Buzz
- **Link:** [NousResearch/hermes-agent#68871](https://github.com/NousResearch/hermes-agent/issues/68871)
- **Comentários:** 13 | **Reações:** 12 👍
- **Resumo:** Adicionar suporte de messaging para Buzz (workspace self-hostable da Block para humanos e agentes).
- **Análise:** Forte interesse da comunidade em expandir ecossistema de plataformas. Alto upvote relativo ao tempo de existência (5 dias).

### ⚠️ #65564 — Anthropic OAuth com Claude Pro/Max
- **Link:** [NousResearch/hermes-agent#65564](https://github.com/NousResearch/hermes-agent/issues/65564)
- **Comentários:** 2 | **Reações:** 0
- **Resumo:** Usuários com assinatura Pro/Max hitam "out of extra usage" — o sistema está routando através do endpoint pay-per-token ao invés da quota de assinatura.
- **Análise:** Issue de **billing direto** com severidade P2. Afeta usuários que esperam benefícios de assinatura.

### 📊 #68879 — Kanban DM Session Routing (PR merged)
- **Link:** [NousResearch/hermes-agent#68879](https://github.com/NousResearch/hermes-agent/pull/68879)
- **Resumo:** Fix multicamada para um problema crônico: tarefas criadas via DM não retomavam a sessão correta ao atingir estado terminal.

---

## 5. Bugs e Estabilidade

Distribuição dos bugs reportados/atuais por severidade:

### P1 (Crítico) — Nenhum reportado

### P2 (Alta) — 12 bugs ativos
| Issue | Título | Componente | Área |
|-------|--------|------------|------|
| [#67764](https://github.com/NousResearch/hermes-agent/issues/67764) | `cost_status` overwritten on every API call | agent | billing, usage-cost |
| [#65564](https://github.com/NousResearch/hermes-agent/issues/65564) | Anthropic OAuth routes to wrong endpoint | provider/anthropic | billing, auth |
| [#68465](https://github.com/NousResearch/hermes-agent/issues/68465) | Telegram stuck at "Connecting" on Windows | plugins, telegram | platform/windows |
| [#65666](https://github.com/NousResearch/hermes-agent/issues/65666) | Interrupted response rendered twice | cli | streaming |
| [#54326](https://github.com/NousResearch/hermes-agent/issues/54326) | `/resume` off-by-one selection error | gateway | sessions |
| [#56580](https://github.com/NousResearch/hermes-agent/issues/56580) *(closed)* | Kanban creator wake mis-routes DM | gateway, cron | billing |
| [#24032](https://github.com/NousResearch/hermes-agent/issues/24032) *(closed)* | MEDIA regex truncates Windows paths | gateway | — |
| [#63632](https://github.com/NousResearch/hermes-agent/issues/63632) *(closed)* | MEDIA_TAG_CLEANUP_RE fails with `[[as_document]]` | gateway | — |

**Padrão identificado:** Múltiplos bugs de **billing/usage-cost** sugerem que o rastreamento de custos está impreciso — impacto financeiro direto para usuários.

### P3 (Média) — 18+ bugs ativos
- Bugs de **delivery de notificações Kanban** (TUI, Desktop, Gateway) — #70791, #59960, #59890
- Bugs de **TTS com PYTHONPATH** — #53259
- Bugs de **sistema de arquivos** em workers — #27941
- Bugs de **Desktop UI** (React stack overflow, Close minimiza) — #58875, #65985
- Bug de **mem0 provider status** — #70979
- Bug de **Audio/video playback** em remote-gateway — #72207

### P4 (Baixa) — 1 bug
- [#63681](https://github.com/NousResearch/hermes-agent/issues/63681): Provider namespace perdido durante ACP session persist → restore falha para providers customizados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas (últimas 24h):

| Issue | Feature | Tags Relevantes | Sinais de Prioridade |
|-------|---------|-----------------|---------------------|
| [#527](https://github.com/NousResearch/hermes-agent/issues/527) | Gateway Permission Tiers (RBAC) | `type/feature`, `area/auth`, P2 | 10 👍, 15 comentários — **roadmap provável** |
| [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) | Suporte a Buzz messaging | `type/feature`, `comp/plugins`, P3 | 12 👍, 5 dias — **expansão de plataforma** |
| [#28474](https://github.com/NousResearch/hermes-agent/issues/28474) | Structured response object from `run_conversation()` | `type/feature`, P3 | API design — ** DX** |
| [#72188](https://github.com/NousResearch/hermes-agent/pull/72188) | Multi-select (checkbox) em CLI, gateway e TUI | `type/feature`, P3 | Salvage de #23768 — **feature parity** |

### Sinais de roadmap inferidos:

1. **RBAC para gateways** — Dado o engajamento e a tag `needs-decision`, é candidato forte para próximas versões.
2. **Expansão de plataformas de messaging** — Buzz integration demonstra estratégia de ecossistema aberto.
3. **Operações enterprise-ready** — Os PRs de hoje sobre restart de serviços e systemd suggestem foco em **deploy em produção**.
4. **Melhoria de DX/APIs** — Structured response objects indicam maturação da API para consumo por outros agentes/serviços.

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Identificadas:

**1. Billing/Custos Inacurados** (Alta urgência)
- `#67764`: `cost_status` sobrescrito a cada chamada API — usuários não conseguem rastrear uso real.
- `#65564`: Assinantes Pro/Max sendo cobrados como pay-per-token.
- **Sentimento:** Frustração com transparência de custos. Usuários com planos de assinatura esperam benefícios que não estão sendo realizados.

**2. Estabilidade em Windows** (Média-alta urgência)
- `#68465`: Telegram gateway trava no Windows.
- `#58875`: React stack overflow no Desktop Windows.
- `#72198`: SOUL.md não injetado com Ollama local.
- **Sentimento:** Usuários Windows sentem-se como cidadãos de segunda classe. Um PR (#72185) já mitiga o hang de updates.

**3. Notificações Kanban Quebradas** (Média urgência, alta irritação)
- Múltiplas issues (#70791, #59960, #59890) sobre notificações nunca entregue.
- Routing de sessão DM/thread persistente incorreto.
- **Sentimento:** Usuários de Kanban dependem de notificações para workflows. A quantidade de issues sobre isso (6+ no período) indica problema sistêmico.

**4. Problemas com Mídia** (Média urgência)
- Arquivos silenciosamente não entregues quando há espaços ou syntax especial.
- MEDIA tags em código sendo interpretadas como anexos reais.
- Reprodução de áudio/vídeo falhando em remote-gateway.
- **Sentimento:** Erros silenciosos são piores que erros explícitos — usuários descobrem problemas tarde.

### Positivo:
- **Comunidade ativa**: 50 issues + 50 PRs em 24h demonstra engajamento.
- **Manutenção responsiva**: PRs de fix merged no mesmo dia de muitos bugs indicam time ativo.
- **Feature requests com upvote**: RBAC (#527) e Buzz (#68871) mostram que o projeto responde a demandas reais.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/atenção há >7 dias com alta severidade:

| Issue | Título | Criado | Atualizado | Prioridade | Status |
|-------|--------|--------|------------|------------|--------|
| [#65564](https://github.com/NousResearch/hermes-agent/issues/65564) | Anthropic OAuth billing route | 2026-07-16 | 2026-07-26 | P2 | Aberta |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | Tool calls repeating with LM-Studio | 2026-04-05 | 2026-07-26 | P2 | Aberta (4 meses!) |
| [#60388](https://github.com/NousResearch/hermes-agent/issues/60388) | `max_tokens` settings silently dropped | 2026-07-07 | 2026-07-26 | P2 | Aberta |
| [#27941](https://github.com/NousResearch/hermes-agent/issues/27941) | Kanban workers cannot write artifacts (readonly fs) | 2026-05-18 | 2026-07-26 | P3 | Aberta (2+ meses) |
| [#31524](https://github.com/NousResearch/hermes-agent/issues/31524) | Steer information truncated in tool results | 2026-05-24 | 2026-07-26 | P2 | Aberta (2 meses) |
| [#28474](https://github.com/NousResearch/hermes-agent/issues/28474) | Structured response from run_conversation() | 2026-05-19 | 2026-07-26 | P3 | Aberta (2 meses) |

### Análise do Backlog:

**Alta Prioridade para triagem imediata:**
1. **#5254** — Bug de LM-Studio aberto desde abril sem resolução. Afeta experiência de local-first. Precisa de triagem ou reprodução.
2. **#65564** — Billing broken para assinantes. Impacto financeiro direto. `needs-decision` não parece acionado.
3. **#31524** — Steer/truncation pode afetar qualidade de respostas em ferramentas de longa saída.

**Sinal de aviso:** 4+ issues abertas há >1 mês com P2 não resolvidas indicam possível gargalo de code review ou necessidade de priorização explícita.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas/abriertas (24h) | 34 |
| Issues fechadas (24h) | 16 |
| PRs abertos (24h) | 24 |
| PRs merged/fechados (24h) | 26 |
| Novas releases | 0 |
| Bugs P2 ativos | ~12 |
| Features em alta demanda | 2 (RBAC, Buzz) |
| Backlog >7 dias P2+ | 6 |

**Veredicto de Saúde:** O Hermes Agent demonstra **saúde operacional sólida** com alta taxa de fechamento de PRs e manutenção responsiva. Porém, o **backlog de bugs P2** e issues de billing merecem atenção estratégica. A comunidade está engajada e o roadmap mostra sinais claros de maturação enterprise (RBAC, systemd integration, multi-select UX).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 2026-07-27 | Analista: Open Source AI Agents Team

---

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **atividade moderada-alta** nas últimas 24h, com 8 PRs atualizados contra 4 issues. A comunidade mantém foco em estabilidade e segurança: um PR de segurança crítico (#3297) sobre hardening de remote prompt/exec foi submetido, e um bump de Go (1.25.12) foi mergeado para corrigir vulnerabilidades no stdlib.值得注意的是, três items estão marcados como stale, indicando possível necessidade de triagem. **Não há releases novas**, sugerindo que a equipe pode estar em fase de validação antes de um próximo tag.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

| Release | Data | Mudanças | Breaking Changes |
|---------|------|----------|------------------|
| — | — | — | — |

> **Nota:** A ausência de releases pode indicar que a equipe está consolidando cambios antes de um próximo release tag. Recomenda-se monitorar o repositório para próximos announcements.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (2)

#### #3248 — Bump Go to 1.25.12 ✅
**Autor:** afjcjsbx | **Data:** 2026-07-26  
🔗 [sipeed/picoclaw PR #3248](https://github.com/sipeed/picoclaw/pull/3248)

**Mudanças:**
- Atualização do toolchain Go de 1.25.11 → 1.25.12
- Remediation de duas vulnerabilidades detectadas pelo govulncheck:
  - `GO-2026-5856` em `crypto/tls`
  - `GO-2026-4970` em `os`

**Impacto:** Manutenção de segurança do build pipeline. Mudança trivial mas essencial.

---

#### #339 — Email Tool, Calendar Integration e System Stats ✅
**Autor:** udbhav-44 | **Data:** 2026-07-25  
🔗 [sipeed/picoclaw PR #339](https://github.com/sipeed/picoclaw/pull/339)

**Funcionalidades adicionadas:**
- **Google Calendar:** Nova CalendarTool para integração
- **Email channel:** Melhor polling e content fetching
- **Developer tools:** GitHub integration e System Stats overview

**Impacto:** Expansão do ecossistema de ferramentas. Este PR estava aberto desde fevereiro, demonstrando ciclo de review longo.

---

## 4. Temas Quentes da Comunidade

### Issues com mais atividade

| Issue | Título | Comentários | Reações | Status |
|-------|--------|-------------|---------|--------|
| #3252 | Bug: splitKnownProviderModel strips prefix incorrectly | 2 | 0 | CLOSED |
| #3265 | Gateway fails with 'channel deltachat has unknown type' | 1 | 0 | OPEN |
| #3264 | SplitMessage hangs on oversized fence info | 1 | 0 | OPEN |

### Análise de Demandas

**#3265 - Deltachat Channel Error** 🔴  
Problema crítico de startup: o gateway falha ao iniciar mesmo sem configuração de deltachat. Isso afeta operacionalidade básica do sistema. Autor: Cipher208.

**#3264 - SplitMessage Hang** 🔴  
Bug de loop infinito em parsing de código fences. Severidade alta por impacto em estabilidade. Autor: floze-the-genius.

> **Observação:** Três das quatro issues ativas estão marcadas como `[stale]`, sugerindo que podem necessitar de triagem da equipe core ou assignment para mantenedores.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

#### 🛑 Alta Severidade

| # | Título | Link | Status |
|---|--------|------|--------|
| #3265 | Gateway startup fails com erro deltachat | [Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) | OPEN |
| #3264 | SplitMessage hangs em fenced-code info string | [Issue #3264](https://github.com/sipeed/picoclaw/issues/3264) | OPEN |

#### 🐛 Correções Relacionadas (PRs)

| # | Título | Link | Status |
|---|--------|------|--------|
| #3295 | Fix SplitMessage hang on oversized fence | [PR #3295](https://github.com/sipeed/picoclaw/pull/3295) | OPEN |
| #3267 | Fix scope bug para refresh token | [PR #3267](https://github.com/sipeed/picoclaw/pull/3267) | OPEN |

**Análise:** A equipe parece ciente dos bugs - há PRs abertos correspondendo às issues #3264 e #3267, sugerindo desenvolvimento ativo em correções.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

#### #3298 — AI Router como Provider Preset
**Autor:** airrouter-dev | **Link:** [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298)

> "PicoClaw pode conectar ao AI Router via provider genérico `openai`, mas usuários não podem selecionar uma AI Route nomeada."

**Demanda:** Adicionar suporte nativo ao AI Router como provider preset, permitindo seleção de rotas nomeadas ao invés de apenas API base genérica.

**Análise:** Request com disclosure de afiliação (autor mantém AI Router). Demonstra demanda por integração mais profunda com provedores de roteamento de IA.

---

#### #3299 — Exa Web Search Provider
**Autor:** kesku | **Link:** [PR #3299](https://github.com/sipeed/picoclaw/pull/3299)

**Descrição:**
- Provider nativo para `tools.web` / `web_search`
- Usa API `POST /search` da Exa com `type: "auto"`
- Suporta filtros de range (`d`/`w`/`m`/`y`) via `startPublishedDate`
- Autenticação via header `X-Api-Key`

**Impacto:** Expansão de capacidades de busca web. Alinha com tendência de agentes de IA needing web access.

---

#### #3297 — Security Hardening
**Autor:** SiYue-ZO | **Link:** [PR #3297](https://github.com/sipeed/picoclaw/pull/3297)

**Mudanças propostas:**
1. Remote sender e chat metadata em envelope normalizado em vez de system instructions
2. Remote exec desabilitado por default, requer aprovação por chamada
3. Enforcement de origin policy no execution time
4. Migração de configs para schema v4

**Análise:** Mudança significativa de arquitetura de segurança. Requer atenção em breaking changes para migração.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Falha de startup** | Gateway não inicia mesmo sem deltachat configurado | 🔴 Alta |
| **Hang em mensagens** | SplitMessage entra em loop infinito com fences grandes | 🔴 Alta |
| **Provider prefixes** | Model IDs com aliases conhecidos são mal processados | 🟡 Média |
| **Escopo de tokens** | Refresh token falha com scope incorreto (antigravity) | 🟡 Média |

### Cenários de Uso Emergentes

1. **Integração com AI Routers** — Usuários querem seleção granular de rotas de IA
2. **Busca web nativa** — Demanda por provider Exa demonstra necessidade de web search
3. **Ferramentas productivity** — Calendar e Email integrations em alta demanda (#339)
4. **Segurança operacional** — Hardening de remote execution reflete preocupações com deployments em produção

---

## 8. Backlog que Merece Atenção

### Items Stale (Sem Atividade Recente)

| # | Tipo | Título | Idade | Link |
|---|------|--------|-------|------|
| #3265 | Issue | Gateway fails com deltachat error | 8 dias | [GitHub](https://github.com/sipeed/picoclaw/issues/3265) |
| #3264 | Issue | SplitMessage hangs | 9 dias | [GitHub](https://github.com/sipeed/picoclaw/issues/3264) |
| #3267 | PR | Fix scope bug refresh token | 8 dias | [GitHub](https://github.com/sipeed/picoclaw/pull/3267) |
| #3202 | PR | Strip underscores in ID normalization | 26 dias | [GitHub](https://github.com/sipeed/picoclaw/pull/3202) |

### Recomendações

1. **Triagem urgente:** #3265 e #3264 estão abertos há 8-9 dias e representam problemas funcionais críticos
2. **Review de PRs:** #3267 e #3295 parecem endereçar as mesmas issues — evitar duplicação de esforço
3. **Schema v4 migration:** Planejar comunicação de breaking changes para #3297
4. **Release planning:** Considerar捆绑 dos PRs de bug fix (#3295, #3267) em uma release de patch

---

## Métricas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 4 | → Estável |
| PRs em revisão | 6 | ↑ Aumento |
| PRs mergeados | 2 | → Normal |
| Releases | 0 | → Sem atividade |
| Items stale | 5 | ⚠️ Atenção |

**Saúde Geral:** 🟡 **Moderada** — Atividade normal com pontos de atenção em stale items e bugs críticos pendentes de fix.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-27

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** na data de hoje, com 19 PRs atualizados e 3 issues relevantes. A equipe demonstra foco em **consolidação de arquitetura** (extensão host, recovery systems) e **modernização de dependências** via automação do Dependabot. Notably, houve 7 PRs fechados/merged nas últimas 24h, indicando ritmo de entrega consistente. O projeto não registrou novos lançamentos, mantendo-se em fase de intensificação de refatorações estruturais para o módulo Reborn. A ausência de releases formais sugere priorização de estabilidade interna antes de próximas versões públicas.

---

## 2. Lançamentos

### Nenhum release registrado nas últimas 24h

O PR de release #5598 permanece aberto desde 2026-07-03, sinalizando准备工作 para publicar:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ breaking changes)

**Links:** [PR #5598](https://github.com/nearai/ironclaw/pull/5598)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados nas Últimas 24h

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6677](https://github.com/nearai/ironclaw/pull/6677) | Recoverability conformance matrix (§11.7) — adiciona `RecoverabilityClass` com classificação exaustiva para 7 enums de erro | **Crítico para reliability** |
| [#6669](https://github.com/nearai/ironclaw/pull/6669) | Move extension host ownership out of composition | Refatoração arquitetura Reborn |
| [#6680](https://github.com/nearai/ironclaw/pull/6680) | Preserva workspace tree state na web UI | UX fix |
| [#6670](https://github.com/nearai/ironclaw/pull/6670) | Consolida Reborn guidance e remove planos obsoletos | Documentação técnica |
| [#5369](https://github.com/nearai/ironclaw/pull/5369) | Suprime Cranelift debug log floods | Estabilidade Reborn |
| [#6365](https://github.com/nearai/ironclaw/pull/6365) | Reference PR fechado — P2b reimplementado em #6683 | Arquitetura MCP |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | Dependabot: wasm group updates | Dependencies |

**Destaque estratégico:** O PR #6677 implementa a matriz de conformidade de recoverability (§11.7), fundamental para o [Epic #6284](https://github.com/nearai/ironclaw/issues/6284) — objetivo de 100% de recuperação de erros.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#6284](https://github.com/nearai/ironclaw/issues/6284)** — `[epic] error-recoverability endgame`  
- **Autor:** serrrfirat | **Comentários:** 8 | **Criado:** 2026-07-19
- **Resumo:** Define contrato de recoverability onde todo erro mid-run deve satisfazer: (a) run sobrevive, (b) modelo vê, (c) informação carrega causa + solução, (d) modelo recebe turno para agir, (e) nenhum non-success é reportado.
- **Relevância:** Epic central para qualidade de agentes — 8 comentários indicam discussão ativa de design.

### PRs com Maior Complexidade (Size: XL)

| PR | Escopo | Descrição |
|----|--------|-----------|
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | refactor(reborn) | Collapse 5 failure-kind enums em `FailureKind` de 35 variantes + 4 bug fixes |
| [#6683](https://github.com/nearai/ironclaw/pull/6683) | tool/mcp | Per-user hosted-MCP discovery + per-thread hire-scoping |
| [#6672](https://github.com/nearai/ironclaw/pull/6672) | signing | Signed intent + per-agent key lifecycle (Phase B) |

---

## 5. Bugs e Estabilidade

### Issues Abertas de Bug/Falha

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#6682](https://github.com/nearai/ironclaw/issues/6682) | Análise | Daily failure taxonomy — clawbench com 82 non-pass dominados por incompletions genuínas de qualidade do modelo |
| [#6575](https://github.com/nearai/ironclaw/issues/6575) | Medium | systemctl bad-setting no Linux após onboard (fixado em [#6652](https://github.com/nearai/ironclaw/pull/6652)) |

### PRs de Fix Recentes

- **[#6652](https://github.com/nearai/ironclaw/pull/6652)** — Corrige `WorkingDirectory=` systemd quoting que causava `bad-setting`
- **[#5369](https://github.com/nearai/ironclaw/pull/5369)** — Suprime floods de log Cranelift em debug mode
- **[#6681](https://github.com/nearai/ironclaw/pull/6681)** — Corrige harness bug que bloqueava mutation-audit targets

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues de Feature/Maintenance

| Issue | Tipo | Descrição |
|-------|------|-----------|
| [#6686](https://github.com/nearai/ironclaw/issues/6686) | Deprecation | Retire `DockerProcessSandboxBackend` (dead code, superset pelo persistent sandbox) |
| [#6683](https://github.com/nearai/ironclaw/pull/6683) | Feature | Per-user hosted-MCP discovery com hire-scoping por thread |

### Sinais de Roadmap Identificados

1. **Phase B de Attested Signing (#6672)** — Assinatura criptográfica de intent do agente + lifecycle de chaves por agente
2. **MCP Discovery Architecture (#6683)** — Substitui abordagem antiga (#6365), movendo capability path para `ToolResolver` scope-free
3. **Dead Code Removal (#6686)** — Limpeza do `DockerProcessSandboxBackend` como preparação para W1

---

## 7. Resumo de Feedback dos Usuários

> *Baseado em issues abertas e contexto técnico disponível.*

### Dores Identificadas

| Área | Feedback Implícito |
|------|-------------------|
| **Reliability** | Epic #6284 indica que errors não são consistentemente recoverable — impacta confiança em produção |
| **Onboarding Linux** | Bug systemd (#6575/#6652) afeta experiência inicial em Linux |
| **Debugging** | Log floods de Cranelift (#5369) dificultam diagnóstico |
| **Workspace UX** | Navegação não preservava tree state (#6680 — corrigido) |

### Sinais Positivos

- Issue #6284 com 8 comentários indica **engajamento da equipe** em definir padrões rigorosos
- PRs #6677 e #6684 demonstram **abordagem sistemática** de technical debt em failure handling
- Mutation-audit harness (#6681) sugere **investimento em prevenção de regressões**

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#6686](https://github.com/nearai/ironclaw/issues/6686) | 1 dia | Aberta, 0 comentários | Alta — dead code flag |
| [#6682](https://github.com/nearai/ironclaw/issues/6682) | 1 dia | Aberta, 0 comentários | Média — taxonomy analysis |

### Issues Antigas com Impacto

| Issue | Criação | Progresso | Notes |
|-------|---------|-----------|-------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 2026-07-19 | Ativa — 8 comments | Epic central, múltiplos PRs em desenvolvimento |

---

## Métricas Resumidas (2026-07-27)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 3 |
| PRs abertos | 12 |
| PRs fechados/merged | 7 |
| Releases | 0 |
| Atividade Dependabot | 5 PRs (tokio, wasm, actions, serialization, general) |

---

**Fontes:** [nearai/ironclaw](https://github.com/nearai/ironclaw) | Gerado em 2026-07-27

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: QwenPaw (CoPaw)

**Data de referência:** 2026-07-27  
**Fonte:** GitHub (agentscope-ai/QwenPaw)

---

> **⚠️ Nota importante:** Os dados fornecidos referem-se ao repositório `agentscope-ai/QwenPaw`, não diretamente a `CoPaw`. Assumo que QwenPaw é a denominação atual do projeto CoPaw ou um fork/subprojeto relacionado.

---

## 1. Panorama do Dia

O projeto QwenPaw apresenta **alta atividade comunitária** em 27/07/2026, com 14 issues e 5 PRs abertos nas últimas 24h. Não houve lançamentos de novas versões, mas a comunidade está ativamente reportando bugs (9 issues de bug abertas) e contribuindo com features (1 feature request). A taxa de abertura de issues (14/dia) sugere um projeto em fase ativa de desenvolvimento e estabilização. Não há evidências de crises críticas iminentes, porém múltiplos bugs de conectividade MCP e problemas de estabilidade em plataformas específicas (Windows, Edge/Wayland) requerem atenção prioritária.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A versão mais recente referenciada nos issues é **v2.0.1**, которая foi lançada anteriormente. Sem changelog disponível para este período.

---

## 3. Progresso do Projeto

### PRs Abertos (5 total nas últimas 24h)

| PR | Título | Autor | Status |
|----|--------|-------|--------|
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | feat(browser): unified browser — one SDK, any backend | xiaoming-qxm | OPEN (desde 20/07) |
| [#6479](https://github.com/agentscope-ai/QwenPaw/pull/6479) | fix(providers): sync MiniMax model baseline | FittyAr | OPEN (first-time-contributor) |
| [#6477](https://github.com/agentscope-ai/QwenPaw/pull/6477) | docs(faq): align zh sub-section headings with en | WilShi | OPEN (first-time-contributor) |
| [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | feat(context): Visual Compact | Leirunlin | OPEN (DO NOT MERGE) |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): add qwenpaw-creator app | xuanrui-L | OPEN (Under Review) |

**Destaque estratégico:** O PR [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) propõe uma arquitetura unificada de browser com separação control-plane/execution-plane, evoluindo o SDK para suportar múltiplos backends. Este é o PR mais maduro (7 dias em desenvolvimento).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver ignoring transport config — SSE hardcoded | 4 | Bug |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation drops semicolon | 3 | Bug |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Plugin "Agent Kanban" fails to install | 2 | Bug |

### Análise de demandas

**Padrões identificados:**
- **Conectividade MCP:** 3 issues relacionadas ao driver MCP ignorando configurações de transporte (SSE vs streamable_http). Este é o **tema mais quente**, sinalizando necessidade de refatoração na camada de transporte MCP.
- **Estabilidade cross-platform:** Issues em Windows (PATH) e Linux/Wayland (Edge), indicando technical debt em codebases específicas de SO.
- **Internacionalização:** Issue [#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478) solicita adição de suporte a **chinês tradicional**, demonstrando demanda de mercados de língua não-mandarin.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (9 issues)

| Severidade | Issue | Descrição | Plataforma |
|------------|-------|-----------|-------------|
| **Alta** | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470), [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469), [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) | MCP driver hardcoded SSE — conecta apenas com default, ignora config YAML | Todas |
| **Alta** | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2E encryption quebrado — falta libolm | Linux |
| **Alta** | [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) | view_video não entrega video ao LLM — pipeline quebrado | Todas |
| **Média** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | CPU 100% em Edge+Wayland — possivelmente WebSocket/loop | Linux/Wayland |
| **Média** | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron misfire após idle — APScheduler AsyncIOScheduler | WSL2 |
| **Média** | [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) | JSON sem números de linha após upgrade 2.0.0→2.0.1 | Desktop |
| **Média** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Plugin Agent Kanban não instala — missing module | Desktop 2.0.1 |
| **Baixa** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation dropa ';' — npm globals quebrados | Windows |

**Análise:** A maioria dos bugs está concentrada em **integrações externas** (MCP, Matrix, Browser) e **regressões de UI/configuração**. Não há crash reports massivos, mas a quantidade (9 bugs/24h) indica necessidade de teste de regressão antes da próxima release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests (2 issues)

| Issue | Título | Solicitante | Complexidade |
|-------|--------|-------------|--------------|
| [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) | `notice_after_complete` — notificação assíncrona para tarefas longas | One-sixth | Alta |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Unified browser SDK (PR em andamento) | xiaoming-qxm | Alta |

### Análise de roadmap

- **Tarefas assíncronas (Issue [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)):** A comunidade solicita mecanismo para agent responder imediatamente enquanto executa tarefas longas em background — similar a "webhook patterns". **Sinal forte de que usuários estão usando QwenPaw para automação de fluxos de trabalho.**

- **Browser unificado (PR [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)):** Evolução arquitetural para permitir controle de browser agnóstico de backend — indica direção para scrapers e automação web.

- **QwenPaw Creator (PR [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)):** Plugin para workflow script→assets→storyboard→video — evidencia uso em produção criativa.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Infraestrutura MCP** | Drivers não respeitam configurações, forçam SSE, quebram integrações customizadas | 3 issues |
| **Estabilidade Desktop** | Regressões pós-upgrade (JSON, plugins, CPU) | 3 issues |
| **Usabilidade Agent** | Processos em background (nohup, &) travam agent | 1 issue |
| **E2E Encryption** | Matrix encryption não funciona, bloqueando uso corporativo | 1 issue |

### Cenários de uso inferidos

- **Automação de agentes:** shell scripting, sub-agents, ferramentas de linha de comando
- **Produção criativa:** integração ComfyUI, criação de vídeo
- **Comunicação corporativa:** Matrix para equipes com requisitos de privacidade
- **Navegação web:** scrapers e automação de browser

### Satisfaction Score (estimativa)

| Indicador | Status |
|------------|--------|
| Issues resolvidos/ativos | 0/14 (0%) |
| Bugs críticos | 4 (alta severidade) |
| PRs merged (24h) | 0 |
| Tendência | ⚠️ Neutra-Negativa |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation | 18/07 | 3 | **Alta** (bloqueia npm global) |
| [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | qwenpaw.agentscope.io server setup failed | 25/07 | 1 | Média (onboarding) |

### Issues sem assigne/maintainer

| Issue | Título | Sem resposta desde |
|-------|--------|-------------------|
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP transport config ignored | 26/07 |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2E encryption broken | 26/07 |
| [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) | view_video broken | 26/07 |

**Recomendação:** Assignar mantenedores para as 3 issues de severidade alta do dia 26/07 para evitar acúmulo de dívida técnica.

---

## Conclusão

**Saúde geral do projeto:** 🟡 Moderada

O projeto QwenPaw demonstra **comunidade ativa** com 19 atividades (14 issues + 5 PRs) em 24h, mas apresenta **sinais de alerta**:
1. 4 bugs de severidade alta sem assignee
2. Nenhum PR merged recentemente
3. Regressões pós-v2.0.1 afetando funcionalidades core (MCP, JSON viewer)

**Ações recomendadas:**
1. Priorizar triagem de issues [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470), [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476), [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)
2. Preparar patch v2.0.2 para corrigir regressões críticas
3. Estabelecer pipeline de teste de regressão para integrações MCP

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-27.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-27

## 1. Panorama do Dia

O projeto ZeroClaw manteve altíssima atividade nas últimas 24 horas com **44 issues e 50 PRs atualizados**, indicando uma sprint intensa de desenvolvimento. **Não houve lançamentos** na janela analisada. O estado atual é marcado por **preocupação significativa com segurança**: 10+ issues com标签 `domain:security` ou `risk:high` foram abertas ou atualizadas, muitas relacionadas a vulnerabilidades de configuração e vazamento de dados sensíveis. A base de código também enfrenta problemas de estabilidade no Windows e flakiness em testes, enquanto a comunidade avança em TRCs arquiteturais de alto impacto (plugins WASM, gateway OpenAI).

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.** O milestone v0.9.0 está em planejamento ativo (issue #7432), mas o ciclo atual parece focado em estabilização e correções de segurança para um possível v0.8.5.

---

## 3. Progresso do Projeto

Nenhum PR foi merged ou fechado nas últimas 24 horas (1 PR foi fechado/merged, mas sem detalhes de qual). A atividade recente concentra-se em **submissão e revisão** dos seguintes PRs de destaque:

| PR | Título | Tamanho | Risco | Status |
|---|---|---|---|---|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | feat(gateway): add OpenAI chat completions endpoint | XL | HIGH | OPEN |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat(plugins): validate typed instance config | XL | HIGH | OPEN |
| [#8909](https://github.com/zeroclaw-labs/zeroclaw/pull/8909) | feat(plugins): add gateway and dashboard capability catalog | XL | HIGH | OPEN |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | feat(matrix): add single-message progress drafts | XL | HIGH | OPEN |
| [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) | feat(cron): add shell_output_format config | L | HIGH | OPEN |

**PRs de segurança merges pendientes** (requerem review urgente):
- [#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401) — preserve shell cwd across sandbox wrappers (S, P1)
- [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) — avoid nesting Docker sandbox inside Docker runtime (M, P1)
- [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) — bound WASM exports by wall-clock deadline (XL, P1)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Título | Comentários | 👍 | Prioridade | Tema |
|---|---|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | 14 | 0 | P1 | Plataforma Cruzada / CI |
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp DM/group policy bypass (business mode) | 9 | 0 | P1 | Segurança / Canal |
| [#9396](https://github.com/zeroclaw-labs/zeroclaw/issues/9396) | CLI approval renders without stripping control chars | 6 | 0 | P1 | **Segurança** (CLOSED) |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → SIGSEGV | 5 | 0 | P1 | Estabilidade / Runtime |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode for bounded autonomous session | 4 | 1 | P2 | **Feature Roadmap** |

**Análise**: A comunidade demonstra forte preocupação com:
1. **Testes multiplataforma** — Windows é negligenciado na CI (apenas Linux é executado), gerando 74 falhas silenciadas.
2. **Segurança de canais** — Multiple vulnerabilidades críticas no WhatsApp (#9348, #9397, #9366) e outros mensageiros (#9387, #9392).
3. **Estabilidade** — O panic no skill-review (#8654) causa SIGSEGV no daemon inteiro, sendo o bug de maior impacto operacional.
4. **Features estruturais** — O RFC de Goal Mode (#8303) é a única issue com upvote da lista, sinalizando demanda por sessões autônomas de longa duração.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos / Alta Severidade (15 issues)

**Segurança:**
- [#9396](https://github.com/zeroclaw-labs/zeroclaw/issues/9396) — CLI approval renderiza argumentos sem sanitizar caracteres de controle → **CLOSED (corrigido)**
- [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — WhatsApp responde a TODOS DMs/grupos em modo business
- [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) — Gemini API key vaza na URL da requisição e aparece no chat
- [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) — Approval interativo aceito de qualquer membro do grupo (Telegram, Slack, Lark, Matrix)
- [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) — POST /api/pairing usa header fornecido pelo atacante para lockout
- [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) — LINE ignora allowlist e pairing handshake
- [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — Emergency stop é arquivo CLI que nenhum runtime lê
- [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) — plugin wasi:http sem política de egress
- [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) — WASM plugins sem timeout; resposta HTTP "dripping" executa indefinidamente

**Estabilidade / Funcional:**
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 testes falham no Windows (paths Unix, codificação console)
- [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) — skill-review fork panic → SIGSEGV após turno com muitas ferramentas
- [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) — cargo test falha em 19/20 runs; assertion flaky envenena mutex global
- [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — config flush pode sobrescrever escritas concorrentes
- [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — web_fetch retorna garbage para respostas gzip/brotli/deflate
- [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) — audit logging habilitado por padrão mas não escreve nada

### 🟡 P2 — Média Severidade

- [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) — WhatsApp aceita `approval_timeout_secs` mas nunca lê
- [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) — Metadados de config permanecem em inglês nas superfícies Localizadas
- [#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) — WIT/vendored drift falha apenas no registro

**Nota**: A concentração de issues P1 de segurança (9 ativos) é anormalmente alta e sugere necessidade de release de patch urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e Enhancement Proposals
| Issue | Feature | Impacto | Sinais |
|---|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode para sessões autônomas bounded | Alto | 1 👍, 4 comentários |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Runtime WASM plugins (migração de features compile-time) | Alto | 4 comentários, in-progress |
| [#8584](https://github.com/zeroclaw-labs/zeroclaw/issues/8584) | Web dashboard localization via Fluent | Médio | 2 comentários |

### Trackers de Roadmap Ativos
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — **v0.9.0 auth, security, gateway, breaking changes** (coordinação central)
- [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) — crates.io publishing e packaging follow-ups
- [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) — Restore ADR baseline e audit RFC decisions

### Features em PR
- **Gateway OpenAI** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)) — Provedor de compatibilidade OpenAI Chat Completions (XL, impacta ecossistema)
- **Typed plugin config validation** ([#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)) — Schema validation para plugins (XL)
- **MCP CA trust custom** ([#9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405)) — Suporte a CA por servidor MCP
- **WASM deadline bounds** ([#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403)) — Timeout configurável para plugins

**Sinal de mercado**: A adição do endpoint OpenAI (#8486) indica estratégia de expansão para uso em ecossistemas como LangChain, Continue.dev e Aider.

---

## 7. Resumo de Feedback dos Usuários

Baseado nas issues abertas, os padrões de dor dos usuários são:

### Dores Críticas (P1)
1. **Segurança operacional**: Operadores que configuram políticas restritivas (allowlist de grupos, DM-only) descobrem que o agente responde universalmente. O problema #9348 é crítico porque **parece** seguro mas não é — a brecha mais perigosa.
2. **Confiança em API keys**: O vazamento de Gemini API key (#9386) expõe diretamente informações financeiras de provedores.
3. **Estabilidade em produção**: O SIGSEGV do skill-review (#8654) derruba o daemon inteiro após uso intenso — cenário comum em agentes de produção.
4. **Testes que não pegam bugs**: A CI não roda Windows, então 74 falhas ficam ocultas até deploy.

### Dores de Experiência
- **Configuração inconsistente**: `approval_timeout_secs` aceito mas ignorado (#9366) gera frustração de operador.
- **Logs de auditoria inúteis**: Habilitado por padrão mas não escreve nada (#9391) — compliance risk.
- **Web fetch quebrado**: Não funciona com sites comprimidos (Padrão da web) — bloqueia workflows básicos.

### Sinais Positivos
- O PR #9405 (MCP CA trust) resolve uma necessidade de empresas com PKI customizada.
- O PR #9399 (Quickstart checklist responsive) indica foco em DX para novos usuários.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (potenciais zombies)
| Issue | Título | Criado | Atualizado | Prioridade | Nota |
|---|---|---|---|---|---|
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime replies bypass Fluent localization | 2026-05-09 | 2026-07-26 | P2 | CLOSED, mas histórico longo |
| [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) | deny.toml ignored-advisory tracking | 2026-06-20 | 2026-07-26 | P2 | Policy cleanup pendente |

### Dependências Críticas sem MR
| Issue | Dependência | Severidade | Status |
|---|---|---|---|
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | wasmtime CVEs (audit/deny drift) | P1 | in-progress |
| [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | npm audit @redocly/openapi-core (high) | P1 | CLOSED |
| [#9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) | npm audit repeat failure (6

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*