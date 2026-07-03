# Resumo diário do ecossistema de agentes de IA 2026-07-04

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-03 20:58 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-04

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade** em 04 de julho de 2026. Foi registrada apenas **1 issue atualizada** nas últimas 24 horas — um bug report sobre o canal Telegram deixando de responder após períodos de inatividade. Não houveram novos PRs, releases ou alterações merged no período. O ecossistema permanece em estado de **manutenção básica**, sem momentum aparente de desenvolvimento ativo no curto prazo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou versões recentes. Caso necessário consultar releases anteriores, acessar: [nullclaw/nullclaw/releases](https://github.com/nullclaw/nullclaw/releases)

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

Não há commits ou contribuições integradas ao codebase no período analisado. O backlog de PRs permanece inalterado.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #972 | **[bug] telegram channel stop respond after some idle time** | ![status](https://img.shields.io/badge/OPEN-green) |
|------|------------------------------------------------------------|---------------------------------------------------|

- **Autor:** i11010520
- **Criado:** 2026-06-30 | **Atualizado:** 2026-07-03
- **Comentários:** 1 | **Reações:** 0
- **Link:** [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)

**Análise:** O report descreve um problema de estabilidade no canal Telegram, que deixa de responder após períodos noturnos de inatividade, mesmo com o backend do NullClaw funcionando corretamente. A issue foi reaberta/atualizada recentemente (03/07), indicando que o problema persiste e requer atenção dos mantenedores.

**Demanda identificada:** Conectividade persistente em canais — necessidade de heartbeat/reconexão automática para integrações de mensageria.

---

## 5. Bugs e Estabilidade

| Severidade | Quantidade | Detalhes |
|------------|------------|----------|
| 🔴 Crítica  | 0 | — |
| 🟠 Alta     | 0 | — |
| 🟡 Média    | 1 | Telegram idle timeout (Issue #972) |
| 🟢 Baixa    | 0 | — |

### Issue de Estabilidade

- **#972** — Canal Telegram cessa resposta após período de inatividade noturna. Backend funcional, indicando problema específico na camada de conexão/keepalive do integration layer.

**Recomendação:** Priorizar investigação do mecanismo de reconnect do Telegram bot API e adicionar healthcheck periódicos para canais de mensageria.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

Sem atividade de enhancement no período. Issues históricas de features podem ser consultadas com label `enhancement`: [nullclaw/nullclaw/issues?q=label:enhancement](https://github.com/nullclaw/nullclaw/issues?q=label:enhancement)

---

## 7. Resumo de Feedback dos Usuários

Com base na issue ativa (#972), extrai-se o seguinte padrão de dor:

- **Cenário de uso:** Deploy em instância EC2 com execução em background via `nullclaw agent`
- **Problema Reportedo:** Falha de conectividade em canais Telegram após ciclos de inatividade (ex.: pernoite)
- **Satisfação parcial:** Backend e memória do agente operam normalmente; apenas o canal de comunicação falha
- **Dor central:** Falta de resiliência em conexões de longa duração em ambientes cloud

**Indicador de qualidade:** A baixa volumetria de issues pode indicar codebase estável OU comunidade pouco ativa — dado o bug reportado, sugere-se avaliação da cobertura de testes em integrações externas.

---

## 8. Backlog que Merece Atenção

| Issue | Título | Idade | Status | Prioridade |
|-------|--------|-------|--------|------------|
| #972 | telegram channel stop respond after some idle time | ~4 dias | OPEN | 🟡 Média |

**Análise:** A issue #972 é a **única atividade recente** do projeto. Com apenas 1 comentário e 0 reações, há risco de baixa visibilidade. Recomenda-se que mantenedores busquem mais contexto com o reporter (i11010520) para reprodutibilidade e definição de escopo de correção.

**Sem outras issues pendentes de resposta** no período — o que pode indicar que a base de issues está sendo atendida ou que não há novos reports de outros usuários.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 1 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 0 |
| PRs merged/fechados (24h) | 0 |
| Releases | 0 |
| Comentários totais | 1 |
| Reações totais | 0 |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub — [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-04
**Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas** neste período. Projetos como NanoBot (65 issues/38 PRs), Hermes Agent (50/50), ZeroClaw (34/50) e CoPaw (40/33) operam em ciclos de desenvolvimento intenso com equipes responsivas, enquanto NullClaw permanece em estado de manutenção básica e IronClaw atravessa uma transição arquitetural significativa com a remoção do engine v2. A tendência dominante é a **maturidade das integrações multi-canal** (Telegram, Slack, WhatsApp, Discord) como requisitotable stake, combinada com investimentos em sistemas de memória persistente, resiliência OAuth e ferramentas de observabilidade. Bugs de contexto/memória e falhas de conexão em canais de mensageria aparecem transversalmente, sugerindo desafios arquiteturais compartilhados no tratamento de sessões de longa duração.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Taxa Fechamento | Saúde Geral |
|---------|-------------|-----------|----------|-----------------|-------------|
| **NanoBot** | 65 | 38 | 0 | ~40% | 🟢 Alta |
| **Hermes Agent** | 50 | 50 | 0 | ~36% | 🟡 Tensão |
| **ZeroClaw** | 34 | 50 | 0 | ~16% | 🟢 Alta |
| **CoPaw** | 40 | 33 | 0 | **65%** | 🟢 Alta |
| **IronClaw** | 19 | 48 | 0* | ~54% | 🟡 Transição |
| **PicoClaw** | 2 | 23 | **1** (v0.3.1) | ~43% | 🟡 Estável |
| **NullClaw** | 1 | 0 | 0 | 0% | 🔴 Baixa |

*\* IronClaw: releases internas via crates.io (ironclaw_common 0.5.0, ironclaw_skills 0.4.0, ironclaw 0.29.1)

**Observações:**
- **ZeroClaw e Hermes Agent** apresentam o maior volume absoluto de atividade (PRs), indicando equipes amplas de desenvolvimento
- **CoPaw** destaca-se na eficiência de resolução com 65% das issues fechadas em 24h
- **PicoClaw** é o único projeto com release formal no período, demonstrando disciplina de versionamento
- **NullClaw** apresenta risco de abandono ou baixa priorização comunitária

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Líder em Volume de Atividade

| Dimensão | Posição |
|----------|---------|
| **Volume** | Maior número de issues (65) e PRs (38) no período |
| **Maturidade técnica** | Sistema de plugins maduro (#4396), múltiplos provedores suportados |
| **Comunidade** | Backlog significativo (63 issues abertas) mas resposta ativa |
| **Arquitetura** | Foco em flexibilidade de providers e extensibilidade via plugins |

**Vantagens:** Eco-sistema multi-provedor mais diversificado, CLI/WebUI completos, adoção forte em canais Telegram/WhatsApp

**Dívida técnica:** Tool calling quebrado com provedores OpenAI-compatíveis, bugs de memória de curto prazo em conversas longas

---

### Hermes Agent — Maior Profundidade Técnica

| Dimensão | Posição |
|----------|---------|
| **Volume** | Paridade issue/PR (50/50), indicando equilíbrio demanda/desenvolvimento |
| **Maturidade** | Features avançadas: Mnemosyne/Hindsight memory, gateway de eventos |
| **Segurança** | Investimento forte em auth (OAuth multi-provedor), i18n |
| **Desktop** | UI responsiva com Capabilities page e navegação mobile |

**Vantagens:** Arquitetura de memória mais sofisticada, gateway como substrato de eventos reutilizável, foco em onboarding multi-agente

**Dívida técnica:** OAuth fragile em múltiplos provedores, regressões no fluxo de update, suporte Windows insuficiente

---

### ZeroClaw — Foco em Segurança e Estabilidade

| Dimensão | Posição |
|----------|---------|
| **Volume** | 50 PRs — maior volume de código integrado |
| **Segurança** | Maturidade em audit (RUSTSEC, CVEs), RFCs de autenticação (OIDC) |
| **Arquitetura** | WASM plugin sandbox, ZeroCode TUI, multi-user auth |
| **Processo** | RFC-driven development com governança formalizada |

**Vantagens:** Hygiene de dependências mais rigoroso, features de segurança enterprise (OIDC, permission profiles), modo durável (goal mode)

**Dívida técnica:** Memory leaks em loops MCP/tools, 74 testes falhando no Windows, ZeroCode UX ainda imaturo

---

### CoPaw — Eficiência Operacional

| Dimensão | Posição |
|----------|---------|
| **Eficiência** | 65% taxa de resolução de issues — maior do ecossistema |
| **Beta 2.0** | Transição para arquitetura moderna (Tauri desktop) |
| **Segurança** | Feature track para key sanitization e env var fallback |
| **Processo** | Dual-track (v1.1.x stable + v2.0.0-beta simultâneas) |

**Vantagens:** Time responsivo, pipeline saudável, roadmap transparente com features de segurança enterprise

**Dívida técnica:** Bugs críticos de contexto na beta 2.0, compressão de contexto remove turns ativos

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Canais de Mensageria

| Projeto | Problema | Status |
|---------|----------|--------|
| NullClaw | Telegram idle timeout após períodos noturnos | OPEN (#972) |
| NanoBot | Telegram polling trava silenciosamente | OPEN (#3626) |
| NanoBot | WhatsApp WebSocket timeout | OPEN (#3178) |
| PicoClaw | WhatsApp WebSocket timeout | OPEN (#3178) |
| Hermes Agent | Regressão Telegram pós-update | OPEN (#57909) |
| ZeroClaw | WhatsApp device linking bloqueado | BLOCKED (#8627) |

**Padrão:** Conexões persistentes em WebSocket/Telegram polling falham em ciclos de inatividade. Soluções emergentes incluem heartbeat com model override (NanoBot #4431) e reconnect com backoff exponencial (PicoClaw #3220).

### 4.2 Sistemas de Memória e Contexto

| Projeto | Problema | Severidade |
|---------|----------|------------|
| NanoBot | Perda de memória de curto prazo | 🔴 Crítica |
| NanoBot | Archivamento apaga mensagens relevantes | 🔴 Crítica |
| Hermes Agent | Memory prompt-context injection unwired | P1 |
| IronClaw | ProductionMemoryPromptContextService dead code | P2 |
| CoPaw | Compressão remove turn ativo | 🔴 Crítica |
| ZeroClaw | Embedder não respeita provider change | Fix merged |

**Padrão:** Transversalidade de bugs de "esquecimento" indica que sistemas de contexto em conversas longas são desafiadores. Soluções em desenvolvimento: context compression via embedding (ZeroClaw #2937), search_history tool (NanoBot #4440), memory-context injection unificado (ZeroClaw #8619).

### 4.3 Autenticação OAuth Multi-Provedor

| Projeto | Provedor Afetado | Severidade |
|---------|------------------|------------|
| Hermes Agent | Anthropic Max OAuth (404s/429s) | P1 |
| Hermes Agent | Qwen OAuth refresh fails | P2 |
| Hermes Agent | MCP OAuth blocks startup | P2 |
| NanoBot | Anthropic OAuth (Claude Code tokens) | Feature merged |
| IronClaw | Slack OAuth migration | Em progresso |

**Padrão:** OAuth como ponto frágil em múltiplos projetos, especialmente com gates AntiAbuse evoluindo (Anthropic). NanoBot e Hermes Agent lideram implementações.

### 4.4 Testes Cross-Platform (Windows/Linux)

| Projeto | Problema | Impacto |
|---------|----------|---------|
| ZeroClaw | 74 test failures no Windows | S2 |
| Hermes Agent | GBK encoding crash no Windows | P2 |
| Hermes Agent | False positive em system processes (Windows) | P2 |
| IronClaw | Docker Build + Clippy Windows issues | P2 |

**Padrão:** Ambientes CI Linux-centrícos produzem gap significativo com uso real Windows. IronClaw e Hermes Agent são os mais afetados.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Indicações |
|---------|------------------|------------|
| **NullClaw** | Estável/baixa demanda |EC2/Telegram simples |
| **NanoBot** | Usuários individuais + desenvolvedores | Multi-provider, CLI/WebUI |
| **Hermes Agent** | Desenvolvedores avançados | Desktop app, memory sofisticado |
| **PicoClaw** | Power users multi-agente | Agent Collaboration Bus, RBAC |
| **IronClaw** | Produtividade empresarial | Rotinas automatizadas, Slack |
| **CoPaw** | Enterprise/China market | DingTalk, Feishu, Azure Bot |
| **ZeroClaw** | Segurança enterprise | WASM sandbox, OIDC, multi-user |

### 5.2 Por Arquitetura Técnica

| Projeto | Stack Distintivo | Diferencial |
|---------|------------------|-------------|
| **NanoBot** | Plugins opcionais, streaming | Flexibilidade máxima de provedores |
| **Hermes Agent** | Mnemosyne/Hindsight, Gateway como substrato | Memória persistente sofisticada |
| **PicoClaw** | Agent Collaboration Bus, DeltaChat | Inter-operação entre agentes |
| **IronClaw** | Reborn runtime, Rust core | Maturidade de runtime automatizado |
| **ZeroClaw** | WASM sandbox, ZeroCode TUI | Segurança em primeiro lugar |
| **CoPaw** | Tauri desktop, v2.0 modular | Modernização de stack |

### 5.3 Por Estratégia de Features

```
Hermes Agent ─────────────────────────► Memória + Onboarding
     │
     ├── "Migração de Claude Code" (#524)
     ├── "Multi-bank routing memory" (#31776)
     └── "Capabilities page" (UI consolidada)

NanoBot ───────────────────────────────► Extensibilidade + Channels
     │
     ├── Sistema de plugins (#4396)
     ├── Anthropic OAuth (#4632)
     └── Voice pipeline metrics (#3257)

ZeroClaw ───────────────────────────────► Segurança + Observabilidade
     │
     ├── WASM sandbox isolation
     ├── OIDC auth (#7141)
     └── Goal mode durável (#8303)

IronClaw ───────────────────────────────► Automação + Produtividade
     │
     ├── Reborn runtime (engine v2 removido)
     ├── Slack OAuth migration
     └── Retryable failed runs (#4841)

CoPaw ──────────────────────────────► Modernização + Enterprise
     │
     ├── Tauri desktop migration
     ├── Key sanitization (#5705)
     └── Azure Bot channel (#5762)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Características |
|------|----------|-----------------|
| **🚀 Rápida** | NanoBot, Hermes Agent, ZeroClaw, CoPaw | >30 PRs/dia, features significativas semanalmente |
| **⚙️ Moderada** | IronClaw, PicoClaw | Refatoração pesada + releases periódicas |
| **🐢 Estagnada** | NullClaw | 1 issue, 0 PRs — risco de abandono |

### 6.2 Qualidade de Processos

| Indicador | Líder | Seguidor | Lagging |
|-----------|-------|----------|---------|
| **Taxa de resolução** | CoPaw (65%) | IronClaw (54%) | NullClaw (0%) |
| **Disciplina de releases** | PicoClaw | IronClaw (crates) | NanoBot, Hermes |
| **Governança documentada** | ZeroClaw (RFCs) | Hermes Agent | PicoClaw, NullClaw |
| **Segurança processual** | ZeroClaw | Hermes Agent | PicoClaw |
| **Test coverage** | IronClaw (wave-3) | CoPaw, NanoBot | ZeroClaw (Windows) |

### 6.3 Engajamento Comunitário

| Métrica | NanoBot | Hermes | ZeroClaw | CoPaw | IronClaw | PicoClaw |
|---------|---------|--------|----------|-------|----------|----------|
| Issues comentadas (top) | 6 | 5 | 13 | 8 | 3 | 2 |
| RFCs com engajamento | 0 | 1 | 4 | 0 | 0 | 0 |
| Bug reports detalhados | Alta | Alta | Alta | Média | Alta | Alta |
| Contribuições externas | Significativa | Significativa | Significativa | Moderada | Moderada | Alta |

**Observação:** ZeroClaw apresenta o modelo de governança mais maduro com RFCs formais e automação de project board. NanoBot e Hermes Agent lideram em feature requests orgânicos.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-agência** | Agent Collaboration Bus (#2937), multi-bank routing | PicoClaw, Hermes, NanoBot |
| **Segurança como feature** | OIDC, key sanitization, WASM sandbox, permission profiles | ZeroClaw, CoPaw, Hermes |
| **Memória persistente** | search_history tool, memory hardening, context compression | Todos os projetos |
| **Resiliência de channels** | Heartbeat, reconnect com backoff, streaming multi-message | NanoBot, PicoClaw, Hermes |
| **Onboarding sofisticado** | Migration de Claude Code, first-run launcher, capabilities page | Hermes, NanoBot |
| **Desktop moderna** | Tauri migration, WebUI v2, ZeroCode TUI | CoPaw, IronClaw, ZeroClaw |

### 7.2 Padrões Arquiteturais Emergentes

```
1. WEBHOOK/POLLING ──► STREAMING PERSISTENTE (WebSocket + heartbeat)

2. SINGLE-PROVIDER ──► MULTI-PROVIDER COM FALLBACK CHAIN
   (NanoBot #3200, ZeroClaw, Hermes)

3. MONOLÍTICO ──► ARQUITETURA DE PLUGINS
   (NanoBot #4396, PicoClaw #2937, CoPaw #4642)

4. MEMORY EPHEMERAL ──► PERSISTENT + CONTEXTUAL
   (Hermes Mnemosyne, ZeroClaw unified memory, NanoBot search_history)

5. AUTH BÁSICA ──► MULTI-PROVIDER OAUTH + OIDC
   (Hermes (Anthropic, Qwen, MCP), IronClaw (Slack), ZeroClaw (OIDC))

6. LINUX-ONLY CI ──► CROSS-PLATFORM TESTING
   (ZeroClaw #7462, Hermes #53428 — gap identificado em todos)
```

### 7.3 Recomendações por Perfil

| Perfil | Projeto Recomendado | Alternativas |
|--------|--------------------|--------------|
| **Usuário individual** | NanoBot | Hermes Agent (desktop) |
| **Enterprise (segurança)** | ZeroClaw | Hermes Agent |
| **Automação de rotinas** | IronClaw | PicoClaw |
| **Desenvolvimento de plugins** | PicoClaw | NanoBot |
| **Ambiente Windows** | NanoBot, CoPaw | Evitar Hermes (temporariamente) |
| **Experimentação/research** | NullClaw | NanoBot |

### 7.4 Riscos Transversais

| Risco | Impacto | Projetos Afetados |
|-------|---------|-------------------|
| **OAuth breakage (Anthropic)** | Bloqueio de autenticação Max | Hermes, NanoBot |
| **Memory leaks em long loops** | OOM em produção | ZeroClaw, NanoBot |
| **CI Windows gap** | Regressões não detectadas | Hermes, ZeroClaw |
| **Context loss** | Experiência do usuário fragmentada | Todos exceto IronClaw |
| **Abandonware (NullClaw)** | Baixa confiabilidade | NullClaw |

---

## 8. Síntese Executiva

O ecossistema de agentes de IA open source em 2026-07-04 apresenta **saúde polarizada**: quatro projetos (NanoBot, Hermes Agent, ZeroClaw, CoPaw) demonstram vigor de desenvolvimento com equipes responsivas e roadmaps claros, enquanto dois (IronClaw, PicoClaw) atravessam transições arquiteturais e um (NullClaw) apresenta sinais de estagnação.

**Ganhos de mercado** estão concentrados em três frentes: (1) resiliência de canais de mensageria, (2) sistemas de memória persistente com contexto de longo prazo, e (3) autenticação multi-provedor com padrões enterprise (OIDC). **Dívidas técnicas compartilhadas** incluem gaps de testes Windows/Linux e fragilidade OAuth em provedores que evoluem seus gates AntiAbuse.

**ZeroClaw** emerge como o projeto com maior maturidade processual (RFC-driven, security-first), enquanto **NanoBot** lidera em volume de comunidade e flexibilidade de providers. **Hermes Agent** apresenta o roadmap mais sofisticado para memória e onboarding. Para decisões de adoção, recommends-se avaliar o trade-off entre maturidade de features (NanoBot, Hermes) versus rigor de segurança e govern

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-04

---

## 1. Panorama do dia

O NanoBot apresenta alta atividade comunitária com **65 issues e 38 PRs** atualizados nas últimas 24h, indicando um projeto em intenso desenvolvimento. **Nenhuma release foi publicada**, mas **6 PRs foram fechados/merged**, demonstrando progresso contínuo no codebase. A saúde geral reflete um projeto maduro com manutenção ativa, embora 63 issues abertas sinalizem backlog significativo. Não há evidências de incidentes críticos ou regressões generalizadas no período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu novas versões desde o último período reportado. Mantenedores devem comunicar cronograma de releases caso mudanças significativas estejam pendentes de distribuição.

---

## 3. Progresso do Projeto

Seis PRs foram fechados/merged, destacando avanços em **provedores, tooling e DX**:

| PR | Título | Impacto |
|----|--------|---------|
| [#4632](https://github.com/HKUDS/nanobot/pull/4632) | feat(providers): add Anthropic OAuth | Adiciona autenticação via Claude Code tokens, ampliando acessibilidade |
| [#4688](https://github.com/HKUDS/nanobot/pull/4688) | feat(cli): add safe WebUI first-run launcher | Melhora onboarding com comando `nanobot webui` |
| [#4685](https://github.com/HKUDS/nanobot/pull/4685) | fix: omit temperature for sonnet-5 | Corrige erro 400 com novo modelo Anthropic |
| [#4687](https://github.com/HKUDS/nanobot/pull/4687) | fix(providers): update Anthropic default model to claude-sonnet-4-6 | Atualiza modelo padrão para versão mais recente |
| [#4691](https://github.com/HKUDS/nanobot/pull/4691) | fix(plugins): polish optional feature controls | Refina controls de plugins opcionais |
| [#4396](https://github.com/HKUDS/nanobot/pull/4396) | Add optional Nanobot plugin controls | Sistema de plugins para features opcionais |

**Destaque:** A introdução do sistema de plugins (#4396) representa evolução arquitetural significativa, permitindo que funcionalidades pesadas sejam habilitadas sob demanda.

---

## 4. Temas Quentes da Comunidade

Issues com maior engajamento (comentários + reações) revelam prioridades da base:

### Maior Discussão
| Issue | Tema | Comentários | Sinal |
|-------|------|-------------|-------|
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | Tool calls em texto plain não executam ferramentas | 6 | 🔴 Bug crítico |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | Perda de memória de curto prazo | 6 | 🔴 Bug crítico |
| [#4657](https://github.com/HKUDS/nanobot/issues/4657) | Radar: 13 bugs validados sem PR | 5 | 🚨 Prioridade |
| [#4307](https://github.com/HKUDS/nanobot/issues/4307) | Consolidamento apaga mensagem do agente | 4 | 🔴 Bug |

**Análise:** Há convergência em três áreas principais:
1. **Parsing de tool calls** — Provedores OpenAI-compatíveis emitem formato textual que não é interpretado
2. **Gerenciamento de memória** — Sistema de contexto perde informações em conversas longas
3. **Consolidação de turns** — Lógica de archival interfere no histórico relevante

---

## 5. Bugs e Estabilidade

### Por Severidade

**🔴 P1 (Críticos):**
- [#4652](https://github.com/HKUDS/nanobot/issues/4652) — Processo crasha em exceções de MCP tool call
- [#4654](https://github.com/HKUDS/nanobot/pull/4654) — Respostas completas perdidas em streaming
- [#4302](https://github.com/HKUDS/nanobot/issues/4302) — Gateway crasha após reconnect de MCP
- [#4683](https://github.com/HKUDS/nanobot/issues/4683) — `temperature` causa 400 para claude-sonnet-5 (já corrigido)

**🟠 P2 (Altos):**
- [#4061](https://github.com/HKUDS/nanobot/issues/4061) — Tool calls textuais não executam
- [#3626](https://github.com/HKUDS/nanobot/issues/3626) — Telegram polling trava silenciosamente
- [#4511](https://github.com/HKUDS/nanobot/issues/4511) — `--background` no Windows com inconsistência de estado
- [#4689](https://github.com/HKUDS/nanobot/issues/4689) — OAuth sem warnings de expiração

**🟡 P3 (Médios):**
- [#4044](https://github.com/HKUDS/nanobot/issues/4044) — Memória de curto prazo
- [#3344](https://github.com/HKUDS/nanobot/issues/3344) — Upload de arquivo no DingTalk
- [#4307](https://github.com/HKUDS/nanobot/issues/4307) — Archivamento apaga mensagens

**Status:** PRs P1 [#4654](https://github.com/HKUDS/nanobot/pull/4654), [#4666](https://github.com/HKUDS/nanobot/pull/4666) e [#4685](https://github.com/HKUDS/nanobot/pull/4685) já submetidos, aguardando review.

---

## 6. Pedidos de Features e Sinais de Roadmap

Demandas emergentes sugerem direções futuras:

### Features com Suporte Explícito (+1+ 👍)
| Issue | Feature | Evidência |
|-------|---------|-----------|
| [#4440](https://github.com/HKUDS/nanobot/issues/4440) | `search_history` tool para memória | PR #4439 em andamento |
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) | `ask_clarification` tool | Nova |
| [#4431](https://github.com/HKUDS/nanobot/issues/4431) | Heartbeat com model override | PR #4620 merged |
| [#3887](https://github.com/HKUDS/nanobot/issues/3887) | Autorização de comandos perigosos | Aguarda implementação |
| [#4166](https://github.com/HKUDS/nanobot/issues/4166) | MCP para subagentes | Aguarda implementação |

### Novas Propostas
- **Voice pipeline metrics** ([#3257](https://github.com/HKUDS/nanobot/issues/3257)) — Latência STT→LLM→TTS precisa de observabilidade
- **Context compression via embedding** ([#2937](https://github.com/HKUDS/nanobot/issues/2937)) — Alternativa a trimming/summarization
- **Per-user workspace no WhatsApp** ([#2836](https://github.com/HKUDS/nanobot/issues/2836)) — Isolamento de dados por chat_id
- **Mattermost channel** ([#4459](https://github.com/HKUDS/nanobot/pull/4459)) — PR aberto com integração completa

**Sinal de Roadmap:** Padrões indicam foco em (1) observabilidade, (2) isolamento multi-tenant e (3) extensibilidade de canais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Memória/Contexto** | Sistema "esquece" perguntas anteriores em mesma conversa | Alta |
| **Integração** | Tool calling quebrado com provedores alternativos (Ollama, OpenAI-compatíveis) | Alta |
| **Canais** | Telegram para de receber updates; DingTalk não recebe arquivos | Média |
| **Sandbox** | bwrap com paths hardcoded frustra power users | Baixa |
| **Onboarding** | Configuração inicial confusa sem validação | Média |

### Cenários de Uso Reportados
- **Assistente pessoal via Telegram/WhatsApp** — Maior base de usuários
- **Voice interaction (STT→LLM→TTS)** — Crescente, mas com latência problemática
- **Multi-agente com subagentes** — Casos avançados com problemas de agregação de resultados
- **Workspace isolado por usuário** — Demandado para ambientes compartilhados

### Satisfação
- **Positivo:** Sistema de Dream para auto-melhoria, flexibilidade de provedores, CLI/WebUI
- **Negativo:** Bugs de memória causam experiência fragmentada; crashes em MCP são frequentes

---

## 8. Backlog que Merece Atenção

Issues sem atividade recente que requerem triagem:

### Sem Resposta do Maintainer (>7 dias sem update)
| Issue | Título | Criado | Prioridade |
|-------|--------|--------|------------|
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | Como enviar mensagem entre canais API | 2026-04-12 | 🟠 Alta |
| [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Ollama tool calling quebrado | 2026-04-05 | 🔴 Crítica |
| [#2836](https://github.com/HKUDS/nanobot/issues/2836) | Workspace isolado por WhatsApp chat | 2026-04-06 | 🟠 Alta |
| [#2747](https://github.com/HKUDS/nanobot/issues/2747) | Configurar/remover emoji 🐈 | 2026-04-02 | 🟡 Média |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | WebSocket vs Webhooks | 2026-04-30 | 🟡 Média |

### Issues Antigas com Alto Impacto
| Issue | Título | Criado | Status |
|-------|--------|--------|--------|
| [#2937](https://github.com/HKUDS/nanobot/issues/2937) | Context compression via embedding | 2026-04-08 | Aberta |
| [#3257](https://github.com/HKUDS/nanobot/issues/3257) | Voice pipeline metrics | 2026-04-17 | Aberta |

### Radar de Bugs (#4657)
O issue de tracking [#4657](https://github.com/HKUDS/nanobot/issues/4657) identifica **13 bugs validados sem PR**, sinalizando necessidade de sprint focado em estabilidade.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|------------|-------|-----------|
| Issues ativas | 63 | Neutra |
| PRs abertos | 32 | Neutra |
| PRs fechados (24h) | 6 | ▲ Positiva |
| Releases (24h) | 0 | — |
| Bugs P1 sem fix | 4 | Atenção |
| Features merged | 2 | ▲ Positiva |

---

*Relatório gerado em 2026-07-04 com dados do GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-04

---

## 1. Panorama do Dia

O Hermes Agent viveu um dia de **alta atividade** em 2026-07-03, com 50 issues e 50 PRs atualizados nas últimas 24h. O volume de atividade é elevado, sinalizando uma comunidade engajada. **Não houve lançamentos de novas versões**, mas o ritmo de PRs merged/fechados (18) foi substancial, demonstrando maturidade no processo de revisão. A saúde geral do projeto apresenta **sinais de tensão**: bugs P0 e P1 relacionados a autenticação OAuth (Anthropic, Qwen, MCP) e regressões pós-update (Telegram) dominam a atenção imediata. A base de código demonstra vigor, mas a pilha de Issues abertas (46 novas/atualizadas) sugere pressão sobre a equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em um período de desenvolvimento intensivo sem corte de versão formal. Usuários em produção devem monitorar issues de regressão (especialmente #57909 e #48534) caso utilizem autenticação OAuth ou a integração com Telegram após `hermes update`.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Relevantes

| # | Título | Impacto |
|---|--------|---------|
| [#57685](https://github.com/NousResearch/hermes-agent/pull/57685) | `feat(gateway): add /sessions search <query>` | Funcionalidade de busca em sessões além das 10 recentes, com correspondência de títulos/IDs e normalização de pontuação |
| [#50483](https://github.com/NousResearch/hermes-agent/pull/50483) | `fix: prevent orphaned tool_calls on keyboard interrupt (HTTP 400 on DeepSeek/Anthropic)` | Corrigiu crash com `KeyboardInterrupt` causando mensagens órfãs com `tool_calls` sem `tool_result` — **P1, segurança operacional** |
| [#57760](https://github.com/NousResearch/hermes-agent/pull/57760) | `feat(memory): harden builtin memory writes and session-entry recovery` | Protege `MEMORY.md`/`USER.md` contra escritas diretas e melhora recuperação de sessões |
| [#57758](https://github.com/NousResearch/hermes-agent/pull/57758) | `fix(gateway): arm finalize-hang watchdog at exit` | Resolve hang永久 do interpretador Python causado por `Py_FinalizeEx` + threads órfãs em `ThreadPoolExecutor` |
| [#57590](https://github.com/NousResearch/hermes-agent/pull/57590) | `Capabilities page (Skills/Tools/MCP + Hub) + responsive overlay nav & mobile polish` | UI/UX significativo do desktop app — nova página de funcionalidades e navegação responsiva |
| [#57924](https://github.com/NousResearch/hermes-agent/pull/57924) | `refactor(desktop): localize settled TODO(i18n) literals` | Consolidação de strings hardcoded em i18n catalog para locale Russo e generalização |
| [#55463](https://github.com/NousResearch/hermes-agent/pull/55463) | `fix(slack): preserve DM safety on hybrid checkout` | **Segurança** — hotfix para DMs Slack em ambientes híbridos com owner configurado |

**Destaque:** O PR [#50483](https://github.com/NousResearch/hermes-agent/pull/50483) (merged) resolve um problema crítico de estabilidade que afeta provedores estritos como DeepSeek e Anthropic quando o usuário interrompe execução com Ctrl+C.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) | `qwen-oauth refresh fails with invalid JSON` | 5 | 0 | Bug P2 — Auth |
| [#31776](https://github.com/NousResearch/hermes-agent/issues/31776) | `Feature: expose multi-bank routing for Hindsight memory tools` | 4 | 0 | Feature P3 — Memory |
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) | `Agent Migration System — auto-import settings from Claude Code, Codex, Gemini CLI...` | 4 | **1** | Feature P3 — Onboarding |
| [#36755](https://github.com/NousResearch/hermes-agent/issues/36755) | `check_systemd_timing_alignment false-positive` | 4 | 0 | Bug P3 — Gateway |
| [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) | `Anthropic Max OAuth fails: token exchange 404s/429s` | 3 | 1 | Bug P1 — Auth |
| [#49190](https://github.com/NousResearch/hermes-agent/issues/49190) | `Generalize Kanban notifications into an event substrate` | 3 | 0 | Feature P3 — Gateway |
| [#57845](https://github.com/NousResearch/hermes-agent/issues/57845) | `Envelope-layout cache breakpoints silently no-op during tool loops (~2x input cost)` | 2 | 0 | Bug P0 — Agent/Caching |
| [#57922](https://github.com/NousResearch/hermes-agent/pull/57922) | `fix(anthropic): OAuth token endpoint UA must be axios/ (login 429)` | — | 0 | Fix P1 (PR aberto) |

### Análise dos Demandas

1. **Autenticação multiplataforma em crise:** As issues [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) (Qwen) e [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) (Anthropic) demonstram que o sistema OAuth do Hermes tem problemas de robustez. A regressão do PR [#57922](https://github.com/NousResearch/hermes-agent/pull/57922) (ainda aberto) indica que a AntiAbuse gate da Anthropic evoluiu e quebrou o workaround anterior. **Prioridade operacional alta.**

2. **Migração entre agentes (Issue #524):** Com 1 Reactions (única reação registrada), a feature de migração automática de configurações de outros agentes (Claude Code, Codex, Cursor, etc.) tem apelo estratégico — reduz friction de adoção. Isso é consistente com um projeto em fase de crescimento de base de usuários.

3. **Multi-bank memory routing (Issue #31776):** A comunidade deseja mais flexibilidade no sistema Mnemosyne/Hindsight, sinalizando que casos de uso avançados estão sendo explorados.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0 (Crítico — Impacto operacional severo)

- **[#57845](https://github.com/NousResearch/hermes-agent/issues/57845)** — `Envelope-layout cache breakpoints silently no-op during tool loops` — Custo de input ~2x em OpenRouter + Claude por falha silenciosa no prompt caching. Afeta diretamente custos de API.

#### P1 (Alto — Atenção imediata)

| # | Título | Impacto |
|---|--------|---------|
| [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) | `Anthropic Max OAuth fails (token exchange 404s/429s)` | Bloqueia autenticação Max OAuth — [PR aberto #57922](https://github.com/NousResearch/hermes-agent/pull/57922) com correção |
| [#57909](https://github.com/NousResearch/hermes-agent/issues/57909) | `"No adapter available for telegram" after hermes update` | Regressão pós-update afeta Telegram — impacto em produção |

#### P2 (Médio — Degradação significativa)

| # | Título | Área |
|---|--------|------|
| [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) | Qwen OAuth refresh fails | Auth/Qwen |
| [#57903](https://github.com/NousResearch/hermes-agent/issues/57903) | `async LLM calls block desktop WebSocket loop via busy-poll` | Desktop/Agent |
| [#57836](https://github.com/NousResearch/hermes-agent/issues/57836) | `Headless MCP OAuth blocks gateway startup with stale cached tokens` | Gateway/Auth |
| [#53428](https://github.com/NousResearch/hermes-agent/issues/53428) | `subprocess.run text=True sem encoding causa GBK crash no Windows` | Windows/Cross-platform (21 localizações) |
| [#57868](https://github.com/NousResearch/hermes-agent/issues/57868) | `Dashboard basic auth crashes with 500 on first page load` | Dashboard/Auth |
| [#47515](https://github.com/NousResearch/hermes-agent/issues/47515) | `hermes config set coerce string "off"/"on" para Python booleans` | CLI/Config |
| [#57828](https://github.com/NousResearch/hermes-agent/issues/57828) | `Lazy backend refresh failures corrupt venv` | CLI/Update |
| [#57829](https://github.com/NousResearch/hermes-agent/issues/57829) | `_find_venv_holders false positive on Windows flags system processes` | Windows/Update |
| [#57921](https://github.com/NousResearch/hermes-agent/issues/57921) | `timeout=1.0 causes "database is locked" under GIL pressure` | Gateway/Dashboard |
| [#47119](https://github.com/NousResearch/hermes-agent/issues/47119) | `Memory provider tools sometimes not injected` | Memory/Agent |

#### P3 (Menor — Inconveniência)

Issues diversas em Gateway, CLI, Desktop, plugins (LINE adapter, Feishu multiplexing, Desktop remote mode, etc.). Ver lista completa nas issues recentes.

### Análise de Estabilidade

**Pontos de atenção críticos:**
1. **Regressão de update:** A issue [#57909](https://github.com/NousResearch/hermes-agent/issues/57909) indica que `hermes update` quebra a integração com Telegram. Combinado com os bugs de venv corruption ([#57828](https://github.com/NousResearch/hermes-agent/issues/57828)) e false positive no Windows ([#57829](https://github.com/NousResearch/hermes-agent/issues/57829)), o fluxo de update tem múltiplas regressões abertas.
2. **Windows como cidadãos de segunda:** As issues [#53428](https://github.com/NousResearch/hermes-agent/issues/53428) e [#57829](https://github.com/NousResearch/hermes-agent/issues/57829) evidenciam que testes Windows são insuficientes.
3. **Auth como ponto frágil:** OAuth em múltiplos provedores (Anthropic, Qwen, MCP) está estressando a infraestrutura de autenticação.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features com Alto Potencial

| # | Título | Prioridade | Sinal de Roadmap |
|---|--------|-----------|------------------|
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) | `Agent Migration System — auto-import de Claude Code, Codex, Cursor, Aider...` | P3 | **Onboarding/DX** — Estratégico para adoção |
| [#31776](https://github.com/NousResearch/hermes-agent/issues/31776) | `Multi-bank routing for Hindsight memory tools` | P3 | **Memory/Enterprise** — Casos multi-tenant |
| [#49190](https://github.com/NousResearch/hermes-agent/issues/49190) | `Generalize Kanban notifications into event substrate` | P3 | **Extensibilidade do Gateway** — Arquitetura |
| [#57886](https://github.com/NousResearch/hermes-agent/issues/57886) | `Allow disabling/hiding providers in model picker` | P3 | **UX/Desktop** — Melhora experiência |
| [#57872](https://github.com/NousResearch/hermes-agent/issues/57872) | `Support routing one bot token across multiple profile homes` | P3 | **Multi-profile/Gateway** — Operacional |

### PRs de Feature em Andamento

- **[#57685](https://github.com/NousResearch/hermes-agent/pull/57685)** (merged) — Busca em sessões via `/sessions search`
- **[#57918](https://github.com/NousResearch/hermes-agent/pull/57918)** (aberto) — Respeitar `database.journal_mode` da config
- **[#54948](https://github.com/NousResearch/hermes-agent/pull/54948)** (aberto) — Binding de `mem_dir` no `MemoryStore` init
- **[#57920](https://github.com/NousResearch/hermes-agent/pull/57920)** (aberto) — Preservar remote tilde cwd em SSH

### Sinais de Roadmap

1. **Arquitetura de eventos:** A Issue [#49190](https://github.com/NousResearch/hermes-agent/issues/49190) sobre generalizar notificações Kanban sugere que o gateway está evoluindo para um substrato de eventos reutilizável — indicativo de ambições de plataforma.
2. **Memory tooling sofisticado:** A combinação de multi-bank routing e hardening de writes ([#57760](https://github.com/NousResearch/hermes-agent/pull/57760) merged) indica investimento em memória persistente como diferencial.
3. **i18n e Desktop:** A atividade intensa em traduções (Russo, Issue [#48264](https://github.com/NousResearch/hermes-agent/pull/48264)) e Capabilities page ([#57590](https://github.com/NousResearch/hermes-agent/pull/57590) merged) indica foco em experiência de usuário desktop.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidence | Severidade |
|-----|----------|------------|
| **Autenticação OAuth quebrada** | Issues Qwen, Anthropic, MCP — usuários não conseguem autenticar em provedores主流 | P1-P2 |
| **`hermes update` causa regressões** | Telegram para de funcionar, venv corrompida, Windows bloqueado | P1-P2 |
| **Desktop remote mode坑** | Sessões pousam no projeto errado, links de arquivos não funcionam, SSH cwd quebrado | P2-P3 |
| **Windows como plataforma secundária** | GBK encoding crash, false positives em processos, path handling | P2 |
| **Config corruption silenciosa** | `config set` coerces strings para booleans sem aviso | P2 |
| **Custo de API dobrado por cache bug** | Prompt cache silent failure em tool loops — impacto financeiro direto | P0 |

### Cenários de Uso Emergentes

1. **Agentes multi-plataforma:** Integração com Telegram, Slack, Feishu, LINE — o Hermes está se tornando hub de mensageria para agentes.
2. **Memory como基础设施:** Mnemosyne/Hindsight sendo adotado para workflows de longo prazo — usuários esperam injeção confiável de ferramentas de memória.
3. **Migração de Claude Code/Cursor:** Issue #524 valida que há demanda de usuários migrando de outros agentes — oportunidade de capture de mercado.

### Satisfação/Insatisfação

**Insatisfação concentrada em:**
- Infraestrutura de autenticação (OAuth fragile)
- Fluxo de update (regressões)
- Suporte Windows (encoding, processos)

**Satisfação implícita:**
- Funcionalidades de desktop (Capabilities page, i18n) gerando PRs de contribuição
- Feature de busca em sessões ([#57685](https://github.com/NousResearch/hermes-agent/pull/57685)) sendo bem recebida
- Memory hardening ([#57760](https://github.com/NousResearch/hermes-agent/pull/57760)) addressando dor real

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Status | Urgência |
|---|--------|--------|--------|----------|
| [#38376](https://github.com/NousResearch/hermes-agent/issues/38376) | `Setup: Gemma on DGX Spark via vLLM serving Hermes` | 2026-06-03 | Open, 1 comentário | P3 — Setup/DX |
| [#26939](https://github.com/NousResearch/hermes-agent/pull/26939) | `fix(achievements): count memory writes by action not just tool name` | 2026-05-16 | Open (duplicate) | P3 — Memory |
| [#30825](https://github.com/NousResearch/hermes-agent/issues/30825) | `ci: harden lint workflow against head_ref

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de referência:** 2026-07-04
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do dia

O projeto PicoClaw apresenta alta atividade no dia de hoje, com **23 PRs atualizados** nas últimas 24h (13 abertos e 10 merged/fechados), indicando um ritmo de desenvolvimento intenso. A release **v0.3.1** foi publicada, integrando melhorias no provedor NearAI e no tratamento de tipos para store-lock. O volume de PRs recentes é significativamente superior ao de issues (2), sugerindo que a equipe está focada em contributions rather than problem reports. Dois bugs em stale state afetando Android e WhatsApp foram destacados pela comunidade.

---

## 2. Lançamentos

### v0.3.1 (1 nova release)

| Item | Detalhes |
|------|----------|
| **Data** | 2026-07-04 |
| **Commits integrados** | 3 merges principais |
| **Breaking changes** | Não identificados |
| **Notas de migração** | Nenhuma registrada |

**Mudanças integradas:**

| PR | Descrição |
|----|-----------|
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | Integração do provedor NearAI (`nearai-provider`) |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | Correção de type assertion para store-lock (`codex/store-lock-type-assert`) |
| [#30](https://github.com/sipeed/picoclaw/pull/30) | Merge adicional (detalhes não especificados no changelog) |

**Análise:** A release mantém compatibilidade com versões anteriores, adicionando suporte a um novo provedor AI e correções internas de tipagem.

---

## 3. Progresso do Projeto

### PRs merged/fechados nas últimas 24h

| PR | Status | Autor | Impacto |
|----|--------|-------|---------|
| [#3223](https://github.com/sipeed/picoclaw/pull/3223) | CLOSED | Ethan1918 | Closed em favor de #3224 — mesma correção |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) | CLOSED | chengzhichao-xydt | Melhora tratamento de erros HTTP em provedores web (Bing, Tavily, Sogou, Perplexity) |
| [#3142](https://github.com/sipeed/picoclaw/pull/3142) | CLOSED | jincheng-xydt | Eliminação de mensagens duplicadas em sub-turns de spawn |
| [#3156](https://github.com/sipeed/picoclaw/pull/3156) | CLOSED | loafoe | Emissão de token usage por turno no canal Pico |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | CLOSED | trufae | Gateway DeltaChat com documentação completa |
| [#3212](https://github.com/sipeed/picoclaw/pull/3212) | CLOSED (deps) | dependabot | Bump react-i18next 17.0.6 → 17.0.7 |
| [#3214](https://github.com/sipeed/picoclaw/pull/3214) | CLOSED (deps) | dependabot | Bump shadcn 4.7.0 → 4.12.0 |

### Avanços notáveis

1. **Canal DeltaChat** ([#3063](https://github.com/sipeed/picoclaw/pull/3063)): Integração completa com DeltaChat como gateway de mensagens, incluindo refatoração de 320+ LOC.

2. **Token Usage Tracking** ([#3156](https://github.com/sipeed/picoclaw/pull/3156)): Métricas de consumo de tokens (input/output) agora são expostas por turno, permitindo billing granular.

3. **Duplicação de Mensagens Corrigida** ([#3142](https://github.com/sipeed/picoclaw/pull/3142)): Problema de entrega duplicada em sub-agentes async resolvido limpando campo `ForUser`.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Comentários | 👍 | Tema |
|-------|-------------|-----|------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 2 | 0 | Bug no Android: serviço não inicia |
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | 1 | 0 | WhatsApp WebSocket Timeout |

**Análise:** As issues mais recentes têm baixo engajamento em 👍, mas indicam problemas críticos de estabilidade em plataformas móveis (Android) e no canal WhatsApp.

### PRs com foco estratégico

| PR | Tema | Relevância |
|----|------|------------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Agent Collaboration Bus | **Alta** — comunicação inter-agentes com mailboxes, threads e permissões |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Default fallback chain para modelos | **Alta** — resiliência na seleção de modelos |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Canal Simplex | **Média** — novo tipo de canal de comunicação |

---

## 5. Bugs e Estabilidade

### Bugs ativos (severidade estimada)

| Severidade | Issue | Descrição | Plataforma |
|------------|-------|-----------|-------------|
| **Alta** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android: impossibilidade de iniciar serviço, com screenshot e logs | Android |
| **Alta** | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp: WebSocket timeout após conexão inicial | WhatsApp |
| **Média** | [#3179](https://github.com/sipeed/picoclaw/pull/3179) | WhatsApp: reconnect após queda de websocket (PR em aberto) | WhatsApp |
| **Média** | [#3220](https://github.com/sipeed/picoclaw/pull/3220) | WhatsApp: reconnect com backoff exponencial (PR em aberto) | WhatsApp |

**Tendência:** Problemas de estabilidade em WebSockets (WhatsApp e Matrix) estão sendo ativamente tratados via PRs com implementações de reconnect e backoff.

### Bugs corrigidos (merged)

- **[#3219](https://github.com/sipeed/picoclaw/pull/3219)** — Matrix sync loop: recovery automático após disrupções de rede
- **[#3128](https://github.com/sipeed/picoclaw/pull/3128)** — Web providers: eliminação de erros espúrios em Close()
- **[#3142](https://github.com/sipeed/picoclaw/pull/3142)** — Sub-agentes: eliminação de mensagens duplicadas

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento

| PR | Feature | Status | Impacto |
|----|---------|--------|---------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | **Agent Collaboration Bus** | Aberto | Comunicação inter-agentes com mailboxes, threads isoladas e envelopes de mensagem estruturados |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Fallback chain configurável** | Aberto | UI para encadear modelos de backup, persistência via API |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **Canal Simplex** | Aberto | Novo tipo de canal unidirecional |
| [#3217](https://github.com/sipeed/picoclaw/pull/3217) | **RBAC no Discord** | Aberto | Controle de acesso por roles via `allow_roles` |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | **Seed XML tool calls** | Aberto | Recuperação de chamadas de ferramenta em respostas Volcengine Doubao |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Refatoração DeltaChat** | Aberto | Limpeza de implementação e documentação (-320 LOC) |

### Sinais de roadmap

1. **Multi-agência**: O Agent Collaboration Bus ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) representa uma mudança paradigmática, introduzindo comunicação first-class entre agentes.

2. **Resiliência de modelos**: A feature de fallback chain ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) indica foco em disponibilidade e tolerância a falhas de provedores.

3. **Expansão de canais**: Novos canais (Simplex, DeltaChat refatorado) demonstram estratégia de integração com mais plataformas de mensagem.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Issue | Contexto |
|-----|-------|----------|
| **Inviabilidade no Android** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Usuário reporta impossibilidade de iniciar o serviço, mesmo com permissões completas concedidas |
| **Timeouts no WhatsApp** | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | Conexão via websocket falha durante uso, afetando automações |
| **Configuração de caminho** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Não é possível alterar path via settings no Android |

### Cenários de uso inferidos

- **Automação WhatsApp**: Usuários dependem de conexões websocket persistentes para automação de mensagens.
- **Deploy Android**: Interesse em rodar PicoClaw como serviço em dispositivos Android.
- **Multi-provedores**: Necessidade de fallback entre modelos AI (provavelmente em produção).

### Indicadores de satisfação

- Atividade intensa de PRs sugere comunidade ativa de contribuidores.
- Multiple dependency updates indicate maintenance culture.
- Bug reports detalhados (com logs e screenshots) indicam usuários engajados.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Idade | Prioridade | Motivo da atenção |
|-------|-------|------------|-------------------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | ~8 dias | **Alta** | Bug crítico no Android (stale) |
| [#3178](https://github.com/sipeed/picoclaw/issues/3178) | ~8 dias | **Alta** | WhatsApp inoperante (stale) |

### PRs pendentes de review há >7 dias

| PR | Idade | Tema | Bloqueio |
|----|-------|------|----------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | ~40 dias | Agent Collaboration | Feature de alto impacto, sem feedback |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | ~10 dias | Seed XML recovery | Compatibilidade com provedores |
| [#3179](https://github.com/sipeed/picoclaw/pull/3179) | ~8 dias | WhatsApp reconnect | Estabilidade do canal |
| [#3193](https://github:///sipeed/picoclaw/pull/3193) | ~7 dias | Canal Simplex | Feature de canal |

### Recomendações

1. **Priorizar review de [#3179](https://github.com/sipeed/picoclaw/pull/3179) e [#3220](https://github.com/sipeed/picoclaw/pull/3220)** — ambos tratam estabilidade WhatsApp, devem ser avaliados para merge conjunto.

2. **Atribuir ownership da issue [#3182](https://github.com/sipeed/picoclaw/issues/3182)** — bug no Android com screenshots detalhadas, precisa triagem.

3. **Revisar [#2937](https://github.com/sipeed/picoclaw/pull/2937)** — PR maduro (40 dias) com feature arquitetural significativa, precisa decisão de accept/reject.

---

## Métricas Consolidada (últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 0 |
| PRs abertos | 13 |
| PRs merged/fechados | 10 |
| Releases | 1 |
| Taxa de atividade (PRs/issue) | 11.5:1 |
| Bugs críticos pendentes | 2 |
| Features em desenvolvimento | 6 |

---

*Relatório gerado automaticamente com base nos dados do GitHub de sipeed/picoclaw em 2026-07-04.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-07-04

---

## 1. Panorama do dia

O projeto IronClaw demonstra **alta atividade** em 04 de julho de 2026, com 19 issues atualizadas e 48 PRs nas últimas 24 horas. O foco principal permanece na estabilização do runtime Reborn, com destaque para a remoção concluída do engine v2 (#5545) e várias correções de CI. A comunidade está ativamente refinando a integração com Slack (migração para OAuth), resolvendo bugs críticos relacionados a rotinas e threads, e implementando melhorias na cobertura de testes de integração. O estado geral indica um projeto em fase de maturação técnica, com 3 releases de crates atualizadas (ironclaw_common 0.5.0, ironclaw_skills 0.4.0) sinalizando evolução significativa da API.

---

## 2. Lançamentos

### Novas Versões (via PR #5598)

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| ironclaw_common | 0.4.2 | 0.5.0 | ⚠️ Breaking changes |
| ironclaw_safety | 0.2.2 | 0.2.3 | ✓ API compatível |
| ironclaw_skills | 0.3.0 | 0.4.0 | ⚠️ Breaking changes |
| ironclaw | 0.24.0 | 0.29.1 | Múltiplas mudanças |
| ironclaw_skill_learning | 0.1.0 | 0.1.1 | ✓ API compatível |

**Nota**: Não há releases GitHub formais registradas; estas são atualizações de crates internas via workflow automation. Recomenda-se revisão dos CHANGELOGs individuais antes de atualização em produção, especialmente para `ironclaw_common` e `ironclaw_skills` devido às mudanças quebrativas.

🔗 [PR #5598 - chore: release](https://github.com/nearai/ironclaw/pull/5598)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados de Destaque

| PR | Título | Tamanho | Impacto |
|----|--------|---------|---------|
| [#5545](https://github.com/nearai/ironclaw/pull/5545) | refactor: remove engine v2 (crates/ironclaw_engine) | XL | Removeu 171 arquivos obsoletos, simplificando a base de código |
| [#5601](https://github.com/nearai/ironclaw/pull/5601) | Fix CI after engine v2 removal | L | Estabilizou workflows após remoção do engine v2 |
| [#5607](https://github.com/nearai/ironclaw/pull/5607) | Stabilize QA6 and QA8 live canary assertions | L | Melhorou robustez dos testes de canary em produção |
| [#5584](https://github.com/nearai/ironclaw/pull/5584) | test(reborn): wave-3 integration coverage | L | Cobertura de testes para journeys, multi-user isolation, hooks |
| [#5362](https://github.com/nearai/ironclaw/pull/5362) | Harden Slack pairing activation flows | XL | Reforçou fluxos de pareamento Slack |
| [#5599](https://github.com/nearai/ironclaw/pull/5599) | Enable distributed sccache in key CI workflows | L | Otimiza tempos de build em CI |
| [#5586](https://github.com/nearai/ironclaw/pull/5586) | Harden Reborn WebUI v2 live canary diagnostics | XL | Diagnósticos de QA lane para Slack DM delivery |
| [#5348](https://github.com/nearai/ironclaw/pull/5348) | Port WebUI v2 legacy browser coverage | XL | Migração de cobertura legado Playwright concluída |

**Destaque Estratégico**: A remoção completa do engine v2 (#5545) representa marco técnico significativo, consolidando a arquitetura no stack Reborn/runtime.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/interação)

| Issue | Título | Comentários | Reações | Tema Principal |
|-------|--------|-------------|---------|----------------|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine fails reading Slack DMs | 3 | 0 | Falta capability de leitura Slack + retry loop |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | Cannot delete old routines | 1 | 0 | UX crítica: sem mecanismo de limpeza |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | Failed routine shows "No thread attached" | 1 | 0 | Bloqueia debugging de falhas |
| [#5571](https://github.com/nearai/ironclaw/issues/5571) | web-access.search fails on Railway QA | 1 | 0 | IP throttling Exa upstream (resolvido) |

### Análise dos Temas

**Slack Integration (3 issues ativas)**:
- Problemas recorrentes com DM reading capability (#5522)
- Falha no fluxo de conexão OAuth (#5602)
- Esforço em curso para migrar pairing code → OAuth (#5604)

**Reborn Agent Loop (4 issues)**:
- Retry path unreachable para capabilities locais (#5608)
- Memory prompt-context injection unwired (#5605)
- HookedLoopCheckpointPort não forward payload (#5572)
- Dead letter force_compact flag (#5582)

**Testes e CI (3 issues)**:
- CI vermelho após engine-v2 removal (#5590, #5603)
- Falha nightly E2E (#4108)
- Cobertura de integração wave-3 completada (#5584)

🔗 [Issue #5522](https://github.com/nearai/ironclaw/issues/5522) | [Issue #5510](https://github.com/nearai/ironclaw/issues/5510) | [Issue #5507](https://github.com/nearai/ironclaw/issues/5507)

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

#### P1 (Críticos - Impactam Produção)
| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine falha ao ler Slack DMs — capability inexistente + retry loop infinito | OPEN |
| [#5571](https://github.com/nearai/ironclaw/issues/5571) | web-access.search falha com invalid_output abortando turno | CLOSED (resolvido) |

#### P2 (Altos)
| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | Failed routine mostra "No thread attached" bloqueando debugging | OPEN |
| [#5583](https://github.com/nearai/ironclaw/issues/5583) | Capacidade desabilitada gera model_error vs denial visível | OPEN |
| [#5608](https://github.com/nearai/ironclaw/issues/5608) | Retry path unreachable para capabilities synthéticas locais | OPEN |

#### P3 (Médios)
| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | Não é possível deletar rotinas antigas | OPEN |

#### Bugs de Infraestrutura/CI
| Issue | Descrição | Status |
|-------|-----------|--------|
| [#5603](https://github.com/nearai/ironclaw/issues/5603) | Docker Build missing prompts COPY + Clippy Windows unused import | OPEN |
| [#5590](https://github.com/nearai/ironclaw/issues/5590) | Main branch CI checks não estão verdes | OPEN |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | OPEN (recorrente) |

### Código Morto Identificado
- `force_compact_on_next_iteration` nunca lido ([#5582](https://github.com/nearai/ironclaw/issues/5582))
- `ProductionMemoryPromptContextService` nunca composto ([#5605](https://github.com/nearai/ironclaw/issues/5605))
- FilesystemSessionThreadService idempotency write/read mismatch ([#5527](https://github.com/nearai/ironclaw/issues/5527) - CLOSED)
- Skill trust ceiling nunca portado para Reborn ([#5581](https://github.com/nearai/ironclaw/issues/5581))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

| Issue | Descrição | Sinal de Roadmap |
|-------|-----------|------------------|
| [#5581](https://github.com/nearai/ironclaw/issues/5581) | Portar skill trust ceiling (attenuate_tools) para Reborn | Evolução do modelo de confiança |
| [#5605](https://github.com/nearai/ironclaw/issues/5605) | Wire ProductionMemoryPromptContextService em produção | Funcionalidade de memória em produção |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | reborn: no run-borking failures — retryable failed runs | Resiliência do runtime |

### PRs em Andamento (Features)

| PR | Descrição | Tamanho | Escopo |
|----|-----------|---------|--------|
| [#5604](https://github.com/nearai/ironclaw/pull/5604) | Remove Slack pairing flow em favor de OAuth | XL | channel, pairing, extensions |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | Eliminar "run-borking" terminal errors | XL | agent, error handling |
| [#5221](https://github.com/nearai/ironclaw/issues/5221) | Ironclaw harness backlog — deepseek-v4-flash | Backlog | hillclimb optimization |

### Sinais de Evolução
1. **Slack Integration**: Migração completa de pairing code para OAuth está em curso
2. **Testes**: Wave-3 de cobertura de integração concluída, indicando maturidade do harness
3. **Resiliência**: Foco em eliminar falhas terminais e implementar retry contracts

🔗 [PR #4841](https://github.com/nearai/ironclaw/pull/4841) | [PR #5221](https://github.com/nearai/ironclaw/issues/5221)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

**1. Gestão de Rotinas**
> *"There is no working mechanism to remove previously created routines. A user reported being unable to delete old routines and needing 'a complete restart' to clear them."*
> — [#5510](https://github.com/nearai/ironclaw/issues/5510)

**Impacto**: Usuários ficam presos com configurações obsoletas; rotinas stale continuam executando.

**2. Debugging de Falhas**
> *"When a routine run fails, the run detail view shows 'No thread attached' and the 'Open run' button is disabled."*
> — [#5507](https://github.com/nearai/ironclaw/issues/5507)

**Impacto**: Impossibilidade de inspecionar execução; dificuldade em diagnosticar falhas.

**3. Integração Slack**
> *"When connecting to Slack with the prompt 'connect to Slack', the agent reports that Slack is connected — but when I message the private (DM) chat, it just returns a link/pairing code instead of completing the connection."*
> — [#5602](https://github.com/nearai/ironclaw/issues/5602)

**Impacto**: Fluxo de conexão confuso; experiência do usuário fragmentada.

### Cenários de Uso Observados
- **Reborn agent loop**: Execução de rotinas automatizadas em Railway staging
- **Harness optimization**: Hillclimb com deepseek-v4-flash
- **Daily taxonomy**: Análise de falhas em pinchbench (66 não-pass de 147)

### Satisfação/Insatisfação
| Aspecto | Status |
|---------|--------|
| CI/CD | ⚠️ Instável (múltiplos workflows falhando) |
| Core functionality | ✓ Estável (funcionalidade principal operacional) |
| UX (deletion/debug) | ❌ Insatisfação clara |
| Slack integration | ⚠️ Em transição (OAuth em desenvolvimento) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Idade | Prioridade | Situação |
|-------|--------|-------|------------|----------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | ~38 dias | Alta | Recorrente |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | No run-borking failures | ~21 dias | Alta | Em progresso |
| [#5221](https://github.com/nearai/ironclaw/issues/5221) | Ironclaw harness backlog | ~9 dias | Média | Ativo |
| [#5588](https://github.com/nearai/ironclaw/issues/5588) | Track QA-discovered production follow-ups from PR #5380 | 1 dia | Média | Novo |
| [#5595](https://github.com/nearai/ironclaw/issues/5595) | Daily ironclaw failure taxonomy — 2026-07-03 | 1 dia | Baixa | Monitoramento |

### Issues Críticas sem Assignee Visível
| Issue | Descrição | Recomendação |
|-------|-----------|---------------|
| [#5608](https://github.com/nearai/ironclaw/issues/5608) | Retry path unreachable para capabilities synthéticas | Requer triagem técnica |
| [#5605](https://github.com/nearai/ironclaw/issues/5605) | Memory context injection dead code | Requer decisão arquitetural |
| [#5581](https://github.com/nearai/ironclaw/issues/5581) | Skill trust ceiling não portado | Roadmap item |

### Ações Recomendadas

1. **Imediato**: Atribuir owner para issues P1 (#5522, #5507)
2. **Esta semana**: Resolver CI vermelho (#5603, #5590) para permitir merge de PRs
3. **Este mês**: Feature freeze para estabilizar 0.29.x antes de próxima release

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas | 16 |
| Issues fechadas | 3 |
| PRs abertas | 22 |
| PRs merged/fechadas | 26 |
| Releases | 0 |
| Issues P1/P2 | 5 |
| PRs críticos (XL) em progresso | 2 |
| Backlog items estagnados | 3 |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-04. Próxima atualização prevista: 2026-07-05.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (AgentScope AI)
## Data: 2026-07-04

---

## 1. Panorama do Dia

O projeto CoPaw demonstra **alta atividade diária** com 40 issues e 33 PRs atualizados nas últimas 24 horas. A taxa de resolução é expressiva — 65% das issues (26/40) foram fechadas, indicando uma equipe responsiva. O pipeline de PRs está igualmente saudável com 42% das contribuições já merged (14/33). Não há lançamentos recentes, sugerindo foco em estabilização e refinamento da versão 2.0 beta em desenvolvimento. A comunidade permanece engajada com issues técnicas variadas, desde bugs de UI até funcionalidades de segurança e extensibilidade. O projeto transita entre correções de bugs da versão atual (v1.1.x) e evolução da arquitetura 2.0.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto mantém duas linhas principais em paralelo:
- **v1.1.x (stable)**: Versão em produção com correções incrementais (v1.1.12.post2 visível nos reports)
- **v2.0.0-beta**: Ciclo de testes ativo (b1 e b2 mencionados nas issues), com mudanças significativas em andamento

---

## 3. Progresso do Projeto

### PRs Merged/Closed (Últimas 24h)

| # | Título | Impacto |
|---|--------|---------|
| [#5764](https://github.com/agentscope-ai/CoPaw/pull/5764) | Add request timeout, retry e AbortSignal support | **Crítico** — Melhoria de robustez com timeout configurável (30s default), retries com delay, e suporte a AbortSignal externo |
| [#5735](https://github.com/agentscope-ai/CoPaw/pull/5735) | Update GitHub Models para novo endpoint + fine-grained PAT | Migração de endpoint Azure-deprecado para `models.github.ai`; suporte a tokens PAT granulares |
| [#5506](https://github.com/agentscope-ai/CoPaw/pull/5506) | Sync execution_level para policy.yaml + respeitar "off" | Correção de bug onde política de execução não persistia corretamente no frontend |
| [#5754](https://github.com/agentscope-ai/CoPaw/pull/5754) | Session item unification | Unificação de componentes SessionItem para drawer/sidebar, reduzindo duplicação |
| [#5755](https://github.com/agentscope-ai/CoPaw/pull/5755) | MCP client config resilience | Tolerância a configurações MCP inválidas que anteriormente causavam falha total do AgentProfile |
| [#5742](https://github.com/agentscope-ai/CoPaw/pull/5742) | Mostrar stream completion time (não first-chunk) | Correção de UX no display de timing de mensagens |
| [#5525](https://github.com/agentscope-ai/CoPaw/pull/5525) | Windows native sandbox | Nova feature para ambiente Windows nativo |
| [#1780](https://github.com/agentscope-ai/CoPaw/pull/1780) | Support BGE-M3 embedding (dense_embedding fallback) | Compatibilidade com modelo de embedding BGE-M3 |

### PRs Abertos em Destaque

| # | Título | Status |
|---|--------|--------|
| [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) | Scroll context protection fix | **Alta prioridade** — Corrige #5746: proteção do turno ativo contra compressão prematura |
| [#5762](https://github.com/agentscope-ai/CoPaw/pull/5762) | Azure Bot channel | Expansão de canais suportados via Bot Framework |
| [#5734](https://github.com/agentscope-ai/CoPaw/pull/5734) | Tauri desktop release switch | Migração de packaging legacy para Tauri |
| [#5761](https://github.com/agentscope-ai/CoPaw/pull/5761) | Malformed tool-call handling | Correção de loop infinito com tool calls truncados |
| [#5751](https://github.com/agentscope-ai/CoPaw/pull/5751) | Prioritize built-in slash commands | Correção de autocomplete conflitante |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)** — Performance degradação com 40+ agentes (8 comentários)
   - **Tipo:** Bug | **Status:** CLOSED
   - **Resumo:** Pages lentas com múltiplos agentes, possível memory leak ou renderização ineficiente
   - **Referência:** Relacionado a #3499

2. **[#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705)** — Feature:密钥脱敏与安全存储 (6 comentários)
   - **Tipo:** Enhancement | **Status:** OPEN
   - **Resumo:** Proposta de melhoria de segurança para api_keys, incluindo env var fallback e log sanitization
   - **Sinal de roadmap:** Segurança é prioridade crescente

3. **[#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711)** — Análise de lacunas e comparação competitiva (3 comentários)
   - **Tipo:** Enhancement | **Status:** CLOSED
   - **Resumo:** Documentação abrangente de limitações do CoPaw vs. concorrentes em tool calling, memória e contexto

4. **[#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)** — Scroll context compression bug (4 comentários)
   - **Tipo:** Bug | **Status:** OPEN
   - **Resumo:** Compressão de contexto descarta turn ativo, causando "失忆" (perda de memória) durante tarefas

### Tendências de Discussão

- **Contexto e Memória:** Múltiplas issues sobre compressão de contexto (#5746, #5710, #5717), indicando área crítica
- **Extensibilidade:** Plugins (#5689, #5547, #4642), custom models (#5609), channels (#5762)
- **Estabilidade 2.0:** Bugs específicos da beta (#5769, #5767) sugerem maturação necessária

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (impacto funcional)
| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | Scroll context compression removes active turn | OPEN | Tarefas longas (/heartbeat) perdem contexto no meio da execução |
| [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | Malformed tool-call causes endless loop | OPEN | JSON truncado em write_file causa execução repetida |
| [#5769](https://github.com/agentscope-ai/QwenPaw/issues/5769) | Double /api prefix causes 404 | OPEN | Erro de roteamento no frontend da 2.0 beta |

#### 🟠 Altos (usabilidade significativa)
| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) | Console SDK single-session pull bloqueia multi-agent | OPEN | Limitação arquitetural do SDK @agentscope-ai/chat |
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) | 40+ agentes degradam performance | CLOSED | Memory/performance issue com escala |
| [#5689](https://github.com/agentscope-ai/QwenPaw/issues/5689) | Remote SSH plugin residue após uninstall | CLOSED | ModuleNotFoundError persistente |

#### 🟡 Médios (bugs específicos)
| # | Título | Status |
|---|--------|--------|
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Browser autofill hijacks search input | CLOSED |
| [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) | GLM-5.1 reasoning chain não aparece | CLOSED |
| [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | Plan mode lê arquivo repetidamente | OPEN |

### Nota sobre 2.0 Beta

A versão 2.0.0b2 apresenta bugs específicos de arquitetura (session handling, roteamento) que estão sendo tratados ativamente. O PR [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) já endereça o issue de contexto crítico.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Impacto | Sinais de Roadmap |
|---|--------|---------|-------------------|
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) | 密钥脱敏与安全存储 | Alto | Segurança como feature track oficial |
| [#5762](https://github.com/agentscope-ai/CoPaw/pull/5762) | Azure Bot channel | Médio | Expansão de canais corporativas |
| [#5734](https://github.com/agentscope-ai/CoPaw/pull/5734) | Tauri desktop | Alto | Migração para stack moderna (bye conda-pack) |
| [#5736](https://github.com/agentscope-ai/CoPaw/pull/5736) | QwenPaw review bot | Experimental | Automação de code review com IA |
| [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | Custom model protocol (não OpenAI) | Médio | Suporte a endpoints alternativos |
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) | Plugin extensibility + workdir | Alto | Arquitetura plugin mais desacoplada |

### Análise de Roadmap

Baseado nas issues e PRs, o roadmap aparente inclui:

1. **Estabilidade 2.0** — Context management, session handling, roteamento
2. **Desktop moderna** — Tauri como target primário
3. **Segurança enterprise** — Key sanitization, env var handling
4. **Ecossistema expandido** — Mais channels (Azure Bot), mais providers
5. **Extensibilidade** — Plugin API mais poderosa

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Contexto/Memória** | Agent "esquece" tarefas no meio, responde mensagens antigas | 🔴 Alta |
| **Estabilidade** | Tarefas pesadas travam ou终止 | 🟠 Média |
| **Plugins** | Instalação/desinstalação deixa resíduos, config MCP frgil | 🟠 Média |
| **Performance** |many agents = UI lenta | 🟡 Baixa |
| **Channels** | Problemas pontuais com DingTalk/Feishu | 🟡 Baixa |

### Cenários de Uso Emergentes

1. **Agentes multi-canal**: Integração enterprise (Teams, Slack via Azure Bot)
2. **Tarefas pesadas**: Crons,heartbeat, reportes automatizados
3. **Customização**: Modelos não-OpenAI, embeddings proprietários (BGE-M3)
4. **Plugins como produto**: Marketplace com segurança (link guard, sanitization)

### Satisfação Geral

**Positiva** — A equipe responde rapidamente (issues fechadas em horas/dias), PRs merged com frequência, e a versão 2.0 mostra investimento em arquitetura. Críticas centram em estabilidade de contexto, não em falta de features.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >7 dias

| # | Título | Criado | Prioridade |
|---|--------|--------|------------|
| [#5616](https://github.com/agentscope-ai/QwenPaw/issues/5616) | 自动化任务终止不明 | 2026-06-29 | 🟠 Alta |
| [#5763](https://github.com/agentscope-ai/QwenPaw/issues/5763) | 重型任务卡死 | 2026-07-03 | 🟠 Alta |
| [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) | Console SDK limitação arquitetural | 2026-07-03 | 🔴 Crítica |

### Issues Arquiteturais Pendentes

| # | Título | Impacto |
|---|--------|---------|
| [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) | 上下文压缩无保护锚点 | Contextos podem perder mensagens críticas |
| [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) | SDK single-session pull model | Bloqueia evolução multi-agent |
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) | Plugin extensibility gaps | Limita ecossistema third-party |

### PRs em Review Aguardando Merge

| # | Título | Prioridade |
|---|--------|------------|
| [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) | Scroll context protection fix | 🔴 Crítica |
| [#5761](https://github.com/agentscope-ai/CoPaw/pull/5761) | Malformed tool-call surface to model | 🟠 Alta |
| [#5751](https://github.com/agentscope-ai/CoPaw/pull/5751) | Slash command priority | 🟡 Média |
| [#5752](https://github.com/agentscope-ai/CoPaw/pull/5752) | Plugin migration docs | 🟡 Documentação |

---

## Métricas Resumidas (2026-07-04)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 14 | Neutra |
| Issues fechadas (24h) | 26 | ✅ Positiva |
| PRs abertos | 19 | — |
| PRs merged/closed | 14 | ✅ Positiva |
| Releases | 0 | Neutra |
| Taxa de resolução | 65% | ✅ Alta |
| Tickets críticos pendentes | 3 | 🟠 Atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-04. Para atualizações em tempo real, consulte [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-04

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nesta data, com 34 issues e 50 PRs atualizados nas últimas 24 horas, evidenciando um ciclo de desenvolvimento intenso. Não houve novos lançamentos, mantendo-se a versão estável atual em **v0.8.1** com o roadmap focado na v0.8.3. O foco principal concentra-se em **segurança, estabilidade de runtime e melhorias na arquitetura de plugins**, com vários patches de hardening sendo mergeados. A comunidade demonstra engajamento significativo, especialmente em RFCs de governança e autenticação, enquanto múltiplos bugs de alta severidade (especialmente relacionados a vazamento de memória e testes cross-platform) estão sendo tratados ativamente.

---

## 2. Lançamentos

**Nenhuma release nova została wydana nas últimas 24 horas.**

O projeto encontra-se em momento de preparação para a v0.8.3, com trackers ativos:
- [v0.8.3 WASM plugin program](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)
- [v0.8.3 runtime execution, agent loop, tools, and skills](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)
- [v0.8.3 observability, CI, docs, dependencies, and release support](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)
- [v0.8.3 gateway, web, ZeroCode, and onboarding surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/8070)

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (8 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#8542](https://github.com/zeroclaw-labs/zeroclaw/pull/8542) | **chore(deps): bump wasmtime 43 → 45.0.3** | Resolve 3 CVEs críticas de wasmtime-wasi (RUSTSEC-2026-0192 e correlatos). Elimina dependência vulnerável via remoção do feature `rag-pdf` em [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547). |
| [#8490](https://github.com/zeroclaw-labs/zeroclaw/pull/8490) | **chore(deps): bump wasmtime-wasi 43.0.2 → 44.0.2** | Atualização intermediária de segurança. |
| [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547) | **fix(audit): remove rag-pdf feature** | Remove feature não essencial que introduzia `ttf-parser` vulnerável. Limpa RUSTSEC-2026-0192 de audit.toml e deny.toml. |
| [#8625](https://github.com/zeroclaw-labs/zeroclaw/pull/8625) | **fix(memory): refresh embedder on config/set provider-profile change** | Corrige problema onde backends de embedding mantinham valores de provider resolvidos na construção, não respeitando mudanças via `config/set`. |

**Avanços significativos:**
- **Higienização de dependências**: Limpeza de CVEs RustSec demonstrando maturidade no processo de security audit.
- **Resiliência de memória**: Correção de bug que causava uso de credenciais desatualizadas em backends de memória de longa duração.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | Reações | Tema Central |
|---|--------|-------------|---------|--------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | **13** | 0 | **Governança** — Proposta de automação de project board para reduzir carga manual de mantenedores. Status: Accepted, rollout in progress. |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | **8** | 0 | **DX/CI** — Falhas em testes Windows 11 (console code page 936) não capturadas pela CI Linux-only. Severidade S2. |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: OIDC authentication provider support | **7** | 0 | **Segurança/Arquitetura** — RFC para suporte a múltiplos provedores de autenticação (peercred, native pairing, ssh-key, OIDC). Target v0.9.0. |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | consecutive OOM in WSL2 | **7** | 0 | **Estabilidade** — Problema de OOM complexo com múltiplas causas raiz. **Closed** após separação em #8642. |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode for bounded autonomous session work | **3** | **1** 👍 | **Feature** — Proposta de modo durável para perseguir objetivos de usuário até conclusão. PR #8393 em implementação. |

### Análise de Demandas

1. **Governança e Produtividade de Mantenedores**: O RFC #6808 (13 comentários) evidencia a necessidade de reduzir trabalho manual na gestão do projeto. A comunidade busca automação de work lanes e labels.

2. **Segurança como Prioridade**: Dois RFCs de segurança (#7141 OIDC, #8554 zip-bomb) indicam maturidade na abordagem de threat modeling. O PR #8672 implementa multi-user auth providers.

3. **Cross-Platform Reliability**: Issue #7462 com 8 comentários revela gap significativo entre testes CI (Linux-only) e uso real (Windows).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### **S0/S1 — Críticos (Workflow Bloqueado)**

| # | Descrição | Status | Link |
|---|-----------|--------|------|
| #8675 | Malformed native tool-call arguments causam provider 400 → empty reply | OPEN | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) |
| #8627 | WhatsApp Web device linking quebrado por novo gate passkey/SHORTCAKE | **BLOCKED** | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) |
| #8632 | Source install com embedded-web falha antes de api-generated.ts existir | IN-PROGRESS | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8632) |
| #7756 | native/MCP tools indisponíveis em OpenAI Responses/reasoning e Anthropic turns | **CLOSED** | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) |

#### **S2 — Degradados (Comportamento Afetado)**

| # | Descrição | Risco | Link |
|---|-----------|-------|------|
| #7462 | 74 test failures em Windows (comandos Unix-only, path semantics, console encoding) | HIGH | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| #8644 | ZeroCode completa Code turn sem output visível do assistente | MEDIUM | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) |
| #8664 | ZeroCode code-block Copy inclui Markdown fences | MEDIUM | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8664) |
| #8652 | ZeroCode transcript highlight não dismiss em blank side clicks | LOW | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8652) |

#### **Security Advisories**

| # | Descrição | Severidade | Link |
|---|-----------|------------|------|
| #8554 | Zip-bomb inflation no skill zip extractor (falta ratio + uncompressed-size caps) | HIGH | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) |
| #8519 | wasmtime-wasi CVEs em audit.toml/deny.toml drift | HIGH | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — **Mitigado via #8542** |

#### **Crashes e SIGSEGV**

| # | Descrição | Impacto | Link |
|---|-----------|---------|------|
| #8654 | skill-review fork panics (out-of-range slice at skills/review.rs:159) → SIGSEGV 139 | **Daemon crash** após tool-heavy turn | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |

#### **Memory Leaks**

| # | Descrição | Causa Raiz | Link |
|---|-----------|------------|------|
| #8642 | MCP/tool-schema cloning → unbounded RSS growth no agent loop | Split de #5542 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| #5542 | consecutive OOM in WSL2 | Multiple (um root cause já mitigado por #8633) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) — **CLOSED** |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Feature | Prioridade | Sinais de Roadmap |
|---|---------|------------|-------------------|
| [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) | Auto-resume most recent Code session on pane entry | P3 | ZeroCode maturity roadmap |
| [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) | Show active resolved log path in ZeroCode diagnostics | P3 | Developer experience improvements |
| [#8626](https://github.com/zeroclaw-labs/zeroclaw/issues/8626) | zerocode receives full RPC spec from daemon and validates | P2 | Architecture improvement para type safety |

### Features em Implementação (PRs Abertos de Destaque)

| PR | Feature | Tamanho | Progresso |
|----|---------|---------|-----------|
| [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) | **feat(runtime): implement goal mode** | XL | Implementação do RFC #8303 — modo durável para objetivos Autonomous |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **feat(channels/telegram): add multi_message streaming mode** | XL | Adiciona `multi_message_delay_ms` e StreamMode::MultiMessage via draft API |
| [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609) | **feat(channels): add Git forge channel (GitHub provider) with SOP ingress** | XL | Primeiro PR de série de 3 — channel-sourced SOP-ingress substrate |
| [#8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619) | **feat(runtime): unified memory-context injection keyed on TurnOrigin** | L | Proposta de Provenance axis na ingress envelope |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | **feat(security): multi-user auth providers, permission profiles, principal isolation** | L | Implementação RFC #7141 — AuthProvider registry + 4 providers |

### RFCs Ativos (Indicadores de Direção)

| RFC | Tópico | Status | Link |
|-----|--------|--------|------|
| #6808 | Work Lanes, Board Automation, and Label Cleanup | **Accepted** | [RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| #7141 | OIDC authentication provider support | **Accepted** | [RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| #8303 | Goal mode for bounded autonomous session work | **Accepted** | [RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema Reportado | Severidade | Evidence |
|-----------|-------------------|------------|----------|
| **Estabilidade Cross-Platform** | 74 testes falhando no Windows não capturados pela CI Linux-only | S2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **Memory Leaks** | Crescimento unbounded de RSS em loops com MCP/tools | S0-S1 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| **Web Dashboard UX** | SOPs não disponíveis via chat session web | S1 | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) |
| **ZeroCode TUI** | Comportamentos inesperados em copy/highlight/session resume | S2-S3 | [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644), [#8652](https://github.com/zeroclaw-labs/zeroclaw/issues/8652), [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) |
| **Channel WhatsApp** | Device linking completamente bloqueado após update do WhatsApp | S1 | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) |
| **Config/Secrets** | Banner de reload mostra drift persistente para secrets via ZEROCLAW_* env | P2 | [#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) |

### Cenários de Uso Emergentes

1. **Agents multi-canal em produção**: Demanda por streaming multi-message em Telegram (#8561), GitHub SOP ingress (#8609), e hardened auth (#8672).
2. **Desenvolvimento headless**: Problemas com SOPs determinísticos rodando via cron/MQTT/filesystem/AMQP (#8631).
3. **Segurança em primeiro lugar**: Comunidade preocupada com zip-bombs (#8554), SSRF em múltiplos componentes (#8628, #8635, #8657), e path traversal (#8628).

---

## 8. Backlog que Merece Atenção



</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*