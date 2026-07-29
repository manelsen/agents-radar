# Resumo diário do ecossistema de agentes de IA 2026-07-30

> Issues: 1 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-07-29 20:49 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-30

---

## 1. Panorama do Dia

NullClaw mantém atividade moderada com 3 eventos registrados nas últimas 24h. O projeto apresenta um cenário de **estabilidade funcional**, com PRs de melhorias em progresso e uma issue de bug aberta há mais de dois meses. A comunidade permanece engajada, especialmente em funcionalidades de memória e configuração. Não há lançamentos recentes, indicando um período de maturidade do código antes de próxima release.

---

## 2. Lançamentos

**Nenhuma nova release nas últimas 24h.**

O projeto não registrou versões tagged no período analisado. A ausência de releases pode indicar que a equipe está em fase de consolidação de features ou preparando um release bundle para breve.

> *追踪 Releases:* [github.com/nullclaw/nullclaw/releases](https://github.com/nullclaw/nullclaw/releases)

---

## 3. Progresso do Projeto

### PR Merged/Closed (1)

| #961 | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes |
|------|-----------------------------------------------------------------------------|
| **Status** | ✅ Closed (2026-07-29) |
| **Autor** | valonmulolli |
| **Resumo** | Adiciona três novos parâmetros de configuração no bloco `memory`: `auto_recall` (bool), `recall_limit` (u32), `max_context_bytes` para controlar comportamento de injeção de memórias. |
| **Impacto** | Permite desabilitar enriquecimento de memória, limitar entradas por request e controlar limite de contexto — melhoria significativa para fine-tuning de performance em diferentes hardware. |

### PR Aberto (1)

| #979 | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes |
|------|-----------------------------------------------------------------------------|
| **Status** | 🔓 Open (2026-07-29) |
| **Autor** | valonmulolli |
| **Resumo** | Mesma feature do #961 — possivelmente uma reabertura ou PR paralelo para revisão. |
| **Ação necessária** | Triagem e review pela maintainer team. |

> *Ver PR:* [github.com/nullclaw/nullclaw/pull/979](https://github.com/nullclaw/nullclaw/pull/979)

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento (1)

| #915 | [bug] Problem with scheduler unauthorized |
|------|-------------------------------------------|
| **Status** | 🔴 Open desde 2026-05-15 |
| **Última atualização** | 2026-07-29 |
| **Reações** | 👍 1 |
| **Comentários** | 3 |
| **Autor** | scabros |
| **Resumo** | Usuário reportando falha de autenticação no scheduler ao integrar NullClaw com Ollama externo (qwen3.6:27b) em rede local com Ubuntu/RTX 3090. LLM funciona, tool calling funciona, mas scheduler falha. |

**Análise da demanda:** Este é o único item com interações da comunidade (comentários + reações), indicando que o bug afeta ao menos um usuário real em cenário de produção. A falha de "scheduler unauthorized" pode indicar problema de configuração de headers/auth entre NullClaw e host Ollama remoto.

> *Ver Issue:* [github.com/nullclaw/nullclaw/issues/915](https://github.com/nullclaw/nullclaw/issues/915)

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Média-Alta** | #915 | Scheduler retorna "unauthorized" com Ollama externo em rede local. Afeta integrações remote host. Sem workaround documentado. |

**Tabela de severidade:**

| Severidade | Critério | Count |
|------------|----------|-------|
| 🔴 Crítica | Downtime, data loss, security breach | 0 |
| 🟠 Alta | Funcionalidade core quebrada | 0 |
| 🟡 Média | Feature quebrada, work-around existe | 1 |
| 🟢 Baixa | Inconveniência, UX | 0 |

**Veredicto de estabilidade:** ✅ Projeto estável com 1 bug médio em investigação. Nenhum crash ou regressão nova reportada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em desenvolvimento

| #979 | Memory configuration improvements |
|-------|-------------------------------------|
| **Tipo** | Feature request |
| **Status** | Em revisão |
| **Sinais de roadmap** | Controle granular de memória é demanda recorrente; indica foco em **performance tuning** e **customização por ambiente** (edge vs cloud). |

**Sinais de tendência:**
- Flexibilidade de configuração (bool flags, limites numéricos) sugere maturização do projeto para用例 enterprise
- Foco em `memory` indica que otimização de contexto e custo de tokens é prioridade

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Contexto | Evidência |
|-----|----------|-----------|
| **Falha de autenticação em integrações remote** | NullClaw + Ollama externo em rede local | Issue #915 (scabros) |
| **Necessidade de controle de memória** | Deploys com hardware limitado ou上下文 janela restrita | PR #961 (valonmulolli) |

### Cenários de uso observados
- **Local deployment**: Ubuntu + GPU dedicada (RTX 3090) + Ollama
- **Integração multi-plataforma**: Telegram chat interface mencionada
- **Customização de memória**: Busca por controle programático

### Satisfação geral
Os dados sugerem **satisfação parcial** — LLM e tool calling funcionam, mas integrações específicas (scheduler remote) ainda apresentam fricção. A comunidade está ativamente propondo melhorias (PRs de memória).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/progresso prolongado

| #915 | Bug | Scheduler unauthorized | Aberto desde **2026-05-15** (75+ dias) | 3 comentários | Prioridade: ⭐⭐⭐ |
|------|-----|------------------------|----------------------------------------|---------------|-------------------|

**Análise:** Issue #915 está aberta há >2 meses com apenas 1 reação e 3 comentários. A baixa métrica de reações pode indicar:
1. Bug afeta poucos usuários (cenário específico de remote host)
2. Falta de reprodução por maintainers
3. Necessidade de mais informações do autor

**Recomendação:** Priorizar triagem e request de reproduction steps do autor para desbloquear.

> *Ver Issue:* [github.com/nullclaw/nullclaw/issues/915](https://github.com/nullclaw/nullclaw/issues/915)

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertos | 1 |
| PRs merged/fechados | 1 |
| Novas releases | 0 |
| Bugs críticos | 0 |
| Features em revisão | 1 |

**Índice de Saúde do Projeto:** 🟢 Verde (atividade moderada, sem regressões, bug em aberto em investigação)

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-30. Para mais detalhes, visite [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-30
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta um **cenário bipolar**: enquanto NullClaw e PicoClaw mantêm atividade moderada e foco em estabilidade pontual, os demais projetos operam em alta intensidade com dezenas de issues e PRs simultâneos. A tendência dominante é a **maturação de funcionalidades core** — memória, delegação e recuperação de sessão — com IronClaw, ZeroClaw e Hermes Agent investindo pesado em refatorações arquiteturais profundas. A segurança surge como tema transversal, com vulnerabilidades e regressões sendo tratadas proativamente na maioria dos projetos. Observa-se também um movimento claro em direção à **extensibilidade via plugins, skills e marketplaces**, além de expansão multi-canal (Telegram, Discord, WhatsApp, DingTalk) e cross-platform (desktop nativo, mobile, voice).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged | Releases | Bugs Críticos | Saúde |
|---------|:-----------:|:--------------:|:----------:|:--------:|:------------:|:-----:|
| **NullClaw** | 1 | 2 | 1 | 0 | 0 | 🟢 Estável |
| **NanoBot** | 5 | 33 | 18 | 0 | 0 (P1 corregidos) | 🟢 Bom |
| **Hermes Agent** | 50 | 100 | 9 | 0 | **3 P1** (OOM, credenciais, desktop) | 🔴 Crítico |
| **PicoClaw** | 1 | 2 | 0 | 0 | 1 (alta severidade) | 🟡 Atenção |
| **IronClaw** | 50 | 50 | 16 | 0 | **3** (Gemini, skills, config) | 🟡 Progresso c/ blockers |
| **CoPaw** | 25 | 50 | 15 | 0 | **7** (persistência, MCP, install) | 🔴 Correção intensiva |
| **ZeroClaw** | 50 | 50 | 1 | 0 | **2 P1** (CLI, npm audit) | 🟡 Alto fluxo |

**Observação:** Nenhum projeto publicou releases formais nas últimas 24h, indicando que todos estão em ciclos de consolidação pré-release.

---

## 3. Posicionamento do Projeto Principal

### Análise por Volume e Complexidade

| Categoria | Líder | Característica |
|-----------|-------|----------------|
| **Maior volume absoluto** | Hermes Agent, IronClaw, ZeroClaw | ~100 items/24h cada |
| **Maior maturidade operacional** | NanoBot | 18 PRs merged + 5 P1 resolvidos |
| **Maior foco em estabilidade** | NullClaw | 1 bug médio, zero críticos |
| **Maior dívida técnica** | CoPaw | 7 bugs críticos simultâneos |
| **Maior ambição arquitetural** | IronClaw | Epic Reborn com 10+ workstreams |

### Análise SWOT dos Projetos Ativos

**NanoBot** destaca-se pela **eficiência operacional** — alto volume de PRs mergeados com bugs P1 efetivamente resolvidos. O marketplace de skills recém-lançado (#5116) posiciona o projeto como referência em extensibilidade.

**Hermes Agent** apresenta o **maior risco de estabilidade** com 3 P1s críticos simultâneos (OOM crash-loop, regressão de segurança em credential pool, desktop renderer). A atividade de 100 items/24h sugere recursos abundantes, mas a qualidade está comprometida.

**IronClaw** mantém o **roadmap mais estruturado** com epics claros e blockers identificados. A transição Reborn é ambiciosa, mas os 4 epics estagnados há 60-90+ dias (#3020, #3029) representam risco de arrastamento.

**ZeroClaw** demonstra **maturidade conceitual** com 12+ RFCs em discussão, indicando comunidade que pensa arquitetura antes de implementar. However, apenas 1 PR mergeado em 24h com 49 abertos sugere gargalo de review.

**CoPaw** está em **modo de correção intensiva** — 7 bugs críticos representam a versão 2.0.1 em estado de debug ativo. As featuresambiciosas (automação desktop nativa #6424, checkpoints #6269) competem com a necessidade de estabilização.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Memória e Persistência de Sessão

Três projetos enfrentam desafios similares de memory management:

| Projeto | Problema Específico | Issue |
|---------|---------------------|-------|
| **NullClaw** | Necessidade de controle granular (recall_limit, max_context_bytes) | #961/#979 |
| **NanoBot** | Perda de mídia em consolidação de sessão | #5157 (resolvido) |
| **CoPaw** | Skill tags somem após restart; histórico perdido em crash | #6537, #6542 |
| **ZeroClaw** | Separação histórico vs. memória de longo prazo (RFC #9048) | #9048 |

### 4.2 Recuperação e Resiliência

| Projeto | Feature | Issue |
|---------|---------|-------|
| **IronClaw** | libSQL writer contention recovery | #6863 |
| **IronClaw** | Checkpointless pre-model recovery | #6841 |
| **CoPaw** | Cancellation-safe lifecycle hooks | #6527 |
| **CoPaw** | Workspace checkpoint management | #6269 |
| **ZeroClaw** | Context compaction ancorado à janela do modelo | #9535 |

### 4.3 Segurança — Tema Transversal

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|:----------:|
| **Hermes Agent** | Credential pool self-disable após refresh | 🔴 P1 |
| **Hermes Agent** | OAuth token persiste após cancelamento | 🔴 P1 |
| **Hermes Agent** | distribution_owned sem constraint | 🔴 P1 |
| **CoPaw** | DevTools exposto por default (corrigido) | 🔴 P1 |
| **ZeroClaw** | npm audit: 3 vulnerabilidades high/critical | 🔴 P1 |
| **IronClaw** | effective_non_secret_config fails open | 🟠 P2 |

### 4.4 Integração Multi-Canal

| Canal | Projetos | Status |
|-------|----------|--------|
| **Telegram** | Todos (exceto PicoClaw) | Em desenvolvimento ativo |
| **Discord** | PicoClaw, ZeroClaw, CoPaw | Estável |
| **WhatsApp** | Hermes Agent, ZeroClaw | Com issues abertas |
| **DingTalk** | PicoClaw | PR #3283 stale |
| **Matrix/Signal** | ZeroClaw | Funcional |
| **Nextcloud Talk** | ZeroClaw | Bug de API em correção |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Filosofia

| Projeto | Abordagem | Diferencial |
|---------|-----------|-------------|
| **NullClaw** | Minimalista, embedded-friendly | Foco em hardware limitado, configuração leve |
| **NanoBot** | Modular com skills marketplace | Extensibilidade via marketplace |
| **Hermes Agent** | Desktop-first, voice-native | Desktop renderer, voice gateway |
| **PicoClaw** | Multi-agente com dispatch rules | Roteamento avançado entre agentes |
| **IronClaw** | Reborn architecture, WASM plugins | Composabilidade via runtime plugins |
| **CoPaw** | Checkpoint/workspace-centric | Recoverability via Git-store shadow |
| **ZeroClaw** | RFC-driven, trait-based | Abstrações rigorosas (KeySource, A2A) |

### 5.2 Público-Alvo Inferido

| Projeto | Perfil Primário | Evidência |
|---------|-----------------|-----------|
| **NullClaw** | Desenvolvedores embedded/edge | recall_limit, max_context_bytes, hardware config |
| **NanoBot** | Usuários não-técnicos | Marketplace de skills, WebUI polida |
| **Hermes Agent** | Produtividade desktop | Desktop renderer, voice integration |
| **PicoClaw** | Operadores multi-agente | Dispatch rules, multi-canal (Discord/Telegram) |
| **IronClaw** | Empresas self-hosted | Reborn gates, TLS termination, secret redaction |
| **CoPaw** | Usuários avançados / devs | Coding mode, workspace checkpoints, MCP |
| **ZeroClaw** | Arquitetos de sistemas | RFCs, traits abstratas, OTel observabilidade |

### 5.3 Estratégia de Crescimento

| Projeto | Vetor de Crescimento | Indicador |
|---------|---------------------|-----------|
| **NanoBot** | Marketplace de skills | #5116 recém-mergeado |
| **CoPaw** | Automação desktop nativa | #6424 em revisão avançada |
| **Hermes Agent** | Voice-first + mobile shell | #52673 (mobile), #27040 (voice_server) |
| **IronClaw** | WASM runtime plugins | #8850 RFC em discussão |
| **ZeroClaw** | Interoperabilidade OpenAI/A2A | #8486, #9106 |
| **PicoClaw** | Mercados asiáticos | Suporte DingTalk |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged/24h | Razão Aberto/Merged | Velocidade |
|---------|:--------------:|:-------------------:|:----------:|
| **NanoBot** | 18 | 15/18 = 0.83 | ⚡ Muito alta |
| **IronClaw** | 16 | 34/16 = 2.1 | ⚡ Alta |
| **CoPaw** | 15 | 35/15 = 2.3 | ⚡ Alta |
| **Hermes Agent** | 9 | 41/9 = 4.5 | ⚠️ Desequilibrada |
| **NullClaw** | 1 | 1/1 = 1.0 | 🐢 Baixa |
| **PicoClaw** | 0 | 2/0 = ∞ | 🐢 Estagnada |
| **ZeroClaw** | 1 | 49/1 = 49.0 | ⚠️ Gargalo severo |

**Análise:** NanoBot demonstra a relação aberta/merged mais saudável (0.83), indicando review eficiente. ZeroClaw apresenta gargalo crítico com 49 PRs abertas e apenas 1 mergeada — risco de stale.

### 6.2 Engajamento Técnico

| Projeto | RFCs/Issues Arquiteturais | Comentários Médios/Issue | Maturidade |
|---------|:-------------------------:|:------------------------:|:----------:|
| **ZeroClaw** | 12+ RFCs | 6-11 | 🔮 Conceitual alta |
| **IronClaw** | 10+ epics | 44 (EPIC #2987) | 📋 Estruturada |
| **Hermes Agent** | 4+ PRs de delegação | 3-4 | ⚙️ Funcional |
| **NanoBot** | 1 (multi-agente) | 6 (#5000) | 🟢 Emergente |
| **CoPaw** | 0 explícitos | 2-3 | 🟡 Em consolidação |
| **NullClaw** | 0 | 1 | 🟢 Estável |
| **PicoClaw** | 0 | 0 | 🐢 Estagnada |

### 6.3 Riscos de Staleness

| Projeto | Items >60d sem atualização | Blocker Crítico? |
|---------|:--------------------------:|:----------------:|
| **IronClaw** | 4 (incluindo #3020, #3029) | ⚠️ Sim — bloqueia Reborn |
| **ZeroClaw** | 1 tracker (#8692) | ⚠️ Sim — decisão em RFCs |
| **Hermes Agent** | 2 PRs (#26859, #27040) | ⚠️ ~75 dias em review |
| **CoPaw** | 0 | ✅ Não |
| **NanoBot** | 0 | ✅ Não |
| **PicoClaw** | PR #3283 (~8d stale) | ⚠️ Atenção |
| **NullClaw** | 0 | ✅ Não |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

#### A. Voice-First e Telefonia
- **Hermes Agent:** Voice server gateway genérico (#27040), integração Pipecat/Livekit
- **ZeroClaw:** Gemini Live Realtime speech-to-speech (#8780)
- **Hermes Agent:** Parakeet STT como provider nativo (#74354)
- **Signal/Voice:** Suporte a chamadas de voz em ZeroClaw (#6724)

**Interpretação:** O mercado está evoluindo de chat-only para interações por voz em tempo real, com projetos investindo em gateways telephony-ready.

#### B. Extensibilidade via Skills e Plugins
- **NanoBot:** Marketplace de skills recém-lançado
- **CoPaw:** App Center redesign com 3 tabs
- **IronClaw:** WASM runtime plugins (RFC #8850)
- **ZeroClaw:** ACP (Agent Communication Protocol) com marketplace

**Interpretação:** Ecossistema move-se para modelos de distribuição tipo "app store", com protocolos abertos (ACP, A2A) como diferenciadores.

#### C. Recuperação e Persistência
- **CoPaw:** Workspace checkpoints (#6269), cancellation-safe hooks (#6527)
- **IronClaw:** Durable state-graph planning (#5034), checkpointless recovery (#6841)
- **ZeroClaw:** Context compaction inteligente (#9535)

**Interpretação:** Tarefas longas e agentes stateful são a norma — recoverability é feature, não bugfix.

#### D. Segurança como Requisito First-Class
- **Hermes Agent:** 3+ P1s de segurança abertas simultaneamente
- **CoPaw:** DevTools exposto por default (corrigido em #6500)
- **ZeroClaw:** HMAC receipts para detecção de alucinações (#4830), prompt injection hardening (#9508)
- **IronClaw:** TLS termination seam, secret redaction

**Interpretação:** Com adoção enterprise, segurança está passando de "nice-to-have" para gate de release.

#### E. Multi-Agente e Colaboração
- **NanoBot:** Proposal de multi-agente collaboration (#5000)
- **IronClaw:** Sealed delegation profiles (#73917)
- **ZeroClaw:** Mixture-of-Agents provider (#8568)
- **CoPaw:** Background tasks com notice_after_complete (#6475)

**Interpretação:** Paradigma shift de agente único para ecossistema de agentes especializados com comunicação estruturada.

#### F. Desktop Nativo e Cross-Platform
- **CoPaw:** Automação GUI via Tauri + accessibility (#6424)
- **Hermes Agent:** Desktop renderer (OOM crash-loop atual)
- **Hermes Agent:** Mobile shell (Expo/React Native #52673)
- **ZeroClaw:** Localização de prompts em 6+ canais

**Interpretação:** Chat/web é ponto de partida; desktop apps nativos e mobile são a fronteira de expansão.

### 7.2 Mapa de Posicionamento Estratégico

```
                    Alta Maturidade
                         │
    NanoBot ─────────────┼──────────── IronClaw
    (skills mkt)         │          (reborn arch)
                         │
Baixa Maturidade ────────┼───────────────── Alta Maturidade
                         │
    NullClaw ────────────┼──────────── ZeroClaw
    (embedded)           │          (RFCs, traits)
                         │
                    Baixa Maturidade

         <────── Complexidade Técnica ──────>
```

| Quadrante | Projetos | Estratégia Sugerida |
|-----------|----------|---------------------|
| **Explorers (alta maturação, alta complexidade)** | IronClaw, ZeroClaw | Foco em blockers, decisão de архитектура |
| **Builders (baixa maturação, alta complexidade)** | Hermes Agent, CoPaw | Estabilização + feature velocity |
| **Shippers (alta maturação, baixa complexidade)** | NanoBot | Manter ritmo, expandir ecosystem |
| **Specialists (baixa maturação, baixa complexidade)** | NullClaw, PicoClaw | Focar niche, evitar scope creep |

---

## 8. Recomendações

### Para Desenvolvedores

1. **Seeking stability:** Priorizar NullClaw ou NanoBot para deployments de produção — menos bugs críticos

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório de Projeto — NanoBot
## Data: 2026-07-30 | Branch Principal: main

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** nas últimas 24 horas, com 33 PRs atualizados e 5 issues relevantes. Não houve lançamentos formais, mas diversas correções críticas foram mergeadas, especialmente nos módulos de memória, WebUI e compatibilidade com Windows PowerShell. A comunidade demonstra foco em estabilidade (regressões P1) e em melhorias de robustez para cenários de produção, como polling do Telegram e gerenciamento de sessões. O cenário geral indica um projeto maduro em fase de polimento, com poucas features novas pendentes de merge.

---

## 2. Lançamentos

### 🚫 Nenhuma release nas últimas 24h

O projeto não publicou novas versões no período. O último registro de atividade concentra-se em PRs pendentes de merge e correções em desenvolvimento.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados (5 destacadas)

| # | Título | Área | Prioridade | Impacto |
|---|--------|------|------------|---------|
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | feat(webui): add skill marketplaces and management | WebUI | P1 | Adiciona marketplace de skills com descoberta, instalação e histórico assíncrono |
| [#5157](https://github.com/HKUDS/nanobot/pull/5157) | fix(memory): expose media references to session consolidation | Memória | P1 | Corrige preservação de mídia durante consolidação de sessões (resolves #5118) |
| [#5158](https://github.com/HKUDS/nanobot/pull/5158) | refactor: enforce BasedPyright strict type checking | CI/CD | P1 | Torna 273 módulos Python strict-clean com base em análise BasedPyright |
| [#5160](https://github.com/HKUDS/nanobot/pull/5160) | fix(shell): preserve UTF-8 native input on PowerShell 5 | Shell | P2 | Configura `$OutputEncoding` para UTF-8 no Windows PowerShell 5.1 |
| [#5162](https://github.com/HKUDS/nanobot/pull/5162) | feat(webui): track optimistic message delivery status | WebUI | P2 | Implementa tracking de estados `sending → accepted → failed` |

**Destaque:** O merge de [#5116](https://github.com/HKUDS/nanobot/pull/5116) representa um marco de extensibilidade, enquanto [#5157](https://github.com/HKUDS/nanobot/pull/5157) resolve um bug crítico que causava perda irrecoverável de arquivos de mídia.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Status | Link |
|---|--------|-------------|--------|------|
| #5000 | Proposal: evolve the current subagent system toward multi-agent collaboration | 6 | 🔵 Aberto | [Issue](https://github.com/HKUDS/nanobot/issues/5000) |
| #5118 | Bug: Session consolidation drops uploaded media paths | 2 | ✅ Fechado | [Issue](https://github.com/HKUDS/nanobot/issues/5118) |

**Análise:** A issue [#5000](https://github.com/HKUDS/nanobot/issues/5000) propõe uma evolução significativa do sistema de subagentes, passando de delegação de tarefas para colaboração multiagente verdadeira, com identidades persistentes e estado compartilhado. Os 6 comentários indicam debate ativo sobre design. Paralelamente, o PR [#5034](https://github.com/HKUDS/nanobot/pull/5034) (`feat(goal): add durable state-graph planning and recovery`) está alinhado com essa visão, sugerindo um roadmap de planejamento estruturado para objetivos de longo prazo.

### PRs com Atividade Relevante

| # | Título | Área | Status | Link |
|---|--------|------|--------|------|
| #5156 | fix(telegram): recover from silently stalled polling | Telegram | 🔵 Aberto | [PR](https://github.com/HKUDS/nanobot/pull/5156) |
| #5034 | feat(goal): add durable state-graph planning and recovery | Agent | 🔵 Aberto | [PR](https://github.com/HKUDS/nanobot/pull/5034) |
| #4919 | feat(telegram): support custom Bot API base URL and extra headers | Telegram | 🔵 Aberto | [PR](https://github.com/HKUDS/nanobot/pull/4919) |

---

## 5. Bugs e Estabilidade

### Regressões e Bugs Reportados

#### 🔴 Prioridade P1 (Crítico)

| # | Título | Módulo | Status | Link |
|---|--------|--------|--------|------|
| #5163 | Manual cron runs lose completion state when WebUI polling reloads store | Cron/WebUI | 🔵 Aberto | [Issue](https://github.com/HKUDS/nanobot/issues/5163) |
| — | Race condition entre `CronService.run_job()` e APIs de leitura de store | Backend | — | [PR #5151](https://github.com/HKUDS/nanobot/pull/5151) |
| — | Memory leaks em `AgentLoop._session_locks` | Agent | Correção em [#5151](https://github.com/HKUDS/nanobot/pull/5151) | [PR](https://github.com/HKUDS/nanobot/pull/5151) |
| — | Bound overflow em buffered session output | Exec | Correção em [#5150](https://github.com/HKUDS/nanobot/pull/5150) | [PR](https://github.com/HKUDS/nanobot/pull/5150) |

#### 🟡 Prioridade P2

| # | Título | Módulo | Link |
|---|--------|--------|------|
| #5165 | WebUI: false microphone silence errors | WebUI | [PR](https://github.com/HKUDS/nanobot/pull/5165) |
| #5146 | WebUI: malformed token-usage day keys causando falha em `/api/settings` | WebUI | [PR](https://github.com/HKUDS/nanobot/pull/5146) |
| #4812 | Memory: KeyError on malformed messages missing `role` key | Memory | [PR](https://github.com/HKUDS/nanobot/pull/4812) |

#### 🟢 Resolvidos (Mergeados)

| # | Título | Link |
|---|--------|------|
| #5159 | Windows PowerShell 5.1 ExecTool corrompia input UTF-8 nativo | [PR #5160](https://github.com/HKUDS/nanobot/pull/5160) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Propostas em Destaque

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #5000 | Evolução do sistema de subagentes para colaboração multiagente | Core/Agent | [Issue](https://github.com/HKUDS/nanobot/issues/5000) |
| #5034 | Durable state-graph planning and recovery para `/goal` | Agent | [PR](https://github.com/HKUDS/nanobot/pull/5034) |
| #4919 | Suporte a custom Bot API base URL no Telegram | Channel | [PR](https://github.com/HKUDS/nanobot/pull/4919) |

### Indicadores de Prioridade Futura

- **Extensibilidade:** Marketplace de skills (#5116) recém-mergeado sugere investimento em ecossistema.
- **Robustez Multi-channel:** Suporte a gateways customizados para Telegram (#4919).
- **Planejamento de Longo Prazo:** Feature de state-graph (#5034) busca resolver perda de contexto em tarefas longas.
- **Refatoração de Tipos:** BasedPyright strict (#5158) indica maturidade de codebase.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Issues do Usuário)

| Cenário | Problema | Severidade |
|---------|----------|------------|
| **Upload de mídias no Telegram** | Caminhos de arquivos descartados após consolidação de sessão, arquivos irrecuperáveis após arquivamento | Crítica |
| **Automação manual (Cron)** | Jobs executados com sucesso são marcados como `Failed` na UI | Alta |
| **Windows PowerShell 5.1** | Caracteres não-ASCII corrompidos na entrada de pipeline nativo | Alta |
| **Polling Telegram** | Bot para de receber mensagens após instabilidade de rede, sem logs de erro | Alta |

### Padrões de Uso Observados

- **Uso corporativo/enterprise:** Demandas por gateways customizados (#4919) e self-hosted Bot API servers.
- **Uso colaborativo multiagente:** Usuário propõe evolução para sistema multiagente com identidades persistentes (#5000).
- **Manutenção de código:** Reforço em type safety (#5158) e narrowing de supressões Pyright (#5161).

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Bloqueados

| # | Título | Idade | Motivo de Atenção |
|---|--------|-------|-------------------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): custom Bot API base URL | 16 dias | Feature request importante com conflitos |
| [#4812](https://github.com/HKUDS/nanobot/pull/4812) | fix(memory): use .get() for role key | 24 dias | Bug defensivo, sem comentários |
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) | refactor: narrow file-level Pyright suppressions | 1 dia | Alinhamento com PR #5158 |

### Recomendações de Triagem

1. **Revisar PR #4812** — Correção simples de KeyError que pode evitar crashes em produção.
2. **Priorizar review do #4919** — Feature de enterprise utility com 16 dias sem movimento.
3. **Acompanhar #5000** — Proposta arquitetural significativa que pode definir direção do projeto.

---

## 📈 Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| PRs atualizados | 33 |
| PRs abertos | 15 |
| PRs mergeados/fechados | 18 |
| Issues atualizadas | 5 |
| Issues abertas | 3 |
| Issues fechadas | 2 |
| Releases | 0 |
| Contributors ativos | ~10+ |

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-07-30.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-30

## 1. Panorama do dia

O Hermes Agent manteve alta atividade em 29 de julho de 2026, com 100 itens atualizados no período de 24 horas (50 issues + 50 PRs). Das issues, 44 permanecem abertas e 6 foram fechadas; nos PRs, 41 estão abertos e 9 foram merged ou fechados. Não houve lançamentos de novas versões. A atividade concentra-se em correções de bugs (especialmente em `comp/tools`, `comp/desktop` e `comp/gateway`) e em PRs de features relacionadas a delegation, memory e voice. A plataforma Windows continua gerando issues significativas, e a estabilidade do desktop app (crashes OOM, problemas de session) exige atenção imediata.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

A ausência de releases novas contrasta com o alto volume de PRs abertos, sugerindo que a equipe pode estar em ciclo de revisão e preparação para uma próxima versão. As últimas versões mencionadas nos issues são `v0.18.2` e `v0.19.0`.

---

## 3. Progresso do Projeto

### PRs importantes fechados/merged hoje

| # | Título | Componente | Impacto |
|---|--------|------------|---------|
| [#74363](https://github.com/NousResearch/hermes-agent/pull/74363) | fix(wake): keep desktop ownership and select input devices | desktop, tts | Corrige wake-word no Windows Desktop |
| [#74308](https://github.com/NousResearch/hermes-agent/pull/74308) | auth: Codex OAuth cancel não para worker; pode escrever token no perfil errado | cli, auth | **Segurança** — OAuth cancelado ainda persiste credencial |
| [#69372](https://github.com/NousResearch/hermes-agent/issues/69372) | Windows: TestStartupTimeoutPhaseDetail's Event.wait patch nunca entra — 30s reais compete com pytest-timeout | tools, test | Teste Windows com race condition |
| [#57905](https://github.com/NousResearch/hermes-agent/issues/57905) | computer_use ignora cua-driver 0.7.0 data.windows, causando descoberta vazia | tools, windows | Correção de window discovery no Windows |

### PRs em revisão com alto potencial

- [#74383](https://github.com/NousResearch/hermes-agent/pull/74383) — **Test suite pruning**: reduz de 46.820 para 19.757 funções (−58%), cortando wall time pela metade (583s → 294s)
- [#73188](https://github.com/NousResearch/hermes-agent/pull/73188) — Fence task completion no Kanban para evitar race conditions em reclaim
- [#73026](https://github.com/NousResearch/hermes-agent/pull/73026) — Redact secrets em respostas de LLM cron jobs antes de delivery
- [#66730](https://github.com/NousResearch/hermes-agent/pull/66730) — HSP/1 personal skill sync client (M1 client) para Collective Wisdom

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários (🔥 = alta atividade)

| # | Título | Comentários | Componente | Destaque |
|---|--------|-------------|------------|----------|
| [#64117](https://github.com/NousResearch/hermes-agent/issues/64117) | CUA-driver session breaks after killing Chrome on Windows | 4 | tools | Reprodução clara; `computer_use` para após kill do Chrome |
| [#69170](https://github.com/NousResearch/hermes-agent/issues/69170) | computer_use: attempt actual call quando capability check falha | 4 | tools | Discussão sobre fallback vs. blocking prematuro |
| [#69180](https://github.com/NousResearch/hermes-agent/issues/69180) | **Desktop renderer OOM crash-loop** | 3 | desktop | **P1** — app inutilizável após ~7 min de launch |
| [#65297](https://github.com/NousResearch/hermes-agent/issues/65297) | Desktop image paste broken — session ID drift | 3 | desktop, sessions | Imagen paste no Desktop com session ID drift |
| [#74339](https://github.com/NousResearch/hermes-agent/issues/74339) | **Credential-pool write-through to global root self-disables após primeiro refresh** | 1 | agent, auth | **P1** — regressão de #48415 / #43589 |
| [#74373](https://github.com/NousResearch/hermes-agent/issues/74373) | **`distribution_owned` does not constrain profile distribution** | 0 | cli, profiles | **P1** — payload de distribuição sem constraint |

**Análise**: A comunidade está intensamente preocupada com **estabilidade do Desktop** (OOM crash-loop, session drift) e **segurança de credenciais** (OAuth token persistence, credential pool regression). As issues de `computer_use` com `cua-driver` no Windows geram讨论 técnica substancial.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (atenciozação imediata)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#69180](https://github.com/NousResearch/hermes-agent/issues/69180) | Desktop renderer OOM crash-loop | desktop | Virtualização de transcript causa busy-loop → OOM em ~7 min → crash-loop |
| [#74339](https://github.com/NousResearch/hermes-agent/issues/74339) | Credential-pool write-through self-disables após 1º refresh | agent, auth | Regressão de segurança — pool de credenciais se desabilita permanentemente após primeiro refresh |
| [#74373](https://github.com/NousResearch/hermes-agent/issues/74373) | `distribution_owned` não limita payload de distribuição | cli, profiles | Distribuição pode escrever em perfis não autorizados |

### 🟠 P2 — Importantes

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#74380](https://github.com/NousResearch/hermes-agent/issues/74380) | WhatsApp /queue perde quoted-reply context | gateway, whatsapp | Contexto de reply perdido antes de chegar ao agent |
| [#74374](https://github.com/NousResearch/hermes-agent/issues/74374) | Esc não interrompe turn no Desktop (Stop button funciona) | desktop | Keybinding inoperante |
| [#74345](https://github.com/NousResearch/hermes-agent/issues/74345) | `hermes meet install` faz upgrade incondicional de websockets | plugins | Quebra pin `websockets==15.0.1` do projeto |
| [#74349](https://github.com/NousResearch/hermes-agent/issues/74349) | Gateway credential-resolution bypassa fallback notice | gateway, billing | Usuário não é notificado quando provider falha e usa fallback |
| [#74344](https://github.com/NousResearch/hermes-agent/issues/74344) | `api_mode` vaza entre provider switches | cli, routing | Modo de API persiste incorretamente ao trocar provider |
| [#74352](https://github.com/NousResearch/hermes-agent/issues/74352) | Pagination sem bounds em routes de session/message | api | `?limit=-1` ignora limite em SQLite |

### 🟡 P3 e plataformas específicas

- **macOS TCC**: [#74331](https://github.com/NousResearch/hermes-agent/issues/74331) — Permissões revoked em cada reinstall (app ad-hoc signed)
- **Windows**: [#60808](https://github.com/NousResearch/hermes-agent/issues/60808) — Username com espaços quebra comando `cua-driver`; [#63938](https://github.com/NousResearch/hermes-agent/issues/63938) — `computer_use` unusable under WSL
- **macOS accessibility**: [#44763](https://github.com/NousResearch/hermes-agent/issues/44763) — AX/SOM bounds sempre zero quebrando spatial grounding
- **Docker/remote**: [#70056](https://github.com/NousResearch/hermes-agent/issues/70056) — Hermes desktop remote update loop

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em PR aberto (alta prioridade estratégica)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#27040](https://github.com/NousResearch/hermes-agent/pull/27040) | Generic `voice_server` gateway platform | gateway, tts | WebSocket protocol para voice runtime externo (telephony, WebRTC via Pipecat/Livekit) |
| [#52673](https://github.com/NousResearch/hermes-agent/pull/52673) | Native mobile shell (Expo/React Native) | desktop | App iOS/Android com Hermes renderer shell |
| [#73917](https://github.com/NousResearch/hermes-agent/pull/73917) | Sealed delegation execution profiles | agent, delegate | Perfis nomeados com contratos restritos para Scout/Reviewer |
| [#74376](https://github.com/NousResearch/hermes-agent/pull/74376) | Bridge Desktop approvals to Telegram | desktop, telegram | Mirror de approvals peligrosos para Telegram |
| [#74378](https://github.com/NousResearch/hermes-agent/pull/74378) | Same-turn background result injection for delegation | agent, delegate | Inject results sem polling ou history rewrite |
| [#74375](https://github.com/NousResearch/hermes-agent/pull/74375) | Unified subagent model picker | cli, delegate, desktop | Shared resolver com herança e reset |

### Novas features em issue (requerem triagem)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| [#74359](https://github.com/NousResearch/hermes-agent/issues/74359) | Built-in disable mechanism para profiles | cli, profiles | Desabilitar profile sem deletar |
| [#74354](https://github.com/NousResearch/hermes-agent/issues/74354) | Add Parakeet as first-class local STT provider | tts | NVIDIA Parakeet como provider nativo (ao lado de faster-whisper) |
| [#74351](https://github.com/NousResearch/hermes-agent/issues/74351) | Speech emotion recognition tags in voice transcripts | tts, agent | Preservar emoção da prosódia para o LLM |
| [#69961](https://github.com/NousResearch/hermes-agent/issues/69961) | Trusted sender UID envelope para shared gateway sessions | gateway | Identidade autenticada em sessions compartilhadas |

**Sinais de roadmap**: Foco واضح em **voice/mobile-first experience** (voice_server gateway, mobile shell, Parakeet STT), **delegation sophistication** (sealed profiles, same-turn injection), e **multi-platform expansion** (Telegram bridge, WhatsApp, Discord).

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

1. **Instabilidade do Desktop (macOS/Windows)**
   - OOM crash-loop torna o app inutilizável ([#69180](https://github.com/NousResearch/hermes-agent/issues/69180))
   - Session ID drift quebra funcionalidades básicas como image paste ([#65297](https://github.com/NousResearch/hermes-agent/issues/65297))
   - TCC permissions reiniciadas em cada reinstall no macOS ([#74331](https://github.com/NousResearch/hermes-agent/issues/74331))

2. **computer_use no Windows — experiência quebrada**
   - CUA-driver session falha após matar Chrome ([#64117](https://github.com/NousResearch/hermes-agent/issues/64117))
   - Window discovery retorna vazio mesmo com janelas visíveis ([#57905](https://github.com/NousResearch/hermes-agent/issues/57905))
   - WSL2 não consegue executar subprocess Windows paths ([#63938](https://github.com/NousResearch/hermes-agent/issues/63938))

3. **Segurança de credenciais**
   - OAuth cancelado ainda persiste tokens ([#74308](https://github.com/NousResearch/hermes-agent/issues/74308))
   - Credential pool se desabilita após primeiro refresh ([#74339](https://github.com/NousResearch/hermes-agent/issues/74339))
   - Secrets em output de LLM cron não são redacted ([#73026](https://github.com/NousResearch/hermes-agent/pull/73026))

4. **UX de features avançadas**
   - Kanban block respawna tasks com processos residuais ([#74121](https://github.com/NousResearch/hermes-agent/issues/74121))
   - Esc keybinding não funciona para interromper turn ([#74374](https://github.com/NousResearch/hermes-agent/issues/74374))
   - Docs de Kanban Codex Lane referência skill removido ([#71856](https://github.com/NousResearch/hermes-agent/issues/71856))

### Satisfação inferred

- **Alta demanda por voice features**: múltiplos PRs e issues sobre TTS, STT, e voice_server gateway indicam que voice interaction é prioridade para a comunidade.
- **Atividade em delegation**: 4+ PRs/issues focados em delegation sugerem que workflows de subagentes estão amadurecendo.
- **Testes**: [#74383](https://github.com/NousResearch/hermes-agent/pull/74383) (58% de redução) demonstra que a base de testes está sendo otimizada, sugerindo maturidade operacional.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais de 15 dias (requerem triagem)

| # | Título | Criado | Componente | Observação |
|---|--------|--------|------------|------------|
| [#44763](https://github.com/NousResearch/hermes-agent/issues/44763) | AX/SOM bounds always zero on macOS | 2026-06-12 | tools | `needs-repro` pendente; quebra spatial grounding |
| [#61362](https://github.com/NousResearch/hermes-agent/issues/61362) | Phantom "branch" in sidebar for non-git folders | 2026-07-09 | tui, desktop | UX bug simples mas irritante |
| [#65297](https://github.com/NousResearch/hermes-agent/issues/65297) | Session ID drift em image paste | 2026-07-16 | desktop, sessions | `needs-repro` pendente |

### Issues com `needs-decision` — aguardam decisão de arquitetura

| # | Título | Componente | Decisão pendente |
|---|--------|------------|------------------|
| [#69170](https://github.com/NousResearch/hermes-agent/issues/69170) | Attempt actual call quando capability check falha | tools | Modificar comportamento de blocking vs. fallback? |
| [#69961](https://github.com/NousResearch/hermes-agent/issues/69961) | Trusted sender UID envelope | gateway | Como identificar sender em sessions compartilhadas? |
| [#67783](https://github.com/NousResearch/hermes-agent/issues/67783) | Align foreground/typed-browser escalation com cua-driver 0.9.0 | agent, tools | Alinhamento de metadata e ladder de escalation |

### PRs antigos ainda em revisão

| # | Título | Criado | Componente | Duração |
|---|--------|--------|------------|---------|
| [#26859](https://github.com/NousResearch/hermes-agent/pull/26859) | Discord runtime status refresh | 2026-05-16 | gateway, discord | ~75 dias |
| [#27040](https://github.com/NousResearch/hermes-agent/pull/27040) | Generic voice_server gateway | 2026-05-16 | gateway, tts | ~75 dias |
| [#52673](https://github.com/NousResearch/hermes-agent/pull/52673) | Native mobile shell | 2026-06-25 | desktop | ~35 dias |

**Recomendação**: Priorizar review de [#26859](https://github.com/NousResearch/hermes-agent/pull/26859) e [#27040](https://github.com/NousResearch/hermes-agent/pull/27040) que estão abertos há ~75 dias. Corrigir OOM crash-loop ([#69180](https://github.com/NousResearch/hermes-agent/issues/69180)) e regression de credenciais ([#74339](https://github.com/NousResearch/hermes-agent/issues/74339)) antes do próximo release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-30

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada em 30 de julho de 2026, com 3 items atualizados nas últimas 24 horas (1 issue e 2 PRs). Não houve lançamentos de novas versões, e a atividade concentra-se em manutenção e suporte a canais. A issue mais recente aponta um bug crítico relacionado ao comando `/clear` e compressão automática de sessões em chats roteados via dispatch rules, sugerindo necessidade de atenção imediata da equipe de desenvolvimento.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

- Última versão estável: 0.3.1 (referenciada na issue #3301)
- Não há notas de migração ou breaking changes a报告ar neste período.

---

## 3. Progresso do Projeto

**Nenhuma PR mergeada ou fechada nas últimas 24 horas.**

As duas PRs abertas representam progresso potencial:

| PR | Título | Status | Prioridade |
|---|---|---|---|
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | fix(dingtalk): support picture/image message inbound | ABERTA (stale) | Média |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | chore: move installation scripts from docs repo to here | ABERTA | Baixa |

**Análise:**
- **PR #3283** está marcada como *stale*, indicando possíveis problemas de follow-up. Adiciona suporte a mensagens de imagem no canal DingTalk com degradação graciosa — uma melhoria decompatibilidade relevante para usuários chineses.
- **PR #1951** é uma tarefa de reorganização de estrutura (doc:installation scripts → repo principal), sem impacto funcional direto.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações registradas nas últimas 24h.**

A issue #3301 foi criada em 2026-07-29 e ainda não recebeu interação da comunidade (0 comentários, 0 👍). A falta de engajamento pode indicar:
- Bug muito específico (afeta apenas configurações com dispatch rules avançadas)
- Usuários ainda não identificaram o problema em seus ambientes

---

## 5. Bugs e Estabilidade

### 🔴 Bug Crítico Reportado

**Issue [#3301](https://github.com/sipeed/picoclaw/issues/3301)** — `[BUG] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules`

| Campo | Detalhe |
|---|---|
| **Severidade** | Alta (afeta funcionalidade core de sessões) |
| **Ambiente** | PicoClaw 0.3.1, Raspberry PI, Canais Discord/Telegram |
| **Modelos** | DeepSeek via OpenCode Go |
| **Reprodução** | Require configuração de dispatch rules roteando chats para agente não-padrão |
| **Impacto** | Limpezamanual de histórico de conversas impossível + crescimento ilimitado de estado |

**Recomendação:** Priorizar análise e correção antes do próximo release.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

A PR #3283 (suporte a imagens DingTalk) e a issue #3301 (comportamento de sessões) podem informar o roadmap:
- Melhoria na abstração de dispatch rules
- Suporte multi-canal mais robusto para canais asiáticos (DingTalk)
- Recursos de gerenciamento de sessões

---

## 7. Resumo de Feedback dos Usuários

**Feedback direto:** Nenhum comentário ou reação registrado.

**Sinais inferidos dos dados:**
- **Dores identificadas:** O bug de `/clear` + compressão automática indica que usuários avançados (que usam dispatch rules para múltiplos agentes) enfrentam fricção operacional significativa.
- **Cenário de uso:** PicoClaw em produção em Raspberry PI com integração Discord/Telegram + modelos DeepSeek — configuração relativamente complexa, sugerindo base de usuários técnicos.
- **Satisfação:** Sem indicadores positivos ou negativos claros; aissue #3301 representaum ponto de dor não resolvido.

---

## 8. Backlog que Merece Atenção

### ⚠️ PR Stale com Potencial Impacto

| Item | Idade | Status | Ação Recomendada |
|---|---|---|---|
| PR #3283 (DingTalk image support) | ~8 dias em stale | ABERTA | Revisar, testar ou fechar com justificativa |

**Por que值得关注:** Suporte a mensagens de imagem é recurso esperado em canais de mensageria modernos. A degradação graciosa implementada sugere cuidado com compatibilidade.

### 📌 Issue Sem Resolução

| Item | Idade | Status | Ação Recomendada |
|---|---|---|---|
| Issue #3301 | < 24h | ABERTA (0 comentários) | Atribuir a mantenedor, solicitar informações adicionais se necessário |

---

## Métricas Resumidas (2026-07-30)

| Indicador | Valor | Tendência |
|---|---|---|
| Issues ativas (24h) | 1 | Neutra |
| PRs abertas (24h) | 2 | Neutra |
| Releases (24h) | 0 | Sem atividade |
| Comentários/Reações | 0 | Baixo engajamento |
| Bugs críticos | 1 | Requer atenção |

---

**Saúde Geral:** ⚠️ **Moderada** — Bug crítico em aberto semassignee. Recomenda-se triagem imediata da issue #3301 pela equipe core.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data de referência:** 2026-07-30  
**Fonte:** github.com/nearai/ironclaw

---

## 1. Panorama do Dia

O ecossistema IronClaw apresenta **alta atividade** em 2026-07-30, com 50 issues e 50 PRs atualizados nas últimas 24h, dos quais 35 issues e 16 PRs foram fechados. O projeto continua focado na transição para a arquitetura **Reborn**, com múltiplos blockers de cutover sendo resolvidos ativamente. A atividade recente evidencia um esforço coordenado em estabilidade (libSQL writer contention, model error recovery) e segurança (TLS termination seam, secret redaction). Não há releases formais pendentes, e a saúde geral indica progresso consistente em direção à maturidade da plataforma.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

> ⚠️ O último release documentado (#5598, 2026-07-03) trouxe mudanças de API em `ironclaw_common` (0.4.2 → 0.5.0 — breaking) e `ironclaw_skills` (0.3.0 → 0.4.0 — breaking). Consumidores devem revisar as notas de migração no PR.

---

## 3. Progresso do Projeto

### PRs重要merged/fechados

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#6863** | fix(libsql): serialize writers and recover transient contention | **Alta** — Resolve writer contention em deployments libSQL, compartilhando runtime unificado entre filesystem, triggers, event-log e turn-state | [PR #6863](https://github.com/nearai/ironclaw/pull/6863) |
| **#6841** | Fix checkpointless pre-model recovery | **Alta** — Feed capability recovery com observações estruturadas e re-drive automático para falhas transitórias antes do primeiro checkpoint | [PR #6841](https://github.com/nearai/ironclaw/pull/6841) |
| **#6846** | fix(llm): complete provider error recovery and fallback advancement | **Alta** — Normaliza erros HTTP/SDK em 8 famílias de adaptadores com taxonomia `LlmError` → `ModelErrorClass` | [PR #6846](https://github.com/nearai/ironclaw/pull/6846) |
| **#6825** | test(host-runtime): cross fault profiles with failure fates (WS6) | **Média** — Fecha workstream 6 do #6524, verificando retryability e idempotência através de runtime boundaries | [PR #6825](https://github.com/nearai/ironclaw/pull/6825) |
| **#6871** | bug fix: Release-gate libSQL writer contention recovery | **Média** — Fechado como complementar ao #6863, abordando ownership compartilhado do runtime | [Issue #6871](https://github.com/nearai/ironclaw/issues/6871) |

**Resumo do avanço:** O foco do dia foi **estabilidade operacional** — writer serialization em libSQL, recovery contracts de modelo e testes de fault profiles. A ausência de novos releases indica que o time está consolidando mudanças antes de um próximo tag.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tendência | Link |
|---|--------|-------------|-----------|------|
| **#2987** | [EPIC] Track Reborn architecture landing strategy | 44 | 🔴 Alta prioridade, em andamento | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| **#3031** | [EPIC] Reborn product surface migration | 7 | 🟡 Bloqueado por #3020 | [Issue #3031](https://github.com/nearai/ironclaw/issues/3031) |
| **#6786** | [QA] provider_id="gemini" 400s on every tool call | 3 | 🔴 Bug ativo, QA em curso | [Issue #6786](https://github.com/nearai/ironclaw/issues/6786) |
| **#6790** | Restart during pending Codex device authorization blocks WebUI | 2 | 🟡用户体验 degradado | [Issue #6790](https://github.com/nearai/ironclaw/issues/6790) |

**Análise:**
- A comunidade está **fortemente concentrada na transição Reborn**. O EPIC #2987 com 44 comentários indica debates substanciais sobre estratégia de landing e grouped PRs.
- Bugs de provider (Gemini) e WebUI são as dores operacionais mais recientes.
- Há demanda clara por **clareza em runtime presets, cancellation semantics e segurança de approval leases** — todas issues Reborn.

### PRs em destaque (comentários indefinidos, mas de alta atividade visual)

| # | Título | Status | Link |
|---|--------|--------|------|
| **#6831** | feat(reborn): standardized messaging framework | ABERTO | [PR #6831](https://github.com/nearai/ironclaw/pull/6831) |
| **#6830** | feat(webui): agent workspace redesign | ABERTO | [PR #6830](https://github.com/nearai/ironclaw/pull/6830) |
| **#6870** | refactor(architecture): extract IronHub client | ABERTO | [PR #6870](https://github.com/nearai/ironclaw/pull/6870) |

---

## 5. Bugs e Estabilidade

### Bugs abertos (prioridade clara)

| # | Severidade | Título | Impacto | Link |
|---|------------|--------|---------|------|
| **#6786** | 🔴 Alta | [QA] provider_id="gemini" 400s — builtin tool schemas ship empty "type" | Gemini tool-calling quebrado em produção local | [Issue #6786](https://github.com/nearai/ironclaw/issues/6786) |
| **#6790** | 🟡 Média | Restart during pending Codex device authorization blocks WebUI | Usuário fica sem acesso ao gateway durante recovery | [Issue #6790](https://github.com/nearai/ironclaw/issues/6790) |
| **#6875** | 🟡 Média | /model set `<name>` silently drops trailing arguments | Parsing bug no comando admin; trailing arg descartado silenciosamente | [Issue #6875](https://github.com/nearai/ironclaw/issues/6875) |
| **#6872** | 🟡 Média | channel_config effective_non_secret_config fails open | Falha aberta quando admin config não está wireado — segurança impactada | [Issue #6872](https://github.com/nearai/ironclaw/issues/6872) |
| **#6806** | 🟢 Baixa | Automations don't show in web chat | UX issue — usuário precisa navegar manualmente | [Issue #6806](https://github.com/nearai/ironclaw/issues/6806) |

### Bugs resolvidos recentemente

- **#6871** — libSQL writer contention recovery (complementar a #6863)
- **#5712** — tool_search leaking capability catalog under narrowed AllowSet (segurança corrigida)
- **#2887** — Auth Browser Consent Google bot detection no CI

**Tendencia:** Maioria dos bugs tem **escopo de segurança/regressão** (TOCTOU filesystem #6817, effective_non_secret_config #6872). O time está priorizando hardening antes do cutover Reborn.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento

| # | Área | Título | Sinais de roadmap |
|---|------|--------|-------------------|
| **#6831** | Reborn | Standardized messaging framework — 16 core ops + 13 reserved | 🔮 Host-owned canonical contracts para ops |
| **#6364** | Channels | Telegram/Slack attachments through restricted egress | 🔮 Suporte a arquivos em canais |
| **#6830** | WebUI | Agent workspace redesign com design system | 🔮 Consolidação visual da nova UI |
| **#6780** | Reborn-IronHub | Deep-link register/install + private manifest source | 🔮 Integração IronHub mais flexível |
| **#6740** | Security | W6 phase 1 — TLS termination seam | 🔮 Camada de rede mais robusta |
| **#6855** | Compaction | Secret redaction during context overflow | 🔮 Privacy-by-design em compaction |

### Epics estruturantes (Reborn)

| # | Escopo | Status | Link |
|---|--------|--------|------|
| **#2987** | Reborn architecture landing | Ativo (44 comments) | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| **#3031** | Product surface migration | Bloqueado por #3020 | [Issue #3031](https://github.com/nearai/ironclaw/issues/3031) |
| **#6487** | Critical User Journeys as Release Gates | Novo (2026-07-22) | [Issue #6487](https://github.com/nearai/ironclaw/issues/6487) |
| **#3773** | Clear and Enforced IronClaw Crate Boundaries | Em andamento | [Issue #3773](https://github.com/nearai/ironclaw/issues/3773) |

**Sinais de roadmap:**
- O Epic #6487 ("Critical User Journeys as Release Gates") indica que o time está evoluindo para **evidence-based releases** com coverage proporcional.
- Padrão WASM para ProductAdapters (#3572) sugere componente-isolado como direção de arquitetura.
- A ênfase em **runtime presets** (#3045) e **local developer profiles** (#3044) aponta para UX simplificada de onboarding.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Tool-calling Gemini quebrado** | #6786 — todas as chamadas retornam 400 por schema vazio | 🔴 Crítica |
| **WebUI indisponível pós-reinício** | #6790 — authorization em pending state bloqueia gateway | 🟡 Alta |
| **Automations invisíveis no chat** | #6806 — output não aparece automaticamente | 🟢 Baixa (UX) |
| **Comando /model dropando argumentos** | #6875 — silencioso, sem erro aparente | 🟡 Média |
| **Skills instaladas não funcionam** | PR #6745 — skill bodies nunca injetados, path resolução quebrado | 🔴 Crítica (benchmarks expuseram) |

### Satisfação potencial (sinais positivos)

- PRs de recovery (#6863, #6841, #6846) demonstram **atenção a estabilidade operacional**
- O redesign de WebUI (#6830) com design system indica **investimento em DX**
- Release gating epic (#6487) sugere **engajamento com qualidade de releases**

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (risco de staleness)

| # | Título | Days Silent | Prioridade | Link |
|---|--------|-------------|------------|------|
| **#3773** | Epic: Clear and Enforced IronClaw Crate Boundaries | Atualizado 2026-05-19 (~71d) | Alta | [Issue #3773](https://github.com/nearai/ironclaw/issues/3773) |
| **#3577** | Track v1 ports for legacy channels | Atualizado 2026-05-13 (~78d) | Média | [Issue #3577](https://github.com/nearai/ironclaw/issues/3577) |
| **#3169** | Design process-owned runtime handoff IDs | Atualizado 2026-05-01 (~90d) | Média | [Issue #3169](https://github.com/nearai/ironclaw/issues/3169) |
| **#3020** | Reborn compatibility gate blocker | Atualizado 2026-04-28 (~93d) | **🔴 Crítica** (bloqueia cutover) | [Issue #3020](https://github.com/nearai/ironclaw/issues/3020) |
| **#3029** | Reborn migration/compatibility bridges | Atualizado 2026-04-28 (~93d) | **🔴 Crítica** (bloqueia cutover) | [Issue #3029](https://github.com/nearai/ironclaw/issues/3029) |

### Ações recomendadas

1. **#3020 e #3029** são blockers de cutover Reborn com ~93 dias sem atualização — perluir **resolução urgente** ou formalização de roadmap alternativo.
2. **#3773** (crate boundaries) está estagnado há 71 dias e impacta arquitetura de longo prazo — perluir ownership explícito.
3. **#3577** (v1 channels porting) com 78 dias sem movimento pode indicar necessidade de repriorização ou decomposition.

---

## Métricas Resumidas (2026-07-30)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 15 open / 35 closed | ✅ Saudável (70% resolução) |
| PRs ativas (24h) | 34 open / 16 merged | ⚠️ Pipeline carregado |
| Bugs críticos abertos | 3 (#6786, #6875, #6745) | 🔴 Requer atenção |
| Epics Reborn em andamento | 10+ | ✅ Progresso consistente |
| Releases (24h) | 0 | — |
| Estagnação (>60d) | 4 issues críticas/altas | 🔴 Risco de drift |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-30. Para detalhes completos, consultar issues e PRs referenciadas.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-07-30  
**Baseado em dados GitHub das últimas 24h**

---

## 1. Panorama do Dia

O CoPaw apresenta **atividade intensa** em 30 de julho de 2026, com 25 issues e 50 PRs atualizados nas últimas 24h. A equipe mantém um ritmo robusto de desenvolvimento, com 15 PRs merged/fechados e 4 issues resolvidas. Não houve lançamentos de nova versão hoje. O projeto demonstra vigorosa saúde operacional, com múltiplas frentes de trabalho simultâneas — desde correções críticas de bugs (installer, MCP, CI) até funcionalidades ambiciosas como automação de desktop nativo e redesign do App Center. A inúmera quantidade de issues relacionadas a regressões e vazamentos de dados em UI/APIs sugere que a codebase está em fase de consolidação pós-evolução rápida, com dívida técnica sendo ativamente endereçada.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A ausência de novos lançamentos indica que a equipe pode estar em ciclo de revisão pré-release ou consolidando branches antes de um próximo tag. Isso é consistente com o alto volume de PRs ainda em revisão (35 abertos).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (15 total)

| PR | Título | Impacto |
|---|---|---|
| [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) | Background offload kills subprocess immediately | **Bug crítico** — timeout do LLM era ignorado, subprocesso morto instantaneamente |
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Session permanently blocked when shell exceeds deadline | **Regressão corrigida** — sessões ficavam permanentemente bloqueadas após hang |
| [#6496](https://github.com/agentscope-ai/QwenPaw/issues/6496) | Legacy plugins silently disabled on 2.0+ | **Compatibilidade restaurada** — plugins legados funcionando novamente |
| [#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482) | UI lag on console chat/agent switch | **UX** — redução de lentidão ao trocar entre chat e agent |
| [#6487](https://github.com/agentscope-ai/QwenPaw/pull/6487) | Restrict import-local source path (security) | **Segurança** — impede exfiltração de diretórios arbitrários |

### PRs Abertos em Estágio Avançado (ready-for-human-review, Under Review)

| PR | Título | Destaque |
|---|---|---|
| [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) | Creator checkpoints, home redesign, media recovery, export/import | Funcionalidade completa com guia bilíngue |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Native desktop GUI automation (Windows/macOS) | Automação de desktop via acessibilidade + Tauri |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker support for ReMe memory search | Busca de memória com re-rankeo via API externa |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | Show built-in tool docs and parameters in Console | Documentação inline de ferramentas na interface |
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | Fix /mission TypeError (#6533, #6506, #60) | Correção de monkey-patch quebrado |
| [#6500](https://github.com/agentscope-ai/QwenPaw/pull/6500) | Make unauthenticated local CDP exposure opt-in | **Segurança crítica** — DevTools não mais exposto por padrão |
| [#6531](https://github.com/agentscope-ai/QwenPaw/pull/6531) | Add models field to new_session response (ACP) | Clientes externos recuperam modelos disponíveis |
| [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) | Probe vodozemac E2EE for Python 3.12 | Criptografia Matrix funcional em Python 3.12 |
| [#6554](https://github.com/agentscope-ai/QwenPaw/pull/6554) | Add MiniMax context windows to static catalog | MiniMax-M3 com janela correta de 1M tokens |
| [#6543](https://github.com/agentscope-ai/QwenPaw/pull/6543) | OneBot: clean text and send local media | Links clicáveis e mídia funcional no QQ |
| [#6553](https://github.com/agentscope-ai/QwenPaw/pull/6553) | Redesign App Center (3 tabs) | My Apps, Official, App Market |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | Workspace checkpoint management | Git-store shadow para recoverability |
| [#6383](https://github.com/agentscope-ai/QwenPaw/pull/6383) | Unelevated sandbox for Windows | Sandbox sem privilégios elevados |
| [#6527](https://github.com/agentscope-ai/QwenPaw/pull/6527) | Cancellation-safe lifecycle hooks | Persistência de estado em cancelamento |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unify provider discovery and model metadata | Plataforma unificada de provedores |
| [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) | Ensure MCP tool names start with a letter | Compatibilidade com APIs LLM estritas (Kimi) |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + complexidade)

**#6537 — Skill tags desaparecem ao reiniciar (regressão)**  
9 comentários | 🔴 Severidade: Bug funcional crítico  
Tags configuradas no Skill Pool via API são salvas corretamente em `skill_pool/skill.json`, mas são perdidas após restart — regressão de #3270. Cenário real: usuário perde configurações de metaorganização. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6537)

**#6460 — CPU 100% em Edge+Wayland**  
4 comentários | 🟡 Severidade: Degradação de performance  
Usuário com QwenPaw 2.0.1 em Linux + Wayland + Edge observa CPU de 100% em abas de sessões grandes, possivelmente por renderização de grandes resultados ou WebSocket push. Não ocorre em uso normal de navegação. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6460)

**#6542 — Perda de histórico por crash**  
3 comentários | 🟡 Severidade: Perda de dados do usuário  
QwenPaw em modo console pode perder os últimos turnos de conversa em crash, pois o log JSONL não é sincronizado em tempo real. Feature request: mecanismo de auto-archive. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6542)

**#6524 — MCP client não reconecta após restart do server**  
3 comentários | 🔴 Severidade: Resiliência de conexão  
Com `streamable_http`, o MCP session-id antigo persiste mesmo após restart do servidor, causando falhas silenciosas de query. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6524)

**#6475 — notice_after_complete (background tasks)**  
2 comentários | 🟢 Feature request popular  
Usuários desejam que o Agent possa iniciar tarefas longas, responder "tarefa iniciada" e continuar respondendo perguntas enquanto a tarefa roda em background, notificando ao completar. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6475)

**#6560 — UX improvements para chat session**  
1 comentário | 🟡 Feature request agrupado  
Proposta unificada: copy de respostas, ESC para stop, undo, scroll performance, session ID, context transfer. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6560)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam funcionalidades core)

| Issue | Descrição | Impacto |
|---|---|---|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags somem após restart (regressão) | Perda de configuração persistente |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP client não reconecta após server restart | Ferramentas MCP ficam indisponíveis |
| [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | NSIS installer entra em loop infinito no Windows | Instalação impossível |
| [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) | Context compression insere role=user causando erro 400 no DeepSeek | Falha de execução com DeepSeek |
| [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) | MCP tool names com hífen inicial causam 400 em APIs strict (Kimi) | Incompatibilidade com provedores |
| [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) | `/mission` command lança TypeError | Comando quebrado |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream/compression perde eventos de sessão matinal | Perda de memória persistente |

### 🟡 Moderados (degradam experiência ou funcionalidadeparcial)

| Issue | Descrição |
|---|---|
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | CPU 100% em Edge+Wayland com sessões grandes |
| [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | Caminhos chineses URL-encoded no Feishu (arquivos não encontrados) |
| [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) | Transcrição de áudio Feishu falha silenciosamente |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | Mensagens perdidas ao trocar sessão/modo, re-render do zero |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | Forking descontrolado de sessões sem hierarquia |
| [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Cursor desalinhado no editor de Coding Mode |
| [#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) | Input box encoberto no Desktop App (Windows 150% scaling) |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | CI `real-behavior-proof` bloqueia todos os fork PRs |

### 🟢 Menores / UX

| Issue | Descrição |
|---|---|
| [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) | Perda de histórico por crash sem auto-archive |
| [#6551](https://github.com/agentscope-ai/QwenPaw/issues/6551) | Modelos Aliyun coding plan desalinhados do site oficial |
| [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP new_session não expõe campo models para clientes externos |

**Nota:** Bugs críticos representam **7 falhas de estabilidade**, indicando que a versão 2.0.1 está passando por correção intensiva. A quantidade de issues de UI state management (#6558, #6559, #6547) sugere que o frontend está em ritmo de refatoração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🟢 Features em Desenvolvimento Ativo (PRs abertos)

| PR | Feature | Relevância Estratégica |
|---|---|---|
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Automação GUI desktop nativa (Windows/macOS) | **Alta** — expande casos de uso para automação de aplicativos |
| [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) | `notice_after_complete` para background tasks | **Alta** — interatividade em tarefas longas |
| [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) | Creation checkpoints, home redesign, media recovery | **Média** — robustez e UX |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | Workspace checkpoint management | **Média** — recoverability via shadow Git |
| [#6527](https://github.com/agentscope-ai/QwenPaw/pull/6527) | Cancellation-safe lifecycle hooks | **Média** — integridade de estado |
| [#6553](https://github.com/agentscope-ai/QwenPaw/pull/6553) | Redesign App Center (3 tabs) | **Média** — descobribilidade de apps |
| [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) | QQ channel streaming output | **Média** — experiência em QQ |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker para ReMe memory search | **Média** — qualidade de recall |
| [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | UX improvements: copy, ESC stop, undo, scroll | **Média** — qualidade de vida |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Provider/model unified platform | **Alta** — arquitetura de provedores |

### 📊 Sinais de Roadmap Inferidos

1. **Automação de desktop nativa** — O PR #6424 com automação GUI accessibility-first + Tauri sinaliza movimento estratégico para além de terminal/browser
2. **Sistema de checkpoint/backup** — Multiple PRs (#6269, #6527, #6542) indicam priorização de persistência e recoverability
3. **Memory/dream overhaul** — Issues #6555 e #6398 sugerem revisão do sistema de memória persistente
4. **Plugin ecosystem maturation** — O bug #6496 (plugins legados desabilitados) e redesign do App Center indicam foco em здоровый ecosystem
5. **Provider unification** — PR #6302 busca resolver fragmentação de modelos/provedores, tema recorrente

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

**🔴 Perda de dados e estado:**
- Histórico de conversa perdido em crash (sem flush real-time)
- Skill tags perdidas ao reiniciar
- Eventos de memória matinais não capturados pelo Dream
- Mensagens perdidas em troca de sessão/modo

**🔴 Problemas de conectividade/resiliência:**
- MCP client não reconecta após restart do servidor
- Falha silenciosa de transcrição de áudio no Feishu
- Plugin legacy desabilitado sem aviso (QwenPaw 2.0+)

**🟡 Experiência de Desktop:**
- Input box encoberto em telas com scaling 150%
- Cursor desalinhado no Coding Mode
- NSIS installer looping infinitamente no Windows

**🟡 Performance:**
- CPU 100% com sessões grandes em Edge+Wayland
- UI lag ao trocar entre chat/agent modes
- Scroll/compression em contextos longos problemático

**🟡 Integração e canais:**
- Caminhos chineses URL-encoded no Feishu
- QQ sem streaming output
- ACP não expõe modelos para clientes externos

### Satisfação Inferida

O alto volume de issues (25) e PRs (50) nas últimas 24h, combinado com a presença de múltiplos first-time contributors, sugere uma **comunidade ativa e engajada** que está encontrando e reportando problemas em ritmo acelerado — sinal de adoção crescente. A inúmera quantidade

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-07-30

---

## 1. Panorama do Dia

ZeroClaw mantém um ritmo de desenvolvimento intenso com **50 issues e 50 PRs atualizados nas últimas 24 horas**, sem novos lançamentos. A atividade concentra-se em **propostas arquiteturais (RFCs)** que buscam refatorações profundas na gestão de memória, runtime e channels, sinalizando uma fase de maturação técnica. O projeto apresenta **3 issues de alta severidade** relacionadas a bugs/crashes e **diversas vulnerabilidades** sendo tratadas proativamente. A comunidade está engajada com discussões técnicas substanciais — algumas com até 11 comentários.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento ativo com múltiplas PRs em revisão, incluindo upgrades de toolchain (Rust 1.97.1) que podem preceder um próximo release.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos/revisão):

| PR | Autor | Tamanho | Destaque |
|----|-------|---------|----------|
| [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | NiuBlibing | XS | **Upgrade toolchain Rust 1.96→1.97.1** em CI, MSRV e imagens — preparação para release |
| [#9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181) | perlowja | L | **Correção Nextcloud Talk** — usa signed bot API para replies ([#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)) |
| [#9517](https://github.com/zeroclaw-labs/zeroclaw/pull/9517) | IftekharUddin | L | **Localização de prompts de aprovação** em Telegram, Slack, Matrix, Signal, WhatsApp, ACP |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | NiuBlibing | M | **Context compaction** ancorado à razão da janela do modelo |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | REL-mame | XL | **OpenAI Chat Completions endpoint** no gateway ([RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) |
| [#9536](https://github.com/zeroclaw-labs/zeroclaw/pull/9536) | metalmon | S | **ACP session workspace** default para dir do agente em vez de CWD do daemon |
| [#9520](https://github.com/zeroclaw-labs/zeroclaw/pull/9520) | IftekharUddin | S | **Sempre-inject frontmatter** em compact prompt mode |

### PRs fechadas/merged:
- [#9502](https://github.com/zeroclaw-labs/zeroclaw/pull/9502) — fix rustdoc warnings no docs

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

1. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — RFC: Separar histórico de conversa de memória de longo prazo | 11 comentários
   - *Demanda central:* Arquitetural — distinguindo `MemoryCategory::Conversation` de memória curada, impacting runtime, gateway e autosave

2. **[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** — RFC: Abstract `KeySource` trait para material de chaves mestras | 8 comentários
   - *Demanda central:* Classificar fontes de chaves por deployment (cloud, on-prem, HSM)

3. **[#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)** — HMAC receipts para detecção de alucinações | 7 comentários
   - *Status: CLOSED* — Feature implementada, marco importante para confiança em tool execution

4. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — RFC: OpenAI Chat Completions adapter | 6 comentários
   - *Demanda central:* Compatibilidade com Open WebUI, LobeChat e SDKs que falam protocolo OpenAI

5. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — RFC: Cross-turn conversation correlation no OTel | 6 comentários
   - *Demanda central:* Observabilidade com `gen_ai.conversation.id` através de eventos

### Padrões identificados:
- **Arquitetura distribuída:** Múltiplos RFCs simultâneos (#9048, #9127, #9103, #6864) indicam reorganização profunda do runtime
- **Interoperabilidade:** Adapters OpenAI (#8603/#8486), A2A (#9106), Gemini Live (#8780)
- **Segurança:** 5+ issues com tag `security:*`, incluindo encryption, prompt injection e secret handling

---

## 5. Bugs e Estabilidade

### Severidade P1 (Críticos):

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | **npm audit failed** — 3 vulnerabilidades high/critical em `@redocly/openapi-core` | CLOSED |
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | **CLI cron jobs** — output descartado (`delivery.mode = "none"` hardcoded) | In-progress |

### Severidade P2 (Altos):

| Issue | Descrição | Canal/Componente |
|-------|-----------|------------------|
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk usa API errada (PR [#9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181) em revisão) | channel:nextcloud-talk |
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | `zerocode` não termina ao falhar start | zerocode/tui |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice Call com credenciais vazias causa crashloop do supervisor | daemon |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | High-entropy detector redacts endereços Solana (config ignorado) | channel:telegram |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | Context meter subconta requests image-heavy | provider:anthropic |
| [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | Email channel não preserva CC/Reply-All | channel:email |

### Observações:
- **2 bugs de crashloop** (#6724, #8578) indicam necessidade de robustez no daemon startup
- **Security bugs** em detecção de entropia e Nextcloud Talk requerem atenção prioritária
- **Test coverage gap** em [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) — lib unit tests não executam com feature `plugins-wasmtime`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (últimas 48h):

| Issue | Feature | Complexidade |
|-------|---------|--------------|
| [#9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) | Semgrep findings como comentário advisory no PR | S |
| [#9508](https://github.com/zeroclaw-labs/zeroclaw/issues/9508) | Harden PR-review skills contra prompt injection | S |
| [#9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) | CI gate declarativo para direção de dependências | M |
| [#9509](https://github.com/zeroclaw-labs/zeroclaw/issues/9509) | Preflight job para CI scope-aware | M |
| [#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512) | Anotar CI gates com issue motivador | XS |

### RFCs em discussão (roadmap preliminar):

| Issue | RFC | Impacto |
|-------|-----|---------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | Memória vs. histórico separados | runtime, gateway |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | `KeySource` trait | config, security |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI compatibility adapter | gateway |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A outbound client | tool, gateway |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech (Gemini Live) | channel |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents provider | provider |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Runtime plugins (WASM) vs. compile-time features | architecture |

### Sinais de direção:
- **Modularização:** Move para runtime plugins (WASM) indica estratégia de delivery mais flexível
- **Observabilidade:** Investimento em OTel, logging e context tracking
- **Interoperabilidade:** Adapter OpenAI e A2A sugerem foco em ecossistema

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

1. **Configuração frágil:** Usuários relatam crashloop ao configurar canais sem credenciais [#6724] — experiência frustrante para novos usuários
2. **Incompatibilidade de API:** Clientes OpenAI (Open WebUI, LobeChat) não conectam sem adapter custom [#8603] — barreira de adoção
3. **Perda de dados:** Cron jobs CLI não entregam output [#9340] — uso legítimo perde resultados sem feedback
4. **Email limitado:** CC/Reply-All não funciona [#9506] — reduz utilidade em ambientes corporativos
5. **Memória conflituosa:** Separação histórico/conversa ainda misturada [#9048] — confusão conceitual para operadores

### Cenários de uso emergentes:
- **Agentes multi-canal:** Usuários esperam experiência consistente entre Matrix, Telegram, Discord, Signal
- **Integração empresarial:** Nextcloud Talk, email corporativo, webhooks — necessidade de APIs corretas
- **Segurança operacional:** Detecção de secrets, encryption de config, prompt injection — demandas de production use

### Satisfação:
- **Resposta rápida da comunidade:** RFCs com 6-11 comentários em 2 semanas
- **Manutenção ativa:** 50 PRs em fluxo simultâneo, múltiplos contribuidores
- **Documentação em evolução:** PRs docs (#9267, #9537) indicam investimento em DX

---

## 8. Backlog que Merece Atenção

### Issues sem movimento / aguardando maintainer:

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | **Tracker: Maintainer decision queue para RFCs** | 2026-07-04 | 2 | architecture |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | **Inverter zeroclaw-channels → zeroclaw-runtime** | 2026-05-23 | 2 | P2 |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | **Mixture-of-Agents provider** | 2026-07-01 | 3 | P2 |

### Items bloqueados:
- [#9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) — bloqueada por decisão de design CI

### Recomendações:
1. **Priorizar decisão em RFCs** — backlog crescente de propostas arquiteturais [#8692 tracker]
2. **Revisar inversion de dependência** [#6864] — bloqueia outras refatorações
3. **Executar npm audit** — verificar remediation de [#9235] foi applied
4. **Test coverage gap** em plugins-wasmtime [#9462] — risco de regressões

---

## Métricas Consolidada (2026-07-30)

| Dimensão | Valor |
|----------|-------|
| Issues ativas/novas (24h) | 45 |
| Issues fechadas (24h) | 5 |
| PRs abertas (24h) | 49 |
| PRs merged/fechadas (24h) | 1 |
| Releases | 0 |
| RFCs em discussão | 12+ |
| Bugs P1 | 2 |
| Bugs P2 | 8+ |
| Security issues | 5+ |

**Saúde geral:** Atividade alta, sem blockers críticos, mas com dívida técnica significativa em arquitetura (RFCs) e test coverage. Recomendação: priorize review das PRs de bugfix P1/P2 e decisão nos RFCs blockers.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*