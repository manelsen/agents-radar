# Resumo diário do ecossistema de agentes de IA 2026-07-13

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-12 20:38 UTC

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

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data:** 2026-07-13  
**Analista:** Sênior — Ecossistema Open Source

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **atividade intensa e fragmentação técnica** em 13 de julho de 2026. Três projetos (Hermes Agent, IronClaw e ZeroClaw) lideram em volume de contribuições, enquanto dois (NanoBot e CoPaw/QwenPaw) enfrentam crises de estabilidade pós-release. A convergência emerge em três vetores: (1) necessidade de caches de contexto e prompts para otimização de tokens, (2) multi-channel deployment com autenticação granular, e (3) CI/CD maturando para pipelines de produção. O NullClaw permanece como referência estática, carecendo de atividade para posicionamento competitivo.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Avaliação Saúde |
|---------|--------------|-----------|----------|-----------------|
| **NullClaw** | 0 | 0 | — | 🔴 Inativo |
| **NanoBot** | 3 | 11 | 0 | 🟡 Pré-release (estável) |
| **Hermes Agent** | 50 | 50 | 1 (v0.18.2) | 🟢 Alta atividade |
| **PicoClaw** | 5 | 3 | 0 | 🟡 Baixo volume |
| **IronClaw** | 9 | 50 | 0 (iminente 0.29.1) | ⚠️ CI bottleneck |
| **CoPaw/QwenPaw** | 19 | 10 | 0 | 🔴 Regressões v2.0.0 |
| **ZeroClaw** | 50 | 50 | 0 (milestone v0.8.3) | ⚠️ Bug P1 acumulado |

**Métricas consolidadas do ecossistema:**

| Indicador | Total | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 134 | Alta vibração comunitária |
| PRs abertos (24h) | 124 | Pipeline de desenvolvimento ativo |
| Releases (7d) | 1 | Ciclo de release pausado em 4/6 projetos |
| Bugs P1/S1 abertos | 7+ | Concentrados em CoPaw (regressões) e ZeroClaw (OpenAI providers) |

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw apresenta **paralisia de desenvolvimento**, sem atividade nas últimas 24h. Esta condição limita comparações diretas, mas estabelece um baseline negativo:

**Defasagens identificadas:**
- Zero PRs em pipeline contrasta com 50+ PRs de IronClaw e ZeroClaw
- Ausência de comunidade ativa reduz capacidade de detecção de bugs
- Sem releases, o projeto não demonstra trajetória de maturidade

**Ação recomendada:** Avaliar se o repositório representa um projeto abandonado ou se há janela de reativação via transferência de ownership para comunidade ativa.

---

## 4. Focos Técnicos Compartilhados

A análise cruzada revela quatro necessidades arquiteturais emergindo simultaneamente em múltiplos projetos:

### 4.1 Caching e Compressão de Contexto

| Projeto | Problema Reportado | Impacto |
|---------|-------------------|---------|
| NanoBot | Prompt prefix não preservado → +60s/turn com Ollama | Usabilidade local inviável |
| ZeroClaw | Default 32k context budget excedido no primeiro turno | Bloqueio de onboarding |
| CoPaw/QwenPaw | Compressão de contexto quebra tool_call/tool_result pairing | 400 BadRequestError |

**Síntese:** A otimização de tokens emerge como gargalo universal. Todos os três projetos com atividade significativa enfrentam problemas de gestão de contexto.

### 4.2 Multi-Channel e Autenticação

