# Resumo diário do ecossistema de agentes de IA 2026-06-04

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-03 22:26 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-06-04

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24h**, sem novos lançamentos, issues abertas ou fechamento de issues. Um único PR permanece em estado aberto (#946), indicando foco na finalização de ajustes de filtro de ferramentas em prompts de sistema. O ecossistema está em modo de manutenção estável, sem sinais de urgência ou bloqueios aparentes.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não registró versões tagged ou releases hoje. Não há changelogs, notas de migração ou breaking changes a reportar neste período.

---

## 3. Progresso do Projeto

### PRs abertos ou em progresso

| PR | Título | Autor | Estado | Impacto |
|---|---|---|---|---|
| [#946](https://github.com/nullclaw/nullclaw/pull/946) | fix(agent): filter tools in system prompt text by tool_filter_groups | vernonstonebaker | OPEN | Adiciona lógica `filterToolsForPromptText` para incluir apenas tools de grupos `always` no prompt de texto; tools de grupos dinâmicos continuam via API native |

**Análise do PR #946:**
- Refina como ferramentas são expostas ao modelo: grupo `always` vai para texto; grupos dinâmicos via tool-calling nativo
- Remove dependência de `Parameter` (sugere refatoração interna)
- Sem comentários ou reviews registrados ainda
- Link: https://github.com/nullclaw/nullclaw/pull/946

**Nenhum PR merged ou fechado nas últimas 24h.**

---

## 4. Temas Quentes da Comunidade

Não há issues ou PRs com comentários ou reações significativas registrados nas últimas 24h.

- **Volume de interação:** 0 issues comentadas, 0 reactions
- **Tensão comunitária:** Nenhuma detectada
- **Nenhum debate ativo em andamento.**

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado ou regressão documentada nas últimas 24h.**

- Issues críticas: 0
- Issues de severidade alta: 0
- Issues de estabilidade: 0

O projeto não registrou falhas, crashes ou alertas de regressão no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum feature request aberto nas últimas 24h.**

O PR #946 pode sinalizar evolução na arquitetura de ferramentas:
- Refinamento do sistema de filtragem de tools por grupos
- Separação entre exposição textual e tool-calling nativo
- Potencial candidates para roadmap: controles granulares de tool exposure por grupo

Sem issues de feature tracking abertas no momento.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback direto registrado nas últimas 24h.**

- Issues com feedback: 0
- Comentários de usuários em PRs: 0
- Discussões em issues: 0

A ausência de feedback pode indicar:
1. Satisfação geral com a versão atual, ou
2. Período de baixa utilização, ou
3. Canal de feedback utilizado fora do GitHub

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Observação |
|---|---|---|---|---|
| #946 | PR | ~1 dia | OPEN | Aguardando review; kontribusi único recente |

**Prioridade de ação:**
- **Revisar PR #946** — É o único item ativo no momento. O PR endereça filtragem de tools no system prompt, com potencial impacto em comportamento do agente. Review necessário para validar separação entre texto e tool-calling nativo.

---

## Resumo Executivo

| Indicador | Valor |
|---|---|
| Releases (24h) | 0 |
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 1 |
| PRs merged/fechados (24h) | 0 |
| Feedback comunitário | Nenhum |
| Bugs críticos | 0 |

**Veredicto:** Projeto em estado de baixa atividade, sem incidentes ou bloqueios. O PR #946 é o ponto focal de atenção. Recomenda-se review do código antes de merge para validar a estratégia de filtragem de tools.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de referência:** 2026-06-04

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois panoramas distintos**: NullClaw permanece em modo de manutenção com atividade praticamente standstill, enquanto os seis projetos restantes (NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw e ZeroClaw) operam em **ciclos intensos de desenvolvimento**, concentrando collectively mais de 280 issues e 280 PRs atualizados em 24h. **Segurança emerge como tema transversal** — vulnerabilities em filesystem tools, MCP reconnection, e TLS configuration aparecem em múltiplos projetos simultaneamente. A arquitetura multi-agente, memória persistente, e canais de comunicação alternativas (WhatsApp, Slack, Feishu, SimpleX) dominam o roadmap estratégico. A fase predominante é de **estabilização pós-crescimento**: todos os projetos estão em consolidação antes de releases major, sinalizando maturidade crescente do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde | Net Bugs |
|---------|-------------|----------|-----------|----------|-------|----------|
| **NullClaw** | 0 | 1 | 0 | Nenhuma | 🔴 Estagnada | 0 |
| **NanoBot** | 32 atualizadas | 30 atualizados | 16 | Nenhuma | 🟢 Alta | +26 aberta |
| **Hermes Agent** | 50 atualizadas | 50 atualizados | 7 | Nenhuma (v0.15.2 mais recente) | 🟡 Estável-com-tensão | 2 P1 abertos |
| **PicoClaw** | 3 ativas | 10 atualizados | 3 | `v0.2.9-nightly.20260603` | 🟢 Ativa | 3 `[stale]` |
| **IronClaw** | 19 ativas | 50 atualizados | 3 | `v0.29.1` (dia) | 🟢 Entrega contínua | 2 alta severidade |
| **CoPaw** | 48 atualizadas | 50 atualizados | 21 | Nenhuma | 🟢 Muito alta | 4 críticos abertos |
| **ZeroClaw** | 50 atualizadas | 50 atualizados | 8 | Nenhuma (v0.8.0/0.8.1 em preparação) | 🟢 Muito alta | 5 S1 workflow-blocked |

---

## 3. Posicionamento do Projeto Principal

### Líderes de Volume
**CoPaw** e **ZeroClaw** lideram em intensidade de atividade, com 48-50+ items atualizados each em 24h, representando o tier de maior investimento comunitário. Ambos operam em modo de **bug fixing massivo** — CoPaw fechou 20 issues e 21 PRs hoy; ZeroClaw fechou 8 PRs com 5 bugs P1/S1 em estado "in-progress".

### Projetos com Release Ativo
**IronClaw** é o único projeto com **release publicada no dia** (`v0.29.1`), demonstrando maturidade no pipeline de entrega contínua. PicoClaw mantém **nightly builds automatizados** (`v0.2.9-nightly`), indicando CI/CD maduro.

### Estabilização Profilática
**Hermes Agent** apresenta a tensão mais alta entre volume de atividade e severidade de bugs, com **2 P1 bugs críticos**: SIGPIPE flood no gateway (43 dias sem fix) e `hermes update` quebrando instalações Windows permanentemente. Despite the 7 PRs merged, a barra de estabilidade v0.15.x está gerando regressões documentadas.

### Consolidando Qualidade
**NanoBot** demonstra volume alto (16 PRs merged) mas carrega um **backlog permante** de 26 issues abertas de natureza técnica (multi-agente, sandbox, segurança). O progresso é real mas a demanda excede a capacidade de resolução.

### Projeto de Referência Estagnado
**NullClaw** permanece em modo de **manutenção passiva**: 1 PR aberto há ~1 dia (a único item ativo), zero releases, zero issues comentadas. A saúde é estável ("sem incidentes") mas o ecossistema sinaliza desinteresse comunitário.

---

## 4. Focos Técnicos Compartilhados

### 🔴 Segurança — Tema Crítico Transversal

| Projeto | Issue de Segurança | Severidade |
|---------|------------------|------------|
| **NanoBot** | Filesystem tools ignoram `restrict_to_workspace` | 🔴 Crítica |
| **Hermes** | SIGPIPE flood no gateway (mem.provider byterover) | 🔴 Crítica |
| **PicoClaw** | MQTT TLS skip automático — MITM exposed (já corrigido) | 🔴 Crítica |
| **ZeroClaw** | Web dashboard/WSS bypasses ApprovalManager | S1 — blocked |
| **CoPaw** | WeChat PermissionError corrompe sessão permanentemente | 🔴 Crítica |

A segurança de ferramentas de arquivos, isolamento de workspace, e validação de certificados TLS aparecem em **3+ projetos simultaneamente**, sinalizando dívida técnica comum no-pattern de sandboxing.

### 🟡 Arquitetura Multi-Agente

- **NanoBot**: Mailbox channel plugin (#3461) + RFC de arquitetura A2A native (#4179)
- **ZeroClaw**: Session branching para fork de conversas (#7168, #7167)
- **Hermes**: USER.md isolation multi-tenant (#27182) — gap de segurança multi-usuário
- **CoPaw**: Slash command custom menu + pluggable ACP protocol extensibility

### 🟡 Memória Persistente e Session Management

| Projeto | Área de Foco | Problema Identificado |
|---------|-------------|----------------------|
| **NanoBot** | Long-term memory cross-session | 37GB bloat causing crashes |
| **CoPaw** | ChromaDB segfault, vector index bloat | 45+ crashes por sessão |
| **Hermes** | LLM summarization-based session recall | Feature em desenvolvimento (#38504) |
| **CoPaw** | Dream agent memory management | MEMORY.md não persiste |

### 🟢 Infraestrutura de Canais

Demanda por canais Não-Strings (SimpleX, Mattermost, WeChat, Feishu) aparece em **todos os projetos com exceção de NullClaw**. A diversificação de canais é驅動 por casos de uso enterprise e adoption em mercados asiáticos (WeChat, Feishu, DingTalk).

---

## 5. Análise de Diferenciação

### Filogenia Arquitetural

```
NullClaw          → Agente único minimalista (referência)
├── PicoClaw      → Motor de agente programável (skill-based, HTTP streaming)
├── Hermes        → Agente pessoal com desktop app (TUI/GUI native)
├── CoPaw         → Multi-canal com memória avançada (Qwen foundation)
├── NanoBot       → Agente de pesquisa com multi-agent native (HKUDS)
└── ZeroClaw      → Enterprise platform (eval harness, OIDC, FreeBSD)
    └── IronClaw  → Enterprise workflow (Reborn framework, Slack integration)
```

### Diferenciação por Público-Alvo

| Projeto | Público Primário | Diferenciador Técnico |
|---------|----------------|----------------------|
| **NullClaw** | — | Arquitetura minimalista de referência |
| **PicoClaw** | DesenvolvedoresIoT/embedded | Skill auto-descritivo, MQTT, Go-based |
| **Hermes** | Usuários desktop | TUI/GUI hybrid, cron jobs, Kanban integration |
| **CoPaw** | Mercado chino | Feishu/DingTalk/WeChat first, browser automation |
| **NanoBot** | Pesquisadores | Memory-first, multi-agent native, MCP extensibility |
| **ZeroClaw** | Enterprise DevOps | Eval harness, OIDC, FreeBSD, SQLite native |
| **IronClaw** | Enterprise workflow | Reborn framework, ProductAdapter pattern |

### Diferenças de Abordagem Técnica

- **Hermes/CoPaw**: Preferência por integrações de plataforma proprietárias (Slack, Discord, Telegram)
- **NanoBot/PicoClaw**: Foco em extensibilidade via MCP e canais alternativos
- **ZeroClaw/IronClaw**: Ênfase em segurança de credenciais, approval managers, e multi-tenant isolation
- **CoPaw/NanoBot**: Investimento pesado em memória persistente e session recall

---

## 6. Tração e Maturidade da Comunidade

### Tier 1 — Iteração Rápida (50+ items/24h)

| Projeto | Metric | Distinguidor |
|---------|--------|--------------|
| **CoPaw** | 20 issues + 21 PRs fechados | Volume de correção massiva; 4 bugs críticos abertos simultaneamente |
| **ZeroClaw** | 8 PRs merged | Eval harness, session branching, OIDC security |

### Tier 2 — Atividade Sustentada (10-50 items/24h)

| Projeto | Metric | Distinguidor |
|---------|--------|--------------|
| **Hermes** | 7 PRs merged, 2 P1 bugs | Bugfixing parallels feature development |
| **IronClaw** | v0.29.1 released + 3 PRs merged | Release ativa + Reborn rollout |
| **NanoBot** | 16 PRs merged + 26 open issues backlog | Progresso real mas demanda excede capacidade |

### Tier 3 — Manutenção Estável (low volume)

| Projeto | Assessment |
|---------|------------|
| **PicoClaw** | 7 PRs `[stale]` sem review; triagem de backlog necessária |
| **NullClaw** | Estagnada; 1 PR aberto há 1 dia, sem urgency |

### Sinais de Maturidade Organizacional

| Sinal | Projetos | Interpretação |
|-------|----------|---------------|
| Release cycle formalizado | IronClaw, PicoClaw | CI/CD maduro com tags nightly/release |
| Backlog grooming ativo | CoPaw, ZeroClaw | Triagem regular de stale items |
| RFC process estabelecido | Hermes (#34038), CoPaw (#4640) | Design documentation antes de implementação |
| Eval/safety harness | ZeroClaw (#7067), Hermes (Kanban) | Investimento em regressão e qualidade contínua |

---

## 7. Sinais de Tendência

### 7.1 Segurança como Feature Competitive

A segurança de sandbox emerge como **diferenciador primário** — three projetos (NanoBot, Hermes, ZeroClaw) têm vulnerabilities críticas de filesystem e multi-tenant que afetam diretamente a adoção enterprise. A tendência é que segurança de ferramentas de arquivos, approval managers, e isolation de credenciais se tornem **tabled stakes** até o final de 2026.

### 7.2 Multi-Agent como Próxima Frontera

Dois sinais convergentes:

1. **NanoBot** (#3461, #4179) e **CoPaw** (#4669) desenvolvem arquiteturas multi-agente nativas
2. **Hermes** (#27182) enfrenta gaps de isolamento entre usuários em plataformas compartilhadas

A tendência indica que o mercado está evoluindo de agentes的单体 hacia arquiteturas **supervisor → specialized agents** com comunicação inter-processo.

### 7.3 Memória Persistente como Requisito

Both **NanoBot** e **CoPaw** enfrentam crashes de ChromaDB/long-term memory, indicando que a comunidade descobriu que memory persistente é mais complexa do que assumido inicialmente. A tendência é um novo ciclo de redesign de memory systems com features como:

- Eviction policies com capacidade configurável
- Cross-session recall via LLM summarization
- Graceful degradation (não crash) quando storage bloat occurs

### 7.4 Diversificação de Canais para Enterprise

O interesse por **SimpleX, Mattermost, WeChat, Feishu** (vs. simplesmente Discord/Slack/Telegram) indica que o ecossistema está se expandindo para além do bubble ocidental. A tendência é que agentes de IA precisem suportar canais de comunicação regionais para adoption em mercados não-anglo-saxões.

### 7.5 Streaming como Expectativa de Mercado

The issue #2404 (PicoClaw, 11 comentários) requesting streaming HTTP configuration parity com OpenAI SDK indica que **streaming é désormais esperado** pelo mercado. Projetos sem streaming vão enfrentar friction de onboarding. A tendência é que streaming de requisições LLM se torne feature default, não opcional.

---

## Conclusão Executiva

O ecossistema open source de agentes de IA está em **fase de maturação acelerada**: a maioria dos projetos (6/7) demonstra atividade saudável, mas as prioridades divergem. Projetos como **CoPaw e ZeroClaw** lideram em volume de desenvolvimento, enquanto **IronClaw** se destaca pela disciplina de releases contínuas. **Hermes** apresentar o risco mais alto de erosão de confiança por bugs P1 prolongados. **PicoClaw** precisa de triagem urgente de backlog stale para manter contribuidores. **NullClaw** está em risco de se tornar irrelevante comunitariamente. O tema mais urgente para o ecossistema como todo é **segurança de sandbox e filesystem** — três projetos simultâneos com vulnerabilities críticas indica um problema de design pattern que deve ser endereçado em nível de arquitetura compartilhada, não projeto por projeto.

---

_prev: Relatório Individual de Projeto | next: Detalhamento Técnico por Área (Síntese de Segurança, Multi-Agent, Memória)_

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-06-04

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade comunitária** em 04 de junho de 2026, com 32 issues e 30 PRs atualizados nas últimas 24 horas. A equipe de desenvolvimento demonstra vigor ao aceitar contributions substanciais: 16 PRs foram merged/fechados, incluindo melhorias significativas na arquitetura de memória de longo prazo, refatorações no WebUI e correções de estabilidade. Não houve releases formais no período, sugerindo que a equipe está em ciclo de consolidação antes de um próximo tagged version. A base de issues permanece com 26 itens abertos de natureza predominantemente técnica, sinalizando demandas por multi-agente, segurança de sandbox e integrações de canais adicionais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não发布了 nova versão tagged desde o período reportado. Este é um momento típico de "code freeze" onde a equipe valida funcionalidades antes de publicar. Recomenda-se acompanhar a branch `main` para mudanças iminentes.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** recentemente, representando avanços concretos:

| PR | Título | Impacto |
|---|---|---|
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | Refactor WebUI runtime state onto event bus | Melhora arquitetura de estado do WebUI com event bus tipado |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | fix(webui): bound startup fetch waits | Resolve requests que ficavam pendentes indefinidamente no bootstrap |
| [#4174](https://github.com/HKUDS/nanobot/pull/4174) | fix: restore top-level import order | Normaliza imports para compliance com lint (Ruff E402) |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | refactor(dream): replace two-phase Dream class | Simplifica lógica de Dream com cron + process_direct |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | feat: multi-agent mailbox channel plugin | Plugin de comunicação inter-agente via sistema de arquivos |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | feat(memory): enhance Dream + Consolidator prompts | Resolve duplicação de memória e melhora MECE |
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | fix(agent): prevent runner from exiting while sustained goal is active | Corrige bug onde long_task era interrompido prematuramente |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | refactor(agent): extract ContextBuilder.build_user_content() | Expõe método público para construção de contexto |

---

## 4. Temas Quentes da Comunidade

As seguintes issues geraram maior engajamento (comentários + reações):

### Multi-Agent Setup (#222)
- **Link:** [HKUDS/nanobot#222](https://github.com/HKUDS/nanobot/issues/222)
- **Engajamento:** 10 comentários, 7 👍
- **Análise:** Usuários demonstram interesse kuat em configurar múltiplos agentes especializados. O PR #3461 já adiciona mailbox channel plugin, e #4179 propõe arquitetura nativa A2A (Agent-to-Agent). Este é um **tema estratégico** para o roadmap.

### Segurança de Ferramentas de Arquivo (#143)
- **Link:** [HKUDS/nanobot#143](https://github.com/HKUDS/nanobot/issues/143)
- **Engajamento:** 2 comentários, 4 👍
- **Análise:** Issue de **segurança crítica** reportada. Ferramentas filesystem (`ReadFileTool`, `WriteFileTool`, etc.) não respeitam `restrict_to_workspace`. Mesmo com protections na shell execution, atacantes podrían acessar arquivos fora do workspace.

### RFC: Core Architecture Improvements (#97)
- **Link:** [HKUDS/nanobot#97](https://github.com/HKUDS/nanobot/issues/97)
- **Engajamento:** 1 comentário, 6 👍
- **Análise:** Proposta estruturada para melhorias em memória, segurança e testing. Alto impacto potencial se implementada.

### Alucinações no exec tool (#937)
- **Link:** [HKUDS/nanobot#937](https://github.com/HKUDS/nanobot/issues/937)
- **Engajamento:** 2 comentários
- **Análise:** Usuário abandonou avaliação por causa de alucinações frequentes na tool `exec()`. Problema fundamental de confiabilidade.

### Mattermost Channel Request (#1011)
- **Link:** [HKUDS/nanobot#1011](https://github.com/HKUDS/nanobot/issues/1011)
- **Engajamento:** 0 comentários, 4 👍
- **Análise:** Demanda por canal de comunicação alternativo, mostrando necessidade de diversificar integrações além de Discord/Telegram/Slack.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Issues Abertas):

| Severidade | Issue | Descrição | Link |
|---|---|---|---|
| 🔴 Alta | #954 | Progress streaming vaza tool calls internos para interface do usuário | [Link](https://github.com/HKUDS/nanobot/issues/954) |
| 🔴 Alta | #143 | Ferramentas de arquivo ignoram `restrict_to_workspace` | [Link](https://github.com/HKUDS/nanobot/issues/143) |
| 🔴 Alta | #937 | Execução de comandos com alucinações frequentes | [Link](https://github.com/HKUDS/nanobot/issues/937) |
| 🟡 Média | #1022 | Long-running tasks falham silenciosamente | [Link](https://github.com/HKUDS/nanobot/issues/1022) |
| 🟡 Média | #896 | Mídia Telegram/Discord nunca é limpa (crescimento ilimitado de disco) | [Link](https://github.com/HKUDS/nanobot/issues/896) |
| 🟡 Média | #935 | MCP URL remoto dá timeout com `asyncio.CancelledError` | [Link](https://github.com/HKUDS/nanobot/issues/935) |
| 🟡 Média | #150 | Erro no WhatsApp WebSocket Gateway com Python 3.12 | [Link](https://github.com/HKUDS/nanobot/issues/150) |
| 🟢 Baixa | #979 | AI ignora proteção contra rm | [Link](https://github.com/HKUDS/nanobot/issues/979) |
| 🟢 Baixa | #117 | WhatsApp ignora mensagens do próprio número | [Link](https://github.com/HKUDS/nanobot/issues/117) |

### Correções Recentes Mergiadas:
- **#3932:** Evita `duplicate tool_call_id` em stream mode (causava `invalid_request_error`)
- **#3999:** Impede runner de sair prematuramente com goal ativo
- **#4157:** Bounds em startup fetches que ficavam pendentes para sempre

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h):

| Feature | Descrição | Link |
|---|---|---|
| A2A Native Orchestration | Arquitetura Supervisor → Researcher → Writer | [#4179](https://github.com/HKUDS/nanobot/issues/4179) |
| Cmd+Shift+O Shortcut | Atalho para novo chat no WebUI | [#4178](https://github.com/HKUDS/nanobot/issues/4178) |
| Agent Run Hook Lifecycle | Hooks before_run/after_run/on_error | [#4176](https://github.com/HKUDS/nanobot/pull/4176) |

### Features com Alto Potencial (Backlog):

| Feature | Descrição | Sinais |
|---|---|---|
| Multi-Agent Nativo | Configuração de agentes especializados | #222 (7 👍), #1012, #1006, #4179 |
| Memória Persistente | Long-term memory cross-session | #135 (4 👍), #80 |
| Task-Specific Models | Modelos diferentes por tipo de tarefa | #912 (3 👍) |
| Sandbox Seguro | Isolamento para plugins não-confiáveis | #931 |
| Multi-Tenant Gateway | Múltiplos agentes em uma instância | #936 |
| Memory Retrieval Leve | BM25/TF-IDF para injeção de contexto | #80 |
| SimpleX Chat | Canal descentralizado | #240 (2 👍) |

### PRs Abertos em Review:

| PR | Título | Status |
|---|---|---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | feat(agent-collab) - enable cross agent messaging | Aberto |
| [#4180](https://github.com/HKUDS/nanobot/pull/4180) | fix(qq): send pairing codes for unauthorized C2C | Aberto |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | fix(mcp): reject unsafe HTTP URLs before probe | Aberto |
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | Add run-level agent hook lifecycle | Aberto |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | docs: make onboarding friendlier | Aberto |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | feat(command): add /skill slash command | Aberto |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas:

| Categoria | Descrição | Severidade |
|---|---|---|
| **Confiabilidade** | Alucinações em exec tool fazem usuário abandonar framework | 🔴 Crítica |
| **Segurança** | Filesystem tools ignoram workspace restriction | 🔴 Crítica |
| **UX** | Onboarding confuso para iniciantes (#97 RFC) | 🟡 Alta |
| **Arquitetura** | Sem suporte nativo a multi-agente colaborativo | 🟡 Alta |
| **Integração** | Falta canal WeChat e SimpleX | 🟡 Média |
| **Performance** | Long-running tasks travam | 🟡 Média |
| **Operacional** | Mídia acumulada sem cleanup automático | 🟢 Baixa |

### Cenários de Uso Emergentes:

1. **Agente Pessoal Multifuncional:** Usuários querem um agente único com múltiplas especializações (pesquisa, código, escrita)
2. **Multi-Tenancy:** Necessidade de isolar agentes por cliente/usuário em deploys únicos
3. **Canais Alternativos:** Descentralização (SimpleX) e alternativas corporativas (Mattermost, Feishu)
4. **Segurança Reforçada:** Sandbox para execução de skills não-confiáveis

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há +100 dias (Stale):

| Issue | Título | Criado | Comentários | Link |
|---|---|---|---|---|
| #80 | Add lightweight memory retrieval? | 2026-02-04 | 4 | [Link](https://github.com/HKUDS/nanobot/issues/80) |
| #97 | RFC: Core Architecture Improvements | 2026-02-04 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/97) |
| #135 | Persistent long-term memory system | 2026-02-05 | 0 | [Link](https://github.com/HKUDS/nanobot/issues/135) |
| #143 | [Security] Filesystem tools don't enforce restrict_to_workspace | 2026-02-05 | 2 | [Link](https://github.com/HKUDS/nanobot/issues/143) |
| #192 | Introduce wechat function | 2026-02-06 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/192) |
| #222 | Multi agents setup - Supported ? | 2026-02-06 | 10 | [Link](https://github.com/HKUDS/nanobot/issues/222) |
| #240 | Feat request: add support for SimpleX Chat | 2026-02-07 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/240) |
| #912 | Feat: Support Task-Specific Model Configuration | 2026-02-20 | 3 | [Link](https://github.com/HKUDS/nanobot/issues/912) |
| #931 | [Proposal] Native Sandbox Interface | 2026-02-21 | 0 | [Link](https://github.com/HKUDS/nanobot/issues/931) |
| #935 | Remote MCP URL timeout | 2026-02-21 | 0 | [Link](https://github.com/HKUDS/nanobot/issues/935) |
| #936 | Multi-Tenant Gateway | 2026-02-21 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/936) |
| #937 | Too many hallucinations in exec tool | 2026-02-21 | 2 | [Link](https://github.com/HKUDS/nanobot/issues/937) |
| #940 | AI Agent Cannot Access Host Filesystem | 2026-02-21 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/940) |
| #954 | Progress streaming leaks internal tool calls | 2026-02-21 | 3 | [Link](https://github.com/HKUDS/nanobot/issues/954) |
| #976 | Multi-tenant discussion | 2026-02-22 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/976) |
| #979 | AI bypasses rm protection | 2026-02-22 | 5 | [Link](https://github.com/HKUDS/nanobot/issues/979) |
| #984 | Media path outside workspace | 2026-02-22 | 1 | [Link](https://github.com/HKUDS/nanobot/issues/984) |
| #990 | Pre-handler Hook | 2026-02-22 | 0 | [Link](https://github.com/HKUDS/nanobot/issues/990) |
| #1006 | Control plane MVP for subagents | 2026-02-22 | 2 | [Link](https://github.com/HKUDS/nanobot/issues/1006) |
| #1010 | Turn nanobot into team player | 2026-02-22 | 1 | [Link

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-04

---

## 1. Panorama do Dia

O Hermes Agent apresenta alta atividade comunitária em 04 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto está em modo intensivo de bugfixing: dois bugs P1 estão abertos (um relacionado a SIGPIPE no gateway com memory.provider byterover e outro sobre destruição de instalação no Windows após `hermes update`), enquanto a versão 0.15.1 continua gerando regressões reportadas pela comunidade. A ausência de releases novas indica que a equipe está estabilizando a base de código antes de um próximo lançamento. A saúde geral é **estável-com-tensão**, com múltiplas correções sendo preparadas em paralelo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões desde a data de corte deste relatório. A versão mais recente mencionada nos reports de bugs é a **v0.15.2** (referenciada no issue #38435), indicando que releases recentes focaram em hotfixes incrementais sobre a família 0.15.x.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados (7 total nas últimas 24h)

| # | PR | Tipo | Impacto | Link |
|---|-----|------|---------|------|
| 38513 | feat(desktop): add themes and zoom controls | feature | Zoom persistente, atalhos, e presets "Dark Glass" e "Veritas" para o desktop app | [#38513](https://github.com/NousResearch/hermes-agent/pull/38513) |
| 38435 | Desktop: pasted screenshots attach duplicate copies | bugfix | Corrige anexação duplicada de screenshots | [#38435](https://github.com/NousResearch/hermes-agent/pull/38435) |
| 38482 | fix(skills): document xurl X Article ingestion | docs | Documentação corrigida para extração de artigos do X via API raw | [#38482](https://github.com/NousResearch/hermes-agent/pull/38482) |
| 38425 (issue) | ui-tui: orphaned TUI processes busy-loop ~100% CPU | bug (reportado) | Processos órfãos consumindo CPU após fechamento | [#38425](https://github.com/NousResearch/hermes-agent/issues/38425) |

### PRs Abertos com Alto Impacto em Review

| # | PR | Tipo | Prioridade | Destaque |
|---|-----|------|------------|----------|
| 38509 | fix(mcp): never permanently give up reconnecting after transient outage | bugfix | P2 | Resolve dead-stick de servidores MCP após outages >30s; fecha [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) |
| 38511 | fix(update): abort after managed uv venv rebuild failure | bugfix | P1 | Impede instalação quebrada após falha de rebuild do venv no Windows |
| 38514 | fix(provider): honor Anthropic keys for auto portal provider | bugfix | P2 | Resolve provider resolution model-aware para chaves Anthropic |
| 37218 | feat: add target_node proof gate for kanban completion | feature | P3 | Gate de prova para tarefas Kanban que requerem node específico |
| 30936 | fix(slack): suppress explicit NO_REPLY sentinel | bugfix | P2 | Evita posting do sentinel literal em threads Slack |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

**1. #24039 — Auxiliary fallback chain deveria reutilizar fallback_providers (5 comentários, 👍 2)**
- **Problema Central:** O Hermes mantém dois sistemas paralelos de fallback que não se comunicam: a lista hardcoded interna e a configuração `fallback_providers` do usuário.
- **Demanda:** Unificação para que o fallback chain aux use o mesmo mecanismo configurável pelo usuário.
- **Link:** [#24039](https://github.com/NousResearch/hermes-agent/issues/24039)

**2. #27182 — Per-user USER.md isolation para multi-user (3 comentários, 👍 2)**
- **Cenário:** Em plataformas multi-usuário (Slack, Discord), o `MemoryStore.USER.md` é global, vazando contexto entre usuários.
- **Impacto:** deployments multi-tenant ficam comprometidos sem isolamento.
- **Link:** [#27182](https://github.com/NousResearch/hermes-agent/issues/27182)

**3. #29418 — Nous inference API streaming timeout em payloads grandes (1 comentário, 👍 1)**
- **Plataforma:** Linux ARM64, Telegram, modelos deepseek-v4.
- **Sintoma:** Streaming funciona para respostas curtas mas dá timeout em agent-sized payloads.
- **Link:** [#29418](https://github.com/NousResearch/hermes-agent/issues/29418)

### Padrões de Discussão

- **Visão/Gemini:** 4 issues concentradas em fallback, allowlist e erros 503/429 — a integração com Gemini 2.5+ está gerando fricção significativa.
- **Desktop App:** 7+ issues sobre TUI, desktop app, cron e sessão — maturidade do frontend ainda é ponto de dor.
- **Segurança:** Commits recentes sobre permissões de arquivos (0600/0700) geraram demanda por avisos proativos no `hermes doctor` ([#35891](https://github.com/NousResearch/hermes-agent/issues/35891)).

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — ação imediata requerida)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| 14036 | `--tui` gateway exits 0 mid-turn com memory.provider byterover (SIGPIPE flood) | gateway, tui, memory | OPEN | [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) |
| 37881 | `hermes update` bricks install no Windows — venv sem pyvenv.cfg | cli, python:uv | OPEN | [#37881](https://github.com/NousResearch/hermes-agent/issues/37881) |
| 35595 | /model command retorna lista técnica ao invés de mensagem legível (v0.15 regressão) | cli, gateway | CLOSED | [#35595](https://github.com/NousResearch/hermes-agent/issues/35595) |
| 27492 | fix(cron): release tick file lock antes de executar jobs (starvation) | cron | OPEN (PR existente) | [#27492](https://github.com/NousResearch/hermes-agent/issues/27492) |

### Bugs P2 (Importantes)

| # | Título | Componente | Link |
|---|--------|------------|------|
| 25822 | Gemini 503 não trigger fallback provider | vision, gemini | [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) |
| 30399 | Matrix gateway não funciona da imagem Docker (mautrix ausente) | gateway, docker, matrix | [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) |
| 35876 | fallback_chain falha silenciosamente em quota errors do Gemini | vision, gemini | [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) |
| 32766 | computer_use (cua-driver) quebre auxiliary vision routing | tools, vision | [#32766](https://github.com/NousResearch/hermes-agent/issues/32766) |
| 38488 | MCP server não reconecta após outage transitório | tool, mcp | [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) — **fix PR #38509 disponível** |

### Bugs P3 (Menores/cosméticos)

- **Desktop:** screenshots duplicados ([#38435](https://github.com/NousResearch/hermes-agent/issues/38435) — FIXED), prompt cron longo bloqueia scroll ([#38452](https://github.com/NousResearch/hermes-agent/issues/38452)), draft perdido ao navegar ([#38498](https://github.com/NousResearch/hermes-agent/issues/38498))
- **TUI:** processos órfãos busy-loop 100% CPU ([#38425](https://github.com/NousResearch/hermes-agent/issues/38425))
- **Slack:** NO_REPLY sentinel sendo postado literalmente ([#30936](https://github.com/NousResearch/hermes-agent/issues/30936))
- **Skills:** script path errado no skill productivity/maps ([#29584](https://github.com/NousResearch/hermes-agent/issues/29584))

### Regressões Identificadas na v0.15.x

- `/model` → lista técnica ao invés de mensagem legível (P1, fechada em [#35595](https://github.com/NousResearch/hermes-agent/issues/35595))
- macOS installer falha com `tsc -b` não resolvendo `@testing-library/dom` ([#36980](https://github.com/NousResearch/hermes-agent/issues/36980))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alta Demanda

**1. On-demand tool/skill/MCP discovery (#34038)**
- RFC para desacoplar registro de schema do lifecycle do processo
- Hoje: tudo é eager-loaded na inicialização (~12K tokens de schemas)
- **Link:** [#34038](https://github.com/NousResearch/hermes-agent/issues/34038)

**2. LLM summarization-based session recall (#38504)**
- Nova feature split do #25112
- Busca de sessões via sumário gerado por LLM
- **Link:** [#38504](https://github.com/NousResearch/hermes-agent/pull/38504)

**3. Memory-only com eviction e capacity (#38503)**
- Sistema de memória com eviction, scanner estrito e SQRT fix
- Split do #25112
- **Link:** [#38503](https://github.com/NousResearch/hermes-agent/pull/38503)

**4. Support custom Electron flags para Chromebook Crostini (#38515)**
- Japanese IME não funciona no ambiente Crostini
- **Link:** [#38515](https://github.com/NousResearch/hermes-agent/issues/38515)

**5. Email gateway preservar CC em replies (#38512)**
- CC.dropado na resposta atual
- **Link:** [#38512](https://github.com/NousResearch/hermes-agent/issues/38512)

**6. Nebius Token Factory provider (#38009)**
- Novo provider com suporte a reasoning models
- **Link:** [#38009](https://github.com/NousResearch/hermes-agent/pull/38009)

### Sinais de Evolução do Roadmap

| Sinal | Interpretação |
|-------|---------------|
| 3+ issues sobre fallback chain | Consolidação de sistemas de fallback é prioridade |
| Focus em desktop app (temas, zoom, drafts) | Maturidade UX do frontend é objetivo |
| RFC #34038 (lazy loading) | Arquitetura de plugins está em evolução |
| Kanban dashboard improvements (#37109, #37108) | Integração de agent workflow amadurecendo |
| Linear AIG webhook adapter (#38356) | Expansão de integrações enterprise |

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

1. **Instabilidade no Windows:** `hermes update` quebra instalações permanentemente — usuários perderam o agent funcional após update.
2. **SIGPIPE flood no TUI:** Sessões com `memory.provider: byterover` ficam completamente inutilizáveis — todo prompt causa crash.
3. **MCP não reconecta:** Servidores MCP ficam "mortos" após qualquer outage >30s até restart do gateway.

### Cenários de Uso Problemáticos

- **Usuários Docker + Matrix:** Impossibilitados de usar gateway Matrix out-of-the-box.
- **Multi-usuário sem isolamento:** Plataformas com múltiplos usuários (Slack/Discord) vazam contexto entre sessões via USER.md global.
- **Deepseek via Nous Portal:** Streaming timeouts em payloads de tamanho agente, forçando fallback a non-streaming.

### Satisfação Observada

- **Desktop app v0.15.2:** Novas features de temas e zoom ([#38513](https://github.com/NousResearch/hermes-agent/pull/38513)) indicam investimento em UX.
- **Kanban dashboard:** Community contributions ativas ([#37109](https://github.com/NousResearch/hermes-agent/issues/37109), [#37108](https://github.com/NousResearch/hermes-agent/issues/37108)) sugerem adoção em workflows de agent scaffolding.
- **Plugin system:** Nebius e MiniMax-CN OAuth providers demonstram extensibilidade viva.

### Fricções de Onboarding

- macOS installer quebrado em instalação limpa.
- Skill path documentation incorreta (`productivity/maps`).
- X Article ingestion precisa modo API raw — não documentado claramente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição (idade >7 dias)

| # | Título | Idade | Prioridade | Nota |
|---|--------|-------|------------|------|
| [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) | SIGPIPE flood no gateway com byterover | ~43 dias | P1 | Atribuído a witt3rd, mas sem fix merged |
| [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) | Streaming timeout Nous API | ~15 dias | P3 | Apenas 1 comentário |
| [#30704](https://github.com/NousResearch/hermes-agent/issues/30704) | Gemini 2.5+ missing from allowlist | ~12 dias | P2 | Sem atribuição clara |
| [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) | Fallback chain paralelo | ~24 dias | P2 | Discussão ativa mas semowner |
| [#27182](https://github.com/NousResearch/hermes-agent/issues/27182) | USER.md isolation | ~18 dias | P3 | Sem resposta da equipe |

### PRs Abertos com Status Desatualizado

| # | PR | Idade | Status | Bloqueio |
|---|-----|-------|--------|----------|
| [#37218](https://github.com/NousResearch/hermes-agent/pull/37218) | kanban target_node proof gate | ~2 dias | DRAFT | Necessita review |
| [#38009](https://github.com/NousResearch/hermes-agent/pull/38009) | Nebius provider | ~1 dia | OPEN | Necesita code review |
| [#38356](https://github.com/NousResearch/hermes-agent/pull/38356) | Linear AIG webhook | ~1 dia | DRAFT | Depends on credentials |
| [#25112](https://github.com/NousResearch/hermes-agent/issues/25112) | Parent issue: memory + session search | ~??? | OPEN | Bloqueando #38503 e #38504 |

### Recomendações de Priorização

1. **P1 blockers:** Corrigir `hermes update` no Windows e SIGPIPE no gateway — afetam estabilidade básica.
2. **P2 connectivity:** MCP reconnection (#38488 → PR #38509) e fallback chain unificado (#24039) são arquiteturalmente críticos.
3. **Onboarding:** macOS installer e Docker Matrix são barreiras de entrada — resolvedores rápidos de alto impacto.
4. **Backlog grooming:** Issues com >14 dias sem atribuição necessitam triagem antes de próxima release.

---

*Relatório gerado automaticamente com base em dados do GitHub de NousResearch/hermes-agent em 2026-06-04.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório de Projeto — PicoClaw

**Período de referência:** 2026-06-03 (últimas 24h)  
**Versão de snapshot nightly:** `v0.2.9-nightly.20260603.a502aa7f`  
**Versão estável mais recente (release tag):** `v0.2.9`  
**Repositório:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do dia

O ecossistema PicoClaw apresenta **alta atividade de desenvolvimento** em 2026-06-03, com 10 PRs atualizados e 3 issues ativas no período. A equipe mergeou correções críticas de segurança (TLS em MQTT) e atualização de linguagem (Go 1.25.11), ao mesmo tempo em que 7 PRs permanecem abertos tratando bugs, ferramentas e infraestrutura. A release nightly mais recente (`v0.2.9-nightly.20260603`) segue o ciclo contínuo de builds automatizados, indicando maturidade no pipeline de CI/CD. O volume de atividade sugere uma fase de polimento pré-release, com foco em estabilidade e correção de edge cases em canais de comunicação e ferramentas de execução.

---

## 2. Lançamentos

### 2.1 Release nightly

| Artefato | Tag | Data |
|---|---|---|
| Nightly Build | `v0.2.9-nightly.20260603.a502aa7f` | 2026-06-03 |

**Resumo de mudanças desde a última tag estável:**

- **#2997** — Bump Go de `1.25.10` para `1.25.11` (fix de segurança GO-2026-5039: *header names not escaped in error messages in `net/textproto`*). **Breaking change? Não.** Atualização de dependência de compilação.
- **#2899** — MQTT channel agora permite configuração de verificação TLS via campo `TLSSkipVerify` (default: `false`). Anteriormente o `InsecureSkipVerify` era forçado como `true`, expondo conexões a ataques MITM. **Potencial breaking change?** Ambientes que dependiam de skip automático de verificação em certificados autoassinados precisam explicitar `TLSSkipVerify: true` na configuração, ou terão comportamento mais restritivo.
- **#2994** — Documentação adicionada em `workspace/skills/picoclaw-agent/SKILL.md` com guia operacional para comportamento de agentes PicoClaw-native, cobrindo CLI, provedores, canais e workflows. **Não há breaking change.**

**Nota de migração:** ambientes Android com arquitetura 32-bit (**#2954**) permanecem sem suporte confirmado — não há indicação de que a nightly resolva esse problema. Usuários de Android 32-bit devem aguardar correção.

**Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.2.9...main

---

## 3. Progresso do Projeto

Três PRs foram fechados/mergeados no período de 24h, representando avanços concretos:

| PR | Status | Impacto |
|---|---|---|
| **#2997** `fix(deps): bump go from 1.25.10 to 1.25.11` | ✅ CLOSED | Correção de vulnerabilidade de segurança (GO-2026-5039) — names de headers não eram escapados em mensagens de erro do `net/textproto`, permitindo potencialmente injeção de conteúdo em logs. |
| **#2899** `fix: add configurable TLS verification for MQTT channel` | ✅ CLOSED | Elimina vetor de ataque MITM no canal MQTT. Usuários podem agora opt-in para skip de verificação em certificados autoassinados, opt-out por default. |
| **#2994** `docs(skill): self describing Picoclaw agent skill` | ✅ CLOSED | Melhora documentação operacional do agente; adiciona SKILL.md com workflows nativos PicoClaw. |

**Atividade de manutenção:** além dos merges, há 7 PRs abertos com diferentes estágios de maturidade — desde drafts de correção até documentação e features. A cobertura inclui segurança (#2956 — merge de `security.yml`), estabilidade de streaming (#2957 — tool_calls), robustez de singleton (#2955 — verificação de identidade de processo), headers dinâmicos MCP (#2696) e tratamento de erros em ferramentas (#2996).

---

## 4. Temas Quentes da Comunidade

### 4.1 Issue com maior engajamento

| Issue | Comentários | Reações | Link |
|---|---|---|---|
| **#2404** — [Feature] Add in config to send streaming HTTP request | **11** | 👍 x1 | [GitHub](https://github.com/sipeed/picoclaw/issues/2404) |

**Análise:** A issue #2404 propõe adicionar `"streaming": true` na configuração para habilitar streaming de requisições HTTP a backends LLM, emulando o comportamento do cliente OpenAI Python (`stream=True`). Com 11 comentários e 1 reação, é o tema mais discutido no período — indica demanda real de usuários que precisam de respostas progressivas de modelos de linguagem. A issue está aberta desde 2026-04-07, o que sugere que está em fase de avaliação de viabilidade ou aguardando design de implementação. É um forte candidato a feature da próxima versão.

### 4.2 PRs com atividade recente (stale cycle)

Todos os PRs abertos (#2956, #2957, #2955, #2696, #2992, #2995, #2996) foram marcados como `[stale]` pelo bot, indicando que não houve comentários há 30 dias. Isso não implica rejeição — sugere necessidade de review ou merge. Os PRs com maior urgência técnica são:

- **#2957** — `fix(channels): prevent tool_calls from being dropped during streaming` — diretamente relacionado à issue #2958 (tool_calls dropped). Correlação clara entre bug report e correção.
- **#2955** — `fix: verify process identity in singleton PID check` — previne startup failure quando o PID file contém um PID reutilizado por processo não-relacionado (ex: `systemd-resolved`). Bug potencialmente crítico em ambientes server.
- **#2996** — `fix(tools): handle json.Marshal errors in exec tool responses` — 7 instâncias de erros ignorados em `pkg/tools/shell.go` que causavam respostas vazias no LLM ao invés de mensagens de erro.

---

## 5. Bugs e Estabilidade

Três issues abertas foram atualizadas no período, todas classificadas como bugs:

| Issue | Severidade aparente | Descrição | Link |
|---|---|---|---|
| **#2954** `BUG: não suporta 32-bit Android` | **Alta** | PicoClaw não funciona em sistemas Android 32-bit. Impacta base de usuários de dispositivos mais antigos ou emulados. Issue marcada `[stale]`, o que é preocupante para triagem. | [GitHub](https://github.com/sipeed/picoclaw/issues/2954) |
| **#2958** `tool_calls messages dropped during consecutive requests` | **Alta** | Mensagens `tool_calls` são silenciosamente descartadas em requisições consecutivas via canal pico WebSocket. Apenas a primeira requisição recebe as tool calls. Correlacionado com PR #2957 em desenvolvimento. | [GitHub](https://github.com/sipeed/picoclaw/issues/2958) |
| **#2956** `channel enabled state overwrite` (PR, mas indica bug) | **Média** | Canais configurados como `enabled: true` no `config.json` eram desabilitados após loading de `.security.yml` quando credenciais eram adicionadas sem `enabled: true` explícito. | [GitHub](https://github.com/sipeed/picoclaw/pull/2956) |

**Métricas de estabilidade no período:**
- **Regressões identificadas:** 0 confirmadas
- **Bugs abertos novos:** 2 (#2954, #2958)
- **Bugs corrigidos/mergeados:** 2 (MQTT TLS #2899, singleton PID #2955, json.Marshal #2996)
- **Net de bugs abertos:** estável (3 issues, nenhuma fechada no período)

**Sinal de alerta:** a marcação `[stale]` em bugs ativos (#2954, #2958, #2956) sem resposta da equipe nos últimos 30 dias merece atenção — o risco de acúmulo de dívida técnica é crescente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais relevantes

| Item | Tipo | Link | Prioridade estimada |
|---|---|---|---|
| **#2404** — Streaming HTTP requests via config | Feature request | [GitHub](https://github.com/sipeed/picoclaw/issues/2404) | Alta — 11 comentários, demanda de parity com OpenAI SDK |
| **#2696** — Suporte a headers dinâmicos por requisição no MCP | Feature (PR aberto) | [GitHub](https://github.com/sipeed/picoclaw/pull/2696) | Média-Alta — adiciona flexibilidade para autenticação per-request |
| **#2956** — Canal de segurança com merge correto de `enabled` state | Correção / Feature de config | [GitHub](https://github.com/sipeed/picoclaw/pull/2956) | Média —DX improvement |

### Sinais de roadmap

A presença de features como streaming HTTP (#2404) e headers dinâmicos MCP (#2696) sugere que o roadmap atual está priorizando:

1. **Paridade com SDKs convencionais** (OpenAI) — streaming é esperado por usuários vindos de ecossistemas Python/Javascript.
2. **Extensibilidade de canais** — suporte a mais provedores e autenticação customizada.
3. **Robustez de configuração** — merges de config.yaml/security.yml com comportamento previsível.

O PR #2995 (`docs: add v0.2.5~v0.2.9 release highlights`) indica que a documentação de releases está sendo modernizada, possivelmente como preparação para comunicação mais estruturada de roadmap.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas

| Dor | Evidência | Impacto |
|---|---|---|
| **Ausência de streaming em requisições LLM** | Issue #2404 com 11 comentários — usuários querem comportamento idêntico ao `openai` Python SDK | Alto — é um gap funcional significativo para aplicações de streaming |
| **Quebra em Android 32-bit** | Issue #2954 — "不支持32位Android系统" | Alto — exclui base de usuários em dispositivos legados |
| **Descartes silenciosos de tool_calls** | Issue #2958 — "subsequent `tool_calls` messages are not delivered" | Alto — quebra fluxos de agentes multi-step |
| **Segurança MQTT comprometida por padrão** | Issue #2899 (já corrigida) — `InsecureSkipVerify: true` hardcoded | Crítico — mas já resolvido nesta release |

### Cenários de uso emergentes

O interesse por streaming (#2404) e o novo skill `picoclaw-agent` (#2994) sugerem que PicoClaw está sendo adotado como **motor de agente programável**, não apenas como gateway de chat. Usuários desejam:
- Integração programática com pipelines de streaming (agentes de resposta progressiva).
- Comportamento de agente descritível e documentado (skill-based).
- Suporte a headers customizados por canal (#2696), indicando uso em ambientes enterprise com autenticação mútua.

### Satisfação/Insatisfação

O volume de PRs de correção e a velocidade de merge (3 fechadas em 24h) sugerem **equipe responsiva**. No entanto, o acúmulo de itens `[stale]` sem triagem é um indicador de risco de satisfação — issues de bugs podem estar "desaparecendo" do backlog visual sem resolução.

---

## 8. Backlog que Merece Atenção

Itens sem resposta ou sem activity significativa que exigem ação da equipe:

| Item | Tipo | Idade (última atualização) | Urgência | Link |
|---|---|---|---|---|
| **#2954** — Bug 32-bit Android não suportado | Bug | 2026-05-27 (6+ dias sem resposta) | **Alta** | [GitHub](https://github.com/sipeed/picoclaw/issues/2954) |
| **#2958** — tool_calls dropped (conhecido, PR #2957 existe) | Bug | 2026-05-27 (6+ dias sem resposta) | **Alta** | [GitHub](https://github.com/sipeed/picoclaw/issues/2958) |
| **#2956** — channel enabled state merge (PR, não há feedback) | Bug/Correção | 2026-05-27 | **Média** | [GitHub](https://github.com/sipeed/picoclaw/pull/2956) |
| **#2955** — singleton PID process identity (PR sem feedback) | Bug/Correção | 2026-05-27 | **Média** | [GitHub](https://github.com/sipeed/picoclaw/pull/2955) |
| **#2696** — dynamic headers MCP (PR aberto há 35+ dias) | Feature | 2026-04-28 | **Média** | [GitHub](https://github.com/sipeed/picoclaw/pull/2696) |
| **#2404** — streaming HTTP request (sem decisão de design) | Feature | 2026-04-07 (60+ dias) | **Média-Alta** | [GitHub](https://github.com/sipeed/picoclaw/issues/2404) |

### Ações recomendadas para a equipe

1. **Triagem urgente:** #2954 e #2958 — ambos estão `[stale]` com impacto de usabilidade significativo. Necesitam confirmação de reprodução, milestone e assignee.
2. **Review de PRs em stale:** #2956, #2955, #2696 — todos passaram pelo ciclo de stale sem feedback. Revisar e aprovar/fechar com justificativa.
3. **Resposta ao #2404:** feature request ativa há 60 dias com 11 comentários. A comunidade espera um posicionamento sobre viabilidade e roadmap.

---

**Saúde geral do projeto (2026-06-04):** 🟡 **Estável com riscos de backlog**

O projeto mantém ritmo saudável de correções de segurança e bugs técnicos. A atenção deve se voltar para triagem dos itens stale e resposta à comunidade — o volume de issues não fechadas sem feedback pode erodir confiança de contribuidores. A feature de streaming (#2404) é o indicador mais forte da direção que a comunidade espera.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw | 2026-06-04

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade** nesta data, com 50 PRs atualizados e 19 issues nas últimas 24h. A release `v0.29.1` foi publicada hoje com correções de engine e enhancements na API web. O esforço principal concentra-se na integração do **Reborn** (novo framework de workflow) com múltiplos canais (Slack, WebUI v2) e no endurecimento de segurança do sistema de hooks e credenciais HTTP. A saúde geral é boa, com 25 PRs merged e 13 issues abertas em estado ativo, sinalizando um pipeline de desenvolvimento saudável com entrega contínua.

---

## 2. Lançamentos

### ironclaw-v0.29.1 (2026-06-04)

| Categoria | Mudança | PR |
|-----------|---------|----|
| **Added** | Plumb temperature through Responses API (web) | [#3641](https://github.com/nearai/ironclaw/pull/3641) |
| **Fixed** | Scope v1 history for channel conversations (engine) | [#4320](https://github.com/nearai/ironclaw/pull/4320) |
| **CI/Release** | Add WeCo integration | — |

**Avaliação:** Release incremental com foco em qualidade de API Responses e correção de scoping em conversas por canal. Sem breaking changes. Migração direta para usuários da versão anterior.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (3 itens de destaque)

| PR | Título | Tamanho | Escopo | Impacto |
|----|--------|---------|--------|---------|
| [#4415](https://github.com/nearai/ironclaw/pull/4415) | PR18.7: trigger poller full-path integration test | M | Trigger worker | Cobertura de integração para poller real |
| [#4417](https://github.com/nearai/ironclaw/pull/4417) | Fix WebUI live projection cursor resume | M | WebUI v2 | Corrige regressão em progresso de cursor ao vivo |
| [#4412](https://github.com/nearai/ironclaw/pull/4412) | Bind local dev runtime scope to run actor | M | SSO/Capabilities | Resolve identidade em runs locais via actor binding |

**Resumo:** O progresso hoje focou em estabilidade (testes de trigger poller), UX WebUI (cursor resume) e compatibilidade dev/prod (runtime scope binding). Tais PRs indicam foco em qualidade de release antes de features maiores.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Estado | Tema Central |
|---|--------|-------------|--------|--------------|
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Lane 10: add Slack ProductAdapter MVP | 6 | OPEN | Integração Slack via Reborn |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Add ProductWorkflow and InboundTurnService facade | 5 | OPEN | Arquitetura Reborn — Product layer |
| [#4376](https://github.com/nearai/ironclaw/issues/4376) | Harden HTTP credential carriers with non-clone types | 2 | OPEN | Segurança de credenciais |
| [#4310](https://github.com/nearai/ironclaw/issues/4310) | Context-overflow recovery emits ShrinkContext but executor retries | 1 | CLOSED | Resiliência de contexto |

### Análise de Demandas

**Maior volume: Arquitetura Reborn**

As issues #3857 e #3280 lideram em comentários (6 e 5, respectivamente), evidenciando que a comunidade está fortemente engajada na migração para o framework **Reborn**:
- **#3857** busca adicionar ProductAdapter para Slack com credenciais pré-configuradas — sinaliza demanda por integrações sociais via Reborn.
- **#3280** avança a facade `ProductWorkflow`/`InboundTurnService` — indica que a camada de produto do Reborn está em maturação.

**Segurança em destaque**

A issue #4376 (2 comentários) trata de endurecimento de carriers de credenciais HTTP com tipos não-clone. Este é um padrão recorrente no projeto hoje: multiple PRs (#4222, #4351) também focam em segurança de credenciais e gating de capacidades.

---

## 5. Bugs e Estabilidade

### Issues de bugs reportadas

| # | Severidade | Título | Status | Impacto |
|---|------------|--------|--------|---------|
| [#4400](https://github.com/nearai/ironclaw/issues/4400) | **Alta** | IronClaw may fail to start due to stale PID file | OPEN | Startups falham após restart; não recupera automaticamente |
| [#4377](https://github.com/nearai/ironclaw/issues/4377) | **Alta** | `/model` returns display names that cannot switch models (NEAR AI provider) | OPEN | Usuários não conseguem alternar modelos via UI |
| [#4420](https://github.com/nearai/ironclaw/issues/4420) | **Média** | `TriggerCompletionPolicy::CompleteAfterFirstFire` stored but never consulted | OPEN | Triggers re-firam eternamente; política ignorada |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Média** | Nightly E2E failed | OPEN | Pipeline de regressão comprometido |
| [#4310](https://github.com/nearai/ironclaw/issues/4310) | **Baixa** | Context-overflow recovery emits ShrinkContext but executor retries without shrinking | CLOSED | Resolvido |

### Análise

- **2 bugs de alta severidade** exigem atenção: stale PID file (iniciação) e display names no `/model` (UX de alternância de modelos). Ambos impactam experiência de produção.
- **Trigger system** apresenta falha estrutural: política `CompleteAfterFirstFire` persiste mas não é consultada — bug lógico recorrente.
- **Pipeline CI** apresenta E2E failure noturno, requer investigação prioritária para evitar regressões silenciosas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas abertas

| # | Título | Escopo | Relevância |
|---|--------|--------|------------|
| [#4407](https://github.com/nearai/ironclaw/issues/4407) | Design model-visible capability selection for provider tool-count limits | Reborn/LLM | Alta — limitações de tools por provider |
| [#4382](https://github.com/nearai/ironclaw/issues/4382) | Default OAuth account per provider (gate never re-fires) | Auth/OAuth | Alta — experiência de autenticação |
| [#4381](https://github.com/nearai/ironclaw/issues/4381) | Add canonical Reborn identity resolver for OAuth and external actor binding | Identity/Auth | Arquitetural |
| [#4389](https://github.com/nearai/ironclaw/issues/4389) | Split behavior-changing auth and MCP review items from PR #4354 | Auth/MCP | Follow-up de PR |

### Sinais de Roadmap

1. **Gestão de tools por provider** — A issue #4407 sinaliza necessidade de seleção de capabilities visível ao modelo quando limites de tools são atingidos. Isso indica preparação para providers com constraints distintos (e.g., GPT-5.4-nano).
2. **OAuth simplificado** — #4382 propõe que o gate OAuth dispare apenas na primeira autenticação, com credenciais padrão silenciosas após isso — demanda de UX para não-repetição de autenticação.
3. **Integração Slack como ProductAdapter** — Slack aparece como primeira integração social via Reborn (issue #3857 + PRs #4418 e #4421), indicando que a estratégia de canais externos está se materializando.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas a partir de Issues

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Instabilidade em startup** | Stale PID file impede inicialização após restart | Alta |
| **Confusão em alternância de modelos** | `/model` retorna nomes display não-usáveis com NEAR AI provider | Alta |
| **Autenticação repetitiva** | OAuth gate re-fira para providers já autenticados | Média |
| **Trigger re-firing** | Políticas de completion ignoradas; triggers disparam infinitamente | Média |

### Contexto de uso emergente

- **Uso via NEAR AI provider** como cenário principal de produção (issues #4377, #4407 indicam dependência de OpenAI-compatible routes via Reborn).
- **WebUI v2** em evolução ativa (PRs #4419, #4380, #4417), sugerindo base de usuários web crescente.
- **CLI read-only commands** em migração para Reborn (PR #4379), indicando preocupação com experiência de developer tooling.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / desatendidas

| # | Título | Criado | Atualizado | Estado | Observação |
|---|--------|--------|------------|--------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-03 | OPEN | CI quebrado há 8 dias; sem comentários |
| [#3801](https://github.com/nearai/ironclaw/issues/3801) | Lane 2: finish extension-v2 catalog readiness | 2026-05-19 | 2026-06-03 | CLOSED | Resolvido, monitorar |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | Migrate OpenAI-compatible chat and Responses APIs onto Reborn | 2026-05-06 | 2026-06-03 | OPEN | Prioridade: sugerida P2; sem movimento aparente |

### Análise

- **#4108 (E2E Failure)** — Criado há 8 dias, reportado diariamente pelo bot `github-actions[bot]`, mas sem triagem ou comment da equipe. Prioridade: **escalonar para CI/QA**.
- **#3283 (OpenAI-compatible API migration)** — Issue antiga (criada 2026-05-06), marcada P2, com 1 comentário. Relaciona-se diretamente com a migration para Reborn e impacta compatibilidade externa.
- **Linha do tempo Reborn** — Issues #3280, #3283, #3857 indicam dependência entre workstreams; falta visibilidade sobre ETA de completion.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| PRs merged (24h) | 3 de 50 atualizados | 🔵 Saúde, pipeline ativo |
| Issues abertas | 13 de 19 | 🔵 Volume normal |
| Bugs alta severidade | 2 | 🟡 Requer atenção |
| CI status | E2E falhando | 🟡 Blocker |
| Atividade de release | v0.29.1 hoje | 🟢 Entrega contínua |
| Engajamento comunitário | 6 comentários em top issue | 🟢 Interesse ativo |

---

**Próximos passos recomendados:**
1. Resolver stale PID file (#4400) e display name do `/model` (#4377) — ambos são blockers de UX.
2. Triar E2E failure (#4108) — CI quebrado prejudica regressão.
3. Dar visibilidade ao roadmap de Reborn — múltiplas issues interconectadas sem timeline clara.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-04

---

## 1. Panorama do dia

CoPaw (QwenPaw) demonstra **alta atividade de desenvolvimento** hoje, com 48 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos formais, mas o time fechou 20 issues e 21 PRs, indicando foco intenso em estabilidade e qualidade. A comunidade permanece engajada em topics críticos como compressão de contexto,记忆系统, e браузерные инструменты. O projeto está em ritmo acelerado de bug fixing pós-v1.1.10, com múltiplas correções sendo mergeadas simultaneamente em canais, contexto e memória.

---

## 2. Lançamentos

**Nenhum release hoje.** O último ciclo de releases está em intervalo — a equipe parece focada em estabilização antes de um próximo tag.

> 📌 *Recommendação:* Monitorar [roadmap PR #4942](https://github.com/agentscope-ai/QwenPaw/pull/4942) para sinais de versão iminente.

---

## 3. Progresso do Projeto

### PRs merged/fechados mais impactantes

| PR | Escopo | Impacto |
|---|---|---|
| [#4935](https://github.com/agentscope-ai/QwenPaw/pull/4935) | `chore(deps)` | Atualiza `reme-ai` para 0.3.1.10, inclui fix de File Watcher reliability (stop-event não era resetado no restart) |
| [#4933](https://github.com/agentscope-ai/QwenPaw/pull/4933) | `fix(context)` | Corrige crash `'str' object has no attribute 'get'` em processamento de media blocks com source URL — fecha multiple issues |
| [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) | `feat(feishu)` | Adiciona modo de compartilhamento de sessão em grupo para Feishu — todas membros compartilham mesmo contexto |
| [#4737](https://github.com/agentscope-ai/QwenPaw/pull/4737) | `feat(telegram)` | Implementa interactive tool-guard approval via inline keyboard para Telegram |
| [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) | `feat(console)` | Otimiza slash command suggestions: exibe skills do agent atual, limita popup a 5 itens, scroll funcional |
| [#4940](https://github.com/agentscope-ai/QwenPaw/pull/4940) | `fix(integration)` | Resilience em upload size limit (10MB) + plugin loader timeout handling |
| [#4888](https://github.com/agentscope-ai/QwenPaw/pull/4888) | `fix(dream)` | Corrige write_file relativo do Dream agent sobrepondo MEMORY.md de outro workspace |

### PRs abertos de destaque

| PR | Escopo | Status |
|---|---|---|
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | `feat(acp)` | Extende ACP server com metadata para terminal UI paw — advertising commands, errors, tool params |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | `feat(memory-distill)` | Plugin de distillação de memória com engine title-diffing (~92% noise reduction) |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | `feat(providers)` | Adiciona MiniMax M3 como modelo default em ambos provedores (international + CN) |
| [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) | `fix(browser)` | Adiciona CDP timeout param + isolação de browser profiles para cross-browser switching |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | `fix(plugin)` | Decoupling plugin loader initialization do agent startup — corrige "Plugin loader not ready" no Tauri Desktop |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | `feat(desktop)` | Tauri auto-updater para desktop app |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tema | Comentários | Sentimento |
|---|---|---|---|
| [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | browser_use falha no Windows: CDP timeout + browser crash | 6 | Bug crítico |
| [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) | Hermes Agent — self-evolution feature request | 6 | Feature request |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb segfault (SIGSEGV) no Linux | 5 | Bug crítico |
| [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) | Dream agent memory management falha | 5 | Bug |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Auto-Memory deve excluir Heartbeat & Cron ✅ | 4 | Enhancement |

### Análise das demandas

1. **Stabilidade do browser (Issues #4919, #3854):** Forte demanda por reliability do browser_use em Windows/Linux. Usuários estão tentando fallbacks (playwright-cli) manualmente.

2. **自我进化 do Agent (#3470, #3516):** Duas issues independentes pedindoHermes-like self-evolution. Indica interesse significativo em capacidades de auto-improvement do agent.

3. **Memory system robustness (#3905, #3854, #4795):** Sistema de memória tem múltiplos pontos de falha — ChromaDB bloat, dream agent, auto-memory — indicando dívida técnica nessa área.

4. **Context compression (#4924, #4448, #4811):** Tema recorrente — múltiplos bugs de compressão foram fechados hoje mas ainda há issues abertas (#4937) sobre o comando `/compact` ignorando max_input_length do modelo.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Open)

| Issue | Severidade | Descrição | Impacto |
|---|---|---|---|
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | 🔴 Alta | chromadb Rust binding segfault no Linux — mata todo o processo sem exception handling | 45+ crashes por sessão |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | 🔴 Alta | Vector index bloat para 37GB causa memory_search crash a cada 30min | Sistema unusable após 3 meses |
| [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | 🔴 Alta | browser_use CDP timeout + browser crash no Windows | Funcionalidade browser unusable |
| [#4922](https://github.com/agentscope-ai/QwenPaw/issues/4922) | 🔴 Alta | PermissionError no WeChat após operação com arquivo — sessões ficam permanentemente quebradas | Persiste após clear session |

### Bugs Médios (Open)

| Issue | Severidade | Descrição |
|---|---|---|
| [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) | 🟡 Média | Custom channel para de ouvir após save settings |
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | 🟡 Média | `/compact` ignora max_input_length do modelo — usa default 128K |
| [#4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) | 🟡 Média | Timestamp inconsistency entre MemoryNode (naive datetime) e vector store (UTC) |
| [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) | 🟡 Média | tool_result_pruning falha com output > 20x do recent_max_bytes |
| [#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923) | 🟡 Média | spraw_subagent tasks não mostram conteúdo em tempo real |

### Bugs de Baixa Severidade (Open)

| Issue | Severidade | Descrição |
|---|---|---|
| [#4916](https://github.com/agentscope-ai/QwenPaw/issues/4916) | 🟢 Baixa | Backup falha com PermissionError em browser cache files |
| [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) | 🟢 Baixa | Skill market download excede limite de 5MB |

### Bugs Corrigidos Recentemente
- [#4811](https://github.com/agentscope-ai/QwenPaw/issues/4811) — `'str' object has no attribute 'get'` em media blocks com source URL plano
- [#4924](https://github.com/agentscope-ai/QwenPaw/issues/4924) — Compressão de contexto falhando com formato inválido
- [#4888](https://github.com/agentscope-ai/QwenPaw/issues/4888) — Dream agent sobrepondo MEMORY.md de outro workspace

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features requestadas (Issues abertas)

| Issue | Categoria | Descrição | Prioridade |
|---|---|---|---|
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) | RFC | **Sessão end → auto summary hook** — extrair key decisions, code changes, pitfalls automaticamente | Alta |
| [#4920](https://github.com/agentscope-ai/QwenPaw/issues/4920) | UX | Input box: seta para cima com texto deve mover cursor ao início, não buscar histórico | Média |
| [#4921](https://github.com/agentscope-ai/QwenPaw/issues/4921) | Performance | Images/attachments não devem ser carregados como raw data no context — causa inflation | Alta |
| [#4876](https://github.com/agentscope-ai/QwenPaw/issues/4876) | UX | Code mode deveria abrir projetos em outros discos no Windows | Média |
| [#4208](https://github.com/agentscope-ai/QwenPaw/issues/4208) | Enhancement | Suporte a mem0? — perguntam como integrar | Baixa |

### Sinais de roadmap via PRs

| PR | Evidência de roadmap |
|---|---|
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | MiniMax M3 como novo flagship default — indica atualização de lineup de provedores |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri auto-updater em progresso — desktop experience maturation |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | memory-distill plugin ~92% noise reduction — feature de memória avançada |
| [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) | Slash command custom menu — UX customization |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ACP protocol extensões para terminal UI |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Uso intensivo quebra ChromaDB (#4795, #3854):**
   > *"使用约 3 个月后，ChromaDB 索引膨胀至 37GB，触发 memory_search 时进程卡死/超时"*
   - **Cenário:** Usuários de longa duração com uso normal diário
   - **Impacto:** Sistema se torna unusable — única solução é deletar file_store/
   - **Insatisfação:** Alta — não há warning ou graceful fallback

2. **Browser tool instável (#4919):**
   > *"browser_use 启动失败：managed CDP 超时 + Chrome/Edge 浏览器闪退"*
   - **Cenário:** Usuários Windows tentando automação de browser
   - **Workaround atual:** npm playwright-cli como fallback
   - **Insatisfação:** Alta

3. **Memory system não funciona como esperado (#3905):**
   > *"执行QwenPaw梦境优化... MEMORY.md仅保留空白模板... memory/2026-04-27.md完全不存在"*
   - **Cenário:** Usuários que dependem de dream agent para memory consolidation
   - **Impacto:** Loop de memória não fecha — agente não aprende
   - **Insatisfação:** Média-alta

4. **WeChat sessions permanentemente quebradas (#4922):**
   > *"不管怎么问都报这个错... 尝试用AI修复，都不能解决"*
   - **Cenário:** Usuário tentou acessar arquivo com problema de permissão
   - **Impacto:** Session corruptada persistentemente
   - **Insatisfação:** Crítica

### Cenários de uso em evidência

- **Desenvolvimento de longo prazo:** Usuários mantendo sessões cross-day com code changes
- **Automação multi-canal:** Feishu, Telegram, WeChat, DingTalk — cada um com nuances específicas
- **Desktop vs Web:** Tauri desktop tem problemas de plugin loader que versão web não tem

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Criado | dias | Estado | Prioridade |
|---|---|---|---|---|
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) chromadb segfault | 2026-04-27 | ~8 | OPEN | 🔴 Alta |
| [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) Dream agent memory | 2026-04-28 | ~7 | OPEN | 🟡 Média |
| [#4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) Timestamp inconsistency | 2026-05-27 | ~8 | OPEN | 🟡 Média |
| [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) tool_result_pruning | 2026-05-28 | ~7 | OPEN | 🟡 Média |
| [#4208](https://github.com/agentscope-ai/QwenPaw/issues/4208) mem0 support | 2026-05-11 | ~24 | OPEN | 🟢 Baixa |

### PRs abertos há >7 dias sem merge

| PR | Criado | Escopo | Status |
|---|---|---|---|
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) memory-distill plugin | 2026-05-10 | Feature | Under Review |
| [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) slash command menu | 2026-05-22 | Feature | Open |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) tauri auto updater | 2026-05-25 | Feature | Open |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) MiniMax M3 provider | 2026-06-01 | Feature | Under Review |

---

## Métricas de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues fechados/hoy | 20/48 | ✅ Bom (

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw | 2026-06-04

---

## 1. Panorama do Dia

O projeto ZeroClaw manteve um **ritmo intenso de atividade** em 04/06/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Nenhuma nova release foi publicada no período, mas o pipeline de merge está ativo — 8 PRs foram fechados/merged no último dia, sinalizando progresso concreto de código. A base de issues abertas reduziu de 24 para um volume menor após os fechamentos de hoje, indicando foco em resolução de pendências acumuladas. O período também registrou dois novos trackers de release (#7112 para v0.8.0 e #6970 para v0.8.1), revelando que o projeto se aproxima de ciclos de entrega significativos. A comunidade está engaged, com issues de segurança, canais e config liderando a discussions.

---

## 2. Lançamentos

**Nenhuma nova release publicada nas últimas 24h.**

O último release estável disponível é anterior a hoje. A ausência de release não indica estagnação — pelo contrário, dois trackers dedicados mostram que o trabalho está convergindo:

- **#7112** — [v0.8.0 release queue e Stable-tier blockers](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) — focado em promoção de config e tool-call-parser para Stable-tier, além de limpeza de breaking changes em schema/config.
- **#6970** — [v0.8.1 integration/channel/provider/tool PR queue](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — fila operacional para canais, providers, ferramentas e trabalho de integração.

**Nota de acompanhamento:** Sem releases formais hoje, o próximo tag de versionamento será o marco mais relevante para avaliar a saúde de entrega do projeto.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h (8 itens)

O projeto fechou **8 PRs**, representando trabalho real entregue:

| PR | Autor | Tema | Tamanho |
|----|-------|------|---------|
| [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) | singlerider | fix(channels): excisa fallback de credential de default-model-provider | L |
| [#6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988) | singlerider | fix(gateway): invalida bearer token ao rotacionar/deletar device | L |
| [#7174](https://github.com/zeroclaw-labs/zeroclaw/pull/7174) | dependabot | chore(deps): bump react-router e react-router-dom em /web | — |
| [#7118](https://github.com/zeroclaw-labs/zeroclaw/pull/7118) | singlerider | fix(zerocode): unifica convenções de navegação e conserta keybindings | — |
| [#7161](https://github.com/zeroclaw-labs/zeroclaw/pull/7161) | perlowja | docs(setup): adiciona guia FreeBSD + arquivos rc.d/jail | — |
| [#7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172) | tidux | fix(providers): honra wire_api = "responses" para llamacpp | XS |
| [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) | mn13 | feat(eval): Phase 0 agent eval harness — replay determinístico | XL |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | singlerider | feat(channels): reply pacing por destinatário em 9 canais | L |

**Destaques do progresso:**

- **Segurança em gateway** (#6988): rotação e revogação de tokens agora realmente invalidam o bearer token — anteriormente a UI expunha a superfície mas não executava a invalidação.
- **Channel orchestrator** (#7066): remoção do conceito fabricated de "default model provider" no orquestrador de canais, alinhando com o schema V3.
- **Eval harness** (#7067): primeira fase de uma suíte de avaliação de agente via replay determinístico offline — marco estratégico para qualidade contínua.
- **FreeBSD** (#7161): expansão de suporte a plataformas, adicionando manual e scripts `rc.d`/`jail` para distribuição.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engagement (por comentários)

| # | Título | Comentários | Tag Principal |
|---|--------|-------------|--------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Bug: default_model issue on fresh install | 18 | bug / config |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Shell sandbox blocks Python skill patterns (v0.6.9) | 6 | bug / runtime |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web channel: pair succeeds, messages don't flow | 6 | bug / channel |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge auto-integrator emits non-schema fields | 5 | bug / skills |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider support para RPC/WSS | 3 | enhancement / security |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security enforcement layer | 3 | enhancement / security |

### Análise das demandas mais comentadas

**#6123 (18 comentários) — default_model em instalação nova:**
Problema críticos de onboarding: usuários com instalação limpa em LXC não conseguem iniciar o agente sem configurar explicitamente `default_model`, mesmo que o provider já esteja acessível. Este é um caso de UX de primeira experiência que afeta diretamente a curva de adoção. Resolvido (CLOSED) mas com 18 comments indicando que a questão pode precisar de seguimiento adicional para garantir que a solução é completa.

**#5722 (6 comentários) — sandbox de shell bloqueia skills Python realistas:**
O usuário perlowja (contribuindo em capacidade pessoal, com contexto em portfólios FINOS CDM 5.x) reporta que a configuração default do sandbox shell bloqueia padrões de código Python que são razoáveis e esperados dentro de skills. Este issue tem relevância estratégica: o projeto está atraindo contribuidores com casos de uso sophisticated (finanças, compliance), e a sandbox precisa evoluir.

**#6246 (6 comentários) — WhatsApp Web quebrado após protocol bump de abril 2026:**
O canal WhatsApp Web silenciosamente parou de entregar e receber mensagens após um bump de protocolo no lado servidor do WhatsApp (~2026-04-24). Afeta fluxos de trabalho de automação que dependem do canal. Prioridade P1 — risco operacional direto.

**#7141 e #7142 (3 comentários cada) — OIDC e segurança plugável:**
Três issues de追踪 OIDC e provedor de segurança plugável, ambos com targeting em v0.9.0. Sinalizam que o projeto está amadurecendo sua arquitetura de autenticação para escenarios enterprise — um indicador saudável de evolução de produto.

---

## 5. Bugs e Estabilidade

### Bugs críticos (risk: high, P1)

| # | Título | Severidade | Status |
|---|--------|-----------|--------|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Web dashboard/WSS bypasses ApprovalManager | S1 — blocked | in-progress |
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | No pairing code shown on alternate port | S1 | accepted |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor drops reasoning_content | S2 — degraded | in-progress |
| [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) | zai-cn retorna 1214 com glm-5-turbo | S1 — broken | in-progress |
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | Skills bloqueadas mesmo com allow_scripts = true | S1 — blocked | in-progress |
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | `zeroclaw skills install clawhub:*` panics | S1 — blocked | in-progress |
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | Skills bloqueadas mesmo com allow_scripts = true | S1 — blocked | in-progress |
| [#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) | quickstart webhook config missing port selection | S1 — blocked | OPEN |

### Bugs relevantes de estabilidade

- **#6431** — [SQLite memory schema init falha em startup concorrente](https://github.com/zeroclaw-labs/zeroclaw/issues/6431): falha de coluna duplicada em inicialização paralela. Afeta ambientes multi-processo.
- **#6516** — [ACP cwd change lock out](https://github.com/zeroclaw-labs/zeroclaw/issues/6516): mudança de `cwd` no protocolo ACP pode impedir o agente de ler seus próprios skill files.
- **#5453** — [WebSocket /ws/chat não processa marcadores IMAGE](https://github.com/zeroclaw-labs/zeroclaw/issues/5453): multimodal quebrado via WebSocket — modelo recebe marcador como texto puro.
- **#6103** — [Token accounting perdido para webhook observer](https://github.com/zeroclaw-labs/zeroclaw/issues/6103): observabilidade de uso de tokens comprometidos para eventos de webhook. Bloqueado.

### Panorama geral de bugs

Dos **50 issues atualizados**, uma proporção significativa é P1 com severidade S1 — workflow blocked. O projeto está sob pressão de estabilidade em múltiplos eixos simultâneos: sandbox, canais, providers, e segurança. A existência de dois trackers de release (#7112 e #6970) organizados por version suggests a equipe está priorizando essa limpeza antes de marcar release stable.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features identificadas hoje

| # | Título | Tipo | Target |
|---|--------|------|--------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider support para RPC/WSS | Security / Architecture | v0.9.0 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security provider interface | Security / Architecture | v0.9.0 |
| [#7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168) | Session branching — fork conversations at any message point | Feature | OPEN |
| [#7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167) | Session branching — fork at specific message point | Feature | OPEN |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | Cancellation support para ACP-protocol sessions | Enhancement | in-progress |

### Sinais de roadmap mais relevantes

**Sessão de branching (#7168, #7167):**
Dois issues merged simultaneamente solicitando a mesma capacidade — fork de conversas em qualquer ponto, com histórico completo até o fork. A duplicação (provavelmente提交的 por dois contribuidores diferentes) indica demanda real e não trivial. Este é um feature de UX de conversation management que posicionaria o ZeroClaw como mais competitivo frente a concorrentes com histórico ramificado.

**Avaliação de agente (#7067 merged):**
O PR merged para eval harness Phase 0 é significativo. Um framework de avaliação determinístico offline permite testes sem custo de API e sem flakiness — infraestrutura crítica para manutenção de qualidade conforme o projeto escala em complexidade.

**FreeBSD support (#7161 merged):**
Expansão de plataforma além de Linux padrão — indica madureza e interesse em adoção em ambientes BSD.

**OIDC e pluggable security (#7141, #7142):**
A arquitetura de autenticação está evoluindo para padrões enterprise. A decisão de tracked em v0.9.0 (não v0.8.x) sugere que é trabalho arquitetural que requer mais ciclos de design antes de implementação.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Onboarding frustrante (#6123):**
> *"Tenho uma instalação limpa em um LXC container. Meu ollama está em outro LXC no mesmo servidor. Depois de configurar o onboarding, recebo este erro..."*

O usuário não consegue completar uma configuração que deveria funcionar out-of-the-box. A dor é especificamente sobre a expectativa de que uma configuração de provider funcional deveria permitir que o agente executasse sem step adicional de configuração de modelo default.

**2. Sandbox restritiva para skills legítimas (#5722):**
> *"Estou desenvolvendo InvestorClaw, um skill de análise de portfólio em conformidade com FINOS CDM 5.x, próximo de anúncio público..."*

O feedback revela que o ZeroClaw está sendo adotado em contextos financeiros profissionais com requisitos de compliance. O sandbox sendo demasiado restritivo é um problema de UX que impacta diretamente a proposta de valor para power users e potencialmente empresas.

**3. Canal WhatsApp quebrado silenciosamente (#6246):**
> *"O canal WhatsApp Web (feature gated por `dep:wa-rs`) silenciosamente para de entregar e receber mensagens..."*

O silêncio na falha é o principal ponto de dor aqui — o usuário não recebe feedback de que o canal está down, o que causa perda de mensagens sem transparência.

**4. Webhook quickstart broken (#7173):**
> *"Durante o quickstart de um canal webhook não há opção de inserir porta. Ao tentar iniciar o agente... Error: Failed to migrate..."*

Dolor imediato — o usuário não consegue completar uma operação básica e recebe um erro de migração de schema. Problema P1, já reportada no mesmo dia, sinalizando que a área de canal webhook está com dívida técnica

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*