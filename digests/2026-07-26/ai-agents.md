# Resumo diário do ecossistema de agentes de IA 2026-07-26

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-25 20:43 UTC

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

**Data de referência:** 2026-07-26  
**Projetos analisados:** 7 (6 com dados disponíveis)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **saúde bipolar** em julho de 2026. Enquanto **Hermes Agent** e **IronClaw** registram volumes excepcionais de atividade (100+ e 45 itens respectivamente), **PicoClaw** e **CoPaw** mantêm ritmo moderado com foco em estabilização. **NanoBot** acaba de consolidar um release major (v0.3.0) com 260 PRs merged, demonstrando capacidade de coordenação comunitária em escala. O mercado fragmenta-se em nichos distintos: CLI/nós headless (NanoBot, Hermes), desktop apps (Hermes, IronClaw, CoPaw), e integrações de canal (PicoClaw). Notavelmente, nenhum projeto demonstra atividade significativa em segurança de multi-agente ou isolamento de dados — lacuna que a comunidade CoPaw já sinaliza como necessidade.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Bugs Críticos |
|---------|-------------|-----------|----------|-------|--------------|
| **Hermes Agent** | 50 | 50 | 0 | 🔴 Instável | 8+ P1/P2 (auth, Desktop) |
| **IronClaw** | 16 | 29 | 0 (v1.0 iminente) | 🟢 Estável | 1 Alta, 1 Crítica |
| **NanoBot** | 1 | 12 | **v0.3.0** | 🟢 Estável | 2 P1 abertas |
| **CoPaw** | 6 | 10 | 0 | 🟡 Moderada | 1 Alta (conectividade) |
| **PicoClaw** | 2 | 3 | 0 | 🟡 Moderada | 1 Alta (Matrix sync) |
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativa | — |

**Observação:** Hermes Agent apresenta volume 8x maior que a média, indicando possível dívida técnica acumulada ou crescimento acelerado. NanoBot contrasta por ter交付 um release major com saúde controlada.

---

## 3. Posicionamento do Projeto Principal

### Diferenciação Técnica

| Aspecto | Hermes Agent | IronClaw | NanoBot |
|---------|--------------|----------|---------|
| **Entry point** | Desktop + CLI | CLI modular (Rust) | CLI + WebUI |
| **Arquitetura** | Monolito Python | Microserviços Rust | Microkernel Node |
| **Ecosistema** | Ollama, cloud modes | Skills, signing | WebSocket streaming |
| **Comunidade** | ~50 contribuidores ativos | ~15 core reviewers | ~38 novos (v0.3.0) |

**NanoBot (referência secundária)** destaca-se por:

