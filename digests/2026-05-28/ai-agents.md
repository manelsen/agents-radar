# Resumo diário do ecossistema de agentes de IA 2026-05-28

> Issues: 3 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-05-27 21:50 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-05-28

---

## 1. Panorama do dia

O projeto NullClaw apresenta atividade moderada nas últimas 24 horas, com 3 issues e 3 PRs atualizados. Duas PRs foram fechadas com sucesso — ambas diretamente relacionadas à resolução do issue #890 sobre falhas de DNS no Windows — enquanto uma terceira PR aguarda revisão há quase um mês. No front de issues, dois novos problemas em aberto revelam bugs funcionais (fallback incorreto de modelos e flag inativa), indicando que a área de configuração de providers e agentes ainda carece de maturidade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novos marcos versionados. Isso sugere foco contínuo em estabilização no branch `main` antes de um próximo release tag. O último ciclo de desenvolvimento concentra-se em correções de compatibilidade com Windows e POSIX.

---

## 3. Progresso do projeto

### PRs fechadas/mergiadas

| PR | Título | Impacto |
|----|--------|---------|
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | fix(providers): preserve curl probe transport failures | Corrigiu a perda de erros de transporte (DNS, TLS, timeout) em health checks de providers OpenAI-compatíveis. Agora erros concretos são propagados em vez de colapsados em falhas genéricas. |
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | test(compat/net): add Windows getAddressList regression tests | Adicionou testes de regressão para `getAddressList` no Windows, referenciando diretamente o issue #890. Documenta o cenário que levou à correção do resolver DNS no Windows. |

**PR em aberto há 28 dias:**

| PR | Título | Status |
|----|--------|--------|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | fix(compat): use nanosleep on POSIX | Substitui `std.Io.sleep()` cooperativo por `nanosleep` real no POSIX. Mantém compatibilidade com Windows/WASI. Aguarda merge — atenção necessária para não ficar obsoleto. |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento

