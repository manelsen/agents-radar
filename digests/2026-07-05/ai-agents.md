# Resumo diário do ecossistema de agentes de IA 2026-07-05

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-04 20:50 UTC

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

**Data de Referência:** 2026-07-05
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra maturidade heterogênea em 2026. **Hermes Agent, IronClaw e ZeroClaw** lideram em volume de atividade com 50+ PRs/issues por dia, sinalizando ciclos de desenvolvimento acelerados. **NanoBot** e **CoPaw** apresentam saúde operacional estável com foco em estabilidade e usabilidade, enquanto **PicoClaw** concentra-se em consolidação de segurança criptográfica. **NullClaw** permanece inativo. A convergência técnica é evidente: MCP (Model Context Protocol), resiliência de loops de ferramentas, e separação de contexto de memória emergem como problemas universais que todos os projetos enfrentam em diferentes estágios de maturidade.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Saúde | Tendência |
|---------|-------------|-----------|----------------|-------|-----------|
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativo | → Estagnado |
| **NanoBot** | 3 | 11 | 0 | 🟢 Boa | ↗️ Estabilização |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Ativa | → Alta variância |
| **PicoClaw** | 4 | 7 | 0 | 🟡 Moderada | → Consolidação |
| **IronClaw** | 24 | 50 | 1 (via PR) | 🟡 Alta | ↗️ Migração ativa |
| **CoPaw** | 10 | 5 | 0 | 🟡 Cuidada | → Beta v2.0 |
| **ZeroClaw** | 50 | 50 | 0 | 🟢 Alta | ↗️ Feature momentum |

