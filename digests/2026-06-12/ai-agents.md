# Resumo diário do ecossistema de agentes de IA 2026-06-12

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-11 21:57 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-12

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, com apenas **1 issue aberta** registrada e **nenhuma ação em PRs ou releases**. O repositório não registrou atividade de merge ou fechamentos de pull requests, indicando um período de estagnação temporária no desenvolvimento. A issue recente trata de um bug crítico relacionado a modelos locais via Ollama, sugerindo que a comunidade está focada em problemas de estabilidade. O cenário atual aponta para uma fase de monitoramento e triagem de issues pendentes.

---

## 2. Lançamentos

**Nenhum novo lançamento registrado nas últimas 24 horas.**

O repositório não publicou versões recentes, releases de patch ou atualizações de documentação. Recomenda-se verificar o histórico de releases para identificar a última versão estável e possível pipeline de release em andamento.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24 horas.**

A ausência de atividade em pull requests indica que:
- Não há contribuições recentes em revisão
- O fluxo de desenvolvimento está pausado
- Possível foco da equipe em triagem de issues ao invés de implementação

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #952 | **[bug] Local model using ollama returns incomplete answers** |
|-------|--------------------------------------------------------------|
| **Status** | OPEN |
| **Autor** | bloodgroup-cplusplus |
| **Criado** | 2026-06-11 |
| **Atualizado** | 2026-06-11 |
| **Comentários** | 0 |
| **Reações** | 👍 0 |
| **Link** | [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952) |

**Análise:** A issue reporta que ao utilizar o modelo **gemma via Ollama**, o agente retorna respostas incompletas/inarticuladas. O autor incluiu screenshots com evidências do problema. A ausência de comentários e reações sugere que a issue ainda não foi triada pela equipe mantenedora. Este é um problema de **usabilidade crítica** que afeta diretamente a experiência do usuário com modelos locais.

---

## 5. Bugs e Estabilidade

