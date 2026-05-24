# Resumo diário do ecossistema de agentes de IA 2026-05-25

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-05-24 20:49 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-25

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** nas últimas 24h, com um ciclo de desenvolvimento ativo marcado pelo fechamento de uma PR significativa de refatoração (#881) e uma issue aberta com proposta de feature. O volume de atividade indica continuação da execução técnica do roadmap, sem bloqueios aparentes. A base de código mantém sua健康状况 estável, sem relatórios de bugs críticos ou regressões no período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o último período analisado. Equipe segue em ciclo de desenvolvimento interno antes do próximo release tag.

---

## 3. Progresso do Projeto

### PR Merged/Closed

| #881 | **refactor(http): remove runtime curl subprocesses** | `[CLOSED]` |
|------|---------------------------------------------------|------------|
| **Autor:** ncode | **Criado:** 2026-05-01 | **Merged:** 2026-05-24 |

**Impacto:** Refatoração de grande escala que substitui helpers HTTP baseados em `curl` por wrappers nativos `std.http` do Zig. Abrange:

- Providers, channels, gateway, tools, memory API, update, voice e paths SSE
- Renomeação de helpers e erros de `Curl*` para `Http*`
- **Boundary:** `curl` mantido como tooling auxiliar/operacional em builds Docker

**Avanço:** Elimina dependência de subprocesso externo para operações HTTP em runtime, simplificando a stack e reduzindo overhead de processo. Mudança alinhada com práticas modernas de Zig.

🔗 [nullclaw/nullclaw PR #881](https://github.com/nullclaw/nullclaw/pull/881)

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #919 | **Feature: Allow disabling automatic memory recall (FTS5) per-message** | `[OPEN]` |
|------|--------------------------------------------------------------------------|----------|
| **Autor:** weissfl | **Criado:** 2026-05-18 | **Atualizado:** 2026-05-24 | **Comentários:** 1 | **Reações:** 0 |

**Problema detalhado:** A função `enrichMessageWithRuntime()` executa FTS5 + BM25 recall em **todas as mensagens** com parâmetros hardcoded:

- `DEFAULT_RECALL_LIMIT = 5`
- `MAX_CONTEXT_BYTES = 4000`
- `SCOPED_RECALL_CANDIDATE_LIMIT = 64`
- `GLOBAL_RECALL_CANDIDATE_LIMIT = 64`

**Demanda central:** Permitir controle granular para desabilitar ou configurar recall por mensagem, útil para:
- Casos de uso onde contexto de memória é indesejado (e.g., comandos administrativos)
- Otimização de latência em mensagens simples
- Redução de consumo de tokens em contextos específicos

**Análise:** A issue demonstra demanda por **flexibilidade operacional**, não por nova funcionalidade core. O autor já identificou os parâmetros de configuração necessários. Ausência de reações pode indicar baixa visibilidade ainda ou público-alvo específico.

🔗 [nullclaw/nullclaw Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

---

## 5. Bugs e Estabilidade

**Nenhum bug ou reporte de regressão registrado nas últimas 24h.**

O período não apresenta incidentes reportados. A ausência de issues de bug correlates com a atividade de refatoração da PR #881, que aparentemente não introduziu problemas observáveis.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Request Ativa

**#919 — Controle granular sobre recall de memória FTS5/BM25**

Esta feature sinaliza possível direção para **modularização de memória contextual**, permitindo:
1. Desabilitar recall por mensagem/thread
2. Configurar limites customizados (recall limit, context bytes)
3. Casos de uso diferenciados (RAG seletivo vs. broadcast)

**Potencial impacto no roadmap:** Se implementada, pode influenciar arquitetura do sistema de memória e configurações de agentes, sendo候选人 para inclusion em próxima release.

---

## 7. Resumo de Feedback dos Usuários

Com base na análise das issues e PRs:

| Tema | Feedback Detectado |
|------|-------------------|
| **Dependência de curl** | Comunidade valoriza simplificação da stack (PR #881) |
| **Flexibilidade de memória** | Usuários desejam controle sobre recall automático, indicando cenários onde memória contextual é impeditiva ou custosa |

**Dores identificadas:**
- **Rigid ez do recall de memória:** Parâmetros hardcoded limitam adaptação a diferentes casos de uso
- **Overhead operacional:** Subprocessos curl em runtime (agora resolvido com PR #881)

**Satisfação inferred:** O merge da PR #881 sugere que a equipe responde a feedback de simplificação técnica. A feature request aberta demonstra confiança na equipe para receber demandas de API/configuração.

---

## 8. Backlog que Merece Atenção

### Issue Sem Resposta/Ação Prolongada

| #919 | **Feature: Allow disabling automatic memory recall (FTS5) per-message** |
|------|--------------------------------------------------------------------------|
| **Status:** OPEN | **Criado:** 2026-05-18 (7 dias) | **Última atualização:** 2026-05-24 |

**Situação:** Issue aberta há uma semana com 1 comentário.仍未获得 maintainer response.

**Recomendação:** Due to its specificity and clear problem definition, esta issue beneficiaria-se de:
1. Commentário oficial do maintainer sobre viabilidade técnica
2. Label de categorização (`enhancement`, `memory`)
3. Priorização para próximo milestone se alinhado ao roadmap

🔗 [nullclaw/nullclaw Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

---

## Métricas Consolidada (Últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| PRs abertas | 0 |
| PRs merged/closed | 1 |
| Releases | 0 |
| Bugs reportados | 0 |
| Comentários totais | 1 |

**Saúde geral:** 🟡 **Estável com sinal de feature em aberto**

---

*Relatório gerado automaticamente com base em dados GitHub do projeto nullclaw/nullclaw.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-05-25
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de maturidade** nesta análise. De um lado, projetos como **NanoBot** e **ZeroClaw** demonstram atividade excepcionalmente alta (40-50+ artefatos atualizados/dia), sinalizando fases ativas de desenvolvimento com múltiplos tracks paralelos — frequentemente indicando preparação para releases significativos. Do outro, **Hermes Agent** consolida sua posição como projeto maduro em estabilização, com volume massivo de issues e PRs indicando maturidade de comunidade e ciclo de manutenção estabelecido. A maioria dos projetos encontra-se em **fase pré-release**, sugerindo um ciclo coordenado de maturização do ecossistema. As convergências técnicas em loop detection, memory consolidation e multi-agent messaging indicam que a indústria está resolvendo desafios arquiteturais similares em paralelo.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Abertos | PRs Merged (24h) | Releases | Bugs P1/P2 | Saúde |
|---------|---------------------|-------------|------------------|---------|------------|-------|
| **NullClaw** | 1 | 0 | 1 | 0 | 0 | 🟡 Estável |
| **NanoBot** | 5 processadas | 11 | 6 | 0 | 1/3 | 🟢 Robusta |
| **Hermes Agent** | 50 | ~36 | 14 | 0 | 6/8+ | 🟡 Estabilização |
| **PicoClaw** | 4 | 8 | 2 | 1 nightly | 0/2 | 🟢 Ativo |
| **IronClaw** | 28 | 29 | 4 | 0 (bloqueado) | 1/4 | 🟡 Alto risco |
| **CoPaw** | 11 | 1 | 0 | 0 | 3/4 | 🟡 Estável |
| **ZeroClaw** | 37 | 44 | 6 | 0 (beta) | ~12/6 | 🟡 Crítico |

**Observação:** A contagem de Hermes Agent (50 issues + 50 PRs) reflete volume histórico acumulado, não necessariamente novos artefatos no período.

---

## 3. Posicionamento do Projeto Principal

### Criteriologia de Seleção
Para fins deste relatório, consideramos **ZeroClaw** e **NanoBot** como projetos principais dado o volume de atividade, breadth de features e influência arquitetural no ecossistema.

### Vantagens Comparativas

| Aspecto | ZeroClaw | NanoBot |
|---------|----------|---------|
| **Linguagem** | Rust (performance, safety) | Python (acessibilidade) |
| **Canais** | 20+ canais simultâneos | Foco em providers de LLM |
| **Arquitetura** | Aspect-oriented, modular | Single-agent com subagents |
| **Comunidade** | 50 PRs/40 issues daily | 17 PRs daily |
| **Dívida Técnica** | 12+ P1 abertos | Bugfix cycle rápido |

### Diferenças Técnicas Fundamentais

| Dimensão | ZeroClaw | NanoBot | Hermes Agent |
|----------|----------|---------|--------------|
| **Paradigma** | Aspectos Rust, AllowlistAspect | Dream memory, subagent orchestration | Multi-adapter, cron-driven |
| **Memória** | In-memory com opcional external | Dream consolidation, FTS5 | mempalace, cross-session |
| **Extensibilidade** | MCP native, skills filesystem | MCP presets, plugin system | Plugin architecture |
| **Deploy** | Containers, edge, CLI | Desktop, server | Multi-platform gateway |

### Tamanho de Comunidade (Estimativa)

| Projeto | Sinais de Volume |
|---------|-----------------|
| **Hermes Agent** | 50 PRs/50 issues atualizados, 26 👍 em feature request — maior base |
| **NanoBot** | 17 PRs/dia, contributors diversos (HKUDS) |
| **ZeroClaw** | 44 PRs abertos, 15+ PRs simultâneos — maior pipeline |
| **NullClaw** | 1 PR/issue — menor, focado |
| **PicoClaw** | 10 PRs, nicho edge/ARM |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Agentes (Loop Detection)

Todos os projetos que enfrentam problemas de loops demonstram demanda unificada:

| Projeto | Abordagem | Status |
|---------|-----------|--------|
| **NanoBot** | Loop Guard v2.0 genérico + rate limiting | PR #3985 em desenvolvimento |
| **ZeroClaw** | `max_tool_iterations` em runtime_profiles | Bug P1 (não funciona) |
| **Hermes Agent** | `repeated_external_lookup_error` só cobre web_search | Limitado |

**Convergência:** A indústria reconhece que loop detection deve ser genérico, não limitado a tools específicas.

### 4.2 Sistema de Memória

| Projeto | Abordagem | Problema Reportado |
|---------|-----------|-------------------|
| **NanoBot** | Dream consolidation (two-phase → single-phase) | "Dream Hunger", overflow 40k tokens |
| **NullClaw** | FTS5 + BM25 recall | Hardcoded parameters (#919) |
| **ZeroClaw** | Disabled memory ainda produz entries | Comportamento contraditório |
| **CoPaw** | Pre-hook Memory Archiving RFC | Sistema apenas registra, não aprende |
| **Hermes Agent** | mempalace para memória externa | Cross-session continuity |

**Convergência:** Transição de "memory as logging" para "memory as learning" — sistemas que capturam conhecimento em tempo real.

### 4.3 Multi-Agent e Colaboração

| Projeto | Feature | Progresso |
|---------|---------|-----------|
| **NanoBot** | Cross-agent messaging bus | PR #3992 |
| **PicoClaw** | Agent Collaboration Bus | PR #2937 |
| **IronClaw** | Subagent spawn design | Issue #3798 |
| **Hermes Agent** | Task relay com approval gates | RFC #31392 |

**Convergência:** Arquiteturas de comunicação inter-agente estão emergindo em paralelo — sinal de maturidade do paradigma.

### 4.4 MCP (Model Context Protocol)

| Projeto | Status | Observação |
|---------|--------|------------|
| **NanoBot** | First-class com presets, hot reload | PR #3979 |
| **CoPaw** | OAuth client_secret bug | Issue #4643 |
| **ZeroClaw** | `mcp.enabled=false` default breakante | Bug P1 |
| **Hermes Agent** | Z.AI MCP pilot docs | PR #31610 |

**Convergência:** MCP está se tornando capacidade de primeira classe, mas defaults e configurações ainda causam fricção.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciação |
|---------|------------------|---------------|
| **IronClaw** | Enterprise, finanças | Attested signing, WebAuthn, security-first |
| **Hermes Agent** | Desenvolvedores multi-plataforma | 15+ adapters (Telegram, iMessage, DingTalk) |
| **PicoClaw** | Edge computing, ARM devices | Single-board computers, Termux |
| **NullClaw** | Entusiastas Zig, minimalismo | Native std.http, Rust idiomatic |
| **NanoBot** | Produtividade, desktop | UX refinado, slash commands |
| **ZeroClaw** | Operadores multi-canal | 20+ canais, lightweight |
| **CoPaw** | Consumidores finais | Desktop pet, Chinese platforms |

### 5.2 Por Arquitetura

| Paradigma | Projetos | Implicação |
|-----------|---------|------------|
| **Actor/Agent-first** | NanoBot, CoPaw | Foco em comportamento inteligente |
| **Channel-first** | Hermes Agent, ZeroClaw | Foco em conectividade |
| **Security-first** | IronClaw | Foco em transações financeiras |
| **Minimalismo** | NullClaw, PicoClaw | Foco em simplicidade |

### 5.3 Por Stack Técnico

| Stack | Projetos | Trade-offs |
|-------|---------|------------|
| **Rust** | ZeroClaw, IronClaw, NullClaw | Performance, safety, curva de aprendizado |
| **Python** | NanoBot, CoPaw, Hermes Agent | Acessibilidade, ecossistema ML, GIL |
| **Zig** | NullClaw | Minimalismo, controle de memória |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Velocidade | Evidência |
|---------|------------|-----------|
| **NanoBot** | ⭐⭐⭐ Muito alta | 17 PRs/dia, mesma hora issue→PR→merge |
| **ZeroClaw** | ⭐⭐⭐ Muito alta | 15+ PRs AllowlistAspect simultâneas |
| **IronClaw** | ⭐⭐ Alta | 50 PRs atualizados, stack 10 PRs attested-signing |

**Análise:** NanoBot demonstra o ciclo mais responsivo — contributors rapidamente transformam issues em PRs. ZeroClaw demonstra capacidade de trabalho paralelo massivo.

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Foco | Evidência |
|---------|------|-----------|
| **Hermes Agent** | Estabilização | 6 P1 bugs, múltiplos adapters a manter |
| **CoPaw** | UX/Console UI | 3 bugs críticos simultâneos no frontend |
| **NullClaw** | Simplificação | PR #881 remove curl dependency |

### 6.3 Health Score Consolidado

| Tier | Projetos | Características |
|------|----------|----------------|
| 🟢 Crescimento saudável | NanoBot, PicoClaw | Bugs corrigidos rapidamente, features alinhadas com demanda |
| 🟡 Atenção necessária | NullClaw, Hermes Agent, CoPaw, ZeroClaw | P1 bugs ou falta de resposta a issues |
| 🔴 Bloqueado | IronClaw | CVEs bloqueiam releases, 1 E2E failure |

---

## 7. Sinais de Tendência

### 7.1 Tendências Arquiteturais

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-agent nativo** | NanoBot #3992, PicoClaw #2937, IronClaw #3798 | Agentes collaborating, não isolados |
| **Memory como learning** | CoPaw #4652, NanoBot #3973, Hermes #6323 | De logging para adaptação |
| **Loop guards universais** | NanoBot #3985, Hermes Agent patterns | Agentes mais confiáveis em produção |
| **MCP como capability first-class** | NanoBot #3979, CoPaw #4643 | Padronização de extensibilidade |

### 7.2 Tendências de Mercado

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Edge/ARM deployment** | PicoClaw Termux guide, ZeroClaw container issues | Mercado mobile/IoT emerge |
| **Multi-canal operators** | ZeroClaw 20+ channels, Hermes 15+ adapters | Diferenciação por conectividade |
| **Enterprise security** | IronClaw attested-signing, ZeroClaw allowlist | Compliance como feature |
| **Chinese platform integration** | CoPaw WeChat, Hermes Feishu/DingTalk | Mercado doméstico como driver |

### 7.3 Padrões de Feedback Recorrentes

| Padrão | Frequência | Ação Recomendada |
|--------|------------|------------------|
| **Defaults que quebram workflows** | 4+ projetos | Auditoria de defaults antes de release |
| **Silent failures** | 3+ projetos | Error reporting mais explícito |
| **Memory overflow** | 2+ projetos | Limites configuráveis, não hardcoded |
| **Provider-specific bugs** | 4+ projetos | Abstração de provider mais robusta |

### 7.4 Projeções para Próximo Trimestre

1. **ZeroClaw v0.8-beta release** — aguardando estabilização de P1
2. **IronClaw unbock de CVEs** — liberação de 3 versões acumuladas
3. **NanoBot v1.x release** — consolidação do Dream single-phase e loop guards
4. **Hermes Agent v2.0** — memória externa e multi-provider web search
5. **PicoClaw Agent Collaboration Bus** — merge esperado do PR #2937

---

## Conclusão Executiva

O ecossistema de agentes de IA open source demonstra **maturidade crescente com fragmentação estratégica**. Projetos Rust (ZeroClaw, IronClaw, NullClaw) priorizam performance e segurança, enquanto projetos Python (NanoBot, CoPaw, Hermes) priorizam acessibilidade e integração. A convergência em loop detection, memória adaptativa e multi-agent messaging sugere que o mercado está resolvendo problemas fundamentais em paralelo. **NanoBot** apresenta o melhor equilíbrio entre velocidade de iteração e saúde de projeto, enquanto **IronClaw** carrega o maior risco técnico acumulado (CVEs + E2E failures). Recomendamos atenção especial à estabilização de defaults em ZeroClaw e à arquitetura de memória em NanoBot como indicadores antecipados de releases significativos.

---

*Relatório gerado em 2026-05-25. Dados consolidados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-25

## 1. Panorama do Dia

O NanoBot apresenta altíssima atividade de desenvolvimento no dia de hoje, com **17 PRs atualizados** (11 abertos, 6 fechados/merged) e 5 issues processadas. A comunidade demonstra foco intenso em três áreas convergentes: (1) **segurança e estabilidade do agente** (loop guards, propagação de config), (2) **melhoria do sistema de memória Dream** (consolidação em fase única, hunger problem) e (3) **extensibilidade do WebUI** (HyperFrames CLI, slash commands, model presets). A ausência de releases formais indica que o projeto está em fase de consolidação de mudanças antes de um próximo tag. A relação 11:6 de PRs abertos vs. fechados sugere pipeline saudável com boa revisão ativa.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de maturação de múltiplas branches paralelas. Dado o volume de PRs fechados hoje (6), espera-se um release coordenado iminente.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje (6):

| # | Título | Impacto |
|---|---|---|
| **#3975** | feat(spawn): allow per-subagent sampling temperature | ✅ Permite que cada subagente spawned use sua própria temperatura, habilitando diferentes modos de raciocínio (criativo vs. determinístico). Fecha #3969. |
| **#3984** | fix(provider): preserve OpenAI-compatible tool call ids | ✅ Corrige bug crítico de mismatched IDs entre `tool_call_id` e `tool_result` para APIs GLM-4.7 e Kimi via antchat. Fecha #3980. |
| **#3979** | feat(mcp): add preset setup and capability mentions | ✅ Transforma MCP em capacidade de primeira classe com presets catalogados, connection testing, hot reload e menções `@` no chat. |
| **#3987** | feat(webui): improve slash command actions | ✅ Melhora o composer slash palette com ações diretas, ordenação por comandos recentes, stop action eLocalized copy para 6+ locales. |
| **#3974** | feat(providers): add OpenAI API type and extra body configuration | ✅ Adiciona `openai.apiType` com modos `auto`, `chat_completions`, `responses` e suporte a `extraBody` configurável. |
| **#1678** | fix(tools): use temp files instead of pipes for shell output on Windows | ✅ Resolve hangindefinitely em processos longa-lived no Windows (especialmente agent-browser com PIPE). |

**PRs abertos notáveis (11):**

- **[#3990](https://github.com/HKUDS/nanobot/pull/3990)** — `refactor(dream): merge two-phase consolidation into single phase`: Remove a Phase 1 intermediária de análise LLM, consolidando extração de fatos, deduplicação e skill discovery em uma única etapa no AgentRunner. Reduz latência e complexidade.
- **[#3992](https://github.com/HKUDS/nanobot/pull/3992)** — `feat(agent-collab): enable cross agent messaging`: Implementa message bus compartilhado para múltiplas instâncias de agente se comunicarem — evolução arquitetural significativa.
- **[#3985](https://github.com/HKUDS/nanobot/pull/3985)** — `feat: loop guard v2.0`: Adiciona detecção de loops genéricos (não só `web_search`) e rate limiting hard block para chamadas repetitivas de ferramentas.
- **[#3991](https://github.com/HKUDS/nanobot/pull/3991)** — `feat(cli): add HyperFrames CLI app`: Move metadata de CLI Apps para `plugins/cli-apps` no repo root, mantendo PyPI enxuto.
- **[#3988](https://github.com/HKUDS/nanobot/pull/3988)** — `[provider] feat(providers): add Step Plan support`: Adiciona provider para StepFun Step Plan subscription.

---

## 4. Temas Quentes da Comunidade

### Issues com maior potencial de impacto:

**[#3973](https://github.com/HKUDS/nanobot/issues/3973) — Dream System: Hunger Problem & Lack of Real-time Learning** (ABERTA, 0 comentários)
> O sistema Dream tem duas limitações críticas: (1) **"Dream Hunger"** — depende exclusivamente de `history.jsonl` como fonte de input, não capturandointerações em tempo real entre Dream runs; (2) **falta de aprendizado em tempo real** — conhecimento gerado durante sessões ativas não é incorporado até a próxima consolidação.

**[#3986](https://github.com/HKUDS/nanobot/issues/3986) — Feature Request: Loop Detection & Rate Limiting Guards** (ABERTA, 0 comentários)
> Identifica três padrões de loop recorrentes: repetição de parâmetros idênticos (`grep` no mesmo pattern N×), spam de chamadas rápidas (`list_dir` 5× em 3s com output idêntico), e retry de leitura de arquivos inexistentes. Solicita guardrails genéricos para além do `repeated_external_lookup_error` que só cobre `web_search`/`web_fetch`.

### Análise de demandas:
A comunidade demonstra consenso crescente sobre a necessidade de **resiliência operacional** do agente — tanto na detecção de loops quanto na robustez do sistema de memória. A coincidência temporal entre #3973, #3986, #3990 e #3047 indica que o Dream System é o tema mais requisitado do momento. O padrão de issues abertas sem comentários sugere que contributors estão criando issues como spec drafts para seus PRs correspondentes (ex: #3986 ↔ #3985).

---

## 5. Bugs e Estabilidade

### Bug corrigido hoje:

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| **🔴 Alta** | #3980/#3984 | Mismatch entre `tool_call_id` e `tool_result.id` em APIs OpenAI-compatíveis (GLM-4.7, Kimi via antchat) — causava quebra funcional em workflows com tool calling | ✅ **CORRIGIDO** (PR #3984) |
| **🟡 Média** | #3047 | Context overflow no Dream dentro da janela de 2h — o histórico satura o limite de 40k tokens antes da consolidação | ✅ **FECHADO** (provavelmente addressed por #3990) |
| **🟡 Média** | #1678 | `asyncio.create_subprocess_shell()` com PIPE causa hangindefinitely no Windows com processos longa-lived | ✅ **CORRIGIDO** (PR #1678) |
| **🟡 Média** | #3978 | `maxConcurrentSubagents` nunca era propagado do AgentDefaults para SubagentManager — sempre usava default hardcoded de 1 | 🔴 **ABERTO** (PR #3978 em review) |

### Regressão potencial identificada:

O PR [#3978](https://github.com/HKUDS/nanobot/pull/3978) expõe um bug de wiring: a configuração `maxConcurrentSubagents` em `AgentDefaults` não era propagada através de `AgentLoop.from_config()` → `AgentLoop.__init__()` → `SubagentManager.__init__()`. Usuários que configuravam concurrent subagents estavam sendo silenciosamente ignorados — impacto potencialmente alto em workflows paralelos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em desenvolvimento:

| Prioridade | Feature | Descrição | Evidência |
|---|---|---|---|
| ⭐⭐⭐ | **Cross-Agent Messaging** | Message bus para múltiplas instâncias de agente se comunicarem | PR #3992 |
| ⭐⭐⭐ | **Loop Guard v2.0** | Detecção genérica de loops + rate limiting hard block | PR #3985 / Issue #3986 |
| ⭐⭐⭐ | **Dream Single-Phase Consolidation** | Remoção da Phase 1 intermediária — latência reduzida | PR #3990 / Issue #3047 |
| ⭐⭐ | **StepFun Step Plan Provider** | Suporte ao provider Step Plan subscription | PR #3988 |
| ⭐⭐ | **HyperFrames CLI Plugin** | CLI app catalog no repo root | PR #3991 |
| ⭐⭐ | **OpenAI API Type + extraBody** | Modos auto/chat_completions/responses + config de body | PR #3974 |
| ⭐ | **MCP Presets Catalog** | Setup de primeira classe com connection testing e hot reload | PR #3979 |
| ⭐ | **Model Preset Picker no WebUI** | Clickable badge para troca de model preset | PR #3977 |
| ⭐ | **`/skill` Slash Command** | Discovery de skills habilitadas | PR #3968 |

### Sinais de roadmap inferidos:
1. **Resiliência agentica** é o tema central — loop detection, memory robustness e concurrent subagent control indicam foco em produção-readiness.
2. **Extensibilidade** via MCP, CLI plugins e multi-provider (StepFun) sugere estratégia de plataforma.
3. **UX refinamento** com slash commands, model presets e localized UI mostra investimento em experiência do usuário final.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas (via issues):

| Dor | Cenário | Impacto |
|---|---|---|
| **Agente preso em loops** | `grep` repetido, `list_dir` spam, `read_file` retry de não-existente | Produtividade destruída — modelo ignora feedback |
| **Consolidação Dream ineficaz** | 40k token overflow antes dos 2h, knowledge gerado em tempo real não capturado | Sistema de memória self-improvement não funciona |
| **Subagentes sempre sequenciais** | `maxConcurrentSubagents` ignorado silenciosamente | Performance degradada em workflows paralelos |
| **Tool call ID mismatch** | APIs GLM/Kimi não funcionam com tool calling | Compatibilidade quebrada com providers alternativos |
| **CLI metadata inflando PyPI** | Metadata de CLI apps dentro do package Python | Install bloat, dificuldade de discovery |

### Satisfação inferred:
- A velocidade de resposta da comunidade (PRs fechados no mesmo dia das issues relacionadas) indica satisfação com o processo de contribuição.
- Features como `temperature` por subagente (#3975) e MCP presets (#3979) eram solicitações diretas que foram implementadas rapidamente.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias:

| # | Título | Idade | Prioridade |
|---|---|---|---|
| **[#3973](https://github.com/HKUDS/nanobot/issues/3973)** | Dream System: Hunger Problem & Lack of Real-time Learning | ~2 dias | 🔴 Alta |
| **[#3986](https://github.com/HKUDS/nanobot/issues/3986)** | Feature Request: Loop Detection & Rate Limiting | ~1 dia | 🔴 Alta |

### Observação:
Ambas as issues de alta prioridade estão sem comentários da maintainer team, embora tenham PRs correspondentes em desenvolvimento (#3990 para #3973, #3985 para #3986). Isso sugere que contributors estão self-servicing, mas feedback oficial seria benéfico para alinhamento de roadmap.

### Issues crônicas:
- **[#3047](https://github.com/HKUDS/nanobot/issues/3047)** — Dream memory consolidation (4+ semanas aberta, agora fechada) — o ciclo completo demonstra o processo do projeto: issue → PR → merge. Vale monitorar se a solução #3990 efetivamente addressa todos os pontos levantados.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|---|---|---|
| PRs ativos (últimas 24h) | 17 | 🟢 Muito alto |
| Ratio Abertos/Fechados | 11/6 | 🟡 Esperando consolidação |
| Releases (últimas 24h) | 0 | 🟡 Pré-release |
| Issues de bugs abertos | 1 (#3978) | 🟡 Monitorar |
| Issues de feature requests | 2 (#3973, #3986) | 🟢 Alinhadas com PRs ativos |
| Tempo médio de resposta (issues) | <24h | 🟢 Excelente |

**Veredicto geral:** O NanoBot demonstra saúde robusta com alta atividade, ciclo de contributors responsivo epipeline de features bem alinhado com demands da comunidade. O foco atual em resiliência (loop guards, Dream reform) é estratégico e deve elevar significativamente a confiabilidade em produção.

---

*Relatório gerado automaticamente com base em dados GitHub do HKUDS/nanobot — 2026-05-25*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-25

---

## 1. Panorama do dia

O Hermes Agent mantém um **ritmo de atividade intenso**, com 50 issues e 50 PRs atualizados nas últimas 24h. Nenhum release foi publicado, mas o fluxo de PRs indica que a equipe está ativamente fechando itens — 14 PRs foram merged/fechados no período. O estado geral reflete um projeto maduro em fase de **estabilização de múltiplas plataformas**, com regressões críticas sendo tratadas (especialmente em Telegram e bancos de dados locais) e demandas crescentes por suporte a provedores adicionais e capacidades de memória externa.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está sem release tag nova desde o último marco. O pipeline de PRs sugere que a próxima versão pode incluir correções de estabilidade (Kanban, Telegram, cron) e melhorias de CLI.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Autor | Tema | Impacto |
|---|---|---|---|
| [#31656](https://github.com/NousResearch/hermes-agent/pull/31656) | Nigelkil01 | `fix(cli): honor skills in oneshot mode` | Corrige regressão crítica — `--skills` no modo `-z` era silenciosamente ignorado. |
| [#31653](https://github.com/NousResearch/hermes-agent/pull/31653) | Nigelkil01 | `fix(cron): scrub all allowlisted GitHub auth headers` | Melhora segurança em prompts cron, impedindo vazamento de tokens GitHub em múltiplos blocos curl. |
| [#31646](https://github.com/NousResearch/hermes-agent/pull/31646) | ej9657 | `Make dashboard chat default on` | Ativa o TUI de Chat no dashboard por padrão, melhorando UX. |
| [#31647](https://github.com/NousResearch/hermes-agent/pull/31647) | TechNickAI | `fix(recall): use parent_session_id chain` | Corrige `/recall` que sempre retornava "nothing found" em sessões Telegram. |
| [#31645](https://github.com/NousResearch/hermes-agent/pull/31645) | crisweber2600 | `feat: add Janitor cleanup plugin` | Adiciona plugin de limpeza de código com métrica de senior-engineer benchmark. |
| [#31610](https://github.com/NousResearch/hermes-agent/pull/31610) | anthonylei | `docs: document Z.AI MCP web research pilot` | Documenta integração piloto Z.AI MCP para GLM. |
| [#31660](https://github.com/NousResearch/hermes-agent/pull/31660) | Clarkar00 | `fix(gateway): Update Now false success` | Elimina feedback enganoso na UI web quando zero updates são aplicados. |

**PRs abertos de destaque ainda em revisão:**

- [#31663](https://github.com/NousResearch/hermes-agent/pull/31663) — `fix: prevent BlueBubbles duplicate replies` — Melhora deduplicação no adapter iMessage.
- [#31661](https://github.com/NousResearch/hermes-agent/pull/31661) — `fix: expose memory provider tools in cron` — Permite ferramentas de memória externas em execuções cron.
- [#27763](https://github.com/NousResearch/hermes-agent/pull/27763) — `fix(title-gen): use extract_content_or_reasoning for reasoning models` — Resolve falha silenciosa de geração de título para modelos Qwen3.6/DeepSeek-R1 (afeta ~3.720 sessões).
- [#23215](https://github.com/NousResearch/hermes-agent/pull/23215) — `fix(gateway): prefer /v1/models probe for OpenAI-compatible servers` — Reduz ruído de health checks spúrios em gateways OpenAI-compatíveis.
- [#29596](https://github.com/NousResearch/hermes-agent/pull/29596) — `feat(bluebubbles): add tapback reactions, message editing, streaming support` — Amplia suporte ao iMessage com reações e edição.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

**#6323 — Feature: mempalace para memória externa estruturada** (26 👍, 21 comentários) — Closed ✅
[Link](https://github.com/NousResearch/hermes-agent/issues/6323)

A adição de um módulo **mempalace** para memória persistente além da janela de contexto dominou o debate da comunidade. O entusiasmo reflete uma demanda clara por **continuidade cross-session** e tarefas de longo horizonte. O issue foi fechado com integração aceita, sinalizando priorização para o roadmap.

**#20470 — Bug: Telegram DM topic binding não atualizado após compressão de contexto** (7 👍, 9 comentários) — Open, P1
[Link](https://github.com/NousResearch/hermes-agent/issues/20470)

Causa um **loop de pré-compressão** quando sessões Telegram se dividem durante compressão de contexto. Bug de alta severidade que quebra a experiência do usuário em DM topics.

**#9549 — Bug: Markdown tables não renderizam no Feishu** (5 👍, 6 comentários) — Open, P2
[Link](https://github.com/NousResearch/hermes-agent/issues/9549)

Usuários do Feishu veem tabelas markdown cruas. A comunidade espera paridade com o comportamento do OpenClaw (conversão automática via `convertMarkdownTables()`).

**#21444 — Bug: openai-codex/gpt-5.5 hangs silenciosamente** (3 👍, 4 comentários) — Open, P2
[Link](https://github.com/NousResearch/hermes-agent/issues/21444)

Chamadas ao endpoint `chatgpt.com/backend-api/codex` travam por ~300s (timeout) sem feedback ao usuário. Afeta diretamente a experiência com modelos mais recentes da OpenAI.

**#31392 — RFC: Agent-native task relay com subagentes e approval gates** (5 comentários) — Open, P3
[Link](https://github.com/NousResearch/hermes-agent/issues/31392)

Proposta de arquitetura para **auto-forking de subagentes** com gates de aprovação humana assíncronos. Desafia o paradigma atual de delegates e indica interesse da comunidade em workflows mais sofisticados.

---

## 5. Bugs e Estabilidade

### Severidade P1 (Críticos)

| Issue | Tema | Link |
|---|---|---|
| #20470 | Telegram DM topic binding não atualizado pós-compressão → loop infinito | [Issue](https://github.com/NousResearch/hermes-agent/issues/20470) |
| #31086 | `_recover_telegram_topic_thread_id` sequestra novos topics para o topic anterior | [Issue](https://github.com/NousResearch/hermes-agent/issues/31086) |
| #27715 | `get_hermes_dir` silencia novos dados com diretórios vazios do old-path | [Issue](https://github.com/NousResearch/hermes-agent/issues/27715) |
| #27602 | Gateway abandona plataformas/pairing populados quando diretório vazio existe | [Issue](https://github.com/NousResearch/hermes-agent/issues/27602) |
| #11970 | Bedrock Converse nunca injeta `cachePoint` → prompt caching desabilitado silenciosamente | [Issue](https://github.com/NousResearch/hermes-agent/issues/11970) |

### Severidade P2 (Altos)

| Issue | Tema | Link |
|---|---|---|
| #21444 | openai-codex hangs por 300s sem feedback | [Issue](https://github.com/NousResearch/hermes-agent/issues/21444) |
| #9549 | Tabelas markdown não renderizam no Feishu | [Issue](https://github.com/NousResearch/hermes-agent/issues/9549) |
| #18279 | Threads raiz do Mattermost compartilham sessão, bloqueiam conversas paralelas | [Issue](https://github.com/NousResearch/hermes-agent/issues/18279) |
| #28156 | Bedrock+Claude wizard aceita Bearer-only mas runtime falha | [Issue](https://github.com/NousResearch/hermes-agent/issues/28156) |
| #30230 | Gateway atinge limite macOS fd (256) → `OSError: Too many open files` | [Issue](https://github.com/NousResearch/hermes-agent/issues/30230) |
| #31555 | `/api/show` probe Ollama adiciona ~1.7s de delay mesmo para não-Ollama | [Issue](https://github.com/NousResearch/hermes-agent/issues/31555) |
| #31583 | `tool_calls` sem `content` causa HTTP 400 em upstreams OpenAI-estritos | [Issue](https://github.com/NousResearch/hermes-agent/issues/31583) |

### Severidade P3 (Médios) — Padrões recorrentes

**Corrupção de Kanban SQLite** emerge como **padrão identificado**, com dois issues separados (#31502, #31618) reportando o mesmo problema (`database disk image is malformed`) sob criação rápida de tarefas e condições de reclaim SIGKILL. A configuração `synchronous=FULL + wal_autocheckpoint=100` não soluciona — indica problema de concorrência no SQLite que precisa de investigação arquitetural.

| Issue | Tema | Link |
|---|---|---|
| #31502 | Kanban SQLite corruption sob criação rápida (~9-10 tasks) | [Issue](https://github.com/NousResearch/hermes-agent/issues/31502) |
| #31618 | kanban.db corruption sob SIGKILL simultâneo com WAL full | [Issue](https://github.com/NousResearch/hermes-agent/issues/31618) |
| #31548 | `hermes -z` descarta `--skills` silenciosamente | [Issue](https://github.com/NousResearch/hermes-agent/issues/31548) |
| #31643 | DingTalk adapter não suporta `MEDIA/local` file attachments | [Issue](https://github.com/NousResearch/hermes-agent/issues/31643) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais demandadas

**#27997 — Declarative Skill Protection Policy** (P3)
[Link](https://github.com/NousResearch/hermes-agent/issues/27997)

Reglas de proteção de skills espalhadas em **6+ arquivos** com aplicação inconsistente. Demanda por centralização para garantir segurança uniforme.

**#31392 — Agent-native task relay com auto-forking + async approval gates** (P3)
[Link](https://github.com/NousResearch/hermes-agent/issues/31392)

RFC para expandir o sistema de delegates com approval gates humanos. Complementa (não substitui) o sistema existente.

**#29115 — Content-bound tool call extraction layer** (P2)
[Link](https://github.com/NousResearch/hermes-agent/issues/29115)

Para modelos que emitem tool calls como texto (MiniMax M2.7, DeepSeek V4, modelos open-weight), o Hermes descarta invocações silenciosamente. Necessária uma camada de fallback.

**#31621 — Web tools com suporte Gemini e OpenRouter** (P3)
[Link](https://github.com/NousResearch/hermes-agent/issues/31621)

Demanda por grounding via Google e pesquisa web via Exa através do OpenRouter — qualidade superior ao Tavily.

**#19469 — Pricing layer acoplado ao OpenRouter** (P3)
[Link](https://github.com/NousResearch/hermes-agent/issues/19469)

A camada de custo só funciona com OpenRouter. Todos os demais provedores (Anthropic, OpenAI, Bedrock, Azure, Vertex, Ollama) reportam `Cost status: unknown`.

**#29871 — ollama-cloud provider não injeta SOUL.md** (P2)
[Link](https://github.com/NousResearch/hermes-agent/issues/29871)

Mesmo loader funcionando corretamente, o `ollama-cloud` droppa o conteúdo downstream. Provider `anthropic` não tem o problema.

**Sinais de roadmap emergentes:**
- Memória externa persistente (mempalace) ✅ closed/aceito
- Multi-provedor para web search (Gemini, OpenRouter/Exa)
- Subagentes com approval gates humanos
- Suporte a attachments em plataformas adicionais (DingTalk)
- Centralização de políticas de skill

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|---|---|---|
| **Prompt caching desabilitado sem aviso** em Bedrock/Claude | Usuários pagam custo total de input tokens em cada turno | P1 |
| **Loop infinito em Telegram DMs** após compressão | Experiência completamente quebrada nesse cenário | P1 |
| **Tokens de custo sempre "unknown"** para provedores não-OpenRouter | Usuários não conseguem monitorar gastos | P3 |
| **Skills ignoradas no modo oneshot** sem erro ou warning | Usuários recebem resposta genérica sem entender por quê | P3 |
| **Kanban database corrompe** sob carga normal | Perda de dados em ambiente de produção | P2 |
| **macOS fd limit** atingido com setups multi-profile + MCP | Impossibilita uso em Macs com múltiplas configurações | P2 |

### Cenários de uso emergentes

- **Long-horizon tasks com continuidade cross-session** (via mempalace) — interesse confirmado por 26 👍
- **Batch processing para dataset generation** — demanda por chaining de prompts e reutilização de instâncias Docker
- **Integração com plataformas chinesas** (Feishu, DingTalk, Lark) — ecossistema em expansão com gaps de renderização
- **Modelos reasoning** (Qwen3.6, DeepSeek-R1) — geração de título falha silenciosamente para 3.720+ sessões; demanda por handling de `reasoning_content`
- **Provedores locais/custom** — pergunta recorrente sobre token usage tracking com OpenAI-compatíveis locais (LocalAI)

### Satisfação / Insatisfação

- **Alta satisfação**: Facilidade de setup com CLI (`hermes setup`), suporte multi-pl

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-25

---

## 1. Panorama do Dia

O projeto PicoClaw mantém alta atividade de desenvolvimento com **10 PRs atualizados nas últimas 24h**, indicando uma sprint intensa. A release nightly v0.2.9-nightly.20260524 foi publicada, sinalizando progresso contínuo. A comunidade demonstra engajamento moderado com 4 issues ativas e 20 comentários acumulados nas principais discussões. Dois bugs críticos (cron e exec) foram addressed via PRs fechados, reforçando a saúde do projeto.

---

## 2. Lançamentos

### 🔔 Nightly Build — v0.2.9-nightly.20260524.d499cbec

| Tipo | Detalhes |
|------|----------|
| **Release** | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| **Build** | Automated nightly build |

**Nota**: Este é um build automatizado e pode conter instabilidades. Recomenda-se cautela em ambientes de produção.

**Mudanças desde v0.2.9**: Todas as contribuições mergeadas entre a última release estável e o branch `main` estão incluídas. Usuários que desejam testar funcionalidades mais recentes podem utilizar esta build, mas devem estar cientes dos riscos de instabilidade típicos de nightlies.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| PR | Título | Impacto |
|----|--------|--------|
| [#2938](https://github.com/sipeed/picoclaw/pull/2938) | `fix(cron): add missing action arg for command job execution` | **Crítico** — Corrigia falha silenciosa em todos os cron jobs que executam comandos via ExecTool. Regressão introduzida na commit 3f1ac2. |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | `fix(seahorse): retrieval tools to current session` | Melhoria de segurança e contexto — agora grep/expand operam na sessão ativa por padrão. |

### Análise

A correção do cron (#2938) era uma **regressão crítica** que causava silêncio em funcionalidades programadas. A correção do Seahorse (#2759) endereça vazamento de contexto entre sessões, melhorando privacidade e relevância dos resultados.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | 👍 | Relevância |
|-------|------|-------------|----|------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Enhancement (LM Studio) | 20 | 2 | Requisição antiga para integração com LM Studio |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | Bug (exec guardCommand) | 13 | 2 | Falso positivo no bloqueio de comandos seguros |

### Análise das Demandas

**#28 — LM Studio Easy Connect**
- Demanda antiga (fevereiro/2026) ainda ativa, indicando necessidade real não endereçada
- Usuário sem recursos técnicos para implementar sozinho
- Sugere oportunidade de contribuição para novos contribuidores

**#1042 — Falso Positivo no Exec Guard**
- O regex de validação de caminho está incorreto, bloqueando comandos legítimos como `curl -s "wttr.in/Beijing?T"`
- Problema afeta a usabilidade de skills de cuaca/consulta externa
- 13 comentários indicam discussão técnica ativa sobre solução

---

## 5. Bugs e Estabilidade

### 🐞 Bugs Reportados

| Severidade | Issue | Resumo |
|------------|-------|--------|
| **Média** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `guardCommand` bloqueia falsamente comandos que não acessam paths externos |
| **Média** | [#2839](https://github.com/sipeed/picoclaw/issues/2839) | Final replies em steering-chain são editados como placeholders em vez de novas mensagens *(CLOSED — foi PR/fix)* |

### Regressões Corrigidas

O PR [#2938](https://github.com/sipeed/picoclaw/pull/2938) resolveu uma **regressão silenciosa** no CronTool que fazia todos os jobs de comando falharem sem feedback ao usuário. Classifico como **severidade alta** pela natureza oculta do problema.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em PR

| PR | Feature | Área |
|----|---------|------|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Agent Collaboration Bus | Multi-agent |
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) | Suporte multi-conta WeChat | Channels |
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | Skip skills com bins faltantes | Skills |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) | Tradução Traditional Chinese (zh-TW) | i18n |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | Android Termux guide | Docs |

### Insights de Roadmap

- **Colaboração entre agentes** (#2937) adiciona "first-class internal Agent Collaboration Bus" com mailboxes, threads isoladas e envelopes de mensagem — indica direção clara para arquiteturas multi-agent
- **Filtragem de skills** (#2936) resolve #2351, demonstrando maturidade no tratamento de dependências de ambiente
- **Políticas de tools via AGENT.md** (#2837 — closed) indica foco em granularidade de permissões por agente

---

## 7. Resumo de Feedback dos Usuarios

### Dores Identificadas

| Dor | Fonte | Severidade |
|-----|-------|------------|
| Falta de integração fácil com LM Studio | [#28](https://github.com/sipeed/picoclaw/issues/28) | Média-alta |
| Comandos legítimos bloqueados incorretamente | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | Média |
| Cron jobs falham silenciosamente | Corrigido em [#2938](https://github.com/sipeed/picoclaw/pull/2938) | Alta (já corrigida) |
| Cross-session data leakage em retrieval tools | Corrigido em [#2759](https://github.com/sipeed/picoclaw/pull/2759) | Alta (já corrigida) |

### Cenários de Uso Emergentes

- Execução em dispositivos ARM64 Android via Termux (#2902)
- Multi-conta em mensageiros (WeChat) (#2883)
- Plataformas não-x86 com bins limitados (#2936)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Stale

| Issue | Idade | Tipo | Prioridade |
|-------|-------|------|------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | ~3 meses | Enhancement | Alta — muitos comentários |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | ~2 meses | Bug | Alta — impacto funcional |

### Recomendações

1. **#28 (LM Studio)**: Considerar marked as "good first issue" para atrair contribuidores ou fornecer guidance técnico à comunidade
2. **#1042 (exec guardCommand)**: Priorizar fix — afeta usabilidade direta de skills externas
3. **#2937 (Agent Collaboration)**: PR recente com alta relevância arquitetural — monitorar merges

---

## Métricas Resumidas

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 2 |
| Issues fechadas (24h) | 2 |
| PRs abertos | 8 |
| PRs merged/fechados | 2 |
| Releases | 1 nightly |
| Comentários totales (issues quentes) | 35+ |

**Saúde Geral**: ✅ Projeto ativo com ciclo de desenvolvimento saudável. Bugs críticos sendo corrigidos rapidamente. Funcionalidades de multi-agent em desenvolvimento ativo.

---

*Relatório gerado em 2026-05-25 com base em dados do GitHub do PicoClaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-25

## 1. Panorama do Dia

O IronClaw apresenta **atividade muito alta** nesta data, com 50 PRs e 28 issues atualizadas nas últimas 24h. O foco dominante é a transição para a arquitetura "Reborn", com múltiplos tracks paralelos: integração de hooks em produção, substrate de assinatura atestada (10 PRs), e port de canais v1. Observa-se preocupação com segurança — há issues pendentes sobre credenciais, dispatch authority e third-party hardening. Não há releases novas, pois a publicação no crates.io está bloqueada por CVEs do wasmtime.

---

## 2. Lançamentos

**Nenhum release novo.** A release mais recente disponível no GitHub é `ironclaw-v0.27.0` (29/abr/2026), mas o crates.io mantém apenas `0.24.0` (31/mar/2026). Isso representa um gap de 3 versões para consumidores downstream.

| Issue | Situação | Impacto |
|-------|----------|---------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Aberta** — bloqueada por CVEs no wasmtime 28.x | Downstream pinned a 0.24.0 |

---

## 3. Progresso do Projeto

### PRs fechadas/merged nas últimas 24h

| PR | Tamanho | Escopo | Resumo |
|----|---------|--------|--------|
| [#3998](https://github.com/nearai/ironclaw/pull/3998) | M | codex | **Fix model retry prompt grant renewal** — Corrige retry de modelo para solicitar novo prompt bundle em vez de reutilizar o bundle original |
| [#3764](https://github.com/nearai/ironclaw/pull/3764) | XL | deps | Bump tokio-ecosystem + 44 dependências |
| [#3456](https://github.com/nearai/ironclaw/pull/3456) | M | ci | Bump actions (15 updates) |
| [#3360](https://github.com/nearai/ironclaw/pull/3360) | L | deps | Bump tokio-ecosystem (6 updates) |

### PRs abertas de destaque

O **stack de attested-signing** domina a atividade com 8 PRs simultâneas (PR1 a PR13, parcialmente sobrepostas):

- [#3960](https://github.com/nearai/ironclaw/pull/3960) — `SigningProvider` trait crate (PR1/10)
- [#3961](https://github.com/nearai/ironclaw/pull/3961) — Canonical signing-bytes + `ApprovedTxHash` (PR2/10)
- [#3963](https://github.com/nearai/ironclaw/pull/3963) — Sealed grant store + signing ledger (PR3/10)
- [#3964](https://github.com/nearai/ironclaw/pull/3964) — Durable challenge store + WebAuthn verifier (PR4/10)
- [#3966](https://github.com/nearai/ironclaw/pull/3966) — `BlockedAttested` gate + deterministic resume split (PR5/10)
- [#3997](https://github.com/nearai/ironclaw/pull/3997) — Registro de providers NEAR/WC (PR13/13)

**Hook framework:**
- [#3938](https://github.com/nearai/ironclaw/pull/3938) — Ativação em produção atrás de `HOOKS_ENABLED` (default OFF)
- [#3933](https://github.com/nearai/ironclaw/pull/3933) — `PostgresPredicateStateBackend` (PR2/4)
- [#3922](https://github.com/nearai/ironclaw/pull/3922) — `SecurityAuditSink` wired

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 8 | Publicação de releases no crates.io bloqueada |
| [#1739](https://github.com/nearai/ironclaw/issues/1739) | 7 | Sistema assíncrono de aprovação de transações via WalletConnect |
| [#3269](https://github.com/nearai/ironclaw/issues/3269) | 3 | ProductAdapter replacement para transport PR |

### Análise das demandas

**Segurança financeira (#1712, #3564):** Há demanda clara por arquitetura de execução financeira segura. Issue #3564 alerta que PR #3256 adicionou signers residentes no host, o que é problemático arquiteturalmente — exige canal de autorização infalsificável pelo usuário, não chaves no host.

**Composição Reborn (#3889, #3608):** Forte interesse em segregar approval interaction service e garantir dispatch authority selado com `AuthorizedDispatchRequest` (P0).

---

## 5. Bugs e Estabilidade

### Falhas de CI

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | 🔴 Alta | **Nightly E2E failed** — Job E2E (features) falhou. Run: `26351874622`, commit `030cfeb0` |

### Issues de segurança pendentes

| Issue | Escopo | Prioridade |
|-------|--------|------------|
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | `RuntimeCredentialTarget::PathPlaceholder` — decidir se remove ou hardena | Security review required |
| [#3564](https://github.com/nearai/ironclaw/issues/3564) | Wallet signing com chaves no host — problema arquitetural | Alta |
| [#3959](https://github.com/nearai/ironclaw/issues/3959) | Adoção de `SecurityAuditSink` em pontos de decisão de boundary | Segurança |
| [#3957](https://github.com/nearai/ironclaw/issues/3957) | Hardening de third-party hook activation antes de habilitar em prod | Seguança |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features

| Issue | Escopo | Descrição |
|-------|--------|-----------|
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | agent | **Design: subagent spawn** para o Reborn agent loop |
| [#3953](https://github.com/nearai/ironclaw/issues/3953) | docs | RFC: OpenAPI/AsyncAPI canônicos para Gateway, WebUI e superfícies de eventos |
| [#3025](https://github.com/nearai/ironclaw/issues/3025) | integration | Suporte a Trezor e MetaMask |
| [#3988](https://github.com/nearai/ironclaw/issues/3988) | architecture | Decomposição do `capability_port.rs` (acima de 3k linhas) |

### Tracks de roadmap visíveis

1. **Reborn v1 completion** — Port de canais v1, composição, WebChat v2
2. **Attested-signing substrate** — 10 PRs para camada de assinatura atestada
3. **Hook framework activation** — Produção atrás de flags (`HOOKS_ENABLED`, `HOOKS_THIRD_PARTY_ENABLED`)
4. **GSuite integration** — Port para `ironclaw_first_party_extensions` + composição

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Cenário | Issue | Reação |
|---------|-------|--------|
| Consumidores via crates.io estão pinned a 0.24.0 | [#3259](https://github.com/nearai/ironclaw/issues/3259) | Frustração — funcionalidades até 0.27.0 inacessíveis |
| Wallets suportados são limitados e não open-source | [#3025](https://github.com/nearai/ironclaw/issues/3025) | Solicitação de MetaMask/Trezor |
| `CLAUDE.md` tem nome confuso (não é específico do Claude) | [#3954](https://github.com/nearai/ironclaw/issues/3954) | Confusão na legibilidade |

### Satisfação implícita

- Atividade de PRs muito alta indica desenvolvimento ativo
- Múltiplos contribuidores (core + novos) enviando dependências e features
- O stack de 10 PRs de attested-signing mostra maturidade no planejamento de segurança

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente (>3 dias sem comentários)

| Issue | Criado | Escopo | Por que值得关注 |
|-------|--------|--------|-----------------|
| [#3969](https://github.com/nearai/ironclaw/issues/3969) | 2026-05-24 | Reborn GSuite | Fechar PR stack obsoleta |
| [#3968](https://github.com/nearai/ironclaw/issues/3968) | 2026-05-24 | Reborn GSuite | Coverage de harness |
| [#3967](https://github.com/nearai/ironclaw/issues/3967) | 2026-05-24 | Reborn GSuite | Wire first-party extensions |
| [#3962](https://github.com/nearai/ironclaw/issues/3962) | 2026-05-24 | composition | Hooks deps não wired no standalone composition root |
| [#3988](https://github.com/nearai/ironclaw/issues/3988) | 2026-05-24 | architecture | File >3k linhas precisa de decomposição |
| [#3954](https://github.com/nearai/ironclaw/issues/3954) | 2026-05-23 | docs | Rename de `CLAUDE.md` para algo semântico |
| [#3956](https://github.com/nearai/ironclaw/issues/3956) | 2026-05-23 | security | `RESOLVE_NO_XDEV` bind-mount containment |

### Risco técnico acumulado

1. **Dependência de CVEs do wasmtime** (#3259) — bloqueia publicação, afeta consumidores
2. **Segurança de credenciais** (#3917, #3564) — decisões pendentes antes de shipped
3. **E2E failing** (#3447) — regressions não resolvidas podem indicar instabilidade

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 25 | 🟢 Alta |
| PRs abertas (24h) | 29 | 🟢 Alta |
| Releases (24h) | 0 | 🔴 Paralisado |
| Falhas de CI | 1 | 🟡 Atenção |
| Issues de segurança abertas | 4 | 🟡 Atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw) para 2026-05-25.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-25

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade comunitária** em 25 de maio de 2026, com 14 issues atualizadas e 1 PR aberto nas últimas 24h. A saúde geral é **estável com foco em estabilidade**, evidenciado pelo volume significativo de bugs reportados no Console UI (3 issues) e no subsistema de tarefas cron (2 issues). Não há lançamentos novos, indicando possivelmente fase de consolidação pós-v1.1.8.post1. A participação comunitária está ativa com 35+ comentários acumulados nas issues recentes, demonstrando engajamento contínuo.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto está na versão **v1.1.8.post1**, conforme mencionado nas issues #4644 e #4643. Não há notas de migração ou breaking changes a documentar neste período.

---

## 3. Progresso do Projeto

### PR Aberto (1)

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) | `feat(chat): add customizable slash command shortcut menu` | DICKQI | 🟡 ABERTO | **Alto** — Resolve problema de descoberta de comandos. Atualmente o menu "/" exibe apenas 4-5 comandos mágicos, mas existem 20+ comandos nativos subutilizados. Permitirá configuração via painel de configurações (ícone de engrenagem). |

### Issues Fechadas (3)

| # | Título | Tipo | Relevância |
|---|--------|------|------------|
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | Deepseek模型think内容解析问题 | Bug/Question | **Média** — Problema de parsing do conteúdo "think" no deepseek-v4-flash. Provavelmente resolvido ou orientado. |
| [#3290](https://github.com/agentscope-ai/QwenPaw/issues/3290) | Add skill update functionality for outdated skills | Enhancement | **Alta** — Feature de atualização de skills implementada/comentada, melhorando gestão de skills desatualizados. |
| [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) | 会话结束自动总结机制 (Pre-hook Memory Archiving) | RFC | **Alta** — Proposta de archival automático de memória ao fim de sessões, aumentando utilidade do sistema de memória. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Tendência |
|---|--------|-------------|------|-----------|
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | Deepseek模型think内容解析问题 | 10 | Bug/Question | 🔴 Alta discussão — envolve compatibilidade com deepseek-v4-flash |
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI: tool calls often not displayed until page refresh | 6 | Bug | 🔴 3 bugs do Console UI simultâneos indicam refatoração necessária |
| [#4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) | Dream awakening task error | 4 | Bug | 🟡 Envolvendo integração WeChat |
| [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) | Console UI: reasoning chain not displayed for GLM-5.1 | 4 | Bug | 🟡 Problema específico de GLM-5.1 via OpenAI-compatible API |

### Análise de Demandas

**Padrão identificado:** O Console UI (frontend web) concentra **3 bugs críticos simultâneos**, sugerindo:
- Necessidade de refatoração na camada de renderização de tool calls e reasoning chains
- Possível regressão introduzida na v1.1.8.post1

---

## 5. Bugs e Estabilidade

### Bugs Abertos (7)

| Severidade | # | Título | Link |
|------------|---|--------|------|
| 🔴 **Alta** | #4644 | Console UI: tool calls não aparecem até refresh | [Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| 🔴 **Alta** | #4650 | Reasoning chain não exibido para GLM-5.1 | [Issue #4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) |
| 🔴 **Alta** | #4649 | Orphaned cron jobs não são limpos — tarefas fantasma | [Issue #4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) |
| 🟡 **Média** | #4653 | Cron jobs compartilham session com mensagens — tarefas interrompidas | [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) |
| 🟡 **Média** | #4616 | Dream awakening task error | [Issue #4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) |
| 🟡 **Média** | #4643 | MCP OAuth não suporta client_secret no token exchange | [Issue #4643](https://github.com/agentscope-ai/QwenPaw/issues/4643) |
| 🟡 **Média** | #4646 | Schema sanitizer converte boolean keywords em objetos inválidos | [Issue #4646](https://github.com/agentscope-ai/QwenPaw/issues/4646) |

### Análise de Estabilidade

**⚠️ Alerta:** Dois bugs críticos no subsistema de **cron jobs** (#4653 e #4649) indicam problemas de design na arquitetura de sessões e scheduler:
- Jobs agendados podem ser interrompidos por mensagens de usuários
- Jobs removidos de `jobs.json` continuam executando como "fantasmas"

**⚠️ Alerta:** **3 bugs no Console UI** com padrões distintos sugerem necessidade de:
- Auditoria na renderização de tool calls
- Verificação de compatibilidade com diferentes provedores OpenAI-compatible
- Testes de regressão para v1.1.8.post1

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features/Aprimoramentos (3)

| Prioridade | # | Título | Link | Sinal Estratégico |
|------------|---|--------|------|-------------------|
| 🟡 **Média** | #4645 | Support connecting QwenPaw Pet to remote daemon | [Issue #4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) | **Expansão de usabilidade** — desktop companion como frontend para servidor |
| 🟢 **Baixa** | #4647 | Display token speed/usage information at bottom of replies | [Issue #4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) | **Observabilidade** — feedback de custo/desempenho |
| 🟢 **Baixa** | #3290 | Skill update functionality | [Issue #3290](https://github.com/agentscope-ai/QwenPaw/issues/3290) | ✅ Closed — Já implementado |

### Sugestões Arquiteturais (2 — do mesmo autor)

| # | Título | Link | Implicação |
|---|--------|------|------------|
| #4652 | Enhancer memory system com "summary-association-reminder" | [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | **Memória inteligente** — transformar记录em aprendizado |
| #4651 | Auto-loading de normas operacionais (like Code Review Checklist) | [Issue #4651](https://github.com/agentscope-ai/QwenPaw/issues/4651) | **Proatividade** — carregar contexto relevante automaticamente |

### Sinais de Roadmap

- **Console UI v2:** Refatoração necessária (3 bugs abertos)
- **Sistema de Memória:** Evolução de "logging" para "aprendizado" é demanda clara
- **Desktop Pet ↔ Remote Daemon:** Arquitetura distribuída parece ser direção estratégica

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência | Issues |
|-----------|-----------|------------|--------|
| **UX do Console** | Ferramentas não aparecem em tempo real, exigindo refresh manual | 🔴 Alta | #4644 |
| **Integridade de Tarefas** | Cron jobs são imprevisíveis (interrompidos, órfãos) | 🔴 Alta | #4653, #4649 |
| **Descoberta de Funcionalidades** | Comandos slash desconhecidos sem atalhos visíveis | 🟡 Média | #4637 (PR) |
| **Memória Inefetiva** | Sistema atual apenas registra, não aprende/associa | 🟡 Média | #4652 |
| **Custo Transparente** | Ausência de métricas de tokens nas respostas | 🟢 Baixa | #4647 |

### Cenários de Uso Reportados

1. **Uso corporativo com GLM-5.1** — Integração via OpenAI-compatible API com necessidade de reasoning chain
2. **Desktop companion + servidor remoto** — Usuários querem UI leve local com processamento remoto
3. **Agentes de produtividade** — LLM como assistente pessoal para tarefas recorrentes (cron jobs)

### Satisfação/Insatisfação

- **Satisfeito:** comunidade ativa reporta bugs detalhadamente
- **Insatisfeito:** estabilidade do Console UI e cron jobs prejudica experiência em produção
- **Neutro:** sem releases recentes pode indicar fase de estabilidade antes de próxima grande versão

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou sem Atribuição

| # | Título | Criado | Dias | Link | Urgência |
|---|--------|--------|------|------|----------|
| #4616 | Dream awakening task error | 2026-05-22 | 3 | [Issue #4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) | 🟡 |
| #4643 | MCP OAuth client_secret | 2026-05-23 | 2 | [Issue #4643](https://github.com/agentscope-ai/QwenPaw/issues/4643) | 🟡 |
| #4645 | Remote daemon support | 2026-05-23 | 2 | [Issue #4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) | 🟢 |
| #4647 | Token usage display | 2026-05-23 | 2 | [Issue #4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) | 🟢 |
| #4652 | Memory enhancement | 2026-05-24 | 1 | [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | 🟢 |
| #4651 | Pre-op norms auto-loading | 2026-05-24 | 1 | [Issue #4651](https://github.com/agentscope-ai/QwenPaw/issues/4651) | 🟢 |

### Recomendação de Priorização

1. **Crítico:** Resolver issues #4644, #4650, #4649, #4653 (estabilidade)
2. **Alto:** Atribuir responsável para #4616 (integração WeChat)
3. **Médio:** Revisar PR #4637 para release futuro
4. **Baixo:** Avaliar proposals #4652 e #4651 para roadmap v1.2.x

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 11 |
| Issues fechadas | 3 |
| PRs abertos | 1 |
| PRs merged | 0 |
| Releases | 0 |
| Total de comentários | 35+ |
| Bugs críticos | 7 |
| Features em progresso | 1 (PR) |

---

*Relatório gerado em 2026-05-25. Dados extraídos do GitHub do projeto CoPaw/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-05-25

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um ritmo intenso de atividade, com **40 issues e 50 PRs atualizados nas últimas 24 horas**, evidenciando alta engajamento da comunidade. Não houve releases registradas no período. O foco predominante recai sobre bugs P1 no runtime e configuração (MCP, cron, memory), além de uma grande iniciativa de migração arquitetural com 15+ PRs simultâneos para padronização de allowlists em todos os canais. A transição para a v0.8-beta pareceem fase ativa de estabilização, com múltiplos problemas de configuração sendo identificados e corrigidos.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em ciclo beta (v0.8.0-beta-1), sem novas publicações de versões no período analisado.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6868](https://github.com/zeroclaw-labs/zeroclaw/pull/6868) | fix(mdbook): stabilize gettext catalog diffs | **Docs** — Normaliza saída do `cargo mdbook sync` para manter diffs reviewáveis em PRs de documentação |
| [#6863](https://github.com/zeroclaw-labs/zeroclaw/pull/6863) | fix(providers): preserve Ollama cloud suffix | **Provider** — Corrige tratamento de IDs `:cloud` para remotos privados, preservando aliases oficiais para credential-gated |

### PRs Abertos de Destaque

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) | feat(channels): selective channel builds | **Build** — Adiciona feature bundle `default-channels` e filtro por features compiladas, permitindo builds direcionados |
| [#6898](https://github.com/zeroclaw-labs/zeroclaw/pull/6898) | docs(channels): Signal and WhatsApp setup | **Docs** — Documentação dedicada para configuração de canais Signal (via `signal-cli daemon --http`) e WhatsApp (Cloud API mode) |

### Migração Arquitetural em Massa (AllowlistAspect)

Uma cadeia de **15+ PRs** (#6784 a #6798) está em progresso para substituir predicates `is_user_allowed()` descentralizados pelo trait compartilhado `aspect_std::AllowlistAspect` em todos os canais: Discord, iMessage, WhatsApp, Linq, Wati, MoChat, NextCloud Talk, Lark, Slack, QQ, DingTalk, WeCom, Twitter, Mattermost, Matrix, Nostr, Telegram, IRC, Email. **Impacto:** Padronização de segurança e manutenibilidade.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | Reações | Tema |
|-------|--------|-------------|---------|------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code provider streaming error | 9 | 👍 1 | Bug no provider de streaming com reasoning_content ausente |
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | show_tool_calls missing from [channel] | 5 | — | Feature gap entre schema v2 e v3 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation | 5 | — | Governança: PR lanes e automação de board |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | web_fetch allowed_private_hosts ineffective | 3 | — | Segurança: domínios privados resolvendo para IPs públicos |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Prefer lighter ZeroClaw | 3 | — | Arquitetura: remover código redundante de skills |
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | TUI Agent Chat | 3 | — | Feature: interface Ratatui para chat de agentes |

### Análise de Demandas

**Provider & Streaming:** A issue #5600 demonstra frustração contínua com provider Kimi, indicando necessidade de robustez no tratamento de APIs com `thinking` habilitado. **Arquitetura:** A proposta de "ZeroClaw mais leve" (#6165) sinaliza interesse em redução de acoplamento entre ferramentas built-in e skills. **UX/TUI:** A atividade em #6824 mostra demanda por interfaces terminal nativas além do gateway web.

---

## 5. Bugs e Estabilidade

### Bugs P1 — Criticidade Alta (Workflow Bloqueado)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878) | Bubblewrap fails on Fedora 43 (bwrap missing /lib64) | S1 | accepted |
| [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | max_tool_iterations in [runtime_profiles.*] sem efeito | S1 | accepted |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | Scheduled Jobs edit API 422 error | S1 | accepted |
| [#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) | Daemon channels exits unexpectedly in container | S1 | in-progress |

### Bugs P1 — Configuração/Default Sensíveis

| Issue | Título | Impacto |
|-------|--------|---------|
| [#6873](https://github.com/zeroclaw-labs/zeroclaw/issues/6873) | `mcp.enabled` defaults to false — MCP servers silently disabled | Configuração explícita obrigatória |
| [#6874](https://github.com/zeroclaw-labs/zeroclaw/issues/6874) | `mcp.deferred_loading` defaults to true — quebra tool calling na maioria dos LLMs | Breaking para workflows MCP |
| [#6871](https://github.com/zeroclaw-labs/zeroclaw/issues/6871) | Disabled memory still produces memory entries | Comportamento contraditório |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | risk_profile.allowed_tools não restringe MCP tools | Lacuna de segurança |

### Bugs P2 — Degraded Behavior

| Issue | Título | Área |
|-------|--------|------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi provider streaming API error | Provider |
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | show_tool_calls missing from [channel] schema v3 | Channel |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | web_fetch allowed_private_hosts ineffective para domínios DNS | Tool/WebFetch |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover não processa manifest.toml, apenas SKILL.toml | Skills |
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | Skill tools rejeitados pelo Anthropic API (formato de nome inválido) | Provider/Anthropic |
| [#6889](https://github.com/zeroclaw-labs/zeroclaw/issues/6889) | reqwest errors only show top-level message | Observabilidade |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso/Bloqueadas

| Issue | Título | Prioridade | Status |
|-------|--------|------------|--------|
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | TUI Agent Chat (Ratatui UI) | p2 | in-progress |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | Inverter zeroclaw-channels → zeroclaw-runtime dependency | p2 | accepted |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | MemoryStrategy trait para desacoplar política de memória | p2 | blocked (needs-maintainer-review) |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Agent capability flags para shared/ e workspace escape | p2 | accepted |

### RFCs Abertos

| Issue | Título | Escopo |
|-------|--------|--------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | Governança — lightweight PR lanes e automação de board |
| [#6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883) | RFC: Shared reply-message constructor on SendMessage | Arquitetura — DRY para constructors de reply |

### Features Propostas

| Issue | Título | Motivação |
|-------|--------|-----------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Prefer lighter ZeroClaw (remover código redundante de skills) | Redução de acoplamento e tamanho de código |
| [#6658](https://github.com/zeroclaw-labs/zeroclaw/issues/6658) | Install script support musl aarch64 linux | Suporte a mais plataformas |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Configuração Surpresa:** Usuários encontram defaults que silenciosamente desabilitam funcionalidades críticas (MCP enabled=false, deferred_loading=true, max_tool_iterations em path errado). **Sentimento:** Frustração com "funciona na teoria, não na prática."

2. **Container/Edge Deployments:** Falhas em Podman rootless (#6888) e Bubblewrap no Fedora 43 (#6878) indicam que casos de uso em containers e sandboxing precisam de maior cobertura de testes.

3. **Esquema v3 Breaking Changes:** A ausência de `show_tool_calls` no schema v3 (#6856) representa regressão de UX para usuários migrando de v2.

4. **Integração de Skills:** SkillImprover e ferramentas de skill não processam `manifest.toml` (#6645), criando inconsistência entre skills empacotadas e documentação.

### Cenários de Uso Reportados

- **Multi-channel com MCP:** Usuários tentam combinar MCP servers com configs de risk_profile e encontram lacunas de segurança (#6876).
- **Agentes em containers:** Deploy em Podman/Docker com canais configurados resulta em daemon crashes (#6888).
- **Scheduled Jobs:** Interface web de edição de jobs está desatualizada e retorna 422 (#6891).

---

## 8. Backlog que Merece Atenção

### Issues Antigas com Atividade Recente (potential stale)

| Issue | Idade | Título | Riscos |
|-------|-------|--------|--------|
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | ~57 dias | web_fetch allowed_private_hosts ineffective | Security high — DNS rebinding |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~31 dias | audit: track 153 commits lost in bulk revert | Code recovery — 153 commits pendentes |

### Issues Blocked/Needs-Maintainer-Review

| Issue | Título | Blocker |
|-------|--------|---------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Prefer lighter ZeroClaw | needs-maintainer-review |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | Remove remote-markdown-link block from skill audit | needs-maintainer-review |
| [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) | Update Docker documentation v0.7.5 | needs-maintainer-review |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | MemoryStrategy trait | needs-maintainer-review |

### PRs Aguardando Autor Action

Os **15+ PRs de migração AllowlistAspect** (#6784–#6798) estão marcados com `needs-author-action` e representam trabalho significativo pendente de revisão.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues ativas (24h) | 37 | Volume alto de trabalho em aberto |
| PRs abertos (24h) | 44 | Pipeline saudável |
| PRs merged (24h) | 6 | Taxa de resolução moderada |
| Bugs P1 abertos | ~12 | Prioridade crítica para estabilização |
| Releases (24h) | 0 | Projeto em fase beta |
| RFCs ativas | 2 | Governança ativa |

**Recomendação:** O projeto se beneficiaria de uma sprint focada em estabilização de bugs P1 de configuração (MCP defaults, max_tool_iterations) antes do próximo beta release. A migração de AllowlistAspect, embora arquiteturalmente correta, está criando carga significativa de review.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*