- **Experiência de onboarding imbatível**: comando `nanobot webui` one-liner que abre browser automaticamente (PR #5085)
- **Maturidade de streaming**: WebSocket com viewport motion animada — UX que Hermes ainda não igualou
- **Release engineering disciplinado**: 260 PRs em um release sem regressões documentadas

**Hermes Agent** lidera em volume de issues (indício de adoção massiva), mas paga preço de estabilidade — 8+ bugs P1/P2 simultâneos.

---

## 4. Focos Técnicos Compartilhados

### Problemas Transversais Identificados

| Problema | Projetos Afetados | Severidade |
|----------|------------------|------------|
| **Autenticação/Auth flows** | Hermes (#71514, #71205, #71491), IronClaw (#6667) | 🔴 Alta |
| **Gestão de sessão em canais** | PicoClaw (Matrix), NanoBot (unified sessions #4928), Hermes (webhook) | 🔴 Alta |
| **Configuração persistence** | NanoBot (#1073 — 184 dias), Hermes (#51560) | 🟡 Média |
| **Sessões cross-platform** | Hermes (#71571), CoPaw (#6461) | 🟡 Média |
| **Performance de bundling** | IronClaw (#6632 — 70% redução), CoPaw (#6460) | 🟡 Média |

**Padrão emergente:** Autenticação e gestão de sessão multi-canal é o principal desafio arquitetural. Cada projeto resolve independentemente — não há convergência para solução compartilhada.

### Lacunas Comuns

1. **Isolamento de agentes**: CoPaw (#6461) reporta vazamento de memória entre agentes — nenhum outro projeto documenta isso, mas a ausência pode indicar falta de investigação
2. **Cron/scheduling reliability**: Hermes (#70943), CoPaw (#6458), NanoBot (#3035) — todos têm issues com tarefas agendadas
3. **CI/CD maturity**: NanoBot acabou de implementar coverage (#1284), Hermes tem histórico de regressões

---

## 5. Análise de Diferenciação

### Segmentação de Mercado

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ECOSSISTEMA DE AGENTES IA                        │
├─────────────────┬─────────────────┬─────────────────┬──────────────┤
│    EMBEDDED     │    CLI/HEADLESS │    DESKTOP      │  COLLABORATIV │
│                 │                 │                 │              │
│   PicoClaw      │    NanoBot      │  Hermes Agent   │   IronClaw    │
│   (Matrix)      │    (Gateway)    │   (Desktop)    │   (Skills)    │
│                 │                 │                 │              │
│   CoPaw         │                 │                 │              │
│   (Desktop)     │                 │                 │              │
└─────────────────┴─────────────────┴─────────────────┴──────────────┘
```

| Dimensão | NanoBot | Hermes | IronClaw | CoPaw |
|----------|---------|--------|----------|-------|
| **Público-alvo** | DevOps, operadores | Usuários finais | Desenvolvedores Rust | Criadores de workflows |
| **Diferenciador** | Onboarding, streaming | Volume, cloud | Modularidade, signing | ComfyUI, QQ integration |
| **Modelo de deploy** | Headless-first | Desktop-first | CLI modular | Desktop + API |
| **Linguagem** | TypeScript/Node | Python | Rust | Python |
| **Maturidade** | Crescendo (v0.3) | Estável (v0.19) | Pre-v1.0 | Estável (v2.0) |

**Contraste Architectural:**

- **IronClaw** opta por Rust + modularidade → performance e segurança, ao custo de curva de adoção
- **Hermes** escolhe Python → acessibilidade, ao custo de estabilidade em Desktop
- **NanoBot** abraça TypeScript → produtividade web, com dependência de ecossistema Node

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs merged (30d) | Issues fechadas | Razão Close/Reaberto | Maturidade |
|---------|-----------------|-----------------|---------------------|------------|
| **NanoBot** | ~260 (release) | ~50 | Alta | 🟢 Consolidando |
| **Hermes** | ~200+ | ~150 | Média | 🟡 Escala + dívida |
| **IronClaw** | ~40 | ~30 | Alta | 🟡 Preparando v1 |
| **CoPaw** | ~15 | ~10 | Alta | 🟢 Estável |
| **PicoClaw** | ~5 | ~3 | Baixa | 🟡 Estagnado |

### Sinais de Maturidade

| Indicador | Líder | Implícito |
|-----------|-------|-----------|
| **Test coverage implementado** | NanoBot (#1284) | others sem CI robusto |
| **Release notes detalhadas** | NanoBot (v0.3.0) | Hermes vagueia em v0.19 |
| **Taxonomia de erros** | IronClaw (#6676) | Cultura de observabilidade |
| **Breaking changes documentadas** | IronClaw (#5598) |others inconsistentes |
| **Bug prioritization explícita** | NanoBot (P1/P2 labeling) | Hermes dilui severidades |

**IronClaw** demonstra maturidade engineering superior com taxonomia diária de falhas e mutation testing, porém com PR #5598 pendente há 23 dias — sinal de gargalo em breaking changes.

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

#### 1. 🔥 Desktop como battleground
- Hermes investe heavily em estabilidade Desktop (8+ bugs P1/P2)
- CoPaw evolui integração com ComfyUI e Windows
- IronClaw prepara v1.0 com foco em UX

**Implicação:** A próxima fronteira é Desktop-first, não CLI.

#### 2. 🔥 Autenticação federada e multi-canal
- Sessões unificadas (NanoBot #4928)
- OAuth refresh coalescing (Hermes #71548)
- Attested signing (IronClaw #6672)

**Implicação:** Agentes estão migrando de auth simples para modelos federados com múltiplos provedores.

#### 3. 🔥 Multi-agente e isolamento
- CoPaw reporta vulnerability de isolamento (#6461)
- Hermes trabalha em webhook sessions (#57972)
- NanoBot introduz "agency" para subagentes

**Implicação:** Arquiteturas multi-agente estão amadurecendo, mas isolamento de dados é lacuna crítica.

#### 4. 🟡 Edge computing e ARM
- PicoClaw busca ARMv7 support (#3205)
- CoPaw tem issues de CPU em Edge/Wayland (#6460)

**Implicação:** Execução em hardware limitado (Raspberry Pi, dispositivos Edge) é caso de uso emergente.

#### 5. 🟡 Scheduling confiável
- Cron reliability em múltiplos projetos
- Grace windows para tarefas atrasadas (NanoBot #3035)

**Implicação:** Agentes autônomos precisam de robust scheduling — problema ainda não resolvido em nenhum projeto.

---

## Síntese para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **DevOps/Infra** | NanoBot — melhor onboarding e streaming |
| **Usuários finais** | Evitar Hermes Desktop no momento (8+ bugs P1/P2) |
| **Desenvolvedores Rust** | IronClaw — arquitetura superior, v1.0 em breve |
| **Cenários multi-agente** | Aguardar resolução de isolamento em CoPaw (#6461) |
| **Embeddings/IoT** | Monitorar PicoClaw ARMv7 efforts |

**Projeto com melhor momentum geral:** NanoBot — release disciplinado, saúde controlada, features diferenciadas (WebUI, agency).

**Projeto com maior risco:** Hermes Agent — volume alto mascara instabilidade sistêmica.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-26

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** em 26 de julho de 2026, impulsionado pelo lançamento da versão **v0.3.0**. Nas últimas 24 horas, foram registradas **12 PRs atualizadas** (5 abertas, 7 merged/fechadas) e **1 issue** resolvida. O release trouxe um marco significativo: **260 PRs merged** e **38 novos contribuidores**, com destaque para a nova capacidade de agency do agente. A atividade concentra-se em refinamentos pós-lançamento, correções de bugs P1 (priority 1) e melhorias na experiência do WebUI.

---

## 2. Lançamentos

### 🆕 v0.3.0 — "The agent gained agency"

| Métrica | Valor |
|---------|-------|
| PRs merged | 260 |
| Novos contribuidores | 38 |

**Destaques do release:**
- **`nanobot webui`**: Novo comando one-liner que prepara o WebUI local, inicia o gateway e abre o browser workbench automaticamente
- Agente com capacidade de agency aprimorada
- WebSocket streaming com câmera de viewport animada para melhor acompanhamento de respostas
- Limpeza de compatibilidade retroativa

**Breaking changes:**
- Preparação para descontinuar `legacy session path fallback` e lazy migration após v0.3.0
- `agents.defaults.maxMessages` warning removido
- Janela de compatibilidade para APIs legadas marcadas para v0.3.1

**Notas de migração:**
- `NANOBOT_SKIP_WIZARD=1` agora tem precedência sobre o setup wizard
- Manter `nanobot gateway` como entry point para operadores e serviços (sem mudança)

📎 [Release v0.3.0](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0)

---

## 3. Progresso do Projeto

### PRs Merged/Fecha

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#5085](https://github.com/HKUDS/nanobot/pull/5085) | feat: open WebUI after fresh desktop install | feature | ✅ UX — Auto-abertura do WebUI após instalação limpa |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | Smooth WebUI streaming with viewport motion | webui | ✅ UX — Streaming suavizado com câmera ease-out |
| [#5083](https://github.com/HKUDS/nanobot/pull/5083) | chore: defer compatibility cleanup to v0.3.1 | chore | 📋 Cleanup postponed |
| [#5082](https://github.com/HKUDS/nanobot/pull/5082) | docs(readme): clarify WebUI/gateway/CLI quick starts | docs | ✅ Onboarding — Documentação unificada |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix(webui): keep late subagent turns visible | bugfix | ✅ Estabilidade — Mantém turns de subagentes visíveis |
| [#5081](https://github.com/HKUDS/nanobot/pull/5081) | chore(release): prepare v0.3.0 | release | 🚀 Preparação do release |
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) | Add CI workflow with quality checks/coverage | infrastructure | ✅ DevEx — Pipeline CI/CD implementado |

**PRs críticas merged hoje:**
1. **#5085** — Resolve o cenário de "fresh install" com auto-abertura do browser (quando sessão desktop disponível), mantendo wizard para SSH/headless
2. **#1284** — Implementa pipeline CI/CD completo com quality checks e coverage (encerra issue #1131)
3. **#4954** — Preserva metadados de delivery do WebUI quando subagentes são spawned tardiamente

---

## 4. Temas Quentes da Comunidade

### Issues/PRs em Destaque

| # | Título | Comentários | Reações | Tipo |
|---|--------|-------------|---------|------|
| [#1131](https://github.com/HKUDS/nanobot/issues/1131) | CI Test Coverage | 4 | 0 | infrastructure |

**Análise — Issue #1131:**
A comunidade demonstrou interesse em clarificar a infraestrutura de CI. A issue originou a PR #1284 que implementou:
- Automated testing em cada push e PR
- Code quality checks
- Coverage reports

📎 [Issue #1131](https://github.com/HKUDS/nanobot/issues/1131)

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Reportados/Fixados (Prioridade P1)

| # | Título | Status | Severidade | Impacto |
|---|--------|--------|------------|---------|
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix(heartbeat): route unified sessions to last channel | OPEN | P1 | Roteamento de sessões unificadas para o canal correto |
| [#5084](https://github.com/HKUDS/nanobot/pull/5084) | fix(agent): preserve pending message runtime context | OPEN | P1 | Preserva contexto de runtime para mensagens pendentes em mid-turn |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix(webui): keep late subagent turns visible | CLOSED | P1 | ✅ Corrigido — Turns de subagentes tardios visíveis |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | fix: preserve unknown config keys when saving | OPEN | Alta | Evita perda de dados em chaves de config customizadas |

**Bugs em análise:**
- **#4928**: Problema com `unifiedS` — heartbeat deliveries não estão sendo roteadas para o canal correto em sessões unificadas
- **#5084**: Resolve runtime context para mensagens de usuário em mid-turn usando `RequestContext` próprio
- **#1073**: `save_config()` via Pydantic `model_dump()` descarta chaves unknown, causando perda de configurações manuais

**Bug crítico resuelto:**
- **#4954** — Subagentes "tardios" agora mantêm seus turns visíveis no WebUI, com routing correto do WebSocket

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🚀 Features em Progresso

| # | Título | Tipo | Prioridade |
|---|--------|------|------------|
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | feat(exec): allow extra bwrap bind roots | feature | normal |
| [#3035](https://github.com/HKUDS/nanobot/pull/3035) | fix(cron): grace window for at-type tasks | bugfix/enhancement | normal |

**Feature #4625 — Extra bwrap bind roots:**
Permite expor diretórios de tools do usuário (ex: `~/.local/bin`, `~/.cargo/bin`) dentro do sandbox `bwrap`, mantendo o sandbox default locked down.

**Feature #3035 — Grace window para tarefas `at`:**
Introduz 10 minutos de janela de grace (`_AT_GRACE_WINDOW_MS`) para tarefas `at`轻微mente expiradas devido a latência LLM, evitando que任務 sejam ignoradas.

**Sinais de roadmap:**
- Compatibilidade cleanup movido para **v0.3.1**
- Focus em estabilidade de sessões unificadas (unified sessions)
- Expansão de controles de sandbox (bwrap)

---

## 7. Resumo de Feedback dos Usuários

*(Com base em issues e discussions recentes)*

### Dores Identificadas:

| Dor | evidência | Status |
|-----|-----------|--------|
| Falta de clareza sobre CI e test coverage | #1131 | ✅ Resolvido via #1284 |
| Configurações customizadas sendo perdidas | #1073 | 🔄 Em análise |
| Fluxo de onboarding confuso (WebUI vs Gateway vs CLI) | #5082 | ✅ Documentado |
| Tarefas cron `at` não executando por delay LLM | #3035 | 🔄 PR aberta |

### Cenários de Uso Observados:
1. **Usuários desktop** esperam auto-abertura do browser após instalação → #5085 ✅
2. **Operadores headless/SSH** querem wizard preservado → #5085 respeita
3. **Deployments customizados** precisam expor tools em sandbox → #4625 endereça

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Pendentes

| # | Título | Criado | Dias | Tipo |
|---|--------|--------|------|------|
| [#3035](https://github.com/HKUDS/nanobot/pull/3035) | fix(cron): grace window for at-type tasks | 2026-04-11 | ~106 dias | bugfix |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | fix: preserve unknown config keys | 2026-02-23 | ~184 dias | bugfix |
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | feat(exec): extra bwrap bind roots | 2026-07-01 | ~25 dias | feature |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix(heartbeat): unified sessions route | 2026-07-14 | ~12 dias | bugfix P1 |

### ⚠️ Atenção Recomendada:

1. **#1073** — 184 dias aberta: Perda de dados em configurações customizadas é bug crítico. Priorizar review.

2. **#3035** — 106 dias: Grace window para tarefas cron `at` é enhancement valioso para reliability. PR pronta para merge.

3. **#4625** — Feature de sandbox útil para power users. Já em PR, precisa de review.

4. **#4928** — Bug P1 em sessões unificadas. Roteamento incorreto de heartbeat afeta multi-canal.

---

## Resumo Executivo

| Indicador | Status |
|-----------|--------|
| 🔥 Atividade (24h) | **Alta** — 12 PRs, 1 release |
| 📦 Release | **v0.3.0** — 260 PRs, 38 contributors |
| 🐛 Bugs P1 abertos | 2 (#4928, #5084) |
| 📋 Backlog crítico | 1 issue > 180 dias (#1073) |
| ✅ Saúde geral | **Boa** — Release major + bugfixes |

**Recomendação:** Priorizar review de **#1073** (perda de dados) e **#4928** (P1 routing). Considerar merge de **#3035** e **#4625** antes do v0.3.1.

---

*Relatório gerado automaticamente com base em dados do GitHub HKUDS/nanobot em 2026-07-26.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-26

---

## 1. Panorama do dia

O projeto Hermes Agent registrou **extrema atividade** nas últimas 24 horas, com 100 itens atualizados no total (50 issues + 50 PRs). **Nenhum release foi publicado**, mas a força-tarefa da comunidade está intensamente focada em estabilização — a grande maioria das issues e PRs aborda bugs e regressões, especialmente no componente Desktop. Os temas dominantes são falhas de autenticação (401) no Desktop em múltiplos cenários, instabilidade em plataformas Windows/macOS, e problemas de gerenciamento de sessões em ambientes webhook/cron. O volume de PRs abertos (45) sugere um pipeline saudável de contribuições, mas também indica possíveis gargalos de revisão.

---

## 2. Lançamentos

### Nenhum novo release nas últimas 24h

O projeto não publicou versões neste período. O último release estável permanece como **v0.19.0** (referenciada nas issues #71167, #71514). Não há notas de migração ou breaking changes a reportar neste ciclo.

---

## 3. Progresso do Projeto

Cinco PRs atingiram estado merged/fechado no período, representando avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#71379](https://github.com/NousResearch/hermes-agent/pull/71379) | fix(prompt-actions): fall back to activeSessionIdRef in reloadFromMessage | **Corrige** botão "Regenerar" do Desktop que não fazia nada ao clicar — regressão de UX crítico |
| [#71568](https://github.com/NousResearch/hermes-agent/pull/71568) | fix(cli): declare stateless channel for single-query chat (-q) path | **Resolve** execução assíncrona indevida no caminho `hermes chat -q` que matava tarefas prematuramente |
| [#71569](https://github.com/NousResearch/hermes-agent/pull/71569) | fix(gateway): release hygiene lock after timeout | **Elimina** race condition onde locks de compressão de sessão ficavam presos após timeout |
| [#71548](https://github.com/NousResearch/hermes-agent/pull/71548) | fix(gateway): coalesce concurrent native OAuth refresh requests | **Melhora** performance e estabilidade ao consolidar requisições OAuth simultâneas e adicionar negative cache |
| [#71205](https://github.com/NousResearch/hermes-agent/pull/71205) | fix(desktop): fall back when gated backends 401 /api/health | **Corrige** loop de conexão no Desktop quando backends não expõem `/api/health` |

**PRs abertos de destaque** aguardando merge:

- [#71563](https://github.com/NousResearch/hermes-agent/pull/71563) — `feat(desktop): make mouse-wheel zoom optional` — toggle para desabilitar Ctrl+scroll no Desktop (P3, baixa urgência)
- [#71574](https://github.com/NousResearch/hermes-agent/pull/71574) — `feat: add lazy bridges for core tool calling` — deferência de ferramentas principais atrás de bridges (P3)
- [#57972](https://github.com/NousResearch/hermes-agent/pull/57972) — `Feat/webhook session key` — sessions persistentes em webhooks via campo `session_key` (P3)
- [#71541](https://github.com/NousResearch/hermes-agent/pull/71541) — `feat(gateway): add post-auth message hooks` — hook `gateway_message` para plugins pós-autenticação (P3)
- [#71567](https://github.com/NousResearch/hermes-agent/pull/71567) — `fix(relay): bind media auth to connector origin` — **correção de segurança**: impedia que origens externas sequestrassem mídia autenticada (P2)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**1. [#4505](https://github.com/NousResearch/hermes-agent/issues/4505) — Optimize Ollama Integration** ⭐ 14 comentários | 👍 2 | P2  
 Debate técnico aprofundado sobre uso da API nativa `/api/chat` vs endpoint OpenAI-compatible. Demonstra demanda por integração mais eficiente com provedores locais. Impacta performance de streaming e qualidade de delta.

**2. [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) — Desktop Working Directory setting** ⭐ 13 comentários | P1 | CLOSED  
 Bug crítico de regressão onde `terminal.cwd` do config.yaml era ignorado em favor de localStorage stale. Já fechado — indica correção em andamento ou merge.

**3. [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) — Feature: Add messaging support for Buzz** ⭐ 9 comentários | 👍 9 | P3  
 Proposta de integração com [Buzz](https://github.com/block/buzz), workspace self-hostable para times e agentes. Alto interesse da comunidade (9 thumbs-up). Buzz permite humanos e IA compartilharem rooms — alinhamento estratégico com tendência de agentes colaborativos.

**4. [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) — Desktop app becomes completely unresponsive after ~5 messages** ⭐ 9 comentários | P2  
 Bug severo: UI freeze total após ~5 mensagens no macOS 27 beta, incluindo Settings. Requer recovery manual. Escalado corretamente como P2.

**5. [#71514](https://github.com/NousResearch/hermes-agent/issues/71514) — Desktop cloud/remote loops on 401** ⭐ 5 comentários | P2  
 Desktop em modo cloud/remote entra em loop infinito na tela de conexão quando o backend usa auth-gated. Provoca 401 antes do fallback para `/api/status`. Correlaciona-se com PR #71205 (já merged).

**6. [#71167](https://github.com/NousResearch/hermes-agent/issues/71167) — macOS Desktop v0.19.0 remote gateway: updater loop + ENOTDIR** ⭐ 2 comentários | P2 | CLOSED  
 Bug crítico fechado: updater loop + spawn-helper ENOTDIR em macOS Apple Silicon com OAuth. Correlação com v0.19.0.

---

## 5. Bugs e Estabilidade

### P1 (Críticos — demandam atenção imediata)

| Issue | Título | Plataforma | Status |
|-------|--------|------------|--------|
| [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) | Desktop CWD ignorado em favor de localStorage stale | Desktop | CLOSED |
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop UI freeze total após ~5 mensagens | macOS | OPEN |

### P2 (Altos — impactam fluxo de trabalho)

**Autenticação e Remote Gateway (3 issues correlacionadas):**
- [#71514](https://github.com/NousResearch/hermes-agent/issues/71514) — Loop infinito 401 em cloud/remote
- [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) — Hermes Cloud connection mode nunca inicia sign-in (Windows, v0.19.0)
- [#71515](https://github.com/NousResearch/hermes-agent/issues/71515) — Desktop boot fails com 401 sem `/api/health`

**Estabilidade Desktop:**
- [#50159](https://github.com/NousResearch/hermes-agent/issues/50159) — "Thinking" state stuck após turn completar
- [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) — Profile não passado como `?profile=` ao WebSocket

**Integridade de Dados e Sessoes:**
- [#71480](https://github.com/NousResearch/hermes-agent/issues/71480) — DDL races em `_reconcile_columns` corrompem sqlite_master
- [#71571](https://github.com/NousResearch/hermes-agent/issues/71571) — `/approve` session-scoped mas cross-platform delivery (webhook não pode aprovar)
- [#70943](https://github.com/NousResearch/hermes-agent/issues/70943) — cron agent hang em xai-oauth/codex_responses sem failure delivery

**Plataforma Windows (3 issues):**
- [#48434](https://github.com/NousResearch/hermes-agent/issues/48434) — Remote gateway falha após sign-in
- [#59850](https://github.com/NousResearch/hermes-agent/issues/59850) — `hermes update` falha no dependency install (cwd errado)
- [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) — Hermes Cloud loop 401 no Windows

**Configuração e Providers:**
- [#51560](https://github.com/NousResearch/hermes-agent/issues/51560) — `fallback_providers` como JSON string silencia fallback chain
- [#69889](https://github.com/NousResearch/hermes-agent/issues/69889) — Cron .py jobs quebram após rebuild de venv (pip packages perdidos)

**Gateways e Integrações:**
- [#37284](https://github.com/NousResearch/hermes-agent/issues/37284) — Webhook sessions dead-end em dangerous-command approval
- [#66396](https://github.com/NousResearch/hermes-agent/issues/66396) — SOUL.md não carrega no Telegram Gateway
- [#66118](https://github.com/NousResearch/hermes-agent/issues/66118) — Profile SOUL.md/AGENTS.md ignorado com Ollama custom provider

**CLI e Ferramentas:**
- [#35125](https://github.com/NousResearch/hermes-agent/issues/35125) — `hermes skills install` URL só baixa SKILL.md, ignora referências
- [#24032](https://github.com/NousResearch/hermes-agent/issues/24032) — regex de media truncando paths Windows com espaços

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de alta prioridade ou alto interesse

| Issue/PR | Título | Sinais de Roadmap | Link |
|----------|--------|-------------------|------|
| #68871 | Add messaging support for Buzz | Integração com workspaces colaborativos AI-human | [Issue #68871](https://github.com/NousResearch/hermes-agent/issues/68871) |
| #48723 | Support Python 3.14 | Python 3.14 já é default no Homebrew — projeto precisa atualizar `requires-python` | [Issue #48723](https://github.com/NousResearch/hermes-agent/issues/48723) |
| #71572 | Runtime-level fallback suppression para trusted-data jobs | Necessidade de controle fino sobre fallback behavior em jobs críticos | [Issue #71572](https://github.com/NousResearch/hermes-agent/issues/71572) |
| #67834 | Show running session cost in Desktop status bar | Feature de billing/custo em tempo real (DRAFT) | [PR #67834](https://github.com/NousResearch/hermes-agent/pull/67834) |
| #71542 | Carry payment-method union through to clients | Integração com Stripe Link (38k subscribers) | [PR #71542](https://github.com/NousResearch/hermes-agent/pull/71542) |
| #57972 | Webhook session key para sessions persistentes | Capacidade de manter contexto entre deliveries webhook | [PR #57972](https://github.com/NousResearch/hermes-agent/pull/57972) |
| #71574 | Lazy bridges para core tool calling | Deferred tool execution e otimização de performance | [PR #71574](https://github.com/NousResearch/hermes-agent/pull/71574) |

### Features menores (P3)
- `#71421` / `#71563` — Toggle para disable Ctrl+scroll zoom no Desktop
- `#71573` — Locale Russo completo para Desktop i18n
- `#71561` — Documentação de escopo de workspace no Slack

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas reportadas

**1. Estabilidade do Desktop em macOS/Windows**  
Usuários relatam comportamento unusable — freeze total após poucas mensagens ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)), loop de conexão persistente em cloud mode ([#71514](https://github.com/NousResearch/hermes-agent/issues/71514), [#71491](https://github.com/NousResearch/hermes-agent/issues/71491)), e falha após update ([#71167](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de referência:** 2026-07-26  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Analista:** Agente de Análise Open Source

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24 horas, com 2 issues e 3 PRs atualizados. Não houve lançamentos de novas versões, e o projeto permanece na versão estável v0.3.1. A atividade recente concentra-se na resolução de bugs menores (como o input box na página de chat) e na discussão de issues mais antigas. Duas issues abertas ainda carecem de resolução: um bug crítico no sync loop do Matrix (com 6 comentários e alta relevância) e uma solicitação de melhoria para o comando `/list models`.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto encontra-se na versão **v0.3.1** (commit `2cf030d`), conforme mencionado pelo usuário na issue #3294. Não há informações sobre milestones futuros ou datas de release planejadas nos dados disponíveis.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Recentemente

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| **#3293** | merge: fix bug of input box on chat page | ✅ Fechado | Correção de UI na página de chat — melhoria de usabilidade |
| **#3205** | fix: support 9router gateway responses and add Linux ARMv7 build target | ❌ Fechado (stale) | Adicionava suporte a ARMv7 e compatibilidade com gateway 9router, mas foi marcado como obsoleto |

**Análise:** A PR #3293 representa uma correção pontual de interface, indicando atenção contínua à experiência do usuário. A PR #3205, embora fechada como stale, evidencia demanda por builds em arquiteturas ARM mais antigas (Raspberry Pi 3 B+) e suporte a gateways OpenAI-compatíveis alternativos.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**#3203 — [BUG] Matrix sync loop has no reconnection logic**  
🔗 [Link](https://github.com/sipeed/picoclaw/issues/3203)  
| Métrica | Valor |
|---------|-------|
| Status | ABERTA |
| Comentários | 6 |
| 👍 | 2 |
| Criação | 2026-07-02 |
| Última atualização | 2026-07-25 |

**Resumo da Issue:** O loop de long-polling `/sync` do canal Matrix morre permanentemente após qualquer interrupção de rede ou reinicialização do homeserver. Não há reconexão automática, e como o processo principal permanece ativo, o `Restart=on-failure` do systemd não é acionado.

**Análise de demanda:** Esta issue representa um **problema crítico de resiliência** que afeta a estabilidade do bot em ambientes de produção. Os 6 comentários indicam discussão ativa, e a combinação com o alto número de comentários sugere que outros usuários provavelmente enfrentam o mesmo problema. A severidade é **alta**, pois resulta em "morte silenciosa" do canal Matrix sem recuperação automática.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Título | Severidade | Comentários | Status |
|---|--------|------------|-------------|--------|
| **#3203** | Matrix sync loop sem lógica de reconexão | **🔴 Alta** | 6 | ABERTA |
| **#3294** | `/list models` exibe apenas modelo atual | **🟡 Média** | 0 | ABERTA |

**#3203 — Impacto Operacional:**
- Falha silenciosa após disrupção de rede
- Processo pai continua rodando → watchdog não detecta falha
- Sistema operacional: PicoClaw v0.2.9 afetado
- Severidade elevada pela ausência de recovery mechanism

**#3294 — Impacto Funcional:**
- Comportamento inconsistente com documentação/descrição do comando
- Afeta apenas UI (Telegram), não funcionalidade core
- Severidade média, porém com impacto na experiência do usuário

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Solicitação

**#3294 — /list models apenas mostra o modelo atual**  
🔗 [Link](https://github.com/sipeed/picoclaw/issues/3294)  
- **Severidade:** 🟡 Média
- **Usuário:** 2suige-coder
- **Expectativa:** Listar todos os modelos configurados em `model_list`, não apenas o atual

**Análise:** Esta solicitação alinha-se com a expectativa natural do usuário ao configurar múltiplos modelos. É uma melhoria de UX que pode indicar que usuários avançados estão explorando funcionalidades multi-modelo, sugerindo adoção crescente para用例 complexos.

### PR com Feature Pendente

**#3193 — Added simplex channel type**  
🔗 [Link](https://github.com/sipeed/picoclaw/pull/3193)  
- **Status:** ABERTA (stale)
- **Tipo:** ✨ Nova funcionalidade
- **Criação:** 2026-06-27
- **Última atualização:** 2026-07-25

**Análise:** A PR adiciona um novo tipo de canal "simplex". Embora marcada como stale, a reopening recente (2026-07-25) indica interesse contínuo. Este pode ser um sinal de que a arquitetura de canais está evoluindo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Instabilidade do Matrix** | Queda permanente do sync loop após network failure | 🔴 Alta |
| **Inconsistência de comando** | `/list models` não reflete comportamento esperado | 🟡 Média |
| **Suporte limitado a ARM** | Ausência de build ARMv7 (Raspberry Pi 3 B+) | 🟡 Média |
| **Compatibilidade com gateways** | 9router responses não parseadas | 🟡 Média |

### Cenários de Uso Emergentés

1. **Multi-model deployment:** Usuários configuram múltiplos modelos simultâneos
2. **Edge computing:** Execução em hardware limitado (Raspberry Pi ARMv7)
3. **Integração Matrix:** Uso em ambientes de chat corporativo descentralizado
4. **Gateways alternativos:** Integração com provedores OpenAI-compatíveis não-canonicos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resolução Prolongada

| # | Título | Idade | Comentários | Prioridade |
|---|--------|-------|-------------|------------|
| **#3203** | Matrix sync loop sem reconexão | ~24 dias | 6 | 🔴 Alta |
| **#3193** | Simplex channel type (PR) | ~29 dias | 0+ | 🟡 Média |
| **#3205** | Suporte 9router + ARMv7 (fechado stale) | ~24 dias | 0+ | 🟡 Média |

### Análise de Tendências

**🔴 Crítico para triagem:**
- **#3203** precisa de resposta da equipe core. É um bug de resiliência que afeta implantações de produção e demonstra silêncio de 24+ dias.

**🟡 Oportunidades de engajamento:**
- **#3193** e **#3205** foram marcados como stale, mas reativados recentemente. Reavaliarmergeabilidade ou fornecer feedback construtivo pode revitalizar contribuições.

---

## Métricas Consolidada do Período

```
┌─────────────────────────────────────────────────────────────┐
│  ATIVIDADE (24h)                                            │
├─────────────────────────────────────────────────────────────┤
│  Issues: 2 atualizadas (2 abertas, 0 fechadas)              │
│  PRs:    3 atualizadas (1 aberta, 2 fechadas)               │
│  Releases: 0                                                │
├─────────────────────────────────────────────────────────────┤
│  SAÚDE GERAL                                               │
├─────────────────────────────────────────────────────────────┤
│  🔴 Críticos abertos: 1 (#3203)                            │
│  🟡 Médios abertos: 1 (#3294)                               │
│  🟢 PRs merged: 1 (#3293)                                  │
│  ⚠️  Stale reopened: 2 (#3193, #3205)                      │
└─────────────────────────────────────────────────────────────┘
```

---

**Próximos passos recomendados:**

1. **Prioridade #1:** Atribuir e investigar #3203 (Matrix reconnection) — bug de produção
2. **Prioridade #2:** Revisar #3293 merge e verificar se #3294 pode ser resolvido rapidamente
3. **Monitoramento:** Reavaliar PRs stale (#3193, #3205) antes que contribuidores abandonem

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-07-26

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 26 de julho de 2026, com 16 issues e 29 PRs atualizados nas últimas 24h. Não houve lançamentos formais, mas o progresso técnico é significativo: a equipe fechou PRs críticos de performance WebUI (code splitting reduzindo bundle de 1.227 kB para 377 kB) e UX (focus management em modais, preservação de estado em cancelamentos). O foco dominante está na preparação para v1.0, evidente em múltiplos items do `v1-launch-checklist` sendo tratados. A comunidade demonstra engajamento ativo em épicos de arquitetura como error-recoverability e skill discovery.

---

## 2. Lançamentos

**Nenhum release formal nas últimas 24h.**

O PR #5598 (em revisão desde 2026-07-03) sinaliza que um novo release está em preparação, incluindo:
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ **Breaking changes**)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatível)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ **Breaking changes**)

> ⚠️ **Nota de migração**: O release introduz mudanças de API em `ironclaw_common` (tipo `failure copy_impl_added` modificado) e `ironclaw_skills`. Equipes que dependem diretamente desses crates devem revisar o changelog antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Closed/Merged nas últimas 24h

| PR | Título | Impacto |
|----|--------|---------|
| [#6632](https://github.com/nearai/ironclaw/pull/6632) | perf(webui): add route-level code splitting & tree-shaking | **Crítico**: Bundle de 1.227 kB → 377 kB (gzip: 349 kB → 116 kB) |
| [#6624](https://github.com/nearai/ironclaw/pull/6624) | fix(webui): trap and restore focus in extension modal | Acessibilidade: foco preso no modal, restaurado ao fechar |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | Shrink composition extension host & retire product workflow facades | Arquitetura: move lógica para módulos corretos |
| [#6627](https://github.com/nearai/ironclaw/pull/6627) | fix(webui): preserve active run state when cancellation fails | Estabilidade: UI não entra em estado ocioso falso |
| [#6626](https://github.com/nearai/ironclaw/pull/6626) | fix(webui): preserve automation list during filter changes | UX: elimina flash de loading ao trocar filtros |
| [#6673](https://github.com/nearai/ironclaw/pull/6673) | Add production struct dead-code ratchet | Manutenção: previne acúmulo de código morto |

### Destaque: Performance WebUI
O PR [#6632](https://github.com/nearai/ironclaw/pull/6632) é a melhoria mais impactante do dia, reduzindo o payload JavaScript inicial em **~70%** através de code splitting por rota e tree-shaking agressivo. Isso afeta diretamente a experiência do usuário em conexões lentas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engagement (comentários/reações)

| Issue | Título | Comentários | Análise |
|-------|--------|-------------|---------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | [EPIC] error-recoverability endgame | 6 | Maior debate técnico: contrato de recoverability (sobreviver, ver, diagnosticar, agir) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability and journey testing | 3 | Cobertura determinística de funcionalidades críticas |
| [#6675](https://github.com/nearai/ironclaw/issues/6675) | Centralize Shared Rust Dependencies | 0 (2 👍) | Interesse em DX Rust |
| [#6676](https://github.com/nearai/ironclaw/issues/6676) | Daily failure taxonomy 2026-07-25 | 0 | Monitoramento contínuo de health |

### PRs de maior complexidade técnica

| PR | Título | Tamanho | Discussão |
|----|--------|---------|-----------|
| [#6677](https://github.com/nearai/ironclaw/pull/6677) | test(reborn): recoverability conformance matrix (§11.7) | XL | Implementa matriz de conformidade para 7 enums de erro |
| [#6672](https://github.com/nearai/ironclaw/pull/6672) | feat(signing): signed intent + per-agent key lifecycle (Phase B) | XL | Attested signing revival - cryptographic attestation |
| [#6674](https://github.com/nearai/ironclaw/pull/6674) | test(mutation): mutation-audit harness | XL | Fechando gaps de cobertura com mutation testing |
| [#6678](https://github.com/nearai/ironclaw/pull/6678) | feat(reborn): product command pipeline (/model, /status) | XL | Pipeline unificado de slash commands |

---

## 5. Bugs e Estabilidade

### Bugs Closed (resolvidos)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#6620](https://github.com/nearai/ironclaw/issues/6620) | Cancelamento de run falho deixava chat em estado ocioso incorreto | **Média** |
| [#6621](https://github.com/nearai/ironclaw/issues/6621) | Modal de extensão não prendia/restaurava foco de teclado | **Baixa** (UX/Acessibilidade) |
| [#6622](https://github.com/nearai/ironclaw/issues/6622) | Filtro de automações mostrava skeleton de loading desnecessário | **Baixa** (UX) |
| [#6656](https://github.com/nearai/ironclaw/issues/6656) | Upgrade habilitado antes de v1.0.0 | **Média** (v1-launch) |

### Issues Abertas (potenciais problemas)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#6667](https://github.com/nearai/ironclaw/issues/6667) | GitHub PAT rejeitado faz loop infinito de auth (sem erro) | **Alta** | v1-launch-checklist |
| [#6671](https://github.com/nearai/ironclaw/issues/6671) | Setup Telegram dead-ends com "admin must configure" | **Média** | v1-launch-checklist |
| [#6628](https://github.com/nearai/ironclaw/issues/6628) | WebUI bundle size e loading performance | **Média** | Em progresso via #6632 |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics em destaque

| Epic | Issue | Progresso | Sinal de Roadmap |
|------|-------|-----------|------------------|
| Error Recoverability Endgame | [#6284](https://github.com/nearai/ironclaw/issues/6284) | 6 comentários | Contrato robusto de recuperação é prioritário para v1 |
| Reliable Skill Discovery, Routing & Activation | [#6565](https://github.com/nearai/ironclaw/issues/6565) | Em desenvolvimento | Sistema de skills mais inteligente |
| Hermetic Capability & Journey Testing | [#6524](https://github.com/nearai/ironclaw/issues/6524) | Início | Testabilidade completa de features |

### Features v1-launch-checklist

| Issue | Feature | Prioridade |
|-------|---------|------------|
| [#6671](https://github.com/nearai/ironclaw/issues/6671) | Telegram setup via agent deve ser guiado | Alta |
| [#6668](https://github.com/nearai/ironclaw/issues/6668) | Agent deve informar Slack conectável | Alta |
| [#6667](https://github.com/nearai/ironclaw/issues/6667) | GitHub PAT inválido deve mostrar erro | Crítica |

### Sinais arquiteturais

- **Attested Signing (Phase B)** em [#6672](https://github.com/nearai/ironclaw/pull/6672): Sistema de criptografia para attestation de transações
- **Process Journal Kernel** em [#6666](https://github.com/nearai/ironclaw/issues/6666): Refatoração do lifecycle para `ironclaw_processes`

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (via issues)

1. **Fluxo de integração confuso**: Usuários não conseguem encontrar onde configurar Telegram/Slack, ou recebem mensagens genéricas ("admin must configure") sem caminho claro ([#6671](https://github.com/nearai/ironclaw/issues/6671), [#6668](https://github.com/nearai/ironclaw/issues/6668))

2. **Autenticação GitHub frustrante**: Tokens rejeitados fazem loop infinito sem feedback ao usuário ([#6667](https://github.com/nearai/ironclaw/issues/6667))

3. **UI instável em edge cases**: Cancelamento de run que falha deixa interface em estado inconsistente ([#6620](https://github.com/nearai/ironclaw/issues/6620))

### Feedback positivo implícito

- Taxonomia diária de falhas ([#6676](https://github.com/nearai/ironclaw/issues/6676), [#6633](https://github.com/nearai/ironclaw/issues/6633)) indica maturidade em observabilidade
- Issues com labels `[epic]` e `[reborn]` demonstram estrutura de roadmap clara

---

## 8. Backlog que Merece Atenção

### Issues sem activity recente (staleness risk)

| Issue | Título | Criado | Atualizado | Prioridade |
|-------|--------|--------|------------|------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Error Recoverability Endgame | 2026-07-19 | 2026-07-25 | **Alta** (6 comments) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Hermetic Capability Testing | 2026-07-22 | 2026-07-24 | **Alta** (3 comments) |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Reliable Skill Discovery | 2026-07-23 | 2026-07-24 | **Alta** |
| [#6666](https://github.com/nearai/ironclaw/issues/6666) | Move process journal kernel | 2026-07-24 | 2026-07-24 | **Média** |

### PRs aguardando review há mais tempo

| PR | Título | Criado | Idade |
|----|--------|--------|-------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | chore: release (múltiplos crates) | 2026-07-03 | ~23 dias |
| [#6361](https://github.com/nearai/ironclaw/pull/6361) | build(deps): bump serialization | 2026-07-20 | ~6 dias |
| [#6428](https://github.com/nearai/ironclaw/pull/6428) | build(deps): bump tokio-ecosystem | 2026-07-21 | ~5 dias |

### Recomendação

O PR [#5598](https://github.com/nearai/ironclaw/pull/5598) está aberto há 23 dias com mudanças **breaking** pendentes em `ironclaw_common` e `ironclaw_skills`. Aprová-lo ou resolvê-lo traria clareza sobre o estado da API antes do v1.0.

---

## Métricas de Saúde do Projeto (2026-07-26)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 11 | 🟢 Saudável |
| PRs abertos | 21 | 🟢 Normal |
| PRs fechados (24h) | 8 | 🟢 Ativo |
| Cobertura de bugs críticos | 3/3 | 🟢 Resolvidos ou em tracking |
| Progresso v1-launch items | 5+ | 🟡 Em andamento |

---

*Relatório gerado em 2026-07-26. Dados: GitHub nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 26 de julho de 2026

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de desenvolvimento em 26/07/2026, com **6 issues atualizadas** e **10 PRs movimentadas** nas últimas 24h. Três PRs foram merged/fechadas, indicando progresso concreto na release 2.0.1. A comunidade reportou dois bugs críticos relacionados a conectividade de modelos e performance, enquanto novas funcionalidades de isolamento de agentes e clickable paths geram interesse. O repositório demonstra saúde operacional, sem nenhum release novo hoje, mas com trabalho contínuo em estabilidade e UX.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de consolidação da versão 2.0.1, conforme indicam os PRs de manutenção e os reports de bugs ainda abertos.

---

## 3. Progresso do Projeto

Três PRs foram fechadas/merged recentemente, representando avanços significativos:

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | UI de configuração de reranker para reme0.4 | Funcionalidade de busca melhorada com UI visual completa (16 chaves i18n zh/en) |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Reranker para resultados de busca no reme0.4 | Pipeline de recuperação híbrida (BM25 + vetorial) com reordenação por reranker dedicado |
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | Staged compaction e task continuity para Scroll | Gerenciamento durável de contexto com invariantes mais robustos |

**Destaque:** A feature de [reranker para busca de memória](https://github.com/agentscope-ai/QwenPaw/pull/5692) traz ganhos significativos de relevância em buscas, complementada pela [UI de configuração](https://github.com/agentscope-ai/QwenPaw/pull/5691).

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#6461 — Solicitação de isolamento completo de agentes** 🔥
- **Reações:** 👍 2
- **Comentários:** 1
- **Resumo:** Usuário reporta vulnerabilidade de privacidade onde agentes compartilham memória e configurações entre si. Solicitação de opção "totalmente isolado".
- **Link:** [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)

**#6258 — Bug: max output tokens do OpenAI não funciona**
- **Comentários:** 3
- **Resumo:** Modelo não respeita limite de tokens de saída configurado na versão qwenpaw 2.0.0.post3 + agentscope 2.0.4.post1.
- **Link:** [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)

### Análise de demandas

Três temas emergem das discussões:
1. **Segurança/Privacidade:** Isolamento de agentes é preocupação recorrente — indica uso multi-tenant em produção
2. **UX de Desktop:** Feature de [caminhos clicáveis](https://github.com/agentscope-ai/QwenPaw/issues/6466) melhora workflow de desenvolvedores
3. **Performance:** CPU elevado no Edge/Wayland ([#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)) pode indicar problemas de renderização com grandes volumes de dados

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **🔴 Alta** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Conexão com modelos falha com "API error" — dropdown de modelos vazio | Aberto (1 comentário) |
| **🟡 Média** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | Parâmetro `max_tokens` do OpenAI ignorado | Aberto (3 comentários) |
| **🟡 Média** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | CPU elevado em Edge+Wayland em páginas com grandes sessões | Aberto (2 comentários) |
| **🟡 Média** | [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | Cron tasks com "Tool Safety Check" OFF por padrão | Aberto (1 comentário) |

**⚠️ Atenção:** A falha de conexão com modelos ([#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464)) é crítica em produção, afetando a funcionalidade core da plataforma.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features abertas

**#6466 — Caminhos de arquivo clicáveis no chat** [enhancement]
> Permite que agentes enviem botões clicáveis que abrem pastas/arquivos no explorador.
- **Link:** [#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466)

**#6461 — Isolamento completo de agentes** [enhancement]
> Opção para tornar agentes totalmente independentes, impedindo acesso cruzado a memória e configurações.
- **Link:** [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)

### PRs em desenvolvimento indicando direção do roadmap

| PR | Feature | Área |
|----|---------|------|
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Unified browser SDK | Plataforma |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | QwenPaw Creator app | Ecossistema |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | UI de reranker | Memória |

**Sinais de tendência:**
- Expansão do ecossistema de apps/plugins
- Melhoria de memória e busca (reranker maduro)
- Suporte nativo Windows consolidado

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Conectividade de modelos bloqueada:** Usuários em produção não conseguem usar a plataforma ([#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464))
2. **Vazamento de dados entre agentes:** Cenário multi-agente expõe memória de um agente para outro — risco de privacidade grave ([#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461))
3. **Performance em browsers alternativos:** Edge no Wayland causa CPU elevado — experiência ruim em ambientes Linux customizados ([#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460))

### Cenários de uso identificados

- **Gestão de ComfyUI workflows:** Usuários gerenciam fluxos de trabalho de IA via QwenPaw
- **Assistentes QQ em grupo:** Bots para suporte ao usuário em grupos, demonstrando adoção multi-tenant
- **Criação de conteúdo:** Plugin QwenPaw Creator indica uso em produção de mídia

### Indicadores de satisfação

- Feature de reranker ([#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691), [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)) concluída mostra investimento em busca relevante
- Manutenção de SQLite persistence ([#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459)) indica foco em confiabilidade

---

## 8. Backlog que Merece Atenção

### Issues sem resposta prolongada

| Issue | Criado | Dias | Descrição | Prioridade |
|-------|--------|------|-----------|------------|
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | 2026-07-19 | 7 | max_tokens não funciona | 🟡 Média |
| [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | 2026-07-24 | 2 | Cron safety defaults OFF | 🟡 Média |

### PRs em revisão há tempo considerável

| PR | Criado | Área | Status |
|----|--------|------|--------|
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 2026-07-20 | Browser SDK unificado | Aberto |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | 2026-07-20 | QwenPaw Creator | Aberto |

---

## Métricas Resumidas do Dia

```
┌─────────────────────────────────────────────────┐
│  ATIVIDADE (24h)                                │
├─────────────────────────────────────────────────┤
│  Issues abertas/ativas:     6                    │
│  Issues fechadas:           0                    │
│  PRs abertas:               7                    │
│  PRs merged/fechadas:       3                    │
│  Releases:                  0                    │
├─────────────────────────────────────────────────┤
│  SAÚDE DO PROJETO                               │
├─────────────────────────────────────────────────┤
│  Bugs críticos abertos:    1 (conexão modelos)   │
│  Features em desarrollo:    5+                   │
│  PRs aguardando review:    7                    │
│  Engajamento comunidade:   Moderado            │
└─────────────────────────────────────────────────┘
```

---

*Relatório gerado automaticamente com base em dados do GitHub de [CoPaw/QwenPaw](https://github.com/agentscope-ai/QwenPaw) — 26/07/2026 00:00 UTC*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Falha ao gerar o resumo.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*