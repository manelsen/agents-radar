# Resumo diário do ecossistema de agentes de IA 2026-08-29

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-29 02:39 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-08-29  
**Analista:** MiniMax-M2.7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** em 29 de agosto de 2026. De um lado, projetos como **ZeroClaw** (50 PRs/48 issues), **Hermes Agent** (50 PRs/50 issues) e **CoPaw/QwenPaw** (43 PRs/50 issues) operam em режим de alta cadência, com múltiplas RFCs em discussão e pipeline robusto de features. Do outro, **IronClaw** demonstra foco em qualidade com 16 PRs merged em 24h e release estável v1.4.0 promotionada, enquanto **NanoBot** consolida 7 PRs merged abordando bugs críticos de infraestrutura. **PicoClaw** mantém atividade moderada com 2 operações, e **NullClaw** permanece inativa. A convergência técnica mais notável é a ênfase em **persistência de sessão, controle de contexto e segurança em sandbox** — desafios que afetam múltiplos projetos simultaneamente.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde |
|---------|---------------|-------------|------------------|----------------|-------|
| **ZeroClaw** | 48 | 50 | 8+ | 0 | 🟡 Alta intensidade |
| **Hermes Agent** | 50 | 47 | 1 | 0 | 🟡 Alta intensidade |
| **CoPaw/QwenPaw** | 50 | 43 | 10 | 2 (betas) | 🟢 Estável |
| **NanoBot** | 14 | 21 | 7 | 0 | 🟢 Consolidando |
| **IronClaw** | 9 | 15 | 16 | 1 (v1.4.0) | 🟢 Estável |
| **PicoClaw** | 1 | 1 | 1 | 0 | 🟢 Manutenção |
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |

**Observação:** CoPaw/QwenPaw é o único projeto com releases formais (v2.2.0-beta.2 e beta.3), demonstrando ciclo de release disciplinado. IronClaw promotionou v1.4.0 de release candidate para estável. ZeroClaw e Hermes Agent operam em alta intensidade sem releases taggeadas, sugerindo trabalho em branches de consolidação.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Complexidade Arquitetural

**Vantagens técnicas:**
- Maior volume de RFCs aceitas e em implementação (9+ RFCs ativas com 15-27 comentários)
- Foco em **segurança como cidadão de primeira classe** — sandbox granular, forbidden_paths, cron check-then-act
- Abordagem de **transport adapters** para multi-canal com arquitetura de sessão owned pelo runtime

