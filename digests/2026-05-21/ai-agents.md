# Resumo diário do ecossistema de agentes de IA 2026-05-21

> Issues: 0 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-05-20 21:48 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-21

---

## 1. Panorama do dia

O projeto NullClaw apresenta baixa atividade de Issues nas últimas 24h, com nenhuma atualização registrada em nenhuma Issue. O nível de atividade concentra-se exclusivamente em Pull Requests, com **3 PRs em estado aberto** que refletem trabalho ativo de contributors. Não há lançamentos recentes, indicando possível fase de estabilização ou maturação de features em desenvolvimento. A saúde geral do repositório permanece positiva, com fluxos de contribuição contínuos e sem blockers críticos reportados.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não sofreu publicação de novas versões neste período. Isso pode indicar que o código está em fase de revisão (review) antes do próximo tag, conforme evidenciado pelos PRs ativos em aberto.

---

## 3. Progresso do projeto

**Nenhuma PR mergeada ou fechada nas últimas 24h.**

Três Pull Requests permanecem abertas e demonstram diferentes frentes de desenvolvimento:

- **#892** — Testes de regressão para `getAddressList` no Windows: Adiciona cobertura de testes para a correção do resolver `getAddressListWindows`, resolvendo o problema de `HostResolutionFailed` em provedores de chat completion que pré-resolvem hostnames. ([nullclaw/nullclaw PR #892](https://github.com/nullclaw/nullclaw/pull/892))
- **#783** — Cron subagent com engine, histórico e hardening: Implementa um scheduler DB-backed com `cron_runs` e `cron_run_queue`, suporte a skill/agent/shell jobs, offsets de TZ por job, e output JSON para CLI. Este é um PR substancial que expande significativamente a capacidade de automação do NullClaw. ([nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783))
- **#887** — Correção de build com Zig v0.16 para Windows/Linux: Resolve incompatibilidades de compilação nas plataformas Windows e Linux, indicando atenção contínua à compatibilidade cross-platform. ([nullclaw/nullclaw PR #887](https://github.com/nullclaw/nullclaw/pull/887))

---

## 4. Temas quentes da comunidade

**Sem dados de comentários ou reações disponíveis para análise nesta janela temporal.**

As PRs listadas carecem de métricas de engajamento (comentários, reações) no período reportado. O PR #783 (cron subagent) merece atenção especial pela abrangência da proposta — introduz um subsistema completo de agendamento com histórico persistente, o que pode gerar discussão técnica significativa durante o code review.

---

## 5. Bugs e estabilidade

**Nenhum bug novo reportado nas últimas 24h.**

O projeto não apresenta Issues abertas relacionadas a crashes ou regressões neste período. A existência do PR #892 (testes de regressão para `getAddressList` no Windows) confirma que bugs relacionados à resolução de hostnames em Windows foram recentemente corrigidos e agora estão sendo cobertos por testes automatizados, demonstrando maturidade no processo de QA.

---

## 6. Pedidos de features e sinais de roadmap

**Feature principal em desenvolvimento:**

