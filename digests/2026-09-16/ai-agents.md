# Resumo diário do ecossistema de agentes de IA 2026-09-16

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-15 22:38 UTC

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
**Data de referência:** 2026-09-16

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas**: ZeroClaw e Hermes Agent lideram em volume de atividade com 50 issues e 50 PRs atualizados em 24h, demonstrando ciclos de desenvolvimento acelerados com pipeline agressivo de features. NanoBot e CoPaw mantêm atividade saudável e releases regulares (v0.3.5 e 2.2.x respectivamente), equilibrando inovação com estabilidade. PicoClaw, NullClaw e IronClaw indicam períodos de baixa manutenção ou estagnação, com PicoClaw acumulando 5 itens *stale* sem resposta dos mantenedores há 8+ dias. O tema transversal dominante é **hardening de segurança** — desde vulnerabilidades em dependências (body-parser, rumqttc) até bypass de approval gates — sinalizando que o ecossistema amadurece priorizando robustez sobre funcionalidades.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | PRs Fechados | Taxa Fechamento | Saúde |
|---------|-------------|-----------|----------------|--------------|------------------|-------|
| **ZeroClaw** | 50 | 50 | 0 | 3 merged | 6% | 🟡 Acelerado |
| **Hermes Agent** | 50 | 50 | 0 | 6 | 12% | 🔴 Crítico |
| **NanoBot** | 7 | 22 | 1 (v0.3.5) | 12 | 55% | 🟢 Saudável |
| **CoPaw** | 28 | 50 | 0 | 16 | 32% | 🟡 Reativo |
| **PicoClaw** | 2 | 4 | 0 | 1 | 25% | 🔴 Estagnado |
| **NullClaw** | 0 | 0 | 0 | 0 | — | ⚪ Inativo |
| **IronClaw** | 0 | 0 | 0 | 0 | — | ⚪ Inativo |

**Análise:** NanoBot demonstra o melhor equilíbrio entre volume e eficiência (55% de PRs fechados), indicando processo de review maduro. Hermes Agent e ZeroClaw processam alto volume mas com baixa taxa de fechamento — acúmulo de backlog. PicoClaw requer atenção imediata dos mantenedores.

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Posição de Referência

**Vantagens competitivas:**

| Dimensão | NanoBot | Hermes Agent | ZeroClaw | CoPaw |
|----------|---------|--------------|----------|-------|
| **Release cadence** | ✅ Semanal | ⚠️ 1 mês sem release | ⚠️ Sem release | ⚠️ Sem release |
| **Segurança** | ✅ SSRF fix, email hardening | 🔴 body-parser, unsigned tags | 🟡 Em progresso | 🟡 Gateway exposto |
| **Cross-platform** | ✅ 5 plataformas validadas | ⚠️ Desktop instável (Windows) | 🟡 WASM em desenvolvimento | 🟡 Docker issues |
| **Processo** | ✅ 55% close rate | ⚠️ 12% close rate | ⚠️ 6% close rate | 🟡 32% close rate |
| **Comunidade** | 🟡 ~10 contributors | 🟡 Alta (100+ issues) | 🟡 Alta (RFC-heavy) | ✅ Diversificada |

**Diferenças técnicas marcantes:**

- **Hermes Agent:** Foco em MoA (Mixture of Agents) e multi-gateway com Desktop Electron
- **ZeroClaw:** Arquitetura Rust com A2A outbound, WASM plugins e WASI hardware — visão de infrastructure
- **CoPaw:** Paradigma de advisor/worker com DeepSeek V4 Flash e QwenPaw Hub multi-tenant
- **NanoBot:** Unificação terminal/web/mobile via TUI bundling nativo — simplicidade de distribuição

**Tamanho da comunidade:** NanoBot (~10 contributors ativos hoje) opera menor mas mais eficientemente. Hermes Agent e ZeroClaw têm ecossistemas maiores mas fragmentados.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — Prioridade Absoluta

```
┌─────────────────────────────────────────────────────────────────┐
│                    VULNERABILIDADES Cruzadas                     │
├─────────────────────────────────────────────────────────────────┤
│ Hermes Agent: body-parser 1.20.6 (3 advisories npm)           │
│ ZeroClaw:      rumqttc RUSTSEC advisories (TLS stack)         │
│ NanoBot:       SSRF em QQ attachments (corrigido)              │
│ NanoBot:       email authentication hardening                   │
│ Hermes Agent:  File tools bypass approval gate (PR #92155)     │
│ ZeroClaw:      SSRF gate para file_download (PR #10070)        │
│ CoPaw:         HTTP gateway sem auth por default (desde 2026-05)│
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Estabilidade de Agentes — Loops e Timeouts

| Projeto | Bug | Impacto |
|---------|-----|---------|
| **NanoBot** | Dream loops infinitos (1-2h, ~200 tool calls) | P1 — consumo excessivo de recursos |
| **CoPaw** | Spawn subAgent timeout em Windows 2.2.0 | P1 — bloqueio total de multi-agent |
| **Hermes Agent** | Muse-spark termina prematuramente (streaming) | P1 — corrompe output |
| **Hermes Agent** | Backend não respawna após exit unclean (Windows) | P1 — Desktop inoperante |

### 4.3 Integrações e Providers

**Padrão emergente: providers sem API key obrigatória**

| Projeto | Provider | Status |
|---------|----------|--------|
| ZeroClaw | Keenable Web Search (PR #10679) | Open — primeiro sem API key |
| PicoClaw | Keenable Web Search (PR #3370) | Open — mesmo provider |
| NanoBot | aimlapi.com (1000+ modelos) | Open |

A convergência no provider Keenable sinaliza demanda por **baixa barreira de entrada**.

### 4.4 Multi-Agent e Interoperabilidade

- **ZeroClaw:** RFC #9106 A2A outbound client (Phase 1 merged)
- **CoPaw:** Advisor Mode com dual-model workflow (#7569)
- **NanoBot:** Scheduled Dream consolidations
- **Hermes Agent:** Bot Group Chats cross-gateway (#97681)
- **CoPaw:** Multi-agent collaboration trigger keywords (#7737)

---

## 5. Análise de Diferenciação

| Projeto | Foco Principal | Público-Alvo | Arquitetura | Estratégia |
|---------|----------------|--------------|-------------|------------|
| **NanoBot** | Experiência unificada terminal/web/mobile | Desenvolvedores individuais, cross-platform | Python, TUI bundling | Simplicidade de distribuição |
| **Hermes Agent** | Multi-gateway, MoA, Desktop Electron | Usuários enterprise, multi-device | Electron + cron jobs | Ecossistema expanded |
| **ZeroClaw** | A2A interop, WASM plugins, WASI hardware | DevOps, embedded, infra | Rust, modular | Infrastructure-first |
| **CoPaw** | Advisor workflow, Hub multi-tenant | Equipes, analítica self-service | Python, Docker | Colaboração enterprise |
| **PicoClaw** | Mesh P2P, observabilidade | Operadores de rede, edge | Go, SSE | Observabilidade distribuída |

**Divergências críticas:**

- **Hermes Agent** prioriza *features* (MoA, multi-gateway) sacrificando estabilidade (4 P1s ativos, releases unsigned)
- **ZeroClaw** investe em *infraestrutura de longo prazo* (RFC-heavy, WASM, WASI) com backlog de bugs P1
- **NanoBot** equilibra ambos, resultando em melhor health score
- **CoPaw** muda paradigma de "assistente pessoal" para "plataforma enterprise multi-tenant"

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

```
Iteração Rápida (feature-driven):
├── ZeroClaw: 3 PRs merged + 3 closed em 24h (volume)
├── Hermes Agent: 6 PRs closed (variedade)
└── CoPaw: 16 issues fechadas (57% close rate)

