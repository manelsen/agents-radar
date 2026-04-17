# Resumo diário do ecossistema de agentes de IA 2026-04-17

> Issues: 13 | PRs: 14 | Projetos cobertos: 7 | Gerado em: 2026-04-17 02:01 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-17

---

## 1. Panorama do Dia

O projeto NullClaw registrou **alta atividade** nas últimas 24h, com 27 eventos combinados (13 issues e 14 PRs). **Nenhum lançamento** foi publicado, mas **11 PRs foram merged/fechados**, indicando que a equipe está focada em estabilização pós-release. A base de código foi migrada para **Zig 0.16** (PR #823), marcando uma atualização significativa de infraestrutura. Apenas **1 issue permanece aberta** (#826), enquanto o restante foi fechado, sugerindo bom throughput de triagem. A atividade recente concentra-se em **correções de segurança, estabilidade de sandboxes Docker/Linux e melhorias na experiência CLI**.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

A equipe parece estar em fase de preparação para um próximo release, dado o volume de PRs merged (11) e a migração para Zig 0.16.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (11 total)

| PR | Autor | Tema | Impacto |
|----|-------|------|---------|
| [#823](https://github.com/nullclaw/nullclaw/pull/823) | DonPrus | **Migração para Zig 0.16** | Atualização de stdlib, compat layer refatorado em módulos dedicados (`shared`, `fs`, `net`) |
| [#805](https://github.com/nullclaw/nullclaw/pull/805) | manelsen | **Segurança: Linux sandbox auto-detect** | Corrigido bug onde `firejail`/`bubblewrap` eram aceitos apenas por `--version` sem capacidade real de sandbox |
| [#807](https://github.com/nullclaw/nullclaw/pull/807) | manelsen | **Hardening web: pairing tokens** | Tokens de pareamento agora expiram; remoção de código fixo local; redução de risco SSRF/DNS rebinding |
| [#801](https://github.com/nullclaw/nullclaw/pull/801) | manelsen | **Segurança: Docker sandbox mount args** | Resolve #799, #779, #784 — argumento `-v` vazio consertado via factory |
| [#824](https://github.com/nullclaw/nullclaw/pull/824) | wanderingmeow | **UTF-8 truncation em compaction** | Extensão de `truncateUtf8` para 6 locais; consolidação de helpers duplicados |
| [#806](https://github.com/nullclaw/nullclaw/pull/806) | manelsen | **Provider fallback responses API** | Resolved #766 — fallback automático quando `/chat/completions` retorna 404 |
| [#803](https://github.com/nullclaw/nullclaw/pull/803) | manelsen | **OTEL local container hostnames** | Resolved #800 — permite `otel`, `host.containers.internal` em endpoints |
| [#804](https://github.com/nullclaw/nullclaw/pull/804) | manelsen | **Agent routing: unbound sessions** | Resolved #793 — sessões não vinculadas agora ficam no `main` agent |
| [#802](https://github.com/nullclaw/nullclaw/pull/802) | manelsen | **CLI turns → SQLite history** | Resolved #797 — persistência de turns CLI no store |
| [#790](https://github.com/nullclaw/nullclaw/pull/790) | fakhriaunur | **Responses API tool schema** | Corrigido formato de tool schema e null error handling |
| [#810](https://github.com/nullclaw/nullclaw/pull/810) | mark-os | **SysVinit fallback** | Adicionado suporte a init scripts LSB-compliant |

**Destaque:** O PR #823 (Zig 0.16) é a mudança de infraestrutura mais significativa, com refatoração do compat layer.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| Issue | Autor | Tema | Comentários | Status |
|-------|-------|------|-------------|--------|
| [#793](https://github.com/nullclaw/nullclaw/issues/793) | lestan | System Prompt inheritance incorreta | 3 | CLOSED |
| [#791](https://github.com/nullclaw/nullclaw/issues/791) | dadapapapa | Shell não funciona no Linux físico | 3 | CLOSED |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | eabase | Instalação Zig no Debian | 3 | CLOSED |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | eabase | `nullclaw version` mostra "dev" | 3 | CLOSED |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) | lestan | OTEL quebrado por constraint HTTPS | 2 | CLOSED |

### Análise de Demandas

**Padrões identificados:**
- **Usuários Debian/Tailscale** (eabase): 3 issues relacionadas a setup, versão e gateway — indica community user ativo com ambiente específico
- **Segurança de sandbox** (múltiplas issues: #791, #799, #779, #784): Problema recorrente com Docker detection e mount args
- **API compatibility** (#766, #773): Usuários tentam integrar providers OpenAI-compatíveis customizados

---

## 5. Bugs e Estabilidade

### Bugs Reportados e Corrigidos

| Severidade | Issue | Tema | Status |
|------------|-------|------|--------|
| **Alta** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | Shell não executa no Linux físico | CORRIGIDO (PR #805) |
| **Alta** | [#799](https://github.com/nullclaw/nullclaw/issues/799) | Docker "invalid empty volume spec" | CORRIGIDO (PR #801) |
| **Alta** | [#779](https://github.com/nullclaw/nullclaw/issues/779) | Shell tool quebrado pós-update (brew) | CORRIGIDO (PR #801) |
| **Alta** | [#784](https://github.com/nullclaw/nullclaw/issues/784) | Docker config error (chinês) | CORRIGIDO (PR #801) |
| **Média** | [#793](https://github.com/nullclaw/nullclaw/issues/793) | System prompt inheritance bug | CORRIGIDO (PR #804) |
| **Média** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | OTEL HTTPS constraint quebrou | CORRIGIDO (PR #803) |
| **Média** | [#766](https://github.com/nullclaw/nullclaw/issues/766) | Custom provider 404 fallback | CORRIGIDO (PR #806) |
| **Média** | [#773](https://github.com/nullclaw/nullclaw/issues/773) | Responses API tool schema | CORRIGIDO (PR #790) |
| **Média** | [#797](https://github.com/nullclaw/nullclaw/issues/797) | History vazio com SQLite | CORRIGIDO (PR #802) |
| **Menor** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | Versão mostra "dev" | REPORTADO |

**Resumo:** 10 bugs reportados nas últimas 24h. Todos (exceto #821) já foram corrigidos via PR. Padrão de bugs concentra-se em **Docker sandbox detection** e **API provider compatibility**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos (3)

| PR | Autor | Tema | Complexidade |
|----|-------|------|--------------|
| [#829](https://github.com/nullclaw/nullclaw/pull/829) | DonPrus | **Config/models CLI para admins** | `nullclaw config show --json`, `nullclaw models summary --json` |
| [#828](https://github.com/nullclaw/nullclaw/pull/828) | manelsen | **Doctor: diagnostics CLI** | Mensagens melhoradas para channel status |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | yanggf8 | **Cron subagent + history + JSON output** | Scheduler DB-backed, `cron list --json`, skill/agent/shell job types |

### Análise de Roadmap

- **PR #783 (Cron engine)** é a feature mais substancial aberta: motor de scheduling com histórico, suporte a JSON output e timezone offsets — indica demanda por automação
- **PR #829 (Admin CLI)** adiciona capacidade de inspeção programática de config, alinhado com uso em produção
- **Issue #826** (Tailscale gateway) permanece aberta — indica necessidade de documentação ou fix para integração de rede

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Descrição | Cenário |
|-----|-----------|---------|
| **Instabilidade pós-update** | Shell tool quebrou após update via brew (#779) | Usuários Linux que usam brew como package manager |
| **Docker sandboxes falham** | Erro "invalid empty volume spec" (#799, #784) | Ambientes onde Docker detection falha |
| **OTEL não funciona em containers** | Constraint HTTPS impede coleta local (#800) | Monitoring em stacks containerizadas |
| **History vazio após replies** | `nullclaw agent` responde, mas history fica vazio (#797) | Sessões SQLite em Docker |
| **Versionamento quebrado** | `nullclaw version` retorna "dev" (#821) | Usuários que instalam da source |
| **Gateway Tailscale não inicia** | `Failed to start tunnel: NotImplemented` (#826) | VPS com Tailscale |

### Padrões de Satisfação/Insatisfação

- **Insatisfação alta** com breaking changes em sandboxes Docker/Linux
- **Demanda por compatibilidade** com providers customizados e Responses API
- **Usuários ativos** (eabase) reportando múltiplos issues em sequência — potencialmente power user ou early adopter
- **Boa receptividade**: todos os bugs reportados foram addressed rapidamente (mesmo dia)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Pendentes

| Issue | Tema | Idade | Prioridade |
|-------|------|-------|------------|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | Tailscale gateway `NotImplemented` | 2 dias | **Média** — documentação ou feature request |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | Versão "dev" ao compilar da source | 2 dias | **Média** — UX issue, não afeta funcionalidade core |
| [#599](https://github.com/nullclaw/nullclaw/issues/599) | Test failure com curl `--proto` restrito | ~30 dias | **Baixa** — test edge case |

### Recomendação

- **#826** precisa de resposta da equipe (indica se é documentação a fazer ou feature planejada)
- **#821** é quick win de DX — adicionar version hash ou number ao build da source

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 12 |
| PRs abertos | 3 |
| PRs merged/fechados | 11 |
| Releases | 0 |
| Taxa de resolução de bugs | 90% (9/10) |
| PRs de segurança | 3 |

---

**Veredicto de Saúde:** O projeto está em **boas condições operacionais** com alta taxa de resolução de issues. A migração para Zig 0.16 (PR #823) representa um marco técnico importante. O foco atual é estabilização de sandbox backends e compatibilidade com providers. Nenhuma issue crítica ou regressão permanece em aberto.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes AI Open Source

**Data de referência:** 2026-04-17

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes AI open source demonstra **saúde operacional elevada** em 17 de abril de 2026, com seis projetos ativos (Hermes Agent sem dados disponíveis). A maioria dos projetos encontra-se em fase de **estabilização pós-feature**, com foco em correção de bugs críticos e refinamento de integrações. Observa-se convergência técnica em três eixos: streaming SSE/WebSocket para respostas em tempo real, multi-provider fallback para resiliência operacional, e expansão de canais de comunicação. O destaque negativo fica com IronClaw (segurança) e ZeroClaw (S0 context leakage), enquanto NanoBot e CoPaw lideram em volume de contribuições. Nenhum projeto publicou releases formais estáveis nas últimas 24h, indicando sincronização para ciclos de release mais organizados.

---

## 2. Comparação de Atividade

| Projeto | Issues (ativas/fechadas 24h) | PRs (abertos/merged 24h) | Releases (24h) | Bugs Críticos Abertos | Avaliação de Saúde |
|---------|:----------------------------:|:------------------------:|:--------------:|:---------------------:|:------------------:|
| **NullClaw** | 1 / 12 | 3 / 11 | 0 | 0 | ✅ Boa |
| **NanoBot** | 9 / 3 | 29 / 31 | 0 | 2 (críticos) | ✅ Sólida |
| **PicoClaw** | 15 / 3 | 20 / 10 | 1 nightly | 3 (alta) | ⚠️ Ativa com atenção |
| **IronClaw** | ~50 | ~50 (8 merged) | 0 (2 staging) | 5 (P1) | 🔴 Preocupante |
| **CoPaw** | 29 / 21 | ~50 (30 merged) | 1 beta | 3 (crítica) | ✅ Boa |
| **ZeroClaw** | ~41 (16 resolvidas) | ~50 (5 merged) | 0 | 1 (S0) | ⚠️ Alerta |

**Métricas consolidadas do ecossistema:**

- **Volume total de atividade:** ~270+ PRs atualizados, ~150+ issues movimentadas
- **Taxa de resolução média:** 40-60% das issues fechadas dentro de 24h
- **Releases formais:** 0 projetos (ZeroClaw com cargo publish quebrado; NullClaw/NanoBot preparando)
- **Bugs de segurança:** 2 projetos afetados (IronClaw #2491, ZeroClaw #5415)

---

## 3. Posicionamento do Projeto Principal

### NanoBot como líder de volume

| Dimensão | NanoBot | Comparação |
|----------|---------|------------|
| **Throughput de PRs** | 31 merged/24h | Líder absoluto; 3x a média dos pares |
| **Multi-provider** | SSE streaming + LM Studio + Gemini + MiniMax | Mais maduro |
| **Comunidade** | 6 issues com 4+ comentários | Engajamento qualificado |
| **Foco técnico** | API parity e resiliência | Diferenciação clara |

### NullClaw como líder de especialização

| Dimensão | NullClaw | Comparação |
|----------|---------|------------|
| **Linguagem** | Zig 0.16 (migração completa) | Único projeto em linguagem compilada moderna |
| **Sandbox** | Docker/Linux hardening referência | Foco em segurança de execução |
| **CLI** | Doctor, config show, models summary | Experiência developer premium |
| **Taxa de resolução** | 90% (9/10 bugs) | Melhor eficiência de triagem |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Streaming e Tempo Real

```
┌─────────────────────────────────────────────────────────────────┐
│                    MULTIPLOS PROJETOS CONVERGEM                 │
├─────────────────────────────────────────────────────────────────┤
│  NanoBot   → #3222 SSE streaming para /v1/chat/completions      │
│  ZeroClaw  → #5733 WebSocket persistente + model quick-switcher │
│  CoPaw     → #3487 Servidor ACP (Zed/OpenCode streaming)       │
│  IronClaw  → #2555 Tool output visibility e timing             │
└─────────────────────────────────────────────────────────────────┘
```

**Análise:** A funcionalidade de streaming emerge como requisito de tabela para parity com clientes ожидающие respostas progressivas. NanoBot resolve com SSE nativo; ZeroClaw com WebSocket; CoPaw via protocolo ACP.

### 4.2 Multi-Provider e Resiliência

| Projeto | Status de Multi-Provider |
|---------|--------------------------|
| **NanoBot** | Gemini (bug #3206), MiniMax (#2373, 25 dias), LM Studio (#3185) |
| **NullClaw** | Provider fallback automático (#806), Responses API tool schema (#790) |
| **PicoClaw** | Groq compatibility quebrado (#748) |
| **IronClaw** | Google Sheets/Slides OAuth bloqueado (#2229, #1503) |

**Sinal de mercado:** Usuários enterprise demandam failover automático entre provedores. NanoBot é o mais avançado, mas ainda enfrenta bugs de compatibilidade.

### 4.3 Expansão de Canais

```
CoPaw:     Signal + WhatsApp + SIP (voz) simultaneamente
ZeroClaw:  Matrix E2EE + Mattermost + Webhook
PicoClaw:  WhatsApp Native (LID migration quebrado) + Web
IronClaw:  Telegram + Slack + WASM channels
```

**Padrão:** Investimento massivo em canais alternativos ao Discord/Telegram padrão, indicando segmentação de mercado específica.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Arquitetura |
|---------|------------------|-------------|
| **NullClaw** | DevOps/infra, security-conscious | Compiled (Zig), sandbox-first |
| **NanoBot** | Desenvolvedores API, integradores | Python, API-first |
| **PicoClaw** | Usuários finais, self-hosted | Go-like simplicity |
| **IronClaw** | Enterprise, multi-tenant | Microserviços, WASM |
| **CoPaw** | Mercado chinês, multi-modal | Modular, channels |
| **ZeroClaw** | Self-hosted power users | Rust, microkernel |

### 5.2 Por Diferenciação Técnica

| Projeto | Vantagem Competitiva | Risco |
|---------|---------------------|-------|
| **NullClaw** | Zig = performance + safety memory | Ecossistema Zig imaturo |
| **NanoBot** | Volume de contributors + streaming | Technical debt em providers |
| **PicoClaw** | Simplicidade de deploy | Limitações em casos complexos |
| **IronClaw** | Engine v2 + multi-tenant | 5 P1s = instabilidade |
| **CoPaw** | Multi-canal + memória extensível | QwenPaw vs CoPaw confusão |
| **ZeroClaw** | RFC-driven governance + microkernel | Bug S0 sem resolução |

### 5.3 Matriz de Maturidade

```
                    BAIXA Maturidade          ALTA Maturidade
                ┌──────────────────────┬──────────────────────┐
  ALTA Complex. │     IronClaw         │     ZeroClaw         │
                │  (recursos ricos,    │  (RFC-driven,        │
                │   mas instável)      │   microkernel)       │
                ├──────────────────────┼──────────────────────┤
  BAIXA Complex.│    PicoClaw          │     NanoBot          │
                │  (focado, limited    │  (volume alto,       │
                │   scope)             │   maduro)            │
                └──────────────────────┴──────────────────────┘
                
                Legenda: NullClaw = outlier (Zig)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs merged/24h | Interpretação |
|:-------:|---------|:--------------:|---------------|
| 1 | **NanoBot** | 31 | Hiper-ativo; equipe grande ou automação |
| 2 | **CoPaw** | 30 | Muito ativo; múltiplas features simultâneas |
| 3 | **NullClaw** | 11 | Focado; qualidade > quantidade |
| 4 | **IronClaw** | 8 | Moderado; focado em estabilização |
| 5 | **ZeroClaw** | 5 | Baixo; momento de建筑设计 |
| 6 | **PicoClaw** | 10 | Bom para projeto menor |

### 6.2 Qualidade de Triagem

| Projeto | Taxa de bugs resolvidos | Bugs antigos (>30 dias) | Interpretação |
|---------|:------------------------:|:------------------------:|---------------|
| **NullClaw** | 90% (9/10) | 0 críticas | Excelente processo |
| **NanoBot** | ~70% estimado | #2373 (25 dias) | Razoável |
| **PicoClaw** | ~50% | #28 (65 dias), #618 (55 dias) | Stagnation risk |
| **IronClaw** | Baixa (5 P1s) | Várias | Processo sobrecarregado |
| **CoPaw** | 42% (21/50) | #1563 (32 dias), #1059 (39 dias) | Volume > capacidade |
| **ZeroClaw** | ~40% | #2503 (46 dias), #3100 (38 dias) | RFC overhead |

### 6.3 Engajamento Comunitário Qualificado

| Projeto | Issues com 4+ comentários | Features com 2+ 👍 | Observação |
|---------|:-------------------------:|:------------------:|------------|
| **NanoBot** | 4 | 1 | Discussões técnicas profundas |
| **ZeroClaw** | 2 | 2 | RFCs geram debate estruturado |
| **PicoClaw** | 0 | 2 (#618, #28) | Feature requests estáveis |
| **CoPaw** | 1 (#3309) | 0 | Q&A domina |
| **IronClaw** | 1 (#2229) | 0 | Suporte domina |
| **NullClaw** | 0 | 0 | Triagem rápida = baixa fricção |

---

## 7. Sinais de Tendência

### 7.1 Emergentes (Confirmados por Múltiplos Projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Streaming-first APIs** | NanoBot (#3222), ZeroClaw (#5733), CoPaw (#3487) | Clientes expectam respostas parciais; batch-only é недостатком |
| **Memory extensível** | CoPaw (#3500), NanoBot (#3227), ZeroClaw (#4668) | Historico flat não escala; necessidade de backend dedicado |
| **Multi-canal unificado** | CoPaw (Signal+WhatsApp+SIP), IronClaw (WASM), ZeroClaw (Matrix) | Usuários querem hub único; fragmentação de canais é dor |
| **Self-hosted / on-prem** | PicoClaw (#618 self-upgrade), NullClaw (sandbox), CoPaw (#3507 uninstall) | Privacidade e controle dominam requisitos |

### 7.2 Incipientes (Sinais Fracos)

| Tendência | Sinal | Confiabilidade |
|-----------|-------|:--------------:|
| **Browser automation nativa** | PicoClaw #2410 (CDP) | Baixa — 1 projeto |
| **Voice/SIP channels** | CoPaw #3449 | Baixa — 1 projeto |
| **Múltiplos modelos por task** | NanoBot #3156, #3135 | Média — 2 PRs |
| **Agent teams / multi-agente** | CoPaw #3224, NanoBot #3230 | Média — demanda emergente |

### 7.3 Declínio ou Estagnação

| Tendência | Evidência | Projeto Afetado |
|-----------|-----------|:---------------:|
| **Groq compatibility** | #748 (65 dias, 0 progresso) | PicoClaw |
| **Google OAuth integrations** | #2229, #1503, #2411 | IronClaw |
| **MiniMax API** | #2373 (25 dias, bug persistente) | NanoBot |
| **QwenPaw vs CoPaw branding** | #3309 (11 comentários) | CoPaw |

### 7.4 Recomendações Estratégicas

```
┌─────────────────────────────────────────────────────────────────┐
│                   PARA DESENVOLVEDORES                           │
├─────────────────────────────────────────────────────────────────┤
│ • NanoBot: melhor para API integrations e streaming             │
│ • NullClaw: melhor para segurança e performance                 │
│ • ZeroClaw: melhor para self-hosted enterprise (quando S0       │
│   for resolvido)                                                 │
│ • CoPaw: melhor para multi-canal China/occidente                │
│ • PicoClaw: evitar em produção até Groq compatibility resolver │
│ • IronClaw: evitar até P1s de segurança serem addressed         │
└─────────────────────────────────────────────────────────────────┘
```

---

**Nota:** Hermes Agent (nousresearch/hermes-agent) não forneceu dados para análise nesta edição.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-17

---

## 1. Panorama do dia

O NanoBot apresenta **alta atividade de desenvolvimento** em 17 de abril de 2026, com 60 PRs atualizados nas últimas 24h (31 mergeados/fechados) e 12 issues movimentadas (3 fechadas). A equipe demonstrou foco em **estabilidade e robusteza**, com PRs críticos sendo abertos e mergeados no mesmo dia — incluindo correções para loops de email SMTP e problemas de race conditions em AgentLoop. O projeto não lançou novas versões, mas o pipeline de PRs está saudável, sinalizando preparo para uma próxima release. A comunidade segue ativa com demandas claras de melhorias em memória, multi-provider e streaming.

---

## 2. Lançamentos

**Nenhuma release oficial** foi publicada nas últimas 24h. O projeto não registrou novos tags ou versões.

> 📌 *Nota:* A ausência de releases não indica estagnação — o volume de PRs fechados (31) sugere que funcionalidades estão amadurecendo no branch `nightly` para um próximo release coordenado.

---

## 3. Progresso do Projeto

### PRs fechados/mergeados hoje (31 total):

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| #3222 | [feat(api): SSE streaming para /v1/chat/completions](https://github.com/HKUDS/nanobot/pull/3222) | Habilita `stream=true` no endpoint de API, conectando callbacks `on_stream`/`on_stream_end` existentes na camada de API | **Alta** — Feature aguardada; fecha #3218 |
| #3171 | [feat(channels): Discord channel-based filtering](https://github.com/HKUDS/nanobot/pull/3171) | Adiciona `allowChannels` ao DiscordConfig para restringir resposta a canais específicos | **Média** — Melhora controle administrativo em servidores |
| #3179 | [feat(agent,websocket,status,channels): WebSocket tooling](https://github.com/HKUDS/nanobot/pull/3179) | Enhance tool events, session lifecycle, reasoning content, chat_id resumption | **Alta** — Melhora estabilidade WebSocket |
| #3185 | [fix: adiciona suporte explícito a LM Studio](https://github.com/HKUDS/nanobot/issues/3185) | Resolve necessidade de workarounds com provider OpenAI genérico | **Média** — Usabilidade |
| #3143 | [CLOSED] Token consolidation error — issue resolvida | Corrigido erro de limite de tokens (71835 > 65536) | **Alta** — Estabilidade |

> **Destaque:** O merge de **#3222 (SSE Streaming)** e **#3179 (WebSocket tooling)** representa avanço significativo na API server, resolvendo defasagem funcional vs. clientes ожидающие streaming.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|-----|-----------|
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Algumas sugestões (status, system prompt, retry, model params, timeout, fallback) | 5 | 0 | Feature request |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | LLM returned error — token consolidation 71835/65536 | 6 | 0 | Bug/crítico |
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | Erro MiniMax API (bad request, invalid function arguments) | 4 | 0 | Bug |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | Proposal: ContextVar for task-local tool routing | 4 | 0 | Arquitetura |
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | Limitações do sistema de memória em projetos longos | 0 | **2** | Feedback/dor |
| [#3220](https://github.com/HKUDS/nanobot/issues/3220) | Infinite empty tool-call loop com gateways não-conformes | 2 | 0 | Bug/crítico |

### Análise das demandas:

**🔹 Multi-provider e resiliência (#3107, #2373, #3206):**
Usuários solicitam fallback entre provedores, retry configurável, timeout ajustável e suporte a múltiplas chaves API. Há relatos de erros com MiniMax e Gemini, indicando necessidade de padronização de tratamento de erros.

**🔹 Memória de longo prazo (#3227):**
Issue com 2 👍 (única reação do dia) levanta problema estrutural: `history.jsonl` + `MEMORY.md` não escala para projetos longos. Usuário elogia a base do código mas aponta limitação crítica.

**🔹 ContextVar para async safety (#2220):**
Proposta arquitetural para isolar contexto de roteamento de tools, sinalizando evolução para cenários multi-thread/concurrent.

---

## 5. Bugs e Estabilidade

### Bugs reportados hoje (por severidade):

#### 🔴 Crítico (acao imediata recomendada)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#3215](https://github.com/HKUDS/nanobot/issues/3215) | **Loop infinito de email SMTP** | Bot responde a próprio email milhares de vezes quando smtp configurado | PR #3231 aberto |
| [#3220](https://github.com/HKUDS/nanobot/issues/3220) | **Infinite empty tool-call loop** | Gateways não-conformes injetam `tool_calls` com `finish_reason` != "tool_calls", causando loop | PR #3225 aberto |

#### 🟠 Alto (impacta funcionalidade principal)

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#3213](https://github.com/HKUDS/nanobot/issues/3213) | GroqTranscriptionProvider ignora `apiBase` do config.json | Só lê `GROQ_BASE_URL` env var | PR #3226 aberto |
| [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider — "Multiple authentication credentials" | Erro 400 por credenciais duplicadas | Aberto |
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | MiniMax API — invalid function arguments (toolcallid) | Erro persistente desde 2026-03-23 | Aberto |

#### 🟡 Médio

| # | Bug | Descrição | Status |
|---|-----|-----------|--------|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | /stop perde user message e tool calls | Ao cancelar tarefa, histórico é perdido | PR aberto |
| #3229 | Erro de bind em `on_retry_wait` | Mensagens de retry vão para cliente indevidamente | PR aberto |

> **Maturidade de bugs:** A equipe respondeu rapidamente — PRs #3231, #3225, #3226 e #3229 abertos no dia, demonstrando processo de triagem eficiente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas hoje:

| # | Feature | Proposta | Alignamento estratégico |
|---|---------|----------|------------------------|
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | Melhorar sistema de memória para projetos longos | Seções com idade via git,上下文 compressão | 🔮 Evolução de memória |
| [#3217](https://github.com/HKUDS/nanobot/issues/3217) | Responder mensagens de outros bots (Discord) | Remover `message.author.bot` check | 🔧 Expansão channel |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | Web App e Mobile APIs | Channel web com UI HTML/CSS/JS bundled | 🔮 Channel público |
| [#3135](https://github.com/HKUDS/nanobot/pull/3135) | Runtime model switching via /model | Trocar LLM sem restart | 🔧 Usabilidade |
| [#3156](https://github.com/HKUDS/nanobot/pull/3156) | Per-phase model overrides (eval/exec) | Modelos separados para avaliação e execução | 🔧 Flexibilidade |
| [#3230](https://github.com/HKUDS/nanobot/pull/3230) | Instance switching in-chat | `/instance local/research` | 🔧 Multi-tenant |
| [#3224](https://github.com/HKUDS/nanobot/pull/3224) | Append-only session transcripts | Persistência configurável | 🔧 Observabilidade |
| [#3212](https://github.com/HKUDS/nanobot/pull/3212) | Git-based section age annotations para MEMORY.md | Staleness detection preciso | 🔮 Evolução de memória |

### Sinais de roadmap inferidos:

1. **Multi-model / runtime switching** — Múltiplos PRs convergindo: #3135, #3156, #3230
2. **Memória inteligente** — #3212, #3227 indicam priorização de evolução do sistema de memória
3. **API parity** — SSE streaming (#3222) + LM Studio (#3185) = completar suporte a diferentes backends
4. **Web channel** — #3030 sugere estratégia de distribuição cross-platform

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

**1. Caixas pretas de estado (#3107):**
> *"1 e 3旨在缓解nanobot当前状态黑盒"* — Tradução: Os itens 1 e 3 visam mitigar a "caixa preta" do estado atual do nanobot. Usuários não sabem quantas tasks estão rodando ou quando retry termina.

**2. Sistema de memória inadequado para projetos longos (#3227, 2 👍):**
> *"在周期较长或项目较大的场景中，现有的记忆系统在保留细节方面有些吃力"* — Em cenários de projetos longos/grandes, o sistema atual tem dificuldades em reter detalhes. Suggestão de melhorar `history.jsonl` e `MEMORY.md`.

**3. Incompatibilidade com API gateways não-OpenAI (#3220, #2373):**
> *"Some API gateways / compatible proxies can return anomalous responses"* — Usuários enfrentam loops infinitos quando provedores retornam `finish_reason` inesperado.

**4. Email loop descontrolado (#3215):**
> *"producing thousands of emails"* — Bug crítico que causa autodestruição por email.

### Cenários de uso emergentes:

- **Multi-instância** (#3230): Usuários querem isolar configs locais vs. research
- **Multi-provider fallback** (#3107): Cenários enterprise precisam resiliência entre provedores
- **Claw team integration** (#3107): Equipes técnicas compartilhando instâncias com parâmetros customizados

### Satisfação:

O usuário #3227 iniciou a issue com **elogio explícito**: *"确实非常喜欢这套代码——整洁、轻巧、容易上手，探索起来是一种享受"* ("realmente gostei muito deste código — limpo, leve, fácil de usar, um prazer explorar").

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução:

| # | Título | Criado | Atualizado | Comentários | Prioridade |
|---|--------|--------|------------|-------------|------------|
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | MiniMax API error — invalid function arguments | 2026-03-23 | 2026-04-16 | 4 | 🟠 Alta |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ContextVar proposal — async safety | 2026-03-18 | 2026-04-16 | 4 | 🟡 Média |
| [#2397](https://github.com/HKUDS/nanobot/pull/2397) | Enhance cron tool with name parameter | 2026-03-23 | 2026-04-16 | — | 🟡 Média |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | /stop loses session data | 2026-03-26 | 2026-04-16 | — | 🟠 Alta |

### Análise:

- **#2373 (MiniMax)** está aberto há ~25 dias com 4 comentários — parece precisar de resposta da equipe sobre compatibilidade de API
- **#2220 (ContextVar)** é proposta arquitetural de alta qualidade; merece decisão de aceita/recusa para orientar contribuidores
- **#2526 (/stop)** é bug funcional há ~22 dias — usuário criou PR #2526 mas precisa de review

### Recomendações de triagem:

1. **Responder #2373** —用户提供 logs detalhados; equipe pode fechar como "won't fix" (provedor não-conforme) ou documentar workaround
2. **Avaliar #2220** — Se aceito, pode servir como base para outros PRs de async safety (#3232)
3. **Review #2526** — PR existe mas aguarda merge; priorizar para próxima release

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 9 | Neutra |
| Issues fechadas | 3 | ✅ Positiva |
| PRs abertos | 29 | — |
| PRs fechados/mergeados | 31 | ✅ Positiva |
| Novas releases | 0 | Neutra |
| Bugs críticos abertos | 2 | ⚠️ Atenção |
| PRs de segurança/estabilidade abertos | 4 (#3231, #3232, #3225, #3229) | ✅ Positiva |
| Features alinhadas ao roadmap | 8 | ✅ Positiva |

---

## Conclusão

O NanoBot demonstra **saúde sólida** em 2026-04-17. A atividade é intensa (60 PRs), a equipe responde rapidamente a bugs críticos (2-3 PRs de hotfix abertos no mesmo dia), e o roadmap está emergindo organicamente das demandas da comunidade — com foco em multi-provider, memória inteligente e streaming. A prioridade imediata deve ser review dos PRs de segurança (#3231, #3225) e triagem de issues antigas (#2373, #2220) para manter a confiança da comunidade.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Falha ao gerar o resumo.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-17

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de manutenção e evolução** neste ciclo de 24 horas. Foram registradas 30 contribuições via PRs (20 abertas, 10 fechadas/merged) e 18 issues atualizadas (15 abertas, 3 fechadas), sinalizando uma comunidade ativa. O build noturno `v0.2.6-nightly.20260417.ba08d523` foi liberado, mantendo o ritmo de entrega contínua. Destaque para a fusão de PRs críticos de autenticação (`--no-browser`) e refatorações estruturais de agentes, enquanto issues de longa data sobre auto-upgrade e compatibilidade com Groq continuam gerando debate significativo.

---

## 2. Lançamentos

### Nightly Build: v0.2.6-nightly.20260417.ba08d523

| Item | Detalhe |
|------|---------|
| **Tag** | `nightly` |
| **Data** | 2026-04-17 |
| **Status** | Automatizado — uso sob cautela |

**Notas:**
- Build automatizado para o branch `main`
- Changelog completo: [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
- Pode conter funcionalidades em desenvolvimento sem garantias de estabilidade

**Observação:** Não há release estável nova além do nightly. Usuários em produção devem aguardar tag formal caso necessitem de regressões controladas.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (10 total)

| PR | Tipo | Título | Impacto |
|----|------|--------|---------|
| **#2549** ✅ | enhancement | feat(auth): add no-browser option for OAuth login | Adiciona flag `--no-browser` ao comando `picoclaw auth login` para ambientes headless/remotos. Resolve demandas de automação e containers ([#2533](https://github.com/sipeed/picoclaw/issues/2533)) |
| **#2500** ✅ | build | remove useless backend output for platform-token | Limpeza de output desnecessário no backend |
| **#2503** ✅ | refactor | make agent loop support parallel and update docs | Refatora `AgentLoop` para processamento paralelo de mensagens, melhorando throughput em cenários multi-usuário |

### PRs Abertos de Destaque

| PR | Tipo | Título | Estado |
|----|------|--------|--------|
| **#2563** | enhancement | feat(web): download files on frontend | Adiciona suporte a download de anexos enviados via ferramenta `send_file` no canal web |
| **#2410** | enhancement | feat(tool): add browser automation via Chrome DevTools Protocol (CDP) | Implementa BrowserTool com automação via WebSocket CDP; atende roadmap Issue #293 |
| **#2537** | enhancement | feat(agent): add context usage ring indicator and /context command | Expõe `/context` built-in com estatísticas de uso de tokens e tamanho do histórico |
| **#957** | bug | fix(config): prevent default ModelList from overriding user config | Corrige herança incorreta de `api_base`默认值 que causava 401 em configurações parciais |
| **#2551** | refactor | standardize channel identification and decouple name from provider type | Separa ChannelType de config keys para permitir múltiplas instâncias do mesmo provider |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Título | Comentários | 👍 | Tendência |
|-------|------|--------|:-----------:|:--:|-----------|
| **#28** | enhancement | Feat Request: LM Studio Easy Connect | 14 | 1 | Discussão ativa há 2 meses — comunidade solicita integração nativa com LM Studio |
| **#618** | enhancement | [Task] self-upgrade support | 8 | 2 | Feature crítica para distribuição contínua; lista de tarefas aberta |
| **#748** | bug | Groq API compatibility: tool call format error | 8 | 0 | Bug de compatibilidade API — formato `<function=name{...}>` não aceito pelo Groq |
| **#629** | bug/enhancement | Didn't retry if meet LLM call failed | 7 | 0 | Falta retry em HTTP 500 causa tarefas travadas |
| **#1058** | bug | Cron deliver=false tasks silently discard LLM response | 5 | 1 | Resposta do agente descartada silenciosamente quando `deliver=false` |
| **#571** | enhancement | Add progress feedback during tool execution in chat | 5 | 0 | Usuários sem feedback em operações longas (buscas web, shell) |

### Análise de Demandas

**Padrões Identificados:**
1. **Autonomia operacional** — Issues #618, #2549, #2533 indicam forte demanda por automação sem interação browser, essencial para DevOps e ambientes cloud-native
2. **Feedback ao usuário** — Issue #571 reflete necessidade de UX mais responsiva em operações agentivas
3. **Integrações de provider** — LM Studio (#28) e Groq (#748) mostram que a comunidade busca diversificação além do OpenAI

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade inferred via engagement)

| Severidade | Issue | Domínio | Descrição |
|:----------:|-------|---------|-----------|
| **Alta** | [#748](https://github.com/sipeed/picoclaw/issues/748) | provider | Groq API rejeita tool calls gerados pelo modelo — todas as chamadas falham com 400 `tool_use_failed` |
| **Alta** | [#629](https://github.com/sipeed/picoclaw/issues/629) | provider | HTTP 500 do servidor causa deadlock — sem retry, tarefa fica travada |
| **Alta** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) | cron | Mensagens de cron com `deliver=false` descartadas silenciosamente — usuário não recebe resposta |
| **Média** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | channel | WhatsApp LID-migrated accounts têm mensagens silenciosamente dropadas por mismatch de formato |
| **Média** | [#2541](https://github.com/sipeed/picoclaw/issues/2541) | channel | 4 defeitos compostos em `group_trigger.mention_only` no whatsapp_native — completamente quebrado |
| **Média** | [#93](https://github.com/sipeed/picoclaw/issues/93) | config | Gateway não usa config.json quando executado como system service |
| **Média** | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | channel | Re-autenticação manual frequente na Web UI (PERMISSION_DENIED) |
| **Baixa** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | provider/config | Múltiplas credenciais duplicadas na config |
| **Baixa** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | channel | Gateway start abnormal no Debian 13 |

### Bugs Recentemente Fechados

- **#1249** ✅ — SKILL.md não era auto-injetado no contexto LLM — **corrigido**
- **#957** (open, mas PR associado) — Modelo padrão sobrescreve config parcial do usuário — **PR aberto**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Título | Domínio | Potencial Impacto |
|-------|--------|---------|-------------------|
| **#28** | LM Studio Easy Connect | provider | Integração simplificada com provedor local/self-hosted |
| **#618** | self-upgrade support | build | Atualização automática via apt/winget/opkg — distribuição oficial |
| **#571** | Add progress feedback during tool execution | agent/tool | UX crítica para long-running tasks |
| **#1067** | Integrate Authula for Authentication/Authorization | config | Camada de auth/authorization para ambientes multi-usuário |
| **#2546** | Support OAuth 2.1 + PKCE for MCP servers from dashboard | channel | Adicionar MCP via URL sem shell/Node.js |
| **#2410** (PR) | Browser automation via CDP | tool | Automação web nativa, alinhado com roadmap oficial |

### Sinais de Roadmap

1. **CDP BrowserTool** (#2410) — Alinhado com roadmap oficial Issue #293; representa expansão de capacidades de automação
2. **Self-upgrade** (#618) — To-do list detalhado com suporte multi-plataforma; indica prioridade de distribuição profissional
3. **Múltiplas instâncias de channel** (#2551) — Refatoração fundamental para arquiteturas avançadas

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Frequência | Issue de Referência |
|-----|:----------:|---------------------|
| Falta de feedback em operações longas | Alta | #571, #1058 |
| Auth via browser é blocker em servers/containers | Alta | #2533, #2549 (resolvido) |
| Retry inexistente em falhas transitórias | Alta | #629, #748 |
| Configuração parcial causa erros cryptic (401) | Média | #957 (PR aberto) |
| WhatsApp Native LID-migration breaks allow_from | Média | #2540, #2541 |
| Re-autenticação frequente na Web UI | Média | #2302 |

### Cenários de Uso Observados

- **Edge/Gateway deployments**: Usuários rodando PicoClaw em VPS, containers e services systemd sem acesso a browser local
- **Multi-provider**: Discussão ativa sobre LM Studio como provider alternativo
- **Cron + Agent**: Uso de jobs agendados com agents que geram respostas longas
- **Self-hosted MCP**: Demanda por integração de MCP servers externos via OAuth

### Satisfação/Insatisfação

**Pontos Positivos:**
- Comunidade ativa com 14+ comentários em feature requests
- Resposta rápida a PRs de enhancement (--no-browser merged no mesmo dia)
- Roadmap documentado e seguido (CDP automation)

**Pontos de Atenção:**
- Issues de estabilidade do canal WhatsApp Native (LID migration, group triggers)
- Falta de retry automático gera frustração em ambientes de produção
- Config system service (#93) continua problemático

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Abandonadas

| Issue | Idade Aprox. | Título | Motivo de Atenção |
|-------|:------------:|--------|-------------------|
| **#618** | ~55 dias | self-upgrade support | Feature crítica; lista de tarefas aberta mas sem贡獻 |
| **#28** | ~65 dias | LM Studio Easy Connect | Feature request popular; sem movimiento concrete |
| **#93** | ~63 dias | Gateway not using config.json with system service | Bug funcional; workaround manual necessário |

### PRs Estagnados

| PR | Idade Aprox. | Título | Risco |
|----|:------------:|--------|-------|
| **#500** | ~57 dias | [refactor] use line bot sdk | Redução de manutenção; aguardando revisão |
| **#957** | ~47 dias | fix(config): prevent default ModelList | Bug funcional (401); PR aberto mas não mergeado |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Interpretação |
|-----------|:-----:|---------------|
| **Issues ativas (24h)** | 15 | Alta |
| **PRs abertos (24h)** | 20 | Alta — incluindo 12 dependabot updates |
| **PRs merged (24h)** | 10 | Muito boa taxa de throughput |
| **Release noturna** | 1 | Entrega contínua ativa |
| **Bugs alta severidade** | 3 | Requerem atenção prioritária |
| **Feature requests活跃** | 6+ | Roadmap em evolução |

---

*Relatório gerado automaticamente para 2026-04-17 com base em dados do GitHub do projeto [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-17

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** em 17 de abril de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O foco principal está na estabilização do engine v2 e da camada web gateway, evidenciando-se por múltiplas promoções de staging e correções de regressões. Não houve lançamentos formais hoje, mas o volume de PRs merged/fechados (8) e a atividade em issues de segurança (especialmente #2491 sobre bypass de scanning de secrets) indicam um sprint ativo de bugfixing. A equipe demonstra priorização clara de questões de estabilidade e segurança sobre novas features, alinhando-se a um período pré-release de maior maturização do produto.

---

## 2. Lançamentos

**Nenhuma release formal registrada nas últimas 24 horas.**

O projeto continua em ciclo de staging com múltiplas promoções automáticas:
- [PR #2554](https://github.com/nearai/ironclaw/pull/2554): Promoção staging → `staging-promote/3ac8e5f7-24536700939` (2026-04-16 23:13 UTC)
- [PR #2553](https://github.com/nearai/ironclaw/pull/2553): Promoção staging → `staging-promote/ea150927-24536700939` (2026-04-16 22:12 UTC)

> **Nota:** A ausência de releases tagged indica que o projeto está em fase de validação interna antes de disponibilização pública, com builds disponíveis apenas em ambiente staging.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje

| PR | Escopo | Tamanho | Risco | Contribuidor | Resumo |
|----|--------|---------|-------|--------------|--------|
| [#2515](https://github.com/nearai/ironclaw/pull/2515) | gateway, auth, pairing | XL | médio | core | Unificação do onboarding, auth gates e pairing flows — corrige regressões de trust boundary |
| [#2512](https://github.com/nearai/ironclaw/pull/2512) | Slack relay, OAuth | XL | alto | core | Correção do state lookup no OAuth callback do Slack relay |

### PRs Abertas de Alto Impacto

| PR | Escopo | Tamanho | Risco | Contribuidor | Resumo |
|----|--------|---------|-------|--------------|--------|
| [#2561](https://github.com/nearai/ironclaw/pull/2561) | Telegram channel | M | médio | regular | Fix: owner_id armazenado como string ao recuperar settings no restart |
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | engine, CodeAct | L | alto | core | Suporte a FINAL-await + proteção contra runaway loops |
| [#2530](https://github.com/nearai/ironclaw/pull/2530) | skills, activation | M | médio | core | Pipeline de feedback de ativação + idempotência no install |
| [#2529](https://github.com/nearai/ironclaw/pull/2529) | HTTP tool, security | L | médio | core | Redação de credenciais em HTTP tool + recording interceptor |
| [#2547](https://github.com/nearai/ironclaw/pull/2547) | routines | M | baixo | regular | Cadence obrigatório e guardrails expostos |
| [#2555](https://github.com/nearai/ironclaw/pull/2555) | gateway, tool output | XL | médio | core | Fix na visibilidade e timing da saída de ferramentas |
| [#2560](https://github.com/nearai/ironclaw/pull/2560) | v2 activity shell | XL | médio | core | Shell de atividade v2-aware com ticker de jobs/missions |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

1. **[#2229](https://github.com/nearai/ironclaw/issues/2229)** — Google Sheets OAuth blocked (9 comentários)
   - **Tópicos:** Autenticação OAuth 2.0, error 400 invalid_request
   - **Análise:** Problema recorrente em integrações Google Suite; indica necessidade de padronização de OAuth flow

2. **[#2491](https://github.com/nearai/ironclaw/issues/2491)** — Engine V2 bypasses secret scanning (1 comentário, P1)
   - **Tópicos:** Segurança, bypass de safety checks, tokens enviados direto ao LLM
   - **Análise:** Vulnerabilidade crítica — API keys e tokens podem vazar para LLMs

3. **[#1997](https://github.com/nearai/ironclaw/issues/1997)** — Add Slack App to marketplace (1 comentário, P1)
   - **Tópicos:** Distribuição, onboarding
   - **Análise:** Demanda de UX — usuários querem app pré-configurado

4. **[#2541](https://github.com/nearai/ironclaw/issues/2541)** — Agent fails to invoke tools (1 comentário)
   - **Tópicos:** Agent reasoning, tool invocation
   - **Análise:** Falha em summarization tasks após processamento de 3-5 minutos

### Temas Recorrentes Identificados

- **Tool Schema Discovery:** 7 issues relacionadas (#1331, #1330, #1325, #1338, #1337, #1334, #1332) — todas do autor henrypark133, indicando esforço sistemático de melhoria de ergonomia de ferramentas
- **WASM Channels:** 4 issues novas (#2556, #2557, #2558, #2559) — relacionadas a lifecycle e auth de channels

---

## 5. Bugs e Estabilidade

### Por Severidade (P1 — Críticos)

| Issue | Escopo | Descrição | Link |
|-------|--------|-----------|------|
| #2491 | safety, agent | Engine V2 bypasses inbound secret scanning — tokens enviados direto ao LLM | [Link](https://github.com/nearai/ironclaw/issues/2491) |
| #1997 | channel/wasm | Adicionar Slack App ao marketplace | [Link](https://github.com/nearai/ironclaw/issues/1997) |
| #1998 | channel/wasm | Slack connect flow quebrado | [Link](https://github.com/nearai/ironclaw/issues/1998) |
| #2410 | channel/web | Dashboard atualiza em loop e limpa conteúdos | [Link](https://github.com/nearai/ironclaw/issues/2410) |
| #2541 | agent | Agent não invoca tools para tasks de summarization | [Link](https://github.com/nearai/ironclaw/issues/2541) |

### Por Severidade (P2 — Altos)

| Issue | Escopo | Descrição | Link |
|-------|--------|-----------|------|
| #2229 | extensions, secrets | Google Sheets OAuth blocked — error 400 | [Link](https://github.com/nearai/ironclaw/issues/2229) |
| #2411 | channel/web, channel/wasm | Telegram bot token save não funciona | [Link](https://github.com/nearai/ironclaw/issues/2411) |
| #1503 | extensions | Google Slides integration failed | [Link](https://github.com/nearai/ironclaw/issues/1503) |
| #2285 | channel/web | Mensagens desaparecem no page refresh | [Link](https://github.com/nearai/ironclaw/issues/2285) |

### Por Severidade (P3 — Médios)

| Issue | Escopo | Descrição | Link |
|-------|--------|-----------|------|
| #2404 | channel/web | Page refreshes muito frequente | [Link](https://github.com/nearai/ironclaw/issues/2404) |
| #2413 | llm | HTTP 400 transient errors | [Link](https://github.com/nearai/ironclaw/issues/2413) |
| #2412 | safety, secrets | 'Potential secret leak' warnings flooding logs | [Link](https://github.com/nearai/ironclaw/issues/2412) |
| #2281 | agent | Bot ignora condições temporais | [Link](https://github.com/nearai/ironclaw/issues/2281) |
| #2282 | agent | Bot sobrescreve instruções do usuário | [Link](https://github.com/nearai/ironclaw/issues/2282) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR | Escopo | Feature | Link |
|----|--------|---------|------|
| #1446 | llm | Suporte a Aliyun Coding Plan | [Link](https://github.com/nearai/ironclaw/pull/1446) |
| #2019 | channel | Native Matrix channel com E2EE opcional | [Link](https://github.com/nearai/ironclaw/pull/2019) |
| #2168 | credentials | Path-based credential matching para auth per-endpoint | [Link](https://github.com/nearai/ironclaw/pull/2168) |
| #1764 | integrations | Abound demo — Responses API, credential injection, skills | [Link](https://github.com/nearai/ironclaw/pull/1764) |

### Melhorias Arquiteturais Identificadas

| Issue | Escopo | Feature Request | Link |
|-------|--------|-----------------|------|
| #1338 | extensions, tool | Tool schema discovery — extension workflow sequencing | [Link](https://github.com/nearai/ironclaw/issues/1338) |
| #1337 | tool/mcp, tool/wasm | Tool schema discovery — on-demand discovery | [Link](https://github.com/nearai/ironclaw/issues/1337) |
| #1334 | tool/builtin | Tool schema discovery — http policy e parameter semantics | [Link](https://github.com/nearai/ironclaw/issues/1334) |
| #1325 | agent, channel/web | Routines UX — create e edit flows | [Link](https://github.com/nearai/ironclaw/issues/1325) |

### Sinais de Priorização Futura

1. **Multi-tenant mode:** [Issue #2559](https://github.com/nearai/ironclaw/issues/2559) — reduzir custo de auth/pairing per-request
2. **Engine v2 maturity:** Maioria dos PRs foca em estabilização v2 (threads, tool output, activity shell)
3. **Credential security:** [PR #2529](https://github.com/nearai/ironclaw/pull/2529) e [Issue #2491](https://github.com/nearai/ironclaw/issues/2491) indicam foco em segurança de credenciais

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Evidência |
|-----------|-----------|-----------|
| **Onboarding quebrado** | Fluxos de conexão OAuth/Slack/Google falham frequentemente | Issues #2229, #1998, #1503, #2411 |
| **Instabilidade web** | Dashboard e chat com problemas de estado e persistência | Issues #2410, #2285, #2404 |
| **Segurança** | Usuários reportam vazamento de warnings e bypass de safety | Issues #2412, #2491 |
| **Agent reliability** | Bot ignora instruções e condições temporais | Issues #2281, #2282, #2541 |
| **Tool invocation** | Model não invoca tools corretamente em certos contextos | Issues #2541, #1331-#1338 |

### Cenários de Uso Problemáticos

1. **Bug Bash 4/16:** Sessão de QA em staging revelou múltiplos P1/P2 ([#2541](https://github.com/nearai/ironclaw/issues/2541), [#2410](https://github.com/nearai/ironclaw/issues/2410), [#2285](https://github.com/nearai/ironclaw/issues/2285))
2. **Integrações Google:** OAuth flow bloqueado impede uso real de Sheets/Slides
3. **Slack integration:** Connect flow quebrado + status messages conflitantes

### Satisfação/Insatisfação

- **Insatisfação alta** em integrações de terceiros (Google, Slack)
- **Preocupação de segurança** evidenciada por issue #2491 (Engine V2 bypass)
- **Requests por melhor UX** em Routines e tool discovery

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| Issue | Criado | Escopo | Descrição | Link |
|-------|--------|--------|-----------|------|
| #1338 | 2026-03-18 | extensions | Tool schema discovery — extension workflow sequencing | [Link](https://github.com/nearai/ironclaw/issues/1338) |
| #1337 | 2026-03-18 | tool/mcp, tool/wasm | Tool schema discovery — on-demand discovery | [Link](https://github.com/nearai/ironclaw/issues/1337) |
| #1334 | 2026-03-18 | tool/builtin | Tool schema discovery — http policy | [Link](https://github.com/nearai/ironclaw/issues/1334) |
| #1331 | 2026-03-18 | agent, tool | Tool schema discovery — create_job ergonomics | [Link](https://github.com/nearai/ironclaw/issues/1331) |
| #1330 | 2026-03-18 | tool/builtin | Tool schema discovery — message routing | [Link](https://github.com/nearai/ironclaw/issues/1330) |
| #1325 | 2026-03-17 | agent, channel/web | Routines UX — create/edit flows | [Link](https://github.com/nearai/ironclaw/issues/1325) |
| #1324 | 2026-03-17 | agent, channel/web | Routines UX — readable summaries | [Link](https://github.com/nearai/ironclaw/issues/1324) |
| #1322 | 2026-03-17 | agent, channel/cli | Routines CLI — align with backend types | [Link](https://github.com/nearai/ironclaw/issues/1322) |
| #1503 | 2026-03-20 | extensions | Google Slides integration failed | [Link](https://github.com/nearai/ironclaw/issues/1503) |
| #1446 | 2026-03-20 | llm | Aliyun Coding Plan support (PR aberta, aguardando merge?) | [Link](https://github.com/nearai/ironclaw/pull/1446) |

### Análise do Backlog

- **7 issues do tema "Tool Schema Discovery"** (#1331-#1338) estão abertas desde 2026-03-17/18 sem resolução, todas marcadas com `risk: medium` e `on hold` — indicam trabalho planejado mas não priorizado recentemente
- **Integração Google Slides** (#1503) desde 2026-03-20 sem movimento — quebra experiência de usuário em integrações productivity
- **PR #1446 (Aliyun)** aberta desde 2026-03-20 com sinal `contributor: new` — pode indicar necessidade de code review mais atencioso para contribuidores externos

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| **Volume de atividade** | Alto (50 issues + 50 PRs/24h) | Neutro |
| **Bugs P1 abertos** | 5 ativos | Preocupante |
| **Segurança** | 2 issues críticas (bypass safety, secret warnings) | Alerta |
| **Integrações** | 4+ integrações quebradas ou incompletas | Preocupante |
| **Velocidade de merge** | 8 PRs fechadas/24h | Positivo |
| **Staging promotions** | 2 nas últimas 24h | Positivo |

---

*Relatório gerado em 2026-04-17 com base em dados do GitHub do repositório [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 17 de abril de 2026

---

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A taxa de resolução de issues está positiva (21 fechadas vs 29 abertas), e 30 PRs foram merged ou fechados, indicando um ritmo de desenvolvimento intenso. A release v1.1.2-beta.2 foi publicada com correções de estabilidade. A comunidade demonstra interesse crescente em integrações de canais (Signal, WhatsApp, SIP) e melhorias na memória extensível. Bugs críticos como `write_file` truncando conteúdo e `AGENT_UNKNOWN_ERROR` estão em discussão ativa.

---

## 2. Lançamentos

### v1.1.2-beta.2
| Item | Detalhes |
|------|----------|
| **Data** | 17 de abril de 2026 |
| **Commits** | 2 |
| **Status** | Beta — em teste |

**Changes included:**

| PR | Autor | Descrição |
|----|-------|-----------|
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) | @ekzhu | `fix:` registra requisições do AgentApp no TaskTracker para evitar cancelamento de tarefas em background |
| [#3454](https://github.com/agentscope-ai/QwenPaw/pull/3454) | @xieyxclack | Bump de versão para 1.1.2b2 |

**Breaking Changes:** Nenhuma identificada.  
**Notas de migração:** Nenhuma necessária para esta versão beta.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje

| PR | Autor | Tipo | Impacto |
|----|-------|------|---------|
| [#3511](https://github.com/agentscope-ai/QwenPaw/pull/3511) | @zhijianma | `refactor(logging)` | Unificação e centralização do caminho e nomenclatura dos arquivos de log do projeto |
| [#3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) | @octo-patch | `fix(tools)` | Permite `ToolInfo.icon = None`, eliminando erro 500 em `/api/tools` |
| [#3438](https://github.com/agentscope-ai/QwenPaw/pull/3438) | @jilin6627-spec | `fix` | Compatibilidade completa de `tool_choice="auto"` com vLLM |
| [#2994](https://github.com/agentscope-ai/QwenPaw/pull/2994) | @joe2643 | `fix(workspace)` | Preserva canais durante hot-reload, evitando desconexão de WhatsApp/Signal/Telegram |
| [#2995](https://github.com/agentscope-ai/QwenPaw/pull/2995) | @joe2643 | `feat(channels)` | Mensagem de resposta com citação do original para WhatsApp e Signal |
| [#2962](https://github.com/agentscope-ai/QwenPaw/pull/2962) | @joe2643 | `feat(channels)` | Canal WhatsApp via neonize-qwenpaw (substitui #2946, #2962) |

**PRs Abertos em Desenvolvimento Avançado:**

| PR | Autor | Tipo | Descrição |
|----|-------|------|-----------|
| [#3512](https://github.com/agentscope-ai/QwenPaw/pull/3512) | @zhijianma | `feat(plugin)` | Sistema de plugins — enhancement do sistema existente |
| [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) | @walker83 | `feat(memory)` | Sistema de backend de memória extensível (mem0, Zep, LangMem) via plugin |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | @xuanrui-L | `feat(acp)` | Servidor ACP — expõe QwenPaw como endpoint ACP para Zed/OpenCode |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | @yuanxs21 | `feat` | Modo Plan — integração do PlanNotebook do AgentScope |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | @shaohuaxi | `feat(channels)` | Canal SIP com suporte a voz (pyVoIP/LiveKit), STT/TTS streaming |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| #3309 | Dúvidas sobre qwenpaw e copaw após update para 1.1.0 | Question | 11 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3309) |
| #1563 | write_file trunca conteúdo grande | Bug | 6 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/1563) |
| #3011 | Tarefas longas param silenciosamente | Bug | 6 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3011) |
| #2757 | Canal 企业微信 desconecta frequentemente | Question | 5 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/2757) |
| #3462 | AGENT_UNKNOWN_ERROR | Question | 5 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3462) |

### Análise das Demandas

**Confusão QwenPaw vs CoPaw (#3309):** Usuários reportam dificuldade em distinguir os dois produtos após atualização. A separação entre `.qwenpaw` e `.copaw` em paths diferentes gera confusão. Este é um problema de **DX (Developer Experience)** que requer documentação clara ou unificação.

**Escalabilidade de Memória e Multi-Agente (#3224):** Feature request detalhado para "CoPaw Agent Teams" — sistema de multi-agente auto-evolutivo com coordenação via linguagem natural. Demonstra demanda por cenários de uso corporativo mais complexos.

**Protocolo de Comunicação ACP (#1059):** Suporte ao ACP (Agent Communication Protocol) para integração bidirecional com Codex, Claude Code e OpenCode. Indica estratégia de ecossistema.

---

## 5. Bugs e Estabilidade

### Bugs Reportados por Severidade

| Severidade | Count | Exemplos |
|------------|-------|----------|
| 🔴 **Crítica** | 3 | `#3506` AttributeError em `/api/console/chat`; `#3481` erro 500 em `/api/tools` com icon=null; `#3489` BadRequestError em API Anthropic-compatible |
| 🟠 **Alta** | 4 | `#1563` write_file truncando arquivos; `#3011` tarefas longas param silenciosamente; `#3450` multi-agente não executa; `#3468` console congela |
| 🟡 **Média** | 5 | `#3435` URL duplicada em download; `#3279` pipeline executa duas vezes; `#3484` UI de busca corrompida em /skills; `#3506` MCP config não funciona |
| 🟢 **Baixa** | 2 | `#3493/#3490` ReadTimeout em streaming; `#3460` bug em chat_with_agent |

### Bugs Críticos Detalhados

**#3506 — AttributeError em `/api/console/chat`**  
`AgentRequest` objeto não tem atributo `channel`. Afeta usuários rodando via Docker. Sem workaround documentado.

**#3489 — Anthropic API 400 BadRequestError**  
Modelos compatíveis com Anthropic (Claude via Kimi) falham por formatos inválidos de mensagens. Causa: valores `None` em mensagens e tool_calls.

**#3011 — Tarefas longas param silenciosamente**  
Com qwen3 coder plus (aliyun coding plan), modelo para antes de executar comandos. 100% reprodutível. Nenhum erro em frontend/backend.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Feature | Tipo | Link | Sinais de Prioridade |
|---|---------|------|------|---------------------|
| #3224 | CoPaw Agent Teams — multi-agente auto-evolutivo | Enhancement | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Alta — feature request detalhado com arquitetura |
| #3437 | Suporte a API Kimi Code | Enhancement | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3437) | Média — modelo popular na China |
| #3470 | Auto-evolução similar ao Hermes Agent | Enhancement | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3470) | Média — tendência de mercado |
| #3507 | Desinstalação completa do QwenPaw Local | Enhancement | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3507) | Média — experiência de usuário |
| #3503 | Batch enable/disable de skills no frontend | Enhancement | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3503) | Baixa — UX improvement |

### PRs de Feature em Desenvolvimento

| PR | Feature | Status | Link |
|----|---------|--------|------|
| #3500 | Backend de memória extensível | Aberto | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3500) |
| #3487 | Servidor ACP (Zed/OpenCode) | Under Review | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3487) |
| #2904 | Modo Plan (PlanNotebook) | Under Review | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/2904) |
| #3449 | Canal SIP com voz | Open, first-time-contributor | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3449) |
| #3508 | Canal Signal | Aberto | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3508) |
| #3498 | Canal WhatsApp | Aberto | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3498) |
| #3509 | Suporte multimodal (imagens/arquivos) | Aberto | [GitHub](https://github.com/agentscope-ai/QwenPaw/pull/3509) |

**Observação:** Três PRs simultâneos para canais de mensagem (Signal, WhatsApp, SIP) indicam foco em **expansão de canais de comunicação**. Feature de memória extensível (#3500) prepara terreno para integração com serviços externos como mem0 e Zep.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Problema | Frequência | Impacto |
|-----------|----------|------------|---------|
| **Estabilidade de tarefas longas** | Tarefas de coding param sem erro | Recorrente (qwen3 coder plus 100%) | Alto — bloqueia uso de produção |
| **Confusão de produtos** | Usuários não entendem diferença qwenpaw/copaw | Múltiplos reportes | Médio — atrito de onboarding |
| **Canais empresariais** | 企业微信 desconecta frequentemente | Crônico | Médio — usuários enterprise |
| **Memória entre sessões** | MCP e encoding esquecidos em nova conversa | Reportado repetidamente | Médio — experiência multi-sessão |
| **Integração local models** | Modelos Qwen输出的XML vs JSON esperado | Específico de ambiente WSL2 | Baixo — caso edge |

### Cenários de Uso Emergentes

1. **Coding agent em produção** — bugs com tarefas longas indicam uso em cenários reais de desenvolvimento
2. **Multi-canal empresarial** — 企业微信, DingTalk, Feishu com desconexões
3. **Multi-agente** — demanda por coordenação de múltiplos agentes
4. **Local models** — interesse em usar modelos locais (llama.cpp, vLLM)

### Satisfação Geral

| Indicador | Status |
|-----------|--------|
| Taxa de resolução de issues (24h) | **42%** (21/50 fechadas) |
| PRs merged (24h) | **30** (60% do total de PRs atualizados) |
| Features em revisão | **5 PRs** em Under Review |
| Bugs críticos abertos | **3** |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criado | Atualizado | Comentários | Prioridade | Link |
|---|--------|--------|------------|-------------|------------|------|
| #1563 | write_file trunca conteúdo grande | 2026-03-16 | 2026-04-16 | 6 | 🔴 Alta | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/1563) |
| #2757 | 企业微信 desconecta frequentemente | 2026-04-01 | 2026-04-16 | 5 | 🟠 Alta | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/2757) |
| #1059 | ACP Support | 2026-03-09 | 2026-04-16 | 4 | 🟠 Alta | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/1059) |

### Issues Sem Atribuição

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|------------|------|
| #3011 | Tarefas longas param silenciosamente | 2026-04-07 | 2026-04-16 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3011) |
| #3462 | AGENT_UNKNOWN_ERROR | 2026-04-16 | 2026-04-16 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3462) |
| #3489 | Anthropic API BadRequestError | 2026-04-16 | 2026-04-16 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3489) |
| #3506 | AttributeError em /api/console/chat | 2026-04-16 | 2026-04-17 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3506) |
| #3510 | MiniMax-M2.7 model error | 2026-04-17 | 2026-04-17 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/3510) |

### Recomendações

1. **#1563** (write_file truncando) precisa de triagem urgente — impacto em uso de coding
2. **#3011** (tarefas longas) deve ser priorizado — reprodutível 100% com modelo específico
3. **#2757** (企业微信) é crônico desde 2026-04-01 — usuário enterprise insatisfeito
4. **#1059** (ACP) tem PR #3487 em revisão — alinhar para merge

---

**Métricas de Saúde Geral:**

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues fechadas/ativas (24h) | 21/29 (42%) | �

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw

**Data:** 2026-04-17
**Repositório:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Panorama do dia

ZeroClaw mantém um nível de atividade intenso e estável. Nas últimas 24 horas, 41 issues e 50 PRs foram atualizados, com 5 PRs merged/fechados e 16 issues resolvidas — indicando fluxo de contribuição saudável. O projeto não emitiu releases neste período, mas segue em transição arquitetural ativa com múltiplos RFCs em progresso (v0.7.0 → v1.0.0). Não há sinais de estagnação; ao contrário, a comunidade demonstra engajamento em bugs críticos, infraestrutura e melhorias de experiência do usuário.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto encontra-se em limbo entre v0.6.9 e v0.7.0, com a transition para o microkernel (split #5559) já merged. A ausência de releases é parcialmente explicada pelo PR [#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811), que identifica que o `cargo publish` do root crate está quebrado após a decomposição workspace. O PR [#5812](https://github.com/zeroclaw-labs/zeroclaw/pull/5812) já propone uma correção gate como solução temporária. Until the workspace split issue is resolved, releases to crates.io will fail. Os usuários devem acompanhar a branch `master` para updates.

---

## 3. Progresso do Projeto

O projeto fechou 16 issues e 5 PRs nas últimas 24h. PRs merged destaque:

| PR | Autor | Mudança | Impacto |
|----|-------|---------|---------|
| [#5700](https://github.com/zeroclaw-labs/zeroclaw/pull/5700) | niedbalski | Adiciona `otel_headers` config para OTLP export autenticado | Permite conexão com backends observability que requerem autorização |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | songchao4218 | Model quick-switcher + WebSocket connection persistente | Melhora UX do Agent Chat no web dashboard |
| [#5714](https://github.com/zeroclaw-labs/zeroclaw/pull/5714) | theonlyhennygod | Promethes + TUI onboarding como opt-in, não default | Reduz dependências e tempo de build |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | rpodgorny | IMAP polling fallback para servidores sem IDLE | Suporta mais provedores de email (Seznam, GMX) |

Issues fechadas representativas:

| Issue | Tema | Resumo |
|-------|------|--------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Bug Web Dashboard | Dashboard acessível após build de `web/`. Resolvido após 14 comentários. |
| [#2555](https://github.com/zeroclaw-labs/zeroclaw/issues/2555) | Azure OpenAI | Suporte via auth_header customizado adicionado |
| [#5784](https://github.com/zeroclaw-labs/zeroclaw/issues/5784) | Matrix media fallback | Fallback inconsistente corrigido |
| [#5798](https://github.com/zeroclaw-labs/zeroclaw/issues/5798) | Webhook standalone | Canal não iniciava sem outro canal configurado |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Título | Comentários | 👍 | Status | Observação |
|-------|--------|-------------|-----|--------|------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard não disponível | 14 | 0 | CLOSED | Bug recorrente; comunidade aguarda resolução definitiva |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | Matrix channel friction tracker | 12 | 2 | CLOSED | Issue guarda-chuva para 8+ fricções no canal Matrix |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | RFC: Intentional Architecture — Microkernel | 8 | 0 | OPEN | Documento estrutural para v0.7.0 → v1.0.0; alto impacto |
| [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | GitHub Copilot como provider | 7 | 0 | OPEN | Demandado por usuários; work around existente |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | Replace TOML i18n with Mozilla Fluent | 3 | 0 | OPEN | Proposta técnica de refatoração i18n |

**Análise:** O tema mais debatido é a estabilidade do web dashboard (#4866), indicando que a experiência web ainda não está madura. O Matrix friction tracker (#4657) mostra investimento contínuo no canal, sinal de priorização. A atividade RFC massiva (6 RFCs criados em 3 dias) demonstra foco em maturidade e profissionalização do projeto para a transição v0.7.0 → v1.0.0.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Exemplos | Status |
|------------|-------|----------|--------|
| **S0** | 1 | Context spillage chat→schedule ([#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)) | OPEN, em progresso |
| **S1** | 2 | Web dashboard não disponível ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)), CLI channel factory não registrada ([#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685)) | 1 CLOSED, 1 OPEN |
| **S2** | 3 | Windows shell flashing console ([#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562)), Prometheus backend não reconhecido ([#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755)), GitHub Copilot provider config ([#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)) | 1 CLOSED, 2 OPEN |
| **S3** | 2 | Dockerfile.debian build failure ([#5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541)), i18n translated docs broken flags ([#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679)) | CLOSED |

### PRs de bug críticos em revisão

| PR | Título | Risk | Autor |
|----|--------|------|-------|
| [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) | fix(shell): guard bypass | HIGH | RyanHoldren |
| [#5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777) | fix(agent): preserve streamed reasoning_content | HIGH | hazyone |
| [#5794](https://github.com/zeroclaw-labs/zeroclaw/pull/5794) | fix(config): preserve WebSocket buffer | MEDIUM | DengHaoke |

**Observação:** O bug S0 de context spillage ([#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)) é um risco de segurança/dados — contexto de chat vaza para tarefas scheduled. Este é o item mais crítico em aberto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em aberto com demanda clara

| Issue | Feature | Channel/Área | 👍 | Comentários |
|-------|---------|--------------|-----|-------------|
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) | Mattermost oncall mode (multi-channel reply) | channel:mattermost | 2 | Feature desejada há >30 dias |
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | MariaDB memory support | runtime/memory | 0 | Demanda de users self-hosted |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | NapCat/OneBot channel | channel:onebot | 0 | Busca por compatibilidade QQ |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms customizados | channel:webhook | 0 | Limita uso com payloads arbitrários |

### RFCs ativos — sinalizam roadmap v0.7.0 → v1.0.0

| RFC | Área | Status |
|-----|------|--------|
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | Intentional Architecture — Microkernel | Draft, in-progress |
| [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) | Engineering Infrastructure — CI/CD | Draft, in-progress |
| [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) | Documentation Standards | Draft, in-progress |
| [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) | Project Governance | Draft, in-progress |
| [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) | Code Health & Production Readiness | Draft |
| [#5615](https://github.com/zeroclaw-labs/zeroclaw/issues/5615) | Contribution Culture | Draft, in-progress |

**Leitura estratégica:** A atividade massiva de RFCs em curto período indica que o projeto está em modo de profissionalização institucional. A ênfase em documentação, governança e cultura de contribuição sinaliza ambição de longo prazo para sustentabilidade. A ausência de releases recente e a preparação para v1.0.0 sugerem uma approaching feature freeze.

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas nos issues

| Dor | Descrição | Issue |
|-----|-----------|-------|
| **Instabilidade do dashboard web** | Usuários recorrentemente reportam "Web dashboard not available" — frustração com onboarding e UI | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508) |
| **Canal Matrix ainda com fricções** | E2EE, retry loops e compatibilidade em salas encriptadas não resolvidos completamente | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) |
| **Configuração de providers complexa** | Onboard não expõe GitHub Copilot; usuários precisam editar config.toml manualmente | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) |
| **Email channel limitado** | Servidores sem IDLE (Seznam, GMX) são inutilizáveis — já addressado em PR | [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) |
| **Observabilidade inacessível** | Prometheus backend não reconhecido mesmo quando configurado; OTLP sem suporte a headers autenticados | [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755) |

### Cenários de uso emergentes

- **Multi-canal com streaming progressivo:** Usuários demandam draft updates em Nextcloud Talk ([#5718](https://github.com/zeroclaw-labs/zeroclaw/pull/5718)) e web UI ([#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733)).
- **Segurança em shell tool:** demandada refinamento com TOTP gate para comandos destrutivos ([#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)).
- **Sessions management:** Usuários querem resetar/deletar sessões programaticamente — tooling adicionado em [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696).

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Atualizado | Status | Severidade |
|-------|--------|--------|------------|--------|------------|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | napcat/onebot channel | 2026-03-02 | 2026-04-16 | OPEN (stale) | enhancement |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms | 2026-03-02 | 2026-04-16 | OPEN (stale) | enhancement |
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | MariaDB memory support | 2026-03-25 | 2026-04-17 | OPEN | enhancement |
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) | Mattermost oncall mode | 2026-03-10 | 2026-04-16 | OPEN | enhancement (2 👍) |

### PRs aguardando revisão

| PR | Título | Labels | Risk | Prioridade |
|----|--------|--------|------|------------|
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | SessionResetTool & SessionDeleteTool | security, tool | HIGH | needs-maintain

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*