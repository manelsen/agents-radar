# Resumo diário do ecossistema de agentes de IA 2026-09-21

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-20 22:07 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-09-21

---

## 1. Panorama do dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**. Uma única issue de enhancement foi aberta, solicitando melhorias na experiência de debugging quando modelos do Ollama não suportam ferramentas. Nenhum PR foi merged ou fechado, e nenhuma release foi publicada. O repositório permanece em estado de manutenção operacional, sem indicadores de regressões críticas ou bloqueios.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não possui versões recentes documentadas nos dados analisados. Para informações sobre lançamentos anteriores, recomenda-se consultar a aba [Releases](https://github.com/nullclaw/nullclaw/releases) do repositório.

---

## 3. Progresso do projeto

**Nenhum PR merged ou fechado nas últimas 24 horas.**

Não há registro de pull requests que representem avanço concreto no código do projeto neste período. A ausência de atividade de merge pode indicar:
- Ciclo de review em andamento
- Período de estabilidade sem necessidade de alterações
- Equipe focada em outras prioridades

---

## 4. Temas quentes da comunidade

### Issue em destaque

| # | Título | Tipo | Comentários | Reações |
|---|--------|------|-------------|---------|
| [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | ollama incompatibility notification | enhancement | 1 | 0 |

**Análise:** A issue sugere que quando um modelo do Ollama não suporta tools/funções, o sistema retorna apenas um "adapter error" genérico, sem detalhes. O autor relata ter recorrido ao Wireshark para debugar o problema — indicando lacuna significativa na experiência do desenvolvedor.

**Demanda central:** Melhorar mensagens de erro para diagnóstico mais claro de incompatibilidades.

---

## 5. Bugs e estabilidade

**Nenhum bug crítico reportado nas últimas 24 horas.**

A ausência de issues de bug indica estabilidade operacional do codebase atual. O projeto não apresenta indicadores de crashes ou regressões neste período.

---

## 6. Pedidos de features e sinais de roadmap

### Nova feature request

**[#1000](https://github.com/nullclaw/nullclaw/issues/1000)** — *ollama incompatibility notification*

- **Prioridade percebida:** Média-alta (UX impactante para debugging)
- **Complexidade estimada:** Baixa-média (adicionar validação e notificação contextual)
- **Alinhamento com roadmap:** Provavelmente baixa urgência estratégica, mas alto valor para experiência do desenvolvedor

**Possível implementação:**
1. Detectar resposta de erro específica do Ollama
2. Traduzir erro técnico em mensagem legível
3. Sugerir ações (e.g., verificar versão do modelo, usar modelo alternativo)

---

## 7. Resumo de feedback dos usuários

| Aspecto | Feedback |
|---------|----------|
| **Dores identificadas** | Falta de clareza em mensagens de erro quando integrações falham silenciosamente |
| **Cenário de uso** | Desenvolvimento/debugging de agentes IA com backend Ollama |
| **Satisfação** | Funcionalidade principal operacional |
| **Insatisfação** | Experiência de debugging inadequada para cenários de incompatibilidade |

**Síntese:** Usuários conseguem integrar o NullClaw com Ollama, mas enfrentam dificuldade quando o modelo não suporta tools. A ausência de contexto no erro obriga investigação manual — ponto de atrito direto na experiência.

---

## 8. Backlog que merece atenção

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | 1 dia | Aberta | ⚠️ Aguardando triagem |

**Observação:** A issue #1000 está aberta há 1 dia sem atribuição de label ou assignee. Recomenda-se que a equipe avalie:

- Classificar quanto a escopo (quick win vs. redesign)
- Definir se Requires/Needs informação adicional do autor
- Considerar para milestone da próxima versão por impacto direto na DX

---

## Métricas resumidas

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas (24h) | 1 |
| PRs merged (24h) | 0 |
| Releases (24h) | 0 |
| Score de saúde | 🟡 Estável com oportunidade de melhoria |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub em 2026-09-21.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-09-21

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois extremos distintos de atividade** em setembro de 2026. De um lado, **ZeroClaw, Hermes Agent, NanoBot e CoPaw** demonstram alta cadência de desenvolvimento com dezenas de issues e PRs atualizados diariamente, indicando comunidades ativas e roadmaps agressivos. Do outro, **NullClaw, PicoClaw e IronClaw** operam em regime de baixa atividade ou manutenção pura, com IronClaw sendo o caso mais crítico — 100% das interações reduzidas a updates de dependências automatizadas pelo Dependabot. A convergência técnica mais notável é a ênfase universal em **segurança e controle de custos**, com pelo menos quatro projetos simultaneamente trabalhando em features de budget limits, approval managers e sandbox policies. O mercado sinaliza demanda clara por **providers alternativos** (Claude subscription, Unifically, OpenAI-compatible), **experiência multiplataforma** (especialmente Windows e desktop) e **confiabilidade de sessões** — dores que aparecem transversalmente em todas as comunidades.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Merged/Closed | Releases (24h) | Saúde |
|---------|--------------|-----------|---------------|----------------|-------|
| **ZeroClaw** | 50 | 50 | 1 | 0 | 🟢 Boa — pipeline robusto |
| **Hermes Agent** | 30 abertas / 20 fechadas | 47 abertos / 3 merged | 3 | 0 | 🟢 Boa — equilíbrio manutenção/evolução |
| **NanoBot** | 4 | 56 | 37 | 0 | 🟢 Positiva — alta cadência |
| **CoPaw (QwenPaw)** | 24 (6 fechadas) | 37 | 14 | **1 beta** (v2.2.2-beta.3) | 🟢 Ativo — pré-lançamento |
| **PicoClaw** | 6 | 5 | 0 | 0 | 🟡 Moderada — bug crítico DingTalk |
| **NullClaw** | 1 | 0 | 0 | 0 | 🟡 Estável — oportunidade de melhoria |
| **IronClaw** | 0 | 6 (Dependabot) | 2 | 0 | ⚠️ Baixa — sem engajamento externo |

**Observação crítica:** CoPaw é o único projeto a publicar release nas últimas 24h, representando maturidade no ciclo de release. ZeroClaw e Hermes Agent mantêm volume alto de atividade, mas sem releases — indicando trabalho preparatório para milestones futuras.

---

## 3. Posicionamento do Projeto Principal

Para fins deste relatório, consideraremos **ZeroClaw** como projeto de referência pelo volume de atividade e sofisticação técnica.

### Vantagens Competitivas

| Dimensão | ZeroClaw | Pares |
|----------|----------|-------|
| **Arquitetura de sessões** | RFC aceito com adaptadores de transporte surface — sessões owned pelo runtime | Hermes Agent e NanoBot operam com sessões stateless ou semi-stateful |
| **Extensibilidade** | WASM plugin runtime em implementação (RFC#10076) | Nenhum outro projeto demonstra roadmap de runtime poliglota |
| **Segurança** | 7+ PRs XL size para sandbox_policy, filesystem confinement, host resolution | PicoClaw e NullClaw sem iniciativas equivalentes |
| **Caching** | Cache TTL configurável para Anthropic (PR#10724) | NanoBot possui cache simples, demais sem implementação documentada |
| **Community governance** | RFC process formalizado com decision queue tracker | Apenas Hermes Agent demonstra processo estruturado |

### Lacunas Identificadas

- **Gargalo de revisão:** 7+ PRs size XL aguardando maintainer review — risco de stagnation
- **Documentação de integração:** Issue #11016 (docs para lighter-core policy) indica deficit deDX
- **Custo de API:** Bug #10635 expõe inconsistência entre config ilimitada e limite efetivo de $10/dia

---

## 4. Focos Técnicos Compartilhados

A análise transversal dos relatórios revela quatro necessidades que emergem simultaneamente em múltiplos projetos:

### 4.1 Confiabilidade de Sessões e Memória

| Projeto | Issue | Detalhe |
|---------|-------|---------|
| **NanoBot** | #5403 | Tiktoken estimation 30-50% abaixo do real — consolidação de memória falha |
| **CoPaw** | #7724 | Perda de sessão após inatividade — regressão recorrente |
| **ZeroClaw** | #10635 | Custo limit configurado como ilimitado mas agent turns rejeitados em $10/dia |

**Síntese:** Todos os projetos que implementam gerenciamento de contexto de janela enfrentam desafios de medição precisa de tokens e persistência de estado.

### 4.2 Segurança de Providers e Autenticação

| Projeto | Foco | Evidência |
|---------|------|-----------|
| **Hermes Agent** | Provider keys routing (AQ. Gemini, ZAI) | Issues #117147, #117291 |
| **PicoClaw** | OAuth scopes hardcoded | PR #3378 — scopes sobrescreviam config customizada |
| **CoPaw** | Prompt injection em system-reminders | Issue #7859 — segurança crítica |
| **ZeroClaw** | Sandbox policy, filesystem confinement | 5+ PRs XL de security |

### 4.3 Experiência de Usuário Multi-Canal

| Projeto | Canais | Desafios |
|---------|--------|----------|
| **NanoBot** | Discord, Email, WebUI | OAuth reauth, timeout handling, Discord reaction state |
| **PicoClaw** | IRC, QQ, DingTalk | Panic em DingTalk, IRCv3 multiline |
| **Hermes Agent** | Bot Mode, Dashboard | Reverse proxy CORS, systemd integration |
| **ZeroClaw** | Telegram, WhatsApp | Webhook vs polling, poll votes delivery |

### 4.4 Providers Alternativos e Compatibilidade

Demanda transversal por:
- **Claude subscription OAuth** (Hermes Agent #25267 — 57 👍)
- **OpenAI-compatible providers** (PicoClaw #3366)
- **Unifically provider** (NanoBot #5832 — merged)
- **AgentScope Platform** (CoPaw #7843 — em desenvolvimento)

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo e Posicionamento

| Projeto | Público Primário | Diferenciação |
|---------|-----------------|---------------|
| **ZeroClaw** | Enterprise e power users | Arquitetura formal com RFCs, WASM runtime, sandbox policy |
| **Hermes Agent** | Desenvolvedores e infra teams | Desktop TUI, Windows nativo, plugin catalog revisado |
| **NanoBot** | Usuários generalistas | Multi-canal (Discord, Email, WebUI), self-update |
| **CoPaw** | Comunidade Qwen/Alibaba | Integração nativa Qwen, Hub multi-tenant planejado |
| **PicoClaw** | Operadores de plataformas | IRCv3, ACP/mesh networking, Sprint Tracks definidos |
| **NullClaw** | Desenvolvedores Ollama | Debugging de modelos locais — nicho específico |
| **IronClaw** | nearai/NEAR ecosystem | Foco interno — manutenção de dependências |

### 5.2 Arquitetura Técnica

| Projeto | Paradigma | Escolhas Distintivas |
|---------|-----------|---------------------|
| **ZeroClaw** | Append-only event sourcing | Sessões owned pelo runtime, transport adapters |
| **Hermes Agent** | Plugin catalog | DirectSDK installs via reviewed catalog |
| **NanoBot** | Provider abstraction | Failsafe timeout, self-update bootstrap |
| **CoPaw** | Multi-tenant readiness | Skill-based architecture, E2E test gating |
| **PicoClaw** | Mesh networking | ACP/mesh depth, OpenCode Go header |
| **NullClaw** | Minimal adapter | Foco em debugging, integração Ollama |

### 5.3 Velocidade de Iteração

| Tier | Projetos | Characteristics |
|------|----------|-----------------|
| **Fast movers** | ZeroClaw, Hermes Agent, NanoBot, CoPaw | 30-50 issues+PRs/dia, múltiplas features em paralelo |
| **Steady maintainers** | PicoClaw | 5-6 items/dia, foco em qualidade vs velocidade |
| **Stalled** | NullClaw, IronClaw | <2 items/dia ou apenas automação |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Indicadores de Saúde Comunitária

| Projeto | Issue Resolution | PR Merge Rate | Release Cycle | Engajamento |
|---------|-----------------|---------------|---------------|-------------|
| **CoPaw** | 🟢 Alta (6 fechadas/24h de 24) | 🟢 Alta (14/37) | 🟢 Beta release activa | 🟢 31 comentários no Hub multi-tenant |
| **ZeroClaw** | 🟢 Balanceado | 🟡 Lento (1/50, gargalo) | 🟡 Em preparação | 🟢 RFCs com 15-39 comentários |
| **Hermes Agent** | 🟢 Alta (20/50) | 🟡 Baixa (3/47) | 🟡 Em preparação | 🟢 57 👍 em feature request |
| **NanoBot** | 🟢 Alta (37 merged) | 🟢 Alta | 🟡 Em preparação | 🟢 Issues P1 com PR correlato |
| **PicoClaw** | 🟡 Baixa | 🟡 Estagnado | 🟡 Planejado (v0.11.0) | 🟡 Bug crítico sem comments |
| **NullClaw** | 🟡 Estagnado | 🔴 Nulo | 🔴 Estável (sem releases) | 🟡 Issue aguardando triagem |
| **IronClaw** | 🔴 Nulo | 🔴 Automação | 🔴 Nenhum | 🔴 Zero interações humanas |

### 6.2 Maturidade Organizacional

| Aspecto | Líder | Seguidores |
|---------|-------|------------|
| **Processo de RFC** | ZeroClaw (7 RFCs aceitos, trackers de implementação) | Hermes Agent (processo informal) |
| **Segurança** | ZeroClaw (5+ PRs security) | Hermes Agent (env scrub, secret redaction) |
| **Testes** | CoPaw (+1027 statements, E2E blocking) | NanoBot (CI contract tests) |
| **Release discipline** | CoPaw (beta activo, E2E gate) | — |
| **Dependabot hygiene** | IronClaw (100% automated) | Todos com variação |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

#### A) Demanda por Autonomia de Custo
```
Evidência: 
- Hermes Agent #25267 (57 👍) — Claude subscription OAuth para evitar double-billing
- ZeroClaw #10635 — budget limit inconsistência reportada
- CoPaw #7719 — modelo separado para memória (otimização de custo)
- ZeroClaw #10960 — cache TTL configurável para Anthropic
```
**Direção:** Usuários em produção buscam controle granular de custos de API, especialmente em cenários de uso intensivo ou contínuo.

#### B) Multi-Tenancy como Próximo Horizonte
```
Evidência:
- CoPaw #7318 — Hub multi-tenant com 31 comentários e planejamento activo
- NanoBot — self-update e multi-session support
- ZeroClaw — unified file/attachment architecture para contextos compartilhados
```
**Direção:** A evolução de assistentes pessoais para plataformas colaborativas organizacionais parece inevitável. CoPaw está mais avançado nesta transição.

#### C) Segurança como Requisito Fundamental
```
Evidência:
- ZeroClaw: 5+ PRs XL de segurança (sandbox, filesystem, host resolution)
- Hermes Agent: httpx2 pinning (CVEs), redacção de output em shell.exec
- CoPaw: Prompt injection persistente (#7859)
- PicoClaw: OAuth scopes hardcoded bug (#3378)
```
**Direção:** A convergência de agents com shell access, filesystem e múltiplos providers exige arquiteturas de sandbox rigorosas. ZeroClaw lidera nesta frente com RFCs formalizados.

#### D) Providers OpenAI-Compatible como Padrão
```
Evidência:
- PicoClaw #3366 — OpenAI Compatible Providers request
- NanoBot #5832 — Unifically provider merged
- CoPaw #7843 — AgentScope Platform provider
- Hermes Agent — provider routing problemático (multiple keys)
```
**Direção:** A fragmentação de provedores de LLM favorece arquiteturas que abstraem a interface OpenAI-compatível, permitindo swap de provider sem refatoração.

#### E) Desktop como Campo de Batalha
```
Evidência:
- Hermes Agent: Windows orphans, update aborts, desktop crashes (12+ issues)
- CoPaw: Desktop path detection, terminal xterm integration
- ZeroClaw: Computer-use desktop protocol (RFC#6909 tracker)
- PicoClaw: WebUI performance lag
```
**Direção:** A experiência desktop é o diferenciador de usabilidade. Hermes Agent sofre com dívida técnica significativa no Windows; ZeroClaw investe proativamente em computer-use.

### 7.2 Matriz de Oportunidades

| Oportunidade | Projetos que Abordam | Gaps Identificados |
|--------------|----------------------|-------------------|
| **Claude subscription OAuth** | Hermes Agent | Sem timeline |
| **Multi-tenant Hub** | CoPaw | Early stage, 31 comments |
| **WASM plugin runtime** | ZeroClaw | RFC accepted, implementation pending |
| **OpenAI-compatible abstraction** | PicoClaw, NanoBot | Parcialmente implementado |
| **Desktop computer-use** | ZeroClaw | RFC tracking |
| **FTS5 session search** | NanoBot | Proposta sem implementação |
| **IRCv3 multiline** | PicoClaw | PR em review |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-09-21 demonstra **consolidação técnica em curso** com dois movimentos distintos: projetos avançados (ZeroClaw, Hermes Agent, CoPaw) investindo em arquitetura formal, segurança e multi-tenancy, enquanto projetos menores ou estagnados (NullClaw, IronClaw) correm risco de irrelevância. A tendência mais clara é a **convergência para providers abstratos e controles de custo rigorosos**, reflexo direto do amadurecimento do mercado que busca deployments em produção ao invés de experiments. CoPaw destaca-se como único projeto com release activo e ciclo de beta disciplinado, enquanto ZeroClaw lidera em sofisticação arquitectónica com processo de RFC maduro. Para decisores técnicos, a recomendação é monitorar a evolução do multi-tenant em CoPaw e as implementações de segurança em ZeroClaw como indicadores leading do ecossistema.

---

*Relatório gerado com base em dados públicos do GitHub de 2026-09-21. Métricas de 24h.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-21

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 21 de setembro de 2026, com 56 PRs atualizados nas últimas 24h (37 merged/fechados) e 4 issues relevantes. A equipe demonstra foco em **estabilidade de provedores e canais** (timeout handling, OAuth, Discord), **experiência do usuário na WebUI** (notificação sonora, chats temporários, UI noise) e **infraestrutura interna** (subagentes via sessões privadas, self-update, JEV client). Não houve lançamentos hoje, indicando trabalho preparatório para a próxima release. A saúde geral do projeto é positiva, com correções críticas em andamento (p1 memory consolidation) e expansão de integrações (Unifically, Baizhi, Microsoft OAuth).

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de integração ativa, com 37 PRs merged/fechados preparando terreno para o próximo release.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços significativos:

| PR | Título | Impacto |
|---|---|---|
| [#5830](https://github.com/HKUDS/nanobot/pull/5830) | feat(webui): add Baizhi Agent Toolkit MCP preset | Adiciona preset para conectividade com Baizhi Cloud Agent Toolkit via Streamable HTTP, expondo websearch e web_scrape |
| [#5836](https://github.com/HKUDS/nanobot/pull/5836) | fix(webui): make OAuth reauthentication actionable | Melhora UX de OAuth com "Sign in again" acionável e preservação de selections em falhas de rede |
| [#5835](https://github.com/HKUDS/nanobot/pull/5835) | test(agent): fix response-source CI contract | Corrige contrato de CI para consolidation callback; produção inalterada |
| [#5832](https://github.com/HKUDS/nanobot/pull/5832) | feat: add Unifically provider | Adiciona Unifically como provedor built-in OpenAI-compatível |
| [#5823](https://github.com/HKUDS/nanobot/pull/5823) | refactor(webui): remove legacy message projection | Remove caminho legado de message-projection, completando migração do protocolo de eventos |

---

## 4. Temas Quentes da Comunidade

As **issues mais comentadas** nas últimas 24h refletem demandas prioritárias:

### Issue #5833 — SSE Consumer Dropping `response.reasoning_text.*` Events
- **Link:** https://github.com/HKUDS/nanobot/issues/5833
- **Resumo:** Transport asymmetry entre `consume_sdk_stream` e `consume_sse_with_reasoning`. O consumer SSE ignora silenciosamente eventos `response.reasoning_text.delta/done` enquanto o SDK os acumula corretamente.
- **Relevância:** Afeta diretamente xAI Grok e OpenAI Codex; PR #5834 já aberto como correção.
- **Reações:** 0 👍

### Issue #5524 — WebUI Session End Notification Sound
- **Link:** https://github.com/HKUDS/nanobot/issues/5524
- **Resumo:** Request para notificação sonora quando agent turn completa, com toggle em Settings (default OFF).
- **Reações:** 0 👍 | 1 comentário

### Issue #5509 — Session Search Performance with FTS5 Index
- **Link:** https://github.com/HKUDS/nanobot/issues/5509
- **Resumo:** Proposta de índice SQLite FTS5 para mirror do JSONL store, acelerando busca em conversas com centenas de sessões.
- **Reações:** 0 👍 | 1 comentário

---

## 5. Bugs e Estabilidade

### Prioridade P1 (Crítico)

| Issue/PR | Título | Severidade | Status |
|---|---|---|---|
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | fix(memory): use API-reported prompt tokens to trigger consolidation | P1 | ABERTO |

**Análise:** Tiktoken estimation está 30-50% abaixo do count real da API para modelos modernos, impedindo consolidação de contexto mesmo quando a janela está excedida. Risco de perda de dados ou comportamento inesperado em sessões longas.

### Prioridade P2 (Alta)

| Issue/PR | Título | Canal | Status |
|---|---|---|---|
| [#5834](https://github.com/HKUDS/nanobot/pull/5834) | fix(providers): handle `response.reasoning_text.*` events in SSE consumer | Provider | ABERTO |
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | fix(api): route each session_id to its own chat | API | ABERTO |
| [#5808](https://github.com/HKUDS/nanobot/issues/5808) | WebUI follow-ups canceled by /stop replay after gateway restart | WebUI | FECHADO |
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) | fix(discord): clean up reaction state on stop | Discord | ABERTO |
| [#5769](https://github.com/HKUDS/nanobot/pull/5769) | fix(providers): fail over on NIM-style timeout errors | Provider | ABERTO |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | fix(email): only mark \Seen on messages that are actually delivered | Email | ABERTO |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Título | Indicativo |
|---|---|---|
| [#5817](https://github.com/HKUDS/nanobot/pull/5817) | feat: add stable and source self-update flows | `nanobot update` + bootstrap de Bun runtime |
| [#5815](https://github.com/HKUDS/nanobot/pull/5815) | feat(exec): add optional JEV shell safeguard | Preflight via OpenRouter Decisions API |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) | feat: add reusable JEV client | Base para heartbeat, shell policy, provider selection |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) | refactor(agent): execute subagents through private sessions | Subagentes via sessões in-memory filhas |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | feat(email): add Microsoft delegated OAuth for Office365/Outlook | Suporte OAuth2 para email |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | feat(webui): localize agent activity | Localização em 10 idiomas |

### Sinais de Roadmap Identificados

1. **Experiência WebUI:** Redução de UI noise (#5831), retenção de chats temporários (#5837), notificação sonora (#5524), links Markdown clicáveis (#5829)
2. **Infraestrutura de Providers:** Novos providers (Unifically), fallback robusto (NIM timeouts), client JEV reutilizável
3. **Segurança:** JEV shell safeguard, OAuth reauthentication
4. **Performance:** FTS5 index para busca de sessões (#5509), consolidação via tokens reais da API (#5403)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Tema | Descrição | Issue |
|---|---|---|
| **Notificação de resposta** | Usuários na WebUI não percebem quando agente termina tarefa longa | [#5524](https://github.com/HKUDS/nanobot/issues/5524) |
| **Performance de busca** | Busca em JSONL é lenta com centenas de sessões | [#5509](https://github.com/HKUDS/nanobot/issues/5509) |
| **Perda de chats temporários** | Mensagens perdidas ao navegar durante reply ou unmount de pane | [#5837](https://github.com/HKUDS/nanobot/pull/5837) |
| **OAuth quebrado** | Credenciais OAuth rejeitadas sem ação clara para reautenticar | [#5836](https://github.com/HKUDS/nanobot/pull/5836) |
| **Timeout inconsistente** | Falhas de timeout NVIDIA NIM não fazem failover corretamente | [#5769](https://github.com/HKUDS/nanobot/pull/5769) |

### Cenários de Uso Evidenciados

- **Agents colaborativos:** Subagentes executando tarefas delegadas em sessões privadas
- **Email corporativo:** Migração de autenticação básica para OAuth2 com Office365
- **Shell seguro:** Preflight de comandos shell via API de decisões
- **Operação autônoma:** Self-update para manter instâncias atualizadas

---

## 8. Backlog que Merece Atenção

| Issue/PR | Título | Idade | Prioridade | Situação |
|---|---|---|---|---|
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | feat(webui): localize agent activity | ~39 dias | P2 | ABERTO, conflict |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | fix(memory): use API-reported prompt tokens | ~36 dias | P1 | ABERTO, conflict |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | feat(email): Microsoft OAuth | ~22 dias | P2 | ABERTO |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | fix(email): only mark \Seen on delivered | ~22 dias | P2 | ABERTO |
| [#5509](https://github.com/HKUDS/nanobot/issues/5509) | Session search FTS5 index | ~28 dias | — | ABERTO, aguardando |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | WebUI notification sound | ~27 dias | good first issue | ABERTO, aguardando |

### Recomendações

1. **Priorizar #5403 (P1):** Bug de consolidação de memória afeta estabilidade em produção
2. **Revisar PRs em conflito (#5367, #5403):** Ambos indicam "conflict" — necesitan rebasing
3. **Atribuir ownership para #5509 e #5524:** São boas issues para contributors novos, ambas abertas há ~4 semanas sem atribuição

---

*Relatório gerado em 2026-09-21 com base em dados do GitHub do NanoBot (HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-21

## 1. Panorama do Dia

O Hermes Agent manteve um ritmo de atividade intenso em 21/09/2026, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. A taxa de resolução de issues foi expressiva (20 fechadas vs. 30 abertas), e 3 PRs foram merged ou fechados, indicando progresso concreto na base de código. **Nenhuma release foi publicada**, sugerindo que o time está em ciclo de preparação ou validação. O projeto apresenta um equilíbrio saudável entre manutenção corretiva (bugs) e evolução de funcionalidades, com destaque para correções de segurança e melhorias no fluxo de trabalho de plugins.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

- Não há changelogs ou notas de migração para reportar neste período.
- Recomenda-se monitorar a aba Releases do repositório para announcements iminentes.

---

## 3. Progresso do Projeto

Os PRs mais relevantes merged/fechados hoje:

| PR | Título | Impacto |
|----|--------|---------|
| [#117622](https://github.com/NousResearch/hermes-agent/pull/117622) | plugin-catalog: claude-subscription-directsdk installs from reviewed catalog | Integração oficial do plugin Claude Subscription DirectSDK via catálogo revisado |
| [#117657](https://github.com/NousResearch/hermes-agent/pull/117657) | feat(update): hermes update --list-venv-holders reports venv holders as JSON | Melhoria no fluxo de update do Windows com relatório JSON de processos bloqueantes |
| [#117514](https://github.com/NousResearch/hermes-agent/pull/117514) | fix(cron): treat drifted start-time fingerprint as live owner in recovery | Correção de race condition no scheduler de cron jobs |
| [#117656](https://github.com/NousResearch/hermes-agent/pull/117656) | fix(local-runtime): resident model cap derives from VRAM | Melhoria na gestão de VRAM para modelos locais, evitando paging indevido |
| [#117655](https://github.com/NousResearch/hermes-agent/pull/117655) | fix(auth): user provider plugin aliases win in auth registry | Padronização de resolução de aliases de providers de autenticação |
| [#117654](https://github.com/NousResearch/hermes-agent/pull/117654) | feat(delegation): owner-death recovery includes transcript tails and git state | Resiliência em delegações — parent pode continuar sem forensics após crash |

**Avanços notáveis:**
- **Segurança**: PR [#117586](https://github.com/NousResearch/hermes-agent/pull/117586) implementa scrub de variáveis de ambiente e redacção de output em `shell.exec` do TUI.
- **Plugins**: PRs [#117563](https://github.com/NousResearch/hermes-agent/pull/117563) e [#117567](https://github.com/NousResearch/hermes-agent/pull/117567) abordam problemas críticos no sistema de plugins e Kanban.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| Issue | Título | Comentários | 👍 | Análise |
|-------|--------|-------------|-----|---------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked (cron/jobs.py conflicts) | **124** | 0 | Problema de merge bloqueante na integração automatizada Nous→Enterkey. Alto impacto em pipelines de CI. |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | [Feature]: Claude Agent SDK model provider with subscription OAuth | 20 | **57** | Demanda significativa: usuários querem usar chaves de assinatura Claude existentes sem double-billing. Feature de alta prioridade para o ecossistema de providers. |
| [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) | [Feature]: Bot Mode — rooms and 1:1 bot chats should feel like a real chat | 2 | 0 | Proposal para melhorar UX social em Bot Mode, diferenciando sessões de chats reais. |
| [#47601](https://github.com/NousResearch/hermes-agent/issues/47601) | Dashboard broken behind reverse proxy: CORS + systemd | 1 | 0 | Problema recorrente em deploys corporativos com proxy reverso. |

**Análise:** A comunidade demonstra forte interesse em **integração com provedores de IA** (Claude subscription, Qwen, Gemini) e em **fiabilidade de deployment** (cron, gateway, reverse proxy). A issue #25267 com 57 👍 sinaliza uma necessidade de negócio real — evitar double-billing para usuários existentes de Claude.

---

## 5. Bugs e Estabilidade

### P1 (Críticos):
| Issue | Título | Status | Observação |
|-------|--------|--------|------------|
| [#117296](https://github.com/NousResearch/hermes-agent/issues/117296) | title_generation completion persisted as assistant message — session derails into JSON-title mimicry | **CLOSED** | Bug de session state: título sintético replayado ao modelo. Corrigido? |
| [#47590](https://github.com/NousResearch/hermes-agent/issues/47590) | 千问模型回答时报错 ('list' object has no attribute 'get') | **OPEN** | Provider Qwen quebrado. Needs-repro. |

### P2 (Altos):
| Issue | Título | Componente | Observação |
|-------|--------|------------|------------|
| [#116376](https://github.com/NousResearch/hermes-agent/issues/116376) | Windows: Hermes window closed but process stays alive | **Desktop/Windows** | Processo orphan no Windows — Task Manager mostra Hermes.exe após关闭窗口 |
| [#116375](https://github.com/NousResearch/hermes-agent/issues/116375) | Windows desktop Update aborts with exit 4 | **Desktop/Windows** | Atualização no Windows falha com timeout de 30s |
| [#117472](https://github.com/NousResearch/hermes-agent/issues/117472) | Bot Mode Stop-hold swallows triggering message | **Sessions** | Hold detection não pode ser desabilitado |
| [#105535](https://github.com/NousResearch/hermes-agent/issues/105535) | Compressed conversation cost freezes at rotation value | **Dashboard/Sessions** | Custo não atualiza após compressão de conversa |
| [#117544](https://github.com/NousResearch/hermes-agent/issues/117544) | /review fails UnscopedSecretError on HERMES_CODEX_BASE_URL | **Agent/Desktop** | Multiplexed desktop serve com provider openai-codex quebrado |
| [#117147](https://github.com/NousResearch/hermes-agent/issues/117147) | Gemini keys with AQ. prefix force-routed to Vertex → 403 | **Auth/Config** | Usuários de AI Studio gratuitos afetados |

### P3 e menores (15+ issues):
- **Segurança:** [#117087](https://github.com/NousResearch/hermes-agent/issues/117087) (httpx2 pinning com CVEs), [#116907](https://github.com/NousResearch/hermes-agent/issues/116907) (key_cmd com shell=True), [#117263](https://github.com/NousResearch/hermes-agent/issues/117263) (remote backend probe vaza home/cwd/user)
- **Plugins:** [#90451](https://github.com/NousResearch/hermes-agent/issues/90451) e [#85879](https://github.com/NousResearch/hermes-agent/issues/85879) (manifest_version 2 rejeitado pelo installer)
- **Desktop:** [#116905](https://github.com/NousResearch/hermes-agent/issues/116905) (tombstone dir listado como teammate), [#117375](https://github.com/NousResearch/hermes-agent/issues/117375) (composer desaparece durante loading)
- **Kanban/Auth:** [#117541](https://github.com/NousResearch/hermes-agent/issues/117541) (live updates não funcionam com auth required)

**Tendencia:** Foco em **estabilidade cross-platform** (especialmente Windows) e **segurança de autenticação** (multiple provider keys, OAuth flows).

---

## 6. Pedidos de Features e Sinais de Roadmap

| Issue | Título | Demanda | Potencial Impacto |
|-------|--------|---------|-------------------|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | Claude Agent SDK model provider com subscription OAuth | Provider que usa chaves de assinatura existentes (Codex-style) | **Alto** — reduz custo para base de usuários existente |
| [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) | Bot Mode com UX de chat social (friend-group vibe) | Mensagens leves com social affordances | **Médio** — diferencia Bot Mode de sessões técnicas |
| [#47601](https://github.com/NousResearch/hermes-agent/issues/47601) | Dashboard com suporte a reverse proxy (CORS + systemd) | Deploys corporativos atrás de proxy | **Médio** — desbloqueia adoção enterprise |
| [#47991](https://github.com/NousResearch/hermes-agent/issues/47991) | Display de custo em moeda local (CNY/EUR/JPY) | Conversão automática de USD para moedas locais | **Médio** — usabilidade para mercado internacional |
| [#47597](https://github.com/NousResearch/hermes-agent/pull/47597) | PR: fix(qwen) — preserve tool result strings | Manter mensagens Qwen como plain strings | **Manutenção** — compatibilidade com provider Qwen |

**Sinais de roadmap:**
- **Provider diversification**: Forte demanda por novos providers (Claude subscription, Qwen, Gemini Vertex) com autenticação flexível.
- **Enterprise readiness**: Suporte a reverse proxy, systemd, deploys corporativos.
- **UX/UI**: Melhoria de Bot Mode e suporte a moedas locais indicam foco em experiência internacional.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas:

1. **Double-billing em Claude**: Usuários com assinatura Claude existente são forçados a pagar API separada. Issue #25267 com 57 👍 é o indicador mais forte de satisfação insatisfeita.

2. **Instabilidade no Windows**: Reports consistentes de processos orphan ([#116376](https://github.com/NousResearch/hermes-agent/issues/116376)), updates falhando ([#116375](https://github.com/NousResearch/hermes-agent/issues/116375)), eDesktop crashes. Windows parece ser a plataforma menos estável.

3. **Configuração de providers é confusa**: Problemas com keys AQ. do Gemini ([#117147](https://github.com/NousResearch/hermes-agent/issues/117147), [#117291](https://github.com/NousResearch/hermes-agent/issues/117291)) e ZAI ([#117208](https://github.com/NousResearch/hermes-agent/issues/117208)) indicam que a lógica de routing de autenticação precisa de documentação e escape hatches.

4. **A2A plugin com timeouts**: Long tasks (>2min) sempre falham devido a mismatch entre client timeout (120s) e server reply window (300s) — [#78007](https://github.com/NousResearch/hermes-agent/issues/78007).

5. **Deploy com reverse proxy quebrado**: CORS e HERMES_TUI_DIR em systemd causam falhas silenciosas — [#47601](https://github.com/NousResearch/hermes-agent/issues/47601).

### Cenários de uso destacados:
- **Household bot rooms** (group chat, Bot Mode) — cenário de produção real com 90+ minutos de uso contínuo.
- **Multi-machine A2A setups** — uso distribuído com necessidade de streaming e long-reply handling.
- **Enterprise deployments** — gateway com OAuth, systemd, reverse proxy.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há muito tempo (>30 dias sem atividade ou sem triagem):

| Issue | Título | Idade | Prioridade | Recomendação |
|-------|--------|-------|------------|--------------|
| [#47590](https://github.com/NousResearch/hermes-agent/issues/47590) | Qwen provider error: 'list' object has no attribute 'get' | **~95 dias** | P2 | Priorizar — provider quebrado há meses |
| [#47601](https://github.com/NousResearch/hermes-agent/issues/47601) | Dashboard broken behind reverse proxy: CORS + systemd | **~95 dias** | P3 | Avaliar como bloqueante para enterprise |
| [#47991](https://github.com/NousResearch/hermes-agent/issues/47991) | Support display cost in local currency | **~95 dias** | P3 | backlog para internacionalização |
| [#78007](https://github.com/NousResearch/hermes-agent/issues/78007) | A2A long tasks fail (client 120s < server 300s) | **~49 dias** | P3 | Risco para setups distribuídos |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | **~35 dias** | P3 | Bloqueia pipeline de CI interno |

### Issues com alta votação mas sem movimento:

| Issue | Título | 👍 | Status | Recomendação |
|-------|--------|---|--------|--------------|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | Claude subscription OAuth (Codex-style) | **57** | OPEN | Priorizar para roadmap — demanda de mercado clara |

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 30 |
| Issues fechadas (24h) | 20 |
| PRs abertos (24h) | 47 |
| PRs merged/fechados (24h) | 3 |
| Releases | 0 |
| Bugs P1-P2 reportados | ~12 |
| Features em demanda (👍≥10) | 1 (#25267) |
| Issues de segurança | 3 |

**Saúde geral:** O projeto demonstra atividade saudável com foco em estabilidade (bugs Windows, cron recovery) e segurança (auth, shell exec, provider keys). A ausência de releases pode indicar preparação para um feature freeze ou etapa de QA. A comunidade demonstra interesse em providers alternativos e internacionalização.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-09-21. Última atualização: 2026-09-21.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-21

---

## 1. Panorama do dia

O projeto PicoClaw apresenta **atividade moderada** em 21 de setembro de 2026, com 6 issues e 5 PRs atualizados nas últimas 24h. A comunidade demonstra engajamento contínuo em features de longa discussão (IRCv3, OpenAI compatibility), enquanto dois bugs críticos relacionados ao canal DingTalk foram reportados novamente — um sinal de regressão que requer atenção imediata. O lançamento de documentação do sprint v0.11.0 indica planejamento ativo para a próxima versão, mas a ausência de releases formais nas últimas 24h sugere foco em estabilidade e review de PRs.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O projeto não publicou versões taggeadas entre 2026-09-20 e 2026-09-21. A versão estável mais recente permanece **v0.3.1**, conforme referenciada nos bugs reportados. O PR #3383 documenta o sprint plan para v0.11.0, sugerindo que o próximo ciclo de desenvolvimento está em fase de planejamento.

---

## 3. Progresso do Projeto

Três PRs noteworthy foram atualizados ou merged recentemente:

| PR | Status | Impacto | Link |
|---|---|---|---|
| **#3383** docs: v0.11.0 sprint plan | ✅ CLOSED | Define roadmap estruturado com Tracks 67–75, incluindo agentic web3, module trust e ACP/mesh depth | [sipeed/picoclaw#3383](https://github.com/sipeed/picoclaw/pull/3383) |
| **#3367** docs: add Pilot MCP setup example | ✅ CLOSED | Adiciona comando de setup do Pilot Protocol e health-check ao CLI quickstart | [sipeed/picoclaw#3367](https://github.com/sipeed/picoclaw/pull/3367) |
| **#3378** fix(auth): use configured scopes | 🔄 OPEN | Corrige hardcoded scope em `RefreshAccessToken` que ignorava `OAuthProviderConfig.Scopes` | [sipeed/picoclaw#3378](https://github.com/sipeed/picoclaw/pull/3378) |
| **#3354** feat(irc): assemble IRCv3 multiline | 🔄 OPEN | Implementa suporte a `draft/multiline` do IRCv3 para mensagens longas | [sipeed/picoclaw#3354](https://github.com/sipeed/picoclaw/pull/3354) |
| **#3353** fix(channels): bound tool feedback animations | 🔄 OPEN | Previne animações de feedback de tools executando indefinidamente (timeout 5 min) | [sipeed/picoclaw#3353](https://github.com/sipeed/picoclaw/pull/3353) |

**Destaque:** O PR #3378 resolve um bug sutil de OAuth onde scopes hardcoded `"openid profile email"` sobrescreviam configurações customizadas, potencialmente causando falhas de autenticação com provedores que exigem scopes específicos.

---

## 4. Temas Quentes da Comunidade

As discussions com maior engajamento revelam demandas consolidada:

**🏆 Maior discussão técnica: Issue #3287 — Suporte a mensagens longas no IRC**
- **Comentários:** 13 | **Reações:** 0
- **Resumo:** A limitação de 512 bytes do IRC e a fragmentação automática de mensagens longas criam problemas de coerência. O PR #3354 já implementa a solução (IRCv3 `draft/multiline`), mas a issue permanece aberta como referência.
- **Análise:** Demanda antiga (julho 2026) com solução em desenvolvimento ativo. Comunidade IRC demonstra interesse em interoperabilidade.

**🥈 Bug de usabilidade crítico: Issue #3281 — Input laggy na Web UI**
- **Comentários:** 12 | **Reações:** 👍 2
- **Resumo:** Chat history extenso causa lentidão perceptível no campo de input da Web UI (PicoClaw v0.3.1, Go 1.25.11).
- **Análise:** Problema de UX que afeta experiência diária. Regressão provável relacionada a re-renders não otimizados. Permanece stale mas ativo.

**🥉 Feature request com apoio: Issue #3366 — OpenAI Compatible Providers**
- **Comentários:** 4 | **Reações:** 0
- **Resumo:** Solicita provider genérico "OpenAI Compatible" para suportar routers auto-hospedados como 9Router.
- **Análise:** Alinha-se com tendência de mercado deLLMs open-source e self-hosted. Proposta pragmática (copiar provider existente).

---

## 5. Bugs e Estabilidade

**🔴 Bug Crítico — Regressão DingTalk:**

| Issue | Severidade | Detalhes |
|---|---|---|
| **#3382** DingTalk gateway panic on stream SDK reconnect | **CRÍTICA** | `send on closed channel` em `client.go:161`. Reproduzível em v0.3.1 (commit 2cf030d2) com `dingtalk-stream-sdk-go` v0.9.1. Reportado em 2026-09-20 10:46 CST. **0 comentários ainda.** |
| **#973** QQ/DingTalk PANIC overnight | **RESOLVIDA** | Bug similar de 2026-03-02. Foi fechado, mas #3382 indica regressão. |

**🟡 Bug de UI/UX:**

| Issue | Severidade | Detalhes |
|---|---|---|
| **#3281** Web UI chat input laggy | **MÉDIA** | Performance degrada com history extenso. Afeta usabilidade diária. Stale desde 2026-07-21. |

**Análise:** O bug #3382 é prioritário — panics em produção com DingTalk indicam que o canal está funcionalmente quebrado na versão estável. A comunidade reportou problema similar em #973 (já fechado), sugerindo regressão introduzida após suposta correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

Três features em discussão ativa podem influenciar o roadmap v0.11.0:

| Feature | Issue/PR | Sinais | Link |
|---|---|---|---|
| **OpenAI Compatible Providers** | #3366 | Medio-alto | [sipeed/picoclaw#3366](https://github.com/sipeed/picoclaw/issues/3366) |
| **IRCv3 Multiline Assembly** | #3354 | Alto (PR quase pronto) | [sipeed/picoclaw#3354](https://github.com/sipeed/picoclaw/pull/3354) |
| **OpenCode Go Session Header** | #3369 | Médio | [sipeed/picoclaw#3369](https://github.com/sipeed/picoclaw/issues/3369) |

**Sinais do Roadmap v0.11.0 (via PR #3383):**
O sprint plan documentado menciona:
- **Agentic web3** — Integração com protocolos web3
- **Module trust** — Sistema de confiança modular
- **ACP/mesh depth** — Expansão de mesh networking

A feature de OpenAI compatibility não aparece explicitamente no sprint plan documentado, mas alinha-se com a direção de extensibilidade do projeto.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

| Dor | Contexto | Evidência |
|---|---|---|
| **Instabilidade de canais** | DingTalk e QQ causam panics após uso prolongado | Issues #3382, #973 |
| **Performance da Web UI** | Lag em sessions com history extenso | Issue #3281 |
| **Fragmentação de mensagens IRC** | Long messages são divididas, perdendo contexto | Issue #3287 |
| **Flexibilidade de providers** | Incompatibilidade comLLMs self-hosted | Issue #3366 |

**Cenários de uso observados:**
- Agentes rodando 24/7 conectados a múltiplas plataformas (QQ, DingTalk, IRC)
- Uso da Web UI como interface primária para conversas
- Integração com LLMs via provedores customizados (OpenCode, routers auto-hospedados)

**Satisfação:**
- Issue #3369 (OpenCode session header) foi closed rapidamente, indicando alinhamento com prioridades
- PR de documentação (Pilot MCP) merged com facilidade — comunidade contribui ativamente em docs

---

## 8. Backlog que Merece Atenção

Issues sem resposta ou com estagnação prolongada:

| Issue | Idade | Status | Prioridade | Link |
|---|---|---|---|---|
| **#3382** DingTalk panic | **1 dia** | 🔴 Sem comentários | **CRÍTICA** — Panics em produção | [sipeed/picoclaw#3382](https://github.com/sipeed/picoclaw/issues/3382) |
| **#3281** Web UI lag | **~60 dias** | Stale | **ALTA** — Afeta UX | [sipeed/picoclaw#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **#3287** IRC long messages | **~60 dias** | Stale, PR #3354 em progresso | **MÉDIA** — Solução em review | [sipeed/picoclaw#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| **#3366** OpenAI compatible | **~17 dias** | Stale | **MÉDIA** — Demanda crescente | [sipeed/picoclaw#3366](https://github.com/sipeed/picoclaw/issues/3366) |

**Ação recomendada imediata:**

1. **#3382** — Triagem urgente. Bug de regressão em canal oficial (DingTalk) requer acknowledgment da equipe core e investigação de regressão desde #973.

2. **#3281** — Designe responsável ou feche como duplicate/WontFix. 60 dias sem resposta erode confiança da comunidade.

3. **#3378** — Review e merge prioritário. Corrige bug real de OAuth que pode causar auth failures silenciosas.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-09-21. Métricas de 24h.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw
## Data: 21 de setembro de 2026

---

## 1. Panorama do Dia

O projeto IronClaw demonstra atividade moderada concentrada exclusivamente em manutenção de infraestrutura. Nas últimas 24 horas, não houve abertura de issues, releases ou interações significativas da comunidade, com 6 PRs de dependências automatizadas (4 abertas e 2 fechadas) representando toda a movimentação. A atividade é sustentada primiramente pelo Dependabot, indicando disciplina de atualização de dependências, mas revela baixa atividade de desenvolvimento ativo ou contribuições externas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões, releases de补丁 ou pré-releases neste período. Recomenda-se verificar o pipeline de releases e possíveis bloqueios no workflow de CI/CD.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged nas Últimas 24h

| # | Título | Impacto |
|---|--------|---------|
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | deps: bump everything-else group (25 updates) | Atualização de dependências Rust (uuid, base64, rust_decimal, etc.) |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | deps: bump actions group (6 updates) | Atualização de GitHub Actions (claude-code-action, setup-node, etc.) |

**Avanços:**
- Atualização do ecossistema Rust para versões mais recentes (uuid 1.24.0 → 1.26.1, base64 0.22.1 → 0.23.1)
- Atualização de GitHub Actions incluindo claude-code-action de 1.0.183 → 1.0.221/1.0.228
- Manutenção preventiva do tooling de desenvolvimento

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com comentários ou reações significativas registrada nas últimas 24h.**

### Observações:
- Todos os 6 PRs ativos são de manutenção automática (Dependabot)
- Zero interações humanas (comentários, reactions, reviews externos)
- Ausência de discussões técnicas ou decisões de design

**Indicador de saúde:** ⚠️ Baixa engajamento da comunidade

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

O sistema de issues não registrou:
- Reports de crashes ou regressions
- Falhas de build ou CI
- Problemas de performance
- Incompatibilidades

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma issue de feature request registrada nas últimas 24h.**

### PRs Abertas (Potential Roadmap):

| # | Título | Escopo | Risco |
|---|--------|--------|-------|
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | deps: bump everything-else (29 updates) | Dependencies | Baixo |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | deps: bump actions (8 updates) | CI/CD | Baixo |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | deps: bump wasm group (4 updates) | WebAssembly | Médio |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | deps: bump tokio-ecosystem (2 updates) | Async Runtime | Baixo |

**Nota:** PR #7834 apresenta标签 `size: L, risk: medium`, indicando atenção especial na atualização do grupo wasmtime/wasm-tools.

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback registrados nas últimas 24 horas.**

Ausência de:
- Issues com reportes de experiência do usuário
- Dores ou frustrações documentadas
- Cenários de uso reportados
- Avaliações ou surveys

---

## 8. Backlog que Merece Atenção

### PRs Abertas há Mais Tempo

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | deps: bump wasm group | 2026-08-23 | ~29 dias | ⚠️ Atenção |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | deps: bump tokio-ecosystem | 2026-09-06 | ~15 dias | Normal |
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | deps: bump everything-else | 2026-09-20 | ~1 dia | Normal |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | deps: bump actions | 2026-09-20 | ~1 dia | Normal |

### Ação Recomendada
- **PR #7834:** Revisar atualizações do ecossistema WebAssembly (wasmtime, wit-component, wit-parser) - está aberta há quase 30 dias com标签 de risco médio.

---

## Métricas Consolidada

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs abertas (24h) | 4 |
| PRs merged/fechadas (24h) | 2 |
| Releases | 0 |
| Engajamento comunidade | Baixo |
| Bugs reportados | 0 |
| Features solicitadas | 0 |

---

*Relatório gerado automaticamente em 2026-09-21. Dados source: GitHub API (nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data de Referência:** 2026-09-21  
**Repositório:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw demonstra **alta atividade de desenvolvimento** em 21 de setembro de 2026. Nas últimas 24h, foram registradas 24 issues atualizadas (6 fechadas) e 37 PRs (14 merged/fechados), indicando um ritmo intenso de desenvolvimento. A versão **v2.2.2-beta.3** foi recém-lançada com correções críticas para o console e seletores de teste E2E. A comunidade está particularmente engajada com o roadmap do **QwenPaw Hub** (multi-tenant) e há vários bugs críticos em investigação, incluindo problemas de perda de sessão, vazamento de contexto por blocos de mídia e falhas de autenticação em provedores de API. O estado geral sugere um projeto saudável em fase ativa de pré-lançamento, com forte foco em estabilidade e experiência do usuário.

---

## 2. Lançamentos

### 🎯 v2.2.2-beta.3 (Released)
**Link:** [Release v2.2.2-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3)

**Mudanças incluídas:**
| PR | Descrição | Autor |
|----|-----------|-------|
| [#7851](https://github.com/agentscope-ai/QwenPaw/pull/7851) | `fix(console)`: Restaurar ações de resposta do assistente | @zhijianma |
| [#7502 redesign](https://github.com/agentscope-ai/QwenPaw/issues/7502) | `fix(e2e)`: Reancorar seletores do console quebrados pela reformulação do redesign | @yutai78786 |

**Notas:**
- Esta versão beta corrige regressões críticas do console introduzidas pela reformulação #7502
- A restauração das ações de resposta do assistente melhora a interatividade do fluxo de conversação
- Testes E2E reforçados para evitar regressões futuras nos seletores

**Breaking Changes:** Nenhuma identificada nesta release.

**Migração:** Não há passos especiais de migração para usuários da beta anterior.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Significativos (Últimas 24h)

| PR | Título | Impacto | Status |
|----|--------|---------|--------|
| [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904) | `fix(pet)`: Encaminhar actor de aprovação para serviço nativo | **Crítico** - Resolve falha total de aprovação de ferramentas com qwenpaw-pet | ✅ Closed |
| [#7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) | `test(console)`: +1027 statements de cobertura (+3.19%) | **Qualidade** - Cobertura do console sobe de 64.45% para 67.65% | ✅ Closed |
| [#7901](https://github.com/agentscope-ai/QwenPaw/pull/7901) | `ci(release)`: Descongelar merges imediatamente após release | **DevEx** - Elimina espera prolongada do cron de descongelamento | ✅ Closed |
| [#7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) | `ci(release)`: Publicação de artefatos condicionada ao gate de testes | **Qualidade** - Garante que E2E seja blocking antes de publicar | ✅ Closed |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | `fix(agents)`: Tratar rejeições de partes de áudio desconhecidas | **Estabilidade** - Recuperação de sessões com áudio armazenado | ✅ Closed |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | `fix(agents)`: Tratar rejeições de input_audio desconhecidas | **Estabilidade** - Idem ao acima, abordagem alternativa | ✅ Closed |
| [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | `feat(desktop)`: Detectar e abrir caminhos locais no chat | **UX Desktop** - Links clicáveis para arquivos/diretórios | ✅ Closed |
| [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) | Fix/tool card stuck calling after stop | **UX** - Corrige卡片 travada em "executando" após stop | ✅ Closed |
| [#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898) | Fix/qwenpaw pet approval actor | **Crítico** - Variação alternativa da correção #7904 | ✅ Closed |

### PRs Abertos de Alto Impacto

| PR | Título | Destaque |
|----|--------|----------|
| [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) | `feat(providers)`: Unificar descoberta, precificação e seleção de modelos | **Roadmap** - Refatoração completa da gestão de provedores |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | `feat(console)`: Adicionar terminal de chat multi-tab autenticado | **UX** - Terminal xterm integrado com contexto de diretório |
| [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | `feat(providers)`: Adicionar AgentScope Platform como provider nativo | **Integração** - Provider oficial com suporte a descoberta de modelos |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | `feat(memory)`: Permitir modelo separado para escrita ReMeLight | **Custo** - Reduz consumo de modelos caros em memory writing |
| [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) | `fix(loop)`: Prevenir escalação de doom-loop obsoleta | **Estabilidade** - Resolve #7905 |

---

## 4. Temas Quentes da Comunidade

### 🔥 Issue com Maior Engajamento

**[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** - QwenPaw Hub Multi-tenant Edition  
**Engajamento:** 31 comentários | 4 👍  
**Autor:** @rayrayraykk | Criado: 2026-08-26

> "QwenPaw started as a personal AI assistant, but the community has repeatedly asked for a better way to run it for a team."

**Análise:** Esta é a discussão estratégica mais importante do momento. O QwenPaw Hub multi-tenant representa uma evolução significativa do produto, passando de assistente pessoal para plataforma colaborativa. Os 31 comentários indicam forte interesse da comunidade em:
- Gerenciamento centralizado de skills
- Acesso multi-usuário com roles/admin
- Políticas de uso organizacional

### Discussões Ativas Relevantes

| Issue | Tema | Comentários | Tendência |
|-------|------|-------------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Roadmap Hub multi-tenant | 31 | 🟢 Crescente |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner vazando contexto | 6 | 🔴 Crítico |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Perda de sessão | 5 | 🟡 Persistente |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Histórico comprimido | 4 | 🟡 Frustração |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Prompt injection | 4 | 🔴 Segurança |

### Insights de Sentimento

**Positivo:**
- Forte receptividade ao QwenPaw Hub
- Apreço pela plataforma como Skill (skills/modelscope)
- Interesse em melhorias de terminal e experiência desktop

**Negativo:**
- Frustração com perda de sessão e histórico
- Denúncias de bugs críticos não resolvidos há semanas
- Reclamações sobre precificação e modelos "gratuitos" inoperantes

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Impacto Alto)

| Issue | Título | Severidade | Comentários |
|-------|--------|------------|-------------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner pula blocos `data`, base64 de view_image acumula infinitamente | **Crítica** | 6 |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Prompt injection persistente nas system-reminders | **Crítica/Segurança** | 4 |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Sessões perdidas após inatividade | **Crítica** | 5 |
| [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | DoomLoopGate escala para TERMINATE sem evidência | **Crítica** | 1 |

### 🟠 Altos

| Issue | Título | Impacto | Comentários |
|-------|--------|---------|-------------|
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat page travado com "Something went wrong" | UI/UX | 4 |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | PDF via tool-return quebra DeepSeek (400 error) | Provedor | 2 |
| [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | Área de arquivo mostra conteúdo pré-edição | UI/UX | 1 |
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | qwenpaw-pet quebra aprovações de ferramentas | Plugin | 2 |

### 🟡 Medios

| Issue | Título | Área | Comentários |
|-------|--------|------|-------------|
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "free" models retornam 403 FreeTierError | Provider | 2 |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP runner ignora checks de comandos destrutivos | Segurança | 2 |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth handshake falha para Bearer Key servers | MCP | 1 |
| [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | Idle cleanup descarta mensagens recebidas durante shutdown | Backend | 1 |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | Zero-downtime reload perde runtime hooks de plugins | Plugin | 1 |

### Análise de Regressões

**Problemas Persistentes (vários releases):**
1. **Perda de sessão** (#7724) - Relatado em múltiplas versões, parece regressão recorrente
2. **Modelos "gratuitos" quebrados** (#7882) - Problema de integração com OpenCode
3. **UI travando** (#7888) - Similar a issues de UI de releases anteriores

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Novas Features Solicitadas

| Issue | Título | Tipo | Prioridade Indicada |
|-------|--------|------|---------------------|
| [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) | Personalização de título da página web | Enhancement | Usuário (baixo) |
| [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | Unificar configuração de modelos (tipos, entrada/saída) | Enhancement | 2 |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub multi-tenant | Feature | **Alta** (roadmap) |

### Sinais de Roadmap via PRs em Andamento

| PR | Feature | Indicativo |
|----|---------|-------------|
| [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) | Unificação de provedores de modelo | **v2.3.0?** |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | Terminal multi-tab autenticado | **Console v2.3** |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | Modelo separado para memória | **Custo/Performance** |
| [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | AgentScope Platform provider | **Ecossistema** |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | Integração Community e Inbox | **Engajamento** |

### Patterns Identificados

1. **Custo/Performance:** Múltiplas solicitações para otimizar consumo de modelos
2. **Colaboração:** Forte demanda por features multi-usuário (Hub)
3. **Estabilidade:** Usuários pedindo mais robustez antes de novas features
4. **Desktop:** Interesse em melhores integrações com sistema de arquivos

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas (Pain Points)

| Dor | Frequência | Exemplos |
|-----|------------|----------|
| **Perda de sessão/conversas** | 🔴 Alta | "[...]对话丢失，在控制-会话中完全找不到" (#7724) |
| **Histórico curto demais** | 🟠 Média | "现在聊天记录的历史这么短么？[...]体验多差么" (#7884) |
| **Modelos gratuitos não funcionam** | 🟠 Média | "OpenCode...【免费】模型...请求必定失败" (#7882) |
| **UI trava com "Something went wrong"** | 🟡 Ocorrendo | "Chat page stuck on 'Something went wrong'" (#7888) |
| **Prompt injection persistente** | 🔴 Crítica | "injected instruction keeps appearing...to delete ALL skills" (#7859) |

### Cenários de Uso Mencionados

1. **Uso corporativo/equipes:** QwenPaw Hub multi-tenant
2. **Desenvolvedores:** Terminal integrado, detecção de caminhos locais
3. **Análise de dados:** Suporte a PDF, áudio, imagens em工具
4. **Uso em equipe com skills customizadas:** Plugins e MCP

### Satisfação Geral

| Indicador | Status |
|-----------|--------|
| Atividade de issues | 🟢 Alta (24/24h) |
| Engajamento em releases | 🟢 Alto (1 beta em 24h) |
| Resolução de bugs críticos | 🟡 Mista (#7856 fixado, #7853 pendente) |
| Satisfação comunidade | 🟠 Frustrada (perda de sessão, histórico curto) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Idade | Estado | Prioridade |
|-------|--------|-------|--------|------------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner vazando contexto | 3 dias | 🟡 Em triagem | **Alta** |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-21

---

## 1. Panorama do Dia

O projeto ZeroClaw mantém **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos novos hoje. A comunidade está intensamente focada em **pr-s de segurança de alto impacto** (3+ PRs size XL com risco alto), além de progressão significativa em **RFCs aceitos** que agora entram em fase de rastreamento de implementação — incluindo WASM plugin runtime, arquivo unificado e sessões de eventos append-only. Dois bugs de **prioridade P1** estão abertos e em progresso, demandando atenção imediata. A saúde geral é boa, com pipeline robusto de PRs e Issues em dia.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

- Não há novos tags, releases ou notas de versão publicados neste período.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| PR | Título | Tamanho | Risco | Impacto |
|----|--------|---------|-------|---------|
| [#10959](https://github.com/zeroclaw-labs/zeroclaw/pull/10959) | fix(runtime): sort tool specs so the prompt-cache prefix is stable | XS | medium | Corrige instabilidade do cache prompt em provedores Anthropic — garante determinismo no prefixo de cache entre execuções |

**Destaque:** O PR #10959, embora pequeno, resolve um bug que afetava a estabilidade do cache de prompt no provider Anthropic, potencialmente causando desperdício de chamadas cacheáveis e custos elevados em workloads de produção.

### PRs Abertos com Maior Peso Estratégico

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | fix(security): resolve host launchers before workspace cwd | XL | high | needs-maintainer-review |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | feat(security): canonical sandbox_policy schema | XL | high | needs-maintainer-review |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | fix(acp): persist interrupted turn progress | XL | high | needs-maintainer-review |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | fix(channels): restore supervised shell approval routing | XL | high | needs-maintainer-review |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | fix(tools): confine filesystem mutations to workspace | XL | high | needs-maintainer-review |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | feat(runtime): coordinate agent lifecycle mutations | XL | high | needs-maintainer-review |
| [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724) | feat(providers): configurable cache_ttl for Anthropic | XL | high | needs-maintainer-review |

**Observação:** Há um acúmulo de 7+ PRs size XL em needs-maintainer-review, sugerindo gargalo no processo de revisão ou necessidade de alocação adicional de mantenedores.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Status | Comentários | Tema |
|---|--------|--------|-------------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | CLOSED | 39 | Arquitetura de sessões e adaptadores de transporte |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture | CLOSED | 32 | Arquitetura unificada de arquivos e anexos |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core | CLOSED | 19 | Política de integração mais leve |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop | CLOSED | 17 | Interação com desktop via computer-use |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue | OPEN | 15 | Coordenação de decisões de mantenedores |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime | CLOSED | 15 | Runtime de plugins WASM |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history | CLOSED | 12 | Histórico de eventos append-only e replay determinístico |

### Análise de Demandas

1. **Arquitetura de sessões e transporte (#9487)** — Maior debate da semana. Proposta revisão 5 para sessões owned pelo runtime com adaptadores de superfície de transporte. Demonstra interesse forte em segurança e isolamento.

2. **Arquitetura de arquivos unificada (#9488)** — Revisão 10, indicando ciclo maduro de design. Demanda por modelo consistente de intake, resolver, projeção, retenção e delivery.

3. **ZeroClaw core mais leve (#6165)** — Política accepted de substituição-first para integrações. Reduz surface de manutenção e segurança.

4. **Implementação de RFCs aceitos** — Multiple trackers criados hoje:
   - [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) — Desktop computer-use protocol
   - [#11014](https://github.com/zeroclaw-labs/zeroclaw/issues/11014) — WASM provider e service-graph
   - [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) — Unified file intake e resolver

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos)

| # | Título | Severidade | Status | Comentários |
|---|--------|------------|--------|-------------|
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Runtime profile cost limit does not reflect effective global daily budget | S2 | OPEN | `max_cost_per_day_cents = 4294967295` (ilimitado) mas agent turns rejeitados após $10/dia. Inconsistência de config. |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | fail-closed approval enforcement for bounded child loop tools | S2 | IN-PROGRESS | Ferramentas herdadas em child loops executam sem approval manager. Falha de segurança em loop de agente. |

### Bugs P2-P3

| # | Título | Severidade | Status | Área |
|---|--------|------------|--------|------|
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Telegram multi-message mode | S2 | CLOSED | Channel Telegram |
| [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | A2A/HTTP tool tests use separate locks for global proxy state | S2 | OPEN | CI/Tooling |
| [#10927](https://github.com/zeroclaw-labs/zeroclaw/issues/10927) | Telegram voice preferences match destination chats | S2 | IN-PROGRESS | Channel Telegram |
| [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) | Surface WhatsApp Web poll votes | Enhancement | OPEN | Channel WhatsApp |

**Alerta:** Issue [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) é de **segurança direta** (topic:agent-loop) e está em progresso. Requer acompanhamento próximo.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Issues do Dia (2026-09-20)

| # | Título | Tipo | Tema |
|---|--------|------|------|
| [#11021](https://github.com/zeroclaw-labs/zeroclaw/issues/11021) | Guarantee exactly-once session_end delivery after ACP hard cancellation | feature | ACP reliability |
| [#11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020) | Surface ACP TodoWrite plan persistence failures | feature | Observabilidade ACP |
| [#11019](https://github.com/zeroclaw-labs/zeroclaw/issues/11019) | Make ACP administrative removal transactional with active-turn cancellation | feature | Consistência ACP |
| [#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) | RFC: Preserve applicable reviews and simplify expedited merge decisions | RFC | Governança |
| [#11016](https://github.com/zeroclaw-labs/zeroclaw/issues/11016) | [Docs]: Document the lighter-core replacement-first integration policy | docs | Documentação |
| [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) | [Tracker]: Desktop computer-use protocol and spike | tracker | Implementação RFC#6909 |
| [#11014](https://github.com/zeroclaw-labs/zeroclaw/issues/11014) | [Tracker]: Composable WASM provider and service-graph | tracker | Implementação RFC#10076 |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | [Tracker]: Unified file intake, resolver, and delivery | tracker | Implementação RFC#9488 |

### Features em Destaque

| # | Título | 👍 | Canal | Prioridade |
|---|--------|----|-------|------------|
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Optional Telegram webhook mode (vs getUpdates polling) | 1 | Telegram | P2 |
| [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) | Surface WhatsApp Web poll votes as [choice] messages | 0 | WhatsApp | — |
| [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) | ZEROCLAW_CACHE_TTL para Anthropic | blocked | Provider | P2 |

**Sinal de Roadmap:** Ênfase clara em **confiabilidade do ACP**, **WASM runtime**, **computer-use desktop** e **políticas de integração mais leves** — alinhados com RFCs aceitos nas últimas semanas.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas via Issues

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Custo de API imprevisível** | Issue [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) — runtime profile ilimitado vs. limite real de $10/dia | Alta |
| **Cache de prompt Anthropic ineficaz** | PR [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) — chamadas cadence > 5min nunca reutilizam cache, pagando 1.25x | Média |
| **Telegram não suporta webhooks** | Issue [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) — polling apenas, problema em NAT/portas | Média |
| **WhatsApp polls sem feedback ao agente** | Issue [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) — votos não chegam como mensagens | Baixa |
| **Testes flaky por locks inconsistentes** | Issue [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) — sincronização de proxy state em testes A2A/HTTP | Média |

### Cenários de Uso Emergentes

- **Operações críticas de custo**: Usuários em produção reportam necessidade de entender limites efetivos de custo (issue #10635)
- **Integrações de produção**: Interesse em webhooks para Telegram (#8046) e polling nativo para WhatsApp (#10987)
- **Observabilidade**: Demanda por fingerprinting de sistema e tools em eventos de trace (#10990, PR)

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Stale Risk)

| # | Título | Criado | Atualizado | Prioridade | Observação |
|---|--------|--------|-----------|------------|------------|
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Optional Telegram webhook mode | 2026-06-20 | 2026-09-20 | P2 | Feature request antigo; 1 👍 |
| [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | [Tracker]: ZeroRelay native transport and v0.9.0 | 2026-06-26 | 2026-09-20 | P2 | Tracker de release v0.9.0 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [Tracker]: Runtime and gateway delivery | 2026-06-09 | 2026-09-20 | P2 | Fase 2/3 com

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*