# Resumo diário do ecossistema de agentes de IA 2026-08-11

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-10 20:36 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-11

---

## 1. Panorama do Dia

O projeto NullClaw mantém uma atividade moderada com baixa intensidade de mudanças nas últimas 24 horas. Apenas **1 issue foi fechada** (adição da ferramenta client-side `a2a_call`), enquanto **1 PR permanece aberta** (atualização de dependência Docker via Dependabot). Não houve lançamentos de novas versões. O projeto continua estável, sem reportes de bugs críticos ou regressões, indicando um período de maturidade e manutenção incremental.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último ciclo de release parece ter ocorrido anteriormente, sem novas versões hoje. Recomenda-se monitorar o repositório para próximos lançamentos que possam incluir a funcionalidade `a2a_call` recém-integrada.

---

## 3. Progresso do Projeto

### PR Merged/Closed Hoje

| # | Tipo | Título | Status |
|---|------|--------|--------|
| #700 | Issue Closed | Add a2a_call client tool for calling remote agents | ✅ Closed |

**Análise:**
A issue #700 representa uma **adição significativa** ao NullClaw. A funcionalidade implementa o lado cliente do protocolo A2A (versão 0.3.0), permitindo que agentes NullClaw enviem requisições `message/send` JSON-RPC para agentes remotos. Isso expande a capacidade do projeto de interoperar em arquiteturas multiagente distribuídas.

