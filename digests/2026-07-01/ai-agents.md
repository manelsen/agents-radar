# Resumo diário do ecossistema de agentes de IA 2026-07-01

> Issues: 2 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-06-30 21:23 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-01

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **alta atividade de desenvolvimento** nesta data, com 4 pull requests mergeados/fechados e nenhuma nova release publicada. O nível de manutenção é ativo, com 2 issues em aberto demandando atenção — ambas relacionadas a estabilidade em ambientes específicos (Android/Termux e Telegram). A base de código continua em evolução, com foco recente em melhorias no sistema de cron jobs e provedores de IA. O projeto demonstra maturidade operacional, porém com pontos de fricção em integrações externas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões neste período. O último ciclo de releases não foi captado nos dados disponíveis. Recomenda-se monitorar o repositório para próximos milestones.

---

## 3. Progresso do Projeto

### PRs fechados/mergeados nas últimas 24h:

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | **Alto** — Engine de scheduler com banco de dados, histórico de execuções, tipos de jobs (skill/agent/shell), timezone offsets e alertas para operadores |
| [#641](https://github.com/nullclaw/nullclaw/pull/641) | fix(providers): fix GLM/ZhipuAI thinking mode | yanggf8 | **Médio** — Corrige loops de resposta causados pelo thinking_param sempre ativo em provedores GLM/ZhipuAI |
| [#643](https://github.com/nullclaw/nullclaw/pull/643) | fix(cron): allow agent jobs to omit command field | yanggf8 | **Médio** — Remove dependência redundante do campo `command` em jobs de cron, evitando desaparecimento de jobs após restart |
| [#645](https://github.com/nullclaw/nullclaw/pull/645) | fix(cron): add --account flag to cron add-agent CLI | yanggf8 | **Médio** — Adiciona flag `--account` para especificar delivery_account_id via CLI, eliminando necessidade de edição manual de config |

**Análise:** O contributor **yanggf8** domina completamente o fluxo de contributions recentes (4/4 PRs), sugerindo alto comprometimento individual. O foco em **cron jobs** indica priorização de automação e reliability.

---

## 4. Temas Quentes da Comunidade

### Issues com mais atividade (comentários):

| # | Título | Status | Comentários | 👍 |
|---|--------|--------|-------------|-----|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | [bug] zig build fails on Android/Termux (aarch64) | OPEN | 5 | 0 |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | [bug] telegram channel stop respond after idle | OPEN | 0 | 0 |

**Análise de demandas:**

- **Issue #868** (Android/Termux): 虽然 com apenas 5 comentários, representa um problema de **compatibilidade cross-platform** significativo. Usuários em dispositivos móveis/arm64 enfrentam falhas de build com `AccessDenied` em operações de link. Este é um blocker para adoption em edge devices.
  
- **Issue #972** (Telegram idle): Reporte recente (criado 2026-06-30) sobre canais Telegram deixando de responder após períodos de inatividade. Potencial problema de **connection pooling** ou heartbeat timeout — área crítica para stability.

---

## 5. Bugs e Estabilidade

### Issues abertas (bugs):

| Severidade | # | Título | Idade | Prioridade |
|------------|---|--------|-------|------------|
| **Alta** | [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux (aarch64) | ~39 dias | Build/Cross-platform |
| **Alta** | [#972](https://github.com/nullclaw/nullclaw/issues/972) | telegram channel stop respond after idle | <1 dia | Stability/Integration |

**Análise:**

- **#868** está em aberto desde 2026-04-23 (~39 dias), com 5 comentários indicando diskusi aktif. O bug ocorre especificamente em ambientes Termux/Android com Zig 0.16.0, sugerindo necessidade de:
  - Testes em ARM64
  - Documentação de requisitos de plataforma
  - Potencialmente um workaround ou fix de build system

- **#972** é recente (mesmo dia) e sem comentários ainda. O cenário (Telegram morrendo após noite de idle) aponta para:
  - Falta de reconnection logic
  - Timeout de WebSocket/Long Polling
  - Necessidade de health check mechanism

**Métricas de estabilidade:** 2 bugs ativos, nenhum resolvido nas últimas 24h — taxa de resolução em 0% para este período.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas solicitações identificadas:

**Issue #972** (Telegram idle) contém implicitamente uma demanda por:
- **Robust reconnection** para canais de mensagens
- **Idle connection management** / heartbeat
- **Health monitoring** de integrações externas

### Sinais de roadmap baseados em PRs mergeados:

OPR #783 indica direção clara do projeto:
- ✅ **Scheduler robusto** com persistence (DB-backed)
- ✅ **Observabilidade** (run history, JSON output)
- ✅ **Security hardening** em cron jobs
- ⬜ **Possíveis próximos pasos**: UI para cron management, mais provedores, edge device support

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Build quebrado em Android/Termux** | Xiaomi Redmi Note 9, LineageOS, Termux, aarch64 | **Alta** — bloqueia uso mobile/ARM |
| **Telegram para de responder** | EC2, idle overnight | **Alta** — quebra comunicação em produção |
| **Configuração manual de cron** | Necessidade de editar JSON manualmente | **Média** — fricção de UX (já endereçada em #645) |

### Cenários de uso inferidos:
- **Edge computing**: Usuários tentando rodar NullClaw em dispositivos ARM (Termux)
- **Produção 24/7**: Deploy em cloud (EC2) com automação via Telegram
- **Automação de agentes**: Cron jobs para scheduling de tarefas de IA

### Satisfação/Insatisfação:
- **Positivo**: Sistema de cron foi significativamente melhorado (PRs #783, #643, #645) — usuários ganham controle CLI completo
- **Negativo**: Bugs de platform support (Android) e stability (Telegram) persistem sem resolução

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou em espera prolongada:

| # | Título | Criado | Dias em Aberto | Prioridade |
|---|--------|--------|----------------|------------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux | 2026-04-23 | **~39 dias** | **Alta** |

**Análise:**

A issue #868 é a **mais crítica do backlog** por:
1. **Tempo em aberto**: ~39 dias sem resolução
2. **Engajamento**: 5 comentários indicam interesse da comunidade
3. **Impacto**: Bloqueia adoption em plataformas ARM/Android (crescente market)
4. **Technical depth**: Envolve Zig build system internals e syscalls (`linkat`)

**Recomendação**: Priorizar triagem e assignment. Possíveis caminhos:
- Reproduzir em ambiente aarch64
- Investigar se é bug do Zig 0.16.0 vs código NullClaw
- Documentar workarounds se não for resolúvel brevemente
- Considerar CI/CD em ARM64 para catch futuro

---

## Métricas Resumidas do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/atualizadas | 2 |
| PRs mergeados/fechados | 4 |
| Releases | 0 |
| Bugs ativos | 2 |
| Dias sem resposta (issue mais antiga) | ~39 |
| Contributor dominante | yanggf8 (100% das contribuições) |

---

*Relatório gerado em 2026-07-01. Dados extraídos do GitHub (github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-01  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra vigoroso desenvolvimento em 2026-07-01, com todos os sete projetos mantendo atividade intensa. A tendência predominante é a **busca por estabilidade**: enquanto projetos como NanoBot, Hermes Agent e IronClaw registram volumes excepcionais de PRs (35-50 PRs atualizados/24h), nenhum emitiu releases formais, sugerindo foco em validação pré-lançamento. Os principais vetores de evolução técnica concentram-se em **confiabilidade de rotinas/automações, otimização de custos de inference via prompt caching e context reduction, e expansão de canais de comunicação** (Telegram, DingTalk, Delta Chat). O mercado enterprise emerge como impulsionador de features de segurança, multi-tenant isolation e observabilidade avançada.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados (24h) | PRs Merged/Fechados (24h) | Releases (24h) | Bugs Críticos Abertos | Saúde Geral |
|---------|-------------|------------------------|---------------------------|----------------|----------------------|-------------|
| **NullClaw** | 2 | — | 4 | 0 | 2 (Alta) | ⚠️ Estável mas fricção |
| **NanoBot** | 13 processadas | 67 | 35 | 0 | 1 (Segurança) | ✅ Muito Ativo |
| **Hermes Agent** | 50 | 50 | — | 0 | 3 (P1) | ⚠️ Regressão Crítica |
| **PicoClaw** | 6 | 8 | 3 | 1 nightly | 4 (Alta) | ⚠️ Backlog Crescente |
| **IronClaw** | 20 | 50 | 10 | 0 | 2 (P1) | ⚠️ Dívida de Testes |
| **CoPaw** | 23 | 50 | — | 0 | 2 (Alta) | ✅ Maturação v2.0 |
| **ZeroClaw** | 50 | 50 | 5 | 0 | 4 (P1) | ⚠️ Arquitetura em Evolução |

**Observações:**

- **NanoBot** apresenta o throughput mais alto de merge (35 PRs/24h), indicando equipe robusta ou automação intensa.
- **Hermes Agent** e **ZeroClaw** lideram em volume de issues (50 cada), sinalizando comunidades ativas com demandas variadas.
- **PicoClaw** é o único com release (nightly), aproximando-se de v0.3.1 estável.
- **IronClaw** ostenta E2E quebrado há >30 dias — indicador de risco de regressão acumulado.

---

## 3. Posicionamento do Projeto Principal

### Análise por Tier

#### Tier 1 — Escala Enterprise e Feature Richness
**NanoBot, Hermes Agent, IronClaw, ZeroClaw**

| Aspecto | NanoBot | Hermes Agent | IronClaw | ZeroClaw |
|---------|---------|--------------|----------|----------|
| **Diferencial Principal** | Heartbeat + A2A nativo | Desktop + Codex | Routine runner + storage | WASM-first + plugins |
| **Comunidade** | 67 PRs/24h (maior throughput) | 50 issues + segurança P1 | Storage optimization cluster | RFC governança madura |
| **Maturidade** | v1.x estável | v0.14.0 quebrada (regressão) | v0.8.x (próxima) | v0.8.3-beta |
| **Risco Principal** | DNS rebinding (segurança) | Codex `/responses` broken | E2E >30 dias | OOM WSL2 + onboarding |

#### Tier 2 — Especialização e Crescimento
**CoPaw, PicoClaw, NullClaw**

| Aspecto | CoPaw | PicoClaw | NullClaw |
|---------|-------|----------|----------|
| **Diferencial Principal** | v2.0 + reranker memory | Bedrock caching + NanoKVM | Cron jobs engine |
| **Comunidade** | 23 issues, 50 PRs | 6 issues, alta triagem necessária | 4 PRs (yanggf8 dominar 100%) |
| **Maturidade** | Pre-release v2.0.0 | v0.3.1-nightly | v0.3.x (maduro) |
| **Risco Principal** | CJK/IME input quebrado | OAuth duplo (duplicado) | Android/Termux build |

**Projeto com Maior Momentum Técnico:** **NanoBot** — pelo volume de atividade (67 PRs/24h), feature richness (OAuth multi-provedor, heartbeat isolado, A2A nativo) e velocidade de resolução (8 issues fechadas em 24h).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Confiabilidade de Automações e Schedulers

| Projeto | Abordagem |
|---------|-----------|
| **NullClaw** | Engine cron DB-backed com histórico, timezone offsets, alertas (#783) |
| **IronClaw** | Rotinas falham com lease expiration — cluster de PRs storage otimizando concorrência (#5455, #5453) |
| **CoPaw** | Per-request model override em crons (#5638), heartbeat task timeout fixo (#5539) |
| **NanoBot** | Heartbeat isolado por sessão (#4551), model override para checks (#4549) |

**Síntese:** O ecossistema reconhece automações cron/scheduler como feature central. A principal dor é **lease expiration, concurrency bottlenecks e observabilidade de jobs**.

### 4.2 Otimização de Custos de Inference

| Projeto | Abordagem |
|---------|-----------|
| **Hermes Agent** | 73% token overhead por chamada — demanda por lazy loading de 162+ skills (#4379, #55857) |
| **NanoBot** | Redução de contexto por turno (#4581), eager consolidation de memória (#4402) |
| **IronClaw** | Progressive tool disclosure — corta 25.8k tokens/turno (#5149) |
| **PicoClaw** | Prompt caching via Bedrock — 0.1× custo para cache hits (#3163) |

**Síntese:** A otimização de contexto é prioridade universal. A abordagem varia de **lazy loading** (Hermes, IronClaw) a **prompt caching nativo** (PicoClaw/Bedrock) e **eager consolidation** (NanoBot).

### 4.3 Expansão de Canais de Comunicação

| Projeto | Suporte/Demanda |
|---------|-----------------|
| **CoPaw** | DingTalk (@mentions, delivery failures), Telegram (BaseURL custom), Feishu (long messages) |
| **ZeroClaw** | Telegram (configuração quebrada #8505), WhatsApp, LINE multi-canal |
| **NullClaw** | Telegram idle connection drop (#972) — bug P1 |
| **Hermes Agent** | Slack (launchd fix), Mattermost (path traversal fix) |
| **PicoClaw** | NanoKVM integration (beta com bugs) |

**Síntese:** A fragmentação de canais reflete o público global. **Telegram** aparece em todos os projetos como canal prioritário, mas apresenta bugs de stability persistentes.

### 4.4 Segurança — Vulnerabilidades Cruzadas

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|------------|
| **NanoBot** | DNS rebinding TOCTOU em `validate_url_target` (#4611) | 🔴 Alta |
| **PicoClaw** | SSRF via ISATAP IPv6 (já corrigido #3143) | 🔴 Correção recente |
| **Hermes Agent** | Secondary profiles usam credenciais default (#55783), dynamic command detection bypass (#55472), path traversal Mattermost (#55888) | 🔴 Múltiplas P1 |
| **IronClaw** | Memories visíveis a todos no workspace (#5460) | 🔴 Privacidade |

**Síntese:** **SSRF e credential leakage** são vulnerabilidades recorrentes. A comunidade demonstra maturidade em reportar e corrigir, mas a frequência indica necessidade de hardening sistemático.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Stack Tecnológico

| Projeto | Stack Backend | Diferenciação |
|---------|---------------|---------------|
| **NullClaw** | Zig | Único projeto em Zig — portabilidade ARM/Android, porém com build quebrado em Termux |
| **ZeroClaw** | Rust → WASM | RFC para substituir React/Vite por Rust→Wasm, plugins WASM (wasi:http) |
| **CoPaw** | Python (?) | Foco em channels asiáticos (DingTalk, Feishu, WeChat), v2.0 com Runtime |
| **PicoClaw** | Go (?) | NanoKVM hardware integration, Bedrock native |
| **NanoBot** | Python (?) | OAuth multi-provedor, A2A nativo, heartbeat isolated |
| **Hermes Agent** | Node.js (?) | Desktop-first, desktop gateway, 162+ skills |
| **IronClaw** | Rust (?) | Storage otimizado (CAS patterns, WAL, concurrent writes), Routine runner |

### 5.2 Público-Alvo Inferido

| Projeto | Público Primário | Evidência |
|---------|------------------|-----------|
| **NullClaw** | Developers edge/ARM, automação pessoal | Termux/Android, cron jobs |
| **NanoBot** | Power users, multi-provedor | OAuth extensivo, heartbeat |
| **Hermes Agent** | Desenvolvedores desktop, CI/CD | Desktop gateway, Codex, 162+ skills |
| **PicoClaw** | DevOps, self-hosted, cloud-native | NanoKVM, Bedrock, SSRF hardening |
| **IronClaw** | Teams enterprise, automação corporativa | Multi-tenant, workspace isolation, routines |
| **CoPaw** | Mercados asiáticos, multi-channel | DingTalk, Feishu, WeChat |
| **ZeroClaw** | Rust enthusiasts, plugin ecosystem | WASM, per-agent config, RFC governança |

### 5.3 Diferenças Estratégicas

| Dimensão | Abordagem "Integrated Suite" (IronClaw, ZeroClaw) | Abordagem "Composable" (NanoBot, PicoClaw) |
|----------|---------------------------------------------------|---------------------------------------------|
| **Integração** | Rotinas, storage, memory nativos | Plugins, providers hot-swappable |
| **Extensibilidade** | WASM plugins (ZeroClaw), skills (IronClaw) | Provider OAuth (NanoBot), tool registry (PicoClaw) |
| **Complexidade** | Batteries included — curva íngreme | Lean — curva suave, mas fricção em features avançadas |
| **Custo** | Otimizado internamente (CAS, WAL) | Offload para provedores (Bedrock caching) |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|-----------|----------|-----------|
| **Iteração Rápida** | NanoBot, Hermes Agent, CoPaw | 35-67 PRs/24h, alta resolução de bugs |
| **Iteração Média** | IronClaw, ZeroClaw | 10-50 PRs/24h, foco em qualidade (E2E, RFCs) |
| **Iteração Estável** | NullClaw, PicoClaw | 3-4 PRs/24h, maturidade operacional |

### 6.2 Qualidade e Estabilidade

| Projeto | Dívida Técnica | Indicador |
|---------|----------------|-----------|
| **NullClaw** | Baixa | 0 releases, foco em estabilização, contributor único (yanggf8) |
| **NanoBot** | Moderada | DNS rebinding aberto, mas resolução rápida (8 issues fechadas/24h) |
| **Hermes Agent** | **Alta** | v0.14.0 quebrada, E2E falhando >30 dias |
| **PicoClaw** | Crescente | 4 bugs alta severidade sem triagem, duplicados |
| **IronClaw** | **Alta** | Nightly E2E falhando >30 dias, storage concurrent issues |
| **CoPaw** | Moderada | Pre-release v2.0, crashes resolvidos, CJK input quebrado |
| **ZeroClaw** | Moderada | OOM WSL2 (>3 meses), onboarding quebrado |

### 6.3 Governança e Processos

| Projeto | Maturidade de Governança | Sinais |
|---------|-------------------------|--------|
| **ZeroClaw** | ✅ Avançada | RFC system (7+ RFCs ativas), tracked milestones, 0.8.3 divided in scopes |
| **Hermes Agent** | ✅ Estabelecida | P1 triage, security hardening, desktop-centric |
| **IronClaw** | ⚠️ Em construção | Taxonomy de falhas diário (#5437), capability policies |
| **NanoBot** | ⚠️ Em construção | Feature tracking via PRs, security alerts |
| **NullClaw** | ⚠️ Simples | Contributor único, triagem reativa |

---

## 7. Sinais de Tendência

### 7.1 Enterprise Readiness
A convergência de **multi-tenant isolation, workspace privacy, e RBAC** (IronClaw #5460, #5439; ZeroClaw #8226) indica que o ecossistema está amadurecendo para adoption enterprise. A demanda por **GitHub Enterprise support** (Hermes Agent #4220) e **OAuth multi-provedor** (NanoBot #4604) reforça esta trajetória.

### 7.2 Otimização de Custos como Imperativo
O overhead de 73% em tokens (Hermes Agent #4379) e as múltiplas abordagens de redução (lazy loading, caching, progressive disclosure) sinalizam que **eficiência de inference** será decisivo para adoption em produção. Projetos que não endereçarem custo enfrentarão resistência de CFOs e DevOps.

### 7.3 Agent-to-Agent (A2A) e Multi-Agent
A implementação de **A2A nativo** (NanoBot #4571) e **delegação por fase** (Hermes Agent #55885) indicam que arquiteturas multi-agente estão saindo do experimental. A habilidade de agents coordenarem entre si será feature table-stakes.

### 7.4 Cross-Platform e Edge Computing
NullClaw (Zig), PicoClaw (NanoKVM hardware), e Hermes Agent (Windows, WSL, macOS) demonstram que **suporte cross-platform** é diferenciador competitivo. O bug de Android/Termux (#868) que persiste >39 dias revela GAP em ARM/edge.

### 7.5 Channels como Filtro Geográfico
A predominância de **DingTalk, Feishu, WeChat** em CoPaw versus **Telegram, Slack, Mattermost** em outros projetos sugere que **ecossistema de canais** é o principal filtro de público-alvo geográfico. Mercados asiáticos têm demanda reprimida por localization e integrations específicas.

### 7.6 Security como Prioridade Crescente
A frequência de **vulnerabilidades SSRF, credential leakage e path traversal** indica que o ritmo de desenvolvimento está superando a capacidade de hardening. A tendência é adoção de **security-first design patterns** (e.g., validate_url_target pinning, WASM sandboxing) como default.

---

## Recomendações para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Adoção Enterprise** | Priorizar **IronClaw** ou **ZeroClaw** — isolamento multi

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-01

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** em 2026-07-01, com 67 PRs atualizados e 13 issues processadas nas últimas 24h. A equipe mantém um ritmo intenso de desenvolvimento, com 2 PRs merged/fechados e nenhum release formal publicado. O foco atual recai sobre melhorias na infraestrutura de agentes (confiabilidade, verificação, execução), expansão de funcionalidades de heartbeat e memória, além de correções de segurança. A comunidade demonstra engajamento significativo com demandas por OAuth de provedores alternativos (Anthropic), suporte a GitHub Enterprise e otimização de custos via redução de contexto.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto não publicou novas versões. O último release estável continua em vigor, e a equipe concentra-se em validar PRs pendentes antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (2)

| # | Título | Impacto |
|---|--------|---------|
| [#4609](https://github.com/HKUDS/nanobot/pull/4609) | `fix(webui): keep idle compaction out of session recency` | Resolve problema de ordenação de sessões no WebUI; impede que manutenção ociosa refresque `updated_at` desnecessariamente |
| [#4573](https://github.com/HKUDS/nanobot/pull/4573) | `fix(cli): allow oauth login to be/set main provider` | Melhora experiência de setup ao permitir que OAuth seja definido como provider principal diretamente no `provider login` |

### PRs Abertos com Maior Atividade

| # | Título | Prioridade | Destaque |
|---|--------|-----------|----------|
| [#4610](https://github.com/HKUDS/nanobot/pull/4610) | `refactor(tools): use structured tool error results` | p2 | Introduz `ToolResult` como contrato estruturado para falhas de ferramentas |
| [#4534](https://github.com/HKUDS/nanobot/pull/4534) | `feat(agent): improve reliability, verification, and exec services` | p1 | Camada de confiabilidade geral para o loop de agentes, integração Codex e execução local |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) | `feat(subagent): native A2A peer delegation` | p2 | Implementa delegação Agent-to-Agent nativa com guarda de profundidade |
| [#4581](https://github.com/HKUDS/nanobot/pull/4581) | `optimization: reducing context usage and thus reducing costs` | p2 | Reduz tokens de entrada por turno, diminuindo custos e permitindo modelos de menor contexto |
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) | `feat(memory): add opt-in eager consolidation` | — | Consolidação eager de memória em `memory/history.jsonl` após respostas |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#4418](https://github.com/HKUDS/nanobot/issues/4418) | Heartbeat tasks devem entregar resultados ao canal onde a tarefa foi adicionada | 4 | 0 | Feature Request |
| [#4513](https://github.com/HKUDS/nanobot/issues/4513) | Bug com nssm + `/restart` no Windows como serviço | 2 | 0 | Bug |
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Anthropic OAuth | 2 | 0 | Feature Request |
| [#1023](https://github.com/HKUDS/nanobot/issues/1023) | Provider login tokens não persistem + config refresh dropa providers desconhecidos | 1 | 2 | Bug |

### Análise das Demandas

1. **OAuth multi-provedor (#4604)**: Usuários solicitam suporte nativo a Anthropic OAuth, indicando crescimento da base que deseja modelos Claude.
2. **Heartbeat direcionado (#4418)**: Problema de UX onde tarefas heartbeat enviam resultados ao canal mais recente ao invés do canal de origem.
3. **Persistência de tokens OAuth (#1023)**: Bug crítico que impede fluxo OAuth completo em ambientes containerizados (Docker/Podman).

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (4)

| # | Severidade | Descrição | Status |
|---|-----------|-----------|--------|
| [#4611](https://github.com/HKUDS/nanobot/issues/4611) | **🔴 Alta (Segurança)** | DNS rebinding TOCTOU em `validate_url_target` — IP resolvedor não é fixado após validação | Aberta |
| [#4513](https://github.com/HKUDS/nanobot/issues/4513) | 🟡 Média | `/restart` causa loop infinito ou estado inconsistente quando nanobot roda como serviço Windows via nssm | Fechada |
| [#4599](https://github.com/HKUDS/nanobot/issues/4599) | 🟡 Média | Script de instalação Linux crasha ao alcançar TUI | Fechada |
| [#4595](https://github.com/HKUDS/nanobot/issues/4595) | 🟡 Média | `apply_final_call_ids` sobrescreve IDs corretos de `tool_call`, causando "session poisoning" permanente | Fechada |

### ⚠️ Atenção: Vulnerabilidade de Segurança

**[#4611](https://github.com/HKUDS/nanobot/issues/4611) — DNS rebinding TOCTOU em SSRF validation**

O método `validate_url_target` em `nanobot/security/network.py` valida IPs após resolver DNS, mas não "pina" o IP resolvedor. Isso permite ataque DNS rebinding onde um domínio público resolve para IP privado entre verificação e uso real.

**Recomendação**: Priorizar correção antes do próximo release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Relevância Estratégica |
|---|--------|------------------------|
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Anthropic OAuth | Expansão de provedores suportados |
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Suporte OpenAI Response API | Conectividade alternativa com ChatGPT |
| [#4605](https://github.com/HKUDS/nanobot/issues/4605) | Acionar ações de agente via script externo | Integrações e automações |
| [#4220](https://github.com/HKUDS/nanobot/issues/4220) | GitHub Copilot for Business / GitHub Enterprise | Suporte enterprise (Closed) |

### PRs de Feature em Desenvolvimento

| # | Feature | Escopo |
|---|---------|--------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | Heartbeat model override | Permite modelo mais barato para checks de heartbeat |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Heartbeat isolated_session | Heartbeat pode usar sessão isolada ao invés de compartilhar |
| [#4555](https://github.com/HKUDS/nanobot/pull/4555) | Per-session model preset | Cada conversa mantém sua própria seleção de modelo |
| [#4437](https://github.com/HKUDS/nanobot/pull/4437) | Heartbeat trigger command | CLI `nanobot heartbeat trigger` com dry-run e opções |

### Sinais de Roadmap

- **Consolidação de memória avançada**: Feature opt-in eager consolidation (#4402) indica direção para gestão automatizada de histórico.
- **Redução de custos**: PR #4581 focado em otimizar contexto demonstra foco em eficiência operacional.
- **A2A nativo**: Delegação Agent-to-Agent (#4571) sinaliza ambição de arquiteturas multi-agente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Configuração de providers**: Usuários relatam confusão ao configurar OAuth-only providers durante setup (#4573 — já corrigido).
2. **Persistência em container**: Tokens OAuth não sobrevivem a reinicializações de container Docker/Podman (#1023).
3. **Ambientes virtuais**: Desejo por suporte nativo a conda/venv para subprocessos (#4580).
4. **Windows como serviço**: Instabilidade ao rodar nanobot via nssm no Windows (#4513).
5. **Script de instalação**: Install script Linux apresenta crash inesperado na TUI (#4599).

### Cenários de Uso Emergentes

- **Agentes Gmail**: Usuário configurou skill Gmail via gws CLI para classificar emails por importância (#4605).
- **Enterprise GitHub**: Demanda crescente por suporte a GitHub Enterprise Server e Copilot Business (#4220).
- **Multi-canal**: Necessidade de isolamento de sessões heartbeat por canal (#4551).

### Satisfação Geral

Atividade intensa (67 PRs/24h) e resolução rápida de bugs indicam saúde ativa do projeto. No entanto, a vulnerabilidade de segurança DNS rebinding (#4611) requer atenção imediata para manter confiança da comunidade enterprise.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Título | Criado | Status | Urgência |
|---|--------|--------|--------|----------|
| [#1023](https://github.com/HKUDS/nanobot/issues/1023) | Provider login tokens not persisted | 2026-02-22 | Fechada | ✅ Resolvida |
| [#4611](https://github.com/HKUDS/nanobot/issues/4611) | DNS rebinding TOCTOU security | 2026-06-30 | **Aberta, 0 comentários** | 🔴 **Alta** |
| [#4605](https://github.com/HKUDS/nanobot/issues/4605) | External script trigger | 2026-06-30 | **Aberta, 0 comentários** | 🟡 Média |
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | OpenAI Response API | 2026-06-30 | **Aberta, 0 comentários** | 🟡 Média |

### PRs Long-Running Pendentes de Review

| # | Título | Criado | Age |
|---|--------|--------|-----|
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) | `feat(memory): add opt-in eager consolidation` | 2026-06-18 | 13 dias |
| [#4373](https://github.com/HKUDS/nanobot/pull/4373) | `fix(memory): preserve delivery context` | 2026-06-16 | 15 dias |
| [#4534](https://github.com/HKUDS/nanobot/pull/4534) | `feat(agent): improve reliability` | 2026-06-26 | 5 dias |

---

## Métricas de Saúde do Projeto (2026-07-01)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 5 | 🟢 Normal |
| Issues fechadas (24h) | 8 | 🟢 Bom |
| PRs abertos (24h) | 32 | 🟢 Ativo |
| PRs merged/fechados (24h) | 35 | 🟢 Muito ativo |
| Releases (24h) | 0 | 🟡 Sem release formal |
| Bugs de severidade alta/aberta | 1 (segurança) | 🔴 Requer ação |
| Issues sem resposta | 3 | 🟡 Monitorar |

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-07-01.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-07-01

---

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando um projeto em pleno ritmo de desenvolvimento. Não há releases novas registradas, sugerindo foco em estabilização de código antes do próximo tag. A comunidade reportou uma regressão P1 crítica relacionada à v0.14.0 quebrada no Codex (`/responses` endpoint exige `stream: true`), além de múltiplos bugs de segurança e estabilidade sendo tratados via PRs simultâneos. Omix de issues entre bugs, features e segurança demonstra um ecossistema maduro com demandas variadas — desde performance (73% overhead de tokens) até experiência de desktop (locale RTL, duplicate lanes).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novos版本 neste período. Isso contrasta com a alta atividade de PRs, sugerindo que a equipe aguarda a consolidação de múltiplas correções (especialmente as de segurança P1 e bugs P2) antes de cortar uma nova versão estável.

---

## 3. Progresso do Projeto

PRs merged/fechados hoje que trazem avanço significativo:

| PR | Título | Impacto |
|---|---|---|
| [#55748](https://github.com/NousResearch/hermes-agent/pull/55748) | `feat(launchd): use gateway-wrapper.sh` | Corrige desconexões intermitentes do Slack/mensagens em macOS com launchd |
| [#18129](https://github.com/NousResearch/hermes-agent/pull/18129) | `fix(agent): make title_generation.timeout configurable` | Permite ajuste de timeout para title generation em LLMs lentos |
| [#54733](https://github.com/NousResearch/hermes-agent/pull/54733) | `fix(moa): stop forwarding base_url from slot runtime to call_llm` | Corrige bypass de `api_mode` detection em provedores mistos como `opencode-go` |
| [#26517](https://github.com/NousResearch/hermes-agent/pull/26517) | `fix(agent): honor fallback provider extra body` | Garante que `fallback_providers[].extra_body` é propagado corretamente |

PRs abertos com potencial de merge iminente (revisão técnica alta):

| PR | Título | Prioridade |
|---|---|---|
| [#55867](https://github.com/NousResearch/hermes-agent/pull/55867) | `fix(profile): prevent profile context loss in desktop + multiplexed gateway` | P2 |
| [#55472](https://github.com/NousResearch/hermes-agent/pull/55472) | `[codex] fix(approval): harden dynamic command-name detection` | P1 — segurança |
| [#55883](https://github.com/NousResearch/hermes-agent/pull/55883) | `fix(browser): redact CDP URL token in logs` | P1 — segurança |
| [#55888](https://github.com/NousResearch/hermes-agent/pull/55888) | `fix(mattermost): guard file-download URL against path-traversal` | P2 — segurança |

---

## 4. Temas Quentes da Comunidade

Issues e PRs com maior engajamento (comentários + reações):

### 🔥 Top por discussão técnica
1. **[#4379](https://github.com/NousResearch/hermes-agent/issues/4379)** — Token overhead analysis: 73% of each API call is fixed overhead (~13.9K tokens) — **17 comentários** (P2)
   - *Análise:* Monitoramento revela que a maioria do custo de API é overhead fixo. Usuário desenvolveu dashboard de profiling. Demanda por otimização de contexto e deduplicação de sessão.

2. **[#5528](https://github.com/NousResearch/hermes-agent/issues/5528)** — Configurable approval-locked command patterns — **11 👍** (P3)
   - *Análise:* Forte apoio da comunidade para tornar padrões de comandos perigosos configuráveis ao invés de hard-coded em `tools/approval.py`. Feature de segurança/controle importante.

3. **[#16702](https://github.com/NousResearch/hermes-agent/issues/16702)** — Auto-start dashboard with gateway systemd service — **9 👍** (P3)
   - *Análise:* Demanda operacional recorrente em ambientes WSL/boot cycles. Impacta DX de produção.

4. **[#10359](https://github.com/NousResearch/hermes-agent/issues/10359)** — Native Windows support — **8 👍** (P3)
   - *Análise:* Usuário manifestou interesse em contribuir PR. Issue duplicada indica demanda recorrente.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (ação imediata recomendada)

| Issue | Título | Link |
|---|---|---|
| #33439 | v0.14.0 broken on codex `/responses` (stream:true required) | [#33439](https://github.com/NousResearch/hermes-agent/issues/33439) |
| #55647 | `background-review` skill patches hallucinate content (read-before-write invariant violado) | [#55647](https://github.com/NousResearch/hermes-agent/issues/55647) |
| #55783 | Security: secondary profiles use default profile's credentials (multiplexed gateway) | [#55783](https://github.com/NousResearch/hermes-agent/issues/55783) |

### 🟠 P2 — Altos (afetam fluxo de trabalho)

| Issue | Título | Link |
|---|---|---|
| #4379 | 73% token overhead por chamada | [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) |
| #33961 | `/new`, `/clear`, `/reset` congelam terminal | [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) |
| #55376 | Corrupção de strings alfanuméricas longas (JWT, tokens) | [#55376](https://github.com/NousResearch/hermes-agent/issues/55376) |
| #55815 | Custom Cline provider appends `/models` incorretamente | [#55815](https://github.com/NousResearch/hermes-agent/issues/55815) |
| #49567 | Docker: HERMES_DASHBOARD=1 binding 0.0.0.0 rejeitado pelo auth gate | [#49567](https://github.com/NousResearch/hermes-agent/issues/49567) |
| #9318 | Auxiliary client cai para "no-key-required" com base_url custom | [#9318](https://github.com/NousResearch/hermes-agent/issues/9318) |
| #55125 | Native Gemini: parallel tool calls violam alternation check → 400 | [#55125](https://github.com/NousResearch/hermes-agent/issues/55125) |
| #49008 | openai-codex image gen: `tool_choice` rejeitado (HTTP 400) | [#49008](https://github.com/NousResearch/hermes-agent/issues/49008) |

### 🟡 P3 — Moderados (impactam UX)

| Issue | Título | Link |
|---|---|---|
| #38855 | Desktop Working Directory ignorado após localStorage stale | [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) |
| #55790 | Stale credential pool: providers removidos persistem no model picker | [#55790](https://github.com/NousResearch/hermes-agent/issues/55790) |
| #55856 | Model selector submenu drifts during scroll | [#55856](https://github.com/NousResearch/hermes-agent/issues/55856) |
| #53329 | Non-git folders mostram lanes duplicadas (pasta + "main") | [#53329](https://github.com/NousResearch/hermes-agent/issues/53329) |
| #55578 | Desktop async delegation revive old session inconsistently | [#55578](https://github.com/NousResearch/hermes-agent/issues/55578) |
| #53181 | Poor Italian output despite Italian persona/config (Ollama) | [#53181](https://github.com/NousResearch/hermes-agent/issues/53181) |
| #49663 | Desktop remote mode timeout (scans huge ~/.local.bin) | [#49663](https://github.com/NousResearch/hermes-agent/issues/49663) |

---

## 6. Pedidos de Features e Sinais de Roadmap

Demandas com sinais claros de priorização por upvote/reação:

| Feature | 👍 | Link | Observação |
|---|---|---|---|
| Configurable approval-locked command patterns | 11 | [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | Segurança configurável para ações perigosas |
| Auto-start dashboard with gateway systemd service | 9 | [#16702](https://github.com/NousResearch/hermes-agent/issues/16702) | DX operacional |
| Native Windows support (contribuidor disposto) | 8 | [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) | Multi-plataforma |
| Auto-discover models from custom provider endpoints | 5 | [#10011](https://github.com/NousResearch/hermes-agent/issues/10011) | Usabilidade em self-hosted |
| Configurable bounded auto-continue when max iterations reached | 1 | [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | Autonomia agent |
| openai-codex image provider should support image_edit | 1 | [#21661](https://github.com/NousResearch/hermes-agent/issues/21661) | Workflows de edição |
| Image generation tool drops source images | 0 | [#36737](https://github.com/NousResearch/hermes-agent/issues/36737) | Suporte a photo restoration |

**Novas features do dia:**
- **Lazy Skills Loading** ([#55857](https://github.com/NousResearch/hermes-agent/issues/55857)) — carregamento sob demanda de 162+ skills (~3-5k tokens/turn economizados)
- **Runtime-enforced capability contracts** ([#55811](https://github.com/NousResearch/hermes-agent/issues/55811)) — consolidar regras de segurança espalhadas
- **Phase-based delegation routing** ([#55885](https://github.com/NousResearch/hermes-agent/pull/55885)) — routing semântico por fase em subagentes
- **Arabic localization + RTL** ([#45619](https://github.com/NousResearch/hermes-agent/pull/45619)) — expansão de mercado
- **Bitwarden env alias mapping** ([#55886](https://github.com/NousResearch/hermes-agent/pull/55886)) — gestão de secrets multi-profile

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas:

1. **Operacional/Multi-plataforma:**
   - Instabilidade em macOS com launchd (corrigida em [#55748](https://github.com/NousResearch/hermes-agent/pull/55748))
   - WSL hibernation boot cycles matam dashboard (#[16702](https://github.com/NousResearch/hermes-agent/issues/16702))
   - Desktop remote mode timeout em setups com `~/.local/bin` enorme (#[49663](https://github.com/NousResearch/hermes-agent/issues/49663))

2. **Performance:**
   - 73% de overhead de tokens por chamada (#[4379](https://github.com/NousResearch/hermes-agent/issues/4379))
   - Lazy loading de skills necessário para sessões longas (#[55857](https://github.com/NousResearch/hermes-agent/issues/55857))

3. **Segurança:**
   - Credenciais de perfil secundário vazando para padrão (#[55783](https://github.com/NousResearch/hermes-agent/issues/55783))
   - Dynamic command detection bypass (#[55472](https://github.com/NousResearch/hermes-agent/pull/55472))
   - Path traversal em Mattermost (#[55888](https://github.com/NousResearch/hermes-agent/pull/55888))

4. **UX Desktop:**
   - Model picker drifts during scroll (#[55856](https://github.com/NousResearch/hermes-agent/issues/55856))
   - Providers removidos persistem no picker (#[55790](https://github.com/NousResearch/hermes-agent/issues/55790))
   - Duplicate lanes em projetos non-git (#[53329](https://github.com/NousResearch/hermes-agent/issues/53329))

5. **Integrações:**
   - v0.14.0 quebrada contra Codex `/responses` (#[33439](https://github.com/NousResearch/hermes-agent/issues/33439))
   - Gemini parallel tool calls violam API contract (#[55125](https://github.com/NousResearch/hermes-agent/issues/55125))
   - Cline provider URL mal concatenado (#[55815](https://github.com/NousResearch/hermes-agent/issues/55815))

### Cenários de uso emergentes:
- **Self-hosted/OpenAI-compatible gateways** — demanda por auto-discovery de modelos (#[10011](https://github.com/NousResearch/hermes-agent/issues/10011))
- **Multi-profile com Telegram/WhatsApp/Cron** — profiling real em produção (#[4379](https://github.com/NousResearch/hermes-agent/issues/4379))
- **Agent autonomy** — bounded auto-continue para sessões longas (#[16004](https://github.com/NousResearch/hermes-agent/issues/16004))

---

## 8. Backlog que Merece Atenção

Issues importantes sem atividade reciente ou sem resposta significativa:

| Issue | Título | Idade | Link |
|---|---|---|---|
| #10011 | Auto-discover models from custom endpoints | ~75 dias | [#10011](https://github.com/NousResearch/hermes-agent/issues/10011) |
| #21661 | openai-codex image provider should support image_edit | ~55 dias | [#21661](https://github.com/NousResearch/hermes-agent/issues/21661) |
| #16004 | Configurable bounded auto-continue | ~65 dias | [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) |
| #36737 | Image gen tool drops source images | ~30 dias | [#36737](https://github.com/NousResearch/hermes-agent/issues/36737) |
| #49663 | Desktop remote mode timeout | ~11 dias | [#49663](https://github.com/NousResearch/hermes-agent/issues/49663) |
| #55857 | Lazy Skills Loading | 1 dia | [#55857](https://github.com/NousResearch/hermes-agent/issues/55857) |

**Recomendação:** Issues com >30 dias e poucos comentários devem receber triagem da equipe core para evitar signals perdidos da comunidade. A feature de auto-discover modelos (#10011) tem 5 👍 e potencialmente impacta todos os usuários de provedores custom.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues ativas (24h) | 45 | 🟢 Alta |
| PRs abertos (24h) | 36 | �

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-01

---

## 1. Panorama do dia

O projeto PicoClaw mantém uma atividade robusta em 30 de junho de 2026: 6 issues atualizadas (5 abertas, 1 fechada) e 8 PRs movimentados (5 abertos, 3 fechados/merged). A atividade concentra-se na linha nightly **v0.3.1-nightly.20260630** e em correções de estabilidade — em particular, um PR de mensagens de erro amigáveis para autenticação foi merged, enquanto ao menos 4 bugs de compatibilidade com provedores e plataformas (NanoKVM, Volcengine, Codex/OAuth) aguardam resolução. O release nightly sinaliza que a equipe está próxima de uma nova versão estável, possivelmente a **v0.3.1**.

---

## 2. Lançamentos

| Release | Data | Tipo |
|---------|------|------|
| `nightly` — v0.3.1-nightly.20260630.52320f48 | 2026-06-30 | Build automatizado (base: main) |

### Detalhamento

- **Release:** `nightly` — v0.3.1-nightly.20260630.52320f48
- **Base:** Branch `main`, commit `52320f48`
- **Changelog completo:** https://github.com/sipeed/picoclaw/compare/v0.3.1...main
- **Natureza:** Build automatizado diário. Como toda nightly, **não é recomendado para produção** — pode conter regressões ou funcionalidades incompletas.
- **Mudanças incluídas (via commits na diff):** Com base nos PRs fechados recentemente, é provável que inclua: melhorias no tratamento de erros de autenticação (#3198), correção do bypass SSRF via ISATAP IPv6 (#3143), e ajustes no registry de ferramentas (#3131).

### Observações de migração

- Não há release estável nova (apenas nightly). Usuários em `v0.2.8` e `v0.2.9` devem aguardar a estável `v0.3.1` se precisarem das correções merged (#3198, #3143, #3131).
- **Breaking changes prováveis:** O PR #3198 altera o formato de erros HTTP de provedores — clientes que tratam erros via parsing de strings могут ter регрессии se não consumirem a nova estrutura `common.HTTPError`.

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged nas últimas 24h:

### PR #3198 — `fix(providers): surface friendly auth error messages` ✅ MERGED
**Autor:** lc6464 | **Data:** 2026-06-30

Melhora significativamente a experiência do desenvolvedor ao expor mensagens de erro de autenticação mais claras quando chaves de API, tokens ou permissões de provedor falham. O PR introduz uma estrutura `common.HTTPError` para respostas HTTP não-OK de provedores, mantendo o texto legível para o usuário final. Este é um dos PRs mais impactantes em termos de DX e reduz significativamente o tempo de debug para usuários configurando provedores customizados.

🔗 https://github.com/sipeed/picoclaw/pull/3198

---

### PR #3143 — `fix(web): block private IPv4 embeds in ISATAP literals` ✅ MERGED
**Autor:** lc6464 | **Data:** 2026-06-30

Correção de segurança crítica de **SSRF (Server-Side Request Forgery)** conforme issue #3074. O guarda `web_fetch` que evita que o PicoClaw faça requisições para IPs privados/loopback era burlável via literais IPv6 ISATAP que embutem endereços IPv4 privados. O PR adiciona reconhecimento dos dois formas comuns de IID ISATAP (`00:00:5e:fe` e `02:00:5e:fe`). Include testes de regressão.

🔗 https://github.com/sipeed/picoclaw/pull/3143

---

### PR #3131 — `fix(registry): add ok checks for tool schema type assertions` ✅ CLOSED (stale)
**Autor:** chengzhichao-xydt | **Data:** 2026-06-30 (fechado após período stale)

Adiciona verificações `ok` explícitas em três type assertions em `pkg/tools/registry.go` ao extrair `name`, `description` e `parameters` de mapas de schema de ferramentas. Quando o valor não é do tipo esperado, o código agora cai em valores zero (string vazia / nil map) em vez de panicar. Este padrão já existe em outras partes do codebase — o PR traz consistência e robustez ao registry de ferramentas.

🔗 https://github.com/sipeed/picoclaw/pull/3131

---

## 4. Temas Quentes da Comunidade

### Issue #3153 — "Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text"
🔗 https://github.com/sipeed/picoclaw/issues/3153

**Atividade:** 2 comentários | **Status:** ABERTA | **Autor:** ms8great | **Criada:** 2026-06-22

Esta é a issue com maior interação da lista. O problema: ao usar `doubao-seed-2.0-pro` com PicoClaw v0.2.8 e Volcengine Coding Plan, chamadas de ferramenta são ocasionalmente retornadas ao usuário como texto raw XML `<seed:tool_call>` em vez de serem executadas. A severidade é alta — causa confusão para o usuário final e pode resultar em comportamento inesperado do agente. A comunidade demonstrou interesse implícito (a issue não tem thumbs-up, mas foi atualizada recentemente). **Este é um bug de parsing de output de provedor específico e pode indicar necessidade de handler dedicado para o formato Volcengine.**

---

### Issue #3159 — "经常重复任务" (Frequent repeated tasks)
🔗 https://github.com/sipeed/picoclaw/issues/3159

**Atividade:** 1 comentário | **Status:** ABERTA (stale) | **Autor:** oKatTjC | **Criada:** 2026-06-23

Reportado no contexto: PicoClaw v0.2.9 + `deepseek-v4-flash-free` (opencode zen) no Debian 13 via Web UI. O agente repete tarefas — ao pedir "notícias dos EUA" e depois "notícias da França", o agente refaz a tarefa americana antes de executar a francesa. **Este é um problema de gerenciamento de contexto/memória conversacional**, potencialmente complexo de diagnosticar. A falta de resposta (stale) e a baixa interação (1 comentário) sugerem que precisa de triagem da equipe.

---

## 5. Bugs e Estabilidade

### 🔴 Alta severidade — Impacto funcional

| # | Bug | Plataforma/Modelo | Status |
|---|-----|-------------------|--------|
| #3153 | Tool calls retornadas como texto raw `<seed:tool_call>` | Volcengine `doubao-seed-2.0-pro` | ABERTA |
| #3195 | OpenAI GPT não funciona no NanoKVM com config padrão | NanoKVM + GPT-5.4 | ABERTA |
| #3197 | Login OAuth Codex e antygravity não funciona | PicoClaw v0.2.9 | ABERTA |
| #3196 | Login OAuth Codex e antygravity não funciona (dup) | PicoClaw v0.2.9 | ABERTA |

**Análise:** 4 bugs de severidade alta estão abertos. O par #3196/#3197 parece duplicado — indica que o problema de OAuth afeta dois provedores simultaneamente e pode ter maior impacto na base de usuários. O bug #3195 no NanoKVM (hardware de KVM over IP da Sipeed) é relevante pois representa uma integração oficial nova que já apresenta falhas.

🔗 https://github.com/sipeed/picoclaw/issues/3195 | 🔗 https://github.com/sipeed/picoclaw/issues/3197

### 🟡 Média severidade — Configuração e conectividade

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| #3159 | Tarefas repetidas com deepseek-v4-flash-free | Gestão de contexto quebrada | ABERTA (stale) |
| #3199 | Provedor custom não conecta em `http://127.0.0.1:16001` | Endpoint local OpenAI-compatible | **FECHADA** |

**Nota:** #3199 foi fechada (provavelmente como "não é bug" ou resolução documentada), mas o cenário de endpoint local é comum —，值得 verificar se a documentação foi atualizada para esclarecer limitações de conectividade local.

🔗 https://github.com/sipeed/picoclaw/issues/3159 | 🔗 https://github.com/sipeed/picoclaw/issues/3199

### Estabilidade geral

O merge de #3143 (segurança SSRF) e #3198 (erros amigáveis) é positivo. No entanto, **4 bugs de severidade alta não triados representam risco**, especialmente o par duplicado de OAuth (#3196/#3197) e o bug do NanoKVM (#3195). O bug de tasks repetidas (#3159) está há 7 dias sem resposta — risco de se tornar crônico.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs de Feature em aberto (por relevância)

| # | Feature | Autor | Tipo | Relevância |
|---|---------|-------|------|------------|
| #3163 | **Prompt caching via cache points no AWS Bedrock Converse** | loafoe | ✨ Feature | ⭐⭐⭐ Alta — reduz custo de inferência em ~90% para conteúdo em cache |
| #3118 | **Remote Pico WebSocket mode** | jp39 | ✨ Feature | ⭐⭐ Alta — habilita agente PicoClaw conectando a backends remotos |
| #3063 | **Deltachat Gateway** | trufae | ✨ Feature + 📖 Docs | ⭐⭐ Média — adiciona integração com Delta Chat (e-mail como mensageria) |
| #3157 | **Android ADB remote operations tool** | danmobot | ✨ Feature | ⭐⭐ Média — primitivas ADB fixed (lista dispositivos, screenshot, tap, swipe, input, wake) |

🔗 https://github.com/sipeed/picoclaw/pull/3163 | 🔗 https://github.com/sipeed/picoclaw/pull/3118 | 🔗 https://github.com/sipeed/picoclaw/pull/3063 | 🔗 https://github.com/sipeed/picoclaw/pull/3157

### PR #3163 em destaque — Bedrock Prompt Caching

O PR de `loafoe` implementa suporte ao **prompt caching** do AWS Bedrock Converse API, que permite marcar cache points em `system`, `tools` e `messages`. Conteúdo até o cache point é cobrado a ~0.1× do custo de input normal. Esta é uma otimização de custo significativa para workflows com ferramentas pesadas em contexto — **pode ser um diferenciador competitivo** contra outros agentes que não suportam caching nativo do Bedrock.

### Sinais de roadmap implícitos

1. **Suporte a plataformas de hardware** — NanoKVM (#3195) é oficialmente suportado; bugs indicam prioridade.
2. **Melhoria de DX em erros** — #3198 já merged confirma foco em developer experience.
3. **Segurança em web fetch** — #3143 merged mostra atenção contínua a SSRF.
4. **Multi-modalidade e remote agents** — PRs #3118 (remote WebSocket) e #3157 (ADB) indicam expansão de casos de uso além do terminal local.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| **Falhas de autenticação sem mensagem clara** | Relatada implicitamente | Alta — bloqueia uso | Issue #3199, PR #3198 (merged como resposta) |
| **Bug de tool calls raw (Volcengine)** | 1 usuário (mas pode afetar muitos) | Alta | #3153 — "tool calls are sometimes returned as raw `<seed:tool_call>` text" |
| **Repetição de tarefas pelo agente** | 1 usuário | Média-Alta | #3159 — workflow multi-step gera redundância |
| **OAuth login quebrado** | 2 issues duplicadas | Alta | #3196 + #3197 — impede acesso a provedores populares |
| **NanoKVM + GPT não funciona** | 1 usuário | Alta | #3195 — nova integração oficial com problemas |

### Cenários de uso emergentes

- **Agente multi-step com LLMs gratuitos/free-tier** — deepseek-v4-flash-free é usado ativamente via opencode zen.
- **KVM over IP (NanoKVM)** — PicoClaw está sendo posicionado como cérebro de agentes em hardware de gerenciamento de servidores remoto.
- **Delta Chat** — integração via gateway #3063 sugere interesse em mensageria descentralizada/privada.
- **Android debugging remoto** — feature #3157 atende desenvolvedores mobile que usam PicoClaw como agente de automação.

### Satisfação geral

**Neutro a levemente negativo.** A atividade de issues é alta (6 atualizadas), mas 4 bugs de severidade alta sem triagem em 24-48h, incluindo пар (duplicados) de OAuth login quebrado, indica que a fila de backlog está crescendo mais rápido do que a capacidade de triagem. O PR #3198 (erros amigáveis) é uma resposta direta a queixas recorrentes de configuração de provedores — o que sugere que esse é um ponto de dor histórico.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias (risco de stale/ghost)

| # | Título | Criada | Atualizada | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| #3159 | 经常重复任务 (Tarefas repetidas) | 2026-06-23 | 2026-06-30 | 1 | 🔴 Alta — bug funcional |
| #3153 | Volcengine Doubao Seed tool call leak | 2026-06-22 | 2026-06-30 | 2 | 🔴 Alta — output mal formatado |
| #3157 | Android ADB remote operations tool | 2026-06-22 | 2026-06-30 | — | 🟡 Média — PR pode precisar de feedback |
| #3063 | Deltachat Gateway | 2026-06-08 | 2026-06-30 | — | 🟡 Média — feature antiga em review |
| #3118 | Remote Pico WebSocket mode | 2026-06-12 | 2026-06-30 | — | 🟡 Média — feature significativa |
| #3115 | Inline data URL media extraction fix | 2026-06-12 | 2026-06-30 | — | 🟡 Média — bug de corrupção de sessão |
| #3163 | Bedrock prompt caching | 2026-06-23 | 2026-06-29 | — | 🟢 Feature — review pendente |

### Ações recomendadas por prioridade

1. **🔴 Triar imediatamente** — #3153 (tool call leak) e #3159 (tarefas repetidas) precisam de resposta para evitar que virem stale e se percam. Ambos são bugs funcionais reais.
2. **🔴 Investigar duplicados** — #3196 e #3197 são duplicados do mesmo problema OAuth. Consolidar em uma única issue e investigar root cause.
3. **🟡 Review #3163** — Prompt caching no Bedrock tem alto valor para usuários enterprise. PR existente há 7 dias sem comments — priorizar review.
4. **🟡 Review #3118** — Remote WebSocket mode é feature grande (~7 dias em review). Fornecer feedback ou pedir esclarecimentos para evitar stale.
5. **🟢 Atualizar milestone** — A release nightly `v0.3.1` está em construção. Garantir que bugs críticos (#3153, #3195, #3196/#3197) sejam marcados no milestone da próxima versão.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 6 | ✅ Normal — fluxo consistente |
| PRs movimentados (24h) | 8 | ✅ Alto — boa cadência de desenvolvimento |
| PRs merged/fechados (24h) | 3 | ✅ Bom — 2 merges de alta qualidade (SSRF + auth UX) |
| Bugs severidade alta abertos | 4 | ⚠️ Atenção — backlog de triagem crescendo |
| Features em review | 4+ | ✅ Saudável — pipeline diversificado |
| Release activity | 1 nightly | ✅ Em progresso — v0.3.1 a caminho |
| Segurança (PRs) | 1 merged

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-01

---

## 1. Panorama do Dia

O projeto IronClaw manteve alta atividade em 30/06/2026, com **50 PRs** e **20 issues** atualizados nas últimas 24h. O estado atual reflete uma base de código em intensa evolução técnica, com foco em estabilidade do storage (CAS patterns, concorrência de escrita) e UX (Logs page, Notifications, Routine delivery). Não houve releases novas. Dezenas de PRs foram fechados com contribuições de múltiplos contribuidores (core + novos), sugerindo maturidade no processo de merge. Contudo, a Issue #4108 (Nightly E2E failing) permanece aberta desde maio, indicando risco contínuo de qualidade.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto está em ritmo intenso de preparação de changesets para futura integração, com destaque para as PRs de infraestrutura (#5455, #5453, #5451) e features em revisão.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (10 items)

| PR | Título | Área | Impacto |
|---|---|---|---|
| [#5455](https://github.com/nearai/ironclaw/pull/5455) | perf(storage): row-native sequence primitive + thread/turn append paths | storage/db | Adiciona `reserve_sequence` nativo para Postgres+libSQL (migration V32). Otimiza path de escrita em threads. |
| [#5453](https://github.com/nearai/ironclaw/pull/5453) | Improve storage write concurrency under stress | storage | Remove gargalo do resource-governor sob 32 writes concorrentes. |
| [#5451](https://github.com/nearai/ironclaw/pull/5451) | perf(filesystem): enable WAL + tune PRAGMAs on libSQL | storage | Liga WAL mode + PRAGMAs otimizados no backend libSQL (caminho crítico de escrita por turno). |
| [#5447](https://github.com/nearai/ironclaw/pull/5447) | Skip durable resource writes when limits are unlimited | resource-governor | Fast-path de escrita ignorando writes desnecessários em cenário de limits ilimitados. |
| [#5452](https://github.com/nearai/ironclaw/pull/5452) | Move runner lease heartbeats to memory store | storage/turn-state | Move heartbeats de alta vibração para mapa em memória; reduz write amplification. |
| [#5449](https://github.com/nearai/ironclaw/pull/5449) | Add Reborn Playwright workflow | CI | Workflow noturno dedicado para browser scenarios E2E via Playwright. |
| [#5439](https://github.com/nearai/ironclaw/pull/5439) | Fix NEAR AI MCP token resolution for SSO users | auth/MCP | Permite que usuários WebUI/SSO resolvam credencial MCP host-managed sem token próprio. |
| [#5454](https://github.com/nearai/ironclaw/pull/5454) | Stabilize QA 2E assistant text gate | QA | Corrige gate de validação do assistant response blocks em testes E2E. |
| [#5234](https://github.com/nearai/ironclaw/pull/5234) | fix(reborn): remove per-record lock convoys via shared cas_update helper | storage/core | **Major refactor** — remove mutex por-record que causava convoy anti-pattern desde 06-24. |
| [#5465](https://github.com/nearai/ironclaw/pull/5465) | test(reborn): collapse group harness to one runtime | testing | Elimina flake de ~1.4–5% sob contenção de CPU no group harness. |

**Destaque estratégico:** O cluster de PRs de storage (#5455, #5453, #5451, #5447, #5452, #5234) representa uma onda coordenada de otimização de escrita que deve impactar diretamente a estabilidade do Routine runner (Issue #5456).

---

## 4. Temas Quentes da Comunidade

### Issues com mais contexto/discussão

| Issue | Título | Comentários | Tema |
|---|---|---|---|
| [#5426](https://github.com/nearai/ironclaw/issues/5426) | [QA] Cannot create routine: system drive not available | 1 | **Experiência de onboarding** — QA em hosted-staging falha ao criar routine com integrações (Google Sheets + Slack). |
| [#5420](https://github.com/nearai/ironclaw/issues/5420) | Routine delivery target é global per-user, não per-routine | 1 | **Bug semântico grave** — configurar Slack em uma routine redirige todas. Afeta automations multi-target. |
| [#5437](https://github.com/nearai/ironclaw/issues/5437) | Daily ironclaw failure taxonomy — 2026-06-30 | 0 | **Monitoring/observability** — taxonomy de falhas do dia, indicando que 146 tarefas falharam com HTTP 400 em pinchbench. |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) | Memories na WebUI workspace visíveis a todos os usuários | 0 | **Segurança/privacidade** — memórias compartilhadas entre usuários no mesmo workspace. |

### PRs abertas com discussão potencial

| PR | Título | Tamanho | Risco | Tema |
|---|---|---|---|---|
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Context management — progressive tool disclosure | XL | low | **Redução de latência** — corta 25.8k tokens/turno eliminando disclosure desnecessária de ~91 tool schemas. |
| [#5280](https://github.com/nearai/ironclaw/pull/5280) | Trace Commons: instance-wide enrollment | XL | low | **Observabilidade** — adiciona enrollment instance-wide + profiles + trace inspection. |
| [#5394](https://github.com/nearai/ironclaw/pull/5394) | capability policy e2e | XL | low | **Segurança/RBAC** — teste E2E para policies de capability. |

**Análise:** Há demanda clara por (1) **melhor isolamento de contexto por workspace/usuário**, (2) **performance de storage** (endereçada pelo cluster de PRs fechadas), e (3) **tool disclosure eficiente** para reduzir timeouts do modelo. A issue #5420 é um bug semântico de automações que precisa de atenção urgente.

---

## 5. Bugs e Estabilidade

### Por severidade (P1 → P3)

| Severidade | Issue | Título | Status | CausaRaiz Suspeita |
|---|---|---|---|---|
| **P1** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Routine runs fail with runner lease expiration | OPEN | Threshold de 90s inativo muito agressivo para rotinas multi-tool com inference + APIs externas. Dominou falhas em 6/30. |
| **P2** | [#5457](https://github.com/nearai/ironclaw/issues/5457) | Logs page permanece vazia indefinite | OPEN | Bloqueia debugging de rotina. Afeta desenvolvedores. |
| **P3** | [#5458](https://github.com/nearai/ironclaw/issues/5458) | Double header na Logs page | OPEN | Bug UI de renderização. Menor impacto operacional. |

### Bugs técnicos (escalação interna)

| Issue | Título | Escopo | Implicação |
|---|---|---|---|
| [#5466](https://github.com/nearai/ironclaw/issues/5466) | Parallel same-tenant turn-runs vs FilesystemTurnStateStore CAS (~10% failure) | storage/concorrência | **Alta** — exposto pelo novo teste `scenario_concurrent_dual_gate_resume`. ~10% de falha sob carga real. |
| [#5468](https://github.com/nearai/ironclaw/issues/5468) | Per-key mutex maps violam cas_update no-mutex guardrail | storage/refactor | **Alta** — padrão convoy identificado na review do #5234. |
| [#5467](https://github.com/nearai/ironclaw/issues/5467) | InMemoryApprovalRequestStore::discard_pending diverge do Filesystem | storage/test | **Média** — stores divergem em tratamento de tombstones, permite id reuse. |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) | Memories visíveis a todos no workspace | segurança | **Alta** — leaking de dados entre usuários. |
| [#5420](https://github.com/nearai/ironclaw/issues/5420) | Routine delivery global, não per-routine | automations | **Alta** — configuração de um routine altera comportamento de todos. |

### Infraestrutura de testes

| Item | Status | Link |
|---|---|---|
| Nightly E2E | **FAILING** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — falha desde 2026-05-27, >1 mês |
| Pinchbench (146 non-pass) | INVALID/400 error | [#5437](https://github.com/nearai/ironclaw/issues/5437) |

**Alerta:** Nightly E2E quebrado há >30 dias é indicador de risco de regressão acumulado. Prioridade de triagem recomendada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features identificadas

| Issue | Título | Prioridade | Área | Sinal de roadmap |
|---|---|---|---|---|
| [#5459](https://github.com/nearai/ironclaw/issues/5459) | Configurable skills and tools | Alta | extensions/tooling | **Admin installs → shared; user installs → private.** Sistema de plugins WASM para tools e skills é roadmap ativo. |
| [#5443](https://github.com/nearai/ironclaw/issues/5443) | Header notifications para automation tasks | Média | UX/notifications | Adicionar entry point de notificação na header para automations triggered. |
| [#5461](https://github.com/nearai/ironclaw/issues/5461) + [#5462](https://github.com/nearai/ironclaw/issues/5462) | Host-managed MCP credential marking + test | Técnica | auth/MCP | Follow-up do #5439 — marcação e verificação de credentials host-managed. |

### PRs feature em revisão

| PR | Título | Tamanho | Tendência |
|---|---|---|---|
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Context management — progressive tool disclosure (flag-gated, default off) | XL | Reduz latência de inference drasticamente (~25.8k tokens/turn → disclosure progressiva). |
| [#5280](https://github.com/nearai/ironclaw/pull/5280) | Trace Commons: instance-wide enrollment, per-user profiles, trace inspection | XL | Observabilidade enterprise-ready. |
| [#5463](https://github.com/nearai/ironclaw/pull/5463) | Remove chat-triggered Slack connect flow | XL | Simplificação de UX — channel connection via UI dedicada. |
| [#5441](https://github.com/nearai/ironclaw/pull/5441) | Add header notifications for automation approvals | XL | Completa o loop de notification (#5443 correlacionado). |

**Sinais de direção:**
1. **Tool disclosure progressiva** é prioridade de perf para resolver timeouts do modelo.
2. **Sistema de plugins (WASM)** para skills/tools está em discussão ativa — indica estratégia de extensibilidade.
3. **Notifications hub** centralizado no header como novo entry point de UX para automations.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (via issues QA e bug reports)

| Dor | Issue | Severidade | Cenário |
|---|---|---|---|
| Rotinas falham frequentemente | [#5456](https://github.com/nearai/ironclaw/issues/5456) | **P1** | Multi-tool routines (model inference + APIs externas) falham por lease expiration. Dominante em 6/30. |
| Logs page não carrega | [#5457](https://github.com/nearai/ironclaw/issues/5457) | **P2** | QA e devs无法 debugar falhas de rotina. Bloqueio direto de productivity. |
| Cannot create routine (staging) | [#5426](https://github.com/nearai/ironclaw/issues/5426) | **QA** | Usuário não consegue criar routine com integrações Google Sheets + Slack em hosted-staging. |
| Memories compartilhadas entre usuários | [#5460](https://github.com/nearai/ironclaw/issues/5460) | **Segurança** | Usuários veem poemas/memórias de outros no mesmo workspace. Violação de privacidade. |
| Config Slack muda todas as rotinas | [#5420](https://github.com/nearai/ironclaw/issues/5420) | **Bug** | Usuário configura Slack em uma rotina e todas as outras também passam a usar Slack. Comportamento inesperado. |
| Web Search requer token de API | [#5429](https://github.com/nearai/ironclaw/issues/5429) | **UX** | Usuários esperando que Web Search funcione out-of-the-box em produção. |

### Cenários de uso identificados
- **Automations de email summarizing** — padrão de uso real com rotinas recorrentes.
- **Google Sheets + Slack integration** — onboarding de novos usuários.
- **Workspace collaboration** — uso multi-usuário simultâneo (QA em railway-staging).

**Tendência:** Usuários estão adotando automations intensamente (notícias, emails, sheets), mas a estabilidade do Routine runner (#5456) e a UX de Logs (#5457) são blockers de adoção.

---

## 8. Backlog que Merece Atenção

### Issues abertas há >7 dias sem movimento

| Issue | Título | Criado | Atualizado | Motivo de atenção |
|---|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-30 | **>30 dias** — sinal de dívida técnica de teste. Impacta confiança em releases. |
| [#5437](https://github.com/nearai/ironclaw/issues/5437) | Daily failure taxonomy 2026-06-30 | 2026-06-30 | 2026-06-30 | Taxonomy do dia precisa de triagem para identificar padrões de falha (HTTP 400 no pinchbench). |
| [#5429](https://github.com/nearai/ironclaw/issues/5429) | Web Search requires NEAR AI Cloud API token | 2026-06-30 | 2026-06-30 | Issue de DX para usuários novos em produção. |

### PRs abertas há >5 dias com alto impacto

| PR | Título | Criada | Tamanho | Risco | Motivo de atenção |
|---|---|---|---|---|---|
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Context management — progressive tool disclosure | 2026-06-23 | XL | low | Resolve timeouts de 120s do NEAR AI. PR em aberto há 8 dias. |
| [#5234](https://github.com/nearai/ironclaw/pull/5234) | Remove per-record lock convoys | 2026-06-25 | XL | low | Fix crítico do convoy anti-pattern (causou wedge em 06-24). PR aberta há 6 dias. |
| [#5280](

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)
## Data: 2026-07-01

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 2026-07-01, com 23 issues e 50 PRs atualizados nas últimas 24h. Não houve novos lançamentos, mas a comunidade demonstra engajamento significativo através de múltiplas contribuições de features e correções. A base de código está em transição para a versão 2.0.0 (pré-release), evidenciada pela issue centralizada de rastreamento de bugs. O foco atual recai sobre melhorias de memória (reranker), experiência em canais (DingTalk, Telegram), e estabilidade do Runtime 2.0.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões desde a última atualização. A versão estável mais recente continua sendo **v1.1.12.post2**. A equipe aguarda estabilização de issues críticas antes do próximo release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Significativos

| PR | Descrição | Impacto |
|---|---|---|
| [#5647](https://github.com/agentscope-ai/CoPaw/pull/5647) | **feat(memory): add reranker config panel** | Painel UI para configurar reranker na memória |
| [#5648](https://github.com/agentscope-ai/CoPaw/pull/5648) | **feat(memory): add configurable reranker for memory search** | Suporte a API de rerank externa (SiliconFlow) para re-ranking de resultados |
| [#5669](https://github.com/agentscope-ai/CoPaw/pull/5669) | **feat(memory): add qwen3-rerank to memory search** | Wrapper para `qwen3-rerank` do DashScope — fecha issue [#5588](https://github.com/agentscope-ai/CoPaw/issues/5588) |
| [#5590](https://github.com/agentscope-ai/CoPaw/pull/5590) | **feat(channels): support dingtalk mentions in proactive sends** | Suporte a `@mention` em envios proativos — fecha issue [#5564](https://github.com/agentscope-ai/CoPaw/issues/5564) |
| [#5654](https://github.com/agentscope-ai/CoPaw/pull/5654) | **fix(channels): surface DingTalk delivery failures** | Correção de envios silenciosos no cron — fecha issue [#5566](https://github.com/agentscope-ai/CoPaw/issues/5566) |
| [#5664](https://github.com/agentscope-ai/CoPaw/pull/5664) | **feat(chat): add non-owner tab info banner** | Banner informativo para abas não-proprietárias |
| [#5662](https://github.com/agentscope-ai/CoPaw/pull/5662) | **fix(ci): modify channel name in pr template** | Correção de template CI |
| [#5655](https://github.com/agentscope-ai/CoPaw/pull/5655) | **docs(readme): update and refine readme** | Documentação atualizada |
| [#5653](https://github.com/agentscope-ai/CoPaw/pull/5653) | **docs(website): add Architecture page (en + zh)** | Nova página de arquitetura em inglês e chinês |
| [#5660](https://github.com/agentscope-ai/CoPaw/pull/5660) | **fix(runtime): restore spawn_subagent for Runtime 2.0** | Restaura funcionalidade perdida após migração — fecha issue [#5523](https://github.com/agentscope-ai/CoPaw/issues/5523) |
| [#5659](https://github.com/agentscope-ai/CoPaw/pull/5659) | **fix(chat): allow sending attachments without text** | Permite envio de mídia sem texto obrigatório |
| [#5652](https://github.com/agentscope-ai/CoPaw/pull/5652) | **feat(crons): honor per-request model override** | Permite override de modelo por job cron — fecha issue [#5638](https://github.com/agentscope-ai/CoPaw/issues/5638) |

### PRs em Revisão/Abertos de Destaque

| PR | Descrição | Status |
|---|---|---|
| [#5671](https://github.com/agentscope-ai/CoPaw/pull/5671) | **fix(tui): support CJK/IME input** | Correção crítica para input em línguas asiáticas |
| [#5665](https://github.com/agentscope-ai/CoPaw/pull/5665) | **feat: Loop Engineering — Composable Gate Architecture** | Sistema de controle de loops para agentes |
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | **feat(computer-use): Windows desktop GUI automation** | Automação UIA + Tauri para Windows |
| [#5525](https://github.com/agentscope-ai/CoPaw/pull/5525) | **feat(sandbox): implement windows native sandbox** | Sandbox nativo para Windows |
| [#5661](https://github.com/agentscope-ai/CoPaw/pull/5661) | **feat: filter plugin market by version compatibility** | Filtro de compatibilidade por versão |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Tipo | Comentários | Reações | Tema Principal |
|---|---|---|---|---|
| [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) | Bug | 6 | 0 | Console crash com grandes históricos de tool-use |
| [#5403](https://github.com/agentscope-ai/CoPaw/issues/5403) | Bug | 5 | 0 | Browser autofill interfere em campo de busca |
| [#5588](https://github.com/agentscope-ai/CoPaw/issues/5588) | Enhancement | 4 | 0 | Busca em memória de dois estágios (reranker) |
| [#5573](https://github.com/agentscope-ai/CoPaw/issues/5573) | Bug | 4 | 0 | Erros 400 no DeepSeek V4 thinking mode |
| [#5561](https://github.com/agentscope-ai/CoPaw/issues/5561) | Bug | 4 | 0 | Bot Feishu não recebe mensagens longas |
| [#5550](https://github.com/agentscope-ai/CoPaw/issues/5550) | Bug | 4 | 0 | Loop de instalação no Remote SSH plugin |
| [#5273](https://github.com/agentscope-ai/CoPaw/issues/5273) | Tracking | 2 | 1 | **v2.0.0 Pre-release Bug Tracker** |

### Análise de Demandas

**Predominância de Issues de Canais:** Observa-se forte demanda por melhorias em canais de comunicação:
- **DingTalk:** Suporte a @mention ([#5564](https://github.com/agentscope-ai/CoPaw/issues/5564), [#5603](https://github.com/agentscope-ai/CoPaw/issues/5603)), entrega de mensagens
- **Telegram:** BaseURL customizável ([#5630](https://github.com/agentscope-ai/CoPaw/issues/5630))
- **Feishu:** Problemas com mensagens longas ([#5561](https://github.com/agentscope-ai/CoPaw/issues/5561))
- **WeChat:** Manipulação de arquivos ([#5554](https://github.com/agentscope-ai/CoPaw/issues/5554))

**Memória e Recuperação de Informação:** A comunidade solicita ativamente melhorias em retrieval:
- Reranker configurável para busca em memória
- Suporte a modelos de re-ranking dedicados

**Estabilidade do Core:** Issues críticas como crashes no console e timeouts revelam necessidade de refinamento em componentes centrais.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Alta Severidade)

| Issue | Descrição | Status | Link |
|---|---|---|---|
| #5401 | **Console crash:** Sessões com histórico grande de tool-use causam crash frontend (tipo "data" content blocks) | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5401) |
| #5573 | **DeepSeek V4 400 errors:** `reasoning_content` ausente em streaming; null types no tool schema | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5573) |
| #5561 | **Feishu long messages:** Bot não recebe mensagens longas via Feishu, apenas arquivos | OPEN | [Link](https://github.com/agentscope-ai/CoPaw/issues/5561) |
| #5587 | **Qwen-Image install error:** Erro na instalação da ferramenta de imagem | OPEN | [Link](https://github.com/agentscope-ai/CoPaw/issues/5587) |

### Bugs Média Severidade

| Issue | Descrição | Status | Link |
|---|---|---|---|
| #5403 | Browser autofill intercepta campo de busca na configuração de modelos | OPEN | [Link](https://github.com/agentscope-ai/CoPaw/issues/5403) |
| #5550 | Remote SSH plugin: loop de instalação + processos órfãos | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5550) |
| #5539 | Heartbeat task: timeout fixo de 120s causa falhas | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5539) |
| #5624 | Contador de resultados em cards de ferramentas sempre exibe "1" | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5624) |
| #5554 | WeChat: bot sem resposta ao enviar arquivos | CLOSED | [Link](https://github.com/agentscope-ai/CoPaw/issues/5554) |
| #5658 | Falha ao conectar via 9router para modelos QwenPaw | OPEN | [Link](https://github.com/agentscope-ai/CoPaw/issues/5658) |

### Bugs em Canais

| Issue | Canal | Descrição | Link |
|---|---|---|---|
| #5566 | DingTalk | Cron silencioso gera notificações vazias + channels send inalcançável | [Link](https://github.com/agentscope-ai/CoPaw/issues/5566) |
| #5603 | DingTalk | Streaming de cards muito lento (caracter por caracter) | [Link](https://github.com/agentscope-ai/CoPaw/issues/5603) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Maior Relevância

| Issue | Feature | Componente | Link |
|---|---|---|---|
| #5670 | **Remover limite de caracteres** na caixa de input | Console/Frontend | [Link](https://github.com/agentscope-ai/CoPaw/issues/5670) |
| #5668 | **Linux AppImage build** para desktop | Desktop | [Link](https://github.com/agentscope-ai/CoPaw/issues/5668) |
| #5667 | **Workspace file browser** dentro da interface de chat | Console | [Link](https://github.com/agentscope-ai/CoPaw/issues/5667) |
| #5657 | **Loop Detection Mechanism** para workflows agentic | Core/Runtime | [Link](https://github.com/agentscope-ai/CoPaw/issues/5657) |
| #5638 | **Per-cron-job model override** | Cron/Scheduler | [Link](https://github.com/agentscope-ai/CoPaw/issues/5638) |
| #5630 | **Custom Telegram BaseURL** | Channels/Telegram | [Link](https://github.com/agentscope-ai/CoPaw/issues/5630) |
| #5663 | **Toggle para bypass de debounce** ao enviar mídia | Console | [Link](https://github.com/agentscope-ai/CoPaw/issues/5663) |

### Sinais de Roadmap Potencial

Baseado nas contribuições abertas, o roadmap próximo inclui:

1. **v2.0.0:** Issue centralizada ([#5273](https://github.com/agentscope-ai/CoPaw/issues/5273)) indica lançamento iminente
2. **Runtime 2.0:** PR [#5660](https://github.com/agentscope-ai/CoPaw/pull/5660) confirma continuação da migração
3. **Loop Engineering:** Arquitetura de gates para controle de loops ([#5665](https://github.com/agentscope-ai/CoPaw/pull/5665))
4. **Desktop Expansion:** AppImage Linux + automação Windows GUI
5. **Memory Enhancement:** Sistema de reranking maduro com UI configurável

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Dor | Frequência | Link |
|---|---|---|---|
| **Mensagens Longas** | Limite de 10k caracteres restritivo para modelos com 256K+ contexto | Alta | [#5670](https://github.com/agentscope-ai/CoPaw/issues/5670) |
| **Estabilidade Cron**

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-01

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. Não houve novos lançamentos, mas o ritmo de desenvolvimento permanece intenso com 5 issues fechadas e 5 PRs merged/fechados. A comunidade está ativamente discutindo mudanças arquiteturais significativas, incluindo a RFC de Work Lanes (#6808) com 13 comentários e a possibilidade de substituição do frontend React/Vite por Rust→Wasm (#8132). O foco atual parece estar na estabilidade da versão 0.8.x e no refinamento do onboarding de dois caminhos. A remoção do aplicativo desktop Tauri (#8544) indica um pivô estratégico na experiência do usuário.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto está em fase ativa de desenvolvimento, com as追踪/issues #8071 e #8070 rastreando o escopo da v0.8.3, que inclui work em provider/native-tool message serialization, runtime execution, gateway, web e onboarding surfaces. A versão atual упоминается como 0.8.1-beta.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#8544](https://github.com/zeroclaw-labs/zeroclaw/pull/8544) | Remove zeroclaw-desktop Tauri app | Excisou completamente o crate `apps/tauri` e todas as referências ao desktop app | Mudança estratégica — simplifica build e CI |
| [#8501](https://github.com/zeroclaw-labs/zeroclaw/pull/8501) | warn when sqlite memory requests vector search without embedder | Corrige silenciamento de erro quando backend sqlite usa Hybrid search sem embedding provider configurado | Estabilidade — feedback proativo ao usuário |

### PRs Abertos de Destaque (Alto Impacto)

| # | PR | Status | Tamanho | Risco | Resumo |
|---|-----|--------|---------|-------|--------|
| [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) | feat(onboard): two-path onboard tree wired end-to-end | OPEN | XL | High | Novo crate `zeroclaw-onboard` com state tree walkable como `OnboardSpec::tree` |
| [#8521](https://github.com/zeroclaw-labs/zeroclaw/pull/8521) | feat(amqp): SOP fan-in dispatch path | OPEN | XL | High | AMQP deliveries agora podem driver SOP engine além do agent loop |
| [#8551](https://github.com/zeroclaw-labs/zeroclaw/pull/8551) | feat(plugins): channel host bindings | OPEN | L | High | Fechando gaps para channels como plugins WASM (wasi:http, inbound queue, config jail) |
| [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) | fix(runtime): surface remediation when system-prompt exceeds context | OPEN | S | High | Rebasado sobre master, corrige preemptive trim que re-executava same tool calls |
| [#8308](https://github.com/zeroclaw-labs/zeroclaw/pull/8308) | fix(agent): carry approval attribution on decision | OPEN | M | High | Remove channel-global side channel para approval attribution |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

**#6808 - RFC: Work Lanes, Board Automation, and Label Cleanup** — 13 comentários
- **Link:** https://github.com/zeroclaw-labs/zeroclaw/issues/6808
- **Análise:** RFC de governança madura (v6) mirando 0.8.0-beta-1, propõe automação de board e cleanup de labels para reduzir trabalho manual de mantenedores. Status: Accepted, rollout in progress.
- **Demanda:** Eficiência operacional e clareza de processo.

**#8132 - RFC: Replace React/Vite with Rust→Wasm** — 2 comentários, 1 reação 👍
- **Link:** https://github.com/zeroclaw-labs/zeroclaw/issues/8132
- **Análise:** Split de #7674 (Wasm-first), busca eliminar Node.js do build/runtime. Scope: substituir React SPA + Vite por framework Rust→Wasm (Dioxus, Leptos, ou Yew).
- **Demanda:** Simplificação de stack tecnológico e redução de dependências.

**#8396 - RFC: Wire-Protocol-First Provider Model** — 1 comentário
- **Link:** https://github.com/zeroclaw-labs/zeroclaw/issues/8396
- **Análise:** RFC de arquitetura para fazer `wire_api` o eixo organizador primário do modelo de provider.
- **Demanda:** Melhor organização de código e separação de concerns.

---

## 5. Bugs e Estabilidade

### Issues P1 (Alta Severidade — Workflow Blocked)

| # | Bug | Severidade | Status | Observações |
|---|-----|------------|--------|-------------|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | consecutive OOM in WSL2 | S0 - data loss/risk | Accepted, no-stale | OOM kills em WSL2, total-vm:17GB, anon-rss:8GB |
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions | S1 - blocked | Accepted | Gateway vê tools mas TUI não recebe |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured | S1 - blocked | Accepted, quickstart | `zeroclaw channels doctor` não reconhece configuração |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | Anthropic provider unavailable in chat | S0 - risk | Blocked, needs-author-action | Provider adicionado no Quickstart não aparece no chat |

### Issues P2 (Comportamento Degradado)

| # | Bug | Severidade | Status | Observações |
|---|-----|------------|--------|-------------|
| [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) | SQLite default + Hybrid search sem embedder | S2 - degraded | Closed com PR #8501 | Silent degradation para keyword-only |

### Regressões Recentes Corrigidas

- **#7804** (CLOSED): Code history enviando mensagens Anthropic não-alternantes — resolved

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progress ou Accepted (Próxima Versão)

| # | Feature | Escopo | Link |
|---|---------|--------|------|
| #8226 | per-agent custom environment variables | Agent config, security | https://github.com/zeroclaw-labs/zeroclaw/issues/8226 |
| #7952 | publish full-channel prebuilt assets | CI, channels | https://github.com/zeroclaw-labs/zeroclaw/issues/7952 |
| #8445 | Telegram multi-message mode | Channel:telegram | https://github.com/zeroclaw-labs/zeroclaw/issues/8445 |
| #8251 | Surface relationship memory as user-facing workflows | Memory, skills | https://github.com/zeroclaw-labs/zeroclaw/issues/8251 |
| #7882 | Add await_sessions to delegate tool | Tool:delegate | https://github.com/zeroclaw-labs/zeroclaw/issues/7882 |

### RFCs Arquiteturais em Discussão

| # | RFC | Escopo | Status | Link |
|---|-----|--------|--------|------|
| #8462 | Runtime Policy for OTel LLM and Tool Content | Observability | Accepted | https://github.com/zeroclaw-labs/zeroclaw/issues/8462 |
| #8398 | Plugin permission, config, and secrets model | Plugin system | Blocked | https://github.com/zeroclaw-labs/zeroclaw/issues/8398 |
| #8424 | .ignore File Mechanism for Workspace File Protection | Security, workspace | Blocked | https://github.com/zeroclaw-labs/zeroclaw/issues/8424 |

### Trackers de Versão Ativos

- **[#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)** — v0.8.3: runtime execution, agent loop, tools, skills
- **[#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070)** — v0.8.3: gateway, web, ZeroCode, onboarding
- **[#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360)** — v0.8.3: provider and native-tool message serialization

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **UX de Configuração de Channels** — Usuários reportam que Telegram não funciona após configuração via quickstart (#8505). Ferramenta `doctor` indica channels não configurados mesmo após setup correto.

2. **Memory Backend Confusion** — Usuários escolhem SQLite como backend padrão mas não sabem que precisam configurar embedding provider separadamente para Hybrid search (#8386). PR #8501 adiciona warning proativo.

3. **Provider Discovery** — Quickstart adiciona provider (ex: Anthropic) mas não aparece imediatamente no chat até reset (#8094). Usuários novos enfrentam barreira de onboarding.

4. **Instalação** — Documentação atual não menciona `cargo binstall zeroclaw`, forçando build from source que é lento (#5269).

### Cenários de Uso Observados

- **Multi-agent com channels** — Uso crescente de múltiplos agents com channels diferentes (Telegram, WhatsApp, LINE), evidenciando necessidade de per-agent config (#8226).
- **WSL2 como ambiente primário** — Bug de OOM (#5542) indica base significativa de usuários em WSL2.
- **AMQP como dispatch** — PR #8521 adiciona suporte SOP engine via AMQP, sinalizando adoção em ambientes de mensageria.

### Satisfação/Insatisfação

- **Positivo:** Modularidade de skills (#7816 closed) e двухпуть onboarding (#8033) demonstram atenção à experiência do desenvolvedor.
- **Negativo:** Bugs de channels e providers afectan novos usuários (P1 issues em onboarding).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Bloqueadas há Tempo

| # | Issue | Idade | Status | Prioridade | Link |
|---|-------|-------|--------|------------|------|
| #5542 | consecutive OOM in WSL2 | ~3 meses | Accepted, no-stale | P1 | https://github.com/zeroclaw-labs/zeroclaw/issues/5542 |
| #5269 | Installation Documentation & Methods | ~3 meses | Accepted | P2 | https://github.com/zeroclaw-labs/zeroclaw/issues/5269 |
| #3767 | Cross-channel TOTP gate | ~3.5 meses | Accepted, no-stale | P1 | https://github.com/zeroclaw-labs/zeroclaw/issues/3767 |
| #8396 | Wire-Protocol-First Provider Model RFC | ~4 dias | Blocked, needs-maintainer-review | P2 | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 |
| #8398 | Plugin permission model open questions | ~4 dias | Blocked, needs-maintainer-review | P2 | https://github.com/zeroclaw-labs/zeroclaw/issues/8398 |
| #8057 | CI: scheduled/manual security jobs | ~11 dias | Blocked | P2 | https://github.com/zeroclaw-labs/zeroclaw/issues/8057 |
| #8056 | CI: required PR gate — cargo audit | ~11 dias | Blocked | P2 | https://github.com/zeroclaw-labs/zeroclaw/issues/8056 |

### Recomendações

1. **Triagem urgente** das issues P1 antigas (#5542, #3767) — OOM em WSL2 e TOTP gate são problemas de segurança/estabilidade.
2. **Revisão de RFCs bloqueados** (#8396, #8398) — Decisões arquiteturais pendentes afetam roadmap da 0.8.3+.
3. **CI Security jobs** (#8056, #8057) — Ferramentas de segurança pendentes há 11 dias, risco累积.

---

## Saúde Geral do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade (24h) | ✅ Alta | 50 issues + 50 PRs atualizados |
| Releases | ⚠️ Nenhuma | Projeto em intenso desenvolvimento |
| Bugs P1 abertos | ⚠️ 4 | 2 relacionados a onboarding, 2 a runtime |
| RFCs ativas | ✅ 7+ | Governança e arquitetura saudáveis |
| PRs abertos | ✅ 45 | Pipeline saudável com 5 merges |
| Backlog antigo | ⚠️ 3+ issues >2 meses | Necessita triagem |

**Conclusão:** ZeroClaw demonstra vigoroso desenvolvimento com foco em estabilizar a v0.8.x. A remoção do desktop app (#8544) e avanços em plugins WASM (#8551) indicam maturação do modelo arquitetural. Atenção necessária em bugs de onboarding (Telegram, providers) que afetam novos usuários.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*