### Bug Reportado

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| 🔴 **Alta** | [#952](https://github.com/nullclaw/nullclaw/issues/952) | Modelo local via Ollama retorna respostas incompletas |

**Análise de Severidade:**
- **Impacto:** Afeta funcionalidade core (interação com modelos locais)
- **Escopo:** Usuários utilizando integração Ollama com modelos como gemma
- **Prioridade sugerida:** Alta — compromete a utilidade do produto para用例 de IA local

**Recomendações:**
1. Verificar se há issues similares no histórico (regressão?)
2. Testar com outros modelos Ollama para isolar o problema
3. Analisar logs de streaming de resposta

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

A ausência de PRs e issues de feature indica:
- Fase de estabilização do produto atual
- Possível roadmap em desenvolvimento interno
- Baixa demanda explícita de novas funcionalidades (ou não reportada)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Detalhe |
|-----------|---------|
| 🔧 **Bug de Integração** | Modelo local (Ollama) não retorna respostas completas |

**Cenário de Uso Afetado:**
Usuários que configuram agentes de IA com modelos locais auto-hospedados via Ollama estão enfrentando respostas fragmentadas, comprometendo a utilidade do assistente.

**Satisfação Geral:**
- Dados insuficientes para avaliação completa
- Issue recém-criada sem respostas da comunidade
- Ausência de indicadores positivos ou negativos adicionais

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta

| #952 | **[bug] Local model using ollama returns incomplete answers** |
|-------|--------------------------------------------------------------|
| **Tempo sem resposta** | ~1 dia |
| **Status** | Aberta sem triagem |
| **Link** | [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952) |

**Ação Recomendada:**
Esta issue foi criada em 2026-06-11 e **não recebeu nenhuma resposta ou atribuição** da equipe mantenedora. Dado o impacto potencial na experiência do usuário com modelos locais, recomenda-se:

1. **Triagem imediata** — atribuir a um mantenedor
2. **Reprodução do bug** — confirmar com outros modelos Ollama
3. **Comunicação com o autor** — solicitar informações adicionais se necessário

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| 🚀 Atividade de código | 🟡 Baixa | Sem PRs merged |
| 🐛 Issues abertas | 🟡 Moderada | 1 issue de bug ativa |
| 🔧 Resolução de bugs | 🔴 Crítica | Issue sem resposta |
| 📦 Releases | ⚪ Nenhuma | Sem atividade de release |
| 💬 Engajamento | 🔴 Baixo | Sem interações na issue |

---

**Relatório gerado em:** 2026-06-12  
**Fonte:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-06-12  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **forte polarização entre projetos maduros e estagnados**. ZeroClaw, Hermes Agent e NanoBot lideram em volume de atividade (40–50 items atualizados/24h), enquanto NullClaw registra estagnação completa. A tendência dominante é a convergência para arquiteturas multi-provider (OpenAI-compatível, Ollama, LM Studio), suporte a subagentes e workflows cron-driven. Três projetos demonstram evolução clara para Runtime 2.0 modular (CoPaw, NanoBot, ZeroClaw), sugerindo um padrão de mercado emergente. A segurança e sandboxing emergem como preocupação transversal — ZeroClaw, CoPaw e PicoClaw reportam vulnerabilidades ou fixes de segurança no período. O ecossistema fragmenta-se entre soluções de desktop (CoPaw/Tauri), CLI robustas (Hermes, ZeroClaw) e gateways escaláveis (NanoBot).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos | Saúde |
|---------|--------------|-----------|----------------|---------------|-------|
| **ZeroClaw** | 48 | 50 | 0 | 2 S1 abertas | 🟢 Alta |
| **Hermes Agent** | 50 | 50 | 0 | 0 P1 (3 fechados) | 🟢 Alta |
| **NanoBot** | 5 | 19 | 0 | 2 alta | 🟢 Alta |
| **PicoClaw** | 7 | 36 | 1 nightly | 1 alta + 2 CVEs | 🟢 Alta |
| **IronClaw** | 31 | 50 | 0 | 3 alta | 🟡 Média-Alta |
| **CoPaw** | 29 | 40 | 2 hotfix | 1 crítico (seg) | 🟡 Média |
| **NullClaw** | 1 | 0 | 0 | 1 alta | 🔴 Baixa |

**Observação:** ZeroClaw e Hermes Agent lideram em volume absoluto. PicoClaw é o único com release formal (nightly) e addressing de CVEs. NullClaw está em modo de monitoramento passivo.

---

## 3. Posicionamento do Projeto Principal

Não há projeto principal único — o ecossistema é **multi-polar** com especializações distintas:

| Projeto | Diferencial Técnico | Tamanho Comunidade | Posição |
|---------|--------------------|---------------------|---------|
| **ZeroClaw** | Plugin OCI/WASM, delegate agentic, Dream Mode | Muito grande (50 PRs/24h) | Platform extensível enterprise |
| **Hermes Agent** | Dashboard webhook, context compaction, Rust manager | Muito grande | Assistente pessoal robusto |
| **NanoBot** | Multi-provider, cron/sessions, Python SDK | Grande | Automação e extensibilidade |
| **CoPaw** | Runtime 2.0 modular, Agent OS Driver (MCP/A2A/ACP) | Grande | Arquitetura agentic unificada |
| **IronClaw** | NEAR AI integration, Reborn WebUI v2, Slack routing | Grande | WebUI-first + blockchain |
| **PicoClaw** | WebSocket channel, agent collaboration bus, WhatsApp native | Médio | Multi-canal + colaboração |
| **NullClaw** | — | Estagnado | Ausente do radar |

**Vantagens transversais dos projetos ativos:**
- Suporte nativo a modelos locais (Ollama/LM Studio) com timeout configurável
- Integração MCP como camada de extensibilidade padrão
- CLI + TUI como UX primária, com WebUI como feature secundária
- Automação via cronjobs e subagentes

---

## 4. Focos Técnicos Compartilhados

### 4.1 Problemas de Estabilidade Recorrentes

| Problema | Projetos Afetados | Evidência |
|----------|-------------------|-----------|
| **Tool calls perdidos em streaming** | PicoClaw, NanoBot | PicoClaw #2957, NanoBot #4013 |
| **Timeouts agressivos para LLMs locais** | NanoBot, Hermes, CoPaw | NanoBot #4013→#4020, Hermes #43900 |
| **Crash após reconexão MCP** | NanoBot, Hermes | NanoBot #4302, Hermes #42311 |
| **Docker/containers path mismatch** | Hermes, IronClaw | Hermes #27250, #33913 |
| **Loop infinito em Android/Termux** | ZeroClaw, CoPaw | ZeroClaw #6036, CoPaw #5064 |
| **Subagentes não aguardam completion** | NanoBot, IronClaw | NanoBot #4290, IronClaw #4761 |

### 4.2 Features Comuns em Desenvolvimento

| Feature | Projetos | Status |
|---------|----------|--------|
| **Multi-provider custom OpenAI-compatível** | NanoBot, Hermes, CoPaw, ZeroClaw | NanoBot #3239, Hermes #37876, CoPaw #5103, ZeroClaw #5797 |
| **Context compression/compaction** | Hermes (P1 × 3 closed), CoPaw | Hermes closed, CoPaw #5063 (Headroom) |
| **Python SDK completo** | NanoBot, Hermes | NanoBot #4296, Hermes Agent SDK |
| **Runtime 2.0 modular** | CoPaw, NanoBot, ZeroClaw | CoPaw #5078, NanoBot SDK v2, ZeroClaw agent_workspace_dir |
| **Segurança sandbox/keychain** | CoPaw, PicoClaw, ZeroClaw | CoPaw #5090, #5028; PicoClaw #3080; ZeroClaw risk_profile |

### 4.3 Padrão de Soluções Emergentes

1. **Timeout configurável por provider** — NanoBot #4020, demonstrando necessidade de granularidade em ambientes híbridos cloud/local
2. **MCP como layer de extensibilidade** — Todos os projetos ativos suportam ou estão migrando para MCP
3. **Agentes colaborativos** — PicoClaw #2937 (Agent Collaboration Bus), sinalizando arquitetura multi-agente
4. **Docker + feature flags** — ZeroClaw #3642, IronClaw full-stack requests indicam demanda por "one-click" deployments

---

## 5. Análise de Diferenciação

| Dimensão | ZeroClaw | Hermes Agent | NanoBot | CoPaw | IronClaw | PicoClaw |
|----------|----------|--------------|---------|-------|----------|----------|
| **Foco primário** | Extensibilidade via plugins OCI/WASM | Estabilidade desktop + webhook platform | Automação + multi-provider | Runtime modular + AI orchestrator | WebUI v2 + NEAR AI | Multi-canal + colaboração |
| **Arquitetura de runtime** | ACP nativo + delegate agentic | ACP + context compaction | ACP + cron sessions | MCP/A2A/ACP unified (Agent OS Driver) | ACP + Slack routing | ACP + WebSocket |
| **Público-alvo** | DevOps/platform engineers | Usuários desktop enterprise | Automação e desenvolvedores | AI orchestrators | Produtividade web | Multi-canal messaging |
| **Differencial** | WASM plugins, Dream Mode, RFC-driven | Dashboard, context management | Provider SDK, cron-bound sessions | Modular runtime, headroom | NEAR AI native, Reborn | WhatsApp native, collaboration bus |
| **Maturidade** | Alta (2 S1 em aberto) | Alta (3 P1 fechados) | Alta | Média (security issues abertas) | Média (E2E quebrado) | Alta |
| **Velocidade de release** | Alta (7 PRs merged/24h) | Alta (5 PRs/24h) | Alta (6 PRs/24h) | Alta (19 PRs/24h + 2 hotfixes) | Alta (3 PRs XL/24h) | Alta (20 PRs/24h) |

**Conclusão de diferenciação:**
- **ZeroClaw** posiciona-se como a plataforma mais extensível (OCI, WASM, RFC-driven)
- **Hermes Agent** prioriza estabilidade e observabilidade (dashboard, context compaction)
- **NanoBot** é o mais amigável para automação (cron sessions, Python SDK)
- **CoPaw** mira arquitetura de orquestração unificada (MCP/A2A/ACP)
- **IronClaw** foca experiência web-first com integração blockchain
- **PicoClaw** otimiza para canais de messaging (WhatsApp, WebSocket)
- **NullClaw** não demonstra direção estratégica clara

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged/24h | PRs Abertos | Issues Resolvidas/24h | Tendência |
|---------|----------------|-------------|------------------------|----------|
| **ZeroClaw** | 7 | ~25 | Alta | 🚀 Acelerando |
| **Hermes Agent** | 5 | ~45 | 8 fechadas | 🚀 Acelerando |
| **CoPaw** | 19 | ~21 | Alta | 🚀 Acelerando |
| **PicoClaw** | 20 | ~16 | 4 fechadas | 🚀 Acelerando |
| **NanoBot** | 6 | ~13 | Moderada | ➡️ Estável |
| **IronClaw** | 3 | ~25 | Alta | ➡️ Estável |
| **NullClaw** | 0 | 0 | 0 | 🔴 Estagnado |

### 6.2 Qualidade de Manutenção

| Indicador | ZeroClaw | Hermes Agent | CoPaw | PicoClaw | IronClaw |
|-----------|----------|--------------|-------|----------|----------|
| **Regressão testing** | ⚠️ Pending | ✅ P1 closed | ✅ Hotfix rápido | ✅ tool_calls fix | 🔴 E2E quebrado |
| **Segurança** | ✅ Risk profile | ✅ Lockfile sync | 🔴 Tool Guard bypass | ✅ CVEs addressed | ⚠️ WASM credential-less |
| **Documentação** | ✅ RFC-driven | ✅ Changelog | ✅ Historian agent | ✅ Comparativo | ⚠️ WebUI logs missing |
| **Stale issues** | ⚠️ S0 #6672 | ✅ P1 priorizados | ✅ | ✅ | 🔴 #4108 (15 dias) |

### 6.3 Maturidade por Estágio

```
NullClaw      ░░░░░░░░░░░░░░░░░░░  Estagnado
IronClaw      ▓▓▓▓▓▓▓▓▓░░░░░░░░░░  Emergente (E2E quebrado)
NanoBot       ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░  Estável (stale backlog)
CoPaw         ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░  Estável (security em progreso)
PicoClaw      ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  Maduro (CVEs + features)
Hermes Agent  ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░  Maduro (context compaction)
ZeroClaw      ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░  Maduro (plugin ecosystem)
```

**Veredicto:** Hermes Agent, ZeroClaw e PicoClaw demonstram maior maturidade em termos de estabilidade e qualidade de release. CoPaw e NanoBot estão em trajetória ascendente. IronClaw apresenta debt técnico no E2E. NullClaw precisa de reativação ou reposicionamento.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Arquitetura

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Unificação MCP/A2A/ACP** | CoPaw #5067, NanoBot SDK | Padrão de facto para interoperabilidade de agentes |
| **Runtime modular** | CoPaw #5078, NanoBot, ZeroClaw | Decomposição de monolitos em composable runtimes |
| **Plugins via WASM/OCI** | ZeroClaw OCI, PicoClaw extensions | Shift de "scripts" para containers de ferramentas |
| **Context compression como feature core** | Hermes (3 P1), CoPaw Headroom | LLMs locais exigem gestão agressiva de contexto |
| **Multi-provider como default** | Todos os projetos | Integração com OpenAI, Ollama, LM Studio, custom endpoints |

### 7.2 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Desktop Tauri como UX alternativa** | CoPaw (regressão OpenSSL 3.5), IronClaw WebUI v2 | Demanda por UI nativa + web capabilities |
| **Automação cron + subagentes** | NanoBot #4299, Hermes cron, IronClaw workflows | Agentes evoluem para "job schedulers" sofisticados |
| **Segurança first** | CoPaw Tool Guard bypass, PicoClaw CVEs, ZeroClaw risk_profile | Sandbox e keychain emergem como features obrigatórias |
| **Observabilidade e debugging** | Hermes dashboard, NanoBot diagnostics, CoPaw Langfuse | Demanda por transparência em pipelines agentic |
| **Docker one-click** | ZeroClaw full image, IronClaw local dev | Redução de barreira de entrada para não-técnicos |
| **Voice + multi-canal** | ZeroClaw RFC #6969, IronClaw Slack routing | Routers de output (voice, Telegram, Discord) como feature |

### 7.3 Sinais de Mercado Fracos

- **NullClaw estagnado** — indica que "claws" como naming não sustenta comunidade por si só
- **Windows compatibility** — PicoClaw #2472 (63 dias), ZeroClaw path issues indicam neglect de plataforma
- **Android/Termux** — ZeroClaw loop infinito, CoPaw Ollama issues sugerem Mobile como mercado não endereçado

---

## Resumo Executivo

| Insight | Ação Recomendada |
|---------|------------------|
| **Ecossistema fragmentado mas convergindo** | Adotar ACP como baseline; MCP como extensibilidade; evitar reinventar wheel |
| **Segurança é gap crítico** | CoPaw Tool Guard bypass e CVEs PicoClaw indicam necessidade de security review abrangente |
| **LLMs locais são mainstream** | Timeout configurável, context compression, Ollama detection são features esperadas |
| **Multi-provider é necessity** | Roadmap de todos os projetos inclui suporte a múltiplos endpoints custom |
| **NullClaw precisa de reposicionamento** | Sem activity, sem estratégia clara — risco de abandonment |
| **E2E testing é bottleneck** | IronClaw nightly quebrado há 15 dias; outros projetos não reportam testing robusto |

**Conclusão:** O ecossistema está em fase de **consolidação técnica** — projetos maduros (ZeroClaw, Hermes, PicoClaw) iteram em estabilidade e extensibilidade, enquanto projetos intermediários (CoPaw, NanoBot, IronClaw) investem em arquitetura e features. A tendência clara é a convergência para runtimes modulares, suporte multi-provider e segurança sandboxed como requisitos mínimos.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório de Projeto — NanoBot (HKUDS/nanobot)
**Data:** 2026-06-12 | **Analista:** AI Assistant

---

## 1. Panorama do Dia

O projeto NanoBot registrou **alta atividade** em 12/06/2026, com 24 itens atualizados (5 issues + 19 PRs) nas últimas 24h. A atividade concentra-se em **estabilidade operacional** (correções de cronjobs, subagentes e reconexão MCP) e **extensibilidade** (SDK Python, múltiplos providers, skills cacheadas). Não houve lançamentos oficiais, mas 6 PRs foram merged/fechados com contribuições relevantes. O volume de PRs abertos (13) indica um pipeline saudável de contribuições externas, com foco em features de automação e robustez do gateway.

---

## 2. Lançamentos

### Nenhum release registrado nas últimas 24h

O projeto não publicou novas versões. O último release estável deve ser consultado diretamente em [HKUDS/nanobot/releases](https://github.com/HKUDS/nanobot/releases).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (6 total)

| # | PR | Autor | Contribuição |
|---|-----|-------|--------------|
| **#4020** | `feat(providers): make stream-idle timeout configurable per-provider` | eldar702 | Torna configurável o timeout de 90s para streaming de LLMs locais (LM Studio, Ollama), fechando [#4013](https://github.com/HKUDS/nanobot/issues/4013).Melhora ergonomia para uso local/cloud com knobs por provider. |
| **#4289** | `feat(slack): add groupRequireMention to scope allowlist channels` | brendanlevy | Adiciona controle refinado para bots Slack em canais allowlist, exigindo @mention para resposta — fecha feature request da comunidade. |
| **#4281** | `feat(transcription): add SiliconFlow as transcription provider` | morandot | Integra provedor SiliconFlow com modelo `FunAudioLLM/SenseVoiceSmall` via adaptador Whisper-compatible, expandindo opções de transcrição. |
| **#4257** | `fix(utils): make split_message fenced-code-block-aware` | axelray-dev | Corrige quebra de mensagens longas dentro de blocos de código fenced, evitando HTML quebrado nos chunks. |
| **#4298** | Worktree feature+hermes research doc | huangyunhua-neolix | Documentação/integração de feature worktree. |
| **#4297** | Worktree feature+hermes research doc | huangyunhua-neolix | Documentação/integração de feature worktree. |

**Destaque:** A correção de timeout configurável por provider (#4020) é de alta relevância operacional para usuários de LLMs locais.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento potencial

| # | Título | Tipo | Comentários | Relevância |
|---|--------|------|-------------|------------|
| **#4233** | Show the nanobot version in the webui | enhancement, good first issue | 2 | Feature simples com boa接受的 (good first issue), demonstra demanda por UX/monitoramento. |
| **#4305** | Multiple custom providers: ? | enhancement | 0 | Requisição de múltiplos providers custom — alinhado com PR #3239. |
| **#4236** | bwrap sandbox fails on Ubuntu 24.04 | bug | 1 | Compatibilidade com distribuições modernas (restrição de user namespaces). |

### PRs com potencial estratégico

| # | Título | Autor | Relevância |
|---|--------|-------|------------|
| **#4296** | `feat(sdk): expand Python SDK runtime controls` | Re-bin | Eleva SDK Python de facade mínima para API completa com `RunResult` rico, sessões e memória — sinal de maturidade para desenvolvedores. |
| **#4299** | `feat(cron): bind scheduled automations to sessions` | chengyongru | Melhora arquitetura de automações, atrelando cron jobs a sessões específicas. |
| **#3239** | `feat: support multiple custom OpenAI-compatible providers` | JagoWang | Feature aguardada para ambientes multi-cloud/internal APIs. |

**Análise:** A comunidade demonstra interesse forte em **extensibilidade de providers** e **automação robusta** (cron + subagentes).

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (3 abertas)

| # | Severidade | Título | Link |
|---|-----------|--------|------|
| **🔴 Alta** | #4302 | nanobot gateway crashes after mcp reconnect | [Issue](https://github.com/HKUDS/nanobot/issues/4302) |
| **🔴 Alta** | #4290 | cronjob ends early when there's a subagent spawned | [Issue](https://github.com/HKUDS/nanobot/issues/4290) |
| **🟡 Média** | #4236 | bwrap sandbox fails on Ubuntu 24.04 | [Issue](https://github.com/HKUDS/nanobot/issues/4236) |

### Análise

1. **#4302 — Gateway crash após reconexão MCP:** Relacionado a `#4211` e `#4168`. Causa: `_close_server` executa em task asyncio diferente do cancel scope. PR #4303 em andamento para fechar generators no `_close_server`.

2. **#4290 — Cronjob termina antes de subagente finalizar:** Problema crítico para automações — cron marca "completed" imediatamente após `process_direct`, sem aguardar tasks assíncronas do subagente. **PRs complementares abertos:**
   - [#4304](https://github.com/HKUDS/nanobot/pull/4304) — `fix(cron): wait for spawned subagents`
   - [#4293](https://github.com/HKUDS/nanobot/pull/4293) — `fix(agent): add pending_queue to process_direct`

3. **#4236 — Bubblewrap falha no Ubuntu 24.04:** Incompatibilidade com restrição de user namespaces em distros modernas. Bug de compatibilidade sistêmica.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Autor | Sinal de Roadmap |
|---|--------|-------|------------------|
| **#4305** | Multiple custom providers | smurfix | Suporte a múltiplos providers custom e openai — [PR #3239](https://github.com/HKUDS/nanobot/pull/3239) em andamento. |
| **#4300** | Check skill type requirements | MAGMA27 | Verificação de requisitos de tipo para skills — útil para composição de skills em workflows complexos. |
| **#4291** | Allow subagents to use configurable model presets | aiguozhi123456 | Subagentes com presets de modelo configuráveis — extensibilidade para pipelines multi-modelo. |
| **#4301** | Cache skills loader entries and metadata | wxhcore | Performance: evita rescans de diretório e reparse YAML a cada contexto — [PR #4301](https://github.com/HKUDS/nanobot/pull/4301) aberto. |
| **#3538** | Add gateway start/stop/restart commands | choiking | CLI management para gateway — operacionalidade em produção. |

### Tendências Identificadas
- **Multi-provider:** Múltiplos endpoints custom/OpenAI compatíveis.
- **Subagentes avançados:** Presets de modelo, controle de ciclo de vida, injeção de resultados.
- **SDK maturity:** Expansão do Python SDK para uso programático completo.
- **Performance:** Cache de skills, deduplicação de items na API Codex.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| Timeout de streaming agressivo para LLMs locais | Issue #4013 → PR #4020 (resolved) | 🟡 Média |
| Crash do gateway após reconexão MCP | #4302, #4211, #4168 | 🔴 Alta |
| Cronjobs finalizam prematuramente com subagentes | #4290 | 🔴 Alta |
| Falha do sandbox bwrap em Ubuntu 24.04 | #4236 | 🟡 Média |
| Necessidade de versão visível na UI | #4233 (resolved) | 🟢 Baixa |
| Limite de um provider custom | #4305, #3239 | 🟡 Média |

### Cenários de Uso Observados
- **Automação com subagentes:** Cronjobs disparando workflows com spawn de subagentes.
- **Multi-cloud:** Usuários conectando múltiplos provedores OpenAI-compatíveis.
- **Transcrição:** Integração SiliconFlow como alternativa a provedores tradicionais.
- **Skills composition:** Usuários combinando skills de dados financeiros, notícias e análise.

### Satisfação Geral
A comunidade está **ativamente engajada** (19 PRs, 5 issues em 24h). Bugs críticos (subagentes, gateway) têm atenção imediata com PRs em andamento. Features de extensibilidade (providers, SDK, presets) demonstram amadurecimento do produto para casos de uso enterprise.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| **#3239** | feat: support multiple custom OpenAI-compatible providers | 2026-04-17 | OPEN | 🔴 Alta |
| **#3538** | feat: add gateway start/stop/restart commands | 2026-04-29 | OPEN | 🟡 Média |
| **#4021** | fix(codex): dedup reasoning items before send | 2026-05-27 | OPEN | 🟡 Média |

### Análise do Backlog

1. **#3239 (17/04) — Múltiplos providers custom:** Issue antiga (~55 dias) sem merge. PR aberto mas停滞. **Recomendação:** Priorizar review ou fornecer feedback ao autor sobre blockers.

2. **#3538 (29/04) — Gateway CLI commands:** ~43 dias sem progress. Comandos de lifecycle são importantes para produção. **Recomendação:** Avaliar se está nos planos ou se precisa de rebase.

3. **#4021 (27/05) — Dedup reasoning items:** ~16 dias, bug que causa 400 errors em conversas multi-turn. **Recomendação:** Revisar, pois afeta estabilidade do Codex provider.

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 3 | ✅ Saudável |
| PRs abertos (24h) | 13 | ✅ Alta atividade |
| PRs merged (24h) | 6 | ✅ Pipeline ativo |
| Releases (24h) | 0 | ⚠️ Sem releases recentes |
| Bugs críticos abertos | 2 | ⚠️ Requer atenção |
| Backlog >7 dias sem movimento | 3 | ⚠️ Monitorar |

---

**Relatório gerado em:** 2026-06-12  
**Fonte:** Dados GitHub HKUDS/nanobot (últimas 24h)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-12

---

## 1. Panorama do Dia

O Hermes Agent mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando alta vibração comunitária. **Não houve lançamentos de novas versões**, e o projeto está em fase de estabilização com múltiplas correções P1 e P2 sendo cerradas. A maioria das issues ativas concentra-se em bugs de estabilidade (comp/agent, comp/gateway, comp/cli), enquanto PRs mostram avanço em correções críticas como sync de lockfiles npm e ajustes de contexto compaction. O estado geral reflete um projeto maduro em manutenção ativa, com regressões P1 sendo tratadas proativamente.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O projeto encontra-se em período de desenvolvimento intensivo sem tags formais de versão publicadas hoje.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#44024](https://github.com/NousResearch/hermes-agent/pull/44024) | `fix: sync npm lockfile node types` | Corrige `npm ci` em atualizações — resolve dependência `@types/node` incompatível |
| [#43693](https://github.com/NousResearch/hermes-agent/pull/43693) | `feat(dashboard): enable webhook platform from the Webhooks page` | Melhora UX permitindo habilitar webhook diretamente na página de webhooks |
| [#44138](https://github.com/NousResearch/hermes-agent/issues/44138) (referenciado) | Archive path fix | Resolve PATCH endpoint para campo 'archived' — fecha #44449 |

### PRs Abertos de Destaque

| PR | Título | Componente | Prioridade |
|----|--------|------------|------------|
| [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) | `feat: add Rust-backed install manager and bootstrap orchestration` | CLI | P3 |
| [#44489](https://github.com/NousResearch/hermes-agent/pull/44489) | `fix(agent): compress long-session context on APITimeoutError recovery` | Agent | P3 |
| [#44463](https://github.com/NousResearch/hermes-agent/pull/44463) | `fix(tui): pick up config model changes in open chats` | TUI/Gateway | P2 |
| [#44464](https://github.com/NousResearch/hermes-agent/pull/44464) | `fix(tui-gateway): route /compress through command.dispatch` | TUI | P2 |
| [#42311](https://github.com/NousResearch/hermes-agent/pull/42311) | `fix(mcp): recycle idle stdio servers` | MCP | P2 |
| [#44469](https://github.com/NousResearch/hermes-agent/pull/44469) | `chore(tools): update Node.js to v26 everywhere` | Docker/Nix | P3 |
| [#44500](https://github.com/NousResearch/hermes-agent/pull/44500) | `fix(skills): let ClawHub index build walk past the 12s browse budget` | Skills | — |

**Destaque estratégico:** O PR [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) introduz um gerenciador de instalação em Rust (`apps/hermes-manager`), sinalizando evolução de arquitetura para o instalador do desktop.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Componente |
|-------|--------|-------------|------------|
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | Skills index is stale or degraded | 8 | Skills/Index |
| [#44121](https://github.com/NousResearch/hermes-agent/issues/44121) | npm ci fails on clean checkout (lockfile @types/node) | 6 | CLI/Dependencies |
| [#44242](https://github.com/NousResearch/hermes-agent/issues/44242) | ACP image content blocks dropped before API call | 4 | Agent/ACP |
| [#44072](https://github.com/NousResearch/hermes-agent/issues/44072) | kanban create --skill should validate at dispatch time | 4 | Cron |
| [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) | Ollama local models silently capped at 4096 tokens | 4 | Plugins/Ollama |
| [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) | Support local and remote Hermes backends simultaneously | 4 | Desktop |
| [#27649](https://github.com/NousResearch/hermes-agent/issues/27649) | Multiprocess logging keeps writing to rotated files | 4 | Agent |

### Análise de Demandas

**Skills Index (#38240)** lidera em comentários com 8 interações, refletindo dependência crítica do ecossistema de habilidades. A comunidade reporta degradação do índice com `github: 0 < 30` entries, indicando falha no workflow automatizado de rebuild.

**npm lockfile (#44121)** é preocupação recorrente — a dependência `@types/node@24.13.1` vs `24.13.2` causa falhas em `npm ci` em ambientes limpos, especialmente npm 11.

**Visão multimodal (#44242)** mostra problema onde blocos de imagem via ACP nunca alcançam o modelo, afetando todos os provedores independente de capacidades declaradas.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (3 bugs, todos cerrados hoje)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #42812 | Stale compaction Active Task hijacks resumed sessions | CLOSED | [#42812](https://github.com/NousResearch/hermes-agent/issues/42812) |
| #38364 | Compaction summary 'Remaining Work' expands scope of vague instructions | CLOSED | [#38364](https://github.com/NousResearch/hermes-agent/issues/38364) |
| #41607 | Compression summary stale instructions executed as current task | CLOSED | [#41607](https://github.com/NousResearch/hermes-agent/issues/41607) |

**Análise:** Os 3 bugs P1 cerrados são relacionados a **context compaction/compression**, onde resumos de sessões anteriores contaminavam sessões novas. Corrigidos em sequência, indicando esforço coordenado de estabilização do mecanismo de contexto.

### P2 — Altos (10 bugs abertos)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #44121 | npm ci fails on clean checkout | CLI | [#44121](https://github.com/NousResearch/hermes-agent/issues/44121) |
| #44242 | ACP image content blocks dropped | Agent/ACP | [#44242](https://github.com/NousResearch/hermes-agent/issues/44242) |
| #44456 | /compress returns error in Desktop TUI | TUI | [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) |
| #44117 | Cannot delete sessions in default profile | CLI | [#44117](https://github.com/NousResearch/hermes-agent/issues/44117) |
| #27250 | Docker HOME env mismatch | Docker | [#27250](https://github.com/NousResearch/hermes-agent/issues/27250) |
| #33913 | double-.hermes path mismatch + HOME leak | Docker | [#33913](https://github.com/NousResearch/hermes-agent/issues/33913) |
| #44327 | Gateway cached-agent reuse leaks _last_flushed_db_idx | Gateway | [#44327](https://github.com/NousResearch/hermes-agent/issues/44327) |
| #44471 | Dashboard file browser 500s on remote access | CLI | [#44471](https://github.com/NousResearch/hermes-agent/issues/44471) |
| #44468 | hermes send to Discord drops chunks on 429 | Gateway/Discord | [#44468](https://github.com/NousResearch/hermes-agent/issues/44468) |

**Padrões identificados:**
- **Docker/compatibilidade**: 3 issues P2 relacionadas a caminhos de container e variáveis de ambiente
- **Gateway/cache**: Reutilização de agentes cacheados pode pular rows de transcript
- **Rate limiting**: Discord send não implementa retry em 429 (Telegram tem)

### P3 — Médios (destaques)

- **#44032** — `hermes profile list` escaneia binários grandes em ~/.local/bin como texto
- **#44001** — Provider TTS Piper não tem lazy-install, falha em instalação limpa
- **#44009** — Botão "Load N more" nunca desaparece no sidebar
- **#44400** — SimpleX adapter broken after commit 0c2e81df0
- **#44497** — Agent gera respostas duplicadas no WeChat (cross-fire)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| #37876 | Support local and remote Hermes backends simultaneously | Desktop | [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) |
| #44072 | kanban create: --skill should validate against installed registry | Cron | [#44072](https://github.com/NousResearch/hermes-agent/issues/44072) |
| #43900 | Ollama context window detection (131k tokens) | Plugins/Ollama | [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) |

### PRs de Feature

| PR | Título | Componente | Link |
|----|--------|------------|------|
| #39376 | add bulk archive action for desktop sessions | Desktop | [#39376](https://github.com/NousResearch/hermes-agent/pull/39376) |
| #43693 | enable webhook platform from Webhooks page | Dashboard | [#43693](https://github.com/NousResearch/hermes-agent/pull/43693) |
| #44067 | Rust-backed install manager | CLI | [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) |
| #44410 | add optional bank_id parameter to recall/reflect/retain | Memory/Hindsight | [#44410](https://github.com/NousResearch/hermes-agent/pull/44410) |

### Sinais de Roadmap

1. **Desktop multi-backend** (#37876) — A comunidade solicita suporte simultâneo local+remoto, indicando uso híbrido
2. **Rust migration** (#44067) — Introdução de `hermes-manager` em Rust sinaliza tendência de reescrita de tooling crítico
3. **Node.js 26** (#44469) — Atualização em andamento demonstra manutenção de tooling moderno
4. **Memory banks** (#44410) — Expansão de `hindsight` tools com bank_id mostra amadurecimento de memória persistente

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Context Compaction (3 P1s fechados)**
> "After context compaction, stale instructions/tasks from the compression summary are executed as if they were the current user request" — usuários reportavam que sessões retomadas executavam tarefas antigas em vez das atuais.

**2. Docker Path Confusion**
> "Docker setup: wizard writes config + auth.json to $HERMES_HOME/.hermes/ but runtime reads $HERMES_HOME/" — usuários Docker enfrentam configuração frustrante com caminhos duplicados.

**3. npm Install Fragility**
> "npm ci fails on fully clean checkout under npm 11" — lockfile incompatível quebra builds em ambientes CI/CD limpos.

**4. Desktop UX Issues**
- "Dashboard change model selector is difficult to navigate" — scroll nesting problem
- "Cannot delete sessions in default profile" — ID não encontrado
- "New profile created but can't switch to it" — bug de criação de profile

**5. WeChat Duplicate Responses**
> "When user sends a single message, agent sometimes generates two completely independent responses" — problema de consistência em canais alternativos.

### Cenários de Uso Reportados

- **Desenvolvimento local com Ollama** — usuários rodam modelos locais e esperam context windows maiores que 4k
- **Multi-canal (Discord/Telegram/WeChat)** — adapters inconsistentes em retry e rate limit
- **Desktop em ambientes corporativos** — acesso remoto via Tailcale apresenta erros de permissão

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Esperando Ação

| Issue | Título | Idade | Link |
|-------|--------|-------|------|
| #27649 | Multiprocess logging writes to rotated files | ~26 dias | [#27649](https://github.com/NousResearch/hermes-agent/issues/27649) |
| #27250 | Docker HOME mismatch | ~27 dias | [#27250](https://github.com/NousResearch/hermes-agent/issues/27250) |
| #33913 | double-.hermes path mismatch + HOME leak | ~16 dias | [#33913](https://github.com/NousResearch/hermes-agent/issues/33913) |
| #43900 | Ollama 4096 token cap | 2 dias (P3, sem assign) | [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) |
| #44032 | Profile list scans binaries | 2 dias (P3, sem assign) | [#44032](https://github.com/NousResearch/hermes-agent/issues/44032) |

### Priorização Recomendada

1. **#27250 + #33913** — Problemas Docker relacionados podem ser resolvidos em conjunto; impactam usuários containerizados
2. **#43900** — Ollama context cap silencioso causa degradacao invisível de qualidade
3. **#44009** — Sidebar "Load N more" nunca desaparece causa confusão visual persistente
4. **#44468** — Discord rate limit sem retry pode perder mensagens em produção

---

## Métricas Resumidas (2026-06-12)

| Métrica | Valor |
|---------|-------|
| Issues ativas/abertas | 42 |
| Issues fechadas (24h) | 8 |
| PRs abertos | 45 |
| PRs merged/fechados | 5 |
| Releases | 0 |
| Bugs P1 (críticos) | 0 abertos (3 cerrados) |
| Bugs P2 (altos) | ~10 abertos |
| Bugs P3 (médios) | ~20+ abertos |
| Features em desenvolvimento | ~8 PRs |

---

*Relatório gerado automaticamente com base em dados GitHub do NousResearch/hermes-agent em 2026-06-12.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## 📅 Data de referência: 2026-06-12

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 36 PRs atualizados e 7 issues processadas. O destaque vai para a **publicação de uma nightly build (v0.2.9-nightly.20260611)**, indicando progresso contínuo em direção à próxima versão estável. A comunidade demonstra engajamento significativo com contribuições de segurança (2 CVEs addressed), features de colaboração entre agentes e múltiplas correções de bugs críticos. O volume de dependabot PRs (10) sinaliza manutenção ativa das dependências, enquanto issues de estabilidade (crashes, mensagens duplicadas) demandam atenção imediata.

---

## 2. Lançamentos

### 🆕 Nightly Build Released

| Item | Detalhes |
|------|----------|
| **Versão** | `v0.2.9-nightly.20260611.d955d5bb` |
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Unstable - Use with caution |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**Observação:** Este é um build automatizado para a tracked branch `main`, não uma release oficial. O changelog completo está disponível no link acima. Não há breaking changes documentadas para esta versão noturna.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente (20 total)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#2957](https://github.com/sipeed/picoclaw/pull/2957) | fix(channels): prevent tool_calls from being dropped during streaming | loafoe | **Crítico** - Resolve perda de mensagens tool_calls em streaming |
| [#3060](https://github.com/sipeed/picoclaw/pull/3060) | fix: use %w for error wrapping and handle json.MarshalIndent error | chengzhichao-xydt | **Stabilidade** - Melhora rastreamento de erros |
| [#3067](https://github.com/sipeed/picoclaw/pull/3067) | fix: add DmScope field to SessionConfig | SiYue-ZO | **UX** - Persiste configuração de escopo de sessão |
| [#2955](https://github.com/sipeed/picoclaw/pull/2955) | fix: verify process identity in singleton PID check | yuxuan-7814 | **Robustez** - Previne falsos positivos no singleton |
| [#2947](https://github.com/sipeed/picoclaw/pull/2947) | fix: correct claude-sonnet-4.6 model ID to use hyphens | yuxuan-7814 | **Funcionalidade** - Corrige HTTP 404 com Claude Sonnet |
| [#2934](https://github.com/sipeed/picoclaw/pull/2934) | fix(channels): allow whatsapp native mode with use_native flag | dtapps | **Funcionalidade** - Habilita modo nativo WhatsApp |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | feat(mcp): support per-request dynamic headers from channel context | loaofoe | **Feature** - Headers dinâmicos para MCP servers |
| [#3106](https://github.com/sipeed/picoclaw/pull/3106) | build(deps): bump aws-sdk-go-v2/config 1.32.17 → 1.32.25 | dependabot | **Manutenção** - Atualização segurança |
| [#3099](https://github.com/sipeed/picoclaw/pull/3099) | build(deps): bump golang.org/x/sync 0.20.0 → 0.21.0 | dependabot | **Manutenção** - Sync library update |
| [#3098](https://github.com/sipeed/picoclaw/pull/3098) | build(deps): bump modelcontextprotocol/go-sdk 1.5.0 → 1.6.1 | dependabot | **Manutenção** - MCP SDK update |

**Destaque de Progresso:** A correção do bug de tool_calls (#2957) representa uma melhoria significativa de estabilidade para integrações via pico WebSocket channel, resolvendo um problema que causava perda de mensagens em requisições consecutivas.

---

## 4. Temas Quentes da Comunidade

### 🔥 Issues/PRs com Maior Engajamento

| # | Tipo | Título | Comentários | Reações | Tendência |
|---|------|--------|-------------|---------|-----------|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Issue | [BUG] list_dir returns "invalid argument" on Windows | 5 | 👍 1 | ⚠️ Ativa - Problema recorrente multi-plataforma |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | PR | Feat/agent collaboration | - | 0 | 🚀 Em revisão - Feature importante |
| [#2954](https://github.com/sipeed/picoclaw/issues/2954) | Issue | 不支持32位Android系统 | 3 | 0 | ✅ Closed (stale) |
| [#2958](https://github.com/sipeed/picoclaw/issues/2958) | Issue | tool_calls messages dropped during consecutive requests | 2 | 0 | ✅ Closed - Corrigido em #2957 |
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Issue | Spawn duplicate messages bug | 1 | 0 | ⚠️ Ativa - Bug de duplicação em subagentes |

### Análise das Demandas Principais

**#2472 - Problema de Compatibilidade Windows:**
A comunidade reporta falha de `list_dir` no Windows devido a separadores de path (`\`) não compatíveis com `fs.FS`/`os.Root` do Go. Este é um bug de portabilidade que afeta usuários Windows e demonstra necessidade de normalização de paths em ferramentas de arquivo.

**#2937 - Agent Collaboration Feature:**
PR aberto com foco em "first-class internal Agent Collaboration Bus", introduzindo:
- Caixas de correio por agente
- Threads de colaboração com histórico isolado
- Envelopes de mensagens estruturados
- Controle de permissões

Este PR representa uma evolução arquitetural significativa para cenários multi-agente.

---

## 5. Bugs e Estabilidade

### 🐛 Issues Abertas (3 ativas)

| Severidade | # | Título | Status | Prioridade |
|------------|---|--------|--------|------------|
| 🔴 **Alta** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Spawn duplicate messages - ForUser field cause duplicate push | OPEN | Crítica |
| 🟡 **Média** | [#3108](https://github.com/sipeed/picoclaw/issues/3108) | Image description hallucination when model lacks vision | OPEN | Alta |
| 🟡 **Média** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | list_dir "invalid argument" on Windows | OPEN | Média |

### 🔒 Security Issues Addressed

| # | Título | CVSS | Status | Remediation |
|---|--------|------|--------|-------------|
| [#3080](https://github.com/sipeed/picoclaw/issues/3080) | allowed_cidrs bypass via loopback proxy | - | CLOSED | Precisa revisão de código |
| [#3077](https://github.com/sipeed/picoclaw/issues/3077) | SSRF bypass via 198.18.0.0/15 IPv4 literal | - | CLOSED | Precisa patch |

**Análise:** Dois CVEs de segurança foram identificados e fechados nas últimas 24h. O bypass de `allowed_cidrs` via loopback proxy e o SSRF via range especial 198.18.0.0/15 indicam vulnerabilidades em controles de acesso network. **Recomendação:** Verificar se patches foram aplicados na nightly build.

### 📊 Métricas de Estabilidade

```
Issues abertas (ativas): 3
Issues fechadas (24h): 4
Tempo médio de resolução: ~2 dias (baseado em stale closure)
Taxa de resolução: 57% (4/7)
```

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ PRs Abertos com Feature Requests

| # | Título | Autor | Complexidade | Status |
|---|--------|-------|--------------|--------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Feat/agent collaboration | afjcjsbx | Alta | Em revisão |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | feat(mcp): dynamic headers per-request | loafoe | Média | Merged |

### 🔧 Fixes Pendentes

| # | Título | Impacto |
|---|--------|---------|
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) | fix(mcp): reject unknown pre-positional flags in add | Corrige parsing de argumentos MCP |
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | fix: preserve channel enabled state when merging security.yml | Corrige sobrescrita de config |

### 📈 Sinais de Roadmap

1. **Colaboração Multi-Agente:** PR #2937 indica direção clara para arquitetura de agentes colaborativos
2. **Suporte a 32-bit Android:** Issue #2954 (closed stale) sugere demanda por portabilidade mobile
3. **Melhorias de MCP:** Atualização para SDK 1.6.1 + parsing fix indica maturidade do suporte MCP

---

## 7. Resumo de Feedback dos Usuários

### 💬 Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Plataforma Windows** | Falha em operações de arquivo por incompatibilidade de paths | 🔴 Alta |
| **Mensagens Duplicadas** | Subagentes spawn geram notificação duplicada (bruta + formatada) | 🔴 Alta |
| **Alucinação Visual** | Descrição de imagens falha quando modelo não tem suporte a visão | 🟡 Média |
| **Canal WebSocket** | tool_calls perdidos em streaming consecutivos | 🟡 Média (corrigido) |

### 🎯 Cenários de Uso Identificados

- **Integração WhatsApp:** Usuários configuram canais nativos com `use_native: true`
- **Multi-plataforma:** Demanda por suporte Windows e Android Termux
- **Subagentes Assíncronos:** Spawn para tarefas paralelas em canais como Feishu/Telegram
- **Segurança Empresarial:** Configuração de `allowed_cidrs` para deployments restritos

### 📉 Satisfação/Insatisfação

| Aspecto | Sentimento | Base |
|---------|------------|------|
| Funcionalidade core de chat | 🟢 Positivo | Issues resolvidas rapidamente |
| Suporte MCP | 🟢 Positivo | SDK atualizado, headers dinâmicos implementados |
| Compatibilidade Windows | 🔴 Negativo | Bug #2472 aberto há ~2 meses |
| Mensagens duplicadas em spawn | 🔴 Negativo | Issue #3094 recém-reportada |

---

## 8. Backlog que Merece Atenção

### ⏰ Issues Sem Resposta há Tempo

| # | Título | Criado | Atualizado | Idade | Prioridade |
|---|--------|--------|------------|-------|------------|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Windows path separator bug | 2026-04-10 | 2026-06-11 | ~63 dias | ⚠️ Alta |

### 📋 PRs Abertos há >5 dias sem merge

| # | Título | Criado | Age | Blocker |
|---|--------|--------|-----|---------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Feat/agent collaboration | 2026-05-24 | 18 dias | Em revisão |
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | fix: channel enabled state | 2026-05-27 | 15 dias | Pending review |
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) | fix(mcp): argument parsing | 2026-06-07 | 5 dias | Pending review |

### 🎯 Recomendações

1. **Priorizar #2472** - Bug Windows com 63 dias de idade, afeta portabilidade do projeto
2. **Revisar #2937** - Feature de colaboração multi-agente é strategic para roadmap
3. **Verificar patches de segurança** - Confirmar que CVEs #3080 e #3077 foram addressados no código

---

## 📊 Resumo Executivo

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 3 | ➡️ Estável |
| PRs abertos | 16 | ➡️ Normal |
| Releases (24h) | 1 nightly | 🚀 Ativo |
| Security patches | 2 | ✅ Addressed |
| Dependabot PRs | 10 | 🔄 Rotina |

**Veredicto:** PicoClaw demonstra **saúde boa** com atividade intensa de desenvolvimento. A comunidade está engajada com reports de bugs detalhados e contribuições de features. Principais pontos de atenção: bug de compatibilidade Windows pendente e implementação de patches de segurança. A feature de collaboration bus (#2937) promete evolução significativa na arquitetura multi-agente.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-12

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 12 de junho de 2026, com 31 issues e 50 PRs atualizados nas últimas 24 horas. O foco predominante continua na iteração do **Reborn WebUI v2** e na **integração com NEAR AI**, com diversas correções de bugs UI/UX e melhorias na experiência de setup local. Não houve lançamentos de novas versões hoje. A saúde geral do projeto permanece ativa, embora seja observada uma **falha recorrente no E2E noturno** (issue #4108) e múltiplos bugs de estabilidade no frontend. A equipe demonstra forte ritmo de merge, com 3 PRs recentemente fechados e vários de grande porte em revisão.

---

## 2. Lançamentos

**Nenhum novo release hoje.** O último release registrado continua sendo `ironclaw 0.29.1` (PR #3708), lançado em 16 de maio de 2026, contendo mudanças em `ironclaw_common` (breaking changes 0.4.2→0.5.0) e `ironclaw_skills` (breaking changes 0.3.0→0.4.0).

---

## 3. Progresso do Projeto

Três PRs significativos foram fechados ou merged nas últimas 24h:

| PR | Descrição | Tamanho | Impacto |
|----|-----------|---------|---------|
| [#4744](https://github.com/nearai/ironclaw/pull/4744) | Gate extension activation e hardening GSuite OAuth runtime | XL | **Crítico** — consolida ativação de extensões e reuso de OAuth, permitindo conexão com GitHub, Gmail, Google Drive |
| [#4753](https://github.com/nearai/ironclaw/pull/4753) | Slack gate routing: conversation-keyed routes para "approve" resolver (Phase B) | XL | **Alto** — corrige falha de `MissingGate`/`BindingRequired` ao aprovar via Slack |
| [#4781](https://github.com/nearai/ironclaw/pull/4781) | Adiciona comandos autônomos Reborn (build/deslop/review) | XS | **Docs** — port de workflow de orchard para IronClaw |

### PRs abertos de destaque em revisão:

- **[#4772](https://github.com/nearai/ironclaw/pull/4772)** (XL) — Batch de bugs do Reborn WebChat v2 UI + correção do model picker da NEAR AI (#4703)
- **[#4760](https://github.com/nearai/ironclaw/pull/4760)** (XL) — Wiring da página Logs do WebUI v2 a fonte real de logs do operador
- **[#4779](https://github.com/nearai/ironclaw/pull/4779)** (XL) — Expõe alvos de delivery outbound ao modelo Reborn
- **[#4672](https://github.com/nearai/ironclaw/pull/4672)** (L) — Suporte a uploads de anexos inline no WebChat v2 (#4644)
- **[#4769](https://github.com/nearai/ironclaw/pull/4769)** (L) — 22 novos testes e2e determinísticos no RebornBinaryE2EHarness

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: **#3036** — Configuration-as-Code for IronClaw Reborn
- **7 comentários, 1 reação 👍**
- Epic com标签 `suggested_P2, reborn`
- **Problema central:** Operadores precisam editar manualmente `.env`, workspace docs, settings JSON e flags — sem schema, diff, audit trail ou reprodutibilidade
- **Demanda:** Tenant blueprints e use-case harnesses declarativos
- 📎 [Issue #3036](https://github.com/nearai/ironclaw/issues/3036)

### NEAR AI — Issues agrupadas (sugerem onboarding problemático):
| Issue | Título | Status |
|-------|--------|--------|
| [#4766](https://github.com/nearai/ironclaw/issues/4766) | Chat runtime não usa credenciais salvas após restart | CLOSED |
| [#4703](https://github.com/nearai/ironclaw/issues/4703) | Model picker salva display name em vez de model ID | OPEN |
| [#4705](https://github.com/nearai/ironclaw/issues/4705) | NEAR AI SSO falha em ambiente local | CLOSED |
| [#4700](https://github.com/nearai/ironclaw/issues/4700) | Habilitar NEAR AI MCP automaticamente | CLOSED ✅ |

**Análise:** A equipe fechou rapidamente múltiplos problemas de configuração NEAR AI, indicando priorização ativa. A issue #4700 (auto-enable MCP) foi resolvida, mas #4703 e #4705 indicam gaps no fluxo de setup.

---

## 5. Bugs e Estabilidade

### 🔴 Bugs de Alta Prioridade

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#4783](https://github.com/nearai/ironclaw/issues/4783) | WASM extensions credential-less falham com "network" obligation error antes da execução | Alta | OPEN |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agente para após falhas repetidas de tools ao invés de recuperar | Alta | OPEN |
| [#4751](https://github.com/nearai/ironclaw/issues/4751) | Requisições grandes falham com "provider tool arguments exceed 16384 bytes" | Alta | OPEN |

### 🟡 Bugs de Média Prioridade

| Issue | Título | Área | Status |
|-------|--------|------|--------|
| [#4766](https://github.com/nearai/ironclaw/issues/4766) | Credenciais NEAR AI não persistem após restart | Auth | CLOSED ✅ |
| [#4705](https://github.com/nearai/ironclaw/issues/4705) | NEAR AI SSO falha com `Invalid frontend_callback` | Auth | CLOSED ✅ |
| [#4759](https://github.com/nearai/ironclaw/issues/4759) | Workspace path duplicado ao usar caminhos relativos | WebUI | OPEN |
| [#4762](https://github.com/nearai/ironclaw/issues/4762) | Ordering inconsistente após falha de workflow | WebUI | OPEN |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Negar shell approval deixa tool invocation pendente sem feedback | UX | OPEN |
| [#4770](https://github.com/nearai/ironclaw/issues/4770) | Tool activity para de atualizar após refresh (SSE reconnect?) | WebUI | OPEN |

### 🔵 Falha de CI Recorrente

| Issue | Título | Detalhes |
|-------|--------|----------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | Workflow `Nightly E2E` falhou em `E2E (extensions)` — reportado há 15 dias |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics e Features Estratégicas

| Issue | Título | Escopo | Prioridade |
|-------|--------|--------|------------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | **EPIC: Configuration-as-Code** — tenant blueprints e use-case harnesses | Infraestrutura | P2 |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) | **EPIC: Automated QA** — hermetic + fixture + e2e + live para Reborn binary | QA/Testing | — |
| [#4776](https://github.com/nearai/ironclaw/issues/4776) | Global "Always Allow" setting para tools elegíveis | UX/Permissões | — |
| [#4692](https://github.com/nearai/ironclaw/issues/4692) | **Tracking: Local Testing Findings** — problemas de startup, config, first-run | UX/DX | — |
| [#4785](https://github.com/nearai/ironclaw/pull/4785) | (PR) Reborn persistent tenant sandbox & agent-built extension promotion | Produção | XS |

### Sinais de Roadmap Inferidos:
1. **Produtização do Reborn** — Issues #4551, #4619, #4615, #4620 indicam trabalho ativo em PostgreSQL em produção e gates de cutover
2. **Automação QA** — PR #4769 (22 testes) + PR #4773 (record/replay) mostram investimento em testing deterministic
3. **Slack como ProductAdapter** — Issues #4753, #4777, #4778, #4780, #4782 indicam arquitetura de Slack como extensão nativa
4. **Outbound Delivery** — Exposição de alvos de delivery ao modelo (#4779, #4780) sugere evolução na UX de automações

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Issues |
|-----------|-----------|--------|
| **Setup/local dev problemático** | Configuração de credenciais NEAR AI é confusa e não persiste | #4766, #4705, #4703, #4700 |
| **WebUI instável** | Refresh causa perda de estado, tool activity para, SSE reconnect falho | #4770, #4764, #4762 |
| **Workspace não descobrível** | Arquivos criados não aparecem na WebUI — usabilidade ruim | #4750 |
| **Aprovação de tools confusa** | Modal de approval não mostra contexto suficiente para `builtin.http` | #4701 |
| **Logs vazios** | Página de logs do WebUI v2 não mostra dados (wire não conectado) | #4758 |

### Cenários de Uso Mencionados
- **Automação de triggers** — usuários esperam criar rotinas via WebUI, ver runs e aprobar no Slack
- **Onboarding de primeira vez** — fluxo welcome → NEAR AI setup precisa ser mais fluido
- **Files workspace** — persistência e descoberta de arquivos criados pelo agente

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem comentários da equipe)

| Issue | Título | Criado | Atualizado | Observação |
|-------|--------|--------|------------|------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed | 2026-05-27 | 2026-06-11 | **Falha recorrente há 15 dias** — 0 comentários |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | EPIC: Configuration-as-Code | 2026-04-28 | 2026-06-11 | Epic aberto há 44 dias — 7 comentários |
| [#4699](https://github.com/nearai/ironclaw/issues/4699) | Fix NEAR AI MCP fallback web search tool name | 2026-06-10 | 2026-06-11 | Closed, mas pode ter regressão |
| [#4595](https://github.com/nearai/ironclaw/issues/4595) | Runtime readiness and status APIs | 2026-06-09 | 2026-06-11 | Closed, verificar se não reintroduziu bugs |
| [#4593](https://github.com/nearai/ironclaw/issues/4593) | Effective config API | 2026-06-09 | 2026-06-11 | Closed, mesma verificação |

### Recomendações Prioritárias

1. **🔴 Resolver #4108** — Nightly E2E quebrado impacta confiança no CI; sem comentários há 15 dias
2. **🟡 Avançar #3036** — Epic de Configuration-as-Code é demanda estratégica antiga; definir timeline
3. **🟡 Investigar #4783** — Bug de WASM com "network obligation" pode bloquear extensões de terceiros
4. **🟢 Padronizar resposta** — Adotar política de "primeira resposta em 48h" em issues com标签 `bug` ou `enhancement`

---

## Métricas de Atividade (últimas 24h)

```
Issues:     31 atualizadas (18 open | 13 closed)
PRs:        50 atualizadas (25 open | 25 merged/closed)
Releases:   0
Comment activity: Issue #3036 lidera com 7 comentários
```

**Saúde geral:** 🟡 Em desenvolvimento ativo, com alta carga de bugs UI/UX no Reborn WebUI v2 e investimento em infraestrutura de testing e automação. Ausência de releases e falha E2E persistente requerem atenção.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw)
## Data: 2026-06-12

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw apresenta **alta atividade** no período analisado, com 29 issues e 40 PRs atualizados nas últimas 24h. Dois hotfixes rápidos (v1.1.11.post1 e .post2) foram publicados para corrigir problemas críticos de inicialização — particularmente o bug de regressão do OpenSSL 3.5 que impedia o desktop Windows de iniciar. A comunidade demonstra engajamento significativo, com issues técnicas detalhadas e PRs de primeira contribuição (i18n pt-BR, UI redesign, historian agent). O volume de PRs abertos (21) sugere um pipeline saudável, mas a proporção de bugs críticos relacionados ao desktop (Tauri/Windows) indica necessidade de atenção na qualidade de releases.

---

## 2. Lançamentos

### v1.1.11.post2
**Data:** 2026-06-11  
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post2

| Tipo | Mudança |
|------|---------|
| Style | Truncate tool card titles to single line with ellipsis |

- Correção visual menor no Console UI
- Nenhum breaking change ou nota de migração

### v1.1.11.post1
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post1

| Tipo | Mudança |
|------|---------|
| Chore | Bump version to 1.1.11.post1 |
| Revert | Revert "fix(pack): compile-check discord after conda-unpack" |

- Revert de uma mudança de build para resolver problemas de instalação
- Released em caráter de hotfix urgente

---

## 3. Progresso do Projeto

### PRs Merged/Closed (19 total)

| # | Título | Impacto |
|---|--------|---------|
| [#5133](https://github.com/agentscope-ai/QwenPaw/pull/5133) | feat(ui): AionUi design language to Console layout | UI/UX — Novo visual sem mudança de stack |
| [#5134](https://github.com/agentscope-ai/QwenPaw/pull/5134) | feat(.claude): qwenpaw-changelog historian agent | DevOps — Agente de documentação automática no pipeline |
| [#5136](https://github.com/agentscope-ai/QwenPaw/pull/5136) | feat(i18n): tradução pt-BR completa | Internacionalização — Português do Brasil |
| [#5119](https://github.com/agentscope-ai/QwenPaw/pull/5119) | style: truncate tool card titles | UI — Melhor legibilidade de ferramentas |
| [#5118](https://github.com/agentscope-ai/QwenPaw/pull/5118) | chore: add news for agentscope platform | Infraestrutura |
| [#5124](https://github.com/agentscope-ai/QwenPaw/pull/5124) | chore: bump version to 1.1.11.post2 | Release management |

**Destaque:** O PR #5136 (pt-BR translation) sinaliza expansão de mercado para região brasileira, enquanto #5134 introduz automação de documentação via agente.

### PRs Abertos em Review (14 items críticos)

| # | Título | Área | Status |
|---|--------|------|--------|
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | Agent OS Driver — unified abstraction (MCP/A2A/ACP) | Core | Under Review |
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | Runtime 2.0 modular architecture | Core | Under Review |
| [#5117](https://github.com/agentscope-ai/QwenPaw/pull/5117) | Security: block agent workspaces in auto-loaded dirs | Security | Open |
| [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) | Security: isolate keychain master key per install | Security | Under Review |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | datapaw plugin: data-analysis with 12 BI skills | Plugin | Under Review |
| [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | per-turn token and context usage popover | Console | Open |
| [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) | group langfuse observations by agent loop | Observability | Open |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | tauri auto updater | Desktop | Open |

**Análise:** A arquitetura Runtime 2.0 (#5078) e o Agent OS Driver (#5067) representam evoluções arquiteturais significativas. Os PRs de segurança (#5117, #5028) são urgentes para proteção do workspace.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| #5064 | Timer task não dispara (由agnet) | Bug | 8 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5064) |
| #5106 | Tauri SSL cert error + infinite process → 黑屏 | Bug | 7 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5106) |
| #4989 | Qwen 3.6-27B local não responde após upgrade | Bug | 6 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4989) |
| #3817 | Long-term memory vector model config reset | Question | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3817) |
| #5086 | OpenSSL 3.5 regression — Desktop won't start | Bug | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5086) |
| #5095 | Windows v1.1.11 install won't launch | Bug | 5 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5095) |

**Análise de Demandas:**

1. **Desktop Tauri (Windows) instabilidade** — Multiple issues (#5106, #5086, #5095) sobre falhas de inicialização, SSL certificate errors, e processos infinitos causando memory exhaustion. Prioridade **crítica**.

2. **Integração com modelos locais** — Usuários enfrentam regressões ao usar Ollama/vLLM com versões recentes (1.1.9/1.1.10/1.1.11). Issue #4989 mostra que a versão 1.1.5 funcionava, mas versões posteriores não.

3. **Persistência de configurações de memória vetorial** — Issue #3817 demonstra que configurações resetam após container restart, indicando problema de state management.

4. **Timer/scheduled tasks** — Funcionalidade core quebrada (#5064), afeta fluxo de automação de agentes.

### PRs com Maior Potencial de Impacto

| # | Título | Comentários | Link |
|---|--------|-------------|------|
| #5088 | Governance & sandbox interface | 0 (mas estratégico) | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5088) |
| #5067 | Agent OS Driver (MCP/A2A/ACP) | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5067) |
| #5103 | Chat queue + token stats (OpenClaw-like) | 2 (👍 1) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5103) |

**Sinal de mercado:** Comparação direta com OpenClaw (#5103) indica que usuários avaliam QwenPaw contra alternativas e solicitam features de UX (queue system, token tracking).

---

## 5. Bugs e Estabilidade

### Severidade: Crítica (Impacto em produção)

| # | Título | Status | Link |
|---|--------|--------|------|
| #5086 | OpenSSL 3.5 regression — Desktop won't start | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5086) |
| #5095 | Windows v1.1.11 won't launch | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5095) |
| #5106 | Tauri SSL cert + infinite process → 黑屏 | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5106) |

**Status:** Corrigidos via v1.1.11.post1/.post2, mas indicam necessidade de regressão testing mais robusto.

### Severidade: Alta (Funcionalidade core comprometida)

| # | Título | Status | Link |
|---|--------|--------|------|
| #5064 | Timer task não dispara | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5064) |
| #4989 | Local model (vLLM) não responde após upgrade | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4989) |
| #3817 | Memory vector config reset on restart | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3817) |

### Severidade: Média

| # | Título | Status | Link |
|---|--------|--------|------|
| #5098 | Memory search UI não mostra resultados | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5098) |
| #5108 | Ollama model não aparece no console chat | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5108) |
| #5102 | Anexos não baixam (md preview, zip error) | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5102) |
| #5053 | 4 sessões → frontend lag >10s | CLOSED | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5053) |

### Severidade: Segurança

| # | Título | Status | Link |
|---|--------|--------|------|
| #5090 | Tool Guard pode ser bypassado via Python script | OPEN | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5090) |
| #5117 | Agent workspace pode ser placed em dirs auto-loaded | OPEN (PR #5117) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5117) |
| #5028 | Keychain master key não isolado por install | OPEN (PR #5028) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5028) |

**Análise:** A vulnerabilidade #5090 é particularmente preocupante — Tool Guard (proteção de arquivos) é bypassado via subprocess Python. Requer correção urgente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alto Engajamento

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #5103 | Chat queue + token stats (OpenClaw-like) | Requesting conversation queue, token consumption stats, accurate timestamps | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5103) |
| #4887 | DingTalk custom endpoint support | Enterprise/private deployment support para DingTalk | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4887) |
| #5063 | Headroom context compression integration | Integrar Headroom para 60-95% redução de tokens | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5063) |

### Features em PR

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #5130 | Per-turn token/context usage popover | Visibilidade de consumo | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5130) |
| #5116 | Configurable chat interaction modes | Interrupt, steering, queueing | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5116) |
| #5110 | Quote/Reference text from responses | Follow-up context (like Perplexity) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5110) |
| #5107 | Collapse Tool Guard approval block | UX after approval decision | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5107) |
| #5131 | Code completion in Coding mode | Dev productivity | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5131) |

### Arquitetura/Infraestrutura (PRs em review)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #5067 | Agent OS Driver (MCP/A2A/ACP unified) | Modularização de capabilities externas | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5067) |
| #5078 | Runtime 2.0 modular architecture | Tool coordination, testability | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5078) |
| #4622 | DataPaw plugin (12 BI skills) | Domínio vertical analytics | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4622) |

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-12

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém um ritmo de atividade intenso, com **48 issues e 50 PRs atualizados nas últimas 24 horas**, embora nenhum lançamento formal tenha sido realizado no período. A comunidade demonstra engajamento significativo em bugs críticos — incluindo falhas S1 no delegate agentic mode e problemas persistentes no web dashboard — enquanto funcionalidades de alto impacto como o "Dream Mode" e o sistema de plugins OCI geram discussão substancial. O período reflete um projeto em fase ativa de estabilização e hardening, com foco em segurança, usabilidade e experiência do usuário.

---

## 2. Lançamentos

**Nenhum novo release** foi publicado nas últimas 24 horas. O último release marcado é a versão beta `v0.8.0-beta-1`, referenciada em múltiplos bugs reportados.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) | feat(plugins): add office-tools WASM plugin for Office document extraction | Adiciona plugin `office_read` para DOCX/XLSX/PPTX → text/Markdown |
| [#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267) | feat(config): per-field editing for [[mcp.servers]] via #[natural_key] | Permite edição granular de servidores MCP via UI web e TUI |
| [#7463](https://github.com/zeroclaw-labs/zeroclaw/pull/7463) | fix(runtime): use agent_workspace_dir for load_skills_for_agent calls | Corrige loading silencioso de skills em workspaces de agentes |
| [#7206](https://github.com/zeroclaw-labs/zeroclaw/pull/7206) | fix(tools/calculator): reject factorial inputs above u128-safe max | Previne overflow em cálculos de fatorial |
| [#7510](https://github.com/zeroclaw-labs/zeroclaw/pull/7510) | fix(quickstart): pre-seed --api-key under snake_case api_key | Corrige flag de API key em quickstart |
| [#7502](https://github.com/zeroclaw-labs/zeroclaw/pull/7502) | fix(docs): polish localized docs chrome | Melhora renderização de docs com fallbacks CJK |
| [#7501](https://github.com/zeroclaw-labs/zeroclaw/pull/7501) | Track E: close gate with real verification | Adiciona verifiers nomeados (git_clean, tests_pass) com timeout e correção TOCTOU |

### PRs Abertos em Destaque

| PR | Título | Status |
|----|--------|--------|
| [#7519](https://github.com/zeroclaw-labs/zeroclaw/pull/7519) | fix(config): persist [[mcp.servers]] per-field edits via natural-key dirty-path walker | Bug fix crítico para persistência de edits em array |
| [#7517](https://github.com/zeroclaw-labs/zeroclaw/pull/7517) | fix(runtime/subagent): inherit ACP session cwd into spawn_subagent and delegate | Corrige jailing de subagentes ao workspace incorreto |
| [#7515](https://github.com/zeroclaw-labs/zeroclaw/pull/7515) | feat(zerocode): improve session controls and provider diagnostics | Melhorias de UX em controles de sessão e diagnóstico |
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | feat(rfc-6969): per-turn output routing via send_via + voice delivery fixes | Implementação de RFC para roteamento de saída por canal |
| [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) | feat(providers): add tls_ca_cert_path support for custom inference providers | Suporte a PKI privada para TLS em provedores customizados |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | [Bug]: Web dashboard is still not available | **30** | 0 |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | [Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning | **16** | 0 |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | [Feature]: Provide a "full" docker image | **13** | 3 |
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | [Bug]: delegate agentic mode rejects empty risk_profile.allowed_tools | **7** | 0 |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | gateway: silent-fallback hardening | **6** | 0 |

### Análise dos Temas

**1. Web Dashboard Indisponível (#4866)** — Com 30 comentários, este é o tema mais debatido. Usuários enfrentam mensagens persistentes solicitando build manual (`cd web && npm ci && npm run build`), indicando uma barreira significativa para onboarding. A severidade é S1 (workflow blocked).

**2. Dream Mode (#5849)** — Proposta de recurso para consolidação periódica de memória e aprendizado reflexivo durante períodos idle. Gerou 16 comentários, indicando demanda por funcionalidades avançadas de memória de longo prazo.

**3. Docker Image Completo (#3642)** — 13 comentários e 3 reações. A demanda por uma imagem Docker com todos os feature flags habilitados (ex: WhatsApp) reflete necessidade de redução de barreira de entrada para usuários não-técnicos.

**4. Delegate Agentic Mode (#7470)** — Bug de segurança crítico (S1) onde `risk_profile.allowed_tools` vazio bloqueia setups multi-agente práticos. Require atenção imediata.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

| Severidade | Descrição | Issue | Status |
|------------|-----------|-------|--------|
| **S0** (data loss/security) | `reasoning_content` não propagado em loops de tool-call com Xiaomi thinking mode | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | OPEN, blocked |
| **S1** (workflow blocked) | Web dashboard não disponível | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | CLOSED |
| **S1** | Delegate agentic mode rejeita `risk_profile.allowed_tools` vazio | [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | OPEN |
| **S1** | `tool_search` não está em `default_auto_approve` → deferred_loading silencia 120s | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | CLOSED |
| **S1** | `max_tool_iterations` em `[runtime_profiles.*]` não tem efeito | [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | CLOSED |
| **S1** | `mcp.deferred_loading` default `true` quebra tool calling para maioria dos LLMs | [#6874](https://github.com/zeroclaw-labs/zeroclaw/issues/6874) | CLOSED |
| **S1** | `mcp.enabled` default `false` silencia MCP mesmo com `[[mcp.servers]]` configurado | [#6873](https://github.com/zeroclaw-labs/zeroclaw/issues/6873) | CLOSED |
| **S1** | `ToolAccessPolicy` não aplicado a eager built-in tools | [#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959) | CLOSED |
| **S2** (degraded) | Disabled memory ainda produz entries | [#6871](https://github.com/zeroclaw-labs/zeroclaw/issues/6871) | CLOSED |
| **S2** | Locale selection não persiste até restart | [#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400) | CLOSED |
| **S2** | Quickstart success message usa comando inválido | [#7506](https://github.com/zeroclaw-labs/zeroclaw/issues/7506) | CLOSED |

### Padrões Identificados

1. **Defaults problemáticos**: Múltiplos bugs envolvem configurações default que surpresa usuários (`mcp.enabled=false`, `mcp.deferred_loading=true`, `max_tool_iterations` no lugar errado).
2. **Tool calling em loop**: Issues de loop infinito em Android/Termux e problemas com deferred loading.
3. **Segurança em delegate**: O sistema de delegate agentic apresenta lacunas em `risk_profile`.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Discussão

| Feature | Descrição | Issue | Prioridade |
|---------|-----------|-------|------------|
| **Dream Mode** | Consolidação periódica de memória + aprendizado reflexivo durante idle | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | P2, high risk |
| **Full Docker Image** | Imagem com todos feature flags habilitados | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | P2, medium risk |
| **Pre-turn Routing Intent Extraction** | Extração leve de intent antes da chamada LLM principal | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | P2, high risk |
| **Native Dynamic-Library Plugin System** | RFC para sistema de plugins via dynamic libraries | [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) | P2, high risk |
| **OCI-Compliant Container Registries** | Armazenamento de plugins WASM via OCI registries | [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | Enhancement |
| **Persist Cached Input Tokens** | Inclusão de cached tokens em cost accounting | [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) | P2, high risk |
| **TUI ACP Bridge** | Camada de conexão TUI ↔ daemon via RPC Unix socket | [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) | P2, high risk |
| **Cross-platform Clippy Coverage** | CI não-obrigatório para lint em macOS/Windows | [#7486](https://github.com/zeroclaw-labs/zeroclaw/issues/7486) | P2, high risk |
| **Alias Renaming** | Permitir renomear aliases na TUI | [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) | P2, medium risk |

### Sinais de Roadmap

- **Extensibilidade**: Forte demanda por sistemas de plugins (OCI, dynamic libraries, WASM) — indica direção para ecossistema.
- **Memória e cognition**: "Dream Mode" sugere ambição de capacidades agentivas mais sofisticadas.
- **Observabilidade**: Feature de cached tokens + cost accounting indica foco em controle de custos.
- **Multi-plataforma**: Clippy cross-platform e issues Android mostram expansão de targets.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Barreira de entrada alta**: Usuários não-técnicos enfrentam dificuldades com feature flags desabilitados por default, particularmente MCP e WhatsApp. Issue [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) destaca necessidade de imagem "full" Docker.

2. **Configuração confusa**: Múltiplos bugs relacionados a defaults não intuitivos — `mcp.enabled`, `mcp.deferred_loading`, localização de `max_tool_iterations`. Usuários reportam comportamentos silenciosos onde funcionalidades não funcionam sem feedback claro.

3. **Web Dashboard quebrado**: O dashboard web apresenta crashes (JSON.parse errors) e mensagem persistente de build necessário, afetando experiência de usuário não-terminal.

4. **Loop infinito em Android**: Agentes entram em loops infinitos em Termux/Android, impedindo uso prático mobile.

5. **Onboarding degradado**: Quickstart mostra comando inválido pós-execução, criando confusão inicial.

### Cenários de Uso Reportados

- **Multi-agente delegation**: Setup de reviewer/research com agentes delegados bloqueado por bugs de `risk_profile`.
- **Llama-server integration**: Usuários de modelos auto-hospedados enfrentam erros de provider.
- **Office document processing**: Demanda por extração de texto de DOCX/XLSX/PPTX (endereçada por [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454)).
- **Cross-channel routing**: RFC #6969 para roteamento por canal (voice, Telegram, etc.).

### Satisfação/Insatisfação

- **Positivo**: Engagement ativo da comunidade (30+ comentários em issues), rápida resposta a PRs críticos.
- **Negativo**: Bugs de estabilidade em funcionalidades core (delegate, MCP, dashboard) geram frustração. Documentation insuficiente sobre defaults e configuração.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Bloqueadas

| Issue | Título | Motivo de Atenção |
|-------|--------|-------------------|
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | Agent enters infinite tool-call loop on Termux/Android | S1, `needs-author-action`, sem resposta significativa |
| [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | Cannot use services provided by llama-server | S1, `needs-author-action`, `r:needs-repro` |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | reasoning_content not passed back in Xiaomi thinking mode | S0 (data loss), `needs-author-action` |
| [#6719](https://github.com/zeroclaw-labs/zeroclaw/issues/6719) | fix(runtime,channels): persist model_switch across turns | S1, `needs-author-action`, `stale-candidate` |
| [#6630](https://github.com/zeroclaw-labs/zeroclaw/issues/6630) | fix(channels/orchestrator): keep system prompt byte-stable | `needs-author-action`, `stale-candidate` |
| [#6667](https://github.com/zeroclaw-labs/zeroclaw/issues/6667) | feat(skills): background review fork + skill_manage tool | `needs-author-action`, XL size |

### Issues com Labels de Governança

| Issue | Título | Labels |
|-------|--------|--------|
| [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) | TUI ACP Bridge | `status:no-stale` |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | gateway: silent-fallback hardening | `status:no-stale` |
| [#6871](https://github

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*