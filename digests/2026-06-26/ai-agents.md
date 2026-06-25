# Resumo diário do ecossistema de agentes de IA 2026-06-26

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-25 21:27 UTC

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

**Data de referência:** 2026-06-26

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **alta atividade heterogênea** em 26 de junho de 2026. Sete projetos ativos (exceto NullClaw, inerte) movimentaram coletivamente **293 issues e 257 PRs** em 24 horas, evidenciando maturidade distribuída. O panorama revela dois eixos de desenvolvimento: **consolidação de estabilidade** (PicoClaw, IronClaw) versus **inovação rápida com riscos** (NanoBot, Hermes Agent). A segurança emerge como tema transversal — 10+ vulnerabilidades críticas reportadas entre NanoBot e Hermes Agent, contrastando com a postura defensiva de ZeroClaw e IronClaw. Nenhum projeto publicou releases formais, indicando que a atividade atual serve como base para lançamentos iminentes nas trilhas v0.8.x (ZeroClaw) e Reborn (IronClaw).

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Avaliação de Saúde |
|---------|:---:|:---:|:---:|:---:|:---:|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚫ Inativo |
| **NanoBot** | 22 | 38 | 14 | 0 | 🔴 Crítico — 7 CVEs de segurança |
| **Hermes Agent** | 50 | 50 | 10 | 0 | 🔴 Atenção — 6 bugs P1, perda de dados |
| **PicoClaw** | 3 | 19 | 6 | 0 | 🟢 Bom — manutenção preventiva |
| **IronClaw** | 43 | 50 | 23 | 0 | 🟢 Forte — foco em UX e arquitetura |
| **CoPaw** | 27 | 50 | 22 | 0 | 🟡 Atenção — regressões de browser |
| **ZeroClaw** | 48 | 50 | 6 | 0 | 🟢 Ativo — pipeline estruturado |

**Volume total do ecossistema:** 293 issues + 257 PRs = **550 eventos/24h**

**Razão PR aberto/fechado por projeto:**

| Projeto | Abertos | Fechados | Razão | Interpretação |
|---------|:---:|:---:|:---:|---|
| NanoBot | 24 | 14 | 1.7:1 | Ciclo saudável |
| Hermes Agent | 40 | 10 | **4:1** | Gargalo de review |
| PicoClaw | 13 | 6 | 2.2:1 | Estável |
| IronClaw | 27 | 23 | 1.2:1 | **Melhor razão** |
| CoPaw | 28 | 22 | 1.3:1 | Equilibrado |
| ZeroClaw | 44 | 6 | **7.3:1** | Pipeline congestionado |

---

## 3. Posicionamento do Projeto Principal

### NanoBot (HKUDS/nanobot)
**Foco:** Multi-provider extensibility e integração MCP

| Dimensão | Posição |
|----------|---------|
| **Vantagem competitiva** | Suporte maduro a providers não-OpenAI (VolcEngine, Xiaomi, Doubao) |
| **Diferenciação técnica** | Arquitetura de tools com guards contra loops infinitos, MCP stream handling |
| **Tamanho da comunidade** | Alta — 60+ eventos/24h, contribuidores ativos (YLChen-007, Alix-007) |
| **Risco** | Concentração de 7 vulnerabilidades de segurança em 24h pode erodir confiança enterprise |

**Métricas de resposta:** Bugs resolvidos em ~1 dia (DingTalk, MiMo); CVEs abertos há 1-3 dias indicam tempo de resposta inicial rápido, masfix completo pendente.

---

### IronClaw (nearai/ironclaw)
**Foco:** WebUI Reborn v2, capability policy, memory extension

| Dimensão | Posição |
|----------|---------|
| **Vantagem competitiva** | Stack Reborn com UX mobile-first, permissionamento granular, freeze de interface corrigido |
| **Diferenciação técnica** | Tokio worker pool optimization, WASM isolation, Extension Manifest v2 |
| **Tamanho da comunidade** | Muito alta — 93 eventos/24h, PR #5205 (XL) indica engenharia de escala |
| **Risco** | 4+ bugs de UX em approval flow e permission persistence |

**Métricas de resposta:** PRs críticos merged em 1-2 dias; freeze de 4 minutos (WASM starvation) identificado e em correção.

---

### ZeroClaw (zeroclaw-labs/zeroclaw)
**Foco:** Segurança, supply chain integrity, arquitetura WASM-first

| Dimensão | Posição |
|----------|---------|
| **Vantagem competitiva** | RFCs estruturados, trilhas organizadas (v0.8.2/0.8.3/v0.9.0), postura proativa contra CVEs |
| **Diferenciação técnica** | Sop out-of-band approval, independent delegate targets, SLSA compliance |
| **Tamanho da comunidade** | Alta — 98 eventos/24h, RFCs com 8-11 comentários |
| **Risco** | Pipeline congestionado (razão 7.3:1), 116 itens na trilha de segurança v0.9.0 |

---

## 4. Focos Técnicos Compartilhados

A análise transversal revela **5 necessidades emergentes** que aparecem em múltiplos projetos:

### 4.1 Segurança de Ferramentas e Allowlists

| Projeto | Vulnerabilidade | Status |
|---------|-----------------|--------|
| NanoBot | `enabledTools` bypass (MCP) | 3 issues abertas |
| NanoBot | `allowPatterns` bypass (exec) | 5 issues abertas |
| ZeroClaw | Delegate bypass parent allowlist | ✅ Closed (S0) |
| Hermes Agent | Cross-session history leak | P1 aberta |

