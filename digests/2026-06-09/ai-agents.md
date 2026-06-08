# Resumo diário do ecossistema de agentes de IA 2026-06-09

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-08 21:47 UTC

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

**Data de Referência:** 2026-06-09 | **Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois perfis distintos de maturidade** neste período. Projetos como **Hermes Agent, IronClaw e ZeroClaw** operam em regime de sprint intenso (50 PRs/24h), sinalizando arquiteturas complexas com múltiplos canais e integrações enterprise. **NanoBot, PicoClaw e CoPaw** demonstram foco em estabilização e hardening, com taxas de resolução saudáveis (>50%) e consolidação de features antes de releases formais. **NullClaw** permanece inativo, indicando possível abandono ou reestruturação. A segurança emerge como tema transversal — desde correções de SSRF em NanoBot até OIDC e TOTP planejados em ZeroClaw — refletindo a transição do ecossistema de protótipos para sistemas de produção.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Taxa Resolução PRs | Bugs Críticos Abertos | Saúde |
|---------|:------------:|:---------:|:--------------:|:------------------:|:---------------------:|:-----:|
| **NullClaw** | 0 | 0 | 0 | — | — | 🔴 Inativo |
| **NanoBot** | 8 | 36 | 0 | ~42% (15 merged) | 2 | 🟢 Saudável |
| **Hermes Agent** | 50 | 50 | 0 | ~10% (5 merged) | 8 (P2) | 🟡 Pressionado |
| **PicoClaw** | 3 | 21 | 1 nightly | ~52% (11 merged) | 2 | 🟢 Robusto |
| **IronClaw** | 34 | 50 | 0 | ~12% (6 merged) | 4 | 🟠 Regressão |
| **CoPaw** | 48 | 44 | 0 | ~52% (23 closed) | 4 | 🟢 Dinâmico |
| **ZeroClaw** | 50 | 50 | 0 | ~6% (3 closed) | 11 (S0/S1) | 🔴 Crítico |

**Observações:**
- **PicoClaw e CoPaw** apresentam melhor relação atividade/resolução, indicando processos de review mais ágeis
- **ZeroClaw** carrega o maior volume de bugs críticos simultâneos (11 S1+), com taxa de resolução baixa (3 PRs closed)
- **Hermes Agent e IronClaw** sofrem de bottleneck de review — muitos PRs abertos sem merge, sugerindo necessidade de mais reviewers ou processo de triagem

---

## 3. Posicionamento do Projeto Principal

Dado que **NullClaw** não possui atividade, os projetos mais relevantes para análise comparativa são:

### NanoBot (HKUDS/nanobot)

