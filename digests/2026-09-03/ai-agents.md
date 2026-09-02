# Resumo diário do ecossistema de agentes de IA 2026-09-03

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-02 22:16 UTC

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

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-09-03  
**Projetos Analisados:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas** em 2026-09-03. Projetos como Hermes Agent (100 ops/24h), ZeroClaw (100 ops/24h) e CoPaw (66 ops/24h) mantêm ritmo de desenvolvimento intenso, enquanto NullClaw permanece inerte e PicoClaw opera em modo de manutenção mínima. A dominant theme across all active projects é a **estabilidade de sessões e segurança** — 4 de 6 projetos ativos têm bugs P1 relacionados a gerenciamento de estado, tokens OAuth ou políticas de sandbox. Observa-se uma tendência de amadurecimento rumo a arquiteturas multi-agente com suporte a channels (Slack, Telegram, Matrix) e observabilidade (tracing, métricas inline). Nenhum projeto publicou releases nas últimas 24h, sugerindo sincronização de ciclos de release ou preparação para launches coordenados.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs P1+ Abertos | Saúde |
|---------|-------------|-----------|----------------|------------------|-------|
| **NullClaw** | 0 | 0 | 0 | — | 🔴 Inativo |
| **NanoBot** | 2 | 23 | 0 | 2 (P1) | 🟡 Moderada |
| **Hermes Agent** | 50 | 50 | 0 | 3 (P1 fechadas) | 🟡 Pressão alta |
| **PicoClaw** | 1 | 2 | 0 | 1 (Alta) | 🔴 Baixa |
| **IronClaw** | 12 | 30 | 0 | 2 (Crítica, P2) | 🟢 Estável |
| **CoPaw** | 26 | 40 | 1 (beta.7) | 7 (3 críticos) | ⚠️ Atenção |
| **ZeroClaw** | 50 | 50 | 0 | 5 (P0-P1) | ⚠️ Crítico |

**Destaque:** Hermes Agent e ZeroClaw lideram em volume absoluto. CoPaw é o único com release正式, sinalizando maturidade no ciclo de release.

---

## 3. Posicionamento do Projeto Principal

### NanoBot vs. Hermes Agent vs. ZeroClaw

| Dimensão | NanoBot | Hermes Agent | ZeroClaw |
|----------|---------|--------------|----------|
| **Volume** | Médio (25 ops) | Muito alto (100 ops) | Muito alto (100 ops) |
| **Foco principal** | Segurança, streaming | Desktop, sessões | Config, sandbox |
| **Comunidade** | ~10 contributors ativos | 1.000+ issues abertas | RFC-driven governance |
| **Diferencial técnico** | Path traversal fixes, OAuth token management | Kernel remote spawn, cron lifecycle guards | Sandbox granular, multi-channel |
| **Debt técnica** | Baixa (consolidação) | Média (backlog) | Alta (config system) |

**Vantagens competitivas identificadas:**

- **NanoBot:** Maturidade em segurança de sessões e preservação de tokens — direto ao ponto para deployments empresariais
- **Hermes Agent:** Ecossistema mais amplo (TUI, Desktop, SSH/Docker) com foco em superfície multi-plataforma
- **ZeroClaw:** Arquitetura mais modular (RFC-driven) com separação clara de concerns (sessions, transports, storage)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Sessões e Tokens

Todos os projetos ativos enfrentam problemas similares:

