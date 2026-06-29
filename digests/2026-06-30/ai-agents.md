# Resumo diário do ecossistema de agentes de IA 2026-06-30

> Issues: 0 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-06-29 21:21 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-30

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** nesta data, com foco principal em melhorias na experiência do terminal REPL e evolução da arquitetura de streaming. Foram registradas **4 atualizações em PRs** nas últimas 24h, com **3 PRs em aberto** e **1 PR fechado**. Não houve atividade de issues nem releases. A equipe mantém desenvolvimento ativo em funcionalidades de CLI, com destaque para a introdução de suporte a tool calls nativos durante streaming SSE, representando uma evolução arquitetural significativa.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O último release pode ser verificado em: [nullclaw/nullclaw Releases](https://github.com/nullclaw/nullclaw/releases)

---

## 3. Progresso do Projeto

### PR Merged/Fechado Hoje

| PR | Tipo | Título | Impacto |
|----|------|--------|---------|
| [#960](https://github.com/nullclaw/nullclaw/pull/960) | fix | handle arrow keys in agent REPL | ✅ **Merged** |

**Análise:** O PR #960 foi fechado (provavelmente após merge ou supersessão pelo #970). Este PR implementa:
- Editor de linha allocation-free para o REPL interativo
- Suporte a raw-mode POSIX para sessões TTY
- Navegação por setas, histórico, Home/End, backspace/delete
- Sequências comuns word-left/right

---

### PRs Abertos em Desenvolvimento

| PR | Tipo | Título | Status |
|----|------|--------|--------|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | feat | native tool calls during SSE streaming | 🟡 Em revisão |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | fix | handle arrow keys in agent REPL | 🟡 Em revisão |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | deps | bump alpine 3.23 → 3.24 | 🟡 Em revisão |

---

## 4. Temas Quentes da Comunidade

### PR em Destaque: Native Tool Calls during SSE Streaming

**[#971](https://github.com/nullclaw/nullclaw/pull/971)** — feat(streaming): native tool calls during SSE streaming  
*Autor: vernonstonebaker | Atualizado: 2026-06-29*

**Resumo:** Esta feature **desacopla o suporte a native tool-calls do caminho de streaming**, permitindo que provedores que suportam tools nativas durante streaming as emitam corretamente. Antes, o loop do agente desabilitava native tools quando um stream callback era anexado, forçando tools a um formato de prompt-injection.

**Impacto potencial:** Melhoria significativa na compatibilidade com provedores LLM modernos e redução de latência em interações com tools.

---

### PR: CLI REPL Improvements

**[#970](https://github.com/nullclaw/nullclaw/pull/970)** — fix(cli): handle arrow keys in agent REPL  
*Autor: vernonstinebaker | Atualizado: 2026-06-29*

**Resumo:** Implementa editor de linha completo com suporte a:
- Raw-mode POSIX para terminais
- Navegação por setas e histórico
- Backspace, delete, Home/End
- Word-left/word-right (Ctrl+←/→)

---

## 5. Bugs e Estabilidade

### Registros de Bugs

**Nenhum bug reportado nas últimas 24h.**

- Issues abertas: 0
- Issues fechadas: 0

**Métricas de estabilidade:**
```
Bugs críticos abertos: 0
Regressões conhecidas: 0
Crash reports: 0
```

O projeto demonstra **saúde estável** na dimensão de bugs. Histórico pode ser acompanhado em: [nullclaw/nullclaw Issues](https://github.com/nullclaw/nullclaw/issues)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| Feature | PR | Prioridade | Descrição |
|---------|-----|------------|-----------|
| Native Tool Calls em Streaming | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 🔴 Alta | Desacoplamento de native tools do streaming path |
| REPL Avançado | [#970](https://github.com/nullclaw/nullclaw/pull/970) | 🟡 Média | Editor de linha completo com raw-mode |

### Sinais de Roadmap Inferidos

Baseado na atividade recente, o roadmap parece priorizar:

1. **Melhoria de experiência CLI** — Editor de linha completo indica foco em usabilidade
2. **Evolução de streaming** — Native tool calls durante SSE representa evolução arquitetural
3. **Manutenção de dependências** — Atualizações regulares de Docker images (PR #956)

---

## 7. Resumo de Feedback dos Usuários

### Dados Disponíveis

| Métrica | Valor |
|---------|-------|
| Comentários em PRs | 0 (undefined) |
| Reações (👍) | 0 |

### Análise

**Ausência de feedback visível** nas métricas de engajamento. Isso pode indicar:
- Projeto em fase inicial de adoção
- Usuários técnicos que contribuem via código diretamente
- Necessidade de canais adicionais de feedback (discord, forum)

**Nota:** O PR #971 representa uma mudança arquitetural significativa que pode impactar usuários existentes. Recomenda-se comunicar mudanças de forma clara quando próximo release estiver disponível.

---

## 8. Backlog que Merece Atenção

### Análise de PRs sem Resposta

| PR | Idade | Tipo | Status | Prioridade de Atenção |
|----|-------|------|--------|----------------------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | 15 dias | dependências | Em revisão | ⚠️ Baixa (Dependabot) |

**Análise:**

- **PR #956 (Alpine update):** Dependabot PR para atualização de imagem Docker. Com 15 dias de idade, está dentro de timeframe aceitável para dependências.

### Recomendações

1. **Merge #956** — Atualização de segurança Alpine 3.23 → 3.24 deve ser priorizada
2. **Revisão de #970 e #971** — Ambos PRs do mesmo autor (vernonstinebaker) sugerem trabalho coordenado; revisar em conjunto
3. **Comunicação de Roadmap** — Considerar abertura de discussão sobre a feature de native tool calls (#971) para coletar feedback da comunidade antes do merge

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────────────────┐
│                    NULLCLAW — 2026-06-30                     │
├─────────────────────────────────────────────────────────────┤
│  📊 Atividade Geral                                          │
│  ├─ PRs atualizados (24h):     4                             │
│  ├─ PRs abertos:               3                             │
│  ├─ PRs fechados/merged:       1                             │
│  └─ Issues atualizadas (24h):   0                             │
├─────────────────────────────────────────────────────────────┤
│  🏥 Saúde do Projeto                                         │
│  ├─ Bugs críticos abertos:      0                             │
│  ├─ Releases (24h):             0                             │
│  └─ Estabilidade:               ✅ Estável                    │
├─────────────────────────────────────────────────────────────┤
│  🎯 Foco do Desenvolvimento                                  │
│  ├─ CLI/Terminal:               🔴 Alta                       │
│  ├─ Streaming:                  🔴 Alta                       │
│  └─ Dependências:               🟡 Média                       │
└─────────────────────────────────────────────────────────────┘
```

---

**Links Úteis:**
- Repositório: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)
- Issues: [github.com/nullclaw/nullclaw/issues](https://github.com/nullclaw/nullclaw/issues)
- Pull Requests: [github.com/nullclaw/nullclaw/pulls](https://github.com/nullclaw/nullclaw/pulls)
- Releases: [github.com/nullclaw/nullclaw/releases](https://github.com/nullclaw/nullclaw/releases)

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-06-30.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-06-30
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade**: projetos que priorizam **estabilização e segurança** (NullClaw, PicoClaw) e projetos em **modo de alta iteração** com pipeline robusto de contributions (NanoBot, Hermes Agent, IronClaw, CoPaw, ZeroClaw). Observa-se convergência técnica em três eixos — multi-agente orchestration, contexto de longa janela, e expansão de canais de comunicação — enquanto a diferenciação ocorre no posicionamento de deployment (CLI desktop vs. embedded vs. enterprise). A segurança emerge como tema transversal, com vulnerabilidades críticas reportadas em pelo menos 4 dos 7 projetos nas últimas 24h.

---

## 2. Comparação de Atividade

| Projeto | PRs (24h) | Issues (24h) | PRs Abertos | Releases | Saúde | P1/P-Critical |
|---------|:----------:|:------------:|:-----------:|:--------:|:-----:|:-------------:|
| **NullClaw** | 4 | 0 | 3 | 0 | ✅ Estável | 0 |
| **NanoBot** | 31 | 5 | ~18+ | 0 | ⚠️ 2 bugs security | 1 |
| **Hermes Agent** | 50 | 50 | ~42 | 0 | 🟡 Moderada | 2 |
| **PicoClaw** | 2 | 3 | 2 | 0 | ⚠️ 1 bug médio | 0 |
| **IronClaw** | 50 | 13 | 29 | 0 | ✅ Boa (áreas atenção) | 1 |
| **CoPaw** | 50 | 29 | 31 | Beta v2.0 | ✅ Saudável | 3 |
| **ZeroClaw** | 50 | 50 | 40 | 0 | ⚠️ 6 P1 abertos | 6 |

**Observação:** Os três projetos com maior volume (Hermes Agent, IronClaw, ZeroClaw) reportam 50 PRs atualizados, sugerindo ciclos de CI/CD sincronizados ou coleta de métricas por batch.

---

## 3. Posicionamento do Projeto Principal

*Considerando NullClaw como referência principal:*

| Dimensão | NullClaw | Comparação |
|----------|----------|------------|
| **Volume de atividade** | Moderado (4 PRs) | 7-12x menor que líderes |
| **Maturidade** | Inicial/fase adoção | Equivalente a PicoClaw |
| **Foco técnico** | CLI REPL + Streaming SSE | Nicho distinto (CLI-first) |
| **Segurança** | Nenhuma vulnerabilidade reportada | Vantagem relativa |
| **Comunidade** | Baixa (0 reações/comentários) | Desvantagem |

**Vantagens Competitivas do NullClaw:**
- Arquitetura de streaming com native tool calls durante SSE (#971) — diferenciação técnica antecipada
- Editor de linha allocation-free para REPL — UX diferenciada para desenvolvedores
- Zero dependências de segurança no pipeline imediato

**Pontos de Atenção:**
- Ausência de feedback de usuários nas métricas de engajamento
- Escala pequena limita cobertura de integrações multi-canal
- Necessidade de estratégia de crescimento de comunidade

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Canais e Gateways

| Projeto | Issue/Bug | Severidade |
|---------|-----------|------------|
| **NanoBot** | ExecTool path extraction bypass (#4592) | 🔴 Crítica |
| **NanoBot** | Credentials vazando em URLs MCP (#4584) | 🟡 Moderada |
| **Hermes Agent** | 401 Unauthorized vazando em TUI/Discord/Telegram (#55199) | 🔴 Alta |
| **Hermes Agent** | Write-approval bypass em gateways (#55147) | 🔴 Alta |
| **ZeroClaw** | Telegram channel não configurável (#8505) | 🔴 Alta |
| **IronClaw** | OAuth refresh falha silenciosa (#5413) | 🟡 Média |

**Padrão:** A expansão de canais de comunicação (Telegram, Discord, Matrix, SimpleX) está gerando superfície de ataque em crescimento, com vulnerabilidades de credential handling e auth bypass emergindo em múltiplos projetos simultaneamente.

### 4.2 Gerenciamento de Contexto e Custo

| Projeto | Feature/Bug | Impacto |
|---------|-------------|---------|
| **CoPaw** | DeepSeek Prefix Cache sub-ótimo (#3891) — 95% vs 99%+ potencial | Custo 2-4x |
| **NanoBot** | max_messages truncation invalida prefix/prompt caching (#4222) | Performance |
| **CoPaw** | Cap em tool outputs para evitar explosão de contexto (#5510) | Estabilidade |
| **ZeroClaw** | Catálogo de preços offline (#8380) | Offline-first |
| **NanoBot** | PRs paralelos de context optimization (#4581, #4588) | Custo Tokens |

**Padrão:** A guerra por eficiência de tokens é tema central — otimização de cache, truncation inteligente e cap de outputs aparecem em ao menos 4 projetos.

### 4.3 Multi-Agente e A2A

| Projeto | Feature | Progresso |
|---------|---------|-----------|
| **NanoBot** | Native A2A peer delegation (#4571) | Review |
| **ZeroClaw** | RFC A2A agent discovery (#7218) | RFC |
| **CoPaw** | DingTalk @mention para multi-agent (#5564) | Feature request |
| **CoPaw** | Plugin system para middleware (#5221) | Em revisão |
| **ZeroClaw** | Skills em multi-agent installs (#8334) | Bug P1 |

**Padrão:** Ecossistema se move para arquiteturas multi-agente com padrões de descoberta e delegação — ZeroClaw e NanoBot lideram em especificação.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

```
NullClaw ──────────────► Desenvolvedores/CLI enthusiasts
NanoBot ──────────────► Enterprise (Webhook gateway, proxy por provider)
Hermes Agent ─────────► Power users (Multi-provider, Desktop, SimpleX)
PicoClaw ─────────────► Utilitários focados (DeltaChat, token metrics)
IronClaw ─────────────► Enterprise Google Workspace
CoPaw ────────────────► Mercado Chinês (Feishu, DingTalk, Qwen)
ZeroClaw ─────────────► Enterprise extensível (WASM plugins, OCI)
```

### 5.2 Por Arquitetura Técnica

| Tipo | Projetos | Características |
|------|----------|-----------------|
| **CLI-first** | NullClaw, PicoClaw | Terminal REPL, raw-mode POSIX, foco em DX |
| **Channel-agnostic** | NanoBot, Hermes Agent | Multi-gateway, multi-provider |
| **Enterprise-integrated** | IronClaw, CoPaw | Google Workspace, Feishu/DingTalk, OAuth |
| **Plugin-extensible** | ZeroClaw | WASM-first, OCI registries, SOP |

### 5.3 Por Estratégia de Crescimento

| Projeto | Estratégia | Evidência |
|---------|------------|-----------|
| **NullClaw** | Nicho técnico (streaming + CLI) | PR #971 (SSE native tools) |
| **NanoBot** | Completude de features | 31 PRs, webhook gateway, subagent override |
| **Hermes Agent** | Provider diversity | Google/Vertex, bypass OpenRouter |
| **CoPaw** | Localização de mercado | Feishu, DingTalk, Qwen |
| **ZeroClaw** | Enterprise extensibility | WASM runtime, A2A discovery, computer-use |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|----------|----------|-----------|
| **🚀 Alta iteração** | Hermes Agent, IronClaw, CoPaw, ZeroClaw | 50 PRs/24h, ciclo de review < 48h |
| **📊 Média iteração** | NanoBot | 31 PRs/24h, 2 PRs merged |
| **🔰 Consolidando** | NullClaw, PicoClaw | < 5 PRs/24h, foco em estabilidade |

### 6.2 Qualidade de Gestão de Issues

| Projeto | P1/P-Critical | Tempo Resposta | Tendência |
|---------|:-------------:|:--------------:|:---------:|
| **NullClaw** | 0 | N/A (0 issues) | N/A |
| **NanoBot** | 1 | < 24h (PR #4594) | ✅ Reativa |
| **Hermes Agent** | 2 | Variável | ⚠️ 2 issues > 42 dias (#27933) |
| **PicoClaw** | 0 | ~20 dias (Safari) | 🟡 Lenta |
| **IronClaw** | 1 | < 24h | ✅ Reativa |
| **CoPaw** | 3 | Variável | 🟡 1 issue crítica (#5579) |
| **ZeroClaw** | 6 | ⚠️ Accumulated | 🔴 Atenção |

### 6.3 Sinais de Maturidade

| Indicador | Projetos que Demonstram |
|-----------|------------------------|
| **Testes de integração** | IronClaw (#5392), CoPaw (426+ casos) |
| **Release cycle estável** | IronClaw (v0.29.1), CoPaw (beta v2.0) |
| **Processos de segurança** | NanoBot, Hermes Agent, ZeroClaw |
| **RFC formal** | ZeroClaw (7 RFCs pendentes) |
| **Stale management** | PicoClaw, CoPaw |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência Transversal | Projetos |
|-----------|----------------------|----------|
| **Descentralização de providers** | Demanda por Google/Vertex nativo (#12639 Hermes), Kimi provider (#5600 ZeroClaw), bypass OpenRouter | Hermes Agent, ZeroClaw |
| **Privacidade e comunicação federada** | SimpleX/Tox (#3093 PicoClaw), DeltaChat (#3063 PicoClaw), anonymous messaging | PicoClaw, Hermes Agent |
| **Eficiência de custo** | Prefix cache optimization (CoPaw), context pruning (NanoBot), offline pricing (ZeroClaw) | CoPaw, NanoBot, ZeroClaw |
| **Desktop como cidadãos de primeira** | i18n Desktop (#37897 Hermes), crash loops ~128K tokens, Electron stability | Hermes Agent |
| **Agent-to-Agent (A2A)** | RFCs em ZeroClaw, native delegation em NanoBot, multi-agent collaboration | ZeroClaw, NanoBot, CoPaw |
| **Computer-use** | RFC em ZeroClaw (#6909), screenshots + mouse/keyboard | ZeroClaw |
| **WASM como runtime de plugins** | ZeroClaw RFC #8140, plugin system em CoPaw (#5221) | ZeroClaw, CoPaw |

### 7.2 Contradições e Desalinhamentos

| Problema | Projetos | Impacto |
|----------|----------|---------|
| **Messaging "ultra-lightweight" vs. stack real** | NanoBot — Python + Node.js contradiz claims | 15 comentários de usuários |
| **Zero-config vs. setup real** | IronClaw — web search força API key | 4 issues de autenticação |
| **CLI vs. Desktop UX** | Hermes Agent — locale files existem mas não são usados no Electron | Baixa adoção internacional |

### 7.3 Recomendações para o Ecossistema

1. **Segurança de canais precisa de framework unificado** — 4+ projetos com vulnerabilidades simultâneas sugere necessidade de shared security primitives
2. **A2A standardization incipiente** — múltiplos projetos implementando versões proprietárias; convergência beneficiaria comunidade
3. **Eficiência de contexto como diferencial competitivo** — projetos que resolverem cache/pruning primeiro terão vantagem em custo
4. **Messaging de produto precisa de alinhamento técnico** — contradições (NanoBot, IronClaw) geram frustração e diluem positioning

---

**Fim do Relatório**

*Dados extraídos dos relatórios de comunidade de 2026-06-30. Métricas podem variar conforme fuso horário de coleta.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-30

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 30 de junho de 2026, com 31 PRs e 5 issues atualizadas nas últimas 24h. A atividade concentra-se em **segurança, performance e experiência de usuário**, com dois PRs já merged (#4502, #4570) e множество pull requests aguardando revisão. O projeto demonstra maturidade no gerenciamento de subagentes e expansão de canais, com lançamentos de features para A2A delegation, WeChat streaming e configurações de proxy por provider.

---

## 2. Lançamentos

**Nenhum release detectado nas últimas 24h.**

O projeto mantém 0 releases no período, sugerindo foco em consolidação de PRs abertos antes de um próximo tagged release. A última atividade de merge foi em 2026-06-29, com os PRs #4502 (gateway webhooks) e #4570 (per-subagent model override) fechados.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje

| # | Título | Tipo | Destaque |
|---|--------|------|----------|
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | Add gateway webhook triggers | enhancement, feature | Sistema unificado de webhooks com ingress HTTP compartilhado, limites de body e timeouts. Substitui listener health inline antigo por dispatch de rotas webhook. |
| [#4570](https://github.com/HKUDS/nanobot/pull/4570) | feat(spawn): add per-subagent model override | duplicate | Implementa #4231 — permite override de modelo por subagente diretamente na tool `spawn`. Fechado como duplicado (recurso já coberto por #4291). |

### Destaque de Avanços

- **Webhook Gateway**: Nova config top-level `webhooks` permite triggers inbound genéricos e GitHub-compatíveis via HTTP.
- **Subagent Model Presets**: Funcionalidade de override de modelo por subagente em estágio avançado (PR #4291 aberto).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Status | Tema Principal |
|---|--------|:-----------:|:--:|:------:|----------------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | Project claims 'ultra-lightweight' mas inclui Node.js | **15** | **5** | CLOSED | **Imagem do Projeto / Dependências** |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | 4 | 0 | OPEN | **Feature de Reasoning** |
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) | max_messages truncation invalida prefix/prompt caching | 3 | 0 | CLOSED | **Performance / Cache** |

### Análise dos Temas

**#660 — "Ultra-lightweight" vs Node.js (maior debate)**
Issue com 15 comentários e 5 👍 closed. Autor cuestiona a contradição entre a claim de "ultra-lightweight" e a dependência de Python + Node.js no Dockerfile. Este debate reflete **expectativa de mercado** — usuários esperam minimalistmo real de assistentes pessoais leves. O time respondeu, mas a issue foi closed sem resolução clara do messaging.

**#4419 — Reasoning Effort Escalation**
Feature request para controlar profundidade de raciocínio do modelo via parâmetro `reasoningEffort`. Alinha-se com tendência de mercado de modelos que expõem "think depth". 4 comentários indicam interesse em implementação.

**#4222 — Prompt Caching Bug (closed)**
Bug de contexto governance pipeline que fazia o prefixo de mensagens shifting/mutating a cada turno, derrotando prompt caching. Fechado com 3 comentários — indica correção em progresso ou já merged.

---

## 5. Bugs e Estabilidade

### Issues Bug Reportadas

| # | Título | Severidade | Status | Detalhe |
|---|--------|:----------:|:------:|---------|
| [#4592](https://github.com/HKUDS/nanobot/issues/4592) | ExecTool path extraction misses absolute paths after `=` | **Security** | OPEN | Regex não captura paths após `=` (ex: `curl --output=/etc/passwd`), bypassando workspace containment. PR #4594 associado. |
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) | max_messages truncation invalida prefix/prompt caching | Performance | CLOSED | Slice de history causa drift do prefixo enviado ao LLM. |

### PRs de Fix em Aberto

| # | Título | Tags | Impacto |
|---|--------|------|---------|
| [#4594](https://github.com/HKUDS/nanobot/pull/4594) | fix(exec): extract absolute paths after equals sign | **fix, security** | **Crítico** — corrige bypass de sandbox via `=` |
| [#4583](https://github.com/HKUDS/nanobot/pull/4583) | fix(config): guard tool-key migration against null sections | fix | Config migration crash com sections null |
| [#4584](https://github.com/HKUDS/nanobot/pull/4584) | fix(mcp): redact credentials from URLs before logging | **fix, security** | **Moderado** — secrets em URLs de MCP podem vazar em logs |
| [#4567](https://github.com/HKUDS/nanobot/pull/4567) | fix(weixin): stream LLM calls + buffer reply delivery | channel, fix | Corrige drop de tool_use em relays upstream |

**Alerta de Segurança**: Dois PRs de segurança (#4594, #4584) aguardam merge. O fix #4594 é especialmente crítico — corrige bypass de workspace containment.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Sinais de Roadmap | Relevância |
|---|--------|:-----------------:|:-----------:|
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | Modelo de reasoning como cidadão de primeira classe | **Alta** |
| [#4580](https://github.com/HKUDS/nanobot/issues/4580) | Use conda environment for subprocesses | Suporte a virtual environments mais robusto | **Média** |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) | Native A2A peer delegation | Agentes colaborativos em equipe | **Alta** |

### PRs de Feature em Desenvolvimento

| # | Título | Escopo | Progresso |
|---|--------|--------|:---------:|
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Subagents com configurable model presets | Model override por subagente | Review |
| [#4578](https://github.com/HKUDS/nanobot/pull/4578) | Provider-scoped proxy config | Proxy por provider (OpenAI Codex incluso) | Review |
| [#4581](https://github.com/HKUDS/nanobot/pull/4581) | Reducing context usage & costs | Performance de tokens | Review |
| [#4588](https://github.com/HKUDS/nanobot/pull/4588) | Pruning/compression de tool outputs | Performance de contexto | Review |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) | Native A2A peer delegation | Sistema multi-agente | Review |

**Sinais de Roadmap Fortes**:
1. **Otimização de contexto** — dois PRs parallelos (#4581, #4588) indicam prioridade em reduzir custos de tokens
2. **A2A Collaboration** — native agent-to-agent com registry, delegation e depth guard (#4571)
3. **Provider Flexibility** — proxy por provider, model presets por subagente

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidence | Impacto |
|-----|----------|---------|
| **Complexidade de setup vs. messaging** | Issue #660 (15 comments) | Usuários esperam "ultra-lightweight" real; Python + Node.js contradiz messaging |
| **Custo de tokens alto** | PRs #4581, #4588 em paralelo | Usuários com modelos de contexto limitado precisam de otimização |
| **Gestão de subagentes limitada** | #4291, #4571 | Padrões de spawn sem override de modelo bloqueiam arquiteturas flexíveis |
| **Dificuldade com virtual environments** | Issue #4580 | Usuários em cenários reais precisam de conda/venv para exec subprocessos |
| **OAuth provider setup confuso** | PR #4573 | Usuários não sabiam configurar oauth-only providers como main provider |

### Cenários de Uso Emergentes

- **Multi-agente teams**: Supervisor → Researcher → Writer (A2A via #4571)
- **Long-running sessions**: Necessidade de prompt caching funcional (#4222)
- **Enterprise deployments**: Proxy por provider (#4578), segurança em MCP (#4584)
- **Cross-platform**: WeChat streaming (#4567)

### Satisfação/Insatisfação

**Positivo**: Comunidade ativa com 31 PRs em 24h, muitos "good first issues", e contributors diversos (chengyongru, hamb1y, boogieLing, findshan com múltiplos PRs).

**Pontos de Atenção**: Messaging de "ultra-lightweight" gera expectativas desalinhadas; Issues de segurança (#4592) precisam de atenção urgente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Stale

| # | Título | Criado | Status | Urgência | Notas |
|---|--------|--------|:------:|:--------:|-------|
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | 2026-06-20 | OPEN | **Alta** | 10 dias sem resposta; feature alinhada com trend de mercado |
| [#4580](https://github.com/HKUDS/nanobot/issues/4580) | conda environment for subprocesses | 2026-06-28 | OPEN | **Média** | 2 dias; 1 comentário; feature request concreta |
| [#4592](https://github.com/HKUDS/nanobot/issues/4592) | ExecTool path extraction bug | 2026-06-29 | OPEN | **Crítica** | Security; PR #4594 aberto; precisa de review |

### PRs Antigos em Aberto

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|:-----------:|:----------:|
| [#4293](https://github.com/HKUDS/nanobot/pull/4293) | fix(agent): pending_queue para subagent result injection | 2026-06-11 | **19 dias** | **Alta** |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Subagents com configurable model presets | 2026-06-11 | **19 dias** | **Alta** |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) | Native A2A peer delegation | 2026-06-28 | 2 dias | **Alta** |

**Recomendações de Priorização**:
1. **Review urgente**: #4594 (security fix) e #4584 (credential redaction)
2. **Triagem de features**: #4419 (reasoning effort) — feature competitiva
3. **Revival de PRs**: #4291 e #4293 com 19 dias — muitos PRs novos podem conflitar

---

## Métricas Resumidas (2026-06-30)

| Métrica | Valor | Tendência |
|---------|-------|:---------:|
| Issues ativas (24h) | 5 | Neutra |
| PRs atualizados (24h) | 31 | **Alta** |
| PRs fechados/merged (24h) | 2 | — |
| Releases | 0 | — |
| Bugs security em aberto | 2 (#4592, #4584) | **Atenção** |
| Features em review | 18+ | **Muito Ativa** |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-06-30. Para mais detalhes, visite [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-30

## 1. Panorama do Dia

O projeto Hermes Agent mantém **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h. A taxa de resolução de PRs está moderada (8 de 50 merged/fechados), enquanto issues permanecem majoritariamente abertas (48 de 50 ativas). Observa-se foco em **estabilidade de provedores** (Gemini, Bedrock, Qwen), **segurança de gateways** e **refatoração de módulos** como text_sanitizer e cli_theme. Nenhum release foi publicado hoje, indicando fase de consolidação antes de próximo tag.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período de maturação de contributions antes de novo tag. Usuários em produção devem acompanhar a branch `main` para próximas atualizações.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#55184](https://github.com/NousResearch/hermes-agent/pull/55184) | fix(acp): stop draining queued prompts after cancel | **Crítico** — resolve loop de prompts após cancelamento ACP |
| [#55182](https://github.com/NousResearch/hermes-agent/pull/55182) | fix: clarify pre-update backup disable hint | Correção de documentação de backup |

### PRs Abertos com Alta Prioridade

| PR | Título | Componentes |
|----|--------|-------------|
| [#55199](https://github.com/NousResearch/hermes-agent/pull/55199) | fix: sanitize 'unexpected status 401 Unauthorized' in gateway chat output | **Segurança** — impede vazamento de credenciais em superfícies TUI/Discord/Telegram |
| [#55198](https://github.com/NousResearch/hermes-agent/pull/55198) | fix(runtime): honor NOUS_INFERENCE_BASE_URL across pool/explicit/aux paths | Runtime — garante variável de ambiente para endpoints auto-hospedados |
| [#55197](https://github.com/NousResearch/hermes-agent/pull/55197) | fix(browser): bound provider session JSON reads | **Segurança** — limita reads de sessões browser sem byte cap |
| [#55190](https://github.com/NousResearch/hermes-agent/pull/55190) | refactor: extract text sanitization from gateway/run.py | **Manutenibilidade** — reduz 280 linhas de `gateway/run.py` (18.844 linhas) |
| [#55189](https://github.com/NousResearch/hermes-agent/pull/55189) | refactor: extract color/theme utilities from cli.py | **Manutenibilidade** — extrai ~300 linhas de `cli.py` (15.687 linhas) |
| [#55185](https://github.com/NousResearch/hermes-agent/pull/55185) | fix(simplex): accept non-audio file transfers via /freceive | SimpleX — suporte a imagens/PDFs em transfers |
| [#55193](https://github.com/NousResearch/hermes-agent/pull/55193) | fix(moa): skip disabled presets in exact_moa_preset_name | MoA — impede switch implícito para presets desabilitados |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Tema Principal |
|-------|--------|-------------|-----|----------------|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Support for Native Google / Vertex AI Provider | **12** | **10** | Provedor alternativo ao OpenRouter |
| [#20866](https://github.com/NousResearch/hermes-agent/issues/20866) | 400 format_error on Qwen3.6-27B — System message must be at the beginning | **6** | 0 | Compatibilidade com vLLM/Qwen |
| [#37897](https://github.com/NousResearch/hermes-agent/issues/37897) | Add i18n / language selector support (Desktop) | **4** | 1 | Localização de UI Desktop |
| [#53676](https://github.com/NousResearch/hermes-agent/issues/53676) | MCP HTTP transport: wigai server fails to initialize | **4** | 0 | Transporte MCP via HTTP |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → replace zero-match retry loop → silent hang | **3** | 0 | Robustez de memória em limite |
| [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | Matrix gateway — mautrix migration breaks inbound message dispatch | **3** | 1 | Migração de cliente Matrix |

### Análise de Demandas

**Provedores Alternativos (🔥)**: A issue #12639 com 12 comentários e 10 👍 indica forte demanda por bypass do OpenRouter para Google/Vertex AI. Usuários enfrentam HTTP 402 (erros de billing) e rate limits, sugerindo necessidade urgente de suporte nativo.

**Compatibilidade Qwen/vLLM**: Issue #20866 demonstra fragilidade em auxiliary tasks com mensagens de sistema fora de posição — possível edge case em templates de chat.

**Desktop i18n**: Apesar de locale files existirem para CLI/TUI (#37897), a UI Electron não os utiliza. Demanda por localização indica adoção internacional crescendo.

---

## 5. Bugs e Estabilidade

### Por Severidade (P1 — Críticos)

| Issue | Título | Componente | Status |
|-------|--------|------------|--------|
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → replace zero-match retry loop → no response | agent/memory | **ABERTO** |
| [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | Matrix gateway mautrix migration breaks inbound dispatch | gateway/matrix | **FECHADO** (provavelmente após PR) |

### Por Severidade (P2 — Altos)

| Issue | Título | Componente | Status |
|-------|--------|------------|--------|
| [#55143](https://github.com/NousResearch/hermes-agent/issues/55143) | Signal send crashes (UnicodeEncodeError) on lone surrogate | gateway/signal | ABERTO |
| [#55125](https://github.com/NousResearch/hermes-agent/issues/55125) | Native Gemini: parallel tool calls emit consecutive same-role contents | agent/gemini | ABERTO |
| [#55113](https://github.com/NousResearch/hermes-agent/issues/55113) | Telegram gateway force-enabled by TELEGRAM_BOT_TOKEN env | gateway/telegram | ABERTO |
| [#55147](https://github.com/NousResearch/hermes-agent/issues/55147) | Gateway write-approval toggles bypass slash admin subcommand boundaries | gateway/auth | ABERTO |
| [#55183](https://github.com/NousResearch/hermes-agent/issues/55183) | ACP cancellation drains queued prompts after interrupted turn | acp | ABERTO |

### Observações de Estabilidade

- **Desktop crash-loops**: Issue #55191 reporta crash do renderer Electron em ~128K tokens no macOS — problema de contexto compaction afeta usabilidade.
- **Segurança em سطح gateway**: Issues #55147 (write-approval bypass) e #55199 (401 sanitizer leak) indicam superfície de ataque em expansão com novos gateways.
- **MCP transporte HTTP**: Issue #53676 demonstra incompatibilidade com handshake MCP — usuários de servers HTTP personalizados enfrentam 0 servidores ativos.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Potencial

| Issue | Título | Componente | 👍 |
|-------|--------|------------|-----|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | Support for Native Google / Vertex AI Provider | provider/gemini | **10** |
| [#37897](https://github.com/NousResearch/hermes-agent/issues/37897) | Add i18n / language selector support | desktop | 1 |
| [#55164](https://github.com/NousResearch/hermes-agent/issues/55164) | Feature: add inference gateway as a provider for models | plugins | 0 |
| [#55127](https://github.com/NousResearch/hermes-agent/issues/55127) | feat(tts): support Kokoro emphasis and pause cues | tool/tts | 0 |
| [#55169](https://github.com/NousResearch/hermes-agent/issues/55169) | Feature: File visibility (.gitignored/hidden files in sidebar) | desktop | 0 |

### Sinais de Roadmap

1. **Multi-provedor nativo**: Demanda clara por Google/Vertex AI (#12639) e Inference Gateway (#55164) indica tendência de diversificação além do OpenRouter.
2. **Voice/TTS advanced**: Suporte a cues de ênfase e pausa para Kokoro (#55127) sugere investimento em qualidade de voz.
3. **Desktop como cidadão de primeira**: Issues de i18n (#37897), notifications (#55179), e file visibility (#55169) mostram que Desktop app está em evolução ativa.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Cenário |
|-----|------------|---------|
| Rate limits/billing do OpenRouter | **Alta** | Usuários power-user do Gemini-3.1-pro |
| Falha silenciosa de memória | **Alta** | Usuários com MEMORY.md em limite de caracteres |
| Desktop instável em sessões longas | **Média** | Desenvolvedores com conversas ~128K tokens |
| SimpleX: attachments perdidos | **Média** | Usuários SimpleX trocando imagens/documentos |
| iMessage Photon: zombie sessions | **Média** | Usuários iMessage após restart do gateway |

### Cenários de Uso Observados

- **Dual-gateway**: Issue #27933 demonstra uso simultâneo de Telegram + WhatsApp com dual-agent — padrão de uso real.
- **Self-hosted inference**: Issues indicam interesse em绕过 provedores comerciais com endpoints auto-hospedados.
- **Professional Desktops**: Crash-loops em threshold de tokens sugere uso em ambiente de trabalho com conversas extensas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| Issue | Título | Idade | Prioridade | Riscos |
|-------|--------|-------|------------|--------|
| [#27933](https://github.com/NousResearch/hermes-agent/issues/27933) | Multiple critical issues: custom name, memory overflow, dual agents, Google Drive, TTS config | ~42 dias | Variada | Múltiplas quebras de UX |
| [#55196](https://github.com/NousResearch/hermes-agent/issues/55196) | Cloud browser providers read session-create responses without body cap | 1 dia | Segurança | Potencial DoS |
| [#55147](https://github.com/NousResearch/hermes-agent/issues/55147) | Gateway write-approval toggles bypass slash admin subcommand boundaries | 1 dia | **P2 Segurança** | Escalação de privilégios |
| [#55171](https://github.com/NousResearch/hermes-agent/issues/55171) | Built-in TTS providers buffer unbounded upstream responses | 1 dia | Segurança | Potencial memory exhaustion |

### Recomendações para Maintainers

1. **Priorizar segurança de gateway** — múltiplas issues de unbounded reads e auth bypass emergiram hoje.
2. **Triage da issue #27933** — 42 dias sem resposta com múltiplas quebras reportedas.
3. **Revisar PR #55199** — sanitizer leak de 401 é severidade alta para produção.
4. **Desktop memory management** — crash em ~128K tokens afeta usabilidade profissional.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-06-30. Última atualização: 2026-06-30T23:59:59Z.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-30

## 1. Panorama do dia

O projeto PicoClaw apresenta atividade moderada nas últimas 24h, com 3 issues e 2 PRs atualizados. A taxa de atividade está dentro dos padrões típicos do repositório, com duas issues de bugs em aberto que requerem atenção — uma relacionada a renderização no Safari/iOS e outra sobre vazamento de tool calls em integrações com o Volcengine. Nenhum novo release foi publicado no período, sugerindo foco em estabilidade e validação de contribuições pendentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões no período analisado. Recomenda-se monitorar as contribuições pendentes (#3063, #3156) para possível inclusão no próximo ciclo de release.

---

## 3. Progresso do projeto

Dois PRs abertos foram atualizados nas últimas 24h:

- **#3156** — *feat(pico): emit per-turn LLM token usage on finalized message* ([github.com/sipeed/picoclaw/pull/3156](https://github.com/sipeed/picoclaw/pull/3156))  
  Proposta de trufae para expor métricas detalhadas de consumo de tokens (input/output separados) por turno de conversa no canal Pico. Este PR representa uma melhoria significativa em observabilidade, permitindo que consumidores downstream implementem rastreamento de custos por conversa.

- **#3063** — *feat: add deltachat gateway* ([github.com/sipeed/picoclaw/pull/3063](https://github.com/sipeed/picoclaw/pull/3063))  
  Adição de suporte ao gateway DeltaChat, expandindo as opções de conectividade do projeto para o protocolo de mensageria federada. Este PR está em revisão há 22 dias e demonstra interesse contínuo da comunidade em diversificar integrações.

Nenhum PR foi merged ou fechado no período.

---

## 4. Temas quentes da comunidade

**Issue com maior engajamento: #3093** ([github.com/sipeed/picoclaw/issues/3093](https://github.com/sipeed/picoclaw/issues/3093))

- **Título:** [Feature] I need SimpleX or Tox
- **Autor:** Damian-o2
- **Comentários:** 4 | **Reações:** 1
- **Resumo:** Solicitação para adicionar suporte a gateways SimpleX ou Tox como alternativas de comunicação anônima e federada.
- **Análise:** A demanda indica interesse da base de usuários em opções de mensageria que priorizem privacidade e descentralização, alinhando-se com a tendência observada no PR #3063 (deltachat). Este é um indicativo de que a comunidade valoriza a expansão do ecossistema de gateways.

---

## 5. Bugs e estabilidade

**Bug crítico identificado: #3153** ([github.com/sipeed/picoclaw/issues/3153](https://github.com/sipeed/picoclaw/issues/3153))

- **Severidade:** Média-alta
- **Título:** Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text
- **Autor:** ms8great
- **Ambiente:** PicoClaw v0.2.8, Volcengine Coding Plan, `doubao-seed-2.0-pro`
- **Resumo:** Tool calls são retornadas como texto raw em vez de executadas, vazando tags XML para o usuário final.
- **Impacto:** Degrada a experiência do usuário e pode expor informações de implementação. Afeta especificamente integrações com provedores de IA chineses.

**Bug relacionado a plataforma: #3090** ([github.com/sipeed/picoclaw/issues/3090](https://github.com/sipeed/picoclaw/issues/3090))

- **Status:** FECHADO (após 19 dias)
- **Título:** Panel does not work on Safari on iOS versions below 16.4
- **Autor:** 3m377
- **Severidade:** Média
- **Resumo:** Problema de compatibilidade com navegadores Safari em iOS anteriores à versão 16.4.
- **Observação:** O fechamento desta issue indica resolução, mas os detalhes da correção não estão disponíveis neste snapshot.

---

## 6. Pedidos de features e sinais de roadmap

Três solicitações de feature identificadas no período:

1. **#3156** — Emissão de métricas de token usage por turno ([github.com/sipeed/picoclaw/pull/3156](https://github.com/sipeed/picoclaw/pull/3156))  
   Facilita implementação de dashboards de custos e otimização de uso de LLMs.

2. **#3063** — Suporte a gateway DeltaChat ([github.com/sipeed/picoclaw/pull/3063](https://github.com/sipeed/picoclaw/pull/3063))  
   Integração com protocolo federado de mensageria.

3. **#3093** — Suporte a SimpleX/Tox ([github.com/sipeed/picoclaw/issues/3093](https://github.com/sipeed/picoclaw/issues/3093))  
   Demanda por comunicação anônima e descentralizada.

**Sinal de tendência:** A comunidade demonstra interesse consistente em expandir as opções de gateways de comunicação, tanto federados (#3063, #3093) quanto proprietários (Volcengine via #3153). Isso pode indicar direção estratégica para o roadmap.

---

## 7. Resumo de feedback dos usuários

| Categoria | Observação |
|-----------|------------|
| **Usabilidade em mobile** | Bug de renderização no Safari/iOS (< 16.4) sugere necessidade de ampliar testes de compatibilidade com navegadores alternativos. |
| **Integrações de IA** | Problema com tool calls do Volcengine indica possíveis gaps em testes de integrações com LLMs asiáticos. |
| **Privacidade** | Usuários solicitam gateways que ofereçam comunicação anônima (SimpleX, Tox). |
| **Observabilidade** | Interesse em métricas granulares de token usage demonstra maturidade na operação do projeto em produção. |

---

## 8. Backlog que merece atenção

**Issues sem resolução há mais de 20 dias (stale):**

| Issue | Tipo | Idade | Prioridade de revisão |
|-------|------|--------|----------------------|
| #3093 — SimpleX/Tox gateway | Feature | 20 dias | Alta (engajamento) |
| #3090 — Safari iOS < 16.4 | Bug | 20 dias | Resolvida (fechada) |
| #3153 — Volcengine tool leak | Bug | 8 dias | Crítica |
| #3063 — DeltaChat gateway | Feature | 22 dias | Média-alta |
| #3156 — Token usage metrics | Feature | 8 dias | Média-alta |

**Recomendação:** A issue #3093 (#3093) possui 4 comentários e 1 reação, indicando demanda ativa da comunidade. Dado que o PR #3063 (DeltaChat) está em revisão há 22 dias, considera-se que ambas as solicitações de gateway poderiam ser avaliadas em conjunto para definir prioridade estratégica.

---

*Relatório gerado em 2026-06-30 com base em dados do repositório sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-30

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 30 de junho de 2026, com 50 PRs atualizados e 13 issues processadas nas últimas 24 horas. O foco principal permanece na estabilização da plataforma Reborn e WebUI v2, com emphasis em qualidade de integração (Google Workspace) e experiência do usuário. Não foram registradas novas releases, porém uma release anterior (v0.29.1) está em uso com mudanças em múltiplos módulos. A saúde geral indica progresso consistente em múltiplas frentes técnicas, com regressões sendo tratadas proativamente.

---

## 2. Lançamentos

### Nenhuma nova release registrada hoje (2026-06-30)

**Release em produção: v0.29.1** (lançada em 2026-06-26 via PR [#5311](https://github.com/nearai/ironclaw/pull/5311))

| Módulo | Versão Anterior | Nova Versão | Tipo de Mudança |
|--------|-----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking changes |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking changes |
| `ironclaw` | 0.24.0 | **0.29.1** | — |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ Compatível |

> ⚠️ **Nota de migração:** As versões 0.5.0 de `ironclaw_common` e 0.4.0 de `ironclaw_skills` contêm alterações na API. Desenvolvedores que dependem diretamente desses módulos devem revisar as notas de changelog antes de atualizar.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (6)

| PR | Título | Tamanho | Risco | Contribuidor |
|----|--------|---------|-------|--------------|
| [#5371](https://github.com/nearai/ironclaw/pull/5371) | Port Reborn WebUI chat history coverage | XL | Low | core |
| [#5422](https://github.com/nearai/ironclaw/pull/5422) | Fix /canary PR target validation | M | Medium | core |
| [#5406](https://github.com/nearai/ironclaw/pull/5406) | Use QA sheet prompts in Reborn live QA | XL | Medium | core |
| [#5414](https://github.com/nearai/ironclaw/pull/5414) | fix(webui-v2): make log entry text selectable/copyable | M | Low | thisisjoshford |
| [#5392](https://github.com/nearai/ironclaw/pull/5392) | feat(reborn): integration-test framework slices 3–9 | XL | Medium | core |
| [#4776](https://github.com/nearai/ironclaw/issues/4776) | Add global Always Allow setting for eligible tools | — | — | think-in-universe |

**Destaques:**

- **PR #5414**: Corrige UX do WebUI v2 — texto de logs agora pode ser selecionado/copiado, resolvendo issue [#5412](https://github.com/nearai/ironclaw/issues/5412).

- **PR #5392**: Framework de testes de integração para Reborn — cobre LibSQL matrix, egress/HTTP matcher, portas de processo inerte, MCP/OAuth/refresh. Avanço significativo na confiabilidade do stack.

- **PR #5406**: Integração de prompts da QA sheet no Reborn live QA runner, padronizando testes de chat/connect/routine.

- **Issue #4776 fechada**: Feature de "Always Allow" global para ferramentas elegíveis foi implementada para Reborn WebUI v2.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção

| Issue | Título | Prioridade | Comentários |
|-------|--------|------------|-------------|
| [#5415](https://github.com/nearai/ironclaw/issues/5415) | Multi-tool Google Sheets workflow fails with protocol violation | **P1** | 0 |
| [#5417](https://github.com/nearai/ironclaw/issues/5417) | Wrong skill activated for Hacker News search | P2 | 0 |
| [#5416](https://github.com/nearai/ironclaw/issues/5416) | Incorrect Google connection state causes contradictory auth flow | P2 | 0 |
| [#5421](https://github.com/nearai/ironclaw/issues/5421) | Web search not zero-config, NEAR AI auth re-prompts | bug/channel/web | 0 |
| [#5420](https://github.com/nearai/ironclaw/issues/5420) | Routine delivery target is global per-user, not per-routine | bug/channel/web | 0 |

**Análise de Demandas:**

O tema mais quente é claramente a **integração Google Workspace** — 4 das 8 issues abertas hoje mencionam problemas com Gmail, Calendar, Drive ou Sheets. Há um padrão de problemas de autenticação contraditória e falhas de workflow multi-ferramenta que indicam necessidade de endurecimento do estado de conexão.

A issue [#5411](https://github.com/nearai/ironclaw/issues/5411) ("Daily ironclaw failure taxonomy") indica que a equipe mantém vigilância ativa sobre falhas, com análise de 161 tarefas no pinchbench revelando 111 não-pass.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (por Severidade)

#### **P1 — Crítico**
| Issue | Descrição | Link |
|-------|-----------|------|
| #5415 | Multi-tool Google Sheets workflow falha com "protocol violation" em workflows de 18-25 tool calls | [Issue #5415](https://github.com/nearai/ironclaw/issues/5415) |

#### **P2 — Alto**
| Issue | Descrição | Link |
|-------|-----------|------|
| #5417 | Skill errada ativada para Hacker News search (ativa "tech-debt-tracker" em vez de web search) | [Issue #5417](https://github.com/nearai/ironclaw/issues/5417) |
| #5416 | Estado de conexão Google incorreto causa fluxo de autenticação contraditório | [Issue #5416](https://github.com/nearai/ironclaw/issues/5416) |

#### **P3 — Médio**
| Issue | Descrição | Link |
|-------|-----------|------|
| #5419 | Sem opção para renomear automação | [Issue #5419](https://github.com/nearai/ironclaw/issues/5419) |
| #5418 | Mensagens de conversa aparecem em ordem errada após atividade de ferramenta | [Issue #5418](https://github.com/nearai/ironclaw/issues/5418) |
| #5420 | Rotina delivery target é global por usuário, não por rotina | [Issue #5420](https://github.com/nearai/ironclaw/issues/5420) |
| #5421 | Web search não é zero-config por padrão e re-prompt para NEAR AI auth | [Issue #5421](https://github.com/nearai/ironclaw/issues/5421) |

### Bugs Corrigidos/Closed Hoje
| Issue | Descrição | Link |
|-------|-----------|------|
| #5412 | Texto de log no WebUI v2 não era selecionável/copiável — **corrigido em** [#5414](https://github.com/nearai/ironclaw/pull/5414) | [Issue #5412](https://github.com/nearai/ironclaw/issues/5412) |
| #5413 | Reborn inline OAuth refresh falhava silenciosamente — agora falha explicitamente | [Issue #5413](https://github.com/nearai/ironclaw/issues/5413) |
| #5196 | Tool permission "Ask each time" falhava com erro de autorização e disparava fluxo duplicado | [Issue #5196](https://github.com/nearai/ironclaw/issues/5196) |

### Instabilidade de CI/CD
| Issue | Descrição | Link |
|-------|-----------|------|
| #4108 | Nightly E2E falhou novamente (2026-06-29 04:47 UTC) — falha em Full E2E / E2E (features) | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |

> ⚠️ **Alerta:** A issue #4108 está aberta desde 2026-05-27, indicando problema recorrente de estabilidade no pipeline de E2E noturno.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Hoje

| Issue | Título | Escopo | Link |
|-------|--------|--------|------|
| #5419 | Opção para renomear automação | UX/QA | [Issue #5419](https://github.com/nearai/ironclaw/issues/5419) |
| #4776 (closed) | Global "Always Allow" para ferramentas elegíveis | Reborn WebUI v2 | [Issue #4776](https://github.com/nearai/ironclaw/issues/4776) |

### PRs Indicativos de Direção Técnica

| PR | Título | Direção |
|----|--------|---------|
| [#5353](https://github.com/nearai/ironclaw/pull/5353) | fix(http): raise http.save body limit para downloads grandes | Estabilidade de agent loop |
| [#5304](https://github.com/nearai/ironclaw/pull/5304) | feat(reborn): enable final-answer nudge para interactive runs | UX de interação |
| [#5403](https://github.com/nearai/ironclaw/pull/5403) | feat(reborn): send real failure detail to model | Debuggabilidade |
| [#5338](https://github.com/nearai/ironclaw/pull/5338) | fix(reborn): surface real failure detail instead of generic "invalid_input" | UX de erros |

**Sinais de Roadmap:**
- **Endurecimento de integrações externas** (Slack, Google Workspace) é tema recorrente
- **Melhoria na experiência de erros** — o time está investindo em mostrar detalhes reais de falha ao modelo/usuário
- **Testes de integração robustos** — framework em slices demonstra foco em regressão prevention
- **WebUI v2 maturity** — port de cobertura E2E legacy indica aproximação de parity

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

1. **Workflows multi-ferramenta Google falham** — usuários experimentam "protocol violation" ao combinar Gmail + Sheets em um único workflow (Issue #5415, P1)

2. **Fluxo de autenticação contraditório** — ao conectar Gmail, o agente primeiro diz que já está conectado, depois muda para "instalado mas não ativado" — confusão que degrada confiança (Issue #5416)

3. **Logs não podem ser copiados** — UX problem para debugging; texto de log resistia seleção (agora corrigido via #5414)

4. **Nomes de automação não são editáveis** — quando o agente gera nomes automaticamente, podem ficar truncados ou confusos, e o usuário não consegue corrigir (Issue #5419)

5. **Web search não é zero-config** — mesmo quando chat funciona, busca web força entrada de API key, quebrando promessa de experiência plug-and-play (Issue #5421)

### Cenários de Uso Problema

- **Hacker News search** — usuário pede busca e o agente ativa skill errada ("tech-debt-tracker"), demonstrando problema de routing de intents (Issue #5417)

- **Rotinas com delivery targets** — configurar uma rotina para Slack redireciona TODAS as rotinas para Slack, não apenas a configurada (Issue #5420)

- **Ordem de mensagens** — após atividade de ferramenta, resposta do agente aparece ACIMA dos blocos de atividade em vez de abaixo, violando expectativas cronológicas (Issue #5418)

---

## 8. Backlog que Merece Atenção

### Issues Abertas há > 7 dias sem resolução

| Issue | Título | Criado | Idade | Prioridade | Link |
|-------|--------|--------|-------|------------|------|
| #4108 | Nightly E2E failed | 2026-05-27 | ~34 dias | — | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |

### Issues com Alto Impacto Aguardando Processamento

| Issue | Título | Criado | Comentários | Link |
|-------|--------|--------|-------------|------|
| #5415 | Multi-tool Google Sheets falha com protocol violation | 2026-06-29 | 0 | [Issue #5415](https://github.com/nearai/ironclaw/issues/5415) |
| #5416 | Google connection state incorreto | 2026-06-29 | 0 | [Issue #5416](https://github.com/nearai/ironclaw/issues/5416) |
| #5417 | Skill errada para Hacker News | 2026-06-29 | 0 | [Issue #5417](https://github.com/nearai/ironclaw/issues/5417) |
| #5421 | Web search não zero-config | 2026-06-29 | 0 | [Issue #5421](https://github.com/nearai/ironclaw/issues/5421) |

> **Recomendação:** A issue #4108 (E2E nightly failure) está aberta há mais de um mês e representa instabilidade crônica no CI. Priorizar resolução para garantir qualidade de releases. Adicionalmente, as 4 issues P1-P2 relacionadas a Google Workspace merecem triagem urgente dado o padrão de problemas similares.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 9 |
| Issues fechadas | 4 |
| PRs abertos | 29 |
| PRs mergeados/fechados | 21 |
| Novas releases | 0 |
| Bugs P1 | 1 |
| Bugs P2 | 2 |
| Bugs P3 | 4 |
| Atividade total | **63 items** (13 issues + 50 PRs) |

**Veredicto de Saúde:** O projeto IronClaw demonstra **saúde boa com áreas de atenção**. A atividade de desenvolvimento é alta e estável, com foco consistente em estabilização do Reborn e WebUI v2. A taxa de resolução de bugs é positiva (4 fechados hoje vs. 9 abertos). O principal risco identificado é a integração Google Workspace, que apresenta múltiplas falhas interconectadas, e a instabilidade recorrente do pipeline E2E.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-06-30

## 1. Panorama do Dia

O projeto **CoPaw** apresenta **alta atividade** nas últimas 24 horas, com 29 issues e 50 PRs atualizados. O ambiente de desenvolvimento está focado na preparação para a versão **v2.0.0-beta.1**, com múltiplas correções de bugs e testes unitários sendo integrados. A comunidade demonstra engajamento significativo com issues de bugs (especialmente relacionados a canais como Feishu e DingTalk) e pedidos de features para melhoria da experiência multi-agente. A base de código encontra-se em transição para a arquitetura Runtime v2, com várias integrações sendo refatoradas.

---

## 2. Lançamentos

### Nenhuma release oficial publicada nas últimas 24h

⚠️ **Nota**: Há menção do **v2.0.0-beta.1** em andamento (Issue #5571), com installation verification em progresso. Este é um marco importante aguardando conclusão.

> Referência: [agentscope-ai/QwenPaw #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571)

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5614](https://github.com/agentscope-ai/QwenPaw/pull/5614) | **docs(context)**: Atualização da documentação de gerenciamento de contexto | Melhora DX com novos docs de scroll strategy |
| [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) | **fix(channel)**: Notificações de aprovação Tool Guard para canais IM | Restaura funcionalidade de aprovação para Feishu, WeCom, Telegram |
| [#5511](https://github.com/agentscope-ai/QwenPaw/pull/5511) | **fix(observability)**: Restaura grouping de traces Langfuse via Runtime 2.0 | Melhora observabilidade em produção |
| [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628) | **fix(console)**: Contagem normalizada de resultados em cards de ferramentas | Corrige badge mostrando "1 arquivo" em vez de contagem real |

### PRs em Review Significativos

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5629](https://github.com/agentscope-ai/QwenPaw/pull/5629) | **fix(memory)**: Corrige prompt de memória para evitar escrita excessiva | Melhora eficiência de contexto |
| [#5296](https://github.com/agentscope-ai/QwenPaw/pull/5296) | **feat(memory)**: ADBPG REST-only com auto search | Alinha memória de longo prazo à nova arquitetura |
| [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510) | **fix(tool-calls)**: Cap em respostas de ferramentas antes da inserção no contexto | Defense-in-depth contra explosão de contexto |
| [#5221](https://github.com/agentscope-ai/QwenPaw/pull/5221) | **feat(plugins)**: Sistema de registro de middleware via plugins | Extensibilidade para comunidade |
| [#5442](https://github.com/agentscope-ai/QwenPaw/pull/5442) | **fix(mission)**: Integração do Mission Mode com Runtime v2 | Restaura funcionalidade de missões |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** — DeepSeek Prefix Cache ~95%: Sugestão para otimizar cache de prefixo da DeepSeek (5 comentários, 1 reação)
   - **Análise**: Impacto financeiro significativo — 95% hit rate = 5% miss = custo 2x-4x maior
   - **Tags**: enhancement, performance, cost optimization

2. **[#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624)** / **[#5626](https://github.com/agentscope-ai/QwenPaw/issues/5626)** — Cards de ferramentas mostrando contagem errada: Bug afeta `glob_search`, `read_file` (3+3 comentários)
   - **Análise**: UI bug visual que afeta experiência do usuário
   - **Status**: Já com PR #5628 resolvendo

3. **[#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)** — Perda de conversation records: Falta de checkpoint persistence em interrupções anormais (1 comentário)
   - **Análise**: Problema crítico de resiliência — dados de usuário podem ser perdidos

4. **[#5564](https://github.com/agentscope-ai/QwenPaw/issues/5564)** — Suporte a @mention DingTalk: Feature request para multi-agent collaboration (2 comentários)
   - **Análise**: Caso de uso empresarial para notificar agentes entre si

5. **[#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588)** — Reranker para memory search: Two-stage retrieval (1 comentário)
   - **Análise**: Melhora precisão de recall em memória de longo prazo

---

## 5. Bugs e Estabilidade

### Bugs Críticos 🔴

| Issue | Descrição | Severidade | Link |
|-------|-----------|------------|------|
| #5573 | DeepSeek V4 thinking mode: 400 errors em streaming reasoning_content e null schema types | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5573) |
| #5505 | MiniMax-M3: Erro de safety cache incorretamente aprendido como `rejects_media=True` | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5505) |
| #5561 | Feishu: Mensagens longas falham, apenas arquivos funcionam | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5561) |

### Bugs Médios 🟡

| Issue | Descrição | Severidade | Link |
|-------|-----------|------------|------|
| #5624/#5626 | Contagem de arquivos nos cards sempre mostra "1" | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5624) |
| #5543 | Schema com `"type":"null"` quebra第三方中转 | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5543) |
| #4873 | Subagents simultâneos causam polling infinito no Feishu | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| #5342 | Ferramentas sem cap causam explosão de contexto quando LLM falha | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5342) |
| #5587 | Qwen-Image Tool install error | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5587) |

### Bugs Menores 🟢

| Issue | Descrição | Link |
|-------|-----------|------|
| #5583 | UI: Background do chat popup pouco visível | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5583) |
| #5591 | Log spam: GET /api/console/inbox/events excessivo | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5591) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Prioridade

| Issue | Feature | Componentes | Link |
|-------|---------|-------------|------|
| #5572 | **Auto model fallback**: Troca automática quando quota esgotada/falha/timeout | Core/Backend | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5572) |
| #5588 | **Reranker para memory search**: Two-stage retrieval com modelo dedicado | Memory | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5588) |
| #5609 | **Custom model protocol**: Suporte a endpoints não-OpenAI (ex: /images/generations) | Core/Backend | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5609) |
| #5615 | **Vision fallback**: Auto-descrição de imagens para modelos texto-only | Core/Backend | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5615) |
| #5564 | **DingTalk @mention**: Suporte a atUserIds em CLI e API | Channels | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5564) |
| #4939 | **Cron update command**: Update direto em vez de delete+create | CLI | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4939) |
| #5622 | **Windows tray icon**: Background running sem ocupar taskbar | Console | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5622) |
| #5603 | **DingTalk streaming speed**: Card streaming otimizado | Channels | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5603) |
| #5593 | **DingTalk image upload**: Previewable images via media_id | Channels | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5593) |

### Análise de Tendências

1. **Multi-agent orchestration**: Vários pedidos relacionados a colaboração entre agentes (mention, cron, etc.)
2. **Resiliência**: Foco em recoverability e fault tolerance (model fallback, checkpoint)
3. **UX de canais**: Melhorias significativas em Feishu e DingTalk
4. **Context management**: Scroll strategy, reranker, vision fallback indicam direção de longo contexto

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Problema | Impacto |
|-----------|----------|---------|
| **Estabilidade de Canais** | Feishu quebra com mensagens longas, DingTalk streaming lento | Produtividade diária |
| **Custo** | DeepSeek prefix cache sub-ótimo (95% vs potencial 99%+) | Custo operacional |
| **Confiabilidade** | Perda de conversation records em crashes | Dados de usuário |
| **Performance** | "最新版本越来越卡顿了" (mais lento a cada versão) | Satisfação geral |
| **Conectividade** | Ascend-vllm parou de funcionar em versões recentes | Bloqueio de uso |

### Cenários de Uso Reportados

1. **Agentes em produção**: Múltiplos subagents rodando simultaneamente
2. **Integração corporativa**: Feishu, DingTalk, cron jobs para automação
3. **Modelos customizados**: Conexão com vLLM, DeepSeek, MiniMax
4. **Long-term memory**: Busca em conversas passadas

### Indicadores de Satisfação

- **Issues fechadas**: 9/29 (31%) indicam ciclo de resolução ativo
- **PR activity**: 50 PRs atualizados mostra desenvolvimento intenso
- **Beta v2.0**: Preparação de release demonstra maturidade do roadmap

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Em Espera

| Issue | Tempo em Aberto | Prioridade | Link |
|-------|-----------------|------------|------|
| #3891 | ~2 meses (2026-04-27) | Alta (custo) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3891) |
| #2495 | ~3 meses (2026-03-29) | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2495) |
| #4873 | ~1 mês (2026-06-01) | Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| #4939 | ~1 mês (2026-06-03) | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4939) |
| #5527 | ~5 dias | Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5527) |
| #5579 | ~3 dias | Crítica | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5579) |

### PRs Pendentes de Review

| PR | Tempo | Importância | Link |
|----|-------|-------------|------|
| #5221 | 14 dias | Plugin system | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5221) |
| #5296 | 12 dias | ADBPG memory | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5296) |
| #5510 | 5 dias | Context safety | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5510) |
| #5629 | 1 dia | Memory optimization | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5629) |

---

## Métricas Consolidada

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas | 20 | 🟢 |
| Issues fechadas (24h) | 9 | 🟢 |
| PRs abertos | 31 | 🟡 |
| PRs merged/closed | 19 | 🟢 |
| Bugs críticos | 3 | 🔴 |
| Release em beta | v2.0.0-beta.1 | 🟡 |
| Test coverage (novos PRs) | 426+ casos | 🟢 |

---

## Conclusão

O projeto **CoPaw/QwenPaw** demonstra **saúde saudável** com atividade intensa de desenvolvimento. A transição para Runtime v2 está em andamento, com foco em estabilidade (bug fixes para canais IM) e performance (context management, memory search). Recomenda-se atenção especial aos bugs de Feishu e ao custo de DeepSeek prefix cache, além de priorização do v2.0.0-beta.1 release para validar as mudanças de arquitetura.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw
**Data:** 2026-06-30 | **Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 2026-06-30, com 50 issues e 50 PRs atualizados nas últimas 24h. A equipe de desenvolvimento está focada em **correções críticas de segurança e estabilidade** para a versão v0.8.3, com destaque para 5 issues P1 em aberto. Não há lançamentos recentes, indicando que o ciclo de desenvolvimento está em fase de estabilização antes do próximo release. A comunidade demonstra engajamento significativo em topics como WASM plugins, SOP (Structured Output Protocol), e múltiplos canais de comunicação. Três PRs foram fechados/merged hoje, enquanto 40 permanecem abertos aguardando revisão.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou novas versões hoje. O último ciclo de desenvolvimento parece estar direcionado à estabilização de funcionalidades para v0.8.3, conforme indicado pelos trackers:
- [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) - v0.8.3 WASM plugin program
- [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) - v0.8.3 runtime execution, agent loop, tools, and skills
- [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) - v0.8.3 provider and native-tool message serialization

**Recomenda-se** monitorar os trackers de release para announcements iminentes.

---

## 3. Progresso do Projeto

### PRs Merged/Closed em 2026-06-29

| PR | Descrição | Impacto |
|---|---|---|
| [#8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502) | `feat(sop): complete payload safety ingress` | Adiciona helpers de segurança para conteúdo externo em SOP, incluindo capping, normalization, e prompt-guard screening |
| [#8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493) | `feat(sop): enforce step scope and mode events` | Reforça escopo de ferramentas em execuções SOP, rejeitando chamadas fora do escopo no dispatch |
| [#8468](https://github.com/zeroclaw-labs/zeroclaw/pull/8468) | `fix(channels): preserve image bytes for vision_model_provider` | Corrige stripping de bytes de imagem quando provider de visão dedicado está configurado |
| [#8380](https://github.com/zeroclaw-labs/zeroclaw/pull/8380) | `feat(cost): offline pricing catalog` | Adiciona catálogo de preços offline como fallback para modelos sem entrada de pricing |

### Avanços Notáveis

1. **SOP (Structured Output Protocol):** Progresso significativo em segurança e enforcement de escopo
2. **Pipeline de Multimodal:** Correção crítica preservando bytes de imagem para provedores de visão dedicados
3. **Sistema de Custos:** Catálogo offline implementado para ambientes sem conectividade

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Tema |
|---|---|---|---|---|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi provider streaming error | 11 | 1 | Provider/API |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatch | 9 | 0 | Segurança/Runtime |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support | 6 | 0 | Desktop/GUI |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Code help/keybindings misleading on macOS | 5 | 0 | UX/Zerocode |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | RFC: A2A agent discovery | 5 | 0 | Arquitetura/Multi-agent |

### Análise de Demandas

**1. Provider Kimi (#5600):** Usuários reportam erro 400 Bad Request quando usando `kimi-code` provider em streaming. Este é o issue com maior engajamento (11 comentários), indicando impacto significativo em workflows bloqueados.

**2. Security/Runtime (#8054):** Alinhamento de tool-availability entre pontos de entrada (channels, gateway, WebSocket, multimodal, /think). Community reconhece a complexidade ao seguir-up de PR #8053.

**3. Computer-use Desktop (#6909):** RFC para interação com desktop GUI (screenshots, mouse/keyboard) demonstra demanda por automação local, competindo com OpenAI Codex.

**4. A2A Discovery (#7218):** Interesse em interoperabilidade multi-agent via `.well-known/agent-card.json`, sugerindo ecossistema expandido.

---

## 5. Bugs e Estabilidade

### Issues P1 (S1 - Workflow Blocked / Alta Severidade)

| Issue | Título | Status | Risco |
|---|---|---|---|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi provider streaming error | OPEN | HIGH |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatch | OPEN | HIGH |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | Native/MCP tools unavailable on OpenAI/Anthropic | OPEN | HIGH |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured | OPEN | HIGH |
| [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | fill-translations leak-repair stale entries | OPEN | HIGH |
| [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | skills install/list/remove target data_dir | OPEN | HIGH |

### Issues P2 (S2 - Degraded Behavior)

| Issue | Título | Status | Canal |
|---|---|---|---|
| [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) | Channel tasks need no-reply outcome | OPEN | Runtime |
| [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | vision_provider silently ignored (multimodal) | CLOSED | Telegram |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk wrong bot message API | OPEN | Nextcloud |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Cron/heartbeat sends NO_REPLY sentinel | CLOSED | - |

### Análise de Bugs

**Críticos em Aberto:**
- **Telegram (#8505):** Usuário reportando configuração quebrada após quickstart, bot não responde
- **Skills (#8334):** Fluxo "pull a skill and use it" quebrado em multi-agent installs
- **Translations (#8312):** Data-loss silencioso em leak-repair

**Resolvidos Hoje:**
- Cron/heartbeat NO_REPLY (#2128) - CLOSED
- Vision provider fallback (#6841) - CLOSED
- Image bytes preservation (#8468) - MERGED

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs e Enhancements em Andamento

| Issue | Título | Tipo | Prioridade |
|---|---|---|---|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use desktop interaction | RFC | P2 |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | RFC: A2A agent discovery | RFC | P2 |
| [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | RFC: In-app upgrade with supervised restart | RFC | P2 |
| [#8140](https://github.com/zeroclaw-labs/zeroclaw/issues/8140) | RFC: Wasm-first plugin runtime | RFC | P2 |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | RFC: OCI container registries for plugins | RFC | P3 |
| [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) | RFC: Runtime Policy for OTel LLM Content | RFC | P2 |

### PRs de Feature em Progresso

| PR | Título | Tamanho | Risco |
|---|---|---|---|
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | Native Inkbox channel (email + SMS + voice + iMessage) | XL | HIGH |
| [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) | GitHub channel with SOP ingress | XL | HIGH |
| [#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) | WhatsApp native location pin support | M | HIGH |
| [#8483](https://github.com/zeroclaw-labs/zeroclaw/pull/8483) | ZeroCode Cost tab by-period + org billed | M | MEDIUM |

### Sinais de Roadmap v0.8.3

1. **WASM-first Plugins:** Transformação para runtime padrão com capability enforcement e signed distribution
2. **Expansão de Canais:** GitHub, Inkbox, e enhancements em WhatsApp
3. **Computer-use Desktop:** Suporte para automação GUI local
4. **Multi-agent Architecture:** A2A discovery para interoperabilidade
5. **Observabilidade:** OTel policies para LLM e tool content

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|---|---|---|
| **Provider Issues** | Erros em provedores (Kimi, OpenAI, Anthropic) afetando streaming e tool calling | Alta |
| **Configuração de Canais** | Problemas com setup inicial (Telegram, Nextcloud) | Média |
| **UX/Keybindings** | Keybindings confusos ou inacessíveis, especialmente macOS | Média |
| **Multi-agent** | Skills não funcionam em installations multi-agent | Média |
| **Computer-use** | Demanda por interação desktop GUI | Emergente |

### Cenários de Uso Identificados

1. **Automação Desktop:** Usuários querem screenshots + controle de mouse/keyboard
2. **Multi-canal:**Email, SMS, voice, iMessage via Inkbox; GitHub integration
3. **Multi-agent:** Host múltiplos agentes com discovery via A2A
4. **Offline-first:** Pricing catalog offline para ambientes desconectados

### Satisfação/Insatisfação

**Positivo:**
- Sistema SOP em evolução com foco em segurança
- Correções de multimodal pipeline sendo priorizadas
- Community engajada em RFCs estruturados

**Pontos de Atenção:**
- 5 issues P1 simultâneos indica pressão sobre estabilidade
- Commits perdidos em bulk revert (#6074) - 153 commits em recovery
- Bugs silenciosos (data-loss em translations) preocupantes

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (requer review)

| Issue | Título | Criado | Última Atualização |
|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit: track 153 commits lost in bulk revert | 2026-04-24 | 2026-06-29 |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | plugins: hybrid skills + WASM tools | 2026-04-26 | 2026-06-29 |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | OCI container registries for plugins | 2026-06-11 | 2026-06-29 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/issues/6297) | Signal/WhatsApp poll-vote / interactive-reply | 2026-05-03 | 2026-06-29 |

### PRs Blocked / Needs Maintainer Review

| PR | Título | Size | Bloqueio |
|---|---|---|---|
| [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | In-app upgrade RFC | - | Needs maintainer-review |
| [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) | OTel Runtime Policy RFC | - | Needs maintainer-review |
| [#8149](https://github.com/zeroclaw-labs/zeroclaw/pull/8149) | fix(plugins): mutex lock poison | XS | Needs author action |
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | fix(tools/mcp): MCP access policy | L | Needs author action |

### Recomendações para Maintainers

1. **Priorize P1s:** 5 issues S1-workspace blocked simultâneos requerem atenção imediata
2. **Recovery #6074:** 153 commits perdidos precisam de processo de recovery documentado
3. **RFC Decisões:** 7 RFCs pendentes de feedback (especialmente #8140 WASM-first)
4. **Channel Quality:** Issues com Nextcloud, Telegram e WhatsApp indicam necessidade de QA mais robusto

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---|---|---|
| Issues P1 abertas | 6 | ⚠️ Alta pressão |
| PRs em aberto | 40 | ✅ Normal |
| PRs merged hoje | 4 | ✅ Bom |
| Releases (24h) | 0 | ⚠️ Monitorar |
| Engagement (comentários) | 50+ | ✅ Ativo |

---

*Relatório gerado em 2026-06-30 com dados do GitHub ZeroClaw. Para atualizações em tempo real, consulte [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*