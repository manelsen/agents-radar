# Resumo diário do ecossistema de agentes de IA 2026-09-23

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-22 22:38 UTC

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

**Data de Referência:** 2026-09-23

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **polarização significativa de atividade** em 23/09/2026. Quatro projetos (NanoBot, Hermes Agent, CoPaw e ZeroClaw) demonstram alta intensidade de desenvolvimento com volumes superiores a 30 eventos/24h, enquanto IronClaw e PicoClaw mantêm cadências moderadas. O dado mais preocupante é a **proliferação de vulnerabilidades críticas**: ZeroClaw registra 3 bugs S0 simultâneos, Hermes Agent enfrenta 2 P0/P1, e NanoBot possui 1 P1 de deadlock. A tendência arquitetural mais clara é a **multi-canalidade** (Telegram, WhatsApp, QQ, LINE, WeChat) como estratégia de distribuição, com 3 dos 6 projetos ativos priorizando expansão de canais. Nenhum projeto publicou releases formais no período, indicando que todos estão em ciclos de desenvolvimento pré-release.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde |
|---------|-------------|-----------|------------|----------|-------|
| **NanoBot** | 3 | 29 | 14 | 0 | 🟢 Boa |
| **Hermes Agent** | 50 | 50 | 10 | 0 | 🟡 Instável |
| **PicoClaw** | 0 | 4 | 3 | 0 | 🟢 Boa |
| **IronClaw** | 0 | 3 | 0 | 0 | ⚪ Baixa |
| **CoPaw** | 37 | 50 | 24 | 0 (v2.2.2 iminente) | 🟡 Instável |
| **ZeroClaw** | 33 | 50 | 20 | 0 | 🔴 Crítica |

**Nota:** NullClaw zerado serve como baseline — indica que projetos com zero atividade representam repositórios abandonáveis ou em modo de manutenção.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS)