**Link:** [nullclaw/nullclaw Issue #700](https://github.com/nullclaw/nullclaw/issues/700)

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Reações | Comentários |
|---|--------|---------|-------------|
| #700 | Add a2a_call client tool for calling remote agents | 👍 1 | 1 |

**Análise:**
A issue #700 demonstra interesse da comunidade em **expandir a capacidade de comunicação entre agentes**. O cenário de uso descrito — um "doorman" público conectando a um agente pessoal privado — evidencia a demanda por arquiteturas de agente federadas. A presença de 1 comentário indica discussão técnica ativa durante o desenvolvimento.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24 horas.**

O projeto não apresenta indicadores de instabilidade hoje. A ausência de issues abertas com标签 `bug` ou `crash` sugere uma base de código saudável.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PR Aberta Relevante

| # | Título | Tipo | Status |
|---|--------|------|--------|
| #956 | ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group | Dependência | 🟡 Open |

**Análise:**
A PR #956, gerada automaticamente pelo Dependabot, propõe atualização do Alpine Linux de 3.23 para 3.24 no grupo de imagens Docker. Embora seja uma atualização de dependência rotineira, ela indica:

- **Manutenção ativa** do ambiente containerizado
- **Conformidade com práticas de segurança** (atualizações de imagem base)

**Link:** [nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)

### Sinais de Roadmap
A implementação de `a2a_call` (issue #700) pode sinalizar发展方向 futuro:
- Suporte completo ao protocolo A2A (cliente + servidor)
- Funcionalidades de descoberta e registro de agentes
- Autenticação e autorização em cenários multiagente

---

## 7. Resumo de Feedback dos Usuários

### Cenário de Uso Identificado

**Agentes Federados:**
O autor da issue #700 descreve um caso de uso real:

> *"I run two nullclaw instances — a public-facing doorman and a private personal agent on..."*

**Dores Identificadas:**
| Dor | Descrição |
|-----|-----------|
| Falta de client-side A2A | NullClaw servia o protocolo A2A mas não conseguia consumi-lo como cliente |
| Interoperabilidade limitada | Impossibilidade de comunicação agent-to-agent em arquiteturas distribuídas |

**Nível de Satisfação:** ⬆️ Positivo — A comunidade demonstra interesse em funcionalidades que expandem a utilidade do projeto para cenários de produção.

---

## 8. Backlog que Merece Atenção

### Items sem Resposta Recente (⚠️ Monitorar)

| # | Título | Última Atualização | Status |
|---|--------|-------------------|--------|
| — | Nenhum item crítico identificado hoje | — | — |

**Nota:** Com base nos dados de 24 horas fornecidos, não há backlog crítico visível. Recomenda-se verificação manual do repositório para issues antigas (mais de 30 dias sem atividade) que possam necessitar de triagem ou decisão de encerramento.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade de código | 🟡 Moderada | 1 feature closed, 1 dependency PR open |
| Bugs/Issues críticos | 🟢 Nenhum | Zero reportes negativos |
| Engajamento comunitário | 🟡 Baixo-Moderado | 1 reação, 1 comentário |
| Manutenção de dependências | 🟢 Ativa | Dependabot em funcionamento |
| Releases | 🔴 Nenhuma | Projeto estável sem updates urgentes |

---

**Próximos Passos Recomendados:**
1. Revisar e merge da PR #956 (dependência Docker)
2. Documentar a nova funcionalidade `a2a_call` em releases notes
3. Avaliar inclusão de `a2a_call` em changelog/release notes

---

*Relatório gerado em 2026-08-11 com base em dados do GitHub.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-08-11  
**Projetos Analisados:** 7 repositórios (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade acelerada com polarização clara entre projetos em fase de **consolidação técnica** (NullClaw, PicoClaw) e outros em **hipergrowth** (NanoBot, Hermes Agent, IronClaw, CoPaw, ZeroClaw). A segurança emerge como tema transversal — desde vazamento de credenciais em perfis multiplexados (Hermes Agent) até múltiplas vulnerabilidades S0 em canais de comunicação (ZeroClaw). A interoperabilidade via protocolos como A2A (Agent-to-Agent) e integrações OAuth para MCP ganham tração, enquanto a estabilidade de desktop (macOS/Windows) e a experiência multi-canal (Telegram, Slack, Discord, WhatsApp) representam as fronteiras técnicas mais desafiadoras. ZeroClaw é o projeto com maior volume de issues de segurança críticas pendentes (14+ p1), enquanto NanoBot lidera em velocidade de correção de bugs de impacto financeiro (loop infinito de 10M tokens endereçado em horas).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Avaliação de Saúde | Prioridade Técnica |
|---------|:------------:|:---------:|:----------:|:--------------:|:-----------------:|:------------------:|
| **NullClaw** | 1 | 1 | 0 | 0 | 🟡 Moderada | Estável/maturidade |
| **NanoBot** | 5 | 21 | 10 | 0 | 🟢 Alta | Bugs críticos, OAuth MCP |
| **Hermes Agent** | 50 | 50 | ~15 | 0 | 🟠 Alerta | Desktop P1, Python 3.14 |
| **PicoClaw** | 4 | 8 | 6 | 0 | 🟡 Moderada-Alta | Loop infinito, segurança |
| **IronClaw** | 50 | 50 | 21 | 1 (RC) | 🟢 Boa | Streaming, multi-canal |
| **CoPaw** | 40 | 50 | 20 | 0 | 🟠 Alerta | Providers strict, UI |
| **ZeroClaw** | 50 | 50 | 0 | 0 | 🔴 Crítica | 14+ bugs S0/S1 security |

**Observações:**
- **ZeroClaw** apresenta backlog crítico com 50 PRs abertos e nenhum merge em 24h — indicador de gargalo em review ou CI.
- **IronClaw** é o único projeto com release formal (v1.1.1-rc.1), demonstrando disciplina de versionamento.
- **NanoBot** tem a melhor taxa de resolução de bugs de impacto financeiro (loop infinito em 23 minutos).

---

## 3. Posicionamento do Projeto Principal

### Análise por Projeto

| Projeto | Diferenciador Técnico | Tamanho Comunidade | Posição Competitiva |
|---------|----------------------|--------------------|--------------------|
| **NullClaw** | Implementação de referência do protocolo A2A (client-side `a2a_call` recém-integrado) | ⬛ Baixa | Nicho: interoperabilidade multiagente federada |
| **NanoBot** | OAuth para MCP remotos, Memory/Dream consolidation, WebUI tabbed workbench | 🟢 Alta | Amplitude de integrações (XMind, Notion, Linear) |
| **Hermes Agent** | Desktop-first, multi-provider reasoning (Qwen, Gemini, vLLM), perfil multiplexado | 🟢 Alta | Produtividade desktop multi-plataforma |
| **PicoClaw** | Segurança shell com `customAllowPatterns`, schema v4, renderização Telegram native | 🟡 Média | Automação de shell em edge (Raspberry Pi) |
| **IronClaw** | Design System AI-first, Telegram linked-device (MTProto), durable state profile-agnostic | 🟢 Alta | Enterprise multi-canal com UX consistente |
| **CoPaw** | ReMe Light memory system com reranker, marketplace unificado, desktop window geometry | 🟢 Alta | Produtividade com memória persistente |
| **ZeroClaw** | OpenAI-compatible gateway, Hailo-Ollama provider nativo, per-dimension LLM judge | 🟡 Média | Operadores de larga escala, avaliação de agentes |

**Projeto mais diferenciado:** **NullClaw** ocupa posição única como referência de interoperabilidade A2A, embora com baixa atividade comunitária. **ZeroClaw** destaca-se pelo endpoint OpenAI-compatible, mas a saúde do projeto está comprometida por 14+ vulnerabilidades S0.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança — Tema Transversal Crítico

| Projeto | Problema de Segurança | Severidade |
|---------|----------------------|------------|
| Hermes Agent | Credenciais vazam entre perfis em `multiplex_profiles` (#82936) | P2 / security-boundary |
| PicoClaw | Hardening de prompt remoto e exec boundaries (PR #3297 merged) | Alta — mitigado |
| ZeroClaw | 14+ bugs S0/S1: SSRF em file_download, canais sem autenticação (WhatsApp, Bluesky, Reddit), header injection em /api/pair | S0 — crítico |
| IronClaw | Fail-closed para subjects não-roteados (PR #7110) | Média-alta |

**Conclusão:** Segurança é a preocupação mais disseminada, especialmente em integrações multi-canal e configurações de sandbox.

### 4.2 Estabilidade Multi-Canal

| Projeto | Canais Afetados | Status |
|---------|-----------------|--------|
| IronClaw | Slack, Telegram | Rich working indicators + spam fix |
| PicoClaw | Discord, Telegram | Dispatch rules com falhas em sessões |
| ZeroClaw | WhatsApp, Bluesky, Reddit, LINE, Matrix, Telegram | Autenticação ausente em múltiplos canais |
| NanoBot | WeChat (QR login) | Credenciais persistidas ignoradas |

**Conclusão:** A heterogeneidade de canais de comunicação gera bugs específicos por plataforma, com ZeroClaw liderando em número de integrações problemáticas.

### 4.3 Interoperabilidade e Providers

| Projeto | Problema | Impacto |
|---------|----------|---------|
| CoPaw | Providers strict (StepFun) rejeitam requests | Integração corporativa |
| Hermes Agent | DeepSeek v4 rejeita `tool_calls: []` | Session-wedging |
| NanoBot | Agnes AI double-encode de argumentos JSON | Falha em MCP tools |
| NullClaw | Client-side A2A inexistente (agora implementado) | Arquiteturas federadas |

**Conclusão:** A compatibilidade com providers LLM strict e protocolos como A2A/MCP é diferenciador técnico crescente.

### 4.4 Memory e Reasoning

| Projeto | Feature | Bug Associado |
|---------|---------|---------------|
| NanoBot | Dream memory consolidation | Loop infinito consumindo 10M tokens |
| CoPaw | ReMe Light com reranker | `disable_thinking` ignorado |
| Hermes Agent | Chain-of-thought em replay | Qwen3.6 reasoning stripping |
| IronClaw | Durable retrieval | Profile-agnostic migration |

**Conclusão:** A gestão de memória de longo prazo e preservação de reasoning chains são desafios técnicos compartilhados.

---

## 5. Análise de Diferenciação

### 5.1 Por Foco de Produto

| Categoria | Projetos Líderes | Característica |
|-----------|-----------------|----------------|
| **Desktop-first** | Hermes Agent, CoPaw | Experiência GUI rica, multi-sessão |
| **Shell/CLI** | PicoClaw, NullClaw | Automação, edge deployment |
| **Multi-canal** | IronClaw, ZeroClaw | Telegram-first, WhatsApp, Slack |
| **Interoperabilidade** | NullClaw, ZeroClaw | A2A, OpenAI-compatible |
| **Avaliação** | ZeroClaw | LLM-judge per-dimension |

### 5.2 Por Público-Alvo

| Público | Projetos Recomendados |
|---------|----------------------|
| **Enterprise multi-canal** | IronClaw (Telegram linked-device, rich indicators) |
| **Desenvolvedores de plugins** | NanoBot (Agent Plugins CLI), ZeroClaw (plugin validation) |
| **Edge/Raspberry Pi** | PicoClaw (DeepSeek via OpenCode, low-footprint) |
| **Pesquisa/agentes federados** | NullClaw (A2A reference) |
| **Avaliação de agentes** | ZeroClaw (per-dimension grader) |
| **Produtividade desktop** | Hermes Agent, CoPaw |

### 5.3 Por Arquitetura

| Arquitetura | Projetos | Vantagem |
|-------------|---------|----------|
| Modular com plugins | NanoBot, CoPaw | Extensibilidade vendor-neutral |
| Monolítico estável | NullClaw, PicoClaw | Simplicidade de manutenção |
| Microsserviços | IronClaw, ZeroClaw | Escalabilidade por canal |
| Desktop-embedded | Hermes Agent | Offline capability |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs Merged (24h) | Taxa de Resolução | Fase |
|---------|:----------------:|:-----------------:|------|
| **NanoBot** | 10 | 48% (10/21) | 🚀 Hipergrowth |
| **IronClaw** | 21 | 42% (21/50) | 🚀 Hipergrowth |
| **CoPaw** | 20 | 40% (20/50) | 🚀 Hipergrowth |
| **PicoClaw** | 6 | 75% (6/8) | 📈 Consolidando |
| **Hermes Agent** | ~15 | ~30% (15/50) | 📈 Consolidando |
| **NullClaw** | 0 | 0% (0/1) | 🔒 Maturidade |
| **ZeroClaw** | 0 | 0% (0/50) | ⚠️ Gargalo |

### 6.2 Indicadores de Maturidade

| Indicador | Projetos Maduros | Projetos em Crescimento |
|-----------|-----------------|------------------------|
| **Releases formais** | IronClaw (v1.1.1-rc.1), CoPaw (v2.1.0 em preparo) | NanoBot, Hermes, ZeroClaw |
| **Dependabot ativo** | NullClaw, PicoClaw, Hermes Agent | NanoBot, CoPaw |
| **Dívida técnica sendo paga** | IronClaw (7+ arch issues fechadas), PicoClaw (schema v4) | — |
| **Processo RFC** | ZeroClaw (23 comentários em RFC #6808) | — |

### 6.3 Saúde Comunitária

| Projeto | Issues Abertas | Backlog Crítico | Satisfação |
|---------|:--------------:|:---------------:|:----------:|
| **IronClaw** | 26 | 2 (DOCX, agent loop) | 🟢 Positiva |
| **NanoBot** | ~15 | 2 (sem triagem) | 🟢 Positiva (bugs corrigidos rápido) |
| **CoPaw** | 34 | 6 críticas | 🟡 Mista |
| **Hermes Agent** | 30+ | 1 P1 desktop | 🟠 Insatisfeita (desktop) |
| **PicoClaw** | 4 | 1 alta (loop infinito) | 🟡 Mista |
| **ZeroClaw** | 50 | 14 S0/S1 | 🔴 Crítica |
| **NullClaw** | ~1 | Nenhum | 🟢 Estável |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Desktop como primário** | Hermes Agent (P1 macOS freeze), CoPaw (window geometry) | Usuários esperam experiência GUI completa |
| **Memory persistente** | NanoBot (Dream), CoPaw (ReMe Light), IronClaw (durable state) | Diferenciação por capacidade de memória de longo prazo |
| **Multi-canal nativo** | IronClaw (Telegram linked-device), ZeroClaw (WhatsApp/Bluesky/LINE) | Agentes como hubs de comunicação unificada |
| **Interoperabilidade A2A** | NullClaw (client-side), NanoBot (MCP OAuth) | Ecossistema federado de agentes |
| **Segurança como feature** | PicoClaw (schema v4), Hermes Agent (profile isolation), ZeroClaw (SSRF) | Auditorias e hardening são expectativas base |

### 7.2 Tendências Técnicas

| Tendência | Evidência | Projetos Pioneiros |
|-----------|-----------|-------------------|
| **OAuth para integrações MCP** | NanoBot (XMind, Notion, Linear) | NanoBot |
| **OpenAI-compatible endpoints** | ZeroClaw (gateway) | ZeroClaw |
| **LLM-judge evaluation** | ZeroClaw (per-dimension grader) | ZeroClaw |
| **Design System AI-first** | IronClaw (Storybook, theming) | IronClaw |
| **Tabbed workbench UI** | NanoBot (columns, rows, grid) | NanoBot |
| **Durable state profile-agnostic** | IronClaw (workspace migration) | IronClaw |

### 7.3 Tendências de Mercado

| Sinal | Observação |
|-------|------------|
| **Enterprise adoption** | IronClaw (Company Brain), Hermes Agent (multi-profile corporate), CoPaw (Docker enterprise) |
| **Edge deployment** | PicoClaw (Raspberry Pi, DeepSeek via OpenCode) |
| **Avaliação formal de agentes** | ZeroClaw (per-dimension LLM-judge) |
| **Governança de agentes** | ZeroClaw (RFC #6808 Work Lanes, Board Automation) |
| **Observabilidade em produção** | NanoBot (TokenUsageHook), IronClaw (logprobs capture) |

### 7.4 Riscos Sistêmicos Identificados

1. **ZeroClaw** — 14+ vulnerabilidades S0/S1 simultâneas representam risco reputacional para o ecossistema se exploradas
2. **Multi-canal sem autenticação** — Padrão emergente em ZeroClaw, IronClaw, PicoClaw pode ser extrapolado para novos canais
3. **Memory leaks em desktop** — Hermes Agent (5GB fleet footprint) indica problemas de escala corporativa
4. **Loop infinito de tokens** — Bug de NanoBot (10M tokens em 23 min) demonstra vulnerabilidade financeira em agentes de produção

---

## Conclusão Executiva

| Dimensão | Líder | Projeto de Risco | Oportunidade |
|----------|-------|-----------------|--------------|
| **Velocidade de entrega** | IronClaw (21 PRs/24h) | ZeroClaw (0 merges) | NanoBot (melhor taxa bug→fix) |
| **Segurança** | PicoClaw (schema v4) | ZeroClaw (14 S0/S1) | Hermes Agent (profile isolation) |
| **Interoperabilidade** | NullClaw (A2A client) | — | ZeroClaw (OpenAI endpoint) |
| **Experiência do usuário** | IronClaw (Design System) | Hermes Agent (desktop P1) | CoPaw (ReMe Light) |
| **Maturidade de produto** | IronClaw (RC release) | — | CoPaw (v2.1.0 iminente) |

**Recomendação estratégica:** Para decisões de adoção, priorizar **IronClaw** (saúde balanceada + release discipline) e **NanoBot** (velocidade de iteração + correções de impacto financeiro). Evitar **ZeroClaw** até resolução do backlog de segurança. Monitorar **NullClaw** como referência de interoperabilidade A2A.

---

*Relatório gerado em 2026-08-11 com base em dados agregados de 7 repositórios GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-11

---

## 1. Panorama do Dia

O ecossistema NanoBot apresenta **alta atividade diária** com 26 eventos totais (5 issues + 21 PRs) nas últimas 24h, indicando um projeto em evolução acelerada. Das 10 PRs fechadas/merged, destaque para a implementação de OAuth para servidores MCP remotos (#5316) e múltiplas correções de estabilidade no backend WebUI e agent. Duas issues abertas permanecem sem comentários, sinalizando possíveis gargalos de triagem, enquanto 11 PRs permanecem abertas aguardando review. A ausência de releases formais indica trabalho contínuo em branch de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões tagadas hoje. Isso é consistente com o padrão de integração contínua observado nas PRs, sugerindo que mudanças estão sendo acumuladas para uma release futura. Recomenda-se monitorar a branch `main` para convergence de features bloqueantes como OAuth MCP (#5316) e a refatoração de settings (#5321).

---

## 3. Progresso do Projeto

As **10 PRs fechadas/merged** representam avanços significativos em múltiplas áreas:

| PR | Tipo | Impacto |
|----|------|---------|
| [#5316](https://github.com/HKUDS/nanobot/pull/5316) | feat(mcp) | OAuth via browser para servidores Streamable HTTP/SSE remotos com presets Xmind, Notion e Linear |
| [#5321](https://github.com/HKUDS/nanobot/pull/5321) | refactor(webui) | Gateway agora gerencia serviços de settings com operações atômicas de read-modify-write |
| [#5319](https://github.com/HKUDS/nanobot/pull/5319) | refactor(agent) | Substituição de acesso reflexivo por `RuntimeControl` explícito com snapshots allowlisted |
| [#5317](https://github.com/HKUDS/nanobot/pull/5317) | fix(webui) | Mutações movidas para WebSocket autenticado — elimina vazamentos de estado por GET/query-string |
| [#5313](https://github.com/HKUDS/nanobot/pull/5313) | fix(mcp) | Cleanup de conexões HTTP falhadas; isolamento de cancelamento AnyIO por servidor |
| [#5325](https://github.com/HKUDS/nanobot/pull/5325) | fix(files) | Rejeição de `edit_file` com old_text == new_text (no-op edits) |
| [#5318](https://github.com/HKUDS/nanobot/pull/5318) | refactor(webui) | Helpers de projeção de eventos extraídos para `thread-event-projection.ts` |
| [#5315](https://github.com/HKUDS/nanobot/pull/5315) | fix(webui) | UX recovery e empty states melhorados; auth challenge refatorado |
| [#5310](https://github.com/HKUDS/nanobot/pull/5310) | fix(weixin) | QR login forçado agora ignora credenciais persistidas |
| [#5312](https://github.com/HKUDS/nanobot/pull/5312) | docs | Guia WebUI atualizado cobrindo Temporary Chat, Skills e Restricted-mode |

**Conclusão:** O foco predominante é em **estabilidade e segurança** (7 de 10 PRs), com emphasis particular na refatoração do WebUI e isolamento de falhas em integrações externas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Comentários | Tema |
|-------|-------------|------|
| [#5297](https://github.com/HKUDS/nanobot/issues/5297) | 3 | Solicitação de OAuth web para MCP (feature request, **CLOSED**) |
| [#5324](https://github.com/HKUDS/nanobot/issues/5324) | 2 | Loop infinito na memória Dream com 10M tokens consumidos (**CLOSED**) |

### Análise de Demandas

**MCP OAuth (#5297)** — A comunidade expressa necessidade de autenticação web para provedores MCP que exigem OAuth (ex: XMind API). Este tema já foi **endereçado** pela PR #5316, demonstrando responsividade do time.

**Loop Infinito Dream (#5324)** — Usuário reportou consumo de ~10M tokens em 23 minutos durante consolidação de memória. Corrigido via PR #5325 com rejeição de no-op edits. Este bug indica vulnerabilidade crítica em loops degoal sostenidos.

---

## 5. Bugs e Estabilidade

### Issues Abertas (ativas)

| # | Severidade | Descrição | Status |
|---|------------|-----------|--------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Medium | Nanobot repete mensagens durante raciocínio (aparece aleatoriamente) | **OPEN** — 0 comments |
| [#5311](https://github.com/HKUDS/nanobot/issues/5311) | Medium-High | Agnes AI double-encode de argumentos JSON aninhados causa falha em MCP tools | **OPEN** — 0 comments, Fix proposta em [#5314](https://github.com/HKUDS/nanobot/pull/5314) |

### Issues Fechadas (resolvidas hoje)

| # | Tipo | Bug | Resolução |
|---|------|-----|-----------|
| [#5324](https://github.com/HKUDS/nanobot/issues/5324) | Bug | Loop infinito Dream memory com 10M tokens | Merged [#5325](https://github.com/HKUDS/nanobot/pull/5325) |
| [#5300](https://github.com/HKUDS/nanobot/issues/5300) | Bug | MCP connection failure causa RuntimeError + event loop crash | Endereçado por [#5313](https://github.com/HKUDS/nanobot/pull/5313) |

### Matriz de Severidade

| Prioridade | Count | Exemplos |
|------------|-------|---------|
| **P0** (Crítica) | 0 | — |
| **P1** (Alta) | 2 | [#5320](https://github.com/HKUDS/nanobot/pull/5320) (Docker capabilities), [#5317](https://github.com/HKUDS/nanobot/pull/5317) (WebSocket mutations) |
| **P2** (Média) | 8+ | Repetição de mensagens, double-encode, UX states |

**Nota:** A issue #5327 (repetição aleatória de mensagens) permanece **sem triagem**, merecendo atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas (solicitadas)

| # | Tipo | Feature | Complexidade Estimada |
|---|------|---------|----------------------|
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | feat | Integração de Agent Plugins com CLI Apps | Alta |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) | feat | API de registros estruturados de token usage | Média |
| [#5322](https://github.com/HKUDS/nanobot/pull/5322) | feat | Workbench com tabs e panes para WebUI | Alta |

### Sinais de Roadmap Identificados

1. **Agent Plugins v1 (#5288)** — Extensão do modelo de pluginsvendor-neutral, permitindo projects externos como `nanobot-dev/computer-use` operarem como plugins portáveis. Define direção de arquitetura.

2. **OAuth para MCP Remotos (#5316, #5297)** — Funcionalidade recentemente merged indica prioridade em integrações de terceiros via OAuth.

3. **Tabbed Workbench (#5322)** — Nova UI com layouts flexíveis (columns, rows, grid, monocle) sinaliza foco em experiência multi-sessão.

4. **Token Usage Tracking (#5299)** — Exposição de `TokenUsageHook` e endpoint `/api/settings/usage/records` sugere maturidade em observabilidade e billing.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|-----------|---------|
| Loop infinito consumindo tokens excessivos | 1 relato grave | ~10M tokens / 23 min (meio mês de uso) |
| Repetição aleatória de mensagens | 1 relato | Confusão na experiência de uso |
| Falhas de conexão MCP crashando gateway | 1 relato | Inestabilidade em produção |
| Double-encode em providers custom | 1 relato | Incompatibilidade com Agnes AI |

### Cenários de Uso Observados

- **Integração empresarial:** OAuth com XMind, Notion, Linear indica uso em contextos corporativos.
- **Desenvolvimento de plugins:** Issues como #5288 sugerem ecossistema de desenvolvedores extending NanoBot.
- **Memory/Dream:** Consolidação de memória é feature ativamente usada com casos de edge cases sendo descobertos.

### Satisfação/Insatisfação

**Positivo:**
- Time responsivo a bugs críticos (loop infinito endereçado em horas).
- Documentação atualizada continuamente (#5312).

**Negativo:**
- Issues sem triagem (#5327, #5311) geram frustração.
- Bug de crash por connection failure (#5300) indica gaps em error handling em produção.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou stagnadas

| # | Idade | Título | Prioridade Sugerida |
|---|-------|--------|---------------------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 1 dia | Nanobot repeats same message while reasoning | **Alta** — bug user-facing |
| [#5311](https://github.com/HKUDS/nanobot/issues/5311) | 1 dia | Agnes AI double-encodes nested-object arguments | **Média** — tem fix draft #5314 |

### PRs Abertas há >3 dias sem merge

| # | Idade | Título | Status |
|---|-------|--------|--------|
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | 4 dias | feat(plugins): integrate Agent Plugins with CLI Apps | **OPEN** — aguardando review |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 6 dias | fix(agent): bound sustained-goal continuation | **OPEN** — tem conflict |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 5 dias | fix(session): prevent stale background task saves | **OPEN** — P0 |

### Recomendações de Ação

1. **Triagem imediata** de #5327 e #5311 — ambas sem comentários.
2. **Review de #5257** — bug P2 com conflicts; bound de goal continuation é crítico para controle de custos.
3. **Merge de #5314** — corrige #5311 e desbloqueia compatibilidade com Agnes AI.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-11. Para mais detalhes, consulte [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-11

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade** em 11 de agosto de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Não houve lançamentos formais, mas um volume significativo de PRs aguarda revisão ou merge, sugerindo uma fase intensiva de estabilização. As principais preocupações concentram-se em **estabilidade do desktop** (macOS unresponsive, memory leak), **segurança de credenciais** em perfis multiplexados, e **compatibilidade com Python 3.14**. A comunidade está engajada com 30+ issues ativas e múltiplos contribuidores simultâneos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com intensas atividades de bugfix que potencialmente antecederão uma nova versão de estabilização (provavelmente v0.20.x ou v0.21.0).

---

## 3. Progresso do Projeto

Os seguintes PRs representam avanços significativos merged/fechados nas últimas 24h:

| PR | Título | Impacto |
|----|--------|---------|
| [#83315](https://github.com/NousResearch/hermes-agent/pull/83315) | fix: never send empty tool_calls arrays to strict providers | **Crítico** — corrige session-wedging em providers DeepSeek v4 que rejeitam `tool_calls: []` com HTTP 400 |
| [#83279](https://github.com/NousResearch/hermes-agent/pull/83279) | fix(agent): sanitize empty tool_calls in internal retry loop | Complementa #83315 — garante que o loop de retry do agente não produza arrays vazios |
| [#83406](https://github.com/NousResearch/hermes-agent/pull/83406) | fix(state,desktop,runtime): EMFILE cascade | **Desktop** — corrige file-descriptor leak no WAL-reader, reapa processos órfãos `hermes serve`, e define nofile floor |
| [#83433](https://github.com/NousResearch/hermes-agent/pull/83433) | fix(python): support Python 3.14 | Garante compatibilidade com Python 3.14.4 mantendo suporte a 3.11-3.13 |
| [#83436](https://github.com/NousResearch/hermes-agent/pull/83436) | fix: isolate profile gateway restart environments | **Segurança** — impede vazamento de credenciais entre perfis durante reinício do gateway |
| [#83434](https://github.com/NousResearch/hermes-agent/pull/83434) | fix(update): pin uv installs to running interpreter | Corrige crash em instalações pip no Windows onde `hermes update` falha com interpreter not found |
| [#83397](https://github.com/NousResearch/hermes-agent/pull/83397) | [Bug] SQLite file descriptor leak: close SessionDB connections on exception paths | Corrige leaks de FD quando exceções descartam SessionDB antes do setup completo |

**Foco predominante:** estabilização de desktop, segurança de perfis, e compatibilidade com Python 3.14.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Categoria |
|-------|--------|:-----------:|:--:|-----------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop unresponsive after ~5 messages (macOS 27 beta) | 27 | 0 | **Bug P1** |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Installer fails at desktop stage (Windows) | 13 | 0 | Bug P2 (closed) |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | search_files returns 0 results on Windows (rg/MSYS conflict) | 12 | 1 | Bug P2 |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush after compression — "full disk" misleading error | 10 | 0 | Bug P2 |
| [#56004](https://github.com/NousResearch/hermes-agent/issues/56004) | Qwen3.6 reasoning stripped on replay | 9 | 5 | Bug P2 |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Support service_tier (flex) for Gemini | 4 | **7** | Feature P3 |

### Análise de Demandas

1. **Desktop é o componente mais problemático** — issues sobre freeze, memory leak (#77311), text truncation (#62774), e UI refresh (#56757) indicam dívida técnica significativa na camada desktop.

2. **Windows sigue sendo plataforma problemática** — 4+ issues sobre caminhos absolutos Windows, instalação, e plugins React (#80560).

3. **Multi-provider reasoning** — issue #56004 com 5 👍 indica demanda por preservação de chain-of-thought em provedores Qwen/vLLM.

4. **Gemini Flex** (#12700) com 7 👍 é a feature request mais votada — 50% redução de custo para workloads batch é atrativo.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 — Críticos (1)

- [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) **Desktop unresponsive** — App congela completamente após ~5 mensagens no macOS 27 beta, bloqueando até Settings. Sem workaround. 27 comentários indicam impacto amplo.

#### 🟠 P2 — Altos (10+ issues)

| Issue | Título | Platform | Sweeper Risk |
|-------|--------|----------|--------------|
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Installer fails at desktop stage | Windows | — |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | search_files 0 results (rg/MSYS) | Windows | — |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Compression flush → "full disk" error | All | session-state |
| [#56004](https://github.com/NousResearch/hermes-agent/issues/56004) | Qwen reasoning stripped on replay | All | — |
| [#81793](https://github.com/NousResearch/hermes-agent/issues/81793) | MCP Client loses Mcp-Session-Id | All | — |
| [#80205](https://github.com/NousResearch/hermes-agent/issues/80205) | sessions recover --allow-partial omits tail | All | session-state |
| [#80255](https://github.com/NousResearch/hermes-agent/issues/80255) | close() uses TRUNCATE checkpoint (DB corruption) | All | session-state |
| [#82936](https://github.com/NousResearch/hermes-agent/issues/82936) | **Secrets leak in multiplex_profiles** | All | **security-boundary** |
| [#83220](https://github.com/NousResearch/hermes-agent/issues/83220) | approvals.timeout → OverflowError (macOS) | macOS | — |
| [#83378](https://github.com/NousResearch/hermes-agent/issues/83378) | disk-cleanup deletes npm/pyright installs | All | — |

#### 🟡 P3 — Medios (15+ issues)

Incluem: Python 3.14 crash (#58596), Google Chat sessions (#83353), Portuguese text truncation (#62774), Plugin SDK React #310 on Windows (#80560 closed), Desktop memory unbounded (#77311).

### ⚠️ Alerta de Segurança

**[#82936](https://github.com/NousResearch/hermes-agent/issues/82936)** — Sob `gateway.multiplex_profiles: true`, segredos do perfil default vazam para subprocessos de perfis secundários. severity: **P2, sweeper:risk-security-boundary**. PR relacionado: [#83436](https://github.com/NousResearch/hermes-agent/pull/83436).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Destacadas

| Issue | Título | 👍 | Componentes | Sinal de Roadmap |
|-------|--------|:--:|-------------|------------------|
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Support service_tier "flex" for Gemini | **7** | agent, gemini | Batch/background agents |
| [#28024](https://github.com/NousResearch/hermes-agent/issues/28024) | Whitelisted config_set for agent self-config | 0 | agent, tools | Agent autonomy |
| [#4271](https://github.com/NousResearch/hermes-agent/issues/4271) | Per-subagent terminal backend isolation | 2 | agent, delegate | Multi-agent workloads |
| [#22290](https://github.com/NousResearch/hermes-agent/issues/22290) | browser_task tool (Browser Use cloud) | 0 | browser | Browser automation |
| [#79378](https://github.com/NousResearch/hermes-agent/issues/79378) | Durable schema/config plumbing | 0 | cron, config | SL1 decomposition |
| [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | Discord API v10 parity campaign | 0 | discord | Platform parity |

### PRs de Feature em Progresso

| PR | Título | Impacto |
|----|--------|---------|
| [#83386](https://github.com/NousResearch/hermes-agent/pull/83386) | feat(api): add managed profile control plane | Admin API para perfiles |
| [#75895](https://github.com/NousResearch/hermes-agent/pull/75895) | feat(desktop): updater UX improvements | Dry-run simulation |
| [#82411](https://github.com/NousResearch/hermes-agent/pull/82411) | feat(desktop): add German (de) locale | i18n — primeiro novo locale desde Arabic |

**Sinais de priorização:** Gemini Flex (#12700) é a feature mais desejada pela comunidade (7 👍). Desktop UX/internacionalização e multi-agent isolation indicam direção de produto.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Desktop instável em macOS** (#63047) — Usuários relatam freeze completo após poucas mensagens, impedindo uso produtivo. "Only recovery is either hoping on some defreeze or..." (incompleto).

2. **Instalação Windows quebrada** (#46260) — Instalador falha em stage "desktop" com `npm install exit code 1`. Afeta novos usuários.

3. **search_files imprevisível no Windows** (#63177, #67629) — Usuários Windows não conseguem buscar arquivos com caminhos absolutos; função retorna 0 resultados silenciosamente.

4. **"Full disk" enganoso** (#82001) — Após compressão de contexto, usuários recebem erro de disco cheio quando na verdade é problema de session-identity handoff. Frustração com mensagens de erro misleading.

5. **Memory leak em desktop** (#77311) — "5 GB fleet footprint after heavy use" indica impacto em ambientes corporativos com múltiplas sessões.

### Cenários de Uso Reportados

- **Agentes de segundo plano (cron):** Demanda por Gemini Flex para reduzir custos de jobs agendados (#12700).
- **Multi-profile:** Empresas usando perfis isolados descobrem vazamento de credenciais (#82936) — risco de segurança em produção.
- **Provider diversity:** Usuários experimentando com Qwen3.6/vLLM enfrentam perda de contexto de reasoning (#56004).

### Satisfação/Insatisfação

**Insatisfação alta** com desktop (P1 macOS freeze) e Windows (instalação, caminhos). **Interesse moderado** em features de custo (Gemini flex) e autonomia de agentes.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Sem Atribuição Prolongada

| Issue | Título | Criado | Comentários | Status |
|-------|--------|--------|:-----------:|--------|
| [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) | Hermes forgets skills with ollama/gemma | 2026-04-26 | 5 | Open, sem assignee |
| [#4271](https://github.com/NousResearch/hermes-agent/issues/4271) | Per-subagent terminal backend isolation | 2026-03-31 | 1 | Open, feature antiga |
| [#22290](https://github.com/NousResearch/hermes-agent/issues/22290) | browser_task tool | 2026-05-09 | 2 | Open |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Gemini service_tier flex | 2026-04-19 | 4 | Open, alta votação |
| [#67963](https://github.com/NousResearch/hermes-agent/issues/67963) | Dependency-gate semantics gap | 2026-07-20 | 4 | Closed (needs-decision?) |

### PRs Aguardando Review

| PR | Título | Idade | Bloqueios |
|----|--------|-------|-----------|
| [#83386](https://github.com/NousResearch/hermes-agent/pull/83386) | feat(api): managed profile control plane | ~1 dia | — |
| [#83406](https://github.com/NousResearch/hermes-agent/pull/83406) | EMFILE cascade fix | ~1 dia | Desktop P1 |
| [#75895](https://github.com/NousResearch/hermes-agent/pull/75895)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-11

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada-alta** nesta terça-feira, com 12 eventos totais nas últimas 24h (4 issues e 8 PRs). A taxa de resolução é expressiva: das 8 PRs analisadas, 6 foram fechadas (75%), indicando um ciclo de review saudável. Não houve lançamentos de novas versões, mas o período registra contribuições relevantes em segurança, UX de canais (Telegram) e estabilidade do agente. O volume de issues abertas (4) permanece controlado, com 2 bugs em aberto que exigem atenção — especialmente o problema de loops silenciosos em falhas repetidas de ferramentas.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto mantém a versão estável `0.3.1` (commit `2cf030d2`),发出一如既往 sem movimentação no namespace de releases. Recomenda-se monitorar o merge de PRs de segurança pendentes — especialmente a [#3297](https://github.com/sipeed/picoclaw/pull/3297) sobre "hardening remote prompt and exec boundaries", que inclui migração para schema v4 — antes do próximo tag.

---

## 3. Progresso do Projeto

Seis PRs foram fechadas/merged hoje, representando o avanço técnico mais substancial do período:

| PR | Tipo | Impacto |
|---|---|---|
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | **Segurança** | Reforço de limites de prompt remoto e execução; migração para schema v4; default exec desabilitado |
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | **UX/Telegram** | Renderização nativa de tabelas com Bot API rich messages (elimina monospace code blocks) |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | **Estabilidade** | Corrige `SplitMessage` hanging com fence headers oversized em canais |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | **Configuração** | Suporte a `max_tokens` por modelo; decoplagem de lookup key e runtime ID |
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | **DevOps** | Remove entradas duplicadas no `pnpm-lock.yaml` (corrige `ERR_PNPM_BROKEN_LOCKFILE`) |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | **i18n** | Completude de labels Czech code wrap |

**Destaque estratégico:** A [#3297](https://github.com/sipeed/picoclaw/pull/3297) é a PR de maior impacto — implementa verificação de origem em tempo de execução e exige aprovação independente por chamada, alinhando o projeto a práticas de sandboxing mais rigorosas.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | Resumo |
|---|---|---|---|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Bug | 3 | `/clear` e auto-compressão de sessão falham em chats roteados via dispatch rules |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | Feature | 2 | Adicionar AI Router como preset OpenAI-compatible (fechada) |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | Bug | 2 | `/list models` exibe apenas o modelo atual (fechada) |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Bug | 1 | Loop silencioso de tool failure até `max_tool_iterations` |

**Análise:** A issue [#3301](https://github.com/sipeed/picoclaw/issues/3301) lidera em comentários e envolve um cenário multi-agente real — usuários com dispatch rules para agentes não-padrão enfrentam falha funcional no gerenciamento de sessão. Isso sugere que o suporte a multi-agentes está em uso produtivo, porém com bordas de borda não cobertas. Nota: as duas issues com 2 comentários ([#3298](https://github.com/sipeed/picoclaw/issues/3298) e [#3294](https://github.com/sipeed/picoclaw/issues/3294)) já foram fechadas hoje, indicando resolução rápida.

---

## 5. Bugs e Estabilidade

### Bugs em aberto (2)

| Severidade | Issue | Descrição |
|---|---|---|
| **Alta** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Loop infinito silencioso: tool failure idêntico repete até `max_tool_iterations` sem resposta ao usuário. Observado em produção via Telegram com comando `git`. PR irmã [#3312](https://github.com/sipeed/picoclaw/pull/3312) em aberto. |
| **Média** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Comandos `/clear` e auto-compressão de sessão não funcionam quando chats são roteados a agente não-padrão via dispatch rules. Afeta sessões persistentes em integrações Discord/Telegram. |

### Correções de estabilidade fechadas

- **[#3295](https://github.com/sipeed/picoclaw/pull/3295)** — `SplitMessage` entrava em loop com fence headers oversized; agora faz fallback para raw split.
- **[#3312](https://github.com/sipeed/picoclaw/pull/3312)** (aberta) — Propõe parar turn cedo em falhas idênticas, mitigando o bug [#3311](https://github.com/sipeed/picoclaw/issues/3311).
- **[#3314](https://github.com/sipeed/picoclaw/pull/3314)** (aberta) — Corrige `customAllowPatterns` onde default-deny patterns tinham precedência indevida em `guardCommand`.

**Regressão potencial identificada:** A issue [#3314](https://github.com/sipeed/picoclaw/pull/3314) sinaliza que padrões de allow customizados estavam sendo sobrescritos — isso pode afetar usuários que adicionaram exceções de execução shell.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features fechadas/resolvidas

| PR | Feature | Notas |
|---|---|---|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | AI Router como preset OpenAI-compatible | Resolvida; contribuidor mantém o projeto; permite seleção de AI Route por nome |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | `max_tokens` por modelo + config key fix | Decisivo para fine-tuning de comportamento por provider |

### Features em análise

| PR | Feature | Relevância |
|---|---|---|
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` working properly | Segurança e flexibilidade de execução shell |
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) *(merged)* | Tabelas nativas no Telegram | UX significativa — sai de monospace para rich tables |

**Sinais de roadmap:** A adição de AI Router como preset sugere expansão de suporte a provedores middle-layer (proxies/routers de IA). O schema v4 em [#3297](https://github.com/sipeed/picoclaw/pull/3297) indica quebreaking changes de configuração podem estar no pipeline, embora sem release formal ainda.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

- **Multi-agente e roteamento:** Usuários com dispatch rules sofisticados enfrentam falhas em `/clear` e compressão de sessão ([#3301](https://github.com/sipeed/picoclaw/issues/3301)), indicando que o paradigma multi-agente avançou em funcionalidade mas a gestão de estado entre agentes precisa de amor.

- **Comandos shell bloqueados:** Um usuário reportou que adicionar `git push` ao allow list não funcionava — a correção ([#3314](https://github.com/sipeed/picoclaw/pull/3314)) está em review. Isso sugere que a flexibilidade de customização de segurança pode ser confusa ou subdocumentada.

- **Modelos configurados não listados:** O comando `/list models` devolvia apenas o modelo ativo, frustando expectativas. Issue [#3294](https://github.com/sipeed/picoclaw/issues/3294) foi fechada — presumivelmente resolvida.

- **Loop silencioso:** O bug de ferramenta falhando repetidamente sem feedback ao usuário ([#3311](https://github.com/sipeed/picoclaw/issues/3311)) é grave em produção — o usuário nunca recebe resposta, apenas o agente "gira" internamente.

### Cenários de uso observados

- Integrações **Discord** e **Telegram** como canais principais
- Uso de **DeepSeek via OpenCode** em Raspberry Pi (edge deployment)
- Configuração multi-modelo com `model_list` para切换dinâmica
- Execução shell remota controlada por `customAllowPatterns`

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem activity)

Todas as 4 issues mais recentes têm activity em 2026-08-10, então nenhuma está verdadeiramente abandonada. No entanto, merece destaque:

| Item | Motivo da atenção |
|---|---|
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Bug de severidade alta em produção; PR irmã em aberto mas sem merge ainda — risco de用户体验 degradado prolongado. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Bug funcional em feature de multi-agente; 3 comentários indicam complexidade — pode precisar de redesign parcial do dispatch de sessão. |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) *(fechada)* | A PR de segurança foi fechada — verificar se foi mergeada corretamente ou se precisa de follow-up. |

### PRs em aberto com potential de impacto

| PR | Risco | Ação recomendada |
|---|---|---|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | Bloqueia fix do bug [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Priorizar review e merge |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Regressão potencial em allow list | Verificar com testes de regressão antes de fechar |

---

**Métricas de Saúde (24h):**
- 📊 Atividade total: 12 eventos (4 issues + 8 PRs)
- ✅ Taxa de resolução PRs: 75% (6/8 fechadas)
- 🐛 Issues abertas: 2 (1 alta severidade, 1 média)
- 📦 Releases: 0
- ⏱️ PRs abertas aguardando review: 2

---

*Relatório gerado com base em dados do GitHub — github.com/sipeed/picoclaw | Data de referência: 2026-08-11*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
## Data: 2026-08-11

---

## 1. Panorama do Dia

O projeto IronClaw manteve alto volume de atividade nas últimas 24h, com 50 issues e 50 PRs atualizados. A atividade concentra-se na faixa de versões v1.1.x, com a release candidate **v1.1.1-rc.1** publicada ontem (2026-08-10), focando em estabilidade de entrega, streaming WebUI e compatibilidade MCP. O time está ativamente resolvendo dívida técnica de arquitetura — diversas issues de soundness e ratchet closures foram fechadas — enquanto avançam epics de UX (Design System, OOBE) e funcionalidades multi-canal (Telegram linked-device, rich working indicators). A saúde geral é boa, com 21 PRs merged/fechados indicando ritmo de entrega consistente.

---

## 2. Lançamentos

### ironclaw-v1.1.1-rc.1
**Data:** 2026-08-10 | [Release no GitHub](https://github.com/nearai/ironclaw/releases)

**Foco da release:**
- Melhorias em **channel delivery** e emparelhamento
- Compatibilidade com **IronHub/custom MCP**
- Estabilidade de **streaming no WebUI**
- **Durable retrieval** (recuperação durável)
- Upgrades seguros a partir de predecessores estáveis

**⚠️ Nota de migração (1.0.0 → 1.1.x):**
> "**Upgrading from 1.0.0.** Stop all writers"

Interrupção coordenada necessária durante o upgrade a partir da versão 1.0.0 para evitar inconsistências.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (21 total nas últimas 24h)

| PR | Título | Impacto |
|----|--------|---------|
| [#7446](https://github.com/nearai/ironclaw/pull/7446) | `feat(channels): rich working indicator — reactions, failure states, progress nudges` | Melhora significativa na UX de Slack/Telegram com feedback visual variado durante execuções |
| [#7445](https://github.com/nearai/ironclaw/pull/7445) | `fix(channels): shared channels invoke the bot only on explicit mention` | Corrige spam de mensagens em canais compartilhados (3× duplicados) |
| [#7131](https://github.com/nearai/ironclaw/pull/7131) | `fix(run_delivery): deliver triggered run failures to the creator` | Notificações de falha agora chegam ao criador em vez de serem silenciadas |
| [#7110](https://github.com/nearai/ironclaw/pull/7110) | `fix(product): fail closed for unrouted shared subjects` | Melhoria de segurança para conversas compartilhadas sem rota configurada |
| [#7466](https://github.com/nearai/ironclaw/pull/7466) | `Trim live-QA shard artifacts` | Reduz artefatos de CI em 700MB–1.5GB por shard, melhorando tempo de download e uso de quota |

### PRs Abertos em Destaque

| PR | Título | Status/Tamanho |
|----|--------|----------------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | `fix(reborn): make durable storage profile-agnostic` | XL,medium — Resolve migração de roots legados |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | `feat(telegram): linked-device — device-link auth, session custody` | XL,medium — Implementa autenticação MTProto real |
| [#7468](https://github.com/nearai/ironclaw/pull/7468) + [#7469](https://github.com/nearai/ironclaw/pull/7469) | `feat(nearai): capture per-token logprobs` | XL,L — Instrumentação de trace para confiança agregada |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | `feat(webui): OOBE automation-tasks prototype` | XL,low — Design + plano de onboarding |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#7137](https://github.com/nearai/ironclaw/issues/7137)** — `live-canary: shard artifacts are 700MB-1.5GB` *(12 comentários)*
   - **Tema:** Eficiência de CI/CD
   - **Demanda:** Excluir paths regeneráveis/intermediários do upload de artefatos para economizar quota de storage do GitHub Actions (14 dias de retenção)
   - **Risco:** low | Escopo: ci

2. **[#6257](https://github.com/nearai/ironclaw/issues/6257)** — Bug: "Invalid value (attachments.mime_type)" ao gerar PDFs *(3 comentários)*
   - **Dolor:** Usuários não conseguem enviar/gerar arquivos PDF
   - **Status:** ABERTA — aguardando investigação

3. **[#5882](https://github.com/nearai/ironclaw/issues/5882)** — Repeated Slack reconnect attempts leave auth in broken state *(3 comentários)*
   - **Dolor:** Após desconectar/reconectar Slack múltiplas vezes, autenticação fica quebrada permanentemente
   - **Status:** CLOSED após correção

4. **[#3762](https://github.com/nearai/ironclaw/issues/3762)** — Editing AGENTS.md in WebUI não atualiza system prompt *(2 comentários)*
   - **Demanda:** Usuários esperam edição dinâmica de identidade do agente
   - **Prioridade:** suggested_P1, customer, v1.3.0

### Issues de Arquitetura Fechadas (indicação de dívida técnica sendo paga)

- [#7145](https://github.com/nearai/ironclaw/issues/7145) — extensão host → loops re-layer
- [#7147](https://github.com/nearai/ironclaw/issues/7147) — shrink-only architecture ratchets com slack
- [#7151](https://github.com/nearai/ironclaw/issues/7151) — composition gate poisoned denominator
- [#7149](https://github.com/nearai/ironclaw/issues/7149) — same-layer coupling sem guarda
- [#7150](https://github.com/nearai/ironclaw/issues/7150) — vendor sanction sem pin
- [#7036](https://github.com/nearai/ironclaw/issues/7036) — changed-coverage gate não roda em PRs ordinários
- [#7067](https://github.com/nearai/ironclaw/issues/7067) — ResourceGovernor dependency replacement

> **Análise:** O time está sistematicamente limpando dividas de soundness de arquitetura identificadas em auditorias (epic #3773). Isso indica maturidade no processo de engenharia.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (Prioridade)

| Severidade | Issue | Descrição | Escopo |
|------------|-------|-----------|--------|
| **Alta** | [#6869](https://github.com/nearai/ironclaw/issues/6869) | DOCX gerados corrompidos — ilegíveis pelo Word | feedback |
| **Alta** | [#7447](https://github.com/nearai/ironclaw/issues/7447) | Agente trava após chamar muitas tools (loop redundante) | v1.3.0 |
| **Média** | [#6257](https://github.com/nearai/ironclaw/issues/6257) | MIME type inválido em PDFs | bug |
| **Média** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | AGENTS.md editing não atualiza prompt | v1.3.0 |

### Correções Recentes de Estabilidade

- **Slack spam em channels** — Corrigido em [#7445](https://github.com/nearai/ironclaw/pull/7445)
- **Run delivery silencioso** — Corrigido em [#7131](https://github.com/nearai/ironclaw/pull/7131)
- **Slack reconnect loop** — Corrigido em [#5882](https://github.com/nearai/ironclaw/issues/5882)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics em Andamento (v1.3.0–v1.4.0)

| Epic | Título | Escopo | Prioridade |
|------|--------|--------|------------|
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | Reborn durable state profile-agnostic + migração legacy | workspace, reborn | high |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Storybook + AI-first Design System (theming, IA) | webui, v1.3.0 | high |
| [#7354](https://github.com/nearai/ironclaw/issues/7354) | Extensions vNext — Web Push, Rich Messaging, Telegram User Sessions, Signal | extensions, v1.3.0 | medium |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) | Agente falhando após muitas tool calls | v1.3.0 | high |
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | Onboarding to channel-first approach | v1.4.0 | medium |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) | Configurar tools/channels/extensions via chat como Admin | epic | medium |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Skills auto-criadas pelo modelo | agent, skills, v1.1.0 | active |

### Novas Features em PR

- **Telegram linked-device auth** ([#7464](https://github.com/nearai/ironclaw/pull/7464)) — MTProto real, revocável
- **Model preference settings para non-admin** ([#7440](https://github.com/nearai/ironclaw/pull/7440)) — Abre seleção de modelo para membros comuns
- **Tool search fair discovery** ([#7410](https://github.com/nearai/ironclaw/pull/7410)) — Assinaturas completas sem round-trip obrigatório
- **Logprobs capture para traces** ([#7468](https://github.com/nearai/ironclaw/pull/7468), [#7469](https://github.com/nearai/ironclaw/pull/7469)) — Envelope de confiança agregado

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Feedback | Fonte | Impacto |
|----------|-------|---------|
| **Slack authentication quebra após reconnect** | Usuário near.foundation | Bloqueante — extensão inutilizável |
| **DOCX corrompidos gerados pelo agent** | Davin Basi | Usuários não conseguem NDAs/markdown funcional |
| **PDF com mime_type inválido** | Michael Kelly (Slack) | Bloqueante para geração de documentos |
| **WebUI abre em branco** — usuário não sabe o que fazer | Sergan user report | Alta fricção de adoção |
| **AGENTS.md editing não reflete no comportamento** | zetyquickly | UX confusa — editor parece funcionar mas não aplica |

### Cenários de Uso Identificados

- **Onboarding geral**: Usuário cria General Assistant sem contexto; precisa de guia
- **Telegram como canal completo**: Pairing, delivery, comandos declarados — em andamento
- **Configuração via chat**: Administrator configurando ferramentas sem sair da conversa
- **Empresas querendo "Company Brain"**: [#7465](https://github.com/nearai/ironclaw/issues/7465) aberto em 2026-08-10

---

## 8. Backlog que Merece Atenção

### Issues Sem Comentários (Need Attention)

| Issue | Criado | Escopo | Urgência |
|-------|--------|--------|----------|
| [#7465](https://github.com/nearai/ironclaw/issues/7465) — Company Brain FDE | 2026-08-10 | epic | Avaliar |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) — Agent fails after many tools | 2026-08-10 | v1.3.0 | **Alta** |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) — Durable state profile-agnostic | 2026-08-10 | workspace, reborn | **Alta** |
| [#7354](https://github.com/nearai/ironclaw/issues/7354) — Extensions vNext | 2026-08-07 | v1.3.0 | Média |

### Issues Legadas com Potencial

| Issue | Criado | Status | Notas |
|-------|--------|--------|-------|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 2026-05-18 | OPEN | 3 meses sem resolução — P1 sugerido |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | 2026-07-19 | OPEN | Bug de MIME PDF — +3 semanas |

### Dependências Bloqueantes em Aberto

- **#7431** (CLI workspace overlap) → Resolvido em [#7455](https://github.com/nearai/ironclaw/pull/7455) ✅
- **#6900** (unrouted shared subjects) → Resolvido em [#7110](https://github.com/nearai/ironclaw/pull/7110) ✅

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues ativas (24h) | 26 abertas | Volume normal |
| PRs abertos | 29 | Pipeline saudável |
| PRs mergeados (24h) | 21 | Bom throughput |
| Release candidate | v1.1.1-rc.1 | Preparando stable |
| Bugs críticos abertos | 2 (DOCX, agent loop) | Necessita priorização |
| Epics em curso | 7+ | Roadmap ativo |
| Dívida técnica sendo paga | Alta | 7+ issues de arch fechadas |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-11. Para detalhes completos, consulte [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-11

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw/AgentScope)** mantém uma atividade intensa em 2026-08-11, com **40 issues e 50 PRs atualizados nas últimas 24h**, indicando alta velocidade de desenvolvimento. A base de issues está majoritariamente aberta (34 vs 6 fechadas), sugerindo acúmulo de demandas pendentes. Os PRs apresentam distribuição equilibrada entre abertos (30) e merged/fechados (20), evidenciando ciclo de revisão ativo. Não há releases novas hoje, embora PR #6875 prepare notas da v2.1.0. Os tópicos dominantes giram em torno de **bugs críticos de providers (OpenAI/StepFun/Gemini)**, **questões de UI/UX no Console** e **melhorias no sistema de memória (ReMe Light)**.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

| Release | Status | Observação |
|---------|--------|------------|
| — | — | PR #6875 (`chore: update release notes for v2.1.0`) está em progresso, sinalizando lançamento iminente da v2.1.0 |

> ⚠️ **Atenção:** A versão em preparo (v2.1.0) deve ser monitorada quanto a breaking changes, especialmente nos providers OpenAI-compatíveis e no sistema ReMe Light.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) | fix(providers): sanitize Chat Completions content for strict providers | axelray-dev | Resolve rejeição por providers strict (StepFun) — **bug crítico** |
| [#6878](https://github.com/agentscope-ai/QwenPaw/pull/6878) | feat(console): add hidden-folders toggle to project directory picker | zhijianma | Melhora UX do seletor de diretórios |
| [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) | fix(config): handle corrupted agent config and invalid JSON | mohitdebian | Tratamento robusto de JSON corrompido |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | feat: add reranker support for ReMe memory search | lecheng2018 | Funcionalidade de re-ranking para memória |
| [#6866](https://github.com/agentscope-ai/QwenPaw/issues/6866) | Question: workspace cleanup | 70995781 | Questão resolvida |

### PRs em Destaque (revisão ativa)

| # | Título | Autor | Relevância |
|---|--------|-------|------------|
| [#6870](https://github.com/agentscope-ai/QwenPaw/pull/6870) | feat(creator): settings center, agent skills, mm-plugins compose | xuanrui-L | Agrega trabalho significativo do plugin Creator |
| [#6888](https://github.com/agentscope-ai/QwenPaw/pull/6888) | fix(xiaoyi): hide scroll headlines in messages | niceIrene | Correção de display no XiaoYi mobile |
| [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) | fix(chats): preserve assistant completion time | wananing | Correção de integridade de timestamps |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | feat(desktop): remember window geometry | AaronZ345 | Persistência de geometria da janela (Issue #4634) |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | feat(console): unify apps, plugins, and skills in marketplace | yuluo1007 | Unificação do marketplace |
| [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) | feat(memory): embedding hot updates e Daily Paper no ReMe Light | jinliyl | Extensão do sistema de memória |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker 2.0.1: Plugin/App Market sempre "em manutenção" | 9 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | OpenAI-compatible requests rejeitados por strict providers (StepFun) | 6 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6803) |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | Continuation summary ignora `disable_thinking` | 5 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6811) |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Tempo de resposta do assistente exibido incorretamente | 5 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6826) |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat observability para shell commands (kill/extend timeout) | 4 | Enhancement | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4237) |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | MCP tools sempre "Tool not found" após upgrade 2.0 | 4 | Question | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6405) |
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | SIGBUS em sqlite3WalFindFrame (macOS) | 4 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6814) |

### Análise de Demandas

1. **Problemas de Provider/Modelos (críticos):** Múltiplos issues (#6803, #6811, #6812, #6821) denunciam incompatibilidades com providers OpenAI-compatíveis strict (StepFun) e modelos com thinking mode (DeepSeek V4). A comunidade reporta rejeições de requisições e erros 400.

2. **Docker/Deploy:** Issue #6782 indica que a versão Docker 2.0.1 tem os markets permanentemente indisponíveis — impacto em novos usuários.

3. **UI/Console:** Bugs de renderização (#6820, #6828), tempo incorreto de mensagens (#6826), e cards de tarefas ocupando espaço (#6876) dominam reclamações.

4. **MCP Integration:** Falhas de tool discovery (#6405) e type coercion incorreto de strings numéricas (#6839) são recorrentes.

---

## 5. Bugs e Estabilidade

### Por Severidade (classificação inferred)

| Severidade | Count | Exemplos |
|------------|-------|---------|
| **Crítica** | 6 | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803), [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814), [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) |
| **Alta** | 5 | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811), [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826), [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) |
| **Média** | 8 | [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820), [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831), [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) |
| **Baixa** | 3 | [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585), [#6867](https://github.com/agentscope-ai/QwenPaw/issues/6867) |

### Bugs Críticos Não Resolvidos

| # | Bug | Reprodução | Impacto |
|---|-----|------------|---------|
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | SIGBUS em `sqlite3WalFindFrame` no macOS ao abrir history.db | Abre Scroll history | Crash do app |
| [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | `reasoning_content` relay falha com thinking-mode models → 400 | Multi-turn com DeepSeek V4 | Modelos indisponíveis |
| [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `KeyError: '__aiter__'` em title generator | Auto-titlegeneration | Funcionalidade quebrada |
| [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | StepFun rejeita requests com content types internos | Providers strict | Integração falha |

> ✅ **Resolvido:** Issue #6809 (merged) corrige a sanitização de requests para providers strict.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Prioridade

| # | Feature | Autor | Sinais de Roadmap |
|---|---------|-------|-------------------|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat panel para shell commands (kill, extend timeout) | ekzhu | Observabilidade em execução |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | MCP tool-call timeout configurável | ChaosG | Configurabilidade enterprise |
| [#6881](https://github.com/agentscope-ai/QwenPaw/issues/6881) | Auto-refresh session title após auto-memory | Ferrum360 | Integração memória/UI |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | Roadmap ReMe4 (Auto-Link, tri-modal search) | MCQSJ | Evolução do sistema de memória |
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) | Window geometry persistence | MoeShinX | UX desktop |

### Sinais de Evolução do Produto

1. **Sistema de Memória:** PRs #6772 e #6398 indicam foco contínuo em ReMe Light, com embedding hot updates e reranker.

2. **Marketplace Unificado:** PR #6880 consolida apps, plugins e skills em `/market` — simplificação de UX.

3. **Desktop Experience:** PR #6877 implementa persistence de window geometry, atendendo demanda antiga (#4634).

4. **Creator Plugin:** PR #6870 é um aggregate PR massivo sinalizando maturidade do plugin Creator.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Issues |
|------|------------|--------|
| Providers strict rejeitam requests | Alta | #6803, #6812, #6821 |
| UI não atualiza em tempo real (think/output) | Alta | #6820, #6828 |
| Docker: markets inoperantes | Alta | #6782 |
| MCP tools não funcionam após upgrade | Média | #6405, #6839 |
| Auto-title generation quebrado | Média | #6813 |
| Background tasks ocupam tela | Média | #6876 |

### Cenários de Uso Reportados

- **Produtividade/Desktop:** Usuários Windows reportam fals positives de antivírus (#6847), dificultando uso em ambientes corporativos.
- **Desenvolvedores:** Issues sobre MCP (#6405, #6839) indicam adoção de ferramentas externas.
- **Usuários Docker:** Problema crítico com markets (#6782) impacta onboarding.

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| Atividade de开发 | Positivo | 50 PRs em 24h indica comunidade ativa |
| Correções de bugs | Negativo | Acúmulo de 34 issues abertas |
| Documentação/UX | Misto | Features pedidas há meses (#4237, #4634) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Atualizado | Dias Estagnado | Prioridade |
|---|--------|--------|------------|----------------|------------|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat shell commands panel | 2026-05-12 | 2026-08-10 | ~90 dias | Alta |
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) | Window geometry persistence | 2026-05-22 | 2026-08-10 | ~80 dias | Média |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | MCP tools "Tool not found" | 2026-07-23 | 2026-08-10 | ~19 dias | Alta |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | App freeze após 30-40min idle | 2026-08-07 | 2026-08-10 | ~4 dias | Crítica |
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | Plugin install fail: module conflict | 2026-08-04 | 2026-08-10 | ~7 dias | Alta |

### Recomendações de Priorização

1. **Imediato:** Resolver #6803 (já com PR #6809 merged) e validar em produção. Atacar #6814 (SIGBUS macOS) e #6782 (Docker markets).

2. **Esta Semana:** Responder #4237 com roadmap ou alternativa. Investigar #6813 (title generation) — parece bug simples.

3. **Este Mês:** Planejar v2.1.0 com foco em estabilidade de providers e UI/UX (window geometry, hidden folders toggle).

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 34 | Alta |
| PRs abertos (24h) | 30 | Estável |
| PRs merged (24h) | 20 | Estável |
| Bugs críticos abertos | 6 | Necessita atenção |
| Features pedidas | 12 | Alta demanda |
| Releases (24h) | 0 | — |

---

*Relatório gerado em 2026-08-11. Dados: GitHub CoPaw (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data:** 2026-08-11 | **Origem dos dados:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta alta atividade em 11/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24h — todos em estado aberto/ativo, indicando um momento de intensificação de desenvolvimento sem publicações fechadas no período. O ambiente é marcado por múltiplas issues de segurança de alta severidade (p1) em auditoria ativa, 14+ issues de prioridade p1 competindo por atenção simultânea, e um pipeline de PRs robusto com 5+ pull requests de tamanho XL aguardando revisão. Não houve releases nas últimas 24h, sugerindo foco em maturação de código antes de próxima versão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se na versão **0.8.3** conforme referências nos issues. A issue #6808 indica que a versão **0.8.0-beta-1** marca o início do ciclo atual, com "Ratification deferred / rollout in progress" para governança e automação de board.

---

## 3. Progresso do Projeto

*Nota: Todos os 50 PRs estão em estado OPEN. Nenhum PR foi merged ou fechado no período.*

| PR | Descrição | Tamanho | Status | Contexto |
|----|-----------|---------|--------|----------|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | feat(gateway): add OpenAI chat completions endpoint | XL | OPEN, needs-author-action | Adiciona endpoint OpenAI-compatible; fecha #8550 |
| [#9898](https://github.com/zeroclaw-labs/zeroclaw/pull/9898) | fix(status): resolve memory banner backend | M | OPEN | Corrige label de backend de memória no status/cli |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate | XL | OPEN, needs-author-action | Mitiga SSRF em file_download com opt-in de hosts privados |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat(providers): add native Hailo-Ollama support | XL | OPEN | Provider dedicado para Hailo-Ollama |
| [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) | feat(eval): per-dimension LLM-judge grader | XL | OPEN, needs-author-action | Judge LLM para avaliação por dimensão |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | feat(channels/telegram): add multi_message streaming mode | XL | OPEN, needs-author-action | Modo multi-mensagem para Telegram |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat(plugins): validate typed instance config | XL | OPEN, needs-author-action | Validação de schema em plugins |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | fix(gateway): keep agent turns alive after viewer disconnect | M | OPEN, needs-author-action | Corrige sobrevivência de turns após desconexão |
| [#9897](https://github.com/zeroclaw-labs/zeroclaw/pull/9897) | fix(cli): stop telling operators to reload with a signal that kills the daemon | M | OPEN | Corrige mensagem errada de reload (SIGUSR1) |

**Análise:** O backlog de PRs aguarda predominantemente ação dos autores (flag `needs-author-action`), sugerindo gargalo na revisão ou ciclo de feedback. PRs de segurança (#8713 - SSRF, #9002) e feature (#8486 - OpenAI endpoint) são de alto impacto estratégico.

---

## 4. Temas Quentes da Comunidade

| Issue | Título | Comentários | Prioridade | Link |
|-------|--------|-------------|------------|------|
| #6808 | RFC: Work Lanes, Board Automation, and Label Cleanup | 23 | p2 | [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| #7100 | RFC: Per-model capability & context-window config | 13 | p1 | [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) |
| #8692 | [Tracker]: Maintainer decision queue for RFCs | 12 | p2 | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #9397 | RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none | 12 | p1 | [Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) |

**Análise:** A discussão mais acalorada gira em torno de **governança e processo RFC** (#6808, #9496), refletindo maturidade organizacional. A RFC #7100 sobre capacidades por modelo indica necessidade de abstração mais granular para configuração de provedores LLM. A comunidade demonstra preocupação com **segurança em múltiplos canais** (#9397 WhatsApp, #9393 Bluesky/Reddit, #9392 LINE).

---

## 5. Bugs e Estabilidade

### Severidade P1 — Críticos (14 issues)

| Bug | Descrição | Severidade | Link |
|-----|-----------|------------|------|
| #9647 | Knowledge graph sem atribuição por agente — qualquer agente acessa/modifica dados de outro | S0 - data loss/security | [Issue #9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| #9393 | Bluesky e Reddit sem autorização de remetente e sem gate central | S0 - security | [Issue #9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) |
| #9395 | plugin wasi:http sem política de egresso e sem configuração | S0 - security | [Issue #9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) |
| #9389 | unauthenticated POST /api/pair usa header fornecido pelo atacante para lockout | S0 - security | [Issue #9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) |
| #9627 | git write verbs ignoram classificador de risco via opções globais (-C, --git-dir) | S0 - data loss/security | [Issue #9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) |
| #9391 | audit logging habilitada por padrão mas não escreve nada | S1 - security | [Issue #9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) |
| #9779 | SOPs nunca carregam silenciosamente se operador usar default documentado | S1 - blocked | [Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) |
| #9855 | Matrix channel falha em resolver homeserver via .well-known | S0 - data loss/security | [Issue #9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) |
| #9207 | web_fetch retorna dados binários garbage para respostas comprimidas | S1 - blocked | [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) |
| #9035 | Docker Compose gateway pode ficar em loopback mesmo com porta publicada | S1 - blocked | [Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| #9425 | SOP jobs em execução sem caminho de cancelamento pelo operador | S1 - blocked | [Issue #9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) |
| #9768 | daemon reload não funciona em SIGUSR1, warning diz para enviar sinal que mata o daemon | S2 - degraded | [Issue #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |
| #8999 | ZeroCode streamed user turns parecem payloads de log para modelos locais pequenos | S2 - degraded | [Issue #8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) |
| #9383 | npm audit failed — 6 vulnerabilidades high/critical em dependências | High/Critical | [Issue #9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) |

### Severidade P2 — Degradados (9 issues)

- **#9771** — zeroclaw-gateway fails clippy -D warnings no default feature surface
- **#9562** — WebChat auto-scroll sobrescreve scroll manual durante streaming
- **#9545** — gate rustdoc warnings em CI requerido
- **#8955** — Telegram media groups não agrupam corretamente
- **#8955** — Telegram batch media attachments

**Análise de Estabilidade:** O projeto apresenta **acúmulo de 14+ bugs p1 simultâneos**, muitos de severidade S0/S1 envolvendo segurança (channels sem autenticação, SSRF, sandbox bypass). A presença de issues de auditoria de segurança não stale indica processo de hardening ativo. Compatibilidade com Docker e canais (Matrix, WhatsApp, LINE) são áreas problemáticas recorrentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Feature | Descrição | Prioridade | Status | Link |
|---------|-----------|------------|--------|------|
| #8486 | OpenAI Chat Completions endpoint para gateway | p1 | PR em revisão | [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) |
| #9109 | Native Hailo-Ollama provider | p1 | PR em revisão | [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) |
| #9339 | Custom CA trust para remote MCP servers | p2 | in-progress | [Issue #9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) |
| #5842 | Warn when Codex CLI extra_args enfraquecem sandbox/policy | p2 | in-progress | [Issue #5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) |
| #9047 | Clarify Code session history e persistent-memory isolation | p2 | in-progress | [Issue #9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047) |
| #9345 | Recalcular PR risk e size labels a cada update | p2 | accepted | [Issue #9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) |
| #9530 | Definir precedência de risco para mudanças test-only em high-risk paths | p2 | accepted | [Issue #9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) |
| #9496 | RFC: Streamline RFC scope, discussion, voting e assignment | p1 | accepted | [Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) |

**Sinais de Roadmap:**
1. **Interoperabilidade com OpenAI** (#8486) — prioridade estratégica para atrair ecossistema de ferramentas
2. **Segurança de plugins e runtime** — múltiplas RFCs e features de segurança em progresso
3. **RFC Governance** (#9496, #6808) — reformation do processo decisório para escalar manutenção

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Segurança** | Múltiplos canais (WhatsApp, Bluesky, Reddit, LINE) expõem vectores de ataque sem autenticação | Alta |
| **Usabilidade CLI** | Mensagem de reload指南 contradiz comportamento real (SIGUSR1 mata daemon) | Média |
| **Observabilidade** | Audit logging habilitado por padrão mas não funciona; métricas de CPU em dashboard identificam processo errado | Média |
| **Canais** | Telegram media groups fragmentados, Matrix homeserver discovery falhando, Docker Compose gateway inacessível | Alta |
| **SOPs** | Engine de SOPs falha silenciosamente com configuração default | Média |

### Cenários de Uso Reportados

- **Deploy em container:** Docker Compose com gateway não exposto corretamente (#9035)
- **Agents multi-tenant:** Knowledge graph compartilhado causa vazamento de dados entre agentes (#9647)
- **Operadores de larga escala:** Necessidade de OpenAI-compatible endpoint para integrar com tooling existente (#8486)
- **Ambientes corporativos:** Necessidade de CA custom para MCP servers internos (#9339)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| Issue | Título | Criado | Atualizado | Link |
|-------|--------|--------|------------|------|
| #5842 | warn when Codex CLI extra_args enfraquecem sandbox | 2026-04-17 | 2026-08-10 | [Issue #5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) |
| #9383 | npm audit failed (6 vulns) | 2026-07-26 | 2026-08-10 | [Issue #9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) |

### Issues de Prioridade Alta sem PR Associado

| Issue | Título | Link |
|-------|--------|------|
| #9393 | Bluesky e Reddit sem sender authorization | [Issue #9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) |
| #9395 | plugin wasi:http sem egress policy | [Issue #9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) |
| #9389 | POST /api/pair vulnerável a header injection | [Issue #9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) |
| #9627 | git write verbs ignoram risk classifier | [Issue #9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) |
| #9391 | audit logging não funciona | [Issue #9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) |
| #9779 | SOPs não carregam silenciosamente | [Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) |
| #9855 | Matrix .well-known delegation falhando | [Issue #9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) |
| #9207 | web_fetch retorna garbage para gzip/brotli | [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) |

### Recomendações

1. **Triagem de Segurança Urgente:** 7+ issues S0/S1 de segurança necessitam atenção imediata de code owners
2. **PR Bottleneck:** 50 PRs em aberto sem nenhum merge indica possível gargalo em review ou CI
3. **Canal Integration Debt:** Telegram, Matrix, WhatsApp, LINE apresentam bugs recorrentes — considerar test coverage dedicado
4. **npm Dependencies:** Vulnerabilidade #9383 pendente há 16 dias requer update ou justification

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-11.

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*