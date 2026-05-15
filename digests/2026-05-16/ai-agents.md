# Resumo diário do ecossistema de agentes de IA 2026-05-16

> Issues: 2 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-15 20:56 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-16

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, com 2 novas issues abertas e nenhuma atividade de PR ou release. As duas issues em aberto tratam de um bug de autenticação no scheduler e uma solicitação de feature para o Telegram. O repositório não registrou progresso em termos de código mesclado, indicando possivelmente um período de triagem e identificação de problemas antes de implementação. A ausência de releases recentes sugere que a equipe pode estar em fase de planejamento ou em espera por mais feedback da comunidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões, o que indica continuidade na fase de desenvolvimento ativo sem marcos formais finalizados. Recomenda-se acompanhar o repositório para eventuais announcements.

---

## 3. Progresso do Projeto

**Nenhum PR foi merged ou fechado nas últimas 24 horas.**

A ausência de atividade de merge indica que:
- A equipe pode estar em período de revisão ou planejamento
- Issues abertas ainda não passaram pela fase de implementação
- Não houve contribuições externas aceitas no período

---

## 4. Temas Quentes da Comunidade

### Issues em Destaque

| Issue | Tipo | Autor | Comentários | 👍 |
|-------|------|-------|-------------|-----|
| [#916](https://github.com/nullclaw/nullclaw/issues/916) | Feature Request | weissfl | 0 | 0 |
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | Bug Report | scabros | 0 | 0 |

**Análise:** As duas issues abertas receberam atenção mínima da comunidade (sem reações ou comentários adicionais no período). A issue #916 representa uma solicitação de enhancement que pode melhorar a experiência de usuários do Telegram em conversas com replies. A issue #915, embora技术支持ada por um único usuário, descreve um problema potencialmente crítico que afeta funcionalidade principal (scheduler).

---

## 5. Bugs e Estabilidade

### 🔴 Bug Crítico Reportado

**#[915] Problem with scheduler unauthorized** ([Link](https://github.com/nullclaw/nullclaw/issues/915))
- **Autor:** scabros
- **Severidade:** Alta (funcionalidade principal inoperante)
- **Cenário:** Usuário relatando que o scheduler não funciona via Telegram nem chatbot, mesmo com Ollama configurado corretamente na mesma rede (RTX 3090 com qwen3.6:27b)
- **Impacto:** Usuários não conseguem agendar tarefas automatizadas, uma funcionalidade central
- **Status:** Aberto, aguardando triagem

### Observações

O bug reportado sugere um problema de autenticação/autorização no componente de scheduler, não relacionado ao modelo de LLM (que funciona corretamente para outras operações). Isso pode indicar:
- Problema de sessão/auth token
- Incompatibilidade com configuração de host externo
- Issue na comunicação entre componentes internos

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Feature Request

**#[916] Telegram: include reply_to_message text in inbound context** ([Link](https://github.com/nullclaw/nullclaw/issues/916))
- **Autor:** weissfl
- **Complexidade estimada:** Baixa a Média
- **Descrição:** A feature request propõe expandir a utilidade do campo `reply_to_message` da API do Telegram. Atualmente, esse campo é usado apenas para verificar `isReplyToBotMessage()`. A solicitação pede que o texto da mensagem respondida seja extraído e incluído no contexto de entrada do bot.

**Benefícios potenciais:**
- Melhor compreensão de conversas em threads
- Respostas mais contextuais em grupos
- Comportamento mais natural em diálogos encadeados

**Sinal de roadmap:** Esta é uma issue de **enhancement incrementall**, sugerindo que o projeto está maduro o suficiente para refinamentos de UX além de funcionalidades core.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Severidade | Contexto |
|-----|------------|----------|
| Scheduler não funciona (unauthorized) | 🔴 Alta | Ubuntu + Ollama em rede local |
| Falta de contexto em replies do Telegram | 🟡 Média | Uso em grupos |

**Cenário de uso típico descrito:**
O usuário scabros demonstra um setup de produção com:
- Sistema operacional: Ubuntu
- Hardware: RTX 3090 para inference
- Modelo: qwen3.6:27b via Ollama
- Acesso: Externo host na mesma rede
- Canal: Primariamente Telegram

**Satisfação parcial:** O usuário confirma que "LLM is working fine" e "tool calling in general also works mostly fine", indicando que o core do sistema está funcional, mas componentes específicos (scheduler) ainda apresentam problemas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Em Espera

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | <1 dia | Aguardando triagem | 🔴 Alta |
| [#916](https://github.com/nullclaw/nullclaw/issues/916) | <1 dia | Aguardando triagem | 🟡 Média |

### Recomendações Imediatas

1. **#[915] - Bug do Scheduler** — Prioridade máxima. O problema impede uso de funcionalidade core. Recomenda-se que mantenedores solicitem logs de erro e reproduzam o ambiente (Ubuntu + Ollama externo).

2. **#[916] - Context em Replies** — Issue válida para backlog de feature. Avaliar viabilidade técnica e impacto em outras plataformas (não apenas Telegram).

3. **Sem Comentários** — As duas issues abertas não receberam comentários de mantenedores ou da comunidade. Recomenda-se ao menos um acknowledgment oficial para manter engajamento de contribuidores.

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas (24h) | 2 |
| Issues fechadas (24h) | 0 |
| PRs merged (24h) | 0 |
| Releases (24h) | 0 |
| Índice de atividade | 🔵 Baixo |
| Saúde geral do projeto | 🟡 Estável (sem regressions conhecidas em produção) |

---

*Relatório gerado automaticamente em 2026-05-16. Dados extraídos de github.com/nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 2026-05-16

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade desigual em 16 de maio de 2026. **Sete projetos ativos** reportam atividade significativa, com **ZeroClaw, IronClaw, Hermes Agent e CoPaw** liderando em volume de PRs (50 cada), enquanto **NullClaw** permanece em modo de espera com atividade praticamente nula. A dominante tendência é a **convergência arquitetural** em direção a runtimes de tarefas longas (long-task agents), integração de modelos de reasoning (DeepSeek, MiMo, Xiaomi), e hardening de segurança (secret management, path policies, skill scanners). O mercado evidencia demanda por **agentes multi-canal** (Telegram, Matrix, Feishu, DingTalk) e **deployments locais** (LM Studio, Ollama), indicando que a estratégia de provider aberto supera a dependência exclusiva de OpenAI/Anthropic.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Tendência |
|---------|:------------:|:----------:|:--------:|:-----:|:---------:|
| **ZeroClaw** | 19 | 50 | 0 | 🟢 Estável | ⬆️ Acelerando (v0.8.0 iminente) |
| **IronClaw** | 19 | 50 | 1 (v0.28.2) | 🟢 Estável | ⬆️ Reborn integration em curso |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Atenção | ➡️ Gargalo de triagem (49 issues abertas) |
| **CoPaw** | 29 | 50 | 0 | 🟡 Atenção | ⬆️ Security sprint |
| **NanoBot** | 58 | 20 | 0 | 🟢 Estável | ⬆️ Feature freeze pré-release |
| **PicoClaw** | 11 | 35 | 1 (nightly) | 🟡 Mixed | ⬆️ Bug fixing massivo |
| **NullClaw** | 2 | 0 | 0 | 🔴 Baixa | ➡️ Planejamento/silêncio |

**Destaque:** O volume médio de 37 PRs/24h por projeto ativo demonstra ecossistema saudável, mas **ZeroClaw, IronClaw e CoPaw** equilibram melhor a balança entre abertura e fechamento de PRs.

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw como Referência de Evolução

**ZeroClaw** apresenta o posicionamento mais estratégico, combinando:

| Dimensão | Vantagem Competitiva |
|----------|---------------------|
| **Canais** | Suporte nativo a 5+ canais novos (Twitch, Twilio, Zulip, Mastodon, ACP) — maior cobertura do ecossistema |
| **Segurança** | 3 bugs S0 corrigidos + sessão de ownership model + advisory scan ativo |
| **Provider** | Extended thinking nativo para Anthropic/Bedrock |
| **Schema** | V3 migration com breaking changes orquestrados |
| **Comunidade** | 50 PRs + discussão ativa em skills, channels e i18n |

### Diferenças Técnicas por Projeto

| Projeto | Arquitetura Distintiva | Foco Primário |
|--------|------------------------|---------------|
| **ZeroClaw** | Multi-agent runtime + Schema V3 + ACP sessions | Channels, skills, security |
| **IronClaw** | Reborn loop architecture + WS13-WS17 pipeline | Agentic workflows, WebUI Beta |
| **NanoBot** | LongTaskTool + goal state + lifecycle hooks | Tarefas longas, multi-turn |
| **Hermes Agent** | TUI-first + Docker containerization | CLI/TUI, desktop app |
| **CoPaw** | Multi-agent + cron orchestration + DingTalk | Enterprise automation |
| **PicoClaw** | Multimodal audio + V3 config format | Reasoning models, local LLMs |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Reasoning Models — Suporte Fragmentado

**Todos os projetos** enfrentam desafios com modelos de reasoning, especialmente em multi-turn:

| Projeto | Issue Relacionada | Status |
|---------|-------------------|--------|
| **PicoClaw** | MiMo multi-turn replay (align com DeepSeek) | ✅ Corrigido (#2862) |
| **IronClaw** | DeepSeek v4 `reasoning_content` dropped | 🔴 Aberto (#3673) |
| **CoPaw** | MiMo thinking + tool calls 400 error | ✅ Corrigido |
| **ZeroClaw** | Xiaomi `reasoning_content` em thinking mode | 🆕 Aberto (#6672) |
| **NanoBot** | MiMo `reasoning_effort: "none"` | ✅ Corrigido (#3734) |

**Implicação:** A incompatibilidade de streaming de `reasoning_content` entre providers é o bug mais disseminado do ecossistema. Expectativa de que o padrão DeepSeek se consolide como canônico.

### 4.2 Segurança — Agenda Conjunta

| Tema | Projetos Afetados | Evidência |
|------|-------------------|-----------|
| **Secret Management** | Hermes, CoPaw, NanoBot | TOML + env vars (#2172 NanoBot), plaintext configs (#4421 CoPaw) |
| **Path Policies** | ZeroClaw, PicoClaw | Bypass `allowed_Path` (#5533 ZeroClaw), exec guard false positives (#1042 PicoClaw) |
| **Skill Auditing** | CoPaw, ZeroClaw | YARA scanner (#1580 CoPaw), skill audit scope (#5956 ZeroClaw) |
| **TL S/Dependências** | ZeroClaw, IronClaw | BoringSSL hostname verification (#6657 ZeroClaw), crates.io desync (#3259 IronClaw) |

**Conclusão:** A comunidade reconhece que agents com acesso a filesystem e tools exigem segurança em camadas — uma necessidade que transcende projetos individuais.

### 4.3 Multi-Canal — Padrão de Deploy

**Telegram, Matrix, Feishu/DingTalk** são os canais dominantes:

| Canal | Projetos com Suporte | Bugs Ativos |
|-------|---------------------|-------------|
| **Telegram** | Todos exceto CoPaw | PicoClaw (voice), Hermes (large docs) |
| **Matrix** | PicoClaw, IronClaw, Hermes | PicoClaw (identity injection, allow_from) |
| **Feishu/Lark** | NanoBot, PicoClaw | NanoBot (bot.deleted handler) |
| **DingTalk** | CoPaw | CoPaw (workspace switch, parallel processing) |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Público | Projeto Ideal | Características |
|---------|---------------|-----------------|
| **Enterprise/Corporate** | **CoPaw**, **ZeroClaw** | Cron jobs, DingTalk, Azure Entra ID, proxy SSL, MCP multi-server |
| **Desenvolvedores Individuais** | **Hermes Agent**, **NanoBot** | TUI, CLI, Docker-first, local Ollama |
| **Usuários Avançados (Local)** | **PicoClaw**, **NullClaw** | LM Studio, RTX 3090 + Ollama, Multimodal |
| **Agentes Multi-Agent** | **IronClaw**, **CoPaw** | Reborn runtime, multi-agent orchestration |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Implicação |
|-----------|----------|------------|
| **Agentic-first** | IronClaw, NanoBot | Runtime projetado para subagentes, planning, long-task |
| **Channel-first** | ZeroClaw, CoPaw | Conectividade como feature principal, agent como motor |
| **Tool-focused** | PicoClaw, Hermes | Exec tool, skill loading, safety guards |
| **Minimalist** | NullClaw | Scheduler central, Telegram-first, baixa superfície |

### 5.3 Por Estágio de Maturidade

| Estágio | Projetos | Indicadores |
|---------|----------|--------------|
| **Growth/Experimental** | NullClaw | Baixa activity, 2 issues, sem PRs |
| **Scaling** | Hermes Agent, PicoClaw | Alta activity, muitos bugs, triagem gargalo |
| **Enterprise-ready** | ZeroClaw, IronClaw, CoPaw | Security hardening, breaking changes orquestrados, multi-provider |
| **Feature Freeze** | NanoBot | 77 eventos/24h, massiva refatoração pré-release |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Líder | Valor |
|---------|-------|-------|
| **Maior volume PRs** | ZeroClaw, IronClaw, Hermes Agent, CoPaw | 50/24h |
| **Maior volume issues** | NanoBot | 58/24h |
| **Taxa de close (issues)** | NanoBot | 53 fechadas vs 5 abertas |
| **Taxa de merge (PRs)** | PicoClaw | 22 merged de 35 atualizados (63%) |
| **Baixo engajamento** | NullClaw | 2 issues, 0 comments, 0 reactions |

### 6.2 Qualidade vs. Quantidade

| Projeto | Volume | Qualidade Percebida |
|---------|--------|---------------------|
| **CoPaw** | 50 PRs | ✅ Security-focused — 2 PRs de backup trust, 2 de skill scanner YARA, 1 de file guard bypass |
| **IronClaw** | 50 PRs | ✅ Arquitetural — Reborn integration (WS13-WS17), RootFilesystem unificado (+15K LOC) |
| **NanoBot** | 20 PRs | ✅ Focado — 17 PRs merged,涵盖 segurança, performance, UX |
| **Hermes Agent** | 50 PRs | ⚠️ Gargalo — 49 issues abertas, 1 fechada; triagem é o problema |
| **ZeroClaw** | 50 PRs | ✅ Balanceado — 4 bugs S0/S1 corrigidos + features de canais |

### 6.3 Recência de Releases

| Projeto | Release Mais Recente | Idade |
|---------|---------------------|-------|
| **PicoClaw** | v0.2.8-nightly.20260515 | 1 dia |
| **IronClaw** | v0.28.2 | 2 dias |
| **NullClaw** | Nenhuma | Indefinido |
| **ZeroClaw** | Nenhuma formal | Preparando v0.8.0 |
| **NanoBot** | Nenhuma formal | Preparando 0.1.6 |
| **CoPaw** | v1.1.7 | ~7 dias |
| **Hermes Agent** | Nenhuma formal | Indefinido |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **1. Provider diversity** | LM Studio request (#28 PicoClaw, 19 comentários), Ollama setups (NullClaw, CoPaw), OpenAI compat gateways (NanoBot #3785) | Usuários querem controle sobre modelos; dependência de API única é rejeitada |
| **2. Reasoning models como padrão** | 5 projetos com issues de `reasoning_content`, suporte a DeepSeek v4, MiMo, extended thinking | Modelos com chain-of-thought visível serão default em 2026 |
| **3. Security-first agents** | 4 projetos com security sprints simultâneas, secret reference requests, path policies | Agents com filesystem access exigem segurança em profundidade; mercado amadurece |
| **4. Enterprise adoption** | Azure Entra ID (Hermes #25162), corporate proxy (NanoBot #3783), cron jobs business-critical (CoPaw) | Agentes estão passando de "experimento" para "infraestrutura" |
| **5. i18n como feature** | NanoBot Chinese docs marathon (18 issues fechadas), Fluent localization (ZeroClaw #6670) | Mercados não-anglofônicos são estratégicos |
| **6. Long-task agents** | NanoBot LongTaskTool, IronClaw Reborn, Hermes pending-state (#26579) | Agentes não são mais "perguntas e respostas"; são workflows de múltiplos passos |
| **7. Desktop/WebUI como superfície** | IronClaw WebUI Beta, Hermes desktop app (#20059), NanoBot WebUI performance fixes | A experiência de usuário final migra do CLI para interfaces visuais |

### 7.2 Sinais de Alerta Transversais

| Alerta | Projetos | Severidade | Ação Recomendada |
|--------|----------|------------|-----------------|
| **Gargalo de triagem** | Hermes Agent | 🟡 Alta | 49 issues abertas vs 1 fechada; processo de triagem precisa de estrutura |
| **Crates.io desync** | IronClaw | 🟠 Média | 4 releases não publicadas em crates.io; downstreams pinned a versão vulnerável |
| **Bugs de segurança em aberto** | ZeroClaw (#6678), CoPaw (#4421), Hermes (#25839) | 🔴 Crítica | 3 projetos com security issues sem fix; priority deberían ser imediata |
| **Documentação desatualizada** | PicoClaw (#2766), Hermes (#12188) | 🟡 Média | V3 config, Docker compose subdocumentados; atrito para novos usuários |

### 7.3 Previsões para Próximos 30 dias

| Projeto | Evento Esperado |
|---------|-----------------|
| **ZeroClaw** | Release v0.8.0 com Schema V3 + novos canais (Twitch, Twilio, Mastodon) |
| **IronClaw** | Cutover de produção do Reborn runtime para WebUI Beta |
| **NanoBot** | Release 0.1.6 com LongTaskTool e plan tool stabilized |
| **PicoClaw** | Fix do canal Matrix (identity injection) + LM Studio provider |
| **CoPaw** | Fix do file guard bypass (#4361) + migration guide para v1.1.7 |
| **Hermes Agent** | Triagem de backlog P1 (Matrix Docker, Windows desktop, security impersonation) |
| **NullClaw** | Possível沉寂 ou pivot após baixa sustentada |

---

## Nota Metodológica

Este relatório sintetiza dados públicos de GitHub para os projetos referenciados em 2026-05-16. Métricas de "saúde" são inferências baseadas em volume de issues/PRs, taxa de fechamento e severidade de bugs reportados — não refletem qualidade de código ou satisfação real dos usuários. Recomenda-se validar com owners de projeto antes de decisões de adoção.

---

*Relatório gerado em 2026-05-16 | Próxima atualização recomendada: 2026-05-23*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data do relatório:** 2026-05-16  
**Referência:** github.com/HKUDS/nanobot  
**Issues (24h):** 58 atualizadas (5 abertas, 53 fechadas)  
**PRs (24h):** 20 atualizadas (3 abertas, 17 merged/fechadas)  
**Releases (24h):** 0

---

## 1. Panorama do Dia

O projeto NanoBot apresenta um nível de atividade excepcionalmente elevado para o período, com **77 eventos totais** (issues + PRs) atualizados nas últimas 24h. A característica mais notável do dia é uma **maratona massiva de documentação em chinês**, com ~18 issues de docs fechadas simultaneamente, indicando um esforço coordenado de localização e enriquecimento da documentação para o público chinês. No plano de código, 17 PRs foram merged, cobrindo segurança, performance, UX e novas features. Não houve lançamentos formais, mas a base de código está em transformação ativa com refatorações, correções e funcionalidades novas convergindo para uma próxima release.

---

## 2. Lançamentos

**Nenhuma release formal publicada nas últimas 24h.**

Os PRs fechados sugerem que o tronco (`main`) está em preparação para uma próxima versão (provavelmente a 0.1.6 ou equivalente), dado o volume de changesets de peso — lifecycle hooks, long-task agent, skill_load tool, plan tool — que ainda não constam em tag pública.

> ⚠️ **Alerta para consumidores:** Quem implanta a partir de `main` (e não de uma tag) deve acompanhar de perto, pois several breaking changes merged (ex.: remoção do `GlobTool`, realocação de runtime context, novas políticas de segurança para mídia local) podem afetar configurações existentes.

---

## 3. Progresso do Projeto

Os PRs mais relevantes merged/fechados nas últimas 24h, com impacto direto na saúde do projeto:

| # | PR | Autor | Impacto |
|---|-----|--------|---------|
| [#3782](https://github.com/HKUDS/nanobot/pull/3782) | `fix(webui): remove eager markdown preload` | yorkhellen | **Performance WebUI** — Removeu pré-carregamento de chunk >1MB de renderização markdown, causando lentidão no startup mesmo em sessões sem blocos de código |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | `feat(long-task): add LongTaskTool for multi-step agent tasks` | chengyongru | **Novo padrão de tarefa longa** — Meta-ReAct loop que divide tarefas complexas em subagentes sequenciais; `build_tool_registry()` extraído do SubagentManager para reusabilidade |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | `feat(goal): /goal command & long-running tasks` | Re-bin | **Integração end-to-end de goal state** — Sessão metadata → Runtime Context → WebSocket → WebUI; removeu o orchestrator-style long-task antigo |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) + [#3792](https://github.com/HKUDS/nanobot/pull/3792) | `feat: add gateway lifecycle notification hooks (on_start/on_stop)` | JiajunBernoulli | **UX para implantações systemd** — Notifica canais quando o gateway inicia/para, resolvendo #3279 |
| [#3793](https://github.com/HKUDS/nanobot/pull/3793) | `fix(codex): stabilize prompt cache key` | boogieLing | **Correção de cache** — Estabiliza o `prompt_cache_key` do Codex Responses API entre turns; resolve #2440 |
| [#3840](https://github.com/HKUDS/nanobot/pull/3840) | `fix(web): back off Brave search rate limits` | boogieLing | **Resiliência** — Retry com backoff de 1s para HTTP 429 do Brave; resolve #2560 |
| [#3842](https://github.com/HKUDS/nanobot/pull/3842) | `[security] fix(message): confine local media attachments` | Hinotoi-agent | **Segurança** — Confina anexos locais passados via `message(media=[...])` em deployments restritos |
| [#3789](https://github.com/HKUDS/nanobot/pull/3789) | `[security] fix(feishu): confine downloaded media filenames` | Hinotoi-agent | **Segurança** — Filenames retornados pela API Feishu/Lark são normalizados; impede path traversal |
| [#3844](https://github.com/HKUDS/nanobot/pull/3844) | `perf(agent): append runtime context after user content for cache stability` | chengyongru | **Performance + cache** — Move contexto de runtime para após conteúdo do usuário, mantendo prefixo estável e melhorando KV cache hit rates |
| [#3841](https://github.com/HKUDS/nanobot/pull/3841) | `refactor(tools): remove GlobTool` | chengyongru | **Limpeza de API** — Remove GlobTool redundante; GrepTool com parâmetro `glob` já cobre o caso |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | `fix(providers): wire MiMo to thinking_type to allow disabling reasoning` | pixan-ai | **Provedor Xiaomi MiMo** — `reasoning_effort: "none"` agora desabilita reasoning corretamente; resolve #3585 |
| [#3783](https://github.com/HKUDS/nanobot/pull/3783) | `fix(web): add ssl_verify config for corporate proxy SSL verification` | HengWeiBin | **Corporativo** — Permite desabilitar verificação SSL atrás de proxy MITM (CA auto-assinado) |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | `feat(pairing): chat-native DM sender approval` | chengyongru | **UX DM** — Fluxo de pairing para aprovação de remetentes em DM em implants de assistant privado |
| [#3764](https://github.com/HKUDS/nanobot/pull/3764) | `fix(shell): support UNC paths in Windows path extraction` | JiajunBernoulli | **Windows compat** — Shell tool agora lida com UNC paths (`\\server\share`) |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | `fix: clear media_paths after successful voice transcription` | tamvicky | **WhatsApp voice** — Limpa `.ogg` path após transcrição; evita tag `[file: ...]` spurious |
| [#2848](https://github.com/HKUDS/nanobot/pull/2848) | `Fix config compatibility for plugin channels` | Psinary | **Plugin compat** — Corrige `is_allowed` em `base.py` para configs de plugin channels que usam dict |

---

## 4. Temas Quentes da Comunidade

| Issue | Comentários | Reações | Tema |
|-------|-------------|---------|------|
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) — Replace JSON with TOML for config | **9** | 0 | 🔥 Migrar `config.json` para TOML — human-edited configs são mais ergonomônicos |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI session display corruption | **7** | 0 | 🐛 Bug de renderização no WebUI na versão 5.13 |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) — Support secret reference instead of plaintext | **4** | 0 | 🔐 Segredos em `config.json` expostos; deseja suporte a `file`/`exec` (ex: 1Password) |
| [#3787](https://github.com/HKUDS/nanobot/issues/3787) — Bot reply mention | **2** | 0 | 💬 Handler de `bot.deleted_v1` ausente no canal Feishu |

**Análise:** A discussão mais acalorada gira em torno da **migração de JSON para TOML** (#3402, 9 comentários), sinalizando demanda recorrente da comunidade por ergonomia de configuração. Este é um debate de design arquitetural com implicações em breaking changes. A issue de segurança (#2172) sobre secrets em plaintext também demonstra consciência de segurança madura na comunidade. O alto volume de PRs de segurança mergeados nas últimas 24h (#3842, #3789) sugere alinhamento do time com essa demanda.

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **🔴 Alta** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI — conteúdo de sessão renderiza com display corruption na versão 5.13 (0.1.5.post3.2026.05.13); requer refresh. Afeta experiência de uso em produção |
| **🔴 Alta** | [#3848](https://github.com/HKUDS/nanobot/issues/3848) *(closed)* | WebUI render bug — resolvido via PR #3782 |
| **🟡 Média** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) *(closed)* | `openai_codex` prompt cache key instável entre turns — corrigido via #3793 |
| **🟡 Média** | [#2560](https://github.com/HKUDS/nanobot/issues/2560) *(closed)* | Brave search rate limits causavam falhas — corrigido via #3840 |
| **🟡 Média** | [#3585](https://github.com/HKUDS/nanobot/issues/3585) *(closed)* | Xiaomi MiMo `reasoning_effort: "none"` não desabilitava reasoning — corrigido via #3734 |
| **🟢 Baixa** | [#3752](https://github.com/HKUDS/nanobot/issues/3752) *(closed)* | WhatsApp voice transcript deixava `.ogg` path em media_paths — corrigido via PR |

**Estado geral de estabilidade:** O projeto está em fase de estabilização ativa. A bug #3790 (WebUI corruption) é o único problema **ainda aberto** com impacto direto na experiência do usuário e merece atenção prioritária. O volume de bugs corrigidos nas últimas 24h (6 PRs de fix) indica maturidade no processo de triagem e release.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Status | Relevância |
|---|---------|--------|------------|
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) | `skill_load` tool — previne perda de conteúdo de skill em multi-turn | **ABERTA** | ⭐⭐⭐ Ferramenta nova; endereça perda de skill.md em contexto compaction |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | `plan` tool — decomposição de tarefas e tracking de progresso | **ABERTA** | ⭐⭐⭐ Persiste entre turns; injetado no system prompt; sobrevive a compaction |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | OpenCode Go gateway (OpenAI + Anthropic compat) | **ABERTA** | ⭐⭐ Agregação de GLM, Kimi, DeepSeek, MiMo, Qwen, MiniMax via gateway único |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) | Migrar config de JSON para TOML | **ABERTA** | ⭐⭐⭐ Breaking change em discussão |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | Secret reference (file/exec) em vez de plaintext | **ABERTA** | ⭐⭐⭐ Segurança; good first issue |
| [#3787](https://github.com/HKUDS/nanobot/issues/3787) | Handler `bot.deleted_v1` para Feishu WebSocket | **ABERTA** | ⭐ Bug + feature para canal Feishu |
| [#3279](https://github.com/HKUDS/nanobot/issues/3279) *(closed)* | Gateway lifecycle hooks `on_start`/`on_stop` | ✅ Merged | Padrão aceito;类似的需求 para múltiplos canais |

**Sinais de roadmap:** A convergência de `long_task` (#3460, #3788), `skill_load` (#3847) e `plan` (#3791) indica que a **próxima versão será centrada em tarefas de longa duração e agentic workflows**. A decisão sobre TOML (#3402) será um marco arquitetural. O suporte a secret reference (#2172) complementa os 3 PRs de segurança mergeados.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

1. **WebUI quebrado em produção (#3790, aberta):** Usuários na versão mais recente (5.13) enfrentam display corruption em sessões. Impacto imediato em experiência do usuário. Severidade alta.

2. **Segurança de configuração (#2172):** A comunidade explicitamente sinaliza que armazenar secrets em `config.json` é "a security nightmare". A decisão de migrar para TOML (#3402) está diretamente ligada a esse problema, pois TOML suporta nativamente referências a variáveis de ambiente, reduzindo a necessidade de secrets em plaintext.

3. **Implantação systemd sem feedback (#3279):** Usuários com `Restart=always` não sabem se o gateway está rodando. Feature implementada via #3373/#3792 — resolve uma dor real de operadores.

4. **Proxy corporativo (#3783):** Cenário corporativo com SSL MITM causava falha completa de todas as operações web. Corrigido — indica que o projeto está sendo adotado em contextos empresariais.

5. **Canal Feishu (#3787):** Bug de handler ausente demonstra que o canal Feishu WebSocket é ativamente utilizado e tem edge cases sendo descobertos em produção.

**Cenários de uso aparentes:** Assistente pessoal em múltiplos canais (Feishu, WhatsApp, DM), agentic task execution (coding assistants, multi-step planning), implantações corporativas com proxy SSL, deployments Windows (UNC paths), e integrações com provedores chineses (GLM, Kimi, DeepSeek, Xiaomi MiMo).

---

## 8. Backlog que Merece Atenção

| # | Tipo | Idade | Situação | Prioridade |
|---|------|-------|---------|-----------|
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | feature/security | ~2 meses | Aberta, 4 comentários | ⭐⭐⭐ Fila de security — good first issue sem assignee |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) | enhancement/arch | ~3 semanas | Aberta, 9 comentários, alta discussão | ⭐⭐⭐ Decisão de design pendente; impacta API de config |
| [#3787](https://github.com/HKUDS/nanobot/issues/3787) | bug/feishu | 2 dias | Aberta | ⭐⭐ Bug de handler concreto; simples de resolver |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | provider | 2 dias | Aberta | ⭐⭐ Expansão de provedores; vale revisar cobertura de testes |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) | feature | 1 dia | Aberta | ⭐⭐ Ferramenta de skill com design novo; precisa de review cuidadoso |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | feature | 2 dias | Aberta | ⭐⭐⭐ Plan tool é design central; impacto em prompt e compaction |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | bug | 2 dias | Aberta | ⭐⭐⭐ **Bug de user-facing mais crítico do momento** |

> **Ação recomendada:** Priorizar triagem e assign de #3790 (bug WebUI) e #2172 (security secrets), e posicionar a decisão de design de #3402 (TOML) na próxima release planning, dado o volume de discussão e alinhamento com a demanda de segurança.

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-05-16.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-16

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade comunitária** em 16 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de resolução de PRs está moderada (7 merges/fechados), enquanto as issues acumulam 49 abertas contra apenas 1 fechada — sugerindo um gargalo na triagem ou priorização. Não houve lançamentos de novas versões, indicando que o projeto está em fase de desenvolvimento intensivo sem ciclos de release формализованos recentes. A maioria das interações concentra-se em bugs de alta severidade (P1-P2) relacionados a estabilidade em plataformas (Docker, Telegram, Windows) e em features para experiência do usuário (temas, delegação, logging).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões taggeadas entre 2026-05-15 e 2026-05-16. Isso é consistente com um padrão de integração contínua onde changesets são mergeados diretamente na branch principal sem versões semânticas formais. Recomenda-se monitorar a branch `main` para atualizações funcionais.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados (7 total)

| # | Título | Impacto |
|---|--------|---------|
| [#26577](https://github.com/NousResearch/hermes-agent/pull/26577) | Fix/require signature falsy coalesce | Correção de lógica de validação de assinaturas |
| [#26576](https://github.com/NousResearch/hermes-agent/pull/26576) | Ci/branches lockfile pypi hygiene | Melhoria de higiene de dependências CI/CD |

### PRs Abertos com Maior Relevância

| # | Título | Componente | Prioridade |
|---|--------|------------|------------|
| [#26569](https://github.com/NousResearch/hermes-agent/pull/26569) | feat(agent): expose fallback model awareness | Agent/CLI | P2 |
| [#26571](https://github.com/NousResearch/hermes-agent/pull/26571) | fix: reset gateway sessions on context overflow | Gateway | P2 |
| [#26579](https://github.com/NousResearch/hermes-agent/pull/26579) | feat(agent): surface tool-approval pending state | Agent | P2 |
| [#26129](https://github.com/NousResearch/hermes-agent/pull/26129) | perf: cache tool hot paths | Agent/Tools/TUI | P2 |
| [#26525](https://github.com/NousResearch/hermes-agent/pull/26525) | fix: don't overwrite precise token count | Agent | P2 |
| [#26575](https://github.com/NousResearch/hermes-agent/pull/26575) | fix: support large Telegram documents | Gateway/Telegram | P2 |
| [#23466](https://github.com/NousResearch/hermes-agent/pull/23466) | Add FastVM terminal backend | Tools | P3 |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Add Hermes desktop app | Gateway/TUI | P3 |

**Destaque:** O PR [#26571](https://github.com/NousResearch/hermes-agent/pull/26571) resolve um problema crítico onde sessões gateway ficavam travadas após overflow de contexto, afetando especialmente Discord. O PR [#26129](https://github.com/NousResearch/hermes-agent/pull/26129) busca melhorias de performance em hot paths de tools.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**#18080** — *"Improved Themes for Dashboard - currently hard to read"* [🟡 P3]  
📊 11 comentários | 17 👍  
📌 [Link](https://github.com/NousResearch/hermes-agent/issues/18080)  
📝 A comunidade demanda melhoria visual nos temas (Midnight, Ember, Mono, Cyberpunk, Rose), citando contraste insuficiente e fontes não-padronizadas. Este é o issue mais debatido, indicando que a experiência visual do dashboard é uma dor significativa.

**#25495** — *"Matrix / synapse broken in the official docker image"* [🔴 P1]  
📊 7 comentários | 1 👍  
📌 [Link](https://github.com/NousResearch/hermes-agent/issues/25495)  
📝 O gateway Matrix/Synapse está quebrado na imagem Docker oficial desde um commit específico. Este é um bug de quebra de funcionalidade para usuários de Matrix.

**#25839** — *"System impersonates user role, tricking parallel agent instances"* [🔴 P1]  
📊 1 comentário | 0 👍  
📌 [Link](https://github.com/NousResearch/hermes-agent/issues/25839)  
📝 **Bug de segurança crítico:** O mecanismo de "review conversation and update skill library" injeta prompts automatizados disfarçados como `role: "user"`, potencialmente permitindo que instâncias paralelas de agentes modifiquem skills sem consentimento do usuário. Este issue requer atenção imediata da equipe de segurança.

**#26524** — *"Stage-Level Tool Whitelist: Reducing Decision Fatigue"* [🟡 P3]  
📊 2 comentários | 1 👍  
📌 [Link](https://github.com/NousResearch/hermes-agent/issues/26524)  
📝 RFC para filtro dinâmico de tools por turno via hook `pre_llm_call`, reduzindo a carga cognitiva do agente.

**#12188** — *"Setting `hermes model` config inside Docker compose"* [🟢 P2]  
📊 3 comentários | 0 👍  
📌 [Link](https://github.com/NousResearch/hermes-agent/issues/12188)  
📝 Documentação de Docker Compose é insuficiente; usuários precisam entrar no container para configurar modelos.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (ação imediata requerida)

| # | Descrição | Componente | Plataforma |
|---|-----------|------------|------------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/Synapse broken in official Docker image | Gateway | Docker |
| [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | Telegram DM topic binding not refreshed after compression — preflight loop | Gateway | Telegram |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | **Segurança:** System impersonates user role | Agent | — |
| [#26487](https://github.com/NousResearch/hermes-agent/issues/26487) | **Windows:** Repeated console windows make desktop unusable | CLI | Windows |
| [#26568](https://github.com/NousResearch/hermes-agent/issues/26568) | Hermes ignoring hot memory and using disabled tools | Agent | — |
| [#25666](https://github.com/NousResearch/hermes-agent/issues/25666) | Telegram gateway SIGSEGV on Raspberry Pi aarch64 | Gateway | Telegram/RPi |

### 🟠 P2 — Altos (alta prioridade)

| # | Descrição | Componente |
|---|-----------|------------|
| [#25402](https://github.com/NousResearch/hermes-agent/issues/25402) | terminal.backend=local ainda usa Docker com chaves legadas |
| [#26355](https://github.com/NousResearch/hermes-agent/issues/26355) | TTS voice bubbles não entregues no Telegram |
| [#26572](https://github.com/NousResearch/hermes-agent/issues/26572) | Kanban dispatcher crash com "duplicate column name" |
| [#25191](https://github.com/NousResearch/hermes-agent/issues/25191) | hermes gateway install falha com emojis no código |
| [#26379](https://github.com/NousResearch/hermes-agent/issues/26379) | --severity filter usa match exato vs "≥" |
| [#26548](https://github.com/NousResearch/hermes-agent/issues/26548) | auxiliary.* context_length ignora custom_providers |
| [#26428](https://github.com/NousResearch/hermes-agent/issues/26428) | hermes doctor não flag missing credentials OpenRouter |

### 🟡 P3 — Médios

| # | Descrição | Componente |
|---|-----------|------------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard themes hard to read |
| [#26524](https://github.com/NousResearch/hermes-agent/issues/26524) | Stage-Level Tool Whitelist RFC |
| [#16610](https://github.com/NousResearch/hermes-agent/issues/16610) | Suporte a timezone customizado |
| [#26549](https://github.com/NousResearch/hermes-agent/issues/26549) | Per-job timezone for cron |
| [#26570](https://github.com/NousResearch/hermes-agent/issues/26570) | Persistir /model selections por chat |
| [#26565](https://github.com/NousResearch/hermes-agent/issues/26565) | Legacy kanban DB migration issues |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Maior Potencial de Adoção

| # | Título | Votes | Componente | Observação |
|---|--------|-------|------------|------------|
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) | Config hermes model via env vars Docker | 0 | Gateway | Usabilidade Docker |
| [#26524](https://github.com/NousResearch/hermes-agent/issues/26524) | Stage-Level Tool Whitelist | 1 | Agent | RFC — design review |
| [#25162](https://github.com/NousResearch/hermes-agent/issues/25162) | Azure Foundry com Entra ID / Bearer Token | 1 | Auth | Demanda corporativa |
| [#9628](https://github.com/NousResearch/hermes-agent/issues/9628) | Configurable message timestamp prefix | 0 | Agent | Sessions longas |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Immutable/protected skills | 0 | Skills | Proteção de skills críticos |
| [#16493](https://github.com/NousResearch/hermes-agent/issues/16493) | Progressive-loading architecture | 0 | Agent/Tools | Arquitetura modular |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Hermes desktop app (Electron) | — | Gateway/TUI | **PR aberto** |

### Sinais de Roadmap

1. **Melhoria de UX do Dashboard** (#18080) — 17 👍 indica prioridade alta da comunidade
2. **Segurança e multi-tenant** (#25839, #25083) — Awareness crescente sobre isolamento de agentes
3. **Suporte a Azure Enterprise** (#25162) — Sinais de adoção corporativa
4. **Desktop app** (#20059) — PR ativo com screenshots demonstra interesse em distribuição nativa

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade Docker** | Imagem oficial com regressões em Matrix/Synapse | Múltiplos reports |
| **Windows** | Instalação problemática, múltiplas janelas de console | 2 issues P1/P2 |
| **Platformas Embarcadas** | SIGSEGV em Raspberry Pi | 1 issue P2 |
| **UX/Temas** | Dashboard difícil de ler, contraste ruim | Issue #18080 (17 👍) |
| **Documentação** | Docker compose subdocumentado | Issue #12188 |

### Cenários de Uso Emergentes

- **Uso corporativo:** Suporte a Azure Entra ID (#25162) indica adoção enterprise
- **Raspberry Pi/Home Lab:** Usuários avançados rodando em ARM64
- **Delegação Multi-agente:** Issues sobre routing (#26564, #26482) demonstram casos de uso complexos
- **Long-lived sessions:** Usuários mantendo sessões Telegram/Discord por dias

### Satisfação

A **alta volumetria de PRs** (50 em 24h) e a **diversidade de contribuições** (fixes, features, refactors) indicam uma comunidade ativa. No entanto, o **baixo volume de issues fechadas** (1 de 50) versus **alta abertura** (49) pode indicar:
- Gargalo na triagem
- Falta de direcionamento de prioridades
- Necessidade de processo de issue stewardship mais estruturado

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Atividade Estagnada

| # | Título | Criado | Última Atualização | Estado |
|---|--------|--------|-------------------|--------|
| [#9628](https://github.com/NousResearch/hermes-agent/issues/9628) | Configurable message timestamp prefix | 2026-04-14 | 2026-05-15 | 1 comentário, sem triagem |
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) | hermes model via Docker env vars | 2026-04-18 | 2026-05-15 | 3 comentários, aguardando ação |
| [#16493](https://github.com/NousResearch/hermes-agent/issues/16493) | Progressive-loading architecture | 2026-04-27 | 2026-05-15 | 1 comentário |
| [#16610](https://github.com/NousResearch/hermes-agent/issues/16610) | Timezone customizado | 2026-04-27 | 2026-05-15 | 1 comentário |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Immutable/protected skills | 2026-05-13 | 2026-05-15 | 1 comentário |

### Issues Críticos Sem Assignee Visível

| # | Prioridade | Descrição |
|---|------------|-----------|
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | P1/Security | System impersonates user role — **revisão de segurança necessária** |
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | P1 | Matrix/Synapse broken in Docker |
| [#26487](https://github.com/NousResearch/hermes-agent/issues/26487) | P1 | Windows desktop unusable |
| [#26568](https://github.com/NousResearch/hermes-agent/issues/26568) | P1 | Ignoring disabled tools |

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 49 |
| Issues fechadas | 1 |
| PRs abertos | 43 |
| PRs merged/fechados | 7 |
| Releases | 0 |
| Issues P1 (críticos) | 6 |
| Issues P2 (altos) | 9 |
| Issues P3 (médios) | 7+ |
| Issue com maior 👍 | #18080 (17) |
| Tempo médio de resposta | Não mensurável (dados insuficientes) |

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent em 2026-05-16.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data de Referência:** 2026-05-16
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**Versão Atual:** v0.2.8-nightly.20260515.794eb04f

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade** nas últimas 24 horas, com 35 PRs atualizados (22 merged/fechados) e 11 issues movimentadas. A equipe de manutenção está focada em **estabilidade e qualidade**, com múltiplos bug fixes críticos merged — especialmente relacionados à segurança do exec tool, suporte a modelos de reasoning (DeepSeek, MiMo) e correções no canal Matrix. A release nightly contínua indica um ciclo de desenvolvimento acelerado, preparação para a próxima versão estável. A comunidade permanece engajada com 19 comentários em uma feature request do LM Studio, evidenciando demanda por novos provedores.

---

## 2. Lançamentos

### Release Mais Recente

| Artefato | Versão | Data |
|----------|--------|------|
| Nightly Build | `v0.2.8-nightly.20260515.794eb04f` | 2026-05-15 |

**Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **Aviso:** Este é um build automatizado e pode estar instável. Use com cautela em produção.

**Observação:** Esta é uma nightly build automatizada. Não há release notes formal documentada; usuários devem acompanhar o diff entre `v0.2.8` e `main` para identificar mudanças desde a última versão estável.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (22 total)

| # | PR | Tipo | Descrição | Impacto |
|---|-----|------|-----------|---------|
| [#2862](https://github.com/sipeed/picoclaw/pull/2862) | fix(openai_compat): align MiMo reasoning replay with DeepSeek | Bug Fix | Alinha replay de reasoning do MiMo com regras canônicas do DeepSeek para multi-turn | **Crítico** — resolve falhas em conversas multi-turn |
| [#2874](https://github.com/sipeed/picoclaw/pull/2874) | fix(pico): preserve image media across pico attachments | Bug Fix | Preserva mídia de imagem através de attachments e mensagens pico | **Moderado** |
| [#2741](https://github.com/sipeed/picoclaw/pull/2741) | fix(openai_compat): parse reasoning_content in streaming | Bug Fix | Mantém parsing consistente de campos de reasoning em streaming SSE | **Crítico** |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | fix(mcp): support streamable HTTP alias, request-response mode | Enhancement | Adiciona modo request-response e alias HTTP para MCP transport | **Alto** |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | docs: sync all documentation to V3 config format | Documentation | Sincroniza 26 arquivos de documentação para formato V3 (api_keys array, channel_list) | **Moderado** |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | feat(agent): support native audio input for multimodal LLMs | Feature | Adiciona campo 'Audio' para input nativo em LLMs multimodais (Gemini 1.5) | **Alto** |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | fix(config): handle non-addressable SecureString in collectSensitive | Bug Fix | Previne panic em反射 ao iterar valores SecureString em maps | **Moderado** |
| [#2859](https://github.com/sipeed/picoclaw/issues/2859) | BUG: Xiaomi MIMO multi-turn conversations | Bug Fix | Corrigido via PR #2862 | **Crítico** |

### PRs Abertos com Potencial de Merge

| # | PR | Tipo | Descrição | Status |
|---|-----|------|-----------|--------|
| [#2879](https://github.com/sipeed/picoclaw/pull/2879) | fix(config): make load_image configurable | Bug Fix | Corrige registro condicional de load_image tool | ⏳ aguardando review |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) | feat(security): add optional tirith pre-exec scanning | Feature | Adiciona scanner de segurança Tirith pré-execução | 🆕 novo |
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | fix(tools): allow relative script paths in exec guard | Bug Fix | Corrige misinterpretação de paths relativos como escapes | ⏳ stale |
| [#2827](https://github.com/sipeed/picoclaw/pull/2827) | fix: skip canonical ID parsing for @-prefixed allow_from | Bug Fix | Corrige filtro allow_from em Matrix (MXIDs contêm dois pontos) | ⏳ stale |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 | Tendência |
|---|--------|------|-------------|-----|-----------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Feat Request: LM Studio Easy Connect | Enhancement | **19** | 2 | Estagnada (stale desde 2026-02-11) |

**Análise:** A comunidade solicita uma integração nativa com **LM Studio**, ferramenta popular para execução local de LLMs. Com 19 comentários, é a issue com maior discussão ativa. O autor original reconhece não ter skills para implementar e apela à comunidade. A demanda indica que usuários desejam **alternativas locais ao OpenAI/Anthropic**, sugerindo que uma integração com LM Studio seria valorizada.

### PRs com Discussão Técnica Significativa

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | fix(tools): allow relative script paths in exec guard | Bug Fix | Resolve false positives no safety guard do exec tool |
| [#2822](https://github.com/sipeed/picoclaw/pull/2822) | fix(subturn): dismiss child tool feedback after sync completion | Enhancement | Melhora UX em subturns síncronos |
| [#2794](https://github.com/sipeed/picoclaw/pull/2794) | fix(agents): preserve origin context for async follow-ups | Bug Fix | Preserva contexto de roteamento em callbacks async |

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Por Severidade)

#### 🔴 Crítico

| # | Título | Ambiente | Impacto |
|---|--------|----------|---------|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec tool guardCommand: false positive em paths relativos | `restrict_to_workspace=true` | Bloqueia comandos legítimos (ex: `curl wttr.in/Beijing`) |
| [#2817](https://github.com/sipeed/picoclaw/issues/2817) | Voice transcription succeeds but text not passed to LLM | Groq Whisper | LLM recebe `[voice]` em vez de texto transcrito |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8: cannot access data from tabs | Android Termux | Funcionalidade de abas completamente quebrada |

#### 🟠 Alto

| # | Título | Canal | Impacto |
|---|--------|-------|---------|
| [#2816](https://github.com/sipeed/picoclaw/issues/2816) | Matrix sender identity not injected into agent context | Matrix | Agente sem informação de quem enviou mensagem |
| [#2815](https://github.com/sipeed/picoclaw/issues/2815) | `allow_from` filter has no effect on Matrix channel | Matrix | Filtro de segurança inoperante no Matrix |

#### 🟡 Médio

| # | Título | Impacto |
|---|--------|---------|
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) | Feishu: only first tool call message shown in notification | Notificações truncadas |
| [#2878](https://github.com/sipeed/picoclaw/issues/2878) | load_image não configurável via config.json | Falta de flexibilidade |

**Padrão Identificado:** O canal **Matrix** apresenta múltiplos bugs críticos (#2815, #2816, #2827) indicando necessidade de atenção prioritária. PRs associados (#2827) aguardam merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | 👍 | Complexidade Estimada | Sinais de Demanda |
|---|--------|-----|----------------------|-------------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 2 | Média | 19 comentários — alta demanda |
| [#2820](https://github.com/sipeed/picoclaw/issues/2820) | Non-destructive fresh-session reset | 1 | Média | Workflow de sessão limpa sem perder histórico Seahorse |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) | Optional Tirith pre-exec scanning | 0 | Alta | Segurança avançada para exec tool |

### Melhorias de UX/Configuração

| # | Título | Tipo | Status |
|---|--------|------|--------|
| [#2879](https://github.com/sipeed/picoclaw/pull/2879) | make load_image configurable | Bug Fix | PR aberto |
| [#2789](https://github.com/sipeed/picoclaw/pull/2789) | make tool feedback edit throttle configurable | Enhancement | PR stale |

### Insights de Roadmap

1. **Suporte a Reasoning Models:** Vários PRs (#2706, #2741, #2862) indicam foco em suporte a modelos de pensamento/reasoning (DeepSeek v4, Xiaomi MiMo)
2. **Segurança de Ferramentas:** Melhorias no exec tool (#1042, #2814, #2877) demonstram investimento em sandboxing
3. **Configuração V3:** Documentação atualizada (#2766) confirma transição para novo schema de configuração
4. **Inputs Multimodais:** Suporte a áudio nativo (#2626) indica direção para LLMs multimodais

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Problema | Severidade | Freq. |
|-----------|----------|------------|-------|
| **Canal Matrix** | Múltiplos bugs: identity injection, allow_from, parsing MXID | 🔴 Crítico | 3 issues |
| **Android** | Acesso a dados de abas quebrado na v0.2.8 | 🔴 Crítico | 1 issue (possível impacto واسع) |
| **Voice/Audio** | Transcrição não passada ao LLM | 🔴 Crítico | 1 issue |
| **Exec Tool** | Safety guard muito agressivo | 🟠 Alto | 2 issues correlacionadas |

### Cenários de Uso Emergentes

1. **Execução Local de LLMs:** Usuários solicitam LM Studio como provider alternativo
2. **Multi-turn com Thinking:** Modelos com reasoning content exigem manejo especial de histórico
3. **Segurança Avançada:** Interesse em scanners pré-execução (Tirith)

### Sentimento Geral

**Neutro-Positivo com Áreas de Atenção:** A comunidade está engajada (35 PRs, issues ativas), mas bugs no Matrix e Android могут impactar adoção. O ciclo de desenvolvimento parece saudável com releases nightly e múltiplos fixes sendo mergeados diariamente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 2026-02-11 | 2026-05-15 | ~93 dias | 🟡 Alta |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec guardCommand bug | 2026-03-04 | 2026-05-15 | ~72 dias | 🔴 Crítica |
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | Deepseek v4 thinking model | 2026-04-29 | 2026-05-15 | ~16 dias | 🟠 Alta |

### PRs Estagnados Aguardando Merge

| # | Título | Criado | Prioridade | Bloqueio |
|---|--------|--------|------------|----------|
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | allow relative script paths in exec guard | 2026-05-07 | 🔴 Crítica | Nenhum — precisa review |
| [#2827](https://github.com/sipeed/picoclaw/pull/2827) | skip canonical ID parsing for @-prefixed allow_from | 2026-05-08 | 🔴 Crítica | Nenhum — precisa review |
| [#2822](https://github.com/sipeed/picoclaw/pull/2822) | dismiss child tool feedback after sync | 2026-05-08 | 🟠 Alta | Nenhum |
| [#2794](https://github.com/sipeed/picoclaw/pull/2794) | preserve origin context for async follow-ups | 2026-05-07 | 🟠 Alta | Nenhum |

### Recomendações Prioritárias

1. **Revisar PRs stale relacionados a Matrix** (#2827) — múltiplas issues bloqueadas pelo mesmo bug
2. **Revisar PR #2814** — corrige false positive de segurança no exec tool
3. **Triangular issue #28** (LM Studio) — alta demanda comunitária sem resposta técnica
4. **Investigar bug Android #2744** — regressão na v0.2.8 pode afetar base de usuários

---

**Fim do Relatório**

*Gerado automaticamente com base em dados do GitHub de 2026-05-16*
*Próxima atualização recomendada: 2026-05-17*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-16

---

## 1. Panorama do Dia

O projeto IronClaw mantém um alto nível de atividade com 19 issues e 50 PRs atualizados nas últimas 24h. A release `v0.28.2` (2026-05-14) trouxe correções críticas nas extensões e refatorou a camada de autenticação de providers para trás de facades, sinalizando maturidade crescente. A integração do "Reborn" domina o pipeline ativo: pelo menos 11 dos 50 PRs são ramificações ou evoluções da stack Reborn (WS13–WS17, WebUI Beta, storage dispatch), indicando que o projeto está em plena fase de composição e preparação para corte de produção. Ao mesmo tempo, o fluxo de features, correções e documentação permanece distribuído entre outros módulos (TUI, hooks, Responses API), sugerindo uma codebase saudável com múltiplas áreas sendo concurrently evoluídas.

---

## 2. Lançamentos

### ironclaw-v0.28.2
**Data:** 2026-05-14 | **Tag:** `ironclaw-v0.28.2`

| Categoria | Mudança |
|---|---|
| **Fix** | *(extensions)* Restaurou `tool_install` driven por chat + consertou double-invoke + auto-approve footgun ([#3559](https://github.com/nearai/ironclaw/pull/3559)) |
| **Changed** | *(llm)* Autenticação de provider, fetch de modelos e configuração de embeddings agora estão atrás de facades internas ([#3416](https://github.com/nearai/ironclaw/pull/3416)) |

- **Breaking changes:** Nenhuma declarada nesta release.
- **Notas de migração:** A mudança para facadas de autenticação é retrocompatível para consumidores da API pública. Extensões que acessavam diretamente os campos internos de providers precisam ser atualizadas para usar os novos pontos de acesso abstraídos.
- **Estado crates.io:** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) reporta que `crates.io` ainda está em `0.24.0` — consumidores de bibliotecas downstream estão pinned a uma versão 4 releases atrás. Impacto: **risco médio-alto** para o ecossistema.

---

## 3. Progresso do Projeto — PRs Merged/Fechados Hoje

| PR | Tamanho | Escopo | O que avançou |
|---|---|---|---|
| [#3685](https://github.com/nearai/ironclaw/pull/3685) | XL | WS-13 (Reborn) | Wiring de live cancellation no host — separação do fix durável de evidências da fiação de cancelamento em tempo real |
| [#3684](https://github.com/nearai/ironclaw/pull/3684) | S | WS-13 (Reborn) | Verificação de `LoopExit::Cancelled` a partir de turn state durável — PR focado extraído do pipeline de fixes WS13 |
| [#3648](https://github.com/nearai/ironclaw/pull/3648) | XL | WS-13 (Reborn) | Adicionou host cancellation accessor para o loop planejado — give the planned loop um sinal de cancellation sem misturar estado no histórico de chat |
| [#3659](https://github.com/nearai/ironclaw/pull/3659) | XL | filesystem/dependencies | Foundation unificada de storage: trait `RootFilesystem`, tipo `Entry` único, ops padronizados (`put`/`get`/`delete`/etc.), backends SQL + indexer |
| [#3650](https://github.com/nearai/ironclaw/pull/3650) | XL | WS-14 (Reborn) | Integração explícita de WS-9 + WS-10 + WS-11 + WS-12 + WS-13 + WS-15 — base coerente com suporte a capability, checkpoint, input, progress, cancellation e identity-context |
| [#3693](https://github.com/nearai/ironclaw/pull/3693) | — | WebUI (Reborn) | Closed como superseded — PR limpo cut from `main` criado em [#3694](https://github.com/nearai/ironclaw/pull/3694) |
| [#3662](https://github.com/nearai/ironclaw/pull/3662) | — | docs | WIP revert de commit que adicionou `AGENTS.md` para instruções do Abound assistant |

### Destaque: Stack Reborn em fase de integração

Os PRs [#3650](https://github.com/nearai/ironclaw/pull/3650), [#3651](https://github.com/nearai/ironclaw/pull/3651), [#3652](https://github.com/nearai/ironclaw/pull/3652), [#3653](https://github.com/nearai/ironclaw/pull/3653), [#3684](https://github.com/nearai/ironclaw/pull/3684), [#3685](https://github.com/nearai/ironclaw/pull/3685) formam uma cadeia de trabalho coordenado do Reborn que está convergindo para composição de runtime de produção. O branch WS17 ([#3653](https://github.com/nearai/ironclaw/pull/3653)) prova que o inbound path consegue selecionar o runtime planejado para uma mensagem de usuário comum e persistir a resposta no histórico visível — marco crítico para o cutover de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Comentários | Reações | Tema |
|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 4 | 0 | **Crates.io desync** — releases `0.25.0` a `0.27.0` existem no GitHub mas não no crates.io. Downstream pinned a `0.24.0`. Awaiting Resolução do time de release. |
| [#3616](https://github.com/nearai/ironclaw/issues/3616) | 2 | 0 | **Reborn production wiring** — conecta o app/gateway/channel ingress ao product live workflow. Membro: henrypark133, desde 2026-05-14. |
| [#3602](https://github.com/nearai/ironclaw/issues/3602) | 1 | 0 | **Reborn readiness gate** — `RebornLoopProductionReport.is_ready()` não é chamado no startup. Falha-fechada não configurada em produção. |
| [#3622](https://github.com/nearai/ironclaw/issues/3622) | 1 | 0 | **Reborn verification** — verificação de evidências de completion e result refs de tool-result para o usuário. |
| [#3620](https://github.com/nearai/ironclaw/issues/3620) | 1 | 0 | **Reborn capability calls** — conversão de tool calls do provider em `ParentLoopOutput::CapabilityCalls`. |

### PRs com maior atenção (por contexto e tamanho)

| PR | Tamanho | Escopo | Tema |
|---|---|---|---|
| [#3686](https://github.com/nearai/ironclaw/pull/3686) | L | WS-13 (Reborn) | Reconhecimento de inputs drenados antes de exit de cancelamento — follow-up direto de #3685 |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | XL | db/storage | Aplicação universal do `RootFilesystem` em todos os consumer crates — +15.214 / -929 LOC em 61 arquivos |
| [#3694](https://github.com/nearai/ironclaw/pull/3694) | M | WebUI (Reborn) | Guards de idempotência de replay para send-message — scope estendido para contexto do caller autenticado |
| [#3691](https://github.com/nearai/ironclaw/pull/3691) | XL | product-workflow | Adição do `WebUiService` facade — cobertura das 4 operações WebUI (create_thread, send_message, cancel_run, resolve_gate) |
| [#3665](https://github.com/nearai/ironclaw/pull/3665) | L | engine | Flag `IRONCLAW_DISABLE_CODEACT` para desabilitar v2 CodeAct — toggle para structured-tools-only fallback |

**Análise:** A comunidade está fortemente concentrada em duas vertentes: (1) a integração Reborn como sistema de agentes de próxima geração, e (2) a surface WebUI beta como ponto de contato com usuários finais. Issues de ergonomia ou bugs pontuais (TUI, provider) têm menos comments mas aparecem como reclamações diretas.

---

## 5. Bugs e Estabilidade

### Alta Severidade

| Issue | Descrição | Status |
|---|---|---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | **Nightly E2E failed** — teste E2E agendado falhou na run `25900097413` (commit `faf2ed446534a4bb403b375da05061ed636427fb`). Falhou em `E2E (features)`. Reportado por `github-actions[bot]`. | **OPEN** — ação de CI requerida |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Crates.io desync** — impacto ecossistema: versões `0.25.0`–`0.27.0` não disponíveis em crates.io, downstream pinned a `0.24.0` vulnerável a CVEs do wasmtime 28.x. | **OPEN** — resolução de release pendente |

### Média Severidade

| Issue | Descrição | Escopo | Status |
|---|---|---|---|
| [#3690](https://github.com/nearai/ironclaw/issues/3690) | Hooks expõem `RuntimeEvent` completo para hooks Installed-tier, vazando campos além do necessário. Follow-up de PR #3640. | hooks | **OPEN** |
| [#3689](https://github.com/nearai/ironclaw/issues/3689) | hooks Installed-tier podem causar mutual recursion fan-out: hook falha → `HookFailed` event → hook observa → falha novamente → loop. Sem DoS dispatch budget por hook. | hooks | **OPEN** |
| [#3673](https://github.com/nearai/ironclaw/issues/3673) | `openai_compatible` provider dropa `reasoning_content` em outgoing requests, quebrando DeepSeek v4-pro multi-turn tool calls. QA test 2026-05-15. | llm/provider | **OPEN** |

### Baixa Severidade / UX

| Issue | Descrição | Status |
|---|---|---|
| [#3675](https://github.com/nearai/ironclaw/issues/3675) | TUI não renderiza markdown tables corretamente — saída de tools com tables aparece como texto plano. Relatado por chenyulue. | **OPEN** |

### Avaliação de Estabilidade

- **CI/CD:** Nightly E2E falhou — verificar estado da pipeline. Impacto: regressions podem passar despercebidas.
- **Hooks system:** Duas issues inter-relacionadas sobre exposição excessiva de eventos e ausência de rate limiting. Arquiteturalmente corretável sem quebra de API pública.
- **LLM providers:** Bug confirmado no `openai_compatible` provider com DeepSeek. Severidade média, mas impacta multi-turn tool use cases.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas com Prioridade Explícita (P0)

| Issue | Descrição | Módulo | Status |
|---|---|---|---|
| [#3611](https://github.com/nearai/ironclaw/issues/3611) | Implementar rotas nativas mínimas do WebChat v2 para Reborn WebUI Beta — criar thread, enviar mensagem, get timeline/snapshot | M1-WebUI Product | **OPEN** |
| [#3625](https://github.com/nearai/ironclaw/issues/3625) | Adicionar idempotência e ledger de mensagens aceitas para WebUI — duplicatas de browser não criam turns/mensagens duplicadas | M2-Inbound | **OPEN** |
| [#3626](https://github.com/nearai/ironclaw/issues/3626) | Bind WebUI caller + thread scope ao `TurnScope` canônico — resolução tenant/user/thread + binding refs | M2-Inbound | **OPEN** |
| [#3627](https://github.com/nearai/ironclaw/issues/3627) | Implementar facade `RebornServices` com methods `submit_turn`, `cancel_run`, `resolve_gate` | M2-Inbound | **OPEN** |
| [#3624](https://github.com/nearai/ironclaw/issues/3624) | Definir contrato DTO inbound para WebUI beta — DTOs tipados para operações | M2-Inbound | **CLOSED** ✅ |

### Features com Sinais de Roadmap

| Issue | Descrição | Escopo | Status |
|---|---|---|---|
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | Adicionar tool HTTP first-party built-in (`builtin.http`) — método, URL, headers, body UTF-8/JSON ou base64, limits e timeouts via `RuntimeHttpEgress` | reborn | **OPEN** |
| [#3665](https://github.com/nearai/ironclaw/pull/3665) | `IRONCLAW_DISABLE_CODEACT` flag — toggle de CodeAct para structured-tools-only. Default unset = zero risk. | engine | **OPEN** |
| [#3641](https://github.com/nearai/ironclaw/pull/3641) | Plumb `temperature` via Responses API — antes rejeitava payload com temperature, agora flui para `ReasoningContext` | api | **OPEN** |
| [#3658](https://github.com/nearai/ironclaw/pull/3658) | Ctrl-S no Logs tab do TUI faz download do log ring buffer — adiciona toast com path completo | tui | **OPEN** |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | Refactor ProductAdapter para projeção de `ExtensionManifestV2` — manifest único em vez de TOML separado | reborn | **OPEN** |
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | Adicionar policy-gated personal identity e heartbeat prompt context — deferred de WS-15 (PR #3649) | reborn | **OPEN** |

**Sinais de roadmap observados:**
- O módulo "Reborn WebUI Beta" (#3607) domina a fila P0 com 5 sub-issues ativas, todas do mesmo autor (serrrfirat), indicando entrega acelerada.
- `builtin.http` como tool first-party sinaliza expansão da superfície de ferramentas nativas.
- `IRONCLAW_DISABLE_CODEACT` é um feature flag de rollback — indica que a equipe está se preparando para rollout progressivo do CodeAct v2.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Desync de crates.io** ([#3259](https://github.com/nearai/ironclaw/issues/3259)) — downstreams consumidores do `ironclaw` crate via cargo não recebem atualizações há quase 1 mês. A comunidade sinaliza isso como risco operacional.

2. **Markdown tables na TUI** ([#3675](https://github.com/nearai/ironclaw/issues/3675)) — usuários que usam tools com output tabular sofrem DX degradado. Bug de render simples, mas impacto perceptual alto para quem trabalha no terminal.

3. **DeepSeek multi-turn tool calls** ([#3673](https://github.com/nearai/ironclaw/issues/3673)) — QA reporta que `reasoning_content` é dropado, quebrando cenário real de uso com DeepSeek v4-pro.

### Cenários de Uso Observados

- **Agents first-party:** A ênfase em Reborn + WebUI Beta demonstra que o principal caso de uso em evolução é o agente de IA para interface web com idempotência, gates de resolução e lifecycle de run completo.
- **Extensões de terceiros:** O trabalho em hooks ([#3690](https://github.com/nearai/ironclaw/issues/3690), [#3689](https://github.com/nearai/ironclaw/issues/3689)) sinaliza que a plataforma está investindo em segurança e isolamento para extensions Installed-tier.
- **Storage multi-backend:** O refactor de storage unificado ([#3659](https://github.com/nearai/ironclaw/pull/3659), [#3679](https://github.com/nearai/ironclaw/pull/3679)) indica demanda de flexibilidade de deployment (SQL + filesystem) em ambientes downstream.

### Satisfação Geral

- Atividade de PRs (50 em 24h) demonstra contributors ativos e healthy.
- Releases frequentes (v0.28.2 em 2 dias antes do relatório) indicam ritmo sustentável.
- Áreas de fricção: publish de crates, render TUI, e comportamento de provider LLM específico.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Prioridade | Motivo da Atenção |
|---|---|---|---|---|
| #3259 — crates.io desync | 11 dias | OPEN | **Alta** | Impacta todos os consumidores via cargo. Versão pinned a `0.24.0` expõe CVEs. Sem comentários do time de release ainda. |
| #3447 — Nightly E2E failed | 6 dias | OPEN | **Alta** | CI quebrado há 6 dias. Sem triagem explícita. Risco de regressions não detectadas. |
| #361

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (agentscope-ai/CoPaw)
**Data:** 2026-05-16 | **Horizonte:** Últimas 24h

---

## 1. Panorama do Dia

O CoPaw mantém um nível de atividade muito elevado para um projeto deste porte. Nas últimas 24h, 29 issues e 50 PRs receberam atualização, sinalizando uma sprint de desenvolvimento intensa com forte participação da comunidade. Não houve release nova, indicando que a equipe可能在下一个版本周期前收敛功能。 Os destaques giram em torno de correções de segurança (backup trust hardening, bypass de file guard), melhoria na cobertura de testes (5 fases de unit test coverage em paralelo) e várias correções de bugs críticos em canais (DingTalk, WeCom, Telegram) e runtime (browser_use CDP timeout, write_file deadlock). A base de code é madura, com mais de 4.400 issues e PRs, e o volume de atividade sugere um ciclo de release ativo.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último tag visível nos dados é a versão **v1.1.7b1** (referenciada em Issue #4314). A versão estável mais recente mencionada pelos usuários é **v1.1.6** e **v1.1.7** (desktop app para macOS 15). Conforme Issue #4430, usuários que migrarem de 1.1.6 → 1.1.7 no desktop app precisam desinstalar/reinstalar, e há preocupação explícita sobre preservação de configs (API keys, histórico de chats). A equipe deve comunicar claramente o caminho de migração e a localização dos dados em `~/.qwenpaw/` para evitar fricção na adoção.

---

## 3. Progresso do Projeto

As seguintes PRs foram merged/fechadas nas últimas 24h e representam avanço concreto:

| PR | Descrição | Impacto |
|---|---|---|
| [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) | Fix(backup): backup import restore trust controls | Segurança — HMAC signing + validação de assinaturas em backup restore |
| [#4423](https://github.com/agentscope-ai/QwenPaw/pull/4423) | fix(plugin): resolve CloudPaw plugin issues + Alibaba Cloud Skills | Estabilidade — corrige import error no `a2a_call`, integra CloudPaw bundle |
| [#4427](https://github.com/agentscope-ai/QwenPaw/pull/4427) | fix(WeCom): suppress duplicate "Thinking…" placeholder on rapid messages | UX — remove placeholders duplicados em mensagens rápidas |
| [#4416](https://github.com/agentscope-ai/QwenPaw/pull/4416) | feat(console): localStorage para pinned state no chat drawer | UX — persiste estado de pinned na interface |
| [#4425](https://github.com/agentscope-ai/QwenPaw/pull/4425) | feat(cron): add timeout em cron jobs + usa run_id | Confiabilidade — timeout em tarefas cron, evita execuções indefinite |
| [#4413](https://github.com/agentscope-ai/QwenPaw/pull/4413) | feat(models): custom headers editor + Anthropic auth token | Funcionalidade — headers HTTP customizáveis por provider |
| [#4429](https://github.com/agentscope-ai/QwenPaw/pull/4429) | Fix(backup): backup restore trust follow-up | Segurança — follow-up do PR #4409, compatibilidade desktop export |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) | feat(plan mode): strengthens plan reaffirm from user message | Segurança — fecha gate bypass onde agent podia executar fora do plan mode |
| [#1580](https://github.com/agentscope-ai/QwenPaw/pull/1580) | feat(security): add yara analyzer to skill scanner | Segurança — scanner de skills com análise YARA |
| [#1581](https://github.com/agentscope-ai/QwenPaw/pull/1581) | feat(security): add consistency analyzer to skill scanner | Segurança — linting de consistência no skill scanner |

**Nota:** Os PRs #1580 e #1581 estavam em branches (`ping/skill-scanner-yara` e `ping/skill-scanner-consistency`) e indicam um trabalho paralelo de hardening de segurança que finalmente foi merged.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

1. **#4342** — `[test] local_models + providers + tunnel + utils unit test coverage (Phase 5)` — 11 comentários
   - hanson-hex lidera esforço massivo de cobertura de testes em 5 fases (#4339, #4340, #4341, #4342)
   - Fase 5 adiciona 7 novos arquivos de teste para módulos críticos com cobertura zero
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/4342)

2. **#3957** — `Bug: Agent workspace switches incorrectly when receiving messages from other agents via channel` — 8 comentários **[CRÍTICO]**
   - Bug de identidade混淆：主控Agent (default workspace) conecta no DingTalk, outro agent envia mensagem, workspace do main被她切换走，导致身份混淆
   - Severidade alta: comportamento imprevisível em ambientes multi-agent
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/3957)

3. **#4051** — `[Question] deepseek模型的think内容解析问题` — 7 comentários
   - deepseek v4 flash think content parsing tem问题，导致没有正常回复
   - Envolvendo version v1.1.4.post2
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/4051)

4. **#4299** — `[Bug] write_file()死循环报错` — 7 comentários **[CRÍTICO]**
   - v1.1.6, conteúdo longo causa erro de argumentos faltantes em write_file()
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/4299)

5. **#1516** — `[Bug] AudioContent not supported in Telegram channel` — 7 comentários
   - Voice messages no Telegram não são processados, AudioContent não é convertido pro formato que o LLM entende
   - [Link](https://github.com/agentscope-ai/QwenPaw/issues/1516)

### Demanda agrupada por tema

| Tema | Issues | Sinal |
|---|---|---|
| **Segurança de configs** | #4421 (Channel config em plaintext no workspace do agent) | **Crítico** — exposição de credenciais |
| **MCP multi-server** | #4428 (PR aberto — mesmo tool name causa descarte silencioso) | Feature necessária para uso enterprise |
| **Test coverage** | #4339, #4340, #4341, #4342 (4 fases simultâneas) | Esforço estruturado de qualidade |
| **DingTalk** | #3109 (ler mensagens引用), #4431 (并行处理 por usuário) | Canal em evolução ativa |
| **Cron jobs** | #4162 (sessão antiga não reset), #4432 (toggle Clear Before Run) | Automação mais robusta |

---

## 5. Bugs e Estabilidade

### Críticos (com potencial de segurança ou crash)

| # | Bug | Severidade | Status | Link |
|---|---|---|---|---|
| #4421 | Channel配置明文写入agent可读的工作目录 — **credenciais expostas** | 🔴 CRÍTICO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4421) |
| #3957 | Agent workspace switches incorrectly when receiving messages from other agents via channel — **身份混淆** | 🔴 CRÍTICO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3957) |
| #4299 | write_file()死循环报错 — conteúdo longo causa crash/loop | 🔴 CRÍTICO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4299) |
| #4361 | File Guard bypass via execute_shell_command — **shell file access bypasses** | 🔴 CRÍTICO | PR aberto | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4361) |

### Altos (afetam experiência principal)

| # | Bug | Severidade | Status | Link |
|---|---|---|---|---|
| #1516 | AudioContent not supported in Telegram channel | 🟠 ALTO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/1516) |
| #2751 | Anthropic API pedido falhar com content.type 'file' não suportado | 🟠 ALTO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2751) |
| #4309 | browser_use CDP timeout causes agent to freeze for 5 minutes | 🟠 ALTO | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4309) |
| #4314 | MiMo thinking mode + tool calls retornam 400 (missing reasoning_content) | 🟠 ALTO | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4314) |
| #4162 | Cron job com sessionId não reseta contexto após skill update | 🟠 ALTO | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4162) |

### Observações de estabilidade

- **4 bugs críticos abertos**, incluindo um de segurança (#4421) e dois de comportamento grave (#3957, #4299). A equipe tem PR #4361 em aberto para um bypass de segurança no file guard.
- A atividade de bugs está dentro do normal para um projeto com 4.400+ issues — a taxa de close é saudável.
- O PR #4198 fechou um gate bypass no plan mode, demonstrando atenção a security hardening.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas com demanda clara

| # | Feature | Descrição | Sinais de roadmap | Link |
|---|---|---|---|---|
| #4406 | List and install built-in plugins | Plugins em `/plugins/` (cloudpaw, qwen-image, wan27, gpt-image2) não são discoverable/instaláveis | Paridade com built-in skills | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4406) |
| #4282 | `/make-skill` command | Criar skill reutilizável a partir da sessão atual com `/make-skill <focus>` | UX de skill authoring | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4282) |
| #4432 | Cron "Clear Before Run" toggle | Reset silencioso de contexto antes de execução de cron job | Automação empresarial | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4432) |
| #4433 | Token usage info in conversation | Estatísticas de token por turn e por sessão no chat UI | Observabilidade | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4433) |
| #4408 | Padronizar arquivos do workspace em `~/.qwenpaw/` | Sugestão inspirada em OpenCode — limpar diretório de trabalho | DX (developer experience) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4408) |
| #4417 | Per-model max_tokens e max_input_length | Configuração por modelo de output limit e context window | Configuração granular | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4417) |
| #4387 | Custom base URL for Anthropic provider | Remove `freeze_url=True` do provider nativo Anthropic | Flexibilidade de deployment | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4387) |

### Sinais de direcionamento estratégico

- **Automação e cron**: Issue #4162 (feedback negativo de usuário) → Issue #4432 (feature proposta) → PR #4425 (implementação merged). Ciclo completo de feedback→feature→ship em 7 dias.
- **Segurança como prioritário**: 2 PRs de segurança merged (#4409, #4429 backup trust), 1 PR em revisão (#4361 file guard), 2 PRs de skill scanner merged (#1580, #1581). A equipe investiu heavily em security hardening neste ciclo.
- **Canal DingTalk em evolução**: Issues #3109 e #4431 sobre mensagens引用 e processamento paralelo, com PR #4420 (unified message processing) já merged.
- **MCP enterprise**: PR #4428 endereça o problema de collision de tool names em múltiplos MCP servers — sinaliza adoção em ambientes enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Migração de versão gera incerteza** (Issue #4430)
   - "卸载重装后，之前 1.1.6 中配置的 API keys、模型参数、对话历史等数据是否会丢失？"
   - **DOR:** Ausência de clear migration path e comunicação sobre localização de dados (`~/.qwenpaw/`).
   - **Satisfação:** Baixa — o usuário está hesitante em atualizar.

2. **Automação de cron job com comportamento não-determinístico** (Issue #4162)
   - "定时任务设置了sessionId，删除会话后、重启后都没有用，只有删除定时任务设置新的session id才可以"
   - **DOR:** Session state persiste mesmo após limpeza, quebrando o modelo mental do usuário sobre "deletar sessão".
   - **Satisfação:** Baixa — o workaround (deletar cron job) é trabalhoso.

3. **Deepseek think content parsing é inconsistente** (Issue #4051)
   - "有时候没有正常回复内容，都在thinking标签里"
   - **DOR:** Modelos com thinking mode produzem output ilegível em certos casos, potencialmente por parsing de tags.
   - **Satisfação:** Baixa — afeta output de produtohabilidade.

4. **Channel configs em plaintext é risco de segurança** (Issue #4421)
   - "Channel 配置明文写入 agent 可读的工作目录"
   - **DOR:** Configs de canais (incluindo credenciais) são escritas em plaintext em diretório acessível ao agent, criando risco de exfiltration.
   - **Satisfação:** N/A — é um finding de segurança.

### Cenários de uso emergentes

- **Multi-agent orchestration**: Issues #3957 e #1516 indicam que usuários estão usando múltiplos agents com canais externos (DingTalk, Telegram) — cenário que o projeto precisa suportar robustamente.
- **Automação empresarial via cron**: Issues #4162 e #4432 mostram que cron jobs são usados para workflows business-critical, não apenas experimentos.
- **MCP em ambientes heterogêneos**: PR #4428 (MCP tool name collision) e Issue #4410 (MCP client TTY detection) indicam adoção de MCP servers diversos, incluindo ferramentas corporativas (yuque-mcp).

---

## 8. Backlog que Merece Atenção

Issues que estão abertas há mais tempo ou sem resposta, ordenadas por tempo desde última atividade:

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|---|---|---|---|---|
| [#827](https://github.com/agentscope-ai/QwenPaw/issues/827) | Docs: add `uv tool install copaw` no Quick start | 2026-03-06 | 2026-05-14 | 1 | 🟡 Docs |
| [#1499](https://github.com/agentscope-ai/QwenPaw/issues/1499) | [Question] 再接入qq时出现报错 "No active model configured" | 2026-03-14 | 2026-05-15 | 4 | 🟠 Alto |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | AudioContent not supported in Telegram channel | 2026-03-15 | 2026-05-15 | 7 | 🔴 Crítico |
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) | Anthropic API: content.type 'file' não suportado | 2026-04-01 | 2026-05-15 | 4 | 🟠 Alto |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) | Wrong info after copaw app start (workspace stopped) | 2026-04-05 | 2026-05-15 | 7 | 🟡 Medium |
| [#3796](https://github.com/agentscope-ai/QwenPaw/issues/3796) | 请求添加自定义 Provider HTTP Headers 支持 | 2026-04-24 | 2026-05-15 | 1 | 🟢 Feature (parcialmente endereçado por #4413) |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent workspace switches incorrectly (身份混淆) | 2026-04-29 | 2026-05-15 | 8 | 🔴 Crítico |
| [#

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-16

---

## 1. Panorama do Dia

O ecossistema ZeroClaw manteve uma atividade intensa em 15 de maio de 2026, com **50 PRs e 19 issues atualizados** nas últimas 24h. A comunidade demonstra maturidade ao enfrentar bugs de segurança críticos em paralelo com o desenvolvimento de features de grande porte. O destaque vai para a preparacão da versão **v0.8.0 "Multi-Agent Runtime and Schema V3"** (#6398), que consolida avanços em runtime, canais e provedores. O projeto evidencia boa saúde geral, mas há alertas de segurança pendentes (TLS hostname verification, path policy, skill naming) que exigem atenção imediata. Nenhum release foi publicado hoje.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

A ausência de release se justifica pela concentração de esforços em PRs de grande porte (v0.8.0) e pela existência de bugs críticos (S0/S1) ainda em avaliação. Recomenda-se monitorar a evolução dos PRs #6398, #6649 e #5652 como candidatos ao próximo tag.

---

## 3. Progresso do Projeto

### PRs closed/merged hoje

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#6367](https://github.com/zeroclaw-labs/zeroclaw/pull/6367) | `feat(gateway): expose version in /api/status` | gateway | Versão exposta na API e sidebar web; aids de debugging |
| [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | `[Bug]: Cron read-only queries still hit writable path` | cron/daemon | Reduz escrita desnecessária em operações read-only |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | `[Bug]: bash completion infinite recursion` | CLI | Resolve crash de SSH ao usar tab-completion |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | `[Bug]: allowed_Path doesn't respect contains logic` | security | Corrige bypass de path policy (S0 — data loss/security risk) |
| [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | `Web chat — tool approval UI for supervised-mode` | gateway/web | Interface de aprovação de tools no frontend web |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | `Document skill audit scope decision` | skills/security | Clareza sobre escopo de auditoria de skills |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | `[Bug]: Docker bind mount shadows web dashboard` | runtime/daemon | Resolve dashboard indisponível com volumes Docker |
| [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) | `ci: Advisory scan failed — TLS hostname verification` | dependencies/security | Alerta sobre TLS no BoringSSL backend da `lettre` |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | `feat(tools): session ownership model` | gateway/security | Modelo de ownership para operações destrutivas em sessões |

### PRs abertos de destaque (em revisão ativa)

| # | Título | Tamanho | Status |
|---|--------|---------|--------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | `v0.8.0: Multi-Agent Runtime and Schema V3` | XL | Incremental review |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | `feat(gateway,web): nodes dashboard + device identification` | XL | needs-author-action |
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | `feat(channels): per-recipient reply pacing` | XL | needs-author-action |
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | `feat(channels/acp): persist ACP sessions` | XL | Ativo |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | `feat(provider): native extended thinking (Anthropic/Bedrock)` | L | Ativo |
| [#6429](https://github.com/zeroclaw-labs/zeroclaw/pull/6429) | `feat(channel:twilio): add Twilio SMS channel` | L | Ativo |
| [#6438](https://github.com/zeroclaw-labs/zeroclaw/pull/6438) | `feat(channel:zulip): add Zulip channel` | XL | Ativo |
| [#6426](https://github.com/zeroclaw-labs/zeroclaw/pull/6426) | `feat(channel:mastodon): add Mastodon ActivityPub channel` | XL | Ativo |
| [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) | `feat(providers/claude-code): add vision input support` | L | Ativo |
| [#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446) | `feat(channel:twitch): add Twitch chat channel` | M | Ativo |
| [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) | `feat(skills): background review fork + skill_manage tool` | — | Ativo |
| [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) | `fix(skills): run ClawHub install on the async runtime` | — | Criado hoje |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/revisões)

| # | Título | Comentários | Tipo | Insight |
|---|--------|-------------|------|---------|
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | `[Bug]: Cron job output not routed to configured channels` | 4 | Bug (P1) | Usuários dependem de Telegram para notificações; cron + channel integration é dor real |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | `feat(tools): session ownership model for destructive operations` | 4 | Enhancement (P2) | Concerns de segurança sobre isolation de sessões entre agents; pedido recorrente |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | `Propose SearXNG search support and improve Web Search` | 3 | Enhancement (P2) | Comunidade demanda privacidade e robustez (CAPTCHA detection); alta demanda |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | `audit: track 153 commits lost in bulk revert c3ff635` | 2 | Enhancement (P2) | Transparência sobre rollback massivo; comunidade alerta para perda de código |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | `Document skill audit scope decision` | 2 | Enhancement (P2) | Documentação de política de segurança para skills; boa governança |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | `[Bug]: allowed_Path doesn't respect contains logic` | 2 | Bug (P1/S0) | Bypass de path policy = risco de segurança; fechado hoje |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | `[Bug]: Docker bind mount shadows web dashboard` | 1 | Bug (P1) | Deployment com Docker é crítico; fechado hoje |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | `Track: zeroclaw skills support and UX (v0.7.6)` | 1 | Feature (P1) | Skills é tema central da v0.7.6; many users want better skill management |
| [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) | `ci: Advisory scan failed — TLS hostname verification` | 1 | Security/Dep | Vulnerabilidade em dependência `lettre` com Boring TLS backend |

**Análise:** A comunidade demonstra forte interesse em **skills, channels, e segurança**. O volume de novos canais (Twitch, Twilio, Zulip, Mastodon, Telegram) reflete demanda por conectividade. Issues de segurança (#5833, #5533) geram engajamento técnico. O rollback de 153 commits (#6074) é um ponto de atenção — a comunidade acompanha a recuperação de código perdido.

---

## 5. Bugs e Estabilidade

### Por Severidade (S0 > S1 > S2 > S3)

| Severidade | # | Título | Status | Ação |
|------------|---|--------|--------|------|
| **S0** | [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | `allowed_Path doesn't respect contains logic` | ✅ Closed | Corrigido |
| **S0** | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content not passed back in Xiaomi thinking mode` | 🆕 Open | Requer triagem |
| **S1** | [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | `zeroclaw skills install clawhub:* panics` | 🆕 Open | Bug de runtime async; crash imediato |
| **S1** | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | `Cron job output not routed to configured channels` | 🆕 Open | Workflow bloqueado para notificações |
| **S2** | [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | `Docker bind mount shadows web dashboard` | ✅ Closed | Deploy Docker degradado |
| **S2** | [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | `bash completion infinite recursion` | ✅ Closed | Crash de SSH session |
| **S2** | [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) | `ci: require fresh PR checks before merging stale branches` | 🆕 Open | Risco de code quality em PRs antigos |
| **S3** | [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | `Cron read-only queries hit writable schema path` | ✅ Closed | Desempenho; write path desnecessário |

### Bugs de Segurança em Aberto

| # | Título | Risco | Detalhe |
|---|--------|-------|---------|
| [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) | `Advisory scan failed — TLS hostname verification` | 🔴 High | Boring TLS backend desabilita hostname verification na `lettre` |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | `Session ownership model for destructive operations` | 🔴 High | Agents podem resetar/deletar sessões de outros agents; blocked/need-review |
| [#6236](https://github.com/zeroclaw-labs/zeroclaw/pull/6236) | `fix(security): allow safe device redirect targets` | 🔴 High | PR aberto para corrigir path policy; rebase concluído |
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | `Skill tools rejected by Anthropic API — invalid naming` | 🔴 High | `format!("{}.{}", ...)` produz nomes que violam `^[a-zA-Z0-9_-]{1,128}$`; todos os custom skills afetados |

**Resumo de estabilidade:** 4 bugs S0/S1/S2 novos abertos hoje; 4 bugs críticos fechados. O bug #6678 é particularmente urgente — **bloqueia todos os custom skills com tools** para usuários do Anthropic API.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas hoje

| # | Título | Categoria | Prioridade | Roadmap Signal |
|---|--------|-----------|------------|----------------|
| [#6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670) | `Localize skills install output with Fluent` | i18n/skills | P2 | Fluent é política oficial do repo; localization em toda CLI |
| [#6669](https://github.com/zeroclaw-labs/zeroclaw/issues/6669) | `Audit observability backends for split-instance sinks` | observability | P2 | Aftermath de #6596; necessidade de Prometheus/OTEL correto |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | `Track: zeroclaw skills support and UX (v0.7.6)` | skills | P1 | **Tema oficial da v0.7.6** — skills é foco de release |
| [#5669](https://github.com/zeroclaw-labs/zeroclaw/issues/5669) | `Propose SearXNG search support + CAPTCHA detection` | tool/web | P2 | Privacidade (SearXNG) + robustez (DuckDuckGo CAPTCHA) |

### Sinais de roadmap derivados dos PRs em curso

| Tema | PRs | Evidência |
|------|-----|-----------|
| **Multi

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*