| Projeto | Foco | Status |
|---------|------|--------|
| IronClaw | Extension-runtime P1-P5 (Slack/Telegram outbound) | Em desenvolvimento |
| PicoClaw | Matrix sync reconnection logic | Bug crítico (11 dias stale) |
| ZeroClaw | WASM channel plugins + Mirror channels | PR merged (#8852) |

**Síntese:** A expansão para múltiplos canais de comunicação (Slack, Telegram, Matrix, DingTalk) é tema recorrente, com desafios de autenticação, reconnection e permissions.

### 4.3 CI/CD e Estabilidade

| Projeto | Situação | Falha Rate |
|---------|----------|------------|
| IronClaw | ~70% main pushes failing (CI fragility) | **Crítico** |
| Hermes Agent | Flaky tests em Windows/macOS/Docker | Moderado |
| PicoClaw | Issues stale >7-11 dias | Processual |

**Síntese:** A maturidade de CI/CD é preditor de saúde de projeto. IronClaw demonstra alta atividade mas infraestrutura instável.

### 4.4 Provider Compatibility (OpenAI API)

| Projeto | Problema |
|---------|----------|
| ZeroClaw | OpenAI Responses API rejeita modelos vision-capable (S1); Chat Completions rejeita reasoning effort |
| Hermes Agent | Ollama/Qwen tool definitions inconsistentes (Windows) |

**Síntese:** A fragmentação de providers (OpenAI, Ollama, Anthropic, Qwen) gera incompatibilidades específicas de plataforma.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura Técnica

| Projeto | Stack Principal | Diferencial |
|---------|-----------------|-------------|
| **Hermes Agent** | Electron/Node.js | Desktop GUI nativo; refatoração CLI modular (16.280 linhas extraídas) |
| **IronClaw** | Rust/WASM | Extension runtime via manifest v3; marketplace de plugins |
| **ZeroClaw** | Rust + WASM | WASM channels nativos; OpenAI-compatible endpoint (#8486) |
| **CoPaw/QwenPaw** | Python/AgentScope | Integração Qwen nativa; desktop bundling (PyInstaller) |
| **NanoBot** | Python | WebUI com session-scoped model presets; Feishu integration |
| **PicoClaw** | Python | Skill enable/disable via UI; ARMhf Docker support |

### 5.2 Público-Alvo

| Projeto | Segmento Primário | Evidência |
|---------|-------------------|-----------|
| **Hermes Agent** | Desenvolvimento local (Windows/Termux/WSL) | 12+ issues Windows, Termux filesystem |
| **IronClaw** | Enterprise/NEAR ecosystem | Slack/Telegram channels, CLI Reborn, extension marketplace |
| **ZeroClaw** | Self-hosting edge/IoT | ARMhf, serverless, scale-to-zero, zerorelay |
| **CoPaw/QwenPaw** | Usuários enterprise asiáticos | Feishu, DingTalk, Chinese-language TUI issues |
| **PicoClaw** | IoT/edge devices low-cost | OneCloud, Raspberry Pi Zero (armhf) |

### 5.3 Estratégia de Release

| Projeto | Estágio | Padrão |
|---------|---------|--------|
| **Hermes Agent** | Maturidade | Releases frequentes (v0.18.2), taxa fechamento 60% |
| **IronClaw** | Expansão acelerada | Breaking changes em minors (0.24→0.29.1); alta atividade |
| **ZeroClaw** | Feature freeze v0.8.3 | Milestone tracking formalizado |
| **CoPaw/QwenPaw** | Estabilização pós-release | Volume de bugs indica release precipitada |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | Issues fechadas/24h | PRs merged/24h |
|------|----------|---------------------|----------------|
| **Sprint rápido** | Hermes Agent, ZeroClaw | 30-50 | 2-8 |
| **Estável** | NanoBot, PicoClaw | 2-5 | 2-3 |
| **Crise** | CoPaw/QwenPaw | 3 | 3 (mas bug volume >10) |
| **Paralisado** | NullClaw | 0 | 0 |

### 6.2 Qualidade de Processos

**Indicadores positivos:**
- **Hermes Agent:** Taxa de resolução 60%, regressões fechadas em <48h
- **IronClaw:** Taxonomy diária de falhas (Issue #6011), static pre-push checks propostos
- **PicoClaw:** Community-driven i18n contributions (bn-in, cs locales)

**Indicadores preocupantes:**
- **PicoClaw:** Bug #3203 (Matrix reconnection) sem resposta há 11 dias — stale flag
- **CoPaw/QwenPaw:** v2.0.0 com 7+ bugs críticos simultâneos — release sem QA suficiente
- **ZeroClaw:** 6 PRs size L/XL aguardando ação do autor — gargalo de review

### 6.3 Engajamento por Issue

| Projeto | Média comentários/issue | Observação |
|---------|------------------------|------------|
| Hermes Agent | 2.3 | Padrão saudável de discussão |
| ZeroClaw | 4-9 (hot issues) | Alta polarização em features críticas |
| NanoBot | 2-4 | Comunidade engajada mas small |
| CoPaw/QwenPaw | 1-4 | Issue duplicadas indicam comunicação fragmentada |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

**T1 — Local-first e modelos open source:**
O feedback de Ollama (#4867 em NanoBot: "+60s/turn") e Qwen3-14B (#63392 em Hermes) indica que a comunidade prioriza execução local. Projetos que não otimizarem para VRAM/quantização enfrentarão rejeição.

**T2 — WASM como runtime de extensibilidade:**
IronClaw (extension-runtime P1-P5), ZeroClaw (#8852 WASM channels), e a arquitetura de CoPaw (desktop bundling) convergem para WASM como substrate de plugins. A fragmentação atual entre manifestos (IronClaw v3 vs. ZeroClaw custom) deve consolidar em padrões.

**T3 — Multi-channel como diferencial competitivo:**
Slack, Telegram, Matrix, DingTalk, Feishu, WeChat, WhatsApp, SimpleX — todos representados. A batalha é por cobertura de integrações, não diferenciação conceitual.

**T4 — Observabilidade como feature:**
In-flight prompt counter (#8905 em ZeroClaw), feature discovery tips (#63397 em Hermes), per-session model overrides (#5992 em CoPaw). Métricas de uso e debugability são demandas explícitas.

### 7.2 Tendências Emergentes

**T5 — Self-hosting e edge computing:**
ZeroClaw (zerorelay, scale-to-zero), PicoClaw (ARMhf, OneCloud), e ZeroClaw (#9022 Slack Events API) sinalizam demanda por deployment em dispositivos restricted (1GB RAM, NAT/CGNAT).

**T6 — Regressão de releases major:**
CoPaw/QwenPaw v2.0.0 demonstra risco de quebrar backward compatibility em upgrades. A comunidade Tolera "breaking changes" em minor versions, mas não perda de sessões existentes.

### 7.3 Oportunidades de Mercado

| Oportunidade | Projetos Impactados | Demanda |
|--------------|---------------------|---------|
| Prompt cache API nativa | NanoBot, ZeroClaw | Visibilidade de custos |
| Contexto preemptive trim | ZeroClaw | UX onboarding |
| Session recovery/fork | ZeroClaw, NanoBot | Resiliência operacional |
| Cross-channel session binding | CoPaw, IronClaw | Enterprise unificação |

---

## Conclusão Executiva

O ecossistema de agentes de IA open source em 2026-07-13 demonstra **duas velocidades**: projetos em sprint acelerado (Hermes, IronClaw, ZeroClaw) e projetos em crise de estabilização (CoPaw). NullClaw permanece irrelevante por inatividade.

**Para decisores técnicos:**
- Evitar CoPaw/QwenPaw em produção até v2.0.x estabilizar
- Monitorar IronClaw para extension-runtime — impacto em marketplace de plugins
- ZeroClaw oferece arquitetura mais modular (WASM) mas acumulou 5 bugs S1

**Para desenvolvedores:**
- Priorizar caching de contexto e prompts em contributions
- Providers OpenAI (Responses API vs. Chat Completions) requerem adaptadores específicos
- CI/CD maturidade (IronClaw) é pré-requisito para releases confiáveis

**Próxima atualização recomendada:** 2026-07-14 — atenção a releases iminentes de IronClaw (0.29.1) e CoPaw (hotfix v2.0.1).

---

*Relatório gerado automaticamente — Ecossistema Open Source de Agentes de IA*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-13

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** em 13 de julho de 2026, com 11 PRs atualizados e 3 issues movimentadas nas últimas 24h. A atividade concentra-se principalmente em correções de bugs críticos (P1), refatorações de sessão e melhorias no WebUI. Uma correção de segurança relevante (#4892) foi merged, demonstrando atenção à integridade do sistema. Não houve lançamentos de novas versões, indicando fase de estabilização antes de um próximo release.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto encontra-se em período pré-release, com volume significativo de PRs em conflito ou aguardando merge. Recomenda-se monitorar o repositório para announcement de nova versão nas próximas 48-72h.

---

## 3. Progresso do Projeto

### PR Merged/Closed Hoje

| # | Título | Autor | Prioridade | Impacto |
|---|--------|-------|------------|---------|
| [#4892](https://github.com/HKUDS/nanobot/pull/4892) | fix(webui): allow remote workspace access reduction | Re-bin | P1 | **Segurança** — Remote WebUI sessions agora podem reduzir Full Access para Default Permission |

### Avanços Principais

**#4892 — Correção de Segurança WebUI**
- Permite que sessões remotas reduzam escopo de acesso sem alterar o workspace
- Sessões remotas mantêm limitações de acesso a alterações de projeto e escalação
- Apenas localhost e clientes nativos retêm privilégios completos

**Destaque para PRs em evolução (abertos):**
- **#4855** — Guided setup flows para WebUI com validação e QR handoff (Feishu)
- **#4650** — Extração de turn history recovery para `nanobot.session.turn_history`
- **#4866** — Model presets now session-scoped com captura de runtime imutável

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Preserve exact prompt prefix to enable caching in Ollama | **CLOSED** | 4 | 0 |

**Análise:** Issue resolvida demonstra demanda por **compatibilidade com modelos locais (Ollama)**. O problema informava que Nanobot adiciona 60 segundos desnecessários por turno ao usar Ollama, tornando o uso local "totalmente inviável" com 32GB de VRAM.

### Tendências Observadas

1. **Caching de prompts** — necessidade de preservação exata de prefixos para otimização de requisições
2. **Modularização de sessão** — separação de concerns de turn history do AgentLoop
3. **Acessos e permissões** — refinamento granular de segurança em sessões remotas vs. locais

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 issues)

#### 🔴 Alta Severidade (P1)

**Nenhum bug P1 aberto hoje.**

#### 🟡 Média Severidade (P2)

| # | Título | Autor | Descrição |
|---|--------|-------|-----------|
| [#4894](https://github.com/HKUDS/nanobot/issues/4894) | prune_dream_sessions() fails with base64-encoded files | groudas | Função usa glob `dream_*.jsonl` mas arquivos agora são `ZHJlYW06...jsonl` (base64) |
| [#4893](https://github.com/HKUDS/nanobot/issues/4893) | /dream-log shows non-Dream commits | groudas | git.log() sem filtro exibe commits de backup/processos externos |

#### Bugs em PR (corrigidos em progresso)

| # | Título | Prioridade | Problema |
|---|--------|------------|----------|
| [#4842](https://github.com/HKUDS/nanobot/pull/4842) | CancelledError in close_mcp | P1 | asyncio.CancelledError não tratado no shutdown de MCP |
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | .strip() on multimodal data | P1 | AttributeError ao processar mensagens multimodais |
| [#4895](https://github.com/HKUDS/nanobot/pull/4895) | Transcription API key placeholders | P2 | `${ENV_VAR}` não resolvido para provider de transcrição |

### Impacto na Estabilidade

- **Dream Sessions**: Incompatibilidade pós-commit cf2f5896 — funcionalidade de cleanup quebrada
- **Multimodal**: Potencial crash em canais que entregam conteúdo multimídia
- **MCP Shutdown**: Timeout em subprocessos pode causar exception leak

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Autor | Prioridade | Resumo |
|---|--------|-------|------------|--------|
| [#4879](https://github.com/HKUDS/nanobot/pull/4879) | Gate sustained-goal behind opt-in flag | franciscomaestre | P2 | long_task/complete_goal como feature opt-in (off por padrão) |
| [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Bind model presets to sessions | chengyongru | P1 | Persistência de seleção de modelo por sessão |
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | Add guided setup flows | Re-bin | — | Channel setup com validação e links oficiais |
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | Cache breakpoint before Recent History | sumleo | — | Cache de system prompt estável antes do histórico crescente |

### Sinais de Roadmap

1. **Sustained-goal gate**: Comunidade sinaliza que background goal bloqueia interação do usuário — flag de desativação pode ser default
2. **Model presets session-scoped**: Evolução para múltiplas instâncias de modelo por conversa
3. **Setup UX**: Onboarding mais estruturado para novos canais (Feishu mencionado)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**The-Markitecht (#4867)** — *Usuário Ollama*
> "Nanobot adds an extra 60 seconds to every single turn, even the dead-simple turns. This is totally unusable with Ollama and 32 GB of VRAM."

**groudas (#4893, #4894)** — *Desenvolvedor*
> Identificou regressão pós-commit cf2f5896 no sistema de Dream Sessions, onde pruning e logging não funcionam com nova nomenclatura base64.

### Insights Comportamentais

| Cenário | Feedback | Sentimento |
|---------|----------|------------|
| Modelos locais (Ollama) | Tempo de resposta elevado + caching quebrado | 😡 Insatisfeito |
| Dream Sessions | Funcionalidade quebrada após update | 😠 Insatisfeito |
| Remote WebUI | Restrições de acesso muito rígidas | 🤔 Neutro/Pendente |
| long_task feature | Bloqueia interação do usuário | ⚠️ Alerta |

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >5 dias

| # | Tipo | Título | Criado | Dias Inativo |
|---|------|--------|--------|--------------|
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | PR | Weather Skill fix | 2026-06-01 | ~12 dias |
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | PR | Cache breakpoint | 2026-06-16 | ~27 dias |
| [#4616](https://github.com/HKUDS/nanobot/pull/4616) | PR | Subagent routing | 2026-07-01 | ~12 dias |
| [#4650](https://github.com/HKUDS/nanobot/pull/4650) | PR | Turn history refactor | 2026-07-02 | ~11 dias |

### PRs com Conflitos Não Resolvidos

| # | Título | Conflito desde |
|---|--------|----------------|
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | Multimodal .strip() fix | 2026-07-11 |
| [#4650](https://github.com/HKUDS/nanobot/pull/4650) | Session refactor | 2026-07-11 |
| [#4616](https://github.com/HKUDS/nanobot/pull/4616) | Subagent routing | 2026-07-11 |
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | Cache enhancement | 2026-07-11 |
| [#4879](https://github.com/HKUDS/nanobot/pull/4879) | long_task gate | 2026-07-11 |
| [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Model presets | 2026-07-11 |

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade (PRs/24h) | 🟢 Alta (11) | Estável |
| Bugs P1 abertos | 🟢 0 | Positiva |
| Releases (7d) | 🔴 0 | Aguardando |
| Conflitos pendentes | 🟡 6 | Atenção |
| Backlog inativo (>5d) | 🟡 4 | Monitorar |

---

**Gerado em:** 2026-07-13  
**Fonte:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**Próxima atualização recomendada:** 2026-07-14

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-13

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade comunitária** em 13 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A taxa de fechamento de issues (60%) supera a de abertura, indicando maturidade no fluxo de trabalho. Não houve lançamentos oficiais hoje, mas множественные PRs estão em pipeline para correções críticas. A distribuição de severidade mostra predominância de bugs P2 (alta prioridade) em plataformas Windows, macOS e Docker. O codebase apresenta regressões conhecidas sendo ativamente trabalhadas pela comunidade.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A versão mais recente mencionada nos reports é **v0.18.2** (2026.7.7.2, commit 7b5ba20), referenciada no Issue #63370 sobre desalinhamento de input box no Desktop GUI para Windows 10.

> **Nota de migração pendente**: Usuários Windows devem aguardar patch para a release v0.18.2 antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Recentes Merged/Fechados

| PR | Tipo | Componente | Impacto |
|----|------|------------|---------|
| #12355 | Refactor | CLI | Extração de `cli_config`, `cli_git`, `cli_display` (−2.158 linhas) — melhoria de manutenibilidade |
| #61039 | Bug Fix | Browser (Windows) | Correção de resource leak no `agent-browser-win32-x64.exe` |
| #63390 | Bug Fix | Voice/TTS | Timeout de 10s para `proc.wait()` após `kill` — previne hang permanente |
| #62591 | Bug Fix | File Tools | Captura de `mtime` antes da leitura — previne dedup stale |
| #63391 | Bug Fix | Desktop/Electron | Rebuild de `node-pty` para Linux — resolve crash no lançamento |
| #63389 | Performance | CLI/Dashboard | Skip de contexto enriquecer não utilizado em session-search |
| #61834 | Bug Fix | Reasoning | Projeção de max para capacidades do provider |

**Destaque**: A refatoração #12355 representa um marco de modularização, extraindo lógica de 16.280 linhas do `cli.py` em três módulos focados.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|-------------|----| ----------|
| #17753 | Bug: cannot read local file in Windows (no WSL) | 5 | 0 | Bug/CLI/File |
| #17144 | Docker memory writes criam arquivos root-owned | 5 | 1 | Bug/Docker/Memory |
| #17602 | TUI rendering glitch com texto chinês | 4 | 0 | Bug/TUI/i18n |
| #17244 | MCP Servers amap — SSE discovery não suportado | 4 | 0 | Bug/MCP |
| #17198 | Gateway restart: race condition Weixin token | 4 | 2 | Bug/Gateway |
| #46265 | SimpleX adapter dropa DMs silenciosamente | 3 | 0 | Bug/Plugins/SimpleX |
| #63386 | state.db FTS index corruption (macOS) | 1 | 0 | Bug/Gateway/SQLite |

### Análise de Demandas

**Padrões identificados:**

1. **Fragmentação de plataformas**: Windows, macOS, Linux, Termux, Docker — cada ambiente revela edge cases específicos
2. **Integração de terceiros**: SimpleX, DingTalk, Matrix, WhatsApp, Telegram — ecossistema de plugins em maturação
3. **Persistência de estado**: Cron jobs, FTS indexes, session state — problemas de concorrência e integridade

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (Nenhum reportado hoje)

#### P2 — Altos (12 issues abertas)

| Issue | Descrição | Plataforma | Status |
|-------|-----------|------------|--------|
| #63370 | Desktop GUI input box desalinhado | Windows 10 | Aberta |
| #63361 | Daytona sandbox sem `force_remove` | Daytona Backend | Aberta |
| #63392 | Qwen3-14B perde tool definitions intermitentemente | Windows/Ollama | Aberta |
| #63386 | state.db FTS corruption (write-health fail) | macOS | Aberta |
| #63387 | Telegram polling conflicts + gateway shutdown | macOS/launchd | Aberta |
| #63388 | Curator skill_manage falha em background | Agent/Skills | Aberta |
| #63383 | docker_volumes ignorado no Desktop | Docker/Desktop | Aberta |
| #17295 | WhatsApp send_message "No home channel set" | WhatsApp | Closed ✓ |
| #17485 | Fallback chain aborta em 401 | Config/Agent | Closed ✓ |
| #17144 | Docker root-owned files | Docker | Closed ✓ |
| #17753 | Windows cannot read local files | Windows | Closed ✓ |

#### P3 — Médios (8 issues abertas)

- #46265: SimpleX DM drops silenciosos
- #63384: Texto invisível em sessões longas (Dashboard)
- #61656: Fail-closed mode para pre_tool_call hooks

### Regressões Conhecidas

| Componente | Regressão | Status |
|------------|-----------|--------|
| TUI | Caracteres chineses scattering | Closed ✓ |
| CLI | `hermes update` deixa @hermes/ink stale | Closed ✓ |
| Memory | Qwen3.6 hallucinations de contexto | Closed ✓ |
| Home Assistant | asyncio.run() em event loops ativos | Closed ✓ |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Pipeline (PRs Abertos)

| PR | Feature | Componente | Prioridade |
|----|---------|------------|------------|
| #61511 | Matrix Tool activity pane sempre visível | Gateway/Matrix | P3 |
| #63397 | Heartbeat tips para feature discovery | Gateway | P3 |
| #16652 | Account limits nas status bars | CLI/TUI | P3 |
| #17472 | TrustBoost PII Sanitizer v2.0.4 | Skills | P3 |
| #17370 | DingTalk proactive messaging | Gateway/DingTalk | P3 |
| #63364 | Self-debugging + long-running task durability | Agent | P3 |
| #53117 | Per-provider follow-redirects opt-in | LLM Client | P3 |

### Novas Demandas Registradas

| Issue | Título | Tipo | Platform |
|-------|--------|------|----------|
| #61656 | Opt-in fail-closed mode para pre_tool_call hooks | Feature/Auth | — |
| #46265 | SimpleX DM replies via @contactId syntax | Bug/Plugin | — |
| #17462 | CAMOFOX_ACCESS_KEY support | Feature/Config | — |
| #17067 | Fallback models para auxiliary/web_extract | Feature | — |

**Sinais de roadmap**: Temas recorrentes incluem segurança (PII sanitization, fail-closed policies), resiliência (self-debugging, task durability) e observabilidade (account limits, feature discovery tips).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Windows Compatibility**
   - Leitura de arquivos locais falha completamente (Issue #17753)
   - Desktop GUI com problemas de DPI scaling (Issue #63370)
   - Ollama/Qwen tool definitions inconsistentes (Issue #63392)

2. **Docker Deployment**
   - Permissões root em arquivos de memória (Issue #17144)
   - `docker_volumes` ignorado no Desktop (Issue #63383)

3. **Cross-Platform Messaging**
   - Telegram polling conflicts frequentes (Issue #63387)
   - WhatsApp home channel não reconhecido (Issue #17295)
   - SimpleX DMs dropados silenciosamente (Issue #46265)

4. **TUI/CLI UX**
   - Renderização de caracteres non-ASCII com glitch (Issue #17602)
   - Stale `@hermes/ink` após update (Issue #16773)

### Cenários de Uso Reportados

- **Desenvolvimento local**: Termux, WSL, Docker
- **Produtividade empresarial**: DingTalk, Matrix, WeChat, WhatsApp
- **Computação headers**: Daytona sandboxes persistentes
- **Automação**: Cron jobs, delegate tasks, curator skills

### Indicadores de Satisfação

- 3 issues com 2+ 👍 indicam bugs críticos com workarounds insuficientes
- 6 features com 0 👍 mas comentários ativos indicam interesse latente
- Taxa de fechamento (60%) sugere resposta comunitária responsiva

---

## 8. Backlog que Merece Atenção

### Issues Sem Atuação Recente (>30 dias sem update)

| Issue | Título | Criado | Atualizado | Status | Prioridade |
|-------|--------|--------|------------|--------|------------|
| #13586 | Home Assistant asyncio.run() em loops ativos | 2026-04-21 | 2026-07-12 | Closed | P2 |
| #16773 | hermes update stale @hermes/ink | 2026-04-28 | 2026-07-12 | Closed | P2 |
| #17009 | Termux filesystem interaction | 2026-04-28 | 2026-07-12 | Closed | P3 |

### Issues Abertas Sem Assignee

| Issue | Título | Criado | Categoria |
|-------|--------|--------|-----------|
| #46265 | SimpleX adapter silently drops DMs | 2026-06-14 | Bug/Plugin |
| #61656 | Opt-in fail-closed mode | 2026-07-09 | Feature/Auth |
| #63370 | Desktop GUI input box Windows | 2026-07-12 | Bug/Desktop |

### Recomendações para Maintainers

1. **Priorize**: Issues #63386 (FTS corruption) e #63387 (Telegram conflicts) afetam estabilidade em produção
2. **Revise**: PRs #63364 (self-debugging) e #61511 (Matrix pane) indicam direção estratégica
3. **Comunique**: SimpleX adapter (#46265) requer triagem de plugin third-party

---

## Métricas Consolidada

| Indicador | Valor |
|------------|-------|
| Issues ativas (24h) | 20 |
| Issues fechadas (24h) | 30 |
| PRs abertos (24h) | 42 |
| PRs merged/fechados (24h) | 8 |
| Taxa de resolução | 60% |
| Releases | 0 |
| Bugs P2 abertos | 8 |
| Features em desenvolvimento | 7+ |
| Engajamento médio (comentários/issue) | 2.3 |

---

*Relatório gerado automaticamente com base em dados do GitHub — NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-13

---

## 1. Panorama do Dia

O projeto PicoClaw manteve uma atividade moderada nas últimas 24 horas, com **5 issues e 3 PRs atualizadas**, sem novos lançamentos. A equipe fechou 2 issues e 2 PRs, demonstrando ritmo constante de revisão. A distribuição entre bugs abertos (3), features fechadas (1) e correções de tradução (1) sugere foco em estabilização da versão atual. Aissue mais antiga com atividade recente (#3182, 17 dias) continua aberta, sinalizando possível gargalo de priorização.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

A versão mais recente permanece **v0.2.9** (referenciada na issue #3203). Sem changelog atualizado no período, recomenda-se verificar o branch principal para eventual tag pendente de publicação.

---

## 3. Progresso do Projeto

Três PRs tiveram atividade significativa:

| PR | Status | Título | Impacto |
|----|--------|--------|---------|
| [#3249](https://github.com/sipeed/picoclaw/pull/3249) | ✅ Fechada | Skill enable/disable state + cron RunNow | Toggle de skills na UI + pausa de cron via workspace/skills/.skills-state.json |
| [#3190](https://github.com/sipeed/picoclaw/pull/3190) | ✅ Fechada | fix(i18n): sync missing locale keys | Adicionadas chaves `chat.dropImagesActive` (bn-in), `chat.disableCodeWrap`, `chat.enableCodeWrap` (cs) |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | 🔄 Aberta | fix(providers): capture prompt cache token usage (Anthropic) | Captura métricas de cache da API Claude para visibilidade operacional |

**Destaque:** A PR [#3249](https://github.com/sipeed/picoclaw/pull/3249) (fork Ethos P6.6) trouxe melhoria UX relevante — invalidação automática de skills desabilitadas via mtime-tracking, sem necessidade de restart do processo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | 👍 | Autor | Prioridade |
|-------|------|-------------|-----|-------|------------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Bug | 3 | 0 | Monessem | Alta (Android) |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Bug | 2 | 1 | weissfl | Crítica |
| [#3194](https://github.com/sipeed/picoclaw/issues/3194) | Bug | 2 | 0 | Damian-o2 | ✅ Fechada |

**Análise:**

- **#3182 (Android):** Usuário reporta falha ao iniciar serviço com screenshot — problema de permissões e path customization. Tema recorrente em issues de mobile deployment.
- **#3203 (Matrix):** Bug crítico de resiliência de rede. O loop `/sync` morre permanentemente após interrupção, e `Restart=on-failure` não dispara porque o processo principal continua vivo. Pode afetar servidores de produção.
- **#3194 (Encrypt):** Já fechada, mas revelou gap entre configuração de crypto e comportamento real — usuários habilitando E2E sem configuração adequada.

---

## 5. Bugs e Estabilidade

### Bugs em Aberto

| # | Severidade | Descrição | Tempo Aberto | Sinalização |
|---|-----------|-----------|--------------|-------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 🔴 **Alta** | Matrix sync loop morre sem reconnection logic | 11 dias | stale ❌ |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 🟡 **Média** | Android service launch + path settings | 17 dias | stale ❌ |
| [#3252](https://github.com/sipeed/picoclaw/issues/3252) | 🟡 **Média** | splitKnownProviderModel stripping incorreto de provider prefix | < 1 dia | Fresh |

### Bugs Fechados (24h)

| # | Descrição | Tempo Total |
|---|-----------|-------------|
| [#3194](https://github.com/sipeed/picoclaw/issues/3194) | Mensagem criptografada recebida sem crypto habilitado | 15 dias |

**Alerta:** Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203) está a **11 dias sem resposta da equipe** e sinalizada como stale, embora seja bug de estabilidade crítico. Recomenda-se triagem imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Fechada

| # | Título | Solução |
|---|--------|---------|
| [#3250](https://github.com/sipeed/picoclaw/issues/3250) | ARMhf Docker Compose support (armhf devices) | Modificação de Dockerfile e docker-compose para suportar ARMv7/armhf — dispositivos como OneCloud, Raspberry Pi Zero |

### Feature em Review

| # | Título | Escopo |
|---|--------|--------|
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | Anthropic prompt cache token tracking | Captura de métricas de cache em `anthropic` e `anthropic_messages` providers |

**Sinais de roadmap identificados:**
- Expansão de arquitetura para ARMhf (IoT/edge computing)
- Observabilidade de caches de prompt (cost optimization)
- Toggle de skills via UI (experiência de administrador)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Instabilidade em Matrix (#3203):**
   > *"The Matrix channel's `/sync` long-polling loop dies permanently after any network disruption or homeserver restart."*
   - **Cenário:** Homeserver reinicia ou network blip — comunicação para de funcionar silenciosamente
   - **Impacto:** Servidores de produção com downtime não-detectado
   - **Satisfação:** 😠 Insatisfeito (usuário weissfl)

2. **Android Deployment (#3182):**
   > *"Can't launch service in the android as this log and screenshot. Also i have full permission to app. Can't change path from settings."*
   - **Cenário:** Usuário com permissões completas não consegue iniciar serviço Android
   - **Impacto:** Bloqueio para usuários mobile
   - **Satisfação:** 😠 Insatisfeito (usuário Monessem)

3. **ARMhf Support (#3250):**
   > *"支持通过 Docker Compose 将 PicoClaw 部署到 ARMv7 (armhf) 设备上，如玩客云/OneCloud。"*
   - **Cenário:** Usuários de dispositivos low-cost (1GB RAM, 8GB storage) querem self-hosting
   - **Impacto:** Ampliação de base de usuários para edge/IoT
   - **Satisfação:** 😐 Neutro (aceite como feature request)

### Feedback Positivo Implícito

- Comunidade ativamente contribuidora com PRs de i18n ([#3190](https://github.com/sipeed/picoclaw/pull/3190))
- Fork Ethos P6.6 ([#3249](https://github.com/sipeed/picoclaw/pull/3249)) demonstra здоровый ecossistema de customizações

---

## 8. Backlog que Merece Atenção

### Issues sem resposta > 7 dias

| # | Título | Idade | Sinais | Recomendação |
|---|--------|-------|--------|--------------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android version bug | 17 dias | stale | Triagem e reproducible environment request |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix reconnection logic | 11 dias | stale, 1 👍 | **P1 — Implementar exponential backoff + reconnect** |

### PRs em Aberto

| # | Título | Idade | Recomendação |
|---|--------|-------|--------------|
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | Anthropic cache token capture | < 1 dia | Code review + merge (boilerplate reduction) |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues fechadas (24h) | 2/5 | ✅ Boa taxa (40%) |
| PRs fechadas (24h) | 2/3 | ✅ Boa taxa (67%) |
| Releases (7d) | 0 | ⚠️ Verificar pipeline CI |
| Backlog stale (>7d) | 2 issues | ⚠️ Requer triagem |
| Bugs críticos abertos | 1 (#3203) | 🔴 Priorizar |

---

*Relatório gerado automaticamente. Dados extraídos de github.com/sipeed/picoclaw em 2026-07-13.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-07-13

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 13 de julho de 2026, com 50 PRs atualizados nas últimas 24h (36 merged/fechados) e 9 issues movimentadas. O foco predominante é a **estabilidade do CI/CD**, com múltiplas issues reportando flaky tests que afetam ~70% dos pushes em main. Paralelamente, o time avança no **extension-runtime** com a sequência de PRs P1-P5 (8/8), evidenciando maturidade na arquitetura de canais (Slack/Telegram) e autenticação. A migração de funcionalidades para o CLI "Reborn" continua em ritmo acelerado, e updates de dependências (20+ packages) demonstram manutenção ativa do ecossistema Rust/WASM.

---

## 2. Lançamentos

### Nenhuma release nova registrada nas últimas 24h

**Observação:** O PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (chore: release) foi atualizado, sinalizando que uma release com as seguintes mudanças está iminente:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ **Breaking** |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ **Breaking** |
| `ironclaw` | 0.24.0 | 0.29.1 | — |

**Nota de migração:** As quebras de API em `ironclaw_common` e `ironclaw_skills` requerem atenção durante upgrade.

---

## 3. Progresso do Projeto

### PRs merged/fechados mais relevantes

| PR | Título | Impacto |
|----|--------|---------|
| [#4379](https://github.com/nearai/ironclaw/pull/4379) | Migrate read-only commands `doctor`, `status`, `config list/get` to Reborn | CLI unificada; DTOs estruturados |
| [#5991](https://github.com/nearai/ironclaw/pull/5991) | Require Responses API coverage in PR checks | Garantia de cobertura E2E (16 casos) |
| [#5853](https://github.com/nearai/ironclaw/pull/5853) | Add targeted QA 10/11 canary cases | Cobertura BTC analysis + custom-tool |
| [#3073](https://github.com/nearai/ironclaw/pull/3073) | Restrict test HTTP remap targets to HTTP(S) | Security hardening |
| [#1941](https://github.com/nearai/ironclaw/pull/1941) | MCP server name allowlist validation | Prevenção de injection attacks |

### Workstreams de extensão em progresso (P1-P5)

| PR | Escopo | Linhas (net) |
|----|--------|--------------|
| [#5995](https://github.com/nearai/ironclaw/pull/5995) | P1: Manifest v3 + VendorId + recipes | — |
| [#6008](https://github.com/nearai/ironclaw/pull/6008) | P3: Auth engine + recipes | −4.146 |
| [#6012](https://github.com/nearai/ironclaw/pull/6012) | P5: Delivery coordinator + Slack/Telegram outbound | Draft |
| [#5983](https://github.com/nearai/ironclaw/pull/5983) | Extension removal cleanup explicit | — |
| [#6020](https://github.com/nearai/ironclaw/pull/6020) | Q-10 Slack journeys deterministic | — |

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção

| Issue | Título | Comentários | Reações | Sinais |
|-------|--------|-------------|---------|--------|
| [#6014](https://github.com/nearai/ironclaw/issues/6014) | CI fragility: ~70% main pushes failing | 0 | 0 | **Crítico** — maior fonte de "red" no projeto |
| [#6018](https://github.com/nearai/ironclaw/issues/6018) | CI hardening: add static pre-push checks | 0 | 0 | Proposta de solução estrutural |
| [#6011](https://github.com/nearai/ironclaw/issues/6011) | Daily failure taxonomy 2026-07-12 | 0 | 0 | Análise detalhada de 136 non-pass |

### Análise de demandas da comunidade

**CI/CD como gargalo principal:** A taxonomy de falhas revela que ~103 de 136 não-passos em `clawbench` são causados por **defeitos de provisionamento de benchmark**, não qualidade de modelo/harness. A comunidade reporta que:

- Testes de concorrência de banco (`postgres delete/recreate race`, `libSQL concurrent writers`) são sensíveis a timing
- Slack trigger e2e tests falham intermitentemente por timeout
- O bloco `build_runtime_input_production_*` compete por `std::env` no leg de coverage "all-features"

---

## 5. Bugs e Estabilidade

### Issues abertas por severidade

| Severidade | Issue | Escopo | Status |
|------------|-------|--------|--------|
| **P1** | [#6015](https://github.com/nearai/ironclaw/issues/6015) — `build_runtime_input_production_*` races on std::env | CI | OPEN |
| **P1** | [#6016](https://github.com/nearai/ironclaw/issues/6016) — Slack trigger-delivery e2e timeout | CI | OPEN |
| **P2** | [#6014](https://github.com/nearai/ironclaw/issues/6014) — CI fragility: 70% main failures | CI | OPEN |
| **P2** | [#6017](https://github.com/nearai/ironclaw/issues/6017) — DB concurrency contract tests flaky | DB | OPEN |
| **P3** | [#5704](https://github.com/nearai/ironclaw/issues/5704) — Image preview transparency during chat | UI | CLOSED ✅ |
| **P3** | [#6010](https://github.com/nearai/ironclaw/issues/6010) — NEAR AI inference GLM-5.2 hangs | API | CLOSED ✅ |
| **P3** | [#6009](https://github.com/nearai/ironclaw/issues/6009) — GLM-5.2 missing from opencode default list | API | CLOSED ✅ |

**Tendencia:** 3 bugs resolvidos nas últimas 24h, mas 5 novos bugs abertos — saldo negativo de estabilidade. A root cause é **estrutural** (non-hermetic tests), não individual.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento

| PR | Título | Escopo | Sinal de Roadmap |
|----|--------|--------|------------------|
| [#6013](https://github.com/nearai/ironclaw/pull/6013) | Tools-capable completion nudge for interactive coding | agent-loop | Melhor UX para coding interativo |
| [#6019](https://github.com/nearai/ironclaw/pull/6019) | `doctor --live` dependency readiness checks | reborn-cli | Observabilidade operacional |
| [#6001](https://github.com/nearai/ironclaw/pull/6001) | Make agent guidance Reborn-native | docs | Migração completa para arquitetura v2 |

### Sinais de direção estratégica

- **Extension runtime (P1-P8):** A sequência de PRs indica foco em **marketplace de extensões** com manifest v3, recipes, auth engine e canais outbound (Slack/Telegram)
- **CLI Reborn:** Migração de `doctor`, `status`, `config` para binário nativo; rewrite de `AGENTS.md` para arquitetura v2
- **CI hardening:** Adoção de static pre-push checks (include_str!/Docker-COPY, non-hermetic guard, libsql-only clippy)

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Cenário | Problema | Impacto |
|---------|----------|---------|
| Uso interativo com NEAR AI API | GLM-5.2 inference hangs por minutos | **Bloqueante** — uso em tempo real inviável |
| Onboarding opencode | GLM-5.2 não aparece na lista de modelos default | **Fricção** — necessidade de fork manual |
| Visual durante agent response | Imagens perdem opacidade enquanto chat processa | **UX** — confusão visual momentânea |
| Barcelona Hackathon | Necessidade de fork próprio para estabilidade | **Adoção** — projeto "beta" para eventos |

### Satisfação (sinais positivos)

- 3 bugs resolvidos rapidamente (P3) indica **tempo de resposta adequado**
- Migração de CLI para Reborn unifica APIs e reduz complexidade para usuários
- Dependency updates (16-20 packages por PR) demonstram **manutenção de security patches**

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou sem resposta

| Issue | Título | Criada | Atualizada | Prioridade |
|-------|--------|--------|------------|------------|
| [#6018](https://github.com/nearai/ironclaw/issues/6018) | CI hardening: add static pre-push checks | 2026-07-12 | 2026-07-12 | **Alta** — solução estrutural |
| [#6017](https://github.com/nearai/ironclaw/issues/6017) | DB concurrency flaky tests | 2026-07-12 | 2026-07-12 | **Alta** — afeta Platform & Compat |
| [#6016](https://github.com/nearai/ironclaw/issues/6016) | Slack trigger e2e timeout | 2026-07-12 | 2026-07-12 | **Alta** — vermelho recorrente |
| [#6015](https://github.com/nearai/ironclaw/issues/6015) | std::env race in coverage leg | 2026-07-12 | 2026-07-12 | **Alta** — test isolation defect |

### Recomendações de priorização

1. **Foco imediato em CI:** As 4 issues de CI (#6014, #6015, #6016, #6017) bloqueiam ~70% dos merges. A proposal de static pre-push checks (#6018) deveria ser priorizada como **quick win estrutural**.
2. **Extension-runtime P5/P6:** A entrega completa do train (8 PRs) habilita features de canal para produção.
3. **Release watch:** A iminente release 0.29.1 requer validação de breaking changes em `ironclaw_common` e `ironclaw_skills`.

---

**Resumo da saúde do projeto:** ⚠️ **Estável com pressão de CI**

- **Forças:** Alto volume de PRs merged, avanços em extension-runtime, manutenção ativa de dependencies
- **Fraquezas:** CI fragility estrutural (70% failure rate), flaky tests de concorrência, 5 bugs novos em 24h
- **Tendência:** Melhoria incremental esperada com CI hardening e extension-runtime completion

---
*Gerado automaticamente com base em dados do GitHub — 2026-07-13*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-07-13  
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**Resumo de Atividade:** 19 issues (16 abertas, 3 fechadas) · 10 PRs (7 abertos, 3 fechados/merged)

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta alta atividade de bug reports no dia de hoje, com **19 issues atualizadas nas últimas 24h**, a maioria concentrada na versão 2.0.0 recém-lançada. A comunidade reporta múltiplos problemas críticos de regressão — particularmente relacionados a **compressão de contexto/ferramentas,记忆自动摘要, e carregamento de skills** — que afetam a estabilidade do agent em produção. Simultaneamente, 10 PRs foram abertos, incluindo contribuições de primeiros contribuidores, sugerindo engajamento ativo da comunidade com a base de código. Não houve releases formais nas últimas 24h.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

A ausência de release nova contrasta com o volume de bugs reportados na v2.0.0, indicando que a equipe pode estar em ciclo de estabilização antes de um próximo tagged release.

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged hoje, todos focados em **compatibilidade e defesa contra erros**:

| PR | Status | Tema | Impacto |
|----|--------|------|---------|
| [#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) | ✅ CLOSED | Sanitiza mensagens tool desemparelhadas após compressão de contexto | Corrige 400 BadRequestError em sessões longas |
| [#5988](https://github.com/agentscope-ai/QwenPaw/pull/5988) | ✅ CLOSED | Trata tipo legacy 'file' em _coerce_block | Compatibilidade com sessões v1.x |
| [#5990](https://github.com/agentscope-ai/QwenPaw/pull/5990) | ✅ CLOSED | Mesmo fix de 'file' block (versão alternativa) | Redundância indica iteração rápida |

**PRs abertos notáveis:**

- **[#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)** — `fix(pack): include AgentScope Glob helper in desktop bundle`  
  Resolve falha de ReMe jobs na desktop app causado por `_glob_helper.py` não coletado pelo PyInstaller.

- **[#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)** — `fix: multi-layer orphan tool_result message defense`  
  Defesa robusta contra tool_results órfãos que sobrevivem além de compressão de contexto.

- **[#5993](https://github.com/agentscope-ai/QwenPaw/pull/5993)** — `fix(compat): load v1 session media in v2`  
  Restaura compatibilidade com mídia de sessões QwenPaw 1.x.

- **[#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — `Add per-session model overrides`  
  Feature deUI para override de modelo por sessão, com modal de configurações.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento (comentários)

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | 4 | auto-memory falha com "No module named 'agentscope.tool._builtin._scripts'" |
| [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) | 4 | Compressão de contexto quebra emparelhamento tool_call/tool_result → 400 BadRequestError |
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | 2 | Perda de mapeamento chats/history após upgrade para 2.0.0 |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 2 | Mensagens silenciosamente descartadas quando sessão está ocupada |

### Análise das Demandas

O tema dominante é **a regressão crítica do sistema de ferramentas (tool_call/tool_result)** introduzida na v2.0.0. A compressão de contexto não preserva corretamente o emparelhamento entre chamadas de ferramenta e seus resultados, causando:

1. **400 BadRequestError** — tool_results órfãos são enviados à API OpenAI, que rejeita mensagens com role='tool' sem tool_calls precedente.
2. **Auto-memory falhando** — scripts auxiliares não empacotados na distribuição desktop.
3. **Memória inconsistente** — agent usa plano antigo mesmo após confirmação do usuário (issue #5998).

Este é um **padrão de bug sistêmico** na arquitetura de compressão de contexto que requer fix centralizado.

---

## 5. Bugs e Estabilidade

### Por Severidade

**🔴 Críticos (afetam produção, crash/confusão de dados):**

| Issue | Descrição | Componentes |
|-------|-----------|-------------|
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | auto-memory quebra em desktop app | Desktop bundle |
| [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) | 400 BadRequestError em sessões longas | Context compression |
| [#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978) | `/compact` falha com session_id inválido | Memory subsystem |
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | Perda de mapeamento chat↔history após upgrade | Database migration |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | Mensagens descartadas silenciosamente | Webhook/queue |
| [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) | MODEL_EXECUTION_ERROR com hint messages | Tool serialization |

**🟠 Altos (impacto significativo no UX):**

| Issue | Descrição | Componentes |
|-------|-----------|-------------|
| [#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982) | Shell execution exige aprovação toda vez (v2.0.0) | Sandbox/approval |
| [#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) | Não suporta handoff de sessão entre canais | Multi-channel |
| [#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000) / [#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001) | Skill pool não carrega skills instalados | Skill system |

**🟡 Médios (bugs de UI/cosméticos):**

| Issue | Descrição | Componentes |
|-------|-----------|-------------|
| [#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983) | `qwenpaw doctor` reporta FAIL para /api/agent/health | CLI |
| [#5981](https://github.com/agentscope-ai/QwenPaw/issues/5981) | Campo de busca preenchido com username | Console UI |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | SSH Offline / Profiles retornando 404 | Desktop app |
| [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) | Rotas HTTP de plugins perdidas após hot-reload | Plugin system |

### Tendência

Há um **surto de bugs na v2.0.0**, especialmente em:
- Sistema de compressão de contexto e tool pairing
- Sandbox/execução shell
- Carregamento de skills e plugins

Este padrão é típico de uma **release com mudanças arquiteturais significativas** que não foram exaustivamente testadas em todos os caminhos de código.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas de feature

| Issue | Descrição | Votos/Sinais |
|-------|-----------|--------------|
| [#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) | **Cross-channel session binding** — permitir que Console, Feishu, DingTalk compartilhem a mesma sessão | Usuário corporativo |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | **Slash command autocomplete** — expor comandos de sistema (`/new`, `/history`, `/plan`, etc.) no autocomplete | Em revisão, aprovado |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **Per-session model overrides** — selecionar modelo diferente por sessão | Feature completa em PR |

### Sinais de roadmap

1. **Estabilização v2.0.x** — Prioridade clara: bugs críticos da v2.0.0 dominam o backlog.
2. **Desktop app maturity** — Falhas específicas de desktop (auto-memory, SSH offline, Electron CLI) indicam necessidade de QA específico para packaging.
3. **Multi-channel unificação** — Feature de session handoff entre canais sinaliza demanda enterprise.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

**1. Upgrade quebrou sessões existentes** (`#5964`)  
"升级到 2.0.0 后，之前的部分聊天会话在 Web UI 中打不开"  
*Impacto: Perda de dados históricos do usuário. Severidade crítica para usuários de produção.*

**2. Sandbox insuportável em uso diário** (`#5982`, `#5984`)  
"For containerized deployment with official docker-compose.yaml, qwenpaw demands user acknowledgement every single time"  
*Impacto: Interrupção constante do fluxo de trabalho. UX degradado significativamente vs. v1.x.*

**3. Skill system completamente quebrado** (`#6000`)  
"QwenPaw's skill system is currently **completely broken** for any newly added skill"  
*Impacto: Extensibilidade do platform bloqueada. Comunidade não consegue adicionar skills customizados.*

**4. Contexto compressado causa resultados errados** (`#5998`)  
"用户明确确认了一个新的行程方案后，agent在生成飞书文档内容时依然使用了旧的错误方案"  
*Impacto: Agent comportamento incorreto em cenários multi-step. Confiança do usuário abalada.*

### Padrões de Satisfação/Insatisfação

| Aspecto | Status | Observação |
|---------|--------|------------|
| Core agent logic | 🟡 | Funcional mas sensível a regressões de contexto |
| Desktop packaging | 🔴 | Múltiplos bugs de bundling (Glob, auto-memory) |
| Skill/plugin system | 🔴 | Carregamento completamente quebrado |
| Sandbox/execução | 🔴 | Aprovação excessiva, configuração confusa |
| Upgrade path | 🔴 | Perda de dados de sessões v1.x |
| CLI tooling | 🟡 | `doctor` reporta falsos negativos |

**Net Sentiment:** Negativo esta semana, impulsionado por bugs de regressão da v2.0.0 em funcionalidades core.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas

| Issue | Idade | Estado | Prioridade |
|-------|-------|--------|------------|
| [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) — Plugin HTTP routes lost after hot-reload | ~1 dia | Aberta, 1 comentário | 🟠 Alta |
| [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) — Can't run electron cli tool | ~1 dia | Aberta, 1 comentário | 🟡 Média |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) — SSH Offline 404 | ~1 dia | Aberta, 1 comentário | 🟡 Média |
| [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984) — Tool approval prompts on Feishu even with governance disabled | ~1 dia | Aberta, 1 comentário | 🟠 Alta |

### Issues duplicadas (oportunidade de consolidação)

| Grupo | Issues | Tema |
|-------|--------|------|
| "file block type" | [#5988](https://github.com/agentscope-ai/QwenPaw/pull/5988), [#5990](https://github.com/agentscope-ai/QwenPaw/pull/5990), [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991) | 3 PRs para mesmo fix (precisa limpeza) |
| Orphan tool_result | [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986), [#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987), [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) | Issue + 2 PRs (um merged, um aberto) |

### Recomendações de Ação

1. **Triar e priorizar** as ~7 issues críticas do sistema de ferramentas/compressão antes da próxima release.
2. **Consolidar PRs duplicados** do file block type (#5988, #5990, #5991).
3. **Responder** às issues abertas com 1 comentário para manter comunidade engajada.
4. **Investigar** o skill system (#6000, #6001) — parece regression completa que bloqueia ecossistema de extensions.
5. **Documentar** workaround para o problema de sandbox/aprovação contínua até fix definitivo.

---

**Gerado em:** 2026-07-13  
**Fonte:** [github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-13

---

## 1. Panorama do Dia

ZeroClaw mantém um nível de atividade muito intenso, com **50 issues e 50 PRs atualizados nas últimas 24h**, evidenciando uma sprint bem ativa. **Nenhum release foi publicado**, indicando que a equipe está em fase de consolidação antes da próxima versão. A comunidade está focada em estabilidade (múltiplos bugs P1 em tratamento), expansão de canais (Telegram, Matrix, Slack, WeChat) e melhorias no subsystem de memória persistente. A proporção de 48 PRs abertos versus apenas 2 merged/fechados sugere um pipeline de review com potencial gargalo.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.** O milestone v0.8.3 (Issue [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320))仍在进行中，包含15个开放项目 tracker para o release:

- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) — Observability, CI, docs, dependencies
- [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) — Provider e message serialization
- [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) — Runtime, agent loop, tools e skills

**Recomendação:** Acompanhar o milestone index paraAntecipar breaking changes na v0.8.3.

---

## 3. Progresso do Projeto

Dos 50 PRs atualizados, **2 foram merged/fechados** nas últimas 24h. Embora os IDs específicos não tenham sido detalhados no snapshot, os PRs mais maduros para merge observados são:

| PR | Título | Impacto |
|----|--------|---------|
| [#8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) | feat(channels): run installed WASM channel plugins | Ativa WASM channels que existiam sem caller |
| [#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905) | feat(gateway): per-agent in-flight prompt counter | Observabilidade em tempo real no dashboard |
| [#9003](https://github.com/zeroclaw-labs/zeroclaw/pull/9003) | docs(maintainers): fix dashboard workflow link | Correção de links no mdBook |
| [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) | fix(zerocode): allow bidirectional RPC | Habilita `ask_user` e `poll` em ZeroCode |
| [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018) | fix(cli): apply config-dir before locale detection | Corrige bug de locale com `--config-dir` |

**Destaque:** O PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (feat(gateway): add OpenAI Chat Completions endpoint) em tamanho XL promete grande impacto na adoção, permitindo que clientes OpenAI SDK, LangChain e IDEs como Continue.dev se integrem nativamente.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

1. **[#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** — `[Tracker]: Goal mode implementation split stack` (9 comentários)
   - **Demanda:** Coordenação de splitting do feat/goal-mode em PRs reviewáveis
   - **Sinal:** O feature goal-mode está pronto para maturação e revisão

2. **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — `Default 32k context budget exceeded` (8 comentários)
   - **Demanda:** Contexto de 32k tokens estouro no primeiro turno com system prompt + tool definitions
   - **Sinal:** Problema crítico de UX e performance em configurações default

3. **[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** — `Slack thread context hydration` (6 comentários)
   - **Demanda:** Backfill de histórico ao mencionar bot pela primeira vez em threads Slack
   - **Sinal:** Melhora significativa na experiência de Threads Slack

4. **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)** — `Publish full-channel prebuilt assets` (6 comentários)
   - **Demanda:** Release bundle opcional com todos os channels vs. lean default
   - **Sinal:** Discussão sobre trade-off simplicidade vs. flexibilidade de instalação

5. **[#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** — `Turn-level OTel trace correlation` (5 comentários)
   - **Demanda:** Nested spans sob turn trace para observabilidade granular
   - **Sinal:** Demanda consolidada por tracing mais útil em produção

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Bloqueio de workflow (S1)

| Issue | Título | Severidade |
|-------|--------|------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Default 32k context budget exceeded — preemptive trim perpétua | S1 |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → SIGSEGV após turn tool-heavy | S1 |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs não disponíveis via web dashboard chat | S1 |
| [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) | OpenAI Responses provider rejects vision-capable models | S1 |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI tool turns fail when Chat Completions rejects reasoning effort | S1 |

**Análise:** 5 bugs S1 ativos, com múltiplos relacionados ao provider OpenAI (Responses API e reasoning effort), sugerindo urgência em padronizar compatibilidade com variações da API OpenAI.

### 🟡 P2 — Degradado / Funcionalidade comprometida

| Issue | Título | Severidade |
|-------|--------|------------|
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema cloning → unbounded RSS growth | P1 (risco alto) |
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | On failure to start, não termina o processo (zerocode) | S3 |
| [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) | `--config-dir` ignorado durante detecção de locale CLI | S2 |

**PR Relacionado:** [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018) já corrige o bug #9017.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (criadas em 2026-07-12/13):

| Issue | Título | Prioridade | Sinal estratégico |
|-------|--------|------------|-------------------|
| [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) | Optional Slack Events API (HTTP Request URL) para scale-to-zero | Enhancement | Expansão para serverless |
| [#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020) | Session rewind e fork-from-message no ZeroCode | P2 | Recuperação de estado degradado |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | RFC: Gateway-local Kanban board para trabalho do agent | P2 | Visualização de agente em execução |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | RFC: WASM plugin lifecycle hook subscriptions | P2 | Extensibilidade de plugins |

### Tracks de milestone v0.8.3:

- **Memory:** [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) (Persistent memory parity), [#8897](https://github.com/zeroclaw-labs/zeroclaw/issues/8897) (Staged retrieval pipeline), [#8984](https://github.com/zeroclaw-labs/zeroclaw/issues/8984) (Content screening)
- **Channels:** Mirror channels via plugin ([#8855](https://github.com/zeroclaw-labs/zeroclaw/issues/8855)), TCP/TLS para plugins ([#8923](https://github.com/zeroclaw-labs/zeroclaw/issues/8923)), Matrix single-message drafts ([#8443](https://github.com/zeroclaw-labs/zeroclaw/issues/8443))
- **Gateway:** OpenAI-compatible endpoint ([#8486](https://github.com/zeroclaw-labs/zeroclaw/issues/8486)), in-flight counter ([#8905](https://github.com/zeroclaw-labs/zeroclaw/issues/8905))

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas:

1. **Context budget inadequado** — Usuários com config default enfrentam estouro de tokens já no primeiro turno. [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) evidencia que o default `max_context_tokens = 32000` é excedido em ~3.3x por system prompt + tool definitions.

2. **Configuração de cronjobs complexa** — Falta documentação e impossibilidade de selecionar modelo específico para tasks periódicas low-priority (e.g., gemma para economia). [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)

3. **Instalação de canais adicional confusa** — Usuários configuram canais (Slack, Telegram) não inclusos no prebuilt lean, sem perceber que precisam de build custom. [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)

4. **Memory recall inconsistente** — Memórias globais duráveis não atravessam sessões semanticamente com embeddings. PR [#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898) aborda isso.

5. **CLI locale detection ignora --config-dir** — Bug de onboarding onde locale é detectado antes de aplicar flags globais. [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017)

### Cenários de uso em destaque:
- **Serverless/scale-to-zero:** Demanda por Slack Events API HTTP mode ([#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022))
- **Recuperação de sessão:** Rewind/fork para recuperar de turns malformados ([#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020))
- **Operação behind NAT:** Zerorelay para daemon acessível via NAT/CGNAT ([#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias ou com flag `needs-maintainer-review`:

| Issue | Título | Idade | Sinal |
|-------|--------|-------|-------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | audit: track 153 commits lost in bulk revert c3ff635 | ~85 dias | Risco de perder commits não-revertidos |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | Publish full-channel prebuilt assets | ~24 dias | `needs-maintainer-review`, risco alto |
| [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | session_ttl_hours auto-truncate | ~21 dias | `needs-maintainer-review`, risco alto |
| [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | Tracker: zerorelay milestone | ~17 dias | Arquitetura de relay |
| [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) | channel/source shared-boundary cleanup | ~12 dias | `needs-maintainer-review` |

### PRs com `needs-author-action` (gargalo de review):

- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — feat(gateway): OpenAI Chat Completions (size:XL)
- [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) — refactor(zerocode): consolidate Code pane (size:XL)
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — feat(matrix): single-message drafts (size:XL)
- [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) — feat(memory): scan memory content (size:XL)
- [#8987](https://github.com/zeroclaw-labs/zeroclaw/pull/8987) — feat(quickstart): capability-safe defaults (size:L)
- [#8897](https://github.com/zeroclaw-labs/zeroclaw/pull/8897) — feat(memory): staged retrieval pipeline (size:XL)

**⚠️ Alerta:** 6 PRs de tamanho L/XL aguardando ação do autor. Recomenda-se priorização de review para não bloquear o milestone v0.8.3.

---

## Métricas de Saúde do Projeto (2026-07-13)

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 50 | 🟢 Muito alto |
| PRs abertos (24h) | 48 | 🟢 Muito alto |
| PRs merged (24h) | 2 | 🔴 Baixo (gargalo) |
| Bugs P1/S1 abertos | 5 | 🔴 Crítico |
| Releases (24h) | 0 | 🟡 Em preparação |
| PRs size XL pendentes | 4+ | 🔴 Requer priorização |

**Veredicto:** O projeto está em alta atividade, mas com risco de acúmulo no pipeline de review. A concentração de bugs P1 no provider OpenAI e no subsystem de runtime/memory exige atenção imediata dos mantenedores.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*