**Vantagens técnicas frente aos pares:**
- **Maior taxa de PR merge/aberto** (14/15) indica disciplina de revisão e pipeline saudável
- **Foco em estabilidade de canais** (Telegram, Discord, Linear) com estratégia clara de UX
- **Compaction inteligente** implementada com mecanismo de heartbeat — diferencial para sessões longas
- **Segurança de plugins** em desenvolvimento ativo (PR #5866 corrige registry drift)

**Diferenças técnicas:**
- Arquitetura orientada a eventos com compaction automática, diferenciando-se de Hermes Agent (Desktop-first) e ZeroClaw (multi-canal)
- Stack de providers unificado com validação de schemas, evitando erros que afetam CoPaw

**Tamanho da comunidade:**
- Volume de PRs (29) comparable a projetos maiores, mas com ciclo de review mais curto
- 15 PRs abertos indicam backlog gerenciável

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade de Tarefas em Background / Agentes Paralelos

| Projeto | Evidência |
|---------|-----------|
| **CoPaw** | Bug crítico #7567: "Stop button shows stopped but task continues" — UI mente ao usuário |
| **ZeroClaw** | RFC #10970: Controle de admissão por host para limitar concorrentes por agente |
| **NanoBot** | Deadlock #5849: compaction automática pode travar sessões permanentemente |
| **Hermes Agent** | Desktop: 7 bugs P2 afetando renderização de mensagens (sessões longas) |

**Análise:** A comunidade reconhece que **agentes persistentes com memória crescente** são problemáticos. Soluções emergindo: heartbeat com budget de tokens (NanoBot), durable primitives (ZeroClaw RFC #10930), e transcript durability via SQLite (CoPaw PR #7931).

### 4.2 Segurança de Canais e Credenciais

| Projeto | Vulnerabilidade | Severidade |
|---------|----------------|------------|
| **ZeroClaw** | LINE: mensagens de grupo ignoram allowlist e handshake | S0 |
| **ZeroClaw** | `allowed_commands` isenta comandos de alto risco | S0 |
| **NanoBot** | CLI Apps instala de registries não assinados | P2 (Segurança) |
| **PicoClaw** | Race condition em `SensitiveDataCache` | Crítica |
| **CoPaw** | Path traversal em upload de ZIP | Corrigida (#7937) |

**Análise:** A convergência de vulnerabilidades em **credenciais e canais** indica que a expansão multi-canal está superando a maturidade de segurança. ZeroClaw é o caso mais crítico com 3 S0 simultâneas.

### 4.3 Renderização e UX Multi-Canal

| Projeto | Problema | Impacto |
|---------|----------|---------|
| **Hermes Agent** | Mensagens somem/duplicam/scrollam no Desktop | 7 bugs P2 |
| **CoPaw** | Tabelas Markdown não renderizam no Telegram | Canal |
| **NanoBot** | Rich messages streaming no Telegram | PR merged |
| **ZeroClaw** | Thematic breaks e setext headings no WhatsApp | Feature request |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público-Alvo |
|---------|-------------|--------------|
| **Hermes Agent** | Desktop-first com Desktop Agent robusto | Power users com Desktop como hub |
| **NanoBot** | Headless com WebUI + canais (Telegram, Discord) | Desenvolvedores e automação de workflows |
| **ZeroClaw** | Multi-canal com primitivas duráveis | Operadores enterprise com infra distribuída |
| **CoPaw** | Console-centric com pluginspets | Equipes usando plugins e múltiplos provedores |
| **PicoClaw** | Modular com foco em canais asiáticos (QQ) | Mercado chinês/asiático |
| **IronClaw** | Host-runtime + WebUI incremental | Nicho específico (locale i18n) |

### 5.2 Estratégia de Recursos

**Hermes Agent** prioriza **Desktop como produto**: 7 bugs P2 em 24h + múltiplos PRs de UI indicam que a experiência Desktop é o diferenciador principal. Issue #97681 ("Bots colaborativos cross-gateway") sugere ambição de criar ecossistema inter-agente.

**ZeroClaw** investe em **primitivas duráveis e controle de recursos**: RFCs simultâneas sobre admission control, recibos de entrega e comunicação agent-to-agent indicam foco em reliability para infra distribuída. A vulnerabilidade S0 em LINE (#9392) é paradoxal — segurança criticada enquanto RFCs discutem segurança.

**NanoBot** posiciona-se como **agente de automação de canais**: heartbeat, compaction, streaming de rich messages no Telegram. Diferencia-se por UX de chat funcional vs. Desktop.

**CoPaw** é o mais próximo de **plataforma de生产力**: model binding por conversa (#6318), fallback chains (#4882), e workspace integrado. O bug de timeout recovery (#7935) mostra maturidade insuficiente para produção.

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | Indicador de Velocidade |
|---------|---------|-------------------------|
| 1 | **CoPaw** | 24 PRs merged + 73.79% test coverage em 24h |
| 2 | **NanoBot** | 14 PRs merged com 15 abertos — ciclo saudável |
| 3 | **ZeroClaw** | 20 PRs merged, mas 3 S0 abertas = dívida de segurança |
| 4 | **Hermes Agent** | 10 merges com 40 PRs abertos = gargalo de review |
| 5 | **PicoClaw** | 3 merges + 1 aberto = cadência estável |
| 6 | **IronClaw** | 0 merges em 3 PRs = inércia |

### 6.2 Qualidade e Consolidação

**Projetos em modo de consolidação:**
- **NanoBot**: Foco em estabilidade — 10 PRs de bug fixes vs. 2 features
- **PicoClaw**: Correções de race condition e segurança — maturidade de config

**Projetos em modo de feature acceleration:**
- **ZeroClaw**: 6 PRs de WhatsApp + 4 RFCs simultâneas
- **CoPaw**: Sidebar interativa, SQLite transcript, batch-3 de testes

**Projetos com dívida técnica crítica:**
- **Hermes Agent**: 5+ issues >40 dias sem decisão, 132 comentários na integração Nous
- **ZeroClaw**: 3 S0 + 2 P1 abertas simultâneas

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-canal como default** | WhatsApp (ZeroClaw), QQ (PicoClaw), Telegram (NanoBot), LINE (ZeroClaw) | Mercados asiáticos e ocidentais divergem em canais preferidos |
| **Memória persistente é problema aberto** | Compaction deadlock, SQLite transcripts, durable primitives | Soluções de memória são próximo campo de inovação |
| **Desktop como produto vs. headless** | Hermes Agent (Desktop-first) vs. NanoBot (headless) | Duas estratégias viáveis para públicos diferentes |
| **Segurança multi-canal imatura** | 3 S0 em ZeroClaw, registry drift em NanoBot | Expansão de canais precede segurança |
| **Model fallback como demanda madura** | 4+ issues pedindo fallback em CoPaw | Usuários começam a operar multi-provider |
| **i18n como diferenciação** | IronClaw adicionando italiano, CoPaw traduzindo labels | Mercado globalizando |

### 7.2 Oportunidades de Mercado

1. **Marketplace de skills padronizado**: ZeroClaw (#4853) e Hermes Agent (plugin catalog) convergem para `.well-known` — oportunidade de interoperabilidade cross-projeto

2. **Solução de memória compartilhada agent-to-agent**: ZeroClaw RFC #11027 + Hermes Agent #97681 indicam demanda por comunicação inter-agente stateless

3. **Ferramentas de debugging para agentes persistentes**: Bugs de compaction, timeout recovery e transcript durability indicam necessidade de observabilidade

### 7.3 Recomendações para Desenvolvedores

| Decisor | Recomendação |
|---------|--------------|
| **Adoção de produção** | Priorizar NanoBot (saúde) ou PicoClaw (maturidade) — evitar Hermes Agent e ZeroClaw até resolution de P0/S0 |
| **Contribuição** | Hermes Agent tem 40 PRs abertos e 132-comments backlog — alto impacto de contribuição |
| **Experimentação** | ZeroClaw para testes de primitivas duráveis e multi-canal — risco aceitável para research |
| **Integração empresarial** | Aguardar v2.2.2 do CoPaw (release iminente) para features de model fallback |

---

*Relatório gerado em 2026-09-23. Dados compilados dos relatórios de atividade do GitHub dos projetos referenciados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-23

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 32 eventos totais (3 issues + 29 PRs). O projeto demonstra vigorosa manutenção corretiva e evolutiva: 14 PRs foram merged/fechados nas últimas 24h, abrangendo correções em Telegram, WebUI, ferramentas e providers. Não houve novos lançamentos, e 15 PRs permanecem abertos aguardando revisão. Um **deadlock crítico na compaction automática** (#5849) foi identificado e já possui PR de correção em curso (#5857). A comunidade demonstra foco em estabilidade de canais, UX WebUI e segurança do sistema de plugins.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou novas versões desde o período analisado. O último ciclo de releases documentado inclui a versão v0.2.1 (referenciada em PRs de heartbeat), mas detalhes sobre a versão exata mais recente não estão disponíveis nos dados fornecidos.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (14 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#5867](https://github.com/HKUDS/nanobot/pull/5867) | `fix(files): decode BOM-marked text correctly` | Corrige leitura de arquivos UTF-16/UTF-32 com BOM — sebelumnya eram tratados como latin-1, causando conteúdo NUL-filled |
| [#5859](https://github.com/HKUDS/nanobot/pull/5859) | `fix(tools): handle boolean JSON subschemas` | Elimina crash na validação de argumentos quando schemas contêm `true`/`false` booleanos |
| [#5868](https://github.com/HKUDS/nanobot/pull/5868) | `fix(exec): invoke quoted Windows executable` | Corrige execução de .exe com caminho entre aspas sem argumentos no Windows |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | `feat(tg): streaming rich messages` | Implementa streaming de mensagens ricas no Telegram com `sendRichMessageDraft` |
| [#5783](https://github.com/HKUDS/nanobot/pull/5783) | `fix(providers): preserve assistant content with tool calls` | Restaura conteúdo assistant em mensagens com tool_calls, removendo workaround legado |
| [#5831](https://github.com/HKUDS/nanobot/pull/5831) | `feat(webui): contextual message controls` | Melhora controles visuais por bloco de mensagem no WebUI |
| [#5862](https://github.com/HKUDS/nanobot/pull/5862) | `fix(webui): wrap Markdown table content` | Resolve overflow de tabelas Markdown no WebUI |
| [#4959](https://github.com/HKUDS/nanobot/pull/4959) | `fix: add one second to retry after delays` | Adiciona delay de retry após rate limits de providers |
| [#4915](https://github.com/HKUDS/nanobot/pull/4915) | `fix(heartbeat): configurable response evaluation` | Torna avaliação de resposta do heartbeat configurável |
| [#4896](https://github.com/HKUDS/nanobot/pull/4896) | `fix(heartbeat): rewrite prompt for task execution` | Corrige prompt de heartbeat para executar tarefas em vez de reportar |

**Avanços notáveis:** A trilogia de PRs de heartbeat (#4896, #4915, #4959) resolve regressões críticas da migração para cron. O streaming de rich messages no Telegram (#5614) representa feature significativa para UX.

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários e atenção

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Telegram: context compaction notice repeated | **3** | Bug |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock: summarize_transcript sem token guard | **1** | Bug Crítico |

**Análise:**
- **Telegram compaction notices (#5870):** Usuário reporta 6+ notificações "Context compacted." repetidas em uma única conversa, causando spam. Correlacionado com logs de compaction automática. Autor `@3L1AS` demonstra frustração clara.
- **Deadlock na compaction (#5849):** Issue de severidade técnica alta — o path automático de summarização não respeita budget de tokens, potencialmente entrando em loop irrecuperável quando o histórico excede o limite. Já possui PR #5857 em curso como correção.

---

## 5. Bugs e Estabilidade

### Issues Abertas (3)

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 🔴 **P1** | Auto-compaction deadlock: sem token-budget guard | Aberto |
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | 🟡 P2 | Telegram: notificação de compaction repetida | Aberto |
| [#5869](https://github.com/HKUDS/nanobot/issues/5869) | 🟡 P2 | Request: suporte a vídeo para omni models | Aberto |

### PRs Abertos Relacionados a Bugs

| PR | Severidade | Título | Nota |
|----|------------|--------|------|
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) | P2 | `decode nested JSON tool arguments by schema` | Corrige falha de validação em providers OpenAI-compatíveis |
| [#5857](https://github.com/HKUDS/nanobot/pull/5857) | P2 | `fix(memory): bound automatic transcript summarization` | **Fix direto para #5849** |
| [#5824](https://github.com/HKUDS/nanobot/pull/5824) | P2 | `fix(tools): keep read_file progressing on oversized lines` | Melhora robustez de leitura de arquivos |
| [#5866](https://github.com/HKUDS/nanobot/pull/5866) | P2 | `fix(cli-apps): record install provenance, fail closed on registry drift` | 🔒 **Segurança: unsigned registries** |

**Análise de Severidade:**

- **🔴 P1 (#5849):** Bug crítico que pode travar sessões de chat permanentemente após compaction. Afeta produção. PR #5857 está em revisão.
- **🔒 Segurança (#5866):** Issue de segurança relevante — CLI Apps instala de registries não assinados, permitindo potential code execution via registry drift. Requer atenção urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas

| # | Título | Proposta | Viabilidade |
|---|--------|----------|-------------|
| [#5869](https://github.com/HKUDS/nanobot/issues/5869) | Suporte a vídeo para omni models | Enviar vídeo diretamente de channels para modelos como Qwen3.8, Mini-V2.6 | Alta — arquitetura atual já suporta canais; necessidade é integração de encoding |

### PRs com Features em Desenvolvimento

| PR | Título | Escopo |
|----|--------|--------|
| [#5871](https://github.com/HKUDS/nanobot/pull/5871) | `feat(linear): improve native agent UX` | OAuth, mentions, delegated issues, workspace health |
| [#5803](https://github.com/HKUDS/nanobot/pull/5803) | Melhorias Telegram (newline rendering, topic_id, typing status) | 3 fixes menores para UX Telegram |
| [#5865](https://github.com/HKUDS/nanobot/pull/5865) | `fix(webui): preserve selected preset on first turn` | Melhora persistência de modelo no WebUI |

**Sinais de roadmap:**
- Expansão multimídia (vídeo) é demanda crescente com modelos omni emergentes
- Integração Linear demonstra foco em workflows de produtividade
- Melhorias de UX em canais (Telegram, Discord, Linear) indicam estratégia de expansão de plataformas

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Fonte | Impacto |
|-----|-------|---------|
| **Spam de notificações no Telegram** | Issue #5870 | Usuários relatam 6+ mensagens duplicadas de "Context compacted." — experiência degradada em uso pessoal |
| **Deadlock em sessões longas** | Issue #5849 | Sessões que crescem além do budget podem ficar permanentemente comprometidas |
| **Segurança de plugins** | PR #5866 | Usuários de `nanobot apps` estão vulneráveis a execution via registry compromise |
| **Rich messages no Telegram** | PR #5614 (merged) | Usuários solicitavam melhoria — streaming agora implementado |

### Cenários de Uso Refletidos
- **Chat pessoal persistente:** Uso intenso com contexto longo, disparando compaction
- **Automação de produtividade:** Integração Linear OAuth sinaliza uso em workflows corporativos
- **CLI como package manager:** `nanobot apps` demonstra adoção como ferramenta de desenvolvedor

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>48h)

| # | Título | Idade | Prioridade | Status Atual |
|---|--------|-------|------------|--------------|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock | ~2 dias | 🔴 P1 | PR #5857 em curso |
| [#5869](https://github.com/HKUDS/nanobot/issues/5869) | Video support request | ~1 dia | P2 | Aguardando triagem |

### PRs Antigos Pendentes

| PR | Título | Idade | Bloqueio |
|----|--------|-------|----------|
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) | decode nested JSON tool arguments | ~43 dias | `conflict` label — requer resolução de merge |

**Recomendações de Priorização:**

1. **Urgente:** Revisar e merge #5857 (fix do deadlock P1) — segurança e estabilidade
2. **Alta:** Resolver conflitos em #5314 — ferramenta quebrando em providers OpenAI-compatíveis
3. **Média:** Avaliar #5869 (video support) para roadmap — sinal de mercado claro
4. **Segurança:** Priorizar #5866 — registry drift é vetor de ataque real

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-23. Todas as datas e links referenciam o repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## Data: 2026-09-23

---

## 1. Panorama do dia

O Hermes Agent mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h, sinalizando uma sprint de desenvolvimento ativa. A plataforma enfrenta múltiplos **incidentes críticos** (2 P0/P1) relacionados à estabilidade do Desktop e do fluxo de atualização, enquanto a comunidade debate fortemente a integração do Nous (132 comentários). Não houve lançamentos formais no período, mantendo o projeto em estado de desenvolvimento contínuo. O volume de PRs abertos (40) e merges/fechados (10) indica uma taxa de integração saudável, mas com backlog considerável.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O último tag estável permanece em **v0.21.4** (referenciado em múltiplos issues do dia). Recomenda-se monitorar os PRs de hotfix P0 (#119525, #119466) que, uma vez mergeados, podem justificar um patch release imediato para prevenir crash-loops em produção.

---

## 3. Progresso do Projeto

### PRs Closed/Merged (10 total, destacados):

| PR | Título | Impacto |
|----|--------|---------|
| [#119605](https://github.com/NousResearch/hermes-agent/pull/119605) | fix(desktop): keep typing and refreshed transcripts stable | **Crítico-UI** — Corrige race condition no caret e estabilidade do transcript |
| [#119601](https://github.com/NousResearch/hermes-agent/pull/119601) | MCP enabled-flag readers unified | **Consistência** — Unifica 4 readers de flags MCP (ACP, tools picker, desktop, health sweep) |

### PRs Abertos de Destaque (ativas no período):

- **[@ahrazzle #111612](https://github.com/NousResearch/hermes-agent/pull/111612)** — `feat(retries)`: Torna configurável o retry count em streaming paths. Advance significativo para resiliência de rede.

- **[@Halldrix #119610](https://github.com/NousResearch/hermes-agent/pull/119610)** — `feat(doctor)`: Surface do estado "burned" de credential pools. Melhora diagnóstico de falhas genéricas "No LLM provider configured".

- **[@BearHuddleston #119186](https://github.com/NousResearch/hermes-agent/pull/119186)** — `fix(desktop)`: Reconcilia session snapshots após replay/settlement. Resolve histórico de "trabalho concluído reaparecendo como ativo".

- **[@JoaoMarcos44 #119612](https://github.com/NousResearch/hermes-agent/pull/119612)** — `fix(desktop)`: Preserva gateway selecionado ao sair do Bot Mode.

---

## 4. Temas Quentes da Comunidade

### Issue #88584 — Integração Nous bloqueada
**132 comentários** | [Link](https://github.com/NousResearch/hermes-agent/issues/88584)

O merge programado Nous→Enterkey apresenta conflitos em `cron/jobs.py`. Dashboard updater permanece na última versão testada do Enterkey. **Impacto**: Adiá-lo gera Technical Debt acumulado. O workflow CI referenced: [enterkey-io#32057737491](https://github.com/enterkey-io/hermes-agent/actions/runs/32057737491).

**Análise**: Discussão técnica densa — a comunidade solicita clareza sobre estratégia de branching e política de release antes do próximo merge.

---

### Issue #97681 — Colaboração Cross-Gateway para Bots
**29 comentários** | 👍 2 | [Link](https://github.com/NousResearch/hermes-agent/issues/97681)

Permitir que Bots em gateways diferentes colaborem sem manter Desktop aberto, mantendo modelos, tools e credenciais independentes. **Demanda**: Multi-device Group Chat com persistência de sessão.

**Análise**: Feature com forte apelo para power users com infra distribuída (laptop + home server + VPS). Considerar priorização P2→P1 para 0.22.

---

### Issue #24438 — HERMES_AGENT_HELP_GUIDANCE injetado incondicionalmente
**2 comentários** | [Link](https://github.com/NousResearch/hermes-agent/issues/24438)

O sistema injeta guidance no system prompt sem mecanismo de desativação via config ou env var. **Dores**: Usuários que desejam prompts customizados não têm controle.

**Análise**: Técnico, mas representa barreira para personalização avançada.

---

## 5. Bugs e Estabilidade

### Prioridade P0 (Críticos)

| Issue | Título | Detalhe |
|-------|--------|---------|
| [#119466](https://github.com/NousResearch/hermes-agent/issues/119466) | `hermes update` deixa venv stale → crash-loop | ModuleNotFoundError: `hermes_platform`. Afeta instalações git com launcher-managed venv + systemd. |
| [#119534](https://github.com/NousResearch/hermes-agent/issues/119534) | `_create_skill` deleta diretório pré-existente em security scan | P1, segurança. Remoção insegura de diretórios. |

### Prioridade P1 (Altos)

| Issue | Título | Detalhe |
|-------|--------|---------|
| [#117867](https://github.com/NousResearch/hermes-agent/issues/117867) | Desktop: newest turn desaparece ao completar (warm-resume) | Transcript vanishes da view; DB intact. Piora UX em sessões longas. |
| [#119525](https://github.com/NousResearch/hermes-agent/pull/119525) | fix(update): refresh stale editable finder antes de skip reinstall | PR P0 acompanhante — evita crash-loop post-update. |

### Prioridade P2 (Médios) — Desktop Dominante

| Issue | Título | Área |
|-------|--------|------|
| [#118671](https://github.com/NousResearch/hermes-agent/issues/118671) | Mensagens duplicadas após mid-session LCM compaction | Renderer-only; store clean. |
| [#118482](https://github.com/NousResearch/hermes-agent/issues/118482) | Transcript scrolls up durante streaming (content not pinned) | ~168px drift medido. |
| [#119411](https://github.com/NousResearch/hermes-agent/issues/119411) | Profile picker escreve config.yaml errado (v0.21.4) | Settings → Models afeta profile primario. |
| [#119569](https://github.com/NousResearch/hermes-agent/issues/119569) | Mensagens somem após streaming completar (race condition) | Conteúdo persiste em DB; render race. |
| [#119540](https://github.com/NousResearch/hermes-agent/issues/119540) | Replies duplicadas ou fora de ordem intermitentemente | Desde ~2026-09-18. |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11: `dashboard --status` reporta falso negativo | 25H2 Compatibility. |

**Padrão identificado**: 7 de ~15 bugs P2 afetam especificamente o Desktop. Recomenda-se audit de render layer e sincronização de estado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Alto Engajamento

**Issue #97681** — Bots colaborativos cross-gateway
> "Create a Group Chat, let Bots on different gateways work together"
- P2 | 👍 2 | 29 comentários
- [Link](https://github.com/NousResearch/hermes-agent/issues/97681)

**Issue #35060** — Delivery target configurável para Home Assistant
- P3 | 👍 0 | 10 comentários
- [Link](https://github.com/NousResearch/hermes-agent/issues/35060)
- PR acompanhante: [#112136](https://github.com/NousResearch/hermes-agent/pull/112136) — `feat(homeassistant): session-integrated delivery mode`

**Issue #106919** — Opt-in para consolidation de memória autônoma
- P2 | 👍 1 | 3 comentários
- [Link](https://github.com/NousResearch/hermes-agent/issues/106919)

**Issue #49198** — Injetar wall-clock time em cada turn
- P3 | 👍 0 | 2 comentários
- [Link](https://github.com/NousResearch/hermes-agent/issues/49198)

**Issue #119510** — Texto de pairing challenge configurável
- P3 | 👍 0 | 2 comentários
- [Link](https://github.com/NousResearch/hermes-agent/issues/119510)

### PRs de Feature Ativas

- **[@ethernet8023 #102765](https://github.com/NousResearch/hermes-agent/pull/102765)** — `bundles & unified package manager` — P3, ci-reviewed. Unifica instalação de tools, dependências e updaters.

- **[@andrewmccauley #119585](https://github.com/NousResearch/hermes-agent/pull/119585)** — `reasoning_echo: never` para rotas opt-out de reasoning_content echo-back.

**Sinais de roadmap implícitos**:
1. Desktop como produto principal — 7 bugs P2 + 4 fixes ativos
2. Multi-gateway/multi-device como direção arquitetural
3. Package manager unificado como next-gen installer
4. Home Assistant como plataforma de delivery cross-message

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

| Categoria | Descrição | Issues |
|-----------|-----------|--------|
| **Desktop instável** | Mensagens somem, duplicam ou scrollam erraticamente durante streaming e após conclusão | #117867, #118671, #118482, #119569, #119540, #119566 |
| **Update quebrado** | `hermes update` falha em Windows (429) e deixa venv corrupta (Linux) | #119466, #105857, #119525 |
| **Configuração complexa** | Profile picker não funciona corretamente; env vars deletadas por shape | #119411, #119539, #119546 |
| **Integração bloqueada** | Nous merge suspenso há meses; comunidade aguardando resolução | #88584 (132 comentários) |
| **Conectividade LAN** | macOS não conecta LLM remoto em LAN; httpx do sistema funciona | #57812 |

### Cenários de Uso Destacados

- **Infra distribuída**: Usuários rodando Hermes em laptop + home server + VPS solicitam colaboração cross-gateway.
- **Home Assistant como hub**: watch_entities/domains redirecionando eventos para múltiplas plataformas.
- **Plugins**: Plugin catalog com 2 entries falhando CI (`browserclaw`, `hermes-kame-api-rotation`) — [Issue #119561](https://github.com/NousResearch/hermes-agent/issues/119561).

### Satisfação

- Bug fix [#119605](https://github.com/NousResearch/hermes-agent/pull/119605) ("keep typing and refreshed transcripts stable") recebeu feedback positivo da comunidade Desktop.
- Feature `reasoning_echo: never` resolve frustração com modelos que ecoam reasoning no output final.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Abandonadas

| Issue | Título | Idade | Status | Prioridade |
|-------|--------|-------|--------|------------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Nous integration blocked | ~37 dias | 132 comentários, aberta | P3 |
| [#35674](https://github.com/NousResearch/hermes-agent/issues/35674) | Symlinked skills false security warning | ~115 dias | 5 comentários | P2 |
| [#57812](https://github.com/NousResearch/hermes-agent/issues/57812) | macOS LAN LLM connection | ~82 dias | 5 comentários | P2 |
| [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) | Kanban infinite block bounce | ~54 dias | 4 comentários | P3 |
| [#82597](https://github.com/NousResearch/hermes-agent/issues/82597) | Kanban block_loop_detected silent | ~45 dias | 2 comentários | P3 |

### PRs Abertos com Atividade Recente (merecem review)

| PR | Título | Age | Comentários |
|----|--------|-----|-------------|
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | bundles & unified package manager | 19 dias | ci-reviewed |
| [#111612](https://github.com/NousResearch/hermes-agent/pull/111612) | feat(retries): configurable stream retries | 8 dias | — |
| [#112136](https://github.com/NousResearch/hermes-agent/pull/112136) | feat(homeassistant): session-integrated delivery | 8 dias | — |

### Recomendações

1. **Release v0.21.5 (patch)** — Urgentemente, para endereçar P0 (#119466, #119525) antes que crash-loops se propaguem na base.
2. **Sprint Desktop** — 7 bugs P2 ativos indicam necessidade de dedicated focus em render layer e state sync.
3. **Roadmap público** — A issue #88584 com 132 comentários sinaliza necessidade de comunicação clara sobre estratégia de integração Nous/Enterkey.
4. **Triage de issues antigos** — 5+ issues com >40 dias sem decisão; risco de Technical Debt acumulado.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-23. Última atualização: 2026-09-23.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-23

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24h, com **2 issues fechadas** e **4 PRs atualizados** (3 merged/fechados, 1 aberto). O contributor principal `sting8k` foi responsável pela maioria das contribuições, focando em **correções de segurança e estabilidade** no módulo de configuração. Uma nova feature de provider de busca web (Keenable) aguarda revisão, sinalizando interesse da comunidade em expandir funcionalidades de tools. Nenhuma release foi publicada no período.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

*Nota: A ausência de releases sugere que as correções merged (PRs #3375, #3372, #1349) ainda não foram empacotadas em uma versão. Recomenda-se monitorar para uma possível release de patch futura.*

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | fix(config): guard lazy sensitive-data cache against concurrent init | sting8k | **Alto** — Corrige race condition crítica que podia causar panic |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | fix(config): make the reaction tool configurable | sting8k | **Médio** — Corrige path de configuração do tool "reaction" |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | aishannon | **Alto** — Adiciona suporte a emoji, voice, image, video e file no QQ Channel |

**Destaque:** O PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) representa uma melhoria significativa de interoperabilidade com QQ Channel, adicionando:
- Parsing de estruturas de emoji
- Handling de voice, image, video e file messages
- Upload e envio de attachments locais
- Priorização de Markdown nas replies

---

## 4. Temas Quentes da Comunidade

### Issues com engajamento

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Data race in Config.initSensitiveCache | 2 | Closed |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | SaveConfig silently deletes api_keys | 2 | Closed |

**Análise:** As duas issues reportadas por `sting8k` indicam problemas crônicos no módulo de configuração (`pkg/config/security.go`). O primeiro é uma **race condition de segurança** que pode causar panic — demonstrando que a comunidade prioriza correções que afetam estabilidade e segurança de dados sensíveis. O segundo bug，涉及 perda silenciosa de dados de `api_keys`, também reflete preocupação com **integridade de configuração**.

### PR em revisão

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | feat(tools): add Keenable web search provider | ilya-bogin-keenable | Expansão de providers de busca |

Este PR adiciona o provider **Keenable** como opção de `web_search`, com destaque por não exigir API key em installações frescas — característica que pode reduzir fricção para novos usuários.

---

## 5. Bugs e Estabilidade

### Bugs críticos corrigidos

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🔴 **Crítica** | [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Race condition em `Config.initSensitiveCache` — `sync.Once` defeated, pode retornar `nil` replacer e causar panic | **Closed** (PR #3375) |
| 🟠 **Alta** | [#3373](https://github.com/sipeed/picoclaw/issues/3373) | `SaveConfig` deleta silenciosamente `api_keys` após o primeiro, deixa dangling fallback | **Closed** |

**Impacto:** Ambos os bugs afetam o módulo de configuração de segurança, potencialmente comprometendo tanto a **estabilidade do runtime** (panic) quanto a **persistência correta de credenciais**. A rápida correção via PR #3375 demonstra atenção à segurança.

### Bug de configuração de tool

| Severidade | Issue | Descrição | Status |
|------------|-------|-----------|--------|
| 🟡 **Média** | — | `reaction` tool não tinha branch dedicado em `ToolsConfig.IsToolEnabled()` | **Closed** (PR #3372) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR aberto com potencial de merge

| # | Título | Proponente | Valor |
|---|--------|------------|-------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Add Keenable web search provider | ilya-bogin-keenable | Provider de busca sem API key obrigatório |

**Análise:** Este PR sinaliza demanda por **alternativas de busca web de baixo atrito**. A característica "no API key" pode indicar que:
- Usuários frequentemente abandonam setups por exigência de credenciais
- Há espaço para mais providers "plug-and-play"

### Features QQ Channel implementadas

O PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) adiciona suporte amplo a attachments, sugerindo que **interoperabilidade com plataformas asiáticas de messaging** (QQ) está no radar do projeto.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de dor identificados

1. **Instabilidade em concorrência** — O bug de race condition (#3374) indica que usuários em ambientes com alta concorrência enfrentavam panics imprevisíveis
2. **Perda silenciosa de configuração** — A deleção de `api_keys` (#3373) representa risco operacional: usuários podem perder acesso a serviços sem perceber
3. **Configuração de tools inconsistente** — Falta de branch dedicado para `reaction` mostra que新增 tools podem não ser configuráveis corretamente

### Cenários de uso inferidos

- **Agentes de IA com dados sensíveis** — O foco em `SensitiveDataCache` e `FilterSensitiveData` indica uso em pipelines que processam informações confidenciais
- **Integração multi-plataforma** — Suporte QQ Channel demonstra foco em conectividade com múltiplos canais de comunicação
- **Busca web integrada** — Provider de busca mostra casos de uso que requerem acesso à internet

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta prolongada

> *Nenhuma issue ou PR antigo identificado nos dados fornecidos para este período.*

### Recomendações de monitoramento

| Item | Motivo |
|------|--------|
| [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | Aguardando review há ~1 dia; pode sinalizar demanda por novos providers |
| [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | Recentemente merged; verificar se não introduziu regressions no QQ Channel |

---

## Métricas Resumidas (24h)

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 2 |
| PRs abertos | 1 |
| PRs merged/fechados | 3 |
| Novas releases | 0 |
| Contributors ativos | 2 (`sting8k`, `ilya-bogin-keenable`, `aishannon`) |

**Índice de Saúde:** 🟢 **Bom** — Atividade consistente, bugs críticos corrigidos rapidamente, nenhuma regressão evidente.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw
**Data:** 2026-09-23  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **baixa atividade no dia de hoje**. Foram abertas **3 pull requests**, todas ainda em статус "OPEN", sem nenhum merge ou close registrado nas últimas 24h. Não houve atualização de issues, novas releases, ou discussões significativas capturadas. O trabalho recente concentra-se em melhorias incrementais no host-runtime e na interface web, sugerindo uma fase de refinamento e adição de features secundárias.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**  
O último lançamento estável não está disponível nos dados atuais.

> ℹ️ Para verificar releases anteriores, consultar a aba [Releases](https://github.com/nearai/ironclaw/releases) do repositório.

---

## 3. Progresso do Projeto

Três PRs foram abertos recentemente, representando as contribuições mais recentes:

| # | Título | Autor | Status | Área |
|---|--------|-------|--------|------|
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | `fix(host-runtime): add builtin.time shift and typed input issues` | Bortlesboat | OPEN | Host Runtime |
| [#8092](https://github.com/nearai/ironclaw/pull/8092) | `fix(webui): preserve IME composition in the chat composer` | huiq777 | OPEN | WebUI |
| [#8107](https://github.com/nearai/ironclaw/pull/8107) | `feat(webui): add Italian (it) locale` | huiq777 | OPEN | WebUI |

**PRs em destaque:**

- **#8108** - Adiciona operação de `shift` ao `builtin.time`, permitindo manipulação de datas com deslocamentos temporais (segundos, minutos, horas, dias, semanas). Representa uma melhoria funcional significativa para manipulação temporal.

- **#8092** - Corrige problema de compatibilidade IME (Input Method Editor) no chat composer, essencial para usuários de idiomas asiáticos que utilizam métodos de entrada compostos. Melhora a experiência em Safari.

- **#8107** - Adiciona locale italiano como 12ª língua da interface web, demonstrando expansão de suporte a idiomas.

---

## 4. Temas Quentes da Comunidade

**Nenhum issue com atividade ou reações significativas registrado nas últimas 24h.**

Os PRs abertos atualmente não possuem comentários ou reações registradas, indicando que ainda não houve revisão formal da comunidade.

> ℹ️ Issues com alta atividade podem ser encontradas em: [Issues do IronClaw](https://github.com/nearai/ironclaw/issues)

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24h.**

O PR #8092 menciona "regression cases", sugerindo que a correção de IME composição previne uma regressão conocida, mas nenhum bug crítico foi reportado recentemente.

---

## 6. Pedidos de Features e Sinais de Roadmap

Os PRs abertos indicam as seguintes direções de desenvolvimento:

| Área | Feature | Observação |
|------|---------|------------|
| **Host Runtime** | Operador `shift` para `builtin.time` | Permite manipulação temporal mais expressiva |
| **WebUI** | Locale Italiano (`it`) | Expansão de i18n; já contempla todos os keys de `en.ts` + sidecar packs |
| **WebUI** | Suporte IME nativo | Correção de UX para digitação em idiomas complexos |

O PR #8107 referencia a issue #7855 como motivação, sugerindo que a internacionalização é uma demanda recorrente da comunidade.

---

## 7. Resumo de Feedback dos Usuários

**Não há feedback quantificável registrado nas últimas 24h.**  
Os dados não incluem comentários de issues ou reações que permitam extrair sentimento da comunidade.

> ℹ️ Para análise histórica de feedback, recomenda-se consultar issues fechadas e discussões anteriores.

---

## 8. Backlog que Merece Atenção

**Nenhum issue pendente com atividade recente registrado.**

Não há items visíveis no backlog imediato. Recomenda-se:

- **Priorizar review dos 3 PRs abertos** — especialmente o #8108 (funcionalidade de tempo) e #8107 (localização), que adicionam valor direto ao usuário final.
- **Aguardar feedback da issue #7855** — referenceda no PR de locale italiano, pode conter contexto adicional sobre prioridades de internacionalização.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Issues ativas (24h) | 🟢 0 | Sem acúmulo de issues não resolvidas |
| PRs abertos | 🟡 3 | Volume moderado, aguardando review |
| Releases (24h) | ⚪ Nenhuma | Ciclo de release não atualizado |
| Bugs críticos | 🟢 Nenhum | Sem reportes recentes |
| Engajamento comunitario | ⚪ Baixo | Sem comentários/reações registradas |

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-09-23.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de Referência:** 2026-09-23
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do Dia

O CoPaw apresenta **alta atividade** em 23/09/2026, com 37 issues e 50 PRs atualizados nas últimas 24h — um volume robusto de engajamento. A taxa de fechamento de issues está excelente (27/37 = 73%), e 24/50 PRs foram merged ou fechados, indicando fluxo saudável de código. Não há release nova registrada, porém a presença de um PR de release notes (#7928) sugere que a **v2.2.2 está prestes a ser publicada**. A base de usuários continua reportando problemas concentrados em estabilidade de tarefas em background, interações com a API de provedores (Volcengine, DeepSeek) e UX do console.

---

## 2. Lançamentos

**Nenhuma release nova registrada nas últimas 24h.**

- **Release notes draft:** PR [#7928](https://github.com/agentscope-ai/QwenPaw/pull/7928) — "chore: release notes for v2.2.2" está aberto, sinalizando que a **v2.2.2 deve ser publicada em breve**. Recomenda-se monitorar este PR para capturar mudanças, breaking changes e notas de migração assim que for merged.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Importantes (últimas 24h)

| # | PR | Descrição | Impacto |
|---|---|---|---|
| [#7938](https://github.com/agentscope-ai/QwenPaw/pull/7938) | test(unit): batch-3 lock and portability tests | Correção de testes que quebraram no workflow de release (windows-latest, collection abortada com `ModuleNotFoundError`). Follow-up do #7911. | **Infraestrutura** — Restaura CI/CD em Windows. |
| [#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898) | fix(qwenpaw pet approval actor) | Corrigia HTTP 500 ao clicar Approve/Deny com `qwenpaw-pet` plugin habilitado. Causa: `ApprovalService` patch não recebia parâmetro `actor`. | **Estabilidade** — Resolve crash em workflow comum. |
| [#7933](https://github.com/agentscope-ai/QwenPaw/pull/7933) | fix(pet): preserve caller identity when resolving approvals | Continuidade do #7898; garante que endpoints do Console passem `actor` corretamente ao wrapper do pet. | **Estabilidade** — Garante consistência entre Console e plugins. |
| [#7937](https://github.com/agentscope-ai/QwenPaw/pull/7937) | fix(workspace): stop prefix-matching the workspace root | Bug de segurança/path traversal: `startswith` em paths permitia upload para diretórios siblings. | **Segurança** — Corrigido path traversal em upload de ZIP. |
| [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | fix(i18n): translate access-control username label for zh | Adiciona chave `channels.username` faltante em `zh.json` (presente em en, ja, ru, id, pt-BR). | **i18n** — Completa localização para chinês. |
| [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) | [CLOSED] Markdown tables in Telegram | Tabelas Markdown não renderizavam no Telegram — issue sobre canal. | **Canal** — Problema de renderização no Telegram. |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | fix(console): show custom profile markdown files | Arquivos de persona customizados eram filtrados incorretamente pelo Files workspace Profile. | **Console** — Corrige visibilidade de personas. |

### PRs Ativos em Review (Alta Prioridade)

| # | PR | Descrição | Status |
|---|---|---|---|
| [#7944](https://github.com/agentscope-ai/QwenPaw/pull/7944) | fix(tool-calls): deliver background tool results as a hint block | Offloaded tool calls completam e injeta hints no contexto antes do próximo modelo. | **OPEN — 22/09** |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | feat(chat): add durable paginated transcript history | SQLite por sessão com cursores estáveis, deduplicação e preservação de usage. | **OPEN — 22/09** |
| [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) | fix(providers): carry the session header on connection checks | Garante que `x-opencode-session` header acompanha requisições de checagem de conexão. | **Under Review** |
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | fix(agents): drop empty assistant text blocks | Modelos que usam todos os tokens em reasoning não geram texto; blocos vazios eram persistidos causando replay. | **Under Review** |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | fix(memory): stop leaking auto-memory-recall payload to channels | Pipeline de auto-memory-injection vazava `ToolCallBlock`/`ToolResultBlock` para canais externos (Feishu etc.). | **Under Review** |
| [#7940](https://github.com/agentscope-ai/QwenPaw/pull/7940) | feat(console): refine sidebar interactions and persist avatars | Sidebar compacta/movível, navegação de tools cycle entre modos, agrupamento de conversas. | **OPEN — 22/09** |
| [#7941](https://github.com/agentscope-ai/QwenPaw/pull/7941) | test(unit): batch-3 lock and portability tests | +47 arquivos de teste, +2720 casos, coverage `src/qwenpaw` de 70.51% → **73.79%** (+3.28pp). | **OPEN — 22/09** |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários (Top 5)

| # | Título | Comentários | Tipo | Tema Central |
|---|---|---|---|---|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 支持按 conversation 级别指定模型，而非仅绑定 agent | **8** | enhancement | **Model binding por conversa** — usuários querem sobrescrever modelo default por sessão. |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 执行中的任务，点了停止后显示上停止了，但实际依然在执行 | **8** | bug | **Bug crítico de stop/stop-race** — UI indica stop, mas backend continua executando. Causa de #7929 (409 after stop). |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | Adding a model requires too many steps and clicks | **7** | good first issue | **UX onboarding** — processo de adicionar modelo tem 5+ cliques来回. |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话移至右侧 | **7** | enhancement | **Layout UX** — história de conversas polui o lado esquerdo; pedido de mover para direita. |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Tool_call structure lost during context compaction (400 errors) | **5** | bug | **Context compaction corrompe tool_calls** — estruturado vira texto plano, causa 400 em provedores que exigem `file_id`. |

### Análise dos Temas

1. **Paridade de features mobile/web:** Há demanda clara por layout responsivo (14" notebooks com áreas colapsadas — #7739) e configurações mais simples de modelo (#4036).

2. **Robustez de tarefas em background:** O bug de "stop" (#7567, #7929) e a questão de "cancel background agent task" (#3424) indicam que subagentes e tarefas em background ainda não têm UX consistente.

3. **Model fallback/failover:** Dezenas de issues pedindo fallback automático entre modelos (#4882, #5351, #5572, #3789). Esta é uma demanda recorrente e madura — evidence suggests this could be prioritized.

4. **Provider resilience:** Issues com APIs de Volcengine (#7549) e DeepSeek (#7883) indicam que integrações com provedores específicos ainda geram erros inesperados.

---

## 5. Bugs e Estabilidade

### Bugs Abertos Críticos

| # | Severidade | Título | Descrição | Recência |
|---|---|---|---|---|
| [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) | **🔴 Crítica** | LLM timeout never recovers (v2.2.1) | Após `APITimeoutError`, **todos os requests subsequentes** falham com timeout — processo não se recupera automaticamente. Afeta produção. | **22/09 (hoje)** |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | **🔴 Crítica** | Stop button shows stopped but task continues | UI indica stop, mas backend continua executando. Causa 409 em mensagens subsequentes. | **04/09, atualização 22/09** |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | **🔴 Crítica** | Workspace file browser freezes entire server | `watchfiles.awatch` bloqueia event loop ao abrir Files em workspaces com repos grandes. | **12/09, atualização 22/09** |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | **🟠 Alta** | PDF tool-return serialized as nested file part — DeepSeek rejects 400 | Regressão de #7597/#7621. Arquivo PDF retornado por tools como nested OpenAI-style part sem `file_id`. | **19/09, atualização 22/09** |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | **🟠 Alta** | Driver card policy lost update (race condition) | `reload_driver` faz read-modify-write com gap entre leitura e escrita; policy write concurrente é sobrescrito. | **18/09** |
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | **🟠 Alta** | Volcengine Ark rejects requests ending with assistant turn | Requisições terminadas em `role: "assistant"` com `output_text` são rejeitadas com 400 "MissingParameter: partial". | **04/09** |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | **🟠 Alta** | Tool_call structure lost during context compaction | Context compaction converte `tool_call` blocks em texto plano, perde estrutura e causa 400 em APIs que exigem formato estruturado. | **08/07** |
| [#7929](https://github.com/agentscope-ai/QwenPaw/issues/7929) | **🟡 Média** | 409 after pressing Stop — task already running | Após stop, envio de mensagem gera 409. Relacionado a #7567. | **22/09** |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | **🟡 Média** | Zero-downtime reload loses plugin runtime hooks | `register_runtime_hook` perde hooks após reload; middleware funciona, mas hooks não. Inconsistência com restart completo. | **20/09** |
| [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771) | **🟡 Média** | Context compaction generates blank session titles | "Compact Chat Session Title" aparece como título vazio/nonsense. | **14/09** |

### Resumo de Estabilidade

**Alerta:** 3 bugs críticos abertos — timeout recovery (#7935), stop race condition (#7567) e server freeze (#7721). Estes afetam diretamente a usabilidade em produção. A comunidade reportou esses problemas com logs detalhados e reprosteps.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recorrentes (Demanda Alta)

| # | Feature | Descrição | Evidência de Prioridade |
|---|---|---|---|
| [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | Model Fallback Chain | Fallback automático para provedor/model alternativo em quota exhaust / failure / timeout. | Múltiplas issues similares (#5351, #5572, #3789) — demanda consolidada. |
| [#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229) | User-controlled reasoning depth | Seleção de Light/Medium/Deep/Auto para balancear velocidade vs. thoroughness. | UX de controle de "thinking effort" (#4840 também). |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | Conversation-level model override | Permitir sobrescrever modelo default da conversa por sessão. | Issue com 8 comentários, bem debatido. |
| [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) | Configurable theme/skin module | Tema customizável/skin module (Task #1 do #2291). Design proposal em andamento. | Proposta formal aberta. |
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | Browsable remote model listing | Substituir "Auto Discover" por listagem navegável com busca e seleção em batch. PR aberto. | PR em review desde abril — processo lento mas em curso. |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | Durable paginated transcript history | SQLite por sessão com cursores e deduplicação — durability de históricos. | PR aberto 22/09 — feature significativa. |
| [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | Zero-intrusion skin gateway | Proposta de "skin gateway" não intrusivo para theming. | Proposta de design detalhada. |

### Sinais de Roadmap

1. **v2.2.2 iminente** — PR de release notes (#7928) está aberto.
2. **Test coverage sprint** — Batch-3 de testes aumentando coverage para 73.79% (#7941), indicando foco em qualidade antes de features.
3. **Chat transcript durability** — PR #7931 com SQLite storage sugere persistência mais robusta do histórico.
4. **Sidebar e UI refinamento** — PR #7940 para sidebar interativa e avatares persistidos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Descrição | Frequência |
|---|---|---|
| **Estabilidade de tarefas** | Tarefas em background não respondem a stop, não cancelam, não mostram progresso em tempo real. Usuários ficam "presos" em tarefas fantasma (#7567, #3424, #4923). | 🔴 Alta |
| **Complexidade de setup** | Adicionar um modelo exige 5+ cliques来回 entre Settings → Provider → API Key → Models → Add Model (#4036). onboarding doloroso. | 🔴 Alta |
| **Layout cramped** | Em notebooks 14",

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto: ZeroClaw
## Data de referência: 2026-09-23 | Período: Últimas 24h

---

## 1. Panorama do Dia

O projeto ZeroClaw manteve atividade intensa nas últimas 24h, com **33 issues e 50 PRs atualizados**, embora nenhuma release tenha sido publicada. A atividade concentra-se em três eixos principais: (1) correções de segurança de alta prioridade — incluindo vulnerabilidades S0 no canal LINE e no sistema de comandos — e (2) evolução do canal WhatsApp — com 6 PRs relacionados a voz, polls e renderização — e (3) discussões arquiteturais através de 4 RFCs ativas sobre primitivas duráveis e controle de recursos. A proporção de 20 PRs fechados/m份ergidos para 15 issues fechadas indica foco em consolidação de código mais do que em resolução de issues individuais.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto mantém um backlog significativo de PRs abertos (30 issues + 30 PRs em aberto segundo os totais), sugerindo que a próxima release concentrará múltiplas correções e features acumuladas.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Relevantes (Últimas 24h)

| # | Título | Tipo | Tamanho | Contribuidor |
|---|--------|------|---------|--------------|
| [#11042](https://github.com/zeroclaw-labs/zeroclaw/pull/11042) | docs(developing): registrar política replacement-first | Docs | XS | VladimirLewisII |
| [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) | chore(security): ignorar RUSTSEC-2026-0292 (imbl-sized-chunks double free) | Segurança | XS | JordanTheJet |
| [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) | fix(providers): manter signed reasoning intact nos seam sanitizers | Bug | L | Audacity88 |
| [#10958](https://github.com/zeroclaw-labs/zeroclaw/pull/10958) | fix(channels): usar interruption scope keys com length-prefix | Bug | M | ump45nose |
| [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057) | fix(whatsapp-web): honrar suppress_voice antes de enfileirar TTS | Feature | S | RustLangLatam |
| [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060) | fix(whatsapp-web): enfileirar forced reply fora de voice chat | Feature | M | RustLangLatam |
| [#11054](https://github.com/zeroclaw-labs/zeroclaw/pull/11054) | feat(whatsapp-web): render thematic breaks e setext headings | Feature | S | RustLangLatam |
| [#11056](https://github.com/zeroclaw-labs/zeroclaw/pull/11056) | docs(channels/whatsapp): documentar round trip de voice notes | Docs | XS | RustLangLatam |

### Avanços Notáveis

- **Correção de double-free em produção**: O PR [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) adiciona exceção temporária para RUSTSEC-2026-0292 no `imbl-sized-chunks`, desbloqueando o pipeline CI que estava falhando em `master` e em todos os PRs abertos.

- **WhatsApp Web — camada de voz**: O par de PRs [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057) + [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060) corrige dois bugs complementares: `suppress_voice` era ignorado e `force_voice` não chegava ao canal, permitindo que mensagens de voz fossem silenciadas ouRouting funcionasse corretamente.

- **Segurança de primitivas**: O PR [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) corrige a reescrita indevida de `reasoning_content` (signed reasoning) pelos seam sanitizers, que causava rejeição de replay pelo provedor Anthropic.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Etiquetas Chave |
|---|--------|-------------|------------------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Feature: instalar skills de índices `.well-known` | 8 | `enhancement`, `priority:p2`, `risk:high` |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | RFC: Controle de admissão por host e limites por agente | 5 | `type:rfc`, `priority:p2`, `risk:high` |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | RFC: Primitiva durável para perguntas de agente a humanos | 5 | `type:rfc`, `priority:p2`, `risk:high` |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | RFC: Recibos de entrega para mensagens outbound | 5 | `type:rfc`, `priority:p2`, `risk:high` |
| [#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) | Tracker: Eliminar output literal fora de localization | 4 | `enhancement`, `priority:p2`, `risk:high` |

### Análise dos Temas

**RFCs Arquiteturais (4 issues simultâneas)**: A comunidade está discutindo ativamente três RFCs interrelatedas que definem o futuro do sistema de mensagens e concurrency do ZeroClaw:

1. **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — Controle de admissão por host: limita deturnos concorrentes, execuções de tools e memória por agente, evitando degradação de estabilidade em máquinas com muitos agentes.
2. **[#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)** — Primitiva durável para perguntas a humanos: reutilizar o gate SOP (já implementado e testado) como mecanismo padrão para todas as interações humano-agente.
3. **[#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)** — Recibos de entrega: adicionar identificadores a mensagens outbound para rastrear se chegaram ao destinatário.
4. **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** — Mensagens agent-to-agent: troca de informações entre agentes sem mesclar históricos.

**Instalação padronizada de skills ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853))**: Com 8 comentários, é a issue com maior engajamento. O projeto está alinhando-se com o padrão `.well-known` do Agent Skills group (Cloudflare e Vercel já utilizam internamente), indicando maturidade do ecossistema de skills.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

| Severidade | Qtd | Issues Críticas |
|------------|-----|-----------------|
| **S0** (data loss / security risk) | 3 | [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058), [#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187), [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) |
| **S1** (workflow blocked) | 1 | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) |
| **S2** (degraded behavior) | 9+ | [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885), [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922), [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) |

### Vulnerabilidades S0 — Ação Imediata Necessária

1. **[#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058)** — `allowed_commands` isenta comandos de alto risco de `block_high_risk_commands`, permitindo execução sem aprovação e sem log. **Severity: S0**. Identificador: `qo-roj` | Criado: 2026-09-22.

2. **[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)** — Cursor de sync do WeChat é persistido antes do enfileiramento de mensagens — crash causa perda de mensagens. **Severity: S0**. Status: `in-progress`.

3. **[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)** — Mensagens de grupo LINE ignoram allowlist e handshake de pairing. **Severity: S0**, **Priority: P1**. Status: `in-progress`.

### Bugs S1 — Workflow Bloqueado

4. **[#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225)** — Sessões ZeroCode RPC não alcançam canais configurados através de channel-backed tools. **Priority: P1**, **Risk: high**.

### Bugs Recentemente Fechados

| # | Título | Status |
|---|--------|--------|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | Imagens retornadas por tools desaparecem após tool call unrelated | Closed |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) | Anthropic provider descarta cache breakpoint quando último bloco é imagem | Closed |
| [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | Audit logging habilitada por padrão mas não escreve nada | Closed |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam sanitizers reescrevem signed reasoning e Anthropic rejeita replay | Closed |

### Nota sobre Estabilidade Geral

A quantidade de issues de segurança abertas simultaneamente (3 S0 + 2+ P1 em diferentes domínios) representa risco elevado para ambientes de produção. A distribuição mostra que o projeto enfrenta desafios em três front-ends: **canais** (LINE, WeChat, WhatsApp), **segurança de comandos** e **persistencia de estado** (cron, audit, sync cursors).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas)

| # | Título | Tags | Contribuidor |
|---|--------|------|--------------|
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | Renderizar thematic breaks e setext headings no WhatsApp | `enhancement` | Audacity88 |
| [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp Web deve honrar force_voice | `bug` | RustLangLatam |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: Knowledge graph como primeira-classe memória de agente | `RFC` | RO-mix |
| [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) | Tornar turns peer-agent duráveis e atribuíveis | `enhancement`, `risk:high` | Audacity88 |

### PRs de Feature em Progresso

| # | Título | Status | Contribuidor |
|---|--------|--------|--------------|
| [#11044](https://github.com/zeroclaw-labs/zeroclaw/pull/11044) | feat(zerocode): tornar raízes de sessão explícitas e preservar ao retomar | Aberto | tidux |
| [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) | feat(whatsapp-web): ler votos de polls como mensagens [choice] | Aberto | RustLangLatam |
| [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) | feat(whatsapp-web): implementar create_room e invite_user | Aberto | RustLangLatam |
| [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) | feat(whatsapp-web): anexar preview de primeira página a PDFs | Aberto | RustLangLatam |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): suportar múltiplos modelos por perfil de provider | Aberto | NiuBlibing |
| [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) | fix(service): limitar logs stdout/stderr no Windows | Aberto | Audacity88 |

### Sinais de Roadmap

1. **Multi-model providers ([#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809))**: PR size:XL em revisão — permitirá que um único perfil de provedor (credencial + endpoint) hospede múltiplos modelos, cada um com seu próprio ID e tuning. Mudança arquitetural significativa.

2. **Knowledge graph como memória de agente ([#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053))**: RFC proposta para promover o knowledge graph de tool para memory layer, tornando-o transparente ao agente.

3. **WhatsApp como plataforma prioritária**: 6 PRs e 3 issues em 24h focadas em WhatsApp Web — polls nativas, thumbnails de PDF, voice notes, renderização de markdown — indicando investimento intencional no canal.

4. **Segurança e controle de recursos**: RFCs [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) e [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) apontam para abstração de "máquina com muitos agentes" e comunicação agent-to-agent.

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas via Issues

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Instabilidade em máquinas multi-agente** | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) (RFC) | Operadores com múltiplos agentes experimentam degradação de estabilidade, não latência controlada |
| **Sem visibilidade de entrega de mensagens** | [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) (RFC) | Agentes não sabem se mensagens a humanos chegaram, quebrando fluxos de confirmação |
| **Logs de audit não

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*