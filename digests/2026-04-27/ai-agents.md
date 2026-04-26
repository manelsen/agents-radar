# Resumo diário do ecossistema de agentes de IA 2026-04-27

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-04-26 20:33 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-27

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade no período de 24h**. Não houve lançamentos, PRs merged ou fechadas, indicando um dia de manutenção. A única atualização é uma issue aberta relacionada a um bug de alto consumo de CPU no gateway quando executado em WSL2. O projeto mantém-se funcional, mas a comunidade reporta problemas de estabilidade em ambientes específicos.

---

## 2. Lançamentos

**Nenhum lançamento nas últimas 24h.**

O último release registrado foi a versão `2026.4.17`. Sem novidade no período.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

Não houve código mesclado ou contribuciones aceitas. Isso indica ausência de contribuições ativas ou que o ciclo de review está vazio no momento.

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção:

| Issue | Comentários | Reações | Link |
|-------|-------------|---------|------|
| #870 - Gateway accept4 busy loop (100% CPU) on WSL2 | 1 | 0 | [GitHub #870](https://github.com/nullclaw/nullclaw/issues/870) |

**Análise:** A issue aberta reporta um bug crítico: um thread consome 100% da CPU continuamente mesmo em estado idle quando o gateway está rodando em WSL2 (Windows 11 + Linux x86_64). A funcionalidade do Telegram bot permanece operacional, mas o impacto energético é significativo. Apenas 1 comentário foi adicionado (provavelmente triagem inicial), sem reações da comunidade ainda.

---

## 5. Bugs e Estabilidade