- **Cron Subagent (#783):** Este PR é o principal candidato a sinal de roadmap visível. A implementação inclui:
  - Engine de scheduler DB-backed
  - Sistema de histórico (`cron_runs` table)
  - Worker de queue (`cron_run_queue`)
  - Suporte a jobs do tipo skill, agent e shell
  - Offsets de timezone por job
  - Delivery routing e alertas de operator
  - Output JSON para CLI (`cron list --json`, `cron schedule --json`)

A amplitude desta feature sugere um roadmap que prioriza automação, observabilidade operacional e tooling para operadores. ([nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783))

---

## 7. Resumo de feedback dos usuários

**Sem dados de feedback direto disponíveis para este período.**

A ausência de Issues novas ou comentários de usuários indica baixa volumetria de reports externos ou que o feedback está fluindo via canais não-GitHub (Discord, fóruns, etc.). A evolução contínua do projeto (testes de regressão, compatibilidade com Zig 0.16, features de cron) sugere que o projeto está respondendo a demandas de contributors e usuários internos.

---

## 8. Backlog que merece atenção

| # | Titulo | Status | Atualizado | Observação |
|---|--------|--------|------------|------------|
| **#783** | feat(cron): cron subagent, run history, JSON output, security hardening | OPEN | 2026-05-20 | PR de alta complexidade — merece review prioritário |
| **#892** | test(compat/net): add Windows getAddressList regression tests | OPEN | 2026-05-20 | Testes de regressão — validação importante para estabilidade Windows |
| **#887** | Fix build with zig v0.16 for win/linux | OPEN | 2026-05-19 | Compatibilidade cross-platform — baixa complexidade, pode ser mergeado rapidamente |

**Prioridade de atenção:** O PR #783 (#783) é o item mais significativo do backlog atual. Trata-se de uma feature de sistema que introduz dependência de banco de dados e worker de queue, demandando review aprofundado em termos de arquitetura, segurança e performance.

---

## Métricas consolidadas (2026-05-21)

| Categoria | Últimas 24h |
|-----------|-------------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 3 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| PRs com maior impacto | #783 (cron engine), #892 (regressão Windows), #887 (build Zig) |

**Veredicto de saúde:** O projeto está em estado de manutenção ativa com trabalho de desenvolvimento em progresso. A ausência de Issues ou releases não indica estagnação — ao contrário, o pipeline de PRs demonstra evolução contínua em compatibilidade, testes e funcionalidades core.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-05-21
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta vitalidade** em 21 de maio de 2026, com todos os sete projetos em ritmo de desenvolvimento ativo. A cadência de PRs ultrapassa 270 atualizações acumuladas nas últimas 24h, sinalizando maturidade colaborativa em escala. O período revela uma **bifurcação estratégica**: enquanto projetos como CoPaw e PicoClaw priorizam estabilidade e UX para consolidação de base (com releases pontuais), ZeroClaw e IronClaw investem em refatorações arquiteturais de grande porte (v0.8.0, Reborn) que prometem breaking changes. Os temas técnicos convergentes — segurança em produção, multi-provedores LLM, isolamento de workspaces e ferramentas de automação — evidenciam que o ecossistema está resolvendo problemas de segunda geração: após resolver "como fazer funcionar", agora enfrenta "como fazer funcionar em escala e com confiança".

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Avaliação de Saúde |
|---------|--------------|-------------|------------------|----------------|-------------------|
| **NullClaw** | 0 | 3 | 0 | 0 | 🟢 Estável — trabalho em progresso |
| **NanoBot** | 11 | 13 | 27 | 0 | 🟢 Saudável — ciclo intenso |
| **Hermes Agent** | 49 | ~50 | 6 | 0 | 🟡 Ativo — alta volumetria de bugs (P1-P3) |
| **PicoClaw** | 8 | 16 | 11 | 1 nightly | 🟢 Bom — segurança em foco |
| **IronClaw** | 23 | 27 | 13 | 0 | 🔴 Refatoração acelerada — regressões críticas |
| **CoPaw** | 16 | 20 | 17 | 1 (v1.1.8.post1) | 🟢 Vigoroso — regressão AGENTS.md |
| **ZeroClaw** | ~94 | 47 | 3 | 0 | 🟡 Preparação v0.8.0 — backlog sobrecarregado |

**Observações quantitativas:**
- **Maior throughput de PRs:** NanoBot (27 merges) e CoPaw (17 merges) dominam a entrega
- **Maior volume acumulado:** Hermes Agent e ZeroClaw mantêm ~50 PRs atualizados, indicando ecossistema de contributors robusto
- **Release cadence:** Apenas CoPaw (v1.1.8.post1) e PicoClaw (nightly) publicaram releases, todos os demais concentram-se em integração pré-release
- **Bugs críticos em aberto:** ZeroClaw (6 P1/S1), Hermes Agent (1 P1 + 7 P2), IronClaw (2 regressões P1)

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Líder em Throughput de Entrega

**Vantagens competitivas:**
- **Maior cadência de merge:** 27 PRs em 24h demonstra pipeline de CI/CD maduro e equipe de review eficiente
- **Diversificação de canais:** Signal (mergeado), Feishu, Telegram, WebUI — estratégia omnichannel madura
- **Base de usuários engajada:** Issues com，讨论 substanciais (Signal #49: 3 meses, 5 👍)
- **Refatorações concluídas:** 16 PRs de refatoração de abril finalizados, limpando debt técnico

**Diferenças técnicas:**
- Arquitetura orientada a **eventos streaming** com deduplicação de mensagens inbound
- Provider abstraction layer com suporte a provedores OpenAI-compatible (Novita AI, xAI Grok OAuth)
- Sessões transcript-append-only para auditabilidade

### CoPaw — Foco em Desktop e Multi-Modalidade

**Vantagens competitivas:**
- **Desktop nativo em desenvolvimento:** Tauri 2.x (PR #3813) e Coding Mode (PR #4578) sinalizam ambição de IDE
- **Ecossistema de habilidades:** Skill Market unificado com 3 provedores e busca async
- **Roteamento multimodal:** Feature request #4539 para detecção automática de imagem/vídeo/voz em modelos gratuitos
- **Release discipline:** v1.1.8.post1 publicada com changelog claro

**Diferenças técnicas:**
- Arquitetura centrada em **桌宠 (pet companion)** como diferencial de UX
- Provedor QwenPaw nativo como backbone
- Suporte a WeChat iLink como canal de produção

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança em Produção

Todos os projetos demonstram investimento simultâneo em segurança:

| Projeto | Iniciativa de Segurança |
|---------|------------------------|
| **PicoClaw** | CSRF protection (PR #2900), TLS verification configurável (PR #2899), path traversal fixes |
| **ZeroClaw** | SecurityPolicy bloqueando multiline heredocs (S1), Groq API key detector (PR #6812), leak scanner |
| **IronClaw** | Runtime policies fail-closed, staged credentials para egress, NoExposureGuard service |
| **Hermes Agent** | Auth precedence complexity (P1 #29285), xAI OAuth 403 fix |

**Análise:** A proliferação de correções de segurança simultâneas indica que o ecossistema está amadurecendo para deployments enterprise, onde isolamento e não-repúdio são requisitos.

### 4.2 Compatibilidade Multi-Provedor

| Projeto | Provedores em Destaque |
|---------|----------------------|
| **NanoBot** | Novita AI (PR #3927), xAI Grok OAuth (PR #3936), Kimi k2.5/k2.6 (PR #3940) |
| **PicoClaw** | GPT4Free (Issue #2901), DeepSeek thinking_level (Issue #2903), OpenAI OAuth Codex |
| **ZeroClaw** | DeepSeek-V4 thinking mode (Issue #6059, 11 comentários), Groq API keys |
| **Hermes Agent** | Antigravity OAuth (PRs #29385, #29474), LM Studio/Qwen3 reasoning_content |

**Análise:** A diversificação de provedores é necessidade universal, impulsionada por custos, disponibilidade regional e capacidades específicas (reasoning, vision, multimodal).

### 4.3 Isolamento e Workspace Restrictions

| Projeto | Problema Reportado |
|---------|-------------------|
| **NanoBot** | restrictToWorkspace=true bloqueia requisições externas legítimas (Issue #3931) |
| **CoPaw** | AGENTS.md regression impede system prompts customizados (Issue #4496) |
| **IronClaw** | Tenant-scoped groups e project ACLs em desenvolvimento (Issue #3796) |
| **ZeroClaw** | Multi-agent runtime com workspaces isolados por alias (Issue #6272) |

**Análise:** O isolamento emerge como problema arquitetural — não apenas "como isolar", mas "como permitir exceções controladas" e "como documentar o comportamento esperado".

### 4.4 Observabilidade e Debugging

| Projeto | Solução |
|---------|---------|
| **ZeroClaw** | OTel tool spans com gen_ai.tool.* (PR #6009) |
| **Hermes Agent** | reasoning_content em Langfuse (PR #29486), Hermes doctor SSH (Issue #29481) |
| **IronClaw** | EventStreamManager para projection replay (PR #3761) |
| **CoPaw** | Títulos de arquivos em branco no Console (Issue #4260) |

**Análise:** Ferramentas de debugging estão sendo adicionadas reativamente — após comunidade reportar dificuldades, não como feature planejada.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Segmento | Projetos Predominantes | Características |
|----------|----------------------|-----------------|
| **Desenvolvedores individuais / Hobbyists** | NullClaw, PicoClaw | Simplicidade, compatibilidade Zig/Go, nightly builds |
| **Times de desenvolvimento** | Hermes Agent, NanoBot | Kanban swarm, multi-ferramentas, keyboard shortcuts |
| **Enterprise / Multi-tenant** | IronClaw, ZeroClaw | Tenant ACLs, audit logging, production hardening |
| **Mercado sinofônico** | CoPaw | WeChat, 飞书,桌宠, QwenPaw |

### 5.2 Por Arquitetura Técnica

| Abordagem | Projetos | Implicações |
|-----------|----------|-------------|
| **Rust-native** | NullClaw (Zig), IronClaw | Performance, memory safety, compilação AOT |
| **Node.js/TypeScript** | NanoBot, Hermes Agent | Ecossistema npm, deployment em containers |
| **Python-native** | CoPaw | Familiaridade, integração ML, prototyping rápido |
| **Go** | PicoClaw, ZeroClaw | Cross-compilation simples, binários únicos |

### 5.3 Por Fase de Desenvolvimento

| Fase | Projetos | Implicações |
|------|----------|-------------|
| **Estabilidade** | NullClaw, CoPaw | Foco em bugs, releases pontuais, QA |
| **Feature parity** | NanoBot, Hermes Agent | Adição de canais/provedores, integração |
| **Refatoração pesada** | IronClaw, ZeroClaw | Breaking changes iminentes, risco de regressão |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Métrica | Líder | Seguidores | Laggards |
|---------|-------|------------|----------|
| **PRs merged/24h** | NanoBot (27) | CoPaw (17), IronClaw (13) | NullClaw (0), ZeroClaw (3) |
| **Release cadence** | CoPaw (v1.x) | PicoClaw (nightly) | Hermes, NullClaw, IronClaw, ZeroClaw (0) |
| **Issue engagement** | Hermes Agent (50 issues) | ZeroClaw (94+), IronClaw (23) | NullClaw (0) |

### 6.2 Qualidade e Estabilidade

| Projeto | Dívida Visível | Disciplina de Releases |
|---------|---------------|------------------------|
| **CoPaw** | Regressão AGENTS.md (P1) | Releases com changelog, versionamento semântico |
| **PicoClaw** | PID stale crash (P1), Auth 401 | Nightly automatizado, sem changelog formal |
| **IronClaw** | Regressão v0.28.2 (P1), E2E failure | Nenhuma release recente, mode refatoração |
| **ZeroClaw** | 6 P1/S1 críticos, 94 issues backlog | Preparação para v0.8.0 (breaking) |

### 6.3 Maturidade Relativa

| Nível | Projetos | Indicadores |
|-------|----------|-------------|
| **Maduro** | CoPaw | Release v1.1.x, documentation, stable channel |
| **Estável** | NanoBot, PicoClaw | Bug reports tratados, features evoluindo |
| **Em transição** | Hermes Agent | Alta volumetria mas sem release tag clara |
| **Pré-maturidade** | IronClaw, ZeroClaw | Refatorações bloqueantes, breaking changes |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**① Multi-agente orchestration como próximo fronteira**
- IronClaw: Subagent spawn design (#3798), multi-agent runtime (#6272)
- ZeroClaw: Multi-agent UX flow RFC aprovado (#5890)
- Hermes Agent: Per-task model override (#18591), Hermes-to-Hermes delegation
- CoPaw: Sub-agents heredando MCP/ACP config (#4491)

> **Implicação:** O mercado está evoluindo de "um agente por usuário" para "swarm de agentes especializados". A abstração de isolamento, comunicação e delegação entre agentes é o problema técnico central a resolver.

**② Desktop como vetor de adoção**
- CoPaw: Tauri 2.x desktop app (PR #3813), Coding Mode in-browser (PR #4578)
- Hermes Agent: TUI ANSI flood debugging (#28419), CLI serve commands
- PicoClaw: Builds pré-compilados com WhatsApp request (#2625)

> **Implicação:** A experiência web-first está mostrando limites. Usuários demandam aplicações desktop nativas com acesso ao filesystem, integração com IDE e workflows offline.

**③ Security-by-default para produção**
- Todos os projetos demonstram investment simultâneo em security hardening
- IronClaw: fail-closed policies, staged credentials
- PicoClaw: CSRF, TLS config, sandbox bypass fixes
- ZeroClaw: API key leak detection, SecurityPolicy

> **Implicação:** A transição de "protótipo" para "produção" exige segurança default, não opt-in. Projetos que não endereçarem isso perderão credibilidade enterprise.

**④ Provider diversity como vantagem competitiva**
- Demanda por DeepSeek, Groq, xAI, Novita AI, Ollama (local)
- Tendência de modelos locais (PicoClaw #2901, CoPaw #4539)

> **Implicação:** lock-in em provedor único não é aceitável. Abstração de provider com fallback automático será diferencial.

**⑤ Memory como cidadã de primeira classe**
- Hermes Agent: 4 issues sobre memory consolidation, MCP exposure
- IronClaw: Native Memory capability (Lane 4, #3804)
- NanoBot: Session-level MEMORY ambiguity (#3744)
- CoPaw: Dreaming plugin para background consolidation

> **Implicação:** Gerenciamento de memória persistente e contextual está evoluindo de feature para requirement. A abstração de sessão será crítico para multi-turn de longo prazo.

**⑥ Streaming-first experiences**
- PicoClaw: 9+ comentários em streaming output request (#1950)
- CoPaw: Streaming typewriter card para 飞书 (#2862)
- Hermes Agent: Streaming delta support, TUI response

> **Implicação:** Usuários esperam feedback em tempo real. Batch responses de agentes de IA serão percebidas como degradação de qualidade.

---

## Síntese para Decisores

| Dimensão | Recomendação |
|----------|--------------|
| **Adoção imediata** | NanoBot (throughput), CoPaw (desktop), PicoClaw (segurança) |
| **Watch list** | IronClaw (Reborn), ZeroClaw (v0.8.0) — breaking changes iminentes |
| **Contribuição estratégica** | Multi-agent orchestration, security hardening, provider abstraction |
| **Evitar** | Hermes Agent sem release tag formal, NullClaw (baixa atividade de comunidade) |

---

*Relatório compilado em 2026-05-21. Dados derivados de resumos de atividade comunitária de cada repositório GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-21

## 1. Panorama do dia

NanoBot apresenta alta atividade de desenvolvimento no dia de hoje. Foram registradas **40 PRs atualizadas** (13 abertas, 27 merged/fechadas) e **11 issues** em um período de 24h, sinalizando um ritmo de desenvolvimento intenso. Entre os destaques, destacam-se a fusão de 16 PRs de refatoração de longa data (originados em abril) e o merge do suporte ao canal Signal após iterações de design. Nenhuma release foi publicada, mas 4 PRs abertas indicam progresso em novos provedores (Novita AI, xAI Grok OAuth) e ferramentas de segurança (confirmação de comandos perigosos). A base de usuários demonstra engajamento ativo, com issues cobrindo desde bugs de estabilidade (WebUI, restrictToWorkspace) até funcionalidades aguardadas (geração de imagens para Ollama, buffering para chats em grupo).

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto mantém a versão 0.2.0 (conforme referenced na issue #3907) sem atualização de versionamento hoje. Recomenda-se monitorar as PRs abertas — especialmente #3927 (Novita AI) e #3940 (fix Kimi reasoning) — que podem compor uma futura release de correção e expansão de provedores.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (27 total)

O merge mais significativo é o **suporte ao canal Signal** (PRs #3852 e #3935), que adiciona integração com signal-cli via HTTP JSON-RPC, suportando DMs e grupos com políticas de acesso open/allowlist, conversão de markdown, indicadores de digitação e tratamento de anexos. Este era um pedido da comunidade desde a issue #49 (fevereiro).

**16 PRs de refatoração acumulados em abril foram finalizados hoje**, abrangendo:
- WebSocket tooling, lifecycle de sessão, reasoning e streaming delta (#3179)
- Template rendering para ContextBuilder e HeartbeatService (#2813)
- Registro unificado de ferramentas (#2787)
- Heartbeat e evaluate_notification como ferramentas virtuais LLM (#2801)
- Gateway initialization factory-based (#2852)
- Gravação de token usage em JSONL por workspace (#2932)
- Deduplicação de mensagens inbound (#2981)
- Migración de provider config para formato lista (#3026)
- Transcripts de sessão append-only (#3224)
- Agente reraise property para AgentHook (#3748)
- .gitignore para Node.js e frameworks frontend (#2934)

### PRs Abertas com Progresso Relevante
| PR | Descrição | Status |
|----|-----------|--------|
| [#3923](https://github.com/HKUDS/nanobot/pull/3923) | Otimização de workflows de codificação (apply_patch, workspace validation) | Aberta |
| [#3927](https://github.com/HKUDS/nanobot/pull/3927) | Adição do provedor Novita AI (OpenAI-compatible) | Aberta |
| [#3940](https://github.com/HKUDS/nanobot/pull/3940) | Correção de conflit `reasoning_effort` + `thinking` para Kimi | Aberta |
| [#3936](https://github.com/HKUDS/nanobot/pull/3936) | xAI Grok OAuth support com PKCE e refresh | Aberta |
| [#3937](https://github.com/HKUDS/nanobot/pull/3937) | Mecanismo de confirmação para comandos perigosos | Aberta |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

**#49 — Signal channel support** (5 👍, 4 comentários)
- Status: Aberta desde fevereiro
- Demanda: Suporte a Signal como canal de comunicação via signal-cli
- **Análise**: Este era o issue mais esperado pela comunidade. A integração foi finalmente mergeada (PRs #3852 e #3935), mas o issue original permanece aberto, sugerindo que a implementação ainda não satisfaz completamente os requisitos ou precisa de iteração adicional. A lacuna entre o merge da feature e o fechamento do issue indica necessidade de validação com usuários reais.

**#3744 — Session-level MEMORY para múltiplos usuários** (4 comentários)
- Status: Aberta desde 2026-05-11
- Demanda: Clarificação sobre geração de USER.md/MEMORY.md quando múltiplos usuários IM compartilham o mesmo agente
- **Análise**: Questão de design architecture centrada no isolamento de sessão. A pergunta sobre o papel do diretório `session/` indica que a documentação atual não cobre suficientemente este cenário de uso compartilhado. Provável candidate a feature request formal se a discussão revelar gaps de design.

**#1123 — 163.com IMAP "SELECT Unsafe Login"** (4 comentários)
- Status: Aberta desde fevereiro
- Demanda: Correção para configuração de email 163.com com erro no comando SELECT
- **Análise**: Problema de compatibilidade com servidor específico. A causa raiz (requisição de comando ID antes de SELECT) está identificada. Este é um caso de estabilidade para integrações de email que não deve ser negligenciado — afeta funcionalidade core de notificação.

**#3934 — exec tool pip installation** (2 comentários)
- Demanda: PATH de ambiente python venv追加ado ao final, causando优先使用 do sistema Python
- **Análise**: Bug de prioridade de PATH que afeta capacidade de instalar bibliotecas via pip durante execução de scripts. Impacta diretamente a extensibilidade da ferramenta exec.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| Issue | Severidade | Descrição |
|-------|-----------|-----------|
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) | **Alta** | WebUI fecha conversa após primeira resposta — afecta experiência de uso do canal web |
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) | **Alta** | exec tool não consegue instalar packages via pip por prioridade de PATH |
| [#3931](https://github.com/HKUDS/nanobot/issues/3931) | **Média** | restrictToWorkspace=true bloqueia requisições web externas mesmo para comandos legítimos |
| [#3939](https://github.com/HKUDS/nanobot/issues/3939) | **Média** | Moonshot API rejeita kimi-k2.5/k2.6 com conflito reasoning_effort + thinking |

### Bugs Fechados

**#3907 — Page rendering issue on reasoning** ✅
- Causa: IncrementalThinkExtractor não faz buffering de linha, gerando output "one word per line"
- Observação: Problema foi endereçado em versão 0.2.0, mas ainda reportado — indica possível gap entre fix e distribuição ou regressão parcial.

### Tendência de Estabilidade

Os bugs reportados concentram-se em três áreas: **canal WebUI**, **ferramenta exec** e **configuração de segurança (restrictToWorkspace)**. A presença de bugs relacionados a workspace restrictions (#3931) e exec tool (#3934) indica que o sistema de isolamento e permissões ainda está amadurecendo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Categoria | Descrição |
|-------|-----------|-----------|
| [#3941](https://github.com/HKUDS/nanobot/issues/3941) | Provider | Adicionar backend de geração de imagens para Ollama (x/z-image-turbo) |
| [#3938](https://github.com/HKUDS/nanobot/issues/3938) | Channel | Message buffering/debounce para chats em grupo (Feishu/Telegram) |
| [#3903](https://github.com/HKUDS/nanobot/issues/3903) | Provider | Correções MIME type para MiniMax/AIHubMix na geração de imagens |
| #3939 | Provider | Suporte a modelos Kimi k2.5/k2.6 sem conflito de parâmetros |

### Sinais de Roadmap

1. **Expansão de provedores**: Novita AI (PR #3927) e xAI Grok OAuth (PR #3936) demonstram estratégia de diversificação de provedores LLM
2. **Canais de comunicação**: Signal foi merged; next logical step seria melhorar suporte a grupos (debounce #3938)
3. **Geração de imagens local**: Demanda por Ollama image generation (#3941) indica tendência de modelos locais para image gen
4. **Segurança operacional**: PR #3937 (confirmação de comandos perigosos) sinaliza maturidade para uso em produção

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

**Instabilidade do canal WebUI**: Usuários experimentam perda de conversa após primeira resposta, especialmente em setups com WebSocket e token authentication. Impacta diretamente a experiência de uso como assistente pessoal.

**Limitações de isolamento de workspace**: A configuração `restrictToWorkspace=true`过于 restritiva, bloqueando comandos legítimos que necessitam de acesso externo. Isso cria frustração em workflows que dependem de ferramentas que fazem chamadas externas.

**Complexidade de multi-usuário**: Usuários que tentam compartilhar o agente entre múltiplos canais IM enfrentam confusão sobre como MEMORY.md e USER.md são gerenciados por sessão. A falta de documentação clara sobre isolamento de sessões é uma barreira de adoção.

**Problemas com email 163.com**: A falha de IMAP no comando SELECT afeta usuários chineses que dependem deste provedor, bloqueando completamente a funcionalidade de recebimento de emails.

### Cenários de Uso Emergentes

1. **Uso colaborativo em grupo**: Crescimento de uso em chats de equipe (Feishu/Telegram) gera demanda por features dedebounce e gestão de contexto grupal
2. **Modelos locais (Ollama)**: Usuários exploram nanobot com modelos locais, extendendo para além de LLMs API-based
3. **Integração com plataformas seguras**: Demanda por Signal indica interesse em canais de comunicação com foco em privacidade

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|-----------|
| [#49](https://github.com/HKUDS/nanobot/issues/49) | ~3 meses | Signal channel — mergeado mas issue não fechado | Média |
| [#1123](https://github.com/HKUDS/nanobot/issues/1123) | ~3 meses | 163.com IMAP fix — problema de estabilidade afeta usuários chinos | **Alta** |
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) | ~10 dias | Session-level MEMORY ambiguity — sem resposta da equipe | **Alta** |

### Issues Recentes Sem Interação

| Issue | Criado | Descrição |
|-------|--------|-----------|
| [#3941](https://github.com/HKUDS/nanobot/issues/3941) | 2026-05-20 | Ollama image generation — 0 comentários |
| [#3939](https://github.com/HKUDS/nanobot/issues/3939) | 2026-05-20 | Moonshot Kimi conflict — 0 comentários |
| [#3938](https://github.com/HKUDS/nanobot/issues/3938) | 2026-05-20 | Group chat debounce — 0 comentários |

### Recomendações de Priorização

1. **Issue #1123 (163.com email)** — Afeta funcionalidade core com workaround identificado; deveria ter resolução priorizada
2. **Issue #3744 (multi-user MEMORY)** — Questão de design architecture que, se não endereçada, gerará mais issues duplicados
3. **Issue #3884 (WebUI crash)** — Bug de estabilidade que deteriora experiência do canal principal de interface web
4. **PR #3940 (Kimi fix)** — Correção trivial mas necessária para compatibilidade com modelos Moonshot populares

---

**Links dos Recursos Mencionados**
- Repositório: https://github.com/HKUDS/nanobot
- Issues: https://github.com/HKUDS/nanobot/issues
- Pull Requests: https://github.com/HKUDS/nanobot/pulls

---

*Relatório gerado em 2026-05-21. Dados baseados em atividade das últimas 24h.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-21

## 1. Panorama do Dia

O Hermes Agent registra **alta atividade comunitária** em 20 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões, mas 6 PRs foram merged/fechados, indicando progresso contínuo no codebase. A base de issues abertas permanece volumosa (49 activas), refletindo uma comunidade ativa com muitas contribuições simultâneas. Os destaques negativos incluem um bug **P1** crítico sobre `auth.json` sobrescrevendo configurações de provider, e múltiplos problemas P2 relacionados a gateways (Discord, Feishu, Telegram) e autenticação. A relação entre issues de bugs (40%) e features (60%) sugere que o projeto está em fase de amadurecimento funcional com ênfase em robustez.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo sem tag de versão publicada neste período. Usuários em produção devem monitorar o branch `main` para hotfixes críticos (como o P1 #29285) que podem ser mergeados sem release formal.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (6 total)

| # | PR | Impacto | Link |
|---|-----|---------|------|
| #29484 | fix(x_search): surface degraded results + validate dates | Corrige falsos positivos em searches do X, melhorando confiança dos resultados | [PR #29484](https://github.com/NousResearch/hermes-agent/pull/29484) |
| #29485 | fix(kanban): remove missing avoid-ai-writing skill | Resolve crash em loop infinito do kanban swarm synthesizer | [PR #29485](https://github.com/NousResearch/hermes-agent/pull/29485) |
| #29493 | fix(doctor): recognize gh_cli credential pool | Corrige diagnóstico falso negativo do Copilot provider | [PR #29493](https://github.com/NousResearch/hermes-agent/pull/29493) |
| #29492 | fix(kanban): check GitHub PR state before guard | Melhora respawn guard para não bloquear PRs já fechados | [PR #29492](https://github.com/NousResearch/hermes-agent/pull/29492) |
| #29490 | fix(skills-hub): deduplicate by identifier | Corrige drop silencioso de skills com nomes duplicados | [PR #29490](https://github.com/NousResearch/hermes-agent/pull/29490) |
| #29486 | fix(plugins): surface reasoning_content in Langfuse | Preserva chain-of-thought de provedores como LM Studio/Qwen3 | [PR #29486](https://github.com/NousResearch/hermes-agent/pull/29486) |

**Principais avanços:**
- **Kanban swarm** recebeu 2 hotfixes críticos resolvendo crashes operacionais
- **Observabilidade** melhorou com suporte a reasoning_content em Langfuse
- **Diagnostics** corrigido para Copilot provider com credenciais gh_cli

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Tipo | Comentários | 👍 | Link |
|---|--------|------|-------------|-----|------|
| #28419 | TUI ANSI flood after gateway pipe break | Bug | 4 | 0 | [Issue #28419](https://github.com/NousResearch/hermes-agent/issues/28419) |
| #4438 | Rich Spreadsheet Skill (xlsx/csv) | Feature | 4 | 0 | [Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438) |
| #29481 | hermes doctor SSH ignores configured SSH user/port/key | Bug | 3 | 0 | [Issue #29481](https://github.com/NousResearch/hermes-agent/issues/29481) |
| #21910 | rewind/edit-and-resubmit (Claude Code double-Esc) | Feature | 3 | **4** | [Issue #21910](https://github.com/NousResearch/hermes-agent/issues/21910) |
| #16946 | persistent history for background tasks | Feature | 3 | 0 | [Issue #16946](https://github.com/NousResearch/hermes-agent/issues/16946) |
| #18591 | Per-task model override for delegate_task | Feature | 3 | 1 | [Issue #18591](https://github.com/NousResearch/hermes-agent/issues/18591) |
| #10835 | Expose Hermes memory via MCP server | Feature | 3 | 0 | [Issue #10835](https://github.com/NousResearch/hermes-agent/issues/10835) |
| #29125 | Hermes does not work through Claude CLI | Bug | 1 | **2** | [Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125) |

### Análise das Demandas

**Funcionalidades de Workflow Repetidamente Solicitadas:**
1. **Rewind/Undo (#21910)** — 4 👍 indica forte desejo por controle de sessão tipo Claude Code. users querem poder "voltar no tempo" em conversas
2. **Memory via MCP (#10835)** — Integração com ecossistema multi-agente é demanda crescente
3. **Per-task Model Override (#18591)** — Necessário para otimizar custos em arquiteturas de delegação

**Padrões de Uso Emergentes:**
- Multi-usuário/multi-plataforma deployments gerando issues de isolamento (#27182, #16946)
- Integração com provedores OAuth (Antigravity, xAI) mostrando maturação do ecossistema

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Crítico (1 issue)

| # | Título | Componentes | Link |
|---|--------|-------------|------|
| #29285 | auth.json active_provider silently overrides model.provider | agent, auth | [Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285) |

> **Impacto:** Usuários que configuram provider padrão em `config.yaml` têm preferências sobrescritas silenciosamente por `auth.json`, causando comportamento inesperado em toda sessão.

#### P2 — Alto (7 issues)

| # | Título | Componentes | Link |
|---|--------|-------------|------|
| #28419 | TUI ANSI flood after gateway pipe break | gateway, tui | [Issue #28419](https://github.com/NousResearch/hermes-agent/issues/28419) |
| #5358 | Gateway/CLI ignore model.provider, fall back to OpenRouter | gateway, cli | [Issue #5358](https://github.com/NousResearch/hermes-agent/issues/5358) |
| #26058 | auto_thread disabled for free_response_channels | gateway, discord | [Issue #26058](https://github.com/NousResearch/hermes-agent/issues/26058) |
| #29466 | Feishu DM reply routed to thread instead of main chat | gateway, feishu | [Issue #29466](https://github.com/NousResearch/hermes-agent/issues/29466) |
| #29471 | Feishu first chunk sent as text, breaking Markdown | gateway, feishu | [Issue #29471](https://github.com/NousResearch/hermes-agent/issues/29471) |
| #29415 | kanban_swarm references missing avoid-ai-writing skill | cli, skills | [Issue #29415](https://github.com/NousResearch/hermes-agent/issues/29415) |
| #29407 | computer_use route screenshots through auxiliary.vision | agent, vision | [Issue #29407](https://github.com/NousResearch/hermes-agent/issues/29407) |

#### P3 — Médio (13 issues)

**Temas recorrentes:**
- **Autenticação/Provider:** xAI OAuth 403 (#26847), Azure Bearer header (#29414), SSH doctor check (#29481)
- **Gateway/platforms:** Discord auto-thread naming (#29432), Slack history tool (#29489)
- **Plugins/Tools:** MCP malware check freeze (#29500), Langfuse reasoning_content (#29486)

### Análise de Estabilidade

**Problemas sistêmicos identificados:**
1. **Auth precedence complexity** — Múltiplas camadas de configuração (auth.json, config.yaml, env vars) criando sobreposições não intuitivas
2. **Gateway reliability** — 4 issues P2 relacionadas a gateways (Discord, Feishu, Telegram) indicam área que necessita refactoring
3. **Provider abstraction leaks** — Comportamentos específicos de provider (OpenRouter fallback, xAI entitlement) vazando para camadas superiores

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Alta Demanda

| # | Feature | Categoria | 👍 | Link |
|---|---------|-----------|-----|------|
| #21910 | rewind/edit-and-resubmit (double-Esc) | agent, cli | 4 | [Issue #21910](https://github.com/NousResearch/hermes-agent/issues/21910) |
| #4438 | Rich Spreadsheet Skill (xlsx/csv) | tools, skills | 0 | [Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438) |
| #18591 | Per-task model override for delegate_task | agent, delegate | 1 | [Issue #18591](https://github.com/NousResearch/hermes-agent/issues/18591) |
| #25083 | Immutable/protected skills | tools, skills | 0 | [Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083) |
| #29456 | Toggle title generation | config | 0 | [Issue #29456](https://github.com/NousResearch/hermes-agent/issues/29456) |
| #29431 | Dreaming plugin — Background memory consolidation | plugins, memory | 0 | [Issue #29431](https://github.com/NousResearch/hermes-agent/issues/29431) |
| #29107 | Memory auto-capture via session lifecycle hooks | agent, memory | 0 | [Issue #29107](https://github.com/NousResearch/hermes-agent/issues/29107) |

### PRs de Feature em Progresso

| # | Feature | Status | Link |
|---|---------|--------|------|
| #29506 | Harden humanizer skill with detector | OPEN | [PR #29506](https://github.com/NousResearch/hermes-agent/pull/29506) |
| #29454 | Opt-in large tool result compaction | OPEN | [PR #29454](https://github.com/NousResearch/hermes-agent/pull/29454) |
| #29385/29474 | Antigravity CLI OAuth provider (2 implementações) | OPEN | [PR #29385](https://github.com/NousResearch/hermes-agent/pull/29385), [PR #29474](https://github.com/NousResearch/hermes-agent/pull/29474) |
| #29501 | spec-kit initialization | OPEN | [PR #29501](https://github.com/NousResearch/hermes-agent/pull/29501) |

### Sinais de Roadmap

**Tendências observadas:**
1. **Memory como cidadã de primeira classe** — 4 issues relacionadas a memory consolidation, auto-capture e exposição MCP
2. **Multi-agente orchestration** — Per-task overrides, Hermes-to-Hermes delegation, persistent background history
3. **Skills maturation** — Proteção de skills críticas, spreadsheet handling, humanizer hardening
4. **Provider diversity** — Novos providers OAuth (Antigravity) demonstram expansão de ecossistema

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Configuração e Auth Confusa**
- Usuários enfrentam comportamento imprevisível quando múltiplas fontes de configuração (config.yaml, auth.json, env vars) entram em conflito
- Diagnósticos (`hermes doctor`) frequentemente dão falsos negativos, erode confiança em ferramentas de debugging
- Issue #29285 (P1) e #5358 (P2) são exemplos críticos

**2. Experiência Multi-Plataforma Inconsistente**
- Usuários Discord frustrados com auto-thread desabilitado para free_response_channels
- Usuários Feishu enfrentando Markdown quebrado e mensagens em threads erradas
- Telegram com limite de comandos afeta usabilidade

**3. Operações de Longa Duração**
- Kanban swarm crashando em loop infinito (#29415, já corrigido em #29485)
- Background tasks perdendo estado após restart (#16946)
- Sessões TUI longas com problemas de token OAuth stale (#29344)

**4. Limitações de Integração**
- Memory não compartilhável entre agentes via MCP
- Spreadsheet handling primitivo comparado a outras plataformas
- Falta de "rewind" frustra usuários vindos de Claude Code

### Cenários de Uso Emergentes

- **Deployments empresariais multi-tenant** requerendo isolamento per-user de USER.md (#27182)
- **Agentes especializados** querendo modelos diferentes por tarefa (#18591)
- **Integração IDE/CLI** com Claude Code via MCP (#10835)

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| # | Título | Criado | Idade | Comentários | Link |
|---|--------|--------|-------|-------------|------|
| #1265 | Hermes-to-Hermes task delegation via MCP | 2026-03-14 | ~37 dias | 2 | [Issue #1265](https://github.com/NousResearch/hermes-agent/issues/1265) |
| #4438 | Rich Spreadsheet Skill | 2026-04-01 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto — PicoClaw
**Data:** 2026-05-21 | **Repositório:** github.com/sipeed/picoclaw

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 21/05/2026, com 27 PRs atualizados nas últimas 24h — o maior volume de contribuições observedo no período. A release nightly `v0.2.8-nightly.20260520.639b3270` marca o progresso contínuo da branch `main`. A comunidade está particularmente focada em **estabilidade e segurança**: pelo menos 3 PRs abordam correções de segurança (CSRF, path traversal, TLS), enquanto outros atacam bugs críticos como o crash loop por PID stalo e autenticação com chaves válidas. O pipeline de features continua ativo com 16 PRs abertos, incluindo suporte a streaming HTTP, mídia no message tool e integração com GPT4Free.

---

## 2. Lançamentos

### 🌙 Nightly Build — v0.2.8-nightly.20260520.639b3270

| Campo | Detalhe |
|---|---|
| **Canal** | nightly |
| **Release** | https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260520.639b3270 |
| **Comparação** | https://github.com/sipeed/picoclaw/compare/v0.2.8...main |

**Notas:**
- Este é um **build automatizado** e pode ser instável. Uso em produção desaconselhado.
- Reflete o estado atual da branch `main` com todas as contribuições mais recentes.
- Nenhum changelog formal detalhado foi publicado para esta versão específica.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados nas Últimas 24h (11 total)

| PR | Título | Impacto |
|---|---|---|
| [#2891](https://github.com/sipeed/picoclaw/pull/2891) | feat: add reset to factory defaults | ✅ **Feature de recuperação** — backup de config, criação de config default, preservação de credenciais |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | feat(tools): port update_plan tool | ✅ Ferramenta nativa para progress updates estruturados multi-step |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | feat(providers): add image generation tool | ✅ Tool de geração de imagens via provider (desabilitado por default) |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | fix(providers): support OpenAI OAuth for Codex | ✅ Suporte OAuth para Codex e transcrição; streaming preservado |
| [#2725](https://github.com/sipeed/picoclaw/pull/2725) | fix(agent): make MCP initialization failure non-fatal | ✅ Corrige zombie state quando todos os MCP servers falham |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | feat: add get_current_time tool | ✅ Utilidade para agente obter hora/data em múltiplos formatos/timezones |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | fix: enable ChatGPT subscription (OAuth) in picoclaw | ✅ Corrige respostas vazias em ChatGPT Plus via OAuth |

### Destaque: Feature de Reset de Fábrica
O PR [#2891](https://github.com/sipeed/picoclaw/pull/2891) resolve um problema crítico de DX (developer experience): quando configs se tornam incompatíveis entre versões, agora existe um caminho de recuperação robusto que preserva API keys enquanto restaura defaults. Cobre CLI, backend API e interface web.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Status |
|---|---|---|---|---|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | [Feature] Streaming Output for Web Chat | **9** | 0 | OPEN, stale |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | [Feature] Add streaming HTTP request | **7** | 1 | OPEN, stale |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | [Feature] Provide compiled builds with WhatsApp support | **5** | 1 | OPEN, stale |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | [BUG] PicoClaw authentication fails (401) | **3** | 0 | CLOSED |

### Análise dos Temas

**🔥 Streaming é a demanda mais comentada.** A Issue [#1950](https://github.com/sipeed/picoclaw/issues/1950) (9 comentários) requesta streaming output para Web Chat — um recurso que permitiria respostas progressivas em vez de esperar otoken completo. A Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) complementa com request similar para streaming HTTP requests diretamente no backend.

**📱 Suporte a WhatsApp em builds pré-compilados** — Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625) evidencia que usuários em hardware limitado (Raspberry Pi Zero 2) precisam de builds com WhatsApp incluso, mas o default arm64 não inclui.

**⚠️ Bug de autenticação resolvido, mas investigação continua** — A Issue [#2769](https://github.com/sipeed/picoclaw/issues/2769) foi fechada, mas o resumo indica que a causa raiz ainda estava sendo investigada quando foi resolveda (o issue menciona "appears to be caused by...").

---

## 5. Bugs e Estabilidade

### Bugs em Aberto (7 issues)

| Issue | Severidade | Título | Comentários |
|---|---|---|---|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **🔴 Alta** | Singleton PID check crash loop | 5 |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | 🔴 Alta | Auth fails with valid API keys (401) | 3 |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | 🟡 Média | Sandbox bypass via `find /` | relacionado a [#2693](https://github.com/sipeed/picoclaw/pull/2693) |

### Análise Detalhada

**🔴 Bug Crítico: PID check não verifica identidade do processo** — A Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) descreve que o gateway falha ao iniciar quando o PID file contém um PID reutilizado por outro processo (ex: `systemd-resolved`). O singleton check só verifica se existe processo com aquele PID, não se é um picoclaw. **PR relacionado:** [#2813](https://github.com/sipeed/picoclaw/pull/2813) addiciona verificação de identidade antes de bloquear startup.

**🔴 Auth 401 com chaves válidas** — A Issue [#2769](https://github.com/sipeed/picoclaw/issues/2769) afetou múltiplos providers (Groq, OpenRouter, Nvidia), tanto em stable quanto nightly. Problema aparentemente resolvedo mas causa raiz não totalmente documentada.

**🟡 Sandbox bypass** — O PR [#2693](https://github.com/sipeed/picoclaw/pull/2693) ainda está open e endereça fix para bypass via `find /` e `ls /`.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues e PRs dos últimos dias)

| Feature | Issue/PR | Tipo | Prioridade |
|---|---|---|---|
| Streaming Output for Web Chat | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | enhancement | baixa (nice-to-have) |
| Streaming HTTP request config | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | enhancement | não especificada |
| Native GPT4Free (g4f) Support | [#2901](https://github.com/sipeed/picoclaw/issues/2901) | feature | não especificada |
| DeepSeek thinking_level mapping | [#2903](https://github.com/sipeed/picoclaw/issues/2903) | feature | não especificada |
| Media attachments no message tool | [#2855](https://github.com/sipeed/picoclaw/issues/2855) | enhancement | não especificada |
| WhatsApp em builds arm64 | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | enhancement | baixa |

### Features em Desenvolvimento (PRs ativos)

| PR | Feature | Status |
|---|---|---|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Media attachments + Telegram rich delivery | OPEN, linked to #2855 |
| [#2900](https://github.com/sipeed/picoclaw/pull/2900) | CSRF protection + security headers | OPEN |
| [#2899](https://github.com/sipeed/picoclaw/pull/2899) | TLS verification configurável para MQTT | OPEN |

### Tendências de Roadmap Observadas

1. **Streaming-first:** A demanda por streaming (web chat + HTTP) domina as discussões, indicando potencial foco em real-time capabilities.
2. **Provider expansion:** Novas integrações como GPT4Free (#2901) e DeepSeek (#2903) mostram interesse em diversificar backends.
3. **Segurança como prioridade:** Múltiplos PRs de segurança abertos simultaneamente sugere auditoria de segurança em curso.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|---|---|---|
| **Config quebrado entre versões sem recovery** | feature request PR #2891 | 🔴 Alta |
| **Builds arm64 sem WhatsApp** | Issue #2625 (Raspberry Pi Zero 2) | 🟡 Média |
| **Gateway crash por PID stale** | Issue #2720 | 🔴 Alta |
| **Auth 401 com chaves válidas** | Issue #2769 (Groq, OpenRouter, Nvidia) | 🔴 Alta |
| **Agente fica zombie se MCP falha** | PR #2725 | 🟡 Média |
| **MCP server init não-fatal?** | Problema: init falha = gateway inoperante | 🟡 Média |

### Cenários de Uso Emergent

- **Hardware limitado:** Raspberry Pi Zero 2, dispositivos ARM64 com constraints de build
- **Multi-provider:** Usuários combinando Groq, OpenRouter, Nvidia, DeepSeek
- **Homelab/experimental:** Demanda por GPT4Free e opções flexíveis de inference

### Satisfação

- **Positivo:** Comunidade ativa em contributors (PRs de SiYue-ZO, bogdanovich, yangwenjie1231)
- **Negativo:** Issues stale sem resposta (4 issues com tag `[stale]` requerem triagem)
- **Neutro:** Release nightly com build frequente indica progresso, mas sem changelog formal dificulta tracking

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias (requer triagem)

| Issue | Título | Criado | Comentários |
|---|---|---|---|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | 2026-03-24 | 9 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP request config | 2026-04-07 | 7 |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp builds para arm64 | 2026-04-22 | 5 |
| [#2855](https://github.com/sipeed/picoclaw/issues/2855) | Media attachments no message tool | 2026-05-11 | 1 |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | Auth fails (401) | 2026-05-04 | 3 (CLOSED, mas investigação incompleta) |

### PRs em Revisão Cruzada

| PR | Feature | Relacionamento |
|---|---|---|
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | Fix PID identity verification | Resolve #2720 |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Media + Telegram rich delivery | Fecha #2855 |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Message bus backpressure | Parte do improvement-report.md |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop reload stability | Parte do improvement-report.md |

### Recomendações de Triagem

1. **Priorizar** resposta para #1950 e #2404 (high engagement, alinhadas com roadmap streaming)
2. **Avaliar** se #2625 (WhatsApp builds) pode ser automatizado via CI/CD
3. **Documentar** causa raiz do bug de auth #2769 mesmo após close
4. **Revisar** PRs de segurança #2900 e #2899 com urgência (CSRF, TLS config)

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---|---|
| Issues ativas | 8 (7 open, 1 closed) |
| PRs atualizados | 27 (16 open, 11 closed/merged) |
| Nova release | 1 nightly |
| Issues com >5 comentários | 4 |
| PRs de segurança | 2+ |
| PRs vinculados a improvement-report | 2 |

**Saúde Geral:** 🟢 **Bom** — atividade alta, bugs críticos sendo addressed, segurança em foco. Pontos de atenção: triagem de stale issues e melhor comunicação de changelogs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-05-21 |nearai/ironclaw|

---

## 1. Panorama do Dia

O IronClaw mantém **atividade intensa** com 30 issues e 40 PRs atualizados nas últimas 24h, sinalizando alta cadência de desenvolvimento. O esforço central continua sendo a **refatoração Reborn**, com 9 "lanes" paralelas em progresso simultâneo — desde a composição de host runtime até a portabilidade de ferramentas nativas (Shell, GitHub, Google Calendar). A infraestrutura de segurança está sendo reforçada com políticas de runtime e guardas de vazamento de dados, enquanto a interface WebUI avança na composição de gateway v2. Não houve releases hoje, indicando que o time prioriza estabilização antes de.tag.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**  
O projeto encontra-se em fase ativa de desenvolvimento modular — vários PRs de tamanho XL aguardam merge antes de uma próxima versão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Tamanho | Importância |
|---|--------|---------|-------------|
| [#3825](https://github.com/nearai/ironclaw/pull/3825) | Require resolved runtime policy for Reborn live runtime | M | ⬆️ Fail-closed quando política ausente |
| [#3817](https://github.com/nearai/ironclaw/pull/3817) | Port Reborn coding built-ins through v1 modules | XL | ⬆️ Routing de `file.rs`, `glob_tool.rs`, `grep_tool.rs` para Reborn |
| [#3823](https://github.com/nearai/ironclaw/pull/3823) | Wire Reborn skill context source input | M | ⬆️ Adiciona `HostSkillContextSource` em `RebornRuntimeInput` |
| [#3782](https://github.com/nearai/ironclaw/pull/3782) | Add CLI serve handoff | S | ⬆️ Primeiro slice `ironclaw-reborn serve` com flags `--host`/`--port` |
| [#3818](https://github.com/nearai/ironclaw/pull/3818) | Enforce staged credentials for production egress | M | ⬆️ `HostHttpEgressService` rejeita `SecretStoreLease` direto em produção |

### Issues Fechadas Hoje

- [#3800](https://github.com/nearai/ironclaw/issues/3800) — REPL golden path após composition PRs
- [#3612](https://github.com/nearai/ironclaw/issues/3612), [#3627](https://github.com/nearai/ironclaw/issues/3627), [#3628](https://github.com/nearai/ironclaw/issues/3628), [#3629](https://github.com/nearai/ironclaw/issues/3629), [#3630](https://github.com/nearai/ironclaw/issues/3630) — **Conjunto completo do M2 (Inbound Facade) para WebUI Beta**: DTO lifecycle, facade contract tests, error taxonomy, `RebornServices` facade methods

**Resumo:** Avanço significativo na **camada de composição Reborn** — runtime policy, skill context, CLI serve, e facade M2 fechados. Isso desbloqueia desenvolvimento independente do WebUI Beta.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações |
|---|--------|-------------|---------|
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | Reborn: revise and implement binary-E2E test framework plan | 4 | 0 |
| [#3821](https://github.com/nearai/ironclaw/issues/3821) | `Thread::restore_from_messages` drops orphan assistant rows | 0 | 0 |
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | Design: subagent spawn for the Reborn agent loop | 0 | 0 |

### Análise

1. **#3702 (binary-E2E test framework):** Crítico — categorizou 88 arquivos de teste e precisa validar 29 testes de integração do agent loop. Com 4 comentários, há debate ativo sobre a abordagem de paridade Rust. Este é o blocoador para confiança na refatoração Reborn.

2. **#3821 (Thread::restore bug):** Bug silencioso mas potencialmente sério — `restore_from_messages` descarta rows `assistant` órfãos, impedindo injeção de contexto out-of-band. Zero comentários pode indicar descoberta recente.

3. **#3798 (Subagent spawn design):** Design proposto para spawn de subagentes. Sinaliza roadmap de escalabilidade multi-agente no Reborn loop.

### PRs de Destaque (maior complexidade)

- [#3815](https://github.com/nearai/ironclaw/pull/3815) — **WebUI v2 gateway composition** (XL, β) — Composição Reborn-side do WebChat v2 nativo
- [#3761](https://github.com/nearai/ironclaw/pull/3761) — **EventStreamManager slice** (XL) — Transport-neutral stream manager com projection replay
- [#3590](https://github.com/nearai/ironclaw/pull/3590) — **Telegram v2 inbound tracer** (XL, DB Migration) — Webhook → ledger → binding

---

## 5. Bugs e Estabilidade

### Regressões Reportadas

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#3734](https://github.com/nearai/ironclaw/issues/3734) | **P1** | v0.28.2 regression: provider config missing API Key e Fetch available models controls (non-TEE) | ABERTA |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | **P1** | Nightly E2E failed (Commit f1a8664) | ABERTA |
| [#3821](https://github.com/nearai/ironclaw/issues/3821) | **P2 (?)** | `Thread::restore_from_messages` drops orphan assistant rows | ABERTA |

### Análise

- **#3734** afeta fluxo de configuração de inference provider em produção. Working: v0.28.1. Broken: v0.28.2. Regressão clara.
- **#3447** — E2E nightly continua falhando. Impacta confiança na base.
- **#3821** — Bug de integridade de dados em `restore_from_messages`. Requer investigação urgente.

**Métricas de Estabilidade:** 2 issues de regressão/bug abertas + 1 falha CI, indicando necessidade de atenção à qualidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progresso

| # | Descrição | Módulo | Sinais de Prioridade |
|---|-----------|--------|----------------------|
| [#3803](https://github.com/nearai/ironclaw/issues/3803) | Lane 3: secrets/egress substrate wiring | M4-host-kernel | P0 implícito |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | Add Approval/Auth interaction services | M4-host-kernel | suggested_P0 |
| [#3580](https://github.com/nearai/ironclaw/issues/3580) | Port WebUI to native Reborn surface | M1-webui-product | suggested_P0 |
| [#3811](https://github.com/nearai/ironclaw/issues/3811) | Wire product auth service seam (Step 2) | M4-host-kernel | Blocoador |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | Add EventStreamManager for durable projection fanout | M5-events-streaming | suggested_P0 |
| [#3829](https://github.com/nearai/ironclaw/issues/3829) | Lane 9: Google Calendar + Gmail (extension-v2) | — | Capability path |
| [#3805](https://github.com/nearai/ironclaw/issues/3805) | Lane 5: Notion MCP capability | — | MCP path |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) | Lane 6: GitHub WASM capability | — | WASM path |
| [#3796](https://github.com/nearai/ironclaw/issues/3796) | Tenant-scoped groups e project ACLs | — | Multi-tenancy |
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | IronHub tool/skill install (CLI + agent) | — | XL PR ativo |

### Sinais de Roadmap

- **Extensibilidade:** Notion (MCP), GitHub (WASM), Google Suite (Calendar/Gmail) indicam estratégia de capability catalog diversificado.
- **Multi-tenancy:** #3796 (tenant-scoped groups/ACLs) sugere fase avançada de enterprise readiness.
- **Subagents:** #3798 (design) evidencia exploração de arquitetura multi-agente.
- **IronHub:** #3737 em XL mostra investimento em marketplace de ferramentas.

---

## 7. Resumo de Feedback dos Usuários

### Issues com Contexto de Uso Real

| # | Problema | Impacto |
|---|-----------|---------|
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Rotinas enviam notificações para conversa isolada, não no thread do usuário (ex: Telegram) | UX fragmentada — usuário perde contexto |
| [#3734](https://github.com/nearai/ironclaw/issues/3734) | v0.28.2 quebra Settings → Inference provider em non-TEE | Configuração de agentes production-impacted |
| [#3821](https://github.com/nearai/ironclaw/issues/3821) | `restore_from_messages` impede injeção de contexto out-of-band | Desenvolvedores perdem controle de contexto |

### Análise de Sentimento

- **UX:** Dores claras em notificação fragmentada (#1519) e configurações quebradas (#3734).
- **Developer Experience:** Bug em `restore_from_messages` afeta quem tenta injetar contexto customizado.
- **Satisfação implícita:** Alta atividade de contributors sugere engajamento, mas regressão v0.28.2 é indicador negativo.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Idade | Status | Prioridade |
|---|--------|--------|-------|--------|------------|
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Routine notifications lack context | 2026-03-21 | ~60 dias | ABERTA | enhancement |
| [#3290](https://github.com/nearai/ironclaw/issues/3290) | Migrate missions, jobs, legacy routine surfaces | 2026-05-06 | ~15 dias | ABERTA | suggested_P2 |
| [#3804](https://github.com/nearai/ironclaw/issues/3804) | Lane 4: Native Memory capability | 2026-05-19 | ~2 dias | ABERTA | — |
| [#3821](https://github.com/nearai/ironclaw/issues/3821) | Thread::restore orphan rows bug | 2026-05-20 | ~1 dia | ABERTA | Bug |

### PRs Grandes Aguardando Merge

| # | Título | Tamanho | Risco | Idade |
|---|--------|---------|-------|-------|
| [#3815](https://github.com/nearai/ironclaw/pull/3815) | WebUI v2 gateway composition | XL | low | ~1 dia |
| [#3590](https://github.com/nearai/ironclaw/pull/3590) | Telegram v2 inbound tracer | XL | medium | ~8 dias |
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | IronHub install tools/skills | XL | medium | ~4 dias |
| [#3761](https://github.com/nearai/ironclaw/pull/3761) | EventStreamManager slice | XL | medium | ~3 dias |
| [#3816](https://github.com/nearai/ironclaw/pull/3816) | Port shell to Reborn built-ins | XL | low | ~1 dia |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) | NoExposureGuard service | XL | low | ~3 dias |

### Recomendação de Prioridade

1. **#3734** — Regressão production. Se não resolver, usuários não conseguem configurar providers.
2. **#3447** — E2E failure recorrente. Impacta CI/confiança.
3. **#3821** — Bug de integridade de dados. Pode causar perda silenciosa de contexto.
4. **#3702** — Framework de testes binary-E2E. Blocoador para validação de Reborn.
5. **XL PRs** — Estão bloqueando composição modular. Merge ordenado acelera feature parity.

---

## Métricas Consolidada (2026-05-21)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 23 |
| Issues fechadas (24h) | 7 |
| PRs abertos (24h) | 27 |
| PRs merged/fechados (24h) | 13 |
| Releases | 0 |
| Bugs críticos abertos | 2 (regressão + E2E) |
| PRs XL pendentes | 6 |
| Lanes Reborn ativas | 9 |
| Módulos M1-M5 em progresso | M1, M2, M3, M4, M5 |

**Veredicto de Saúde:** O projeto está em **modo de refatoração acelerada**. Atividade alta, mas a regressão v0.28.2 e falhas E2E são bandeiras vermelhas. A composition do Reborn está convergindo (M2 facade fechado), mas 6 PRs XL esperando merge indicam gargalo de review. Atenção à qualidade de releases recomendada antes de tag v0.29.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-05-21. Para mais detalhes, visite [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-21

---

## 1. Panorama do Dia

O CoPaw (QwenPaw) apresenta um dia de **alta atividade**, com 38 issues e 37 PRs atualizados nas últimas 24h — um ritmo de desenvolvimento intenso. A release **v1.1.8.post1** acabou de ser lançada, trazendo a adição do provedor OpenCode Go e ajustes pontuais. A comunidade demonstra engajamento significativo, com issues de bugs críticos (WeChat cron,桌宠 crashes, regressão de AGENTS.md) coexistindo com pedidos de features estratégicas como roteamento multimodal gratuito e modo coding integrado. O estado geral indica um projeto em evolução acelerada, com pontos de atenção em estabilidade de canais (WeChat, 飞书) e regressões de funcionalidades principais.

---

## 2. Lançamentos

### v1.1.8.post1
**Link:** [Release v1.1.8.post1](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.8.post1)

**Mudanças registradas:**
- **docs(install):** Adição do diretório de backup nas instruções de instalação ([#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534))
- **feat(provider):** Adição do provedor OpenCode Go via `meta.base_url_options`, compartilhando a infraestrutura com OpenCode Zen ([#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536))

**Breaking Changes:** Nenhuma identificada nesta release pontual.

**Notas de migração:**
- A adição do OpenCode Go não afeta configurações existentes. Usuários que desejam utilizar OpenCode Go devem selecionar o endpoint apropriado nas configurações do provider.

---

## 3. Progresso do Projeto

### PRs重要merged/fechados nas últimas 24h

| PR | Título | Impacto |
|---|---|---|
| [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | feat(provider): add OpenCode Go into opencode | Adiciona 12 modelos OpenCode Go ao provider existente |
| [#2862](https://github.com/agentscope-ai/QwenPaw/pull/2862) | feat(channels): add streaming typewriter card for Feishu | Implementa efeito typewriter em tempo real para cards da 飞书 |
| [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) | fix(qwenpaw-pet): Windows compatibility, pet lifecycle UX | Correções críticas de compatibilidade Windows + experiência do桌宠 |
| [#4563](https://github.com/agentscope-ai/QwenPaw/pull/4563) | fix(backup): Remove backup host gate | Restaura fluxo normal de auth para `/api/backups`, corrige deploys Docker bridge |
| [#4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) | fix(console): chatSession | Corrige infinite loop no session loader |
| [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288) | fix(console): improve assistant file previews | Normaliza preview de arquivos e amplia imagens em bubbles |
| [#4298](https://github.com/agentscope-ai/QwenPaw/pull/4298) | fix(desktop): open file links externally | Permite abrir links file:// no handler padrão do sistema |

**Destaque:** A correção do桌宠 em Windows ([#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564)) resolve múltiplos crashes reportados (issues [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541), [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575)). O PR [#2862](https://github.com/agentscope-ai/QwenPaw/pull/2862) sobre streaming cards da飞书 havia estado aberto desde 2026-04-02, indicando complexidade de implementação.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **#4477 — WeChat iLink cron push failure** (13 comentários)
   - **Link:** [Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)
   - **Resumo:** Quando `context_token` expira, iLink retorna `ret=-2`, e o sistema apenas loga e abandona sem retry. Imagens/arquivos falham silenciosamente.
   - **Análise:** Bug de resiliência de conexão. A comunidade identifica ausência de retry logic e falta de logging para falhas de mídia.

2. **#4496 — AGENTS.md carrega template padrão após upgrade para 1.1.7** (13 comentários)
   - **Link:** [Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4496)
   - **Resumo:** Após upgrade para 1.1.7, o sistema carrega o template built-in de AGENTS.md ao invés do arquivo real no workspace.
   - **Análise:** **Regressão crítica** introduzida na 1.1.7. Afeta configuração de system prompts personalizados, impacting fluxos de produção.

3. **#4559 — Performance degrada com 40+ agents** (7 comentários)
   - **Link:** [Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)
   - **Resumo:** Interface fica perceptivelmente lenta com muitos agentes ativos.
   - **Análise:** Escalabilidade do console é uma preocupação crescente conforme usuários expandem uso.

4. **#4539 — Roteamento multimodal automático gratuito** (3 comentários, 1 reação 👍)
   - **Link:** [Issue #4539](https://github.com/agentscope-ai/QwenPaw/issues/4539)
   - **Resumo:** Pedido para detectar automaticamente imagens/vídeos/voz e rotear para modelos visuais gratuitos sem intervenção do usuário.
   - **Análise:** Feature request estratégico que reduziria fricção significativa na experiência multi-modal.

---

## 5. Bugs e Estabilidade

### Severidade Alta (impacta produção)

| Issue | Descrição | Link |
|---|---|---|
| **#4496** | Regressão: AGENTS.md não carrega arquivo real após upgrade 1.1.7 | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) |
| **#4541** | Pet插件 causa crash no主程序 ao enviar primeira mensagem | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) |
| **#4575** | Pet causa término do processo em Windows | [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575) |
| **#4557** | Troca rápida de sessões causa loop infinito | [#4557](https://github.com/agentscope-ai/QwenPaw/issues/4557) |
| **#4583** | Não é possível restaurar secrets de backup em container | [#4583](https://github.com/agentscope-ai/QwenPaw/issues/4583) |

### Severidade Média

| Issue | Descrição | Link |
|---|---|---|
| #4477 | WeChat cron push falha sem retry | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| #4535 | `/backups` retorna HTTP 403 via localhost | [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) |
| #4528 | Botão de teste de modelo quebra对话飞书 | [#4528](https://github.com/agentscope-ai/QwenPaw/issues/4528) |
| #4543 | API streaming retorna dados incompletos na primeira chamada | [#4543](https://github.com/agentscope-ai/QwenPaw/issues/4543) |
| #4260 | Títulos de arquivos em branco no Console | [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) |

**Nota:** Os crashes do桌宠 (issues #4541 e #4575) foram **corrigidos no PR #4564**, que já foi merged.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| PR | Feature | Relevância Estratégica |
|---|---|---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Suporte Tauri 2.x Desktop App** | Mobilidade e experiência desktop nativa |
| [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) | **Coding Mode** | IDE in-browser integrado ao chat, com Git e file management |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | **Lightweight Goal Mode** | Objetivos persistentes por sessão com comandos `/goal` |
| [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | **Skill Market unificado** | 3 provedores, busca async, pagination |
| [#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) | Suporte `extraSystemPrompt` na API de chat | Injeção de contexto por requisição |
| [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | **Melhorar estabilidade da automação de navegador** | Trocar browser-use por Playwright |

### Features solicitadas pela comunidade

| Issue | Feature Request | Link |
|---|---|---|
| #4539 | Roteamento multimodal automático gratuito (imagem/vídeo/voz) | [#4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) |
| #4441 | Configuração one-click para OpenCode Go | [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) |
| #4463 | Melhorar estimação de tokens usando prompt caching | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) |
| #4582 | Incluir GitHub CLI (gh) no ambiente de instalação | [#4582](https://github.com/agentscope-ai/QwenPaw/issues/4582) |

**Sinais de roadmap:** A direção parece ser (1) **experiência desktop** (Tauri, coding mode), (2) **automação e resiliência** (Playwright, retry logic), e (3) **flexibilidade multi-modelo** (roteamento multimodal, goal mode).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Regressão pós-upgrade (crítica):** Usuários reportam que upgrading para 1.1.7 quebra system prompts customizados via AGENTS.md. Afeta fluxos de produção e configuraões já estabilizadas.

2. **Instabilidade do桌宠/Pet:** Múltiplos reports de crashes ao usar o Pet, especialmente em Windows e na primeira interação. A experiência ainda não é confiável para uso geral.

3. **Problemas de canal WeChat:** O canal iLink apresenta falhas silenciosas em cron jobs e envio de mídia. Usuários em produção enfrentam perda de notificações.

4. **Escalabilidade:** Usuários com 40+ agentes enfrentam lentidão perceptível na UI.

5. **Complexidade de configuração:** Pedidos recorrentes por "one-click setup" para novos provedores (OpenCode Go) e modelos.

### Cenários de Uso Observados

- **Deploy corporativo:** Questões sobre preservação de configurações entre upgrades, deploy em containers/K8s (issue #1740), e restauração de backups.
- **Integração com plataformas:** 飞书 (multiple issues), WeChat (iLink), múltiplos provedores de IA.
- **Automação de navegador:** Tentativas de usar CoPaw como agente de automação, com frustração na estabilidade de conexões CDP.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa ou abertas há tempo

| Issue | Tempo Aberta | Título | Prioridade |
|---|---|---|---|
| [#1740](https://github.com/agentscope-ai/QwenPaw/issues/1740) | ~2 meses | CoPaw K8s deployment | Média |
| [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) | ~1.5 meses | Skill卸载 corrompe skill.json | Média-Alta |
| [#3475](https://github.com/agentscope-ai/QwenPaw/issues/3475) | ~1 mês | MCP com autenticação dinâmica | Média |
| [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) | ~1 semana | Títulos de arquivos em branco no Console | Baixa |
| [#4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) | 3 dias | Sub-agents devem herdar MCP/ACP config global? | Média |

### PRs em revisão há tempo

| PR | Tempo em Review | Título |
|---|---|---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | ~1 mês | Suporte Tauri 2.x desktop app |
| [#4298](https://github.com/agentscope-ai/QwenPaw/pull/4298) | ~1 semana | open file links externally |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 16 | ✅ Saudável |
| PRs abertos | 20 | ✅ Fluxo de contribuição ativo |
| Issues fechadas (24h) | 22 | ✅ Boa taxa de resolução |
| PRs merged/fechados (24h) | 17 | ✅ Entrega consistente |
| Novas releases (7 dias) | 1+ | ✅ Manutenção ativa |
| Bugs críticos abertos | 5 | ⚠️ Atenção — regressão e crashes |
| Features estratégicas em desenvolvimento | 5+ | ✅ Direção clara |

**Veredicto:** CoPaw demonstra vigoroso ritmo de desenvolvimento com alta comunidade de contributors. Os principais riscos são a **regressão de AGENTS.md** (impacta usuários em produção) e a **instabilidade do桌宠/Pet** (embora já corrigida em PR, deve ser validada em release). A plataforma está evoluindo rapidamente para um produto desktop e de automação mais robusto, com features como Coding Mode e Tauri representando investimento estratégico.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-21

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém uma atividade intensa em 21 de maio de 2026, com **31 issues e 50 PRs atualizados nas últimas 24 horas**. A taxa de PRs abertos (47) continua significativamente acima da média de issues, sinalizando um ciclo de desenvolvimento ativo, porém com possível gargalo de revisão. Não houve lançamentos oficiais hoje, e três PRs foram merged/fechados. Os esforços concentram-se na preparação para a v0.8.0, com destaque para múltiplos PRs de deployment (scripts, systemd, gateways) e correções de bugs de alta severidade, incluindo falhas críticas de compatibilidade com DeepSeek-V4, vazamento de tool-calls no Matrix e bugs em memory/namespace. A comunidade demonstra preocupação crescente com a saúde do backlog, evidenciada por issues como #6060 (94 issues + 286 PRs abertos) e RFCs sobre governança.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

O projeto encontra-se em preparação para a versão **v0.8.0**, com branch `integration/v0.8.0` ativa para convergência de changesets bloqueantes:

- **[Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)** — Schema v3 batch breaking field migrations (CLOSED, status: in-progress)
  - **Resumo:** Migração massiva de schema para `CURRENT_SCHEMA_VERSION = 3`, com checklist de merge blocker.
  - **Impacto:** Breaking change confirmado, requiere coordenação de dependentes antes de merge.

- **PRs de preparo para v0.8.0 identificados:**
  - [#6805](https://github.com/zeroclaw-labs/zeroclaw/pull/6805) — Atualização ExecStart do gateway e remoção de flags deprecated (`--host`/`--port`)
  - [#6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804) — Parametrização de user/service template (corrige hardcoded `pi` em deploy-rpi.sh)
  - [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) — Skills management API com toggle e dashboard web

**Nota de migração:** Usuários em deployment boards devem atualizar scripts systemd conforme PRs #6805 e #6804 antes da atualização para v0.8.0.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (3)

| PR | Título | Autor | Impacto |
|----|--------|-------|---------|
| [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) | fix(memory): purge_namespace deletes by namespace, not category | nixosclaw | Corrige DELETE com coluna errada (category → namespace) |
| [#6812](https://github.com/zeroclaw-labs/zeroclaw/pull/6812) | fix(security): detect Groq API keys in leak scanner | Audacity88 | Recupera detector perdido em bulk revert + adiciona padrão `gsk_` |
| [#6811](https://github.com/zeroclaw-labs/zeroclaw/pull/6811) | fix(web): validate local provider models during onboarding | Audacity88 | Bloqueia onboarding se provider inacessível ou sem modelos instalados |

### PRs em Destaque (ativos, alta interação ou risco)

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675) | fix(runtime): add strict tool parsing mode | M | HIGH | OPEN |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans with gen_ai.tool.* | M | MEDIUM | OPEN |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | feat(channels): expose poll-vote/interactive-reply; add Channel::send_choice | L | HIGH | OPEN, needs-author-action |
| [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775) | feat(tools): add file_upload_bundle tool for atomic multi-file uploads | L | HIGH | OPEN |
| [#6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) | fix(ci): unblock pr-title workflow with inline regex | S | HIGH | OPEN |
| [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) | fix(runtime,channels): persist model_switch across turns | XS | HIGH | OPEN |

**Avanços significativos:**
- **Memory namespace:** O bug crítico em `purge_namespace` (#6801) foi corrigido via PR #6777, resolvendo DELETE pela coluna `category` ao invés de `namespace`.
- **Segurança:** Detector de chaves Groq (#6812) recuperado após o bulk revert c3ff635 que havia perdido 153 commits.
- **Observabilidade:** PR #6009 enriquece spans OTel com atributos semânticos `gen_ai.tool.*`, avanço importante para debugging.
- **Channels interativos:** PR #6297 expõe eventos poll-vote e adiciona API `Channel::send_choice` para todos os canais.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Severidade | Tendência |
|---|--------|-------------|-----|------------|-----------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Incompatible with DeepSeek-V4 API format | **11** | **4** | HIGH (S2) | Ativo, in-progress |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow — design | **9** | 0 | HIGH | Aprovado, aguardando extração para docs |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking field migrations | **7** | 0 | HIGH (P1) | Merged/Closed, em progresso |
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | Add support for local CA certificates | **5** | 0 | ENHANCEMENT | Closed |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups no-op for real MCP tools (prefix bug) | **4** | 0 | HIGH (P1) | Accepted |

### Análise dos Temas

**🔴 Compatibilidade DeepSeek-V4 (#6059) — PRIORIDADE MÁXIMA**
- Bug com 11 comentários e 4 thumbs-ups, indicando dor real em produção
- Relacionado ao "thinking mode" da API DeepSeek-V4-Pro/Flash
- Severidade S2, status in-progress
- **Demanda:** Suporte ao novo formato de requisição/respostathinking chain da DeepSeek

**🟡 RFCs em discussão**
- **#6808** — "Work Lanes, Board Automation, and Label Cleanup" (RFC Governance)
  - Proposta para PR lanes leves e issue lanes automáticas no board
  - Objetivo: reduzir trabalho manual de triagem para maintainers
  - Versão: 0.80-beta1, status Proposed
- **#5890** — Multi-agent UX flow (aprovado, aguardando documentação)
  - 7 dias de discussão concluídos, vote por §8.2, dois-terços a favor
  - Pending: extração para `docs/proposals/multi-agent-ux-flow.md`

**🟢 Feature requests com suporte comunitário**
- **#1458** — Suporte a CA certificates locais para providers custom inference (CLOSED)
- **#6807** — Custom Telegram webapi endpoint (0 comentários — novo)

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — workflow bloqueado ou degraded severo)

| # | Título | Severidade | Status | Impacto |
|---|--------|------------|--------|---------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API incompatibility | S2 (HIGH) | In-progress | Thinking mode gera erro em V4-Pro/Flash |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups no-op para MCP tools (prefix bug) | P1 (HIGH) | Accepted | Filtro de tools MCP inoperante + sem deferred_loading |
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | Multiline Heredocs blocked by SecurityPolicy | S1 (CRITICAL) | Accepted | **ZeroClaw não pode usar próprio skill para criar PR** |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | tool_search deferred_loading hangs 120s then auto-denies | P1 (HIGH) | Accepted | MCP deferred_loading quebra silenciosamente |
| [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | Qwen 3.6 tool-call envelopes leak into Matrix replies | S2 (HIGH) | In-progress | Payload interno exposto ao usuário |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | purge_namespace deletes by category (já corrigido em #6777) | S2 (HIGH) | In-progress | Dados deletados pela coluna errada |

### Bugs P2 (Degraded behavior)

| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crashloops when all enabled=false | — | Loop de restart a cada ~2s |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | web_search doesn't work (web_fetch OK) | — | DuckDuckGo API retorna vazio em fresh install |
| [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) | OpenAI hardcoded 120s timeout ignores config | Accepted | `timeout_secs` configurado ignorado |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) | MemoryConfig.rerank_* scaffolded but no consumer | Accepted | Dead code no schema |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) | [agent] context_aware_tools declared but unread | Accepted | Dead code — feature promise não implementada |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover only handles SKILL.toml, not manifest.toml | — | Skills bundled com manifest.toml ignorados |

### Bugs CI/Build

| # | Título | Severidade | Status |
|---|--------|------------|--------|
| [#6158](https://github.com/zeroclaw-labs/zeroclaw/issues/6158) | zeroclaw-channels does not compile with --no-default-features | S2 (MEDIUM) | Accepted |
| [#6813](https://github.com/zeroclaw-labs/zeroclaw/issues/6813) | parallel-dispatch test has brittle timing threshold | S2 (LOW) | OPEN |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: track 153 commits lost in bulk revert c3ff635 | HIGH | In-progress |

**Alerta de Estabilidade:** O bug S1 em [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) (SecurityPolicy bloqueando multiline heredocs) é particularmente crítico — impede o próprio ZeroClaw de usar seu skill prescrito para criar PRs via `gh pr create` com heredoc. Considerar hotfix priorizado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| # | Título | Tipo | Prioridade | Status |
|---|--------|------|------------|--------|
| [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | Telegram custom webapi endpoint | enhancement | — | OPEN |
| [#6810](https://github.com/zeroclaw-labs/zeroclaw/issues/6810) | Add user-facing feature and support matrix | docs | P3 | OPEN |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | RFC/Governance | — | Proposed |

### Features em Progresso (Alta Prioridade)

| # | Título | Risco | Prioridade | Descrição |
|---|--------|-------|------------|-----------|
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | Multi-agent runtime: per-alias workspaces, permissions, shared resources | HIGH | P1 | Isolamento total por alias (workspace, memory, identity) |
| [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | Multi-agent v1 — tracker | HIGH | P1 | Coordenação de issues/PRs multi-agent |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | V3 env-var override mechanism | HIGH | P2 | Substitui `apply_env_overrides()` removido em ef0b0b7f0 |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | Typed-family split for model/TTS providers | MEDIUM | P2 | Shape canônico por family, elimina aliases |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Prefer lighter ZeroClaw (remove ad-hoc integrations) | HIGH | P2 | Substituir código dedicado (gws-cli, jira, github) por skills genericos |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | Channels: poll-vote / interactive-reply + Channel::send_choice | HIGH | P2 | API uniforme para respostas discretas em todos os canais |

### Sinais de Roadmap (Community-Driven)

- **Modularidade (#6165):** Desejo claro de codebase mais leve, removendo integrações ad-hoc em favor de skills genéricos
- **Feature Matrix (#681

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*