**Implicação:** A arquitetura de "tool allowlisting" está sendo reavaliada em todo o ecossistema. O padrão `re.search()` → `re.fullmatch()` de NanoBot (#4526) pode se tornar best practice.

### 4.2 Gerenciamento de Contexto e Memória

| Projeto | Abordagem |
|---------|-----------|
| Hermes Agent | Context compaction — **causa perda de dados** (P1) |
| IronClaw | Extension Manifest v2, eager consolidation |
| CoPaw | Scroll context manager via SQLite (PR #5321) |
| ZeroClaw | Context window bar para TUI/CLI (PR #7946) |

**Implicação:** Compressão por summarization está sendo substituída por persistência granular (SQLite, turn markers). A tendência é `scroll` over `summarize`.

### 4.3 Browser Automation e Resource Management

| Projeto | Problema | Severidade |
|---------|----------|------------|
| CoPaw | Chrome processes vazam 150-210MB/ciclo | 🔴 Crítica |
| CoPaw | Regressão em browser_use stop() | 🔴 Aberta |
| CoPaw | Timeout com Chrome em Linux/IME | 🟡 Moderada |

**Implicação:** `browser_use` em produção apresenta vazamento sistemático de recursos. CoPaw acumula 3+ issues relacionadas — possível dívida técnica de longa data.

### 4.4 Multi-Agente e Delegação

| Projeto | Feature |
|---------|---------|
| NanoBot | Subagent spawn com model override (PR #4415) |
| IronClaw | Independent delegate targets (PR #8239) |
| ZeroClaw | Independent delegate mode (Issue #8238) |
| Hermes Agent | Cron sessions as first-class citizens |

**Implicação:** Padrão de delegação entre agentes está se consolidando. IronClaw e ZeroClaw convergem para "independent delegate" como feature estratégica.

### 4.5 Expansão de Canais e Plataformas

| Canal | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|
| Telegram | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Discord | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Slack | ❌ | ✅ | ❌ | ❌ | PR #5193 | ❌ |
| Matrix | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| DeltaChat | ❌ | ❌ | PR #3063 | ❌ | ❌ | ❌ |
| DingTalk | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Positioning |
|---------|------------------|-------------|
| **NanoBot** | Desenvolvedores enterprise multi-cloud | Multi-provider flexibility |
| **Hermes Agent** | Power users desktop | Contexto longo, cron jobs |
| **PicoClaw** | Embedded/IoT (Raspberry Pi, FreeBSD) | Leveza, cross-platform |
| **IronClaw** | Usuários mobile-first, empresas | UX Reborn, permissionamento |
| **CoPaw** | Automação de browser | Browser_use native |
| **ZeroClaw** | Segurança-first deployments | Supply chain, WASM |

### 5.2 Por Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ARQUITETURA DOMINANTE                            │
├─────────────────┬───────────────────────────────────────────────────┤
│ Rust-native      │ ZeroClaw, IronClaw (tokio, WASM)                │
│ Python-first     │ NanoBot, CoPaw, Hermes Agent, PicoClaw          │
│ Multi-runtime   │ CoPaw (Tauri desktop, TUI, Web)                 │
│ WASM-first      │ ZeroClaw (estratégico, RFC em progresso)          │
└─────────────────┴───────────────────────────────────────────────────┘
```

### 5.3 Por Estratégia de Contexto

| Estratégia | Projetos | Trade-off |
|------------|----------|-----------|
| **Summarization** | Hermes Agent (com bugs) | Compactação → perda de dados |
| **Scroll/Persist** | CoPaw, IronClaw | Storage → recall granular |
| **Hybrid** | NanoBot | Flexibilidade → complexidade |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | Velocidade | Indicador |
|---------|:---:|---|
| **CoPaw** | 🟢 Muito alta | 22 PRs merged/24h, 5+ first-time contributors |
| **IronClaw** | 🟢 Alta | 23 PRs merged/24h, ciclo dogfood → fix < 2 dias |
| **NanoBot** | 🟡 Rápida | 14 PRs merged/24h, mas 7 CVEs acumuladas |
| **Hermes Agent** | 🟡 Estagnada | 10 PRs merged, 40 abertos — review bottleneck |
| **ZeroClaw** | 🟡 Lenta | 6 PRs merged, pipeline congestionado |

### 6.2 Maturidade Relativa (baixo → alto)

```
NullClaw (inativo)
    ↓
Hermes Agent (segurança, perda de dados)
    ↓
CoPaw (browser automation instável)
    ↓
NanoBot (segurança, mas alta atividade)
    ↓
PicoClaw (estável, poucos eventos)
    ↓
IronClaw (equilíbrio iteração/estabilidade)
    ↓
ZeroClaw (governança madura, pipeline congestionado)
```

### 6.3 Engajamento Técnico (comentários por issue)

| Projeto | Média Comentários | Issue de Maior Engajamento |
|---------|:---:|---|
| Hermes Agent | 7.3 | #39691 — Compressão de tool output (10 👍) |
| ZeroClaw | 6.5 | #6808 — Work Lanes RFC (11 comentários) |
| NanoBot | 2.1 | Segurança MCP/exec (0 👍, alta severidade) |
| CoPaw | 5.4 | #5345 — Custom providers function calling (8 comentários) |
| IronClaw | 1.0 | Dogfooding tracking (1 comentário, alta prevalência) |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Fortes

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Segurança como Feature** | 10+ CVEs, RFC de supply chain (ZeroClaw), capability policy (IronClaw) | Deployments enterprise exigirão SOC2/compliance |
| **Contexto Persistente** | Scroll managers, SQLite, Extension Manifest v2 | Summarization está cedendo espaço para recall |
| **WebAssembly Isolation** | ZeroClaw WASM-first, IronClaw tokio/WASM, PicoClaw build optimization | Sandboxing em nível de plugin como padrão |
| **Delegação Multi-Agente** | 3+ projetos implementando independent delegates | Arquiteturas de agente-as-a-service se consolidando |
| **Mobile-First WebUI** | IronClaw PWA, CoPaw Tauri, PicoClaw responsive | Experiência mobile不再是副产品 |
| **PWA como padrão** | NanoBot PWA request, IronClaw responsive | Instalar agents na home screen se torna expectativa |

### 7.2 Padrões Emergentes (Sinais Fracos mas Significativos)

| Sinal | Projeto | Leitura |
|-------|---------|---------|
| Credential proxy daemon (#4656, Hermes) | Hermes Agent | Usuários demandam broker de credenciais zero-knowledge |
| Hard cap on tool result (#5342, CoPaw) | CoPaw | Defense-in-depth contra context explosion |
| Responses API format (#2188, CoPaw) | CoPaw | Suporte a OpenAI Responses API como diferencial |
| OpenRouter fallbacks (#8138, ZeroClaw) | ZeroClaw | Multi-provider fallback como feature enterprise |

### 7.3 Dores Não Resolvidas (Oportunidades)

| Dor | Impacto | Projetos Afetados |
|-----|---------|-------------------|
| Browser automation memory leaks | 🔴 Prod | CoPaw |
| Session data loss em compaction | 🔴 Prod | Hermes Agent |
| Windows instability | 🟡 Enterprise | Hermes Agent, NanoBot |
| Review bottleneck | 🟡 Velocidade | Hermes Agent, ZeroClaw |
| Ghost closure de issues | 🟡 Contribuidor | NanoBot (#1710 — 109 dias) |

---

## Conclusão Executiva

| Dimensão | Líder | Seguidor Próximo | Gap |
|----------|-------|------------------|-----|
| **Volume de atividade** | IronClaw (93) | Hermes Agent (100) | Margem pequena |
| **Qualidade de segurança** | ZeroClaw | IronClaw | ZeroClaw tem postura proativa |
| **Velocidade de resposta** | CoPaw | IronClaw | CoPaw fecha PRs rapidamente |
| **Estabilidade** | PicoClaw | ZeroClaw | PicoClaw minimalista vence |
| **Inovação de features** | IronClaw | NanoBot | Reborn UX differentiation |
| **Maturidade de comunidade** | ZeroClaw | IronClaw | RFCs estruturados |

**Recomendações para decisores técnicos:**

1. **Para deploy enterprise com foco em segurança:** Zero

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-06-26  
**Última atualização dos dados:** 2026-06-26 (últimas 24h)

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento em 2026-06-26, com **22 issues e 38 PRs atualizados** nas últimas 24h — volume significativo que reflete correções e features em paralelo. O destaque negativo são **múltiplas vulnerabilidades de segurança críticas** reportadas no escopo MCP e na ferramenta `exec`, todas originadas pelo mesmo autor (YLChen-007), exigindo resposta urgente. No lado positivo, **14 PRs foram fechados/merged** hoje, indicando progresso concreto em correções de bugs, estabilidade e melhorias de UX. Não há lançamentos formais hoje.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões hoje. Isso é consistente com o padrão de trabalho intenso em PRs em aberto que ainda não atingiram o status de merge.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (hoje)

| # | Título | Impacto |
|---|--------|---------|
| [#4493](https://github.com/HKUDS/nanobot/pull/4493) | WebM→WAV conversion for Xiaomi MiMo ASR | **Bug fix de transcrição de voz no WebUI** — resolve erro quando usuários enviavam áudio via browser (formato WebM) para API MiMo (aceita apenas WAV/MP3). Scopado ao provider `xiaomi_mimo`. |
| [#4528](https://github.com/HKUDS/nanobot/pull/4528) | Key streaming buffers by stream_id | **Estabilidade de streaming em Matrix** — overlapping streams no mesmo room não corrompem mais buffers uns dos outros. Inclui correção para #4068 e #4063. |

### PRs Abertos com Alta Relevância

| # | Título | Escopo |
|---|--------|--------|
| [#4524](https://github.com/HKUDS/nanobot/pull/4524) | Apply enabledTools filtering to MCP resources and prompts | **Correção de segurança (MCP)** — o allowlist `enabledTools` filtrava apenas ferramentas, mas registrava resources e prompts incondicionalmente, permitindo bypass. Corrige [#4519](https://github.com/HKUDS/nanobot/issues/4519). |
| [#4526](https://github.com/HKUDS/nanobot/pull/4526) | Prevent allowPatterns bypass via chained commands | **Correção de segurança (exec)** — muda `re.search()` para `re.fullmatch()` para evitar que padrões como `echo` casem com `echo hello; rm -rf /`. Corrige [#4514](https://github.com/HKUDS/nanobot/issues/4514) e [#4515](https://github.com/HKUDS/nanobot/issues/4515). |
| [#4525](https://github.com/HKUDS/nanobot/pull/4525) | Change exec login-shell default from true to false | **Correção de segurança (exec)** — login-shell default reintroduzia secrets de `~/.bash_profile`. Corrige [#4518](https://github.com/HKUDS/nanobot/issues/4518). |
| [#4533](https://github.com/HKUDS/nanobot/pull/4533) | Prevent session key collision on disk | **Bug fix de sessões** — `SessionManager.safe_key()` substituía `:` por `_`, causando colisões entre chaves como `telegram:a_b` e `telegram:a:b` (ambos viravam `telegram_a_b`). Sem quebrar filename generation do WebUI. |
| [#4522](https://github.com/HKUDS/nanobot/pull/4522) | Add generic repeated-tool-call guard for all tools | **Resiliência do agente** — antes, apenas ferramentas de rede (web_fetch, web_search) tinham guarda contra chamadas repetidas. Agora, ferramentas genéricas (read_file, list_dir) também são protegidas contra loops infinitos com argumentos idênticos. |
| [#4506](https://github.com/HKUDS/nanobot/pull/4506) | Implement MCP server idle timeout auto-kill | **Gestão de recursos** — novo parâmetro `idle_timeout` em `MCPServerConfig` para matar servers MCP ociosos e prevenir zombie processes. |

---

## 4. Temas Quentes da Comunidade

### Discussões com maior engajamento (comentários + reações)

#### 🔴 Segurança: Cluster de vulnerabilidades em `exec` e MCP

**7 issues de segurança abertas/abertas hoje**, todas de `YLChen-007`, cobrindo dois eixos:

**Eixo MCP — Bypass de allowlist:**
- [#4519](https://github.com/HKUDS/nanobot/issues/4519) — `enabledTools` Scope Bypass expõe Resource e Prompt Wrappers (🔴 OPEN)
- [#4517](https://github.com/HKUDS/nanobot/issues/4517) — `enabled_tools` Allowlist Bypass registra capacidades mesmo com política deny-all (🔴 OPEN)
- [#4434](https://github.com/HKUDS/nanobot/issues/4434) — deny-all policy bypass expõe MCP resources/prompts (✅ CLOSED)
- [#4435](https://github.com/HKUDS/nanobot/issues/4435) — allowlist bypass expõe capabilities (✅ CLOSED)

**Eixo `exec` — Múltiplos vetores de bypass:**
- [#4521](https://github.com/HKUDS/nanobot/issues/4521) — shell-chain bypass via `allowPatterns` (🔴 OPEN)
- [#4520](https://github.com/HKUDS/nanobot/issues/4520) — bypass via OpenAI-compatible API (🔴 OPEN)
- [#4518](https://github.com/HKUDS/nanobot/issues/4518) — login-shell execution reintroduz secrets (🔴 OPEN)
- [#4516](https://github.com/HKUDS/nanobot/issues/4516) — wrapper prefix bypass (🔴 OPEN)
- [#4515](https://github.com/HKUDS/nanobot/issues/4515) — comment-tail bypass (🔴 OPEN)
- [#4514](https://github.com/HKUDS/nanobot/issues/4514) — chained commands bypass (🔴 OPEN)

> **Análise:** A concentração de 7+ CVEs similares em um único dia sugere uma auditoria de segurança dedicada ou uso de ferramentas automatizadas de análise. A severidade é **alta** para deployments que confiam em `allowPatterns` e `enabledTools` como controle de acesso.

#### 🔧 Feature Request: Ferramenta `ask_clarification`

- [#4508](https://github.com/HKUDS/nanobot/issues/4508) — Feature request: add `ask_clarification` tool para requisitos ambíguos/faltantes (🔴 OPEN, 0 comentários)

**Demanda:** Quando a requisição do usuário é ambígua ou missing information, o agente deve fazer uma pergunta focada e encerrar o turno corrente em vez de tentar adivinhar.

**Sinal de roadmap:** Esta é uma feature de UX/produtividade que alinharia o NanoBot com comportamentos de agentes mais recentes (Claude Code, etc.).

#### 📱 PWA e Mobile

- [#4479](https://github.com/HKUDS/nanobot/issues/4479) — PWA support e mobile swipe gesture para sidebar (🔴 OPEN, 0 comentários)

**Feature em PR:** Service worker com cache-first para assets, network-first para API calls, manifest.json para home screen installation.

---

## 5. Bugs e Estabilidade

### Bugs Críticos/Abertos

| Severidade | # | Descrição | Plataforma |
|------------|---|-----------|------------|
| 🔴 **Crítica (Security)** | [#4519](https://github.com/HKUDS/nanobot/issues/4519) | MCP `enabledTools` bypass expõe resources/prompts | Cross-platform |
| 🔴 **Crítica (Security)** | [#4521](https://github.com/HKUDS/nanobot/issues/4521) | `exec.allowPatterns` shell-chain bypass | Cross-platform |
| 🔴 **Crítica (Security)** | [#4518](https://github.com/HKUDS/nanobot/issues/4518) | exec login-shell reintroduz secrets | Unix/Linux |
| 🔴 **Crítica** | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | nssm service + `/restart` causa loop de reinício ou estado inconsistente | Windows |
| 🟡 **Alta** | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | `--background` + `/restart` causa inconsistência entre PID real e arquivo `.json` | Windows |
| 🟡 **Alta** | [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Telegram Web: "This message is not supported on web version" | Telegram Web |

### Bugs Resolvidos (Closed hoje)

| # | Descrição | Tempo de resolução |
|---|-----------|---------------------|
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` ainda injeta chat history no system prompt | ~17 dias |
| [#4497](https://github.com/HKUDS/nanobot/issues/4497) | DingTalk: rich text e timeout não suportados | ~1 dia |
| [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Telegram Web: unsupported message type | ~1 dia |
| [#4492](https://github.com/HKUDS/nanobot/issues/4492) | Xiaomi MiMo ASR falha com WebM | ~1 dia |
| [#1710](https://github.com/HKUDS/nanobot/issues/1710) | "I've completed processing but have no response to give" (Qwen 3.5) | ~109 dias |

### Regressões

Nenhuma regressão explícita reportada hoje. No entanto, a issue [#4488](https://github.com/HKUDS/nanobot/issues/4488) (Telegram Web) foi introduzida pela feature de rich messages, configurando um padrão de **regressão de compatibilidade** com clients legados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Solicitadas

| # | Feature | Prioridade aparente | Notas |
|---|---------|---------------------|-------|
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) | `ask_clarification` tool | 🟡 Média | Evitar adivinhação em inputs ambíguos |
| [#4479](https://github.com/HKUDS/nanobot/issues/4479) | PWA + Mobile swipe | 🟢 Crescente | WebUI mobile-first |

### Features em Desenvolvimento (PRs abertos)

| # | Feature | Estágio |
|---|---------|---------|
| [#4506](https://github.com/HKUDS/nanobot/pull/4506) | MCP server idle timeout auto-kill | 🔄 Code review |
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) | Opt-in eager memory consolidation | 🔄 Code review |
| [#4404](https://github.com/HKUDS/nanobot/pull/4404) | Extra bwrap bind roots para exec | 🔄 Code review |
| [#4414](https://github.com/HKUDS/nanobot/pull/4414) | Subagent aggregated result mode | 🔄 Code review |
| [#4415](https://github.com/HKUDS/nanobot/pull/4415) | Subagent spawn model override | 🔄 Code review |
| [#4416](https://github.com/HKUDS/nanobot/pull/4416) | Cron job model presets | 🔄 Code review |
| [#4424](https://github.com/HKUDS/nanobot/pull/4424) | Gate archive facts com provenance context | 🔄 Code review |
| [#4437](https://github.com/HKUDS/nanobot/pull/4437) | Heartbeat trigger command | 🔄 Code review |

### Issues Relacionadas a Custom Provider

- [#4429](https://github.com/HKUDS/nanobot/issues/4429) ✅ **CLOSED** — `custom` provider agora pode configurar thinking style (e.g., VolcEngine/Doubao com `{"thinking": {"type": "enabled"}}`). **Feature implementada.**

### Sinais de Roadmap

1. **Multi-provider extensibility** — suporte a providers não-OpenAI (VolcEngine, Xiaomi) está amadurecendo
2. **Memory/archival sophistication** — consolidator com provenance context e eager consolidation
3. **MCP maturity** — idle timeout, stream handling, reconnect robustness
4. **Mobile/WebUX** — PWA indica foco em experiência mobile-first

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Volume |
|-----------|----------|--------|
| 🔒 **Segurança** | Allowlists de exec e MCP não funcionam como esperado — risco operacional | 🔴 7+ issues |
| 🪟 **Windows** | nssm service restart behavior quebrado; `--background` inconsistente | 🟡 2 issues |
| 📱 **Mobile** | Telegram Web exibe mensagens não suportadas | 🟡 1 issue |
| 🎙️ **ASR** | Xiaomi MiMo rejeita formato WebM do browser | 🟡 1 issue (resolvido) |
| 💭 **Thinking mode** | Custom providers não suportavam configuração de reasoning (RESOLVIDO) | 🟢 1 issue |
| 🤖 **Subagent** | Configurabilidade limitada (fail_on_tool_error, result mode, model override) | 🟡 3+ issues |

### Cenários de Uso Identificados

- **Deploy enterprise** — custom providers (VolcEngine), segurança com allowlists, Windows services
- **Voice interfaces** — ASR providers diversos (Xiaomi MiMo), transcrição em WebUI
- **Memory-intensive workflows** — archival, consolidation, dream sessions
- **Multi-agent orchestration** — subagent spawning com controle fino

### Satisfação Geral

**Mista a positiva para features estáveis; negativa para segurança.** A velocidade de resposta a bugs é boa (1 dia para DingTalk, MiMo), mas a onda de CVEs em um único dia pode afetar confiança de usuários sensíveis a segurança.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução ou sem comentários

| # | Idade | Título | Status |
|---|-------|--------|--------|
| [#1710](https://github.com/HKUDS/nanobot/issues/1710) | ~109 dias | "I've completed processing but have no response to give" (Qwen 3.5) | ✅ CLOSED (sem comentário) |

> A issue [#1710](https://github.com/HKUDS/nanobot/issues/1710) foi fechada hoje após 109 dias sem resposta — padrão de **ghost closure** que pode frustar contribuidores.

### Issues com potencial estratégico que precisam de triagem

| # | Título | Nota |
|---|--------|------|
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) | `ask_clarification` tool | Feature trending em agentes recentes; merece avaliação |
| [#4513](https://github.com/HKUDS/nanobot/issues/4513) | nssm Windows service restart | Usuários Windows empresariais afetados |
| [#4479](https://github.com/HKUDS/nanobot/issues/4479) | PWA support | 0 comentários — verificar se há demanda real |

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Volume de PRs (38/24h) | 🟢 Alto | Neutra |
| Ratio open/closed PRs | 🟡 24:14 | Needs merge velocity |
| Security issues (7 abertas) | 🔴 Crítico | Piorando |


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-26

---

## 1. Panorama do dia

O Hermes Agent mantém **alta atividade** com 50 issues e 50 PRs atualizados nas últimas 24h, embora **nenhuma release tenha sido publicada**. A comunidade está focada em **estabilidade** — bugs P1 dominam as discussões (6 abertos), incluindo problemas críticos de perda de dados em sessões e vazamento de histórico entre conversas. O lançamento recente da correção para o root error boundary do Desktop (#52704) indica resposta rápida a crashes visuais. A relação de 40 PRs abertos para apenas 10 merged/fechados sugere um **gargalo de review**, possivelmente aguardando maintainer attention para avançar o pipeline.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não emitiu nova versão desde o período analisado. Usuários em produção permanecem na última tag disponível.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente

| PR | Autor | Mudança | Impacto |
|----|-------|---------|---------|
| [#52704](https://github.com/NousResearch/hermes-agent/pull/52704) | OutThisLife | Desktop: recover root error boundary from transient render races | **Alto** — Corrige crash visual que mostrava tela "Reload window" após races de renderização no thread principal |
| [#52692](https://github.com/NousResearch/hermes-agent/pull/52692) | chromalinx | Gateway: purge stale `__pycache__` on boot when checkout advanced | **Médio** — Resolve crashes causados por bytecode defasado após `git pull` durante execução |
| [#41015](https://github.com/NousResearch/hermes-agent/pull/41015) | ViezeVingertjes | Web: add Serper search provider plugin | **Médio** — Adiciona integração nativa com Serper.dev como backend de busca |
| [#52687](https://github.com/NousResearch/hermes-agent/pull/52687) | lance0 | Runtime: propagate named-provider `default_headers` to OpenAI client | **Médio** — Corrige silenciamento de headers customizados em paths cron/CLI/oneshot |
| [#51953](https://github.com/NousResearch/hermes-agent/pull/51953) | wernerhp | Copilot: resolve Claude reasoning-effort from live catalog | **Médio** — Corrige resolução de níveis de reasoning para modelos GitHub Copilot |
| [#45769](https://github.com/NousResearch/hermes-agent/pull/45769) | ValentinSergief | Cron: enable memory reads by default, guard writes | **Médio** — Melhora contexto de memória em agentes cron sem comprometer segurança |

**Avaliação:** O time demonstrou **agilidade em hotfixes de estabilidade** (crashes e bytecode skew), mas 40 PRs permanecem em aberto sinalizando possível gargalo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | 👍 | Tema |
|-------|------|-------------|----|------|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | Feature | 11 | 1 | Credential proxy daemon (zero-knowledge broker) |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Feature | 8 | **10** | Integração headroom-ai para compressão de tool output |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | Feature | 7 | **9** | Slack Block Kit em vez de mrkdwn legado |
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | Feature | 7 | 5 | Suporte Telegram Bot API 10.1 Rich Messages |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Bug | 8 | 2 | Dashboard chat feature quebrado (React error #301) |

**Análise:** A comunidade prioriza **integrações de plataforma** (Slack, Telegram) e **otimização de contexto** (compressão). A feature de credential proxy (#4656) com 11 comentários indica discussão técnica aprofundada sobre segurança — o autor referencia issues #3628 e #PR #4432 anteriores, mostrando maturidade na proposta.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (3 issues abertas)

| Issue | Descrição | Risco |
|-------|-----------|-------|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator archiva skills ativas durante umbrella pass sem verificação — fail-open | **Perda de funcionalidade operacional** |
| [#19434](https://github.com/NousResearch/hermes-agent/issues/19434) | `session_search`: 4 bugs + 2 gaps — split-brain JSON/SQLite + child sessions ocultas | **Memória do agente comprometida** |
| [#49106](https://github.com/NousResearch/hermes-agent/issues/49106) | Web/WeChat: histórico vaza entre sessões ativas | **Vazamento de dados entre usuários** |
| [#28093](https://github.com/NousResearch/hermes-agent/issues/28093) | Context compaction descarta mensagens do usuário durante processamento ativo | **Perda irreversível de input** |
| [#29522](https://github.com/NousResearch/hermes-agent/issues/29522) | Compaction automática oculta ou descarta resposta recém-completa do assistente | **Respostas desaparecem** |
| [#14238](https://github.com/NousResearch/hermes-agent/issues/14238) | Pending response perdida quando session split ocorre no boundary de resposta | **Respostas nunca entregues** |

### P2 — Graves (8 issues abertas)

| Issue | Descrição | Plataforma |
|-------|-----------|------------|
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Dashboard chat quebra (React error #301) | Desktop |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Instalador falha no stage "desktop" — npm exit 1 | Windows |
| [#51578](https://github.com/NousResearch/hermes-agent/issues/51578) | `computer_use` não encontra apps Qt6 (FreeCAD) | Linux |
| [#52649](https://github.com/NousResearch/hermes-agent/issues/52649) | Gateway crash UnicodeDecodeError cp950 — ciclo zombie | Windows |
| [#36777](https://github.com/NousResearch/hermes-agent/issues/36777) | TUI: `session.info` não atualiza `ctx.sid` após compressão | TUI |
| [#42228](https://github.com/NousResearch/hermes-agent/issues/42228) | Sessões comprimidas movem para "No workspace" indevidamente | Desktop/TUI |
| [#50846](https://github.com/NousResearch/hermes-agent/issues/50846) | Discord: uploads de vídeo grandes sem graceful fallback | Discord |
| [#51469](https://github.com/NousResearch/hermes-agent/issues/51469) | `/compress` manual succeed mas no-op por falta de rotação de session | Gateway |

**Avaliação:** Padrão crônico de **estado de sessão** — compactação, forks e splits estão gerando perda de dados consistente. A área de **Windows** apresenta regressões de instalação e encoding.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em destaque

| Issue | Feature | 👍 | Sinais de priorização |
|-------|---------|----|----------------------|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integração headroom-ai para compressão de tool output | 10 | Alta demanda + alinhado com eficiência de tokens |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | Credential proxy daemon — zero-knowledge HTTP/HTTPS broker | 1 | Proposta técnica madura (11 comentários) |
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | Telegram Bot API 10.1 Rich Messages + streaming drafts | 5 | API atualizada em 2026-06-11 — oportunidade de timely update |
| [#46454](https://github.com/NousResearch/hermes-agent/issues/46454) | Progress feedback para uploads de mídia grandes | 0 | DOR limitada mas melhoria UX clara |
| [#52137](https://github.com/NousResearch/hermes-agent/issues/52137) | Localização Russo (ru-RU) | 0 | Complementa i18n roadmap (Francês, Chinês, Português já solicitados) |
| [#52597](https://github.com/NousResearch/hermes-agent/issues/52597) | Desabilitar toolset por plataforma messenger | 0 | Flexibilização de configuração por ambiente |
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) | Skill here.now — publishing web estático instantâneo | 0 | Integração com serviço externo (here.now) |

**Sinais de roadmap:** A equipe parece priorizar **eficiência de contexto** (compressão), **segurança de credenciais** e **adaptações multi-plataforma**. O PR #52697 (external media publishing com Cloudflare R2) indica direção de infraestrutura.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Perda de dados em sessões longas**
   > *"A completed assistant response disappeared from Hermes Workspace immediately after automatic context compaction triggered."* ([#29522](https://github.com/NousResearch/hermes-agent/issues/29522))
   
   O problema é recorrente — compactação automática afeta tanto respostas do assistente quanto mensagens do usuário.

2. **Instabilidade no Windows**
   > *"Hermes installer fails at 'desktop' stage — npm install exit code 1"* ([#46260](https://github.com/NousResearch/hermes-agent/issues/46260))
   
   Usuários Windows enfrentam barreiras de onboarding + crashes de encoding (cp950).

3. **Vazamento de histórico entre sessões**
   > *"User turns from one session can appear under another session's transcript"* ([#49106](https://github.com/NousResearch/hermes-agent/issues/49106))
   
   **Impacto crítico de privacidade** — requires full app restart para limpar.

4. **Rate limiting por provedores**
   > *"z.ai is rate limiting hermes agent during 'peak hours'"* ([#50663](https://github.com/NousResearch/hermes-agent/issues/50663))
   
   Limitação de plano vs. uso real — frustração com barreiras de tiers.

### Cenários de uso emergentes

- **Desenvolvimento desktop apps** (FreeCAD/Qt6) — `computer_use` struggling ([#51578](https://github.com/NousResearch/hermes-agent/issues/51578))
- **Sessões cron como primeiro-class citizens** — demanda por visibilidade e memória persistente ([#43233](https://github.com/NousResearch/hermes-agent/pull/43233))
- **Publicação de mídia automatizada** — Discord, Telegram precisam de fallback para arquivos grandes

---

## 8. Backlog que Merece Atenção

### Issues sem atividade ou aguardando resposta

| Issue | Idade | Status | Prioridade | Risco de Negligência |
|-------|-------|--------|------------|---------------------|
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) | ~3 meses | Aberta | Feature | Baixa — feature request |
| [#14185](https://github.com/NousResearch/hermes-agent/issues/14185) | ~2 meses | Aberta | P1 | **Alto** — crash intermitente do todo_tool |
| [#13840](https://github.com/NousResearch/hermes-agent/issues/13840) | ~2 meses | Aberta | P1 | **Alto** — "memory black hole" |
| [#19434](https://github.com/NousResearch/hermes-agent/issues/19434) | ~7 semanas | Aberta | P1 | **Crítico** — múltiplos bugs de busca |
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | ~5 semanas | Aberta | P1 | **Crítico** — archivar skills críticas |

### PRs aguardando merge (autores ativos)

| PR | Idade | Tema | Bloqueio |
|----|-------|------|----------|
| [#52691](https://github.com/NousResearch/hermes-agent/pull/52691) | 1 dia | Gateway graceful self-reload em vez de recusa | Code skew |
| [#52707](https://github.com/NousResearch/hermes-agent/pull/52707) | 1 dia | Desktop link labels across ports | Review |
| [#52687](https://github.com/NousResearch/hermes-agent/pull/52687) | 1 dia | Provider headers propagation | Review |
| [#48525](https://github.com/NousResearch/hermes-agent/pull/48525) | ~1 semana | Delete entire compression lineages | Estabilidade |

---

## Conclusão

**Saúde geral: ⚠️ Atenção necessária**

| Dimensão | Status | Observação |
|----------|--------|------------|
| Atividade | ✅ Alta | 50 issues + 50 PRs / 24h |
| Estabilidade | ❌ Crítica | 6 bugs P1 abertos, padrão de perda de dados |
| Releases | ⚠️ Estagnada | Nenhuma release em 24h |
| Review pipeline | ⚠️ Gargalo | 40 PRs abertos vs 10 closed |
| Windows support |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-26

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de desenvolvimento** na data de hoje, com 22 eventos totais (3 issues + 19 PRs). Seis pull requests foram merged/fechados, refletindo uma cadência robusta de entrega de correções e melhorias. As atividades concentram-se em **manutenção preventiva** (verificações de tipo, tratamento de erros) e **atualizações de dependências**, indicando um projeto maduro em fase de estabilização. A atividade de issues permanece moderada, com dois bugs críticos fechados (#1757 e #3012) e uma feature request aberta sobre segurança criptográfica. Não há lançamentos formais registrados nas últimas 24h.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período entre versões, com trabalho ativo em branch. Recomenda-se monitorar o repositório para announcements de próximas releases que possam incluir as correções merged hoje.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje (6 total)

| # | PR | Autor | Descrição | Impacto |
|---|-----|-------|-----------|---------|
| [#3169](https://github.com/sipeed/picoclaw/pull/3169) | fix(evolution): skip cold path for heartbeat turns | Alix-007 | Elimina consumo desnecessário de tokens em verificações periódicas de heartbeat quando evolution draft mode está ativo | 🔧 **Performance** |
| [#3166](https://github.com/sipeed/picoclaw/pull/3166) | fix(openai_compat): use structured logger | Alix-007 | Corrige falha de build (`undefined: log`) no pacote openai_compat | 🐛 **Bug fix crítico** |
| [#3168](https://github.com/sipeed/picoclaw/pull/3168) | fix(model): handle error response read failures | Alix-007 | Melhora tratamento de erros em falhas de leitura de resposta HTTP em provedores de modelo | 🐛 **Robustez** |
| [#3092](https://github.com/sipeed/picoclaw/pull/3092) | fix(skills_install): add ok checks | chengzhichao-xydt | Adiciona verificações de tipo em assertions para versão e flags force, evitando comportamento silencioso incorreto | 🛡️ **Defensive coding** |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | fix(identity): allow_from fallthrough para Matrix | chengzhichao-xydt | Corrige rejeição silenciosa de mensagens de usuários Matrix com formato padrão (@usuario:dominio.com) | 🐛 **Bug fix** |
| [#3145](https://github.com/sipeed/picoclaw/pull/3145) | build(deps): bump copilot-sdk 0.2.0→1.0.2 | dependabot | Atualização de dependência do GitHub Copilot SDK | 📦 **Dependência** |

### Destaque Técnico
O PR [#3169](https://github.com/sipeed/picoclaw/pull/3169) representa uma otimização direta para o problema #3012 (consumo contínuo de tokens), demonstrando resposta rápida da comunidade a issues reportadas.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Autor | Comentários | 👍 | Status |
|---|--------|-------|-------------|-----|--------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] channel error em tarefas agendadas hourly | dhensen | 10 | 0 | ✅ CLOSED |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | [Feature] use vodozemac instead of libolm | pbsds | 2 | 2 | 🟡 OPEN |

### Análise de Demandas

1. **Segurança Criptográfica (#3088)**: A comunidade demonstra interesse em modernizar dependências de criptografia, substituindo libolm (considerado descontinuado e inseguro) por vodozemac. Com 2 👍, o pedido reflete preocupação com **segurança de longo prazo**, especialmente relevante para integrações Matrix que dependem de criptografia E2E.

2. **Bugs Cronológicos Resolvidos**: O issue #1757 (criado em março, 3 meses)最终还是 foi fechado, indicando ciclo de desenvolvimento ativo para features de agendamento.

---

## 5. Bugs e Estabilidade

### Issues de Bug Registradas Hoje

| # | Severidade | Título | Status | Notas |
|---|------------|--------|--------|-------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | **Alta** | Erro de canal em tarefas hourly (Telegram) | ✅ CLOSED | Afetava agendamento cron; 3 meses em aberto |
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **Alta** | Consumo contínuo de tokens com evolution | ✅ CLOSED | Relacionado ao PR #3169 |

### Correções de Estabilidade Merged Hoje

| # | Área | Tipo de Correção |
|---|------|------------------|
| [#3170](https://github.com/sipeed/picoclaw/pull/3170) | agent | Fechamento correto do encoder base64 em caminhos de erro |
| [#3171](https://github.com/sipeed/picoclaw/pull/3171) | line | Verificações `ok` em type assertions para evitar panics |
| [#3172](https://github.com/sipeed/picoclaw/pull/3172) | misc | Ignoração explícita de erros `Close()` em caminhos secundários |
| [#3168](https://github.com/sipeed/picoclaw/pull/3168) | model | Tratamento de falhas de leitura em respostas de erro HTTP |

**Métricas de Estabilidade**: 6 correções de bugs merged hoje, com foco em **defensive programming** (verificações de tipo, tratamento de erros) e **prevenção de leaks** (recursos não fechados).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Autor | 👍 | Indicadores |
|---|--------|-------|-----|-------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Substituir libolm por vodozemac | pbsds | 2 | **high priority**, help wanted, stale |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | Adicionar DeltaChat gateway | trufae | 0 | PR aberto, nova funcionalidade |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Adicionar modo WebSocket remoto | jp39 | 0 | PR aberto, expansividade |

### Sinais de Roadmap

1. **Expansão de Canais (#3063)**: Integração com DeltaChat demonstra estratégia de diversificação de canais de comunicação.

2. **Conectividade Remota (#3118)**: Modo WebSocket remoto para o agente indica movimento em direção a arquiteturas distribuídas.

3. **Modernização de Segurança (#3088)**: A necessidade de substituir libolm está alinhada com as melhores práticas de segurança em projetos Matrix/Element.

4. **Corrente de Dependências**: Atualizações de 6 dependências hoje (copilot-sdk, telego, line-bot-sdk, systray, sqlite) indicam preparação para próxima versão.

---

## 7. Resumo de Feedback dos Usuários

### Padrões de Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Agendamento** | Erros em tarefas recorrentes (cron) | Issue #1757 |
| **Consumo de Recursos** | Token consumption excessiva com evolution | Issue #3012 |
| **Integrações** | Problemas com identificadores Matrix | Issue #3044 (fixado em #3045) |
| **Tool Output** | Corrupção de histórico com URLs data:inline | Issue #3115 (PR aberto) |

### Cenários de Uso Emergentes

- **Uso em dispositivos受限** (Raspberry Pi Zero W): Evidenciado pelo issue #1757
- **FreeBSD Support**: Issue #3012 reportando em FreeBSD 15.0
- **Multi-canal**: Uso simultâneo de Telegram, Web, DeltaChat (em desenvolvimento)
- **Agentes com Evolution**: Padrão de uso avançado com geração automática de código

### Índice de Satisfação (Estimado)
**Moderada-Alta** — A comunidade demonstra engajamento ativo, com respondendo a bugs em tempo razoável. Nenhum issue de longa duração crítico permanece aberto.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Dias Aberto | Prioridade |
|---|--------|--------|-------------|------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | use vodozemac instead of libolm | 2026-06-09 | 17 dias | **High** |

### PRs Abertos Aguardando Revisão

| # | Título | Criado | dias | Complexidade |
|---|--------|--------|------|--------------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | feat: add deltachat gateway | 2026-06-08 | 18 dias | Alta (nova funcionalidade) |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode | 2026-06-12 | 14 dias | Média |
| [#3142](https://github.com/sipeed/picoclaw/pull/3142) | fix(spawn): clear ForUser in sub-turn | 2026-06-17 | 9 dias | Média (标记 stale) |

### Recomendações de Priorização

1. **Revisar PR #3063** (DeltaChat gateway) — 18 dias sem feedback
2. **Avaliar Issue #3088** — Feature de segurança com 2 👍, marcada stale
3. **Revisar PR #3142** — Correção de bug marcada stale, pode resolver issues de duplicação de mensagens

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues ativas (abertas) | 1 |
| Issues fechadas | 2 |
| PRs abertos | 13 |
| PRs merged/fechados | 6 |
| Novas releases | 0 |
| **Total eventos** | **22** |

---

*Relatório gerado em 2026-06-26. Dados extraídos de github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw | 2026-06-26

---

## 1. Panorama do Dia

O projeto IronClaw mantém altíssima atividade de desenvolvimento no dia de hoje, com **43 issues e 50 PRs atualizados** nas últimas 24h. Não houve lançamentos de novas versões. O foco dominante permanece na iteração do stack **Reborn**, com ênfase em UX/UI do WebUI v2, refinamento de políticas de capacidade (capability policy), otimizações de performance no caminho crítico do tokio worker pool e endurecimento de invariantes de identidade de atividade. A comunidade está ativamente reportando bugs de usabilidade no WebUI Reborn (permissões persistentes, approval gates, freeze de interface) enquanto a equipe core avança em features estruturais como memory extension, capability policy e skill learning. A saúde geral do projeto é boa, com forte ritmo de fechamento de PRs (23 merged/closed) e ciclo de feedback curto entre dogfooding e resolução.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (8)

| # | PR | Resumo | Área |
|---|---|---|---|
| [#5256](https://github.com/nearai/ironclaw/pull/5256) | `feat(reborn): expose user-scoped tool settings` | Adiciona rotas autenticadas `/api/webchat/v2/settings/tools` para non-operators; resolve #5242 (Tools page error para WebUI users). Substitui draft #5251. | **WebUI v2 / Permissions** |
| [#5241](https://github.com/nearai/ironclaw/pull/5241) | `fix(reborn): keep approval gates visible on busy sends` | Mantém approval gate visível quando usuário envia mensagem enquanto thread está bloqueada; preserva mensagem com estado de retry falho. | **UX / Approval Flow** |
| [#5254](https://github.com/nearai/ironclaw/pull/5254) | `fix(turns): remove prompt-assembly content denylist` | Remove validador que bloqueava turns com skill docs contendo palavras sensíveis (`authorization`, `bearer`, etc.) — causa de falsos "temporary system issue". Referência #5169. | **Core / Prompt Assembly** |
| [#5245](https://github.com/nearai/ironclaw/pull/5245) | `fix(triggers): recover stale claim-only fires` | Recupera trigger fires que foram claimados mas nunca resolvidos; replay através do submit path determinístico. | **Scheduler / Triggers** |
| [#5224](https://github.com/nearai/ironclaw/pull/5224) | `fix(reborn): reconcile scheduler concurrency default and guard worker_count=1` | Investigação concluída — não é regressão de concorrência nem config foot-gun. Esclarece comportamento do scheduler. | **Scheduler** |
| [#5251](https://github.com/nearai/ironclaw/pull/5251) | `[codex] add user-scoped WebUI tool approvals` | Superseded por #5256; histórico de iteração. | **WebUI v2 / Permissions** |
| [#5188](https://github.com/nearai/ironclaw/pull/5188) | `Improve Reborn WebUI v2 responsive sidebar behavior` | Melhora comportamento responsivo do sidebar/header em desktop e mobile. | **UX / WebUI v2** |
| [#5190](https://github.com/nearai/ironclaw/pull/5190) | `[Reborn WebUI] Invalid UI bearer token enters app but later actions do not respond` | Corrigido — token inválido agora falha claramente na entrada em vez de permitir entry silencioso. | **Auth / WebUI** |

### Avanços estruturais em PRs abertos de destaque

| # | PR | Tamanho | Progresso |
|---|---|---|---|
| [#5205](https://github.com/nearai/ironclaw/pull/5205) | `feat(memory): model memory as a userland extension — implements #3537` | XL | Extension Manifest v2, source-aware trust, host-defined capability profiles, memory profile-binding policy, native document-store provider. |
| [#5262](https://github.com/nearai/ironclaw/pull/5262) | `feat(capability-policy): capability policy foundation` | L | Primeiro slice independente do epic #5261 — vocabulário 4-dimensão + crate `ironclaw_capability_policy` puro. |
| [#5263](https://github.com/nearai/ironclaw/pull/5263) | `feat(capability-policy): per-capability default-policy source (§7)` | M | Segundo slice — stacked on #5262; arquitetura doc §7. |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) | `feat(reborn): Context management — progressive tool disclosure` | XL | Corta ~91 tool schemas por call para ~25.8k tokens — resolve timeouts com NEAR AI. Flag-gated, default off. |
| [#5206](https://github.com/nearai/ironclaw/pull/5206) | `fix(reborn): stop WASM execution from starving the tokio worker pool` | XL | Root cause do freeze de 4 min em 40 concurrent turns — WASM tool execution monopolizava worker pool. |
| [#5257](https://github.com/nearai/ironclaw/pull/5257) | `perf(reborn): batch durable event-log appends (write-behind coalescing)` | — | Um INSERT por evento no hot path — coalescing reduz drasticamente round-trips. |
| [#5255](https://github.com/nearai/ironclaw/pull/5255) | `fix(filesystem): fold CAS put directory pre-check (3→1 round-trip)` | L | Cada Postgres CAS `put` fazia 3 round-trips — reduz para 1. |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | Tipo | Sinal |
|---|---|---|---|---|
| [#5242](https://github.com/nearai/ironclaw/issues/5242) | [CLOSED] Tools page under Settings mostra operator-only tools error para WebUI users | 1 | Bug | ✅ Resolvido via #5256 |
| [#5219](https://github.com/nearai/ironclaw/issues/5219) | Follow-up: harden activity identity invariants after gate lifecycle refactor | 1 | Engineering | Segue #5145; tighten invariantes pós-batch/direct block paths |
| [#5173](https://github.com/nearai/ironclaw/issues/5173) | Daily ironclaw failure taxonomy — 2026-06-23 (deepseek-v4-flash) | 1 | Benchmarking | Análise de 115 failures — dominado por benchmark defects, não model quality |
| [#5119](https://github.com/nearai/ironclaw/issues/5119) | IronClaw Reborn Local Dogfooding Findings 06/22–06/28 | 1 | Dogfooding | Issue central de rastreamento de usabilidade local — ongoing |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | [Reborn] "Ask each time" tool permission falha com authorization error + duplicate approval | 1 | Bug | UX severa — loop de aprovação infinito |
| [#5260](https://github.com/nearai/ironclaw/issues/5260) | [Tracking] Reborn personal memory & self-learning — full system | 0 | Epic | North-star tracking; checkboxes living todo |
| [#5261](https://github.com/nearai/ironclaw/issues/5261) | [EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth | 0 | Epic | Continua #4628; foco Reborn stack only |
| [#5264](https://github.com/nearai/ironclaw/issues/5264) | Memory #3537 follow-ups: native SQL storage-port, host-managed flow, third-party lane | 0 | Engineering | Extension Manifest v2 follow-ups; já em PR #5205 |

### Análise de demandas da comunidade

- **UX/Onboarding do Reborn WebUI**: A comunidade reportou consistentemente falhas de discoverability — automations sem guidance (#4980), approval card sem link para auto-approve global (#5246), timestamps inconsistentes (#5212), freeze de input durante agent response (#5208). Todos com 1 ou 0 comentários mas alta prevalência.
- **Tool permission persistence**: Bugs críticos em aprovação "always allow" (#5243, #5242) e "ask each time" (#5196) indicam que o sistema de permissões do Reborn WebUI ainda não está maduro — endereço com PRs #5256, #5247, #5241.
- **Capacidade e política (capability policy)**: Epic #5261 em andamento com PRs #5262 e #5263 abertos — demanda crescente por controle granular admin/por-usuário.

---

## 5. Bugs e Estabilidade

### Por severidade (baseado em labels e impacto)

**🔴 Alta / P2:**
- [#5196](https://github.com/nearai/ironclaw/issues/5196) — "Ask each time" → authorization error → duplicate approval loop. Severidade alta por loop infinito.
- [#5210](https://github.com/nearai/ironclaw/issues/5210) — Mensagem enviada enquanto approval gate aberto causa warnings repetidos e estado perdido.
- [#5239](https://github.com/nearai/ironclaw/issues/5239) — Scheduler trata stale terminal heartbeat como runner failure (P2 sugerido).
- [#5243](https://github.com/nearai/ironclaw/issues/5243) — "Approve & always allow" não persiste em Settings > Tools.

**🟡 Média:**
- [#5191](https://github.com/nearai/ironclaw/issues/5191) — Mensagens internas de skill orchestration expostas no chat UI.
- [#5189](https://github.com/nearai/ironclaw/issues/5189) — Tool runs bem-sucedidos não mostram activity details enquanto rodam (apenas fails mostram).
- [#5211](https://github.com/nearai/ironclaw/issues/5211) — New responses não auto-scroll para view.
- [#5212](https://github.com/nearai/ironclaw/issues/5212) — Timestamps não persistem após resposta completar.

**🟢 Baixa:**
- [#5237](https://github.com/nearai/ironclaw/issues/5237) — Debug logging inunda Railway com Cranelift/Wasmtime DEBUG output.
- [#5236](https://github.com/nearai/ironclaw/issues/5236) — Commits incluem WebUI v2 dist bundle artifacts (build overhead).
- [#5188](https://github.com/nearai/ironclaw/issues/5188) — Sidebar responsiva precisa de ajuste.

### Estabilidade operacional
O freeze de 4 minutos documentado em [#5206](https://github.com/nearai/ironclaw/pull/5206) (40 concurrent turns → tokio worker pool starvation) foi identificado e está em correção. A investigação de [#5224](https://github.com/nearai/ironclaw/pull/5224) descartou regressão de concorrência no scheduler. O evento de 19:51→19:54:59 foi relevante mas a causa raiz (WASM starving) foi isolada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features identificadas

| # | Título | Escopo | Sinal estratégico |
|---|---|---|---|
| [#5260](https://github.com/nearai/ironclaw/issues/5260) | Reborn personal memory & self-learning — full system | Epic | **North-star product** — memory confiável → scoped → expiring → self-curating → self-learning |
| [#5261](https://github.com/nearai/ironclaw/issues/5261) | [EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth | Epic | **Enterprise multi-tenant** — foco Reborn stack only |
| [#5264](https://github.com/nearai/ironclaw/issues/5264) | Memory #3537 follow-ups: native SQL, host-managed flow, third-party lane, default flip, semantic search | Feature | **Extension Manifest v2** extensões — storage, trust, search |
| [#5246](https://github.com/nearai/ironclaw/issues/5246) | Add global auto-approve shortcut text under approval checkbox | UX

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
## Data: 26 de junho de 2026

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade de desenvolvimento** em 26/06/2026, com 27 issues e 50 PRs atualizados nas últimas 24 horas. Não houve novas releases, mas o ritmo de revisões é intenso — 22 PRs foram merged/fechados e 10 issues resolvidas, indicando um ciclo de desenvolvimento ativo. A comunidade demonstra preocupação particular com **estabilidade do browser automation** (múltiplas regressões relacionadas a processos Chrome) e **performance do frontend** (大会话 arquivos grandes, formatação de mensagens longas). O volume de primeiras contribuições está elevado, sinalizando atratividade do projeto.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O último versionamento stable parece ser `v1.1.12.post2`, com várias issues de bug reportadas nesta versão ainda pendentes de correção. Recomenda-se atenção à publicação de hotfix.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (selecionadas)

| PR | Título | Impacto |
|----|--------|---------|
| [#5534](https://github.com/agentscope-ai/QwenPaw/pull/5534) | refactor(readme): add trending badge | Documentação/marketing |
| [#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) | fix(tui): restore ACP commands and inline approvals | Restaura funcionalidades críticas do TUI após migração AS 2.0 |

### PRs Abertos em Progresso (Under Review)

| PR | Título | Destaque |
|----|--------|----------|
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | feat(context): scroll context manager — durable history + recall REPL | Gerenciamento de contexto via SQLite com recall on-demand; alternativa a compressão por summarization |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | feat(desktop): add Tauri tray behavior | System tray nativo para desktop Windows/macOS via Tauri |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | plugin(datapaw): add data-analysis plugin with 12 BI skills | Plugin de análise de dados com 12 habilidades BI |
| [#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) | feat(channel): add Slack channel with full multimodal & streaming | Integração Slack completa via Socket Mode |

**Avanços Notáveis:**
- **Contexto persistente**: PR #5321 introduz estratégia `scroll` que persiste histórico completo em SQLite ao invés de summarizar, permitindo recall granular de turnos passados via REPL Python
- **Migração Runtime v2**: PR #5443 restaura comandos ACP no TUI após migration, recuperando `/clear`, `/compact`, `/skills`, `/model`
- **Memory System**: PR #5540 refatora auto-memory para tracking baseado em turn markers ao invés de reply_ids

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

| # | Tipo | Título | Comentários | Sinal |
|---|------|--------|-------------|-------|
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Bug | Custom OpenAI-compatible providers don't support function calling | 8 | 🔴 Crítico — quebrando feature central |
| [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) | Bug | Chrome processes not properly closed (browser automation) | 6 | 🔴 Estabilidade do sistema |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Bug | Conversação entra em loop infinito | 5 | 🔴 UX destruidora |
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Bug | Console 长消息排版错乱 | 5 | 🟡 UI/UX |
| [#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455) | Question | Current time deveria ser prefixo por mensagem? | 4 | 🟢 Arquitetura |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | Feature | Scroll context manager (PR) | Review ativo | 🟢 Evolução |

**Análise de Demandas:**

1. **Custom Providers + Function Calling (#5345)**: Comunidade demanda que provedores OpenAI-compatíveis customizados (ex: OMLX) suportem `tools`/`function_calling`. Enquanto Ollama funciona nativamente, provedores customizados têm suporte incompleto. **Demanda alta para extensibilidade**.

2. **Browser Automation Estabilidade (#2733, #5520)**: Múltiplas issues sobre vazamento de processos Chrome — tanto no start quanto no stop. Impacta usuários de `browser_use` em produção. **Preocupação recorrente com resource management**.

3. **Performance Frontend (#5479, #5480)**: Arquivos de sessão grandes (>500KB) crasham o frontend; mensagens longas com Markdown têm formatação corrompida. **Dores de escalabilidade**.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 Críticos (afetam funcionalidade core / crash)

| # | Título | Status | Detalhes |
|---|--------|--------|----------|
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Conversação entra em loop infinito | OPEN | Pensamento lógico do modelo causa死循环 |
| [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) | browser_use stop() vaza Chrome renderers | OPEN | Regressão do PR #2843; ~150-210MB por ciclo |
| [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) | Browser tool falha em Linux com IME | OPEN | Timeout ao detectar Chrome em desktop environments específicos |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Sessões >500KB crasham frontend | OPEN | Render error; apenas deletar sessão resolve temporariamente |

#### 🟡 Moderados (workaround disponível ou impacto parcial)

| # | Título | Status | Workaround |
|---|--------|--------|------------|
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Custom providers sem function calling | CLOSED | OMLX não funciona; Ollama funciona |
| [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) | Chrome Helper acumula | CLOSED | — |
| [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | Moderation error cacheado como rejects_media | OPEN | Após retry,媒体 requests são silenciosamente droppadas |
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Markdown longo com formatação quebrada | OPEN | Switch de tab "cura" temporariamente |
| [#5541](https://github.com/agentscope-ai/QwenPaw/issues/5541) | Ollama não acessa cloud models | OPEN | Configurado https://ollama.com + apikey não funciona |

#### 🟢 Menores (cosméticos / UX)

| # | Título | Status |
|---|--------|--------|
| [#5501](https://github.com/agentscope-ai/QwenPaw/issues/5501) | Send button desalinhado em widescreen | CLOSED |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Autofill do browser hijack search input | OPEN |

**Padrões Identificados:**
- **Browser automation**: 3+ issues relacionadas a Chrome lifecycle (#2733, #5520, #5528)
- **MiniMax integration**: Erro de cache de content moderation (#5505) — má classificação de erro transient
- **Frontend performance**: Sensível a dados crescentes (sessões, mensagens)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Estratégico? | Notas |
|---|--------|---------------|-------|
| [#5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) | Support installing plugins via pip from PyPI | 🟢 Sim | Alinhamento com ecossistema Python padrão |
| [#5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) | Support agentscope2.0 dynamic model switching | 🟢 Sim | Resiliência a rate limits; failover automático |
| [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) | Custom model ordering within providers | 🟢 Sim | UX customization; drag-and-drop |
| [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | Hard cap on tool result size (defense-in-depth) | 🟡 Sim | Previne context explosion em falhas de LLM |
| [#2188](https://github.com/agentscope-ai/QwenPaw/issues/2188) | Add Responses format support for custom providers | 🟢 Sim | Suporte a OpenAI Responses API |
| [#5503](https://github.com/agentscope-ai/QwenPaw/issues/5503) | Add delete current conversation button | 🟡 UX | Facilitar retry de conversas |

### Sinais Fortes de Direção

1. **Plugins via PyPI (#5484)**: Discussão menciona Hermes Agent como referência. Indica movimento para standards Python mais fortes.

2. **Dynamic Model Switching (#5527)**: Usuário demanda failover automático quando modelo principal tem rate limit. Indica maturidade para casos enterprise.

3. **Context Management Evolved**: PR #5321 (scroll context) + PR #5499 (timestamp per-message) indicam reavaliação profunda de como contexto é gerenciado — possivelmente preparando terreno para sessões longas mais robustas.

4. **Slack Channel (#5193)**: Em review ativo, adicionaria segundo canal de mensageria major (após Discord). Expande base de usuários.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade Browser** | Chrome processes não morrem, consumindo memória até exaustão | Alta — múltiplas issues + regressão |
| **Performance Frontend** | Sessões grandes crasham UI; mensagens longas com formatação quebrada | Alta — afeta power users |
| **Custom Providers** | Incompatibilidade de function calling em providers OpenAI-compatíveis | Média — bloqueia integrações específicas |
| **Windows Experience** | Arquivos não fazem preview local; intranet instalação falha | Média — casos edge mas dolorosos |
| **Documentation** | Docs lentos para carregar (#4188 — CLOSED) | Baixa mas documentada |

### Cenários de Uso Emergent

1. **Browser Automation em Production**: Usuários rodam `browser_use` em loops longos — vazamento de Chrome é crítico
2. **Enterprise Deployment**: Questões sobre DingTalk privado (#4887), intranet (#5497), Slack corporativo (#5193)
3. **Complex Agents**: Function calling com providers customizados; loops infinitos em思考 lógica

### Satisfação Geral

**Sinais Positivos:**
- Comunidade ativa contributing (PRs de first-time contributors)
- Issues sendo rapidamente closed quando resolvidas
- 10 issues fechadas em 24h indica responsiveness

**Sinais de Atenção:**
- 3 bugs de browser automation recorrentes — possível dívida técnica
- Performance frontend sensível a escala — pode limitar adoção em用例 enterprise

---

## 8. Backlog que Merece Atenção

### Issues Antigas ou Sem Resposta

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) | Chrome processes não fechados | 2026-04-01 | ~86 dias | 🔴 Alta |
| [#2188](https://github.com/agentscope-ai/QwenPaw/issues/2188) | Responses format support | 2026-03-24 | ~94 dias | 🟢 Média |
| [#904](https://github.com/agentscope-ai/QwenPaw/issues/904) | Discord should download attachments | 2026-03-07 | ~111 dias | 🟡 Média |
| [#4188](https://github.com/agentscope-ai/QwenPaw/issues/4188) | Documentation too slow | 2026-05-11 | ~46 dias | 🟢 Baixa |

### Issues com Discussão Técnica Profunda

| # | Título | Complexidade | Notas |
|---|--------|---------------|-------|
| [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | Hard cap on tool result size | Alta | Cascading failure pattern descrito detalhadamente; defense-in-depth necessário |
| [#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455) | Timestamp per-message vs env context | Arquitetural | Decisão de design com implicações em prompt caching |
| [#5523](https://github.com/agentscope-ai/QwenPaw/issues/5523) | spawn_subagent missing from Runtime 2.0 | Migração AS 2.0 | 4 regressões de migração identificadas |

### Recomendações de Priorização

1. **Imediato**: Resolver regressões de browser automation (#5520, #5528) — risco de estabilidade
2. **Curto prazo**: Frontend performance (#5479, #5480) — afeta retenção de power users
3. **Médio prazo**: Scroll context manager (#5321) — pode resolver muitos problemas de contexto
4. **Longo prazo**: PyPI plugins (#5484), Slack channel (#5193) — expansão de ecossistema

---

## Métricas Resumidas (24h)

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 17 | Neutra |
| Issues fechadas | 10 | Positiva |
| PRs abertos | 28 | Neutra |
| PRs merged/closed | 22 | Positiva |
| Novas releases | 0 | — |
| First-time contributors (PRs) | 5+ | Positiva |
| Bugs críticos abiertos | 4 | Atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-26

---

## 1. Panorama do dia

O ecossistema ZeroClaw apresenta **alta atividade** nesta terça-feira, com 48 issues e 50 PRs atualizados nas últimas 24h, indicando intenso fluxo de desenvolvimento. Não houve novos lançamentos, mas múltiplas PRs de tamanho XL estão em revisão, sugerindo preparativos para as versões 0.8.2 e 0.8.3. A comunidade demonstra maturidade na governança, com RFCs bem estruturados e debates活跃 em issues de segurança. O backlog reflete uma organização clara em trilhas (v0.8.2, v0.8.3, v0.9.0), com 116 itens abertos na trilha de segurança da v0.9.0.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

A ausência de releases não indica estagnação — pelo contrário, as trilhas ativas sugerem que o time está em fase de consolidação antes de publicar:
- **v0.8.2**: Em fase de "release-support" com 32 itens de queue não-plugin ([#8181](https://github.com/zeroclaw-labs/zeroclaw/issues/8181))
- **v0.8.3**: Em desenvolvimento ativo, cobrindo runtime, gateway, web e onboarding ([#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071), [#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070))
- **v0.9.0**: Fase de planejamento, focada em auth, segurança e breaking changes ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje (6 total)

| # | Título | Tipo | Severidade | Status |
|---|--------|------|------------|--------|
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | Remove remote-markdown-link block from skill audit | enhancement | high | CLOSED |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypasses parent's tool allowlist | bug (S0) | high | CLOSED |
| [#7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873) | Telegram media groups should dispatch as one agent request | bug | medium | CLOSED |
| [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) | Kimi Code targets dead endpoint | bug (S1) | medium | CLOSED |
| [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | voice_wake.rs missing `subject` field — breaks --all-features build | bug (S2) | low | CLOSED |
| [#7087](https://github.com/zeroclaw-labs/zeroclaw/issues/7087) | `zeroclaw models set` falls through to doctor | bug | medium | CLOSED |

### Avanços significativos

1. **Segurança crítica resolvida**: [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — O bypass do tool allowlist do delegate (S0) foi fechado, garantindo que sub-agentes respeitem a política de ferramentas do pai.

2. **Provedor corrigido**: [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) — Kimi Code agora aponta para o endpoint correto (`https://api.kimi.com/coding/v1`), resolvendo regressions de API.

3. **Telegram aprimorado**: [#7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873) — Media groups no Telegram agora disparam uma única requisição ao agente.

### PRs abertas em destaque (fluxo ativo)

- [#8239](https://github.com/zeroclaw-labs/zeroclaw/pull/8239) — `feat(config): add independent delegate targets` (XL, in-progress)
- [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) — Context window bar para TUI, gateway e CLI (L, high risk)
- [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) — WASM component-model plugin host code (XL, high risk)
- [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) — SOP out-of-band approval plane (L, high risk)
- [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) — Two-path onboard tree (LLM + deterministic) (XL, high risk)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | Tipo | Status |
|---|--------|-------------|------|--------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 11 | RFC | in-progress |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | RFC: Supply chain signing - PGP, hermetic builds, SLSA | 8 | RFC | blocked |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer lighter ZeroClaw core through external integrations | 5 | RFC | blocked |
| [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) | Add independent delegate mode for specialist handoffs | 4 | Feature | in-progress |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child processes accumulate on daemon | 4 | Bug | accepted |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram appends images in each request | 4 | Bug | accepted |

### Análise dos temas quentes

**1. Governança e processo (#6808)** — O RFC de Work Lanes busca automatizar roteamento de trabalho e organização de labels, reduzindo carga manual dos mantenedores. Indica maturidade organizacional.

**2. Segurança de supply chain (#8177)** — Com 8 comentários, a comunidade demonstra preocupação com integridade de builds via PGP, hermetic builds e SLSA. Alto risco e bloqueado.

**3. Arquitetura modular (#6165)** — Proposta de externalizar integrações (GitHub, JIRA, GWS-CLI) para reduzir o core. Reflete desejo de simplicidade.

**4. Delegação avançada (#8238, #7743)** — Dois issues paralelos sobre delegação entre agentes, sugerindo demanda real para arquiteturas multi-agente.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (por severidade)

| Severidade | # | Título | Status |
|------------|---|--------|--------|
| **S0** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypasses parent's tool allowlist | CLOSED |
| **S1** | [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) | Kimi Code dead API endpoint | CLOSED |
| **S2** | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio orphan processes (heartbeat leak) | accepted |
| **S2** | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | fill-translations leak-repair leaves stale entries | open |
| **S2** | [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | voice_wake.rs missing `subject` field | CLOSED |
| **S2** | [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) | Approval attribution race condition | accepted |
| **S2** | [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) | [IMAGE:data:...] sent as plain text in native tool calling | open |

### Análise de estabilidade

**Pontos positivos:**
- Bug S0 crítico (#8279) foi identificado e fechado rapidamente
- Regressão do Kimi Code (S1) resolvida
- Build break em `--all-features` (#8236) corrigido

**Pontos de atenção:**
- **Memory leak em MCP** (#5903): Comportamento acumulativo (um orphan por tick de heartbeat). Com `interval_minutes = 30`, pode gerar ~48 processos órfãos por dia em produção.
- **Race condition em sessões** (#7737): Concurrent approvals podem sobrescrever estado de channel, potencialmente causando perda de atribuição de aprovação.
- **Token inflation** (#8327): Marcadores `[IMAGE:data:...]` enviados como texto puro com provedores nativos, inflando contagem de tokens desnecessariamente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em destaque

| # | Título | Domínio | Prioridade | Status |
|---|--------|---------|-----------|--------|
| [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) | Independent delegate mode para specialist handoffs | agent, tool | p2 | in-progress |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Replace React/Vite com Rust→Wasm framework | web, ci | p3 | RFC |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode para bounded autonomous session work | agent, runtime | p2 | accepted |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | OCI-Compliant Container Registries for WASM plugins | wasm, architecture | p3 | RFC |
| [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) | Capability-gated WASI hardware host functions | wasm, security | p2 | accepted |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | Wasm-first plugin runtime (default-on) | wasm, security | p2 | blocked |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | SkillForge orphaned — finish or remove? | skillforge | p2 | blocked |
| [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | OpenRouter model fallbacks array | provider | p2 | needs-review |

### Tendências de roadmap observadas

1. **WebAssembly como destino**: Múltiplas RFCs (#8132, #8135, #7497, #8187) convergem para Wasm-first, indicando mudança arquitetural estratégica.

2. **Multi-agência e delegação**: Funcionalidades de delegação independente (#8238, #7743, #8303) apontam para arquiteturas de agente mais sofisticadas.

3. **Segurança como prioridade**: Supply chain signing (#8177), capability-gated WASI (#8187), e tool allowlist enforcement (#8279) mostram foco em hardening.

4. **Orquestração de plugins**: "Everything is a plugin" (#6489) busca unificar o sistema de extensões.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (via issues)

| Dor | Issue | Severidade |
|-----|-------|------------|
| **Memory leak em produção** (MCP stdio orphans) | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | p1 |
| **Kimi Code quebrado** (endpoint 404) | [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) | p1 |
| **Telegram duplica mensagens** (imagens) | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | p2 |
| **Delegation viola política de segurança** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | p1 |
| **Build falha com --all-features** | [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | p2 |

### Cenários de uso emergentes

1. **Agentes especialistas**: Demandas por delegação com políticas independentes (#8238, #7743) indicam arquiteturas de agent-as-a-service.

2. **Integração empresarial**: Skills para Jira, GitHub (#6165) e provedores alternativos (OpenRouter fallbacks [#8138]) sugerem adoção em contextos corporativos.

3

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*