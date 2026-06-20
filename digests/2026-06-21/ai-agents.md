# Resumo diário do ecossistema de agentes de IA 2026-06-21

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-20 21:11 UTC

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
## Data: 2026-06-21

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade mínima** nas últimas 24 horas, com **zero Pull Requests** e **zero releases**. Foram registradas **2 Issues** (1 aberta e 1 fechada), indicando que a atenção da comunidade está focada em **bug reports** ao invés de contribuições de código. A issue aberta #967 sinaliza um problema crítico de estabilidade no ambiente Windows, enquanto a issue #952 sobre respostas incompletas com Ollama foi resolvida. O projeto não demonstra atividade de desenvolvimento ativo no momento, sugerindo possivelmente um período de estabilidade entre ciclos de release.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O último release disponível é **v2026.5.29** (conforme mencionado na issue #967). Recomenda-se verificar o repositório para changelog completo.

> **Nota:** Sem releases recentes, não há breaking changes ou notas de migração a reportar neste ciclo.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24 horas.**

A comunidade não enviou ou mesclou Pull Requests no período analisado, indicando:
- Possível estabilização do codebase atual
- Espera por feedback dos mantenedores em PRs pendentes
- Baixa atividade de contributors no momento

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| Issue | Tipo | Comentários | Status |
|-------|------|-------------|--------|
| #952 - Respostas incompletas com Ollama | Bug | 3 | ✅ Fechada |
| #967 - NoResponseContent error | Bug | 0 | 🔴 Aberta |

### Análise:

- **Issue #952** ([🔗](https://github.com/nullclaw/nullclaw/issues/952)): Bug com modelo local Gemma via Ollama retornando respostas incompletas. Foi **resolvida** com 3 comentários, indicando discussão ativa e possível correção ou workaround implementado.

- **Issue #967** ([🔗](https://github.com/nullclaw/nullclaw/issues/967)): Erro crítico `NoResponseContent`no Windows 11 com modelo Agnes-2.0-Flash. Taxa de ocorrência de **>50%** (12 em 21 conversas). Este é o tema mais urgente no momento.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico (Aberto)
**Issue #967** - `NoResponseContent` ([🔗](https://github.com/nullclaw/nullclaw/issues/967))
- **Severidade:** Alta (ocorrência >50%)
- **Ambiente:** Windows 11
- **Versão:** v2026.5.29
- **Modelo:** Agnes-2.0-Flash
- **Tempo de resposta:** 27 segundos antes do erro
- **Impacto:** Usabilidade severamente degradada em ambiente Windows

### ✅ Resolvido
**Issue #952** - Respostas incompletas com Ollama ([🔗](https://github.com/nullclaw/nullclaw/issues/952))
- **Status:** Fechada
- **Problema:** Agente não respondia em frases completas com Gemma via Ollama
- **Resolução:** Provavelmente atribuída/comentada pelos mantenedores

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request nova registrada nas últimas 24h.**

### Insights do backlog:
- Issues abertas indicam foco em **estabilidade de integrações** (Ollama, APIs externas)
- Modelo Agnes-2.0-Flash aparece como opção popular em uso
- Suporte Windows parece necessitar de atenção

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas:

1. **Falha de resposta em modelos externos**
   - Usuários experimentam erros quando o modelo não retorna conteúdo
   - Problema recorrente com mais de 50% de frequência em alguns cenários
   - Impacto direto na experiência de uso do agente

2. **Incompatibilidade com modelos locais**
   - Integração com Ollama apresenta problemas de completude de resposta
   - Modelos como Gemma não retornam output completo

### Cenário de uso identificado:
```
OS: Windows 11
Programa: v2026.5.29
Modelo: Agnes-2.0-Flash (API externa)
Frequência de erro: >50%
```

### Satisfação geral:
**⚠️ Preocupante** - A taxa de erro de 50%+ reportada é significativa e compromete a confiabilidade do produto para usuários Windows.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/atendimento:

| Issue | Título | Criação | Atualização | Prioridade |
|-------|--------|---------|-------------|------------|
| #967 | error: NoResponseContent | 2026-06-20 | 2026-06-20 | 🔴 Alta |

### Análise:

A issue #967 foi criada em 2026-06-20 e **não recebeu comentários dos mantenedores** até o momento da análise (2026-06-21). Dado o impacto severo (>50% de falha), recomenda-se:

