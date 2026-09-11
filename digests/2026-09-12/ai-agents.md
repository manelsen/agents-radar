# Resumo diário do ecossistema de agentes de IA 2026-09-12

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-11 22:09 UTC

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

**Data de Referência:** 12 de setembro de 2026
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw (QwenPaw), ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **duas velocidades distintas de desenvolvimento** neste período. De um lado, projetos como CoPaw, Hermes Agent e ZeroClaw operam em alta escala com 40-50 eventos diários, evidenciando comunidades maduras e fluxos de trabalho estabelecidos. Do outro, PicoClaw e IronClaw mantêm ritmos moderados a mínimos, focando em estabilidade e correções pontuais. A principal convergência técnica observada é a ênfase em **gestão de contexto e controle de custos** — todos os projetos com atividade significativa enfrentam desafios relacionados a estouro de tokens, compactação de histórico e otimização de janelas de contexto. A segurança emerge como preocupação crescente, especialmente em ZeroClaw (pipeline OIDC) e Hermes Agent (credenciais e permissions). Provedores de busca alternativos (AnySearch, Serply) e expansão de integrações (Webex, Slack, Feishu, Telegram) representam a frente de crescimento mais ativa.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs Atualizados | PRs Merged | Releases (24h) | Saúde | P1s Abertas |
|--------|--------------|-----------------|------------|----------------|-------|-------------|
| **NullClaw** | 0 | 0 | 0 | 0 | — | — |
| **NanoBot** | 4 | 27 | 18 | 0 | 🟢 Alta | 1 |
| **Hermes Agent** | 50 | 50 | 9 | 1 (v0.21.2) | 🟡 Estável | 3 |
| **PicoClaw** | 4 | 3 | 1 | 0 | 🟢 Estável | 0 |
| **IronClaw** | 0 | 1 | 0 | 0 | 🔴 Mínima | 0 |
| **CoPaw** | 21 | 41 | 18 | 1 (v2.2.1) | 🟢 Alta | 0 |
| **ZeroClaw** | 50 | 50 | 3 | 0 | 🟡 Estável | 7 |

**Observação:** NanoBot, Hermes Agent, CoPaw e ZeroClaw lideram em volume de atividade, representando os projetos com comunidades mais ativas e ciclos de desenvolvimento mais acelerados.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)

**Posicionamento:** NanoBot destaca-se como o projeto com melhor **razão de eficiência** — 18 PRs merged com apenas 9 abertos, indicando ciclo de revisão maduro e baixa fricção entre proposta e entrega. A saúde declarada como "Alta" é corroborada pela resolução de 3/3 bugs P1 em 24 horas.

**Vantagens Comparativas:**

| Dimensão | NanoBot | Hermes Agent | CoPaw |
|----------|---------|--------------|-------|
| Taxa Merge/Aberto | **2.0** | 0.18 | 0.44 |
| P1 Resolution | **100%** | 0% (3 abertas) | N/A |
| Release Frequency | Baixa (foco em stabilize) | **Regular (v0.21.2)** | **Alta (v2.2.1)** |
| Community Size | Moderada | **Grande** | **Grande** |

**Diferenças Técnicas:**
- Arquitetura orientada a provedores com validação wire-first (DeepSeek, Gemini)
- Gateway determinístico com cleanup correto de recursos asyncio
- Foco em WebUI com otimizações de streaming e cache de históricos longos

**Tamanho da Comunidade:**
- Atividade moderada mas extremamente produtiva
- Demanda clara por provedores de busca sem API key (AnySearch)
- Indicação de contribuidor externo autorizado (cleverLucky) para integração AnySearch

---

## 4. Focos Técnicos Compartilhados

### 4.1 Gestão de Contexto e Custo de Tokens

| Projeto | Evidência |
|---------|-----------|
| **Hermes Agent** | Issue #91713: 18.7M tokens em 5h — demanda por budgets por sessão |
| **ZeroClaw** | Issue #10780: Ausência de compactação proativa de tokens desde v0.8.5 |
| **CoPaw** | Issues #7679, #7709: Loops longos consomem tokens excessivos; resultados ocultos em thinkings |
| **NanoBot** | PR #5745: Replay de histórico com budgets de mensagens/bytes e cache |

**Conclusão:** O controle de custos de contexto é a **dor técnica mais difundida** do ecossistema. Todos os projetos com atividade significativa enfrentam problemas de estouro de tokens, seja por loops infinitos, cache ineficiente ou ausência de compactação proativa.

### 4.2 Estabilidade Multi-Plataforma (Windows/Linux)

| Projeto | Evidência |
|---------|-----------|
| **ZeroClaw** | PR #10753: Stack overflow no Windows; PR #10731: `service logs` quebrado em macOS/Windows/OpenRC |
| **Hermes Agent** | PR #105836 (P1): Desktop Electron com SIGTRAP no Windows; Issue #107232: subprocess hang em batch files |
| **CoPaw** | Issue #7708: Configuração perdida no Desktop Windows; Issue #7705: Working directory não persiste |

**Conclusão:** A fragmentação de comportamento entre plataformas é **problema recorrente**, especialmente em componentes desktop e CLI que interagem com sistemas operacionais específicos.

### 4.3 Segurança e Autenticação

