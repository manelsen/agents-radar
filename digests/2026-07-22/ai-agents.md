# Resumo diário do ecossistema de agentes de IA 2026-07-22

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-21 21:01 UTC

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

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-22  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source atravessa um momento de **consolidação arquitetural**. Quatro dos seis projetos ativos (IronClaw, CoPaw, Hermes Agent, ZeroClaw) reportam volumes de atividade superiores a 40 itens atualizados em 24h, sinalizando ciclos de desenvolvimento acelerados. Dois projetos (IronClaw e CoPaw) acabaram de atravessar transições de versão críticas — v1.0.0-rc.1 e v2.0.1-beta.1, respectivamente — indicando que o ecossistema está a migrar de arquiteturas experimentais para padrões mais estáveis. A segurança emerge como tema transversal: validação de workspace, proteção de delegates, hardening de OAuth e gestão de chaves de API são prioridades declaradas em ao menos quatro projetos simultaneamente. O padrão de "Goal Mode" — sessões autônomas que perseguem objetivos até conclusão — surge independentemente em NanoBot (#5022) e ZeroClaw (#8687–#8996), sugerindo convergência de mercado.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs P0–P1/S0–S1 | Saúde |
|---------|-------------|-----------|----------|-----------------|-------|
| **NullClaw** | 0 | 0 | 0 | — | ⚫ Inativo |
| **NanoBot** | 11 | 34 | 0 | 5 (P0–P1) | 🟢 Alta |
| **Hermes Agent** | 50 | 50 | 0 | 2 (P1) | 🟢 Alta |
| **PicoClaw** | 9 | 9 | 0 | 3 (Alta) | 🟡 Moderada |
| **IronClaw** | 43 | 50 | **1** | 0 (em sprint QA) | 🟢 Alta |
| **CoPaw** | 40 | 46 | **1** | 3 (P0–P1) | 🟢 Alta |
| **ZeroClaw** | 50 | 50 | 0 | 5 (S0–S1) | 🟡 Alerta |

**Observações:**
- **IronClaw** e **CoPaw** destacam-se por publicar releases concretas, demonstrando maturidade no pipeline de entrega.
- **ZeroClaw** apresenta o maior volume de bugs críticos (5 S0–S1), com PRs de Goal Mode estagnados em `needs-author-action`, sugerindo gargalo de revisão.
- **Hermes Agent** e **NanoBot** lideram em ratio de PRs por issue, indicando foco em resolução sobre discussão.

---

## 3. Posicionamento do Projeto Principal

### IronClaw (nearai/ironclaw)

**Diferencial Central:** Único projeto em transição para arquitetura de primeira geração (Reborn), com rebuild completo de runtime, storage e extension host.

| Dimensão | IronClaw | Peer Median |
|----------|----------|-------------|
| Releases em 2026 | 1 (v1.0.0-rc.1) | 0 |
| Bugs P0–P1 abertos | 0 (em sprint QA) | 3 |
| Épicos fechados (24h) | 6 | 1 |
| Arquitetura | Reborn (Rust-first) | Mono repo Python/TS |
| Foco declarado | Operador enterprise | Agente pessoal |

**Vantagens técnicas:**
- Sistema de autorização baseado em *witness* consolidado (PRs #6432, #6436, #6438)
- Pipeline de QA automatizado declarado como prioridade (#2828, #4775, #4632)
- Binary dedicado (`ironclaw-reborn`) permite coexistência com legacy

**Limitações:**
- Breaking change significativo para usuários da 0.29.x
- Dependência de Rust pode dificultar contribuições externas

---

### CoPaw (agentscope-ai/QwenPaw)

**Diferencial Central:** Maior diversificação de workflow modes (5 presets) e arquitetura de governança de ferramentas (@tool_descriptor).

| Métrica | CoPaw | IronClaw | Hermes |
|---------|-------|----------|--------|
| Releases (semana) | 1 | 1 | 0 |
| Bugs críticos fechados | 3 | 5 (em curso) | 2 |
| Features merged (24h) | 11 | 15 | 3 |
| Modos de workflow | 5 (UltraQA, Ralph, etc.) | — | — |

**Vantagens:**
- Release v2.0.1-beta.1 demonstra disciplina de hotfix rápido
- Integração com AIOnly (190+ modelos agregados)
- Auto-registration de ferramentas via decorator

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Workspace e Delegates

Três projetos enfrentam vulnerabilidades de escape de workspace simultaneamente:

| Projeto | Issue | Severidade | Tipo |
|---------|-------|-----------|------|
| NanoBot | #4987 | **P0** | Workspace checks não vinculadas a file handles |
| ZeroClaw | #9247 | **S0** | Shell Tool Workspace Boundary Bypass (symlink) |
| Hermes | #4785 | P1 | read_file causa OOM em arquivos grandes |

**Recomendação transversal:** Implementar validação de workspace no nível de *descriptor* (handle), não após abertura.

### 4.2 Race Conditions em Subprocessos

| Projeto | Issue | Descrição |
|---------|-------|-----------|
| Hermes Agent | #68915 | Worker deadlocks com `&` (orphaned subshell) |
| ZeroClaw | #8731 | MCP servers stdio acumulam como zombie processes |
| NanoBot | #5021 | Cascadeia terminação de subprocessos em /stop |
| IronClaw | — | Dispatch via `ProcessAuthorizedContinuation` (abordagem formal) |

**Padrão:** Abordagens variam de patches ad-hoc (NanoBot, Hermes) a arquitetura formal (IronClaw). ZeroClaw ainda não resolveu.

### 4.3 Multi-Plataforma (Windows)

Hermes Agent e PicoClaw lideram em bugs Windows:

| Projeto | Bug | Impacto |
|---------|-----|--------|
| Hermes Agent | #68474 | state.db zeroed (95MB null bytes) |
| Hermes Agent | #68167 | Signal SSE stream fecha imediatamente |
| PicoClaw | — | OAuth headless broken em Azure Docker |

**Padrão:** Integração com canais de mensageria (Signal, Telegram) expõe inconsistências de transporte entre plataformas.

### 4.4 Provedores OpenAI-Compatible

Expansão de suporte a providers é transversal:

| Projeto | Providers Suportados | Recente |
|---------|---------------------|---------|
| NanoBot | ModelScope (#4965), Codex (#5019), DashScope | ModelScope novo |
| CoPaw | AIOnly (190+ modelos) | AIOnly novo |
| Hermes Agent | — | MCP servers (jules, thunderbird) |
| PicoClaw | Antigravity (regressão v0.3.1) | — |

**Sinal de mercado:** Providers OpenAI-compatible estão a tornar-se commodity. Diferenciação move-se para features (fallback chains, prompt caching, thinking style mapping).

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Público Primário | secondary |
|---------|-----------------|-----------|
| **IronClaw** | Operadores enterprise, DevOps | Desenvolvedores Rust |
| **CoPaw** | Desenvolvedores Python, pesquisadores | Usuários Qwen/MiniMax |
| **Hermes Agent** | Usuários multi-canal (Telegram, Signal, WhatsApp) | Operadores de cron jobs |
| **NanoBot** | Usuários de inference local (Ollama) | Multi-provider |
| **ZeroClaw** | Power users, comunidades Matrix | Desenvolvedores de plugins |
| **PicoClaw** | Comunidades DingTalk/Feishu | Usuários Matrix |

### 5.2 Arquitetura

| Projeto | Stack | Paradigma | Extensibilidade |
|---------|-------|-----------|-----------------|
| **IronClaw** | Rust | Actor-based, witness auth | Extension host refactored |
| **CoPaw** | Python | ACP modular, OMP workflows | @tool_descriptor auto-reg |
| **Hermes Agent** | Python | MCP-first | MCP servers |
| **NanoBot** | — | Provider-agnostic | Tool result quarantine |
| **ZeroClaw** | — | SOP (Structured Output Protocol) | SkillForge (órfão) |
| **PicoClaw** | — | Channel-centric | MCP tools |

### 5.3 Foco Diferenciador

| Projeto | Diferenciador #1 | Diferenciador #2 |
|---------|------------------|------------------|
| **IronClaw** | Reborn architecture (Rust-first) | Automated QA epic |
| **CoPaw** | 5 workflow modes | Tool governance auto-reg |
| **Hermes Agent** | Multi-channel (Telegram, Signal, WhatsApp) | Memory backends configuráveis |
| **NanoBot** | Inference local (Ollama) | Security hardening |
| **ZeroClaw** | Goal Mode (RFC #8303) | SOP routing |
| **PicoClaw** | DingTalk/Feishu native | vodozemac migration |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Entrega

| Projeto | PRs Merged (24h) | Ratio Fechado/Aberto | Avaliação |
|---------|------------------|----------------------|-----------|
| **IronClaw** | 15 | 0.43 (15/35) | 🟢 Consolidando (pós-release) |
| **NanoBot** | 22 | 1.83 (22/12) | 🟢 Iteration fast track |
| **CoPaw** | 27 | 1.42 (27/19) | 🟢 Sprint mode |
| **ZeroClaw** | 10 | 0.43 (10/23) | 🟡 Stalled (author bottleneck) |
| **Hermes Agent** | ~3 | ~0.09 (3/38) | 🟡 Review backlog |
| **PicoClaw** | 4 | 0.8 (4/5) | 🟡 Maturidade inicial |

**Destaques:**
- **NanoBot** apresenta o melhor ratio de resolução, indicando equipe pequena mas高效的.
- **CoPaw** fechou 27 PRs em 24h — volume impressionante para release v2.
- **ZeroClaw** e **Hermes Agent** sofrem de gargalo de revisão (38+ PRs abertos).

### 6.2 Engajamento Comunitário

| Projeto | Issue com Mais Comentários | Tema | Comentários |
|---------|---------------------------|------|-------------|
| **IronClaw** | #2987 | Reborn landing strategy | 44 |
| **CoPaw** | #2291 | Help Wanted board | 65 |
| **NanoBot** | #4867 | Ollama prompt caching | 22 |
| **Hermes Agent** | #47349 | Memory backends | 13 |
| **ZeroClaw** | #8226 | Git identity por agente | 6 |
| **PicoClaw** | #3088 | libolm → vodozemac | 9 |

**Observação:** NanoBot #4867 (22 comentários, 0 👍) representa frustração silenciosa — alto engajamento técnico sem validação social.

### 6.3 Dívida Técnica

| Projeto | Área de Dívida | Status |
|---------|---------------|--------|
| **Hermes Agent** | SQLite concurrency (Kanban DB) | 2 issues abertas, 1 fechada |
| **PicoClaw** | libolm abandonado (vodozemac) | Aberto há 43 dias |
| **CoPaw** | Regressões v2.0 (performance ~2s, loops) | 3 bugs P0–P1 |
| **ZeroClaw** | Goal Mode stack estagnado | 5 PRs pendentes |
| **NanoBot** | Provider edge cases (UTF-16, env refs) | Corrigidos, mas recorrentes |

---

## 7. Sinais de Tendência

### 7.1 Convergência para "Goal Mode"

A implementação independente de sessões duradouras orientadas a objetivos em **ZeroClaw** (#8687–#8996) e **NanoBot** (#5022) indica que o ecossistema reconhece a necessidade de agentes que persigam objetivos multi-turno sem intervenção constante. Este padrão diferencia agentes de assistentes tradicionais.

**Implicação:** Agentes que não suportam goal persistence arriscam obsolescência em用例 de automação.

### 7.2 Hardening de Segurança como Maturidade

Todos os projetos com mais de 30 dias de atividade apresentam pelo menos uma issue de segurança aberta. A evolução observada é:

1. **NanoBot:** 5 PRs de segurança em 24h (API key management, workspace validation)
2. **IronClaw:** Sistema de autorização formal via witness
3. **ZeroClaw:** Bypass de allowlist em delegates (S0 — crítico)
4. **PicoClaw:** OAuth policy compliance (Google)

**Implicação:** O mercado está a transitar de "features primeiro" para "segurança por defeito". Projetos que não endereçarem security hardening arriscam rejeição em ambientes enterprise.

### 7.3 Multi-Provider como Commodity

A proliferação de providers OpenAI-compatible (ModelScope, AIOnly, DashScope) reduz a diferenciação por suporte a modelos. O próximo vetor de diferenciação será:

- **Fallback chains configuráveis** (CoPaw #3200, NanoBot #4965)
- **Prompt caching** (Anthropic Messages em PicoClaw #3228)
- **Latência otimizada** (NanoBot #4867 — 60s de overhead em Ollama)

### 7.4 Interface de Operador como Diferenciador

| Projeto | Feature | Tipo |
|---------|---------|------|
| IronClaw | Operator doctor diagnostics (#4596) | Observabilidade |
| IronClaw | Logs query API com redação (#4597) | Produtividade |
| CoPaw | Copy agent config one-click (#6262) | UX |
| CoPaw | Log rotation configurável (#6183) | DevEx |
| ZeroClaw | Dashboard runtime context (#9011) | Observabilidade |
| NanoBot | Skill highlighting (#5020) | Discoverability |

**Sinal:** Operadores enterprise priorizam diagnóstico e configuração declarativa sobre features de agentes. IronClaw lidera nesta dimensão.

### 7.5 Decomissionamento de Cryptografia Legada

A issue #3088 do PicoClaw (libolm → vodozemac) é um caso de estudo para o ecossistema. Bibliotecas abandonadas (libolm, PyJWT antigo) representam passivos de segurança. Projetos que não atualizarem suas dependências criptográficas arriscam:

- Vulnerabilidades conhecidas não corrigidas
- Bloqueio por políticas de segurança enterprise
- Incompatibilidade com protocolos atualizados (Matrix E2EE)

---

## 8. Síntese Executiva

| Dimensão | Líder | Seguidor | Laggard |
|----------|-------|----------|---------|
| **Velocidade de entrega** | NanoBot (ratio 1.83) | CoPaw (27 PRs) | Hermes (review backlog) |
| **Maturidade de release** | IronClaw (v1.0.0-rc.1) | CoPaw (v2.0.1-beta.1) | ZeroClaw (0 releases) |
| **Segurança** | IronClaw (witness formal) | NanoBot (5 PRs security) | ZeroClaw (S0 aberta) |
| **Engajamento** | CoPaw (65 comentários) | IronClaw (44 comentários) | PicoClaw (9 comentários) |
| **Estabilidade** | IronClaw (0 P0–P1) | NanoBot (5 P0–P1) | CoPaw (3 P0–P1 + regressões) |

**Recomendação estratégica:**
- **Para operadores enterprise:** IronClaw oferece a arquitetura mais formal e pipeline de QA declarado.
- **Para desenvolvedores Python:** CoPaw oferece o ecossistema mais completo de workflow modes e governança.
- **Para inference local:** NanoBot é o projeto mais ativo em otimização de providers e security hardening.
- **Para comunidades Matrix/DingTalk:** PicoClaw é a opção mais específica, mas com dívida técnica significativa (libolm).
- **ZeroClaw** merece atenção como plataforma de próxima geração (Goal Mode), mas requer acompanhamento de resolução de bugs

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)
**Data de Referência:** 2026-07-22
**Reportado por:** Analista Open Source — Agentes de IA e Assistentes Pessoais

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento com **34 PRs atualizados** e **11 issues resolvidas** nas últimas 24h, demonstrando um ritmo de entrega robusto. Nenhum release foi publicado hoje, mas o fluxo de PRs sugere que um ciclo de lançamento pode estar próximo. A postura de segurança está particularmente ativa — 5 PRs e 2 issues com标签 de segurança foram tratados hoje, cobrindo desde vazamento de chaves de API até validação de workspace e proteção de subprocessos. A base de código está em modo de estabilização com foco em bugs de confiabilidade (OOM, loops infinitos, vazamento de recursos) e hardening de segurança.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

| Release | Data | Mudanças | Breaking Changes | Notas de Migração |
|---------|------|----------|------------------|-------------------|
| — | — | — | — | — |

**Observação:** Embora não haja release formal, os 22 PRs merged/closed hoje representam mudanças significativas que provavelmente serão incluídas no próximo tag de versão. Recomenda-se atenção aos CHANGELOGs dos PRs antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos Hoje (22 total)

| # | PR | Autor | Resumo | Impacto |
|---|-----|-------|--------|---------|
| #4663 | [bug, priority: p1] fix: quarantine invalid tool results | hamb1y | Drop de tool results missing/empty, unknown e duplicados antes do replay do provider. Previne duplicação na sessão. | 🔴 Crítico — Corrigiu protocolo de tool-result que permitia estados inconsistentes |
| #4965 | Feat/modelscope provider support | yrk111222 | Adiciona ModelScope como provider built-in via API OpenAI-compatible (`api-inference.modelscope.cn`). Suporta LLM chat e geração de imagem. | 🟢 Feature — Expande ecossistema de modelos (Qwen, DeepSeek, Kimi, GLM, MiniMax) |
| #5010 | docs(security): recommend env-var references | cms19859230182-lang | Atualiza SECURITY.md para recomendar variáveis de ambiente em vez de chaves em plaintext | 🔵 Documentação — Melhora postura de segurança para operadores |
| #5019 | feat(providers): support Codex fast mode | chengyongru | Adiciona suporte a `service_tier: "priority"` para Codex Fast mode com documentação | 🟢 Feature — Integração com Codex |
| #4952 | fix(providers): sanitize UTF-16 surrogates | Krislu1221 | Corrige UnicodeEncodeError em requests com emoji/HTML | 🟡 Bugfix — Corrige falha intermitente em requests com caracteres especiais |
| #4983 | fix(cron): coerce string schedule/state ms fields | santhreal | Coerção de strings para int em campos de schedule do jobs.json | 🟡 Bugfix — Corrige TypeError em cron jobs |
| #4989 | fix(transcription): resolve env refs | benlenarts | Permite interpolação de variáveis de ambiente em transcription api_key/api_base | 🟡 Bugfix — Corrige 401 Unauthorized no Groq Transcription |
| #4984 | fix(config): write config.json atomically | santhreal | Escrita atômica via temp+replace para evitar truncamento em crash | 🟡 Bugfix — Integridade do arquivo de configuração |
| #5020 | feat(webui): highlight skill references | chengyongru | Destaca referências `$skillname` em mensagens enviadas | 🔵 UX — Melhora visibilidade de skills |
| #4811 | fix(runner): log suppressed exceptions | axelray-dev | Substitui supressão silenciosa por log de exceções em prepare_call | 🟡 Bugfix — Observabilidade |

**PRs Abertos com Prioridade Alta (12):**

| # | PR | Autor | Resumo | Prioridade |
|---|-----|-------|--------|------------|
| #5023 | fix(providers): Qwen model-level thinking style mapping | cms19859230182-lang | Adiciona mapeamento de thinking style para Qwen 3.5/3.6/3.7 | p2 |
| #4866 | feat(agent): bind model presets to sessions | chengyongru | Persiste overrides de model-preset em metadata de sessão | p1 |
| #5022 | fix(cmd): add /cancel-goal command | DreamShepherd2006 | Adiciona comando para quebrar loops de sustained-goal | p1 |
| #4941 | fix(session): fallback to legacy paths | axelray-dev | Corrige fallback para paths legados em metadata reads | p1 |
| #4987 | fix(filesystem): bind workspace checks | KDB-Wind | Valida workspace em handles de arquivo abertos (O_NOFOLLOW) | **p0** |
| #5021 | fix(subagent): cascade exec termination | yorkhellen | Cascadeia terminação de subprocessos em /stop | p1 |
| #4594 | fix(exec): extract paths after equals sign | axelray-dev | Inclui `=` como delimitador de路径 no shell guard | p1 |
| #4399 | feat(webui): hidden_settings_sections | HaisamAbbas | Permite ocultar seções de configuração na WebUI | — |
| #5018 | feat(skills): explicit context loading | bingqilinweimaotai | Permite preload de skills via skill_names em ContextBuilder | — |
| #4963 | feat(webui): polish agent output | Re-bin | Unified activity language e Markdown repair para output | — |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (por comentários/reações)

#### 🔥 #4867 — "Preserve exact prompt prefix to enable caching in Ollama and others"
| Métrica | Valor |
|---------|-------|
| Status | CLOSED |
| Comentários | **22** |
| 👍 | 0 |
| Autor | The-Markitecht |

**Análise:** Este é o issue com maior engajamento hoje, refletindo uma dor crítica: **adição de 60 segundos por turno ao usar Ollama**, tornando o uso local "totalmente inviável" em GPUs com 32 GB de VRAM. O issue é um follow-up do #2463 e expõe um gargalo de serialização de prompt que afeta providers além do Ollama. A resolução fechada sugere que a equipe implementou uma forma de preservar o prefixo exato para caching. Este tema conecta-se diretamente com a demanda por performance em inference local.

**Link:** [HKUDS/nanobot#4867](https://github.com/HKUDS/nanobot/issues/4867)

#### 🔥 #4864 — "Endless loop for <tool_call> <function=complete_goal>"
| Métrica | Valor |
|---------|-------|
| Status | **OPEN** |
| Comentários | 4 |
| 👍 | 1 |
| Autor | Asem-D |

**Análise:** Bug de loop infinito no tool `complete_goal` causado por parsing incorreto do parâmetro `recap` como string em vez de JSON object. Este é um **problema ativo** que afeta a estabilidade de sessões com goals sustentados. A severidade é alta — o agent fica preso sem progresso.

**Link:** [HKUDS/nanobot#4864](https://github.com/HKUDS/nanobot/issues/4864)

#### 🔥 #4934 — "Qwen models expose thinking/reasoning content"
| Métrica | Valor |
|---------|-------|
| Status | **OPEN** |
| Comentários | 2 |
| 👍 | 0 |
| Autor | celanwang |

**Análise:** Bug no provider DashScope onde o conteúdo de reasoning/thinking dos modelos Qwen3.6-flash vaza para o usuário final. Afeta diretamente a experiência do usuário final e a separação entre output interno e resposta ao usuário.

**Link:** [HKUDS/nanobot#4934](https://github.com/HKUDS/nanobot/issues/4934)

#### 📌 #4911 — "A guarded tool gateway seam for channels"
| Métrica | Valor |
|---------|-------|
| Status | CLOSED |
| Comentários | 1 |
| 👍 | **1** |
| Autor | ekarad1um |

**Análise:** Enhancement com suporte da comunidade para permitir que canais (WeChat, Feishu, Telegram) executem tools do agent legitimamente. O motivador é um caso de canal de voz end-to-end onde um modelo externo emite function calls. Este é um sinal de roadmap para arquitetura de channels mais flexível.

**Link:** [HKUDS/nanobot#4911](https://github.com/HKUDS/nanobot/issues/4911)

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (P0-P1, abertos ou recently closed)

| # | Bug | Severidade | Status | Resumo |
|---|-----|------------|--------|--------|
| #4864 | Endless loop em complete_goal | P1 | **OPEN** | Parsing de recap como string vs JSON causa loop infinito |
| #4987 | Workspace checks não vinculadas a file handles | **P0** | **OPEN** | Validação de workspace aplicada após abertura — risco de symlink race condition |
| #4794 | Exec sessions sem shutdown cleanup | P1 | CLOSED | Subprocessos órfãos em reinicializações repetidas |
| #4788 | except BaseException captura KeyboardInterrupt | P1 | CLOSED | CancelaGraceful e SystemExit convertidos em erros conversacionais |
| #4785 | read_file causa OOM em arquivos grandes | P1 | CLOSED | Carregamento completo antes de truncar — multi-GB files |

#### 🟡 Moderados (P2)

| # | Bug | Status | Resumo |
|---|-----|--------|--------|
| #4934 | Qwen thinking content exposto | **OPEN** | Reasoning vaza via DashScope provider |
| #4952 | UTF-16 surrogates causam UnicodeEncodeError | CLOSED | Emojis/HTML quebram requests intermitentemente |
| #4989 | Transcrição falha com Groq 401 | CLOSED | Env vars não resolvidos no path de transcrição |
| #4983 | Cron jobs falham com TypeError | CLOSED | Strings vs int em schedule fields |
| #4984 | config.json truncado em crash | CLOSED | Escrita não atômica |

### Padrões Identificados

1. **Race Conditions:** Dois bugs (#4987 workspace binds, #4594 shell guard path extraction) indicam necessidade de hardening de security boundaries.
2. **Resource Management:** Três bugs (OOM, unbounded messages, orphan processes) sugerem gaps em lifecycle management de sessões e subprocessos.
3. **Provider Edge Cases:** UTF-16 surrogates, env var interpolation, e thinking content leaks indicam complexidade crescente na abstração multi-provider.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Feature | Autor | Tags | Análise |
|---|---------|-------|------|---------|
| #5013 | Shell execution precisa de confirmação humana | xiakj | enhancement, security | Adiciona middleware estilo LangChain com confirmação antes de execução shell — demanda de segurança para canais multi-usuário |
| #4866 | Bind model presets to sessions | chengyongru | feature, p1 | Persistência de overrides de modelo por sessão — melhoria de UX para multi-tenant |
| #4399 | hidden_settings_sections para WebUI | HaisamAbbas | enhancement | UI simplificada para "normie-friendly" em deployments multi-instância |
| #5018 | Explicit context loading para skills | bingqilinweimaotai | feature | Preload de skills via ContextBuilder — expande API de integração |
| #4911 | Guessed tool gateway seam | ekarad1um | enhancement | Permite canais executarem tools legitimamente — arquitetura para voice channels |

### Sinais de Roadmap

| Sinal | Interpretação |
|-------|---------------|
| ModelScope provider (#4965) | Expansão contínua de suporte a providers OpenAI-compatible |
| Codex Fast mode (#5019) | Diversificação para além de LLMs genéricos |
| /cancel-goal command (#5022) | Melhoria de controle de loops sustentados |
| Skill highlighting (#5020) | Foco em UX e discoverability de features |
| Unified activity language (#4963) | Padronização de output logs — DX improvement |

**Conclusão:** O roadmap aponta para:
1. **Segurança e hardening** (workspace validation, API key management, subprocess cleanup)
2. **Multi-provider strategy** (ModelScope, Codex, DashScope, OpenRouter)
3. **UX/DX improvements** (WebUI customization, skill discovery, output polish)
4. **Agent reliability** (cancelamento de goals, exception handling, resource management)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Impacto | Issue Relacionada |
|-----|------------|---------|-------------------|
| Performance inaceitável com Ollama local | ⭐⭐⭐⭐⭐ | **Bloqueante** | #4867 (CLOSED) |
| Agent preso em loops de goal | ⭐⭐⭐⭐ | **Frustração alta** | #4864 (OPEN), #5022 (PR aberto) |
| API keys expostas em config.json | ⭐⭐⭐⭐ | **Segurança crítica** | #4803 (CLOSED) |
| Vazamento de thinking content em Qwen | ⭐⭐⭐ | **Confusão do usuário** | #4934 (OPEN) |
| Shell execution sem confirmação | ⭐⭐⭐ | **Risco operacional** | #5013 (CLOSED) |
| OOM com arquivos grandes | ⭐⭐ | **Quebra de produção** | #4785 (CLOSED) |

### Cenários de Uso Observados

1. **Inference Local (Ollama):** Usuários com GPUs de 32 GB buscam alternativas a APIs cloud por custo/privacidade, mas enfrentam latência inaceitável.
2. **Voice Channels:** Integração com canais de voz real-time onde modelos externos emitem function calls.
3. **Multi-tenant Deployments:** Administradores precisam de UI simplificada para usuários não-técnicos.
4. **Long-running Sessions:** Sessões unificadas acumulam mensagens indefinidamente (recurso de memory).

### Indicadores de Satisfação/Insatisfação

| Indicador | Tendência |
|-----------|-----------|
| Volume de bugs de segurança fechados | 📈 Positivo — equipe respondendo rapidamente |
| PRs de security merged | 📈 Positivo — postura defensiva reforçada |
| Loop infinito em complete_goal | 📉 Negativo — bug crítico ainda aberto |
| Qwen thinking leak | 📉 Negativo —用户体验 impactado |
| Modelo de 22 PRs/dia | 📈 Positivo — velocidade de entrega alta |

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Resposta há Tempo

| # | Issue | Criada | Status | Prioridade | Comentários | Ação Recomendada |
|---|-------|--------|--------|

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-22

---

## 1. Panorama do Dia

O ecossistema Hermes Agent mantém um **ritmo de atividade intenso**: 50 issues e 50 PRs atualizados nas últimas 24h, com 35 issues abertas e 38 PRs ainda em revisão. A comunidade demonstra engajamento significativo, com issues de memória e delegação gerando debates aprofundados (até 13 comentários). Dois bugs de **P1** foram reportados hoje — incluindo um deadlock crítico em workers e corruption de state.db no Windows — sinalizando pressão sobre estabilidade. Nenhuma release foi publicada, indicando que o time可能在拭目以待 para consolidar as correções em curso antes de um próximo tag.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A última versão estável referenciada nos reports é **v0.19.0 (2026.7.20)**, которая упоминалась em reports de bugs. Ожидается que o próximo release agrupe as correções de stability em desenvolvimento.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** nas últimas 24h, representando avanços concretos:

| PR | Tipo | Impacto |
|----|------|---------|
| [#48215](https://github.com/NousResearch/hermes-agent/pull/48215) | feat(mcp) | Adiciona Chatblocks ao catálogo MCP com suporte a `transport.headers` |
| [#65677](https://github.com/NousResearch/hermes-agent/issues/65677) | bug (closed) | MCP servers 'jules'/'thunderbird' — duplicado de #65673 |
| [#62212](https://github.com/NousResearch/hermes-agent/issues/62212) | bug (closed) | MCP stdio keepalive probe — loop infinito em empty exceptions |
| [#65673](https://github.com/NousResearch/hermes-agent/issues/65673) | bug (closed) | Gateway MCP Handshake failures com stdio-based servers |

**Destaque estratégico:** A PR [#66520](https://github.com/NousResearch/hermes-agent/pull/66520) migra workflows de CI para GKE self-hosted runners (ARC), indicando investimento em infraestrutura e скорость de feedback loops.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

1. **[#47349](https://github.com/NousResearch/hermes-agent/issues/47349)** — Feature: Configurable Memory Backends — **13 comentários** | 👍 1  
   *Proposta de renomear `memory.md` → `rules.md` e permitir backends de memória configuráveis (honcho/fact_store). Diskutem arquitetura de injeção de memória e alternativas a arquivos fixos.*

2. **[#25083](https://github.com/NousResearch/hermes-agent/issues/25083)** — Immutable/protected skills — **7 comentários** | 👍 0  
   *Solicitação de proteção de skills críticos contra modificação pelo agente, essencial para governança e safety constraints.*

3. **[#27683](https://github.com/NousResearch/hermes-agent/issues/27683)** — Bug: web_tools.py missing `_ensure_plugins_discovered()` — **7 comentários** | 👍 0  
   *Web search/extract/crawl falhavam silenciosamente em instalações frescas. Closed com fix em main.*

4. **[#30649](https://github.com/NousResearch/hermes-agent/issues/30649)** — Feature: Proton Pass AI Access Tokens — **2 comentários** | 👍 **12**  
   *Maior número de 👍 da lista. Comunidade demonstra forte demanda por integração com Proton Pass como fonte de segredos (além do Bitwarden existente).*

**Sinal de trend:** Discussões sobre memória (backends configuráveis + herança em subagents) dominam o debate arquitetural.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (ação imediata requerida)

| Issue | Título | Plataforma | Status |
|-------|--------|------------|--------|
| [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) | Worker deadlocks com `&` (orphaned subshell) | Todas | **OPEN** |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | state.db zeroed (95MB null bytes) | **Windows** | **OPEN** |

**Análise:** O deadlock em workers (#68915) ocorre quando o agente inicia processos em background via shell `&`, causando deadlock permanente no worker. O bug de state.db (#68474) ocorre durante update do desktop app no Windows, destruindo o banco SQLite de sessão.

### 🟠 P2 — Altos (impacto significativo)

| Issue | Título | Área | Status |
|-------|--------|------|--------|
| [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | MCP parked server revival não re-registra tools | MCP | CLOSED |
| [#67458](https://github.com/NousResearch/hermes-agent/issues/67458) | `-w/--worktree` ignorado em one-shot mode | CLI | OPEN |
| [#68167](https://github.com/NousResearch/hermes-agent/issues/68167) | Signal SSE stream fecha imediatamente | Windows | OPEN |
| [#68693](https://github.com/NousResearch/hermes-agent/issues/68693) | Gateway não sai em erro fatal do Photon | launchd | OPEN |
| [#68159](https://github.com/NousResearch/hermes-agent/issues/68159) | custom_providers routing para `/v1/chat/completions` em vez de `/v1/messages` | API | OPEN |
| [#68880](https://github.com/NousResearch/hermes-agent/issues/68880) | `/curator` slash command não implementado no gateway | CLI/Gateway | OPEN |
| [#68911](https://github.com/NousResearch/hermes-agent/issues/68911) | Gateway força redaction de E.164 phone numbers | Gateway | OPEN |
| [#34385](https://github.com/NousResearch/hermes-agent/issues/34385) | Kanban DB index corruption (WAL mode) | Cron | OPEN |

### 🟡 P3 — Médios

- **Kanban DB** sob alta carga concurrente — dois reports (#34385, #53819)
- **Telegram** preso em "Connecting to Telegram (attempt 1/8)" no Windows — [#68465](https://github.com/NousResearch/hermes-agent/issues/68465)
- **Security:** npm audit advisories altos em devDependencies web/ui-tui — [#68736](https://github.com/NousResearch/hermes-agent/issues/68736)
- **MCP:** Conexões stdio falhando com 'jules' e 'thunderbird' — closed como duplicate

**Padrão identificado:** Problemas de **multiplataforma** (especialmente Windows) e **concorrência** (SQLite em multi-worker) são recorrentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em revisão:

| PR | Título | Componentes | Prioridade |
|----|--------|-------------|------------|
| [#68857](https://github.com/NousResearch/hermes-agent/pull/68857) | Cross-surface theme SDK (CLI, TUI, desktop) | CLI, TUI, Desktop | P3 |
| [#68913](https://github.com/NousResearch/hermes-agent/pull/68913) | `from_number/sender_id` em profile_routes | Gateway | P3 |
| [#68909](https://github.com/NousResearch/hermes-agent/pull/68909) | Suporte a `[[spoiler]]` no Telegram | Telegram | P3 |
| [#53378](https://github.com/NousResearch/hermes-agent/pull/53378) | "Hey Hermes" wake word para sessão hands-free | Voice | P3 |
| [#20379](https://github.com/NousResearch/hermes-agent/pull/20379) | Widget-grid layout engine + theme engine | TUI | P3 |

### Features aguardando decisão (needs-decision):

| Issue | Título | Impacto |
|-------|--------|---------|
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | Configurable Memory Backends | Alto — muda arquitetura de memória |
| [#31111](https://github.com/NousResearch/hermes-agent/pull/31111) | `inherit_memory` opt-in para subagents | Alto — memória compartilhada |
| [#68903](https://github.com/NousResearch/hermes-agent/pull/68903) | `memory_mode` parameter ('full'/'on_demand'/'off') | Alto — granularidade de memória |

**Sinais de roadmap:**
- **Memória:** Convergência de múltiplas PRs (#31111, #68903) resolvendo o problema de herança de memória em subagents
- **Theming:** Push para SDK unificado de temas
- **Voice:** Interesse em wake word local ("Hey Hermes")
- **Messaging:** Expansão para Buzz (#68871) e melhorias em Signal/Telegram/WhatsApp

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas:

| Categoria | Problema | Frequência |
|-----------|----------|------------|
| **Estabilidade em Windows** | state.db corruption, Telegram stuck, Signal SSE failure | 🔴 Alta |
| **SQLite concorrência** | Kanban DB corruption, index errors | 🟠 Média |
| **MCP reliability** | stdio handshake failures, parked server revival | 🟠 Média |
| **CLI flags** | `-w/--worktree` comportamento inconsistente | 🟡 Baixa |

### Cenários de uso destacados:

- **Operadores de messaging copilots** precisam preservar E.164 numbers ( [#68911](https://github.com/NousResearch/hermes-agent/issues/68911))
- **Usuários de cron jobs** querem validação de configuração para evitar falhas silenciosas ( [#68800](https://github.com/NousResearch/hermes-agent/issues/68800))
- **Desenvolvedores de subagents** reclamam que MEMORY.md não é herdado ( [#30269](https://github.com/NousResearch/hermes-agent/issues/30269))
- **Usuários de Proton Pass** solicitam suporte como fonte de segredos ( [#30649](https://github.com/NousResearch/hermes-agent/issues/30649) — 12 👍)

**Satisfação aparente:** A comunidade está ativamente contributing com PRs, indicando engajamento positivo apesar dos bugs reportados.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa há >7 dias:

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#30269](https://github.com/NousResearch/hermes-agent/issues/30269) | Subagents não herdam MEMORY.md | 2026-05-22 | 1 | P3 |
| [#30649](https://github.com/NousResearch/hermes-agent/issues/30649) | Proton Pass suporte | 2026-05-22 | 2 | P3 (12 👍) |
| [#53230](https://github.com/NousResearch/hermes-agent/issues/53230) | Cron [SILENT] suprime briefing jobs legítimos | 2026-06-26 | 1 | P2 |
| [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | Kanban DB corruption (raiz) | 2026-06-27 | 3 | P3 |
| [#57100](https://github.com/NousResearch/hermes-agent/issues/57100) | Memory provider plugin para Metronix | 2026-07-02 | 2 | P3 (2 👍) |
| [#63413](https://github.com/NousResearch/hermes-agent/issues/63413) | openai-codex pool credential não recupera | 2026-07-12 | 1 | P3 |

### PRs aguardando review há >7 dias:

| PR | Título | Criado | Tipo |
|----|--------|--------|------|
| [#55170](https://github.com/NousResearch/hermes-agent/pull/55170) | Improve models fallback management | 2026-06-29 | Feature |
| [#53378](https://github.com/NousResearch/hermes-agent/pull/53378) | "Hey Hermes" wake word | 2026-06-27 | Feature |
| [#20379](https://github.com/NousResearch/hermes-agent/pull/20379) | Widget-grid layout engine | 2026-05-05 | Feature |

**Recomendação:** Priorizar triagem de [#30269](https://github.com/NousResearch/hermes-agent/issues/30269) e [#30649](https://github.com/NousResearch/hermes-agent/issues/30649) — alto interesse da comunidade (👍) com poucas interações da equipe.

---

## Saúde Geral do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| **Atividade** | 🟢 Alta | 100+ itens atualizados em 24h |
| **Bugs P1** | 🔴 2 ativos | Deadline/estado db requerem atenção imediata |
| **Release cadence** | 🟡 Pausado | Nenhuma release em 24h |
| **Engajamento** | 🟢 Positivo | Features com 12+ 👍, PRs ativos |
| **Dívida técnica** | 🟠 Moderada | SQLite concurrency, multiplataforma |

**Conclusão:** Hermes Agent demonstra saúde de projeto ativo com alta contribuição externa. O foco imediato deve ser nos dois bugs P1 (deadlock e state.db) e na estabilização de funcionalidades Windows/multi-platform. A convergência de PRs sobre memória sinaliza uma refatoração arquitetural significativa可能要到来的版本中实现。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-22

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **alta atividade comunitária** em 22 de julho de 2026, com 9 issues e 9 pull requests atualizados nas últimas 24 horas. O ecossistema mostra maturidade com Correções de bugs urgentes (OAuth do Google, regressões de providers, estabilidade de ferramentas), enquanto a comunidade demonstra interesse em melhorias de longo prazo como a migração para vodozemac. A taxa de fechamento de issues (5 de 9) indica responsiveness da equipe. Não houve novos lançamentos hoje.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

A versão mais recente упоминаada nos issues é **v0.3.1**, que apresenta regressões reportadas pelos usuários (especialmente no provider antigravity).

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#3282](https://github.com/sipeed/picoclaw/pull/3282) | feat(nodes): add policy-gated system exec | Adiciona `system.exec.v1` com execução canônica, timeout, limites de output e verificação de raiz de trabalho. | ⭐ Segurança e controle de execução |
| [#3277](https://github.com/sipeed/picoclaw/pull/3277) | fix(tools): deferred-tool visibility heal + sliding TTL | Resolve problema de ferramentas MCP que desaparecem após reinício do processo ou expiração de TTL. | 🐛 Correção crítica de estabilidade |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | Fix pr 3222 backward compat | Garante compatibilidade retroativa com mudanças anteriores. | 🔧 Manutenção |
| [#303](https://github.com/sipeed/picoclaw/pull/303) | fix: make bot greeting name configurable via bot_name | Permite personalização do nome do bot no Telegram e DingTalk. | ✨ Experiência do usuário |

### Destaque: Política de execução de sistema

O PR #3282 introduz um sistema de execução de comandos com gating por política — um avanço significativo em segurança para ambientes de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | [Feature] use vodozemac instead of libolm | 9 | 2 | 🔒 Segurança |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao Seed tool calls leak as text | 5 | 0 | 🐛 Bug |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic | 4 | 1 | 🐛 Bug |

### Análise: Migração libolm → vodozemac

A issue #3088 é a mais comentada e representa uma **demanda estratégica** importante. A comunidade identifica que:

- **libolm está abandonado** e apresenta vulnerabilidades conhecidas
- **vodozemac** é a biblioteca oficial de substituição para criptografia Matrix
- A sugestão inclui tornar libolm opcional em tempo de compilação

Este tema reflete preocupação com **segurança de longo prazo** e pode indicar o roadmap para v0.4.x.

---

## 5. Bugs e Estabilidade

### 🛑 Bugs críticos/alta severidade

| # | Título | Status | Canário |
|---|--------|--------|---------|
| [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Antigravity OAuth login bloqueado pelo Google | CLOSED | "doesn't comply with Google's OAuth 2.0 policy" |
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity INVALID_ARGUMENT — regressão v0.3.1 | CLOSED | tool_schema_transform insuficiente |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop sem reconnection logic | OPEN | Loop morre após interrupção de rede |

### 🐛 Bugs médios

| # | Título | Status | Descrição |
|---|--------|--------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy com histórico longo | OPEN | Performance degrada em sessões extensas |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | tool-call format leakage into LLM summaries | OPEN (PR) | Seahorse vaza formato de tool call |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | DingTalk preview mostra "PicoClaw" em vez do conteúdo | OPEN | UI/UX inconsistente |

### ⚠️ Padrão identificado

Há uma **série de bugs relacionados ao provider antigravity** (Google OAuth), sugerindo que mudanças recentes na política OAuth do Google afetaram a integração. Também há reports de **regressões desde v0.3.1**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento (PRs abertos)

| # | Título | Descrição | Potencial impacto |
|---|--------|-----------|-------------------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | Interface para configurar chain de modelos fallback no web UI | ⭐ Alta — experiência do usuário |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): send SystemParts as system blocks with cache_control | Habilita prompt caching para provider Anthropic Messages | 🛠️ Técnico — eficiência de tokens |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | fix(auth): make browser OAuth login survive real-world callback conditions | 4 correções para OAuth funcionar em setups headless/remotos | 🔧 Correção de DX |
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | fix(feishu): send audio and video with native message types | Áudio/vídeo no Feishu como mensagens nativas reproduzíveis | ✨ Canal Feishu |

### Feature solicitada sem PR

**#3088** — Migração libolm → vodozemac: library de criptografia Matrix precisa ser atualizada por razões de segurança.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Categoria | Feedback | Frequência |
|-----------|----------|------------|
| 🔒 **OAuth/Autenticação** | Google bloqueia login, especialmente em setups headless/remotos | 🔴 Alta |
| 🏗️ **Regressões v0.3.1** | Provider antigravity quebrado, config loses campos após rewrite | 🔴 Alta |
| 📡 **Estabilidade de conexão** | Loop Matrix morre sem reconexão automática | 🟡 Média |
| ⚡ **Performance Web UI** | Input laggy com histórico de chat extenso | 🟡 Média |
| 🔧 **Rate limiting** | Não funciona sem fallback models configurado | 🟡 Média |

### Cenários de uso identificados

- **Uso corporativo**: Docker containers em Azure, integrações com DingTalk/Feishu
- **Multi-provider**: Usuários precisam de chain de fallbacks robustas
- **Matrix como canal primário**: Requer estabilidade de long-polling

### Satisfação inferred

A comunidade está **ativamente reportando bugs** e submetendo PRs, indicando engajamento. No entanto, regressões em v0.3.1 e problemas OAuth recentes geram frustração.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias (标记 stale)

| # | Título | Idade | Prioridade | Status |
|---|--------|-------|------------|--------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | use vodozemac instead of libolm | 43 dias | 🔴 Alta | OPEN (help wanted) |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop sem reconnection | 20 dias | 🔴 Alta | OPEN |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | Anthropic SystemParts cache_control | 15 dias | 🟡 Média | OPEN |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | DingTalk preview title bug | 8 dias | 🟡 Média | OPEN |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Configurable fallback chain | 21 dias | ⭐ Alta | OPEN |

### Recomendações

1. **Priorizar #3088** — Migração vodozemac é questão de segurança
2. **Revisar #3203** — Bug de estabilidade crítica do Matrix
3. **Revisar #3281** — Performance da Web UI afeta experiência do usuário

---

## Métricas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 4 |
| Issues fechadas | 5 |
| PRs abertos | 5 |
| PRs fechados/merged | 4 |
| Novas releases | 0 |
| Issue mais comentada | #3088 (9 comentários) |
| PR mais recente | #3282 (feat nodes, fechado hoje) |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-22.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-22

## 1. Panorama do Dia

O projeto IronClaw atravessa uma fase de transformação profunda com o lançamento do primeiro release candidate da arquitetura **Reborn** (v1.0.0-rc.1), representando uma reconstrução completa do runtime, armazenamento, host de extensões e UI web. A atividade nas últimas 24h foi intensa: 43 issues atualizadas (31 abertas, 12 fechadas) e 50 PRs (35 abertos, 15 merged/fechados), evidenciando um ritmo de desenvolvimento acelerado. Os esforços concentram-se na finalização da migração para o stack Reborn, consolidação de autorização baseada em *witness*, e melhorias de estabilidade na WebUI v2. A comunidade demonstra alto engajamento em épicos de infraestrutura e produtividade de operadores.

---

## 2. Lançamentos

### ironclaw-v1.0.0-rc.1 (2026-07-20)

**Status:** Primeiro release candidate da arquitetura rearchitectada — **não é um incremento da linha 0.29.x**, mas uma reconstrução completa.

**Mudanças estruturais:**

| Componente | Descrição |
|------------|-----------|
| **Runtime do agente** | Rebuilt from scratch |
| **Storage** | Nova arquitetura de persistência |
| **Extension host** | Refatoração completa |
| **Web UI** | Substituída pela v2 |

**O binary `ironclaw` agora é o CLI rearchitectado.** O monólito v1 agora é buildado como `ironclaw-reborn`.

> ⚠️ **Nota de migração:** Este release representa uma quebra de compatibilidade significativa com a versão 0.29.x. Usuários e operadores devem consultar a documentação de migração antes de atualizar ambientes de produção.

**Link:** [Release ironclaw-v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.0.0-rc.1)

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Significativas (24h)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#6429](https://github.com/nearai/ironclaw/pull/6429) | **Always compile database backends** | Remove feature flags `libsql` e `postgres` — ambos backends compilam incondicionalmente. Elimina branches de configuração e gates de teste. |
| [#6436](https://github.com/nearai/ironclaw/pull/6436) | **Refactor: Authorized witness como único input de dispatch** | Completa a consolidação do sistema de autorização — remove fallback None e centraliza em `Authorized` witness. Baseado em #6432. |
| [#6438](https://github.com/nearai/ironclaw/pull/6438) | **Seal process redispatch authority** | Implementa re-mint de autoridade de dispatch em processos, persistindo `ProcessAuthorizedContinuation` para continuar sem re-executar política. |

### PRs Abertas com Alto Impacto

| PR | Escopo | Status |
|----|--------|--------|
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | Unified generic extension runtime + honest state machine | 92 commits, reconciliando delta do main |
| [#6157](https://github.com/nearai/ironclaw/pull/6157) | Terminal UI + service install para ironclaw-reborn | Adiciona `ironclaw-reborn tui` (cliente ratatui) |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | Design system tokens + /playground | Sistema de design para autonomia de IA em melhorias |
| [#5503](https://github.com/nearai/ironclaw/pull/5503) | Compact Google extension capabilities | Gmail fetch + Calendar enhancements |

### Issues Fechadas (Indicando Conclusão de Marcos)

- [#2767](https://github.com/nearai/ironclaw/issues/2767) — Separação de engine v2 capability background de schemas de ferramentas → **CLOSED**
- [#3026](https://github.com/nearai/ironclaw/issues/3026) — Epic: Reborn production wiring and cutover readiness → **CLOSED**
- [#4533](https://github.com/nearai/ironclaw/issues/4533) — Reborn operator setup, config, diagnostics → **CLOSED**
- [#5261](https://github.com/nearai/ironclaw/issues/5261) — Reborn capability policy (admin-shared tools) → **CLOSED**
- [#4597](https://github.com/nearai/ironclaw/issues/4597) — Logs query API com redação → **CLOSED**
- [#4596](https://github.com/nearai/ironclaw/issues/4596) — Operator doctor diagnostics → **CLOSED**

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tema Central |
|-------|-------------|--------------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | **44** | **[EPIC] Track Reborn architecture landing strategy** — Rastreia entrega da arquitetura sem PRs massivos empilhados |
| [#6389](https://github.com/nearai/ironclaw/issues/6389) | **10** | Collapse build_local_runtime + build_production_shaped em `build_runtime(cfg)` |
| [#2767](https://github.com/nearai/ironclaw/issues/2767) | **7** | Separate engine v2 capability background de callable tool schemas |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | **7** | Configuration-as-Code: tenant blueprints e use-case harnesses |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | **7** | **[EPIC] Reborn product surface migration** |

### Análise de Demandas

**1. Arquitetura Reborn como Prioridade Absoluta**
O volume massivo de issues com label `reborn` e a conclusão de múltiplos épicos indicam que a landing da arquitetura Reborn é o foco principal. Issues como #2987 (44 comentários) demonstram que a estratégia de entrega em PRs agrupados está funcionando.

**2. Infraestrutura de Operadores em Maturação**
Com os épicos #4533, #4596, e #4597 fechados, o projeto demonstra progresso significativo em:
- Setup e diagnóstico de operadores
- Logs com redação
- Service lifecycle management

**3. Sistema de Autorização Baseado em Witness**
As issues #6434 e PRs #6432, #6436, #6438 formam um arco coeso de trabalho no sistema de autorização, evoluindo de "witness sempre presente" para "dispatch via witness only".

---

## 5. Bugs e Estabilidade

### Bugs Reportados/Resolvidos (24h)

| Issue/PR | Severidade | Descrição |
|----------|------------|-----------|
| [#6425](https://github.com/nearai/ironclaw/pull/6425) | Média | Fix SSE streams across navigation — streams eram perdidos ao navegar entre threads/tabs |
| [#6302](https://github.com/nearai/ironclaw/pull/6302) | Média | Preserve completed chat responses after stream retry |
| [#6153](https://github.com/nearai/ironclaw/pull/6153) | Baixa | Show running status on first automation run |
| [#6154](https://github.com/nearai/ironclaw/pull/6154) | Baixa | Show first-message loading state |
| [#6156](https://github.com/nearai/ironclaw/pull/6156) | Média | Unblock follow-ups after failed runs |

### Bugs Abertos Importantes

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#6394](https://github.com/nearai/ironclaw/issues/6394) | — | **[EPIC] Dogfooding & QA bug fixing 07/20-07/24** — Sprint dedicado a bugs de QA |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | — | **[EPIC] Error-recoverability endgame** — Meta: modelo recupera de 100% dos erros |

### Análise de Estabilidade

A maioria dos bugs reportados envolve **WebUI v2** (estados de loading, SSE, follow-ups após falhas), indicando que a nova interface está em fase de polimento. O épico #6394 demonstra consciência da equipe em addressar esses problemas proativamente. O foco em error-recoverability (#6284) sugere ambição de resiliência operacional.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#6433](https://github.com/nearai/ironclaw/issues/6433) | **UX** | **Feature: Dedicated custom instructions / master prompt section** — Similar a ChatGPT/Claude, seção para personalização persistente |
| [#2392](https://github.com/nearai/ironclaw/issues/2392) | **Multi-account** | **Host-level multi-account support para todos os canais de mensageria** — WeCom, Telegram, Slack, etc. |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | **Agent** | **Persistent multi-identity agent browsing via Chrome + CDP** — Navegação com sessões encriptadas e autenticação persistente |

### Epics de Roadmap Ativos

| Issue | Prioridade | Tema |
|-------|------------|------|
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | — | **Harness testing epic** — Unificar replay, E2E, live canary e eval |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) | — | **Automated QA para Reborn binary** (hermetic + fixture + e2e + live) |
| [#4632](https://github.com/nearai/ironclaw/issues/4632) | — | **Reborn WebUI v2 end-to-end smoke coverage** |
| [#4543](https://github.com/nearai/ironclaw/issues/4543) | — | **Runtime service profiles** para credenciais HTTP genéricas |
| [#4545](https://github.com/nearai/ironclaw/issues/4545) | — | **Self-serve secret setup** para user-generated tools |

### Sinais de Roadmap

1. **Extensibilidade:** Trabalhos como #6116 (unified generic extension runtime) e #5503 (Google extensions) indicam foco em inúmerar capacidades de integração.

2. **QA Automatizado:** Múltiplos épicos (#2828, #4775, #4632, #6067) focam em cobertura de testes, sugerindo maturidade como prioridade.

3. **Configuração Declarativa:** Issue #3036 sobre "Configuration-as-Code" sinaliza desejo de operator experience mais sofisticado.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Feedback Identificados

**Dores Operacionais:**
- Necessidade de setup, config e diagnóstico sem tocar arquivos internos (#4533 — agora fechada)
- Logs seguros com redação para produção (#4597 — agora fechada)
- Doctor diagnostics para falhas comuns (#4596 — agora fechada)

**Dores de Usabilidade:**
- Custom instructions persistentes para personalização (#6433 — novo)
- Multi-account para canais de mensageria empresarial (#2392 — aberto há meses)
- Estado de loading e tracking de execução na UI (#6153, #6154, #6156 — corrigidos)

**Expectativas de Produtividade:**
- Autonomia de IA para melhoriasincrementais via design system documentado (#5563)
- Paralelização de porting de skills/tools/channels (#3484 — Contributor Runway)

### Satisfação Geral

O fechamento simultâneo de múltiplos épicos de operador (#4533, #4596, #4597) e a conclusão de workstreams de capability policy (#5261) sugerem que a equipe está entregue valor operacional consistente. A release v1.0.0-rc.1 marca uma transição de "rebuild" para "landing", com foco em estabilidade e experiência de usuário.

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Potenciais Riscos)

| Issue | Criação | Comentários | Risco |
|-------|---------|-------------|-------|
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | 2026-04-17 | 2 | **Crate boundaries** — Epic de refatoração importante com baixa atividade |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | 2026-04-22 | 0 | **Harness testing** — Múltiplos épicos dependentes, mas sem comentários |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | 2026-04-12 | 1 | **Chrome + CDP browsing** — Featureambiciosa, risco de escopo |
| [#2392](https://github.com/nearai/ironclaw/issues/2392) | 2026-04-13 | 0 | **Multi-account** — Crítico para deployments empresariais |

### Issues Críticas com Dependências

| Issue | Gate para | Status |
|-------|-----------|--------|
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | Bloqueia cutover final | Gates: #3020, #3022, #3032, #3039, #3067 |
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | Contributor Runway | Parent: #2987, Gate: #3020 |
| [#6198](https://github.com/nearai/ironclaw/issues/6198) | Pre-v1 cleanup | Refactoring backlog antes do release |

### Recomendações

1. **Priorizar review de #2599** — Limites de crate são foundation para escalabilidade de codebase
2. **Desbloquear #2392** — Multi-account é bloqueador para adoção empresarial
3. **Acelerar #2828** — Múltiplos épicos de QA dependem deste arc

---

## Métricas Resumidas (24h)

| Categoria | Valor |
|----------|-------|
| Issues atualizadas | 43 |
| Issues abertas/ativas | 31 |
| Issues fechadas | 12 |
| PRs atualizados | 50 |
| PRs abertos | 35 |
| PRs merged/fechados | 15 |
| Releases | 1 (v1.0.0-rc.1) |
| Issues com >5 comentários | 5 |
| Bugs corrigidos | 5 |
| Novas features | 1 |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-22. Para atualizações em tempo real, consulte [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data de referência:** 2026-07-22
**Elaborado por:** Analista de Projetos Open Source — Agentes de IA

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) demonstra **altíssima atividade** no ciclo de desenvolvimento em 21 de julho de 2026, com 40 issues e 46 PRs atualizados em 24 horas — um ritmo de trabalho intenso que sugere uma equipe em ritmo de sprint. Das 40 issues, 21 foram fechadas, indicando foco em resoluções, enquanto 27 dos 46 PRs foram merged/fechados, evidenciando um pipeline de código saudável e revisão célere. A release v2.0.1-beta.1 foi publicada como hotfix de preparação para a estabilização da branch 2.0.x. A base de código está em transição arquitetural, com PRs estruturais em avaliação simultânea (OMP workflow modes, ToolGuard hardening, auto-registration de ferramentas). Bugs críticos de regressão da v2.0 (perda de contexto, loops infinitos, overhead de 2s) dominam as discussões, sinalizando que a versão ainda precisa de polimento antes de promoção definitiva.

---

## 2. Lançamentos

### ✅ v2.0.1-beta.1

**Publicação:** 2026-07-21

**Mudanças incluídas (3 commits):**

| # | Commit | Autor | Descrição |
|---|--------|-------|-----------|
| #6234 | `fix: use absolute import in Tauri entry point` | @rayrayraykk | Corrige erro de import que afetava builds Tauri/Desktop. |
| #6266 | `chore: bump version to 2.0.1b1` | @rayrayraykk | Bump de versão para marcação de release. |
| — | `fix(memoryspace): catch OSError in _saved_tool_refs` | — | Adiciona tratamento de OSError em persistence de tool refs. |

**Análise:** Esta release é um **hotfix de estabilidade** focado em corrigir problemas de compatibilidade com builds Desktop (Tauri) e robustness do subsistema de memória. Não há breaking changes. É marcada como beta, indicando que mais ajustes virão antes de uma release stable.

**Recomendação para usuários:** Atualizem para v2.0.1-beta.1 ao usar a versão Desktop/Tauri. Para server-only, a v2.0.0.post3 permanece funcional.

---

## 3. Progresso do Projeto

### PRs merged/fechados significativos em 2026-07-21

| # | PR | Área | Impacto | Relevância |
|---|-----|------|---------|-----------|
| [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) | `feat(omp): integrate OMP workflow modes` | Workflows | **Alta** | Adiciona 5 modos de workflow (UltraQA, Ralph, Ultrawork, Autopilot, Team) com spawn_subagent extendido, whitelisting de tools/skills e polling backoff. Revisão completada. |
| [#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) | `fix(governance): auto-register tools via @tool_descriptor` | Tool Governance | **Alta** | Unifica registro de ferramentas built-in e de plugins usando `@tool_descriptor`, eliminando listas mantidas manualmente. |
| [#6313](https://github.com/agentscope-ai/QwenPaw/pull/6313) | `fix(governance): refresh plugin tool defaults` | Tool Governance | **Média** | Corrige gaps de cache e validação de tool_type pós-merge do #6190. |
| [#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796) | `refactor(acp): decouple slash commands` | ACP/Core | **Alta** | Extrai safety checks, unifica bootstrap e remove order hardcoded de slash commands. |
| [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | `feat(agents): one-click copy agent config` | Console/Agents | **Média** | Funcionalidade UX para duplicar configurações de agentes. |
| [#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183) | `feat(logging): configurable rotation limits` | Ops/DevEx | **Média** | Adiciona `QWENPAW_LOG_MAX_SIZE` e `QWENPAW_LOG_MAX_BACKUPS`. |
| [#6271](https://github.com/agentscope-ai/QwenPaw/pull/6271) | `feat(providers): add AIOnly model provider` | Providers | **Média** | Adiciona provedor AIOnly (OpenAI-compatible, 190+ modelos agregados). |
| [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) | `feat(cli): add scriptable env reads` | CLI | **Média** | `qwenpaw env get/list --json` para automação. |
| [#6270](https://github.com/agentscope-ai/QwenPaw/pull/6270) | `feat: support user editable agent mode` | Agents | **Média** | Permite editar AgentMode via UI. |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | `fix(scroll): preserve session IDs during history migration` | Sessions | **Alta** | Resolve problema de isolamento de sessões reportado em #6299. |
| [#6195](https://github.com/agentscope-ai/QwenPaw/pull/6195) | `refactor: ring context indicator` | Console | **Média** | Move usage de tokens de ação por mensagem para indicador de sessão. |

**Síntese:** A equipe está fechando uma onda de PRs estruturais grande (OMP, governance, ACP refactor). O foco pós-merge são os follow-ups de hardening (#6313, #6311, #6317), indicando maduração dos recursos introduzidos.

---

## 4. Temas Quentes da Comunidade

### Issues e PRs com maior engajamento

#### 🔥 #2291 — Help Wanted: Open Tasks (65 comentários) — CLOSED
**Link:** [agentscope-ai/QwenPaw#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)

Questão central de coordenação de contribuições. Lista tarefas abertas priorizadas de P0 a P2. Alta participação da comunidade (65 comentários) reflete um esforço organizado para distribuir trabalho. Status: **CLOSED**, indicando que o board foi encerrado ou atualizado.

---

#### 🔥 #6257 — Multiple tool calls produzem thinking output idêntico (13 comentários) — CLOSED
**Link:** [agentscope-ai/QwenPaw#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257)
**Etiqueta:** `[bug]`

**Problema:** Quando o agente executa múltiplas tool calls em um único turno, todos os blocos de thinking contêm conteúdo idêntico, em vez de raciocínio independente por chamada.

**Sinal de comunidade:** Este é o bug com **segundo maior engajamento** (13 comentários), afetando a qualidade das respostas do agente em cenários multi-tool. Corrigido ou em resolução.

---

#### 📊 #6297 — Upload drag-and-drop de imagens/PDFs/documentos (4 comentários) — OPEN
**Link:** [agentscope-ai/QwenPaw#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)
**Etiqueta:** `[enhancement]`

**Demanda:** Suporte a upload direto de imagens, PDFs e documentos Office via drag-and-drop na conversa. Cenário de uso: revisão de contratos.

**Esforço estimado:** Médio-Alto (suporte a múltiplos MIME types, parsing de documentos Office).

---

#### 📊 #6281 — Web Console responsivo para mobile (4 comentários) — OPEN
**Link:** [agentscope-ai/QwenPaw#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)

Demanda transversal: usuários querem operar o Console via dispositivos móveis. Impacta UX geral do produto.

---

#### 📊 #6083 — Atalhos para产出物 (artefatos) do workspace no Desktop (3 comentários) — OPEN
**Link:** [agentscope-ai/QwenPaw#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)
**Etiqueta:** `[enhancement]`

**Demanda:** Usuários do QwenPaw Desktop querem acessar arquivos gerados pelo agente (relatórios, CSVs, imagens) sem navegar no filesystem. Esperam botão "ir para workspace" ou "download última产出".

---

#### 📊 #5992 — Per-session model overrides (3+ PRs relacionados) — OPEN
**Link:** [agentscope-ai/QwenPaw#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)
**PR associado:** [agentscope-ai/QwenPaw#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318)

Feature request com alta demanda: permitir que um mesmo Agent use modelos diferentes por conversa, sem mudar o default. PR em desenvolvimento por @mango8853.

---

## 5. Bugs e Estabilidade

### Por severidade (baseado em impacto funcional)

#### 🔴 Críticos (afetam funcionalidade core)

| # | Bug | Descrição | Status | Impacto |
|---|-----|-----------|--------|---------|
| [#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299) | Deleted session records persist in history.db | Sessões deletadas não são removidas do DB, causando colisão de seq e contaminação cross-session. | CLOSED | Perda de contexto,串会话, páginas em branco. |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | RemoteProtocolError: peer closed connection | QwenPaw fecha conexões prematuramente durante streaming. | CLOSED | Requests falham intermitentemente. |
| [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | v2.0 diálogo lose state e infinite loops | Regressão da v1.x. Conversas perdem estado entre turnos; loops infinitos de resposta. | CLOSED | Usabilidade degradada severamente. |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | ~2s overhead fixo por reply na v2.0 | Regressão de performance vs v1.x. Afeta todas as interações. | OPEN | Latência inaceitável para conversas simples. |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | Subagent polling infinito no Feishu | Dois subagents simultâneos disparam polling rápido que não pode ser interrompido do Feishu. | CLOSED | Vazamento de requisições, degradação de canal. |

#### 🟠 Altos (afetam fluxos importantes)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Agent轮次 repetidos + memory_search loops | Agente entra em loop de mensagens similares; memory_search chamado repetidamente. |
| [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | Plan mode lê o mesmo arquivo 5+ vezes | Regressão no modo planejamento; leitura redundante de arquivos. |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI modelo max_output_tokens não funciona | Setting de limite de output não é respeitado para modelos OpenAI-compatible. |
| [#6292](https://github.com/agentscope-ai/QwenPaw/issues/6292) | Chunk messages status=Completed prematuramente | Durante streaming custom channel, muitas mensagens intermediárias já têm `finish=true`. |

#### 🟡 Médios (UX e edge cases)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding dimensions não enviadas à API | Campo `use_dimensions` exposto no Console mas não wired no backend. |
| [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | Timezone conversion incorreta em timestamps | Timestamps UTC naive tratados como hora local do usuário. |
| [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) | LaTeX com radicais não renderiza | Fórmulas com raiz quadrada não renderizam corretamente no frontend. |
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | WARNING logs causam刷屏 | Nível de log incorreto em model_factory.py导致日志刷屏. |

**Síntese de estabilidade:** A v2.0 trouxe regressões significativas (performance ~2s, loss of state, loops). A equipe respondeu rapidamente — a maioria dos bugs críticos está CLOSED. O backlog de bugs médios/baixos precisa de atenção para evitar acúmulo técnico (technical debt).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas em demanda (issues OPEN)

| # | Feature | Votos/Reações implícitos | Área | Esforço estimado |
|---|---------|--------------------------|------|------------------|
| [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | Drag-drop upload (imagens, PDFs, Office) | 4 comentários | Channels/Console | Alto |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Console responsivo mobile | 4 comentários | Console/Frontend | Médio |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | Atalhos para workspace do Desktop | 3 comentários | Desktop/Tauri | Médio |
| [#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) | Auto-adicionar timestamp real ao contexto | 2 comentários | Core/Agents | Baixo-Médio |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | Suporte qwen3.8-max-preview na lista de modelos | 2 comentários | Providers | Baixo |
| [#6308](https://github.com/agentscope-ai/QwenPaw/issues/6308) | Terminal integrado para

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-22

---

## 1. Panorama do Dia

ZeroClaw demonstra **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. O projeto está em plena fase de evolução arquitetural, impulsionado pela implementação do **Goal Mode** (PRs stacked #8687–#8996) e por correções de segurança críticas. Não houve lançamentos, mas a taxa de merge está elevada (10 PRs fechados/merged). A comunidade debate ativamente vários RFCs de alto impacto, enquanto bugs de severidade S0–S1 exigem atenção imediata — incluindo uma falha de allowlist em ferramentas delegate e um bypass de workspace no shell tool.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24h.**

A ausência de releases indica foco em estabilização de branches de feature (especialmente a stack de Goal Mode) antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (10 itens)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| **#9183** | fix(sop): bypass switch evaluation on false top-level when guard | Corrige roteamento SOP que avaliava `switch` após guarda `when` falsa | Estabilidade SOP |
| **#9011** | feat(zerocode): show active runtime context in dashboard | Dashboard agora exibe contexto de runtime conectado | UX / Observabilidade |
| **#9055** | fix(docs): make translation refresh reproducible | Geração de docs agora usa caminho compartilhado, garantindo checkouts limpos | CI / Docs |
| **#8756** | fix(tests): make media marker assertions portable on Windows | Testes RPC agora funcionam em Windows (corrige `"/uploads/"` hardcoded) | Portabilidade |
| **#9120** | [CLOSED] Bug SOP routing — mesmo issue que #9183, em progresso | Confirmado e corrigido via #9183 | — |

### PRs Abertos de Alto Impacto (Goal Mode Stack)

| # | Título | Status | Relevância |
|---|--------|--------|------------|
| **#8687** | feat(runtime): add goal controller and verifier | Aberto | Core do Goal Mode |
| **#8688** | feat(runtime): add trusted goal tools and delegation boundaries | Aberto | Limites de segurança |
| **#8689** | feat(channels): add goal command admission | Aberto | Interface `/goal` |
| **#8746** | fix(goal): stop active goal self-resume loops | Aberto | Bug crítico |
| **#8996** | fix(goal): preserve running goals across daemon reload | Aberto | Resiliência |

> ⚠️ Todos carregam tag `needs-author-action` e `risk:high` — a stack precisa de revisão urgente.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Análise |
|---|--------|-------------|----|---------|
| **#8226** | Feature: typed per-agent git identity para operações git | 6 | 0 | Demanda por multi-tenancy de identidade git; introduz `runtime_context` e `runtime_secrets` não-secretos |
| **#8505** | Bug: Telegram channel não pode ser configurado (S1) | 6 | 0 | **Bug prioritário** — `zeroclaw channels doctor` falha mesmo pós quickstart; agente responde só no CLI |
| **#8303** | RFC: Goal mode para sessões autônomas | 4 | 1 | RFC central — ZeroClaw carece de modo durável para perseguir um objetivo até conclusão/cancelamento/budget |
| **#8603** | RFC: OpenAI Chat Completions compatibility adapter | 4 | 0 | Habilitaria integração com Open WebUI, LobeChat sem adapter custom; **arquitetura** |
| **#8279** | Bug: delegate ignora tool allowlist do pai (S0) | 3 | 0 | **Segurança crítica** — sub-agente pode invocar ferramentas excluídas pela política pai |

### Tendências de Discussão

1. **Arquitetura de providers** — RFCs #8396, #8603, #8568 indicam interesse forte em abstrações de provider mais flexíveis (wire protocol, OpenAI compat, MoA).
2. **Goal Mode** — RFC #8303 + 5 PRs stacked demonstram que a feature está prestes alandar.
3. **MCP Stability** — Issues #8642 (memory leak) e #8731 (zombies) mostram problemas persistentes em MCP servers stdio-based.
4. **Matrix channel** — #8541 busca history scoped por thread/conversation, indicando uso em ambientes enterprise.

---

## 5. Bugs e Estabilidade

### Severidade S0–S1 (Críticos/Altos) — Exigem Atenção Imediata

| # | Bug | Severidade | Status | Risco |
|---|-----|-----------|--------|-------|
| **#8279** | delegate ignora allowlist do pai — sub-agente acessa ferramentas não autorizadas | S0 | `status:accepted` | **Data loss / security** |
| **#9247** | Shell Tool Workspace Boundary Bypass | S0 | OPEN, 0 comentários | **Segurança** — symlink permite escape do workspace |
| **#8505** | Telegram channel não configurável — workflow bloqueado | S1 | `status:in-progress` | high |
| **#8718** | config init gera template que o daemon rejeita (transcription local_whisper) | S2 | `status:in-progress` | high |
| **#8642** | MCP/tool-schema cloning causa crescimento unbounded de RSS | S2 | `status:in-progress` | high |
| **#8731** | MCP servers stdio acumulam como zombie processes | S2 | `status:in-progress` | high |

### Severidade S2 (Medium/Degraded) — 6 issues adicionais

- **#8410** — Canal envia resposta visível mesmo em "intentional no-reply" (silenciar não funciona)
- **#8810** — Documentação do Telegram está errada
- **#8615** — Compatible provider deleta conteúdo via stripping incondicional de `<think>` tags
- **#8834** — `config set` não consegue criar aliases fora de `providers.*`
- **#9240** — `save_dirty` ignora writes com dot em map keys (afeta gpt-4.1, claude-3.5-sonnet, etc.)
- **#9180** — QQ group replies falham por falta de `msg_id`

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs Abertos (Indicações de Direção)

| # | RFC | Tipo | Risco | Sinal |
|---|-----|------|-------|-------|
| **#8303** | Goal mode para sessões autônomas | Epic | high | **Roadmap** — próximo grande feature |
| **#8603** | OpenAI Chat Completions adapter | Compatibility | high | Integração com ecossistema |
| **#8396** | Wire protocol first-class em provider construction | Architecture | high | Refatoração de providers |
| **#8780** | Realtime speech-to-speech via Gemini Live | Channel | high | Multimodal/voz |
| **#8568** | Mixture-of-Agents (MoA) virtual provider | Architecture | high | Abstração avançada de provider |
| **#9246** | Preservar Todo tracker config durante ZeroCode migration | Config | high | Refatoração em andamento (#9013) |

### Features Solicitadas (Enhancements P2)

- **#8226** — Git identity por agente (non-secret `runtime_context`)
- **#8541** — Matrix session history scoped por thread/conversation
- **#8600** — Fácil troca de modelo por chat em providers multi-model
- **#8309** — SkillForge está órfão — wire up ou remova
- **#8415** — Telegram Bot API 10.1 Rich Messages
- **#8348** — Hook/event para Skill CRUD observability
- **#9228** — Dashboard para trends de eval harness

### Tracker/Epic em Andamento

- **#8288** — SOP milestone: daemon-owned SOP control plane para 5/5
- **#8583** — Channel/source shared-boundary cleanup

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Relato | Issue |
|-----------|--------|-------|
| **Onboarding quebrado** | Fresh install com `zeroclaw config init` gera config que o daemon rejeita silenciosamente | #8718 |
| **Telegram não funciona** | Quickstart + zerocode não configuram Telegram corretamente; `channels doctor` mente | #8505 |
| **Segurança de delegate** | Sub-agentes acessam ferramentas que o parent bloqueou — risco real | #8279 |
| **Configuração de providers** | Usuários de moltis sentem falta de provider como model provider com troca fácil por chat | #8600 |
| **Memória MCP** | Instâncias WSL2 crasham por OOM devido a memory leak em MCP tool-schema | #8642 |
| **Docs desatualizadas** | Exemplo de Telegram na documentação está incorreto | #8810 |

### Cenários de Uso Emergent

1. **Multi-tenant git operations** — usuários precisam de identidade git diferente por agente (#8226)
2. **Goal-oriented agents** — demanda por modo durável que persiga objetivo até conclusão (#8303)
3. **Enterprise Matrix** —Matrix deployments precisam de history scoped por thread (#8541)
4. **Voice/Gemini Live** — interesse em canal speech-to-speech nativo (#8780)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| # | Título | Criado | Idade | Prioridade | Problema |
|---|--------|--------|-------|------------|----------|
| **#9228** | Eval harness: results dashboard/trend tracking | 2026-07-21 | 1 dia | p3 | Folow-up de #7065; precisa de direction |
| **#9246** | RFC: Preserve Todo tracker config | 2026-07-21 | 1 dia | — | RFC draft novo, precisa de sponsor |
| **#8309** | SkillForge está órfão — wire ou remova | 2026-06-25 | ~27 dias | p2 | Decisão de arquitetura pendente |

### PRs Blocked / Waiting

| # | Título | Status | Bloqueio |
|---|--------|--------|----------|
| **#8687–#8996** | Goal mode stack | `needs-author-action` | Aguardando author |
| **#9013** | refactor(config)!: move TodoWrite display | `needs-author-action` | Aguardando author |
| **#8838** | fix(providers): idle-bound SSE streaming | `needs-author-action` | Aguardando author |
| **#8638** | feat(skills)!: replace ClawHub with git-catalog | `needs-author-action` | Aguardando author |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|----------|
| Issues ativas (24h) | 50 | 🟢 Muito ativo |
| PRs atualizados (24h) | 50 | 🟢 Muito ativo |
| Releases (24h) | 0 | 🟡 Sem tag, mas normal em fase de feature |
| Bugs S0–S1 abertos | 5 | 🔴 Críticos — requieren fix urgente |
| RFCs em discussão | 6+ | 🟢 Evolução arquitetural saudável |
| PRs `needs-author-action` | 9+ | 🔴 Gargalo de review |
| Stack de Goal Mode | 5 PRs | 🟢 Feature quase pronta |

---

**Conclusão:** ZeroClaw está em momento de **alta transformação**, com o Goal Mode como maior feature iminente e correções de segurança (delegate allowlist, shell boundary) como prioridades absolutas. O alto volume de PRs pendentes de author-action sugere gargalo na revisão — recomendaria priorização de reviews para a stack de Goal Mode e os bugs S0.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*