# Resumo diário do ecossistema de agentes de IA 2026-08-31

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-30 22:18 UTC

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

## 2026-08-31

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 31/08/2026. Quatro projetos (NanoBot, Hermes Agent, CoPaw, ZeroClaw) operam em regime de alta intensidade — com 50-100 eventos combinados de issues e PRs por dia — sinalizando ciclos de desenvolvimento acelerados e iteração agressiva sobre estabilidade e features. Em contraste, PicoClaw demonstra estagnação: nenhum PR merged em 24h, um PR stale há 60 dias e uma falha crítica de integridade de dados não tratada. IronClaw ocupa posição intermediária, com foco intencional em qualidade sobre velocidade. O denominador comum é a **ausência total de releases** em todas as plataformas no período, indicando freeze coordenado pré-lançamento ou período de acumulação de mudanças.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Abertos | PRs Merged (dia) | Releases (24h) | Críticos Abertos | Saúde |
|---------|:------------:|:----------:|:-----------:|:----------------:|:--------------:|:----------------:|:-----:|
| **NanoBot** | 6 | 31 | 22 | 4 | 0 | 1 (crônico, 6 meses) | 🟢 Alta atividade |
| **Hermes Agent** | 50 | 50 | 41 | 9 | 0 | 3 P0/P1 + 3 security | 🟠 Instável |
| **CoPaw** | 14 | 12 | ~15 | 4 | 0 | 2 críticos + 3 altos | 🟡 Estabilização |
| **ZeroClaw** | 50 | 50 | ~40 | ~5 | 0 | 6 P1 simultâneos | 🟠 Segurança crítica |
| **IronClaw** | 0 | 10 | 9 | 1 | 0 | 1 regressão (em fix) | 🟢 Estável |
| **PicoClaw** | 3 | 1 | 1 | 0 | 0 | 1 (perda de dados) | 🔴 Estagnado |
| NullClaw | 0 | 0 | — | 0 | 0 | — | ⚪ Inativo |

**Observação metodológica:** Hermes Agent e ZeroClaw reportam 50 issues + 50 PRs atualizados cada, o que representa volume dobrado em relação a NanoBot e CoPaw. Isso não indica necessariamente dobro de conteúdo, mas sim maior granularidade de eventos de rastreamento.

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência de vigor

O NanoBot (HKUDS) demonstra o perfil mais saudável entre os projetos ativos:

**Vantagens competitivas:**

| Dimensão | NanoBot | Hermes Agent | ZeroClaw |
|----------|---------|--------------|----------|
| Turnaround de bugs | 1-2 dias | 5-10 dias (est. por volume) | 7-21 dias (backlog crescente) |
| Contribuição externa | Ativa (AnySearch, OAuth email) | Predominantemente interna | Predominantemente interna |
| Divisão p1/ativos | 5/22 (23%) | ~15/41 (37%) | ~6/~40 (15%) |
| Cobertura de features | Email, Telegram, memória, busca | Desktop, multi-sessão | Segurança, voice, plugins |

**Diferenças técnicas estruturais:**

- **Arquitetura de memória:** NanoBot está em redesign profundo — recall explícito por padrão, backends plugáveis, resumos cumulativos — sinalizando amadurecimento para produção. Hermes Agent e ZeroClaw ainda resolvem bugs de estabilidade básica.
- **Maturidade de canais:** NanoBot suporta Telegram, Email, DingTalk com OAuth moderno. ZeroClaw investe em voice broker (Gemini) e plugins WASM. Hermes Agent foca em Desktop TUI.
- **Tamanho da comunidade:** NanoBot atrai contribuidores externos (PRs de features propostas e implementadas por usuários). Hermes Agent e ZeroClaw operam como projetos core-heavy com automação (Dependabot, bots CI) responsável por 40-50% dos PRs.

**Limitações identificadas:**

- Bug crônico #1697 (6 meses, alta severidade) sem resolução — única nota dissonante no perfil de responsividade.
- 5 PRs p1 simultâneos do mesmo autor (chengyongru) indicam concentração de conhecimento e risco de bottleneck.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Sessão e Persistência

Três projetos enfrentam problemas de integridade de sessão de naturezas distintas:

| Projeto | Problema | Severidade | Status |
|---------|----------|:----------:|--------|
| **PicoClaw** | Compressão destrói histórico original em `.jsonl` | 🔴 Crítica | Aberto |
| **CoPaw** | Blocos de texto vazio corrompem histórico Volcengine Ark | 🔴 Crítica | Aberto |
| **ZeroClaw** | Imagens rejeitadas por provider envenenam turns subsequentes | 🟠 Alta | PR #10480 merged |
| **NanoBot** | Resultados de busca não retornados corretamente | 🟠 Alta | Aberto (6 meses) |
| **Hermes Agent** | Desktop renderer nunca retoma sessão após WebSocket drop | 🟠 Alta | Aberto |

**Implicação:** A persistência de estado conversacional é problema recorrente. Não há consenso arquitetural sobre quando e como o histórico deve ser truncado, compactado ou preservado. NanoBot resolve proativamente com redesign de memória; outros projetos tratam casos específicos.

### 4.2 Segurança de Plugins e Channels

| Projeto | Foco | Issue de Referência |
|---------|------|---------------------|
| **ZeroClaw** | Trust store TLS em plugins WASM | #9653 (parity gap) |
| **ZeroClaw** | Advisory RUSTSEC-2026-0247 (bitmaps) | #9899 (bloqueado) |
| **ZeroClaw** | Permissões 0o644 em temp files | #10409 (aberto) |
| **Hermes Agent** | SSH sensitive-path bypass (/root) | #84639 (P2) |
| **NanoBot** | Preservação de credenciais OAuth MCP | #5338 (corrigido) |

**Padrão:** ZeroClaw lidera em maturidade de segurança — identifica, rastreia e remedia proativamente. Hermes Agent tem vulnerabilidades P2 abertas há meses. NanoBot demonstra disciplina de segurança com correções rápidas.

### 4.3 Performance de Loops e Terminação

| Projeto | Problema | Status |
|---------|----------|--------|
| **IronClaw** | Loop infinito: 593 tool calls em 70 min sem terminação | PR #7977 em revisão |
| **NanoBot** | Reasoning stream vaza em cancelamentos | PR #5600 corrigido |
| **ZeroClaw** | Stack overflow Tokio durante inicialização | #10230 P1 |

**Convergência:** Agentes autônomos com tool calling prolongado carecem de garantias de terminação determinística. IronClaw lidera com abordagem de "dominant repeated output" + wall clock cap.

### 4.4 Autenticação e OAuth

| Projeto | Feature | Progresso |
|---------|---------|------------|
| **NanoBot** | Microsoft OAuth para Office365/Outlook | PR #5609 p2 |
| **ZeroClaw** | OAuth profiles para Anthropic | PR #9420 retido (do-not-merge) |
| **Hermes Agent** | Claude Agent SDK provider (subscription OAuth) | PR #65982 needs-decision |

**Tendência:** Basic auth (IMAP/SMTP) está sendo substituído por OAuth em todos os projetos com componente de email. A deprecação é uniforme, mas a implementação fragmentada.

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Perfil Primário | Dispositivo | Domínio |
|---------|-----------------|-------------|---------|
| **NanoBot** | Desenvolvedores individuais e pequenas equipes | Desktop, servidor | Produtividade (email, Telegram, busca) |
| **Hermes Agent** | Usuários power Desktop (macOS/Windows) | Desktop TUI | Delegação pesada, multi-sessão |
| **ZeroClaw** | Desenvolvedores e operações | Servidor, CLI | Código (ZeroCode), segurança, CI/CD |
| **CoPaw** | Usuários enterprise China | Desktop Console | Produtividade multi-canal (Feishu, DingTalk) |
| **IronClaw** | Engenheiros de agentes | CLI, embedded | Agent autonomy, tool calling |
| **PicoClaw** | Usuários embarcados/IoT | Dispositivos RV1106, RISC-V | Automação low-cost |

### 5.2 Arquitetura e Filosofia

| Projeto | Paradigma | Abordagem de Memória | Canal Principal |
|---------|-----------|---------------------|-----------------|
| **NanoBot** | Modular (runners, agents, memory) | Explícita por padrão, plugável | Telegram, Email |
| **Hermes Agent** | Desktop-first (TUI) | Implícita, compressão frequente | Desktop (macOS/Windows) |
| **ZeroClaw** | Plugin-based (WASM) | Por sessão, com attachments | CLI, Telegram, webhooks |
| **CoPaw** | Multi-provider | Ses-são por provider (Volcengine, Aliyun) | Console, Feishu, DingTalk |
| **IronClaw** | Rust-native, bounded | Document-based | CLI, código |
| **PicoClaw** | Lightweight, embarcado | JSONL append-only (falho) | QQ Channel, DeltaChat |