| Issue | Título | Reações | Comentários | Relevância |
|-------|--------|---------|-------------|------------|
| [#890](https://github.com/nullclaw/nullclaw/issues/890) | Windows: agent provider HTTP fails with HostResolutionFailed | 👍 1 | 1 | **Alta** — Impacta usuários Windows que usam agentes com providers. Corrigido via PRs #891 e #892. |

### Análise das demandas

A issue #890 foi a que gerou maior atenção por afetar um cenário de uso real: **agentes NullClaw em ambiente Windows com qualquer provider chat-completion**. A root cause era um stub de `getAddressList` que não resolvia hostnames corretamente. O ciclo completo (issue → duas PRs de correção e teste) demonstra maturidade no fluxo de trabalho, mas o tempo entre criação (05/05) e resolução final (27/05) revela que bugs de compatibilidade multi-plataforma ainda exigem iterações significativas.

---

## 5. Bugs e estabilidade

### Issues abertas (2 novas)

| # | Título | Severidade | Resumo |
|---|--------|------------|--------|
| [\#937](https://github.com/nullclaw/nullclaw/issues/937) | Dead flag `compact_context` in agent config | **Baixa** | Flag `compact_context` declarada em `AgentConfig` é parseada e serializada mas nunca consumida. Impacto: código morto e confusão para mantenedores de config. |
| [\#936](https://github.com/nullclaw/nullclaw/issues/936) | Custom OpenAI-compatible provider falls back to hardcoded Claude models | **Média** | Providers customizados (não built-in) não consultam `/v1/models` do próprio endpoint, caindo no fallback `anthropic_fallback`. Quebra a expectativa de uso de providers arbitrary via `base_url`. |

### Issue fechada (corrigida)

| # | Título | Resumo |
|---|--------|--------|
| [\#890](https://github.com/nullclaw/nullclaw/issues/890) | Windows: agent provider HTTP fails with HostResolutionFailed | Resolvida via PRs #891 e #892. O `getAddressListWindows` agora usa `std.Io` corretamente para resolução DNS em Windows. |

**Veredicto de estabilidade:** O projeto está estável no branch principal para cenários POSIX/Linux. Usuários Windows agora têm resolver DNS funcional. O backlog de bugs abertos indica tech debt em config parsing (flag inativa) e lógica de provider discovery.

---

## 6. Pedidos de features e sinais de roadmap

### Novas requests identificadas

**Nenhuma feature request nova aberta nas últimas 24h.**

No entanto, as issues #937 e #936 apontam implicitamente para necessidades de:

- **Limpeza de código morto:** O flag `compact_context` pode ser um residuo de feature planejada mas não implementada, ou uma feature abortada. A decisão de remover ou implementar precisa ser tomada.
- **Provider discovery confiável:** A queda no fallback `anthropic_fallback` para providers customizados sugere que o roadmap pode precisar formalizar como providers arbitrary se autodiscoveriem (padrão `/v1/models`).

### Sinais de roadmap

O foco recente em compatibilidade POSIX/Windows (PR #878, #891, #892) indica que a próxima versão provavelmente terá um release focado em **estabilidade cross-platform**, possivelmente incluindo:

- Correção do `nanosleep` para POSIX (PR #878)
- Finalização do resolver DNS para Windows (já em `main`)
- Limpeza de flags e configs não utilizadas (#937)

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

| Dor | Fonte | Severidade percebida |
|-----|-------|----------------------|
| **Impossibilidade de usar agentes em Windows** | Issue #890 | **Alta** — Bloqueante para base Windows |
| **Providers customizados não funcionam como esperado** | Issue #936 | **Média** — Afeta usuários com setups non-standard |
| **Configuração opaca/confusa** | Issue #937 | **Baixa** — Experiência de desenvolvedor |

### Cenários de uso inferidos

- **Agentes via Telegram com selection interativa de models** — O menu `/models` é o ponto de entrada para switching de provider, e a falha em #936 quebra esse fluxo.
- **Multi-provider com base_url customizada** — Usuários querem flexibility para apontar para endpoints arbitrary, não apenas providers built-in.
- **Cross-platform (Windows + POSIX)** — O projeto claramente suporta ambos, e bugs de DNS em Windows (#890) mostram que a base Windows ainda precisa de amor.

### Satisfação

O fechamento de #890 representa uma vitória significativa para usuários Windows. A velocidade de resposta (22 dias do report ao fix) é aceitável para um bug de compatibilidade cross-platform complexo.

---

## 8. Backlog que merece atenção

### Issues/PRs sem resposta há muito tempo

| Item | Idade | Status | Ação recomendada |
|------|-------|--------|------------------|
| PR #878 | **28 dias** (desde 2026-04-30) | OPEN | Revisão prioritária — substitui `std.Io.sleep()` por `nanosleep` real. Se o código é válido, fazer merge antes de divergir do main. |
| Issue #936 | **1 dia** | OPEN | Triagem inicial necessária — confirmar se o fallback `anthropic_fallback` é intencional ou bug. |
| Issue #937 | **1 dia** | OPEN | Triagem inicial necessária — decidir se a flag é dead code a remover ou feature a implementar. |

### Priorização sugerida

1. **PR #878** — Se aprovada, faz parte do release de estabilidade POSIX. Senão,要给 feedback ao autor.
2. **Issue #936** — Bug funcional que afeta UX de providers customizados. Prioridade média.
3. **Issue #937** — Tech debt. Baixa urgência, mas deve ser resolvido antes de qualquer refactoring de config.

---

## Resumo Executivo

| Dimensão | Estado |
|----------|--------|
| Atividade | Moderada (3 issues, 3 PRs) |
| Bugs abertos | 2 (1 média, 1 baixa) |
| PRs pendentes | 1 (28 dias sem review) |
| Releases | Nenhuma nas últimas 24h |
| Saúde geral | Boa — bugs críticos resolvidos, foco em estabilidade cross-platform |

**Ação prioritária:** Revisem a PR #878 antes que fique muito defasada. As novas issues (#936, #937) precisam de triagem inicial ainda esta semana para sinalizar à comunidade que estão sendo tratadas.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-05-28
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema apresenta **duas velocidades distintas de maturidade** nesta data. Por um lado, projetos como **CoPaw** e **PicoClaw** investem em experiência de interface e distribuição (desktop apps, releases nightly), demonstrando foco em produto final. Por outro, **Hermes Agent**, **IronClaw** e **ZeroClaw** concentram esforços em estabilização de backends críticos — gestão de SQLite, arquitetura Reborn e segurança de canal. **NanoBot** destaca-se como o projeto com maior maturidade MCP integrado, enquanto **NullClaw** permanece focado em compatibilidade cross-platform básica. A convergência técnica mais evidente é a demandam por **context window optimization** e **providers flexíveis**, indicando que o mercado evolui para configurações multi-provider em larga escala.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde Geral | Bugs Críticos Abertos |
|---------|:------------:|:---------:|:--------:|:-----------:|:---------------------:|
| **CoPaw** | 40 | 28 | ✅ v1.1.9 | 🟢 Alta | 3 (CLI, macOS, Browser) |
| **IronClaw** | 21 | 50 | ❌ Nenhuma | 🟡 Ativa | 2 (E2E, Sandbox) |
| **NanoBot** | 5 | 21 | ❌ Nenhuma | 🟢 Alta | 1 (Stream timeout) |
| **ZeroClaw** | 28 | 50 | ❌ Nenhuma | 🟡 Estabilização | 3 (S1), 7 (S2) |
| **Hermes Agent** | 50 | 50 | ❌ Nenhuma | 🟡 Instável | 3 (P1) |
| **NullClaw** | 3 | 3 | ❌ Nenhuma | 🟢 Boa | 0 (resolvido) |
| **PicoClaw** | 4 | 6 | ✅ Nightly | 🟢 Funcional | 1 (OAuth) |

**Observações:**
- **CoPaw** é o único projeto com release oficial estável (v1.1.9) + desktop app Tauri 2.x
- **PicoClaw** é o único com build nightly automatizado público
- **Hermes Agent**, **IronClaw** e **ZeroClaw** acumulam atividade intensa em PRs sem release, indicando fase de consolidação pré-release
- **NullClaw** apresenta menor volume absoluto mas mantém saúde estável sem regressões críticas

---

## 3. Posicionamento do Projeto Principal

Para fins deste relatório,Consideramos **Hermes Agent** como projeto de referência pelo volume de atividade (100 artefatos/24h) e maturidade de back-end (SQLite hardening consolidado).

### Vantagens Competitivas

| Dimensão | Hermes Agent | Nearest Peers |
|----------|-------------|---------------|
| **Volume de kontribusi** | 100 artefatos/24h — leadership absoluto | ZeroClaw (50), IronClaw (50) |
| **Expertise concentrado** | @steveonjava com 7 PRs SQLite — defensível | NanoBot (MCP maturity分散ido) |
| **Gestão de contexto** | Lazy tool schema loading planejado (3.500-5.000 tokens economizados) | IronClaw (context compaction) |
| **Governança** | Skills receipts + declarative policy em discussão | ZeroClaw (security RFCs) |

### Diferenças Técnicas Arquiteturais

- **Hermes Agent** opta por consolidate SQL direto (SQLite) — risco de corrupção mas controle granular
- **IronClaw** migra para arquitetura Reborn modular — maior complexidade, melhor escalabilidade
- **NanoBot** investe em protocolo MCP como primitivo de integração — extensibilidade
- **ZeroClaw** projeta plugin system via WASM (deconflictExtism/wasmtime em curso) — portabilidade
- **CoPaw** prioriza desktop app nativo (Tauri) — experiência de usuário

### Tamanho e Engajamento da Comunidade

| Projeto | Indicadores de Engajamento | Liderança |
|---------|---------------------------|-----------|
| **CoPaw** | 63 comentários na issue Help Wanted | Equipe Agentscope bem estruturada |
| **NanoBot** | 10 👍 em nanobot-webui issue | Comunidade de HKUDS ativa |
| **Hermes Agent** | 16 comentários em #6839 (ferramenta schema) | @steveonjava como reviewer dominante |
| **PicoClaw** | 1 mantenedor ativo (loafoe) respondendo bugs <24h | Lean team |

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em necessidades técnicas em três eixos:

### 4.1 Context Window e Otimização de Tokens

| Projeto | Abordagem | Issue de Referência |
|---------|-----------|-------------------|
| **Hermes Agent** | Lazy tool schema loading (two-pass) | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) — 16 comentários |
| **IronClaw** | Context compaction phase one | PR [#4110](https://github.com/nearai/ironclaw/pull/4110) |
| **NanoBot** | Dream system consolidation (single-phase) | PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) |
| **NullClaw** | `compact_context` flag (dead code обнаружен) | [#937](https://github.com/nullclaw/nullclaw/issues/937) |

**Análise:** O custo de tokens emerge como preocupação universal. Projects tomam abordagens distintas — lazy loading (Hermes), compaction (IronClaw), two-phase merge (NanoBot) — mas o objetivo é o mesmo: reduzir overhead em chamadas com 50+ tools.

### 4.2 Provider Flexibility e Compatibilidade

| Projeto | Problema | Status |
|---------|----------|--------|
| **NullClaw** | Custom providers caem em anthropic_fallback | Bug aberto — #936 |
| **ZeroClaw** | DeepSeek-V4 thinking mode incompatibility | In-progress — #6059 |
| **NanoBot** | NANOBOT_STREAM_IDLE_TIMEOUT_S não honorado no Codex | Merged — #4018 |
| **PicoClaw** | tool_calls descartados em streaming | PR aberto — #2957 |

**Padrão:** Providers arbitrary.OpenAI-compatíveis (base_url custom) são esperada funcionalidade, mas implementação diverge entre projetos. A padronização de `/v1/models` discovery permanece incompleta no ecossistema.

### 4.3 Multi-Platform e Portabilidade

| Cenário | Projetos Afetados | Status |
|---------|-------------------|--------|
| **Windows DNS resolution** | NullClaw | ✅ Resolvido |
| **Windows CLI/TUI** | Hermes Agent (`/clear` freeze), CoPaw (CLI local broken) | 🟡 Aberto |
| **Rootless Podman** | ZeroClaw | S1 — em progresso |
| **Android 32-bit** | PicoClaw | Bug aberto — #2954 |
| **FreeBSD** | Hermes Agent | PR aberto — #33487 |

**Observação:** Suporte cross-platform é implícito em todos os projetos, mas execução é desigual. Windows recebe atenção reativa (bugs reportados -> corrigidos) em vez de test coverage proativo.

---

## 5. Análise de Diferenciação

### 5.1 Foco Primário por Projeto

| Projeto | Positioning | Público-Alvo Inferido |
|---------|-------------|----------------------|
| **CoPaw** | Desktop AI IDE + multi-channel | Desenvolvedores que querem UI nativa, empresas (RBAC em request) |
| **NanoBot** | MCP-native agent com memory system | Usuários avançados com servidores MCP customizados |
| **IronClaw** | Enterprise agent com auth Reborn | Organizações com SSO (GSuite, Google/GitHub) |
| **ZeroClaw** | Agentic pipeline com plugin system | DevOps/infra teams que precisam de roteamento flexível |
| **Hermes Agent** | Telegram-first autonomous agent | Individual users, small teams com automação de mensagens |
| **PicoClaw** | Lightweight multi-channel gateway | Usuários com constraints de infraestrutura (pico, QQ, MQTT) |
| **NullClaw** | Lightweight agent runtime | Desenvolvedores que querembundle minimal, compat POSIX/Windows |

### 5.2 Arquitetura Diferencial

```
CoPaw ────────────► Desktop-native (Tauri 2.x)
                      ├─ Three-panel IDE
                      └─ Feishu/GitLab integration
                      
NanoBot ─────────► MCP-first
                      ├─ MCP reconnection/resilience
                      └─ Dream memory consolidation
                      
IronClaw ───────► Reborn Modular
                      ├─ Auth lifecycle completo
                      ├─ GSuite OAuth backend
                      └─ Context compaction phase 1
                      
ZeroClaw ───────► Plugin-based (WASM)
                      ├─ Skill-scoped tool elevation
                      ├─ Security RFC (credential boundaries)
                      └─ Cron orchestrated pipeline
                      
Hermes Agent ───► SQL-centric (SQLite)
                      ├─ WAL hardening (7 PRs batch)
                      ├─ Kanban backend
                      └─ Tool schema optimization
                      
PicoClaw ───────► Channel-agnostic gateway
                      ├─ Real-time streaming (WebSocket)
                      ├─ MQTT TLS configurable
                      └─ QQ/Telegram/Discord support
                      
NullClaw ───────► Runtime minimal
                      ├─ POSIX/Windows resolver
                      └─ Provider abstraction
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Issues + PRs/24h | Tendência | Análise |
|---------|:----------------:|:---------:|---------|
| **Hermes Agent** | 100 | 🔺 Acelerando | Volume excepcional, mas 3 P1 bugs indicam dívida técnica |
| **ZeroClaw** | 78 | 🔺 Acelerando | Atividade alta + S1 bugs = desenvolvimento intenso mas instável |
| **IronClaw** | 71 | → Estável | Reborn migration domina, 26 PRs merged indica maturidade de CI |
| **NanoBot** | 26 | → Estável | Velocidade sustentável, MCP solidificando |
| **CoPaw** | 68 | 🔺 Crescendo | Release v1.1.9 catalisou activity, beta instabilities = crescimento doloroso |
| **PicoClaw** | 10 |  Stable | Projeto menor em volume, manutenção saudável |
| **NullClaw** | 6 | → Estável | Baixo volume, estabilidade sem incidentes |

### 6.2 Qualidade de Resposta

| Projeto | Mean Time to Respond | Mean Time to Merge (bugs) | Observação |
|---------|:--------------------:|:-------------------------:|------------|
| **PicoClaw** | <24h | <24h (loafoe) | Tem resposta mais rápida em bugs críticos |
| **NullClaw** | ~22 dias | N/A (bug DNS) | Bug #890 levou 22 dias — aceitável para cross-platform |
| **NanoBot** | Rápido | Não medido explicitamente | Community-driven, help wanted ativo |
| **Hermes Agent** | Variável | 12-15 dias | 3 P1s sem resposta indicam triage bottleneck |
| **ZeroClaw** | 1-4 dias | ~5 dias | RFCs bem moduladas, mas S1s em progresso lento |

### 6.3 Índices de Maturidade Comunitária

| Indicador | CoPaw | NanoBot | Hermes | PicoClaw | IronClaw | ZeroClaw | NullClaw |
|-----------|-------|---------|--------|----------|----------|----------|----------|
| **Help Wanted estruturado** | ✅ (63 comments) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PRs por contribuidor externo** | Alto | Médio | Baixo (expert concentrated) | Baixo | Médio | Médio | Baixo |
| **RFC process formal** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (ativo) | ❌ |
| **Release cadence** | ✅ Estável | ❌ Irregular | ❌ Irregular | ⚠️ Nightly only | ❌ Irregular | ❌ Irregular | ❌ Irregular |
| **Breaking changes comunicados** | ✅ Changelog | ❌ | ❌ | ⚠️ Warning banner | ❌ | ⚠️ | ❌ |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. MCP como Primitivo de Integração Universal**
NanoBot investe heavily em resiliência MCP (reconnection, tool list changes), IronClaw adiciona MCP resource/prompt bridge (PR #6946), e ZeroClaw planeja WASM-based plugin system. Indicação: MCP está se tornando o padrão de facto para extensibilidade de agentes, substituindo abordagens proprietárias.

**2. Memoria Persistence Profunda**
Todos os projetos lidam com versões de "memory that persists and is queryable":
- NanoBot Dream system (consolidation, toggle)
- CoPaw sistema evolutivo (síntese → correlação → lembretes)
- Hermes Agent skill receipts (auto-improving agents)
- ZeroClaw cron orchestration

**3. Desktop e UI como Diferencial Competitivo**
CoPaw (Tauri app), NeoPaw (nanobot-webui por comunidade), PicoClaw (WebSocket streaming) — todos apostam em interfaces ricas. O mercado evolui de CLIs para apps full-featured, puxado por demanda de não-desenvolvedores.

**4. Security Posture em Elevação**
ZeroClaw RFC #6971 (credential boundaries), IronClaw Reborn auth lifecycle, Hermes Agent tool schema normalization — todos projetos investem em security hardening. Seab encontrar raízes em adoção enterprise.

**5. Provider Arbitrary como Feature Expectada**
NullClaw bug #936 (custom providers falling back incorrectly) e ZeroClaw DeepSeek-V4 incompatibility demonstram que usuários esperam usar qualquer endpoint OpenAI-compatible. A compatibilidade com novos providers (Xiaomi MiMo em CoPaw, DeepSeek em IronClaw) está se tornando check de qualidade.

### 7.2 Projeções de Curto Prazo (30-60 dias)

| Projeto | Próximo Milestone | Confiança |
|---------|------------------|-----------|
| **CoPaw** | Stabilização beta v1.1.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-05-28

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** hoje, com 21 PRs atualizados nas últimas 24h e 5 issues relevantes. O foco principal está na **estabilidade do subsistema MCP** (com dois PRs de correção de reconnection já merged) e em **melhorias na experiência de memory e Dream system**. Não há novos lançamentos, indicando que a equipe está em fase de consolidação antes de uma próxima release. A comunidade demonstra interesse significativo em features de customização (provider overrides, workspaces) e em melhorias de DX.

---

## 2. Lançamentos

**Nenhum novo lançamento nas últimas 24h.**

O projeto encontra-se em período pré-release, acumulando contribuições que serão eventualmente consolidadas em uma nova versão.

---

## 3. Progresso do Projeto

| PR | Status | Descrição | Impacto |
|---|---|---|---|
| [#4014](https://github.com/HKUDS/nanobot/pull/4014) | ✅ Merged | MCP tools/list_changed notification support | Permite reload dinâmico de tools sem drop de conexão |
| [#4012](https://github.com/HKUDS/nanobot/pull/4012) | ✅ Merged | Fix crítico: reset _mcp_connected + reconnect callbacks | Resolve bug que impedia reconexão após session drop |
| [#4026](https://github.com/HKUDS/nanobot/pull/4026) | ✅ Merged | Adiciona GitHub CLI e gogcli ao Dockerfile | Expandir ferramentas disponíveis no container |
| [#4018](https://github.com/HKUDS/nanobot/pull/4018) | ✅ Merged | Honor NANOBOT_STREAM_IDLE_TIMEOUT_S no Codex provider | Alinha comportamento do Codex com outros providers |
| [#4024](https://github.com/HKUDS/nanobot/pull/4024) | ✅ Closed (duplicado) | GitAgent Protocol support | Proposta rejeitada como duplicata |

**Destaque técnico:** Os dois PRs de correção do MCP (#4012 e #4014) representam um avanço significativo na resiliência do sistema. O bug de reconnection era crítico — a flag `_mcp_connected` ficava travada em `True` mesmo após sessões caírem, eliminando qualquer possibilidade de reconexão automática.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

- **#1922** `[CLOSED]` nanobot-webui — painel web self-hosted (👍 10, 💬 10)
  - Comunidade demonstra forte interesse em alternativas de interface gráfica
  - Desenvolvedor externo (Good0007) criou solução independente que foi reconhecida
  - 🔗 https://github.com/HKUDS/nanobot/issues/1922

- **#3885** `[OPEN]` Global switch para Dream system jobs (👍 0, 💬 4)
  - Discussão sobre controle granular de recursos de memory
  - Usuários querem desabilitar completamente Dream sem desativar outras features
  - 🔗 https://github.com/HKUDS/nanobot/issues/3885

- **#2772** `[OPEN]` Limite de 10 mensagens no WeChat (👍 0, 💬 2)
  - Questão de UX sobre contexto em canais WeChat
  - 🔗 https://github.com/HKUDS/nanobot/issues/2772

### PRs em destaque

- **#3990** — Refatoração do Dream para single-phase consolidation via AgentLoop
  - Mudança arquitetural significativa: remove two-phase merge, integra responsabilidades no AgentRunner
  - 🔗 https://github.com/HKUDS/nanobot/pull/3990

- **#4007** — Project workspaces e access controls no WebUI
  - Adiciona scoping de chats por projeto e controles de permissão
  - 🔗 https://github.com/HKUDS/nanobot/pull/4007

---

## 5. Bugs e Estabilidade

### Bug reportado recentemente

- **#4013** `[OPEN]` "stream stalled for more than 90 seconds"
  - Severidade: **Alta** (afeta usabilidade em produção)
  - Usuário reporta regressão ao atualizar de 0.1.5post2 para 0.2.0
  - Providers afetados: prováveis LM Studio / Ollama (local LLMs)
  - Já existe PR **#4020** em andamento para tornar stream-idle timeout configurável por provider
  - 🔗 https://github.com/HKUDS/nanobot/issues/4013

### Correções em andamento

| PR | Bug | Status |
|---|---|---|
| [#4020](https://github.com/HKUDS/nanobot/pull/4020) | Timeout configurável por provider | 🔄 Em revisão |
| [#4017](https://github.com/HKUDS/nanobot/pull/4017) | Parse de tool_calls em formato texto (openai-compat) | 🔄 Em revisão |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | Dedup reasoning items (evita 400 duplicate no Codex) | 🔄 Em revisão |
| [#4025](https://github.com/HKUDS/nanobot/pull/4025) | Protect unprocessed history entries from compaction | 🔄 Em revisão |
| [#4011](https://github.com/HKUDS/nanobot/pull/4011) | Drop orphan tool results from session history | 🔄 Em revisão |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aguardando implementação

1. **Provider override para Dream model** (#4029)
   - Permitir usar modelo diferente do default para Dream consolidation
   - Útil para otimização de custos/desempenho
   - 🔗 https://github.com/HKUDS/nanobot/issues/4029

2. **Global switch para Dream system jobs** (#3885)
   - Configuração explícita para não registrar cron jobs de Dream
   - Usuários querem desabilitar memory consolidation completamente
   - 🔗 https://github.com/HKUDS/nanobot/issues/3885

3. **Modular system prompt** (#4022)
   - Toggle de componentes do system prompt
   - Flexibilização para diferentes casos de uso
   - 🔗 https://github.com/HKUDS/nanobot/pull/4022

4. **DingTalk user isolation** (#4016)
   - Sessions separadas por usuário em群聊
   - Melhora experiência multi-usuário em canais group chat
   - 🔗 https://github.com/HKUDS/nanobot/pull/4016

### Sinais de tendência

- **MCP maturity**: o projeto está investindo fortemente em robustez do subsistema MCP (reconnection, notification handling, tool list changes)
- **Provider flexibility**: diversas contribuições focam em tornar providers mais configuráveis e menos opinativos
- **UI expansion**: múltiplos PRs relacionados a WebUI e interfaces de gerenciamento

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Problema | Severidade | Origem |
|---|---|---|
| Timeout hardcoded de 90s inapropriado para LLMs locais | 🔴 Alta | Issue #4013 |
| Dream job registrado mesmo com memory desabilitado | 🟡 Média | Issue #3885 |
| Limite de 10 mensagens no WeChat restrictivo | 🟡 Média | Issue #2772 |
| GitAgent Protocol foi rejeitado (duplicado) | 🟢 Baixa | PR #4024 |

### Cenários de uso emergentes

- **nanobot-webui** (projeto externo) demonstra demanda por interface gráfica self-hosted
- **Multi-provider setups** requerem maior flexibilidade de configuração por canal
- **Memory management** é área de atenção — usuários querem controle granular sobre quando/como consolidation ocorre

---

## 8. Backlog que Merece Atenção

| Item | Idade | Prioridade | Motivo |
|---|---|---|---|
| #2772 — Limite WeChat | ~54 dias | 🟡 Média | Sem resposta desde 2026-05-27 |
| #3885 — Dream toggle | ~10 dias | 🟡 Média | Discussão ativa, aguardando decisão |
| #3643 — Qiniu provider | ~22 dias | 🟢 Baixa | PR aberto há tempo, revisão pendente |
| #4013 — Stream stalled | ~2 dias | 🔴 Alta | Bug de regressão, já tem PR em andamento |

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| PRs abertos | 15 | 🟢 Saudável |
| PRs fechados (24h) | 6 | 🟢 Ativo |
| Issues ativas | 4 | 🟢 Normal |
| Releases (24h) | 0 | 🟡 Sem release, desenvolvimento intenso |
| Engajamento (#1922) | 👍 10 | 🟢 Forte |

**Veredicto:** O projeto está em **plena atividade de desenvolvimento**, com foco em estabilização (MCP) e expansões de features (Dream, WebUI, providers). Não há sinais de problemas críticos de saúde, mas o bug reportado em #4013 merece atenção prioritária.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Relatório de Projeto
**Data:** 2026-05-28 | ** República Online — Análise Open Source**

---

## 1. Panorama do Dia

O Hermes Agent manteve alta atividade no período de 24 horas com **100 artefatos atualizados** (50 issues + 50 PRs), evidenciando uma comunidade muito ativa. Os esforços concentraram-se fortemente na **stabilização do banco de dados Kanban** — 8 PRs relacionados a corrupção SQLite foram consolidados e mergeados, demonstrando maturidade na resolução de problemas crônicos. Nenhuma release foi publicada, sinalizando que o time foco em consolidação interna antes do próximo lançamento. A taxa de resolução de bugs foi elevada (8 issues fechadas, 10+ PRs closed), mas persistem **três bugs P1 abertos** que merecem atenção prioritária.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em fase de estabilização pré-release. A ausência de nova versão contrasta com o alto volume de PRs mergeados, sugerindo que o time aguarda a consolidação das correções de SQLite antes de cortar uma nova versão.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados de Destaque

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#32857](https://github.com/NousResearch/hermes-agent/pull/32857) | 8 fixes de hardening SQLite consolidados em batch | **Crítico** — protege contra corrupção de torn-write, race conditions e falhas em cenários de alta carga (200-400 commits/hr) |
| [#31294](https://github.com/NousResearch/hermes-agent/pull/31294) | Nunca fazer downgrade silencioso de WAL para DELETE em EIO transitório | **Crítico** — evita degradação invisível do journal mode |
| [#32489](https://github.com/NousResearch/hermes-agent/pull/32489) | Pular pragma WAL redundante em conexões já-WAL | **Performance** — reduz overhead em operações kanban |
| [#31310](https://github.com/NousResearch/hermes-agent/pull/31310) | Guard write_txn ROLLBACK contra auto-abort do SQLite | **Corretude** — previne máscara de exceções originais |
| [#30727](https://github.com/NousResearch/hermes-agent/pull/30727) | Adiciona grace period em detect_crashed_workers | **Corretude** — previne condições de corrida em multi-dispatcher |
| [#32300](https://github.com/NousResearch/hermes-agent/pull/32300) | Post-commit page_count invariant check | **Corretude** — detecta torn-extend corruption no commit time |
| [#32301](https://github.com/NousResearch/hermes-agent/pull/32301) | Hoist zombie reaper para fora de dispatch_once | **Resiliência** — garante reaper mesmo em falhas early-stage |
| [#31208](https://github.com/NousResearch/hermes-agent/pull/31208) | secure_delete + cell_size_check + synchronous=FULL | ** robustness** — proteções fundamentais contra perda de dados |
| [#14188](https://github.com/NousResearch/hermes-agent/pull/14188) | Normalize tool names at dispatch entry | **Interoperabilidade** — tolera "drift" de nomes emitidos por modelos Claude-family |

**Observação:** O revisor @steveonjava (Stephen Chin) é responsável por 7 dos 8 PRs de SQLite, demonstrando expertise concentrado na equipe de kanban.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Análise |
|-------|--------|-------------|----|--------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass Tool Injection | 16 | 13 | **Demanda quente.** Usuários com 50+ tools enfrentam ~3.500-5.000 tokens de overhead por chamada. A solução "two-pass" indicaria maturidade em otimização de contexto. |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents | 13 | 0 | **Discussão estratégica.** Trata da propriedade de auto-modificação e problema de proveniência — questão filosófica + técnica sobre rastreabilidade de habilidades. |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Declarative Skill Protection Policy | 5 | 0 | **Dívida técnica.** Proteção de skills espalhada em 6+ arquivos com enforcement inconsistente — candidato a refactoring |
| [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) | Support multi Telegram bots | 5 | 1 | **Feature de produção.** Suporte a múltiplos bots é necessidade real em deploys com bots primário + dev/team. |

**Padrão identificado:** A comunidade demonstra forte interesse em **otimização de tokens/inferência** (#6839) e **segurança/governança de habilidades auto-modificáveis** (#11692).

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Bugs Críticos (3 abertos)

| Issue | Descrição | Prioridade |
|-------|-----------|------------|
| [#33414](https://github.com/NousResearch/hermes-agent/issues/33414) | Telegram topic routes permanecem vinculados a sessões pai após compressão — mensagens direcionadas para sessões obsoletas | **Telegram Platform** |
| [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | Todas as configurações de modelos customizados desapareceram após update v0.13.0 | **CLI/Config** |
| [#27566](https://github.com/NousResearch/hermes-agent/issues/27566) | Context compression dispara a cada 1-2 turns criando loop infinito — token estimate inflado | **Agent Core** |

### 🟠 P2 — Bugs Importantes (5 abertos)

| Issue | Descrição | Impacto |
|-------|-----------|--------|
| [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) | `/clear` congela terminal (Windows 11/WSL) | UX Windows |
| [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | LLM consolidation usa `skill_manage delete` ao invés de `terminal mv`, bypassando `.archive/` | **Perda de dados** |
| [#31137](https://github.com/NousResearch/hermes-agent/issues/31137) | `MEDIA:` directive perda extensões `.html` e outras | Middleware media |
| [#20084](https://github.com/NousResearch/hermes-agent/issues/20084) | Markdown rendering remove asteriscos de code blocks em TUI | Display C/C++ |
| [#33469](https://github.com/NousResearch/hermes-agent/issues/33469) | Slack: mensagens pai via attachments legado ignoradas em thread context | Slack Platform |

### 🟡 P3 — Bugs Reported Today (22+ abertos, inclui duplicados)

**Bugs de Plataforma:**
- [#33041](https://github.com/NousResearch/hermes-agent/issues/33041) — **CLOSED** TypeError `'NoneType' is not iterable` com Codex API (GPT-5.5/5.3-spark) — retornou `output=None`
- [#33415](https://github.com/NousResearch/hermes-agent/issues/33415) — OpenAI OAuth (openai-codex) TypeError em todos gpt-5.x — fallback não ativa
- [#33433](https://github.com/NousResearch/hermes-agent/issues/33433) — Context bar travada em 0% após commit 43a3f119 (duplicado)
- [#32617](https://github.com/NousResearch/hermes-agent/issues/32617) — xAI OAuth fallback após provider switch por replay de `encrypted_content`
- [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) — **CLOSED** Kanban dispatcher wedges sob multi-thread + subprocess concurrency

**Bugs de CLI/UX:**
- [#26172](https://github.com/NousResearch/hermes-agent/issues/26172) — **CLOSED** `hermes update` em forksnão funciona quando upstream/main está à frente
- [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) — Honcho hybrid memory deixa threads vivas causando SIGABRT em shutdown
- [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) — `/sethome` writes channel ID em `config.yaml` ao invés de `.env`
- [#21457](https://github.com/NousResearch/hermes-agent/issues/21457) — **CLOSED** Root-mode installation error com uv python path

**Bugs de Tools/Plugins:**
- [#7974](https://github.com/NousResearch/hermes-agent/issues/7974) — hindsight_retain falha com 'Connection refused' enquanto hindsight_recall funciona
- [#32698](https://github.com/NousResearch/hermes-agent/issues/32698) — web_extract erro com apenas SearXNG configurado

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (últimas 24h)

| PR/Issue | Título | Potencial Impacto |
|----------|--------|-------------------|
| [#27214](https://github.com/NousResearch/hermes-agent/pull/27214) | WhatsApp: preserve HTML document attachments | **Completude platform** |
| [#33082](https://github.com/NousResearch/hermes-agent/pull/33082) | `POST /v1/conversations/input` endpoint | **API extensibilidade** — suporta `auto`, `steer`, `queue`, `message` |
| [#33487](https://github.com/NousResearch/hermes-agent/pull/33487) | FreeBSD platform support (installer + runtime) | **Portabilidade** — primeiro sistema não-Linux |
| [#33490](https://github.com/NousResearch/hermes-agent/pull/33490) | Add coding-agent-standards skill | **Enrichment** — skill de padrões para agentes autônomos |
| [#27333](https://github.com/NousResearch/hermes-agent/pull/27333) | `catchup` option para recurrent cron jobs | **Scheduler robustness** — executa jobs perdidos |
| [#26150](https://github.com/NousResearch/hermes-agent/pull/26150) | Busy acknowledgement messages configuráveis | **Customização UX** |
| [#33481](https://github.com/NousResearch/hermes-agent/pull/33481) | Docker: align HOME para dashboard e s6 services | **Docker consistency** |
| [#33483](https://github.com/NousResearch/hermes-agent/pull/33483) | Cron: accept absolute paths | **Scheduler ergonomics** |
| [#33484](https://github.com/NousResearch/hermes-agent/pull/33484) | Telegram: raise command menu cap 30→100 | **Plugin extensibilidade** |
| [#33491](https://github.com/NousResearch/hermes-agent/pull/33491) | Kanban DB write safety + JSON error handling | **Resiliência kanban** |

### Features Estratégicas em Discussão

| Issue | Título | Indicação de Roadmap |
|-------|--------|---------------------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading | **Performance/Context** — otimização de tokens pode ser prioritária |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents | **Governança** — diferenciação conceitual do produto |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Declarative Skill Protection Policy | **Arquitetura de segurança** — consolidação de políticas |
| [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) | Multi Telegram bots | **Multi-tenancy** |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | Bounded auto-continue when iteration budget exhausted | **Autonomia** — agentes autônomos não travam |
| [#28213](https://github.com/NousResearch/hermes-agent/issues/28213) | `hermes skills status` + diff | **CLI observabilidade** |
| [#27870](https://github.com/NousResearch/hermes-agent/issues/27870) | Startup notification para home channels | **UX/resiliência** |
| [#20352](https://github.com/NousResearch/hermes-agent/issues/20352) | Skills versioning in ~/.hermes/skills/ | **Versionamento de skills** |

---

## 7. Resumo feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Perda de configurações** | Custom model configs vanished após update v0.13.0 — frustração com migração | Alta |
| **Instabilidade Telegram** | Topic routes ficam presas em sessões obsoletas após compressão | Alta |
| **Performance Context** | ~3.500-5.000 tokens overhead com 50+ tools em cada chamada | Alta |
| **Loop de compressão** | Context compression re-dispara constantemente —token estimate incorreto | Média |
| **Skills sem versionamento** | Skills em `~/.hermes/skills/` são hand-edited markdown sem diff/rollback | Média |
| **Windows UX** | `/clear` congela terminal no Windows 11/WSL | Média |
| **Portabilidade** | Demanda por FreeBSD (PR já aberto) | Emergente |

### Cenários de Uso em Evidência

1. **Agentes autônomos de longo prazo** — feature #16004 sobre bounded auto-continue indica uso em sessões gateway/VS Code de longa duração
2. **Multi-bot Telegram** — deploys com bot primário + bot dev/team
3. **Crons com falha de gateway** — necessidade de catchup jobs perdidos (#27333)
4. **Stack多样化** — FreeBSD, Docker, WSL2, Jail — portabilidade em crescimento

### Satisfação/Insatisfação

| Indicador | Leitura |
|-----------|---------|
| Alta recepção em PRs de SQLite (7 PRs mergeados pelo mesmo revisor) | **Confiança na estabilização** |
| Bug #25272 (custom models vanished) — 2 comentários vs. impacto crítico | **Comunidade reportando, possível frustração** |
| Issue #33414 (Telegram bound to parent) — 1 comentário | **Possível baixa reprodução ou underreporting** |
| PR #33490 (coding-agent-standards skill) — novo skill comunitário | **Iniciativa de auto-empowerment** |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Sem Atribuição

| Issue | Título | TempoSem Resposta | Urgência |
|-------|--------|-------------------|----------|
| [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | LLM consolidation usa skill_manage delete bypassing .archive/ | ~12 dias | **P2 — Perda de dados potencial** |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Declarative Skill Protection Policy | ~10 dias | P3 — Dívida técnica |
| [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | Custom model configs vanished post v0.13.0 | ~15 dias | **P1 — Blocker** |
| [#27566](https://github.com/NousResearch/hermes-agent/issues/27566) | Context compression loop | ~11 dias | **P1 — Usabilidade** |
| [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) | Honcho memory cause SIGABRT | 1 dia | P3 — Crash silencioso |
| [#33469](https://github.com/NousResearch/hermes-agent/issues/33469) | Slack attachments silently skipped | 1 dia | P2 — Contexto perdido |

### PRs Abertos Sem Merge

| PR | Título | Days Open | Prioridade |
|----|--------|-----------|-----------|
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# Relatório do Projeto PicoClaw — 2026-05-28

---

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **atividade intensa e saudável** nesta data, com 10 eventos totais concentrados nas últimas 24 horas. A equipe mantém um ritmo acelerado de desenvolvimento: um build nightly foi publicado (v0.2.9-nightly) e o PR #2853 foi merged, consolidando streaming em tempo real no canal pico. Simultaneamente, a comunidade reportou 4 issues novas, com destaque para bugs críticos envolvendo OAuth e descartamento de tool_calls, além de um PR do mantenedor loafoe (#2957) já endereçando uma dessas falhas. O projeto segue com pipeline de contribution ativo e resposta ágil da equipe core.

---

## 2. Lançamentos

### 🆕 Nightly Build — v0.2.9-nightly.20260527.28ec5793

| Campo | Detalhe |
|---|---|
| **Tipo** | Build automatizado (nightly) |
| **Data** | 2026-05-27 |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.9...main |

**Observações:**
- Este é um build automatizado **não estável** (`This is an automated build and may be unstable. Use with caution.`)
- Release focado em evolução contínua da branch `main`
- Não há changelog detalhado público nesta data — o link de comparação indica que a base `v0.2.9` foi o último tag estável
- **Recomendação:** Usuários em produção devem permanecer na última versão tagged estável

---

## 3. Progresso do Projeto

### PR Merged/Closed (1)

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| **#2853** ✅ | loafoe | `feat(pico): add ChatStream support for real-time token streaming` | **Alto** — Habilita streaming de tokens em tempo real para clientes WebSocket conectados via canal pico, com tracking de streamer por conversação |

🔗 https://github.com/sipeed/picoclaw/pull/2853

**Análise:** A adição de ChatStream ao canal pico representa uma melhoria significativa na experiência do usuário, eliminando latência perceptível na renderização de respostas do modelo. Este PR fechou um gap importante entre a capacidade do backend (streaming de providers) e a entrega ao cliente final.

---

### PRs em Aberto com Progresso Recente (4)

| PR | Autor | Área | Descrição | Status |
|---|---|---|---|---|
| **#2899** | yangwenjie1231 | MQTT Channel | Adiciona verificação TLS configurável (resolveria vulnerabilidade MITM) | stale ⚠️ |
| **#2696** | loafoe | MCP | Headers dinâmicos por request via contexto do canal | Em revisão |
| **#2957** | loafoe | Channels | **Corrige tool_calls descartados durante streaming** | Recém-aberto |
| **#2956** | yuxuan-7814 | Config | Preserva estado `enabled` do canal ao fazer merge do security.yml | Recém-aberto |

🔗 https://github.com/sipeed/picoclaw/pulls

**Destaques:**
- **#2957** (loafoe): Resolve diretamente a issue #2958 reportada no mesmo dia — ciclo de resposta notável
- **#2899** precisa de atenção urgente — marcado como stale, mas corrige uma vulnerabilidade real de segurança

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Contexto (por volume de detalhes)

| Issue | Autor | Tipo | Tema Principal |
|---|---|---|---|
| **#2952** | xhynice | Feature |堆栈 de funcionalidades: ações exec, canal QQ, UI de provedores |
| **#2953** | livinghorror | Bug | OAuth OpenAI/Codex retornando resposta vazia |
| **#2954** | yeozhang | Bug | Incompatibilidade com Android 32-bit |
| **#2958** | loafoe | Bug | tool_calls descartados em requests consecutivos |

🔗 https://github.com/sipeed/picoclaw/issues

### Análise das Demandas

**#2952 — Feature Request "好久没发新版本了" (xhynice):**
Este issue carrega tom de frustração ("há muito tempo sem nova versão") e consolida **3 problemas distintos**:
1. Comportamento inconsistente do comando `exec` com ações `run`
2. Bug no canal QQ: reinicialização em loop após reboot
3. Melhorias na UI de configuração de modelos (seletor de provedores, teste de conexão, listagem automática)

**Interpretação:** A comunidade demonstra **demanda reprimida por release estável** e expõe lacunas de usabilidade na interface de administração.

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas Últimas 24h

| Issue | Severidade | Descrição | Impacto |
|---|---|---|---|
| **#2953** | **Crítica** 🔴 | OAuth OpenAI/Codex retorna resposta vazia por ignorar `output_text.delta` stream events | Usuários não conseguem usar Codex via OAuth |
| **#2954** | **Alta** 🟠 | Incompatibilidade com Android 32-bit | Perda de base de usuários móveis |
| **#2958** | **Média** 🟡 | tool_calls descartados em requests consecutivos via canal pico | Funcionalidade de tools parcialmente quebrada |

🔗 https://github.com/sipeed/picoclaw/labels/bug

### Correlação com PRs Abertos

> **Nota:** O mantenedor loafoe abriu o PR #2957 como correção para #2958 no mesmo dia — indicando priorização ativa do bug. O bug #2953 (OAuth) ainda não possui PR associada, sugerindo investigação em andamento.

**Métricas de Estabilidade:**
- **Regressões críticas:** 1 (OAuth)
- **Bugs com workaround:** ninguno identificado
- **Tempo médio de resposta:** <24h (loafoe respondeu #2953 e #2958)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| Issue | Autor | Demanda | Viabilidade |
|---|---|---|---|
| **#2952** | xhynice | Teste de conexão API, listagem automática de modelos, seleção de provedores na UI | Alta — funcionalidades de UI |
| **#2952** | xhynice | Comportamento consistente de `exec` com ações `run` | Média — requer mudança de arquitetura de comandos |
| **#2952** | xhynice | Correção do loop de reinicialização do canal QQ | Alta — bug fix |

### Sinais de Roadmap

1. **Suporte MCP robusto:** PR #2696 implementa headers dinâmicos por canal — indica direção de permitir que diferentes canais (Telegram, QQ, pico, etc.) customizem contexto para servidores MCP

2. **Segurança de canais:** PR #2899 busca corrigir verificação TLS hardcoded no MQTT — sinaliza priorização de hardening

3. **Streams universais:** O merge de #2853 confirma que streaming em tempo real é estratégia consolidada, provavelmente a base para features de agente interativo

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Manifestação | Severidade |
|---|---|---|
| **Incompatibilidade mobile** | Usuários Android 32-bit não conseguem usar (potencial perda de audience) | 🟠 Alta |
| **UX de configuração** | Falta de UI intuitiva para adicionar modelos e testar conexões | 🟡 Média |
| **Bugs de canal específico** | Canal QQ em loop de reinicialização (comportamento não determinístico) | 🟠 Alta |
| **Stream OAuth quebrado** | Usuários Codex via OAuth totalmente impedidos | 🔴 Crítica |

### Cenários de Uso Observados

- **Agente via WebSocket (pico channel):** Reforçado como caso de uso core — investimento em streaming (#2853)
- **Canais alternativos (QQ, Telegram, MQTT):** Base de usuários diversificada, cada canal com bugs isolados
- **Execução de comandos remotos:** Funcionalidade `exec` com `actions:run` ainda problemática
- **Integração MCP:** Crescimento de casos de uso com servidores MCP externos

### Satisfação Geral

📊 **Tendência:** Neutra para positiva — comunidade ativa, bugs críticos estão sendo endereçados, mas a falta de release estável recente (#2952) gera fricção.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta há >7 dias

| Item | Tipo | Autor | Idade Aproximada | Prioridade |
|---|---|---|---|---|
| **#2696** | PR | loafoe | ~30 dias | 🟡 Média — requer review |
| **#2899** | PR (stale) | yangwenjie1231 | ~8 dias | 🔴 Alta — vulnerabilidade de segurança |

🔗 https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-asc

### Recomendações de Priorização

1. **CRÍTICA:** Reviver/revisar **#2899** — PR para correção de TLS no MQTT está stale mas corrige vulnerabilidade MITM. Ignorar este PR por mais tempo pode expor usuários.

2. **ALTA:** Review de **#2696** — feature de headers dinâmicos MCP está madura em idade, pode estar pronta para merge.

3. **MÉDIA:** Issue **#2953** (OAuth) não possui PR — considerar assigning a mantenedor ou voluntários para investigação.

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────────────┐
│                    PICO CLAW — 2026-05-28               │
├─────────────────────────────────────────────────────────┤
│  📦 Releases (24h):     1 nightly build                 │
│  🔧 PRs (total 6):      1 merged, 5 abertas             │
│  🐛 Issues (total 4):    4 abertas, 0 fechadas          │
│  ⚠️  PR stale:          1 (#2899 - security fix)       │
│  🔴 Bug crítico:        1 (OAuth #2953)                │
│  🟢 Bug com PR:         1 (#2958 → #2957)              │
└─────────────────────────────────────────────────────────┘
```

**Saúde Geral:** 🟢 Funcional — atividade intensa, bugs sendo endereçados rapidamente, mas atenção necessária em segurança (MQTT TLS) e release management.

---

*Relatório gerado com base em dados do GitHub para sipeed/picoclaw em 2026-05-28.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-28

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** nesta data, com 21 issues e 50 PRs atualizados nas últimas 24 horas. O foco principal continua sendo a migration para a arquitetura **Reborn**, evidenciada por 10+ issues e PRs relacionados ao módulo. A saúde geral é positiva: 5 issues foram fechadas (incluindo marcos de autenticação Reborn), e 26 PRs foram merged. Um ponto de atenção: o teste E2E noturno falhou, e há uma regressão de bug na verificação de imagem sandbox no wizard de setup.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto segue em ritmo intenso de desenvolvimento interno sem release formal. Os PRs merged indicam que componentes estão estáveis o suficiente para integração contínua.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (9 itens relevantes)

| PR | Título | Escopo | Impacto |
|---|---|---|---|
| [#4105](https://github.com/nearai/ironclaw/pull/4105) | Fix Reborn HTTP save_to authority | auth, filesystem | Corrige vulnerabilidade de autoridade em escritas HTTP |
| [#4141](https://github.com/nearai/ironclaw/pull/4141) | Type prompt text validation surfaces | reborn | Melhora segurança na validação de prompts |
| [#4089](https://github.com/nearai/ironclaw/pull/4089) | Notify parent on background subagent completion | agent | Corrige deadlock em subagentes em background |
| [#4070](https://github.com/nearai/ironclaw/pull/4070) | Add auth refresh cleanup lifecycle | reborn | Adiciona ciclo de vida de refresh de tokens |
| [#4139](https://github.com/nearai/ironclaw/pull/4139) | Fix reply completion stop strategy | codex | Corrige bypass incorreto em reply-only turns |
| [#4140](https://github.com/nearai/ironclaw/pull/4140) | Separate model content from safe summaries | reborn | Melhora isolamento de conteúdo seguro |
| [#4136](https://github.com/nearai/ironclaw/pull/4136) | Block missing runtime credentials on auth gate | auth | Melhora UX de credenciais faltantes |
| [#4094](https://github.com/nearai/ironclaw/pull/4094) | Wire process sandbox spawn approvals | sandbox | Reconecta aprovações de sandbox |
| [#4087](https://github.com/nearai/ironclaw/pull/4087) | Add coder/explorer subagent flavors | agent | Novos sabores de subagente disponíveis |
| [#4143](https://github.com/nearai/ironclaw/pull/4143) | Remove per-skill snippet budget | reborn | Simplifica orçamento de contexto |
| [#4133](https://github.com/nearai/ironclaw/pull/4133) | Treat "null" string as absent | builtin | Compatibilidade com modelos quantizados |

**Avanços-chave:**
- **Autenticação Reborn** (#4070, #4136): Ciclo de vida de refresh e tratamento de credenciais completo
- **Subagentes** (#4089, #4087): Notificação de completion e novos sabores adicionados
- **Segurança** (#4105, #4141): Autoridade de escrita e validação de prompts

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Atividade (comentários/reações)

| Issue | Título | Comentários | Reações | Tendência |
|---|---|---|---|---|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | ProductWorkflow + InboundTurnService facade | 4 | 0 | Arquitetura Reborn - P0 |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | EventStreamManager for durable projection | 2 | 0 | Arquitetura Reborn - P0 |
| [#3436](https://github.com/nearai/ironclaw/issues/3436) | DeepSeek 400 reasoning_content bug | 1 | 1 | Bug de provider |
| [#3883](https://github.com/nearai/ironclaw/issues/3883) | Credential recovery projections | 1 | 0 | ✅ Fechada |
| [#3882](https://github.com/nearai/ironclaw/issues/3882) | Manual token secure-submit | 1 | 0 | ✅ Fechada |
| [#3889](https://github.com/nearai/ironclaw/issues/3889) | Approval interaction service | 1 | 0 | ✅ Fechada |

**Análise:** O tema dominante é a **arquitetura Reborn**, especialmente os módulos M2 (inbound-workflow) e M5 (events-streaming). O ticket #3436 sobre DeepSeek indica demanda por suporte robusto a reasoning models.

---

## 5. Bugs e Estabilidade

### 🔴 Alta Severidade

| Issue | Título | Link | Status |
|---|---|---|---|
| #4108 | Nightly E2E failed | [#4108](https://github.com/nearai/ironclaw/issues/4108) | ABERTA |
| #4106 | Sandbox image check bypasses SANDBOX_IMAGE env | [#4106](https://github.com/nearai/ironclaw/issues/4106) | ABERTA |

### 🟡 Média Severidade

| Issue | Título | Link | Status |
|---|---|---|---|
| #3436 | DeepSeek 400: reasoning_content must be passed back | [#3436](https://github.com/nearai/ironclaw/issues/3436) | ABERTA |
| #4115 | Remove button visibility on WeChat | [#4115](https://github.com/nearai/ironclaw/issues/4115) | ABERTA |

### ✅ Corrigidos Recentemente

- **#4089**: Subagentes em background não notificavam completion (agora merged)
- **#4105**: Authority de save_to em builtin HTTP corrigido

**Recomendação:** Priorizar investigação do E2E noturno (#4108) e validar se a falha é flaky ou regressão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas (Issues Abertas)

| Issue | Título | Escopo | Prioridade | Link |
|---|---|---|---|---|
| #4149 | Inject ambient runtime context into prompts | agent, llm, reborn | — | [#4149](https://github.com/nearai/ironclaw/issues/4149) |
| #4147 | Design durable background subagent completion delivery | agent | — | [#4147](https://github.com/nearai/ironclaw/issues/4147) |
| #4113 | GSuite token refresh and account health | reborn | — | [#4113](https://github.com/nearai/ironclaw/issues/4113) |
| #4112 | WebUI OAuth prompt and browser approval E2E | reborn | — | [#4112](https://github.com/nearai/ironclaw/issues/4112) |
| #4118 | CLI provider add/login parity | reborn | — | [#4118](https://github.com/nearai/ironclaw/issues/4118) |
| #4125 | Auth interaction gate cleanup | reborn | — | [#4125](https://github.com/nearai/ironclaw/issues/4125) |
| #4120 | Declarative capability policy for local-dev | reborn | P2 | [#4120](https://github.com/nearai/ironclaw/issues/4120) |
| #4116 | Carry v1 Google/GitHub/NEAR SSO into WebChat v2 | auth | high | [#4116](https://github.com/nearai/ironclaw/issues/4116) |

### PRs Abertos em Andamento

| PR | Título | Tamanho | Link |
|---|---|---|---|
| #4144 | Add config for regex skill activation | L | [#4144](https://github.com/nearai/ironclaw/pull/4144) |
| #4127 | Make local-dev capability policy declarative | XL | [#4127](https://github.com/nearai/ironclaw/pull/4127) |
| #4111 | Add GSuite OAuth backend | XL | [#4111](https://github.com/nearai/ironclaw/pull/4111) |
| #4110 | Add Reborn context compaction phase one | XL | [#4111](https://github.com/nearai/ironclaw/pull/4110) |
| #4135 | WebUI v2 mount coverage | XL | [#4135](https://github.com/nearai/ironclaw/pull/4135) |

**Sinais de Roadmap:**
1. **GSuite Integration**: Backend OAuth + refresh + E2E wiring em progresso
2. **Context Compaction**: Phase 1 em revisão (otimização de contexto)
3. **Capability Policy Declarativa**: Migration de Rust hardcoded → TOML
4. **SSO Continuity**: Migração de SSO v1 → WebChat v2

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Problema | Evidência |
|---|---|---|
| **Provider** | DeepSeek com reasoning mode retorna 400 | [#3436](https://github.com/nearai/ironclaw/issues/3436) (1 reação 👍) |
| **UI/UX** | Botão "Remove" invisível até hover no WeChat | [#4115](https://github.com/nearai/ironclaw/issues/4115) |
| **Setup** | Wizard ignora SANDBOX_IMAGE env var | [#4106](https://github.com/nearai/ironclaw/issues/4106) |
| **Subagentes** | Resultados de background subagents ficavam órfãos | [#4089](https://github.com/nearai/ironclaw/pull/4089) (já corrigido) |

### Cenários de Uso Observados

- **GSuite users** desejam OAuth completo com refresh automático (#4113)
- **CLI users** querem paridade de provider add/login (#4118)
- **DeepSeek users** precisam de suporte a reasoning_content (#3436)
- **WeChat users** enfrentam problemas de UX em flows de remoção (#4115)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem

| Issue | Título | Criado | Idade | Link |
|---|---|---|---|---|
| #3968 | GSuite shim and live harness coverage | 2026-05-24 | 4 dias | [#3968](https://github.com/nearai/ironclaw/issues/3968) |
| #4115 | UI/UX issues in Channel Removal (WeChat) | 2026-05-27 | 1 dia | [#4115](https://github.com/nearai/ironclaw/issues/4115) |
| #4120 | Declarative capability policy | 2026-05-27 | 1 dia | [#4120](https://github.com/nearai/ironclaw/issues/4120) |
| #4149 | Ambient runtime context injection | 2026-05-27 | 1 dia | [#4149](https://github.com/nearai/ironclaw/issues/4149) |

### Arquitetura Reborn - Marcos间 Parentes

| Issue | Status | Dependências | Link |
|---|---|---|---|
| #3031 | Em progresso | — | Epic: Reborn core |
| #3289 | Em progresso | — | Epic: Auth integration |
| #3036 | Em progresso | — | Epic: Configuration-as-Code |
| #3810, #3811, #3812 | ✅ Fechadas | ✅ | Auth steps base |
| #3881-3883 | ✅ Fechadas | ✅ | Auth routes + recovery |
| #3889 | ✅ Fechada | ✅ | Approval interaction |
| #3280, #3281 | 🔄 Abertas | P0 | ProductWorkflow + EventStreamManager |

**Recomendação:** As issues #3280 e #3281 (P0, ProductWorkflow/EventStreamManager) têm 4 e 2 comentários respectivamente mas não tiveram activity recente. Verificar se há bloqueios ou necessidade de realinhamento.

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|---|---|
| Issues ativas | 16 |
| Issues fechadas | 5 |
| PRs abertos | 24 |
| PRs merged/fechados | 26 |
| Releases | 0 |
| Falhas de CI | 1 (E2E nightly) |
| Bugs novos | 3 |
| Features propostas | 8+ |
| Progresso Reborn | Contínuo (10+ items) |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-05-28. Última atualização: 2026-05-28.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)

**Data de Referência:** 2026-05-28  
**Autor:** Analista de Projetos Open Source — Agentes de IA e Assistentes Pessoais

---

## 1. Panorama do Dia

O projeto CoPaw (também conhecido como QwenPaw) demonstra **alta atividade** na data de hoje, com 40 issues e 28 PRs atualizados nas últimas 24 horas. O lançamento oficial da **v1.1.9** marca um marco significativo, introduzindo o aplicativo desktop Tauri 2.x e o Coding Mode com IDE web de três painéis. A comunidade está engajada com 63 comentários na issue de tarefas abertas (#2291) e contribuições diversificadas, incluindo integração com GitLab (#4719) e Xiaomi MiMo (#4722). No entanto, a versão beta (v1.1.9-beta.1) apresenta instabilidades que estão gerando reports de bugs, especialmente relacionados a CLI local e sessões de chat.

---

## 2. Lançamentos

### v1.1.9 — Release Oficial
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9

**Principais Novidades:**

| Componente | Mudança |
|------------|---------|
| **Desktop App** | Novo aplicativo nativo Tauri 2.x para macOS e Windows |
| **Coding Mode** | Web IDE com layout de três painéis (árvore de arquivos, editor com abas, terminal) |

**PR Relacionado:** [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Introdução do Tauri Desktop App

---

### v1.1.9-beta.2 — Release Beta
**Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.2

**Correções Incluídas:**
- **Chat:** Redirecionamento para Coding Mode quando ativado ([#4677](https://github.com/agentscope-ai/QwenPaw/pull/4677))
- **MCP:** Suporte a `openExternalLink` para OAuth no desktop pywebview ([#4679](https://github.com/agentscope-ai/QwenPaw/pull/4679))

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (Principais)

| # | Título | Impacto | Link |
|---|--------|---------|------|
| **#4726** | Refine README news section e bump para v1.1.9 | Documentação redesenhada com hierarquia visual em 4 idiomas | [PR #4726](https://github.com/agentscope-ai/QwenPaw/pull/4726) |
| **#4720** | Implement message timestamp formatting | Funcionalidade highly-requested: timestamps em mensagens do chat | [PR #4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) |
| **#4725** | Add loading state para workspace download | Melhoria de UX: feedback visual durante downloads | [PR #4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) |
| **#4718** | Add SVG MIME type para Windows | Correção de renderização do logo no Windows | [PR #4718](https://github.com/agentscope-ai/QwenPaw/pull/4718) |
| **#4690** | Position-aware boolean schema sanitizer | Correção de corrupção de JSON Schema em provedores OpenAI | [PR #4690](https://github.com/agentscope-ai/QwenPaw/pull/4690) |
| **#4724** | Avoid hidden Windows subprocess flags | Correção de falso-positivo no Windows Defender | [PR #4724](https://github.com/agentscope-ai/QwenPaw/pull/4724) |
| **#4716** | Per-hunk Keep/Undo + smart copy-to-chat | Melhorias no diff editor do Coding Mode | [PR #4716](https://github.com/agentscope-ai/QwenPaw/pull/4716) |
| **#4615** | Fix acp orphan process after close | Correção de processo órfão após fechamento | [PR #4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) |

### PRs em Review (Primeiros Contribuidores)

| # | Título | Destaque |
|---|--------|----------|
| **#4708** | Feishu thread reply support | Resposta em threads do Feishu (primeiro contribuidor) |
| **#4719** | GitLab skill source support | Nova fonte de habilidades |
| **#4622** | DataPaw plugin — 12 BI skills | Plugin de análise de dados |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Status | Link |
|---|--------|-------------|--------|------|
| **#2291** | Help Wanted: Open Tasks — Come Contribute! | 63 | OPEN | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **#4680** | Bug: Skill rename causa agente sumir | 7 | CLOSED | [Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) |
| **#4662** | Feature: Adicionar timestamp às mensagens | 6 | CLOSED | [Issue #4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) |
| **#4408** | Enhancement: Pasta unificada para workdir (.qwenpaw) | 5 | OPEN | [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) |
| **#4652** | Enhancement: Sistema de memória com总结-关联-提醒 | 3 | OPEN | [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) |
| **#4702** | Feature:考虑 RBAC 管理员 多用户支持 | 2 | OPEN | [Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) |

### Análise de Demandas

**1. Contribuição Comunitária (#2291 — 63 comentários)**  
A issue de "tarefas abertas para contribuidores" continua como o hub central de coordenação, com prioridade P0→P2. Isso indica uma **comunidade ativa e bem estruturada** para newcomers.

**2. Organização de Arquivos (#4408)**  
Usuários solicitam padrão similar ao `.opencode` — sugerindo que a adoção de ferramentas como Cursor/OpenCode está influenciando as expectativas dos usuários.

**3. Sistema de Memória Evolutivo (#4652)**  
Demanda por "inteligência" real no sistema de memória, não apenas logging. Os usuários querem:
- Síntese e compressão periódica
- Estado (resolvido/não resolvido)
- Índice de correlações cruzadas
- Lembretes proativos

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (por Severidade)

#### 🔴 Críticos/Bloqueantes

| # | Título | Descrição | Status | Link |
|---|--------|-----------|--------|------|
| **#4712** | CLI local não funciona em v1.1.9-beta.1 | WebSocket não conecta em subprocessos Windows (ferramentas como Feishu CLI) | OPEN | [Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) |
| **#4704** | Crash no macOS Tahoe 26.5 | SIGSEGV em `tokio-rt-worker` após upgrade do sistema | OPEN | [Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) |
| **#4731** | Browser launch falha (Edge exit code 21) | Playwright não consegue iniciar browser no Windows 11 sem Chrome | OPEN | [Issue #4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) |

#### 🟠 Altos

| # | Título | Descrição | Status | Link |
|---|--------|-----------|--------|------|
| **#4625** | Thinking process retorna XML incompatível | Formato XML no thinking causa interrupção com modelos MiniMax-M2.5 | OPEN | [Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) |
| **#4713** | Histórico de chat desaparece ao trocar de página | Sessão não preservada após navegação | OPEN | [Issue #4713](https://github.com/agentscope-ai/QwenPaw/issues/4713) |
| **#4666** | Models config page lost after new session | Configurações de modelo perdidas após criar nova conversa | OPEN | [Issue #4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| **#4700** | Console build fails: missing monaco-editor types | Erro TypeScript no TabbedEditor.tsx | OPEN | [Issue #4700](https://github.com/agentscope-ai/QwenPaw/issues/4700) |

#### 🟡 Medios

| # | Título | Descrição | Status | Link |
|---|--------|-----------|--------|------|
| **#4705** | Mission Phase 2 continua após user input bloqueante | Loop infinito em certos cenários | OPEN | [Issue #4705](https://github.com/agentscope-ai/QwenPaw/issues/4705) |
| **#4714** | Nova task não entra em fila enquanto推理 está ativo | Input box perde focus após nova conversa | OPEN | [Issue #4714](https://github.com/agentscope-ai/QwenPaw/issues/4714) |
| **#4733** | Desktop app não restaura último agente/sessão | Persistência de estado após reinicialização | OPEN | [Issue #4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) |
| **#4670** | Download button no Files page com delay | Botão não responde ao clique imediatamente | CLOSED | [Issue #4670](https://github.com/agentscope-ai/QwenPaw/issues/4670) |

### Bugs Resolvidos Hoje

| # | Título | Link |
|---|--------|------|
| **#4653** | Cron jobs compartilhando session | [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) |
| **#4649** | Orphaned cron jobs não limpos | [Issue #4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) |
| **#3468** | Console sessão trava | [Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) |
| **#4680** | Renomear skill causa perda de agente | [Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Potencial Impacto | Link |
|---|--------|-------------------|------|
| **#4702** | RBAC / Multi-usuário para Enterprise | ⭐⭐⭐ Alta prioridade enterprise | [Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) |
| **#4715** | Xiaomi MiMo Token Plan como provider built-in | Integração de novo provedor | [Issue #4715](https://github.com/agentscope-ai/QwenPaw/issues/4715) |
| **#4721** | Mostrar cache hit rate em Token usage | Melhor visibilidade de custos | [Issue #4721](https://github.com/agentscope-ai/QwenPaw/issues/4721) |
| **#4730** | Suporte keyboard/markdown em channels send | Suporte a QQ cards interativos | [Issue #4730](https://github.com/agentscope-ai/QwenPaw/issues/4730) |
| **#4732** | Ordenar histórico por última conversa | UX improvement | [Issue #4732](https://github.com/agentscope-ai/QwenPaw/issues/4732) |

### PRs de Features em Desenvolvimento

| # | Título | Status | Link |
|---|--------|--------|------|
| **#4722** | Xiaomi MiMo provider | OPEN | [PR #4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) |
| **#4708** | Feishu thread reply | UNDER REVIEW | [PR #4708](https://github.com/agentscope-ai/QwenPaw/pull/4708) |
| **#4719** | GitLab skill source | UNDER REVIEW | [PR #4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) |
| **#4701** | Approve All para tool-guard | UNDER REVIEW | [PR #4701](https://github.com/agentscope-ai/QwenPaw/pull/4701) |
| **#4622** | DataPaw plugin (12 BI skills) | OPEN | [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Issues Relacionadas |
|-----------|-----------|---------------------|
| **Estabilidade v1.1.9-beta.1** | Múltiplos bugs bloqueantes na versão beta, afetando CLI local, browser launch, e sessions | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712), [#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713), [#4714](https://github.com/agentscope-ai/QwenPaw/issues/4714) |
| **Persistência de Estado** | Perda de configurações, sessões e histórico ao navegar ou reiniciar | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666), [#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713), [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) |
| **UX de Desktop** | Problemas com subprocessos Windows, browser launch, e restauração de estado | [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704), [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731), [#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) |

### Cen

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Report — 2026-05-28

## 1. Panorama do Dia

O projeto ZeroClaw manteve **alta atividade** em 28/05, com 50 PRs e 28 issues atualizados nas últimas 24h, mesmo sem novos lançamentos. O foco principal concentra-se na estabilização da versão 0.8-beta1: múltiplos bugs críticos (S1) foram reportados e estão sendo tratados — incluindo falhas no daemon em containers, problemas com WebSocket no Web UI e regressões de build no Windows. A comunidade demonstra engajamento significativo em propostas arquiteturais de longo prazo (plugin system, skill-scoped tool elevation, cron scheduler pipeline), com pelo menos 4 RFCs ativas tramitando simultaneamente.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O repositório encontra-se em modo de estabilização pré-v0.8.1, conforme indicado pelo tracker de fila de PRs ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)). A ausência de releases novas sugere que a equipe aguarda resolução de bugs bloqueantes antes do próximo tag.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (12 total)

| PR | Descrição | Tamanho | Impacto |
|----|-----------|---------|---------|
| [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) | **feat(gateway): preserve websocket steering transcript** | XL | Adiciona fila bounded para frames de steering durante streaming, preservando texto já-commitado antes de aplicar steering messages. Resolve regressão de UI. |
| [#6936](https://github.com/zeroclaw-labs/zeroclaw/pull/6936) | **feat(web): declare minimum browser floor** | XS | Adiciona `browserslist` (`chrome>=111`, `firefox>=113`, `safari>=16.2`) e banner para browsers não suportados. Melhora UX e reduz relatórios de bug redundantes. |
| [#6918](https://github.com/zeroclaw-labs/zeroclaw/pull/6918) | **feat(config): generalize #[secret] via SecretField trait** | L | Refatora tratamento de secrets no derive `Configurable`, eliminando branching duplicado e preparando terreno para novos tipos. |
| [#6962](https://github.com/zeroclaw-labs/zeroclaw/pull/6962) | **fix(tests): parallel-dispatch deterministic overlap** | XS | Substitui asserção de wall-clock por verificação determinística de overlap, eliminando flakiness em CI. |
| [#6894](https://github.com/zeroclaw-labs/zeroclaw/pull/6894) | **fix(gateway): structured onboarding repair items** | M | Adiciona repair targets estruturados ao `/api/onboard/status`, permitindo dashboard navegar direto às superfícies de setup incompletas. |
| [#6897](https://github.com/zeroclaw-labs/zeroclaw/pull/6897) | **fix(cron): persist manual delivery failures as degraded** | M | Garante que falhas de entrega best-effort em cron manual sejam persistidas como `degraded` em vez de `ok`. |
| [#6934](https://github.com/zeroclaw-labs/zeroclaw/pull/6934) | **fix(discord): keep gateway preflight 429 retryable** | XS | Mantém HTTP 429 como erro tipado ao invés de `DiscordListenerFatalError`, habilitando retry/backoff. |
| [#6882](https://github.com/zeroclaw-labs/zeroclaw/pull/6882) | **fix(runtime): sanitize compressor media markers** | S | Remove media markers antes de aplicar limite do summarizer, evitando truncamento que quebra marcadores. |
| [#6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947) | **fix(cli): suppress INFO logs in agent interactive mode** | XS | Corrige interleaving de logs INFO com texto de conversa no modo TTY interativo. |
| [#6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) | **feat(agents): per-agent `classifier_provider`** | M | Permite routing de intent classification para modelo mais barato, reduzindo custos operacionais. |

**Destaque:** O PR [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) (WebSocket steering transcript) é o merge mais significativo do período, resolvendo uma regressão que impactava diretamente a integridade de transcrições durante steering em tempo real.

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Item | Tipo | Comentários | 👍 | Tema |
|------|------|-------------|-----|------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Bug | 14 | 4 | **DeepSeek-V4 API incompatibility** (thinking mode) |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC | 7 | 0 | Work Lanes, Board Automation, Label Cleanup |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC | 1 | 0 | Security UX, credential boundaries, isolation defaults |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | RFC | 1 | 0 | Unified output routing model |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) | RFC | 0 | 0 | Deconflict Plugin System Goals in FND-001 |

**Análise:**

1. **DeepSeek-V4 incompatibility (#6059)** — Com 14 comentários e 4 👍, este é o issue com maior atenção da comunidade. Relata erro ao usar DeepSeek-V4-Pro e V4-Flash relacionado ao "thinking mode", indicando quebra de compatibilidade com novo formato de API. Status: `in-progress`.

2. **RFC #6808 (Work Lanes)** — Proposta de governança para automação de filas de PR e labels, visando reduzir carga manual dos mantenedores. Adiada para `0.80-beta1`.

3. **Segurança emerge como tema recorrente** — Três issues separados (#6971, #6971, #6959) tratam de boundaries de credenciais, tool access policy e isolamento. A equipe está ativamente refinando posturais de segurança.

4. **Migração de Letta (#6969)** — Usuário migrating from Letta reporta perda de controle de roteamento de output, sinalizando necessidade de feature parity com competidores.

---

## 5. Bugs e Estabilidade

### Bugs S1 (Workflow Bloqueado) — 3 casos

| Issue | Descrição | Status | Link |
|-------|-----------|--------|------|
| #6888 | Daemon 'channels' exits em rootless Podman container (v0.8-beta-1) | `in-progress` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) |
| #6959 | ToolAccessPolicy ignorado para eager built-in tools (security bypass) | `in-progress` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6959) |
| #6975 | `zeroclaw onboard` completa seções sem escrever config | `open` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) |

### Bugs S2 (Degraded Behavior) — 7 casos

| Issue | Descrição | Status | Link |
|-------|-----------|--------|------|
| #6059 | DeepSeek-V4 API format incompatibility | `in-progress` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| #6965 | Canvas page never receives frames via WebSocket | `open` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) |
| #6976 | Web UI WebSocket chat fails 1006 — missing `?agent=` | `open` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6976) |
| #6958 | Matrix channel amnesia between messages (session keyed on event_id) | `open` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) |
| #6944 | Interactive mode prints [system] logs inline | `in-progress` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) |
| #6923 | OpenAI Codex OAuth falls back to wrong API key | `open` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) |
| #6632 | cron_run persists failures as `ok` | `accepted` | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) |

### Bugs CI/Build

| Issue | Descrição | Severidade | Link |
|-------|-----------|------------|------|
| #6964 | Windows desktop build fails CVT1100/LNK1123 (duplicate MANIFEST) | S1 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) |

**Análise:** O período mostra regressões significativas na 0.8-beta1, particularmente em containerization (Podman), WebSocket reliability, e security policy enforcement. A segurança (ToolAccessPolicy bypass — [#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959)) requer atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento (PRs Abertos)

| PR | Feature | Tamanho | Link |
|----|---------|---------|------|
| [#6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) | `channel_send` tool com default_target | XL | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) |
| [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | Skill-scoped builtin tool elevation | L | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) |
| [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) | Lean default channel bundle | M | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) |
| [#6968](https://github.com/zeroclaw-labs/zeroclaw/pull/6968) | Configurable TTS uri/response_format | S | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6968) |
| [#6946](https://github.com/zeroclaw-labs/zeroclaw/pull/6946) | MCP resource/prompt bridge tools | M | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6946) |
| [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) | WhatsApp LID JIDs compatibility | M | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) |

### RFCs Ativas (Roadmap Signals)

| RFC | Tema | Meta | Link |
|-----|------|------|------|
| #6808 | Work Lanes, Board Automation, Label Cleanup | 0.80-beta1 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| #6971 | Security UX, credential boundaries, isolation defaults | TBD | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) |
| #6943 | Replace Extism with wasmtime (FND-001 deconflict) | TBD | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) |
| #6954 | Route cron through orchestrator pipeline | TBD | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |
| #6489 | "Everything is a plugin" — Integrations → unified catalog | Long-term | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |

### Trackers de Release

| Tracker | Foco | Link |
|---------|------|------|
| #6253 | Skills support & UX (v0.7.6) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| #6825 | TUI UX improvements | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) |
| #6970 | v0.8.1 integration/channel/provider/tool queue | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) |

**Sinais de roadmap:**
- **Plugin architecture unificação (#6489)** continua como direção de longo prazo, com esforços de deconflict ([#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)) para resolver contradições no FND-001
- **Segurança defensiva** ganham força com RFCs de isolation defaults e credential boundaries
- **Skill system** em expansão com elevation mechanism ([#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924))

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Problema | Severidade | Link |
|---------|----------|------------|------|
| Usuário migrating from **Letta** | Perda de controle de roteamento de output (peer modality + send_via) | Alta | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) |
| Usuários de **compact keyboards** | TUI inacessível sem F-keys (Logitech MX Keys Mini, Keychron) | Média | [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) |
| Usuários **rootless Podman** | Daemon falha ao iniciar com config válida | S1 | [#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) |
| Usuários **Matrix** | Bot "esquece" contexto

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*