### Bug Reportado:

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| **Alta** | [#870](https://github.com/nullclaw/nullclaw/issues/870) | Gateway `accept4` busy loop consumindo 100% CPU no WSL2 | **ABERTA** |

**Impacto:** O bug causa consumo excessivo de CPU, o que pode:
- Drenar bateria em laptops
- Causar throttling térmico
- Degradar performance do host Windows
- Indicar possível resource leak ou lógica de polling problemática

**Observação:** O ambiente WSL2 é um cenário específico (não Linux nativo), o que pode estar relacionado a comportamento diferente na syscall `accept4()` ou gerenciamento de sockets. A equipe ainda não atribuiu prioridade ou milestone.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request nas últimas 24h.**

A issue #870 é um bug report, não uma demanda de feature. A ausência de FRs pode indicar:
- Estabilidade da codebase atual
- Ciclo de planejamento já definido
- Necessidade de novos canais de feedback da comunidade

---

## 7. Resumo de Feedback dos Usuários

### Bug Reportado (Issue #870):

| Aspecto | Detalhe |
|---------|---------|
| **Ambiente** | WSL2 (Windows 11, kernel Linux x86_64) |
| **Versão afetada** | 2026.4.17 |
| **Funcionalidade** | Gateway (Telegram bot) |
| **Sintoma** | 100% CPU em um thread, mesmo em idle |
| **Impacto percebido** | Funcionalidade preservada, mas custo computacional inaceitável |
| **Desejo do usuário** | Corrigir o busy loop para uso normal de CPU |

**Dores identificadas:**
- Falta de otimização para ambientes virtualizados/containerizados (WSL2)
- Potencial race condition ou polling indefinido no socket acceptance

**Satisfação:** O usuário reconhece que a funcionalidade (Telegram bot) continua operando — o bug não causa falha funcional, mas sim ineficiência.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa:

| Issue | Criação | Atualização | Comentários | Link |
|-------|---------|-------------|-------------|------|
| #870 | 2026-04-25 | 2026-04-26 | 1 | [GitHub #870](https://github.com/nullclaw/nullclaw/issues/870) |

**Análise:** A issue #870, criada há 2 dias, ainda aguarda triagem ou resposta da equipe core. Com apenas 1 comentário, parece haver um delay na primeira resposta. Este bug de CPU alto deve ser priorizado para:

1. **Confirmar o comportamento** — coletar mais dados (strace, profiler)
2. **Identificar root cause** — `accept4` em WSL2 pode ter comportamento diferente
3. **Propor workaround** — instruir usuários a desabilitar ou usar fallback
4. **Atribuir milestone** — considerar para hotfix ou próxima release

**Recomendação:** A equipe NullClaw deve engajar esta issue rapidamente, dado o impacto de 100% CPU e a comunidade ativa reportando.

---

## Métricas Resumidas (24h)

| Categoria | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Bugs críticos | 1 |

**Saúde geral:** 🟡 Moderada — baixa atividade com um bug reportado pendente.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-04-27
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** neste período. De um lado, projetos como **NanoBot, CoPaw e ZeroClaw** demonstram alta intensidade de desenvolvimento com volumes excepcionais de atividade (100+ PRs/issues atualizados em 24h), indicando comunidades ativas e ciclos de release frequentes. Do outro lado, **NullClaw e Hermes Agent** apresentam atividade mínima, sugerindo fases de manutenção ou possível abandono. A característica mais marcante é a **prevalência de bugs relacionados a providers** (Ollama, DeepSeek, OpenAI) e **integrações com canais de mensagens** (Matrix, Slack, Telegram, WeChat) — indicando que a interoperabilidade com infraestrutura existente permanece como o principal desafio técnico do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Atualizados | PRs Merged | Releases | Bugs Críticos | Avaliação de Saúde |
|---------|---------------------|-----------------|------------|----------|--------------|-------------------|
| **NullClaw** | 1 | 0 | 0 | 0 | 1 | 🟡 Moderada |
| **NanoBot** | 6 | 123 | 21 | 0 | 2 | 🟢 Saudável |
| **Hermes Agent** | 0 | 1 | 0 | 0 | 0 | 🟡 Baixa |
| **PicoClaw** | 5 | 10 | 1 | 1 nightly | 0 | 🟢 Boa |
| **IronClaw** | 5 | 13 | 2 | 0 | 3 | 🟡 Boa (com regressões CI) |
| **CoPaw** | 11 | 6 | 0 | 0 | 4 | 🔴 Crítica (73% bugs) |
| **ZeroClaw** | 50 | 43 | 3 | 0 | 7+ | 🟢 Muito Ativa |

**Observação:** Os volumes de atividade do ZeroClaw (50 issues + 43 PRs) e NanoBot (123 PRs) são excepcionais para projetos open source, sugerindo equipes dedicadas ou comunidades altamente engajadas.

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Atividade

O **NanoBot (HKUDS)** destaca-se como o projeto com maior throughput de desenvolvimento, com **123 PRs atualizados e 21 merges em 24h** — números que superam significativamente todos os demais projetos analisados.

**Vantagens competitivas observadas:**

| Dimensão | NanoBot | Diferencial |
|----------|---------|-------------|
| **Multi-canal** | Slack, Web, Telegram, WeCom | Suporte nativo a threading e delivery proativo |
| **Multi-agent** | Mailbox channel, LongTaskTool | Arquitetura de orquestração emergente |
| **Providers** | DeepSeek, Kimi, OpenAI | Suporte a modelos reasoning (R1, K2.5) |
| **UX** | WebUI com SSE streaming, choices interativas | Experiência web completa sem dependência de CLI |
| **Velocidade** | 21 merges/dia | Ciclo de review eficiente |

### Projetos com Menor Presença

**NullClaw** apresenta risco de estagnação: bug crítico (#870, 100% CPU) aberto há 2 dias sem resposta da equipe. **Hermes Agent** tem PR #11805 (Web3 MCP) há 9 dias sem revisão — padrão que desmotiva contribuidores.

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em **três desafios técnicos prioritários:**

### 4.1 Compatibilidade com Providers de IA

| Projeto | Problema Reportado |
|---------|-------------------|
| **ZeroClaw** | Ollama envia `tool_count=0` — native tool calling quebrado |
| **CoPaw** | DeepSeek thinking mode causa `MODEL_EXECUTION_FAILED` |
| **NanoBot** | AsyncOpenAI client hang de 600s sem timeout configurável |
| **IronClaw** | 3 canary checks falhando (openai-compatible, anthropic, oauth) |
| **PicoClaw** | Codex OAuth retorna respostas vazias |

**Conclusão:** A abstração de providers é o componente mais frágil. Cada provider (Ollama, DeepSeek, OpenAI, Anthropic) tem peculiaridades de API que causam regressões frequentes.

### 4.2 Integração com Canais de Mensagens

| Canal | Projetos Afetados | Problema |
|-------|------------------|----------|
| **Matrix** | ZeroClaw, IronClaw, CoPaw | E2EE quebrado, não recebe mensagens, reescrita em curso |
| **WeChat** | CoPaw, NanoBot (WeCom) | Trunca mensagens, upload de mídia falha |
| **Slack** | NanoBot | Preservação de thread context |
| **QQ** | CoPaw | Tipo de áudio errado, sem STT |

### 4.3 Estabilidade de Sessão e Contexto

| Projeto | Issue |
|---------|-------|
| **CoPaw** | Histórico some忽然, multi-tab routing broken, pause button ineficiente |
| **ZeroClaw** | `context_compression` não funciona em daemon mode |
| **NanoBot** | Session replay token budgeting corrigido recentemente |

---

## 5. Análise de Diferenciação

### 5.1 Diferenciação por Arquitetura

| Projeto | Arquitetura | Público-Alvo |
|---------|-------------|--------------|
| **NanoBot** | Plugins multi-canal + multi-agent orchestration | Desenvolvedores que precisam de integração extensiva |
| **IronClaw** | Sandbox isolado + capabilities security | Usuários enterprise com requisitos de isolamento |
| **ZeroClaw** | Rust core + TOML config + Matrix-first | Operadores que priorizam performance e automação |
| **PicoClaw** | Web dashboard + Tauri desktop | Usuários finais que preferem GUI |
| **CoPaw** | Multi-provider + Docker-first | Equipes com infraestrutura heterogênea |
| **Hermes Agent** | Optional-skills bundle + MCP stdio | Usuários que querem extensibilidade modular |
| **NullClaw** | Minimalista (gateway + Telegram) | Casos de uso específicos e легковесные |

### 5.2 Diferenciação por Estratégia de Features

| Estratégia | Projetos | Exemplo |
|------------|----------|---------|
| **Feature-rich velocity** | NanoBot, ZeroClaw | Lançam funcionalidades rapidamente |
| **Estabilidade first** | IronClaw, PicoClaw | Priorizam qualidade antes de기능 expansion |
| **Modularidade opcional** | Hermes Agent | Core leve + optional-skills bundles |
| **Minimalismo** | NullClaw | Foco restrito a gateway Telegram |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Expansão Rápida

| Projeto | Indicadores de Crescimento |
|---------|---------------------------|
| **NanoBot** | 8 comentários na issue #3376 (failover), 123 PRs/dia |
| **CoPaw** | 4 first-time contributors em 24h, 73% bugs (indica muito teste) |
| **ZeroClaw** | 93 items (issues+PRs) atualizados em 24h, múltiplos contribuidores |

### 6.2 Projetos em Consolidação

| Projeto | Indicadores de Maturidade |
|---------|--------------------------|
| **PicoClaw** | Nightly build automatizado, 1 PR merged, foco em estabilidade |
| **IronClaw** | Merge de upstream 0.26.0, refactoring de runtime authority |

### 6.3 Projetos com Risco de Estagnação

| Projeto | Sinais de Alerta |
|---------|-----------------|
| **NullClaw** | Bug crítico sem resposta há 2 dias, 0 PRs, 0 releases |
| **Hermes Agent** | PR aberto há 9 dias com 0 reações, sem roadmap claro |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Multi-Agent Orchestration Emerging**
- NanoBot: Mailbox channel para comunicação inter-agentes via arquivo
- NanoBot: LongTaskTool para meta-ReAct loop
- IronClaw: Runtime authority refactoring
- **Sinal:** A comunidade está evoluindo de agentes isolados para sistemas de múltiplos agentes coordenados

**2. Provider Resilience como Necessidade**
- NanoBot issue #3376: 8 comentários pedindo failover automático
- NanoBot issue #3455: timeout de 600s expõe risco operacional
- ZeroClaw: 4+ issues críticas sobre Ollama
- **Sinal:** Usuários finais não aceitam mais dependência de provider único — failover cross-provider é exigência

**3. Web3 Integration como Nova Fronteira**
- Hermes Agent PR #11805: Bundle MCP para Ethereum + Solana
- **Sinal:** Agentes AI começam a integrar capacidades blockchain via MCP stdio

**4. Desktop Modernization**
- CoPaw PR #3813: Tauri 2.x substituindo Electron
- PicoClaw: App desktop Tauri com serial tool cross-platform
- **Sinal:** Electron está sendo abandonado em favor de Tauri por performance e footprint

**5. Platform-Specific Challenges Persistem**
- ZeroClaw: setup.bat tem bugs no Windows
- NullClaw: accept4 busy loop no WSL2
- PicoClaw: Raspberry Pi binary download issue
- **Sinal:** Compatibilidade cross-platform continua sendo desafio técnico significativo

**6. Database Portability Demand**
- IronClaw issue #2965: Aurora DSQL como alternativa a Pinecone
- CoPaw: Vector model config não persiste em Docker
- **Sinal:** Usuários buscam alternativas serverless e pay-per-usage para storage

### 7.2 Recomendações por Perfil

| Perfil | Recomendação | Projetos |
|--------|-------------|----------|
| **Desenvolvedor buscando contribuição** | Priorize PRs de first-time contributors (CoPaw, NanoBot) | CoPaw, NanoBot |
| **Empresa avaliando produto** | Foque em projetos com canary checks ativos e histórico de releases | IronClaw, PicoClaw |
| **Usuário final wanting GUI** | PicoClaw oferece melhor experiência web/desktop | PicoClaw |
| **Power user com Ollama local** | Evite ZeroClaw até estabilidade de provider resolver | NanoBot, IronClaw |
| **Pesquisador Web3** | Acompanhe Hermes Agent PR #11805 | Hermes Agent |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-04-27 apresenta **saúde desigual**: enquanto NanoBot, ZeroClaw e CoPaw demonstram comunidades vibrantes com alta cadência de desenvolvimento, projetos como NullClaw e Hermes Agent enfrentam riscos de estagnação. O principal desafio técnico compartilhado é a **abstração confiável de providers de IA**, com bugs críticos afetando Ollama, DeepSeek e OpenAI em múltiplos projetos simultaneamente. A tendência mais significativa é a **emergência de arquiteturas multi-agent**, evidenciada por features como Mailbox channel e LongTaskTool no NanoBot. Para tomadores de decisão, **NanoBot e IronClaw** representam as opções mais maduras para avaliação, enquanto **CoPaw e ZeroClaw** são os mais adequados para desenvolvedores que desejam contribuir ativamente.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot Project Report — 2026-04-27

## 1. 🌅 Panorama do Dia

O projeto NanoBot apresenta altíssima atividade nas últimas 24h com **123 PRs atualizados**, indicando uma sprint intensa de desenvolvimento. A base de código está em plena maturação com foco em **estabilidade** (múltiplos bugs críticos corrigidos), **multi-agent** (novos plugins e ferramentas) e **qualidade de渠道/UX** (WebUI e Slack). Não houve releases formais, mas 21 PRs foram mergeados/fechados, demonstrando fluxo de merge saudável. O volume de issues (6) permanece controlado, com apenas 1 fechada.

---

## 2. 🚀 Lançamentos

**Nenhuma release oficial nas últimas 24h.**

> 📌 O último release stable permanece `0.1.5 post` (referenciado na issue #3435).

---

## 3. 💻 Progresso do Projeto

### PRs Merged/Closed (21 dos 123 atualizados)

| # | PR | Resumo | Escopo |
|---|-----|--------|--------|
| [#3463](https://github.com/HKUDS/nanobot/pull/3463) | `fix(agent): expose session timestamps in model context` | Corrige gap de contexto: timestamps de sessões agora são expostos no replay histórico para o modelo. | `agent`, `session` |
| [#3462](https://github.com/HKUDS/nanobot/pull/3462) | `fix(slack): preserve thread context for proactive replies` | Nanobot agora se comporta como participante real em threads Slack — preserva metadata, suporta `message()` tool e deliveries proativas via cron. | `channels/slack` |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | `feat(skills): add create-instance + webui remote backend` | Habilita criação de instâncias Telegram via conversa + suporte GitHub Pages para WebUI com backend remoto autenticado. | `skills`, `webui` |
| [#3454](https://github.com/HKUDS/nanobot/pull/3454) | `feat(webui): add ask-user choices and model settings` | Renderiza `ask_user` como cards de escolha no WebUI; página dedicada para troca de provider/model. | `webui` |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | `fix: session replay token budgeting + DeepSeek content` | **Crítico** — corrige falhas DeepSeek por payloads não-string + replay com awareness de token + caps em crescimento de arquivo de sessão. | `session`, `providers` |
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) | `feat(webui): render video media attachments` | Videos do bot agora renderizam com `<video controls>`; URLs assinadas protegem filesystem paths. | `webui` |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) | `feat(web): add web chat channel with SSE streaming` | Novo canal web com streaming SSE, markdown progressivo e UI completa — zero mudanças no core. | `channels/web` |
| [#1148](https://github.com/HKUDS/nanobot/pull/1148) | `fix: improve agent prompt for user confirmation handling` | Agent executa ação confirmada imediatamente (inclui "好的", "yes", "ok" etc.) sem re-análise. | `prompting` |
| [#410](https://github.com/HKUDS/nanobot/pull/410) | `fix: preserve reasoning_content and tool_calls in history` | Corrige falhas em multi-turn com modelos reasoning (Kimi K2.5, DeepSeek-R1, etc.). | `session`, `providers` |

**✅ Destaque:** O ciclo de regressões críticas em session replay (#3427, #410) e threading Slack (#3462) foi completado com sucesso.

---

## 4. 🔥 Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Tipo | Título | Comentários | 👍 | Sinal |
|---|------|--------|-------------|----|----|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | `enhancement` | **支持模型异常自动切换（Provider / Model Failover）** | 8 | 1 | ⚡ Alta demanda — request de failover cross-provider |
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | `bug` | wecom渠道的媒体文件返回消息失败 | 1 | 0 | Canal WeCom problemático |
| [#3464](https://github.com/HKUDS/nanobot/issues/3464) | `bug` | Subagent announces route to channel session, not thread | 0 | 0 | Issue duplicada ao PR #3465 em resolution |

### PRs com maior potencial estratégico

| # | Título | Relevância |
|---|--------|------------|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | `feat(long-task): add LongTaskTool for multi-step agent tasks` | Meta-ReAct loop para tarefas longas — impacta arquitetura de agentes |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | `feat: multi-agent mailbox channel plugin` | Comunicação inter-agentes via filesystem (anti-loop com TTL) — arquitetura nova |
| [#3457](https://github.com/HKUDS/nanobot/pull/3457) | `feat(skills): add create-instance built-in skill` | Permite criar bots via conversa — UX inovadora |

### Análise de demandas comunitárias

- **Failover multi-provider** (#3376, 8 comentários) é a request mais discutida. Usuários configuram múltiplos providers mas nanobot não faz failover — causa interrupções com 429, timeouts e 5xx.
- **Configuração per-channel** (#3452) deseja granularidade em `sendProgress`/`sendToolHints` — feedback de UX multi-canal.
- **Timeout hang** (#3455) expõe risco operacional: requests podem bloquear até 10 min sem timeout configurado.

---

## 5. 🐛 Bugs e Estabilidade

### Bugs Reportados Hoje (5 abertos, 1 fechado)

| # | Severidade | Título | Status | Impacto |
|---|-----------|--------|--------|---------|
| [#3443](https://github.com/HKUDS/nanobot/issues/3443) | 🔴 Alta | `reasoning` field leaks into user content (non-streaming) | ✅ CLOSED | Vazamento de CoT para usuários — **RESOLVIDO** |
| [#3455](https://github.com/HKUDS/nanobot/issues/3455) | 🔴 Alta | AsyncOpenAI client hangs up to 600s (no timeout) | OPEN | Bloqueio de loop por 10min em contexto grande |
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | 🟡 Média | WeCom media file upload fails | OPEN | Canal WeCom: attachments retornam `[file upload failed]` |
| [#3464](https://github.com/HKUDS/nanobot/issues/3464) | 🟡 Média | Subagent routing to wrong thread session | OPEN | Anúncios vão para canal-level em vez de thread (Slack) |
| [#3331](https://github.com/HKUDS/nanobot/pull/3331) | 🟡 Média | WeCom WebSocket client init fails (TypeError) | OPEN (PR) | Canal WeCom não inicia — PR pendente de merge |

### Análise de estabilidade

- **✅ Resolvido:** Bug de vazamento de reasoning field (#3443) — regression crítica.
- **🔴 Atención:** Issue #3455 indica technical debt crítico no `AsyncOpenAI` provider — timeout hardcoded de 600s precisa ser exposto como configuração.
- **⚠️ WeCom instável:** Canal tem 2 bugs ativos simultâneos (#3435, #3331).

---

## 6. ✨ Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Tipo | Título | Viabilidade |
|---|------|--------|------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | enhancement | **Provider/Model Failover automático** | Complexa — requer arquitetura de retry cross-provider |
| [#3452](https://github.com/HKUDS/nanobot/issues/3452) | enhancement | `sendProgress`/`sendToolHints` por canal | Média — extensão de schema de config |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | enhancement | CLI `provider logout` command | Média — segue padrão login existente |

### Features em desenvolvimento (PRs abertos)

```text
⚡ Arquitetura multi-agent emergindo:
  ├── #3460 — LongTaskTool (meta-ReAct para tarefas longas)
  ├── #3461 — Mailbox channel (comunicação inter-agentes via arquivo)
  └── #3457 — create-instance skill (auto-provisioning via conversa)
```

### Sinais de roadmap

1. **Multi-agent maturity:** Mailbox channel + LongTaskTool indicam direção clara para orchestration de agentes.
2. **Resiliência operacional:** Falta de failover cross-provider (#3376) é gap conhecido — altamente demandado.
3. **UX/WebUI:** Área ativa com streaming SSE (#2871), choices interativas (#3454), settings focados (#3454).

---

## 7. 📣 Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Fonte | Severidade |
|-----|-------|-----------|
| **Interrupção por timeout/429 em provider único** | #3376 (8 comentários) | 🔴 Alta |
| **Bloqueio de 10 min em contexto grande** | #3455 | 🔴 Alta |
| **Vazamento de CoT reasoning para usuários** | #3443 (já corrigido) | 🔴 Alta |
| **WeCom não envia mídia** | #3435 | 🟡 Média |
| **Progress/hints global demais** | #3452 | 🟡 Média |

### Cenários de uso emergentes

- **Multi-turn com modelos reasoning** (Kimi K2.5, DeepSeek-R1) — agora funciona após #410 e #3427.
- **Threads Slack com cron proativo** — funcionando após #3462.
- **Web chat com SSE streaming** — novo canal habilitado após #2871.
- **Criação de instâncias via conversa** — feature inovadora em #3456/#3457.

### Satisfação geral

| Indicador | Status |
|-----------|--------|
| Volume de bugs resolvidos | ✅ Alta — 2 bugs críticos fechados |
| Fluxo de merge | ✅ Sadio — 21 PRs mergeados |
| Engajamento comunitário | ✅ Crescente — 8 comentários na issue #3376 |
| Débitos críticos abertos | ⚠️ 3 issues alta severidade ativas |

---

## 8. 📋 Backlog que Merece Atenção

### Issues sem resposta há >3 dias

| # | Título | Idade | Prioridade |
|---|--------|-------|------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover | 5 dias | 🔴 Crítica |
| [#3331](https://github.com/HKUDS/nanobot/pull/3331) | WeCom WebSocket TypeError | 7 dias | 🟡 Alta |

### PRs há muito tempo em review

| # | Título | Idade | Status |
|---|--------|-------|--------|
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | CLI provider logout | 26 dias | OPEN |
| [#2710](https://github.com/HKUDS/nanobot/pull/2710) | Qwen OAuth provider | 26 dias | OPEN |

### Recomendação

> ⚠️ **#3376 (Failover)** é issue mais comentada do período e representa o maior gap de resiliência. Mesmo que implementação seja complexa, um ACK da equipe orientaria a comunidade. Similarmente, **#2727** e **#2710** (~26 dias sem resposta) merecem triagem para não desmotivar contribuidores.

---

## 📊 Health Score — 2026-04-27

| Métrica | Valor | Tendência |
|---------|-------|----------|
| PRs atualizados/24h | 123 | 📈 Muito alta |
| PRs mergeados/24h | 21 | 📈 Alta |
| Issues abertas/24h | 5 | ➡️ Normal |
| Bugs críticos abertos | 2 | ⚠️ Atenção |
| Features em development | 7+ | 📈 Forte pipeline |
| Releases/24h | 0 | ➡️ Nenhuma |

**Veredicto: 🟢 Projeto saudável com pipeline intenso. Foco em estabilizar WeCom e abordar timeout provider (#3455) para evitar incidentes operacionais.**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório Diário do Projeto Hermes Agent

> **⚠️ Limitações dos Dados**: Este relatório foi gerado com base exclusivamente no PR #11805 disponível. Não há dados suficientes sobre atividade geral do dia, outros PRs, issues, bugs, feedback de usuários ou discussões comunitárias. Um relatório completo exigiria acesso à timeline completa do projeto (issues, PRs merged, comentários, reações, etc.).

---

## 1. Panorama do Dia

O projeto **Hermes Agent** apresenta baixa atividade documentada no período analisado. O único registro relevante é o **PR #11805** (aberto em 17/04, atualizado em 26/04), que propõe a adição de um bundle opcional de skills MCP para Web3. Não há evidências de releases, hotfixes ou atividade significativa de comunidade no período, sugerindo uma fase de desenvolvimento tranquilo ou possível subnotificação de atividades.

---

## 2. Lançamentos

**Nenhum release identificado** no período analisado. O PR #11805 ainda está aberto (`[OPEN]`) e não foi merged.

---

## 3. Progresso do Projeto

### PRs Abertos/Em Andamento

| # | Título | Tipo | Tags | Status | Link |
|---|--------|------|------|--------|------|
| **#11805** | `feat(optional-skills): add web3-chain-tools MCP stdio bundle (EVM + Solana)` | Feature | `type/feature`, `tool/mcp`, `P3` | **OPEN** | [🔗](https://github.com/NousResearch/hermes-agent/pull/11805) |

**Análise do PR #11805:**
- **Autor:** `georgex8001`
- **Criado:** 2026-04-17 | **Atualizado:** 2026-04-26
- **Reações:** 👍 0 | **Comentários:** undefined (indisponível)
- **Resumo:** Introduce um bundle opcional `optional-skills/mcp/web3-chain-tools` que shipment um **servidor MCP stdio** com suporte a:
  - **Ethereum** via `web3.py`
  - **Solana** via `solana-py`
  - Documentação e testes inclusos
  - Integração com Hermes via `mcp_servers` em `~/.hermes/config.yaml`

**Impacto:** Permite que o Hermes Agent interaja com blockchains EVM-compatible e Solana através de uma interface MCP padronizada, expandindo capacidades Web3.

---

## 4. Temas Quentes da Comunidade

**Sem dados disponíveis** — o PR #11805 não possui comentários ou reações registrados publicamente. A comunidade não demonstrou engajamento visível (0 👍) nesta feature.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado** no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Destaque: Suporte Web3 (EVM + Solana)

O PR #11805 indica uma direção de **expansão para integrações blockchain**, sugerindo que:

- **Alta demanda potencial**: Ferramentas Web3 são cada vez mais requisitadas em agentes AI
- **Arquitetura modular**: O Hermes está adotando uma estratégia de "optional-skills" para manter o core leve
- **Padrão MCP**: A escolha por stdio MCP server demonstra alinhamento com o protocolo de ferramentas do projeto

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback registrado** — o PR não possui comentários e não há issues abertas no período analisado.

---

## 8. Backlog que Merece Atenção

### PR sem Resposta Necessária

| # | Título | Tempo Aberto | Prioridade | Link |
|---|--------|-------------|------------|------|
| **#11805** | `feat(optional-skills): add web3-chain-tools MCP stdio bundle` | ~9 dias (17/04 → 26/04) | **P3** | [🔗](https://github.com/NousResearch/hermes-agent/pull/11805) |

**Recomendação:** O PR está aberto há ~9 dias com **0 reações e comentários indefinidos**. Recomenda-se:

1. **Revisão ativa** para evitar estagnação
2. **Solicitar feedback** ao autor `georgex8001`
3. **Avaliar P3 → P2** se a feature Web3 for estratégica para o roadmap

---

## Métricas de Saúde do Projeto (Período Analisado)

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs abertos | 1 | 🟡 Normal |
| PRs merged | 0 | 🟡 Sem atividade |
| Releases | 0 | 🔴 Nenhum |
| Bugs reportados | 0 | 🟢 Positivo |
| Issues abertas | 0 | 🟢 Positivo |
| Engajamento (reações) | 0 | 🔴 Baixo |
| Tempo médio de resposta | N/A | ⚪ Sem dados |

---

## Conclusão

O projeto **Hermes Agent** apresenta **baixa atividade documentada** no período. O único destaque é o PR #11805, que propõe suporte Web3 via MCP — uma feature potencialmente valiosa, mas que carece de revisão e engajamento da comunidade. **Não há evidências de problemas de estabilidade ou lançamentos iminentes.**

> **Nota**: Para um relatório completo, são necessários dados de: issues abertas/fechadas, PRs merged, releases, Issues ativas, reações/comentários em issues e discoções comunitárias.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data:** 2026-04-27 | **Mantenedor:** Sipeed | **Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. Panorama do Dia

O PicoClaw mantém alta atividade de desenvolvimento no dia de hoje, com **10 PRs atualizados** e **6 issues em movimento** nas últimas 24h. O projeto encontra-se em fase de consolidação da versão v0.2.7, com um nightly build liberado (v0.2.7-nightly.20260426.77be169d) refletindo múltiplas melhorias em andamento. A comunidade demonstra engajamento ativo em topics que vão desde suporte a hardware (Raspberry Pi, serial) até otimizações de providers de IA, com 1 PR merged (#2672) indicando progresso tangível no suporte a tool calls estruturados.

---

## 2. Lançamentos

### Release Ativa

| Build | Versão | Data |
|-------|--------|------|
| 🌙 Nightly | v0.2.7-nightly.20260426.77be169d | 2026-04-26 |

**Release notes:** Este nightly build automatizado ainda não constitui uma release tagged. O changelog completo está disponível em: [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main).

**Observação:** Usuários que atualizaram para v0.2.7 reportaram comportamento inesperado com respostas "Think"/"reasoning" aparecendo. O [Issue #2628](https://github.com/sipeed/picoclaw/issues/2628) foi fechado, indicando que o problema foi endereçado.

---

## 3. Progresso do Projeto

### PR Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#2672](https://github.com/sipeed/picoclaw/pull/2672) | `feat(pico): add structured tool call support to web chat` | **Alto** — Adiciona suporte completo a `tool_calls` estruturados no chat web, preservando detalhes como blocos colapsáveis ao invés de achatar respostas |

### PRs em Desenvolvimento Ativo (9 abertas)

| PR | Título | Área | Status |
|----|--------|------|--------|
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | `fix(mcp): sanitize MCP tool schemas for Gemini` | Provider/MCP | Correção de crash HTTP 400 |
| [#2680](https://github.com/sipeed/picoclaw/pull/2680) | `refactor(pico): unify message kind handling` | Protocol | Breaking change interno |
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) | `Feat/runtime events` | Observabilidade | Infraestrutura de eventos unificada |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | `fix: enable ChatGPT OAuth` | Provider | Corrige respostas vazias no Codex |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | `Add cross-platform serial tool` | Hardware | Linux/macOS/Windows |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| #295 | [Feature: Intelligent Model Routing for Cost & Performance Optimization](https://github.com/sipeed/picoclaw/issues/295) |
|------|---------------------------------------------------|
| **Prioridade:** Medium (Roadmap) | **Comentários:** 10 | **Reações:** 0 |
| **Autor:** Zepan | **Criado:** 2026-02-16 | **Atualizado:** 2026-04-26 |

**Análise da demanda:** Proposta madura (2+ meses) para implementar **Model Routing** inteligente que distribua requests entre modelos menores e maiores conforme complexidade da tarefa. O objetivo é reduzir custos de tokens e latência. Com 10 comentários, há debate significativo sobre a arquitetura sugerida. Este é um sinal claro de que usuários avançados querem controle granular sobre custos de LLM.

### PR com Discussão Pendente

| #2676 | [[Feature] add Exa search provider](https://github.com/sipeed/picoclaw/issues/2676) |
|--------|---------------------------------------------------|
| **Tipo:** Feature request | **Comentários:** 1 | **Reações:** 0 |
| **Autor:** devjia | **Criado:** 2026-04-26 |

PR #997 tem implementação 유사 mas foi fechado. Este issue busca reabrir a discussão sobre suporte ao Exa como provedor de busca. Sinal de demanda por alternativas ao search provider padrão.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Ativos

| #1042 | [[BUG] exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042) | 🐛 **Bug** |
|--------|---------------------------------------------------|-------------|
| **Domínio:** tool | **Comentários:** 5 | **Autor:** icyfire |

**Descrição:** O método `guardCommand` do tool `exec` tem lógica simplista ao validar caminhos. Quando `restrict_to_workspace=true`, comandos como `curl -s "wttr.in/Beijing?T"` são bloqueados com `"Command blocked by safety guard (path outside working dir)"` devido a regex extraindo `../../../../Beijing?T`. **Severidade:** Média — afeta funcionalidade legítima de tools de clima/utilidade.

| #2674 | [Codex OAuth: empty assistant response when ChatGPT backend streams](https://github.com/sipeed/picoclaw/issues/2674) | 🐛 **Bug** |
|--------|---------------------------------------------------|-------------|
| **Domínio:** provider | **Comentários:** 0 | **👍:** 1 |

**Descrição:** Usuários de Codex OAuth contra `chatgpt.com/backend-api/codex` recebem respostas vazias, resultando em fallback `"The model returned an empty response"`. PR #2679 endereça a mesma raiz.

### Bug Resolvido Recentemente

| #2628 | [[BUG] v0.2.7 How to disable the "Think" "reasoning" response?](https://github.com/sipeed/picoclaw/issues/2628) | ✅ CLOSED |
|--------|---------------------------------------------------|-----------|

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| #295 | [Feature: Intelligent Model Routing](https://github.com/sipeed/picoclaw/issues/295) | 🚀 Roadmap |
|--------|---------------------------------------------------|------------|
| **Prioridade:** Medium | Rotear requests entre modelos automaticamente por complexidade/custo |

| #2676 | [add Exa search provider](https://github.com/sipeed/picoclaw/issues/2676) | 🚀 Feature |
|--------|---------------------------------------------------|------------|
| Novo provedor de busca como alternativa aos existentes |

| #2675 | [Raspberry pi and pi zero 2w support](https://github.com/sipeed/picoclaw/issues/2675) | 🚀 Feature |
|--------|---------------------------------------------------|------------|
| **Autor:** Maisie-the-cat | Expansão de suporte a hardware ARM de baixo custo |

### Features em Implementação via PRs

| #2673 | [Cross-platform serial tool](https://github.com/sipeed/picoclaw/pull/2673) | Linux/macOS/Windows |
|--------|---------------------------------------------------|----------------------|
| Tool de hardware serial integrado ao dashboard e registro |

| #2663 | [Improve config save/restart feedback](https://github.com/sipeed/picoclaw/pull/2663) | UX improvements |
|--------|---------------------------------------------------|----------------------|

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Segurança excessiva de tools** | Comandos legítimos de API (ex: `wttr.in/Beijing`) são bloqueados pela validação de path do `guardCommand` | Usuários de integrations de clima/utilidades afetados |
| **UX de configuração confusa** | Falta de feedback claro ao salvar configurações, especialmente em múltiplos canais | Baixa visibilidade de estado do sistema |
| **Instabilidade no ChatGPT OAuth** | Respostas vazias causam frustração em assinantes Plus que usam OAuth tokens | Afeta usuários premium |
| **Comportamento inesperado pós-update** | v0.2.7 trouxe "Think" responses que usuários não sabem desabilitar | Regressão perceptível |

### Sinais de Satisfação

- Issue #2674 recebeu 👍 1 (mesmo com bug reportado), indicando que a funcionalidade Codex OAuth é valorizada pela base
- PRs com boa implementação (ex: #2672) indicam que comunidade responde bem a features que preservam contexto

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta Longa

| #295 | [Feature: Intelligent Model Routing](https://github.com/sipeed/picoclaw/issues/295) | ⚠️ 70+ dias sem decisão final |
|--------|---------------------------------------------------|-------------------------------|

**Situação:** 10 comentários indicam discussão ativa, mas sem implementação ou rejected status./blocking. Risco de feature request que consome energia da comunidade sem resolução.

### PR Atrasado

| #2239 | [modify docker compose with privileged](https://github.com/sipeed/picoclaw/pull/2239) | ⚠️ 26 dias aberto |
|--------|---------------------------------------------------|-------------------------------|

**Situação:** Criado em 2026-04-01, sem comentários ou feedback. Pode precisar de revisão de impacto de segurança (execução privilegiada em Docker).

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 5 | Alta |
| PRs abertos (24h) | 9 | Alta |
| PRs merged (24h) | 1 | Neutra |
| Bugs reportados | 3 | Moderada |
| Features solicitadas | 3 | Moderada |
| Release status | Nightly | ⚠️ Sem tagged release |

---

**Próximos marcos a observar:** Merge potencial de PRs de bug critical (#2681, #2679) e resolução final do Model Routing (#295) para direcionamento do roadmap.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-27

---

## 1. Panorama do Dia

O IronClaw apresenta alta atividade de desenvolvimento em 27 de abril de 2026, com 13 pull requests atualizados e 5 issues novas nas últimas 24h. O projeto está em fase de estabilização, conforme indicam os dois PRs de merge recientes (#2964 atualizando para 0.26.0 e #2969 refatorando runtime authority). No entanto, há **3 falhas críticas nos canary checks** (provider-matrix openai-compatible, anthropic e private-oauth) que exigem atenção imediata da equipe. A comunidade demonstra interesse crescente em expansão de canais (Matrix, Prismer) e suporte a novos provedores de banco de dados. O volume elevado de updates de dependências (Dependabot com 4 PRs simultâneos) evidencia uma política ativa de manutenção de dependências.

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24h.**

O último merge significativo (#2964) traz changes from upstream 0.26.0, mas sem details sobre changelog público ainda. Este merge afetou múltiplos módulos (agent, channel, db, extensions, sandbox) indicando uma atualização de base substancial.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| # | Título | Escopo | Contribuidor |
|---|--------|--------|--------------|
| [#2964](https://github.com/nearai/ironclaw/pull/2964) | merge upstream changes from 0.26.0 | agent, channel, db, extensions, sandbox | chrismcfee |
| [#2969](https://github.com/nearai/ironclaw/pull/2969) | feat(reborn): clean up runtime authority boundaries | runtime, capabilities | serrrfirat |

**Destaques:**

- **#2969** refatora os limites de autoridade do runtime, selando reservas de recursos de processo e movendo contratos de dispatch port para `ironclaw_host_api`. Remove a dependência de produção `ironclaw_capabilities -> ironclaw_dispatcher`, aumentando o isolamento de segurança.
- **#2964** integra changes upstream da versão 0.26.0, unificando a base de código com melhorias em Postgres, LibSQL, MCP extensions e outros subsistemas.

### PRs Abertos com Maior Complexidade

| # | Título | Tamanho | Escopo |
|---|--------|--------|--------|
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | XL | agent, channel, db, llm, config, hooks |
| [#2684](https://github.com/nearai/ironclaw/pull/2684) | feat(signing): integrate signet-core for cryptographic tool call audit | XL | agent, channel/web, worker |
| [#1120](https://github.com/nearai/ironclaw/pull/1120) | feat(prismer): add Prismer Cloud IM WASM channel | XL | channel/wasm, docs |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Relevância

**#2965 — Aurora DSQL Support Request** (Feature Request)
- **Autor:** jousby
- **Link:** https://github.com/nearai/ironclaw/issues/2965
- **Resumo:** Solicitação para suporte a Aurora DSQL como backing database para agents, aproveitando o modelo "scale to zero" e "pay per usage" do PostgreSQL da AWS.
- **Análise:** Indica demanda por redução de custos operacionais. O usuário reconhece que Aurora DSQL não suporta pgvector, mas não precisa de dados vetoriais para seu caso de uso. Pode sinalizar uma tendência de migração para soluções serverless.

**#2963 — Docker Hub Image Missing**
- **Autor:** magnusviri
- **Link:** https://github.com/nearai/ironclaw/issues/2963
- **Resumo:** A imagem `nearai/ironclaw:latest` não existe no Docker Hub, quebrando a documentação oficial de instalação.
- **Análise:** Problema de DX (developer experience) crítico que bloqueia novos usuários. Documentação defasada pode impactar taxa de conversão de interessados.

**#1941 — MCP Server Name Allowlist**
- **Link:** https://github.com/nearai/ironclaw/pull/1941
- **Resumo:** Migração de blocklist para allowlist na validação de nomes de servidores MCP, prevenindo injection attacks via metacharacters.
- **Análise:** Melhoria de segurança importante, seguindo práticas de hardening.

---

## 5. Bugs e Estabilidade

### Falhas de CI/Canary (Prioridade Alta)

| # | Título | Provider/Lane | Severidade |
|---|--------|---------------|------------|
| [#2968](https://github.com/nearai/ironclaw/issues/2968) | Live canary failed: provider-matrix openai-compatible | openai-compatible | **Crítica** |
| [#2967](https://github.com/nearai/ironclaw/issues/2967) | Live canary failed: provider-matrix anthropic | anthropic | **Crítica** |
| [#2966](https://github.com/nearai/ironclaw/issues/2966) | Live canary failed: private-oauth | private-oauth | **Crítica** |

**Todas as falhas compartilham o mesmo commit raiz:** `7404e7d64796009671d42e789240865dcabb4d60` e action run `24946959927`. Isso indica uma regressão introduzida recentemente que afeta múltiplos provedores de LLM e o lane de OAuth privado. A equipe deve priorizar rollback ou hotfix.

### Issues Reportadas

| # | Título | Severidade | Tipo |
|---|--------|------------|------|
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub image missing | **Alta** | Bug/DX |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

**#2965 — Aurora DSQL como Vector DB Alternativo**
- Proposta: Split em core + vector DB abstractions
- Permite usar Aurora DSQL sem pgvector (custo otimizado)
- Indica trend: **modularização de storage backends**

**#2019 — Native Matrix Channel** (PR em progresso, aberto há ~23 dias)
- Suporte completo a Matrix SDK com event loop
- End-to-end encryption opcional
- Persistência de thread IDs entre restarts
- **Sinais:** Canal Telegram-like é priorizado pela equipe

**#1120 — Prismer Cloud IM WASM Channel** (PR aberto há ~45 dias)
- Integração com messaging Prismer Cloud
- Dual mode: webhook + polling
- **Sinais:** Expansão de canais IM continua ativa

**#2684 — Cryptographic Tool Call Audit**
- Integração com signet-core
- Assinatura Ed25519 em todas tool calls
- Hash-chained audit log em JSONL
- **Sinais:** Compliance e audit trail sendo endereçados

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Impacto |
|-----|----------|----------|
| **Custo operacional de agents** | #2965: busca por Aurora DSQL com scale-to-zero | Medio-Alto |
| **DX de instalação quebrado** | #2963: Docker Hub image não existe | **Alto** |
| **Configuração self-hosted instável** | #2961: openai_compatible perde settings após restart | Medio |
| **MCP OAuth discovery quebrado** | #2960: stdio transports falham com OAuth | Medio |

### Cenários de Uso Emergentes

1. **Self-hosted vLLM/LiteLLM:** Usuários querem controle total sobre modelos sem API keys de terceiros (#2961)
2. **Database portability:** Alternativas a Pinecone/Supabase para vector storage (#2965)
3. **Enterprise messaging:** Integração com plataformas IM corporativas (#1120, #2019)

---

## 8. Backlog que Merece Atenção

### PRs Sem Atividade Recente ou em Atraso

| # | Título | Criado | Última Atualização | Status |
|---|--------|--------|-------------------|--------|
| [#1120](https://github.com/nearai/ironclaw/pull/1120) | feat(prismer): add Prismer Cloud IM WASM channel | 2026-03-13 | 2026-04-26 | Open (44 dias) |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | feat: native Matrix channel | 2026-04-04 | 2026-04-25 | Open (23 dias) |
| [#2593](https://github.com/nearai/ironclaw/pull/2593) | chore(deps): bump actions group | 2026-04-17 | 2026-04-26 | Open (10 dias) |

### Recomendações

1. **CRÍTICO:** Investigar e corrigir falhas canary (#2966-#2968) — mesmo commit afetando 3 lanes
2. **ALTA:** Publicar imagem Docker Hub ou atualizar documentação para usar GHCR (#2963)
3. **MÉDIA:** Priorizar review do PR #1120 (Prismer Cloud) — aberto há 44 dias
4. **MÉDIA:** Avaliar viabilidade do split core/vector DB (#2965) — pode abrir caminho para Aurora DSQL

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues abertas (24h) | 5 | 🟢 Normal |
| PRs abertos (24h) | 11 | 🟢 Alta atividade |
| PRs merged (24h) | 2 | 🟡 Bom ritmo |
| Releases (24h) | 0 | 🟡 Sem releases |
| Bugs críticos ativos | 3 | 🔴 Requer ação |
| PRs dependabot | 4 | 🟢 Mantido |

---

*Relatório gerado automaticamente com base em dados do GitHub de nearai/ironclaw em 2026-04-27.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-04-27

---

## 1. Panorama do dia

O CoPaw apresenta **alta atividade comunitária** no período analisado, com 17 atualizações total (11 issues + 6 PRs) em 24 horas. Nenhum commit foi merged hoje — todas as 6 PRs estão em estado de revisão. A densidade de bugs é elevada (8 issues com tags `[bug]`), abrangendo problemas de estabilidade em múltiplos canais (Matrix, XiaoYi, WeChat, QQ, Console) e funcionalidades críticas (histórico de sessão, pause button, multi-tab). Notably, 4 das 6 PRs abertas envolvem *first-time contributors*, sinalizando crescimento da base colaborativa. **Não houve release nas últimas 24h.**

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

| Release | Data | Destaques |
|---------|------|-----------|
| — | — | Sem novas versões |

> *Histórico recente indica releases como `1.1.4.post1` e `1.1.4.post2` (referenciadas nos issues), mas nenhuma tag nova para 2026-04-27.*

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada no período.**

| PR | Status | Contribuidor | Impacto |
|----|--------|--------------|---------|
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | OPEN | suntp (first-time) | Reforça fallback de context compaction — previne deleção de histórico ativo quando LLM summarization falha |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | OPEN | moarychan (first-time) | Adiciona suporte a **GitHub Copilot como provider de modelo** |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | OPEN | bxy3045134656 (first-time) | Corrige tipo de mensagem de áudio no QQ + adiciona STT automático |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | OPEN | joeyhacker | Corrige protocolo A2A do XiaoYi (dual WebSocket, PING/PONG, message handling) |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | OPEN | youngchan1988 (first-time) | Adiciona suporte a **Tauri 2.x desktop app** (substitui Electron) |
| [#3733](https://github.com/agentscope-ai/QwenPaw/pull/3733) | OPEN | hlgone | Adiciona logging `send_text ok` no WeChat para visibilidade operacional |

**Sinal de saúde:** 4 de 6 PRs abertas são de *first-time contributors*, indicando on boarding saudável da comunidade.

---

## 4. Temas Quentes da Comunidade

| Issue | Tipo | Comentários | Reações | Tema Central |
|-------|------|-------------|---------|--------------|
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | question | 4 | 0 | **Persistência de configuração de vetor** — configuração de modelo vetorial reseta após reinício do container (env: Docker, Ollama, bge-m3) |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | bug | 2 | 0 | **Histórico de sessão desaparece** — conversa忽然 limpa, mas título permanece no sidebar |
| [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) | bug | 2 | 0 | **Multi-tab quebra continuidade** — mensagens vão para sessão errada após alternar abas |
| [#3851](https://github.com/agentscope-ai/QwenPaw/issues/3851) | bug | 1 | 0 | **MODEL_EXECUTION_FAILED com DeepSeek thinking** — `reasoning_content` precisa ser preservado na sequência |

**Análise:** O issue #3817 lidera em engajamento (4 comentários), indicando que a **persistência de configuração em Docker é uma dor recorrente** para usuários. A comunidade demonstra interesse em robustez de multi-sessão e multi-tab.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (afetam funcionalidades core)

| # | Bug | Severidade | Canal/Área | Status |
|---|-----|------------|------------|--------|
| [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | **Pause button inefetivo** — backend continua executando após click | 🔴 Alta | Web UI | OPEN |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | **Histórico de sessão desaparece** — conversa perde contexto忽然 | 🔴 Alta | Core | OPEN |
| [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) | **Multi-tab routing broken** — mensagens vão para sessão errada | 🔴 Alta | Core | OPEN |
| [#3847](https://github.com/agentscope-ai/QwenPaw/issues/3847) | **`qwenpaw mission` crasha com 405 + TypeError** | 🔴 Alta | CLI | OPEN |

### 🟡 Moderados (afetam canais específicos)

| # | Bug | Severidade | Canal | Status |
|---|-----|------------|-------|--------|
| [#3849](https://github.com/agentscope-ai/QwenPaw/issues/3849) | Resposta do agente desaparece no console channel | 🟡 Média | Console | OPEN |
| [#3851](https://github.com/agentscope-ai/QwenPaw/issues/3851) | MODEL_EXECUTION_FAILED com DeepSeek thinking mode | 🟡 Média | DeepSeek API | OPEN |
| [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) | XiaoYi não consegue enviar replies (WebSocket issue) | 🟡 Média | XiaoYi | OPEN |
| [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) | WeChat trunca mensagens após ~10 envios | 🟡 Média | WeChat | OPEN |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | QQ audio message type wrong + sem STT | 🟡 Média | QQ | OPEN (fix em PR) |
| [#1426](https://github.com/agentscope-ai/QwenPaw/issues/1426) | Matrix channel não recebe mensagens | 🟡 Média | Matrix | CLOSED |

**Tendencia:** 8 de 11 issues são bugs — **densidade de regressions elevada**. Canais de terceiros (WeChat, QQ, XiaoYi, Matrix) acumulam problemas de compatibilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature Request | Impacto | Status |
|---|-----------------|---------|--------|
| [#3844](https://github.com/agentscope-ai/QwenPaw/issues/3844) | **Auto model listing após provider registration** — sem necessidade de registro manual de cada modelo | Alto | OPEN |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | **GitHub Copilot como provider** | Alto | PR OPEN |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Tauri 2.x desktop app** (substitui Electron) | Alto | PR OPEN |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | STT automático no QQ | Médio | PR OPEN |

**Sinal de roadmap:** Expansão de providers (GitHub Copilot) e modernização de stack (Tauri) são prioridades aceitas pela comunidade. Issue #3844 indica demanda por **automação de discovery de modelos** em providers com muitos modelos disponíveis.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Persistência de configuração falha** | Docker restart zera `agent.json` (vector model configs) | Alto — usuários perdem setup customizado |
| **Instabilidade de sessão** | Histórico some忽然, multi-tab routing broken | Alto — quebra UX em uso real |
| **Pause não funciona** | Bot continua executando após clickar "pausar" | Alto — controle de execução inútil |
| **Canais de terceiros quebrados** | Matrix não recebe, XiaoYi não envia, WeChat trunca | Alto — integração com ecossistema comprometida |
| **CLI com bug** | `qwenpaw mission` crasha | Alto — usuários não conseguem gerenciar missões |

### Cenários de uso emergentes

1. **Multi-tab como modo de trabalho**: Usuários abrem múltiplas abas para trabalhar em diferentes agentes/tarefas simultaneamente — a quebra de continuidade (issue #3852) impacta diretamente esse fluxo.
2. **Docker deployment production**: Configuração via WebUI não persiste, exigindo workarounds manuais.
3. **DeepSeek como provider**: Usuários querem usar `reasoning_content` (thinking mode) — faltacompatibilidade com o formato esperado pela API.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com baixa atenção

| # | Issue | Idade | Comentários | Prioridade |
|---|-------|-------|-------------|------------|
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Configuração de vetor reseta (question) | 3 dias | 4 (maior engajamento) | 🔴 Alta |
| [#1426](https://github.com/agentscope-ai/QwenPaw/issues/1426) | Matrix channel não recebe | ~45 dias | 2 | 🟡 Média |
| [#3844](https://github.com/agentscope-ai/QwenPaw/issues/3844) | Auto model listing | 1 dia | 1 | 🟡 Média |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | XiaoYi fix (PR) | 1 dia | — | 🟡 Média |

### Recomendação de ação

1. **Triagem urgente:** Issue #3817 (3 dias, 4 comments) precisa de resposta oficial sobre root cause de persistência Docker.
2. **Issue #1426** (Matrix) está aberta há ~45 dias — verificar se ainda é relevante ou fechar como "need info".
3. **PRs abertas:** 6 PRs sem merge — priorizar review das que resolvem bugs críticos (#3839 XiaoYi, #3845 QQ).

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 10 | 🟢 Alto |
| PRs abertas (24h) | 6 | 🟢 Alto |
| PRs merged (24h) | 0 | 🟠 Sem merges |
| Releases (24h) | 0 | 🟠 Ausente |
| Bug ratio | 8/11 (73%) | 🔴 Muito alto |
| First-time contributors (24h) | 4 | 🟢 Positivo |
| Média de idade de issues abertas | ~2 dias | 🟢 OK |

---

*Relatório gerado para: CoPaw (agentscope-ai/CoPaw) | Data: 2026-04-27*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 27 de abril de 2026

---

## 1. Panorama do dia

O projeto ZeroClaw manteve um nível de atividade intenso nas últimas 24 horas, com **50 issues e 43 PRs atualizados**. A atividade concentra-se em correções de bugs críticos — especialmente relacionados a providers (Ollama, llamacpp, DeepSeek) — e em melhorias de estabilidade. Não houve lançamentos today, indicando que o time está focado em estabilização antes de uma possível release. A comunidade demonstra engajamento saudável, com issues antigas sendo revisitadas e novas sendo criadas em ritmo acelerado.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto encontra-se em fase pré-release, com trabalho significativo em andamento (veja PRs abertos).

---

## 3. Progresso do Projeto

Os seguintes PRs foram fechados ou mergeados nas últimas 24h:

| PR | Título | Impacto |
|----|--------|---------|
| [#6134](https://github.com/zeroclaw-labs/zeroclaw/pull/6134) | Working yolo mode | Experimentação interna em modo de teste rápido |
| [#5691](https://github.com/zeroclaw-labs/zeroclaw/pull/5691) | feat(telegram): update telegram bot commands | Atualização automática dos comandos do bot Telegram, melhorando a DX |
| [#6041](https://github.com/zeroclaw-labs/zeroclaw/pull/6041) | refactor(hardware): move wizard UI from main.rs | Extração da UI do wizard de hardware para o crate `zeroclaw_hardware:wizard` — separação de responsabilidades |

**Destaques entre os PRs abertos (alta prioridade):**

- [#6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112) — **feat(matrix): clean-room rewrite on matrix-rust-sdk 0.16** — Reescrita completa da implementação Matrix eliminando dependências HTTP manuais e patches de streaming acumulados. Este é o PR mais significativo em termos de escopo e estabilidade da integração com Matrix. ([singlerider](https://github.com/singlerider))

- [#6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138) — **fix(providers): apply [providers.X] config to fallback providers** — Resolve problema onde configurações de providers individuais não eram aplicadas a fallback providers, causando comportamento inconsistente. ([armenb](https://github.com/armenb))

- [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) — **fix(agent/loop): capture reasoning_content from streaming responses** — Corrige compatibilidade com DeepSeek V4 thinking-mode, onde requisições follow-up eram rejeitadas com HTTP 400 quando faltava `reasoning_content`. ([singlerider](https://github.com/singlerider))

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web dashboard not available** (25 comentários)
> Status: CLOSED | Autor: loveholly
- Problema: Tanto a UI web quanto o app desktop Tauri mostram mensagem "Web dashboard not available. Build it with: cd web && npm ci && npm run build"
- Severidade: S1 — workflow bloqueado
- **Este issue foi fechado recentemente**, indicando que o problema pode ter sido resolvido ou está em processo de resolução. Recomenda-se monitorar regressões.

**[#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) — Matrix channel: friction tracker** (12 comentários, 2 👍)
> Status: CLOSED | Autor: singlerider
- Issue guarda-chuva rastreando múltiplos pontos de fricção na integração Matrix (v0.6.2)
- Inclui items como E2EE OTK retry loop, sincronização de estado de leitura, e problemas de re-conexão
- multiple PRs foram marcados como "Preferred" — indicando competição entre implementações

**[#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) — Provider ignores llamacpp object** (9 comentários, 2 👍)
> Status: CLOSED | Autor: hsuenaga
- Problema: `[providers.models.llamacpp]` é ignorado e valores default sempre são aplicados
- O autor nota que funcionava antes do schema version 2 — possivelmente regression introduzida por refactoring
- **Resolvido** nas últimas 24h

**[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — Incompatible with DeepSeek-V4 API format** (7 comentários, 1 👍)
> Status: OPEN | Autor: SSDGADsss
- DeepSeek-V4 e DeepSeek-V4-Flash retornam erro 400 relacionado ao thinking mode
- Severidade: S2 — comportamento degradado
- Linkado ao PR [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) que busca corrigir

---

## 5. Bugs e Estabilidade

### S1 — Workflow bloqueado (crítico)

| Issue | Título | Link |
|-------|--------|------|
| #5941 | No tool call found for function call output | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) |
| #4842 | update command downloads wrong architecture on Raspberry Pi | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) |
| #5600 | Use kimi-code provider in streaming chat call tools | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| #5459 | Ollama provider sends tool_count=0 — native tool calling broken | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) |
| #5962 | Ollama Provider call failed when tools are needed | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| #6123 | default_model issue on fresh install | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| #4827 | feat(channels): Enable auto_compact_history in channel mode | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) |

**Análise:** Problemas com providers dominam a lista S1. Há 4 issues críticas relacionadas a Ollama (tool calling quebrado), confirming um problema sistêmico na integração com Ollama. O issue #5459 menciona especificamente que `tool_count=0` é hard-coded nas chamadas API.

### S2 — Comportamento degradado

| Issue | Título | Link |
|-------|--------|------|
| #4880 | context_compression not triggered in daemon mode | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) |
| #5244 | Dashboard: Channels tab crash on v0.6.8 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) |
| #6073 | Web UI Settings config file editing cursor misalignment | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6073) |

### S3 — Problemas menores

| Issue | Título | Link |
|-------|--------|------|
| #6118 | Multiple failures in setup.bat on Windows | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6118) |
| #5360 | codex_cli tool passes unsupported `-q` flag to Codex CLI v0.118.0 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) |
| #5835 | evict cancel_tokens entries for abandoned sessions | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em progresso

| Issue | Título | Destaque |
|-------|--------|---------|
| [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) | Clean-slate rewrite of zeroclaw onboard | Reescrita do onboard de 8,534 linhas para thin schema-driven orchestrator |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | RFC: Replace TOML i18n with Mozilla Fluent | Racionalização da arquitetura de internacionalização |

### Novas solicitações

| Issue | Título | Potencial impacto |
|-------|--------|-------------------|
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Make `classify_channel_reply_intent` configurable (3 👍) | Melhorar comportamento em chats 1:1 |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | Make channel reply-intent precheck configurable | Configurabilidade de modelo/timeout |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) | Webhook endpoint support agent mode (1 👍) | Permite webhooks dispararem workflows completos |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | Add cancellation support for ACP-protocol sessions | Equivalente a `POST /api/sessions/{id}/abort` para ACP |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Propagate CancellationToken into tool execution | Permite cancelamento de tools de longa execução |

**Signal de roadmap:** A concentração de issues sobre configurabilidade (reply-intent, onboard, i18n) sugere que a equipe está priorizando melhora de DX e flexibilidade do sistema antes de novos recursos.

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas identificadas

**1. Providers locais não funcionam corretamente**
- Usuários com Ollama, llamacpp e servidores locais reportam fracasso total ou parcial
- Issue [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578): lama.cpp server causa "SEVERAL MINUTES" de delay antes de falhar
- Issue [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123): fresh install com Ollama em LXC container retorna erro imediatamente

**2. Instabilidade em plataformas específicas**
- Raspberry Pi (aarch64): binary para arquitetura errada é baixado
- Windows: `setup.bat` tem múltiplos bugs (overflow, escaping, label resolution)
- Docker (debian v0.6.8): Dashboard trava na tab Channels

**3. E2EE/Encryption em Matrix completamente quebrado**
- Issue [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878): DMs encriptadas completamente não funcionais após reset do store
- `recovery().recover()` não baixa megolm room keys do backup do servidor

### Cenários de uso emergentes

- **Integração com DeepSeek V4**: Usuários estão tentando usar o novo modelo com thinking mode, mas encontram incompatibilidades de API
- **IRC com mention-only**: PR [#5998](https://github.com/zeroclaw-labs/zeroclaw/pull/5998) adiciona opção para canais IRC responderem apenas a mentions — novo caso de uso organizacional
- **Python skills**: Documentação insuficiente para skills Python (sandbox não suporta), evidenciando gap entre capacidades implementadas e casos de uso comuns

---

## 8. Backlog que Merece Atenção

| Issue | Idade | Estado | Prioridade | Observação |
|-------|-------|--------|------------|------------|
| [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) E2EE recovery | ~30 dias | OPEN | S1 | Sem resposta há vários dias |
| [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) auto_compact_history | ~31 dias | OPEN | S1 | Problema antigo de channel mode |
| [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) context_compression | ~30 dias | OPEN | S2 | Sem aktivitas recentes |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) Webhook agent mode | ~43 dias | OPEN | enhancement | 2 comentários, feedback limitado |

**Ação recomendada:** Issues com mais de 30 dias e status

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*