### 5.3 Estratégia de Features

| Projeto | Feature Distintiva | Maturidade |
|---------|-------------------|------------|
| **NanoBot** | AnySearch provider (key-optional) | Beta — PR aberto |
| **ZeroClaw** | Goal Mode (roadmap V1/V2) | Design ativo |
| **ZeroClaw** | Gemini speech-to-speech broker | Batch tracker ativo |
| **CoPaw** | Qwen3.8 (1M context) | PR mergeado |
| **Hermes Agent** | Claude Agent SDK provider | Needs decision |
| **IronClaw** | Bounded integration test execution | PR #7992 XL |
| **PicoClaw** | — | Estagnado |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Issues/dia | PRs/dia | Merge Rate | Perfil |
|------|----------|:----------:|:-------:|:----------:|--------|
| **🚀 Acelerando** | NanoBot, CoPaw | 6-14 | 12-31 | 15-20% | Bug fixing rápido, features inbound |
| **⚡ High Volume** | Hermes Agent, ZeroClaw | 50 | 50 | ~10% | Many-core, dívida técnica |
| **🔧 Consolidando** | IronClaw | 0 | 10 | ~10% | Manutenção interna, qualidade |
| **⚠️ Estagnado** | PicoClaw | 3 | 1 | 0% | Sem contribuição, bugs críticos |

### 6.2 Contribuição Externa

