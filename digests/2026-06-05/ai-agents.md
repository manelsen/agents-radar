# Resumo diário do ecossistema de agentes de IA 2026-06-05

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-04 21:28 UTC

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

**Data de referência:** 2026-06-05 | **Projetos analisados:** 7 | **Analista:** Open Source Intelligence — ZeroClaw Labs

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source atraviesa uma fase de **consolidação intensa**, evidenciada pela ausência de releases formais em todos os projetos analisados. Os volumes de atividade permanecem excepcionalmente altos — cinco dos seis projetos ativos registraram entre 50 e 78 PRs atualizados em 24 horas — sinalizando sprints de desenvolvimento simultâneos. A segurança emerge como tema transversal: SSRF validation aparece em três projetos (NanoBot, Hermes Agent, ZeroClaw), enquanto problemas de autenticação e approval system são reportados em pelo menos dois. O paradigma multi-agente ganhma força, com IronClaw e Hermes Agent liderando discussões sobre subagents, spawn lifecycle e tool inheritance. Observa-se convergência em necessidades de infraestrutura (provider plugáveis, SessionDB, observabilidade), sugerindo maturação acelerada do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Fechados/Merged | Releases | Saúde Geral |
|---------|--------------|-----------------|----------------------|----------|-------------|
| **NullClaw** | 0 | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 5 fechadas | 78 | 62 | 0 | 🟢 Excepcional |
| **Hermes Agent** | 50 atualizados | 50 | 8 | 0 | 🟡 Alta |
| **PicoClaw** | 5 total | 18 | 7 | 0 | 🟡 Estável |
| **IronClaw** | 33 ativas | 50 | 16 | 0 | 🟡 Alta |
| **CoPaw** | 24 | 25 | 15 | 1 (v1.1.11-beta.1) | 🟢 Positiva |
| **ZeroClaw** | 34 | 50 | 20 | 0 | 🟡 Alta |

**Destaque:** NanoBot domina em throughput absoluto (78 PRs/24h), enquanto CoPaw é o único projeto com release formal, indicando foco em distribuição estável. IronClaw apresenta a maior taxa de fechamento relativo (16/50 = 32%), sugerindo pipeline de review maduro.

---

## 3. Posicionamento do Projeto Principal (ZeroClaw)

### Vantagens Competitivas