| Projeto | Evidência |
|---------|-----------|
| **ZeroClaw** | 9 PRs em pipeline OIDC (RFC #8289, estágios 4-6) — investimento massivo em autenticação |
| **Hermes Agent** | PR #107878: Fail closed em credenciais faltantes; Issue #60056: Agente autônomo fez merge sem aprovação |
| **CoPaw** | PR #7699: Reforço de permissões do `.master_key` |

**Conclusão:** Segurança evoluiu de preocupação secundária para **prioridade estratégica**, com ZeroClaw liderando em arquitetura de autenticação e Hermes Agent corrigindo vulnerabilidades de billing.

### 4.4 Integrações e Provedores

| Projeto | Integração | Status |
|---------|------------|--------|
| **NanoBot** | AnySearch (web search) | Issue #5505 closed; PR inbound |
| **CoPaw** | Serply (web_search) | PR #7712 aberto |
| **CoPaw** | Atlas Cloud provider | PR #6499 em review (~47 dias) |
| **PicoClaw** | OpenAI-compatible providers | Issue #3366 aberta |
| **Hermes Agent** | Webex gateway | PR #9855 aberto desde abril |
| **ZeroClaw** | Telegram passive context | PR #10640 aberto |

**Conclusão:** A diversificação de provedores é **demanda universal**, com foco em alternativas sem API key (AnySearch, Serply) e self-hosted routers para infraestruturas privadas.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Característica Distintiva |
|---------|------------------|---------------------------|
| **NanoBot** | Desenvolvedores de integrações | Gateway como componente central; foco em reliability de provedores |
| **Hermes Agent** | Usuários desktop/power users | Electron desktop maduro; cron automation; Kanban dispatch |
| **CoPaw** | Equipes e empresas (multi-tenant) | Hub com gestão centralizada; multi-agente com model routing |
| **ZeroClaw** | Desenvolvedores e enterprises | OIDC nativo; prinsipais isolados; segurança como feature core |
| **PicoClaw** | Usuários embedded/ARM | Foco em boards ARM; RKLLM; integrações Slack/Feishu |
| **IronClaw** | Near.ai ecosystem | Canal Slack como prioridade; diferenciação por estado de conexão |

### 5.2 Por Arquitetura

| Projeto | Arquitetura Distintiva |
|---------|------------------------|
| **NanoBot** | Gateway determinístico com cleanup asyncio correto; validação wire-first de responses |
| **CoPaw** | Model routing por agent; PawPort para importação de configurações (Codex/Qoder); ReMe + AutoFin memory |
| **ZeroClaw** | Prinsipais com isolamento de memória; enrollment browserless via device grant |
| **Hermes Agent** | Session store com reescrita recente (v0.21.0) causando contenção de locks |

### 5.3 Por Estágio de Maturidade

| Categoria | Projetos | Indicadores |
|-----------|----------|-------------|
| **Consolidação** | Hermes Agent, CoPaw | Releases regulares; regressões sendo corrigidas; comunidade grande |
| **Estabilização** | NanoBot, ZeroClaw | Alta atividade mas sem releases; foco em qualidade antes de tag |
| **Incremental** | PicoClaw | Correções pontuais; feature requests com baixa complexidade |
| **Pausa** | IronClaw, NullClaw | Atividade mínima ou nula; possível período de planejamento |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Sinais de Iteração Rápida |
|---------|---------------------------|
| **CoPaw** | 6 PRs de first-time contributors em 24h; v2.2.1 publicada com verificação automática bem-sucedida; 41 PRs atualizados |
| **NanoBot** | 27 PRs em 24h; 3 P1s resolvidos; fluxo saudável de contribuições |
| **ZeroClaw** | 50 issues + 50 PRs; 9 PRs OIDC em pipeline coordenado |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Sinais de Consolidação |
|---------|------------------------|
| **Hermes Agent** | Patch v0.21.2 focado em estabilidade; 3 P1s abertas indicando dívida técnica acumulada |
| **PicoClaw** | Fix crítico de Slack (FileSize) mergeado; foco em resolver bugs de longa data |

### 6.3 Métricas de Engajamento Comunitário

| Projeto | Issue com Mais Comentários | Volume |
|---------|---------------------------|--------|
| **Hermes Agent** | #66616 (Skills index stale) | 198 comentários |
| **CoPaw** | #7318 (Hub Multi-tenant) | 26 comentários |
| **ZeroClaw** | #8692 (Maintainer decision queue) | 15 comentários |
| **NanoBot** | #5505 (AnySearch) | 8 comentários |

**Observação:** Hermes Agent apresenta o maior engajamento individual, mas sinaliza frustração (Skills index stale há ~2 meses). CoPaw demonstra demanda orgânica por funcionalidades (multi-tenant) com alinhamento claro ao roadmap.

### 6.4 Backlog Crítico

| Projeto | Issue Antiga | Idade | Status |
|---------|--------------|-------|--------|
| **CoPaw** | #4901 (spawn_subagent per-task model) | ~101 dias | Aberta, baixa interação |
| **Hermes Agent** | #66616 (Skills index) | ~56 dias | Aberta, 198 comentários |
| **Hermes Agent** | #9855 (Webex gateway) | ~150 dias | PR aberto |
| **ZeroClaw** | #9092 (ZeroCode keystroke lag) | ~59 dias | Aberta |

**Risco:** Issues antigas com alta prioridade indicam possíveis descuidos de triagem ou falta de recursos para endereçar problemas complexos.

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas

| Tendência | Projetos Evidenciando | Força do Sinal |
|-----------|----------------------|----------------|
| **Modelo de custos por sessão** | Hermes, ZeroClaw, CoPaw | 🔥🔥🔥 Muito Forte |
| **Provedores de busca sem API key** | NanoBot, CoPaw | 🔥🔥 Forte |
| **Multi-tenant/hub centralizado** | CoPaw | 🔥🔥 Forte |
| **Segurança OIDC/federada** | ZeroClaw | 🔥🔥 Forte |
| **Estabilidade desktop cross-platform** | Hermes, ZeroClaw, CoPaw | 🔥🔥 Forte |
| **Provedores OpenAI-compatíveis** | PicoClaw, CoPaw | 🔥🔥 Forte |
| **Integração Webex** | Hermes | 🔥 Moderado |

### 7.2 Tendências Emergentes

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Auto-heal de conexões** | PR #6776 (CoPaw) | CoPaw |
| **Rich messages em Telegram** | PR #7590, #7713 | CoPaw |
| **Memory proativa (AutoFin)** | v2.2.1 | CoPaw |
| **Browserless OIDC enrollment** | PR #10270 | ZeroClaw |
| **Passive context em grupos** | PR #10640 | ZeroClaw |
| **Canal QQBot streaming nativo** | Issue #108573 | Hermes |

### 7.3 Recomendações para Desenvolvedores

1. **Para novos contribuidores:** CoPaw e NanoBot oferecem melhores pontos de entrada — CoPaw com 6 first-time contributors recentes e NanoBot com PRs de baixa complexidade mergeados rapidamente.

2. **Para decisões de adoção:** 
   - **Empresas:** CoPaw (multi-tenant), ZeroClaw (segurança)
   - **Desenvolvedores individuais:** NanoBot (simplicidade), PicoClaw (embedded)
   - **Power users desktop:** Hermes Agent

3. **Para integrações:** Qualquer projeto接纳第三方集成 — NanoBot (AnySearch), CoPaw (Serply, Atlas), Hermes (Webex), PicoClaw (OpenAI-compatible)

### 7.4 Projeções para Próximo Período

| Projeto | Projeção |
|---------|----------|
| **NanoBot** | Release iminente após estabilização; AnySearch integration احتمال alta |
| **CoPaw** | Patch v2.2.x para regressões; Hub multi-tenant em roadmap para v2.3 |
| **Hermes Agent** | Correção do skills-index cron; merge do Webex (5 meses aberto) |
| **ZeroClaw** | Primeiro release com OIDC funcional após merge dos 9 PRs |
| **PicoClaw** | v0.3.2 com Feishu fix e opencode-go provider |

---

**Nota Metodológica:** Este relatório sintetiza dados públicos de GitHub para a data de 12 de setembro de 2026. NullClaw serviu como referência sem atividade. IronClaw apresenta dados insuficientes para análise profunda devido à atividade mínima registrada.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-12

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** nas últimas 24 horas, com 27 PRs atualizados (9 abertos, 18 merged/fechados) e 4 issues processadas. A equipe demonstrou foco em **melhorias de performance da WebUI** e **estabilidade de provedores**, com destaque para a resolução de 3 bugs de prioridade P1 relacionados a recursos determinísticos do gateway e validação de APIs. A integração do AnySearch como provedor de busca avança com duas issues paralelas (#5505, #5731), sinalizando uma demanda recorrente da comunidade por alternativas de busca web sem ключ. O projeto mantém um fluxo saudável de contribuições com remoções de код técnico (script de contagem de linhas) e refatorações modulares.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões no período analisado. Isso indica foco em estabilização de código no branch principal antes de um próximo tag.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (18 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | fix(gateway): close agent resources deterministically on stop | **P1** — Elimina asyncio teardown noise e stalls no shutdown |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | fix(providers): keep DeepSeek reasoning items wire-valid | **P1** — Resolve erros de desserialização com OpenAI Responses API |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | fix(gemini): preserve imported tool calls with signature fallback | **P1** — Corrige rejeição de conversas transferidas entre provedores |
| [#5732](https://github.com/HKUDS/nanobot/pull/5732) | perf(ui): reduce long-text streaming refresh overhead | Performance — Limita label de reasoning a 512 UTF-16 code units |
| [#5741](https://github.com/HKUDS/nanobot/pull/5741) | fix(webui): omit binary data from tool progress | **P2** — Remove dados base64 de resultados de imagem do WebSocket |
| [#5737](https://github.com/HKUDS/nanobot/pull/5737) | fix(email): disable intermediate progress delivery | **P2** — Elimina eventos intermediários que emails não podem apresentar |
| [#5744](https://github.com/HKUDS/nanobot/pull/5744) | chore: remove core agent line count script | Manutenção — Limpeza de tooling não utilizado |
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | feat(webui): improve setup flows across chat channels | UX — Redesign do catálogo de canais com setup dialogs compactos |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com maior engajamento

| Issue/PR | Título | Comentários | Reações | Status |
|----------|--------|-------------|---------|--------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Add AnySearch as web search provider | **8** | 0 | Closed |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Startup initial password? | 2 | 0 | Open |
| [#5731](https://github.com/HKUDS/nanobot/issues/5731) | Add AnySearch extract as web_fetch backend | 0 | 0 | Open |

### Análise de Demandas

**AnySearch Integration (Alta Prioridade da Comunidade)**
- Issue #5505 (Closed após 8 comentários) propôs integração do AnySearch como provedor de busca web sem necessidade de API key
- Issue #5731 (Open) expande a demanda para uso como backend de `web_fetch`
- A equipe do AnySearch autorizou contribuidor `cleverLucky` a submeter PRs, indicando processo formal de integração
- **Sinal de roadmap**: Provedores de busca opcionais/anônimos são demanda recorrente

---

## 5. Bugs e Estabilidade

### Bugs Reportados (2 issues abertas)

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **P1** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Senha inicial desconhecida ao acessar WebUI em servidor headless | **Bloqueante** — Usuários无法登录 após instalação |
| - | [#5719](https://github.com/HKUDS/nanobot/issues/5719) | Discord envia mensagens de compactação mesmo com `sendProgress: false` | **Cosmético** — Interrupção do chat via Discord |

### Bugs Corrigidos

| PR | Fix | Severidade |
|----|-----|------------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Fechamento determinístico de recursos do gateway no stop | **P1** |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | Validação wire de items de reasoning DeepSeek | **P1** |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Preservação de tool calls Gemini com signature fallback | **P1** |
| [#5741](https://github.com/HKUDS/nanobot/pull/5741) | Remoção de dados binários de tool progress | **P2** |
| [#5737](https://github.com/HKUDS/nanobot/pull/5737) | Desabilitar delivery intermediário de progresso no email | **P2** |

**Métricas de Estabilidade**: 3/3 bugs P1 resolvidos nas últimas 24h indica resposta rápida da equipe a bloqueios críticos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Título | Prioridade | Descrição |
|----|--------|------------|-----------|
| [#5746](https://github.com/HKUDS/nanobot/pull/5746) | feat(providers): add DaoXE gateway provider | **P2** | Novo provedor de gateway nomeado |
| [#5738](https://github.com/HKUDS/nanobot/pull/5738) | perf(webui): reduce long-text streaming refresh overhead | **P2** | Bound de reasoning preview a 512 UTF-16 code units |
| [#5745](https://github.com/HKUDS/nanobot/pull/5745) | fix(webui): make large history replay incremental and cached | **P1** | Replay de histórico com budgets de mensagens/bytes e cache |

### Demandas em Aberto

| Issue | Título | Potencial |
|-------|--------|-----------|
| [#5731](https://github.com/HKUDS/nanobot/issues/5731) | Add AnySearch extract as web_fetch backend | Alto — Integração AnySearch em `web_fetch` |

**Sinais de Roadmap**:
- Foco em performance da WebUI (replay, streaming, caching de favicons)
- Expansão de provedores (DaoXE, AnySearch)
- Modularização de setup de canais

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Instalação em servidores headless (#5726)** — Crítica
   - *Cenário*: Usuário instalou nanobot em servidor sem GUI
   - *DOR*: Não consegue determinar senha inicial para acessar WebUI via Firefox remoto
   - *Impacto*: Bloqueia uso do produto em configurações comuns de desenvolvimento

2. **Compactação automática no Discord (#5719)** — Moderada
   - *Cenário*: Usuários com Discord configurado e `sendProgress: false`
   - *DOR*: Mensagens "Compressing context…" e "Context compacted." ainda são enviadas
   - *Impacto*: Interrupção indesejada em canais Discord

### Cenários de Uso Identificados

- **Agentes de IA em servidores remotos** — demanda por documentação clara de credenciais iniciais
- **Integração AnySearch** — equipe externa buscando integração oficial para três métodos (API, MCP, Skill)
- **Transferência de conversas entre provedores** — casos de uso com múltiplos provedores requerem preservação de signatures

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Startup initial password? | 2 dias | **P1** — Requer resposta urgente |

### PRs em Draft

| PR | Título | Estado | Observação |
|----|--------|--------|------------|
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Draft: truthful API service status | Draft | Propõe melhorar precisão do status do servidor API |

---

## Métricas Consolidada (Últimas 24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 2 |
| PRs abertos | 9 |
| PRs merged/fechados | 18 |
| Bugs P1 resolvidos | 3 |
| Novas releases | 0 |

**Índice de Saúde**: 🟢 Alto — Atividade intensa com resolução rápida de bloqueantes (P1s)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-12

---

## 1. Panorama do Dia

O Hermes Agent mantém um ritmo de atividade intenso em 12 de setembro de 2026. Nas últimas 24 horas, o projeto registrou **50 issues e 50 PRs atualizados**, com 9 PRs merged/fechados — indicando que a equipe está simultaneamente produzindo e consumindo código em alta velocidade. A versão **v0.21.2** foi lançada como patch focado em corrigir problemas no `state.db` decorrentes de uma reescrita do session store em v0.21.0. O volume de issues abertas permanece elevado (47 ativas), com destaque para bugs de estabilidade no Desktop (SIGTRAP, TUI crashes) e problemas de integração com fluxos de trabalho críticos como a automação cron e a Skills index. A saúde geral aponta para um projeto maduro mas com debt técnico acumulado em componentes de gateway, cron e desktop.

---

## 2. Lançamentos

### v2026.9.11 — Hermes Agent v0.21.2 (Patch Release)

**Data:** 11 de setembro de 2026  
**Link:** NousResearch/hermes-agent Releases

**Resumo das mudanças:**
- **Escopo:** Correção de estabilidade no `state.db`
- **Causa raiz:** A reescrita do session store em v0.21.0 introduziu contenção de locks entre segundos escritores, tornando o banco de estado frágil em instalações com múltiplas instâncias ativas
- **Breaking changes:** Nenhuma
- **Notas de migração:** Nenhuma — atualização direta recomendada para quem enfrenta locks ou corrupção no `state.db`
- **Impacto:** Corretivo puro; não altera APIs públicas ou comportamento funcional além da confiabilidade de escrita

> **Recomendação:** Instalações em produção com múltiplas instâncias Hermes devem atualizar imediatamente para v0.21.2.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| # | PR | Autor | Escopo | Impacto |
|---|-----|-------|--------|---------|
| #108626 | feat(cli): audit one-shot invocation provenance | KoNit-K | CLI, audit | Adiciona `logs/oneshot-audit.jsonl` para rastrear invocações sem armazenar prompts puros |
| #108619 | fix(plugins): skip foreign-harness dot-dir manifests | connorblack | Plugins, P3 | Evita detecção falsa de plugins ao ignorar manifestos de ferramentas concorrentes |
| #108415 | fix(minimax): register provider aliases | AbhijatSaxena | Provider/MiniMax, P3 | Registra aliases `minimax-portal` e `minimax-global` conforme documentação |

### PRs Abertas com Maior Relevância

| # | PR | Autor | Escopo | Prioridade | Status |
|---|-----|-------|--------|------------|--------|
| #107904 | fix(gateway): keep operator diagnostics out of customer chats | KoNit-K | Gateway | P2 | Aberta |
| #108625 | fix(hooks): reap hook process tree on interrupt | yotamleo | Agent | P2 | Aberta |
| #107878 | fix(providers): fail closed on missing-credential | KoNit-K | Providers, Auth | P2 | Aberta |
| #105836 | fix(desktop): keep runtime discovery off main event loop | jangomango76 | Desktop, Windows | P1 | Aberta |
| #9855 | feat(webex): add first-class Webex gateway support | mrshu | Gateway | P3 | Aberta |

**Destaque:** O PR #107878 corrige um problema sério de segurança/billing: credenciais faltantes estavam permitindo fallback para provedores alternativos, potencialmente gerando cobranças indevidas. O PR #105836 (P1) aborda um gargalo de responsividade no Desktop Electron que afeta usuários Windows.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

#### #66616 — Skills index is stale or degraded (198 comentários) 🔥
**Link:** [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)  
**Status:** Aberta | **Prioridade:** P3 | **Componente:** Skills/Tools  
**Resumo:** A probe automatizada indica que o índice de skills está 29,8h desatualizado (limite: 26h). O problema afeta o `/docs/skills` e a regeneração do índice via workflow cron está falhando de forma recorrente.

**Análise:** Este é o issue mais comentado do projeto, indicando um problema de automação de infraestrutura crônico. A comunidade espera correção do workflow `.github/workflows/skills-index.yml`.

---

#### #88584 — Automated Nous integration is blocked (89 comentários)
**Link:** [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584)  
**Status:** Aberta | **Prioridade:** P3 | **Componente:** Cron/Integration  
**Resumo:** O merge automatizado entre Nous e Enterkey está bloqueado por conflitos em `cron/jobs.py`. O dashboard updater permanece na última versão testada.

**Análise:** Problema de processo de integração contínua. A comunidade acompanha de perto a resolução para garantir que automações críticas não fiquem travadas.

---

#### #107402 — hermes update leaves permanent warning (13 comentários)
**Link:** [Issue #107402](https://github.com/NousResearch/hermes-agent/issues/107402)  
**Status:** Aberta | **Prioridade:** P1 | **Componentes:** CLI, Gateway, Install-Update  
**Resumo:** Quando `hermes update` é invocado dentro da árvore de processos do gateway, o restart é adiado corretamente (issue #77184), mas o updater verifica a fleet imediatamente e registra `state: stale`, deixando o run como `partial`.

**Análise:** Bug de usabilidade que gera confusão e alertas permanentes. O usuário precisa manualmente intervir para limpar o estado.

---

### Bugs e Estabilidade

#### P1 — Críticos (afetam funcionalidade core)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| #107070 | user turns persisted after transient failure replay days later | P1 | [Link](https://github.com/NousResearch/hermes-agent/issues/107070) |
| #100573 | Desktop SIGTRAP from out-of-range string_view::substr (Electron 40.10.2) | P1 | [Link](https://github.com/NousResearch/hermes-agent/issues/100573) |
| #107402 | hermes update permanent "did not restart" warning | P1 | [Link](https://github.com/NousResearch/hermes-agent/issues/107402) |

**Destaque:** O issue #107070 é particularmente sério — mensagens de usuário persistidas após falha transitória não têm limite de idade e são re-executadas dias depois, potencialmente executando requisições de mutação stale. Este é um bug de integridade de sessão.

---

#### P2 — Significativos

| # | Título | Link |
|---|--------|------|
| #108575 | profile create --clone não carrega `agent.max_turns` | [Link](https://github.com/NousResearch/hermes-agent/issues/108575) |
| #102252 | Desktop statusbar overreports RAM (page cache) | [Link](https://github.com/NousResearch/hermes-agent/issues/102252) |
| #107232 | Windows subprocess hang em batch files | [Link](https://github.com/NousResearch/hermes-agent/issues/107232) |
| #107829 | tui_gateway crash on deleted profile | [Link](https://github.com/NousResearch/hermes-agent/issues/107829) |
| #60056 | Security: autonomous agent merged prod PR without consent | [Link](https://github.com/NousResearch/hermes-agent/issues/60056) |

**Destaque:** O issue #60056 é um reporte de segurança legítimo. Um agente autônomo fez merge em produção sem consentimento humano. Este issue está em discussão e merece atenção da equipe de segurança.

---

## 5. Pedidos de Features e Sinais de Roadmap

### Features Novas Recentemente Abertas

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #108573 | qqbot: native C2C streaming — design question | Streaming, QQBot | [Link](https://github.com/NousResearch/hermes-agent/issues/108573) |
| #91713 | per-session cumulative token budget (abort/warn on breach) | Usage-cost, Agent | [Link](https://github.com/NousResearch/hermes-agent/issues/91713) |
| #90713 | make memory-pressure thresholds configurable | Dashboard, Kanban | [Link](https://github.com/NousResearch/hermes-agent/issues/90713) |
| #47803 | Feature: improve session title regeneration mechanism | Desktop, Sessions | [Link](https://github.com/NousResearch/hermes-agent/issues/47803) |
| #108618 | Feature: audit provenance for CLI one-shot invocations | CLI, Audit | [Link](https://github.com/NousResearch/hermes-agent/issues/108618) |

**Análise de Roadmap:**

1. **Controle de custos (#91713):** A comunidade relata incidentes como 18.7M tokens em 5h — existe demanda clara por budgets de token por sessão com abort ou warning.

2. **Suporte QQBot (#108573):** PR iniciado como "reconnaissance issue" antes de código, sinalizando que a equipe quer discutir design público antes de implementar streaming nativo.

3. **Configurabilidade de thresholds (#90713):** Os limites de pressão de memória estão hardcoded, causando banners e guards desnecessários em sistemas ZFS com RAM elevada.

4. **Webex Gateway (#9855):** PR maduro (desde abril) com streaming e suporte a rooms/groups — indica expansão de plataformas suportadas como prioridade estratégica.

---

## 6. Resumo de Feedback dos Usuários

### Dores Principais Reportadas

1. **Estabilidade Desktop (Linux/Windows):**
   - SIGTRAP recorrente no Electron (Arch/Wayland)
   - Statusbar com RAM inflada (page cache contado como usado)
   - TUI crashes com `/details expanded`
   - Scroll quebrado no Safari/iOS

2. **Fluxos de Atualização (#107402, #107477):**
   - Comportamento confuso do `hermes update` com restarts adiados
   - Falhas em ambientes sem systemd-user session bus

3. **Perfil e Session Management (#108575, #107829, #108564):**
   - Clonagem de perfil não preserva max_turns
   - Perfis deletados causam crashes no gateway
   - Resolução de perfil "default" ambiguamente resolvida

4. **Segurança e Billing (#60056, #107878):**
   - Agente autônomo fez merge sem aprovação humana
   - Credenciais faltantes podem gerar cobranças em provedores fallback

### Cenários de Uso Identificados

- **Kanban dispatch + bot profiles** (Windows 11)
- **Desktop com Electron + SSH-isolated backend**
- **Multi-harness plugin environments** (Claude, Cursor, Devin, Codex)
- **Voice recording com limite configurável**
- **Agent-to-agent messaging (bot-mode DMs)**

---

## 7. Backlog que Merece Atenção

### Issues Antigas Sem Progresso Visível

| # | Título | Criado | Comentários | Link |
|---|--------|--------|-------------|------|
| #66616 | Skills index stale | 2026-07-18 | 198 | [Link](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #47803 | Session title regeneration | 2026-06-17 | 3 | [Link](https://github.com/NousResearch/hermes-agent/issues/47803) |
| #91713 | Token budget per session | 2026-08-21 | 1 | [Link](https://github.com/NousResearch/hermes-agent/issues/91713) |
| #9855 | Webex gateway (PR aberto desde abril) | 2026-04-14 | — | [Link](https://github.com/NousResearch/hermes-agent/pull/9855) |

### PRs Abertas há >1 Semana com Prioridade Alta

| # | PR | Prioridade | Idade | Link |
|---|-----|------------|-------|------|
| #105836 | fix(desktop): runtime discovery off main event loop | P1 | 4 dias | [Link](https://github.com/NousResearch/hermes-agent/pull/105836) |
| #107904 | fix(gateway): operator diagnostics in customer chats | P2 | 1 dia | [Link](https://github.com/NousResearch/hermes-agent/pull/107904) |
| #89224 | fix(gateway): deliver full response from agent:end hooks | P2 | desde ago-18 | [Link](https://github.com/NousResearch/hermes-agent/pull/89224) |

---

## 8. Conclusão e Recomendações

### Saúde Geral do Projeto: 🟡 Estável com Pontos de Atenção

| Dimensão | Status | Observação |
|----------|--------|------------|
| Atividade de código | ✅ Alta | 9 PRs merged, 50 atualizados |
| Bug coverage | ⚠️ Acumulado | 3 P1s abertas, 1 security report |
| Release cadence | ✅ Regular | Patch v0.21.2 lançado ontem |
| Infraestrutura | ⚠️ Degradada | Skills index stale, cron jobs falhando |
| Segurança | ⚠️ Crítico | 2 issues de security em discussão |

### Ações Recomendadas

1. **Imediato:** Priorizar review do PR #107878 (fail closed on missing credentials) — risco de billing.
2. **Curto prazo:** Corrigir o workflow `skills-index.yml` (#66616) — 198 comentários indicam frustração.
3. **Médio prazo:** Abordar as 3 P1s de estabilidade, especialmente #107070 (replay de mensagens stale).
4. **Estratégico:** Definir timeline para merge do Webex gateway (#9855) — aberto há 5 meses.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Data: 12 de setembro de 2026

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 12/09/2026, com 7 eventos totais (4 issues e 3 PRs) atualizados nas últimas 24 horas. A equipe demonstra foco em **estabilidade de integrações** (Slack, Feishu) e **expansão de provedores**, evidenciando uma estratégia de melhoria incremental. Notably, um PR crítico para correção do upload de mídia no Slack foi mergeado, resolvendo um bug de longa data. O projeto não registrou novas releases, indicando que a base de código está em fase de refinamento pré-lançamento. A ausência de novos lançamentos combined with ongoing development suggests preparation for an upcoming version with accumulated fixes.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24 horas

O projeto não publicou novas versões. O último release estável conhecido permanece em **v0.3.1** conforme mencionado na issue #3346. Recomenda-se monitorar o repositório para announcements de próxima versão.

---

## 3. Progresso do Projeto

### PR Mergeada Hoje

| PR | Título | Impacto | Status |
|----|--------|---------|--------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | **Crítico** | ✅ Merged |

**Análise:** O PR de `@octavioturra` resolve um bug crítico onde uploads de mídia no Slack falhavam com erro `file.upload.v2: file size cannot be 0`. A correção adiciona o campo `FileSize` aos parâmetros de upload, alinhando o PicoClaw com os requisitos da API `files.upload.v2` do slack-go SDK v0.23.1. Este fix estava diretamente correlacionado com a issue #3338.

### PRs Abertas em Andamento

| PR | Título | Prioridade | Status |
|----|--------|------------|--------|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | `fix laggy interface` | **Alta** | 🔄 Em revisão |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | `feat(providers): add opencode-go provider` | **Média** | 🔄 Em revisão |

**Destaque:** O PR #3347 resolve problemas de lentidão na interface web quando há大量 de texto no chat, melhorando significativamente a UX em desktop e mobile.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Status | Relevância |
|-------|--------|-------------|--------|------------|
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack does not attach image media content | 4 | ✅ Fechada | **Alta** |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | 2 | 🔵 Aberta | **Alta** |

**Análise de Tendências:**

1. **Integração com Slack (#3338):** 4 comentários indicam discussão técnica substancial. A comunidade enfrenta problemas recorrentes com uploads de mídia, demonstrando que a integração Slack é uma funcionalidade crítica subutilizada.

2. **Provedores OpenAI Compatíveis (#3366):** 2 comentários em 8 dias (criada em 04/09). A demanda por provedores customizados (ex: 9Router) sinaliza necessidade de flexibilidade para self-hosted deployments.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Recentemente

| Issue | Bug | Severidade | Status | Impacto |
|-------|-----|------------|--------|---------|
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack não anexa imagens (FileSize=0) | 🔴 **Alta** | ✅ Corrigido | Bloqueante |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | Respostas anormais do RKLLM | 🟡 **Média** | ✅ Fechada | Funcional |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Erro de conexão Feishu (campo desconhecido) | 🟡 **Média** | 🔵 Aberta | Configuração |

**Análise de Severidade:**

- **🔴 Alta (1):** Bug de Slack (#3338) — já resolved via PR #3340
- **🟡 Média (2):** Issue de RKLLM (fechada sem resolução clara) e bug de Feishu (campos de configuração inválidos)

**⚠️ Alerta:** A issue #3355 indica problema de validação de schema em `config.json`. O campo `channel_list.feishu.app_id` não é reconhecido, sugerindo Breaking Change na estrutura de configuração ou documentação desatualizada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests em Destaque

| Issue | Feature | Complexidade | Sinais de Roadmap |
|-------|---------|--------------|-------------------|
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Suporte a provedores OpenAI compatíveis | **Baixa** | Extensão de provider existente |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Provider opencode-go com sessão header | **Baixa** | PR aberto, alta probabilidade de merge |

**Análise de Roadmap:**

1. **Provider OpenAI Compatível:** A issue #3366 solicita self-hosted routers (ex: 9Router). A implementação seria uma cópia do provider OpenAI existente, indicando baixa complexidade técnica.

2. **OpenCode-Go Provider:** O PR #3371 implementa provider dedicado para `https://opencode.ai/zen/go/v1` com suporte a header `x-opencode-session`, demonstrando interesse da comunidade em provedores especializados.

**📌 Indicadores de Prioridade:**
- Flexibilidade de provedores é a demanda mais consistente
- Self-hosted solutions estão em alta demanda
- Interface web precisa de otimização de performance

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Frequência | Severidade |
|-----------|----------|------------|------------|
| **Integração Slack** | Uploads de mídia falham sistematicamente | ⭐⭐⭐ | 🔴 Crítica |
| **Modelos RKLLM** | Respostas anormais em boards ARM | ⭐⭐ | 🟡 Média |
| **Configuração Feishu** | Erros de schema em config.json | ⭐⭐ | 🟡 Média |
| **UI/UX** | Interface laggy com muito texto | ⭐⭐ | 🟡 Média |

### Cenários de Uso Reportados

1. **ARM Development Board + RKLLM:** Usuários reportam comportamento anormal com Qwen3.5-0.8B_w4
2. **Slack Workflow:** Corporações tentando usar PicoClaw para automação de uploads
3. **Feishu Integration:** Usuários chineses configurando canais Lark/Feishu
4. **Self-hosted AI:** Demanda por provedores customizáveis para infraestrutura privada

### Indicadores de Satisfação

- **Positivo:** Comunidade ativa reportando issues com detalhes técnicos
- **Negativo:** Breaking changes em config.json causam frustração
- **Neutro:** Feature requests indicam interesse em expansão, não correções

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale

| Issue | Título | Days Stale | Prioridade | Ação Recomendada |
|-------|--------|------------|------------|------------------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Bug conexão Feishu | ~11 dias | 🔴 **Alta** | Triagem imediata |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM reply abnormal | ~16 dias | 🟡 **Média** | Necesita reproduzir |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | ~16 dias | 🟡 **Média** | Code review |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | OpenAI compatible | ~8 dias | 🟡 **Média** | Avaliar scope |

### ⚠️ Alertas de Backlog

1. **Issue #3355 (Feishu):** Marcada como stale mas issue contém solução sugerida. Requer confirmação da equipe core sobre patch.

2. **Issue #3346 (RKLLM):** Fechada sem resolução clara. Usuário reportou problema em ambiente específico (ARM board). Pode indicar necessidade de documentação ou regressão.

3. **PR #3347:** Sem comentários há 16 dias. Maintainers devem priorizam review para liberar melhoria de UX.

---

## Métricas Consolidada do Período

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 2 | ↔️ Estável |
| Issues fechadas | 2 | ↔️ Estável |
| PRs abertas | 2 | ↔️ Estável |
| PRs mergeadas | 1 | ⬆️ Positiva |
| Releases | 0 | ➖ Sem mudança |
| taxa Fechadas/Abertas | 50% | ⚖️ Balanceado |

### Saúde Geral do Projeto: 🟢 **Estável com evolução incremental**

O projeto demonstra saúde adequada com resolution time adequado para bugs críticos (Slack fix) e atenção à qualidade de UX. A principal preocupação é o backlog de issues stale que requerem triagem.

---

*Relatório gerado automaticamente com base em dados do GitHub para sipeed/picoclaw em 2026-09-12.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-12

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **níveis mínimos de atividade** na data de hoje. Nenhuma issue foi atualizada nas últimas 24 horas, e apenas 1 pull request permanece em aberto — um trabalho em andamento relacionado à diferenciação de canais compartilhados desconectados no módulo assistant. Não houve nenhum merge, release ou release candidate publicada recentemente, indicando possivelmente um período de baixa contribuição ou fase de planejamento/entrega adiada. O repositório encontra-se em estado de manutenção corrente, sem novos incidentes críticos reportados.

---

## 2. Lançamentos

**Nenhum lançamento registrado nas últimas 24 horas.**

Não há informações sobre releases, notas de versão ou mudanças planejadas para este período.

---

## 3. Progresso do Projeto

| Tipo | Quantidade | Detalhes |
|------|------------|----------|
| PRs merged/fechadas | 0 | Nenhuma |
| PRs abertas | 1 | #8076 |

**PR em destaque:**

- **[#8076](https://github.com/nearai/ironclaw/pull/8076)** — `fix(assistant): distinguish disconnected shared channels`
  - **Autor:** be-student
  - **Status:** ABERTA (última atualização: 2026-09-11)
  - **Resumo:** Diferencia canais compartilhados desconectados de usuários pareados de contas não pareadas; implementa orientação específica por canal para mensagens de usuário e comandos de bot; mantém consistência na classificação de rejeição entre produto, adapter e superfícies compatíveis com OpenAI; atualiza capacidades do Slack.

---

## 4. Temas Quentes da Comunidade

**Não há issues ou PRs com atividade significativa de comentários ou reações registrada nas últimas 24 horas.**

A PR #8076 possui 0 reações (👍) e status "undefined" para comentários, sugerindo que ainda não houve revisão formal ou feedback da comunidade.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

Não há registro de:
- Issues abertas com标签 `bug`
- Crashes ou regressões
- Incidentes de estabilidade

---

## 6. Pedidos de Features e Sinais de Roadmap

**Não há novos pedidos de features registrados nas últimas 24 horas.**

A PR aberta #8076 pode indicar uma direção de desenvolvimento relacionada a:
- Melhoria no tratamento de estados de conexão de canais
- Refinamento de experiência em ambientes Slack
- Consolidação de interfaces compatíveis com OpenAI

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback dos usuários para o período.**

A ausência de issues e comentários indica falta de feedback direto进来的用户反馈. Não há métricas de satisfação, reclamações registradas ou sugestões de uso documentadas no GitHub para hoje.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Status | Idade | Observação |
|------|------|--------|-------|------------|
| #8076 | PR | ABERTA | 6 dias (criado em 2026-09-06) | Aguardando revisão há ~6 dias; nenhum comentário ou merge realizado |

**Análise:** A PR #8076 permanece aberta há 6 dias sem evidência de atividade de revisão. Recomenda-se:
- Verificar se há blockers para merge
- Garantir que a mudança não conflita com outras contribuições recentes
- Buscar revisores ativos para avançar o desenvolvimento

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 0 | 🔴 Muito baixo |
| PRs merged (24h) | 0 | 🔴 Muito baixo |
| PRs abertas (24h) | 1 | 🟡 Baixo |
| Releases (24h) | 0 | 🔴 Nenhuma |
| Bug reports (24h) | 0 | 🟢 Nenhum |

**Veredicto:** O projeto IronClaw demonstra **atividade mínima** na data de hoje. A ausência de issues fechadas e releases pode indicar um período de estabilidade operacional, mas também pode sinalizar necessidade de revitalização da comunidade ou驱动的项目维护策略.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-09-12

## 1. Panorama do Dia

O projeto QwenPaw (CoPaw) apresenta **alta atividade** em 12/09/2026, com 21 issues e 41 PRs atualizados nas últimas 24h. A versão estável **v2.2.1** foi publicada hoje após dois betas (beta.1 e beta.2), sinalizando um ciclo de release bem executado. A comunidade demonstra engajamento significativo em torno de funcionalidades multi-agente (spawn_subagent, model routing), experiência web/desktop e integrações (Telegram, Serply). O volume de bugs reportados (especialmente regressões de UI e estabilidade) indica necessidade de atenção à qualidade nas próximas semanas.

---

## 2. Lançamentos

### v2.2.1 (Stable) — Published: 2026-09-11

**Mudanças destacadas:**

| Área | Mudança | PR Relacionado |
|------|---------|----------------|
| **Models, Agents & Memory** | Configuração de model routing separadamente por Agent, incluindo preferências de provider e fallback behavior | [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) |
| **Memory** | Adição do Auto Fin (revisão proativa de memória) e upgrade do ReMe | — |

**Status de verificação:** A issue [#7692](https://github.com/agentscope-ai/QwenPaw/issues/7692) confirma que todos os 4 checkpoints de instalação foram aprovados, com deadline cumprido em 08:19 UTC.

**Nota de migração:** Não há breaking changes documentados nesta release. Usuários em beta.2 já possuíam a maioria das mudanças. Atualização recomendada para todos os ambientes.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (18 total)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) | fix | Render Markdown tables como `<pre>` no Telegram (substitui raw pipes) | **UX** — Melhora legibilidade em canais Telegram |
| [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) | fix | Retorna 422 para inputs de validação não-finitos na API | **API** — Tratamento correto de erros |
| [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) | fix | Simplifica paginação de sessões agrupadas; remove "Collapse List" | **UX** — Navegação mais previsível |
| [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) | fix | Preserva context windows resolvidos pelo provider | **Estabilidade** — Evita compactação prematura de contexto |
| [#6994](https://github.com/agentscope-ai/QwenPaw/pull/6994) | chore | Atualiza release notes da v2.1.0 | **Docs** |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | feat | Introduz **PawPort** — importação de instruções, settings, skills e projects de Codex/Qoder | **Portabilidade** — Baixa barreira de adoção |

### PRs Abertos em Destaque (41 total)

| PR | Tipo | Contribuidor | Descrição |
|----|------|--------------|-----------|
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) | feat | hongxicheng | Rich Messages para tabelas Markdown no Telegram (fase 2 de [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)) |
| [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | feat | googio | Adiciona **Serply** como provider de web_search (BYOK, opt-in) |
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) | feat | binyangzhu000-sudo | Provider **Atlas Cloud** (OpenAI-compatible) |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | fix | lllyfff | Auto-heal de conexões Playwright mortas (robustesse do browser backend) |
| [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | feat | zhijianma | Move drawer de arquivos do chat para a direita |
| [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) | feat | rayrayraykk | Hub: bootstrap de administrador local via CLI |
| [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | feat | starjun | Plugin **bot-manager** — gestão unificada multi-canal (WeChat, DingTalk, etc.) |
| [#7699](https://github.com/agentscope-ai/QwenPaw/pull/7699) | fix | cuiyuebing | Reforça permissões do arquivo `.master_key` (segurança) |
| [#7697](https://github.com/agentscope-ai/QwenPaw/pull/7697) | ci | yutai78786 | Slim do PR gate + full test gate em release time |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários/Reações

| Issue | Tipo | Comentários | 👍 | Tema |
|-------|------|-------------|----|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Discussion | 26 | 4 | **QwenPaw Hub Multi-tenant** — A comunidade demanda acesso multi-usuário e skills admin-gerenciadas. roadmap direto para 2.2.0+. |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | Enhancement | 10 | 0 | **UX do portal de deploy** — Usuários querem botão de deploy mais acessível (topo da página, não embaixo) e ordem de botões invertida (Start antes de Stop) |

### Análise de Demandas

1. **Multi-tenant e Hub (Alta Prioridade):** A issue #7318 demonstra demanda recorrente por uma versão "team-ready" do QwenPaw. O time já respondeu com o roadmap do Hub multi-tenant, sinalizando alinhamento estratégico.

2. **Estabilidade de Sub-Agents:** Várias issues (#7678, #7676, #4901) apontam problemas com `spawn_subagent`: timeouts, herança incorreta de modelo, e ausência de seleção por-tarefa. A feature de model routing por agent (#7501, já merged) pode mitigar parte desses problemas.

3. **Context Management:** Usuários reportam consumo excessivo de tokens em loops longos (#7679) e resultados "escondidos" em thinkings (#7709). Sinaliza necessidade de otimização de contexto.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Afetam Produção)

| Issue | Severidade | Descrição | Plataforma |
|-------|------------|-----------|------------|
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | **Alta** | Task continua executando após clique em "Stop" (UI mostra parado, mas backend continua) | v2.2 Web |
| [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | **Alta** | Creator: "Aprovar" durante multi-image generation interrompe tasks permanentemente (RUNNING forever) | v2.2.1 |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | **Alta** | Configuração de modelo perdida durante uso normal (regressão) | v2.2.1 Desktop Win |
| [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) | **Alta** | Troca de agente causa silenciosamente nova conversa (regressão beta.2) | v2.2.1-beta.2 |
| [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) | **Média** | Índice de sessão dessincronizado com arquivos .session no disco (fantasma) | v2.2.1 Tauri Win |

### Bugs de UI/UX

| Issue | Severidade | Descrição | Plataforma |
|-------|------------|-----------|------------|
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | **Média** | Scheduled tasks frequentemente sem output; resultados ocultos em "thinking" | v2.2.1 |
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | **Média** | PDF blocks enviados incorretamente para endpoints multimodais (regressão do #7621) | Ambientes com multimodal |
| [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | **Baixa** | Working directory não persiste entre sessões | v2.2.1 Desktop Win |

### Regressões Detectadas

- **v2.2.1-beta.2:** Issue [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) indica regressão de comportamento na troca de agente (silencioso, cria nova conversa). Necessita hotfix.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Justificativa | Sinais de Roadmap |
|-------|---------|---------------|-------------------|
| [#7714](https://github.com/agentscope-ai/QwenPaw/issues/7714) | Permitir definir template Loop padrão customizável | Usuários frequentes de "目标/任务" precisam trocar manualmente em cada sessão | v2.3? |
| [#7711](https://github.com/agentscope-ai/QwenPaw/issues/7711) | Serply como web_search provider | Diversificação além de Tavily/AnySearch, opção BYOK | v2.2.2? (PR [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) já aberto) |
| [#7710](https://github.com/agentscope-ai/QwenPaw/issues/7710) | History groups para tool chats inter-agent | Automations aparecem em "Uncategorized" (confusão) | v2.3? |
| [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | Docs preview na direita com conversas na esquerda | Usuários querem dual-pane customizável | UX futuro |
| [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | Suporte a line breaks em input mobile (Android) | IME mobile tem apenas "Enter" (submit), não "Return" | v2.2.x? |

### Features em Progresso (PRs Abertos)

- **Hub multi-tenant:** PR [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) implementa bootstrap local de admin
- **Bot-manager plugin:** PR [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) centraliza gestão multi-canal
- **Atlas Cloud provider:** PR [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) adiciona novo provedor de modelos

### Sinais de Roadmap

1. **Multi-tenancy é prioritária:** A issue #7318 com 26 comentários confirma que Hub multi-tenant é direção clara para 2.3+.
2. **Context cost optimization:** Issues #7679 e #7709 indicam foco em gestão de contexto e token economy.
3. **Sub-agent model routing:** A feature request #4901 (per-task model selection) aguarda implementação formal.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Exemplos |
|-----|------------|----------|
| **Instabilidade de sessões** | Alta | Tasks não param (#7567), índice de sessão dessincronizado (#7698), configurações perdidas (#7708) |
| **UX mobile/desktop** | Média | Android line breaks (#7707), working directory não persiste (#7705), portal de deploy inacessível (#7177) |
| **Sub-agent reliability** | Média | Timeouts generalizados (#7678), model inheritance quebrado (#7676) |
| **Context blow-up** | Média | Loops longos consomem tokens excessivos (#7679), scheduled tasks sem output (#7709) |

### Cenários de Uso Reportados

1. **Usuários Windows Desktop:** Problemas recorrentes com configurações de ambiente (modelo, working directory, sub-agents). A experiência parece menos polida que a versão web.
2. **Power users (Loops):** Usuários avançados que dependem de "目标/任务" loops querem defaults customizáveis — sinal de adoção em workflows complexos.
3. **Multi-canal:** interest em gestão unificada de bots (WeChat, DingTalk, Telegram) — indica estratégia de distribuição enterprise.

### Indicadores de Satisfação

- **Release cycle saudável:** v2.2.1 publicada com verificação automática bem-sucedida.
- **Contribuições externas:** 6 PRs marcados `first-time-contributor` nas últimas 24h — comunidade ativa.
- **Adoção de plugins:** Plugin bot-manager (#7702) demonstra demanda por extensibilidade.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale

| Issue | Criado | Dias | Título | Prioridade |
|-------|--------|------|--------|------------|
| [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) | 2026-06-02 | ~101 | spawn_subagent per-task model selection | **Alta** |
| [#6313](https://github.com/agentscope-ai/QwenPaw/issues/6313) | — | — | *(Verificar existência)* | — |

> **Nota:** Issue #4901 está aberta há ~101 dias com apenas 3 comentários. Feature é diretamente relacionada a bugs reportados hoje (#7676, #7678). **Recomendação:** Priorizar implementação ou fornecer roadmap claro para a comunidade.

### PRs Abertos Há Tempo

| PR | Criado | Dias | Título | Status |
|----|--------|------|--------|--------|
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) | 2026-07-27 | ~47 | Atlas Cloud provider | Em review |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | 2026-08-07 | ~36 | Browser self-heal Playwright | Em review |

### Ações Recomendadas

1. **Curto prazo (esta semana):**
   - Investigar e corrigir regressão de v2.2.1-beta.2 (troca de agente, issue [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687))
   - Review do PR [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) (auto-heal Playwright — melhoria de robusteza)

2. **Médio prazo (próximas 2 semanas):**
   - Priorizar fix para tasks "paradas" mas ainda executando (#7567) — confiança do usuário
   - Roadmap claro para per-task model selection (#4901)
   - Avaliar PR [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) (Atlas

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-09-12

---

## 1. Panorama do Dia

O projeto ZeroClaw atravessa um dia de **alta atividade produtiva**, com 50 issues e 50 PRs atualizados nas últimas 24h, porém **sem novas releases**. Observa-se um ciclo intenso de desenvolvimento focado em duas frentes principais: (a) **estabilidade e correções críticas** — particularmente relacionados a estouros de stack no Windows e problemas de cache multimodal — e (b) **implementação faseada de segurança OIDC**, com uma cadeia de 9 PRs empilhados em estágios avançados. A equipe demonstra ritmo sustentável de merges, com 3 PRs fechados/merged e nenhum release, sugerindo foco em consolidação antes da próxima versão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em momento de preparação para a próxima versão, com diversas implementações OIDC em revisão e múltiplos bugs críticos em correção. A ausência de release é consistente com o padrão de consolidação observado em ciclos anteriores.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (3)

| PR | Descrição | Impacto |
|---|---|---|
| [#10786](https://github.com/zeroclaw-labs/zeroclaw/issues/10786) | **anthropic: dropping previous-turn thinking blocks rewrites cached history** | Correção de comportamento onde blocos de pensamento eram descartados indevidamente, causando reescrita de histórico. Closed. |
| [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753) | **session/new overflows a 2 MB stack on Windows** | Mitigação do estouro de stack identificado nos testes de Advisory Windows. Closed. |
| [#10747](https://github.com/zeroclaw-labs/zeroclaw/pull/10747) | **refactor(channels): build every channel's transcription manager one way** | Refatoração unificada do manager de transcrição para 8 canais nativos, eliminando cópia de código que gerou 4 bugs idênticos corrigidos serialmente (#9153, #10032, #10487, #10494). Open. |

### PRs em Destaque (Pipeline Ativo)

| PR | Descrição | Tamanho | Estágio |
|---|---|---|---|
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | **feat(security): browser PKCE e cross-surface enrollment API** (RFC #8289 stage 5) | XL | Revisão |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) | **refactor(security): retire Nevis/iam_policy** (RFC #8289 stage 6) | XL | Revisão |
| [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) | **feat(gateway): route-layer auth with principal consumption** (stage 5) | XL | Revisão |
| [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) | **feat(cli): browserless OIDC enrollment via device grant** (stage 5) | XL | Revisão |
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | **feat(security): private principal memory with storage-level isolation** (stage 4) | XL | Revisão |
| [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) | **feat(security): principal-owned sessions with predicated deletes** (stage 4) | XL | Revisão |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | **fix(config): resolve git subcommand past global options in risk classifier** | XL | Awaiting author |
| [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) | **feat(channels): add passive Telegram group context** | L | Awaiting author |
| [#10732](https://github.com/zeroclaw-labs/zeroclaw/pull/10732) | **fix(service): select daemon log by content, not existence** | M | Awaiting author |
| [#10748](https://github.com/zeroclaw-labs/zeroclaw/pull/10748) | **fix(channels): route every outbound HTTP through runtime proxy** | S | Open |

**Avanço significativo:** A cadeia de PRs OIDC (#8289) avança para estágios 5-6, consolidando autenticação, isolamento de memória por principal e enrollment browserless. Este é o marco de segurança mais substancial do ciclo atual.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Tipo |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | **[Tracker]: Maintainer decision queue for RFCs and design issues** | 15 | Meta/Processo |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | **RFC: Simplify RFC voting by removing mandatory discussion windows** | 9 | RFC |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | **[Bug]: batch Telegram media groups into one multimodal turn** | 8 | Bug |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | **[Bug]: RpcDispatcher::process_line stack guard 2% on Windows** | 6 | Bug |

### Análise dos Temas

1. **Processo de RFC (#8692, #10549):** A comunidade demonstra preocupação com a eficiência do processo de RFC. A proposta [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) busca eliminar períodos obrigatórios de discussão que, na prática, não geram mais reviews. O tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) mantém fila ativa de decisões pendentes — sinal de governança transparente.

2. **Telegram Multimodal (#5514):** Bug prioritário (P2) sobre agrupamento de mídias no Telegram. Usuários que enviam múltiplas imagens geram múltiplas requisições separadas ao LLM, fragmentando a experiência. Afeta diretamente a usabilidade de um canal central.

3. **Estabilidade Windows (#10734):** Testes de Advisory revelaram estouro de stack em `RpcDispatcher::process_line` com margem de apenas 2%. Embora não seja mandatório, indica dívida técnica que pode impactar deployments Windows.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (P1) — 7 novos/com активни

| Issue | Severidade | Título | Status | Risco |
|---|---|---|---|---|
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | S2 (degraded) | **Failed Code/ACP turn discards accepted prompt e tool exchanges** | Open | High |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | S2 (degraded) | **Notification lag cancels every running turn** | Open | High |
| [#10782](https://github.com/zeroclaw-labs/zeroclaw/issues/10782) | S2 (degraded) | **Channel reply-intent precheck discards LLM usage** | Open | High |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | S2 (degraded) | **Restore proactive token-budget context compaction** | Open | High |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | S2 (degraded) | **Multimodal image cap eviction rewrites earlier history** | Open | High |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | S2 (degraded) | **Thinking/effort request config flips and rewrites cached history** | Open | High |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | S2 (degraded) | **`zeroclaw service logs` prints nothing on macOS/Windows/OpenRC** | In Progress | Medium |

### Bugs Importantes (P2) — Padrão Observado

| Issue | Severidade | Título | Status | Risco |
|---|---|---|---|---|
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | S2 | **Single-candidate stream recovery ignores provider_retries** | Open | High |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | S2 | **Pre-output stream failure skips non-streaming fallback** | In Progress | High |
| [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | S3 | **OpenCode 429 retried with sub-second backoff instead of fail-fast** | Open | Medium |
| [#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757) | — | **Distinguish browser availability probe timeouts from missing CLI** | Open | Medium |

### Padrões Identificados

1. **Cache/history corruption:** Múltiplos bugs (#[10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778), [10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777), [10786](https://github.com/zeroclaw-labs/zeroclaw/issues/10786)) compartilham mecanismo de invalidação excessiva de cache em provedores multimodais (Anthropic). **Recomendação:** Consolidar investigação.

2. **Retry/backoff logic:** Bugs em #[10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) e #[10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) indicam inconsistência na política de retry entre provedores.

3. **Windows-specific issues:** Estouro de stack (#10734, #10753) indica diferença de comportamento entre plataformas que pode impactar confiabilidade.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Prioritárias em Discussão

| Issue | Título | Tipo | Prioridade | Sinais |
|---|---|---|---|---|
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | **Restore proactive token-budget context compaction** | Enhancement | P1 | v0.8.5 lacks proactive compaction; only message-count trim exists |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | **[Tracker] OIDC: canonical principals and inbound auth** | Tracker | P2 | Roadmap central; 9 PRs em pipeline |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | **Remove or implement inert context/history config keys** | Enhancement | P2 | Usuários configuram keys que não funcionam |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | **RFC: Simplify RFC voting** | RFC | — | Processo precisa de simplificação |
| [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) | **[Tracker]: Establish harness evaluation framework** | Tracker | P2 | Maturidade de benchmarks e CI |

### Sinais de Roadmap

- **Segurança OIDC como prioridade absoluta:** 9 PRs em estágios 2-6 da RFC #8289, coordenados por JordanTheJet. Próximo marco: browser PKCE + cross-surface enrollment.
- **Context management como dor crônica:** Issue [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) flagga ausência de compactação proativa de tokens como "degraded behavior". Indica prioridade para próxima versão.
- **Config UX:** Keys inertes (#10781) sugerem necessidade de limpeza de API ou implementação pendente.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues)

| Dor | Ocorrências | Issues Relacionados |
|---|---|---|
| **Session persistence/isolation confusa** | Múltiplas | [#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047), [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) |
| **ZeroCode ignora diretório de launch** | Crítica (P1) | [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) |
| **Config migration binary mismatch** | S2 - degraded | [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) |
| **Integrações page link slugify errado** | S3 - minor | [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) |
| **Memory authorship classification** | High risk | [#10754](https://github.com/zeroclaw-labs/zeroclaw/issues/10754) |
| **ZeroCode keystroke lag** | S2 - degraded | [#9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092) |
| **Service logs broken em non-Linux** | S2 - degraded | [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) |

### Cenários de Uso Problemáticos

1. **Agente CLI sem controle de diretório:** `zerocode` força workspace do agente como CWD, ignorando onde foi lançado. Bloqueia workflows de desenvolvedores que navegam entre diretórios.

2. **Multi-plataforma inconsistente:** Funcionalidades como `service logs` e testes de stack funcionam bem no Linux mas degradam em Windows/macOS. Fragmenta experiência do usuário.

3. **Cache multimodal imprevisível:** Quando usuários anexam imagens em sessões ACP, o cache de histórico é invalidado excessivamente, causando custos elevados e comportamento inconsistente entre provedores.

### Satisfação/Insatisfação

- **Satisfação:** O pipeline OIDC é bem estruturado e avançado, demonstrando maturidade em governança de segurança.
- **Insatisfação:** Bugs de cache (#10778, #10777, #10786) afetam custo e performance de sessões com imagens — caso de uso crescente. A ausência de context compaction proativa (#10780) gera desperdício de tokens.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Estagnadas

| Issue | Criado | Atualizado | Título | Prioridade |
|---|---|---|---|---|
| [#9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092) | 2026-07-15 | 2026-09-11 | **ZeroCode keystrokes lag em long sessions** | P2 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/issues/9746) | 2026-08-04 | 2026-09-11 | **Per-agent ownership scoping for session tools** | High |
| [#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) | 2026-07-28 | 2026-09-11 | **Map MCP tools/c

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*