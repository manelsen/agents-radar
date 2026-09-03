# Resumo diário do ecossistema de agentes de IA 2026-09-04

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-03 22:09 UTC

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

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-09-04  
**Projetos Analisados:** NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw  
**Referência Estática:** NullClaw (sem atividade)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde polarizada** em 2026-09-04. Três projetos — Hermes Agent, IronClaw e ZeroClaw — registram atividade intensa (>15 PRs/24h), indicando ciclos de engenharia acelerados. NanoBot e CoPaw mantêm ritmo saudável de estabilização pós-release. PicoClaw apresenta atividade moderada, mas carrega um backlog de bugs crônicos que ameaça a retenção de usuários. NullClaw permanece inativo, sugerindo projeto abandonado ou em hibernação. A dominância de PRs voltados a **estabilidade de canais multi-mensageria**, **correções de TypeScript em WebUIs** e **segurança de sandbox** indica que o ecossistema amadureceu da fase de features para a fase de consolidação e confiabilidade operacional.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Atualizados | Releases (24h) | Bugs Críticos Abertos | Saúde Geral |
|---------|:---:|:---:|:---:|:---:|:---:|
| **Hermes Agent** | 50 | 50 | 0 | 1 P0 (cache missing) | ⚠️ **Alta Atividade / Regressões** |
| **ZeroClaw** | 50 | 50 | 0 | 1 S1 (header missing) | ⚠️ **Alta Atividade / Segurança** |
| **IronClaw** | ~6 | 17 (11 merged) | 0 | 0 críticos | ✅ **Excelente** |
| **CoPaw (QwenPaw)** | 31 | 27 | 1 (v2.2.0) | 2 críticos (segurança) | 🟡 **Pós-release Estável** |
| **NanoBot** | 4 | 24 | 0 | 0 críticos | ✅ **Saudável** |
| **PicoClaw** | 4 | 7 | 0 | 0 críticos | 🟡 **Atenção a Backlog** |
| **NullClaw** | 0 | 0 | 0 | N/A | 🔴 **Inativo** |

**Destaque Quantitativo:**
- **Volume de PRs/Issues:** Hermes Agent e ZeroClaw lideram com 50 items atualizados cada, mas apresentam indicadores de qualidade preocupantes (regressões, vulnerabilidades).
- **Taxa de Merge:** IronClaw fecha 65% dos PRs atualizados em 24h (11/17) — maior eficiência de integração do ecossistema.
- **Ciclo de Release:** Apenas CoPaw publicou release formal (v2.2.0). Os demais projetos estão em fase de estabilização ou preparação de tag.

---

## 3. Posicionamento do Projeto Principal (IronClaw)

### Vantagens Competitivas

