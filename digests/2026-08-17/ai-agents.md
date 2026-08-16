# Resumo diário do ecossistema de agentes de IA 2026-08-17

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-16 20:14 UTC

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

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-08-17
**Projetos analisados:** NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta atividade geral** em 2026-08-17, com 5 de 6 projetos demonstrando desenvolvimento intenso. Os projetos estão convergindo para desafios comuns: gerenciamento de janela de contexto/token, estabilidade multiplataforma e otimização de custos. Observa-se polarização entre projetos em **fase de crescimento acelerado** (NanoBot com 500 PRs abertos) e projetos em **consolidação de maturidade** (Hermes Agent v0.20.2). Segurança emerge como tema transversal — PicoClaw addressing SSRF, ZeroClaw com approval cards, NanoBot com PromptGuard. A fragmentação de features (MCP, multi-canal, streaming) indica mercado ainda em maturação, sem padrão dominante.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Saúde |
|---------|--------------|-----------|----------|---------------|-------|
| **NanoBot** | 15 | 500 | 0 | 1 (loop infinito) | 🟡 Sobrecarga |
| **Hermes Agent** | 50 | 50 | 1 (v0.20.2) | 1 P0 + 5 P1 | 🟢 Estável |
| **PicoClaw** | 2 | 4 | 0 | 3 (SSRF) | 🟡 Atenção |
| **IronClaw** | 1 | 10 | 0 | 1 (QA harness) | 🟢 Saudável |
| **CoPaw** | 8 | 9 | 0 | 1 (crash v2.1.0) | 🟡 Crítico |
| **ZeroClaw** | 50 | 50 | 0 | 5 P1 | 🟡 Complexo |

**Observação:** NanoBot apresenta volume anômalo de 500 PRs atualizados — gargalo de review severo com apenas 1 merge em 24h. Hermes Agent e ZeroClaw mantêm ritmo saudável de ~50 atualizações diárias.

---

## 3. Posicionamento do Projeto Principal

Para fins desta análise, consideraremos **NanoBot** e **Hermes Agent** como projetos principais por volume e maturidade:

### NanoBot — Escalabilidade com Desafios

| Dimensão | Posição | Diferencial |
|----------|---------|-------------|
| **Volume de comunidade** | Líder absoluto (500 PRs, 15 issues) | Escala 10x maior que pares |
| **Arquitetura técnica** | Gateway Python + TypeScript TUI | Separação clara de concerns |
| **Maturidade** | 🟡 Estagnado (acúmulo de PRs desde fevereiro) | — |
| **Segurança** | ✅ PromptGuard + SSRF fix | Maturidade em safety |
| **Eficiência** | 🔴 Crítico (token burn massivo) | Debilidade em custo |

**Vantagem competitiva:** Ecoossistema mais ativo com 8 PRs de contribuidores de primeira viagem (CoPaw) vs. PRs backlogged há 6 meses (NanoBot).

### Hermes Agent — Maturidade com Estabilidade

| Dimensão | Posição | Diferencial |
|----------|---------|-------------|
| **Ciclo de release** | ✅ Maduro (v0.20.2 com 397 PRs consolidados) | Confiabilidade |
| **Multiplataforma** | 🔴 Crítico (Windows/macOS) | Gap significativo |
| **Desktop app** | 🟢 Líder (Bot Mode, crews, i18n) | Foco em UX |
| **Estabilidade** | 🟢 Processos estabelecidos | Test harness funcional |

**Vantagem competitiva:** Release cycle disciplinado com zero breaking changes, contrastando com regressions de outros projetos.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gerenciamento de Contexto/Token