| Dimensão | Posição | Observação |
|----------|---------|------------|
| **Segurança** | Liderança | OIDC Authentication Provider (#7141) e Security Enforcement Layer (#7142) representam arquitetura de segurança mais formalizada que pares |
| **Interoperabilidade** | Diferenciado | A2A Protocol Support com 7 👍 (maior reação da comunidade) posiciona ZeroClaw como hub multi-agente preferencial |
| **Diversidade de plataforma** | Avançado | FreeBSD port merged, confirming suporte cross-platform acima da média |
| **UX multi-canal** | Paridade | TUI, CLI e Web UI em evolução ativa; zerocode representa diferenciação em experiência de terminal |

### Diferenças Técnicas Arquiteturais

- **Classifier Provider separado:** PR #6945 implementa roteamento de pré-check para modelo barato — arquitetura não observada em pares
- **Outbound message queue:** PR #7190 representa mudança arquitetural significativa para non-blocking UX
- **v0.8.0 Stable-tier blockers:** Abordagem transparente de release management com critérios claros de promoção

### Tamanho e Engajamento da Comunidade

- **Métricas:** 34 issues + 50 PRs/24h — volume comparável a IronClaw e Hermes Agent
- **Engajamento qualitativo:** 7 👍 na issue A2A (#3566) indica interesse comunitário acima da média em features de interoperabilidade
- **Processo RFC formal:** Labels `type:rfc` + `needs-maintainer-review` demonstram maturidade de governança

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — SSRF Validation

| Projeto | Issue/PR | Status |
|---------|----------|--------|
| **NanoBot** | #4123 — SSRF guard para MCP | PR aberto (Alta) |
| **Hermes Agent** | #8054 — SSRF validation para local browser backend | PR em revisão (P0, ~54 dias) |
| **ZeroClaw** | Não explicitamente reportado — foco em OIDC e security layer | Em roadmap v0.9.0 |

**Análise:** Três de seis projetos estão adressando SSRF independentemente, sugerindo que a поверхня de ataque em MCP/integrations é subestimada pela indústria. A comunidade demonstra percepção de risco elevado em backends locais acessando metadata clouds (169.254.169.254).

### 4.2 Multi-Agent e Subagents

| Projeto | Feature | Progresso |
|---------|---------|-----------|
| **IronClaw** | Spawn/compensation/completion lifecycle | 3 PRs merged hoje (#4413, #4435) |
| **NanoBot** | Subagents herdam MCP tools (#4192) | PR em revisão |
| **CoPaw** | Lifecycle events para background subagents (#4955) | PR aberto |

**Análise:** A padronização de lifecycle de subagentes está emergindo organicamente. IronClaw demonstra maior maturidade com observer patterns e scoped deletion.

### 4.3 Provider Flexibility e Model Routing

- **NanoBot:** Azure AAD auth (#4126), fallback em timeout (#1121)
- **Hermes Agent:** LM Studio discovery fix (#39321)
- **ZeroClaw:** per-agent classifier_provider (#6945), model picker (#7209)
- **CoPaw:** Provider degradation automática (#4757)

**Análise:** A fragmentação de provedores (OpenAI, Azure, Ollama, LM Studio, Anthropic, local) exige arquiteturas de fallback cada vez mais sofisticadas. NanoBot e ZeroClaw lideram com implementações de fallback robustas.

### 4.4 Desktop Integration

| Projeto | Status | Escopo |
|---------|--------|--------|
| **NanoBot** | PR #4195 — Desktop shell, WebUI compartilhada | Primeira surface desktop aberta |
| **Hermes Agent** | Bugs P2 em Desktop (#38078, #39289) | Estabilização |
| **CoPaw** | PR #4669 — Tauri auto-updater | Auto-update infrastructure |
| **ZeroClaw** | PR #7019 — TTS non-opus, multi-canal | TUI com canais |

**Análise:** Desktop é investimento convergente. NanoBot acelera para abrir primeira surface; Hermes Agent estabiliza bugs; ZeroClaw expande TTS para canais.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Positioning | Público Primário |
|---------|-------------|------------------|
| **NanoBot** | Developer productivity, CLI-first | Desenvolvedores individuais e equipes técnicas |
| **Hermes Agent** | Multi-channel orchestration, Telegram-heavy | Usuários de mensageiros, automação de chat |
| **IronClaw** | Enterprise multi-agent, Reborn migration | Organizações com workflows complexos |
| **CoPaw** | Chinese platforms (QQ, Feishu, DingTalk) | Mercado sinofônico, integrações corporativas |
| **ZeroClaw** | Security-first, interoperability hub | DevOps, compliance-heavy environments |
| **PicoClaw** | Lightweight gateway, Codex/GPT integration | Simplify users, migration path from proprietary |

### 5.2 Por Arquitetura

| Projeto | Abordagem Arquitetural | Diferenciação Técnica |
|---------|------------------------|----------------------|
| **IronClaw** | Rust, Hook framework modular (LibSQL, Postgres), Reborn decomposition | Maior robustez em side effects e rollback |
| **NanoBot** | Python/CLI, hook lifecycle run-level, Azure identity | Extensibilidade via hooks, enterprise Azure |
| **CoPaw** | Python, Prompt Section Registry, Tauri desktop | Plugin injection architecture |
| **ZeroClaw** | Multi-language possível, OIDC plugável, A2A protocol | Interoperabilidade, segurança formalizada |
| **PicoClaw** | Go, singleton PID check, Codex OAuth | Foco em estabilidade de gateway, lightweight |

### 5.3 Por Maturity Stage

| Estágio | Projetos | Características |
|---------|----------|-----------------|
| **Estabilização** | PicoClaw, Hermes Agent | Foco em bug fixes, regressões, consolidação de releases |
| **Sprint intenso** | NanoBot, IronClaw, ZeroClaw | Volume alto de PRs, preparação para milestone |
| **Maturação** | CoPaw | Primeira beta release, features em review longo |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos com Iteração Rápida

| Projeto | Volume | Velocidade | Indicador de Tração |
|---------|--------|------------|---------------------|
| **NanoBot** | 78 PRs/24h | ⚡⚡⚡ | 5 bugs críticos resolvidos em 24h; preparação de release |
| **ZeroClaw** | 50 PRs/24h + 20 merged | ⚡⚡ | 3/5 bugs S1 resolvidos; FreeBSD port merged; A2A RFC accepted |
| **IronClaw** | 50 PRs/24h + 16 merged | ⚡⚡ | 3 PRs de subagent lifecycle mergeados; hook framework em progress |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Foco | Evidência |
|---------|------|-----------|
| **Hermes Agent** | Estabilidade desktop e approval | 2 bugs P2 de UX; SSRF PR em revisão há 54 dias |
| **PicoClaw** | PID singleton, regressões Web UI | Bug #2720 aberto há 36 dias sem merge; 2 PRs concorrentes |
| **CoPaw** | Context management, token tracking | PR #4433 (token info) em review há 20 dias |

### 6.3 Métricas de Saúde do Backlog

| Projeto | Issues Stale (>30d) | PRs Stale (>7d) | Taxa Resolução 24h |
|---------|---------------------|-----------------|-------------------|
| NanoBot | 1 (#912) | 4 | 83% (5/6 issues) |
| Hermes Agent | 4+ | 2 | ~16% (8/50 PRs) |
| PicoClaw | 1 (#2720) | 3 | 60% (3/5 issues) |
| IronClaw | 1 (#3283) | 5+ (hook framework) | 12% (4/33 issues) |
| CoPaw | 1 (#3891) | 2 | 54% (13/24 issues) |
| ZeroClaw | 0 | 2 | 60% (3/5 S1) |

**Análise:** NanoBot demonstra disciplina de backlog excepcional. PicoClaw e IronClaw apresentam áreas de risco em issues antigas que requerem decisão (resolver ou encerrar com justificativa).

---

## 7. Sinais de Tendência

### 7.1 Segurança como Primordial

> "A comunidade demonstra percepção de risco elevado em backends locais acessando metadata clouds."

**Evidências:**
- SSRF validation em 3 projetos simultaneamente
- OIDC Authentication Provider em ZeroClaw (#7141)
- Security Enforcement Layer plugável em ZeroClaw (#7142)
- Approval system bugs em Hermes Agent (#39275) — risco de bypass

**Tendência:** Segurança de runtime e validação de URL estão se tornando requisitos table stakes, não features diferenciadas.

### 7.2 Multi-Agent como Padrão

> "A padronização de lifecycle de subagentes está emergindo organicamente."

**Evidências:**
- Subagent lifecycle (spawn/compensation/completion) em IronClaw
- Subagents herdam MCP tools em NanoBot
- Background subagent lifecycle events em CoPaw
- Bot-to-Bot communication em Hermes Agent (#21587)

**Tendência:** Arquiteturas single-agent estão evoluindo para orchestrator-subagent patterns. A comunidade demanda ferramentas de composição e debugging multi-agente.

### 7.3 Desktop como Próxima Fronteira

> "Desktop é investimento convergente."

**Evidências:**
- NanoBot preparando primeira surface desktop aberta (#4195)
- CoPaw Tauri auto-updater (#4669)
- Hermes Agent multi-language desktop support (#39268)
- ZeroClaw TTS multi-canal (#7019)

**Tendência:** CLI/WebUI dominance está giving way a desktop-first strategies para melhorar experiência offline e reduzir dependência de browser.

### 7.4 Provider Fragmentation e Fallback Necessário

> "A fragmentação de provedores exige arquiteturas de fallback cada vez mais sofisticadas."

**Evidências:**
- Azure AAD auth em NanoBot (#4126)
- LM Studio discovery em Hermes Agent (#39321)
- Per-agent classifier_provider em ZeroClaw (#6945)
- Provider degradation automática em CoPaw (#4757)

**Tendência:** Organizações operam ambientes heterogêneos (local + cloud + enterprise). Provider abstraction e fallback automático são necessidades emergidas.

### 7.5 Observabilidade e Telemetria

> "Desenvolvedores de plugins precisam de telemetria granular de tokens para billing e análise."

**Evidências:**
- post_llm_call hook com usage info em Hermes Agent (#4169)
- Token usage info por sessão em CoPaw (#4433, 20 dias em review)
- Per-model cost attribution em Hermes Agent (#39250)
- Telemetria vaza WebSocket em ZeroClaw (#7151 — bug)

**Tendência:** A transição de "chat tool" para "production agent" exige métricas de custo, latência e qualidade por invocation.

### 7.6 Interoperabilidade A2A

> "ZeroClaw posiciona-se como hub multi-agente preferencial com A2A Protocol Support."

**Evidências:**
- 7 👍 na issue A2A (#3566) — maior reação da comunidade
- Status: blocked + accepted — priorizado mas aguardando dependências
- Comparação direta com Claude Code e OpenCode

**Tendência:** Agent-to-Agent communication via protocolo Linux Foundation está ganhando momentum. Projetos que implementam A2A cedo terão vantagem competitiva em ecossistema multi-agente.

---

## 📋 Síntese Executiva

| Dimensão | Recomendação |
|----------|--------------|
| **Segurança** | Priorizar SSRF validation em todos os canais — é dor compartilhada com risco crítico |
| **Multi-agent** | ZeroClaw está bem posicionado com A2A; IronClaw lidera implementação de lifecycle |
| **Desktop** | NanoBot acelerando; ZeroClaw deve monitorar para manter paridade |
| **Roadmap v0.8.0** | ZeroClaw em trajetória sólida — blockers identificados, roadmap transparente |
| **Backlog** | Resolver #912 (NanoBot), #2720 (PicoClaw), #3283 (IronClaw) — sinalizam direcionamento estratégico |

**Maturidade geral do ecossistema:** O ecossistema demonstra transição de "alpha features" para "production readiness" — segurança, estabilidade e observabilidade são temas dominantes. ZeroClaw mantém posição competitiva com diferenciação em segurança formalizada e interoperabilidade A2A, enquanto volumes de atividade indicam comunidade saudável e engajada.

---

*Relatório gerado automaticamente com base em dados agregados do GitHub de 2026-06-05. Métricas de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-06-05

---

## 1. Panorama do Dia

O NanoBot demonstra **atividade excepcional** em 05/06/2026, com 78 PRs atualizados nas últimas 24h — um volume que sinaliza冲刺 (sprint) intenso de desenvolvimento. Foram fechadas 5 issues e 62 PRs (merged/closed), sem novos lançamentos oficiais. A taxa de fechamento é elevada, indicando foco em consolidação e qualidade. A issue aberta mais antiga (#912, desde fevereiro) permanece sem resolução, sugerindo complexidade técnica ou dependências pendentes. A saúde geral do projeto é **sólida**, com correção de bugs críticos (fallback de modelo, reconexão MCP) avançando em paralelo a melhorias de usabilidade (atalhos de teclado, autenticação Azure).

---

## 2. Lançamentos

**Nenhuma release oficial** registrada nas últimas 24h. O projeto mantém a versão mais recente disponível no repositório principal.

> ⚠️ *Sem releases recentes. O alto volume de PRs fechados pode indicar preparação para uma futura versão.*

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (selecionados por impacto)

| # | Título | Impacto |
|---|--------|---------|
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | **feat(provider): Add support for Azure AAD based Auth** | Autenticação via Azure Identity (sem API Key) — remove dependência de credenciais fixas |
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | **Add run-level agent hook lifecycle** | Novo sistema de callbacks (`before_run`, `after_run`, `on_error`) para extensibilidade de agentes |
| [#4163](https://github.com/HKUDS/nanobot/pull/4163) | **feat(webui): add fork-from-here for user messages** | Permite ramificar conversas a partir de qualquer mensagem do usuário |
| [#4164](https://github.com/HKUDS/nanobot/pull/4164) | **fix(cli): fall back to uv pip when pip is unavailable** | Corrige instalação via `uv tool` em ambientes sem pip nativo |
| [#3984](https://github.com/HKUDS/nanobot/pull/3984) | **fix(provider): preserve OpenAI-compatible tool call ids** | Resolve IDs inconsistentes com APIs GLM-4.7 e Kimi 2.6 |
| [#4027](https://github.com/HKUDS/nanobot/pull/4027) | **fix: MCP reconnection - reset _mcp_connected on session drop** | Corrige bug crítico de reconnect de servidores MCP |
| [#3966](https://github.com/HKUDS/nanobot/pull/3966) | **fix(webui): render CLI-generated image artifacts** | Renderização de artefatos de imagem gerados via CLI na WebUI |
| [#4189](https://github.com/HKUDS/nanobot/pull/4189) | **test: improve deterministic unit test coverage** | Substitui waits temporais por relógios determinísticos em testes |
| [#4191](https://github.com/HKUDS/nanobot/pull/4191) | **增强memory管理** | Melhorias em gerenciamento de memória |

### PRs Em Aberto Notáveis

| # | Título | Status |
|---|--------|--------|
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | **feat(desktop): polish desktop shell and shared WebUI surfaces** | Preparação para primeira surface desktop aberta |
| [#4192](https://github.com/HKUDS/nanobot/pull/4192) | **feat: allow subagents to inherit MCP tools** | Permite subagentes acessarem ferramentas MCP do agente principal |
| [#4194](https://github.com/HKUDS/nanobot/pull/4194) | **Refactor capture state to use run-level hook snapshots** | Refatoração com base nos hooks adicionados em #4176 |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | **Improve tool call validation strictness** | Validação mais rigorosa de calls de ferramentas |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#912 — Support Task-Specific Model Configuration](https://github.com/HKUDS/nanobot/issues/912)**
   - **Estado:** Aberta (stale) | 📅 Criada: 2026-02-20 | 🔄 Atualizada: 2026-06-04
   - **Engajamento:** 4 comentários, 3 👍
   - **Análise:** Proposta ambiciosa para permitir modelos diferentes para conversational, tool-use e browser-use. A marcação "stale" indica que precisa de atenção ou resolução. Traz impacto significativo na arquitetura de configuração de agentes.

2. **[#1121 — Fallback model not triggered on LLM timeout](https://github.com/HKUDS/nanobot/issues/1121)**
   - **Estado:** Fechada ✅ | 📅 Criada: 2026-02-24 | 🔄 Atualizada: 2026-06-04
   - **Engajamento:** 3 comentários, 3 👍
   - **Análise:** Bug crítico resolvido. Usuários enfrentavam erros após timeout do modelo primário (ex: Gemini 503 após 600s) sem fallback — agora corrigido.

### PRs com Maior Engajamento

- **[#4195](https://github.com/HKUDS/nanobot/pull/4195)** — Desktop shell: primeira superfície desktop aberta
- **[#3968](https://github.com/HKUDS/nanobot/pull/3968)** — Comando `/skill` slash: demanda por descoberta de skills habilitadas

---

## 5. Bugs e Estabilidade

### Bugs Resolvidos Hoje

| Severidade | Issue | Descrição | Resolução |
|------------|-------|-----------|-----------|
| 🔴 Crítica | [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback model não disparava em timeout/503 | PR [#4027](https://github.com/HKUDS/nanobot/pull/4027) corrigiu reconnect MCP e fallback |
| 🔴 Crítica | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | Servidor MCP inacessível após tempo aleatório ("Session terminated") | Resolvido via PR de reconexão |
| 🟠 Alta | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | CLI App pip install falhava sob `uv tool` | PR [#4164](https://github.com/HKUDS/nanobot/pull/4164) adiciona fallback para uv pip |
| 🟠 Alta | [#3980](https://github.com/HKUDS/nanobot/issues/3980) | Tool call IDs inconsistentes com APIs OpenAI-compatíveis | PR [#3984](https://github.com/HKUDS/nanobot/pull/3984) preserva IDs originais |

### Regressões Potenciais a Monitorar

- **Tool call validation strictness** (PR [#4190](https://github.com/HKUDS/nanobot/pull/4190)): Mudança de comportamento pode afetar integrações existentes que dependerem de normalização permissiva.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento/Review

| # | Feature | Segmento | Prioridade Indicada |
|---|---------|----------|---------------------|
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | Desktop shell integration | Desktop | Alta (primeira surface desktop) |
| [#4192](https://github.com/HKUDS/nanobot/pull/4192) | Subagents herdam MCP tools | Agentes | Média |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | Comando `/skill` slash | CLI | Média |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | Rejeitar URLs HTTP inseguros antes do probe (SSRF) | Segurança/MCP | Alta |

### Features Solicitadas (Issues Abertas)

- **[#912](https://github.com/HKUDS/nanobot/issues/912)** — Task-specific model configuration (aberta há ~100 dias, stale)
- **[#4178](https://github.com/HKUDS/nanobot/issues/4178)** — Atalho Cmd/Ctrl+Shift+O para novo chat (fechada, implementada via PR)

### Sinais de Roadmap

1. **Desktop-first**: Investimento claro em superfície desktop (#4195) com WebUI compartilhada
2. **Segurança reforçada**: SSRF guard para MCP (#4123), auth Azure Identity (#4126)
3. **Extensibilidade de agentes**: Sistema de hooks run-level (#4176, #4194)
4. **Configuração flexível**: Suporte a modelos por tipo de tarefa (#912)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Issues)

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Timeout sem fallback automático | ⭐⭐⭐ Alta | Crítico — causa falhas em produção |
| Sessões MCP terminadas sem reconnect | ⭐⭐ Média | Afeta estabilidade de long-running agents |
| CLI Apps não funcionam com `uv tool` | ⭐⭐ Média | Limita adoção em ambientes modernos |
| Não é possível descobrir skills disponíveis | ⭐ Baixa | Usabilidade, resolvido com `/skill` |
| Autenticação Azure exige API Key | ⭐⭐ Média | Bloqueia adoção em políticas corporativas restritivas |

### Cenários de Uso em Evidência

- **Agentes de longa duração** com MCP servers — exigem reconexão robusta
- **Ambientes uv-based** — crescente popularidade de `uv` como package manager
- **Azure enterprise** — demanda por auth baseada em identidade (AAD)
- **Subagentes com tools compartilhadas** — novo padrão de arquitetura solicitado

### Satisfação Geral

**Indicadores positivos:**
- 62 PRs fechados em 24h → alta throughput de contribuições
- Bugs críticos resolvidos rapidamente (#1121, #4168)
- Features solicitadas (#4125 Azure auth) implementadas em <1 semana

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Status | Ação Recomendada |
|---|--------|-------|--------|------------------|
| [#912](https://github.com/HKUDS/nanobot/issues/912) | Task-Specific Model Configuration | ~100 dias | Aberta/stale | Priorizar ou encerrar com justificativa |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback model timeout | ~100 dias | ✅ Fechada | — (resolvida) |

### PRs Abertos com Potencial Impacto

| # | Título | Idade | Bloqueios |
|---|--------|-------|-----------|
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | Desktop shell | 1 dia | Review pendente |
| [#4192](https://github.com/HKUDS/nanobot/pull/4192) | Subagent MCP inheritance | 1 dia | Review pendente |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | Block symlink workspace escapes | ~5 dias | Security — necesita revisão prioritária |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | Keep read-only roots out of write paths | ~7 dias | Segurança filesystem |

### Métricas de Saúde do Backlog

- **Issues abertas antigas (>30 dias):** 1 (#912)
- **PRs abertos >7 dias:** 4 (indica possível necessidade de review)
- **Taxa de resolução (24h):** 5/6 issues (83%) ✅
- **Volume de atividade:** 78 PRs/24h — **muito acima da média**

---

## 📋 Síntese Executiva

| Dimensão | Status |
|----------|--------|
| 🔵 Atividade de desenvolvimento | **Muito Alta** (78 PRs em 24h) |
| 🟢 Qualidade de releases | **Nenhuma release** — foco em consolidação |
| 🟡 Resolution de bugs | **Alta** (5 bugs críticos resolvidos) |
| 🟡 Features em pipeline | **Sólido** (desktop, hooks, segurança) |
| 🔴 Backlog problemático | **1 issue stale** (#912) |

**Recomendação:** Priorizar review dos PRs de segurança (#4119, #4053, #4123) e resolver a issue #912 para sinalizar direcionamento estratégico ao comunidade.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório de Projeto — Hermes Agent
## NousResearch/hermes-agent | 2026-06-05

---

## 1. Panorama do dia

O Hermes Agent mantém atividade intensa com **50 issues e 50 PRs atualizados nas últimas 24h**, sem novos lançamentos. O foco atual recai sobre estabilização (2 bugs P2 abertos com impacto direto na experiência do usuário — Ctrl+C e approval de código) e expansão de plataforma (Telegram, Desktop). A comunidade demonstra interesse crescente em funcionalidades de multi-agente e infraestrutura backend (SessionDB, MCP). A taxa de PRs fechados (8) sinaliza maturidade no pipeline de code review.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.** O projeto não registrou novas versões hoje. O último ciclo de releases pode ser consultado em [Tags do repositório](https://github.com/NousResearch/hermes-agent/tags).

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (3):

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#39263](https://github.com/NousResearch/hermes-agent/pull/39263) | fix: add skill repeat guard guidance | LWright2021 | Implementa `skill-repeat-guard-v0` para reduzir chamadas redundantes de `skill_view` na mesma sessão — melhoria de UX sem alterar o SOUL.md. |
| [#39321](https://github.com/NousResearch/hermes-agent/pull/39321) | fix: add lmstudio case to provider_model_ids | webboty | Corrige descoberta de modelos LM Studio no picker (`/model`) e listagem de gateway. Resolve retorno de 0 modelos. |
| [#39289](https://github.com/NousResearch/hermes-agent/pull/39289) | fix(desktop): slash commands queued when busy and chip | ethernet8023 | Corrige dois bugs no Desktop: comandos slash enfileirados indevidamente quando agente está ocupado e vazamento de sufixo `|0` em chips. |

### PRs em destaque em revisão:

| # | Título | Impacto |
|---|--------|---------|
| [#8054](https://github.com/NousResearch/hermes-agent/pull/8054) | fix(security): apply SSRF URL validation to local browser backend **[P0]** | Aplica validação `is_safe_url()` a backends locais (Browserbase já coberto). Remove guarda `_is_local_backend()` — expõe risco real de SSRF. |
| [#39275](https://github.com/NousResearch/hermes-agent/issues/39275) | execute_code approval buttons não funcionam | Bug crítico de segurança/confirmação em gateways. |
| [#30438](https://github.com/NousResearch/hermes-agent/pull/30438) | fix(mcp): sanitize inherited PATH | Previne herança de PATH mal-formatado em subprocessos stdio MCP. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|-----|------|
| #21587 | Telegram Guest Bots, Bot-to-Bot, Stickers | feature | 8 | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/21587) |
| #23717 | RFC: Pluggable SessionDB Provider | feature | 6 | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #2613 | Local Honcho "base_url" bug | bug | 5 | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/2613) |
| #532 | /upload Command — Ephemeral Tunnel | feature | 4 | 1 | [Issue](https://github.com/NousResearch/hermes-agent/issues/532) |
| #4071 | Consolidate 4+ independent color/styling systems | bug | 4 | 0 | [Issue](https://github.com/NousResearch/hermes-agent/issues/4071) |
| #4169 | Include usage, user_id in post_llm_call hook | feature | 2 | **2** | [Issue](https://github.com/NousResearch/hermes-agent/issues/4169) |

### Análise de demanda:

**Multi-agente e colaboração (#21587):** A comunidade busca integração profunda com o update massivo do Telegram (Maio 2026) — Guest AI Bots, Bot-to-Bot e automação de chat. Indica tendência de uso do Hermes como orquestrador de agentes.

**Infraestrutura backend (#23717):** Interesse sólido em migrar de SQLite fixo para providers plugáveis (PostgreSQL, MySQL). O RFC menciona explicitamente o "Hot-Update Death Spiral" ao atualizar durante execução — dor operacional real.

**Estilização consistente (#4071):** 4 sistemas independentes de cor detectadas no codebase. Demanda por padronização, suporte a `NO_COLOR` e manutenção visual. Problema técnico que afeta experiência do usuário e acessibilidade.

**Hooks de plugins (#4169):** Alta reação (2 👍 em apenas 2 comentários) para adicionar `usage` ao hook `post_llm_call`. Indica que desenvolvedores de plugins precisam de telemetria granular de tokens para billing e análise.

---

## 5. Bugs e Estabilidade

### Bugs P1/P2 — Prioridade Alta:

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#39275](https://github.com/NousResearch/hermes-agent/issues/39275) | **P2** | execute_code approval: botões 'Approve session' / 'Always' não funcionam | Usuários无法confirmar execuções de código — risco de UX severo no Telegram e outros gateways. Causa: falta de verificação `is_approved` em `tools/approval.py`. |
| [#39281](https://github.com/NousResearch/hermes-agent/issues/39281) | **P2** | Hermes fails with gemma4 on Ollama backend | Truncamento de resposta (`finish_reason='length'`) ao usar Gemma4 — modelo para de funcionar após warning. |
| [#5142](https://github.com/NousResearch/hermes-agent/issues/5142) | **P2** | Ctrl+C durante slash commands sai da sessão | Pressionar Ctrl+C ao executar `/skills browse` encerra toda a CLI em vez de interromper o comando. |
| [#8054](https://github.com/NousResearch/hermes-agent/pull/8054) | **P0** | SSRF vulnerability in local browser backend | Backends locais navegam para IPs internos e endpoints de metadata cloud sem validação. PR em revisão. |

### Bugs P3 — Prioridade Média:

| # | Título | Área |
|---|--------|------|
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | Desktop pasted images fail with remote gateway (caminhos locais enviados ao gateway) | Desktop, vision |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Dashboard chat feature broken after update (React error #301) | TUI, Dashboard |
| [#10769](https://github.com/NousResearch/hermes-agent/issues/10769) | Cross-talk e Identity Leakage em Cron Jobs (variáveis globais) | Cron, agent |
| [#2613](https://github.com/NousResearch/hermes-agent/issues/2613) | Local Honcho "base_url" não funciona | CLI, Honcho |

### Padrões observados:

- **Segurança:** Dois problemas de segurança em revisão (SSRF, approval bypass) indicam necessidade de audit de gatekeeping.
- **Desktop app:** Múltiplos bugs relacionados a Desktop (TTS timeout, pasted images, slash commands) — componente ainda em estabilização.
- **Cron/cross-talk:** Issue de identity leakage em jobs agendados é risco de privacidade/confidencialidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em alta demanda:

**Telegram Expansion (#21587):** Proposta de 4 features game-changing para workflows multi-agente:
- Guest AI Bots (@mention em chats privados/grupos)
- Bot-to-Bot communication
- Stickers automation
- Chat automation

**Desktop app (#39268):** Multi-language support (chinês) e melhorias de interação (interrupt, guidance, queue). [Issue](https://github.com/NousResearch/hermes-agent/issues/39268)

**File Transfer (#532, #466):**
- `/upload` command para upload efêmero via túnel
- `send_file` tool para transferência sandbox→usuário

**MCP Server Management (#690):** Discovery, selective tool loading, CLI `hermes mcp`. [Issue](https://github.com/NousResearch/hermes-agent/issues/690)

**LSP Integration (#516):** Integração com Language Server Protocol para IDE-level intelligence (go-to-definition, find-references, hover). [Issue](https://github.com/NousResearch/hermes-agent/issues/516)

**Per-Goal Cost Attribution (#39250):** Telemetria granular de custos por goal, modelo e tool invocation. [Issue](https://github.com/NousResearch/hermes-agent/issues/39250)

**Loop Contracts (#21172):** Primeiro contrato declarativo para loops de agente cron: budget, stop, refresh, scope. [Issue](https://github.com/NousResearch/hermes-agent/issues/21172)

### Sinais de tendência:

1. **Multi-plataforma:** Telegram, Discord, Desktop — expansão de canais é demanda consistente.
2. **Multi-agente:** Bot-to-Bot, delegação, roles dinâmicos — tendência de uso orquestrado.
3. **Observabilidade:** Cost attribution, post_llm_call hooks, telemetry — necessidade de métricas.
4. **Infraestrutura plugável:** SessionDB providers, MCP management — maturidade de deployment.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

| Dor | Cenário | Issue |
|-----|---------|-------|
| **Atualização causa crash** | Executar `git pull`/`hermes update` durante execução bloqueia por SQLite lock | [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) |
| **Approval de código não funciona** | Botões "Approve" não persistem — preciso confirmar toda vez no Telegram | [#39275](https://github.com/NousResearch/hermes-agent/issues/39275) |
| **Ctrl+C destrói sessão** | Perco histórico ao interromper comandos lentos com Ctrl+C | [#5142](https://github.com/NousResearch/hermes-agent/issues/5142) |
| **SSRF expõe infraestrutura** | Backend local pode navegar para `169.254.169.254` (metadata cloud) | [#8054](https://github.com/NousResearch/hermes-agent/pull/8054) |
| **Modelos LM Studio invisíveis** | Setup flow funciona, mas picker não mostra modelos LM Studio | [#39321](https://github.com/NousResearch/hermes-agent/pull/39321) |
| **Roles lento com muitos arquivos** | Sincronização de diretório de roles é extremamente lenta com centenas de roles | [#36031](https://github.com/NousResearch/hermes-agent/issues/36031) — **closed** |

### Cenários de uso emergentes:

- **Pokémon playing agent** com dashboard de monitoramento (#418) — uso gamificado/autônomo.
- **Container-aware CLI para NixOS** (#7380) — deployment em containers isolados.
- **Cross-platform file upload** para messengers — arquivos grandes em Telegram/Discord.

### Satisfação/Insatisfação:

- **Positivo:** Skill repeat guard (#39263) e LM Studio discovery (#39321) resolvem problemas frictionais pontuais.
- **Frustração:** Approval system, Ctrl+C behavior e SSRF são problemas de UX críticos que afetam confiança no sistema.
- **Interesse:** Features Telegram, MCP management e cost attribution têm alta demanda mas baixa prioridade (P3) — risco de perda de momentum.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >3 dias (requerem triagem):

| # | Idade | Título | Tipo |
|---|-------|--------|------|
| [#526](https://github.com/NousResearch/hermes-agent/issues/526) | ~3 meses | Anthropic Context Editing API Integration | feature |
| [#516](https://github.com/NousResearch/hermes-agent/issues/516) | ~3 meses | LSP Integration (inspired by Kilocode) | feature |
| [#483](https://github.com/NousResearch/hermes-agent/issues/483) | ~3 meses | Post-Task Reflection & Missing Affordance | feature |
| [#532](https://github.com/NousResearch/hermes-agent/issues/532) | ~3 meses | /upload Command | feature |
| [#7380](https://github.com/NousResearch/hermes-agent/issues/7380) | ~2 meses | Container-aware interactive CLI for NixOS | feature |
| [#7184](https://github.com/NousResearch/hermes-agent/issues/7184) | ~2 meses | Discord auto-threading undocumented | docs, P3 |

### PRs stalls:

| # | Idade | Título | Status |
|---|-------|--------|--------|
| [#24295](https://github.com/NousResearch/hermes-agent/pull/24295) | ~23 dias | fix(anthropic): override SDK User-Agent | OPEN — aguarda review |
| [#28039](https://github.com/NousResearch/hermes-agent/pull/28039) | ~18 dias | fix(codex-responses): final_answer phase | OPEN — aguarda review |

### Recomendação de atenção:

- **Segurança (#8054):** PR P0 há ~54 dias — prioritize review imediato.
- **Usabilidade (#39275, #5142):** Bugs P2 afetando fluxo de trabalho — triar esta semana.
- **Feature backlog (#526, #516, #483):** Propostas maduras com 3+ meses de idade — decisões de roadmap necessárias para alinhamento com comunidade.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-05. Métricas de atividade: 50 issues, 50 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-06-05

---

## 1. Panorama do Dia

O projeto PicoClaw manteve alta atividade em 5 de junho de 2026, com **18 PRs atualizados** e **5 issues** no período de 24 horas. O desenvolvimento concentrou-se em correções de bugs críticos — especialmente dois PRs relacionados ao **PID singleton check** (#2813, #3000) que buscam resolver um crash loop causado por PIDs reutilizados pelo sistema. A comunidade também avançou em melhorias de estabilidade, como correção de erros JSON ignorados e tratamento de URLs sem scheme. Notably, **nenhuma release foi publicada** hoje, indicando que o time pode estar em fase de consolidação antes de um próximo lançamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último lançamento estável é **v0.2.9**, conforme mencionado nos issues #2972 e #2981. Issues em aberto sugerem que a documentação do manual ainda está desatualizada em relação a essa versão.

> **Nota de acompanhamento:** O PR #2995 adicionou destaques de release (v0.2.5 a v0.2.9) ao README News, fechando parcialmente #2981, mas o issue #2981 aguarda conclusão da checklist completa.

---

## 3. Progresso do Projeto

Sete PRs foram fechados/merged nas últimas 24 horas:

| PR | Título | Impacto |
|----|--------|---------|
| [#3007](https://github.com/sipeed/picoclaw/pull/3007) | `fix: preserve streamed Codex tool calls` | **Crítico** — Corrige tool calls vazios com GPT-5.5 via Codex OAuth |
| [#3004](https://github.com/sipeed/picoclaw/pull/3004) | `build(deps): bump aws-sdk-go-v2/bedrockruntime` | Atualização de dependência AWS (v1.50.6 → v1.53.3) |
| [#3003](https://github.com/sipeed/picoclaw/pull/3003) | `build(deps): bump modernc.org/sqlite` | Atualização SQLite (v1.50.1 → v1.51.0) |
| [#2996](https://github.com/sipeed/picoclaw/pull/2996) | `fix(tools): handle json.Marshal errors in exec tool responses` | **Estabilidade** — Substitui 7 casos de erros ignorados |
| [#2995](https://github.com/sipeed/picoclaw/pull/2995) | `docs: add v0.2.5~v0.2.9 release highlights` | Documentação — Fecha #2981 parcialmente |
| [#2992](https://github.com/sipeed/picoclaw/pull/2992) | `fix(session): skip main-session alias during history promotion` | **Bug crítico** — Resolvido: sessões Web UI com mensagens antigas (#2972) |
| [#2963](https://github.com/sipeed/picoclaw/pull/2963) | `build(deps): bump larksuite/oapi-sdk-go v3.9.3` | Atualização Lark (intermediária) |

**Destaque principal:** O PR [#2992](https://github.com/sipeed/picoclaw/pull/2992) resolve um bug significativo onde sessões Web UI após upgrade para v0.2.9 anexavam histórico de mensagens antigo — uma regressão que afetava diretamente a experiência do usuário.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reação)

| Issue | Título | Comentários | Prioridade | Tema |
|-------|--------|-------------|------------|------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID check não verifica identidade do processo | **8** | High | **Estabilidade/Infra** |
| [#2972](https://github.com/sipeed/picoclaw/issues/2972) | Web UI: mensagens de história antiga após upgrade v0.2.9 | 2 | High | UX/Bug Regression |
| [#2981](https://github.com/sipeed/picoclaw/issues/2981) | Manual desatualizado para v0.2.9 | 0 | Task | Documentação |

### Análise de demandas da comunidade

**1. PID Singleton Check (#2720)** — Com 8 comentários, este é o issue mais discutido. Relata que o gateway falha ao iniciar quando o PID file contém um PID reutilizado por processos do sistema (ex: `systemd-resolved`). A comunidade já submeteu dois PRs concorrentes (#2813, #3000) tentando resolver o problema, indicando atenção prioritária.

**2. Codex OAuth GPT-5.5 (#3006)** — Bug onde tool calls são perdidos quando a resposta completed está vazia, causando comportamento incorreto do assistente. Já teve PR associado (#3007) merged rapidamente.

**3. OneBot Group Chat (#3002)** — Reportado em mandarim, indica uso incorreto de `send_private_msg` ao invés de `send_group_msg` para respostas em grupo, confundindo group ID com user ID.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (5 total)

| # | Título | Severidade | Status | Resumo |
|---|--------|------------|--------|--------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID singleton crash loop | **Alta** | Aberta | Reutilização de PID por processos do sistema causa loop de crash |
| [#2972](https://github.com/sipeed/picoclaw/issues/2972) | Web UI: mensagens antigas em novas sessões | **Alta** | Fechada (via #2992) | Regressão na v0.2.9 — sessões Web UI anexavam histórico antigo |
| [#3006](https://github.com/sipeed/picoclaw/issues/3006) | Codex OAuth: tool calls perdidos com GPT-5.5 | **Alta** | Fechada (via #3007) | Empty output array na resposta completed descartava function calls |
| [#3002](https://github.com/sipeed/picoclaw/issues/3002) | OneBot: wrong API call para group replies | **Média** | Aberta | Usa send_private_msg em vez de send_group_msg |

### PRs de Estabilidade

- [#2996](https://github.com/sipeed/picoclaw/pull/2996) — 7 instances de `json.Marshal` errors tratados corretamente (antes silenciados)
- [#3000](https://github.com/sipeed/picoclaw/pull/3000) + [#2813](https://github.com/sipeed/picoclaw/pull/2813) — Verificação de identidade de processo no PID singleton check

**Métricas de estabilidade hoje:**
- 2 bugs críticos fechados (regressão Web UI, Codex tool calls)
- 1 bug crítico em aberto (PID singleton — aguardando merge)
- 1 regressão de configuração descoberta (#2956)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas issues de feature/task

| # | Título | Domínio | Sinal de Roadmap |
|---|--------|---------|------------------|
| [#2981](https://github.com/sipeed/picoclaw/issues/2981) | Atualizar manual para v0.2.9 | Docs | Manutenção de release |

### PRs com sinais de evolução do produto

| PR | Sinal |
|----|-------|
| [#3008](https://github.com/sipeed/picoclaw/pull/3008) | **Suporte a breaking changes** do Lark SDK v3.9.4 — indica integração ativa com Lark/OAPI |
| [#3001](https://github.com/sipeed/picoclaw/pull/3001) | **Workspace guard** agora aceita URLs sem scheme (ex: `curl wttr.in/Beijing`) — melhoria de UX para ferramentas |
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | **Comando /context** agora exibe thresholds de summarize e compress — melhoria de transparência ao usuário |
| [#2934](https://github.com/sipeed/picoclaw/pull/2934) | **WhatsApp native mode** via `use_native: true` — expansão de canais suportados |
| [#2947](https://github.com/sipeed/picoclaw/pull/2947) | **Correção de ID do modelo Claude Sonnet 4.6** — indica suporte a novos modelos Anthropic |

**Dependências atualizadas por Dependabot:**
- `anthropics/anthropic-sdk-go`: 1.26.0 → 1.46.0
- `larksuite/oapi-sdk-go`: 3.7.5 → 3.9.4
- `aws-sdk-go-v2/bedrockruntime`: 1.50.6 → 1.53.3
- `modernc.org/sqlite`: 1.50.1 → 1.51.0

> **Indicação de roadmap:** O projeto está investindo em estabilidade de integrações (Lark, AWS, Anthropic), expansão de canais (WhatsApp native), e experiência de developer (workspace guard, thresholds no contexto).

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Issue | Impacto |
|-----|-------|---------|
| **Crash loop ao reiniciar gateway** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Crítico — gateway não inicia quando SO reutiliza PID |
| **Mensagens antigas aparecem em novas sessões Web UI** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) | Alto — experiência de usuário degradada após upgrade |
| **Ferramentas bloqueiam URLs úteis (ex: wttr.in)** | [#3001](https://github.com/sipeed/picoclaw/pull/3001) | Médio — false positives no workspace guard |
| **Configuração de canais sobrescrita pelo security.yml** | [#2956](https://github.com/sipeed/picoclaw/pull/2956) | Médio — usuários perdem `enabled: true` ao adicionar credenciais |
| **Documentação defasada** | [#2981](https://github.com/sipeed/picoclaw/issues/2981) | Baixo — atrito para novos usuários |

### Cenários de uso inferidos

- **Usuários em produção com serviços systemd** — vulneráveis ao bug de PID singleton
- **Usuários de Web UI** — afetados pela regressão de histórico de mensagens
- **Usuários de Codex OAuth + GPT-5.5** — ferramenta tool-use não funciona corretamente
- **Usuários FreeBSD** — um report (#2972) veio de FreeBSD-15.0

### Satisfação/Iinsatisfação

**Positivo:** Resposta rápida da equipe — bugs críticos (#2972, #3006) foram fechados com PRs no mesmo dia.
**Negativo:** Issue #2720 (PID singleton) está aberto desde 30 de abril com 8 comentários mas ainda sem merge de solução, indicando possível complexidade técnica ou necessidade de consenso sobre abordagem.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há mais tempo

| # | Título | Criado | Dias | Prioridade | Risco |
|---|--------|--------|------|------------|-------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID check não verifica identidade | 2026-04-30 | ~36 dias | **High** | Crítico — bloqueia produção |
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | security.yml sobrescreve estado enabled | 2026-05-27 | ~9 dias | **High** | Usuários perdem configuração |
| [#2934](https://github.com/sipeed/picoclaw/pull/2934) | WhatsApp native mode com use_native flag | 2026-05-24 | ~12 dias | Média | Feature request pendente |
| [#2947](https://github.com/sipeed/picoclaw/pull/2947) | claude-sonnet-4.6 model ID com hifens | 2026-05-26 | ~10 dias | Média | API errors para usuários |

### PRs stale (sem atualização recente)

| PR | Título | Status | Idade |
|----|--------|--------|-------|
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | verify gateway identity before blocking startup | Aberto | ~29 dias |
| [#2934](https://github.com/sipeed/picoclaw/pull/2934) | allow whatsapp native mode | Aberto | ~12 dias |
| [#2947](https://github.com/sipeed/picoclaw/pull/2947) | correct claude-sonnet-4.6 model ID | Aberto | ~10 dias |

---

## Métricas Consolidada — 2026-06-05

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 2 | — |
| Issues fechadas | 3 | ↑ Positivo |
| PRs abertos | 11 | — |
| PRs fechados/merged | 7 | ↑ Positivo (highlights: #2992, #3007, #2996) |
| Releases | 0 | — |
| Bugs críticos abertos | 2 | ⚠️ #2720, #3002 |
| Bugs críticos fechados | 2 | ✓ #2972, #3006 |
| PRs de dependências | 5 | Atualização contínua |
| Issues mais velhas pendentes | 1 (>30 dias) | ⚠️ #2720 |

---

**Recomendação prioritária:** Revisar e-merge do PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) ou [#3000](https://github.com/sipeed/picoclaw/pull/3000) para resolver o bug de PID singleton que afeta ambientes de produção. O issue #2720 está open há mais de um mês e tem 8 comentários indicando frustração da comunidade.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto IronClaw — 2026-06-05

---

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade** hoje, com 33 issues e 50 PRs atualizados nas últimas 24h, sinalizando impulso significativo no desenvolvimento. O foco predominante continua na migração do Reborn — plataforma proprietária de agentes — com pelo menos 7 issues e 9 PRs diretamente associados a essa linha de trabalho. Dois PRs de correção importantes foram mergeados (#4413, #4435), resolvendo problemas críticos de subagentes. A base de código permanece sem releases formais, mantendo o ciclo de desenvolvimento em feature branches. A equipe demonstra priorização clara de estabilidade (regressões, segurança) sobre novas funcionalidades.

---

## 2. Lançamentos

**Nenhum release formal nas últimas 24h.** O projeto continua em режим активной разработки sem versionamento público.

> Nota: A ausência de releases formais indica que mudanças estão sendo acumuladas para um próximo milestone, possibly relacionado à migração do Reborn.

---

## 3. Progresso do projeto

### PRs mergeados/fechados ( destaque )

| PR | Título | Impacto |
|----|--------|---------|
| [#4413](https://github.com/nearai/ironclaw/pull/4413) | Fix subagent completion observer delivery | Corrige duplicação de writes de resultados e metadata recovery |
| [#4435](https://github.com/nearai/ironclaw/pull/4435) | fix subagent spawn compensation | Adiciona deleção scoped de threads e rollback de side effects |

### PRs abertos relevantes

| PR | Título | Status |
|----|--------|--------|
| [#4440](https://github.com/nearai/ironclaw/pull/4440) | Handle deferred compaction ranges | Adiciona `LoopCompactionOutcome` com estados `Compacted`/`Deferred` |
| [#4466](https://github.com/nearai/ironclaw/pull/4466) | Pair trigger creator during trigger create | Adiciona hook de lifecycle para trigger creation |
| [#4467](https://github.com/nearai/ironclaw/pull/4467) | Fix model-visible HTTP result budgeting | Implementa `ToolCallHttpEgress` com caps de tamanho |

### Avanços observados

- **Reborn Loop Stability**: Resolved two critical subagent lifecycle issues (completion delivery e spawn compensation), indicando maturização do subsistema de agentes.
- **Hook Framework**: Múltiplos PRs (3951, 3938, 3931, 3936, 3937) estão em progresso para activar o framework de hooks em produção, separados em crates modulares (LibSQL, Postgres backends).
- **Audit Trail**: PRs 4021-4026 endereçam bypass de auditoria em tool execution, fortalecendo compliance.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Prioridade |
|-------|--------|-------------|------------|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Add ProductWorkflow and InboundTurnService facade | 6 | suggested_P0 |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Add Slack ProductAdapter MVP | 6 | Closed |
| [#4424](https://github.com/nearai/ironclaw/issues/4424) | builtin.spawn_subagent ausente do tools array | 4 | Closed |

### Análise de demandas

**Reborn Migration (Issue #3280)**: Continua sendo o tema central, gerando discussions significativas. A adição do `ProductWorkflow` facade representa a ponte entre ProductAdapters e serviços host-layer do Reborn. pelo menos 10 issues relacionadas demonstram a complexidade do refactoring.

**Slack Integration (Issue #3857)**: Resolvida — MVP de Slack ProductAdapter com credenciais pré-configuradas foi mergeado, habilitando DMs e app mentions.

**Tool Surface Inconsistency (Issue #4424)**: Resolvida — O modelo era instruído via system prompt sobre `builtin.spawn_subagent`, mas a tool array estruturada não incluía. Corrigido para alinhamento de capabilities.

**Múltiplas issues de 03/06 reportadas por henrypark133** demonstram análise detalhada da surface do Reborn:
- #4425: HTTP builtin sem HTML strip, 10MB floor
- #4426: Capability surface resolver hardcoded para AllowAll
- #4427: Loop exit reason invisível no tracing
- #4428: skill_list retornando 14KB para 31 skills
- #4429: Prompt bundle rebuilt a cada chamada de modelo

---

## 5. Bugs e estabilidade

### Bugs críticos resolvidos

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#4424](https://github.com/nearai/ironclaw/issues/4424) | **Alta** | builtin.spawn_subagent advertised mas ausente do tools array — modelo não consegue chamar | Closed |
| [#4360](https://github.com/nearai/ironclaw/issues/4360) | **Alta** | `$ref` schemas pulam validação; `capability_info` vaza schemas; recursão sem depth guard | Closed |
| #4413 + #4435 | **Alta** | Duplicação de writes e rollback incompleto em subagent lifecycle | Closed |

### Regressões identificadas

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#4022](https://github.com/nearai/ironclaw/issues/4022) | HTTP response error tornou-se run-aborting após #4014 | Open |

### Bugs em investigação

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#4458](https://github.com/nearai/ironclaw/issues/4458) | **Média** | Docker mount falhando no Windows por Extended-Length Path prefix (muitos colons) |
| #4425 | **Média** | HTTP builtin sem HTML strip, output até 1.2MB |
| #4427 | **Média** | Loop exit reason não aparece em logs |
| #4428 | **Média** | skill_list sem pagination, retornando 14KB |

> **Alerta de estabilidade**: Issues #4425-#4429 indicam surface do Reborn ainda com gaps de qualidade que afetam tanto segurança (capability_info leaking) quanto usabilidade (HTTP output size, prompt rebuild overhead).

---

## 6. Pedidos de features e sinais de roadmap

### Novas features identificadas

| Issue | Área | Descrição |
|-------|------|-----------|
| [#4472](https://github.com/nearai/ironclaw/issues/4472) | Triggers | Adicionar activation state para trigger create pairing |
| [#4471](https://github.com/nearai/ironclaw/issues/4471) | Architecture | Track Reborn runtime decomposition (arquivo >3000 linhas) |
| [#4470](https://github.com/nearai/ironclaw/issues/4470) | Architecture | Refatorar reborn composition em owned crates com CI boundaries |
| [#4469](https://github.com/nearai/ironclaw/issues/4469) | Architecture | Track factory decomposition |
| [#4439](https://github.com/nearai/ironclaw/issues/4439) | WebUI | Tornar runs de automação agendadas clicáveis |
| [#4381](https://github.com/nearai/ironclaw/issues/4381) | Auth | Adicionar canonical Reborn identity resolver para OAuth |

### Roadmap signals

**Múltiplos issues "suggested_P2" abertos hoje** (4442-4447) indicam trabajo em progresso para:
1. OpenAI-compatible API ingress contracts (#4442)
2. Idempotency e product refs (#4443)
3. Chat Completions via ProductWorkflow (#4444)
4. Responses API routing (#4445)
5. SSE streaming translation (#4446)
6. Compatibility e security tests (#4447)

Estes items são dependências do epic #3283, sugerindo que a migração OpenAI-compatible está em fase avançada de implementação.

---

## 7. Resumo de feedback dos usuários

### Dores identificadas

1. **Visibilidade de debug**: Loop exit reasons não aparecem no tracing (#4427), dificultando diagnóstico de falhas em produção.
2. **Output inflation**: HTTP builtin sem limites efetivos produz outputs de 1.2MB que saturam a janela de contexto.
3. **Performance por 호출**: Prompt bundle reconstruído a cada chamada de modelo — caches de identity e skills sempre frios (#4429).
4. **Windows compatibility**: Usuários Windows não conseguem executar sandbox docker (#4458).

### Cenários de uso emergentes

- **Subagent orchestration**: Crescente complexidade em spawn/compensation/completion — indica adoção de padrões multi-agente.
- **Slack integration**: MVP mergeado demonstra demanda por canais de comunicação além de WebUI.
- **OAuth lifecycle**: Problemas com Google OAuth refresh token (#4160) indicam necessidades de token management mais robusto.

### Satisfação

- O merge de #3857 (Slack MVP) resolve demanda de integração de comunicação.
- Fixes de subagent lifecycle (#4413, #4435) resolvem dores de confiabilidade reportadas.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa (>3 dias sem atividade)

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | Migrate OpenAI-compatible APIs onto Reborn | 30 dias | suggested_P2 |
| [#4238](https://github.com/nearai/ironclaw/issues/4238) | Project product-auth into CredentialAccountStore | 7 dias | — |
| [#4379](https://github.com/nearai/ironclaw/pull/4379) | Migrate read-only commands to Reborn (PR) | 2 dias | — |

### Issues architecturalmente críticas

| Issue | Título | Risco |
|-------|--------|-------|
| [#4470](https://github.com/nearai/ironclaw/issues/4470) | Refactor reborn composition em owned crates | Acumulação de responsabilidades no crate principal |
| [#4471](https://github.com/nearai/ironclaw/issues/4471) | Track runtime decomposition | Arquivo runtime.rs excedendo budget de 3000 linhas |
| [#4465](https://github.com/nearai/ironclaw/issues/4465) | Define subagent cancel/rollback cleanup policy | Decisão de política pendente |

### PRs aguardando review

Múltiplos PRs do hook framework (3931, 3936, 3937, 3938, 3951) estão abertos há ~13 dias sem menção de status. Recomenda-se priorização para enable de produção do hook framework.

---

## Métricas-resumo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 29 |
| Issues fechadas (24h) | 4 |
| PRs abertos | 34 |
| PRs mergeados/fechados (24h) | 16 |
| Releases | 0 |
| Taxa de resolução | 12% (4/33) |
| Engajamento (comentários) | 33 issues, top 6 com >1 comentário |

---

*Relatório gerado em 2026-06-05. Dados do GitHub nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-06-05

## 1. Panorama do dia

O projeto CoPaw demonstra alta atividade com **49 eventos totais** nas últimas 24h (24 issues, 25 PRs). A comunidade está particularmente ativa em melhorias de estabilidade, com múltiplos bugs de crashes no comando `/compact` sendo resolvidos em cascata, e novas features de usabilidade ganhando tracción. O lançamento da versão **v1.1.11-beta.1** trás correções críticas de config e refatorações em cron jobs. A saúde geral do projeto é positiva, com 15 de 25 PRs já merged/fechados, indicando bom ciclo de review e merge.

---

## 2. Lançamentos

### v1.1.11-beta.1
**Data:** 2026-06-04

**Changes included:**
| PR | Autor | Descrição |
|---|---|---|
| #4827 | @szetohoyan | fix(config): add ProviderManager fallback to get_model_max_input_length |
| #4803 | @lalaliat | refactor(cron): disable push bubbles for cron jobs of type 'agent' |

**Observações:**
- Sem breaking changes identificadas
- Correção de fallback melhora resiliência em ambientes sem provider configurado
- Refatoração de cron jobs otimiza comportamento de notificações push

---

## 3. Progresso do Projeto

### PRs Merged/Closed (15 total)

| PR | Autor | Tipo | Impacto |
|---|---|---|---|
| [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) | @qbc2016 | fix(mcp) | **Crítico** — Sanitiza tool names com "." que rejeitavam APIs OpenAI |
| [#4954](https://github.com/agentscope-ai/QwenPaw/pull/4954) | @qbc2016 | fix(file_io) | Asyncifica writes com aiofiles, elimina blocking I/O |
| [#4952](https://github.com/agentscope-ai/QwenPaw/pull/4952) | @yutai78786 | perf(ci) | Migra coverage para py3.13 (30-50% faster) |
| [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) | @hanson-hex | test(console) | Adiciona ~100 test cases para frontend (milestone completion) |
| [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | @szetohoyan | feat(feishu) | Suporte a interactive cards e refactor de parsing |
| [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) | @celestialhorse51D | feat(channels) | QR code authorization para QQ channel |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | @wangfei010313 | fix(browser) | Mata entire process tree no Windows, limpa locks |
| [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | @wangfei010313 | fix(pet) | Auto-install pyside6-essentials missing no v1.1.9 |
| [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) | @EliasMei | feat(plugins) | Prompt Section Registry para plugins injetarem system prompts |
| [#4925](https://github.com/agentscope-ai/QwenPaw/pull/4925) | @hongxicheng | fix(channel) | Preserva acl_sender_id durante payload merge |
| [#4928](https://github.com/agentscope-ai/QwenPaw/pull/4928) | @xiutianlin | fix(skills) | Resolução de download size limit excedido |

### PRs Abertos em Review (10)

| PR | Autor | Tipo | Status |
|---|---|---|---|
| [#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955) | @splash-li | feat | Lifecycle events para background subagents |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | @jinglinpeng | feat | Tauri auto-updater para desktop |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | @yuanxs21 | feat | Token usage info por conversa ( longstanding) |
| [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) | @hxnan | feat | Plugin OpenSandbox para shell isolado |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | @EliasMei | plugin | DataPaw — 12 BI skills (under review) |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | @ekzhu | feat(acp) | Advertise commands, surface errors, meta info |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | @wangfei010313 | refactor | Decouple plugin loader do agent startup |
| [#4932](https://github.com/agentscope-ai/QwenPaw/pull/4932) | @hongxicheng | fix | Prevenir message merging no DingTalk com suffix collision |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Autor | Tipo | Comentários | Detalhes |
|---|---|---|---|---|
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | MCQSJ | bug | **20** | Console UI tool calls não aparecem até refresh — RESOLVIDO |
| [#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) | rescodexa | enhancement | **6** | Autocomplete de skills com "/" — RESOLVIDO |
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | LI-VIOLIENT | suggestion | **4** | DeepSeek prefix caching ~95%, otimização potencial de custo |
| [#4875](https://github.com/agentscope-ai/QwenPaw/issues/4875) | manjieqi | question | **4** | uv virtualenv reset após update — RESOLVIDO |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | gavinwang668 | bug | **4** | Windows hang em "Waiting for HTTP ready" — RESOLVIDO |

**Análise:**
- **Console UI stability** é tema recorrente — bug #4644 (20 comments) indica frustração significativa com ferramenta calls invisíveis
- **DeepSeek cost optimization** (#3891) demonstra interesse em economia de tokens — 95% cache hit ainda deixa 5% em pricing 4x mais caro
- **Feature requests de UX** (autocomplete skills, token info) indicam maturização da base de usuários

---

## 5. Bugs e Estabilidade

### Crashes Críticos Resolvidos Hoje

| Bug | Severidade | Status | Impacto |
|---|---|---|---|
| [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956) `AttributeError: 'str' object has no attribute 'get'` no context compact | **Alta** | CLOSED | Afeta todas interações de agent; flooda logs |
| [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953) `/compact` crash com mixed-type list | **Alta** | CLOSED | Relacionado — mesma root cause |
| [#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918) MCP tool name com "." quebra gpt-5.5 | **Alta** | CLOSED | Bloqueia ferramentas MCP específicas |

### Bugs Abertos

| Bug | Severidade | Status |备注 |
|---|---|---|---|
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) `/compact` ignora max_input_length, usa 128K default | **Alta** | OPEN | Afeta modelos com contextos maiores |
| [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) Task Status API retorna stale "running" | **Média** | OPEN | Afeta consumers de API de tasks |
| [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) DeepSeek respostas colapsadas em thinking | **Baixa** | OPEN | UX issue |
| [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) Latex formulas com display anormal | **Baixa** | OPEN | Rendering issue |
| [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) Desktop não acessível via LAN | **Média** | OPEN | Questão de configuração rede |

### Issue de Estabilidade Severa (Close-and-review-later)

| Issue | Autor | Descrição | Impacto |
|---|---|---|---|
| [#4946](https://github.com/agentscope-ai/QwenPaw/issues/4946) Plugin import failure blocks startup 6+ min | @feng183043996 | ImportError de plugin causa freeze total, canais ficam unresponsive | **Crítico** — sistema indisponível por minutos |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alto Potencial para Próxima Versão

| Feature | Issue | Autor | Upvotes | Comentários | Prioridade |
|---|---|---|---|---|---|
| **Token usage por sessão** | [#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767) | @wheza99 | 0 | 2 | Alta — PR #4433 em review |
| **Provider degradation automática** | [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) | @ziyu-code | 0 | 3 | Alta — similar ao cc-switch |
| **Interrupt agent execution** | [#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961) | @feng183043996 | 0 | 1 | Alta — UX crítica |
| **Context size na interface** | [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782) | @rescodexa | 0 | 2 | Alta |
| **OpenSandbox support** | [#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951) | @hxnan | 0 | 1 | Média — PR #4934 em review |
| **Atalho para arquivos gerados** | [#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786) | @rescodexa | 0 | 2 | Média |
| **Cron shell script direct execution** | [#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950) | @feng183043996 | 0 | 1 | Média |

### Sinais de Evolução de Roadmap

1. **Desktop auto-update** (PR #4669) — indica foco em distribuição desktop mais robusta
2. **ACP metadata expansion** (PR #4949) — suporte melhorado para clients alternativos
3. **Plugin registry enhancements** (PR #4804) — ecossistema de plugins amadurecendo
4. **DataPaw BI plugin** (PR #4622) — diversificação de casos de uso além de chat

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **UI/UX Console** | Tool calls não aparecem em tempo real; Latex rendering; respostas de DeepSeek colapsadas | Alta |
| **Context Management** | Falta visibilidade de tokens por sessão; `/compact` não respeita limites do modelo | Alta |
| **Plataforma Windows** | Desktop não acessível via LAN; hangs no startup; plugin import blocks 6+ min | Alta |
| **Stabilidade** | Crashes no context compact; API status stale; message merging incorreto | Alta |
| **Integrações** | MCP tool names com "." rejeitados; prefix caching DeepSeek sub-ótimo; skill market download limits | Média |

### Cenários de Uso Evidenciados

- **Agentes de produção**: Context compaction, token tracking, multi-provider fallback
- **Desenvolvimento local**: Plugin loading, desktop environment, cross-drive project access
- **Integração corporativa**: Feishu cards, DingTalk message routing, ACP clients
- **Análise de dados**: DataPaw plugin com 12 BI skills (PR #4622)

### Tendência de Satisfação

| Metrica | Observação |
|---|---|
| Resolução de bugs | 13/24 issues fechados em 24h (54%) — tempo de resposta excelente |
| Engajamento | 4+ issues com 4+ comentários indicam comunidade ativa |
| Primeira contribuição | 3 PRs de first-time contributors merged/under review |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| Issue | Criado | Atualizado | Tipo | Prioridade |
|---|---|---|---|---|
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) DeepSeek prefix caching optimization | 2026-04-27 | 2026-06-04 | suggestion | **Alta** — impacto financeiro direto |
| [#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786) Atalhos para arquivos gerados | 2026-05-28 | 2026-06-04 | enhancement | Média |
| [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) Provider degradation automática | 2026-05-28 | 2026-06-04 | enhancement | **Alta** |
| [#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767) Token info por sessão | 2026-05-28 | 2026-06-04 | enhancement | **Alta** |
| [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782) Context size na interface | 2026-05-28 | 2026-06-04 | enhancement | Alta |

### PRs Estagnados

| PR | Criado | Status | Notas |
|---|---|---|---|
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw plugin | 2026-05-22 | OPEN/Under Review | 13 dias em review — complexo |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) Token usage info | 2026-05-15 | OPEN/Under Review | 20 dias — feature importante, needs review |

### Recomendações

1. **Priorizar review** de PRs #4433 (token info) e #4622 (DataPaw) — contribuidores aguardando
2. **Engajar** com #3891 — otimização de custos DeepSeek tem ROI claro
3. **Confirmar status** de #4757 e #4782 — similares a features já em pipeline
4. **Reproduzir** #4946 em ambiente para validar severity de plugin startup block

---

## Métricas Resumo do Dia

| Metrica | Valor |
|---|---|

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data:** 2026-06-05 | **Analista:** Open Source Intelligence — ZeroClaw Labs

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade operacional** nesta data: 34 issues e 50 PRs foram atualizados nas últimas 24h, com 20 PRs já merged/fechados. Não há lançamentos oficiais marcados (v0.8.0 e v0.8.1 seguem como milestones ativos), e o trabalho concentra-se em **estabilidade, UX multi-canal e preparação de release**. Vários bugs de severidade S1–S2 (workflows bloqueados) foram adressados simultaneamente em runtime, TUI e web UI, sinalizando foco em qualidade de experiência. A comunidade demonstra demanda forte por recursos de segurança (confirmação de shell, OIDC, provedor plugável) e interoperabilidade (A2A, LSP, computer-use), alinhando-se com a trajetória de amadurecimento do projeto.

---

## 2. Lançamentos

**Nenhum release oficial nas últimas 24h.**

Os milestones ativos são:
- **v0.8.0** — tracker em [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112): foca em promoção de config e tool-call-parser para Stable-tier, além de breaking changes em schema/config e decisões de release-default. Bloqueadores identificados como "Stable-tier blockers".
- **v0.8.1** — tracker em [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970): fila de integração de canais, providers e tools para versão patch. Complementa o esforço de arquitetura de longo prazo (plugins).

> **Nota:** A ausência de releases recentes (ou seja, nada merging nos trackers dos milestones) sugere que a equipe está em fase de validação interna antes de marcar versões.

---

## 3. Progresso do projeto

### PRs merged/fechados nas últimas 24h

| PR | Autor | Tamanho | Impacto |
|----|-------|---------|---------|
| [#7095](https://github.com/zeroclaw-labs/zeroclaw/pull/7095) `fix(ollama): keep structured tools prompt-guided` | Audacity88 | M | Corrigepath de tools para Ollama, revertendo conversão nativa quando `supports_native_tools() == false`. |
| [#6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) `feat(agents): per-agent classifier_provider` | kanmars | M | Permite rotear pré-check de intenção de reply para modelo mais barato, separando do modelo principal do agente. |
| [#7217](https://github.com/zeroclaw-labs/zeroclaw/pull/7217) `feat(dist): FreeBSD port` | singlerider | — | Adiciona porta FreeBSD em `dist/freebsd/`. |
| [#7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) closed como parte do cycle | tidux | — | Bug: RPC sessões reaped após 10 min idle; resolução integrada via fix não identificado diretamente no diff. |

### PRs abertos de destaque (por tamanho e risco)

| PR | Autor | Tamanho/Risco | Descrição |
|----|-------|---------------|-----------|
| [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) `feat(zerocode): outbound message queue` | singlerider | XL / high | Substitui blocking input por queue com sidebar em zerocode; mudança arquitetural significativa. |
| [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) `feat(zerocode): /model e /model-provider picker` | singlerider | XL / high | Adiciona switchers de modelo/provider in-session com busca e picker em duas fases. |
| [#7158](https://github.com/zeroclaw-labs/zeroclaw/pull/7158) `fix(zerocode): graceful reconnect` | singlerider | M | TUI reconecta gracefully após daemon disconnect; reestabelece event loop funcional. |
| [#7019](https://github.com/zeroclaw-labs/zeroclaw/pull/7019) `fix(channels): TTS non-opus via sendAudio` | mov-xound-glitch | L | Entrega TTS para canais que não usam Opus; depende de #6968. |

**Conclusão:** O projeto demonstra entrega acelerada em UX (TUI e zerocode) e estabilidade de canais/providers.

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários)

| Issue | Autor | Comentários | 👍 | Resumo |
|-------|-------|-------------|-----|--------|
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | ufukbakan | 6 | 0 | Bug: Ollama Provider call failed when tools are needed — **RESOLVIDO** |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | NiuBlibing | 5 | 0 | Feature: computer-use support (screenshots + input) — comparece com Codex/Peekaboo |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 5queezer | 5 | **7** | Feature: A2A Protocol Support — **maior contagem de reações** |
| [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | theonlyhennygod | 3 | 0 | Bug: Twitter/X não disponível em binary pré-built — **RESOLVIDO** |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | singlerider | 3 | 0 | Feature: security enforcement layer como provider plugável |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | singlerider | 3 | 0 | Feature: OIDC Authentication Provider (RPC/WSS) |

### Análise dos temas quentes

1. **Interoperabilidade (A2A, #3566):** Com 7 👍, é a issue com maior suporte popular. A demanda por comunicação Agent-to-Agent via protocolo aberto da Linux Foundation demonstra que a comunidade quer ZeroClaw como hub multi-agente. Status: `blocked` + `accepted`, indicando que está priorizado mas aguardando dependências.

2. **Computer-use (#6909):** Sugere que usuários querem ZeroClaw competindo diretamente com OpenAI Codex. O escopo inclui screenshots e mouse/keyboard events. É uma feature de alto impacto para casos de uso de desktop.

3. **Segurança como primitiva (#7142, #7141):** Duas issues de mesmo autor em sequência — indicam roadmap de segurança formal com OIDC e camada de enforcement plugável para v0.9.0. Isso é consistente com maturação do projeto.

4. **Bugs críticos resolvidos (#5962, #7069):** Resolução rápida (em ~2 dias para #5962, ~2 dias para #7069) mostra tempo de resposta saudável da equipe.

---

## 5. Bugs e estabilidade

### Severidade S1 (workflow bloqueado)

| Issue | Status | Descrição | Link |
|-------|--------|-----------|------|
| `#5962` | CLOSED | Ollama Provider falha quando tools são necessárias | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| `#7083` | CLOSED | Windows shell mangles comandos com aspas duplas | [#7083](https://github.com/zeroclaw-labs/zeroclaw/issues/7083) |
| `#7125` | OPEN | TUI freeze quando daemon disconnects | [#7125](https://github.com/zeroclaw-labs/zeroclaw/issues/7125) |
| `#7155` | OPEN | Necessidade de tier de confirmação para shell commands de alto risco | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| `#7179` | CLOSED | RPC sessions reaped após 10 minutos idle | [#7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) |
| `#7197` | OPEN | Web toolbar carrega lento e spawna cmd windows no Windows | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) |

### Severidade S2 (comportamento degradado)

| Issue | Status | Descrição | Link |
|-------|--------|-----------|------|
| `#7126` | OPEN | "Clear all" no web UI limpa apenas frontend, não backend | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) |
| `#7143` | OPEN | Agente faz comandos shell duplicados até max_tool_iterations | [#7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) |
| `#7151` | OPEN | Telemetria de tool_call vaza no WebSocket, renderizando cards "unknown" | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) |
| `#7225` | OPEN | WhatsApp group replies ignorados quando mention_only=true | [#7225](https://github.com/zeroclaw-labs/zeroclaw/issues/7225) |

### Bugs de UI/UX reportados

- **Timestamps dentro de bolhas** ([#7157](https://github.com/zeroclaw-labs/zeroclaw/issues/7157)): Renderização incorreta de metadata no web chat.
- **Reload banner persistente** ([#7156](https://github.com/zeroclaw-labs/zeroclaw/issues/7156)): Banner `gateway.paired_tokens` nunca limpa.
- **i18n: chaves faltando** ([#7139](https://github.com/zeroclaw-labs/zeroclaw/issues/7139)): Botões de toolbar em inglês independente do idioma selecionado.
- **Repo "huge as hell"** ([#7211](https://github.com/zeroclaw-labs/zeroclaw/issues/7211)): Relatado como S3, mas indica crescimento de repo como preocupação de longo prazo.

### Análise de estabilidade

Dos 5 bugs S1, 3 já estão **CLOSED**, indicando resposta rápida. Os dois restantes (#7125 e #7155) estão abertos — #7125 tem PR candidato [#7158](https://github.com/zeroclaw-labs/zeroclaw/pull/7158) em progresso. Os bugs S2 revelam padrão de **interfaces cruzadas** (web UI ↔ gateway backend, Slack ↔ shell tool) — área que merece cobertura de testes mais robusta.

---

## 6. Pedidos de features e sinais de roadmap

### Features P1 (alta prioridade)

| Issue | Título | Sinais de roadmap |
|-------|--------|-------------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Confirmação por-execução para shell commands + política allow/ask/deny | Alinhamento com Claude Code; segurança de runtime |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability & context-window config (vision, context_window) | Configuração granular de modelos; UI com indicador used/total |
| [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) | Tracker: v0.8.0 release queue e Stable-tier blockers | Migração para estabilidade正式 |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | Tracker: v0.8.1 integration/channel/provider/tool PR queue | Entrega incremental pós-v0.8.0 |

### Features P2 (média prioridade)

- **#6909** — computer-use (screen + mouse/keyboard): concorre com Codex e Peekaboo; alto potencial de diferenciação.
- **#3566** — A2A Protocol Support: 7 👍, blocked+accepted, maior interesse da comunidade.
- **#5907** — LSP support: reduzir hallucination em código local; comparação com Claude Code e OpenCode.
- **#7138** — Gateway web chat file upload: expõe protocolo `file/attach` no UI.
- **#7137** — Slash commands no gateway web chat: paridade com canais (TUI/CLI já tem).
- **#7142** — Pluggable security provider interface: arquitetura para v0.9.0.
- **#7141** — OIDC Authentication para RPC/WSS: mesmo escopo de segurança.

### Sinais de i18n e distribuição

- [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184): Mover arquivos .ftl/.po para git submodule — separação de concerns de tradução.
- [#7217](https://github.com/zeroclaw-labs/zeroclaw/pull/7217): FreeBSD port merging — expansão de plataforma.

### Conclusão de roadmap

O roadmap imediato (v0.8.0/v0.8.1) foca em **estabilidade e UX**, enquanto horizontes maiores (v0.9.0) mostram ambição em **segurança, interoperabilidade e capacidade de desktop**. A comunidade demonstra interesse claro em features que tragam ZeroClaw para paridade ou liderança frente a Claude Code e sistemas Agent2Agent.

---

## 7. Resumo de feedback dos usuários

### Dores relatadas (bugs e UX)

| Dor | Severidade | Cenário |
|-----|------------|---------|
| TUI freeze ao perder daemon | S1 | Usuário em sessão ativa perde terminal funcional; precisa force-quit |
| Windows shell broken com aspas | S1 | Qualquer comando com `"` falha; bloqueia workflow coding no Windows |
| "Clear all" não limpa histórico | S2 | Usuário以为是 limpeza completa; reload restaura histórico |
| WhatsApp group replies ignorados | S2 | Em grupo com `mention_only=true`, replies diretos são dropados |
| Web toolbar lento + cmd popups no Windows | S2 | Experiência degradada no Windows; popups de console são intrusivos |

### Feedback positivo (features merged)

| Feature | Feedback implícito |
|---------|---------------------|
| `per-agent classifier_provider` (#6945) | Operadores querem separar classificação barata do modelo principal; economia de custo |
| FreeBSD port (#7217) | Usuários BSD pediram; projeto responde a demanda de plataforma |
| Podman docs (#7114) | Documentação de container improves onboarding para DevOps |

### Insights de satisfaction

- **Resposta rápida a bugs:** 3 de 5 bugs S1 resolvidos em ~24-48h.
- **Comunidade engajada em RFCs:** Issues de feature têm labels `type:rfc` e `needs-maintainer-review`, indicando processo de design participativo.
- **Preocupação com tamanho do repo:** Issue #7211 (S3) reflete interesse em manutenção de codebase

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*