**Métricas consolidadas:**
- **Volume total de atividade:** 141 issues + 173 PRs (excluindo NullClaw)
- **Releases formais:** 1 (IronClaw via PR #5598)
- **Médias de saúde:** 3 projetos 🟢/🟡, 1 inativo, 0 em crise

---

## 3. Posicionamento do Projeto Principal

### Hermès Agent (NousResearch) — Volume Líder

**Vantagens técnicas:**
- Model picker otimizado (latência reduzida em ~41x via PR #39116)
- Suporte multi-provider mais maduro (OpenRouter, Nous, OpenAI, Copilot, Qwen)
- Cache per-provider para `fetch_api_models` e model discovery

**Tamanho da comunidade:**
- 50 PRs/50 issues por dia — maior volume absoluto
- 8+ comentários em issues de barreira de entrada

**Diferenças técnicas:**
- Requisito de 64k tokens mínimo — exclusivo no ecossistema
- Governança rigorosa: reversão de emergência do PR #30179 demonstra processo de merge maduro
- Foco em Windows: 4+ issues específicas, lazy_deps para Matrix

---

## 4. Focos Técnicos Compartilhados

### 4.1 Resiliência MCP (Model Context Protocol)
**Afeta:** NanoBot, ZeroClaw, Hermes Agent

| Projeto | Problema | Status |
|---------|----------|--------|
| NanoBot | Reconnect crashes no gateway | 🔴 Issue #4302 (24 dias) |
| ZeroClaw | Ferramentas MCP invisíveis na TUI | ✅ PR #8193 merged |
| Hermes Agent | Sandbox escape via vision tool | ✅ PR #57890 aberto |

**Análise:** MCP emerge como ponto de dor universal. A fragmentação de integrações externas indica ausência de especificação formalizada entre projetos.

### 4.2 Concurrency e Race Conditions
**Afeta:** NanoBot, Hermes Agent, ZeroClaw

| Projeto | Bug | Severidade |
|---------|-----|------------|
| NanoBot | Token refresh race condition (#4684) | P2 ✅ Corrigido |
| Hermes Agent | Model options bloqueia em HTTP síncrono | P2 🔴 Aberto |
| ZeroClaw | `advance_step` sem guard de run-status | S2 🔴 Aberto |

### 4.3 Gerenciamento de Memória e Contexto
**Afeta:** CoPaw, PicoClaw, ZeroClaw

- **CoPaw:** Scroll compression perde contexto (#5778), auto-memory não persiste (#5775)
- **PicoClaw:** Sistema "esquece" conversas (#3150 — closed stale)
- **ZeroClaw:** Context compression dropa `tool_calls` para MiniMax (#6361 — corrigido)

### 4.4 Segurança Criptográfica
**Afeta:** PicoClaw, IronClaw, ZeroClaw

| Projeto | Vulnerabilidade | Ação |
|---------|-----------------|------|
| PicoClaw | libolm descontinuado/seguro | 🟠 Issue #3088 — vodozemac migration |
| IronClaw | Reborn identity surface (5 bugs alta severidade) | 🔴 Bloqueantes para cutover |
| ZeroClaw | RUSTSEC em rumqttc v0.25.1 | 🔴 Issue #5869 — blocked |

---

## 5. Análise de Diferenciação

| Projeto | Foco Primário | Público-Alvo | Arquitetura |
|---------|--------------|--------------|-------------|
| **Hermes Agent** | Flexibilidade de modelos, multi-provider | Desenvolvedores avançados | Desktop-centric, model picker |
| **IronClaw** | Migração Slack→OAuth, CI/CD robusto | Empresas com Slack | Rust crates, multi-serviço |
| **NanoBot** | Estabilidade, canais de mensageria | Usuários multi-canal | Gateway com DingTalk/Slack |
| **ZeroClaw** | Goal Mode, WASM plugins, SOPs | DevOps/automação | Modular com Tauri desktop |
| **CoPaw** | Memória persistente, busca híbrida | Sessões longas | Qwen-based, reranker |
| **PicoClaw** | Criptografia Matrix, multi-agente | Privacidade-first | Go, Matrix homeserver |

### Diferenciação Técnica Conspicua

**Hermes Agent** diferencia-se pelo requisito de 64k tokens, posicionando-se para uso com modelos de contexto longo. **IronClaw** investe embreaking changes explícitos (0.24.0→0.29.1 com changelog) como estratégia de maturidade. **ZeroClaw** lidera em programmabilidade via SOPs visuais e Goal Mode. **PicoClaw** é o único com foco explícito em criptografia Matrix de ponta. **CoPaw** unique-se com reranker configurável para busca de memória.

---

## 6. Tração e Maturidade da Comunidade

### Iteration Velocity

| Tier | Projetos | Issues/PRs por dia | Estágio |
|------|----------|-------------------|---------|
| 🥇 **Velocity** | Hermes Agent, IronClaw, ZeroClaw | 50+ | Feature-driven |
| 🥈 **Stabilizing** | NanoBot, CoPaw | 8-15 | Bug-fixing |
| 🥉 **Consolidating** | PicoClaw | 5-7 | Security-hardening |
| ⚫ **Stalled** | NullClaw | 0 | Indefinido |

### Community Responsiveness

| Projeto | Issues Stale (>7d) | Taxa de Resposta | Alerta |
|---------|-------------------|------------------|--------|
| NanoBot | 1 (#4302 — 24 dias) | 🟢 Alta | Moderado |
| Hermes Agent | 0 visível | 🟢 Alta | Baixo |
| PicoClaw | 3 (#3088, #3182, #3194) | 🟡 Baixa | ⚠️ **Alto** |
| CoPaw | 2 (#2865 — 93 dias, #2830) | 🟡 Moderada | ⚠️ Moderado |
| IronClaw | 4 (#4108, #3067, #3141, #3127) | 🟢 Alta | Moderado |
| ZeroClaw | 3 (#5869, #4832, #7497) | 🟡 Moderada | ⚠️ Segurança |

### Observações Críticas

- **PicoClaw** apresenta o maior risco de comunidade: 3 issues sem resposta com impacto direto (segurança + estabilidade Android)
- **IronClaw** demonstra disciplina de engenharia: suíte de integração reestruturada, bucketed tests, tripwire de paridade
- **Hermes Agent** governa alterações de segurança com rigor (reversão de emergência)

---

## 7. Sinais de Tendência

### 7.1 Arquiteturais

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Multi-agente com isolamento MCP** | NanoBot #4697 (P1), PicoClaw #3225, IronClaw reborn | 3 |
| **Goal Mode / Workflows declarativos** | ZeroClaw #8685-#8689 (avançado), IronClaw SOPs | 2 |
| **Desktop installers self-contained** | ZeroClaw Tauri sidecar, IronClaw profile export | 2 |
| **OAuth > API Keys** | IronClaw Slack migration (4-stack PRs) | 1 |

### 7.2 Funcionalidades Emergentes

| Feature | Demanda | Projetos em Desenvolvimento |
|---------|---------|---------------------------|
| Reranker configurável para memória | 🟢 Alta | CoPaw (merged) |
| Fallback de modelo LLM | 🟢 Alta | CoPaw (#5597/#5598) |
| Streaming responsivo Markdown | 🟢 Alta | NanoBot (#4696) |
| Canal Gitea/Forgejo | 🟡 Média | ZeroClaw (#8611) |
| Canal Mattermost | 🟡 Média | NanoBot (#4459) |

### 7.3 Padrões de Dor que Indicam Mercado

1. **"Offline com modelos pequenos"** (Hermes #22930 — 8 comments): Usuários querem barreira de entrada menor. O mercado busca Laptop AI.

2. **"Configuração confusa de providers"** (Hermes #26386, #33195): UX de onboarding é barreira. Oportunidade para zero-config.

3. **"Proteção de workspace"** (ZeroClaw #8424): Demanda por sandboxing granular de arquivos. Preocupação de segurança empresarial.

4. **"libolm inseguro"** (PicoClaw #3088): Criptografia legada precisa de atualização no ecossistema Matrix. Pressão regulatória potencial.

### 7.4 Roadmap Indicators

| Indicador | Projeto | Inferência |
|-----------|---------|------------|
| v2.0 beta 3 | CoPaw | Lançamento iminente — consolidação de estabilidade |
| Stack Slack→OAuth (4 PRs) | IronClaw | Migração completa em ~2-4 semanas |
| Goal Mode PRs empilhados | ZeroClaw | Feature flagship para 0.8.3 |
| libolm→vodozemac P1 | PicoClaw | Atualização criptográfica prioritária |
| MCP reconnection fix | NanoBot | Pré-release preparação |

---

## Recomendações Estratégicas

| Audiência | Recomendação |
|----------|-------------|
| **Desenvolvedores** | Monitorem IronClaw para padrões de migração OAuth; ZeroClaw para Goal Mode architecture |
| **Decisores técnicos** | Hermes Agent oferece melhor DX para multi-provider; PicoClaw para ambientes que requerem criptografia Matrix |
| **Operações** | Evitarem NanoBot em produção até #4302 resolvido; ZeroClaw requer atenção à RUSTSEC #5869 |
| **Comunidade** | PicoClaw precisa de triagem urgente em 3 issues stale; CoPaw em ritmo de release v2.0 |

---

*Relatório gerado em 2026-07-05. Fontes: GitHub activity data de NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-05

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** em 05 de julho de 2026, com 11 PRs atualizados nas últimas 24h (4 abertos, 7 merged/fechados) e 3 issues manipuladas. A equipe focou fortemente em **estabilidade e resiliência**, com 5 bugs críticos corrigidos — incluindo race conditions em token refresh, falhas em ferramentas MCP e problemas de escrita atômica. Simultaneamente, avanços em experiência do usuário foram mergeados, como streaming Markdown suavizado e correções de UI responsiva. O volume de PRs indica um ciclo de desenvolvimento saudável, sem sinais de estagnação.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.** O projeto não publicou novas versões. O último período foi dedicado exclusivamente a correções internas e features em desenvolvimento, sugerindo preparação para uma próxima versão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (7)

| # | Título | Impacto |
|---|--------|---------|
| [#4695](https://github.com/HKUDS/nanobot/pull/4695) | Merge/upstream 2026-06-26 | Sincronização com código upstream |
| [#4690](https://github.com/HKUDS/nanobot/pull/4690) | fix(gateway): handle Windows stop fallback | **Estabilidade** — tratamento graceful de `CTRL_BREAK_EVENT` no Windows, evitando crashes |
| [#4646](https://github.com/HKUDS/nanobot/pull/4646) | fix(dingtalk): stop stream task on shutdown | **Estabilidade** — encerramento correto de WebSocket no canal DingTalk |
| [#4653](https://github.com/HKUDS/nanobot/pull/4653) | fix(pairing): restore durable atomic writes | **Integridade de dados** — writes atômicos com fsync para prevenir corrupção em crashes |
| [#4684](https://github.com/HKUDS/nanobot/pull/4684) | fix(copilot): guard token refresh with asyncio.Lock | **Concurrency** — eliminada race condition no refresh de tokens Copilot |
| [#4666](https://github.com/HKUDS/nanobot/pull/4666) | fix(mcp): contain malformed tool results | **Resiliência** — isolamento de exceções em renderização de resultados MCP |
| [#4692](https://github.com/HKUDS/nanobot/pull/4692) | fix(config): serialize model presets as camelCase | **DX** — padronização de serialização com `modelPresets` |

**Destaque:** O PR [#4653](https://github.com/HKUDS/nanobot/pull/4653) corrige uma regressão crítica em escrita de arquivos, potencialmente afetando persistência de dados. O PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) resolve race condition de severidade P2 que poderia causar falhas intermitentes.

---

## 4. Temas Quentes da Comunidade

### Issues com Discussão Ativa

| # | Título | Status | Comentários | Reações |
|---|--------|--------|-------------|---------|
| [#4652](https://github.com/HKUDS/nanobot/issues/4652) | Nanobot crashes when MCP tool call exception | ✅ CLOSED | 3 | 0 |
| [#4302](https://github.com/HKUDS/nanobot/issues/4302) | nanobot gateway crashes after mcp reconnect | 🔴 OPEN | 2 | 0 |
| [#4677](https://github.com/HKUDS/nanobot/issues/4677) | token refresh race condition under concurrent requests | ✅ CLOSED | 1 | 0 |

### Análise

- **MCP (Model Context Protocol)** domina as discussões de bugs, com 2 issues relacionadas (#4652, #4302). Isso indica que a integração com servidores MCP externos precisa de robustez adicional.
- **Concurrent requests** e race conditions emergiram como tema recorrente, manifested em issues de Copilot e no PR mergeado #4684.
- A issue #4302 permanece **aberta desde 11/06**, sinalizando necessidade de atenção para crashes de gateway em reconexões MCP.

---

## 5. Bugs e Estabilidade

### Correções de Bugs Today (5 PRs + 1 Issue Closed)

| Severidade | Count | Exemplos |
|------------|-------|----------|
| **P1 (Crítica)** | 2 | MCP malformed results (#4666), Atomic writes regression (#4653) |
| **P2 (Alta)** | 4 | Token race condition (#4684), Windows fallback (#4690), DingTalk shutdown (#4646), Config serialization (#4692) |

### Issues Abertas

- [#4302](https://github.com/HKUDS/nanobot/issues/4302) — **Gateway crash após reconnect MCP** (aberta há ~24 dias). Requer priorização urgente.

### Tendência

**Saúde: Positiva.** Todas as 5 correções P1/P2 do dia foram mergeadas com sucesso. A abordagem proativa em race conditions e escrita atômica demonstra foco em confiabilidade para produção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Features

| # | Título | Prioridade | Potencial Impacto |
|---|--------|------------|------------------|
| [#4697](https://github.com/HKUDS/nanobot/pull/4697) | Configurable MCP inheritance for specialist subagents | **P1** | **Alto** — Permite que subagentes herdem MCP servers, habilitando cenários como DB access e search nativo |
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | Add Mattermost channel support | Enhancement | **Médio** — Expande alcance para workplaces que usam Mattermost |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | Smooth WebUI streaming Markdown reveal | N/A | **UX** — Experiência de leitura aprimorada com animação progressiva |
| [#4694](https://github.com/HKUDS/nanobot/pull/4694) | Keep chat viewport inside narrow viewports | P2 | **UX Mobile** — Corrige layout breaking em navegadores estreitos |

### Sinais de Roadmap

- **Arquitetura de Subagentes:** A feature #4697 (P1) sugere evolução para sistemas multi-agente com isolamento de MCP.
- **Canais de Mensageria:** Expansão contínua (DingTalk mergeado, Mattermost em desenvolvimento).
- **Resiliência MCP:** Foco intenso em robustez de tool calls indica que integrações externas são priorizadas.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Dor Identificados

1. **Crashes em Operações de I/O Assíncronas**
   - Tags: MCP tool calls, reconnect, token refresh
   - Cenário: Ambientes de produção com múltiplas requisições concorrentes encontram falhas não-tratadas.

2. **Problemas de UI/UX Mobile**
   - Tags: Viewport clipping, composer shifting
   - Cenário: Usuários em dispositivos móveis não conseguem interagir adequadamente com a interface.

3. **Complexidade de Configuração**
   - Tags: `modelPresets` camelCase
   - Cenário: Usuários enfrentam inconsistência entre documentação e configuração real.

### Cenários de Uso Emergentes

- **Subagentes especialistas** com acesso granular a ferramentas MCP
- **Integração com Mattermost** como alternativa a Slack/Discord
- **Streaming responsivo** para melhor experiência de leitura em tempo real

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo

| # | Título | Criado | Dias Aberta | Prioridade Sugerida |
|---|--------|--------|-------------|---------------------|
| [#4302](https://github.com/HKUDS/nanobot/issues/4302) | Gateway crashes after mcp reconnect | 2026-06-11 | **24 dias** | 🔴 **P1** |

### Análise

A issue #4302 representa o item mais crítico do backlog. Permanece aberta há quase um mês com apenas 2 comentários, sugerindo:
-复 Importância: Crash de gateway afeta disponibilidade do sistema
-复 Complexidade: Requer reprodutibilidade em ambiente de gateway
-复 Ação recomendada: Priorizar investigação ou pedir mais dados ao autor

### Riscos Identificados

- **MCP Reconnection Handling**: Padrão de crashes recorrentes indica necessidade de estratégia de retry/backoff robusta.
- **Token Refresh Concurrency**: Mesmo após correção #4684, o padrão de race conditions pode reaparecer em outros providers.

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| PRs atualizados | 11 |
| PRs mergeados/fechados | 7 |
| PRs abertos | 4 |
| Issues atualizadas | 3 |
| Issues abertas | 1 |
| Bugs P1 corrigidos | 2 |
| Bugs P2 corrigidos | 4 |
| Novas releases | 0 |
| Backlog crítico | 1 issue (24 dias) |

**Veredicto Geral:** O projeto está em **estado saudável**, com alta atividade de desenvolvimento e foco em estabilidade. Recomenda-se atenção imediata à issue #4302 e revisão da feature #4697 para inclusão em próximo milestone.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-05.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-05

---

## 1. Panorama do Dia

O projeto Hermes Agent apresenta alta atividade de desenvolvimento em 05/07/2026, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. O dia foi marcado por uma **reversão de emergência** do PR #30179 (iron-proxy egress) por falta de aprovação explícita, sinalizando um processo de merge mais rigoroso para features de segurança. Não houve lançamentos de novas versões. A comunidade demonstra preocupação significativa com questões de estabilidade em Windows, performance de providers, e features solicitadas para configuração dinâmica de modelos.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto não publicou novas versões. É recomendável monitorar o repositório para próximos tags, considerando a quantidade de PRs de segurança pendentes.

---

## 3. Progresso do Projeto

### PRs closed/merged recentes

| PR | Título | Impacto |
|---|---|---|
| [#58489](https://github.com/NousResearch/hermes-agent/pull/58489) | Revert "feat(egress): iron-proxy credential-injection firewall" | **Reversão de emergência** — iron-proxy foi removido do main sem aprovação explícita. Reverterá integrações de segurança em sandboxes. |
| [#58174](https://github.com/NousResearch/hermes-agent/pull/58174) | fix(update): skip unsupported Matrix lazy refresh on native Windows | Resolve falha de pip no `hermes update` para usuários Windows com Matrix. |
| [#44598](https://github.com/NousResearch/hermes-agent/pull/44598) | fix(gateway): cache fetch_api_models per-provider | Mitiga timeout no WebSocket do `model.options` causado por requisições síncronas lentas a providers. |
| [#44577](https://github.com/NousResearch/hermes-agent/pull/44577) | fix(model-switch): cache custom provider model discovery | Reduz latência de switch de modelos em providers custom. |
| [#49713](https://github.com/NousResearch/hermes-agent/pull/49713) | fix(desktop): avoid probing custom providers on model picker open | Elimina sincronização bloqueante ao abrir o model picker no desktop. |

### PRs abertos com destaque

| PR | Título | Prioridade | Status |
|---|---|---|---|
| [#57890](https://github.com/NousResearch/hermes-agent/pull/57890) | fix(vision): unified image-source resolver + terminal-backend confinement | **P1 / Security** | Aberto — Consolida fix para sandbox-escape (GHSA-gpxw-6wxv-w3qq) e falha de entrega de imagens |
| [#58486](https://github.com/NousResearch/hermes-agent/pull/58486) | fix(gateway): preserve lazy reset after session expiry | P2 | Aberto — Previne conversas vivas de serem marcadas como `agent_close` após expiração |
| [#58472](https://github.com/NousResearch/hermes-agent/pull/58472) | fix(gateway): cap proxy SSE line buffer | P2 | Aberto — Limita buffer residual a 16 MiB para evitar ataques de consumido de memória |
| [#58487](https://github.com/NousResearch/hermes-agent/pull/58487) | fix: bump vulnerable security audit dependencies | P3 | Aberto — Atualiza `cryptography`, `python-multipart`, `starlette` para corrigir OSV findings |
| [#34201](https://github.com/NousResearch/hermes-agent/pull/34201) | perf(cli): open /model picker without live-discovery stalls | P3 | Aberto — Otimiza abertura do picker usando listas estáticas ao invés de live discovery |

**Avanços relevantes:**
- Maior foco em **performance do model picker**: múltiplos PRs atacam a latência de 6-7 segundos ao abrir `/model` (redzida em ~41x no PR #39116)
- **Suporte Windows melhorado**: lazy_deps para Matrix agora pula refresh não suportado
- **Segurança em destaque**: revert de #30179 demonstra governança ativa; PRs de egress e dependências vulneráveis em andamento

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Tema | Comentários | 👍 | Análise da Demanda |
|---|---|---|---|---|
| [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) | Rodar Hermes offline com modelos pequenos (2B-14B) | 8 | 0 | **Demanda crescente** — Usuários com hardware limitado querem execução offline sem 64k tokens mínimo. A barreira de entrada é alta. |
| [#13663](https://github.com/NousResearch/hermes-agent/issues/13663) | Smart reasoning_effort routing por complexidade de tarefa | 3 | **4** | **Feature request popular** — Usuários querem que o agente ajuste automaticamente profundidade de raciocínio (medium vs high) conforme a tarefa. |
| [#49031](https://github.com/NousResearch/hermes-agent/issues/49031) | Configurable retry backoff para erros 429 | 1 | **3** | **Dor real** — Backoff hardcoded de ~5s base/120s cap é subótimo para providers como Alibaba Coding Plan Pro. |

### Temas recorrentes detectados

1. **Barreira de 64k tokens é restritiva** ([#22930](https://github.com/NousResearch/hermes-agent/issues/22930), [#32048](https://github.com/NousResearch/hermes-agent/issues/32048)): Requisito mínimo de contexto window exclui modelos populares e situações offline.

2. **Configuração de providers é confusa** ([#26386](https://github.com/NousResearch/hermes-agent/issues/26386), [#33195](https://github.com/NousResearch/hermes-agent/issues/33195)): Picker exibe providers auto-descobertos sem credenciais configuradas, poluindo a UX.

3. **Performance de providers custom é problemática** ([#34201](https://github.com/NousResearch/hermes-agent/pull/34201), [#39116](https://github.com/NousResearch/hermes-agent/pull/39116)): Serial probing de providers adiciona 4-7 segundos de latência.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 (Críticos) — 1 item
| Issue | Título | Descrição | Link |
|---|---|---|---|
| — | Sandbox escape via vision tool | Consertado no PR #57890 — vision lia bytes host-side ao invés do terminal backend | [#57890](https://github.com/NousResearch/hermes-agent/pull/57890) |

#### P2 (Altos) — 15+ issues abertas
| Issue | Título | Área | Link |
|---|---|---|---|
| #44560 | `model.options` bloqueia em chamadas HTTP síncronas por provider | Gateway | [#44560](https://github.com/NousResearch/hermes-agent/issues/44560) |
| #44799 | Codex OAuth refresh expira durante cooldown window | Auth | [#44799](https://github.com/NousResearch/hermes-agent/issues/44799) |
| #58437 | MoA `_collect_stream` dropa `tool_calls` em quiet mode → crash | Agent | [#58437](https://github.com/NousResearch/hermes-agent/issues/58437) |
| #58452 | Hygiene compression nunca persiste — transcript cresce sem limite | Gateway | [#58452](https://github.com/NousResearch/hermes-agent/issues/58452) |
| #58394 | `profile export default` crasha com symlinks quebrados em Docker | CLI | [#58394](https://github.com/NousResearch/hermes-agent/issues/58394) |
| #54174 | Profile install em Docker não registra slot s6 gateway | Docker | [#54174](https://github.com/NousResearch/hermes-agent/issues/54174) |
| #58009 | Tool output >~1KB substituído por `<<ccr:...>>` (fechado) | Agent | [#58009](https://github.com/NousResearch/hermes-agent/issues/58009) |
| #16201 | Múltiplos problemas no Hermes em Windows nativo | Windows | [#16201](https://github.com/NousResearch/hermes-agent/issues/16201) |

#### P3 (Médios) — Issues abertas
| Issue | Título | Área | Link |
|---|---|---|---|
| #58458 | Matrix lazy_deps: pip install falha em Windows (aiohttp pin) | Windows/Matrix | [#58458](https://github.com/NousResearch/hermes-agent/issues/58458) |
| #38683 | Sessões Telegram não aparecem na lista desktop até restart | Gateway/Telegram | [#38683](https://github.com/NousResearch/hermes-agent/issues/38683) |
| #57928 | File attachment em Telegram com `/steer`/`/goal` é ignorado | Gateway/Telegram | [#57928](https://github.com/NousResearch/hermes-agent/issues/57928) |
| #56004 | Qwen3.6 `preserve_thinking` é stripado em replay | Provider/Qwen | [#56004](https://github.com/NousResearch/hermes-agent/issues/56004) |

### Padrões de Bugs

1. **Windows**: Problemas recorrentes com Matrix, symlinks, e dependências lazy (4+ issues)
2. **Providers custom**: Latência e timeouts em model.options e model switch
3. **Gateway sessions**: Higiene de expiração, lazy reset, e refresh de lista
4. **Docker**: Configuração de profile e gateway em containers

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em demanda

| Issue | Feature | 👍 | Potencial Impacto | Link |
|---|---|---|---|---|
| #13663 | Smart `reasoning_effort` routing por complexidade | 4 | Reduz custos e latência em tarefas simples | [#13663](https://github.com/NousResearch/hermes-agent/issues/13663) |
| #49031 | Retry backoff configurável para rate limits | 3 | Melhor compatibilidade com providers restritivos | [#49031](https://github.com/NousResearch/hermes-agent/issues/49031) |
| #28547 | Warn antes de `/new` com subagents/tasks rodando | 0 | Previne perda de contexto | [#28547](https://github.com/NousResearch/hermes-agent/issues/28547) |
| #38469 | Ordenar sessões desktop por última interação | 0 | UX improved | [#38469](https://github.com/NousResearch/hermes-agent/issues/38469) |
| #58454 | `model_switch` tool desbloqueado para executores sequenciais | 0 | Permite switch dinâmico de modelo | [#58454](https://github.com/NousResearch/hermes-agent/issues/58454) |
| #58370 | Implementar Fable copilot para planejamento/crítica | 0 | Path de dual-model para decisões críticas | [#58370](https://github.com/NousResearch/hermes-agent/issues/58370) |

### Sinais de roadmap

- **Flexibilidade de modelos pequenos**: Múltiplas issues pedem redução do limite de 64k tokens para permitir modelos 2B-14B offline
- **Dual-model architecture**: Feature Fable copilot sugere interesse em usar modelos de planejamento separado do executor
- **Configuração dinâmica**: Providers, reasoning effort, e retry backoff pedem mais controle por ambiente

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Impacto |
|---|---|---|
| **Barreira de entrada alta** | 64k tokens mínimo exclui modelos populares; 8 comments na issue #22930 | Usuários com hardware limitado não conseguem usar |
| **Windows é cidadã de segunda** | 4+ bugs específicos de Windows; Matrix, symlinks, lazy_deps | Usuários Windows têm experiência fragmentada |
| **Model picker é lento** | 6-7 segundos de latência com providers custom; 3 PRs de perf dedicados | Fricção diária no uso do CLI |
| **Providers auto-descobertos poluem UI** | GitHub Copilot aparece sem configuração; providers sem credenciais listados | Confusão e má experiência de onboarding |
| **Docker profiles incompletos** | gateway slot não registrado; HERMES_HOME fora de ~/.hermes quebra | Impossibilita deploy containerizado robusto |

### Cenários de uso em evidência

- **Desenvolvimento local offline** com modelos pequenos (2B-14B)
- **Multi-provider switching** (OpenRouter, Nous, OpenAI, Copilot, Qwen)
- **Gateway Telegram** como canal primário de interação
- **Kanban workers e subagents** em quiet mode para automação

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem update)

| Issue | Idade | Prioridade | Tema | Link |
|---|---|---|---|---|
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-05

---

## 1. Panorama do Dia

O projeto PicoClaw manteve alta atividade em 04 de julho de 2026, com **4 issues e 7 pull requests atualizados** nas últimas 24 horas. Duas PRs foram closed/merged, indicando progresso concreto em correções de bugs e manutenção. A comunidade demonstra engajamento contínuo em topics de segurança (criptografia Matrix/libolm) e usabilidade (Android, i18n). Nenhum release foi publicado, sugerindo que a equipe pode estar em ciclo de preparação para uma futura versão. O volume de PRs abertas (5) supera significativamente as fechadas, sinalizando pipeline saudável de contribuições externas.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não publicou novas versões desde o último período reportado. A ausência de releases pode indicar que correções e features acumuladas estão em fase de consolidação para um próximo tag. Recomenda-se monitorar o repositório para announcements imminent.

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#3224](https://github.com/sipeed/picoclaw/pull/3224) | fix(agent): clear routed agent session | Ethan1918 | **Crítico** — Corrigido comportamento do comando `/clear` que limpava sessão do agente padrão ao invés do agente ativo quando há múltiplos agentes configurados |
| [#3221](https://github.com/sipeed/picoclaw/pull/3221) | Revert "test: cover sandbox fs Windows path handling" | afjcjsbx | **Correção de regressão** — Revertido PR #3158 devido a erro no log import em `pkg/providers/openai_compat/provider.go` |

**Avanços principais:**
- O PR #3224 resolve um bug significativo de UX em cenários multi-agente, onde o comando `/clear` não respeitava o roteamento correto de sessões.
- O revert #3221 demonstra disciplina de qualidade ao não aceitar testes com falhas de compilação no main branch.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Tipo | Título | Comentários | 👍 | Tendência |
|---|------|--------|-------------|----|-----------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Issue | [Feature] use vodozemac instead of libolm | 4 | 2 | 🔥 Alta priorização (priority: high, stale) |
| [#3150](https://github.com/sipeed/picoclaw/issues/3150) | Issue | [BUG]它给自己整失忆了 (perda de memória) | 4 | 0 | Closed (stale) |
| [#3225](https://github.com/sipeed/picoclaw/pull/3225) | PR | Support agent-specific runtime overrides | N/D | 0 | Aberta — feature em review |

### Análise das Demandas

**Segurança: Migração libolm → vodozemac (#3088)**
A comunidade reconhece que libolm está **descontinuado e inseguro**. Vodozemac é a biblioteca oficial de substituição para criptografia Matrix. A proposta de tornar libolm opcional em tempo de compilação demonstra prudência em não quebrar backward compatibility. Este é um **sinal forte de roadmap**: segurança criptográfica será tratada como prioridade.

**Configuração Multi-Agente (#3225)**
A PR propõe permitir que cada agente defina `max_tokens`, thresholds de sumarização e `split_on_marker` individualmente. Isto indica que a arquitetura de agentes está amadurecendo para uso em produção com necessidades heterogêneas.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (3 abertas + 1 fechada)

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #3150 | **Alta** | Perda de memória / "失忆" (closed stale) | [Issue](https://github.com/sipeed/picoclaw/issues/3150) |
| #3194 | **Alta** | Mensagem criptografada recebida sem crypto habilitado | [Issue](https://github.com/sipeed/picoclaw/issues/3194) |
| #3182 | **Média** | Não inicia serviço no Android | [Issue](https://github.com/sipeed/picoclaw/issues/3182) |

### Detalhamento

**#3194 — "Received encrypted message but crypto is not enabled" (🔴 Alta)**
- **Contexto**: Usuário reporta que mensagens Matrix criptografadas são recebidas mesmo com criptografia desabilitada no cliente
- **Stack**: picoclaw v0.2.4-9-ged618e1, Go 1.25.8
- **Risco**: Potential vazamento de conteúdo em cenários onde usuários esperam segurança
- **Status**: Aberto desde 2026-06-27, marcado stale — **sem resposta da maintainer**

**#3182 — Android não inicia serviço (🟡 Média)**
- **Sintomas**: Crash ao lançar service com screenshot indicando erro de path
- **Problema adicional**: Usuário não consegue alterar path via settings mesmo com permissões full
- **Status**: Aberto desde 2026-06-26 — **sem solução**

**#3150 — Bug de "memória" (⚠️ Resolvido/Closed)**
- Closed como stale — bug de comportamento onde sistema "perdia memória" de conversas anteriores
- 4 comentários indicam diskusi masyarakat tentang reproducibilidade

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #3225 | Support agent-specific runtime overrides | Permissões por-agente de max_tokens, sumarização, split markers | [PR](https://github.com/sipeed/picoclaw/pull/3225) |
| #3088 | use vodozemac instead of libolm | Substituição de biblioteca criptográfica legacy | [Issue](https://github.com/sipeed/picoclaw/issues/3088) |

### Análise de Roadmap

**Consolidação de Infraestrutura**
- PRs de chore (#3192 alpine update, #3191 gitignore cleanup, #3189 LINE error handling, #3190 i18n sync) indicam **trabalho de manutenção e DX** — sinais de projeto maduro.

**Evolução de Agentes**
- A feature #3225 (runtime overrides por agente) sugere que o projeto está evoluindo para **multi-tenancy de agentes** com configurações individualizadas.

**Segurança como Prioridade**
- A issue #3088 com tag `priority: high` confirma que a **substituição de libolm é roadmap-critical** — biblioteca considerada insegura e abandonada.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Frequência | Urgência |
|-----------|----------|------------|----------|
| **Estabilidade Android** | App não inicia / path não configurável | 1 report | 🟡 Média |
| **Criptografia** | Mensagens criptografadas sem crypto enabled | 1 report | 🔴 Alta |
| **Memória de contexto** | Sistema "esquece" conversas | 1 report | 🔴 Alta |
| **Manutenibilidade** | libolm inseguro/descontinuado | Consenso comunidade | 🔴 Alta |

### Padrões de Uso Sugeridos

- **Multi-agente em produção**: Usuários estão configurando múltiplos agentes e esperando que comandos como `/clear` funcionem corretamente por contexto
- **Matrix como canal primário**: Bugs de criptografia (#3194) indicam que Matrix é usado ativamente com requisitos de segurança
- **Ecossistema multiplataforma**: Reports Android + Linux (Go build) confirmam diversificação

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Atualizado | Prioridade | Link |
|---|--------|--------|------------|------------|------|
| #3088 | use vodozemac instead of libolm | 2026-06-09 | 2026-07-04 | **High** | [Issue](https://github.com/sipeed/picoclaw/issues/3088) |
| #3182 | Android version (não inicia) | 2026-06-26 | 2026-07-04 | Média | [Issue](https://github.com/sipeed/picoclaw/issues/3182) |
| #3194 | Encrypted message but crypto not enabled | 2026-06-27 | 2026-07-04 | **Alta** | [Issue](https://github.com/sipeed/picoclaw/issues/3194) |

### PRs Abertas Pendentes de Review

| # | Título | Criado | Link |
|---|--------|--------|------|
| #3225 | Support agent-specific runtime overrides | 2026-07-04 | [PR](https://github.com/sipeed/picoclaw/pull/3225) |
| #3192 | Bump alpine from 3.21 to 3.23 | 2026-06-27 | [PR](https://github.com/sipeed/picoclaw/pull/3192) |
| #3191 | Remove duplicate build/ entry | 2026-06-27 | [PR](https://github.com/sipeed/picoclaw/pull/3191) |
| #3190 | fix(i18n): sync missing locale keys | 2026-06-27 | [PR](https://github.com/sipeed/picoclaw/pull/3190) |
| #3189 | fix(line): ignore resp.Body.Close() errors | 2026-06-27 | [PR](https://github.com/sipeed/picoclaw/pull/3189) |

### Ação Recomendada

> **⚠️ Issues #3194 e #3182 estão há ~8 dias sem resposta da equipe maintainer**, ambas com impacto direto na experiência do usuário (segurança + estabilidade Android). Recomenda-se triagem prioritária para manter confiança da comunidade.

---

## Saúde Geral do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade de PRs | 🟢 Alta (7 updates, 2 merged) | ↗️ Positiva |
| Resposta a Issues | 🟡 Moderada (3 issues sem resposta) | → Estável |
| Segurança (libolm) | 🔴 Atenção necessária | ↗️ Roadmap em evolução |
| Estabilidade (bugs abertos) | 🟡 3 bugs ativos | → Estável |
| Releases | ⚪ Nenhum hoje | → Sem mudanças |

**Veredicto**: PicoClaw demonstra saúde operacional com contribuições externas ativas e correções sendo mergeadas. A principal área de atenção é a **segurança criptográfica** (libolm → vodozemac) e a **resolução de bugs críticos** que impactam Android e criptografia Matrix.

---

*Relatório gerado automaticamente com base em dados GitHub do repositório [sipeed/picoclaw](https://github.com/sipeed/picoclaw) — 2026-07-05*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-05

## 1. Panorama do Dia

O IronClaw manteve altíssima atividade em 05/07/2026, com **50 PRs e 24 issues atualizadas** nas últimas 24h. O projeto está profundamente focado na migração do Slack para OAuth (PRs stack 2/4 a 4/4 em revisão) e em melhorias substanciais de CI/CD — destaque para a reestruturação da suíte de integração e a introduction de bucketed tests. Identificou-se um **bloco crítico de 5 bugs de alta/média severidade** no módulo `ironclaw_reborn_identity` que requerem atenção imediata antes do cutover para produção. A cobertura de testes de integração foi elevada com um novo tripwire de paridade de wiring. O lançamento `#5598` promoveu diversas bibliotecas (ironclaw 0.24.0 → 0.29.1) sem nova release formal.

---

## 2. Lançamentos

**Lançamento via PR [#5598](https://github.com/nearai/ironclaw/pull/5598)** — 0.24.0 → 0.29.1 (04/07)

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|---|---|---|---|
| `ironclaw` | 0.24.0 | 0.29.1 | ⚠️ Breaking |
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Breaking |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ Compatível |

> ⚠️ **Atenção:** Três crates possuem **breaking changes** neste ciclo. Revisem os changelogs antes de atualizar dependências.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Tamanho | Escopo | Impacto |
|---|---|---|---|
| [#5633](https://github.com/nearai/ironclaw/pull/5633) | XL | `test(reborn)`: reestruturação da suíte de integração — novo diretório `tests/integration/`, framework disentanglement, coverage single-run | **Alto** — Melhora significativamente a manutenibilidade e cobertura de testes |
| [#5635](https://github.com/nearai/ironclaw/pull/5635) | L | `ci`: benchmark bucketed Reborn crate tests (65 → 12 buckets) | **Alto** — Reduz tempo de CI e melhora paralelização |
| [#5629](https://github.com/nearai/ironclaw/pull/5629) | M | `ci`: uso de OVH sccache + mold nos gates Rust legacy | **Médio** — Reduz custo e tempo de CI |
| [#5632](https://github.com/nearai/ironclaw/pull/5632) | L | `fix(ci)`: estabilização do harness Slack live QA | **Médio** — Resolve flaky tests no Slack |
| [#5631](https://github.com/nearai/ironclaw/pull/5631) | XS | `ci(fix)`: correção de assinatura Codecov GitHub Action (v5 → v7.0.0) | **Médio** — Restaura upload de coverage |
| [#5634](https://github.com/nearai/ironclaw/pull/5634) | S | `ci(fix)`: escopo E2E coverage para Reborn standalone | **Médio** — Simplifica gates de cobertura |
| [#5606](https://github.com/nearai/ironclaw/pull/5606) | S | `ci`: adiciona OVH sccache ao Reborn gateway smoke | **Médio** — Melhora performance do smoke test |
| [#5621](https://github.com/nearai/ironclaw/pull/5621) | L | `Experiment`: OVH Reborn nextest archive | **Exploratório** — Teste de estratégia de cache distribuído |
| [#5383](https://github.com/nearai/ironclaw/pull/5383) | XS | `docs`: audit de recoverabilidade de erros + plano de remediação | **Documentação** — Mapeia erros recoveráveis vs run-borking |
| [#5604](https://github.com/nearai/ironclaw/pull/5604) | XL | `[codex]`: Remove Slack pairing flow em favor de OAuth setup | **Alto** — Substitui fluxo legado de pairing por OAuth |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento (Comentários)

**[#3067](https://github.com/nearai/ironclaw/issues/3067)** — `[TEST] Reborn: Add vertical-slice integration test suite` (33 comentários)
- **Autor:** serrrfirat | P0 | Alta severidade
- **Demanda:** Criar testes de integração no nível do caller que provem que o substrato Reborn funciona através de entrypoints públicos
- **Status:** Aberta desde 29/04 — indica dependência crítica para validação da arquitetura

### PRs em Destaque por Tamanho/Risco

**[#5644](https://github.com/nearai/ironclaw/pull/5644)** (4/07) — `feat(reborn): Slack personal OAuth foundations — dormant additive layer (stack 2/4)` — XL, 77 arquivos
- Implementa fundamentos OAuth para Slack pessoal — **dormante por design**, coexistência com fluxo antigo

**[#5645](https://github.com/nearai/ironclaw/pull/5645)** (4/07) — `feat(reborn): swap Slack pairing codes for personal OAuth (stack 3/4)` — XL, 121 arquivos
- Remove fluxo de pairing codes e substitui por OAuth — **deletion-dominated**

**[#5646](https://github.com/nearai/ironclaw/pull/5646)** (4/07) — `feat(reborn-cli)!: reject legacy [slack] config fields at serve startup (stack 4/4)` — M
- **Breaking change** — rejeita campos legados `[slack]` no startup

### Tema Central: Migração Slack → OAuth

O stack de 4 PRs representa a завершальний этап da migração do Slack. Os PRs 2/4 e 3/4 estão **abertos e aguardando revisão**. O PR 4/4 introduz quebra deliberada para rejeitar configuração legada.

---

## 5. Bugs e Estabilidade

### 🔴 Alta Severidade (Bloqueantes para Cutover)

| Issue | Módulo | Problema | Link |
|---|---|---|---|
| **#5614** | `ironclaw_reborn_identity` | Cross-process divergent-email logins podem split principal | [Link](https://github.com/nearai/ironclaw/issues/5614) |
| **#5615** | `ironclaw_reborn_identity` | `bind()` sem guard OAuth-surface (defense-in-depth) | [Link](https://github.com/nearai/ironclaw/issues/5615) |
| **#5512** | `ironclaw_reborn_identity` | WASM credential provider re-deriva eligibility do manifest vs consultar authorizer | [Link](https://github.com/nearai/ironclaw/issues/5512) |
| **#3068** | Reborn Cutover | Preservar brokered HTTP credential injection | [Link](https://github.com/nearai/ironclaw/issues/3068) |
| **#3067** | Reborn Cutover | Add integration test suite (P0) | [Link](https://github.com/nearai/ironclaw/issues/3067) |

### 🟡 Média Severidade

| Issue | Módulo | Problema | Link |
|---|---|---|---|
| **#5616** | `ironclaw_reborn_identity` | `adopt_migrated_identity` nunca escreve `StoredUser` | [Link](https://github.com/nearai/ironclaw/issues/5616) |
| **#5617** | `ironclaw_reborn_identity` | Login seam testado apenas com fakes | [Link](https://github.com/nearai/ironclaw/issues/5617) |
| **#5636** | CI | Railway bloqueia deploys com `if` skips | [Link](https://github.com/nearai/ironclaw/issues/5636) |

### 🟢 Baixa Severidade / Infraestrutura

| Issue | Módulo | Problema | Link |
|---|---|---|---|
| **#5647** | Tool disclosure | Bridged tool disclosure strips bridge meta-tools | [Link](https://github.com/nearai/ironclaw/issues/5647) |
| **#5638** | CI | Flipping coverage report para ratchet mode | [Link](https://github.com/nearai/ironclaw/issues/5638) |
| **#4108** | E2E | Nightly E2E scheduled run failed | [Link](https://github.com/nearai/ironclaw/issues/4108) |
| **#5640** | Test harness | `RecordingSecurityAuditSink` double missing | [Link](https://github.com/nearai/ironclaw/issues/5640) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas (Issues Recentes)

| Issue | Escopo | Descrição | Link |
|---|---|---|---|
| **#5641** | Test/infra | Adicionar production-side shape accessor para `EXPECTED_PRODUCTION_SHAPE` | [Link](https://github.com/nearai/ironclaw/issues/5641) |
| **#5647** | Tool/capability | Bridged tool disclosure não inclui bridge meta-tools | [Link](https://github.com/nearai/ironclaw/issues/5647) |
| **#5637** | Test | Wiring-parity tripwire — harness vs production shape | [Link](https://github.com/nearai/ironclaw/issues/5637) |

### Features Arquiteturais Reborn (Issues Abertas)

| Issue | Módulo | Feature | Prioridade |
|---|---|---|---|
| **#3141** | M4-host-kernel | Integração de cost-based budgets no ResourceGovernor | P1 |
| **#3127** | M1-webui-product | Design de UX para capability permissions | P1 |
| **#3238** | M3-agentloop-turns | Definição de semântica de cancellation | P1 |
| **#3278** | Reborn | MissionService + TurnCoordinator integration | P2 |
| **#3236** | Reborn | Same-thread follow-up e steering policy | P2 |
| **#3169** | Reborn | Runtime handoff IDs para concurrent background fan-out | P2 |

---

## 7. Resumo de Feedback dos Usuários

> *Nota: Dados de feedback direto de usuários não estão disponíveis neste dump. Inferências baseadas em issues/PRs:*

### Sinais de Dor Identificados

1. **Credenciais HTTP (🔴 Crítico):** Usuários dependem de brokered HTTP credential injection do V1. A regressão no Reborn (#3068) é explicitly um **cutover blocker** — significa que instalações em produção com credenciais HTTP não funcionarão após migração.

2. **Integração com Slack (🟡 Importante):** O fluxo atual de pairing codes é descrito como legado e está sendo substituído por OAuth (#5604). Usuários existentes precisarão passar por novo processo de setup.

3. **Testes de Integração (🟡 Importante):** Issue #3067 (33 comentários) indica que a comunidade/equipe sente necessidade de testes de integração mais robustos para validar o substrato Reborn antes do cutover.

4. **Stabilidade CI (🟡 Constante):** Falhas recorrentes do E2E noturno (#4108) e instabilidade do Slack QA harness (#5632) indicam pressão sobre a pipeline de QA.

### Oportunidades de Melhoria

- **Cobertura de testes de identidade:** Issues #5616 e #5617 indicam que o seam de login OAuth não é testado end-to-end
- **UX de permissões:** Issue #3127 busca melhorar a experiência de usuário para políticas de capabilities

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Idade | Status | Motivo de Alerta |
|---|---|---|---|
| **#4108** | ~39 dias | Aberta | Nightly E2E falhas recorrentes — sem resolução |
| **#3067** | ~67 dias | Aberta | 33 comentários — P0 blocker para cutover |
| **#3141** | ~65 dias | Aberta | Cost-based budgets — P1, sem movimento |
| **#3127** | ~66 dias | Aberta | Capability permission UX — P1, sem movimento |

### Issues Recentes Sem Atribuição Visível

| Issue | Criado | Escopo | Alerta |
|---|---|---|---|
| **#5647** | 04/07 | Tool disclosure bug | Latent — encontrado durante coverage |
| **#5641** | 04/07 | Test infrastructure | Garantia de qualidade de wiring |
| **#5636** | 04/07 | CI/Railway | Bloqueia deploys automaticamente |
| **#5618** | 03/07 | Identity surface question | Decisão de design pendente (wire vs drop) |

---

## Métricas Consolidada (2026-07-05)

| Métrica | Valor | Tendência |
|---|---|---|
| Issues abertas/ativas (24h) | 20 | — |
| Issues fechadas (24h) | 4 | — |
| PRs abertos (24h) | 28 | — |
| PRs merged/closed (24h) | 22 | ⬆️ Alta taxa de close |
| Novos releases | 0 | — |
| Bugs alta severidade | 5 | 🔴 Alerta |
| PRs size XL em revisão | 2 | Slack OAuth stack |
| PRs merged size XL | 1 | Reestruturação de integração |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-05

---

## 1. Panorama do dia

O projeto CoPaw (baseado em QwenPaw) registrou **alta atividade** nas últimas 24 horas com 15 eventos totais (10 issues + 5 PRs), apesar de não haver novas releases. A comunidade demonstra preocupação significativa com bugs críticos relacionados à **memória e contexto** (auto-memory, scroll compression, message pinning), que afetam diretamente a experiência em sessões prolongadas. Dois PRs de funcionalidades importantes (reranker para busca de memória) foram merged recentemente, e três PRs de fallback de modelo LLM seguem em revisão.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O projeto está em período pré-lançamento da versão 2.0 (atualmente em beta 3), conforme indicam issues e comentários da comunidade expressando expectativa pelo lançamento oficial.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados

| PR | Descrição | Impacto |
|---|---|---|
| [#5648](https://github.com/agentscope-ai/QwenPaw/pull/5648) | Adição de reranker configurável para busca de memória | Permite reclassificação de resultados híbridos (vector + BM25) via API externa (ex: SiliconFlow) |
| [#5647](https://github.com/agentscope-ai/QwenPaw/pull/5647) | Painel de configuração de reranker na UI de memória | Interface para ativar/desativar reranking e configurar credenciais e modelo |

### PRs Em Andamento (Aguardando Merge)

| PR | Descrição | Status |
|---|---|---|
| [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777) | Gerenciamento de estado de auto-memory por sessão | Responde diretamente ao bug [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) — solução proativa |
| [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) | UI para configuração de fallback de modelo LLM | Interface do usuário para fallback |
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | Backend de fallback de modelo LLM com limites seguros | Funcionalidade crítica para resiliência |

**Destaque:** O PR #5777 é particularmente relevante pois resolve proativamente um bug de auto-memory reportado no mesmo dia, demonstrando rapidez na resposta da equipe.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | 👍 | Relevância |
|---|---|---|---|---|
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | Enhancement | 4 | 1 | Nomes e avatares customizados para agentes |
| [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) | Bug | 2 | 0 | Auto-memory não persiste em intervalos > 1 |
| [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | Bug | 2 | 0 | Busca de memória quebra canal OpenCode |
| [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770) | Question | 2 | 0 | Expectativa pela v2.0 |

**Análise:** A issue de maior idade ([#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865), aberta desde abril) permanece ativa com 4 comentários, indicando demanda recorrente por customização visual na interface. A comunidade demonstra entusiasmo pela v2.0, mas também preocupação com a estabilidade das funcionalidades de memória.

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas Últimas 24h (8 issues abertas)

| Severidade | Issue | Descrição | Link |
|---|---|---|---|
| 🔴 **Crítica** | #5778 | Scroll compression perde contexto após compressão — respostas "fogem do tema" | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5778) |
| 🔴 **Crítica** | #5775 | Auto-memory interval nunca dispara (estado perdido entre requisições) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5775) |
| 🟠 **Alta** | #5773 | Busca de memória causa erro no canal OpenCode (OCG) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5773) |
| 🟠 **Alta** | #5776 | Mensagem pinned antiga é tratada como tarefa ativa em sessões IM | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5776) |
| 🟠 **Alta** | #5774 | Canal Google/Gemini retorna erro de formato | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5774) |
| 🟡 **Média** | #5771 | Log WARNING incorretamente usado causa刷屏 (spam de logs) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5771) |

### Bug Resolvido

| Issue | Descrição | Link |
|---|---|---|
| #5772 | HTTP 400 mal interpretado como rejeição de mídia, envenenando cache de capacidades | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5772) |

**Observação:** Há um padrão claro de bugs relacionados a **estado de memória entre sessões** e **compressão de contexto**, sugerindo que estas áreas precisam de atenção reforçada antes da release 2.0.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue | Descrição | Link |
|---|---|---|---|
| 🆕 **Customização Visual** | #2865 | Suporte a nomes customizados de agentes e avatares via URL | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2865) |
| 🆕 **UI de Feedback** | #2830 | Ícone de bandeja (system tray) +入口 de feedback | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2830) |

### Features em Desenvolvimento (PRs)

| Feature | PR | Status |
|---|---|---|
| Fallback de modelo LLM (por agente e global) | [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) + [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) | Em revisão |
| Reranker configurável para memória | [#5648](https://github.com/agentscope-ai/QwenPaw/pull/5648) | ✅ Merged |

**Sinais de Roadmap:** As funcionalidades em PR indicam foco em **resiliência** (fallback de modelo) e **qualidade de busca** (reranker). A issue #2865 (customização visual) aguarda implementação há mais de 90 dias.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Impacto |
|---|---|---|
| **Perda de Contexto** | Usuários relatam que após compressão de scroll, o modelo "esquece" informações críticas e dá respostas incoerentes | 🔴 Alto — afeta usabilidade básica em conversas longas |
| **Memória Instável** | Auto-memory não persiste entre sessões, causando perda de dados em sessões de longa duração | 🔴 Alto — crítico para fluxos de trabalho continuados |
| **Canais Quebrados** | Integração com OpenCode (OCG) e Google Gemini apresentam erros em cenários específicos | 🟠 Médio — reduz compatibilidade com provedores |
| **Logs Excessivos** | Nível WARNING mal configurado causa spam, dificultando debugging | 🟡 Baixo — impacto na experiência de desenvolvimento |

### Cenários de Uso Reportados

- **Sessões IM longas:** Usuários de QQ e outros canais de mensagem instantânea experimentam problemas com mensagens pinned obsoletas
- **Uso com Thinking Mode:** Compressão descarta `reasoning_content`, causando erros de API 400 com busca de memória
- **Troca de Modelos:** Ao alternar modelos no LM Studio, mensagens de imagem são silenciosamente removidas

### Satisfação

A issue [#5770](https://github.com/agentscope-ai/QwenPaw/issues/5770) demonstra **alta expectativa pela v2.0**, com usuários expressando entusiasmo ("非常期待💪"). O projeto mantém base ativa, mas a estabilidade das funcionalidades de memória é preocupação recorrente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Ação (72h+ sem atualização)

| Issue | Tipo | Criada | Última Atualização | Prioridade |
|---|---|---|---|---|
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | Enhancement | 2026-04-03 | 2026-07-04 | 🟠 Alta — demanda recorrente |
| [#2830](https://github.com/agentscope-ai/QwenPaw/issues/2830) | Enhancement | 2026-04-02 | 2026-07-04 | 🟡 Média — fechada sem implementação visível |

### Observações

- **Issue #2865** está aberta há **93 dias** sem implementação, embora classificada como enhancement com componentes afetados marcados como "Core/Backend" e "Console". Recomenda-se triagem para definir escopo ou encerramento com justificativa.
- O bug crítico [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778) sobre compressão de contexto foi criado há menos de 24h e ainda não possui resposta da equipe.

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---|---|---|
| Issues abertas/ativas | 8 | ▲ Alta |
| Issues fechadas | 2 | — |
| PRs abertos | 3 | — |
| PRs merged/fechados | 2 | — |
| Releases | 0 | Estável |
| Bugs críticos | 2 | ⚠️ Alerta |

---

*Relatório gerado em 2026-07-05 com base em dados do GitHub do projeto CoPaw (agentscope-ai/CoPaw → QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-05

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 05/07/2026, com 50 issues e 50 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões, indicando foco em consolidação do ciclo de desenvolvimento. A comunidade demonstra engajamento significativo em múltiplas frentes: (a) bugs críticos sendo tratados com urgência (3 P1 fechados nas últimas 24h), (b) evolução do sistema Goal Mode em fase avançada de implementação com múltiplos PRs empilhados, e (c) melhorias no ecossistema de plugins e canais de comunicação. O estado geral é de **projeto saudável com evolução acelerada**, embora hajam pendências de segurança (RUSTSEC advisories bloqueadas) e bugs de estabilidade (SIGSEGV em skill-review).

---

## 2. Lançamentos

**Nenhuma release została publicada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo para a versão 0.8.3, conforme evidenciado pelos trackers temáticos:
- [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) — provider e serialização de ferramentas nativas
- [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) — runtime, loop do agente, tools e skills
- [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) — programa WASM/plugin
- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) — observabilidade, CI, docs e dependências

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (últimas 24h)

| # | Título | Impacto |
|---|--------|---------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions | **Bug P1 resolvido** — ferramentas MCP agora visíveis nas sessões TUI |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression drops tool_calls para MiniMax | **Bug P1 resolvido** — loops de ferramentas restaurados para providers compatíveis |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | Scheduled Jobs edit API 422 | **Bug P1 resolvido** — formulário de edição de Jobs agendados atualizado |
| [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) | i18n: file_download tool strings untranslated | **Melhoria de localização** — interfaces non-English agora exibem traduções corretas |
| [#7862](https://github.com/zeroclaw-labs/zeroclaw/issues/7862) | OpenAI-compat providers tool_choice empty | **Bug P1 resolvido** — vLLM 0.19+ não rejeita mais requests |
| [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | Production SOP audit silently no-op | **Bug P2 resolvido** — chaves Memory de auditoria SOP agora persistidas corretamente |
| [#8359](https://github.com/zeroclaw-labs/zeroclaw/issues/8359) | Memory embeddings não atualizam provider profile | **Bug P2 resolvido** — mudanças de config/set refletidas nos embeddings |

### Destaque: PRs Abertos de Maiorcomplexidade

- [#8685](https://github.com/zeroclaw-labs/zeroclaw/pull/8685) — `feat(runtime): add goal task storage foundation` — Base durável para armazenamento de tarefas goal
- [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) — `feat(runtime): add goal controller and verifier` — Controladora de admissão e gate de verificação
- [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) — `feat(channels): add goal command admission` — Comando `/goal` para canais
- [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) — `feat(runtime): add trusted goal tools and delegation boundaries` — Ferramentas goal com escopo trusted
- [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — `feat(sop): visual SOP authoring surfaces` — Superfícies visuais para criação de SOPs (size:XL)
- [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) — `feat(channels): add Gitea/Forgejo provider` — Provider Git para Gitea/Forgejo
- [#8708](https://github.com/zeroclaw-labs/zeroclaw/pull/8708) — `feat(desktop): self-contained installer` — Instalador desktop com kernel bundled como Tauri sidecar

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + atividade)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI | 15 | **Integração MCP** — ferramentas não descobertas nas sessões TUI |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation | 13 | **Governança** — automação de routing de trabalho e labels |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Goal mode implementation split | 7 | **Meta Feature** — splitting do PR de goal-mode em partes revisáveis |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: .ignore File Mechanism | 7 | **Segurança** — proteção de arquivos sensíveis no workspace |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression drops tool_calls | 5 | **Provider compatibility** — loops infinitos com MiniMax |

### Análise de Demandas

1. **Integração MCP** (#8193): Usuários reportam que servidores MCP conectam e expõem ferramentas, mas sessões TUI não as recebem. A comunidade demonstra preocupação com a experiência de ferramentas externas.

2. **Governança e Processos** (#6808): Proposta para automatizar o sistema de labels e work lanes, reduzindo trabalho manual dos mantenedores. Indica maturidade organizacional do projeto.

3. **Proteção de Arquivos** (#8424): Usuários precisam proteger arquivos sensíveis (`.env`, credenciais) do acesso do agente. O mecanismo atual `forbidden_paths` só bloqueia caminhos externos ao workspace.

4. **Goal Mode** (#8681): Tracker de coordenação para dividir a implementação em PRs revisáveis. A feature está em estágio avançado.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — Workflow Bloqueado)

| # | Severidade | Status | Descrição |
|---|------------|--------|-----------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | S1 | **In-Progress** | skill-review fork panics com slice out-of-range → SIGSEGV no daemon |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | S1 | Accepted | Argumentos malformed de tool-call enviados sem validação → provider 400 |
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | S2 | Accepted | `advance_step` sem guard de run-status → driver pode绕过 approval gate via `sop_advance` |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | S1 | **Blocked** | RUSTSEC advisories em `rumqttc v0.25.1` — stack TLS comprometido |

### Bugs P2 (Degradados)

| # | Severidade | Descrição |
|---|------------|-----------|
| [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) | S2 | Cron jobs ainda usam memória mesmo com `uses_memory = false` |
| [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | S2 | Provider compatível deleta conteúdo via strip incondicional de tags `<think>` |
| [#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664) | S2 | ZeroCode copy de code-block inclui fences Markdown |
| [#8646](https://github.com/zeroclaw-labs/zeroclaw/issues/8646) | S2 | ZeroCode Logs detail esconde atributos atrás de preview-only |
| [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) | S2 | ZeroCode pode completar Code turn sem output visível |

### Bugs P3 (Menores)

| # | Descrição |
|---|-----------|
| [#8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587) | Documentação de sintaxe SOP lacks exemplos detalhados |
| [#7139](https://github.com/zeroclaw-labs/zeroclaw/issues/7139) | Botões da toolbar de chat sem tradução em outros idiomas |

### PR de Fix Recente

- [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) — `fix(skills): bound skill-review history slice` — Correção direta do panic reported em #8654

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Progress

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | SOP routing: false `when` deve avançar ao próximo step | Feature | Habilita SOPs multi-fase com loops |
| [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | Config para desabilitar LeakDetector high-entropy redaction | Feature | Reduz falsos positivos em hashes e filenames |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn-level OTel trace correlation | Feature | Tracing granular de spans llm.call/tool.call/memory.* |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | OCI-Compliant Container Registries para plugins | RFC | Distribuição de plugins WASM via registries container |

### Sinais de Roadmap

1. **Meta Feature "Goal Mode"** em estágio avançado de implementação — múltiplos PRs coordenados (#8685, #8687, #8688, #8689) indicam lançamento iminente.

2. **Programa WASM Plugin** (#7314) continua em desenvolvimento para v0.8.3.

3. **Desktop Installer** (#8708) em reintrodução — bundling do kernel como Tauri sidecar indica estratégia de distribuição diferenciada.

4. **Canal Gitea/Forgejo** (#8611) em desenvolvimento — diversificação de providers Git.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Segurança de Workspace** | Arquivos sensíveis (.env, configs) não protegidos internamente | Usuários não conseguem usar ZeroClaw em projetos com credenciais |
| **Estabilidade de Loop** | context_compression dropando tool_calls causa loops infinitos | Workflow multi-turn com providers compatíveis (MiniMax) quebrado |
| **Experiência MCP** | Ferramentas MCP não descobertas na TUI | Funcionalidade prometida não funciona end-to-end |
| **Aprovação SOP** | Approval gate pode ser bypassed via `sop_advance` | Risco de segurança em workflows críticos |
| **Memória em Cron Jobs** | Flag `uses_memory = false` não funciona corretamente | Jobs agendados stateless não funcionam como especificado |

### Cenários de Uso Observados

- **Desenvolvedores com credenciais**: Necessidade de proteger `.env`, `config.yaml` e arquivos de projeto do acesso do agente.
- **Usuários Multi-provider**: Trabalham com MiniMax, OpenRouter, vLLM — incompatibilidades causam workflow blocks.
- **Operadores de Cron Jobs**: Precisam de jobs agendados stateless para tarefas periódicas de manutenção.
- **Usuários ZeroCode**: Experiência TUI apresenta bugs visuais (copy, logs, output) que degradam UX.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há > 14 dias

| # | Título | Criado | Status | Prioridade |
|---|--------|--------|--------|------------|
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | RUSTSEC advisories em rumqttc | 2026-04-18 | **Blocked** | P1 (Security) |
| [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | LeakDetector config option | 2026-03-27 | Accepted | P2 |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | OCI Registries para plugins | 2026-06-11 | Blocked | P3 |

### Items Bloqueados que Impactam Release

| # | Bloqueio | Dependência |
|---|----------|-------------|
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | Atualização de `rumqttc` | Atualização upstream ou fork |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | Decisão arquitetural OCI | RFC em discussão |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC .ignore mechanism | Necessita decisão |

### Recommendations

1. **Priorizar #5869** — advisory de segurança em cadeia de dependência MQTT requer atenção imediata.
2. **Revisar #5869 + #5869** — impacto na release 0.8.3 pode ser bloqueante se rumqttc não for atualizável.
3. **Maturar RFCs pendentes** (#6808, #8424, #7497) — decisões arquiteturais influenciam a direção técnica do projeto.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-05. Última sincronização: 2026-07-05.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*