| Projeto | Problema | Status |
|---------|----------|--------|
| **NanoBot** | Tiktoken subestima consumo real; consolidação nunca dispara (#5402, #5377) | 🟡 Aberto |
| **CoPaw** | Proposta de memória externa com 97.5% redução de tokens (#7003) | 🟡 Discussão |
| **Hermes Agent** | Exclude stale thinking from token estimate (#86055) | 🔵 PR aberto |
| **ZeroClaw** | Schema-validated memory consolidation (#6998) | 🔵 RFC Accepted |

**Ação recomendada:** NanoBot deve priorizar #5402 antes de acumular mais dívida técnica em contexto.

### 4.2 Segurança — Tema Transversal

| Projeto | Vulnerabilidade | Severidade |
|---------|-----------------|------------|
| **NanoBot** | Bypass allowlist exec (#5305) | ✅ Fechada |
| **PicoClaw** | SSRF em 3 canais (WeChat, WeCom, multi) | 🔴 Pendente |
| **Hermes Agent** | Sandbox iframe popup (GHSA-9f4c-93c8-jc8g) | 🟠 PR aberto |
| **ZeroClaw** | Approval cards sem posição (#9655) | 🟠 S1 |

### 4.3 Multi-Canal e Integrações

Todos os projetos abordam multi-canal com abordagens distintas:
- **ZeroClaw:** Teams (Bot Framework), Telegram, WhatsApp
- **NanoBot:** Discord, Telegram, Matrix, WebUI
- **PicoClaw:** Telegram, WeChat, WeCom, LINE, Slack, QQ, Discord
- **Hermes Agent:** Desktop-first

**PicoClaw** demonstra amplitude de canais mais diversificada.

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes Agent | CoPaw | ZeroClaw | PicoClaw | IronClaw |
|----------|---------|--------------|-------|----------|----------|----------|
| **Foco primário** | Agentes CLI | Desktop app | Console/Agents | Enterprise | Canais | Coding automations |
| **Público-alvo** | Desenvolvedores | Usuários finais | Teams | Enterprise | Multi-plataforma | Dev teams |
| **Arquitetura** | Gateway Python | Multi-threaded desktop | Modular | Transport-agnostic | Channel-driven | WASM-based |
| **Diferecial** | MCP tools rico | UX desktop | Qwen integration | RFC-driven | Canal breadth | Slack-first |
| **Custo** | 🔴 Problema aberto | 🟢 Não reportado | 🟡 Redução proposta | 🟢 Não reportado | 🟢 Não reportado | 🟢 Não reportado |

### Estratégia de Posicionamento

| Projeto | Estratégia | Riscos |
|---------|------------|--------|
| **NanoBot** | Escala via comunidade massiva | Gargalo de review; dívida técnica |
| **Hermes Agent** | Qualidade via release cycle | Estabilidade Windows/macOS |
| **CoPaw** | Diferenciação via Qwen | Bug crash v2.1.0 |
| **ZeroClaw** | Enterprise via RFC | Complexidade (12+ RFCs ativas) |
| **IronClaw** | Niche via Slack | Dependência de plataforma única |

---

## 6. Tração e Maturidade da Comunidade

### Iteração Rápida

| Projeto | Velocidade | Indicador |
|---------|------------|------------|
| **CoPaw** | 🚀 Mais rápido | 78% PRs de novos contribuidores em 24h |
| **ZeroClaw** | 🚀 Alto | 50 issues + 50 PRs, RFC-driven |
| **IronClaw** | 🚀 Alto | 10 PRs, foco em automações |

### Consolidação de Qualidade

| Projeto | Madurez | Indicador |
|---------|---------|------------|
| **Hermes Agent** | ✅ Consolidando | v0.20.2 com 397 PRs; zero breaking changes |
| **NanoBot** | ⚠️ Estagnado | 6 meses de PRs backlogged |
| **PicoClaw** | 🟡 Moderada | SSRF fixes pendentes há ~50 dias |

### Indicadores de Saúde da Comunidade

| Projeto | Engagement | Depth | Bottleneck |
|---------|------------|-------|------------|
| **NanoBot** | 🔴 Volume | 🟢 Técnico (#2463: 15 comentários) | Review capacity |
| **Hermes Agent** | 🟢 Equilibrado | 🟢 P0/P1 triaged | Windows/macOS |
| **ZeroClaw** | 🟢 Alto | 🟢 RFCs com 14-23 comentários | Decisões pendentes |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Rich UI/Desktop** | Bot Mode (#87886), crews (#83584), TypeScript TUI (#5406) | Hermes, NanoBot |
| **Memory/context optimization** | 97.5% tokens (#7003), keep_history (#85611) | CoPaw, Hermes |
| **Multi-canal maturity** | Teams, WhatsApp, Telegram, Discord | ZeroClaw, NanoBot, PicoClaw |
| **Security hardening** | SSRF, allowlist bypass, approval cards | PicoClaw, NanoBot, ZeroClaw |
| **MCP ecosystem** | OAuth 2.1 (#3302), schema visibility (#5298) | PicoClaw, NanoBot |

### 7.2 Tendências Emergentes

| Tendência | Sinal | Projeto |
|-----------|-------|---------|
| **Agent swarms** | zeroclaw swarm RFC (#10025) | ZeroClaw |
| **On-device whisper** | Loopback dictation (#86706) | Hermes |
| **Per-agent controls** | reasoning_effort override (#7062) | CoPaw |
| **OAuth 2.1 para MCP** | #3302 | PicoClaw |

### 7.3 Recomendações Estratégicas

**Para projetos em crescimento (NanoBot, CoPaw):**
1. Priorizar triagem de PRs stale — backlog >6 meses impacta contribuidor
2. Resolver problemas de token antes de escalar uso

**Para projetos maduros (Hermes, ZeroClaw):**
1. Resolver estabilidade multiplataforma (P0/P1 Windows/macOS)
2. Fechar RFCs pendentes para desbloquear features dependentes

**Para projetos de nicho (PicoClaw, IronClaw):**
1. Priorizar security fixes (SSRF pendentes há 50+ dias)
2. Definir posicionamento claro vs. competidores maiores

---

*Relatório gerado em 2026-08-17. Dados baseados em resumos de atividade do GitHub de cada projeto.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-17

## 1. Panorama do dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 17/08/2026, com 15 issues atualizadas nas últimas 24h e um volume massivo de 500 PRs atualizados (499 abertos, apenas 1 mergeado/fechado). O projeto demonstra uma comunidade ativa, porém enfrenta um **acúmulo significativo de PRs em conflito** que aguardam resolução — muitos datados de fevereiro de 2026. Não houve novas releases hoje, e as issues abertas mais议论adas giram em torno de problemas arquiteturais de persistência de prompts, consumo excessivo de tokens e bugs de consolidação. A situação de segurança identificada na issue #5305 (bypass de allowlist no `exec`) foi fechada, indicando resolução em curso.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release disponível continua sendo a versão anterior. O PR #5406 (TypeScript Terminal UI) substituiu o PR #4329, que foi incorretamente marcado como merged e subsequentemente restaurado ao estado anterior, demonstrando que o fluxo de release ainda carece de validações automatizadas mais robustas.

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | feat(cli): add native TypeScript terminal UI | **Superseded** — marcado erroneamente como merged; cabeça do branch brevemente apareceu em `main`, mas foi restaurado imediatamente. O PR substituto [#5406](https://github.com/HKUDS/nanobot/pull/5406) carrega o mesmo histórico de commits com correção de testes cross-terminal. |

### PRs relevantes abertas com atividade recente

| PR | Título | Destaque |
|----|--------|----------|
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | feat(cli): add native TypeScript terminal UI | Substitui #4329; reintroduz UI de terminal nativa em TypeScript/OpenTUI preservando gateway Python como única implementação de loop, sessões, tools e políticas de segurança. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): add session collaboration via mentions | Adiciona sessões colaborativas no WebUI com menções, cores de identidade estáveis e priorização de peers na aba atual. |
| [#1306](https://github.com/HKUDS/nanobot/pull/1306) | Add reusable voice/audio support for Discord and TTS | Adiciona tool `speak`, provider path TTS, transcrição de áudio inbound e replies OGG outbound para Discord. |
| [#1205](https://github.com/HKUDS/nanobot/pull/1205) | feat(agent): stabilize KV cache reuse with batch prompt rollover | Experimenta reúso de KV cache com rollover de prompts em batch; métricas mostram redução de `cached_tokens` e otimização de custo. |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | Add PromptGuard for prompt injection detection | Adiciona módulo `nanobot.safety` com detecção de injeções em categorias: overrides de system prompt, confusão de roles e JSON injection em tool calls. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Reações | Status |
|---|--------|-------------|---------|--------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Architectural issue: prompt prefix preservation | 15 | 0 | 🟡 OPEN |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Logs about token consumption (too many tokens burned) | 14 | 0 | 🟡 OPEN |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Regression: upgrade to 0.1.4post5 breaks gemini-3-flash-preview | 9 | 0 | ✅ CLOSED |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for `<tool_call> <function=complete_goal>` | 6 | 👍1 | 🟡 OPEN |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) | Dream should update existing workspace skills instead of creating duplicates | 3 | 👍1 | 🟡 OPEN |

### Análise das demandas principais

**🔴 Problema arquitetural crítico (#2463):** A issue #2463 é a mais议论ada e representa um **conflito fundamental** — o NanoBot persiste histórico de conversa de forma diferente do prompt prefix enviado ao modelo. Isso viola a expectativa de reprodutibilidade e pode causar comportamento inconsistente em diferentes sessões, especialmente com providers como OpenAI Pro. Este é um tema que requer decisão arquitetural antes de avançar em outras features.

**🟡 Consumo excessivo de tokens (#5266):** Usuários relatam que o nanobot consome "milhões de tokens em 2 horas sem atividade perceptível." A demanda por logging detalhado de token consumption (#5266) está alinhada com a issue #5402, que reporta que a estimação via tiktoken consistentemente subestima o consumo real da API — fazendo o sistema de consolidação nunca disparar. Juntos, esses problemas indicam que o **gerenciamento de janela de contexto precisa de atenção imediata**.

---

## 5. Bugs e Estabilidade

### Por severidade

#### 🔴 Alta severidade (crashes, loops infinitos, regressões)

| # | Título | Descrição | Status |
|---|--------|-----------|--------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for `complete_goal` | Gateway faz parsing do parâmetro `recap` como string bruta ao invés de objeto JSON; tool espera JSON. Bug introduzido em atualização recente. | 🟡 OPEN |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Regression: 0.1.4post5 breaks gemini-3-flash-preview | Quebra de funcionalidade com upgrade; afeta usuários de provedores OpenAI-compatíveis via proxy (Ollama). | ✅ CLOSED |

#### 🟠 Média severidade (comportamento incorreto, degradação)

| # | Título | Descrição |
|---|--------|-----------|
| [#5402](https://github.com/HKUDS/nanobot/issues/5402) | Token consolidation never triggers | Tiktoken consistentemente subestima contagem real de tokens; consolidação nunca dispara mesmo quando deveria. |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation truncates archive input but advances past full batch | Consolidator.truncate_to_token_budget remove mensagens, mas callers avançam `last_consolidated` além do batch original. |
| [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron scheduler dies after single persistence failure | Scheduler morre permanentemente após falha de persistência (disco cheio, permissão, arquivo bloqueado) porque `_arm_timer()` está fora do `try/finally`. |

#### 🟡 Baixa severidade (bugs com workarounds)

| # | Título | Descrição |
|---|--------|-----------|
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) | Security: `exec.allowPatterns` bypass enables chained shell commands | **⚠️ SECURITY FIXED** — Bypass de allowlist permitia execução de segmentos shell adicionais não autorizados via API OpenAI-compatível. Issue fechada, indicando patch em curso. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements com maior prioridade percebida

| # | Título | Motivação | Relevância estratégica |
|---|--------|-----------|------------------------|
| [#5404](https://github.com/HKUDS/nanobot/issues/5404) | Add `disable-model-invocation` para skills | Usuários querem habilidades "user-only" que o modelo não pode invocar automaticamente (padrão em PI, Cursor, Claude Code). | **Alta** — feature de customização essencial para workflows profissionais. |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Add MCP Apps host support to WebUI | Suporte a `io.modelcontextprotocol/ui` para renderizar artefatos MCP como UI interativa no WebUI. | **Alta** — expande casos de uso do WebUI para aplicações Rich UI. |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Budget model-visible MCP schemas | Otimizar custo de contexto com grandes conjuntos MCP工具 — schema visibility por budget/modelo. | **Média-Alta** — endereça escalabilidade com ecossistema MCP crescente. |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Telegram: stickers and agent-initiated reactions | Adicionar suporte a stickers e reactions iniciadas pelo agente no Telegram. | **Média** — melhoria de UX para canal popular. |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) | Dream should update existing skills instead of duplicating | Evitar criação de skills duplicadas a cada run do Dream; consolidar melhorias incrementalmente. | **Média** — impacto direto na experiência de uso do Dream agent. |

### Sinais de tendência no roadmap

1. **Consolidação e otimização de tokens**: A convergência de #5266, #5402 e #5377 indica que o gerenciamento de janela de contexto é prioridade técnica.
2. **Rich UI e multi-canal**: #5251 (MCP Apps), #5358 (collab WebUI), #5406 (TypeScript TUI) mostram foco em interfaces mais ricas.
3. **Subagent ecosystem madurando**: PRs #1032, #1024, #1015 representam uma linha de desenvolvimento de subagentes com controle e perfis customizáveis.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Categoria | Frequência | Exemplos |
|-----------|------------|----------|
| **Custo/eficiência** | 🔴 Alta | Issues #5266 e #5402 — usuários frustrados com consumo masivo de tokens sem visibilidade. |
| **Estabilidade/ regressions** | 🟠 Média | #2185 — upgrade quebra provedores OpenAI-compatíveis; #4864 — loops infinitos em produção. |
| **Customização de skills** | 🟡 Moderada | #4467 e #5404 — desejo de controle granular sobre quando o modelo pode ou não invocar skills. |
| **Segurança** | 🟠 Média | #5305 (já resolvida) — bypass de allowlist em exec tool demonstra risco em configurações permissivas. |

### Cenários de uso destacados

- **Agentes de produção**: Usuários executam nanobot por longos períodos com integração a provedores via proxy (Ollama, OpenAI-compatible APIs), exigindo estabilidade em upgrades.
- **Workflows com MCP**: Crescimento do ecossistema MCP tools gera demanda por otimização de schemas e suporte a UI components (#5251, #5298).
- **Multi-canal**: Telegram, Discord, Matrix e WebUI exigem tratamento consistente de threads, replies e contexto.

### Indicadores de satisfação

- **Atividade crescente**: 500 PRs atualizados em 24h demonstra comunidade ativa.
- **Engajamento técnico**: Issues com 15+ comentários (#2463, #5266) indicam profundidade técnica nas discussões.
- **Pontos de fricção recorrentes**: Acúmulo de PRs em conflito desde fevereiro (#1306 a #1015) sugere gargalo de review/merge.

---

## 8. Backlog que Merece Atenção

### PRs em conflito há >6 meses (prioridade de triagem)

| # | Título | Criado | Relevância |
|---|--------|--------|------------|
| [#1306](https://github.com/HKUDS/nanobot/pull/1306) | Voice/audio support for Discord + TTS | 2026-02-28 | Feature significativa sem update há 6 meses. |
| [#1205](https://github.com/HKUDS/nanobot/pull/1205) | KV cache reuse with batch prompt rollover | 2026-02-25 | Otimização de custo com dados experimentais — precisa review ou rejeição justificada. |
| [#1195](https://github.com/HKUDS/nanobot/pull/1195) | Telegram forum threads | 2026-02-25 | Feature aguardando há 6 meses sem atividade. |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | PromptGuard for prompt injection detection | 2026-02-25 | Módulo de segurança estagnado — risco de obsolescência. |
| [#1147](https://github.com/HKUDS/nanobot/pull/1147) | Prefix group chat messages on Telegram | 2026-02-24 | Bug UX simples sem progressão. |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | Preserve unknown config keys | 2026-02-23 | Fix de data loss — baixa complexidade, alta utilidade. |
| [#1072](https://github.com/HKUDS/nanobot/pull/1072) | Catch CancelledError in tool execution | 2026-02-23 | Prevenção de crashes em MCP calls canceladas. |
| [#1066](https://github.com/HKUDS/nanobot/pull/1066) | GitHub workflow for releases | 2026-02-23 | CI/CD improvement estagnado. |

### Ação recomendada

O projeto apresenta **>400 PRs abertos**, muitos marcados com `[conflict]` e sem atividade significativa há meses. Recomenda-se:

1. **Triagem de PRs stale**: Classificar como "needs-author-action", "blocked-on-review" ou "declined" para limpar backlog.
2. **Resolução do gargalo de review**: Com apenas 1 merge em 24h vs. 499 PRs abertos, a capacidade de merge é o limitante principal.
3. **Priorizar issue #2463**: O problema arquitetural de prompt prefix precisa de decisão técnica antes que mais código dependa do comportamento atual.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-17. Todas as URLs referenciam `https://github.com/HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-17

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade** em 17 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A release **v0.20.2** foi publicada como patch estável consolidador de ~397 PRs desde a v0.20.1, sinalizando maturidade no ciclo de desenvolvimento. A plataforma enfrenta desafios persistentes de **estabilidade multiplataforma** (Windows e macOS) e **sessões**, com issues P0/P1 críticas demandando atenção imediata. A comunidade mantém engajamento elevado, especialmente em tópicos de desktop, integrações de plataforma e UX.

---

## 2. Lançamentos

### ✅ v2026.8.16 — Hermes Agent v0.20.2

| Informação | Detalhe |
|------------|---------|
| **Data** | 16 de agosto de 2026 |
| **Tag** | v2026.8.16 |
| **Tipo** | Patch release |
| **Escopo** | Consolidação de ~397 PRs mergeados desde v0.20.1 |

**Sobre esta release:**
- Rollup estável para consumidores downstream (imagens Docker, deploys hospedados, instalações fresh)
- **Nenhuma breaking change** documentada
- **Notas de migração:** Nenhuma necessária — release drop-in para v0.20.1

> 📦 [Release v2026.8.16](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (3)

| PR | Descrição | Impacto | Prioridade |
|----|-----------|---------|------------|
| [#87923](https://github.com/NousResearch/hermes-agent/pull/87923) | **fix(computer-use): auto-repair driver** — Reparo automático de drivers cua-driver que falham o runtime contract | Crítico para usabilidade do Computer Use | P2 |
| [#87918](https://github.com/NousResearch/hermes-agent/pull/87918) | **Duplicate**: profile-routed BasePlatformAdapter — fechado como duplicata de #82975 (já corrigido em commit upstream) | Redundante | P2 |
| [#87922](https://github.com/NousResearch/hermes-agent/pull/87922) | **Bug**: free models (hy3-free, deepseek-v4-flash-free) emit syntax incorreta de tool-call | Corrigido upstream | P2 |

### PRs Abertos com Alto Impacto (20+ abertas)

| PR | Descrição | Impacto | Prioridade |
|----|-----------|---------|------------|
| [#87921](https://github.com/NousResearch/hermes-agent/pull/87921) | **fix(cli): stop doctor's journal-mode probe from cancelling SQLite locks** | Corrupção de DB em diagnóstico | **P0** |
| [#82305](https://github.com/NousResearch/hermes-agent/pull/82305) | **fix(desktop): harden window-open handler** (GHSA-9f4c-93c8-jc8g, CVE-2026-70608) | Segurança: popups sandboxed iframe | **P2** |
| [#86055](https://github.com/NousResearch/hermes-agent/pull/86055) | **fix(agent): exclude stale thinking from preflight token estimate** | Precisão de budget de tokens | **P2** |
| [#87886](https://github.com/NousResearch/hermes-agent/pull/87886) | **feat(desktop): bundle Bot Mode como plugin built-in default-on** | Funcionalidade principal | P3 |
| [#85611](https://github.com/NousResearch/hermes-agent/pull/85611) | **feat(compression): keep_history context engine** — preserva chat history visível após compressão | UX de compressão | P3 |
| [#83584](https://github.com/NousResearch/hermes-agent/pull/83584) | **feat(desktop): crews, knowledge graph & Hermes Office plugins** | Expansão de funcionalidades | P3 |
| [#86195](https://github.com/NousResearch/hermes-agent/pull/86195) | **feat(i18n): add Spanish locale** | Localização | P3 |
| [#85241](https://github.com/NousResearch/hermes-agent/pull/85241) | **fix(desktop): route integrated terminals by active profile** | SSH + terminals | P2 |
| [#81763](https://github.com/NousResearch/hermes-agent/pull/81763) | **feat(executive): port Executive v2** | Comandos avançados | P3 |
| [#86706](https://github.com/NousResearch/hermes-agent/pull/86706) | **feat(desktop): on-device dictation via loopback Whisper** | Privacidade + performance | P3 |
| [#9903](https://github.com/NousResearch/hermes-agent/pull/9903) | **feat(dashboard): chat interface via API server proxy** | Dashboard UX | P3 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Tema | Comentários | Prioridade | Status |
|-------|------|-------------|------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **Skills index degraded/stale** — 29.8h sem update (limite 26h) | **44** | P3 | OPEN |
| [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) | **TERMINAL_CWD deprecated warning falsa** em cada gateway start | 7 | P2 | OPEN |
| [#81563](https://github.com/NousResearch/hermes-agent/issues/81563) | **macOS Desktop**: falta NSLocalNetworkUsageDescription | 6 | P2 | OPEN |
| [#83420](https://github.com/NousResearch/hermes-agent/issues/83420) | **Windows Desktop freeze** quando janela escondida/oclusa | 5 | **P1** | OPEN |
| [#51560](https://github.com/NousResearch/hermes-agent/issues/51560) | **fallback_providers** JSON string esvazia chain silenciosamente | 5 | P2 | OPEN |
| [#70871](https://github.com/NousResearch/hermes-agent/issues/70871) | **TUI/desktop busy stuck** durante streaming | 4 | **P1** | OPEN |
| [#87183](https://github.com/NousResearch/hermes-agent/issues/87183) | **CLI approval panel never renders** — comando trava forever | 4 | **P1** | OPEN |

**Análise:** A comunidade está focada em **estabilidade multiplataforma** (Windows, macOS) e **feedback de streaming em tempo real**. A issue de Skills index com 44 comentários indica um problema recorrente de automação de infraestrutura. Issues de segurança (aprovação de comandos, permissões de rede) geram preocupação significativa.

---

## 5. Bugs e Estabilidade

### 🔴 P0 — Crítico (1)

| Issue | Descrição | Plataforma | Status |
|-------|-----------|------------|--------|
| [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) | **`hermes update` deleta Desktop app e exit 0** quando desktop rebuild falha — Windows | Windows | OPEN |

### 🟠 P1 — Alto (5)

| Issue | Descrição | Plataforma | Status |
|-------|-----------|------------|--------|
| [#83420](https://github.com/NousResearch/hermes-agent/issues/83420) | **Desktop freeze silencioso** quando janela escondida/ocluída — task runner stall | Windows 11 | OPEN |
| [#70871](https://github.com/NousResearch/hermes-agent/issues/70871) | **TUI/desktop hangs** em estado busy + context-usage bar stale durante streaming | Desktop/TUI | OPEN |
| [#87183](https://github.com/NousResearch/hermes-agent/issues/87183) | **CLI approval panel never renders** — relay_runtime imports gateway.run com setenv hijack | CLI | OPEN |
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | **Debian installation broken** — uv.lock & npm install failed | Linux/Debian | OPEN |
| [#87921](https://github.com/NousResearch/hermes-agent/pull/87921) | **Doctor's journal-mode probe cancela SQLite locks** — corrupção de DB | CLI | OPEN (PR) |

### 🟡 P2 — Médio (12+)

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | **SSH remote resume fails** "Session not found" | OPEN |
| [#85680](https://github.com/NousResearch/hermes-agent/issues/85680) | **`hermes chat -q` sessions nunca finalizam** — ended_at NULL, leak | OPEN |
| [#87857](https://github.com/NousResearch/hermes-agent/issues/87857) | **Desktop renderer crash loop** — "Duplicate key toolCallId" | OPEN |
| [#87875](https://github.com/NousResearch/hermes-agent/issues/87875) | **Windows self-update deferral loops forever** com local carried commit | OPEN |
| [#87830](https://github.com/NousResearch/hermes-agent/issues/87830) | **WhatsApp group_allow_from nunca consultado** — rota via env var only | OPEN |
| [#75571](https://github.com/NousResearch/hermes-agent/issues/75571) | **Telegram gateway hangs** em "attempt 1/8" despite fixes | OPEN |

### ✅ Resolvidos Hoje

| Issue | Descrição |
|-------|-----------|
| [#74133](https://github.com/NousResearch/hermes-agent/issues/74133) | Desktop: queued messages leak across sessions |
| [#74109](https://github.com/NousResearch/hermes-agent/issues/74109) | Desktop sidebar only shows pinned sessions |
| [#87922](https://github.com/NousResearch/hermes-agent/issues/87922) | Free models drift into unparseable tool-call text |
| [#87918](https://github.com/NousResearch/hermes-agent/issues/87918) | profile-routed BasePlatformAdapter drops namespace (duplicado) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (P3)

| PR | Feature | Impacto | Trend |
|----|---------|---------|-------|
| [#87886](https://github.com/NousResearch/hermes-agent/pull/87886) | **Bot Mode bundled as built-in default-on plugin** + teammate protocol | ⭐⭐⭐ Desktop-first | 🚀 Em revisão |
| [#85611](https://github.com/NousResearch/hermes-agent/pull/85611) | **keep_history context engine** — preserva chat history visível | ⭐⭐⭐ UX crítico | 🚀 Em revisão |
| [#83584](https://github.com/NousResearch/hermes-agent/pull/83584) | **Crews, knowledge graph & Hermes Office plugins** (Claw3d) | ⭐⭐⭐ Multi-agent | 🚀 Em revisão |
| [#68248](https://github.com/NousResearch/hermes-agent/pull/68248) | **needs review tracking para skills** + telemetry | ⭐⭐ Curatoria | 🚀 Em revisão |
| [#86706](https://github.com/NousResearch/hermes-agent/pull/86706) | **On-device dictation** via loopback Whisper server | ⭐⭐ Privacidade | 🚀 Em revisão |
| [#86195](https://github.com/NousResearch/hermes-agent/pull/86195) | **Spanish locale** para Desktop | ⭐ Localização | 🚀 Em revisão |
| [#9903](https://github.com/NousResearch/hermes-agent/pull/9903) | **Chat interface** via API server proxy no Dashboard | ⭐⭐ UX | 🚀 Em revisão |

### Issues de Feature

| Issue | Feature Request | Prioridade |
|-------|-----------------|------------|
| [#67144](https://github.com/NousResearch/hermes-agent/issues/67144) | **Desktop surface parity** com Web Dashboard (admin + plugins + kanban) | P3 |

**Sinais de roadmap:**
- Desktop app é prioridade clara: Bot Mode, crews, knowledge graph, on-device dictation, Spanish locale
- Compressão com preservação de histórico visual (UX crítico)
- i18n em expansão

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Frequência | Severidade |
|-----------|-----------|------------|------------|
| **Estabilidade Windows** | Freeze silencioso, update loops, crash loops | Alta | Crítica |
| **Sessões** | Leak de mensagens, resume failures, sidebar quebrada | Alta | Alta |
| **Streaming UX** | Busy stuck, usage bar stale, TTS replay | Média | Alta |
| **Instalação** | Debian broken, Desktop build fails | Média | Alta |
| **Segurança Desktop** | Sandbox iframe popup, missing network permissions | Baixa | Crítica |

### Cenários de Uso Destacados

1. **Usuários Windows** reportam experiência instável com desktop app — freezes imprevisíveis e loops de update
2. **Usuários macOS** enfrentam negação silenciosa de acesso à rede local
3. **Usuários SSH remotos** têm problemas de resume e routing de terminals por profile
4. **Admins multi-profile** enfrentam problemas de routing em WhatsApp e Telegram
5. **Usuários de compression** reclamam de perda de histórico visível

### Satisfação/Insatisfação

| Aspecto | Sentimento | Detalhe |
|---------|------------|---------|
| Release cycle | ✅ Positivo | v0.20.2 bem recibida como consolidacao estavel |
| Desktop app | ⚠️ Misto | Funcionalidades novas (Bot Mode, i18n) vs. bugs criticos |
| CLI | ⚠️ Misto | Aprovacao de comandos quebrada, doctor corrompe DB |
| Integracoes (Telegram, WhatsApp) | 🔴 Negativo | Hang persistente (Telegram), routing quebrado (WhatsApp) |

---

## 8. Back

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw

**Data de referência:** 2026-08-17  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada com **2 issues abertas** e **4 pull requests** registradas nas últimas 24h. Nenhum lançamento foi publicado no período. O foco atual da comunidade está em **correções de segurança relacionadas a SSRF** (Server-Side Request Forgery) em múltiplos canais de comunicação, com 3 PRs pending review. Uma feature de canal simplex foi mergeada (#3193), indicando progresso em funcionalidades estruturais.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

| Release | Data | Status |
|---------|------|--------|
| — | — | Sem releases no período |

---

## 3. Progresso do Projeto

### PR Mergeada/Fechada

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | ✨ Feature | Introduz tipo de canal simplex, expandindo opções de comunicação |

**Análise:** A adição do tipo de canal simplex representa um avanço na arquitetura de canais do projeto, permitindo cenários de comunicação unidirecional que podem ser úteis para integrações específicas de IoT ou automação.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Reações | Link |
|---|--------|-------------|---------|------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Support OAuth 2.1 for MCP servers | 3 | 0 | 🔗 |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Render Telegram tables with rich messages | 1 | 0 | 🔗 |

**Análise:** A demanda por **OAuth 2.1** para servidores MCP (#3302) concentra o maior engajamento (3 comentários), sinalizando necessidade de modernização na autenticação de integrações. A issue de renderização de tabelas Telegram (#3325) reflete interesse em melhor representações visuais nativas das plataformas de mensageria.

---

## 5. Bugs e Estabilidade

### PRs de segurança pendentes

| # | Título | Canal | Severidade |
|---|--------|-------|------------|
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | fix(weixin): use CreateSafeHTTPClient for media downloads | WeChat | 🔴 Alta |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | fix(wecom): use CreateSafeHTTPClient for media downloads | WeCom | 🔴 Alta |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | fix(channels): block private targets on inbound media downloads | Multiple | 🔴 Alta |

**Análise:** Três PRs simultâneos abordam vulnerabilidades SSRF em downloads de mídia. As correções impedem que URLs maliciosas alcancem hosts loopback, link-local ou intervalos RFC1918 (privados). Recomenda-se priorização na revisão e merge, especialmente #3322 que abrange múltiplos canais (QQ, Telegram, Discord, LINE, Slack).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas solicitações abertas

| # | Título | Categoria | Prioridade |
|---|--------|-----------|------------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Support OAuth 2.1 for MCP servers | 🔐 Autenticação | Nice-to-Have |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Render Telegram tables with rich messages | 💬 UI/Mensagens | Nice-to-Have |

**Sinais de tendência:**
- **OAuth 2.1:** Comunidade solicita paridade com issue #2546, indicando demanda recorrente por autenticação moderna
- **Telegram nativo:** Interesse em utilizar API 10.1+ do Telegram Bot para tabelas visuais, não degradando para texto plano

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Origem | Severidade |
|-----|--------|------------|
| Vulnerabilidade SSRF em canais WeChat/WeCom | #3324, #3323 | 🔴 |
| Downloads de mídia sem proteção em múltiplos canais | #3322 | 🔴 |
| Formatação limitada de tabelas no Telegram | #3325 | 🟡 |
| Autenticação OAuth 2.0 defasada para MCP | #3302 | 🟡 |

**Cenários de uso em destaque:**
- Usuários com integrações WeChat/WeCom estão potencialmente expostos a ataques SSRF via URLs de mídia manipuladas
- Canais de automação que dependem de tabelas formatadas no Telegram sofrem degradação visual

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem atividade recente

| # | Título | Idade | Última atualização | Status |
|---|--------|-------|-------------------|--------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | ~50 dias | 2026-08-16 | ✅ Mergeada |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Support OAuth 2.1 | ~18 dias | 2026-08-16 | ⚠️ Sem resposta |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Telegram tables | ~8 dias | 2026-08-16 | ⚠️ Sem resposta |

**Recomendações:**
1. **Priorizar revisão das 3 PRs de segurança SSRF** — todas com标签 `stale` indicam necessidade de atenção
2. **Definir posicionamento sobre OAuth 2.1** — issue com 3 comentários sem resposta oficial do maintainers
3. **Avaliar escopo do PR simplex** — 50 dias em aberto antes do merge, indicando possível gargalo no processo de review

---

**Próximos passos sugeridos:**
- Agendar review das PRs de segurança SSRF (#3322, #3323, #3324)
- Estabelecer roadmap para OAuth 2.1 em alinhamento com issue #2546
- Considerar release para empacotar as correções de segurança

---
*Relatório gerado automaticamente com base em dados do GitHub.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw

**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Data do relatório:** 2026-08-17  
**Analista:** Agente de Análise Open Source

---

## 1. Panorama do Dia

O projeto IronClaw apresenta alta atividade de desenvolvimento em 17 de agosto de 2026, com **10 PRs atualizados** nas últimas 24h — sinal de ritmo intenso de integração. A atividade concentra-se em manutenção de dependências (4 PRs do Dependabot), melhorias na experiência do Slack (conexão privada e sem atritos), e refatorações significativas no core de ferramentas de coding e automações. O projeto está em fase de evolução arquitetural, com 9 PRs abertos aguardando merge e 1 PR de manutenção já concluído. Não há novas releases, indicando foco em estabilização antes do próximo release cycle.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Recomenda-se monitorar os PRs em aberto para antecipar a próxima release, particularmente as features de automações determinísticas (#7651) e o novo contract de core-tools (#7491).

---

## 3. Progresso do Projeto

### PR Merged/Closed (1)

| # | Título | Tamanho | Impacto |
|---|--------|---------|---------|
| [#7683](https://github.com/nearai/ironclaw/pull/7683) | `chore: remove retired IronLoop network settings` | XS | **Baixo** |

**Análise:** Remoção de campos obsoletos `network_access` da configuração de repositórios confiáveis do IronLoop. Manutenção de comportamento existente (Implement, Tester, Review automático e Resolve automático). Limpeza técnica que reduz debt e melhora consistência com schema v1 do IronLoop.

### PRs em Progresso (9)

| # | Título | Escopo | Tamanho | Prioridade |
|---|--------|--------|---------|------------|
| [#7682](https://github.com/nearai/ironclaw/pull/7682) | `fix(slack): deliver unlinked-user connect nudge privately` | UX/Onboarding | L | 🔴 Alta |
| [#7680](https://github.com/nearai/ironclaw/pull/7680) | `chore(agents): refresh codebase knowledge graph` | CI/Infra | XS | 🟡 Rotina |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | `feat(automations): add deterministic no-result suppression` | Docs/Funcionalidade | XL | 🔴 Alta |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | `feat(coding): omp core-tool contract + engines + benchmark arm` | Multi (CI, Docs, Deps) | XL | 🔴 Alta |
| [#7679](https://github.com/nearai/ironclaw/pull/7679) | `fix(live-qa): stop harness bugs reddening green canary runs` | QA/Estabilidade | XL | 🔴 Crítica |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | `chore(deps): bump wasm group (wit-component, wit-parser)` | Dependências | M | 🟢 Dependabot |
| [#7632](https://github.com/nearai/ironclaw/pull/7632) | `chore(deps): bump everything-else group (4 updates)` | Dependências | M | 🟢 Dependabot |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | `chore(deps): bump tokio-tungstenite 0.29.0 → 0.30.0` | Dependências | S | 🟢 Dependabot |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | `chore(deps): bump actions group (4 updates)` | CI | M | 🟡 Dependabot |

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**[#7681](https://github.com/nearai/ironclaw/issues/7681)** — *Slack: unlinked-user connect message is public and requires manual round trip*  
**Status:** Aberta | **Epic:** Sim | **Escopo:** Channel + UX/Onboarding

**Problema identificado:**
Quando um usuário Slack sem conta IronClaw vinculada menciona ou DM o bot, a resposta é visível publicamente no canal e direciona para processo manual de múltiplos passos.

**Demanda da comunidade:**
1. **Privacidade:** Mensagem deve ser entregue **privadamente** (DM), não visível a todos no canal
2. **One-click connect:** Incluir link direto para conexão, sem round trips manuais
3. **Contexto preservado:** Manter contexto entre etapas do fluxo

**PR associado:** [#7682](https://github.com/nearai/ironclaw/pull/7682) — Resolve #7681

### Análise de Tendências

- **Foco em Slack:** 2 PRs relacionados diretamente à integração Slack (#7681, #7682)
- **Automação determinística:** Feature de supressão de resultados vazios (#7651) resolve problema recorrente de notificação excessiva
- **Estabilidade de testes:** PR #7679 aborda falha crítica — harness defeituoso causava 30/30 runs vermelhas em testes de canary

---

## 5. Bugs e Estabilidade

### Problema Crítico Identificado

**PR [#7679](https://github.com/nearai/ironclaw/pull/7679)** — `fix(live-qa): stop harness bugs reddening green canary runs`

| Caso de Teste | Taxa de Falha | Causa Raiz |
|---------------|---------------|------------|
| `qa_10h_slack_email_hallucination_guard` | 100% (30/30 runs) | Defeitos no harness |

**Impacto:** Harness defectuoso estava reportando falsos positivos — falhas em testes que, na verdade, validavam comportamento correto do produto.

**Severidade:** 🔴 **Crítica** — Afeta confiabilidade do pipeline de QA e pode mascarar regressões reais.

### Riscos de Dependências

| PR | Dependência | Risco | Status |
|----|-------------|-------|--------|
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | GitHub Actions | 🟡 Médio | Em rebase |
| [#7632](https://github.com/nearai/ironclaw/pull/7632) | Múltiplas | 🟢 Baixo | Em rebase |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | tokio-tungstenite | 🟢 Baixo | Em rebase |

**Nota:** 3 Dependabot PRs estão em processo de rebase. Verificar se PRs manuais conflitantes existem antes do merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

**1. [#7651](https://github.com/nearai/ironclaw/pull/7651)** — *Automations determinísticas* (XL, baixa risco)

> Requerir que `trigger_create` forneça `result_delivery`, derivado pelo modelo a partir da redação do usuário. Permite supressão determinística de resultados vazios.

**Sinais de roadmap:** 
- Foco em **controle de notificação granular** para automações
- Modelo inferindo intent do usuário automaticamente
- Fallback determinístico para `deliver` quando redação neutra

**2. [#7491](https://github.com/nearai/ironclaw/pull/7491)** — *Core-tool contract reformulado* (XL, risco médio)

> Unificação de ferramentas de coding em surface única com 6 nomes exatos: `read`, `write`, `edit`, `glob`, `grep`, `bash`. Remoção de ferramentas legadas e surface mista.

**Sinais de roadmap:**
- Consolidação de APIs de tooling
- Remoção de nomenclaturas `builtin__*` derivadas
- Padronização de interface de coding para modelos

**3. [#7681/#7682](https://github.com/nearai/ironclaw/issues/7681)** — *Fluxo de onboarding Slack privado*

**Sinais de roadmap:**
- Experiência de conexão cross-platform mais fluida
- Suporte a fluxos "one-click" entre plataformas
- Tratamento de edge cases de usuários não-linkados

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade | Issue Relacionada |
|-----|----------|------------|-------------------|
| **Mensagem pública em Slack** | Usuários não-linkados expõem processo de conexão | 🟡 Média | [#7681](https://github.com/nearai/ironclaw/issues/7681) |
| **Round trips manuais** | Multi-step process para conectar contas | 🟡 Média | [#7681](https://github.com/nearai/ironclaw/issues/7681) |
| **Testes falhando incorretamente** | QA vermelho por defeitos no harness, não no produto | 🔴 Alta | [#7679](https://github.com/nearai/ironclaw/pull/7679) |
| **Notificações excessivas** | Automations disparando mesmo sem resultados relevantes | 🟡 Média | [#7651](https://github.com/nearai/ironclaw/pull/7651) |

### Insights Comportamentais

- **Usuários valorizam privacidade:** Problema #7681 foi reportado como enhancement epic — indica que a experiência atual quebra expectativas de privacidade em ambientes corporativos
- **Friction de onboarding é barreira:** Usuários abandonam fluxo quando confronted com múltiplos steps manuais
- **Confiabilidade de testes é crítica:** 30/30 runs vermelhas sugerem que o problema estava latente há tempo — pode ter impactado confiança em releases anteriores

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Resposta

| # | Título | Idade Estimada | Prioridade |
|---|--------|----------------|------------|
| — | Nenhuma issue antiga visível nos dados | — | — |

**Observação:** Os dados de 24h não revelam issues antigas pendentes. A equipe parece responder ativamente a novas issues.

### PRs com Potencial Bloqueio

| # | Título | Tempo Aberto | Risco |
|---|--------|--------------|-------|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | `feat(coding): omp core-tool contract` | ~6 dias | 🔴 Rebase dependente |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | `chore(deps): tokio-tungstenite bump` | ~15 dias | 🟡 Em rebase |

### Recomendações

1. **Priorizar #7679** — Fix crítico de QA que afeta integridade do pipeline
2. **Review #7651 e #7491** — Features grandes com mudanças arquiteturais precisam atenção Soon
3. **Monitorar Dependabot PRs** — Rebases pendentes podem indicar conflitos com trabalho ativo
4. **Validar #7682** — Resolve issue aberta, fluxo de merge deve ser acelerado

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| PRs atividade 24h | 10 | ✅ Alta |
| Issues atividade 24h | 1 | ✅ Normal |
| Releases 24h | 0 | ⚪ Esperado |
| PRs em revisão | 9 | 🟡 Carga de review alta |
| PRs merged 24h | 1 | ✅ Fluxo mantido |
| Bugs críticos abertos | 1 (QA harness) | 🔴 Requer atenção |
| Features epic abertas | 1 | 🟡 Em progresso (#7681) |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-17. Última atualização: 2026-08-17.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-17

## 1. Panorama do dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de desenvolvimento em 17/08/2026. Nas últimas 24h, foram registradas 8 issues e 9 pull requests atualizados, com destaque para 8 PRs abertos por contribuidores de primeira viagem — indicando um fluxo saudável de comunidade. A atividade concentra-se em correções de bugs, melhorias de usabilidade e novas funcionalidades para o sistema de agents e o console. Não houve lançamentos de novas versões, e 2 issues foram fechadas.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não publicou novas versões no período analisado. O último release estável mencionados nos issues é `v2.1.0`.

---

## 3. Progresso do Projeto

**PRs abertos de destaque (9 total, todos em revisão):**

| PR | Título | Área | Contribuidor |
|----|--------|------|--------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unify provider discovery, model metadata, routing e agent controls | Core/Providers | wangfei010313 |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | Add native DataPaw app runtime e durable analysis workspace | pawapp | cyruszhang |
| [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | Add background chat task list API | Console | suantea |
| [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) | Make view_video inline cap configurable (hardcoded 2MB) | Agents | suantea |
| [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) | Promote view_video results on OpenAI Responses API | Agents | suantea |
| [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) | Render data-URL images in historical messages on session reload | Console | suantea |
| [#7067](https://github.com/agentscope-ai/QwenPaw/pull/7067) | Switch agent from /chat/:agentId/:sessionId (deep linking) | Console | xurik |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | Persist rotated refresh_token for OAuth2 providers | Drivers | suantea |
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | Sync top-level text on cron update --text for agent jobs | CLI | suantea |

**Destaque:** O PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) representa uma refatoração significativa do sistema de providers e roteamento de modelos, introduzindo descoberta dinâmica, capability-aware routing e fallback.

---

## 4. Temas Quentes da Comunidade

**Discussões mais relevantes por volume de interação:**

1. **[#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)** — **[CLOSED]** Proposal: Memory for QwenPaw agents — 97.5% fewer tokens (ViBo)
   - **Status:** Fechada | Comentários: 3
   - **Resumo:** Proposta de solução de memória externa para agents que "esquecem" entre sessões, com potencial de redução de 97.5% em tokens. A discussão gerou interesse por solução de custo de contexto.

2. **[#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052)** — Feature: system_prompt permission para plugins
   - **Status:** Aberta | Comentários: 2
   - **Resumo:** Usuários corporativos desejam controlar visibilidade de system prompts em plugins, evitando exposição de prompts internos aos usuários finais.

3. **[#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062)** — Feature: per-agent reasoning_effort override
   - **Status:** Aberta | Comentários: 1
   - **Resumo:** Demanda por configuração granular de "intensidade de raciocínio" por agente/sessão, separando agentes rápidos (QA) de agentes de pesquisa profunda.

---

## 5. Bugs e Estabilidade

**Bugs reportados nas últimas 24h:**

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🔴 Alta | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Crash ao executar tool calls (`async for` em coroutine inválida) — afeta `v2.1.0` | Aberta |
| 🟡 Média | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | Impossível visualizar histórico de chat após múltiplas rodadas | Aberta |
| 🟡 Média | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron tasks misfire após evento loop ocioso (APScheduler) | **Fechada** |
| 🟡 Média | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | view_video com hardcoded 2MB inline cap | PR aberto ([#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071)) |
| 🟢 Baixa | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | view_video retorna "loaded" mas modelo não recebe frames (OpenAI Responses API) | PR aberto ([#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070)) |

**Alerta:** O bug [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) é crítico — causa crash consistente em agents `v2.1.0` ao executar qualquer tool call, com causa raiz identificada: uso de `async for` em coroutine ao invés de async generator.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Features solicitadas com potencial de inclusão:**

1. **[#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073)** — **Skill name deduplication** para workspace vs built-in skills
   - **Problema:** Skills customizadas com mesmo nome de built-ins são carregadas em duplicidade.
   - **Arquitetura afetada:** `builder.py` — 현재 path-based deduplication apenas.

2. **[#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068)** — Suporte a mais linguagens no visualizador (C#, .shader, .gdshader, .hlsl)
   - **Cenário:** Game-dev workflows necessitam de syntax highlighting para engine-specific languages.
   - **Área:** Console/QwenPaw desktop app.

3. **[#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062)** — Per-agent/session `reasoning_effort` override
   - **Impacto:** Separação de agentes "rápidos" vs "profundos" sem duplicar entradas de modelo.
   - **Arquitetura:** `generate_kwargs` atualmente global por provider/model.

4. **[#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052)** — system_prompt permission para plugins API
   - **Demanda corporativa:** Máscara de prompts internos em interfaces de plugin.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| 💸 **Custo de contexto** | Agents esquecem entre sessões; enviar toda memória = custo alto | Alta |
| 🏢 **Privacidade corporativa** | System prompts expostos em plugins; necessidade de controles | Média |
| 🎮 **Game-dev** | Falta suporte a linguagens de shader no editor | Média |
| 🐛 **Estabilidade** | Crashes em tool calls; cron misfire; perda de histórico | Crítica |

**Cenários de uso emergentes:**
- Integração corporativa com plugins e prompts customizados
- Workflows de game development (C#, shaders, .gdshader)
- Multi-agent coordination com background tasks (issue #7056)
- DataPaw app runtime para workspaces analíticos (PR #6940)

---

## 8. Backlog que Merece Atenção

**Issues importantes sem resolução ou sem resposta:**

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Crash em tool calls — **bug crítico v2.1.0** | 1 dia | 🔴 Alta |
| [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | Chat history não carrega após múltiplas rodadas | 1 dia | 🟡 Média |
| [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | Skill deduplication (afeta estabilidade de agents) | 1 dia | 🟡 Média |
| [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | Suporte a linguagens de shader | 1 dia | 🟢 Baixa |

**Nenhuma issue antiga (>30 dias) sem resposta identificada no período.**

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues fechadas/abertas (24h) | 2/6 | ✅ Positivo |
| PRs abertos (24h) | 9 | ✅ Alta atividade |
| PRs de novos contribuidores | 7/9 (78%) | ✅ Comunidade ativa |
| Bugs críticos abertos | 1 | ⚠️ Requer atenção |
| Releases (24h) | 0 | 🔵 Normal |

**Recomendação:** Priorizar correção do bug [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) (crash em tool calls v2.1.0) e revisar PRs de novos contribuidores — todos de primeiro contributing com múltiplas correções de estabilidade pendentes.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-17

## 1. Panorama do Dia

O projeto ZeroClaw mantém um nível de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, sinalizando alta frequência de contribuição. Não houve lançamentos de novas versões, mas o período é marcado por intensa atividade em **RFCs de arquitetura** (especialmente sobre sessions, transport e Chat Completions) e múltiplos **PRs de bug fixes** empipeline avançado. A comunidade está particularmente engajada em discussões de governança (#6808, 23 comentários) e segurança (#6971, #9655). A base de código demonstra maturidade com processos bem estabelecidos de tracking, mas há **3 bugs P1 em aberto** requerendo atenção prioritária.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está em ciclo de desenvolvimento ativo (versão atual: 0.8.4 segundo #6808), semtags formais de release no período analisado. A ausência de releases pode indicar foco em estabilização pré-release ou fase de RFCs antes do próximo milestone.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Recentemente

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#9954](https://github.com/zeroclaw-labs/zeroclaw/pull/9954) | fix(sop): unwrap double-encoded step output before schema validation | Bug fix (S) | Corrige regressão em validação de output de SOP steps |
| [#9416](https://github.com/zeroclaw-labs/zeroclaw/pull/9416) | docs(tools): document AllToolsResult.tools as pre-filter registry | Docs | Melhora documentação de API interna |
| [#10043](https://github.com/zeroclaw-labs/zeroclaw/pull/10043) | ci(lint): remove duplicate architecture test guards | CI cleanup | Remove redundância em gates de CI |

### PRs em Estado Avançado (Needs Maintainer/Author Action)

| # | Título | Tamanho | Prioridade |
|---|--------|---------|------------|
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | fix(anthropic): classify incomplete terminal responses | XL | P1 |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | fix(memory): per-agent attribution and scoping to knowledge graph | XL | Security |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | fix(gateway): keep agent turns alive after viewer disconnect | XL | P1 |
| [#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | fix(providers): account Reliable rejected attempts exactly | XL | P2 |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 23 | Governança e processo |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 21 | Integração OpenAI-compatível |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions | 17 | Arquitetura de sessions |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture | 16 | Arquitetura de anexos |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer lighter ZeroClaw core | 14 | Modularização |

### Análise dos Temas

**Governança (#6808):** A comunidade discute automatização de work lanes e labels, sinalizando maturidade nos processos de triage. Status "Ratified / rollout in progress" indica implementação ativa.

**Integração OpenAI (#8603):** Demanda crescente por compatibilidade com Open WebUI, LobeChat, Continue.dev e LangChain — indica estratégia de expansão para ecossistema mais amplo.

**Arquitetura de Sessions (#9487, #9488):** Dois RFCs correlacionados sobre ownership de sessions e arquitetura de anexos demonstram refinamento do modelo de transporte e persistência.

---

## 5. Bugs e Estabilidade

### Bugs P1 (S1-S2 — Impacto Crítico/Degradado)

| # | Severidade | Título | Status | Risco |
|---|------------|--------|--------|-------|
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | S1 | Approval cards sem posição — back-to-back indistinguíveis | Accepted | High |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | S1 | /health reporta channel healthy nunca conectado | Accepted | High |
| [#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) | S2 | Agentic delegates ignoram target thinking policy | In Progress | High |
| [#10037](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) | S2 | POST /api/cron aceita session_target inválido silenciosamente | In Progress | High |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | S2 | Test fixtures ETXTBSY sob parallel runtime | Accepted | Medium |
| [#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) | S1 | Edge TTS cancellation test pode falhar sob load | Accepted | Medium |

### Bugs Fechados

| # | Título | Correção |
|---|--------|----------|
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | SOP double-encoded output rejection | PR [#9954](https://github.com/zeroclaw-labs/zeroclaw/pull/9954) |

**Análise:** Padrão de bugs em áreas críticas de runtime, provider e security.特别注意 #9655 (security) e #9811 (health) afetam UX operacional e confiabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs Ativas em Destaque

| # | Título | Área | Status | Risk |
|---|--------|------|--------|------|
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | zeroclaw swarm — ephemeral agent swarms + crush-style TUI | Agent/CLI | New | High |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech para Gemini Live | Channel | Revised v2 | High |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | Staged opt-in product telemetry | Observability | RFC | High |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-validated memory consolidation | Memory | Accepted | High |

### Features em Desenvolvimento

| # | Título | Área | Progresso |
|---|--------|------|-----------|
| [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) | Microsoft Teams (Bot Framework) channel | Channel | Needs author action |
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | Telegram per_user_session toggle | Channel | Needs maintainer review |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | Secure model picker para Telegram | Channel | Needs maintainer review |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP daemon-owned control plane (tracker) | Tool | Accepted, tracking |
| [#7881](https://github.com/zeroclaw-labs/zeroclaw/issues/7881) | Provider fallback circuit breakers | Config | Accepted |

**Sinais de Roadmap:** Foco em **multi-canal** (Teams, Telegram enhancements), **observabilidade** (telemetry RFC), e **agentes autônomos** (swarm RFC, memory consolidation).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues)

1. **Configuração complexa de agents** (#10025): Usuários reportam "config surgery" para criar equipes de agents, indicando necessidade de orquestração simplificada.

2. **Segurança de approval cards** (#9655): Operadores não conseguem distinguir cards pendentes em sequência, impactando workflow de aprovação.

3. **Provider reliability** (#10003): Tentativas rejeitadas não são contabilizadas corretamente, afetando usage tracking e billing.

4. **Memory fragile** (#6998): Parsing JSON de memória depende de prompt engineering, gerando inconsistências entre providers.

5. **Health checks mentirosos** (#9811): `/health` reporta false positives para channels que nunca conectaram, complicando monitoring.

### Cenários de Uso Emergentes

- **Multi-provider fallback**: Demanda por circuit breakers e intra-family fallback notices (#7881, #7883)
- **Localization gaps**: Output literal fora do sistema Fluent (#9972) —和政策冲突
- **Teams enterprise**: Integração Bot Framework (#9241) atende cenário corporate

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Idade | Estado | Prioridade |
|---|--------|-------|--------|------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue tracker | ~44 dias | Accepted | P2 |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | WASM plugin lifecycle hook subscriptions | ~61 dias | Needs author action | P2 |
| [#7887](https://github.com/zeroclaw-labs/zeroclaw/issues/7887) | Date-range conditional schedules for cron | ~61 dias | Accepted | P3 |

### RFCs Pendentes de Decisão

| # | Título | Criado | Comentários | Status |
|---|--------|--------|-------------|--------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Lighter ZeroClaw core | 2026-04-27 | 14 | Needs maintainer review |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire protocol first-class | 2026-06-27 | 7 | Needs author action |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | Product telemetry | 2026-08-01 | 5 | Needs maintainer review |

### Recomendações

1. **Triar #8692**: Decisões acumuladas podem impactar velocity de features dependentes
2. **Revisar #7822**: Plugin lifecycle hooks são bloqueantes para ecossistema WASM
3. **Resolver #6165**: Decisão sobre modularização impacta arquitetura de releases

---

## Métricas Resumidas (24h)

| Categoria | Valor |
|-----------|-------|
| Issues atualizados | 50 |
| PRs atualizados | 50 |
| Issues abertas/ativas | 48 |
| PRs abertos | 47 |
| Releases | 0 |
| Bugs P1 | 5 |
| RFCs ativas | 12+ |
| Avg. comentários (top 10 issues) | 14.5 |

---

*Relatório gerado em 2026-08-17 com dados do GitHub ZeroClaw. periodicidade: diário.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*