Consolidação de Qualidade (stability-focused):
├── NanoBot: Release v0.3.5 com E2E checklist + 12 PRs fechados
└── CoPaw: 11/19 bugs fechados em 24h (triage maduro)

Estagnação:
├── PicoClaw: 5 items stale, 8 dias sem resposta
└── NullClaw/IronClaw: Inativos
```

### Métricas de Maturidade

| Indicador | NanoBot | Hermes Agent | ZeroClaw | CoPaw | PicoClaw |
|-----------|---------|--------------|----------|-------|----------|
| **Release cadence** | ✅ Semanal | ❌ Mensal | ❌ Nenhuma | ❌ Nenhuma | ❌ Nenhuma |
| **Processo formalizado** | ✅ E2E checklist | ⚠️ Parcial | ⚠️ RFC-driven | ⚠️ Parcial | ❌ Informal |
| **Segurança proactive** | ✅ SSRF, email hardening | 🔴 Vulnerabilidades abertas | 🟡 Em progresso | ⚠️ Gateway exposto | ❌ Sem resposta |
| **Bug triage rate** | ✅ Alto | ⚠️ Moderado | ⚠️ Moderado | ✅ Alto | ❌ Negligenciado |
| **Community feedback** | ✅ Issues respondidas | ⚠️ Algumas sem resposta | ✅ RFCs colaborativas | ✅ Engajamento alto | ❌ Silencioso |

---

## 7. Sinais de Tendência

### 7.1 Segurança como Requisito Não-Funcional
O ecossistema converge para **hardening obrigatório**:
- SSRF protection (NanoBot, ZeroClaw)
- Auth gates default-on (CoPaw issue #4037 desde maio)
- Approval bypass prevention (Hermes Agent #92155)
- TLS stack audits (ZeroClaw rumqttc RUSTSEC)

### 7.2 Multi-Agent como Paradigma Emergente
Três de quatro projetos ativos discutem colaboração inter-agentes:

```
NanoBot → Dream scheduled consolidations (intra-agent)
CoPaw   → Advisor/worker + multi-agent keywords
ZeroClaw→ A2A outbound client (interoperability)
Hermes  → Group chats cross-gateway
```

O protocolo **A2A (Agent-to-Agent)** aparece como padrão emergente (ZeroClaw liderando).

### 7.3 Enterprise Transition
**CoPaw e Hermes Agent** sinalizam shift de "assistente pessoal" para "plataforma organizacional":

| Signal | CoPaw | Hermes |
|--------|-------|--------|
| Multi-tenant | QwenPaw Hub v2.2.0 | — |
| Team-wide features | Vault de chaves, governance | Bot Group Chats |
| Billing clarity | — | MoA cost confusion |
| Enterprise auth | — | Unsigned releases desconfiança |

### 7.4 Low-Barrier Providers
Convergência no **Keenable search provider** (ZeroClaw + PicoClaw) indica:
- Demanda por “plug-and-play” sem API keys
- Estratégia de aquisição via experiência de primeira hora
- Pressão competitiva sobre provedores tradicionais (DuckDuckGo)

### 7.5 Rust como Escolha de Infraestrutura
ZeroClaw (Rust) e PicoClaw (Go) representam **linguagens de sistemas** para:
- Performance crítica (streaming, P2P)
- Segurança de memória (evitar RUSTSEC-like issues)
- Deploy em edge/embedded

Python (NanoBot, CoPaw) mantém domínio em flexibilidade e ecossistema de ML.

---

## Recomendações Estratégicas

| Audiência | Recomendação |
|----------|--------------|
| **Desenvolvedores** | Priorizar NanoBot para novos projetos (estabilidade + processo); monitorar ZeroClaw para arquitetura |
| **Empresas** | Evitar Hermes Agent em produção (4 P1s + unsigned releases); CoPaw para analytics teams |
| **Contribuidores** | PicoClaw precisa de mantenedores — oportunidade de impacto alto; ZeroClaw RFCs são хорошая entrada |
| **DevOps** | ZeroClaw WASM/WASI representa próxima geração de deployment |

---

*Relatório gerado em 2026-09-16. Dados consolidados de github.com/nullclaw/nullclaw, github.com/HKUDS/nanobot, github.com/NousResearch/hermes-agent, github.com/sipeed/picoclaw, github.com/nearai/ironclaw, github.com/agentscope-ai/CoPaw, github.com/zeroclaw-labs/zeroclaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-16

---

## 1. Panorama do Dia

O projeto NanoBot demonstra **alta atividade de desenvolvimento** no dia de hoje, com 22 PRs atualizados e 1 nova release (v0.3.5). A equipe concentrou esforços em correções de estabilidade, segurança e UX mobile. O lançamento da versão 0.3.5 marca um marco significativo ao unificar a experiência entre terminal, navegador e apps de chat. Há 7 issues abertas sem resolução, com destaque para bugs críticos relacionados a loops infinitos no Dream e problemas de PWA no iOS.

---

## 2. Lançamentos

### v0.3.5 — 2026-09-15
**Título:** Workbench no Terminal e Continuidade Cross-Platform

**Principais mudanças:**
- Native TUI bundled nos platform wheels para instalação via PyPI
- Experiência unificada: `nanobot` (terminal) e `nanobot webui` (navegador)
- End-to-end release checklist para cinco plataformas
- Suporte a 5 plataformas com validação de checksums e arquitetura

**Breaking Changes:** Nenhum identificado.

**Notas de Migração:** Nenhuma migração necessária. A mudança para bundling nativo beneficia instalações PyPI existentes.

**Links:**
- [Release v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)
- [PR #5785 - chore(release): prepare v0.3.5](https://github.com/HKUDS/nanobot/pull/5785)
- [PR #5787 - build: bundle native TUI in platform wheels](https://github.com/HKUDS/nanobot/pull/5787)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (12 total)

| PR | Autor | Título | Impacto |
|---|---|---|---|
| [#5787](https://github.com/HKUDS/nanobot/pull/5787) | Re-bin | Build: bundle native TUI | Elimina necessidade de GitHub download ou Bun para instalar TUI |
| [#5785](https://github.com/HKUDS/nanobot/pull/5785) | Re-bin | Release v0.3.5 preparation | Versionamento e checklist automatizado |
| [#5786](https://github.com/HKUDS/nanobot/pull/5786) | chengyongru | Refactor WebUI: animate segmented control | UI mais fluida com indicador animado e suporte a reduced-motion |
| [#5783](https://github.com/HKUDS/nanobot/pull/5783) | wzrayyy | Fix providers: preserve assistant content with tool calls | Corrige perda de contexto em mensagens com tool_calls |
| [#5778](https://github.com/HKUDS/nanobot/pull/5778) | Re-bin | Fix email: require trusted authentication | Hardening de segurança para verificação de remetentes |
| [#5775](https://github.com/HKUDS/nanobot/pull/5775) | chengyongru | Fix tools: scope file-read dedup to model context | Deduplicação de reads mais inteligente |
| [#5774](https://github.com/HKUDS/nanobot/pull/5774) | chengyongru | Fix memory: recover archive tool calls | Recuperação de tool calls antes do fallback RAW |
| [#5774](https://github.com/HKUDS/nanobot/pull/5774) | chengyongru | Fix memory: recover archive tool calls | Recuperação de tool calls antes do fallback RAW |
| [#5757](https://github.com/HKUDS/nanobot/pull/5757) | beemines | Fix session: search older pages of persisted history | Corrige busca em conversas longas no WebUI |
| [#5768](https://github.com/HKUDS/nanobot/pull/5768) | hammerhoundai | Fix Feishu: use /page/cli verification URL | Resolve QR onboarding quebrado desde v0.3.0 |
| [#5697](https://github.com/HKUDS/nanobot/pull/5697) | KDB-Wind | Fix QQ: protect inbound attachment downloads from SSRF | **Segurança crítica** para URLs de anexos não-confiáveis |
| [#5728](https://github.com/HKUDS/nanobot/pull/5728) | chengyongru | Perf: reduce streaming text processing | Melhoria de performance em streaming e CLI classic |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade

| Issue | Título | Comentários | Reações | Link |
|---|---|---|---|---|
| #5781 | Dream loops 1-2h, maxIterations deprecated | 2 | 0 | [Issue #5781](https://github.com/HKUDS/nanobot/issues/5781) |
| #5784 | QQ compaction notices as standalone messages | 1 | 0 | [Issue #5784](https://github.com/HKUDS/nanobot/issues/5784) |
| #5674 | Agent stops on Nvidia NIM timeout errors | 1 | 0 | [Issue #5674](https://github.com/HKUDS/nanobot/issues/5674) |

**Análise:** A comunidade reporta dois problemas críticos:
1. **Loops infinitos no Dream** — Scheduled consolidations rodam 25-111 minutos com até ~200 tool calls, alternando entre os mesmos arquivos. O setting `dream.maxIterations` está marcado como deprecated mas ignorado.
2. **Notifications de compaction no QQ** — Mensagens de compressão de contexto aparecem como chat normal ao usuário, gerando ruído.

### PRs Abertos com Potencial Impacto

| PR | Título | Labels | Link |
|---|---|---|---|
| #5666 | Add aimlapi.com as provider | provider, feature, new-provider | [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) |
| #5626 | Add copy_file and move_file tools | tools, feature | [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) |
| #5748 | Persist partial tool progress at batch boundaries | bug, fix, priority:p2 | [PR #5748](https://github.com/HKUDS/nanobot/pull/5748) |

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Alta Severidade (P1)
| Issue | Descrição | Link |
|---|---|---|
| #5674 | Agent para de funcionar quando Nvidia NIM retorna timeout de 300s ou 600s | [Issue #5674](https://github.com/HKUDS/nanobot/issues/5674) |

#### 🟡 Média Severidade (P2)
| Issue | Descrição | Link |
|---|---|---|
| #5781 | Dream runs loops de 1-2h, dream.maxIterations ignorado | [Issue #5781](https://github.com/HKUDS/nanobot/issues/5781) |
| #5784 | QQ: notificações de compaction como mensagens standalone | [Issue #5784](https://github.com/HKUDS/nanobot/issues/5784) |

#### 🟢 Baixa Severidade / UX
| Issue | Descrição | Link |
|---|---|---|
| #5773 | PWA cold start mostra tela branca prolongada | [Issue #5773](https://github.com/HKUDS/nanobot/issues/5773) |
| #5772 | WebUI "washed out" no topo em iOS PWA standalone | [Issue #5772](https://github.com/HKUDS/nanobot/issues/5772) |
| #5771 | Session list requer dois toques no mobile | [Issue #5771](https://github.com/HKUDS/nanobot/issues/5771) |
| #5770 | Sidebar mobile foca no search button automaticamente | [Issue #5770](https://github.com/HKUDS/nanobot/issues/5770) |

**Ameaça à Estabilidade:** O bug #5781 é particularmente preocupante para ambientes de produção com scheduled Dream consolidations, podendo causar consumo excessivo de recursos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| PR/Issue | Feature | Status | Link |
|---|---|---|---|
| #5666 | **aimlapi.com como provider** — gateway OpenAI-compatible com 1000+ modelos | Aberta | [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) |
| #5626 | **copy_file e move_file** — primitivas de filesystem ausentes | Aberta (conflict) | [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) |
| #5750 | **Stable per-invocation tool context** — ContextVar para ferramentas | Aberta | [PR #5750](https://github.com/HKUDS/nanobot/pull/5750) |
| #5776 | **Search em provider pickers** — combobox com busca | Aberta | [PR #5776](https://github.com/HKUDS/nanobot/pull/5776) |

### Potencial Próxima Versão (v0.3.6?)
- Correção do bug de loops no Dream (PR #5782 em aberto)
- Serialização de writes concorrentes (PR #5779 em aberto)
- Search em configurações de providers

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Instabilidade em loops prolongados** (Issue #5781)
   - *"Scheduled Dream consolidation runs turn into very long agent loops (25–111 minutes each, up to ~200 tool calls)"*
   - Impacto: Alto — consumo de recursos e frustração em automações

2. **Ruído de notificações em canais QQ** (Issue #5784)
   - *"Lifecycle notices show up as ordinary chat messages to my user"*
   - Impacto: Médio — poluição de conversas

3. **Problemas de PWA mobile** (Issues #5773, #5772, #5771, #5770)
   - Blank screen, washed out, double-tap, focus incorreto
   - Impacto: Médio — experiência degradada em iOS

4. **Timeouts em provedores Nvidia NIM** (Issue #5674)
   - *"The agent stops working because nanobot thinks it's the model output"*
   - Impacto: Alto — quebra de funcionalidade

### Sinais Positivos
- Equipe responde rapidamente a issues (todas criadas/atualizadas 2026-09-15)
- 12 PRs fechados em 24h demonstra ciclo de review saudável
- Community contributions em segurança (SSRF fix, email hardening)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Criada | Status | Link |
|---|---|---|---|
| #5674 | 2026-09-05 | Aberta (11 dias) | [Issue #5674](https://github.com/HKUDS/nanobot/issues/5674) |
| #5626 | 2026-09-01 | Aberta com conflict | [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) |

### PRs Bloqueados ou com Conflict

| PR | Issue Bloqueada | Link |
|---|---|---|
| #5626 | copy_file/move_file tools | [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) |
| #5779 | Serialização de writes | [PR #5779](https://github.com/HKUDS/nanobot/pull/5779) |

### Priorização Recomendada
1. **Crítico:** Corrigir loops infinitos do Dream (#5781 / PR #5782)
2. **Alta:** Resolver timeouts do Nvidia NIM (#5674)
3. **Média:** Revisar PR #5626 para adicionar primitives de filesystem
4. **Média:** Adicionar aimlapi.com como provider (#5666)

---

## Métricas do Dia

| Métrica | Valor |
|---|---|
| Issues ativas | 7 |
| PRs atualizados | 22 |
| PRs abertos | 10 |
| PRs merged/fechados | 12 |
| Releases | 1 (v0.3.5) |
| Contributors hoje | ~10+ |

---

*Relatório gerado em 2026-09-16. Dados extraídos das últimas 24h do repositório HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-16

## 1. Panorama do Dia

O Hermes Agent mantém alta atividade comunitária com 50 issues e 50 PRs atualizados nas últimas 24h, embora nenhuma release tenha sido publicada. A base de código apresenta múltiplas vulnerabilidades de segurança pendentes (especialmente no WhatsApp bridge e lockfile handling) e bugs de estabilidade críticos afetando Desktop (Windows) e agent sessions. A taxa de fechamento de issues está moderada (15/50 fechadas), com vários bugs P1 reportados nas últimas 48h relacionados a corrupções de estado e falhas de streaming. A comunidade demonstra preocupação crescente com unsigned release tags desde agosto.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A ausência de releases recentes coincide com uma questão aberta da comunidade: as release tags não são assinadas desde `v2026.8.13`, levantando dúvidas se é intencional ou se houve perda de chave de assinatura. Issue: [#87948](https://github.com/NousResearch/hermes-agent/issues/87948)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente
| PR | Título | Impacto |
|----|--------|---------|
| [#112315](https://github.com/NousResearch/hermes-agent/pull/112315) | fix(buzz): WebSocket reconecta dentro de idle bound | Estabilidade Buzz platform |
| [#112197](https://github.com/NousResearch/hermes-agent/pull/112197) | fix(packaging): wheel instala WhatsApp bridge corretamente | Instalação wheel-based |
| [#112205](https://github.com/NousResearch/hermes-agent/pull/112205) | fix(platforms): QR fallback instala qrcode via uv | Onboarding multiplataforma |
| [#111195](https://github.com/NousResearch/hermes-agent/pull/111195) | fix(account-usage): honra timezones de perfil | Precisão de relatórios de uso |
| [#111676](https://github.com/NousResearch/hermes-agent/pull/111676) | fix(kanban): rejeita worktrees não-ancorados | Integridade kanban |
| [#112360](https://github.com/NousResearch/hermes-agent/pull/112360) | fix(moa): preserva cache routing do Nous aggregator | Eficiência MoA |

**Avanços em segurança:**
- [#112398](https://github.com/NousResearch/hermes-agent/pull/112398): Remove pin vulnerável do body-parser, atualiza express
- [#94826](https://github.com/NousResearch/hermes-agent/pull/94826): Mask Unicode-glued Bearer residue on egress

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 104 | **Bloqueio de integração automatizada Nous→Enterkey** — merge conflitos em `cron/jobs.py`, sem release branch atualizado |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 28 | **Bot Group Chats devem funcionar após Desktop fechar** — feature request multi-gateway com alta demanda |
| [#103483](https://github.com/NousResearch/hermes-agent/issues/103483) | 14 | **Muse Spark termina mid-task** com finish_reason=stop e palavra aleatória final (P1, streaming) |
| [#112359](https://github.com/NousResearch/hermes-agent/issues/112359) | 3 | **MoA UX: cobrança do aggregator não é clara** — usuários esperam cobrança no Codex mas é no modelo agregador |

### Análise de Demandas
- **Integração e automação**: Blockers em cron jobs e integrações externo (Nous/Enterkey)
- **Multi-device/session**: Forte demanda por continuidade de sessões entre dispositivos
- **Faturamento e custos**: Confusão sobre modelo de custos em MoA (Mixture of Agents)
- **Segurança de supply chain**: Preocupação com unsigned releases e dependências desatualizadas

---

## 5. Bugs e Estabilidade

### P1 — Críticos (Impacto em Produção)

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #103483 | agent, streaming | Muse-spark termina prematuramente com palavra aleatória final | [#103483](https://github.com/NousResearch/hermes-agent/issues/103483) |
| #111761 | agent, session | Reasoning é promovido para conteúdo do assistant em clean stop | [#111761](https://github.com/NousResearch/hermes-agent/issues/111761) |
| #112344 | desktop, Windows | Backend não respawna após exit unclean — Desktop roda sem engine por horas | [#112344](https://github.com/NousResearch/hermes-agent/issues/112344) |
| #111996 | agent, sessions | Histórias multiplicadas após falha de compactação | [#111996](https://github.com/NousResearch/hermes-agent/issues/111996) |

### P2 — Significativos

| Issue | Componente | Descrição | Link |
|-------|------------|-----------|------|
| #111949 | ssh, desktop | SSH mode quebra com zsh como login shell | [#111949](https://github.com/NousResearch/hermes-agent/issues/111949) |
| #111272 | cli, gateway | `fleet_restart_pending` marker falso após update | [#111272](https://github.com/NousResearch/hermes-agent/issues/111272) |
| #108200 | bedrock | Text deltas após toolUse ficam desordenados | [#108200](https://github.com/NousResearch/hermes-agent/issues/108200) |
| #88274 | cli, Windows | ImportError em `hermes update` no Windows | [#88274](https://github.com/NousResearch/hermes-agent/issues/88274) |
| #102198 | gateway | SQLite page 0 corrompida após SIGTERM | [#102198](https://github.com/NousResearch/hermes-agent/issues/102198) |
| #98647 | desktop, auth | 401 do WS-ticket mint reportado como "Could not reach gateway" | [#98647](https://github.com/NousResearch/hermes-agent/issues/98647) |

### Vulnerabilidades de Segurança

| Issue | Severidade | Descrição | Link |
|-------|------------|-----------|------|
| #112382 | Moderate | body-parser 1.20.6 vulnerável — 3 advisories npm survivem | [#112382](https://github.com/NousResearch/hermes-agent/issues/112382) |
| #112378 | High | Lockfile revert causa desync e crash permanente | [#112378](https://github.com/NousResearch/hermes-agent/issues/112378) |
| #92155 (PR) | High | File tools podem bypassar approval gate | [#92155](https://github.com/NousResearch/hermes-agent/pull/92155) |

### Bugs Recentemente Fechados
- [#111996](https://github.com/NousResearch/hermes-agent/issues/111996): Bug de multiplicação de histórico (closed)
- [#111774](https://github.com/NousResearch/hermes-agent/issues/111774): Prompt-cache marker cobre apenas tier estável (closed)
- [#111568](https://github.com/NousResearch/hermes-agent/issues/111568): SQLite race condition em ResponseStore (closed)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Alta Demanda

| Issue | P | Descrição | Link |
|-------|---|-----------|------|
| #97681 | P2 | Bot Group Chats cross-gateway com Desktop fechado | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) |
| #38280 | P3 | **Agent Economic Layer** — wallet nativo, registro de serviços, reputation ledger | [#38280](https://github.com/NousResearch/hermes-agent/issues/38280) |
| #55811 | P3 | Runtime-enforced capability contracts para execução de tools de alto risco | [#55811](https://github.com/NousResearch/hermes-agent/issues/55811) |
| #77146 | P3 | Upgrade Electron 40.10.2 → 43.2.0 para Desktop | [#77146](https://github.com/NousResearch/hermes-agent/issues/77146) |
| #112359 | Feature | MoA: clarificar que aggregator é quem é cobrado | [#112359](https://github.com/NousResearch/hermes-agent/issues/112359) |

### Indicadores de Prioridade de Roadmap
- **Desktop experience**: Múltiplos bugs e features (P2-P3) indicam foco em estabilidade do Electron app
- **Segurança de dependências**: Múltiplos PRs de segurança em andamento
- **MoA (Mixture of Agents)**: Issues de cache, billing e UX em paralelo com PRs de fix

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Feedback | Issues |
|-----------|----------|--------|
| **Estabilidade Windows** | Desktop fica "morto" por horas, backend não respawna | [#112344](https://github.com/NousResearch/hermes-agent/issues/112344), [#88274](https://github.com/NousResearch/hermes-agent/issues/88274) |
| **Confusão de custos** | Usuários não entendem modelo de cobrança em MoA | [#112359](https://github.com/NousResearch/hermes-agent/issues/112359), [#112358](https://github.com/NousResearch/hermes-agent/issues/112358) |
| **Integridade de sessão** | Histórico multiplicado, reasoning vazado, state.db corrompido | [#111761](https://github.com/NousResearch/hermes-agent/issues/111761), [#111996](https://github.com/NousResearch/hermes-agent/issues/111996), [#102198](https://github.com/NousResearch/hermes-agent/issues/102198) |
| **Segurança de releases** | Tags não assinadas causam desconfiança na comunidade | [#87948](https://github.com/NousResearch/hermes-agent/issues/87948) |
| **Integração WhatsApp** | Dependência body-parser vulnerável persiste | [#112382](https://github.com/NousResearch/hermes-agent/issues/112382) |

### Cenários de Uso Destacados
- **Multi-gateway bot collaboration**: Usuários querem criar group chats onde bots em gateways diferentes colaboram e sessions persistem sem Desktop aberto
- **Codex + MoA**: Usuários com assinatura Codex esperam que runs sejam cobrados como Codex, não como modelo agregador
- **Docker + Windows**: Path handling quebrado em configurações cross-platform

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Longa Espera

| Issue | Tempo | Prioridade | Descrição | Link |
|-------|-------|------------|-----------|------|
| #38280 | ~3 meses | P3 | Agent Economic Layer — proposta antiga sem decisão | [#38280](https://github.com/NousResearch/hermes-agent/issues/38280) |
| #87948 | ~1 mês | P2 | Release tags unsigned — decisão de manutenção pendente | [#87948](https://github.com/NousResearch/hermes-agent/issues/87948) |
| #77146 | ~1.5 meses | P3 | Electron upgrade pendente de decisão | [#77146](https://github.com/NousResearch/hermes-agent/issues/77146) |
| #88584 | ~1 mês | P3 | Nous integration bloqueada — merge em deadlock | [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) |

### PRs com Atenção Necessária

| PR | Status | Descrição | Link |
|----|--------|-----------|------|
| #92155 | Open | **Security**: File tools bypass approval — merge prioritário | [#92155](https://github.com/NousResearch/hermes-agent/pull/92155) |
| #112398 | Open | **Security**: Remove body-parser pin vulnerável | [#112398](https://github.com/NousResearch/hermes-agent/pull/112398) |
| #112383 | Open | **Security**: Bump body-parser para 1.20.8 (alternativo) | [#112383](https://github.com/NousResearch/hermes-agent/pull/112383) |

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Issues abertas/fechadas (24h) | 35/15 (30% close rate) | ⚠️ Moderada |
| PRs abertos/fechados (24h) | 44/6 (12% close rate) | ⚠️ Baixa |
| Bugs P1 ativos | 4 | 🔴 Crítico |
| Vulnerabilidades abertas | 2+ | 🔴 Crítico |
| Releases (30d) | Nenhuma desde ~13/08 | ⚠️ Atenção |
| Tempo médio de resposta | ~24h | ✅ Saudável |

**Recomendação**: Priorizar merge dos PRs de segurança (#92155, #112398/112383) e resolução dos bugs P1 de Desktop/Windows e session integrity antes da próxima release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-16

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24h, com 2 issues e 4 PRs atualizados. A única PR fechada (#3380) trouxe melhorias significativas de **observabilidade na mesh P2P**, marcando progresso concreto. Contudo, todos os itens abertos estão marcados como *stale*, sugerindo **baixa resposta dos mantenedores** nas últimas semanas. As issues em aberto apontam para bugs críticos — incluindo race condition e perda silenciosa de dados — que demandam atenção prioritária para garantir a estabilidade da próxima release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde a última atualização. O backlog de PRs abertas (especialmente correções de bugs) indica que uma nova versão pode estar próxima, mas a ausência de comunicados oficiais sugere que a decisão de release ainda não foi tomada.

---

## 3. Progresso do Projeto

### PR Fechada/Mergida

| # | Título | Impacto |
|---|--------|---------|
| [#3380](https://github.com/sipeed/picoclaw/pull/3380) | `feat(mesh): observability — peer conns/score/bandwidth, activity feed, SSE events (Track 63)` | **Alto** — Adiciona telemetria detalhada para a camada mesh, incluindo `PeerStatus` com métricas de conexão, latência e score; integra `BandwidthReporter` com `BandwidthCounter`; implementa activity feed e eventos SSE para monitoramento em tempo real. |

**Conclusão:** A PR #3380 representa um avanço significativo em **observabilidade**, alinhando o PicoClaw com padrões de produção para sistemas distribuídos.

### PRs em Aberto

| # | Título | Status |
|---|--------|--------|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | `fix(config): guard lazy sensitive-data cache against concurrent init` | Aprovada pelo autor como correção da race condition #3374 |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | `fix(config): make the reaction tool configurable` | Corrige caminho de configuração da ferramenta reaction |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | `feat(tools): add Keenable web search provider` | Adiciona provedor de busca com endpoint público (sem API key obrigatória) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

As 2 issues abertas foram criadas em **2026-09-08** e atualizadas em **2026-09-15**, acumulando **1 comentário cada**. Nenhuma recebeu 👍 da comunidade ainda, indicando que são problemas técnicos internos em vez de dores generalizadas dos usuários.

**Análise:**
- **#3374 (Data race):** Bug crítico de concorrência em `pkg/config/security.go`. O `sync.Once` interno é ineficaz porque a criação do cache (`SensitiveDataCache`) não é sincronizada. Afeta confiabilidade em ambientes multi-goroutine.
- **#3373 (Silent data loss):** Perda silenciosa de `api_keys` em modelos com múltiplas chaves durante `LoadConfig → SaveConfig`. Mantém referência inválida em `fallbacks`. **Severidade alta** — pode causar indisponibilidade de modelos em produção.

---

## 5. Bugs e Estabilidade

### Issues Abertas (2)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | **Crítica** | Race condition em `Config.initSensitiveCache` pode retornar `nil` replacer e causar panic em `FilterSensitiveData`. Envolve código de segurança/credenciais — risco de vazamento ou crash. |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | **Alta** | `SaveConfig` descarta silenciosamente `api_keys` excedentes e deixa `fallbacks` órfãos. Resulta em config corrompida e modelos inacessíveis. |

### Análise

Ambos os bugs estão **sem resposta dos mantenedores** desde 2026-09-08 (8 dias sem interação). A PR [#3375](https://github.com/sipeed/picoclaw/pull/3375) já propunha correção para #3374, mas aguarda merge. **Recomendação:** Priorizar revisão e merge das correções antes de qualquer release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertas com Features

| # | Feature | Relevância |
|---|---------|------------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **Keenable Web Search Provider** | Alta — Integração com serviço que funciona **sem API key** no endpoint público (`/v1/search/public`). Reduz barreira de entrada para novos usuários. |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | **Reaction Tool Configurável** | Média — Corrige bug de configuração, mas também sinaliza que a arquitetura de tools precisa de padronização. |

### Sinais de Roadmap

A existência da tag `Track 63` na PR #3380 sugere um **sistema de tracks/trações** no roadmap. Observabilidade parece ser uma prioridade atual. A adição do provedor Keenable indica estratégia de **expansão de integrações** com baixa barreira de uso.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback direto.** Nenhuma das issues ou PRs contém comentários de usuários finais — apenas do autor original (sting8k). Isso indica:

1. **Comunidade de desenvolvedores ativa, mas silenciosa** — Issues técnicas são reportadas por contribuidores, não por usuários finais.
2. **Baixa visibilidade de bugs para usuários** — É possível que a race condition (#3374) e a perda de dados (#3373) afetem usuários em produção, mas não há relatos.

**Recomendação:** Considerar canais alternativos de feedback (Discord, fóruns) para capturar dores de usuários que não abrem issues no GitHub.

---

## 8. Backlog que Merece Atenção

### Items "Stale" Sem Resposta dos Mantenedores

| # | Tipo | Idade | Prioridade |
|---|------|-------|------------|
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Bug | 8 dias | **Crítica** |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | Bug | 8 dias | **Alta** |
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | Fix (pr) | 8 dias | **Crítica** |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | Fix (pr) | 8 dias | **Média** |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Feature | 9 dias | **Média** |

### Análise

Todos os 5 items abertos foram **criados há 8-9 dias** e marcados *stale* sem interação dos mantenedores. O projeto parece estar em um **período de baixa atividade de manutenção**, o que pode impactar a confiança da comunidade.

**Ações recomendadas:**
1. **Revisar e merge da PR #3375** — Corrige bug crítico de race condition.
2. **Analisar e responder à PR #3370** — Keenable provider tem potencial de crescimento de adoção.
3. **Estabelecer SLA de resposta** — Mesmo um comentário inicial ("we're looking into it") reduziria a percepção de abandono.

---

## Métricas Consolidada (2026-09-16)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/atualizadas (24h) | 2 |
| PRs abertas/atualizadas (24h) | 3 |
| PRs fechadas/merged (24h) | 1 |
| Novas releases | 0 |
| Items stale sem resposta | 5 |
| Bugs críticos em aberto | 1 |
| Bugs altos em aberto | 1 |

---

*Relatório gerado automaticamente com base em dados públicos do GitHub (github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 16/09/2026

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) manteve alta atividade em 16/09/2026, com **28 issues e 50 PRs** atualizados nas últimas 24 horas. A equipe demonstrou responsiveness sólido no triage de bugs, com 16 das 28 issues fechadas. O ecossistema segue em evolução acelerada, impulsionado por contribuições recentes da comunidade — incluindo PRs de primeira viagem e revisõesunder review. O principal tema do dia gira em torno do **QwenPaw Hub multi-tenant** (v2.2.0), que mobilizou 27 comentários na issue #7318. Bugs críticos relacionados a subagents e timeout persistem como pontos de atenção, enquanto features como Advisor Mode e integrações com DeepSeek V4 Flash avançam no pipeline de merge.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

- O último ciclo de releases concentrou-se nas versões 2.2.0 e 2.2.1, ambas comissues abertas. A versão 2.2.1 é a mais recente estável disponível, mas ainda apresenta bugs documentados em aberto (ver seção 5).
- A versão 2.2.0 introduziu o QwenPaw Hub, que agora está sendo expandida com o modelo multi-tenant planejado para 2.2.0+.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (25 das 50 atualizadas)

| PR | Título | Impacto |
|----|--------|---------|
| [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) | fix(skills): expand multi-agent collaboration trigger keywords | Melhora detecção de intenções colaborativas |
| [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | feat(providers): add DeepSeek V4 Flash capabilities | Adiciona suporte a 1M tokens e image input |
| [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) | fix(mcp): preserve decoded HTTP error responses | Resolve #7716 — conexões MCP em servidores Java |
| [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) | fix(agents): diagnose dropped subagent model overrides | Diagnóstico de falha silenciosa em subagents |
| [#7759](https://github.com/agentscope-ai/QwenPaw/pull/7759) | fix(console): restore visible link focus indicators | Acessibilidade no console web |
| [#7758](https://github.com/agentscope-ai/QwenPaw/pull/7758) | fix(console): align embedding timeout validation | Validação de timeout de embedding (0-300s) |
| [#7756](https://github.com/agentscope-ai/QwenPaw/pull/7756) | fix(memory): distinguish empty error notifications | Diferenciação de notificações de erro vazias |

### PRs em Pipeline (Under Review / Abertas)

- [#7796](https://github.com/agentscope-ai/QwenPaw/pull/7796) — fix(agents): diagnose dropped subagent model overrides *(primeira contributor)*
- [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) — feat(modes): add Advisor Mode *(loop com modelo advisor + worker)*
- [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) — feat(hub): model gateway, member governance e usage dashboard
- [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) — QwenPaw-Data app 0.3.0 (workflow analítico completo)
- [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) — feat(console): unified chat workbench shell
- [#7791](https://github.com/agentscope-ai/QwenPaw/pull/7791) — feat(mail): suporte IMAP/SMTP custom servers
- [#7789](https://github.com/agentscope-ai/QwenPaw/pull/7789) — feat(proj dir): multi-folder workspaces configuráveis
- [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) — fix(agents): PDF blocks em OpenAI chat-completions (resolves #7689)
- [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) — fix(browser): self-heal dead Playwright driver connections

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub multi-tenant — o que construir na 2.2.0 | **27** | Discussion |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent — tarefas falham com timeout | 7 | Bug |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Stop button não para execução real | 7 | Bug |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker: browser_use falha com dbus error | 6 | Bug |

### Análise dos Demandas

**Hub Multi-tenant (#7318):** A comunidade demonstra forte interesse em evoluir o QwenPaw de assistente pessoal para solução multi-usuário. O roadmapproposto para 2.2.0 inclui:
- Gateway centralizado de modelos para organizações
- Governança de membros e dashboard de uso
- Vault para chaves de provedores (evitando exposição)

**Multi-Agent Collaboration:** Pelo menos 2 PRs resolvendo keywords de gatilho para colaboração entre agentes (#7737 closed, #7795 open), indicando maturidade crescente do paradigma.

**Custom Mail Servers (#7791):** Demanda de self-hosted mail (IMAP/SMTP) sinaliza que usuários enterprise buscam alternativas aos provedores built-in.

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas Últimas 24h

| Severidade | # | Título | Status |
|------------|---|--------|--------|
| **Crítica** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent — todas tarefas falham com timeout | OPEN |
| **Crítica** | [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | WeChat audio/video vira file:// URLs → 400 BadRequest na API | OPEN |
| **Alta** | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Stop button visual para mas execução continua | OPEN |
| **Alta** | [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF blocks em multimodal OpenAI endpoints (resolvido em #7636) | OPEN |
| **Alta** | [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | Cloud/NFS: file browser congela processo 5-6 min | OPEN |
| **Alta** | [#7775](https://github.com/agentscope-ai/QwenPaw/issues/7775) | max_iters: sem warning final e sem resposta | OPEN |
| **Média** | [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | Console: stale blob em 2ª imagem, cron misfire, on_acting não dispara | OPEN |
| **Média** | [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771) | Compactação de contexto gera labels vazios | OPEN |
| **Média** | [#7743](https://github.com/agentscope-ai/QwenPaw/issues/7743) | Hub mode: preview de arquivos retorna 401 Unauthorized | CLOSED |
| **Média** | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP não conecta após upgrade 2.2.x (resolvido em #7735) | CLOSED |
| **Baixa** | [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Thinking bubble infinito após resposta (SSE stream) | CLOSED |
| **Baixa** | [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | Skills channel list incompleto | CLOSED |

### Avaliação de Estabilidade

**Regression Alert:** O upgrade para 2.2.x quebrou conectividade MCP em alguns servidores Java/Kotlin (#7716, corrigido). Issues com spawn subAgent e timeout (#7678) indicam possível regressão no engine de agents. A taxa de fechamento de bugs (11/19 bugs closed nas últimas 24h) demonstra maturidade no processo de triage.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Potencial

| # | Título | Usos / Relevância |
|---|--------|-------------------|
| [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778) | Chamar ferramentas via "//" (similar a "/" para skills) | Usabilidade — 2👍 |
| [#7780](https://github.com/agentscope-ai/QwenPaw/issues/7780) | Mesma feature, duplicada por outro autor | Confirmação de demanda |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | Histórico de conversas na **direita** | UI mobile/notebook 14" |
| [#7744](https://github.com/agentscope-ai/QwenPaw/issues/7744) | Cards de arquivo na resposta (não em tool steps) | UX — arquivos anexados |
| [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | Update em background com notificação | Disponibilidade durante upgrades |
| [#7777](https://github.com/agentscope-ai/QwenPaw/issues/7777) | Detalhe: suporte a "//" para MCP tools | Consolidação UX |
| [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | Model failover: onde configurar? | Documentação/UX |
| [#7768](https://github.com/agentscope-ai/QwenPaw/issues/7768) | GitHub account binding: requisitos de atividade | Onboarding enterprise |

### Sinais de Roadmap

- **Advisor Mode** (#7569): Paradigma de dual-model workflow em revisão
- **QwenPaw Hub multi-tenant** (#7318, #7779): Gateway organizacional com governança
- **DeepSeek V4 Flash** (#7794): 1M token context window em produção
- **QwenPaw-Data 0.3.0** (#7637): Workflow analítico self-service

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Spawn SubAgent quebrado (#7678):** Usuários Windows 2.2.0 não conseguem executar tarefas com subagents — todas falham em timeout mesmo com configurações estendidas. Impacto: bloqueio completo de workflowsmulti-agent.

2. **Stop button enganoso (#7567):** Interface mostra que a tarefa parou, mas a execução continua em background. Resulta em conflitos de 409 ao enviar correção.

3. **Docker/browser_use (#5872):** Usuários que rodam em containers enfrentam dbus errors ao usar browser automation. Afeta pipelines CI/CD e deployments cloud.

4. **Hub file preview 401 (#7743):** Admin do Hub não consegue visualizar arquivos enviados pelo agent — token de autenticação não é propagado no link de preview.

5. **Cloud/NFS freeze (#7786):** Usuários cloud container experimentam freezes de 5-6 minutos ao abrir o file browser. Impede workflows de coding.

### Cenários de Uso Observados

- **Multi-tenant enterprise:** Demandas recorrentes por solução team-wide (não apenas pessoal)
- **Self-hosted mail:** Usuários querem IMAP/SMTP custom (não só provedores built-in)
- **Workflow analítico:** QwenPaw-Data 0.3.0 visa democratizar queries SQL via chat
- **Coding agent:** File browser, workspaces multi-folder e terminal integrado em alta demanda

### Satisfação Geral

Tendencia positiva na evolução do ecossistema (Advisor Mode, Hub multi-tenant, DeepSeek V4 Flash), porém bugs críticos em 2.2.x (spawn, timeout, MCP) geram frustração. A taxa de resolução (57% das issues fechadas em 24h) indica boa responsiveness da equipe.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Em Espera

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | HTTP gateway sem autenticação por default | 2026-05-04 | 2 | **Segurança** |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | Playwright self-heal driver (open desde 08/07) | 2026-08-07 | 0 comments | Estabilidade |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI config panel (open desde 23/07) | 2026-07-23 | 0 comments | Feature |
| [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | Model failover config location unclear | 2026-09-14 | 4 | Documentação |
| [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) | Channel params para MCP tools (2 semanas) | 2026-09-09 | 2 | Integração |
| [#7768](https://github.com/agentscope-ai/QwenPaw/issues/7768) | GitHub binding activity requirements | 2026-09-14 | 1 | Onboarding |

### Items Críticos para Priorização

1. **Segurança (#4037):** Gateway expõe `execute_shell_command` sem autenticação por default — necessidade de configurar `QWENPAW_AUTH_ENABLED` explicitamente.

2. **Playwright driver (#6776):** Driver morre permanentemente após primeira falha — self-heal aguardareview há 40+ dias.

3. **Spawn SubAgent (#7678):** Bloqueio total de feature core em Windows 2.2.0 — possivelmente relacionado a #7680 e #7796.

4. **MCP Java/Kotlin (#7729):** Servidores MCP Java usam envelope `jsonRpcError` não-padrão — já resolvido em PR masissue pai ainda aberta.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-16. Todas as referências de issues e PRs apontam para https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-16

## 1. Panorama do Dia

O projeto ZeroClaw manteve altíssima atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**. A atividade concentra-se em desenvolvimento de features arquiteturais (RFCs de A2A outbound, WASM plugins, WASI hardware), correções de bugs críticos de imagens/caching no provider Anthropic, e endurecimento de testes paralelos. Não houve releases novas. A comunidade demonstra forte engajamento com 3 PRs mergeados, 3 fechados, e diversas issues de alta prioridade (p1) em andamento simultaneamente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto segue em ritmo intenso de desenvolvimento sem interrupção para versionamento, indicando possível fase de acumulação de features para uma futura v0.9.x.

---

## 3. Progresso do Projeto

Três PRs merged/fechados hoje com impacto direto:

| # | PR | Tamanho | Impacto |
|---|-----|---------|---------|
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | `feat(a2a): outbound client config, shared wire-model, tools` | XL | **Phase 1 do A2A outbound client** — 4 tools a2a_* em zeroclaw-tools, modelo wire A2A v1.0 em zeroclaw-api, e bloco `[a2a.client]` default-closed. Avanço concreto do RFC #9106. |
| [#10840](https://github.com/zeroclaw-labs/zeroclaw/pull/10840) | `feat(docs): generate llms.txt e llms-full.txt no mdBook` | L | Renderizadores mdBook para geração automática de `llms.txt` (índice) e `llms-full.txt` (páginas completas), melhorando indexação por LLMs externos. |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | `feat(channels/telegram): add secure model picker` | XL | Teclado inline paginado agrupado por provider, construído dinamicamente via `/model`, com roteamento seguro através de `/model <ref>`. |
| [#10125](https://github.com/zeroclaw-labs/zeroclaw/pull/10125) | `test(config): isolate process-environment fixtures` | M | Remove 25 findings "unsafe environment-mutation" de browser, HTTP auth, ACP bridge e tests de plugins. Melhora isolamento e determinismo de testes. |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/pull/10625) | `fix(channel): media placeholder entregue a modelos não-vision` | — | Corrige placeholder `[media attachment]` enviado a usuários quando modelo não suporta visão. (Closed) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + interesse)

| # | Título | Comentários | Labels | Análise |
|---|--------|-------------|--------|---------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | **RFC: Computer-use support para desktop** | 16 | `enhancement, runtime, security, priority:p2, risk:high` | Discussão madura (Rev2) sobre interação com desktop via screen scraping e input control. Especifica bounded approval units, session arming e sidecar trust. **Marco estratégico para automação de desktop.** |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | **Harden runtime-written executable test fixtures** | 12 | `bug, priority:p1, status:in-progress, risk:medium` | Teste `build_cron_shell_command_executes_with_custom_native_shell` falha sob parallel runtime gate. Trabalhin em andamento pelo autor AngryPacifist. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | **RFC: A2A outbound client (A2ATool)** | 11 | `enhancement, gateway, priority:p2, risk:high` | RFC accepted; PR #9324 já implementou Phase 1. Permite que ZeroClaw chame agentes A2A-externos proativamente, habilitando colaboração inter-agentes além do modo servidor. |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | **RFC: Unified package/capability/config catalog** | 9 | `integration, provider, priority:p2, risk:high` | Proposta de catálogo unificado de plugins/integrations/built-ins. Coordenado com #8908 (CLI) e #8909 (gateway). **Mudança arquitetural significativa.** |
| [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) | **Tracker: channel/source shared-boundary cleanup** | 6 | `tracker, status:in-progress, risk:medium` | Coordenação de cleanup de canais, webhooks, fan-in sources e streaming modes. Esforço de consolidação de lifecycle, schema e trust. |

### PRs de destaque (atividade recente)

| # | Título | Tamanho | Estado | Relevância |
|---|--------|---------|--------|------------|
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | `feat(sessions): persistent session prompt attachments` | XL | OPEN, needs-author-action | SQLite-backed, 4 anexos por sessão, tools session_prompt_list/set/delete. Feature de memória de longa duração. |
| [#10886](https://github.com/zeroclaw-labs/zeroclaw/pull/10886) | `fix(providers): timeout_secs raises streaming idle bound` | L | OPEN | Corrige OpenAI-compatible/OpenAI Responses com hard-coded 300s read_timeout; timeout_secs agora afeta streaming. |
| [#10895](https://github.com/zeroclaw-labs/zeroclaw/pull/10895) | `fix(anthropic): keep rolling cache breakpoint with trailing image` | M | OPEN | Fix do bug #10889 — breakpoint de cache era perdido quando último bloco era `image`, `tool_use` ou `thinking`. |
| [#10894](https://github.com/zeroclaw-labs/zeroclaw/pull/10894) | `fix(runtime): normalize image markers on run_model_query seam` | M | OPEN | Corrige bypass de validação de imagem no seam `run_model_query` (derivado de #9882). |
| [#10679](https://github.com/zeroclaw-labs/zeroclaw/pull/10679) | `feat(tools): add Keenable web search provider` | XL | OPEN, needs-maintainer-review | Primeiro provider de busca além do DuckDuckGo que funciona sem configuração, via `search_provider = "keenable"`. |
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | `feat(tools): gate file_download against SSRF with private-host opt-in` | L | OPEN, needs-maintainer-review | Endurecimento de segurança para `file_download` com opt-in para hosts privados e suporte a NAT64. |

---

## 5. Bugs e Estabilidade

### Bugs P1 (S1-S2, workflow bloqueado ou degradado)

| # | Severidade | Título | Status | Risco | Detalhes |
|---|-----------|--------|--------|-------|----------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | P1 | Test fixtures sob parallel runtime gate falham | `in-progress` | Medium | `cron::scheduler::tests::build_cron_shell_command_executes_with_custom_native_shell` falha após multithreading. |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | P1 | rumqttc v0.25.1 trás 4 RUSTSEC advisories | `blocked` | **High** | RUSTSEC 0049/0098/0099/0104/0134 via `rustls-webpki 0.102.x`. TLS stack correto exceto MQTT client. **Bloqueante de segurança.** |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | P1 | Image markers bypass content validation no run_model_query | `in-progress` | **High** | Seam direto que não roda `prepare_messages_for_provider`, stripped audio mas não valida imagens. Split de #9819. |
| [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | P1 | Budget-exceeded Code turn perde progresso após session restore | `open` | **High** | Turn terminal failed event descarta streaming parcial quando limite de custo diário é atingido. S1 - workflow blocked. |
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | P1 | WhatsApp Web device linking quebrado por passkey/SHORTCAKE | `accepted` | **High** | Canal `whatsapp-web` não completa link QR após update do WhatsApp. S1 - workflow blocked. |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | P1 | Telegram media-group tests timeout em CI paralelo | `accepted` | Medium | `media_group_listener_retains_video_context_before_photos_across_polls` falha intermitente. |

### Bugs P2 (degradados, mas funcionais)

| # | Título | Status | Risco | Resumo |
|---|--------|--------|-------|--------|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | Tool-returned images desaparecem após tool call unrelated | OPEN | High | Imagens disponíveis para próxima requisição mas desaparecem em requests subsequentes no mesmo turn. |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) | Rolling cache breakpoint perdido quando último bloco é imagem | OPEN | Medium | `apply_cache_to_last_message` não posiciona breakpoint em `Image`, `ToolUse`, `Thinking`. Fix #10895. |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | Non-vision gate falha em marker-shaped prose sem imagem | OPEN | High | `resolve_vision_provider` retorna erro hard em texto que referencia imagem não carregável. |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | Image-aware pre-dispatch budgeting understates/overshoots | `in-progress` | High | Context meter subestima requests image-heavy, depois spike >100% e colapsa. |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure ignora fallback non-streaming | `in-progress` | High | Runtime loga fallback mas não envia request non-streaming. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs aceitos / em progresso — candidatos a próximas versões

| # | Feature | Área | Risco | Estratégia |
|---|---------|------|-------|------------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | **Computer-use desktop interaction** | Runtime | High | Screen interaction + input control com bounded approval. Rev2 madura. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | **A2A outbound client (A2ATool)** | Gateway | High | Phase 1 merged (#9324). Inter-op com agentes externos via protocolo A2A v1.0. |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | **OCI-compliant registries para WASM plugins** | Runtime:WASM | High | `wasm-pkg-client` + cosign + OCI image indexes. Substitui JSON index planejado. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | **Canais/tools de compile-time para runtime plugins** | Runtime:WASM | High | `zeroclaw-plugins` como fonte de channels/tools opcionais, eliminando recompilação. |
| [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) | **WASI hardware host functions capability-gated** | Runtime:WASM | High | GPIO, SPI, I2C, USB, serial via WASI ao invés de native dynamic-library plugins (que bypassam sandbox). |
| [#9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802) | **Emergency-stop enforcement para in-flight/network ops** | Runtime:Security | High | Completa `kill-all`, `network-kill`, `domain-block` na boundary de egress. |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | **Native XMPP / Prosody channel** | Channel | High | Adicionar Jabber como canal nativamente (equivalente a Matrix/Telegram/Discord). |
| [#9346](https://

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*