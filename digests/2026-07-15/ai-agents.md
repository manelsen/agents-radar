# Resumo diário do ecossistema de agentes de IA 2026-07-15

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-14 20:54 UTC

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

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-15 | **Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source atravessa uma fase de **maturação operacional intensa**, com seis dos sete projetos demonstrrando atividade significativa nas últimas 24h. O NullClaw permanece inerte — uma anomalia que merece monitoramento. Os demais projetos convergem em três eixos estratégicos: **estabilidade multi-canal** (Telegram, Slack, DingTalk, Feishu), **gestão de memória e contexto** (compression, session bounds, provenance), e **segurança em sandbox e isolamento de tenants**. A ausência quase universal de releases formais no período sugere que a maioria das equipes está em ciclos de estabilização pré-lançamento. ZeroClaw destaca-se pelo progresso no milestone v0.8.3, enquanto CoPaw recém-lançou v2.0.0.post2 para corrigir regressões críticas. IronClaw lidera em volume de PRs de arquitetura de runtime unificado.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Atualizados (24h) | Releases (24h) | Bugs P1/S Críticos | Saúde Geral |
|---------|---------------------:|----------------------:|---------------:|-------------------:|-------------|
| **NullClaw** | 0 | 0 | 0 | N/A | 🔴 Inerte |
| **NanoBot** | 13 | 66 (18 open / 48 merged) | 0 | 2 abertas | 🟢 Saudável |
| **Hermes Agent** | 50 (17 open / 33 closed) | 50 (43 open / 7 merged) | 0 | 2 P1 em PR | 🟢 Muito ativo |
| **PicoClaw** | 3 | 9 (4 open / 5 merged) | 0 | 1 High (#3232) | 🟡 Moderado |
| **IronClaw** | 41 | 50 | 0 (PR #5598 pending) | 0 P1 | 🟢 Muito ativo |
| **CoPaw** | 50 (14 open / 36 closed) | 50 (23 open / 27 merged) | v2.0.0.post2 | 4 🔴 críticas | 🟠 Atenção |
| **ZeroClaw** | 37 | 50 (22 open / 28 merged) | 0 | 3 S0-S1 | 🟢 Próximo release |

**Observações:**
- **CoPaw** apresenta a maior severidade de bugs com 4 issues críticas abertas simultâneas (memory loop, DeepSeek session break, workspace loss)
- **IronClaw** e **ZeroClaw** lideram volume de PRs, indicando arquitetura em transformação ativa
- **NanoBot** tem o melhor ratio de merges (48/66 = 73%) demonstrando capacidade de resolução
- **NullClaw** requer investigação sobre razões da inatividade

---

## 3. Posicionamento do Projeto Principal

Considerando a atividade, maturidade e impacto da comunidade, os três projetos mais relevantes do ecossistema são **IronClaw**, **CoPaw** e **ZeroClaw**, cada um ocupando um nicho distinto:

### IronClaw — Plataforma de Runtime Unificado
**Vantagens técnicas:**
- Avanço mais significativo em arquitetura com o train de extension-runtime NEA-25 (9 fases)
- Implementação de ADR 0001 (múltiplas contas por vendor)
- Solução robusta de contenção SQLite/PostgreSQL com retry logic
- Framework MCP em desenvolvimento para extensibilidade third-party

**Comunidade:** ~91 atividades (issues + PRs) em 24h — maior volume absoluto

**Diferencial:** Foco em multi-tenant desde o design (VendorId, accounts list, RBAC implícito)

---

### CoPaw — Agente Desktop e GUI Automation
**Vantagens técnicas:**
-computer-use nativo via UIA + Tauri para Windows (#5187)
- Integração Langfuse para observabilidade enterprise (#5922)
- Ciclo de release ágil (v2.0.0 → v2.0.0.post1 → v2.0.0.post2 em ~4 dias)
- Zalo Bot como novo canal em desenvolvimento

**Comunidade:** 100 atividades (50 issues + 50 PRs) com 36 issues fechadas

**Diferencial:** Posicionamento explícito como desktop agent full-stack com automação GUI nativa

---

### ZeroClaw — Orquestração SOP e GitOps
**Vantagens técnicas:**
- Sistema SOP (Standard Operating Procedures) mais maduro do ecossistema
- Canal GitHub/Gitea com SOP ingress implementado (#8590, #8504)
- EPIC C de approval plane com fail-closed timeout
- RFC ativo para separação de conversation history de agent memory

**Comunidade:** 87 atividades com trackers v0.8.3 fechando (6/6)

**Diferencial:** Workflow automation orientado a procedimentos e integração DevOps

---

## 4. Focos Técnicos Compartilhados

Os sete projetos revelam necessidades técnicas que transcendem implementações específicas, indicando padrões de maturidade no domínio:

### 4.1 Gestão de Memória e Contexto
| Projeto | Problema | Status |
|---------|----------|--------|
| **NanoBot** | `Session.messages` grows unbounded — memory leak (#4787) | Aberto |
| **CoPaw** | Compression corrompe formato — tool messages órfãos (#6077) | Fix em review |
| **CoPaw** | Loop infinito de busca de memória (#6113) | Aberto |
| **ZeroClaw** | Cron jobs recall memory mesmo com `uses_memory=false` (#8695) | Aberto |

**Padrão:** Três de sete projetos enfrentam problemas similares de memory lifecycle management em sessões longas.

---

### 4.2 Estabilidade Windows e Sandbox
| Projeto | Problema | Status |
|---------|----------|--------|
| **NanoBot** | UTF-16 output corruption em PowerShell (#4881) | ✅ Corrigido |
| **Hermes Agent** | pythonw.exe necessário para background actions (#49352) | ✅ Corrigido |
| **CoPaw** | ACL pollution em `C:\` por sandbox AppContainer (#5829, #5951) | Aberto |
| **IronClaw** | LocalFilesystem falha com `fsync` em diretório (#6098) | PR aberto |
| **Hermes Agent** | uv trampoline canonicalize errors (#48414) | cannot-reproduce |

**Padrão:** Suporte Windows é consistentemente problemático, especialmente em operações de filesystem e sandbox.

---

### 4.3 Multi-Channel e Integrações
| Canal | Projetos Afetados | Tipo de Problema |
|-------|------------------|------------------|
| **Slack** | IronClaw (#6091, #6092), ZeroClaw (#6055) | Stuck states, thread context |
| **Telegram** | NanoBot (#2568, #4637), Hermes (#46470) | Markdown rendering, long messages |
| **DingTalk** | NanoBot (#4446), PicoClaw (#3255) | Private chats, message preview |
| **Feishu** | Hermes (#30990, #46470), PicoClaw (#3156) | Thread replies, Card 2.0 |
| **WhatsApp** | NanoBot (#1086), Hermes (#49242) | WebSocket binding, Node path |

**Padrão:** Cada projeto implementa integrações similarmente, mas bugs são altamente específicos ao canal.

---

### 4.4 Provider/OAuth Observabilidade
| Projeto | Demanda | Status |
|---------|---------|--------|
| **NanoBot** | OAuth status e expiry warnings (#4689) | PR conflituado |
| **NanoBot** | Codex OAuth vs API failure identification (#4929) | Merged |
| **Hermes** | Declarative `reasoning_effort_max` (#49355) | Merged |
| **ZeroClaw** | Provider diagnostics enterradas em retry envelope (#9001) | Aberto |
| **ZeroClaw** | Malformed tool-call args → 400 sem diagnóstico (#8675) | Aberto |

**Padrão:** Provider abstraction amadureceu, mas debugging/observability layers estão atrasadas.

---

### 4.5 Prompt Caching para Otimização de Custos
| Projeto | Implementação | Provider |
|---------|--------------|----------|
| **PicoClaw** | #3163 — Bedrock Converse prompt caching | AWS Bedrock |
| **PicoClaw** | #3228 — SystemParts como system blocks | Anthropic |
| **NanoBot** | #4549 — `model_override` para heartbeats baratos | Genérico |

**Padrão:** Prompt caching emerge como feature prioritária para redução de custos em produção.

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura e Público-Alvo

| Dimensão | IronClaw | CoPaw | ZeroClaw | NanoBot | Hermes | PicoClaw |
|----------|----------|-------|----------|---------|--------|----------|
| **Posicionamento** | Enterprise multi-tenant | Desktop automation | DevOps/GitOps | Hobbyist/Dev | Generalist | IoT/Bridge |
| **Linguagem** | Rust | Python | Go | Python | Python | Go |
| **Extensibilidade** | MCP framework | Plugin system | SOP engine | Channels | Providers | Channels |
| **Diferencial principal** | Runtime unificado v1→v2 | GUI automation | Workflow automation | Cron/triggers | Multi-provider | Feishu/Pico native |

---

### 5.2 Por Estágio de Maturidade

```
Jovem          ▸███████████████████████▸          Maduro
               │                        │
         ┌─────┴─────┐           ┌─────┴─────┐
         │  CoPaw    │           │ IronClaw  │
         │ (regressões)          │ (refactoring)
         └───────────┘           └───────────┘
         
         ┌─────────────────────┴─────────────────────┐
         │           ZeroClaw                          │
         │      (próximo release: 0.8.3)              │
         └────────────────────────────────────────────┘
         
         ┌─────────────────┐     ┌─────────────────┐
         │    NanoBot      │     │  Hermes Agent   │
         │ (estável, UX)  │     │ (estável, bugs) │
         └─────────────────┘     └─────────────────┘
         
         ┌──────────┐           ┌────────────┐
         │ PicoClaw │           │  NullClaw  │
         │(niche IoT)│          │  (inerte)  │
         └──────────┘           └────────────┘
```

---

### 5.3 Por Estratégia de Canais

| Estratégia | Projetos | Características |
|------------|---------|-----------------|
| **Hub-and-spoke** | NanoBot, Hermes, PicoClaw | Unificação de canais via adapters |
| **Platform-first** | CoPaw | Desktop como plataforma primária |
| **Event-driven** | ZeroClaw | SOPs como primitivo de integração |
| **Runtime-native** | IronClaw | Extensões como parte do runtime |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | NanoBot | Hermes | IronClaw | CoPaw | ZeroClaw |
|---------|---------|--------|----------|-------|----------|
| **Issues fechadas (24h)** | 10 | 33 | ~30 | 36 | ~28 |
| **Taxa de resolução** | 77% | 66% | ~73% | 72% | 76% |
| **Tempo médio de resposta** | <1 dia | <1 dia | <1 dia | <1 dia | <1 dia |
| **PRs conflituados** | 6 | N/A | 2 (rollups) | N/A | N/A |

**Leitura:** Projetos com alta taxa de resolução (>70%) demonstram maintainer teams responsivos. O backlog de PRs conflituados no NanoBot (#4928, #4689, #4621, #4549) é anomalously alto e pode indicar falta de reviewers ou complexidade de integração.

---

### 6.2 Engajamento Comunitário

| Projeto | Issue com maior discussão | Comentários | Tipo |
|---------|---------------------------|-------------|------|
| **CoPaw** | #2291 — Help Wanted: Open Tasks | 64 | Meta/contribuição |
| **ZeroClaw** | #5982 — Per-sender RBAC | 10 | Feature request |
| **Hermes** | #49297 — Bug gemma4/Ollama | 8 | Bug recorrente |
| **PicoClaw** | #3088 — libolm→vodozemac | 8 | Feature security |
| **NanoBot** | #2568 — Telegram regression | 4 | Bug regression |

**Leitura:** CoPaw tem a comunidade mais engajada em términos de volume de discussão. ZeroClaw demonstra demanda enterprise forte (RBAC multi-tenant com 10 comentários). Hermes tem bug recorrente com Ollama que persiste há múltiplos releases.

---

### 6.3 Dívida Técnica Identificada

| Projeto | Dívida Crítica | Idade |
|---------|---------------|-------|
| **IronClaw** | Decomposição de arquivos oversized (#4088) | ~50 dias |
| **ZeroClaw** | Local-First Mode (#5287) | ~100 dias |
| **CoPaw** | Redesign de sandbox Windows (#5951) | ~5 dias |
| **NanoBot** | 6 PRs conflituados backlog | <1 dia |

**Leitura:** ZeroClaw carrega a dívida mais antiga (Local-First Mode, ~100 dias). IronClaw tem dívida de legibilidade técnica. CoPaw tem dívida arquitetural no sandbox que requer redesign parcial.

---

## 7. Sinais de Tendência

Os dados da comunidade revelam direções estratégicas emergindo no ecossistema:

### 7.1 Tendência 1: Convergência para Context Window Management
**Evidência:**
- CoPaw: Compressão corrompendo formato de mensagens (#6077)
- NanoBot: Memory leak em `Session.messages` (#4787)
- ZeroClaw: RFC para separar conversation history de memory (#9048)
- PicoClaw: Prompt caching em múltiplos providers

**Interpretação:** O mercado reconhece que gestão de contexto é o bottleneck de produção. Ferramentas de compression, bounding e caching estão se tornando feature table-stakes.

---

### 7.2 Tendência 2: Enterprise Features em Ascensão
**Evidência:**
- ZeroClaw: Per-sender RBAC multi-tenant (#5982, 10 comentários)
- ZeroClaw: Cross-turn OTel correlation (#8933)
- Hermes: Declarative reasoning_effort_max (#49355)
- IronClaw: ADR 0001 (múltiplas contas por vendor)
- CoPaw: Langfuse tracing enterprise (#5922)

**Interpretação:** Projetos estão adicionando features tradicionalmente associated com software enterprise (RBAC, observability, multi-tenancy) para capturar clientes B2B.

---

### 7.3 Tendência 3: Desktop Agent como Nova Fronteira
**Evidência:**
- CoPaw: UIA + Tauri Windows automation (#5187)
- Hermes: Desktop window state, profile management
- NanoBot: WebUI com cron management
- IronClaw: WebUI memory browse isolation (#5896)

**Interpretação:** A próxima fronteira de valor é desktop-level automation. Apenas CoPaw tem implementação nativa (UIA), mas todos os projetos estão investindo em interfaces web/desktop.

---

### 7.4 Tendência 4: Windows como Second-Class Citizen Problem
**Evidência:**
- 5 de 6 projetos ativos têm bugs Windows específicos
- NanoBot: UTF-16 corruption
- CoPaw: ACL pollution, sandbox explosion
- IronClaw: fsync directory failure
- Hermes: pythonw.exe, uv trampoline

**Interpretação:** Windows compatibility é deficit coletivo. Nenhum projeto treata Windows como first-class target, resultando em surface area de bugs que afeta ~40% dos potenciais usuários.

---

### 7.5 Tendência 5: Multi-Channel Fragmentation
**Evidência:**
- Cada projeto implementa adapters independentes para Slack, Telegram, DingTalk, Feishu
- Bugs específicos por canal não são compartilhados entre projetos
- Falta de especificação comum de "channel protocol"

**Interpretação:** O ecossistema está reinventando integrações similarmente. Uma especificação de channel adapter comum reduziria bug surface massivamente. Esta

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-07-15

## 1. Panorama do Dia

O NanoBot apresenta **atividade intensa e saudável** nas últimas 24h, com 66 PRs atualizados (18 abertos, 48 merged/fechados) e 13 issues processadas. A equipe está focada em **estabilidade e UX**: múltiplos bugs P1 foram resolvidos (heartbeat, restart, timeout), enquanto features solicitadas pela comunidade (WebUI cron management, Render deploy, DingTalk improvements) avançam em paralelo. Não há releases formais, mas o ritmo de merges indica um ciclo de desenvolvimento ativo. O projeto demonstra boa saúde geral com atenção equilibrada entre correções críticas e melhorias incrementais.

---

## 2. Lançamentos

**Nenhuma release została registrada nas últimas 24h.**

O último release estável é `v0.1.4.post6`, que aparentemente introduziu regressões no rendering de Markdown no Telegram (#2568) — issue já fechada após correção.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7 itens de destaque)

| # | Título | Prioridade | Impacto |
|---|--------|------------|---------|
| [#4915](https://github.com/HKUDS/nanobot/pull/4915) | fix(heartbeat): make response evaluation more configurable | P1 | Resolve regressões do migration heartbeat→cron; torna avaliação mais flexível |
| [#4931](https://github.com/HKUDS/nanobot/pull/4931) | fix(restart): deliver completion after channel reconnects | P1 | Garante entrega de notificação de restart após canal estar pronto |
| [#4936](https://github.com/HKUDS/nanobot/pull/4936) | test: speed up CI and harden the suite | — | Reduz tempo de CI; adiciona deterministicidade aos testes |
| [#4930](https://github.com/HKUDS/nanobot/pull/4930) | feat(webui): add copy action to user messages | P2 | Melhora UX da interface com ação de copiar mensagens |
| [#4933](https://github.com/HKUDS/nanobot/pull/4933) | feat(webui): highlight slash commands and app mentions | P2 | Visual improvements no WebUI |
| [#4929](https://github.com/HKUDS/nanobot/pull/4929) | chore(codex): identify failing request stage | P2 | Melhora debugging de falhas OAuth vs API no Codex |
| [#4631](https://github.com/HKUDS/nanobot/pull/4631) | test: add scripted agent runner harness | — | Infraestrutura de testes para agent runner |

**Avanços-chave:** Correções P1 de heartbeat/restart melhoram estabilidade operacional; hardening de CI acelera feedback loops; improvements no WebUI elevam experiência do usuário final.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status |
|---|--------|-------------|-----|--------|
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram markdown rendering regression v0.1.4.post6 | 4 | 0 | Closed |
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | unifiedSession breaks `_pick_heartbeat_target_from_sessions` | 3 | 0 | Open |
| [#1411](https://github.com/HKUDS/nanobot/issues/1411) | Feature request: Xiaomi speaker integration | 3 | 0 | Closed |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram long message splits — trunks cannot render | 3 | 0 | Closed |
| [#1086](https://github.com/HKUDS/nanobot/issues/1086) | WhatsApp Bridge WebSocket binding prevents inter-container | 1 | 4 | Closed |

**Análise:** O issue de WhatsApp (#1086) com maior número de 👍 (4) indica demanda por melhor suporte Docker/multi-container. Issues de Telegram dominam as discussões de bugs, sugerindo prioridade na estabilidade desse canal. A integração com dispositivos IoT/speakers (#1411) mostra interesse em expansão de plataforma.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Prioridade Alta)

| # | Severidade | Título | Detalhes |
|---|------------|--------|----------|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | Bug | `unifiedSession: true` breaks heartbeat target selection | Falha ao selecionar alvo quando há sessão única unificada |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) | Bug | Session.messages list unbounded — memory leak | Lista cresce indefinidamente; `FILE_MAX_MESSAGES` não limita |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Bug | Qwen models expose thinking/reasoning content | Conteúdo interno de modelos Qwen vazando no chat |

### Bugs Recentemente Fechados

- **#2568** — Telegram markdown rendering inconsistente (v0.1.4.post6) ✅
- **#4795** — Streaming LLM calls sem timeout (wall-clock) ✅
- **#4881** — Windows PowerShell UTF-16 output corruption ✅
- **#4637** — Telegram long message splits rendering ✅
- **#2505** — Custom provider não suporta `extraHeaders` ✅

**Síntese:** Problemas de stability se concentram em três eixos: (1) heartbeat behavior com sessões unificadas, (2) memory leaks em sessões longas, e (3) rendering de mensagens em canais (Telegram predominante). A equipe está reagindo rapidamente às regressões.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (Open PRs)

| # | Título | Prioridade | Descrição |
|---|--------|------------|-----------|
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix(heartbeat): route unified sessions to last channel | P1 | Persiste rota de canal em unified-session para heartbeat |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | feat(providers): surface OAuth status and expiry warnings | P1 | Visibilidade de status OAuth e warnings de expiração |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | feat: add one-click Deploy to Render support | P2 | Blueprint para deploy em Render com um clique |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | add heartbeat trigger command | — | CLI `nanobot heartbeat trigger` com dry-run e JSON |
| [#4621](https://github.com/HKUDS/nanobot/pull/4621) | feat(memory): gate archive facts with provenance | — | Contexto de proveniência para fatos arquivados |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | feat(heartbeat): add model_override for cheaper model | P2 | Override de modelo para heartbeats mais baratos |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | feat(dingtalk): gate private chats, mention sender | — | Melhorias DingTalk (disable private, mention) |

### Demanda Identificada por Issues

- **WebUI Cron Management** (#4218) — Feature request com 2 comentários; CLI é completa mas WebUI carece UI
- **Integração IoT** (#1411) — Xiaomi speakers e dispositivos similares
- **OAuth Provider UX** — Status visibility e warnings de expiração

**Sinais de Roadmap:** Ênfase em (1) heartbeat flexibility (triggers, model override), (2) provider observability (OAuth status), (3) deployment simplification (Render), e (4) estabilidade multi-canal (WhatsApp Docker, DingTalk).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Problema |
|-----------|-------|----------|
| **Estabilidade Telegram** | #2568, #4637 | Markdown rendering inconsistente; mensagens longas são truncadas |
| **Memory/Performance** | #4787 | `Session.messages` crece sem limite — risco de OOM em sessões longas |
| **Timeout** | #4795 | Chamadas streaming podem rodar indefinidamente |
| **Windows** | #4881 | Output PowerShell corrompido (UTF-16) |
| **Docker/WhatsApp** | #1086 | WebSocket só acessível dentro do container |

### Cenários de Uso Destacados

- **Operadores com cron jobs** (#1445) querem receber mensagens apenas quando algo "significativo" acontece — atualmente sempre recebem
- **Usuários DingTalk** (#4446) precisam de controle sobre chats privados e menções em grupo
- **Desenvolvedores** (#4631) precisam de harness de testes para agent runner

### Satisfação

- CLI é considerada completa (#4218) — falta equivalente WebUI
- Integrações provider (DashScope, Codex) estão funcionais mas carecem de observabilidade

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Resposta/Atribuição

| # | Título | Criado | Comentários | Risco |
|---|--------|--------|-------------|-------|
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) | Session.messages memory leak | 2026-07-06 | 1 | Alto — degradação progressiva |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen thinking content exposed | 2026-07-14 | 0 | Médio — vazamento de dados |
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | unifiedSession heartbeat bug | 2026-07-14 | 3 | Alto — feature quebrada |

### PRs Conflituados Sem Merge

| # | Título | Prioridade | Conflitos |
|---|--------|------------|-----------|
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix heartbeat unified sessions | P1 | Sim |
| [#4890](https://github.com/HKUDS/nanobot/pull/4890) | avoid retaining idle locks | P2 | Sim |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | OAuth status warnings | P1 | Sim |
| [#4621](https://github.com/HKUDS/nanobot/pull/4621) | memory provenance context | — | Sim |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | heartbeat trigger command | — | Sim |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | heartbeat model override | P2 | Sim |

**Recomendação:** 6 PRs com conflitos indicam necessidade de resolução de merge backlog. Priorizar #4928 (P1) e #4890 (memory leak P2) para estabilização.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues fechadas/ativas (24h) | 10/3 | ✅ Saudável |
| PRs merged/fechados (24h) | 48/18 | ✅ Muito ativo |
| Releases (24h) | 0 | ⚠️ Sem release formal |
| Bugs P1 abertos | 2 | ⚠️ Requer atenção |
| PRs conflituados | 6 | ⚠️ Backlog de merge |
| Média de comentários/issues | ~2.5 | ✅ Comunidade engajada |

**Conclusão Geral:** NanoBot está em fase de **maturidade operacional**, com foco em estabilidade, UX e deployment. A alta atividade de PRs indica desenvolvimento saudável, mas o backlog de conflitos e issues P1 abertas merecem atenção imediata da equipe.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-15

---

## 1. Panorama do Dia

O Hermes Agent apresenta alta atividade comunitária em 15 de julho de 2026, com **50 issues e 50 PRs atualizados nas últimas 24h**. A taxa de resolução de bugs permanece elevada, com 33 issues fechadas contra 17 abertas. O projeto demonstra maturidade operacional com **7 PRs merged/fechados**, incluindo correções críticas para Windows e desktop. Observa-se um pico de issues novas de alta prioridade (P1) relacionadas a integridade de sessões e idempotência de operações. A ausência de releases formais indica trabalho em preparação de versão ou foco em estabilização do main branch.

---

## 2. Lançamentos

### Sem novas releases

Nenhuma versão oficial foi publicada nas últimas 24h. O último release permanece `v0.17.0` (referenciado em issue #49297). O ciclo de desenvolvimento parece focado em correções para a branch `main` antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (7 itens de destaque)

| PR | Título | Impacto |
|----|--------|---------|
| [#49376](https://github.com/NousResearch/hermes-agent/pull/49376) | fix(agent): persist codex app-server turns | Corrige session persistence no runtime `codex_app_server` — resolve desaparecimento de mensagens |
| [#49355](https://github.com/NousResearch/hermes-agent/pull/49355) | feat(providers): declarative reasoning_effort_max | Adiciona suporte a reasoning de profundidade máxima para providers Z.AI/GLM-5.2 |
| [#49352](https://github.com/NousResearch/hermes-agent/pull/49352) | fix(desktop,windows): use pythonw.exe | Elimina console window visível em ações background no Windows desktop |
| [#49357](https://github.com/NousResearch/hermes-agent/pull/49357) | fix(web-server): detach windows dashboard actions | Alinha comportamento de restart com instalação headless como Windows service |
| [#49333](https://github.com/NousResearch/hermes-agent/pull/49333) | feat(tools): add self-hosted katana web extract/crawl tool | Adiciona ferramentas de crawling sem API key (Katana ProjectDiscovery) |

### PRs Abertos de Destaque (5 novasentries em 2026-07-14)

| PR | Título | Prioridade |
|----|--------|------------|
| [#64592](https://github.com/NousResearch/hermes-agent/pull/64592) | fix(agent): canonicalise paths in parallel-batch planner | **P1** |
| [#64593](https://github.com/NousResearch/hermes-agent/pull/64593) | fix(cli): stop new sessions adopting dead sessions' delegation | **P1** |
| [#64591](https://github.com/NousResearch/hermes-agent/pull/64591) | feat(gateway): periodic memory trim in idle reaper | P3 |
| [#64594](https://github.com/NousResearch/hermes-agent/pull/64594) | fix(codex): scale TTFB watchdog for large requests | P2 |
| [#64595](https://github.com/NousResearch/hermes-agent/pull/64595) | fix(agent): stop compaction fabricating user requests | P2 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

**1. [#49297](https://github.com/NousResearch/hermes-agent/issues/49297) — Bug gemma4 com Ollama** (8 comentários, P2, FECHADA)
- **Demanda:** Usuários reportam falha total do Hermes com modelo gemma4 via backend Ollama após update para v0.17.0
- **Análise:** Issue recorrente (reporte anterior #39281, PR #41694) indica problema sistêmico com provider Ollama que persiste por releases
- **Status:** Closed como implemented-on-main

**2. [#30990](https://github.com/NousResearch/hermes-agent/issues/30990) — Feishu reply_in_thread** (6 comentários, P3, ABERTA)
- **Demanda:** Respostas a @-menções no chat principal do Feishu devem usar threads para manter conversa limpa
- **Análise:** Feature request de UX que afeta experiência de grupos grandes; indica foco em integração enterprise

**3. [#46470](https://github.com/NousResearch/hermes-agent/issues/46470) — Feishu Card 2.0 rendering** (6 comentários, 2 👍, P2, ABERTA)
- **Demanda:** Renderização unificada de markdown via Card 2.0 — tables, code blocks, listas currently falham
- **Análise:** Problema de compatibilidade multiplataforma; afecta produtividade de usuários técnicos

---

## 5. Bugs e Estabilidade

### P1 — Críticos (1 issue nova)

| # | Título | Impacto |
|---|--------|---------|
| [#64592](https://github.com/NousResearch/hermes-agent/issues/64592) | Parallel-batch planner path canonicalization | Risco de mutação concurrent de mesmo arquivo — pode causar corrupção de dados |
| [#64593](https://github.com/NousResearch/hermes-agent/issues/64593) | Novas sessões adotam completamentos de sessões mortas | Delegation results entregue a sessões erradas — vazamento de dados entre sessões |

### P2 — Alto Impacto (3 issues em aberto)

| # | Título | Área |
|---|--------|------|
| [#64425](https://github.com/NousResearch/hermes-agent/issues/64425) | Dashboard session resume não exibe histórico (v0.18.x regression) | Dashboard |
| [#54722](https://github.com/NousResearch/hermes-agent/issues/54722) | Agent reporta sucesso após falha de tool evidence | Agent core |
| [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) | Node sidecar dep error on Podman | Plugins/Docker |

### Bugs Fechados Recentemente (10 de 33)

- **#48649** — Cron jobs usam paths globais ao invés de profile-specific (P2)
- **#49242** — Windows WhatsApp prefere PATH sobre Hermes-managed Node (P2)
- **#48531** — SessionDB API signature mismatch causa TypeError (P2)
- **#48772** — Timestamp config inútil (P2)
- **#49223** — Slash commands falham com WebSocket CSP error (P2)
- **#48968** — Process monitor mata children por qualquer stderr (P2)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#64591](https://github.com/NousResearch/hermes-agent/pull/64591) | Periodic memory trim em idle reaper | P3 | ABERTA |
| [#49350](https://github.com/NousResearch/hermes-agent/pull/49350) | Forward session_id como metadata para custom providers | P3 | ABERTA |
| [#49330](https://github.com/NousResearch/hermes-agent/pull/49330) | i18n gateway system messages + customização | P3 | ABERTA |
| [#49173](https://github.com/NousResearch/hermes-agent/pull/49173) | Cron honor service tier config | P3 | ABERTA |
| [#49342](https://github.com/NousResearch/hermes-agent/pull/49342) | Provider-level toggle no Edit Models dialog | P3 | ABERTA |

### Demanda de Usuários Identificada

1. **Custom Model Configuration UI** (#48928 closed) — Usuários desktop não-técnicos precisam de UI para Ollama/vLLM/LM Studio
2. **Telegram real-time sync** (#48702 closed) — Mensagens não atualizam após abertura do app
3. **Desktop window state persistence** (#48539 closed) — Usuários reclamaram de reset de size/position
4. **Font size configurável** (#48474 closed, 1 👍) — Usuários com baixa visão precisam de acessibilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Windows Integration** | Node/npm path resolution, console windows, uv trampoline errors | Alta (3 issues P2) |
| **Desktop UX** | Window state, profile management, model config | Média-Alta |
| **Platform Feishu** | Markdown rendering, streaming card, thread replies | Média |
| **Session/Delegate** | Cross-session state leakage, dead session adoption | **Alta** (2 P1) |
| **Cron/Background Jobs** | Profile awareness, service tier, stderr handling | Média |

### Cenários de Uso Reportados

1. **Developer Desktop** — Usuários com múltiplos profiles e custom providers (Ollama, vLLM) enfrentam fricção de configuração manual
2. **Enterprise Teams** — Integração Feishu para grupos com necessidade de threading e cards rich
3. **Long-running Agents** — Processos de dias/semanas sem restart acumulam memory leaks (reconhecido via #64591)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#54722](https://github.com/NousResearch/hermes-agent/issues/54722) | Agent reporta sucesso após falha de tools | ~16 dias | OPEN, needs-repro |
| [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) | Node sidecar error on Podman | ~3 dias | OPEN, needs-info |
| [#64425](https://github.com/NousResearch/hermes-agent/issues/64425) | Dashboard session resume regression | <1 dia | OPEN (v0.18.x) |

### Issues com Tag `sweeper:cannot-reproduce` (5 itens)

- #49267 — Browser tools Camofox no Windows
- #48968 — Process monitor kills on stderr
- #48811 — Telegram BotFather threads settings
- #48414 — uv trampoline canonicalize error
- #49334 — hermes-lark-streaming message drops

**Recomendação:** Revisão de issues `cannot-reproduce` pode revelar edge cases de ambiente ou gaps de test coverage.

---

## Métricas Resumidas (2026-07-15)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 50 (17 open, 33 closed) |
| PRs atualizados (24h) | 50 (43 open, 7 closed) |
| Novas releases | 0 |
| P1 bugs | 2 (em PRs aberto) |
| P2 bugs abertos | 5 |
| Taxa de resolução | 66% (33/50) |
| Issue com maior discussão | #49297 (8 comentários) |

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 2026-07-15 | Analista: AI Project Analyst

---

## 1. 🌅 Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** em 15/07/2026, com 9 PRs atualizadas e 3 issues ativas nas últimas 24h. A equipe demonstra foco em **melhorias de provedores de IA** (Anthropic, Bedrock, Feishu) e em **correções de bugs críticos**, como rate limiting e retrocompatibilidade. Não há releases novas hoje, indicando可能mente uma fase de consolidação antes de um próximo lançamento. O volume de PRs fechadas (5) versus abertas (4) sugere um pipeline saudável de merge.

---

## 2. 🚀 Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em silêncio de release desde a versão **0.3.1** (referenciada na issue #3232). Não há changelog ou tag nova visível no período analisado.

> 📌 *Nota: Para quem atualiza, recomendo monitorar o repositório para a próxima release que pode incluir as correções pendentes de rate limiting e prompt caching.*

---

## 3. 📈 Progresso do Projeto

### PRs Fechadas/Merged Hoje (5 total)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| **#2982** | `fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)` | loafoe | 🔧 **Crítica** — Resolve falha de chamada LLM com Claude Opus 4.8 no AWS Bedrock, removendo parâmetro `temperature` incompatível |
| **#2957** | `fix(channels): prevent tool_calls from being dropped during streaming` | loafoe | 🔧 **Bug Fix** — Impede perda de `tool_calls` durante streaming, adicionando helper `outboundMessageIsToolCalls()` |
| **#2270** | `fix(config): handle non-addressable SecureString values in collectSensitive` | loafoe | 🛡️ **Segurança/Estabilidade** — Corrige panic em valores `SecureString` não-endereçáveis em maps |
| **#2128** | `fix(tools): ensure tool parameters have valid JSON Schema properties field` | loafoe | 🔧 **Compatibilidade** — Resolve erros de validação com APIs OpenAI-compatíveis (LM Studio, MCP servers) |
| **#3156** | `feat(pico): emit per-turn LLM token usage on finalized message` | loafoe | 📊 **Telemetry** — Adiciona tracking de input/output tokens por conversa no canal Pico |

**Análise:** O contribuidor **@loafoe** domina o esforço de merge hoje, abordando desde infraestrutura crítica (AWS Bedrock, segurança de config) até features de observabilidade (token usage).

---

## 4. 🔥 Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | 👍 | 💬 | Status | Link |
|---|--------|----|----|--------|------|
| **#3088** | [Feature] use vodozemac instead of libolm | **2** | **8** | OPEN | [GitHub #3088](https://github.com/sipeed/picoclaw/issues/3088) |

**Análise:** Esta issue atraiu **maior discussão** (8 comentários) embora com poucas reações. O pedido é para **substituir libolm (não mantida e insegura) por vodozemac**, a biblioteca oficial de reemplazo para criptografia Matrix/OLM. A severidade é marcada como **high** com tag `help wanted`, indicando que a comunidade reconhece a necessidade mas precisa de contribuidores.

### PRs Abertas com Potencial Impacto

| # | PR | Tema | Link |
|---|-----|------|------|
| **#3163** | `feat(bedrock): leverage Converse prompt caching via cache points` | AWS Bedrock prompt caching | [GitHub #3163](https://github.com/sipeed/picoclaw/pull/3163) |
| **#3228** | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | Anthropic prompt caching | [GitHub #3228](https://github.com/sipeed/picoclaw/pull/3228) |
| **#3233** | `Fix pr 3222 backward compat` | Retrocompatibilidade | [GitHub #3233](https://github.com/sipeed/picoclaw/pull/3233) |

**Tendência:** Duas PRs focadas em **prompt caching** para provedores diferentes (Bedrock Converse API e Anthropic). Isso indica um roadmap de otimização de custos com caching de contexto.

---

## 5. 🐛 Bugs e Estabilidade

### Issues de Bug Reportadas (3 total)

| # | Severidade | Título | Link |
|---|-----------|--------|------|
| **#3232** | ⚠️ **High** | Rate limiting doesn't work if no fallback models is configured | [GitHub #3232](https://github.com/sipeed/picoclaw/issues/3232) |
| **#3255** | 🟡 **Medium** | DingTalk chat list shows fixed "PicoClaw" instead of message content | [GitHub #3255](https://github.com/sipeed/picoclaw/issues/3255) |
| **#3233** | 🟢 **Low** (PR) | Fix pr 3222 backward compat | [GitHub #3233](https://github.com/sipeed/picoclaw/pull/3233) |

**Destaque - Bug Crítico #3232:**
- **Problema:** Configuração de RPM (`requests per minute`) não funciona quando apenas `agents.defaults.model_name` está definido sem fallback models.
- **Ambiente:** PicoClaw 0.3.1, Go 1.26-alpine, GPT-5.5 em Docker
- **Impacto:** Usuários podem enfrentar rate limiting não configurado, potencialmente causando falhas ou bloqueios inesperados.

**Bug Medium #3255:**
- Channel DingTalk exibe "PicoClaw" na lista de chats ao invés do conteúdo real da mensagem (titulo SimpleReplyMarkdown).

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Feature Principal em Discussão

| # | Título | Tags | Link |
|---|--------|------|------|
| **#3088** | use vodozemac instead of libolm | `help wanted`, `priority: high`, `feature` | [GitHub #3088](https://github.com/sipeed/picoclaw/issues/3088) |

**Proposta:** Torner `libolm` opcional em tempo de compilação e usar `vodozemac` como reemplazo padrão.

**Roadmap Inferred (baseado em PRs abertas):**
1. **Prompt Caching** — Implementação em múltiplos provedores (#3163, #3228)
2. **Suporte a Media Nativo** — Audio/video via tipos nativos em Feishu (#3256)
3. **Segurança Criptográfica** — Substituição de libolm por vodozemac
4. **Token Usage Tracking** — Emitido no canal Pico (#3156, já merged)

---

## 7. 📝 Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência | Issue |
|-----------|----------|------------|-------|
| **Rate Limiting** | Configuração RPM não funciona sem fallback models | 1 reporte (bug crítico) | [#3232](https://github.com/sipeed/picoclaw/issues/3232) |
| **UX em DingTalk** | Preview de mensagem mostra "PicoClaw" genérico | 1 reporte | [#3255](https://github.com/sipeed/picoclaw/issues/3255) |
| **Prompt Caching** | SystemParts ignorados no provider anthropic_messages | 1 reporte (via PR) | [#3228](https://github.com/sipeed/picoclaw/pull/3228) |
| **Segurança** | Dependência libolm não mantida | 1 reporte (feature request) | [#3088](https://github.com/sipeed/picoclaw/issues/3088) |

### Cenários de Uso Evidenciados
- **Agentes IA multi-providers** com modelos GPT-5.5 e fallbacks
- **Integração com canais chineses** (DingTalk, Feishu) com suporte a media nativo
- **Deploy em containers** (Docker, Go 1.26-alpine)
- **AWS Bedrock** para inference com Claude Opus 4.8

---

## 8. 📋 Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Stale

| # | Tipo | Título | Status | Idade | Link |
|---|------|--------|--------|-------|------|
| **#3088** | Issue | [Feature] use vodozemac instead of libolm | OPEN | ~36 dias | [GitHub](https://github.com/sipeed/picoclaw/issues/3088) |
| **#3232** | Issue | Rate limiting doesn't work if no fallback models | OPEN (stale) | ~8 dias | [GitHub](https://github.com/sipeed/picoclaw/issues/3232) |
| **#3233** | PR | Fix pr 3222 backward compat | OPEN (stale) | ~8 dias | [GitHub](https://github.com/sipeed/picoclaw/pull/3233) |
| **#3163** | PR | feat(bedrock): leverage Converse prompt caching | OPEN | ~22 dias | [GitHub](https://github.com/sipeed/picoclaw/pull/3163) |
| **#3228** | PR | fix(anthropic-messages): send SystemParts as system blocks | OPEN | ~9 dias | [GitHub](https://github.com/sipeed/picoclaw/pull/3228) |

### ⚠️ Prioridade de Atenção

1. **#3088** — Feature de segurança crítica (libolm → vodozemac), 36 dias sem movimento, alta prioridade
2. **#3232** — Bug de rate limiting afeta estabilidade em produção
3. **#3228 / #3163** — Prompt caching é feature de custo; impacta diretamente o bolso dos usuários

---

## 📊 Score de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| **Atividade de Código** | ✅ Alta | 5 PRs fechadas, 4 abertas em 24h |
| **Resposta a Bugs** | ⚠️ Pendente | Bug #3232 aguardando resposta há 8 dias |
| **Manutenção de Dependências** | 🔴 Atenção | libolm não mantida há tempo considerável |
| **Release Activity** | ⚠️ Silêncio | Sem releases novas hoje |
| **Diversidade de Contribuidores** | ✅ Boa | 3+ autores únicos hoje (loafoe, AayL..., others) |

---

*Relatório gerado automaticamente com base em dados do GitHub de sipeed/picoclaw em 2026-07-15.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data de referência:** 2026-07-15 | **Fonte:** github.com/nearai/ironclaw

---

## 1. Panorama do dia

O projeto IronClaw apresenta altíssima atividade nas últimas 24h, com 41 issues e 50 PRs atualizados — números que indicam uma sprint intensa de desenvolvimento. A frente mais significativa é a consolidação do **runtime de extensões unificado (NEA-25)**, com dois trains de PRs sendo finalizados simultaneamente, e o planejamento formal da **aposentadoria do v1 runtime** em múltiplas issues coordenadas. Não houve release formal nas últimas 24h, embora o PR de release #5598 (0.29.1) tenha recebido updates. A saúde geral é boa: muitos PRs fechados com merge, bugs sendo corrigidos ativamente e a base de código converge para a nova arquitetura Reborn.

---

## 2. Lançamentos

### Nenhuma release formal nas últimas 24h

O PR de release [#5598](https://github.com/nearai/ironclaw/pull/5598) (criado em 2026-07-03) documenta a transição para `ironclaw` 0.29.1 com as seguintes mudanças nos crates:

| Crate | De | Para | Tipo |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Breaking |
| `ironclaw` | 0.24.0 | 0.29.1 | Minor |

> **Nota de migração:** `ironclaw_common` e `ironclaw_skills` contêm mudanças de API incompatíveis. Consumidores desses crates devem revisar o diff de breaking changes antes de atualizar.

---

## 3. Progresso do Projeto

### PRs fechados com merge hoje (principais)

| PR | Tamanho | Escopo | Impacto |
|---|---|---|---|
| [#6065](https://github.com/nearai/ironclaw/pull/6065) P7b — extension-runtime finalize | XL | Runtime | Consolidação final do train de runtime (PR 9/9). Move package data para localização definitiva para o specificity gate. |
| [#6095](https://github.com/nearai/ironclaw/pull/6095) fix(reborn): name blocked provider + stop misclassifying I/O faults | M | Auth | Corrige #5884 — credenciais bloqueadas agora mostram nome do provider e falhas de I/O não são mais classificadas como input inválido. |
| [#6089](https://github.com/nearai/ironclaw/pull/6089) recover from libSQL contention | XL | Database | Classifica SQLite `BUSY`/`LOCKED` e PostgreSQL `40001`/`40P01`/`55P03` como contenção retryable; todas as outras falhas são terminais. |
| [#6096](https://github.com/nearai/ironclaw/pull/6096) serialize concurrent inbound-message writes | M | Threads | Corrige #6047 — mensagens Concurrentes para mesma thread eram persistidas/fora de ordem. Teste de regressão adicionado. |
| [#6013](https://github.com/nearai/ironclaw/pull/6013) tools-capable completion nudge | L | Agent Loop | Torna o "completion nudge" do driver capaz de usar tools no modo interactive coding. |
| [#6056](https://github.com/nearai/ironclaw/pull/6056) P7a — wire state enums + accounts list | XL | Runtime | Implementa ADR 0001 (múltiplas contas por vendor) e lista de accounts. |
| [#5996](https://github.com/nearai/ironclaw/pull/5996) P2 — adapters + ExtensionHost + dispatch cutover | XL | Runtime | Cutover de tool dispatch para ExtensionHost genérico (Workstream C). |
| [#5995](https://github.com/nearai/ironclaw/pull/5995) P1 — manifest v3 + VendorId + recipes | XL | Runtime | Manifest v3, VendorId alias, resolved record. |

### PRs abertos de destaque

| PR | Tamanho | Escopo | Status |
|---|---|---|---|
| [#6090](https://github.com/nearai/ironclaw/pull/6090) Train B rollup — unified extension runtime P0–P7b | XL (medium risk) | Extension Runtime | Aberto, rollup de 9 fases em 1 commit |
| [#6061](https://github.com/nearai/ironclaw/pull/6061) Train A rollup — unified extension model | XL (medium risk) | Extension Runtime | Aberto, supersede #5833–#5850 |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) MCP registration framework skeleton | XL | MCP | Framework inicial — não user-facing |
| [#5896](https://github.com/nearai/ironclaw/pull/5896) WebUI memory browse isolation | M | WebUI | Escopa mount de memory browse pelo caller autenticado |

**Síntese:** O train de extension-runtime está em fase final de consolidação (Train A merge + Train B em review). A retirada do v1 runtime começa a ser planejada em issues dedicadas.

---

## 4. Temas Quentes da Comunidade

### Issues com mais interação (comentários + engajamento)

| Issue | Comentários | Tipo | Tema |
|---|---|---|---|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) GitHub extension relatada como ativada quando só está instalada | 5 | Bug P3 | UI/UX inconsistency |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) "Load older messages" button não funciona | 2 | Bug P3 | UX/Activity panel |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) Harness gap: RecordingSecurityAuditSink sempre None | 2 | Harness/CI | Paridade prod/harness |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) Banner de erro de histórico mesmo com respostaok | 2 | Bug P3 | UI/Error handling |
| [#5945](https://github.com/nearai/ironclaw/issues/5945) Run falha com erro genérico após multi-tool longo | 1 | Bug P2 | Stability/Timeouts |

**Análise:** O tema mais discutido é a **inconsistência entre o estado percebido do sistema e o estado real** — extensões reportadas como ativadas quando não estão, banner de erro sem impacto funcional real, mensagens carregadas fora de ordem. Há uma demanda clara por maior confiabilidade na comunicação de estado ao usuário.

### PRs com mais interação

| PR | Comentários | Tema |
|---|---|---|
| [#5896](https://github.com/nearai/ironclaw/pull/5896) WebUI memory browse isolation | Alto | Security/Scope |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) MCP registration framework skeleton | Alto | Architecture |
| [#6093](https://github.com/nearai/ironclaw/pull/6093) Gated self-verification pass | Alto | Agent quality |

---

## 5. Bugs e Estabilidade

### Por severidade

#### P1 — Críticos (0 reportados hoje)
Nenhum bug P1 aberto nas últimas 24h.

#### P2 — Altos (5 reportados)

| Issue | Título | Link |
|---|---|---|
| #5945 | Run falha com erro genérico após execução multi-tool longa (34+ ferramentas) | [#5945](https://github.com/nearai/ironclaw/issues/5945) |
| #5884 | Rotina perde credenciais após revogação de token externo | [#5884](https://github.com/nearai/ironclaw/issues/5884) ✅ corrigido em #6095 |
| #6092 | Slack conversation trava em "thinking" após reconnect | [#6092](https://github.com/nearai/ironclaw/issues/6092) |
| #6091 | Slack reporta estados conflitantes após disconnect | [#6091](https://github.com/nearai/ironclaw/issues/6091) |
| #6047 | Mensagens de tasks exibidas fora de ordem cronológica | [#6047](https://github.com/nearai/ironclaw/issues/6047) ✅ corrigido em #6096 |

**Nota:** O bug #5884 foi corrigido pelo PR #6095. Os bugs Slack (#6091, #6092) parecem estar relacionados e podem compartilhar causa raiz.

#### P3 — Médios (6+ reportados)

| Issue | Título | Link |
|---|---|---|
| #5948 | GitHub extension reportada como ativada quando só está instalada | [#5948](https://github.com/nearai/ironclaw/issues/5948) |
| #5889 | Botão "Load older messages" não funcional | [#5889](https://github.com/nearai/ironclaw/issues/5889) |
| #6050 | Banner de erro de histórico mesmo com resposta ok | [#6050](https://github.com/nearai/ironclaw/issues/6050) |
| #5947 | Thread deletion requer refresh manual da página | [#5947](https://github.com/nearai/ironclaw/issues/5947) |
| #5418 | Mensagens em ordem errada após atividade de tool | [#5418](https://github.com/nearai/ironclaw/issues/5418) |

### Padrões identificados

1. **Ordenação de mensagens:** Dois bugs independentes (#6047, #5418) sobre ordem incorreta de mensagens — pode indicar problema sistêmico no message bus.
2. **Estado de extensões:** Extensões reportam estados inconsistentes com o backend (#5948, #6091) — área frágil durante a transição para o novo extension-runtime.
3. **UI/WebUI:** Bugs de theme (#6039), status de conexão (#6037), elementos visuais quebrados (#6028) — componente WebUI precisa de atenção.

### Regressões potenciais

- **LibSQL contention (#6089):** Contenção de database era classificada incorretamente. O fix foi fechado mas merece monitoramento em produção.
- **Windows filesystem (#6098):** `LocalFilesystem` falhava completamente no Windows por `fsync` em diretório.PR aberto para correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas de destaque

| Issue | Título | Link | Sinais |
|---|---|---|---|
| #6099 | POST test-connection reporta `ok:true` para endpoint inalcançável | [#6099](https://github.com/nearai/ironclaw/issues/6099) | A API de health-check retorna false positives — pode impactar settings pages e integrações de terceiros |
| #6067 | [epic] Reborn recorded-behavior QA scenario series | [#6067](https://github.com/nearai/ironclaw/issues/6067) | Frameworks de teste live-test para Reborn amadurecendo — indica maturação do runtime |
| #6074 | [live-test] multi-turn context retention (thread history) | [#6074](https://github.com/nearai/ironclaw/issues/6074) | Cenário de teste para memória entre turns — feature crítica para UX |
| #6073 | [live-test] web_search grounded synthesis | [#6073](https://github.com/nearai/ironclaw/issues/6073) | Capacidade de síntese com search — amplia utilidade do agente |
| #6076 | Automations: não expõem correlação trigger → thread/run | [#6077](https://github.com/nearai/ironclaw/issues/6077) | Falta de traceabilidade entre trigger fires e threads geradas |
| #6083 | Substituir native confirm() por modal Reborn | [#6083](https://github.com/nearai/ironclaw/issues/6083) | Consistencia de design system |
| #4088 | Track: decomposição de arquivos oversized do Reborn | [#4088](https://github.com/nearai/ironclaw/issues/4088) | Débito técnico de legibilidade |

### Sinais de roadmap claros

1. **Retirada do v1 runtime (#6077–#6080):** Quatro issues coordenadas cobrem todo o escopo da migração — auditoria, CI, Docker, packaging, deletion guardrails. Isso é planejamento de release, não discussão.
2. **NEA-25 extension-runtime:** Os trains A e B estão em fase final de rollup. A próxima release maior será o runtime unificado.
3. **MCP framework (#5970):** O skeleton de registro MCP está em desenvolvimento — indica estratégia de extensibilidade third-party.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**1. Confusão de estado do sistema**
O bug #5948 é exemplare: o assistente diz "extensão ativada" enquanto a UI mostra "Activate". O usuário não sabe se algo está funcionando ou não. Bug #6050 amplia isso — o banner de erro aparece junto com uma resposta válida, criando incerteza.

**2. Integração Slack problemática**
Os bugs #6091, #6092 e #5884 (já corrigido parcialmente) mostram que workflows com Slack quebram de formas não-óbvias após desconexão/reconexão. O bot fica "travado" sem feedback claro.

**3. Persistência de dados questionável**
Mensagens que não carregam (#5889), histórico que não atualiza após deleção (#5947), e mensagens fora de ordem (#5418, #6047) geram insegurança sobre se o sistema está gravando corretamente.

**4. Windows completamente quebrado**
O bug #6098 é severo — `ironclaw-reborn` não inicializa no Windows por causa do `fsync` em diretório. Isso é um blocker para qualquer usuário Windows.

### Cenários de uso inferidos

- **Agentes de automação:** Rotinas que listam issues, enviam summaries (#5884), com triggers agendados — uso profissional/repetitivo.
- **Coding assistido:** O PR #6013 habilita "interactive coding" com nudges de tools — o IronClaw é posicionado como coding copilot.
- **Integração multi-canal:** Slack, Telegram, extensões — o sistema é multi-canal por design.

### Satisfação/Insatisfação

| Dimensão | Status |
|---|---|
| Core agent loop | ✅ Estável (muitos PRs de runtime fechados) |
| Extensões/Integrations | ⚠️ Frágil (múltiplos bugs Slack/GitHub) |
| WebUI | ⚠️ UX inconsistente (theme, erros, ordenação) |
| Multi-plataforma | 🔴 Windows bloqueado |
| Credenciais/Auth | ⚠️ Problemas após token revocation |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias com alta relevância

| Issue | Idade | Prioridade | Link |
|---|---|---|---|
| #4088 — Decomposição de arquivos oversized do Reborn | ~50 dias | Débito técnico | [#4088](https://github.com/nearai/ironclaw/issues/4088) |
| #3483 — Package ironclaw-reborn em release artifacts | ~65 dias | Release packaging | [#3483](https://github.com/nearai/ironclaw/issues/3483) |
| #6075 — Trigger active-run lookup puxa snapshot completo a cada chamada | Hoje | Performance | [#6075](https://github.com/nearai/ironclaw/issues/6075) |
| #6076 — Automations não expõem correlação trigger → thread/run | Hoje | Observabilidade | [#6076](https://github.com/nearai/ironclaw/issues/6076) |
| #6077-#6080 — Retire v1 runtime (série) | Hoje | Arquitetura | [#6077](https://github.com/nearai/ironclaw/issues/6077) |

### Issues sem comentários que precisam de triagem

| Issue | Link |
|---|---|
| #6099 — test-connection false positive (segurança) | [#6099](

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-07-15

## 1. Panorama do Dia

O ecossistema CoPaw atravessa um período de **alta intensidade de desenvolvimento** com 50 issues e 50 PRs atualizados nas últimas 24h. A versão `v2.0.0.post2` foi recém-lançada, marcando um ciclo de correções ágeis após os problemas reportados na `v2.0.0`. A comunidade está particularmente ativa em resolver **regressões críticas** relacionadas a compressão de contexto, sandbox em Windows e memória automática. O ratio de fechamento é saudável (36 issues fechadas vs 14 abertas), indicando capacidade de resposta rápida. No entanto, múltiplos bugs de severidade alta permanecem abertos, incluindo loops infinitos em busca de memória e quebras permanentes de sessão após compressão de contexto.

---

## 2. Lançamentos

### v2.0.0.post2

| Campo | Detalhe |
|-------|---------|
| **Tag** | `v2.0.0.post2` |
| **Data** | 2026-07-14/15 |
| **PRs incluídos** | #6067, #6070 + testes de regressão |

**Mudanças:**

- **feat**: Arquivos sensíveis expandidos e permissão de leitura global configurável ([#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067)) — contributor: `weidankong`
- **chore**: Bump de versão para `2.0.0.post2` ([#6070](https://github.com/agentscope-ai/QwenPaw/pull/6070)) — contributor: `cuiyuebing`
- **test(unit)**: Testes de regressão para runtime, security e install adicionados

**Observação**: Este release é uma correção pontual de infraestrutura. A release notes oficial pode ser consultada em [github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2).

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (27 total)

| PR | Tipo | Impacto |
|----|------|---------|
| [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) | fix(governance) | Corrige sandbox forçado mesmo com `approval_level=OFF` + `sandbox_enabled=false` |
| [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) | feat(memory) | Melhora confiabilidade do ReMe, observabilidade e segurança de embedding CJK |
| [#6106](https://github.com/agentscope-ai/QwenPaw/pull/6106) | fix(download_catalog) | Trata respostas JSON com codificação gzip |
| [#6094](https://github.com/agentscope-ai/QwenPaw/pull/6094) | fix(goal) | Reseta stop gates em `/new` e `/clear` — corrige `TERMINATE` persistente |
| [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112) | feat(plugins) | Zalo Bot como plugin no arquitetura v2.0 |
| [#6105](https://github.com/agentscope-ai/QwenPaw/pull/6105) | (Issue closure) | Configuração de `generate_image_gpt` restaurada |

### PRs Abertos em Review (23 total)

| PR | Tipo | Status | Prioridade |
|----|------|--------|------------|
| [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) | fix(context) | Under Review | **Crítica** — mantém tool results pareados durante compressão |
| [#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120) | fix(memory) | Open | Restringe memória automática a queries externas |
| [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122) | fix(governance) | Open | Limpa estado stale de sandbox em OFF-mode |
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) | feat(channels) | Open | Adiciona Zalo Bot (long-polling, sem webhook público) |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | feat(computer-use) | Open | Automação GUI Windows com UIA + Tauri control mode |

**Destaque estratégico**: O PR [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) representa uma expansão significativa das capacidades de desktop agent, permitindo automação GUI nativa em Windows — sinal de amadurecimento do produto.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Título |
|-------|------|-------------|--------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | enhancement | **64** | Help Wanted: Open Tasks — S1 |
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | bug | **9** | Windows 沙箱问题完整排查 (pwsh recursive explosion + ACL pollution) |
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) | enhancement | **8** | OpenClaw-Inspired Features for Compounding Agent Value |
| [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) | bug | **5** | 一直卡在搜索记忆 (loop infinito de memória) |
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | bug | **5** | auto-memory fails: `No module named 'agentscope.tool._builtin._scripts'` |

### Análise de Demandas

**1. Meta-issue de Contribuição (#2291)** — Com 64 comentários, demonstra uma comunidade ativa de contribuidores. A estrutura de prioridades P0→P2 indica maturidade na gestão de backlog.

**2. Windows Sandbox Problems (#5951)** — Relatado em 2026-07-10, ainda em discussão ativa. Envolve:
- Explosão recursiva de janelas pwsh
- Memória estourando 20GB
- ACL pollution em diretórios do sistema
- [Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) relacionada: AppContainer ACE poluindo `C:\` e `C:\Users`

**3. OpenClaw-Inspired Features (#578)** — Meta-issue para features de valor composto. Sinaliza direção estratégica do produto.

---

## 5. Bugs e Estabilidade

### Regressões Críticas (v2.0.0)

| Severidade | Bug | Impacto | Status |
|------------|-----|---------|--------|
| **🔴 Crítica** | [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121): DeepSeek scroll context compression → 400 após crescimento de histórico | Sessão quebra permanentemente com DeepSeek API | **ABERTA** |
| **🔴 Crítica** | [#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077): Compressão corrompe formato de mensagens — tool messages órfãos após assistant(tool_calls) | API DeepSeek rejeita requisição com 400 | **FECHADA** (PR #6108 em review) |
| **🔴 Crítica** | [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113): Loop infinito de busca de memória | Agent trava em loop ao processar qualquer query | **ABERTA** |
| **🔴 Crítica** | [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100): Upgrade sobrescreve `agent.json` — workspace perdido | Configuração do agent resetada após upgrade | **ABERTA** |
| **🟠 Alta** | [#6082](https://github.com/agentscope-ai/QwenPaw/issues/6082): `/goal` block subsequent chat — TERMINATE em toda mensagem | Chat fica completamente bloqueado após goal | **FECHADA** (PR #6094) |
| **🟠 Alta** | [#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088): Message queue regression — não permite enviar durante execução | Queue functionality quebrada em v2.0.0.post1 | **FECHADA** |
| **🟠 Alta** | [#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097): macOS frozen build missing `agentscope.tool._builtin._scripts` | Desktop macOS crash no Glob tool/auto-memory | **FECHADA** (hotfix v2.0.0.post2) |

### Root Causes Identificadas

1. **Compressão de Contexto**: O compressor corta mensagens `assistant` com `tool_calls` mas mantém as respostas `tool` subsequentes, violando o contrato da API OpenAI-compatible. ([#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077))
2. **Auto-Memory**: Falso positivo ao detectar mensagens `user` sintéticas (ex: loop continuation warnings) como queries externas legítimas. ([#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120))
3. **Windows Sandbox**: `icacls /grant` com flags `(OI)(CI)` em `C:\` propaga ACEs AppContainer para processos Electron/Chromium, causando crash de GPU. ([#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue | Descrição | Potencial |
|---------|-------|-----------|-----------|
| **Injection de mensagens em tempo real** | [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) | Permitir que mensagens do usuário sejam injetadas no loop de iteração do agent durante execução | Alto — corrige UX de correção de trajetória |
| **Separação de tool call info/resultados por channel** | [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | Controlar independentemente envio de parâmetros e resultados de tools; truncar resultados | Médio — reduz spam em canais |
| **CIDR para whitelist de hosts** | [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | Suporte a blocos CIDR no `unauthenticated_host_whitelist` | Médio — segurança em rede |
| **Daemon e command dispatch** | [#586](https://github.com/agentscope-ai/QwenPaw/issues/586) | Comandos de sistema (status, restart, logs) sem criar CoPawAgent | Baixo — conveniência ops |
| **Zalo Bot channel** | [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) | Nova integração com Zalo (plataforma vietnamita) | Zalo Bot em desenvolvimento — já em PR |

### Sinais de Roadmap

1. **Computer Use Nativo**: [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) implementa automação GUI Windows via UIA — indica direção "desktop agent full-stack"
2. **Observabilidade**: PR [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) adiciona tracing Langfuse com user/session/version — padrão enterprise
3. **Multi-Channel Expansion**: Zalo Bot ([#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118), [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112)) mostra estratégia de expandir ecossistema de canais

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Dor | Frequência | Severidade | Exemplos |
|-----|------------|------------|----------|
| **Quebra de sessão após contexto comprimido** | Alta | 🔴 | [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009), [#6046](https://github.com/agentscope-ai/QwenPaw/issues/6046) |
| **Loop infinito de memória** | Alta | 🔴 | [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) |
| **Windows sandbox incontrolável** | Média-Alta | 🔴 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951), [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) |
| **Configuração perdida em upgrade** | Média | 🟠 | [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) |
| **Ferramentas sumindo após upgrade** | Média | 🟠 | [#6105](https://github.com/agentscope-ai/QwenPaw/issues/6105) |
| **Desktop macOS crash** | Média | 🟠 | [#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097) |

### Cenários de Uso Identificados

1. **DeepSeek API + long conversations**: Usuários em produção enfrentam quebra inevitável após ~20-30 rodadas com tools — [Issue #6121](https://github.com/agentscope-ai/QwenPaw/issues/6121)
2. **Windows power users**: Sandbox default breaking workflows básicos (ls, execute_shell) — [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)
3. **Enterprise com múltiplos canais**: Governance/approval appearing em canais errados — [Issue #6020](https://github.com/agentscope-ai/QwenPaw/issues/6020), [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)

### Satisfação

- **Positivo**: Cycle time de fixes rápido (v2.0.0.post2 em ~4 dias após v2.0.0)
- **Negativo**: Regressões em features core (queue, goal, context compression) indicam necessidade de test coverage mais robusto

---

## 8. Backlog que Merece Atenção

### Issues Sem Resolução ou Sem Resposta

| Issue | Criado | Days Ago | Status | Prioridade |
|-------|--------|----------|--------|------------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116): Doom loop — agent repetindo mesma tool call | 2026-07-14 | 1 | Open | 🟠 Alta |
| [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113): Loop infinito de busca de memória | 2026-07-14 | 1 | Open | 🔴 Crítica |
| [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121): DeepSeek 400 após scroll context | 2026-07-14 | 1 | Open | 🔴 Crítica |
| [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100): lost workspace | 2026-07-14 | 1 | Open | 🟠 Alta |
| [#6089](https://github.com/agentscope-ai/QwenPaw/issues/6089): MODEL_EXECUTION_ERROR com opencode | 2026-07-14 | 1 | Closed | — |
| [#5966](https://github.com/agentscope-ai/QwenPaw/issues/5966): agentscope kernel 2.0 vs 1.12 | 2026-07-11 | 4 | Closed | — |

### Recomendações de Priorização

1. **Imediato**: Finalizar PR [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) — fix de context compression — impacta todos os usuários DeepSeek/OAI
2. **Imediato**: Investigar e corrigir loop infinito de memória ([#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)) — UX killer
3. **Curto prazo**: Windows sandbox isolation — [Issues #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) e [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) indicam problema arquitetural que requer redesign parcial
4. **Médio prazo**: Test coverage floors levantados por [#6103](https://github.com/agentscope-ai/QwenPaw/pull/6103) — prevenir regressões futuras

---

*Relatório gerado em 2026-07-15. Dados extraídos de github.com/agentscope-ai/QwenPaw. Última sincronização: últimas 24h.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-07-15

## 1. Panorama do Dia

ZeroClaw mantém atividade intensa com **50 issues e 50 PRs atualizados nas últimas 24h**, demonstrando alta cadência de desenvolvimento. O foco principal concentra-se na maturação do subsistema **SOP (Standard Operating Procedures)**, com pelo menos 15 PRs relacionados fechados recentemente — sinalizando progresso significativo no milestone v0.8.3. Não houve novos lançamentos, e o projeto está em fase de estabilização com vários trackers de release sendo fechados. A comunidade apresenta demandas crescentes em segurança (RBAC multi-tenant), observabilidade (OpenTelemetry) e integração de canais.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto fechou trackers importantes para a versão 0.8.3:
- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) — Observability, CI, docs, dependencies ✅
- [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) — Runtime execution, agent loop, tools ✅
- [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) — Provider e serialização de ferramentas nativas ✅
- [#8362](https://github.com/zeroclaw-labs/zeroclaw/issues/8362) — Channel adapter parity ✅
- [#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070) — Gateway, web, ZeroCode ✅

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| PR | Título | Impacto |
|----|--------|---------|
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | Web visual authoring (experimental) + git_forge tool | **Alto** — Interface visual para SOPs + ferramenta unificada Git |
| [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609) | Git forge channel (GitHub provider) | **Alto** — Canal GitHub com SOP ingress |
| [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) | Gitea/Forgejo provider | **Médio** — Suporte a forjas alternativas |
| [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) | Git forge channel com SOP ingress | **Alto** — Polling, issues, PRs, releases |
| [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) | Out-of-band approval plane + fail-closed timeout | **Alto** — EPIC C do milestone SOP |
| [#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430) | Enforce step routing | **Alto** — Next, depends_on, when, bounded visit |
| [#8420](https://github.com/zeroclaw-labs/zeroclaw/pull/8420) | Enforce step schemas at engine boundary | **Alto** — Validação input/output schemas |
| [#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) | Execute live SOP steps | **Alto** — Executor de ações SOP live |
| [#8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) | Daemon SOP maintenance tick (EPIC A1) | **Alto** — Cron triggers integrados |
| [#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) | Filesystem SOP event source | **Médio** — Watcher de mudanças em arquivos |
| [#8506](https://github.com/zeroclaw-labs/zeroclaw/pull/8506) | Consume CAS run claims | **Médio** — Admission via claim store |
| [#8419](https://github.com/zeroclaw-labs/zeroclaw/pull/8419) | Calendar no-show SOP triggers | **Médio** — Detecção de ausências em calendário |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC para multi-tenant (10 comentários)
   - **Demanda:** Isolar workspaces, tool sets, rate limits e system prompts por classe de usuário
   - **Tags:** `security`, `agent`, `priority:p2`, `risk:high`
   - **Status:** Aceito, aguardando implementação

2. **[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** — Slack thread context hydration (7 comentários)
   - **Demanda:** Backfill de histórico de thread via `conversations.replies` na primeira menção
   - **Tags:** `channel:slack`, `priority:p2`
   - **Status:** Aceito

3. **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** — Local-First Mode (5 👍, 5 comentários)
   - **Demanda:** Modo compacto para modelos locais, sem prompt bloat e sem prompt leakage
   - **Tags:** `provider:ollama`, `priority:p2`, `risk:high`
   - **Status:** Aceito, +2 upvotes indica demanda real

4. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — RFC: Cross-turn OTel correlation (3 comentários)
   - **Demanda:** Exportar `gen_ai.conversation.id` para observabilidade entre turns
   - **Tags:** `type:rfc`, `observability:otel`, `risk:high`
   - **Status:** RFC em discussão

5. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — RFC: Separate memory from history (3 comentários)
   - **Demanda:** Separar conversation history de long-term memory no runtime
   - **Tags:** `type:rfc`, `memory`, `risk:high`
   - **Status:** RFC recém-criado (2026-07-14)

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P1)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | `advance_step` sem guard — bypass de approval gate via `sop_advance` | S2 (high risk) | Fechado ✅ |
| [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | Deterministic SOP steps headless gravados Completed sem executar | S2 | Fechado ✅ |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs não disponíveis via web dashboard chat | S1 (blocked) | **Aberto** |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | Malformed tool-call args → 400 → empty reply (OpenRouter/OpenAI) | S1 | **Aberto** |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` ignora per-agent tool gating (confused deputy) | **S0** (security) | Em progresso |

### Bugs de Prioridade 2

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock bloqueia shell access a `/dev/null` no Fedora | S2 | **Aberto** |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose gateway loopback-bound | S1 | **Aberto** |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime replies ignoram Fluent localization | S3 | **Aberto** |
| [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) | Cron jobs recall memory mesmo com `uses_memory = false` | S2 | **Aberto** |
| [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) | Provider diagnostics enterradas sob retry envelope genérico | S2 | **Aberto** |
| [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) | `channel-line` omitido de `channels-full` e `ci-all` | S1 | **Aberto** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs em Discussão

- **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — Cross-turn conversation correlation para OTel
- **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — Separar conversation history de agent-curated memory

### Features Aceitas (Roadmap Indicado)

| Issue | Feature | Tags | Status |
|-------|---------|------|--------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC multi-tenant | `security`, `priority:p2` | Aceito |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack thread context hydration | `channel:slack`, `priority:p2` | Aceito |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode (compact prompting) | `provider:ollama`, `priority:p2` | Aceito |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Pre-hook skip gates para cron/SOP triggers | `domain:security`, `priority:p2` | Bloqueado |
| [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | SOP routing: false `when` avança ao próximo step | `tool:sop`, `priority:p2` | Aceito |
| [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | Centralizar SOP ingress adapters | `domain:architecture`, `priority:p2` | Aceito |

### Milestone Trackers Ativos

- **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)** — SOP milestone: daemon-owned SOP control plane (5/5)
- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — Persistent memory: curation, relevance, operability planes
- **[#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)** — zerorelay: nominated relay para NAT traversal
- **[#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)** — v0.8.3 milestone index (child trackers fechados, validação pendente)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidence |
|-----------|----------|----------|
| **Segurança** | Falta de isolamento RBAC entre tenants | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (10 comentários) |
| **Local-first** | Prompt bloat e prompt leakage em modelos pequenos | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (5 👍) |
| **SOPs** | SOPs indisponíveis via web dashboard | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) (S1) |
| **Slack** | Experiência de thread frustrante sem context | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) (7 comentários) |
| **Provider** | Erros de tool calls malformados sem diagnóstico | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) |
| **Cron** | `uses_memory = false` não funciona corretamente | [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) |

### Cenários de Uso Emergentes

- **Multi-tenant SaaS:** Clientes pedindo isolamento RBAC por sender
- **Git forge automation:** Desenvolvimento ativo de canal GitHub/Gitea com SOP triggers
- **Local deployment:** Usuários rodando Ollama pedindo modo otimizado
- **Observabilidade:** Necessidade de correlação cross-turn para debugging

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Título | Days Old | Prioridade | Observação |
|-------|--------|----------|------------|------------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode | ~100 dias | P2, 5 👍 | Alta demanda, nenhum assignee |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Pre-hook skip gates | ~95 dias | P2 | Bloqueado — sem timeline |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Fluent localization bypass | ~65 dias | P2 | Tagged accepted mas sem movimento |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC | ~85 dias | P2, high risk | Aceito mas sem PR |

### PRs Abertos Recém-Criados (Need Review)

| PR | Título | Age | Tamanho |
|----|--------|-----|---------|
| [#9074](https://github.com/zeroclaw-labs/zeroclaw/pull/9074) | Nebius rebrand → Token Factory | <1 dia | S |
| [#9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055) | Translation refresh reproducibility | <1 dia | S |
| [#9073](https://github.com/zeroclaw-labs/zeroclaw/pull/9073) | Governance initiative planning model | <1 dia | S |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 37 | 🟢 Alta |
| PRs abertos (24h) | 22 | 🟢 Saudável |
| PRs fechados/merged (24h) | 28 | 🟢 Muito ativo |
| Releases (24h) | 0 | 🟡 Em estabilização |
| Bugs P1 abertos | 3 | 🔴 Requer atenção |
| Trackers v0.8.3 | 6/6 fechados | 🟢 Near-release |
| RFCs ativos | 2 | 🟢 Evoluindo |

---

**Conclusão:** ZeroClaw demonstra vigoroso desenvolvimento com foco em SOPs e release 0.8.3 prestes a finalizar. A comunidade sinaliza demandas claras em segurança multi-tenant, local-first deployment e experiência Slack. Bugs críticos de segurança (S0-S1) e bugs de workflow (SOPs via web) merecem atenção prioritária da maintainer team.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*