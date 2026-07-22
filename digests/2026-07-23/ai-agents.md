# Resumo diário do ecossistema de agentes de IA 2026-07-23

> Issues: 1 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-07-22 21:04 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-23

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 23 de julho de 2026. Foi registrada **uma issue fechada** e **um PR merged**, ambos relacionados ao módulo Discord. O gateway do Discord enfrentava um bug crítico onde bots se tornavam permanentemente "surdos" após processar exatamente uma mensagem — um problema 100% reproduzível que comprometia a funcionalidade central do bot. Um segundo PR relacionado (thread de typing com stack overflow) também foi fechado, indicando foco da equipe em estabilizar a integração com Discord.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24 horas.**

O projeto encontra-se em um ciclo de desenvolvimento ativo sem versioning formal lançado recentemente. O último release estável pode não estar sincronizado com as correções do dia.

---

## 3. Progresso do Projeto

### PR Merged

**[#978](https://github.com/nullclaw/nullclaw/pull/978) — discord: run typing thread on the heavy runtime stack** *(Fechado)*  
**Autor:** Tetraslam | **Criado:** 2026-07-22

**Mudança:** Relocação da thread de typing-indicator do Discord do `AUXILIARY_LOOP_STACK_SIZE` (512KB) para um stack maior.

**Problema resolvido:** A thread anterior realizava requisições HTTPS completas (`std.http.Client` → `std.crypto.tls`), incluindo `memcpy`s inline que excediam o limite de 512KB, causando **abort do processo** sempre que um "turn" de digitação era disparado.

**Impacto:** Estabilidade do processo — o bot não mais crashará durante indicadores de digitação.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**[#977](https://github.com/nullclaw/nullclaw/issues/977) — Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE** *(Fechada)*  
**Autor:** Tetraslam | **Comentários:** 1 | **Reações:** 0

**Problema:** O gateway do Discord processa exatamente **uma** mensagem `MESSAGE_CREATE`, responde com sucesso, mas **nunca mais dispara outro evento**. O bot permanece online (heartbeats ativos), porém completamente inoperante até reinicialização.

**Características:**
- 100% reproduzível
- Frames chegam e são lidos, depois descartados silenciosamente
- Afeta todos os bots baseados em NullClaw usando gateway Discord

**Análise de demanda:** Este é um bug de **severidade crítica** — invalida completamente a funcionalidade principal de bots Discord. A comunidade reagiu com interesse técnico (comentário presente), mas baixo uso de reações, sugerindo que poucos usuários avançados já haviam identificado a root cause.

---

## 5. Bugs e Estabilidade

### Bug Crítico (Resolvido)

| Severidade | Título | Status | Impacto |
|------------|--------|--------|---------|
| 🔴 **Crítica** | Gateway Discord deaf após primeira mensagem | ✅ **Resolvido** | Bots inoperantes |
| 🔴 **Crítica** | Stack overflow na thread de typing | ✅ **Resolvido** | Crash ao digitar |

**Estado geral:** Dois bugs críticos foram identificados e corrigidos em 24h. O projeto demonstra **resposta rápida** a problemas de estabilidade. Não há bugs críticos em aberto no momento.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request foi aberta nas últimas 24 horas.**

Sinais observados que podem influenciar o roadmap:
- A correção do gateway Discord (#977) pode indicar necessidade de **testes de stress** para conexões WebSocket de longa duração
- A relocação do typing thread (#978) sugere que a **gestão de memória e stacks** é uma área needing atenção no design runtime

---

## 7. Resumo de Feedback dos Usuários

### Feedback Implícito (via Issues/PRs)

**Dores identificadas:**
1. **Confiabilidade do gateway** — Usuários experimentam desconexão funcional sem erro claro, causando frustração
2. **Estabilidade de produção** — Bugs silenciosos (processo não crasha, mas não funciona) são difíceis de diagnosticar

**Cenário de uso típico:**
- Bots Discord em produção processando mensagens
- Indicadores de digitação acionados durante conversas

**Satisfação/Insatisfação:**
- A issue #977 demonstra que o bug existe há tempo suficiente para ser identificado e reportado
- A correção rápida (mesmo dia) sugere que a **equipe responde bem a reports** quando bem documentados

---

## 8. Backlog que Merece Atenção

### Items sem Resposta Prolongada

Não há items identificados no conjunto de dados fornecido com histórico de "sem resposta há muito tempo".

### Items Pendentes de Verificação

| Item | Tipo | Status Atual | Ação Recomendada |
|------|------|--------------|------------------|
| #978 | PR | Fechado | Verificar se merged ou closed sem merge |
| #977 | Issue | Fechada | Confirmar se solução integrada |

**Nota:** Os dois items do dia foram fechados sem menção de merge. Recomenda-se verificar se as correções foram integradas ao branch principal ou se o trabalho continua em outro branch/PR.

---

## Métricas do Dia

| Métrica | Valor |
|---------|-------|
| Issues fechadas | 1 |
| PRs fechados/merged | 1 |
| Novas releases | 0 |
| Comentários totais | 1 |
| Engajamento (reações) | 0 |
| Bugs críticos abertos | 0 |

---

**Saúde do Projeto: 🟢 Estável** — Atividade moderada com foco em estabilidade. Correções críticas em andamento demonstram maturidade no processo de desenvolvimento.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-23  
**Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de desenvolvimento**. Projetos de alta atividade (NanoBot, Hermes Agent, IronClaw, ZeroClaw) operam com volumes típicos de startups em crescimento, enquanto NullClaw e PicoClaw mantêm ciclos de manutenção mais conservador. A tendência dominante é a **multi-agent orchestration** — 4 de 7 projetos mencionam explicitamente evolução para arquiteturas colaborativas entre agentes. O mercado enterprise é o principal direcionador de features, com foco em segurança (OIDC, API key protection), multi-tenancy e integração com canais corporativos (Telegram, Slack, DingTalk, Matrix). A consolidação para releases v1.0 (IronClaw) e v2.0 (CoPaw) indica que o ecossistema está amadurecendo de projetos experimentais para soluções production-ready.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|--------------|-----------|----------|----------------------|-------------------|
| **NanoBot** | 6 | 55 | 0 | 3 P1 | 🟢 Alta atividade + resposta rápida |
| **Hermes Agent** | 50 | 50 | 0 | 1 P1 (fechada) + 13 P2 | 🟡 Moderado — regressões em produção |
| **IronClaw** | 50 | 47 | 0 | 2 P1 + 2 P2 | 🟢 Preparação sólida para v1 |
| **ZeroClaw** | 50 | 50 | 0 | 1 P1 + 2 P2 | 🟢 Maturidade com RFC estruturado |
| **CoPaw** | 30 | 50 | 1 (v2.0.0.post4) | 2 P1 + 4 P2 | 🟡 Performance regressada em v2.0 |
| **PicoClaw** | 3 | 5 | 0 | 1 Crítica | 🟡 Estável mas com backlog estale |
| **NullClaw** | 1 | 1 | 0 | 0 | 🟢 Estável — foco estreito |

**Observação:** A taxa de fechamento de PRs do NanoBot (72,7%) é a mais alta do ecossistema, indicando um pipeline de review excepcionalmente eficiente.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)

**Vantagens competitivas:**

- **Maior throughput de desenvolvimento** — 55 PRs e taxa de merge de 72,7% demonstra capacidade de absorver contribuições sem gargalo de review
- **Ecossistema de providers mais diversificado** — Suporte a xAI Grok, OpenCode Go (GLM, Kimi, DeepSeek, MiMo, Qwen, MiniMax), e expansão contínua
- **WebUI como first-class citizen** — Investimento consistente em UX (markdown rendering, subagent visibility, plugin discovery)

**Diferenças técnicas:**

- Arquitetura orientada a sessões com workspaces persistentes e state isolation
- Sistema de subagentes com delegação em background (evoluindo para multi-agent collaboration — issue #5000)

**Tamanho da comunidade:**
Muito ativa, com contributor destacado (patrick-andstar com 7 PRs em um dia no CoPaw; padrão similar observado em NanoBot com 40 PRs fechados em 24h).

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência de Canais de Mensagens

| Projeto | Canal Crítico | Problema |
|---------|---------------|----------|
| NullClaw | Discord | Gateway "deaf" após primeira mensagem |
| PicoClaw | Matrix | Loop de sync sem reconnection logic |
| IronClaw | Telegram | /pair command não reconhecido; canal não configurável |
| Hermes Agent | Docker/Gateway | Regressões v2026.7.20 em API_SERVER_* |

**Padrão:** A conectividade de longo prazo em canais é subestimada no design inicial. Todos os projetos enfrentaram bugs onde o processo continua rodando mas a funcionalidade está degradada silenciosamente.

### 4.2 Multi-Provider Compatibility

| Problema | Projetos Afetados |
|----------|-------------------|
| Providers strict (Kimi/Moonshot) falham com MCP schemas não-convencionais | NanoBot (#5040), CoPaw (#6363) |
| OAuth providers com comportamento divergente | Hermes Agent (#13834, #69470), ZeroClaw (#7141 RFC) |
| Encoding/Unicode (UTF-16 surrogates, CP 936) | NanoBot (#4952 — resolvido), ZeroClaw (#7462 — crítico) |

**Padrão:** A abstração de providers é mais difícil do que o esperado. Provedores "strict" (Kimi, Moonshot) revelam falhas de conformidade que clientes menos rigorosos ignoram.

### 4.3 Estabilidade de Memória e Contexto

| Projeto | Sintoma |
|---------|---------|
| NanoBot | Dream batches starvation (#5041) |
| CoPaw | Context compaction causa freeze (#5218) |
| NullClaw | History trimming silencioso (#8837 — ZeroClaw) |
| IronClaw | Memory retrieval e after-turn recording (#6489) |

**Padrão:** A gestão de janela de contexto em sessões longas é o problema técnico mais recurrente. Soluções variam de prompt caching (PicoClaw/Bedrock) a state-graph planning (NanoBot #5034).

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Segmento | Projetos Dominantes | Características |
|----------|---------------------|-----------------|
| **Enterprise/Teams** | IronClaw, ZeroClaw, NanoBot | OIDC (#7141), multi-usuário (#6335), canais corporativos |
| **Developers/Individual** | NullClaw, PicoClaw | Foco estreito, rápida curva de aprendizado |
| **Self-hosted/Edge** | PicoClaw, CoPaw | Raspberry Pi (#5036), Docker hot reload (#6344) |

### Por Arquitetura

| Abordagem | Projetos | Implicações |
|-----------|----------|-------------|
| **Monolítico flexível** | Hermes Agent | Desktop como interface principal; menos plugins |
| **Plugin-first** | IronClaw, ZeroClaw | WASM tools, manifest-driven extensions, channel routing genérico |
| **Provider-agnostic** | NanoBot, CoPaw | Abstração de API como feature central; suporte a 10+ provedores |

### Por Estágio de Maturidade

| Estágio | Projetos | Indicadores |
|---------|----------|-------------|
| **Pre-v1 (sandbox)** | NullClaw | Baixa atividade, foco em estabilidade pontual |
| **Lançando v1** | IronClaw | Bug bash, checklist de launch, breaking changes documentados |
| **v2.x (estabilizando)** | CoPaw | Regressão de performance documentada, hotfixes |
| **Mature/Refactoring** | ZeroClaw | RFC formal, múltiplos backends de persistência |

---

## 6. Tração e Maturidade da Comunidade

### Ranking por Velocidade de Iteração

| Posição | Projeto | Indicador | Análise |
|---------|---------|-----------|---------|
| 1 | **NanoBot** | 40 PRs fechados em 24h | Velocidade excepcional; pipeline maduro |
| 2 | **ZeroClaw** | 7 PRs + RFC formal | Qualidade sobre velocidade; processo estruturado |
| 3 | **IronClaw** | 7 PRs merged + 6 foundation issues fechados | Foco em marcos arquiteturais |
| 4 | **CoPaw** | 16 PRs + 1 release | Contribuições de primeira viagem (patrick-andstar) |
| 5 | **Hermes Agent** | 7 PRs merged + 9 issues fechadas | Volume alto, mas concentração de bugs P2 |
| 6 | **PicoClaw** | 1 merge | Baixo volume; foco em segurança (#3286) |
| 7 | **NullClaw** | 1 issue + 1 PR | Mínimo viável para manutenção |

### Quem Está Consolidando Qualidade

- **ZeroClaw** — RFC process formalizado (7 RFCs ativos com discussão significativa); foco em OIDC e observabilidade como indicadores de readyness para produção
- **IronClaw** — Consolidação de foundation issues (#6519, #6515, #6514, etc.); testing playbook e estratégia de PR documentados
- **NanoBot** — 40 PRs fechados incluem correções críticas de segurança (#4947 — sensitive URLs) e estabilidade (#4952 — UTF-16)

### Quem Está Iterando Rápido

- **NanoBot** — 55 PRs atualizados + 6 issues em 24h; preparação para próxima release sem version bump formal
- **IronClaw** — 47 PRs em review (size: XL); refatorações de grande porte em andamento
- **CoPaw** — v2.0.0.post4 hotfix + contribuições de novos contributors demonstrando crescimento

---

## 7. Sinais de Tendência

### 7.1 Multi-Agent Collaboration como Próxima Fronteira

**Evidência:**
- NanoBot: Issue #5000 — "evolve current subagent system toward multi-agent collaboration"
- NanoBot: PR #5034 — "durable state-graph planning and recovery"
- IronClaw: Memory as userland extension (#6345) + generic capability testing (#6524)
- ZeroClaw: RFC #7218 — A2A agent discovery (.well-known/agent-card.json)

**Interpretação:** O modelo de "um agente + tools" está sendo expandido para "múltiplos agentes com comunicação inter-agente, state compartilhado e descoberta dinâmica". O protocolo A2A (Agent-to-Agent) emerge como padrão potencial.

### 7.2 Enterprise Readiness como Diferenciador

**Evidência:**
- ZeroClaw: OIDC authentication RFC (#7141)
- CoPaw: Multi-usuário deployment (#6335), cron jobs com model override (#6316)
- IronClaw: Production/scoped capability lifecycle (#3288), Slack/Telegram parity
- NanoBot: Telegram multi-bot support (#5033), DOCX table preservation (#5039)

**Interpretação:** Projetos estão competindo para capturar o mercado de equipes corporativas que exigem SSO, permissões granulares e compliance. O caminho de migração do Slack/Teams é a entrada mais comum.

### 7.3 Provider Diversification

**Evidência:**
- NanoBot: xAI Grok OAuth (#5035), OpenCode Go gateway (#3785)
- ZeroClaw: Grok Build ACP, Hailo-Ollama nativo
- CoPaw: Provider-scoped picker exclusions (#69611)
- Hermes Agent: Qwen OAuth multiple fallbacks (#69470)

**Interpretação:** Não há lock-in em provedores. Usuários querem liberdade para trocar entre OpenAI, Anthropic, Google, xAI, provedores chineses (Kimi, Qwen, DeepSeek) e modelos open source. Abstração de provider é feature competitiva.

### 7.4 Observabilidade e Debugging

**Evidência:**
- ZeroClaw: Structured Observability RFC (#7232) — Rich Events, OTel, trace correlation
- CoPaw: Message recording middleware (#6339) para debugging de LLM I/O
- IronClaw: Replay QA provider journeys E2E (#6466)
- Hermes Agent: Provider-scoped picker exclusions para debugging

**Interpretação:** À medida que agentes vão para produção, logging e debugging tornam-se críticos. Ferramentas de "flight recorder" e replay determinístico emergem como necessidades legítimas.

### 7.5 Performance como Novo Front de Competição

**Evidência:**
- CoPaw: ~2s overhead em v2.0 vs v1.x (#6307) — regressão documentada
- PicoClaw: Prompt caching AWS Bedrock (#3163) — ~90% redução de custo
- CoPaw: Docker hot reload (#6344) — produtividade dev
- ZeroClaw: Cached Rust builds improvement (#7108)

**Interpretação:** Apósfeature parity, performance (latência e custo) torna-se o próximo campo de batalha. Prompt caching e model selection inteligente são otimizações esperadas.

---

## Síntese para Decisores

| Aspecto | Recomendação |
|---------|-------------|
| **Adoção imediata** | NanoBot para velocidade de features; IronClaw para arquitetura extensível em produção |
| **Monitorar de perto** | Hermes Agent (regressões Docker) e CoPaw (performance v2.0) — resolver antes de recomendar |
| **Evitar em produção** | NullClaw (escopo muito estreito), PicoClaw (Matrix resilience não resolvido) |
| **Oportunidade de contribuição** | Multi-agent collaboration (#5000, #7218) — área verde com baixa competição |
| **Risco comum** | Canal de longo prazo (Discord/Matrix/Telegram) — todos os projetos têm bugs silenciosos |

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-23

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** nesta data, com 55 PRs atualizados e 6 issues nas últimas 24h. A taxa de merge é notável — 40 das 55 PRs foram fechadas ou merged, indicando um pipeline de code review eficiente. Não há lançamentos formais hoje, mas o volume de PRs de correção (especialmente P1) sugere foco em estabilidade e preparação para uma próxima release. A comunidade está particularmente ativa em features de integração (Telegram multi-bot, xAI Grok) e em resolver problemas de usabilidade (WebUI, workspace).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões neste período. Isso pode indicar que a equipe está em fase de consolidação antes de um próximo tag, dado o alto volume de PRs fechados hoje.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Mais Relevantes

| # | Título | Impacto |
|---|--------|---------|
| [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Model presets session-scoped | Melhora gestão de modelos por sessão; permite seleção isolada sem afetar configurações globais |
| [#4992](https://github.com/HKUDS/nanobot/pull/4992) | WebUI: deliver late subagent results as new turns | Resolve problema crítico de visibilidade no WebUI quando subagentes completam tardiamente |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | WebUI polish agent output and app discovery | Unifica linguagem de logs, melhora rendering de Markdown e experiência de descoberta de apps |
| [#4952](https://github.com/HKUDS/nanobot/pull/4952) | Sanitize UTF-16 surrogates at provider request boundary | Corrige UnicodeEncodeError intermitente em requisições com emoji/JSON round-trip |
| [#4947](https://github.com/HKUDS/nanobot/pull/4947) | Keep sensitive URLs out of Jina Reader | Melhora segurança ao tornar conversão por terceiros explícita |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | Add OpenCode Go gateway support | Adiciona provedor unificado para GLM, Kimi, DeepSeek, MiMo, Qwen e MiniMax |
| [#4945](https://github.com/HKUDS/nanobot/pull/4945) | Preserve agent-owned state in project workspaces | Garante persistência de perfil, memória e skills ao trocar workspace no WebUI |

**Total de PRs fechados hoje: 40** — representando um avanço significativo em estabilidade, segurança e experiência do usuário.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Atenção

| # | Tipo | Título | Comentários | Tendência |
|---|------|--------|-------------|-----------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Issue | Proposal: evolve current subagent system toward multi-agent collaboration | 4 | 🔥 Alta |
| [#5034](https://github.com/HKUDS/nanobot/pull/5034) | PR | Goal: add durable state-graph planning and recovery | — | 🚀 Roadmap |
| [#5035](https://github.com/HKUDS/nanobot/pull/5035) | PR | Add xAI Grok OAuth with capability-gated X Search | — | 🆕 Novo provedor |

### Análise das Demandas

**#5000 — Evolução para Multi-Agent Collaboration:**
O sistema atual de subagentes é descrito como "delegação de tarefas em background" sem identidades persistentes ou estado compartilhado. A proposta busca transformar isso em um verdadeiro sistema multi-agente, indicando que a comunidade vê potencial para colaboração agent-to-agent mais sofisticada.

**#5034 — State-Graph Planning para Goals:**
Esta feature-addressa uma limitação crítica: o fluxo `/goal` atual não preserva planos estruturados nem caminhos de recuperação. Com a issue #5000, indica uma tendência de fortalecer capacidades de planejamento de longo prazo.

---

## 5. Bugs e Estabilidade

### Issues Abertas por Severidade

| Severidade | # | Título | Status |
|------------|---|--------|--------|
| 🔴 P1 | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP tool schema breaks model on strict providers (Kimi/Moonshot) | Aberta |
| 🔴 P1 | [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Dream batches starve later history entries | Aberta |
| 🔴 P1 | [#5028](https://github.com/HKUDS/nanobot/issues/5028) | Media path conflicts with workspace restrictions | Aberta |
| 🟡 P2 | — | (Nenhuma P2 aberta nova hoje) | — |

### Bugs Recentemente Fechados (Resolvidos)

| # | Título | Severidade |
|---|--------|------------|
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen models expose thinking/reasoning content | P2 |
| [#4948](https://github.com/HKUDS/nanobot/issues/4948) | WebUI loses visibility on late subagent completion | P1 |

### Análise de Estabilidade

**Alerta:** 3 bugs P1 estão abertos simultaneamente, sendo o mais crítico **#5040** — onde schemas MCP com `$ref` não-convencionais desabilitam o modelo inteiro em provedores estrictos (Kimi/Moonshot). Este bug afeta integrações de produção.

**Boas notícias:** Os bugs relacionados a UTF-16 surrogates (#4952) e WebUI late subagent (#4992) foram resolvidos, indicando resposta rápida a problemas críticos de estabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Categoria | Prioridade |
|---|--------|-----------|------------|
| [#5035](https://github.com/HKUDS/nanobot/pull/5035) | xAI Grok OAuth + provider | Provider | P1 |
| [#5033](https://github.com/HKUDS/nanobot/pull/5033) | Telegram multi-bot support | Channel | P1 |
| [#5047](https://github.com/HKUDS/nanobot/pull/5047) | Parallel Search MCP preset | WebUI | P2 |
| [#5036](https://github.com/HKUDS/nanobot/pull/5036) | Idle compaction interval configurable | Performance | P2 |
| [#5038](https://github.com/HKUDS/nanobot/pull/5038) | ModelScope documentation | Docs | P2 |
| [#4964](https://github.com/HKUDS/nanobot/pull/4964) | Image generation settings live apply | Feature | — |
| [#5039](https://github.com/HKUDS/nanobot/pull/5039) | DOCX table content preservation | Documents | P1 |

### Sinais de Roadmap

1. **Multi-Agent Architecture:** A issue #5000 e PR #5034 indicam investimento em planejamento de longo prazo e colaboração entre agentes
2. **Diversificação de Providers:** Adição de xAI Grok e expansão de OpenCode Go mostram estratégia de não-lock-in
3. **WebUI como First-Class Citizen:** Features de polish (#4963), multi-bot Telegram (#5033) e Parallel Search (#5047) reforçam foco em experiência web
4. **Performance em Edge:** PR #5036 endereça uso em Raspberry Pi, indicando interesse em deploys leves

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Issue | Impacto |
|---------|-------|---------|
| **Integração Feishu/Lark** | #5028 | Usuários não conseguem acessar arquivos enviados via integração com ferramentas de produtividade |
| **Providers Estrictos** | #5040 | Kimi/Moonshot ficam inutilizáveis com certos MCP tools — impacto em produção |
| **Planejamento de Longo Prazo** | #5000, #5034 | Usuários perdem contexto após compactação de histórico; goals não sobrevivem a falhas |
| **WebUI + Subagentes** | #4948 | Experiência confusa quando subagentes completam após timeout |

### Cenários de Uso Observados

- **Raspberry Pi Deployment:** Usuário reporta 30-40% CPU em idle (#5036) — indica uso em hardware limitado
- **Produtividade Corporativa:** Integração com Feishu, Telegram multi-bot — demanda enterprise
- **Análise de Documentos:** DOCX tables são críticos para formulários Word — necessidade real

### Satisfação Geral

**Positivo:** Taxa de resolução de bugs é alta (2 issues fechadas, múltiplas P1 corrigidas via PRs). A comunidade está engajada com 55 PRs em 24h.

**Atenção:** 3 bugs P1 abertos simultaneamente podem indicar pressão de release iminente ou dívida técnica acumulada.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criado | Atualizado | Status | Prioridade |
|---|--------|--------|------------|--------|------------|
| — | Nenhuma issue do dataset atual está "sem resposta" | — | — | — | — |

> **Observação:** Todas as 6 issues do período têm atualização recente (2026-07-22). O backlog está ativo.

### PRs Abertos Pendentes de Merge

| # | Título | Prioridade | Idade |
|---|--------|------------|-------|
| [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP schema breaks strict providers | P1 | <1 dia |
| [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Dream batches starve history | P1 | <1 dia |
| [#5035](https://github.com/HKUDS/nanobot/pull/5035) | xAI Grok OAuth | P1 | <1 dia |
| [#5033](https://github.com/HKUDS/nanobot/pull/5033) | Telegram multi-bot | P1 | <1 dia |

### Recomendações

1. **🔴 Prioridade Crítica:** O bug #5040 (MCP schema) deve ser tratado imediatamente — impacta provedores populares (Kimi/Moonshot)
2. **🔴 Prioridade Crítica:** O bug #5041 (Dream starvation) pode causar perda silenciosa de histórico
3. **🟡 Monitorar:** O PR #5034 (state-graph planning) parece estratégico para o roadmap de multi-agent
4. **🟢 Oportunidade:** A feature request #5000 (multi-agent collaboration) tem potencial para diferenciar o projeto

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 4 |
| Issues fechadas | 2 |
| PRs abertos | 15 |
| PRs merged/fechados | 40 |
| Releases | 0 |
| Bugs P1 abertos | 3 |
| Features P1 em开发 | 4 |
| Taxa de fechamento (PRs) | 72.7% |

---

*Relatório gerado em 2026-07-23. Dados extraídos de github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-23

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém **atividade intensa** com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos oficiais hoje, mas a manutenção é contínua com 7 PRs fechados/merged e 43 ainda em revisão. A saúde geral mostra um codebase ativo com regressões recentes (especialmente em Docker/v2026.7.20) e múltiplas vulnerabilidades sendo endereçadas. O componente Desktop concentra a maior parte dos bugs reportados, sugerindo pressão sobre essa superfície.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último ciclo de versões (v2026.7.20) aparenta ter introduzido regressões em Docker e Desktop conforme evidenciado nas issues #69379 e #69570. Recomenda-se cautela em deploys de produção até que esses problemas sejam resolvidos.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (7 total)

| # | PR | Componente | Tipo | Descrição |
|---|-----|------------|------|-----------|
| [#69613](https://github.com/NousResearch/hermes-agent/pull/69613) | fix(desktop): keep first response layout stable | Desktop | Bug/P3 | Estabiliza layout da primeira resposta no chat — evita "jumping" da UI |
| [#69608](https://github.com/NousResearch/hermes-agent/pull/69608) | fix(qwen-oauth): mock load_pool | CLI/Auth | Bug/P3 | Corrige testes de Qwen OAuth que falhavam por falta de mock em `load_pool` |
| [#65808](https://github.com/NousResearch/hermes-agent/issues/65808) | Desktop build crash | Desktop | Bug/P2 | Resolvido stale JS runtime que causava crash ao atualizar |
| [#10721](https://github.com/NousResearch/hermes-agent/issues/10721) | Summary model fallback crash | Agent | Bug/P1 | NameError corrigido em `_generate_summary` com argumentos errados |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | Desktop /compress command | Desktop/TUI | Bug/P2 | Corrigido command.dispatch para redirecionar built-ins ao slash.exec |
| [#34227](https://github.com/NousResearch/hermes-agent/issues/34227) | Dashboard reverse proxy | Gateway/TUI | Bug/P2 | Duas regressões em v0.14.0 para proxies reversos corrigidas |
| [#27580](https://github.com/NousResearch/hermes-agent/issues/27580) | Web extract config | Tools/Web | Bug/P2 | `web_extract` com firecrawl agora funciona corretamente |

### PRs Abertos de Destaque (5)

| # | PR | Componente | Tipo | Descrição |
|---|-----|------------|------|-----------|
| [#69609](https://github.com/NousResearch/hermes-agent/pull/69609) | fix(state): serialize state.db schema surgery | Agent | Bug/P2 | Serialização de schema SQLite multi-processo |
| [#69610](https://github.com/NousResearch/hermes-agent/pull/69610) | fix(gateway): treat API_SERVER_* as global env | Gateway | Bug/P2 | **Correção de regressão v2026.7.20** em Docker |
| [#69615](https://github.com/NousResearch/hermes-agent/pull/69615) | fix(desktop): derive SSH paths from remote HERMES_HOME | Desktop/SSH | Bug/P2 | Corrige SSH remote mode com profiles não-padrão |
| [#67186](https://github.com/NousResearch/hermes-agent/pull/67186) | feat(desktop): add manifest-driven Kanban | Desktop | Feature/P3 | Primeiro plugin dashboard driven por manifest |
| [#65926](https://github.com/NousResearch/hermes-agent/pull/65926) | chore(deps): bump mcp 1.26.0 → 1.28.1 | MCP | Dep | Atualização de dependência Model Context Protocol |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Prioridade | Área |
|---|--------|-------------|-----|------------|------|
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) | Hermes openai-codex falha onde CLI oficial funciona | 18 | 3 | P2 | Agent/OpenAI |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | Desktop /compress retorna erro de command | 11 | 1 | P2 | Desktop/TUI |
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) | Session sidebar vazia só no profile `default` | 10 | 0 | P2 | Desktop/Sessions |
| [#39933](https://github.com/NousResearch/hermes-agent/issues/39933) | Adicionar `openrouter/free` ao picker | 1 | 6 | P3 | CLI/OpenRouter |

**Análise:**
- **OpenAI Codex (#13834)**: Usuário reportou que Hermes falha em autenticação/C量 enquanto a CLI oficial do Codex funciona na mesma máquina. 18 comentários indicam troubleshooting ativo e community debugging.
- **Desktop TUI (#44456)**: Bug de UX no `/compress` built-in, agora corrigido.
- **Session Sidebar (#67600)**: Inconsistência específica do profile `default` — backend serve dados corretamente, mas frontend não renderiza.

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (1)

| # | Título | Componente | Status | Link |
|---|--------|------------|--------|------|
| #10721 | Summary model fallback crashes with NameError | Agent | **CLOSED** | [#10721](https://github.com/NousResearch/hermes-agent/issues/10721) |

### 🟠 P2 — Altos (13 issues abertas)

**Autenticação/Provider:**
- [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) — Hermes openai-codex falha em auth
- [#47260](https://github.com/NousResearch/hermes-agent/issues/47260) — Anthropic OAuth consome créditos extras
- [#69470](https://github.com/NousResearch/hermes-agent/issues/69470) — Qwen OAuth ignorando fallback de credenciais
- [#11113](https://github.com/NousResearch/hermes-agent/issues/11113) — MCP circuit breaker com falsos positivos

**Desktop:**
- [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) — Session sidebar vazia no profile default
- [#69570](https://github.com/NousResearch/hermes-agent/issues/69570) — Auto-updater falha por falta de asset macOS

**Regressões Docker/Gateway:**
- [#69379](https://github.com/NousResearch/hermes-agent/issues/69379) — API_SERVER_* cai em profile secrets
- [#69396](https://github.com/NousResearch/hermes-agent/issues/69396) — Cron workdir vaza para gateway sessions
- [#69377](https://github.com/NousResearch/hermes-agent/issues/69377) — Cron jobs não disparam em profiles secundários
- [#69551](https://github.com/NousResearch/hermes-agent/issues/69551) — SSH remote mode quebrado com profiles

**Agent/Core:**
- [#69424](https://github.com/NousResearch/hermes-agent/issues/69424) — Retry loop com backend LLM lento

### 🟡 P3 — Médios (14 issues abertas)

**Segurança:**
- [#69449](https://github.com/NousResearch/hermes-agent/issues/69449) — **API key em plaintext no config.yaml** ⚠️
- [#48181](https://github.com/NousResearch/hermes-agent/issues/48181) — Memory toolsets podem ser bypassados

**Windows:**
- [#69372](https://github.com/NousResearch/hermes-agent/issues/69372) — TestStartupTimeoutPhaseDetail race condition
- [#69371](https://github.com/NousResearch/hermes-agent/issues/69371) — Path separators em tests GitBash

**UX/UI:**
- [#67053](https://github.com/NousResearch/hermes-agent/issues/67053) — Shell hooks não disparam no TUI
- [#45802](https://github.com/NousResearch/hermes-agent/issues/45802) — Cron delivery falha para canais

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| # | Título | Tipo | 👍 | Link |
|---|--------|------|-----|------|
| [#69536](https://github.com/NousResearch/hermes-agent/issues/69536) | Evolutionary Self-Recursive Architecture (ESRA) | Feature | 0 | [#69536](https://github.com/NousResearch/hermes-agent/issues/69536) |
| [#39933](https://github.com/NousResearch/hermes-agent/issues/39933) | Adicionar openrouter/free ao picker | Feature/P3 | 6 | [#39933](https://github.com/NousResearch/hermes-agent/issues/39933) |

### Features em Desenvolvimento

| # | PR | Componente | Descrição |
|---|-----|------------|-----------|
| [#67186](https://github.com/NousResearch/hermes-agent/pull/67186) | Kanban Dashboard Plugin | Desktop | Primeiro plugin dashboard driven por manifest |
| [#48070](https://github.com/NousResearch/hermes-agent/pull/48070) | French (fr) locale | Desktop/i18n | Tradução completa ~2.100 strings |
| [#69611](https://github.com/NousResearch/hermes-agent/pull/69611) | Provider-scoped picker exclusions | CLI/Models | Permite ocultar modelos por provider |

**Sinais de Roadmap:**
- Expansão de plugins Desktop (Kanban)
- Internacionalização (Francês)
- Melhorias em OAuth (Qwen)
- Modelo picker mais flexível

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

**1. Incompatibilidade com Provedores Oficiais (#13834)**
> "Hermes openai-codex fails on same machine/network where official Codex CLI still works"
- Usuários esperamparidade de comportamento com clients oficiais
- Impacto: desenvolvedores tentando usar Hermes como alternativa

**2. Regressões em Docker v2026.7.20 (#69379, #69377)**
> "API_SERVER no longer starts" após update
- Impacto: deploys em produção quebraram
- Severidade alta pois afeta ambientes de produção

**3. Segurança de API Keys (#69449)**
> "Custom endpoint API key stored in plaintext in config.yaml"
- Vulnerabilidade exposta por usuário
- Impacto: confiança na segurança do produto

**4. Desktop Auto-Update Quebrado (#69570)**
> "Desktop app auto-updater always fails: no macOS zip asset published"
- Usuários macOS não recebem atualizações automáticas
- Impacto: experiência degradada efragmentação de versões

**5. Complexidade de Profiles (#67600, #69551, #69377)**
> Múltiplas issues com comportamento inconsistente ao usar profiles
- Configuração multi-profile ainda não está madura
- Impacto: power users com workflows complexos frustrados

### Cenários de Uso Reportados
- **Desenvolvimento local** com modelos Qwen/OpenAI
- **Deploy Docker** em produção com Telegram/Slack
- **Desktop app** como interface principal
- **Cron jobs** para automação de tarefas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Longa Espera

| # | Título | Criado | Atualizado | Prioridade | Link |
|---|--------|--------|------------|------------|------|
| #13834 | Hermes openai-codex fails | 2026-04-22 | 2026-07-22 | P2 | [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) |
| #11113 | MCP circuit breaker false triggers | 2026-04-16 | 2026-07-22 | P2 | [#11113](https://github.com/NousResearch/hermes-agent/issues/11113) |
| #47260 | Anthropic billing extra credits | 2026-06-16 | 2026-07-22 | P2 | [#47260](https://github.com/NousResearch/hermes-agent/issues/47260) |
| #48181 | Memory toolsets bypass | 2026-06-18 | 2026-07-22 | P2 | [#48181](https://github.com/NousResearch/hermes-agent/issues/48181) |
| #69449 | API key plaintext storage | 2026-07-22 | 2026-07-22 | P3 | [#69449](https://github.com/NousResearch/hermes-agent/issues/69449) |

### Issues P1/P2 Abertas Sem Assignee Apparente

| # | Título | Dias Aberto | Link |
|---|--------|-------------|------|
| #69424 | Slow LLM backend cause auto retry loop | 1 | [#69424](https://github.com/NousResearch/hermes-agent/issues/69424) |
| #69470 | Qwen OAuth resolve_runtime_provider | 1 | [#69470](https://github.com/NousResearch/hermes-agent/issues/69470) |
| #69379 | API_SERVER env vars regression | 1 | [#69379](https://github.com/NousResearch/hermes-agent/issues/69379) |
| #69396 | Cron workdir leaks into gateway | 1 | [#69396](https://github.com/NousResearch/hermes-agent/issues/69396) |

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 41 |
| Issues fechadas (24h) | 9 |
| PRs abertos | 43 |
| PRs merged/fechados | 7 |
| Releases | 0 |
| Issues P1 | 1 (fechada) |
| Issues P2 em aberto | 13 |
| Issues de segurança | 2 |
| Features abertas | 2 |

**Veredicto de Saúde:** O projeto está **moderadamente saudável** com atividade alta, mas requer atenção imediata nas regressões Docker v2026.7.20 e na vulnerabilidade de segurança de API keys plaintext. A concentração de bugs em Desktop e Docker sugere necessidade de cobertura de testes adicional nessas áreas.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 23/07/2026

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 23 de julho de 2026, com 5 PRs atualizados nas últimas 24h contra 3 issues. A atividade de PRs é positiva, com 1 merge concretizado (docs) e 4 novas contribuições abertas, incluindo uma **correção de segurança** (govulncheck) que merece atenção imediata. Não houve lançamentos de novas versões. A base de código mantém um fluxo saudável de manutenção, com foco em estabilidade e suporte a novos canais (DingTalk). Issues abertas concentram-se em bugs críticos (Matrix reconnection) e melhorias de arquitetura (stateless gateway, prompt caching para Bedrock).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último release estável mencionado nos dados é **v0.2.9**, com a versão v0.3.1 referenciada em issue como desenvolvimento ativo. Recomenda-se monitorar o repositório para anúncio de release.

---

## 3. Progresso do Projeto

### PR Merged/Fechada

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | docs: remove picopaw | imguoguo | Limpeza de documentação — reverte #3096, removendo dependência externa |

### PRs Abertas ( Destaques )

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | fix: update Go and x/text for govulncheck | imguoguo | 🔴 Prioritária | Atualização de dependências Go para corrigir vulnerabilidades reportadas pelo govulncheck |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | fix(dingtalk): support picture/image message inbound | MrTreasure | 🟢 Neutra | Adiciona suporte a mensagens de imagem no canal DingTalk |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): leverage Converse prompt caching via cache points | loafoe | 🟡 Estratégica | Implementa prompt caching da AWS Bedrock (~0.1× custo em reads de cache) |

**Recomendação:** Priorizar review do PR #3286 (segurança) e #3163 (valor comercial AWS).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | 👍 | 💬 | Relevância |
|---|--------|----|----|------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic | 2 | 5 | 🔴 **Bug crítico** — loop de sync do Matrix morre permanentemente após interrupção de rede |

**Análise:** A issue #3203 é o tema mais discutido, com 5 comentários. O bug afeta a resiliência do sistema em ambientes de produção onde o homeserver pode reiniciar ou a rede pode oscilar. A ausência de lógica de reconnection é agravada pelo fato de que o processo principal continua rodando, impedindo que `Restart=on-failure` do systemd funcione.

**Demanda identificada:** Necessidade de resiliência de rede no canal Matrix — padrão esperado em qualquer cliente Matrix production-ready.

### Issues com Estale (Sem Engajamento Recente)

- [#3258](https://github.com/sipeed/picoclaw/issues/3258) — Hook before_tool malfunction (1 comentário)
- [#3257](https://github.com/sipeed/picoclaw/issues/3257) — Modo stateless para gateway (1 comentário)

Essas issues indicam **baixa visibilidade** e podem necessitar de triagem da equipe.

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| Severidade | # | Título | Canal/Área | Status |
|------------|---|--------|------------|--------|
| 🔴 **Crítica** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop sem reconnection | Matrix | Aberta |
| 🟡 **Moderada** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Hook before_tool descarta campos e faz misparsing | Core/Hooks | Aberta + Stale |

### Análise de #3203 (Crítica)

```
O loop de long-polling `/sync` do Matrix morre silenciosamente após:
- Interrupção de rede
- Reinicialização do homeserver

Impacto:
├── Processo pai continua vivo → systemd não reinicia
├── Usuário não é notificado
└── Funcionalidade permanentemente degradada até restart manual
```

**Recomendação:** Issue requer atenção imediata da equipe. A correção deve incluir:
1. Backoff exponencial com jitter
2. Flag de status de conexão exponível
3. Notificação ao usuário em caso de falha persistente

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Demandas

| # | Título | Autor | Sinal Estratégico |
|---|--------|-------|-------------------|
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Add stateless/no-history mode for gateway sessions | lisiying | 🔹 Expansão de uso CLI/embedded |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | Prompt caching para AWS Bedrock | loafoe | 🔹 Otimização de custo para produção |

### Análise

**#3257 — Stateless Gateway Mode:** Usuário demanda que `picoclaw gateway` suporte sessões sem histórico persistente, similar ao `--session "cli:unique-id"` do modo agent. Isso indica uso em arquiteturas onde o gerenciamento de contexto é feito externamente (outro serviço, Lambda, etc.). **Sinal de mercado:** Casos de uso serverless/edge.

**#3163 — Prompt Caching AWS Bedrock:** Não é uma issue, mas sim PR em aberto que implementa caching de prompt na AWS Bedrock. A feature pode reduzir custos em ~90% para workloads com contexto grande. **Sinal competitivo:** Proximidade com implementações Anthropic Claude e OpenAI.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Contexto | Severidade |
|-----|----------|------------|
| **Falha silenciosa do Matrix** | Usuários em produção com homeservers instáveis | 🔴 Alta |
| **Hooks não funcionam como documentado** | Desenvolvedores tentando customizar comportamento de ferramentas | 🟡 Média |
| **Gateway não suporta sessões efêmeras** | Usuários com arquiteturas serverless | 🟡 Média |
| **Canal DingTalk sem suporte a imagens** | Usuários do mercado chinês | 🟢 Baixa (corrigido em #3283) |

### Cenários de Uso Observados

1. **Gateway como backend de IA** — `picoclaw gateway` como camada intermediária entre canais (Telegram, DingTalk) e modelos de IA
2. **Integração Matrix para comunidades técnicas** — Canal Matrix como via de comunicação primária
3. **AWS Bedrock como provedor de modelos** — Preocupação com custo e eficiência de contexto

### Satisfação Geral

A atividade contínua de PRs e issues indica uma **comunidade ativa**. No entanto, issues com tag `stale` e baixa resposta da equipe podem gerar frustração (especialmente #3258 com 1 comentário e sem resposta).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estale

| # | Título | Idade | Última Atualização | Prioridade |
|---|--------|-------|---------------------|------------|
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Process Hook before_tool modify not working | 8 dias | 2026-07-22 | 🔴 Review urgente |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Add stateless/no-history mode for gateway sessions | 8 dias | 2026-07-22 | 🟡 Triagem necessária |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation | 20 dias | 2026-07-22 | 🟡 Aprovação pendente |

### PRs Antigas em Aberto

| # | Título | Idade | Blocker? |
|---|--------|-------|----------|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): prompt caching | ~30 dias | Não, mas adiciona valor significativo |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): -200LOC | 20 dias | ⚠️ Baixa atividade de review |

### Ação Recomendada

1. **Equipe deve reagir a #3258** — Bug em hook básico afeta integridade da API
2. **Revisar PR #3222** — Redução de 200 linhas + limpeza de código legado
3. **Confirmar/comunicar roadmap de #3163** — Feature de custo pode estar em conflito com timeline de release

---

## Métricas Resumidas (23/07/2026)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 3 |
| PRs atualizados (24h) | 5 |
| PRs merged/fechados (24h) | 1 |
| Releases | 0 |
| Bugs críticos abertos | 1 (#3203) |
| PRs com prioridade segurança | 1 (#3286) |
| Issues stale sem resposta | 2 (#3257, #3258) |

**Índice de Saúde:** 🟡 **Moderado** — Atividade presente, mas pendências de triagem e segurança requerem ação.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-07-23 | **Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do Dia

O projeto IronClaw manteve alta atividade em 23 de julho de 2026, com 50 issues e 47 PRs atualizados nas últimas 24h. O ciclo de desenvolvimento está claramente focado na preparação para o lançamento v1, evidenciado por uma leva de issues com label `v1-launch-checklist` e várias PRs de refatoração de grande porte (size: XL). A equipe está resolvendo bugs críticos de Telegram (P1/P2) que surgiram no bug-bash, enquanto simultaneamente consolida a arquitetura Reborn com PRs de unificação do runtime e refatoração do `ProductSurface`. Não houve releases oficiais no período, mas várias PRs de fechamento de foundation foram finalizadas, indicando progresso sólido em marcos arquiteturais.

---

## 2. Lançamentos

**Nenhuma nova release została publicada nas últimas 24h.**

O último release documentado (#5598 — [chore: release](https://github.com/nearai/ironclaw/pull/5598)) ocorreu em 2026-07-03, liberando versões com breaking changes:
- `ironclaw_common`: 0.4.2 → 0.5.0 ⚠️
- `ironclaw_skills`: 0.3.0 → 0.4.0 ⚠️
- `ironclaw_safety`: 0.2.2 → 0.2.3 ✓

> **Nota de migração:** mudanças em `ironclaw_common` incluem `copy_impl_added` onde o tipo agora implementa uma nova trait. Revisitar usa do crate antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje (destaque)

| PR | Título | Impacto |
|---|---|---|
| [#6437](https://github.com/nearai/ironclaw/pull/6437) | fix(reborn): make model-visible failures recoverable | Central para resiliência — agora falhas recuperáveis são expostas ao modelo via typed outcomes |
| [#6452](https://github.com/nearai/ironclaw/pull/6452) | fix(ci): resolve main branch CI failures | Restaura cobertura E2E de ferramentas privadas e compliance com origin-gate policy |
| [#6449](https://github.com/nearai/ironclaw/pull/6449) | add run failure classification facade | Adiciona ratchet para categorização de falhas com lane, retry disposition e mensagem user-facing |
| [#6450](https://github.com/nearai/ironclaw/pull/6450) | pin capability authority fold inputs | Testa selagem de dispatch payload com actor, origin, correlation e descriptor lane |
| [#6466](https://github.com/nearai/ironclaw/pull/6466) | test(reborn): replay QA provider journeys E2E | Replay determinístico de jornadas QA com rebinding de provider IDs |
| [#6421](https://github.com/nearai/ironclaw/pull/6421) | fix(webui): localize extension setup and OAuth errors | Adiciona localized copy para 11 locales em setup failures e OAuth errors |

### Foundation Issues Closed (Consolidação Arquitetural)

Vários issues de registro histórico foram fechados hoje, documentando marcos completados:

- [#6519](https://github.com/nearai/ironclaw/issues/6519) — Testing playbook e estratégia de PR
- [#6515](https://github.com/nearai/ironclaw/issues/6515) — Operator configuration write plane
- [#6514](https://github.com/nearai/ironclaw/issues/6514) — Generic installation ownership e extension runtime
- [#6513](https://github.com/nearai/ironclaw/issues/6513) — Per-user extension lifecycle e OAuth hardening
- [#6510](https://github.com/nearai/ironclaw/issues/6510) — Unified web-gateway thread model
- [#6505](https://github.com/nearai/ironclaw/issues/6505) — Slack routing, identity, threads e delivery honesty
- [#6499](https://github.com/nearai/ironclaw/issues/6499) — Telegram production-image support
- [#6498](https://github.com/nearai/ironclaw/issues/6498) — Reborn Telegram channel, pairing e DM entrypoint
- [#6495](https://github.com/nearai/ironclaw/issues/6495) — Unified generic extension runtime
- [#6494](https://github.com/nearai/ironclaw/issues/6494) — Manifest-driven extension ingress
- [#6493](https://github.com/nearai/ironclaw/issues/6493) — Extension manifest registry e Manifest V2
- [#6489](https://github.com/nearai/ironclaw/issues/6489) — Host-managed memory retrieval e after-turn recording

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#6105](https://github.com/nearai/ironclaw/issues/6105)** — Extension/channel lifecycle state-machine test *(3 comentários)*
   - **Demanda:** Implementar testes E2E para ciclo de vida completo de extensions/channels (install→connect→disconnect→reconnect→uninstall)
   - **Contexto:** Identificado como a principal família de bugs user-facing das últimas duas semanas, com regressões em todos os 4 bug-bash waves apesar de múltiplos fixes (#5851, #5898, #5953, #5957, #6054)

2. **[#5459](https://github.com/nearai/ironclaw/issues/5459)** — Configurable skills and tools *(2 comentários)*
   - **Demanda:** Permissão para admin instalar WASM tools compartilhadas vs. user instalar tools privadas; mesmo padrão para skills
   - **Status:** Em andamento, com escopo definido para admin vs. user installation ownership

3. **[#3288](https://github.com/nearai/ironclaw/issues/3288)** — Production/scoped capability lifecycle admin parity *(2 comentários)*
   - **Demanda:** Preservar UX de lifecycle de extensões, skills, MCP e WASM enquanto move ownership para serviços tipados
   - **Complexidade:** Epic com múltiplos issues relacionados (#3090, #3127, #3085, #3237, etc.)

### PRs em Destaque (size: XL, em revisão)

| PR | Título | Escopo |
|---|---|---|
| [#6520](https://github.com/nearai/ironclaw/pull/6520) | make extension readiness and channel delivery generic | Extensão do lifecycle collapsing + separação admin config vs. user membership |
| [#6441](https://github.com/nearai/ironclaw/pull/6441) | name ProductSurface boundary | Refatoração transitional trait sobre frozen proto-facade |
| [#6442](https://github.com/nearai/ironclaw/pull/6442) | Unify Reborn runtime composition | Remoção de `build_local_runtime` path e profile predicates obsoletos |
| [#6345](https://github.com/nearai/ironclaw/pull/6345) | model memory as a userland extension | Subsume #5205 + implementa host-managed memory lifecycle |
| [#6465](https://github.com/nearai/ironclaw/pull/6465) | cover Slack OAuth and restore Telegram routine targets | Hermetic Slack OAuth journey + Telegram DMs como routine targets |

---

## 5. Bugs e Estabilidade

### Bugs Críticos P1 (Bug Bash)

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#6475](https://github.com/nearai/ironclaw/issues/6475) | Telegram /pair command not recognized, trapping user in pairing loop | **P1** | Aberta |
| [#6474](https://github.com/nearai/ironclaw/issues/6474) | Telegram delivery channel not configurable in Delivery Defaults | **P1** | Aberta |

**Análise #6475:** Usuário fica preso em loop de pairing porque `/pair` é tratado como texto ordinário ao invés de comando. Impacto direto na onboarding flow do Telegram.

**Análise #6474:** Página de Delivery Defaults só expõe "Web app only", sem opção para Telegram ou Slack. Bloqueia configuração de canais externos.

### Bugs P2 (Bug Bash)

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#6478](https://github.com/nearai/ironclaw/issues/6478) | Agent redirects to Slack auth instead of recognizing Telegram | **P2** | Aberta |
| [#6349](https://github.com/nearai/ironclaw/issues/6349) | Telegram chat history rendered inconsistently in WebUI | **P2** | Aberta |

**Análise #6478:** Quando Telegram está conectado, o agente incorretamente dispara bloco de autenticação Slack. Sintoma de confusão de channel state.

**Análise #6349:** Mensagens via Telegram mostram conversation fragmentation no WebUI — duplicated prompts, gaps vazios, tool activity misplaced.

### Issues V1-Launch-Checklist

Três issues abertas hoje com label `v1-launch-checklist`:

- [#6523](https://github.com/nearai/ironclaw/issues/6523) — Agent fails to create during onboarding if testing flag is set
- [#6522](https://github.com/nearai/ironclaw/issues/6522) — IronClaw needs Telegram setup instructions
- [#6521](https://github.com/nearai/ironclaw/issues/6521) — ironclaw CLI not available on agent staging

### CI/Dependências

- [#5664](https://github.com/nearai/ironclaw/pull/5664) (Dependabot) — Atualiza 16 dependencies de GitHub Actions, incluindo `actions/checkout` v4→v7 e `anthropics/claude-code-action` v1.0.88→v1.0.180

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues Estratégicas (criadas em 2026-07-22/23)

| Issue | Título | Escopo | Sinais de Roadmap |
|---|---|---|---|
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability and journey testing platform | Testing/E2E | Infraestrutura de testing determinístico para capacidades e jornadas críticas |
| [#6472](https://github.com/nearai/ironclaw/issues/6472) | Secret-lease + egress-proxy daemon | Security/Sandbox |Daemon para egress allowlist proxy + secret_lease handles; parte de #6468 |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) | Epic: Automated QA for the Reborn binary | Testing | Automação das 8 jornadas manuais QA em 4 camadas (hermetic, fixture, e2e, live) |
| [#5264](https://github.com/nearai/ironclaw/issues/5264) | Memory #3537 follow-ups | Memory | SQL storage-port, host-managed flow, third-party lane, semantic search |

### Temas Recorrentes de Feature Requests

1. **Extensibilidade de Ferramentas/Skills (#5459):** Demanda por modelo admin-installs-shared vs. user-installs-private para WASM tools e skills
2. **Unificação do Modelo de Extensões (#2246):** MCP servers tratados diferentemente do WASM; sem deduplicação de providers
3. **Memória (#5264):** Follow-ups do #3537 incluem native SQL backing, semantic search, third-party lane

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Issue | Problema Reportado |
|---|---|---|
| **Onboarding Telegram** | [#6475](https://github.com/nearai/ironclaw/issues/6475), [#6474](https://github.com/nearai/ironclaw/issues/6474), [#6478](https://github.com/nearai/ironclaw/issues/6478) | Usuários presos em loops de pairing; impossível configurar Telegram como canal de entrega |
| **Consistência Cross-Channel** | [#6349](https://github.com/nearai/ironclaw/issues/6349) | Mensagens Telegram renderizam incorretamente no WebUI — frustração com experiência fragmentada |
| **CLI Indisponível** | [#6521](https://github.com/nearai/ironclaw/issues/6521) | `ironclaw` command not found em agent staging — bloqueia debugging operacional |
| **Documentação** | [#6522](https://github.com/nearai/ironclaw/issues/6522) | Falta de instruções para setup Telegram tanto local quanto em agent.near.ai |
| **Notificações** | [#1519](https://github.com/nearai/ironclaw/issues/1519) | Rotinas enviam notificações para conversation isolada ao invés do thread do usuário — perda de contexto |

### Padrões de Insatisfação

- **Bugs de channel routing** dominam o feedback: Telegram vs. Slack confundidos pelo agente
- **Lifecycle instability** identificada como principal família de bugs (Issue #6105 — 4 waves de regressão)
- **Testing gaps** evidenciados por epics de Automated QA (#4775, #6524) — indica que QA manual ainda é significativa

---

## 8. Backlog que Merece Atenção

### Issues Antigas com Baixa Atividade (sem comentários recentes)

| Issue | Título | Criado | Atualizado | Prioridade |
|---|---|---|---|---|
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | Reborn: production/scoped capability lifecycle admin parity | 2026-05-06 | 2026-07-22 | Alta (P2 sugerido) |
| [#2246](https://github.com/nearai/ironclaw/issues/2246) | Unify extension model: MCP tools + provider dedup | 2026-04-10 | 2026-07-22 | Média |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Routine notifications lack context | 2026-03-21 | 2026-07-22 | Média |
| [#1330](https://github.com/nearai/ironclaw/issues/1330) | Tool schema discovery: routing/attachment semantics | 2026-03-18 | 2026-07-22 | Média |
| [#5264](https://github.com/n

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
## 📅 Data de Referência: 2026-07-23

---

## 1. Panorama do Dia

O projeto apresenta **alta atividade** no dia analisado, com 30 issues e 50 PRs atualizados em 24 horas. A release **v2.0.0.post4** foi publicada com otimização de raciocínio de agentes, enquanto a comunidade demonstra engajamento significativo em topics como performance do v2.0, suporte a multiusuário e melhorias no Console. O contributor **patrick-andstar** destaca-se com múltiplas contribuições de qualidade (7 PRs), sinalizando maturidade técnica em áreas de estabilidade e governança.

---

## 2. Lançamentos

### v2.0.0.post4 ✅
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Patch Post-Release |
| **Mudança Principal** | Otimização de raciocínio de agente para mitigar loops redundantes de pensamento e invocações duplicadas de ferramentas |

**Análise:** Este release addressa um problema crítico de comportamento (loops de pensamento) que impactava eficiência e custos de API. A natureza "post" indica hotfix urgente após o ciclo normal de releases.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (16 total)

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359) | zealonexp | Context injection role: system → user | **Crítico** — Compatibilidade com GLM/OpenAI/Anthropic APIs |
| [#6176](https://github.com/agentscope-ai/QwenPaw/issues/6176) | AaronZ345 | Bug: cron CLI reset fields | Correção de comportamento indesejado |
| [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) | 1459945216 | LaTeX rendering fix | Correção de renderização de fórmulas |

### PRs Abertos com Maior Relevância

| PR | Autor | Tema | Status |
|----|-------|------|--------|
| [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) | patrick-andstar | Preserva estado de fila recriada | `[first-time-contributor]` |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | patrick-andstar | Fallback após timeout em downloads | `[first-time-contributor]` |
| [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) | patrick-andstar | Honra audit_level=none | `[first-time-contributor]` |
| [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) | zealonexp | Remove markdown fences de tool_call args | Resolve #6363 |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | xuanrui-L | **Novo app: qwenpaw-creator** | Workflow script → video |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | wangfei010313 | Infra de descoberta segura de modelos | Expansão de providers |

**Destaque:** O contributor **patrick-andstar** demonstra expertise técnica madura em múltiplas áreas (governança, testes, tratamento de erros, compatibilidade Windows), enviando 7 PRs de alta qualidade em um único dia.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #5218 | Bug: Context Compaction causa freeze do processo | 18 | **Bug Crítico** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5218) |
| #6322 | Plataforma domínio jump para página de anúncios | 8 | Question | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6322) |
| #6314 | RemoteProtocolError: peer closed connection | 8 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6314) |
| #6318 | Feature: Modelo por conversation (não só por agent) | 6 | Enhancement | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6318) |
| #6307 | v2.0 adiciona ~2s overhead vs v1.x | 4 | **Performance** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6307) |

### Análise de Demandas

**🔴 Bug #5218 (18 comentários):** Problema crítico onde sub-agents que disparam "context compaction" causam freeze completo do processo. Mesmo com 18 comentários, foi marcado como CLOSED — verificar se a solução foi efetiva ou se é regressão.

**⚠️ Performance #6307 (4 comentários):** Regressão de performance significativa no upgrade v1.x → v2.0, adicionando ~2 segundos de overhead fixo por resposta. Impacta diretamente experiência do usuário.

**💡 Feature #6318 (6 comentários):** Demanda por granularidade de modelo no nível de conversation — indica necessidade de flexibilidade em cenários enterprise/multi-projeto.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Alta Severidade (2 issues)

| # | Título | Componentes | Link |
|---|--------|-------------|------|
| #6314 | RemoteProtocolError: conexão fechada pelo cliente | Network/Providers | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6314) |
| #6362 | MiniMax-M3: imagens não são reconhecidas | Providers/Vision | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6362) |
| #6363 | Markdown fences em tool_call arguments quebram execução | Provider parsing | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6363) |
| #5135 | MiniMax-M3 visão: outputs hallucination | Vision (reaberto) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5135) |

#### 🟡 Média Severidade (4 issues)

| # | Título | Área | Link |
|---|--------|------|------|
| #6307 | ~2s overhead em v2.0 vs v1.x | Performance | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6307) |
| #6358 | context injection como system causa ValueError | Runtime/Core | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6358) |
| #6372 | idle cleanup remove queue state recém-criada | Queue Manager | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6372) |
| #6342 | Embedding model: como verificar se está ativo? | Memory/ReMe | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6342) |

#### 🟢 Baixa Severidade (3 issues)

| # | Título | Área | Link |
|---|--------|------|------|
| #6354 | Approval Dialog: risco de "Always Allow" acidental | Console UI | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6354) |
| #6361 | Test scripts não funcionam no Windows | Console/DevX | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6361) |
| #6320 | LaTeX não renderiza com raiz quadrada | Console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6320) |

### Observações de Estabilidade

- **Provider MiniMax-M3** apresenta dois bugs críticos independentes (vision e truncation), sugerindo necessidade de revisão abrangente da integração.
- **V2.0.0** apresenta regressão de performance documentada que precisa ser addressada antes do stable.
- Bugs de parsing de modelos terceiros (GLM, DeepSeek) indicam necessidade de normalização mais robusta.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues)

| # | Título | Justificativa | Prioridade Estimada | Link |
|---|--------|---------------|---------------------|------|
| #6318 | Modelo por conversation | Flexibilidade enterprise | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6318) |
| #6316 | Cron jobs com model override | Isolamento de jobs | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6316) |
| #6297 | Drag-drop upload (img, PDF, Office) | UX/Productividade | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6297) |
| #6344 | Docker hot reload (sem rebuild) | DevOps/Usuários self-hosted | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6344) |
| #6335 | Suporte multi-usuário | Enterprise deployment | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6335) |
| #6326 | Especificar versão Node.js | DevX/Reproducibilidade | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6326) |

### PRs com Features em Desenvolvimento

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #6284 | qwenpaw-creator app | Pipeline script→video completo | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6284) |
| #6353 | Per-job model overrides em crons | Isolar modelos por scheduled job | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6353) |
| #6339 | Message recording middleware | Debugging local de LLM I/O | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6339) |
| #6349 | Sorting no plugin market | UX do marketplace | [Link](https://github.com/agentscope-ai/QwenPaw/pull/6349) |

### Sinais de Roadmap

1. **Enterprise Readiness:** Multi-usuário (#6335), modelos por conversation (#6318), cron jobs com override (#6316) — indica foco em用例 B2B/Enterprise.
2. **Developer Experience:** Docker hot reload (#6344), Windows compatibility (#6361), explicit Node.js version (#6326) — indicando comunidade DevOps/Windows em crescimento.
3. **Plugin Ecosystem:** Sorting no plugin market (#6349), novo app qwenpaw-creator (#6284) — expansão do marketplace.

---

## 7. Resumo de Feedback dos Usuários

### Dores Documentadas

| Categoria | Problema | Impacto | Link |
|-----------|----------|---------|------|
| **Performance** | v2.0 adiciona ~2s overhead por resposta | Experiência degradada | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) |
| **Deploy** | Docker rebuild destrói ambientes (Node, ffmpeg, LibreOffice) | Produtividade self-hosted | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) |
| **Multi-usuário** | Sem suporte a múltiplos usuários em deployment único | Enterprise adoption | [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) |
| **UX/Mobile** | Canal removido deixa default incorreto em novo agent | Confusão | [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) |
| **Documentação** | Não claro como verificar embedding ativo | Adoção feature | [#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342) |

### Cenários de Uso Emergentes

- **Contratos/Documentos:** Upload drag-drop de imagens, PDFs e Office para revisão de contratos (#6297)
- **Self-hosted Enterprise:** Deploy interno com sistemas proprietary (#6335)
- **Scripts → Video:** Pipeline criativo dentro do agent (#6284)

### Satisfação/Insatisfação

| Indicador | Observação |
|-----------|------------|
| **Positivo** | Release v2.0.0.post4 resolve loops de pensamento — feedback implícito de que era problema crítico |
| **Negativo** | Regressão de performance v1.x → v2.0 gera frustração visível |
| **Neutro** | Bugs de MiniMax-M3 sugerem "works on my machine" — falta de ambiente de teste do provider |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição

| # | Título | Criado | Comentários | Prioridade | Link |
|---|--------|--------|-------------|------------|------|
| #6374 | Token usage persistence: retry após write failure | 2026-07-22 | 0 | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6374) |
| #6355 | Mission parser: quebra comandos quoted | 2026-07-22 | 1 | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6355) |
| #6366 | Console coverage test timeout | 2026-07-22 | 1 | Baixa | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6366) |
| #6315 | v2.0.0.post3: free model não funciona | 2026-07-21 | 2 | **Alta** | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6315) |

### Issues com Tendência de Crescimento

| # | Título | 👍 | Comentários | Tendência | Link |
|---|--------|-----|-------------|-----------|------|
| #5135 | MiniMax-M3 visão: hallucination | 1 | 1 | Reaberto | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5135) |
| #6307 | ~2s overhead v2.0 | 0 | 4 | Crescendo | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6307) |
| #6314 | RemoteProtocolError | 0 | 8 | Estável | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6314) |

### Recomendações de Priorização

1. **#6315** — Free model quebrado no v2.0.0.post3 (usuários afetados imediatamente)
2. **#6307** — Regressão de performance (bloqueia upgrade para usuários sensíveis a latência)
3. **#6374** — Persistência de token usage sem retry (dados podem ser perdidos silenciosamente)
4. **#6344** — Docker hot reload (dem

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-23

## 1. Panorama do Dia

ZeroClaw mantém um ritmo de atividade intenso, com 100 artefatos atualizados nas últimas 24h (50 issues + 50 PRs). Não houve lançamentos hoje, mas o volume de PRs fechadas (7) supera a média habitual, sinalizando progresso tangível em múltiplas frentes. A atividade concentrou-se em infraestrutura de back-end (backends de persistência de sessão para múltiplos bancos de dados), correções de bugs críticas (history trimming, Windows compatibilidade) e refinamento de features em andamento (goals, channels, observabilidade). O projeto demonstra maturidade no pipeline de PRs, com diversas branches grandes em revisão e um backlog ativo de RFCs em车票.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O projeto não publicou novas versões desde o período reportado. Mantenha atenção aos PRs em estágio avançado — em particular a série de session backends (#9250, #9251, #9252) — que podem compor a base da próxima release.

---

## 3. Progresso do Projeto

Os seguintes PRs foram fechados/merged recentemente, representando avanços concretos:

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#8779](https://github.com/zeroclaw-labs/zeroclaw/pull/8779) | fix(zerocode): use daemon final text when no streaming text was accumulated | Project516 | Corrige fallback de texto quando streaming falha — estabilidade do core |
| [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638) | feat(skills)!: replace built-in ClawHub source with git-catalog --skill selector | JordanTheJet | Remove dependência de zip/flate2; introduz seletor git nativo — redução de superfície de ataque e complexidade |
| [#9113](https://github.com/zeroclaw-labs/zeroclaw/pull/9113) | fix(providers): add idle read_timeout to streaming HTTP clients | NiuBlibing | Adiciona read_timeout em clientes HTTP de streaming (OpenAI + compatível) — previne deadlocks |
| [#9259](https://github.com/zeroclaw-labs/zeroclaw/pull/9259) | feat(companion): voice-first companion experience | ghandhitechnology | Voice-first com face animada, TTS streaming, soul engine e Browserbase —扩扩展 de UX |
| [#9261](https://github.com/zeroclaw-labs/zeroclaw/pull/9261) | test(channels): route mirror coverage through production paths | Audacity88 | Melhora cobertura de testes para canais (Lark) via paths de produção |

**Destaque em progresso (stack de Goals):** O stack de PRs de Goals (#8687 → #8688 → #8689 → #8746 → #8996) está em revisão ativa, abordando controller, ferramentas delegadas, admission de comandos e preservação de goals durante reload — um ciclo significativo de evolução do sistema de objetivos do agente.

---

## 4. Temas Quentes da Comunidade

As discussões mais relevantes por engajamento:

1. **#7462 — 11 comentários** — [74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462): Bug de alta prioridade em Windows 11 (CP 936), com comandos Unix-only, path semantics e encoding. A CI não captura porque só roda em Linux — pedido explícito por coverage cross-platform.

2. **#7141 — 7 comentários** — [RFC: OIDC authentication provider](https://github.com/zeroclaw-labs/zeroclaw/issues/7141): RFC de segurança/arquitetura para autenticação plugável via OIDC, alinhado com a meta v0.9.0. Múltiplos contribuidores validam a direção.

3. **#7184 — 7 comentários** — [RFC: Move i18n files to git submodule](https://github.com/zeroclaw-labs/zeroclaw/issues/7184): Separar catálogos Fluent e arquivos .po em submodule para isolar churn de tradução do histórico principal.

4. **#7218 — 7 comentários** — [RFC: A2A agent discovery (.well-known/agent-card.json)](https://github.com/zeroclaw-labs/zeroclaw/issues/7218): Definição de protocolo de descoberta para multi-agent installs — fundamento para interoperabilidade com sistemas externos.

5. **#6850 — 6 comentários** — [RFC: Decouple memory lifecycle from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850): Trait `MemoryStrategy` para permitir estratégias plugáveis de retrieval/consolidation sem modificar backends — architectural shift importante.

**Padrão identificado:** A comunidade está fortemente focada em **extensibilidade** (OIDC, plugins, A2A) e **opinião sobre arquitetura** (i18n, memory lifecycle), indicando maturação para uso em produção com requisitos heterogêneos.

---

## 5. Bugs e Estabilidade

### Críticos (P1 — risco: high)

| # | Descrição | Status | Ação |
|---|-----------|--------|------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures em Windows (Unix-only commands, path semantics, CP 936) | OPEN | Requer CI cross-platform + fix de encoding |
| [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | History trimming ocorre silenciosamente com pruning disabled — perda de contexto sem aviso | CLOSED | Corrigido em #8779 |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice Call com credenciais vazias causa crashloop do supervisor (~2s) | OPEN | Requer validação antes de habilitar canal |

### Alta Prioridade (P2 — risco: high)

| # | Descrição | Status |
|---|-----------|--------|
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Subprocess shell/skill pode alocar memória ilimitada (OOM em container) — 1MB output cap não protege |
| [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | Composio tool dispatch ignora action-scope filter — segurança de permissões comprometida |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Pairing code de apenas 6 dígitos numéricos é fraco demais — default deveria ser 32 caracteres alfanumérico |

### Recuperações de bugs em PR (não-relatadas como issues novas)

- [#9243](https://github.com/zeroclaw-labs/zeroclaw/pull/9243): fix(config): map aliases não eram criados em `config init`
- [#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105): fix(memory): timeouts de Lucid ARM eram curtos demais (500ms/800ms → 3s)

**Análise:** O projeto está maduro em gestão de bugs — a maioria dos P1 tem PRs associados em revisão. A lacuna mais crítica é **test coverage em Windows**, que deixa um vetor de instabilidade fora do radar da CI atual.

---

## 6. Pedidos de Features e Sinais de Roadmap

Os pedidos mais estruturados que sugerem direções de produto:

| # | Feature | Prioridade | Sinal de Roadmap |
|---|---------|------------|-------------------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC authentication (RFC → v0.9.0) | P1 | Enterprise readiness |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | Agent evaluation harness (`zeroclaw eval`) — replay + live modes | P2 | DevEx / benchmarking |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability config (vision, context_window) | P1 | Suporte a modelos heterogêneos |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | Structured Observability — Rich Events, OTel, trace correlation | P2 | Operações em produção |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | "Everything is a plugin" — unify Integrations + Plugins | P2 | Extensibilidade radical |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Improve cached Rust builds and CI critical path | P2 | DX / velocity |
| [#9250](https://github.com/zeroclaw-labs/zeroclaw/pull/9250), [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251), [#9252](https://github.com/zeroclaw-labs/zeroclaw/pull/9252) | Session persistence backends (MySQL/MariaDB, PostgreSQL, Oracle) | — | **In-progress** — infraestrutura multi-tenant |

**Novos canais em proposta:** Mastodon (#6423), Twilio SMS (#6427), Rocket.Chat (#6435), Zulip (#6437) — todos aceitos (P2, risco médio). Pattern consistente de "pluginização" de canais.

**Novos providers em PR:** Grok Build ACP (#9104), Hailo-Ollama nativo (#9109).

---

## 7. Resumo de Feedback dos Usuários

Baseado nas issues abertas e no teor dos RFCs, as dores principais dos usuários são:

1. **Windows compatibility** (#7462): Usuários em Windows 11 Chinês enfrentam 74 falhas silenciosas. "CI does not catch this because the Test job only runs on Linux."

2. **Segurança de pairing** (#6613): "6 numeric digits is too weak." Usuários enterprise pedem códigos mais longos e alfanuméricos.

3. **Perda de contexto** (#8837): "Talking to the agent mid session suddenly loses its context without explanation." Usuário descobriu só perguntando ao agent qual era o contexto mais antigo.

4. **Configuração de providers** (#6518): "Adding a provider like Kimi K2.5 currently requires a long series of non-obvious workarounds." Falta de DX para providers customizados/OpenAI-compatíveis.

5. **Memory backends em ARM** (#9105): Embedding cold start em AArch64 levava 1.4-1.6s vs. timeout de 500ms — instabilidade silenciosa em hardware específico.

6. **Crashloop com canais desabilitados** (#6724): Usuário habilita canal via UI mas não preenche credenciais → supervisor crashloops.

**Satisfação implícita:** O volume de RFCs aceitos e PRs em progresso sugere confiança no roadmap. A existência de issues como #6391 (heartbeat tracking), #6423/#6427/#6435/#6437 (canais adicionais) indica que usuários estão explorando cenários de uso além do core.

---

## 8. Backlog que Merece Atenção

Issues aceitas há >30 dias sem movimento recente (actualizado em 2026-07-22, sem commits associados visíveis):

| # | Título | Criado | Prioridade | Motivo de atenção |
|---|--------|--------|------------|-------------------|
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Real heartbeat tracking para daemon nodes | 2026-05-05 | P2 | Base para gestão de fleet — estagnado |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | `zeroclaw node add <url>` CLI | 2026-05-05 | P2 | CLI companion do #6391 — empacado junto |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime replies bypass Fluent localization | 2026-05-09 | P2 | i18n quebrado em caminhos específicos |
| [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) | Validate config.toml in quickstart | 2026-05-06 | P2 | DX: novo usuário descobre problemas tarde |
| [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) | Add Mastodon (ActivityPub) channel | 2026-05-06 | P2 | Canais Fediverse em alta demanda |
| [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) | Add Twilio SMS channel | 2026-05-06 | P2 | Cobertura mobile |
| [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) | Add Rocket.Chat channel | 2026-05-06 | P2 | Auto-hosting teams |
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | Add Zulip channel | 2026-05-06 | P2 | Mesma família de canais |

**Recomendação:** Priorizar alocação de reviewers para o stack de Goals (#8687-#8996) e para os backends de sessão (#9249-#9254), que parecem prontos para merge. Os canais e features de node management estão com peso baixo de comentários mas alta relevância para retenção de usuários auto-hospedados — considerar triagem com mantenedores.

---

*Relatório gerado automaticamente com base em dados do GitHub de zeroclaw-labs/zeroclaw. Timestamp: 2026-07-23.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*