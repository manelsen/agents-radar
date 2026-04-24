# Resumo diário do ecossistema de agentes de IA 2026-04-25

> Issues: 4 | PRs: 11 | Projetos cobertos: 7 | Gerado em: 2026-04-24 20:41 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw
## Data: 2026-04-25 | Analista: Open Source Intelligence

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **alta atividade de desenvolvimento** em 25 de abril de 2026, com 15 itens atualizados nas últimas 24h (4 issues + 11 PRs). Não há lançamentos recentes, mas a comunidade de contribuidores está ativamente submissando código — todos os 11 PRs abertos pertencem ao mesmo autor (`manelsen`), sugerindo um período concentrado de feature development. Duas issues críticas relacionadas a bugs foram fechadas (#167 e #811), enquanto duas novas issues de bugs foram abertas (#868 e #869), ambas relacionadas a problemas de configuração e build. A saúde geral indica um projeto em fase ativa de iteração, com foco em extensibilidade de ferramentas e skills.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto não registrou novos releases. A versão mais recente referenciada nos dados é `v2026.4.17` (mencionada na issue #868). Recomenda-se monitorar o repositório para eventuais tags de release que possam surgir após a consolidação dos PRs ativos.

---

## 3. Progresso do Projeto

**PRs mergeados/fechados nas últimas 24h:** 0

Nenhum PR foi merged ou fechado recentemente. Todos os 11 PRs pendentes permanecem em estado `OPEN`, aguardando revisão. O pipeline de PRs ativos inclui:

| PR | Título | Impacto |
|----|--------|---------|
| #836 | Trigger-based tool prioritization | Priorização automática de ferramentas via keywords |
| #844 | A2A progress hints forwarding | Observabilidade de tool calls em streams |
| #837 | External tool_customizations_file | Carregamento de customizações via arquivo JSON externo |
| #840 | Nested skill discovery | Organização de skills em subdirectories |
| #841 | `--skill` flag para startup | Ativação de skills via CLI |
| #831 | Agent Skills RFC 0.2.0 support | Suporte ao novo padrão de skills com validação SHA256 |
| #835 | system_prompt e enabled overrides | Overrides dinâmicos de descrição e habilitação de tools |
| #843 | Onboard KeyWriteFailed fix | Correção de crash no passo 8 do onboard |
| #842 | `--workspace` flag | Override de diretório de workspace |
| #834 | Tool customization config schema | Schema formal para customização de ferramentas |
| #838 | Pantalaimon E2EE proxy support | Suporte a proxy E2EE para Matrix |

**Observação:** Todos os PRs são de `manelsen`, indicando contribuidor individual muito ativo. Recomenda-se atenção à carga de revisão.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento

| Issue | Título | Comentários | 👍 | Estado |
|-------|--------|-------------|-----|--------|
| #167 | curl/wget hard-coded | 8 | 1 | CLOSED |
| #811 | Custom OpenAI provider sub-agent | 0 | 2 | CLOSED |

**Análise:**

- **Issue #167** — Debate significativo (8 comentários) sobre restrições de comandos shell (curl/wget). Resolvida, indicando que a equipe pode ter decidido manter essas ferramentas restritas por segurança.

- **Issue #811** — Recebeu 2 👍 mesmo sem comentários, sugerindo que o problema de provedores OpenAI-compatíveis afeta múltiplos usuários. Foi fechada, mas a ausência de comentários indica possível ausência de validação de usuário sobre a solução.

**PRs com atividade recente:** Todos os 11 PRs de `manelsen` foram atualizados em 2026-04-24, indicando trabalho ativo de desenvolvimento. A natureza das mudanças (ferramentas, skills, configuração) sugere foco em extensibilidade e UX.

---

## 5. Bugs e Estabilidade

### Issues abertas (prioridade alta)

**#869 [OPEN] — Telegram channel não carrega do config.json**
- **Severidade:** Alta (funcionalidade quebrada)
- **Resumo:** Canal Telegram configurado corretamente em `config.json` e visível via `nullclaw config show`, mas `nullclaw channel list` mostra "not configured".
- **Link:** [nullclaw/nullclaw Issue #869](https://github.com/nullclaw/nullclaw/issues/869)

**#868 [OPEN] — zig build falha no Android/Termux (aarch64)**
- **Severidade:** Alta (bloqueia build em plataformas móveis)
- **Resumo:** `zig build -Doptimize=ReleaseSmall` falha com `AccessDenied` em `options.zig linkat` no Termux/Android.
- **Ambiente:** Xiaomi Redmi Note 9, LineageOS 22.2, Termux, aarch64, Zig 0.16.0
- **Link:** [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

### Issues fechadas (resolvidas)

**#167 [CLOSED] — Restrição de comandos curl/wget**
- Resolvida após discussão de 8 comentários.
- **Link:** [nullclaw/nullclaw Issue #167](https://github.com/nullclaw/nullclaw/issues/167)

**#811 [CLOSED] — Falha ao conectar sub-agente com provedor OpenAI-compatível**
- Resolvida sem comentários, levantando dúvidas sobre validação da solução.
- **Link:** [nullclaw/nullclaw Issue #811](https://github.com/nullclaw/nullclaw/issues/811)

**Métricas de estabilidade:**
- 50% das issues ativas são bugs (2/4)
- 0 crashes ou regressões novas sem issues associadas

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs indicando direção do produto

Os 11 PRs abertos, todos de `manelsen`, revelam um **roadmap implícito** focado em:

1. **Extensibilidade de ferramentas**
   - Trigger-based prioritization (#836)
   - Tool customization schema (#834, #835, #837)
   - External customization file support (#837)

2. **Skills e discovery**
   - Nested skill discovery (#840)
   - RFC 0.2.0 Agent Skills support (#831)
   - Startup skill activation (#841)

3. **UX e CLI**
   - `--workspace` flag (#842)
   - `--skill` flag (#841)
   - Onboard fixes (#843)

4. **Protocolos e integração**
   - A2A progress hints (#844)
   - Pantalaimon E2EE proxy (#838)

### Features ausentes que usuários podem requisitar
- Suporte a mais provedores de API (evidenciado por #811)
- Melhor validação de configuração (evidenciado por #869)
- Cross-platform build mais robusto (evidenciado por #868)

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas

| Dor | Issue | Severidade |
|-----|-------|------------|
| Restrições de comandos shell limitam automação | #167 | Média |
| Configuração de canais não persistida corretamente | #869 | Alta |
| Build falha em plataformas móveis (Termux) | #868 | Alta |
| Incompatibilidade com provedores customizados | #811 | Média |

### Cenários de uso inferidos

1. **Usuários avançados:** Tentam usar NullClaw como wrapper de CLI para automação shell, frustrados com limitações (#167).
2. **Usuários mobile:** Tentam rodar NullClaw em Android via Termux, encontrando barreiras de build (#868).
3. **Empresas:** Usam provedores OpenAI-compatíveis customizados, encontrando falhas de integração (#811).
4. **Usuários multi-canal:** Configuram Telegram, mas enfrentam inconsistências entre `config show` e `channel list` (#869).

### Satisfação/Insatisfação
- **Satisfação:** Atividade alta de PRs indica comunidade engajada e contribuidor ativo.
- **Insatisfação:** Bugs de configuração e build mobile indicam dívida técnica em DX (developer experience) e edge cases.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criada | Atualizada | Status |
|-------|--------|--------|------------|--------|
| #811 | Custom OpenAI provider sub-agent | 2026-04-13 | 2026-04-23 | CLOSED (sem comentários) |
| #869 | Telegram config bug | 2026-04-23 | 2026-04-23 | OPEN (0 comentários) |
| #868 | Android/Termux build | 2026-04-23 | 2026-04-23 | OPEN (0 comentários) |

### Análise

- **#811** — Fechada rapidamente sem discussão pode indicar solução trivial ou falta de validação. Recomenda-se confirmar com o autor (`reosablo`) se a solução atende.
- **#869 e #868** — Novas issues sem resposta requerem triagem imediata. Ambas são de `NOTJuangamer10`, que também abriu #868 (Android build), sugerindo usuário ativo que pode se tornar contribuidor ou detrator dependendo da resposta.

### Recomendações

1. **Triagem urgente:** Responder #869 e #868 com acknowledgement e estimation.
2. **Follow-up #811:** Verificar se `reosablo` confirmou que o bug foi resolvido.
3. **Revisão de PRs:** Os 11 PRs de `manelsen` precisam de review para evitar gargalo e manter contribuidor motivado.
4. **Documentação mobile:** Se #868 for resolvido, documentar processo de build no Termux para melhorar DX.

---

## Métricas Resumidas (2026-04-25)

| Métrica | Valor |
|---------|-------|
| Issues ativas | 2 |
| Issues fechadas (24h) | 2 |
| PRs abertos | 11 |
| PRs merged (24h) | 0 |
| Releases | 0 |
| Bugs críticos abertos | 2 |
| Contribuidor principal | manelsen |

**Saúde geral:** 🟡 **MODERADA** — Atividade alta, mas bugs sem resposta e backlog de PRs crescendo.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-04-25 | **Projetos analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source atravessa uma fase de **intensa fragmentação e especialização**. Sete projetos principais competem por niches distintas: NullClaw e ZeroClaw lideram em extensibilidade de ferramentas, enquanto Hermes Agent e IronClaw priorizam resiliência corporativa. Os provedores de IA chineses (DeepSeek, MiniMax, AliYun, Volcano) emergem como vetor de crescimento em todos os projetos, enquanto bugs críticos de streaming, tool calls e autenticação OAuth afetam transversalmente a estabilidade geral. A saúde do ecossistema é **heterogênea**: três projetos com métricas Exemplares (NanoBot, Hermes Agent, CoPaw) convivem com quatro em estado Moderado/Desafiado, sugerindo que a maturidade técnica não acompanha a velocidade de features.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | Releases (24h) | Bugs Críticos | Saúde Geral |
|--------|:-------------:|:------------:|:--------------:|:-------------:|:-----------:|
| **NullClaw** | 2 | 11 | 0 | 2 | 🟡 Moderada |
| **NanoBot** | ~14 | ~7 | 0 | 2 (high) | 🟢 Boa |
| **Hermes Agent** | 48 | 50+ | 1 (v0.11.0) | 7 P1 | 🟠 Mista |
| **PicoClaw** | 10 | 21 | 1 (nightly) | 3 | 🟢 Boa |
| **IronClaw** | ~19 | 50+ | 0 | 1 | 🟡 Moderada |
| **CoPaw** | ~50 | ~50 | 2 | 1 (white screen) | 🟢 Boa |
| **ZeroClaw** | 47 | 26 | 0 | 6 S1 | 🟠 Desafiadora |

**Observação:** Os três projetos com saúde "Boa" compartilham um padrão: **resposta rápida a bugs críticos com merges no mesmo dia**. Os demais sofrem com acúmulo de PRs sem revisão ou bugs de longa duração.

---

## 3. Posicionamento do Projeto Principal

### NullClaw como Referência

NullClaw, posicionado como referência pelo relatório original, apresenta características distintas:

| Dimensão | NullClaw | Média do Ecossistema |
|----------|----------|---------------------|
| **Arquitetura de extensibilidade** | Skills + Tool customization + MCP | Variável (skills em ~50% dos projetos) |
| **CLI-first design** | `--skill`, `--workspace` flags | Presente em todos, mas NullClaw mais granular |
| **Foco em tool discovery** | Nested directories + RFC 0.2.0 | Nenhum outro projeto menciona RFC de skills |
| **Contribuidor principal** | `manelsen` (11 PRs, 1 autor) | Distribuído (múltiplos autores em todos) |
| **Bugs críticos sem resposta** | 2 (#868, #869) | 0-7 conforme projeto |

**Vantagens competitivas:**
- Abordagem mais rigorosa de versionamento de skills (SHA256 validation)
- Pipeline de tool customization mais maduro (schema formal)
- Direção técnica explícita via RFC, diferente de competitors que evoluem organicamente

**Desvantagens:**
- Dependência excessiva de contribuidor único (`manelsen`) — risco de burnout
- Bugs Android/Termux (#868) indicam atenção insuficiente a plataformas não-principais
- Inconsistência de configuração de canais (#869) sugere dívida técnica em DX

---

## 4. Focos Técnicos Compartilhados

### 4.1 DeepSeek Reasoning Mode — Problema Universal

**Todos os 7 projetos** enfrentam bugs com `reasoning_content` em DeepSeek:

| Projeto | Issue | Sintoma |
|---------|-------|---------|
| Hermes Agent | #15325, #15323 | HTTP 400 em multi-turn com DeepSeek v4 |
| PicoClaw | #2650, #2648 | Tool calls error quando reasoning ativado |
| CoPaw | #3782 | `reasoning_content` não passado em requests subsequentes |
| ZeroClaw | #5298 | Vazamento de `reasoning_content` em streaming (GLM-5) |

**Causa raiz comum:** Reordenamento incorreto de `reasoning_content` vs. conteúdo final no histórico de chat após tool calls. A indústria ainda não padronizou como manter reasoning chains persistentes entre turnos quando tools intervêm.

### 4.2 OAuth/Autenticação Fragilizada

| Projeto | Provider Afetado | Issue |
|---------|------------------|-------|
| PicoClaw | OpenAI, Antigravity | #2602 |
| Hermes Agent | Claude Max OAuth | #15080 |
| Hermes Agent | MiniMax OAuth | #3347 |
| CoPaw | Google Antigravity | PR #2163 (27 dias em aberto) |

### 4.3 Memory/Context Overhead

| Projeto | Problema | Impacto |
|---------|----------|---------|
| NanoBot | RAM ~600 MB vs ~200 MB (v0.1.5.post2) | Corrigido com lazy imports |
| CoPaw | Vector model config reset em Docker | Persistência de memória |
| ZeroClaw | Summarization timeout + Postgres como solução | Backend opcional |

### 4.4 Multi-Agent e Orchestration

Seis de sete projetos demonstram interesse em multi-agent:

- **ZeroClaw:** RFC #5890 ativa, 8 👍 em routing multi-agente
- **Hermes Agent:** `delegate_task` tool com deadlock bugs (#15320, #14685)
- **CoPaw:** Async agent communication (#2225)
- **PicoClaw:** Delegate tool para cross-agent handoff (#2531)
- **IronClaw:** Skill-based HTTP declarations substituindo WASM (#2904)
- **NullClaw:** Skills RFC 0.2.0

### 4.5 Canais Asiáticos de Mensageria

| Canal | Projetos com Suporte/Request |
|-------|------------------------------|
| **QQ** | PicoClaw (#1780 — stability), ZeroClaw (#2503 — NapCat/OneBot11) |
| **WeChat** | NanoBot (limite 10 mensagens #2772), IronClaw (iLink recovery #5259) |
| **DingTalk** | NanoBot (#3344), CoPaw (múltiplos fixes) |
| **Feishu/Lark** | Hermes Agent (P3 bugs) |
| **Wecom/WxWork** | ZeroClaw (#3090) |
| **Telegram** | Todos os projetos — maturidade variável |

---

## 5. Análise de Diferenciação

### 5.1 Por Arquitetura

| Projeto | Paradigma Principal | Diferenciador |
|---------|--------------------|---------------|
| **NullClaw** | Tool-centric com skills como citizens de primeira classe | RFC-driven extensibility, SHA256-validated skills |
| **Hermes Agent** | TUI-first com React/Ink CLI | Interface interativa mais avançada |
| **IronClaw** | Engine v2 com disponível actions | Arquitetura de agente mais rigorosa |
| **CoPaw** | Memory-centric com backends plugáveis | Refatoração completa de memória em v1.1.4 |
| **ZeroClaw** | Sandbox-first com segurança por default | Shell policy, HMAC receipts, sandbox Python |
| **NanoBot** | Channel-agnostic com streaming robusto | Timeout guards, lazy imports |
| **PicoClaw** | MCP-native com CRUD CLI completo | Gerenciamento de servidores MCP via terminal |

### 5.2 Por Público-Alvo

| Projeto | Público Primário | Evidência |
|---------|------------------|-----------|
| **NullClaw** | Desenvolvedores avançados | RFC, SHA256 skills, trigger-based prioritization |
| **Hermes Agent** | Teams corporativas | OAuth, MS Teams, ACP sessions, cron jobs |
| **IronClaw** | DevOps/Platform engineers | Docker configs, NAS deployments, Slack Socket Mode |
| **CoPaw** | Usuários chineses Enterprise | DingTalk, Feishu, DeepSeek v4, CJK tokenization |
| **ZeroClaw** | Security-conscious developers | HMAC receipts, sandbox policy, shell restrictions |
| **NanoBot** | Power users multi-canal | 7+ canais, streaming, provider failover |
| **PicoClaw** | Embedded/IoT developers | NXP i.MX93, Termux, serial port tools |

### 5.3 Por Estratégia de Provider

| Estratégia | Projetos | Exemplos |
|------------|----------|----------|
| **Diversificação aggressive** | CoPaw, ZeroClaw | DeepSeek v4, GLM-5, AliYun, Volcano, MiniMax |
| **OpenAI/Anthropic-first** | NanoBot, Hermes | Suporte a custom providers, mas foco em principais |
| **Nativo para China** | CoPaw | 8+ providers chineses integrados |
| **Bedrock/OpenAI Responses** | IronClaw | AWS Bedrock, tool name 64-char limits |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Velocidade | Estágio |
|---------|:----------------:|:----------:|---------|
| **CoPaw** | 35 | 🔥 Muito rápida | Feature-driven |
| **NanoBot** | 34 | 🔥 Muito rápida | Estabilização |
| **Hermes Agent** | 2+ (contexto 50 atualizados) | ⚡ Rápida | Qualidade |
| **PicoClaw** | 19 | ⚡ Rápida | Feature-driven |
| **IronClaw** | 6 | 🐢 Lenta | Qualidade |
| **NullClaw** | 0 | 🐢 Estagnada | Gargalo de revisão |
| **ZeroClaw** | 24 | ⚡ Rápida | Feature-driven |

### 6.2 Qualidade vs. Velocidade

**Projetos que equilibram velocidade + qualidade:**
- **NanoBot:** Resolveu memory leak (~25 MB) e deadlock em ≤24h
- **CoPaw:** White screen bug recebeu 3 reports independentes + workaround em <24h

**Projetos com velocidade sacrificando qualidade:**
- **NullClaw:** 11 PRs de `manelsen` sem revisão — risco de acúmulo técnico
- **Hermes Agent:** 6 P1 PRs simultâneos = pressão na equipe de review

### 6.3 Retenção de Contribuidores

| Projeto | Sinais Positivos | Sinais Negativos |
|---------|------------------|------------------|
| **CoPaw** | Issue colaborativa #2291 com 60 comentários | — |
| **NullClaw** | — | 11 PRs de 1 autor, bugs sem resposta |
| **ZeroClaw** | 8 👍 em feature multi-agent, 9 comentários em AliYun | Issues stale sem decisão |
| **Hermes Agent** | 290 contributors, 1.556 commits em 2 versões | 48 issues abertas vs. 2 fechadas |
| **IronClaw** | PRs size XL merging regularmente | Canary tests falhando, 2 lanes quebradas |

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (Evidência em ≥5 projetos)

**1. Provider Failover e Resiliência Multi-Provider**
- **NanoBot:** Issue #3376 com 7 comentários — failover automático solicitado
- **ZeroClaw:** Provider-scoped fallback chains (#4647)
- **Hermes Agent:** Claude Max OAuth quebrado, DeepSeek 400 em multi-turn
- **Síntese:** O modelo de "single provider, single model" está obsoleto. Usuários esperam resiliência de produção.

**2. Localização e Mercado Chinês**
- **CoPaw:** DeepSeek v4, GLM-5, Volcano Coding Plan, CJK tokenization
- **Hermes Agent:** MiniMax OAuth, Chinese localization RFC
- **ZeroClaw:** AliYun Bailian, Wecom, WeChat iLink
- **PicoClaw:** QQ channel (longa duração)
- **Síntese:** A base de usuários chinesa é significativa e crescente. Providers CN estão se tornando standard.

**3. Extensibilidade via Skills e MCP**
- **NullClaw:** RFC 0.2.0 com SHA256 validation
- **PicoClaw:** CRUD CLI para MCP servers
- **IronClaw:** SKILL.md substituindo WASM
- **CoPaw:** Semantic skill routing via embedding
- **Síntese:** Skills estão emergindo como primitivo de extensibilidade padrão, com MCP como transporte.

**4. Desktop Modernization**
- **CoPaw:** Tauri 2.x substituindo Electron
- **ZeroClaw:** Menu bar chat agent com voz + imagem
- **Hermes Agent:** TUI reescrita em React/Ink
- **Síntese:** Electron está sendo abandonado em favor de soluções mais leves (Tauri) ou nativas (React/Ink CLI).

### 7.2 Tendências Moderadas (Evidência em 3-4 projetos)

**5. Memory como Serviço**
- ZeroClaw: Postgres como backend opcional
- CoPaw: Memory module refactored com backends plugáveis
- NanoBot: Lazy imports eliminando 25 MB

**6. Multi-Agent Orchestration**
- ZeroClaw: RFC ativa, 8 👍
- Hermes Agent: delegate_task com deadlocks (início de implementação)
- CoPaw: Async agent communication
- PicoClaw: Delegate tool

**7. Mobile/Embedded Support**
- NullClaw: Termux/Android build (quebrado)
- PicoClaw: NXP i.MX93, serial port tools
- NanoBot: Windows desktop (white screen regression)

### 7.3 Tendências Emergentes (Evidência em 1-2 projetos)

**8. Sandbox Policies Rigorosos**
- ZeroClaw: Shell policy bloqueia `git -C`, padrões Python realistas
- CoPaw: Workspace sandbox request similar a Claude Code
- **Direção:** Isolamento de código como feature de segurança, não apenas DX.

**9. Observabilidade de Tool Calls**
- NullClaw: A2A progress hints forwarding
- ZeroClaw: OTel spans com `gen_ai.tool.*` attributes
- **Direção:** Tool calls evoluindo de debug output para arquitetura de observabilidade.

**10. Self-Hosting e NAS Deployments**
- IronClaw: UGreen DX4600, UGOS Pro, Synology Docker
- PicoClaw: Synology NAS via Docker
- **Direção:** Crescente interesse em deployment on-premise para privacidade/c

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot
## HKUDS/nanobot | 2026-04-25

---

## 1. Panorama do Dia

NanoBot atravessa um período de **altíssima atividade de manutenção e estabilidade**. Nas últimas 24 horas, 41 PRs foram atualizados (34 merged/fechados) e 14 issues receberam atenção, sinalizando uma sprint intensa de bugfixes e melhorias de robustez. O projeto não lançou novas versões hoje, mas o volume de merges sugere preparação para uma release futura. As atenções estão concentradas em **estabilidade operacional** (timeouts de LLM, memory leaks, regressões de streaming) e em **qualidade de vida** (vídeo em canais, lazy imports, comandos CLI). A saúde geral é boa, com a equipe respondendo ativamente a bugs críticos e a comunidade contribuindo com PRs de alta qualidade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release visível nos dados é `v0.1.5.post2`, que introduziu a feature "dream" e tornou `openpyxl`, `python-docx` e `python-pptx` dependências padrão — causando o memory overhead reportado em [#3410](https://github.com/HKUDS/nanobot/issues/3410). A correçãolazy-import já foi merged em [#3423](https://github.com/HKUDS/nanobot/pull/3423) e deve compor a próxima versão.

---

## 3. Progresso do Projeto

**7 PRs fechadas/merged hoje com impacto direto:**

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#3423](https://github.com/HKUDS/nanobot/pull/3423) | perf(document): lazy-import heavy document parsers | mvanhorn | Elimina ~25 MB de custo de startup; resolve [#3422](https://github.com/HKUDS/nanobot/issues/3422) |
| [#3428](https://github.com/HKUDS/nanobot/pull/3428) | fix(agent): add LLM request timeout | yorkhellen | Adiciona guard de timeout wall-clock ao loop de agente; resolve [#3424](https://github.com/HKUDS/nanobot/issues/3424) |
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) | feat(webui): render video media attachments | Re-bin | Renderiza vídeos inline no WebUI com `<video controls>` |
| [#3429](https://github.com/HKUDS/nanobot/pull/3429) | feat(channels): add video support for Telegram and WebSocket | Re-bin | Usa `send_video` com streaming no Telegram; trata `VIDEO`/`ANIMATION` |
| [#1403](https://github.com/HKUDS/nanobot/pull/1403) | security: deny by default in is_allowed | chengyongru | Bloqueia acesso anônimo quando `allow_from` não está configurado |
| [#1272](https://github.com/HKUDS/nanobot/pull/1272) | Modernize engineering workflow: Ruff, Pre-commit, Guidelines | chengyongru | Padroniza linting/formatting e guia de contribuição |
| [#1427](https://github.com/HKUDS/nanobot/pull/3427) | Fix session replay token budgeting + DeepSeek normalization | boogieLing | Corrige falhas com DeepSeek e previne crescimento ilimitado de arquivos de sessão |

**Destaque:** O PR [#3428](https://github.com/HKUDS/nanobot/pull/3428) é crítico — deadlock de agente por LLM travado era um problema de estabilidade em produção. O PR [#3423](https://github.com/HKUDS/nanobot/pull/3423) resolve diretamente a queixa de memory overhead reportada em [#3410](https://github.com/HKUDS/nanobot/issues/3410).

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

1. **[#3376](https://github.com/HKUDS/nanobot/issues/3376)** — "支持模型异常自动切换（Provider / Model Failover）"
   - 7 comentários, 1 👍 | **Aberto** | Prioridade: alta
   - **Demanda:** Usuários com múltiplos provedores desejam failover automático ao encontrar 429, timeouts, 5xx. Hoje o nanobot faz retry no mesmo provider, mas não alterna.
   - **Sinal de roadmap:** Esta é a 2ª issue com mais comentários. A comunidade sinaliza claramente que o modelo atual de resiliência é insuficiente para uso em produção.

2. **[#1932](https://github.com/HKUDS/nanobot/issues/1932)** — "技能不支持禁用，只能删除" (Skill enable/disable)
   - 7 comentários | **Aberto** | Tag: `good first issue`
   - **Demanda:** Usuários querem poder desabilitar skills sem precisar deletá-las, para configuração mais flexível.

3. **[#3421](https://github.com/HKUDS/nanobot/issues/3421)** — RFC: `nanobot update` CLI command
   - 4 comentários | **Aberto**
   - **Demanda:** Proposta de comando `nanobot update` para automatizar upgrades, dado o ritmo acelerado de releases.

---

## 5. Bugs e Estabilidade

**Bugs abertos com severidade relevante:**

| # | Título | Severidade | Status | Link |
|---|--------|------------|--------|------|
| [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex streaming regression (v0.1.4.post6 → v0.1.5.post2) | **Alta** | Aberto | Streaming de `_progress` parou de funcionar |
| [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Large RAM consumption in v0.1.5.post2 (~600 MB vs ~200 MB) | **Alta** | Aberto | Corrigido em [#3423](https://github.com/HKUDS/nanobot/pull/3423) |
| [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Tool Call error + subsequent dead-lock | **Média-Alta** | Fechado (?) | Resolvido provavelmente por [#3428](https://github.com/HKUDS/nanobot/pull/3428) |
| [#3424](https://github.com/HKUDS/nanobot/issues/3424) | Agent loop deadlocks when LLM API hangs | **Alta** | Fechado | Corrigido em [#3428](https://github.com/HKUDS/nanobot/pull/3428) |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | DingTalk: file upload + @mention em mensagens separadas | **Média** | Aberto | Impede bots de receber arquivos |
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) | WeChat: limite de 10 mensagens por contexto | **Média** | Aberto | Questão de configuração de tokens |
| [#3431](https://github.com/HKUDS/nanobot/issues/3431) | MS Teams threaded replies postam no endpoint errado | **Média** | Aberto | PR [#3432](https://github.com/HKUDS/nanobot/pull/3432) em aberto |

**Bugs resolvidos hoje:**
- [#3417](https://github.com/HKUDS/nanobot/issues/3417): `anthropic_provider` hardcoded `temperature=1.0` causando 400 com Claude Opus 4.7
- [#3422](https://github.com/HKUDS/nanobot/issues/3422): Eager imports de document parsers (~25 MB)

**Nota de regressão:** A regression de streaming no OpenAI Codex ([#3426](https://github.com/HKUDS/nanobot/issues/3426)) introduzida entre v0.1.4.post6 e v0.1.5.post2 é o bug aberto de maior impacto funcional — usuários de streaming veem a resposta final sem feedback progressivo.

---

## 6. Pedidos de Features e Sinais de Roadmap

| # | Feature | Tipo | Potencial Impacto |
|---|---------|------|-------------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover automático | **Enhancement** | Alta — resiliência em produção |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) | `nanobot update` CLI command | **Feature Request** | Média — DX, alinhado ao ritmo de releases |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) | Habilitar/desabilitar skills | **Enhancement** | Média — UX/ configuração |
| [#3431](https://github.com/HKUDS/nanobot/issues/3431) | MS Teams threaded replies via `replyToId` | **Bug/Feature** | Média — correção de canal |

**Sinais de direção estratégica:**
- O investimento contínuo em **resiliência de canais** (Telegram, MS Teams, DingTalk, WebSocket) indica priorização de cobertura multi-plataforma.
- A feature "dream" introduzida em v0.1.5.post2 e a preocupação imediata com memory overhead mostram que o projeto está refinando funcionalidades recentes.
- O PR [#1403](https://github.com/HKUDS/nanobot/pull/1403) (segurança por default) e [#1721](https://github.com/HKUDS/nanobot/pull/1721) (security check para skills) revelam maturação em direção a deployment corporativo.

---

## 7. Resumo de Feedback dos Usuários

| Categoria | Feedback | Sentimento |
|----------|----------|------------|
| **Estabilidade** | Deadlocks quando LLM não responde; memory leak em v0.1.5.post2; regressão de streaming | 😟 Insatisfeito |
| **Resiliência** | Falta de failover entre providers é blocker para produção com múltiplas LLMs | 😟 Insatisfeito |
| **DX / CLI** | Falta comando `nanobot update`; dificuldade com upgrades manuais via pip/uv | 😐 Neutro |
| **Skills** | Não poder desabilitar skills sem deletar; skill-creator tool indisponível após upgrade | 😐/😟 Insatisfeito |
| **Canais** | Problemas de file upload no DingTalk; limite de 10 mensagens no WeChat; Teams replies quebradas | 😐 Insatisfeito |
| **Performance** | ~25 MB de imports desnecessários no startup; RAM triplicada na última versão | 😟 Insatisfeito |

**Tom geral:** A comunidade está ativa e engajada, mas há frustração acumulada com **regressões na estabilidade** (v0.1.5.post2) e com a **falta de resiliência de providers**. A velocidade de resposta da equipe (múltiplos fixes no mesmo dia) é um ponto positivo.

---

## 8. Backlog que Merece Atenção

| # | Título | Idade | Status | Por que merece atenção |
|---|--------|-------|--------|------------------------|
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | Missing ability to create skills | ~40 dias | Fechado (recentemente) | 13 comentários; a ferramenta de criar skills foi desabilitada sem substituição clara |
| [#162](https://github.com/HKUDS/nanobot/issues/162) | Session management: multiple conversations, new session command, auto-expiration | ~78 dias | Fechado | Melhora fundamental de UX que pode não estar completamente resolvida |
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) | WeChat limite de 10 mensagens | ~22 dias | Aberto | Bloqueia uso prático em conversas longas |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover | ~3 dias | Aberto | Demanda crescente; impacto direto emprodutividade |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | DingTalk file upload quebrado | ~4 dias | Aberto | Impede caso de uso document-to-bot |
| [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex streaming regression | <1 dia | Aberto | Regressão funcional; alto impacto em UX |

**Recomendação:** Priorizar [#3376](https://github.com/HKUDS/nanobot/issues/3376) (failover) e [#3426](https://github.com/HKUDS/nanobot/issues/3426) (streaming regression) para a próxima release. Ambos são bloqueadores para uso em produção.

---

*Relatório gerado automaticamente com base em dados do GitHub para 2026-04-25. Verifique os links para o estado mais atualizado.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório de Projeto — Hermes Agent
**Data de referência:** 2026-04-25 | **Repositório:** NousResearch/hermes-agent

---

## 1. Panorama do dia

O Hermes Agent encerra o ciclo de 24h com forte intensidade de atividade: 50 issues e 50 PRs atualizados, além de uma nova release (v0.11.0) lançada em 2026-04-23. A versão marca a reformulação completa da interface CLI com React/Ink e trouxe 1.556 commits, 761 PRs mergeados e 224 contributors desde a v0.9.0. A base de issues abertas permanece volumosa — 48 issues abertas contra apenas 2 fechadas no período — sinalizando que a equipe está em modo receptivo, processando entradas da comunidade a um ritmo acelerado. Os sinais de estabilidade são mistos: bugs P1 afectan fluxos críticos (proxy WSL, Matrix, Claude Max OAuth, Nix CI) e demandam atenção imediata, enquanto a pipeline de PRs demonstra maturidade com correções em paralelo para problemas de diferentes componentes.

---

## 2. Lançamentos

### ✅ v2026.4.23 — Hermes Agent v0.11.0

**Data:** 23 de abril de 2026 | **Tag:** `v2026.4.23`

> **"The Interface Release"** — reescrita completa do CLI interativo com React/Ink.

| Métrica | Valor |
|---|---|
| Commits desde v0.9.0 | 1.556 |
| PRs mergeados | 761 |
| Arquivos alterados | 1.314 |
| Linhas inseridas | 224.174 |
| Contributors (core) | 29 |
| Contributors (incl. co-autores) | 290 |

**Destaques esperados da release:**
- CLI interativo reescrito em React/Ink (mudança arquitetural significativa)
- Atualizações de provedores e provedores de IA
- Melhorias de estabilidade no gateway e no scheduler de cron

> ⚠️ **Nota de migração potencial:** A reescrita do CLI pode afetar scripts de automação que dependem do comportamento anterior do comando `hermes`. Não há changelog detalhado de breaking changes visível nos dados disponíveis — recomenda-se verificar o CHANGELOG oficial antes de atualizar em ambientes de produção.

🔗 [Release v2026.4.23](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23)

---

## 3. Progresso do Projeto

### PRs mergeados/fechados no período (2)

| # | PR | Autor | Impacto |
|---|---|---|---|
| **#15029** | `fix(cli): dedupe /model user providers and filter irrelevant doctor warnings` | dptomadera-dotcom | Corrige listagem duplicada de provedores no seletor de modelo e remove warnings espúrios do comando `doctor`. Corretivo de DX significativo. |
| **#15321** | `fix(tui): render tool trail before anchored inline diffs` | OutThisLife | Corrige regressão de ordenação no painel de detalhes do turno da TUI — tool calls agora são renderizados antes de diffs inline. |

### PRs abertos de destaque (7)

| # | PR | Autor | Prioridade | Componente | Resumo |
|---|---|---|---|---|---|
| **#15325** | `fix(deepseek): inject empty reasoning_content on replay for OpenRouter DeepSeek` | ukint-vs | P1 | agent | Corrige HTTP 400 em multi-turn conversations com DeepSeek v4 em modo thinking quando mensagens replayadas faltam `reasoning_content`. |
| **#14304** | `fix CLI approval callback propagation` | Superdanda | P1 | cli, agent, tools | Corrige freeze de prompts de aprovação de comandos perigosos no CLI — callbacks armazenados em thread-local state eram perdidos em certos caminhos de execução. |
| **#15323** | `fix(kilo): workaround DeepSeek thinking-mode 400 on Kilo gateway` | asin76-svg | P1 | agent, provider/kilo | Workaround para o mesmo erro de `reasoning_content` via Kilo Code Gateway (v4-pro/v4-flash/reasoner). |
| **#11512** | `fix(auth): parse OpenAI nested error shape in Codex token refresh` | j3ffffff | P1 | auth | Token refresh do Codex falha silenciosamente quando OpenAI retorna `refresh_token_reused` — branch dedicada de re-autenticação nunca é disparada. |
| **#15320** | `fix(delegation): pass target_model to resolve_runtime_provider` | Emidomenge | P1 | tool/delegate | Corrige erro 404 em `delegate_task` quando `delegation.model` difere de `model.default` em `opencode-go/opencode-zen`. |
| **#14685** | `fix(delegate): prevent subagent approval prompts from deadlocking parent TUI` | MorAlekss | P1 | cli, tool/delegate | Corrige deadlock quando subagentes encontram comandos perigosos dentro de `delegate_task` — callback de aprovação registrado apenas na main thread. |
| **#15317** | `feat: integrate OMO parity waves` | bharatindia123-a11y | P3 | agent, cli, gateway, tools, tui, acp | Consolida múltiplas waves de implementação OMO (hashline, stale-edit, code-intel, named-agent, archetype contracts) em um branch coeso. |

**Análise:** Há 6 PRs P1 abertos simultaneamente, sinalizando pressão significativa sobre a equipe de revisão. Todos os P1 são relacionados a correções de bugs críticos em cenários específicos (DeepSeek thinking mode, delegate, auth, CLI callback). O PR #15317 de integração OMO representa a frente de evolução arquitetural.

🔗 [Todos os PRs abertos](https://github.com/NousResearch/hermes-agent/pulls)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | 👍 | Prioridade | Tema |
|---|---|---|---|---|---|
| **#12614** | Bot does not receive messages on fresh Matrix setup (no inbound events, sync stalls) | 17 | 0 | P1 | **Conectividade / Platforma** — Matrix bot não recebe eventos após update para versão pós-merge de #10860. Bug afeta novos deployments. |
| **#3347** | MiniMax Oauth | 5 | 0 | — | **Integração** — Usuário solicita suporte oficial a OAuth do MiniMax, relatando ausência da feature e referência a migrating from OpenClaw. |
| **#11609** | All API calls timeout on WSL with HTTP proxy | 4 | 1 | P1 | **Infraestrutura** — Custom `httpx.HTTPTransport` ignora `HTTPS_PROXY` em WSL2 com Clash TUN mode. |
| **#10271** | OAuth 2.1 PKCE fails for servers with a path in their endpoint URL | 3 | 3 | — | **Auth / MCP** — Servidores MCP com path no endpoint (e.g. `/mcp`) falham na validação RFC 8707 desde SDK 1.27.0. |
| **#11524** | RFC: Proposal — "The AI That Remembers You" as Official Positioning | 3 | 0 | P3 | **Branding / Docs** — Proposta de repositionamento de marketing usando framework AIDA para atingir 100k stars. |

**Análise:** O tema mais discutido (#12614, 17 comentários) é um bug de regressão no adapter Matrix que impede o bot de receber mensagens em setups novos — dor real para novos usuários. A issue #3347 (MiniMax OAuth) reflete demanda crescente por diversificação de provedores na base chinesa. O RFC #11524, embora P3, revela que a comunidade está ativamente engajada em estratégia de crescimento de visibilidade do projeto.

🔗 [Issue #12614 — Matrix](https://github.com/NousResearch/hermes-agent/issues/12614) · [Issue #3347 — MiniMax](https://github.com/NousResearch/hermes-agent/issues/3347) · [Issue #10271 — OAuth PKCE](https://github.com/NousResearch/hermes-agent/issues/10271)

---

## 5. Bugs e Estabilidade

### P1 — Críticos (7 issues + 6 PRs abertos)

| # | Bug | Componente | Descrição |
|---|---|---|---|
| **#12614** | Matrix bot sem receive de mensagens | platform/matrix | Fresh setup não recebe inbound events após update. |
| **#11609** | API timeouts em WSL com proxy HTTP | comp/agent | Custom httpx transport ignora `HTTPS_PROXY`. |
| **#15080** | Claude Max OAuth token rejeitado com HTTP 400 | provider/anthropic, auth | Requisições para `api.anthropic.com/v1/messages` retornam 400 mesmo com token válido. |
| **#15314** | `npmDepsHash` desatualizado na TUI Nix derivation | comp/tui, nix | Build Nix falha com hash desatualizado (mesma root cause de #15272). |
| **#15281** | Session compression duplica system prompt (+102%) | comp/agent | `/compress` concatena definições de identidade, dobrando tamanho. |
| **#15298** | `_restore_primary_runtime()` não verifica cooldown de credenciais | comp/agent | Provider primário restaurado sem verificar cooldown, desperdiçando retries. |
| **#15272** | Nix CI quebrado — `npmDepsHash` desatualizado (bloqueia todos PRs) | area/nix | Workflow Nix falha em todo PR e main run. |

### P2 — Significativos (8 issues + PRs abertos)

| # | Bug | Componente | Descrição |
|---|---|---|---|
| **#11560** | `hermes profile --clone-all` crasha com RecursionError em symlink | comp/cli | `shutil.copytree` entra em recursão infinita com symlink circular. |
| **#11610** | Cron intermittent `ModuleNotFoundError: No module named 'openai'` | comp/cron | Depende de qual interpretador Python é usado no runtime. |
| **#11614** | Gateway exit mata embedded cron ticker ao desconectar Telegram | comp/gateway, platform/telegram | Cron jobs perdem execuções durante restart. |
| **#11515** | ACP session cwd usado em tool execution mas não em project context discovery | comp/agent, comp/acp | Inconsistência entre cwd de tools e `.hermes.md`. |
| **#15319** | `delegate_task` 404 com model diferente do main em opencode-go | tool/delegate | Delegação subagente atinge endpoint errado. |
| **#15297** | Error classifier trata 429 de overload como rate_limit (Z.AI/Zhipu) | comp/agent, provider/zai | Estratégia de recovery errada para 429 específicos. |
| **#14632** | Slack onboarding diz `/sethome` mas Slack só aceita `/hermes <subcommand>` | platform/slack | Onboarding misleading para novos usuários. |
| **#15290** | Permission denied persistente em `/opt/data/config.yaml` no NAS Docker | area/docker | Container não consegue escrever config mesmo com privilégios. |

### P3 — Incômodos / UX (6 issues)

| # | Bug / Issue | Componente |
|---|---|---|
| **#11587** | Feishu: `bot_p2p_chat_entered` handler não implementado causa log spam | platform/feishu |
| **#11589** | Feishu: mensagens truncadas por usar `len()` UTF-8 em vez de UTF-16 | platform/feishu |
| **#14448** | Docker: UX ruim — `mkdir /root` falha em produção, mount dirs confusos | area/docker |
| **#11602** | Cron: support comma-separated multi-target delivery | comp/cron |
| **#15267** | CLI: filtro de providers não configurados no model selection UI | comp/cli |
| **#7895** | OpenWebUI: imagens geradas não são enviadas de volta | integration/openwebui |

**Análise de estabilidade:** O quadro é preocupante. Há **7 bugs P1 ativos**, sendo dois bloqueantes de CI/CD (#15272 Nix, #15314 TUI Nix), dois de quebra de experiência em plataformas críticas (Matrix #12614, Claude Max #15080), e dois de regressão funcional no agente (#15281, #15298). A taxa de issues fechadas no período (2/50 = 4%) está bem abaixo do ideal para um projeto neste ritmo de atividade — risco de acúmulo de backlog.

🔗 [Issues P1](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aopen+P1) · [Nix CI issue #15272](https://github.com/NousResearch/hermes-agent/issues/15272)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| # | Feature | 👍 | Componente | Potencial impacto |
|---|---|---|---|---|
| **#3347** | MiniMax OAuth integration | 0 | provider/minimax | Integração com ecossistema chinês de IA — atrai base CN |
| **#12954** | Chinese (Simplified/Traditional) Localization | 0 | i18n, docs, cli | Localização completa para mercado chinês |
| **#15311** | Generic action buttons / inline keyboard para plataformas | 1 | comp/gateway, platform/telegram | Abstrair o pattern de botões interativos para todas plataformas |
| **#15288** | Config option para passar imagens diretamente a modelos multimodais | 0 | comp/gateway, tool/vision | Bypass do pipeline auxiliar de visão — reduz latência |
| **#14844** | Support `openai/gpt-5.5` como fallback LLM | 0 | provider/openai | Expansão de opções de fallback (closed, was feature request) |
| **#11602** | Cron: comma-separated multi-target delivery | 1 | comp/cron | Evita duplicação de cron jobs para multi-plataforma |
| **#14461** | Local WeChat gateway adapter via wechat-bridge | 0 | comp/gateway, platform/wechat | Suporte a WeChat pessoal como canal |
| **#15317** | Integrate OMO parity waves (hashline, named-agent, archetype contracts) | 0 | multi | Evolução arquitetural significativa —多名 contributors |

### Sinais de roadmap

Três tendências emergentes se destacam:

1. **Localização e mercado chinês:** Issues #3347, #12954 e PR #11524 (README em chino) indicam esforço coordenado da comunidade para internacionalização.
2. **OMO Architecture:** O PR #15317 busca consolidar múltiplas waves de refatoração (hashline, code-intel, named-agent) — sinal claro de que a equipe está investindo em fundamentos de longo prazo.
3. **Multi-plataforma de mensagens:** WeChat (#14461), generic action buttons (#15311), multi-target cron delivery (#11602) mostram demanda por consolidar Hermes como hub central de mensageria.

🔗 [Feature requests](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aopen+type%2Ffeature) · [PR #14461 WeChat](https://github.com/NousResearch/hermes-agent/pull/14461) · [PR #15317 OMO](https://github.com/NousResearch/hermes-agent/pull/15317)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|---|---|---|
| **Matrix bot inoperante em novos deployments** | #12614 — 17 comentários, usuário relatando que bot conecta mas nunca recebe mensagens | Alta |
| **Nix CI quebrado bloqueia todos os PRs** | #15272 — cada contribuição da comunidade está sendo bloqueada no CI | Crítica |
| **DeepSeek thinking mode quebra multi-turn** | #15325, #15323 — modelos populares v4-pro/v4-flash retornam 400 em conversas com histórico | Alta |
| **Claude Max OAuth com token válido retorna 400** | #15080 — usuários pagantes com assinatura Max não conseguem usar o provider | Alta |
| **Docker UX frustrante em produção** | #14448 — `mkdir /root` falha em containers privileged; mounts confusos | Média |
| **Feishu não funciona corretamente com caracteres chineses** | #11589 — truncation prematura; #11587 — log spam de eventos não tratados | Média |
| **OAuth MiniMax ausente** | #3347 — usuário migrando de OpenClaw não consegue configurar provider | Média |

### Cenários de uso observados

- **Deployment em NAS (UGreen DX4600, UGOS Pro):** #15290 — interesse em executar Hermes em hardware de NAS para automação residencial/small office.
- **Agente operacional em equipe de vendas solar:** #11550 — "Bilbo Baggins" operando com 8 repórteres via iMessage Gateway, demonstrando adoção real em produção.
- **WSL2 como ambiente de desenvolvimento prim

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-25

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** em 25 de abril de 2026. Nas últimas 24 horas, foram registradas **14 issues atualizadas** (10 abertas, 4 fechadas) e **40 PRs** (21 abertas, 19 merged/fechadas), indicando um ritmo de desenvolvimento intenso. A release nightly `v0.2.7-nightly.20260424.f4400472` foi publicada, sinalizando avanço em direção à versão 0.2.7. Os temas dominantes do período concentram-se em **correções de bugs em provedores de IA** (DeepSeek, Anthropic, OAuth), **melhorias na interface do chat** (toggle de visibilidade de raciocínio, formatação de ferramentas) e **expansão de canais** (MQTT, QQ). A comunidade demonstra engajamento ativo, especialmente em problemas de usabilidade mobile e integração com hardware embarcado.

---

## 2. Lançamentos

### Release Recente

**Nightly Build: `v0.2.7-nightly.20260424.f4400472`**  
📦 [github.com/sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/releases)

| Info | Detalhe |
|------|---------|
| **Tipo** | Automated nightly build |
| **Versão base** | v0.2.7 (comparado com branch `main`) |
| **Aviso** | *This is an automated build and may be unstable. Use with caution.* |

**Notas:**
- Release automatizada com base no commit mais recente do branch `main`.
- Sem changelog formal publicado — usuários são orientados a consultar o diff em [compare/v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main).
- **Recomendação:** Não utilizar em produção até release estável.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (19)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | Enhancement | **feat(mcp): add show, add, list, remove, test, edit CLI commands** | CRUD completo para servidores MCP via terminal, eliminando edição manual de JSON |
| [#2487](https://github.com/sipeed/picoclaw/pull/2487) | Bug Fix | **Fix Windows build flow** | Resolve falhas de build no Windows; remove dependências Unix-only no Makefile |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) | Security | **Security: Harden websocket 'CheckOrigin'** | Mitiga vulnerabilidade CSWSH (Cross-Site WebSocket Hijacking) |
| [#2573](https://github.com/sipeed/picoclaw/pull/2573) | Bug Fix | **fix(web): keep launcher locale changes from mutating shared web-search routing** | Corrige vazamento de estado de locale entre frontend e backend |

**Destaques de Avanço:**

1. **Infraestrutura MCP madura** — Suite CLI completa (#2641) permite gerenciamento de servidores MCP sem intervenção manual, facilitando automação e DevOps.

2. **Segurança WebSocket reforçada** (#2256) — Mudança de `CheckOrigin` para configuração explícita de origens permitidas, eliminando risco de CSWSH.

3. **Suporte Windows aprimorado** (#2487) — Build funcional no Windows, importante para popular base de usuários desktop.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Item | Tipo | Título | Comentários | 👍 | Tendência |
|------|------|--------|:-----------:|:---:|-----------|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Enhancement | **Option to disable 'Enter' key from sending messages** | 3 | 1 | 📈 Demanda mobile |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Enhancement | **Add in config to send streaming HTTP request** | 2 | 1 | 📈 Provedores custom |
| [#2448](https://github.com/sipeed/picoclaw/issues/2448) | Bug | **WebUI Chat responses merge agent reasoning and user-facing reply** | 3 | 0 | ✅ Closed |
| [#2616](https://github.com/sipeed/picoclaw/issues/2616) | Bug | **web_search tool not recognized when DuckDuckGo is not enabled** | 1 | 1 | ✅ Closed |

**Análise das Demandas:**

- **UX Mobile (#2376):** Usuários Android solicitam controle sobre comportamento da tecla Enter. Currently, Enter envia mensagem em vez de criar nova linha — experiência incompatível com hábitos de messaging mobile. Demanda recorrente com suporte de ao menos 1 👍.

- **Streaming HTTP (#2404):** Pedido para suportar `stream=True` em requisições HTTP para backends LLM custom, similar à biblioteca OpenAI Python. Usuários avançados buscam flexibilidade para integrações non-standard.

- **Visibilidade de Raciocínio (#2661):** PR aberto adiciona toggle para mostrar/ocultar mensagens de reasoning do modelo. Complementa issue #2448 (corrigida) — comunidade valoriza controle granular sobre exposição de chain-of-thought.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (Por Severidade)

#### 🔴 Alta Severidade

| Issue | Título | Provedor/Área | Status |
|-------|--------|---------------|--------|
| [#2650](https://github.com/sipeed/picoclaw/issues/2650) | DeepSeek-V4-Flash: tool calls error when reasoning enabled | DeepSeek | **OPEN** |
| [#2648](https://github.com/sipeed/picoclaw/issues/2648) | DeepSeek returns 400 due to misordered reasoning content after tool calls | DeepSeek | **OPEN** |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OAuth Authentication Errors (OpenAI, Antigravity) | OpenAI/Antigravity | **OPEN** |

**Análise:** Problemas com DeepSeek reasoning-mode causam falhas em tool calls. A raiz parece ser reordenamento incorreto de conteúdo de reasoning vs. resposta final no histórico. Issue #2650 descreve ciclo: erro → limpar conversa → funciona temporariamente.

#### 🟡 Média Severidade

| Issue | Título | Área | Status |
|-------|--------|------|--------|
| [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Wrong model IDs in Anthropic dropdown (dots vs dashes) | Anthropic Provider | **OPEN** |
| [#2448](https://github.com/sipeed/picoclaw/issues/2448) | WebUI merges agent reasoning with user reply (closed) | WebUI/Agent | ✅ CLOSED |
| [#2616](https://github.com/sipeed/picoclaw/issues/2616) | web_search tool not registered when DuckDuckGo disabled | Web Search | ✅ CLOSED |

**Análise:** Bug #2665 é regressão simples (formatação de IDs) mas impede seleção de modelos Anthropic. Bugs #2448 e #2616 foram corrigidos recentemente.

#### 🟢 Baixa Severidade

| Issue | Título | Área | Status |
|-------|--------|------|--------|
| [#2572](https://github.com/sipeed/picoclaw/issues/2572) | Launcher UI language changes leak into backend | i18n | ✅ CLOSED |
| [#2646](https://github.com/sipeed/picoclaw/issues/2646) | Documentation: Tested on NXP i.MX93 EVK | Hardware/Compat | **OPEN** (report) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Domínio | Complexidade Estimada |
|-------|--------|---------|----------------------|
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | **Can support github/copilot?** | Provider | TBD |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) | **Added support for serial port tools** | Tooling | Média |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | **Option to disable 'Enter' key from sending messages** | Channel | Baixa |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | **Add in config to send streaming HTTP request** | Config/Provider | Média |

### PRs de Features em Desenvolvimento

| PR | Título | Domínio | Estágio |
|----|--------|---------|---------|
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | **feat: add MQTT channel support** | Channel | Aberto |
| [#2656](https://github.com/sipeed/picoclaw/pull/2656) | **Prompt layering** | Agent | Aberto |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | **feat(tools): add delegate tool for cross-agent task handoff** | Tool/Agent | Aberto |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | **QQ connection stability** | Channel | Aberto (longa duração) |

**Sinais de Roadmap:**
- **Canais alternativos em expansão:** MQTT (#2653) e QQ (#1780) demonstram estratégia de diversificação de canais de comunicação.
- **Tooling avançada:** Delegate tool (#2531) sugere foco em multi-agency e orquestração.
- **Prompt layering (#2656):** Refatoração interna de prompts com metadata (layer, slot, source) indica preparação para systemas de prompt mais complexos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|:----------:|
| **DeepSeek Integration** | Falhas em tool calls com reasoning ativado causam frustração. Usuários precisam limpar conversas manualmente. | 🔴 Alta |
| **Mobile UX** | Tecla Enter incompatível com compose de mensagens longas em dispositivos móveis. | 🟡 Média |
| **Windows Build** | Historicamente problemático; PR #2487 endereça mas feedback ainda emerge (#2651). | 🟡 Média |
| **OAuth/Auth** | Autenticação OAuth falha para OpenAI e Antigravity (#2602). Impacta fluxos SSO. | 🔴 Alta |
| **Anthropic Model IDs** | Dropdown exibe IDs inválidos (dots vs dashes), impedindo seleção de modelos. | 🟡 Média |
| **Provider Lock-in** | Usuários solicitam GitHub Copilot (#2652) e streaming HTTP custom (#2404) para menor dependência de provedores. | 🟡 Média |

### Cenários de Uso Reportados

- **Hardware Embarcado:** Usuário reportou teste bem-sucedido em NXP i.MX93 EVK (#2646) — boa cobertura ARM64.
- **Synology NAS:** Deploy via Docker (`sipeed/picoclaw:v0.2.6-launcher`) em dispositivos Synology.
- **Android Mobile:** Usuários Android interagem via WebUI em browsers móveis.

### Satisfação/Insatisfação

| Indicador | Sentimento |
|-----------|------------|
| Atividade de Issues | ✅ Positiva — comunidade ativa reportando bugs |
| Proliferação de PRs | ✅ Positiva — 40 PRs em 24h indica contribuidores engajados |
| Bugs Críticos Abertos | 🔴 Negativa — DeepSeek e OAuth afetam fluxos principais |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Título | Criado | Atualizado | Dias Inativo |
|-------|--------|--------|------------|:------------:|
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | QQ connection stability | 2026-03-19 | 2026-04-24 | 5 dias |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | fix: maintain OAuth scopes during Google Antigravity token refresh | 2026-03-29 | 2026-04-24 | 5 dias |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Option to disable 'Enter' key from sending messages | 2026-04-06 | 2026-04-24 | 3 dias |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add in config to send streaming HTTP request | 2026-04-07 | 2026-04-24 | 3 dias |

### PRs Abertas com Potencial Impacto

| PR | Título | Criado | Atualizado | Estágio |
|----|--------|--------|------------|:-------:|
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | feat: add MQTT channel support | 2026-04-24 | 2026-04-24 | Novo |
| [#2656](https://github.com/sipeed/picoclaw/pull/2656) | Prompt layering | 2026-04-24 | 2026-04-24 | Novo |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | feat(tools): add delegate tool for cross-agent task handoff | 2026-04-15 | 2026-04-24 | 10 dias |
| [#2415](https://github.com/sipeed/picoclaw/pull/2415) | fix(config): show precise malformed config diagnostics | 2026-04-07 | 2026-04-24 | 17 dias |

### Recomendações

1. **Priorizar DeepSeek reasoning bugs (#2650, #2648):** Afetam fluxo principal de chat com modelos populares.
2. **Revisar PR #2163 OAuth:** Problema de autenticidade identificado em 29/03 — 27 dias em aberto.
3. **Avaliar merge de #2653 (MQTT) e #2656 (Prompt layering):** Ambos parecem maduros e alinhados com roadmap de multi-canal e agentes avançados.
4. **Responder issue #2376:** Feature simples com demanda clara de comunidade mobile.

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|------:|
| Issues atualizadas (24h) | 14 |
| Issues abertas/ativas | 10 |
| Issues fechadas | 4 |
| PRs atualizadas (24h) | 40 |
| PRs abertas | 21 |
| PRs merged/fechadas | 19 |
| Releases | 1 (nightly) |
| Bugs críticos abertos | 3 |
| Features em development

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-25

## 1. Panorama do dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 25 de abril de 2026. Nas últimas 24 horas, foram registradas 19 issues e 50 PRs atualizados, demonstrando um ritmo intenso de trabalho. **Não houve novos lançamentos**, mas múltiplas PRs de grande porte (size: XL) avançaram significativamente, incluindo refatorações arquiteturais e correções críticas de bugs. A equipe enfrenta desafios com falhas recorrentes nos testes canary (provider-matrix e public-smoke) e um volume expressivo de bugs de QA relacionados à experiência do Telegram, fluxo de autenticação e UI do chat. A saúde geral do projeto permanece positiva, impulsionada por contribuições diversificadas e um pipeline de CI/CD ativo.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

- O último release estável (v0.25.0) foi buildado a partir do source. Issues abertas indicam problemas de compatibilidade de plataforma (#2949) e configuração pós-upgrade (#2939, #2938).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (6 total)

| # | PR | Escopo | Impacto |
|---|-----|--------|---------|
| **#2463** | [fix(llm): normalize NEAR AI tool schemas](https://github.com/nearai/ironclaw/pull/2463) | llm, docs | Normalização de schemas de ferramentas com `normalize_schema_strict()`, impedindo falhas com top-level `oneOf`/`anyOf`/`allOf`/`enum`/`not` nos provedores NEAR AI |
| **#1988** | [fix(cli): char-boundary-safe truncation for MCP tool descriptions](https://github.com/nearai/ironclaw/pull/1988) | channel/cli | Correção de possível panic ao truncar descrições UTF-8 multi-byte (CJK, emoji, caracteres acentuados) usando `str::floor_char_boundary()` |
| **#2890** | [fix(web): resolve empty "Fetch available models" for NEAR AI](https://github.com/nearai/ironclaw/pull/2890) | channel/web | Extensão de `is_nearai_private_endpoint` para suportar subdomínios regionais (`us.private-chat-stg.near.ai`), habilitando prefixo `/v1` corretamente |
| **#2474** (Issue) | [Bug: stdio MCP servers trigger OAuth discovery flow](https://github.com/nearai/ironclaw/issues/2474) | tool/mcp | Closed com re-filing em #2923 |

### PRs em destaque em aberto (atividade recente)

| # | PR | Escopo | Tamanho | Status |
|---|-----|--------|---------|--------|
| **#2947** | [fix(tools): fit tool names to 64-char provider limit](https://github.com/nearai/ironclaw/pull/2947) | tool | L | Abregable para AWS Bedrock/OpenAI Responses — impede falhas quando identificadores `{server}_{tool}` excedem 64 chars |
| **#2904** | [Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations](https://github.com/nearai/ironclaw/pull/2904) | tool/builtin, llm, extensions | XL | Migra ferramentas WASM (github, gmail, slack, web-search, etc.) para arquivos SKILL.md com a ferramenta HTTP nativa |
| **#2934** | [fix(config): decouple webhook listener bind from HTTP channel enablement](https://github.com/nearai/ironclaw/pull/2934) | channel/cli, config | XL | Adiciona `WEBHOOK_HOST`/`WEBHOOK_PORT`, resolve duplicação de responsabilidades em `HTTP_HOST`/`HTTP_PORT` |
| **#2927** | [fix(channels): wire load_startup_active_channels for first-run fallback](https://github.com/nearai/ironclaw/pull/2927) | agent, db | XL, DB MIGRATION | Corrige canal WASM inativo na primeira instalação mesmo após wizard de setup |
| **#2868** | [engine-v2: make available_actions callable-only for blocked providers](https://github.com/nearai/ironclaw/pull/2868) | agent, llm | XL | Consolida trabalho de múltiplos PRs (#2869, #2876, #2889) no epic engine-v2 |
| **#2754** | [feat(web): add self-service user secrets and durable binding approvals](https://github.com/nearai/ironclaw/pull/2754) | channel/web, secrets | XL | CRUD de secrets por usuário + UI em Settings + revogação de aprovações vinculadas |
| **#1435** | [feat: replace pdf-extract with pdf_oxide](https://github.com/nearai/ironclaw/pull/1435) | dependencies | L | Substitui biblioteca com zero dependências não-Rust, extração 0.8ms mais rápida e layout-aware |
| **#2941** | [debug: relay callback HMAC mismatch diagnostics](https://github.com/nearai/ironclaw/pull/2941) | channel/web | S | Logs temporários para investigar 401 entre Slack→IronClaw |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Análise |
|---|--------|-------------|-----|---------|
| **#2231** | [Multiple chats cannot run in parallel — responses blocked in queue](https://github.com/nearai/ironclaw/issues/2231) | 5 | 0 | **Mais comentada.** Bug crítico de concorrência em Chat — múltiplas threads bloqueiam respostas em fila. Prioridade bug_bash_P2. Autor: joe-rlo |
| **#2923** | [Bug: stdio MCP activation fails with "Failed to discover authorization endpoints"](https://github.com/nearai/ironclaw/issues/2923) | 0 | 1 | Re-filing de #2474 (fechado incorretamente). stdio é suportado end-to-end em v0.25.0; bug está no pre-flight de ativação. |
| **#2474** | [Bug: stdio MCP servers trigger OAuth discovery flow on activation](https://github.com/nearai/ironclaw/issues/2474) | 3 | 0 | Closed — mesma raiz de #2923 |

### PRs com maior atenção

| # | Título | Escopo | Comentários | Análise |
|---|--------|--------|-------------|---------|
| **#2947** | [fix(tools): fit tool names to 64-char provider limit](https://github.com/nearai/ironclaw/pull/2947) | tool | — | Resolve falha em cascata: MCP servers com nomes longos causam erro em todas as LLM calls com Bedrock/OpenAI Responses |
| **#2904** | [Refactor: replace 11 WASM API-proxy tools](https://github.com/nearai/ironclaw/pull/2904) | tool, extensions | — | Mudança arquitetural significativa: substitui 11 ferramentas WASM por SKILL.md + HTTP tool nativo |

### Demanda recorrente

- **Extensibilidade**: Issue #1741 (kernel/extension architecture) evidencia desejo de consolidar trait objects, WASM sandbox, MCP e skills em uma arquitetura mais coesa e DB-backed.
- **UX Mobile**: Issue #1344 solicita redesign do layout com menu hamburger colapsável e navegação integrada.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (P1 ou múltiplos reportes)

| # | Título | Escopo | Status | Reprodução |
|---|--------|--------|--------|------------|
| **#2231** | [Multiple chats cannot run in parallel](https://github.com/nearai/ironclaw/issues/2231) | agent, bug_bash_P2 | OPEN | Simultaneidade em Chat — requisições bloqueiam em fila |

### 🟠 Altos (bug_bash_P2 — QA)

| # | Título | Escopo | Status | Detalhes |
|---|--------|--------|--------|----------|
| **#2945** | [One-time login link returns "Unauthorized" immediately after creation](https://github.com/nearai/ironclaw/issues/2945) | auth | OPEN | Link de convite criado mas rejeitado na hora |
| **#2944** | [Assistant claims content created successfully despite failed extraction/search](https://github.com/nearai/ironclaw/issues/2944) | agent, reliability | OPEN | False positives em pipeline de extração/busca |
| **#2943** | [Assistant response after tool calls only appears after page refresh](https://github.com/nearai/ironclaw/issues/2943) | chat UI, streaming | OPEN | UX issue — streaming não atualiza até reload |
| **#2942** | [Telegram integration shows MTProto developer config instead of user-friendly flow](https://github.com/nearai/ironclaw/issues/2942) | Telegram, UX | OPEN | Usuários expostos a configuração de developer |

### 🟡 Moderados

| # | Título | Escopo | Status | Detalhes |
|---|--------|--------|--------|----------|
| **#2946** | [Llm_backend overwritten on every start-up](https://github.com/nearai/ironclaw/issues/2946) | config | OPEN | DB reseta `llm_backend` para nearai, ignorando env vars e config.toml |
| **#2949** | [ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu](https://github.com/nearai/ironclaw/issues/2949) | setup | OPEN | Instalador não reconhece plataforma Linux padrão |
| **#2939** | [Telegram bot stops responding after TEE upgrade](https://github.com/nearai/ironclaw/issues/2939) | channels, Telegram | OPEN | Regression pós-upgrade em railway-staging |
| **#2938** | [Routines tab missing after TEE upgrade](https://github.com/nearai/ironclaw/issues/2938) | navigation, Routines | OPEN | Regression pós-upgrade em railway-staging |
| **#2923** | [stdio MCP activation fails](https://github.com/nearai/ironclaw/issues/2923) | tool/mcp | OPEN | OAuth discovery incorreto para stdio |
| **#2930** | [Live canary failed: provider-matrix openai-compatible](https://github.com/nearai/ironclaw/issues/2930) | ci | OPEN | CI falhando em matriz de provedores |
| **#2929** | [Live canary failed: public-smoke](https://github.com/nearai/ironclaw/issues/2929) | ci | OPEN | CI falhando em smoke test público (Anthropic) |

### Nota sobre falhas CI

Duas lanes de canary falharam no mesmo run (commit `1a44a944`):
- `provider-matrix` — openai-compatible
- `public-smoke` — anthropic

Corrigido temporariamente via PR #2941 (HMAC diagnostics para Slack) e investigação em curso.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features identificadas

| # | Título | Escopo | Tipo | Sinais de priorização |
|---|--------|--------|------|----------------------|
| **#2950** | [split provider-safe tool schema cleanup from strict optional-field rewriting](https://github.com/nearai/ironclaw/issues/2950) | llm | refactor | Separação de responsabilidades em `normalize_schema_strict()` |
| **#2900** | [Decouple webhook listener bind address from HTTP channel enablement](https://github.com/nearai/ironclaw/issues/2900) | config | enhancement | Configuração conflituosa identificada por contributor |
| **#1344** | [Redesign mobile layout with collapsible hamburger menu](https://github.com/nearai/ironclaw/issues/1344) | channel/web | enhancement | UX mobile problemática — priority P1 sugerido |
| **#1741** | [kernel/extension architecture — OS-like minimal kernel with DB-backed extension state](https://github.com/nearai/ironclaw/issues/1741) | architecture | design | Visão arquitetural de longo prazo — extensibilidade |

### PRs em desenvolvimento com sinais de roadmap

| # | Título | Escopo | Tipo | Implicação |
|---|--------|--------|------|------------|
| **#1446** | [feat: add Aliyun Coding Plan support](https://github.com/nearai/ironclaw/pull/1446) | llm | provider | Expansão de mercado — China/APAC |
| **#1549** | [feat: Slack Socket Mode for NAT-friendly connectivity](https://github.com/nearai/ironclaw/pull/1549) | channel/wasm | connectivity | Conectividade sem túnel público |
| **#2727** | [feat(skills): add CLAWHUB_ENABLED flag](https://github.com/nearai/ironclaw/pull/2727) | skills | feature gate | Controle de registry público |
| **#2335** | [feat(gateway): Cmd+K command palette for omnisearch](https://github.com/nearai/ironclaw/pull/2335) | channel/web | UX | Busca unificada estilo VS Code |
| **#2728** | [feat(cli): Engine V2 migrate CLI for OpenClaw and Hermes](https://github.com/nearai/ironclaw/pull/2728) | cli | migration | Migração de plataformas legadas |

### Possível próxima versão (sinais)

Baseado na convergência de PRs size XL merged/reviewed, a próxima release pode incluir:
1. **Engine v2 consolidation** (#2868) — `available_actions()` callable-only
2. **Webhook config decoupling** (#2934) — `WEBHOOK_HOST`/`WEBHOOK_PORT`
3. **Channel startup fix** (#2927) — first-run fallback
4. **64-char tool name fix** (#2947) — compatibilidade Bedrock/OpenAI

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Issue | Evidência |
|-----|-------|-----------|
| **Instalação quebrada** | #2949 | `"ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu"` — instalador não suporta plataforma Linux padrão |
| **Login falha** | #2945 | Usuários não conseguem criar/acessar via link de convite

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data:** 2026-04-25 | **Fonte:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do dia

O CoPaw manteve altíssima atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**, além de **2 releases** (v1.1.4 e v1.1.4.post1). A comunidade está extremamente engajada, concentrando-se em resolver problemas críticos do desktop v1.1.4 (múltiplos relatos de **white screen**), melhorias no módulo de memória (CJK-aware tokenization) e introdução do suporte a **Tauri 2.x** para o desktop app. O volume de PRs fechados (35) demonstra ritmo acelerado de integração. A saúde geral é **boa com incidentes ativos** — a regressão do white screen no desktop precisa de atenção prioritária.

---

## 2. Lançamentos

### 🟢 v1.1.4.post1
**Tag:** `v1.1.4.post1` | Merged em 2026-04-24

- **feat(memory):** Adiciona tokenização CJK-aware para busca em memória ([PR #3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))
- **Revert:** Reverteu upgrade do Vite v6→v8 por regressões ([PR #3812](https://github.com/agentscope-ai/QwenPaw/pull/3812))

> ⚠️ **Nota de migração:** O revert do Vite indica que a atualização enfrentou problemas de compatibilidade no build. Usuários que enfrentam white screen devem aguardar v1.1.5b1.

### 🟢 v1.1.4
**Tag:** `v1.1.4` | Merged em 2026-04-24

- **Memory & Context refactor:** Refatoração completa do módulo de memória de longo prazo com backends plugáveis, sumarização automática a cada N rodadas, retrieval automático e nova interface de gerenciamento de contexto ([#3548](https://github.com/agentscope-ai/QwenPaw))
- **Breaking changes:** A refatoração de memória pode afetar configurações customizadas de workspace

---

## 3. Progresso do Projeto

### PRs mais impactantes merged/fechados hoje:

| PR | Tipo | Impacto |
|----|------|---------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | `feat(tauri)` | **Adiciona suporte a Tauri 2.x** para desktop app, substituindo Electron-based app |
| [#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797) | `feat(deepseek)` | Adiciona suporte a modelos **DeepSeek v4** |
| [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | `fix(deepseek)` | Corrige empty thinking content em mensagens de assistente |
| [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) | `fix(formatter)` | Evita passar fileblock para Anthropic API |
| [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | `fix(DingTalk)` | **Remove exposição de caminhos locais** em mensagens DingTalk (privacidade) |
| [#3778](https://github.com/agentscope-ai/QwenPaw/pull/3778) | `feat(DingTalk)` | Adiciona `cron_message_type` para formato independente de mensagens agendadas |
| [#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781) | `feat(security)` | Desabilita shell invasion por padrão + suporte a paths Windows |
| [#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766) | `feat(token_usage)` | Adiciona gravação assíncrona bufferizada de uso de tokens |
| [#3758](https://github.com/agentscope-ai/QwenPaw/pull/3758) | `fix(tools)` | Normaliza ícones faltantes de tools built-in na API |
| [#3803](https://github.com/agentscope-ai/QwenPaw/pull/3803) | `chore(version)` | Bump para **v1.1.5b1** (próxima versão em desenvolvimento) |

**PRs abertos值得关注 (Under Review):**

- [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) — `feat(routing)`: Alinha semântica de modelo scope-aware no backend runtime
- [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) — `fix(console)`: Evita crash SSE em texto surrogado malformado
- [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) — `feat(chat)`: Exibe identity e timestamps na história da conversa
- [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) — `feat(semantic skill routing)`: Routing semântico de skills baseado em embedding

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue #2291 — Help Wanted: Open Tasks
**60 comentários** | Prioridade: P0-P2 | Autor: cuiyuebing

Issue colaborativo mantido ativa desde 2026-03-25 com lista de tarefas abertas para contribuições da comunidade. Este é o principal ponto de entrada para novos contribuidores, indicando saúde saudável do projeto open source com processos claros de onboarding.

📌 [agentscope-ai/QwenPaw#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)

### 🔥 Issue #3753 — Volcano Coding Plan Support
**7 comentários** | Autor: doMySelfZy

Demanda por suporte ao plano de coding da Volcano (ByteDance), indicando integração com provedores asiáticos de IA como prioridade para usuários.

📌 [agentscope-ai/QwenPaw#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753)

### 🔥 Issue #3814 — Workspace Sandbox Request
**1 comentário** | Autor: yangsr

Proposta para adicionar mecanismo de sandbox de workspace similar ao Claude Code, sugerindo controle de acesso a arquivos fora do diretório de trabalho. Indicador de interesse em features de segurança e isolamento.

📌 [agentscope-ai/QwenPaw#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814)

### 🔥 Issue #2975 — Markdown User Messages
**2 comentários** | Autor: ooopzlong

Solicitação para renderizar mensagens do usuário em Markdown no chat, alinhando com a renderização de respostas do AI. Melhora de UX solicitada por usuários.

📌 [agentscope-ai/QwenPaw#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975)

---

## 5. Bugs e Estabilidade

### 🔴 Crítico: White Screen no Desktop v1.1.4

**Múltiplos reports independentes** confirmam regressão no desktop v1.1.4:

| Issue | Autor | Sistema |
|-------|-------|---------|
| [#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815) | mipo11111q | Windows |
| [#3807](https://github.com/agentscope-ai/QwenPaw/issues/3807) | mipo11111q | Windows 10/11 |
| [#3805](https://github.com/agentscope-ai/QwenPaw/issues/3805) | Cederys | Desktop (v1.1.4) |

**Sintomas:**
- WebView2 carrega mas página fica branca
- Uvicorn inicia normalmente sem erros
- Regressão confirmada: v1.1.3post1 funciona, v1.1.4 não

**Workaround:** Downgrade para v1.1.3post1

📌 [agentscope-ai/QwenPaw#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815)

### 🟠 Alto: MCP Client Agent Freeze

**Issue #3640** — MCP client internal TaskGroup exception causing agent freeze

- Não responde a mensagens, mas não crasha
- Afeta canais DingTalk e WeChat
- Версия: 1.1.2

📌 [agentscope-ai/QwenPaw#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)

### 🟠 Alto: DeepSeek-v4-pro Reasoning Content

**Issue #3782** — `reasoning_content` não é passado em requests subsequentes

- Multi-turn conversations falham com 400 BadRequestError
- Modelo: deepseek-v4-pro
- Já corrigido em [PR #3794](https://github.com/agentscope-ai/QwenPaw/pull/3794)

📌 [agentscope-ai/QwenPaw#3782](https://github.com/agentscope-ai/QwenPaw/issues/3782)

### 🟡 Médio: File Path Exposure no DingTalk

**Issue #3760** — Caminhos locais expostos em mensagens

- Arquivos .txt perdem nome ao baixar no celular
- Caminhos completos aparecem no chat (risco de privacidade)
- Corrigido em [PR #3790](https://github.com/agentscope-ai/QwenPaw/pull/3790)

📌 [agentscope-ai/QwenPaw#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760)

### 🟡 Médio: Windows Proxy Resolution

**Issue #3664** — CLI não respeita `ProxyOverride` no Windows

- `qwenpaw cron` falha com HTTP 502 com proxy ativo
- Root cause: httpx não parseia bypass rules
- Sistema: Windows com Clash/V2Ray

📌 [agentscope-ai/QwenPaw#3664](https://github.com/agentscope-ai/QwenPaw/issues/3664)

### 🟡 Médio: macOS Dock Icon

**Issue #3808** — Ícone do Dock vira Python ao ativar MCP client

- Sistema: macOS 25.4.0 arm64
- QwenPaw Desktop.app
- MCP client: Tavily Search (stdio transport)

📌 [agentscope-ai/QwenPaw#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808)

### 🟡 Médio: Memory Configuration Reset

**Issue #3817** — Vector model settings reset after Docker restart

- Configurações de `base_url` e `model_name` sobrescritas após container restart
- Deploy: Docker host mode
- Root cause identificado no issue

📌 [agentscope-ai/QwenPaw#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)

### 🟢 Baixo: Windows File Guardian

**Issue #3457** — File guardian não funciona no Windows

- Diretórios protegidos no Windows sempre desativados
- Linux funciona normalmente

📌 [agentscope-ai/QwenPaw#3457](https://github.com/agentscope-ai/QwenPaw/issues/3457)

### 🟢 Baixo: Taskbar Icon no Windows 11

**Issue #3405** — Taskbar mostra ícone Python no Windows 11

📌 [agentscope-ai/QwenPaw#3405](https://github.com/agentscope-ai/QwenPaw/issues/3405)

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🚀 Features em desenvolvimento (PRs abertos):

1. **Tauri 2.x Desktop App** ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))
   - Primeiro contributor: youngchan1988
   - Substitui Electron-based app
   - Expectativa: melhor performance e menor consumo de memória

2. **Semantic Skill Routing** ([#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117))
   - Routing baseado em embedding para filtrar skills relevantes
   - Reduz token consumption com muitos skills instalados
   - Status: need discussions

3. **Timestamp na Console** ([#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603), [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774))
   - Exibir sender identity e timestamp por mensagem
   - Demandado por múltiplos usuários

4. **Markdown em mensagens do usuário** ([#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975))
   - Alinhar renderização com AI responses
   - Melhora UX em código/structured input

5. **Workspace Sandbox** ([#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814))
   - Similar ao Claude Code
   - Controlar acesso a arquivos fora do workspace
   - Sugestão: security module com toggle

6. **DingTalk Card Message + Chunked Send** ([#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742))
   - Suporte a mensagens de card
   - Chunked delivery para conteúdo > 3500 caracteres
   - Melhoria de canais

7. **Async Agent Communication** ([#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225))
   - Comunicação assíncrona entre agents com callbacks
   - Suporte a cenários multi-agent (ex: stock monitoring)

8. **Context Menu no Desktop/Web** ([#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752))
   - Right-click para copy/delete/rename
   - Melhora UX de gerenciamento de sessões

9. **DeepSeek v4 Models** — ✅ Já merged em [PR #3797](https://github.com/agentscope-ai/QwenPaw/pull/3797)

### 🔮 Sinais de roadmap implícitos:
- **Desktop modernization:** Tauri 2.x como próximo passo
- **Memory focus:** Refatoração de memory/context em v1.1.4 sugere investimento contínuo
- **CJK optimization:** Suporte a caracteres asiáticos está sendo priorizado
- **Security hardening:** Shell invasion disable, file path protection, sandbox

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

| Categoria | Descrição | Severidade |
|-----------|-----------|------------|
| **Desktop instability** | v1.1.4 white screen afeta produtividade | 🔴 Crítica |
| **Platform consistency** | Bugs específicos de Windows/macOS fragmentam UX | 🟠 Alta |
| **Channel reliability** | DingTalk tem múltiplos problemas (files, privacy, cron) | 🟡 Média |
| **Memory persistence** | Configurações de workspace não persistem em Docker | 🟠 Alta |
| **MCP stability** | Agents freeze com MCP client ativo | 🟠 Alta |

### Cenários de uso evidentes:
- **Multi-agent orchestration:** Coordenação de agents para tarefas complexas (finanças, análise)
- **Private deployment:** Docker self-hosted com Ollama
- **Enterprise channels:** DingTalk, Feishu como canais primários na China
- **Development tooling:** CLI para cron jobs e automação

### Satisfação:
- Comunidade ativa com 60+ comentários em issues de ajuda
- Equipe responsiva (múltiplos PRs merged em 24h)
- Progresso visível em features de memória e routing

### Insatisfação:
- Regressão de white screen em release recente
- Inconsistência entre versões desktop
- Configurações de vector model não persistem

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >48h (necessitam triagem):

| Issue | Título | Criado | Comentários |
|-------|--------|--------|-------------|
| [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818) | Instalação via script falha com erros Python | 2026-04-24 | 2 |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Memory vector model config reset | 2026-04-24 | 1 |
| [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | file:// links não abrem no macOS | 2026-04-24 | 1 |
| [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | Workspace sandbox request | 2026-04-24 | 1 |
| [#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808) | macOS Dock icon vira Python | 2026-04-24 | 2 |
| [#3775](https

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-25

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um nível de atividade intenso, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. Não houve novos lançamentos hoje, indicando um período de estabilização entre versões. A comunidade demonstra engajamento significativo com issues de feature requests e bugs de runtime, especialmente relacionados a provedores (Ollama, Bedrock, Mistral) e configurações de sandbox. O time de contribuidores principais (liderado por `theonlyhennygod`) continua executando uma agenda agressiva de otimizações de dependências e correções de segurança. O período de RFC para multi-agent UX está em curso (iniciado em 2026-04-19), sinalizando uma evolução arquitetural importante.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com foco em correções e preparação de funcionalidades para a próxima versão. O release mais recente mencionado nos dados é a versão **v0.6.9**, referenciada em issue #5498 sobre problemas no pipeline de release.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** nas últimas 24 horas, representando avanços significativos:

| PR | Escopo | Impacto |
|---|---|---|
| [#5315](https://github.com/zeroclaw-labs/zeroclaw/pull/5315) | TUI + Dashboard sync | **Alto** — Setup completo TUI e sincronização de configuração entre CLI/web/desktop |
| [#5714](https://github.com/zeroclaw-labs/zeroclaw/pull/5714) | Perf de dependências | Prometheus e TUI onboarding agora opt-in, reduzindo peso de build |
| [#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946) | Backend Postgres | **Relevante** — Suporte opcional a Postgres para memória via feature flag |
| [#5524](https://github.com/zeroclaw-labs/zeroclaw/pull/5524) | Segurança | Permite redirects seguros (`/dev/null`, `/dev/stdout`, `/dev/stderr`) |
| [#5298](https://github.com/zeroclaw-labs/zeroclaw/pull/5298) | Provider | Corrige vazamento de `reasoning_content` em streaming (GLM-5) |
| [#5293](https://github.com/zeroclaw-labs/zeroclaw/pull/5293) | i18n | Refatoração de internacionalização com type safety |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | Desktop | Menu bar chat agent com suporte a voz e upload de imagem |
| [#5548](https://github.com/zeroclaw-labs/zeroclaw/pull/5548) | Config | `session_ttl_hours` default para 168h, prevenindo OOM em sessões persistidas |

**PR em aberto de destaque:**
- [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) — Enriquecimento de spans OTel com atributos `gen_ai.tool.*` para observabilidade de tool calls

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

1. **[#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)** — *"can not use ali yun bailian coding plan"* | 9 comentários, 1 reaction
   - **Demanda:** Suporte aos serviços de IA da Alibaba Cloud (AliYun, Bailian). Usuários enfrentam dificuldades para integrar provedores chineses.
   - **Sinal:** Comunidade internacional busca diversificação de provedores além de OpenAI/Anthropic.

2. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** — *"where is napcat channel"* | 8 comentários
   - **Demanda:** Adição de canal OneBot11/NapCat paraQQ e outras plataformas de mensageria.
   - **Sinal:** Forte interesse em canais de mensageria alternativos, especialmente asiáticos.

3. **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** — *"Multi-Agent Routing"* | 4 comentários, **8 reactions** 👍
   - **Demanda:** Routing multi-agente, isolando workspaces e agentes com bindings por canal.
   - **Sinal:** Feature mais desejada pela comunidade, alinhada com RFC #5890.

4. **[#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)** — *"HMAC tool execution receipts"* | 6 comentários, closed
   - **Demanda:** Recibos criptográficos HMAC-SHA256 para verificação de outputs de tools.
   - **Sinal:** Crescente interesse em segurança e integridade em ambientes de AI agent.

5. **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** — *"RFC: Multi-agent UX flow"* | 4 comentários, em RFC
   - **Demanda:** Design document para UX multi-agente, com período de discussão de 7 dias.
   - **Sinal:** Prioridade estratégica do core team para próxima versão.

---

## 5. Bugs e Estabilidade

### Por Severidade

**S1 — Workflow bloqueado (Crítico):**

| Issue | Descrição | Link |
|---|---|---|
| #6051 | `zeroclaw self-test` reporta usando `127.0.0.1` mesmo com config `0.0.0.0` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) |
| #5941 | Erro "No tool call found" com provider custom | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) |
| #5962 | Ollama Provider call falha quando tools são necessárias | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| #5984 | zeroclaw-desktop crash com "No provider set" | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) |
| #5117 | Mistral tool calls falham por formato inválido de `tool_call.id` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) |
| #2324 | Tools em `always_ask` são silenciosamente negadas em canais não-CLI | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) |

**S2 — Comportamento degradado:**

| Issue | Descrição | Link |
|---|---|---|
| #5722 | Sandbox bloqueia padrões Python realistas (v0.6.9) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| #5809 | Shell policy bloqueia `git -C <path>` (security) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) |
| #5584 | Mensagens duplicadas consecutivas com tool calls + narração | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) |
| #5285 | "Thoughts" mesclam no resultado final com GLM-5 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) |
| #5289 | Bedrock provider envia `x-api-key` causando 403 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) |

**S3 — Minor:**

| Issue | Descrição | Link |
|---|---|---|
| #5556 | Summarization timeout (60s) com Ollama | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) |
| #5862 | zeroclaw não sabe que pode usar `zeroclaw cron` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| #6020 | `cargo test --locked` falha em Windows | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6020) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas e sinais emergentes

| Feature | Issue | Engajamento | Link |
|---|---|---|---|
| Multi-Agent Routing | #2767 | 8 👍, em discussão | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) |
| Multi-agent v1 tracker | #5891 | Iniciativa trackeada | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) |
| Provider-scoped model fallback chains | #4647 | 2 👍 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) |
| Multiple Model Providers | #2998 | 1 👍 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) |
| Wecom (WxWork) channel support | #3090 | 2 comentários | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) |
| Recover WeChat iLink channel | #5259 | 1 comentário | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5259) |
| Configurable `classify_channel_reply_intent` | #5674 | 3 👍 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) |
| Configurable provider timeouts | #5752 | 1 comentário, in-progress | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5752) |

**Análise de roadmap:** O core team sinaliza via RFC #5890 e tracker #5891 que **multi-agent é prioridade P1** para próximas versões. Features de canais asiáticos (Wecom, WeChat, QQ) representam demanda significativa da comunidade. A separação de provedores e fallbacks por escopo indica evolução para arquitetura mais flexível.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Runtime/Providers** | Falhas em integrações com Ollama, Bedrock, Mistral — provedores auto-hospedados ou regionais apresentam erros de headers, timeouts e formato de tool calls | Alta |
| **Sandbox/Security** | Policy de shell muito restritiva bloqueia comandos legítimos (`git -C`, padrões Python), impactando produtividade | Alta |
| **Channel UX** | Comportamento inconsistente em canais não-CLI (Telegram, etc.) — tools negadas sem prompt, mensagens duplicadas | Média |
| **Config/Observabilidade** | Dificuldade de debug com localhost hardcoded e self-test não refletindo config real | Média |
| **Memory** | Query wildcard `*` retorna vazio, duplicação de entries, necessidade de backend Postgres | Média |

### Cenários de uso observados

- **Desenvolvedores de skills** criando ferramentas para análise financeira (InvestorClaw) e portfolios
- **Usuários de provedores regionais** tentando integrar serviços chineses de IA (AliYun, Bailian, GLM)
- **Deployers desktop/server** enfrentando OOM por sessões não expiradas e configs de rede
- **Usuários de mensageria asiática** buscando canais QQ, WeChat, Wecom

### Indicadores de satisfação

- 8 👍 na feature de Multi-Agent Routing indica demanda clara
- Atividade intensa de PRs (24 merged em 24h) demonstra maturidade do processo de contribution
- Issues de segurança sendo tratadas rapidamente (#5809, #5524)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo considerável

| Issue | Criação | Status | Link |
|---|---|---|---|
| #3059 | 2026-03-09 | Open (9 comments) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) |
| #2503 | 2026-03-02 | Open (8 comments) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| #2767 | 2026-03-04 | **Stale** + 8 👍 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) |
| #3090 | 2026-03-10 | Open (no-stale) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) |
| #2998 | 2026-03-08 | Open (no-stale) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) |

### Recomendações

1. **Priorizar triagem de issues "no-stale"** com alta demanda de comentários para demonstrar responsividade
2. **Revisar issue #2767** — Multi-Agent Routing com 8 👍 está marked stale mas tem forte apoio da comunidade; deve haver decisão de accept/reject
3. **Consolidar roadmap multi-agent** — tracker #5891 e RFC #5890 precisam de atualização de status para manter comunidade engajada

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---|---|
| Issues ativas/abertas | 47 |
| Issues fechadas | 3 |
| PRs abertos | 26 |
| PRs merged/fechados | 24 |
| Releases | 0 |
| Bugs S1 (crítico) | 6 |
| Bugs S2 (degradado) | 5 |
| Features com alta demanda | 3 (#2767, #5890, #5891) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-04-25.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*