| Dimensão | Avaliação |
|----------|-----------|
| **Arquitetura** | Multi-provider STT unificado (4 provedores); sistema de plugins via extra_query para Azure-style gateways |
| **Comunidade** | 36 PRs/24h — volume alto, mas menor que pares enterprise |
| **Maturidade** | Fase pré-release; work-in-progress para tag formal |
| **Diferencial** | Transcrição de voz como capability central, suporte a canais múltiplos (Telegram, WeChat) |
| **Pontos Fracos** | Bug de code blocks no Telegram (#4250) crítico para desenvolvedores; sonho feature ainda injeta history |

### Hermes Agent (NousResearch/hermes-agent)

| Dimensão | Avaliação |
|----------|-----------|
| **Arquitetura** | Skill curator centralizado; cron jobs; auth multi-provider; TUI desktop |
| **Comunidade** | 46k+ stars (referenciado pelo próprio ecossistema); alta proporção de issues P2 |
| **Maturidade** | Estável com bugs crônicos no Curator e cron jobs |
| **Diferencial** | Skill protection (deterministic opt-in); Teams gateway nativo; temas customizáveis |
| **Pontos Fracos** | Curator archiva skills ativos sem verificação — 4 bugs P2 relacionados; themes ilegíveis (#18080) há 40 dias |

### ZeroClaw (zeroclaw-labs/zeroclaw)

| Dimensão | Avaliação |
|----------|-----------|
| **Arquitetura** | Rust-based; plugin system com namespacing; MemoryStrategy trait; WASI WIT interfaces |
| **Comunidade** | 11 bugs S1+ simultâneos; RFC ativa para computer-use |
| **Maturidade** | Em reativação após bulk revert que perdeu 153 commits (#6074) |
| **Diferencial** | Pluggable security provider; OIDC native; desktop automation (computer-use RFC) |
| **Pontos Fracos** | File write silent fail (S0 há 77 dias); OOM em WSL2; taxonomia de bugs fragmentada |

### IronClaw (nearai/ironclaw)

| Dimensão | Avaliação |
|----------|-----------|
| **Arquitetura** | Monorepo Rust com 4 crates; Reborn architecture; OpenAI-compatible APIs |
| **Comunidade** | Migration de APIs para Reborn em progresso; 3 PRs XL abertos simultaneamente |
| **Maturidade** | Breaking changes recentes (0.28.2 → 0.29.1); regressões em produção |
| **Diferencial** | Responses API; ProductWorkflow; scoped delivery; PostgreSQL storage |
| **Pontos Fracos** | OAuth users bloqueados (#4536); Telegram cria nova conversa após upgrade; hosted agents retornam 403 |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança como Imperativo Transversal

Todos os projetos enfrentam desafios de segurança, porém com abordagens distintas:

| Projeto | Foco de Segurança | Status |
|---------|-------------------|--------|
| **NanoBot** | SSRF em MCP (#4074 closed); symlink escape blocking (#4221) | ✅ Corrigido |
| **Hermes Agent** | aiohttp bump para 3.14.0 (#39467) — remove 9.1 CVSS Critical | 🔄 Em progresso |
| **ZeroClaw** | OIDC provider (#7141); TOTP gate (#3767); security provider pluggable (#7142) | 🔄 RFC |
| **IronClaw** | Third-party hooks hardening (#3957) | 🔄 Tag required |
| **CoPaw** | MCP subprocess accumulation (#4834) | 🔄 PR #5014 open |

**Síntese:** O ecossistema está consolidando camadas de segurança (auth, hooks, tool sandboxing) como requisito base, não como feature opcional.

### 4.2 Resiliência de Canais e Integrações

| Canal | Projetos Afetados | Problema |
|-------|-------------------|----------|
| **Telegram** | NanoBot (#4250), ZeroClaw (#6701), PicoClaw (#3052) | Code blocks, location messages |
| **WeChat/Feishu** | CoPaw (#4873), NanoBot (#4223) | Token expiry, polling infinito |
| **Microsoft Teams** | Hermes Agent (#9512, #26083) | Python 3.12 blocker |
| **Matrix** | ZeroClaw (#7404) | /sync timeout |
| **QQ** | PicoClaw (#3015) | Token timeout no Windows |
| **WhatsApp** | ZeroClaw (#6224, #6350) | Cron delivery, allowed-numbers bypass |

**Síntese:** Multi-canal é norma, mas cada canal apresenta edge cases específicos que exigem manutenção contínua. Nenhum projeto resolveu todos os canais de forma uniforme.

### 4.3 Memory Management e Context Governance

Três projetos estão investindo em refatorações de memory:

- **ZeroClaw:** MemoryStrategy trait (#6850, #7234) — decouple lifecycle de storage
- **IronClaw:** Context compression dropa tool_calls (#6361) — violação de invariante
- **CoPaw:** max_input_length propagation (#5018, #5021) — auto-compaction crashes
- **NanoBot:** estimate_session_prompt_tokens não usa microcompact (#4254)

**Síntese:** Context window management é problema não resolvido. A tendência é separar política de lifecycle (MemoryStrategy) de storage backend.

### 4.4 Provider Plurality e Model Flexibility

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | 4 STT providers (Groq, Whisper, AssemblyAI, Xiaomi MiMo) + OpenRouter unificado |
| **IronClaw** | OpenAI-compatible + Responses API + provider slugs |
| **CoPaw** | mlx-lm restriction (#2771) para Apple Silicon; Qwen3.6-27B local |
| **ZeroClaw** | Ollama local-first (#5287); Gemini CLI OAuth broken (#4879) |

**Síntese:** Multi-provider não é mais feature, é expectation. Usuários querem alternar entre provedores por privacidade/velocidade/custo — NanoBot #4253 (model override per conversation) é sintoma dessa demanda.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Dominantes | Características |
|----------|-------------------|-----------------|
| **Enterprise/Production** | Hermes Agent, IronClaw, ZeroClaw | Auth OAuth, Teams, Slack, cron jobs, observability |
| **Developers/Tinkerers** | NanoBot, PicoClaw, CoPaw | Code blocks, CLI, local models, rapid iteration |
| **Edge/IoT** | PicoClaw | RISC-V, Go binary, minimal footprint |
| **Privacy-conscious** | CoPaw (mlx-lm), ZeroClaw (Ollama) | Local-first, no telemetry |

### 5.2 Por Arquitetura Técnica

| Stack | Projetos | Implicações |
|-------|----------|-------------|
| **Rust** | ZeroClaw, IronClaw | Performance, memory safety, WASI plugin support |
| **Go** | PicoClaw | Cross-compilation, binários estáticos, K8s-ready |
| **Python** | NanoBot, CoPaw | Flexibilidade, ecossistema ML, PyPI distribution |
| **TypeScript** | Hermes Agent | Desktop TUI, electron-based |

### 5.3 Por Estratégia de Features

| Estratégia | Projetos | Exemplo |
|------------|----------|---------|
| **Consolidação de estabilidade** | PicoClaw | Type assertion hardening, error wrapping |
| **Expansão de providers** | NanoBot | Multi-STT, extra_query, Azure gateways |
| **Evolução arquitetural** | IronClaw | Reborn migration, ProductWorkflow |
| **Plugin ecosystem** | ZeroClaw, CoPaw | Namespacing, marketplace, WIT interfaces |
| **Agent collaboration** | NanoBot (#3992), CoPaw (#5017) | Cross-agent messaging, learning loops |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Desenvolvimento

| Projeto | PRs/dia | PRs Merged (24h) | Bugs Fechados (24h) | Velocidade |
|---------|:-------:|:----------------:|:-------------------:|:----------:|
| **CoPaw** | 44 | 23 | 22 | 🟢 Excepcional |
| **PicoClaw** | 21 | 11 | — | 🟢 Alta |
| **NanoBot** | 36 | 15 | 4 | 🟢 Boa |
| **Hermes Agent** | 50 | 5 | 7 | 🟠 Baixa |
| **IronClaw** | 50 | 6 | — | 🟠 Baixa |
| **ZeroClaw** | 50 | 3 | — | 🔴 Crítica |

**Análise:** CoPaw e PicoClaw demonstram melhor throughput por PR criado — equipe menor mas mais focada. Hermes Agent, IronClaw e ZeroClaw mostram padrão de "engordar backlog" com PRs abertos sem merge, indicando bottleneck de review ou processo de gating excessivo.

### 6.2 Taxa de Resolução de Bugs

| Projeto | Bugs Críticos | Tempo Médio Aberto | Tendência |
|---------|:-------------:|:-------------------:|:---------:|
| **PicoClaw** | 2 | ~10 dias | 🟢 Resolvendo |
| **NanoBot** | 2 | <5 dias | 🟢 Resolvendo |
| **Hermes Agent** | 8 (P2) | 19-40 dias | 🟡 Estagnado |
| **IronClaw** | 4 | <5 dias | 🟠 Regressão nova |
| **ZeroClaw** | 11 (S1+) | 77 dias (#4627) | 🔴 Crítico |

**Análise:** Bugs críticos em ZeroClaw (#4627 — file_write) estão abertos há 77 dias sem resolução. Hermes Agent tem issues P2 com 40 dias (#18080 themes) e 24 dias (#26326 Curator). A taxa de resolução correlaciona com tamanho da equipe vs. volume de issues — projetos com >40 issues/24h enfrentam triage deficit.

### 6.3 Maturidade de Processos

| Indicador | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|-----------|:-------:|:------:|:--------:|:--------:|:-----:|:--------:|
| Test harnesses | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Nightly/CI releases | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Security advisories process | ✅ | 🔄 | ❌ | ✅ | ❌ | 🔄 |
| RFC process | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| Breaking changes changelog | ❌ | ✅ | ⚠️ | ✅ | ❌ | ❌ |
| Community governance | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ |

**Síntese:** Hermes Agent e IronClaw lideram em maturidade de processos (release tags, changelog, CI). CoPaw e NanoBot são mais ágeis mas menos documentados. ZeroClaw tem RFCs estruturadas mas processo de resolução de bugs deficitário.

---

## 7. Sinais de Tendência

### 7.1 De Protótipos para Produção

O ecossistema está em transição visível de "funciona no meu laptop" para "confiável em produção". Evidências:
- **Security hardening** em todos os projetos (SSRF, OIDC, TOTP, shell confirmation)
- **Cron job resilience** — Hermes Agent (#36845 timeout masking), ZeroClaw (#6037 duplicate execution)
- **Auth multi-provider** — IronClaw OAuth broken (#4536), CoPaw WeChat token expiry
- **Health checks e readiness probes** — PicoClaw #3062, IronClaw E2E failures

### 7.2 Fragmentação de Canais de Mensageria

Cada projeto está acumulando suporte a múltiplos canais com edge cases não resolvidos. Nenhum projeto demonstra paridade completa entre canais (Telegram, WeChat, Teams, Matrix, QQ, WhatsApp, Slack, Discord). Isso sugere:
- Necessidade de **abstração de canal unificada** para evitar duplicação de bugs
- Demanda de **test harness específico por canal** para regressions

### 7.3 Multi-Provider como Expectativa, Não Feature

O feedback de NanoBot (#4253) e a arquitetura de IronClaw (OpenAI-compatible + Responses) indicam que usuários esperam alternar entre provedores dinamicamente. Providers locales (llama.cpp, Ollama, vLLM) ganham tração por privacidade — CoPaw (#2771 mlx-lm), ZeroClaw (#5287). Providers chinos (Xiaomi MiMo, Qwen) indicam mercado específico.

### 7.4 Plugin Ecosystem como Próxima Fronteira

Três projetos investindo simultaneamente em arquitetura de plugins:
- **ZeroClaw:** namespacing + RateLimitedTool (#7337), WASI WIT (#7060)
- **CoPaw:** Plugin Market (#5023), extension infrastructure (#4997)
- **NanoBot:** extra_query config para gateways

**Implicação:** A diferenciação futura não será em features core, mas em ecossistema de extensions. Marketplace, monetization e discovery emergirão como competição secundária.

### 7.5 Desktop Automation como Gap

ZeroClaw RFC (#6909) e demanda implícita em todos os projetos indicam necessidade de **computer-use** capability (screenshots + mouse/keyboard input). Competição com Anthropic Codex e alternativas. Nenhum projeto resolveu isso de forma robusta ainda.

### 7.6 Memory Architecture Convergence

Três abordagens diferentes, mesma necessidade:
- **ZeroClaw:** MemoryStrategy trait (separar lifecycle de storage)
- **CoPaw:** AgentScope 2.0 migration (breaking change)
- **NanoBot:** ContextGovernor (#4238) — separação de concerns

**Convergência provável:** Abstração de política de memória (compactação, eviction) desacoplada de storage backend (SQLite, Postgres, filesystem). Isso resolveria bugs como context compression dropando tool_calls.

---

## 8. Recomendações Estratégicas

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedor avaliando projetos** | Priorizar **

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-06-09

---

## 1. Panorama do Dia

O NanoBot manteve um **ritmo de desenvolvimento intenso** nas últimas 24h, com 36 PRs atualizados e 8 issues processadas. A atividade concentra-se em **expansão de provedores de transcrição** (AssemblyAI, Xiaomi MiMo, OpenRouter), **correções de segurança** (SSRF em MCP, escapes de symlink), e **melhorias de usabilidade** (exibição de versão no webui, upload de arquivos/imagens). O projeto demonstra maturidade com foco em estabilidade e cobertura de testes, evidenciado por múltiplos PRs de regressão e harnesses de teste. Não houveram releases formais, indicando trabalho preparatório para uma futura versão.

---

## 2. Lançamentos

**Nenhuma release oficial nas últimas 24h.**

O time está consolidando changesets significativos antes de um próximo tag. Os PRs merged sugerem preparo para release com foco em:
- Sistema de transcrição unificado
- Configurações avançadas de provider
- Correções de segurança pendentes

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (últimas 24h)

| PR | Título | Impacto |
|---|---|---|
| [#4224](https://github.com/HKUDS/nanobot/pull/4224) | AssemblyAI transcription provider | Adiciona alternativa conservadora de STT |
| [#4175](https://github.com/HKUDS/nanobot/pull/4175) | Xiaomi MiMo ASR provider | Suporte forte para reconhecimento de fala em chinês |
| [#4113](https://github.com/HKUDS/nanobot/pull/4113) | OpenRouter transcription + STT configurável | Unificação de credenciais OpenRouter para transcrição |
| [#4217](https://github.com/HKUDS/nanobot/pull/4217) | `extra_query` config para providers | Suporte a gateways Azure-style com `?api-version=` |
| [#4219](https://github.com/HKUDS/nanobot/pull/4219) | Drop orphan tool results | Estabilidade de sessão e boundárias legais |
| [#4221](https://github.com/HKUDS/nanobot/pull/4221) | Block relative symlink escapes | Segurança no ExecTool |
| [#4232](https://github.com/HKUDS/nanobot/pull/4232) | Shared voice input support | Transcrição como capability central (WebUI/desktop) |
| [#4235](https://github.com/HKUDS/nanobot/pull/4235) | Show nanobot version in Settings | Transparência de versão para usuários |

**Destaque:** O sistema de transcrição foi significativamente expandido, agora com 4 provedores (Groq, OpenAI Whisper, AssemblyAI, Xiaomi MiMo, OpenRouter), indicando estratégia de multi-provider para STT.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção

**🔴 Alta Prioridade — Segurança:**
- [#4074](https://github.com/HKUDS/nanobot/issues/4074) **CLOSED** — *MCP HTTP/SSE SSRF vulnerability*: Conexões loopback eram tentadas antes da rejeição de alvos privados. Corrigido. [Segurança]

**🟡 Funcionalidade等候:**
- [#4253](https://github.com/HKUDS/nanobot/issues/4253) **OPEN** — *Override de modelo por conversa*: Usuários querem alternar entre presets (OpenRouter vs. llama.cpp local) baseado em privacidade/velocidade. Demanda recorrente de power users.

- [#4251](https://github.com/HKUDS/nanobot/issues/4251) **CLOSED** — *Upload de arquivos/imagens no input*: Feature request para análise de imagens e PDFs. Chinese user (JFPURE) com用例 claro de summarization. Closed, possivelmente integrado a roadmap.

- [#3992](https://github.com/HKUDS/nanobot/pull/3992) **OPEN** — *Cross-agent messaging*: Sistema de message bus entre instâncias. Implementação completa e testada, aguardando merge. **Excelente sinal de evolução arquitetural.**

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Hoje)

| Severidade | Issue | Descrição |
|---|---|---|
| 🔴 **Alta** | [#4250](https://github.com/HKUDS/nanobot/issues/4250) | `split_message` quebra fenced code blocks no Telegram — fences em chunks diferentes causam HTML broken |
| 🔴 **Alta** | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` ainda injeta chat history no system prompt via Recent History |
| 🟠 **Média** | [#4223](https://github.com/HKUDS/nanobot/pull/4223) (fix) | WeChat session expiry causa loop infinito de `errcode -14` — não recarrega state após wake |
| 🟠 **Média** | [#4254](https://github.com/HKUDS/nanobot/pull/4254) (fix) | `estimate_session_prompt_tokens` não usa `_microcompact` — contagem imprecisa no `/status` |

### Análise

**Code blocks no Telegram (#4250)** é bug crítico para desenvolvedores que usam NanoBot com código. PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) já aberto com fix.

**Dream feature (#4242)** indica bug de config onde disabling não limpa side effects — memory cursor avançando mesmo com feature disabled.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

1. **[#4253](https://github.com/HKUDS/nanobot/issues/4253) — Model override per conversation**
   - Cenário: alternar entre OpenRouter (rápido) e llama.cpp local (privado)
   - **Roadmap signal:** Forte — power users precisam de switch dinâmico

2. **[#4233](https://github.com/HKUDS/nanobot/issues/4253) — Version badge no WebUI**
   - Closed via [#4235](https://github.com/HKUDS/nanobot/pull/4235) + [#4255](https://github.com/HKUDS/nanobot/pull/4255)
   - Estendendo para badge com notificação de update PyPI

3. **[#4251](https://github.com/HKUDS/nanobot/issues/4251) — Upload de arquivos/imagens**
   - Sumarização de PDFs e análise de imagens
   - Feature largamente solicitada em múltiplas plataformas

### Evolução Arquitetural

| PR | Area | Significado |
|---|---|---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | Agent Collaboration | Message bus cross-instance |
| [#4238](https://github.com/HKUDS/nanobot/pull/4238) | ContextGovernor | Separação de concerns de gestão de contexto |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | Test Harness | Infraestrutura de teste para memory lifecycle |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Severidade |
|---|---|---|
| Gateways Azure não funcionam sem `?api-version=` | [#4204](https://github.com/HKUDS/nanobot/issues/4204) | 🔴 Crítica |
| Preciso trocar entre modelos rápido/privado por tarefa | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 🟡 Inconveniente |
| Não sei qual versão está rodando no WebUI | [#4233](https://github.com/HKUDS/nanobot/issues/4233) | 🟢 Menor |
| Sessão WeChat fica morta após expirar token | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | 🔴 Crítica |
| Código em mensagens Telegram fica quebrado | [#4250](https://github.com/HKUDS/nanobot/issues/4250) | 🟠 Moderada |

### Cenários de Uso Observados

- **Desenvolvedores** precisam de code blocks íntegros no Telegram
- **Enterprise (Azure)** precisa de query params customizados
- **Privacy-conscious users** querem alternar entre modelos locais/remotos
- **Produtividade** via transcrição de voz em múltiplos canais

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Atividade Recente

| Issue | Age | Status | Action Needed |
|---|---|---|---|
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | ~11 dias | OPEN | PR aguarda review — read-only roots para tools |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | ~16 dias | OPEN | PR de teste — cobertura de finish reasons |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | ~16 dias | OPEN | Test harness para agent runner |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ~16 dias | OPEN | Implementação completa aguardando merge |

### Recomendações

1. **Priorizar merge do #3992** — Cross-agent messaging é feature de alto valor
2. **Review #4053** — Segurança de filesystem (read-only roots)
3. **Corrigir #4242** — Bug silencioso de config que afecta privacidade
4. **Mergiar #4257** — Fix de code blocks no Telegram

---

## 📈 Métricas de Saúde do Projeto

| Métrica | Valor | Indicador |
|---|---|---|
| Issues ativas (24h) | 4 | 🟢 Normal |
| Issues fechadas (24h) | 4 | 🟢 Boa taxa de resolução |
| PRs abertos | 21 | 🟡 Médio — muitos aguardando review |
| PRs merged (24h) | 15 | 🟢 Excelente throughput |
| Releases (24h) | 0 | 🟡 Preparação para tag |
| Bugs críticos abertos | 2 | 🟠 Requer atenção |
| Features aguardando merge | 4+ | 🟢 Pipeline saudável |

---

*Relatório gerado em 2026-06-09. Dados extraídos de HKUDS/nanobot GitHub.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-09

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** em 9 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. A base de issues abertas permanece em 43 (7 fechadas), enquanto 45 PRs aguardam revisão (5 merged/fechados). Não houve releases, indicando que a equipe está em ciclo de desenvolvimento intensivo. A comunidade demonstra engajamento significativo em temas de usabilidade (temas, model picker) e estabilidade (curator, cron, auth), com demandas de features para Microsoft Teams, proteção de skills e hardening de segurança. A proporção de issues P2 (alta prioridade) continua elevada, sinalizando pressão sobre estabilidade do core.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em fase ativa de desenvolvimento sem tag de release publicada hoje. O PR [#39467](https://github.com/NousResearch/hermes-agent/pull/39467) (bump aiohttp → 3.14.0) aguarda merge e promete limpar security advisories, incluindo uma vulnerabilidade de severidade 9.1 Critical — sugere-se atenção à próxima release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| # | PR | Escopo | Contribuidor |
|---|-----|--------|-------------|
| [#41551](https://github.com/NousResearch/hermes-agent/pull/41551) | fix(observability): flush plugin-config OpenInference no session close | NeMo Relay | mnajafian-nv |
| [#42356](https://github.com/NousResearch/hermes-agent/pull/42356) | test: fix racy ordering em test_concurrent_handles_tool_error | Testes | teknium1 |

### PRs Abertos com Maior Relevância

| # | PR | Escopo | Impacto |
|---|-----|--------|---------|
| [#42393](https://github.com/NousResearch/hermes-agent/pull/42393) | fix(tests): restore missing __init__.py em tests/plugins/platforms | CI/CD | Corrige flake em shard de testes |
| [#42392](https://github.com/NousResearch/hermes-agent/pull/42392) | Fix TUI goal continuation após background review e session splits | TUI/UX | Resolve loops quebrados em /goal |
| [#42389](https://github.com/NousResearch/hermes-agent/pull/42389) | feat(sessions): add optional max session cap | Core | Limite configurável de sessões concorrentes |
| [#42390](https://github.com/NousResearch/hermes-agent/pull/42390) | fix(cron): add explicit utf-8 encoding para subprocess stdout | Cron | Corrige silêncio de scripts multi-byte no Windows |
| [#39467](https://github.com/NousResearch/hermes-agent/pull/39467) | chore(deps): bump aiohttp para 3.14.0 | Security | Remove 1 Critical + advisories pendentes |
| [#42327](https://github.com/NousResearch/hermes-agent/pull/42327) | fix(langfuse): accumulate usage across hook invocations | Telemetry | Resolve gap de tokens/custos em traces |
| [#42385](https://github.com/NousResearch/hermes-agent/pull/42385) | feat(config): model.generation_params para custom providers | Config | Permite temperature/top_p/top_k em servidores locais |
| [#42382](https://github.com/NousResearch/hermes-agent/pull/42382) | fix(desktop): detect stale builds e surface rebuildNeeded | Desktop | UI acionável para builds desatualizadas |

**Síntese:** A equipe prioriza correções de estabilidade em cron, TUI e observability, enquanto acolhita contribuições de qualidade de vida (session caps, generation params). O PR #42392 endereça problema crítico de UX em goals, e #42389 adiciona controle operacional valioso.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 | Demanda Central |
|---|--------|------|:-----------:|:--:|-----------------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes for Dashboard | Feature | 24 | 38 | Legibilidade e acessibilidade (serif pequeno + contraste baixo) |
| [#41939](https://github.com/NousResearch/hermes-agent/issues/41939) | Deterministic opt-in protection para personal skills | Feature | 2 | 6 | Impedir agent de sobrescrever skills proprietários |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Declarative Skill Protection Policy | Feature | 6 | 0 | Centralizar regras de proteção (atualmente 6+ arquivos) |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Microsoft Teams gateway / messaging support | Feature | 6 | 0 | Integração nativa com Teams como Slack/Discord |

### Análise de Demandas

**UX/Legibilidade (tema dominante):** A issue #18080 demonstra frustração significativa com temas atuais (Midnight, Ember, Mono, Cyberpunk, Rose). Com 38 👍 e 24 comentários, é a mais votada do período. Usuários reclamam de serifas pequenas com peso leve e contraste insuficiente — problema de acessibilidade real. A comunidade espera evolução do sistema de temas para algo padronizado.

**Proteção de Skills:** Tanto #27997 quanto #41939 convergem para mesma necessidade: controle granular sobre quais skills o agente pode modificar. #27997 propõe política declarativa centralizada; #41939 solicita proteção opt-in determinística. Juntos sinalizam que a estratégia atual de "agent auto-improves skills" causa fricção em uso profissional.

**Microsoft Teams:** Duas issues (#9512, #26083) tratam Teams — uma feature request de integração nativa e um bug blocking. O gap de Python ≥ 3.12 (#26083) impede deployment hoje. Teams aparece como demanda de enterprise.

---

## 5. Bugs e Estabilidade

### Por Severidade (P2 = Alta, P3 = Média)

#### P2 — Críticos/Regressões

| # | Título | Escopo | Status |
|---|--------|--------|--------|
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Hermes Desktop setup fails — "no git???" | Desktop/Win11 | Aberto |
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator archiva skills ativos sem verificação (fail-open) | Skills/Curator | Aberto |
| [#26326](https://github.com/NousResearch/hermes-agent/issues/26326) | Curator não atualiza cron jobs após deletar skills | Cron/Skills | Aberto |
| [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | LLM consolidation usa delete ao invés de archive (bypassa .archive/) | Skills/Curator | Aberto |
| [#42139](https://github.com/NousResearch/hermes-agent/issues/42139) | Gated dashboard retorna 401 para clientes autenticados por cookie | Gateway/Auth | Aberto |
| [#36845](https://github.com/NousResearch/hermes-agent/issues/36845) | Cron timeout mascarado como last_status=ok (LLM fallback) | Cron | Aberto |
| [#42303](https://github.com/NousResearch/hermes-agent/issues/42303) | bump_use skipped em wakeAgent=false e script-only — skills pruneados | Cron/Skills | Aberto |
| [#42299](https://github.com/NousResearch/hermes-agent/issues/42299) | Media delivery rejeita Docker volume paths em terminal.backend: docker | Docker/Gateway | Aberto |

#### P3 — Bugs Reportados

| # | Título | Escopo |
|---|--------|--------|
| [#26083](https://github.com/NousResearch/hermes-agent/issues/26083) | Teams plugin requer Python ≥ 3.12 (blocker) |
| [#42267](https://github.com/NousResearch/hermes-agent/issues/42267) | Gateway notifications ignoram i18n (hardcoded English) |
| [#42256](https://github.com/NousResearch/hermes-agent/issues/42256) | Desktop composer insere tabs ao colar do Excel |
| [#42270](https://github.com/NousResearch/hermes-agent/issues/42270) | Model picker hard-caps em 50 entries (oculta NVIDIA NIM) |
| [#42102](https://github.com/NousResearch/hermes-agent/issues/42102) | OpenAI Codex auth adiciona apenas oauth-1 |
| [#31817](https://github.com/NousResearch/hermes-agent/issues/31817) | hermes update downgrades aiohttp 3.13.4 → 3.13.3 |
| [#42306](https://github.com/NousResearch/hermes-agent/issues/42306) | Langfuse spans missing usage/token counts |
| [#42280](https://github.com/NousResearch/hermes-agent/issues/42280) | Desktop composer trata imagem do clipboard como anexo |

### Análise de Estabilidade

**Patologia do Curator:** 4 das 8 issues P2 envolvem o Curator de skills — arquivamento incorreto (#29912, #26655), falha em atualizar cron jobs (#26326), e bypass de bump_use (#42303). O Curator é um subsistema de risco que requer atenção prioritária. Combinadas, estas bugs podem causar perda irreversível de skills operacionais.

**Cron Jobs:** Problemas crônicos com cron — timeouts mascarados (#36845), skills pruneados incorretamente (#26326, #42303), e encoding UTF-8 em Windows (#42390 — PR open). A superfície de bugs em cron é grande e pode impactar automações de produção.

**Gateway/Auth:** Issues de auth (#42139) e media delivery (#42299) em gated mode indicam gaps em cenários enterprise com Docker e auth por cookie.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas com Suporte Comunitário

| # | Título | Escopo | Signals |
|---|--------|--------|---------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes (legibilidade) | TUI/Dashboard | 38 👍, 24 💬 |
| [#41939](https://github.com/NousResearch/hermes-agent/issues/41939) | Deterministic opt-in protection para skills | Skills/Core | 6 👍, 2 💬 |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Microsoft Teams gateway nativo | Gateway/Platform | 6 💬 |
| [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | Skill outlook (M365 Calendar + To Do via Graph) | Skills/Productivity | Proposta com impl. |
| [#42307](https://github.com/NousResearch/hermes-agent/issues/42307) | Native mail tool sem shell (prompt-injection hardening) | Security/Terminal | Security focus |
| [#41933](https://github.com/NousResearch/hermes-agent/issues/41933) | Windows core tools install fix + skill | Desktop/Win | Community skill attached |
| [#42388](https://github.com/NousResearch/hermes-agent/issues/42388) | Decouple background-review fork write scope | Skills/Core | Feature request |

### Sinais de Roadmap Inferidos

1. **Enterprise Messaging:** Demanda clara por Microsoft Teams (#9512, #26083) como plataforma de gateway — similar a Slack/Discord/Telegram.
2. **Skill Safety:** Proteção declarativa e determinística de skills emerge como necessidade de usuário power-user e enterprise.
3. **Acessibilidade:** Temas legíveis é o feature request maisvoted — evidência de base de usuários ampla com necessidades diversas.
4. **Custom Providers:** PR #42385 (model.generation_params) + #42364 (vendor slugs) indicam investimento em suporte a provedores locais (llama.cpp, vLLM, mlx-vlm).
5. **Observability:** Gaps em Langfuse (#42306), NeMo Relay (#42331), e OpenInference (#41551) mostram maturidade incremental em telemetry.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|:----------:|
| **Curator destrói skills ativos** | #29912 — 10 skills operacionais archiveados em 1 pass; #26655 — delete bypassa .archive/ | Alta |
| **Cron jobs quebram silenciosamente** | #36845 — timeout reportado como OK; #26326 — orphan cron jobs | Alta |
| **Teams plugin bloqueia deployment** | #26083 — Python 3.11 incompatível | Alta |
| **Hermes Desktop falha em Windows** | #38963 — "no git???" no setup | Alta |
| **Temas ilegíveis** | #18080 — serifas pequenas, contraste baixo, 38 👍 | Média-Alta |
| **Model picker oculta catálogo** | #42270 — 50 entries hard-capped | Média |
| **Auth pool quebrado** | #42102 — openai-codex sobrescreve entradas | Média |

### Cenários de Uso Emergentes

- **Uso profissional/pessoal:** #41939 — usuários refinam skills proprietários e não querem que o agent os sobrescreva.
- **Enterprise messaging:** Teams como canal nativo, não via bridge custom.
- **Produtividade M365:** Skill outlook (#25979) como equivalente Google Workspace existente.
- **Windows-first:** #41933 — habilidade específica para diagnóstico de ferramentas Windows (Node.js, ripgrep, ffmpeg).

### Satisfação/Insatisfação

**Satisfação:** Alta velocidade de merge em PRs de estabilidade; comunidade ativa em reportar bugs; contribuições de features com implementação pronta (#25979).

**Insatisfação:** Curator é percebido como arriscado; temas UX é dor recorrente sem resolução; bugs de auth causam frustração em production.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale

| # | Título | Criado | Status | Notas |
|---|--------|--------|--------|-------|
| [#42306](https://github.com/NousResearch/hermes-agent/issues/42306) | Langfuse spans missing usage — bug reportado hoje, PR #42327 em revisão | 2026-06-08 | Aberto |Telemetry gap em produção |
| [#26083](https://github.com/NousResearch/hermes-agent/issues/26083) | Teams plugin blocker (Python version) | 2026-06-05 | Aberto | Impacta enterprise |
| [#26326](https://github.com/NousResearch/hermes-agent/issues/26326) | Curator não atualiza cron jobs | 2026-05-15 | Aberto | 24 dias aberto, P2 |
| [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | Skill proposal outlook (contribuidor com impl.) | 2026-05-14 | Aberto | 25 dias sem review |
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator archiva skills ativos | 2026-05-21 | Aberto | 19 dias, P2 |
| [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | LLM consolidation usa delete (não archive) | 2026-05-15 | Aberto | 24 dias, P2 |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes — mais votada | 2026-04-30 | Aberto | 40 dias, 38 👍 |

### Priorização Sugerida

1. **Curator (P2):** 4 bugs relacionados = risco

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
## Data: 2026-06-09 | Analista: Open Source AI Agent Analyst

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade intensa e saudável** em 09 de junho de 2026, com 21 PRs atualizados nas últimas 24h (11 merged/fechados, 10 abertos) e 3 issues relevantes. A comunidade está claramente focada em **consolidação de estabilidade**: verificações defensivas de type assertions em Go, tratamento explícito de erros, e refatoração para logging estruturado. A release nightly v0.2.9-nightly.20260608 sinaliza trabalho ativo em direção a uma próxima versão estável, com regressões críticas sendo corrigidas rapidamente (ex: health check, Telegram location messages). O tom geral indica um projeto em fase de maturação, priorizando robustez sobre novas funcionalidades.

---

## 2. Lançamentos

### 🚀 Release Ativa

| Versão | Tipo | Data | Commit |
|--------|------|------|--------|
| **v0.2.9-nightly.20260608.875cf4a2** | Nightly Build | 2026-06-08 | `875cf4a2` |

**Notas da Release:**
- Build automatizado para `v0.2.9` em modo nightly
- **⚠️ Aviso oficial**: "This is an automated build and may be unstable. Use with caution."
- Changelog completo: [comparação v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

**Mudanças incluídas (últimas 24h):**
- Correção de health check retornando permanentemente "not ready" ([#3062](https://github.com/sipeed/picoclaw/pull/3062))
- Suporte a mensagens de localização no Telegram ([#3052](https://github.com/sipeed/picoclaw/pull/3052))
- Adição de checks `ok` para type assertions em múltiplos pacotes
- Refatoração de logging para formato estruturado ([#3050](https://github.com/sipeed/picoclaw/pull/3050))
- Tratamento de erros `os.Getwd()` em agent e evolution

**Breaking Changes:** Nenhuma identificada nesta release nightly.

**Notas de Migração:** Não aplicáveis para builds nightlies.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentemente (11 total)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3062](https://github.com/sipeed/picoclaw/pull/3062) | fix: health check always returning not ready | trufae | **🔴 Crítico** - Corrigia readiness probe em produção |
| [#3052](https://github.com/sipeed/picoclaw/pull/3052) | fix: handle Telegram location messages | wzg-gie | Mensagens de localização agora disparam pipeline do agent |
| [#3058](https://github.com/sipeed/picoclaw/pull/3058) | fix(webfetch): add ok check in isAllowedFirstHopHost | chengzhichao-xydt | Robustez defensiva |
| [#3057](https://github.com/sipeed/picoclaw/pull/3057) | fix(tools): add ok checks in subagent and spawn tools | chengzhichao-xydt | Prevenção de panics |
| [#3056](https://github.com/sipeed/picoclaw/pull/3056) | fix(tools): add ok checks in base.go | chengzhichao-xydt | 7 funções defensivamente protegidas |
| [#3055](https://github.com/sipeed/picoclaw/pull/3055) | fix(agent): handle os.Getwd error in NewContextBuilder | chengzhichao-xydt | Erros de diretório agora tratados |
| [#3051](https://github.com/sipeed/picoclaw/pull/3051) | fix: use %w instead of %v for error wrapping | chengzhichao-xydt | Suporte a errors.Is()/errors.As() restaurado |
| [#3050](https://github.com/sipeed/picoclaw/pull/3050) | refactor: replace log.Printf with structured logger | chengzhichao-xydt | Infraestrutura de logging unificada |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) | fix: add ok checks and handle os.Getwd error | chengzhichao-xydt | Múltiplas correções defensivas |
| [#3042](https://github.com/sipeed/picoclaw/pull/3042) | fix: handle os.Getwd() error in evolution skills_recall | chengzhichao-xydt | Skills builtin resilientes a falhas de CWD |

**Destaque Principal:** O PR [#3062](https://github.com/sipeed/picoclaw/pull/3062) de `trufae` corrige um bug crítico onde health checks sempre retornavam "not ready", potencialmente causando problemas em deployments com orchestrators Kubernetes.

**Padrão Observado:** O contribuidor `chengzhichao-xydt` é responsável por **9 dos 11 PRs closed**, indicando um esforço concentrado de "hardening" do código base.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Status | Comentários | Reações | Severidade |
|---|--------|--------|-------------|---------|------------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb version on RISC-V não funciona com OpenAI model | 🟡 OPEN | **9** | 0 | **Alta** |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | QQ channel connection failure on Windows | 🟡 OPEN | 2 | 0 | **Alta** |
| [#3049](https://github.com/sipeed/picoclaw/issues/3049) | Telegram ignores location messages | ✅ CLOSED | 0 | 0 | Média |

### Análise das Demandas Principais

**🔴 #2887 - .deb em RISC-V com OpenAI ([9 comentários, em aberto há 22 dias])**
- **Resumo:** Versão .deb compilada para RISC-V falha ao utilizar modelos OpenAI (gpt-5.4-2026-03-05)
- **Hipótese atual:** Problema de compatibilidade entre arquitetura e SDK Go
- **Sinais:** Usuário `s0me0ne-unkn0wn` relatando, última atualização 2026-06-08
- **Impacto:** Bloqueia usuários de hardware RISC-V (potenciais dispositivos edge)

**🟡 #3015 - QQ Channel no Windows ([2 comentários, 3 dias])**
- **Resumo:** Canal QQ falha ao obter access token de `bots.qq.com` no Windows
- **Sintoma:** Timeout durante `picoclaw gateway`
- **Diferencial:** Canal Telegram funciona normalmente → problema é específico do QQ/Windows
- **Impacto:** Usuários Windows que usam QQ ficam bloqueados

**✅ #3049 - Telegram Location Messages (Resolvido)**
- **Solução entregue via** [#3052](https://github.com/sipeed/picoclaw/pull/3052)
- Conversão de `message.location` em texto: `[User location: lat=X, lng=Y]`
- Tempo de resolução: 1 dia (reportado 2026-06-07, merged 2026-06-08)

---

## 5. Bugs e Estabilidade

### 🐛 Bugs Abertos

| # | Título | Canal/Área | Severidade | Tempo Aberto | Impacto |
|---|--------|------------|------------|--------------|---------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb RISC-V + OpenAI broken | Package/System | **🔴 Alta** | 22 dias | Bloqueante em RISC-V |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | QQ channel token timeout | QQ Channel | **🔴 Alta** | 3 dias | Canal inoperante no Windows |

### ✅ Bugs Resolvidos Hoje

| # | Título | Tempo de Resolução |
|---|--------|---------------------|
| [#3049](https://github.com/sipeed/picoclaw/issues/3049) | Telegram ignores location | ~1 dia |
| [#3062](https://github.com/sipeed/picoclaw/pull/3062) | Health check sempre "not ready" | - |

### Padrão de Bugs Recentes

**Type Assertion Panic Prevention (11 PRs):**
- Múltiplos pontos do código usavam type assertions sem verificar `ok`
- Risco de panic em cenários de concorrência (`sync.Map`) e parsing de JSON
- **Ação:** `chengzhichao-xydt` conduziu sweep massivo de correções

**Erro Handling Improvements:**
- `os.Getwd()` errors agora tratados explicitamente
- Error wrapping migrado de `%v` para `%w` (preserva `errors.Is`/`errors.As`)
- `Close()` errors explicitamente ignorados com `_ =` (satisfaz linter)

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features em Progresso

| # | Título | Tipo | Autor | Status | Relevância |
|---|--------|------|-------|--------|------------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | feat: add deltachat gateway | **Feature** | trufae | 🟡 OPEN | **Alta** |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Fix agent loop reload and panic cleanup | **Fix** | SiYue-ZO | 🟡 OPEN | **Alta** |

### 📊 Análise de Roadmap

**🔵 #3063 - DeltaChat Gateway:**
- **Significado:** Expansão de canais suportados para incluir DeltaChat (protocolo baseado em Email/IMAP)
- **Autor:** `trufae` (mesmo contributor do PR crítico #3062)
- **Status:** Aberto em 2026-06-08, alta prioridade
- **Implicação:** Posiciona PicoClaw como hub central para múltiplos protocolos de mensageria

**🔵 #2904 - Agent Loop Stability:**
- **Significado:** Corrige três problemas em `pkg/agent`:
  1. `ReloadProviderAndConfig` não cria mais goroutine detached
  2. Flow síncrono com `defer/recover` elimina goroutines bloqueadas
  3. Estabilidade em cenários de reload
- **Tempo em revisão:** 19 dias (aberto desde 2026-05-20)
- **Implicação:** Melhora fundamental de estabilidade para agents em produção

**Sinais de Priorização:**
- Forte ênfase em **estabilidade e robustez** (não novas features)
- Manutenção de múltiplos canais (Telegram, QQ, DeltaChat planejado)
- Foco em edge cases de type safety em Go

---

## 7. Resumo de Feedback dos Usuários

### 🔍 Dores Reportadas

| Dor | Frequência | Severidade | Status |
|-----|------------|------------|--------|
| Canal QQ inoperante no Windows | 1 usuário | 🔴 Alta | Aberto |
| .deb em RISC-V incompatível com OpenAI | 1 usuário | 🔴 Alta | Aberto |
| Mensagens de localização ignoradas | 1 usuário | 🟡 Média | ✅ Resolvido |

### 💬 Análise de Sentimento

**Positivo:**
- Tempo de resposta rápido em bugs críticos (health check corrigido rapidamente)
- Comunidade ativa com múltiplos contribuidores (chengzhichao-xydt, trufae, SiYue-ZO)
- Issue #2887 tem 9 comentários indicando engajamento da comunidade

**Preocupações:**
- Issue #2887 (RISC-V) está aberta há 22 dias sem resolução
- Usuários Windows enfrentam problemas com QQ channel
- Ausência de respostas em algumas issues (feedback loop pode melhorar)

### 📱 Cenários de Uso Identificados

1. **Edge Computing:** Usuários em hardware RISC-V (Pico, etc.) tentando usar LLMs via OpenAI
2. **Multi-Channel:** Operadores gerenciando bots em múltiplas plataformas simultaneamente
3. **Enterprise:** Health checks sendo usados com Kubernetes/orchestrators

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Comentários | Prioridade |
|---|--------|-------|-------------|------------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb RISC-V + OpenAI | 22 dias | 9 | 🔴 **Alta** |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop stability PR | 19 dias | - | 🔴 **Alta** |

### 🔴 Ação Recomendada: Issue #2887

**Problema:** Usuário reporta que `.deb` em RISC-V não consegue se comunicar com API OpenAI. Detalhes:
- PicoClaw v0.2.8 (git: 6e1fab80)
- Go version reportada: `1.25.9`
- Modelo: `gpt-5.4-2026-03-05`

**Por que merece atenção:**
- Está aberta há **22 dias** com **9 comentários**
- Usuário engajado fornecendo Environment completo
- Afeta base de usuários de hardware edge (RISC-V é popular para IoT/Robotics)
- Poderia ser um blocker para release v0.2.9

**Possíveis causas:**
- Cross-compilation .deb para RISC-V pode ter linkage issue com OpenAI SDK
- Diferenças em CGO between architectures
- Necesidade de build específico para RISC-V

---

## 📈 Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs (24h) | 21 | 🟢 Muito Ativo |
| Issues (24h) | 3 | 🟢 Normal |
| Taxa de resolução (PRs) | 52% (11/21) | 🟢 Saudável |
| Bugs em aberto | 2 | 🟡 Monitorar |
| Features em开发 | 1 (DeltaChat) | 🟢 Roadmap ativo |
| PRs aguardando review | 10 | 🟡 Potencial bottleneck |

---

## 🎯 Conclusão

O projeto PicoClaw apresenta **saúde robusta** em 2026-06-09, com atividade intensa de desenvolvimento focado em estabilidade. A release nightly v0.2.9 promete melhorias significativas, com bug crítico de health check já corrigido. O esforço coordenado de `chengzhichao-xydt` em hardening de type assertions demonstra maturidade técnica. **A principal área de atenção** é a issue #2887 (RISC-V + OpenAI), aberta há 22 dias sem resolução - recomenda-se triagem prioritária pela equipe core. O roadmap sinaliza expansão de canais (DeltaChat) mantendo foco em resiliência.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-09. Última sincronização: 2026-06-09.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-09

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 09 de junho de 2026, com 34 issues e 50 PRs atualizados nas últimas 24 horas, indicando um ciclo de desenvolvimento intenso. Não houve novos lançamentos, mas o trabalho está concentrado na migração progressiva para a arquitetura **Reborn**, particularmente nas APIs OpenAI-compatíveis e no workflow de produtos. Várias iniciativas críticas avançaram para fase de merge, incluindo a fiação de chat completions e Responses através do ProductWorkflow, além de correções de bugs em ferramentas de calendário e autenticação Codex. A comunidade reportou regressões em produção (autenticação OAuth, upgrades Telegram), sinalizando necessidade de atenção à estabilidade antes do próximo release.

---

## 2. Lançamentos

**Nenhuma nova release registrada nas últimas 24 horas.**

O último ciclo de release (tracked em [#3708](https://github.com/nearai/ironclaw/pull/3708)) elevou a versão do monorepo para **0.29.1**, incluindo:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️ (breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 ✓
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️ (breaking changes)
- `ironclaw`: 0.24.0 → 0.29.1

**Nota de migração:** Os breaking changes em `ironclaw_common` exigem atenção especial para consumidores da API interna.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Significativos

| PR | Descrição | Tamanho | Impacto |
|----|-----------|---------|---------|
| [#4574](https://github.com/nearai/ironclaw/pull/4574) | feat(outbound): add scoped delivery defaults | XL | Implementa modelo de defaults de entrega para triggered delivery, separando preferências pessoais de compartilhadas |
| [#4566](https://github.com/nearai/ironclaw/pull/4566) | fix(llm): auto-detect Codex client_version | L | **Corrige bug crítico**: resolução de `client_version` hardcoded que ocultava modelos mais recentes (gpt-5.5) |
| [#4528](https://github.com/nearai/ironclaw/pull/4528) | feat(slack): persist host-beta workflow state | XL | Adiciona idempotência e estado durável para Slack via filesystem, com isolamento por escopo |
| [#4523](https://github.com/nearai/ironclaw/pull/4523) | fix(host_api): round-trip system sentinel | M | Corrige desserialização do sentinel `\x1fSYSTEM\x1f` em `TenantId`/`UserId` |
| [#4573](https://github.com/nearai/ironclaw/pull/4573) | docs: fix trigger delivery plan boundaries | XS | Limpa documentos após feedback de review |
| [#4522](https://github.com/nearai/ironclaw/pull/4522) | feat(llm): scaffold tool_args.rs | L | **Fase A (RC3/M9)**: scaffolding de primitivas compartilhadas para parsing de tool arguments |
| [#4569](https://github.com/nearai/ironclaw/pull/4569) | [hooks] Enforce aggregate tenant predicate key caps | L | Implementa limits de `MAX_KEYS_PER_TENANT` em todos os backends de predicate (in-memory, libSQL, Postgres) |

### PRs Abertos em Estado Avançado

| PR | Descrição | Tamanho | Risco | Status |
|----|-----------|---------|-------|--------|
| [#4552](https://github.com/nearai/ironclaw/pull/4552) | translate projection streams to OpenAI SSE | XL | Low | Traduz streams de projeção para SSE OpenAI-compatible |
| [#4546](https://github.com/nearai/ironclaw/pull/4546) | route Responses through ProductWorkflow | XL | Low | Wiring de Responses routes através de `OpenAiResponsesWorkflow` |
| [#4495](https://github.com/nearai/ironclaw/pull/4495) | route chat completions through ProductWorkflow | XL | Low | Rota `POST /v1/chat/completions` via ProductWorkflow |
| [#4186](https://github.com/nearai/ironclaw/pull/4186) | Wire local-dev approval gates | XL | Medium | Adiciona authorizer-aware para development com gates de aprovação |
| [#4572](https://github.com/nearai/ironclaw/pull/4572) | planner subagent flavor + spawn_subagent schema redesign | XL | Low | Substitui `researcher` por `planner` com planos estruturados |
| [#4576](https://github.com/nearai/ironclaw/pull/4576) | extend ToolCall with arguments_parse_error field | M | Medium | Adiciona campo para parsing errors em tool calls (Fase B RC3/M9) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

**1. [#3283](https://github.com/nearai/ironclaw/issues/3283) — Migrar APIs OpenAI-compatíveis para Reborn** (3 comentários, P2)
- **Demanda:** Move as superfícies de API OpenAI-compatíveis (`/v1/chat/completions`, `/v1/responses`, `/api/v1/responses`) para o workflow de produto e modelo de projeção do Reborn
- **Conexões:** Relacionado a 8 issues (#[3269](https://github.com/nearai/ironclaw/issues/3269), #[3013](https://github.com/nearai/ironclaw/issues/3013), #[3093](https://github.com/nearai/ironclaw/issues/3093), etc.)
- **Sinalização:** Prioridade alta para paridade com API pública; múltiples PRs já em desenvolvimento

**2. [#4175](https://github.com/nearai/ironclaw/issues/4175) — ProductAuth backend parity + OAuth PKCE** (3 comentários)
- **Demanda:** Completar paridade de autenticação de produção, incluindo Google refresh, token lifecycle e retry para tokens GSuite expirados
- **Contexto:** Segue #4161 e PR #4174

**3. [#3957](https://github.com/nearai/ironclaw/issues/3957) — Third-party activation hardening** (2 comentários, security-review-required)
- **Demanda:** Follow-ups de hardening para ativação de hooks de terceiros antes de habilitar `HOOKS_THIRD_PARTY_ENABLED` em produção multi-tenant
- **Sinalização:** Foco em segurança de quarantine surfacing e eventos de tracing

**4. [#3026](https://github.com/nearai/ironclaw/issues/3026) — Epic: Reborn production wiring** (2 comentários, P0)
- **Demanda:** História de cutover para produção — como o grafo de produção é construído, validado, reportado e impedido de servir tráfego quando serviços estão faltando
- **Sinalização:** Issue épica central para lançamento production-ready do Reborn

### Temas Recorrentes Identificados

| Tema | Issues Relacionadas | Tendência |
|------|---------------------|-----------|
| Reborn API parity | #[3283](https://github.com/nearai/ironclaw/issues/3283), #[3288](https://github.com/nearai/ironclaw/issues/3288), #[4533](https://github.com/nearai/ironclaw/issues/4533), #[4539](https://github.com/nearai/ironclaw/issues/4539) | 🔼 Crescente |
| SSO/WebChat v2 | #[4116](https://github.com/nearai/ironclaw/issues/4116), #[4181](https://github.com/nearai/ironclaw/issues/4181), #[4180](https://github.com/nearai/ironclaw/issues/4180) | Estável |
| Segurança hooks | #[3957](https://github.com/nearai/ironclaw/issues/3957), #[3959](https://github.com/nearai/ironclaw/issues/3959) | ⚠️ Crítico |

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos em Produção

**1. [#4536](https://github.com/nearai/ironclaw/issues/4536) — OAuth users can't chat** (reportado 2026-06-08)
- **Severidade:** Crítica — Usuários Google/GitHub não conseguem enviar mensagens após login SSO
- **Sintoma:** Redirecionamento para `/welcome` impede acesso ao chat
- **Workaround:** Desabilitar OAuth e usar single-operator env-bearer
- **Canal:** Reborn

**2. [#4556](https://github.com/nearai/ironclaw/issues/4556) — Telegram cria nova conversa após upgrade 0.28.2 → 0.29.1**
- **Severidade:** Alta — Quebra continuidade de conversas em produção
- **Ambiente:** Production, agente `happy-owl-gijuk`
- **Impacto:** Usuários perdem histórico ao fazer upgrade

**3. [#4557](https://github.com/nearai/ironclaw/issues/4557) — Hosted agents retornam 403 Forbidden**
- **Severidade:** Alta — Agentes reportados como RUNNING mas inacessíveis
- **Recuperação:** Automática em alguns casos, mas instabilidade preocupa

**4. [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed**
- **Severidade:** Alta — CI/CD indicando regressions
- **Job falho:** E2E (features)

### 🟡 Bugs de Qualidade/UX

**5. [#4548](https://github.com/nearai/ironclaw/issues/4548) — DeepSeek 400 (duplicate model field)**
- **Severidade:** Média — Requisições com tools geram JSON inválido
- **Causa:** Dois campos `"model"` no top-level da request
- **Providers afetados:** `openai_compatible` e `deepseek` nativo

**6. [#4554](https://github.com/nearai/ironclaw/issues/4554) — Incomplete i18n coverage**
- **Severidade:** Média — Strings hardcoded em extensions, jobs, routines, sidebar
- **Impacto:** Experience degradada para usuários não-ingleses

**7. [#4577](https://github.com/nearai/ironclaw/issues/4577) — google_calendar retorna eventos antigos**
- **Severidade:** Média — Query sem `timeMin` retorna desde sempre
- **Fix em progresso:** [#4578](https://github.com/nearai/ironclaw/pull/4578) (já merged)

### 🟢 Bugs Corrigidos Recentemente

- [#4564](https://github.com/nearai/ironclaw/issues/4564) → [#4566](https://github.com/nearai/ironclaw/pull/4566): Codex client_version hardcoded ocultava modelos novos (MERGED)
- [#4577](https://github.com/nearai/ironclaw/issues/4577) → [#4578](https://github.com/nearai/ironclaw/pull/4578): google_calendar timeMin (MERGED)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Estratégicas em Desenvolvimento

**Epic: Reborn Production Readiness**

| Issue | Descrição | Conexão |
|-------|-----------|---------|
| [#4533](https://github.com/nearai/ironclaw/issues/4533) | Epic: Reborn operator setup, config, diagnostics, service lifecycle | Blocado por V1-only commands |
| [#4539](https://github.com/nearai/ironclaw/issues/4539) | Epic: Reborn approvals parity | Paridade com loop approve/deny/always-allow |
| [#4545](https://github.com/nearai/ironclaw/issues/4545) | Self-serve secret setup para user-generated tools | Integração com Slack/web/Telegram/CLI |
| [#4543](https://github.com/nearai/ironclaw/issues/4543) | Runtime service profiles para HTTP e skills | Credentials para third-party APIs (Crisp, Stripe) |
| [#4551](https://github.com/nearai/ironclaw/issues/4551) | Wire PostgreSQL storage config | Parent: #3026 |

**OpenAI-Compatible API Surface**

| Issue | Descrição | Dependências |
|-------|-----------|--------------|
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | Migrar APIs Chat/Responses para Reborn | Parent: #3031 |
| [#4443](https://github.com/nearai/ironclaw/issues/4443) | Add product refs e idempotency | ✅ CLOSED |
| [#4442](https://github.com/nearai/ironclaw/issues/4442) | Add API ingress contracts | ✅ CLOSED |

### Sinais de Prioridade do Roadmap

1. **Segurança Hooks (#3957, #3959):** Tags `security-review-required` indicam trabalho futuro próximo
2. **Webhook/Outbound Delivery (#4574):** Scoped delivery defaults merged — priorização de triggers
3. **RC3/M9 Provider Parsing Framework:** Roadmap de 3 fases para ToolCall parsing

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

**Autenticação em Produção**
- Usuários OAuth estão completamente bloqueados do chat ([#4536](https://github.com/nearai/ironclaw/issues/4536))
-_NEED: Corrigir SSO flow antes do próximo

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw) — 2026-06-09

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** registrou **alta atividade** em 08 de junho de 2026, com 48 issues e 44 pull requests atualizados nas últimas 24 horas. Não houve novas releases, indicando que o time está em fase intensiva de desenvolvimento sem publicação de versão estável. A comunidade apresenta **forte engajamento**, com issues critícas sendo reportadas e rapidamente triadas — 22 issues foram fechadas, demonstrando capacidade de resposta. O destaque vai para a preparação da migração para AgentScope 2.0 (#4727) e a adição de funcionalidades solicitadas pela comunidade, como o Plugin Market e o modo "goal". A base de usuários demonstra maturidade técnica ao reportar bugs detalhados com evidências.

---

## 2. Lançamentos

### ❌ Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões. O último ciclo de desenvolvimento concentra-se em:
- Correções internas para a migração do backend para AgentScope 2.0
- Estabilização de bugs reportados na versão 1.1.10/1.1.11

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (Destaques)

| # | PR | Contribuidor | Impacto |
|---|-----|--------------|---------|
| [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) | Propagate max_input_length to AgentScope | qbc2016 | **Crítico** — Corrige auto-compaction ignorando limite do modelo |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | Advertise commands, surface errors, tool params | ekzhu | Melhora experiência do cliente ACP/paw TUI |
| [#4334](https://github.com/agentscope-ai/QwenPaw/pull/4334) | Preserve initial chat messages | aqilaziz | Evita orphan chats após reinicialização |
| [#4286](https://github.com/agentscope-ai/QwenPaw/pull/4286) | Localize session and cron controls | aqilaziz | Internacionalização (indonésio adicionado) |
| [#2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) | Restrict mlx-lm to Apple Silicon | Kai-dev7 | Correção de compatibilidade |

**PR de maior impacto técnico:**
> **[#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018)** — Bridge de `ModelInfo.max_input_length` para o `context_size` do AgentScope 2.0, garantindo que `compress_context()` respeite a janela de contexto configurada pelo usuário. Resolve crashes em cenários de memória alta.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| # | Título | Status | Comentários | Reações | Tema Principal |
|---|--------|--------|-------------|---------|---------------|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push failure | CLOSED | 15 | 0 | Integração WeChat; resiliência de token |
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | Sugestão: Hermes Agent Learning Loop | OPEN | 7 | 👍1 | Feature request competitivo |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Windows console flash | CLOSED | 9 | 0 | UX Windows |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | Workdir structure `.qwenpaw` | CLOSED | 7 | 0 | DX/Organização |

### Análise das Demandas

**1. Competitividade Técnica (#5017)**
O usuário *tecgic* sugere observar o **Hermes Agent** (46k+ stars em 2 meses) e incorporar "learning loops". A comunidade demonstra preocupação com posicionamento no mercado de agentes open source.

**2. Migração AgentScope 2.0 (#4727)**
Issue com 2 👍 indica consenso sobre a necessidade de upgrade. Impacto: **Breaking Change** confirmado. Documentação de migração será essencial.

**3. Modularidade e Extensibilidade**
Três PRs parallelos endereçam extensibilidade:
- [#4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) — Plugin extension infrastructure (WIP)
- [#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) — Plugin Market tab
- [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) — DataPaw plugin

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### 🔴 Críticos (Crash/Blocker)

| # | Título | Canário | Link |
|---|--------|---------|------|
| #5019 | `as_msg_handler.py` AttributeError durante memory compaction | Memória | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5019) |
| #4970 | `loop_config.json` corruption crash em todo Agent | Config | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4970) |
| #4873 | Dual subagent causa polling infinito + Feishu não consegue interromper | Channels | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| #4989 | Local Qwen3.6-27B sem resposta (v1.1.9+) | Model | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4989) |

#### 🟠 Altos (Funcionalidade Parcial)

| # | Título | Link |
|---|--------|------|
| #4834 | MCP subprocess accumulation após restart | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4834) |
| #4895 | Infinite image compression loop | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4895) |
| #5016 | Multi-agent chat instabilidade no console | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5016) |
| #5013 | KimiCode thinking content não exibido | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5013) |

#### 🟡 Médios (UX/Edge Cases)

| # | Título | Link |
|---|--------|------|
| #5015 | Windows desktop frontend lag + CPU spike | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5015) |
| #4926 | OneBot listener não libera porta no reload | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4926) |
| #5003 | Ali Coding plan Qwen3.7-plus hangs | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5003) |

### PRs Corretivos Associados

| # | Fix | Status |
|---|-----|--------|
| [#5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) | MCP subprocess accumulation (#4834) | OPEN |
| [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) | /compact ignorando max_input_length | OPEN |
| [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) | max_input_length propagation | **CLOSED** ✅ |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Abertos)

| # | Feature | Contribuidor | Complexidade | Insight Estratégico |
|---|---------|--------------|--------------|----------------------|
| [#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) | Plugin Market tab + AgentScope Platform | Osier-Yi | Alta | **Marketplace** para monetização/comunidade |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | Lightweight goal mode (`/goal`) | suntp | Média | UX de objetivos persistentes |
| [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | Built-in PRD CRUD tool | Saint-Yin | Alta | **Agentic workflow** nativo |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri auto-updater | jinglinpeng | Média | Desktop experience |
| [#4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) | Plugin extension infrastructure | sanfran1068 | **WIP/Alta** | Infra para third-party plugins |
| [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) | Customizable column order (sessions) | saltapp | Baixa | DX improvement |

### Novas Feature Requests da Comunidade

| # | Título | 👍 | Link |
|---|--------|----|------|
| #5017 | Hermes Agent learning loop | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5017) |
| #4992 | Visual Model Fallback (separate vision model config) | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4992) |
| #4994 | Memory system self-evolution | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4994) |
| #4838 | Suppress final text after tool calls | 0 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4838) |

### Sinais de Roadmap

1. **AgentScope 2.0 Migration** — `#4727` (Breaking Change confirmado)
2. **Plugin Ecosystem** — mercado + infraestrutura em paralelo
3. **Agentic Memory** — sistema evolutivo de memória em discussão
4. **Multi-modal fallback** — visão independente do modelo principal

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade Windows** | Frontend lag, console flash, CPU spike | Alta |
| **Integração Enterprise** | WeChat/Feishu/WeCom edge cases | Média |
| **Modelos Locais** | vLLM/Qwen3.6-27B regressions | Crítica |
| **Memory Management** | Compaction crashes, config corruption | Crítica |

### Cenários de Uso Observados

1. **Usuários China-local** — Integração nativa com WeChat, DingTalk, Feishu é diferencial competitivo
2. **Desenvolvedores de plugins** — Solicitação clara por marketplace e APIs de extensão
3. **Usuários enterprise** — Config files corruption (#4970) indica uso em produção sem backup adequado
4. **Usuários Apple Silicon** — mlx-lm restriction (#2771) mostra adoção em Macs

### Satisfação Geral

| Indicador | Observação |
|-----------|------------|
| Velocity de bugs fechados | ✅ Alta — 22 issues fechadas em 24h |
| PRs mergeados | ✅ Consistente — 23 PRs closed/merged |
| Bugs críticos sem fix | ⚠️ 4 bugs críticos em aberto |
| Features esperadas | ✅ Roadmap alinhado com comunidade |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Sem Atribuição (7+ dias sem update)

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | Suppress final text after tool calls | 2026-05-31 | OPEN | Média |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | Dual subagent polling + Feishu | 2026-06-01 | OPEN | **Crítica** |
| [#4926](https://github.com/agentscope-ai/QwenPaw/issues/4926) | OneBot port binding | 2026-06-03 | OPEN | Alta |
| [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | Config corruption crash | 2026-06-05 | OPEN | **Crítica** |
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Visual Model Fallback | 2026-06-07 | OPEN | Média |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | Memory self-evolution | 2026-06-07 | OPEN | Estratégica |
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | Hermes Agent comparison | 2026-06-08 | OPEN | Estratégica |

### PRs WIP/Bloqueados

| # | Título | Estado | Bloqueio |
|---|--------|--------|----------|
| [#4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) | Plugin extension infrastructure | WIP | aguardando review |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw plugin | Under Review | aguardando merge |

---

## Métricas de Saúde do Projeto (2026-06-09)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas | 26 | 🟢 Normal |
| Issues fechadas (24h) | 22

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-09

## 1. Panorama do Dia

ZeroClaw manteve **atividade intensa** nas últimas 24 horas, com 50 issues e 50 PRs atualizados, evidenciando uma sprint de desenvolvimento ativa. **Nenhum lançamento foi publicado** hoje, sinalizando foco em consolidação de código antes da próxima release. A comunidade demonstra preocupação significativa com **segurança e estabilidade** — as issues mais comentadas tratam de bugs de alta severidade (S0/S1) em ferramentas críticas como `file_write`, MCP e shell. Três PRs foram fechados com sucesso (Telegram, WebP, docs), enquanto 8 PRs novos demonstram avanço em funcionalidades de gateway, plugins e canais.

---

## 2. Lançamentos

### Nenhuma release publicada nas últimas 24h

O projeto não publicou novas versões desde o período analisado. A ausência de releases combinada com a alta atividade de PRs sugere que o time está em fase de **consolidação de código** antes de um próximo tag.

> Referência: [zeroclaw-labs/zeroclaw Releases](https://github.com/zeroclaw-labs/zeroclaw/releases)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (3 total)

| # | PR | Alteração | Impacto |
|---|-----|-----------|---------|
| [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) | fix(telegram): preserve markdown fences when splitting messages | Corrige formatação de código em mensagens longas do Telegram | UX/Canais |
| [#7135](https://github.com/zeroclaw-labs/zeroclaw/pull/7135) | fix(channels): normalize webp images for vision | Normaliza imagens WebP para providers de visão que não suportam formato | Dependências/Visão |
| [#7276](https://github.com/zeroclaw-labs/zeroclaw/pull/7276) | fix(docs): clean up docs build warning noise | Elimina 5 classes de warnings no rustdoc/mdBook; corrige 15 links quebrados | Documentação |

### PRs Abertos de Destaque (8 mais recentes)

| # | PR | Tamanho | Risco | Objetivo |
|---|-----|---------|-------|----------|
| [#7404](https://github.com/zeroclaw-labs/zeroclaw/pull/7404) | fix(channels): prevent Matrix /sync from timing out at exactly 30 seconds | - | alto | Corrige busy-poll do Matrix SDK adicionando `?timeout=` ao sync |
| [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) | fix(tools): fail loudly when file_write targets an ephemeral workspace | S | alto | **Fecha #4627** — proteção contra escrita silenciosa em workspaces efêmeras |
| [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) | feat(gateway): route inbound webhooks per channel alias | L | alto | Resolve multi-instância de webhooks (fecha #6312) |
| [#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337) | feat(plugins): namespace plugin tools (plugin__tool) + RateLimitedTool | L | alto | Namespaça ferramentas de plugins e adiciona wrapper de rate-limit |
| [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) | feat(memory): migrate gateway and channel consolidation to MemoryStrategy | M | alto | Terceira fatia do #6850 — wiring de MemoryStrategy no gateway |
| [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) | fix(runtime): guard trim_history against orphan-cascade emptying all messages | XS | alto | Proteção contra historial esvaziado em cascata |
| [#7399](https://github.com/zeroclaw-labs/zeroclaw/pull/7399) | fix(skills): sanitize skill tool names to satisfy provider name regex | S | alto | Sanitiza nomes de ferramentas de skills (fecha #6678) |
| [#7388](https://github.com/zeroclaw-labs/zeroclaw/pull/7388) | fix(matrix): isolate session state per channel alias | S | médio | Isola estado de sessão por alias Matrix; repara key backup |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (Top 5)

| # | Título | Comentários | Tags Principais | Sinal |
|---|--------|------------|-----------------|-------|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` é no-op para MCP tools reais (bug de prefix) | **7** | `bug`, `risk:high`, `tool:mcp`, `priority:p1` | ⚠️ Crítico |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support para desktop (screenshots + input) | **6** | `enhancement`, `risk:high`, `type:rfc`, `priority:p2` | 🔮 Roadmap |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | RFC: Mover arquivos .ftl/.po para git submodule | **5** | `enhancement`, `type:rfc`, `priority:p3` | 🏗️ Arquitetura |
| [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | Opção para desabilitar LeakDetector high-entropy redaction | **4** | `enhancement`, `risk:high`, `security`, `priority:p2` | 🔧 Config |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Expor camada de segurança como provider interface plugável | **4** | `enhancement`, `risk:high`, `type:rfc`, `priority:p2` | 🔮 Arquitetura |

### Análise dos Temas

1. **Segurança como prioridade clara**: 3 das 5 issues mais discutidas são sobre funcionalidades de segurança (LeakDetector, security provider, OIDC). A comunidade está demandando **flexibilidade e extensibilidade** no modelo de segurança.

2. **MCP integration deficit**: A issue #6699 com 7 comentários indica frustração com a implementação atual de MCP — filtro de ferramentas não funciona para ferramentas MCP reais.

3. **Desktop interaction como feature request forte**: #6909 (computer-use) sugere demanda por automação de desktop, competindo com Codex e alternativas.

4. **Consolidação arquitetural**: Issues #6850 (MemoryStrategy) e #7142 (security provider) indicam movimento para design mais modular e plugável.

---

## 5. Bugs e Estabilidade

### Bugs de Severidade S0/S1 (Críticos — Impacto em Produção)

| # | Bug | Severidade | Status | Detalhes |
|---|-----|-----------|--------|----------|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | file_write falha silenciosamente — arquivos invisíveis no host | **S0** | in-progress | PR #7129 em revisão para fechar |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | OOM consecutivas em WSL2 | **S0** | in-progress | Processo zeroclaw mata o sistema |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool recusado em `[autonomy] level = "full"` | **S1** | in-progress | Bloqueia workflow completamente |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 400 — tool_calls como primeiro turno não-sistema | **S1** | in-progress | Violação de invariante do history serializer |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Cron job não entrega para WhatsApp Web | **S1** | in-progress | Delivery channel faltante |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression dropa tool_calls para OpenAI-compatible | **S1** | in-progress | Causa tool loops |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth não funciona | **S1** | in-progress | Auth quebrado impede uso |

### Bugs de Severidade S2 (Degradados)

| # | Bug | Status |
|---|-----|--------|
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp — allowed-numbers bypassed para LID contacts | in-progress |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | XML tool_result tags vazam para respostas de canal | in-progress |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron jobs executados múltiplas vezes simultaneamente | in-progress |

### Observação sobre Saúde Geral

**11 bugs S1+ em andamento simultâneo** é um número elevado. A presença de PRs como #7129 (file_write) e #7403 (trim_history) demonstra que a equipe está ativamente resolvendo os mais críticos. O bug de OOM em WSL2 (#5542) e o bug de autonomia em full (#6434) merecem atenção especial por impactarem estabilidade básica.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs Abertos (Design Proposals)

| # | Feature | Tipo | Prioridade | Comentários | Posição no Roadmap |
|---|---------|------|------------|-------------|-------------------|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use para desktop (screenshots + mouse/keyboard) | RFC | p2 | 6 | Possível v0.9.0 |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | i18n em git submodule | RFC | p3 | 5 | Backlog |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security provider interface | Tracking | p2 | 4 | v0.9.0 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider | Tracking | p1 | 4 | v0.9.0 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation para shell (allow/ask/deny) | RFC | p1 | 4 | v0.9.0 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | MemoryStrategy trait (decouple lifecycle de storage) | RFC | p2 | 3 | Em desenvolvimento (#7234) |

### Features em Progress

| # | Feature | Tags | Estado |
|---|---------|------|--------|
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Cross-channel TOTP gate para ferramentas críticas | `security:policy`, `priority:p1` | in-progress |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-first mode para small models | `provider:ollama`, `priority:p2` | in-progress |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | Add MCP resource e prompt support | `tool:mcp`, `priority:p2` | in-progress |
| [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | WASI WIT interface files (Tool, Channel, Memory) | `enhancement` | open |

### Sinais de Roadmap

1. **v0.9.0 converge para segurança**: OIDC (#7141), security provider (#7142) e TOTP (#3767) parecem estar no radar da próxima versão major.
2. **Plugin ecosystem em expansão**: #7337 (namespacing) + #7060 (WIT) indicam maturação da arquitetura de plugins.
3. **Memory architecture refactor**: #6850/#7234 promete separar políticas de lifecycle de storage.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Padrões Identificados)

| Dor | Frequência | Issues | Sentimento |
|-----|------------|--------|------------|
| **File write não persiste** | Múltiplos | #4627 | 😡 Frustração extrema (S0) |
| **Gemini não funciona** | Alta | #6302, #4879 | 😞 Inveja funcional |
| **Shell tool bloqueado** | Direta | #6434 | 😠 Contradição de config |
| **MCP tools não filtradas** | Direta | #6699 | 😕 Confusão |
| **LeakDetector falsos positivos** | Direta | #4832 | 😕 Config inflexível |
| **Cron duplicado** | Direta | #6037 | 😠 Produtividade |

### Cenários de Uso Emercentes

1. **Agentes multi-canal**: Usuários configuram ZeroClaw com Matrix + WhatsApp + Telegram simultaneamente (evidenciado por issues de routing #7367, #7388).
2. **Desktop automation**: Demanda por computer-use (#6909) sugere uso como assistente de automação local.
3. **Local-first com Ollama**: #5287 indica adoção de modelos locais para privacidade/custo.

### Satisfação Geral

**Mista a positiva com fricção**: A plataforma é ativamente utilizada em cenários complexos (multi-canal, desktop, local models), mas bugs de estabilidade (OOM, file_write, shell autonomy) geram frustração. A resposta rápida da equipe (PRs publicados no mesmo dia das issues) mitiga o impacto.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| # | Título | Criado | Atualizado | Comentários | Notas |
|---|--------|--------|------------|-------------|-------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | audit: track 153 commits lost in bulk revert c3ff635 | 2026-04-24 | 2026-06-08 | 2 | **Perda de código** — precisa de auditoria de recovery |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Improve Installation Documentation | 2026-04-04 | 2026-06-08 | 1 | UX/DX — documentação de instalação deficiente |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | After integrating Feishu, only LLM called instead of Agent | 2026-03-28 | 2026-06-08 | 3 | Channel Feishu/Lark quebrado há ~70 dias |

### Issues Antigas com Status Estagnado

| # | Título | Criado | Status | Riscos |
|---|--------|--------|--------|--------|
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Cross-channel TOTP gate | 2026-03-17 | in-progress | Segurança — em aberto há ~85 dias |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | file_write silent fail | 2026-03-25 | in-progress | S0 — PR em revisão, mas aberto há ~77 dias |
| [#4832](https

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*