| Projeto | Indicadores de Contribuição Externa |
|---------|-------------------------------------|
| **NanoBot** | 2 PRs de contributors externos (AnySearch, #5583 hint). Comunidade engajada em issues (7 comentários em #5505). Turnaround 1-2 dias. |
| **CoPaw** | Contribuidor iniciante em #7183 (preload skills). Issues com feedback detalhado de usuários China. |
| **Hermes Agent** | Predominantemente interno. Automação (Dependabot, bots) representa ~50% dos PRs. |
| **ZeroClaw** | Interno com RFC process estruturado (#9998 aceito). Comunidade participa de debates de arquitetura. |
| **IronClaw** | Quase 100% interno (henrypark133, dependabot, ironclaw-ci[bot]). |
| **PicoClaw** | Nenhuma contribuição externa detectada. PR #3222 stale há 60 dias sem interação. |

### 6.3 Gestão de Críticos

| Projeto | Bug Crítico Mais Antigo | Idade | Status Atual |
|---------|------------------------|:-----:|--------------|
| **NanoBot** | #1697 (resultado não retornado) | ~6 meses | Reativado, sem fix concreto |
| **Hermes Agent** | #97764 (renderer não retoma sessão) | ~2 semanas | Aberto |
| **PicoClaw** | #3351 (perda de dados) | 1 dia | Aberto, sem atribuição |
| **CoPaw** | #7402 (texto vazio corrompe sessão) | 1 dia | Aberto, análise em curso |
| **ZeroClaw** | #9899 (RUSTSEC advisory) | ~21 dias | Bloqueado por cadeia de dependência |

**Observação:** PicoClaw é o único projeto com bug crítico reportado há apenas 1 dia sem atribuição. NanoBot é o único com bug crônico de 6 meses, mas demonstra responsividade em bugs novos.

---

## 7. Sinais de Tendência

### 7.1 Do Implícito ao Explícito em Memória

> **Sinal:** NanoBot (#5571), CoPaw (#7402), ZeroClaw (#9998) todos enfrentam problemas de integridade de histórico.

O modelo de "memória implícita" onde o agente decide o que reter está sendo abandonado em favor de **memória explícita** — recall configurável, persistência granular, anexos de prompt por sessão. NanoBot lidera a transição com arquitetura de backends plugáveis.

### 7.2 OAuth como Padrão de Autenticação

> **Sinal:** NanoBot (#5609), ZeroClaw (#9420), Hermes Agent (#65982) todos implementam ou consideram OAuth para providers.

Basic auth para IMAP/SMTP está sendo substituído. A integração com provedores oficiais (Microsoft 365, Anthropic, Claude SDK) agora requer OAuth com fluxos de subscription. Isso beneficia usuários corporativos e reduz vulnerabilidades de credenciais.

### 7.3 Bounded Agents e Terminação Determinística

> **Sinal:** IronClaw (#7977), ZeroClaw (#10409), NanoBot (#5600) todos tratam de loops infinitos ou vazamento de recursos.

A próxima geração de agentes requer garantias de terminação: wall clock caps, detecção de não-progresso (dominant repeated output), e cleanup forçado de recursos. IronClaw está mais avançado com abordagem de bounded execution.

### 7.4 Segurança como Primeiro Classe

> **Sinal:** ZeroClaw (7+ issues de segurança ativas), Hermes Agent (3 security issues), NanoBot (OAuth credential preservation).

Segurança em agentes de IA subiu de P3 para P1. Trust store TLS em plugins WASM, permissões de arquivos temporários, path bypass em SSH e secret exposure via template injection são problemas recorrentes. ZeroClaw demonstra maturidade com rastreamento via RUSTSEC e advisory coordination.

### 7.5 Fragmentação de Canais e Multi-Provider

> **Sinal:** NanoBot (Telegram, Email, DingTalk), CoPaw (Feishu, DingTalk, Console), ZeroClaw (Telegram, webhooks, voice).

Não há padrão de facto para canais de comunicação. Cada projeto suporta stack diferente baseado em base de usuários: NanoBot foca em Telegram + email corporativo; CoPaw em ecossistema China (Feishu, DingTalk); ZeroClaw em voice broker (Gemini) e webhooks. A diferenciação por canais é estratégia de crescimento.

### 7.6 Desktop como Campo de Batalha de Estabilidade

> **Sinal:** Hermes Agent (P0/P1 no Desktop TUI), CoPaw (Console Desktop), ZeroClaw (Desktop companion).

A UI Desktop é onde a instabilidade se manifesta mais dolorosamente para usuários finais. Hermes Agent enfrenta crash, duplicação de mensagens e session resume

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-31

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 31/08/2026, com 31 PRs atualizados e 6 issues modificadas nas últimas 24h. O projeto demonstra vigorosa演进, especialmente nos módulos de **memória** (3 PRs em prioridade), **agente/runners** (refatorações p1), **email** (OAuth e filtros) e **Telegram** (streaming). Das 22 PRs abertas, 5 são marcadas como p1 (críticas), sinalizando uma sprint de estabilização em curso. Não há releases novas, mas 4 PRs foram fechados/merged hoje, indicando progresso tangível.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões entre 2026-08-30 e 2026-08-31. A ausência de release coincide com a elevada atividade de PRs em refatoração e bug fixes, sugerindo que a equipe pode estar preparando um release para o próximo ciclo.

---

## 3. Progresso do Projeto

**PRs fechados/merged hoje (4):**

| PR | Título | Impacto |
|---|---|---|
| [#5608](https://github.com/HKUDS/nanobot/pull/5608) | refactor(agent): defer transcript assembly to runner | Centraliza lógica de montagem de transcrição no `AgentRunner`, preparando o terreno para as refatorações de fitting e compaction |
| [#5600](https://github.com/HKUDS/nanobot/pull/5600) | fix(agent): close native reasoning on cancellation | Corrige vazamento de stream de reasoning em cancelamentos, garantindo `reasoning_end` correto |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | fix(mcp): preserve credentials when OAuth store read fails | Corrige overwrite acidental de credenciais OAuth de outros servidores MCP |
| [#5582](https://github.com/HKUDS/nanobot/issues/5582) | [bug] Cron jobs crash (via issue #5582) | Correção de crash em tarefas agendadas via WebUI quote/@mention |

**PRs merged de destaque (contribuição externa):**

| PR | Título | Impacto |
|---|---|---|
| [#5583](https://github.com/HKUDS/nanobot/issues/5583) | [enhancement] Append "try a different approach" hint to tool exceptions | Melhora UX de recuperação de erros em ferramentas |

---

## 4. Temas Quentes da Comunidade

**Issue com maior engajamento:**

| Issue | Título | Comentários | Reações | Observação |
|---|---|---|---|---|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Add AnySearch as web search provider | 7 | 0 | Proposta de integração de provedor de busca alternativo (key-optional) |
| [#1697](https://github.com/HKUDS/nanobot/issues/1697) | Result wasn't returned & output incorrect | 1 | 0 | Relatado em março, reativado em agosto — possível bug crônico de retenção de resultados |

**Análise:** A issue #5505 (AnySearch) lidera em comentários — reflexo de interesse da comunidade em diversificar provedores de busca além do Serper. O PR correspondente [#5607](https://github.com/HKUDS/nanobot/pull/5607) já está aberto, demonstrando alinhamento rápido entre demanda e implementação. A issue #1697, aberta há quase 6 meses, foi reativada, sugerindo frustração persistente do usuário com fluxos de consulta (possivelmente em integrações de trading/crypto com o Telegram).

**PRs com maior visibilidade:**

| PR | Título | Prioridade | Área |
|---|---|---|---|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | fix(session): move persistence off event loop | p1 | Core/Stabilidade |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | feat(memory): require explicit recall by default | p1 | Memória |
| [#5612](https://github.com/HKUDS/nanobot/pull/5612) | refactor(agent): unify runner request fitting | p1 | Agent/Performance |

Três PRs p1 simultâneos do mesmo autor (`chengyongru`) indicam uma frente coordenada de refatoração do núcleo do agente, focada em **performance de fitting de contexto** e **separação de responsabilidades** (persistência, memória, compilação de transcrição).

---

## 5. Bugs e Estabilidade

**Bugs reportados (2 issues abertas):**

| # | Título | Severidade | Link |
|---|---|---|---|
| #5505 | AnySearch provider (enhancement, não bug) | — | [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) |
| #1697 | Result wasn't returned & output incorrect | **Alta** (crônico, 6 meses) | [Issue #1697](https://github.com/HKUDS/nanobot/issues/1697) |

**Bugs corrigidos/fechados (3):**

| # | Título | Severidade | Link |
|---|---|---|---|
| #5582 | Cron jobs crash at add/fire time | **Alta** (WebUI quote/@mention) | [Issue #5582](https://github.com/HKUDS/nanobot/issues/5582) |
| #5593 | Session rate-limit state retains expired one-shot sessions | **Média** | [Issue #5593](https://github.com/HKUDS/nanobot/issues/5593) |
| #5463 | DingTalk does not observe/drain background tasks | **Média** | [Issue #5463](https://github.com/HKUDS/nanobot/issues/5463) |

**Bugs em PRs abertos (prioridade p1-p2):**

| PR | Título | Severidade | Link |
|---|---|---|---|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | Session persistence off event loop | **Alta** (race condition em event loop) | PR #5580 |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | Telegram streaming preview → rich upgrade | **Média** | PR #5531 |
| [#5613](https://github.com/HKUDS/nanobot/pull/5613) | Responses cleanup before sending to providers | **Média** | PR #5613 |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Email mark \Seen before delivery | **Média** | PR #5605 |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) | WebUI rollback rejected message side effects | **Média** | PR #5601 |

**Análise de estabilidade:** O projeto apresenta **3 bugs de severidade Alta** (1 crônico aberto, 1 corrigido, 1 em PR p1). A ênfase em "move persistence off event loop" (#5580) indica que race conditions no ciclo de eventos são uma área crítica sendo tratada proativamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas features propostas (issues abertas):**

| # | Título | Área | Potencial Impacto | Link |
|---|---|---|---|---|
| #5505 | AnySearch web search provider (key-optional) | Web Search | Médio — adiciona provedor alternativo | [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) |
| #5583 | "Try different approach" hint on tool exceptions | UX/Agent | Baixo — melhoria de feedback | [Issue #5583](https://github.com/HKUDS/nanobot/issues/5583) |

**Features em desenvolvimento (PRs abertos):**

| PR | Título | Área | Prioridade | Link |
|---|---|---|---|---|
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | Require explicit memory recall by default | Memória | **p1** | PR #5571 |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) | Pluggable memory backend | Memória | p2 | PR #5570 |
| [#5610](https://github.com/HKUDS/nanobot/pull/5610) | Cumulative memory summaries | Memória | p2 | PR #5610 |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | Bound reasoning replay to latest assistant turn | Agent/Performance | Feature | PR #5611 |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Microsoft OAuth for Office365/Outlook email | Email/Auth | p2 | PR #5609 |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | Email filter by recipient alias | Email | p2 | PR #5606 |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | Telegram streaming rich messages | Telegram/UX | Feature | PR #5614 |

**Sinais de roadmap identificados:**

1. **Memória como área estratégica:** 4 PRs relacionados a memória (p1 + p2 + feature + cumulative) indicam redesign da arquitetura de memória — de recall implícito para explícito, com backends plugáveis.
2. **Agent runner refactoring:** 3 PRs (#5568, #5610, #5612) refatoram o `AgentRunner` para separar concerns (context compaction, request fitting, transcript assembly).
3. **Modernização de auth:** Microsoft OAuth para email substitui basic auth (IMAP/SMTP) — alinhado com deprecação de auth tradicional.
4. **Rastreamento de reasoning:** #5611 bounding reasoning replay é otimização de performance significativa (elimina prefill redundante).

---

## 7. Resumo de Feedback dos Usuários

**Dores relatadas:**

| Cenário | Problema | Issue |
|---|---|---|
| Busca web via Telegram | Resultados não retornados automaticamente — usuário precisa perguntar múltiplas vezes | [#1697](https://github.com/HKUDS/nanobot/issues/1697) |
| Integração DingTalk | Tarefas em background não são finalizadas corretamente, potencialmente causando vazamento de tasks | [#5463](https://github.com/HKUDS/nanobot/issues/5463) |
| Tarefas agendadas (WebUI) | Cron jobs crash ao usar quotes/@mentions — recurso popular do WebUI comprometido | [#5582](https://github.com/HKUDS/nanobot/issues/5582) |
| Email | Mensagens rejeitadas por filtro ainda recebem \Seen, confudindo usuários | [#5605](https://github.com/HKUDS/nanobot/issues/5605) |

**Satisfação inferred:**

- **Comunidade ativa:** 7 comentários na issue #5505 indicam interesse em provedores de busca alternativos.
- **Contribuição externa:** Usuário `cleverLucky` propõe e implementa AnySearch (#5505 → #5607), demonstrando comunidade engajada.
- **Correções rápidas:** Bugs reportados em 21-29/08 estão sendo resolvidos em 30-31/08 (turnaround de 1-2 dias), indicando equipe responsiva.

**Cenários de uso emergentes:**
- **Agentes de trading:** Uso do bot para consultar contratos e dados de exchange (Telegram + crypto).
- **Email profissional:** Integração com Office365 via OAuth (demanda corporativa).
- **WebUI com quotes:** Interação via citações de respostas anteriores — padrão de uso identificado que expôs o bug de cron jobs.

---

## 8. Backlog que Merece Atenção

**Issues sem resposta ou abandonadas:**

| # | Título | Idade | Estado | Riscos | Link |
|---|---|---|---|---|---|
| #1697 | Result wasn't returned & output incorrect | **~6 meses** | OPEN | Bug crônico não resolvido — afeta experiência de busca; reativado mas ainda sem solução concreta | [Issue #1697](https://github.com/HKUDS/nanobot/issues/1697) |

**PRs há tempo sem progresso:**

| # | Título | Idade | Estado | Riscos | Link |
|---|---|---|---|---|---|
| #5338 | fix(mcp): preserve credentials when OAuth store read fails | 20 dias | **CLOSED** ✅ | — | [PR #5338](https://github.com/HKUDS/nanobot/pull/5338) |
| #5412 | fix(gateway): flush background child output to logs | 14 dias | OPEN | Logs de gateway podem estar incompletos, dificultando debugging | [PR #5412](https://github.com/HKUDS/nanobot/pull/5412) |
| #5413 | fix(providers): apply fallback policy to raised errors | 14 dias | OPEN | Providers que levantam exceptions podem pular fallback chain | [PR #5413](https://github.com/HKUDS/nanobot/pull/5413) |

**Priorização recomendada:**

1. **#1697** — Bug aberto há 6 meses, reativado. Necesita triagem e assignment. Potencial impacto em usuários de trading/crypto.
2. **#5413** — Provider fallback é resiliência crítica. 14 dias sem progress pode deixar sistema vulnerável a falhas em cascata.
3. **#5412** — Debugging de gateway com logs incompletos afeta capacidade de suporte.

---

## Ficha-Resumo de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| PRs nas últimas 24h | 31 | 🟢 Muito ativo |
| PRs abertos | 22 | 🟢 Pipeline saudável |
| PRs p1 em aberto | 5 | 🟡 Atenção — sprint de estabilização |
| PRs mergeados/fechados hoje | 4 | 🟢 Progresso tangível |
| Issues abertas/ativas | 2 | 🟢 Gerenciável |
| Bugs de severidade alta abertos | 1 (#1697) | 🔴 Crônico — requer atenção |
| Releases últimas 24h | 0 | ⚪ Nenhuma |
| Contribuições externas | 2 (AnySearch, OAuth email) | 🟢 Ecossistema ativo |
| Tempo médio de resposta em issues | ~1-2 dias | 🟢 Equipe responsiva |

**Veredicto:** NanoBot está em **fase de refatoração profunda** (memória, agent runner, persistência), com pipeline de PRs robusto e equipe responsiva. O principal risco é o bug crônico #1697 (6 meses) e a concentração de 5 PRs p1 simultâneos que precisam de review. A ausência de release não é preocupante dado o volume de mudanças integrado.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-31

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade com **50 issues e 50 PRs atualizados nas últimas 24h**. A base de código demonstra instabilidade moderada no Desktop (macOS/Windows) com múltiplos bugs P1 afetando sessões e compressão de contexto, além de preocupações de segurança em `auth_store` e SSH path bypass. A comunidade está engajada em temas de escalabilidade multi-sessão e integração com provedores oficiais (Claude Agent SDK). Não houve lançamentos de novas versões no período.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** A ausência de releases combinada com volume elevado de issues abertas (46 ativas) sugere foco em estabilização de código antes de próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (9 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#89235](https://github.com/NousResearch/hermes-agent/pull/89235) | Persist parent links on dependency-block outcomes | Melhora recompute de cards bloqueados |
| [#89234](https://github.com/NousResearch/hermes-agent/pull/89234) | Kanban delete/archive guards | Previne deleção de tasks com worker ativo |
| [#89236](https://github.com/NousResearch/hermes-agent/pull/89236) | OPS-PROBE priority-inherit probe fixture | Testes de prioridade mais robustos |
| [#89237](https://github.com/NousResearch/hermes-agent/pull/89237) | Allowlist tabjoy-e2e-preflight.sh | Libera script fleet específico no guard |
| [#89644](https://github.com/NousResearch/hermes-agent/pull/89644) | Fast-track merge para PRs verdes do tabjoy-fleet | Automação de merge SLA |
| [#96544](https://github.com/NousResearch/hermes-agent/pull/96544) | Fix lifecycle walker bare-path | Corrige over-blocking em paths |
| [#96535](https://github.com/NousResearch/hermes-agent/pull/96535) | Kanban: refuse delete/archive while worker run active | Fecha hole de dangling task_links |
| [#98865](https://github.com/NousResearch/hermes-agent/pull/98865) | Bug: Timeline drops loaded prompts | Correção UI do Desktop |
| [#98816](https://github.com/NousResearch/hermes-agent/pull/98816) | Bug: Real-profile browsing resolves no Chromium | Correção path sob Hermes profiles |
| [#82888](https://github.com/NousResearch/hermes-agent/pull/82888) | Bug: async_delegation batch notifications como user messages | Corrige flood no transcript |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — Skills index stale (125 comentários)
   - **Status:** `degraded` | Index 29.8h old (limite: 26h)
   - Impacto: Documentação `/docs/skills` desatualizada
   - Demanda: Automação de rebuild do workflow cron

2. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** — Automated Nous integration blocked (45 comentários)
   - Conflitos em `cron/jobs.py` no merge Nous→Enterkey
   - Relevante para infraestrutura de CI/CD

3. **[#94248](https://github.com/NousResearch/hermes-agent/issues/94248)** — Gateway SIGSEGV (10 comentários, P1)
   - Crash em macOS arm64 após delegate deadlines (600s)
   - 12 crash reports documentados entre 19-24/08

### PRs com Maior Potencial de Impacto

| PR | Título | Complexidade |
|----|--------|--------------|
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | Claude Agent SDK provider (subscription OAuth) | Alta — requer decisão |
| [#98890](https://github.com/NousResearch/hermes-agent/pull/98890) | Expor --context-from/--attach-to-session no cron CLI | Média |
| [#98805](https://github.com/NousResearch/hermes-agent/pull/98805) | Multi-session-coordination skill | Média — feature request |
| [#80628](https://github.com/NousResearch/hermes-agent/pull/80628) | Context compressor refactor (skill-prune) | Alta — god-file split |

---

## 5. Bugs e Estabilidade

### P0/P1 — Críticos (3 issues)

| # | Título | Componente | Link |
|---|--------|------------|------|
| #94248 | SIGSEGV 17-72ms após delegate deadlines | agent/gateway | [Issue](https://github.com/NousResearch/hermes-agent/issues/94248) |
| #97764 | Desktop renderer nunca retoma sessão após ws drop | desktop/tui | [Issue](https://github.com/NousResearch/hermes-agent/issues/97764) |
| #97948 | /compress timeout 120s + lease lost | agent/compression | [Issue](https://github.com/NousResearch/hermes-agent/issues/97948) |

### P2 — Altos (8 issues)

| # | Título | Componente | Link |
|---|--------|------------|------|
| #93959 | Branch creation fails em sessions existentes | desktop/sessions | [Issue](https://github.com/NousResearch/hermes-agent/issues/93959) |
| #61451 | Credential pool 429 esgota toda credencial | agent/auth | [Issue](https://github.com/NousResearch/hermes-agent/issues/61451) |
| #96731 | browser_exec 420s timeout no Windows | desktop/browser | [Issue](https://github.com/NousResearch/hermes-agent/issues/96731) |
| #84639 | SSH sensitive-path bypass (/root) | cli/terminal | [Issue](https://github.com/NousResearch/hermes-agent/issues/84639) |
| #98578 | REST requests perdem ?profile= | desktop/profiles | [Issue](https://github.com/NousResearch/hermes-agent/issues/98578) |
| #98524 | Mensagens duplicadas no transcript | desktop/tui | [Issue](https://github.com/NousResearch/hermes-agent/issues/98524) |
| #98846 | shutdown_watchdog WARNING no Windows | gateway | [Issue](https://github.com/NousResearch/hermes-agent/issues/98846) |
| #98888 | Docker tests falham em root-homed runners | gateway/docker | [Issue](https://github.com/NousResearch/hermes-agent/issues/98888) |

### Bugs de Segurança (3 issues)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #84639 | SSH authorized_keys bypass | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/84639) |
| #98717 | ${VAR} template exibe secret em plaintext | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/98717) |
| #98814 | Windows updater taskkill self | P1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/98814) |

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Componente | Status | Link |
|---|---------|------------|--------|------|
| #65982 | Claude Agent SDK como provider oficial | agent/providers | needs-decision | [PR](https://github.com/NousResearch/hermes-agent/pull/65982) |
| #98196 | App iPhone companion nativo | desktop | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/98196) |
| #97390 | Per-channel background idle compaction | gateway/compression | needs-decision | [Issue](https://github.com/NousResearch/hermes-agent/issues/97390) |
| #98852 | Botão "Retry in X hours" para limits | desktop/usage | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/98852) |
| #97301 | Local file download para server deployments | desktop | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/97301) |
| #98805 | Multi-session-coordination skill | tools/skills | P3 | [PR](https://github.com/NousResearch/hermes-agent/pull/98805) |

**Sinais de roadmap:** Foco em multi-sessão/cross-session coordination, refinamento de providers oficiais (Claude SDK), e UX mobile companion.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **Estabilidade Desktop (macOS/Windows)**
   - Sessões travam após network drop
   - Branch creation quebra em sessões existentes
   - Renderização duplicada após updates
   - Timeline rail não funciona corretamente

2. **Problemas de Contexto Grande**
   - Compressão falha silenciosamente
   - 1500+ mensagens causam loop de summarização
   - UI fica completamente morta

3. **Windows Platform Gap**
   - Timeout 420s em browser_exec
   - Updater se mata sozinho
   - shutdown_watchdog polui logs
   - Bot WSL desaparece do roster

4. **Credential Pool Design**
   - Um 429 em um modelo bloqueia todos os outros da mesma credencial

### Cenários de Uso Reportados

- **Heavy delegation:** Sessões com delegate tasks em batch flooding transcript
- **Multi-profile:** Usuários com 7+ profiles no Desktop
- **Remote backend:** MiniPC server + Desktop client em máquinas diferentes

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Decisão (Stale > 7 dias)

| # | Título | Criado | Prioridade | Link |
|---|--------|--------|------------|------|
| #61451 | credential_pool exhaustion | 2026-07-09 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/61451) |
| #66616 | Skills index degraded | 2026-07-18 | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #25607 | TUI composer stale paste | 2026-05-14 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/25607) |
| #32719 | Pre-dispatch hook no ToolRegistry | 2026-05-26 | P3 | [PR](https://github.com/NousResearch/hermes-agent/pull/32719) |
| #65982 | Claude Agent SDK provider | 2026-07-16 | P3 (needs-decision) | [PR](https://github.com/NousResearch/hermes-agent/pull/65982) |

### PRs Em Espera de Decisão/Merge

| # | Título | Criado | Status | Link |
|---|--------|--------|--------|------|
| #65982 | Claude Agent SDK provider | 2026-07-16 | needs-decision | [PR](https://github.com/NousResearch/hermes-agent/pull/65982) |
| #32719 | Pre-dispatch enforcement hook | 2026-05-26 | needs-decision | [PR](https://github.com/NousResearch/hermes-agent/pull/32719) |
| #97390 | Per-channel idle compaction | 2026-08-28 | needs-decision | [Issue](https://github.com/NousResearch/hermes-agent/issues/97390) |
| #80628 | Context compressor refactor (LB2) | 2026-08-06 | em revisão | [PR](https://github.com/NousResearch/hermes-agent/pull/80628) |

---

## Métricas de Saúde do Projeto (2026-08-31)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 46 | ⚠️ Elevado |
| PRs abertos (24h) | 41 | 🔴 Alto |
| Releases (24h) | 0 | — |
| P0/P1 bugs abertos | 6 | 🔴 Crítico |
| Security issues | 3 | ⚠️ Atenção |
| Needs-decision items | 5+ | ⚠️ Decisão pendente |
| Dead code identificado | 1 | ✅ Limpeza |

**Veredicto:** O projeto está em período de alta atividade de bug fixing, com foco necessário em estabilidade do Desktop (especialmente Windows) e resolução de issues P1 antes do próximo release. A ausência de releases recentes combinada com volume elevado de issues indica possível freeze antes de tag.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-31

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **baixa atividade no período analisado**, com 3 issues abertas e 1 pull request em aberto. Não houve lançamentos recentes nem PRs mesclados nas últimas 24h. A comunidade reporta dois problemas significativos: a ausência de persistência real no armazenamento de sessões (que causa perda de histórico) e lentidão na interface web em dispositivos embarcados de baixo desempenho. O único PR ativo (#3222) está marcado como *stale*, sinalizando possível abandono ou necessidade de reavaliação pela equipe mantenedora.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões desde o período anterior.

> ⚠️ *Recomendação: Verificar o histórico de releases em [github.com/sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/releases) para contexto de cadência de releases.*

---

## 3. Progresso do Projeto

**Nenhum PR mesclado ou fechado no período.**

O único PR ativo registrado merece atenção:

- **#3222** — *refactor(deltachat): cleanup implementation, documentation -200LOC* ([link](https://github.com/sipeed/picoclaw/pull/3222))
  - **Autor:** trufae
  - **Status:** ABERTO (marcado como *stale* desde 2026-08-30)
  - **Resumo:** Remove features legadas, atualiza documentação, renomeia campos e adiciona nova seção de configuração para DeltaChat.
  - **Observação:** ⚠️ PR parado há quase 2 meses; risco de não ser aceito ou de perder relevância.

---

## 4. Temas Quentes da Comunidade

**Todas as 3 issues abertas são novos reports sem comentários ainda**, indicando que ainda não houve discussão significativa. Porém, pelo conteúdo, identificam problemas estruturais importantes:

| Issue | Tema | Impacto |
|-------|------|---------|
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Persistência de sessão inexistente (compressão destrói histórico) | **Alto** — perda irreversível de dados |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Lentidão no input web UI em hardware limitado | **Médio-alto** — usabilidade degradada |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | Canal QQ não funcional (erro de autenticação 401) | **Médio** — feature quebrada |

**Análise:** A issue #3351 destaca um problema arquitetural sério — o `JSONLStore` não é verdadeiramente *append-only* conforme documentado, pois o método `SetHistory` reescreve o arquivo inteiro, causando perda permanente de dados após compressão de sessões longas. Este é um **candidato forte para priorização**.

---

## 5. Bugs e Estabilidade

### Alta Severidade
| Issue | Descrição | Link |
|-------|-----------|------|
| #3351 | compressão automática de sessão **deleta fisicamente** registros originais em `.jsonl` | [Issue #3351](https://github.com/sipeed/picoclaw/issues/3351) |

### Média Severidade
| Issue | Descrição | Link |
|-------|-----------|------|
| #3350 | Input box trava em dispositivos embarcados (RV1106, RISC-V) com muitos mensagens | [Issue #3350](https://github.com/sipeed/picoclaw/issues/3350) |
| #3349 | QQ Channel retorna erro 401 na autenticação WebSocket | [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) |

> 🔴 **Alerta:** A issue #3351 representa uma **regressão de integridade de dados**. Recomenda-se triagem imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum pedido de feature explícito registrado no período.** Porém, as issues indicam demandas implícitas:

1. **Persistência confiável de sessões** (#3351)
   - *Demanda:* Armazenamento verdadeiramente *append-only* com suporte a rollback
   - *Sinal:* Usuários precisam de histórico completo mesmo após compressão

2. **Otimização de performance para web UI** (#3350)
   - *Demanda:* Virtualização de lista / *debounce* / lazy loading para grandes contextos
   - *Sinal:* Crescente uso em dispositivos IoT/embarcados

3. **Correção de canal QQ** (#3349)
   - *Demanda:* Autenticação funcional com API de gateway do QQ
   - *Sinal:* Usuários esperam estabilidade multi-canal

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Dor | Cenário | Severidade |
|-----|---------|------------|
| **Perda irreversível de histórico** | Usuários com conversas longas usam `picoclaw-launcher` e, após compressão, perdem todo o contexto anterior — mesmo consultando o arquivo `.jsonl` | 🔴 Crítica |
| **Lentidão em hardware limitado** | Desenvolvedores IoT usando boards RV1106/RISC-V experimentam delays perceptíveis ao digitar após积累 mensagens | 🟡 Moderada |
| **Falha no canal QQ** | Usuários testando em Docker e Linux x86 não conseguem autenticar via gateway QQ (erro 11241) | 🟡 Moderada |

### Satisfação/Insatisfação
- **Insatisfação elevada** com a política de compressão de sessões — usuários identificam que o problema é *no arquivo*, não na UI.
- **Frustração** com a experiência em dispositivos de baixo custo, onde o produto parece não ter sido testado.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Link | Prioridade |
|------|------|-------|--------|------|------------|
| PR #3222 — refactor deltachat | PR | ~60 dias | *stale* | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 🔴 Reavaliar |
| Issue #3351 — perda de dados em sessão | Bug | 1 dia | Aberta | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 🔴 Crítica |
| Issue #3350 — lentidão web UI | Bug/Perf | 1 dia | Aberta | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 🟠 Alta |
| Issue #3349 — QQ channel quebrado | Bug | 1 dia | Aberta | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 🟡 Média |

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 0 |
| Engagement (comentários total) | 0 |
| Engajamento (reações total) | 0 |

---

## Saúde Geral do Projeto 🟡

| Dimensão | Status | Observação |
|----------|--------|------------|
| **Atividade** | 🔴 Baixa | Sem merges, sem releases |
| **Bugs críticos** | 🔴 Alto | Perda de dados não resolvida |
| **Manutenção de PRs** | 🔴 Negligenciada | PR #3222 está *stale* |
| **Engajamento** | 🟡 Moderado | 3 issues novas em 24h |
| **Estabilidade** | 🟠 Atenção | Canal QQ quebrado |

> **Recomendação executiva:** Priorizar triagem da issue #3351 (persistência de dados) antes do próximo release. Reavaliar o destino do PR #3222 com o autor. Investigar causa do erro 401 no canal QQ.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-31

---

## 1. Panorama do Dia

O IronClaw apresenta alta atividade de PRs em 31 de agosto de 2026, com **10 pull requests atualizadas nas últimas 24 horas** (9 abertas, 1 fechada). Não há issues novas ou issues ativas no período, indicando foco da equipe em trabalho interno via PRs. A atividade é majoritariamente de manutenção: updates de dependências via Dependabot (5 PRs) e melhorias de qualidade de código (5 PRs funcionais). O projeto demonstra saúde operacional estável, sem novos bugs reportados ou regression hits. Nenhum release foi publicado hoje, mas múltiplos PRs de alto impacto aguardam merge.

---

## 2. Lançamentos

**Nenhum novo release hoje (2026-08-31).**

O projeto não publicou versões nas últimas 24h. Isso é consistente com o padrão de trabalho via PRs internos sem necessidade imediata de release formal. Recomenda-se monitorar os PRs de grande porte (#7977, #7992) que, uma vez merged, podem justificar um release de correções.

---

## 3. Progresso do Projeto

### PR Merged/Closed Hoje

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#7959](https://github.com/nearai/ironclaw/pull/7959) | `chore(deps): bump everything-else group (15 updates)` | dependabot[bot] | **Closed** em 2026-08-30 |

**Análise:** O PR #7959 atualizou 15 dependências (uuid, base64, toml, etc.) e foi fechado com sucesso. Isso indica que o pipeline de atualização de dependências está funcionando corretamente. **Contribuições não-merged aguardando review:**

- **[#7992](https://github.com/nearai/ironclaw/pull/7992)** — `ci: unify bounded integration execution` (size: XL, risk: medium) —henrypark133 (core)
  - Unifica execução de testes de integração em um único `cargo nextest run` com limite de concorrência de 4 testes. Remove projeções shell redundantes. **Impacto:** Melhoria significativa de DX e velocidade de CI.

- **[#7977](https://github.com/nearai/ironclaw/pull/7977)** — `fix(loop): terminate on dominant repeated output, cap interactive wall clock` (size: XL, risk: low) —henrypark133 (core)
  - Restaura capacidade de terminação por falta de progresso. O run `e3513a4e` executou 593 chamadas de ferramenta em 70 minutos sem terminação. **Impacto:** Corrige regressão de loop infinito introduzida por #7531.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações registrados hoje.**

Todos os PRs ativos registram 👍: 0 e `undefined` comentários. Isso indica:
- **Baixa visibilidade externa** — a comunidade não está engajada diretamente nos PRs.
- **Processo interno** — o trabalho está sendo conduzido majoritariamente por contribuidores core/experienced (dependabot + ironclaw-ci[bot] + standardtoaster + henrypark133).

**Observação:** O padrão de kontribusiuição é fortemente centralizado em membros do time nearai, com automação (Dependabot e bots CI) responsável por ~50% dos PRs.

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertas

| # | Título | Severidade | Escopo |
|---|--------|------------|--------|
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | `fix(memory): a missing document is a domain failure, not a malformed request` | **Baixa** | memory |
| [#7990](https://github.com/nearai/ironclaw/pull/7990) | `fix(tool-disclosure): an unresolvable tool name is not an encoding error` | **Baixa** | tool-disclosure |

**Análise:**

- **#7985:** `NativeMemoryService::read` converte `read_document` retornando `None` em `MemoryServiceError::input()`, que mapeia para `FailureKind::InputEncode` — menghasilkan mensagem "the tool input could not be encoded", que é语义 incorreta para documento ausente. **Fix:** Usar `FailureKind` apropriado para falhas de domínio.

- **#7990:** O helper `failed_invalid_input` em tool-disclosure aplica `FailureKind::InputEncode` universalmente, incluindo para nomes de ferramenta não-resolvíveis, que não são erros de encoding. **Fix:** Diferenciar tipos de falha.

**Regressão Crítica em Andamento:**

- **#7977** addressa regressão onde runs de produção podem executar **593 tool calls em 70 minutos** sem terminação — um loop infinito por falta de mecanismo de detecção de não-progresso.

### Status de Estabilidade
| Métrica | Valor |
|---------|-------|
| Bugs críticos abertos | 0 |
| Regressões conhecidas | 1 (#7977 - em processo de fix) |
| Crashes reportados | 0 |

**Veredicto:** Estabilidade boa, com 2 bugs semânticos de baixa severidade e 1 regressão de loop sendo corrigida ativamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs com Sinais de Roadmap

| # | Título | Tipo | Sinal |
|---|--------|------|-------|
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | `fix(loop): terminate on dominant repeated output, cap interactive wall clock` | **Bug/Feature** | Geração de agents mais robusta com terminação determinística |
| [#7992](https://github.com/nearai/ironclaw/pull/7992) | `ci: unify bounded integration execution` | **Infraestrutura** | Melhoria de DX e velocidade de pipeline CI/CD |

**Análise de Sinais:**

1. **Loop control:** O PR #7977 demonstra foco em tornar loops de agents mais previsíveis e terminated. Isso sugere roadmap的方向 de produção-ready agents com garantias de terminação — crítico para cenários de produção.

2. **Infraestrutura de testes:** A unification de testes de integração (#7992) indica profissionalização do projeto e preparação para escala de contribuições.

3. **Dependabot activity (5 PRs):** Atualizações constantes de dependências sugerem projeto bem mantido com foco em security patches (especialmente wasmtime, tokio-tungstenite).

**Sem issues de feature request externas hoje.** O roadmap parece driven internamente.

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback de usuários registrado nas últimas 24h** (0 issues abertas/ativas, 0 comentários em PRs).

**Contexto inferido dos PRs:**

- **Dores identificadas indiretamente:**
  - Mensagens de erro confusas (#7985: "tool input could not be encoded" para documento ausente)
  - Loop infinito em produção (#7977: run de 593 chamadas em 70 min)
  - Velocidade de CI (#7992: unification de testes)

- **Cenários de uso implícitos:**
  - Agents autônomos com ferramentas de memória e tool-disclosure
  - Execução de tool calls em ambientes de produção
  - Pipeline CI/CD com testes de integração

**Satisfação:** Não há indicadores negativos explícitos. O projeto parece estável para seus usuários atuais.

---

## 8. Backlog que Merece Atenção

### PRs Sem Atividade Recente (Long-Standing)

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | `chore(deps): bump tokio-tungstenite 0.29.0 → 0.30.0` | 2026-08-02 | **~29 dias** | Baixa |

**Análise:** O PR #7020 está aberto há ~29 dias sem merge ou fechamento. Embora de size S e risk low, acumulou quase um mês de existência. Recomenda-se:
- **Review e merge:** Update de dependência websocket é importante para security.
- **Fechamento se obsoleto:** Verificar se a versão já foi coberta por outro PR.

### PRs com Alto Impacto Aguardando Merge

| # | Título | Size | Prioridade |
|---|--------|------|------------|
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | `fix(loop): terminate on dominant repeated output` | **XL** | **Alta** — Corrige loop infinito |
| [#7992](https://github.com/nearai/ironclaw/pull/7992) | `ci: unify bounded integration execution` | **XL** | **Alta** — Melhora CI |
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | `fix(memory): missing document domain failure` | **M** | Média |
| [#7990](https://github.com/nearai/ironclaw/pull/7990) | `fix(tool-disclosure): unresolvable tool name` | **M** | Média |

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| PRs ativas | 9 |
| PRs fechadas/merged | 1 |
| Issues abertas/ativas | 0 |
| Releases | 0 |
| Bugs críticos | 0 |
| PRs de alta prioridade aguardando merge | 2 (XL) |
| PRs com +29 dias sem activity | 1 |

**Saúde Geral: 🟢 Estável.** Projeto em modo de manutenção ativa com foco em qualidade de código e infraestrutura. Nenhum risco imediato identificado.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-31

---

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 31 de agosto de 2026, com **14 issues e 12 PRs atualizados nas últimas 24 horas**. A atividade concentra-se em **correções de bugs críticos** — especialmente no subsistema de streaming e runtime assíncrono — e em **melhorias de usabilidade no Console**. A taxa de fechamento de issues está boa (3 fechadas/14 totais), indicando que a equipe está respondendo ativamente às demandas. Nenhuma release foi publicada, sinalizando que a base de código está em fase de estabilização antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.** O repositório não registrou novas tags ou releases no período.

> ℹ️ A ausência de releases pode indicar que a equipe está acumulando mudanças no branch `main` para um próximo release (provavelmente a versão 2.2.0, considerando a menção à `2.2.0b3` nas issues).

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| PR | Título | Impacto |
|---|---|---|
| [#6825](https://github.com/agentscope-ai/QwenPaw/pull/6825) | fix(mcp): apply configured timeout to client sessions | **Crítico** — Corrige bug que causava bloqueio permanente de conversas após falha de rede em conexões MCP streamable HTTP. O timeout de 5 minutos não era aplicado às sessões SDK, causando espera infinita. |
| [#6293](https://github.com/agentscope-ai/QwenPaw/pull/6293) | feat(providers): add qwen3.8 to Aliyun Token Plan | Adiciona suporte ao modelo `qwen3.8-max-preview` com 1M de tokens de contexto e 65k de output. |
| [#6581](https://github.com/agentscope-ai/QwenPaw/pull/6581) | fix(console): avoid redundant multimodal upload warning | Remove toast duplicado de aviso ao fazer upload de anexos multimodais. |
| [#7191](https://github.com/agentscope-ai/QwenPaw/pull/7191) | fix(console): preserve non-ASCII file card names | Corrige exibição de nomes de arquivos com caracteres não-ASCII nos cards de ferramenta. |

### PRs em revisão com destaque

| PR | Título | Destaque |
|---|---|---|
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | feat(skills): add workspace-scoped preload configuration | Permite pré-carregamento opcional de Skills confiáveis, seguindo padrão do Claude Code subagents. Contribuidor iniciante. |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat: add reranker UI config panel to ReMeLightMemoryCard | Adiciona painel visual de configuração do reranker no componente de memória. |

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento potencial

**[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)** — *"Empty assistant output_text blocks poison session history"* (3 comentários)
> **Problema:** Mensagens de assistente com bloco de texto vazio (`content=[{"type":"output_text","text":""}]`) são persistidas no histórico e causam erro 400 "MissingParameter: input.content.text" em requisições subsequentes com a API Ark Responses da Volcengine.
> **Análise:** Este é um problema de **integridade de estado de sessão**. Afeta usuários do provider Volcengine Ark que usam sessões de chat prolongadas. A severidade é **alta** — quebra o fluxo de trabalho após a primeira ocorrência.

**[#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)** — *"Plan Mode"* (2 comentários)
> **Demanda:** Usuário solicita o retorno do modo "Plan" que exibia o planejamento do modelo antes da execução, similar ao recurso existente em outros agentes de código. O modo "mission/goal" atual não substitui essa funcionalidade.
> **Análise:** Reflete uma **lacuna de UX** entre a expectativa de transparência do usuário e os novos modos de operação. Pode indicar oportunidade de feature.

**[#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)** — *"Add official theming support"* (1 comentário)
> **Demanda:** Solicita customização visual completa (cor de destaque, fonte, espaçamento) no QwenPaw Desktop, atualmente bloqueado em `#f07e26`.
> **Análise:** Demanda de **personalização e acessibilidade**. Usuário já faz workarounds editando `index.html` dentro do bundle, o que quebra a cada atualização.

---

## 5. Bugs e Estabilidade

### Bugs abertos por severidade (estimada)

| Severidade | Count | Exemplos |
|---|---|---|
| **Crítica** | 2 | #7402 (texto vazio corrompe sessão), #6822/#6825 (MCP timeout — já corrigido) |
| **Alta** | 3 | #7417 (texto duplicado no stream), #7408 (config Feishu limpa), #7407 (mensagens vão para agente errado) |
| **Média** | 4 | #7419/#7418 (accordions colapsam demais), #7410 (estado parcial perdido), #7411 (fallback sintético indevido) |
| **Baixa** | 1 | #7404 (feature hidden — não é bug) |

### Regressões identificadas

**[#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785)** — *Profile category hard-codes official persona files*
> **Status:** Fechado. Regressão na página Files do Console onde arquivos `.md` personalizados do workspace perderam a toggle de include/exclude no system prompt.
> **Impacto:** Usuários que dependem de personas customizadas não conseguem mais controlá-las via UI.

### Issues em cadeia (mesmo problema)

- **#7419** e **#7418**: Mesmo bug do accordion de steps — #7418 foi marcado como `Close-and-review-later`, sugerindo que a equipe prefere resolver via PR dedicado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Feature | Sinais de roadmap |
|---|---|---|
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | Suporte oficial a theming (cor, fonte, espaçamento) | QwenPaw Desktop amadurecendo; foco em personalização |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | Expor `card_auto_layout` no Console para DingTalk | Feature existente desde #2238 sem UI —补全缺失 |
| [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Modo Plan (exibir planejamento antes de executar) | Usuário identifica lacuna vs. Claude Code |

### PRs em desenvolvimento que sinalizam prioridades

- **#7183** — Preload de Skills: indica foco em performance e DX para workflows repetitivos
- **#6399** — UI do Reranker: indica investimento na memória de longo prazo (ReMeLight)
- **#6293** — Qwen3.8: expansão do catálogo de modelos suportados

### Padrões observados

1. **Foco em resiliência de streaming/runtime**: 3 PRs (#7413, #7414, #7415) addressing async generator edge cases
2. **Completude de UI para features existentes**: #7404 (DingTalk), #6399 (Reranker)
3. **Crescente interesse em personalização**: #7406 (theming)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Contexto | Severidade |
|---|---|---|
| **Sessões travam após erro de rede MCP** | Usuários em ambientes com conectividade instável | Crítica |
| **Histórico de chat corrompe com texto vazio** | Volcengine Ark; sessões longas | Alta |
| **Console envia mensagens para agente errado** | Web UI; confusão em multi-agente | Alta |
| **Config de canal Feishu limpa inesperadamente** | Cron jobs falham com KeyError | Alta |
| **Não consegue customizar aparência** | Usuários avançados fazendo workarounds manuais | Média |
| **Perdeu toggle de personas customizadas** | Regressão #6785; afeta workflow de system prompts | Alta |

### Cenários de uso em destaque

- **Agentes em produção com canais variados** (Feishu, DingTalk, Console) — bugs de canal impactam automações críticas
- **Sessões de chat prolongadas** — corruptelas de estado histórico são particularmente doloras
- **Usuários de provedores China** (Volcengine, Aliyun) — padrões de bugs específicos de provider

### Indicadores de satisfação/insatisfação

- **Positivo:** PRs sendo mergeados rapidamente (mesmo dia), resposta ativa a issues
- **Negativo:** Regressões (#6785), features ocultas sem UI (#7404), falta de documentação

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Idade | Situação | Recomendação |
|---|---|---|---|
| [#7407](https://github.com/agentscope-ai/QwenPaw/issues/7407) — Mensagens drift para agente errado | 1 dia | "等待用户确认复现" (pendente confirmação) | Priorizar reprodutibilidade; é um bug de integridade de sessão potencialmente crítico |
| [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) — Plan Mode | 2 dias | 2 comentários, sem resposta da equipe | Avaliar se entra no roadmap 2.2.x; responder ao usuário |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) — Theming | 1 dia | 1 comentário, sem resposta | Classificar como feature request e mover para discussions ou backlog |

### PRs aguardando merge

| PR | Status | Bloqueio |
|---|---|---|
| [#7413](https://github.com/agentscope-ai/QwenPaw/pull/7413) | Aberto | PR companion para #7410 e #7411 — review pendente |
| [#7414](https://github.com/agentscope-ai/QwenPaw/pull/7414) | Aberto | Mesmo autor de #7413 — podem ser mergeados juntos |
| [#7415](https://github.com/agentscope-ai/QwenPaw/pull/7415) | Aberto | Mesmo autor; mesmo grupo de PRs |
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | Aberto | Corretivo para #7402 — pode ter conflito com altri PRs |

### Recomendações prioritárias

1. **Garantir que o fix de #6825 (MCP timeout) seja релизиado** — bug crítico com fix pronto
2. **Avaliar merge coordenado de #7413/#7414/#7415** — os três PRs do `guodaxia103` parecem resolver problemas relacionados ao ciclo de vida assíncrono
3. **Confirmar reprodutibilidade de #7407** — bug de integridade de sessão em multi-agente pode afetar vários usuários
4. **Expor `card_auto_layout` no Console** — feature request com PR companion #7416 já aberto; baixo esforço, alto valor

---

*Relatório gerado automaticamente com base nos dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) em 2026-08-31.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-31

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um nível de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, sem novos lançamentos. A equipe está focada em **dívida técnica de segurança** (políticas anti-slop em Rust, advisory RUSTSEC, permissões de arquivos temporários) e em **implementações estratégicas de alto impacto** como o roteiro de Goal Mode e a integração de canais de voz Gemini. A taxa de issues fechadas permanece baixa (4 de 50), sugerindo um período de amadurecimento de PRs em pipeline. O risco geral é elevado: múltiplas issues P1 de segurança e estabilidade estão ativas simultaneamente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novos tags ou releases. O último ciclo de releases permanece como referência, e a ausência de novos lançamentos indica foco em estabilização interna e preparação para a próxima versão.

---

## 3. Progresso do Projeto

Os PRs mais relevantes refletem correções de segurança, refatorações de dependências e preparação para features estratégicas:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) | Plugin HTTPS: ler trust store do SO | Alinha comportamento de plugins com requests de providers — fecha gap de #9653 |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | Quarentena de imagens rejeitadas por providers | Resolve poison de histórico em sessões vision — fecha #10061 |
| [#10490](https://github.com/zeroclaw-labs/zeroclaw/pull/10490) | Mensagem descritiva em negações de operator | Melhora debuggabilidade de decisões de segurança |
| [#10454](https://github.com/zeroclaw-labs/zeroclaw/pull/10454) | `rusqlite` opcional via feature flags | Reduz footprint de compilação para canais que não usam SQLite |
| [#10460](https://github.com/zeroclaw-labs/zeroclaw/pull/10460) | Teste de regressão para serialização do adapter Quickstart | Cobertura hermética para o formulário de onboarding |

**Destaque estratégico:** O PR [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) resolve uma lacuna de segurança孩子在 plugins WASM que já havia sido abordada para requests de providers em PR #6600 — demonstrando maturidade no ciclo de remediation.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Tema | Comentários | Tendência |
|-------|------|-------------|-----------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Dívida técnica: política anti-slop Rust (307 candidatos em 1.078 arquivos) | **16** | Coordena cleanup massivo, risco alto |
| [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) | RFC: Anexos persistentes de prompt por sessão | **9** | RFC aceito, tracker de implementação ativo (#10405) |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Stack overflow no runtime Tokio durante inicialização | **5** | Bug P1, afecta workflow bloqueante |

### Análise das demandas

**Segurança e arquitetura** dominam as discussões: 7 das 10 issues mais comentadas envolvem domínios de `security` ou `architecture`. A comunidade está ativamente priorizando:

- **Confiança TLS em plugins** — parity com o comportamento de providers já existia mas não cobria o path de plugins WASM ([#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653)).
- **Persistência de prompt por sessão** — evitar perda de contexto após history trimming ou restart, especialmente visível em sessões paralelas ([#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)).
- **Cycle de cleanup Rust** — 307 padrões anti-slop reportados via `cargo deny` representam dívida técnica significativa que a equipe accepted está rastreando proativamente ([#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)).

---

## 5. Bugs e Estabilidade

### Por Severidade

**P1 — Workflow bloqueado / Segurança crítica:**

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Stack overflow no daemon ao aplicar Quickstart | In-progress |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Advisory RUSTSEC-2026-0247 em `bitmaps` via `imbl` → Matrix SDK | Blocked |
| [#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) | Imagem rejeitada por provider envenena turns subsequentes | In-progress (PR #10480 merged) |
| [#10334](https://github.com/zeroclaw-labs/zeroclaw/issues/10334) | `git_operations` ignora `allowed_roots` para caminhos ordinários | In-progress |
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | Cron: check-then-act race após rename de agent | Accepted |
| [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) | Temp files com permissão 0o644 em vez de 0o600 | Open |
| [#10371](https://github.com/zeroclaw-labs/zeroclaw/issues/10371) | Teste flako `concurrent_stale_start_is_serialized` no harness paralelo | In-progress |

**P2 — Comportamento degradado / Bugs funcionais:**

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#10062](https://github.com/zeroclaw-labs/zeroclaw/issues/10062) | TodoWrite plan vaza entre sessões ZeroCode | Closed |
| [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) | `config set` persiste valores sem validação | Open |
| [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) | Reliable streaming reporta modelo requisitado, não o pinned | Open |
| [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653) | Plugin WASI:HTTP não lê trust store do OS | Open (PR #10491 pronto) |

**P3 — Issues menores / UX:**

| Issue | Descrição |
|-------|-----------|
| [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) | Log path não exposto em diagnósticos ZeroCode |
| [#9681](https://github.com/zeroclaw-labs/zeroclaw/issues/9681) | Clipboard temp cleanup ownership dropado após falha — **Closed** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aceitas com trackers de implementação ativos

| Tracker | Feature | Prioridade | Progresso |
|---------|---------|------------|-----------|
| [#10341](https://github.com/zeroclaw-labs/zeroclaw/issues/10341) | **Goal Mode** (roadmap V1 e V2: #8303, #9702) | P2 | Coordenação em curso |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | **Gemini speech-to-speech broker channel** (#8780) | P2 | Batch tracker ativo |
| [#10339](https://github.com/zeroclaw-labs/zeroclaw/issues/10339) | **Shell V1 approval policy** (#7155) | P1 | Fase 0/1 em execução |
| [#10340](https://github.com/zeroclaw-labs/zeroclaw/issues/10340) | **Bounded telemetry pilot** (#9621) | P2 | Coordenação piloto |
| [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) | **Session-scoped prompt attachments** (#9998) | P2 | Batch tracker ativo |
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | **SSE streaming via POST /webhook** | P2 | Feature request aberto |
| [#10167](https://github.com/zeroclaw-labs/zeroclaw/issues/10167) | **Export vendor-neutral de lifecycle** para multiplexadores | P2 | In-progress |

### Novas solicitações de users

| Issue | Demanda | Relevância |
|-------|---------|------------|
| [#10422](https://github.com/zeroclaw-labs/zeroclaw/issues/10422) | Executar SOP como heartbeat em vez de `HEARTBEAT.md` | Usabilidade operacional |
| [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | Progresso visível do agente no Telegram durante operações longas | UX de canal |
| [#10454](https://github.com/zeroclaw-labs/zeroclaw/pull/10454) (PR) | `rusqlite` opcional por feature flags | DevEx e performance |

### RFCs e design documents

- [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998): RFC aceito para anexos persistentes de prompt — política definida, aguardando implementação.
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/issues/8486): Endpoint OpenAI Chat Completions no gateway — alinhado com demanda de ecossistema.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Cenário | Problema | Impacto |
|---------|----------|---------|
| Agente em produção | Perda de contexto e constraints após history trimming ou restart | Sessions paralelas expõem falha claramente — usuários perdem o fio da conversa |
| Telegram | Silêncio total durante operações longas (buscas, tool calls) | Percepção de travamento, insegurança sobre status da tarefa |
| ZeroCode | Modifier semantics inconsistentes entre plataformas (macOS vs Linux) | Usabilidade degradada para power users com keybindings |
| CI/Harness | Testes flakos em ambiente paralelo (`concurrent_stale_start_is_serialized`) | Desconfiança nos resultados de CI, retrabalho |

### Sinais de satisfação

- A issue [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) (limpeza de inline-keyboard no Telegram após aprovação) foi **fechada**, indicando feature completada com impacto positivo em UX de canal.
- O PR [#9749](https://github.com/zeroclaw-labs/zeroclaw/pull/9749) (scroll manual durante streaming no webchat) demonstra atenção a detalhes de UX que usuários valorizam.
- A iniciativa de **log path visível em diagnósticos** ([#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650)) responde diretamente a frustração de debugging em dogfooding.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou bloqueadas por longos períodos

| Issue | Idade aprox. | Motivo de alerta |
|-------|-------------|------------------|
| [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653) — Plugin WASI HTTP trust store | ~29 dias | Segurança: parity gap com providers; PR #10491 pronto, precisa review |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — RUSTSEC-2026-0247 bitmaps | ~21 dias | Bloqueado por cadeia de dependência (`imbl` → Matrix SDK); impacto em CI de segurança |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) — Browser enrollment frontdoor | ~7 dias | Blocked por diffent de transporte; risco de segurança de UX |

### Trackers de auditoria pendentes de conclusão

| Tracker | Propósito | Urgência |
|---------|-----------|----------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | 307 padrões Rust anti-slop em 1.078 arquivos | Alta — dívida técnica crescente |
| [#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) | Output literal fora de boundaries de localização | Média — policy compliance |
| [#8431](https://github.com/zeroclaw-labs/zeroclaw/issues/8431) | Lifecycle de artefatos temporários e cleanup | Média — storage pressure em instalações de longa duração |

### PRs grandes retidos

| PR | Tamanho | Bloqueio |
|----|---------|----------|
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — OAuth profiles para Anthropic | XL | `do-not-merge`, `needs-maintainer-review` |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) — Classificar respostas terminais incompletas | XL | `needs-author-action`, multi-provider |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — OpenAI Chat Completions endpoint | XL | Feature gigante, cross-corte |
| [#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) — Expor Git channels a sessões locais | XL | Aguardando #10265 |
| [#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307) — Política unificada de pairing-code | XL | `needs-author-action` |

---

## Indicadores de Saúde do Projeto

| Dimensão | Status | Observação |
|----------|--------|------------|
| Atividade | 🟢 Alta | 100 eventos em 24h (50 issues + 50 PRs) |
| Releases | 🔴 Estagnado | 0 releases em 24

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*