# Relatório diário da comunidade de ferramentas AI CLI 2026-04-19

> Gerado em: 2026-04-19 01:36 UTC | Ferramentas cobertas: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Comparação entre ferramentas

# Relatório Comparativo — Ecossistema AI CLI
## 19 de abril de 2026

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI em abril de 2026 apresenta um quadro de **maturidade fragmentada**: enquanto a OpenAI avança decisivamente em funcionalidades de orquestração (Goal Mode, Timers), a Anthropic concentra-se em estabilizar billing e configurabilidade. A Google demonstra alta atividade de contribuição comunitária (37 PRs/24h), mas enfrenta desafios recorrentes de estabilidade de shell. Destaca-se a **proliferação de issues críticas não resolvidas** em todas as ferramentas — especialmente em billing (Claude Code, Copilot), autenticação (Qwen Code) e rendering cross-platform (OpenCode, Gemini CLI) — indicando que a experiência de produção ainda está em consolidação.

---

## 2. Comparação de Atividade

| Ferramenta | Releases (24h) | PRs Abertos | Issues Ativas | Última Versão | Tendência |
|------------|:--------------:|:-----------:|:------------:|:-------------:|:---------:|
| **Gemini CLI** | 0 | 37 | 50 | — | 🔥 Muito ativo |
| **Qwen Code** | 1 nightly | ~50 | ~30 | v0.14.5-nightly | 🔥 Crescente |
| **Claude Code** | 0 | 6+ | 11+ | v2.1.110 | Estável |
| **OpenAI Codex** | 1 alpha | 15+ | 10+ | rust-v0.122.0-alpha.10 | Evoluindo |
| **Pi** | 0 | 10+ | 10+ | — | Moderado |
| **OpenCode** | 0 (falhou) | 9+ | 12+ | v1.4.11 | Estagnado |
| **Copilot CLI** | 0 | 0 | 31 | v1.0.32 | Baixo |
| **Kimi Code CLI** | 0 | 5+ | 10+ | v1.36.0 | Moderado |

**Observação crítica:** A Copilot CLI e OpenCode mostram sinais de estagnação — zero PRs merged e releases falhados indicam possíveis problemas de manutenção.

---

## 3. Direções de Features Compartilhadas

### 3.1 Billing e Rate Limiting (5/8 ferramentas)
| Ferramenta | Issue | Prioridade |
|------------|-------|:----------:|
| Claude Code | #23315 — Cobrança duplicada | 🔴 Crítica |
| Claude Code | #39903 — Subagents usando API key | 🟡 Alta |
| Copilot CLI | #2760 — Retry agressivo HTTP 429 | 🟠 Alta |
| Copilot CLI | #2769 — Rate limit não reseta | 🔴 Crítica |
| Qwen Code | #3427/#3425 — 401 após login | 🔴 Crítica |
| OpenCode | #9281 — Rastreamento de uso | 🟡 Média |

**Implicação:** Billing e rate limiting são a **dor mais transversal** do ecossistema. Desenvolvedores precisam implementar backoff exponencial, visibilidade de uso e recuperação graciosa de falhas.