**Diferenças frente aos pares:**
- Único projeto com RFC formal para **computer-use em desktop** (#6909)
- Arquitetura de **WASM como plataforma de plugins** (#10076)
- Preocupação explícita com **provenance e reply contract** (#6954)

**Tamanho da comunidade:** ~50 contribuidores ativos (estimado por volume de PRs), com forte engajamento em discussões arquiteturais.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Persistência de Sessão e Lifecycle

| Projeto | Issue Relacionada |
|---------|-------------------|
| **NanoBot** | [#5579](https://github.com/HKUDS/nanobot/pull/5579) — move persistence off event loop |
| **ZeroClaw** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — Runtime-owned session ownership |
| **IronClaw** | [#7987](https://github.com/nearai/ironclaw/issues/7987) — flatten_top_level discarding constraints |
| **CoPaw/QwenPaw** | [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) — A-tier deferred startup |

**Padrão:** Múltiplos projetos enfrentam desafios de race conditions em sessões, lifecycle ownership e event loop blocking. A comunidade converge para modelos onde o runtime é dono da sessão, não o canal.

### 4.2 Controle de Contexto e Otimização de Tokens

| Projeto | Feature/Bug |
|---------|-------------|
| **NanoBot** | [#5571](https://github.com/HKUDS/nanobot/pull/5571) — explicit memory recall required |
| **NanoBot** | [#5584](https://github.com/HKUDS/nanobot/issues/5584) — bound reasoning_content replay |
| **IronClaw** | [#7891](https://github.com/nearai/ironclaw/issues/7891) — 14.3s de inferência por headers MIME não projetados |
| **CoPaw/QwenPaw** | [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) — bound oversized single-line tool results |
| **ZeroClaw** | [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) — pre-turn tool-elicitation hints |

**Padrão:** A explosão de contexto em tool results é problema universal. Soluções incluem projeção explícita de campos, budgets de schemas MCP e limites de replay de reasoning.

### 4.3 Segurança em Sandbox e Extensibilidade

| Projeto | RFC/Feature |
|---------|-------------|
| **ZeroClaw** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox policy |
| **IronClaw** | [#7982](https://github.com/nearai/ironclaw/pull/7982) — result_read budget direction |
| **CoPaw/QwenPaw** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP configurable timeout |
| **NanoBot** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) — ephemeral runtime blocks |

**Padrão:** Isolamento de skills HTTP egress, filesystem e network restrictions são的需求 em múltiplos projetos. MCP emerge como protocolo de extensibilidade padrão.

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Estratégia |
|---------|------------------|------------|
| **CoPaw/QwenPaw** | Equipes/empresas | Multi-tenant Hub, integração com canais corporativos (Feishu, DingTalk, WeChat) |
| **IronClaw** | Desenvolvedores | Performance de tool calls, telemetry, sandbox isolation |
| **ZeroClaw** | Operadores/Enterprise | Segurança, compliance, SOP automation, computer-use |
| **Hermes Agent** | Multi-plataforma | Desktop-first, cross-platform (CLI ↔ Telegram ↔ Discord) |
| **NanoBot** | Usuários avançados | CLI-first, provider flexibility, memory control |
| **PicoClaw** | Canais alternativos | QQ Channel, multi-channel messaging |

### Por Arquitetura

| Projeto | Stack Dominante | Diferencial |
|---------|-----------------|-------------|
| **CoPaw/QwenPaw** | Python + Tauri (desktop) | Dual-protocol MCP (Streamable-HTTP), startup deferred |
| **IronClaw** | Python + Rust extensions | NEAR AI model integration, extension ownership |
| **ZeroClaw** | Rust-first | WASM Component Model, canonical sandbox policy |
| **Hermes Agent** | Multi-stack | Desktop (Electron-like), Skills index, Nostr/buzz integration |
| **NanoBot** | Python | Provider abstraction, memory consolidation |

### Por Foco Estratégico

| Projeto | Foco Atual | Riscos |
|---------|-----------|--------|
| **CoPaw/QwenPaw** | Multi-tenancy, MCP 2026-07-28 | TLS/OpenSSL DPI issues bloqueiam desktop |
| **IronClaw** | Tool performance, notification inbox | 14.3s por call não projetado é proibitivo |
| **ZeroClaw** | RFC consolidation, security hardening | Maintainer bottleneck (#8692) |
| **Hermes Agent** | Desktop stability, RealtimeVoice | Skills index degradado há semanas |
| **NanoBot** | Memory paradigm shift, session stability | Breaking change em memory recall pode quebrar workflows |

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Velocidade Máxima

| Projeto | Velocidade | Indicador |
|---------|------------|-----------|
| **CoPaw/QwenPaw** | 🔴 Beta release a cada 24-48h | Release disciplinado, 2 betas em sequência |
| **ZeroClaw** | 🔴 8+ PRs merged/dia | RFC pipeline ativo, 9+ RFCs em discussão |
| **Hermes Agent** | 🔴 47 PRs abertos simultaneamente | Paralelismo alto, risco de fragmentação |

### Projetos em Consolidação de Qualidade

| Projeto | Foco | Indicador |
|---------|------|-----------|
| **IronClaw** | Estabilidade pós-release | v1.4.0 promotionada, 16 PRs merged em 24h |
| **NanoBot** | Bug fixing e refatoração | 7 PRs merged focados em P1/P2, nenhuma release |
| **PicoClaw** | Bug fix e UX | PR de interface laggy em review |

### Indicadores de Saúde Community

| Projeto | RFC Engajamento | Bug Resolution | Staleness |
|---------|-----------------|---------------|-----------|
| **ZeroClaw** | 9+ RFCs (15-27 comentários) | 3 P1 críticos resolvidos em 24h | ⚠️ Maintainer bottleneck |
| **Hermes Agent** | Skills index RFC (114 comentários) | 1 PR merged | 🔴 Skills index degradado |
| **IronClaw** | 0 RFCs ativas | Alta taxa de resolução | 🟢 Saudável |
| **CoPaw/QwenPaw** | Hub multi-tenant (12 comentários) | 36/50 issues fechadas | 🟢 Saudável |
| **NanoBot** | 0 RFCs | 7 PRs merged | 🟢 Saudável |

---

## 7. Sinais de Tendência

### 7.1 MCP Como Protocolo de Extensibilidade Universal

**Evidência:**
- CoPaw/QwenPaw implementa dual-protocol MCP com fallback para 4 versões
- NanoBot adiciona budget de schemas MCP e suporte a MCP Apps host
- IronClaw otimiza tool calls com projeção explícita

**Direção:** MCP evolui de "protocolo de tools" para "plataforma de UI e artefatos" (NanoBot #5251).

### 7.2 Memória Explícita vs. Injeção Automática

**Evidência:**
- NanoBot breaking change: memory não será mais injetada automaticamente (#5571)
- ZeroClaw RFC: memory lifecycle policy decoupling (#6850)
- CoPaw/QwenPaw: pluggable memory backend (#7080)

**Direção:** Shift de "memory como contexto implícito" para "memory como recurso explícito" — modelo precisa usar `recall` ou equivalente.

### 7.3 Segurança e Sandbox como Requisitos de Primeira Classe

**Evidência:**
- ZeroClaw: granular sandbox policy com filesystem e network restrictions
- IronClaw: extension output ownership gates
- NanoBot: ephemeral runtime blocks para contexto descartável

**Direção:** Enterprise demanda por isolamento de skills HTTP egress e filesystem access control vai além de "trust but verify".

### 7.4 Computer-Use e Desktop como Próxima Fronteira

**Evidência:**
- ZeroClaw RFC #6909: computer-use support para desktop screen interaction
- Hermes Agent: Desktop CPU idle issues (40-70% em macOS Intel)
- CoPaw/QwenPaw: Tauri desktop com TLS/DPI challenges

**Direção:** Integração nativa com desktop environment (screenshot capture, input control) emerge como capability diferenciadora.

### 7.5 Multi-Tenancy e Colaboração em Equipes

**Evidência:**
- CoPaw/QwenPaw Hub multi-tenant confirmado para 2.2.0
- Hermes Agent: cross-platform session sharing (CLI ↔ Telegram)
- Hermes Agent: Desktop frontend-only install request (11 👍)

**Direção:** Transição de "agente pessoal" para "plataforma de equipe" com administração centralizada de skills e contexto compartilhado.

### 7.6 Performance de Tool Calls Como Diferencial Competitivo

**Evidência:**
- IronClaw: 19.2s de inferência por falta de projeção
- ZeroClaw: cron jobs, skill HTTP egress bounded
- CoPaw/QwenPaw: shell output truncation, context bounds

**Direção:** Otimização de tool calls (projeção, budget, streaming) será tão crítica quanto qualidade de modelos — custo de inferência é preocupação real.

---

## 8. Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores de platform** | Adotar MCP 2026-07-28 como baseline; implementar memory recall explícito |
| **Times de operações** | Priorizar IronClaw para performance de tool calls; ZeroClaw para compliance |
| **Empresas** | Aguardar CoPaw/QwenPaw Hub multi-tenant (2.2.0); monitorar Hermes Agent Skills index |
| **Contribuidores open source** | Engajar em RFCs de ZeroClaw (arquitetura madura); contribuir em NanoBot (memória explícita) |
| **Pesquisadores** | Acompanhar IronClaw para métricas de performance; Hermes Agent para UX patterns |

---

*Relatório gerado em 2026-08-29. Dados extraídos dos resumos de atividade comunitária de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-29

---

## 1. Panorama do dia

O NanoBot apresenta um dia de **alta atividade**, com 21 PRs atualizados e 7 issues nos últimas 24 horas. A equipe demonstra foco intenso em **estabilidade e refatoração**: sete PRs foram fechados/merged, abordando desde bugs críticos de session persistence (P1) até refatorações arquiteturais do agente e memória. A taxa de abertura de issues permanece elevada com 6 novos items de enhancement, sinalizando demanda ativa por funcionalidades como suporte a MCP Apps, controle de contexto efêmero e aprimoramentos de UI. O projeto não registrou releases formais hoje, sugerindo que a fase atual é de consolidação pré-release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O repositório não publicou novas versões entre 2026-08-28 e 2026-08-29. Isso indica que o ciclo de desenvolvimento está em maturidade interna, com merge contínuo de PRs sem tagged releases imediatamente subsequentes.

---

## 3. Progresso do Projeto

Sete PRs alcançaram estado **merged/closed** hoje, representando avanços significativos em múltiplas frentes:

| PR | Título | Prioridade | Impacto |
|---|---|---|---|
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | fix(session): move persistence off event loop | P1 | Resolvedor de deadlock crítico na event loop; move operações de persistência para worker threads |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | test(tui): avoid clipboard status race on Windows | P2 | Estabiliza teste regressivo no Windows |
| [#5577](https://github.com/HKUDS/nanobot/pull/5577) | fix(tui): preserve full UI in Herdr panes | P2 | Melhora compatibilidade com terminais multiplexados |
| [#5576](https://github.com/HKUDS/nanobot/pull/5576) | fix(tui): preserve full UI in Herdr panes | P2 | Mesmo fix, merge duplicado para cobertura |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | refactor(memory): remove consolidation ratio | P2 | Simplifica archiver de memória; elimina lógica de ratio-driven |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | refactor(providers): make fallback attempts explicit | P2 | Cria `ProviderAttempt` imutável; melhora debugabilidade de retries |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | refactor(agent): extract tool execution boundary | P2 | Extrai lógica de tool execution para módulo funcional isolado |

**Destaque estratégico:** O PR [#5579](https://github.com/HKUDS/nanobot/pull/5579) (P1) resolve um problema de design fundamental onde persistência bloqueava a event loop, potencialmente causando deadlocks em sessões ativas. Este é o tipo de melhoria de infraestrutura que suporta escalabilidade futura.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção (comentários/reações)

| Issue | Título | Comentários | Status |
|---|---|---|---|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Feature: Add MCP Apps host support to WebUI | 2 | **Open** |
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | feat: Allow custom provider to configure thinking style | 2 | **Closed** |

**Análise:**

**#5251 — MCP Apps host support:** A comunidade demonstra interesse em expandir a integração MCP para incluir suporte ao `io.modelcontextprotocol/ui`, permitindo que resultados de chamadas MCP sejam renderizados como artefatos UI no WebUI. Esta é uma evolução natural do suporte MCP existente, potencialmente habilitando experiências mais ricas em interfaces web.

**#4429 — Custom provider thinking style:** A issue foi fechada (provavelmente com merge do PR [#5560](https://github.com/HKUDS/nanobot/pull/5560) ou similar), demonstrando que a capacidade de configurar `thinking`/`reasoning` para providers customizados (como VolcEngine/Doubao) foi atendida. Este era um gap de compatibilidade importante para providers não-OpenAI.

### PRs em destaque (comentários undefined, indicando atividade recente)

| PR | Título | Prioridade | Status |
|---|---|---|---|
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | fix: summarize persisted JSON tool results | P2 | Open |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | refactor(agent): let runner own context compaction | - | Open |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | - | Open |

**Observação:** Os PRs em aberto[#5590](https://github.com/HKUDS/nanobot/pull/5590) e [#5388](https://github.com/HKUDS/nanobot/pull/5388) tratam de otimização de contexto (resumo de tool results e budget de schemas MCP), indicando foco em eficiência de tokens e gestão de contexto longo.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (4 issues abertas + PRs de fix)

#### P1 — Críticos

| ID | Título | Severidade | Status |
|---|---|---|---|
| [#5582](https://github.com/HKUDS/nanobot/issues/5582) | Cron jobs crash with WebUI quote/@mention turns | Bug | **Open** |
| [#5589](https://github.com/HKUDS/nanobot/pull/5589) | fix(agent): stop discarded sessions from reviving | Bug | **Open** |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | fix(session): move persistence off event loop | Performance | **Open** |
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | fix(session): move persistence off event loop | Performance | **Merged** |

**#5582 — Crash em Cron jobs:** Bug crítico afeta o scheduling de reminders via WebUI. Quando um turno WebUI carrega `RuntimeContextBlock` (de quotes ou @mentions), e o agente agenda um cron job, ocorre crash no momento de criação ou execução. O PR correlato [#5587](https://github.com/HKUDS/nanobot/pull/5587) propõe sanitização de metadados persistidos para resolver.

**#5589/#5580/#5579 — Session lifecycle:** Três PRs/issues relacionados atacam problemas de race condition em sessões descartadas. Mensagens pendentes podem reviver sessões deletadas ou causar comportamento inesperado no cleanup de tasks.

#### P2 — Importantes

| ID | Título | Status |
|---|---|---|
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | fix: summarize persisted JSON tool results | Open |
| [#5588](https://github.com/HKUDS/nanobot/pull/5588) | fix(agent): add retry hint to raised tool exceptions | Open |
| [#5587](https://github.com/HKUDS/nanobot/pull/5587) | fix(cron): sanitize persisted origin metadata | Open |
| [#5581](https://github.com/HKUDS/nanobot/pull/5581) | fix(tui): preserve cursor position on Windows exit | Open |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | Open |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | fix(session): prevent deleted sessions from being recreated | Open |

**Padrão identificado:** Alta concentração de bugs relacionados a **persistência de sessão**, **metadata em contexto runtime**, e **tratamento de erros em tools**. A complexidade de gerenciar múltiplos ciclos de vida (sessão, cron, runtime blocks) está gerando edge cases.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas enhancements abertas (6 issues)

| Issue | Título | Autor | Status |
|---|---|---|---|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Let runtime-context block opt out of history persistence (`ephemeral` blocks) | iChizer0 | Open |
| [#5585](https://github.com/HKUDS/nanobot/issues/5585) | Deliver provider retry-wait notices to channels | iChizer0 | Open |
| [#5584](https://github.com/HKUDS/nanobot/issues/5584) | Bound how far back `reasoning_content`/`thinking_blocks` are replayed | iChizer0 | Open |
| [#5583](https://github.com/HKUDS/nanobot/issues/5583) | Append "try a different approach" hint to raised tool exceptions | iChizer0 | Open |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Add MCP Apps host support to WebUI | yuklcool | Open |

### Features em desenvolvimento (PRs abertos)

| PR | Título | Prioridade | Conflito |
|---|---|---|---|
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | feat(memory): require explicit recall by default | P1 | ⚠️ |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) | feat(memory): add pluggable recall backend | P2 | ⚠️ |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | feat(cli): make nanobot the default agent command | - | - |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | - | - |

### Sinais de roadmap identificados

1. **Gestão de memória explícita:** Os PRs [#5571](https://github.com/HKUDS/nanobot/pull/5571) e [#5570](https://github.com/HKUDS/nanobot/pull/5570) indicam uma mudança de paradigma: memória persistent (`MEMORY.md`, `history.jsonl`) não será mais injetada automaticamente no prompt do sistema. O modelo precisará usar `recall_memory` explicitamente. Este é um breaking change significativo (P1 com conflito).

2. **Controle de contexto runtime:** A issue [#5586](https://github.com/HKUDS/nanobot/issues/5586) propõe um modificador `ephemeral` para blocks, indicando que o histórico está sendo reconsiderado para suportar lifecycle mais granular.

3. **MCP como cidadão de primeira classe:** O interesse em MCP Apps host (#5251) e budget de schemas (#5388) sugere que MCP será cada vez mais integrado como framework de extensibilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Categoria | Evidência | Problema |
|---|---|---|
| **Contexto efêmero** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Usuários não conseguem marcar contexto runtime como descartável; quotes e @mentions persistem indefinidamente |
| **Feedback de retry ausente** | [#5585](https://github.com/HKUDS/nanobot/issues/5585) | Quando modelo falha e retenta, canais (TUI/WebUI) não mostram notificação — usuário fica sem feedback |
| **Custo de reasoning** | [#5584](https://github.com/HKUDS/nanobot/issues/5584) | `reasoning_content` replayado indefinidamente aumenta custos e consumo de contexto em sessões longas |
| **Tool exceptions opacas** | [#5583](https://github.com/HKUDS/nanobot/issues/5583) | Erros de tools não ganham hint de recovery, dificultando auto-correção |
| **Cron instability** | [#5582](https://github.com/HKUDS/nanobot/issues/5582) | Reminders scheduleados via WebUI quebram em cenários comuns (quotes/@mentions) |

### Cenários de uso emergentes

- **Extensibilidade via MCP:** Usuários querem usar MCP Apps (UI components) além de tools, signals e resources
- **Providers diversificados:** Suporte para providers não-OpenAI com parâmetros de thinking customizados (já endereçado em #4429)
- **CLI como entry point:** Demanda por `nanobot` como atalho para `nanobot agent` ([#5560](https://github.com/HKUDS/nanobot/pull/5560))

### Satisfação/Insatisfação

**Positivo:**
- Atividade de PRs muito alta → projeto ativo e mantido
- Bugs críticos (P1) estão sendo rapidamente endereçados com PRs acompanhantes
- Refatorações arquiteturais demonstram investimento em sustentabilidade

**Pontos de atrito:**
- Memory auto-injection vai mudar comportamento padrão — quebra expectativas existentes
- Conflitos em PRs de memória (#5570, #5571) indicam debates sobre design
- 4 issues de bug abertas em 24h sugere regression risk elevado com changes rápidos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Atualizado | Prioridade |
|---|---|---|---|---|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Feature: Add MCP Apps host support to WebUI | 2026-08-05 | 2026-08-28 | Enhancement |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | 2026-08-13 | 2026-08-28 | Feature |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | fix(session): prevent deleted sessions from being recreated | 2026-08-22 | 2026-08-28 | P2 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status | 2026-08-24 | 2026-08-28 | P2 |

### PRs em conflito requerem resolução

| PR | Título | Conflito | Risco |
|---|---|---|---|
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | feat(memory): require explicit recall by default | ⚠️ | Alto — breaking change |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) | feat(memory): add pluggable recall backend | ⚠️ | Médio — adiciona abstrações |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status | ⚠️ | Baixo — feature de UI |

### Recomendações de priorização

1. **Alta:** Resolver conflitos em [#5570](https://github.com/HKUDS/nanobot/pull/5570)/[#5571](https://github.com/HKUDS/nanobot/pull/5571) — impacta comportamento default de memória
2. **Alta:** Acompanhar merge de [#5587](https://github.com/HKUDS/nanobot/pull/5587) para fechar #5582 — cron jobs quebrados afetam feature core de reminders
3. **Média:** Engajar com autor de [#5251](https://github.com

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-29

## 1. Panorama do dia

O projeto Hermes Agent mantém uma atividade intensa em 2026-08-29, com **50 issues e 50 PRs atualizados nas últimas 24h**, sem nenhum novo release. A quantidade massiva de issues abertas (50) e PRs em estado aberto (47) indica um alto volume de desenvolvimento paralelo, possivelmente impulsionado por múltiplas frentes de trabalho simultâneas. A maioria dos PRs abertos são otimizações de Desktop (performance) e correções de bugs, enquanto as issues mais comentadas refletem problemas crônicos de estabilidade (Skills index degradado há semanas) e a necessidade de coordenação entre múltiplos PRs competindo pelo mesmo domínio (RealtimeVoiceProvider). Não há sinais de regressões críticas generalizadas, mas a taxa de abertura de issues permanece elevada.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões nos últimos dias. O último release estável documentado nos dados é a v0.20.4/v0.20.6, e a ausência de releases novos pode indicar que a equipe está em ciclo de consolidação antes de um próximo tagged release.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h

| # | Título | Impacto | Link |
|---|---|---|---|
| **#97451** | fix(skill_manage): batch failures keep the failing op's file_preview | **Crítico para DX** — Modelos recuperam após falhas de batch sem operar às cegas. A correção restitui o payload completo (`file_preview`, fuzzy-match hints) que antes era descartado pelo wrapper de erro. | [PR #97451](https://github.com/NousResearch/hermes-agent/pull/97451) |

### PRs abertos mais relevantes (em revisão ativa)

| # | Título | Componente | Prioridade | Link |
|---|---|---|---|---|
| **#97610** | feat(buzz): presence, typing, seen reactions, and NIP-AO observer telemetry | buzz (Nostr) | Nova feature | [PR #97610](https://github.com/NousResearch/hermes-agent/pull/97610) |
| **#97609** | fix(curator): prevent terminal archive bypass | curator/terminal | Bug fix | [PR #97609](https://github.com/NousResearch/hermes-agent/pull/97609) |
| **#97608** | fix(buzz): reply at channel level with --broadcast | buzz (Nostr) | Bug fix | [PR #97608](https://github.com/NousResearch/hermes-agent/pull/97608) |
| **#97604** | fix(compression): strip embedded stale todo snapshot | agent/compression | Bug fix | [PR #97604](https://github.com/NousResearch/hermes-agent/pull/97604) |
| **#91289** | feat(cron): defer monitor state commit until delivery succeeds | cron | P2 | [PR #91289](https://github.com/NousResearch/hermes-agent/pull/91289) |
| **#3335** | feat(gateway): add Zulip integration and messaging support | gateway/plugins | P3, longstanding | [PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335) |

**Análise:** O PR #97610 adiciona telemetria de presença/digitação ao buzz (cliente Nostr), sinalizando amadurecimento do protocolo. O PR #97451 (merged) é a única contribuição fechada — resolve um bug significativo onde modelos ficavam sem contexto de erro após falhas em batch de skills. A maioria esmagadora dos PRs abertos (47) ainda está em revisão, com concentração forte em **otimizações de Desktop** (performance de paint, startup, transcript cache) e **correções de bugs de plataforma cruzada** (Windows/Unix).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Link |
|---|---|---|---|---|
| **#66616** | Skills index is stale or degraded | 114 | 0 | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| **#4335** | Cross-platform session context sharing (CLI ↔ Telegram) | 16 | 3 | [Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335) |
| **#77111** | [RFC] RealtimeVoiceProvider ABC — four competing duplex-voice PRs need an interface | 13 | 2 | [Issue #77111](https://github.com/NousResearch/hermes-agent/issues/77111) |
| **#88275** | Renderer process burns 40-70% CPU at idle (macOS Intel) | 12 | 0 | [Issue #88275](https://github.com/NousResearch/hermes-agent/issues/88275) |
| **#96692** | Unified slash-command registry and execution contract | 10 | 0 | [Issue #96692](https://github.com/NousResearch/hermes-agent/issues/96692) |
| **#38519** | Hermes Desktop frontend install only | 5 | **11** | [Issue #38519](https://github.com/NousResearch/hermes-agent/issues/38519) |

### Análise dos temas quentes

**1. Skills Index Degradado (#66616 — 114 comentários) — Prioridade de estabilidade**
Este é o item mais crítico em termos de engajamento. A issue está aberta desde 2026-07-18 e continua ativa com 114 comentários, indicando que o problema de estagnação do índice de Skills (29.8h vs. limite de 26h) é **persistente e não resolvido**. O workflow `skills-index.yml` cron-driven (6/18 UTC) não está funcionando corretamente. Este é um problema que impacta diretamente a experiência do usuário no Skills Hub.

**2. Context sharing cross-platform (#4335 — 16 comentários, 3 👍) — Feature request estratégico**
A comunidade demonstra interesse forte em compartilhamento de contexto entre plataformas (CLI ↔ Telegram ↔ Discord). A arquitetura atual de stores isoladas por plataforma fragmenta a experiência. Esta é uma questão de design de produto com implicações profundas na arquitetura do gateway.

**3. RealtimeVoiceProvider RFC (#77111 — 13 comentários) — Coordenação técnica**
4 PRs competindo para integrar providers de voz duplex simultaneamente. A comunidade, através deste RFC, está pedindo uma ABC (Abstract Base Class) e orquestrador antes que qualquer PR seja merged. Este é um sinal claro de maturidade técnica — a comunidade quer estabilidade de API antes de proliferar implementações.

**4. Desktop CPU idle (#88275 — 12 comentários) — Experiência macOS Intel**
macBooks Intel (2019) sofrem 40-70% CPU em idle, causando throttle térmico. `desktop.disable_gpu=true` atenua parcialmente. Este é um problema de UX significativo para uma fatia relevante da base de usuários Desktop.

**5. Desktop frontend-only install (#38519 — 11 👍) — Demanda de usabilidade**
Com 11 reações positivas, esta é a issue com mais aprovação da comunidade listada. Usuários querem instalar apenas o frontend Desktop e conectar a um agent remoto já existente. É uma demanda de arquitetura de deployment que a equipe ainda não atendeu.

---

## 5. Bugs e Estabilidade

### Por severidade (P1–P2 críticas, P3 moderadas)

#### P1 — Crítica
| # | Título | Componente | Atualizado | Link |
|---|---|---|---|---|
| **#95759** | Desktop-driven update does not self-heal venv bricked by reverted TCC anchor | desktop/install | 2026-08-28 | [Issue #95759](https://github.com/NousResearch/hermes-agent/issues/95759) |

**Análise P1:** Update Desktop não se recupera de venv corrompido após regressão do TCC anchor no macOS. Usuários afetados ficam presos em loop de falha de update.

#### P2 — Alta
| # | Título | Componente | Atualizado | Link |
|---|---|---|---|---|
| **#88275** | Renderer burns 40-70% CPU at idle (macOS Intel thermal) | desktop | 2026-08-29 | [Issue #88275](https://github.com/NousResearch/hermes-agent/issues/88275) |
| **#69672** | FTS trigram indexes \x00json sentinel — DB bloat + SQLite-version-dependent integrity | agent/sessions | 2026-08-28 | [Issue #69672](https://github.com/NousResearch/hermes-agent/issues/69672) |
| **#80670** | "Could not react" / 4040 on resumed conversations | desktop/tui | 2026-08-28 | [Issue #80670](https://github.com/NousResearch/hermes-agent/issues/80670) |
| **#65038** | delegation.fallback_providers ignored — workers inherit parent chain | agent/delegate | 2026-08-29 | [Issue #65038](https://github.com/NousResearch/hermes-agent/issues/65038) |
| **#97120** | Cron warning recommends `install` under multiplex → gateway crash-loops | gateway/cron | 2026-08-29 | [Issue #97120](https://github.com/NousResearch/hermes-agent/issues/97120) |
| **#92302** | 120s timeout too small for local models + big context | agent/streaming | 2026-08-29 | [Issue #92302](https://github.com/NousResearch/hermes-agent/issues/92302) |
| **#97019** | os.kill(pid, 0) unsafe on Windows — Ctrl+C collision | tui/host_supervisor | 2026-08-28 | [Issue #97019](https://github.com/NousResearch/hermes-agent/issues/97019) |
| **#97544** | hermes model prepends `custom:` to built-in provider IDs | cli/model | 2026-08-29 | [Issue #97544](https://github.com/NousResearch/hermes-agent/issues/97544) |
| **#97596** | BWS secret injection uses hardcoded whitelist — custom provider keys never injected | cli/auth | 2026-08-29 | [Issue #97596](https://github.com/NousResearch/hermes-agent/issues/97596) |
| **#97498** | Telegram DM topic recovery skipped for /background dispatch | gateway/telegram | 2026-08-29 | [Issue #97498](https://github.com/NousResearch/hermes-agent/issues/97498) |
| **#97329** | state.db repair misses WAL holders on Linux | agent/sessions | 2026-08-29 | [Issue #97329](https://github.com/NousResearch/hermes-agent/issues/97329) |
| **#97515** | Desktop Settings Model Apply ignores profile scope | desktop/config | 2026-08-29 | [Issue #97515](https://github.com/NousResearch/hermes-agent/issues/97515) |
| **#97529** | SSH remotes never migrated to v2 registry — remote sessions fail | desktop/ssh | 2026-08-29 | [Issue #97529](https://github.com/NousResearch/hermes-agent/issues/97529) |
| **#96181** | Gateway auto-resume spins thread at 100% CPU on restart | gateway/sessions | 2026-08-29 | [Issue #96181](https://github.com/NousResearch/hermes-agent/issues/96181) |
| **#97414** | Desktop branch re-fires on failure — duplicate sessions accumulate | desktop | 2026-08-28 | [Issue #97414](https://github.com/NousResearch/hermes-agent/issues/97414) |
| **#77423** | search_files silently returns 0 results for non-glob patterns | tools | 2026-08-29 | [Issue #77423](https://github.com/NousResearch/hermes-agent/issues/77423) |

#### P3 — Moderada
| # | Título | Componente | Atualizado | Link |
|---|---|---|---|---|
| **#75492** | Google Chat OAuth token key mismatch — send path can't read | plugins/google-chat | 2026-08-29 | [Issue #75492](https://github.com/NousResearch/hermes-agent/issues/75492) |
| **#97597** | Feishu adapter crashes TypeError with lark-oapi < 1.6.8 | plugins/feishu | 2026-08-29 | [Issue #97597](https://github.com/NousResearch/hermes-agent/issues/97597) |
| **#42079** | Discord thread history backfill loses context between bot messages | plugins/discord | 2026-08-28 | [Issue #42079](https://github.com/NousResearch/hermes-agent/issues/42079) |
| **#71998** | pre_llm_call plugin context dropped for multimodal image turns | agent/plugins | 2026-08-29 | [Issue #71998](https://github.com/NousResearch/hermes-agent/issues/71998) |
| **#84437** | Native Windows test-runner path missing for contributors | ci/windows | 2026-08-29 | [Issue #84437](https://github.com/NousResearch/hermes-agent/issues/84437) |

**Análise:** Há **15+ bugs P2 ativos**, muitos atualizados nas últimas 24-48h, indicando relatório contínuo e provavelmente triagem ativa. Os temas dominantes são:
- **Desktop instability**: CPU idle, branch re-firing, session loading failures, profile scope bugs
- **Session state fragility**: WAL holders, FTS bloat, resume spin-loops, Telegram topic recovery
- **Windows compatibility**: os.kill(0) collision, asyncio.start_unix_server, git config, shutdown watchdog
- **Plugin platform bugs**: Google Chat OAuth, Feishu TypeError, Discord context loss

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Título | Componente

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-29

---

## 1. Panorama do Dia

O projeto PicoClaw mantém uma atividade moderada no dia de hoje, com **2 operações registradas nas últimas 24h**: uma issue aberta aguardando triagem e um PR de bug fix em revisão. Não houve lançamentos de novas versões, e o volume de atividade permanece dentro dos padrões habituais do projeto. A comunidade continua engajada com melhorias incrementais, especialmente no front-end e integração com canais de mensagens.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto não publicou versões depuis o último release estável. Isso sugere que a equipe pode estar em fase de consolidação de mudanças antes de um próximo tag.

> 📌 **Nota:** Para acompanhar versões, consulte a [página de releases](https://github.com/sipeed/picoclaw/releases).

---

## 3. Progresso do Projeto

### PR Merged/Closed

| # | Título | Domínio | Status | Link |
|---|--------|---------|--------|------|
| #1349 | feat(qq): support parsing and replying to more attachment types | channel/go | ✅ CLOSED | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) |

**Resumo:** Esta PR implementa suporte расширенный para o canal QQ, incluindo:
- Parsing de emojis estruturados do QQ Channel
- Tratamento de mensagens de voz, imagem, vídeo e arquivo
- Upload e envio de anexos locais (voz, imagem, vídeo, arquivo)
- Priorização de mensagens em Markdown para replies

**Impacto:** Melhora significativa na compatibilidade com QQ Channel, ampliando os canais de comunicação suportados pelo bot.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Status | Comentários | Reações | Link |
|---|--------|--------|-------------|---------|------|
| #3342 | [Feature] Opt-in "after-turn" steering mode: queue busy-session messages instead of interrupting the running turn | 🟡 OPEN | 1 | 0 | [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) |

**Análise:** Esta issue propõe um comportamento alternativo para quando o usuário envia uma segunda mensagem enquanto o agente ainda processa a primeira. O usuário *unedtamps* argumenta que:

- **Problema atual:** Mensagens enviadas durante processamento são tratadas como "course correction" (correção de curso), fazendo o sistema pular tool calls restantes da tarefa #1 ("Skipped due to queued user message")
- **Solução proposta:** Implementar um modo "after-turn" que enfileire mensagens para execução após o turno atual, preservando a integridade da tarefa em andamento

**Demanda:** A feature request busca maior controle sobre o comportamento de "steering" do agente, sugerindo uma opção configurável para diferentes casos de uso.

---

## 5. Bugs e Estabilidade

### PR Aberto (Bug Fix)

| # | Título | Status | Link |
|---|--------|--------|------|
| #3347 | fix laggy interface | 🟡 OPEN | [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) |

**Descrição:** O autor *iMilnb* reporta que a interface web apresentava lentidão quando havia muito texto na área de chat. O fix foi analisado e implementado para `picoclaw-launcher`.

**Severidade estimada:** ⭐⭐ (UI/UX — não bloqueante, mas impacta experiência do usuário)

> ⚠️ **Atenção:** Este PR ainda está **OPEN** e precisa de revisão. Contribuidores com experiência em TypeScript/Node são bem-vindos para revisar.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

**Issue #3342** — *Opt-in "after-turn" steering mode*

- **Prioridade percebida:** Média (0 reações, 1 comentário)
- **Complexidade:** Requer alteração na lógica de steering do agente
- **Alinhamento estratégico:** Melhora na experiência multi-mensagem em sessões ativas

**Possível impacto no roadmap:** Se aceito, este modo pode se tornar uma configuração opcional no steering behavior, alinhando-se com demandas de usuários que preferem completude de tarefas sobre interrupções.

---

## 7. Resumo de Feedback dos Usuários

| Categoria | Observação |
|-----------|------------|
| **Dores relatadas** | Interface web lenta com grande volume de texto (#3347) |
| **Cenários de uso** | Agentes processando múltiplas tarefas, necessidade de fila de mensagens |
| **Integração** | Forte demanda por suporte a canais adicionais (QQ Channel) |

### Análise de Satisfação

- O **PR #1349** demonstrou que a comunidade valoriza suporte a diferentes canais de mensagem, com uma contribuição substancial de *aishannon*
- O **bug report #3347** evidencia um problema de usabilidade que afeta tanto desktop quanto mobile (testado em Brave)
- A **feature request #3342** sugere que usuários avançados desejam maior granularidade no controle de comportamento do agente

---

## 8. Backlog que Merece Atenção

### PRs/Issues Sem Resposta ou Estagnadas

| # | Tipo | Título | Idade | Status | Link |
|---|------|--------|-------|--------|------|
| #3347 | PR | fix laggy interface | ~2 dias | OPEN | [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) |

**Recomendação:** O PR #3347 está aguardando revisão há ~2 dias. Dada a natureza simples do fix (interface laggy), uma revisão rápida de contributors experientes em TS/Node poderia acelerar a integração.

> 🔔 **Ação recomendada:** Engajar mantenedores para review do PR #3347, que resolve um problema visível de UX.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade recente | 🟡 Moderada | 2 operações/24h |
| Releases | 🟢 Estável | Último release em uso |
| PRs em review | 🟡 1 pendente | #3347 aguardando review |
| Issues ativas | 🟡 1 aberta | Feature request |
| Backlog acumulado | 🟢 Controlado | Sem items estagnados |

---

**Gerado em:** 2026-08-29  
**Fonte:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-29

---

## 1. Panorama do Dia

O projeto IronClaw mantém um ritmo de desenvolvimento intenso e saudável. Nas últimas 24 horas, registraram-se **47 atividades** (11 issues + 31 PRs + 1 release), demonstrando alta engajamento da equipe. A release **v1.4.0** foi promotionada como estável há dois dias, consolidando 81 commits desde a v1.3.0. A atividade concentra-se em **otimizações de performance** (5+ issues de perf ativas) e **melhorias no sistema de notificações**, indicando foco em estabilidade e experiência do usuário. Não há sinais de regressões críticas ou bloqueios no desenvolvimento.

---

## 2. Lançamentos

### ironclaw-v1.4.0
📅 **Data:** 2026-08-27  
🔗 [nearai/ironclaw Releases](https://github.com/nearai/ironclaw/releases)

**Mudanças destacadas:**
- **Promoção estável** da release candidate `1.4.0-rc.1`
- **81 commits** desde `ironclaw-v1.3.0`
- **Novidade principal:** Durable notification inbox — sistema de publicação de resultados autoritativos e gates acionáveis em uma caixa de entrada por usuário, com superfície na WebUI

**Notas de migração:**
- Nenhuma breaking change documentada
-用户提供的新内容是关于 Durable notification inbox 的实现细节，包括发布权威结果和可操作的门控到每个用户的收件箱，并通过 WebUI 通知界面呈现给用户。这是 v1.4.0 的核心功能，基于 1.4.0-rc.1 的稳定推广，包含自 v1.3.0 以来的 81 次提交。

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| # | Título | Impacto |
|---|--------|---------|
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | fix(tools): stop sending the model after a result_read budget it cannot reach | **Crítico** — corrige mensagem de erro que apontava direção errada, causando loops de retry |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | test(extensions): enforce encoded output ownership | **Arquitetural** — gate fail-closed para inventariar limites de output em extensões |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | ci: validate integration group topology | **Infraestrutura** — validação fail-closed de topologia de grupos de teste |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) | perf(tool-search, github): stop offering tools matching one incidental term | **UX/Performance** — impede retorno de resultados "fantasma" em buscas |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | fix(notifications): persist auth gates before enrichment | **Resiliência** — garante entrega de notificações mesmo com falha no enrichment |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | feat(notifications): publish durable resource blocks | **Feature** — mapeia estados `BlockedResource` para notificações `RunBlocked` |
| [#7908](https://github.com/nearai/ironclaw/pull/7908) | feat(loop): spike canonical executor in persistent user sandbox | **Arquitetural** — explorer para mover executor para sandbox do usuário |

**Destaque:** O ciclo de notification está se tornando um subsistema maduro com 3 PRs merged hoje cobrindo auth gates, resource blocks e pre-run failures ([#7899](https://github.com/nearai/ironclaw/pull/7899) aberto).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Sentimento |
|---|--------|-------------|------------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | perf(extensions): unprojected MIME headers custam 14.3s de inferência | **10** | 🔴 Frustração alta |
| [#7981](https://github.com/nearai/ironclaw/issues/7981) | perf(github): list_repos gera 519KB e 64 tool calls | **3** | 🔴 Frustração |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Decision spike: sandboxed executor por usuário | **2** | 🟡 Decisão técnica |
| [#7971](https://github.com/nearai/ironclaw/issues/7971) | feat(webui): render model capability tags | **0** | 🟢 Feature request |
| [#7970](https://github.com/nearai/ironclaw/issues/7970) | feat(llm): preserve NEAR AI model modalities | **0** | 🟢 Feature request |

**Análise:** O tema dominante é **performance de tool calls** — especificamente payloads não projetados que inflacam o contexto. A issue #7891 demonstra um caso real: 2 chamadas ao Gmail (274ms + 290ms) resultaram em **19.7 segundos de turno**, com 19.2s dedicados à inferência do modelo processando 49,152 bytes de headers MIME não solicitados.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Qtd | Issues |
|------------|-----|--------|
| **P1** | 1 | [#7930](https://github.com/nearai/ironclaw/issues/7930) — Tool args não podem referenciar resultados anteriores |
| **P2** (suggested) | 2 | [#7981](https://github.com/nearai/ironclaw/issues/7981), [#7986](https://github.com/nearai/ironclaw/issues/7986) — Performance GitHub tools |
| **Medium Risk** | 1 | [#7891](https://github.com/nearai/ironclaw/issues/7891) — Headers MIME não projetados |
| **Bug (scope: llm)** | 1 | [#7987](https://github.com/nearai/ironclaw/issues/7987) — `flatten_top_level` descarta constraints silenciosamente |

### Bugs Abertos Críticos

**[#7987](https://github.com/nearai/ironclaw/issues/7987)** — `flatten_top_level` Silently Discarding Constraints
> *Problema:* Função rebuild schema de tool a partir de whitelist fixa ao invés de remover chaves específicas. Qualquer constraint escrita é simplesmente descartada sem warning ou diagnóstico.

**[#7930](https://github.com/nearai/ironclaw/issues/7930)** — Tool Arguments Cannot Cite Prior Results
> *Problema:* Para usar output de uma capability como input de outra, o modelo precisa re-emitir o payload verbatim. Não existe mecanismo de referência, gerando consumo excessivo de tokens e decoding serial.

**✅ Corrigido recentemente:**
- [#7982](https://github.com/nearai/ironclaw/pull/7982) — result_read budget messaging direction fix

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas)

| # | Título | Escopo | Prioridade Indicada |
|---|--------|--------|---------------------|
| [#7971](https://github.com/nearai/ironclaw/issues/7971) | Render model capability tags na UI | webui | — |
| [#7970](https://github.com/nearai/ironclaw/issues/7970) | Preservar NEAR AI model modalities | llm | — |
| [#7969](https://github.com/nearai/ironclaw/issues/7969) | Surface model capabilities na seleção | llm | — |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Persistent per-user sandboxed executor | sandbox, agent | High risk |

### PRs de Feature em Progresso

| # | Título | Tamanho | Escopo |
|---|--------|---------|--------|
| [#7961](https://github.com/nearai/ironclaw/pull/7961) | Scoped tenant BI telemetry collection | XL | telemetry |
| [#7958](https://github.com/nearai/ironclaw/pull/7958) | Shared review router para learning | XL | learning |
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | Publish automation pre-run failures | XL | notifications |
| [#7983](https://github.com/nearai/ironclaw/pull/7983) | Companion client surface (demo) | XL | webui, client |
| [#7908](https://github.com/nearai/ironclaw/pull/7908) | Canonical executor in user sandbox | XL | sandbox, loop |

**Sinais de Roadmap:** O roadmap indica foco em:
1. **Model discovery e capacidades** — surface de modalidades de modelos na UI
2. **Sandbox isolation** — mover executor para sandbox por usuário
3. **Telemetry** — coleta de BI por tenant com privacidade bounded
4. **Learning** — router de review compartilhado (desabilitado por default)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Performance de Tool Calls** (maior queixa)
> *"Two `gmail.get_message` calls returning 274 ms and 290 ms cost a **19.7-second turn**, of which **19.2 s was model inference**"*
> — [#7891](https://github.com/nearai/ironclaw/issues/7891)

**Cenário:** Usuário executa tarefa simples ("listar meus repos GitHub") que resulta em:
- 64 tool calls desnecessárias
- 3 minutos e 1 segundo de execução
- 519,551 bytes transferidos para resposta já disponível

**2. Falta de Visibilidade de Capabilities de Modelos**
> *"Users can see names such as `anthropic/claude-opus-4-8`, but cannot tell whether a model accepts text only, accepts image input, or produces images"*
> — [#7969](https://github.com/nearai/ironclaw/issues/7969)

**3. Notificações de Autenticação/Blocks**
> *"When an installed extension cannot operate because its authentication is no longer usable"*
> — [#7875](https://github.com/nearai/ironclaw/issues/7875) ✅ Resolvido

### Feedback Positivo
- Sistema de **notifications** sendo bem recebido (3 PRs de notificação merged em sequência)
- **Design system v2** em progresso ([#5563](https://github.com/nearai/ironclaw/pull/5563), [#5084](https://github.com/nearai/ironclaw/pull/5084))

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta > 3 dias

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#7987](https://github.com/nearai/ironclaw/issues/7987) | flatten_top_level descarta constraints silenciosamente | 2026-08-28 | 0 | Bug |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | list_repos 519KB sem projeção | 2026-08-28 | 0 | P2 |
| [#7930](https://github.com/nearai/ironclaw/issues/7930) | Tool args não citam resultados | 2026-08-27 | 0 | P1 |
| [#7971](https://github.com/nearai/ironclaw/issues/7971) | Model capability tags | 2026-08-28 | 0 | Feature |
| [#7970](https://github.com/nearai/ironclaw/issues/7970) | Preserve model modalities | 2026-08-28 | 0 | Feature |
| [#7969](https://github.com/nearai/ironclaw/issues/7969) | Surface capabilities na UI | 2026-08-28 | 0 | Feature |

### PRs Abertas sem Revisão

| # | Título | Criado | Tamanho | Pendente |
|---|--------|--------|---------|----------|
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | Terminate on dominant repeated output | 2026-08-28 | XL | Review |
| [#7976](https://github.com/nearai/ironclaw/pull/7976) | Derive compaction threshold from model window | 2026-08-28 | XL | Review |
| [#7975](https://github.com/nearai/ironclaw/pull/7975) | Harden oversized turn cuts | 2026-08-28 | XL | Review |
| [#7958](https://github.com/nearai/ironclaw/pull/7958) | Shared review router | 2026-08-27 | XL | Review |

### Recomendação de Priorização

1. **[#7987](https://github.com/nearai/ironclaw/issues/7987)** — Bug silencioso pode causar comportamento inesperado em produção
2. **[#7930](https://github.com/nearai/ironclaw/issues/7930)** — P1 tracking feature fundamental para performance
3. **[#7977](https://github.com/nearai/ironclaw/pull/7977)** — "593 tool calls over 70 minutes" demonstra problema real de loop

---

## Métricas Resumidas

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas | 9 | ✅ Saudável |
| PRs abertos | 15 | ✅ Normal |
| PRs fechados/merged | 16 | ✅ Alta produtividade |
| Release atual | v1.4.0 | ✅ Estável |
| Bugs P1/P2 em aberto | 3 | ⚠️ Requer atenção |
| Features em progresso | 8 | ✅ Pipeline saudável |
| Issues sem resposta > 3d | 6 | ⚠️ Monitorar |

---

*Relatório gerado em 2026-08-29. Dados extraídos de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)

**Data de referência:** 2026-08-29  
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**Analista:** MiniMax-M2.7

---

## 1. Panorama do Dia

O projeto QwenPaw apresenta **alta atividade** em 29 de agosto de 2026, com 50 issues e 43 PRs atualizados nas últimas 24 horas. A equipe acelerou o ciclo de releases, disponibilizando duas novas betas (v2.2.0-beta.2 e beta.3) em sequência rápida, indicando foco em estabilização para a release 2.2.0. A comunidade demonstra forte engajamento em topics críticos como MCP, multi-tenancy e otimização de contexto. O volume de bugs fechados (36 issues) supera significativamente as abertas (14), sugerindo ritmo saudável de resolução. Ainda há issues abertas de alta prioridade, incluindo o debate sobre o Hub multi-tenant e problemas de TLS/OpenSSL.

---

## 2. Lançamentos

### v2.2.0-beta.3
**Link:** [Release v2.2.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.3)

**Mudanças:**
- **feat(MCP):** Adicionado cliente Streamable-HTTP dual-protocol com fallback legacy ([PR #7330](https://github.com/agentscope-ai/QwenPaw/pull/7330)) — suporta MCP 2026-07-28 com fallback para versões anteriores (2025-03-26, 2025-06-18, 2025-11-25)
- **fix(MCP):** Aborta sessões RPC travadas no teardown e recupera `list_tools` stale ([PR #7329](https://github.com/agentscope-ai/QwenPaw/pull/7329))

**Breaking Changes:** Nenhuma identificada nesta versão.

---

### v2.2.0-beta.2
**Link:** [Release v2.2.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.2)

**Mudanças:**
- **fix(workspace):** Limpeza de falha de startup agora é cancellation-safe ([PR #7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) por @jinliyl)
- **test(e2e):** Cobertura de console expandida com 23 casos direcionados + assertions estendidas ([PR #7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) por @yutai78786)

**Breaking Changes:** Nenhuma identificada nesta versão.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (10 mais relevantes)

| # | PR | Autor | Impacto |
|---|-----|--------|---------|
| #7393 | chore: bump version to v2.2.0b3 | @cuiyuebing | Versionamento |
| #7331 | fix(context): bound oversized single-line tool results | @niceIrene | **Estabilidade** — previne overflow de contexto por tool results单行 |
| #7320 | fix(providers): restore reliable model discovery for custom OpenAI-compatible providers | @wangfei010313 | **UX** — corrige descoberta automática de modelos |
| #7386 | fix(providers): migrate discovered model output limits | @zhijianma | **Migração** — migration de `max_tokens` legacy |
| #7381 | fix(dingtalk): detect stale stream connections | @hongxicheng | **Estabilidade** — detecta conexões WebSocket stales após wake/sleep |
| #7329 | fix(mcp): abort hung session RPCs on teardown | @yuanxs21 | **Estabilidade MCP** — recupera sessões travadas |
| #7330 | feat(mcp): Streamable-HTTP dual-protocol client | @yuanxs21 | **Feature MCP** — compatibilidade com múltiplas versões |
| #7388 | fix(acp): use max_completion_tokens for explicit runtime limits | @rayrayraykk | **Corretude** — alinhamento com spec OpenAI |
| #7384 | perf(app): A-tier deferred startup architecture | @rayrayraykk | **Performance** — startup mais rápido |
| #7391 | docs(config): drop undefined QWENPAW_MEMORY_COMPACT_THRESHOLD | @c020627 | **Docs** — remove documentação desatualizada |

**Destaque:** A arquitetura de startup deferred ([PR #7384](https://github.com/agentscope-ai/QwenPaw/pull/7384)) e sua continuação em [PR #7387](https://github.com/agentscope-ai/QwenPaw/pull/7387) representam evolução significativa em performance de inicialização, compartilhando runtime ASGI entre app e Tauri backend.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

#### 1. QwenPaw Hub — Multi-tenant Edition (12 comentários)
**Link:** [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
**Status:** OPEN  
**Tipo:** Discussion

> "QwenPaw started as a personal AI assistant, but the community has repeatedly asked for a better way to run it for a team. QwenPaw Hub is our first response."

**Análise:** A comunidade demonstra forte demanda por funcionalidades multi-usuário e administração centralizada de skills. Este é um pivot estratégico do produto, indicando expansão de uso individual para cenários corporativos.

---

#### 2. Feishu Channel Bug — Sem Resposta Após Primeira Mensagem (15 comentários)
**Link:** [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)  
**Status:** CLOSED  
**Destaque:** Bug crítico afeta tanto instâncias Docker locais quanto AgentScope Platform, indicando problema sistêmico no channel Feishu.

---

#### 3. TLS/OpenSSL 3.0.x no Desktop e Docker (9 comentários)
**Link:** [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)  
**Status:** OPEN  
**Severidade:** Alta — affects Desktop (Tauri) e Docker image

> "Desktop has no workaround" — LUOSENGWA

**Análise:** Problema de Deep Packet Inspection (DPI) por carriers que interferem em TLS handshakes. Afeta significativamente a experiência desktop.

---

#### 4. Otimização de Contexto em Loops React (4 comentários)
**Link:** [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316)  
**Status:** OPEN  
**Tipo:** Discussion

Proposta de tool que permite ao LLM julgar e simplificar resultados de tools irrelevantes durante loops de execução, otimizando uso de contexto.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (afetam produção)

| # | Bug | Comentários | Link |
|---|-----|-------------|------|
| - | Feishu não responde após primeira mensagem | 15 | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) |
| - | TLS handshake resets em Desktop/Docker | 9 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) |

#### 🟠 Altos (impacto significativo)

| # | Bug | Comentários | Link |
|---|-----|-------------|------|
| - | WebView2 crash após 7s na v2.0.0+post.4 | 3 | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) |
| - | Memory leak: 36 loops consumindo 48GB+ | 3 | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) |
| - | Mensagens silenciosamente descartadas (HTTP 200) | 3 | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) |

#### 🟡 Médios (regressões ou edge cases)

| # | Bug | Comentários | Link |
|---|-----|-------------|------|
| - | Cron tasks com share_session retornam reply vazio | 3 | [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) |
| - | MCP results grandes bypassam scroll compaction | 2 | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) |
| - | WeChat duplica resposta com proactive mode | 3 | [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) |

**Nota:** Muitos bugs de severidade média/alta já foram fechados (36 de 50 issues), indicando ritmo eficiente de resolução. Bugs ainda abertos (#7298, #6427) merecem atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentemente Closed (prontas para release)

| # | Feature | Comentários | Link |
|---|---------|-------------|------|
| #7392 | Página dedicada para Fallback Model settings | PR aberto | [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) |
| #6512 | Shell command output truncation — auto-write to file | 4 | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) |
| #4237 | In-chat observability para shell commands (kill/extend timeout) | 5 | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) |
| #7335 | Prompt cache hit rate observability | 3 | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) |
| #7080 | PowerContext pluggable memory backend (alternativa a ReMe) | PR aberto | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) |
| #3751 | System Tray para Windows Desktop | 4 | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) |
| #6874 | MCP configurable tool call timeout | PR em review | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) |

### Features em Discussão (roadmap signals)

| # | Feature | Sinais | Link |
|---|---------|--------|------|
| #7318 | QwenPaw Hub Multi-tenant | Confirmado para 2.2.0 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| #7316 | Ferramenta para otimizar contexto em loops React | Discussion | [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) |
| #1775 | Codex-like steer mode | Good first issue | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) |
| #7395 | Claude Code third-party harness | Coming soon confirmado | [#7395](https://github.com/agentscope-ai/QwenPaw/issues/7395) |

**Sinais de Roadmap para 2.2.0:**
- ✅ Multi-tenancy (Hub)
- ✅ MCP improvements (timeouts, dual-protocol, session recovery)
- ✅ Performance de startup
- ✅ Memory backend pluggable
- 🔜 Claude Code integration

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (padrões recorrentes)

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade de Canais** | Problemas com Feishu, WeChat, DingTalk (duplicação, silence) | Alta |
| **Contexto/Tokens** | Limites de output, overflow em MCP results grandes | Alta |
| **Model Switching** | Necessidade de fallback automático quando modelo falha | Média |
| **Desktop Experience** | TLS issues, WebView2 crashes, falta system tray | Alta |
| **MCP Reliability** | Recuperação após restart de servidor MCP | Média |

### Cenários de Uso Emergentes

1. **Multi-agent orchestration:** Usuários rodando agentes que chamam outros agentes, com problemas de chat history e race conditions ([#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814), [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273))

2. **Enterprise data analysis via MCP:** Queries pesadas de time-series, telemetria, logs que excedem contexto ([#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288))

3. **Team deployment:** Demanda clara por multi-tenant, skills admin-managed, sem necessidade de instâncias separadas ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318))

### Satisfação/Insatisfação

**Positivo:**
- Comunidade ativa em discussions e PR reviews
- Resposta rápida a bugs críticos
- Features de observabilidade sendo priorizadas (prompt cache, shell commands)

**Negativo:**
- Desktop bundling com Python 3.11/OpenSSL 3.0.x causa problemas em produção
- Model discovery para providers customizados instável
- Onboarding de novos contribuidores pode melhorar (test suite lenta)

---

## 8. Backlog que Merece Atenção

### Issues Abertas sem Resposta/Merge há +3 dias

| # | Issue | Criado | Comentários | Prioridade |
|---|-------|--------|-------------|------------|
| #7298 | TLS/OpenSSL 3.0.x DPI issue | 2026-08-25 | 9 | 🔴 Alta |
| #7316 | React loop context optimization | 2026-08-26 | 4 | 🟡 Média |
| #6427 | WebView2 crash v2.0.0+post.4 | 2026-07-24 | 3 | 🟠 Alta |



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-29

## 1. Panorama do Dia

ZeroClaw manteve um nível de atividade intenso nas últimas 24h, com 48 issues e 50 PRs atualizados, evidenciando uma alta cadência de desenvolvimento. Não houve lançamentos formais (releases), indicando que o projeto está em fase de maturação de múltiplas RFCs e correções críticas antes de um próximo release tag. A prioridade técnica do dia recai sobre três eixos: (i) consolidação da arquitetura de sessão e transporte (#9487, #9488), (ii) endurecimento de segurança em sandbox, cron e skill HTTP (#6996, #10381, #10369, #10324), e (iii) estabilização de bugs P1 nos canais Telegram e core (#10429, #10408, #8654, #9815). A comunidade demonstra engajamento substancial em RFCs, com várias já aceitas e em implementação — sinal de maturidade no processo de design.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou versões taggeadas neste período. A ausência de releases combinada com a alta atividade de PRs sugere que o trabalho está concentrado na consolidação de branches e na revisão de múltiplas contribuições de grande porte antes de um próximo milestone tag.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Relevantes

| # | PR | Tipo | Impacto |
|---|---|---|---|
| #8337 | feat(observability): herdr agent reporting integration | enhancement | Adiciona reporting opcional de estado do agente para integração Herdr. Closed. |
| #10329 | fix(provider): resilient wrapper truncation | bug fix | Corrige shadowing de recovery em provedores OpenAI-compatíveis. Closed. |
| #9815 | security fix | bug fix | `forbidden_paths` agora funciona corretamente em caminhos sob `allowed_roots`. Closed. |
| #9425 | fix(sop): operator cancellation path | bug fix | Web dashboard ganha botão Stop/Cancel em SOP jobs ativos. Closed. |
| #8654 | fix(skills): skill-review fork panic | bug fix | Elimina SIGSEGV após turntool-heavy. Closed. |
| #10324 | fix(cron): check-then-act race | bug fix | Cron manual trigger agora idempotente pós-renome. Closed. |
| #9711 | fix(hardware): Arduino temp cleanup | bug fix | Limpeza de diretórios temporários no flash. Closed. |
| #8720 | support: Bedrock cachePoint config | support | Documentação de desabilitação de cachePoint. Closed. |

### Destaque: PRs Abertos em Alta Prioridade

| # | PR | Tipo | Risco | Tamanho | Status |
|---|---|---|---|---|---|
| #10381 | fix(security): resolve host launchers before workspace cwd | bug fix | **high** | XL | needs-maintainer-review |
| #10369 | feat(runtime)!: bound skill HTTP egress | enhancement | **high** | M | needs-maintainer-review |
| #10325 | feat(runtime): pre-turn tool-elicitation hints | enhancement | **high** | L | needs-author-action |
| #9726 | fix(runtime): make TaskRecord single lifecycle owner | enhancement | **high** | XL | needs-maintainer-review |
| #10236 | fix(desktop): bound daemon capture logs | bug fix | **high** | XL | needs-maintainer-review |
| #9997 | feat(channels/telegram): add secure model picker | enhancement | **high** | XL | blocked, needs-author-action |
| #9740 | feat(channels): add VoiceHost WebSocket bridge | enhancement | **high** | XL | needs-author-action |
| #7821 | feat(security): canonical sandbox_policy schema | enhancement | **high** | XL | blocked, needs-author-action |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Risco | Status |
|---|---|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions & transport adapters | 27 | RFC | high | no-stale |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | 21 | RFC | high | no-stale |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture | 21 | RFC | high | no-stale |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding & reply contract | 16 | RFC (accepted) | high | accepted |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem and network restrictions | 15 | RFC (in-progress) | high | in-progress |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class in provider construction | 15 | RFC | high | no-stale |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs | 14 | tracker | medium | no-stale |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Tracker: Session-persistence contract ownership | 14 | tracker | high | no-stale |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction | 12 | RFC | high | no-stale |

### Análise dos Temas

**Arquitetura de runtime e sessão ( dominating ):** A comunidade está profundamente engajada em reformulações de baixo nível. As RFCs #9487 e #9488, ambas de Revision 9, representam a fronteira mais ativa — tratam de propriedade de sessões de conversação e adapters de transporte superfície, com implicações diretas em segurança e multi-canal. A #9600 funciona como tracker de ownership para essas mudanças, reconhecendo que quatro workstreams independentes tocam o mesmo contrato sem dono designado.

**Memória e provedores:** #6850 busca separar política de lifecycle de memória do backend de storage — um problema de governança que afeta todos os gateways e canais.

**Segurança:** #6996 (sandbox granular) e #6909 (computer-use desktop) refletem demanda por isolamento mais forte e capacidades расширенные de interação.

**Processo:** #8692 evidencia que a fila de decisões de maintainers está saturada com RFCs pendentes — há gargalo de revisão.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos / S1-S2)

| # | Título | Severidade | Status | Canal/Componente |
|---|---|---|---|---|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → SIGSEGV após turn tool-heavy | S1 (SIGSEGV) | **CLOSED** | skills/review.rs |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | `forbidden_paths` unreachable sob `allowed_roots` | S1 (security bypass) | **CLOSED** | config/security |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Running SOP jobs sem caminho de cancelamento | S1 (workflow blocked) | **CLOSED** | web dashboard |
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Provedores de transcrição drop language hint — notas de voz em italiano descartadas | S2 | OPEN | provider/transcription, Telegram |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Segunda mensagem durante turn ativo inicia run paralelo — duplicate reply | S2 | OPEN | runtime/daemon, channel:core |
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron manual trigger e read-history check-then-act pós-renome | S2 | OPEN | runtime/cron, domain:security |

### Bugs P2 (Degradados)

| # | Título | Canal/Componente | Status |
|---|---|---|---|
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Telegram reply-threads fragmentam memória em buckets por-thread | Telegram | OPEN |
| [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) | Terminal fallback text ignora live delivery seams | runtime/daemon | OPEN |
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Telegram multi-message mode: cada turn em mensagem separada (feature request) | Telegram | OPEN (in-progress) |

### Análise de Estabilidade

Três bugs P1 críticos foram resolvidos nas últimas 24h (SIGSEGV em skill-review, bypass de forbidden_paths, e falta de cancelamento em SOP). No entanto, dois novos P1s emergiram: bug de race condition em turn paralelo (#10408) e silenciamento de transcrição não-inglesa (#10429) — ambos com severidade S2 mas classificados como P1 por potencial de impacto em produção. O bug de cron (#10324) é um follow-up de #9947, indicando que a correção original pode não ter coberto todos os casos de edge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Destaque

| # | Título | Área | Risco | Tipo |
|---|---|---|---|---|
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | Stream agent-loop tokens via SSE em POST /webhook | gateway | high | feature |
| [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306) | Gate TypeScript web/ em CI + eliminar 75 erros confusos do tsc | CI | high | task |
| [#10195](https://github.com/zeroclaw-labs/zeroclaw/issues/10195) | Schema validators recompilam em cada config resolution — custo evitado | runtime:wasm | high | task |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin architecture — core APIs e typed extension points | runtime:wasm | high | RFC |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | Tracker: SOP milestone — daemon-owned SOP control plane to 5/5 | runtime | high | tracker |

### Sinais de Roadmap

1. **SOP como capability de primeira classe:** O tracker #8288 coordena a chegada de SOP a 5/5 — indicando que SOP ainda não é considerada feature completa.
2. **WASM como plataforma de plugins:** #10076 busca expandir o surface de plugins WASM Component Model, sinalizando investimento em extensibilidade.
3. **Streaming de tokens via SSE:** #10419 endereçaria necessidade de workers (como Path A) receberem tokens em stream em vez de resposta bulk.
4. **CI/CD hardening:** #10306 resolve um problema operacional real — erros TypeScript silenciosos bloqueando onboarding.

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| # | Problema | Evidência |
|---|---|---|
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Notas de voz em italiano são silenciosamente descartadas — não há feedback ao usuário de que a mensagem foi ignorada | Usuário reportou perda funcional de input |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Segunda mensagem durante processamento gera resposta duplicada — confusão para o usuário | Comportamento racing em produção |
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Threads de resposta no Telegram fragmentam o contexto da conversa — agente "esquece" conversas anteriores na mesma sessão | Degradação de memória conversacional |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Erro aleatório de cache com Bedrock Nova 2 Lite — usuário não consegue desabilitar caching via config | Suporte request, CLOSED |

### Cenários de Uso Emergentes

- **Computer-use desktop:** #6909 indica demanda por automação de interação com desktop (captura de tela, input control) — casos de uso beyond chat.
- **Voice/transcrição:** #9740 (VoiceHost WebSocket bridge) e #10429 mostram que integração de audio transcrito é um vetor de crescimento ativo.
- **ZeroCode UX:** #10096 (logs copyable), #10374 (input responsive during reconnect), #10184 (terminal restoration after SIGINT) — melhoria de experiência do developer/operador CLI.

### Satisfação/Insatisfação

A alta participação em RFCs (27+21+21 comentários) e a velocidade de resolução de bugs P1 indicam saúde da comunidade de contribuidores. No entanto, issues como #10429 e #10408 revelam que edge cases em canais (especialmente Telegram) e em concorrência ainda geram fricção para usuários finais. O backlog de RFCs pendentes de decisão (#8692) sugere que contribuidores estão aguardando feedback de maintainers para avançar — potencial gargalo

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*