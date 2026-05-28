# Resumo diário do ecossistema de agentes de IA 2026-05-29

> Issues: 2 | PRs: 6 | Projetos cobertos: 7 | Gerado em: 2026-05-28 21:51 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-29

---

## 1. Panorama do Dia

O projeto NullClaw demonstra alta atividade de desenvolvimento no período analisado, com **6 PRs atualizadas** e **2 issues fechadas** nas últimas 24h. O foco principal foi a resolução de bugs críticos relacionados ao Telegram (issues #869 e #901), ambas corrigidas pela PR #924 que permite valores numéricos nas listas `allow_from` dos canais. Além disso, houve progresso significativo em segurança (PR #907), compatibilidade POSIX (PR #878) e expansão de provedores (PR #922). O projeto mantém-se estável sem novas releases, mas com evolução contínua nas funcionalidades e correções.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24h.**

O projeto não publicou versões novas desde o período analisado. É recomendável monitorar a branch `main` para acompanhar correções recentes que podem compor uma próxima release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5) + 1 Aberta

| # | Título | Status | Contribuidor | Impacto |
|---|--------|--------|--------------|---------|
| [#924](https://github.com/nullclaw/nullclaw/pull/924) | fix(config): tolerate numeric items in channel allow-lists | ✅ CLOSED | raskevichai | **Crítico** — Resolve bugs #869 e #901 |
| [#922](https://github.com/nullclaw/nullclaw/pull/922) | feat(providers): add NEAR AI Cloud and Atlas Cloud providers | ✅ CLOSED | PierreLeGuen | Expande ecossistema de provedores |
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | Security harden webhooks, HTTP secrets, and cron shell jobs | ✅ CLOSED | racribeiro | **Alta** — Fortalecimento de segurança |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): use nanosleep on POSIX | ✅ CLOSED | vernonstinebaker | Melhora поведения thread em POSIX |
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | Fix build with zig v0.16 for win/linux | ✅ CLOSED | qxo | Compatibilidade versão Zig |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output | 🔄 OPEN | yanggf8 | Em revisão — engine de cron completa |
| [#924](https://github.com/nullclaw/nullclaw/pull/924) | fix(config): tolerate numeric items | ✅ CLOSED | raskevichai | Correção de parsing de IDs numéricos |

**Destaque técnico:** A PR #783 permanece em aberto com funcionalidades avançadas de cron (DB-backed scheduler, history, JSON CLI).

---

## 4. Temas Quentes da Comunidade

### Issues com maior relevância

| # | Título | Status | Comentários | 👍 | Prioridade |
|---|-------------|--------|-------------|-----|------------|
| [#901](https://github.com/nullclaw/nullclaw/issues/901) | `channel list` sempre mostra "not configured" para Telegram | ✅ CLOSED | 0 | 0 | **Alta** |
| [#869](https://github.com/nullclaw/nullclaw/issues/869) | Telegram channel não carrega do config.json | ✅ CLOSED | 0 | 0 | **Alta** |

**Análise:** As duas issues reportado pelo usuário NOTJuangamer10 foram duplicadas ( mesmo problema: IDs numéricos no `allow_from`), indicando que essa regressão afetou ao menos um usuário real de forma significativa. O problema foi identificado em múltiplas versões (v2026.4.17) e impactava operações básicas (`nullclaw channel list`, `nullclaw channel start`).

**Nota:** Ausência de reações e comentários sugere baixa visibilidade do canal de issues ou confiança na resolução imediata.

---

## 5. Bugs e Estabilidade

### Bugs Fechados/Corrigidos (2)

| # | Bug | Severidade | Causa Raiz | Solução |
|---|-----|------------|------------|---------|
| [#901](https://github.com/nullclaw/nullclaw/issues/901) | Telegram sempre "not configured" | **Crítica** | Parsing de IDs numéricos em `allow_from` | PR #924 |
| [#869](https://github.com/nullclaw/nullclaw/issues/869) | Canal Telegram não carrega do config.json | **Crítica** | Mesma causa raiz | PR #924 |

### Avaliação de Estabilidade

✅ **Estável** — As correções das issues #869 e #901 eliminam regressões críticas no parsing de configuração. Não há bugs abertos ou novos reports no período.

⚠️ **Atenção requerida:** A PR #878 corrigiu comportamento de `thread.sleep()` no POSIX, crucial paraNullClaw's managed scheduler. Este era um bug de compatibilidade silencioso.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR Nova em Aberto

| # | Título | Autor | Escopo | Potencial Impacto |
|---|--------|-------|--------|-------------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | **Amplo** | Alta |

**Análise da PR #783:**
A feature de cron subagent é substancial e inclui:
- Engine DB-backed com `cron_runs` history table
- Worker `cron_run_queue` com ticks atômicos
- Tipos de job: skill, agent, shell
- Suporte a TZ offsets por job
- Output JSON (`cron list --json`, `cron schedule --json`)

**Sinais de roadmap identificados:**
- Expansão de provedores (PR #922 — NEAR AI, Atlas Cloud)
- Funcionalidades avançadas de scheduling (PR #783)
- Segurança reforçada em webhooks e credenciais (PR #907)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Cenário | Problema Reportado | Frequência | Status |
|---------|-------------------|------------|--------|
| Configuração Telegram não reconhecida | Usuário não consegue iniciar canal Telegram mesmo com config.json correto | 1 usuário (duas issues) | ✅ Corrigido |
| IDs numéricos em `allow_from` | Channel runtime ignora contas com IDs inteiros | Regressão | ✅ Corrigido |

### Satisfação/Insatisfação

**Positivo:**
- Rápida resposta a bugs críticos (mesmo dia de publicação)
- Comunidade ativa com múltiplos contribuidores (6 PRs)
- Segurança tratada proativamente

**Áreas de melhoria:**
- Baixa visibilidade de issues (0 comentários, 0 👍 nas issues reportadas)
- Possibly underreported bugs due to lack of feedback channels

---

## 8. Backlog que Merece Atenção

### Issues/PRs Importantes sem Resposta

| # | Tipo | Título | Criado | Atualizado | Estado | Ação Recomendada |
|---|------|--------|--------|------------|--------|------------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | PR | feat(cron): cron subagent, run history... | 2026-04-07 | 2026-05-28 | OPEN | Review e merge prioritário |
| [#901](https://github.com/nullclaw/nullclaw/issues/901) | ISSUE | `channel list` shows "not configured" | 2026-05-09 | 2026-05-28 | CLOSED | Confirmar resolução com usuário |
| [#869](https://github.com/nullclaw/nullclaw/issues/869) | ISSUE | Telegram channel not loading | 2026-04-23 | 2026-05-28 | CLOSED | Confirmar resolução com usuário |

### Ações Recomendadas

1. **Revisar PR #783** — É a maior feature pendente, em aberto há ~7 semanas. Feedback ao autor aceleraria o merge.
2. **Confirmar resoluções com NOTJuangamer10** — Após correção do Telegram, verificar se o usuário confirmou a solução.
3. **Considerar release** — Dado o volume de correções e features recentes, uma release formal beneficiaria usuários.

---

## Métricas resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| PRs merged (24h) | 5 | 📈 Alta |
| Issues fechadas (24h) | 2 | 📈 Normal |
| Bugs críticos abertos | 0 | ✅ Nenhum |
| Features em aberto | 1 | ⏳ Em review |
| Release ativas | 0 | ⏱️ Aguardando |

---

*Relatório gerado em 2026-05-29 com base em dados do GitHub do projeto [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data:** 2026-05-29 | **Projetos analisados:** 8

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturização acelerada, com todos os projetos em ciclos de desenvolvimento intenso. Hermes Agent lidera em volume de atividade (1.302 commits no release v0.15.0), enquanto a maioria dos projetos opera sem releases formais nas últimas 24h — sinalizando fases de estabilização ou consolidação. Duas tendências emergem com força: (1) **segurança como requisito primário** — ZeroClaw, Hermes Agent e IronClaw dedicam esforço significativo a hardening de autenticação e secrets; (2) **interoperabilidade entre agentes** — features como A2A Protocol (Hermes), GitAgent Protocol (NanoBot) e extension registry indicam convergência para padrões abertos de comunicação entre agentes.

A saúde geral do ecossistema é **heterogênea**: NullClaw e NanoBot apresentam estabilidade sólida; Hermes Agent enfrenta regressions pós-release significativas; ZeroClaw opera sob incidentes S0/S1 de segurança; CoPaw enfrenta pressão elevada de issues acumuladas. IronClaw demonstra maturidade processual ao validar canais recém-adicionados antes de produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|:-----------:|:---------:|:--------------:|:---------------------:|:-----------------:|
| **NullClaw** | 2 closed | 6 updated, 5 merged | 0 | 0 | 🟢 Estável |
| **NanoBot** | 11 updated, 6 closed | 19 updated, 7 merged | 0 | 0 | 🟢 EMPENHADA |
| **Hermes Agent** | 50 updated | 50 updated | **v0.15.0** | 3 (regression) | 🟡 Instável |
| **PicoClaw** | 6 processed | 29 updated, 8 merged | 1 (nightly) | 1 (RISC-V) | 🟢 Positiva |
| **IronClaw** | 50 updated | 46 updated, 31 merged | 0 | 5 (WeCom staging) | 🟡 Consolidação |
| **CoPaw** | 43 updated, 11 closed | 39 updated, 11 merged | 0 | 2 | 🟠 Alta pressão |
| **ZeroClaw** | 23 updated | 50 updated | 0 | **4 (S0/S1)** | 🔴 Crítica |
| **NullClaw (ref.)** | 2 closed | 6 updated | 0 | 0 | 🟢 Estável |

**Análise:** ZeroClaw concentra o maior risco imediato (segurança), enquanto Hermes Agent enfrenta o desafio mais comum de releases massivas com regressions. NanoBot demonstra o melhor equilíbrio entre volume de atividade e estabilidade processual.

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Competitivas

| Dimensão | NullClaw vs. Pares | Observação |
|----------|-------------------|------------|
| **Velocidade de resposta a bugs** | ✅ Superior | Bugs críticos resolvidos no mesmo dia (Telegram #869, #901 → PR #924) |
| **Razão PRs merged/ativos** | ✅ Superior | 5/6 = 83% taxa de fechamento em 24h |
| **Surface de ataque** | ✅ Menor | Não há曝光 de incidentes S0/S1 |
| **Maturidade de features core** | ✅ Estável | Canal Telegram, config parsing, POSIX compat |

### Lacunas Identificadas

| Gap | Pares que lideram | Impacto |
|-----|-------------------|---------|
| **Volume de contributors** | Hermes Agent (321), ZeroClaw (50 PRs/24h) | Menor momentum de comunidade |
| **Feature depth** | NanoBot (workspaces, GitAgent Protocol) | Roadmap mais conservador |
| **Integração enterprise** | IronClaw (OAuth, SSO v2, credential boundaries) | Autenticação menos sofisticada |
| **Roadmap de interoperabilidade** | Hermes (A2A), NanoBot (GAP), ZeroClaw (TUI/RPC) | Nenhum protocolo aberto anunciado |

**Veredicto:** NullClaw occupy uma posição de **estabilidade e confiabilidade** — choice pragmático para usuários que priorizam funcionamento consistente sobre features cutting-edge. Namun, a ausência de sinais de roadmap para protocolos de interoperabilidade pode limitar apelo em cenários multi-agente enterprise.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança como Prioridade Universal

Todos os projetos demonstram investimento em hardening de segurança, porém com abordagens distintas:

| Projeto | Foco de Segurança | Abordagem |
|---------|------------------|-----------|
| **ZeroClaw** | Token revocation, nested secrets redaction, bearer auth | 🔴 Reativa — incidentes S0 exigem correção urgente |
| **Hermes Agent** | Secrets scrubbing, telemetry hooks, OAuth hardening | 🟡 Proativa — features integradas na arquitetura |
| **IronClaw** | OAuth refresh, credential boundaries, PathPlaceholder review | 🟢 Proativa — design documentado (#4200, #4182) |
| **PicoClaw** | CSRF, path traversal, X509 cert handling | 🟢 Corrigido — PRs merged rapidamente |
| **NullClaw** | HTTP secrets, webhook hardening, cron shell jobs (PR #907) | 🟢 Proativa — security hardening mergeado |

**Implicação:** A superfície de ataque em agentes de IA é vasta (tokens, webhooks, cron jobs, credenciais em configs). Segurança não é mais feature — é requisito de table-stakes.

### 4.2 Compatibilidade de Providers e Modelos

Problema recorrente em múltiplos projetos:

| Projeto | Issue | Provider/Modelo Afetado |
|---------|-------|------------------------|
| **ZeroClaw** | #6059 | DeepSeek-V4 (thinking mode) |
| **ZeroClaw** | #6361 | MiniMax (context_compression dropa tool_calls) |
| **NanoBot** | #2772 | WeChat (limite de 10 mensagens) |
| **PicoClaw** | #2887 | OpenAI via .deb em RISC-V |
| **NullClaw** | — | Expandido com NEAR AI Cloud, Atlas Cloud |

**Padrão:** À medida que provedores proliferam (NEAR AI Cloud, MiMo, Cursor), a compatibilidade de API e behavior de reasoning chains torna-se desafio técnico significativo. Abstração de provider robusta emerge como necessidade compartilhada.

### 4.3 Estabilidade Desktop

Três projetos enfrentam problemas de desktop client:

| Projeto | Problemas | Plataforma |
|---------|-----------|------------|
| **CoPaw** | Crashes SIGSEGV, tool call hangs, desktop pet looping | macOS, Windows |
| **NullClaw** | POSIX compat, nanosleep behavior | POSIX (Linux) |
| **PicoClaw** | .deb RISC-V funcional | ARM/RISC-V |

**Implicação:** Desktop clients adicionam complexidade de QA exponencialmente. CoPaw demonstra isso claramente com issues de estabilidade concentradas em Windows/macOS.

### 4.4 UX de Cron e Scheduling

Padrão emergente com 4 projetos investindo:

| Projeto | Feature | Status |
|---------|---------|--------|
| **NullClaw** | Cron subagent, DB-backed history, JSON output (#783) | 🔄 Open (7 semanas) |
| **NanoBot** | Migrate HeartbeatService → cron-based (#4023) | ✅ Merged |
| **CoPaw** | Cron display em timezone local (#4750), /skills parsing | ✅ Merged |
| **ZeroClaw** | `delivery.mode = "announce"` (#6510) | 🔄 Requested |

---

## 5. Análise de Diferenciação

### Posicionamento por Público-Alvo

| Projeto | Público-Alvo Implícito | Arquitetura |
|---------|----------------------|-------------|
| **Hermes Agent** | Enterprise / Power users | Monolito extensível com plugin registry, telemetry hooks |
| **IronClaw** | Enterprise (autenticação rigorosa) | Microservices Rust, Reborn agent loop, SSO v2 |
| **ZeroClaw** | Operators / DevOps | Modular com TUI/RPC transport, skills system |
| **NanoBot** | Desenvolvedores / Researchers | Lightweight, GitAgent Protocol, extensível |
| **CoPaw** | Usuários finais Desktop | Electron/Tauri, AgentScope 2.0 migration |
| **PicoClaw** | Edge/Embedded | Go, binaries nativos, multi-cloud providers |
| **NullClaw** | **Generalistas pragmáticos** | Minimal, POSIX-first, canais configuráveis |

### Diferenças Arquiteturais

| Aspecto | NullClaw | Hermes Agent | NanoBot | IronClaw |
|---------|---------|--------------|---------|----------|
| **Linguagem** | Zig? | Python/??? | Python | Rust |
| **Provider abstraction** | Config-based | Plugin registry | Channels | Factory |
| **Auth model** | Config.json | OAuth + Proton Pass | ??? | OAuth2 + SSO v2 |
| **Interoperability** | — | A2A Protocol | GitAgent Protocol | — |
| **Release cadence** | Não formal | A cada 9 dias | Não formal | Pré-release staging |
| **Comunidade visible** | Baixa (0 👍 issues) | Alta (321 contributors) | Média | Média |

### Diferenças de Roadmap

| Projeto | Direção Estratégica | Sinais |
|---------|---------------------|-------|
| **Hermes Agent** | Hub de agentes enterprise | A2A, Cursor provider, telemetry |
| **IronClaw** | Autenticação e multi-channel | SSO v2, WeCom validation, credential boundaries |
| **ZeroClaw** | CLI-first operável | TUI, RPC transport, skills system |
| **NanoBot** | Extensibilidade | GitAgent Protocol, extension registry, cross-agent messaging |
| **CoPaw** | Migração arquitetural | AgentScope 2.0, desktop consolidation |

**NullClaw** demonstra roadmap mais conservador e incremental — foco em estabilidade e correções, sem sinais de mega-features ou protocolos de interoperabilidade. Isso pode ser estratégia deliberada ou lacuna de comunicação.

---

## 6. Tração e Maturidade da Comunidade

### Ranking por Engajamento (24h)

| Posição | Projeto | Métrica de Engajamento | Indicador |
|:-------:|---------|------------------------|-----------|
| 🥇 | **Hermes Agent** | 50 issues + 50 PRs atualizados; 1.302 commits; 321 contributors | **Momentum excepcional** |
| 🥈 | **ZeroClaw** | 23 issues + 50 PRs atualizados; PR massivo #6848 | **Atividade intensa** |
| 🥉 | **IronClaw** | 50 issues + 46 PRs; 31 PRs merged | **Qualidade de review alta** |
| 4 | **NanoBot** | 30+ atividades; 7 PRs merged, 6 issues closed | **Eficiência operacional** |
| 5 | **CoPaw** | 43 issues + 39 PRs; 11 PRs merged | **Volume alto, pressão em backlog** |
| 6 | **PicoClaw** | 29 PRs updated; 8 PRs merged | **Ritmo saudável** |
| 7 | **NullClaw** | 6 PRs updated; 5 PRs merged | **Estável, menor volume** |

### Maturidade Processual

| Projeto | Indicador de Maturidade | Evidência |
|---------|------------------------|-----------|
| **NanoBot** | ✅ Bundle de 5 bugs resolvidos coordenadamente (#4041) | Demonstra root cause analysis sistemática |
| **IronClaw** | ✅ Validação rigorosa pré-release (WeCom staging com 5 bugs) | Processo de QA documentado |
| **NullClaw** | ✅ Bug crítico resolvido no mesmo dia | Velocidade de response sem perda de qualidade |
| **PicoClaw** | ✅ Resolução rápida de X509 bug (#2944) | Cycle time adequado |
| **CoPaw** | ⚠️ Sprint 1.3 em progresso | Processo de release estruturado mas bugs desktop persistem |
| **ZeroClaw** | 🔴 4 S0/S1 simultâneos | Volume de incidentes indica dívida técnica acumulada |
| **Hermes Agent** | 🔴 3 regressions críticas pós-release | Release太快 sem validação adequada |

### Sinais de Community Health

| Projeto | Issues sem resposta (>7d) | Bugs stale | Signal |
|---------|:------------------------:|:----------:|:------:|
| **ZeroClaw** | 5 | 5 | 🔴 Backlog growing |
| **CoPaw** | 3+ | 2 | 🟠 Pressão crescente |
| **NanoBot** | 2 (#2772 ~55d) | 1 | 🟡 Attention needed |
| **NullClaw** | 1 (#783 ~7 semanas) | 0 | 🟢 Manageable |
| **IronClaw** | 5+ | 2 | 🟡 Review pending |
| **Hermes Agent** | Múltiplas | 2 | 🟡 Process overload |

---

## 7. Sinais de Tendência

### 7.1 Interoperabilidade entre Agentes é Prioridade Estratégica

**Evidência:**
- Hermes Agent: A2A Protocol (#514, 12👍, 17 comments)
- NanoBot: GitAgent Protocol (#4030 merged, #4034 open)
- ZeroClaw: RPC transport + TUI (#6848)
- IronClaw: cross-instance messaging (#3992 em NanoBot)

**Implicação:** O ecossistema converge para necessidade de agentes comunicarem entre si. MCP responde "quais ferramentas posso usar?"; A2A responde "quem pode me ajudar?". Esta é a próxima fronteira de diferenciação.

### 7.2 Segurança Evolui de Feature para Infraestrutura

**Evidência:**
- Proativa: IronClaw (OAuth, credential boundaries), Hermes (telemetry hooks, Proton Pass)
- Reativa: ZeroClaw (4 S0/S1 simultâneos), PicoClaw (CSRF, path traversal)
- Padrão emergente: Messaging firewall "confirm-before-send" (Hermes #34116)

**Implicação:** Agentes de IA são vetores de exfiltração de dados por natureza — qualquer secret, token ou message interceptável é risco. Segurança em camadas (auth, secrets, telemetry, egress) tornar-se-á requirement de mercado.

### 7.3 Desktop Clients Entram em Maturidade Questionável

**Evidência:**
- CoPaw: 2 bugs críticos desktop (SIGSEGV, tool call hangs)
- PicoClaw: .deb RISC-V não funcional
- CoPaw: Desktop pet looping, navegação quebrada
- NullClaw: POSIX compat (reversão)

**Implicação:** A barreira de entry para desktop clients é baixa, mas qualidade de produção é difícil. Usuários esperam experiência mobile-like (Slack, Discord) em desktop agents. CoPaw documenta isso claramente com comparação a concorrentes (OpenClaw, Doubao, Yuanbao).

### 7.4 Provider Diversity Criará Complexidade de Abstração

**Evidência:**
- NullClaw: NEAR AI Cloud, Atlas Cloud
- PicoClaw: NEAR AI Cloud, MiMo
- Hermes: Cursor Agent Provider (~100 modelos)
- ZeroClaw: DeepSeek, MiniMax, Anthropic

**Implicação:** Cada provider tem nuances (DeepSeek thinking mode, MiniMax context_compression, Anthropic extended thinking). Abstração uniforme é challenging — bugs de compatibilidade proliferarão até que padrões emergem.

### 7.5 Cron/Scheduling Tornam-se Feature de Tabela-Stakes

**Evidência:**
- NullClaw: Cron subagent com DB-backed history
- NanoBot: Migrate HeartbeatService → cron
- CoPaw:

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-29

## 1. Panorama do dia

NanoBot demonstra **alta活跃度** com 30+ atividades agregadas em 24h: 11 issues e 19 PRs atualizados. A equipe focou em **estabilidade**, com 5 bugs de concorrência/context-budget resolvidos em um único PR (#4041),indicando maturidade no processo de revisão.

Setores de destaque:
- **WebUI**: workspaces com controle de acesso (+#4007)
- **Conectores**: suporte GitAgent Protocol, Discord `/model`, DingTalk isolation
- **Infraestrutura**: heartbeat migrado para cron, tokenizer pre-warmed

Nenhum release novo hoje, sinalizando possível cicatrização antes de próxima versão.

---

## 2. Lançamentos

| Release | Data | Notas |
|---------|------|-------|
| — | — | Nenhum release detectado nas últimas 24h |

**Nota:** Ausência de releases pode indicar que codebase está em pré-release ou que mantenedores estão consolidando PRs open antes de publicar versão estável.

---

## 3. Progresso do Projeto

### PRs merged/fechados Hoje (7 total)

| PR | Tema | Impacto |
|----|------|---------|
| **#4041** 🔗 | Fix 5 bugs: session queue, mutable context, streaming retry, context snipping, /stop task cancellation | Crítico — resolve problemas de concorrência que causavam comportamento indefinido em sessões simultâneas |
| **#4007** 🔗 | feat(webui): workspaces + access controls | Alto — adiciona isolamento de projetos estilo Codex, controle de permissões Composer |
| **#4030** 🔗 | GitAgent Protocol (GAP) support | Médio — padronização de agentes portáteis via `agent.yaml` + `SOUL.md` |
| **#4023** 🔗 | Migrate HeartbeatService → cron-based auto-registration | Médio — redução de infraestrutura dedicada |
| **#4031** 🔗 | Discord `/model` slash command | Baixo — conveniência para troca dinâmica de modelos |
| **#3937** 🔗 | User confirmation for dangerous commands (#3887) | Médio — segurança em comandos destrutivos |
| **#4015** 🔗 | Observation-reflection prompt after tool execution | Experimental — introspecção do agente pós-execução |

**PRs em destaque pela qualidade/impacto:**

> **#4041 [hamb1y]** — Bundle de 5 fixes cobrindo desde race conditions em pending queues até duplicação de streaming deltas. Demonstra cobertura sistemática de edge cases em cenários concurrentes.

> **#4007 [Re-bin]** — Workspaces estilo Codex representam mudança significativa UX, permitindo chats ancorados em pastas de projeto específicas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| **#1922** 🔗 | nanobot-webui — painel web self-hosted | **12** | **10** | Ferramenta externa |
| **#2772** 🔗 | WeChat: limite de 10 mensagens por context_token | **4** | 0 | Limite técnico |
| **#4006** 🔗 | Tool results órfãos sem tool_calls correspondentes | **1** | 0 | Bug API compliance |

### Análise de demandas

**🌡️ #1922 — nanobot-webui (FERVOROSO)**
- Desenvolvido por **Good0007** como projeto externo
- Funcionalidades: dashboard, chat real-time, configuração via UI, multi-usuário
- 10 👍 + 12 comments = sinal forte de Valentin de ferramenta complementar ao core
- Implicação: NanoBot está maduro o suficiente para ecossistema de tooling

**📌 #2772 — Limite WeChat (RELEVANTE)**
- Usuário reporta que context_token suporta máximo 10 mensagens
- Pergunta aberta sobre workarounds
- Tema recorrente: tensão entre memória de contexto e limites de janela

**⚠️ #4006 — Tool Call Orphaning (TÉCNICO)**
- Relacionado a PR #3984 anterior
- Afeta compliance com OpenAI/Anthropic APIs
- Pode causar rejeição em providers strict validation

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (5 issues abertas)

| # | Severidade | Título | Descrição |
|---|-----------|--------|-----------|
| **#4044** 🔗 | ⚠️ Alta | Short-term memory loss | Agente "esquece" perguntas feitas anteriormente na mesma sessão |
| **#4006** 🔗 | ⚠️ Alta | Orphaned tool results | Mensagens role:tool sem tool_calls correspondente |
| **#4042** 🔗 | 🟡 Média | MatrixChannel verification handling | Element X mostra warning "unverified device" |
| **#4043** 🔗 | 🟡 Média | No config to disable document extraction | Injeção automática de docs conflita com workflows de OCR/Docling |

### Bugs resolvidos hoje (via #4041)

- **#4036** — Pending queue overwrite: mensagens follow-up reroteadas para turns separadas
- **#4037** — Mutable context: `long_task`/`complete_goal` compartilhando estado entre sessões
- **#4038** — Streaming retry: duplicação de deltas após falha parcial
- **#4039** — Context snipping: tool-schema tokens ignorados no cálculo de budget
- **#4040** — `/stop` não cancela task com `unified_session` enabled

**Veredicto: Estabilidade em recuperação.**bundle de 5 fixes simultâneos indica que root causes podem estar inter-relacionadas—possível dívida técnica acumulada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Título | Prioridade | Sinal |
|---|--------|-----------|-------|
| **#4043** 🔗 | Config para desabilitar extração de documentos | 🟡 Média | Usuário prefere pipeline customizado (Docling + OCR) |
| **#4042** 🔗 | MatrixChannel: handle m.key.verification | 🟡 Média | Suporte a clients E2EE mais rigorosos (Element X) |
| **#2772** 🔗 | Ajustar limite de 10 mensagens WeChat | 🟡 Média | Escalabilidade em chats com banyak history |

### PRs em desenvolvimento (sugestões de roadmap)

| PR | Tema | Estágio |
|----|------|---------|
| **#4034** 🔗 | GitAgent Protocol support (agent.yaml) | Open |
| **#4046** 🔗 | Extension registry para nanobot | Open |
| **#3992** 🔗 | Agent collaboration — cross-instance messaging | Open |
| **#3990** 🔗 | Refactor Dream: cron + process_direct | Open |
| **#4017** 🔗 | Parse text-format tool_calls em responses OpenAI-compat | Open |

**🦶 Pegadas deRoadmap:**
Mega features em desenvolvimento (cross-agent messaging, extension registry) sugerem ambição de NanoBot como **hub de agentes**. Protocolo GitAgent (#4034) indica alinhamento com ecosistema open-source mais amplo.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

```
┌─────────────────────────────────────────────────────────────────────────┐
│ DOR                          │ FREQUÊNCIA │ SEVERIDADE │ TIMELINE     │
├──────────────────────────────┼────────────┼─────────────┼─────────────┤
│ Perda de memória curto prazo │ ALTA       │ ⚠️ Alta     │ REPORTADO hj │
│ Limite de mensagens/contexto │ MÉDIA      │ 🟡 Média    │ RECORRENTE   │
│ Injeção automática docs      │ BAIXA      │ 🟡 Média    │ REPORTADO hj │
│ E2EE Matrix verification     │ BAIXA      │ 🟡 Média    │ REPORTADO hj │
│ MCP reconnect failures       │ BAIXA      │ 🟡 Média    │ EM FIX (#4027)│
└─────────────────────────────────────────────────────────────────────────┘
```

### Cenários de uso emergentes

1. **Multi-agente orchestration** (#3992): Usuários querem que NanoBot instances conversem entre si
2. **Pipeline de parsing customizado**: Usuários avançados já usam Docling + OCR e não querem interferência
3. **Web management interno** (#1922): Demanda por UI self-hosted para configuração

### Satisfação

- **nanobot-webui** com 10👍 demonstra Valentin de comunidade em tooling complementar
- PRs resolvidos com qualidade (bundle #4041) indicam madureza de processo

### Insatisfação

- Problema de "short-term memory loss" (#4044) reportado hoje pode indicar regression recente
- Limite arbitrário de 10 mensagens (#2772) gera frustração recorrente

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Dias aberto | Prioridade |
|---|--------|--------|-------------|-----------|
| **#2772** 🔗 | Limite WeChat 10 mensagens | 2026-04-03 | ~55 dias | 🟡 Média |
| **#3990** 🔗 | Refactor Dream class | 2026-05-24 | 5 dias | 🟡 Média |

### PRs aguardando reviews

| PR | Título | Autor | Estágio |
|----|--------|-------|---------|
| **#4034** 🔗 | GitAgent Protocol | computer-agent | Needs review |
| **#3992** 🔗 | Cross-agent messaging | ysofologis | Needs review |
| **#4027** 🔗 | MCP reconnection fix | bjoshuanoah | Needs review |

### ⚠️ Atenção especial

> **#2772** (~55 dias sem resposta) — Bug de limite WeChat com 4 comments ativos. Pode indicar que não é trivial resolver ou está em backlog. Usuário ainda buscando solução.

> **#4044** — Bug de "memory loss" recém-reportado com 0 comentários. Precisa triagem rápida para confirmar se é regression.

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 5 | Neutra |
| Issues fechadas (24h) | 6 | Positiva |
| PRs abertos | 12 | Alta atividade |
| PRs fechados (24h) | 7 | Positiva |
| Bugs resolvidos | 5 | ⭐ Destaque |
| Atividade Comunidade | **Alta** | Crescente |

---

**Saúde do Projeto: 🟢 EMPENHADA**

Destaque para resolução coordenada de 5 bugs de concorrência (#4041), indicando maturidade. Roadmap mostra ambição com cross-agent messaging e extension registry. Atenção necessária em: triagem do bug #4044 (memory loss) e resposta para #2772 (WeChat limit).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-29

## 1. Panorama do Dia

O Hermes Agent encerrou o dia 28 de maio de 2026 com altíssima atividade: o projeto acabou de disparar a versão **v0.15.0 ("The Velocity Release")** após 9 dias de ciclo desde a v0.14.0, acumulando **1.302 commits**, **747 PRs merged** e **321 colaboradores** — um dos releases mais massivos já shippados. Nas últimas 24 horas, 50 issues e 50 PRs foram atualizados, sinalizando uma comunidade extremamente ativa na esteira do lançamento. No entanto, a mesma versão v0.15.0 introduziu pelo menos **três bugs críticos** que já foram reportados (plataforma adapters não carregam no PyPI, TUI do dashboard com defeito, comandos slash congelando terminal), exigindo hotfixes敏捷.

---

## 2. Lançamentos

### 🎉 v2026.5.28 — Hermes Agent v0.15.0 "The Velocity Release"
**Data:** 28 de maio de 2026 | **Prévia:** [Release notes · NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.28)

| Métrica | Valor |
|---|---|
| Commits | 1.302 |
| PRs merged | 747 |
| Arquivos alterados | 1.746 |
| Linhas inseridas | +282.712 |
| Linhas removidas | −36.699 |
| Issues fechadas | 560+ (15 P0, 65 P1, 19 security-tagged) |
| Colaboradores | 321 (incluindo co-authors) |

**Destaques documentados no changelog:**
- Integração do **A2A (Agent-to-Agent) Protocol** como feature (ainda em issue #514 tracking)
- Suporte a **Cursor Agent Provider** (100+ modelos via assinatura) — PR #34096
- **Mensagem firewall** — confirmation gate obrigatório antes de envio outbound
- **Observer-grade telemetry hooks** para plugins (PR #29722)
- Proton Pass como backend de secrets (PR #34110)
-several observability e segurança improvements

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (2026-05-29)

| # | PR | Tipo | Impacto |
|---|---|---|---|
| #34111 | [feat(gateway): hot-reload gateway permissions](https://github.com/NousResearch/hermes-agent/pull/34111) | Feature | Permissão de gateway com hot-reload sem restart |
| #34087 | [Make max_tokens configurable for aux vision calls](https://github.com/NousResearch/hermes-agent/pull/34087) | Bug fix | Liberta limites de 2K/4K para modelos com contexto de 130K |
| #33669 | [Context overflow without provider max should not probe-step context length](https://github.com/NousResearch/hermes-agent/pull/33669) | Bug fix | Corrige fallback silencioso de context window |
| #34020 | [Gateway should not treat stale Codex app-server progress as final response](https://github.com/NousResearch/hermes-agent/pull/34020) | Bug fix | Previne resposta truncada após silêncio de 90s |
| #34018 | [One-shot smoke: add Flue-backed orchestration fixture](https://github.com/NousResearch/hermes-agent/pull/34018) | Testes | Fixture de teste para pipeline completo |
| #34077 | [feat(gateway): hot-reload gateway permissions](https://github.com/NousResearch/hermes-agent/pull/34111) | Feature | Permissão de gateway — documentação de GO/NO-GO |

### PRs Abertos com Alto Impacto

| # | PR | Tipo | Prioridade | Descrição |
|---|---|---|---|---|
| [#29722](https://github.com/NousResearch/hermes-agent/pull/29722) | [feat(observability): add observer-grade telemetry hooks](https://github.com/NousResearch/hermes-agent/pull/29722) | Feature | **P2 + Telemetry** | Contrato de telemetry para plugins — session/turn/API/tool lifecycle |
| [#34096](https://github.com/NousResearch/hermes-agent/pull/34096) | [feat(cursor): add Cursor agent provider](https://github.com/NousResearch/hermes-agent/pull/34096) | Feature | — | Provider Cursor (~100 modelos subscription-based) |
| [#34116](https://github.com/NousResearch/hermes-agent/pull/34116) | [feat(send): messaging firewall — confirm-before-send gate](https://github.com/NousResearch/hermes-agent/pull/34116) | Feature | — | Implementa "Human + LLM 2-of-2" confirmation antes de envios |
| [#34115](https://github.com/NousResearch/hermes-agent/pull/34115) | [fix(gateway): define missing _MEDIA_EXTS](https://github.com/NousResearch/hermes-agent/pull/34115) | Bug fix | — | 3 bugs críticos: `_MEDIA_EXTS` indefinido causa crash |
| [#34119](https://github.com/NousResearch/hermes-agent/pull/34119) | [fix(docker): validate HERMES_UID/GID](https://github.com/NousResearch/hermes-agent/pull/34119) | Bug fix (segurança) | — | Previne privilege escalation no stage2-hook |
| [#34104](https://github.com/NousResearch/hermes-agent/pull/34104) | [fix: scrub secrets from terminal env snapshots](https://github.com/NousResearch/hermes-agent/pull/34104) | Bug fix (segurança) | — | Filtra secrets de terminal snapshots |
| [#34114](https://github.com/NousResearch/hermes-agent/pull/34114) | [fix(nous_account): add threading lock on cache](https://github.com/NousResearch/hermes-agent/pull/34114) | Bug fix | — | Previne TOCTOU race cond. no cache account |
| [#26021](https://github.com/NousResearch/hermes-agent/pull/26021) | [feat(web): add Gemini Google Search Grounding provider](https://github.com/NousResearch/hermes-agent/pull/26021) | Feature | P3 | Novo provider de busca com grounding via google-genai SDK |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue #514 — A2A (Agent-to-Agent) Protocol Support *(17 comments | 12 👍)* — [OPEN]
**Link:** [Issue #514 · NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/issues/514)

Requerimento para implementar o padrão **A2A da Linux Foundation / Apache 2.0** — complementar ao MCP. Mientras MCP responde "¿qué herramientas puedo usar?", A2A responde "¿quién puede ayudarme?". Permitirá descoberta e comunicação entre agentes remotos. Issue ativa há ~3 meses com engajamento sólido, sinalizando demanda real por interoperabilidade de agentes open source.

### 🔥 Issue #18658 — SGR mouse sequence leakage in TUI *(2 comments | 4 👍)* — [OPEN]
**Link:** [Issue #18658 · NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/issues/18658)

Escape sequences de mouse SGR vaza para o compositor em cargas pesadas dentro de `tmux` com mouse tracking — produce garbage text. Alto 👍 para um bug relativamente específico, indicando que muitos usuários utilizam Hermes via tmux.

### 📊 Padrões de Engajamento
- **Feature requests** predominam em 👍 (A2A Protocol: 12, /models command: 1)
- **Bugs** predominam em comentários (Kanban corruption: 12, Context bar: 5, streaming hang: 4)
- **3 topics duplicates** simultâneos sobre "plugin local scope enablement" (#34123, #34122 e um terceiro) — levanta dúvidas sobre a precisão da issue que foi triplicada acidentalmente

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (Potential Service Disruption)

| # | Bug | Status | Descrição |
|---|---|---|---|
| [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | [Anthropic streaming: stale/retry 15-min hang](https://github.com/NousResearch/hermes-agent/issues/28161) | OPEN | Caminhos de recovery reconstroem OpenAI client incorretamente para usuários Anthropic-native, causando hang de 15 min |
| [#34034](https://github.com/NousResearch/hermes-agent/issues/34034) | [v0.15.0 PyPI — plugin.yaml manifests missing](https://github.com/NousResearch/hermes-agent/issues/34034) | OPEN | **TODO — block!** Todos os plataforma adapters silenciosamente disabled. Breaking change crítico no packaging |
| [#33433](https://github.com/NousResearch/hermes-agent/issues/33433) | [Context bar stuck at 0% on openai-codex](https://github.com/NousResearch/hermes-agent/issues/33433) | OPEN | Regression de commit 43a3f119 — `_codex_backfilled_response()` hardcodes `usage=None`, context bar não atualiza |

### 🟠 P2 — Elevados (Degraded Experience)

| # | Bug | Descrição |
|---|---|---|
| [#31873](https://github.com/NousResearch/hermes-agent/issues/31873) | [check_web_api_key() hardcodes backends — third-party plugins disabled](https://github.com/NousResearch/hermes-agent/issues/31873) |
| [#33801](https://github.com/NousResearch/hermes-agent/issues/33801) | [Secret redaction corrompe código em tool output](https://github.com/NousResearch/hermes-agent/issues/33801) |
| [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) | [Comandos /new, /clear, /reset congelam terminal session](https://github.com/NousResearch/hermes-agent/issues/33961) — introduzido em v0.15.0 |
| [#18658](https://github.com/NousResearch/hermes-agent/issues/18658) | [SGR mouse leakage in TUI/tmux](https://github.com/NousResearch/hermes-agent/issues/18658) |
| [#34091](https://github.com/NousResearch/hermes-agent/issues/34091) | [Dashboard TUI não funciona após v0.15.0](https://github.com/NousResearch/hermes-agent/issues/34091) — regression |
| [#34026](https://github.com/NousResearch/hermes-agent/issues/34026) | [docker_run_as_host_user quebra bundled skills](https://github.com/NousResearch/hermes-agent/issues/34026) |
| [#34083](https://github.com/NousResearch/hermes-agent/issues/34083) | [Windows: plugin discovery, gateway exit code, Unicode decode](https://github.com/NousResearch/hermes-agent/issues/34083) |

### 🟡 P3 — Menores / Em inglês

| # | Bug | Descrição |
|---|---|---|
| [#33334](https://github.com/NousResearch/hermes-agent/issues/33334) | Kanban database corruption causing system crash (grande volume) |
| [#24699](https://github.com/NousResearch/hermes-agent/issues/24699) | Kanban re-execução perde contexto, reinicia tasks do zero |
| [#34020](https://github.com/NousResearch/hermes-agent/issues/34027) | Gateway trata stale Codex progress como resposta final |
| [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) | cronjob tool create sempre falha "schedule is required" |
| [#34124](https://github.com/NousResearch/hermes-agent/issues/34124) | codex-oauth: 'NoneType' object is not iterable (gpt-5.5) |

**Avaliação de estabilidade:** O release v0.15.0 introduziu regressions significativas que afetam funcionalidades core (PyPI packaging, TUI, slash commands). A velocidade do release contrasta com a quantidade de bugs pós-lançamento. A equipe demonstra ritmo acelerído mas a qualidade de packaging precisa de atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🚀 Featuresemandadas com Alto Engajamento

| # | Feature | Sinais de Roadmap |
|---|---|---|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | **A2A Protocol Support** — Agent-to-Agent discovery & interoperability | Forte alinhamento estratégico com o ecossistema MCP; Apache 2.0 sob Linux Foundation |
| [#3500](https://github.com/NousResearch/hermes-agent/issues/3500) | **/models slash command** — listar modelos disponíveis | Feature simples e UX-critical para gateways Telegram/outros |
| [#33267](https://github.com/NousResearch/hermes-agent/issues/33267) | **Kanban storage — concurrency-safe adapter boundary** | DB-ADAPTER-006: SQLite frágil sob Concorrência — migration planejada para adapter genérico |
| [#14768](https://github.com/NousResearch/hermes-agent/pull/14768) | **LLM Gateway (llmgateway.io) como provider** | Expandir rede de providers para incluir agregadores OpenAI-compatíveis |
| [#27601](https://github.com/NousResearch/hermes-agent/pull/27601) | **Webhook bearer token auth** | Completar stack de autenticação para webhooks — feature quase pronta |

### 📈 Sinais de Mercado/Tecnologia
- **Cursor provider**: O mercado de agents subscription-based (Cursor, Copilot) está sendo endereçado — isso posiciona Hermes como hub unificado
- **Proton Pass integration**: Demanda por secrets management diversificado além de Bitwarden
- **Telemetry hooks**: Consolidação do ecossistema de plugins com observabilidade profissional — indica maturação enterprise
- **A2A Protocol**: Competição direta com MCP mostra ambição de ser a plataforma central de interoperability

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Críticas Reportadas

1. **v0.15.0 quebrou tudo que era plugin** — O bug #34034 é massivo: usuários que actualizaram do PyPI perderam TODOS os platform adapters (Discord, Slack, etc.). A mensagem de erro "No adapter available for discord" gerou frustração inmediata.

2. **Kanban é instável em cargas reais** — Três issues separadas (#33334, #24699, #28181) documentam corrupção de DB, perda de contexto e zombie workers. Indica que a camada de armazenamento Kanban não foi stress-tested adequadamente.

3. **Streaming hang de 15 minutos com Anthropic** — O bug #28161 é severo: modelo para de responder por quarto de hora, não dá feedback, usuário não sabe se morreu ou está processando.

4. **Terminal congela com comandos básicos** — /new, /clear, /reset quebrados em v0.15.0 afeta workflow diario de todo usuário CLI.

### 😊 Cenários Positivos

- **321 colaboradores** em um único ciclo (v0.14.0 → v0.15.0) demonstra momentum de comunidade excepcional
- **Telemetria e secrets diversificados**: Proton Pass e telemetry hooks respondem a demandas de power users e squads DevOps
- **Messaging firewall (confirm-before-send)** — alinhado com segurança "human-in-the-loop" demanded por comunidades sensíveis

### 📋 Temas Recorrentes
- **Windows compatibility**: 3 bugs simultâneos (#34083, #26481, #26488) — plataforma Windows parece ser beta persistente
- **Plugin discovery em diretórios aninhados**: Bundled DDGS não encontrado por falta de plugin.yaml no lugar correto

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-29

## 1. Panorama do dia

O projeto PicoClaw demonstra **alta atividade** nesta janela de 24 horas, com 29 PRs atualizados e 6 issues processadas. O lançamento de uma nightly build (`v0.2.9-nightly.20260528`) sinaliza progresso em direção à próxima versão estável. A comunidade está engajada em múltiplas frentes: expansão de provedores (NEAR AI Cloud e MiMo), correções de segurança críticas (CSRF, path traversal) e otimizações de performance. Um bug persistente no .deb para RISC-V (#2887) com 7 comentários permanece aberto, indicando uma questão complexa que atravessa múltiplas versões. O ritmo de merges (8 PRs fechados/merged) supera a média típica de projetos de porte similar, evidenciando um ciclo de revisão saudável.

---

## 2. Lançamentos

### Nova release disponível

| Release | Data | Alterações |
|---------|------|------------|
| **v0.2.9-nightly.20260528.28ec5793** | 2026-05-28 | nightly build automática |

**Changelog completo**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

> ⚠️ **Nota**: Trata-se de um build noturno automatizado, não recomendado para ambientes de produção. A.Builds stable v0.2.8 permanece como versão oficial mais recente.

**Impacto direto das merged PRs**: As correções merged nas últimas 24h (CSRF, JSONL crash-consistency, fallback chain, heredoc parsing) devem estar incorporadas neste build.

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| PR | Título | Impacto |
|----|--------|---------|
| [#2918](https://github.com/sipeed/picoclaw/pull/2918) | Bump larksuite/oapi-sdk-go 3.7.5 → 3.9.2 | Atualização de dependência Go |
| [#2920](https://github.com/sipeed/picoclaw/pull/2920) | Bump anthropics/anthropic-sdk-go 1.26.0 → 1.45.0 | Importante: atualização significativa do SDK Anthropic |
| [#2858](https://github.com/sipeed/picoclaw/pull/2858) | fix(exec): allow quoted heredoc markdown bodies | Segurança e usabilidade: permite heredocs markdown sem quebrar guardas de segurança |

### Avanços significativos

1. **Segurança reforçada (#2900)**: A correção de CSRF e path traversal validation demonstra atenção à superfície de ataque da interface web. Este é um PR *stale* (sem resposta), mas as correções foram mergeadas independentemente pelo mantenedor.

2. **Integridade de dados (#2907)**: A correção do crash-consistency gap no JSONL-backed memory store resolve um problema silencioso onde crashes entre writes podiam corromper metadados.

3. **SDK Anthropic atualizado (+20 versões)**: A bump de 1.26.0 para 1.45.0 no SDK da Anthropic (incluindo commits de dependentes em #2962) indica que o projeto está跟踪最新API capabilities.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Reações | Tópicos |
|-------|------|-------------|---------|---------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | BUG | **7** | 0 | .deb RISC-V não funcional com modelo OpenAI |
| [#1738](https://github.com/sipeed/picoclaw/issues/1738) | enhancement | 3 | 1 | Channel formato OpenAI API |
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) | stale | 3 | 0 | Otimizações CPU/Memory/IO |

### Análise das demandas

**#2887 — Bug Crítico de Funcionalidade**
- **Contexto**: .deb em RISC-V reporta versão Go 1.25.9 ("no compiler on-site") e não funcional com GPT-5.4-2026-03-05.
- **Sintoma**: Usuário indica que a versão empacotada não consegue executar operações que a build binária nativa executa normalmente.
- **Hipótese**: Problema pode estar relacionado a backend de comunicação OpenAI dentro do ambiente empacotado .deb, não no Go runtime em si.

**#1738 — Channel OpenAI API (Resolvida)**
- A adição de suporte a channel formato OpenAI API foi fechada. Isso permite que o PicoClaw seja嵌入 em sistemas existentes sem modificações em seus backends — caso de uso comum para embeddings industriais.

**#2916 — Otimizações de Sistema**
- O autor propõe otimizações broad de CPU, memória e IO. O label `stale` indica necessidade de triagem pelos mantenedores. Este tipo de issue genérica frequentemente requer分解 em issues menores para ser processável.

---

## 5. Bugs e Estabilidade

### Bugs reportados ativos

| Issue | Severidade | Descrição | Andamento |
|-------|-----------|-----------|-----------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | **Alta** | .deb em RISC-V não conecta com OpenAI – ambiente Go reporting versão 1.25.9 com "no compiler on-site" | **Aberta** — 7 comentários em análise |
| [#2944](https://github.com/sipeed/picoclaw/issues/2944) | ~~Média~~ | X509 certificate error no Termux/chroot — **RESOLVIDA** | Fechada com workaround: definir `SSL_CERT_FILE` explicitamente |

### Correções de estabilidade processadas

1. **#2907 — JSONL metadata drift after crash**: Corrigido gap de consistência entre writes de dados e metadados.
2. **#2905 — Fallback chain expired contexts**: Contexto expirado agora interrompe o chain imediatamente em vez de tentar candidatos subjacentes desnecessariamente.
3. **#2913 — JSONL hot-path cloning**: Otimização que elimina clone desnecessário do índice em memória em cache hits.
4. **#2900 — CSRF + path traversal**: Correções de segurança no backend web launcher.

### Métricas de qualidade

- **Percentual de fechamento de issues**: 4/6 (66.7%) nas últimas 24h
- **Bugs críticos abertos**: 1 (#2887)
- **Trend**: Positiva — múltiplas correções de estabilidade mergeadas, resolução rápida do bug X509.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em revisão (PRs abertos)

| PR | Feature | Prioridade implícita | Observações |
|----|---------|---------------------|--------------|
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | **NEAR AI Cloud provider** | Alta | Provider first-class OpenAI-compatible; expõe API base default e modelos TEE-capable |
| [#2915](https://github.com/sipeed/picoclaw/pull/2915) | **CommonModels para MiMo** | Média | Adiciona `mimo-v2.5` (multimodal) e `mimo-v2.5-pro` (text-only); resolve envio de imagens para modelo text-only |
| [#2855](https://github.com/sipeed/picoclaw/issues/2855) | **Message tool com media attachments** | ~~Implementada~~ | closed — likely mergeada ou work do PR #2858 |

### Sinais de roadmap extraídos

1. **Expansão multi-provider**: NEAR AI Cloud + MiMo indicam estratégia de diversificação de provedores além de OpenAI/Anthropic.
2. **Suporte multimodal**: A adição explícita de modelos que suportam image understanding (#2915) sugere que o pipeline de visão está amadurecendo.
3. **Embeddability**: Canal OpenAI API (#1738 closed) confirma que casos de uso de embedding/integração são prioridade.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Cenário | Usuário | Problema |
|---------|---------|----------|
| **Deploy RISC-V .deb** | s0me0ne-unkn0wn | Functional failure com modelos OpenAI — indica gap entre binário nativo e empacotamento .deb |
| **Ambiente Termux** | ClockW-TheROOT | Falha de certificados TLS silenciosa; workaround existe mas deveria ser transparente |
| **Modelos MiMo visão** | SiYue-ZO | Envio de imagens para modelo text-only resultava em erro silencioso — causa raiz identificada |

### Cenários de uso emergentes

1. **Embedabilidade profissional**: Feature request de channel OpenAI API (#1738) sugere adoção em pipelines industriais.
2. **Deploys heterogêneos**: RISC-V + Termux indicam uso em borda (edge computing) e dispositivos ARM.
3. **Multi-cloud**: Integração com NEAR AI Cloud demonstra interesse em provedores descentralizados.

### Satisfação implícita

- **5 de 6 issues processadas** nas últimas 24h (taxa de resposta: 83%)
- **8 PRs dependentes** merged em 24h indica review burden gerenciada
- **Resolução rápida** do bug Termux (#2944 closed, 0 comentários) sugere waktu de resposta adequado

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa

| Issue | Tempo em aberto | Labels | Recomendação |
|-------|----------------|--------|--------------|
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) | 8 dias | `stale` | Requer分解 em issues menores; label stale indica necessidade de triagem |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 11 dias | `BUG` | **Alta prioridade** — 7 comentários mas sem solução ainda; pode indicar bug de empacotamento complexo |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | ~9 dias | PR stale | Aguardando merge — funcionalidade de crash-consistency é crítica para dados de usuário |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | ~9 dias | PR stale | Aguardando merge — corrige comportamento de fallback chain |

### PRs stale com potencial de merge

| PR | Tema | Impacto se mergeda |
|----|------|-------------------|
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) | JSONL hot-path cloning fix | Performance — eliminação de clones desnecessários |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) | Provider logo fallbacks | UX — logos não renderizam na página de modelos |
| [#2900](https://github.com/sipeed/picoclaw/pull/2900) | CSRF + security headers | **Segurança** — aguardando merge (segurança do web launcher) |

### Recomendação para mantenedores

1. **Priorizar #2887**: Bug funcional afeta usuários em arquiteturas RISC-V — investigar se é gap de compilação cro...

---

*Relatório gerado em 2026-05-29. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-05-29

---

## 1. Panorama do dia

O projeto IronClaw apresenta **atividade intensa e concentrada no workstream Reborn**, com 50 issues e 46 PRs atualizados nas últimas 24h. O foco atual está na **finalização da camada de autenticação para produção** — OAuth, credenciais duráveis e gates de aprovação — além da **validação do canal WeCom** recém-adicionado na versão 0.29.0 (staging), que revelou múltiplos bugs de estabilidade. Não houve lançamentos hoje, indicando que o ciclo está em fase de estabilização pré-release.

---

## 2. Lançamentos

**Nenhum novo release** foi publicado nas últimas 24h.

---

## 3. Progresso do projeto

Os PRs mais relevantes merged/fechados hoje:

| PR | Escopo | Resumo |
|----|--------|--------|
| [#4207](https://github.com/nearai/ironclaw/pull/4207) | reborn | Adiciona estágio de admissão de replies finais para garantir deterministicismo no fim do turno do agente |
| [#4174](https://github.com/nearai/ironclaw/pull/4174) | reborn | Implementa ciclo de refresh token Google OAuth com compensação e retry para tokens expirados |
| [#4182](https://github.com/nearai/ironclaw/pull/4182) | webui | Adiciona superfície SSO nativa v2 para Google OAuth com PKCE S256, CSRF e cross-provider replay guard |
| [#3887](https://github.com/nearai/ironclaw/pull/3887) | reborn | Rotear production builders através da factory, resolvendo falha de CI e causa raiz |
| [#4177](https://github.com/nearai/ironclaw/pull/4177) | reborn | Refatora compaction task em estágios tipados (validated range, compaction input, sanitized summary) |
| [#4168](https://github.com/nearai/ironclaw/pull/4168) | reborn | Move auth-flow snapshot seam para ironclaw_auth e melhora resolução de gate no WebUI |
| [#4200](https://github.com/nearai/ironclaw/pull/4200) | docs | Adiciona documentação da arquitetura do agente Reborn com boundary de kernel e produto |
| [#4199](https://github.com/nearai/ironclaw/pull/4199) | reborn | Simplifica semântica de `apply_patch` eliminando pré-requisito de leitura em memória |
| [#4189](https://github.com/nearai/ironclaw/pull/4189) | reborn | Corrige `apply_patch` para funcionar após `write_file` no mesmo escopo |

---

## 4. Temas quentes da comunidade

| Issue | Comentários | Título |
|-------|-------------|--------|
| [#4085](https://github.com/nearai/ironclaw/issues/4085) | 3 | RESOLVED: production builders agora requerem `TenantSandboxProcessPort` do caller |
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | 3 | Question: kill `RuntimeCredentialTarget::PathPlaceholder` ou harden it? |
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | 3 | Design: subagent spawn for the Reborn agent loop |
| [#4202](https://github.com/nearai/ironclaw/pull/4202) | 1 | Harden OAuth callback token cleanup (durable/crash-safe + restart-safe replay) |

**Análise:**
- **Issue #3917** representa uma decisão de design de segurança: `PathPlaceholder` foi adicionado em PR #3903 como primitivo de injeção de credenciais em segmentos de URL — a equipe questiona se deve ser removido ou reforçado antes de shipment. Evidencia maturidade em revisar vetores de ataque.
- **Issue #3798** propõe design completo para spawn de subagentes no loop Reborn com escopo em múltiplos crates (`ironclaw_agent_loop`, `ironclaw_turns`, `ironclaw_reborn_composition`, etc.).
- O ciclo de autenticação Reborn continua sendo o tema central de discussion — múltiplos sub-issues e PRs orbitam em torno de OAuth, refresh e credential boundaries.

---

## 5. Bugs e estabilidade

**Contexto:** A validação profunda do canal WeCom em staging revelou problemas de estabilidade significativos:

| Severidade | Issue | Problema |
|------------|-------|----------|
| ⚠️ Alta | [#4195](https://github.com/nearai/ironclaw/issues/4195) | Anexos de imagem WeCom são instáveis/inconsistentes — HEIF particularmente afetado |
| ⚠️ Alta | [#4194](https://github.com/nearai/ironclaw/issues/4194) | Group chat e DM privado são mergeados na mesma conversa no Web UI |
| ⚠️ Alta | [#4197](https://github.com/nearai/ironclaw/issues/4197) | Análise de visão resolve imagens incorretas/stales |
| 🔶 Média | [#4198](https://github.com/nearai/ironclaw/issues/4198) | Visibilidade do owner para usuários não pareados é confusa |
| 🔶 Média | [#4193](https://github.com/nearai/ironclaw/issues/4193) | UX de setup WeCom carece de onboarding e orientação de pré-requisitos |

**Alerta:** Os 5 sub-issues de WeCom indicam que o canal precisa de trabalho adicional antes de produção. Nenhum foi ainda asignado com prioridade clara.

---

## 6. Pedidos de features e sinais de roadmap

| Issue | Escopo | Feature |
|-------|--------|---------|
| [#1907](https://github.com/nearai/ironclaw/issues/1907) | channel/web | Adicionar funcionalidade de deletar conversas/threads |
| [#4116](https://github.com/nearai/ironclaw/issues/4116) | reborn, webui | Migrar SSO v1 (Google/GitHub/NEAR) para WebChat v2 |
| [#4203](https://github.com/nearai/ironclaw/issues/4203) | reborn | Bridge de injeção de credenciais para Telegram via host egress |
| [#4206](https://github.com/nearai/ironclaw/issues/4206) | reborn | Tornar HTTP egress do runtime async end-to-end |
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | ironhub | Install tools e skills do IronHub via CLI e agent tools |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) | channel/wasm | Adicionar websocket event intake para Feishu/Lark |

**Sinais de roadmap:**
- **SSO multi-provider** (Google + GitHub + NEAR) para WebChat v2 está em progresso — Google já merged (#4182), GitHub e NEAR em follow-up (#4204).
- **Async HTTP egress** (#4206) indicaria re-arquitetura de runtime se aceito.
- **IronHub install** (#3737) é feature de marketplace aguardando review há ~12 dias.

---

## 7. Resumo de feedback dos usuários

| Categoria | Feedback |
|-----------|----------|
| **Dores WeCom** | Usuários reportam falha de imagens, merge indevido de conversas e falta de onboarding — impacto direto na adoção do canal |
| **Segurança** | Discussão ativa sobre se `PathPlaceholder` deve existir — sinal de comunidade atenta a vetores de ataque |
| **Autenticação** | Migration SSO v1→v2 é reclamada com destaque; sem ela,体験 fragmentada entre versões |
| **UX** | Pedido de delete de conversas (#1907) desde abril, sem implementation — fricção de uso real |

**Nota:** Não há feedback quantitativo de NPS/satisfação disponível nos dados; inferência feita a partir de issues abertas e padrões de reclamação.

---

## 8. Backlog que merece atenção

| Item | Tempo sem resposta | Risco | Link |
|------|-------------------|-------|------|
| `ironclaw_host_runtime/src/lib.rs` com 1828 linhas | Novo | Arquitetural | [#4209](https://github.com/nearai/ironclaw/issues/4209) |
| Subagent spawn design sem ack | ~10 dias | Decisão pendente | [#3798](https://github.com/nearai/ironclaw/issues/3798) |
| `PathPlaceholder` sem decisão de segurança | ~6 dias | Segurança | [#3917](https://github.com/nearai/ironclaw/issues/3917) |
| PR #3737 (IronHub) sem assignee | ~12 dias | Feature importante | [#3737](https://github.com/nearai/ironclaw/pull/3737) |
| PR #3903 (credential boundary) | ~7 dias | Crítico para Reborn | [#3903](https://github.com/nearai/ironclaw/pull/3903) |

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 39 |
| PRs abertos | 15 |
| PRs merged/fechados | 31 |
| Novas releases | 0 |
| Temas dominantes | Reborn auth, WeCom stability, SSO migration |
| Alertas | WeCom bugs (5 sub-issues), `lib.rs` size violation, PathPlaceholder security decision |

**Veredicto:** O projeto está em fase de consolidação do workstream Reborn — autenticação, OAuth e credential boundaries dominam o progresso. A descoberta de múltiplos bugs no canal WeCom recém-adicionado é um sinal positivo de processo de validação rigoroso, mas demanda atenção antes de release. Ausência de releases hoje sugere foco em estabilidade e code review pesado (31 PRs fechados em 24h).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório de Projeto CoPaw — 2026-05-29

---

## 1. Panorama do Dia

O projeto **CoPaw** (QwenPaw) demonstra **alta atividade comunitária** no período analisado, com 43 issues e 39 PRs atualizados nas últimas 24h. A proporção de issues fechadas (11) em relação ao total indica uma capacidade razoável de resolução, porém o volume de issues abertas (32) sinaliza pressão contínua sobre a equipe de manutenção. As atividades concentram-se em **stabilidade do desktop** (especialmente Windows), **experiência de usuário** do console web, e **preparação para migração** para AgentScope 2.0. Não foram registradas novas releases neste período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

> 🔗 [agentscope-ai/QwenPaw Releases](https://github.com/agentscope-ai/QwenPaw/releases)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Relevantes

| # | Título | Impacto |
|---|--------|---------|
| [#4771](https://github.com/agentscope-ai/QwenPaw/pull/4771) | `chore(deps): update @agentscope-ai/chat to v1.1.64-beta.1779961389231` | Atualização de dependência interna |
| [#4763](https://github.com/agentscope-ai/QwenPaw/pull/4763) | `fix(utils): enhance message timestamp handling with user timezone support` | Melhora na exibição de horários em fuso local do usuário |
| [#4755](https://github.com/agentscope-ai/QwenPaw/pull/4755) | `fix(console): clear chat input draft after message is sent` | Corrige refill indesejado no input após navegação |
| [#4750](https://github.com/agentscope-ai/QwenPaw/pull/4750) | `fix(cron): display schedule time and timezone in user's local timezone` | Melhora UX de tarefas cron em fuso local |
| [#4692](https://github.com/agentscope-ai/QwenPaw/pull/4692) | `Add GitHub Actions workflow for contributors_data.json` | Automação de manutenção de contribuidores no site |
| [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) | `fix(console): add loading state and feedback for workspace download button` | Melhora feedback visual no download |
| [#4588](https://github.com/agentscope-ai/QwenPaw/pull/4588) | `feat(console): reload page when plugin is installed/uninstalled` | Elimina necessidade de reload manual |

### Destaque: Melhorias de Experiência do Usuário

As PRs merged indicam foco em **quality-of-life improvements**: limpeza de drafts, timezone handling, e feedback de loading. A PR [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) (em review) propõe **otimização de startup no Windows** com lazy loading e cache, reduzindo tempo de resposta para ~40ms.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) | Question: 打包方式 (Desktop packaging options) | 7 | Question | Usuário busca clareza sobre diferenças entre versão Windows e Tauri; demanda por documentação de empacotamento |
| [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) | Tool call hangs Agent: timeout or success → waits for input | 6 | Bug | Problema crítico: agente não continua após tool call; afeta produtivilidade |
| [#4746](https://github.com/agentscope-ai/QwenPaw/issues/4746) | Sort conversation history by last message time | 4 | Enhancement | Demanda consistente por ordenação por "última atividade" — padrão de mercado |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | Enhancement: 增强记忆系统「总结-关联-提醒」机制 | 4 | Enhancement | Crítica ao sistema de memória como "informação堆砌" (acúmulo sem aprendizado) |

### Análise de Demandas

A comunidade demonstra forte interesse em:
- **Estabilidade do desktop**: issues sobre crashes, prompts CMD, e problemas de reinicialização
- **UX do console**: ordenação de conversas, coluna de IDs, e área de input
- **Sistema de memória**: desejam "aprendizado ativo" ao invés de simples logging
- **Tarefas cron**: múltiplas issues sobre usabilidade, timezone, e interface

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Crítico
| # | Título | Descrição | Plataforma |
|---|--------|-----------|------------|
| [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) | Tool call hangs Agent | Após tool call (sucesso, timeout ou erro), agente entra em estado de "espera por input" em vez de continuar | QwenPaw v1.1.9 |
| [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) | App crashes after upgrading to macOS Tahoe 26.5 | SIGSEGV em tokio-rt-worker ao receber mensagens via Feishu channel | macOS App Bundle v1.1.8.post1 |

#### 🟡 Alto
| # | Título | Descrição |
|---|--------|-----------|
| [#4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) | Desktop Pet looping, não abre | Terminal abre em loop, pet não carrega |
| [#4764](https://github.com/agentscope-ai/QwenPaw/issues/4764) | Desktop version: can't go back after opening webpage | Navegação trava após abrir URL |
| [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) | Restart resets agent/session selection | Persistência de estado entre sessões não funciona |

#### 🟢 Médio
| # | Título | Descrição |
|---|--------|-----------|
| [#4774](https://github.com/agentscope-ai/QwenPaw/issues/4774) | Input box retains previous content after navigation | Dificulta UX ao trocar entre interfaces |
| [#4784](https://github.com/agentscope-ai/QwenPaw/issues/4784) | /skills command fails on first input | YAML parsing error em comandoslash |

### Tendência

Bugs concentram-se no **desktop client** (especialmente Windows e macOS), indicando necessidade de QA mais robusto em ambiente desktop. A issue [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) reportou que `tool_result_pruning` falha para outputs >263KB, sugerindo necessidade de limites mais agressivos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (issues abertas)

| # | Título | Impacto Estratégico | Referência |
|---|--------|---------------------|------------|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | **Migrate backend to AgentScope 2.0** | 🔴 Breaking Change — Migração de arquitetura | PR #4745 integra Sprint 1.3 |
| [#4758](https://github.com/agentscope-ai/QwenPaw/issues/4758) | Configuration refactoring: global vs agent scopes, versioning, comparison playground | 🟡 Enhances configurability | Próxima versão? |
| [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) | Automatic provider degradation for token quota exhaustion | 🟡 Alta demanda — fallback automático entre LLMs | — |
| [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | Shell commands should execute silently (no CMD popup) | 🟢 UX Windows desktop | — |
| [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) | Manual cron task UX improvements | 🟢 Melhorias incrementais | — |
| [#4762](https://github.com/agentscope-ai/QwenPaw/pull/4762) | Add "Open Directory" tab to Coding Mode project picker | 🟢 Available locally without copying | PR merged |

### Sinais de Roadmap

A issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) **"Migrate backend to AgentScope 2.0"** recebe destaque como prioridade de migração, sinalizando evolução arquitetural significativa para a próxima versão major. A existência de Sprint 1.3 (PR #4745) confirma planejamento ativo de release.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **📦 Empacotamento Desktop Confuso**
   > "这个项目官方使用的打包成exe的方案是什么？" [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754)
   - Falta clareza sobre diferenças entre versões Windows e Tauri
   - Necessidade de documentação de deployment

2. **🧠 Sistema de Memória "Estático"**
   > "记忆系统存在「只记录不提炼，踩了坑还会再踩」的问题" [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)
   - Crítica direta: memória não aprende, apenas acumula
   - Solicitação de state management (resolvido/não resolvido/obsoleto)
   - Necessidade de indexação cruzada temporal

3. **🖥️ Instabilidade Desktop**
   > "每次重启后，显示的智能体，不是上一次关闭时候的智能体" [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)
   - Problemas de persistência de estado
   - Shell commands mostram popup CMD
   - Cron tasks não executam corretamente sem pip install

4. **📋 UX de Conversas**
   > "看openclaw，豆包，元宝，哪个不是这个逻辑？" [#4746](https://github.com/agentscope-ai/QwenPaw/issues/4746)
   - Usuários comparam diretamente com concorrentes
   - Ordenação por última atividade é expectativa, não feature
   - Histórico de conversas é considerado "função mais utilizada"

### Satisfação

- Console web continua evoluindo com improvements de UX (PRs merged recentes)
- Sistema de plugins com reload automático (apreciado)
- Loading states adicionados melhoram feedback

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) | 能否支持全模态？目前好像QwenPaw前端无法支持音视频 | ~30 dias | Closed | — |
| [#1492](https://github.com/agentscope-ai/QwenPaw/issues/1492) | 在copaw workspace设档桇管理区 或在chat box显示档桇供下载 | ~75 dias | Closed | — |
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | 会话已经删除，但由于定时任务设置了sessionId，每次定时任务执行还是在旧的上下文中 | ~20 dias | Closed | — |

> ⚠️ **Nota**: Várias issues com alto valor estratégico (#4652 - memória, #3942 - multimodal) receberam poucos comentários apesar de criticidade. Recomenda-se triagem ativa para identificar blockers.

### PRs Em Aberto com Potencial Impacto

| # | Título | Impacto | Status |
|---|--------|---------|--------|
| [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) | Add bundled desktop qwenpaw CLI | Resolve cron path issue no desktop | Open |
| [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) | optimize Windows startup (lazy loading, caching) | ~40ms response time | Open |
| [#4762](https://github.com/agentscope-ai/QwenPaw/pull/4762) | Open Directory tab for Coding Mode | Work locally without copying | Open |
| [#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683) | fix Tauri desktop external links | Estabilidade desktop | Open |
| [#4706](https://github.com/agentscope-ai/QwenPaw/pull/4706) | fix(session): write session state atomically | Previne corrupção de JSON em crashes | Open |

---

## 📋 Métricas Resumo

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 32 | ⚠️ Alta pressão |
| PRs em aberto | 17 | ✅ Controlável |
| Taxa de fechamento (24h) | 11/43 (26%) | 📊 Moderada |
| Bugs críticos abertos | 2 | 🔴 Alerta |
| PRs merged (24h) | 11 | ✅ Bom movimento |
| Releases (24h) | 0 | — |

---

## 🔮 Prognóstico

Nas próximas semanas, espera-se:
1. **Resolução de bugs desktop** — múltiplas PRs em progresso para Windows/macOS
2. **Lançamento de Sprint 1.3** — com testes de integração ampliados
3. **Preparação para AgentScope 2.0** — migração em estágio inicial de planejamento
4. **Melhorias de UX** — ordenação de conversas, /skills autocomplete, cron UX

**Recomendação**: Priorizar resolução dos bugs críticos de desktop (#4739, #4704) e dar visibilidade à migration para AgentScope 2.0 para gerenciar expectativas da comunidade.

---

*Relatório gerado em 2026-05-29 com base em dados do GitHub de [agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-29

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** nesta data, com 23 issues e 50 PRs atualizados nas últimas 24h, sem novas releases. O ecossistema enfrenta **três incidentes de severidade S1** em produção: um bug de segurança no gateway (token rotation não revoga tokens existentes), uma falha crítica de autenticação no Slack Socket Mode, e um vazamento de dados em configs com secrets aninhadas. A comunidade está ativamente trabalhando em um PR de integração massivo (#6848) que introduz o zerocode TUI e transport RPC. O projeto demonstra vitalidade, mas a concentração de issues de segurança e bugs de compatibilidade com providers (DeepSeek, MiniMax, Anthropic) sugere pressão sobre a equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo, com múltiplos PRs aguardando review e merge. A ausência de releases sinaliza que a equipe prioriza estabilização antes de cut.

---

## 3. Progresso do Projeto

### PRs Recentes Merged/Closed

| PR | Título | Impacto |
|----|--------|---------|
| [#6994](https://github.com/zeroclaw-labs/zeroclaw/pull/6994) | fix(slack): default strict_mention_in_thread to true | Melhora UX do Slack, padronizando comportamento de menções em threads |
| [#5650](https://github.com/zeroclaw-labs/zeroclaw/pull/5650) | feat(provider): add native extended thinking for Anthropic | Adiciona suporte a reasoning chains via budget_tokens para níveis High/Max |
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | feat(integration): introduce zerocode TUI, RPC socket transport | **PR em revisão** — introduz UI interativa, transport RPC, DenyWithEdit approval e beta-2 integration |

### Destaques de Funcionalidades em Desenvolvimento

- **#6665** — `channel_send` tool com default_target: Permite ao daemon/CLI entregar mensagens a canais configurados (Telegram, Slack, Discord) via tool invocation
- **#6389** — Reply pacing per-recipient em 9 canais: Implementa rate limiting granular por canal e destinatário
- **#6957** — `file_download` tool: Ferramenta para buscar arquivos remotos para o workspace

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Tema Central |
|-------|--------|-------------|----|--------------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Bug: Incompatible with DeepSeek-V4 API format | 14 | 4 | Compatibilidade de provider |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Feature: Make `classify_channel_reply_intent` configurable | 4 | 3 | UX/Configuração de canais |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) | Bug: Multiple issues when running safely | 4 | 0 | Estabilidade em modo seguro |

### Análise de Demandas

**Compatibilidade de Providers (DeepSeek, Anthropic, MiniMax):**
A comunidade reporta problemas de incompatibilidade com modelos V4 da DeepSeek (thinking mode), além de questões com Anthropic (temperatura) e MiniMax (context_compression). A diversidadede providers indica necessidade de抽象ão mais robusta.

**Segurança em Configurações:**
Múltiplas issues (#6978, #6984, #6988) apontam para falhas em:
- Redação de secrets aninhados em arrays de objetos
- Revogação de bearer tokens após rotação
- Validação de tokens em pairing

**TUI e UX:**
O PR #6848 e issues como #6821 (move zeroclaw-tui → apps/zerocode) indicam que a experiência do usuário terminal está em evolução significativa.

---

## 5. Bugs e Estabilidade

### Incidentes S1 (Workflow Blocked)

| Issue | Severidade | Descrição | Status |
|-------|-----------|-----------|--------|
| [#6984](https://github.com/zeroclaw-labs/zeroclaw/issues/6984) | **S0/S1** | Token rotation não revoga tokens existentes — risco de segurança crítico | Aberta |
| [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) | **S1** | Slack Socket Mode rejeita todas mensagens como "unauthorized user" | Aberta |
| [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) | **S0** | Secrets aninhados em Vec<T> não são redatados em displays | Aberta |
| [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | **S1** | `zeroclaw onboard` completa seções sem escrever config | Aberta |

### Bugs S2 (Degraded Behavior)

| Issue | Severidade | Descrição |
|-------|-----------|-----------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | **S2** | DeepSeek-V4 API format incompatível com thinking mode |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | **S1** | context_compression dropa tool_calls/tool_results para MiniMax — causa loops |
| [#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976) | **S2** | WebSocket chat falha com 1006 — falta parâmetro `?agent=` |
| [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) | **S2** | Native tool serialization ignora Risk Profile e Tool Filter restrictions |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Prioritárias em Progress

| Issue/PR | Título | Prioridade | Sinais de Roadmap |
|----------|--------|------------|-------------------|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support and UX (v0.7.6) | P1 | Skills system é tema de release |
| [#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818) | Feature: --ephemeral daemon mode | P2 | Melhorias em daemon lifecycle |
| [#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) | Feature: Session-scoped runtime overrides | P2 | Configuração dinâmica por sessão |
| [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) | Feature: cron delivery.mode = "announce" | P2 | UX de cron job improvements |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | Enhancement: Faster SQLite vector search via ANN | P2 | Performance de memória vetorial |

### Trends Observados

1. **Modularização de TUI**: Move de `crates/` para `apps/` indica reestruturação de arquitetura
2. **Segurança first**: Issues de security em destaque (S0) indicam foco em hardening
3. **Multi-provider**: Esforço contínuo para compatibilidade com providers OpenAI-compatible
4. **i18n**: Múltiplas issues sobre Fluent localization (#6990, #6548) sugerem foco em internacionalização

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Feedback | Evidência |
|-----------|----------|-----------|
| **Estabilidade de Providers** | Usuários experimentam falhas ao usar DeepSeek-V4, MiniMax e Anthropic com modelos opus | Issues #6059, #6361, #6147 |
| **Segurança** | Configurações de secrets falham em cenários complexos (nested objects), expondo dados sensíveis | Issue #6978 |
| **Slack Integration** | Falha total de autenticação em Socket Mode — bloqueia workflows | Issue #6992 |
| **Modo Seguro** | Bugs múltiplos quando rodando com configurações restritivas | Issue #5470 |
| **1:1 Chats** | Assistente ignora mensagens em chats privados devido a gate classify_channel_reply | Issue #5674 |

### Cenários de Uso Identificados

- **Agentes em grupo**: Usuários esperam que assistente responda automaticamente em 1:1, mas behavior atual é group-only
- **Cron jobs**: Necessidade de modo "announce" para entregar apenas mensagem final, não todos os turns intermediários
- **Usuários CJK**: Backspace em CLI delete byte-a-byte ao invés de character — quebras UX para multilíngues
- **Operadores de custo**: Desejo de routing de classify para modelo mais barato que o agente principal (#6945)

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta/Stale há >14 dias

| Issue | Idade | Título | Bloqueio |
|-------|-------|--------|----------|
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | ~50 dias | Faster SQLite vector search via ANN | Bloqueada (needs-author-action) |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) | ~52 dias | Multiple issues when running safely | Stale, blocked |
| [#5650](https://github.com/zeroclaw-labs/zeroclaw/issues/5650) | ~48 dias | feat(provider): Anthropic extended thinking | Closed na data |
| [#6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428) | ~23 dias | feat(channels/slack): backfill thread context | Needs-author-action |
| [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) | ~52 dias | fix(tools): add ipv6 support | Needs-author-action |

### Recomendações de Priorização

1. **S0/S1 Security Fixes** — Token revocation (#6984) e nested secrets (#6978) requerem atenção imediata
2. **Slack Authentication** — #6992 bloqueia integrações enterprise
3. **Provider Compatibility** — #6059 e #6361 afetam fluxos principais com providers populares
4. **SQLite ANN** — #5570 é melhoria performance crítica que está estagnada

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 23 | Estável |
| PRs atualizados (24h) | 50 | Alta atividade |
| Releases (24h) | 0 | Sem release |
| S0/S1 abertos | 4 | **Atenção crítica** |
| PRs de segurança merged | 1 (#6988) | — |
| Issues stale >14d | 5 | Backlog growing |

---

*Relatório gerado automaticamente para zeroclaw-labs/zeroclaw em 2026-05-29*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*