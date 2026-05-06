# Resumo diário do ecossistema de agentes de IA 2026-05-07

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-05-06 21:07 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal


# Relatório do Projeto NullClaw — 2026-05-07

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade no curto prazo**, sem novos commits, releases ou issues registradas nas últimas 24h. O foco atual está na evolução do subsistema de agendamento: a PR #783 traz um motor de cron subagent com backend em banco de dados, histórico de execuções, output JSON e reforços de segurança. Não houve movimentação de issues ou merges, indicando possivelmente fase de revisão de código ou período de maturação antes do próximo release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. A última atividade relevante de desenvolvimento concentra-se na PR #783 (em revisão), que introduz funcionalidades substanciais — sugere-se verificar o changelog do próximo release para incorporação dessas mudanças.

---

## 3. Progresso do Projeto

| PR | Status | Título | Impacto |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | **OPEN** | feat(cron): cron subagent, run history, JSON output, security hardening | ⭐ Alto |

**Análise da PR #783:**

- **Motor de cron subagent** com scheduler baseado em banco de dados (`cron_runs`, `cron_run_queue` worker)
- Suporte a jobs do tipo **skill, agent e shell** com offsets de timezone por job
- **Roteamento de entrega** e alertas para operadores
- Output JSON para CLI (`cron list --json`, `cron schedule --json`)
- **Hardening de segurança** integrado

Esta PR representa uma evolução significativa na capacidade de automação do NullClaw, introduzindo persistência, observabilidade (histórico) e uma interface padronizada para o subsistema de cron.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue com comentários registrados nas últimas 24h.**

A PR #783, embora não possua reações upvote no momento (0 👍), representa o tema de maior escopo em discussão, combinando múltiplas demandas:

- **Automação programável** (cron jobs)
- **Observabilidade** (histórico de execuções)
- **Interoperabilidade** (output JSON para integração com outras ferramentas)
- **Segurança** (hardening)

A ausência de reação pode indicar que a PR ainda está em revisão inicial ou que a comunidade ainda não a descobriu.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

O projeto não apresenta issues de bugs abertas ou fechadas neste período. A base de código aparenta estabilidade operacional no momento da análise.

---

## 6. Pedidos de Features e Sinais de Roadmap

