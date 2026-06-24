# Resumo diário do ecossistema de agentes de IA 2026-06-25

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-24 21:19 UTC

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

**Data de referência:** 2026-06-25  
**Projetos analisados:** 7 (incluindo NullClaw como referência)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **alta vitalidade geral** em 25 de junho de 2026, com seis dos sete projetos em atividade intensa. Observa-se uma **tendência convergente** em três eixos: (i) endurecimento de segurança em subsistemas MCP, (ii) expansão de canais multi-plataforma, e (iii) otimização de performance com foco em redução de overhead de tokens. A diversificação arquitetural é evidente — desde PicoClaw (foco em hooks de processo via stdio) até ZeroClaw (infraestrutura WASM com multi-tenancy enterprise). Os projetos que mais se destacam em atividade são Hermes Agent, ZeroClaw e CoPaw, cada um com mais de 50 itens atualizados em 24h, indicando comunidades maduras e ciclos de desenvolvimento acelerados.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Avaliação de Saúde |
|---------|-------------|-----------|----------|-------------------|
| **NullClaw** | 0 | 0 | 0 | 🔴 Inativo |
| **NanoBot** | 18 | 44 | 0 | 🟡 Ativo — alta intensidade de PRs |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 Muito ativo — 22 PRs merged |
| **PicoClaw** | 14 | 8 | 0 | 🟡 Moderado — foco em segurança |
| **IronClaw** | 19 | 41 | 0 | 🟡 Ativo — refactoring arquitetural |
| **CoPaw** | 23 | 50 | 0 | 🟡 Ativo — migração 2.0 em curso |
| **ZeroClaw** | 50 | 50 | 0 | 🟢 Muito ativo — features enterprise |

**Métricas consolidadas:**

- **Volume total de atividade:** 174 issues + 243 PRs em 24h (exceto NullClaw)
- **Títulos de maior velocidade:** Hermes Agent e ZeroClaw (50/50 em 24h)
- **Release activity:** Nenhum projeto publicou releases nas últimas 24h — todos em ciclos de desenvolvimento intenso

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)

**Posicionamento:** Agente pessoal multi-canal de baixo custo com foco em integração Telegram e providers alternativos.