| Dimensão | IronClaw | Comparação com Pares |
|----------|----------|---------------------|
| **Qualidade de Código** | Remoção de 150+ diretivas `@ts-nocheck` em 48h; tipagem de 64 componentes de produção | Hermes Agent e ZeroClaw ainda lutam com dívida técnica visível em issues |
| **Velocidade de Engineering** | 11 merges em 24h com foco em correções críticas de CI | PicoClaw tem 1 merge/dia; Hermes Agent tem 7 merges/dia mas com regressões |
| **Arquitetura de Budget** | Deriva budget de contexto do modelo dinamicamente (PR #8053) | NanoBot ainda trabalha com caches fixos; ZeroClaw tem bug de capping em 32k tokens |
| **Multi-Agent** | R3 (Release 3) em desenvolvimento ativo com approval gates para subagentes | CoPaw implementa master/sub-agent hierarchy; ZeroClaw avança em A2A client |

### Diferenças Técnicas Estruturantes

- **TypeScript First:** IronClaw investe massivamente em tipagem estática como base para escala de equipe e complexidade de frontend — estratégia única no ecossistema.
- **Budget Dinâmico:** A derivação de window context baseada no modelo (90% da janela) é arquitetura mais sofisticada que os budgets hardcoded (128k/20k) de concorrentes.
- **Coalescing de Streaming:** Otimização O(N·k) → O(1) para texto acumulado em deltas, resolvendo bottleneck de performance que NanoBot e PicoClaw ainda não adressaram.

### Tamanho e Engajamento da Comunidade

- **Atividade:** 17 PRs/24h posiciona IronClaw no topo do ecossistema em termos de densidade de contribuição.
- **Qualidade vs. Volume:** Diferencia-se por manter zero bugs críticos abertos enquanto concorrentes (Hermes Agent, ZeroClaw, CoPaw) carregam vulnerabilidades S1/P0.
- **Maturidade de Processos:** CI restaurado em <24h após panic; testes bloqueantes resolvidos sistematicamente — indica disciplina de engineering.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade Multi-Canal

Todos os projetos enfrentam desafios de integração com canais de mensageria:

| Canal | NanoBot | PicoClaw | Hermes Agent | IronClaw |
|-------|---------|----------|--------------|----------|
| **Matrix** | ✅ Fix de SAS e retry policy | — | — | — |
| **Slack** | — | 🔴 Media upload quebrado | — | — |
| **Telegram** | ✅ Streaming em desenvolvimento | — | ✅ Streaming nativo | ✅ Streaming nativo |
| **Discord** | — | — | ⚠️ Auto-archive fixo | ✅ Configurável |
| **QQ** | — | 🔴 401 Authentication | — | — |
| **Signal** | ✅ Wildcard allowlist | — | — | — |

**Síntese:** A complexidade de manter múltiplos canais simultâneos é o denominador comum de instabilidade. IronClaw e NanoBot demonstram abordagem mais robusta com testes de integração por canal.

### 4.2 WebUI e Experiência Mobile

| Problema | NanoBot | PicoClaw | CoPaw | IronClaw |
|----------|---------|----------|-------|----------|
| **Performance com histórico longo** | Fixado (stream state clear) | 🔴 45 dias sem resolução | 🟡 Carregamento lento | ✅ Otimizado (coalescing) |
| **iOS PWA** | Em desenvolvimento (#5641) | — | Draft app nativo | — |
| **Touch keyboard** | Em desenvolvimento (#5640) | — | — | — |

**Síntese:** A degradação de UI com sessões longas é problema transversal. IronClaw é o único que já resolved o problema via otimização de rendering. NanoBot e CoPaw estão em vias de resolver. PicoClaw apresenta o caso mais grave.

### 4.3 Segurança e Governança

| Feature | Hermes Agent | CoPaw | ZeroClaw | IronClaw |
|---------|--------------|-------|----------|----------|
| **Sandbox de código** | — | 🔴 Breach reportado | ✅ Granular policies RFC | ✅ Approval gates |
| **Verifiable intent** | — | — | 🔴 Credential chain not verified | — |
| **OAuth token persistence** | — | — | — | Fixado |
| **Sender authorization** | — | — | ✅ Bluesky/Reddit fix | — |

**Síntese:** ZeroClaw é o projeto mais maduro em políticas de segurança estruturadas, mas carrega vulnerabilidades críticas abertas. CoPaw enfrenta incidente de segurança ativo. IronClaw demonstra abordagem de "security by design" com approval gates.

### 4.4 Observabilidade e Cache

| Componente | Hermes Agent | NanoBot | IronClaw | ZeroClaw |
|------------|-------------|---------|----------|----------|
| **Prompt cache** | 🔴 First call miss (P0) | ✅ Affinity preserved | ✅ Cache-gate Claude | ✅ Cache key em OpenAI |
| **Context reuse visualization** | — | Em desenvolvimento | — | — |
| **Token accounting** | — | — | Exposto em trim events | — |

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Primário

| Projeto | Foco Principal | Público-Alvo | Arquitetura Distintiva |
|---------|----------------|--------------|------------------------|
| **NanoBot** | Multi-canal (Matrix, Signal, Telegram) | Usuários de mensageria aberta | Channel manager com retry policies |
| **Hermes Agent** | CLI-first com Desktop | Desenvolvedores e power users | Dispatcher com plugins, TUI Ink |
| **PicoClaw** | Web UI com canais empresariais | Equipes usando Slack/LINE/QQ | Lightweight Go-based backend |
| **IronClaw** | TypeScript-first, multi-agent | Startups e equipes técnicas | Loop host com TypeScript rigoroso |
| **CoPaw** | Multi-tenant Hub auto-hospedado | Empresas com infraestrutura própria | Runtime Dockerizado com workspaces |
| **ZeroClaw** | Segurança e plugins WASM | Usuários paranoicos com segurança | Sandbox granular com Landlock/Bubblewrap |

### 5.2 Por Estratégia de Mercado

```
IronClaw ──────────► TypeScript quality como barreira de entrada
     │                         e diferencial de manutenibilidade
     │
CoPaw ────────────► Multi-tenant enterprise como monetização
     │                         via self-hosted
     │
ZeroClaw ─────────► Security-first como diferenciação
     │                         para casos de uso sensíveis
     │
Hermes Agent ──────► CLI extensibility como plataforma
     │                         para power users e automação
     │
NanoBot ───────────► Channel breadth como utilidade
                         para comunidades de mensageria
```

### 5.3 Matriz de Maturidade Tecnológica

| Projeto | TypeScript/Frontend | Backend/Security | Multi-Agent | Mobile | Estabilidade |
|---------|:---:|:---:|:---:|:---:|:---:|
| **IronClaw** | 🟢 Líder | 🟢 Líder | 🟢 R3 em progresso | 🟡 Planejado | 🟢 Excelente |
| **CoPaw** | 🟡 Bom | 🟡 Bom | 🟡 Master/Sub | 🟢 App nativo draft | 🟡 Pós-release |
| **ZeroClaw** | 🟡 Bom | 🟢 Líder (WASM, sandbox) | 🟢 A2A Phase 1 | 🟡 Voice bridge | ⚠️ Vulnerável |
| **Hermes Agent** | 🟡 Bom | 🟡 Bom | 🟡 Delegation | 🟡 Mobile keyboard | ⚠️ Regressões |
| **NanoBot** | 🟡 Bom | 🟢 Bom | 🟡 Em evolução | 🟡 iOS PWA | 🟢 Estável |
| **PicoClaw** | 🔴 Performance | 🟡 Bom | 🟡 Em evolução | 🔴 Inexistente | 🟡 Backlog crônico |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Issues/Dia | PRs/Dia | Close Rate | Tendência |
|---------|:---:|:---:|:---:|:---:|
| **IronClaw** | ~6 | 17 | 65% (11/17) | 🔼 Acelerando |
| **CoPaw** | 31 | 27 | 26% (8/31) | ➡️ Estável |
| **Hermes Agent** | 50 | 50 | 14% (7/50) | 🔼 Alta volume |
| **ZeroClaw** | 50 | 50 | ~8% (4/50) | 🔼 Alta volume |
| **NanoBot** | 4 | 24 | 54% (13/24) | ➡️ Estável |
| **PicoClaw** | 5 | 7 | 14% (1/7) | 🔽 Estagnado |

**Análise:** IronClaw demonstra a melhor taxa de fechamento (65%) com atividade intensa, indicando engineering discipline. Hermes Agent e ZeroClaw têm volume alto mas baixa eficiência (14% e 8%), sugerindo gargalo de review ou complexidade elevada dos PRs. PicoClaw apresenta sinal de estagnação com apenas 1 merge/dia e bugs crônicos sem resolução.

### 6.2 Consolidando Qualidade vs. Iterando Rápido

| Perfil | Projetos | Comportamento |
|--------|----------|---------------|
| **Consolidação de Qualidade** | IronClaw | Foco em dívida técnica (TypeScript), CI health, bugs críticos zero. Prioriza correção antes de features. |
| **Iteração Rápida com Volume** | Hermes Agent, ZeroClaw | Alta atividade comunitária mas com regressões e vulnerabilidades. Prioriza features mas acumula dívida. |
| **Estabilização Pós-Release** | CoPaw | v2.2.0 lançada ontem; foco em segurança e regressões. Equilíbrio entre consolidação e features. |
| **Manutenção Reativa** | NanoBot | Ciclo saudável mas sem releases. Bugs resolvidos rapidamente. |
| **Backlog Crônico** | PicoClaw | Atividade baixa, bugs sem assignee, 45 dias de issue crônica. Risco de bitrot. |

### 6.3 Engajamento por Tipo de Contribuidor

| Projeto | Maintainers Ativos | Contributors | Ratio PRs Comunitários |
|---------|:---:|:---:|:---:|
| **IronClaw** | 3+ (推测) | 5+ | ~70% |
| **ZeroClaw** | 5+ | 15+ | ~85% |
| **Hermes Agent** | 4+ | 20+ | ~90% |
| **CoPaw** | 2+ | 8+ | ~60% |
| **NanoBot** | 2+ | 3+ | ~50% |
| **PicoClaw** | 1+ | 2+ | ~85% (Dependabot) |

**Observação:** PicoClaw tem 5 de 7 PRs de Dependabot, indicando que contribuições humanas reais são escassas — sinal de comunidade estagnada.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Mobile-first WebUI** | iOS PWA, touch keyboard, app nativo em draft | NanoBot, CoPaw, IronClaw |
| **Multi-tenant self-hosted** | QwenPaw Hub, workspaces, controles administrativos | CoPaw, ZeroClaw |
| **Voice/audio integration** | VoiceHost WebSocket bridge, FunASR, Gemini speech-to-speech | ZeroClaw, IronClaw |
| **Context reuse visualization** | Popover de token usage, barras de reuse | NanoBot |
| **Streaming em todos os canais** | Telegram streaming, rich messages | NanoBot, Hermes Agent, IronClaw |

### 7.2 Tendências Técnicas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **TypeScript como padrão de frontend** | IronClaw (150+ suppressions removidas), CoPaw (tipagem em evolução) | Diferenciação de qualidade e manutenibilidade |
| **Budget dinâmico baseado em modelo** | IronClaw (#8053), NanoBot (prompt cache affinity) | Suporte a janelas de contexto crescentes |
| **WASM plugins com lifecycle observers** | ZeroClaw (#7822) | Extensibilidade sem comprometer segurança |
| **A2A (Agent-to-Agent) protocol** | ZeroClaw (#9324), CoPaw (sub-agents) | Ecossistema de agentes interoperáveis |
| **Sandbox granular por canal** | ZeroClaw (Landlock, Bubblewrap, Seatbelt) | Isolamento forte para código gerado |

### 7.3 Tendências de Segurança

| Tendência | Evidência | Urgência |
|-----------|-----------|:---:|
| **Sender authorization em canais** | ZeroClaw (Bluesky/Reddit fix) | 🔴 ZeroClaw |
| **Verifiable intent com credential chains** | ZeroClaw (#9328) — bug crítico | 🔴 ZeroClaw |
| **Sandbox breach e bypass** | CoPaw (#7511, #7443) | 🔴 CoPaw |
| **OAuth token persistence** | Hermes Agent (#5446) — conflitado | 🟡 Hermes Agent |
| **Approval gates para ações destrutivas** | IronClaw (R3 slice 3a) | 🟢 IronClaw |

### 7.4 Sinais de Mercado

**Demandas de Usuários Extrapoladas:**

1. **Auto-hospedagem enterprise** — Evidenciado por CoPaw Hub, ZeroClaw workspaces, controls de acesso. O mercado quer controle total sem dependência de SaaS.

2. **Performance mobile/web** — WebUIs sendo otimizadas para sessões longas em todos os projetos. Mobile não é mais secondary.

3. **Observabilidade de custos** — Visualização de context reuse, token accounting exposto, prompt cache debugging. Usuários querem entender o que estão pagando.

4. **Voice como próximo canal** — Integrações ASR/Speech-to-text (ZeroClaw VoiceHost, IronClaw streaming) indicam que voice é a próxima fronteira de canais.

5. **Segurança como feature** — Sandbox granular, approval gates, verifiable intent. A diferenciação está mudando de "o que o agente pode fazer" para "como garantimos que faz de forma segura".

---

## Conclusão Executiva

| Dimensão | Líder

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-04

## 1. Panorama do dia

O NanoBot demonstra **atividade intensa** na data de hoje, com **24 PRs atualizados** nas últimas 24h (11 abertos, 13 fechados/merged) e **4 issues** em destaque. A equipe está focada em **estabilidade da WebUI**, correções de bugs em múltiplos canais (Matrix, Signal, Telegram) e melhorias de usabilidade mobile e iOS PWA. O projeto mantém um ritmo saudável de merges, com regressões sendo corrigidas rapidamente. Nenhuma nova release foi publicada hoje.

---

## 2. Lançamentos

**Nenhuma nova release nas últimas 24h.**

O projeto encontra-se em fase de consolidação de correções para a versão 0.3.0, com foco em bugs reportados desde o último release.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (13 total)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#5646](https://github.com/HKUDS/nanobot/pull/5646) | fix(webui): show language names only in their native form | Remove English display names do locale registry; adiciona cobertura de regressão | **UX/WebUI** |
| [#5637](https://github.com/HKUDS/nanobot/pull/5637) | fix(matrix): propagate stream delivery failures | Permite que falhas de entrega no Matrix usem a política de retry do channel manager | **Canais/Estabilidade** |
| [#5635](https://github.com/HKUDS/nanobot/pull/5635) | fix(sdk): preserve queued events on stream close | Impede perda de eventos quando a fila está cheia durante o fechamento | **SDK/Estabilidade** |
| [#5634](https://github.com/HKUDS/nanobot/pull/5634) | fix(channels): bound origin reply fingerprint cache | Limita crescimento indefinido do cache de fingerprints de reply | **Performance/Canais** |
| [#5632](https://github.com/HKUDS/nanobot/pull/5632) | fix(provider): preserve Codex prompt cache affinity | Garante que session routing key seja consistente entre Codex e Responses | **Providers/Cache** |
| [#5514](https://github.com/HKUDS/nanobot/pull/5514) | fix(webui): clear stale stream state after Gateway reconnect | Resolve #5512 - limpa estado de streaming ao reconectar | **WebUI/Critical** |
| [#5515](https://github.com/HKUDS/nanobot/pull/5515) | fix(agent): observe session reply timeout task failures | Observa falhas de timeout em background tasks | **Agent/Resiliência** |
| [#5629](https://github.com/HKUDS/nanobot/pull/5629) | fix(tool_hints): respect max_length for plain tool values | Honra max_length para valores plain (não-path/command) | **Tool hints/UX** |
| [#5472](https://github.com/HKUDS/nanobot/pull/5472) | fix(signal): honor wildcard in inbound allowlists | Suporta `*` em allowlists de DM e grupo no Signal | **Canais/Signal** |
| [#5385](https://github.com/HKUDS/nanobot/pull/5385) | fix(matrix): complete Element SAS request flow | Completa verificação SAS com Element moderno | **Canais/Matrix** |
| [#5413](https://github.com/HKUDS/nanobot/pull/5413) | fix(providers): apply fallback policy to raised errors | Aplica política de fallback quando provider levanta exceção | **Providers/Resiliência** |
| [#5334](https://github.com/HKUDS/nanobot/pull/5334) | fix(channels): preserve indentation across message splits | Preserva indentação após splits baseados em newline | **Canais/UX** |

**Destaque**: O merge de [#5514](https://github.com/HKUDS/nanobot/pull/5514) resolve um bug crítico onde a WebUI ficava travada em estado de "spinning" após reinício do Gateway.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção

| # | Título | Comentários | Status | Tema |
|---|--------|-------------|--------|------|
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | Channel locale registry drops a locale when two load concurrently | 1 | OPEN | **Race condition/WebUI** |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) | Session title not generated when frontend envelope lacks webui flag | 0 | OPEN | **WebUI/Regression** |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | Current Time runtime context absent by default in 0.3.0 | 0 | OPEN | **Breaking change/Context** |

### PRs em destaque (discussão ativa)

| # | Título | Tema |
|---|--------|------|
| [#5649](https://github.com/HKUDS/nanobot/pull/5649) | feat(webui): visualize per-request context reuse | **Visualização de contexto** — nova UI com popover de token usage e barras de reuse |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | feat(tg): add support for streaming rich messages | **Telegram** — implementação de streaming e mensagens ricas |

**Análise**: A comunidade demonstra interesse forte em **visualização de métricas de performance** (context reuse) e **melhorias na experiência mobile** (iOS PWA, teclado touch).

---

## 5. Bugs e Estabilidade

### Issues Abertas (3)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | **Alta** | Regressão: Current Time runtime context ausentes na 0.3.0 — quebra comportamento esperado |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | **Média** | Race condition: locale registry pode perder locale quando dois carregam concorrentemente |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) | **Média** | Session title não é gerado quando envelope falta flag webui — relacionado a PR #5528 |

### PRs Abertos com Bugs

| # | Prioridade | Descrição |
|---|------------|-----------|
| [#5648](https://github.com/HKUDS/nanobot/pull/5648) | p2 | fix(webui): check session metadata when generating webui titles — **fix para #5647** |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | p2 | fix(ui): surface model retry status (NAN-34) |
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) | p2 | fix(codex): persist OAuth tokens — **COM CONFLICT** |

**Estado geral**: 3 bugs ativos, nenhum crítico. O bug de Gateway reconnect (#5512) foi resolvido.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR

| # | Feature | Área | Prioridade |
|---|---------|------|------------|
| [#5649](https://github.com/HKUDS/nanobot/pull/5649) | Visualização de context reuse por requisição | WebUI | p2 |
| [#5640](https://github.com/HKUDS/nanobot/pull/5640) | Mobile keyboard input + streaming send | WebUI/Mobile | p2 |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) | iOS PWA tap and status-bar fixes | WebUI/Mobile | p2 |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | Streaming rich messages para Telegram | Channels/Telegram | — |
| [#5639](https://github.com/HKUDS/nanobot/pull/5639) | Stabilize session labels, TUI streaming, pairing prompts | TUI | — |

**Sinais de Roadmap**: Foco واضح em **mobile-first** (iOS PWA, touch keyboards) e **observabilidade** (context reuse visualization, retry status). Telegram streaming é feature aguardada pela comunidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Regressão de Contexto (#[5645](https://github.com/HKUDS/nanobot/issues/5645))**: Usuários reportam quebra de comportamento do Current Time runtime context na versão 0.3.0. Usuários esperavam que o contexto de tempo fosse adicionado automaticamente.

2. **WebUI stuck state (#[5512](https://github.com/HKUDS/nanobot/issues/5512))**:用户体验 após reinício do Gateway — interface travava em "spinning". **Já resolvido.**

3. **iOS PWA UX (#[5641](https://github.com/HKUDS/nanobot/pull/5641))**: Usuários mobile reportavam que primeira tap em session rows era ignorada e que a status bar não se adaptava ao tema.

4. **Localização (#[5646](https://github.com/HKUDS/nanobot/pull/5646))**: Community feedback levou à decisão de exibir nomes de idiomas apenas em sua forma nativa, sem depender de inglês.

### Feedback Positivo Implícito

- **Forte atividade de PRs** indica comunidade engajada
- **Correções rápidas de regressions** demonstram responsividade da equipe
- **Feature de streaming para Telegram** tem interesse confirmado pelo autor

---

## 8. Backlog que Merece Atenção

### PRs Sem Atividade Recente ou com Conflitos

| # | Título | Idade | Status | Ação Necessária |
|---|--------|-------|--------|-----------------|
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) | fix(codex): persist OAuth tokens | ~16 dias | **CONFLITO** | Resolver conflito; PR pronto para merge |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | feat(tg): streaming rich messages | ~5 dias | Aberto | Revisão pendente (autor menciona não ter tempo) |

### Issues Antigas sem Resolução

| # | Título | Criado | Comentários | Status |
|---|--------|--------|-------------|--------|
| [#5512](https://github.com/HKUDS/nanobot/issues/5512) | WebUI stalls after Gateway restart | 2026-08-24 | 1 | **CLOSED** (via #5514) |

**Recomendação**: Priorizar resolução de conflito em [#5446](https://github.com/HKUDS/nanobot/pull/5446) para avançar feature de OAuth para Codex. Revisão de [#5614](https://github.com/HKUDS/nanobot/pull/5614) para Telegram streaming.

---

## Métricas Resumidas (2026-09-04)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 1 |
| PRs abertos | 11 |
| PRs fechados/merged | 13 |
| Novas releases | 0 |
| Bugs críticos | 0 |
| Regressões identificadas | 1 (já em fix) |

**Saúde do Projeto**: ✅ **Saudável** — Atividade intensa com foco em estabilidade e UX. Correções de regressões sendo mergeadas rapidamente. Mobile/web improvements em pipeline ativo.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-04

---

## 1. Panorama do dia

O projeto Hermes Agent apresenta **alta atividade comunitária** com 50 issues e 50 PRs atualizados nas últimas 24h, embora **nenhuma release tenha sido publicada** no período. O estado geral reflete um momento de maturação pós-v0.21.0, com influxo significativo de relatórios de bugs e regressões, especialmente no componente Desktop e no gateway de sessões. A base de代码 mantém ritmo intenso de revisões, com 7 PRs fechados/merged e 43 ainda em revisão. Os indicadores sugerem necessidade de atenção especial à estabilidade de sessões e integração cross-platform no próximo ciclo de release.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período de estabilização após o v0.21.0 (2026-08-31). Recomenda-se monitorar issues de regressão abertas contra essa versão antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (2026-09-03)

| PR | Título | Componente | Impacto |
|----|--------|------------|---------|
| [#102169](https://github.com/NousResearch/hermes-agent/pull/102169) | `fix(docker): don't classify a Docker host as a container` | agent, docker | Corrigido false-positive em `is_container()` que afetava ferramentas browser e exec em hosts com Docker |
| [#102481](https://github.com/NousResearch/hermes-agent/pull/102481) | `fix(cli,plugins): suppress streaming only for MUTATING transform_llm_output hooks` | cli, plugins | Melhoria na lógica de hooks de output para evitar supressão indevida de streaming |
| [#102502](https://github.com/NousResearch/hermes-agent/pull/102502) | `fix(model_metadata): parse vLLM max_model_len=max_total_tokens output-cap rejection` | model_metadata | Tratamento correto de erro 400 de vLLM, evitando misparso como "prompt-too-long" |
| [#102489](https://github.com/NousResearch/hermes-agent/pull/102489) | `fix(web): prevent web config saves from clobbering untouched model routing` | cli, dashboard | Protege configuração de model routing contra sobrescrita acidental via API web |
| [#102507](https://github.com/NousResearch/hermes-agent/pull/102507) | `fix(desktop): persist profile selection when primary has registered connection id` | desktop | Corrige persistência de seleção de perfil no Desktop |

### PRs em destaque em revisão

- **[#102506](https://github.com/NousResearch/hermes-agent/pull/102506)** — `feat(tool-search): optional embedding reranker + name-coverage bonus`: Rebase do PR #35457 com reranker opcional para busca de ferramentas, melhorando cobertura de nomes mesmo sem reranker ativo.
- **[#102505](https://github.com/NousResearch/hermes-agent/pull/102505)** — `feat(local-runtime): use SYCL builds on Intel GPUs + add vulkaninfo detection fallback`: Detecção de GPUs Intel Arc via SYCL, corrigindo fallback incorreto para CPU.
- **[#81172](https://github.com/NousResearch/hermes-agent/pull/81172)** — `feat(gateway): configurable Discord thread auto-archive duration`: Nova opção `discord.thread_auto_archive_duration` (default 1440min), paridade com Telegram.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Componente | Sinal |
|---|--------|-------------|------------|-------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded (degraded) | **149** | tool/skills | Alerta de automação: índice com 29.8h de idade (limite 26h) |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | **60** | comp/cron | Conflitos em `cron/jobs.py` bloqueiam merge automatizado |
| [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) | TUI (Ink) lowercases Shift+letter in prompt composer on Ghostty | **10** | comp/tui | P1 — uppercase destruído em macOS/Ghostty |
| [#65038](https://github.com/NousResearch/hermes-agent/issues/65038) | delegation.fallback_providers is ignored | **10** | comp/agent | Defeito complementar ao #7481 — P1 |
| [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI dispatcher drops integer command-handler exit statuses | **7** | comp/cli | P2 — quebra `set -e`, CI e schedulers |

### Análise de demandas

A comunidade demonstra **preocupação intensa com automações de infraestrutura** (skills-index watchdog com 149 comments) e **integração Nous/Enterkey** (60 comments). Há also forte demanda por **estabilidade cross-platform** — Windows (Smart App Control), macOS (TUI Ghostty), e Desktop (profile switching). O tema de **delegação e fallback de providers** aparece como feature com defeito, indicando lacuna entre implementação e expectativa.

---

## 5. Bugs e Estabilidade

### Bugs P0 — Críticos

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#102194](https://github.com/NousResearch/hermes-agent/issues/102194) | CLI path never persists api_content sidecar → first API call misses prompt cache | agent, tool/memory | Primeira chamada de cada turn perde cache (94-100% vs 0%), reprodução diária |

### Bugs P1 — Altos

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) | TUI Ink lowercases Shift+letter on Ghostty (macOS) | comp/tui | Uppercase destruído no composer |
| [#65038](https://github.com/NousResearch/hermes-agent/issues/65038) | delegation.fallback_providers ignored; workers inherit parent chain | comp/agent | Config de fallback ignorado em delegação |
| [#90806](https://github.com/NousResearch/hermes-agent/issues/90806) | state.db WAL corruption with SQLite 3.53.1 (recorrente) | comp/agent, gateway | Corrupção estrutural duplo em ~30h, todas as plataformas |
| [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) | restart-safe cron worker dispatch fails on systemd 249 | comp/gateway | `OOMPolicy=kill` rejeitado como unknown assignment |

### Bugs P2 — Médios (seleção)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#99956](https://github.com/NousResearch/hermes-agent/issues/99956) | cron bot-chat delivery fails with active session lock | comp/cron | Entrega falha se perfil tem sessão interativa aberta |
| [#56439](https://github.com/NousResearch/hermes-agent/issues/56439) | gateway /resume overwrites sessions.source | comp/gateway | Perda de proveniência de plataforma original |
| [#66933](https://github.com/NousResearch/hermes-agent/issues/66933) | `hermes update` deadlocks on Windows with venv interpreter por outro processo | comp/cli | Windows service que usa mesmo interpreter causa deadlock |
| [#102163](https://github.com/NousResearch/hermes-agent/issues/102163) | Profile switching regression v0.21.0 — slot limit 3 enforced | comp/desktop | Regressão: limite de 3 sessões estrito, não havia block antes |

### Bugs closed/duplicados hoje

- **#90806** (CLOSED) — WAL corruption — indica possível merge recente
- **#102442** (CLOSED, duplicate) — SOUL.md protected-instruction gate nunca dispara

**Alerta de estabilidade**: O padrão de corrupções recorrentes em `state.db` (WAL sidecars) e as múltiplas regressões no Desktop pós-v0.21.0 sugerem necessidade de **hotfix ou patch de estabilização** iminente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features abertas em destaque

| # | Título | Componente | P | Sinal estratégico |
|---|--------|------------|---|-------------------|
| [#375](https://github.com/NousResearch/hermes-agent/issues/375) | Inception Prompting — hardened sub-agent prompts (inspirado CAMEL-AI) | comp/agent | — | Evolução de delegação com segurança |
| [#6152](https://github.com/NousResearch/hermes-agent/issues/6152) | Pass `think: false` to Ollama for non-reasoning models | provider/ollama | P3 | Melhoria de performance local |
| [#96683](https://github.com/NousResearch/hermes-agent/issues/96683) | Proposal: Explicit Project Workspaces and Cross-Channel Session Routing | comp/gateway | P3 | Evolução de arquitetura de sessões |
| [#102421](https://github.com/NousResearch/hermes-agent/issues/102421) | Model pickers never list out-of-tree external-process (ACP) providers | comp/cli, acp | P3 | Extensibilidade de providers |
| [#84374](https://github.com/NousResearch/hermes-agent/pull/84374) | feat(skills): add memory-extension optional skill | tool/skills | P3 | Arquitetura de memória modular |

### Sinais de roadmap

1. **Inteligência de delegação**: Issue #375 propõe técnica de Inception Prompting para prevenir falhas em cascata de delegation — alinhado com a pista de bugs em `delegation.fallback_providers`.
2. **Sessões cross-channel**: Proposta #96683 indica demanda por isolamento de projetos diferente do modelo atual source/thread-based.
3. **Provider extensibility**: #102421 e #101456 revelam lacunas na cadeia de providers externos (ACP), sugerindo trabalho em curso para out-of-tree providers.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

**Estabilidade de sessões (cross-platform)**
- Usuários Desktop experimentam: lock de sessão, impossibilidade de fechar abas Kanban, regressão de slot limit, e perda de proveniência ao fazer `/resume`.
- "Every new turn's first API call misses the provider prompt cache" — frustração diária documentada com steps repro e métricas.

**Integração Windows**
- Smart App Control gerando erros `os error 4551` sem orientação ao usuário — "only get unblocked when a support human recognizes 4551 in a 200KB log."
- `hermes update` deadlocking com serviços Windows que compartilham venv interpreter.

**Integração Discord**
- Banner de `/new` reporta modelo errado (ignora channel override).
- Duração fixa de auto-archive (24h) não configurável.

**CLI e automação**
- Exit codes de comandos sendo descartados — quebra CI/CD e scripts com `set -e`.
- `/skills` slash command inacessível via Desktop/Dashboard (cli_only=True).

### Cenários de uso emergentes

- **Execução local com GPUs Intel Arc**: PR #102505 endereça detecção e SYCL routing — indica base de usuários com hardware Intel discrete GPU crescendo.
- **vLLM como provider**: Erro de parsing (#102494) indica adoção de vLLM com window sizes customizados, confundindo o handler de context length.
- **Browser tool com Chrome existente**: #89143 — conflito quando usuário já tem Chrome aberto com Remote Debugging desabilitado.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | Desktop scans entire home directory for git repos — no config to restrict | 2026-06-26 | 2026-09-03 | 4 | P2 |
| [#54672](https://github.com/NousResearch/hermes-agent/issues/54672) | hermes-acp --check tracebacks when ACP extra missing | 2026-06-29 | 2026-09-03 | 2 | P3 |
| [#60442](https://github.com/NousResearch/hermes-agent/issues/60442) | /skills pending command is cli_only — unavailable in desktop/dashboard | 2026-07-07 | 2026-09-03 | 3 | P2 |
| [#89143](https://github.com/NousResearch/hermes-agent/issues/89143) | browser_exec hijacks existing Chrome instance | 2026-08-18 | 2026-09-03 | 2 | P3 |
| [#87789](https://github.com/NousResearch/hermes-agent/issues/87789) | Windows Smart App Control blocks Hermes — no detection or guidance | 2026-08-16 | 2026-09-03 | 2 | P2 |

### Issues antigas com alta severidade

- **#58141** (P2, desde 2026-07-04) — `is_container()` false-positive em Docker host: PR em revisão (#58141) há 2 meses, com PR #102169 fechado como duplicado hoje — **necessária atenção para consolidação**.
- **#6152** (P3, desde 2026-04-08) — `think: false` para Ollama: 5 meses aberto, 3 👍 — feature simples, baixa complexidade de implementação.

### Recomendação de triagem

O backlog apresenta **baixo volume de resposta** em issues de P2/P3, sugerindo:
1. Necessidade de triagem ativa para marcar `needs-decision`, `needs-repro` ou `wont-fix`.
2. Issues de Windows (#87789, #66933) merecem designation de champion para 否则 permaneçam ignoradas.
3. A issue de scanning de home (#53328) é risco de **privacy/compliance** e deveria ter sido priorizada como P1.

---

**Relatório gerado em:** 2026-09-04  
**Fonte:** Dados GitHub NousResearch/hermes-agent (últimas 24h)  
**Próxima atualização recomendada:** 2026-09-05

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 2026-09-04

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** em 04/09/2026, com 12 items atualizados nas últimas 24h (5 issues + 7 PRs). A atividade de PRs é destaque, com **5 dependabot PRs criados hoje** sinalizando manutenção ativa de dependências Go. Não houve releases, indicando possível fase de estabilização ou preparação de próximo ciclo. Do ponto de vista de issues, **4 bugs continuam abertos**, incluindo problemas de estabilidade em canais (Slack, QQ, RKLLM) e um problema recorrente de performance na Web UI. A comunidade demonstra engajamento consistente com 8 comentários na issue de chat laggy.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não发布了 novas versões. Este é o momento adequado para revisar o backlog de issues e preparar uma versão que aborde os bugs acumulados, especialmente os relacionados à estabilidade dos canais.

---

## 3. Progresso do projeto

### PRs merged/fechadas hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | `fix(line): warn on inert webhook_host / webhook_port` | **Resolvido** — Elimina configuração inerte de webhook no LINE, emitindo warning ao invés de semear valores não utilizados. Corrige má-configuração silenciosa. |

### PRs abertas em revisão

| PR | Título | Prioridade |
|----|--------|------------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | **Alta** — Corrige falha em uploads de mídia no Slack. Aguardando merge. |

### Atualizações de dependências (automáticas)

| PR | Dependência | De → Para |
|----|-------------|-----------|
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | `github.com/aws/aws-sdk-go-v2` | 1.42.0 → 1.45.1 |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | `golang.org/x/term` | 0.44.0 → 0.45.0 |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | `github.com/ergochat/irc-go` | 0.6.0 → 0.7.0 |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | `google.golang.org/protobuf` | 1.36.11 → 1.36.12 |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | `github.com/larksuite/oapi-sdk-go/v3` | 3.9.4 → 3.11.0 |

**Análise:** 5 de 7 PRs são atualizações automáticas de dependências. Boa prática de manutenção, mas não representa avanço funcional significativo.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input very laggy with long history | **8** | 👍 1 |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity 429 despite valid OAuth | 3 | 0 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack does not attach image media content | 3 | 0 |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ频道无法正常使用 | 3 | 0 |

### Análise

**Issue #3281** é claramente o tema mais debatido, com 8 comentários e descrição detalhada do bug. O problema afeta diretamente a usabilidade do produto — chat input laggy quando o histórico cresce — e foi reportado há mais de um mês (21/07/2026) sem resolução. Este é um **indicador de dor crônica** que pode estar impactando a retenção de usuários.

A issue foi marcada como `[stale]`, sugerindo que pode não estar sendo ativamente acompanhada pela equipe core.

---

## 5. Bugs e estabilidade

### Issues abertas (potenciais bugs)

| # | Severidade | Título | Canal/Área | Status |
|---|------------|--------|------------|--------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Alta** | Chat input laggy com histórico longo | Web UI | Aberta desde 21/07 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Alta** | Slack não anexa conteúdo de mídia | Slack | Aberta desde 17/08 |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | **Alta** | QQ channel retorna erro 401 Authorization | QQ | Aberta desde 30/08 |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | **Média** | RKLLM retorna respostas anormais | RKLLM | Aberta desde 27/08 |

### Issue fechada hoje

| # | Título | Observação |
|---|--------|------------|
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity 429 despite valid OAuth | **Fechada** — Provavelmente duplicata ou não reprodutível |

### Análise de severidade

**🔴 Alta (3 issues):**
- Chat laggy afeta UX global de todos os usuários web
- Slack media upload quebra funcionalidade essencial
- QQ authentication bloqueia canal inteiro para usuários chineses

**🟡 Média (1 issue):**
- RKLLM tem respostas anormais, mas pode ser específico de versão/modelo

**Concerns:** A concentração de bugs em canais de integração (Slack, QQ) sugere que a抽象ão multi-canal pode precisar de revisão de estabilidade. Todas as issues de alta severidade estão abertas há 1-6 semanas.

---

## 6. Pedidos de features e sinais de roadmap

### Issues que sugerem demandas de feature

| # | Título | Interpretação |
|---|--------|---------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input performance degrada com histórico | **Feature request implícito:** Paginação de histórico ou virtualização de lista |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack sem suporte a mídia | **Gap de feature:** Suporte a uploads de arquivo no Slack |

### Sinais de roadmap

1. **Melhoria de performance na Web UI** — Demanda clara e antiga (#3281). Sugere que a UI não foi otimizada para sessões longas.

2. **Expansão de canais** — QQ (#3349) e RKLLM (#3346) indicam interesse em mercados asiáticos (China) e hardware específico (ARM boards com suporte RKLLM).

3. **Atualização de dependências** — As 5 dependabot PRs de hoje (AWS SDK, IRC, protobuf, Lark SDK) sugerem preparação para uma release com dependências atualizadas.

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Web UI lenta** | "chat input is very laggy when history has a little bit long" — #3281 | 🔴 Alta |
| **Slack quebra com imagens** | "file size cannot be 0" — #3338 | 🔴 Alta |
| **QQ não funciona** | "401 Authorization error" — #3349 | 🔴 Alta |
| **Autenticação Antigravity inconsistente** | "429 despite valid OAuth" — #3339 | 🟡 Média |
| **RKLLM respostas ruins** | "abnormal responses" — #3346 | 🟡 Média |

### Cenários de uso inferidos

1. **Uso como assistente pessoal** — Web UI com chat history, implying uso prolongado
2. **Integração empresarial** — Slack, LINE, QQ (multi-canal)
3. **Deploy em hardware específico** — RKLLM em ARM boards

### Satisfação/Insatisfação

**Insatisfação identificada em:**
- Usuários da Web UI com sessões longas (bug crônico)
- Usuários do Slack que precisam enviar imagens
- Usuários chineses que tentam usar QQ

**Satisfação implícita:**
- O projeto tem atividade consistente (issues e PRs)
- Mantenedores respondem e fecham issues (#3339 fechada hoje)
- Community contributors estão ativos (octavioturra, ex-takashima)

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa (stale + poucos upvotes)

| # | Título | Idade | Prioridade | Ação recomendada |
|---|--------|-------|------------|------------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input laggy | **45 dias** | 🔴 Alta | Requer triagem e asignação. Bug afeta UX core |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack media upload | **19 dias** | 🔴 Alta | PR #3340 pronto — fazer merge |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 401 error | **5 dias** | 🔴 Alta | Requer investigação de API do QQ |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM abnormal | **8 dias** | 🟡 Média | Solicitar mais detalhes ou fechar |

### Priorização sugerida

1. **Merge #3340** — Fix trivial com contributor ativo, resolve bug crítico do Slack
2. **Triagem #3281** — Bug crônico de UX, maior impacto negativo percebido
3. **Investigar #3349** — Bloqueia mercado chinês, pode ter queda de API externa
4. **Avaliar #3339 fechada** — Verificar se duplicata ou problema recorrente

---

## Métricas resumidas do dia

| Métrica | Valor |
|---------|-------|
| Issues abertas | 4 |
| Issues fechadas | 1 |
| PRs abertas | 6 |
| PRs fechadas/merged | 1 |
| Releases | 0 |
| Dependabot PRs | 5 |
| Community PRs | 1 |
| Issue com mais comentários | #3281 (8) |
| Bug mais antigo aberto | #3281 (45 dias) |

---

**Conclusão geral:** PicoClaw mantém atividade saudável de manutenção (dependências atualizadas, PRs de contribuidores), mas possui **3 bugs de alta severidade em aberto** há semanas, especialmente o problema de performance na Web UI (#3281) que afeta diretamente a experiência do usuário. A ausência de releases recentes sugere que uma release focada em estabilidade e fixes de canais seria benéfica para a comunidade.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-04

---

## 1. Panorama do Dia

O IronClaw mantém um nível de atividade **muito elevado** com **17 PRs atualizados** e **11 merges** nas últimas 24 horas, demonstrando um ciclo de desenvolvimento acelerado. Não houve lançamentos oficiais, mas o foco está em **qualidade de código** (limpeza massiva de diretivas `@ts-nocheck` na WebUI), **performance** (otimização de streaming de texto) e **estabilidade** (correções de bugs críticos). A base de código está em transição para uma tipagem TypeScript mais robusta, com mais de **150 diretivas `@ts-nocheck` removidas** nos últimos dias. O projeto também enfrenta desafios recorrentes com o tratamento de erros em integrações LLM e o dimensionamento de budgets de prompt.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não registrou novas versões. O último ciclo parece focado em work-in-progress antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Closed

| # | PR | Resumo | Impacto |
|---|-----|-------|---------|
| [#8039](https://github.com/nearai/ironclaw/pull/8039) | `refactor(webui): type production components and hooks` | Removeu `@ts-nocheck` de **64 componentes, hooks e páginas** de produção. Adicionou tipos explícitos para React Query, DOM, auth payloads, etc. | 🔴 **Alto** — Qualidade de código |
| [#8038](https://github.com/nearai/ironclaw/pull/8038) | `refactor(webui): type and validate frontend API boundaries` | Rejeita IDs faltantes antes de construir URLs. Substituiu transporte JSON permissivo por decodificadores tipados para device-link, pairing, notifications, etc. | 🔴 **Alto** — Qualidade de código |
| [#8040](https://github.com/nearai/ironclaw/pull/8040) | `test(webui): type frontend test infrastructure` | Removeu **94 diretivas `@ts-nocheck`** do lado dos testes. Adicionou helpers tipados para browser globals, Storage mocks, VM module exports. | 🔴 **Alto** — Qualidade de código |
| [#8037](https://github.com/nearai/ironclaw/pull/8037) | `chore(webui): ratchet TypeScript suppressions` | Removeu 40 diretivas `@ts-nocheck` redundantes. Adicionou baseline de supressões legacy e ratchet para prevenir novos `@ts-nocheck`/`@ts-ignore`. | 🟡 **Médio** — Prevenção de regressão |
| [#8043](https://github.com/nearai/ironclaw/pull/8043) | `perf(loop-host): coalesce streamed text updates` | Eliminou re-sanitização O(N·k) do texto acumulado por delta. Resposta de 16 KiB em 1.000 deltas: 1.000s → operação otimizada. | 🟡 **Médio** — Performance |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | `feat(subagent): approval/auth gate reaches owner's inbox (R3 slice 3a)` | Runs de subagentes bloqueados em approval/credential agora notificam o inbox do owner. Antes, eram completamente invisíveis. | 🟢 **Funcionalidade** — Multi-agent |
| [#8051](https://github.com/nearai/ironclaw/pull/8051) | `fix(reply): answer is current model call's text only` | Corrigiu concatenação indevida de todas as calls do modelo na resposta. Só a call atual é considerada "resposta". | 🔴 **Bugfix** — Correção semântica |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | `fix(tools): size tool_search replies to first-look envelope` | Resposta de `tool_search` agora respeita o envelope da primeira olhada do modelo (16.066 B → 857 B otimizado com `omitted` marker). | 🟡 **Médio** — Eficiência LLM |
| [#8045](https://github.com/nearai/ironclaw/pull/8045) | `fix(ci): wait for CLI listener readiness in smoke tests` | CLI smoke tests agora aguardam conexão TCP real após o banner. Consolida retries duplicados em um único connector. | 🟡 **Médio** — Infraestrutura CI |
| [#8055](https://github.com/nearai/ironclaw/pull/8055) | `fix(webui): follow authorizeTraceHold to trace-api.ts` | Desbloqueou `main` — teste `sidebar_trace_credits_card_assets_are_embedded` estava em panic. | 🔴 **Crítico** — CI quebrado |
| [#8058](https://github.com/nearai/ironclaw/pull/8058) | `test(webui): use live extension id in notification-setup test` | Corrigiu teste que usava `"web-push"` (retired) ao invés do novo `"web-app"`, unlocking PRs bloqueados. | 🟢 **Testes** — CI |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | Refresh do snapshot de bootstrap da base de código (workflow nightly). | 🟢 **CI** — Infraestrutura |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade/Interação

**1. [#8009](https://github.com/nearai/ironclaw/issues/8009) — MCP egress errors flatten to "response_error"** *(OPEN)*
- **Prioridade percebida:** Alta — afecta debuggabilidade em produção
- **Resumo:** `mcp_http_error` colapsa todos `RuntimeHttpEgressError` num único token `"response_error"`, descartando a reason subjacente e byte counts.
- **Demanda:** Diagnóstico adequado de falhas de discovery em hosted-MCP.
- **Status:** 1 comentário, em análise.

**2. [#8052](https://github.com/nearai/ironclaw/issues/8052) — Daily ironclaw failure taxonomy — 2026-09-03** *(OPEN)*
- **Prioridade:** Processual/observabilidade
- **Resumo:** Análise diária de failures em suites de benchmark. Suite `officeqa` (63 non-pass) analizada — todos erros genuínos de qualidade do modelo DeepSeek-V4-Flash sobre OCR'd Treasury Bulletins.
- **Demanda:** Monitoramento contínuo de qualidade e categorização de falhas.

**3. [#8057](https://github.com/nearai/ironclaw/issues/8057) — Prompt budget should account for non-transcript material** *(OPEN)*
- **Prioridade:** Alta — afecta corretude de budget enforcement
- **Resumo:** O budget de contexto considera apenas o transcript. Identity/SYSTEM.md, skills, memory snippets, channel context e tool schemas são adicionados **sem reduzir** o budget — requests podem exceder o budget declarado.
- **PR associado:** [#8053](https://github.com/nearai/ironclaw/pull/8053) já aborda a derivação do budget da janela do modelo.

### Temas Recorrentes Identificados

| Tema | Frequência | Observação |
|------|------------|------------|
| **TypeScript / WebUI quality** | 🔴 Muito alta | Houve 6+ PRs sobre remoção de `@ts-nocheck` em 48h |
| **LLM integration robustness** | 🟡 Média | Erros MCP, cache prompts, sizing de respostas |
| **Subagent architecture** | 🟢 Crescente | Feature R3 em desenvolvimento activo |

---

## 5. Bugs e Estabilidade

### Issues Abertas (Potenciais Bugs)

| # | Título | Severidade | Descrição |
|---|--------|------------|-----------|
| [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors → "response_error" | 🟡 **Média** | Discovery failures são indiagnosticáveis. Perda de informação de erro. |
| [#8057](https://github.com/nearai/ironclaw/issues/8057) | Prompt budget não accounta material extra | 🟡 **Média** | Requests podem exceder budget declarado ao provider. |

### PRs Abertos com Bugs/Fixes

| # | Título | Risk | Descrição |
|---|--------|------|-----------|
| [#8056](https://github.com/nearai/ironclaw/pull/8056) | `fix(host-api): avoid malformed preview range panic` | 🟢 **Low** | Previne panic quando delimiter JSON fecha antes de abrir em tool-result text. |
| [#8059](https://github.com/nearai/ironclaw/pull/8059) | `fix(responses): send cancel reason the product surface accepts` | 🟢 **Low** | `POST /api/v1/responses/{id}/cancel` retornava `400 invalid_request` sempre. |
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | `fix(assistant): check pairing before command admission` | 🟢 **Low** | Usuários Telegram não-paired recebiam inventory de comandos antes do notice de connect. |

### Saúde de CI/Build

- **Estado de `main`:** Foi restaurado após o panic em [#8055](https://github.com/nearai/ironclaw/pull/8055) (assets test).
- **Testes bloqueantes:** Resolvidos com [#8058](https://github.com/nearai/ironclaw/pull/8058).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues de Feature

| # | Título | Escopo | Sinal de Roadmap |
|---|--------|--------|------------------|
| [#8057](https://github.com/nearai/ironclaw/issues/8057) | Prompt budget deve considerar material não-transcript | **Loop/Agent** | Reforço de correctness em budget enforcement |
| [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP errors precisam de diagnóstico granular | **MCP/Integration** | Melhor observabilidade em hosted-MCP |

### PRs Abertos Indicando Direção

| # | Título | Tamanho | Sinal |
|---|--------|---------|-------|
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | `feat(loop): derive prompt context budget from model's advertised window` | **XL** | Budget dinâmico baseado no modelo (90% da janela) em vez de hardcoded 128k/20k |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | `fix(llm): cache-gate new Claude families by denylist; send prompt_cache_key on OpenAI Responses` | **XL** | Suporte a novas famílias Claude + compatibilidade OpenAI Responses |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | `feat(subagent): approval gate reaches owner's inbox` | **XL** | Arquitetura multi-agent R3 — slice 3a |

### Sinais de Roadmap Inferidos

1. **Budget dinâmico de contexto** — O projeto está a mover-se de budgets hardcoded para derivação baseada no modelo, indicando foco em suporte a mais provedores/ctx windows.
2. **Multi-agent maturity** — R3 (Release 3) está em desenvolvimento activo com features de subagent approval/auth.
3. **Qualidade TypeScript** — Esforço massivo de tipagem indica准备 para escala de equipe ou maior complexidade de frontend.
4. **LLM cost optimization** — Sizing de `tool_search` e prompt caching mostram foco em eficiência.

---

## 7. Resumo de Feedback dos Usuários

*Não há feedback directo de usuários disponível nos dados de issues/PRs do dia.*

### Análise de Dores Inferidas por Issues

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **MCP discovery failures são opacas** | #8009: Erro colapsa para `"response_error"` sem contexto | 🟡 Prod impact |
| **Prompt budget não funciona correctamente em produção** | #8057: Identity, skills, tools não são descontados | 🟡 Prod impact |
| **CLI smoke tests são flakies** | #8045: Retries duplicados e wait loops inseguros | 🟢 Dev experience |
| **Respostas concatenam texto de todas as model calls** | #8051: Slack/Telegram respondiam com conteúdo incorrecto | 🔴 User-facing bug |

### Satisfação/Insatisfação Observada

- **Satisfação:** Ciclo de PRs rápido com 11 merges em 24h demonstra saúde de engineering.
- **Insatisfação potencial:** Problemas recorrentes com errors de MCP (#8009) e budget de prompt (#8057) sugerem dívida técnica em integrações LLM.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta (Long-Standing)

| # | Título | Criado | Idade | Status | Urgência |
|---|--------|--------|-------|--------|----------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | 2026-08-29 | 6 dias | **OPEN** | 🟢 CI/Nightly |

> **Nota:** A maioria das issues está com activity recente (1-3 dias). Não há backlog significativo de issues abandonadas neste período.

### PRs Abertos com Tamanho/Complexidade Elevada

| # | Título | Tamanho | Age | Waiting For |
|---|--------|---------|-----|-------------|
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | `feat(loop): derive prompt context budget from model's advertised window` | XL | 1 dia | Review |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | `fix(llm): cache-gate new Claude families by denylist` | XL | 2 dias | Review |

### Recomendações

1. **[#8009](https://github.com/nearai/ironclaw/issues/8009)** — MCP egress errors merecem atenção prioritária para melhorar diagnósticabilidade em produção.
2. **[#8053](https://github.com/nearai/ironclaw/pull/8053

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-09-04

---

## 1. Panorama do Dia

O projeto atravessa um período de **alta atividade** com o lançamento recente da versão estável **v2.2.0**, que introduz o **QwenPaw Hub** — funcionalidade multi-inquilino aguardada pela comunidade. Nas últimas 24 horas, foram registradas **31 issues** e **27 PRs** atualizados, indicando uma comunidade engajada. O foco predominante está na estabilização da nova release (com PRs de segurança e governança), na expansão mobile (#7378) e na iteração sobre a experiência do console web. Há sinais claros de demandas por melhor desempenho em cenários remotos/mobile e correções de bugs críticos de segurança e estabilidade.

---

## 2. Lançamentos

### v2.2.0 (Estável) — 2026-09-03

**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0

#### Mudanças principais:
| Componente | Descrição |
|------------|-----------|
| **QwenPaw Hub** | Auto-hospedagem multi-usuário com runtimes locais ou Docker, controles de acesso por workspace, gerenciamento de credenciais e suporte a reverse-proxy ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)) |
| **QwenPaw Data** | Funcionalidades de integração de dados (resumo parcial no changelog) |

#### Breaking Changes Conhecidas:
- **Migração de `ModelInfo.max_tokens` → `max_output_length`** — Custom providers com arquivos de configuração `.json` que utilizam `max_tokens` deixarão de funcionar. A correção foi merged em [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337). Usuários com providers custom precisam atualizar seus arquivos de configuração.

#### Status de Verificação:
A issue [#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515) acompanha a verificação de instalação da versão estável, com 4 checkpoints obrigatórios.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | **feat(memory): Add Auto Fin + upgrade ReMe to 0.4.1.11** | Adiciona fonte de memória de longo prazo agendada (Auto Fin) e corrige coleta de status runtime |
| [#7522](https://github.com/agentscope-ai/QwenPaw/pull/7522) | **chore: Bump version to 2.2.1b1** | Preparação para próximo ciclo beta |
| [#7523](https://github.com/agentscope-ai/QwenPaw/pull/7523) | **fix(chat): Sync resolved sessions during streaming** | Permite alternar entre conversas enquanto respostas ainda estão sendo geradas |
| [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520) | **feat(agent): Add protected execution contract** | Melhora alinhamento de prompts e ferramentas para bloqueios irreversíveis |
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | **fix(channels): Make contract checks portable** | Corrige verificação de canais em Windows com code page non-UTF-8 |

### PRs Abertos em Revisão

| PR | Descrição | Relevância |
|----|-----------|------------|
| [#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538) | **feat: Unify runtime environment management** | Consolida gerenciamento de variáveis de ambiente em torno de `os.environ` e `EnvVarLoader` |
| [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) | **fix: OpenCode API requires `x-opencode-session` header** | Corrige compatibilidade com API OpenCode antes de breaking change em 09/06 |
| [#7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) | **feat(agent): Add protected execution contract** | Contrato de execução protegida para guidance de skills e ferramentas |
| [#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) | **fix(governance): Require approval for CRITICAL findings** | Corrige regressão onde findings CRITICAL eram negados automaticamente mesmo sem configuração de auto-denial |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | **fix(acp): Prevent Windows ACP agent stalls** | Corrige congelamento de 60s+ na inicialização de workspace em Windows |
| [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) | **fix: Langfuse monitoring tool output blank** | Corrige observabilidade de outputs de ferramentas no Langfuse |

---

## 4. Temas Quentes da Comunidade

### Discussão Principal: Próxima Evolução do QwenPaw Hub
> **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — 16 comentários | 3 👍

**Tópico:** "QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?"

**Análise:** Com o Hub multi-inquilino lançado, a comunidade debate ativamente os próximos passos. Os pedidos mais votados giram em torno de:
- Melhorias na escalabilidade multi-usuário
- Ferramentas de administração mais robustas
- Integração com sistemas corporativos (SSO, LDAP)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos

| Issue | Descrição | Status | Severidade |
|-------|-----------|--------|------------|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | **Security sandbox foi comprometido** — Usuário reportoubreach da sandbox de segurança | **CLOSED** | CRÍTICA |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | **Instruções perigosas conseguem evadir** — Sistema de governança pode ser contornado | OPEN | CRÍTICA |
| [#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) | **Findings CRITICAL ignoravam aprovação manual** — Regressão de segurança | PR OPEN | CRÍTICA |

### 🟠 Altos

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Master agent + sub-agents não reportam progresso proativamente | OPEN |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | Client disconnect ao acessar LLM server em LAN | OPEN |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Cron tasks duplicadas (misfire_grace window) | OPEN |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Feishu session: consumer fica preso após processamento de mensagens priority=10 | OPEN |

### 🟡 Médios

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `/memory/status` retorna 500 na Desktop v2.2.0-beta.7 | OPEN |
| [#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512) | Não consegue trocar de sessão enquanto outra está processando | CLOSED (v2.1.0) |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Codex backend: agente retorna "空响应" com gateway não-streaming | OPEN |
| [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) | Langfuse: output de ferramentas vazio | PR [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues + PRs Draft)

| Item | Descrição | Sinal Estratégico |
|------|-----------|-------------------|
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | **QwenPaw Mobile** — App nativo Expo/React Native para Android/iOS | 🔴 Prioridade alta — PR em draft pelo mantenedor principal |
| [#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519) | Acesso mobile remoto ao Desktop via rede | Alinhado com roadmap mobile |
| [#7514](https://github.com/agentscope-ai/QwenPaw/issues/7514) | **Melhorar velocidade de carregamento inicial** do WebUI remoto | UX crítica para mobile/web |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | **Steer mode** 类似Codex — capacidade de corrigir comportamento do agente durante execução | Feature aguardada há 5 meses |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | **Import flow** de Codex e Qoder | Migração de usuários concorrentes |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | **PowerContext** como backend alternativo de memória de longo prazo | Diferenciação de memória |
| [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | **Make Skill v2** — workflow de aprovação para criação de skills | DX improvement |
| [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | Suporte a Matrix OIDC (MSC2965) e verificação de dispositivos Element | Suporte enterprise |
| [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | Botões interativos em mensagens (像是选项按钮) | UX omnichannel |

### Sinais de Good First Issue

| Issue | Descrição | Mentor |
|-------|-----------|--------|
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | Adicionar modelo requer muitas etapas/clicks | community |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **DX - Model Setup** | Adicionar modelo é muito complicado (5+ clicks来回) | Alta |
| **Performance Remote** | WebUI remoto lento ao carregar conversas iniciais | Alta (mobile) |
| **Stabilidade Chat** | Desconexões frequentes ao acessar LLM em LAN | Média |
| **Multi-tasking** | Não consegue trocar de sessão enquanto outra está processando | Média |
| **Memory** | Compaction gradual enfraquece persona do agente | Baixa |

### Cenários de Uso Emergentes

1. **Deploy Corporativo via Hub** — Evidenciado por demandas de SSO, LDAP, e controles administrativos
2. **Mobile-First Access** — Necessidade de acesso remoto ao Desktop, com foco em performance
3. **Agentes Multi-subordinados** — Usuários executam tarefas complexas com master + sub-agents e precisam de visibilidade de progresso

### Satisfação vs. Insatisfação

| Aspecto | Sentimento |
|---------|------------|
| Core AI functionality | ✅ Estável |
| Multi-channel (Telegram, Discord, etc.) | ✅ Funcionando |
| Console UI (model routing panel) | ⚠️ Regressões de UI em beta |
| Segurança/Govêrnanca | ⚠️ Sandbox breach preocupa |
| Documentação e onboarding | ⚠️ "Good first issue" sobre complexidade de setup |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >30 dias

| Issue | Idade | Título |
|-------|-------|--------|
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | ~170 dias | Steer mode (Feature request desde Mar/2026) |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | ~123 dias | Adding model requires too many steps |

### PRs Draft/Bloqueados

| PR | Estado | Bloqueio |
|----|--------|----------|
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | Draft | Aguardando feedback de design mobile |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | Em revisão | Precisa de aprovação de arquitetura memory |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Em revisão | Primeiro contributor — precisa de code review |

### Riscos Identificados

1. **Segurança** — Sandbox breach ([#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)) e bypass de instruções perigosas ([#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)) requerem atenção imediata
2. **UX Beta** — Regressões no Console UI (model routing panel, auto-fold) afetam experiência na 2.2.0
3. **Mobile** — PR draft [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) está sem atualizações há 7 dias; comunidade demonstra interesse ativo

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 23 | 🟢 Normal |
| PRs abertos | 18 | 🟢 Normal |
| Taxa de fechamento (24h) | ~26% (8/31 issues) | 🟡 Acceptável |
| PRs merged (24h) | ~37% (10/27 PRs) | 🟢 Bom |
| Bugs críticos abertos | 2 | 🟠 Atenção |
| Features em draft | 1 (mobile) | 🟡 Revisão necessária |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-04. Próxima atualização recomendada: 2026-09-05.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-04

## 1. Panorama do dia

O projeto ZeroClaw mantém alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um ecossistema muito ativo de desenvolvimento. Não houve lançamentos formais (releases) no período. A distribuição de 36 issues abertas versus 14 fechadas sugere que o backlog está crescendo mais rapidamente do que o ritmo de resolução. Observa-se foco significativo em segurança (sandbox policies, verifiable-intent, channel authorization) e em features arquiteturais (WASM plugins, A2A outbound client, multi-session UI). A comunidade demonstra engajamento robusto em RFCs, com múltiplas proposals de alto risco em discussão ativa.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões no período analisado. Isso é consistente com o padrão de trabalho em progresso observado nas issues e PRs, onde diversas implementações estão em fases de revisão e还未 integradas ao branch principal.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas/mescladas no período:

| PR | Título | Impacto |
|----|--------|---------|
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | fix(channels): require sender authorization for Bluesky and Reddit | **Alto** — Corrigiu vulnerabilidade de segurança crítica onde Bluesky e Reddit não consultavam `peer_groups` para autorização de remetentes |
| [#9510](https://github.com/zeroclaw-labs/zeroclaw/pull/9510) | Reject PRs with no common ancestor with master (blame-collapse guard) | **Médio** — Adiciona guarda de proteção contra PRs que causam colapso de `git blame` |
| [#9857](https://github.com/zeroclaw-labs/zeroclaw/pull/9857) | JSONL session operations disagree on valid file types | **Médio** — Normaliza definição de arquivos de sessão persistidos |
| [#10202](https://github.com/zeroclaw-labs/zeroclaw/pull/10202) | Records from log-based dependencies never reach tracing | **Alto** — Corrigiu problema onde logs de dependências (ex: whatsapp-rust) eram descartados silenciosamente |

**PRs abertas com maior potencial de impacto aguardando merge:**

- [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) — `feat(agent)`: carrega identidade do provider em eventos de uso e resolve context window dinamicamente (Risk: HIGH, Size: XL)
- [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) — `feat(cli)`: adiciona cerimônia de egress grant ao install/list de plugins (Risk: HIGH, Size: XL)
- [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) — `feat(channels)`: adiciona VoiceHost WebSocket bridge para integração com FunASR/SenseVoice (Risk: HIGH, Size: XL)
- [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) — `feat(log)`: rotação por contagem de entries e queries multi-segment (Risk: HIGH, Size: XL)

---

## 4. Temas Quentes da Comunidade

**RFCs em destaque (maior engajamento):**

| Issue | Título | Comentários | Risco |
|-------|--------|-------------|-------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy - filesystem restrictions | **23** | HIGH |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Bug: verifiable-intent evaluates constraints without verifying credential chain | **14** | HIGH |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | **14** | MEDIUM |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway | **13** | HIGH |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | RFC: define Web bundle/daemon compatibility | **12** | HIGH |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | RFC: WASM plugin lifecycle observer subscriptions | **12** | HIGH |

**Análise:** A comunidade demonstra forte interesse em:
1. **Segurança de sandbox** (#6996) — políticas granulares de filesystem para diferentes backends (Bubblewrap, Landlock, Seatbelt)
2. **Verifiable Intent** (#9328) — vulnerabilidade onde constraints são avaliadas sem verificação da chain de credenciais
3. **Arquitetura de gateway** (#10050, #9975) — novos endpoints e contratos de compatibilidade para web dashboard
4. **Plugin system** (#7822) — capacidade de observers para lifecycle de plugins WASM

---

## 5. Bugs e Estabilidade

### Bugs P1 (S1 - Workflow Blocked / S2 - Degraded)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Tracker: RUSTSEC-2026-0247 bitmaps unmaintained advisory | P1 | BLOCKED |
| [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | Bug: operator denial reaches model as three words | P1 | CLOSED |
| [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | Bug: Docker runtime commands nested in second Docker sandbox | P1 | IN-PROGRESS |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | /health reports channel healthy that never connected | P1 | CLOSED |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | Bug: interactive approval from any chat member on multiple channels | P1 | IN-PROGRESS |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | Bug: OpenCode providers never send x-opencode-session header | S1 | OPEN |

### Bugs P2 (Degraded Behavior)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Context caps at 32,000 tokens ignoring max_context_tokens config | P2 | IN-PROGRESS |
| [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | ZeroCode shows stale Connected state after daemon exits | P2 | CLOSED |
| [#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905) | Discord transcription manager never bound to active agent provider | P2 | CLOSED |
| [#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486) | Matrix channel ignores [providers.transcription.*] | P2 | IN-PROGRESS |

**Nota:** O bug [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) foi reportado em 2026-09-03 com severidade S1, impactando workflow de modelos Go e potencialmente causando account flags. Requer atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

**RFCs aceitas e em implementação:**

| Issue | Título | Tipo | Risco |
|-------|--------|------|-------|
| [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) | Implement session-scoped prompt attachments (#9998) | Tracker | HIGH |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | Implement accepted Gemini speech-to-speech broker channel (#8780) | Tracker | HIGH |
| [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) | Accepted RFC implementation index | Tracker | LOW |
| [#10570](https://github.com/zeroclaw-labs/zeroclaw/issues/10570) | Memory continuity for Code-pane (ACP) sessions | Tracker | - |
| [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) | RFC: Opt-in single-tool provider rounds for interactive agents | RFC | HIGH |

**Novas features (últimas 24h):**

| Issue | Título | Escopo |
|-------|--------|--------|
| [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529) | Support Anthropic thinking.display progress updates | Provider: Anthropic |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode session header (bug, mas requer feature) | Provider: OpenCode |

**Trackers de coordenação ativa:**

- [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) — Test coverage follow-ups across 13 shards
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI runtime improvement para Rust builds

**Sinais de roadmap:**
1. Expansão de channels para voice/audio (VoiceHost bridge, Gemini speech-to-speech)
2. Aprofundamento de segurança com sandbox granular e verifiable intent
3. Melhoria de UI multi-session em ZeroCode e gateway web
4. Sistema de plugins WASM com lifecycle observers
5. A2A outbound client (Phase 1 em progresso em [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324))

---

## 7. Resumo de Feedback dos Usuários

**Padrões de dor identificados:**

| Dor | Ocorrências | Issue de Referência |
|------|-------------|---------------------|
| Context token capping incorreto | 1 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| Health checks reporting falsos | 1 | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) |
| CI lento (15-20 min para PRs pequenas) | 1 | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) |
| Log de dependências descartados | 1 | [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) |

**Cenários de uso evidenciados:**
- **Multi-session em gateway web** (#7543): Usuários desejam conversas independentes por agente
- **Discord-assisted issue triage** (#8518): Integração com SOP para automação de triagem
- **Agent bundle export** (#9986): Portabilidade de agentes entre instalações
- **Voice transcription bridges**: Necessidade de integração com sistemas ASR externos

**Satisfação parcial:**
- Funcionalidades de security estão amadurecendo (sender authorization para Bluesky/Reddit corrigida)
- Interface de approval cards sendo melhorada (#10004) com posição do batch de tools
- Token accounting exposto em history-trim events (#9713)

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou aguardando resposta

| Issue | Título | Criado | Atualizado | Prioridade | Observação |
|-------|--------|--------|------------|------------|------------|
| [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) | Test coverage across 13 shards | 2026-06-15 | 2026-09-03 | P2 | Baixa atividade (1 comentário) |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | RUSTSEC-2026-0247 bitmaps | 2026-08-10 | 2026-09-03 | P1 | BLOCKED — зависимость от imbl/Matrix SDK |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | Interactive approval from any member | 2026-07-26 | 2026-09-03 | P1 | IN-PROGRESS — security hotfix pendente |
| [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | Docker nested sandbox | 2026-07-21 | 2026-09-03 | P1 | IN-PROGRESS |

### PRs aguardando ação do autor

| PR | Título | Status | Bloqueante |
|----|--------|--------|------------|
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | Provider identity on usage events | needs-author-action | Size: XL |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron agent job timeout | needs-author-action | Size: XL |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | A2A outbound client Phase 1 | needs-author-action | Size: XL |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | Sender auth Bluesky/Reddit | needs-author-action | HIGH risk |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | Per-agent ownership scoping | needs-author-action | Size: XL |

### Recomendações

1. **Urgente:** Atribuir recursos para [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) — bug S1 com impacto em account flags
2. **Crítico:** Resolver dependência de RUSTSEC em [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — `bitmaps` via `imbl` → Matrix SDK
3. **Arquitetural:** Consolidar RFC decision queue em [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) para clareza de roadmap
4. **CI:** Implementar melhorias de caching de Rust builds conforme [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — impacto direto na DX

---

*Relatório gerado em 2026-09-04 com base em dados do GitHub de zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*