**PR em destaque: [#783](https://github.com/nullclaw/nullclaw/pull/783)**

A feature de cron subagent indica direções estratégicas do projeto:

| Categoria | Indicação |
|---|---|
| **Automação** | Evolução para sistema de tarefas agendadas com persistência |
| **Observabilidade** | Histórico de runs (`cron_runs`) para debugging e auditing |
| **API/CLI** | Interface JSON para integração com pipelines externos |
| **Segurança** | Reforço em autenticação/autorização para operações agendadas |

**Sinais de roadmap:**
- Jobs programáveis com suporte a múltiplos tipos (skill/agent/shell)
- Sistema de alerts para operadores em caso de falhas
- TZ-aware scheduling

---

## 7. Resumo de Feedback dos Usuários

**Nenhum feedback explícito registrado nas últimas 24h** (sem issues de feedback ou comentários).

Com base na PR #783 em aberto, pode-se inferir demandas da comunidade:

- **Necessidade de automação recorrente** (cron jobs)
- **Demanda por logs/histórico** de operações executadas
- **Interoperabilidade** via JSON para integração em ambientes DevOps/CLI
- **Segurança robusta** para operações críticas agendadas

A comunidade parece estar empurrando o NullClaw de um assistente reativo para uma **plataforma de automação proativa**.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Prioridade | Observação |
|---|---|---|---|---|
| PR #783 | Feature | ~30 dias (aberta desde 2026-04-07) | **Alta** | Aguardando review/merge — funcionalidade substancial |

**Recomendação:**

A PR #783, aberta há aproximadamente 30 dias e atualizada em 2026-05-06, deve receber atenção de maintainers para:

1. **Code review** e validação da arquitetura de banco de dados
2. **Testes de segurança** no hardening implementado
3. **Documentação** do novo subsistema cron
4. **Decisão de release** (pode justificar uma nova versão minor ou major)

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---|---|---|
| Issues ativas (24h) | 0 | Estável |
| PRs abertas (24h) | 1 | Neutra |
| Merges (24h) | 0 | Sem variação |
| Releases (24h) | 0 | Sem variação |
| **Saúde geral** | 🟡 Moderada | Revisão de PR pendente |

---

*Relatório gerado em 2026-05-07 com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-07

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **polarização intensa** em 07/05/2026. Enquanto Hermes Agent, ZeroClaw e IronClaw demonstram atividade massiva com dezenas de PRs por dia, NullClaw permanece em modo de estagnação aparente, sinalizando possível risco de abandono ou reestruturação interna. A dominante tendência transversal é a **multi-canalidade**: todos os projetos priorizam integrações com Telegram, Discord, WhatsApp, Slack e canais alternativos (SMS, Mastodon, LINE), indicando que a guerra por presença está na interoperabilidade. A segunda tendência é a **segurança como prioridade crescente** — três projetos (NanoBot, CoPaw, ZeroClaw) reportam vulnerabilidades críticas ou bugs S0 simultaneamente, evidenciando que a rápida expansão de features está criando superfície de ataque. A arquitetura "provider-agnostic" emerge como padrão de facto, com ZeroClaw liderando a diversificação (9 novos provedores em 24h).

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | Issues Fechadas (24h) | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde | Tendência |
|---------|:------------:|:---------------------:|:-----------:|:----------------:|:--------------:|:-----:|:---------:|
| **Hermes Agent** | 45 | 5 | 34 | 16 | 0 | 🟡 Moderada | ↑ Forte |
| **ZeroClaw** | 39 | 11 | ~60 | 3 | 0 | 🔴 Atenção | ↑ Volátil |
| **IronClaw** | ~10 | 8 | ~21 | 27 | 0 | 🟢 Estável | ↑ Progressiva |
| **NanoBot** | 6 | 8 | 17 | 8 | 0 | 🟢 Boa | ↑ Constante |
| **CoPaw** | 24 | 17 | 12 | 14 | 1 | 🟢 Boa | ↑ Incremental |
| **PicoClaw** | ~15 | ~6 | ~15 | ~10 | 1 (nightly) | 🟡 Moderada | ↑ Ativa |
| **NullClaw** | 0 | 0 | 1 | 0 | 0 | 🔴 Crítica | → Estagnada |

**Observações:**
- **ZeroClaw** lidera em volume absoluto de eventos (100+), mas o volume esconde problemas: 2 bugs S0 reportados no mesmo dia sem resposta.
- **IronClaw** demonstra a melhor relação merged/ativo (27 de 48 PRs fechados), sinalizando ciclo de review maduro durante reescrita arquitetural.
- **NullClaw** é o único projeto sem nenhum evento ativo, raising concerns about project viability.
- **NanoBot** apresenta a melhor taxa de resolução de issues (8/14 = 57%) e PRs merged (8 em 24h) para seu porte.

---

## 3. Posicionamento do Projeto Principal

Dado o volume e impacto, **ZeroClaw** emerge como o "projeto principal" do ecossistema pelo critério de atividade massiva, porém com ressalvas críticas:

### Vantagens Competitivas

| Dimensão | Posição do ZeroClaw | Diferencial |
|----------|---------------------|-------------|
| **Ecossistema de Providers** | Líder absoluto — 9 novos provedores em 24h (Inception Labs, Lambda, Arcee, GitHub Models, Upstage, Morph, Featherless) | Estratégia "agregador universal OpenAI-compatible" |
| **Automação IoT** | Único com tools nativas (eight_sleep, philips_hue, home_assistant) | Posicionamento como hub de controle pessoal |
| **Expansão de Canais** | SMS (4 provedores), Mastodon, LINE em pipeline | Diversificação agressiva de canais |
| **Memória Vetorial** | Feature request #4028 com 5 comentários — demanda validada | Roadmap direcionado para pgvector + grafos |

### Diferenças Técnicas vs. Pares

| Aspecto | ZeroClaw | Hermes Agent | NanoBot | IronClaw |
|---------|----------|--------------|---------|----------|
| **Arquitetura** | Provider-agnostic + typed-family split | CLI-first + gateway | Multi-canal | Reborn rewrite (Rust-inspired) |
| **Linguagem** | Python | Python | Python | Python |
| **Persistência** | SQLite + PostgreSQL opcional | Memória volátil | Local + MCP | Durable persistence (Reborn) |
| **Segurança** | Tool Guard com auto-deny | Policy de self-improvement | Escopo de Dream | Runtime policy substrate |
| **Orquestração** | CLI + WebUI | TUI + CLI | WebUI + API | Multi-tenant Slack relay |

### Tamanho da Comunidade

- **Hermes Agent**: Maior volume bruto (50 issues + 50 PRs), indicando base de usuários mais ampla ou mais ativa.
- **ZeroClaw**: Volume alto com contributors diversificados (songchao0421, singlerider, b0xtch), porém concentração em poucos maintainers.
- **IronClaw**: Contribuidor principal identificado (`serrrfirat`), sugerindo equipe menor porém coordenada.
- **NanoBot**: Base internacional (Flinn-X, Re-bin, Jefsky), mas viés简体中文 predominante.
- **NullClaw**: Praticamente inativa — community size indeterminável pelos dados disponíveis.

---

## 4. Focos Técnicos Compartilhados

Oito necessidades emergem transversalmente em múltiplos projetos:

### A) Agendamento e Automação Cron

| Projeto | Implementação |
|---------|---------------|
| **NullClaw** | PR #783 — motor cron com backend BD, histórico, JSON output |
| **CoPaw** | Issue #4029 — one-shot cron jobs com `--at <iso-datetime>` |
| **ZeroClaw** | Issue #6422 — mensagens de erro para cron_add |
| **NanoBot** | `dream` com scheduling implícito |
| **Hermes Agent** | Fallback behavior em cron jobs (issue #20465) |

**Padrão:** O mercado está evoluindo de assistentes reativos para **plataformas de automação proativa**. O NullClaw liderou a especificação técnica com persistência em BD, JSON CLI, e TZ-awareness.

### B) Modelos de Reasoning e Preservação de Chain-of-Thought

| Projeto | Bug/Feature |
|---------|-------------|
| **NanoBot** | deepseek-v4-flash: `reasoning_content` precisa ser retornado (issue #3665) |
| **PicoClaw** | Deepseek v4 thinking model: `reasoning_content` persistente entre requests (issue #2706) |
| **CoPaw** | DeepSeek cache hit 95% (issue #3891) — otimização de custo |
| **ZeroClaw** | Context compressor dropa `reasoning_content` (issue #6269) |
| **Hermes Agent** | Claude subscription auth issues (issue #6475) |

**Padrão:** Modelos com reasoning (DeepSeek, Claude, Codex) exigem tratamento especial de `reasoning_content` — state que precisa persistir entre requests. Compressão de contexto que não preserva esse campo causa 400 errors ou truncamento de chain-of-thought.

### C) Resiliência de Canais e Reconexão

| Projeto | Problema |
|---------|----------|
| **NanoBot** | WeChat perdia mensagens silenciosamente (#3659); retry backoff no Whisper (#3646) |
| **CoPaw** | DingTalk race condition em streaming (#4042); Telegram retry (#4039) |
| **Hermes Agent** | Termux TUI textos desaparecem (#18390); Telegram LaTeX vazando (#13262) |
| **PicoClaw** | DingTalk SDK panic (#2704); Voice recognition após reload (#2780) |
| **ZeroClaw** | WhatsApp reage a próprias mensagens (S1 #6413) |

**Padrão:** Canais externos (WeChat, DingTalk, Telegram) são fonte primária de bugs de race condition e lifecycle mal gerenciado. A abstração de canal precisa de hardening em: graceful shutdown, task draining, retry exponencial, e idempotência de mensagens.

### D) Segurança e Controlo de Autonomia

| Projeto | Iniciativa |
|---------|------------|
| **NanoBot** | `exec()` inseguro em server.py (#3649) — CRÍTICA |
| **CoPaw** | Path traversal no Windows (#3955) — CRÍTICA |
| **ZeroClaw** | WhatsApp is_from_me leak (#6413) — S1 |
| **Hermes Agent** | Policy para write operations em self-improvement (#19324) |
| **CoPaw** | Tool Guard com auto-deny por rule ID (#4046) |

**Padrão:** A autonomia dos agentes está criando surface de ataque — desde execução insegura de código (`exec()`) até path traversal em servers. O mercado está respondendo com "Tool Guards", políticas de self-improvement, e approval workflows.

### E) Multi-Agente e Interoperabilidade

| Projeto | Feature |
|---------|---------|
| **NanoBot** | Protocolo de identidade Ed25519 entre agentes (issue #3639) |
| **PicoClaw** | Sub-agent herdar role-specific AGENT.md (issue #2775) |
| **IronClaw** | Multi-tenant Slack relay (#3253) |
| **ZeroClaw** | Nodes dashboard + heartbeat tracking (#6391) |

**Padrão:** Emergência de arquiteturas multi-agente com necessidade de: identidade verificável, herança de contexto por role, e coordenação de nodes distributed.

---

## 5. Análise de Diferenciação

### Por Foco de Produto

| Estratégia | Projetos | Caracterização |
|------------|----------|-----------------|
| **Agregador Universal** | ZeroClaw | Máximo número de providers (OpenAI-compatible), canais e ferramentas. Posicionamento como hub open source. |
| **CLI-first Developer** | Hermes Agent | TUI rica, Claude CLI provider, extensibilidade via MCP. Público: desenvolvedores avançados. |
| **Plataforma de Automação** | NullClaw, CoPaw | Cron jobs, agendamento, skill management. Transição de "chatbot" para "agente programável". |
| **Consumer/Multi-Canal** | NanoBot, PicoClaw | Foco em experiência do usuário final via WeChat, WhatsApp, Telegram. Interface amigável. |
| **Enterprise/Rewrite** | IronClaw | Reescrita arquitetural completa (Reborn) com ênfase em durability, multi-tenant, e compatibility. |

### Por Público-Alvo

| Público | Projetos Mais Apropriados | Justificativa |
|---------|--------------------------|---------------|
| **DevOps/Infra** | Hermes Agent, ZeroClaw | MCP tools, gateway, Docker bootstrap, observabilidade |
| **Usuários finais** | NanoBot, PicoClaw | WebUI polish, multi-canal, onboarding simplificado |
| **Pesquisadores** | IronClaw | Arquitetura robusta, durable execution, multi-tenant |
| **Automação pessoal** | CoPaw, ZeroClaw | Cron jobs, home assistant, IoT tools |
| **Mercado Sinophone** | NanoBot, CoPaw | Documentação em chino, base de usuários chino-hablante |

### Por Arquitetura Técnica

| Dimensão | Abordagem Variante |
|----------|-------------------|
| **Persistência** | IronClaw (durable + Reborn) > CoPaw (SQLite) > ZeroClaw (PostgreSQL opcional) > Hermes (volátil) |
| **Provider Abstraction** | ZeroClaw (typed-family split v0.8.0) > PicoClaw (OpenAI-compatible) > Hermes (provider:auto) |
| **Channel Lifecycle** | IronClaw (seam-based) > NanoBot (retry backoff) > CoPaw (graceful draining) |
| **Security Model** | CoPaw (Tool Guard + auto-deny) > Hermes (policy-based) > NanoBot (Dream scope) > ZeroClaw (autonomy levels) |

---

## 6. Tração e Maturidade da Comunidade

### Ranking de Velocidade de Iteração

| Posição | Projeto | PRs/24h | Ratio Fechado/Aberto | Velocidade |
|---------|:-------:|:--------:|:---------------------:|:----------:|
| 1 | **IronClaw** | 27 | 27/48 (56%) | ⬆⬆⬆ Muy rápida |
| 2 | **CoPaw** | 14 | 14/26 (54%) | ⬆⬆⬆ Rápida |
| 3 | **Hermes Agent** | 16 | 16/50 (32%) | ⬆⬆ Moderada |
| 4 | **NanoBot** | 8 | 8/14 (57%) | ⬆⬆ Moderada-alta |
| 5 | **PicoClaw** | ~10 | ~10/21 (48%) | ⬆⬆ Moderada |
| 6 | **ZeroClaw** | 3 | 3/100 (3%) | ⬆ Baixa |
| 7 | **NullClaw** | 0 | 0/1 (0%) | ⏸ Estagnada |

**Análise:**
- **IronClaw** demonstra maturidade excepcional — mesmo durante reescrita arquitetural massiva (Reborn), mantém ciclo de review e merge高效的. O investimento em +3.044 LOC de testes (E2E) sinaliza cultura de qualidade.
- **ZeroClaw** paradoxal: volume alto de eventos mas baixa taxa de fechamento. A estratégia de expansão massiva de providers (9 PRs simultâneos) está consumindo bandwidth de maintainers, deixando bugs S0 sem resposta.
- **NullClaw** está em risco de project death spiral — PR #783 aberta há 30 dias sem merge, zero atividade comunitária.

### Ranking de Qualidade de Bug Response

| Posição | Projeto | Tempo Médio de Resposta | Severidade Máxima |
|:-------:|:-------:|:----------------------:|:-----------------:|
| 1 | **NanoBot** | <24h (8/14 bugs resolvidos) | P2 (Codex duplicate items) |
| 2 | **CoPaw** | <24h (path traversal issue) | Crítica (fechada rapidamente) |
| 3 | **Hermes Agent** | 24-48h | P1 (CLI fallback) |
| 4 | **IronClaw** | ~3-4 dias (PRs aguardando) | Crítica (sem assignee) |
| 5 | **PicoClaw** | 30-74 dias (retry bug) | Bloqueante (#2769) |
| 6 | **ZeroClaw** | >48h sem resposta | S0 (WorkspaceManager) |
| 7 | **NullClaw** | N/A | Estagnação completa |

### Sinais de Maturidade Organizacional

| Indicador | Projetos Maduros | Projetos Imaturos |
|-----------|:----------------:|:-----------------:|
| **E2E Tests** | IronClaw (+3.044 LOC), PicoClaw | NullClaw, ZeroClaw |
| **Changelog formal** | Nenhum (gap geral) | — |
| **Milestone tracking** | ZeroClaw (#5878) | — |
| **Segurança responsável** | NanoBot (scanner), CoPaw (Tool Guard) | — |
| **Breaking changes tracking** | CoPaw (patch releases) | — |
| **Code coverage metrics** | IronClaw | — |

---

## 7. Sinais de Tendência

### A) "Provider-Agnostic" Como Padrão

**Evidência:** ZeroClaw adicionou 9 provedores em 24h; Hermes adiciona Claude CLI; NanoBot adiciona DeepSeek v4; CoPaw adiciona DashScope regional. A estratégia de não se prender a um único provedor de LLM é universal. **Implicação:** Quem vencerá será a plataforma com melhor abstraction layer e menor lock-in.

### B) Automação Programável Supera Chatbot Reativo

**Evidência:** Cron subagent (NullClaw), one-shot jobs (CoPaw), scheduling (NanoBot Dream), auto-resume de sessões (Hermes). **Implicação:** O próximo paradigma é "agente que faz coisas por você em background", não "assistente que responde perguntas".

### C) Memória Persistente e Vetorial

**Evidência:** ZeroClaw (pgvector + graph, #4028), IronClaw (Reborn memory substrate), Hermes (notes + Obsidian ingestion), PicoClaw (Engram MCP). **Implicação:** Agentes estão evoluindo de stateless para statefulpersistent. A memória se tornará o diferenciador principal.

### D) Multi-Agente e Federação

**Evidência:** NanoBot (identidade Ed25519), PicoClaw (sub-agent role inheritance), IronClaw (multi-tenant relay), ZeroClaw (nodes dashboard). **Implicação:** Single-agent dá lugar a ecossistemas de agentes cooperantes com identidade, trust, e delegation.

### E) Segurança como Feature, Não Afterthought

**Evidência:** 3 projetos reportando vulnerabilidades críticas simultâneas; Tool Guard (CoPaw), Policy de self-improvement (Hermes), autonomy levels (ZeroClaw). **Implicação:** Com agentes gaining agency (acesso a git, ferramentas, sistema de arquivos), segurança deixa de ser opcional. Ferramentas de sandboxing e approval workflow serão commoditized

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-07

## 1. Panorama do dia

O NanoBot demonstra **atividade intensa e saudável** nesta data. Nas últimas 24h, o projeto registrou **14 issues e 31 PRs atualizados**, com uma taxa de resolução elevada: 8 de 14 issues foram fechadas e 14 de 31 PRs foram merged/fechadas. Não houve lançamentos novos, indicating that the team is focused on stabilization and refinement rather than pushing new versions. A atividade se concentra em correções de bugs, melhorias na experiência do usuário (WebUI e canais) e tratamento de edge cases em provedores de IA. A saúde geral do projeto é boa — bugs críticos estão sendo abordados rapidamente e o pipeline de PRs está ativo.

---

## 2. Lançamentos

**Nenhum release hoje.** O último registro de versionamento estável é `v0.1.5.post3`, e não há changelog formal disponível para esta data. O projeto segue com desenvolvimento contínuo no branch `main`.

---

## 3. Progresso do Projeto

| PR | Descrição | Status |
|----|-----------|--------|
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | **[fix(dream)]** Correção do cursor `.dream_cursor` que não era restaurado junto com os arquivos de memória. Adicionado teste de regressão. | ✅ Merged |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) | **[feat(webui)]** Polimento da UX do chat: sidebar, composer, copy action em respostas, título assíncrono de sessão. | ✅ Merged |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) | **[fix(weixin)]** Canal WeChat deixava de entregar mensagens silenciosamente ao falhar. Agora levanta exceções e permite retry. | ✅ Merged |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) | **[fix(webui)]** Exige `token_issue_secret` para bootstrap LAN quando `host: "0.0.0.0"` — fecha gap de autenticação aberto pelo PR anterior. | ✅ Merged |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) | **[fix(transcription)]** Retry com backoff exponencial em falhas transitórias (502/503) do Whisper. | ✅ Merged |
| [#3645](https://github.com/HKUDS/nanobot/pull/3645) | **[fix(agent)]** Impede que deltas de progresso do Codex sejam enviados como `_progress` para canais não-streaming (WhatsApp). Resolve #3625. | ✅ Merged |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) | **[fix(webui)]** Permite acesso LAN quando `host: "0.0.0.0"` — relaxa verificação localhost. | ✅ Merged |
| [#3653](https://github.com/HKUDS/nanobot/pull/3653) | **[feat(webui)]** Layout de chat refinado: sidebar mais leve, search row, sessions agrupadas, landing page para novo chat. | ✅ Merged |

**Destaque:** 8 PRs merged em 24h — ritmo forte de entrega. A ênfase está em robustez de canais (WeChat, WhatsApp, Matrix) e refinamento da WebUI.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários > 2)

| Issue | Autor | Comentários | Tema |
|-------|-------|-------------|------|
| [#3618](https://github.com/HKUDS/nanobot/issues/3618) | bigsinger | 11 | BUG crítico — erro 403 regional para modelo GLM-4.1. **RESOLVIDO** após restauração de backup e reinstall. |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) | vystartasv | 3 | **Proposta de arquitetura:** Protocolos de identidade (Ed25519) e onboarding para confiança entre agentes NanoBot. Potencial roadmap. |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | fcocarrasquel | 2 | BUG no DeepSeek API — `reasoning_content` inválido no histórico do agent loop. **RESOLVIDO** com patch fornecido. |

### Análise de demandas
- **Regionalidade de modelos:** O erro com GLM-4.1 demonstra que usuários em certas regiões enfrentam barreiras de acesso a provedores específicos. A comunidade já encontrou workarounds (backup/restauro), mas precisa de solução nativa.
- **Identidade entre agentes:** A proposta de [#3639](https://github.com/HKUDS/nanobot/issues/3639) é ambiciosa — visa criar um protocolo de identidade verificável (Ed25519) para NanoBots espalhados em dispositivos edge. Este é um sinal claro de que o projeto está amadurecendo para cenários multi-agente.

---

## 5. Bugs e Estabilidade

### 🔴 Alta Severidade

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | **`exec()` inseguro em `server.py:210`** — Vulnerabilidade de segurança críticos被发现 pelo scanner `multi_agent_ai`. PR aberto para correção. **Prioridade: CRÍTICA.** | 🟡 Open |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | deepseek-v4-flash: erro "reasoning_content must be passed back to the API" após algumas queries. Regressão do modelo com reasoning. | 🔴 Open |

### 🟠 Média Severidade

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | GPT-5.5 (Codex) retorna "Duplicate item found with id" — agent loop trava e não recupera. | 🟡 Open |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Configuração de transcription provider não é transparente — caminho chat-style vs. full URL causa setups inválidos silenciosamente. | 🟡 Open |

### 🟢 Resolvidos Recentemente

| Issue | Descrição | Resolution |
|-------|-----------|------------|
| [#3618](https://github.com/HKUDS/nanobot/issues/3618) | Erro 403 regional GLM-4.1 | Workaround: reinstall via backup |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek `reasoning_content` no agent loop | Patch fornecido |
| [#3638](https://github.com/HKUDS/nanobot/issues/3638) | 100% CPU leak via MCP `streamable_http_client` | Closed — needs review |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp envia cada token como mensagem separada | Fixed em [#3645](https://github.com/HKUDS/nanobot/pull/3645) |

**Alerta de estabilidade:** A vulnerabilidade [#3649](https://github.com/HKUDS/nanobot/pull/3649) (`exec()` inseguro) requer atenção imediata. Este é um vetor de segurança em produção que não deve aguardar o ciclo normal de releases.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Tipo | Descrição | Prioridade |
|-------|------|-----------|------------|
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Enhancement | Configurar nome e ícone do bot no `config.json` — ex: "mybot" + ícone customizado em vez do nanocat padrão. | 🟡 Medium |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | Enhancement | Usar tokenizer local para estimar tokens do prompt — evitar dependência de rede (`tiktoken.get_encoding` é síncrono com latência). PRs relacionados: [#3662](https://github.com/HKUDS/nanobot/pull/3662). | 🟢 Low |
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | Enhancement | Desabilitar Dream completamente via flag `enabled` no config. | 🟡 Medium |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | Feature | Exibir reasoning content do modelo durante streaming no CLI — opção `show_reasoning` no config. | 🟢 Low |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Feature | Adicionar controles de escopo para Dream — desabilitar ou limitar a updates de memória/contexto. | 🟡 Medium |

### Sinais de tendência
- **Customização visual:** Usuários desejam marcação personalizável (nome, ícone, mensagens "thinking...").
- **Offline-first:** Múltiplas tentativas de eliminar dependências de rede (tokenizer local, offline fallback).
- **Raciocínio visível:** Desejo crescente de exibir o "thinking" dos modelos de reasoning (DeepSeek, Codex).

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

1. **Fragilidade regional dos modelos** ([#3618](https://github.com/HKUDS/nanobot/issues/3618)) — Usuários perderam até 10 dias de automação por causa de bloqueios regionais. "还好我有备份的习惯" (felizmente tenho o hábito de fazer backup). A comunidade precisa de fallback automático.

2. **Perda silenciosa de mensagens** ([#3659](https://github.com/HKUDS/nanobot/pull/3659)) — Canal WeChat descartava mensagens sem notificar. "Messages would be permanently lost with no retry."

3. **UX do WebUI inicial** — Novos usuários encontram interface confusa sem sessions ou landing page claro. Corrige pelo PR [#3661](https://github.com/HKUDS/nanobot/pull/3661) e [#3653](https://github.com/HKUDS/nanobot/pull/3653).

4. **Configuração opaca de provedores** ([#3637](https://github.com/HKUDS/nanobot/issues/3637)) — Transcription provider aceita dois formatos (chat-style base vs. full URL) sem validação clara, causando setups inválidos silenciosos.

### Cenários de uso observados
- **Automação de conteúdo:** `fablau` usa NanoBot para gerar artigos diários para X/Twitter. O bug de workspace root ([#3597](https://github.com/HKUDS/nanobot/issues/3597)) comprometeu esse workflow.
- **Embeddings e edge:** `LZDQ` roda NanoBot em cenários embedding (nanobot-soulboard), onde o CPU leak de 100% é crítico.

### Satisfação
- **Taxa de resolução alta:** 8/14 issues fechadas em 24h indica equipe responsiva.
- **Comunidade ativa:** PRs vindo de múltiplos contribuidores (chengyongru, Jefsky, Flinn-X, Re-bin, etc).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo considerável

| Issue | Idade | Tema |
|-------|-------|------|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | ~65 dias | `decouple heartbeat reasoning from notification` — PR aberto desde 2026-03-02. Altera comportamento do heartbeat agent. Precisa de review. |
| [#2438](https://github.com/HKUDS/nanobot/pull/2438) | ~44 dias | `feat(mcp): handle ImageContent in MCP tool responses` — MCP tools podem retornar imagens, mas a renderização cai para `str(block)` (base64 cru). |

### PRs aguardando review

| PR | Tema | Urgência |
|----|------|----------|
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | Remoção de `exec()` inseguro (CRÍTICO) | 🔴 Alta |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | Log de erros em channels (Matrix + Weixin) | 🟡 Média |
| [#3663](https://github.com/HKUDS/nanobot/pull/3663) | Tolerância a API base chat-style para Groq/OpenAI | 🟡 Média |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Dream scope controls | 🟢 Baixa |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | Model presets para switching rápido | 🟡 Média |

---

## Resumo Executivo

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas | 6 | Estável |
| PRs em aberto | 17 | Alto volume |
| Taxa de resolução (issues) | 57% (8/14) | ✅ Positiva |
| PRs mergeados (24h) | 8 | ✅ Muito ativo |
| Releases | 0 | Sem mudança |
| Bugs críticos abertos | 2 | ⚠️ Requer atenção |

**Veredicto:** NanoBot está em **estado saudável com momentum forte**. A comunidade demonstra alta produtividade (8 merges/dia) e os principais bugs de estabilidade (CPU leak, mensagem silenciosa, WhatsApp token-spam) foram resolvidos. O único ponto de atenção crítica é a vulnerabilidade de segurança em `server.py` ([#3649](https://github.com/HKUDS/nanobot/pull/3649)), que deveria ser priorizada para merge antes do próximo release.

---

*Relatório gerado automaticamente para 2026-05-07. Dados: GitHub HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data de Referência: 2026-05-07

---

## 1. Panorama do Dia

O Hermes Agent apresenta **alta atividade comunitária** em 07/05/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O projeto não registrou novas releases, mantendo-se em modo de desenvolvimento intenso. A taxa de resolução de issues está equilibrada (5 fechadas vs. 45 abertas), enquanto 16 dos 50 PRs foram merged/fechados — indicando fluxo de código saudável. A distribuição de prioridades mostra concentração em bugs P2, especialmente relacionados a plataformas (Telegram, Discord, Windows) e ferramentas do agente. Não há sinais de incidentes críticos ou regressões graves em produção.

---

## 2. Lançamentos

### Nenhuma nova release registrada nas últimas 24h.

O projeto encontra-se em período de desenvolvimento ativo sem versionamento formal выпущен. Recomenda-se monitorar branches `main` e `develop` para acompanhar funcionalidades em preparo.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#20891](https://github.com/NousResearch/hermes-agent/pull/20891) | `feat: add Claude CLI provider` | Adiciona provedor Claude Code CLI local como opção de backend, ampliando alternativas de provedores. |
| [#20896](https://github.com/NousResearch/hermes-agent/pull/20896) | `fix(cli): submit LF enter in thin PTYs` | Corrige envio de comandos em terminais thin PTY, melhorando compatibilidade cross-platform. |
| [#20898](https://github.com/NousResearch/hermes-agent/pull/20898) | `fix(tui): refresh virtual offsets after row resize` | Resolve problema de rolagem no TUI após redimensionamento de linhas. |
| [#20895](https://github.com/NousResearch/hermes-agent/pull/20895) | `fix(tui): honor skin highlight colors` | Melhora rendering de cores em overlays de completion do TUI. |
| [#20892](https://github.com/NousResearch/hermes-agent/pull/20892) | `feat(gateway): per-platform gateway_restart_notification flag` | Permite desabilitar notificações de restart por plataforma. |
| [#20801](https://github.com/NousResearch/hermes-agent/pull/20801) | `feat(gateway): per-channel gateway restart notification flag` | mesmo PR anterior (reaberto/salvaged). |

**Destaque:** A adição do provedor Claude CLI (#20891) representa expansão significativa do ecossistema de provedores suportados.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| Issue | Título | Comentários | 👍 | Status | Tema Central |
|-------|--------|:-----------:|:--:|--------|--------------|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Anthropic Claude subscription auth retorna 'You're out of extra usage' | **30** | 17 | CLOSED | **Autenticação/Subscription** — Problema recorrente com credenciais Anthropic |
| [#18390](https://github.com/NousResearch/hermes-agent/issues/18390) | termux tui: textos desaparecem ao fechar teclado | 5 | 0 | OPEN | UX/TUI em Termux |
| [#17413](https://github.com/NousResearch/hermes-agent/issues/17413) | Aux client com provider:auto seleciona fallback quebrado | 4 | 0 | CLOSED | **Fallback de provedores** |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) | Policy para controlar operações de write no self-improvement | 3 | 0 | OPEN | **Segurança/Controle** — Demanda por freios em automação de git |
| [#11860](https://github.com/NousResearch/hermes-agent/issues/11860) | Discord attachments não são passadas ao contexto | 3 | 2 | OPEN | Integração Discord |
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | CLI interativo não faz auto-fallback em 429 'usage_limit_reached' | 3 | 1 | OPEN | **Resiliência de conexão** |

**Análise:** O tema mais debatido é **autenticação com Anthropic/Claude** (#6475, 30 comentários), sinalizando frustração recorrente com gerenciamento de quotas e tokens OAuth. A segunda maior preocupação é **segurança do self-improvement** (#19324) — usuários querem controle granular sobre operações automáticas de escrita.

---

## 5. Bugs e Estabilidade

### Por Severidade:

#### **P1 (Crítico) — 1 issue ativa**

| Issue | Título | Link |
|-------|--------|------|
| #20465 | CLI interativo não faz auto-fallback em 429 usage_limit_reached | [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) |

> **Impacto:** Usuários em cron jobs têm fallback funcional, mas sessões CLI interativas travam em quotas — comportamento inconsistente.

#### **P2 (Alto) — 11 issues ativas**

| Issue | Componente | Título | Link |
|-------|-----------|--------|------|
| #17413 | agent/config | Aux client com provider:auto seleciona fallback quebrado | [#17413](https://github.com/NousResearch/hermes-agent/issues/17413) |
| #11860 | platform/discord | Discord attachments não chegam ao contexto | [#11860](https://github.com/NousResearch/hermes-agent/issues/11860) |
| #20782 | tools | Terminal e write_file falham no Windows 11 (exit 126) | [#20782](https://github.com/NousResearch/hermes-agent/issues/20782) |
| #20899 | gateway/telegram | Imagens Telegram visíveis ao modelo mas não como anexos | [#20899](https://github.com/NousResearch/hermes-agent/issues/20899) |
| #20807 | acp/delegate | delegate_task retorna "completado" sem efeito verificável | [#20807](https://github.com/NousResearch/hermes-agent/issues/20807) |
| #4184 | cli/mcp | `hermes mcp add` cai no chat REPL em vez de executar | [#4184](https://github.com/NousResearch/hermes-agent/issues/4184) |
| #13262 | gateway/telegram | Telegram vaza sequências LaTeX brutas | [#13262](https://github.com/NousResearch/hermes-agent/issues/13262) |

**Problemas resolvidos (P2) hoje:**
- [#19944](https://github.com/NousResearch/hermes-agent/issues/19944) — TUI transcript blank após scroll
- [#20842](https://github.com/NousResearch/hermes-agent/issues/20842) — Kanban migration falha (schema error)

#### **P3 (Médio) — 38 issues**

Destaques:
- [#20849](https://github.com/NousResearch/hermes-agent/issues/20849): Context loss severo durante workflows de coding complexos — "catastrophic code loss"
- [#20894](https://github.com/NousResearch/hermes-agent/issues/20894): Kanban worker entra em loop "PID NOT ALIVE"
- [#5151](https://github.com/NousResearch/hermes-agent/issues/5151): Mensagens de retry se acumulam no chat

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h):

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #19324 | Policy para write operations no self-improvement | agent/skills | [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) |
| #16525 | Expor model_switch como tool agent-callable | agent/gateway | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) |
| #20859 | Suporte a Mistral como LLM provider | area/config | [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) |
| #20717 | Dynamic Context Pruning | agent | [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) |
| #7640 | Suporte a deletar imagens coladas antes de enviar | cli | [#7640](https://github.com/NousResearch/hermes-agent/issues/7640) |
| #15602 | Google Workspace skill: multi-account support | tool/skills | [#15602](https://github.com/NousResearch/hermes-agent/issues/15602) |
| #12325 | Notes + recorded-conversation ingestion (Obsidian/Omi/Limitless) | innovation | [#12325](https://github.com/NousResearch/hermes-agent/issues/12325) |
| #20875 | Kanban: assignee dropdown na task creation | plugins | [#20875](https://github.com/NousResearch/hermes-agent/issues/20875) |

### PRs de feature em aberto:

| PR | Título | Link |
|----|--------|------|
| #20903 | Surface generic plugin CLI commands as top-level subcommands | [#20903](https://github.com/NousResearch/hermes-agent/pull/20903) |
| #18238 | Telegram temporary tool progress | [#18238](https://github.com/NousResearch/hermes-agent/pull/18238) |
| #20900 | Docker: bootstrap auth.json from env on first boot | [#20900](https://github.com/NousResearch/hermes-agent/pull/20900) |
| #20888 | Auto-resume interrupted sessions after restart | [#20888](https://github.com/NousResearch/hermes-agent/pull/20888) |
| #18153 | LINE Messaging API platform adapter | [#18153](https://github.com/NousResearch/hermes-agent/pull/18153) |
| #18920 | Slack: render markdown tables as Block Kit tables | [#18920](https://github.com/NousResearch/hermes-agent/pull/18920) |

**Sinais de roadmap identificados:**
1. **Expansão de plataformas:** Integração LINE em progresso; Slack markdown tables em refinement
2. **Resiliência operacional:** Auto-resume de sessões, Docker bootstrap de auth
3. **Controle de agente:** Políticas de self-improvement, model_switch como tool
4. **Novo provedor:** Suporte a Mistral solicitado

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais:

1. **Autenticação e Quotas (crítico)**
   > *"HTTP 400: You're out of extra usage. Add more at claude.ai/settings/usage"* — #6475
   - Usuários enfrentam perda súbita de acesso mesmo após restart/re-login
   - Frustração com comportamento inconsistente entre sessões interativas e cron jobs

2. **Estabilidade de Plataforma Windows**
   > *"Terminal and write_file tools fail on Windows 11 (exit 126 / empty file)"* — #20782
   - Ferramentas core não funcionam em Windows 11 (ATLAS OS)
   - Impacta produtividade de desenvolvedores Windows

3. **Gestão de Contexto**
   > *"Severe context loss, truncation-overwrites, and memory limitations during complex coding workflow"* — #20849
   - Workflows multi-dia sofrem perda catastrófica de código
   - Demanda por context pruning dinâmico (#20717)

4. **Segurança do Self-Improvement**
   > *"It saw that my project was a git repo with a remote origin. It decided on its own to add, commit, and push changes."* — #19324
   - Usuários querem controle sobre operações automáticas de escrita
   - Fear factor alto com acesso irrestrito a git

5. **UX de Imagens**
   - Não é possível deletar imagens coladas antes de enviar (#7640)
   - Imagens Telegram visíveis ao modelo mas não acessíveis como arquivos (#20899)

### Cenários de Uso Reportados:
- **Desenvolvimento转头:** Uso intensivo de coding workflows via CLI
- **Produtividade:** Integração com Google Workspace, Kanban, Obsidian
- **Multi-plataforma:** Telegram, Discord, Slack, LINE, Mattermost, Termux
- **Always-on devices:** Omi, Limitless Pendant, Friend, Plaud (gravação de conversas)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com baixa atenção:

| Issue | Título | Criado | Comentários | Prioridade | Link |
|-------|--------|--------|:-----------:|:----------:|------|
| #20849 | Context loss severo durante coding workflow | 2026-05-06 | 2 | P3 | [#20849](https://github.com/NousResearch/hermes-agent/issues/20849) |
| #20717 | Dynamic Context Pruning | 2026-05-06 | 1 | P3 | [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) |
| #20859 | Support Mistral as LLM provider | 2026-05-06 | 1 | P3 | [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) |
| #12325 | Notes + recorded-conversation ingestion | 2026-04-19 | 1 | innovation | [#12325](https://github.com/NousResearch/hermes-agent/issues/12325) |
| #5627 | OpenViking plugin utiliza ~30% da API surface | 2026-04-06 | 1 | P3 | [#5627](https://github.com/NousResearch/hermes-agent/issues/5627) |

### Recomendação:
Issues P1 (#20465) e P2 com Platform/Windows (#20782) merecem triagem urgente. A issue #6475 (30 comentários) foi fechada mas pode precisar follow-up se users reportarem reincidência.

---

## Métricas Resumidas (2026-05-07)

| Indicador | Valor |
|-----------|------:|
| Issues ativas | 45 |
| Issues fechadas (24h) | 5 |
| PRs abertos | 34 |
| PRs merged/fechados | 16 |
| Novas releases | 0 |
| Issues P1 ativas | 1 |
| Issues P2 ativas | 7 |
| Issues P3 ativas | 38 |
| Issues fechadas hoje | 5 |
| PRs merged hoje | 6+ |

**Saúde Geral:** 🟡 Moderada — alta atividade comunitária, bugs P1/P2 em aberto requerem atenção, mas fluxo de merge está ativo e não há sinais de crise.

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent em 2026-05-07.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-07

---

## 1. Panorama do dia

O PicoClaw mantém alta atividade de desenvolvimento com **70 PRs** e **21 issues** atualizados nas últimas 24h, indicando uma release bem movimentada. A release nightly `v0.2.8-nightly.20260506` foi publicada automaticamente, sinalizando progresso contínuo. A base de issues abertas permanece concentrada em bugs de integração com provedores (DeepSeek, ChatGPT, Gemini) e ferramentas (exec, MCP), enquanto PRs recent closed mostram avanço em estabilidade, multi-chat e refatoração de canais. O projeto demonstra saúde de código ativa com ciclo de review rápido.

---

## 2. Lançamentos

### Release disponível
- **Nightly Build**: `v0.2.8-nightly.20260506.eb4e1875`
- Link: https://github.com/sipeed/picoclaw/compare/v0.2.8...main
- **Aviso**: Build automatizado, pode ser instável. Uso em produção desaconselhado.

**Nota**: Nenhuma release estável nova publicada. A versão stable mais recente continua sendo `v0.2.8`.

---

## 3. Progresso do Projeto

PRs merged/fechados nas últimas 24h que trouxeram avanços significativos:

| PR | Descrição | Domínio | Impacto |
|---|---|---|---|
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | OpenAI-compatible embeddings support | provider | Suporte a vLLM-style endpoints para embeddings |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | Release CI: support existing tag release | ci | Flexibiliza workflow de release para commits específicos |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | Enhance Weixin channel support | channel | Multi-instance e validação aprimorada |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | Handle split SSE stream chunk parsing | provider | Corrige drop de conteúdo em boundaries de chunks |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | Anthropic: system as content blocks with cache_control | provider | Restaura prompt caching para Anthropic |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) | Engram MCP memory server integration guide | docs | Documentação de integração com servidor de memória |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple authentication credentials — **RESOLVIDO** | provider/config | Corrige erro de credenciais duplicadas |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | UI title in Chinese when English selected — **RESOLVIDO** | config | Bug de locale no app Android |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | Chat history display incomplete — **RESOLVIDO** | channel | Histórico de sessão agora preserva conversas completas |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

**#293 — Feature: Autonomous Browser Operations** ⭐ 8 👍
- Proposta ambiciosa para automação de browser pelo agent
- two primary paths em discussão
- Impacto: estratégico para expansão operacional do PicoClaw na web
- Link: https://github.com/sipeed/picoclaw/issues/293

**#629 — LLM call retry not working** (12 comentários)
- Bug crítico: server retorna HTTP 500 em tarefas longas, sem retry
- Afeta usuários do OpenRouter com tarefas de longa duração
- Link: https://github.com/sipeed/picoclaw/issues/629

**#1042 — exec tool guardCommand issue** (7 comentários)
- Regex ingênuo bloqueia comandos legítimos como `curl wttr.in/Beijing`
- Confusão entre query strings e paths de arquivos
- Link: https://github.com/sipeed/picoclaw/issues/1042

**#2706 — Deepseek v4 thinking model** (2 comentários, 1 👍)
- thinking model retorna `reasoning_content` que precisa ser persistido entre requests
- Sem isso, API retorna 400
- Link: https://github.com/sipeed/picoclaw/issues/2706

### PRs em destaque

**#2770 — Add MCP section to config web UI** (Gabrielsv01)
- Interface gráfica para gerenciar MCP servers sem editar raw config
- Resolve problema de persistência ao remover servers
- Link: https://github.com/sipeed/picoclaw/pull/2770

**#2715 — Multi-user group chats: attribute history per sender**
- Histórico de mensagens por remetente em grupos Discord/Telegram/Slack
- Fecha #2702
- Link: https://github.com/sipeed/picoclaw/pull/2715

**#2679 — Enable ChatGPT subscription (OAuth)**
- Suporte a ChatGPT Plus via OAuth
- Link: https://github.com/sipeed/picoclaw/pull/2679

---

## 5. Bugs e Estabilidade

### Bugs críticos (alta severidade)

| Issue | Descrição | Impacto | Link |
|---|---|---|---|
| #2769 | Auth fails 401 across providers (Groq, OpenRouter, Nvidia) | **Bloqueante** — API keys válidos são recusados | https://github.com/sipeed/picoclaw/issues/2769 |
| #629 | LLM call retry não funciona — tarefas longas falham | **Crítico** — tasks hang sem retry | https://github.com/sipeed/picoclaw/issues/629 |
| #2704 | DingTalk SDK panic crasha gateway | **Crítico** — 3 ping timeouts = 6 panics | https://github.com/sipeed/picoclaw/issues/2704 |
| #2780 | Voice recognition quebrado após reload config | **Alto** — groq-asr para de funcionar | https://github.com/sipeed/picoclaw/issues/2780 |
| #2621 | Session context lost after API timeout | **Alto** — cria sessão duplicada ao invés de resume | https://github.com/sipeed/picoclaw/issues/2621 |

### Bugs médios/baixos

| Issue | Descrição | Link |
|---|---|---|
| #1042 | exec guardCommand bloqueia comandos legítimos | https://github.com/sipeed/picoclaw/issues/1042 |
| #2787 | Session messages sem timestamps individuais | https://github.com/sipeed/picoclaw/issues/2787 |
| #2368 | Android: modelo não configura para modelos locais | https://github.com/sipeed/picoclaw/issues/2368 |
| #2785 | Feishu: only first tool call no notification | https://github.com/sipeed/picoclaw/issues/2785 |
| #2784 | README: Baidu Search free tier info desatualizado | https://github.com/sipeed/picoclaw/issues/2784 |

### Observação
O bug #2769 (auth 401 cross-provider) afeta tanto stable quanto nightly builds, indicando regressão ou mudança de API em provedores. Prioridade alta para triagem.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas com demanda

| Issue | Descrição | Demanda | Link |
|---|---|---|---|
| #293 | Autonomous Browser Operations | ⭐ 8 👍, roadmap priority: high | https://github.com/sipeed/picoclaw/issues/293 |
| #2217 | Token consumption dashboard (WebUI) | closed, impl em progresso | https://github.com/sipeed/picoclaw/issues/2217 |
| #2671 | Support OpenCode provider (zen e go) | 2 comentários | https://github.com/sipeed/picoclaw/issues/2671 |
| #2775 | Sub-Agent deve herdar role-specific AGENT.md | 1 comentário, 2026-05-05 | https://github.com/sipeed/picoclaw/issues/2775 |
| #2782 | MCP client: support Streamable HTTP transport | 0 comentários, 2026-05-06 | https://github.com/sipeed/picoclaw/issues/2782 |
| #2691 | `get_current_time` tool | PR aberto #2691 | https://github.com/sipeed/picoclaw/pull/2691 |

### Sinais de evolução do roadmap

1. **Browser automation**: O issue #293 com 8 👍 e 7 comentários indica demanda clara por capabilities de automação web. Roadmap priority: high.
2. **MCP enhancements**: Nova feature de Streamable HTTP transport (#2782) alinha com adoção crescente de MCP.
3. **Multi-agent architecture**: Issue #2775 revela necessidade de isolamento de roles em arquiteturas multi-agent.
4. **Provider diversification**: Demanda por OpenCode (#2671) e DeepSeek v4 (#2706) mostra expansão de modelos suportados.

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas identificadas

1. **Autenticação quebrada** (#2769)
   - *"PicoClaw fails to authenticate with valid API keys across multiple providers"*
   - Impacto: usuários não conseguem usar o sistema
   - Severidade: **Bloqueante**

2. **Race conditions em canais** (#2704)
   - SDK DingTalk causa panic ao gateway
   - *"向已关闭的 channel 发送数据"* — goroutine vazando após timeout
   - Severidade: **Crítica**

3. **Retry inexistente** (#629)
   - Tarefas longas falham sem retry automático
   - Severidade: **Alta**

### Dores funcionais

4. **Configuração de modelos locais** (#2368)
   - UI diz "not configured" mesmo com campos preenchidos
   - Experiência frustrante no app Android

5. **Session persistence** (#2310)
   - *"webUI对话窗口关闭后，重新打开只显示1-2条记录"*
   - J**á resolvido** via #2311

6. **Voice recognition após reload** (#2780)
   - groq-asr quebra ao recarregar config
   - Casos de uso: Telegram com ASR são afetados

### Feedback positivo (features apreciadas)

- **.env support** (#2623 closed) — desejo antigo realizado
- **Token dashboard** (#2217) — métricas de consumo solicitadas e em desenvolvimento
- **WeChat enhancements** (#2606) — suporte multi-instance valorizado

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há muito tempo (>30 dias, stale标记)

| Issue | Idade | Prioridade | Descrição | Link |
|---|---|---|---|---|
| #629 | ~74 dias | **Alta** | Retry não funciona | https://github.com/sipeed/picoclaw/issues/629 |
| #1042 | ~64 dias | **Média** | exec guardCommand regex | https://github.com/sipeed/picoclaw/issues/1042 |
| #293 | ~80 dias | **Roadmap** | Browser automation | https://github.com/sipeed/picoclaw/issues/293 |

### PRs aguardando review (alguns stale)

| PR | Idade | Status | Descrição | Link |
|---|---|---|---|---|
| #2413 | ~30 dias | OPEN | LINE Bot SDK v8 upgrade | https://github.com/sipeed/picoclaw/pull/2413 |
| #2383 | ~30 dias | OPEN | gateway stop/status CLI | https://github.com/sipeed/picoclaw/pull/2383 |
| #2311 | ~35 dias | OPEN | preserve chat history after summarize | https://github.com/sipeed/picoclaw/pull/2311 |
| #2309 | ~35 dias | OPEN | normalize tool-call history | https://github.com/sipeed/picoclaw/pull/2309 |
| #2306 | ~35 dias | OPEN | honor thinking_level for direct model refs | https://github.com/sipeed/picoclaw/pull/2306 |
| #2199 | ~38 dias | OPEN | telegram reply context | https://github.com/sipeed/picoclaw/pull/2199 |
| #2183 | ~38 dias | OPEN | normalize subagent model IDs | https://github.com/sipeed/picoclaw/pull/2183 |
| #2175 | ~38 dias | OPEN | avoid repeated local model probes | https://github.com/sipeed/picoclaw/pull/2175 |
| #2170 | ~38 dias | OPEN | per-model extra HTTP headers | https://github.com/sipeed/picoclaw/pull/2170 |
| #2153 | ~39 dias | OPEN | /models shortcut for Telegram | https://github.com/sipeed/picoclaw/pull/2153 |

### Ação recomendada

⚠️ **9 PRs em stale status aguardando review** — o time de manutenção deve priorizar triagem para evitar que contribuições有价值 (valiosas) fiquem desatualizadas. Considerar assigning maintainers ou closing com mensagem para contributors reabrir se necessário.

---

*Relatório gerado em 2026-05-07 com dados das últimas 24h.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório de Projeto IronClaw — 2026-05-07

---

## 1. Panorama do dia

O IronClaw mantém um ritmo de desenvolvimento intenso, com **37 issues e 48 PRs atualizados nas últimas 24h**. A atividade concentra-se massivamente na migration "Reborn" — uma reescrita arquitetural de grande escala que abrange o sistema de turnos, projeções de eventos, persistência durável e adapters de produto. Foram fechadas **8 issues** e **27 PRs** (merged/fechados), indicando progresso substancial. Nenhum release foi publicado, sinalizando que a equipe prioriza estabilização interna antes de marcar versões. A saúde geral do projeto permanece ativa, com contribuições equilibradas entre features de longa duração e correções de bugs críticos.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento intensivo da arquitetura Reborn. Releases formais são retidos até que os blocos de corte (cutover blockers) da migration sejam resolvidos.

---

## 3. Progresso do projeto

### PRs importantes merged/fechados

| PR | Tamanho | Escopo | Resumo |
|----|---------|--------|--------|
| [#3312](https://github.com/nearai/ironclaw/pull/3312) | M | CI | Corrigido alerta de E2E noturno fora do workflow reutilizável |
| [#3311](https://github.com/nearai/ironclaw/pull/3311) | M | turns | Adicionado seam `TurnRunWakeNotifier` para wake hints otimizados pós-durable submit |
| [#3305](https://github.com/nearai/ironclaw/pull/3305) | L | turns | Aplicação de loop exits validados com `apply_loop_exit` e `record_recovery_required` |
| [#3307](https://github.com/nearai/ironclaw/pull/3307) | XS | db | Serialização de testes de migração PostgreSQL para evitar race conditions |
| [#3304](https://github.com/nearai/ironclaw/pull/3304) | S | db | Cobertura de teste para parser decimal em libSQL |
| [#3295](https://github.com/nearai/ironclaw/pull/3295) | L | turns | Adicionado contrato de handshake `LoopExit` com tipos distintos para drivers |
| [#3302](https://github.com/nearai/ironclaw/pull/3302) | XL | reborn-memory | Cobertura E2E para substrate de memória Reborn (+1.690 LOC de testes) |
| [#3243](https://github.com/nearai/ironclaw/pull/3243) | XL | agent/tool | Implementação de runtime policy substrate (PRs 1-7 de #3045) |

**Destaque:** O PR [#3302](https://github.com/nearai/ironclaw/pull/3302) adiciona **+1.690 linhas de código de teste** cobrindo o substrate de memória Reborn em dois tiers (libSQL). O PR [#3243](https://github.com/nearai/ironclaw/pull/3243) ativa o filtro de visibilidade de tools em produção para o path model-facing.

### PRs em revisão (abertos)

| PR | Tamanho | Escopo | Resumo |
|----|---------|--------|--------|
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | XL | reborn-memory | Reborn memory substrate: guardrails nativos + split de módulos |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | XL | agent/channel | Adicionado contrato `ironclaw_transport` com bridge de Channels → TransportAdapters |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | XL | agent/channel/web | `EventProjectionService` com replays derivados e DTOs `RunStatusProjection` |
| [#3253](https://github.com/nearai/ironclaw/pull/3253) | L | channel/web/db | Relay Slack multi-tenant com resolução de identidade por `PairingStore` |
| [#3306](https://github.com/nearai/ironclaw/pull/3306) | XS | dependencies | Cobertura E2E para runtime-policy substrate (+1.354 LOC) |
| [#3298](https://github.com/nearai/ironclaw/pull/3298) | L | ci | Adicionado gate hermético local com fmt, safety checks e clippy |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários)

1. **[#3013](https://github.com/nearai/ironclaw/issues/3013)** — `[reborn] Reborn cutover blocker: add kernel TurnCoordinator` *(7 comentários)*  
   **Análise:** Issue raiz do bloco de corte para turn coordination no host-layer. Define a admission de threads/turns e enforcement de "one-active-run". Bloqueia múltiplos issues filho.

2. **[#3031](https://github.com/nearai/ironclaw/issues/3031)** — `[reborn] [EPIC] Reborn product surface migration` *(6 comentários)*  
   **Análise:** Epic central que rastreia toda a migração de product-surface. Bloqueado por gates de compatibilidade (#3020) e readiness (#3022, #3032, #3039, #3067).

3. **[#3198](https://github.com/nearai/ironclaw/issues/3198)** — `[Reborn] Define TurnCoordinator public API shape` *(5 comentários, CLOSED)*  
   **Análise:** API shape pública do `TurnCoordinator` definida — issue concluída, desbloqueia trabalho em adapters.

4. **[#3016](https://github.com/nearai/ironclaw/issues/3016)** — `[Reborn] Reborn cutover blocker: add reference AgentLoopHost facade` *(5 comentários)*  
   **Análise:** Bloco de corte para o facade `AgentLoopHost` que integra turn execution com host services.

5. **[#3089](https://github.com/nearai/ironclaw/issues/3089)** — `[Reborn] Add SessionThreadService` *(4 comentários, CLOSED)*  
   **Análise:** Service que owns persistência de thread/message/reply/milestone — concluído, desbloqueia `TurnCoordinator`.

### Padrão de demandas

A comunidade (representada pelo contribuidor `serrrfirat`) demonstra foco intenso em:
- **Arquitetura de turnos:** Coordination, persistence, e execução de turns
- **Projeções de eventos:** Durable event/audit store e fanout para streams
- **Adapters de produto:** Migração de surfaces existentes (browser chat, CLI, canais externos) para o novo modelo

---

## 5. Bugs e estabilidade

### Bug de severidade Crítica

**[#3229](https://github.com/nearai/ironclaw/issues/3229)** — *LLM provider fallback persists to DB on startup, permanently destroying user's model/provider config*  
- **Severity:** **Critical**  
- **Ambiente:** LXC container, libSQL, v0.27.0  
- **Component:** `src/config/mod.rs` — `resolve_llm_with_secrets`  
- **Dano:** Configuração de provider/model do usuário reverte permanentemente ao restart  
- **Reportado em:** 2026-05-03 | **Última atualização:** 2026-05-06  
- **Status:** Aberto, aguardando triagem

### Bug de severidade Média

**[#3272](https://github.com/nearai/ironclaw/issues/3272)** — *Uploaded Attachments Lose Preview After Refresh, Duplicate Images Appear, and Pasted Image Preview Is Excessively Large*  
- **Categorias:** Preview persistente, duplicação de imagens, sizing incorreto  
- **Reportado em:** 2026-05-06  
- **Status:** Aberto, aguardando triagem

### Correções de estabilidade merged

- **[#3307](https://github.com/nearai/ironclaw/pull/3307):** Corrigida race condition em testes de migração PostgreSQL (serialização de `refinery_schema_history`)
- **[#3304](https://github.com/nearai/ironclaw/pull/3304):** Corrigido branch de parser decimal em libSQL (cobertura adicionada)

---

## 6. Pedidos de features e sinais de roadmap

### Novas features (issues abertas)

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#3300](https://github.com/nearai/ironclaw/issues/3300) | channel/pairing | Multi-tenant Slack relay: follow-up items de segurança OAuth state e UX |
| [#3282](https://github.com/nearai/ironclaw/issues/3282) | channel/web | Migrar browser chat routes para ProductAdapter path (WebChat v2) |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | reborn | `EventStreamManager` para fanout durável de projeções (SSE, WebSocket, API) |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | reborn | `ProductWorkflow` e `InboundTurnService` facade |
| [#3286](https://github.com/nearai/ironclaw/issues/3286) | reborn | Preservar comportamento de agent commands através de loops e services |
| [#3285](https://github.com/nearai/ironclaw/issues/3285) | reborn | Migrar external channel adapters para ProductAdapter contract |
| [#3284](https://github.com/nearai/ironclaw/issues/3284) | reborn | Migrar CLI/TUI/setup surfaces para typed Reborn services |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | reborn | Migrar OpenAI-compatible APIs (chat e Responses) para Reborn |

### Sinais de roadmap

1. **Reborn como architecture central:** A maioria absoluta das novas issues (prefixadas `[reborn]`) indica que a migration Reborn é o foco estratégico principal. Issues recentes cobrem:
   - Multi-tenant turn admission policy
   - Outbound egress e subscription policy
   - Same-thread follow-up e steering
   - Conversation binding e session thread contracts

2. **Integração de memória e política:** 
   - O PR [#3180](https://github.com/nearai/ironclaw/pull/3180) implementa memory substrate isolado
   - O PR [#3243](https://github.com/nearai/ironclaw/pull/3243) ativa runtime policy em produção

3. **Preservação de features existentes:** O Epic [#3031](https://github.com/nearai/ironclaw/issues/3031) enfatiza "preserve current IronClaw user/operator behavior" — indicando que compatibilidade backward é prioridade.

---

## 7. Resumo de feedback dos usuários

### Dores reportadas

| Categoria | Detalhamento |
|-----------|---------------|
| **Persistência de config** | Bug [#3229](https://github.com/nearai/ironclaw/issues/3229) causa perda permanente de configuração de provider/model — impacto crítico para usuários em produção |
| **UI de anexos** | Bug [#3272](https://github.com/nearai/ironclaw/issues/3272) afeta experiência de upload de imagens — perda de preview após refresh, duplicação visual |

### Sinais de satisfação

| Indicador | Observação |
|-----------|------------|
| **Atividade de PRs** | 27 PRs fechados/merged nas últimas 24h demonstra momentum positivo de entrega |
| **E2E coverage** | +3.044 LOC de testes adicionados em PRs recentes (#3306, #3302, #3309) indica investimento em qualidade |
| **Migration progress** | Múltiplos blockers de cutover fechados (TurnCoordinator API, SessionThreadService, LoopExit handshake) mostram progresso mensurável |

### Cenários de uso emergentes

- **Multi-tenant Slack relay** (#3253): Administradores conectam Slack uma vez; usuários pares via OTP — validado E2E em 2026-05-06
- **Browser WebChat v2**: Migrar rotas existentes para novo ProductAdapter path

---

## 8. Backlog que merece atenção

### Issues antigas sem resposta recente

| Issue | Criada | Última atualização | Prioridade | Motivo |
|-------|--------|-------------------|------------|--------|
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | 2026-04-28 | 2026-05-06 | **Crítica** | Cutover blocker — TurnCoordinator kernel |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | 2026-04-28 | 2026-05-06 | **Alta** | Epic central da migration |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | 2026-04-28 | 2026-05-06 | **Alta** | Cutover blocker — AgentLoopHost facade |

### Issues com dependências bloqueantes

| Issue | Dependências | Status |
|-------|--------------|--------|
| [#3193](https://github.com/nearai/ironclaw/issues/3193) | #3198 (CLOSED) | Desbloqueada — precisa de ação |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | #3198, #3195 (CLOSED) | Parcialmente desbloqueada |

### PRs em revisão há >3 dias

| PR | Criado | Última atualização | Tamanho | Risco | Observação |
|----|--------|-------------------|---------|-------|------------|
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | 2026-05-01 | 2026-05-06 | XL | Low | Memory substrate — aguardando review |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | 2026-04-29 | 2026-05-06 | XL | Medium | Transport adapter contract |

### Recomendações de atenção

1. **Triagem urgente:** Bug [#3229](https://github.com/nearai/ironclaw/issues/3229) (critical) ainda não tem respostaASSIGNEE
2. **Review de PRs bloqueantes:** [#3180](https://github.com/nearai/ironclaw/pull/3180) e [#3099](https://github.com/nearai/ironclaw/pull/3099) são dependências para múltiplas issues Reborn
3. **Gate de cutover:** Issues #3020, #3022, #3032, #3039, #3067 são readiness gates para o Epic #3031 — monitorar progresso

---

*Relatório gerado automaticamente com base em dados do GitHub para 2026-05-07. Próxima atualização recomendada: 2026-05-08.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# Relatório de Projeto — CoPaw (QwenPaw)
**Data de corte:** 2026-05-07 | **Fonte:** github.com/agentscope-ai/CoPaw

> **⚠️ Nota sobre nomenclatura:** O repositório list é `agentscope-ai/CoPaw`, porém toda atividade de issues e PRs referenceia `agentscope-ai/QwenPaw`. Assume-se que `CoPaw` é o nome do projeto e `QwenPaw` a marca/publicação. Os links internos referenciam o namespace `QwenPaw` conforme dados brutos.

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** em 2026-05-07: 41 issues e 26 PRs com atualização nas últimas 24h, com leve desequilíbrio entre abertas (24) e fechadas (17) para issues, e uma distribuição mais equilibrada nos PRs (12 abertas, 14 fechadas/merged). A release **v1.1.5.post2** foi publicada com correções pontuais de documentação e mensagem, sem breaking changes. A comunidade demonstra preocupação significativa com **estabilidade de canais** (DingTalk, Telegram, Feishu) e com a **experiência de configuração de modelos**, tema que já gera issue marcada como "good first issue". O viés linguístico permanece predominantemente chinês (≈70% das issues), sinalizando uma base de usuáriosmajoritariamente Sinophone.

---

## 2. Lançamentos

### ✅ v1.1.5.post2 — Publicada em 2026-05-06

| Mudança | Autor | PR |
|---|---|---|
| `docs(website)`: atualização da documentação para v1.1.5 | @xieyxclack | [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) |
| `feat(chat)`: geração assíncrona de títulos de sessão via LLM | @ekzhu | [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) |
| `fix(message_processing)`: correção no processamento de mensagens | — | — |

- **Breaking changes:** Nenhuma.
- **Notas de migração:** Nenhuma. Release pontual de patching.
- **Observação:** O PR #3829 (títulos de sessão assíncronos) representa uma melhoria de UX significativa para sessões longas, resolvendo um ponto de atrito recorrente em que usuários reportavam que sessões extensas se tornavam difíceis de identificar. Este padrão de melhoria incremental — feature aditiva sem quebra — é consistente com o ciclo de releases recente.

---

## 3. Progresso do Projeto

### PRs merged/fechadas nas últimas 24h (14 total — selecionados os mais relevantes)

| PR | Tipo | Impacto | Link |
|---|---|---|---|
| `#4053` feat(skill): Add skill install/uninstall CLI | **Nova feature** | Permite que agentes instalem/desinstalem skills via CLI — resolver #2384. Abre cenário para automação completa de gerenciamento de skills por bots. | [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) |
| `#4071` chore(version): bumping version to 1.1.5p2 | Infra/CI | Bump de versão para a release patch. | [#4071](https://github.com/agentscope-ai/QwenPaw/pull/4071) |
| `#4005` docs(faq): Docs for handling APITimeoutError em WSL2 (NAT) | **Documentação** | Resolve #3041 — adiciona FAQ para erro recorrente em ambiente WSL2 NAT, beneficiando base significativa de desenvolvedores Windows/Linux. | [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) |
| `#4009` feat(i18n): add Brazilian Portuguese (pt-BR) locale | **Nova feature** | Adiciona suporte a pt-BR na Console UI e website. Avanço em internacionalização e penetração no mercado lusófono. | [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) |
| `#4014` fix(approval): `/approve` agora respeita `request_id` | **Bug fix** | Correção de comportamento: shorthand `/approve` ignorava argumento e sempre aprovava o início da fila. | [#4014](https://github.com/agentscope-ai/QwenPaw/pull/4014) |
| `#4039` fix(channel): telegram network retry | **Bug fix** | Melhor tratamento de erros de polling no Telegram — distingue erro de rede vs. conflito e reconecta de forma mais limpa. | [#4039](https://github.com/agentscope-ai/QwenPaw/pull/4039) |
| `#4048` fix(utils): remove redundant codes | Refatoração | Remove código redundante em `download_file_from_url`. | [#4048](https://github.com/agentscope-ai/QwenPaw/pull/4048) |
| `#4016` fix(skill): resilient loading for migrated/malformed skill entries | **Bug fix** | Normaliza manifestos de skill antes de uso — previne crashes por entradas legadas. | [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) |
| `#4061` fix(mcp): usa `sse_read_timeout` como execution_timeout | **Bug fix** | Corrige timeout de ferramentas MCP que estava usando timeout de conexão HTTP em vez de timeout de leitura SSE. | [#4061](https://github.com/agentscope-ai/QwenPaw/pull/4061) |

### PRs abertas mais relevantes (em revisão ou WIP)

| PR | Tipo | Impacto | Link |
|---|---|---|---|
| `#4076` fix: RotatingFileHandler em todas as plataformas | Bug fix | Resolve.log growth infinito no Windows/Linux — problema crítico para deployments de longa duração (5.5 MiB em 18 dias sem rotação). | [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) |
| `#4074` feat(provider): DashScope base URL selection na Console UI | Nova feature | Remove hardcoded regional endpoint — permite users escolherem endpoints regionais da DashScope. | [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) |
| `#4064` fix(reload): graceful task draining para AgentConfigWatcher | Bug fix | Resolve race condition no DingTalk streaming — clientes HTTP perdiam conexão durante reload de canais. | [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) |
| `#4041` feat(cli-desktop): System tray startup (Win32) | Nova feature | Adiciona entrada independente para iniciar via system tray — melhoria para agentes autônomos de longa execução. | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) |
| `#4046` feat(security): rule level auto deny no Tool Guard | Segurança | Permite deny automático por rule ID no guard de ferramentas — camada extra de segurança antes da aprovação humana. | [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) |
| `#3574` feat(chat): Replace Web Speech API com Whisper transcription | Nova feature | Substitui API nativa do browser por Whisper custom — suporta navegadores sem Web Speech API (ex: Doubao Browser). | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) |
| `#4032` feat(doctor): add Windows environment diagnostics | Nova feature | Adiciona seção de diagnóstico Windows ao `qwenpaw doctor` — detecta long path support, comprimento de caminho, etc. | [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) |
| `#4055` feat(channel): propagate user display name to agent env context | Melhoria de UX | Feishu agora propaga nome de exibição do remetente para contexto do agente (antes só open_id). | [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Comentários | Status | Tema | Link |
|---|---|---|---|---|
| `#3955` Windows任意文件遍历漏洞 | **17** | CLOSED | **Segurança** — vulnerabilidade de path traversal no servidor Windows (versão 1.1.5). Closed sem indicação de fix explícito no conjunto de dados. | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) |
| `#4023` 输入框卡顿非常厉害 | **6** | CLOSED | UI responsiveness em campo de input. | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) |
| `#4059` 对话内容太长后无法正常回复 | **3** | OPEN | Sessões longas (>N rodadas) travam; `/compact` não resolve. v1.1.5.post1 afetada. | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) |
| `#4036` Adding a model requires too many steps | **3** | OPEN | **UX/Onboarding** — configuração de novo modelo exige 5+ interações. Marcada "good first issue". | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) |
| `#3891` DeepSeek前缀缓存命中率偏低 (~95%) | **3** | OPEN | Custo/eficiência —命中率 de 95% deixa 5% em cache miss (preço 4× maior). Sugestão de otimização de prompt/cache. | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) |
| `#4042` DingTalk channel race condition | **3** | OPEN | Canal DingTalk falha em notificação final por race condition no ciclo de vida do event loop. | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) |

### Análise dos temas quentes

1. **Segurança (#3955):** A vulnerabilidade de path traversal no Windows recebeu maior atenção da comunidade (17 comentários). Aissue foi fechada sem resolução evidenteno dataset — possivelmente movida para modo privado ou tratada via canal diferente. **Prioridade: crítica** para a equipe de segurança.

2. **Complexidade de onboarding (#4036):** Issue marcada "good first issue" com 3 comentários e zero thumbs-ups visíveis, mas representando fricção real de novos usuários. A abertura de 5+ telas para adicionar um modelo é anti-padrão de UX.

3. **Sessões longas (#4059):** Vários usuários reportam que conversas extensas param de responder mesmo após `/compact`. Este é um padrão recorrente que indica possível **memory leak ou estouro de contexto** não resolvido — tema que pode se agravar com uso intensivo.

4. **Custo de DeepSeek (#3891):** A diferença de preço entre cache hit (¥0.5/M) e miss (¥2/M) para 5% dos tokens representa custo evitável. Aissue sugere otimização de cache no lado do cliente CoPaw — demanda com viés de usuário corporativo.

---

## 5. Bugs e Estabilidade

### Por severidade (baseado em impacto funcional)

| Severidade | Issue | Descrição | Status | Link |
|---|---|---|---|---|
| **🔴 Crítica** | `#3955` | Path traversal arbitrário em servidor Windows (segurança). | CLOSED | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) |
| **🔴 Crítica** | `#3985` | `reasoning_content` não retornado na DeepSeek multi-turn → HTTP 500 | OPEN | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) |
| **🟠 Alta** | `#4042` | DingTalk streaming race condition — clientes perdem resposta final. | OPEN | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) |
| **🟠 Alta** | `#4017` | HEARTBEAT.md ativa → canal não reconecta após perda de rede. | CLOSED | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) |
| **🟠 Alta** | `#4066` | Parser de tool calls intercepta padrões em code blocks e docs (false-positive). | OPEN | [#4066](https://github.com/agentscope-ai/QwenPaw/issues/4066) |
| **🟡 Média** | `#4040` | Anthropic provider hardcode `max_tokens=2048` → truncamento de respostas. | CLOSED | [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) |
| **🟡 Média** | `#4015` | Modelos locais não rodam em Mac M5 Pro (architecture mismatch Rosetta/i386). | CLOSED | [#4015](https://github.com/agentscope-ai/QwenPaw/issues/4015) |
| **🟡 Média** | `#2859` | Whisper local não reconhece mensagens de voz do Telegram (configuração manual necessária). | CLOSED | [#2859](https://github.com/agentscope-ai/QwenPaw/issues/2859) |
| **🟢 Baixa** | `#4063` | Linux não conecta OpenCode nem encontra LMStudio local (invalid, falta contexto). | CLOSED | [#4063](https://github.com/agentscope-ai/QwenPaw/issues/4063) |
| **🟢 Baixa** | `#4003` | Ollama em Mac M5 Pro roda como i386 sob Rosetta. | CLOSED | [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) |

### Padrões de bugs identificados

- **Canais de integração (DingTalk, Telegram, Feishu):** Múltiplos bugs de race condition e reconnect, indicando que a abstração de canais precisa de hardening no lifecycle management (shutdown graceful, retry exponencial, task draining).
- **Providers alternativos (DeepSeek, Anthropic-compatíveis, LMStudio):** Bugs recorrentes com max_tokens hardcoded, cache de reasoning_content, e detection de base URL — área que se beneficiaria de testes de integração mais robustos.
- **Apple Silicon (M5 Pro):** Conflito Rosetta/i386 afeta ferramentas nativas (Ollama, Whisper local). Problema recorrente que pode indicar gaps em QA para ARM64.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Feature | Descrição | Prioridade | Link |
|---|---|---|---|
| **Custom workspace storage path** | Permitir configurar local de armazenamento de workspaces e skills fora de `~/.copaw`. Usuários pedem flexibilidade para setups corporativos. | Alta | [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) |
| **One-shot cron jobs (`--at <iso-datetime>`)** | Agendar lembretes únicos via DateTrigger, não apenas jobs recorrentes. Expandir utilidade da CLI de cron. | Média-Alta | [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) |
| **Skill selector interativo com dropdown** | Substituir output em texto plano por UI dropdown para seleção de skills (pressionando `/`). | Média | [#4078](https://github.com/agentscope-ai/QwenPaw/issues/4078) |
| **UI Font Scaling & File Link Support** | Ajuste de tamanho de fonte global + hyperlinks clicáveis para caminhos de arquivo no chat. QoL para desktop. | Média | [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) |
| **Adaptive execution mode para `execute_shell_command`** | Sync para comandos rápidos, async para long-running — elimina overhead em operações instantâneas. | Média | [#4045](https://github.com/agentscope-ai/QwenPaw/issues/4045) |
| **Semantic skill routing** | Routing semântico de skills em pools >50 skills, evitando context overflow e melhorando precisão de seleção. | Média-Alta | [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) |
| **WSL2 NAT diagnostics em `qwenpaw doctor`** | Diagnósticos automáticos para problemas de rede WSL2 NAT — já parcialmente resolvido via docs (#4005),

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-07

---

## 1. Panorama do dia

ZeroClaw manteve um nível de atividade intenso nas últimas 24h, com **100 eventos total** entre issues e PRs atualizados. A equipe concentrou esforços em duas frentes principais: (i) **expansão massiva de canais e provedores de modelos** — 9 PRs de novos provedores (Inception Labs, Lambda AI, Arcee AI, Featherless, Upstage, GitHub Models, Morph) e 4 canais SMS (Telnyx, Sinch, Plivo) todos submetidos em um único dia pelo mesmo contribuidor; e (ii) **consolidação da refatoração de providers para v0.8.0**, com o PR #6403 (typed-family split) mirando a branch `integration/v0.8.0` antes do merge em master. Nenhuma release foi publicada hoje, indicando que a equipe está em fase de integração pesada pré-lançamento. A proporção de issues fechadas (11 de 50) sugere uma taxa de resolução razoável, mas o volume elevado de issues abertas (39) sinaliza backlog ativo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto está em período pré-lançamento da v0.7.5, cujo milestone tracking está em [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) com foco em automação de pipeline de release. A v0.8.0 está em desenvolvimento paralelo na branch `integration/v0.8.0` com a refatoração de providers (#6403).

---

## 3. Progresso do projeto

Três PRs chegaram ao estado fechado/merged hoje, indicando advancement concretos:

- **#6101** (`feat(webui): hot-switch model & preserve chat context across page navigation` — autor: songchao0421) — Merged. Permite trocar o modelo durante uma conversa sem perder o contexto, e preserva a conexão WebSocket ao navegar entre páginas. Melhora significativa na experiência do dashboard WebUI. [[PR #6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)]

- **#6386** (`refactor(integrations): registry one for-loop, schema-driven` — autor: singlerider) — Merged. Refatoração do registry de integrações para uma estrutura orientada a schema com um único for-loop, eliminando lógica duplicada. Melhoria de code quality na camada de configuração de canais e providers. [[PR #6386](https://github.com/zeroclaw-labs/zeroclaw/pull/6386)]

- **#6001** (`gateway-chat succeeds but /api/cost stays zero...` — autor: b0xtch) — Closed.虽然 foi marcado como fechado, o issue permanece como referência para problemas de observabilidade no gateway onde custos não são computados corretamente. [[Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)]

PR em destaque ainda em aberto:
- **#6403** — Refatoração typed-family para model + TTS providers (tamanho XL, mirando v0.8.0). Este é o PR mais crítico em andamento, pois unifica a estrutura de providers e remove aliases/sinônimos do registry. [[PR #6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)]

---

## 4. Temas quentes da comunidade

### Issues com mais engajamento (comentários)

1. **#5878** — `release: v0.7.5 milestone tracking` — **8 comentários**. A comunidade está discutindo o escopo e os critérios de release para a v0.7.5, com foco em automação de pipeline. [[Issue #5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)]

2. **#4028** — `[Feature]: Database-first memory architecture with pgvector and graph capabilities` — **5 comentários**. Discussão substancial sobre uma arquitetura de memória persistente usando PostgreSQL + pgvector, indicando demanda forte por memória vetorial e capacidades de grafo para agentes de IA. [[Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028)]

3. **#6269** — `Context compressor drops reasoning_content from compressed assistant messages` — **3 comentários**. Bug que afeta provedores com reasoning (DeepSeek), sendo debatido com urgência pelo impacto em tarefas que dependem de chain-of-thought preservado. [[Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)]

4. **#6001** — `gateway-chat /api/cost stays zero...` — **3 comentários**. Problema de observabilidade no gateway, indicando lacunas no tracing de custos. [[Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)]

5. **#6097** — `Local image reading failed` — **3 comentários**. Confirma problema recorrente com imagens geradas por skills usando caminhos locais. [[Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)]

### PR com mais engajamento

- **#5118** — `feat(gateway): include token usage in WebSocket done frame` — **2 👍**. Proposta para adicionar `input_tokens` e `output_tokens` ao frame done do WebSocket, permitindo tracking sem polling. PR fechado com merge planejado. [[PR #5118](https://github.com/zeroclaw-labs/zeroclaw/issues/5118)]

### Análise de demanda

A comunidade demonstra interesse forte em **três eixos**: (a) infraestrutura de memória avançada (pgvector, grafos), (b) diversificação de canais (SMS, ActivityPub) e provedores de modelos, e (c) observabilidade — custos, tracing, health tracking. O volume de PRs de novos provedores (9 em um dia) sugere que a estratégia do projeto é abraçar o ecossistema OpenAI-compatible o mais amplamente possível.

---

## 5. Bugs e estabilidade

### P1 — Críticos (workflow bloqueado ou risco de segurança)

| # | Título | Severidade | Link |
|---|--------|-----------|------|
| 6413 | WhatsApp Web reage a próprias mensagens (is_from_me leak) | S1 | [[#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413)] |
| 6410 | google_workspace tool falha no Windows (.cmd não resolvido) | S1 | [[#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)] |
| 6419 | WorkspaceManager falha ao carregar profiles no startup (S0) | S0 | [[#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419)] |
| 6418 | Fallback providers não herdam credenciais do config.toml (S0) | S0 | [[#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)] |
| 6269 | Context compressor perde reasoning_content (DeepSeek) | S2 | [[#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)] |

**Destaque:** Há dois bugs classificados como **S0 (data loss / security risk)** reportados no mesmo dia — WorkspaceManager e fallback providers — ambos afetando inicialização e failover. A combinação sugere que o subsistema de configuração tem regressões ativas que precisam de atenção imediata.

**Bug crítico de segurança no WhatsApp (#6413):** O canal processa próprias mensagens como prompts, potencialmente fazendo o agente responder a contatos do operador. Este é um bug de segurança além de estabilidade.

### P2 — Degradados (comportamento prejudicado)

| # | Título | Severidade | Link |
|---|--------|-----------|------|
| 6351 | WhatsApp self-chat-mode trigger em todas mensagens fromMe | S2 | [[#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351)] |
| 6431 | SQLite memory schema init falha em startup concorrente | S2 | [[#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431)] |
| 6415 | TTS silenciosamente desabilitado quando stream_mode = "partial" | S2 | [[#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415)] |
| 6422 | cron_add: mensagem de erro unhelpful para schedule string | S2 | [[#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422)] |
| 6472 | Gateway não consegue usar postgres (panic runtime-in-runtime) | S2 | [[#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)] |

**Destaque:** O issue #6472 é particularmente preocupante — um panic de "Cannot start a runtime from within a runtime" no driver postgres indica um erro arquitetural na forma como o gateway inicializa conexões de banco. Requer investigação profunda.

### Bugs reportados hoje sem comentários

- **#6434** — Shell tool recusada mesmo com `[autonomy] level = "full"` — nenhuma resposta ainda.
- **#6474** — LLM invoked twice para uma única requisição do usuário.
- **#6472** — Panic com postgres no gateway.

---

## 6. Pedidos de features e sinais de roadmap

### Features de alta prioridade (P1/P2)

1. **#4028** — Database-first memory com pgvector + grafos — O feature request mais antigo e mais comentado. Indica direção estratégica para memória persistente de longo prazo. [[Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028)]

2. **#6273** — Typed-family split para model + TTS providers — Já em PR (#6403), mirando v0.8.0. Remove duplicação de aliases e padroniza a estrutura de configuração. [[Issue #6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273)]

3. **#6391** — Real heartbeat tracking para daemon nodes — Feature bloqueada, aguardando implementação do tracking de nodes no dashboard (#6392). [[Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)]

4. **#6427** — Twilio SMS channel — PR #6468 em aberto. Complementa os canais SMS (Telnyx, Sinch, Plivo) adicionados hoje. [[Issue #6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)]

5. **#6423** — Mastodon (ActivityPub) channel — Alinha ZeroClaw ao fediverse. [[Issue #6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)]

6. **#6416** — `zeroclaw onboard` deve validar config.toml e warn sobre incompatibilidades — Melhoria de onboarding DX. [[Issue #6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)]

7. **#6251** — Cost sob provider (em vez de global) — Permitir custos diferentes por provider para o mesmo modelo. Closed. [[Issue #6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251)]

### Expansão massiva de providers (sinal de roadmap)

Nove PRs simultâneos de novos provedores indicam estratégia agressiva de cobertura:
- **#6444** — GitHub Models (free tier, múltiplos catalogs)
- **#6459** — Upstage Solar (multilingual KO/EN/JA)
- **#6460** — Featherless AI (milhares de modelos HF)
- **#6461** — Arcee AI (specialist small models)
- **#6462** — Lambda AI Inference
- **#6463** — Inception Labs Mercury (diffusion-based LLM — arquitetura inovadora)
- **#6440** — Morph (fast apply-edits)

**Sinal de direção:** O projeto está claramente posicionando-se como **agregador universal de provedores OpenAI-compatible**, abrangendo desde provedores desconhecidos até Players majors como GitHub e Lambda Labs. O lançamento de modelos diffusion-based (Inception Labs) é particularmente notável como diferenciação.

### Ferramentas adicionadas hoje

- **#6471** — eight_sleep tool (controle de temperatura de cama via API cloud)
- **#6470** — philips_hue tool (controle de luzes via Hue Bridge local)
- **#6464** — home_assistant tool (REST API do Home Assistant)

**Sinal de direção:** Expansão contínua do ecossistema de ferramentas de automação residencial e IoT, consolidando ZeroClaw como hub de controle pessoal.

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

| Dor | Frequência | Impacto | Link |
|-----|-----------|---------|------|
| Configuração de providers quebrando em failover | Múltiplos reports (S0) | Crítico | [[#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)] |
| Context compression destrói reasoning chain | 1 report (S2) | Alto | [[#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)] |
| Web dashboard ignora ApprovalManager | 1 report (S1) | Bloqueante | [[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)] |
| Onboarding não valida config.toml | 1 report | UX ruim | [[#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)] |
| google_workspace tool quebrado no Windows | 1 report (S1) | Bloqueante | [[#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)] |

### Cenários de uso emergentes

- **Uso em fleet**: o novo `/nodes` dashboard (#6392) e o PR de heartbeat tracking indicam operadores gerenciando múltiplas instâncias ZeroClaw.
- **Canais alternativos**: SMS (Twilio, Telnyx, Sinch, Plivo), Mastodon — usuários querem ZeroClaw acessível por qualquer canal de comunicação.
- **Memória persistente**: a solicitação de pgvector (#4028) indica uso como agente de longo prazo com memória institucional.
- **Integração doméstica**: eight_sleep, philips_hue, home_assistant — ZeroClaw posicionando-se como controlador pessoal de automação.

### Satisfação/Insatisfação

- **Positivo**: A velocidade de contribuição em novos providers (9 PRs) demonstra saúde do ecossistema e atratividade do projeto.
- **Negativo**: Issues S0 reportados no mesmo dia sem resolução — a equipe parece sobrecarregada com a integração de v0.8.0 enquanto lida com bugs de regressão críticos.

---

## 8. Backlog que merece atenção

### Issues sem resposta há tempo considerável

| # | Título | Criado | Atualizado | Comentários | Link |
|---|--------|--------|-----------|-------------|------|
| 4028 | Database-first memory pgvector+graph | 2026-03-20 | 2026-05-06 | 5 | [[#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028)] |
| 5118 | Token usage no WebSocket done frame | 2026-03-29 | 2026-05-06 | 1 (👍2) | [[#5118](https://github.com/zeroclaw-labs/zeroclaw/issues/5118)] |
| 5878 | v0.7.5 milestone tracking | 2026-04-18 | 2026-05-06 | 8 | [[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)] |
| 6207 | Web dashboard ignora ApprovalManager | 2026-04-29 | 2026-05-06 | 1 | [[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)] |

### Issues críticos sem atenção

- **#6434** — `Shell tool recusada com autonomy="full"` (criado: 2026-05-06, comentários: 1) — Nenhum maintainer respondeu ainda. Afeta fluxos básicos do agente.
- **#6472** — Panic de postgres no gateway (criado: 2026-05-06, comentários: 0) — Crash completo do gateway com postgres, zero interação da equipe.
- **#6474** — LLM invoked twice (criado: 2026-05-06, comentários: 0) — Duplicação de chamadas LLM desperdiçando custo.

### PRs aguardando review

| # | Título | Tamanho | Risk | Link |
|---|--------|---------|------|------|
| 6403 | Typed-family split model + TTS providers | XL | high | [[#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)] |
| 6392 | Nodes dashboard + device identification | XL | high | [[#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392)] |
| 6463-6469 | 7 novos providers + 4 canais SMS | S | high | Ver links |

### Recomendação

O backlog mais urgente é a **falta de resposta a bugs S0/S1 reportados hoje** — WorkspaceManager (#6419) e fallback providers (#6418). Paralelamente, o PR #6403 (typed-family split, tamanho XL) precisa de review prioritário para não atrasar a release da v0.8.0. A estratégia de expandir provedores massivamente (#6454–#6463) pode estar consumindo bandwidth de review que seria melhor alocado em estabilização.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*