| Projeto | Issue Relacionada |
|---------|-------------------|
| NanoBot | Path traversal em session keys (#5633), OAuth tokens fora do data directory (#5446, #5638) |
| Hermes Agent | Session live owner, pollers storm (#100327) |
| ZeroClaw | Config::save() data loss (#10495), concurrent write race (#9284) |
| CoPaw | MCP tools desabilitadas ainda executáveis (#7504) |

**Implicação:** A comunidade converge para necessidade de **gestão centralizada de configuração e tokens**, com modelos de sandbox mais granulares.

### 4.2 Estabilidade de Streaming e Cron Jobs

| Projeto | Sintoma |
|---------|---------|
| NanoBot | Stream delivery failures no Matrix (#5637) |
| Hermes Agent | Cron lifecycle guard escaneia demais (GIL hold) — **resolvido** |
| CoPaw | Cron tasks duplicadas (#7476), não disparadas (#7480) |
| IronClaw | Cache-hit collapse em OpenAI backends (#7921) |

**Implicação:** Jobs agendados e streaming são vetores de instabilidade recorrentes — padrões de correção estão sendo estabelecidas (bounded scans, deduplicação, retry backoff).

### 4.3 Multi-Agent e Orchestration

Três projetos explicitamente investem em multi-agent:

- **CoPaw:** Main agent + sub-agents com status polling (#7450)
- **ZeroClaw:** Delegate/sub-agent progress exposure (#10531)
- **IronClaw:** Subagent approval gates (#8046)

**Implicação:** Orchestration de agentes hierárquicos é padrão emergente — necessidade de contratos de comunicação e observabilidade entre parent e child agents.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Público | Projeto Recomendado | Motivo |
|---------|-------------------|--------|
| **Enterprise (segurança)** | NanoBot | Foco em OAuth, path traversal, token management |
| **Desenvolvedores Desktop** | Hermes Agent | TUI, Desktop Electron, SSH/Docker execution |
| **Power users (VPS/homelab)** | ZeroClaw | Multi-channel (Telegram/Slack/Matrix), sandbox granular |
| **Avaliação rápida** | CoPaw | Beta stable com reranker UI, theming incipiente |
| **Automação QQ Channel** | PicoClaw | Suporte específico a QQ (embora com bug crítico) |

### 5.2 Por Arquitetura

```
ZeroClaw ─── RFC-driven, módulos separados (sessions, transports, storage)
     │
Hermes ─────── Unified daemon, Desktop-first
     │
IronClaw ───── TypeScript-first, WebUI component library
     │
NanoBot ────── Python, streaming-focused, OAuth-native
     │
CoPaw ──────── Qwen-first, ReMe memory, plugin ecosystem
```

### 5.3 Diferenciação Técnica Relevante

| Característica | NanoBot | Hermes | IronClaw | ZeroClaw | CoPaw |
|----------------|---------|--------|----------|----------|-------|
| Context compaction | ✅ | ❌ | ❌ | ✅ | ❌ |
| OAuth token centralizado | ✅ | ❌ | ❌ | ❌ | ❌ |
| Sandbox granular | ❌ | ❌ | ❌ | ✅ | ❌ |
| System tray | ❌ | ✅ | ❌ | ❌ | ❌ |
| Voice/WebSocket bridge | ❌ | ❌ | ❌ | ✅ | ❌ |
| Reranker UI | ❌ | ❌ | ❌ | ❌ | ✅ |
| TypeScript WebUI v2 | ❌ | ❌ | ✅ | ❌ | ❌ |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Fechados/24h | Taxa Fechamento | Estágio |
|---------|------------------|-----------------|---------|
| Hermes Agent | 21 | 42% | 🔥 Alta velocidade, dívida de backlog |
| CoPaw | 13 | 48% | 🔥 Beta release ativo |
| IronClaw | 10 | 33% | 🟢 Estável, debt sendo pago |
| ZeroClaw | ~5 | ~11% | ⚠️ Volume alto, baixa integração |
| NanoBot | 3 | 13% | 🟡 Consolidação pré-release |
| PicoClaw | 2 | 100% | 🟡 Manutenção |

**Observação:** Hermes Agent e CoPaw demonstram melhor capacidade de fechar PRs proporcionalmente ao volume aberto.

### 6.2 Governança e Backlog

| Projeto | Issues Abertas | Backlog Control | Tendência |
|---------|---------------|----------------|-----------|
| Hermes Agent | ~1.000+ | ❌ Crônico | Deteriorando |
| ZeroClaw | 35 (24h) | ✅ RFC-driven | Estável |
| IronClaw | 7 | ✅ Issues categorizadas | Melhorando |
| CoPaw | 17 | ⚠️ Long-running PRs | Atenção |
| NanoBot | Baixa | ✅ | Boa |

### 6.3 Maturidade Relativa

```
Mais Maduro ────────────────────────── Menos Maduro
     │                                      │
ZeroClaw (RFCs madura, sandbox)
     │
Hermes Agent (volume alto, dívida backlog)
     │
IronClaw (TypeScript debt em resolução)
     │
NanoBot (consolidação pré-release)
     │
CoPaw (beta, bugs críticos)
     │
PicoClaw (manutenção)
     │
NullClaw (inativo)
```

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Segurança como requisito** | 4+ projetos com fixes de segurança ativos | Usuários enterprise exigem sandbox, OAuth centralizado, token management |
| **Observabilidade inline** | Métricas de velocidade na UI (#5631), Langfuse tracing (#5520) | Usuários avançados querem controle granular de performance |
| **Multi-channel nativo** | Slack (IronClaw #8006), Telegram/Lark/Matrix (ZeroClaw #9574), Telegram streaming (NanoBot #5614) | Agentes se tornam hubs de comunicação cross-platform |
| **Multi-agent orchestration** | Sub-agents (CoPaw, ZeroClaw, IronClaw) | Arquiteturas hierárquicas se tornam padrão |
| **Context efficiency** | Token compaction, replay limiting, cache optimization | Custos de API forcing práticas mais eficientes |
| **Desktop como superfície primária** | Hermes Agent, IronClaw WebUI v2 | TUI cede espaço para interfaces gráficas |
| **Config como perigo** | ZeroClaw data loss (#10495), NanoBot OAuth storage | Config system é subestimado — necessidade de testes e backups |

### 7.2 Tendências de Mercado Inferidas

1. **Convergência para Agent UX patterns:** Onboarding guiado (#5625), approval cards, progressive replies — UX de agente amadurece
2. **Separação de concerns:** Sessions vs. Transports vs. Storage (ZeroClaw RFC #9487) — arquiteturas mais modulares
3. **Provider abstraction:** Fallback chains, multi-model routing (CoPaw #7501), ABC interfaces (Hermes #77111) — flexibilidade de deployment
4. **Long-running agents:** Cron jobs, scheduled tasks, continuity — agentes precisam sobreviver a idle prolongado
5. **Local-first:** LAN LLM server support (CoPaw #7505), Ollama integrations — privacidade e custo como drivers

### 7.3 Recomendações para Decisores

| Cenário | Recomendação |
|---------|-------------|
| **Deploy enterprise** | NanoBot (segurança) ou ZeroClaw (sandbox) |
| **Desenvolvimento interno** | Hermes Agent (DX) ou CoPaw (Qwen integration) |
| **Homelab/VPS** | ZeroClaw (multi-channel) ou IronClaw (Slack) |
| **Contribuidor ativo** | IronClaw (TypeScript debt oferece entrada fácil) |
| **Evitar** | NullClaw (inativo), PicoClaw (bug QQ crítico) |

---

**Gerado em:** 2026-09-03  
**Metodologia:** Agregação de resumos de atividade das últimas 24h por projeto, normalização de métricas e análise qualitativa de issues/PRs.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-03

## 1. Panorama do dia

O ecossistema NanoBot demonstra **alta atividade de desenvolvimento** em 03/09/2026, com 23 PRs atualizados nas últimas 24h e 2 issues abertas. O foco principal está em **correções de segurança e estabilidade** (rejeição de path traversal em sessões, preservação de tokens OAuth), além de melhorias incrementais na experiência webui e no handling de streaming. Três PRs foram fechados/merged hoje, indicando progresso tangível em refatorações críticas do agente e UX. A ausência de releases novas sugere que o projeto está em fase de consolidação antes de um próximo release tag.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões desde o último período observado. Recomenda-se monitorar abranch `main` para eventual tag de release após a integração das correções de segurança pendentes.

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged hoje, representando avanços significativos:

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | chengyongru | **Refatoração:** `AgentRunner` agora owns o fluxo de context compaction local | Consolidação de responsabilidade; compactação síncrona em conversas ativas |
| [#5623](https://github.com/HKUDS/nanobot/pull/5623) | wylovelyi | **Fix:** Remove grupos de tasks vazios após tasks terminarem | Corrige memory leak em gateways de longa execução (#5428) |
| [#5625](https://github.com/HKUDS/nanobot/pull/5625) | Re-bin | **Feat:** Guia de setup no primeiro uso do AI | Melhora onboarding; substitui warning por "Choose your AI" action |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#5586** — Enhancement: Runtime-context blocks opt-out de persistência
- **Autor:** iChizer0 | 2 comentários
- **Demanda:** Permitir blocos de contexto runtime efêmeros que não são persistidos no histórico
- **Correlação:** PR [#5627](https://github.com/HKUDS/nanobot/pull/5627) já implementa suporte para `ephemeral` runtime context blocks
- **Link:** [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)

**#5631** — Enhancement: Exibir contexto e velocidade do modelo na webui
- **Autor:** Ying-Zi66 | 0 comentários
- **Demanda:** Visualização直观 de velocidade do modelo e informações de contexto (semelhante ao DeepSeek Harness)
- **Link:** [Issue #5631](https://github.com/HKUDS/nanobot/issues/5631)

### PRs com maior atenção potencial

| PR | Descrição | Tags | Status |
|---|---|---|---|
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) | MiniMax music guidance | documentation, feature | **Conflito** |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Langfuse tracing para Codex | provider, feature | **Conflito** |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Isolated session config para heartbeat | feature | **Conflito** |

**Análise:** 3 PRs com flag `conflict` indicam necessidade de resolução de merge conflicts antes de integração. A adição de Langfuse tracing para Codex resolve lacuna de observabilidade.

---

## 5. Bugs e Estabilidade

### Severity P1 (Crítico)

| PR | Descrição | Status | Link |
|---|---|---|---|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | **Security Fix:** Rejeitar session keys com path traversal (e.g., `../../etc/passwd`) | **ABERTO** | [Fix #5564](https://github.com/HKUDS/nanobot/issues/5564) |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | Fix: Usar tokens reportados pela API para trigger de consolidação (estimativas locais subcontavam 30-50%) | **ABERTO** | [Fix #5402](https://github.com/HKUDS/nanobot/issues/5402) |

### Severity P2 (Importante)

| PR | Descrição | Link |
|---|---|---|
| #5638 | Fix: Armazenar OAuth token do Copilot no data directory | [PR #5638](https://github.com/HKUDS/nanobot/pull/5638) |
| #5446 | Fix: Persistir OAuth tokens do Codex no data directory | [PR #5446](https://github.com/HKUDS/nanobot/pull/5446) |
| #5637 | Fix: Propagar falhas de entrega de stream no Matrix | [PR #5637](https://github.com/HKUDS/nanobot/pull/5637) |
| #5635 | Fix: Preservar eventos em stream SDK ao fechar queue cheia | [PR #5635](https://github.com/HKUDS/nanobot/pull/5635) |
| #5634 | Fix: Limitar cache de fingerprint de reply em ChannelManager | [PR #5634](https://github.com/HKUDS/nanobot/pull/5634) |
| #5630 | Fix: Guardrails de tamanho para arquivos Dream memory | [PR #5630](https://github.com/HKUDS/nanobot/pull/5630) |
| #5632 | Fix: Preservar Codex prompt cache affinity | [PR #5632](https://github.com/HKUDS/nanobot/pull/5632) |

**Alerta:** O fix de security (#5633) está aberto — priorize revisão e merge para corrigir vulnerabilidade de path traversal em session keys.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| PR | Descrição | Prioridade | Link |
|---|---|---|---|
| #5627 | Suporte a runtime context blocks efêmeros (baseado em #5586) | P2 | [PR #5627](https://github.com/HKUDS/nanobot/pull/5627) |
| #5611 | Limitar replay de raciocínio à última turn do assistant | — | [PR #5611](https://github.com/HKUDS/nanobot/pull/5611) |
| #5614 | Streaming de mensagens rich no Telegram | — | [PR #5614](https://github.com/HKUDS/nanobot/pull/5614) |
| #5620 | Suporte a delivery configurável e archive em batch para cron | P2 | [PR #5620](https://github.com/HKUDS/nanobot/pull/5620) |
| #4551 | Config `isolatedSession` para heartbeat compartilhar sessão | P2 | [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) |

### Demanda Emergente

**#5631** — Exibição de velocidade do modelo e contexto na webui
- Similar ao DeepSeek Harness
- Sugere que usuários avançados querem métricas de performance inline

**Sinais de roadmap identificados:**
1. **Observabilidade:** Tracing Langfuse para Codex (#5520), métricas de velocidade na UI
2. **Armazenamento seguro:** Centralização de tokens OAuth no data directory gerenciado
3. **Eficiência de contexto:** Limitar replay de raciocínio, refinamento de tokens consolidation
4. **UX/WebUI:** Onboarding mejorado (#5625), alinhamento de controles nativos

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Tema | Evidência | Prioridade |
|---|---|---|
| **Memory leaks em longas sessões** | #5623 (empty task groups) e #5634 (fingerprint cache unbounded) | Alta |
| **Subcontagem de tokens causing consolidação tardia** | #5403 (30-50% de erro em estimativas locais) | Alta |
| **Tokens OAuth fora do data directory** | #5446 e #5638 (problema em containers) | Média-Alta |
| **Setup inicial confuso** | #5625 (usuário novo via "Model not configured" como broken state) | Média |
| **Crescimento ilimitado de arquivos Dream** | #5630 (SOUL.md/USER.md sem size cap após regressão) | Média |

### Cenários de Uso Emergentes

- **Música com MiniMax** (#5212): Integração de guidance para geração musical
- **Heartbeat em sessão compartilhada** (#4551): Casos de uso onde contexto anterior é desejável
- **Streaming rich no Telegram** (#5614): Melhora experiência em canais de comunicação

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / PRs com conflitos prolongados

| Item | Idade Aprox. | Status | Ação Recomendada |
|---|---|---|---|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) — isolated_session config | ~70 dias | **Conflito** | Revisar conflitos; feature aparentemente madura |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) — MiniMax music | ~33 dias | **Conflito** | Resolver merge; pode desbloquear feature de música |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse para Codex | ~11 dias | **Conflito** | Resolver conflitos de merge |
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) — Ephemeral blocks | ~6 dias | **Aguardo** | PR #5627 em progresso; monitorar |

### Recomendações

1. **Urgent:** Review e merge de [#5633](https://github.com/HKUDS/nanobot/pull/5633) — fix de segurança (path traversal)
2. **Alta:** Resolver conflitos nos PRs [#5212](https://github.com/HKUDS/nanobot/pull/5212), [#5520](https://github.com/HKUDS/nanobot/pull/5520), [#4551](https://github.com/HKUDS/nanobot/pull/4551)
3. **Média:** Priorizar review de [#5403](https://github.com/HKUDS/nanobot/pull/5403) — fix crítico de token estimation

---

*Relatório gerado em 2026-09-03 com base em dados do GitHub HKUDS/nanobot. Timespan: últimas 24h.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-03

## 1. Panorama do Dia

O projeto Hermes Agent manteve um nível de atividade extremamente elevado nas últimas 24h, com 100 operações (50 issues + 50 PRs) atualizadas. Desse total, 38 issues permanecem abertas e 21 PRs foram merged ou fechados, indicando uma cadência de integração substancial. Não houveram novos lançamentos, mas a taxa de fechamento de PRs (~42% do volume diário) sugere que a equipe está ativamente consolidando contribuições. A base de issues abertas permanece em torno de 1.000+, problema já reconhecido pela comunidade. Bugs P1 relacionados a sessões, conexões remotas e estabilidade de desktop dominam o radar de urgência.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões desde o último período analisado. O último lançamento confirmado é o **v0.21.0** (referenciado em issues de bug reportadas).

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged ou fechadas** hoje, representando avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#101652](https://github.com/NousResearch/hermes-agent/pull/101652) | perf(cron): bound lifecycle guard scan work | **Performance crítica** — Eliminou hold do GIL por minutos ao escanear scripts referenciados; agora limitado a 256 KiB/4.096 linhas/32 KiB por linha |
| [#83821](https://github.com/NousResearch/hermes-agent/pull/83821) | perf(cron): bound lifecycle guard scan work | Complemento de performance do lifecycle guard; reduz escaneamento whole-walk |
| [#101662](https://github.com/NousResearch/hermes-agent/pull/101662) | fix(terminal): keep statement after backgrounded compound valid — remote kernel spawn | **P1** — Corrige falha de spawn de kernel persistente em Docker/SSH/Modal; `A && B & C` não gera mais syntax error |
| [#101665](https://github.com/NousResearch/hermes-agent/pull/101665) | fix(recovery): never report mis-mapped lost_and_found salvage as verified | **Sessões** — Recuperação não mente mais sobre salvamentos de colunas mal mapeadas |

**Destaque de progresso:** A equipe demonstrou foco em performance de cron jobs e estabilidade de execução remota — dois vetores com histórico de reclamações da comunidade.

---

## 4. Temas Quentes da Comunidade

As issues com maior engajamento (comentários) refletem problemas recorrentes e debates arquiteturais:

### 🔥 Maior volume de discussão

1. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** — *"Automated Nous integration is blocked"* — **56 comentários**
   - Integração agendada Nous→Enterkey com conflitos em `cron/jobs.py`; dashboard updater defasado
   - Sinais de fricção entre branches e pipelines de release

2. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)** — *"Bot Group Chats should keep working after Desktop closes"* — **23 comentários**
   - Feature de group chat multi-gateway em desenvolvimento ativo; gateway-owned authority e scoped transport já em `main`
   - Usuários pedindo continuidade de bots após fechar Desktop

3. **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111)** — *"[RFC] RealtimeVoiceProvider ABC"* — **21 comentários**, 👍 2
   - Quatro PRs competindo para implementar duplex-voice; pedido da comunidade para ABC + orchestrator em vez de merge queue

4. **[#7335](https://github.com/NousResearch/hermes-agent/issues/7335)** — *"More than 1000 open issues"* — **15 comentários** (CLOSED)
   - Meta-issue reconhecendo crescimento da backlog; comunidade discutindo estratégias de controle

### 📊 Análise de demanda

- **Sessões e sessões multi-surface**: 4+ issues com o tema "live owner", duplicação de histórico, corruption
- **Execução remota**: SSH/Docker/Modal kernel spawn com problemas recorrentes
- **Desktop Electron**: System tray, bot default inacessível, project delete não funcional
- **Cron jobs**: Performance, continuity, output file injection com bugs conhecidos

---

## 5. Bugs e Estabilidade

### 🔴 P1 (Críticos — fechar urgente)

| Issue | Título | Status | Detalhes |
|-------|--------|--------|----------|
| [#100327](https://github.com/NousResearch/hermes-agent/issues/100327) | Background pollers storm reaped sessions with 4001s (7.905 rejeições em ~4h) | **CLOSED** | Windows 11, 10 profiles, tempestade de polling |
| [#98222](https://github.com/NousResearch/hermes-agent/issues/98222) | execute_code remote kernel spawn fails on Docker/SSH/Modal | **CLOSED** | `_rewrite_compound_background` corrompia comandos |
| [#100313](https://github.com/NousResearch/hermes-agent/issues/100313) | state.db corruption at cron run dispatch | **CLOSED** | WAL mode com writers concorrentes; auto-salvage recuperou 15.325 mensagens |

### 🟠 P2 (Altos — impactar muito)

| Issue | Título | Area | Link |
|-------|--------|------|------|
| LLM stream cancellation | Bug: Hermes Client cancels local LLM streams after ~1.5s | streaming/ollama | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) |
| TUI uppercase | TUI Ink lowercases Shift+letter em Ghostty macOS | tui | [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) |
| GitHub 401 | hermes update: fast-401 em anonymous protocol-v2 POST | install/update | [#101584](https://github.com/NousResearch/hermes-agent/issues/101584) |
| Protected instruction | Approval card mostra só label, nunca o payload | gateway | [#101655](https://github.com/NousResearch/hermes-agent/issues/101655) |
| SQLite lock | Context compression hold SQLite write lock 25-140s | compression | [#90173](https://github.com/NousResearch/hermes-agent/issues/90173) |
| Session live owner | "Session already has a live owner" em toda nova sessão | desktop | [#101416](https://github.com/NousResearch/hermes-agent/issues/101416) |
| /v1/responses duplicate | Conversas nomeadas duplicam stored history (2 turns → 8 msgs) | gateway | [#101644](https://github.com/NousResearch/hermes-agent/issues/101644) |
| SSH backend re-upload | Re-uploads ~/.hermes em cada comando cold shell | backend/ssh | [#101646](https://github.com/NousResearch/hermes-agent/issues/101646) |

### 🟡 P3 (Médios)

- **System tray** para background running no Desktop ([#38007](https://github.com/NousResearch/hermes-agent/issues/38007)) — 👍 13, maior apoio de thumbs-up
- **Streaming tool_call truncation** — cap/spill para payloads grandes ([#89245](https://github.com/NousResearch/hermes-agent/issues/89245))
- **Homebrew detection** — fórmula oficial classificada como unknown ([#101676](https://github.com/NousResearch/hermes-agent/issues/101676))

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas features em discussão

| Issue | Título | Sinais de roadmap |
|-------|--------|-------------------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats after Desktop closes | **Alta prioridade** — foundation já em main; trabalho de produção em andamento |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | RealtimeVoiceProvider ABC | **Arquitetural** — necessidade de interface para 4 PRs duplex-voice concorrentes |
| [#38007](https://github.com/NousResearch/hermes-agent/issues/38007) | System tray for background running | **Desktop** — 13 👍, demanda clara por cold start avoidance |
| [#55170](https://github.com/NousResearch/hermes-agent/pull/55170) | feat(web): improve models fallback management | **Dashboard** — fallback chain panel para providers; API backendnova |

### 📌 Sinais de tendência

- **Multi-gateway / Bot Group Chats**: Evolução clara do produto para cenários VPS/homelab
- **Provider abstraction**: ABC para voice providers espelha padrão já usado para memory backends
- **Profile multiplexing**: Suporte a `${VAR}` em configs de terminal, indicando maturidade de multi-profile

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

1. **Estabilidade de sessões no Desktop** — Usuários Windows reportam "live owner" constante, pollers storm, e default bot inacessível. O desktop é a principal superfície de uso e apresenta fricção significativa.

2. **Execução remota quebrada** — Docker/SSH/Modal para `execute_code` falha consistentemente; kernel persistente não spawna. Usuários que dependem de backends remotos estão bloqueados.

3. **Cron job pitfalls** — Continuity não funciona (output file truncated), lifecycle guard escaneia demais, e continuity injection causa nesting de prompts.

4. **Update/install fragilidade** — `hermes update` falha em VPS (datacenter IPs com 401), Windows handoff races, e Homebrew detection broken.

### Satisfação observada

- **Performance wins reconhecidos**: PRs #101652 e #83821 (lifecycle guard bounds) devem reduzir frustração de cron users
- **Recuperação de banco robusta**: Auto-salvage de 15.325 mensagens em #100313 demonstra resiliência
- **Suporte a providers múltiplos**: Dashboard de fallback chain (#55170) responde a demanda de flexibilidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Título | Idade | Prioridade | Riscos |
|-------|--------|-------|------------|--------|
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | More than 1000 open issues | ~5 meses | Meta | Governança, saúde do projeto |
| [#38007](https://github.com/NousResearch/hermes-agent/issues/38007) | System tray support | ~3 meses | P3 | Desktop UX, retenção de usuários |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | RealtimeVoiceProvider ABC | ~2 meses | P3 | Arquitetura,tech debt se não resolvido |
| [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | LLM stream cancellation ~1.5s | ~18 dias | P2 | Produtividade, UX streaming |
| [#101627](https://github.com/NousResearch/hermes-agent/issues/101627) | Fake iOS apps / Request for official iOS client | Hoje | Meta | Marca, segurança |

### PRs aguardando review

| PR | Título | Age | Prioridade |
|----|--------|-----|------------|
| [#55170](https://github.com/NousResearch/hermes-agent/pull/55170) | feat(web): improve models fallback management | ~2 meses | P3 |
| [#101435](https://github.com/NousResearch/hermes-agent/pull/101435) | fix(bot-mode): preserve cross-gateway reply completion | Hoje | P2 |
| [#99298](https://github.com/NousResearch/hermes-agent/pull/99298) | fix(cron,tui): giant-line tokenizer cap + orphan tool-result backfill | ~3 dias | P2 |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues abertas totais | ~1.000+ | Acima do ideal; necessidade de triagem |
| PRs fechados (24h) | 21/50 (42%) | Bom fluxo de integração |
| P1 fechadas (24h) | 3/3 | Resposta rápida a críticos |
| Novas releases (24h) | 0 | Sem release, mas trabalho acumulado em PRs |
| Feature requests com 👍 altos | 1 (#38007, 13 👍) | System tray com demanda clara |
| Problema crônico | 1.000+ issues | Necessita ação de governança |

**Veredicto**: O projeto está em modo de **alta atividade com pressão de manutenção**. Bugs críticos estão sendo fechados rapidamente, mas a base de issues abertas cresce. A atenção da equipe deve balancear cierre de bugs urgentes com evolução de features (Group Chats, voice ABC, system tray) e governança da backlog.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data de referência: 2026-09-03

---

## 1. Panorama do dia

O projeto PicoClaw apresenta baixa atividade no período de 24 horas encerrado em 2026-09-03. Foram registradas **1 issue aberta** e **2 pull requests fechadas**, sem novos lançamentos. A atividade concentrou-se no ecossistema QQ Channel, com a conclusão de melhorias no parsing de anexos e uma issue aberta reportando falha de autenticação via websocket. O volume moderado de atividade indica um fase de estabilização, com a equipe focando em resolver pendências remanescentes antes de novos ciclos de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões neste período. A ausência de lançamentos sugere que a equipe está em transição entre ciclos de desenvolvimento ou realizando testes de validação antes da próxima disponibilização.

---

## 3. Progresso do projeto

### PRs fechadas/merged recentemente

**#1349 — feat(qq): suporte a parsing e resposta de mais tipos de anexos**  
🔗 [sipeed/picoclaw PR #1349](https://github.com/sipeed/picoclaw/pull/1349)  
- **Autor:** aishannon  
- **Criado:** 2026-03-11 | **Atualizado:** 2026-09-02  
- **Status:** Fechado

**Avanços entregues:**
1. Suporte a parsing de estruturas de emoji do QQ Channel
2. Tratamento de mensagens de voz, imagem, vídeo e arquivos recebidos via QQ Channel
3. Resposta com anexos locais (upload antes do envio)
4. Priorização de mensagens Markdown com fallback automático

**Impacto:** Esta PR representa uma evolução significativa na interoperabilidade com QQ Channel, expandindo a capacidade do bot de processar multimídia e melhorar a experiência de comunicação na plataforma.

---

**#3359 — feat(repository-reviews): enforce product and retention contracts**  
🔗 [sipeed/picoclaw PR #3359](https://github.com/sipeed/picoclaw/pull/3359)  
- **Autor:** dkropachev  
- **Criado:** 2026-09-02 | **Atualizado:** 2026-09-02  
- **Status:** Fechado

**Avanços entregues:**
- Reconstruibilidade dos Repository Reviews com contrato canônico de produto
- Taxonomia de recursos e referência de API limitada
- Regras de ciclo de vida/retenção e portões de aceitação determinísticos
- Projeções compactas estritas e propriedade de recursos (`rrw_*`, `rdf_*`, `rrf_*`)
- Compatibilidade `rfn_*` e governança de estrutura

**Impacto:** Introduz melhorias significativas na arquitetura de repository reviews, estabelecendo contratos mais rigorosos para reprodutibilidade e manutenibilidade do sistema.

---

## 4. Temas quentes da comunidade

### Issue em destaque

**#3349 — [BUG] QQ频道无法正常使用 (QQ Channel não funciona corretamente)**  
🔗 [sipeed/picoclaw Issue #3349](https://github.com/sipeed/picoclaw/issues/3349)  
- **Autor:** bxwl5  
- **Criado:** 2026-08-30 | **Atualizado:** 2026-09-02  
- **Comentários:** 2 | **Reações:** 0

**Resumo:** O usuário reporta falha de autenticação ao tentar usar QQ Channel tanto em versão Docker quanto Linux x86. O erro indica problema no header Authorization:

```
{"level":"error","component":"channels","channel":"qq","error":"failed to get websocket info: code:401, text:{\"message\":\"请求头Authorization参数格式错误\",\"code\":11241,\"err_code\":40011005,\"trace_id\":\"362f9cb61315dbe886b44b5bfca9cf99\"}"
```

**Análise:** O erro 401 com código 11241 sugere que o token de autenticação da API QQ Channel está mal formatado ou expirou. Este é um problema crítico para funcionalidade básica do canal. A issue permanece **aberta** há 4 dias, indicando possível necessidade de triagem pela equipe.

---

## 5. Bugs e estabilidade

### Issues abertas (1)

| # | Severidade | Título | Status | Dias aberto |
|---|-----------|--------|--------|-------------|
| #3349 | **Alta** | QQ频道无法正常使用 | ABERTA | 4 |

**#3349 — Falha de autenticação QQ Channel (Alta severidade)**  
- **Comportamento:** Erro 401 ao obter websocket info
- **Impacto:** Bloqueia uso do canal QQ
- **Afeta:** Docker e Linux x86
- **Prioridade de resolução:** Alta — usuários reportam indisponibilidade do canal

---

## 6. Pedidos de features e sinais de roadmap

### Análise das PRs fechadas como indicadores de roadmap

**Da PR #1349 — Sinais de roadmap para QQ Channel:**
- Funcionalidades implementadas podem indicar prioridade da equipe em melhorar suporte multimídia
- A estratégia de fallback (Markdown → texto simples) sugere foco em compatibilidade

**Da PR #3359 — Sinais de arquitetura:**
- Ênfase em "reconstruibilidade" e "contratos determinísticos" indica foco em qualidade e manutenibilidade
- Governança de estrutura reforçada para recursos internos

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| Falha de autenticação QQ Channel | Usuários não conseguem usar docker nem Linux x86 | **Alta** |

**Cenário de uso afetado:** Usuários que dependem de integração com QQ Channel para automação de comunidades ou bots de comunicação.

**Satisfação geral:** Indeterminada — a ausência de reações e comentários limitados indica base de usuários pequena ou passiva.

---

## 8. Backlog que merece atenção

### Issues sem resposta há >7 dias

| # | Tipo | Título | Dias sem resposta | Prioridade |
|---|------|--------|-------------------|------------|
| #3349 | BUG | QQ频道无法正常使用 | ~4 dias | **Alta** |

**Recomendação:** A issue #3349 requer atenção imediata da equipe de manutenção. O problema de autenticação pode indicar:
1. Mudança na API do QQ Channel não documentada
2. Necessidade de atualização de dependência
3. Problema de configuração que precisa de documentação

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues abertas (24h) | 1 | 🟡 Neutro |
| PRs fechadas (24h) | 2 | 🟢 Positivo |
| Releases (24h) | 0 | 🟡 Neutro |
| Bug crítico aberto | 1 | 🔴 Atenção |

**Veredicto geral:** O projeto encontra-se em estado de baixa atividade com um problema crítico em aberto que afeta a funcionalidade principal de um canal. A resolução do bug #3349 deve ser priorizada.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-03

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** na data de hoje, com 12 issues e 30 PRs atualizados nas últimas 24 horas. A equipe está fortemente concentrada em **dívida técnica de tipagem TypeScript**, com pelo menos 5 issues dedicadas à remoção de `@ts-nocheck` e 3 PRs de refatoração de tipos em andamento. No front de infraestrutura, há progresso significativo em CI/CD (otimização de cold-compilation) e na unificação do transporte de eventos da WebUI. O volume de dependências atualizadas (múltiplos PRs com 17-19 atualizações) indica manutenção ativa do ecossistema. A ausência de novas releases sugere que o ciclo de lançamento está em fase de estabilização ou preparação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões hoje. Isso é consistente com o padrão observado: as atividades mais recentes envolvem merge de PRs de feature (como #8006 - progressive replies e Slack) e otimização de CI, indicando preparação para um próximo ciclo de release.

---

## 3. Progresso do Projeto

### PRs Merged/Feichadas Hoje

| # | Título | Escopo | Impacto |
|---|--------|--------|---------|
| [#8050](https://github.com/nearai/ironclaw/pull/8050) | `ci: stop cold-compiling every Reborn lane` | CI/CD | Redução drástica de tempo de compilação em lanes de teste |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | `feat(channels): add durable progressive replies and native Slack Agent UI` | Channels | Interface nativa Slack e sistema de replies progressivos |
| [#8042](https://github.com/nearai/ironclaw/pull/8042) | `fix(cli,ci): keep serve alive, bind before banner, judge only named mutants` | CLI/CI | Correção de flakes em merge-queue e smoke tests |
| [#8003](https://github.com/nearai/ironclaw/pull/8003) | `chore(deps): bump everything-else group (17 updates)` | Dependencies | Atualizações de uuid, base64, toml e outros |
| [#8017](https://github.com/nearai/ironclaw/pull/8017) | `Adopt shared form and feedback components in Extension Configure` | WebUI | Migração para componentes compartilhados |
| [#8019](https://github.com/nearai/ironclaw/pull/8019) | `Migrate Automations status banners to InlineNotice` | WebUI | Padronização visual |
| [#8020](https://github.com/nearai/ironclaw/pull/8020) | `Use shared SearchField for Workspace and Logs filters` | WebUI | Consolidação de componentes |
| [#8018](https://github.com/nearai/ironclaw/pull/8018) | `Replace native SettingsField controls with shared Input/SelectMenu` | WebUI | Unificação de controles |

**Destaque principal:** O PR [#8006](https://github.com/nearai/ironclaw/pull/8006) implementa **replies progressivos duráveis** e **interface nativa Slack Agent UI**, um marco significativo para integração de canais. Combinado com [#8051](https://github.com/nearai/ironclaw/pull/8051) (em aberto, corrigindo concatenação de replies), o sistema de mensagens está amadurecendo.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Relevância

| # | Título | Status | Prioridade | Comentários |
|---|--------|--------|------------|-------------|
| [#8041](https://github.com/nearai/ironclaw/issues/8041) | Tool failure com kind incorreto envia modelo para estado irrecuperável | OPEN | Crítica | 0 |
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI backends não enviam prompt_cache_key (~82%→29% cache-hit) | OPEN | **P2** | 0 |
| [#8032](https://github.com/nearai/ironclaw/issues/8032) | Eliminar @ts-nocheck debt do WebUI v2 (170 arquivos, 61.800 linhas) | OPEN | Alta | 0 |

### Análise de Demandas

**1. Bug Crítico de Recovery (#8041)**
> "A tool failure whose kind is wrong sends the model somewhere it cannot recover"

Este issue aborda um problema fundamental de robustez: quando `FailureKind` é incorreto, o modelo entra em estado inconsistente. O PR [#7985](https://github.com/nearai/ironclaw/pull/7985) já trata problema similar no `NativeMemoryService::read`. Este é um **pattern bug** que pode afetar múltiplos serviços.

**2. Degradação de Performance em Cache (#7921)**
> "OpenAI-family backends send no prompt_cache_key — measured ~82%→29% cache-hit collapse"

Bug de **performance severo** (P2) identificado por `henrypark133`. O cache-hit cai de 82% para 29% após ~200 chamadas em backends OpenAI-family. O PR [#8044](https://github.com/nearai/ironclaw/pull/8044) está em aberto para corrigir isso.

**3. Dívida Técnica de Tipagem (#8032)**
> "170 files with @ts-nocheck, ~61,800 lines of TypeScript, ~1,354 diagnostics"

A equipe está atacando agressivamente a dívida técnica. Há **5 issues relacionadas** e **3 PRs de refatoração** em paralelo, indicando priorização clara.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Bugs)

| # | Severidade | Título | Resumo |
|---|------------|--------|--------|
| [#8041](https://github.com/nearai/ironclaw/issues/8041) | **Crítica** | Tool failure recovery | Modelo entra em estado irrecuperável com FailureKind incorreto |
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | **Alta** (P2) | Cache-hit collapse OpenAI | 53 pontos percentuais de degradação de cache |
| [#7991](https://github.com/nearai/ironclaw/issues/7991) | Média | Pre-push CI não funciona em macOS | `readlink -m` é GNU-only |

### PRs em Desenvolvimento (Fixes)

| # | Escopo | Descrição |
|---|--------|-----------|
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | memory | Missing document = domain failure, não malformed request |
| [#7989](https://github.com/nearai/ironclaw/pull/7989) | coding | `list_dir` agora reporta o path que falhou |
| [#8045](https://github.com/nearai/ironclaw/pull/8045) | ci | Wait for CLI listener readiness em smoke tests |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | llm | Cache-gate novas famílias Claude; send prompt_cache_key no OpenAI Responses |

**Métricas de Estabilidade:** 5 issues fechadas nas últimas 24h indicam correção ativa. No entanto, o bug de cache (#7921) e o de recovery (#8041) requerem atenção prioritária antes do próximo release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#8051](https://github.com/nearai/ironclaw/pull/8051) | fix(reply): answer é apenas texto da chamada atual | Channels | OPEN |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | Session-event transport + web-app run notifications | WebUI | OPEN |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | Subagent approval/auth gate reach owner's inbox | Subagents | OPEN |

### Sinais de Roadmap

1. **Unificação de Transporte (#8010):** Implementa design document `docs/internal/design/2026-08-13-webapp-run-notifications.md` com SSE multiplexado e autenticação bearer. Este é um **arcabouço de infraestrutura** que pode habilitar múltiplas features futuras.

2. **Subagent Visibility (#8046):** "A child's approval/auth gate reaches the owner's inbox" — indica evolução do sistema de subagentes com melhor UX de aprovação.

3. **WebUI v2 Type Safety:** A remoção massiva de `@ts-nocheck` (170→0) prepara o terreno para:
   - Melhor DX com autocomplete
   - Refactoring mais seguro
   - Possível API pública ou plugin system

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback direto de usuários** nas issues ou PRs mais recentes (0 comentários/Reações nas issues listadas).

**Sinais inferidos de comportamento de issues:**

| Padrão | Interpretação |
|--------|---------------|
| Issues de UI component migration (#8017-#8020) | Usuários experienciam inconsistência visual entre páginas |
| Bug de tool failure recovery (#8041) | Usuários encontram loops infinitos ou dead ends em agentes |
| Performance issue de cache (#7921) | Usuários com alto volume de chamadas observam custos elevados |

**Observação:** A baixa contagem de reações/comentários pode indicar:
- Projeto ainda em fase de adoção inicial
- Usuários reportamvia canais externos
- Comunidade ativa em discussões síncronas (Discord/Slack)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Idade | Prioridade | Status |
|---|--------|-------|------------|--------|
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI cache-hit collapse (~82%→29%) | 7 dias | **P2** | OPEN |
| [#7971](https://github.com/nearai/ironclaw/issues/7971) | Render model capability tags | 6 dias | Média | CLOSED |

### PRs Abandonados ou Sem Progresso

| # | Título | Idade | Bloqueios |
|---|--------|-------|-----------|
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | fix(memory): missing document domain failure | 6 dias | Aguardando review |
| [#7991](https://github.com/nearai/ironclaw/pull/7991) | fix(ci): pre-push não funciona em macOS | 5 dias | Aguardando review |
| [#7989](https://github.com/nearai/ironclaw/pull/7989) | fix(coding): list_dir naming | 5 dias | Aguardando review |

### Recomendações Prioritárias

1. **Revisar #7921** — O bug de cache representa impacto financeiro direto para usuários com alto volume
2. **Revisar PRs do `standardtoaster`** — 3 PRs abertos há 5-6 dias com correções de robustez
3. **Unificar review dos PRs de tipagem** — [#8039](https://github.com/nearai/ironclaw/pull/8039), [#8038](https://github.com/nearai/ironclaw/pull/8038), [#8040](https://github.com/nearai/ironclaw/pull/8040) podem ter dependências cruzadas

---

## Métricas Resumidas (2026-09-03)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 7 |
| Issues fechadas | 5 |
| PRs abertos | 20 |
| PRs merged/fechados | 10 |
| Novas releases | 0 |
| Bugs críticos abertos | 1 (#8041) |
| Issues P2 em aberto | 1 (#7921) |
| PRs aguardando review >5 dias | 3 |

**Saúde Geral:** 🟢 **Estável** — Atividade alta, dívida técnica sendo atacada ativamente, bugs críticos identificados com fixes em desenvolvimento.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-03

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** em 2026-09-03, com 26 issues e 40 PRs atualizados nas últimas 24h. A comunidade está focada na estabilização da versão beta 2.2.0, com lançamento da beta.7 e múltiplos bugs críticos sendo reportados — especialmente relacionados a memória (ReMe), cron jobs, streaming e conectividade de modelos. A taxa de PRs abertos (27) versus fechados (13) sugere volume significativo de contribuições em progresso.

---

## 2. Lançamentos

### v2.2.0-beta.7 Released ✅

| Item | Detalhes |
|------|----------|
| **Link** | https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7 |
| **Status do Release Duty** | https://github.com/agentscope-ai/QwenPaw/issues/7503 |

**Mudanças incluídas:**

| PR | Descrição | Autor |
|----|-----------|-------|
| [#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465) | Normalização de dimensões de embedding para backends específicos | @jinliyl |
| [#7485](https://github.com/agentscope-ai/QwenPaw/pull/7485) | Bump de versão para v2.2.0b7 | @cuiyuebing |
| [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) | Dark-mode overrides para MCP section containers (WebUI) | @Marlin-Phone |

**Breaking Changes:** Nenhuma identificada nesta release.

**Notas de Migração:** Nenhuma mudança de API pública documentada.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) | fix(webui): add dark-mode overrides for MCP section | **UI/UX** — Corrige renderização branca em dark mode |
| [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) | fix(desktop): preserve PyInstaller multiprocessing runtime hook | **Estabilidade Desktop** — Corrige crash ao usar StdIO MCP no macOS |
| [#7508](https://github.com/agentscope-ai/QwenPaw/pull/7508) | feat(skill): Update make-skill to v2 | **Workflow** — Workflow de criação de skills v2 (draft) |

### PRs Abertos em Review

| PR | Título | Estágio |
|----|--------|---------|
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | fix(acp): prevent Windows ACP agent stalls | **Under Review** — Corrige hang de minutos no bootstrap |
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) | fix(providers): coerce string-typed tool args | **Under Review** — Validação de tipos em ferramentas |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat: add reranker UI config panel | **Under Review** — UI para configurar reranker |

### PRs em Destaque (Novos)

| PR | Título | Área |
|----|--------|------|
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | fix(mcp): enforce per-tool whitelist on agent runtime | **Segurança** — Corrige ferramentas MCP desabilitadas ainda executáveis |
| [#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) | fix(providers): forward OpenAI extra_headers | **Providers** — Propaga headers customizados em testes de conexão |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | feat(console): redesign sidebar and settings | **UI/UX** — Redesenho da experiência de navegação |
| [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | feat: add agent model routing settings | **Core** — Configuração de fallback models e sub-agent models |
| [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | feat(creator) 1.1.2: runtime notification bus, multi-timeline | **Plugins** — Creator app-plugin com notificações async |
| [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | feat(skill): Update make-skill to v2 | **Skills** — Workflow approval-driven para criar skills |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console stream mostra chunks duplicados em stream SSE | 6 | Bug |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Agente principal não consulta status dos sub-agentes proativamente | 6 | Bug |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Instruções perigosas conseguem evadir facilmente | 5 | Bug |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe embedding job falha silenciosamente (dependency accessed before start) | 4 | Bug |

**Análise das Demandas:**

1. **Problemas de Streaming (#7417):** Usuários reportam chunks duplicados e texto consolidado no final. Afeta experiência em tempo real.
2. **Orchestração Multi-Agent (#7450):** Padrão "main agent + sub-agents" não atualiza status proativamente — agentes ficam "silenciosos" até o usuário perguntar.
3. **Segurança (#7443):** Instruções perigosas conseguem evadir — prioridade alta para governança.
4. **Memória Assíncrona (#7469):**后台 embedding job falha silenciosamente; memória de longo prazo não funciona corretamente.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| # | Título | Área | Atualizado |
|---|--------|------|------------|
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Instruções perigosas evadem facilmente | Governance | 2026-09-02 |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe embedding fails before start() | ReMe/Memory | 2026-09-02 |
| [#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) | Regras CRITICAL não aguardam aprovação, são rejeitadas | Governance | 2026-09-02 |

### 🟠 Altos

| # | Título | Área | Atualizado |
|---|--------|------|------------|
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console stream com chunks duplicados | WebUI | 2026-09-02 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Main agent não consulta sub-agents proativamente | Orchestration | 2026-09-02 |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | Contexto longo perde registros iniciais | Context/Memory | 2026-09-02 |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | ReMe /memory/status retorna 500 na v2.2.0-beta.7 | API | 2026-09-02 |

### 🟡 Médios

| # | Título | Área | Atualizado |
|---|--------|------|------------|
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Cron tasks duplicados (misfire) | Scheduler | 2026-09-02 |
| [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | Cron não planejado após upgrade; tarefas cancelled não enviam inbox | Scheduler | 2026-09-02 |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | LAN LLM server com client disconnect frequente | Connectivity | 2026-09-02 |
| [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | WeCom channel streaming lento (150ms throttle) | Channels | 2026-09-02 |

### 🟢 Baixos / UI

| # | Título | Área | Atualizado |
|---|--------|------|------------|
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Custom provider falha após PR #7337 (max_tokens → max_output_length) | Config | 2026-09-02 |
| [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) | Agent model routing panel inacessível no Console | UI | 2026-09-02 |
| [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | DashScope embedding index sempre "unsaved" | Config | 2026-09-02 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| # | Título | Demanda | Área |
|---|--------|---------|------|
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | Suporte A2A no QwenPaw 2.x? | 2 comentários | Protocol |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | Theming support (accent color, font, spacing) | 1 comentário | UI/UX |
| [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) | Comandos com erro de digitação não deveriam ser encaminhados ao agent | 1 comentário | Channels |

### Sinais de Roadmap Observados

| PR | Título | Implicação |
|----|--------|------------|
| [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | Agent model routing settings | **Próximo release** — Configuração de fallback models e sub-agent models |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | Redesign sidebar and settings | **UI** — Nova experiência de navegação no Console |
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | Per-tool whitelist enforcement | **Segurança** — MCP tools desabilitadas não deveriam ser chamadas |
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | A2A support question | **Roadmap questionado** — MCP já suportado, A2A pendente |

**Análise:** A equipe está trabalhando em model routing e sidebar redesign, sugerindo foco em usabilidade e flexibilidade de modelos na próxima release stable.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade de Memória** | ReMe embedding fails silently; contexto longo perde registros | ⭐⭐⭐⭐ Alta |
| **Cron Jobs** | Tarefas duplicadas, não disparadas após upgrade, estado "stuck" | ⭐⭐⭐⭐ Alta |
| **Conectividade LAN** | Client disconnect frequente com LLM servers locais | ⭐⭐⭐ Média |
| **Streaming** | Duplicação de chunks SSE no Console | ⭐⭐⭐ Média |
| **Multi-Agent** | Agentes "silenciosos" sem atualização proativa | ⭐⭐⭐ Média |
| **Governança** | Instruções perigosas evadem; regras CRITICAL não funcionam | ⭐⭐⭐⭐⭐ Crítica |

### Cenários de Uso Reportados

1. **Uso Corporativo/Agentes:** Usuários relatam problemas com arquiteturas main-agent + multi-sub-agent para tarefas complexas.
2. **Desenvolvimento Local:** Integração com LM Studio e outros servidores locais apresenta instabilidade.
3. **Desktop App:** Problemas específicos com PyInstaller e multiprocessing no macOS.

### Satisfação Geral

**Neutro a Negativo** — Múltiplos bugs críticos embeta.7, especialmente em governança e memória. Usuários experientes reportam trabalho-arounds manuais (ex: compressão de contexto manual).

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou em Espera

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | harnesses/codex: resposta vazia com gateway específico | 2026-08-31 | 2 | 🟠 Alta |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | Theming support request | 2026-08-30 | 1 | 🟡 Média |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI config panel | 2026-07-23 | N/A | 🟡 Média |

### PRs Long-Running

| # | Título | Criado | Status | Notas |
|---|--------|--------|--------|-------|
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) | Coerce string-typed tool args | 2026-08-12 | Under Review | Desde ago/12 |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Import flow from Codex/Qoder | 2026-08-13 | Open | Import feature |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI panel | 2026-07-23 | Under Review | Desde jul/23 |

### Recomendações

1. **Governança (#7443, #7496):** Bugs de segurança críticos precisam de triagem imediata.
2. **Cron Scheduler (#7476, #7480):** Problemas recorrentes indicam necessidade de refatoração do scheduler.
3. **ReMe Memory (#7469, #7510):** Sistema de memória assíncrono precisa de revisão de ciclo de vida (start/shutdown).
4. **PR #6399:** UI de reranker aberta desde jul/23 — revisar ou fechar.

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 17 |
| Issues fechadas | 9 |
| PRs abertos | 27 |
| PRs fechados/merged | 13 |
| Releases | 1 (v2.2.0-beta.7) |
| Bugs críticos | 3 |
| Bugs altos | 4 |

**Saúde do Projeto:** ⚠️ **Atenção** — A versão beta.7 recém-lançada apresenta múltiplos bugs críticos não resolvidos, especialmente em governança de segurança, memória assíncrona e scheduler. A equipe demonstra alta produtividade (40 PRs/24h), mas a qualidade da release precisa de atenção antes da estabilização. Priorizar: segurança > scheduler > memória > streaming.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 2026-09-03

---

## 1. Panorama do Dia

ZeroClaw apresenta alta atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando intensa colaboração. Nenhum release foi publicado, sugerindo que a equipe está em ciclo de refinamento de PRs e revisão de RFCs. A maioria das discussions gira em torno de **arquitetura de sessões, políticas de sandbox e infraestrutura de channels**, com um bug crítico P0 (#10495) envolvendo risco de perda de dados na configuração. O projeto demonstra maturidade em governança (RFCs bem estruturados) mas enfrenta desafios de estabilidade em config e security policy.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O último ciclo de releases parece estar em preparação, dado o volume de RFCs em revisão avançada (Rev. 5 em #9487) e PRs de feature de grande porte aguardando merge.

---

## 3. Progresso do Projeto

A atividade de PRs revela movimentação significativa em **segurança, channels e runtime**:

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#10566](https://github.com/zeroclaw-labs/zeroclaw/pull/10566) | metalmon | Materializa conteúdo `type:image/audio` do MCP no pipeline multimodal | Melhora suporte a ferramentas visuais |
| [#10403](https://github.com/zeroclaw-labs/zeroclaw/pull/10403) | Aarlington | Preserva ambiente CLI Windows em provedores Claude/Codex/Gemini | Corrigência cross-platform |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | jstar0 | Autoriza responders em approvals de Telegram/Slack/Lark/Matrix | Segurança de channels |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | metalmon | Corrige classifier de risco para `git -C <path> <verb>` | Segurança de policy |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | Project516 | Expõe token accounting em history-trim events | Observabilidade |
| [#10524](https://github.com/zeroclaw-labs/zeroclaw/pull/10524) | jstar0 | Limita propriedades do schema de config root a 256 entries | Performance de plugins |

**PRs de destaque aguardando revisão:**
- [#9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) — Múltiplas conversas simultâneas por agente no web dashboard
- [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) — VoiceHost WebSocket bridge para audio
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — Context compaction baseado em ratio da janela do modelo

---

## 4. Temas Quentes da Comunidade

### RFCs com maior engajamento (discussão técnica)

| Issue | Título | Comentários | Status |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions e transport surface adapters | 32 | Proposed Rev.5 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy (filesystem/network) | 21 | In Progress |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class | 18 | No-stale |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC: Separate memory storage de enrichment connectors | 18 | Rev. maintainer takeover |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Tracker: Session-persistence contract ownership | 15 | Tracker |

**Análise:** A comunidade demonstra forte interesse em **desacoplamento de responsabilidades** (sessions, transports, storage), indicando uma tendência de evolução para arquitetura mais modular. A RFC #9487 em Revision 5 sinaliza consenso aproximado sobre ownership de sessões runtime.

### Trackers ativos
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Decision queue para RFCs e design issues (14 comentários)
- [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) — SOP authoring surface tracking (feat/sop-authoring)

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P0-P1)

| Issue | Severidade | Título | Status |
|---|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | **P0 - S0** | Config::save() substitui config.toml por arquivo quase-vazio | Accepted |
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | P1 - S0 | Delegates independents ignoram `block_high_risk_commands` | In Progress |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | P1 - S2 | Config flush pode sobrescrever escritas concorrentes | Accepted |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | P1 - S1 | Agentes param trabalho ao sair do chat web | In Progress |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | P1 - S0 | Matrix channel falha em resolver homeserver via .well-known | In Progress (Closed) |

**⚠️ Alerta:** Issue [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) representa **risco de perda massiva de dados** — uma configuração de 109KB com 25 agentes foi substituída por 702 bytes. Prioridade imediata recomendada.

### Bugs Importantes (P2)

| Issue | Título | Componente |
|---|---|---|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Session interativa cap em 32k tokens ignorando max_context_tokens | runtime/daemon |
| [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | MCP tool-result images retornam 400 em providers OpenAI-compatíveis | provider |
| [#10434](https://github.com/zeroclaw-labs/zeroclaw/issues/10434) | Deadlock guards em daemon startup sob carga paralela | ci/tests |

### Bugs resolvidos recentemente (Closed)
- [#10537](https://github.com/zeroclaw-labs/zeroclaw/issues/10537) — ZeroCode fresh sessions sobrescreviam workspace (P2)
- [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) — ZeroCode transcripts omitiam turns após history trimming (P2)
- [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456) — MCP SSE reader aceitava suffix após evento oversized (P2)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em discussão

| Issue | Título | Tags | Prioridade |
|---|---|---|---|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history + deterministic state replay | RFC, runtime | P2 |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | Expor progresso de sub-agentes ao parent (tool receipts, partial output) | delegate, observability | P2 |
| [#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) | Mapear MCP type:image em pipelines de visão | MCP, provider | P2 (Blocked) |

### Tendências de roadmap identificadas

1. **Arquitetura de sessões** — Multiple workstreams convergindo para ownership definido (#9600 tracker)
2. **Multimodalidade** — Materialização de imagens/áudio de MCP (#10566 PR, #9521)
3. **Voice/WebSocket** — VoiceHost bridge (#9740) e decoupling de WebSocket lifetime (#7759)
4. **Segurança reforçada** — Sandbox granular (#6996), browser enrollment (#10315)

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

**1. Stability do config system**  
Usuários reportam perda de configuração em cenários de teste (#10495), config init incompleto (#10147), e sobrescrita concorrente (#9284). O sistema de configuração precisa de atenção urgente.

**2. Experiência web/gateway**  
Exit de chat mata agentes em progresso (#8559). Falta de suporte a múltiplas conversas simultâneas (#9353 PR em aberto).

**3. Limites de contexto**  
Usuários avançados hit cap de 32k tokens mesmo com `max_context_tokens` maior (#10068). Incompatível com modelos de janela grande.

**4. Integração MCP**  
Provedores OpenAI-compatíveis rejeitam imagens de tools MCP (#10501). Falta de materialização de imagens na pipeline multimodal.

### Cenários de uso observados

- **ZeroCode/TUI:** Uso local com múltiplos workspaces
- **Matrix Channel:**部署 distribuído com homeserver discovery
- **Delegation:** Sub-agentes para tarefas complexas
- **Cron/Scheduling:**Automação de agents com gatilhos temporais

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Título | Idade | Motivo |
|---|---|---|---|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat: Hailo-Ollama native support | ~47 dias | Tagged `do-not-merge` |
| [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | CI: Rust toolchains 1.98.0 | ~36 dias | `needs-author-action` |
| [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) | fix(sop): headless SOP runs | ~26 dias | `needs-author-action` |
| [#10283](https://github.com/zeroclaw-labs/zeroclaw/pull/10283) | docs: Build Remote Agent phone pairing | ~11 dias | `needs-author-action` |

### RFCs pendentes de decisão

| Issue | Título | Comentários | Status |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned sessions (Rev.5) | 32 | Vote pending |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire protocol first-class | 18 | No-stale |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Memory storage separation | 18 | Maintainer revision |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 35 | ✅ Alta |
| PRs abertos (24h) | 45 | ✅ Alta |
| PRs merged (24h) | ~5 | ⚠️ Queda recente |
| Releases (24h) | 0 | ⚠️ Pipeline vazio |
| P0 bugs abertos | 1 | 🔴 Crítico |
| P1 bugs abertos | 4 | 🟡 Significativo |
| RFCs ativos | 8+ | ✅ Governança ativa |

---

**Gerado em:** 2026-09-03  
**Fonte:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*