1. **Resposta imediata** do time de desenvolvimento
2. Investigação do log de erros para identificar root cause
3. Verificar se existe issue duplicada (comparar com #952)

---

## Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 1 |
| Issues fechadas (24h) | 1 |
| PRs merged (24h) | 0 |
| Releases (24h) | 0 |
| Bugs críticos abertos | 1 |
| Issues pendentes resposta | 1 |

---

## Recomendações

1. **Alta prioridade:** Atender issue #967 sobre `NoResponseContent` no Windows
2. **Verificar** se a issue #952 foi totalmente resolvida ou necessita follow-up
3. **Comunicar** aos usuários Windows sobre timeline de correção
4. **Considerar** release corretiva (hotfix) para v2026.5.29

---

*Relatório gerado em: 2026-06-21 | Fonte: github.com/nullclaw/nullclaw*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-21
**Projetos Analisados:** 7 repositórios

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 21 de junho de 2026. Projetos como **ZeroClaw, Hermes Agent, NanoBot, IronClaw e CoPaw** operam em ritmo intenso de desenvolvimento, com 15-50 eventos diários e múltiplas funcionalidades em paralelo. Em contraste, **NullClaw** encontra-se em período de baixa atividade, e **PicoClaw** mantém desenvolvimento moderado com gargalos de revisão. Observa-se convergência técnica em três eixos: **estabilidade de integrações com modelos locais** (Ollama, Gemma), **otimização de memória e contexto** para sessões longas, e **expansão multi-canal** (Telegram, WhatsApp, iMessage). A consolidação arquitetural (manifest-driven channels, workspace multi-tenancy) indica maturação do setor em direção a deployments enterprise.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases | Saúde |
|---------|---------------|-------------|------------------|---------|-------|
| **ZeroClaw** | 50 | ~34 | 2 | 0 | 🟡 Alta atividade, baixa resolução |
| **Hermes Agent** | 28 | 34 | 16 | 0 | 🟢 Pipeline saudável |
| **NanoBot** | 5 | 15 | 4 | 0 | 🟢 Crescimento estável |
| **IronClaw** | 1 | 16 | 7 | 0 | 🟢 Refatoração ativa |
| **CoPaw** | 6 | 8 | 1 | 0 | 🟢 Comunidade ativa |
| **PicoClaw** | 3 | 1 | 0 | 1 nightly | 🟡 Backlog estagnado |
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Estagnado |

**Destaque:** Hermes Agent apresenta o melhor rácio de merge (16 PRs/34 abertos), indicando disciplina de review superior aos pares. PicoClaw e NullClaw são os únicos com taxa de stale items elevada (100% das issues ativas em PicoClaw).

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw como Referência do Ecossistema

**Vantagens Competitivas:**
- **Pipeline mais robusto:** 50 issues + 50 PRs atualizados em 24h demonstra tração massiva de comunidade
- ** roadmap mais elaborado:** 4 milestones ativos (v0.8.2, v0.8.3, v0.9.0) com 131 itens planejados para breaking changes
- **Iniciativas únicas:** Voice satellite (ESP32/PWA), Dream Mode de consolidação de memória, multi-database session backends

**Diferenças Técnicas:**
| Aspecto | ZeroClaw | Hermes Agent | NanoBot |
|---------|---------|-------------|---------|
| Arquitetura | Modular com manifest-driven | Gateway-centric | Channel-first |
| Foco principal | Observabilidade + extensibilidade | Desktop UX + skills | Developer experience |
| Community size | 50k+ estrelas (inferido) | Média-alta | Crescente |

**Limitações identificadas:** Taxa de fechamento baixa (4/50 issues), 3 bugs P1 abertos incluindo context budget crítico. A atividade alta não se traduz em resolução proporcional.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Modelos Locais

| Projeto | Problema Reportado |
|---------|-------------------|
| NullClaw | `NoResponseContent` com Agnes-2.0-Flash via API (>50% falha) |
| NullClaw | Respostas incompletas com Gemma via Ollama (resolvido) |
| Hermes Agent | Falha com gemma4 via Ollama (P2) |

**Análise:** Integração com Ollama e modelos locais emerge como surface de bugs recorrente. zero de projetos enfrenta problemas de timeout, schema de resposta e streaming.

### 4.2 Otimização de Memória e Contexto

| Projeto | Iniciativa |
|---------|------------|
| ZeroClaw | Dream Mode — consolidação periódica de memória em 5 fases |
| IronClaw | Learning System WS-1 — memory learning semantics com confidence scoring |
| CoPaw | Migração para ReMe4 + scroll context manager |
| Hermes Agent | Memory-context separation (RFC ativa) |

**Análise:**Consenso da indústria em abordar explosão de contexto via consolidação inteligente de memória durante ociosidade.

### 4.3 Bugs de Concorrência

| Projeto | Problema |
|---------|----------|
| NanoBot | Race condition em `Nanobot.run()` hooks — dois PRs independentes propõem correções (#4425, #4409) |
| Hermes Agent | Memory monitor heartbeat não inicia (P2) |

### 4.4 Multi-Canal

| Projeto | Canais em Desenvolvimento |
|---------|--------------------------|
| NanoBot | iMessage via Photon Spectrum (merged) |
| Hermes Agent | WeChat, Telegram plugin system |
| IronClaw | Telegram ingress projection |
| ZeroClaw | Matrix room management, Realtime voice-host |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos | Características |
|----------|----------|----------------|
| **Enterprise/Multi-tenant** | IronClaw, ZeroClaw | Workspace entities, Postgres profiles, multi-database backends |
| **Developer Experience** | NanoBot, CoPaw | SDK expandido, TUI inline, onboarding wizard |
| **Desktop/Consumer** | Hermes Agent | Desktop app, Model Picker, process management |
| **Edge/Embedded** | PicoClaw | FreeBSD support, Evolution mode, lightweight |

### 5.2 Por Arquitetura

```
ZeroClaw ──── Modular + manifest-driven
     │
     ├── Channels (Telegram, Matrix, Voice)
     ├── Observability (opt-in payload capture, trace_id correlation)
     └── Memory (Dream Mode consolidation)

Hermes ────── Gateway-centric
     │
     ├── Skills system + auditor
     ├── Desktop-first UX
     └── MCP-first tool integration

NanoBot ───── Channel-first
     │
     ├── Python SDK + Node sidecar
     ├── Inline TUI
     └── SuspendTurn para human-in-the-loop

IronClaw ──── Manifest-driven + Rust
     │
     ├── Typed auth verifiers
     ├── Workspace multi-tenancy
     └── Self-evolution via skill extraction

CoPaw ─────── Agent loop observability
     │
     ├── ReMe4 memory migration
     ├── Langfuse integration
     └── Docker tool execution
```

### 5.3 Diferenciação Técnica Relevante

| Diferencial | Projeto | Implicação |
|-------------|---------|------------|
| WASM plugin program | ZeroClaw (v0.8.2) | Extensibilidade sem recompilação |
| Skill self-extraction | IronClaw | Auto-instalação de capabilities via transcript |
| Scroll context manager | CoPaw | History durável + recall REPL |
| iMessage native | NanoBot | Sem relay Mac necessário |
| skill-auditor | Hermes Agent | QA automatizado de capabilities bundladas |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Características |
|------|----------|----------------|
| **🚀 Alta velocidade** | ZeroClaw, Hermes Agent, NanoBot, IronClaw | 15-50 PRs/issues por dia, merge consistente |
| **⚡ Crescimento** | CoPaw | 5+ first-time contributors, pipeline intenso |
| **🐢 Moderada** | PicoClaw | Nightly builds, mas backlog estagnado |
| **⏸️ Estagnada** | NullClaw | Sem PRs, 1 issue crítica sem resposta |

### 6.2 Qualidade de Processos

| Indicador | Melhor Prática | Projetos que Demonstam |
|-----------|----------------|----------------------|
| Rácio merge/aberto | >0.3 | Hermes Agent (0.47), IronClaw (0.44) |
| Bugs críticos tratados | <3 P1 abertos | IronClaw (0 P1), PicoClaw (0 P1) |
| Tempo de resposta | <48h em issues críticas | Hermes Agent (comentários ativos) |
| Test coverage | E2E nightly | IronClaw, Hermes Agent |

### 6.3 Maturidade Relativa

```
ZeroClaw ─────────────── Maturidade alta, dívida técnica em bugs P1
Hermes Agent ─────────── Maturidade alta, pipeline saudável
IronClaw ─────────────── Maturidade alta, em refatoração estrutural
NanoBot ──────────────── Maturidade crescente, foco em DX
CoPaw ────────────────── Maturidade inicial, alta contribuição externa
PicoClaw ─────────────── Maturidade moderada, gargalo de review
NullClaw ─────────────── Maturidade baixa, possível abandono
```

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Agents locais/on-premise** | Bugs recorrentes com Ollama, Gemma, modelos locais em todos os projetos | Demanda por inferência local cresce; ferramentas de debugging necessárias |
| **Memory persistence** | 5+ projetos com iniciativas de memória inteligente | Diferenciação via capacidade de aprendizado contextual |
| **Voice/satellite devices** | ZeroClaw (#7943, #7944), NanoBot (streaming) | Próxima fronteira: hardware edge para agentes |
| **Enterprise readiness** | Multi-tenancy, Postgres backends, workspace isolation | Agentes evoluem para plataformas multi-usuário |
| **Observabilidade** | ZeroClaw (opt-in payload), CoPaw (Langfuse), Hermes (audit logs) | Demanda por debuggabilidade em produção |

### 7.2 Sinais Emergentes

| Sinal | Projeto | Observação |
|-------|---------|------------|
| MCP como padrão | IronClaw, Hermes, NanoBot | Todos com foco em MCP server scoping ou integração |
| Cron/scheduled agents | ZeroClaw (#6037 bug), CoPaw (#5250 bug), NanoBot | Padrão de uso crescente, bugs de isolamento em produção |
| Reasoning models | Hermes, CoPaw, NanoBot | Suporte a o3, deepseek-r1 com escalonamento de effort |
| WASM extensibility | ZeroClaw (v0.8.2) | Plugins sem recompilação como vetor de ecossistema |

### 7.3 Riscos Sistêmicos

| Risco | Impacto | Projetos Afetados |
|-------|---------|-------------------|
| **Fragmentação de integrações** | Cada projeto implementa canais independentemente | Todos |
| **Stale backlog** | 100% das issues ativas em PicoClaw sem resposta | PicoClaw, NullClaw |
| **Security surface** | Hermes Agent (#49578), ZeroClaw (#6984) | Usuários enterprise |
| **Context explosion** | Budget exceeded na iteração 1 (ZeroClaw #5808) | Usuários default |

---

## Síntese Executiva

| Dimensão | Líder | Tendência |
|----------|-------|-----------|
| **Atividade** | ZeroClaw | 🔴 Muito alta (risco de burnout) |
| **Qualidade** | Hermes Agent | 🟢 Pipeline disciplinado |
| **Inovação** | IronClaw | 🟢 Arquitetura manifest-driven |
| **DX** | NanoBot | 🟢 TUI, SDK, onboarding |
| **Comunidade** | CoPaw | 🟢 Novos contribuidores |
| **Estabilidade** | IronClaw | 🟢 Zero P1, refatoração controlada |
| **Consolidação** | NullClaw | 🔴 Possível abandono |

**Recomendações para Decisores:**

1. **Para novo projeto/integração:** Priorizar Hermes Agent ou NanoBot por maturidade de pipeline e comunidade ativa
2. **Para uso enterprise:** Acompanhar IronClaw (multi-tenancy) e ZeroClaw (observability, WASM)
3. **Para pesquisa/protótipo:** CoPaw oferece APIs flexíveis e alta receptividade a contribuições
4. **Evitar:** NullClaw sem revival confirmável; PicoClaw sem resolução de gargalo de review

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-21

## 1. Panorama do Dia

O NanoBot apresenta **atividade intensa** em 21 de junho de 2026, com 19 PRs atualizados nas últimas 24h e nenhum lançamento正式izado. A comunidade demonstra foco significativo em **correções de concorrência** (dois PRs independentes atacando o mesmo bug #4408), **otimizações de performance** em codificação de tokens, e **expansão de canais** (iMessage integradas via Photon Spectrum). O volume de atividade sugere maturidade crescente do projeto, com prioridade clara em estabilidade e experiência do desenvolvedor.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto mantém 5 issues abertas e 15 PRs em desenvolvimento ativo, indicando ciclo de release próximo ou em preparação. Não há announcements de breaking changes pendentes.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (4)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #4426 | feat(channels): add iMessage channel via Photon Spectrum | **Maior** — Adiciona suporte nativo a iMessage sem relay Mac | [PR #4426](https://github.com/HKUDS/nanobot/pull/4426) |
| #4427 | fix(webui): prevent iOS Safari auto-zoom on textarea focus | UX mobile — corrige frustração comum em dispositivos iOS | [PR #4427](https://github.com/HKUDS/nanobot/pull/4427) |
| #4303 | fix(mcp): close tracked generators in _close_server to prevent GC crash | **Stabilidade** — Resolve crash por exit de cancel scope em task incorreta | [PR #4303](https://github.com/HKUDS/nanobot/pull/4303) |
| #4321 | fix: advance dream cursor when Dream is disabled to prevent prompt bloat | **Performance** — Evita acúmulo de cursor não-avançado quando dream está desabilitado | [PR #4321](https://github.com/HKUDS/nanobot/pull/4321) |

**Destaque principal:** A integração do iMessage (#4426) representa expansão significativa de canais de comunicação, seguindo o padrão Python-channel + Node-sidecar já estabelecido pelo WhatsApp bridge.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Interação

| # | Título | Comentários | Link |
|---|--------|-------------|------|
| #4408 | [bug] Nanobot.run() per-run hooks are not concurrency-safe | 2 | [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) |
| #4429 | feat: Allow custom provider to configure thinking style | 1 | [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429) |
| #4420 | 性能优化：`estimate_prompt_tokens` 每轮迭代对工具定义做冗余 tiktoken 编码 | 1 | [Issue #4420](https://github.com/HKUDS/nanobot/issues/4420) |

**Análise:** A issue #4408 sobre race condition em hooks é a mais comentada, refletindo preocupação com segurança em ambientes concorrentes. Nota-se também demanda clara por **flexibilização de provedores customizados** (VolcEngine/Doubao) para parâmetros de reasoning.

---

## 5. Bugs e Estabilidade

### Issues de Bug Abertas

| Severidade | # | Descrição | Link |
|------------|---|-----------|------|
| **Crítica** | #4408 | `_extra_hooks` compartilhado é sobrescrito em execuções concorrentes — dois PRs (#4425, #4409) já propõem correções | [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) |

### Análise de Estabilidade

A issue #4408 representa risco moderado-alto para deployments multi-threaded. A comunidade já respondeu com **duas soluções independentes**:
- **#4425** (michaelxer): Usa `contextvars` para isolar hooks por chamada
- **#4409** (waelantar): Passa hooks diretamente via `process_direct` sem mutar estado compartilhado

Ambas abordagens são complementares e demonstram engajamento rápido da comunidade com problema de estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Issues)

| # | Feature | Relevância | Link |
|---|---------|------------|------|
| #4429 | Permitir provedores customizados configurarem thinking style | Média-alta — necessário para VolcEngine/Doubao | [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429) |
| #4419 | Escalonamento automático de reasoning effort | Média — experiência out-of-box para modelos de reasoning | [Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) |
| #4422 | Suporte a Telegram Bot API 10.1 sendRichMessage | Média — tabelas, task lists, math blocks | [Issue #4422](https://github.com/HKUDS/nanobot/issues/4422) |

### PRs de Feature em Desenvolvimento (15 abertos)

| # | Feature | Área | Link |
|---|---------|------|------|
| #4329 | Inline TUI para `nanobot agent` | CLI | [PR #4329](https://github.com/HKUDS/nanobot/pull/4329) |
| #4411 | SuspendTurn para async/human-in-the-loop | Agent | [PR #4411](https://github.com/HKUDS/nanobot/pull/4411) |
| #4296 | Expandir controles de runtime do Python SDK | SDK | [PR #4296](https://github.com/HKUDS/nanobot/pull/4296) |
| #4395 | Wizard de onboarding melhorado | Setup | [PR #4395](https://github.com/HKUDS/nanobot/pull/4395) |
| #4414 | Modo agregado de resultados para subagentes | Codex | [PR #4414](https://github.com/HKUDS/nanobot/pull/4414) |
| #4416 | Suporte a presets de modelo em cron jobs | Codex | [PR #4416](https://github.com/HKUDS/nanobot/pull/4416) |

**Sinais de roadmap:** Foco claro em (1) **experiência de developer** (SDK, TUI, onboarding), (2) **flexibilização de provedores**, e (3) **operações autônomas** (cron jobs, subagentes).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Link |
|-----|-----------|------|
| **Performance lenta** em数字员工 (agentes digitais) por codificação redundante de tools | Issue #4420 — tiktoken encoding feito a cada chamada quando tools são imutáveis | [Issue #4420](https://github.com/HKUDS/nanobot/issues/4420) |
| **Provedores customizados limitados** — não suportam parâmetros de reasoning não-padrão | Issue #4429 — VolcEngine/Doubao usam `{"thinking": {"type": "enabled"}}` | [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429) |
| **Erro misleading em Telegram** — mensagens "not found" causam desativação permanente de rich features | PR #4423 — match muito amplo para erros transientes | [PR #4423](https://github.com/HKUDS/nanobot/pull/4423) |
| **WhatsApp LID não resolvido** na primeira mensagem — affecta allowFrom matching | PR #4407 — seed de mappings no startup | [PR #4407](https://github.com/HKUDS/nanobot/pull/4407) |

### Cenários de Uso Emergentes

- **Agentes digitais autônomos** (nanobee,数字员工) — revela necessidade de performance em loops longos
- **Integração empresarial multi-canal** — iMessage, Telegram, WhatsApp simultâneos
- **Modelos de reasoning** (o3, deepseek-r1) — escalonamento de effort é demanda crescente

---

## 8. Backlog que Merece Atenção

### PRs Mais Antigos Sem Merge

| # | Título | Idade | Status | Link |
|---|--------|-------|--------|------|
| #4256 | fix(memory): keep history cursor monotonic | ~13 dias | Aberto | [PR #4256](https://github.com/HKUDS/nanobot/pull/4256) |
| #4296 | feat(sdk): expand Python SDK runtime controls | ~10 dias | Aberto | [PR #4296](https://github.com/HKUDS/nanobot/pull/4296) |
| #4329 | feat(cli): add inline TUI for nanobot agent | ~8 dias | Aberto | [PR #4329](https://github.com/HKUDS/nanobot/pull/4329) |

### Issues Antigas Sem Resposta

| # | Título | Idade | Link |
|---|--------|-------|------|
| #4408 | Bug de concorrência em hooks | ~3 dias | [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) |
| #4419 | Escalonamento automático de reasoning | ~1 dia | [Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) |

**Recomendação:** O PR #4256 (history cursor monotonic) está aberto há 13 dias e pode indicar complexidade ou necessidade de revisão mais aprofundada. Recomenda-se priorização para evitar regressões em memory.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas (24h) | 5 | Neutra |
| PRs abertos | 15 | **Alta** |
| PRs fechados/merged (24h) | 4 | **Positiva** |
| Novas releases | 0 | N/A |
| Bugs críticos abertos | 1 | Requer atenção |
| Features em desenvolvimento | 15+ | **Muito ativa** |

---

*Relatório gerado em 2026-06-21. Dados extraídos de github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-21

## 1. Panorama do dia

O Hermes Agent mantém alta atividade de desenvolvimento, com **50 issues e 50 PRs atualizados nas últimas 24 horas** — indicando um ritmo de trabalho intenso pela comunidade. Não houve lançamentos de novas versões, mas o pipeline de correções está ativo: 16 PRs foram merged/fechados e 28 issues abertas ganham tração. A base de código mostra foco em **estabilidade do gateway** e **experiência desktop**, com correções de bugs sensíveis (incluindo dois issues de segurança em análise). A distribuição de prioridades concentra esforços em P2 (media prioridade), sugerindo correções de bugs funcionais que afetam fluxos principais de uso.

---

## 2. Lançamentos

**Nenhum novo release detectado nas últimas 24 horas.**

A versão mais recente mencionada nos dados é `v0.17.0` (referenciada em múltiplos issues, como #49297 e #49788), indicando que a comunidade está em ciclo de preparação para a próxima release. Recomenda-se monitorar os PRs com标签 `sweeper:implemented-on-main` — várias correções recentes já estão no branch principal e podem compor a próxima versão.

---

## 3. Progresso do Projeto

Os PRs merged/fechados hoje trazem avanços concretos:

| PR | Título | Impacto |
|---|---|---|
| [#42664](https://github.com/NousResearch/hermes-agent/pull/42664) | fix(gateway): strict gateway command-line matcher + Windows restart verification | Corrige detecção ambígua de processos gateway no Windows, evitando reinicializações incorretas |
| [#49781](https://github.com/NousResearch/hermes-agent/pull/49781) | fix(web): send client-IP header to SearXNG | Resolve erro HTTP 400 em instâncias SearXNG acessadas via túnel SSH |
| [#49796](https://github.com/NousResearch/hermes-agent/pull/49796) | test(agent): isolate anthropic token resolution tests | Melhora hermeticidade dos testes em macOS com Keychain |
| [#49791](https://github.com/NousResearch/hermes-agent/pull/49791) | feat(skills): add skill-auditor | Adiciona auditor de qualidade para skills bundladas |
| [#49798](https://github.com/NousResearch/hermes-agent/pull/49798) | fix(compression): deduplicate consecutive identical assistant messages | Reduz ruído em loops de ferramentas, melhorando eficiência de contexto |
| [#49800](https://github.com/NousResearch/hermes-agent/pull/49800) | fix(agent): unwrap MCP kwargs envelope | Corrige schema de ferramentas MCP que recebiam argumentos envoltos incorretamente |
| [#49799](https://github.com/NousResearch/hermes-agent/pull/49799) | fix(fallback): attach credential pool after provider switch | Previne contaminação de credenciais entre provedores em failover |
| [#49805](https://github.com/NousResearch/hermes-agent/pull/49805) | fix(email): resolve IMAP/SMTP host from config and validate | Corrige erro DNS misleading ao conectar IMAP |

**Destaque de progresso:** A deduplicação de mensagens idênticas em compressão (#49798) é uma otimização relevante para sessões longas com ferramentas que emitem saídas repetitivas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

1. **[#31584](https://github.com/NousResearch/hermes-agent/issues/31584)** — *"Treat memory-context as background context"* (8 comentários, P2)
   - **Demanda:** Separar memória persistente do conteúdo autoritativo de mensagens do usuário, evitando que o agente trate contexto de memória como input do usuário.
   - **Sinal:** Contribuidor highlights surface de confusão para agentes e potencial ameaça de segurança se mal utilizado.
   - **Status:** Aberto — requer design decision sobre tratamento de contexto.

2. **[#43784](https://github.com/NousResearch/hermes-agent/issues/43784)** — *"Shareable Profile Templates"* (4 comentários, P3)
   - **Demanda:** Permitir exportar/importar configurações de perfis (skills, MCP, soul.md) para reutilização entre usuários.
   - **Sinal:** Crescente interesse em colaboração e padronização de configurações especializadas.

3. **[#49673](https://github.com/NousResearch/hermes-agent/issues/49673)** — *"Gateway/front-door sessions become multi-minute slow"* (3 comentários, P2)
   - **Demanda:** Sessions degradam em stalls de minutos quando trabalho pesado com ferramentas ocorre em chats ao vivo.
   - **Sinal:** Problema de escalabilidade em uso produção com interações frequentes.

4. **[#38552](https://github.com/NousResearch/hermes-agent/issues/38552)** — *"Automated Workspace Memory"* (2 comentários, P3)
   - **Proposta:** Agent que lembra o propósito de cada diretório, evitando re-aprendizado a cada sessão.
   - **Alinhamento estratégico:** Complementa sistema de memória existente, aumentando autonomia do agente.

### PRs com maior atenção:

- **[#49809](https://github.com/NousResearch/hermes-agent/pull/49809)** — *feat(desktop): let the agent reap background processes* — Corrige status stack de processos e melhora rendering de kills por sinal.
- **[#49807](https://github.com/NousResearch/hermes-agent/pull/49807)** — *perf(desktop): make session switching snappy on large transcripts* — Otimização crítica para UX desktop.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (P1-P2) — Requerem atenção urgente:

| Issue | Descrição | Severidade | Platform |
|---|---|---|---|
| [#49297](https://github.com/NousResearch/hermes-agent/issues/49297) | Hermes falha ao usar gemma4 com backend Ollama | **P2** | Ollama |
| [#49578](https://github.com/NousResearch/hermes-agent/issues/49578) | `execute_code` ignora restrições de edição de arquivos (bypass de segurança) | **P2** ⚠️ | Security |
| [#28902](https://github.com/NousResearch/hermes-agent/issues/28902) | OAuth Anthropic Max: 400 "out of extra usage" com skills ativas | **P1** | Anthropic |
| [#17144](https://github.com/NousResearch/hermes-agent/issues/17144) | Docker: arquivos criados como root, ilegíveis pelo gateway user | **P2** | Docker |
| [#49773](https://github.com/NousResearch/hermes-agent/issues/49773) | `memory_monitor` heartbeat nunca inicia em v0.17.0 | **P2** | Gateway |

### Bugs Recentemente Fechados (regressões corrigidas):

- [#29846](https://github.com/NousResearch/hermes-agent/issues/29846) — Notificação de shutdown do gateway agora customizável ✅
- [#29582](https://github.com/NousResearch/hermes-agent/issues/29582) — WeChat gateway agora envia arquivos .html ✅
- [#29643](https://github.com/NousResearch/hermes-agent/issues/29643) — `vision_analyze` agora reconhece imagens em cache do Telegram ✅
- [#29651](https://github.com/NousResearch/hermes-agent/issues/29651) — Windows `subprocess.Popen` creationflags bug resolvido ✅
- [#29200](https://github.com/NousResearch/hermes-agent/issues/29200) — Telegram streaming não trunca mais em backticks não-fechados ✅
- [#29557](https://github.com/NousResearch/hermes-agent/issues/29557) — Mouse tracking escape sequences não vazam mais no input ✅

### Análise de Estabilidade:

**Sinal positivo:** 6 bugs P2-P3 foram fechados com标签 `sweeper:implemented-on-main`, indicando pipeline de QA ativo. **Sinal de atenção:** O bug de segurança em `#49578` (execute_code bypass) é crítico — `patch` e `write_file` recusam editar arquivos sensíveis, mas `execute_code` não respeita essa restrição, criando surface para elevação de privilégios dentro do agente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Em Destaque (abertas):

| Issue | Título | Prioridade | Sinais de Demanda |
|---|---|---|---|
| [#43784](https://github.com/NousResearch/hermes-agent/issues/43784) | Shareable Profile Templates | P3 | Templates reutilizáveis entre usuários |
| [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) | Automated Workspace Memory | P3 | Memória persistente de propósito de diretórios |
| [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) | Extend image_gen para reference_image_urls | P3 | Suporte a modelos multimodais avançados (UNI 1.1) |
| [#49797](https://github.com/NousResearch/hermes-agent/pull/49797) | Expose LLM execution status hooks para plugins | P3 | Hooks de lifecycle para middleware de execução |

### Evolução de Plataforma:

- **WhatsApp:** Múltiplos PRs de segurança (#49448, #43454) e entrega de vídeos nativa (#43456) indicam investimento em estabilidade e features da plataforma.
- **Desktop:** Foco em performance de sessão (#49807) e gerenciamento de processos background (#49809).
- **Telegram:** Migração para plugin system em andamento (#49801), consolidando mudanças de PRs anteriores.
- **Model Picker:** #49804 expõe `model_aliases` no picker desktop/CLI — melhoria de UX para provedores customizados.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas:

1. **Configuração de backend web confusa** — `#29617`: Usuários não sabem que `web.search_backend` e `web.extract_backend` devem ser setados mesmo com `web.backend` configurado; o sistema falha silenciosamente.

2. **Docker deployment cria arquivos root-owned** — `#17144`: Usuários em containers não conseguem acessar estado persistente escrito pelo agente, causando falhas em operações subsequentes.

3. **Memory context causa confusão** — `#31584`: Usuários reportam que memórias são tratadas como mensagens de usuário, levando a respostas incorretas ou vazamento de contexto.

4. **Gateway sessions degradam com uso** — `#49673`: Sessões longas ficam lentas (>1 min) após trabalho pesado com ferramentas; usuários precisam reiniciar manualmente.

5. **Telegram streaming com artefatos** — `#49536` + `#49793`: Mensagens finais sobrepõem preview de streaming; cursor aparece como quadrado branco em iMessage.

### Cenários de Uso Observados:

- **Uso profissional com múltiplas plataformas:** Integração Telegram, WhatsApp, WeChat ativa, com demanda por features cross-platform (webhooks, arquivos).
- **Desenvolvimento com Ollama local:** Usuários querem usar modelos locais (gemma4, llama.cpp), mas enfrentam bugs de compatibilidade.
- **Skills e memória:** Forte interesse em especialização de agentes via profiles, templates compartilháveis e memória persistente de workspace.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta / aguardando triagem:

| Issue | Idade | Título | Prioridade | Nota |
|---|---|---|---|---|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | ~28 dias | Treat memory-context as background context | P2 | 8 comentários, aguardando decisão de design |
| [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) | ~18 dias | Automated Workspace Memory | P3 | Proposta estruturada, sem assignee |
| [#20815](https://github.com/NousResearch/hermes-agent/issues/20815) | ~46 dias | fix: dashboard shows API key warning for local providers | P3 | Bug visual no dashboard, baixa prioridade |
| [#43275](https://github.com/NousResearch/hermes-agent/issues/43275) | ~11 dias | Thinking toggle reverts to 'Med' after one turn | P3 | Bug UX desktop, sem atividade recentes |
| [#49788](https://github.com/NousResearch/hermes-agent/issues/49788) | 1 dia | Desktop app: reinstall/setup prompt on every launch | P2 | Recém-reportado, alta frustração |

### Priorização Recomendada:

1. **#49578** (segurança) — execute_code bypass: requer triagem e hotfix.
2. **#49773** (funcional) — memory_monitor não inicia: quebra health checks de watchdog.
3. **#49297** (compatibilidade) — gemma4 + Ollama: afeta usuários locais.
4. **#17144** (infraestrutura) — Docker root files: bloqueia deployments containerizados.

---

## Métricas Sintéticas do Período

| Indicador | Valor |
|---|---|
| Issues ativas abertas | 28 |
| Issues fechadas (24h) | 22 |
| PRs abertos | 34 |
| PRs merged/fechados | 16 |
| Bugs P1-P2 abertos | 5 |
| Issues de segurança | 2 (1 aberta, 1 em PR) |
| Novas releases | 0 |
| Issue mais comentada | #31584 (8 comentários) |
| PR mais recentes | #49809, #49807 (desktop perf) |

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent em 2026-06-21.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-21

---

## 1. Panorama do Dia

O ecossistema PicoClaw mantém um ritmo de desenvolvimento ativo com a publicação de uma nova nightly build (v0.3.0-nightly.20260620), indicando que a versão 0.3.0 está em estágio avançado de desenvolvimento. Nas últimas 24 horas, foram registradas 3 issues ativas e 1 pull request em aberto, demonstrando uma atividade moderada de triagem e implementação. A presença de múltiplas issues marcadas como `[stale]` (3 de 3 issues e 1 de 1 PR) sugere um gargalo na revisão e resposta da comunidade, o que pode impactar o tempo de resolução de bugs e features. O projeto demonstra viabilidade contínua, mas há necessidade de atenção à gestão do backlog.

---

## 2. Lançamentos

### Nova Release
- **Nightly Build v0.3.0-nightly.20260620.287853ab**
  - Tipo: Automated build (potencialmente instável)
  - Comparação: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  - **Nota:** Esta é uma build automática para a branch main, não recomendada para ambientes de produção. A proximidade com a tag v0.3.0 sugere que a versão estável está próxima.

**Recomendação:** Usuários em produção devem aguardar a release estável de v0.3.0. Desenvolvedores podem testar esta nightly para validar funcionalidades upcoming.

---

## 3. Progresso do Projeto

### Pull Requests em Andamento

| # | Título | Status | Autor | Atualização |
|---|--------|--------|-------|-------------|
| #2964 | Feat/image input compression | ABERTA | afjcjsbx | 2026-06-20 |

**Análise PR #2964:**
Este PR implementa compressão configurável de imagens no pipeline de visão do PicoClaw. Anteriormente, imagens recebidas dos canais eram limitadas apenas por `max_media_size`, sem uma política de compressão multinível antes da construção do payload do modelo. Esta melhoria pode:
- Reduzir custos com tokens de entrada
- Melhorar performance em canais com imagens de alta resolução
- Adicionar flexibilidade operacional

**⚠️ Atenção:** O PR está marcado como `[stale]` há quase um mês (criado em 28/05/2026). A falta de comentários undefined indica que não houve revisão ativa.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Atualização |
|---|--------|-------------|-----|-------------|
| #3012 | Token consumption when evolution is enabled | 4 | 0 | 2026-06-20 |
| #348 | General Attachment Support | 4 | 0 | 2026-06-19 |
| #2984 | Turn completion signal for WebSocket clients | 3 | 2 | 2026-06-20 |

### Análise Detalhada

**🔴 Issue #3012 — Token Consumption Bug (Alta Prioridade)**
- **Severidade:** Bug funcional
- **Problema:** Consumo contínuo e indesejado de tokens a cada minuto quando "Evolution" está habilitado
- **Ambiente:** PicoClaw v0.2.9, Go 1.25.10, MiniMax, FreeBSD-15.0
- **Status:** `[stale]` desde 20/06/2026
- **Impacto:** Custos operacionais crescentes e comportamento anômalo
- **Link:** [sipeed/picoclaw#3012](https://github.com/sipeed/picoclaw/issues/3012)

**🟡 Issue #348 — General Attachment Support (Roadmap)**
- **Tipo:** Enhancement, Priority High, Roadmap
- **Proposta:** Suporte a anexos diversos (textos, logs, config files, mídia) em canais IM
- **Impacto estratégico:** Expansão de casos de uso para Telegram, Discord e outros
- **Link:** [sipeed/picoclaw#348](https://github.com/sipeed/picoclaw/issues/348)

**🟢 Issue #2984 — WebSocket Turn Completion Signal (Moderada)**
- **Tipo:** Feature, Protocol
- **Proposta:** Sinal explícito de finalização de turno para clientes WebSocket externos
- **Reações:** 2 👍 (maior engajamento positivo entre as issues)
- **Impacto:** Melhoria na integração com clientes Pico Protocol
- **Link:** [sipeed/picoclaw#2984](https://github.com/sipeed/picoclaw/issues/2984)

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Título | Severidade | Status | Duração Aberta |
|---|--------|------------|--------|----------------|
| #3012 | Token consumption when evolution is enabled | **ALTA** | ABERTA | 16 dias |

**Análise #3012:**
O bug afeta especificamente usuários que habilitam o recurso "Evolution" do PicoClaw. O consumo contínuo de tokens a cada minuto indica um loop de processamento não intencional, possivelmente relacionado a:
- Configuração incorreta do modo Draft
- Falta de validação de condições de parada
- Interação problemática com o trigger de Code Path

**Impacto financeiro direto** para usuários que pagam por tokens de API.

**Recomendação:** Priorizar revisão urgente, pois a issue está aberta há 16 dias e tem 4 comentários indicando tentativa de diagnóstico pela comunidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Pipeline

**📌 Issue #348 — General Attachment Support**
- **Prioridade:** High, Roadmap
- **Categoriasplanejadas:**
  - Attachments textuais (.txt, .log, .yaml, .py)
  - Multimedia (imagens, áudio)
  - Documentos gerais
- **Canais afetados:** Telegram, Discord e outros IM
- **Link:** [sipeed/picoclaw#348](https://github.com/sipeed/picoclaw/issues/348)

**📌 Issue #2984 — Turn Completion Signal**
- **Tipo:** Protocol Enhancement
- **Benefício:** Determinar quando o agente terminou completamente o processamento
- **Sinais atuais insuficientes:** `message.create`, `message.update`, `typing.start`, `typing.stop`
- **Link:** [sipeed/picoclaw#2984](https://github.com/sipeed/picoclaw/issues/2984)

### PR em Implementação

**📌 PR #2964 — Image Input Compression**
- **Funcionalidade:** Compressão multinível configurável para imagens de entrada
- **Benefício:** Redução de custos e melhoria de performance
- **Link:** [sipeed/picoclaw#PR#2964](https://github.com/sipeed/picoclaw/pull/2964)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Consumo Inesperado de Recursos (#3012)**
   - Usuários experimentando o modo "Evolution" enfrentam custos não previstos devido a processamento contínuo
   - Sensação de perda de controle sobre o comportamento do agente

2. **Fragmentação de Funcionalidades**
   - Suporte limitado a anexos cria barreiras para integração em fluxos de trabalho reais
   - Usuários precisam workarounds manuais para processar documentos

3. **Integração WebSocket Imatura (#2984)**
   - Desenvolvedores externos lutam para sincronizar com os turnos de conversa
   - Falta de deterministicidade em eventos de finalização

### Cenários de Uso em Destaque

- **FreeBSD/Go ecosystem:** Usuários técnicos usando plataformas não-convencionais (FreeBSD 15.0)
- **Multi-channel:** Integração com Telegram e Discord como canais principais
- **Evolution mode:** Recurso experimental que atrai usuários avançados mas apresenta instabilidades

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta Urgente

| # | Título | Criação | Atualização | Dias Inativa |
|---|--------|---------|-------------|--------------|
| #3012 | Token consumption bug | 2026-06-05 | 2026-06-20 | ~16 dias |
| #348 | Attachment Support | 2026-02-17 | 2026-06-19 | ~124 dias |
| #2984 | Turn completion signal | 2026-06-02 | 2026-06-20 | ~19 dias |
| #2964 (PR) | Image compression | 2026-05-28 | 2026-06-20 | ~24 dias |

### Priorização Recomendada

1. **🔴 Crítica:** #3012 — Bug de consumo de tokens afeta custos diretamente
2. **🟡 Alta:** #348 — Feature de roadmap com prioridade alta, aberta há 4 meses
3. **🟡 Média:** #2984 & #2964 — Melhorias de protocolo e performance

### Observação Sistêmica

A taxa de items marcados como `[stale]` (100% das issues e PRs ativos) indica necessidade de:
- Revisão de processos de triagem
- Maior involvement de maintainers
- Possivelmente need de contribuidores adicionais

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 0 |
| Releases | 1 (nightly) |
| Bugs críticos | 1 |
| Features de roadmap | 1 |
| Taxa de stale items | 100% |

---

*Relatório gerado em 2026-06-21. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-21

---

## 1. Panorama do Dia

O IronClaw demonstra **alta atividade de desenvolvimento** neste período, com 23 PRs atualizados nas últimas 24h (16 abertos, 7 merged/fechados) e apenas 1 issue ativa. O projeto está inmerso em uma grande reestruturação arquitetural do subsistema host-ingress (manifest-driven channels), com 4 "moves" sendo coordenados simultaneamente. A plataforma apresenta maturidade em CI/CD, com experimentos em curso para otimização do tempo de compilação, e segue expandindo funcionalidades do produto Reborn (learning system, triggers, Telegram ingress, skill extraction). A única issue aberta refere-se a uma falha pontual de E2E nightly, indicando estabilidade geral do main branch.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O repositório não publicou novas versões neste período. O último ciclo de releases não foi detalhado nos dados fornecidos.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7 total)

| # | Título | Escopo | Destaque |
|---|--------|--------|----------|
| [#2548](https://github.com/nearai/ironclaw/pull/2548) | Workspace entities com membership e cross-workspace sharing | db, agent, channel, workspace | **Feature completa** — Adds tabelas `users`, `api_tokens`, `workspaces`, `workspace_members` com nullable `workspace_id` scoping em conversas e arquivos. Rebase completo do #1734. |
| [#5104](https://github.com/nearai/ironclaw/pull/5104) | Typed auth verifier + transport discriminator (Move 2) | host-ingress | **Net −54 linhas** (154 ins / 195 del). Fail-close no auth verifier e remoção de residual defect do Move 1. |
| [#5105](https://github.com/nearai/ironclaw/pull/5105) | Fix three stale provider/OAuth guard tests | safety, auth | Corrigidos 3 testes quebrados em `main` — eram assertions de comportamento pré-mudança, não regressões de guard. |
| [#4829](https://github.com/nearai/ironclaw/pull/4829) | Retire dormant reborn-integration workflow | ci | Remove workflow obsoleto que só disparava na branch `reborn-integration` (dormant). Jobs duplicados migrados para nightly deep CI. |
| [#5086](https://github.com/nearai/ironclaw/pull/5086) | Experimental full-suite gate (nextest + mold + sccache) | ci | **Spike não-bloqueante** medindo viabilidade de CI completo no merge gate com tempos de compilação otimizados. |
| [#5093](https://github.com/nearai/ironclaw/issues/5093) | Slack ingress projection (referenciado) | reborn, extensions | Projeção de Slack host-ingress a partir de estado de extensão (prévia a #5100 para Telegram). |

**Avanços significativos:**
- **Workspace entities** finalmente lands após rebasing, habilitando multi-tenancy e compartilhamento entre workspaces.
- **Arquitetura manifest-driven channels** progride com os Moves 2 e possivelmente 3, aproximando-se da conclusão do keystone da iniciativa.
- **Limpeza de CI** remove workflows obsoletos e consolida testes reborn no nightly deep CI.

---

## 4. Temas Quentes da Comunidade

### PRs em Destaque por Atividade/Significância

| # | Título | Autor | Tamanho | Análise |
|---|--------|-------|---------|---------|
| [#5103](https://github.com/nearai/ironclaw/pull/5103) | Manifest-projected ingress policy + typed auth + transport discriminator | serrrfirat | XL | **Keystone da iniciativa manifest-driven-channels** — política e auth se tornam dados tipados do manifest em vez de seletores Rust-side. |
| [#4937](https://github.com/nearai/ironclaw/pull/4937) | Reborn Learning System WS-1 — memory learning semantics | serrrfirat | XL | Primeiro PR do stack "learn from mistakes" — Learning como documento de memória com frontmatter (confidence, category, created_at). Design documentado em `docs/plans/`. |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | Skill extraction & self-evolution | krishna-505 | XL | **Hermes-parity** — background job que destila transcripts em `SKILL.md` reutilizáveis com safety scan. |
| [#5081](https://github.com/nearai/ironclaw/pull/5081) | Hosted single-tenant Postgres profile | serrrfirat | XL | Perfil que mantém surface local-dev com PostgreSQL durável — caminho para preview hospedado. |
| [#5065](https://github://github.com/nearai/ironclaw/pull/5065) | One-shot scheduled triggers | henrypark133 | XL | `TriggerSchedule::Once{at}` como variante first-class ao lado de Cron. |
| [#4989](https://github.com/nearai/ironclaw/pull/4989) | Persist Engine V2 LLM usage | think-in-universe | XL | Agregação de uso V2 via CostGuard + `llm_calls`, propagação de metadata para attribution correta. |
| [#5087](https://github.com/nearai/ironclaw/pull/5087) | Google OAuth token proactive refresh | henrypark133 | XL | Refresh de tokens antes do expiry (1h access, 1 semana refresh). Resolve #5071. |

**Análise:** O contributor principal `serrrfirat` domina a atividade com 8+ PRs significativos, coordenando múltiplas iniciativas arquiteturais paralelas. A comunidade mostra forte interesse em **durabilidade de estado** (Postgres, LLM usage tracking) e **extensibilidade** (skill extraction, external tools). Novas features de scheduled triggers e OAuth refresh indicam maturação de funcionalidades enterprise.

---

## 5. Bugs e Estabilidade

### Issue Aberta

| # | Severidade | Título | Status | Detalhes |
|---|-----------|--------|--------|----------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Medium** | Nightly E2E scheduled run failed | **OPEN** | Reportado por github-actions[bot] em 2026-06-20. Falha no job "Full E2E / E2E (features)". Commit `ac1e16f97f3a9c671c111b1faaf77d5e3478b1bb`. Tentativa 1. |

**Análise:** A falha de E2E nightly não é crítica (não afeta merge gate), mas merece atenção pois pode indicar regressão em features testadas apenas no nightly. O padrão de failures similares (Issue #4105, #4104?) deveria ser investigado para identificar root cause recorrente.

**Stabilidade geral:** 7 PRs fechados hoje demonstram disciplina de review e merge. A ausência de issues de usuários sugere operação estável no main.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Feature | Escopo | Potencial Impacto |
|---|---------|--------|-------------------|
| [#4937](https://github.com/nearai/ironclaw/pull/4937) | Learning System WS-1 | reborn, memory | **Alto** — Paradigma de "aprender com erros" via documentos de memória com confidence scoring |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | Skill extraction & self-evolution | reborn, agent | **Alto** — Auto-instalação de skills distilladas com safety scan |
| [#5100](https://github.com/nearai/ironclaw/pull/5100) | Telegram ingress projection | reborn, extensions | **Médio** — Espelhando trabalho prévio de Slack para Telegram |
| [#5099](https://github.com/nearai/ironclaw/pull/5099) | External-tool Responses round-trip (Phase 4b-4f) | reborn, tool/builtin | **Médio** — Completa fluxo OpenAI-compatible para tools externos |
| [#5065](https://github.com/nearai/ironclaw/pull/5065) | One-shot scheduled triggers | triggers | **Médio** — Flexibilidade de scheduling além de Cron |
| [#5087](https://github.com/nearai/ironclaw/pull/5087) | Google OAuth proactive refresh | reborn, auth | **Médio** — Elimina necessidade de reconnect manual |

### Sinais de Roadmap

- **Manifest-driven channels:** Work em andamento (#5103, #5106, #5102) indica foco em arquitetura de ingress policy tipada.
- **Multi-tenancy:** Workspace entities (#2548) e Postgres profiles (#5081) sugerem preparação para deployment hosted.
- **Engine V2 parity:** #4989 busca paridade de usage tracking com V1.

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback de usuários diretos nos dados disponíveis** (issues de usuário, discussions, ou comentários de PR revelando uso).

**Sinais inferidos de comportamento de PRs:**

| Dor/Solicitação | evidência |
|-----------------|-----------|
| Slack reconnect loop problemático | #4777 (WebUI state persistence) |
| Necessidade de tokens Google OAuth refresh | #5087 (fecha #5071) |
| Gestão de workspaces isolados | #2548 (membership + cross-workspace sharing) |
| CI lento afetando produtividade | #5086 (spike de otimização) |
| Features de scheduled triggers limitadas | #5065 (one-shot vs recurring) |

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Estagnadas

| # | Tipo | Título | Idade | Prioridade | Observação |
|---|------|--------|-------|-----------|-----------|
| [#2548](https://github.com/nearai/ironclaw/pull/2548) | PR | Workspace entities | ~2 meses (desde 2026-04-16) | **Alta** | Finalmente merged hoje — estava em review por período prolongado |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | PR | Dependabot: bump actions (16 updates) | ~1 mês (desde 2026-05-24) | **Média** | Dependabot PR aberta há 27 dias — deveria ser mergeada ou fechada |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Issue | Nightly E2E failed | ~1 mês (desde 2026-05-27) | **Média** | Aberta há 25 dias, ainda sem resolution — possível root cause recorrente |

**Recomendação:** 
- O PR de dependências (#4002) está aberto há ~27 dias e acumular 16 updates — risco de conflicts crescentes. Priorizar merge ou close com justificativa.
- A issue de E2E (#4108) precisa de triagem para determinar se é flaky test ou regressão genuína.

---

## Resumo Executivo

| Indicador | Status |
|-----------|--------|
| **Atividade** | ✅ Muito alta (23 PRs, 1 issue em 24h) |
| **Estabilidade** | 🟡谨慎 (1 falha E2E nightly, 7 PRs merged com disciplina de review) |
| **Lançamentos** | 🔴 Nenhum (pipeline de features em progresso) |
| **Dívida técnica** | 🟡 Dependabot PR estagnada (#4002), E2E failures recorrentes |
| **Roadmap indicators** | ✅ Manifest-driven channels, learning system, multi-tenancy em curso |

**Recomendação geral:** O projeto está em fase de refatoração arquitetural significativa com bom volume de merges. Atenção necessária à falha E2E nightly e ao PR de dependências do Dependabot. A direção técnica (manifest-driven, learning system, workspace multi-tenancy) indica amadurecimento do produto para casos de uso enterprise.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório de Projeto — CoPaw (QwenPaw)
## Data: 2026-06-21 | Fonte: GitHub Activity (últimas 24h)

---

## 1. Panorama do Dia

O projeto CoPaw (repositório agentscope-ai/QwenPaw) apresenta **alta atividade** nas últimas 24 horas, com 15 eventos no total (6 issues + 9 PRs). O volume de PRs abertos (8) supera significativamente as mergeadas (1), indicando um período de **intensa contribuição**, particularmente de novos contribuidores (pelo menos 5 PRs sinalizados como "first-time-contributor"). Nenhuma release foi publicada, sugerindo que a equipe está em ciclo de revisão e consolidação de contribuições antes do próximo lançamento. A taxa de fechamento de issues (50%) reflete uma comunidade ativa em triagem e resolução de problemas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões. Recomenda-se monitorar o repositório para announcements em breve, dado o volume de PRs em revisão.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| # | Título | Impacto |
|---|--------|---------|
| [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) | group langfuse observations by agent loop | **Melhoria de observabilidade** — Agrupou um ciclo completo ReAct do agente em uma única trace Langfuse, eliminando traces desconectadas por chamada LLM individual. Facilita debugging e análise de conversas. |

### PRs Abertos em Revisão

| # | Título | Prioridade |
|---|--------|------------|
| [#5349](https://github.com/agentscope-ai/QwenPaw/pull/5349) | migrate QwenPaw memory runtime to ReMe4 | **Alta** — Migração da stack de memória para o framework ReMe4 (reme[core]==0.4.0.0), mantendo retrocompatibilidade via ReMeLightMemoryManager |
| [#5348](https://github.com/agentscope-ai/QwenPaw/pull/5348) | freeze env_context date per session | **Alta** — Resolve invalidação de KV Cache quando a data do sistema muda (ex: meia-noite), congelando a data por sessão |
| [#5347](https://github.com/agentscope-ai/QwenPaw/pull/5347) | fix(crons): drop invalid jobs.json entries | **Média** — Limpeza de migrations para jobs.json corrompidos na inicialização do workspace |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | scroll context manager | **Alta** — Nova estratégia de gerenciamento de contexto com history durável e recall REPL |
| [#5341](https://github.com/agentscope-ai/QwenPaw/pull/5341) | constrain file tools to workspace | **Média** — Security fix: restringe ferramentas de arquivo ao workspace configurado |
| [#5339](https://github.com/agentscope-ai/QwenPaw/pull/5339) | fix providers: use plain string content | **Média** — Corrige teste de conexão Zhipu AI que falhava por formato incorreto de content |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | Bug: Assistant message count mismatch with reasoning blocks | 6 | **Bug (resolvido)** |
| [#5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) | Cron scheduled tasks interrupt main chat | 2 | **Question (resolvido)** |

### Análise

A issue **#5208** (6 comentários) foi o tema mais discutido. Tratava-se de um bug onde modelos que retornam blocos de reasoning com tipo `"reasoning"` (em vez de `"thinking"`) causavam *warning* de contagem de mensagens incorreta. A resolução indica que o projeto está refinando compatibilidade com diferentes provedores de modelo.

A issue **#5250** (2 comentários) expôs um problema UX significativo: tarefas cron injetavam mensagens no chat ativo, interrompendo o agente. Este é um padrão de uso crescente (agentes com tarefas agendadas), demandando atenção arquitetural.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Potenciais Regressões)

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #5345 | **Alta** | Custom OpenAI-compatible providers (OMLX) don't support function calling | [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| #5344 | **Alta** | /api/console/chat returns 200 but silently drops messages when agent is busy | [Issue #5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) |
| #5342 | **Média** | feat: hard cap on tool result size (defense-in-depth) | [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) |

### Análise por Severidade

**🔴 Alta:**
- **#5345** — Providers customizados OpenAI-compatíveis não suportam function calling, afetando integrações como OMLX. Impacta ecossistema de extensibilidade do projeto.
- **#5344** — API retorna 200 mas descarta mensagens silenciosamente quando agente está ocupado. Bug sutil que causa perda de dados sem feedback ao usuário.

**🟡 Média:**
- **#5342** — Proposta de feature para limitar tamanho de resultados de tools no layer de execução, como defesa em profundidade contra explosão de contexto. Demonstra maturidade do time em antecipar edge cases (o hook `post_acting` pode ser pulado em erros 502).

### Bugs Resolvidos (24h)

| # | Título | Link |
|---|--------|------|
| #5208 | Assistant message count mismatch with reasoning blocks | [Issue #5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) |
| #5250 | Cron scheduled tasks interrupt main chat | [Issue #5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) |
| #5343 | Duplicate de #5344 (fechado) | [Issue #5343](https://github.com/agentscope-ai/QwenPaw/issues/5343) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Link |
|---|--------|------|
| #5342 | hard cap on tool result size at execution layer | [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) |

### PRs com Features em Desenvolvimento

| # | Título | Link |
|---|--------|------|
| #5349 | Migrate memory runtime to ReMe4 | [PR #5349](https://github.com/agentscope-ai/QwenPaw/pull/5349) |
| #5348 | Freeze env_context date per session (KV cache preservation) | [PR #5348](https://github.com/agentscope-ai/QwenPaw/pull/5348) |
| #5346 | Tool run in Docker | [PR #5346](https://github.com/agentscope-ai/QwenPaw/pull/5346) |
| #5321 | Scroll context manager — durable history + recall REPL | [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) |

### Sinais de Roadmap Inferidos

1. **Modernização de memória** — Migração para ReMe4 indica evolução da arquitetura de memória.
2. **Melhoria de contexto** — Scroll context manager demonstra foco em eficiência de tokens e history.
3. **Isolamento de ambiente** — Feature de Docker para tool run sugere interesse em sandboxing.
4. **Performance de cache** — Congelamento de env_context por sessão otimiza KV cache.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Impacto |
|-----|-------|---------|
| **Interrupção de tarefas cron** | [#5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) | Usuários com automações baseadas em cron têm experiência degradada |
| **Perda silenciosa de mensagens** | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | Confiança na API comprometida — 200 OK sem entrega |
| **Function calling em providers customizados** | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Limita ecossistema de plugins e integrações de terceiros |
| **Explosão de contexto em failures** | [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | Usuários avançados com múltiplas tool calls enfrentam degradação |

### Cenários de Uso Emergentes

- **Agentes com tarefas agendadas** (cron + chat) — Padrão crescente, expõe lacunas de isolamento.
- **Providers customizados** — Ecossistema de extensão ativo, demanda API mais flexível.
- **LLMs com reasoning blocks** — Diversidade de modelos OpenAI-compatíveis com outputs não padronizados.

### Tendência de Satisfação

**Neutro com viés positivo** — Bugs críticos (#5208, #5250) foram resolvidos rapidamente, mas novos bugs de alta severidade (#5344, #5345) indicam necessidade de hardening em área de providers e API.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou com Baixo Engajamento

| # | Título | Status | Idade | Link |
|---|--------|--------|-------|------|
| — | Nenhuma issue antiga sem resposta identificada | — | — | — |

*Não há issues antigas sem resposta nos dados de 24h. O tempo médio de resposta parece adequado.*

### PRs Abandonados ou Estagnados

| # | Título | Status | Link |
|---|--------|--------|------|
| — | Nenhum PR estagnado identificado | — | — |

### Recomendações de Priorização

1. **Revisar #5345** (Alta) — Provedores customizados são parte do ecossistema, bug afeta adopters.
2. **Investigar #5344** (Alta) — Silently dropping messages é problema de confiabilidade crítico.
3. **Acelerar #5349** (Alta) — Migração ReMe4 pode impactar dependentes se não comunicada.
4. **Revisar #5342** (Média) — Feature request mostra antecipação de problema real; avaliar para milestone.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues fechadas / abertas (24h) | 3/3 | 🟢 Equilibrado |
| PRs abertos / fechados (24h) | 8/1 | 🟡 Pipeline intenso |
| Novos contribuidores | 5+ | 🟢 Comunidade ativa |
| Bugs de alta severidade abertos | 2 | 🔴 Requer atenção |
| Releases (24h) | 0 | 🟡 Ciclo de release não ativo |

---

*Relatório gerado em 2026-06-21 com base em dados do GitHub do projeto CoPaw (agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data de Referência: 2026-06-21

---

## 1. Panorama do Dia

ZeroClaw mantém uma atividade intensa em 21 de junho de 2026, com **50 issues e 50 PRs atualizados nas últimas 24h** — indicando alta movimentação tanto na fila de demandas quanto na esteira de desenvolvimento. A taxa de fechamento de issues (4/50) permanece baixa frente à abertura, e nenhuma release foi publicada hoje, sugerindo que a equipe está em ciclo de integração para as próximas versões (v0.8.2, v0.8.3 e v0.9.0). Dos PRs recentes, 2 já foram merged/fechados, incluindo uma correção parcial de segurança crítica. A comunidade demonstra particular interesse em observabilidade, memory management e features de voz em tempo real, com múltiplas RFCs em discussão ativa.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto mantém sua cadência de versões em preparação:
- **v0.8.2** — em fase de estabilização (skills platform + WASM plugin program)
- **v0.8.3** — milestone indexado com trackers ativos para runtime, canais, provedores e observabilidade
- **v0.9.0** — planejamento de breaking changes em auth, security e gateway

---

## 3. Progresso do Projeto

### PRs Recentes Merged/Fechados

| # | PR | Autor | Impacto |
|---|-----|--------|---------|
| [#7243](https://github.com/zeroclaw-labs/zeroclaw/pull/7243) | `fix(gateway): implement proper token revocation on rotation and device deletion` | chenyunbo411 | **Correção parcial de vulnerabilidade crítica #6984** — implementa revogação de tokens e persistência de estado nos endpoints HTTP de gerenciamento de dispositivos |
| [#7358](https://github.com/zeroclaw-labs/zeroclaw/pull/7358) | `Update 'quickstart' to 'onboard'` | devqcf | Documentação: correção de nomenclatura na página inicial |

### PRs Abertos de Destaque (em revisão ativa)

| # | PR | Tamanho | Área | Destaque |
|---|-----|--------|------|----------|
| [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) | `feat(memory): add dream mode for periodic memory consolidation` | XL | Memory | Engine de 5 fases para consolidação de memória; execução local por padrão |
| [#8068](https://github.com/zeroclaw-labs/zeroclaw/pull/8068) | `feat(channels): restore Matrix room management tool` | XL | Channels | Restauração de criação de salas e convites no Matrix |
| [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) | `feat(infra): multi-database session backends (Postgres, Oracle, MySQL, Db2)` | XL | Infra | Backends de sessão para frotas multi-agente |
| [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) | `fix(runtime): wire mcp_bundles into agent loop — enforce per-agent MCP server scoping` | S | Security | **Escopamento obrigatório de servidores MCP por agente** — fecha gap de segurança |
| [#8074](https://github.com/zeroclaw-labs/zeroclaw/pull/8074) | `fix(gateway): cascade provider and channel alias deletes` | M | Gateway | Consistencia na exclusão de aliases |
| [#8051](https://github.com/zeroclaw-labs/zeroclaw/pull/8051) | `fix(channels): suppress bound channels when their owning agent is disabled` | M | Channels | **Correção**: agentes desabilitados mantinham canais ativos (especialmente Discord) |
| [#8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) | `feat(observability): opt-in LLM request payload capture` | M | Observability | Captura de payload de requisições LLM (opt-in, default off) |
| [#8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) | `feat(observability): correlate logs by trace_id + record per-call cost_usd` | S | Observability | Correlação de logs por trace_id; registro de custo por chamada |
| [#8023](https://github.com/zeroclaw-labs/zeroclaw/pull/8023) | `fix(mcp): stop leaking stdio child processes per heartbeat tick` | S | MCP | **Memory leak crítico** em processos filhos MCP por tick de heartbeat |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Categoria | Insight |
|---|--------|-------------|-----------|---------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **Dream Mode — Periodic Memory Consolidation & Reflective Learning** | 18 | Enhancement | Demanda por ciclos de reflexão automática durante períodos de ociosidade; 5 fases propostas |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | **zeroclaw does not know it can add cron** | 13 | Bug | Falha de descoberta: usuário não sabe que `zeroclaw cron` existe — impacto UX |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | **RFC: Work Lanes, Board Automation, and Label Cleanup** | 11 | RFC/Governance | Proposta de automação de routing de trabalho — status: Accepted/rollout in progress |
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | **Too much emphasis on memory** | 6 | Bug (P1) | System prompt prioriza memórias demais; especialmente problemático em cron jobs |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | **RFC: Opt-in LSP support for ZeroCode coding workflows** | 4 | RFC | Integração com Language Servers para reduzir alucinação em código |
| [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) | **Request for docker images to include zeroclaw docs** | 4 | Enhancement | Agentes não respondem perguntas sobre uso/config — solução: embedar docs |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | **Realtime voice-host channel** | 1 | Enhancement | Canal WS para host de voz em tempo real (ASR/TTS/LLM no host, áudio no satélite) |
| [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) | **Voice satellite (ESP32/smartphone/PWA)** | 1 | Enhancement | Device físico com mic + speaker + botões para assistente de voz |

**Análise:** A comunidade demonstra forte interesse em (1) **memory intelligence** — tanto o bug de sobrecarga de memória quanto o Dream Mode attracted 24 comentários combinados; (2) **descoberta de capabilities** — zeroclaw não expõe bem o que pode fazer (`zeroclaw cron`); e (3) **extensibilidade física** — voice satellites representam direção de hardware.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### S0 — Risco de perda de dados / segurança

| # | Título | Prioridade | Status | Detalhes |
|---|--------|------------|--------|----------|
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content` não retornado em loops de tool-call com Xiaomi thinking mode | P2 | Blocked | Modelos mimo-v2.5 não propagam reasoning_content entre turns |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Providers error — All providers/models failed (Qwen) | P3 | Blocked | Erro HTTP 405 em API custom da Dashscope |

#### S1 — Workflow bloqueado

| # | Título | Prioridade | Status | Detalhes |
|---|--------|------------|--------|----------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | **Default 32k context budget excedido na iteração 1** | P1 | In Progress | Prompt de sistema + definições de tools excedem budget em ~3.3x — preempção constante |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | **Cron jobs podem ser disparados repetidamente** | P1 | Accepted | Job `daily-news-brief` executado 20x em burst de 3 minutos |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | Streaming error: HTTP decode failure causa hang | P2 | Blocked | ZeroClaw congela por minutos após erro de decode; GPU em 50% |

#### S2 — Comportamento degradado

| # | Título | Prioridade | Status | Detalhes |
|---|--------|------------|--------|----------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | **Demasiada ênfase em memória** | P1 | Accepted | System prompt dá peso excessivo a memórias vs. prompt atual |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow causa alucinação/drift de tópico | P2 | Blocked | Especialmente com provider kimi + canal Discord |

#### Bugs Recentemente Fechados

| # | Título | Impacto |
|---|--------|---------|
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | Loop infinito de tool-call no Termux/Android | Corrigido |
| [#5883](https://github.com/zeroclaw-labs/zeroclaw/issues/5883) | `zeroclaw service start` falha no macOS | Corrigido |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | QQ message commands ausentes na documentação | Corrigido |

**Análise de Estabilidade:** O projeto apresenta **3 bugs P1 abertos**, sendo o mais crítico o #5808 (context budget excedido na iteração 1), que afeta todo usuário com configuração default. O bug #6037 (cron duplicado) representa risco operacional real. A taxa de fechamento de bugs recentes (3/3 listados) é positiva.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alto Engajamento ou Risco

| # | Título | Área | Status | Próxima Versão? |
|---|--------|------|--------|-----------------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **Dream Mode — Memory Consolidation** | Memory | Accepted/In Progress | v0.8.2+ |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | **RFC: Structured Observability Enhancement** | Observability | RFC/Accepted | v0.8.3 |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | **RFC: Opt-in LSP support** | Tool/Coding | RFC/Accepted | TBD |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | **Configurable channel reply-intent precheck** | Channel | Accepted | v0.8.3 |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | **Slack: hydrate thread context from conversations.replies** | Channel:Slack | Accepted | v0.8.3 |
| [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) | **Streaming card messages for QQ/DingTalk/WeChat/Feishu** | Channel | Accepted | TBD |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | **Realtime voice-host channel (WS)** | Channel | Accepted | TBD |
| [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) | **Voice satellite (ESP32/PWA)** | Channel/Hardware | Accepted | TBD |
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) | **Add ZeroClaw logo to Agent Skills client list** | Docs | In Progress | v0.8.3 |
| [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) | **Docker images com docs embedded** | Docker/Docs | Accepted | TBD |

### Sinais de Roadmap (Trackers de Milestone)

| Tracker | Versão | Itens em Aberto | Foco |
|---------|--------|-----------------|------|
| [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852) | v0.8.2 | Skills platform | Registries, skill resolution, plugin-bundled skills |
| [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) | v0.8.2 | WASM plugin | Arquitetura de plugins, WIT/component-model |
| [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) | v0.8.3 | Runtime/Agent/Tools | Estabilidade de execução, cron, skills |
| [#8072](https://github.com/zeroclaw-labs/zeroclaw/issues/8072) | v0.8.3 | Channels/Providers/Config | Routing, serialização, comportamento |
| [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) | v0.8.3 | Observability/CI/Docs | Logging, testes, dependências |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 | **131 itens** | Auth, security hardening, gateway, A2

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*