| Dimensão | Vantagem | Gap |
|----------|----------|-----|
| **Providers** | Maior diversidade (Kimi, OpenCode, Anthropic) | Dependência de providers asiáticos pode limitar adoção ocidental |
| **Canais** | Telegram maduro com Bot API 10.1 | Mobile PWA imaturo (iOS zoom, swipe gestures) |
| **Comunidade** | 44 PRs/24h — vitalidade alta | 2 CVEs activos sem fix merged há 4+ dias |
| **UX/CLI** | WebUI com multi-file patching | Regressões pós-v0.2.2 em Telegram |
| **Arquitetura** | Claim "ultra-lightweight" questionado (#660) | Requer Python + Node.js — inconsistência com messaging |

**Diferencial técnico:** Integração nativa com Moonshot/Kimi e suporte antecipado a novos modelos de coding. A proporção de 2.4 PRs por issue indica pipeline de implementação mais maduro que o de triagem.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança em Subsistemas MCP

Todos os projetos que implementam MCP enfrentam desafios de isolamento e enforcement de policies:

| Projeto | Status MCP | Vulnerabilidades |
|---------|------------|------------------|
| **NanoBot** | enabledTools bypass (2 CVEs abertos) | deny-all/allowlist falham para resources e prompts |
| **ZeroClaw** | mcp_bundles enforcement (fix merged) | Isolamento per-agente corrigido em #7747 |
| **Hermes Agent** | delegate_task security fix | Tools 'messaging'/'cronjob' não bloqueadas |
| **IronClaw** | Vocabulário de segurança em denylist | Skills legítimas bloqueadas por "Bearer", "API key" |

**Implicação:** MCP está se tornando ubíquo, mas a segurança de nível de granularidade (ferramentas vs. resources vs. prompts) é um problema não resolvido em múltiplos projetos simultaneamente.

### 4.2 Expansão Multi-Canal

| Canal | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|-------|---------|--------|----------|----------|-------|----------|
| Telegram | ✅ Mature | ✅ | — | — | — | — |
| Mattermost | PR #4459 | — | — | — | — | — |
| Feishu/Lark | — | ✅ CardKit | — | — | ✅ | — |
| DeltaChat | — | — | PR #3063 | — | — | — |
| DingTalk | 🟡 Buggy | — | — | — | 🟡 Invisible | — |
| WebSocket remote | — | — | PR #3118 | — | — | ✅ |
| WASM plugins | — | — | — | — | — | ✅ #7928 |

**Tendência:** Ecossistema está convergindo para abstrações de gateway que suportam múltiplos protocolos, mas a qualidade de implementação varia significativamente entre canais.

### 4.3 Performance — Overhead de Tokens

| Projeto | Problema Reportado | Métrica |
|---------|-------------------|---------|
| **Hermes Agent** | 73% overhead fixo por chamada | ~13.9K tokens overhead |
| **IronClaw** | Progressive tool disclosure em desenvolvimento | ~25.8K → ~4K tokens |
| **NanoBot** | Schema bloat em multi-provider | Não quantificado |

**Soluções em desenvolvimento:**

- Lazy Tool Schema Loading (Hermes Agent #6839)
- Progressive disclosure de ferramentas (IronClaw #5149)
- enabledTools gating (NanoBot #4452)

---

## 5. Análise de Diferenciação

### 5.1 Por Foco Arquitetural

| Arquitetura | Projetos | Características |
|-------------|----------|-----------------|
| **Multi-provider flexível** | NanoBot, CoPaw | Suporte a providers diversos, schema translation |
| **Performance-first** | Hermes Agent | Foco em token overhead, streaming |
| **Enterprise-ready** | ZeroClaw, IronClaw | RBAC, multi-tenancy, OIDC, SLSA |
| **Lightweight/process** | PicoClaw | Hooks via stdio, JSON-RPC, embedded |
| **Desktop/Tauri** | CoPaw | App desktop com auto-updater |

### 5.2 Por Público-Alvo

| Público | Projeto Ideal | Sinais |
|---------|---------------|--------|
| **Desenvolvedores individuais** | PicoClaw | Process hooks, minimalismo, Termux/Android |
| **Power users Telegram** | NanoBot | Integração Telegram mais madura |
| **Empresas multi-tenant** | ZeroClaw | RBAC per-sender, OIDC, WASM plugins |
| **Performance/custo** | Hermes Agent | Otimização agressiva de tokens |
| **Automação recorrente** | IronClaw | Reborn WebUI, skill-learning, cron jobs |
| **Stack AgentScope** | CoPaw | Migração 1.x→2.0, desktop app |

### 5.3 Divergências Técnicas Notáveis

| Dimensão | NanoBot | Hermes Agent | PicoClaw |
|----------|---------|--------------|----------|
| **Linguagem** | Python+Node.js | Python (推测) | Go + Rust components |
| **Claim de peso** | "ultra-lightweight" | Não especificado | Minimalista |
| **MCP strategy** | enabledTools gating | Lazy loading | WASM isolation |
| **Canais** | Telegram-centric | Multi-provider | Multi-protocol |
| **Build system** | Docker multi-layer | pip | go build |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Desenvolvimento

| Projeto | PRs Merged (24h) | Proporção Open/Merged | Interpretação |
|---------|-----------------|----------------------|---------------|
| **Hermes Agent** | 22 | ~28:22 | **Consolidando** — alta taxa de fechamento |
| **NanoBot** | 19 | ~25:19 | **Iterando** — pipeline equilibrado |
| **CoPaw** | 6 | ~44:6 | **Contributor influx** — many first-time PRs |
| **ZeroClaw** | 4 | ~46:4 | **Feature accumulation** — many large PRs (L/XL) |
| **IronClaw** | 3 | ~38:3 | **Refactoring** — architectural work in progress |
| **PicoClaw** | 0 | ~8:0 | **Estagnado** — awaiting reviews |

### 6.2 Quality Signals

| Projeto | Bug Fix Velocity | Security Posture | Regression Rate |
|---------|-----------------|------------------|-----------------|
| **Hermes Agent** | Alta (4 P1s merged) | 🟡 Corrigindo credenciais | Baixa |
| **NanoBot** | Média (regressões Telegram) | 🔴 2 CVEs activos | **Alta** — pós-v0.2.2 |
| **PicoClaw** | Baixa (0 merged) | 🟢 11 CVEs fechados | Baixa |
| **IronClaw** | Baixa (CI restaurado) | 🟠 Denylist false positives | 🟡 E2E nightly falhando |
| **ZeroClaw** | Média | 🟢 mcp_bundles fixed | Baixa |

### 6.3 Contribuidor Engagement

| Sinal | Projetos | Interpretação |
|-------|----------|---------------|
| **First-time contributors** | CoPaw (PRs #5321, #5210) | Ecossistema atrativo para newcomers |
| **Maintainer bottleneck** | PicoClaw (8 PRs abertas, 0 merged) | Review capacity limitada |
| **High-comment issues** | Hermes (#6839: 27 comments), NanoBot (#660: 11 comments) | Comunidade técnica engajada |
| **RFC process** | ZeroClaw (5 RFCs ativas) | Governança estruturada |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Enterprise Hardening é Prioridade**

Oito dos dez principais issues por engajamento estão relacionados a segurança, multi-tenancy ou compliance:

- ZeroClaw: OIDC auth (#7141), per-sender RBAC (#5982), supply chain signing (#8177)
- Hermes Agent: Credential pool corruption (#19566)
- IronClaw: Skill approval gate (#5156), vocabulary denylist (#5169)

**2. Mobile-First Não é Realidade**

Nenhum projeto demonstra maturidade mobile comparável à desktop:

- NanoBot: PWA incompleto (#4494), iOS zoom (#4388)
- Hermes Agent: Mensagens invisíveis no mobile, texto não selecionável
- CoPaw: Mobile agent switch broken (#5476)

**3. Tool Overhead é Gargalo Global**

Performance de tokens domina discussões técnicas:

- Hermes: 73% overhead fixo
- IronClaw: 25.8K → 4K com progressive disclosure
- NanoBot: enabledTools como solução parcial

**4. WASM como Vetor de Extensibilidade**

ZeroClaw (#7928) e IronClaw (decomposição de crates) apontam para isolamento via WASM component model como direção estratégica para plugins seguros e cross-language.

**5. Provider Fragmentation Creates Integration Debt**

Demanda por novos providers (OpenCode, Kimi, Vertex AI, You.com) indica que projetos estão se tornando integrações de integrações, com schema compatibility como ponto de atrito constante.

### 7.2 Recomendações Estratégicas por Perfil

| Perfil | Recomendação | Projetos de Referência |
|--------|--------------|------------------------|
| **Escolha para экспериментирование** | NanoBot | Diversidade de providers, comunidade ativa |
| **Escolha para deployment enterprise** | ZeroClaw | RBAC, OIDC, WASM, SLSA |
| **Escolha para performance/custo** | Hermes Agent | Otimização agressiva de tokens |
| **Escolha para minimalismo** | PicoClaw | Process hooks, stdio, embedded |
| **Evitar para production (hoje)** | NanoBot (security CVEs), IronClaw (E2E nightly) | — |

---

## Conclusão

O ecossistema de agentes de IA open source em 2026-06-25 apresenta **dois clusters distintos de maturidade**: (i) Hermes Agent, ZeroClaw e CoPaw demonstram comunidades vibrantes com ciclos de desenvolvimento acelerados e foco em qualidade, enquanto (ii) NanoBot, IronClaw e PicoClaw enfrentam desafios de estabilidade e segurança que requerem atenção imediata antes de adoção em produção. A tendência clara é de **convergência para arquiteturas multi-tenant com isolamento de plugins via WASM** e **endurecimento de segurança em subsistemas MCP**, com mobile UX permanecendo como o ponto cego da indústria. Para decisores técnicos, ZeroClaw oferece o roadmap enterprise mais completo, enquanto Hermes Agent prioriza a eficiência de custos — duas dimensões que serão determinantes na adoção mainstream de agentes de IA open source.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-25

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 25 de junho de 2026, com 18 issues e 44 PRs atualizados nas últimas 24h. Não houve lançamentos de novas versões, mas o projeto segue em ritmo intenso de desenvolvimento com 25 PRs abertos. A atividade concentra-se em **três eixos principais**: (i) correções de segurança no subsistema MCP com dois CVEs em aberto (#4434, #4435), (ii) refinamento da experiência Telegram com compatibilidade Web/X e rich messages Bot API 10.1, e (iii) melhorias de UX mobile com PWA, swipe gestures e correções iOS/Safari. A proporção de 44 PRs para 18 issues indica que a equipe de contribuidores está mais focada em implementação do que em triagem de demandas.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.** O último lançamento documentado permanece a v0.2.2, que foi associada a regressões nos issues #4470 (formatação Telegram) e #4479 (PWA/mobile sidebar — reabriu como #4494).

---

## 3. Progresso do Projeto

### PRs closed/merged recentemente

| PR | Título | Impacto |
|----|--------|---------|
| [#4464](https://github.com/HKUDS/nanobot/pull/4464) | `kimi_coding` provider para Kimi Coding Plan | **Novo provider** — adiciona integração dedicada com plano de coding pago da Kimi/Moonshot |
| [#4475](https://github.com/HKUDS/nanobot/pull/4475) | OpenCode Zen e OpenCode Go como providers | **Novo provider** — amplia ofertas de modelos de coding de baixo custo |
| [#4487](https://github.com/HKUDS/nanobot/pull/4487) | `apply_patch` multi-file no WebUI | **UX/WebUI** — mantém edições distintas por arquivo e tool-event absorption |
| [#4463](https://github.com/HKUDS/nanobot/pull/4463) | Suporte Kimi Coding Plan (subscription) | **Provider** — habilita plano pago de coding com API Anthropic Messages |
| [#4498](https://github.com/HKUDS/nanobot/pull/4498) | Sync/upstream 2026-06-24 | **Invalid** — marcador de sync interno, sem impacto funcional |

### PRs em revisão com potencial de merge

- **[#4459](https://github.com/HKUDS/nanobot/pull/4459)** — Mattermost channel support: adiciona integração WebSocket + REST com reconnect automático e streaming progressivo
- **[#4504](https://github.com/HKUDS/nanobot/pull/4504)** — Skills em subdirectórios: resolve organização do workspace com grouping opcional
- **[#4496](https://github.com/HKUDS/nanobot/pull/4496)** — Relay cross-channel sends via gateway: corrige silent drop de envios cross-channel no modo CLI agent

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: #660 — "ultra-lightweight" vs Node.js dependency

| Métrica | Valor |
|---------|-------|
| Comentários | 11 |
| 👍 | 5 |
| Labels | `good first issue`, `help wanted`, `feature request` |
| Status | **Aberta** (desde 2026-02-14) |

**Análise:** Esta é a issue com maior vida útil e engajamento do período. O usuário `besoeasy` questiona a claimed proposition do projeto ("ultra-lightweight personal AI assistant") diante da necessidade de Python + Node.js no Dockerfile. Com 11 comentários e 5 👍, há debate activo sobre a arquitetura de dependencies. Esta issue sinaliza um risco reputacional se não houver posicionamento claro.

### Segunda issue mais comentada: #4413 — Telegram Bot API 10.1 rich messages

- **2 comentários**, labels: `enhancement`
- **Status:** Closed
- **Situação:** Funcionalidade implementada e merged (via PRs #4505, #4495), mas com regressões reportadas nos issues #4488 (Telegram Web) e #4470 (newline/formatting).

### PR mais comentado (em aberto): #4452 — MCP enabledTools enforcement

- **Problema:** Aplica `enabledTools` a tools, resources e prompts com deny-all branch verdadeiro
- **Addresses:** Issues de segurança #4434 e #4435
- **Status:** Em revisão — depende de #4436 (mesmo autor: `michaelxer`)

---

## 5. Bugs e Estabilidade

### 🔴 Críticos / Segurança

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | MCP `enabledTools` deny-all policy bypass | **Segurança** | Aberta |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | MCP `enabledTools` allowlist bypass | **Segurança** | Aberta |

**Descrição:** O allowlist `enabledTools: []` deveria ser deny-all, mas resources e prompts são registados incondicionalmente, expondo capacidades MCP ao modelo mesmo quando configurado para bloquear. Estas vulnerabilidades têm PRs de correção em revisão (#4436, #4452).

### 🟡 Regression Bugs

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#4499](https://github.com/HKUDS/nanobot/issues/4499) | Telegram channel: replies arrive como empty messages | **Bug** | Closed |
| [#4470](https://github.com/HKUDS/nanobot/issues/4470) | Telegram: newlines ignorados + flickering de edição | **Bug** | Closed |
| [#4465](https://github.com/HKUDS/nanobot/issues/4465) | `<thinking/>` renderizado como texto visível no WebUI | **Bug** | Closed |
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | Duplicate `tool_use` ids em streaming — 400 error | **Bug** | Closed |
| [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Telegram Web: "unsupported message" para rich messages | **Bug** | Aberta |

### 🟢 Bugs de Menor Prioridade

| Issue | Título | Canal |
|-------|--------|-------|
| [#4497](https://github.com/HKUDS/nanobot/issues/4497) | DingTalk: timeouts + richText não suportado | DingTalk |
| [#4492](https://github.com/HKUDS/nanobot/issues/4492) | WebM→WAV needed para Xiaomi MiMo ASR | WebUI |
| [#4500](https://github.com/HKUDS/nanobot/issues/4500) | WebUI home: send não navega, self-restart stuck, stop button error | WebUI |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas

| Issue | Título | Potencial |
|-------|--------|-----------|
| [#4503](https://github.com/HKUDS/nanobot/issues/4503) | HVTracker trust badge no README | **Visibilidade/Trust** — open registry de supply-chain signals |
| [#4490](https://github.com/HKUDS/nanobot/issues/4490) | API auth obligatoria em interfaces não-loopback | **Segurança** — paridade com WS gateway |

### Features em desenvolvimento

| PR | Título | Tipo |
|----|--------|------|
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | Mattermost channel support | **Novo canal** |
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | Gateway webhook triggers | **Webhook API** |
| [#4491](https://github.com/HKUDS/nanobot/pull/4491) | Workspace Dream prompt override | **Customização** |
| [#4437](https://github.com/HKUDS/nanobot/pull/4437) | Heartbeat trigger command | **Agendamento/LLM-decision** |
| [#4485](https://github.com/HKUDS/nanobot/pull/4485) | `fail_on_tool_error` configurável para subagents | **Resiliência** |

### Temas recorrentes sinalizando direção do roadmap

1. **Ecossistema de canais** — Mattermost (#4459) em pipeline; Telegram a mais maturidade com Bot API 10.1
2. **Mobile-first UX** — PWA (#4494), swipe gestures, iOS Safari zoom (#4388), voice transcription (#4493)
3. **Custom providers** — thinking style configurável (#4482), novos providers (OpenCode, Kimi Coding)
4. **Segurança MCP** — gating de resources/prompts atrás de enabledTools (tema quente com 2 CVEs)

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes

| Tema | Evidência | Impacto |
|------|-----------|---------|
| **Regressões no Telegram** | Issues #4499, #4470, #4488 — todos pós-v0.2.2 | 🔴 Alto — afeta canal principal |
| **Mobile UX imatura** | #4388 (iOS zoom), #4492 (ASR audio), #4494 (PWA incompleto) | 🟡 Médio — barreira de entrada mobile |
| **Inconsistência "ultra-lightweight"** | #660 (11 comments, 5 👍) | 🟡 Médio — risco reputacional |
| **Segurança MCP** | #4434, #4435 | 🔴 Crítico — afecta confiança enterprise |
| **Cross-channel experience** | #4496 (CLI agent drops cross-sends) | 🟡 Médio — quebra expectativa de integração |

### Sinais positivos

- **Adoção de providers** — 2 PRs merged em 24h para novos providers (OpenCode, Kimi Coding), indicando atracção de ISVs
- **Comunidade de contribuidores activa** — 44 PRs em 24h com 19 merged/closed demonstra vitality de codebase
- **Boa cobertura de bugs** — issues fechadas em <48h (#4465, #4470, #4499) indica responsiveness da equipa

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >5 dias

| Issue | Título | Idade | Prioridade |
|-------|--------|-------|------------|
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | Security: MCP deny-all bypass | 4 dias | 🔴 **Alta** |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | Security: MCP allowlist bypass | 4 dias | 🔴 **Alta** |
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | Duplicate tool_use ids | 4 dias | 🟡 Média (já closed, mas verificar regressão) |
| [#4490](https://github.com/HKUDS/nanobot/issues/4490) | API auth em interfaces externas | 1 dia | 🟡 Média |
| [#4500](https://github.com/HKUDS/nanobot/issues/4500) | WebUI home page navigation bugs | <1 dia | 🟡 Média |

### PRs orphaned / sem maintainer review

| PR | Título | Idade | Risco |
|----|--------|-------|-------|
| [#4482](https://github.com/HKUDS/nanobot/pull/4482) | Custom provider thinking style | 2 dias | 🟢 Em revisão |
| [#4481](https://github.com/HKUDS/nanobot/pull/4481) | Dream cursor advancement | 2 dias | 🟢 Em revisão |
| [#4496](https://github.com/HKUDS/nanobot/pull/4496) | Cross-channel CLI relay | <1 dia | 🟢 Em revisão |
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | Gateway webhook triggers | <1 dia | 🟢 Em revisão |

### Recomendações de Prioridade

1. **🔴 Merge urgente:** PRs de segurança #4436 e #4452 — dois CVEs activos com exploit público documentado
2. **🔴 Merge urgente:** #4505 e #4495 — Telegram regressões afectam produção
3. **🟡 Review prioritário:** #4493 (WebM→WAV) e #4494 (PWA) — 用户 mobile experience
4. **🟡 Resposta oficial:** #660 — posicionamento sobre claim "ultra-lightweight" para preservar confiança

---

*Relatório gerado automaticamente com base em dados GitHub do repositório [HKUDS/nanobot](https://github.com/HKUDS/nanobot) para o período de 24h terminado em 2026-06-25.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent — 2026-06-25

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade nas últimas 24 horas**, com 100 itens atualizados (50 issues + 50 PRs). Não houve novos lançamentos, mas **22 PRs foram merged/fechados**, indicando progresso significativo em correções críticas. O projeto apresenta **35 issues abertas ativas** e **28 PRs em aberto**, demonstrando uma comunidade engajada. As discussões mais quentes concentram-se em **overhead de tokens** (73% do custo por chamada ser overhead fixo) e **estabilidade do contexto em operações de delegação**. A saúde geral do projeto é boa, com foco intenso em correções de bugs P1 e melhorias de performance.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto está em período de intenso desenvolvimento de correções, sem lançamento de versão nova. Última versão estável mencionada nos reports: **v0.17.0 (2026.6.19)**.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados

| PR | Descrição | Severidade | Impacto |
|---|---|---|---|
| [#52134](https://github.com/NousResearch/hermes-agent/pull/52134) | `fix(agent): deepcopy plugin context engine` — Corrige corrupção de contexto do agente pai em `delegate_task` | P1 | ✅ Resolve hang em sessões longas |
| [#52143](https://github.com/NousResearch/hermes-agent/pull/52143) | `fix(gateway): honor server retry_after in Telegram flood control` — Respeita o `retry_after` do servidor Telegram | P2 | ✅ Melhora entrega de mensagens |
| [#52140](https://github.com/NousResearch/hermes-agent/pull/52140) | `fix(agent): validate context/memory tool schemas` — Valida schemas antes de wrapping | P2 | ✅ Evita HTTP 400 em providers estrictos |
| [#52135](https://github.com/NousResearch/hermes-agent/pull/52135) | `fix(tools): catch mkdtemp OSError in tirith install` — Trata erro quando disco está cheio | P2 | ✅ Previne loop infinito de retries |
| [#52122](https://github.com/NousResearch/hermes-agent/pull/52122) | `fix(web): use SDK-native keyless support in firecrawl-py 4.30+` | P3 | 🔧 Atualização de dependência |
| [#51044](https://github.com/NousResearch/hermes-agent/pull/51044) | `fix(gateway): use get_secret for platform tokens` — Corrige vazamento de credenciais | P2 | 🛡️ **Segurança** |
| [#23488](https://github.com/NousResearch/hermes-agent/pull/23488) | Adds Feishu/Lark CardKit support | P2 | 🌍 Nova plataforma suportada |

**Avanços-chave:**
- **4 PRs P1 merged** resolvendo problemas críticos de estabilidade (contexto, streaming, compressão)
- **Correção de segurança** no tratamento de tokens de plataforma
- Suporte expandido para plataformas de mensagens (Feishu)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários + Reações)

| Issue | Título | Comentários | 👍 | Tema Principal |
|---|---|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass Tool Injection | 27 | 14 | **Performance: ~3,500-5,000 tokens overhead por chamada** |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | Token overhead analysis: 73% overhead fixo | 15 | 0 | **Performance: profiling mostra ineficiência massiva** |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | Generalized ACP client for multi-agent CLI | 11 | 16 | **Orquestração multi-agente** |
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) | Rocket Chat support | 11 | 10 | **Expansão de plataformas** |
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) | Hermes openai-codex fails on same machine | 12 | 3 | **Compatibilidade com Codex CLI** |

### Análise das Demandas

**🔴 Performance/Token Overhead (Maior preocupação):**
- Comunidade reporta que **73% de cada chamada API é overhead fixo (~13.9K tokens)**
- Proposta de Lazy Tool Schema Loading pode reduzir significativamente custo
- Impacto direto em custos de API para deployments em produção

**🟢 Orquestração Multi-Agente:**
- Alto interesse em generalizar o ACP client para suportar Claude, Copilot e outros agentes
- 16 👍 indica demanda real por esta feature

**🟡 Expansão de Plataformas:**
- Rocket Chat suporte com 10 👍
- Vertex AI provider em PR ativo
- You.com como novo backend web

---

## 5. Bugs e Estabilidade

### Bugs Críticos P1 (Requerem Atenção Imediata)

| Issue | Descrição | Status | Plataforma |
|---|---|---|---|
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex credential pool pode perder credenciais recém-adicionadas | **OPEN** | Credenciais |
| [#43334](https://github.com/NousResearch/hermes-agent/issues/43334) | Windows installer falha com espaços no path do perfil | **OPEN** | 🪟 Windows |
| [#42449](https://github.com/NousResearch/hermes-agent/issues/42449) | `delegate_task` corrompe context_length do pai via singleton | **CLOSED** (fix merged) | Core |
| [#31600](https://github.com/NousResearch/hermes-agent/issues/31600) | `MINIMUM_CONTEXT_LENGTH = 64_000` hardcoded causa deadlocks | **OPEN** | Core |
| [#24098](https://github.com/NousResearch/hermes-agent/issues/24098) | Compression failure causa hang de 88 minutos | **CLOSED** (fix merged) | Core |
| [#43466](https://github.com/NousResearch/hermes-agent/issues/43466) | **Segurança:** `delegate_task` não bloqueia tools 'messaging'/'cronjob' | **CLOSED** | Segurança |

### Bugs Importantes P2

| Issue | Descrição | Status |
|---|---|---|
| [#33801](https://github.com/NousResearch/hermes-agent/issues/33801) | Redação de secrets corrompe sintaxe em `write_file`, `execute_code`, `terminal` |
| [#50663](https://github.com/NousResearch/hermes-agent/issues/50663) | z.ai rate limiting durante "peak hours" |
| [#32660](https://github.com/NousResearch/hermes-agent/issues/32660) | Tools array ausente em chamadas para endpoint Ollama customizado |
| [#52126](https://github.com/NousResearch/hermes-agent/issues/52126) | Anexos de arquivo em canais Telegram são silenciosamente descartados |
| [#47910](https://github.com/NousResearch/hermes-agent/issues/47910) | Windows installer falha ao recriar venv (pythonw.exe lock) |

### Regressões e Padrões

**🪟 Problemas recorrentes com Windows:**
- 3 bugs P1/P2 específicos da plataforma nas últimas 24h
- Instalador com problemas de path e lock de processos

**🔧 Regras de segurança sendo addressed:**
- multiple PRs resolvendo issues de `delegate_task` e contexto engine
- Fix de credenciais em `_apply_env_overrides()`

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR/Issue | Feature | Prioridade | Observações |
|---|---|---|---|
| [#51077](https://github.com/NousResearch/hermes-agent/pull/51077) | Cron jobs continuáveis com DM-mirror fallback | P3 | Melhora experiência conversacional recorrente |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Vertex AI provider para Gemini (service account + ADC) | P3 | Enterprise support |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integrar headroom-ai para compressão de output | P3 | Alternativa ao compressor atual |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) | You.com como web backend + skill de research | P3 | Novo provedor de busca |
| [#46165](https://github.com/NousResearch/hermes-agent/pull/46165) | Expor `session_key` em GET /api/sessions | P3 | Melhora debugging/monitoring |

### Features Solicitadas (Alta Demanda)

| Issue | Feature | 👍 | Potencial Impact |
|---|---|---|---|
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | ACP client generalizado para multi-agente | 16 | 🔥 **Alto** — habilita orquestração |
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) | Suporte Rocket Chat | 10 | 🌍 Expansão de mercado |
| [#52137](https://github.com/NousResearch/hermes-agent/issues/52137) | Localização Russo (ru-RU) | 0 | i18n em expansão |
| [#52120](https://github.com/NousResearch/hermes-agent/issues/52120) | Tratamento optional para web_extract vazio | 0 | DX improvement |

### Sinais de Roadmap

1. **Performance first:** Issues de token overhead dominam discussões — likely foco em lazy loading
2. **Multi-agent orchestration:** Feature com maior engajamento — investimento estratégico
3. **Enterprise providers:** Vertex AI em desenvolvimento, sugere foco B2B
4. **i18n:** Suporte a múltiplos idiomas em expansão (Francês, Chinês, Português, Russo)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**💰 Custo Operacional Excessivo**
> *"73% of every API call is fixed overhead (~13.9K tokens)"* — Impacto direto em custos mensais para deployments em produção. Usuários com 50+ ferramentas habilitadas sentem mais.

**🪟 Experiência Windows Ruim**
> *"The installer fails to complete installation on Windows systems where the user profile path contains spaces"* — Barreira de entrada significativa para novos usuários Windows.

**📦 Perda de Dados/Silenciosa**
> *"File attachments sent to Telegram channels are silently dropped"* — Comportamento que erode confiança. Usuários não sabem quando perdem anexos.

**🔒 Problemas de Credenciais**
> *"credential pool appears able to lose/drop a recently added credential"* — Crítico para workflows de produção que dependem de rotação de credenciais.

**📱 Mobile UX Problemática**
> *"new chat messages and assistant responses are not visible after being generated"* / *"can't select/copy chat text on phones"* — Usuários mobile têm experiência quebrada.

### Cenários de Uso Reportados

| Cenário | Platform | Sentimento |
|---|---|---|
| Coding agent com Codex | Desktop (macOS) | ⚠️ Frustrado — funciona com CLI oficial, não com Hermes |
| Deploy em produção | Linux + Telegram | ✅ Funciona, mas com rate limits de providers |
| Multi-agent orchestration | CLI | 🔥 Interessado — aguardando feature |
| Enterprise com GCP | Vertex AI | 📋 Em desenvolvimento |

### Satisfação Geral

| Métrica | Indicador |
|---|---|
| Engajamento | 🔥 **Alto** — 100 items/24h, 27+ comentários em issues |
| Correções | ✅ Ativo — 22 PRs merged em 24h |
| Funcionalidade crítica | ⚠️ **Preocupante** — múltiplos P1s em aberto |
| Performance | 🔴 **Problema prioritário** — overhead de 73% |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição (Stale)

| Issue | Tempo Aberto | Prioridade | Tema |
|---|---|---|---|
| [#4379](https://github.com/NousResearch/hermes-agent

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-06-25

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade de manutenção nesta data, com **14 issues e 8 PRs atualizadas nas últimas 24h**, embora nenhuma release tenha sido publicada. O dia foi marcado por uma **campanha massiva de correções de segurança**: 11 vulnerabilities (CVEs) foram fechadas simultaneamente, cobrindo bypasses de autenticação, SSRF, CSRF e replay attacks em múltiplos canais de integração. Em paralelo, a comunidade mantém 8 PRs abertas com contribuições diversificadas — desde correções de bugs críticos (crash no Android/Termux) até features solicitadas há meses (streaming HTTP, remote WebSocket mode). O estado geral indica um projeto maduro em fase de endurecimento de segurança, com dependência crítica de revisão de PRs pendentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release estável foi a **v0.2.9** (referenciada na issue #3164), que introduziu o sistema de process hooks via JSON-RPC over stdio — feature que agora apresenta problemas de crash no Android/Termux. Recomenda-se atenção à próxima release, pois as múltiplas correções de segurança pendentes (11 issues fechadas como stale) sugerem preparação para um patch release focado em hardening.

---

## 3. Progresso do Projeto

Nenhum PR foi mergeado ou fechado nas últimas 24h. As seguintes PRs permanecem **abertas e ativas**, representando avanços em andamento:

| PR | Título | Tipo | Destaque |
|----|--------|------|----------|
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | `fix(pico): complete turn.done lifecycle signaling` | Bug fix | Completa implementação de lifecycle para `turn.done`, preservando `request_id` para mensagens enfileiradas |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | `Fix inline data URL media extraction` | Bug fix | Corrige corrupção de histórico ao tratar strings `data:image/...;base64` como anexos reais |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | `Add remote Pico WebSocket mode` | Feature | Adiciona modo `--remote ws://host:port/pico/ws` ao comando `picoclaw agent` |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | `feat: add deltachat gateway` | Feature | Novo gateway para protocolo DeltaChat |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | `recover Seed XML tool calls` | Bug fix | Restaura parsing de `<seed:tool_call>` em respostas OpenAI-compatíveis |
| [#3166](https://github.com/sipeed/picoclaw/pull/3166) | `use structured logger` | Bug fix | Corrige `undefined: log` build failure em `openai_compat` |
| [#3168](https://github.com/sipeed/picoclaw/pull/3168) | `handle error response read failures` | Bug fix | Melhora tratamento de erros em fetches de lista de modelos |
| [#3169](https://github.com/sipeed/picoclaw/pull/3169) | `skip cold path for heartbeat turns` | Optimization | Evita evolução desnecessária em heartbeats periódicos |

**Prioridade de merge**: As PRs #3165, #3166 e #3168 são correções de build e devem ser priorizadas; #3166 inclusive bloqueia o build do pacote `openai_compat`.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|-----|--------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Feature: Add streaming HTTP request config | 13 | 1 | CLOSED |

**Análise**: A issue #2404 solicita configuração `"streaming": true` para enviar requisições HTTP com streaming para backends LLM (compatível com `stream=True` do cliente OpenAI Python). Com 13 comentários, é a discussão mais ativa — indica **demanda reprimida por suporte a streaming em tempo real**, possivelmente para interfaces de chat responsivas. A issue foi fechada recentemente (2026-06-24), sugerindo aceitação ou implementação em progresso.

### Outras discussões notáveis

- **#3167** — Pergunta técnica sobre adaptação do PageAgent para Vue/MVVM: Usuário reportando teste em Vue 2 + Element UI, questionando suporte a `v-model`, `watcher` e state interno. Indica **expansão do uso para frameworks SPA empresariais**.
- **#3082 a #3071** — 11 security issues fechadas como stale: apesar do baixo engagement (2 comentários cada), representam **vulnerabilidades críticas reportadas pelo mesmo autor (YLChen-007)** em 2026-06-09 e resolvidas antes desta data.

---

## 5. Bugs e Estabilidade

### 🛑 Bug Crítico Aberto

| Issue | Severidade | Impacto | Detalhes |
|-------|-----------|---------|----------|
| [#3164](https://github.com/sipeed/picoclaw/issues/3164) | **Alta** | Android/Termux crash | Process hooks (JSON-RPC over stdio) causam crash do gateway em até 2s após startup. Afeta v0.2.9 + config v3. Reproduzível com hook mínimo "hello world". |

**Recomendação**: Corrigir antes do próximo release; impacta base de usuários mobile/termux.

### Bugs Fechados (Resolvidos)

- **#2404** — Feature request de streaming (não bug, mas relevante para estabilidade de integrações HTTP)
- **#3165** — Build failure em `openai_compat` (undefined log) — PR associada #3166 pronta para merge
- **#3167** — Dúvida de compatibilidade Vue (sem bug, mas indica necessidade de documentação)

### Métricas de Estabilidade

- **Crash rate**: 1 issue crítica aberta (Android/Termux)
- **Build failures**: 1 bloqueante identificado (#3166 — `undefined: log`)
- **Regressões conhecidas**: Nenhuma identificada além da #3164

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas Recentemente

| Issue | Título | Tipo | Demanda | Link |
|-------|--------|------|---------|------|
| #2404 | Streaming HTTP request config | Enhancement | Alta (13 comentários) | [Link](https://github.com/sipeed/picoclaw/issues/2404) |
| #3167 | PageAgent para Vue/MVVM | Enhancement | Média | [Link](https://github.com/sipeed/picoclaw/issues/3167) |
| #3063 | DeltaChat gateway | Feature | Nova integração | [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) |

### Sinais de Roadmap

1. **Suporte a streaming em tempo real** — A issue #2404 indica prioridade para streaming LLM, alinhando-se com padrões OpenAI.
2. **Expansão de gateways** — PR #3063 adiciona DeltaChat; #3118 adiciona remote WebSocket mode — sugere **estratégia multi-protocolo**.
3. **Framework adaptors** — Issue #3167 sinaliza demanda por adaptadores para frameworks SPA (Vue, React) — oportunidade para PageAgent v2.
4. **Segurança como feature** — As 11 CVEs fechadas indicam foco em **hardening antes de features**, possivelmente preparando v0.3.0.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Cenário | Problema | Severidade | Fonte |
|---------|----------|------------|-------|
| Android/Termux | Gateway crash ao usar process hooks | Crítica | [#3164](https://github.com/sipeed/picoclaw/issues/3164) |
| Vue 2 + Element UI | PageAgent não reconhece `v-model`/state interno de componentes | Média | [#3167](https://github.com/sipeed/picoclaw/issues/3167) |
| Build | `undefined: log` impede compilação em `openai_compat` | Alta | [#3166](https://github.com/sipeed/picoclaw/pull/3166) |

### Cenários de Uso Identificados

- **Automação de browsers via PageAgent**: Usuários testando em admin dashboards Vue 2
- **Gateways multi-canal**: DeltaChat, LINE, Feishu, WeCom, MQTT — ecossistema diversificado
- **Hooks de processo**: Integração via JSON-RPC stdio (caso de uso Android/Termux)

### Satisfação/Insatisfação

- **Positivo**: Comunidade ativa reportando issues detalhadas; múltiplas contribuições de PRs
- **Negativo**: Bug crítico em Android/Termux sem workaround; build failure bloqueante; 11 security issues simultâneas indicam dívida técnica

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias (requer triagem)

| Issue | Título | Idade | Status | Prioridade |
|-------|--------|-------|--------|------------|
| [#3167](https://github.com/sipeed/picoclaw/issues/3167) | PageAgent + Vue MVVM | 1 dia | Sem resposta | Média |
| [#3164](https://github.com/sipeed/picoclaw/issues/3164) | Process hooks crash Android/Termux | 2 dias | Sem resposta | **Alta** |

### PRs aguardando review

| PR | Título | Idade | Bloqueia | Prioridade |
|----|--------|-------|----------|------------|
| [#3166](https://github.com/sipeed/picoclaw/pull/3166) | `undefined: log` build fix | 1 dia | Build | **Urgente** |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | Seed XML recovery | 1 dia | — | Alta |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | `turn.done` lifecycle | 13 dias | — | Média |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Remote WebSocket mode | 13 dias | — | Média |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | DeltaChat gateway | 17 dias | — | Média |

### Recomendações de Ação

1. **Crítico**: Review e merge da PR #3166 para corrigir build failure
2. **Alta**: Investigar e corrigir issue #3164 (crash Android/Termux)
3. **Média**: Responder issue #3167 sobre suporte Vue/MVVM
4. **Estratégico**: Planejar release com as 11 correções de segurança fechadas

---

*Relatório gerado em 2026-06-25 com base em dados do GitHub do projeto [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-25

---

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 25 de junho de 2026, com 19 issues e 41 PRs atualizados nas últimas 24h, porém **sem novos lançamentos**. O foco principal está na maturação do Reborn WebUI v2, com múltiplas issues reportando problemas de UX (sidebar, permissões de ferramentas, tokens inválidos) e na decomposição do crate monolith `ironclaw_reborn_composition` em módulos menores. A estabilidade de CI foi restaurada com a correção do bug de chave duplicada em workflow YAML. Há regressões abertas em tasks de web/research e um bug crítico envolvendo vocabulário de segurança bloqueando skills legítimas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto está em fase ativa de desenvolvimento sem publicação de versões formalizadas neste período.

---

## 3. Progresso do projeto

### PRs merged/fechados recentemente

| PR | Título | Impacto |
|---|---|---|
| [#5193](https://github.com/nearai/ironclaw/pull/5193) | `fix(ci): restore green main — duplicate workflow key + missed spawn_subagent test ignore` | **Crítico** — Corrige YAML duplicado que bloqueava todos os workflows de CI; restaura pipeline de testes. |
| [#5186](https://github.com/nearai/ironclaw/pull/5186) | `fix(reborn): localize settings labels and adjust automation filters` | Melhora UX com labels localizados e filtros de automação responsivos para o Reborn WebUI v2. |
| [#5194](https://github.com/nearai/ironclaw/pull/5194) | `fix(reborn): recover SSE turn-event stream from rebase on reconnect` | Corrige desconexão spreads de Slack para WebUI quando mensagens são enviadas na mesma thread. |

### PRs em destaque em revisão

| PR | Título | Relevância estratégica |
|---|---|---|
| [#5163](https://github.com/nearai/ironclaw/pull/5163) | `feat(memory): model memory as a userland extension (#3537)` | **Alta** — Extrai a camada de memória para um crate provider-neutral (`ironclaw_memory`), habilitando extensibilidade futura. |
| [#5137](https://github.com/nearai/ironclaw/pull/5137) | `refactor(reborn): extract ironclaw_reborn_http_kit (1/N)` | **Arquitetural** — Primeira fatia da decomposição do god-crate monolith (~132k linhas) em crates isolados. |
| [#5145](https://github.com/nearai/ironclaw/pull/5145) | `refactor(reborn): clean up capability activity lifecycle` | **Estabilidade** — Padroniza identidade de atividades/gates entre kernel, prompts e renderização WebUI. |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | `feat(reborn): Context management — progressive tool disclosure` | **Performance** — Reduz tokens por chamada de ~25.8k para ~4k ao enviar apenas schemas relevantes, eliminando timeouts no NEAR AI. |
| [#5068](https://github.com/nearai/ironclaw/pull/5068) | `feat(reborn-webui): tool permissions + global auto-approve settings surface` | **UX** — Expõe configurações de permissões de ferramentas end-to-end na interface Reborn. |
| [#5156](https://github.com/nearai/ironclaw/pull/5156) | `feat(skill-learning): any-backend distillation, approval gate` | **Segurança** — Skills recém-aprendidas ficam inativas e pendentes de revisão humana antes de serem utilizadas. |
| [#5199](https://github.com/nearai/ironclaw/pull/5199) | `fix(reborn): allow web ui logs for multi-tenancy users` | **Multi-tenant** — Resolve acesso a logs para usuários em ambientes multi-tenant via WebUI. |

---

## 4. Temas quentes da comunidade

### Issues com maior atenção

| Issue | Título | Discussão | Sinais |
|---|---|---|---|
| [#5180](https://github.com/nearai/ironclaw/issues/5180) | `fix(reborn): populate provider on runtime auth-required gates` | 1 comentário | Gate de autenticação não salva tokens em ambiente WASM — **bloqueador de UX crítico**. |
| [#5169](https://github.com/nearai/ironclaw/issues/5169) | `Bundled skills trip the prompt-safety vocabulary denylist` | 2 comentários | Vocabulário comum ("Authorization", "Bearer", "API key") em skills bundled causa rejeição — **impacta todos os usuários em setup limpo**. |
| [#5149](https://github.com/nearai/ironclaw/issues/5149) | `Context management — progressive tool disclosure` | Em revisão | Alívio do gargalo de 25.8k tokens por chamada; **demanda aguardada pela comunidade**. |

### Análise das demandas da comunidade

**Padrões emergentes:**
1. **Maturidade do Reborn WebUI v2** — 8+ issues relacionadas à interface, sugerindo que a UI está sendo adotada em produção antes de estar completamente estável.
2. **Confiabilidade de automações** — Issues sobre bloqueios perpétuos (#4986) e falhas de inicialização (#5184) indicam que automações recorrentes são um caso de uso central.
3. **Observabilidade** — Múltiplos pedidos de logs mais significativos para operators (#5182) e diagnóstico de falhas (#5179, #5199).

---

## 5. Bugs e estabilidade

### 🔴 Críticos

| Issue | Descrição | Severidade | Status |
|---|---|---|---|
| [#5169](https://github.com/nearai/ironclaw/issues/5169) | Skills bundled com vocabulário de API ("Bearer", "API key", "Authorization") disparam o denylist de segurança, causando falha silenciosa com mensagem enganosa de "temporary system issue". Repro em setup limpo. | 🔴 Crítica | Aberta |
| [#5184](https://github.com/nearai/ironclaw/issues/5184) | Reborn falha no startup quando o lookup de product-auth do NEAR AI MCP está indisponível — **impossibilita deployments em ambientes restritos ou offline**. | 🔴 Crítica | Aberta |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **E2E nightly recorrentemente falhando** — Impacta confiança na base de código e releases. | 🔴 Crítica | Aberta |

### 🟠 Altos

| Issue | Descrição |
|---|---|
| [#5139](https://github.com/nearai/ironclaw/issues/5139) | **Regressão**: tasks web/research travam na inicialização com zero chamadas LLM após commit `2b2ccc55→704fcd43`. Afeta 21/147 tarefas no PinchBench diário. |
| [#5190](https://github.com/nearai/ironclaw/issues/5190) | Token bearer inválido/stale permite entrada na UI, mas ações subsequentes não respondem — estado de autenticação inconsistente. |
| [#5192](https://github.com/nearai/ironclaw/issues/5192) | Negar aprovação de ferramenta pode gerar solicitações adicionais de aprovação em cascata. |

### 🟡 Médios

| Issue | Descrição |
|---|---|
| [#5189](https://github.com/nearai/ironclaw/issues/5189) | Ferramentas bem-sucedidas não mostram detalhes de atividade durante execução (diferente de ferramentas com falha — UX inconsistente). |
| [#5191](https://github.com/nearai/ironclaw/issues/5191) | Mensagens internas de orquestração de skills aparecem no chat para o usuário. |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | Aprovação em "Ask each time" falha com erro de autorização e dispara fluxo duplicado. |
| [#5197](https://github.com/nearai/ironclaw/issues/5197) | Ferramentas desabilitadas podem causar invocação de ferramentas não relacionadas. |

### Correções de estabilidade (hoje)

- **CI restaurado**: [#5193](https://github.com/nearai/ironclaw/pull/5193) — YAML com chave duplicada impedindo todos os workflows.
- **SSE reconexão**: [#5194](https://github.com/nearai/ironclaw/pull/5194) — Desconexão entre Slack e WebUI corrigida.
- **Localização**: [#5186](https://github.com/nearai/ironclaw/pull/5186) — Labels de settings localizados e filtros de automação ajustados.

---

## 6. Pedidos de features e sinais de roadmap

### Features em desenvolvimento

| PR | Feature | Contexto |
|---|---|---|
| [#5163](https://github.com/nearai/ironclaw/pull/5163) | Memória como extensão userland | Parte do roadmap #3537 — habilita provedores de memória customizados. |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | Progressive tool disclosure | Reduz payload de ~25.8k para ~4k tokens; **alivia gargalo de latência do NEAR AI**. |
| [#5156](https://github.com/nearai/ironclaw/pull/5156) | Skill-learning com approval gate | Skills aprendidas ficam pendentes de revisão antes de uso — mitigação de risco. |
| [#4860](https://github.com/nearai/ironclaw/pull/4860) | Local service lifecycle backend | Suporte a systemd/launchd para controle de serviço nativo. |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) | Redesign da página de automations | UX mais densa e escaneável para gerenciamento de automações. |

### Novas demandas identificadas

| Issue | Demanda | Relevância |
|---|---|---|
| [#5182](https://github.com/nearai/ironclaw/issues/5182) | Observabilidade significativa + diagnóstico de falhas fora do binário em ambiente hosted/serve | Alta — operators precisam de debugging em produção. |
| [#5201](https://github.com/nearai/ironclaw/issues/5201) | Roadmap da memory layer após M2 lift (#5163) — milestones restantes de #3537 | Arquitetural — indica continuação do refactoring de memória. |
| [#5200](https://github.com/nearai/ironclaw/issues/5200) | Hardening de edge cases de identidade de atividade após refactor de gates (#5145) | Estabilidade — follow-up natural pós-refactor. |
| [#5173](https://github.com/nearai/ironclaw/issues/5173) | Taxonomy diária de falhas em benchmark (deepseek-v4-flash) | Monitoramento — rastreamento sistemático de regressões. |

---

## 7. Resumo de feedback dos usuários

### Dores reais reportadas

| Categoria | Sintoma | Frequência | Issues |
|---|---|---|---|
| **Setup/implantação** | Falha no startup sem autenticação MCP disponível; setup limpo causa falhas por vocabulário de segurança | 🔴 Alta | #5184, #5169 |
| **Automations** | Automations recorrentes travam esperando aprovação de ferramentas | 🟠 Média | #4986 |
| **WebUI v2** | Comportamento imprevisível de permissões; tokens inválidos não rejeitam claramente; logs indisponíveis em multi-tenant | 🟠 Alta | #5190, #5192, #5196, #5179 |
| **Observabilidade** | Diagnóstico de falhas requer "scraping manual" de logs de processo | 🟡 Média | #5182 |
| **Tool activity** | Detalhes de atividade só aparecem em falhas, não em sucesso | 🟡 Baixa | #5189 |

### Cenários de uso detectados

1. **Dogfooding interno intenso** — A issue de tracking #5119 alimenta múltiplos bugs reportados simultaneamente (#5189, #5190, #5191, #5192, #5196, #5197, #5184), indicando uso pesado do Reborn WebUI v2 em produção interna.
2. **Multi-tenancy em produção** — Logs e permissões multi-tenant são pontos de fricção contínua (#5179, #5199).
3. **Benchmarking automatizado** — Taxonomy diária de falhas (#5173) mostra pipeline robusto de qualidade com PinchBench e ClawBench.

### Indicadores de satisfação

- **Alta engajamento de PRs**: 41 PRs atualizados em 24h — comunidade ativa.
- **Respostas rápidas**: issues recentes (criadas em 24-48h) já possuem comentários e assigned owners.
- **Refactoring estrutural em andamento**: decomposição de crates monoliths e lift de memória indicam investimento em dívida técnica.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa (>3 dias sem atividade)

| Issue | Título | Idade | Prioridade | Risco |
|---|---|---|---|---|
| [#4986](https://github.com/nearai/ironclaw/issues/4986) | `[bug] [Reborn] Recurring automation can become permanently blocked waiting for tool approval` | ~9 dias | 🟠 Alta | Bloqueia feature central (automations) |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | `Nightly E2E failed` | ~29 dias | 🔴 Crítica | Impede confiança em releases |
| [#5173](https://github.com/nearai/ironclaw/issues/5173) | `Daily ironclaw failure taxonomy — 2026-06-23` | ~1 dia | 🟡 Baixa | Monitoramento (aceitável) |
| [#5200](https://github.com/nearai/ironclaw/issues/5200) | `Follow-up: tighten activity identity edge cases after gate lifecycle refactor` | <1 dia | 🟡 Baixa | Follow-up de #5145 (em revisão) |

### Contexto do backlog crítico

- **#4986** (~9 dias): Automation bloqueada esperando aprovação é um **blocker para automações em produção**. Precisa de owner e triagem.
- **#4108** (~29 dias): Falha recorrente do E2E nightly é o issue mais antigo em aberto. Se não houver action plan, a confiança no pipeline está comprometida.
- **#5169** (2 dias) e **#5184** (1 dia): Ambos têm idade curta mas severidade crítica — precisam de escalação imediata.

### Priorização recomendada para next sprint

1. **#5169** — Denylist de

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-25

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw/AgentScope) apresenta **alta atividade de desenvolvimento** em 25 de junho de 2026. Nas últimas 24h, foram registradas 23 issues atualizadas (14 abertas, 9 fechadas) e 50 PRs (44 abertos, 6 fechados/merged). A comunidade demonstra engajamento significativo com múltiplas contribuições de primeiro contribuidor (PRs #5321 e #5210). Os temas dominantes incluem: estabilidade do frontend com大会话文件, migração para AgentScope 2.0, e problemas de compatibilidade com provedores de modelo (GLM, Kimi, OMLX). **Nenhum release foi publicado hoje**, indicando que a equipe可能在准备下一版本.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O último release estável mencionado nos issues é **v1.1.12.post2** (junho de 2026). Issues reportados contra versões anteriores (v1.1.11 e v1.1.12.post1) sugerem que a base de usuários está distribuída entre múltiplas versões, reforçando a necessidade de backward compatibility nas próximas releases.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5498](https://github.com/agentscope-ai/QwenPaw/pull/5498) | **fix: move Current date from env context to per-user-message dynamic prefix** | Resolve stale timestamps em sessões longas; melhora prompt cache stability |
| [#5476](https://github.com/agentscope-ai/QwenPaw/issues/5476) | Bug: Mobile agent switch inoperante (closed) | Corrigido bug de UX mobile |

### PRs Abertos de Alto Impacto (em revisão)

| PR | Descrição | Status |
|----|-----------|--------|
| [#5499](https://github.com/agentscope-ai/QwenPaw/pull/5499) | Move timestamp para prefixo dinâmico por mensagem | Substitui #5498 (closed); focado em compatibilidade 2.0 |
| [#5496](https://github.com/agentscope-ai/QwenPaw/pull/5496) | Inline $ref/$defs em schemas para GLM-5.x | Corrige crash com OpenCode Go |
| [#5495](https://github.com/agentscope-ai/QwenPaw/pull/5495) | Align envelope event translation com v1 streaming protocol | Restaura renderização de tool calls no frontend |
| [#5493](https://github.com/agentscope-ai/QwenPaw/pull/5493) | Restore token/context usage ring após migração 2.0 | Melhora visibilidade deusage |
| [#5492](https://github.com/agentscope-ai/QwenPaw/pull/5492) | Support pip package plugins via entry points | Simplifica instalação de plugins |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri desktop auto-updater | Feature waitlist desde maio |

**Análise**: A equipe está ativamente remediando issues introduzidos pela migração AgentScope 1.x → 2.0, com 4+ PRs focados em restore de funcionalidades perdidas.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Tipo | Título | Comentários | Link |
|---|------|--------|-------------|------|
| #5345 | Bug | Custom OpenAI-compatible providers (OMLX) não suportam function calling | 8 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| #5317 | Question | Tauri Windows: Python não encontrado após conda | 6 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5317) |
| #5264 | Bug |群聊回复 enviada para私聊 (Feishu) | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5264) |
| #5379 | Bug | Internal Server Error após pip install | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5379) |
| #5455 | Question | Por que timestamp não é prefixo por mensagem? | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5455) |
| #5321 | Feat | Scroll context manager — SQLite + REPL recall | Em revisão | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5321) |

**Análise de Demandas**:
- **Integração de provedores**: Usuários enfrentam barreiras com provedores custom (OMLX, Kimi K2 Code, GLM-5.x via OpenCode)
- **Estabilidade de deployment**: Issues recorrentes de installation/startup em Windows e ambientes isolados
- **Contexto de mensagens**: Discussão técnica sobre onde inserir timestamp no prompt (sistema vs. usuário)

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (impactam uso básico)

| # | Bug | Versão | Descrição | Link |
|---|-----|--------|-----------|------|
| #5379 | Internal Server Error após pip install | Latest | `get_remote_addr(transport)` crash no startup | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5379) |
| #5479 | Sessões >500KB crasham frontend | v1.1.12.post2 | Erro de renderização em大会话文件 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5479) |
| #5401 | Console crashes com tool-use history extenso | v1.1.12.post1 | Frontend crash em `type: "data"` content blocks | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5401) |

#### 🟠 Altos (funcionalidades importantes quebradas)

| # | Bug | Canal | Link |
|---|-----|-------|------|
| #5345 | Function calling não funciona com providers custom OMLX | Multi | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| #5264 | Resposta de群聊 enviada para私聊 (Feishu) | Feishu | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5264) |
| #5472 | GLM-5.x crash com json_schema_converter | OpenCode | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5472) |
| #5373 | Shell special characters (redirection, pipes) falham | TUI/CLI | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5373) |
| #5177 | DingTalk sessões invisíveis no console frontend | DingTalk | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5177) |

#### 🟡 Médios (UX/problemas de renderização)

| # | Bug | Link |
|---|-----|------|
| #5480 | 长消息排版错乱 no Console | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5480) |
| #5358 | TypeError in ui-vendor bundle durante session switch | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5358) |
| #5474 | Invalid YAML Front Matter reportada como sucesso | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5474) |
| #5476 | Mobile não consegue trocar agent | Mobile | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5476) |

**Tópicos Recorrentes**:
- Frontend stability com sessões grandes (2 issues independentes sobre >500KB)
- AgentScope 2.0 migration side effects (token usage, tool rendering, timestamps)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Prioridade | Link | Observação |
|---|---------|------------|------|------------|
| #5489 | Support OpenAI response format | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5489) | Facilita integração com mais modelos |
| #5427 | Kimi Coding Plan Models configuration | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5427) | Suporte a endpoint Anthropic-compatible |
| #5484 | Support installing plugins via pip from PyPI | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5484) | Padroniza ecossistema Python |
| #5448 | TUI project-scoped code sessions | Feature | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5448) | `qwenpaw .` para绑定projeto |
| #5210 | CLI `cron update` command | Feature | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5210) | Simplifica gerenciamento de cron jobs |
| #4669 | Tauri desktop auto-updater | Feature | [PR](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Auto-update para desktop |
| #5231 | MCP tool names display optimization | Enhancement | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5231) | UI/UX improvement |

**Sinais de Roadmap**:
1. **Plugin ecosystem expansion**: Suporte pip (PR #5492) + ZIP atual
2. **Multi-provider compatibility**: Esforço contínuo para suportar OMLX, Kimi, GLM
3. **Desktop maturity**: Auto-updater para Tauri
4. **Memory/context management**: Scroll context manager com SQLite (PR #5321)

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Feedback | Frequência | Link |
|-----------|----------|------------|------|
| **Performance/Memória** | "刚启动什么都没做内存占用已经1.4g" (1.4GB RAM ao iniciar sem atividade) | Múltiplos users (#5441, #5439) | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5441) |
| **Frontend stability** | Sessões grandes crasham; rendering problemas em长消息 | Alta | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479), [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) |
| **Provider compatibility** | Custom providers não funcionam corretamente (function calling, schema parsing) | Média-alta | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345), [#5472](https://github.com/agentscope-ai/QwenPaw/issues/5472) |
| **Windows deployment** | Internal Server Error, Python não encontrado, frontend加载不流畅 | Contínua | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379), [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317), [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) |
| **Channel reliability** | Feishu群聊/私聊 routing bug; DingTalk invisível | Média | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264), [#5177](https://github.com/agentscope-ai/QwenPaw/issues/5177) |

### Cenários de Uso Reportados

1. **Desktop Windows**: Usuários esperam performance fluida em desktop app
2. **Empresas内网**: Deploy em redes isoladas com problemas deassets/carga
3. **Multi-channel**: Feishu e DingTalk para comunicação corporativa
4. **Custom LLM providers**: Busca por flexibilidade além dos provedores default

### Indicadores de Satisfação

- **Issues fechadas rapidamente**: #5317 (6 comentários) e #5264 (5 comentários) resolvidos em dias
- **Engajamento de contribuidores**: 2 first-time contributors com PRs substanciais
- **Comunidade ativa**: 50 PRs + 23 issues em 24h indica ecossistema saudável

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| # | Tipo | Título | Criado | Dias Aberto | Link |
|---|------|--------|--------|-------------|------|
| #5345 | Bug | OMLX custom provider function calling | 2026-06-20 | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5345) |
| #5427 | Enhancement | Kimi Coding Plan configuration | 2026-06-23 | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5427) |
| #5497 | Question | 内网安装客户端页面打不开 | 2026-06-24 | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5497) |
| #5489 | Enhancement | OpenAI response format support | 2026-06-24 | 1 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5489) |

### PRs Pendentes de Review

| # | Título | Aguardando | Link |
|---|--------|------------|------|
| #5321 | Scroll context manager (first-time contributor) | Review | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5321) |
| #5210 | CLI cron update command | Review | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5210) |
| #5499 | Timestamp fix (substitui #5498) | Review | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5499) |

---

## Conclusão

**Saúde Geral**: ⚠️ **Estável com issues críticos pendentes**

O CoPaw demonstra alta atividade de desenvolvimento (50 PRs/24h) e comunidade engajada, mas enfrenta desafios de estabilidade no frontend (大会话文件, renderização) e compatibilidade com provedores custom. A migração AgentScope 2.0仍在进行中，com vários PRs de bugfix em andamento. **Recomenda-se atenção prioritaria** a:

1. Crash com sessões >500KB (#5479, #5401)
2. Internal Server Error pós-instalação (#5379)
3. Memory footprint otimização (1.4GB startup)
4. Provider compatibility (OMLX, GLM, Kimi)

---

*Relatório gerado em 2026-06-25 com dados do GitHub do CoPaw (agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw

**Data de referência:** 2026-06-25  
**Fonte:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw manteve alta atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**. Não houve novos lançamentos, mas o fluxo de desenvolvimento permanece intenso com 46 PRs abertos e 4 fechados/merged. A ênfase atual recai sobre **segurança e multi-tenancy** (RBAC per-sender, OIDC auth, mcp_bundles enforcement), complementada por trabalho significativo em **infraestrutura de plugins WASM** e **automação de CI/CD** (supply chain signing, SLSA provenance). A comunidade demonstra preocupação com a estabilização da v0.8.3, evidenciada por issues como [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071).

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O último milestone ativo é **v0.8.3**, conforme rastreado em [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071), que consolida correções de runtime, agent-loop, ferramentas e estabilidade de execução.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #7747 | `fix(runtime): wire mcp_bundles into agent loop — enforce per-agent MCP server scoping` | **Crítico** — Corrige bypass de isolamento de segurança que permitia a todo agente acessar todos os servidores MCP configurados | [PR #7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) |
| #8125 | `Automatically set risk profile to yolo in quickstart` | Melhora experiência de onboarding, espelhando o padrão de runtime forçado unbounded | [PR #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) |
| #8151 | `fix: deferred image attachment loses re-loadable reference in cached history` | Corrige workflow bloqueado no canal Matrix | [Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) |
| #8075 | `Keybinds vs. OS globals` | Discussão resolvida sobre conflitos de keybindings no macOS | [Issue #8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) |

### PRs Abertos de Destaque

| # | Título | Tamanho | Link |
|---|--------|---------|------|
| #8261 | `feat(skills): add opt-in bounded SKILL.md reflection for skill creation` | L | [PR #8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261) |
| #8173 | `feat(gateway): in-app upgrade with auto-restart from the web dashboard` | L | [PR #8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) |
| #8233 | `feat(cost): fill unpriced models from live gateway pricing` | XL | [PR #8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) |
| #7928 | `feat(wasi): initial WASM component-model plugin host code` | XL | [PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) |
| #8304 | `feat(sop): out-of-band approval plane with fail-closed timeout` | L | [PR #8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC para deployments multi-tenant (9 comentários)
   - **Demanda:** RBAC granular para isolar workspaces, tool sets e rate limits entre classes de usuários
   - **Tags:** `security`, `priority:p2`, `status:accepted`

2. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — OIDC Authentication Provider (6 comentários)
   - **Demanda:** Suporte a provedores de autenticação plugáveis (OIDC, ssh-key, peercred, native)
   - **Tags:** `security`, `domain:architecture`, `type:rfc`, `priority:p1`

3. **[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** — Prompt-triggered install suggestions (5 comentários)
   - **Demanda:** Sugestão automática de skills/plugins quando o usuário solicita capacidade não instalada
   - **Tags:** `priority:p2`, `status:accepted`

4. **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** — RFC: Supply chain signing (5 comentários)
   - **Demanda:** PGP hardware-backed, builds herméticos e SLSA provenance para imagens e binários
   - **Tags:** `type:rfc`, `domain:ci`, `domain:security`, `priority:p2`

5. **[#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)** — Upgrade in-app com auto-restart (merged)
   - **Demanda:** Funcionalidade de upgrade direto do dashboard web, seguindo RFC #8170

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

#### P1 (Crítico/Workflow Blocked)

| # | Descrição | Tags | Link |
|---|-----------|------|------|
| #7623 | `delegate to Codex/OAuth sub-agent still fails after #7266 — resolve_brain forwards coordinator's API key` | `tool:delegate`, `domain:security` | [Issue #7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) |
| #8151 | `deferred image attachment loses re-loadable reference in cached history (Matrix channel)` | `channel:matrix` | [Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) |
| #7733 | `mcp_bundles is parsed but never enforced at runtime — per-agent MCP scoping is silent no-op` | `tool:mcp`, `domain:security` | [Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| #8044 | `Harden /model --agent scope with per-sender authorization` | `channel`, `domain:security` | [Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) |

#### P2 (Degradado)

| # | Descrição | Tags | Link |
|---|-----------|------|------|
| #5903 | `MCP stdio child processes accumulate on daemon with heartbeat.enabled=true` | `tool:mcp` | [Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) |
| #7800 | `Code help/keybindings are misleading or unreachable, especially on macOS` | `zerocode` | [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |

**Nota:** O bug crítico #7733 foi corrigido em [PR #7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) (merged).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Registradas (últimas 24h)

| # | Feature | Domínio | Link |
|---|---------|---------|------|
| #8303 | `Goal mode for bounded autonomous session work` | `runtime` | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #8228 | `DingTalk channel streaming message support` | `channel:dingtalk` | [Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) |
| #8226 | `Per-agent custom environment variables configuration` | `agent`, `security` | [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) |
| #8138 | `Support OpenRouter model fallbacks array in provider config` | `provider:openrouter` | [Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) |

### RFCs em Discussão

| # | RFC | Escopo | Link |
|---|-----|--------|------|
| #7141 | OIDC Authentication Provider support | `v0.9.0` target | [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| #6943 | Deconflict Plugin System Goals (replace Extism with wasmtime) | `domain:architecture` | [Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) |
| #8177 | Supply chain signing — hardware PGP, hermetic builds, SLSA | `domain:ci`, `domain:security` | [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| #8078 | zerocode local pre-submission gate | `zerocode` | [Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) |
| #7822 | WASM plugin lifecycle hook subscriptions | `runtime:wasm` | [Issue #7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema Reportado | Issue | Link |
|-----------|-------------------|-------|------|
| **Segurança** | Falta de isolamento per-agente para servidores MCP | Usuários multi-tenant não conseguem confinar accesso a tools | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) |
| **Descoberta** | Usuários não sabem que skills/plugins existem | Solicitação de sugestões automáticas | [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) |
| **Onboarding** | Experiência ruim com perfil de risco restritivo por padrão | Proposta de `yolo` automático no quickstart | [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) |
| **Latência** | Canal DingTalk sem streaming causa espera perceptível | Necessidade de resposta incremental | [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) |
| **Observabilidade** | Telemetria perdida em execuções one-shot da CLI | OTLP batch exporter não flush antes do exit | [PR #8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) |
| **UX/TUI** | Keybindings conflitantes com macOS global shortcuts | Zerocode inacessível em certos contextos | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) |

### Cenários de Uso Emergentes

- **Multi-tenant deployments**: Clientes desejam servir múltiplas classes de usuários (customers, operators, developers) com isolamento
- **Integrações empresariais**: Necessidade de OIDC auth provider para integração SSO
- **Agents autônomos duráveis**: Demanda por "goal mode" para sessões de longa duração

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Idade | Estado | Link |
|---|--------|-------|--------|------|
| #5607 | `Pre-hook skip gates for cron jobs and SOP triggers` | ~75 dias | `status:blocked` | [Issue #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) |
| #5982 | `Per-sender RBAC for multi-tenant agent deployments` | ~64 dias | `status:accepted` mas aguardando implementação | [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #6140 | `plugins: skill capability — hybrid skills + WASM tools` | ~60 dias | `status:accepted` | [Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) |

### Métricas de Saúde

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas | 44 | Alta atividade |
| PRs abertos | 46 | Pipeline robusto |
| Releases (24h) | 0 | Nenhuma nos últimos dias |
| Razão P1:P2 | 4:8 | Balanceada |
| Issues >60 dias | 3+ | Requer priorização |

---

**Report generated:** 2026-06-25  
**Análise baseada em:** 50 issues, 50 PRs atualizados nas últimas 24h  
**Repositório:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*