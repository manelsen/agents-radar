# Resumo diário do ecossistema de agentes de IA 2026-06-23

> Issues: 0 | PRs: 2 | Projetos cobertos: 7 | Gerado em: 2026-06-22 21:59 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-23

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade no dia de hoje**, sem novas issues ou releases. Duas pull requests estão abertas, representando as únicas movimentações nas últimas 24 horas. A equipe está focada em uma correção crítica de estabilidade no módulo Matrix (PR #968) e em manutenção de dependências Docker via dependabot. O projeto mantém-se estável do ponto de vista de issues reportadas, sem sinais de problemas urgentes.

---

## 2. Lançamentos

**Nenhum lançamento nas últimas 24 horas.**

O projeto não registrou novas versões, releases ou tags. O último ciclo de release permanece vigente.

---

## 3. Progresso do Projeto

### PRs Abertas (2)

| # | Título | Autor | Status | Link |
|---|--------|-------|--------|------|
| #968 | fix(matrix): persist next_batch across restart + test env isolation | addadi | **Aberta** | [nullclaw/nullclaw#968](https://github.com/nullclaw/nullclaw/pull/968) |

**Análise:** Esta PR aborda um problema crítico de **persistência de estado** no canal Matrix. O cursor `/sync` (`next_batch`) é atualmente armazenado apenas em RAM, causando um "initial sync" a cada reinicialização do sistema. O PR propõe:

- Persistência do `next_batch` em storage persistente
- Inclusão de `&since=` na URL de sync após reinicializações
- Isolamento de ambiente de testes para evitar interferência entre execuções

**Impacto:** Corretivo de estabilidade e confiabilidade operacional para deployments de longa duração.

| # | Título | Autor | Status | Link |
|---|--------|-------|--------|------|
| #956 | ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group | dependabot[bot] | **Aberta** | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Análise:** Atualização de dependência Docker Routine maintenance, atualizando a imagem base Alpine de 3.23 para 3.24 no grupo docker-images.

**Impacto:** Baixo risco, beneficio de segurança e performance da nova versão do Alpine.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários significativos nas últimas 24 horas.**

Ambas as PRs abertas (#968 e #956) apresentam `undefined` para contagem de comentários, indicando que não houve discussão comunitária visível nos últimos eventos. Não há issues abertas que tenham gerado engajamento recente.

---

## 5. Bugs e Estabilidade

### Bug Crítico Identificado

| Tipo | Descrição | Status | Link |
|------|-----------|--------|------|
| **Estabilidade** | Cursor `next_batch` do Matrix não persiste entre reinicializações | **Em correção (PR #968)** | [nullclaw/nullclaw#968](https://github.com/nullclaw/nullclaw/pull/968) |

**Sintomas reportados:**
- A cada reinicialização, o sistema executa um "initial sync" completo em vez de incremental
- Buffer em memória é zerado, causando perda de posição de sincronização
- `buildSyncUrl` omite o parâmetro `&since=` após restart
- `pollMessages` detecta `is_initial_sync` incorretamente

**Severidade:** **Alta** — Afeta instalações de produção com restarts frequentes ou deployments em containers.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo pedido de feature registrado nas últimas 24 horas.**

O backlog não apresenta novos RFEs (Requests for Feature Enhancement) ou signals de roadmap emergindo da comunidade.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito coletado nas últimas 24 horas.**

A ausência de issues abertas e a falta de discussão nas PRs indicam:
- **Estabilidade operacional** no cenário atual de uso
- **Ausência de problemas críticos reportados** além da questão já identificada em #968
- **Baixa demanda de suporte** no momento

---

## 8. Backlog que Merece Atenção

### PRs Sem Revisão Prolongada

| # | Título | Idade | Link |
|---|--------|-------|------|
| #956 | ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group | ~8 dias | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

**Observação:** A PR #956 está aberta desde 2026-06-15 (8 dias) sem merges ou fechamentos. sendo uma atualização de dependência Docker Routine, pode ser tratada com baixa urgência, mas careceria de merge para manter a imagem base atualizada.

### Sem Issues Antigas Pendentes

Não há issues abertas com idade prolongada que necessitem de atenção especial. O backlog de issues está vazio no momento.

---

## Métricas Resumidas (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 2 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Engajamento comunitário | Baixo |

---

## Saúde Geral do Projeto: 🟢 Estável

O projeto NullClaw encontra-se em estado operacional estável. A única preocupação técnica é o bug de persistência do cursor Matrix (#968), que já está sendo tratado ativamente pelo contribuidor `addadi`. Não há sinais de crise ou regressões.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-06-23 | **Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 23 de junho de 2026. Projetos maduros como **NanoBot** (HKUDS) e **ZeroClaw** demonstram consolidação através de releases estáveis e focus em hardening de segurança, enquanto **Hermes Agent** (NousResearch) e **CoPaw** mantêm ritmo de desenvolvimento intenso com múltiplas correções críticas simultâneas. A tendência arquitetural clara é a **migração para WebAssembly** (ZeroClaw fechou RFC de eliminação do Node.js) e a **expansão multi-canal** (Mattermost, Telegram, DingTalk sendo integrados em paralelo). A estabilidade do core compete com a pressão por novas features — ironicamente, o projeto com menor atividade (NullClaw) apresenta a melhor saúde operacional, sugerindo que volume de issues não correlaciona com qualidade percebida.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde | Tenden. |
|---------|-------------|-----------|------------|----------|-------|---------|
| **NullClaw** | 0 | 2 | 0 | 0 | 🟢 Estável | ▬ |
| **NanoBot** | 3 | 15 | 12 | 1 (v0.2.2) | 🟢 Saudável | ↗ |
| **Hermes Agent** | 50 | 50 | 18 | 0 | 🟡 Alerta | ↗ |
| **PicoClaw** | 2 | 42 | 10 | 1 (nightly) | 🟢 Boa | ↗ |
| **IronClaw** | 18 | 25 | 7 | 0 | 🟡 7.2/10 | ↘ |
| **CoPaw** | 22 | 50 | ~10 | 0 | 🟡 Estável | ↗ |
| **ZeroClaw** | 50 | 50 | 3 | 0 | 🟢 Boa | ▬ |

**Observações:**
- **Hermes Agent** e **ZeroClaw** lideram em volume absoluto de activity (50/50)
- **NanoBot** apresenta o melhor rácio PRs merged/fechados (12 de 15 abertos)
- **IronClaw** é o único projeto com saúde degradada documentada (regressão P0 ativa)
- **NullClaw** paradoxalmente saudável com mínima atividade — sugere codebase maduro ou comunidade pequena demais para reportar

---

## 3. Posicionamento do Projeto Principal

### Análise por Projeto

| Projeto | Diferencial Técnico | Tamanho Comunidade | Maturidade |
|---------|--------------------|--------------------|------------|
| **NullClaw** | Mínimo footprint, foco em estabilidade Matrix | ⭐ | Experimental |
| **NanoBot** | WebUI madura, PWA, context window 200k nativo | ⭐⭐⭐ | Consolidada |
| **Hermes Agent** | Multi-provider (OpenRouter-first), segurança em profundidade | ⭐⭐⭐⭐ | Matura |
| **PicoClaw** | Android ADB, remote WebSocket, MiMo provider | ⭐⭐⭐ | Crescente |
| **IronClaw** | Reborn engine, concurrent turns, skill self-evolution | ⭐⭐⭐⭐ | Matura |
| **CoPaw** | Mobile-first console, Qwen alignment nativo | ⭐⭐⭐ | Estável |
| **ZeroClaw** | WASM-first, A2A discovery, supply chain signing | ⭐⭐⭐⭐ | Arquitetural |

### Vantagens Competitivas Observadas

**Hermes Agent** destaca-se pela **diversidade de provedores** (demanda clara por Google/Vertex AI nativo #12639 com 10👍) e **segurança em camadas** (3 PRs de credential protection merged simultaneamente).

**NanoBot** lidera em **experiência de usuário** com PWA, context window 200k, e onboarding via wizard — posicionando-se para adoção por usuários não-técnicos.

**ZeroClaw** assume posição de **vanguarda arquitetural** com decisões concretas sobre WASM-first e eliminação de Node.js — referência para o ecossistema.

**IronClaw** apresenta a arquitetura mais ambiciosa com **self-evolution via skill extraction** (#5061) e **execução concorrente de turns** (#5085).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gestão de Contexto e Memória

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | Default 200k tokens; streaming otimizado |
| **CoPaw** | SQLite scroll context (#5321); recency-aware ranking |
| **ZeroClaw** | Session TTL automático (#8134); context budget fix |
| **IronClaw** | Concurrent turns; context compression |
| **Hermes Agent** | Memory approval offline; compression pipeline |

**Sinais de consenso:** A gestão de contexto de longa janela (200k+) está se tornando *table stakes*. A diferenciação move-se para memória persistente e recall inteligente.

### 4.2 Estabilidade de Gateway e Canais

| Projeto | Problema Atual |
|---------|---------------|
| **NullClaw** | Cursor Matrix não persiste entre restarts |
| **NanoBot** | Gateway shutdown com `CancelledError` (resolvido em v0.2.2) |
| **Hermes Agent** | Cron jobs nunca disparam (#51021) |
| **CoPaw** | Cron scheduler para completamente (#5398) |
| **ZeroClaw** | Discord channels permanecem ativos após disable (#8051 — resolvido) |

**Padrão identificado:** Cron jobs e canais persistentes são superfície de bug comum. Nenhum projeto está completamente livre de race conditions em reconnect/shutdown.

### 4.3 Segurança e Credenciais

| Projeto | Vulnerabilidade | Status |
|---------|---------------|--------|
| **Hermes Agent** | Token leak no multiplexer (#51029) | P2 Aberta |
| **Hermes Agent** | Credential exposure em TUI (#50953) | Resolvida |
| **CoPaw** | Keychain compartilhado entre instalações (#5028) | Resolvida |
| **ZeroClaw** | Supply chain signing RFC (#8177) | Em discussão |

**Convergência:** Autenticação multi-profile e credential isolation são problemas universais. ZeroClaw está mais avançado com RFC de SLSA provenance.

### 4.4 Compatibilidade de Providers

| Problema | Projetos Afetados |
|----------|-------------------|
| Tool calls retornam como texto XML (Doubao Seed) | PicoClaw (#3153) |
| MCP server não reconecta após outage | Hermes Agent (#38488) |
| Native/MCP tools indisponíveis em Responses API | ZeroClaw (#7756) |
| Telegram rich messages API 10.1 | NanoBot (#4413) |

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Perfil Primário | Posicionamento |
|---------|-----------------|----------------|
| **NullClaw** | Desenvolvedores Matrix-savvy | Nicho técnico |
| **NanoBot** | Usuários finais, non-technical | Consumer-friendly |
| **Hermes Agent** | Power users, self-hosters | Técnico intermediário |
| **PicoClaw** | Desenvolvedores, mobile automation | Técnico avançado |
| **IronClaw** | Teams, produção | Enterprise |
| **CoPaw** | Usuários Qwen/Alibaba | Consumer/Regional |
| **ZeroClaw** | Arquitetos, segurança-first | Técnico expert |

### 5.2 Arquitetura Técnica

```
Hermes Agent ────► Provider abstraction (OpenRouter-first)
                     ├── Google/Vertex AI demand (#12639)
                     └── Multi-profile multiplexing

IronClaw ───────► Concurrent execution engine
                     ├── TurnRunScheduler (#5085)
                     └── Self-evolution (#5061)

ZeroClaw ───────► WASM-first runtime
                     ├── Plugin system (#7420 closed)
                     ├── Node.js elimination (#7674 closed)
                     └── A2A discovery (#7763)

NanoBot ────────► WebUI-first experience
                     ├── PWA (#4457)
                     ├── Context 200k native
                     └── Mattermost integration (#4459)

PicoClaw ───────► Device control layer
                     ├── Android ADB (#3157)
                     ├── Remote WebSocket (#3118)
                     └── MiMo provider (#2915)

CoPaw ──────────► Mobile console
                     ├── 11 mobile PRs simultâneos
                     ├── Qwen alignment
                     └── SQLite context (#5321)
```

### 5.3 Estratégia de Features

| Projeto | Estratégia | Evidência |
|---------|-----------|-----------|
| **Hermes Agent** | Segurança first | 3 security PRs merged, 2 P1 security open |
| **NanoBot** | UX maturation | v0.2.2 com 12 PRs merged, focus em estabilidade |
| **IronClaw** | Performance week dedicada | #5125-#5128, 5 issues de latência |
| **ZeroClaw** | Arquitetura future-proof | WASM, SLSA, A2A |
| **CoPaw** | Mobile-first | 11 PRs mobile adaptation |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Velocidade | Estágio |
|---------|-----------------|------------|---------|
| **NanoBot** | 12 | 🔥 Alta | Consolidando |
| **Hermes Agent** | 18 | 🔥 Alta | Feature-driven |
| **PicoClaw** | 10 | 🔥 Alta (flush backlog) | Crescendo |
| **IronClaw** | 7 | ⚡ Moderada | Transição (Reborn) |
| **CoPaw** | ~10 | ⚡ Moderada | Estabilizando |
| **ZeroClaw** | 3 | ⚠️ Baixa | Arquitetural |
| **NullClaw** | 0 | ⚠️ Mínima | Manutenção |

### 6.2 Engajamento Comunitário

| Projeto | Issue mais comentada | Comentários | Tipo |
|---------|---------------------|-------------|------|
| **CoPaw** | #5218 (context compaction freeze) | 17 | Bug crítico |
| **Hermes Agent** | #12639 (Google provider) | 10 | Feature request |
| **ZeroClaw** | #7420 (plugin system) | 6 | RFC |
| **NanoBot** | #1461 (daemon gateway) | 4 | Feature |
| **PicoClaw** | #3093 (SimpleX/Tox) | 3 | Feature |

**Insight:** CoPaw tem o maior engajamento em bugs (17 comentários), indicando comunidade ativa de reporte. Hermes Agent tem engajamento mais distribuído entre features e bugs.

### 6.3 Ciclo de Bug-to-Fix

| Projeto | Caso | Tempo |
|---------|------|-------|
| **PicoClaw** | #3153 report → #3154 PR | **Mesmo dia** |
| **ZeroClaw** | Discord bug → #8051 merged | ~5 dias |
| **NanoBot** | v0.2.2 com 12 fixes | Release cycle |
| **Hermes Agent** | Security PRs em paralelo | Simultâneo |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Projetos | Evidência |
|-----------|----------|-----------|
| **WASM-first runtime** | ZeroClaw | RFC #7674 fechada; #8135 em progresso |
| **PWA/mobile-first** | NanoBot, CoPaw | PWA PR #4457; 11 mobile PRs em CoPaw |
| **Expansão multi-canal** | NanoBot, IronClaw, ZeroClaw | Mattermost, Telegram, DingTalk, WhatsApp |
| **Contexto longo (200k+)** | NanoBot, Hermes | Default upgrade; demanda por mais |
| **Memória persistente** | CoPaw, Hermes, PicoClaw | SQLite, search_history, recency-ranking |
| **Segurança supply chain** | ZeroClaw, Hermes | SLSA RFC, cargo audit gates |

### 7.2 Tendências Emergentes

| Sinal | Projetos | Implicação |
|-------|----------|------------|
| **Controle de dispositivos físicos** | PicoClaw (#3157 Android ADB) | Agentes expandindo para IoT/automação |
| **Self-evolution** | IronClaw (#5061 skill extraction) | Agentes que melhoram próprios capabilities |
| **Multi-provider nativo** | Hermes (#12639 Google/Vertex) | Desacoplamento de OpenRouter |
| **Descentralização de transporte** | PicoClaw (#3093 SimpleX/Tox) | Privacidade além de WireGuard/Telegram |
| **Desktop como superfície principal** | CoPaw (Tauri issues), IronClaw (WebUI) | Usuários querem experiência installed-app |

### 7.3 Consolidação de Mercado

**Padrão observado:** Projetos estão convergindo para stack técnico similar:

```
┌─────────────────────────────────────────────────────┐
│                    COMMON LAYER                      │
├─────────────────────────────────────────────────────┤
│  • Provider abstraction (OpenAI-compatible)          │
│  • MCP integration                                   │
│  • Multi-channel (Telegram, Discord, WhatsApp)       │
│  • Context window >128k tokens                       │
│  • Persistent memory / SQLite                        │
└─────────────────────────────────────────────────────┘
```

**Diferenciação futura** virá de:
1. **Arquitetura de runtime** (WASM vs Node.js vs Python)
2. **Modelos de monetização** (enterprise features, hosted options)
3. **Integração vertical** (device control, home automation)
4. **Segurança institucional** (SLSA, PGP signing, compliance)

---

## 8. Recomendações para Decisores

### Para Desenvolvedores de Plug-ins/Ecossistema

| Prioridade | Ação | Projetos Alvo |
|------------|------|---------------|
| 🔴 Alta | Implementar MCP server resilience | Hermes, ZeroClaw |
| 🟡 Média | Contribuir mobile adaptation | CoPaw, NanoBot |
| 🟡 Média | Adotar SQLite para contexto | Todos |
| 🟢 Baixa | Explorar WASM plugin API | ZeroClaw |

### Para Usuários em Produção

| Projeto | Status | Advertência |
|---------|--------|-------------|
| **NanoBot** | ✅ Recomendado | v0.2.2 estável; priorize upgrade |
| **Hermes Agent** | ⚠️ Cuidado | 2 P1 security abertas; aguarde merges |
| **IronClaw** | 🔴 Pausar | Regressão P0 ativa (#5139) |
| **ZeroClaw** | ✅ Considerar | Pré-v0.9.0; 134 items em tracker |
| **CoPaw** | ⚠️ Monitorar | 4 bugs críticos; rate de fechamento bom |
| **PicoClaw** | ✅ Nightly OK | Ciclo bug-to-fix excelente |

### Para Arquitetos de Sistema

1. **ZeroClaw define o padrão** para arquitetura futura (WASM-first)
2. **Hermes Agent** oferece o modelo de segurança mais maduro
3. **IronClaw** representa o estado-da-arte em concurrent agent execution
4. **Evite NullClaw** para produção — comunidade muito pequena

---

*Relatório gerado com base em dados de 2026-06-23. Métricas extraídas diretamente dos relatórios de projeto. Recomendamos validação com dados em tempo real antes de decisões de adoção.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-23

## 1. Panorama do dia

O projeto NanoBot apresenta **atividade intensa e consolidada** no dia de hoje, com 27 PRs atualizados nas últimas 24h — o maior volume de atividade recente. O destaque é o **release v0.2.2**, que consolida correções críticas de estabilidade no gateway e WebUI, além de ajustar o context window default para 200k tokens. A comunidade está ativamente expandindo canais de integração (Mattermost) e refinando a experiência do usuário via PWA e wizard amigável. O ecossistema demonstra maturidade com foco em estabilidade e usabilidade.

---

## 2. Lançamentos

### ✅ v0.2.2 Released
**PR:** [#4454](https://github.com/HKUDS/nanobot/pull/4454), [#4445](https://github.com/HKUDS/nanobot/pull/4445)

| Mudança | Impacto |
|---------|---------|
| **Gateway shutdown estável** | Lida corretamente com `SIGINT`/`SIGTERM` no gateway em foreground; corrige crashes em Python 3.11 com `CancelledError` |
| **WebUI fork replay** | Preserva respostas de threads bifurcadas durante refresh de histórico |
| **Context window default → 200k** | [#4448](https://github.com/HKUDS/nanobot/pull/4448) eleva o limite padrão de 65k para 200k tokens, alinhando-se a modelos modernos |
| **WebUI performance** | [#4398](https://github.com/HKUDS/nanobot/pull/4398) elimina refreshes lentos na rota `/api/settings` |

**Breaking changes:** Nenhuma. Atualização de patch recomendada para todos os usuários.

---

## 3. Progresso do Projeto

### PRs críticos merged/closed (12 total)

| PR | Categoria | Relevância |
|----|-----------|------------|
| [#4456](https://github.com/HKUDS/nanobot/pull/4456) | Gateway shutdown | Tolerância a tarefas canceladas durante shutdown — estabilidade em produção |
| [#4455](https://github.com/HKUDS/nanobot/pull/4455) | WebUI | Preserva replies de threads bifurcadas durante history refresh |
| [#4453](https://github.com/HKUDS/nanobot/pull/4453) | WebUI | Follow streaming output após envio de mensagem; scroll inteligente |
| [#4451](https://github.com/HKUDS/nanobot/pull/4451) | WebUI | Estabiliza layout de turns enviados e reloads em dev |
| [#4450](https://github.com/HKUDS/nanobot/pull/4450) | MCP transport | Fecha conexões MCP do agent task correto — elimina `cancel-scope` errors |
| [#4448](https://github.com/HKUDS/nanobot/pull/4448) | Config | Default context window 200k tokens |
| [#4398](https://github.com/HKUDS/nanobot/pull/4398) | WebUI | Evita refreshes lentos em `/api/settings` via cache e background refresh |

**Conclusão:** O release v0.2.2 focou em **estabilidade operacional do gateway e refinamento da WebUI**, indicando maturidade do projeto em preparação para adoção mais ampla.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Autor | Comentários | Tipo |
|-------|-------|-------------|------|
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) | xcosmosbox | 4 | **Feature Enhancement — Daemon Gateway Unificado** |
| [#4413](https://github.com/HKUDS/nanobot/issues/4413) | madIlama | 2 | Telegram Bot API 10.1 rich messages |
| [#4376](https://github.com/HKUDS/nanobot/issues/4376) | chengyongru | 1 | Wizard amigável para onboarding |

#### Análise dos temas quentes:

1. **Daemon Gateway Unificado (#1461)** — A feature mais discutida busca migrar o nanobot gateway para rodar como daemon em background com controle unificado (restart/status/logs). Indica demanda por **implantação em produção mais robusta**.

2. **Telegram Rich Messages (#4413)** — A comunidade solicita suporte para os novos formatos de mensagens ricas do Telegram Bot API 10.1, demonstrando interesse em **paridade de recursos** com plataformas modernas.

3. **Wizard amigável (#4376)** — Resolvida nesta sprint, a issue endereçava a barreira de entrada para usuários não-técnicos. A resolução (#4376 closed) mostra **foco em DX (Developer Experience)**.

---

## 5. Bugs e Estabilidade

### 🐛 Bugs reportados (ativos)

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | **🔴 Alta** | Duplicate `tool_use` ids em streaming — "tool_use ids must be unique" 400 — **poisons session permanentemente** |
| [#4441](https://github.com/HKUDS/nanobot/issues/4441) | 🟡 Média | `RuntimeError` em task scope ao reconectar MCP server |

### PRs de fix em progresso

| PR | Status | O que corrige |
|----|--------|---------------|
| [#4443](https://github.com/HKUDS/nanobot/pull/4443) | OPEN | Guard contra duplicate `tool_use` ids — **resposta direta ao bug #4442** |
| [#4433](https://github.com/HKUDS/nanobot/pull/4433) | OPEN | Normaliza sender IDs para str no pairing store — type-coercion silenciosa |
| [#4436](https://github.com/HKUDS/nanobot/pull/4436) | OPEN | Gated MCP resources/prompts atrás de `enabledTools` — vazamento de segurança |
| [#4452](https://github.com/HKUDS/nanobot/pull/4452) | OPEN | Aplica `enabledTools` para todos os recursos MCP (ferramentas, resources, prompts) |

**⚠️ Alerta:** O bug #4442 (duplicate `tool_use` ids) é crítico — qualquer sessão afetada fica permanentemente quebrada. Priorize o PR [#4443](https://github.com/HKUDS/nanobot/pull/4443).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| PR/Issue | Feature | Sinais de Roadmap |
|----------|---------|-------------------|
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | **Mattermost channel support** | Expansão multi-plataforma via WebSocket + REST API |
| [#4457](https://github.com/HKUDS/nanobot/issues/4457) / [#4458](https://github.com/HKUDS/nanobot/pull/4458) | **PWA support** | Experiência mobile native — home screen installation |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | **Subagents com model presets configuráveis** | Arquitetura de multi-agentes mais flexível |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | **DingTalk: disable private chat + mention sender** | Funcionalidades enterprise para DingTalk |
| [#4439](https://github.com/HKUDS/nanobot/pull/4439) | **search_history tool (read-only)** | Memória persistente para recall de conversas |
| [#4397](https://github.com/HKUDS/nanobot/pull/4397) | **User-attention hint antes de mid-turn messages** | Experiência de interrupção mais responsiva |

#### Tendências de roadmap identificadas:
1. **Expansão de canais** — Mattermost sendo o mais recente (confirma estratégia multi-plataforma)
2. **UX Mobile** — PWA indica foco em experiência app-like
3. **Memória e contexto** — search_history tool mostra interesse em long-term memory
4. **Multi-agent** — Subagents com presets indicam evoluções em autonomia

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Tema | Frequência | Contexto |
|------|------------|----------|
| **Barreira de entrada técnica** | ⭐⭐⭐ | Onboarding via `--wizard` exige conhecimento técnico avançado — _resolvido com #4376_ |
| **Contexto curto demais** | ⭐⭐ | Default 65k limitava conversas longas — _endereçado em v0.2.2_ |
| **Sessions "bricked" por errors** | ⭐⭐ | Erro 400 por duplicate IDs trava sessões permanentemente |
| **Onboard técnico para novos usuários** | ⭐⭐ | Wizard não amigável |

### Cenários de uso evidenciados

- **Uso multi-plataforma**: Usuários de Telegram, DingTalk, Mattermost e WebUI simultaneamente
- **Implantação em produção**: Necessidade de daemon gateway controlável e restart estável
- **Sessões longas**: Demanda por 200k+ tokens de contexto
- **Mobile**: Usuários querem experiência instalada (PWA) vs. browser

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou stale

| Issue | Criação | Status | Prioridade |
|-------|---------|--------|------------|
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) | 2026-03-03 | OPEN | ⭐⭐⭐ Feature grande — daemon gateway |
| [#4413](https://github.com/HKUDS/nanobot/issues/4413) | 2026-06-19 | OPEN | ⭐⭐ Telegram API 10.1 |
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | 2026-06-21 | OPEN | ⭐⭐ Bug crítico — precisa de triagem |

### PRs aguardando review

| PR | Criação | Feature | Urgência |
|----|---------|---------|----------|
| [#4443](https://github.com/HKUDS/nanobot/pull/4443) | 2026-06-21 | Fix duplicate tool_use ids | 🔴 **Alta** |
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | 2026-06-22 | Mattermost integration | 🟡 Média |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 2026-06-11 | Subagent model presets | 🟡 Média |

---

## Métricas Consolidada — 2026-06-23

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 3 | Neutra |
| Issues fechadas (24h) | 2 | Positiva |
| PRs abertos (24h) | 15 | — |
| PRs merged/closed (24h) | 12 | **Alta** |
| Releases | 1 (v0.2.2) | **Positiva** |
| Bugs críticos ativos | 1 | ⚠️ Atenção |

**Saúde geral:** 🟢 **Saudável** — Release significativo com foco em estabilidade; comunidade ativa; poucos bugs críticos em aberto com fix em progresso.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-23

## 1. Panorama do Dia

O projeto mantém um alto nível de atividade com 50 issues e 50 PRs atualizados nas últimas 24h, evidenciando uma comunidade engajada. Não houve novos lançamentos hoje, mas o ritmo de desenvolvimento permanece intenso com 18 PRs merged/fechados e 32 ainda em revisão. A atenção principal está em correções de segurança críticas (hardening de denylist, prevenção de injection, proteção de credenciais), além de melhorias na infraestrutura de cron jobs e memory management. O ecossistema demonstra maturidade com foco em estabilidade e segurança.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. O último release estável permanece o v0.17.0 (referenciado em issues). Usuários em produção devem acompanhar o canal `main` para acompanhar as correções de segurança pendentes de merge.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#49252](https://github.com/NousResearch/hermes-agent/pull/49252) | feat(background-review) | Aux-model routing + context digest + adaptive cadence | Redução de custos de self-improvement com modelo auxiliar configurável |
| [#50993](https://github.com/NousResearch/hermes-agent/pull/50993) | fix(cron): scope job execution | Cron jobs agora executam sob o perfil dono, não perfil arbitrário | **Correção de bug crítico** — jobs executavam no perfil errado |
| [#51060](https://github.com/NousResearch/hermes-agent/pull/51060) | fix(file_tools): tilde resolution | Resolve `~` para HOME do perfil em vez do processo gateway | Corrige paths quebrados em cron jobs e sessões |
| [#50953](https://github.com/NousResearch/hermes-agent/pull/50953) | fix(gateway): redact TUI credentials | Completa redação de credenciais em prompts de aprovação TUI | Segurança: evita exposição de API keys |
| [#51056](https://github.com/NousResearch/hermes-agent/pull/51056) | fix(memory): /memory approve offline | Approve agora funciona sem agent vivo (Desktop/TUI/CLI) | Usabilidade: corrige falha em `memory store unavailable` |
| [#51055](https://github.com/NousResearch/hermes-agent/pull/51055) | fix(security): deny root-level creds | Bloqueia attachment automático de credenciais em replies | Segurança: fecha hole de exfiltração |
| [#50912](https://github.com/NousResearch/hermes-agent/pull/50912) | fix(security): deny ~/.hermes tree | Impede auto-attachment de `google_token.json` e similares | Segurança: resposta a incidente real reportado no Slack |

**Destaque:** O merging simultâneo de 3 PRs de segurança (#50953, #51055, #50912) indica resposta coordenada a vulnerabilidades críticas de credential exposure.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações | Status |
|---|--------|-------------|---------|--------|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Feature: Native Google/Vertex AI Provider | 10 | 👍 10 | OPEN |
| [#20866](https://github.com/NousResearch/hermes-agent/issues/20866) | 400 format_error on Qwen3.6-27B | 4 | 0 | OPEN |
| [#50889](https://github.com/NousResearch/hermes-agent/issues/50889) | Dashboard auth broken under reverse-proxy subpath | 4 | 0 | OPEN |

**Análise:**

**#12639 — Suporte nativo a Google/Vertex AI (10 👍):** Demanda prioritária para bypass de OpenRouter 402 Errors e Rate Limits. Usuários que usam `google/gemini-3.1-pro-preview` via OpenRouter enfrentam custosMarkup e throttling. A comunidade busca integração direta com provedores Google, indicando tendência de diversificação de provedores além do OpenRouter.

**#20866 — Qwen3.6-27B format error:** Problema de formatação com system messages em tarefas auxiliares (vision, compression, session_search). Impacta usuários de modelos Qwen auto-hospedados via vLLM.

**#50889 — Dashboard auth subpath:** Autenticação quebrada quando Hermes serve sob subpath de reverse-proxy (ex: `/hermes`). Afeta implantações em infraestrutura compartilhada.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 (Críticos)
| # | Bug | Descrição | Plataforma |
|---|-----|-----------|------------|
| [#51021](https://github.com/NousResearch/hermes-agent/issues/51021) | Cron Jobs Never Fire | Ticker alive mas jobs nunca executam | Telegram |
| [#36759](https://github.com/NousResearch/hermes-agent/issues/36759) | Auxiliary fallback route paid model | Fallback ignora switch de modelo e usa credencial paga | — |

#### P2 (Altos)
| # | Bug | Descrição |
|---|-----|-----------|
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | MCP server never reconnects after transient outage |
| [#38053](https://github.com/NousResearch/hermes-agent/issues/38053) | macOS launchd: update não reinicia todos os profile gateways |
| [#50199](https://github.com/NousResearch/hermes-agent/issues/50199) | delegation.base_url ignorado em runtime |
| [#50594](https://github.com/NousResearch/hermes-agent/issues/50594) | Windows cwd em formato nativo quebra terminal tool |
| [#51029](https://github.com/NousResearch/hermes-agent/issues/51029) | **[SECURITY]** Multiplexer token leak: secondary profile usa token do default |
| [#51030](https://github.com/NousResearch/hermes-agent/issues/51030) | Telegram same-token collision detection inoperante |
| [#50875](https://github.com/NousResearch/hermes-agent/issues/50875) | Curator com hard-delete powers sem consent gate |
| [#51019](https://github.com/NousResearch/hermes-agent/issues/51019) | Slack gateway evict arbitrário de thread timestamps |

**Observações de Estabilidade:**
- **Windows:** 2 bugs específicos (cwd paths, pip upgrade OS error 32)
- **Telegram:** 3 bugs (typing indicator persistente, collision detection, cron)
- **Multiplexer:** Vulnerabilidade de segurança com token leak requer atenção imediata
- **MCP:** Falha em reconnect após outage transitório quebra workflows de long-running

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas em Demandas

| # | Feature | Categoria | Potencial Impacto |
|---|---------|-----------|-------------------|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Native Google/Vertex AI Provider | Provider | Alta — reduz dependência de OpenRouter |
| [#50293](https://github.com/NousResearch/hermes-agent/issues/50293) | Dynamic thinking ON/OFF toggle | Agent | Média — auto-escalação de reasoning |
| [#51040](https://github.com/NousResearch/hermes-agent/issues/51040) | `/resume-last` slash command | CLI | Média — UX improvement |
| [#50968](https://github.com/NousResearch/hermes-agent/issues/50968) | Sigstore bundles para GitHub releases | Security | Média — supply chain security |
| [#50955](https://github.com/NousResearch/hermes-agent/issues/50955) | Community Skill: Smart Home Hub (HA + AirPlay) | Skills | Baixa — ecossistema |
| [#51062](https://github.com/NousResearch/hermes-agent/issues/51062) | User-owned portable LLM memory | Architecture | Alta — design fundamental |

### PRs de Features Abertas

| # | PR | Descrição |
|---|-----|-----------|
| [#51063](https://github.com/NousResearch/hermes-agent/pull/51063) | OpenRouter image generation plugin (FLUX, Nano Banana) |
| [#45619](https://github.com/NousResearch/hermes-agent/pull/45619) | Arabic localization + RTL support |
| [#51054](https://github.com/NousResearch/hermes-agent/pull/51054) | Friday identity self-improvement loop |

**Sinais de Roadmap:**
1. **Multi-provider expansion:** Demanda clara por Google/Vertex AI nativo
2. **Segurança em destaque:** 3 PRs de segurança merged hoje, mais 2 P1 abertos
3. **Localization:** Suporte RTL em andamento (árabe)
4. **Memory architecture:** Discussão sobre portable LLM memory indica reavaliação de design

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**1. Infraestrutura e Deployment (Alta Prioridade)**
- Reverse-proxy subpath breaking auth ([#50889](https://github.com/NousResearch/hermes-agent/issues/50889))
- Cron jobs não executam mesmo com ticker alive ([#51021](https://github.com/NousResearch/hermes-agent/issues/51021))
- macOS update não reinicia todos os profiles ([#38053](https://github.com/NousResearch/hermes-agent/issues/38053))

**2. Custo e Provider Management**
- Rate limits e 402 errors via OpenRouter motivando busca por providers nativos ([#12639](https://github.com/NousResearch/hermes-agent/issues/12639))
- Cron job drift de provider causando账单 surpresa (P1 issue em #51051)

**3. Segurança e Credenciais**
- Token leak no multiplexer ([#51029](https://github.com/NousResearch/hermes-agent/issues/51029))
- Credenciais expostas em media delivery (incidente real reportado no Slack)
- Prompt injection via removed users no Telegram ([#41188](https://github.com/NousResearch/hermes-agent/pull/41188))

**4. Usabilidade Desktop/TUI**
- `/memory approve` falhando com "store unavailable" ([#46783](https://github.com/NousResearch/hermes-agent/issues/46783), [#47363](https://github.com/NousResearch/hermes-agent/issues/47363))
- Slash commands retornando "unknown command" ([#51009](https://github.com/NousResearch/hermes-agent/issues/51009))
- Path de instalação não configurável no Windows ([#38935](https://github.com/NousResearch/hermes-agent/issues/38935))

### Cenários de Uso em Evidência

- **Deploy em produção:** Usuários enfrentando desafios com cron jobs, multiplex profiles e reverse-proxy
- **Multi-model:** Delegação entre workers, aux-models para background review, switches mid-session
- **Long-running sessions:** Context compression, session reopening, visual context persistence
- **Home automation:** Integração com Home Assistant via skill custom ([#50955](https://github.com/NousResearch/hermes-agent/issues/50955))

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Long-Running

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#51021](https://github.com/NousResearch/hermes-agent/issues/51021) | Cron Jobs Never Fire Despite Ticker Alive | 2026-06-22 | OPEN | P1 |
| [#51029](https://github.com/NousResearch/hermes-agent/issues/51029) | Multiplexer token leak (security) | 2026-06-22 | OPEN | P2 |
| [#50875](https://github.com/NousResearch/hermes-agent/issues/50875) | Curator with hard-delete powers | 2026-06-22 | OPEN | P2 |
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Native Google/Vertex AI Provider | 2026-04-19 | OPEN | Feature |
| [#51062](https://github.com/NousResearch/hermes-agent/issues/51062) | Portable LLM memory architecture | 2026-06-22 | OPEN | Guidance |

### PRs de Segurança Pendentes de Merge

| # | PR | Descrição | Prioridade |
|---|-----|-----------|------------|
| [#47936](https://github.com/NousResearch/hermes-agent/pull/47936) | Harden dangerous-command denylist | Shell-escape bypass mitigation | **P1** |
| [#41188](https://github

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw

**Data:** 2026-06-23  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Versão de referência:** nightly v0.3.0-nightly.20260622

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 22/06/2026, com 42 PRs atualizados nas últimas 24h — um volume expressivo, impulsionado majoritariamente por _dependabot_ (5 PRs) e pela fusão simultânea de 7 pull requests backlogados desde maio. Duas issues ativas (ambas abertas) e uma release nightly (v0.3.0) indicam progresso contínuo no pipeline de desenvolvimento. O tom geral é de **manutenção ativa e evolução de funcionalidades**, com foco em estabilidade (fixes de type assertions, backpressure e crash-consistency) e expansão de plataforma (Android ADB, remote WebSocket, novo provedor MiMo). A saúde do projeto é **boa**, com regressões críticas sendo endereçadas no mesmo dia de reporte (ex.: #3153↔#3154).

---

## 2. Lançamentos

### Release Available

| Artefato | Versão | Data |
|---|---|---|
| **Nightly Build** | `v0.3.0-nightly.20260622.287853ab` | 2026-06-22 |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.3.0...main

- **Natureza:** build automatizado de `main`. Pode conter mudanças instáveis entre a v0.3.0 estável e o HEAD.
- **Recomendação:** utilizar em ambiente de teste; não considerar para produção.
- **Breaking changes / Migração:** não documentadas nesta build. Para mudanças entre `v0.3.0` e `main`, consultar diff no link acima.
- **Upgrade:** `"github.com/sipeed/picoclaw"` → `v0.3.0-nightly.20260622` (Go modules).

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (10 total)

| # | Título | Autor | Impacto |
|---|---|---|---|
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Fix message bus backpressure handling and health visibility | SiYue-ZO | **Crítico** — Bounded waiting em publish saturado; métricas de drop por stream; health wiring no gateway. Resolve deadlocks parciais em carga alta. |
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) | Fix JSONL session index hot-path cloning and TTL refresh | SiYue-ZO | **Performance** — Elimina clone desnecessário do índice em cache hit; reduz alocações no hot path de `pkg/memory`. |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | Fix JSONL store metadata drift after crash | SiYue-ZO | **Estabilidade** — Corrige gap de crash-consistency entre append no `.jsonl` e update no `.meta.json`. |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | Fix fallback chain handling for expired contexts | SiYue-ZO | **Estabilidade** — Contextos expirados agora short-circuitam o fallback chain imediatamente (`ctx.Err()`), evitando retries inúteis em `pkg/providers/fallback.go`. |
| [#2915](https://github.com/sipeed/picoclaw/pull/2915) | feat(providers): add CommonModels for MiMo provider | SiYue-ZO | **Feature** — Adiciona `mimo-v2.5` (multimodal) e `mimo-v2.5-pro` (text-only) ao provider MiMo; WebUI passa a recomendar modelos vision-capables por padrão. |
| [#3155](https://github.com/sipeed/picoclaw/pull/3155) | feat(spawn): add direct_reply parameter with SkipInboundTurn | v2up-32mb | **API** — Resolve duplicação de mensagens no spawn async callback (Issue #3094); novo param `direct_reply` controla entrega ao usuário vs. agente principal. |
| [#3152](https://github.com/sipeed/picoclaw/pull/3152) | add installation instructions to picoclaw skills search | phoeagon | **UX/DX** — Saída de `picoclaw skills search` agora inclui comandos de instalação do skill. |
| [#2833](https://github.com/sipeed/picoclaw/pull/2833) | feat(web,api): test connection with real connectivity verification | SiYue-ZO | **Feature/DX** — Teste de conexão com verificação real de conectividade (Parte 3/3). |
| [#3091](https://github.com/sipeed/picoclaw/pull/3091) | fix(openai_compat): add ok check for native_search type assertion | chengzhichao-xydt | **Bug fix** — `pkg/providers/openai_compat/provider.go:157` descartava `ok` de type assertion; non-bool silenciosamente virava `false`. |
| [#3101](https://github.com/sipeed/picoclaw/pull/3101) | Dependabot: vite 8.0.13 → 8.0.16 | dependabot[bot] | **Dependência** — Patch de segurança/estabilidade no frontend Vite. |

**Destaque de progresso:** Os PRs #2906–#2915 representam um flush massivo de backlog acumulado desde maio, todos mergesados no mesmo dia. Isso indica um ciclo de revisão/maintainer ativo, não acumulação de dívida técnica.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Mais Comentários/Reações

| Item | Tipo | Comentários | 👍 | Tema Central |
|---|---|---|---|---|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Issue | 3 | 1 | **Feature request: SimpleX ou Tox como gateway** — Usuário solicita alternativas a Wire para gateway de mensageria, sinalizando demanda por diversificação de transportes. |

**Análise:** A issue #3093 é o item com maior engajamento social (3 comentários + 1 upvote) entre as issues ativas. A solicitação de SimpleX/Tox revela uma demanda por **soberania digital e alternativas descentralizadas** — um tema recorrente em projetos focados em agentes de IA que lidam com comunicação sensível.

**Demandas identificadas:**
- **Redes descentralizadas:** SimpleX e Tox são protocolos P2P sem ID centralizado; a comunidade vê valor em integrá-los como gateways de transporte.
- **Privacidade:** Indica preocupação com metadados em transportadores tradicionais.

---

## 5. Bugs e Estabilidade

### Bug Reportado (1 novo)

| # | Severidade | Título | Status | Link |
|---|---|---|---|---|
| #3153 | **Alta** | Volcengine Doubao Seed: tool calls vazam como texto `<seed:tool_call>` | **Aberto** | [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) |

**Detalhes:** Em `PicoClaw v0.2.8` com `doubao-seed-2.0-pro`, chamadas de ferramenta ocasionalmente são retornadas ao usuário como texto raw XML (`<seed:tool_call>`) ao invés de serem executadas. O root cause identificado no PR #3154: o modelo Volcengine às vezes embebe tool calls em `message.content` (formato XML) ao invés do campo padrão `tool_calls` da API OpenAI-compatible.

**Mitigação rápida:** PR [#3154](https://github.com/sipeed/picoclaw/pull/3154) já aberto com a correção para parsear `<seed:tool_call>` de `message.content`. Ciclo de detecção→report→fix em **mesmo dia** (22/06).

**Recomendação:** Priorizar merge do #3154; users do Doubao Seed devem monitorar a nightly ou aguardarpatch.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR (Open)

| # | Título | Autor | Complexidade | Sinal de Roadmap |
|---|---|---|---|---|
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | feat: add Android ADB remote operations tool | danmobot | Experimental | **Mobile/Device control** — primitivas completas: listar dispositivos, screenshot, tap, swipe, text input, key events, wake. Indica ambição de expandir PicoClaw para controle de dispositivos Android. |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | jp39 | Média | **Remote agent execution** — modo `--remote ws://localhost:18790/pico/ws` permite agente rodando remotamente via WebSocket. Expandeador de arquitetura. |
| [#3156](https://github.com/sipeed/picoclaw/pull/3156) | feat(pico): emit per-turn LLM token usage on finalized message | loafoe | Pequena | **Observabilidade/Billing** — token usage por turno no canal Pico (input/output separados). Relevante para métricas de custo. |
| [#3154](https://github.com/sipeed/picoclaw/pull/3154) | fix(openai_compat): recover Doubao Seed tool calls leaked | hanZeng-08 | Bug fix | **Compatibilidade provedores** — parsing de formato XML não-padrão em conteúdo. |

### Features de Infraestrutura

| # | Título | Tema |
|---|---|---|
| [#3131](https://github.com/sipeed/picoclaw/pull/3131) | fix(registry): add ok checks for tool schema type assertions | Robustez de type assertions em `pkg/tools/registry.go` |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) | fix(web): explicitly ignore resp.Body.Close() errors | Limpeza de código em search providers (Bing, Tavily, Sogou, Perplexity) |

**Sinais de roadmap (inferidos):**
1. **Expansão mobile:** Android ADB tool (#3157) sugere interesse em controle de dispositivos físicos.
2. **Arquitetura distribuída:** Remote WebSocket agent (#3118) aponta para execução distribuída de agentes.
3. **Billing/Observabilidade:** Token usage tracking (#3156) indica foco enterprise.
4. **Suporte a novos provedores:** MiMo (#2915) + SimpleX/Tox (#3093) mostram diversificação ativa.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Fonte | Severidade | Evidência |
|---|---|---|---|
| **Tool calls não executam corretamente com Doubao Seed** | #3153 | Alta | Reprodução clara com output XML raw — impacto funcional direto. |
| **Duplicação de mensagens no spawn async callback** | PR #3155 (Issue #3094) | Média | `ForUser` + `PublishInbound` simultâneos causam 2 entregas. |
| **Performance degradada em JSONL hot path** | PR #2913 | Média | Clone de índice inteiro em cache hit; impacto em conversas longas. |
| **Fallback chain não para em contexto expirado** | PR #2905 | Média | Retries desnecessários consomem latência e quota. |

### Cenários de Uso Identificados

| Cenário | Indicação |
|---|---|
| **Agente remoto via WebSocket** | #3118 — usuários querem rodar `picoclaw agent` remotamente |
| **Controle de dispositivos Android** | #3157 — automação mobile via ADB |
| **Gateway SimpleX/Tox** | #3093 — demanda por mensageria descentralizada |
| **Skills com instalação guiada** | #3152 — UX de discovery de skills |

### Satisfação Geral

**Indicadores positivos:**
- Ciclo de bug-to-fix extremamente curto (issue #3153 reportada e PR #3154 aberto no mesmo dia).
- 7 PRs de estabilidade/performance backlogados desde maio foram merged em uma única leva, indicando atenção aos fundamentos.
- Novos provedores (MiMo, Doubao Seed) sendo integrados e mantidos.

**Pontos de atrito:**
- Volcengine Doubao Seed tem regressão ativa (tool calls vazando) — impacta usuários do plano Coding.
- Issues "[stale]" no backlog (6 PRs dependabot + 2 fixes com tag stale) indicam necessidade de review mais frequente de dependências.

---

## 8. Backlog que Merece Atenção

### PRs Sem Resposta / Tag [stale] (7 PRs)

| # | Título | Criado | Atualizado | Prioridade |
|---|---|---|---|---|
| [#3104](https://github.com/sipeed/picoclaw/pull/3104) | Dependabot: shadcn 4.7.0 → 4.11.0 | 2026-06-11 | 2026-06-22 | **Média** — Atualização de UI library; pode conter security patches. |
| [#3100](https://github.com/sipeed/picoclaw/pull/3100) | Dependabot: @vitejs/plugin-react 6.0.1 → 6.0.2 | 2026-06-11 | 2026-06-22 | **Baixa** — Patch menor. |
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | Dependabot: typescript-eslint 8.59.3 → 8.62.0 | 2026-06-11 | 2026-06-22 | **Baixa** — Atualização de linting. |
| [#3105](https://github.com/sipeed/picoclaw/pull/3105) | Dependabot: eslint 10.2.1 → 10.4.1 | 2026-06-11 | 2026-06-22 | **Baixa** — Closed. |
| [#3131](https://github.com/sipeed/picoclaw/pull/3131) | fix(registry): add ok checks for tool schema type assertions | 2026-06-15 | 2026-06-22 | **Alta** — Adiciona robustez em type assertions; consistency com padrão do codebase. |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) | fix(web): explicitly ignore resp.Body.Close() errors | 2026-06-15 | 2026-06-22 | **Média** — Limpeza de código; reduz warnings em CI. |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode | 2026-06-12 | 2026-06-22 | **Alta** — Feature significativa sem review. |

### Ação Recomendada

1. **Review urgente:** #3131 (type assertion robustness) — consistency pattern já usado em #3091 (merged).
2. **Merge dependabot:** Todos os 4 PRs de dependências estão prontos; revisão meramente burocrática.
3. **Remote WebSocket:** #3118 representa mudança de arquitetura; merece code review detalhado antes de merge.
4. **Issue #3093:** Feature request SimpleX/Tox tem 3 comentários — manter conversação ativa para validar escopo antes de aceitar PR.

---

**Fim do Relatório**  
_Gerado em 2026-06-23. Dados extraídos de github.com/sipeed/picoclaw._

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 23 de junho de 2026 | nearai/ironclaw

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 23/06/2026, com 18 issues e 25 PRs atualizados nas últimas 24h, porém **sem novos lançamentos**. O foco predominante é o módulo **Reborn**, com emphasis em otimização de performance (inferência, latência, passos redundantes), novas funcionalidades de automação (delete, pause/resume) e refinamento do modelo de permissões. Três PRs significativos foram merged: auto-approve por turno (#5063), permissão por ferramenta (#5062) e execução concorrente de turns (#5085). Uma **regressão crítica** foi reportada em #5139, com tarefas web/research travando no init sem chamadas LLM.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

> Nota: A ausência de releases combinada com alta atividade de PRs e issues sugere que a equipe está em ciclo de preparação para um próximo lançamento, possivelmente focado em features Reborn.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (7 total nas últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#5063](https://github.com/nearai/ironclaw/pull/5063) | feat(approvals): per-turn auto-approve resolution + never-auto-approve hard floor | Implementa toggle global de auto-approve sem restart; adiciona floor de "nunca auto-approve" |
| [#5062](https://github.com/nearai/ironclaw/pull/5062) | feat(approvals): per-tool permission override model for Reborn | Modelo de permissões de 3 estados: `always_allow`, `ask_each_time`, `disabled` |
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | feat(reborn): concurrent turn execution via TurnRunScheduler | Migra de execução serial para concurrent; improve throughput |
| [#5135](https://github.com/nearai/ironclaw/pull/5135) | refactor(reborn): decompose composition god-crate into 6 focused crates | Decomposição inicial do god-crate ~132k linhas (draft) |
| [#5140](https://github.com/nearai/ironclaw/pull/5140) | fix(triggers): surface trigger input errors | Erros de input agora expõem detalhes estruturados em vez de falhas opacas |
| [#5116](https://github.com/nearai/ironclaw/pull/5116) | build(deps): bump everything-else (44 updates) | Atualizações de dependências incluindo agent-client-protocol 0.10.4→0.15.0 e refinery 0.8.16→0.9.2 |
| [#4985](https://github.com/nearai/ironclaw/pull/4985) (via issue closure) | Engine V2: persist LLM usage | Resolução do problema onde `/api/admin/usage` retornava dados vazios com ENGINE_V2=true |

**Destaque:** A convergência de #5063 e #5062 fecha dois issues de longa data (#4959, #4958), indicando maturidade do subsistema de approvals do Reborn.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Reações | Tema |
|-------|--------|-------------|---------|------|
| [#4879](https://github.com/nearai/ironclaw/issues/4879) | IronClaw Reborn Local Dogfooding Findings 06/15-06/21 | 2 | 0 | Dogfooding/UX |
| [#5129](https://github.com/nearai/ironclaw/issues/5129) | Investigate Always approve not working for outbound_delivery_target_set | 1 | 0 | Bug/Permissão |
| [#4925](https://github.com/nearai/ironclaw/issues/4925) | NEAR AI MCP shows "SETUP NEEDED" despite ready | 1 | 0 | UX/Configuração |

### PRs com maior complexidade/esforço (size: XL)

| PR | Título | Escopo |
|----|--------|--------|
| [#5081](https://github.com/nearai/ironclaw/pull/5081) | Add hosted single-tenant Postgres profile | db/postgres, sandbox, ci, docs |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | skill extraction & self-evolution with activation controls | reborn, skill system |
| [#5094](https://github.com/nearai/ironclaw/pull/5094) | /v1/models, model validation, external-tool gate foundation | API compat, model provider |

**Análise:** O ciclo de dogfooding (#4879, #5119) domina a narrativa de issues, refletindo estratégia de "eat your own dog food" — uso interno intenso antes de releases externos. O tema de **self-evolution via skill extraction** (#5061) sugere ambitions de auto-otimização do agente.

---

## 5. Bugs e Estabilidade

### 🔴 Crítico

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#5139](https://github.com/nearai/ironclaw/issues/5139) | Reborn regression: web/research tasks **hang at init** com 0 LLM calls. Afeta 21/147 tasks no PinchBench daily. Commits: `2b2ccc55→704fcd43` (10 commits) | **Crítica** | Aberta |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E scheduled run **failed**. Falha no job E2E (v2-engine) | **Crítica** | Aberta |

### 🟡 Moderado

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5129](https://github.com/nearai/ironclaw/issues/5129) | "Always approve" não funciona para `outbound_delivery_target_set` | Investigação ativa |
| [#4925](https://github.com/nearai/ironclaw/issues/4925) | NEAR AI MCP mostra "SETUP NEEDED" mesmo quando pronto | **Closed** |

### 🟢 Baixo/Menor

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#4969](https://github.com/nearai/ironclaw/pull/4969) | Fix: google-wasm auth required errors (PR aberto) | PR aberto |

**⚠️ Alerta:** A combinação de #5139 (hang) + #4108 (E2E failure) + o commit range de 10 mudanças sugere que o main HEAD (`704fcd43`) está **instável**. Recomendação: isolar a regressão antes de novos PRs lands.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Reborn em desenvolvimento ativo

| Issue/PR | Título | Indicador de Roadmap |
|----------|--------|---------------------|
| [#5125](https://github.com/nearai/ironclaw/issues/5125) | IronClaw Reborn Performance Week 06/22-06/28 | **Prioridade alta** — semana dedicada |
| [#5126](https://github.com/nearai/ironclaw/issues/5126) | Add latency logging and turn timing attribution | Infra de observabilidade |
| [#5127](https://github.com/nearai/ironclaw/issues/5127) | Investigate inference latency and provider tuning | Performance |
| [#5128](https://github.com/nearai/ironclaw/issues/5128) | Reduce unnecessary agent and runtime steps | Performance |
| [#5124](https://github.com/nearai/ironclaw/issues/5124) | Support Telegram channel for IronClaw Reborn | Expansão de canais |
| [#5061](https://github.com/nearai/ironclaw/pull/5061) | skill extraction & self-evolution with activation controls | **Feature diferenciadora** — auto-aprendizado |
| [#5094](https://github.com/nearai/ironclaw/pull/5094) | /v1/models, model validation, external-tool gate foundation | API compat OpenAI |
| [#5137](https://github.com/nearai/ironclaw/pull/5137) | Extract ironclaw_reborn_http_kit (1/N) | Refactoring para extensibilidade |
| [#4712](https://github.com/nearai/ironclaw/pull/4712) | Move Slack setup into WebUI | Integração/UX |

### Sinais de direção estratégica

1. **Performance-first**: Semana dedicada (#5125-#5128) confirma foco em responsividade percebida
2. **Self-evolution**: #5061 indica ambição de agente que melhora a si mesmo via skill extraction
3. **Multi-canal**: Telegram (#5124) como próximo canal além de web
4. **Postgres-first**: #5081预备 hosted single-tenant com Postgres

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas (via dogfooding issues #4879, #5119)

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Startup** | Reborn WebUI startup lento/falhos | Usabilidade diária |
| **Configuração** | Model-provider setup complexo | First-run experience |
| **Credenciais** | NEAR AI MCP mostra "SETUP NEEDED" mesmo pronto (#4925 closed) | Confusão/sujeira de UI |
| **Performance** | Turns feeling slow; inference latency | Satisfação de uso |
| **Permissões** | "Always approve" inconsistente (#5129) | Workflow interrupções |

### Cenários de uso em evidência

- **Dogfooding interno**: Equipes usando IronClaw Reborn como agente diário para trabalho no próprio IronClaw
- **PinchBench daily**: Benchmarking automatizado (21/147 tasks afetadas pela regressão atual)
- **Barcelona Hackathon**: Fork dedicado (#4787) para estabilidade

### Indicadores de satisfação

- **Positivo**: Resolution de permissões (#5063, #5062) e uso LLM tracking (#4985) indicam maturidade
- **Negativo**: Regressão #5139 e E2E failures #4108 impactam confiança

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Dias |
|-------|--------|--------|------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | ~27 |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | build(deps): bump wasm group | 2026-05-25 | ~29 |
| [#4712](https://github.com/nearai/ironclaw/pull/4712) | Move Slack setup into WebUI | 2026-06-10 | ~13 |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) | Barcelona Hackathon fork | 2026-06-12 | ~11 |

### Issues com potencial de blocking

| Issue | Por que merece atenção | Prioridade |
|-------|------------------------|------------|
| [#5139](https://github.com/nearai/ironclaw/issues/5139) | Regressão crítica em produção (10 commits) | **P0** |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | E2E quebrado = sem confiança em releases | **P1** |
| [#5129](https://github.com/nearai/ironclaw/issues/5129) | Auto-approve quebrado = UX inconsistente | **P1** |

### PRs "stale" para review

| PR | Tamanho | Por que stalled? |
|----|---------|-----------------|
| [#5094](https://github.com/nearai/ironclaw/pull/5094) | XL | OpenAI compat + model validation foundation |
| [#4712](https://github.com/nearai/ironclaw/pull/4712) | XL | Slack setup migration (aberto há 13 dias) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 14 | 🟢 Alta |
| PRs abertos (24h) | 18 | 🟢 Muito alta |
| Releases (24h) | 0 | 🟡 Nenhuma |
| Bugs críticos abertos | 2 | 🔴 Alerta |
| PRs merged (24h) | 7 | 🟢 Bom ritmo |
| Issues fechadas (24h) | 4 | 🟡 Moderado |

**Índice de Saúde Geral:** 🟡 **7.2/10** — Alta atividade com regressões pendentes; atenção imediata à regressão #5139.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-23 00:00–23:59 UTC. Para informações atualizadas, consulte [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-06-23

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** mantém atividade intensa com **22 issues e 50 PRs** atualizados nas últimas 24h, sem novos lançamentos. A atividade concentra-se na **resolução de bugs críticos** (congelamento de agentes, falhas de Cron, problemas de inicialização) e em **melhorias de usabilidade mobile** — com 11 PRs dedicados a adaptações responsivas em diversas páginas do console. A comunidade demonstra preocupação com a **estabilidade do core** antes de novos recursos, sinalizada por issue de destaque com 2 comentários e debate em curso.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de estabilização актив内部 sem versão oficial publicada, sugerindo foco em consolidar contribuições pendentes antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs merged/fechados de destaque

| PR | Descrição | Impacto |
|---|---|---|
| [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) | **fix(security): isolate keychain master key per install** | Corrige vulnerabilidade crítica — o keychain do SO era compartilhado entre instalações, expondo chaves mestras. |
| [#5027](https://github.com/agentscope-ai/QwenPaw/pull/5027) | **feat(acp): stop backend-warmup sessions from polluting the console** | Remove sessões temporárias de warmup do histórico persistente, limpando `chats.json` e workspaces. |
| [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) | **feat(memory): recency-aware ranking for memory_search** | Implementa decay temporal exponencial para notas diárias de memória, respeitando timezone do usuário. Fecha #5316. |
| [#5297](https://github.com/agentscope-ai/QwenPaw/pull/5297) | **feat(models): batch test & batch delete models** | Permite testar e excluir N modelos em paralelo via `asyncio.gather`, acelerando gerenciamento de providers. |
| [#5396](https://github.com/agentscope-ai/QwenPaw/pull/5396) | **fix(runtime): respect configured workspace prompt files** | Corrige montagem de system prompts — arquivos markdown de workspace agora respeitam `system_prompt_files` em vez de forçar carregamento de `AGENTS.md`, `SOUL.md`, `PROFILE.md`. |
| [#5097](https://github.com/agentscope-ai/QwenPaw/pull/5097) | **fix(security): fix Shield icon centering** | Ajuste CSS menor em "Allow No Auth Hosts" — ícone de escudo agora centralizado verticalmente. |

### PRs em revisão relevantes

| PR | Descrição | Relevância |
|---|---|---|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | **feat(context): scroll context manager — durable history + recall REPL** | Alternativa ao compression nativa: persiste conversa em SQLite e permite recall via REPL Python. potencial quebra de paradigma na gestão de contexto. |
| [#5400](https://github.com/agentscope-ai/QwenPaw/pull/5400) | **feat(tui): animate logo into place on startup** | Animação de logo "Q w e n P a w" no TUI — refinamento cosmético de onboarding. |
| [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) | **feat(providers): support custom model ordering within providers** | Drag-and-drop ou botões para reordenar modelos, com `sort_order` persistido no backend. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Tipo | Comentários | Análise da Demanda |
|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Bug | 17 | **Bug crítico**: sub-agente dispara context compaction e congela todo o processo QwenPaw, exigindo restart manual. Demanda correção prioritária em pipeline de contexto. |
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Bug | 9 | Regressão persistente: skills nativos desabilitados voltam a habilitar após cada upgrade. Impacta fluxo de trabalho recorrente — issue duplicada (#4807). |
| [#5370](https://github.com/agentscope-ai/QwenPaw/issues/5370) | Bug | 5 | `send_file_to_user` gera URL com path absoluto mas o frontend trunca para apenas o filename ao construir `/api/files/preview/`, causando HTTP 404. **Ja está fechada** — indica correção em andamento. |
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | Feature | 5 (+2 👍) | **Demanda estratégica**: integração de knowledge base pessoal com capacidades de agente, afetando Core/Backend e Console. Evidencia necessidade de camada de memória persistente orientada a usuário. |
| [#5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) | Bug | 4 | Message queue causa "crosstalk" entre agentes — mensagem de um agente aparece em outro. Bug de isolamento de estado em sistema multi-agente. **Ja fechada** — possível hotfix. |
| [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) | Enhancement | 2 | **Sinal de maturidade**: contributor externo solicita foco em estabilidade antes de features, listando responsividade mobile e interação de agentes como problemas prioritários. |
| [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254) | Question | 2 | Migração de OpenClaw/Hermes para QwenPaw — evidencia interesse de ecossistema competidor e necessidade de ferramentas de migração de configuração. |

### Tendências de PRs hot

**Mobile-first é prioritário**: contributor `yaozy2020` submeteu **11 PRs** em sequência para adaptação mobile de páginas individuais (Models, Environments, Workspace, CronJobs, Sessions, Channels, MCP, ACP, Inbox, ModelSelector, PageHeader) — todas com tag `first-time-contributor`. Isso indica investimento sistemático em acessibilidade mobile.

---

## 5. Bugs e Estabilidade

### Por severidade (baseado em impacto funcional)

#### 🔴 Críticos (impacto em produção, trabalho bloqueado)

| Issue | Descrição | Status | Comentários |
|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Sub-agente dispara context compaction → processo inteiro congela | OPEN | 17 comentários — maior issue ativa. Sem workaround além de restart. |
| [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | Cron scheduler para de disparar jobs enquanto app continua vivo | OPEN | Jobs habilitados param de executar em QwenPaw 1.1.12.post1. Afeta automação. |
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Install via pip → Internal Server Error na inicialização | OPEN | `get_remote_addr(transport)` causa erro no log Windows. |
| [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | Agent congela após submit, UI mostra input habilitado em vez de stop | OPEN | Ambas versões (conda e Tauri) afetadas em Windows 11. Suspeita de compatibilidade DeepSeek. |

#### 🟠 Altos (funcionamento degradado, workaround disponível)

| Issue | Descrição | Status | Comentários |
|---|---|---|---|
| [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) | Plugin Loader não inicia no Tauri desktop — impossibilita instalação de plugins | CLOSED | Indica hotfix ou workaround documentado. |
| [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | Shell command parsing falha com caracteres especiais (pipes, redirects, stderr) | OPEN | Comandos básicos (`ls`, `pwd`) funcionam; sintaxe shell avançada quebra. |
| [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) | Provider Zhipu: API conecta, mas modelos individuais sempre falham | OPEN | Possível bug em routing de modelo ou parsing de nome. |
| [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` retorna 200 mas descarta mensagem silenciosamente | OPEN | Quando agent está ocupado, API não entrega mensagem — sem feedback ao cliente. |
| [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378) | Custom model adicionada: endpoint preenchido automaticamente e não pode ser removido | OPEN | UI fica inutilizável após adicionar modelo customizado. |

#### 🟡 Médios (incômodos, impacto parcial)

| Issue | Descrição | Status | Comentários |
|---|---|---|---|
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Built-in skills re-habilitam após upgrade | OPEN | Regressão recorrente — usuários precisam desabilitar manualmente a cada update. |
| [#5358](https://github.com/agentscope-ai/QwenPaw/issues/5358) | `TypeError: Cannot read properties of null` em session switch | OPEN | Console error esporádico em fnOS build from source. |
| [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) | Tauri Windows: Python não encontrado para executar scripts em skills | OPEN | Problema de path/env em ambiente Tauri Windows com conda. |
| [#5320](https://github.com/agentscope-ai/QwenPaw/issues/5320) | `send_file_to_user` de imagens não exibe no chat após v1.1.12 | CLOSED | Bug de renderização de FileBlock no console. |

### Estatísticas de bugs hoje
- **Total bugs reportados**: ~15
- **Críticos**: 4
- **Ja fechados**: 5 (indica velocidade de triagem razoável)
- **Taxa de fechamento (bugs)**: ~33% em 24h

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features com demanda clara

| Issue | Descrição | Votes | Componentes | Sinal estratégico |
|---|---|---|---|---|
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | **Personal knowledge base** — acesso direto a base de conhecimento do usuário via console | 2 👍 | Core, Console | Posicionamento como assistente pessoal completo, não apenas agente |
| [#5392](https://github.com/agentscope-ai/QwenPaw/issues/5392) | **Decouple agent from workspace** — mesmo agente usado em múltiplos workspaces | 1 👍 | Core, Console | Suporte a multi-tenant ou reuso de configuração |
| [#5387](https://github.com/agentscope-ai/QwenPaw/issues/5387) | **Recall-aware signals for memory consolidation** | 1 👍 | Memory | Evolução da memória de longo prazo — memória promoted por recall frequente |
| [#5322](https://github.com/agentscope-ai/QwenPaw/issues/5322) | **Real-time UI update via API** | 0 👍 | Console, API | Ja fechada — indica feature em desenvolvimento (possível merge próximo) |
| [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254) | **Import config from OpenClaw/Hermes** | 0 👍 | Migration | Compatibilidade com ecossistema competidor |

### PRs em revisão com potencial de merge

| PR | Feature | Observação |
|---|---|---|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | Scroll context manager (SQLite + REPL recall) | Paradigma alternativo de gestão de contexto |
| [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) | Recency-aware memory ranking | Evolução do sistema de memória |
| [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) | Custom model ordering | UX de gestão de providers |

### Sinais de direção técnica

1. **Mobile como prioridade explícita**: 11 PRs de mobile adaptation simultâneos indicam consenso interno sobre necessidade de responsividade.
2. **Segurança em foco**: 2 PRs de security merged (#5028, #5097) — isolamento de keychain e CSS.
3. **Context management evolui**: scroll alternative (#5321) e recency ranking (#5325) mostram investimento em gestão de contexto longa.
4. **Estabilidade antes de features**: issue [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) ecoa demanda da comunidade por disciplina de releases.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

| Dor | Frequência | Impacto |
|---|---|---|
| **Upgrade quebra configuração** | 2 issues (#5262, #4807) | Usuários precisam re-desabilitar skills manualmente após cada update. experience de upgrade ruim. |
| **Instabilidade de agentes** | 4 issues críticas | Agentes congelam com context compaction, Cron para, UI entra em estado inconsistente. Afeta produtividade. |
| **Message queue não confiável** | 1 issue principal + 1 API | Crosstalk entre agentes; API descarta mensagens silenciosamente. Sistema de mensageria precisa de hardening. |
| **Tauri desktop quebrado** | 3 issues específicas | Plugin loader, Python path, e Internal Server Error afetam experiência desktop. Reforça que Tauri é superfície problemática. |
| **Shell parsing limitado** | 1 issue | Utilitários de linha de comando perdem funcionalidade com pipes/redirects. Afeta automação via skills. |

### Cenários de uso emergidos

- **Multi-agente colaborativo**: Issue #5354 (crosstalk) e #5218 (sub-agente) revelam uso de múltiplos agentes simultâneos em produção.
- **Desktop como ambiente principal**: Issues específicas de Tauri (Windows) indicam base de usuários desktop significativa.
- **Migração entre plataformas**: Pergunta sobre OpenClaw/Hermes (#5254) sugere usuários avaliando switch de outros ecossistemas.
- **Automação via Cron**: Jobs agendados sendo usados em produção — parada do scheduler (#5398) é blocking.

### Satisfação inferred

**Polarizada**: Comunidade ativa contribui com PRs (especialmente mobile), mas bugs críticos têm engajamento alto (17 comentários em #5218). Ausência de releases recentes pode indicar waiting period ou foco em qualidade.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| Issue | Idade | Status | Motivo para atenção |
|---|---|---|---|
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | ~77 dias | OPEN | Feature de knowledge base com 2 👍 — demanda estratégica sem resposta clara do core team |
| [#4889](https://github.com/agentscope-ai/QwenPaw/issues/4889) | ~21 dias | CLOSED | Ja fechada, mas representa padrão

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data de referência:** 2026-06-23 | **Período analisado:** Últimas 24h

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. Duas RFCs de grande impacto foram fechadas (#7420 — Sistema de Plugins Dynamic-Library nativo e #7674 — Eliminação do Node.js via WebAssembly), sinalizando um momento decisório na arquitetura do projeto. Três PRs foram merged com sucesso, incluindo correções críticas de canais. O esforço de segurança e supply chain está em destaque, com múltiplas RFCs e PRs de CI em paralelo. A comunidade demonstra foco em estabilidade (bugs P1 como context budget e Discord channel) e preparação para a v0.9.0 (tracker #7432 com 134 itens abertos).

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em intenso desenvolvimento pré-release, conforme evidenciado pelo tracker de milestones v0.8.2 (PR #7763 marcado como "DO NOT MERGE — intended for v0.8.2") e pela coordenação ativa em torno de breaking changes para v0.9.0.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#8051** | `fix(channels): suppress bound channels when agent disabled` | **Crítico** — Resolveu bug S0 onde Discord channels permaneciam ativos após desativar agente | [PR #8051](https://github.com/zeroclaw-labs/zeroclaw/pull/8051) |
| **#8041** | `test(runtime): pin hook panic recovery + cancellation propagation` | **Qualidade** — Adicionou testes unitários que cobriam zero do código existente de HookRunner | [PR #8041](https://github.com/zeroclaw-labs/zeroclaw/pull/8041) |
| **#7720** | `feat(channels/whatsapp): add allowed_groups per-JID group allowlist` | **Feature** — Permite operators restringirem bot a grupos específicos via configuração | [PR #7720](https://github.com/zeroclaw-labs/zeroclaw/pull/7720) |

### PRs em Andamento de Destaque

| # | Título | Tamanho | Prioridade | Link |
|---|--------|---------|------------|------|
| **#7763** | `feat(gateway): A2A agent discovery surface` | **XL** | Arquitetural — v0.8.2 | [PR #7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763) |
| **#8104** | `fix(daemon): drain gateway before RPC reload` | **M** | High | [PR #8104](https://github.com/zeroclaw-labs/zeroclaw/pull/8104) |
| **#7946** | `feat(runtime): add model context window ctx bar` | **L** | Usabilidade | [PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) |
| **#8023** | `fix(mcp): stop leaking stdio child processes per heartbeat tick` | **S** | High | [PR #8023](https://github.com/zeroclaw-labs/zeroclaw/pull/8023) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Tags Principais | Link |
|---|--------|-------------|-----------------|------|
| **#7420** | RFC: Native Dynamic-Library Plugin System | 6 | `type:rfc`, `domain:architecture` | [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) |
| **#7674** | RFC: WebAssembly-first, eliminate Node.js | 5 | `type:rfc`, `security` | [Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) |
| **#6289** | Prompt-triggered install suggestions for missing skills | 5 | `priority:p2`, `skills` | [Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| **#8177** | RFC: Supply chain signing (PGP, hermetic builds, SLSA) | 3 | `type:rfc`, `security` | [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| **#8132** | Replace React/Vite web UI with Rust→Wasm framework | 2 + 👍1 | `type:rfc`, `web` | [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |

### Análise dos Temas

**Arquitetura e Futuro do Projeto:**
- A RFC #7420 (Dynamic-Library Plugin System) foi fechada, indicando decisão tomada sobre o modelo de plugins nativo
- A RFC #7674 (WebAssembly-first) também foi fechada, sinalizando compromisso com eliminação do Node.js
- Issue #8132 propõe substituição completa do stack React/Vite por framework Rust→Wasm (Dioxus, Leptos ou Yew)

**Segurança e Supply Chain:**
- RFC #8177 busca implementar assinatura de supply chain com PGP hardware-backed e provenance SLSA
- Issues #8059, #8057, #8056 (CI security) estão em progresso, focando em:
  - `deny.toml` tracking de advisories
  - CodeQL, npm audit, cargo outdated, Trivy, SBOM
  - Cargo audit obrigatório em PR gates

**Descoberta e UX:**
- Issue #6289 (sugestões de instalação automática de skills) demonstra demanda por better discovery

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### **S0/S1 — Críticos (workflow bloqueado)**

| # | Título | Canal | Status | Link |
|---|--------|-------|--------|------|
| **#5808** | Default 32k context budget excedido no iteration 1 | Runtime | `in-progress` | [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| **#8193** | MCP tools ausentes em TUI sessions enquanto gateway vê | MCP/Gateway | `accepted` | [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) |
| **#7756** | native/MCP tools indisponíveis em OpenAI Responses e Anthropic turns | Provider | `accepted` | [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) |
| **#8044** | `/model --agent` sem autorização por remetente | Security/Gateway | `accepted` | [Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) |

#### **S2 — Degradado**

| # | Título | Canal | Status | Link |
|---|--------|-------|--------|------|
| **#6360** | Prompt Caching não funciona com Telegram | Telegram | `accepted` | [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) |
| **#7462** | 74 test failures no Windows (Unix-only test commands) | CI | `accepted` | [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |

#### **S3 — Menor**

| # | Título | Canal | Status | Link |
|---|--------|-------|--------|------|
| **#7269** | Docs build warning noise | Docs | `in-progress` | [Issue #7269](https://github.com/zeroclaw-labs/zeroclaw/issues/7269) |

### Observações de Estabilidade

- **Bug Discord (#8013) foi RESOLVIDO** via PR #8051 — 채널 bound não parava ao desabilitar agente
- **Windows compatibility** (#7462) é problema recorrente — CI só roda em Linux
- **Provider compatibility** (#7756, #6360) indica gaps de abstraction entre providers

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aceitas em Pipeline

| # | Título | Prioridade | Domínio | Link |
|---|--------|------------|---------|------|
| **#6289** | Prompt-triggered install suggestions para skills/plugins | P2 | Skills | [Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| **#6140** | Hybrid skills + WASM tools | P2 | Architecture | [Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) |
| **#8046** | Optional Telegram webhook mode (alternativa a getUpdates) | P2 | Channel | [Issue #8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) |
| **#8138** | OpenRouter model fallbacks array | P2 | Provider | [Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) |
| **#8134** | `session_ttl_hours` — auto-truncate stale session history | P2 | Channel/Runtime | [Issue #8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) |
| **#8125** | Auto `yolo` risk profile na quickstart | P2 | Quickstart | [Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) |

### RFCs Abertas (Roadmap Indicativo)

| # | Título | Escopo | Link |
|---|--------|--------|------|
| **#8177** | Supply chain signing + SLSA provenance | Security | [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| **#8135** | Wasm-first plugin runtime (default-on, capability enforcement) | Architecture | [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) |
| **#8132** | Replace React/Vite com Rust→Wasm framework | Web | [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| **#8078** | zerocode local pre-submission gate | CI | [Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) |
| **#8043** | Retire aardvark-sys crate (fold into zeroclaw-hardware) | Architecture | [Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) |
| **#6943** | Deconflict Plugin System Goals em FND-001 | Architecture | [Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) |

### Sinais de Roadmap para v0.9.0

O tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) coordena 134 itens abertos, organizados em:
- Auth hardening
- Security boundaries
- Gateway/A2A multi-agent
- Tool policy
- Breaking changes

**Indicadores de direção estratégica:**
1. **WebAssembly como runtime padrão** — múltiplas RFCs (#7674 fechada, #8135, #8132)
2. **Segurança first** — supply chain signing, SLSA, cargo audit gates
3. **Multi-channel maturity** — Telegram webhooks, session TTL, WhatsApp group allowlist

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Issue |
|-----|-----------|-------|
| **Context budget inadequado** | 3.3x overshoot no primeiro turno de conversa | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| **Descoberta de Skills** | Usuários não sabem o que está disponível sem buscar | [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| **Keybind conflicts no MacOS** | `ctrl+up` conflita com globals do OS | [#

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*