### 3.2 Configurabilidade de Modelos e Thinking (4/8 ferramentas)
| Ferramenta | Feature | Status |
|------------|---------|:------:|
| Claude Code | Níveis xhigh para Opus 4.7 (#50577) | Iminiente |
| Copilot CLI | xhigh oculto no picker GPT-5.4 (#2725) | Bug |
| Kimi Code | K2.5 vs K2.6 debate (#1925) | Aberto |
| Pi | Custom thinking levels por modelo (#3208) | 6👍 |

### 3.3 Multi-plataforma e IDE Integration (4/8 ferramentas)
| Ferramenta | Integração | Prioridade |
|------------|------------|:----------:|
| Claude Code | VS 2026 (#15942) | 224👍 |
| OpenAI Codex | macOS Intel + Multi-window | Pronta |
| Kimi Code | WSL2 (#1916), Admin-free install | Bloqueante |
| OpenCode | macOS 26.4 Tahoe render | Bug |

### 3.4 Subagent Orchestration (3/8 ferramentas)
| Ferramenta | PR/Issue | Impacto |
|------------|---------|---------|
| Claude Code | Plugins ecossistema (#50301) | Crescente |
| Kimi Code | work_dir override (#1933) | Crítico |
| OpenAI Codex | Goal Mode stack | ✅ Completo |
| OpenCode | Subagent models ignorados (#20859) | Bug |

### 3.5 Observabilidade e Debugging (2/8 ferramentas)
| Ferramenta | Feature | Autor |
|------------|---------|-------|
| Gemini CLI | `/bug-memory` com heap snapshot (#25639) | Anjaligarhwal |
| OpenCode | `/usage` unificado (#9545) | 21👍 |

---

## 4. Análise de Diferenciação

### 4.1 Posicionamento de Público

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    POSICIONAMENTO DE AUDIÊNCIA                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   OpenAI Codex ──────────► Produtividade enterprise (CI/CD, Goals)     │
│   Claude Code ──────────► Desenvolvimento geral premium               │
│   Gemini CLI ───────────► Experimentação / comunidade ativa           │
│   Copilot CLI ──────────► Devs GitHub-centric, integração Microsoft   │
│   Kimi Code ────────────► Mercado chinês, compatibilidade WSL2         │
│   Qwen Code ────────────► Crescimento agressivo, auth em transição    │
│   OpenCode ─────────────► Multi-provider (aberto, extensível)         │
│   Pi ───────────────────► Usuários avançados, customização profunda    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Abordagem Técnica Distintiva

| Ferramenta | Arquitetura Diferenciadora | Escolha Técnica |
|------------|---------------------------|----------------|
| **Claude Code** | Plugin-first ecosystem | Sistema de plugins com marketplace |
| **OpenAI Codex** | Goal-oriented agents | Persistência de objetivos + Timers |
| **Gemini CLI** | Shell-centric stability | Signal forwarding, throttling UI |
| **Copilot CLI** | Minimalist CLI | Comandos slash (/ask, /btw) |
| **Pi** | Provider-agnostic | Multi-provider: Anthropic, Bedrock, LM Studio |
| **Qwen Code** | Compact mode UX | Hooks HTTP, ACP extensibility |

### 4.3 Vetores de Diferenciação Observados

```
Força Principal ──────────────────► Ferramentas que lideram
────────────────────────────────────────────────────────────
Prompt Caching            ──────► Claude Code (#24159), Pi (#3393)
Goal/Task Persistence    ──────► OpenAI Codex (✅ completo)
Shell Stability           ──────► Gemini CLI (signal fwd, throttle)
IDE Integration           ──────► Claude Code (VS 2026), OpenCode
Provider Flexibility      ──────► Pi, OpenCode (multi-provider)
Extensibilidade           ──────► Qwen Code (ACP hooks), Claude Code (plugins)
```

---

## 5. Tração e Maturidade da Comunidade

### 5.1 Métricas Comparativas de Engajamento

| Ferramenta | Issue +Votada | Comentários (top issue) | PR Velocity | Crescimento |
|------------|:-------------:|:----------------------:|:-----------:|:-----------:|
| **Claude Code** | VS 2026 (224👍) | #24055 (119) | Alta | Consolidado |
| **OpenAI Codex** | macOS Intel (288👍) | #10410 (187) | Alta (stacks) | Evoluindo |
| **Gemini CLI** | AST-aware (5👍) | #22745 (5) | Muito alta (37 PRs) | Emergente |
| **Copilot CLI** | /btw (26👍) | #2725 (21) | Baixa | Estável |
| **Kimi Code CLI** | K2.6 debate (3👍) | #1925 (3) | Moderada | Estável |
| **OpenCode** | /usage (21👍) | #5485 (49) | Moderada | Estagnado |
| **Pi** | Thinking levels (6👍) | #3214 (9) | Alta (17 closed) | Ativo |
| **Qwen Code** | OAuth policy (97💬) | #3203 (97) | Muito alta | Crescendo |

### 5.2 Análise de Velocity e Ciclos de Release

```
┌────────────────────────────────────────────────────────────────────────┐
│                 CICLO DE EVOLUÇÃO POR FERRAMENTA                      │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  OpenAI Codex    ████████░░░░░░░  Fast follower, stacks completos    │
│  Qwen Code       ████████░░░░░░░  nightly releases, PRs rápidos      │
│  Gemini CLI      ████████░░░░░░░  37 PRs/24h, alta atividade         │
│  Pi              ███████░░░░░░░░  17 PRs closed, foco em qualidade   │
│  Claude Code     ██████░░░░░░░░░  Estável, poucas releases           │
│  Kimi Code       █████░░░░░░░░░░  Releases infrequentes              │
│  Copilot CLI     ███░░░░░░░░░░░░  Estagnado, 0 PRs em 24h           │
│  OpenCode        ██░░░░░░░░░░░░░  Release falhou, bugs 4+ meses      │
│                                                                        │
│  ████████████ = Ciclo de evolução ativo                               │
│  ░░░░░░░░░░░░ = Ciclo estagnado                                      │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Qualidade de Suporte (Taxa de Resolução)

| Ferramenta | Issue Antiga (4+ meses) | Resolution Rate | Observação |
|------------|:-----------------------:|:----------------:|------------|
| **Claude Code** | #24055 (32k tokens) | ✅ Fechada | Mas recorrente |
| **OpenCode** | #5485 (não inicia) | ❌ Aberta | 4+ meses |
| **OpenAI Codex** | #5538 (input TUI) | ❌ Aberta | Meses |
| **Gemini CLI** | SSH scrambling (#24202) | ❌ Aberta | Média |
| **Copilot CLI** | XDG_CONFIG (#1954) | ❌ Aberta | Regression |

**Sinal de alerta:** Issues com mais de 4 meses sem resolução — especialmente bugs críticos como "não inicia" (#5485) e "input desaparece" (#5538) — indicam dívida técnica acumulada que pode afastar desenvolvedores.

---

## 6. Sinais de Tendência do Setor

### 6.1 Tendências Confirmadas (Padrão Emergent)

| Tendência | Evidência Cross-Tool | Implicação Estratégica |
|-----------|---------------------|------------------------|
| **Orquestração de Goals** | OpenAI (✅), Claude (#50577), Gemini (#22323) | Agentes precisarão de memória de objetivos de longo prazo |
| **Billing/Telemetria** | 5/8 ferramentas com issues de billing | Transparência de custos será diferencial competitivo |
| **Subagents e Multi-Agent** | 3/8 ferramentas com PRs ativos | Arquitetura de delegation está se tornando mainstream |
| **Configurabilidade Granular** | Thinking levels, effort, hooks | "One-size-fits-all" não funciona para devs avançados |
| **Cross-Platform Reliability** | macOS/Windows/WSL2 bugs em todas | Suporte multi-plataforma ainda é desafio não resolvido |

### 6.2 Tendências Emergentes (Sinais Fracos)

| Sinal | Primeira Aparição | Potencial |
|-------|------------------|:---------:|
| **AST-aware Tooling** | Gemini CLI (#22745) | Reduzir contexto via parsing inteligente |
| **Voice Input** | Kimi Code (#1934), Claude Code (#38968) | Input multimodal para brainstorming |
| **Defensive RAG** | Gemini (#25190) | Proteger contra prompt injections |
| **Mobile/Touch** | OpenCode (#18767) | AI CLI além do desktop |
| **Local LLM Provider** | Pi (#3357), Qwen (#3384) | Privacidade e custo-offline |

### 6.3 Tendências em Declínio ou Estagnação

| Tendência | Observação | Implicação |
|-----------|------------|------------|
| **Grandes Context Windows** | 32k tokens ainda problema (#24055) | Limites físicos ainda limitam uso prático |
| **Free Tiers** | Qwen descontinua (#3203) | Modelo freemium sob pressão |
| **Mono-provider** | Todas migrando para multi-provider | Lock-in em provedor único é risco |

### 6.4 Radar Estratégico para 2026-2027

```
                    IMPACTO
                      ▲
                      │     ★ Gemini CLI (velocidade)
                      │     ★ Qwen Code (crescimento)
          IMPACTO      │
          ALTO ◄───────┼──────► NOVIDADE
                      │
                      │   ○ Voice Input
                      │   ○ AST-aware tooling
                      │   ○ Defensive RAG
                      │
                      │
                      ▼
              ◄─────────────────►
                 TEMPO PARA
                 MATURAÇÃO
                 
        LEGENDA:
        ★ = Alta velocidade / alto impacto
        ○ = Sinais emergentes ainda discretos
```

---

## 7. Síntese Executiva

### Para Desenvolvedores
- **Evitar:** Copilot CLI (estagnado) e OpenCode (bugs críticos 4+ meses)
- **Considerar:** Gemini CLI (mais ativo, mas instável) vs Claude Code (estável, menos inovações)
- **Experimentar:** Qwen Code (nightly rápido) para quem quer features de ponta

### Para Decisores Técnicos
- **Billing/Rate Limiting** é a dor #1 transversal — priorizar ferramentas com telemetria robusta
- **Multi-provider** está se tornando padrão — evitar lock-in em provedor único
- **Orquestração de Goals** é a próxima fronteira — OpenAI lidera, outros seguem

###

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório de Destaques — Comunidade Claude Code Skills
**Período: até 2026-04-19 | Fonte: github.com/anthropics/skills**

---

## 1. Ranking das Skills Mais Quentes

### 1.1 Skills com maior engajamento em Issues

| Rank | Issue | Comentários | 👍 | Tema Central |
|------|-------|-------------|-----|--------------|
| 1 | [#62](https://github.com/anthropics/skills/issues/62) | 10 | 1 | Perda massiva de skills do usuário |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | 9 | 5 | Compartilhamento corporativo de skills |
| 3 | [#202](https://github.com/anthropics/skills/issues/202) | 8 | 1 | Revisão do skill-creator (melhores práticas) |
| 4 | [#556](https://github.com/anthropics/skills/issues/556) | 6 | 6 | Bug crítico: run_eval.py com 0% de trigger |
| 5 | [#189](https://github.com/anthropics/skills/issues/189) | 5 | 7 | Duplicação de skills entre plugins |

### 1.2 PRs com atividade recente (atualizados em abril/2026)

| PR | Atualização | Tema | Relevância |
|----|-------------|------|------------|
| [#541](https://github.com/anthropics/skills/pull/541) | 2026-04-16 | Correção DOCX: colisão de w:id com bookmarks | 🔴 Crítica |
| [#539](https://github.com/anthropics/skills/pull/539) | 2026-04-16 | Validação YAML para skill-creator | 🟡 Importante |
| [#538](https://github.com/anthropics/skills/pull/538) | 2026-04-16 | Correção case-sensitive em PDF skill | 🟡 Importante |
| [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Skill ODT (OpenDocument) | 🟢 Nova skill |
| [#181](https://github.com/anthropics/skills/pull/181) | 2026-03-16 | Skill SAP-RPT-1-OSS (analytics preditivo) | 🟢 Enterprise |

---

## 2. Tendências de Demanda da Comunidade

### 2.1 Funcionalidades mais solicitadas (Issues)

**A) Compartilhamento organizacional**
> *"Skills should be shareable within an organization directly"* — [#228](https://github.com/anthropics/skills/issues/228) (9 comentários, 5 👍)

A comunidade demanda um sistema de **skill library compartilhada** entre times, eliminando a necessidade de upload manual via Slack/Teams.

**B) Melhorias no skill-creator**
> *"skill-creator should be updated to best practice"* — [#202](https://github.com/anthropics/skills/issues/202) (8 comentários)

O skill-creator atual é descrito como *"developer documentation rather than an operational skill"* — a comunidade quer workflows mais executáveis e menos educacionais.

**C) Suporte a APIs corporativas**
> *"description optimizer requires ANTHROPIC_API_KEY, unusable for enterprise/SSO users"* — [#532](https://github.com/anthropics/skills/issues/532)

Usuários Enterprise/SSO não conseguem usar ferramentas de otimização de description por falta de API key pessoal.

### 2.2 Categorias de Skills mais pedidas

| Categoria | Indicador | Issue |
|-----------|-----------|-------|
| **Documentação** | Nova skill proposta | [#514](https://github.com/anthropics/skills/pull/514) (typography) |
| **Automação** | AppleScript, macOS native | [#806](https://github.com/anthropics/skills/pull/806) |
| **Pagamentos** | Micropayments BSV via x402 | [#374](https://github.com/anthropics/skills/pull/374) |
| **Testes** | Testing patterns skill | [#723](https://github.com/anthropics/skills/pull/723) |
| **Memória persistente** | Context entre sessões | [#521](https://github.com/anthropics/skills/pull/521), [#154](https://github.com/anthropics/skills/pull/154) |

---

## 3. Skills Promissoras Ainda Pendentes

### 3.1 PRs com alto potencial, aguardando merge

| PR | Skill | Valor agregado | Status |
|----|-------|----------------|--------|
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Controle de qualidade tipográfico (orphan words, widows) | 🟡 Aberto desde 2026-03-04 |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` | Suporte OpenDocument (.odt, .ods) | 🟡 Aberto desde 2026-03-01 |
| [#806](https://github.com/anthropics/skills/pull/806) | `sensory` | Automação macOS via AppleScript | 🟡 Aberto desde 2026-03-29 |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Stack completo de testing (Unit, Component, E2E) | 🟡 Aberto desde 2026-03-22 |
| [#509](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md` | Documentação de contribuição (saúde comunitária) | 🟡 Aberto desde 2026-03-03 |

### 3.2 Correções críticas pendentes de merge

| PR | Problema corrigido | Severidade |
|----|--------------------|-----------|
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX corrompido por colisão de w:id | 🔴 Corrupção de dados |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 panic no skill-creator | 🔴 Crash |

---

## 4. Insight sobre o Ecossistema de Skills

> **A comunidade está em transição de "proliferação de skills" para "qualidade e governança"** — as Issues mais comentadas não pedem novas skills, mas sim **confiabilidade** (bug do run_eval.py), **compartilhamento corporativo**, e **otimização de existentes** (skill-creator). O pipeline de PRs reflete isso: 60% das contribuições recentes são correções de bugs e melhorias incrementais, não novas funcionalidades.

---

**Metodologia**: Análise de 50 PRs e 50 Issues do repositório `anthropics/skills`. Métricas priorizadas: comentários (engajamento), 👍 (validação social), data de atualização (atividade recente).

---

# Relatório Diário da Comunidade Claude Code
## 📅 19 de abril de 2026

---

## 1. Destaques do Dia

O dia 19 de abril foi marcado por intensa atividade de resolução de bugs, com diversas issues críticas sendo fechadas pela equipe. A questão do limite de 32.000 tokens na API continua mobilizando a comunidade, enquanto uma nova issue sobre faturas duplicadas para assinantes do plano Max gera preocupação. Destaque também para a abertura de PRs de plugins e documentação, indicando evolução do ecossistema.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

A versão mais recente remains **v2.1.110** (conforme mencionado em issues recentes). A versão **v2.1.111** foi referenciada na issue #50577, sugerindo que uma atualização está iminente com suporte ao nível `xhigh` para Opus 4.7.

---

## 3. Issues em Evidência

### 🔴 Issue #24055 — API Error: Claude's response exceeded the 32000 output token maximum
- **Status:** FECHADA
- **Comentários:** 119 | 👍 82
- **Relevância:** Bug crítico que afeta desenvolvedores que precisam de respostas extensas. A comunidade investiu semanas discutindo-workarounds e a causa raiz.
- **Link:** [anthropics/claude-code#24055](https://github.com/anthropics/claude-code/issues/24055)

---

### 🟡 Issue #15942 — Add support for Visual Studio 2026 Integration
- **Status:** ABERTA
- **Comentários:** 84 | 👍 224
- **Relevância:** Feature request com maior engajamento (👍) do período. Usuários Windows aguardam integração nativa com VS 2026, indicando demanda significativa.
- **Link:** [anthropics/claude-code#15942](https://github.com/anthropics/claude-code/issues/15942)

---

### 🟡 Issue #23315 — Claude Code charges users twice (API billing AND prepaid credits)
- **Status:** ABERTA
- **Comentários:** 8 | 👍 1
- **Relevância:** Bug financeiro crítico. Usuários API-based estão sendo cobrados duplicadamente, gerando perdas financeiras diretas.
- **Link:** [anthropics/claude-code#23315](https://github.com/anthropics/claude-code/issues/23315)

---

### 🔴 Issue #40274 — [Bug] Claude is being lazy - very very lazy
- **Status:** ABERTA
- **Comentários:** 17 | 👍 3
- **Relevância:** Relato de comportamento inconsistente do modelo, mesmo com reasoning máximo ativado. Afeta confiabilidade em produção.
- **Link:** [anthropics/claude-code#40274](https://github.com/anthropics/claude-code/issues/40274)

---

### 🟡 Issue #28125 — Cowork can't add private GitHub marketplace
- **Status:** ABERTA
- **Comentários:** 19 | 👍 20
- **Relevância:** Bloqueia uso de recursos premium em ambientes corporativos com GitHub privado.
- **Link:** [anthropics/claude-code#28125](https://github.com/anthropics/claude-code/issues/28125)

---

### 🔴 Issue #49464 — CRITICAL: Claude attempts to delete home directory when cleaning up file named '~'
- **Status:** FECHADA
- **Comentários:** 4 | 👍 1
- **Relevância:** Bug de segurança grave. O comando `rm -f ~/` poderia apagar todo o diretório home do usuário. Corrigido.
- **Link:** [anthropics/claude-code#49464](https://github.com/anthropics/claude-code/issues/49464)

---

### 🟡 Issue #24159 — CLAUDE_CODE_MAX_OUTPUT_TOKENS has no effect on Opus 4.6
- **Status:** FECHADA
- **Comentários:** 15 | 👍 18
- **Relevância:** Relacionada à #24055. Corrigida, resolve problema de configuração de tokens para Opus 4.6.
- **Link:** [anthropics/claude-code#24159](https://github.com/anthropics/claude-code/issues/24159)

---

### 🟡 Issue #39903 — Max Plan subscribers billed through API key when subagents dispatch
- **Status:** ABERTA
- **Comentários:** 3 | 👍 1
- **Relevância:** Problema financeiro para assinantes Max ($200/mês). Subagents estão usando API key em vez do plano, gerando cobranças inesperadas de $152.
- **Link:** [anthropics/claude-code#39903](https://github.com/anthropics/claude-code/issues/39903)

---

### 🟡 Issue #50579 — Image reading fails on non-image JPEG files
- **Status:** ABERTA
- **Comentários:** 2 | 👍 0
- **Relevância:** Bug freshly reported hoje. Claude trava ao tentar ler arquivos JPEG que não são imagens válidas.
- **Link:** [anthropics/claude-code#50579](https://github.com/anthropics/claude-code/issues/50579)

---

### 🟡 Issue #50571 — Configure persistHookOutput 10,000-character threshold
- **Status:** ABERTA
- **Comentários:** 2 | 👍 0
- **Relevância:** Demanda de configurabilidade para hooks. Usuários avançados precisam controlar comportamento de persistência de contexto.
- **Link:** [anthropics/claude-code#50571](https://github.com/anthropics/claude-code/issues/50571)

---

## 4. Progresso de PRs Importantes

### 📦 PR #50578 — Wrangler observability bootstrap
- **Autor:** GoodshytGroup
- **Status:** ABERTO
- **Relevância:** Contribuição para melhoria de observabilidade no contexto do Wrangler.
- **Link:** [anthropics/claude-code#50578](https://github.com/anthropics/claude-code/pull/50578)

---

### 🎮 PR #50301 — feat(plugins): add flappy-claude terminal game
- **Autor:** xodn348
- **Status:** ABERTO
- **Relevância:** Plugin de jogo Flappy Bird para terminal via `/flappy-claude`. Demonstra ecossistema de plugins em crescimento.
- **Link:** [anthropics/claude-code#50301](https://github.com/anthropics/claude-code/pull/50301)

---

### 🛠️ PR #50293 — fix: use -exist flag in ipset add
- **Autor:** briancornally
- **Status:** ABERTO
- **Relevância:** Correção no `.devcontainer/init-firewall.sh` que previne erros em execuções subsequentes do script.
- **Link:** [anthropics/claude-code#50293](https://github.com/anthropics/claude-code/pull/50293)

---

### 📝 PR #46024 — docs: document --exclude-dynamic-system-prompt-sections in README
- **Autor:** Christian-Sidak
- **Status:** ABERTO
- **Relevância:** Documentação oficial da nova flag para otimização de cache em print mode.
- **Link:** [anthropics/claude-code#46024](https://github.com/anthropics/claude-code/pull/46024)

---

### 🐛 PR #46095 — Claude Mythos operating contract for Veriflow immune system
- **Autor:** GoodshytGroup
- **Status:** FECHADO
- **Relevância:** Contrato operacional para integração com Veriflow. Fechado sugere merge concluído.
- **Link:** [anthropics/claude-code#46095](https://github.com/anthropics/claude-code/pull/46095)

---

### ⚙️ PR #50565 — Copilot/fix configuration again
- **Autor:** GoodshytGroup
- **Status:** ABERTO
- **Relevância:** Correção de configuração relacionada ao Copilot.
- **Link:** [anthropics/claude-code#50565](https://github.com/anthropics/claude-code/pull/50565)

---

## 5. Tendências de Pedidos de Features

Com base nas issues abertas e fechadas, as seguintes direções são mais demandadas pela comunidade:

### 🖥️ Integração com IDEs
- Suporte a **Visual Studio 2026** (#15942) — 224👍
- Melhorias de keybindings no Windows TUI

### 💰 Billing e Planos
- Correção de cobrança duplicada para usuários API (#23315)
- Subagentes usando API key em vez de plano Max (#39903)
- Revisão de créditos consumidos em falhas (#49465)

### 🔧 Ferramentas e Performance
- Exposição do nível de effort na statusline (#50577)
- Configurabilidade de thresholds de hooks (#50571)
- Otimização de contexto com prompt caching

### 🌍 Multi-plataforma
- Funcionalidades Cowork para GitHub privado (#28125)
- Voice mode no Windows (#38968)
- Keybindings macOS/Windows regression (#38807)

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Categoria | Frequência | Issue de Referência |
|-----------|------------|---------------------|
| **Limite de tokens (32k)** | Alta | #24055, #24159 |
| **Billing duplo** | Alta | #23315, #39903 |
| **Keybindings Windows** | Recorrente | #38807, #38766 |
| **Chrome focus steal** | Recorrente | #39707, #39696 |
| **Voice mode Windows** | Recorrente | #38968 |

### 🔧 Demandas Frequentes

1. **Configurabilidade avançada** — Usuários pedem controle sobre thresholds (#50571), effort levels (#50577), e comportamento de hooks.

2. **Suporte a VS 2026** — Integração com IDEs Microsoft é a feature mais votada.

3. **MCP Connectors** — Context bloat de 100k tokens por auto-loading de connectors (#50062).

4. **Scrollback em sessões longas** — Problema recorrente no TUI quando há saída durante scroll.

### ✅ Bugs Recentemente Corrigidos (值得关注)

- Home directory deletion bug (#49464)
- `--print` empty output regression (#38828)
- Rate limit com Opus 4.6 (1m) (#27179)
- Bash heredoc approval prompts (#31191)

---

**Fim do relatório — 19/04/2026**

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 📊 Relatório Diário da Comunidade — OpenAI Codex

**Data:** 2026-04-19
**Repositório:** github.com/openai/codex

---

## 1. Destaques do Dia

A equipe OpenAI continua investindo na experiência Goal Mode — um stack completo de 5 PRs foi integrado ao codebase, adicionando APIs de servidor, runtime e ferramentas de modelo para persistência de objetivos. No фронт-енд de plataforma, um novo PR traz suporte a `codex app` em macOS Intel e Windows, resolvendo um problema antigo (#10410). Em paralelo, problemas críticos de CPU e rendimiento no macOS continuam gerando reports da comunidade.

---

## 2. Lançamentos

| Release | Status | Notas |
|---------|--------|-------|
| `rust-v0.122.0-alpha.10` | Alpha | Release 0.122.0-alpha.10 |

> Sem changelog detalhado disponível para esta release alpha.

---

## 3. Issues em Evidência

### 🔴 Altaengajamento (comunidade ativa)

**1. [CLOSED] #10410 — Codex Desktop App: macOS Intel (x86_64) support**
- **Por que importa:** 187 comentários e 288👍 demonstram demanda massiva. Usuários com Macs Intel ficavam impossibilitados de usar o app desktop.
- **Resolução:** PR #18500 implementa suporte multiplataforma, alinhando-se com a issue.
- [Ver issue](https://github.com/openai/codex/issues/10410)

**2. [OPEN] #11981 — Codex app 100% CPU even with one agent running**
- **Por que importa:** Afeta rendimiento do sistema completo. 37 comentários indicam problema recorrente pós-atualização.
- **Reação:** Comunidade reporta fans subindo e lag mesmo em requests pequenas.
- [Ver issue](https://github.com/openai/codex/issues/11981)

**3. [CLOSED] #18264 — Message send delayed ~8 seconds in new sessions**
- **Por que importa:** UX quebrada na interação principal. 29 comentários e 28👍 indicam impacto em produtividade.
- ** workaround disponível:** usuários aguardam fix oficial.
- [Ver issue](https://github.com/openai/codex/issues/18264)

### ⚠️ Bugs com workaround

**4. [OPEN] #18258 — 'Computer Use plugin unavailable' on macOS**
- ** workaround:** Definir `features.apps = true` no `~/.codex/config.toml` e reparar path do cache.
- [Ver issue](https://github.com/openai/codex/issues/18258)

**5. [OPEN] #15777 — Sandbox corrupts ACL on AppData (Windows)**
- **Por que importa:** Problema de segurança/estabilidade no Windows 10.
- [Ver issue](https://github.com/openai/codex/issues/15777)

**6. [OPEN] #9046 — Context window overflow**
- **Por que importa:** Erro bloqueante em tasks longas. Limita uso prático.
- [Ver issue](https://github.com/openai/codex/issues/9046)

**7. [OPEN] #5538 — Input disappears while Codex CLI responds (TUI)**
- **Por que importa:** UX crítica do CLI. Afeta todos os usuários do terminal.
- [Ver issue](https://github.com/openai/codex/issues/5538)

### 🛠️ Feature Requests prioritários

**8. [OPEN] #12773 — Multi-Window Support for macOS**
- **Por que importa:** 10 comentários, 20👍. feature.request há meses sem implementação.
- [Ver issue](https://github.com/openai/codex/issues/12773)

**9. [OPEN] #10695 — GitHub Fix CI skill: keychain/GH_TOKEN inacessível no sandbox**
- **Por que importa:** Quebra integração CI/CD, core para workflows modernos.
- [Ver issue](https://github.com/openai/codex/issues/10695)

**10. [CLOSED] #12343 — Security: Sandbox permissions wide open on Windows 11**
- **Por que importa:** Implicações de segurança sérias (permissões no perfil inteiro do usuário).
- [Ver issue](https://github.com/openai/codex/issues/12343)

---

## 4. Progresso de PRs Importantes

### 🎯 Goal Mode Stack (completo)

| PR | Descrição | Status |
|----|-----------|--------|
| [#18073](https://github.com/openai/codex/pull/18073) | Foundation: feature flag + token-only goal storage | ✅ |
| [#18074](https://github.com/openai/codex/pull/18074) | App-server API: get/set/clear goals + notificações | ✅ |
| [#18075](https://github.com/openai/codex/pull/18075) | Model tools: get_goal, set_goal, update_goal | ✅ |
| [#18076](https://github.com/openai/codex/pull/18076) | Core runtime: continuation, token accounting, budget stopping | ✅ |
| [#18077](https://github.com/openai/codex/pull/18077) | TUI UX: /goal command, statusline, snapshots | ✅ |

> **Impacto:** Transforma Codex em um sistema orientado a objetivos com persistência e orçamentos de tokens.

### 🔧 Timer & Queue Stack (completo)

| PR | Descrição | Status |
|----|-----------|--------|
| [#17581](https://github.com/openai/codex/pull/17581) | SQLite storage + APIs para timers e mensagens | ✅ |
| [#17578](https://github.com/openai/codex/pull/17578) | Injected messages: XML envelopes + transcript events | ✅ |
| [#17579](https://github.com/openai/codex/pull/17579) | Timer scheduling end-to-end + timer tools | ✅ |
| [#17580](https://github.com/openai/codex/pull/17580) | `codex queue --thread --message` CLI + delivery | ✅ |

### 🌐 Plataformas & Infraestrutura

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#18500](https://github.com/openai/codex/pull/18500) | Suporte `codex app` em macOS Intel + Windows | Resolve #10410 |
| [#18499](https://github.com/openai/codex/pull/18499) | Fix plugin cache panic when cwd unavailable | Estabilidade |
| [#18504](https://github.com/openai/codex/pull/18504) | Rebrand: `guardian_*` → `auto_review` config | Consistência UX |
| [#18502](https://github.com/openai/codex/pull/18502) | Múltiplos cwd filters em `thread/list` | Performance cliente |
| [#18413](https://github.com/openai/codex/pull/18413) | Namespaces em dynamic tools | Extensibilidade |
| [#18441](https://github.com/openai/codex/pull/18441) | Evitar warnings falsos de shell snapshot cleanup | DX |

---

## 5. Tendências de Feature Requests

### 🔥 Padrões emergidos das issues

| Tendência | Evidence | Prioridade |
|-----------|----------|------------|
| **Multi-window / Multi-instance** | #12773 (20👍), #10410 | Alta |
| **Controle de recursos** | #11981 (CPU), #18467 (CPU surge) | Crítica |
| **Integração CI/CD** | #10695 (GH tokens), #12343 (security) | Alta |
| **Config customizável** | #18334 (cwd config), #16501 (approval mode) | Média |
| **Subagent orchestration** | #18105 (read-only main agent), #18513 (delegation) | Média-Alta |
| **Skills configuráveis** | #15149 (multiple skill dirs) | Média |
| **Persistência de goals** | Stack completo merged ✅ | — |

### 📈 Direções estratégicas inferidas

1. **Desktop como primeira classe** — macOS Intel, multi-window, UI hit-testing
2. **TUI/CLI parity** — TUI goal mode, input fix, snapshot behavior
3. **Segurança corporativa** — ACLs no Windows, sandbox permissions, BYOK flows
4. **Developer workflows** — CI/CD skills, git metadata analytics (#17897)

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores recorrentes

| Problema | Impacto | Workaround |
|----------|---------|------------|
| **CPU 100%** no macOS mesmo com 1 agent | Produtividade | Nenhum conhecido |
| **Plugin unavailable** `computer-use@openai-bundled` | Funcionalidade | Set `features.apps = true` |
| **Input desaparece** no TUI CLI | UX terminal | Nenhum |
| **Context overflow** | Tasks longas | Limpar histórico manualmente |
| **ACL corruption** no AppData (Windows) | Estabilidade/Segurança | Não instalar? |
| **Sandbox permissions** wide open (Windows) | Segurança | Await fix |

### 🛠️ APIs e configs a monitorar

- `default_tools_approval_mode` → `auto_review` renaming
- `features.apps = true` toggle
- `~/.codex/config.toml` path de skills
- `.codex/config.toml` location customizável (aberto)
- `mcp_servers.<id>.default_tools_approval_mode` (feature request)

### 🔗 Recursos novos para explorar

- **Goal Mode** — agora disponível com `/goal` no CLI e APIs no app-server
- **`codex queue`** — mensagens externas agendadas
- **Timers persistentes** — automação de long-running tasks
- **Multiple cwd filters** — otimização de thread listing

---

*Relatório gerado automaticamente com base em dados públicos do GitHub. Última atualização: 2026-04-19.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI
## 📅 Data: 19 de abril de 2026

---

## 1. Destaques do Dia

O dia 19 de abril de 2026 foi marcado por intensa atividade no repositório do Gemini CLI, com **37 novos PRs** e **50 issues atualizadas**. A comunidade demonstra foco contínuo em **estabilidade do shell** e **experiência do usuário**, com contribuições significativas para manipulação de processos, throttle de UI e novas funcionalidades de debugging. O trabalho em arquitetura de validação com Zod também ganhou impulso com a participação de contribuidores no programa GSoC 2026.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O time permanece ativo com contribuições em staging, aguardando o próximo ciclo de release.

---

## 3. Issues em Evidência

### 🔴 Prioridade Alta

**1. [#22745 - AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
- **Importância:** Epic que pode revolucionar a navegação de código, permitindo leituras mais precisas de métodos com uma única chamada de ferramenta
- **Comunidade reagiu:** 5 comentários, 1 reação 👍
- **Resumo:** Propõe usar ferramentas AST-aware para reduzir ruído em tokens e alinhar leituras de código

---

**2. [#25166 - Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**
- **Importância:** Problema crítico que afeta a usabilidade diária - comandos simples travam e o CLI fica preso
- **Comunidade reagiu:** 2 comentários, 2 reações 👍
- **Resumo:** Após executar comandos CLI simples, o Gemini permanece "Awaiting user input" mesmo após o comando finalizar

---

**3. [#22323 - Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
- **Importância:** P1 - Esconde interrupções legítimas do agente, comprometendo a confiança nos resultados
- **Comunidade reagiu:** 2 comentários, 2 reações 👍
- **Resumo:** `codebase_investigator` reporta sucesso mesmo quando atinge limite máximo de turns sem análise

---

**4. [#24916 - Gemini CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)**
- **Importância:** Problema recorrente de UX - usuários precisam approving repeatedly the same file
- **Comunidade reagiu:** 3 comentários
- **Resumo:** Instruções "allow" não persistem entre sessões, causando fricção constante

---

### 🟡 Prioridade Média

**5. [#22267 - Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**
- **Importância:** Inconsistência entre Browser Agent e outros agentes - maxTurns ignorado
- **Comunidade reagiu:** 2 comentários
- **Resumo:** AgentRegistry lê configurações corretamente, mas Browser Agent não respeita

---

**6. [#25216 - Gemini failed to open in temporary path A:\\](https://github.com/google-gemini/gemini-cli/issues/25216)**
- **Importância:** Erro específico do Windows com caminhos de drive inválidos
- **Comunidade reagiu:** 1 comentário
- **Resumo:** EISDIR error ao usar `gemini --yolo` no PowerShell com caminhos temporários

---

**7. [#23582 - Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)**
- **Importância:** Melhora coordenação entre agentes principais e subagentes
- **Comunidade reagiu:** 1 comentário, 1 reação 👍
- **Resumo:** Subagentes não sabem se estão em Plan Mode ou Auto-Edit Mode, causando conflitos

---

**8. [#24202 - Running SSH the text is scrambled](https://github.com/google-gemini/gemini-cli/issues/24202)**
- **Importância:** Usuários Linux em cloudtops via SSH ficam com interface inutilizável
- **Comunidade reagiu:** 1 comentário
- **Resumo:** Texto embaralhado quando rodando via SSH em cloudtops Linux

---

**9. [#24470 - Scroll issues with long chats](https://github.com/google-gemini/gemini-cli/issues/24470)**
- **Importância:** Experiência degradada em conversas longas
- **Comunidade reagiu:** 0 comentários
- **Resumo:** Screen flashes e scrollbar jump enquanto navega por chats extensos

---

**10. [#24546 - Helper to detect SSH](https://github.com/google-gemini/gemini-cli/issues/24546)**
- **Importância:** Feature necessária para diagnósticos de problemas SSH
- **Comunidade reagiu:** 0 comentários
- **Resumo:** Necessidade de helper para detectar sessões SSH, complementando #24202

---

## 4. Progresso de PRs Importantes

### 🔧 Correções Críticas

**1. [#25642 - fix(cli): forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/25642)**
- **Autor:** ixchio
- **Impacto:** Processos filhos ficam órfãos quando parent é morto - problema comum em production
- **Descrição:** Adiciona forwarding de SIGTERM, SIGHUP e SIGINT para child processes

---

**2. [#25643 - fix(shell): throttle text output updates to prevent UI jank](https://github.com/google-gemini/gemini-cli/pull/25643)**
- **Autor:** ixchio
- **Impacto:** UI congelava com outputs de alto volume (ex: `npm test` em projetos grandes)
- **Descrição:** Implementa throttling para evitar re-renders excessivos em cada text data event

---

**3. [#25633 - fix(core): record response's modelVersion in session transcript](https://github.com/google-gemini/gemini-cli/pull/25633)**
- **Autor:** nadja-y
- **Impacto:** Telemetria correta por modelo em A/B routing
- **Descrição:** Corrige gravação de modelVersion para incluir chunk do servidor, não pre-request

---

**4. [#25190 - Defense techniques fix](https://github.com/google-gemini/gemini-cli/pull/25190)**
- **Autor:** renuka16032007
- **Impacto:** Segurança contra prompt injections em workflows RAG
- **Descrição:** Adiciona Validation Sandbox e Sanitization Logic para proteger contexto RAG

---

### ✨ Novas Funcionalidades

**5. [#25639 - feat(cli): add /bug-memory command and auto-capture heap snapshot](https://github.com/google-gemini/gemini-cli/pull/25639)**
- **Autor:** Anjaligarhwal
- **Impacto:** Elimina fricção - usuários não precisam mais attach Chrome DevTools manualmente
- **Descrição:** Novo comando `/bug-memory` captura V8 heap snapshot; `/bug` auto-capta quando RSS > 2GB

---

**6. [#25637 - feat(cli): add Machine Hostname to CLI interface](https://github.com/google-gemini/gemini-cli/pull/25637)**
- **Autor:** M-DEV-1
- **Impacto:** Usabilidade para usuários com múltiplas máquinas
- **Descrição:** Adiciona hostname da máquina no footer selection menu

---

**7. [#25625 - fix(cli): preserve legacy auto memory behavior](https://github.com/google-gemini/gemini-cli/pull/25625)**
- **Autor:** jasonmatthewsuhari
- **Impacto:** Backward compatibility para usuários existentes
- **Descrição:** Restaura comportamento de Auto Memory para quem usa `experimental.memoryManager = true`

---

### 🏗️ Melhorias de Infraestrutura

**8. [#25524 - feat(core): add Zod runtime validation schema for ConversationRecord](https://github.com/google-gemini/gemini-cli/pull/25524)**
- **Autor:** HVVSATHWIK (GSoC 2026)
- **Impacto:** Foundation para pipeline determinístico de chat-log-to-eval
- **Descrição:** Adiciona validação Zod em runtime para ConversationRecord

---

**9. [#20668 - Refactor: Eliminate `no-unsafe-return` suppressions](https://github.com/google-gemini/gemini-cli/pull/20668)**
- **Autor:** M-DEV-1
- **Impacto:** Código mais seguro com validação estrutural nativa do TypeScript
- **Descrição:** Remove todas as supressões @typescript-eslint/no-unsafe-return

---

**10. [#25378 - Fix/windows ripgrep eftype](https://github.com/google-gemini/gemini-cli/pull/25378)**
- **Autor:** manas-raj999
- **Impacto:** Funcionalidade de grep quebrada no Windows parabinaries incompatíveis
- **Descrição:** Corrige spawn EFTYPE error quando binary não combina com host architecture

---

## 5. Tendências de Pedidos de Features

### 📊 Patterns Extraídos das Issues

| Categoria | Tendência | Issues Relacionadas |
|-----------|-----------|---------------------|
| **Agent Intelligence** | Melhoria na gestão de ferramentas e memória | #22745, #22819, #22809, #23571 |
| **Shell Stability** | Comandos mais robustos e confiáveis | #25166, #24202, #24546 |
| **Approval/Policy Modes** | Subagents cientes do contexto de execução | #23582, #22267 |
| **Evaluation & Testing** | Behavioral evals mais robustos | #24353, #23897, #23313 |
| **UI/UX Refinements** | Temas, cores, scroll, rendering | #24915, #25218, #24470 |
| **Configuration Flexibility** | Suporte a env vars e type coercion | #25641, #25608, #25634 |
| **Memory Management** | Global vs. project memory routing | #22819, #23925 |

### 🎯 Direções Mais Pedidas

1. **AST-aware tooling** - Ferramentas que entendem estrutura de código (Issue #22745)
2. **Memory routing global/project** - Separar preferências pessoais de configurações de projeto (Issue #22819)
3. **Proactive memory writes** - Main agent chamar memory subagent automaticamente (Issue #22809)
4. **Shell reliability** - Corrigir travamentos e melhorar output streaming (Issues #25166, #25643)
5. **Defensive RAG** - Proteger contra prompt injections (PR #25190)

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Problema | Frequência | Status | Links |
|----------|------------|--------|-------|
| **Processos órfãos ao matar parent** | Alta | PR aberto | [#25642](https://github.com/google-gemini/gemini-cli/pull/25642), [#25605](https://github.com/google-gemini/gemini-cli/pull/25605) |
| **UI freeze com outputs volumosos** | Alta | PR aberto | [#25643](https://github.com/google-gemini/gemini-cli/pull/25643) |
| **Env vars como strings em settings.json** | Média | Múltiplos PRs | [#25641](https://github.com/google-gemini/gemini-cli/pull/25641), [#25634](https://github.com/google-gemini/gemini-cli/pull/25634), [#25608](https://github.com/google-gemini/gemini-cli/pull/25608) |
| **Problemas SSH/cloudtop** | Média | Investigação | [#24202](https://github.com/google-gemini/gemini-cli/issues/24202), [#24546](https://github.com/google-gemini/gemini-cli/issues/24546) |
| **grep_search quebrado no Windows** | Média | PR aberto | [#25378](https://github.com/google-gemini/gemini-cli/pull/25378) |

### 🔧 Demandas Frequentes

1. **Type coercion para configurações** - Zod validation precisa suportar string → boolean/number
2. **Signal forwarding** - Process managers esperam que SIGNALS se propaguem
3. **Throttling de renders** - Evitar React re-renders desnecessários
4. **Heap snapshots automáticos** - Facilitar debugging de memory issues
5. **Compatibilidade SSH** - Detectar e adaptar comportamento para sessões remotas

### 📝 Notas para Contribuidores

- **Issues maintainer-only:** 16 das 30 issues listadas têm标签 🔒, indicando trabalho interno do time
- **GSoC 2026 ativo:** Contribuidor HVVSATHWIK trabalhando em validação Zod (PR #25524)
- **help wanted:** 11 PRs abertos buscam contribuições da comunidade
- **Workstream-rollup:** 22 issues fazem parte de workstreams coordenados

---

## 📈 Resumo Estatístico (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Releases | 0 |
| Issues atualizadas | 50 |
| PRs abertos | 37 |
| Issues P1 (prioridade crítica) | 2 |
| PRs com `help wanted` | 11 |
| Contribuidores únicos (Issues) | 20+ |
| Contribuidores únicos (PRs) | 15+ |

---

*Relatório gerado automaticamente com base nos dados do GitHub do [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Relatório Diário da Comunidade GitHub Copilot CLI
## 📅 Data: 19 de abril de 2026

---

## 1. Destaques do Dia

O dia 19 de abril de 2026 foi marcado por intensa atividade na comunidade do GitHub Copilot CLI, com destaque para **problemas relacionados a modelos GPT-5.4** (especialmente a ausência do nível "xhigh" no seletor de esforço) e **questões de rate limiting** que afetam especialmente usuários Pro+. A comunidade também demonstrou forte interesse em melhorias de UX, como a adição de novos comandos (/ask, /btw) e customização visual. Não foram registradas novas versões ou PRs merged nas últimas 24 horas, indicando um período de avaliação e preparação para próximos releases.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

A versão mais recente remains **v1.0.32**, sem atualizações desde o último período reportado. Desenvolvedores aguardam possíveis correções para os problemas de rate limiting e regressões reportadas.

---

## 3. Issues em Evidência

### 🔴 Issue #2725 — GPT-5.4 Model Picker Oculta "Extra High"
**Link:** [github/copilot-cli#2725](https://github.com/github/copilot-cli/issues/2725)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | daideguchi |
| **Comentários** | 21 |
| **Reações** | 👍 16 |

**Por que importa:** Esta issue revela uma inconsistência crítica entre a UI e a capacidade real do modelo. Usuários relatam que o seletor `/model` para GPT-5.4 exibe apenas 3 níveis de esforço (Low/Medium/High), embora "xhigh" continue funcionando na prática. Isso causa confusão e reduz a utilidade percebida do modelo.

**Reação da comunidade:** Forte engajamento com 16 reações positivas e 21 comentários, indicando que vários usuários enfrentam o mesmo problema. A issue está classificada como `[area:models]`, solicitando atenção da equipe de plataforma.

---

### 🟡 Issue #92 — Enhancement: /ask Mode
**Link:** [github/copilot-cli#92](https://github.com/github/copilot-cli/issues/92)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | jcubic |
| **Comentários** | 9 |
| **Reações** | 👍 9 |

**Por que importa:** A comunidade solicita um modo de "perguntas" dedicado onde o Copilot responde sem executar ações de edição ou comandos shell. Atualmente, mesmo perguntas simples podem resultar em modificações no código, o que pode ser indesejado em muitos workflows.

**Reação da comunidade:** Com 9 meses de idade e interesse consistente, esta é uma das features mais aguardadas. O autor propõe um comando `/ask` dedicado para separar claramente interação consultiva de ações automáticas.

---

### 🔴 Issue #2583 — Copilot Update Command Não Funciona (Windows)
**Link:** [github/copilot-cli#2583](https://github.com/github/copilot-cli/issues/2583)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | znamenap |
| **Comentários** | 8 |
| **Reações** | 👍 0 |

**Por que importa:** Usuários Windows relatam que o comando `copilot update` e `/update` pararam de funcionar desde a versão 1.0.17. Este é um problema de usabilidade significativo para gerenciamento de versões.

**Reação da comunidade:** Issue relativamente nova (11 dias) com reprodução clara do problema via winget. Classificada como `[area:platform-windows, area:installation]`, indicando necessidade de investigação específica para ambiente Windows.

---

### 🟠 Issue #2760 — HTTP Retry Logic para Respostas 429
**Link:** [github/copilot-cli#2760](https://github.com/github/copilot-cli/issues/2760)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | srijan-at-qwertystars |
| **Comentários** | 6 |
| **Reações** | 👍 2 |

**Por que importa:** O CLI apresenta comportamento agressivo de retry ao receber HTTP 429 (Rate Limited), criando loops de 20+ tentativas por minuto. Isso não apenas degrada a experiência do usuário como pode agravar problemas de rate limiting junto ao servidor.

**Reação da comunidade:** Issue recente com proposta de solução estruturada. A comunidade reconhece a necessidade de backoff exponencial e lógica de retry mais inteligente para melhor resiliência.

---

### 🟢 Issue #1723 — /ide Falha no VS Code (macOS)
**Link:** [github/copilot-cli#1723](https://github.com/github/copilot-cli/issues/1723)

| | |
|---|---|
| **Status** | CLOSED |
| **Autor** | Zizaco |
| **Comentários** | 6 |
| **Reações** | 👍 3 |

**Por que importa:** Esta issue foi resolvida! O problema impedia a integração com VS Code em instalações fresh do macOS 26.3 Apple Silicon, exibindo "No active IDE workspaces found". O fechamento indica correção implementada.

**Reação da comunidade:** Resolution bem recebida pela comunidade, especialmente por usuários Apple Silicon que enfrentavam barreiras de integração.

---

### 🔴 Issue #2769 — Weekly Rate Limit Não Reseta (Copilot Pro+)
**Link:** [github/copilot-cli#2769](https://github.com/github/copilot-cli/issues/2769)

| | |
|---|---|
| **Status** | CLOSED |
| **Autor** | yandersr |
| **Comentários** | 5 |
| **Reações** | 👍 2 |

**Por que importa:** Usuário Copilot Pro+ reportou erro de rate limit mesmo antes do reset esperado. Issue foi fechada, sugerindo resolução ou identificação de causa (possível timezone issue relacionado ao reset semanal).

**Reação da comunidade:** Preocupação legítimo de usuários pagantes. A resolução fechada indica atenção da equipe a problemas de billing/limits.

---

### 🟡 Issue #1452 — Suporte para Colar Imagens da Área de Transferência
**Link:** [github/copilot-cli#1452](https://github.com/github/copilot-cli/issues/1452)

| | |
|---|---|
| **Status** | CLOSED |
| **Autor** | rameshreddy-adutla |
| **Comentários** | 3 |
| **Reações** | 👍 0 |

**Por que importa:** Feature request para suportar Ctrl+V/Cmd+V para colar imagens diretamente, além do já existente drag-and-drop. Workflow mais natural para captura de screenshots.

**Reação da comunidade:** Issue fechada indica implementação ou descarte documentado. Melhoria significativa para workflows de screenshots.

---

### 🟡 Issue #2078 — Adicionar Comando /btw
**Link:** [github/copilot-cli#2078](https://github.com/github/copilot-cli/issues/2078)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | mukul-AR |
| **Comentários** | 2 |
| **Reações** | 👍 26 |

**Por que importa:** Alta votação (26 reações) indica desejo da comunidade por comandos estilo "by the way" presentes em outras CLIs de IA. Funcionalidade para interações casuais/auxiliares durante sessões de trabalho.

**Reação da comunidade:** Uma das issues com maior engajamento por reações, demonstrando demanda clara por micro-interações facilitadoras.

---

### 🟠 Issue #2739 — xhigh Reasoning Removido para GPT-5.4 e GPT-5.3-codex
**Link:** [github/copilot-cli#2739](https://github.com/github/copilot-cli/issues/2739)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | dlukt |
| **Comentários** | 2 |
| **Reações** | 👍 4 |

**Por que importa:** Usuários reportam que xhigh foi removido para dois modelos principais. Combina com issue #2725 para revelar problema sistêmico no release 1.0.27 relacionado a níveis de reasoning.

**Reação da comunidade:** Reação forte do autor ("unacceptable!"), alinhando-se com queixa geral sobre redução de capacidades dos modelos de topo.

---

### 🟠 Issue #1954 — XDG_CONFIG_HOME Ignorado (Regression)
**Link:** [github/copilot-cli#1954](https://github.com/github/copilot-cli/issues/1954)

| | |
|---|---|
| **Status** | OPEN |
| **Autor** | DLehenbauer |
| **Comentários** | 2 |
| **Reações** | 👍 4 |

**Por que importa:** Regressão documentada onde `XDG_CONFIG_HOME` parou de ser respeitado desde versão 0.0.421. Impacta usuários Linux que dependem deste padrão para configuração portable.

**Reação da comunidade:** Issue delegada à área `[area:configuration]`, indicando que a correção está no radar da equipe.

---

## 4. Progresso de PRs Importantes

**Nenhum PR foi atualizado ou merged nas últimas 24 horas.**

Este período de baixa atividade de PRs pode indicar:
- Preparação para release de correções
- Ciclo de review em andamento para features pendentes
- Foco em triagem e priorização de issues abertas

Recomenda-se monitorar o repositório para próximos merges, especialmente relacionados aos problemas de rate limiting e modelos reportados.

---

## 5. Tendências de Pedidos de Features

### 🎯 Comandos e Interações

| Tendência | Descrição | Issues Relacionadas |
|---|---|---|
| **Novos comandos** | `/ask`, `/btw`, `/mcp` toggle | #92, #2078, #2805 |
| **Customização de caminhos** | Suporte a paths customizados para skills/prompts/agentes | #2829 |
| **Customização visual** | Temas de cores customizáveis além de auto/dark/light | #2830 |

### 📊 Modelos e Performance

| Tendência | Descrição | Issues Relacionadas |
|---|---|---|
| **Seleção de esforço** | Problemas com níveis de effort (xhigh) para GPT-5.4 | #2725, #2739 |
| **Rate limiting UI** | Melhorias na exibição de limites de uso | #2827, #2828, #2742 |
| **Resets de limits** | Comportamento inconsistente de resets | #2769 |

### 🛠️ Experiência do Usuário

| Tendência | Descrição | Issues Relacionadas |
|---|---|---|
| **Collapsible output** | Toggle para colapsar/expandir output verboso | #2821 |
| **Renderização Markdown** | Melhoria em renderização de tabelas em `/ask-user` | #2826 |
| **Texto CJK** | Correção de wrapping para caracteres asiáticos | #2825 |

### 🔧 Infraestrutura

| Tendência | Descrição | Issues Relacionadas |
|---|---|---|
| **Retry logic** | HTTP retry inteligente para 429 | #2760 |
| **MCP cleanup** | Processos MCP não são terminados ao sair | #2817 |
| **Experimental flags** | Melhor documentação de feature flags | #2820 |

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Críticos

1. **Rate Limiting Aggressivo (HTTP 429)**
   - Issue: [github/copilot-cli#2760](https://github.com/github/copilot-cli/issues/2760)
   - **Recomendação:** Implementar backoff exponencial e limites de retry antes de next release. Desenvolvedores devem considerar workarounds ou configuração de retry manual.

2. **Model Picker GPT-5.4 Inconsistente**
   - Issues: [github/copilot-cli#2725](https://github.com/github/copilot-cli/issues/2725), [github/copilot-cli#2739](https://github.com/github/copilot-cli/issues/2739)
   - **Recomendação:** Verificar se workaround com `/model GPT-5.4 xhigh` funciona manualmente enquanto correção não é released.

3. **XDG_CONFIG_HOME Regression**
   - Issue: [github/copilot-cli#1954](https://github.com/github/copilot-cli/issues/1954)
   - **Recomendação:** Usuários Linux devem usar `COPILOT_HOME` ou `--config-dir` como alternativa temporária.

### 🔧 Regressões Conhecidas

| Regressão | Versão Afetada | Workaround | Issue |
|---|---|---|---|
| Update command (Windows) | 1.0.17+ | Instalar via winget manualmente | [#2583](https://github.com/github/copilot-cli/issues/2583) |
| Effort level config reset | - | Reiniciar sessão após `/model` | [#2823](https://github.com/github/copilot-cli/issues/2823) |
| Agent name visibility | 1.0.31+ | Nenhum | [#2777](https://github.com/github/copilot-cli/issues/2777) |
| Session token expiration | - | Reenviar mensagem | [#2818](https://github.com/github/copilot-cli/issues/2818) |

### 📋 Demanda Frequente

1. **Modo Ask**: Forte demanda por separação entre interação consultiva e ações automáticas (#92)
2. **UI de Rate Limits**: Usuários solicitam indicadores de uso e sugestões durante rate limiting (#2827, #2828)
3. **Customização**: Temas de cores (#2830), caminhos customizados (#2829), e toggle de MCP (#2805)
4. **Suporte a Imagens**: Colar da clipboard (#1452 - CLOSED, mas verificar se implementado)

### 🐛 Bugs de Baixo Impacto Mas Irritantes

- **CJ K text wrapping** (#2825): Caracteres ocupam 2 colunas mas são tratados como 1
- **MCP processes leak** (#2817): Processos ficam "zumbis" após exit
- **Crash on Termux/Android** (#2816): Signal 9 durante thinking phase
- **No active shell session** (#2822): Timeout de inicialização em Pop!_OS

---

## 📊 Resumo Executivo

| Métrica | Valor |
|---|---|
| **Issues Abertas (total)** | 31 |
| **Issues Novas (24h)** | ~12 |
| **Issues Fechadas (24h)** | 5 |
| **PRs Merged (24h)** | 0 |
| **Releases (24h)** | 0 |
| **Issue mais comentada** | #2725 (21 comentários) |
| **Issue mais votada** | #2078 (26 👍) |

---

**Próximos Passos Recomendados:**
1. Monitorar issues #2725 e #2739 para updates sobre GPT-5.4
2. Aguardar release com correções de retry logic
3. Verificar status de implementações de `/ask` mode
4. Testar workarounds para regressões listadas

---

*Relatório gerado automaticamente com base em dados do GitHub copilot-cli em 2026-04-19.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade Kimi Code CLI
## 2026-04-19

---

## 1. Destaques do Dia

O dia foi marcado por intenso movimento no ecossistema de subagentes: contributor **zhuxixi** enviou dois PRs consecutivos (#1933 e #1936) implementando e refinando a lógica de `work_dir` override para subagentes — uma melhoria fundamental para fluxos com git worktree. A comunidade também demonstrou preocupação crescente com o modelo K2.6, pedindo a reintrodução do K2.5, enquanto issues de usabilidade como interatividade, entrada de voz e suporte a sistemas sem permissões administrativas continuam acumulando votos.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O últimotag disponível continua sendo a versão 1.36.0. A equipe de desenvolvimento parece focada em consolidar as contribuições pendientes antes de um próximo lançamento.

---

## 3. Issues em Evidência

### #1070 — Login Failed: Network Unreachable *(CLOSED)*
**Link:** [MoonshotAI/kimi-cli#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070)  
**Relevância:** Issue antiga de conectividade que finalmente foi resolvida. Demonstra que problemas de rede com `auth.kimi.com` foram endereçados.  
**Comunidade:** 5 comentários indicando que era um problema recorrente entre usuários com restrições de rede corporativas.

---

### #1925 — Kimi K2.5 vs K2.6 *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925)  
**Relevância:** Crítica direta ao modelo K2.6: reasoning excessivo reduz criatividade e aumenta alucinações. Pedido para可选切换回 K2.5 com seu system prompt anterior.  
**Comunidade:** 3 comentários; muitos usuários concordam que o "thinking" drowning out creativity.

---

### #1924 — API Bug: Invalid Temperature *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924)  
**Relevância:** Bug crítico no nível da API — `temperature: 0.6` retorna erro, mesmo sendo o único valor permitido. Afeta desenvolvedores usando SDKs OpenAI compatíveis.  
**Comunidade:** 3 comentários; confirmado em múltiplas plataformas (curl, Python SDK, Hermes Agent).

---

### #1931 — Subagent Não Herda CWD *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1931](https://github.com/MoonshotAI/kimi-cli/issues/1931)  
**Relevância:** Quando um agent faz `cd` para um git worktree e dispatcha subagent, este opera no diretório original — quebra fluxos de desenvolvimento em ambientes complexos.  
**Comunidade:** 2 comentários; o PR #1933 já endereça essa questão.

---

### #1672 — Plan Mode Experience *(CLOSED)*
**Link:** [MoonshotAI/kimi-cli#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672)  
**Relevância:** Pedido para integração contínua de planos no chat ao invés de gerar arquivos `.md` separados — UX fragmentada comparada ao Codex.  
**Comunidade:** 1 upvote; issue foi fechada após revisão.

---

### #1873 — Instalação Sem Permissões Admin *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873)  
**Relevância:** Usuários corporativos em Windows Enterprise não podem instalar — versões recentes exigem admin. barreira de adoção em ambientes empresariais.  
**Comunidade:** 1 comentário; issue antiga com upvotes crescentes.

---

### #1923 — Bad Interactivity *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923)  
**Relevância:** Reasoning interno extenso mas respostas finais mínimas — dificulta debugging e review de decisões do agent.  
**Comunidade:** 1 comentário; pedido por streaming incremental de pensamentos.

---

### #1916 — Suporte WSL2 no Win11 *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916)  
**Relevância:** Usuários WSL2 não conseguem completar login — travando na página de assinatura. Issue de compatibilidade significantiva para devs Windows.  
**Comunidade:** 1 comentário; versão 1.31.0 afetada.

---

### #1934 — Voice Input Mode *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934)  
**Relevância:** Feature request inspirado no Claude Code — entrada de voz para brainstorming e prompts longos. Diferencial competitivo.  
**Comunidade:** 0 comentários; sem upvotes ainda.

---

### #1927 — Subagent Infinite Loop *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927)  
**Relevância:** Bug sério — subagent lê o mesmo arquivo centenas de vezes em loop infinito na versão 1.36.0.  
**Comunidade:** 0 comentários; reportado por feng-jin.

---

## 4. Progresso de PRs Importantes

### #1933 — work_dir Override para Subagents *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#PR1933](https://github.com/MoonshotAI/kimi-cli/pull/1933)  
**Descrição:** Adiciona parâmetro opcional `work_dir` ao tool `Agent`, permitindo que subagentes operem em diretórios diferentes do parent. Resolve #1931.  
**Impacto:** Crítico para workflows com git worktree e sessões multi-projeto.

---

### #1936 — Shell CWD e AGENTS.md Context *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#PR1936](https://github.com/MoonshotAI/kimi-cli/pull/1936)  
**Descrição:** Complementa #1933 — o Shell tool deve usar `session.work_dir` ao invés do `work_dir` sobreposto, e AGENTS.md precisa incluir contexto correto.  
**Impacto:** Refinamento técnico que consolida a arquitetura de subagentes.

---

### #1935 — updatedInput para PreToolUse Hooks *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#PR1935](https://github.com/MoonshotAI/kimi-cli/pull/1935)  
**Descrição:** Adiciona suporte a `hookSpecificOutput.updatedInput` no hook PreToolUse — permite reescrever comandos transparentemente. Apenas 34 linhas.  
**Impacto:** Extensibilidade para ferramentas de análise estática e rewrite rules.

---

### #1932 — Refinar Yolo Scope *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#PR1932](https://github.com/MoonshotAI/kimi-cli/pull/1932)  
**Descrição:** Corrige `--yes`/yolo mode para não auto-aprovar planos de revisão, separando aprovações operacionais de interações de intent.  
**Impacto:** UX mais segura em modo automatizado; preserva checkpoints de revisão.

---

### #1928 — Evitar Replay de Tool Calls Grandes *(OPEN)*
**Link:** [MoonshotAI/kimi-cli#PR1928](https://github.com/MoonshotAI/kimi-cli/pull/1928)  
**Descrição:** Corrige two places reenviando payloads inteiros de tool calls a cada `ToolCallProgress` update — causa lag em writes de arquivos grandes.  
**Impacto:** Performance significativa para projetos com arquivos extensos.

---

### #1917 — Revert Anthropic Thinking Effort *(CLOSED)*
**Link:** [MoonshotAI/kimi-cli#PR1917](https://github.com/MoonshotAI/kimi-cli/pull/1917)  
**Descrição:** Reverte commits que adicionaram níveis xhigh/max de thinking effort sem PR review — boa governança de código.  
**Impacto:** Manutenção de standards de código; prepara terreno para feature mais madura.

---

## 5. Tendências de Pedidos de Features

| Categoria | Frequência | Exemplos |
|-----------|------------|----------|
| **Model Control** | Alta | #1925 (K2.5 vs K2.6), requests por controles de temperature |
| **Sistema de Subagentes** | Alta | #1931, #1936, #1927 (loop bug) |
| **UX/Interatividade** | Média-Alta | #1923 (streaming de reasoning), #1934 (voice input) |
| **Compatibilidade** | Média | #1873 (no-admin install), #1916 (WSL2) |
| **Enterprise Features** | Emergente | #1930 (Professional Database) |

**Direção predominante:** A comunidade busca maior controle sobre modelos, melhorias em interatividade em tempo real, e suporte a ambientes corporativos restritivos.

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Bugs Críticos
- **#1924** — API retorna erro para `temperature: 0.6` mesmo sendo o único valor válido
- **#1927** — Subagent entra em loop infinito lendo o mesmo arquivo centenas de vezes

### 🟡 Dores Recorrentes
- **Compatibilidade WSL2** (#1916) — login trava para usuários Windows/WSL2
- **Permissões Administrativas** (#1873) — bloqueia instalação em PCs corporativos
- **Model Selection** (#1925) — usuários querem rollback ou escolha de modelo

### 🟢 Oportunidades
- **Voice Input** (#1934) — feature diferenciadora ainda sem concorrentes diretos
- **Hook System** (#1935) — extensibilidade para análise estática
- **Subagent work_dir** (#1933, #1936) — arquitetura em maturação rápida

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-19.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Relatório Diário da Comunidade OpenCode — 2026-04-19

---

## 1. Destaques do Dia

O dia foi marcado por intenso.activity de manutenção e correções, com destaque para PRs críticos que abordam travamentos do TUI e problemas de renderização no macOS/Windows. A comunidade está ativamente propondo melhorias de usabilidade, como comandos vim no prompt e navegação de diretórios durante sessões. Um problema recorrente com a versão 1.4.12 (Homebrew 404) está afetando usuários que tentam atualizar.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último release estável disponível continua sendo a versão 1.4.11, visto que a tentativa de release 1.4.12 apresentou problemas de distribuição (Homebrew formula retornando 404).

---

## 3. Issues em Evidência

### 🔴 Críticos (alta urgência)

| # | Título | Status | Comentários | Importância |
|---|--------|--------|-------------|-------------|
| [5485](https://github.com/anomalyco/opencode/issues/5485) | OpenCode não inicia mais | OPEN | 49 | Bug crítico - 4+ meses sem resolução |
| [23315](https://github.com/anomalyco/opencode/issues/23315) | Sem release para v1.4.12 | OPEN | 7 | 10 👍 - Impacta atualização via Homebrew |
| [22630](https://github.com/anomalyco/opencode/issues/22630) | Janela em branco no macOS 26.4 (Tahoe) | OPEN | 10 | Bug de renderização no novo macOS beta |

### 🟡 Significativos

| # | Título | Status | Comentários | Área |
|---|--------|--------|-------------|------|
| [9281](https://github.com/anomalyco/opencode/issues/9281) | Adicionar rastreamento de uso via `/usage` | OPEN | 7 | Feature request com 21 👍 |
| [23211](https://github.com/anomalyco/opencode/issues/23211) | 1.4.7+ falha em renderizar UI e ler sessão | OPEN | 7 | Perda de config e sessões |
| [16876](https://github.com/anomalyco/opencode/issues/16876) | Logs crescem para gigabytes! | OPEN | 5 | Performance crítica |
| [8601](https://github.com/anomalyco/opencode/issues/8601) | Erro unknown certificate verification | OPEN | 21 | SSL/proxy no Windows |
| [20859](https://github.com/anomalyco/opencode/issues/20859) | Subagent models ignorados com GitHub Copilot | OPEN | 7 | Billing incorreto |
| [4672](https://github.com/anomalyco/opencode/issues/4672) | GitHub Agent travando em "Sending Message..." | OPEN | 20 | Integração GitHub |
| [23347](https://github.com/anomalyco/opencode/issues/23347) | Homebrew formula v1.4.12 retorna 404 | CLOSED | 2 | Corrigido(?) |

**Análise:** A comunidade demonstra preocupação especial com estabilidade de inicialização (#5485) e problemas de renderização cross-platform. O issue #9281 sobre `/usage` acumula forte apoio (21👍), indicando demanda real por controle de gastos com modelos.

---

## 4. Progresso de PRs Importantes

| # | PR | Status | Tipo | Descrição |
|---|-----|--------|------|-----------|
| [12679](https://github.com/anomalyco/opencode/pull/12679) | feat(tui): vim motions in prompt input | OPEN | Feature | Adiciona movimentos Vim ao prompt (toggle via `tui.vim: true`) |
| [23360](https://github.com/anomalyco/opencode/pull/23360) | feat(tui): add `/cd` command | OPEN | Feature | Navegação de diretório em tempo de execução |
| [23355](https://github.com/anomalyco/opencode/pull/23355) | fix: don't hang TUI when reattaching to deleted session | OPEN | Bug Fix | Corrige hang ao reconectar a sessão deletada |
| [23356](https://github.com/anomalyco/opencode/pull/23356) | fix(core): prevent auto-updating session timestamps | OPEN | Bug Fix | Evita atualização de timestamps em mudanças de metadata |
| [9545](https://github.com/anomalyco/opencode/pull/9545) | feat(usage): unified usage tracking with auth refresh | OPEN | Feature | Implementação completa do `/usage` com refresh automático |
| [18767](https://github.com/anomalyco/opencode/pull/18767) | feat(app): Mobile Touch Optimization | OPEN | Feature | Otimização para dispositivos touch |
| [22079](https://github.com/anomalyco/opencode/pull/22079) | feat(app): markdown preview/source toggle | OPEN | Feature | Toggle Preview/Source para arquivos .md |
| [23051](https://github.com/anomalyco/opencode/pull/23051) | fix(tool): use relative path for read permission patterns | CLOSED | Bug Fix | Corrige avaliação de permissões com paths absolutos |
| [23352](https://github.com/anomalyco/opencode/pull/23352) | fix(provider): gate zai/zhipuai thinking injection | OPEN | Bug Fix | Restaura GLM variants e corrige resposta vazia |
| [23357](https://github.com/anomalyco/opencode/pull/23357) | fix(plugin): opencode run waits for plugins to finish | OPEN | Bug Fix | Garante wait por plugins antes de encerrar |

**Destaque:** O PR #9545 implementa uma feature aguardada há meses (3+ meses em desenvolvimento desde #9281), adicionando visibilidade de limites de uso para Codex, Copilot e Claude.

---

## 5. Tendências de Pedidos de Features

Com base nas issues e PRs analisados, as seguintes direções dominam os pedidos da comunidade:

### 📱 Experiência Mobile/Touch
- **PR #18767**: Otimização completa para dispositivos móveis, preservando experiência desktop
- **Issue #19174**: Suporte PWA básico solicitado

### ⌨️ Ergonomia e Produtividade
- **Issue #1764 / PR #12679**: Movimentos Vim no prompt (em desenvolvimento há ~2 meses)
- **Issue #23358 / PR #23360**: Comando `/cd` para troca de diretório em runtime
- **PR #22079**: Toggle Preview/Source para arquivos Markdown

### 💰 Gestão de Custos
- **Issue #9281 / PR #9545**: Rastreamento unificado de uso (`/usage`) - **21👍**
- Visualização de rate limits por provider

### 🔒 Segurança e Estabilidade
- **Issue #7173**: Preocupação com execução de lifecycle scripts via `.opencode/package.json`
- **Issue #23326**: Electron preload expondo API sem handler principal

### 🔌 Provedores e Modelos
- **Issue #23327**: LM Studio provider deveria auto-detectar modelos via `/v1/models`
- Melhorias em autenticação e billing de subagents

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔥 Dores Recorrentes Identificadas

| Categoria | Problema | Issues Relacionadas |
|-----------|----------|---------------------|
| **SSL/Proxy** | Erros de certificado em Windows com proxies | [#8601](https://github.com/anomalyco/opencode/issues/8601), [#21837](https://github.com/anomalyco/opencode/issues/21837) |
| **Renderização macOS** | Janela em branco no macOS 26.4 Tahoe | [#22630](https://github.com/anomalyco/opencode/issues/22630) |
| **Logs** | Crescimento descontrolado de logs (GB) | [#16876](https://github.com/anomalyco/opencode/issues/16876) |
| **Inicialização** | Falha ao iniciar sem motivo aparente | [#5485](https://github.com/anomalyco/opencode/issues/5485) |
| **TUI Hang** | Travamento ao reconectar sessões deletadas | [#23344](https://github.com/anomalyco/opencode/issues/23344) |
| **Sessões** | Perda de config e histórico após update | [#23211](https://github.com/anomalyco/opencode/issues/23211) |

### ⚡ Funcionalidades Mais Demandadas

1. **Rastreamento de uso por provider** — 21👍, em implementação
2. **Movimentos Vim** — feature request antigo, PR em progresso
3. **Navegação de diretórios (`/cd`)** — PR recém-submetido
4. **Preview Markdown** — Feature de produtividade
5. **Auto-detecção de modelos LM Studio** — Integração com provedores

### 🎯 Recomendações para Contribuidores

- **PRs abertos com boa descrição** (`#23360`, `#23355`) estão progredindo rapidamente
- Issues de **performance de logs** (#16876) representam dívida técnica significativa
- Bugs de **renderização cross-platform** (macOS/Windows) têm baixa taxa de resolução
- A **comunidade valoriza** integrações com provedores (LM Studio, GitHub Copilot)

---

*Relatório gerado em 2026-04-19 com base em 50 issues e 50 PRs*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Relatório Diário da Comunidade Pi — 2026-04-19

## 1. Destaques do Dia

O dia foi marcado por uma atividade intensa de manutenção e correções críticas. A comunidade fechou **17 PRs** e diversos issues, com destaque para o suporte completo à família Claude 4.7 (Opus, Sonnet, Haiku), a correção de crashes causados por grandes saídas de ferramentas no Node 25, e melhorias no cursor do TUI para melhor integração com tmux. Também houve progresso significativo no provedor Amazon Bedrock com dois PRs em andamento. Notably, uma issue aberta sobre MCP tools com `schema` meta-declarações está gerando discussão ativa sobre compatibilidade com Google Cloud Code Assist.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O repositório não publicou novas versões desde o último período reportado.

---

## 3. Issues em Evidência

### 3.1 [#3214 — Cloud code assist API returns 400 error due to schema meta-declarations](https://github.com/badlogic/pi-mono/issues/3214)
**Por que importa:** Quando usando o provedor antigravity/Google Cloud Code Assist com MCP tools, chamadas de ferramentas são rejeitadas com erro 400. O problema está em campos `$schema` e outras meta-declarações nos parâmetros das ferramentas jcodemunch. Este é um blockers para workflows que dependem de MCP tools com provedores específicos.

**Reação da comunidade:** 9 comentários, indicando discussion técnica ativa. O autor está buscando root cause e possível solução no lado do Pi.

---

### 3.2 [#3005 — Make "UPDATE AVAILABLE" message toggleable](https://github.com/badlogic/pi-mono/issues/3005)
**Por que importa:** Usuários em setups complexos (como NixOS) não podem simplesmente rodar `npm i -g` e querem desabilitar a mensagem amarela de atualização. A issue solicita incluir isso na configuração "Quiet startup".

**Reação da comunidade:** 8 comentários, 2 👍. closed com resolução adotada.

---

### 3.3 [#3299 — Add "max" thinking level for Opus 4.7's five-rung API](https://github.com/badlogic/pi-mono/issues/3299)
**Por que importa:** A ladder de thinking do Pi precisa sincronizar com a API de cinco níveis do Opus 4.7. A issue pede adicionar `max` no topo da ladder existente (`off / minimal / low / medium / high / xhigh / max`).

**Reação da comunidade:** 7 comentários. closed — funcionalidade implementada.

---

### 3.4 [#3372 — pi can apparently no longer work with Claude subscription](https://github.com/badlogic/pi-mono/issues/3372)
**Por que importa:** Usuários com assinatura OpenAI/Codex Business relataram problemas de compatibilidade. Este é um blocker de experiência crítico para novos usuários.

**Reação da comunidade:** 6 comentários. closed.

---

### 3.5 [#3344 — Aborted tool calls corrupt conversation state](https://github.com/badlogic/pi-mono/issues/3344)
**Por que importa:** Abortar pi (Ctrl+C) durante uma tool call deixa a conversa permanentemente inutilizável, falhando com erro sobre `tool_use` ids sem `tool_result` correspondentes. Problema sério de estabilidade.

**Reação da comunidade:** 6 comentários. closed — correção implementada.

---

### 3.6 [#3208 — Feature Request: Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208)
**Por que importa:** Permite que modelos definam seus próprios níveis de thinking em `models.json`, fazendo `Shift+Tab` ciclar apenas pelos níveis suportados. Melhora UX significativamente.

**Reação da comunidade:** 4 comentários, **6 👍** — alta aprovação da comunidade. Issue aberta, aguardando implementação.

---

### 3.7 [#3376 — RangeError: Invalid array length in sanitizeBinaryOutput on Node 25](https://github.com/badlogic/pi-mono/issues/3376)
**Por que importa:** `sanitizeBinaryOutput()` usa `Array.from(str)` que falha com `RangeError` em strings muito grandes no Node 25.9.0, crashando a renderização de ferramentas.

**Reação da comunidade:** 2 comentários. Issue aberta, com PR #3386 relacionado já fechado corrigindo o problema.

---

### 3.8 [#3357 — Official local LLM provider extension](https://github.com/badlogic/pi-mono/issues/3357)
**Por que importa:** Solicita buscar lista de modelos dinamicamente de `{baseUrl}/models`, facilitando integração com llama.cpp, Ollama e LM Studio. Melhora suporte a provedores locais.

**Reação da comunidade:** 3 comentários. Issue aberta.

---

### 3.9 [#3390 — docs: clarify that /session shows the current session ID](https://github.com/badlogic/pi-mono/issues/3390)
**Por que importa:** Documentação do `/session` não deixa claro que ele mostra o session ID atual. Usuários não sabem usar `--session <id>` ou `--fork <id>` corretamente.

**Reação da comunidade:** 1 comentário. PR #3389 relacionado já fechou a issue.

---

### 3.10 [#3401 — Add option to hide Anthropic subscription warning](https://github.com/badlogic/pi-mono/issues/3401)
**Por que importa:** Usuários com assinatura Anthropic veem warnings de uso em cada startup. A warning diz que o uso vem do extra-usage, não dos limites do plano, mas é irritante para quem já sabe.

**Reação da comunidade:** 1 comentário. closed.

---

## 4. Progresso de PRs Importantes

### 4.1 [#3402 — fix(amazon-bedrock): pass model.baseUrl as endpoint to BedrockRuntimeClient](https://github.com/badlogic/pi-mono/pull/3402)
**Resumo:** Corrige `BedrockRuntimeClient` para usar `model.baseUrl` como endpoint, habilitando VPC endpoints, proxies e custom routing. Antes, custom endpoints eram silenciosamente ignorados.

**Status:** ABERTO — aguardando review.

---

### 4.2 [#3400 — feat(amazon-bedrock): conditionally omit maxTokens from inferenceConfig](https://github.com/badlogic/pi-mono/pull/3400)
**Resumo:** Evita envio desnecessário de `maxTokens` no `inferenceConfig` quando não configurado, eliminando desperdício de quota em endpoints Bedrock que fazem reservation agressiva de tokens.

**Status:** ABERTO — aguardando review.

---

### 4.3 [#3375 — Extend Fork to Support Latest Message](https://github.com/badlogic/pi-mono/pull/3375)
**Resumo:** Permite fork no topo da conversa (posição atual), além das posições anteriores. Implementado sem novo comando/event callback, mantendo compatibilidade com extensões.

**Status:** CLOSED ✅

---

### 4.4 [#3393 — feat(ai): add Alibaba/Qwen prompt caching via cache_control format](https://github.com/badlogic/pi-mono/pull/3393)
**Resumo:** Adiciona suporte a prompt caching da Alibaba (mesmo mecanismo do Anthropic) com novo campo `cacheControlFormat` em `OpenAICompletionsCompat`.

**Status:** CLOSED ✅ — fecha #3392.

---

### 4.5 [#3386 — fix(coding-agent): prevent large-output sanitize/render crashes](https://github.com/badlogic/pi-mono/pull/3386)
**Resumo:** Substitui `Array.from()` em `sanitizeBinaryOutput()` por code-unit scanner que preserva surrogate pairs válidos, remove lone surrogates/control chars, e evita alocação por caractere em strings muito grandes.

**Status:** CLOSED ✅

---

### 4.6 [#3382 — feat(ai): add Claude 4.7 full family support and fix temperature handling](https://github.com/badlogic/pi-mono/pull/3382)
**Resumo:** Adiciona Sonnet 4.7 e Haiku 4.7 ao suporte de adaptive thinking. Todos os modelos 4.7 rejeitam `temperature`, `top_p`, `top_k` com extended thinking desabilitado, causando 400 errors.

**Status:** CLOSED ✅

---

### 4.7 [#3381 — feat(anthropic): add full Claude 4.7 family support](https://github.com/badlogic/pi-mono/pull/3381)
**Resumo:** Complementar ao #3382, adiciona suporte completo da família Claude 4.7 no provedor Anthropic, com temperature stripping para todos os modelos 4.7.

**Status:** CLOSED ✅

---

### 4.8 [#3379 — feat(tui): hide cursor when terminal loses focus](https://github.com/badlogic/pi-mono/pull/3379)
**Resumo:** Implementa DECSET 1004 focus reporting para esconder o cursor de software quando o terminal ou pane tmux perde foco, melhorando integração com múltiplos panes.

**Status:** CLOSED ✅ — fecha #3380.

---

### 4.9 [#3377 — fix(coding-agent): detect Windows pnpm global installs under .pnpm](https://github.com/badlogic/pi-mono/pull/3377)
**Resumo:** Corrige `detectInstallMethod()` no Windows para detectar corretamente instalações pnpm globais que contêm `\.pnpm\`, evitando instruções incorretas de update (npm vs pnpm).

**Status:** CLOSED ✅ — fecha #3378.

---

### 4.10 [#3345 — feat(agent,coding-agent): per-tool executionMode override](https://github.com/badlogic/pi-mono/pull/3345)
**Resumo:** Adiciona `executionMode` opcional na definição de ferramentas para forçar execução sequencial por ferramenta, resolvendo issues de ferramentas dependentes que não podem paralelizar.

**Status:** CLOSED ✅

---

## 5. Tendências de Pedidos de Features

Analisando as issues abertas e fechadas, emergem as seguintes direções mais solicitadas pela comunidade:

### 5.1 **Suporte a Provedores Locais/LLM Customizados**
Issues como #3357 solicitam integração mais robusta com provedores locais (Ollama, llama.cpp, LM Studio). A comunidade quer buscar modelos dinamicamente de `{baseUrl}/models` para facilitar configurações customizadas.

### 5.2 **Configurabilidade de UX**
Múltiplas requests pedindo toggle para mensagens de update (#3005), warnings de assinatura (#3401), e níveis de thinking customizados por modelo (#3208). Usuários querem controle granular sobre a interface.

### 5.3 **Melhorias em Compatibilidade de Modelos**
Suporte a novos modelos (Claude 4.7 family — #3382, #3381), prompt caching para diferentes provedores (#3393), e alinhamento de comportamentos entre `openai-completions` e `openai-responses` (#3186).

### 5.4 **Aliases e Customização de Comandos**
Solicitações para adicionar aliases a comandos do agent (#3395), bind de slash commands em keybindings.json (#3216), e melhorias na documentação de comandos existentes (#3390).

### 5.5 **Robustez e Estabilidade**
Correções de crashes com Node 25 (#3376, #3383), conversas corrompidas após abort (#3344), e tratamento defensivo de usage fields após compaction (#3388).

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 **Problemas Críticos Ativos**

1. **[#3214] Erro 400 com Google Cloud Code Assist + MCP tools**
   - Afeta workflows com provedores antigravity que usam schema meta-declarações
   - Status: ABERTO — requer investigação e possível fix no parsing de parâmetros MCP

2. **[#3342] Compaction falha com GPT-5 models**
   - Bug ao enviar `reasoning: none` em `generateTurnPrefixSummary()`
   - Status: ABERTO — relacionado a #3060 e #3238

3. **[#3384] pi-web routing custom provider através de OpenRouter**
   - Modelos configurados em `~/.pi/agent/models.json` com provider direto são redirecionados para OpenRouter
   - Status: ABERTO — bug de roteamento no pi-web

### 🟡 **Dores Recorrentes Reportadas**

4. **Suporte a diferentes gerenciadores de pacotes no Windows**
   - `detectInstallMethod()` falha em detectar pnpm global installs corretamente
   - Já corrigido em #3377, mas indica necessidade de testes mais abrangentes

5. **Integração com terminais alternativos (Windows Terminal, tmux)**
   - Backspace/Delete não funcionam corretamente (#2733)
   - Escape codes de teclas de mídia causam garbage input (#3391)
   - Cursor de software visível em panes sem foco (#3380) — corrigido em #3379

6. **Renderização de texto internacionalizado**
   - CJK markdown emphasis renderiza literalmente em alguns casos (#3353)

### 🟢 **Oportunidades de Contribuição**

7. **Provedor Amazon Bedrock** — dois PRs abertos (#3402, #3400) precisam de review

8. **Feature: Custom Thinking Levels per Model** (#3208) — 6 👍, aguardando implementação

9. **Documentação** — Issues de documentação estão sendo resolvidas rapidamente (3 PRs de docs fechados)

---

*Relatório gerado em 2026-04-19 com dados do repositório [badlogic/pi-mono](https://github.com/badlogic/pi-mono).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Diário da Comunidade Qwen Code

**Data:** 2026-04-19  
**Repositório:** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Destaques do Dia

O Qwen Code enfrentou uma onda de problemas de autenticação após a descontinuação do tier gratuito OAuth em 15 de abril, com múltiplos usuários reportando erros 401 despite login bem-sucedido. A equipe respondeu rapidamente com PRs para substituir a autenticação OAuth por alternativas (Coding Plan, API Keys) e resolver issues críticas de input lag e estabilidade. A comunidade demonstra engajamento intenso com 50 PRs atualizados e 30 issues relevantes nas últimas 24h.

---

## 2. Lançamentos

### v0.14.5-nightly.20260419.a623655c8

Release noturna com melhorias incrementais:

- **ACP Hooks:** Suporte completo a hooks para integração ACP ([#3248](https://github.com/QwenLM/qwen-code/pull/3248))
- **Compact Mode:** Otimização de UX com atalhos, sincronização de settings e melhorias de segurança ([#3100](https://github.com/QwenLM/qwen-code/pull/3100))
- **HTTP Hooks:** Implementação de hooks HTTP para automação de workflows

---

## 3. Issues em Evidência

### 🔴 #3203 — Ajuste na Política do Tier Gratuito OAuth
**Status:** ABERTA | **Comentários:** 97 | **Criação:** 2026-04-13  
**Link:** [Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203)

Proposta polêmica para reduzir a quota gratuita de 1.000 para 100 requisições/dia e encerrar completamente o tier gratuito em 20 de abril. A comunidade reagiu intensamente com 97 comentários — maior engajamento do período. Issue crucial para entender o futuro modelo de negócio da plataforma.

---

### 🔴 #2395 — Input Lag de 5+ Segundos
**Status:** FECHADA | **Prioridade:** P1 | **Criação:** 2026-03-15  
**Link:** [Issue #2395](https://github.com/QwenLM/qwen-code/issues/2395)

Bug crítico de performance no chat window causando delay de 5+ segundos ao digitar. Afetava Windows 11 com extensões VSCode. Resolvida após amplo diagnóstico — exemplo de resolução eficaz de problema P1.

---

### 🟡 #3427 — Erro de Autenticação Após Login Bem-Sucedido
**Status:** ABERTA | **👍:** 1 | **Criação:** 2026-04-18  
**Link:** [Issue #3427](https://github.com/QwenLM/qwen-code/issues/3427)

O login reports sucesso, mas todas as requisições retornam 401. Usuário no macOS com versão 0.14.4. Sintoma recorrente após descontinuação do OAuth free tier.

---

### 🟡 #3417 — API Key Não Persiste Após Reinício
**Status:** ABERTA | **Criação:** 2026-04-18  
**Link:** [Issue #3417](https://github.com/QwenLM/qwen-code/issues/3417)

Usuário precisa re-inserir API key a cada reinício, embora ela esteja salva em `~/.qwen/settings.json`. Qwen não está lendo o arquivo de configuração corretamente. Afeta principalmente usuário da API Bailian.

---

### 🟡 #3384 — Inclusão de LLM Local OpenAI-Compatible
**Status:** ABERTA | **👍:** 1 | **Criação:** 2026-04-17  
**Link:** [Issue #3384](https://github.com/QwenLM/qwen-code/issues/3384)

Usuário tenta usar Qwen3.6-35B-A3B via VLLM em localhost:8000 mas enfrenta problemas de configuração. Demonstra demanda por melhor documentação para modelos locais e OpenAI-compatible APIs.

---

### 🟡 #3382 — Documentação de Autenticação Desatualizada
**Status:** ABERTA | **Criação:** 2026-04-17  
**Link:** [Issue #3382](https://github.com/QwenLM/qwen-code/issues/3382)

Feedback pedindo atualização da página de documentação de autenticação, pois informações sobre OAuth free tier estão incorretas após descontinuação em 15 de abril. Impacta onboarding de novos usuários.

---

### 🟡 #3413 — Provider Fireworks Não Disponível em /auth
**Status:** ABERTA | **Criação:** 2026-04-18  
**Link:** [Issue #3413](https://github.com/QwenLM/qwen-code/issues/3413)

Provider Fireworks listado no README mas não aparece no comando `/auth`. Usuários migrando do OAuth free tier precisam de alternativas — brecha na documentação causa confusão.

---

### 🟡 #2862 — Startup Fica Preso em "Initializing..." com Checkpointing
**Status:** ABERTA | **Criação:** 2026-04-03  
**Link:** [Issue #2862](https://github.com/QwenLM/qwen-code/issues/2862)

Feature de checkpointing causa hang infinito na tela "Initializing...". Usuários precisam force-quit para recuperar. Desabilitar feature restaura funcionamento normal. Afeta produtividade de desenvolvedores que usam checkpointing.

---

### 🟡 #3273 — Mensagens do Chat em Ordem Incorreta
**Status:** ABERTA | **Criação:** 2026-04-14  
**Link:** [Issue #3273](https://github.com/QwenLM/qwen-code/issues/3273)

Perguntas aparecem ACIMA da resposta anterior em vez de abaixo. Bug de UX frustrante que quebra flow de conversação. Usuário reporta versão 0.14.4.

---

### 🟡 #3425 — Problema Recorrente de 401 Após Login
**Status:** ABERTA | **👍:** 1 | **Criação:** 2026-04-18  
**Link:** [Issue #3425](https://github.com/QwenLM/qwen-code/issues/3425)

Extension mostra "Successfully logged in" mas retorna 401 em toda requisição. Login sempre reporta sucesso, mas nenhuma mensagem pode ser enviada. Padrão diferente da issue #3427 (mesmo problema, usuários diferentes).

---

## 4. Progresso de PRs Importantes

### 🚀 #3115 — Commit Attribution com Rastreamento por Arquivo
**Autor:** wenshao | **Status:** ABERTO  
**Link:** [PR #3115](https://github.com/QwenLM/qwen-code/pull/3115)

Feature para distinguir contribuições AI de humanas no git history. Resolve requisitos de compliance para projetos open-source e empresas. Impacto: rastreabilidade de IA em código.

---

### 🚀 #3398 — Substituir OAuth por Coding Plan/API Key Provider
**Autor:** yiliang114 | **Status:** ABERTO  
**Link:** [PR #3398](https://github.com/QwenLM/qwen-code/pull/3398)

Substitui fluxo OAuth descontinuado por setup interativo suportando Coding Plan, Alibaba Standard API Key e Custom API Key. Resposta direta à crise de autenticação. Prioridade alta após descontinuação do free tier.

---

### 🚀 #3318 — API Preconnect para Reduzir Latência
**Autor:** doudouOUC | **Status:** ABERTO  
**Link:** [PR #3318](https://github.com/QwenLM/qwen-code/pull/3318)

Envia request HEAD no startup para aquecer conexão TCP+TLS. Economia de 100-200ms na primeira chamada real. Smart skip para ambientes com proxy.

---

### 🚀 #3155 — Mensagens de Progresso na Execução de Tools
**Autor:** wenshao | **Status:** ABERTO  
**Link:** [PR #3155](https://github.com/QwenLM/qwen-code/pull/3155)

Adiciona tempo elapsed por tool e indicador de progresso durante execuções longas (ex: npm install). Reduz Ctrl+C prematura e melhora UX de CLI.

---

### 🚀 #3156 — Padrões Perigosos no YOLO Auto-Approve
**Autor:** wenshao | **Status:** ABERTO  
**Link:** [PR #3156](https://github.com/QwenLM/qwen-code/pull/3156)

Remove padrões perigosos do auto-approve do YOLO mode. Previne execuções como `rm -rf /` ou `curl` malicious sem confirmação. Melhora segurança sem sacrificar friction reduction.

---

### 🚀 #3236 — Loop Detection Aprimorado
**Autor:** euxaristia | **Status:** ABERTO  
**Link:** [PR #3236](https://github.com/QwenLM/qwen-code/pull/3236)

Detecta loops de retry de validação de tools e injeta stop directive. Inclui checks de stagnation e validação-retry. Corrige erros EAGAIN em PTY.

---

### 🚀 #3428 / #3431 — /clear Dismiss Diálogo /btw
**Autor:** yiliang114 & sharziki | **Status:** ABERTO  
**Links:** [#3428](https://github.com/QwenLM/qwen-code/pull/3428) | [#3431](https://github.com/QwenLM/qwen-code/pull/3431)

Corrige bug onde `/clear` resetava histórico mas deixava UI de `/btw` visível. Dois PRs paralelos resolvendo mesmo problema — comunidade ativa neste bug.

---

### 🚀 #2592 — Comando /export para VSCode Companion
**Autor:** yiliang114 | **Status:** ABERTO  
**Link:** [PR #2592](https://github.com/QwenLM/qwen-code/pull/2592)

Adiciona suporte nativo `/export` na extensão VSCode para exportar sessão atual com paridade CLI e UX nativo de save/open do IDE.

---

### 🚀 #2551 — Plan Mode Toggle e UI de Aprovação
**Autor:** yiliang114 | **Status:** ABERTO  
**Link:** [PR #2551](https://github.com/QwenLM/qwen-code/pull/2551)

Habilita Plan Mode na extensão VSCode com ciclo de approval modes (plan → default → auto-edit → yolo → plan) e Tab shortcut para cycling.

---

### 🚀 #3319 — Captura de Input Inicial no REPL (FECHADO)
**Autor:** doudouOUC | **Status:** FECHADO  
**Link:** [PR #3319](https://github.com/QwenLM/qwen-code/pull/3319)

Bufferiza input durante initialization do REPL (200-500ms) e replay após KeypressProvider mounted. Previne keystrokes perdidas antes do REPL estar pronto. Fecha issue #3224.

---

## 5. Tendências de Pedidos de Features

### 🔐 Migração de Autenticação
A descontinuação do OAuth free tier em 15 de abril gerou demanda massiva por:
- **Alternativas viáveis:** Coding Plan, Alibaba API, OpenRouter, Fireworks
- **Documentação atualizada:** Página de auth está incorreta segundo usuários
- **Provider Fireworks:** Listado no README mas não disponível em `/auth`

### 🎨 Melhorias de UX/UI
- Mensagens de chat em ordem incorreta
- Shell output width overflow
- Early input capture (resolvido)
- Compact mode UX optimization (implementado)

### ⚡ Performance
- Input lag 5+ segundos (resolvido)
- Startup hangs com checkpointing
- Latência na primeira chamada de API (API preconnect em progresso)
- Loop detection aprimorado

### 🔧 Integrações
- Suporte a LLM local OpenAI-compatible
- MCP config via CLI
- Zed.app detection no macOS
- Commit attribution tracking

### 🛡️ Segurança
- Stripping de padrões perigosos no YOLO mode
- Handling graceful de xdg-open missing

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Crítico: Problemas de Autenticação (401 Errors)

**Mais de 10 issues** reportando erro 401 mesmo após login bem-sucedido. Sintomas incluem:
- Extension reporta "Successfully logged in" mas retorna 401 em toda requisição
- API key não persiste após reinício (`~/.qwen/settings.json` não é lido)
- Afeta múltiplas plataformas: Windows, macOS, Linux

**Ação recomendada:** Aguardar merge do PR [#3398](https://github.com/QwenLM/qwen-code/pull/3398) que substitui OAuth por Coding Plan/API Key setup.

---

### 🟡Atenção: Startup com Checkpointing

Issue [#2862](https://github.com/QwenLM/qwen-code/issues/2862) permanece aberta — aplicação fica presa em "Initializing..." quando checkpointing está habilitado. **Workaround:** Desabilitar feature em `settings.json`.

---

### 🟡Atenção: Documentação Desatualizada

Página de autenticação ainda menciona OAuth free tier descontinuado em 15 de abril. Usuários novos estão sendo confundidos. [Issue #3382](https://github.com/QwenLM/qwen-code/issues/3382) aguarda resposta da equipe.

---

### 🟢 Positivo: Community Engagement

- **50 PRs** atualizados nas últimas 24h
- **97 comentários** na issue de política de pricing (#3203)
- Múltiplos contribuidores resolvendo mesmo bug (/clear + /btw)

---

### 📅 Timeline de Mudanças

| Data | Evento |
|------|--------|
| 2026-04-15 | OAuth free tier descontinuado |
| 2026-04-18 | Multiple PRs de migração de auth |
| 2026-04-20 | Data proposta para fechamento do free tier (#3203) |

---

*Relatório gerado automaticamente com base em dados do GitHub. Para contribuições ou atualizações, visite [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*